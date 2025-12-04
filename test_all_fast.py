#!/usr/bin/env python3
"""
Fast test of all CCAB demos - reuses browser instance.
"""

import json
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE_DIR = Path("/Users/mik1264/experiments/ccab/ccab")
BASE_URL = "http://localhost:8889"
TIMEOUT = 8000  # 8 seconds per page
WAIT_TIME = 1500  # 1.5 seconds for JS to execute

def get_all_html_files():
    """Get all HTML files to test."""
    html_files = []
    for f in BASE_DIR.rglob("*.html"):
        rel_path = f.relative_to(BASE_DIR)
        path_str = str(rel_path)
        if any(skip in path_str for skip in [".venv", "design-alternatives", "templates", "node_modules"]):
            continue
        html_files.append(rel_path)
    return sorted(html_files)

def main():
    html_files = get_all_html_files()
    total = len(html_files)
    print(f"Testing {total} HTML files...")
    print("=" * 60)

    results = {
        "working": [],
        "errors": [],
        "timeout": [],
        "load_failed": []
    }

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        for i, html_path in enumerate(html_files):
            url = f"{BASE_URL}/{html_path}"
            errors = []
            status = "working"

            try:
                # Create new page for each test (lighter than new browser)
                page = browser.new_page()

                # Capture errors
                def handle_console(msg):
                    if msg.type == "error":
                        errors.append(f"Console: {msg.text[:150]}")

                def handle_page_error(error):
                    errors.append(f"Page: {error.message[:150]}")

                page.on("console", handle_console)
                page.on("pageerror", handle_page_error)

                # Navigate
                try:
                    response = page.goto(url, timeout=TIMEOUT, wait_until="domcontentloaded")
                    if response is None or response.status >= 400:
                        status = "load_failed"
                        errors.append(f"HTTP {response.status if response else 'None'}")
                except Exception as e:
                    status = "timeout"
                    errors.append(str(e)[:100])

                # Wait for JS
                if status == "working":
                    try:
                        page.wait_for_timeout(WAIT_TIME)
                    except:
                        pass

                    if errors:
                        status = "errors"

                page.close()

            except Exception as e:
                status = "errors"
                errors.append(str(e)[:100])
                try:
                    page.close()
                except:
                    pass

            # Record result
            if status == "working":
                results["working"].append(str(html_path))
                print(f"[{i+1}/{total}] ✓ {html_path}")
            else:
                results[status].append({"path": str(html_path), "errors": errors})
                print(f"[{i+1}/{total}] ✗ {html_path}")
                for err in errors[:2]:
                    print(f"    └─ {err[:100]}")

            # Progress every 100 files
            if (i + 1) % 100 == 0:
                working = len(results['working'])
                issues = len(results['errors']) + len(results['timeout']) + len(results['load_failed'])
                print(f"\n--- Progress: {i+1}/{total} ({working} working, {issues} with issues) ---\n")
                sys.stdout.flush()

        browser.close()

    # Print summary
    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"Total tested: {total}")
    print(f"Working: {len(results['working'])}")
    print(f"With errors: {len(results['errors'])}")
    print(f"Timeout: {len(results['timeout'])}")
    print(f"Load failed: {len(results['load_failed'])}")

    # Save results
    output_file = BASE_DIR / "test_results.json"
    with open(output_file, "w") as f:
        json.dump(results, f, indent=2)
    print(f"\nDetailed results saved to: {output_file}")

    # Print all issues
    if results["errors"] or results["timeout"] or results["load_failed"]:
        print("\n" + "=" * 60)
        print("ALL ISSUES")
        print("=" * 60)
        all_issues = results["errors"] + results["timeout"] + results["load_failed"]
        for item in all_issues:
            print(f"\n{item['path']}:")
            for err in item["errors"]:
                print(f"  - {err}")

if __name__ == "__main__":
    main()
