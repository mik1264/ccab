#!/usr/bin/env python3
"""
Cross-Browser Testing for CCAB

Tests demos across multiple browsers:
- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)

Validates:
- Pages load successfully
- No JavaScript errors
- Canvas/WebGL renders
- Browser-specific issues
"""

import json
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright, Browser

BASE_DIR = Path(__file__).parent.parent.resolve()
BASE_URL = "http://localhost:8000"
RESULTS_FILE = BASE_DIR / "test_results_cross_browser.json"

# Sample demos covering different technologies
TEST_DEMOS = [
    # Canvas 2D
    {"path": "game-of-life/index.html", "name": "Game of Life (Canvas)", "tech": "canvas"},
    {"path": "algorithmic-art/index.html", "name": "Algorithmic Art (Canvas)", "tech": "canvas"},

    # Three.js (WebGL)
    {"path": "threejs/01-rotating-cube.html", "name": "Three.js Cube", "tech": "webgl"},
    {"path": "threejs/05-particle-system.html", "name": "Three.js Particles", "tech": "webgl"},

    # Raw WebGL
    {"path": "webgl-shaders/basic/01-rainbow-gradient.html", "name": "WebGL Rainbow", "tech": "webgl"},

    # D3.js (SVG)
    {"path": "d3js/force-directed/01-basic-force-directed.html", "name": "D3 Force Graph", "tech": "svg"},

    # P5.js
    {"path": "p5-generative-art/01-perlin-flow-field.html", "name": "P5 Flow Field", "tech": "canvas"},

    # Web Audio
    {"path": "web-audio-api/demos/01-bar-spectrum.html", "name": "Audio Spectrum", "tech": "audio"},

    # Gallery pages
    {"path": "index.html", "name": "Main Index", "tech": "static"},
    {"path": "threejs/index.html", "name": "Three.js Gallery", "tech": "static"},
]

# Browsers to test
BROWSERS = ["chromium", "firefox", "webkit"]


def test_demo_in_browser(browser: Browser, demo: dict) -> dict:
    """Test a single demo in a specific browser"""
    result = {
        "name": demo["name"],
        "path": demo["path"],
        "tech": demo["tech"],
        "success": False,
        "errors": [],
        "has_canvas": False,
        "has_svg": False,
        "render_time_ms": 0,
    }

    context = browser.new_context()
    page = context.new_page()
    page.set_viewport_size({"width": 1280, "height": 720})

    errors = []

    def handle_console(msg):
        if msg.type == "error":
            text = msg.text
            # Filter out common non-critical errors
            if not any(skip in text.lower() for skip in [
                "favicon", "404", "failed to load resource: net::"
            ]):
                errors.append(text[:200])

    def handle_page_error(error):
        errors.append(f"Page error: {str(error)[:200]}")

    page.on("console", handle_console)
    page.on("pageerror", handle_page_error)

    try:
        url = f"{BASE_URL}/{demo['path']}"

        # Measure load time
        import time
        start_time = time.time()

        response = page.goto(url, wait_until="domcontentloaded", timeout=15000)
        if response.status != 200:
            result["errors"].append(f"HTTP {response.status}")
            return result

        # Wait for network idle
        page.wait_for_load_state("networkidle", timeout=10000)

        # Wait for rendering
        page.wait_for_timeout(2000)

        result["render_time_ms"] = int((time.time() - start_time) * 1000)

        # Check for canvas
        canvas_count = page.locator("canvas").count()
        result["has_canvas"] = canvas_count > 0

        # Check for SVG
        svg_count = page.locator("svg").count()
        result["has_svg"] = svg_count > 0

        # Check for WebGL context errors
        webgl_error = page.evaluate("""
            () => {
                const canvas = document.querySelector('canvas');
                if (canvas) {
                    const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
                    if (gl) {
                        const error = gl.getError();
                        return error !== 0 ? `WebGL error: ${error}` : null;
                    }
                }
                return null;
            }
        """)
        if webgl_error:
            errors.append(webgl_error)

        result["errors"] = errors[:5]  # Limit errors
        result["success"] = len(errors) == 0

    except Exception as e:
        result["errors"].append(f"Exception: {str(e)[:150]}")

    finally:
        context.close()

    return result


