"""Weekly scheduler. Replaces EventBridge Scheduler + AgentCore Runtime."""

from __future__ import annotations

import logging

from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger

from .agent import run_analysis
from .config import settings

log = logging.getLogger("agent.scheduler")


def _trigger_from_cron(expr: str) -> CronTrigger:
    parts = expr.split()
    if len(parts) != 5:
        raise ValueError(f"REPORT_CRON must have 5 fields (got {expr!r}).")
    minute, hour, day, month, day_of_week = parts
    return CronTrigger(
        minute=minute,
        hour=hour,
        day=day,
        month=month,
        day_of_week=day_of_week,
        timezone=settings.timezone,
    )


def _job() -> None:
    log.info("Running scheduled weekly analysis")
    try:
        report = run_analysis(send_email=True)
        log.info(
            "Report saved id=%s eligible=%s total=$%.2f sent=%s",
            report.id, report.eligible_count, report.total_savings, report.sent,
        )
    except Exception:  # noqa: BLE001
        log.exception("Scheduled analysis failed")


def start_scheduler() -> BackgroundScheduler:
    scheduler = BackgroundScheduler(timezone=settings.timezone)
    scheduler.add_job(_job, _trigger_from_cron(settings.report_cron), id="weekly_report")
    scheduler.start()
    log.info("Scheduler started: cron=%r tz=%s", settings.report_cron, settings.timezone)
    return scheduler
