#!/usr/bin/env python3
"""
Link Validation Tests for CCAB

Crawls all HTML files and validates:
- Internal links point to existing files
- Back links (../index.html) are correct
- Gallery index -> demo links work
- Main index -> gallery links work
- No broken anchor links
"""

import re
import sys
from pathlib import Path
from urllib.parse import urlparse, unquote
from html.parser import HTMLParser
from collections import defaultdict

BASE_DIR = Path(__file__).parent.parent.resolve()

# Patterns to skip
SKIP_PATTERNS = [
    '.venv', 'node_modules', 'design-alternatives', '.git',
    'test_screenshots', '__pycache__'
]

class LinkExtractor(HTMLParser):
    """Extract all links from an HTML file"""

    def __init__(self):
        super().__init__()
        self.links = []
        self.anchors = set()

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)

        # Extract href from <a> tags
        if tag == 'a' and 'href' in attrs_dict:
            self.links.append(('href', attrs_dict['href']))

        # Extract src from various tags
        if tag in ('script', 'img', 'source', 'video', 'audio', 'iframe'):
            if 'src' in attrs_dict:
                self.links.append(('src', attrs_dict['src']))

        # Extract link href (stylesheets)
        if tag == 'link' and 'href' in attrs_dict:
            self.links.append(('link', attrs_dict['href']))

        # Extract id for anchor validation
        if 'id' in attrs_dict:
            self.anchors.add(attrs_dict['id'])

        # Extract name (legacy anchor)
        if 'name' in attrs_dict:
            self.anchors.add(attrs_dict['name'])


def should_skip(path: Path) -> bool:
    """Check if path should be skipped"""
    path_str = str(path)
    return any(skip in path_str for skip in SKIP_PATTERNS)


def is_external_url(url: str) -> bool:
    """Check if URL is external"""
    if not url:
        return False
    parsed = urlparse(url)
    return parsed.scheme in ('http', 'https', 'mailto', 'tel', 'javascript', 'data')


def resolve_link(html_file: Path, link: str) -> Path | None:
    """Resolve a relative link to an absolute path"""
    if not link or is_external_url(link):
        return None

    # Remove anchor
    link = link.split('#')[0]
    if not link:
        return None

    # Remove query string
    link = link.split('?')[0]
    if not link:
        return None

    # Decode URL encoding
    link = unquote(link)

    # Resolve relative to HTML file's directory
    html_dir = html_file.parent
    resolved = (html_dir / link).resolve()

    return resolved


def extract_links(html_file: Path) -> tuple[list, set]:
    """Extract all links and anchors from an HTML file"""
    try:
        content = html_file.read_text(encoding='utf-8', errors='ignore')
        parser = LinkExtractor()
        parser.feed(content)
        return parser.links, parser.anchors
    except Exception as e:
        print(f"  Warning: Could not parse {html_file}: {e}")
        return [], set()


def validate_links():
    """Main validation function"""
    print("=" * 70)
    print("CCAB Link Validation")
    print("=" * 70)
    print()

    # Find all HTML files
    html_files = [f for f in BASE_DIR.rglob("*.html") if not should_skip(f)]
    print(f"Found {len(html_files)} HTML files to check")
    print()

    # Track results
    results = {
        'total_files': len(html_files),
        'total_links': 0,
        'broken_links': [],
        'external_links': 0,
        'valid_links': 0,
        'files_with_issues': set()
    }

    # Build index of all existing files for fast lookup
    all_files = set()
    for f in BASE_DIR.rglob("*"):
        if f.is_file() and not should_skip(f):
            all_files.add(f.resolve())

    # Check each HTML file
    for html_file in sorted(html_files):
        rel_path = html_file.relative_to(BASE_DIR)
        links, anchors = extract_links(html_file)

        file_issues = []

        for link_type, link in links:
            results['total_links'] += 1

            if is_external_url(link):
                results['external_links'] += 1
                continue

            # Handle anchor-only links
            if link.startswith('#'):
                anchor = link[1:]
                if anchor and anchor not in anchors:
                    file_issues.append(f"  Broken anchor: {link}")
                else:
                    results['valid_links'] += 1
                continue

            # Resolve the link
            resolved = resolve_link(html_file, link)
            if resolved is None:
                continue

            # Check if target exists
            # For directories, check for index.html
            if resolved.is_dir():
                resolved = resolved / 'index.html'

            if resolved in all_files or resolved.exists():
                results['valid_links'] += 1
            else:
                file_issues.append(f"  Broken {link_type}: {link} -> {resolved.relative_to(BASE_DIR) if str(resolved).startswith(str(BASE_DIR)) else resolved}")
                results['broken_links'].append({
                    'file': str(rel_path),
                    'type': link_type,
                    'link': link,
                    'resolved': str(resolved)
                })

        if file_issues:
            results['files_with_issues'].add(str(rel_path))
            print(f"Issues in {rel_path}:")
            for issue in file_issues[:5]:  # Limit to 5 per file
                print(issue)
            if len(file_issues) > 5:
                print(f"  ... and {len(file_issues) - 5} more")
            print()

    # Print summary
    print("=" * 70)
    print("SUMMARY")
    print("=" * 70)
    print(f"Total HTML files:     {results['total_files']}")
    print(f"Total links checked:  {results['total_links']}")
    print(f"Valid internal links: {results['valid_links']}")
    print(f"External links:       {results['external_links']}")
    print(f"Broken links:         {len(results['broken_links'])}")
    print(f"Files with issues:    {len(results['files_with_issues'])}")
    print()

    if results['broken_links']:
        print("BROKEN LINKS:")
        print("-" * 70)
        for item in results['broken_links'][:20]:  # Show first 20
            print(f"  {item['file']}")
            print(f"    -> {item['link']}")
        if len(results['broken_links']) > 20:
            print(f"\n  ... and {len(results['broken_links']) - 20} more broken links")

    return len(results['broken_links']) == 0


