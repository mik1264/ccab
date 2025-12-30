/**
 * CCAB Educational Content Library
 * Pre-built educational content for common demo types
 * Version: 1.0.0
 *
 * Provides:
 * - "What you're seeing" descriptions
 * - "How it works" algorithm explanations
 * - "Math behind it" with equations
 * - "Real-world uses" applications
 * - "Try changing" parameter suggestions
 * - "Learn more" reference links
 */

const EduContentLibrary = {
    // ==================
    // Cellular Automata
    // ==================

    gameOfLife: {
        title: "Conway's Game of Life",
        icon: '🦠',
        theory: {
            intro: "A cellular automaton where cells live or die based on their neighbors, creating complex patterns from simple rules.",
            equation: "B3/S23",
            explanation: "Each cell has 8 neighbors. A cell is born if it has exactly 3 live neighbors (B3). A live cell survives if it has 2 or 3 live neighbors (S23). Otherwise, it dies.",
            concepts: [
                { term: 'Cellular Automaton', definition: 'A grid of cells that evolve based on rules applied to each cell and its neighbors.' },
                { term: 'Emergence', definition: 'Complex patterns arising from simple local rules without central control.' },
                { term: 'Glider', definition: 'A pattern that translates across the grid over time.' }
            ]
        },
        algorithm: {
            overview: 'Each generation, every cell checks its neighbors and applies birth/survival rules.',
            steps: [
                'Count live neighbors (8 surrounding cells)',
                'Apply birth rule: dead cell with 3 neighbors becomes alive',
                'Apply survival rule: live cell with 2-3 neighbors survives',
                'Apply death rule: all other live cells die',
                'Update entire grid simultaneously'
            ],
            pseudocode: `for each cell (x, y):
    neighbors = countLiveNeighbors(x, y)
    if cell is dead and neighbors == 3:
        nextState = alive
    else if cell is alive and (neighbors == 2 or neighbors == 3):
        nextState = alive
    else:
        nextState = dead`
        },
        applications: [
            { icon: '🧬', field: 'Biology', description: 'Models population dynamics, pattern formation, and self-replication.' },
            { icon: '💻', field: 'Computing', description: 'Proven to be Turing-complete—can simulate any computer.' },
            { icon: '🎮', field: 'Game Design', description: 'Procedural generation and emergent gameplay systems.' }
        ],
        explore: [
            'Try drawing a small 2x3 block and watch it oscillate (blinker).',
            'Create a glider: draw cells at positions forming an arrow shape.',
            'Start with random 30% fill and observe emergent structures.',
            'Try clearing most cells except a few—some patterns stabilize, others die out.'
        ],
        references: [
            { title: 'Wikipedia: Conway\'s Game of Life', url: 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life', type: 'wikipedia' },
            { title: 'LifeWiki - Pattern Catalog', url: 'https://conwaylife.com/wiki/', type: 'resource' },
            { title: 'Original 1970 Scientific American Article', url: 'https://web.stanford.edu/class/sts145/Library/life.pdf', type: 'paper' }
        ]
    },

    wolframCA: {
        title: 'Elementary Cellular Automata',
        icon: '📊',
        theory: {
            intro: 'One-dimensional cellular automata where each cell depends on itself and two neighbors, producing surprisingly complex patterns.',
            equation: 'Rule = Σ(2^i × bit_i) for i=0..7',
            explanation: 'Each rule number (0-255) encodes 8 output bits. Given 3 input cells (left, center, right), the rule determines the next state. For example, Rule 110 is known to be Turing-complete.',
            concepts: [
                { term: 'Rule Number', definition: 'A number 0-255 encoding the 8 possible output states for all input combinations.' },
                { term: 'Turing Completeness', definition: 'A system capable of simulating any computational algorithm.' },
                { term: 'Class IV Behavior', definition: 'Complex, non-repeating patterns (edge of chaos)—found in rules like 30 and 110.' }
            ]
        },
        algorithm: {
            overview: 'Starting from a single cell or random row, apply the rule to generate each new row.',
            steps: [
                'Initialize first row (single cell or random)',
                'For each cell, read 3-cell neighborhood (left, center, right)',
                'Convert neighborhood to number 0-7',
                'Look up output bit in rule number',
                'Write result to next row',
                'Repeat for all rows'
            ]
        },
        applications: [
            { icon: '🔐', field: 'Cryptography', description: 'Rule 30 was used in random number generation.' },
            { icon: '🎨', field: 'Pattern Design', description: 'Textile and architectural patterns.' },
            { icon: '🔬', field: 'Complexity Science', description: 'Studying emergence and computational universality.' }
        ],
        explore: [
            'Rule 30 produces chaotic, random-looking patterns—try it!',
            'Rule 110 shows complex structures with gliders.',
            'Rule 90 creates the Sierpinski triangle.',
            'Compare symmetric rules (e.g., 150) vs asymmetric rules (e.g., 30).'
        ],
        references: [
            { title: 'A New Kind of Science (Stephen Wolfram)', url: 'https://www.wolframscience.com/', type: 'book' },
            { title: 'Wikipedia: Elementary Cellular Automaton', url: 'https://en.wikipedia.org/wiki/Elementary_cellular_automaton', type: 'wikipedia' }
        ]
    },

    // ==================
    // Physics Simulations
    // ==================

    orbitalMechanics: {
        title: 'Orbital Mechanics',
        icon: '🛸',
        theory: {
            intro: "Celestial bodies follow predictable paths governed by Newton's law of gravitation.",
            equation: 'F = G(m₁m₂)/r²',
            explanation: 'Every mass attracts every other mass with a force proportional to their masses and inversely proportional to the square of the distance between them. This creates elliptical, parabolic, or hyperbolic orbits.',
            concepts: [
                { term: 'Orbital Velocity', definition: 'Speed needed to maintain orbit at a given altitude.' },
                { term: 'Escape Velocity', definition: 'Minimum speed to escape gravitational pull (v = √(2GM/r)).' },
                { term: 'Lagrange Points', definition: 'Five points where gravitational forces balance, allowing stable positioning.' }
            ]
        },
        algorithm: {
            overview: 'Numerical integration of gravitational acceleration over small time steps.',
            steps: [
                'Calculate distance between all body pairs',
                'Compute gravitational force vectors',
                'Sum forces on each body',
                'Update velocities (v += a × dt)',
                'Update positions (x += v × dt)',
                'Repeat each frame'
            ],
            pseudocode: `for each body A:
    force = (0, 0)
    for each body B ≠ A:
        r = B.position - A.position
        dist = |r|
        F = G × A.mass × B.mass / dist²
        force += F × normalize(r)
    A.velocity += force / A.mass × dt
    A.position += A.velocity × dt`
        },
        applications: [
            { icon: '🚀', field: 'Space Missions', description: 'Mission planning, gravity assists, orbital transfers.' },
            { icon: '📡', field: 'Satellites', description: 'GPS, communications, and Earth observation.' },
            { icon: '🔭', field: 'Astronomy', description: 'Predicting planetary positions and eclipses.' }
        ],
        explore: [
            'Try giving a planet just slightly more velocity—watch it escape.',
            'Add a third body and observe chaotic interactions.',
            'Create a binary star system with a planet.',
            'Experiment with Hohmann transfers between orbits.'
        ],
        references: [
            { title: 'Wikipedia: Orbital Mechanics', url: 'https://en.wikipedia.org/wiki/Orbital_mechanics', type: 'wikipedia' },
            { title: 'NASA Basics of Spaceflight', url: 'https://solarsystem.nasa.gov/basics/', type: 'resource' }
        ]
    },

    // ==================
    // Flocking/Swarms
    // ==================

    boids: {
        title: 'Boids Flocking Algorithm',
        icon: '🐦',
        theory: {
            intro: 'Simulates flocking behavior using three simple local rules—no central control needed.',
            equation: 'v_new = v + (separation + alignment + cohesion)',
            explanation: 'Each boid only knows about nearby neighbors. Separation avoids crowding, alignment matches velocity, and cohesion steers toward the flock center. Complex group behavior emerges from these local interactions.',
            concepts: [
                { term: 'Separation', definition: 'Steer away from nearby flockmates to avoid collision.' },
                { term: 'Alignment', definition: 'Match velocity with neighbors.' },
                { term: 'Cohesion', definition: 'Steer toward the average position of neighbors.' }
            ]
        },
        algorithm: {
            overview: 'Each boid scans nearby neighbors and applies three steering forces.',
            steps: [
                'Find all boids within perception radius',
                'Calculate separation vector (away from too-close boids)',
                'Calculate alignment vector (average neighbor velocity)',
                'Calculate cohesion vector (toward neighbor center)',
                'Weight and sum all forces',
                'Apply to velocity, limit max speed',
                'Update position'
            ]
        },
        applications: [
            { icon: '🎬', field: 'Animation', description: 'Batman Returns (1992) pioneered boid flocking in film.' },
            { icon: '🎮', field: 'Games', description: 'Enemy swarms, crowd simulation, particle effects.' },
            { icon: '🤖', field: 'Robotics', description: 'Drone swarm coordination.' }
        ],
        explore: [
            'Increase separation weight to spread the flock.',
            'Reduce alignment to create more chaotic movement.',
            'Add obstacles and watch avoidance behavior.',
            'Try adding a "predator" that boids flee from.'
        ],
        references: [
            { title: 'Craig Reynolds\' Boids Page', url: 'http://www.red3d.com/cwr/boids/', type: 'resource' },
            { title: 'Wikipedia: Boids', url: 'https://en.wikipedia.org/wiki/Boids', type: 'wikipedia' }
        ]
    },

    // ==================
    // Fractals
    // ==================

    mandelbrot: {
        title: 'Mandelbrot Set',
        icon: '🌀',
        theory: {
            intro: 'An infinitely complex fractal boundary arising from a simple iterative equation on complex numbers.',
            equation: 'z_{n+1} = z_n² + c',
            explanation: 'For each point c in the complex plane, iterate z = z² + c starting from z = 0. If the value stays bounded (|z| < 2), c is in the Mandelbrot set (colored black). Otherwise, color based on how quickly it escapes.',
            concepts: [
                { term: 'Complex Number', definition: 'A number with real and imaginary parts: c = a + bi.' },
                { term: 'Escape Radius', definition: 'If |z| > 2, the sequence will diverge to infinity.' },
                { term: 'Self-Similarity', definition: 'Zooming in reveals similar patterns at all scales.' }
            ]
        },
        algorithm: {
            overview: 'For each pixel, iterate the formula and count steps until escape.',
            steps: [
                'Map pixel coordinates to complex plane',
                'Set z = 0',
                'Iterate: z = z² + c',
                'Count iterations until |z| > 2',
                'Color pixel based on iteration count',
                'Repeat for all pixels'
            ],
            pseudocode: `for each pixel (px, py):
    c = mapToComplex(px, py)
    z = 0
    iterations = 0
    while |z| < 2 and iterations < maxIter:
        z = z² + c
        iterations++
    color = palette[iterations]`
        },
        applications: [
            { icon: '🎨', field: 'Digital Art', description: 'Fractal art and visualization.' },
            { icon: '📐', field: 'Mathematics', description: 'Studying complex dynamics and chaos.' },
            { icon: '💻', field: 'Graphics', description: 'GPU programming tutorials and benchmarks.' }
        ],
        explore: [
            'Zoom into the boundary—detail continues forever.',
            'Find "Seahorse Valley" at coordinates (-0.75, 0.1).',
            'Explore "Elephant Valley" near the main cardioid.',
            'Try different color palettes for artistic effects.'
        ],
        references: [
            { title: 'Wikipedia: Mandelbrot Set', url: 'https://en.wikipedia.org/wiki/Mandelbrot_set', type: 'wikipedia' },
            { title: 'The Fractal Geometry of Nature', url: 'https://en.wikipedia.org/wiki/The_Fractal_Geometry_of_Nature', type: 'book' }
        ]
    },

    // ==================
    // Evolution
    // ==================

    geneticAlgorithm: {
        title: 'Genetic Algorithm',
        icon: '🧬',
        theory: {
            intro: 'An optimization method inspired by natural selection—survival of the fittest solutions.',
            equation: 'Fitness → Selection → Crossover → Mutation',
            explanation: 'A population of candidate solutions evolves over generations. Fitter individuals reproduce more, passing traits to offspring. Crossover combines parent traits; mutation introduces variation.',
            concepts: [
                { term: 'Fitness Function', definition: 'Measures how good a solution is at solving the problem.' },
                { term: 'Selection', definition: 'Choosing parents based on fitness (better = more likely to reproduce).' },
                { term: 'Crossover', definition: 'Combining genetic material from two parents.' },
                { term: 'Mutation', definition: 'Random changes to introduce diversity.' }
            ]
        },
        algorithm: {
            overview: 'Evolve a population through selection, crossover, and mutation.',
            steps: [
                'Initialize random population',
                'Evaluate fitness of each individual',
                'Select parents (fitness-proportional)',
                'Create offspring via crossover',
                'Apply mutations',
                'Replace population with offspring',
                'Repeat for many generations'
            ]
        },
        applications: [
            { icon: '🏭', field: 'Engineering', description: 'Optimizing designs, schedules, and configurations.' },
            { icon: '🤖', field: 'AI/ML', description: 'Neural network architecture search.' },
            { icon: '🎮', field: 'Games', description: 'Evolving game AI and procedural content.' }
        ],
        explore: [
            'Start with high mutation rate, then reduce it.',
            'Compare different selection methods (tournament vs roulette).',
            'Watch fitness plateau—this is a local optimum.',
            'Try larger population sizes for better exploration.'
        ],
        references: [
            { title: 'Wikipedia: Genetic Algorithm', url: 'https://en.wikipedia.org/wiki/Genetic_algorithm', type: 'wikipedia' },
            { title: 'Genetic Algorithms in Search, Optimization & Machine Learning', url: 'https://www.goodreads.com/book/show/142613', type: 'book' }
        ]
    },

    // ==================
    // Agent-Based Models
    // ==================

    schellingSegregation: {
        title: 'Schelling Segregation Model',
        icon: '🏘️',
        theory: {
            intro: 'Shows how mild individual preferences can produce complete segregation—an unintended collective outcome.',
            equation: 'happiness = (same_neighbors / total_neighbors) ≥ threshold',
            explanation: 'Agents prefer a certain percentage of neighbors to be similar. If unsatisfied, they move to a random empty spot. Even with mild preferences (e.g., 30%), the result is often complete segregation.',
            concepts: [
                { term: 'Tipping Point', definition: 'A small change in preference threshold can drastically change outcomes.' },
                { term: 'Emergence', definition: 'Macro-level segregation emerges from micro-level preferences.' },
                { term: 'Unintended Consequences', definition: 'Individual tolerance produces collective separation.' }
            ]
        },
        algorithm: {
            overview: 'Agents move when unhappy with their neighborhood composition.',
            steps: [
                'Place agents of two types on grid',
                'For each agent, count similar neighbors',
                'Calculate satisfaction (ratio ≥ threshold)',
                'If unsatisfied, move to random empty cell',
                'Repeat until stable or max iterations'
            ]
        },
        applications: [
            { icon: '🏙️', field: 'Urban Planning', description: 'Understanding residential segregation patterns.' },
            { icon: '📊', field: 'Social Science', description: 'Modeling opinion dynamics and polarization.' },
            { icon: '💼', field: 'Economics', description: 'Market segmentation and clustering.' }
        ],
        explore: [
            'Start with 30% threshold—watch segregation emerge.',
            'Try 50% threshold—segregation is even stronger.',
            'Compare grid sizes: larger grids show clearer patterns.',
            'What happens with 3 or more agent types?'
        ],
        references: [
            { title: 'Wikipedia: Schelling\'s Model', url: 'https://en.wikipedia.org/wiki/Schelling%27s_model_of_segregation', type: 'wikipedia' },
            { title: 'Original Schelling Paper (1971)', url: 'https://www.jstor.org/stable/2296329', type: 'paper' }
        ]
    },

    altruismEvolution: {
        title: 'Evolution of Altruism',
        icon: '💝',
        theory: {
            intro: 'Explores how cooperation can evolve despite individual cost—a puzzle since Darwin.',
            equation: 'rB > C (Hamilton\'s Rule)',
            explanation: 'Altruism evolves when the relatedness (r) times benefit to recipient (B) exceeds cost to altruist (C). Kin selection, reciprocity, and spatial structure can all promote cooperation.',
            concepts: [
                { term: 'Kin Selection', definition: 'Helping relatives propagates shared genes.' },
                { term: 'Reciprocal Altruism', definition: 'Help others who help you back (tit-for-tat).' },
                { term: 'Spatial Assortment', definition: 'Cooperators clustering together outcompete defectors.' }
            ]
        },
        algorithm: {
            overview: 'Agents with different strategies compete for resources and reproduce.',
            steps: [
                'Initialize population with cooperators and defectors',
                'Agents interact with neighbors',
                'Calculate payoffs (cooperation benefits, defection exploits)',
                'Reproduce proportional to fitness',
                'Some offspring mutate strategy',
                'Repeat for many generations'
            ]
        },
        applications: [
            { icon: '🧬', field: 'Evolutionary Biology', description: 'Explaining cooperative behaviors in nature.' },
            { icon: '🏛️', field: 'Political Science', description: 'Institutional design for cooperation.' },
            { icon: '🤝', field: 'Economics', description: 'Game theory and mechanism design.' }
        ],
        explore: [
            'Watch cooperators form clusters.',
            'Increase benefit/cost ratio—cooperation spreads faster.',
            'Add spatial structure—how does it change dynamics?',
            'Try introducing "punisher" agents who punish defectors.'
        ],
        references: [
            { title: 'Wikipedia: Altruism (biology)', url: 'https://en.wikipedia.org/wiki/Altruism_(biology)', type: 'wikipedia' },
            { title: 'The Evolution of Cooperation (Robert Axelrod)', url: 'https://en.wikipedia.org/wiki/The_Evolution_of_Cooperation', type: 'book' }
        ]
    }
};

/**
 * Get educational content for a demo type
 */
function getEduContent(type) {
    return EduContentLibrary[type] || null;
}

/**
 * List all available content types
 */
function listEduContentTypes() {
    return Object.keys(EduContentLibrary);
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EduContentLibrary, getEduContent, listEduContentTypes };
}
