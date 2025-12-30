# CCAB Simulation Topics - Deep Research Guide

Based on comprehensive analysis of 1,530+ demos across 97 galleries, here are the conceptual topics grouped by research domain.

---

## 1. CLASSICAL MECHANICS & DYNAMICS

### 1.1 Orbital Mechanics (50 demos)
- **Kepler's Laws** - Elliptical orbits, equal areas in equal times, period-distance relationship
- **Orbital Elements** - Semi-major axis, eccentricity, inclination, argument of periapsis
- **Orbital Transfers** - Hohmann transfer, bi-elliptic transfer, gravity assist (slingshot)
- **Escape Dynamics** - Escape velocity, parabolic/hyperbolic trajectories
- **Lagrange Points** - L1-L5 equilibrium points, Trojan asteroids
- **Orbital Perturbations** - Precession, atmospheric drag, tidal effects
- **Sphere of Influence** - Hill sphere, gravitational dominance regions

### 1.2 N-Body Gravitational Systems
- **Three-Body Problem** - Figure-8 periodic solution, chaotic sensitivity
- **Solar System Dynamics** - Planetary motion, asteroid belts, Kuiper belt
- **Galaxy Dynamics** - Spiral arm density waves, globular clusters, galaxy collisions
- **Accretion & Tidal Forces** - Roche limit, tidal locking, accretion disks

### 1.3 Pendulum & Oscillatory Systems
- **Double Pendulum** - Chaotic motion, Lagrangian mechanics, sensitive dependence
- **Spring-Mass Systems** - Hooke's law, coupled oscillators, normal modes
- **Harmonic Motion** - Simple/damped/driven oscillations

### 1.4 Collision & Particle Physics
- **Elastic Collisions** - Momentum conservation, energy transfer
- **Projectile Motion** - Ballistic trajectories, fountain dynamics
- **Soft Body Physics** - Deformable bodies, internal pressure, constraint dynamics
- **Verlet Integration** - Cloth simulation, position-based dynamics

---

## 2. FLUID DYNAMICS & CONTINUUM MECHANICS

### 2.1 Eulerian Fluid Simulation
- **Navier-Stokes Equations** - Pressure-velocity coupling, viscosity
- **Advection-Diffusion** - Density transport, smoke simulation
- **Vorticity & Circulation** - Curl-based velocity fields
- **Incompressibility** - Divergence-free constraint, pressure projection

### 2.2 Wave Mechanics
- **Standing Waves** - Superposition, nodes and antinodes
- **Wave Interference** - Constructive/destructive patterns
- **Gerstner Waves** - Trochoid ocean wave model
- **Doppler Effect** - Frequency shift from relative motion

### 2.3 Atmospheric & Fluid Phenomena
- **Hurricane Dynamics** - Coriolis forces, rotating fluid structures
- **Bernoulli's Principle** - Pressure-velocity relationship
- **Reynolds Number** - Flow regime characterization

---

## 3. STATISTICAL MECHANICS & THERMODYNAMICS

### 3.1 Ising Model & Spin Systems
- **2D Ising Model** - Nearest-neighbor spin coupling
- **Phase Transitions** - Ferromagnetic to paramagnetic, critical temperature
- **Metropolis Algorithm** - Monte Carlo Markov Chain sampling
- **External Magnetic Fields** - Field-induced ordering

### 3.2 Thermodynamic Processes
- **Simulated Annealing** - Energy minimization, temperature-dependent relaxation
- **Entropy Measures** - Shannon entropy, system disorder quantification

---

## 4. PATTERN FORMATION & MORPHOGENESIS

### 4.1 Reaction-Diffusion Systems
- **Gray-Scott Model** - Two-species chemical reaction with diffusion
- **Turing Patterns** - Activator-inhibitor mechanisms
- **Biological Patterns** - Leopard spots, zebra stripes, coral branching
- **Feed-Kill Parameter Space** - Pattern phase diagrams

### 4.2 Diffusion-Limited Aggregation (DLA)
- **Random Walk Aggregation** - Brownian motion sticking to structure
- **Radial/Multi-Seed DLA** - Growth from multiple centers
- **Dielectric Breakdown** - Electrical discharge patterns
- **Fractal Dimension** - Self-similar structure analysis

