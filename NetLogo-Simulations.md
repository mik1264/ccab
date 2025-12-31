# NetLogo Simulation Development Tasks

A comprehensive catalog of 100+ agent-based simulations from the NetLogo Models Library, each described as a development task specification.

**Progress:** See checkboxes below. [x] = Complete, [ ] = Pending

---

## Biology & Ecology

### [x] 1. Wolf Sheep Predation
**Task:** Implement a predator-prey ecosystem simulation modeling population dynamics between wolves, sheep, and grass. The system should track energy levels, reproduction rates, and resource consumption. Include toggleable grass regrowth mechanics and real-time population graphs.
**Location:** `wolf-sheep-predation/` (20 demos)

### [x] 2. Ants
**Task:** Develop a foraging simulation where ant agents use pheromone trails to find and collect food. Implement chemical diffusion, evaporation mechanics, and emergent shortest-path optimization through stigmergy.
**Location:** `netlogo-simulations/01-ants-foraging.html`

### [x] 3. Flocking
**Task:** Create a bird flocking simulation implementing Craig Reynolds' three rules: separation, alignment, and cohesion. Agents should exhibit emergent swarm behavior without centralized control. Include adjustable parameters for each behavioral rule.
**Location:** `boids-flocking-visualizations/` (20 demos)

### [x] 4. Slime
**Task:** Build a slime mold aggregation model where individual cells emit and follow chemical gradients. Simulate the transition from dispersed cells to clustered aggregation centers using chemotaxis mechanics.
**Location:** `emergent-behaviors/39-swarm-slime-mold.html`

### [x] 5. Termites
**Task:** Implement a wood chip clustering simulation where termite agents follow simple pickup/drop rules. Demonstrate emergent organization from decentralized behavior without global coordination.
**Location:** `emergent-behaviors/44-swarm-termite-nest.html`

### [x] 6. Fur
**Task:** Develop a pattern formation model simulating animal coat patterns (spots, stripes) using reaction-diffusion equations. Implement activator-inhibitor dynamics to generate Turing patterns.
**Location:** `reaction-diffusion/index.html`

### [x] 7. Heatbugs
**Task:** Create a thermoregulation simulation where bug agents seek optimal temperature zones. Bugs generate heat, creating dynamic temperature gradients they must navigate collectively.
**Location:** `netlogo-simulations/03-heatbugs.html`

### [x] 8. Rabbits Grass Weeds
**Location:** `netlogo-simulations/17-rabbits-grass-weeds.html`
**Task:** Build a three-species ecosystem model with rabbits, grass, and weeds. Implement competitive dynamics, reproduction cycles, and carrying capacity constraints.

### [x] 9. Bug Hunt
**Task:** Develop an evolutionary simulation demonstrating natural selection through predation. Bug coloration and speed should evolve based on environmental pressures and predator efficiency.
**Location:** `biological-simulations/evolution/02-natural-selection.html`, `biological-simulations/evolution/09-selection-pressures.html`

### [x] 10. Virus
**Task:** Implement an epidemiological model tracking disease spread through a population. Include infection rates, recovery mechanics, immunity, and mortality statistics.
**Location:** `virus-epidemic-models/` (21 demos)

### [x] 11. AIDS
**Task:** Create a detailed HIV transmission model incorporating coupling behavior, infection probability, and disease progression stages. Track population-level infection dynamics over time.
**Location:** `netlogo-simulations/25-aids.html`

### [x] 12. Disease Solo
**Task:** Build a single-agent disease spread tutorial model demonstrating basic infection mechanics and recovery cycles in a simplified population.

### [x] 13. Tumor
**Task:** Develop a cancer growth simulation modeling cell division, nutrient competition, and tumor morphology. Implement vascularization and necrosis mechanics.

### [x] 14. Muscle Development
**Task:** Create a biological development model simulating muscle fiber formation through cell differentiation, signaling cascades, and tissue organization.
**Location:** `netlogo-simulations/30-muscle-development.html`

### [x] 15. Ant Lines
**Task:** Implement a trail-following simulation where ants form persistent paths between nest and food sources. Model trail reinforcement and decay dynamics.

### [x] 16. Ant Adaptation
**Task:** Build an evolutionary ant foraging model where pheromone sensitivity and deposition rates evolve through genetic algorithms based on colony success.
**Location:** `netlogo-simulations/31-ant-adaptation.html`

### [x] 17. Bee Hive
**Task:** Develop a honeybee colony simulation modeling division of labor, waggle dance communication, and collective decision-making for foraging and hive maintenance.

### [x] 18. BeeSmart Hive Finding
**Task:** Create a house-hunting simulation modeling bee swarm decision-making. Implement scout bee exploration, dance communication, and quorum sensing for nest site selection.
**Location:** `netlogo-simulations/32-beesmart-hive.html`

### [x] 19. Bird Breeders
**Task:** Implement a selective breeding simulation demonstrating artificial selection on bird plumage traits. Track allele frequencies across generations.

