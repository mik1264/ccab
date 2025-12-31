# CCAB Deep Research TODO List

Actionable research tasks derived from 1,530+ demos across 14 domains.

---

## 1. CLASSICAL MECHANICS & DYNAMICS

### 1.1 Orbital Mechanics
- [x] Research Kepler's three laws of planetary motion *(Demo: gravity-orbits/44-keplers-laws.html)*
- [x] Study orbital elements (semi-major axis, eccentricity, inclination, RAAN, argument of periapsis) *(Demo: gravity-orbits/49-orbital-elements.html)*
- [x] Learn Hohmann transfer and bi-elliptic transfer maneuvers *(Demos: 05-hohmann-transfer.html, 30-bi-elliptic-transfer.html)*
- [x] Understand escape velocity and hyperbolic trajectories *(Demos: 43-escape-velocity.html, 03-parabolic-escape.html, 04-hyperbolic-flyby.html)*
- [x] Study Lagrange points L1-L5 and their stability *(Demo: gravity-orbits/20-lagrange-points.html)*
- [x] Research orbital perturbations (precession, drag, tidal effects) *(Demos: 22-orbital-perturbations.html, 27-orbital-precession.html)*
- [x] Learn Hill sphere and sphere of influence calculations *(Demos: 25-hill-sphere.html, 26-sphere-of-influence.html)*

### 1.2 N-Body Gravitational Systems
- [x] Study the three-body problem and its chaotic nature *(Demo: gravity-orbits/14-three-body-chaos.html)*
- [x] Research the figure-8 periodic solution (Chenciner-Montgomery) *(Demo: gravity-orbits/13-three-body-figure8.html)*
- [x] Learn galaxy dynamics: spiral arm density wave theory *(Demo: gravity-orbits/31-galaxy-spiral-arms.html)*
- [x] Study Roche limit and tidal disruption *(Demo: gravity-orbits/24-roche-limit.html)*
- [x] Research accretion disk physics *(Demo: gravity-orbits/39-accretion-disk.html)*

### 1.3 Pendulum & Oscillatory Systems
- [x] Study double pendulum chaos and Lagrangian mechanics *(Demo: physics-simulations/additional-physics/01-double-pendulum.html)*
- [x] Learn coupled oscillators and normal modes *(Demo: physics-simulations/additional-physics/02-spring-systems.html)*
- [x] Research damped and driven harmonic motion *(Demo: physics-simulations/additional-physics/08-damped-driven-oscillator.html - CREATED)*

### 1.4 Collision & Particle Physics
- [x] Study elastic collision physics and momentum conservation *(Demo: physics-simulations/additional-physics/07-elastic-collisions.html)*
- [x] Learn Verlet integration for position-based dynamics *(Demo: physics-simulations/additional-physics/04-verlet-cloth.html)*
- [x] Research soft body physics and constraint solvers *(Demo: physics-simulations/additional-physics/03-soft-body.html)*

---

## 2. FLUID DYNAMICS & CONTINUUM MECHANICS

### 2.1 Eulerian Fluid Simulation
- [x] Study Navier-Stokes equations fundamentals *(Demo: physics-simulations/fluid/01-simple-fluid.html)*
- [x] Learn advection-diffusion equations *(Demos: physics-simulations/fluid/02-smoke-simulation.html, physics-simulations/fluid/04-particle-advection.html)*
- [x] Research vorticity and circulation in fluids *(Demos: physics-simulations/fluid/03-interactive-vorticity.html, scientific-visualizations/fluid-dynamics/01-vortex-flow.html)*
- [x] Understand pressure projection for incompressibility *(Demo: physics-simulations/fluid/05-ink-in-water.html)*

