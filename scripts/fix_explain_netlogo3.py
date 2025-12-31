#!/usr/bin/env python3
"""
Fix and enrich explain functionality for netlogo-simulations-3 HTML files.
- Fixes DOM timing issue by using DOMContentLoaded
- Adds research-based enriched explanations
- Properly structures modal HTML before closing body tag
"""

import os
import re
from pathlib import Path

BASE_DIR = Path("/Users/mik1264/experiments/ccab/ccab")
NETLOGO3_DIR = BASE_DIR / "netlogo-simulations-3"
MARKDOWN_FILE = BASE_DIR / "NetLogo-Simulation-3-1000.md"

# Research-based category explanations
CATEGORY_RESEARCH = {
    'Evolutionary Dynamics': {
        'context': 'evolutionary biology and population genetics',
        'intro': 'Evolution occurs through changes in allele frequencies over generations. This simulation demonstrates key evolutionary mechanisms including natural selection, genetic drift, and mutation.',
        'concepts': [
            ('Fitness Landscapes', 'Populations navigate through "fitness landscapes" - conceptual maps where height represents reproductive success. Rugged landscapes have multiple peaks separated by valleys of lower fitness.'),
            ('Genetic Drift', 'Random changes in allele frequencies, especially important in small populations. Can cause alleles to become fixed or lost regardless of their fitness effects.'),
            ('Natural Selection', 'Differential survival and reproduction based on heritable traits. Drives adaptation but can be overwhelmed by drift in small populations.'),
            ('Epistasis', 'Gene interactions where the effect of one gene depends on others. Creates rugged fitness landscapes with multiple local optima.'),
        ],
        'applications': 'Understanding evolutionary dynamics is crucial for conservation biology, disease evolution, antibiotic resistance, and breeding programs.',
    },
    'Developmental Biology': {
        'context': 'morphogenesis and developmental processes',
        'intro': 'Development transforms a single cell into a complex organism through coordinated cell division, differentiation, and morphogenesis. This simulation models key developmental mechanisms.',
        'concepts': [
            ('Morphogen Gradients', 'Chemical signals that diffuse through tissue, creating concentration gradients that specify cell fates based on position.'),
            ('Pattern Formation', 'Spontaneous emergence of spatial organization through reaction-diffusion, cell sorting, and mechanical forces.'),
            ('Cell Signaling', 'Communication between cells through direct contact or secreted molecules, coordinating development across tissues.'),
            ('Gene Regulatory Networks', 'Interconnected genes that control developmental timing and cell fate decisions.'),
        ],
        'applications': 'Understanding development informs regenerative medicine, birth defect prevention, and tissue engineering.',
    },
    'Neuroscience & Behavior': {
        'context': 'neural systems and behavioral patterns',
        'intro': 'The brain processes information through networks of neurons that fire in coordinated patterns. This simulation explores neural computation and emergent behavior.',
        'concepts': [
            ('Neural Networks', 'Interconnected neurons that process information through synaptic connections, forming the basis of learning and memory.'),
            ('Hebbian Learning', '"Neurons that fire together, wire together" - synaptic connections strengthen when pre and post-synaptic neurons are active simultaneously.'),
            ('Emergent Behavior', 'Complex behaviors arising from simple rules followed by many interacting agents or neurons.'),
            ('Oscillations & Rhythms', 'Coordinated neural activity patterns that underlie various brain states and cognitive functions.'),
        ],
        'applications': 'Neural modeling advances AI, brain-computer interfaces, and treatments for neurological disorders.',
    },
    'Microbiology': {
        'context': 'microbial systems and cellular processes',
        'intro': 'Microorganisms form complex communities with emergent behaviors. This simulation models microbial interactions and population dynamics.',
        'concepts': [
            ('Quorum Sensing', 'Cell-to-cell communication allowing bacteria to coordinate behavior based on population density.'),
            ('Biofilm Formation', 'Surface-attached microbial communities with enhanced resistance to antibiotics and environmental stress.'),
            ('Competition & Cooperation', 'Microbes compete for resources while also engaging in metabolic cooperation and cross-feeding.'),
            ('Horizontal Gene Transfer', 'Exchange of genetic material between organisms, spreading traits like antibiotic resistance.'),
        ],
        'applications': 'Microbial ecology informs antibiotic development, fermentation, bioremediation, and microbiome health.',
    },
    'Biochemistry & Molecular Biology': {
        'context': 'molecular mechanisms and biochemical pathways',
        'intro': 'Life operates through precise molecular machinery. This simulation models biochemical reactions and molecular interactions at the cellular level.',
        'concepts': [
            ('Enzyme Kinetics', 'Enzymes catalyze reactions following Michaelis-Menten kinetics, with rates determined by substrate concentration and enzyme affinity (Km).'),
            ('Lock and Key vs Induced Fit', 'Enzymes recognize substrates either through rigid complementarity (lock-key) or conformational changes upon binding (induced fit).'),
            ('Allosteric Regulation', 'Enzyme activity modulated by molecules binding at sites other than the active site, enabling sophisticated metabolic control.'),
            ('Signal Transduction', 'Cascades of molecular interactions that amplify and transmit signals from cell surface to nucleus.'),
        ],
        'applications': 'Molecular understanding enables drug design, metabolic engineering, and synthetic biology.',
    },
    'Advanced Physics': {
        'context': 'physical systems and mechanics',
        'intro': 'Physical systems follow fundamental laws that can produce complex behavior. This simulation demonstrates physics principles through computational modeling.',
        'concepts': [
            ('Conservation Laws', 'Energy, momentum, and angular momentum are conserved in isolated systems, constraining possible dynamics.'),
            ('Phase Transitions', 'Dramatic changes in system properties (like melting or magnetization) occurring at critical points.'),
            ('Nonlinear Dynamics', 'Systems where effects are not proportional to causes, leading to chaos, bifurcations, and strange attractors.'),
            ('Statistical Mechanics', 'Connecting microscopic particle behavior to macroscopic thermodynamic properties.'),
        ],
        'applications': 'Physics modeling underlies engineering design, materials science, and understanding natural phenomena.',
    },
    'Materials Science': {
        'context': 'material properties and transformations',
        'intro': 'Material properties emerge from atomic-scale structure and processing. This simulation models how materials form, transform, and respond to conditions.',
        'concepts': [
            ('Crystal Nucleation', 'New crystals form when atoms overcome an energy barrier to create stable nuclei. Classical Nucleation Theory describes this process quantitatively.'),
            ('Homogeneous vs Heterogeneous', 'Nucleation can occur uniformly in bulk (homogeneous, rare) or preferentially at surfaces/defects (heterogeneous, common).'),
            ('Grain Boundaries', 'Interfaces between differently-oriented crystal regions that strongly influence material properties.'),
            ('Phase Transformations', 'Changes in crystal structure driven by temperature, pressure, or composition changes.'),
        ],
        'applications': 'Materials science enables development of stronger, lighter, and more functional materials for technology.',
    },
    'Chemistry': {
        'context': 'chemical reactions and molecular interactions',
        'intro': 'Chemical reactions transform matter through bond breaking and formation. This simulation models reaction kinetics and molecular dynamics.',
        'concepts': [
            ('Reaction Kinetics', 'The rates at which reactions proceed, determined by activation energies and molecular collisions.'),
            ('Equilibrium', 'Dynamic balance where forward and reverse reactions occur at equal rates, governed by thermodynamics.'),
            ('Catalysis', 'Acceleration of reactions by providing alternative pathways with lower activation energy.'),
            ('Molecular Recognition', 'Specific binding between molecules based on complementary shapes and chemical properties.'),
        ],
        'applications': 'Understanding chemistry is essential for drug development, industrial processes, and environmental protection.',
    },
    'Economics & Markets': {
        'context': 'economic systems and market dynamics',
        'intro': 'Markets emerge from countless individual decisions. This simulation models economic agents and the collective patterns that arise from their interactions.',
        'concepts': [
            ('Supply and Demand', 'Prices emerge from the interaction of buyers and sellers, adjusting to balance quantity demanded and supplied.'),
            ('Market Efficiency', 'How well markets aggregate information and allocate resources, and conditions that cause inefficiency.'),
            ('Network Effects', 'Value increases with the number of users, leading to winner-take-all dynamics and platform economics.'),
            ('Behavioral Economics', 'How psychological factors like bounded rationality and biases affect economic decisions.'),
        ],
        'applications': 'Economic modeling informs policy design, business strategy, and understanding inequality.',
    },
    'Political Science': {
        'context': 'political systems and governance',
        'intro': 'Political outcomes emerge from the interactions of voters, parties, and institutions. This simulation models political dynamics and collective decision-making.',
        'concepts': [
            ('Voting Systems', 'Different methods of aggregating preferences lead to different outcomes and strategic incentives.'),
            ('Coalition Formation', 'How political actors form alliances to achieve goals, balancing cooperation and competition.'),
            ('Public Opinion Dynamics', 'How opinions spread and polarize through social networks and media influence.'),
            ('Institutional Design', 'How rules and structures shape political outcomes and incentives.'),
        ],
        'applications': 'Political modeling helps design better voting systems, understand polarization, and improve governance.',
    },
    'Sociology': {
        'context': 'social systems and human behavior',
        'intro': 'Social phenomena emerge from individual interactions within networks and institutions. This simulation models social dynamics and collective behavior.',
        'concepts': [
            ('Social Networks', 'Patterns of relationships that shape information flow, influence, and opportunity.'),
            ('Collective Action', 'How groups overcome coordination problems to achieve shared goals.'),
            ('Segregation Dynamics', 'How individual preferences for neighbors can lead to large-scale segregation (Schelling model).'),
            ('Cultural Evolution', 'How beliefs, norms, and practices spread and change through social learning.'),
        ],
        'applications': 'Social modeling informs urban planning, public health interventions, and understanding inequality.',
    },
    'Healthcare & Medicine': {
        'context': 'medical systems and health outcomes',
        'intro': 'Health emerges from complex interactions between biology, behavior, and healthcare systems. This simulation models disease dynamics and medical interventions.',
        'concepts': [
            ('Epidemiology', 'How diseases spread through populations, described by compartmental models (SIR, SEIR).'),
            ('Treatment Optimization', 'Finding the best intervention strategies considering efficacy, side effects, and resources.'),
            ('Hospital Dynamics', 'Patient flow, resource allocation, and capacity planning in healthcare facilities.'),
            ('Behavior Change', 'How health behaviors spread and can be influenced through interventions.'),
        ],
        'applications': 'Health modeling improves pandemic response, treatment protocols, and healthcare resource allocation.',
    },
    'Transportation & Logistics': {
        'context': 'transportation networks and logistics',
        'intro': 'Traffic patterns and logistics networks exhibit complex emergent behavior. This simulation models how goods and people move through systems.',
        'concepts': [
            ('Traffic Flow', 'Vehicles interact to create patterns like phantom jams, where slowdowns propagate backward through traffic.'),
            ('Network Optimization', 'Finding efficient routes through complex networks with multiple constraints.'),
            ('Queue Dynamics', 'How waiting times and congestion depend on arrival rates and service capacity.'),
            ('Last-Mile Problem', 'The challenge of efficient final delivery in logistics networks.'),
        ],
        'applications': 'Transportation modeling improves traffic management, logistics efficiency, and urban planning.',
    },
    'Education': {
        'context': 'educational systems and learning',
        'intro': 'Learning occurs through complex interactions between students, teachers, and content. This simulation models educational processes and outcomes.',
        'concepts': [
            ('Knowledge Diffusion', 'How information and skills spread through educational networks and communities.'),
            ('Peer Effects', 'How students influence each other\'s learning and motivation.'),
            ('Skill Development', 'Progressive building of capabilities through practice and instruction.'),
            ('Assessment Dynamics', 'How testing and feedback affect learning and motivation.'),
        ],
        'applications': 'Education modeling helps design curricula, interventions, and policies to improve learning outcomes.',
    },
    'Environment & Sustainability': {
        'context': 'environmental systems and sustainability',
        'intro': 'Environmental systems involve complex feedbacks between human activities and natural processes. This simulation models ecological dynamics and sustainability challenges.',
        'concepts': [
            ('Tragedy of the Commons', 'Shared resources can be depleted when individual incentives conflict with collective welfare.'),
            ('Ecosystem Dynamics', 'Populations and resources interact through predation, competition, and nutrient cycling.'),
            ('Climate Feedbacks', 'Self-reinforcing or stabilizing loops that amplify or dampen climate changes.'),
            ('Sustainable Management', 'Strategies for resource use that maintain long-term availability.'),
        ],
        'applications': 'Environmental modeling informs conservation, climate policy, and sustainable resource management.',
    },
    'Computer Networks': {
        'context': 'network systems and information flow',
        'intro': 'Computer networks exhibit emergent behavior from simple protocols. This simulation models network dynamics and information propagation.',
        'concepts': [
            ('Packet Routing', 'How data finds paths through complex networks with changing conditions.'),
            ('Congestion Control', 'Mechanisms to prevent network overload while maintaining efficiency.'),
            ('Network Topology', 'How network structure affects resilience, speed, and capacity.'),
            ('Protocol Dynamics', 'How rules for interaction lead to stable or unstable collective behavior.'),
        ],
        'applications': 'Network modeling improves internet performance, security, and distributed system design.',
    },
    'Robotics & Automation': {
        'context': 'robotic systems and automation',
        'intro': 'Robots and automated systems must navigate uncertain environments. This simulation models robotic behavior and swarm coordination.',
        'concepts': [
            ('Swarm Robotics', 'Many simple robots coordinating through local rules to achieve complex collective tasks.'),
            ('Path Planning', 'Finding efficient and safe routes through environments with obstacles.'),
            ('Sensor Fusion', 'Combining information from multiple sensors to understand the environment.'),
            ('Multi-Agent Coordination', 'How robots communicate and cooperate without central control.'),
        ],
        'applications': 'Robotics modeling advances autonomous vehicles, manufacturing automation, and exploration.',
    },
    'Manufacturing & Production': {
        'context': 'production systems and manufacturing',
        'intro': 'Manufacturing involves coordinating many processes and resources. This simulation models production dynamics and optimization.',
        'concepts': [
            ('Job Shop Scheduling', 'Assigning tasks to machines to minimize time, cost, or other objectives.'),
            ('Inventory Dynamics', 'Balancing stock levels against demand uncertainty and holding costs.'),
            ('Quality Control', 'Detecting and preventing defects through statistical monitoring.'),
            ('Supply Chain', 'Coordinating flows of materials and information across organizations.'),
        ],
        'applications': 'Production modeling improves efficiency, reduces waste, and enables lean manufacturing.',
    },
    'Cybersecurity': {
        'context': 'security systems and threat dynamics',
        'intro': 'Cybersecurity involves ongoing competition between attackers and defenders. This simulation models security dynamics and threat propagation.',
        'concepts': [
            ('Attack Propagation', 'How malware and attacks spread through networks and populations of devices.'),
            ('Defense in Depth', 'Layered security strategies that provide multiple barriers to attackers.'),
            ('Adversarial Dynamics', 'Strategic interaction between attackers and defenders with evolving tactics.'),
            ('Vulnerability Lifecycle', 'How security flaws are discovered, exploited, and patched over time.'),
        ],
        'applications': 'Security modeling helps design resilient systems and effective defense strategies.',
    },
    'Games & Interactive': {
        'context': 'game theory and interactive systems',
        'intro': 'Games model strategic interaction between rational agents. This simulation explores game-theoretic concepts and emergent strategies.',
        'concepts': [
            ('Nash Equilibrium', 'Stable states where no player can benefit by changing strategy unilaterally.'),
            ('Evolutionary Game Theory', 'How strategies spread through populations based on their success.'),
            ('Cooperation Dilemmas', 'Situations like Prisoner\'s Dilemma where individual and collective interests conflict.'),
            ('Repeated Games', 'How the possibility of future interaction enables cooperation.'),
        ],
        'applications': 'Game theory informs economics, political science, evolutionary biology, and AI design.',
    },
    'Art & Design': {
        'context': 'artistic and design principles',
        'intro': 'Generative and procedural methods create art through algorithms. This simulation explores computational aesthetics and design principles.',
        'concepts': [
            ('Procedural Generation', 'Creating content through algorithms rather than manual design.'),
            ('Emergence in Art', 'Complex visual patterns arising from simple generative rules.'),
            ('Aesthetic Optimization', 'Using computational methods to explore and optimize design spaces.'),
            ('Interactive Systems', 'Art that responds to viewer input or environmental conditions.'),
        ],
        'applications': 'Computational approaches enable new forms of creative expression and design automation.',
    },
    'Music & Sound': {
        'context': 'musical systems and acoustics',
        'intro': 'Music involves complex patterns in time and frequency. This simulation models acoustic phenomena and musical structure.',
        'concepts': [
            ('Wave Physics', 'Sound as pressure waves with frequency, amplitude, and phase properties.'),
            ('Harmonic Series', 'The mathematical relationships underlying musical consonance and dissonance.'),
            ('Rhythm and Timing', 'Patterns of events in time that create musical structure.'),
            ('Algorithmic Composition', 'Using rules and randomness to generate musical content.'),
        ],
        'applications': 'Sound modeling enables music synthesis, audio processing, and acoustic design.',
    },
    'Literature & Narrative': {
        'context': 'narrative structures and storytelling',
        'intro': 'Stories follow patterns that can be modeled computationally. This simulation explores narrative dynamics and plot structure.',
        'concepts': [
            ('Story Grammar', 'Underlying structures that shape narrative coherence and engagement.'),
            ('Character Dynamics', 'How relationships and conflicts between characters drive plot.'),
            ('Narrative Arc', 'The progression of tension and resolution that creates satisfying stories.'),
            ('Procedural Narrative', 'Generating story content through rules and agent behavior.'),
        ],
        'applications': 'Narrative modeling informs interactive fiction, game design, and AI storytelling.',
    },
    'Philosophy & Abstract': {
        'context': 'philosophical concepts and abstract systems',
        'intro': 'Abstract systems can model philosophical concepts computationally. This simulation explores fundamental questions through simulation.',
        'concepts': [
            ('Emergence', 'How complex properties arise from simpler components and their interactions.'),
            ('Causation', 'The relationship between causes and effects in complex systems.'),
            ('Determinism vs Randomness', 'The roles of predictable and unpredictable elements in system behavior.'),
            ('Complexity', 'Systems between order and chaos that exhibit rich, adaptive behavior.'),
        ],
        'applications': 'Philosophical modeling illuminates fundamental questions about minds, society, and reality.',
    },
    'Speculative & Experimental': {
        'context': 'experimental and speculative scenarios',
        'intro': 'Speculative simulations explore hypothetical scenarios and novel dynamics. This simulation models possibilities beyond current reality.',
        'concepts': [
            ('What-If Scenarios', 'Exploring counterfactual situations to understand causal relationships.'),
            ('Extreme Conditions', 'System behavior under conditions beyond normal experience.'),
            ('Novel Mechanisms', 'Hypothetical dynamics that might exist but haven\'t been observed.'),
            ('Future Projection', 'Extending current trends to explore possible futures.'),
        ],
        'applications': 'Speculative modeling enables scenario planning, risk assessment, and creative exploration.',
    },
    'Miscellaneous Advanced': {
        'context': 'advanced interdisciplinary concepts',
        'intro': 'Complex systems often span multiple disciplines. This simulation explores advanced concepts that bridge traditional boundaries.',
        'concepts': [
            ('Cross-Scale Dynamics', 'How processes at different scales (micro to macro) interact and influence each other.'),
            ('Adaptive Systems', 'Systems that change their behavior in response to experience and environment.'),
            ('Network Effects', 'How the structure of connections shapes system behavior and outcomes.'),
            ('Tipping Points', 'Thresholds where small changes trigger large, often irreversible transitions.'),
        ],
        'applications': 'Interdisciplinary modeling addresses complex real-world challenges that span multiple domains.',
    },
}