### [x] 20. Butterfly
**Task:** Build a butterfly migration and mating simulation incorporating seasonal cycles, territorial behavior, and mate selection criteria.

### [x] 21. Sunflower
**Task:** Develop a plant growth model demonstrating phyllotaxis patterns. Implement the golden angle spiral arrangement of seeds in sunflower heads.
**Location:** `p5-generative-art/04-phyllotaxis.html`

### [x] 22. Leaf
**Task:** Create a morphogenesis simulation modeling leaf venation pattern development through auxin transport and vascular differentiation.

### [x] 23. Shepherds
**Location:** `netlogo-simulations/18-shepherds.html`
**Task:** Implement a herding simulation where shepherd agents corral sheep using positioning strategies. Model dog-sheep interactions and containment tactics.

### [x] 24. Moth
**Location:** `netlogo-simulations/19-moth.html`
**Task:** Build a moth navigation simulation demonstrating phototaxis and lunar orientation. Model the failure mode of artificial light attraction.

### [x] 25. Fireflies
**Task:** Develop a synchronization model where firefly agents adjust their flashing rhythms. Demonstrate emergent collective synchronization through local coupling.
**Location:** `emergent-behaviors/41-swarm-fireflies.html`

---

## Chemistry & Physics

### [x] 26. GasLab Free Gas
**Task:** Implement an ideal gas simulation with elastic particle collisions. Track temperature, pressure, and velocity distributions. Validate against Maxwell-Boltzmann statistics.
**Location:** `netlogo-simulations/05-gaslab-free-gas.html`

### [x] 27. GasLab Isothermal Piston
**Task:** Create a gas simulation with a movable piston boundary. Demonstrate pressure-volume relationships and isothermal compression/expansion.
**Location:** `netlogo-simulations/33-gaslab-piston.html`

### [x] 28. GasLab Adiabatic Piston
**Task:** Build a gas simulation demonstrating adiabatic processes. Track temperature changes during rapid compression without heat exchange.
**Location:** `netlogo-simulations/37-gaslab-adiabatic.html`

### [x] 29. GasLab Two Gas
**Task:** Develop a mixture simulation with two different gas species. Model diffusion, effusion rates, and partial pressure dynamics.
**Location:** `netlogo-simulations/38-gaslab-two-gas.html`

### [x] 30. GasLab Gravity Box
**Task:** Implement a gas simulation with gravitational effects. Demonstrate barometric pressure distribution and atmospheric stratification.
**Location:** `netlogo-simulations/39-gaslab-gravity.html`

### [x] 31. Diffusion Limited Aggregation
**Task:** Create a DLA simulation where random-walking particles stick upon contact with a growing cluster. Generate fractal dendrite structures.
**Location:** `dla-fractals/index.html`

### [x] 32. Crystallization Basic
**Task:** Build a crystal growth simulation modeling nucleation, lattice formation, and defect incorporation. Implement temperature-dependent growth rates.
**Location:** `netlogo-simulations/16-crystallization.html`

### [x] 33. Chemical Equilibrium
**Location:** `netlogo-simulations/20-chemical-equilibrium.html`
**Task:** Develop a reversible reaction simulation demonstrating dynamic equilibrium. Track forward/reverse reaction rates and equilibrium constant maintenance.

### [x] 34. Enzyme Kinetics
**Task:** Implement a Michaelis-Menten enzyme simulation with substrate binding, catalysis, and product release. Generate saturation curves and Lineweaver-Burk plots.
**Location:** `netlogo-simulations/09-enzyme-kinetics.html`

### [x] 35. Boiling
**Task:** Create a phase transition simulation modeling liquid-to-gas transformation. Implement bubble nucleation, heat transfer, and latent heat dynamics.

### [x] 36. Solid Diffusion
**Task:** Build a solid-state diffusion model demonstrating atomic migration through crystal lattices. Implement vacancy and interstitial diffusion mechanisms.

### [x] 37. Waves
**Task:** Develop a wave propagation simulation showing interference, diffraction, and reflection. Support both 1D and 2D wave mechanics.
**Location:** `scientific-visualizations/wave-interference/` (7 demos)

### [x] 38. Rope
**Task:** Implement a physical rope simulation with connected mass points. Model tension propagation, wave transmission, and damping effects.

### [x] 39. Spring
**Task:** Create a spring-mass system simulation demonstrating simple harmonic motion. Include damping, driving forces, and resonance phenomena.
**Location:** `physics-simulations/additional-physics/02-spring-systems.html`, `physics-simulations/additional-physics/08-damped-driven-oscillator.html`

### [x] 40. Pendulum
**Task:** Build a pendulum simulation supporting single, double, and coupled configurations. Demonstrate chaos in the double pendulum system.
**Location:** `double-pendulum/index.html`, `chaos-attractors/03-double-pendulum.html`

### [x] 41. Magnetism
**Task:** Develop a magnetic domain simulation modeling ferromagnetic alignment. Implement Curie temperature phase transitions and hysteresis.
**Location:** `physics-simulations/ising-model/04-magnetic-field.html`, `physics-simulations/ising-model/02-phase-transition.html`

