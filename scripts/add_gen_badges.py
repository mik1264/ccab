#!/usr/bin/env python3
"""
Script to add generation badges to gallery cards in index.html
"""
import re

# Generation mapping based on git history analysis
GENERATIONS = {
    # Gen 1 - Original (2023)
    'algorithmic-art': 1,
    'game-of-life': 1,
    'infographics': 1,
    'lissajous': 1,
    'visualizations': 1,
    'games': 1,

    # Gen 2 - Framework Integration (Mid 2024)
    'threejs': 2,
    'webgl-shaders': 2,
    'webgpu': 2,
    'p5-generative-art': 2,
    'pixi-sprite-animations': 2,
    'd3js': 2,
    'web-audio-api': 2,
    'webassembly': 2,

    # Gen 3 - Simulation Boom (Aug-Oct 2024)
    'physics-simulations': 3,
    'biological-simulations': 3,
    'scientific-visualizations': 3,
    'complex-showcases': 3,
    'visualization-algorithms': 3,
    'ethnocentrism': 3,
    'schelling-segregation': 3,
    'sugarscape': 3,
    'sugarscape-inequality': 3,
    'wealth-distribution': 3,
    'virus-epidemic-models': 3,
    'wolf-sheep-predation': 3,
    'fire-percolation': 3,
    'altruism-evolution': 3,
    'chaos-attractors': 3,
    'double-pendulum': 3,
    'triple-pendulum': 3,
    'lorenz-attractor': 3,
    'particle-systems': 3,
    'particle-effects': 3,
    'emergent-behaviors': 3,
    'gravity-orbits': 3,
    'petri-arena': 3,
    'boids-flocking-visualizations': 3,
    'follower-visualizations': 3,
    'autumn-leaf-visualizations': 3,
    'lottie-animations': 3,
    'elliptic-curve-murmurations': 3,
    'walther-calculators': 3,
    'tragedy-commons': 3,
    'epidemic-model': 3,
    'evolution-of-trust': 3,
    'traffic-simulation': 3,
    'cloth-simulation': 3,
    'smoke-simulation': 3,
    'fire-smoke-simulation': 3,
    'flip-fluid': 3,
    'sph-water': 3,
    'soft-body-physics': 3,
    'rigid-body-collision': 3,
    'rope-chain-physics': 3,
    'spring-mass-systems': 3,
    'bouncing-balls': 3,
    'projectile-motion': 3,
    'coupled-oscillators': 3,
    'van-der-pol': 3,
    'duffing-oscillator': 3,
    'chua-circuit': 3,
    'magnetic-pendulum': 3,
    'heat-equation': 3,
    'wave-equation': 3,
    'lattice-boltzmann': 3,
    'electromagnetic-fields': 3,
    'jansen-linkage': 3,
    'jensen-linkage': 3,
    'evolutionary-walkers': 3,

    # Gen 4 - Organic Redesign (Nov 2024)
    'tsl-shaders': 4,
    'threejs-tsl-shaders': 4,
    'geometric-patterns': 4,
    'screensaver-patterns': 4,
    'mathematical-art': 4,
    'optical-illusions': 4,
    'svg-animations': 4,
    'css-art': 4,
    'l-systems': 4,
    'langtons-ant': 4,
    'turmites': 4,
    'dla-fractals': 4,
    'mandelbrot-julia': 4,
    'newton-fractals': 4,
    'burning-ship': 4,
    'barnsley-fern': 4,
    'dragon-curve': 4,
    'apollonian-gasket': 4,
    'menger-sponge': 4,
    'bifurcation-diagrams': 4,
    'lyapunov-exponent': 4,
    'voronoi-delaunay': 4,
    'convex-hull': 4,
    'procedural-generation': 4,
    'procedural-terrain': 4,
    'ray-marching': 4,
    'marching-cubes': 4,
    'sandpile': 4,
    'percolation': 4,
    'reaction-diffusion': 4,
    'wave-function-collapse': 4,
    'metaballs': 4,
    'lenia': 4,
    'smoothlife': 4,
    'larger-than-life': 4,
    'totalistic-ca': 4,
    'cyclic-ca': 4,
    'voting-ca': 4,
    'mnca': 4,
    'wireworld': 4,
    'wolfram-ca': 4,
    'automata': 4,
    'space-filling-curves': 4,
    'fourier-epicycles': 4,
    'three-body-problem': 4,
    'galaxy-collision': 4,
    'physarum-simulation': 4,
    'genetic-algorithm': 4,
    'ant-colony-optimization': 4,
    'simulations': 4,
    'sorting-algorithms': 4,
    'pathfinding': 4,
    'maze-generation': 4,
    'graph-algorithms': 4,
    'binary-tree-traversal': 4,
    'spatial-partitioning': 4,
    'random-walk': 4,
    'chaos-game': 4,
    'black-hole-lensing': 4,
    'solar-flare-visualizations': 4,

    # Gen 5 - Science/Education Push (Nov-Dec 2024)
    'netlogo-simulations': 5,
    'netlogo-simulations-2': 5,
    'netlogo-simulations-3': 5,
    'educational': 5,
    'challenges': 5,
    'cognitive-science': 5,
    'consciousness-science': 5,
    'network-dynamics': 5,
    'game-theory': 5,
    'quantum-visualizations': 5,
    'social-dynamics': 5,
    'geophysical': 5,
    'morphogenesis': 5,
    'optimization': 5,
    'time-clocks': 5,
    'information-theory': 5,
    'xuanji-tu': 5,
    'music-sequencers': 5,
    'kennings': 5,
    'religion-trends': 5,
    'felix-calculator': 5,
    'visual-essays': 5,
    'data-structures': 5,
    'ml-visualizations': 5,
    'abm-economics': 5,
    'ancient-economy-abm': 5,
    'renaissance-econsim': 5,
    'voting-systems': 5,

    # Gen 6 - Astronomy (Dec 2024)
    'cosmology': 6,
    'stellar-evolution': 6,
    'galaxy-dynamics': 6,
    'cosmology-universe': 6,
    'orbital-flythroughs': 6,
    'earth-space': 6,
    'quantum-relativity': 6,

    # Gen 7 - Recent (Dec 2024-Jan 2025)
    'surprising-paradoxes': 7,
    'satisfying-animations': 7,
    'chess960': 7,
    'ulam-spirals': 7,
    'digital-signal-processing': 7,
    'communications-systems': 7,
    'neural-network-playgrounds': 7,
    'generative-art-2': 7,
    'art-experimental': 7,
    'crazy-christmas': 7,
    'distributed-systems': 7,
    'advanced-cs-ai': 7,
    'classical-ciphers': 7,
    'modern-cryptography': 7,
    'cryptography-security': 7,
    'acoustics-signal': 7,
    'advanced-engineering': 7,
    'linguistics-nlp': 7,
    'philosophy-logic': 7,
    'quantum-computing': 7,
    'economics-games': 7,
    'social-science': 7,
    'biology-medicine': 7,
    'chemistry-materials': 7,
    'engineering-robotics': 7,
    'math-geometry': 7,
}

