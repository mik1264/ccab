# CCAB Simulation Catalog

A comprehensive catalog of all 936 browser-based simulations and visualizations in the Creative Code Art Browser (CCAB) collection.

---

## Overview

| Statistic | Value |
|-----------|-------|
| **Total Simulations** | 936 |
| **Categories** | 50 |
| **Primary Technologies** | Canvas 2D, WebGL, Three.js, D3.js, PixiJS, Web Audio API, WebAssembly |

---

## Technology Reference

| Technology | Description | Use Cases |
|------------|-------------|-----------|
| **Canvas 2D** | HTML5 Canvas with 2D rendering context | Most simulations, particle systems, cellular automata |
| **WebGL** | GPU-accelerated graphics via GLSL shaders | Fractals, ray marching, fluid dynamics |
| **Three.js** | High-level 3D library built on WebGL | 3D visualizations, TSL shaders, geometry |
| **D3.js** | Data-driven document visualization | Network graphs, charts, Sankey diagrams |
| **PixiJS** | 2D WebGL rendering engine | Sprite animations, high-performance 2D |
| **Lottie.js** | After Effects animation player | UI animations, icons |
| **Web Audio API** | Browser audio synthesis/analysis | Audio visualizers, synthesizers |
| **WebAssembly** | Near-native performance computation | N-body, sorting, metaballs |
| **SVG** | Scalable Vector Graphics | Animations, charts, patterns |
| **CSS** | Pure CSS animations and effects | 3D transforms, blend modes |

---

## Table of Contents

