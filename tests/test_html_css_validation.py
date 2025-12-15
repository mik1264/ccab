#!/usr/bin/env python3
"""
HTML/CSS Validation for CCAB

Validates HTML and CSS across all demo files:
- HTML5 structure validation
- Required elements (doctype, html, head, body)
- Meta tags (charset, viewport)
- CSS syntax validation
- Common issues detection
"""

import re
import sys
from pathlib import Path
from html.parser import HTMLParser
from collections import defaultdict

BASE_DIR = Path(__file__).parent.parent.resolve()

# Patterns to skip
SKIP_PATTERNS = [
    '.venv', 'node_modules', 'design-alternatives', '.git',
    'test_screenshots', '__pycache__', 'tests/'
]


class HTMLValidator(HTMLParser):
    """Validates HTML structure and common issues"""

    def __init__(self):
        super().__init__()
        self.errors = []
        self.warnings = []
        self.has_doctype = False
        self.has_html = False
        self.has_head = False
        self.has_body = False
        self.has_title = False
        self.has_charset = False
        self.has_viewport = False
        self.has_lang = False
        self.open_tags = []
        self.in_head = False
        self.in_body = False
        self.tag_counts = defaultdict(int)
        self.has_canvas = False
        self.has_back_link = False
        self.scripts = []
        self.styles = []

    def handle_decl(self, decl):
        if decl.lower().startswith('doctype'):
            self.has_doctype = True

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        self.tag_counts[tag] += 1

        # Track open tags
        void_elements = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img',
                        'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}
        if tag not in void_elements:
            self.open_tags.append(tag)

        # Check specific elements
        if tag == 'html':
            self.has_html = True
            if 'lang' in attrs_dict:
                self.has_lang = True

        elif tag == 'head':
            self.has_head = True
            self.in_head = True

        elif tag == 'body':
            self.has_body = True
            self.in_body = True
            self.in_head = False

        elif tag == 'title':
            self.has_title = True

        elif tag == 'meta':
            if attrs_dict.get('charset'):
                self.has_charset = True
            if attrs_dict.get('name') == 'viewport':
                self.has_viewport = True

        elif tag == 'canvas':
            self.has_canvas = True

        elif tag == 'a':
            href = attrs_dict.get('href', '')
            classes = attrs_dict.get('class', '')
            if 'back' in classes.lower() or '../index.html' in href:
                self.has_back_link = True

        elif tag == 'script':
            src = attrs_dict.get('src', '')
            if src:
                self.scripts.append(src)

        elif tag == 'link':
            if attrs_dict.get('rel') == 'stylesheet':
                href = attrs_dict.get('href', '')
                if href:
                    self.styles.append(href)

    def handle_endtag(self, tag):
        if self.open_tags and self.open_tags[-1] == tag:
            self.open_tags.pop()
        elif tag in self.open_tags:
            # Tag closed out of order
            self.warnings.append(f"Tag <{tag}> closed out of order")

        if tag == 'head':
            self.in_head = False
        elif tag == 'body':
            self.in_body = False

    def validate(self):
        """Run validation checks"""
        # Required structure
        if not self.has_doctype:
            self.errors.append("Missing <!DOCTYPE html>")
        if not self.has_html:
            self.errors.append("Missing <html> element")
        if not self.has_head:
            self.errors.append("Missing <head> element")
        if not self.has_body:
            self.errors.append("Missing <body> element")
        if not self.has_title:
            self.warnings.append("Missing <title> element")

        # Meta tags
        if not self.has_charset:
            self.warnings.append("Missing charset meta tag")
        if not self.has_viewport:
            self.warnings.append("Missing viewport meta tag")

        # Accessibility
        if not self.has_lang:
            self.warnings.append("Missing lang attribute on <html>")

        # Unclosed tags
        if self.open_tags:
            self.errors.append(f"Unclosed tags: {', '.join(self.open_tags[-5:])}")

        return len(self.errors) == 0


def validate_css_syntax(css_content: str) -> list:
    """Basic CSS syntax validation"""
    errors = []

    # Check for unmatched braces
    open_braces = css_content.count('{')
    close_braces = css_content.count('}')
    if open_braces != close_braces:
        errors.append(f"Unmatched braces: {open_braces} open, {close_braces} close")

    # Check for common syntax errors
    # Missing colons in properties
    property_pattern = r'[\w-]+\s*[^:;{}]+;'
    # This is a simplified check - real CSS parsing would be more complex

    # Check for empty rules
    empty_rule_pattern = r'\{[\s]*\}'
    empty_rules = re.findall(empty_rule_pattern, css_content)
    if empty_rules:
        errors.append(f"Found {len(empty_rules)} empty CSS rules")

    # Check for invalid units (common mistakes)
    invalid_units = re.findall(r'\d+\s*(px|em|rem|vh|vw)(?=[^\w])', css_content)
    # This would need more sophisticated parsing for accuracy

    return errors


def extract_inline_css(html_content: str) -> str:
    """Extract inline CSS from style tags"""
    style_pattern = r'<style[^>]*>(.*?)</style>'
    styles = re.findall(style_pattern, html_content, re.DOTALL | re.IGNORECASE)
    return '\n'.join(styles)


def should_skip(path: Path) -> bool:
    """Check if path should be skipped"""
    path_str = str(path)
    return any(skip in path_str for skip in SKIP_PATTERNS)


