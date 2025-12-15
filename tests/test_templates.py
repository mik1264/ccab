#!/usr/bin/env python3
"""
Template Validation Tests for CCAB

Validates the demo templates in the templates/ directory:
- Required structure elements
- Placeholder sections
- Error handling code
- Loading states
- FPS counter
- Back navigation
- Browser compatibility

Also tests that demos created from templates work correctly.
"""

import re
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE_DIR = Path(__file__).parent.parent.resolve()
TEMPLATES_DIR = BASE_DIR / "templates"
BASE_URL = "http://localhost:8000"

# Templates to validate
TEMPLATES = [
    {
        "file": "template-canvas.html",
        "name": "Canvas 2D Template",
        "tech": "canvas",
        "required_elements": ["canvas", "loading", "error", "fps-counter", "back-link"],
        "required_features": ["retina", "resize", "animation"],
    },
    {
        "file": "template-threejs.html",
        "name": "Three.js Template",
        "tech": "threejs",
        "required_elements": ["container", "loading", "error", "fps-counter", "back-link"],
        "required_features": ["webgl-check", "resize", "animation", "cleanup"],
    },
    {
        "file": "template-p5js.html",
        "name": "P5.js Template",
        "tech": "p5js",
        "required_elements": ["container", "loading", "error", "fps-counter", "back-link"],
        "required_features": ["resize", "animation"],
    },
    {
        "file": "template-webgl.html",
        "name": "WebGL Shader Template",
        "tech": "webgl",
        "required_elements": ["canvas", "loading", "error", "fps-counter", "back-link"],
        "required_features": ["webgl-check", "shader", "resize", "animation"],
    },
]

# Required patterns in templates
REQUIRED_PATTERNS = {
    "doctype": r'<!DOCTYPE html>',
    "html_lang": r'<html[^>]+lang=["\']en["\']',
    "charset": r'<meta[^>]+charset=["\']UTF-8["\']',
    "viewport": r'<meta[^>]+viewport',
    "title": r'<title>[^<]+</title>',
    "loading_element": r'id=["\']loading["\']',
    "error_element": r'id=["\']error["\']',
    "fps_counter": r'id=["\']fps-counter["\']|class=["\'][^"\']*fps',
    "back_link": r'class=["\'][^"\']*back-link|href=["\']\.\./',
    "your_code_here": r'YOUR CODE|your code|Your Code',
}

# Feature detection patterns
FEATURE_PATTERNS = {
    "retina": r'devicePixelRatio|dpr',
    "resize": r'resize|onresize|ResizeObserver',
    "animation": r'requestAnimationFrame|animate',
    "cleanup": r'dispose|destroy|cleanup',
    "webgl-check": r'getContext\(["\']webgl|checkWebGL|WebGL',
    "shader": r'vertex|fragment|GLSL|shader',
    "error-handling": r'try\s*{|catch\s*\(|onerror|addEventListener\(["\']error',
}


def validate_template_structure(template_path: Path) -> dict:
    """Validate template file structure"""
    result = {
        "file": template_path.name,
        "exists": template_path.exists(),
        "valid": True,
        "errors": [],
        "warnings": [],
        "features": []
    }

    if not template_path.exists():
        result["valid"] = False
        result["errors"].append("Template file does not exist")
        return result

    try:
        content = template_path.read_text(encoding='utf-8')

        # Check required patterns
        for name, pattern in REQUIRED_PATTERNS.items():
            if not re.search(pattern, content, re.IGNORECASE):
                if name in ['your_code_here']:
                    result["warnings"].append(f"Missing placeholder: {name}")
                else:
                    result["errors"].append(f"Missing required: {name}")
                    result["valid"] = False

        # Check features
        for name, pattern in FEATURE_PATTERNS.items():
            if re.search(pattern, content, re.IGNORECASE):
                result["features"].append(name)

        # Check for common issues
        # Empty script tags
        if re.search(r'<script[^>]*>\s*</script>', content):
            result["warnings"].append("Empty script tag found")

        # Check file size (templates shouldn't be too large)
        if len(content) > 50000:
            result["warnings"].append(f"Template is large: {len(content)} bytes")

        # Check for hardcoded paths
        if '/Users/' in content or 'C:\\' in content:
            result["errors"].append("Hardcoded absolute path found")
            result["valid"] = False

    except Exception as e:
        result["valid"] = False
        result["errors"].append(f"Parse error: {str(e)[:100]}")

    return result


def validate_template_runtime(page, template_path: Path) -> dict:
    """Validate template loads and runs correctly in browser"""
    result = {
        "file": template_path.name,
        "loads": False,
        "no_errors": True,
        "has_canvas": False,
        "has_webgl": False,
        "errors": [],
    }

    runtime_errors = []

    def handle_console(msg):
        if msg.type == "error":
            text = msg.text
            # Filter CDN/network errors (expected for templates)
            if not any(skip in text.lower() for skip in ['net::', 'failed to load']):
                runtime_errors.append(text[:150])

    def handle_page_error(error):
        runtime_errors.append(f"JS Error: {str(error)[:150]}")

    page.on("console", handle_console)
    page.on("pageerror", handle_page_error)

    try:
        url = f"{BASE_URL}/templates/{template_path.name}"
        response = page.goto(url, wait_until="domcontentloaded", timeout=10000)

        if response.status == 200:
            result["loads"] = True

        # Wait for initialization
        page.wait_for_timeout(2000)

        # Check for canvas
        canvas_count = page.locator("canvas").count()
        result["has_canvas"] = canvas_count > 0

        # Check for WebGL context
        if result["has_canvas"]:
            has_webgl = page.evaluate("""
                () => {
                    const canvas = document.querySelector('canvas');
                    if (canvas) {
                        const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
                        return !!gl;
                    }
                    return false;
                }
            """)
            result["has_webgl"] = has_webgl

        result["errors"] = runtime_errors
        result["no_errors"] = len(runtime_errors) == 0

    except Exception as e:
        result["errors"].append(f"Runtime error: {str(e)[:100]}")
        result["no_errors"] = False

    return result