def validate_back_links():
    """Validate that all back links point to correct parent directories"""
    print("\n" + "=" * 70)
    print("BACK LINK VALIDATION")
    print("=" * 70)
    print()

    issues = []

    # Find all HTML files in subdirectories (not root)
    for html_file in BASE_DIR.rglob("*.html"):
        if should_skip(html_file):
            continue

        # Skip root level files
        rel_path = html_file.relative_to(BASE_DIR)
        if len(rel_path.parts) < 2:
            continue

        try:
            content = html_file.read_text(encoding='utf-8', errors='ignore')

            # Look for back links
            back_link_patterns = [
                r'href=["\']\.\.\/index\.html["\']',
                r'href=["\']\.\.\/["\']',
                r'class=["\'][^"\']*back-link[^"\']*["\']'
            ]

            has_back_link = any(re.search(p, content) for p in back_link_patterns)

            # Check if parent has index.html
            parent_index = html_file.parent.parent / 'index.html'

            if has_back_link and not parent_index.exists():
                issues.append({
                    'file': str(rel_path),
                    'issue': f"Back link points to non-existent {parent_index.relative_to(BASE_DIR)}"
                })

        except Exception as e:
            print(f"  Warning: Could not check {rel_path}: {e}")

    if issues:
        print(f"Found {len(issues)} back link issues:")
        for item in issues[:10]:
            print(f"  {item['file']}: {item['issue']}")
    else:
        print("All back links are valid!")

    return len(issues) == 0


def validate_gallery_structure():
    """Validate gallery index pages link to existing demos"""
    print("\n" + "=" * 70)
    print("GALLERY STRUCTURE VALIDATION")
    print("=" * 70)
    print()

    issues = []

    # Find all index.html files in subdirectories
    for index_file in BASE_DIR.glob("*/index.html"):
        if should_skip(index_file):
            continue

        gallery_dir = index_file.parent
        rel_path = index_file.relative_to(BASE_DIR)

        try:
            content = index_file.read_text(encoding='utf-8', errors='ignore')

            # Extract links to HTML files in the same directory
            link_pattern = r'href=["\']([^"\']+\.html)["\']'
            matches = re.findall(link_pattern, content)

            for link in matches:
                if link.startswith('http') or link.startswith('../'):
                    continue

                # Resolve the link
                target = gallery_dir / link
                if not target.exists():
                    issues.append({
                        'gallery': str(rel_path),
                        'link': link,
                        'issue': 'Target file does not exist'
                    })

        except Exception as e:
            print(f"  Warning: Could not check {rel_path}: {e}")

    if issues:
        print(f"Found {len(issues)} gallery structure issues:")
        for item in issues[:20]:
            print(f"  {item['gallery']}: {item['link']} - {item['issue']}")
    else:
        print("All gallery structures are valid!")

    return len(issues) == 0


def main():
    """Run all link validation tests"""
    results = []

    results.append(('Link Validation', validate_links()))
    results.append(('Back Link Validation', validate_back_links()))
    results.append(('Gallery Structure', validate_gallery_structure()))

    print("\n" + "=" * 70)
    print("FINAL RESULTS")
    print("=" * 70)

    all_passed = True
    for name, passed in results:
        status = "PASS" if passed else "FAIL"
        print(f"  {name}: {status}")
        if not passed:
            all_passed = False

    print()
    return 0 if all_passed else 1


if __name__ == "__main__":
    sys.exit(main())
