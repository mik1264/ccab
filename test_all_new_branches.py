#!/usr/bin/env python3
"""
Comprehensive test of all 200 demos across 4 new branches
Tests every demo for:
- Successful page load (HTTP 200)
- Canvas rendering
- No critical errors
- Screenshot capture
"""

from playwright.sync_api import sync_playwright
import os
import json
from pathlib import Path
import time

# Test configuration
SCREENSHOT_DIR = Path("test_screenshots_all_branches")
RESULTS_FILE = Path("test_results_all_branches.json")

# Branch configurations
BRANCHES = [
    {
        "name": "emergent-behaviors",
        "path": "../ccab-emergent-behaviors",
        "url": "http://localhost:8001",
        "gallery_path": "emergent-behaviors"
    },
    {
        "name": "simulations-suite",
        "path": "../ccab-simulations-suite",
        "url": "http://localhost:8002",
        "gallery_path": "simulations"
    },
    {
        "name": "pattern-formation",
        "path": "../ccab-pattern-formation",
        "url": "http://localhost:8003",
        "gallery_path": "pattern-formation"
    },
    {
        "name": "gravity-orbits",
        "path": "../ccab-gravity-orbits",
        "url": "http://localhost:8004",
        "gallery_path": "gravity-orbits"
    },
]

def discover_demos(branch_path, gallery_path):
    """Discover all HTML demos in a gallery directory"""
    branch_root = Path(branch_path)
    gallery_dir = branch_root / gallery_path

    demos = []

    if gallery_dir.exists():
        # Find all HTML files except index.html
        for html_file in sorted(gallery_dir.glob("**/*.html")):
            if html_file.name != "index.html":
                # Get relative path from branch root
                rel_path = html_file.relative_to(branch_root)
                demos.append(str(rel_path))

    return demos

def test_demo(page, branch_name, demo_path, base_url, demo_number, total_demos):
    """Test a single demo with minimal output"""
    result = {
        "branch": branch_name,
        "demo": demo_path,
        "success": False,
        "errors": [],
        "has_canvas": False,
        "http_status": None,
    }

    # Collect critical errors only
    critical_errors = []

    def handle_console(msg):
        if msg.type == "error":
            text = msg.text
            if any(x in text.lower() for x in ["failed to load", "uncaught", "cannot read", "is not defined"]):
                critical_errors.append(text)

    page.on("console", handle_console)

    def handle_page_error(error):
        critical_errors.append(str(error))

    page.on("pageerror", handle_page_error)

    try:
        url = f"{base_url}/{demo_path}"

        # Progress indicator
        demo_name = Path(demo_path).stem
        print(f"  [{demo_number}/{total_demos}] {demo_name[:50]:<50}", end=" ", flush=True)

        response = page.goto(url, wait_until="domcontentloaded", timeout=15000)
        result["http_status"] = response.status

        if response.status != 200:
            result["errors"].append(f"HTTP {response.status}")
            print("✗ HTTP ERROR")
            return result

        # Wait for network idle
        page.wait_for_load_state("networkidle", timeout=10000)

        # Wait briefly for rendering
        page.wait_for_timeout(1500)

        # Check for canvas
        canvas_count = page.locator("canvas").count()
        result["has_canvas"] = canvas_count > 0

        # Take screenshot
        screenshot_path = SCREENSHOT_DIR / branch_name / Path(demo_path).stem
        screenshot_path = screenshot_path.with_suffix('.png')
        screenshot_path.parent.mkdir(parents=True, exist_ok=True)
        page.screenshot(path=str(screenshot_path), full_page=False)
        result["screenshot"] = str(screenshot_path)

        # Store only critical errors
        result["errors"] = critical_errors[:5]  # Limit to 5

        # Success if loaded and no critical errors
        result["success"] = response.status == 200 and len(critical_errors) == 0

        status = "✓" if result["success"] else "✗"
        canvas_icon = "🖼" if result["has_canvas"] else "  "
        error_info = f" ({len(critical_errors)} errors)" if critical_errors else ""
        print(f"{status} {canvas_icon}{error_info}")

    except Exception as e:
        error_msg = str(e)[:100]
        result["errors"].append(f"Exception: {error_msg}")
        print(f"✗ EXCEPTION: {error_msg[:30]}")

    return result

