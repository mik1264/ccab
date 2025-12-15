#!/usr/bin/env python3
"""
Visual Regression Testing for CCAB

Captures screenshots and compares against baselines:
- Detects visual changes in demos
- Generates diff images for failed comparisons
- Supports updating baselines

Usage:
    python test_visual_regression.py          # Run tests
    python test_visual_regression.py --update # Update baselines
"""

import argparse
import json
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE_DIR = Path(__file__).parent.parent.resolve()
BASE_URL = "http://localhost:8000"
BASELINE_DIR = BASE_DIR / "tests" / "visual_baselines"
CURRENT_DIR = BASE_DIR / "tests" / "visual_current"
DIFF_DIR = BASE_DIR / "tests" / "visual_diffs"
RESULTS_FILE = BASE_DIR / "test_results_visual.json"

# Sample pages to test for visual regression
# Focus on static/deterministic pages (animations will differ)
TEST_PAGES = [
    {"path": "index.html", "name": "Main Index", "wait": 1000},
    {"path": "threejs/index.html", "name": "Three.js Gallery", "wait": 500},
    {"path": "d3js/index.html", "name": "D3.js Gallery", "wait": 500},
    {"path": "webgl-shaders/index.html", "name": "WebGL Gallery", "wait": 500},
    {"path": "game-of-life/index.html", "name": "Game of Life Gallery", "wait": 500},
    {"path": "algorithmic-art/index.html", "name": "Algorithmic Art", "wait": 500},
    {"path": "altruism-evolution/index.html", "name": "Altruism Evolution", "wait": 500},
    {"path": "biological-simulations/index.html", "name": "Biological Simulations", "wait": 500},
]

# Threshold for pixel difference (0-255 per channel)
PIXEL_THRESHOLD = 10
# Maximum percentage of different pixels allowed
MAX_DIFF_PERCENT = 1.0


def ensure_dirs():
    """Create necessary directories"""
    BASELINE_DIR.mkdir(parents=True, exist_ok=True)
    CURRENT_DIR.mkdir(parents=True, exist_ok=True)
    DIFF_DIR.mkdir(parents=True, exist_ok=True)


def get_screenshot_path(base_dir: Path, page_config: dict) -> Path:
    """Get screenshot path for a page"""
    name = page_config["path"].replace("/", "_").replace(".html", ".png")
    return base_dir / name


def capture_screenshot(page, page_config: dict, output_path: Path) -> bool:
    """Capture a screenshot of a page"""
    try:
        url = f"{BASE_URL}/{page_config['path']}"
        response = page.goto(url, wait_until="domcontentloaded", timeout=15000)

        if response.status != 200:
            print(f"    HTTP {response.status}")
            return False

        # Wait for page to settle
        page.wait_for_load_state("networkidle", timeout=10000)
        page.wait_for_timeout(page_config.get("wait", 1000))

        # Capture screenshot
        page.screenshot(path=str(output_path), full_page=False)
        return True

    except Exception as e:
        print(f"    Error: {str(e)[:60]}")
        return False


def compare_images_basic(img1_path: Path, img2_path: Path) -> tuple[bool, float, Path | None]:
    """
    Basic image comparison using raw bytes.
    Returns (is_same, diff_percent, diff_path)
    """
    if not img1_path.exists() or not img2_path.exists():
        return False, 100.0, None

    data1 = img1_path.read_bytes()
    data2 = img2_path.read_bytes()

    # Quick check for identical images
    if data1 == data2:
        return True, 0.0, None

    # Different sizes = different images
    if len(data1) != len(data2):
        return False, 100.0, None

    # Count different bytes
    diff_count = sum(1 for a, b in zip(data1, data2) if a != b)
    diff_percent = (diff_count / len(data1)) * 100

    return diff_percent <= MAX_DIFF_PERCENT, diff_percent, None