1. [ABM Economics](#abm-economics)
2. [Algorithmic Art](#algorithmic-art)
3. [Altruism Evolution](#altruism-evolution)
4. [Ancient Economy ABM](#ancient-economy-abm)
5. [Autumn Leaf Visualizations](#autumn-leaf-visualizations)
6. [Biological Simulations](#biological-simulations)
7. [Boids Flocking Visualizations](#boids-flocking-visualizations)
8. [BZ Reaction](#bz-reaction)
9. [Chaos Attractors](#chaos-attractors)
10. [Chaos Game](#chaos-game)
11. [Complex Showcases](#complex-showcases)
12. [CSS Art](#css-art)
13. [D3.js Visualizations](#d3js-visualizations)
14. [Data Structures](#data-structures)
15. [DLA Fractals](#dla-fractals)
16. [Double Pendulum](#double-pendulum)
17. [Elliptic Curve Murmurations](#elliptic-curve-murmurations)
18. [Emergent Behaviors](#emergent-behaviors)
19. [Ethnocentrism](#ethnocentrism)
20. [Fire Percolation](#fire-percolation)
21. [Follower Visualizations](#follower-visualizations)
22. [Fourier Epicycles](#fourier-epicycles)
23. [Game of Life](#game-of-life)
24. [Games](#games)
25. [Genetic Algorithm](#genetic-algorithm)
26. [Geometric Patterns](#geometric-patterns)
27. [Gravity Orbits](#gravity-orbits)
28. [Infographics](#infographics)
29. [Ising Model](#ising-model)
30. [L-Systems](#l-systems)
31. [Langton's Ant](#langtons-ant)
32. [Lissajous](#lissajous)
33. [Lorenz Attractor](#lorenz-attractor)
34. [Lottie Animations](#lottie-animations)
35. [Mandelbrot Julia](#mandelbrot-julia)
36. [Mathematical Art](#mathematical-art)
37. [Metaballs](#metaballs)
38. [Optical Illusions](#optical-illusions)
39. [Particle Effects](#particle-effects)
40. [Particle Systems](#particle-systems)
41. [Pathfinding](#pathfinding)
42. [Percolation](#percolation)
43. [Petri Arena](#petri-arena)
44. [Physics Simulations](#physics-simulations)
45. [Pixi Sprite Animations](#pixi-sprite-animations)
46. [Procedural Terrain](#procedural-terrain)
47. [Random Walk](#random-walk)
48. [Ray Marching](#ray-marching)
49. [Reaction Diffusion](#reaction-diffusion)
50. [Renaissance EconSim](#renaissance-econsim)
51. [Sandpile](#sandpile)
52. [Schelling Segregation](#schelling-segregation)
53. [Scientific Visualizations](#scientific-visualizations)
54. [Simulations](#simulations)
55. [Solar Flare Visualizations](#solar-flare-visualizations)
56. [Spatial Partitioning](#spatial-partitioning)
57. [Sugarscape](#sugarscape)
58. [Sugarscape Inequality](#sugarscape-inequality)
59. [SVG Animations](#svg-animations)
60. [Three.js](#threejs)
61. [Three.js TSL Shaders](#threejs-tsl-shaders)
62. [TSL Shaders](#tsl-shaders)
63. [Virus Epidemic Models](#virus-epidemic-models)
64. [Visual Essays](#visual-essays)
65. [Visualization Algorithms](#visualization-algorithms)
66. [Visualizations](#visualizations)
67. [Voronoi Delaunay](#voronoi-delaunay)
68. [Wave Function Collapse](#wave-function-collapse)
69. [Wealth Distribution](#wealth-distribution)
70. [Web Audio API](#web-audio-api)
71. [WebAssembly](#webassembly)
72. [WebGL Shaders](#webgl-shaders)
73. [Wolf Sheep Predation](#wolf-sheep-predation)
74. [Wolfram CA](#wolfram-ca)

---

## ABM Economics

Agent-based macroeconomic models with households, firms, and banks. Based on research from [INET Oxford](https://www.inet.ox.ac.uk/news/agent-based-modelling-comes-of-age) and central banks worldwide, these simulations demonstrate how aggregate economic behavior emerges from individual agent interactions, challenging traditional equilibrium-based DSGE models.

| # | File | Description | Technology |
|---|------|-------------|------------|
| 1 | 01-simple-macro-abm.html | **Introduction to Agent-Based Macroeconomics.** Simulates heterogeneous economic agents (100 households, 10 firms, 1 bank) making boundedly rational decisions. Demonstrates GDP, unemployment, and inflation emerging from bottom-up interactions. | Canvas 2D |
| 2 | 02-intermediate-policy-lab.html | **Interactive policy experimentation platform.** 1000 households, 50 firms with Taylor Rule monetary policy. Explore how fiscal and monetary policies affect an agent-based economy. See emergent effects like clustered volatility that traditional models miss. | Canvas 2D |
| 3 | 03-full-netlogo-simulation.html | **Full NetLogo-style comprehensive simulation.** 5000 households, 200 firms, 5 banks with ODD protocol. Demonstrates that ABMs can achieve forecasting performance competitive with VAR and DSGE models. | Canvas 2D |
| 4 | index.html | Gallery navigation page | HTML/CSS |

---

## Algorithmic Art

Generative art using mathematical algorithms.

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | 20 canvas-based generative art demos: particle systems, fractals, Game of Life, metaballs, flow fields | Canvas 2D |

---

## Altruism Evolution

Evolutionary game theory simulations studying cooperation vs selfishness.

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-classic-grid.html | GPU-accelerated altruism evolution with fitness-based reproduction | WebGL (Three.js) |
| 2 | 02-population-dynamics.html | Real-time line charts tracking altruistic vs selfish population | Canvas 2D |
| 3 | 03-hexagonal-grid.html | Altruism simulation on hexagonal tessellation with 6-neighbor interactions | Canvas 2D |
| 4 | 05-fitness-landscape.html | 3D surface plot showing fitness values across parameter space | Canvas 2D |
| 5 | 06-radial-grid.html | Circular grid layout with radial symmetry | Canvas 2D |
| 6 | 09-agent-genealogy.html | Family tree visualization tracking ancestor-descendant relationships | Canvas 2D |
| 7 | 10-environmental-gradient.html | Spatial gradient in harshness parameter affecting survival | Canvas 2D |
| 8 | 11-time-lapse-evolution.html | Accelerated playback showing long-term evolutionary dynamics | Canvas 2D |
| 9 | 12-cluster-analysis.html | Spatial clustering metrics and visualization of altruistic groups | Canvas 2D |
| 10 | 13-interactive-sandbox.html | User can paint altruists/selfish agents and observe evolution | Canvas 2D |
| 11 | 14-phase-diagram.html | Parameter space exploration showing regime transitions | Canvas 2D |
| 12 | 15-wave-propagation.html | Spatial waves of altruism spreading through population | Canvas 2D |
| 13 | 16-multi-scenario-comparison.html | Side-by-side comparison of different parameter sets | Canvas 2D |
| 14 | 18-genetic-flow.html | Flow field visualization showing strategy diffusion | Canvas 2D |
| 15 | 19-sound-visualization.html | Audio synthesis based on population dynamics | Canvas 2D + Web Audio |
| 16 | 20-evolutionary-story.html | Narrative presentation of evolution with text and visuals | Canvas 2D |
| 17 | index.html | Gallery navigation page | HTML/CSS |

---

## Ancient Economy ABM

Agent-based models of historical economic systems, exploring pre-monetary exchange and the emergence of currency.

| # | File | Description | Technology |
|---|------|-------------|------------|
| 1 | m0-prototype.html | **Pre-monetary exchange systems and early economic structures.** Models bartering, gift economies, and the emergence of currency. Demonstrates how complex trade networks can emerge from simple agent rules in ancient societies. | Canvas 2D |
| 2 | index.html | Gallery navigation page | HTML/CSS |

---

## Autumn Leaf Visualizations

Scientific visualization of autumn leaf color changes and physics.

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-chlorophyll-degradation.html | Grid of leaves showing chlorophyll breakdown revealing carotene | Canvas 2D |
| 2 | 02-falling-leaves-physics.html | Physics simulation of leaves falling with wind and gravity | Canvas 2D |
| 3 | 03-seasonal-tree-transition.html | Animated tree changing from green to autumn colors | Canvas 2D |
| 4 | 04-anthocyanin-production.html | Red/purple pigment production in leaves | Canvas 2D |
| 5 | 05-wind-and-rain-effects.html | Environmental factors affecting leaf color and detachment | Canvas 2D |
| 6 | 06-interactive-leaf-chemistry.html | User controls chemical composition to see color changes | Canvas 2D |
| 7 | 07-temperature-gradient-tree.html | Tree with spatial temperature variation affecting color | Canvas 2D |
| 8 | 08-leaf-particle-storm.html | Particle system with thousands of falling leaves | Canvas 2D |
| 9 | 09-day-night-cycle.html | 24-hour cycle affecting leaf colors and visibility | Canvas 2D |
| 10 | 10-fractal-autumn-tree.html | L-system generated fractal tree with autumn colors | Canvas 2D |
| 11 | 12-webgl-shader-leaves.html | GPU-accelerated leaf rendering using fragment shaders | WebGL |
| 12 | 13-multiple-tree-varieties.html | Different species (maple, oak, birch) with distinct patterns | Canvas 2D |
| 13 | 14-chemical-flow-visualization.html | Flow fields showing pigment diffusion within leaves | Canvas 2D |
| 14 | 15-ground-accumulation.html | Fallen leaves accumulating with depth layering | Canvas 2D |
| 15 | 16-timelapse-season.html | Accelerated progression from summer through autumn | Canvas 2D |
| 16 | 17-microscopic-cell-view.html | Cellular-level view of chloroplast breakdown | Canvas 2D |
| 17 | 18-forest-canopy-view.html | Top-down view of forest canopy color changes | Canvas 2D |
| 18 | 19-branch-progression.html | Individual branches showing progressive color change | Canvas 2D |
| 19 | 20-complete-ecosystem.html | Integrated simulation with trees, weather, soil, wildlife | Canvas 2D |
| 20 | index.html | Gallery navigation page | HTML/CSS |

---

## Biological Simulations

Evolution, L-systems, and reaction-diffusion patterns.

### Evolution Subdirectory

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-genetic-creatures.html | Evolving creatures with genetic algorithms and mutations | Canvas 2D |
| 2 | 02-natural-selection.html | Survival of fittest based on environmental fitness | Canvas 2D |
| 3 | 03-survival-fittest.html | Competition between agents with different traits | Canvas 2D |
| 4 | 04-gene-pool.html | Population genetics with allele frequencies | Canvas 2D |
| 5 | 05-ecosystem-evolution.html | Multi-species ecosystem with predator-prey dynamics | Canvas 2D |
| 6 | 06-neural-evolution.html | Evolving neural networks controlling agent behavior | Canvas 2D |
| 7 | 07-morphology-evolution.html | Body shape evolution for locomotion efficiency | Canvas 2D |
| 8 | 08-cooperation-competition.html | Mixed strategies between cooperative and competitive agents | Canvas 2D |

### L-Systems Subdirectory

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-basic-tree.html | L-system fractal tree generation | Canvas 2D |
| 2 | 02-fractal-plant.html | Complex plant structures using L-system grammars | Canvas 2D |
| 3 | 03-koch-snowflake.html | Iterative fractal snowflake pattern | Canvas 2D |

### Reaction-Diffusion Subdirectory

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-gray-scott.html | Reaction-diffusion producing Turing patterns | Canvas 2D |
| 2 | 04-spots-patterns.html | Animal coat patterns (leopard spots, zebra stripes) | Canvas 2D |
| 3 | 06-mitosis.html | Cell division using reaction-diffusion | Canvas 2D |

### Other

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | plough-and-plague.html | Historical epidemic spread simulation | Canvas 2D |
| 2 | index.html | Gallery navigation page | HTML/CSS |

---

## Boids Flocking Visualizations

Craig Reynolds' boids algorithm with 20 variations.

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-classic-boids.html | Original 1986 algorithm: separation, alignment, cohesion | Canvas 2D |
| 2 | 02-predator-avoidance.html | Boids fleeing from predator agents | Canvas 2D |
| 3 | 03-obstacle-avoidance.html | Flocking around static obstacles | Canvas 2D |
| 4 | 04-wind-fields.html | External force fields affecting movement | Canvas 2D |
| 5 | 05-interactive-parameters.html | Real-time parameter tuning with sliders | Canvas 2D |
| 6 | 07-path-trails.html | Motion trails showing boid trajectories | Canvas 2D |
| 7 | 08-multi-species.html | Multiple flocks with different behaviors | Canvas 2D |
| 8 | 09-leader-following.html | Flock following designated leader | Canvas 2D |
| 9 | 10-goal-seeking.html | Boids navigating toward target destination | Canvas 2D |
| 10 | 11-perching-behavior.html | Boids landing on surfaces and resting | Canvas 2D |
| 11 | 12-velocity-vectors.html | Debug view showing velocity and acceleration | Canvas 2D |
| 12 | 13-neighborhood-debug.html | Visualization of perception radius | Canvas 2D |
| 13 | 14-alignment-showcase.html | Isolated demonstration of alignment rule | Canvas 2D |
| 14 | 15-cohesion-showcase.html | Isolated demonstration of cohesion rule | Canvas 2D |
| 15 | 16-separation-showcase.html | Isolated demonstration of separation rule | Canvas 2D |
| 16 | 17-toroidal-wrapping.html | Seamless world wrapping at edges | Canvas 2D |
| 17 | 18-realistic-birds.html | Bird-shaped sprites with wing animation | Canvas 2D |
| 18 | 19-performance-stress.html | Thousands of boids testing performance | Canvas 2D |
| 19 | 20-parameter-playground.html | Comprehensive control panel | Canvas 2D |
| 20 | index.html | Gallery navigation page | HTML/CSS |

---

## BZ Reaction

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Belousov-Zhabotinsky chemical reaction producing spiral waves | Canvas 2D |

---

## Chaos Attractors

Strange attractors and chaotic systems.

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-lorenz-attractor.html | Classic "butterfly effect" chaotic system (1963) | Canvas 2D |
| 2 | 02-rossler-attractor.html | 3D continuous-time chaotic system | Canvas 2D |
| 3 | 03-double-pendulum.html | Chaotic motion of coupled pendulum system | Canvas 2D |
| 4 | 04-logistic-map.html | 1D discrete-time bifurcation diagram | Canvas 2D |
| 5 | 05-henon-attractor.html | 2D discrete-time strange attractor | Canvas 2D |
| 6 | 06-clifford-attractor.html | 2D chaotic system with beautiful patterns | Canvas 2D |
| 7 | 07-dejong-attractor.html | Peter de Jong's chaotic map | Canvas 2D |
| 8 | 08-aizawa-attractor.html | 3D chaotic system with symmetric structure | Canvas 2D |
| 9 | index.html | Gallery navigation page | HTML/CSS |

---

## Chaos Game

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Sierpinski triangle via random iteration algorithm | Canvas 2D |

---

## Complex Showcases

Advanced multi-system simulations across 12 categories.

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | city-generator/02-organic-streets.html | Procedural city generation with organic street networks | Canvas 2D |
| 2 | crowd-simulation/01-boids-flocking.html | Large-scale crowd simulation | Canvas 2D |
| 3 | fluid-simulation/index.html | Real-time Navier-Stokes fluid dynamics | WebGL |
| 4 | fractal-explorer/01-mandelbrot-zoom.html | Deep zoom into Mandelbrot set | Canvas 2D |
| 5 | fractal-explorer/02-julia-set.html | Interactive Julia set explorer | Canvas 2D |
| 6 | fractal-explorer/03-burning-ship.html | Burning Ship fractal | Canvas 2D |
| 7 | galaxy-simulator/02-dark-matter.html | N-body gravity with dark matter | Canvas 2D/WebGL |
| 8 | galaxy-simulator/03-collision.html | Two galaxies colliding and merging | Canvas 2D/WebGL |
| 9 | music-synthesizer/02-step-sequencer.html | Grid-based musical pattern sequencer | Canvas 2D + Web Audio |
| 10 | music-synthesizer/03-spectrum-visualizer.html | Real-time frequency spectrum analyzer | Canvas 2D + Web Audio |
| 11 | music-synthesizer/04-theremin.html | Mouse-controlled theremin | Canvas 2D + Web Audio |
| 12 | ocean-waves/01-gerstner-waves.html | Ocean waves using Gerstner equations | Canvas 2D/WebGL |
| 13 | ocean-waves/02-interference.html | Wave interference patterns | Canvas 2D |
| 14 | ray-tracer/01-basic-spheres.html | Software ray tracer rendering spheres | Canvas 2D |
| 15 | reaction-diffusion/index.html | Turing pattern formation | Canvas 2D |
| 16 | terrain-generation/02-diamond-square.html | Procedural terrain via diamond-square | Canvas 2D/WebGL |
| 17 | weather-system/04-hurricane.html | Hurricane dynamics simulation | Canvas 2D |
| 18 | index.html | Gallery navigation page | HTML/CSS |

---

## CSS Art

Pure CSS visual effects and animations.

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-css-3d-cube-gallery.html | 3D cube with faces using CSS transforms | CSS 3D |
| 2 | 02-css-grid-patterns.html | Geometric patterns using CSS Grid | CSS |
| 3 | 03-css-blend-modes.html | Color blending effects | CSS |
| 4 | 04-css-clip-path.html | Complex shapes using clip-path | CSS |
| 5 | 05-css-filter-effects.html | Visual filters (blur, brightness) | CSS |
| 6 | 06-css-variables-animation.html | Animated effects using CSS custom properties | CSS |
| 7 | index.html | Gallery navigation page | HTML/CSS |

---

## D3.js Visualizations

Data-driven visualizations using D3.js library.

### Chord Diagrams

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-migration-flow.html | Population migration patterns | D3.js |
| 2 | 02-trade-relationships.html | International trade flows | D3.js |

### Force-Directed Graphs

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-basic-network.html | Basic force-directed graph layout | D3.js |
| 2 | 02-collision-detection.html | Node collision prevention | D3.js |
| 3 | 03-clustered-network.html | Community detection clustering | D3.js |
| 4 | 04-dynamic-network.html | Real-time network updates | D3.js |
| 5 | 05-hierarchical-force.html | Combined hierarchy and force | D3.js |
| 6 | 06-charged-particles.html | Physics-based particle simulation | D3.js |
| 7 | 07-social-network.html | Social graph with communities | D3.js |

### Hierarchical Trees

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 04-dendrogram.html | Hierarchical clustering tree | D3.js |
| 2 | 05-treemap.html | Space-filling hierarchical layout | D3.js |

### Maps

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 04-flow-map.html | Geographic flow visualization | D3.js |
| 2 | 05-hex-bin-map.html | Hexagonal binning for spatial data | D3.js |

### Sankey Diagrams

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 02-budget-allocation.html | Budget distribution flow | D3.js |
| 2 | 05-traffic-flow.html | Transportation flow patterns | D3.js |
| 3 | 07-food-chain.html | Ecological food web energy flows | D3.js |

### Streaming Data

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 03-particle-stream.html | Real-time streaming particles | D3.js |
| 2 | 06-heatmap-stream.html | Live updating density heatmap | D3.js |

---

## Data Structures

Algorithm and data structure visualizations.

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-binary-search-tree.html | Interactive BST with insert/delete | Canvas 2D |
| 2 | 02-heap-visualization.html | Min/max heap with heapify operations | Canvas 2D |
| 3 | 03-hash-table.html | Hash table with collision resolution | Canvas 2D |
| 4 | 04-graph-traversal.html | BFS and DFS algorithm visualization | Canvas 2D |
| 5 | 05-trie-structure.html | Prefix tree for string storage | Canvas 2D |
| 6 | index.html | Gallery navigation page | HTML/CSS |

---

## DLA Fractals

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Diffusion-Limited Aggregation fractal growth | Canvas 2D |

---

## Double Pendulum

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Chaotic double pendulum with trajectory trail | Canvas 2D |

---

## Elliptic Curve Murmurations

Mathematical visualizations of elliptic curve patterns (40 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-elliptic-curve-explorer.html | Interactive elliptic curve geometry | Canvas 2D |
| 2 | 02-curve-family-gallery.html | Collection of curve families | Canvas 2D |
| 3 | 03-point-addition.html | Geometric point addition visualization | Canvas 2D |
| 4 | 04-finite-field-curves.html | Curves over finite fields | Canvas 2D |
| 5 | 05-conductor-visualizer.html | Conductor values visualization | Canvas 2D |
| 6 | 06-rank-comparison.html | Comparing curves with different ranks | Canvas 2D |
| 7 | 07-murmuration-waves.html | Wave-like patterns in ap scatter plots | Canvas 2D |
| 8 | 08-ap-scatter-plot.html | Frobenius trace scatter plot | Canvas 2D |
| 9 | 09-scale-invariance.html | Self-similar patterns across scales | Canvas 2D |
| 10 | 10-animated-emergence.html | Pattern emergence animation | Canvas 2D |
| 11 | 11-3d-murmuration-surface.html | 3D murmuration visualization | Three.js |
| 12 | 12-frequency-spectrum.html | Fourier analysis of patterns | Canvas 2D |
| 13 | 13-phase-portrait.html | Phase space representation | Canvas 2D |
| 14 | 14-density-heatmap.html | Density variation heat map | Canvas 2D |
| 15 | 15-wave-interference.html | Interference patterns | Canvas 2D |
| 16 | 16-conductor-grouping.html | Grouping by conductor values | Canvas 2D |
| 17 | 17-lfunction-zeros.html | L-function zeros connection | Canvas 2D |
| 18 | 18-airy-function.html | Airy function overlay | Canvas 2D |
| 19 | 19-starling-flock.html | Biological murmurations comparison | Canvas 2D |
| 20 | 20-flow-field-murmur.html | Flow field representation | Canvas 2D |
| 21 | 21-modular-forms.html | Modular form theory connection | Canvas 2D |
| 22 | 22-dirichlet-characters.html | Dirichlet character analysis | Canvas 2D |
| 23 | 23-prime-distribution.html | Prime number patterns | Canvas 2D |
| 24 | 25-color-wave-art.html | Artistic color gradients | Canvas 2D |
| 25 | 26-sound-visualization.html | Audio synthesis from data | Canvas 2D + Web Audio |
| 26 | 27-3d-curve-dance.html | Animated 3D visualization | Three.js |
| 27 | 28-neural-pattern.html | Neural network interpretation | Canvas 2D |
| 28 | 29-particle-curves.html | Particle system on curves | Canvas 2D |
| 29 | 30-zubrilina-formula.html | Zubrilina's conjecture | Canvas 2D |
| 30 | 31-interactive-dashboard.html | Comprehensive exploration tool | Canvas 2D |
| 31 | 32-lmfdb-explorer.html | LMFDB interface | Canvas 2D |
| 32 | 33-build-your-curve.html | Custom curve creation | Canvas 2D |
| 33 | 34-orbit-tracer.html | Point orbit tracing | Canvas 2D |
| 34 | 35-statistical-analyzer.html | Statistical analysis tools | Canvas 2D |
| 35 | 36-prime-sieve.html | Prime sieving visualization | Canvas 2D |
| 36 | 37-torsion-explorer.html | Torsion subgroup exploration | Canvas 2D |
| 37 | 38-isogeny-graph.html | Isogeny graph between curves | Canvas 2D |
| 38 | 39-realtime-builder.html | Live parameter adjustment | Canvas 2D |
| 39 | 40-complete-experience.html | Integrated demonstration | Canvas 2D |
| 40 | index.html | Gallery navigation page | HTML/CSS |

---

## Emergent Behaviors

Cellular automata, boids, swarms, and particle life (47 files).

### Langton's Ant Variants (12 files)

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-langtons-ant-classic.html | Classic RL rules | Canvas 2D |
| 2 | 02-langtons-ant-rlr.html | RLR rule variant | Canvas 2D |
| 3 | 03-langtons-ant-llrr.html | LLRR highway patterns | Canvas 2D |
| 4 | 04-langtons-ant-highway.html | Highway emergence | Canvas 2D |
| 5 | 05-langtons-ant-complex-highway.html | Multi-highway patterns | Canvas 2D |
| 6 | 06-langtons-ant-two-ants.html | Two ants interacting | Canvas 2D |
| 7 | 07-langtons-ant-five-ants.html | Five ant patterns | Canvas 2D |
| 8 | 08-langtons-ant-four-colors.html | Four color states | Canvas 2D |
| 9 | 09-langtons-ant-six-colors.html | Six color extension | Canvas 2D |
| 10 | 10-langtons-ant-hex-grid.html | Hexagonal grid variant | Canvas 2D |
| 11 | 11-langtons-ant-trails.html | Path visualization with trails | Canvas 2D |
| 12 | 12-langtons-ant-race.html | Multiple ants racing | Canvas 2D |

### Boids Variants (8 files)

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 13-boids-2d-basic.html | Basic 2D boids | Canvas 2D |
| 2 | 14-boids-with-obstacles.html | Obstacle avoidance | Canvas 2D |
| 3 | 15-boids-with-predator.html | Prey fleeing predator | Canvas 2D |
| 4 | 16-boids-two-species.html | Two different flocks | Canvas 2D |
| 5 | 17-boids-velocity-trails.html | Motion trails | Canvas 2D |
| 6 | 18-boids-separation-zones.html | Separation radius visualization | Canvas 2D |
| 7 | 19-boids-alignment-vectors.html | Alignment force vectors | Canvas 2D |
| 8 | 20-boids-cohesion-visualization.html | Center of mass visualization | Canvas 2D |

### Cellular Automata (12 files)

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 26-ca-brians-brain.html | Brian's Brain CA | Canvas 2D |
| 2 | 27-ca-seeds.html | Seeds (B2/S) CA | Canvas 2D |
| 3 | 28-ca-wireworld.html | Wireworld electronic simulation | Canvas 2D |
| 4 | 29-ca-day-and-night.html | Day & Night rules | Canvas 2D |
| 5 | 30-ca-highlife.html | HighLife with replicators | Canvas 2D |
| 6 | 31-ca-replicator.html | Replicating patterns | Canvas 2D |
| 7 | 32-ca-cyclic.html | Cyclic CA with multiple states | Canvas 2D |
| 8 | 33-ca-rock-paper-scissors.html | Spatial RPS dynamics | Canvas 2D |
| 9 | 34-ca-majority-rule.html | Majority voting CA | Canvas 2D |
| 10 | 35-ca-immigration.html | Immigration game | Canvas 2D |
| 11 | 36-ca-anneal.html | Annealing CA | Canvas 2D |
| 12 | 37-ca-vote.html | Voting CA | Canvas 2D |

### Swarm Intelligence (7 files)

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 38-swarm-ant-colony.html | Ant colony with pheromone trails | Canvas 2D |
| 2 | 39-swarm-slime-mold.html | Physarum polycephalum | Canvas 2D |
| 3 | 40-swarm-particle-swarm.html | Particle swarm optimization | Canvas 2D |
| 4 | 41-swarm-fireflies.html | Synchronizing fireflies | Canvas 2D |
| 5 | 42-swarm-bacteria.html | Bacterial chemotaxis | Canvas 2D |
| 6 | 43-swarm-fish-school.html | Fish schooling | Canvas 2D |
| 7 | 44-swarm-termite-nest.html | Termite construction | Canvas 2D |

### Particle Life (6 files)

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 45-particle-life-3-types.html | 3 particle types | Canvas 2D |
| 2 | 46-particle-life-5-types.html | 5 particle types | Canvas 2D |
| 3 | 47-particle-life-6-types.html | 6 particle types | Canvas 2D |
| 4 | 48-particle-life-magnetic.html | Magnetic interactions | Canvas 2D |
| 5 | 49-particle-life-gravitational.html | Gravitational dynamics | Canvas 2D |
| 6 | 50-particle-life-chemistry.html | Chemical reactions | Canvas 2D |

---

## Ethnocentrism

Hammond & Axelrod's ethnocentrism model (21 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-basic-ethnocentrism.html | 4 strategies: ethnocentric, altruist, egoist, traitorous | Canvas 2D |
| 2 | 02-strategy-distribution.html | Bar chart of strategy frequencies | Canvas 2D |
| 3 | 03-spatial-segregation.html | Ethnic clustering patterns | Canvas 2D |
| 4 | 04-cooperation-rate.html | Within/between group cooperation | Canvas 2D |
| 5 | 05-strategy-survival.html | Long-term strategy persistence | Canvas 2D |
| 6 | 06-color-territories.html | Territorial boundaries | Canvas 2D |
| 7 | 07-boundary-dynamics.html | Group boundary evolution | Canvas 2D |
| 8 | 08-mutation-effects.html | Strategy mutation impact | Canvas 2D |
| 9 | 09-initial-conditions.html | Starting configurations | Canvas 2D |
| 10 | 10-payoff-matrix.html | Interactive payoff adjustment | Canvas 2D |
| 11 | 11-cluster-size.html | Group size distributions | Canvas 2D |
| 12 | 12-immigration-effects.html | Immigration and assimilation | Canvas 2D |
| 13 | 13-four-strategy-arena.html | 4-way competition | Canvas 2D |
| 14 | 14-altruist-exploitation.html | Free-rider exploitation | Canvas 2D |
| 15 | 15-spatial-assortment.html | Clustering strength | Canvas 2D |
| 16 | 16-frequency-dependent.html | Frequency-dependent selection | Canvas 2D |
| 17 | 17-agent-migration.html | Movement toward compatible neighbors | Canvas 2D |
| 18 | 18-network-topology.html | Lattice, random, scale-free networks | Canvas 2D |
| 19 | 19-carrying-capacity.html | Population limits | Canvas 2D |
| 20 | 20-parameter-space.html | 2D parameter heatmap | Canvas 2D |
| 21 | index.html | Gallery navigation page | HTML/CSS |

---

## Fire Percolation

Percolation theory through forest fire simulations (21 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-basic-forest-fire.html | Basic fire spread at adjustable density | Canvas 2D |
| 2 | 02-critical-threshold.html | 59% density phase transition | Canvas 2D |
| 3 | 03-density-comparison.html | 40%, 59%, 80% side-by-side | Canvas 2D |
| 4 | 04-von-neumann-neighborhood.html | 4 vs 8 neighbor comparison | Canvas 2D |
| 5 | 05-deterministic-vs-probabilistic.html | Deterministic vs random spread | Canvas 2D |
| 6 | 06-percolation-probability-curve.html | Sigmoid probability curve | Canvas 2D |
| 7 | 07-cluster-size-distribution.html | Connected cluster analysis | Canvas 2D |
| 8 | 08-burn-front-wave.html | Wave propagation visualization | Canvas 2D |
| 9 | 09-time-to-reach-edge.html | Time-to-cross statistics | Canvas 2D |
| 10 | 10-correlation-length.html | Near-critical correlation | Canvas 2D |
| 11 | 11-interactive-parameter-explorer.html | Comprehensive parameter tool | Canvas 2D |
| 12 | 12-multiple-simultaneous-runs.html | 9 parallel simulations | Canvas 2D |
| 13 | 13-custom-ignition-patterns.html | User-drawn ignition | Canvas 2D |
| 14 | 14-fire-breaks-barriers.html | Firebreak containment | Canvas 2D |
| 15 | 15-forest-regeneration-cycles.html | Fire-regrowth dynamics | Canvas 2D |
| 16 | 16-finite-size-scaling.html | Grid size effects | Canvas 2D |
| 17 | 17-fractal-dimension.html | Burn pattern fractals | Canvas 2D |
| 18 | 18-anisotropic-spread-wind.html | Wind-biased spread | Canvas 2D |
| 19 | 19-statistical-ensemble-viewer.html | Ensemble statistics | Canvas 2D |
| 20 | 20-phase-transition-visualization.html | Phase transition visualization | Canvas 2D |
| 21 | index.html | Gallery navigation page | HTML/CSS |

---

## Follower Visualizations

NetLogo-inspired follower chains (28 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-classic-follower.html | Classic one-to-one following | Canvas 2D |
| 2 | 02-smooth-interpolation.html | Smooth movement interpolation | Canvas 2D |
| 3 | 03-rainbow-chains.html | Rainbow gradient chains | Canvas 2D |
| 4 | 04-particle-trails.html | Particle trail effects | Canvas 2D |
| 5 | 05-wavy-motion.html | Sinusoidal wave movement | Canvas 2D |
| 6 | 06-size-by-chain-position.html | Size varies by position | Canvas 2D |
| 7 | 07-3d-perspective.html | Pseudo-3D rendering | Canvas 2D |
| 8 | 08-glow-chains.html | Glow/bloom effects | Canvas 2D |
| 9 | 09-pulsating-connections.html | Animated connection lines | Canvas 2D |
| 10 | 10-spring-connections.html | Physics-based springs | Canvas 2D |
| 11 | 11-multiple-populations.html | Multiple distinct populations | Canvas 2D |
| 12 | 12-collision-avoidance.html | Obstacle avoidance | Canvas 2D |
| 13 | 13-gravity-attraction.html | Gravitational forces | Canvas 2D |
| 14 | 15-grid-based-movement.html | Discrete grid movement | Canvas 2D |
| 15 | 16-noise-based-wandering.html | Perlin noise wandering | Canvas 2D |
| 16 | 17-predator-prey.html | Predator-prey dynamics | Canvas 2D |
| 17 | 18-audio-reactive.html | Audio frequency response | Canvas 2D + Web Audio |
| 18 | 19-interactive-click.html | Click interaction | Canvas 2D |
| 19 | 20-chain-length-visualization.html | Chain length encoding | Canvas 2D |
| 20 | 21-webgl-gpu-accelerated.html | 5000+ agents GPU rendering | WebGL/Three.js |
| 21 | 22-parameter-playground.html | Parameter controls | Canvas 2D |
| 22 | 24-network-graph-analysis.html | Network connectivity metrics | Canvas 2D |
| 23 | 25-vector-field-navigation.html | Vector field navigation | Canvas 2D |
| 24 | 27-emergent-communication.html | Communication patterns | Canvas 2D |
| 25 | 28-fractal-chains.html | Fractal chain structures | Canvas 2D |
| 26 | 29-magnetic-fields.html | Magnetic field forces | Canvas 2D |
| 27 | 30-heatmap-analytics.html | Density heatmap analytics | Canvas 2D |
| 28 | index.html | Gallery navigation page | HTML/CSS |

---

## Fourier Epicycles

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Drawing complex curves using rotating circles from Fourier series | Canvas 2D |

---

## Game of Life

Conway's Game of Life with 17 visualization variants.

### Classic Demos

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 02-hexagonal-grid.html | Hexagonal topology | Canvas 2D |
| 2 | 06-growing-circles.html | Age-based circle rendering | Canvas 2D |
| 3 | 08-multi-species.html | Multiple species competition | Canvas 2D |
| 4 | 11-pixel-art.html | Retro pixel aesthetic | Canvas 2D |
| 5 | 13-network-web.html | Network graph connections | Canvas 2D |
| 6 | 15-kaleidoscope.html | Symmetric mirrored patterns | Canvas 2D |
| 7 | 16-matrix-rain.html | Matrix-style overlay | Canvas 2D |
| 8 | 19-musical-viz.html | Audio-reactive visualization | Canvas 2D + Web Audio |

### Set 1

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | viz4.html | Heat map evolution | Canvas 2D |
| 2 | viz5.html | Radial projection | Canvas 2D |
| 3 | viz6.html | Hexagonal hive | Canvas 2D |
| 4 | viz16.html | Organic blob shapes | Canvas 2D |
| 5 | viz17.html | Circuit board style | Canvas 2D |

### Set 2

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | gol_3d_heightmap.html | 3D heightmap elevation | Canvas 2D |
| 2 | gol_emoji.html | Emoji cell representation | Canvas 2D |
| 3 | gol_interactive_paint.html | Interactive cell painting | Canvas 2D |
| 4 | gol_network.html | Network connectivity view | Canvas 2D |

---

## Games

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | petri-dish-nca.html | Multi-species neural cellular automata game | Canvas 2D |
| 2 | index.html | Gallery navigation page | HTML/CSS |

---

## Genetic Algorithm

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Population evolution, fitness landscapes, selection, crossover, mutation | Canvas 2D |

---

## Geometric Patterns

Mathematical pattern generation.

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-islamic-patterns.html | Intricate Islamic geometric art | Canvas 2D |
| 2 | 02-penrose-tiling.html | Non-periodic aperiodic tiling | Canvas 2D |
| 3 | 03-truchet-tiles.html | Randomly oriented tiles | Canvas 2D |
| 4 | 04-voronoi-art.html | Voronoi diagrams with colors | Canvas 2D |
| 5 | 05-sacred-geometry.html | Flower of Life, Metatron's Cube | Canvas 2D |
| 6 | 06-celtic-knots.html | Interwoven Celtic patterns | Canvas 2D |
| 7 | index.html | Gallery navigation page | HTML/CSS |

---

## Gravity Orbits

Orbital mechanics and N-body simulations (50 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1-10 | Basic Orbital Mechanics | Circular, elliptical, parabolic, hyperbolic orbits, Hohmann transfer, orbital decay, geostationary, polar, multiple satellites, orbital resonance | Canvas 2D |
| 11-20 | N-Body Systems | Simple N-body, solar system, three-body figure-8, three-body chaos, four-body, random N-body, binary star, binary star with planet, Trojan asteroids, Lagrange points | Canvas 2D |
| 21-30 | Advanced Mechanics | Gravity assist, perturbations, tidal forces, Roche limit, Hill sphere, sphere of influence, precession, plane changes, bi-elliptic transfer, galaxy spiral arms | Canvas 2D |
| 31-40 | Astrophysics | Globular cluster, star cluster formation, planetary rings, asteroid belt, Kuiper belt, comet trajectories, meteor showers, accretion disk, stellar collision, launch windows | Canvas 2D |
| 41-50 | Educational Tools | Orbit designer, escape velocity demo, Kepler's laws, Newton's cannon, gravity well, orbital energy, vis-viva equation, orbital elements editor, mission to Mars planner | Canvas 2D |

---

## Infographics

Data visualization components.

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | area-chart.html | Animated area chart with gradients | SVG |
| 2 | card-flip.html | 3D card flip statistics | CSS 3D |
| 3 | line-chart.html | Smooth animated line chart | SVG |
| 4 | network.html | Force-directed network graph | SVG |
| 5 | radar.html | Multi-axis radar/spider chart | SVG |
| 6 | timeline.html | Animated timeline with events | CSS/SVG |

---

## Ising Model

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | 2D ferromagnetic phase transition with Metropolis algorithm | Canvas 2D |

---

## L-Systems

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Lindenmayer system fractal generator for plants and fractals | Canvas 2D |

---

## Langton's Ant

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Cellular automaton with emergent highway patterns | Canvas 2D |

---

## Lissajous

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Parametric curves from harmonic oscillations | Canvas 2D |
| 2 | lissajous.html | Grid of 20 different frequency ratios | Canvas 2D |

---

## Lorenz Attractor

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Butterfly-shaped strange attractor demonstrating chaos | Canvas 2D |

---

## Lottie Animations

Vector animations using Lottie library (14 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-circular-spinner.html | Rotating loading spinner | Lottie |
| 2 | 02-dots-wave.html | Animated dots wave pattern | Lottie |
| 3 | 03-pulse-ring.html | Pulsing ring animation | Lottie |
| 4 | 06-rotating-squares.html | Geometric rotating squares | Lottie |
| 5 | 07-morphing-loader.html | Shape-shifting loader | Lottie |
| 6 | 09-checkmark-success.html | Success checkmark | Lottie |
| 7 | 10-menu-hamburger.html | Hamburger menu icon | Lottie |
| 8 | 13-settings-gear.html | Rotating gear icon | Lottie |
| 9 | 23-bookmark.html | Bookmark icon animation | Lottie |
| 10 | 29-hexagon-grid.html | Animated hexagonal grid | Lottie |
| 11 | 31-infinity-loop.html | Continuous infinity symbol | Lottie |
| 12 | 32-fractal-growth.html | Growing fractal pattern | Lottie |
| 13 | 33-growing-tree.html | Tree growing animation | Lottie |
| 14 | 35-butterfly-wings.html | Butterfly wing flapping | Lottie |

---

## Mandelbrot Julia

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Interactive Mandelbrot/Julia set explorer with orbit trap rendering | Canvas 2D |

---

## Mathematical Art

Parametric curves and mathematical visualizations (10 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-spirograph.html | Interactive spirograph patterns | Canvas 2D |
| 2 | 02-harmonograph.html | Mechanical pendulum harmonograph | Canvas 2D |
| 3 | 03-rose-curves.html | Polar rose curves (Rhodonea) | Canvas 2D |
| 4 | 04-epicycloids.html | Epicycloids & Hypocycloids | Canvas 2D |
| 5 | 05-fourier-epicycles.html | Fourier series as rotating circles | Canvas 2D |
| 6 | 06-butterfly-curve.html | Temple H. Fay's butterfly curve | Canvas 2D |
| 7 | 07-cycloid.html | Cycloid - The Helen of Geometry | Canvas 2D |
| 8 | 08-parametric-curves.html | Parametric curve gallery | Canvas 2D |
| 9 | 09-mandelbrot-zoom.html | Mandelbrot set deep zoom | Canvas 2D |
| 10 | 10-3d-knots.html | 3D mathematical knots | Canvas 2D |

---

## Metaballs

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Organic blob shapes using marching squares algorithm | Canvas 2D |

---

## Optical Illusions

Perceptual illusions and visual phenomena (5 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-moire-patterns.html | Interference patterns from overlapping grids | Canvas 2D |
| 2 | 02-optical-flow.html | Peripheral drift illusion | Canvas 2D |
| 3 | 03-fraser-spiral.html | Fraser spiral illusion (1908) | Canvas 2D |
| 4 | 04-motion-induced-blindness.html | Objects disappearing from awareness | Canvas 2D |
| 5 | 05-cafe-wall-illusion.html | Tilted parallel lines illusion | Canvas 2D |

---

## Particle Effects

Visual effects using particle systems (8 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-fire-effect.html | Realistic fire with heat and smoke | Canvas 2D |
| 2 | 02-water-fountain.html | Water fountain physics | Canvas 2D |
| 3 | 03-smoke-particles.html | Rising smoke with turbulence | Canvas 2D |
| 4 | 04-fireworks.html | Exploding firework particles | Canvas 2D |
| 5 | 05-snow-fall.html | Falling snowflakes with wind | Canvas 2D |
| 6 | 06-starfield.html | 3D starfield warp effect | Canvas 2D |
| 7 | 07-plasma-effect.html | Colorful plasma energy | Canvas 2D |
| 8 | 08-galaxy-spiral.html | Rotating spiral galaxy | Canvas 2D |

---

## Particle Systems

Physics-based particle simulations (20 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-fireworks.html | Click-triggered firework explosions | Canvas 2D |
| 2 | 02-gravity-well.html | Gravitational attraction | Canvas 2D |
| 3 | 03-mouse-attraction.html | Interactive mouse following | Canvas 2D |
| 4 | 04-orbital-particles.html | Elliptical orbital motion | Canvas 2D |
| 5 | 05-fluid-particles.html | Particle-based fluid | Canvas 2D |
| 6 | 06-smoke-simulation.html | Volumetric smoke | Canvas 2D |
| 7 | 07-electric-arcs.html | Lightning discharge effects | Canvas 2D |
| 8 | 08-constellation.html | Connected constellation patterns | Canvas 2D |
| 9 | 09-dna-helix.html | Double helix structure | Canvas 2D |
| 10 | 10-spiral-galaxy.html | Rotating spiral arms | Canvas 2D |
| 11 | 11-bouncing-balls.html | Elastic collision physics | Canvas 2D |
| 12 | 12-magnetic-field.html | Iron filing field lines | Canvas 2D |
| 13 | 13-aurora-borealis.html | Northern lights curtains | Canvas 2D |
| 14 | 14-rain-snow.html | Weather simulation | Canvas 2D |
| 15 | 15-paint-splatter.html | Paint droplet physics | Canvas 2D |
| 16 | 16-particle-trails.html | Flow visualization trails | Canvas 2D |
| 17 | 17-turbulence.html | Perlin noise vortex | Canvas 2D |
| 18 | 18-explosion.html | Radial particle burst | Canvas 2D |
| 19 | 19-morphing-shapes.html | Shape interpolation | Canvas 2D |
| 20 | 20-swarm-interaction.html | Mouse-interactive swarm | Canvas 2D |

---

## Pathfinding

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | A*, Dijkstra, BFS, DFS algorithm visualization | Canvas 2D |

---

## Percolation

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Phase transition from isolated to spanning clusters | Canvas 2D |

---

## Petri Arena

Neural cellular automata competition (20 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1-5 | Basic Competition | Single agent growth, two agent competition, rock-paper-scissors, environment pressure, softmax temperature | Canvas 2D |
| 6-10 | Parameters | Aliveness threshold, top-2 occupancy, four-phase step, cycle detection | Canvas 2D |
| 11-15 | Analysis | Entropy tracking, territory heatmap, channel inspector, multi-agent FFA, spatial waves | Canvas 2D |
| 16-20 | Advanced | Walls and obstacles, seasonal environment, hypercycle, cell state inspector, metrics dashboard | Canvas 2D |

---

## Physics Simulations

Comprehensive physics simulation library (37 files across 7 subdirectories).

### Additional Physics (7 files)

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-double-pendulum.html | Chaotic coupled pendulums | Canvas 2D |
| 2 | 02-spring-systems.html | Mass-spring network | Canvas 2D |
| 3 | 03-soft-body.html | Deformable object with pressure | Canvas 2D |
| 4 | 04-verlet-cloth.html | Verlet integration cloth | Canvas 2D |
| 5 | 05-particle-fountain.html | Ballistic trajectories | Canvas 2D |
| 6 | 06-gravity-well.html | Gravity field visualization | Canvas 2D |
| 7 | 07-elastic-collisions.html | 2D elastic collisions | Canvas 2D |

### Boids (8 files)

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-basic-boids.html | Reynolds' 1987 algorithm | Canvas 2D |
| 2 | 02-predator-prey.html | Escape and hunting dynamics | Canvas 2D |
| 3 | 04-obstacle-avoidance.html | Raycasting avoidance | Canvas 2D |
| 4 | 05-leader-following.html | Hierarchical flocking | Canvas 2D |
| 5 | 06-fish-school.html | Underwater schooling | Canvas 2D |
| 6 | 07-bird-murmuration.html | Large-scale murmurations | Canvas 2D |
| 7 | 08-ant-colony.html | Pheromone trail following | Canvas 2D |

### DLA (4 files)

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-basic-dla.html | Fractal dendritic structures | Canvas 2D |
| 2 | 02-radial-dla.html | Snowflake-like radial growth | Canvas 2D |
| 3 | 03-multiple-seeds.html | Competing nucleation points | Canvas 2D |
| 4 | 05-dielectric-breakdown.html | Electric field-biased DLA | Canvas 2D |

### Fluid (5 files)

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-simple-fluid.html | Navier-Stokes Eulerian solver | Canvas 2D |
| 2 | 02-smoke-simulation.html | Buoyancy and convection | Canvas 2D |
| 3 | 03-interactive-vorticity.html | User-added vortices | Canvas 2D |
| 4 | 04-particle-advection.html | Tracer particles in flow | Canvas 2D |
| 5 | 05-ink-in-water.html | Dye diffusion | Canvas 2D |

### Ising Model (4 files)

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-basic-ising.html | Metropolis Monte Carlo | Canvas 2D |
| 2 | 02-phase-transition.html | Curie point visualization | Canvas 2D |
| 3 | 03-temperature-control.html | Real-time temperature adjustment | Canvas 2D |
| 4 | 04-magnetic-field.html | External field effects | Canvas 2D |

### Langton's Ant (5 files)

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-classic-ant.html | Classic RL highway patterns | Canvas 2D |
| 2 | 02-multiple-ants.html | Multiple ant interactions | Canvas 2D |
| 3 | 03-extended-rules.html | Multi-color variants | Canvas 2D |
| 4 | 04-turmite-variations.html | Generalized turmites | Canvas 2D |
| 5 | 05-symmetric-patterns.html | Beautiful symmetry rules | Canvas 2D |

### Reaction-Diffusion (5 files)

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-gray-scott-basic.html | Self-organizing patterns | Canvas 2D |
| 2 | 02-leopard-spots.html | Turing patterns | Canvas 2D |
| 3 | 03-zebra-stripes.html | Stripe morphogenesis | Canvas 2D |
| 4 | 04-coral-pattern.html | Branching coral structures | Canvas 2D |
| 5 | 05-interactive-painting.html | User-paintable patterns | Canvas 2D |

---

## Pixi Sprite Animations

High-performance sprite animations using PixiJS (17 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-sprite-particles.html | Basic sprite particle system | PixiJS |
| 2 | 02-sprite-wave.html | Sine wave sprite arrangement | PixiJS |
| 3 | 03-sprite-spiral.html | Logarithmic spiral formation | PixiJS |
| 4 | 04-sprite-bounce.html | Gravity and collisions | PixiJS |
| 5 | 05-sprite-orbit.html | Elliptical orbital motion | PixiJS |
| 6 | 06-sprite-fireworks.html | Firework explosion effects | PixiJS |
| 7 | 07-sprite-trails.html | Motion trail effects | PixiJS |
| 8 | 08-sprite-rotator.html | Independent rotation animations | PixiJS |
| 9 | 09-sprite-morph.html | Shape transformations | PixiJS |
| 10 | 10-sprite-swarm.html | Boid-like steering forces | PixiJS |
| 11 | 13-sprite-flock.html | Advanced flocking | PixiJS |
| 12 | 16-sprite-nebula.html | Space nebula with depth | PixiJS |
| 13 | 17-sprite-dance.html | Choreographed animations | PixiJS |
| 14 | 22-filter-colormatrix.html | Color transformation filters | PixiJS |
| 15 | 23-filter-noise.html | Noise/grain effects | PixiJS |
| 16 | 30-filter-combined.html | Multiple stacked filters | PixiJS |
| 17 | 38-sprite-container.html | Hierarchical containers | PixiJS |

---

## Procedural Terrain

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Perlin noise heightmap terrain with multiple rendering modes | Canvas 2D |

---

## Random Walk

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Stochastic random walk and Brownian motion trajectories | Canvas 2D |

---

## Ray Marching

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | SDF ray marching for 3D scenes with CSG operations | Canvas 2D |

---

## Reaction Diffusion

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Gray-Scott model with adjustable feed/kill rates | Canvas 2D |

---

## Renaissance EconSim

Agent-based Renaissance economy simulation (5 files). Models the merchant economy of Renaissance Italy (14th-16th century), inspired by the rise of Florence, Venice, and Genoa. Features innovations pioneered by the [Medici Bank](https://en.wikipedia.org/wiki/Medici_Bank) that became the foundation of modern international banking.

| # | File | Description | Technology |
|---|------|-------------|------------|
| 1 | 01-agent-based-trade.html | **Merchant economy of Renaissance Italy.** Models traders, guild systems, and commodity exchange inspired by Florence, Venice, and Genoa trading powerhouses. | Canvas 2D |
| 2 | 02-trade-network.html | **International trade networks.** Visualizes Renaissance banking family networks. The Medici Bank had branches in Venice, Milan, Rome, London, Bruges, and Lyons, with correspondents in Constantinople, Alexandria, and Cairo. | Canvas 2D |
| 3 | 03-wealth-distribution.html | **Wealth concentration among merchant families.** The Medici, Peruzzi, Bardi, and Acciaiuoli controlled much of European finance. Demonstrates early examples of Pareto distribution in wealth. | Canvas 2D |
| 4 | 04-banking-system.html | **Revolutionary banking innovations.** Double-entry bookkeeping, letters of credit, and bills of exchange. The Medici pioneered practices that became modern international banking. | Canvas 2D |
| 5 | 05-florence-economy.html | **Complete Florence city-state simulation.** Models the textile industry (wool and silk), banking sector, and political economy. Florence lost banking dominance after the Medici collapse in 1494. | Canvas 2D |

---

## Sandpile

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Abelian sandpile model with avalanche cascades and self-organized criticality | Canvas 2D |

---

## Schelling Segregation

Segregation dynamics simulation (21 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1-5 | Basic Model | Classic model, preference slider, density comparison, phase visualization, threshold explorer | Canvas 2D |
| 6-10 | Analysis | Happiness tracking, multi-group, neighborhood radius, movement patterns, cluster formation | Canvas 2D |
| 11-15 | Advanced | Boundary analysis, segregation heatmap, integration stability, cascading effects, empty patches | Canvas 2D |
| 16-20 | Extensions | Historical traces, statistical dashboard, custom patterns, asymmetric preferences, tipping points | Canvas 2D |
| 21 | index.html | Gallery navigation page | HTML/CSS |

---

## Scientific Visualizations

Physics and engineering simulations (14 files across 4 subdirectories).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1-2 | Electromagnetic Fields | Lorentz force, capacitor field lines | Canvas 2D |
| 3-5 | Fluid Dynamics | Vortex flow, Bernoulli principle, Reynolds number | Canvas 2D |
| 6-11 | Orbital Mechanics | Kepler orbits, Hohmann transfer, precession, escape velocity, tidal locking | Canvas 2D |
| 12-14 | Wave Interference | Standing waves, beats, Doppler effect | Canvas 2D |

---

## Simulations

Organized physics simulation library (44 files across 9 subdirectories).

| Category | Files | Description |
|----------|-------|-------------|
| Cellular Automata | 5 | Langton's Ant variants, Brian's Brain |
| Flocking/Swarms | 5 | 2D/3D Boids, predator-prey, ant colony, slime mold |
| Fluid Dynamics | 5 | Jos Stam smoke, obstacles, vortex shedding, turbulence |
| N-Body | 3 | Solar system, binary stars, three-body chaos |
| Particle Systems | 5 | DLA, Brownian motion, particle life |
| Physics | 5 | Double pendulum, springs, cloth, soft body, Verlet |
| Reaction-Diffusion | 4 | Spots, stripes, labyrinth, interactive Turing |
| Statistical Mechanics | 5 | Ising model, phase transitions, voter model |
| Waves | 5 | Interference, ripple tank, standing waves, Doppler, solitons |

---

## Solar Flare Visualizations

Space weather and solar activity (40 files).

| Category | Description | Technology |
|----------|-------------|------------|
| Flare Physics | X-class flares, CME propagation, magnetosphere compression | Canvas 2D, Three.js |
| Effects | Aurora formation, satellite impacts, power grid effects | Canvas 2D |
| Monitoring | Radiation monitoring, real-time dashboards | Canvas 2D, D3.js |
| Sonification | Audio representation of solar data | Web Audio API |

---

## Spatial Partitioning

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Quadtree spatial partitioning for collision detection | Canvas 2D |

---

## Sugarscape

[Epstein & Axtell's "Growing Artificial Societies" (1996)](https://en.wikipedia.org/wiki/Sugarscape) - the foundational agent-based model. Agents with vision and metabolism compete for sugar on a 2D landscape, demonstrating how wealth inequality emerges spontaneously from simple rules.

| # | File | Description | Technology |
|---|------|-------------|------------|
| 1 | 01-classic-sugarscape.html | **The original Epstein-Axtell model.** Autonomous agents with varying vision (1-6 cells) and metabolism compete for renewable sugar resources on a twin-peaked landscape. Demonstrates spontaneous wealth inequality emergence. | Canvas 2D |
| 2 | 02-wealth-distribution.html | **Real-time wealth histogram.** Despite identical starting conditions, a Pareto-like distribution emerges where most agents have below-average wealth while a minority accumulates most resources. | Canvas 2D |
| 3 | 03-gini-coefficient-tracker.html | **Gini coefficient tracking.** Named after Italian statistician [Corrado Gini (1912)](https://en.wikipedia.org/wiki/Gini_coefficient). Watch inequality rise from 0 (perfect equality) toward values typical of real economies (0.3-0.5). | Canvas 2D |
| 4 | 04-vision-impact.html | **Information advantage.** Agents who can "see" farther consistently accumulate more wealth. Analogous to information asymmetry in real markets. | Canvas 2D |
| 5 | 05-metabolism-survival.html | **Metabolic efficiency (frugality).** Low-metabolism agents survive longer on the same resources. Demonstrates the tension between consumption and accumulation. | Canvas 2D |
| 6 | 06-age-demographics.html | **Population age distribution.** Shows how economic success correlates with longevity and how population structure evolves. | Canvas 2D |
| 7 | 07-resource-heatmap.html | **Sugar concentration visualization.** The twin-peaked distribution creates natural migration patterns as agents seek high-resource areas. | Canvas 2D |
| 8 | 08-agent-trails.html | **Movement trails.** Traces agent paths over time, revealing migration patterns and emergent territorial behavior. | Canvas 2D |
| 9 | 10-lorenz-curve.html | **[Lorenz curve](https://en.wikipedia.org/wiki/Lorenz_curve) (Max Lorenz, 1905).** Shows cumulative wealth distribution. The further the curve bends from the diagonal, the more unequal. | Canvas 2D |
| 10 | 11-population-dynamics.html | **Population size tracking.** Resource availability, metabolism distribution, and vision range all affect carrying capacity. | Canvas 2D |
| 11 | 12-wealth-concentration.html | **Top X% wealth share.** Measures what percentage of total wealth is held by the top 10%, top 1%, etc. "Rich get richer" dynamics. | Canvas 2D |
| 12 | 13-spatial-segregation.html | **Geographic wealth clustering.** Wealthy agents cluster in high-resource areas while poor agents are pushed to margins. | Canvas 2D |
| 13 | 14-resource-depletion.html | **Boom-bust cycles.** When regeneration can't keep up with consumption, population crashes occur. | Canvas 2D |
| 14 | 15-optimal-strategy.html | **Strategy comparison.** High vision + low metabolism is optimal, but resource competition means not everyone can be optimal. | Canvas 2D |
| 15 | 16-lifespan-analysis.html | **Lifespan vs wealth correlation.** Wealthy agents tend to live longer, creating dynastic advantages. | Canvas 2D |
| 16 | 17-migration-flows.html | **Migration flow vectors.** Shows how "invisible hand" market forces create orderly migration toward resources. | Canvas 2D |
| 17 | 18-emergent-territories.html | **Emergent territorial clustering.** Distinct "tribal" territories form around resource peaks without explicit rules. | Canvas 2D |
| 18 | 19-regeneration-comparison.html | **Regeneration strategy comparison.** Immediate growback vs. gradual regeneration creates different economic dynamics. | Canvas 2D |
| 19 | 20-pareto-distribution.html | **[Pareto distribution](https://en.wikipedia.org/wiki/Pareto_principle) (80/20 Rule).** Vilfredo Pareto's observation that ~80% of wealth is held by ~20% of the population emerges naturally. | Canvas 2D |

---

## Sugarscape Inequality

Deep dives into inequality mechanisms from the Sugarscape model (20 files). Explores how simple agent rules produce real-world inequality patterns.

| # | File | Description | Technology |
|---|------|-------------|------------|
| 1 | 01-basic-sugarscape-gini.html | **Baseline model with Gini tracking.** The Gini coefficient rises from 0 to 0.3-0.5 within ~100 time steps, matching real-world inequality levels. | Canvas 2D |
| 2 | 02-spatial-luck.html | **Starting position matters.** Demonstrates how initial conditions create persistent inequality. Agents near resource peaks have permanent advantages - analogous to inherited wealth. | Canvas 2D |
| 3 | 03-vision-heterogeneity.html | **Information advantage.** Explores how differences in "vision" (information access) drive inequality. Those who can see further outperform. | Canvas 2D |
| 4 | 04-metabolic-efficiency.html | **Frugality wins.** Low-metabolism agents accumulate more wealth. Demonstrates the "millionaire next door" effect - frugality matters more than income. | Canvas 2D |
| 5 | 05-lorenz-curve.html | **Interactive Lorenz curve.** Drag parameters to see how vision, metabolism, and population size affect curve shape and Gini coefficient. | Canvas 2D |
| 6 | 06-wealth-histogram.html | **Pareto distribution emergence.** Real-time histogram showing power-law wealth distribution. Most agents cluster at low wealth while a long tail extends to very high values. | Canvas 2D |
| 7 | 07-two-commodity-trading.html | **Sugar & Spice trading.** Extends Sugarscape with a second commodity. Trading increases overall welfare but also increases inequality. | Canvas 2D |
| 8 | 08-inequality-timeline.html | **Three phases of inequality.** Time-series showing initial equality → rapid divergence → stable inequality. | Canvas 2D |
| 9 | 09-survival-selection.html | **Natural selection.** Tracks which agent types survive over time. Natural selection favors efficient agents. | Canvas 2D |
| 10 | 10-wealth-accumulation.html | **Individual trajectories.** Visualizes how agents accumulate (or lose) wealth. Some show steady growth; others volatility and crashes. | Canvas 2D |
| 11 | 11-trade-network.html | **Trade relationship network.** Shows how some agents become trading hubs while others remain peripheral. | Canvas 2D |
| 12 | 12-efficiency-equity-tradeoff.html | **Classic economics tradeoff.** Policies that increase total wealth (efficiency) often increase inequality, and vice versa. | Canvas 2D |
| 13 | 13-initial-vs-final-distribution.html | **Starting vs ending wealth.** Even with equal starts, highly unequal outcomes emerge. | Canvas 2D |
| 14 | 14-cobb-douglas-welfare.html | **[Cobb-Douglas utility function](https://en.wikipedia.org/wiki/Cobb–Douglas_production_function) 3D.** (Charles Cobb & Paul Douglas, 1927). Shows how agents value combinations of two goods. | Canvas 2D |
| 15 | 15-resource-regeneration.html | **Regeneration strategies.** Different approaches and their effects on sustainability and wealth distribution. | Canvas 2D |
| 16 | 16-parameter-sweep-gini.html | **Gini sensitivity analysis.** Systematically varies parameters to show which most strongly affect inequality. | Canvas 2D |
| 17 | 17-agent-lifecycle.html | **Births, deaths, and wealth transfer.** Shows how economic "dynasties" form across generations. | Canvas 2D |
| 18 | 18-marginal-rate-substitution.html | **MRS visualization.** How much of one good an agent would trade for another. Fundamental to understanding trade. | Canvas 2D |
| 19 | 19-wealth-concentration.html | **Top 10% vs Bottom 50%.** Mirrors real-world statistics like "the top 1% owns 50% of wealth." | Canvas 2D |
| 20 | 20-interactive-sandbox.html | **Full sandbox with all controls.** Experiment with population size, vision ranges, metabolism, resource regeneration. | Canvas 2D |

---

## SVG Animations

Vector-based animations using SVG (6 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1-6 | Path morphing, filter effects, clip-path animations, transform animations | SVG + CSS |

---

## Three.js

3D visualizations using Three.js library (31 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | 01-rotating-cube.html | Basic colored rotating cube | Three.js |
| 2-31 | Various 3D demos | Spheres, toruses, particle systems, procedural geometry, lighting effects | Three.js |

---

## Three.js TSL Shaders

Three.js Shading Language effects (41 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1-41 | Advanced shader effects | Plasma, water, fire, noise patterns, procedural textures, volumetric effects | Three.js + TSL |

---

## TSL Shaders

Additional TSL shader gallery (47 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1-47 | Shader art and orbital mechanics | Flow fields, fractals, audio-reactive shaders, cosmic visualizations | Three.js + TSL |

---

## Virus Epidemic Models

Disease spread simulations (21 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1-21 | SIR/SEIR compartmental models, network epidemiology, spatial spread, vaccination effects | Canvas 2D + Charts |

---

## Visual Essays

Interactive educational narratives (3 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1-3 | Computational history narratives with embedded visualizations | HTML/CSS/WebGL |

---

## Visualization Algorithms

Algorithm visualization demos (21 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1-21 | Voronoi, Delaunay, metaballs, attractors, reaction-diffusion, marching squares, quadtree, pathfinding | Canvas 2D |

---

## Visualizations

General visualization demos (10 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1-10 | Particle systems, waves, rotating cubes, clocks, fireworks, matrix rain, networks, audio visualizers, solar systems | Canvas 2D |

---

## Voronoi Delaunay

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Voronoi diagrams with Delaunay triangulation dual | Canvas 2D |

---

## Wave Function Collapse

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | Procedural tile-based pattern generation using constraint satisfaction | Canvas 2D |

---

## Wealth Distribution

Additional explorations of wealth inequality dynamics (19 files). Sugarscape-based simulations examining specific factors that drive inequality.

| # | File | Description | Technology |
|---|------|-------------|------------|
| 1 | 01-classic-wealth-distribution.html | **Standard Sugarscape setup.** Clear visualization of how simple rules produce complex wealth distributions. | Canvas 2D |
| 2 | 02-vision-impact-comparison.html | **Vision distributions compared.** Side-by-side populations showing how information inequality drives wealth inequality. | Canvas 2D |
| 3 | 03-metabolism-impact.html | **Metabolism distributions compared.** Low-metabolism populations accumulate more total wealth. | Canvas 2D |
| 4 | 04-combined-fitness-advantages.html | **Compounding inequality.** Agents with BOTH high vision AND low metabolism dominate. Small initial advantages become large outcome differences. | Canvas 2D |
| 5 | 05-spatial-wealth-segregation.html | **Geographic clustering.** Wealthy vs poor agents cluster spatially. Economic class becomes geographic class. | Canvas 2D |
| 6 | 06-temporal-wealth-evolution.html | **Time-lapse evolution.** Shows the transition from initial equality to stable stratification. | Canvas 2D |
| 7 | 07-lorenz-curve-interactive.html | **Interactive Lorenz curve analysis.** Adjust parameters and see immediate effects on curve shape. | Canvas 2D |
| 8 | 08-wealth-histogram-distribution.html | **Pareto distribution.** Agent wealth follows a power-law distribution, just like real-world wealth data. | Canvas 2D |
| 9 | 09-inheritance-effects.html | **Dynastic wealth.** Children inherit parent's position and wealth, creating persistent dynasties. | Canvas 2D |
| 10 | 10-taxation-redistribution.html | **Taxation policy experiments.** Explores how different tax rates affect inequality and total welfare. | Canvas 2D |
| 11 | 11-social-mobility-tracking.html | **Social mobility.** Tracks whether agents can move between wealth quintiles. Initial position predicts final position. | Canvas 2D |
| 12 | 12-agent-lifespan-wealth-correlation.html | **Wealth and longevity.** Positive correlation between wealth and survival. Wealthy agents live longer, compounding advantages. | Canvas 2D |
| 13 | 13-equal-vs-heterogeneous-start.html | **Starting conditions.** Equal vs. initial advantages both converge to similar inequality levels. | Canvas 2D |
| 14 | 14-resource-regeneration-variants.html | **Resource abundance effects.** Counterintuitively, more resources can increase competition and inequality. | Canvas 2D |
| 15 | 15-sparse-vs-dense-resources.html | **Resource distribution.** Concentrated resources create more extreme inequality than spread-out resources. | Canvas 2D |
| 16 | 16-population-dynamics.html | **Population size effects.** How population affects per-capita wealth and inequality measures. | Canvas 2D |
| 17 | 17-vision-range-comparison.html | **Vision range heterogeneity.** Narrow vs. wide vision distributions. More heterogeneity → more inequality. | Canvas 2D |
| 18 | 18-multi-generation-analysis.html | **Multi-generation tracking.** Wealth patterns across multiple agent generations show persistence of family wealth. | Canvas 2D |
| 19 | 20-pareto-principle-demonstration.html | **[Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle) (80-20 Rule).** ~80% of wealth held by ~20% of agents. Named for Vilfredo Pareto (1848-1923). | Canvas 2D |

---

## Web Audio API

Audio synthesis and visualization (41 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1-15 | Audio Visualizers | Frequency spectrum, oscilloscope, waveform displays | Canvas 2D + Web Audio |
| 16-25 | 3D Audio | Spatial audio visualization | Three.js + Web Audio |
| 26-35 | Synthesizers | Theremin, FM synthesis, modular synth | Canvas 2D + Web Audio |
| 36-41 | MIDI & Effects | MIDI integration, beat detection | Web Audio |

---

## WebAssembly

High-performance simulations using WASM (14 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | n-body.html | N-body gravitational simulation | WebAssembly |
| 2 | prime-sieve.html | Sieve of Eratosthenes | WebAssembly |
| 3 | sorting.html | Sorting algorithm comparison | WebAssembly |
| 4 | convex-hull.html | Convex hull computation | WebAssembly |
| 5 | voronoi.html | Voronoi diagram generation | WebAssembly |
| 6 | terrain.html | Procedural terrain generation | WebAssembly |
| 7 | metaballs.html | Marching squares metaballs | WebAssembly |
| 8 | cloth.html | Cloth physics simulation | WebAssembly |
| 9 | boids.html | Flocking simulation | WebAssembly |
| 10 | ant-colony.html | Ant colony optimization | WebAssembly |
| 11-14 | Additional WASM demos | Various high-performance computations | WebAssembly |

---

## WebGL Shaders

GPU shader effects using raw WebGL (29 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1-10 | Basic Shaders | Plasma, liquid metal, aurora, fractals | WebGL |
| 11-20 | Advanced | Mandelbrot zoom, Julia set, ray marching, domain warping | WebGL |
| 21-29 | Effects | Truchet tiles, cellular noise, volumetric light, SDF gallery | WebGL |

---

## Wolf Sheep Predation

Predator-prey ecosystem simulations (20 files).

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1-5 | Basic Model | Wolves, sheep, grass resource dynamics | Canvas 2D |
| 6-10 | Analysis | Population graphs, phase space diagrams, energy distributions | Canvas 2D + Charts |
| 11-15 | Visualization | Spatial density heatmaps, movement trails, death analysis | Canvas 2D |
| 16-20 | Advanced | Parameter sensitivity, scenario comparisons, equilibrium analysis | Canvas 2D |

---

## Wolfram CA

| # | File | Visualization | Technology |
|---|------|---------------|------------|
| 1 | index.html | All 256 elementary cellular automata rules | Canvas 2D |

---

## Statistics Summary

### By Technology

| Technology | Count | Percentage |
|------------|-------|------------|
| Canvas 2D | ~850 | 83% |
| Three.js | ~120 | 12% |
| WebGL | ~30 | 3% |
| D3.js | ~20 | 2% |
| PixiJS | 17 | 2% |
| Lottie | 14 | 1% |
| WebAssembly | 14 | 1% |
| SVG/CSS | ~20 | 2% |
| Web Audio | ~45 | 4% |

### By Category Size

| Size | Categories |
|------|------------|
| 40+ files | Elliptic Curves, Solar Flare, Three.js TSL, TSL Shaders, Web Audio, Gravity Orbits |
| 20-39 files | Emergent Behaviors, Ethnocentrism, Fire Percolation, Follower, Boids, Schelling, Sugarscape, Wolf-Sheep, WebGL Shaders |
| 10-19 files | Altruism Evolution, Autumn Leaves, Biological, Game of Life, Lottie, Mathematical Art, Particle Systems, Physics Simulations, Petri Arena |
| 1-9 files | All others |

---

*Generated: December 2024*
*Total Simulations: 936*
*Categories: 50*