def add_badges(html_content):
    """Add generation badges to gallery cards."""

    def replace_gallery_card(match):
        full_match = match.group(0)
        href = match.group(1)

        # Extract gallery name from href
        # e.g., "algorithmic-art/index.html" -> "algorithmic-art"
        gallery_match = re.search(r'href="([^/]+)/index\.html"', full_match)
        if not gallery_match:
            return full_match

        gallery_name = gallery_match.group(1)
        gen = GENERATIONS.get(gallery_name)

        if gen is None:
            # Default to Gen 7 for unknown galleries (most recent)
            gen = 7
            print(f"Unknown gallery: {gallery_name} - defaulting to Gen {gen}")

        # Check if badge already exists
        if 'gen-badge' in full_match:
            return full_match

        # Add badge after the opening <a> tag
        badge = f'<span class="gen-badge">Gen {gen}</span>'

        # Insert badge right after the <a ...> opening tag
        modified = re.sub(
            r'(<a\s+href="[^"]+"\s+class="gallery-card">)',
            r'\1\n                        ' + badge,
            full_match
        )

        return modified

    # Pattern to match gallery card links
    pattern = r'<a\s+href="([^"]+/index\.html)"\s+class="gallery-card">[\s\S]*?</a>'

    result = re.sub(pattern, replace_gallery_card, html_content)
    return result

def main():
    with open('index.html', 'r') as f:
        content = f.read()

    updated = add_badges(content)

    with open('index.html', 'w') as f:
        f.write(updated)

    print("Done! Added generation badges to gallery cards.")

if __name__ == '__main__':
    main()
