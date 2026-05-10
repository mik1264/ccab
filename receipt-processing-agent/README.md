# Costco Receipt Agent — no AWS, Anthropic Haiku for OCR

A self-hosted recreation of the
["I built an AI agent to get my money back"](https://aws.plainenglish.io/ive-been-a-costco-member-for-25-years-last-month-i-built-an-ai-agent-to-get-my-money-back-09ed903751b0)
project, with **every Amazon service replaced** and receipt recognition
running on **Anthropic Claude Haiku 4.5**.

You upload Costco receipts. The agent extracts every line item, matches
them against a list of currently-active deals, and produces a weekly
HTML report listing items eligible for a price-adjustment refund within
Costco's 30-day window. Run on demand or on a cron schedule; emailed
via SMTP if you want.

## Architecture

| Original AWS service          | Replacement here                     |
| ----------------------------- | ------------------------------------ |
| Bedrock + Amazon Nova         | Anthropic Claude Haiku 4.5 (PDF + structured outputs) |
| AgentCore Runtime             | `apscheduler` background scheduler   |
| EventBridge Scheduler         | cron expression in `.env`            |
| API Gateway + Lambda          | FastAPI                              |
| DynamoDB                      | SQLite via SQLModel                  |
| S3                            | Local `storage/` directory           |
| Amplify + Cognito             | FastAPI templates + optional HTTP basic auth |
| SES                           | `smtplib` (any SMTP server)          |

No cloud accounts required. Single Python process. Data lives in
`data/receipts.db` and `storage/`.

## Setup

```bash
cd receipt-processing-agent
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
cp .env.example .env
# edit .env: set ANTHROPIC_API_KEY (required); SMTP_* if you want email reports
```

Run it:

```bash
.venv/bin/python -m app.main
# → http://127.0.0.1:8000
```

The web UI is one page:

- **Upload a receipt** (PDF preferred; PNG/JPG/WEBP also work). Claude
  Haiku reads it and saves the line items to SQLite.
- **Load deals**. Use the bundled `data/sample_deals.json` to try it,
  or upload your own JSON in the same shape.
- **Run analysis** to produce the report immediately, or wait for the
  weekly cron run (default Friday 9pm).
- **View any past report** by clicking it in the recent-reports list.

## Recognition

`app/recognition.py` calls `client.messages.parse()` with a Pydantic
schema, so receipts come back as validated `ParsedReceipt` objects with
typed `items[]`. The model is `claude-haiku-4-5` — fast, cheap, and
supports both vision and structured outputs. PDFs go straight to the
API as base64 `document` blocks; no OCR layer in between.

## Deals

Real Costco scraping is fragile and against ToS, so the project takes a
JSON file of active deals and matches against that. `data/sample_deals.json`
shows the shape:

```json
{
  "valid_from": "2026-05-01",
  "valid_to":   "2026-05-31",
  "deals": [
    {"item_keyword": "KS PAPER TOWEL", "regular_price": 23.99, "deal_price": 18.99}
  ]
}
```

`item_keyword` is matched as a case-insensitive substring against the
receipt's `name` field; `item_code` is matched exactly when both sides
provide one. Plug in your own deal source by writing a script that
produces the same JSON shape and POSTing it to `/upload-deals` (or
calling `app.deals.load_from_json` directly).

## Matcher

`app/matcher.py` finds items where:

- The receipt's purchase date is within the last 30 days.
- A currently-active deal matches the item's name or code.
- The deal price is below the per-unit price you actually paid (after
  any "instant savings" already applied at checkout).

Results split into **eligible for refund** (take to the membership
counter) and **already applied** (no action needed — instant savings
caught it at the register).

## Scheduling

`app/scheduler.py` uses APScheduler to run the analysis job on a cron
trigger you set in `.env` (`REPORT_CRON`, default `0 21 * * fri` =
Friday 9pm) in your local timezone (`TIMEZONE`). When the agent is
running, the scheduler runs in the same process; for production-style
deploys, run it under `systemd`, `supervisord`, or your favorite
process manager.

## Email

`app/email_sender.py` sends the HTML report via plain SMTP. Set
`SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`, `SMTP_TO`. If
`SMTP_HOST` is empty, the report is written to `data/reports/` instead
so you can still see it.

## Auth

Set `BASIC_AUTH_USER` / `BASIC_AUTH_PASSWORD` to gate the web UI
behind HTTP basic auth. Leave blank for an open local install. (For
anything internet-facing, terminate TLS in front and consider a
real auth proxy.)

## Project layout

```
receipt-processing-agent/
├── app/
│   ├── main.py             # FastAPI app + lifespan (DB init, scheduler)
│   ├── routes.py           # HTTP routes (upload, run, report, view)
│   ├── recognition.py      # Claude Haiku receipt parser
│   ├── deals.py            # JSON loader for active deals
│   ├── matcher.py          # 30-day price-adjustment matcher
│   ├── agent.py            # ingest_receipt + run_analysis
│   ├── report_builder.py   # HTML / JSON report
│   ├── email_sender.py     # SMTP sender
│   ├── scheduler.py        # APScheduler weekly job
│   ├── auth.py             # Optional HTTP basic auth
│   ├── models.py           # SQLModel tables
│   ├── database.py         # SQLite engine
│   ├── config.py           # Pydantic settings
│   └── templates/          # Jinja2 templates
├── data/
│   └── sample_deals.json
├── storage/                # Uploaded receipt files (gitignored)
├── requirements.txt
└── .env.example
```

## Caveats

- This is for personal use on your own receipts. Real Costco refund
  policy may vary by region or change over time; always confirm at the
  membership counter.
- The matcher uses keyword overlap, so a sloppy `item_keyword` (`"OIL"`)
  will catch unrelated items. Be specific.
- Anthropic API calls cost money — not much for Haiku (~$1 / 1M input
  tokens; a typical receipt is well under 5K tokens), but they aren't
  free. Use `count_tokens` if you want exact estimates.