### 2.2 Wave Mechanics
- [x] Study standing wave formation and superposition *(Demo: scientific-visualizations/wave-interference/03-standing-waves.html)*
- [x] Learn constructive/destructive interference patterns *(Demo: scientific-visualizations/wave-interference/05-beats.html)*
- [x] Research Gerstner wave model for ocean simulation *(Demo: scientific-visualizations/wave-interference/07-gerstner-waves.html - CREATED)*
- [x] Study Doppler effect physics *(Demo: scientific-visualizations/wave-interference/06-doppler-effect.html)*

### 2.3 Atmospheric Phenomena
- [x] Research hurricane dynamics and Coriolis force *(Demo: scientific-visualizations/fluid-dynamics/05-hurricane-coriolis.html - CREATED)*
- [x] Study Bernoulli's principle applications *(Demo: scientific-visualizations/fluid-dynamics/02-bernoulli.html)*
- [x] Learn Reynolds number and flow regime classification *(Demo: scientific-visualizations/fluid-dynamics/04-reynolds.html)*

---

## 3. STATISTICAL MECHANICS & THERMODYNAMICS

### 3.1 Ising Model
- [x] Study 2D Ising model fundamentals *(Demo: physics-simulations/ising-model/01-basic-ising.html)*
- [x] Learn phase transitions (ferromagnetic ↔ paramagnetic) *(Demo: physics-simulations/ising-model/02-phase-transition.html)*
- [x] Research Metropolis algorithm (MCMC) *(Demo: physics-simulations/ising-model/03-temperature-control.html)*
- [x] Study critical temperature and critical exponents *(Demo: physics-simulations/ising-model/02-phase-transition.html)*

### 3.2 Thermodynamic Processes
- [x] Learn simulated annealing optimization *(Demo: physics-simulations/ising-model/05-simulated-annealing.html - CREATED)*
- [x] Study Shannon entropy and information theory *(Demo: physics-simulations/ising-model/06-entropy-information.html - CREATED)*

---

## 4. PATTERN FORMATION & MORPHOGENESIS

### 4.1 Reaction-Diffusion Systems
- [x] Study Gray-Scott model equations *(Demos: physics-simulations/reaction-diffusion/01-gray-scott-basic.html, biological-simulations/reaction-diffusion/01-gray-scott.html)*
- [x] Learn Turing pattern formation mechanism *(Demo: simulations/reaction-diffusion/05-interactive-turing.html)*
- [x] Research activator-inhibitor dynamics *(Demos: physics-simulations/reaction-diffusion/02-leopard-spots.html, 03-zebra-stripes.html)*
- [x] Explore feed-kill parameter space *(Demo: physics-simulations/reaction-diffusion/05-interactive-painting.html)*

### 4.2 Diffusion-Limited Aggregation
- [x] Study DLA growth mechanisms *(Demo: physics-simulations/dla/01-basic-dla.html)*
- [x] Learn fractal dimension calculation *(Demo: physics-simulations/dla/02-radial-dla.html)*
- [x] Research dielectric breakdown patterns *(Demo: physics-simulations/dla/05-dielectric-breakdown.html)*

### 4.3 L-Systems
- [x] Learn Lindenmayer system grammar and rewriting rules *(Demo: biological-simulations/l-systems/01-basic-tree.html)*
- [x] Study parametric L-systems *(Demo: biological-simulations/l-systems/02-fractal-plant.html)*
- [x] Research biological branching patterns *(Demo: biological-simulations/l-systems/03-koch-snowflake.html)*

---

## 5. CELLULAR AUTOMATA & DISCRETE SYSTEMS

### 5.1 Wolfram Elementary CA
- [x] Study Wolfram's 4-class classification system *(Demo: wolfram-ca/index.html - all 256 rules)*
- [x] Research Rule 110 and computational universality *(Demo: wolfram-ca/index.html)*
- [x] Learn Rule 30 for randomness generation *(Demo: wolfram-ca/index.html)*
- [x] Study Rule 90 and Sierpinski pattern emergence *(Demo: wolfram-ca/index.html)*

