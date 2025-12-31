#!/usr/bin/env python3
"""
Add explain functionality to all netlogo-simulations-3 HTML files.
Extracts descriptions from the markdown file and adds modal explanations.
"""

import os
import re
from pathlib import Path

# Paths
BASE_DIR = Path("/Users/mik1264/experiments/ccab/ccab")
NETLOGO3_DIR = BASE_DIR / "netlogo-simulations-3"
MARKDOWN_FILE = BASE_DIR / "NetLogo-Simulation-3-1000.md"

# CSS to add for explain functionality
EXPLAIN_CSS = '''
        .explain-btn {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            color: white;
        }
        .explain-btn:hover {
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            transform: translateY(-2px);
        }
        .modal-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.85);
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .modal-overlay.active {
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
        }
        .modal {
            background: linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%);
            border-radius: 16px;
            padding: 30px;
            max-width: 700px;
            width: 90%;
            max-height: 85vh;
            overflow-y: auto;
            position: relative;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
        }
        .modal-close {
            position: absolute;
            top: 15px;
            right: 20px;
            background: none;
            border: none;
            color: #888;
            font-size: 28px;
            cursor: pointer;
            width: auto;
            padding: 0;
            margin: 0;
        }
        .modal-close:hover {
            color: #fff;
            background: none;
        }
        .modal h2 {
            color: #00d9ff;
            margin-bottom: 20px;
            font-size: 1.5rem;
            padding-right: 40px;
        }
        .modal-body {
            color: #ccc;
            line-height: 1.8;
            font-size: 0.95rem;
        }
        .modal-body h3 {
            color: #00ff88;
            margin: 20px 0 10px 0;
            font-size: 1.1rem;
        }
        .modal-body p {
            margin-bottom: 15px;
        }
        .modal-body ul {
            margin: 10px 0 15px 20px;
        }
        .modal-body li {
            margin-bottom: 8px;
        }
        .modal-body strong {
            color: #00d9ff;
        }
        .modal-body em {
            color: #a5b4fc;
            font-style: normal;
        }
        .modal-body code {
            background: rgba(0,0,0,0.3);
            padding: 2px 6px;
            border-radius: 4px;
            font-family: monospace;
            color: #fbbf24;
        }
'''

# JavaScript for modal functionality
MODAL_JS = '''
    // Modal functionality
    const modal = document.getElementById('explainModal');
    if (modal) {
        document.getElementById('explainBtn').addEventListener('click', () => {
            modal.classList.add('active');
        });
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.classList.remove('active');
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
    }
'''