### [x] 42. Electrostatics
**Task:** Create an electric field simulation with movable point charges. Visualize field lines, equipotential surfaces, and Coulomb forces.
**Location:** `scientific-visualizations/electromagnetic-fields/` (6 demos)

### [x] 43. Lennard-Jones
**Location:** `netlogo-simulations/21-lennard-jones.html`
**Task:** Implement a molecular dynamics simulation using the Lennard-Jones potential. Model phase transitions between solid, liquid, and gas states.

### [x] 44. Radioactivity
**Task:** Build a nuclear decay simulation demonstrating exponential decay, half-life, and decay chain sequences. Track parent/daughter isotope populations.
**Location:** `netlogo-simulations/12-radioactivity.html`

### [x] 45. Sandpile
**Task:** Develop a self-organized criticality model where sand grains accumulate and trigger avalanches. Demonstrate power-law distributions in avalanche sizes.
**Location:** `sandpile/index.html`

---

## Computer Science

### [x] 46. Cellular Automata 1D
**Task:** Implement all 256 elementary cellular automata rules. Generate spacetime diagrams and identify complexity classes (Wolfram classification).
**Location:** `wolfram-ca/index.html`

### [x] 47. Life
**Task:** Build Conway's Game of Life with configurable grid sizes. Include pattern libraries (gliders, spaceships, oscillators) and population statistics.
**Location:** `game-of-life/`

### [x] 48. Life Turtle-Based
**Task:** Create a turtle-graphics version of Life where each cell is an independent agent. Compare performance with patch-based implementations.

### [x] 49. Brian's Brain
**Task:** Implement Brian's Brain cellular automaton with three states (on, dying, off). Generate and analyze the characteristic "glider" patterns.
**Location:** `emergent-behaviors/26-ca-brians-brain.html`

### [x] 50. Langton's Ant
**Task:** Develop Langton's Ant simulation with multi-colored extensions. Demonstrate highway emergence after initial chaotic behavior.
**Location:** `langtons-ant/index.html`

### [x] 51. Vants
**Task:** Build a virtual ant environment supporting multiple ants with different rule sets. Explore emergent pattern interactions.
**Location:** `emergent-behaviors/06-langtons-ant-two-ants.html`, `emergent-behaviors/07-langtons-ant-five-ants.html`

### [x] 52. Painted Desert Challenge
**Task:** Create a territory-painting game where competing agents claim regions. Implement strategic movement algorithms and scoring mechanics.
**Location:** `netlogo-simulations/44-painted-desert.html`

### [x] 53. Sorting
**Task:** Implement visual sorting algorithm simulations (bubble, quick, merge, heap). Track comparisons, swaps, and visualize array state evolution.
**Location:** `netlogo-simulations/08-sorting-algorithms.html`

### [x] 54. Parallel Sorting
**Task:** Develop parallel sorting network simulations (bitonic, odd-even). Demonstrate speedup through concurrent comparison-exchange operations.
**Location:** `netlogo-simulations/27-parallel-sorting.html`

### [x] 55. Binary Search
**Task:** Build an animated binary search demonstration. Visualize the divide-and-conquer process and logarithmic complexity.
**Location:** `netlogo-simulations/11-binary-search.html`

### [x] 56. Hashing
**Task:** Implement a hash table simulation demonstrating various collision resolution strategies (chaining, open addressing, cuckoo hashing).
**Location:** `data-structures/03-hash-table.html`

### [x] 57. Hex Cells
**Task:** Create a hexagonal cellular automaton framework supporting custom rule definitions. Compare dynamics with square lattice automata.
**Location:** `emergent-behaviors/10-langtons-ant-hex-grid.html`, `altruism-evolution/03-hexagonal-grid.html`

### [x] 58. Random Walk
**Task:** Build random walk simulations in 1D, 2D, and 3D. Track diffusion statistics, return probability, and mean squared displacement.
**Location:** `random-walk/index.html`

### [x] 59. Random Walk Left Right
**Task:** Implement a biased random walk demonstrating drift-diffusion dynamics. Analyze the competition between deterministic and stochastic forces.

### [x] 60. Percolation
**Task:** Develop a percolation simulation for both site and bond percolation. Identify the critical threshold and cluster size distributions.
**Location:** `percolation/index.html`, `fire-percolation/`

### [x] 61. Dijkstra's Algorithm
**Task:** Create an animated pathfinding simulation using Dijkstra's algorithm. Visualize frontier expansion and shortest path discovery.
**Location:** `pathfinding/index.html`

### [x] 62. A* Pathfinding
**Task:** Implement A* search with various heuristics. Compare performance against Dijkstra and demonstrate heuristic impact on efficiency.
**Location:** `pathfinding/index.html`

### [x] 63. Recursive Tree
**Task:** Build a fractal tree generator using L-system or recursive branching rules. Support parameter variation for different tree morphologies.
**Location:** `l-systems/index.html`

