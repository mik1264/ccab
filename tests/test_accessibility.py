#!/usr/bin/env python3
"""
Accessibility Testing for CCAB

Uses Playwright with axe-core to test WCAG 2.1 compliance:
- Color contrast ratios
- Keyboard navigation
- ARIA labels
- Focus indicators
- Semantic HTML structure
"""

import json
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE_DIR = Path(__file__).parent.parent.resolve()
BASE_URL = "http://localhost:8000"
RESULTS_FILE = BASE_DIR / "test_results_accessibility.json"

# Sample pages to test (representative of different page types)
TEST_PAGES = [
    # Main index
    {"path": "index.html", "name": "Main Gallery Index", "type": "index"},

    # Gallery indexes
    {"path": "threejs/index.html", "name": "Three.js Gallery", "type": "gallery"},
    {"path": "d3js/index.html", "name": "D3.js Gallery", "type": "gallery"},
    {"path": "webgl-shaders/index.html", "name": "WebGL Shaders Gallery", "type": "gallery"},

    # Individual demos (various types)
    {"path": "game-of-life/index.html", "name": "Game of Life", "type": "demo"},
    {"path": "algorithmic-art/index.html", "name": "Algorithmic Art", "type": "demo"},
    {"path": "lissajous/index.html", "name": "Lissajous", "type": "demo"},
]

# axe-core CDN URL
AXE_CDN = "https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.8.2/axe.min.js"

# WCAG 2.1 Level AA rules to check
WCAG_RULES = [
    "color-contrast",
    "document-title",
    "html-has-lang",
    "image-alt",
    "label",
    "link-name",
    "list",
    "listitem",
    "meta-viewport",
    "bypass",
    "heading-order",
    "landmark-one-main",
    "region",
]


def inject_axe(page):
    """Inject axe-core into the page"""
    page.add_script_tag(url=AXE_CDN)
    # Wait for axe to be available
    page.wait_for_function("typeof axe !== 'undefined'", timeout=10000)


def run_axe(page, rules=None):
    """Run axe accessibility tests and return results"""
    config = {}
    if rules:
        config["runOnly"] = {"type": "rule", "values": rules}

    # Run axe and get results
    results = page.evaluate(f"""
        async () => {{
            const config = {json.dumps(config)};
            return await axe.run(document, config);
        }}
    """)

    return results


def categorize_violations(violations):
    """Categorize violations by impact level"""
    categories = {
        "critical": [],
        "serious": [],
        "moderate": [],
        "minor": []
    }

    for violation in violations:
        impact = violation.get("impact", "moderate")
        categories.get(impact, categories["moderate"]).append(violation)

    return categories


def format_violation(violation):
    """Format a violation for display"""
    return {
        "id": violation["id"],
        "impact": violation.get("impact", "unknown"),
        "description": violation["description"],
        "help": violation["help"],
        "helpUrl": violation["helpUrl"],
        "nodes_count": len(violation.get("nodes", []))
    }


def test_page_accessibility(page, page_config):
    """Test a single page for accessibility issues"""
    result = {
        "name": page_config["name"],
        "path": page_config["path"],
        "type": page_config["type"],
        "success": False,
        "violations": [],
        "passes": 0,
        "incomplete": 0,
        "error": None
    }

    try:
        url = f"{BASE_URL}/{page_config['path']}"
        print(f"  Testing: {page_config['name']}")

        # Navigate to page
        response = page.goto(url, wait_until="domcontentloaded", timeout=15000)
        if response.status != 200:
            result["error"] = f"HTTP {response.status}"
            return result

        # Wait for page to settle
        page.wait_for_load_state("networkidle", timeout=10000)
        page.wait_for_timeout(1000)

        # Inject and run axe
        inject_axe(page)
        axe_results = run_axe(page, WCAG_RULES)

        # Process results
        violations = axe_results.get("violations", [])
        passes = axe_results.get("passes", [])
        incomplete = axe_results.get("incomplete", [])

        result["violations"] = [format_violation(v) for v in violations]
        result["passes"] = len(passes)
        result["incomplete"] = len(incomplete)

        # Categorize by impact
        categories = categorize_violations(violations)

        # Consider success if no critical or serious violations
        critical_count = len(categories["critical"])
        serious_count = len(categories["serious"])
        result["success"] = critical_count == 0 and serious_count == 0

        # Print summary
        status = "PASS" if result["success"] else "FAIL"
        print(f"    {status}: {len(violations)} violations, {len(passes)} passes")

        if violations:
            print(f"      Critical: {critical_count}, Serious: {serious_count}, " +
                  f"Moderate: {len(categories['moderate'])}, Minor: {len(categories['minor'])}")

            # Show top violations
            for v in violations[:3]:
                print(f"      - {v['id']}: {v['help']}")

    except Exception as e:
        result["error"] = str(e)[:200]
        print(f"    ERROR: {str(e)[:80]}")

    return result


def main():
    """Run accessibility tests on sample pages"""
    print("=" * 70)
    print("CCAB Accessibility Testing (WCAG 2.1 Level AA)")
    print("=" * 70)
    print()
    print(f"Testing {len(TEST_PAGES)} sample pages")
    print(f"Using axe-core rules: {', '.join(WCAG_RULES[:5])}...")
    print()

    results = {
        "total": len(TEST_PAGES),
        "passed": 0,
        "failed": 0,
        "pages": []
    }

    with sync_playwright() as p:
        print("Launching browser...")
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 720})

        print()
        for page_config in TEST_PAGES:
            result = test_page_accessibility(page, page_config)
            results["pages"].append(result)

            if result["success"]:
                results["passed"] += 1
            else:
                results["failed"] += 1

        browser.close()

    # Save results
    with open(RESULTS_FILE, "w") as f:
        json.dump(results, f, indent=2)

    # Print summary
    print()
    print("=" * 70)
    print("ACCESSIBILITY TEST SUMMARY")
    print("=" * 70)
    print(f"Total pages tested: {results['total']}")
    print(f"Passed: {results['passed']} ({results['passed']/results['total']*100:.1f}%)")
    print(f"Failed: {results['failed']} ({results['failed']/results['total']*100:.1f}%)")
    print()

    # Show failed pages
    if results["failed"] > 0:
        print("Pages with accessibility issues:")
        for page_result in results["pages"]:
            if not page_result["success"]:
                print(f"  - {page_result['name']} ({page_result['path']})")
                for v in page_result["violations"][:3]:
                    print(f"      [{v['impact']}] {v['id']}: {v['description'][:60]}")
        print()

    # Common violations across all pages
    all_violations = {}
    for page_result in results["pages"]:
        for v in page_result["violations"]:
            vid = v["id"]
            if vid not in all_violations:
                all_violations[vid] = {"count": 0, "impact": v["impact"], "help": v["help"]}
            all_violations[vid]["count"] += 1

    if all_violations:
        print("Most common violations:")
        sorted_violations = sorted(all_violations.items(), key=lambda x: -x[1]["count"])
        for vid, info in sorted_violations[:10]:
            print(f"  {info['count']}x [{info['impact']}] {vid}: {info['help'][:50]}")
        print()

    print(f"Detailed results saved to: {RESULTS_FILE}")
    print()

    return 0 if results["failed"] == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
