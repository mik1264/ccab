"""FastAPI routes: upload receipts, browse data, run the agent on demand."""

from __future__ import annotations

import json
import uuid
from datetime import date
from pathlib import Path

from fastapi import APIRouter, Depends, File, HTTPException, Request, UploadFile
from fastapi.responses import HTMLResponse, RedirectResponse, Response
from fastapi.templating import Jinja2Templates
from sqlmodel import select

from .agent import ingest_receipt, run_analysis
from .auth import require_auth
from .config import settings
from .database import get_session
from .deals import load_from_json
from .matcher import analyze
from .models import Deal, Receipt, Report

router = APIRouter(dependencies=[Depends(require_auth)])
templates = Jinja2Templates(directory=str(Path(__file__).parent / "templates"))

ALLOWED_SUFFIXES = {".pdf", ".png", ".jpg", ".jpeg", ".webp", ".gif"}


@router.get("/", response_class=HTMLResponse)
def index(request: Request):
    with get_session() as session:
        receipts = session.exec(select(Receipt).order_by(Receipt.uploaded_at.desc())).all()
        deals = session.exec(select(Deal).order_by(Deal.valid_to.desc())).all()
        reports = session.exec(select(Report).order_by(Report.run_at.desc()).limit(10)).all()
        analysis = analyze(session)
        latest = analysis.eligible[:20]
    return templates.TemplateResponse(
        request,
        "index.html",
        {
            "receipts": receipts,
            "deals": deals,
            "reports": reports,
            "eligible": latest,
            "total_savings": analysis.total_savings,
            "today": date.today().isoformat(),
        },
    )


@router.post("/upload-receipt")
async def upload_receipt(file: UploadFile = File(...)):
    suffix = Path(file.filename or "").suffix.lower()
    if suffix not in ALLOWED_SUFFIXES:
        raise HTTPException(
            status_code=400,
            detail=f"Unsupported file type {suffix!r}. Use PDF or an image.",
        )
    safe_name = f"{uuid.uuid4().hex}{suffix}"
    target = settings.storage_path / safe_name
    target.write_bytes(await file.read())
    try:
        ingest_receipt(target)
    except Exception as e:  # noqa: BLE001
        target.unlink(missing_ok=True)
        raise HTTPException(status_code=500, detail=f"Receipt parsing failed: {e}") from e
    return RedirectResponse("/", status_code=303)


@router.post("/upload-deals")
async def upload_deals(file: UploadFile = File(...)):
    suffix = Path(file.filename or "").suffix.lower()
    if suffix != ".json":
        raise HTTPException(status_code=400, detail="Deals file must be JSON.")
    try:
        payload = json.loads((await file.read()).decode("utf-8"))
    except Exception as e:  # noqa: BLE001
        raise HTTPException(status_code=400, detail=f"Invalid JSON: {e}") from e
    target = settings.data_path / "deals_uploaded.json"
    target.write_text(json.dumps(payload, indent=2))
    with get_session() as session:
        count = load_from_json(session, target, replace=True)
    return RedirectResponse(f"/?deals_loaded={count}", status_code=303)


@router.post("/load-sample-deals")
def load_sample_deals():
    with get_session() as session:
        count = load_from_json(session, replace=True)
    return RedirectResponse(f"/?deals_loaded={count}", status_code=303)


@router.post("/run-analysis")
def run_analysis_now(send_email: bool = False):
    report = run_analysis(send_email=send_email)
    return RedirectResponse(f"/reports/{report.id}", status_code=303)


@router.get("/reports/{report_id}", response_class=HTMLResponse)
def view_report(report_id: int):
    with get_session() as session:
        report = session.get(Report, report_id)
    if not report:
        raise HTTPException(status_code=404, detail="Report not found")
    return HTMLResponse(report.html)


@router.get("/receipts/{receipt_id}", response_class=HTMLResponse)
def view_receipt(request: Request, receipt_id: int):
    with get_session() as session:
        receipt = session.get(Receipt, receipt_id)
        if not receipt:
            raise HTTPException(status_code=404, detail="Receipt not found")
        items = list(receipt.items)
    return templates.TemplateResponse(
        request,
        "receipt.html",
        {"receipt": receipt, "items": items},
    )


@router.post("/receipts/{receipt_id}/delete")
def delete_receipt(receipt_id: int):
    with get_session() as session:
        receipt = session.get(Receipt, receipt_id)
        if not receipt:
            raise HTTPException(status_code=404, detail="Receipt not found")
        for item in list(receipt.items):
            session.delete(item)
        session.delete(receipt)
        session.commit()
        Path(receipt.pdf_path).unlink(missing_ok=True)
    return RedirectResponse("/", status_code=303)


@router.get("/receipts/{receipt_id}/file")
def download_receipt(receipt_id: int):
    with get_session() as session:
        receipt = session.get(Receipt, receipt_id)
    if not receipt or not Path(receipt.pdf_path).exists():
        raise HTTPException(status_code=404, detail="File not found")
    data = Path(receipt.pdf_path).read_bytes()
    suffix = Path(receipt.pdf_path).suffix.lower()
    media = {
        ".pdf": "application/pdf",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".webp": "image/webp",
        ".gif": "image/gif",
    }.get(suffix, "application/octet-stream")
    return Response(content=data, media_type=media)