# Default for categories not in research
DEFAULT_RESEARCH = {
    'context': 'complex systems and emergent behavior',
    'intro': 'Complex systems exhibit emergent properties arising from interactions among many components. This simulation demonstrates how simple rules can produce sophisticated collective behavior.',
    'concepts': [
        ('Agent-Based Modeling', 'Individual agents follow simple rules, producing complex emergent behaviors at the system level.'),
        ('Emergence', 'System-level patterns and properties that arise from local interactions, often surprising and unpredictable.'),
        ('Self-Organization', 'Order arising spontaneously from the dynamics of the system without external direction.'),
        ('Feedback Loops', 'Positive feedback amplifies changes while negative feedback stabilizes systems.'),
    ],
    'applications': 'Understanding complex systems helps address challenges in science, engineering, and society.',
}


def parse_markdown():
    """Parse the markdown file to extract simulation descriptions."""
    simulations = {}
    current_category = ""

    with open(MARKDOWN_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    category_pattern = r'^## (.+?) \(\d+ simulations?\)'
    sim_pattern = r'### \[x\] (\d+)\. (.+?)\n\*\*Task:\*\* (.+?)(?=\n\n|\n###|\n---|\n## |\Z)'

    categories = []
    for match in re.finditer(category_pattern, content, re.MULTILINE):
        categories.append((match.start(), match.group(1)))

    for match in re.finditer(sim_pattern, content, re.DOTALL):
        num = int(match.group(1))
        title = match.group(2).strip()
        description = match.group(3).strip().replace('\n', ' ')

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


def generate_enriched_modal(num, sim_info):
    """Generate rich, research-based modal content."""
    title = sim_info['title']
    description = sim_info['description']
    category = sim_info['category']

    # Get research-based content for this category
    research = CATEGORY_RESEARCH.get(category, DEFAULT_RESEARCH)

    # Build concepts HTML
    concepts_html = ""
    for concept_name, concept_desc in research['concepts']:
        concepts_html += f'''                    <li><strong>{concept_name}:</strong> {concept_desc}</li>
'''

    modal_html = f'''
    <div id="explainModal" class="modal-overlay">
        <div class="modal">
            <button class="modal-close">&times;</button>
            <h2>📊 {title}</h2>
            <div class="modal-body">
                <p>{research['intro']}</p>

                <h3>About This Simulation</h3>
                <p>{description}</p>

                <h3>Key Concepts</h3>
                <ul>
{concepts_html}                </ul>

                <h3>Why It Matters</h3>
                <p>{research['applications']}</p>

                <h3>How to Explore</h3>
                <ul>
                    <li>Adjust the sliders to modify simulation parameters and observe how the system responds</li>
                    <li>Look for emergent patterns that arise from agent interactions</li>
                    <li>Try extreme parameter values to find phase transitions and tipping points</li>
                    <li>Compare the simulation behavior to real-world phenomena</li>
                </ul>

                <p class="modal-category"><em>Category: {category} — Exploring {research['context']}</em></p>
            </div>
        </div>
    </div>'''
    return modal_html


def fix_file(html_path, simulations):
    """Fix and enrich a single HTML file."""
    filename = html_path.name
    match = re.match(r'(\d+)-', filename)
    if not match:
        return False, "no number prefix"

    num = int(match.group(1))

    sim_info = simulations.get(num)
    if not sim_info:
        title_match = re.match(r'\d+-(.+)\.html', filename)
        title = title_match.group(1).replace('-', ' ').title() if title_match else f"Simulation {num}"
        sim_info = {
            'title': title,
            'description': f"An agent-based simulation exploring {title.lower()} dynamics through computational modeling.",
            'category': 'Miscellaneous Advanced'
        }

    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove old modal and button if present
    content = re.sub(r'\n\s*<button id="explainBtn"[^>]*>.*?</button>', '', content)
    content = re.sub(r'\n\s*<div id="explainModal" class="modal-overlay">.*?</div>\s*</div>\s*</div>', '', content, flags=re.DOTALL)

    # Remove old modal CSS
    content = re.sub(r'\n\s*\.explain-btn \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.explain-btn:hover \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.modal-overlay \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.modal-overlay\.active \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.modal \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.modal-close \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.modal-close:hover \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.modal h2 \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.modal-body \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.modal-body h3 \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.modal-body p \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.modal-body ul \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.modal-body li \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.modal-body strong \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.modal-body em \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.modal-body code \{[^}]+\}', '', content)
    content = re.sub(r'\n\s*\.modal-category \{[^}]+\}', '', content)

    # Remove old modal JS
    content = re.sub(r'\n\s*// Modal functionality\n.*?if \(e\.target === modal\) modal\.classList\.remove\(\'active\'\);\s*\}\);', '', content, flags=re.DOTALL)
    content = re.sub(r'\n\s*const modal = document\.getElementById\(\'explainModal\'\);.*?\}\);', '', content, flags=re.DOTALL)

    # Add new CSS before </style>
    new_css = '''
        .explain-btn {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            color: white;
            font-weight: 600;
        }
        .explain-btn:hover {
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }
        .modal-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.9);
            z-index: 10000;
            padding: 20px;
            overflow-y: auto;
        }
        .modal-overlay.active {
            display: flex;
            align-items: flex-start;
            justify-content: center;
        }
        .modal {
            background: linear-gradient(135deg, #1a1a2e 0%, #252542 100%);
            border-radius: 20px;
            padding: 35px;
            max-width: 750px;
            width: 100%;
            margin: 40px auto;
            position: relative;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
        }
        .modal-close {
            position: absolute;
            top: 15px;
            right: 20px;
            background: rgba(255,255,255,0.1);
            border: none;
            color: #888;
            font-size: 24px;
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }
        .modal-close:hover {
            color: #fff;
            background: rgba(255,255,255,0.2);
        }
        .modal h2 {
            color: #00d9ff;
            margin-bottom: 25px;
            font-size: 1.6rem;
            padding-right: 50px;
            line-height: 1.3;
        }
        .modal-body {
            color: #d1d5db;
            line-height: 1.9;
            font-size: 1rem;
        }
        .modal-body h3 {
            color: #00ff88;
            margin: 28px 0 14px 0;
            font-size: 1.15rem;
            font-weight: 600;
        }
        .modal-body p {
            margin-bottom: 16px;
        }
        .modal-body ul {
            margin: 12px 0 18px 24px;
        }
        .modal-body li {
            margin-bottom: 10px;
        }
        .modal-body strong {
            color: #00d9ff;
        }
        .modal-body em {
            color: #a5b4fc;
            font-style: italic;
        }
        .modal-body code {
            background: rgba(0,0,0,0.3);
            padding: 2px 8px;
            border-radius: 4px;
            font-family: 'Fira Code', monospace;
            color: #fbbf24;
            font-size: 0.9em;
        }
        .modal-category {
            margin-top: 24px;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.1);
            font-size: 0.9rem;
        }
    '''

    if '</style>' in content:
        content = content.replace('</style>', new_css + '</style>')

    # Add button after existing buttons in controls
    # Find a good place to insert the button
    button_html = '<button id="explainBtn" class="explain-btn">📚 Explain This Simulation</button>'

    # Try to find button patterns and add after them
    patterns = [
        (r'(class="btn-secondary"[^>]*>[^<]*</button>)', r'\1\n                ' + button_html),
        (r'(class="btn-primary"[^>]*>[^<]*</button>)', r'\1\n                ' + button_html),
        (r'(<button[^>]*>[^<]*Reset[^<]*</button>)', r'\1\n                ' + button_html),
        (r'(<button[^>]*>[^<]*Start[^<]*</button>)', r'\1\n                ' + button_html),
    ]

    button_added = False
    for pattern, replacement in patterns:
        if re.search(pattern, content) and 'explainBtn' not in content:
            content = re.sub(pattern, replacement, content, count=1)
            button_added = True
            break

    if not button_added and 'explainBtn' not in content:
        # Add before </div> in controls section
        content = re.sub(r'(</div>\s*</div>\s*</main>)',
                        f'{button_html}\n            \\1', content, count=1)

    # Generate and add modal HTML before </body>
    modal_html = generate_enriched_modal(num, sim_info)

    # Add modal and JavaScript before </body>
    modal_and_js = modal_html + '''

    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const modal = document.getElementById('explainModal');
        const explainBtn = document.getElementById('explainBtn');
        if (modal && explainBtn) {
            explainBtn.addEventListener('click', function() {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            modal.querySelector('.modal-close').addEventListener('click', function() {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modal.classList.contains('active')) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    });
    </script>
'''

    content = content.replace('</body>', modal_and_js + '\n</body>')

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(content)

    return True, "success"


def main():
    print("Parsing markdown file...")
    simulations = parse_markdown()
    print(f"Found {len(simulations)} simulation descriptions")
    print(f"Research available for {len(CATEGORY_RESEARCH)} categories")

    print(f"\nProcessing HTML files...")

    html_files = sorted(NETLOGO3_DIR.glob("*.html"))
    html_files = [f for f in html_files if f.name != "index.html"]

    success = 0
    errors = []

    for i, html_file in enumerate(html_files):
        try:
            ok, msg = fix_file(html_file, simulations)
            if ok:
                success += 1
            if (i + 1) % 100 == 0:
                print(f"  Processed {i + 1} files...")
        except Exception as e:
            errors.append((html_file.name, str(e)))

    print(f"\nComplete!")
    print(f"  Successfully processed: {success}")
    print(f"  Errors: {len(errors)}")
    if errors:
        for name, err in errors[:10]:
            print(f"    - {name}: {err}")


if __name__ == "__main__":
    main()