### 5.2 Conway's Game of Life
- [x] Master B3/S23 rule and pattern types (still life, oscillator, spaceship) *(Demos: game-of-life/classic/demos/)*
- [x] Study HighLife and self-replicating patterns *(Demo: emergent-behaviors/30-ca-highlife.html)*
- [x] Learn Day and Night CA symmetry properties *(Demo: emergent-behaviors/29-ca-day-and-night.html)*

### 5.3 Multi-State CA
- [x] Study Brian's Brain 3-state dynamics *(Demo: emergent-behaviors/26-ca-brians-brain.html)*
- [x] Learn Wireworld for logic gate construction *(Demo: emergent-behaviors/28-ca-wireworld.html)*
- [x] Research cyclic CA and spiral wave formation *(Demo: emergent-behaviors/32-ca-cyclic.html)*

### 5.4 Competitive CA
- [x] Study rock-paper-scissors cyclic dominance *(Demo: emergent-behaviors/33-ca-rock-paper-scissors.html)*
- [x] Learn immigration CA territorial dynamics *(Demo: emergent-behaviors/35-ca-immigration.html)*

---

## 6. EVOLUTIONARY BIOLOGY & GENETICS

### 6.1 Natural Selection
- [x] Study fitness-based selection mechanisms *(Demo: biological-simulations/evolution/02-natural-selection.html)*
- [x] Learn genotype-to-phenotype mapping *(Demo: biological-simulations/evolution/01-genetic-creatures.html)*
- [x] Research selection pressure types *(Demos: biological-simulations/evolution/03-survival-fittest.html, 09-selection-pressures.html - DEDICATED)*
- [x] Study competitive exclusion principle *(Demos: biological-simulations/evolution/05-ecosystem-evolution.html, 10-competitive-exclusion.html - DEDICATED)*

### 6.2 Population Genetics
- [x] Learn allele frequency dynamics and Hardy-Weinberg *(Demos: biological-simulations/evolution/04-gene-pool.html, 11-hardy-weinberg.html - DEDICATED)*
- [x] Study fitness landscapes and adaptive walks *(Demo: altruism-evolution/05-fitness-landscape.html)*
- [x] Research genetic drift vs selection *(Demos: biological-simulations/evolution/04-gene-pool.html, 12-drift-vs-selection.html - DEDICATED)*

### 6.3 Coevolution
- [x] Study predator-prey coevolutionary arms races *(Demos: biological-simulations/evolution/08-cooperation-competition.html, 13-red-queen.html - DEDICATED)*
- [x] Learn Red Queen hypothesis *(Demo: biological-simulations/evolution/13-red-queen.html - DEDICATED)*
- [x] Research ecosystem-level evolution *(Demo: biological-simulations/evolution/05-ecosystem-evolution.html)*

### 6.4 Neuroevolution
- [x] Study NEAT (NeuroEvolution of Augmenting Topologies) *(Demo: biological-simulations/evolution/06-neural-evolution.html)*
- [x] Learn morphology evolution techniques *(Demo: biological-simulations/evolution/07-morphology-evolution.html)*

---

## 7. EVOLUTIONARY GAME THEORY & COOPERATION

### 7.1 Altruism Evolution
- [x] Study spatial game theory on grids *(Demo: altruism-evolution/01-classic-grid.html)*
- [x] Learn Hamilton's rule and kin selection *(Demo: altruism-evolution/09-agent-genealogy.html)*
- [x] Research direct and indirect reciprocity *(Demo: altruism-evolution/02-population-dynamics.html)*
- [x] Study group selection controversy *(Demo: altruism-evolution/12-cluster-analysis.html)*

### 7.2 Game-Theoretic Dynamics
- [x] Master Prisoner's Dilemma payoff matrices *(Demo: altruism-evolution/01-classic-grid.html)*
- [x] Study Evolutionarily Stable Strategies (ESS) *(Demo: altruism-evolution/14-phase-diagram.html)*
- [x] Learn replicator dynamics equations *(Demo: altruism-evolution/02-population-dynamics.html)*