### 4.3 L-Systems & Developmental Biology
- **Lindenmayer Systems** - Recursive string rewriting for plant growth
- **Fractal Branching** - Trees, ferns, biological structures
- **Parametric L-Systems** - Variable angles, growth rates

---

## 5. CELLULAR AUTOMATA & DISCRETE SYSTEMS

### 5.1 Wolfram Elementary CA (256 rules)
- **Rule Classification** - Wolfram Classes I-IV (uniform to chaotic to complex)
- **Rule 110** - Computational universality, Turing completeness
- **Rule 30** - Chaos and randomness generation
- **Rule 90** - Sierpinski triangle, self-similarity
- **Rule 184** - Traffic flow, particle dynamics

### 5.2 Conway's Game of Life & Variants
- **B3/S23 Rule** - Birth at 3, survival at 2-3 neighbors
- **HighLife (B36/S23)** - Self-replicating "Replicator" patterns
- **Day and Night (B3678/S34678)** - Dead/alive symmetry
- **Seeds** - Explosive growth then death cycles

### 5.3 Multi-State Cellular Automata
- **Brian's Brain** - 3-state firing dynamics (on/dying/off)
- **Wireworld** - 4-state electronic circuit simulation, logic gates
- **Cyclic CA** - Color rotation, spiral wave formation
- **Majority/Vote Rules** - Consensus dynamics, clustering

### 5.4 Competitive CA
- **Rock-Paper-Scissors** - Cyclic dominance, non-transitive competition
- **Immigration** - Two species with territorial dynamics

---

## 6. EVOLUTIONARY BIOLOGY & GENETICS

### 6.1 Natural Selection & Genetic Algorithms
- **Fitness-Based Reproduction** - Differential survival and reproduction
- **Genotype-to-Phenotype Mapping** - DNA encoding traits (speed, size, perception)
- **Selection Pressure** - Environmental constraints driving evolution
- **Competitive Exclusion** - Survival of the fittest dynamics

### 6.2 Population Genetics
- **Allele Frequency Dynamics** - Genetic drift, gene flow
- **Fitness Landscapes** - Adaptive surfaces, local optima
- **Population Cycling** - Boom-bust dynamics, density dependence

### 6.3 Coevolution & Speciation
- **Arms Races** - Predator-prey coevolution
- **Ecosystem Evolution** - Multi-species dynamics
- **Cooperation vs Competition** - Evolutionary game theory

### 6.4 Neuroevolution
- **Neural Network Evolution** - Evolving controller architectures
- **Morphology Evolution** - Body shape/structure evolution

---

## 7. EVOLUTIONARY GAME THEORY & COOPERATION

### 7.1 Altruism & Cooperation Evolution
- **Spatial Game Theory** - Evolution on grids (hexagonal, radial)
- **Kin Selection** - Relatedness-based cooperation
- **Reciprocity** - Tit-for-tat, direct/indirect reciprocity
- **Group Selection** - Multi-level selection dynamics

### 7.2 Game-Theoretic Dynamics
- **Prisoner's Dilemma** - Cooperation vs defection payoffs
- **Hawks vs Doves** - ESS (Evolutionarily Stable Strategies)
- **Phase Diagrams** - Parameter space exploration of outcomes

### 7.3 Spatial Population Dynamics
- **Wave Propagation** - Spreading cooperative strategies
- **Cluster Formation** - Spatial assortment of cooperators
- **Environmental Gradients** - Spatially heterogeneous selection

---

## 8. SWARM INTELLIGENCE & COLLECTIVE BEHAVIOR

### 8.1 Boids/Flocking Algorithm
- **Separation** - Avoid crowding neighbors
- **Alignment** - Match heading with neighbors
- **Cohesion** - Move toward group center of mass
- **Predator-Prey** - Threat avoidance behavior
- **Murmuration** - Large-scale coordinated motion

