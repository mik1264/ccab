#!/usr/bin/env python3
"""
CCAB Comprehensive Test Runner

Runs all test suites and generates a combined report.

Usage:
    python tests/run_all_tests.py              # Run all tests
    python tests/run_all_tests.py --quick      # Run quick tests only
    python tests/run_all_tests.py --browser    # Run browser tests only
    python tests/run_all_tests.py --no-server  # Skip server start (if already running)
"""

import argparse
import json
import subprocess
import sys
import time
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent.resolve()
TESTS_DIR = BASE_DIR / "tests"

# Test suites categorized by type
QUICK_TESTS = [
    {"name": "Link Validation", "script": "test_links.py", "needs_server": False},
    {"name": "HTML/CSS Validation", "script": "test_html_css_validation.py", "needs_server": False},
]

BROWSER_TESTS = [
    {"name": "Demo Tests (Sample)", "script": "../test_demos.py", "needs_server": True},
    {"name": "Accessibility", "script": "test_accessibility.py", "needs_server": True},
    {"name": "Template Validation", "script": "test_templates.py", "needs_server": True},
    {"name": "Cross-Browser", "script": "test_cross_browser.py", "needs_server": True},
    {"name": "Performance", "script": "test_performance.py", "needs_server": True},
    {"name": "Visual Regression", "script": "test_visual_regression.py", "needs_server": True},
]


def start_server():
    """Start a local HTTP server"""
    print("Starting HTTP server on port 8000...")
    server = subprocess.Popen(
        ["python", "-m", "http.server", "8000"],
        cwd=BASE_DIR,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )
    time.sleep(2)  # Give server time to start
    return server


def stop_server(server):
    """Stop the HTTP server"""
    if server:
        server.terminate()
        server.wait()
        print("Server stopped.")


def run_test(test_config: dict) -> dict:
    """Run a single test and return results"""
    result = {
        "name": test_config["name"],
        "script": test_config["script"],
        "success": False,
        "duration": 0,
        "output": "",
        "error": None
    }

    script_path = TESTS_DIR / test_config["script"]
    if not script_path.exists():
        # Try relative to BASE_DIR
        script_path = BASE_DIR / test_config["script"].lstrip("../")

    if not script_path.exists():
        result["error"] = f"Script not found: {test_config['script']}"
        return result

    print(f"\n{'='*60}")
    print(f"Running: {test_config['name']}")
    print(f"{'='*60}")

    start_time = time.time()

    try:
        proc = subprocess.run(
            ["python", str(script_path)],
            cwd=BASE_DIR,
            capture_output=True,
            text=True,
            timeout=600  # 10 minute timeout
        )

        result["duration"] = time.time() - start_time
        result["output"] = proc.stdout + proc.stderr
        result["success"] = proc.returncode == 0

        # Print output
        print(proc.stdout)
        if proc.stderr:
            print(proc.stderr, file=sys.stderr)

    except subprocess.TimeoutExpired:
        result["error"] = "Test timed out after 10 minutes"
        print(f"ERROR: {result['error']}")

    except Exception as e:
        result["error"] = str(e)
        print(f"ERROR: {result['error']}")

    return result


def run_node_tests() -> dict:
    """Run Node.js unit tests"""
    result = {
        "name": "JavaScript Unit Tests",
        "script": "test-demo-utils.js",
        "success": False,
        "duration": 0,
        "output": "",
        "error": None
    }

    script_path = TESTS_DIR / "test-demo-utils.js"
    if not script_path.exists():
        result["error"] = "Script not found"
        return result

    print(f"\n{'='*60}")
    print(f"Running: JavaScript Unit Tests")
    print(f"{'='*60}")

    start_time = time.time()

    try:
        proc = subprocess.run(
            ["node", str(script_path)],
            cwd=BASE_DIR,
            capture_output=True,
            text=True,
            timeout=60
        )

        result["duration"] = time.time() - start_time
        result["output"] = proc.stdout + proc.stderr
        result["success"] = proc.returncode == 0

        print(proc.stdout)
        if proc.stderr:
            print(proc.stderr, file=sys.stderr)

    except FileNotFoundError:
        result["error"] = "Node.js not found - skipping JS tests"
        print(f"WARNING: {result['error']}")
        result["success"] = True  # Don't fail if Node isn't available

    except Exception as e:
        result["error"] = str(e)
        print(f"ERROR: {result['error']}")

    return result


def main():
    parser = argparse.ArgumentParser(description="CCAB Comprehensive Test Runner")
    parser.add_argument("--quick", action="store_true", help="Run quick tests only")
    parser.add_argument("--browser", action="store_true", help="Run browser tests only")
    parser.add_argument("--no-server", action="store_true", help="Don't start HTTP server")
    args = parser.parse_args()

    print("=" * 70)
    print("CCAB COMPREHENSIVE TEST SUITE")
    print("=" * 70)
    print()

    results = {
        "total": 0,
        "passed": 0,
        "failed": 0,
        "skipped": 0,
        "tests": []
    }

    server = None

    # Determine which tests to run
    tests_to_run = []

    if args.quick:
        tests_to_run = QUICK_TESTS
    elif args.browser:
        tests_to_run = BROWSER_TESTS
    else:
        tests_to_run = QUICK_TESTS + BROWSER_TESTS

    # Check if we need a server
    needs_server = any(t.get("needs_server") for t in tests_to_run) and not args.no_server

    try:
        # Start server if needed
        if needs_server:
            server = start_server()

        # Run Node.js unit tests first (if not quick mode)
        if not args.quick:
            node_result = run_node_tests()
            results["tests"].append(node_result)
            results["total"] += 1
            if node_result["success"]:
                results["passed"] += 1
            else:
                results["failed"] += 1

        # Run Python tests
        for test_config in tests_to_run:
            if test_config.get("needs_server") and args.no_server:
                print(f"\nSkipping {test_config['name']} (requires server)")
                results["skipped"] += 1
                continue

            result = run_test(test_config)
            results["tests"].append(result)
            results["total"] += 1

            if result["success"]:
                results["passed"] += 1
            else:
                results["failed"] += 1

    finally:
        if server:
            stop_server(server)

    # Print summary
    print()
    print("=" * 70)
    print("FINAL SUMMARY")
    print("=" * 70)
    print()
    print(f"{'Test Suite':<35} {'Status':<10} {'Duration':<10}")
    print("-" * 55)

    for test in results["tests"]:
        status = "PASS" if test["success"] else "FAIL"
        duration = f"{test['duration']:.1f}s" if test["duration"] else "N/A"
        print(f"{test['name']:<35} {status:<10} {duration:<10}")

    print("-" * 55)
    print(f"Total: {results['total']} | Passed: {results['passed']} | " +
          f"Failed: {results['failed']} | Skipped: {results['skipped']}")
    print()

    # Save results
    results_file = BASE_DIR / "test_results_combined.json"
    with open(results_file, "w") as f:
        json.dump(results, f, indent=2)
    print(f"Results saved to: {results_file}")

    # Return appropriate exit code
    return 0 if results["failed"] == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