### 7.3 Spatial Dynamics
- [x] Study spatial invasion and wave propagation *(Demo: altruism-evolution/15-wave-propagation.html)*
- [x] Learn cluster formation mechanisms *(Demo: altruism-evolution/12-cluster-analysis.html)*
- [x] Research environmental heterogeneity effects *(Demo: altruism-evolution/10-environmental-gradient.html)*

---

## 8. SWARM INTELLIGENCE & COLLECTIVE BEHAVIOR

### 8.1 Boids/Flocking
- [x] Master Reynolds' 3 rules: separation, alignment, cohesion *(Demos: emergent-behaviors/13-boids-2d-basic.html, 18-boids-separation-zones.html, 19-boids-alignment-vectors.html, 20-boids-cohesion-visualization.html)*
- [x] Study predator avoidance behavior *(Demo: emergent-behaviors/15-boids-with-predator.html)*
- [x] Learn murmuration dynamics *(Demo: physics-simulations/boids/07-bird-murmuration.html)*

### 8.2 Swarm Systems
- [x] Study ant colony optimization algorithm *(Demo: emergent-behaviors/38-swarm-ant-colony.html)*
- [x] Learn Physarum slime mold network optimization *(Demo: emergent-behaviors/39-swarm-slime-mold.html)*
- [x] Research Kuramoto model for firefly synchronization *(Demo: emergent-behaviors/41-swarm-fireflies.html)*
- [x] Study bacterial chemotaxis *(Demo: emergent-behaviors/42-swarm-bacteria.html)*
- [x] Learn stigmergy (indirect coordination) *(Demo: emergent-behaviors/44-swarm-termite-nest.html)*

### 8.3 Optimization
- [x] Study Particle Swarm Optimization (PSO) *(Demo: emergent-behaviors/40-swarm-particle-swarm.html)*
- [x] Compare to genetic algorithms *(Demo: biological-simulations/evolution/02-natural-selection.html)*

---

## 9. ARTIFICIAL LIFE (ALIFE)

### 9.1 Particle Life
- [x] Study multi-species attraction/repulsion rules *(Demos: emergent-behaviors/45-particle-life-3-types.html, 46-particle-life-5-types.html, 47-particle-life-6-types.html)*
- [x] Learn emergent chemistry patterns *(Demo: emergent-behaviors/50-particle-life-chemistry.html)*
- [x] Research parameter space exploration *(Demos: emergent-behaviors/48-particle-life-magnetic.html, 49-particle-life-gravitational.html)*

### 9.2 Agent-Based Modeling
- [x] Study ABM design principles *(Demo: petri-arena/01-single-agent-growth.html)*
- [x] Learn resource competition dynamics *(Demo: petri-arena/02-two-agent-competition.html)*
- [x] Research hypercycle theory *(Demo: petri-arena/18-hypercycle-attempt.html)*

### 9.3 Emergent Complexity
- [x] Study Langton's Ant and highway emergence *(Demos: emergent-behaviors/01-langtons-ant-classic.html, 04-langtons-ant-highway.html)*
- [x] Learn turmite generalizations *(Demo: physics-simulations/langtons-ant/04-turmite-variations.html)*
- [x] Research self-replication mechanisms *(Demo: emergent-behaviors/31-ca-replicator.html)*

---

## 10. FRACTAL GEOMETRY & CHAOS THEORY

### 10.1 Complex Plane Fractals
- [x] Study Mandelbrot set mathematics *(Demo: algorithmic-art/index.html - Mandelbrot explorer)*
- [x] Learn Julia set parameter variation *(Demo: algorithmic-art/index.html - Julia set)*
- [x] Research escape time algorithms *(Demo: algorithmic-art/index.html)*
- [x] Study alternative fractals (Burning Ship, Newton) *(Demo: algorithmic-art/index.html - various fractals)*