### 8.2 Swarm Systems
- **Ant Colony Optimization** - Pheromone-based foraging, path optimization
- **Slime Mold Networks** - Physarum distributed problem-solving
- **Firefly Synchronization** - Coupled oscillator synchronization
- **Bacterial Chemotaxis** - Gradient-following behavior
- **Termite Stigmergy** - Indirect communication via environment

### 8.3 Particle Swarm & Optimization
- **Particle Swarm Optimization (PSO)** - Collective search for optima
- **Leader Following** - Hierarchical group dynamics

---

## 9. ARTIFICIAL LIFE (ALIFE)

### 9.1 Particle Life Systems
- **Multi-Species Interactions** - Attraction/repulsion between particle types
- **Emergent Chemistry** - Bonding and reaction dynamics
- **Magnetic/Gravitational Particles** - Directional/distance-based interactions

### 9.2 Agent-Based Modeling
- **Spatial Competition** - Territory, resources, persistence
- **Lifecycle Dynamics** - Multi-phase reproduction
- **Hypercycles** - Self-sustaining chemical cycles

### 9.3 Emergent Complexity
- **Langton's Ant** - Simple rules leading to complex "highway" emergence
- **Turmites** - Multi-state ant generalizations
- **Self-Replication** - Pattern copying mechanisms

---

## 10. FRACTAL GEOMETRY & CHAOS THEORY

### 10.1 Complex Plane Fractals
- **Mandelbrot Set** - z_{n+1} = z_n^2 + c iteration
- **Julia Sets** - Related complex dynamics, parameter variation
- **Burning Ship, Newton, Phoenix, Tricorn** - Alternative iteration formulas

### 10.2 Geometric Fractals
- **Sierpinski Triangle** - Recursive subdivision
- **Koch Snowflake** - Iterative edge replacement
- **Fractal Trees** - Recursive branching structures

### 10.3 Strange Attractors
- **Lorenz Attractor** - Atmospheric convection model, butterfly effect
- **Rossler Attractor** - Simpler 3D chaotic system
- **Henon Map** - 2D discrete-time chaotic map
- **Logistic Map** - Period-doubling route to chaos
- **Clifford/DeJong Attractors** - Parameter-based strange attractors

### 10.4 Chaos Theory Concepts
- **Sensitive Dependence** - Initial condition sensitivity
- **Phase Space** - State space trajectories
- **Lyapunov Exponents** - Divergence rates

---

## 11. COMPUTATIONAL GEOMETRY & ALGORITHMS

### 11.1 Spatial Partitioning
- **Voronoi Diagrams** - Proximity-based space partitioning
- **Delaunay Triangulation** - Optimal triangulation (Voronoi dual)
- **Quadtree** - Hierarchical spatial indexing
- **Marching Squares/Cubes** - Isosurface extraction

### 11.2 Pathfinding Algorithms
- **A* Algorithm** - Heuristic-based optimal pathfinding
- **Dijkstra's Algorithm** - Shortest path in weighted graphs
- **BFS/DFS** - Breadth/depth-first graph traversal
- **Maze Generation** - Procedural labyrinth creation

### 11.3 Graph Theory & Networks
- **Force-Directed Layout** - Spring-electrical graph drawing
- **Hierarchical Layouts** - Tree, dendrogram, treemap
- **Flow Networks** - Sankey diagrams, chord diagrams
- **Community Detection** - Clustering in networks

---

## 12. SIGNAL PROCESSING & ACOUSTICS

### 12.1 Fourier Analysis
- **Fast Fourier Transform (FFT)** - Time to frequency domain
- **Spectrum Visualization** - Frequency band decomposition
- **Fourier Epicycles** - Complex wave construction via harmonics

### 12.2 Audio Synthesis
- **FM Synthesis** - Frequency modulation sound generation
- **Oscillator Types** - Sine, square, sawtooth, triangle waves
- **Beat Detection** - Rhythm and tempo extraction

### 12.3 Waveform Visualization
- **Oscilloscope Display** - Time-domain waveform
- **Spectrum Analyzer** - Frequency-domain bars
- **3D Audio Landscape** - Spatial frequency mapping

---

## 13. MATHEMATICAL CURVES & FUNCTIONS

