#!/usr/bin/env python3
"""
Test all CCAB demos for JavaScript errors and loading issues.
"""

import subprocess
import json
import time
from pathlib import Path
from playwright.sync_api import sync_playwright
from concurrent.futures import ThreadPoolExecutor, as_completed
import threading

BASE_DIR = Path("/Users/mik1264/experiments/ccab/ccab")
BASE_URL = "http://localhost:8889"
TIMEOUT = 10000  # 10 seconds per page

# Thread-safe results storage
results_lock = threading.Lock()
results = {
    "working": [],
    "errors": [],
    "timeout": [],
    "load_failed": []
}

def get_all_html_files():
    """Get all HTML files to test."""
    html_files = []
    for f in BASE_DIR.rglob("*.html"):
        # Skip certain directories
        rel_path = f.relative_to(BASE_DIR)
        path_str = str(rel_path)
        if any(skip in path_str for skip in [".venv", "design-alternatives", "templates", "node_modules"]):
            continue
        html_files.append(rel_path)
    return sorted(html_files)

def test_single_page(html_path, browser_type):
    """Test a single page and return results."""
    url = f"{BASE_URL}/{html_path}"
    errors = []

    try:
        browser = browser_type.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        # Capture console errors
        def handle_console(msg):
            if msg.type == "error":
                errors.append(f"Console error: {msg.text}")

        def handle_page_error(error):
            errors.append(f"Page error: {error.message}")

        page.on("console", handle_console)
        page.on("pageerror", handle_page_error)

        # Navigate with timeout
        try:
            response = page.goto(url, timeout=TIMEOUT, wait_until="domcontentloaded")
            if response is None or response.status >= 400:
                browser.close()
                return {"path": str(html_path), "status": "load_failed", "errors": [f"HTTP {response.status if response else 'None'}"]}
        except Exception as e:
            browser.close()
            return {"path": str(html_path), "status": "timeout", "errors": [str(e)]}

        # Wait a bit for JS to execute and animations to start
        try:
            page.wait_for_timeout(2000)  # 2 seconds for JS to run
        except:
            pass

        browser.close()

        if errors:
            return {"path": str(html_path), "status": "errors", "errors": errors}
        else:
            return {"path": str(html_path), "status": "working", "errors": []}

    except Exception as e:
        try:
            browser.close()
        except:
            pass
        return {"path": str(html_path), "status": "errors", "errors": [str(e)]}

def main():
    html_files = get_all_html_files()
    total = len(html_files)
    print(f"Testing {total} HTML files...")
    print("=" * 60)

    tested = 0
    working_count = 0
    error_count = 0

    with sync_playwright() as p:
        for i, html_path in enumerate(html_files):
            result = test_single_page(html_path, p.chromium)
            tested += 1

            status = result["status"]
            path = result["path"]

            if status == "working":
                working_count += 1
                results["working"].append(path)
                print(f"[{tested}/{total}] ✓ {path}")
            else:
                error_count += 1
                results[status].append({"path": path, "errors": result["errors"]})
                print(f"[{tested}/{total}] ✗ {path}")
                for err in result["errors"][:2]:  # Show first 2 errors
                    print(f"    └─ {err[:100]}")

            # Progress update every 50 files
            if tested % 50 == 0:
                print(f"\n--- Progress: {tested}/{total} ({working_count} working, {error_count} with issues) ---\n")

    # Print summary
    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"Total tested: {total}")
    print(f"Working: {len(results['working'])}")
    print(f"With errors: {len(results['errors'])}")
    print(f"Timeout: {len(results['timeout'])}")
    print(f"Load failed: {len(results['load_failed'])}")

    # Save detailed results
    output_file = BASE_DIR / "test_results.json"
    with open(output_file, "w") as f:
        json.dump(results, f, indent=2)
    print(f"\nDetailed results saved to: {output_file}")

    # Print error details
    if results["errors"] or results["timeout"] or results["load_failed"]:
        print("\n" + "=" * 60)
        print("ISSUES FOUND")
        print("=" * 60)

        all_issues = results["errors"] + results["timeout"] + results["load_failed"]
        for item in all_issues:
            if isinstance(item, dict):
                print(f"\n{item['path']}:")
                for err in item["errors"]:
                    print(f"  - {err[:200]}")

if __name__ == "__main__":
    main()
