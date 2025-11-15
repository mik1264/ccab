# CCAB Complete Visualization Documentation

**Creative Code and Algorithmic Beauty (CCAB)** - Complete catalog of 1,017+ interactive web visualizations spanning vanilla JavaScript, modern graphics frameworks, and cutting-edge web technologies.

**Last Updated:** November 15, 2025
**Project Type:** Static HTML/CSS/JavaScript (no build system)
**Browser Target:** Modern evergreen browsers with WebGL 2.0+ support

---

## Table of Contents

### By Category
- [Agent-Based Models & Social Science](#agent-based-models--social-science) (143 demos)
- [Physics & Mechanics](#physics--mechanics) (218 demos)
- [Graphics & Shaders](#graphics--shaders) (167 demos)
- [Generative Art & Creative Coding](#generative-art--creative-coding) (127 demos)
- [Data Visualization](#data-visualization) (24 demos)
- [Cellular Automata](#cellular-automata) (279 demos)
- [Particle Systems & Effects](#particle-systems--effects) (56 demos)
- [Mathematical & Geometric Art](#mathematical--geometric-art) (43 demos)
- [Pure CSS & SVG](#pure-css--svg) (11 demos)

### [Quick Reference](#quick-reference)
- [Technology Stack Breakdown](#technology-stack-breakdown)
- [Difficulty Levels](#difficulty-levels)
- [Performance Requirements](#performance-requirements)

---

## Agent-Based Models & Social Science

### ABM Economics (3 demos)
**Path:** `/abm-economics/`
**Description:** Agent-Based Macroeconomic Models exploring emergent economic behavior
**Technology:** Vanilla JavaScript, ODD Protocol

#### Demos:
1. **Simple Macro ABM** (`index.html`)
   - 100 households, 10 firms, 1 bank
   - Basic emergent macroeconomy from decentralized decisions
   - Introduction to ABM economics fundamentals

2. **Intermediate Policy Lab** (`index.html`)
   - 1000 households, 50 firms, 3 banks
   - Taylor Rule monetary policy
   - Credit rationing, wealth distribution
   - Phillips Curve visualization

3. **Full NetLogo-Style Simulation** (`index.html`)
   - 5000+ households, 200 firms, 5 banks
   - Spatial world view with ODD protocol
   - Stylized facts validation (Zipf, Okun, Phillips)
   - CSV data export capability

---

### Ancient Economy ABM (1 demo + roadmap)
**Path:** `/ancient-economy-abm/`
**Description:** Roman-Mediterranean grain economy simulation
**Technology:** NetLogo-style JavaScript ABM

#### Current Demos:
1. **M0: Basic Grid Prototype** (`index.html`)
   - Production, exchange, transport mechanics
   - Price formation dynamics
   - Foundation for historical economic modeling

#### Coming Soon:
- M1: ORBIS Network integration
- M2: Institutional modeling
- M3: Policy shocks & experiments

---

### Renaissance EconSim (5 demos)
**Path:** `/renaissance-econsim/`
**Description:** European Renaissance economy (1400-1600 CE)
**Technology:** Vanilla JavaScript, Network visualization

#### Demos:
1. **Basic Agent-Based Trade** (`01-basic-trade.html`)
   - Grid-based simulation
   - Merchants, bankers, artisans
   - Supply & demand emergence

2. **Trade Network Visualization** (`02-trade-network.html`)
   - 12 major Renaissance city-states
   - Florence, Venice, Genoa, Milan, etc.
   - Trade route visualization

3. **Wealth Distribution Dynamics** (`03-wealth-distribution.html`)
   - Gini coefficient tracking
   - Lorenz curves
   - Histogram and time-series analysis

4. **Banking & Credit System** (`04-banking-credit.html`)
   - Medici-style banking
   - Loans, interest rates, defaults
   - Financial network visualization

5. **Florence City-State Economy** (`05-florence-economy.html`)
   - Complete Florence simulation
   - 6 economic sectors
   - Production chains

---

### Altruism Evolution (14 demos)
**Path:** `/altruism-evolution/`
**Description:** Interactive evolutionary biology exploring altruism emergence
**Technology:** JavaScript, GPU compute shaders (some demos)

#### Start Here:
1. **⭐ Evolutionary Story** (`20-evolutionary-story.html`)
   - Guided interactive introduction
   - Story mode with educational narrative
   - Perfect starting point for newcomers

2. **⚡ Classic Grid** (`01-classic-grid.html`)
   - GPU-accelerated simulation
   - Classic NetLogo Altruism model
   - Real-time evolution

#### Essential Simulations:
3. **Population Dynamics** (`02-population-dynamics.html`)
   - Population graphs over time
   - Strategy distributions
   - Birth/death tracking

4. **⚡ Fitness Landscape** (`05-fitness-landscape.html`)
   - GPU-accelerated 3D landscape
   - Strategy fitness visualization
   - Adaptive topology

5. **Agent Genealogy** (`09-agent-genealogy.html`)
   - Family tree tracking
   - Lineage visualization
   - Genetic drift analysis

#### Grid Variations:
6. **Hexagonal Grid** (`03-hexagonal-grid.html`)
   - Six-neighbor topology
   - Different spatial dynamics

7. **Radial Grid** (`06-radial-grid.html`)
   - Circular world topology
   - Center-periphery dynamics

#### Spatial Dynamics:
8. **⚡ Environmental Gradient** (`10-environmental-gradient.html`)
   - GPU-accelerated gradients
   - Environmental pressure variations
   - Niche specialization

9. **⚡ Wave Propagation** (`15-wave-propagation.html`)
   - GPU-accelerated waves
   - Strategy propagation patterns
   - Front dynamics

#### Advanced Analysis:
10. **Time-Lapse Evolution** (`11-time-lapse-evolution.html`)
    - Speed controls (1x to 1000x)
    - Long-term dynamics
    - Pattern evolution

11. **Cluster Analysis** (`12-cluster-analysis.html`)
    - Spatial clustering metrics
    - Connected component analysis
    - Segregation measurement

12. **Phase Diagram** (`14-phase-diagram.html`)
    - Parameter space exploration
    - Phase transitions
    - Critical points

13. **⚡ Genetic Flow** (`18-genetic-flow.html`)
    - GPU flow field visualization
    - Gene migration patterns
    - Spatial genetics

#### Interactive Lab:
14. **Interactive Sandbox** (`13-interactive-sandbox.html`)
    - Click to place/remove agents
    - Real-time parameter adjustment
    - Experimental playground

15. **Multi-Scenario Comparison** (`16-multi-scenario-comparison.html`)
    - Side-by-side comparisons
    - Parameter sweep visualization
    - Comparative analysis

16. **Sound Visualization** (`19-sound-visualization.html`)
    - Audio feedback from evolution
    - Sonification of populations
    - Multi-sensory experience

---

### Ethnocentrism (20 demos)
**Path:** `/ethnocentrism/`
**Description:** Cooperation boundaries from arbitrary markers (Axelrod & Hammond 2003)
**Technology:** Vanilla JavaScript, Spatial Prisoner's Dilemma

#### Core Simulations (4 demos):
1. **Basic Ethnocentrism Model** (`01-basic-model.html`)
2. **Strategy Distribution Over Time** (`02-strategy-distribution.html`)
3. **Spatial Segregation Heat Map** (`03-spatial-segregation.html`)
4. **Cooperation Rate Visualizer** (`04-cooperation-rate.html`)

#### Comparative Studies (5 demos):
5. **Strategy Survival Comparison** (`05-strategy-survival.html`)
6. **Color Territory Formation** (`06-color-territory.html`)
7. **Boundary Dynamics Visualizer** (`07-boundary-dynamics.html`)
8. **Mutation Effects Explorer** (`08-mutation-effects.html`)
9. **Initial Conditions Comparison** (`09-initial-conditions.html`)

#### Mechanisms & Dynamics (7 demos):
10. **Payoff Matrix Explorer** (`10-payoff-matrix.html`)
11. **Cluster Size Evolution** (`11-cluster-size.html`)
12. **Immigration Rate Effects** (`12-immigration-rate.html`)
13. **Four-Strategy Arena** (`13-four-strategy.html`)
14. **Altruist Exploitation Visualizer** (`14-altruist-exploitation.html`)
15. **Spatial Assortment Mechanism** (`15-spatial-assortment.html`)
16. **Frequency-Dependent Selection** (`16-frequency-dependent.html`)

#### Advanced Scenarios (4 demos):
17. **Agent Migration Patterns** (`17-migration-patterns.html`)
18. **Network Topology Comparison** (`18-network-topology.html`)
19. **Carrying Capacity Effects** (`19-carrying-capacity.html`)
20. **Parameter Space Explorer** (`20-parameter-space.html`)

---

### Schelling Segregation (20 demos)
**Path:** `/schelling-segregation/`
**Description:** Thomas Schelling's segregation model (1969) - emergence & tipping points
**Technology:** Vanilla JavaScript, HTML5 Canvas

#### Core Mechanics (5 demos):
1. **Classic Schelling Model** (`01-classic-model.html`)
2. **Interactive Preference Slider** (`02-preference-slider.html`)
3. **Density Impact Comparison** (`03-density-impact.html`)
4. **Four Phases of Segregation** (`04-four-phases.html`)
5. **Critical Threshold Explorer** (`05-threshold-explorer.html`)

#### Analysis & Tracking (5 demos):
6. **Happiness Tracking Over Time** (`06-happiness-tracking.html`)
7. **Multi-Group Segregation** (`07-multi-group.html`) - 3-4 groups
8. **Neighborhood Radius Variation** (`08-radius-variation.html`)
9. **Movement Patterns & Trails** (`09-movement-trails.html`)
10. **Cluster Formation Tracker** (`10-cluster-tracker.html`)

#### Advanced Features (5 demos):
11. **Boundary Agent Analysis** (`11-boundary-agents.html`)
12. **Segregation Heat Map** (`12-heat-map.html`)
13. **Integration Stability** (`13-integration-stability.html`) - below threshold
14. **Cascading Movement Effects** (`14-cascading-effects.html`)
15. **Empty Patch Importance** (`15-empty-patches.html`)

#### Extended Models (5 demos):
16. **Historical Movement Traces** (`16-movement-traces.html`)
17. **Statistical Dashboard** (`17-dashboard.html`)
18. **Custom Initial Patterns** (`18-custom-patterns.html`)
19. **Asymmetric Group Preferences** (`19-asymmetric-preferences.html`)
20. **Spatial Tipping Points** (`20-tipping-points.html`) - interactive

---

### Sugarscape Inequality (20 demos)
**Path:** `/sugarscape-inequality/`
**Description:** Emergent economic inequality (Epstein & Axtell)
**Technology:** Vanilla JavaScript, Cobb-Douglas economics

#### Core Inequality Mechanisms (5 demos):
1. **Basic Sugarscape with Gini** (`01-basic-gini.html`)
2. **Spatial Luck** (`02-spatial-luck.html`)
3. **Vision Heterogeneity** (`03-vision-heterogeneity.html`)
4. **Metabolic Efficiency** (`04-metabolic-efficiency.html`)
5. **Survival Selection Dynamics** (`05-survival-selection.html`)

#### Inequality Metrics & Distributions (6 demos):
6. **Interactive Lorenz Curve** (`06-lorenz-curve.html`)
7. **Wealth Distribution Histogram** (`07-wealth-histogram.html`) - Pareto
8. **Inequality Emergence Timeline** (`08-emergence-timeline.html`)
9. **Wealth Accumulation Dynamics** (`09-wealth-accumulation.html`)
10. **Initial vs Final Distribution** (`10-distribution-comparison.html`)
11. **Wealth Concentration** (`11-concentration.html`) - top 10% vs bottom 50%

#### Trade & Two-Commodity Economics (5 demos):
12. **Two-Commodity Trading** (`12-sugar-spice.html`)
13. **Trade Network Visualization** (`13-trade-network.html`)
14. **Efficiency-Equity Tradeoff** (`14-efficiency-equity.html`)
15. **Cobb-Douglas Welfare 3D** (`15-welfare-3d.html`)
16. **Marginal Rate of Substitution** (`16-mrs.html`)

#### System Dynamics & Parameters (4 demos):
17. **Resource Regeneration Patterns** (`17-regeneration.html`)
18. **Parameter Sweep - Gini Sensitivity** (`18-parameter-sweep.html`)
19. **Agent Lifecycle & Death Analysis** (`19-lifecycle.html`)
20. **Interactive Sandbox** (`20-sandbox.html`)

---

### Wealth Distribution (20 demos)
**Path:** `/wealth-distribution/`
**Description:** Structural inequality from heterogeneous foraging
**Technology:** Vanilla JavaScript, real-time Gini/Lorenz

#### Foundational Models (6 demos):
1. **Classic Wealth Distribution** (`01-classic.html`)
2. **Vision Impact Comparison** (`02-vision-impact.html`)
3. **Metabolism Impact** (`03-metabolism-impact.html`)
4. **Combined Fitness Advantages** (`04-combined-fitness.html`)
5. **Spatial Wealth Segregation** (`05-spatial-segregation.html`)
6. **Temporal Wealth Evolution** (`06-temporal-evolution.html`)

#### Statistical Analysis (2 demos):
7. **Lorenz Curve Interactive** (`07-lorenz-interactive.html`)
8. **Wealth Histogram Distribution** (`08-histogram.html`)

#### Policy Interventions (3 demos):
9. **Inheritance Effects** (`09-inheritance.html`)
10. **Taxation & Redistribution** (`10-taxation.html`)
11. **Social Mobility Tracking** (`11-social-mobility.html`)

#### Advanced Analysis (2 demos):
12. **Lifespan-Wealth Correlation** (`12-lifespan-wealth.html`)
13. **Equal vs Heterogeneous Start** (`13-equal-vs-hetero.html`)

#### Environmental Factors (4 demos):
14. **Resource Regeneration Variants** (`14-regeneration.html`)
15. **Sparse vs Dense Resources** (`15-sparse-vs-dense.html`)
16. **Population Dynamics** (`16-population-dynamics.html`)
17. **Vision Range Comparison** (`17-vision-range.html`)

#### Comprehensive Studies (3 demos):
18. **Multi-Generation Analysis** (`18-multi-generation.html`)
19. **Resource Competition Metrics** (`19-competition.html`)
20. **Pareto Principle (80-20 Rule)** (`20-pareto-principle.html`)

---

### Virus Epidemic Models (20 demos)
**Path:** `/virus-epidemic-models/`
**Description:** Interactive disease transmission simulations
**Technology:** Vanilla JavaScript, network topology

#### Basic SIR/SEIR Models (4 demos):
1. **SIR Spatial Model Basic** (`01-sir-basic.html`)
2. **Endemic Equilibrium** (`02-endemic.html`) - high R₀
3. **Epidemic Extinction** (`03-extinction.html`) - low R₀
4. **SEIR Model with Incubation** (`04-seir.html`)

#### Network-Based Models (5 demos):
5. **Erdős-Rényi Random Network** (`05-erdos-renyi.html`)
6. **Barabási-Albert Scale-Free** (`06-barabasi-albert.html`) - hubs
7. **Watts-Strogatz Small-World** (`07-watts-strogatz.html`)
8. **Regular Lattice Network** (`08-lattice.html`)
9. **Topology Comparison** (`09-topology-comparison.html`) - 4-panel

#### Behavioral Models & Interventions (5 demos):
10. **Behavioral Transmission** (`10-behavioral.html`) - coupling
11. **Testing Impact Comparison** (`11-testing.html`)
12. **Quarantine & Isolation** (`12-quarantine.html`)
13. **Vaccination & Herd Immunity** (`13-vaccination.html`)
14. **Contact Tracing Simulation** (`14-contact-tracing.html`)

#### Advanced Models (4 demos):
15. **R₀ Calculator Interactive** (`15-r0-calculator.html`)
16. **SIS Model** (`16-sis.html`) - no immunity
17. **SIRS Model** (`17-sirs.html`) - waning immunity
18. **Multi-Strain Competition** (`18-multi-strain.html`)

#### Spatial & Clustering (2 demos):
19. **Superspreader Events** (`19-superspreader.html`)
20. **Spatial Clustering & Hotspots** (`20-clustering.html`)

---

### Fire Percolation (20 demos)
**Path:** `/fire-percolation/`
**Description:** Phase transitions in forest fire spread
**Technology:** Vanilla JavaScript, percolation theory

#### Core Concepts (5 demos):
1. **Basic Forest Fire** (`01-basic-fire.html`)
2. **Critical Threshold Explorer** (`02-critical-threshold.html`)
3. **Density Comparison** (`03-density-comparison.html`)
4. **Von Neumann Neighborhood** (`04-von-neumann.html`)
5. **Deterministic vs Probabilistic** (`05-deterministic.html`)

#### Analysis & Measurements (5 demos):
6. **Percolation Probability Curve** (`06-probability-curve.html`)
7. **Cluster Size Distribution** (`07-cluster-size.html`)
8. **Burn Front Wave Propagation** (`08-wave-propagation.html`)
9. **Time-to-Reach-Edge Statistics** (`09-time-statistics.html`)
10. **Correlation Length** (`10-correlation-length.html`)

#### Interactive Experiments (5 demos):
11. **Interactive Parameter Explorer** (`11-parameter-explorer.html`)
12. **Multiple Simultaneous Runs** (`12-simultaneous-runs.html`)
13. **Custom Ignition Patterns** (`13-custom-ignition.html`)
14. **Fire Breaks and Barriers** (`14-fire-breaks.html`)
15. **Forest Regeneration Cycles** (`15-regeneration.html`)

#### Advanced Phenomena (5 demos):
16. **Finite-Size Scaling Effects** (`16-finite-size.html`)
17. **Fractal Dimension Analysis** (`17-fractal-dimension.html`)
18. **Anisotropic Spread (Wind)** (`18-wind-effects.html`)
19. **Statistical Ensemble Viewer** (`19-ensemble.html`)
20. **Phase Transition Visualization** (`20-phase-transition.html`)

---

### Wolf-Sheep Predation (20 demos)
**Path:** `/wolf-sheep-predation/`
**Description:** Ecosystem stability through energy mechanics
**Technology:** Vanilla JavaScript, Three.js for 3D

#### Core Ecosystem Dynamics (4 demos):
1. **Basic Predator-Prey** (`01-basic.html`) - unstable
2. **Stable Ecosystem with Grass** (`02-stable.html`)
3. **Population Time Series** (`03-time-series.html`)
4. **Phase Space Diagram** (`04-phase-space.html`)

#### Energy & Resources (4 demos):
5. **Agent Energy Visualization** (`05-energy-viz.html`)
6. **Spatial Density Heatmaps** (`06-density-heatmap.html`)
7. **Energy Distribution Histograms** (`07-energy-histogram.html`)
8. **Grass Resource Dynamics** (`08-grass-dynamics.html`)

#### Parameters & Scenarios (4 demos):
9. **Parameter Sensitivity Analysis** (`09-sensitivity.html`)
10. **Multi-Scenario Comparison** (`10-scenarios.html`)
11. **Initial Condition Sensitivity** (`11-initial-conditions.html`)
12. **Interactive Sandbox** (`12-sandbox.html`)

#### Agent Behavior & Demographics (4 demos):
13. **Agent Movement Trails** (`13-movement-trails.html`)
14. **Reproduction Event Timeline** (`14-reproduction-timeline.html`)
15. **Death Cause Analysis** (`15-death-analysis.html`)
16. **Agent Lifetime Distribution** (`16-lifetime.html`)

#### Population Analysis (3 demos):
17. **Carrying Capacity Demonstration** (`17-carrying-capacity.html`)
18. **Oscillation Period Analysis** (`18-oscillation.html`)
19. **Ecosystem Stability Metrics** (`19-stability.html`)

#### Advanced 3D Visualization (1 demo):
20. **3D Population Surface** (`20-3d-population.html`) - Three.js

---

## Physics & Mechanics

### Physics Simulations (40 demos)
**Path:** `/physics-simulations/`
**Description:** Interactive physics exploring complexity and emergence
**Technology:** Vanilla JavaScript, Three.js for 3D

#### Boids & Flocking Behavior (8 demos):
1. **Basic Boids** (`01-basic-boids.html`)
2. **Predator-Prey Dynamics** (`02-predator-prey.html`)
3. **3D Boids** (`03-3d-boids.html`) - Three.js
4. **Obstacle Avoidance** (`04-obstacle-avoidance.html`)
5. **Leader Following** (`05-leader-following.html`)
6. **Fish School Simulation** (`06-fish-school.html`)
7. **Bird Murmuration** (`07-murmuration.html`)
8. **Ant Colony with Pheromones** (`08-ant-pheromones.html`)

#### Reaction-Diffusion Systems (5 demos):
9. **Gray-Scott Basic** (`09-gray-scott.html`)
10. **Leopard Spots Pattern** (`10-leopard-spots.html`)
11. **Zebra Stripes Pattern** (`11-zebra-stripes.html`)
12. **Brain Coral Pattern** (`12-brain-coral.html`)
13. **Interactive Painting** (`13-rd-painting.html`)

#### Fluid Dynamics (5 demos):
14. **Simple Fluid** (`14-simple-fluid.html`)
15. **Smoke Simulation** (`15-smoke.html`)
16. **Interactive Vorticity** (`16-vorticity.html`)
17. **Particle Advection** (`17-advection.html`)
18. **Ink in Water** (`18-ink-water.html`)

#### Ising Model - Phase Transitions (5 demos):
19. **Basic 2D Ising** (`19-ising-basic.html`)
20. **Phase Transition Demo** (`20-phase-transition.html`)
21. **Temperature Control** (`21-temperature-control.html`)
22. **External Magnetic Field** (`22-magnetic-field.html`)
23. **3D Ising Model** (`23-ising-3d.html`)

#### Langton's Ant & Turmites (5 demos):
24. **Classic Ant (RL)** (`24-langton-ant.html`)
25. **Multiple Ants** (`25-multiple-ants.html`)
26. **Extended Rules** (`26-extended-rules.html`) - RLR, LLRR
27. **Turmite Variations** (`27-turmites.html`)
28. **Symmetric Patterns** (`28-symmetric-patterns.html`)

#### Diffusion-Limited Aggregation (5 demos):
29. **Basic DLA** (`29-dla-basic.html`)
30. **Radial DLA** (`30-dla-radial.html`)
31. **Multiple Seeds** (`31-dla-seeds.html`)
32. **3D DLA** (`32-dla-3d.html`) - Three.js
33. **Dielectric Breakdown** (`33-dielectric.html`)

#### Additional Physics Simulations (7 demos):
34. **Double Pendulum** (`34-double-pendulum.html`) - chaos
35. **Spring Systems** (`35-springs.html`)
36. **Soft Body Physics** (`36-soft-body.html`)
37. **Verlet Cloth Simulation** (`37-cloth.html`)
38. **Particle Fountain** (`38-fountain.html`)
39. **Gravity Well Visualization** (`39-gravity-well.html`)
40. **Elastic Collisions** (`40-collisions.html`)

---

### Gravity & Orbits (50 demos)
**Path:** `/gravity-orbits/`
**Description:** Interactive orbital mechanics & space physics
**Technology:** Vanilla JavaScript, HTML5 Canvas, Three.js

#### Basic Orbital Mechanics (10 demos):
1. **Simple Circular Orbit** (`01-circular.html`)
2. **Elliptical Orbit** (`02-elliptical.html`)
3. **Parabolic Escape** (`03-parabolic.html`)
4. **Hyperbolic Flyby** (`04-hyperbolic.html`)
5. **Hohmann Transfer** (`05-hohmann.html`)
6. **Orbital Decay** (`06-decay.html`)
7. **Geostationary Orbit** (`07-geostationary.html`)
8. **Polar Orbit** (`08-polar.html`)
9. **Multiple Satellites** (`09-satellites.html`)
10. **Orbital Resonance (2:1)** (`10-resonance.html`)

#### N-Body Systems (10 demos):
11. **Simple N-Body** (`11-nbody.html`) - Verlet
12. **Solar System** (`12-solar-system.html`)
13. **Three-Body Figure-8** (`13-figure-8.html`)
14. **Three-Body Chaos** (`14-chaos.html`)
15. **Four-Body System** (`15-four-body.html`)
16. **Random N-Body** (`16-random-nbody.html`)
17. **Binary Star System** (`17-binary-stars.html`)
18. **Binary Star with Planet** (`18-binary-planet.html`)
19. **Trojan Asteroids (L4/L5)** (`19-trojans.html`)
20. **Lagrange Points** (`20-lagrange.html`)

#### Advanced Orbital Mechanics (10 demos):
21. **Gravity Assist (Slingshot)** (`21-slingshot.html`)
22. **Orbital Perturbations** (`22-perturbations.html`)
23. **Tidal Forces** (`23-tidal-forces.html`)
24. **Roche Limit** (`24-roche-limit.html`)
25. **Hill Sphere** (`25-hill-sphere.html`)
26. **Sphere of Influence** (`26-soi.html`)
27. **Orbital Precession** (`27-precession.html`)
28. **Kozai-Lidov Oscillations** (`28-kozai-lidov.html`)
29. **Orbital Plane Change** (`29-plane-change.html`)
30. **Bi-Elliptic Transfer** (`30-bi-elliptic.html`)

#### Celestial Phenomena (10 demos):
31. **Galaxy Spiral Arms** (`31-spiral-galaxy.html`)
32. **Globular Cluster** (`32-globular.html`)
33. **Star Cluster Formation** (`33-cluster-formation.html`)
34. **Planetary Rings** (`34-rings.html`)
35. **Asteroid Belt** (`35-asteroid-belt.html`)
36. **Kuiper Belt** (`36-kuiper-belt.html`)
37. **Comet Trajectories** (`37-comets.html`)
38. **Meteor Showers** (`38-meteors.html`)
39. **Planet Formation (Accretion)** (`39-accretion.html`)
40. **Stellar Collision** (`40-collision.html`)

#### Interactive & Educational (10 demos):
41. **Launch Window Calculator** (`41-launch-window.html`)
42. **Orbit Designer** (`42-orbit-designer.html`)
43. **Escape Velocity Demo** (`43-escape-velocity.html`)
44. **Kepler's Laws** (`44-keplers-laws.html`)
45. **Newton's Cannon** (`45-newtons-cannon.html`)
46. **Gravity Well (3D)** (`46-gravity-well-3d.html`)
47. **Orbital Energy Calculator** (`47-energy-calc.html`)
48. **Vis-Viva Equation** (`48-vis-viva.html`)
49. **Orbital Elements Editor** (`49-elements-editor.html`)
50. **Mission to Mars Planner** (`50-mars-planner.html`)

---

### Emergent Behaviors (50 demos)
**Path:** `/emergent-behaviors/`
**Description:** Complex systems where simple rules create complex patterns
**Technology:** Vanilla JavaScript, HTML5 Canvas, Three.js

#### Langton's Ant (12 demos):
1. **Classic RL Rule** (`01-langton-rl.html`)
2. **RLR Three Colors** (`02-rlr.html`)
3. **LLRR Square Growth** (`03-llrr.html`)
4. **LRRRRRLLR Highway** (`04-lrrrrrllr.html`)
5. **RRLLLRLLLRRR Highway** (`05-rrlllrlllrrr.html`)
6. **Two Ants** (`06-two-ants.html`)
7. **Five Ants** (`07-five-ants.html`)
8. **RLLR Four Colors** (`08-rllr.html`)
9. **RLRLRL Six Colors** (`09-rlrlrl.html`)
10. **Hexagonal Grid** (`10-hex-grid.html`)
11. **Trail Visualization** (`11-trails.html`)
12. **Ant Race** (`12-race.html`)

#### Boids Flocking (13 demos):
13. **Basic 2D Flocking** (`13-boids-basic.html`)
14. **With Obstacles** (`14-boids-obstacles.html`)
15. **With Predator** (`15-boids-predator.html`)
16. **Two Species** (`16-boids-species.html`)
17. **Velocity Trails** (`17-boids-trails.html`)
18. **Separation Zones** (`18-boids-separation.html`)
19. **Alignment Vectors** (`19-boids-alignment.html`)
20. **Cohesion Centers** (`20-boids-cohesion.html`)
21. **3D Basic** (`21-boids-3d.html`) - Three.js
22. **3D Predator** (`22-boids-3d-predator.html`)
23. **3D Two Flocks** (`23-boids-3d-flocks.html`)
24. **3D Bounded Space** (`24-boids-3d-bounded.html`)
25. **3D Wind Forces** (`25-boids-3d-wind.html`)

#### Cellular Automata (12 demos):
26. **Brian's Brain** (`26-brians-brain.html`)
27. **Seeds (B2/S)** (`27-seeds.html`)
28. **Wireworld** (`28-wireworld.html`)
29. **Day & Night** (`29-day-night.html`)
30. **HighLife (B36/S23)** (`30-highlife.html`)
31. **Replicator** (`31-replicator.html`)
32. **Cyclic CA** (`32-cyclic.html`)
33. **Rock-Paper-Scissors** (`33-rps.html`)
34. **Majority Rule** (`34-majority.html`)
35. **Immigration** (`35-immigration.html`)
36. **Anneal** (`36-anneal.html`)
37. **Vote CA** (`37-vote.html`)

#### Swarm & Colony (7 demos):
38. **Ant Colony Optimization** (`38-aco.html`)
39. **Slime Mold (Physarum)** (`39-slime-mold.html`)
40. **Particle Swarm Optimization** (`40-pso.html`)
41. **Firefly Synchronization** (`41-fireflies.html`)
42. **Bacterial Colony Growth** (`42-bacteria.html`)
43. **Fish Schooling** (`43-fish.html`)
44. **Termite Nest Building** (`44-termites.html`)

#### Particle Life (6 demos):
45. **3-Type Particle Life** (`45-particle-life-3.html`)
46. **5-Type Particle Life** (`46-particle-life-5.html`)
47. **6-Type Particle Life** (`47-particle-life-6.html`)
48. **Magnetic Particles** (`48-magnetic.html`)
49. **Gravitational Orbits** (`49-gravity-orbits.html`)
50. **Chemical Reactions** (`50-reactions.html`)

---

### Boids Flocking Visualizations (20 demos)
**Path:** `/boids-flocking-visualizations/`
**Description:** Craig Reynolds' 1986 flocking algorithm
**Technology:** Vanilla JavaScript, Three.js

#### Core Implementations (4 demos):
1. **Classic Boids** (`01-classic.html`)
2. **Interactive Parameters** (`02-interactive.html`)
3. **Path Trails** (`03-trails.html`)
4. **Neighborhood Debug** (`04-debug.html`)

#### Behavioral Variations (6 demos):
5. **Predator Avoidance** (`05-predator.html`)
6. **Obstacle Avoidance** (`06-obstacles.html`)
7. **Wind Fields** (`07-wind.html`)
8. **Leader Following** (`08-leader.html`)
9. **Goal Seeking** (`09-goal.html`)
10. **Perching Behavior** (`10-perching.html`)

#### Rule Analysis (4 demos):
11. **Alignment Showcase** (`11-alignment.html`)
12. **Cohesion Showcase** (`12-cohesion.html`)
13. **Separation Showcase** (`13-separation.html`)
14. **Velocity Vectors** (`14-vectors.html`)

#### Advanced Features (6 demos):
15. **3D Boids** (`15-3d.html`) - Three.js
16. **Multi-Species Flocking** (`16-multi-species.html`)
17. **Toroidal Wrapping** (`17-toroidal.html`)
18. **Realistic Birds** (`18-realistic.html`)
19. **Performance Stress Test** (`19-stress-test.html`)
20. **Parameter Playground** (`20-playground.html`)

---

### Follower Visualizations (30 demos)
**Path:** `/follower-visualizations/`
**Description:** Agent-based chain formation (NetLogo Follower model)
**Technology:** Vanilla JavaScript, WebGL for GPU

#### Core Implementations (5 demos):
1. **Classic Follower** (`01-classic.html`)
2. **Smooth Interpolation** (`02-smooth.html`)
3. **Rainbow Chains** (`03-rainbow.html`)
4. **Particle Trails** (`04-trails.html`)
5. **Wavy Motion** (`05-wavy.html`)

#### Visual Enhancements (4 demos):
6. **Size by Chain Position** (`06-size-gradient.html`)
7. **3D Perspective** (`07-3d.html`)
8. **Glowing Chains** (`08-glow.html`)
9. **Pulsating Connections** (`09-pulse.html`)

#### Physics & Dynamics (3 demos):
10. **Spring Connections** (`10-springs.html`)
11. **Gravity Attraction** (`11-gravity.html`)
12. **Chain Repulsion** (`12-repulsion.html`)

#### Multi-Agent Systems (3 demos):
13. **Multiple Populations** (`13-populations.html`)
14. **Collision Avoidance** (`14-collision.html`)
15. **Predator-Prey Dynamics** (`15-predator-prey.html`)

#### Alternative Movement Patterns (2 demos):
16. **Grid-Based Movement** (`16-grid.html`)
17. **Noise-Based Wandering** (`17-noise.html`)

#### Interactive & Data-Driven (3 demos):
18. **Audio-Reactive** (`18-audio.html`)
19. **Interactive Click Control** (`19-click.html`)
20. **Chain Length Analytics** (`20-analytics.html`)

#### Ultra-Advanced Systems (10 demos):
21. **WebGL GPU-Accelerated** (`21-gpu.html`) - 5000+ agents
22. **Interactive Parameter Playground** (`22-playground.html`)
23. **Genetic Evolution Algorithm** (`23-evolution.html`)
24. **Network Graph Analysis** (`24-network.html`)
25. **Vector Field Navigation** (`25-vector-field.html`)
26. **Swarm Intelligence Optimization** (`26-swarm.html`)
27. **Emergent Communication Protocols** (`27-communication.html`)
28. **Fractal Chain Patterns** (`28-fractal.html`)
29. **Magnetic Field Simulation** (`29-magnetic.html`)
30. **Time-Lapse Heatmap Analytics** (`30-heatmap.html`)

---

### Particle Systems (20 demos)
**Path:** `/particle-systems/`
**Description:** Pure Canvas 2D particle effects
**Technology:** HTML5 Canvas 2D

#### Interactive Effects (7 demos):
1. **Fireworks Particles** (`01-fireworks.html`)
2. **Mouse Attraction** (`02-mouse-attraction.html`)
3. **Bouncing Balls** (`03-bouncing.html`)
4. **Rain & Snow Toggle** (`04-rain-snow.html`)
5. **Paint Splatter** (`05-splatter.html`)
6. **Explosion Effects** (`06-explosion.html`)
7. **Interactive Swarm** (`07-swarm.html`)

#### Physics & Forces (5 demos):
8. **Gravity Well** (`08-gravity-well.html`)
9. **Orbital System** (`09-orbital.html`)
10. **Fluid Flow** (`10-fluid.html`)
11. **Magnetic Field** (`11-magnetic.html`)
12. **Turbulence Flow** (`12-turbulence.html`)

#### Visual Effects (4 demos):
13. **Smoke Simulation** (`13-smoke.html`)
14. **Electric Arcs** (`14-electric.html`)
15. **Aurora Borealis** (`15-aurora.html`)
16. **Colorful Trails** (`16-trails.html`)

#### Geometric & Space (4 demos):
17. **Constellation Network** (`17-constellation.html`)
18. **DNA Helix** (`18-dna.html`)
19. **Spiral Galaxy** (`19-galaxy.html`)
20. **Morphing Shapes** (`20-morphing.html`)

---

### Particle Effects (8 demos)
**Path:** `/particle-effects/`
**Description:** Interactive particle system demonstrations
**Technology:** HTML5 Canvas 2D

#### Natural Elements (3 demos):
1. **Fire Effect** (`01-fire.html`)
2. **Water Fountain** (`02-fountain.html`)
3. **Rising Smoke** (`03-smoke.html`)

#### Atmospheric & Celebratory (2 demos):
4. **Fireworks** (`04-fireworks.html`)
5. **Falling Snow** (`05-snow.html`)

#### Space & Physics Simulations (3 demos):
6. **Starfield Warp** (`06-starfield.html`)
7. **Plasma Particles** (`07-plasma.html`)
8. **Spiral Galaxy** (`08-galaxy.html`)

---

### Chaos Attractors (8 demos)
**Path:** `/chaos-attractors/`
**Description:** Strange attractors and chaotic dynamical systems
**Technology:** Vanilla JavaScript, HTML5 Canvas

#### Demos:
1. **Lorenz Attractor** (`01-lorenz.html`)
2. **Rössler Attractor** (`02-rossler.html`)
3. **Chaotic Double Pendulum** (`03-double-pendulum.html`)
4. **Logistic Map Bifurcation** (`04-logistic-map.html`)
5. **Hénon Attractor** (`05-henon.html`)
6. **Clifford Attractor** (`06-clifford.html`)
7. **Peter de Jong Attractor** (`07-de-jong.html`)
8. **Aizawa Attractor** (`08-aizawa.html`)

---

### Scientific Visualizations (15 demos)
**Path:** `/scientific-visualizations/`
**Description:** Interactive physics simulations
**Technology:** JavaScript, Physics Simulations

#### Orbital Mechanics (5 demos):
1. **Kepler's Laws** (`orbital-mechanics/01-kepler-orbits.html`)
2. **Hohmann Transfer Orbit** (`orbital-mechanics/02-hohmann-transfer.html`)
3. **Orbital Precession** (`orbital-mechanics/05-precession.html`)
4. **Escape Velocity** (`orbital-mechanics/06-escape-velocity.html`)
5. **Tidal Locking** (`orbital-mechanics/07-tidal-locking.html`)

#### Wave Interference (4 demos):
6. **Ripple Tank** (`wave-interference/02-ripple-tank.html`)
7. **Standing Waves** (`wave-interference/03-standing-waves.html`)
8. **Beat Frequency** (`wave-interference/05-beats.html`)
9. **Doppler Effect** (`wave-interference/06-doppler-effect.html`)

#### Electromagnetic Fields (3 demos):
10. **Electric Field Lines** (`electromagnetic-fields/01-electric-field.html`)
11. **Lorentz Force** (`electromagnetic-fields/05-lorentz-force.html`)
12. **Parallel Plate Capacitor** (`electromagnetic-fields/06-capacitor.html`)

#### Fluid Dynamics (3 demos):
13. **Vortex Flow Field** (`fluid-dynamics/01-vortex-flow.html`)
14. **Bernoulli's Principle** (`fluid-dynamics/02-bernoulli.html`)
15. **Reynolds Number** (`fluid-dynamics/04-reynolds.html`) - Laminar vs Turbulent

---

### Biological Simulations (23 demos)
**Path:** `/biological-simulations/`
**Description:** Interactive biological system simulations
**Technology:** JavaScript, Agent-Based Models

#### Boids Flocking Behavior (8 demos):
1. **Classic Boids** (`boids/01-classic-boids.html`)
2. **Colorful Trails** (`boids/02-colorful-trails.html`)
3. **Predator-Prey Dynamics** (`boids/03-predator-prey.html`)
4. **Obstacle Avoidance** (`boids/04-obstacle-avoidance.html`)
5. **Magnetic Boids** (`boids/05-magnetic-boids.html`)
6. **Schooling Fish** (`boids/06-schooling-fish.html`)
7. **Bird Migration** (`boids/07-bird-migration.html`)
8. **3D Boids** (`boids/08-3d-boids.html`)

#### Evolution Simulators (8 demos):
9. **Genetic Creatures** (`evolution/01-genetic-creatures.html`)
10. **Natural Selection** (`evolution/02-natural-selection.html`)
11. **Survival of the Fittest** (`evolution/03-survival-fittest.html`)
12. **Gene Pool** (`evolution/04-gene-pool.html`)
13. **Ecosystem Evolution** (`evolution/05-ecosystem-evolution.html`)
14. **Neural Evolution** (`evolution/06-neural-evolution.html`)
15. **Morphology Evolution** (`evolution/07-morphology-evolution.html`)
16. **Cooperation & Competition** (`evolution/08-cooperation-competition.html`)

#### L-Systems (Lindenmayer Systems) (3 demos):
17. **Basic Tree Growth** (`l-systems/01-basic-tree.html`)
18. **Fractal Plant** (`l-systems/02-fractal-plant.html`)
19. **Koch Snowflake** (`l-systems/03-koch-snowflake.html`)

#### Reaction-Diffusion Patterns (3 demos):
20. **Gray-Scott Model** (`reaction-diffusion/01-gray-scott.html`)
21. **Spots Patterns** (`reaction-diffusion/04-spots-patterns.html`)
22. **Mitosis** (`reaction-diffusion/06-mitosis.html`)

#### Economic & Social Simulations (1 demo):
23. **Plough & Plague** (`plough-and-plague.html`) - Medieval Economics ABM

---

### Solar Flare Visualizations (40 demos)
**Path:** `/solar-flare-visualizations/`
**Description:** November 11, 2025 X5.1 solar flare event
**Technology:** Vanilla JavaScript, Three.js, Web Audio API

#### Solar Flare Physics & Mechanisms (8 demos):
1. **X5.1 Flare Intensity** (`01-x51-intensity.html`)
2. **Sunspot AR4274 Structure** (`02-sunspot-structure.html`)
3. **Magnetic Reconnection** (`03-magnetic-reconnection.html`)
4. **X-ray Emission Spectrum** (`04-xray-spectrum.html`)
5. **Particle Acceleration** (`05-particle-acceleration.html`)
6. **Plasma Eruption** (`06-plasma-eruption.html`)
7. **Coronal Loop Dynamics** (`07-coronal-loops.html`)
8. **Flare Ribbon Structure** (`08-flare-ribbons.html`)

#### CME and Space Weather (7 demos):
9. **Electromagnetic Pulse** (`09-emp.html`)
10. **CME Propagation to Earth** (`10-cme-propagation.html`)
11. **Solar Wind Density** (`11-solar-wind-density.html`)
12. **Heliospheric Current Sheet** (`12-hcs.html`)
13. **Solar Energetic Particles (SEP)** (`13-sep.html`)
14. **Solar Wind Speed Gauge** (`14-wind-speed.html`)
15. **Solar Prominence Eruption** (`15-prominence.html`)

#### Earth's Magnetosphere & Impacts (5 demos):
16. **Radio Blackout Map** (`16-radio-blackout.html`)
17. **Magnetosphere Compression** (`17-magnetosphere.html`)
18. **Aurora Borealis Formation** (`18-aurora.html`)
19. **Ionosphere Disturbance** (`19-ionosphere.html`)
20. **Polar Lights Projection** (`20-polar-lights.html`)

#### Technology & Infrastructure Impacts (4 demos):
21. **Satellite Impact Simulation** (`21-satellite-impact.html`)
22. **Power Grid GIC Effects** (`22-power-grid.html`)
23. **Space Radiation Hazard** (`23-radiation-hazard.html`)
24. **Satellite Constellation Impact** (`24-constellation.html`)

#### Space Weather Monitoring & Data (6 demos):
25. **Geomagnetic Storm Scale (G-scale)** (`25-g-scale.html`)
26. **SDO Multi-Wavelength Observations** (`26-sdo.html`)
27. **3-Day Space Weather Forecast** (`27-forecast.html`)
28. **GOES Proton Flux Monitor** (`28-proton-flux.html`)
29. **Dst Index Monitor** (`29-dst-index.html`)
30. **Real-Time Dashboard** (`30-dashboard.html`)

#### Solar Cycle & Historical Context (7 demos):
31. **Solar Cycle 25 Progress** (`31-cycle-25.html`)
32. **Energy Comparison Chart** (`32-energy-comparison.html`)
33. **Carrington Event vs X5.1** (`33-carrington.html`)
34. **Solar Rotation Tracking AR4274** (`34-rotation.html`)
35. **Flare Classification System** (`35-classification.html`)
36. **Historic Flares Timeline** (`36-timeline.html`)
37. **Butterfly Diagram** (`37-butterfly.html`)

#### Advanced & Interactive Visualizations (3 demos):
38. **3D Sun** (`38-3d-sun.html`) - Three.js
39. **Solar Atmosphere Layers** (`39-atmosphere.html`)
40. **Solar Wind Sonification** (`40-sonification.html`) - Web Audio

---

### Autumn Leaf Visualizations (20 demos)
**Path:** `/autumn-leaf-visualizations/`
**Description:** The science behind autumn leaf color changes
**Technology:** Vanilla JavaScript, Three.js, WebGL

#### Chemical Processes & Pigments (5 demos):
1. **Chlorophyll Degradation** (`01-chlorophyll.html`)
2. **Anthocyanin Production** (`02-anthocyanin.html`)
3. **Interactive Leaf Chemistry** (`03-chemistry.html`)
4. **Chemical Flow Visualization** (`04-chemical-flow.html`)
5. **Microscopic Cell View** (`05-cell-view.html`)

#### Physics & Leaf Movement (4 demos):
6. **Falling Leaves Physics** (`06-falling-physics.html`)
7. **Wind and Rain Effects** (`07-wind-rain.html`)
8. **Leaf Particle Storm** (`08-particle-storm.html`)
9. **Ground Accumulation** (`09-ground-accumulation.html`)

#### Environmental Effects (2 demos):
10. **Temperature Gradient Tree** (`10-temperature.html`)
11. **Day/Night Cycle** (`11-day-night.html`)

#### Trees & Structure (4 demos):
12. **Fractal Autumn Tree** (`12-fractal-tree.html`)
13. **3D Tree** (`13-3d-tree.html`) - Three.js
14. **WebGL Shader Leaves** (`14-shader-leaves.html`)
15. **Multiple Tree Varieties** (`15-varieties.html`)

#### Seasonal Progression (3 demos):
16. **Seasonal Tree Transition** (`16-transition.html`)
17. **Time-Lapse Season** (`17-time-lapse.html`)
18. **Branch-by-Branch Progression** (`18-branch-progression.html`)

#### Ecosystem & Landscape (2 demos):
19. **Forest Canopy View** (`19-canopy.html`)
20. **Complete Ecosystem** (`20-ecosystem.html`)

---

## Graphics & Shaders

### Three.js 3D Visualizations (36 demos)
**Path:** `/threejs/`
**Description:** Immersive 3D experiences powered by Three.js
**Technology:** Three.js (WebGL), 3D Graphics

#### Rotating 3D Models (10 demos):
1. **Colorful Rotating Cube** (`01-rotating-cube.html`)
2. **Spinning Torus** (`02-spinning-torus.html`)
3. **Icosahedron Dance** (`03-icosahedron.html`)
4. **Dodecahedron Spin** (`04-dodecahedron.html`)
5. **Wireframe Sphere** (`05-sphere-wireframe.html`)
6. **Multi-Cube Formation** (`06-multi-cubes.html`)
7. **Tetrahedron Array** (`07-tetrahedron.html`)
8. **Octahedron Cluster** (`08-octahedron.html`)
9. **Torus Knot** (`09-torusknot.html`)
10. **Geometric Mix** (`10-geometric-mix.html`)

#### Particle Systems in 3D Space (10 demos):
11. **Particle Sphere** (`11-particle-sphere.html`)
12. **Particle Wave** (`12-particle-wave.html`)
13. **Particle Spiral** (`13-particle-spiral.html`)
14. **Particle Explosion** (`14-particle-explosion.html`)
15. **Particle Galaxy** (`15-particle-galaxy.html`)
16. **Constellation** (`16-particle-constellation.html`)
17. **Flow Field** (`17-particle-flow.html`)
18. **DNA Helix** (`18-particle-DNA.html`)
19. **3D Fireworks** (`19-particle-fireworks.html`)
20. **Nebula Cloud** (`20-particle-nebula.html`)

#### Procedural Mesh Generation (8 demos):
21. **Terrain Heightmap** (`21-terrain-heightmap.html`)
22. **Perlin Noise Landscape** (`22-perlin-landscape.html`)
23. **Wave Mesh** (`23-wave-mesh.html`)
24. **3D Fractal Tree** (`24-fractal-tree.html`)
25. **Procedural City** (`25-procedural-city.html`)
26. **Crystal Structure** (`26-crystal-structure.html`)
27. **Organic Blob** (`27-organic-blob.html`)
28. **Voronoi Mesh** (`28-voronoi-mesh.html`)

#### Advanced Shader Effects (8 demos):
29. **Displacement Shader** (`31-displacement-shader.html`)
30. **Instanced Geometry** (`32-instanced-geometry.html`) - 100k+ meshes
31. **Custom Shader Material** (`33-custom-shader-material.html`)
32. **Morphing Geometry** (`34-morphing-geometry.html`)
33. **Vertex Displacement** (`35-vertex-displacement.html`)
34. **Post-Processing Bloom** (`36-postprocessing-bloom.html`)
35. **Point Cloud** (`37-point-cloud.html`) - 500k+ points
36. **Vignette Effect** (`40-vignette-effect.html`)

---

### WebGL Shader Art (29 demos)
**Path:** `/webgl-shaders/`
**Description:** GPU-accelerated visualizations using raw WebGL shaders
**Technology:** WebGL 2.0, GLSL Shaders

#### Advanced Shader Techniques (8 demos):
1. **Mandelbrot Deep Zoom** (`22-mandelbrot-zoom.html`)
2. **Fluid Simulation** (`23-fluid-simulation.html`)
3. **Volumetric Light Rays** (`24-volumetric-light.html`)
4. **Truchet Tile Patterns** (`25-truchet-tiles.html`)
5. **SDF Primitives Gallery** (`26-sdf-gallery.html`)
6. **Domain Warping** (`27-domain-warping.html`)
7. **Cellular Noise 3D** (`28-cellular-noise-3d.html`)
8. **Plasma Effect** (`29-plasma-effect.html`)

#### Fragment Shader Art (3 demos):
9. **Plasma Fire** (`demos/05-plasma-fire.html`)
10. **Liquid Metal** (`demos/09-liquid-metal.html`)
11. **Aurora Waves** (`demos/10-aurora-waves.html`)

#### Raymarching Demos (2 demos):
12. **Cube Fractal** (`demos/12-cube-fractal.html`)
13. **Menger Sponge** (`demos/14-menger-sponge.html`)

#### GPU Particle Systems (7 demos):
14. **Particle Explosion** (`demos/19-particle-explosion.html`)
15. **Particle Flow Field** (`demos/20-particle-flow-field.html`)
16. **Particle Galaxy** (`demos/21-particle-galaxy.html`)
17. **Particle Swarm** (`demos/22-particle-swarm.html`)
18. **Particle Waves** (`demos/23-particle-waves.html`)
19. **Particle Vortex** (`demos/24-particle-vortex.html`)
20. **Particle Nebula** (`demos/25-particle-nebula.html`)

#### Reaction-Diffusion Systems (1 demo):
21. **Bacterial Colonies** (`demos/30-bacterial-colonies.html`)

#### Fractal Explorers (8 demos):
22. **Mandelbrot Set** (`demos/33-mandelbrot-set.html`)
23. **Julia Set** (`demos/34-julia-set.html`)
24. **Burning Ship** (`demos/35-burning-ship.html`)
25. **Newton Fractal** (`demos/36-newton-fractal.html`)
26. **Phoenix Fractal** (`demos/37-phoenix-fractal.html`)
27. **Tricorn Fractal** (`demos/38-tricorn-fractal.html`)
28. **Mandelbrot Zoom** (`demos/39-mandelbrot-zoom.html`)
29. **Julia Morph** (`demos/40-julia-morph.html`)

---

### WebGPU Compute Shaders (12 demos)
**Path:** `/webgpu/`
**Description:** GPU-accelerated visualizations using WebGPU
**Technology:** WebGPU API, Compute Shaders

#### Basic Compute Shaders (5 demos):
1. **Particle System** (`demos/01-particle-system.html`)
2. **Conway's Game of Life** (`demos/04-game-of-life.html`)
3. **Gaussian Blur** (`demos/05-gaussian-blur.html`)
4. **Fluid Simulation** (`demos/06-fluid-simulation.html`)
5. **Wave Simulation** (`demos/08-wave-simulation.html`)

#### Parallel Processing (3 demos):
6. **Histogram Computation** (`demos/14-histogram-compute.html`)
7. **Voronoi Diagram** (`demos/16-voronoi-diagram.html`)
8. **Monte Carlo Simulation** (`demos/19-monte-carlo-simulation.html`)

#### Ray Tracing (4 demos):
9. **Ray-Sphere Intersection** (`demos/21-ray-sphere-basic.html`)
10. **Ray Reflections** (`demos/22-ray-reflections.html`)
11. **Ambient Occlusion** (`demos/26-ambient-occlusion.html`)
12. **Ray Marched Fractals** (`demos/27-ray-march-fractals.html`)

---

### TSL Shaders (46 demos)
**Path:** `/tsl-shaders/`
**Description:** Three.js Shading Language (node-based shader programming)
**Technology:** Three.js TSL, WebGL, WebGPU

#### Foundation Experiments (12 demos):
1. **Pulsating Sphere** (`01-foundation-pulsating.html`)
2. **Wave Deformed Torus** (`02-foundation-wave.html`)
3. **Noise Displacement** (`03-foundation-noise.html`)
4. **Morphing Icosahedron** (`04-foundation-morphing.html`)
5. **Undulating Terrain** (`05-foundation-terrain.html`)
6. **Position-Based Hue Shift** (`06-foundation-hue.html`)
7. **Fresnel Color Effect** (`07-foundation-fresnel.html`)
8. **Rim Lighting** (`08-foundation-rim.html`)
9. **Subsurface Scattering** (`09-foundation-subsurface.html`)
10. **Dissolve Transitions** (`10-foundation-dissolve.html`)
11. **Pixelation** (`11-foundation-pixelation.html`)
12. **Fractal Noise Surfaces** (`12-foundation-fractal.html`)

#### Advanced Parametric Forms (2 demos):
13. **Animated Supershape** (`13-parametric-supershape.html`)
14. **Interactive Lissajous 3D Curves** (`14-parametric-lissajous.html`)

#### Binary Star Systems (5 demos):
15. **Equal Mass Binary Stars** (`15-binary-equal.html`)
16. **Unequal Mass Systems** (`16-binary-unequal.html`)
17. **Triple Star Hierarchical** (`17-triple-star.html`)
18. **Figure-8 Orbit** (`18-figure-8.html`)
19. **Lagrange Points L4/L5** (`19-lagrange.html`)

#### Multi-Body Systems (4 demos):
20. **Three-Body Chaos** (`20-three-body.html`)
21. **Planet with Four Moons** (`21-four-moons.html`)
22. **Mini Solar System** (`22-mini-solar.html`)
23. **Binary Planet System** (`23-binary-planet.html`)

#### Orbital Mechanics & Transfers (12 demos):
24. **Roche Limit** (`24-roche-limit.html`)
25. **Gravitational Slingshot** (`25-slingshot.html`)
26. **Horseshoe Orbit** (`26-horseshoe.html`)
27. **Eccentric Orbits** (`27-eccentric.html`)
28. **Orbital Precession** (`28-precession.html`)
29. **Hohmann Transfers** (`29-hohmann.html`)
30. **Geosynchronous Orbits** (`30-geosynchronous.html`)
31. **Polar Orbits** (`31-polar.html`)
32. **Retrograde Orbits** (`32-retrograde.html`)
33. **Spiral Orbital Decay** (`33-decay.html`)
34. **Escape Velocity** (`34-escape.html`)
35. **Orbital Transfers** (`35-transfers.html`)

#### Exotic Gravitational Phenomena (8 demos):
36. **Black Hole Accretion Disk** (`36-accretion.html`)
37. **Gravitational Lensing** (`37-lensing.html`)
38. **Schwarzschild Orbits** (`38-schwarzschild.html`)
39. **Frame Dragging** (`39-frame-dragging.html`)
40. **Tidal Locking** (`40-tidal-locking.html`)
41. **Hill Sphere** (`41-hill-sphere.html`)
42. **Spiral Galaxy Arms** (`42-spiral-galaxy.html`)
43. **Planetary Rings** (`43-rings.html`)

#### Orbital Resonances (4 demos):
44. **2:1 Resonance** (`44-resonance-2-1.html`)
45. **3:2 Resonance** (`45-resonance-3-2.html`)
46. **Kozai Mechanism** (`46-kozai.html`)

---

### Three.js TSL Advanced Shaders (40 demos)
**Path:** `/threejs-tsl-shaders/`
**Description:** Advanced TSL shader demonstrations with experimental effects
**Technology:** Three.js TSL, WebGPU support

#### Color Effects (10 demos):
1. **Rainbow Gradient** (`01-color-rainbow.html`)
2. **Chromatic Sphere** (`02-color-chromatic.html`)
3. **HSV Color Rotation** (`03-color-hsv.html`)
4. **Position-Based Color** (`04-color-position.html`)
5. **Pulse Glow** (`05-color-pulse.html`)
6. **Fresnel Rim Light** (`06-color-fresnel.html`)
7. **Striped Pattern** (`07-color-stripes.html`)
8. **Checkerboard** (`08-color-checker.html`)
9. **Holographic Effect** (`09-color-holographic.html`)
10. **Color Waves** (`10-color-waves.html`)

#### Displacement & Deformation (10 demos):
11. **Wave Displacement** (`11-displacement-wave.html`)
12. **Ripple Effect** (`12-displacement-ripple.html`)
13. **Twist Deformation** (`13-displacement-twist.html`)
14. **Pulsating Sphere** (`14-displacement-pulse.html`)
15. **Vertex Noise** (`15-displacement-noise.html`)
16. **Inflate/Deflate** (`16-displacement-inflate.html`)
17. **Spiky Sphere** (`17-displacement-spiky.html`)
18. **Wobble Effect** (`18-displacement-wobble.html`)
19. **Morphing Torus** (`19-displacement-morph.html`)
20. **Gravity Well** (`20-displacement-gravity.html`)

#### Animated Patterns (10 demos):
21. **Spiral Galaxy** (`21-pattern-spiral.html`)
22. **Radial Pulse** (`22-pattern-radial.html`)
23. **Flow Field** (`23-pattern-flow.html`)
24. **Kaleidoscope** (`24-pattern-kaleidoscope.html`)
25. **Tunnel Effect** (`25-pattern-tunnel.html`)
26. **Mandala Pattern** (`26-pattern-mandala.html`)
27. **Concentric Rings** (`27-pattern-rings.html`)
28. **Plasma Effect** (`28-pattern-plasma.html`)
29. **Vortex Spiral** (`29-pattern-vortex.html`)
30. **DNA Helix** (`30-pattern-dna.html`)

#### Advanced Effects (10 demos):
31. **Fractal Noise** (`31-advanced-fractal.html`)
32. **Voronoi Cells** (`32-advanced-voronoi.html`)
33. **Glitch Effect** (`33-advanced-glitch.html`)
34. **Energy Shield** (`34-advanced-shield.html`)
35. **Matrix Rain** (`35-advanced-matrix.html`)
36. **Lava Lamp** (`36-advanced-lava.html`)
37. **Crystal Refraction** (`37-advanced-crystal.html`)
38. **Neon Grid** (`38-advanced-neon.html`)
39. **Electric Plasma** (`39-advanced-plasma.html`)
40. **Caustic Water** (`40-advanced-caustic.html`)

---

### WebAssembly (18 demos)
**Path:** `/webassembly/`
**Description:** High-performance WASM visualizations
**Technology:** WebAssembly, C/Rust compiled to WASM

#### High-Performance Algorithms (8 demos):
1. **N-Body Simulation** (`demos/03-nbody-simulation.html`)
2. **Prime Number Sieve** (`demos/10-prime-sieve.html`)
3. **Hash Collision Viz** (`demos/11-hash-collision.html`)
4. **Sorting Algorithms Race** (`demos/12-sorting-race.html`)
5. **Mandelbrot Set** (`14-mandelbrot-wasm.html`)
6. **Convex Hull** (`demos/14-convex-hull.html`)
7. **Voronoi Diagram** (`demos/15-voronoi-diagram.html`)
8. **Image Processing** (`16-image-processing-wasm.html`)

#### Compiled Graphics Engines (6 demos):
9. **CPU Ray Marching** (`18-ray-marching-wasm.html`)
10. **Terrain Generator** (`demos/18-terrain-generator.html`)
11. **Metaballs** (`demos/21-metaballs.html`)
12. **Cloth Simulation** (`demos/25-cloth-simulation.html`)
13. **Hair/Grass Simulation** (`demos/26-hair-grass.html`)
14. **Marching Cubes** (`demos/28-marching-cubes.html`)

#### Complex Simulations (4 demos):
15. **Conway's Life (500×500)** (`15-conway-life-wasm.html`)
16. **Rigid Body Physics** (`17-physics-engine-wasm.html`)
17. **Boids Flocking** (`demos/34-boids-flocking.html`)
18. **Ant Colony Optimization** (`demos/35-ant-colony.html`)

---

### Complex Showcases (15 demos)
**Path:** `/complex-showcases/`
**Description:** Advanced computational simulations
**Technology:** Various advanced techniques

#### Ray Tracer (1 demo):
1. **Basic Spheres** (`ray-tracer/01-basic-spheres.html`)

#### Terrain Generation (1 demo):
2. **Diamond-Square Algorithm** (`terrain-generation/02-diamond-square.html`)

#### City Generator (1 demo):
3. **Organic Streets** (`city-generator/02-organic-streets.html`)

#### Galaxy Simulator (2 demos):
4. **Dark Matter** (`galaxy-simulator/02-dark-matter.html`)
5. **Galaxy Collision** (`galaxy-simulator/03-collision.html`)

#### Music Synthesizer (3 demos):
6. **Step Sequencer** (`music-synthesizer/02-step-sequencer.html`)
7. **Spectrum Visualizer** (`music-synthesizer/03-spectrum-visualizer.html`)
8. **Theremin** (`music-synthesizer/04-theremin.html`)

#### Ocean Waves (2 demos):
9. **Gerstner Waves** (`ocean-waves/01-gerstner-waves.html`)
10. **Wave Interference** (`ocean-waves/02-interference.html`)

#### Crowd Simulation (1 demo):
11. **Boids Flocking** (`crowd-simulation/01-boids-flocking.html`)

#### Fractal Explorer (3 demos):
12. **Mandelbrot Zoom** (`fractal-explorer/01-mandelbrot-zoom.html`)
13. **Julia Set** (`fractal-explorer/02-julia-set.html`)
14. **Burning Ship** (`fractal-explorer/03-burning-ship.html`)

#### Weather System (1 demo):
15. **Hurricane** (`weather-system/04-hurricane.html`)

---

## Generative Art & Creative Coding

### Algorithmic Art (20 demos)
**Path:** `/algorithmic-art/index.html`
**Description:** 20 dynamic visualizations in one page (all embedded)
**Technology:** Vanilla JavaScript, HTML5 Canvas

#### Embedded Demos (all in single page):
1. **Particle System** - Particle network with connections
2. **Animated Sine Waves** - Multi-colored wave patterns
3. **Rainbow Spiral** - Rotating spiral with color gradients
4. **Analog Clock** - Real-time functional clock
5. **Bouncing Balls** - Physics-based ball animation
6. **Fractal Tree** - Recursive branching tree
7. **Matrix Rain** - Digital rain effect
8. **Audio Visualizer Bars** - Frequency bar visualization
9. **Starfield Warp** - 3D star field
10. **DNA Helix** - Rotating double helix
11. **Fireworks** - Particle-based fireworks
12. **Network Graph** - Connected nodes
13. **Ripple Effect** - Interactive water ripples
14. **Double Pendulum** - Chaotic pendulum simulation
15. **Game of Life** - Conway's cellular automata
16. **Rotating 3D Cube** - Wireframe cube rotation
17. **Lissajous Curve** - Parametric curve animation
18. **Metaballs** - Blob rendering
19. **Sierpinski Triangle** - Fractal generation
20. **Flow Field** - Perlin noise flow particles

---

### P5.js Generative Art (40 demos)
**Path:** `/p5-generative-art/index.html`
**Description:** Creative coding visualizations (all embedded in one page)
**Technology:** P5.js, Creative Coding

#### Perlin Noise Landscapes (10 demos):
1. **Classic Terrain**
2. **Flowing Mountains**
3. **Ocean Waves**
4. **Cloud Formation**
5. **Topographic Map**
6. **Particle Flow Field**
7. **Noise Waves**
8. **3D Terrain**
9. **Marble Texture**
10. **Aurora Borealis**

#### Recursive Patterns (10 demos):
11. **Fractal Tree**
12. **Sierpinski Triangle**
13. **Koch Snowflake**
14. **Dragon Curve**
15. **Barnsley Fern**
16. **Pythagoras Tree**
17. **Spiral Recursion**
18. **Circle Packing**
19. **Branching Vines**
20. **Mandelbrot Set**

#### Creative Coding & Generative Art Systems (20 demos):
21. **Particle System**
22. **Flocking Behavior**
23. **Reaction Diffusion**
24. **Attraction Points**
25. **Cellular Automata**
26. **Fourier Transform**
27. **Voronoi Diagram**
28. **Chaotic Pendulum**
29. **Lissajous Curves**
30. **Strange Attractor**
31. **Phyllotaxis Spiral**
32. **Metaballs**
33. **Morphing Shapes**
34. **Plasma Effect**
35. **Kaleidoscope**
36. **Differential Growth**
37. **Spiral Galaxy**
38. **Chromatic Waves**
39. **Magnetic Field**
40. **Generative Typography**

---

### Pixi.js Sprite Animations (17 demos)
**Path:** `/pixi-sprite-animations/`
**Description:** High-performance 2D rendering demos
**Technology:** Pixi.js v7, WebGL

#### Basic Sprite Animations (10 demos):
1. **Sprite Particles** (`demos/01-sprite-particles.html`)
2. **Sprite Wave** (`demos/02-sprite-wave.html`)
3. **Sprite Spiral** (`demos/03-sprite-spiral.html`)
4. **Sprite Bounce** (`demos/04-sprite-bounce.html`)
5. **Sprite Orbit** (`demos/05-sprite-orbit.html`)
6. **Sprite Fireworks** (`demos/06-sprite-fireworks.html`)
7. **Sprite Trails** (`demos/07-sprite-trails.html`)
8. **Sprite Rotator** (`demos/08-sprite-rotator.html`)
9. **Sprite Morph** (`demos/09-sprite-morph.html`)
10. **Sprite Swarm** (`demos/10-sprite-swarm.html`)

#### Advanced Sprite Animations (3 demos):
11. **Sprite Flocking** (`demos/13-sprite-flock.html`)
12. **Sprite Nebula** (`demos/16-sprite-nebula.html`)
13. **Sprite Dance** (`demos/17-sprite-dance.html`)

#### Filter Effects (3 demos):
14. **Color Matrix Filter** (`demos/22-filter-colormatrix.html`)
15. **Noise Filter** (`demos/23-filter-noise.html`)
16. **Combined Filters** (`demos/30-filter-combined.html`)

#### Advanced Effects (1 demo):
17. **Nested Containers** (`demos/38-sprite-container.html`)

---

### Visualization Algorithms (25 demos)
**Path:** `/visualization-algorithms/`
**Description:** Advanced computational geometry algorithms
**Technology:** JavaScript, Computational Geometry

#### Voronoi Diagrams (1 demo):
1. **Animated Voronoi** (`demos/02-voronoi-animated.html`)

#### Delaunay Triangulation (1 demo):
2. **Animated Delaunay** (`demos/06-delaunay-animated.html`)

#### Metaballs (2 demos):
3. **Colorful Metaballs** (`demos/10-metaballs-colorful.html`)
4. **Mouse-Interactive** (`demos/11-metaballs-mouse.html`)

#### Strange Attractors (4 demos):
5. **Lorenz Attractor** (`demos/13-lorenz-attractor.html`)
6. **Rössler Attractor** (`demos/14-rossler-attractor.html`)
7. **Aizawa Attractor** (`demos/15-aizawa-attractor.html`)
8. **Thomas Attractor** (`demos/16-thomas-attractor.html`)

#### Fibonacci & Golden Ratio (1 demo):
9. **Golden Ratio Phyllotaxis** (`demos/18-golden-ratio-phyllotaxis.html`)

#### Reaction-Diffusion (1 demo):
10. **Coral Patterns** (`demos/23-reaction-diffusion-coral.html`)

#### Marching Squares (4 demos):
11. **Basic Marching Squares** (`demos/25-marching-squares.html`)
12. **Perlin Noise Contours** (`demos/26-marching-squares-noise.html`)
13. **Terrain Contours** (`demos/27-marching-squares-terrain.html`)
14. **Blob Isolines** (`demos/28-marching-squares-blobs.html`)

#### Quadtree Spatial Partitioning (3 demos):
15. **Point Quadtree** (`demos/29-quadtree-points.html`)
16. **Collision Detection** (`demos/30-quadtree-collision.html`)
17. **Animated Subdivision** (`demos/32-quadtree-animated.html`)

#### Pathfinding Algorithms (4 demos):
18. **A* Pathfinding** (`demos/33-astar-pathfinding.html`)
19. **Dijkstra's Algorithm** (`demos/34-dijkstra-pathfinding.html`)
20. **Breadth-First Search** (`demos/35-bfs-pathfinding.html`)
21. **Depth-First Maze** (`demos/36-dfs-maze.html`)

#### Fourier Transform Visualizations (4 demos):
22. **Fourier Epicycles** (`demos/37-fourier-epicycles.html`)
23. **Drawing with Fourier** (`demos/38-fourier-drawing.html`)
24. **Wave Synthesis** (`demos/39-fourier-wave-synthesis.html`)
25. **Circle Drawing** (`demos/40-fourier-circle-drawing.html`)

---

## Data Visualization

### D3.js Visualizations (18 demos)
**Path:** `/d3js/`
**Description:** Interactive data visualizations built with D3.js
**Technology:** D3.js v7, SVG

#### Force-Directed Graphs (7 demos):
1. **Basic Network** (`force-directed/01-basic-network.html`)
2. **Collision Detection** (`force-directed/02-collision-detection.html`)
3. **Clustered Network** (`force-directed/03-clustered-network.html`)
4. **Dynamic Network** (`force-directed/04-dynamic-network.html`) - Add/Remove
5. **Hierarchical Force Layout** (`force-directed/05-hierarchical-force.html`)
6. **Charged Particles** (`force-directed/06-charged-particles.html`)
7. **Social Network** (`force-directed/07-social-network.html`)

#### Hierarchical Trees (2 demos):
8. **Dendrogram** (`hierarchical-trees/04-dendrogram.html`)
9. **Treemap** (`hierarchical-trees/05-treemap.html`)

#### Sankey Diagrams (3 demos):
10. **Budget Allocation** (`sankey/02-budget-allocation.html`)
11. **Website Traffic Flow** (`sankey/05-traffic-flow.html`)
12. **Food Chain** (`sankey/07-food-chain.html`)

#### Chord Diagrams (2 demos):
13. **Migration Flow** (`chord/01-migration-flow.html`)
14. **Trade Relationships** (`chord/02-trade-relationships.html`)

#### Geographic Maps (2 demos):
15. **Flow Map** (`maps/04-flow-map.html`)
16. **Hexbin Map** (`maps/05-hex-bin-map.html`)

#### Real-time Streaming Data (2 demos):
17. **Particle Stream** (`streaming/03-particle-stream.html`)
18. **Streaming Heatmap** (`streaming/06-heatmap-stream.html`)

---

### Infographics (6 demos)
**Path:** `/infographics/`
**Description:** Interactive data visualizations and animated charts
**Technology:** Vanilla JavaScript

#### Demos:
1. **Area Chart** (`demos/area-chart.html`)
2. **3D Card Flip Stats** (`demos/card-flip.html`)
3. **Line Chart** (`demos/line-chart.html`)
4. **Network Graph** (`demos/network.html`)
5. **Radar Chart** (`demos/radar.html`)
6. **Timeline** (`demos/timeline.html`)

---

### Web Audio API (40 demos)
**Path:** `/web-audio-api/`
**Description:** Advanced audio visualizations
**Technology:** Web Audio API, Tone.js, Canvas/WebGL

#### Real-time FFT Visualizers (10 demos):
1. **Classic Frequency Bars** (`demos/01-classic-bars.html`)
2. **Circular Spectrum** (`demos/02-circular-spectrum.html`)
3. **Symmetrical Bars** (`demos/03-symmetrical-bars.html`)
4. **Waterfall Spectrogram** (`demos/04-waterfall-spectrum.html`)
5. **Radial Equalizer** (`demos/05-radial-equalizer.html`)
6. **Particle Frequency** (`demos/06-particle-frequency.html`)
7. **Spiral Spectrum** (`demos/07-spiral-spectrum.html`)
8. **Flower Visualizer** (`demos/08-flower-visualizer.html`)
9. **Dual Spectrum Mirror** (`demos/09-dual-spectrum.html`)
10. **Kaleidoscope FFT** (`demos/10-kaleidoscope-fft.html`)

#### Waveform Displays (8 demos):
11. **Classic Oscilloscope** (`demos/11-oscilloscope.html`)
12. **Lissajous Patterns** (`demos/12-lissajous.html`)
13. **Circular Waveform** (`demos/13-circular-waveform.html`)
14. **3D Ribbon Wave** (`demos/14-ribbon-wave.html`)
15. **Dual Channel Scope** (`demos/15-dual-oscilloscope.html`)
16. **Wave Tunnel** (`demos/16-wave-tunnel.html`)
17. **Waveform Particles** (`demos/17-waveform-particles.html`)
18. **Morphing Waveform** (`demos/18-morphing-wave.html`)

#### 3D Audio Visualizations (8 demos):
19. **3D Frequency Bars** (`demos/19-3d-bars.html`)
20. **Reactive 3D Sphere** (`demos/20-3d-sphere.html`)
21. **Audio Tunnel** (`demos/21-3d-tunnel.html`)
22. **Audio Landscape** (`demos/22-3d-landscape.html`)
23. **3D Cube Matrix** (`demos/23-3d-cube-matrix.html`)
24. **3D Wave Surface** (`demos/24-3d-wave-surface.html`)
25. **Audio Gyroscope** (`demos/25-3d-gyroscope.html`)
26. **Audio Galaxy** (`demos/26-3d-galaxy.html`)

#### Beat Detection Systems (6 demos):
27. **Kick Drum Detector** (`demos/27-kick-detector.html`)
28. **Beat Pulse Circles** (`demos/28-beat-circles.html`)
29. **Rhythm Grid** (`demos/29-rhythm-grid.html`)
30. **Beat Particle Burst** (`demos/30-beat-particles.html`)
31. **BPM Analyzer** (`demos/31-bpm-analyzer.html`)
32. **Multi-Band Beat Detection** (`demos/32-multi-band-beat.html`)

#### MIDI Input Visualizations (4 demos):
33. **Piano Roll Visualizer** (`demos/33-piano-roll.html`)
34. **MIDI Particle System** (`demos/34-midi-particles.html`)
35. **Velocity Spectrum** (`demos/35-velocity-spectrum.html`)
36. **MIDI Fireworks** (`demos/36-midi-fireworks.html`)

#### Tone.js Synthesizer Integration (4 demos):
37. **Visual Synthesizer Keyboard** (`demos/37-synth-keyboard.html`)
38. **Step Sequencer Visualizer** (`demos/38-step-sequencer.html`)
39. **FM Synthesis Explorer** (`demos/39-fm-synth.html`)
40. **Modular Synth Patcher** (`demos/40-modular-synth.html`)

---

## Cellular Automata

### Wolfram Cellular Automata (1 interactive explorer)
**Path:** `/wolfram-ca/index.html`
**Description:** GPU-accelerated explorer of all 256 elementary CA rules
**Technology:** Three.js TSL, WebGPU, GPU Compute Shaders

#### Interactive Views/Tabs:
1. **GPU Evolution** - Real-time CA with featured rules (30, 90, 110, 184, etc.)
2. **3D Visualization** - Time evolution rendered in 3D space
3. **Rule Space Explorer** - Gallery grid showing all 256 rules simultaneously
4. **Rule Designer** - Interactive tool to design custom rules
5. **Pattern Analysis** - Detection of gliders, oscillators, patterns
6. **Entropy Analysis** - Shannon entropy and Wolfram classification

#### Featured Rules:
- **Rule 30** - Chaotic, pseudo-random
- **Rule 90** - Sierpiński triangle
- **Rule 110** - Turing complete
- **Rule 184** - Traffic flow model
- **Rule 150** - Additive CA
- **Rule 73** - Complex structures
- **Rule 45** - Symmetric patterns
- **Rule 126** - Order & chaos

---

### Game of Life Variations (23 demos)
**Path:** `/game-of-life/`
**Description:** 23 creative interpretations of Conway's Game of Life
**Technology:** Vanilla JavaScript, HTML5 Canvas

#### Classic Variations (11 demos):
1. **Rainbow Cycling** (`classic/demos/01-rainbow-cycling.html`)
2. **Hexagonal Grid** (`classic/demos/02-hexagonal-grid.html`)
3. **Ghost Trails** (`classic/demos/05-ghost-trails.html`)
4. **Growing Circles** (`classic/demos/06-growing-circles.html`)
5. **Multi-Species** (`classic/demos/08-multi-species.html`)
6. **Heat Map** (`classic/demos/09-heat-map.html`)
7. **Pixel Art** (`classic/demos/11-pixel-art.html`)
8. **Network Web** (`classic/demos/13-network-web.html`)
9. **Kaleidoscope** (`classic/demos/15-kaleidoscope.html`)
10. **Matrix Rain** (`classic/demos/16-matrix-rain.html`)
11. **Musical Viz** (`classic/demos/19-musical-viz.html`)

#### Set 1 Visualizations (6 demos):
12. **Visualization 1** (`set1/viz1.html`)
13. **Visualization 4** (`set1/viz4.html`)
14. **Visualization 5** (`set1/viz5.html`)
15. **Visualization 6** (`set1/viz6.html`)
16. **Visualization 16** (`set1/viz16.html`)
17. **Visualization 17** (`set1/viz17.html`)

#### Set 2 Themed Variations (6 demos):
18. **3D Heightmap** (`set2/gol_3d_heightmap.html`)
19. **Color Trails** (`set2/gol_color_trails.html`)
20. **Emoji Life** (`set2/gol_emoji.html`)
21. **Ghost Trails (Themed)** (`set2/gol_ghost_trails.html`)
22. **Interactive Paint** (`set2/gol_interactive_paint.html`)
23. **Network Connections** (`set2/gol_network.html`)

---

### Petri Arena (20 demos)
**Path:** `/petri-arena/`
**Description:** Petri Dish Neural Cellular Automata (PD-NCA)
**Technology:** Pure HTML5 Canvas & JavaScript

#### Basic Mechanics (5 demos):
1. **Single Agent Growth** (`01-single-agent.html`)
2. **Two Agent Competition** (`02-two-agents.html`)
3. **Rock-Paper-Scissors 3-Way** (`03-rps.html`)
4. **Environment Pressure (E)** (`04-environment.html`)
5. **Softmax Temperature (τ)** (`05-temperature.html`)

#### Aliveness & Dynamics (5 demos):
6. **Aliveness Threshold (α)** (`06-aliveness.html`)
7. **Top-2 Occupancy** (`07-top2.html`)
8. **Four-Phase Step Breakdown** (`08-phases.html`)
9. **Learning vs No-Learning** (`09-learning.html`)
10. **Cycle Detection** (`10-cycles.html`)

#### Metrics & Patterns (5 demos):
11. **Entropy Tracking** (`11-entropy.html`)
12. **Territory Control Heatmap** (`12-heatmap.html`)
13. **Attack/Defense Channels** (`13-channels.html`)
14. **Multi-Agent Free-for-All** (`14-multi-agent.html`)
15. **Spatial Waves & Patterns** (`15-waves.html`)

#### Advanced Features (5 demos):
16. **Walls & Obstacles** (`16-obstacles.html`)
17. **Seasonal Environment** (`17-seasonal.html`)
18. **Hypercycle Attempt** (`18-hypercycle.html`)
19. **Cell State Inspector** (`19-inspector.html`)
20. **Metrics Dashboard** (`20-dashboard.html`)

---

## Mathematical & Geometric Art

### Geometric Patterns (6 demos)
**Path:** `/geometric-patterns/`
**Description:** Mathematical and cultural pattern explorations
**Technology:** HTML5 Canvas 2D

#### Cultural Geometric Traditions (3 demos):
1. **Islamic Geometric Art** (`01-islamic.html`)
   - 8-point and 12-point stars
   - Hexagonal tessellations

2. **Sacred Geometry** (`02-sacred.html`)
   - Flower of Life
   - Metatron's Cube
   - Sri Yantra

3. **Celtic Knots** (`03-celtic.html`)
   - Triquetra
   - Woven designs

#### Mathematical Tiling & Tessellations (3 demos):
4. **Penrose Tiling** (`04-penrose.html`)
   - Aperiodic with fivefold symmetry

5. **Truchet Tiles** (`05-truchet.html`)
   - Random rotations create emergent maze patterns

6. **Voronoi Diagram Art** (`06-voronoi.html`)
   - Dynamic space partitioning

---

### Mathematical Art (10 demos)
**Path:** `/mathematical-art/`
**Description:** Beauty of mathematics through parametric equations
**Technology:** Vanilla JavaScript, HTML5 Canvas

#### Parametric Curves & Patterns (8 demos):
1. **Interactive Spirograph** (`01-spirograph.html`)
2. **Harmonograph Simulation** (`02-harmonograph.html`)
3. **Rose Curves (Rhodonea)** (`03-rose-curves.html`)
4. **Epicycloids & Hypocycloids** (`04-epicycloids.html`)
5. **Fourier Series Epicycles** (`05-fourier-epicycles.html`)
6. **Butterfly Curve** (`06-butterfly.html`)
7. **Cycloid ("Helen of Geometry")** (`07-cycloid.html`)
8. **Parametric Curves Gallery** (`08-parametric-gallery.html`)

#### Fractals & Complex Mathematics (2 demos):
9. **Mandelbrot Set Explorer** (`09-mandelbrot.html`)
10. **3D Mathematical Knots** (`10-knots-3d.html`)

---

### Optical Illusions (12 demos)
**Path:** `/optical-illusions/`
**Description:** Visual perception phenomena
**Technology:** Vanilla JavaScript, HTML5 Canvas

#### Geometric and Pattern Illusions (3 demos):
1. **Moiré Patterns** (`01-moire.html`)
2. **Fraser Spiral Illusion** (`02-fraser-spiral.html`)
3. **Café Wall Illusion** (`03-cafe-wall.html`)

#### Motion and Peripheral Vision Illusions (2 demos):
4. **Peripheral Drift Illusion** (`04-peripheral-drift.html`)
5. **Motion-Induced Blindness** (`05-motion-blindness.html`)

*Note: Index shows 5 demos, but main page lists 12 - additional demos may exist*

---

### Data Structures (5 demos)
**Path:** `/data-structures/`
**Description:** Interactive CS data structures visualizations
**Technology:** Pure Canvas rendering with vanilla JavaScript

#### Demos:
1. **Binary Search Tree** (`01-bst.html`)
   - Interactive BST with insert, delete, search
   - Three traversal methods (in-order, pre-order, post-order)

2. **Heap Visualization** (`02-heap.html`)
   - Min/max heap operations
   - Dual array and tree representations
   - Heapify, bubble-up/bubble-down animations

3. **Hash Table** (`03-hash-table.html`)
   - Collision resolution strategies (chaining, linear probing, quadratic probing)
   - Hash function behavior and bucket distribution

4. **Graph Traversal (BFS & DFS)** (`04-graph.html`)
   - Interactive graph builder
   - Breadth-first and depth-first search algorithms

5. **Trie (Prefix Tree)** (`05-trie.html`)
   - String operations - insert, search, delete words
   - Find all words with prefix
   - Autocomplete demonstrations

---

### Lissajous Curves (1 demo)
**Path:** `/lissajous/`
**Description:** Mathematical beauty through parametric equations
**Technology:** Vanilla JavaScript

#### Demo:
1. **Interactive Lissajous Generator** (`lissajous.html`)

---

### Visualizations (9 demos)
**Path:** `/visualizations/`
**Description:** Dynamic HTML5 and JavaScript visualizations
**Technology:** HTML5 Canvas, Vanilla JavaScript

#### Demos:
1. **Particle System** (`demos/01-particle-system.html`)
2. **Wave Animation** (`demos/02-wave-animation.html`)
3. **Rotating Cube** (`demos/03-rotating-cube.html`)
4. **Animated Clock** (`demos/07-animated-clock.html`)
5. **Fireworks** (`demos/08-fireworks.html`)
6. **Matrix Rain** (`demos/09-matrix-rain.html`)
7. **Network Graph** (`demos/11-network-graph.html`)
8. **Audio Visualizer** (`demos/13-audio-visualizer.html`)
9. **Solar System** (`demos/18-solar-system.html`)

---

## Pure CSS & SVG

### CSS Art (6 demos)
**Path:** `/css-art/`
**Description:** Pure CSS artistic visualizations
**Technology:** Pure CSS with minimal JavaScript

#### Demos:
1. **3D Cube Gallery** (`01-3d-cube.html`)
   - transform-style: preserve-3d
   - 3D transforms

2. **CSS Grid Patterns** (`02-grid-patterns.html`)
   - Grid layout
   - Gradient animations
   - Staggered timing

3. **Blend Modes Art** (`03-blend-modes.html`)
   - mix-blend-mode
   - Overlapping gradients

4. **Clip-Path Morphing** (`04-clip-path.html`)
   - clip-path polygons
   - Shape morphing

5. **Filter Effects Art** (`05-filter-effects.html`)
   - blur, hue-rotate, saturate, brightness

6. **CSS Variables Animation** (`06-css-variables.html`)
   - Custom properties
   - Mouse-interactive art

---

### SVG Animations (5 demos)
**Path:** `/svg-animations/`
**Description:** Scalable Vector Graphics in motion
**Technology:** SVG, CSS3 Animations, JavaScript, SMIL

#### Demos:
1. **SVG Path Morphing** (`01-path-morphing.html`)
   - Smooth shape transitions
   - Path interpolation
   - Gradient fills
   - Interactive

2. **SVG Line Drawing** (`02-line-drawing.html`)
   - stroke-dashoffset animations
   - Rockets, circuit boards
   - Sacred geometry, DNA helixes

3. **SVG Filter Effects** (`03-filter-effects.html`)
   - feTurbulence, feDisplacementMap
   - feColorMatrix, feGaussianBlur
   - Animated parameters

4. **SVG Clip Path Art** (`04-clip-path.html`)
   - Animated clipping masks
   - Circle blooms, polygon morphing
   - Wave reveals, iris transitions

5. **SVG Pattern Library** (`05-pattern-library.html`)
   - 16 unique animated patterns
   - Stripes, dots, waves, spirals
   - Hexagons, stars

---

## Games & Interactive

### Games (1 demo)
**Path:** `/games/`
**Description:** Neural Cellular Automata and experimental simulations
**Technology:** JavaScript

#### Demo:
1. **Petri Dish Neural Cellular Automata** (`petri-dish-nca.html`)

---

## Quick Reference

### Technology Stack Breakdown

| Technology | Demo Count | Galleries |
|-----------|------------|-----------|
| **Vanilla JavaScript** | 400+ | Algorithmic Art, Game of Life, Infographics, Visualizations, Agent-Based Models, Physics Simulations |
| **Three.js** | 120+ | Three.js Gallery, TSL Shaders, Complex Showcases, some Physics demos |
| **WebGL/GLSL** | 29 | WebGL Shaders |
| **WebGPU** | 13+ | WebGPU, Wolfram CA |
| **P5.js** | 40 | P5.js Generative Art |
| **Pixi.js** | 17 | Pixi.js Sprite Animations |
| **D3.js** | 18 | D3.js Visualizations |
| **Web Audio API** | 40 | Web Audio API |
| **WebAssembly** | 18 | WebAssembly |
| **Pure CSS** | 6 | CSS Art |
| **SVG** | 5 | SVG Animations |
| **HTML5 Canvas 2D** | 200+ | Particles, Followers, Chaos, etc. |

---

### Difficulty Levels

#### Beginner-Friendly
- Algorithmic Art
- Visualizations
- Infographics
- Game of Life Variations
- Particle Systems
- CSS Art
- SVG Animations

#### Intermediate
- P5.js Generative Art
- Pixi.js Sprite Animations
- D3.js Visualizations
- Three.js 3D Gallery
- Boids Flocking
- Simple Physics Simulations
- Wolf-Sheep Predation
- Fire Percolation

#### Advanced
- WebGL Shaders
- WebGPU Compute Shaders
- TSL Shaders
- WebAssembly
- Complex Showcases
- Agent-Based Economics
- Altruism Evolution
- Advanced Physics (Ising, Reaction-Diffusion)
- Gravity & Orbits

#### Expert
- Petri Arena (PD-NCA)
- Emergent Behaviors (50 demos)
- Wolfram CA Explorer
- Full Economics Simulations
- Multi-body Gravitational Systems
- GPU-Accelerated Simulations

---

### Performance Requirements

#### Low Performance (runs on any device)
- CSS Art
- SVG Animations
- Basic Visualizations
- Simple Particle Systems
- Algorithmic Art

#### Medium Performance (modern laptop/desktop recommended)
- Three.js 3D Gallery
- P5.js Generative Art
- D3.js Visualizations
- Pixi.js Animations
- Agent-Based Models (basic)
- Game of Life Variations

#### High Performance (dedicated GPU recommended)
- WebGL Shaders
- WebGPU Compute Shaders
- TSL Shaders
- Complex Showcases
- Advanced Physics Simulations
- Large-scale Agent-Based Models
- GPU Particle Systems (100k+)

#### Ultra-High Performance (modern GPU required)
- WebGPU Ray Tracing
- Wolfram CA Explorer (GPU mode)
- Petri Arena (advanced scenarios)
- Physics Simulations (3D, large-scale)
- Instanced Geometry (100k+ objects)
- Point Clouds (500k+ points)

---

## Project Statistics

**Total Interactive Demos:** 1,017+
**Total Galleries:** 45+
**Lines of Code:** 150,000+
**Total File Size:** ~50 MB
**Technologies Used:** 12+
**No Dependencies:** ✓ (all via CDN)
**No Build System:** ✓ (pure static HTML)
**Browser Compatibility:** Modern evergreen browsers

---

## Educational Value

### Computer Science Topics Covered
- **Algorithms:** Pathfinding (A*, Dijkstra, BFS, DFS), Sorting, Spatial partitioning (Quadtree, Voronoi, Delaunay)
- **Data Structures:** BST, Heap, Hash Table, Graph, Trie
- **Artificial Intelligence:** Boids, Genetic Algorithms, Neural Evolution, Swarm Intelligence
- **Graphics Programming:** WebGL, WebGPU, Shaders, Ray Tracing, Ray Marching
- **Physics Simulation:** N-body, Fluid Dynamics, Collision Detection, Soft Body
- **Complexity Science:** Cellular Automata, Emergence, Self-Organization, Chaos Theory

### Science Topics Covered
- **Biology:** Evolution, Population Dynamics, Ecosystems, Predator-Prey, L-Systems
- **Physics:** Orbital Mechanics, Wave Interference, Electromagnetism, Fluid Dynamics, Chaos
- **Chemistry:** Reaction-Diffusion, Molecular Structures
- **Economics:** Market Dynamics, Wealth Distribution, Trade Networks, Resource Allocation
- **Sociology:** Segregation, Cooperation, Ethnocentrism, Epidemic Spread
- **Mathematics:** Fractals, Parametric Curves, Strange Attractors, Fourier Transforms

---

## Usage Notes

### Opening Demos
All demos can be opened directly in a browser:
```bash
# Option 1: Direct file open
open index.html
open threejs/01-rotating-cube.html

# Option 2: Local server (recommended for some demos)
python3 -m http.server 8000
# Navigate to http://localhost:8000
```

### Browser Requirements
- **Chrome/Edge:** Full support (recommended)
- **Firefox:** Full support
- **Safari:** Full support (WebGPU limited)
- **WebGL 2.0:** Required for shader demos
- **WebGPU:** Optional (graceful degradation)

### Performance Tips
1. Close other browser tabs when running GPU-heavy demos
2. Use hardware acceleration in browser settings
3. For particle systems, reduce particle count if laggy
4. Some demos have built-in performance controls

---

## Contributing

This project welcomes contributions! Areas for expansion:
- New visualization categories
- Performance optimizations
- Mobile responsiveness
- Additional educational content
- Accessibility improvements
- More interactive controls

---

## License & Attribution

**Project:** CCAB (Creative Code and Algorithmic Beauty)
**Repository:** github.com/user/ccab
**License:** MIT (see LICENSE file)

### Technologies Credited:
- Three.js - Ricardo Cabello (mrdoob)
- D3.js - Mike Bostock
- P5.js - Processing Foundation
- Pixi.js - GoodBoyDigital
- Tone.js - Yotam Mann
- WebGL - Khronos Group
- WebGPU - W3C

---

**End of Documentation**

*For updates, issues, or questions, please visit the GitHub repository.*
