/**
 * CCAB Educational Content Loader
 * Automatically loads and displays educational content for demos
 * Works with edu-panel.js and edu-panel.css
 */

(function() {
    'use strict';

    /**
     * Educational content database
     * Each demo can have educational content keyed by path
     */
    const EDU_CONTENT = {
        // Boids Flocking
        'boids-flocking-visualizations/01-classic-boids.html': {
            title: 'Understanding Boids',
            icon: '🐦',
            theory: {
                intro: 'Boids is an artificial life simulation developed by Craig Reynolds in 1986 that simulates the flocking behavior of birds.',
                equation: 'v<sub>i</sub>(t+1) = v<sub>i</sub>(t) + a<sub>sep</sub> + a<sub>align</sub> + a<sub>coh</sub>',
                explanation: 'Each boid\'s velocity is updated by combining three steering forces: separation (avoid crowding), alignment (steer toward average heading), and cohesion (steer toward average position).',
                concepts: [
                    { term: 'Separation', definition: 'Steer to avoid crowding local flockmates' },
                    { term: 'Alignment', definition: 'Steer towards the average heading of local flockmates' },
                    { term: 'Cohesion', definition: 'Steer to move toward the average position of local flockmates' }
                ]
            },
            algorithm: {
                overview: 'Each boid follows three simple rules, applied to nearby neighbors within a perception radius.',
                steps: [
                    'For each boid, find all neighbors within perception radius',
                    'Calculate separation: average position away from neighbors that are too close',
                    'Calculate alignment: average velocity of all neighbors',
                    'Calculate cohesion: direction toward center of mass of neighbors',
                    'Combine forces with weights and apply to current velocity',
                    'Limit velocity to maximum speed and update position'
                ],
                pseudocode: `for each boid b:
  neighbors = findNeighbors(b, radius)
  sep = separate(b, neighbors)
  ali = align(b, neighbors)
  coh = cohere(b, neighbors)
  b.velocity += sep*w1 + ali*w2 + coh*w3
  b.velocity = limit(b.velocity, maxSpeed)
  b.position += b.velocity`
            },
            applications: [
                { icon: '🎬', field: 'Computer Animation', description: 'Used in films like Batman Returns and The Lion King for realistic crowd and animal simulations.' },
                { icon: '🎮', field: 'Video Games', description: 'Powers enemy swarms, fish schools, and bird flocks in games.' },
                { icon: '🤖', field: 'Robotics', description: 'Swarm robotics uses boids-like algorithms for coordinated multi-robot systems.' },
                { icon: '🚗', field: 'Traffic Flow', description: 'Traffic models use similar principles for understanding vehicle behavior.' }
            ],
            explore: [
                'Increase separation weight to see boids spread out more',
                'Set alignment to 0 and watch the flock become chaotic',
                'Add a predator by clicking - watch boids evade',
                'Reduce perception radius to see smaller sub-flocks form'
            ],
            references: [
                { title: 'Reynolds\' Original Paper (1987)', url: 'https://www.red3d.com/cwr/boids/', type: 'paper' },
                { title: 'Craig Reynolds\' Boids Page', url: 'https://www.red3d.com/cwr/boids/', type: 'article' },
                { title: 'Nature of Code: Flocking', url: 'https://natureofcode.com/book/chapter-6-autonomous-agents/', type: 'book' }
            ]
        },

        // Game of Life
        'game-of-life/classic/demos/01-classic.html': {
            title: 'Conway\'s Game of Life',
            icon: '🧬',
            theory: {
                intro: 'The Game of Life is a cellular automaton devised by mathematician John Conway in 1970. Despite simple rules, it produces incredibly complex emergent behavior.',
                equation: 'S<sub>t+1</sub>(x,y) = f(S<sub>t</sub>(x,y), N<sub>t</sub>(x,y))',
                explanation: 'The next state of a cell depends on its current state and the count of living neighbors (N). This creates a deterministic but unpredictable system.',
                concepts: [
                    { term: 'Cellular Automaton', definition: 'A grid of cells that evolve according to local rules based on neighbor states' },
                    { term: 'Emergence', definition: 'Complex patterns arising from simple rules without central control' },
                    { term: 'Moore Neighborhood', definition: 'The 8 cells surrounding a central cell in a 2D grid' }
                ]
            },
            algorithm: {
                overview: 'Each generation, every cell simultaneously updates based on four simple rules.',
                steps: [
                    'Count living neighbors (8 adjacent cells)',
                    'Rule 1: Living cell with 2-3 neighbors survives',
                    'Rule 2: Living cell with <2 neighbors dies (underpopulation)',
                    'Rule 3: Living cell with >3 neighbors dies (overpopulation)',
                    'Rule 4: Dead cell with exactly 3 neighbors becomes alive',
                    'Apply all changes simultaneously'
                ],
                pseudocode: `for each cell (x, y):
  n = countLivingNeighbors(x, y)
  if cell is alive:
    nextState = (n == 2 or n == 3)
  else:
    nextState = (n == 3)
  newGrid[x][y] = nextState`
            },
            applications: [
                { icon: '💻', field: 'Computer Science', description: 'Proves Turing completeness - any computation can theoretically be performed.' },
                { icon: '🧪', field: 'Biology', description: 'Models pattern formation, population dynamics, and self-organization.' },
                { icon: '🔬', field: 'Physics', description: 'Studies phase transitions and complexity in simple systems.' },
                { icon: '🎓', field: 'Education', description: 'Teaches emergence, simulation, and computational thinking.' }
            ],
            explore: [
                'Draw a glider (5 cells in an arrow shape) and watch it move',
                'Create a blinker (3 horizontal cells) - it oscillates forever',
                'Try the R-pentomino (5 cells) - it evolves for 1103 generations',
                'Fill 30% of cells randomly to see chaotic evolution'
            ],
            references: [
                { title: 'Conway\'s Original Game of Life', url: 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life', type: 'article' },
                { title: 'LifeWiki Pattern Database', url: 'https://www.conwaylife.com/wiki/', type: 'wiki' },
                { title: 'Golly - Advanced Life Simulator', url: 'http://golly.sourceforge.net/', type: 'tool' }
            ]
        },

        // Lorenz Attractor
        'lorenz-attractor/index.html': {
            title: 'Lorenz Attractor',
            icon: '🦋',
            theory: {
                intro: 'The Lorenz system is a set of differential equations that exhibit chaotic behavior. Discovered by Edward Lorenz in 1963 while modeling atmospheric convection.',
                equation: 'dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz',
                explanation: 'The system has three parameters: σ (Prandtl number), ρ (Rayleigh number), and β (geometry factor). Classic values are σ=10, ρ=28, β=8/3.',
                concepts: [
                    { term: 'Strange Attractor', definition: 'A fractal structure that trajectories approach but never exactly repeat' },
                    { term: 'Butterfly Effect', definition: 'Sensitive dependence on initial conditions - tiny changes lead to vastly different outcomes' },
                    { term: 'Deterministic Chaos', definition: 'Unpredictable behavior from completely deterministic equations' }
                ]
            },
            algorithm: {
                overview: 'Numerical integration (Euler or Runge-Kutta) of the three coupled differential equations.',
                steps: [
                    'Initialize position (x, y, z) at some point',
                    'Calculate derivatives dx, dy, dz using current position',
                    'Update position: x += dx*dt, y += dy*dt, z += dz*dt',
                    'Store position for trail visualization',
                    'Repeat with small time step dt for smooth curves'
                ],
                pseudocode: `function lorenzStep(x, y, z, dt):
  dx = sigma * (y - x)
  dy = x * (rho - z) - y
  dz = x * y - beta * z
  return (x + dx*dt, y + dy*dt, z + dz*dt)`
            },
            applications: [
                { icon: '🌤️', field: 'Meteorology', description: 'Originally developed to model atmospheric convection and weather patterns.' },
                { icon: '🔐', field: 'Cryptography', description: 'Chaotic systems used in encryption due to sensitivity to initial conditions.' },
                { icon: '💓', field: 'Cardiology', description: 'Heart rhythm analysis uses chaos theory to detect arrhythmias.' },
                { icon: '📈', field: 'Economics', description: 'Financial models incorporate chaos for market behavior.' }
            ],
            explore: [
                'Change σ (sigma) - affects the spiral tightness',
                'Reduce ρ (rho) below 24.74 to see the attractor collapse',
                'Start two trajectories 0.001 apart and watch them diverge',
                'Increase time step to see numerical instability'
            ],
            references: [
                { title: 'Lorenz (1963) Original Paper', url: 'https://journals.ametsoc.org/view/journals/atsc/20/2/1520-0469_1963_020_0130_dnf_2_0_co_2.xml', type: 'paper' },
                { title: 'Chaos: Making a New Science (Gleick)', url: 'https://en.wikipedia.org/wiki/Chaos:_Making_a_New_Science', type: 'book' },
                { title: 'Interactive Lorenz System', url: 'https://www.dynamicmath.xyz/strange-attractors/', type: 'tool' }
            ]
        },

        // Mandelbrot Set
        'mandelbrot-julia/index.html': {
            title: 'Mandelbrot & Julia Sets',
            icon: '🌀',
            theory: {
                intro: 'The Mandelbrot set is the set of complex numbers c for which the iteration z → z² + c does not diverge. Named after Benoît Mandelbrot who visualized it in 1980.',
                equation: 'z<sub>n+1</sub> = z<sub>n</sub>² + c, starting with z<sub>0</sub> = 0',
                explanation: 'For each point c in the complex plane, we iterate and check if |z| stays bounded. The boundary is infinitely complex, revealing self-similar patterns at all scales.',
                concepts: [
                    { term: 'Complex Number', definition: 'A number with real and imaginary parts: c = a + bi' },
                    { term: 'Escape Time', definition: 'Number of iterations before |z| exceeds 2, used for coloring' },
                    { term: 'Self-Similarity', definition: 'The boundary contains copies of itself at smaller scales' }
                ]
            },
            algorithm: {
                overview: 'For each pixel, iterate the formula and count iterations until escape or maximum.',
                steps: [
                    'Map pixel coordinates to complex plane',
                    'Set z = 0, c = pixel position',
                    'Iterate: z = z*z + c',
                    'Count iterations until |z| > 2 (escaped) or max iterations reached',
                    'Color pixel based on iteration count'
                ],
                pseudocode: `for each pixel (px, py):
  c = complex(px * scale + offsetX, py * scale + offsetY)
  z = 0
  for i = 0 to maxIter:
    z = z*z + c
    if |z| > 2:
      color = palette[i]
      break
  if i == maxIter:
    color = black  // in the set`
            },
            applications: [
                { icon: '🎨', field: 'Digital Art', description: 'Fractal art generates infinitely detailed, beautiful images.' },
                { icon: '📡', field: 'Antenna Design', description: 'Fractal antennas use self-similarity for multi-band operation.' },
                { icon: '🏔️', field: 'Terrain Generation', description: 'Fractal algorithms create realistic procedural landscapes.' },
                { icon: '🔬', field: 'Mathematics', description: 'Studies complex dynamics, holomorphic functions, and topology.' }
            ],
            explore: [
                'Zoom into the boundary between black and colored regions',
                'Find mini Mandelbrot sets along the main cardioid',
                'Click a point to see its corresponding Julia set',
                'Increase max iterations for finer boundary detail'
            ],
            references: [
                { title: 'Mandelbrot\'s "Fractal Geometry of Nature"', url: 'https://en.wikipedia.org/wiki/The_Fractal_Geometry_of_Nature', type: 'book' },
                { title: 'Numberphile: Mandelbrot Set', url: 'https://www.youtube.com/watch?v=NGMRB4O922I', type: 'video' },
                { title: 'Ultra Fractal Software', url: 'https://www.ultrafractal.com/', type: 'tool' }
            ]
        },

        // Double Pendulum
        'double-pendulum/index.html': {
            title: 'Double Pendulum',
            icon: '⚡',
            theory: {
                intro: 'A double pendulum is a pendulum with another pendulum attached to its end. Despite following deterministic physics, it exhibits chaotic motion.',
                equation: 'θ̈<sub>1</sub> = f(θ<sub>1</sub>, θ<sub>2</sub>, θ̇<sub>1</sub>, θ̇<sub>2</sub>)',
                explanation: 'The equations of motion are derived from Lagrangian mechanics. Small changes in initial angles lead to completely different trajectories over time.',
                concepts: [
                    { term: 'Lagrangian', definition: 'L = T - V, difference between kinetic and potential energy' },
                    { term: 'Phase Space', definition: 'State space of positions and velocities (4D for double pendulum)' },
                    { term: 'Lyapunov Exponent', definition: 'Rate at which nearby trajectories diverge, positive indicates chaos' }
                ]
            },
            algorithm: {
                overview: 'Solve coupled second-order ODEs using numerical integration (typically RK4).',
                steps: [
                    'Define angles θ₁, θ₂ and angular velocities ω₁, ω₂',
                    'Calculate accelerations from Lagrangian equations',
                    'Update velocities: ω += α * dt',
                    'Update angles: θ += ω * dt',
                    'Convert to Cartesian for rendering'
                ],
                pseudocode: `function update(dt):
  alpha1 = lagrangian_acceleration_1(theta1, theta2, omega1, omega2)
  alpha2 = lagrangian_acceleration_2(theta1, theta2, omega1, omega2)
  omega1 += alpha1 * dt
  omega2 += alpha2 * dt
  theta1 += omega1 * dt
  theta2 += omega2 * dt`
            },
            applications: [
                { icon: '🤖', field: 'Robotics', description: 'Multi-link arms follow similar dynamics, crucial for control.' },
                { icon: '🏋️', field: 'Biomechanics', description: 'Human limb motion modeled as coupled pendulums.' },
                { icon: '🎓', field: 'Education', description: 'Classic demonstration of deterministic chaos in physics.' },
                { icon: '🔬', field: 'Physics Research', description: 'Tests numerical integration and chaos theory concepts.' }
            ],
            explore: [
                'Start with both arms nearly vertical - watch chaos emerge',
                'Compare two pendulums with 0.1° difference in initial angle',
                'Increase damping to see the system settle',
                'Try different mass ratios between the two bobs'
            ],
            references: [
                { title: 'Double Pendulum Physics', url: 'https://www.myphysicslab.com/pendulum/double-pendulum-en.html', type: 'article' },
                { title: 'Chaos in the Double Pendulum', url: 'https://scienceworld.wolfram.com/physics/DoublePendulum.html', type: 'article' },
                { title: 'Lagrangian Mechanics Tutorial', url: 'https://en.wikipedia.org/wiki/Lagrangian_mechanics', type: 'wiki' }
            ]
        },

        // Reaction-Diffusion
        'reaction-diffusion/index.html': {
            title: 'Reaction-Diffusion',
            icon: '🧪',
            theory: {
                intro: 'Reaction-diffusion systems describe how substances react and spread through space. The Gray-Scott model produces striking Turing patterns.',
                equation: '∂u/∂t = D<sub>u</sub>∇²u - uv² + F(1-u)',
                explanation: 'Two chemicals U and V diffuse at different rates while reacting. U is continuously added (feed F) while V is removed (kill k). The balance creates patterns.',
                concepts: [
                    { term: 'Turing Patterns', definition: 'Spatial patterns arising from diffusion-driven instability' },
                    { term: 'Diffusion', definition: 'Spreading of substances from high to low concentration' },
                    { term: 'Activator-Inhibitor', definition: 'U activates V production, V inhibits U - creates patterns' }
                ]
            },
            algorithm: {
                overview: 'Discretize the PDE on a grid and simulate diffusion and reaction each timestep.',
                steps: [
                    'Initialize U=1 everywhere, V=0 except small seed regions',
                    'For each cell, calculate Laplacian (neighbor average minus center)',
                    'Update U: diffusion + feed - reaction (uv²)',
                    'Update V: diffusion - kill - reaction (uv²)',
                    'Clamp values to [0,1], repeat'
                ],
                pseudocode: `for each cell (x, y):
  lapU = neighbors_avg(U) - U[x,y]
  lapV = neighbors_avg(V) - V[x,y]
  uvv = U[x,y] * V[x,y] * V[x,y]
  U_new = U + (Du*lapU - uvv + F*(1-U)) * dt
  V_new = V + (Dv*lapV + uvv - (F+k)*V) * dt`
            },
            applications: [
                { icon: '🐆', field: 'Biology', description: 'Explains animal coat patterns: leopard spots, zebra stripes, fish markings.' },
                { icon: '🧫', field: 'Chemistry', description: 'BZ reaction and other oscillating chemical systems.' },
                { icon: '🏜️', field: 'Ecology', description: 'Vegetation patterns in arid regions follow similar dynamics.' },
                { icon: '💊', field: 'Medicine', description: 'Heart tissue electrical waves, tumor growth patterns.' }
            ],
            explore: [
                'Try F=0.055, k=0.062 for coral-like growth',
                'F=0.025, k=0.055 creates spots (like leopard)',
                'Paint with V to seed new pattern regions',
                'Increase diffusion ratio Dv/Du for different wavelengths'
            ],
            references: [
                { title: 'Gray-Scott Model Interactive', url: 'https://www.karlsims.com/rd.html', type: 'tool' },
                { title: 'Turing\'s Original Paper (1952)', url: 'https://www.dna.caltech.edu/courses/cs191/paperscs191/turing.pdf', type: 'paper' },
                { title: 'Reaction-Diffusion Tutorial', url: 'https://www.mrob.com/pub/comp/xmorphia/', type: 'article' }
            ]
        },

        // Voronoi Diagrams
        'voronoi-delaunay/index.html': {
            title: 'Voronoi Diagrams',
            icon: '📐',
            theory: {
                intro: 'A Voronoi diagram partitions a plane into regions based on distance to a set of points. Each region contains all points closest to one seed.',
                equation: 'V(p<sub>i</sub>) = {x : d(x, p<sub>i</sub>) ≤ d(x, p<sub>j</sub>) ∀j≠i}',
                explanation: 'For each seed point pᵢ, its Voronoi cell contains all points closer to pᵢ than to any other seed. The dual graph is the Delaunay triangulation.',
                concepts: [
                    { term: 'Voronoi Cell', definition: 'Region of all points closest to a particular seed' },
                    { term: 'Delaunay Triangulation', definition: 'Dual graph connecting seeds whose cells share an edge' },
                    { term: 'Lloyd Relaxation', definition: 'Moving seeds to cell centroids for even distribution' }
                ]
            },
            algorithm: {
                overview: 'Fortune\'s sweep line algorithm computes Voronoi diagrams in O(n log n) time.',
                steps: [
                    'Sort seed points by y-coordinate',
                    'Sweep a horizontal line down, maintaining a "beach line" of parabolas',
                    'Handle site events (new seed) and circle events (cell vertex)',
                    'Each site adds a new parabola to the beach line',
                    'Circle events create Voronoi vertices where three cells meet'
                ],
                pseudocode: `events = priority_queue(sites sorted by y)
while events not empty:
  event = events.pop()
  if event is site:
    insert_parabola(site)
    check_circle_events()
  else:  // circle event
    create_vertex(event.center)
    remove_parabola(event.arc)
    check_circle_events()`
            },
            applications: [
                { icon: '📍', field: 'GIS/Maps', description: 'Find nearest facility, coverage areas, territory division.' },
                { icon: '🎮', field: 'Games', description: 'Procedural map generation, influence zones, AI territories.' },
                { icon: '🦠', field: 'Biology', description: 'Cell structure, tissue modeling, protein folding.' },
                { icon: '✈️', field: 'Aviation', description: 'Airspace division, radar coverage, routing.' }
            ],
            explore: [
                'Add points to see regions form instantly',
                'Enable Lloyd relaxation for even spacing',
                'Toggle Delaunay triangulation overlay',
                'Move points to see dynamic updates'
            ],
            references: [
                { title: 'Fortune\'s Algorithm Visualization', url: 'https://www.cs.hmc.edu/~mbrubeck/voronoi.html', type: 'tool' },
                { title: 'Computational Geometry (de Berg)', url: 'https://www.springer.com/gp/book/9783540779735', type: 'book' },
                { title: 'D3.js Voronoi Module', url: 'https://github.com/d3/d3-voronoi', type: 'article' }
            ]
        },

        // Fourier Epicycles
        'fourier-epicycles/index.html': {
            title: 'Fourier Epicycles',
            icon: '🎡',
            theory: {
                intro: 'Any closed curve can be approximated by a sum of rotating circles (epicycles). This is the geometric interpretation of Fourier series.',
                equation: 'f(t) = Σ<sub>n</sub> c<sub>n</sub> e<sup>inωt</sup>',
                explanation: 'Each term in the Fourier series is a complex exponential, which traces a circle in the complex plane. Combining them draws the original shape.',
                concepts: [
                    { term: 'Fourier Series', definition: 'Representing a function as a sum of sines and cosines' },
                    { term: 'Epicycle', definition: 'A circle whose center moves on another circle' },
                    { term: 'Frequency', definition: 'How many times a component oscillates per cycle' }
                ]
            },
            algorithm: {
                overview: 'Compute Discrete Fourier Transform of path points, then animate circles.',
                steps: [
                    'Sample the input path as a sequence of complex points',
                    'Compute DFT to get frequency components',
                    'Sort components by amplitude (largest first)',
                    'For each frame, rotate each circle at its frequency',
                    'Chain circles together, draw point at final tip'
                ],
                pseudocode: `coefficients = DFT(path_points)
sort(coefficients, by=amplitude)
for each frame at time t:
  pos = origin
  for each (freq, amp, phase) in coefficients:
    draw_circle(pos, radius=amp)
    pos += amp * e^(i * (freq * t + phase))
  draw_point(pos)`
            },
            applications: [
                { icon: '🎵', field: 'Audio Processing', description: 'MP3, speech recognition, and music analysis use FFT.' },
                { icon: '📷', field: 'Image Compression', description: 'JPEG uses Fourier-related DCT for compression.' },
                { icon: '📡', field: 'Signal Processing', description: 'Filtering, modulation, and spectrum analysis.' },
                { icon: '🏥', field: 'Medical Imaging', description: 'MRI and CT scans use Fourier transforms.' }
            ],
            explore: [
                'Draw a simple shape like a square and watch circles approximate it',
                'Reduce number of circles to see coarser approximation',
                'Draw your signature and see it reconstructed',
                'Notice how more circles capture finer details'
            ],
            references: [
                { title: '3Blue1Brown: Fourier Transform', url: 'https://www.youtube.com/watch?v=spUNpyF58BY', type: 'video' },
                { title: 'Ptolemaic Epicycles Connection', url: 'https://mathworld.wolfram.com/FourierSeries.html', type: 'article' },
                { title: 'Coding Train: Fourier Series', url: 'https://thecodingtrain.com/challenges/125-fourier-series', type: 'video' }
            ]
        },

        // Pathfinding
        'pathfinding/index.html': {
            title: 'Pathfinding Algorithms',
            icon: '🗺️',
            theory: {
                intro: 'Pathfinding algorithms find the shortest or optimal path between two points, fundamental to AI, games, and robotics.',
                equation: 'f(n) = g(n) + h(n)',
                explanation: 'A* combines actual cost g(n) from start with heuristic estimate h(n) to goal. This guides search toward promising directions while guaranteeing optimality.',
                concepts: [
                    { term: 'Heuristic', definition: 'Estimated cost to goal, must not overestimate for optimal A*' },
                    { term: 'Manhattan Distance', definition: '|x₁-x₂| + |y₁-y₂|, heuristic for grid movement' },
                    { term: 'Open/Closed Sets', definition: 'Nodes to explore vs already explored' }
                ]
            },
            algorithm: {
                overview: 'A* maintains a priority queue of nodes to explore, always expanding the most promising one.',
                steps: [
                    'Add start node to open set with f = h(start)',
                    'Pop node with lowest f-score from open set',
                    'If goal reached, reconstruct path',
                    'For each neighbor, calculate g-score through current node',
                    'If better path found, update neighbor and add to open set',
                    'Repeat until goal found or open set empty'
                ],
                pseudocode: `openSet = [start]
while openSet not empty:
  current = node with lowest f in openSet
  if current == goal:
    return reconstruct_path(current)
  move current to closedSet
  for neighbor in adjacent(current):
    if neighbor in closedSet: continue
    tentative_g = g[current] + dist(current, neighbor)
    if tentative_g < g[neighbor]:
      came_from[neighbor] = current
      g[neighbor] = tentative_g
      f[neighbor] = g[neighbor] + h(neighbor)
      add neighbor to openSet`
            },
            applications: [
                { icon: '🎮', field: 'Video Games', description: 'NPC navigation, strategy game unit movement.' },
                { icon: '🗺️', field: 'GPS Navigation', description: 'Route planning with traffic, tolls, and preferences.' },
                { icon: '🤖', field: 'Robotics', description: 'Mobile robot navigation and motion planning.' },
                { icon: '🏭', field: 'Logistics', description: 'Warehouse routing, delivery optimization.' }
            ],
            explore: [
                'Compare A* with Dijkstra (no heuristic) - see fewer explored nodes',
                'Draw walls to create a maze and watch the algorithm solve it',
                'Try different heuristics: Manhattan vs Euclidean',
                'Create a case where greedy fails but A* succeeds'
            ],
            references: [
                { title: 'A* Pathfinding (Amit Patel)', url: 'https://www.redblobgames.com/pathfinding/a-star/introduction.html', type: 'article' },
                { title: 'Hart, Nilsson, Raphael (1968)', url: 'https://ieeexplore.ieee.org/document/4082128', type: 'paper' },
                { title: 'Path Planning Visualization', url: 'https://qiao.github.io/PathFinding.js/visual/', type: 'tool' }
            ]
        },

        // Wave Function Collapse
        'wave-function-collapse/index.html': {
            title: 'Wave Function Collapse',
            icon: '🎲',
            theory: {
                intro: 'Wave Function Collapse (WFC) is a procedural generation algorithm inspired by quantum mechanics, creating content that satisfies local constraints.',
                equation: 'H(cell) = -Σ p<sub>i</sub> log(p<sub>i</sub>)',
                explanation: 'Each cell starts with all possibilities (like a quantum superposition). The algorithm repeatedly collapses the lowest-entropy cell and propagates constraints.',
                concepts: [
                    { term: 'Superposition', definition: 'A cell can be any tile until observed/collapsed' },
                    { term: 'Entropy', definition: 'Measure of remaining possibilities for a cell' },
                    { term: 'Constraint Propagation', definition: 'Eliminating impossible options based on neighbors' }
                ]
            },
            algorithm: {
                overview: 'Iterate: find lowest entropy cell, collapse it randomly, propagate constraints.',
                steps: [
                    'Initialize all cells with all possible tile options',
                    'Find the cell with lowest entropy (fewest options)',
                    'Randomly select one option for that cell (collapse)',
                    'Propagate: update neighbors to remove incompatible options',
                    'If any cell has zero options, backtrack or restart',
                    'Repeat until all cells are collapsed'
                ],
                pseudocode: `while not all cells collapsed:
  cell = min_entropy_cell()
  cell.collapse(random_choice(cell.options))
  stack = [cell]
  while stack not empty:
    current = stack.pop()
    for neighbor in adjacent(current):
      removed = neighbor.constrain(current.tile)
      if removed:
        stack.push(neighbor)
      if neighbor.options empty:
        restart() // contradiction`
            },
            applications: [
                { icon: '🎮', field: 'Game Development', description: 'Level generation, dungeon layouts, city building.' },
                { icon: '🎨', field: 'Texture Synthesis', description: 'Creating seamless textures from examples.' },
                { icon: '🏠', field: 'Architecture', description: 'Generating building layouts that satisfy constraints.' },
                { icon: '🗺️', field: 'Map Generation', description: 'Creating coherent game worlds with consistent rules.' }
            ],
            explore: [
                'Watch cells collapse from edges toward center',
                'Increase tile variety to see more complex patterns',
                'Pause to see the "superposition" states in gray',
                'Force a tile somewhere and watch constraints propagate'
            ],
            references: [
                { title: 'Maxim Gumin\'s Original WFC', url: 'https://github.com/mxgmn/WaveFunctionCollapse', type: 'article' },
                { title: 'WFC Explained (BorisTheBrave)', url: 'https://www.boristhebrave.com/2020/04/13/wave-function-collapse-explained/', type: 'article' },
                { title: 'Procedural Generation Wiki', url: 'https://www.procjam.com/', type: 'wiki' }
            ]
        }
    };

    /**
     * Get education content for current page
     */
    function getContentForCurrentPage() {
        const path = window.location.pathname;
        // Try exact match first
        for (const key in EDU_CONTENT) {
            if (path.endsWith(key) || path.includes(key)) {
                return EDU_CONTENT[key];
            }
        }
        // Try partial matches
        const filename = path.split('/').pop();
        const dirname = path.split('/').slice(-2, -1)[0];
        for (const key in EDU_CONTENT) {
            if (key.includes(dirname) || key.includes(filename)) {
                return EDU_CONTENT[key];
            }
        }
        return null;
    }

    /**
     * Auto-inject educational panel into demo pages
     */
    function autoInjectEduPanel() {
        const content = getContentForCurrentPage();
        if (!content) return;

        // Check if edu-panel.css is loaded, if not load it
        if (!document.querySelector('link[href*="edu-panel.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = getAssetPath('assets/css/edu-panel.css');
            document.head.appendChild(link);
        }

        // Check if edu-panel.js is loaded
        if (typeof EduContentBuilder === 'undefined') {
            const script = document.createElement('script');
            script.src = getAssetPath('assets/js/edu-panel.js');
            script.onload = () => createPanel(content);
            document.head.appendChild(script);
        } else {
            createPanel(content);
        }
    }

    /**
     * Calculate correct asset path based on current page depth
     */
    function getAssetPath(assetPath) {
        const path = window.location.pathname;
        const depth = (path.match(/\//g) || []).length - 1;
        if (depth <= 1) return assetPath;
        return '../'.repeat(depth - 1) + assetPath;
    }

    /**
     * Create and insert the edu panel
     */
    function createPanel(content) {
        // Create panel container
        const container = document.createElement('div');
        container.id = 'ccab-edu-panel';
        container.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 9998;
            max-width: 400px;
            max-height: 500px;
            overflow: auto;
        `;

        if (typeof EduContentBuilder !== 'undefined') {
            const builder = new EduContentBuilder(content);
            const panel = builder.build();
            container.appendChild(panel);
            document.body.appendChild(container);

            // Initialize the panel
            if (typeof EduPanel !== 'undefined') {
                new EduPanel(panel, { startOpen: false });
            }
        }
    }

    // Export functions
    window.EDU_CONTENT = EDU_CONTENT;
    window.getEduContent = getContentForCurrentPage;
    window.injectEduPanel = autoInjectEduPanel;

    // Auto-initialize on demo pages
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoInjectEduPanel);
    } else {
        autoInjectEduPanel();
    }
})();