def run_browser_tests(p, browser_name: str) -> dict:
    """Run tests for a specific browser"""
    print(f"\n{'='*60}")
    print(f"Browser: {browser_name.upper()}")
    print(f"{'='*60}\n")

    results = {
        "browser": browser_name,
        "total": len(TEST_DEMOS),
        "passed": 0,
        "failed": 0,
        "demos": []
    }

    # Launch browser
    if browser_name == "chromium":
        browser = p.chromium.launch(headless=True)
    elif browser_name == "firefox":
        browser = p.firefox.launch(headless=True)
    elif browser_name == "webkit":
        browser = p.webkit.launch(headless=True)
    else:
        print(f"  Unknown browser: {browser_name}")
        return results

    for i, demo in enumerate(TEST_DEMOS, 1):
        print(f"  [{i}/{len(TEST_DEMOS)}] {demo['name'][:40]:<40}", end=" ")

        result = test_demo_in_browser(browser, demo)
        results["demos"].append(result)

        if result["success"]:
            results["passed"] += 1
            print(f"PASS ({result['render_time_ms']}ms)")
        else:
            results["failed"] += 1
            print(f"FAIL")
            for err in result["errors"][:2]:
                print(f"        {err[:60]}")

    browser.close()

    # Print browser summary
    pass_rate = results["passed"] / results["total"] * 100 if results["total"] > 0 else 0
    print(f"\n  Summary: {results['passed']}/{results['total']} passed ({pass_rate:.1f}%)")

    return results


def main():
    """Run cross-browser tests"""
    print("=" * 70)
    print("CCAB Cross-Browser Testing")
    print("=" * 70)
    print()
    print(f"Testing {len(TEST_DEMOS)} demos across {len(BROWSERS)} browsers")
    print(f"Browsers: {', '.join(BROWSERS)}")
    print()

    all_results = {
        "total_browsers": len(BROWSERS),
        "total_demos": len(TEST_DEMOS),
        "browsers": []
    }

    with sync_playwright() as p:
        for browser_name in BROWSERS:
            try:
                browser_results = run_browser_tests(p, browser_name)
                all_results["browsers"].append(browser_results)
            except Exception as e:
                print(f"\n  ERROR launching {browser_name}: {e}")
                all_results["browsers"].append({
                    "browser": browser_name,
                    "error": str(e),
                    "total": len(TEST_DEMOS),
                    "passed": 0,
                    "failed": len(TEST_DEMOS),
                    "demos": []
                })

    # Save results
    with open(RESULTS_FILE, "w") as f:
        json.dump(all_results, f, indent=2)

    # Print comprehensive summary
    print("\n" + "=" * 70)
    print("CROSS-BROWSER TEST SUMMARY")
    print("=" * 70)
    print()

    # Summary table
    print(f"{'Browser':<12} {'Passed':<10} {'Failed':<10} {'Pass Rate':<12}")
    print("-" * 44)

    total_passed = 0
    total_failed = 0

    for browser_results in all_results["browsers"]:
        browser = browser_results["browser"]
        passed = browser_results["passed"]
        failed = browser_results["failed"]
        total = browser_results["total"]
        rate = passed / total * 100 if total > 0 else 0

        total_passed += passed
        total_failed += failed

        print(f"{browser:<12} {passed:<10} {failed:<10} {rate:.1f}%")

    print("-" * 44)
    total_tests = len(BROWSERS) * len(TEST_DEMOS)
    overall_rate = total_passed / total_tests * 100 if total_tests > 0 else 0
    print(f"{'TOTAL':<12} {total_passed:<10} {total_failed:<10} {overall_rate:.1f}%")
    print()

    # Browser-specific failures
    print("Browser-specific issues:")
    print("-" * 70)

    for browser_results in all_results["browsers"]:
        browser = browser_results["browser"]
        failed_demos = [d for d in browser_results.get("demos", []) if not d.get("success")]

        if failed_demos:
            print(f"\n{browser.upper()}:")
            for demo in failed_demos[:5]:
                print(f"  - {demo['name']}: {demo['errors'][0][:50] if demo['errors'] else 'Unknown error'}")
            if len(failed_demos) > 5:
                print(f"  ... and {len(failed_demos) - 5} more")

    print()
    print(f"Results saved to: {RESULTS_FILE}")
    print()

    return 0 if total_failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
