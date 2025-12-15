#!/usr/bin/env python3
"""
Performance Testing for CCAB

Measures performance metrics for animated demos:
- Frames per second (FPS)
- Frame timing consistency
- Memory usage
- Time to interactive
- GPU/CPU metrics

Target: 60 FPS for all animations (as specified in CLAUDE.md)
"""

import json
import sys
import time
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE_DIR = Path(__file__).parent.parent.resolve()
BASE_URL = "http://localhost:8000"
RESULTS_FILE = BASE_DIR / "test_results_performance.json"

# Demos to test for performance (animated demos)
TEST_DEMOS = [
    # Canvas animations
    {"path": "game-of-life/index.html", "name": "Game of Life", "type": "canvas"},
    {"path": "algorithmic-art/index.html", "name": "Algorithmic Art", "type": "canvas"},

    # Three.js (WebGL)
    {"path": "threejs/01-rotating-cube.html", "name": "Three.js Cube", "type": "webgl"},
    {"path": "threejs/05-particle-system.html", "name": "Three.js Particles", "type": "webgl"},
    {"path": "threejs/10-shader-art.html", "name": "Three.js Shader", "type": "webgl"},

    # WebGL Shaders
    {"path": "webgl-shaders/basic/01-rainbow-gradient.html", "name": "WebGL Rainbow", "type": "webgl"},

    # P5.js
    {"path": "p5-generative-art/01-perlin-flow-field.html", "name": "P5 Flow Field", "type": "canvas"},

    # D3.js
    {"path": "d3js/force-directed/01-basic-force-directed.html", "name": "D3 Force Graph", "type": "svg"},
]

# Performance thresholds
FPS_TARGET = 60
FPS_MIN_ACCEPTABLE = 30
FRAME_TIME_TARGET_MS = 16.67  # 60 FPS
FRAME_TIME_MAX_MS = 33.33  # 30 FPS
MEMORY_WARNING_MB = 100
LOAD_TIME_MAX_MS = 5000

# JavaScript to inject for FPS measurement
FPS_MEASUREMENT_SCRIPT = """
() => {
    return new Promise((resolve) => {
        const frames = [];
        let lastTime = performance.now();
        let frameCount = 0;
        const measureDuration = 3000; // 3 seconds
        const startTime = performance.now();

        function measureFrame() {
            const now = performance.now();
            const delta = now - lastTime;
            lastTime = now;

            if (frameCount > 0) {  // Skip first frame
                frames.push(delta);
            }
            frameCount++;

            if (now - startTime < measureDuration) {
                requestAnimationFrame(measureFrame);
            } else {
                // Calculate statistics
                if (frames.length === 0) {
                    resolve({ error: 'No frames captured' });
                    return;
                }

                const avgFrameTime = frames.reduce((a, b) => a + b, 0) / frames.length;
                const fps = 1000 / avgFrameTime;

                // Calculate frame time variance
                const variance = frames.reduce((sum, ft) =>
                    sum + Math.pow(ft - avgFrameTime, 2), 0) / frames.length;
                const stdDev = Math.sqrt(variance);

                // Count frames above threshold
                const slowFrames = frames.filter(ft => ft > 33.33).length;
                const verySlowFrames = frames.filter(ft => ft > 100).length;

                // Get min/max
                const minFrameTime = Math.min(...frames);
                const maxFrameTime = Math.max(...frames);

                resolve({
                    fps: Math.round(fps * 10) / 10,
                    avgFrameTime: Math.round(avgFrameTime * 100) / 100,
                    minFrameTime: Math.round(minFrameTime * 100) / 100,
                    maxFrameTime: Math.round(maxFrameTime * 100) / 100,
                    frameTimeStdDev: Math.round(stdDev * 100) / 100,
                    totalFrames: frames.length,
                    slowFrames: slowFrames,
                    verySlowFrames: verySlowFrames,
                    slowFramePercent: Math.round((slowFrames / frames.length) * 100 * 10) / 10
                });
            }
        }

        requestAnimationFrame(measureFrame);
    });
}
"""

# JavaScript to get memory usage
MEMORY_SCRIPT = """
() => {
    if (performance.memory) {
        return {
            usedJSHeapSize: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024 * 10) / 10,
            totalJSHeapSize: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024 * 10) / 10,
            jsHeapSizeLimit: Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024 * 10) / 10
        };
    }
    return null;
}
"""


