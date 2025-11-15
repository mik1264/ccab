#!/usr/bin/env python3
"""
Script to check all gallery index.html files for issues:
1. Broken links (HTML files that don't exist)
2. Generic/placeholder names
3. Placeholder content
4. Disabled/non-functional elements
"""

import os
import re
from pathlib import Path
from html.parser import HTMLParser

class LinkExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.in_link = False
        self.current_link = None
        self.link_text = ""

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            self.in_link = True
            self.link_text = ""
            for attr, value in attrs:
                if attr == 'href':
                    self.current_link = value

    def handle_endtag(self, tag):
        if tag == 'a' and self.in_link:
            if self.current_link:
                self.links.append({
                    'href': self.current_link,
                    'text': self.link_text.strip()
                })
            self.in_link = False
            self.current_link = None

    def handle_data(self, data):
        if self.in_link:
            self.link_text += data

# Generic names to flag
GENERIC_NAMES = [
    'demo.html', 'test.html', 'placeholder.html', 'example.html',
    'sample.html', 'temp.html', 'untitled.html', 'new.html'
]

# Placeholder text patterns
PLACEHOLDER_PATTERNS = [
    r'\bcoming\s+soon\b',
    r'\bunder\s+development\b',
    r'\bTODO\b',
    r'\bFIXME\b',
    r'\bplaceholder\b',
    r'\bwork\s+in\s+progress\b',
    r'\bWIP\b',
]

def check_gallery(gallery_path):
    """Check a single gallery index.html for issues"""
    issues = {
        'broken_links': [],
        'generic_names': [],
        'placeholder_content': [],
        'disabled_elements': []
    }

    with open(gallery_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract links
    parser = LinkExtractor()
    parser.feed(content)

    gallery_dir = os.path.dirname(gallery_path)

    for link_info in parser.links:
        href = link_info['href']
        text = link_info['text']

        # Skip external links, anchors, and parent directory links
        if href.startswith('http') or href.startswith('#') or href == '../index.html':
            continue

        # Check if it's an HTML file
        if href.endswith('.html'):
            # Check for generic names
            filename = os.path.basename(href)
            if filename.lower() in GENERIC_NAMES:
                issues['generic_names'].append({
                    'href': href,
                    'text': text
                })

            # Check if file exists
            full_path = os.path.join(gallery_dir, href)
            if not os.path.exists(full_path):
                issues['broken_links'].append({
                    'href': href,
                    'text': text
                })

    # Check for placeholder content in the HTML
    for pattern in PLACEHOLDER_PATTERNS:
        matches = re.finditer(pattern, content, re.IGNORECASE)
        for match in matches:
            # Get context around match
            start = max(0, match.start() - 50)
            end = min(len(content), match.end() + 50)
            context = content[start:end].replace('\n', ' ').strip()
            issues['placeholder_content'].append({
                'pattern': pattern,
                'match': match.group(),
                'context': context
            })

    # Check for disabled elements (href="#" without onclick, commented links)
    disabled_hrefs = re.findall(r'href=["\']#["\'](?![^<]*onclick)', content)
    if disabled_hrefs:
        issues['disabled_elements'].append({
            'type': 'empty_href',
            'count': len(disabled_hrefs)
        })

    # Check for commented out links
    commented_links = re.findall(r'<!--.*?<a[^>]*href.*?</a>.*?-->', content, re.DOTALL)
    if commented_links:
        issues['disabled_elements'].append({
            'type': 'commented_links',
            'count': len(commented_links)
        })

    return issues

def main():
    # Get all gallery index files
    base_dir = Path('/Users/mik1264/experiments/ccab/ccab')

    galleries = []
    for item in base_dir.iterdir():
        if item.is_dir() and not item.name.startswith('.'):
            index_file = item / 'index.html'
            if index_file.exists() and item.name not in ['design-alternatives']:
                galleries.append(index_file)

    galleries.sort()

    # Check each gallery
    results = {}
    for gallery_path in galleries:
        gallery_name = gallery_path.parent.name
        issues = check_gallery(gallery_path)

        # Only include galleries with issues
        total_issues = (
            len(issues['broken_links']) +
            len(issues['generic_names']) +
            len(issues['placeholder_content']) +
            len(issues['disabled_elements'])
        )

        if total_issues > 0:
            results[gallery_name] = issues

    # Print report
    print("=" * 80)
    print("GALLERY INDEX AUDIT REPORT")
    print("=" * 80)
    print()

    if not results:
        print("✓ No issues found! All galleries are clean.")
    else:
        print(f"Found issues in {len(results)} galleries:\n")

        for gallery_name, issues in sorted(results.items()):
            total = (
                len(issues['broken_links']) +
                len(issues['generic_names']) +
                len(issues['placeholder_content']) +
                len(issues['disabled_elements'])
            )

            print(f"\n{'─' * 80}")
            print(f"Gallery: {gallery_name}/")
            print(f"Total Issues: {total}")
            print('─' * 80)

            if issues['broken_links']:
                print(f"\n  ✗ BROKEN LINKS ({len(issues['broken_links'])}):")
                for link in issues['broken_links']:
                    print(f"    • {link['href']}")
                    print(f"      Link text: \"{link['text'][:80]}\"")

            if issues['generic_names']:
                print(f"\n  ✗ GENERIC NAMES ({len(issues['generic_names'])}):")
                for link in issues['generic_names']:
                    print(f"    • {link['href']}")
                    print(f"      Link text: \"{link['text'][:80]}\"")

            if issues['placeholder_content']:
                print(f"\n  ✗ PLACEHOLDER CONTENT ({len(issues['placeholder_content'])}):")
                seen_contexts = set()
                for item in issues['placeholder_content']:
                    if item['context'] not in seen_contexts:
                        print(f"    • Found: \"{item['match']}\"")
                        print(f"      Context: ...{item['context'][:60]}...")
                        seen_contexts.add(item['context'])

            if issues['disabled_elements']:
                print(f"\n  ✗ DISABLED ELEMENTS ({len(issues['disabled_elements'])}):")
                for elem in issues['disabled_elements']:
                    print(f"    • {elem['type']}: {elem['count']} instances")

    print("\n" + "=" * 80)
    print(f"Checked {len(galleries)} galleries total")
    print("=" * 80)

if __name__ == '__main__':
    main()
