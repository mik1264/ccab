#!/usr/bin/env python3
"""
Script to regenerate SIMULATION_CATALOG.html with current gallery data.
"""
import os
import re
from pathlib import Path

# Directories to skip (not galleries)
SKIP_DIRS = {
    'assets', 'templates', 'scripts', '.git', 'node_modules', '_', '.DS_Store',
    '__pycache__', '.idea', '.vscode'
}

# Technology detection patterns
TECH_PATTERNS = {
    'Three.js': [r'three\.', r'THREE\.', r'import.*three', r'OrbitControls'],
    'WebGL': [r'webgl', r'createShader', r'gl\.bindBuffer', r'GLSL'],
    'Canvas 2D': [r'getContext\([\'"]2d[\'"]\)', r'ctx\.fillRect', r'ctx\.arc'],
    'D3.js': [r'd3\.', r'import.*d3'],
    'PixiJS': [r'PIXI\.', r'pixi\.js'],
    'Web Audio': [r'AudioContext', r'Tone\.', r'oscillator', r'Web Audio'],
    'WebAssembly': [r'WebAssembly', r'\.wasm', r'emscripten'],
    'P5.js': [r'p5\.', r'createCanvas\(', r'function setup\(\)', r'function draw\(\)'],
    'CSS/SVG': [r'<svg', r'animation:', r'@keyframes'],
    'WebGPU': [r'navigator\.gpu', r'GPUDevice', r'wgsl'],
    'Tone.js': [r'Tone\.'],
}

def detect_tech(content):
    """Detect technologies used in HTML file."""
    techs = []
    content_lower = content.lower()

    # Check each technology
    for tech, patterns in TECH_PATTERNS.items():
        for pattern in patterns:
            if re.search(pattern, content, re.IGNORECASE):
                if tech not in techs:
                    techs.append(tech)
                break

    # Default to Canvas 2D if no tech detected
    if not techs:
        techs = ['Canvas 2D']

    return techs

def get_demo_name(filename, content):
    """Extract demo name from filename or title tag."""
    # Try to get from title tag
    title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
    if title_match:
        title = title_match.group(1).strip()
        # Remove common suffixes
        title = re.sub(r'\s*[-–|]\s*(CCAB|Gallery|Demo|Visualization).*$', '', title, flags=re.IGNORECASE)
        if title and len(title) > 3:
            return title

    # Fall back to filename
    name = filename.replace('.html', '').replace('-', ' ').replace('_', ' ')
    # Remove leading numbers
    name = re.sub(r'^\d+\s*', '', name)
    # Title case
    return name.title()

def get_gallery_name(dirname):
    """Convert directory name to display name."""
    name = dirname.replace('-', ' ').replace('_', ' ')
    return name.title()

def scan_galleries(root_path):
    """Scan all galleries and return category data."""
    categories = []
    total_demos = 0

    root = Path(root_path)

    for item in sorted(root.iterdir()):
        if not item.is_dir():
            continue
        if item.name in SKIP_DIRS or item.name.startswith('.') or item.name.startswith('_'):
            continue

        gallery_id = item.name
        gallery_path = item
        files_data = []

        # Find all HTML files in this gallery (including subdirectories)
        html_files = list(gallery_path.rglob('*.html'))

        for html_file in sorted(html_files):
            # Skip index files
            if html_file.name == 'index.html':
                continue

            try:
                content = html_file.read_text(errors='ignore')
            except Exception:
                continue

            # Get relative path within gallery
            rel_path = html_file.relative_to(gallery_path)

            # Detect technology
            techs = detect_tech(content)

            # Get demo name
            name = get_demo_name(html_file.name, content)

            files_data.append({
                'file': str(rel_path),
                'name': name,
                'tech': techs
            })

        if files_data:
            categories.append({
                'id': gallery_id,
                'path': gallery_id,
                'name': get_gallery_name(gallery_id),
                'files': files_data
            })
            total_demos += len(files_data)

    return categories, total_demos

def generate_js_array(categories):
    """Generate JavaScript array code for categories."""
    lines = ['const categories = [']

    for cat in categories:
        lines.append('    {')
        lines.append(f'        id: "{cat["id"]}",')
        lines.append(f'        path: "{cat["path"]}",')
        lines.append(f'        name: "{cat["name"]}",')
        lines.append('        files: [')

        for f in cat['files']:
            tech_str = ', '.join(f'"{t}"' for t in f['tech'])
            name_escaped = f['name'].replace('"', '\\"')
            file_escaped = f['file'].replace('"', '\\"')
            lines.append(f'            {{ file: "{file_escaped}", name: "{name_escaped}", tech: [{tech_str}] }},')

        lines.append('        ]')
        lines.append('    },')

    lines.append('];')
    return '\n'.join(lines)

def update_catalog(root_path):
    """Update the SIMULATION_CATALOG.html file."""
    catalog_path = Path(root_path) / 'SIMULATION_CATALOG.html'

    if not catalog_path.exists():
        print(f"Catalog not found at {catalog_path}")
        return

    # Scan galleries
    print("Scanning galleries...")
    categories, total_demos = scan_galleries(root_path)
    print(f"Found {len(categories)} galleries with {total_demos} demos")

    # Read existing catalog
    content = catalog_path.read_text()

    # Update static counts in HTML
    content = re.sub(
        r'<div class="stat-value" id="totalCount">\d+</div>',
        f'<div class="stat-value" id="totalCount">{total_demos}</div>',
        content
    )
    content = re.sub(
        r'<div class="stat-value" id="catCount">\d+</div>',
        f'<div class="stat-value" id="catCount">{len(categories)}</div>',
        content
    )
    content = re.sub(
        r'Showing all \d+ simulations',
        f'Showing all {total_demos} simulations',
        content
    )
    content = re.sub(
        r'Total: \d+ browser-based simulations',
        f'Total: {total_demos} browser-based simulations',
        content
    )
    content = re.sub(
        r'Generated December 2024',
        'Generated January 2026',
        content
    )

    # Generate new categories array
    new_js = generate_js_array(categories)

    # Replace the categories array in the script
    pattern = r'const categories = \[[\s\S]*?\n\];'
    content = re.sub(pattern, new_js, content)

    # Write updated catalog
    catalog_path.write_text(content)
    print(f"Updated {catalog_path}")
    print(f"  - {len(categories)} galleries")
    print(f"  - {total_demos} total demos")

if __name__ == '__main__':
    import sys
    root = sys.argv[1] if len(sys.argv) > 1 else '.'
    update_catalog(root)