def compare_images_pil(img1_path: Path, img2_path: Path, diff_path: Path) -> tuple[bool, float, Path | None]:
    """
    Image comparison using PIL with diff image generation.
    Returns (is_same, diff_percent, diff_path)
    """
    try:
        from PIL import Image, ImageChops, ImageDraw
    except ImportError:
        # Fall back to basic comparison
        return compare_images_basic(img1_path, img2_path)

    if not img1_path.exists() or not img2_path.exists():
        return False, 100.0, None

    img1 = Image.open(img1_path).convert('RGB')
    img2 = Image.open(img2_path).convert('RGB')

    # Check dimensions
    if img1.size != img2.size:
        return False, 100.0, None

    # Calculate difference
    diff = ImageChops.difference(img1, img2)

    # Count pixels that differ significantly
    diff_pixels = 0
    total_pixels = img1.size[0] * img1.size[1]

    diff_data = diff.getdata()
    for pixel in diff_data:
        if any(channel > PIXEL_THRESHOLD for channel in pixel):
            diff_pixels += 1

    diff_percent = (diff_pixels / total_pixels) * 100

    # Generate diff image if there are differences
    if diff_pixels > 0:
        # Enhance the diff for visibility
        diff_enhanced = Image.new('RGB', img1.size, (0, 0, 0))
        draw = ImageDraw.Draw(diff_enhanced)

        for y in range(img1.size[1]):
            for x in range(img1.size[0]):
                idx = y * img1.size[0] + x
                pixel = diff_data[idx]
                if any(channel > PIXEL_THRESHOLD for channel in pixel):
                    # Highlight differences in red
                    draw.point((x, y), fill=(255, 0, 0))
                else:
                    # Show original faintly
                    orig = img1.getpixel((x, y))
                    draw.point((x, y), fill=tuple(c // 4 for c in orig))

        diff_enhanced.save(diff_path)
        return diff_percent <= MAX_DIFF_PERCENT, diff_percent, diff_path

    return True, 0.0, None


def run_tests(update_baselines: bool = False):
    """Run visual regression tests"""
    print("=" * 70)
    print("CCAB Visual Regression Testing")
    print("=" * 70)
    print()

    ensure_dirs()

    if update_baselines:
        print("MODE: Updating baselines")
    else:
        print("MODE: Comparing against baselines")
    print()

    results = {
        "mode": "update" if update_baselines else "compare",
        "total": len(TEST_PAGES),
        "passed": 0,
        "failed": 0,
        "new": 0,
        "pages": []
    }

    with sync_playwright() as p:
        print("Launching browser...")
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 720})

        print()
        for page_config in TEST_PAGES:
            print(f"  {page_config['name']}:")

            baseline_path = get_screenshot_path(BASELINE_DIR, page_config)
            current_path = get_screenshot_path(CURRENT_DIR, page_config)
            diff_path = get_screenshot_path(DIFF_DIR, page_config)

            page_result = {
                "name": page_config["name"],
                "path": page_config["path"],
                "status": "unknown",
                "diff_percent": 0.0,
                "diff_path": None
            }

            if update_baselines:
                # Update baseline
                success = capture_screenshot(page, page_config, baseline_path)
                if success:
                    page_result["status"] = "updated"
                    results["passed"] += 1
                    print(f"    Baseline updated")
                else:
                    page_result["status"] = "error"
                    results["failed"] += 1

            else:
                # Compare against baseline
                if not baseline_path.exists():
                    # No baseline - capture and mark as new
                    capture_screenshot(page, page_config, baseline_path)
                    page_result["status"] = "new_baseline"
                    results["new"] += 1
                    print(f"    NEW: Baseline created")

                else:
                    # Capture current and compare
                    success = capture_screenshot(page, page_config, current_path)

                    if not success:
                        page_result["status"] = "capture_error"
                        results["failed"] += 1
                    else:
                        is_same, diff_percent, diff_generated = compare_images_pil(
                            baseline_path, current_path, diff_path
                        )

                        page_result["diff_percent"] = diff_percent

                        if is_same:
                            page_result["status"] = "passed"
                            results["passed"] += 1
                            print(f"    PASS: {diff_percent:.2f}% different")
                        else:
                            page_result["status"] = "failed"
                            results["failed"] += 1
                            if diff_generated:
                                page_result["diff_path"] = str(diff_generated)
                            print(f"    FAIL: {diff_percent:.2f}% different")

            results["pages"].append(page_result)

        browser.close()

    # Save results
    with open(RESULTS_FILE, "w") as f:
        json.dump(results, f, indent=2)

    # Print summary
    print()
    print("=" * 70)
    print("VISUAL REGRESSION SUMMARY")
    print("=" * 70)
    print(f"Total pages:    {results['total']}")
    print(f"Passed:         {results['passed']}")
    print(f"Failed:         {results['failed']}")
    print(f"New baselines:  {results['new']}")
    print()

    if results["failed"] > 0:
        print("Failed pages:")
        for page_result in results["pages"]:
            if page_result["status"] == "failed":
                print(f"  - {page_result['name']}: {page_result['diff_percent']:.2f}% different")
                if page_result.get("diff_path"):
                    print(f"    Diff: {page_result['diff_path']}")
        print()

    print(f"Baselines:  {BASELINE_DIR}")
    print(f"Current:    {CURRENT_DIR}")
    print(f"Diffs:      {DIFF_DIR}")
    print(f"Results:    {RESULTS_FILE}")
    print()

    return 0 if results["failed"] == 0 else 1


def main():
    parser = argparse.ArgumentParser(description="Visual Regression Testing for CCAB")
    parser.add_argument("--update", action="store_true", help="Update baseline images")
    args = parser.parse_args()

    return run_tests(update_baselines=args.update)


if __name__ == "__main__":
    sys.exit(main())