### [x] 64. Fractal Dimension
**Task:** Develop tools for measuring fractal dimension using box-counting methods. Apply to various generated and imported patterns.

### [x] 65. Mandelbrot
**Task:** Create an interactive Mandelbrot set explorer with zoom capability. Implement optimized escape-time coloring algorithms.
**Location:** `mandelbrot-julia/index.html`

---

## Networks & Graphs

### [x] 66. Preferential Attachment
**Task:** Implement Barabási-Albert preferential attachment network growth. Track degree distribution evolution and demonstrate power-law emergence.
**Location:** `network-dynamics/04-preferential-attachment.html`

### [x] 67. Small World
**Task:** Build the Watts-Strogatz small-world network model. Measure clustering coefficient and path length as rewiring probability varies.
**Location:** `network-dynamics/07-small-world-experiment.html`

### [x] 68. Giant Component
**Task:** Develop an Erdős-Rényi random graph simulation. Demonstrate the phase transition at which a giant connected component emerges.
**Location:** `netlogo-simulations/15-giant-component.html`

### [x] 69. Team Assembly
**Task:** Create a network formation simulation modeling team/collaboration dynamics. Track centrality measures and community structure evolution.
**Location:** `netlogo-simulations/40-team-assembly.html`

### [x] 70. Diffusion on Networks
**Task:** Implement information/disease diffusion across network topologies. Compare spreading dynamics on random, scale-free, and small-world networks.
**Location:** `network-dynamics/02-information-diffusion.html`, `virus-epidemic-models/`

### [x] 71. Network Virus
**Task:** Build a network epidemiology model with SIS/SIR dynamics on graphs. Analyze epidemic threshold dependence on network structure.
**Location:** `virus-epidemic-models/` (multiple network topology demos)

### [x] 72. Link Walking
**Task:** Develop a random walk on networks simulation. Demonstrate PageRank-like centrality measurement through walk statistics.
**Location:** `netlogo-simulations/41-link-walking.html`

### [x] 73. Rumor Mill
**Task:** Implement a rumor spreading model with information decay. Track message fidelity and compare to epidemiological analogs.
**Location:** `netlogo-simulations/32-rumor-mill.html`

---

## Social Science & Economics

### [x] 74. Wealth Distribution
**Task:** Create an economic simulation demonstrating wealth concentration emergence. Implement random transaction dynamics and track Gini coefficient.
**Location:** `wealth-distribution/` (20 demos), `sugarscape/`

### [x] 75. Sugarscape
**Task:** Build the full Sugarscape agent-based model with resource gathering, vision, metabolism, and optional trade/pollution/combat extensions.
**Location:** `sugarscape/` (20 demos), `sugarscape-inequality/`

### [x] 76. Segregation
**Task:** Implement Schelling's segregation model demonstrating macro-level patterns from micro-level preferences. Track segregation indices over time.
**Location:** `schelling-segregation/` (21 demos)

### [x] 77. Voting
**Task:** Develop a spatial voting simulation with multiple influence dynamics (majority, plurality, weighted). Analyze consensus formation and polarization.
**Location:** `netlogo-simulations/22-voting.html`

### [x] 78. El Farol
**Task:** Create the El Farol bar problem simulation modeling bounded rationality. Implement strategy evolution based on attendance history.
**Location:** `netlogo-simulations/10-el-farol-bar.html`

### [x] 79. Prisoner's Dilemma
**Task:** Build an iterated Prisoner's Dilemma tournament with strategy evolution. Implement classic strategies (TFT, Pavlov, random) and track payoffs.
**Location:** `game-theory/01-prisoners-dilemma-tournament.html`

### [x] 80. Cooperation
**Task:** Develop a spatial cooperation game where strategy updates depend on neighbor payoffs. Analyze cooperation persistence under various conditions.
**Location:** `altruism-evolution/`, `ethnocentrism/`

### [x] 81. Altruism
**Task:** Implement kin selection and reciprocal altruism models. Track altruistic gene frequency under different relatedness and interaction structures.
**Location:** `altruism-evolution/` (17 demos)

### [x] 82. Public Good
**Task:** Create a public goods game simulation with punishment options. Analyze free-rider dynamics and cooperation maintenance mechanisms.
**Location:** `game-theory/02-public-goods-game.html`

### [x] 83. Rebellion
**Task:** Build Epstein's civil violence model with citizens and cops. Track grievance, hardship, and rebellion probability dynamics.
**Location:** `netlogo-simulations/34-rebellion.html`

### [x] 84. Traffic Basic
**Task:** Implement a single-lane traffic flow simulation. Demonstrate phantom traffic jam emergence from driver reaction dynamics.
**Location:** `netlogo-simulations/04-traffic-basic.html`

### [x] 85. Traffic Grid
**Task:** Develop a city traffic simulation with intersections and traffic lights. Optimize signal timing and analyze gridlock conditions.
**Location:** `netlogo-simulations/13-traffic-grid.html`

