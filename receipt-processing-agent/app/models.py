from datetime import date, datetime
from typing import Optional

from sqlmodel import Field, Relationship, SQLModel


class Receipt(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    pdf_filename: str
    pdf_path: str
    store: str = "Costco"
    purchase_date: date
    subtotal: float = 0.0
    total: float = 0.0
    raw_text: str = ""
    uploaded_at: datetime = Field(default_factory=datetime.utcnow)

    items: list["ReceiptItem"] = Relationship(back_populates="receipt")


class ReceiptItem(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    receipt_id: int = Field(foreign_key="receipt.id", index=True)
    line_no: int = 0
    item_code: str = ""
    name: str
    quantity: float = 1.0
    unit_price: float = 0.0
    line_total: float = 0.0
    instant_savings: float = 0.0

    receipt: Optional[Receipt] = Relationship(back_populates="items")


class Deal(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    item_keyword: str = Field(index=True)
    description: str = ""
    item_code: str = ""
    regular_price: float = 0.0
    deal_price: float = 0.0
    valid_from: date
    valid_to: date
    source: str = "manual"


class Report(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    run_at: datetime = Field(default_factory=datetime.utcnow)
    eligible_count: int = 0
    total_savings: float = 0.0
    html: str = ""
    json_data: str = ""
    sent: bool = False
    send_error: str = ""
