"""High-level agent operations: ingest, analyze, report."""

from __future__ import annotations

from datetime import date
from pathlib import Path

from sqlmodel import Session

from .database import get_session
from .email_sender import send_report
from .matcher import analyze
from .models import Receipt, ReceiptItem, Report
from .recognition import parse_receipt
from .report_builder import build_html, build_json


def ingest_receipt(file_path: Path) -> Receipt:
    """Parse a receipt file and persist it. Returns the saved Receipt."""
    parsed = parse_receipt(file_path)

    with get_session() as session:
        receipt = Receipt(
            pdf_filename=file_path.name,
            pdf_path=str(file_path),
            store=parsed.store,
            purchase_date=parsed.purchase_date,
            subtotal=parsed.subtotal,
            total=parsed.total,
        )
        session.add(receipt)
        session.commit()
        session.refresh(receipt)

        for p in parsed.items:
            session.add(
                ReceiptItem(
                    receipt_id=receipt.id,
                    line_no=p.line_no,
                    item_code=p.item_code,
                    name=p.name,
                    quantity=p.quantity,
                    unit_price=p.unit_price,
                    line_total=p.line_total,
                    instant_savings=p.instant_savings,
                )
            )
        session.commit()
        session.refresh(receipt)
        # Eagerly load items so the caller can access them after the session closes.
        _ = list(receipt.items)
        return receipt


def run_analysis(send_email: bool = True, today: date | None = None) -> Report:
    """Run the matcher, build the report, optionally email it, and persist."""
    with get_session() as session:
        result = analyze(session, today=today)
        html = build_html(result)
        json_data = build_json(result)
        sent = False
        err = ""
        if send_email:
            sent, err = send_report(
                subject=f"Costco refund report — ${result.total_savings:.2f} available",
                html=html,
            )
        report = Report(
            eligible_count=len(result.eligible),
            total_savings=round(result.total_savings, 2),
            html=html,
            json_data=json_data,
            sent=sent,
            send_error=err,
        )
        session.add(report)
        session.commit()
        session.refresh(report)
        return report