def main():
    """Run comprehensive tests on all branches"""
    print("=" * 80)
    print("CCAB Complete Testing Suite - All 4 New Branches")
    print("Testing ~200 demos across 4 galleries")
    print("=" * 80)
    print()

    SCREENSHOT_DIR.mkdir(exist_ok=True)

    # Discover all demos
    print("Discovering demos...")
    for branch_config in BRANCHES:
        demos = discover_demos(branch_config["path"], branch_config["gallery_path"])
        branch_config["demos"] = demos
        print(f"  {branch_config['name']}: {len(demos)} demos")

    total_demos = sum(len(b["demos"]) for b in BRANCHES)
    print(f"\nTotal demos to test: {total_demos}\n")

    all_results = {
        "total_branches": len(BRANCHES),
        "total_demos": total_demos,
        "branches": []
    }

    start_time = time.time()

    # Wait for servers to be ready
    print("\nWaiting for servers to be ready...")
    time.sleep(3)

    with sync_playwright() as p:
        print("Launching browser...")
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 720})

        for branch_config in BRANCHES:
            branch_name = branch_config["name"]
            demos = branch_config["demos"]
            base_url = branch_config["url"]

            print(f"\n{'='*80}")
            print(f"Branch: {branch_name} ({len(demos)} demos)")
            print(f"{'='*80}\n")

            branch_results = {
                "name": branch_name,
                "total": len(demos),
                "passed": 0,
                "failed": 0,
                "demos": []
            }

            for i, demo_path in enumerate(demos, 1):
                result = test_demo(page, branch_name, demo_path, base_url, i, len(demos))
                branch_results["demos"].append(result)

                if result["success"]:
                    branch_results["passed"] += 1
                else:
                    branch_results["failed"] += 1

            all_results["branches"].append(branch_results)

            # Branch summary
            pass_rate = branch_results["passed"] / branch_results["total"] * 100 if branch_results["total"] > 0 else 0
            print(f"\n  Summary: {branch_results['passed']}/{branch_results['total']} passed ({pass_rate:.1f}%)")

        browser.close()

    elapsed_time = time.time() - start_time

    # Save results
    with open(RESULTS_FILE, "w") as f:
        json.dump(all_results, f, indent=2)

    # Print comprehensive summary
    print("\n" + "=" * 80)
    print("COMPREHENSIVE TEST SUMMARY")
    print("=" * 80)

    total_passed = 0
    total_failed = 0

    for branch_results in all_results["branches"]:
        total_passed += branch_results["passed"]
        total_failed += branch_results["failed"]

        pass_rate = branch_results['passed'] / branch_results['total'] * 100 if branch_results['total'] > 0 else 0

        print(f"\n{branch_results['name']}:")
        print(f"  Total:  {branch_results['total']}")
        print(f"  Passed: {branch_results['passed']} ({pass_rate:.1f}%)")
        print(f"  Failed: {branch_results['failed']}")

    print(f"\n{'='*80}")
    overall_pass_rate = total_passed / total_demos * 100 if total_demos > 0 else 0
    print(f"GRAND TOTAL: {total_demos} demos")
    print(f"Passed: {total_passed} ({overall_pass_rate:.1f}%)")
    print(f"Failed: {total_failed} ({100-overall_pass_rate:.1f}%)")
    print(f"\nTime elapsed: {elapsed_time:.1f} seconds ({elapsed_time/60:.1f} minutes)")
    print(f"Average: {elapsed_time/total_demos:.2f} seconds per demo")
    print(f"\nScreenshots: {SCREENSHOT_DIR}/")
    print(f"Results: {RESULTS_FILE}")
    print("=" * 80)

    # Show failed demos if any
    if total_failed > 0:
        print("\nFailed Demos:")
        for branch in all_results["branches"]:
            failed_demos = [d for d in branch["demos"] if not d["success"]]
            if failed_demos:
                print(f"\n{branch['name']}:")
                for demo in failed_demos[:10]:  # Show first 10
                    print(f"  ✗ {demo['demo']}")
                    if demo['errors']:
                        print(f"    Error: {demo['errors'][0][:80]}")
                if len(failed_demos) > 10:
                    print(f"  ... and {len(failed_demos) - 10} more")

    return 0 if total_failed == 0 else 1

if __name__ == "__main__":
    exit(main())