def parse_markdown():
    """Parse the markdown file to extract simulation descriptions."""
    simulations = {}
    current_category = ""

    with open(MARKDOWN_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all category headers
    category_pattern = r'^## (.+?) \(\d+ simulations?\)'
    # Find all simulation entries
    sim_pattern = r'### \[x\] (\d+)\. (.+?)\n\*\*Task:\*\* (.+?)(?=\n\n|\n###|\n---|\n## |\Z)'

    # Extract categories and their positions
    categories = []
    for match in re.finditer(category_pattern, content, re.MULTILINE):
        categories.append((match.start(), match.group(1)))

    # Extract all simulations
    for match in re.finditer(sim_pattern, content, re.DOTALL):
        num = int(match.group(1))
        title = match.group(2).strip()
        description = match.group(3).strip().replace('\n', ' ')

        # Find which category this belongs to
        pos = match.start()
        category = ""
        for cat_pos, cat_name in categories:
            if cat_pos < pos:
                category = cat_name

        simulations[num] = {
            'title': title,
            'description': description,
            'category': category
        }

    return simulations


def generate_modal_content(num, sim_info):
    """Generate rich modal content for a simulation."""
    title = sim_info['title']
    description = sim_info['description']
    category = sim_info['category']

    # Generate contextual content based on category
    category_context = {
        'Evolutionary Dynamics': 'evolutionary biology and population genetics',
        'Developmental Biology': 'developmental processes and morphogenesis',
        'Neuroscience & Behavior': 'neural systems and behavioral patterns',
        'Microbiology': 'microbial systems and cellular processes',
        'Biochemistry & Molecular Biology': 'molecular mechanisms and biochemical pathways',
        'Advanced Physics': 'physical systems and mechanics',
        'Materials Science': 'material properties and transformations',
        'Chemistry': 'chemical reactions and molecular interactions',
        'Economics & Markets': 'economic systems and market dynamics',
        'Political Science': 'political systems and governance',
        'Sociology': 'social systems and human behavior',
        'Healthcare & Medicine': 'medical systems and health outcomes',
        'Transportation & Logistics': 'transportation networks and logistics',
        'Education': 'educational systems and learning',
        'Environment & Sustainability': 'environmental systems and sustainability',
        'Computer Networks': 'network systems and information flow',
        'Robotics & Automation': 'robotic systems and automation',
        'Manufacturing & Production': 'production systems and manufacturing',
        'Cybersecurity': 'security systems and threat dynamics',
        'Games & Interactive': 'game theory and interactive systems',
        'Art & Design': 'artistic and design principles',
        'Music & Sound': 'musical systems and acoustics',
        'Literature & Narrative': 'narrative structures and storytelling',
        'Philosophy & Abstract': 'philosophical concepts and abstract systems',
        'Speculative & Experimental': 'experimental and speculative scenarios',
        'Miscellaneous Advanced': 'advanced interdisciplinary concepts',
    }

    context = category_context.get(category, 'complex systems and emergent behavior')

    # Create the modal HTML content
    modal_html = f'''
    <div id="explainModal" class="modal-overlay">
        <div class="modal">
            <button class="modal-close">&times;</button>
            <h2>📊 {title}</h2>
            <div class="modal-body">
                <p>This agent-based simulation explores concepts from <strong>{context}</strong>.</p>

                <h3>What This Simulation Models</h3>
                <p>{description}</p>

                <h3>Key Concepts</h3>
                <ul>
                    <li><strong>Agent-Based Modeling:</strong> Individual agents follow simple rules, producing complex emergent behaviors</li>
                    <li><strong>Emergent Properties:</strong> System-level patterns arise from local interactions</li>
                    <li><strong>Parameter Exploration:</strong> Adjust controls to explore different scenarios and outcomes</li>
                </ul>

                <h3>How to Explore</h3>
                <ul>
                    <li>Use the sliders to modify simulation parameters</li>
                    <li>Observe how changes affect the overall system behavior</li>
                    <li>Look for phase transitions and tipping points</li>
                    <li>Consider what real-world phenomena this model might represent</li>
                </ul>

                <h3>Category: {category}</h3>
                <p>This simulation is part of the <em>{category}</em> collection, which explores various aspects of {context}.</p>
            </div>
        </div>
    </div>
'''
    return modal_html


def add_explain_to_file(html_path, simulations):
    """Add explain functionality to a single HTML file."""
    # Extract simulation number from filename
    filename = html_path.name
    match = re.match(r'(\d+)-', filename)
    if not match:
        print(f"  Skipping {filename}: no number prefix")
        return False

    num = int(match.group(1))

    # Get simulation info
    sim_info = simulations.get(num)
    if not sim_info:
        # Create generic info based on title
        title_match = re.match(r'\d+-(.+)\.html', filename)
        if title_match:
            title = title_match.group(1).replace('-', ' ').title()
        else:
            title = f"Simulation {num}"
        sim_info = {
            'title': title,
            'description': f"An agent-based simulation exploring {title.lower()} dynamics and emergent behaviors.",
            'category': 'Agent-Based Models'
        }

    # Read the file
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if already has explain functionality
    if 'explainModal' in content or 'explain-btn' in content:
        return False  # Already processed

    # Add CSS before </style>
    if '</style>' in content:
        content = content.replace('</style>', EXPLAIN_CSS + '    </style>')

    # Find where to add the explain button (after existing buttons)
    # Look for the last button before </div> in controls section
    button_pattern = r'(<button[^>]*>.*?</button>\s*)(\s*</div>\s*</div>)'

    # Try to find a good insertion point for the button
    # First, try after the last button in controls
    if '<button' in content:
        # Find the controls section and add button there
        # Look for pattern like: </button>\n            </div> (end of controls)
        btn_insert = re.search(r'(</button>)(\s*<div class="stats"|\s*<div class="legend"|\s*</div>\s*</div>)', content)
        if btn_insert:
            btn_html = '\n            <button id="explainBtn" class="explain-btn">📚 Explain</button>'
            content = content[:btn_insert.end(1)] + btn_html + content[btn_insert.end(1):]

    # Add modal before </body>
    modal_html = generate_modal_content(num, sim_info)
    content = content.replace('</body>', modal_html + '\n</body>')

    # Add JavaScript before </script> (last one)
    # Find the last </script> tag
    last_script_pos = content.rfind('</script>')
    if last_script_pos != -1:
        content = content[:last_script_pos] + '\n' + MODAL_JS + '\n    ' + content[last_script_pos:]

    # Write the file
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(content)

    return True


def main():
    print("Parsing markdown file for simulation descriptions...")
    simulations = parse_markdown()
    print(f"Found {len(simulations)} simulation descriptions")

    print(f"\nProcessing HTML files in {NETLOGO3_DIR}...")

    html_files = sorted(NETLOGO3_DIR.glob("*.html"))
    html_files = [f for f in html_files if f.name != "index.html"]

    processed = 0
    skipped = 0
    errors = 0

    for html_file in html_files:
        try:
            if add_explain_to_file(html_file, simulations):
                processed += 1
                if processed % 100 == 0:
                    print(f"  Processed {processed} files...")
            else:
                skipped += 1
        except Exception as e:
            print(f"  Error processing {html_file.name}: {e}")
            errors += 1

    print(f"\nComplete!")
    print(f"  Processed: {processed}")
    print(f"  Skipped (already had explain): {skipped}")
    print(f"  Errors: {errors}")


if __name__ == "__main__":
    main()
