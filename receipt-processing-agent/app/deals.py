"""Deals data layer.

The original article scraped Costco's deal pages and coupon books. Real
scraping is fragile and against most ToS, so this project loads deals
from a JSON file you maintain (see ``data/sample_deals.json``). Replace
``load_from_json`` with your own scraper if you have a legitimate
source.
"""

from __future__ import annotations

import json
from datetime import date, datetime
from pathlib import Path

from sqlmodel import Session, select

from .config import settings
from .models import Deal


def _parse_date(value: str | date) -> date:
    if isinstance(value, date):
        return value
    return datetime.strptime(value, "%Y-%m-%d").date()


def load_from_json(session: Session, path: Path | None = None, replace: bool = True) -> int:
    """Load a deals JSON file into the database.

    The JSON shape is::

        {
            "valid_from": "YYYY-MM-DD",
            "valid_to":   "YYYY-MM-DD",
            "source":     "weekly-ad" | "coupon-book" | ...,
            "deals": [{"item_keyword": "...", "regular_price": ..., "deal_price": ...}, ...]
        }

    Each entry can override ``valid_from``/``valid_to``/``source`` per deal.
    """
    path = path or (settings.data_path / "sample_deals.json")
    with open(path) as f:
        payload = json.load(f)

    default_from = _parse_date(payload.get("valid_from", date.today().isoformat()))
    default_to = _parse_date(payload.get("valid_to", date.today().isoformat()))
    default_source = payload.get("source", "manual")

    if replace:
        for d in session.exec(select(Deal)).all():
            session.delete(d)
        session.commit()

    inserted = 0
    for entry in payload.get("deals", []):
        deal = Deal(
            item_keyword=entry["item_keyword"].upper().strip(),
            description=entry.get("description", ""),
            item_code=str(entry.get("item_code", "")),
            regular_price=float(entry.get("regular_price", 0.0)),
            deal_price=float(entry.get("deal_price", 0.0)),
            valid_from=_parse_date(entry.get("valid_from", default_from)),
            valid_to=_parse_date(entry.get("valid_to", default_to)),
            source=entry.get("source", default_source),
        )
        session.add(deal)
        inserted += 1
    session.commit()
    return inserted


def active_deals(session: Session, on_date: date | None = None) -> list[Deal]:
    on_date = on_date or date.today()
    stmt = select(Deal).where(Deal.valid_from <= on_date, Deal.valid_to >= on_date)
    return list(session.exec(stmt).all())
