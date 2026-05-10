"""SMTP email sender. Replaces Amazon SES.

Set SMTP_* in your ``.env`` to enable. If SMTP_HOST is empty, the
sender writes the report to ``data/reports/`` instead.
"""

from __future__ import annotations

import smtplib
from datetime import datetime
from email.message import EmailMessage
from pathlib import Path

from .config import settings


def send_report(subject: str, html: str, plain: str = "") -> tuple[bool, str]:
    """Send the weekly report. Returns (sent, error_message)."""
    if not settings.smtp_host:
        # No SMTP configured — persist to disk so the user can still see the report.
        out_dir = settings.data_path / "reports"
        out_dir.mkdir(parents=True, exist_ok=True)
        ts = datetime.now().strftime("%Y%m%d_%H%M%S")
        path = out_dir / f"report_{ts}.html"
        path.write_text(html, encoding="utf-8")
        return False, f"SMTP not configured; saved to {path}"

    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = settings.smtp_from or settings.smtp_user
    msg["To"] = settings.smtp_to or settings.smtp_user
    msg.set_content(plain or "Open this email in HTML to view your weekly Costco report.")
    msg.add_alternative(html, subtype="html")

    try:
        with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=30) as smtp:
            smtp.ehlo()
            if settings.smtp_use_tls:
                smtp.starttls()
                smtp.ehlo()
            if settings.smtp_user:
                smtp.login(settings.smtp_user, settings.smtp_password)
            smtp.send_message(msg)
        return True, ""
    except Exception as e:  # noqa: BLE001 — surface error in the report row
        return False, f"{type(e).__name__}: {e}"
