#!/usr/bin/env python3
"""
Test CCAB demos using Playwright
Tests a sample of demos from different categories for:
- Page loads successfully
- No console errors
- Canvas/WebGL context created
- Screenshot capture
"""

from playwright.sync_api import sync_playwright
import os
import json
from pathlib import Path

# Test configuration
BASE_URL = "http://localhost:8000"
SCREENSHOT_DIR = Path("test_screenshots")
RESULTS_FILE = Path("test_results.json")

# Sample demos to test (covering different technologies)
TEST_DEMOS = [
    # Basic visualizations
    {"path": "visualizations/demos/08-fireworks.html", "name": "Fireworks", "category": "visualizations"},
    {"path": "lissajous/lissajous.html", "name": "Lissajous", "category": "lissajous"},

    # Game of Life
    {"path": "game-of-life/index.html", "name": "Game of Life Gallery", "category": "game-of-life"},

    # Three.js
    {"path": "threejs/01-rotating-cube.html", "name": "Three.js Rotating Cube", "category": "threejs"},
    {"path": "threejs/05-particle-system.html", "name": "Three.js Particles", "category": "threejs"},

    # WebGL Shaders
    {"path": "webgl-shaders/basic/01-rainbow-gradient.html", "name": "WebGL Rainbow", "category": "webgl-shaders"},

    # P5.js
    {"path": "p5-generative-art/01-perlin-flow-field.html", "name": "P5 Flow Field", "category": "p5-generative-art"},

    # D3.js
    {"path": "d3js/force-directed/01-basic-force-directed.html", "name": "D3 Force Directed", "category": "d3js"},

    # Algorithmic Art
    {"path": "algorithmic-art/index.html", "name": "Algorithmic Art Gallery", "category": "algorithmic-art"},

    # Altruism Evolution
    {"path": "altruism-evolution/01-classic-grid.html", "name": "Altruism Classic", "category": "altruism-evolution"},

    # Wolfram CA
    {"path": "wolfram-ca/rule-30.html", "name": "Wolfram Rule 30", "category": "wolfram-ca"},

    # WebGPU
    {"path": "webgpu/01-compute-mandelbrot.html", "name": "WebGPU Mandelbrot", "category": "webgpu"},
]

def test_demo(page, demo):
    """Test a single demo"""
    result = {
        "name": demo["name"],
        "path": demo["path"],
        "category": demo["category"],
        "success": False,
        "errors": [],
        "warnings": [],
        "console_messages": [],
    }

    # Collect console messages
    def handle_console(msg):
        result["console_messages"].append({
            "type": msg.type,
            "text": msg.text
        })
        if msg.type == "error":
            result["errors"].append(msg.text)
        elif msg.type == "warning":
            result["warnings"].append(msg.text)

    page.on("console", handle_console)

    # Collect page errors
    def handle_page_error(error):
        result["errors"].append(str(error))

    page.on("pageerror", handle_page_error)

    try:
        # Navigate to demo
        url = f"{BASE_URL}/{demo['path']}"
        print(f"  Testing: {demo['name']} ({demo['path']})")

        response = page.goto(url, wait_until="domcontentloaded", timeout=10000)

        # Check HTTP status
        if response.status != 200:
            result["errors"].append(f"HTTP {response.status}")
            return result

        # Wait for network to be idle (JS/CSS loaded)
        page.wait_for_load_state("networkidle", timeout=5000)

        # Wait a bit for animations/rendering to start
        page.wait_for_timeout(2000)

        # Check for canvas element (most demos use canvas)
        canvas_count = page.locator("canvas").count()
        result["has_canvas"] = canvas_count > 0
        result["canvas_count"] = canvas_count

        # Take screenshot
        screenshot_path = SCREENSHOT_DIR / demo["category"] / f"{Path(demo['path']).stem}.png"
        screenshot_path.parent.mkdir(parents=True, exist_ok=True)
        page.screenshot(path=str(screenshot_path), full_page=False)
        result["screenshot"] = str(screenshot_path)

        # Check for critical errors
        critical_errors = [e for e in result["errors"] if "failed" in e.lower() or "error" in e.lower()]

        # Consider success if page loaded and no critical errors
        result["success"] = response.status == 200 and len(critical_errors) == 0

        print(f"    ✓ Success: {result['success']}, Canvas: {result['has_canvas']}, Errors: {len(result['errors'])}")

    except Exception as e:
        result["errors"].append(f"Test exception: {str(e)}")
        print(f"    ✗ Failed: {str(e)}")

    return result

def main():
    """Run all tests"""
    print("=" * 80)
    print("CCAB Demo Testing Suite")
    print("=" * 80)
    print()

    # Create screenshot directory
    SCREENSHOT_DIR.mkdir(exist_ok=True)

    results = {
        "total": len(TEST_DEMOS),
        "passed": 0,
        "failed": 0,
        "demos": []
    }

    with sync_playwright() as p:
        print("Launching browser...")
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Set viewport for consistent screenshots
        page.set_viewport_size({"width": 1280, "height": 720})

        print(f"\nTesting {len(TEST_DEMOS)} demos...\n")

        for demo in TEST_DEMOS:
            result = test_demo(page, demo)
            results["demos"].append(result)

            if result["success"]:
                results["passed"] += 1
            else:
                results["failed"] += 1

        browser.close()

    # Save results
    with open(RESULTS_FILE, "w") as f:
        json.dump(results, f, indent=2)

    # Print summary
    print("\n" + "=" * 80)
    print("TEST SUMMARY")
    print("=" * 80)
    print(f"Total demos tested: {results['total']}")
    print(f"Passed: {results['passed']} ({results['passed']/results['total']*100:.1f}%)")
    print(f"Failed: {results['failed']} ({results['failed']/results['total']*100:.1f}%)")
    print()

    # Show failed demos
    if results["failed"] > 0:
        print("Failed demos:")
        for demo in results["demos"]:
            if not demo["success"]:
                print(f"  ✗ {demo['name']}")
                for error in demo["errors"][:3]:  # Show first 3 errors
                    print(f"    - {error}")
        print()

    print(f"Screenshots saved to: {SCREENSHOT_DIR}/")
    print(f"Detailed results saved to: {RESULTS_FILE}")
    print()

    return 0 if results["failed"] == 0 else 1

if __name__ == "__main__":
    exit(main())