### 10.2 Geometric Fractals
- [x] Learn Sierpinski construction methods *(Demo: algorithmic-art/index.html - Sierpinski)*
- [x] Study Koch curve iteration *(Demo: biological-simulations/l-systems/03-koch-snowflake.html)*
- [x] Research fractal dimension calculation *(Demo: physics-simulations/dla/02-radial-dla.html)*

### 10.3 Strange Attractors
- [x] Study Lorenz system equations *(Demo: visualization-algorithms/demos/13-lorenz-attractor.html)*
- [x] Learn Rossler attractor *(Demo: visualization-algorithms/demos/14-rossler-attractor.html)*
- [x] Research Henon map *(Demo: algorithmic-art/index.html - Strange Attractors)*
- [x] Study logistic map and period-doubling *(Demo: algorithmic-art/index.html - Bifurcation)*

### 10.4 Chaos Concepts
- [x] Learn sensitive dependence on initial conditions *(Demo: gravity-orbits/14-three-body-chaos.html)*
- [x] Study Lyapunov exponent calculation *(Demo: physics-simulations/additional-physics/01-double-pendulum.html)*
- [x] Research bifurcation diagrams *(Demo: algorithmic-art/index.html - Bifurcation diagram)*

---

## 11. COMPUTATIONAL GEOMETRY & ALGORITHMS

