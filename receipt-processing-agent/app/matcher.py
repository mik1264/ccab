"""Match purchased receipt items against currently-active deals.

Costco's standard policy gives a 30-day price-adjustment window: if an
item drops in price within 30 days of purchase, you can request a
refund of the difference at the membership counter. This module finds
those eligible items.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from datetime import date, timedelta

from sqlmodel import Session, select

from .models import Deal, Receipt, ReceiptItem

ADJUSTMENT_WINDOW_DAYS = 30


@dataclass
class Match:
    receipt: Receipt
    item: ReceiptItem
    deal: Deal
    paid_unit_price: float
    deal_unit_price: float
    savings: float
    already_applied: bool = False


@dataclass
class Analysis:
    eligible: list[Match] = field(default_factory=list)
    already_applied: list[Match] = field(default_factory=list)

    @property
    def total_savings(self) -> float:
        return sum(m.savings for m in self.eligible)


def _matches_keyword(name: str, keyword: str, item_code: str, deal_code: str) -> bool:
    if deal_code and item_code and deal_code == item_code:
        return True
    return keyword.upper() in name.upper()


def analyze(session: Session, today: date | None = None) -> Analysis:
    today = today or date.today()
    window_start = today - timedelta(days=ADJUSTMENT_WINDOW_DAYS)

    receipts = session.exec(
        select(Receipt).where(Receipt.purchase_date >= window_start)
    ).all()
    deals = session.exec(
        select(Deal).where(Deal.valid_from <= today, Deal.valid_to >= today)
    ).all()

    result = Analysis()
    for receipt in receipts:
        days_since = (today - receipt.purchase_date).days
        if days_since > ADJUSTMENT_WINDOW_DAYS:
            continue
        for item in receipt.items:
            for deal in deals:
                if not _matches_keyword(item.name, deal.item_keyword, item.item_code, deal.item_code):
                    continue
                paid = item.unit_price - (item.instant_savings / max(item.quantity, 1.0))
                if deal.deal_price >= paid:
                    continue
                savings = round((paid - deal.deal_price) * item.quantity, 2)
                if savings <= 0.01:
                    continue
                match = Match(
                    receipt=receipt,
                    item=item,
                    deal=deal,
                    paid_unit_price=round(paid, 2),
                    deal_unit_price=round(deal.deal_price, 2),
                    savings=savings,
                    already_applied=item.instant_savings > 0,
                )
                if match.already_applied and abs(paid - deal.deal_price) < 0.01:
                    result.already_applied.append(match)
                else:
                    result.eligible.append(match)
                break  # one deal per item line
    return result