### 13.1 Parametric Curves
- **Lissajous Figures** - x=sin(at+d), y=sin(bt) coupled oscillators
- **Spirograph/Epicycloids** - Rolling circle curves
- **Polar Curves** - r=f(theta) spirals, roses, cardioids

### 13.2 Noise Functions
- **Perlin Noise** - Coherent gradient noise
- **Simplex Noise** - Improved Perlin variant
- **Worley/Cellular Noise** - Distance-to-feature-points
- **Domain Warping** - Distorting coordinate space

### 13.3 Signed Distance Functions (SDF)
- **Shape Primitives** - Sphere, box, torus as distance fields
- **CSG Operations** - Union, intersection, subtraction
- **Ray Marching** - SDF-based 3D rendering

---

## 14. DATA VISUALIZATION & INFORMATION DESIGN

### 14.1 Statistical Graphics
- **Time Series** - Line charts, area charts
- **Comparisons** - Bar charts, radar charts
- **Hierarchical Data** - Treemaps, dendrograms
- **Relational Data** - Network graphs, flow diagrams

### 14.2 Geographic Visualization
- **Spatial Binning** - Hexagonal heatmaps
- **Flow Maps** - Movement and migration patterns

---

## SUMMARY: TOP RESEARCH DOMAINS

| Domain | Demo Count | Key Subdisciplines |
|--------|------------|-------------------|
| **Cellular Automata** | 285+ | Wolfram rules, Game of Life variants, multi-state CA |
| **Orbital Mechanics** | 50 | Kepler, N-body, transfers, Lagrange points |
| **Evolutionary Biology** | 45+ | Natural selection, genetics, neuroevolution |
| **Audio/Signal Processing** | 40+ | FFT, spectrum analysis, synthesis |
| **Swarm Intelligence** | 35+ | Boids, ant colony, slime mold, synchronization |
| **Chaos & Fractals** | 30+ | Mandelbrot, attractors, sensitive dependence |
| **Pattern Formation** | 25+ | Reaction-diffusion, DLA, L-systems |
| **Computational Geometry** | 25+ | Voronoi, pathfinding, graph layout |
| **Fluid Dynamics** | 15+ | Navier-Stokes, waves, vorticity |
| **Statistical Mechanics** | 10+ | Ising model, phase transitions |

---

## CROSS-CUTTING THEMES

### Emergence & Self-Organization
- Simple local rules producing complex global behavior
- No central control, decentralized coordination
- Examples: CA, swarms, flocking, pattern formation

### Chaos & Nonlinearity
- Sensitive dependence on initial conditions
- Unpredictability from deterministic systems
- Examples: Double pendulum, three-body, Lorenz attractor

### Evolution & Adaptation
- Selection pressure driving optimization
- Fitness landscapes and local optima
- Examples: Genetic algorithms, neuroevolution, game theory

### Collective Intelligence
- Groups outperforming individuals
- Distributed problem-solving
- Examples: Ant colony, particle swarm, slime mold

---

## RECOMMENDED RESEARCH READING

### Tier 1: Foundational Concepts
1. **Cellular Automata** - Stephen Wolfram's "A New Kind of Science"
2. **Chaos Theory** - James Gleick's "Chaos: Making a New Science"
3. **Emergence** - Steven Johnson's "Emergence"

### Tier 2: Biological & Evolutionary
4. **Evolutionary Game Theory** - Maynard Smith's "Evolution and the Theory of Games"
5. **Swarm Intelligence** - Bonabeau et al.'s "Swarm Intelligence"
6. **Pattern Formation** - Philip Ball's "The Self-Made Tapestry"

### Tier 3: Mathematical & Physical
7. **Dynamical Systems** - Strogatz's "Nonlinear Dynamics and Chaos"
8. **Fractals** - Mandelbrot's "The Fractal Geometry of Nature"
9. **Computational Geometry** - de Berg et al.'s textbook

### Tier 4: Specialized Topics
10. **Orbital Mechanics** - Bate, Mueller, White's "Fundamentals of Astrodynamics"
11. **Fluid Dynamics** - Bridson's "Fluid Simulation for Computer Graphics"
12. **Statistical Mechanics** - Chandler's "Introduction to Modern Statistical Mechanics"
