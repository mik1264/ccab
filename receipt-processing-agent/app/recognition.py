"""Receipt OCR via Claude Haiku.

Replaces Amazon Bedrock + Nova in the original AWS design. Sends the
receipt PDF (or image) directly to Claude Haiku 4.5 and gets back a
structured Pydantic object with line items, prices, and savings.
"""

from __future__ import annotations

import base64
from datetime import date
from pathlib import Path
from typing import Literal

import anthropic
from pydantic import BaseModel, Field

from .config import settings

MODEL = "claude-haiku-4-5"

SYSTEM_PROMPT = """You extract structured line-item data from Costco receipts.

Rules:
- Return one entry per scanned product line. Skip subtotal/tax/total/tender lines.
- `name` is the printed item description, normalized (uppercase or title case as printed).
- `unit_price` is the per-unit price BEFORE any "instant savings" deduction.
- `line_total` is the price actually charged for that line (after instant savings).
- If a "/A" coupon or instant savings line follows an item, set `instant_savings`
  to the positive amount that was deducted from that line.
- `quantity` defaults to 1 unless the receipt prints a different quantity.
- `item_code` is the Costco item number when shown (otherwise empty string).
- `purchase_date` is the receipt's printed date (YYYY-MM-DD).
- Be precise with money: parse "12.99" as 12.99, never round.
"""

EXTRACTION_PROMPT = """Extract every product line from this Costco receipt.
Return strict JSON conforming to the provided schema."""


class ParsedItem(BaseModel):
    line_no: int = Field(description="1-based position on the receipt.")
    item_code: str = Field(default="", description="Costco item number if printed.")
    name: str
    quantity: float = 1.0
    unit_price: float = 0.0
    line_total: float = 0.0
    instant_savings: float = 0.0


class ParsedReceipt(BaseModel):
    store: str = "Costco"
    purchase_date: date
    subtotal: float = 0.0
    total: float = 0.0
    items: list[ParsedItem]


def _media_type_for(path: Path) -> tuple[Literal["document", "image"], str]:
    suffix = path.suffix.lower()
    if suffix == ".pdf":
        return "document", "application/pdf"
    if suffix in (".png",):
        return "image", "image/png"
    if suffix in (".jpg", ".jpeg"):
        return "image", "image/jpeg"
    if suffix == ".webp":
        return "image", "image/webp"
    if suffix == ".gif":
        return "image", "image/gif"
    raise ValueError(f"Unsupported receipt format: {suffix}")


def parse_receipt(file_path: Path) -> ParsedReceipt:
    """Read a receipt file and return the parsed structured data."""
    if not settings.anthropic_api_key:
        raise RuntimeError("ANTHROPIC_API_KEY is not set; cannot call Claude Haiku.")

    block_kind, media_type = _media_type_for(file_path)
    encoded = base64.standard_b64encode(file_path.read_bytes()).decode("ascii")
    source = {"type": "base64", "media_type": media_type, "data": encoded}

    client = anthropic.Anthropic(api_key=settings.anthropic_api_key)
    response = client.messages.parse(
        model=MODEL,
        max_tokens=4096,
        system=SYSTEM_PROMPT,
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": block_kind, "source": source},
                    {"type": "text", "text": EXTRACTION_PROMPT},
                ],
            }
        ],
        output_format=ParsedReceipt,
    )
    if response.parsed_output is None:
        raise RuntimeError(
            f"Claude Haiku did not return a parsed receipt (stop_reason={response.stop_reason})."
        )
    return response.parsed_output