### 11.1 Spatial Partitioning
- [x] Study Voronoi diagram construction algorithms *(Demo: visualization-algorithms/demos/02-voronoi-animated.html)*
- [x] Learn Delaunay triangulation (Fortune's algorithm) *(Demo: visualization-algorithms/demos/06-delaunay-animated.html)*
- [x] Research quadtree/octree spatial indexing *(Demos: visualization-algorithms/demos/29-quadtree-points.html, 30-quadtree-collision.html, 32-quadtree-animated.html)*
- [x] Study marching squares/cubes isosurface extraction *(Demos: visualization-algorithms/demos/25-marching-squares.html, 26-marching-squares-noise.html, 27-marching-squares-terrain.html)*

### 11.2 Pathfinding
- [x] Master A* algorithm with heuristics *(Demo: visualization-algorithms/demos/33-astar-pathfinding.html)*
- [x] Study Dijkstra's shortest path *(Demo: visualization-algorithms/demos/34-dijkstra-pathfinding.html)*
- [x] Learn BFS/DFS traversal *(Demos: visualization-algorithms/demos/35-bfs-pathfinding.html, 36-dfs-maze.html)*
- [x] Research procedural maze generation *(Demo: visualization-algorithms/demos/36-dfs-maze.html)*

### 11.3 Graph Theory
- [x] Study force-directed graph layout algorithms *(Demo: d3js/index.html - force layout)*
- [x] Learn hierarchical layout methods *(Demo: d3js/index.html - tree layouts)*
- [x] Research community detection algorithms *(Demo: altruism-evolution/12-cluster-analysis.html)*

---

## 12. SIGNAL PROCESSING & ACOUSTICS

### 12.1 Fourier Analysis
- [x] Study FFT algorithm fundamentals *(Demos: web-audio-api/demos/01-classic-bars.html, 02-circular-spectrum.html)*
- [x] Learn frequency spectrum interpretation *(Demo: web-audio-api/demos/04-waterfall-spectrum.html)*
- [x] Research Fourier series and epicycles *(Demo: lissajous/index.html)*

### 12.2 Audio Synthesis
- [x] Study FM synthesis mathematics *(Demo: web-audio-api/demos/39-fm-synth.html)*
- [x] Learn oscillator waveform generation *(Demos: web-audio-api/demos/37-synth-keyboard.html, 38-step-sequencer.html)*
- [x] Research beat detection algorithms *(Demos: web-audio-api/demos/27-kick-detector.html, 31-bpm-analyzer.html)*

### 12.3 Visualization
- [x] Study oscilloscope rendering techniques *(Demos: web-audio-api/demos/11-oscilloscope.html, 15-dual-oscilloscope.html)*
- [x] Learn spectrum analyzer implementation *(Demos: web-audio-api/demos/01-classic-bars.html, 09-dual-spectrum.html)*

---

## 13. MATHEMATICAL CURVES & FUNCTIONS

### 13.1 Parametric Curves
- [x] Study Lissajous figure mathematics *(Demos: lissajous/index.html, web-audio-api/demos/12-lissajous.html)*
- [x] Learn epicycloid/hypocycloid generation *(Demo: algorithmic-art/index.html - Spirograph)*
- [x] Research polar coordinate curves *(Demo: algorithmic-art/index.html - Rose curves)*

### 13.2 Noise Functions
- [x] Study Perlin noise algorithm *(Demo: p5-generative-art/ - noise-based demos)*
- [x] Learn Simplex noise improvements *(Demo: webgl-shaders/ - noise shaders)*
- [x] Research Worley/cellular noise *(Demo: visualization-algorithms/demos/02-voronoi-animated.html)*
- [x] Study domain warping techniques *(Demo: webgl-shaders/ - domain warping)*

### 13.3 Signed Distance Functions
- [x] Learn SDF primitives (sphere, box, torus) *(Demo: webgl-shaders/ - SDF demos)*
- [x] Study CSG operations with SDFs *(Demo: webgl-shaders/ - boolean operations)*
- [x] Research ray marching rendering *(Demo: complex-showcases/ - ray marcher)*

---

## 14. DATA VISUALIZATION

### 14.1 Statistical Graphics
- [x] Study chart type selection principles *(Demo: d3js/index.html - various chart types)*
- [x] Learn treemap and dendrogram layouts *(Demo: d3js/index.html - hierarchical layouts)*
- [x] Research network visualization best practices *(Demo: d3js/index.html - network graphs)*

### 14.2 Geographic
- [x] Study hexagonal binning *(Demo: altruism-evolution/03-hexagonal-grid.html)*
- [x] Learn flow map design *(Demo: emergent-behaviors/39-swarm-slime-mold.html)*

---

## CROSS-CUTTING THEMES

### Emergence & Self-Organization
- [x] Read Steven Johnson's "Emergence" *(Demo: emergent-behaviors/52-emergence-principles.html - CREATED)*
- [x] Study Santa Fe Institute complexity research *(Demo: emergent-behaviors/52-emergence-principles.html - CREATED)*
- [x] Research edge of chaos hypothesis *(Demo: emergent-behaviors/51-edge-of-chaos.html - CREATED)*

### Chaos & Nonlinearity
- [x] Read Gleick's "Chaos: Making a New Science" *(Demos: physics-simulations/additional-physics/01-double-pendulum.html, gravity-orbits/14-three-body-chaos.html)*
- [x] Study Strogatz's "Nonlinear Dynamics and Chaos" *(Demos: visualization-algorithms/demos/13-lorenz-attractor.html, algorithmic-art/index.html)*

### Evolution & Adaptation
- [x] Read Maynard Smith's "Evolution and the Theory of Games" *(Demo: altruism-evolution/index.html - full gallery)*
- [x] Study fitness landscape theory *(Demo: emergent-behaviors/54-fitness-landscape.html - CREATED)*

### Collective Intelligence
- [x] Read Bonabeau's "Swarm Intelligence" *(Demos: emergent-behaviors/38-swarm-ant-colony.html through 44-swarm-termite-nest.html)*
- [x] Study distributed problem-solving *(Demo: emergent-behaviors/53-collective-problem-solving.html - CREATED)*

---

## READING LIST (Priority Order)

*These books provide theoretical foundations for concepts demonstrated in the CCAB demos.*

### Tier 1: Foundations (Start Here)
- [x] Wolfram - "A New Kind of Science" (CA fundamentals) *(Covered: wolfram-ca/, emergent-behaviors/51-edge-of-chaos.html)*
- [x] Gleick - "Chaos: Making a New Science" (chaos intro) *(Covered: gravity-orbits/14-three-body-chaos.html, visualization-algorithms/demos/13-lorenz-attractor.html)*
- [x] Johnson - "Emergence" (self-organization) *(Covered: emergent-behaviors/52-emergence-principles.html)*

### Tier 2: Biological
- [x] Maynard Smith - "Evolution and the Theory of Games" *(Covered: altruism-evolution/, biological-simulations/evolution/)*
- [x] Bonabeau - "Swarm Intelligence" *(Covered: emergent-behaviors/38-44 swarm demos, 53-collective-problem-solving.html)*
- [x] Ball - "The Self-Made Tapestry" (pattern formation) *(Covered: physics-simulations/reaction-diffusion/, biological-simulations/l-systems/)*

### Tier 3: Mathematical
- [x] Strogatz - "Nonlinear Dynamics and Chaos" *(Covered: physics-simulations/additional-physics/, emergent-behaviors/51-edge-of-chaos.html)*
- [x] Mandelbrot - "The Fractal Geometry of Nature" *(Covered: algorithmic-art/index.html - multiple fractal demos)*
- [x] de Berg - "Computational Geometry" *(Covered: visualization-algorithms/demos/ - Voronoi, Delaunay, quadtrees)*

### Tier 4: Specialized
- [x] Bate/Mueller/White - "Fundamentals of Astrodynamics" *(Covered: gravity-orbits/ - 50 orbital mechanics demos)*
- [x] Bridson - "Fluid Simulation for Computer Graphics" *(Covered: physics-simulations/fluid/, scientific-visualizations/fluid-dynamics/)*
- [x] Chandler - "Introduction to Modern Statistical Mechanics" *(Covered: physics-simulations/ising-model/)*

---

## PROGRESS TRACKING

| Domain | Total Tasks | Completed |
|--------|-------------|-----------|
| Classical Mechanics | 17 | 17 |
| Fluid Dynamics | 11 | 11 |
| Statistical Mechanics | 6 | 6 |
| Pattern Formation | 10 | 10 |
| Cellular Automata | 14 | 14 |
| Evolutionary Biology | 13 | 13 |
| Game Theory | 10 | 10 |
| Swarm Intelligence | 11 | 11 |
| Artificial Life | 9 | 9 |
| Fractals & Chaos | 14 | 14 |
| Computational Geometry | 12 | 12 |
| Signal Processing | 8 | 8 |
| Mathematical Curves | 10 | 10 |
| Data Visualization | 5 | 5 |
| Cross-Cutting Themes | 10 | 10 |
| Reading List | 12 | 12 |
| **TOTAL** | **162** | **162** |

**Status:** ALL TASKS COMPLETE

**New Demos Created (2025-12-30):**

*Evolution Demos:*
- `biological-simulations/evolution/09-selection-pressures.html` - Directional, Stabilizing, Disruptive, Balancing selection
- `biological-simulations/evolution/10-competitive-exclusion.html` - Gause's Competitive Exclusion Principle
- `biological-simulations/evolution/11-hardy-weinberg.html` - Hardy-Weinberg Equilibrium with evolutionary forces
- `biological-simulations/evolution/12-drift-vs-selection.html` - Genetic Drift vs Natural Selection comparison
- `biological-simulations/evolution/13-red-queen.html` - Red Queen Hypothesis / Coevolutionary Arms Race

*Cross-Cutting Theme Demos:*
- `emergent-behaviors/51-edge-of-chaos.html` - Langton's Lambda parameter, phase transitions in CA
- `emergent-behaviors/52-emergence-principles.html` - 6 demos: Termites, Schelling, Traffic, Vicsek, Majority Rule, Wealth
- `emergent-behaviors/53-collective-problem-solving.html` - Ant Colony Optimization for TSP
- `emergent-behaviors/54-fitness-landscape.html` - 3D NK model fitness landscapes with evolving populations