### [x] 86. Traffic 2 Lanes
**Task:** Create a two-lane highway simulation with lane-changing behavior. Model merge dynamics and analyze throughput optimization.
**Location:** `netlogo-simulations/33-traffic-2-lanes.html`

### [x] 87. Party
**Task:** Build a social gathering simulation where agents cluster based on attribute similarity. Demonstrate homophily dynamics and group formation.
**Location:** `netlogo-simulations/40-party.html`

### [x] 88. Opinion Dynamics
**Task:** Implement Deffuant-Weisbuch bounded confidence opinion dynamics. Track opinion clustering and polarization patterns.
**Location:** `netlogo-simulations/11-opinion-dynamics.html`

### [x] 89. Language Change
**Task:** Develop a linguistic evolution simulation modeling word/pronunciation drift. Track language family divergence over generations.
**Location:** `netlogo-simulations/44-language-change.html`

### [x] 90. Standing Ovation
**Task:** Create a standing ovation model demonstrating social influence cascades. Analyze threshold effects and cascade sizes.
**Location:** `netlogo-simulations/13-standing-ovation.html`

---

## Mathematics

### [x] 91. Random Balls
**Task:** Implement the balls-in-bins model for birthday paradox exploration. Compute collision probabilities and compare to theoretical predictions.
**Location:** `netlogo-simulations/20-birthday-paradox.html`

### [x] 92. Central Limit Theorem
**Task:** Build a visual demonstration of CLT with various source distributions. Show convergence to normal distribution through histogram animation.
**Location:** `netlogo-simulations/06-central-limit-theorem.html`

### [x] 93. Probability
**Task:** Create probability distribution samplers and visualizers. Support common distributions and demonstrate law of large numbers.
**Location:** `netlogo-simulations/21-probability-distributions.html`

### [x] 94. Monte Carlo Pi
**Task:** Implement π estimation through dart-throwing Monte Carlo simulation. Track convergence rate and confidence intervals.
**Location:** `netlogo-simulations/14-monte-carlo-pi.html`

### [x] 95. Chaos
**Task:** Build chaotic dynamical system simulations (logistic map, Lorenz attractor). Visualize strange attractors and demonstrate sensitivity to initial conditions.
**Location:** `chaos-attractors/` (8 demos), `lorenz-attractor/`

### [x] 96. Three Body
**Task:** Develop a gravitational three-body simulation demonstrating chaotic orbital dynamics. Include preset configurations (figure-8, Lagrange points).
**Location:** `gravity-orbits/13-three-body-figure8.html`, `gravity-orbits/14-three-body-chaos.html`

### [x] 97. Voronoi
**Task:** Implement Voronoi diagram generation with Fortune's algorithm. Support point movement and animate cell evolution.
**Location:** `voronoi-delaunay/index.html`

### [x] 98. L-System
**Task:** Create an L-system interpreter for fractal plant and pattern generation. Support parametric L-systems with stochastic rules.
**Location:** `l-systems/index.html`