def validate_html_file(file_path: Path) -> dict:
    """Validate a single HTML file"""
    result = {
        "file": str(file_path.relative_to(BASE_DIR)),
        "html_valid": False,
        "css_valid": True,
        "html_errors": [],
        "html_warnings": [],
        "css_errors": [],
        "has_canvas": False,
        "has_back_link": False,
        "scripts": [],
    }

    try:
        content = file_path.read_text(encoding='utf-8', errors='ignore')

        # HTML validation
        validator = HTMLValidator()
        validator.feed(content)
        validator.validate()

        result["html_valid"] = len(validator.errors) == 0
        result["html_errors"] = validator.errors
        result["html_warnings"] = validator.warnings
        result["has_canvas"] = validator.has_canvas
        result["has_back_link"] = validator.has_back_link
        result["scripts"] = validator.scripts

        # CSS validation (inline styles)
        inline_css = extract_inline_css(content)
        if inline_css:
            css_errors = validate_css_syntax(inline_css)
            result["css_errors"] = css_errors
            result["css_valid"] = len(css_errors) == 0

    except Exception as e:
        result["html_errors"].append(f"Parse error: {str(e)[:100]}")

    return result


def validate_demo_structure(file_path: Path, content: str) -> list:
    """Validate demo-specific structure requirements"""
    warnings = []
    rel_path = file_path.relative_to(BASE_DIR)

    # Check for canvas in demo files (not index pages)
    is_demo = 'index.html' not in str(rel_path)
    if is_demo:
        if '<canvas' not in content.lower():
            # Check if it's a non-canvas demo (D3, etc.)
            if '<svg' not in content.lower():
                warnings.append("Demo may be missing canvas or SVG element")

    # Check for back link in subdirectory files
    parts = rel_path.parts
    if len(parts) > 1 and parts[0] != 'tests':
        # Files in subdirectories should have back links
        back_patterns = [
            r'href=["\']\.\./',
            r'class=["\'][^"\']*back',
            r'Back to'
        ]
        has_back = any(re.search(p, content, re.IGNORECASE) for p in back_patterns)
        if not has_back:
            warnings.append("Missing back navigation link")

    return warnings


def main():
    """Run HTML/CSS validation on all files"""
    print("=" * 70)
    print("CCAB HTML/CSS Validation")
    print("=" * 70)
    print()

    # Find all HTML files
    html_files = [f for f in BASE_DIR.rglob("*.html") if not should_skip(f)]
    print(f"Found {len(html_files)} HTML files to validate")
    print()

    results = {
        "total": len(html_files),
        "html_valid": 0,
        "html_invalid": 0,
        "css_valid": 0,
        "css_invalid": 0,
        "files": []
    }

    # Categories of issues
    common_errors = defaultdict(int)
    common_warnings = defaultdict(int)

    for html_file in sorted(html_files):
        result = validate_html_file(html_file)

        # Add demo structure checks
        try:
            content = html_file.read_text(encoding='utf-8', errors='ignore')
            structure_warnings = validate_demo_structure(html_file, content)
            result["html_warnings"].extend(structure_warnings)
        except:
            pass

        results["files"].append(result)

        if result["html_valid"]:
            results["html_valid"] += 1
        else:
            results["html_invalid"] += 1

        if result["css_valid"]:
            results["css_valid"] += 1
        else:
            results["css_invalid"] += 1

        # Track common issues
        for err in result["html_errors"]:
            common_errors[err.split(':')[0] if ':' in err else err] += 1
        for warn in result["html_warnings"]:
            common_warnings[warn.split(':')[0] if ':' in warn else warn] += 1

    # Print summary
    print("=" * 70)
    print("VALIDATION SUMMARY")
    print("=" * 70)
    print()
    print(f"Total files:      {results['total']}")
    print(f"HTML valid:       {results['html_valid']} ({results['html_valid']/results['total']*100:.1f}%)")
    print(f"HTML invalid:     {results['html_invalid']}")
    print(f"CSS valid:        {results['css_valid']}")
    print(f"CSS invalid:      {results['css_invalid']}")
    print()

    # Common errors
    if common_errors:
        print("Common HTML Errors:")
        print("-" * 70)
        for err, count in sorted(common_errors.items(), key=lambda x: -x[1])[:10]:
            print(f"  {count:>4}x  {err[:60]}")
        print()

    # Common warnings
    if common_warnings:
        print("Common Warnings:")
        print("-" * 70)
        for warn, count in sorted(common_warnings.items(), key=lambda x: -x[1])[:10]:
            print(f"  {count:>4}x  {warn[:60]}")
        print()

    # Files with errors
    error_files = [r for r in results["files"] if not r["html_valid"]]
    if error_files:
        print("Files with HTML Errors:")
        print("-" * 70)
        for result in error_files[:20]:
            print(f"  {result['file']}")
            for err in result["html_errors"][:2]:
                print(f"    - {err[:60]}")
        if len(error_files) > 20:
            print(f"\n  ... and {len(error_files) - 20} more files with errors")
        print()

    # Save results
    results_file = BASE_DIR / "test_results_html_css.json"
    import json
    with open(results_file, "w") as f:
        json.dump(results, f, indent=2)
    print(f"Detailed results saved to: {results_file}")
    print()

    # Return success if all valid
    return 0 if results["html_invalid"] == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