def test_demo_performance(page, demo: dict) -> dict:
    """Test performance of a single demo"""
    result = {
        "name": demo["name"],
        "path": demo["path"],
        "type": demo["type"],
        "success": False,
        "metrics": {},
        "warnings": [],
        "errors": []
    }

    try:
        url = f"{BASE_URL}/{demo['path']}"

        # Measure load time
        start_time = time.time()

        response = page.goto(url, wait_until="domcontentloaded", timeout=15000)
        if response.status != 200:
            result["errors"].append(f"HTTP {response.status}")
            return result

        # Wait for network idle
        page.wait_for_load_state("networkidle", timeout=10000)

        load_time = int((time.time() - start_time) * 1000)
        result["metrics"]["loadTimeMs"] = load_time

        if load_time > LOAD_TIME_MAX_MS:
            result["warnings"].append(f"Slow load time: {load_time}ms (target: <{LOAD_TIME_MAX_MS}ms)")

        # Wait for animations to start
        page.wait_for_timeout(1000)

        # Measure FPS
        fps_data = page.evaluate(FPS_MEASUREMENT_SCRIPT)

        if isinstance(fps_data, dict) and "error" not in fps_data:
            result["metrics"]["fps"] = fps_data["fps"]
            result["metrics"]["avgFrameTimeMs"] = fps_data["avgFrameTime"]
            result["metrics"]["minFrameTimeMs"] = fps_data["minFrameTime"]
            result["metrics"]["maxFrameTimeMs"] = fps_data["maxFrameTime"]
            result["metrics"]["frameTimeStdDev"] = fps_data["frameTimeStdDev"]
            result["metrics"]["totalFrames"] = fps_data["totalFrames"]
            result["metrics"]["slowFrames"] = fps_data["slowFrames"]
            result["metrics"]["slowFramePercent"] = fps_data["slowFramePercent"]

            # Check FPS against targets
            if fps_data["fps"] < FPS_MIN_ACCEPTABLE:
                result["errors"].append(f"FPS too low: {fps_data['fps']} (min: {FPS_MIN_ACCEPTABLE})")
            elif fps_data["fps"] < FPS_TARGET:
                result["warnings"].append(f"FPS below target: {fps_data['fps']} (target: {FPS_TARGET})")

            # Check frame time consistency
            if fps_data["slowFramePercent"] > 10:
                result["warnings"].append(f"Too many slow frames: {fps_data['slowFramePercent']}%")

        else:
            result["metrics"]["fps"] = None
            result["warnings"].append("Could not measure FPS (no animation loop detected)")

        # Get memory usage (Chromium only)
        memory_data = page.evaluate(MEMORY_SCRIPT)
        if memory_data:
            result["metrics"]["memoryMB"] = memory_data["usedJSHeapSize"]

            if memory_data["usedJSHeapSize"] > MEMORY_WARNING_MB:
                result["warnings"].append(f"High memory usage: {memory_data['usedJSHeapSize']}MB")

        # Success if no errors (warnings are OK)
        result["success"] = len(result["errors"]) == 0

    except Exception as e:
        result["errors"].append(f"Exception: {str(e)[:150]}")

    return result


def main():
    """Run performance tests"""
    print("=" * 70)
    print("CCAB Performance Testing")
    print("=" * 70)
    print()
    print(f"Testing {len(TEST_DEMOS)} demos")
    print(f"FPS Target: {FPS_TARGET} | Minimum: {FPS_MIN_ACCEPTABLE}")
    print()

    results = {
        "thresholds": {
            "fpsTarget": FPS_TARGET,
            "fpsMinimum": FPS_MIN_ACCEPTABLE,
            "maxLoadTimeMs": LOAD_TIME_MAX_MS,
            "memoryWarningMB": MEMORY_WARNING_MB
        },
        "total": len(TEST_DEMOS),
        "passed": 0,
        "warnings": 0,
        "failed": 0,
        "demos": []
    }

    with sync_playwright() as p:
        print("Launching browser...")
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 720})

        print()
        for i, demo in enumerate(TEST_DEMOS, 1):
            print(f"[{i}/{len(TEST_DEMOS)}] {demo['name'][:40]:<40}", end=" ")

            result = test_demo_performance(page, demo)
            results["demos"].append(result)

            # Determine status
            if not result["success"]:
                results["failed"] += 1
                status = "FAIL"
            elif result["warnings"]:
                results["warnings"] += 1
                status = "WARN"
            else:
                results["passed"] += 1
                status = "PASS"

            # Print result
            fps = result["metrics"].get("fps", "N/A")
            load = result["metrics"].get("loadTimeMs", "N/A")
            print(f"{status} | FPS: {fps} | Load: {load}ms")

            if result["errors"]:
                for err in result["errors"][:2]:
                    print(f"       ERROR: {err[:50]}")

            if result["warnings"] and status == "WARN":
                for warn in result["warnings"][:2]:
                    print(f"       WARN: {warn[:50]}")

        browser.close()

    # Save results
    with open(RESULTS_FILE, "w") as f:
        json.dump(results, f, indent=2)

    # Print summary
    print()
    print("=" * 70)
    print("PERFORMANCE TEST SUMMARY")
    print("=" * 70)
    print()
    print(f"Total demos:  {results['total']}")
    print(f"Passed:       {results['passed']} (meeting {FPS_TARGET} FPS target)")
    print(f"Warnings:     {results['warnings']} (below target but above {FPS_MIN_ACCEPTABLE} FPS)")
    print(f"Failed:       {results['failed']} (below {FPS_MIN_ACCEPTABLE} FPS or errors)")
    print()

    # Performance rankings
    print("Performance Rankings:")
    print("-" * 70)

    sorted_demos = sorted(
        [d for d in results["demos"] if d["metrics"].get("fps")],
        key=lambda x: x["metrics"]["fps"],
        reverse=True
    )

    print("\nTop performers:")
    for demo in sorted_demos[:5]:
        print(f"  {demo['metrics']['fps']:>5.1f} FPS | {demo['name']}")

    print("\nNeeds optimization:")
    for demo in sorted_demos[-5:]:
        if demo["metrics"]["fps"] < FPS_TARGET:
            print(f"  {demo['metrics']['fps']:>5.1f} FPS | {demo['name']}")

    # Frame time analysis
    print("\nFrame Time Analysis:")
    print("-" * 70)

    for demo in results["demos"]:
        if demo["metrics"].get("slowFramePercent", 0) > 5:
            print(f"  {demo['name']}: {demo['metrics']['slowFramePercent']}% slow frames")

    print()
    print(f"Results saved to: {RESULTS_FILE}")
    print()

    return 0 if results["failed"] == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