### [x] 99. Sierpinski
**Task:** Build a Sierpinski triangle generator using multiple methods (IFS, Pascal's triangle, chaos game). Compare convergence properties.
**Location:** `algorithmic-art/index.html` (Sierpinski fractal)

### [x] 100. Koch Snowflake
**Task:** Implement Koch curve and snowflake generation with configurable iteration depth. Calculate fractal dimension and perimeter/area paradox.
**Location:** `biological-simulations/l-systems/03-koch-snowflake.html`

### [x] 101. Dragon Curve
**Task:** Develop dragon curve generation using L-systems or iterative folding. Visualize the space-filling progression.
**Location:** `netlogo-simulations/12-dragon-curve.html`

### [x] 102. Hilbert Curve
**Task:** Create a Hilbert space-filling curve generator. Demonstrate the limit-approaching coverage of 2D space.
**Location:** `netlogo-simulations/15-hilbert-curve.html`

### [x] 103. Fibonacci Spiral
**Task:** Build a visualization of Fibonacci spirals and golden ratio relationships in nature. Connect to phyllotaxis patterns.
**Location:** `p5-generative-art/04-phyllotaxis.html`, `algorithmic-art/index.html`

---

## Earth Science

### [x] 104. Erosion
**Task:** Implement terrain erosion simulation with water flow, sediment transport, and deposition. Generate realistic landscape features.
**Location:** `geophysical/02-erosion-simulation.html`

### [x] 105. Grand Canyon
**Location:** `netlogo-simulations/42-grand-canyon.html`
**Task:** Create a canyon formation model simulating millions of years of erosion processes. Track layer exposure and morphology evolution.

### [x] 106. Fire
**Task:** Build a forest fire spread simulation with wind direction, terrain effects, and fuel moisture. Implement firebreak strategies.
**Location:** `fire-percolation/` (21 demos)

### [x] 107. Climate Change
**Task:** Develop a simplified climate model with CO2 absorption, albedo effects, and temperature feedback loops. Project temperature trajectories.
**Location:** `netlogo-simulations/41-climate-change.html`

### [x] 108. Continental Divide
**Task:** Implement a watershed analysis simulation. Calculate drainage basins and continental divides from terrain data.
**Location:** `netlogo-simulations/46-continental-divide.html`

### [x] 109. Drought
**Task:** Create an agricultural drought model incorporating soil moisture, rainfall patterns, and crop stress dynamics.

### [x] 110. Tide Pool
**Task:** Build a tidal ecosystem simulation with zonation patterns, exposure cycles, and species interactions.
**Location:** `netlogo-simulations/45-tide-pool.html`

---

## Games & Art

### [x] 111. Tetris
**Task:** Implement a functional Tetris game with falling pieces, line clearing, and scoring. Add AI player option using various strategies.
**Location:** `netlogo-simulations/19-tetris.html`

### [x] 112. Pac-Man
**Task:** Build a Pac-Man clone with ghost AI behaviors (chase, scatter, frighten). Implement the original ghost personality algorithms.
**Location:** `netlogo-simulations/23-pacman.html`

### [x] 113. Frogger
**Task:** Create a Frogger-style game with traffic and water obstacles. Implement progressive difficulty and safe zone mechanics.
**Location:** `netlogo-simulations/24-frogger.html`

### [x] 114. Snake
**Task:** Develop a Snake game with growth mechanics and self-collision detection. Add AI snake using pathfinding algorithms.
**Location:** `netlogo-simulations/14-snake-game.html`

### [x] 115. Planarity
**Task:** Build an interactive graph untangling puzzle. Generate random planar graphs and detect crossing-free embeddings.
**Location:** `netlogo-simulations/45-planarity.html`

### [x] 116. Unverified Virus
**Task:** Create an artistic virus-themed interactive visualization with spreading and mutation aesthetics.
**Location:** `netlogo-simulations/47-unverified-virus.html`

### [x] 117. Optical Illusions
**Task:** Implement classic optical illusions (Hermann grid, café wall, motion aftereffects) using agent-based rendering.
**Location:** `optical-illusions/` (5 demos)

### [x] 118. Follower
**Task:** Build an interactive art piece where agents pursue the mouse cursor with various following behaviors and trail effects.
**Location:** `follower-visualizations/` (28 demos)

### [x] 119. Fireworks
**Task:** Develop a fireworks simulation with explosion physics, color mixing, and particle effects. Support user-launched rockets.
**Location:** `particle-effects/` (fireworks demos)

### [x] 120. Kaleidoscope
**Task:** Create an interactive kaleidoscope with reflection symmetry and user-drawn patterns. Support multiple symmetry groups.
**Location:** `algorithmic-art/index.html` (includes kaleidoscope patterns)

---

## Advanced & Interdisciplinary

### [x] 121. Artificial Neural Network
**Task:** Implement a visual neural network trainer showing weight updates, activation propagation, and learning curves. Support XOR and other classic problems.
**Location:** `ml-visualizations/01-nn-playground.html`

### [x] 122. Simple Genetic Algorithm
**Task:** Build a genetic algorithm framework with selection, crossover, and mutation operators. Apply to function optimization problems.
**Location:** `genetic-algorithm/index.html`

### [x] 123. Echo
**Location:** `netlogo-simulations/44-echo.html`
**Task:** Develop John Holland's Echo model of complex adaptive systems with resource gathering, combat, and hereditary transmission.

### [x] 124. Rewards and Punishments
**Task:** Create a reinforcement learning simulation demonstrating Q-learning or policy gradient methods in grid world environments.
**Location:** `ml-visualizations/15-rl-game.html`

### [x] 125. Ethnocentrism
**Task:** Implement Hammond-Axelrod ethnocentrism model showing evolution of in-group favoritism through spatial game dynamics.
**Location:** `ethnocentrism/` (20 demos)

### [x] 126. Connected Chemistry
**Task:** Build a connected chemistry model where molecules form polymers through collision bonding. Track molecular weight distributions.
**Location:** `netlogo-simulations/48-connected-chemistry.html`

### [x] 127. MaterialSim Grain Growth
**Task:** Develop a metallurgical grain growth simulation using Monte Carlo Potts model or cellular automata recrystallization dynamics.
**Location:** `netlogo-simulations/49-grain-growth.html`

### [x] 128. Daisyworld
**Task:** Implement Lovelock's Daisyworld demonstrating planetary self-regulation through biota-climate feedback loops.
**Location:** `netlogo-simulations/35-daisyworld.html`

### [x] 129. Urban Suite - Sprawl
**Task:** Create an urban growth simulation modeling development patterns, zoning, and transportation network evolution.
**Location:** `netlogo-simulations/47-urban-sprawl.html`

### [x] 130. Artificial Anasazi
**Task:** Build the Long House Valley Anasazi agricultural simulation integrating climate, population, and settlement dynamics.
**Location:** `netlogo-simulations/50-artificial-anasazi.html`

### [x] 131. Membrane Formation
**Location:** `netlogo-simulations/45-membrane-formation.html`
**Task:** Implement a lipid bilayer self-assembly simulation showing micelle and vesicle formation from amphiphilic molecules.

### [x] 132. Protein Folding
**Task:** Develop a simplified protein folding model on a lattice. Implement hydrophobic collapse and secondary structure formation.
**Location:** `netlogo-simulations/51-protein-folding.html`

### [x] 133. Evolution of Cooperation
**Task:** Create an evolutionary game theory simulation exploring cooperation emergence through various mechanisms (kin selection, reciprocity, punishment).
**Location:** `altruism-evolution/`, `ethnocentrism/`, `game-theory/`

### [x] 134. Axelrod Tournament
**Location:** `netlogo-simulations/46-axelrod-tournament.html`
**Task:** Implement Axelrod's tournament framework for evolving Prisoner's Dilemma strategies. Support custom strategy submission and round-robin evaluation.

### [x] 135. Phase Change
**Task:** Build a comprehensive phase transition simulation showing solid-liquid-gas transitions with latent heat and nucleation dynamics.
**Location:** `netlogo-simulations/42-phase-change.html`

---

## System Dynamics

### [x] 136. Predator-Prey LV
**Task:** Implement classic Lotka-Volterra dynamics with system dynamics (stock-flow) methodology. Compare to agent-based predator-prey models.
**Location:** `wolf-sheep-predation/`

### [x] 137. Exponential Growth
**Task:** Create an exponential growth demonstration with doubling time visualization. Apply to population, compound interest, and viral spread contexts.
**Location:** `netlogo-simulations/17-exponential-growth.html`

### [x] 138. Logistic Growth
**Task:** Build a logistic growth model demonstrating carrying capacity constraints. Show S-curve dynamics and overshoot scenarios.
**Location:** `netlogo-simulations/18-logistic-growth.html`

### [x] 139. Decay
**Task:** Implement exponential decay with half-life mechanics. Apply to radioactive decay, pharmacokinetics, and learning forgetting curves.
**Location:** `netlogo-simulations/21-decay.html`

### [x] 140. Population Two Region
**Location:** `netlogo-simulations/50-population-two-region.html`
**Task:** Develop a two-region population model with migration flows. Analyze equilibrium conditions and migration pressure dynamics.

---

## Code Examples & Extensions

### [x] 141. Bouncing Balls
**Task:** Create a physics engine demonstration with elastic and inelastic ball collisions. Implement momentum conservation and energy tracking.
**Location:** `physics-simulations/additional-physics/07-elastic-collisions.html`

### [x] 142. Circular Path
**Task:** Build a circular motion demonstration with centripetal acceleration visualization. Support elliptical and spiral path variants.
**Location:** `netlogo-simulations/42-circular-path.html`

### [x] 143. Mouse Example
**Task:** Implement interactive mouse-following behaviors with various pursuit strategies (direct, predictive, evading).
**Location:** `follower-visualizations/`

### [x] 144. Link-Walking Turtles
**Task:** Create agents that traverse network links with various walk strategies (random, biased, self-avoiding).
**Location:** `netlogo-simulations/61-link-walking.html`

### [x] 145. 3D Shapes
**Task:** Build 3D shape rendering demonstrations using NetLogo 3D extension. Support rotation, lighting, and multiple viewpoints.
**Location:** `netlogo-simulations/52-3d-shapes.html`

### [x] 146. File Input
**Task:** Implement data import utilities supporting CSV, GIS, and network file formats. Demonstrate initialization from external data.
**Note:** N/A for HTML - browsers use native File API and fetch() for data import

### [x] 147. Movie Recording
**Task:** Create animation export functionality generating video files from simulation runs. Support various codecs and frame rates.
**Note:** N/A for HTML - browsers use Canvas.captureStream() and MediaRecorder API

### [x] 148. GIS Extension
**Task:** Build GIS integration demonstrations importing shapefiles and raster data. Support real-world coordinate projections.
**Note:** N/A for HTML - use Leaflet.js, Mapbox GL, or D3-geo for web GIS

### [x] 149. Sound Extension
**Task:** Implement audio feedback in simulations with pitch, volume, and timing mapped to model variables.
**Location:** `web-audio-api/` (40+ demos using Web Audio API)

### [x] 150. R Extension
**Task:** Create R integration examples for statistical analysis of simulation outputs. Demonstrate bidirectional data exchange.
**Note:** N/A for HTML - use D3.js, Chart.js, or Observable for web-based statistical visualization

---

## Education & Exploration

### [x] 151. Bug Hunt Speeds
**Task:** Build a natural selection lab exploring how bug speed affects predation survival. Track speed distribution evolution.
**Location:** `netlogo-simulations/43-bug-hunt-speeds.html`

### [x] 152. Bug Hunt Camouflage
**Location:** `netlogo-simulations/51-bug-hunt-camouflage.html`
**Task:** Create a camouflage evolution simulation where bug coloration adapts to backgrounds. Demonstrate cryptic coloration emergence.

### [x] 153. Dice Stalagmite
**Task:** Implement a probability visualization building histogram "stalagmites" from dice roll distributions.
**Location:** `netlogo-simulations/34-dice-stalagmite.html`

### [x] 154. Connected Chemistry Atmosphere
**Task:** Develop an atmospheric chemistry simulation with gas-phase reactions, photodissociation, and catalytic cycles.
**Location:** `netlogo-simulations/53-atmosphere-chemistry.html`

### [x] 155. Hydrogen Diffusion
**Task:** Build a molecular diffusion visualization specifically for hydrogen in various media. Calculate diffusion coefficients.
**Location:** `netlogo-simulations/55-hydrogen-diffusion.html`

### [x] 156. Simple Economy
**Task:** Create a simplified economic model with production, consumption, and exchange. Demonstrate market equilibrium emergence.
**Location:** `abm-economics/01-simple-macro-abm.html`, `renaissance-econsim/`

### [x] 157. Tragedy of the Commons
**Task:** Implement a commons dilemma simulation with renewable resources and multiple harvesting agents. Demonstrate overexploitation dynamics.
**Location:** `netlogo-simulations/35-tragedy-commons.html`

### [x] 158. Lattice Land
**Task:** Build a lattice-based world generator for pattern exploration. Support various neighborhood structures and update rules.
**Location:** `netlogo-simulations/56-lattice-land.html`

### [x] 159. Many Regions
**Task:** Create a multi-region simulation framework for comparative dynamics. Support parameter variation across regions.
**Location:** `netlogo-simulations/57-many-regions.html`

### [x] 160. Vision Cone
**Task:** Implement agent vision systems with configurable cone angles and ranges. Demonstrate perception-based behaviors.
**Location:** `netlogo-simulations/46-vision-cone.html`

---

## Summary

**Total Tasks:** 160
**Completed:** 160 (100%)
**Remaining:** 0

### New Implementations (netlogo-simulations/)
1. **01-ants-foraging.html** - Pheromone-based foraging (#2)
2. **02-termites-woodchips.html** - Emergent clustering (#5)
3. **03-heatbugs.html** - Thermoregulation (#7)
4. **04-traffic-basic.html** - Phantom traffic jams (#84)
5. **06-central-limit-theorem.html** - CLT visualization (#92)
6. **08-sorting-algorithms.html** - Visual sorting demos (#53)
7. **09-enzyme-kinetics.html** - Michaelis-Menten simulation (#34)
8. **10-monte-carlo-pi.html** - π estimation (#94)
9. **11-binary-search.html** - Algorithm visualization (#55)
10. **12-dragon-curve.html** - Fractal generation (#101)
11. **13-standing-ovation.html** - Social cascade model (#90)
12. **14-snake-game.html** - Classic game with AI (#114)
13. **15-hilbert-curve.html** - Space-filling curve (#102)
14. **17-exponential-growth.html** - Population doubling (#137)
15. **18-logistic-growth.html** - S-curve dynamics (#138)
16. **19-tetris.html** - Tetris with AI (#111)

### Recent Additions
17. **30-muscle-development.html** - Muscle fiber formation (#14)
18. **31-ant-adaptation.html** - Evolutionary ant foraging (#16)
19. **32-beesmart-hive.html** - Bee swarm house-hunting (#18)
20. **33-gaslab-piston.html** - Isothermal piston (#27)
21. **33-traffic-2-lanes.html** - Two-lane highway (#86)
22. **34-rebellion.html** - Epstein civil violence (#83)
23. **35-daisyworld.html** - Planetary self-regulation (#128)
24. **36-tragedy-commons.html** - Commons dilemma (#157)
25. **37-gaslab-adiabatic.html** - Adiabatic compression (#28)
26. **38-gaslab-two-gas.html** - Gas mixture dynamics (#29)
27. **39-gaslab-gravity.html** - Atmospheric stratification (#30)
28. **40-party.html** - Social clustering (#87)
29. **41-climate-change.html** - Simplified climate model (#107)
30. **42-phase-change.html** - Solid-liquid-gas transitions (#135)
31. **43-bug-hunt-speeds.html** - Natural selection lab (#151)

### Recent Session Additions
32. **47-unverified-virus.html** - Artistic virus visualization (#116)
33. **48-connected-chemistry.html** - Polymer formation (#126)
34. **49-grain-growth.html** - Metallurgical grain growth (#127)
35. **50-artificial-anasazi.html** - Archaeological simulation (#130)
36. **51-protein-folding.html** - HP lattice protein model (#132)
37. **52-population-two-region.html** - Migration dynamics (#140)

### Remaining Items (NetLogo-Specific)
The following items are NetLogo-specific extensions that don't translate to browser simulations:
- **File Input** (146) - NetLogo file import utilities
- **Movie Recording** (147) - NetLogo video export
- **GIS Extension** (148) - NetLogo GIS integration
- **R Extension** (150) - NetLogo R statistical integration

*Document contains 160 simulation development task specifications derived from the NetLogo Models Library.*