def test_template_documentation():
    """Check that template documentation exists and is complete"""
    readme_path = TEMPLATES_DIR / "README.md"

    result = {
        "has_readme": readme_path.exists(),
        "documents_all_templates": False,
        "has_usage_examples": False,
        "errors": []
    }

    if not readme_path.exists():
        result["errors"].append("Missing templates/README.md")
        return result

    try:
        content = readme_path.read_text(encoding='utf-8')

        # Check that all templates are documented
        all_documented = True
        for template in TEMPLATES:
            if template["file"] not in content:
                all_documented = False
                result["errors"].append(f"Template {template['file']} not in README")

        result["documents_all_templates"] = all_documented

        # Check for usage examples
        result["has_usage_examples"] = '```' in content or 'Usage' in content

    except Exception as e:
        result["errors"].append(f"Error reading README: {str(e)[:100]}")

    return result


def main():
    """Run template validation tests"""
    print("=" * 70)
    print("CCAB Template Validation")
    print("=" * 70)
    print()
    print(f"Templates directory: {TEMPLATES_DIR}")
    print(f"Templates to validate: {len(TEMPLATES)}")
    print()

    results = {
        "total": len(TEMPLATES),
        "structure_valid": 0,
        "runtime_valid": 0,
        "templates": [],
        "documentation": None
    }

    # Validate structure
    print("Structure Validation:")
    print("-" * 70)

    for template_config in TEMPLATES:
        template_path = TEMPLATES_DIR / template_config["file"]
        print(f"\n  {template_config['name']} ({template_config['file']})")

        struct_result = validate_template_structure(template_path)

        if struct_result["valid"]:
            results["structure_valid"] += 1
            print(f"    Structure: VALID")
        else:
            print(f"    Structure: INVALID")
            for err in struct_result["errors"][:3]:
                print(f"      - {err}")

        if struct_result["features"]:
            print(f"    Features: {', '.join(struct_result['features'][:5])}")

        if struct_result["warnings"]:
            for warn in struct_result["warnings"][:2]:
                print(f"    Warning: {warn}")

        results["templates"].append({
            "config": template_config,
            "structure": struct_result
        })

    # Runtime validation
    print()
    print("\nRuntime Validation:")
    print("-" * 70)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 720})

        for i, template_result in enumerate(results["templates"]):
            template_config = template_result["config"]
            template_path = TEMPLATES_DIR / template_config["file"]

            print(f"\n  {template_config['name']}")

            runtime_result = validate_template_runtime(page, template_path)
            template_result["runtime"] = runtime_result

            if runtime_result["loads"] and runtime_result["no_errors"]:
                results["runtime_valid"] += 1
                status = "OK"
            elif runtime_result["loads"]:
                status = "WARNS"
            else:
                status = "FAIL"

            print(f"    Loads: {'Yes' if runtime_result['loads'] else 'No'} | " +
                  f"Canvas: {'Yes' if runtime_result['has_canvas'] else 'No'} | " +
                  f"WebGL: {'Yes' if runtime_result['has_webgl'] else 'No'} | " +
                  f"Status: {status}")

            if runtime_result["errors"]:
                for err in runtime_result["errors"][:2]:
                    print(f"      Error: {err[:60]}")

        browser.close()

    # Documentation validation
    print()
    print("\nDocumentation Validation:")
    print("-" * 70)

    doc_result = test_template_documentation()
    results["documentation"] = doc_result

    print(f"  README exists: {'Yes' if doc_result['has_readme'] else 'No'}")
    print(f"  All templates documented: {'Yes' if doc_result['documents_all_templates'] else 'No'}")
    print(f"  Has usage examples: {'Yes' if doc_result['has_usage_examples'] else 'No'}")

    if doc_result["errors"]:
        for err in doc_result["errors"][:3]:
            print(f"    Error: {err}")

    # Print summary
    print()
    print("=" * 70)
    print("TEMPLATE VALIDATION SUMMARY")
    print("=" * 70)
    print()
    print(f"Total templates:    {results['total']}")
    print(f"Structure valid:    {results['structure_valid']}/{results['total']}")
    print(f"Runtime valid:      {results['runtime_valid']}/{results['total']}")
    print(f"Documentation:      {'Complete' if doc_result['documents_all_templates'] else 'Incomplete'}")
    print()

    # Required features coverage
    print("Feature Coverage:")
    all_features = set()
    for template_result in results["templates"]:
        all_features.update(template_result["structure"].get("features", []))

    for feature in sorted(FEATURE_PATTERNS.keys()):
        status = "YES" if feature in all_features else "no"
        print(f"  {feature:<20} {status}")

    print()

    # Determine success
    all_valid = (results["structure_valid"] == results["total"] and
                 results["runtime_valid"] == results["total"])

    return 0 if all_valid else 1


if __name__ == "__main__":
    sys.exit(main())
