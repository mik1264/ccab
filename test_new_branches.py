#!/usr/bin/env python3
"""
Test the 4 new branches with 200 demos
Samples demos from each branch to verify functionality
"""

from playwright.sync_api import sync_playwright
import os
import json
from pathlib import Path

# Test configuration
SCREENSHOT_DIR = Path("test_screenshots_new_branches")
RESULTS_FILE = Path("test_results_new_branches.json")

# Test each of the 4 new branches
BRANCHES = [
    {
        "name": "emergent-behaviors",
        "path": "../ccab-emergent-behaviors",
        "url": "http://localhost:8001",
        "demos": [
            "emergent-behaviors/01-langtons-ant-classic.html",
            "emergent-behaviors/06-langtons-ant-two-ants.html",
            "emergent-behaviors/13-boids-2d-basic.html",
            "emergent-behaviors/21-boids-3d-basic.html",
            "emergent-behaviors/26-ca-brians-brain.html",
            "emergent-behaviors/38-swarm-ant-colony.html",
            "emergent-behaviors/45-particle-life-3-types.html",
        ]
    },
    {
        "name": "simulations-suite",
        "path": "../ccab-simulations-suite",
        "url": "http://localhost:8002",
        "demos": [
            "simulations/cellular-automata/01-langtons-ant.html",
            "simulations/flocking-swarms/01-boids-2d.html",
            "simulations/fluid-dynamics/01-jos-stam-smoke.html",
            "simulations/l-systems/01-fractal-tree.html",
            "simulations/n-body/01-solar-system.html",
            "simulations/particle-systems/01-dla-classic.html",
            "simulations/physics/01-double-pendulum.html",
            "simulations/reaction-diffusion/01-spots.html",
            "simulations/statistical-mechanics/04-schelling-segregation.html",
            "simulations/waves/01-wave-interference.html",
        ]
    },
    {
        "name": "pattern-formation",
        "path": "../ccab-pattern-formation",
        "url": "http://localhost:8003",
        "demos": [
            "pattern-formation/01-gray-scott-classic.html",
            "pattern-formation/02-spots-pattern.html",
            "pattern-formation/03-stripes-pattern.html",
            "pattern-formation/13-parameter-explorer.html",
            "pattern-formation/26-turing-spots.html",
            "pattern-formation/32-zebrafish-stripe-formation.html",
            "pattern-formation/41-belousov-zhabotinsky-reaction.html",
            "pattern-formation/48-crystal-growth-patterns.html",
        ]
    },
    {
        "name": "gravity-orbits",
        "path": "../ccab-gravity-orbits",
        "url": "http://localhost:8004",
        "demos": [
            "gravity-orbits/01-simple-circular-orbit.html",
            "gravity-orbits/02-elliptical-orbit.html",
            "gravity-orbits/11-simple-nbody.html",
            "gravity-orbits/12-solar-system.html",
            "gravity-orbits/13-three-body-figure8.html",
            "gravity-orbits/20-lagrange-points.html",
            "gravity-orbits/31-galaxy-spiral-arms.html",
            "gravity-orbits/44-keplers-laws.html",
        ]
    },
]

def test_demo(page, branch_name, demo_path, base_url):
    """Test a single demo"""
    result = {
        "branch": branch_name,
        "demo": demo_path,
        "success": False,
        "errors": [],
        "warnings": [],
        "has_canvas": False,
    }

    # Collect console errors
    def handle_console(msg):
        if msg.type == "error":
            result["errors"].append(msg.text)

    page.on("console", handle_console)

    # Collect page errors
    def handle_page_error(error):
        result["errors"].append(str(error))

    page.on("pageerror", handle_page_error)

    try:
        url = f"{base_url}/{demo_path}"
        print(f"  Testing: {demo_path}")

        response = page.goto(url, wait_until="domcontentloaded", timeout=15000)

        if response.status != 200:
            result["errors"].append(f"HTTP {response.status}")
            return result

        # Wait for network idle
        page.wait_for_load_state("networkidle", timeout=10000)

        # Wait for rendering
        page.wait_for_timeout(2000)

        # Check for canvas
        canvas_count = page.locator("canvas").count()
        result["has_canvas"] = canvas_count > 0

        # Take screenshot
        screenshot_path = SCREENSHOT_DIR / branch_name / Path(demo_path).stem
        screenshot_path = screenshot_path.with_suffix('.png')
        screenshot_path.parent.mkdir(parents=True, exist_ok=True)
        page.screenshot(path=str(screenshot_path), full_page=False)
        result["screenshot"] = str(screenshot_path)

        # Success if loaded and no critical errors
        critical_errors = [e for e in result["errors"]
                          if any(x in e.lower() for x in ["failed to load", "uncaught", "cannot read"])]

        result["success"] = response.status == 200 and len(critical_errors) == 0

        status = "✓" if result["success"] else "✗"
        print(f"    {status} Canvas: {result['has_canvas']}, Errors: {len(result['errors'])}")

    except Exception as e:
        result["errors"].append(f"Test exception: {str(e)}")
        print(f"    ✗ Exception: {str(e)[:80]}")

    return result

def main():
    """Run tests for all branches"""
    print("=" * 80)
    print("CCAB New Branches Testing Suite")
    print("Testing 4 branches with ~35 sample demos")
    print("=" * 80)
    print()

    SCREENSHOT_DIR.mkdir(exist_ok=True)

    all_results = {
        "total_branches": len(BRANCHES),
        "branches": []
    }

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
            print(f"Branch: {branch_name}")
            print(f"Testing {len(demos)} demos from {base_url}")
            print(f"{'='*80}\n")

            branch_results = {
                "name": branch_name,
                "total": len(demos),
                "passed": 0,
                "failed": 0,
                "demos": []
            }

            for demo_path in demos:
                result = test_demo(page, branch_name, demo_path, base_url)
                branch_results["demos"].append(result)

                if result["success"]:
                    branch_results["passed"] += 1
                else:
                    branch_results["failed"] += 1

            all_results["branches"].append(branch_results)

        browser.close()

    # Save results
    with open(RESULTS_FILE, "w") as f:
        json.dump(all_results, f, indent=2)

    # Print summary
    print("\n" + "=" * 80)
    print("OVERALL TEST SUMMARY")
    print("=" * 80)

    total_demos = 0
    total_passed = 0
    total_failed = 0

    for branch_results in all_results["branches"]:
        total_demos += branch_results["total"]
        total_passed += branch_results["passed"]
        total_failed += branch_results["failed"]

        print(f"\n{branch_results['name']}:")
        print(f"  Total: {branch_results['total']}")
        print(f"  Passed: {branch_results['passed']} ({branch_results['passed']/branch_results['total']*100:.1f}%)")
        print(f"  Failed: {branch_results['failed']} ({branch_results['failed']/branch_results['total']*100:.1f}%)")

    print(f"\n{'='*80}")
    print(f"Grand Total: {total_demos} demos")
    print(f"Passed: {total_passed} ({total_passed/total_demos*100:.1f}%)")
    print(f"Failed: {total_failed} ({total_failed/total_demos*100:.1f}%)")
    print(f"\nScreenshots saved to: {SCREENSHOT_DIR}/")
    print(f"Results saved to: {RESULTS_FILE}")
    print("=" * 80)

    return 0 if total_failed == 0 else 1

if __name__ == "__main__":
    exit(main())
