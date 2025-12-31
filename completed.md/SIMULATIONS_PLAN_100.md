# 100 New Simulations Plan for CCAB

A comprehensive plan for 100 new browser-based simulations across 10 new gallery categories. These simulations are designed to complement the existing 936+ demos while exploring new domains and visualization techniques.

---

## Executive Summary

| Metric | Value |
|--------|-------|
| **Total New Simulations** | 100 |
| **Completed** | 100/100 [x] |
| **New Gallery Categories** | 10 |
| **Primary Technologies** | Canvas 2D, WebGL, Three.js, D3.js, Web Audio |
| **Difficulty Distribution** | 40% Easy, 35% Medium, 25% Advanced |
| **Status** | **COMPLETE** |

---

## New Gallery Categories

1. [Cognitive Science](#1-cognitive-science-10-simulations) - Visual perception, attention, memory
2. [Network Dynamics](#2-network-dynamics-10-simulations) - Graph algorithms, spreading phenomena
3. [Game Theory](#3-game-theory-10-simulations) - Strategic interactions, evolutionary games
4. [Quantum Visualizations](#4-quantum-visualizations-10-simulations) - Simplified quantum mechanics
5. [Social Dynamics](#5-social-dynamics-10-simulations) - Opinion formation, collective behavior
6. [Geophysical Simulations](#6-geophysical-simulations-10-simulations) - Earth processes, climate
7. [Morphogenesis](#7-morphogenesis-10-simulations) - Biological pattern formation
8. [Optimization Algorithms](#8-optimization-algorithms-10-simulations) - Search, learning, evolution
9. [Time & Clocks](#9-time--clocks-10-simulations) - Temporal phenomena, synchronization
10. [Information Theory](#10-information-theory-10-simulations) - Entropy, compression, signals

---

## 1. Cognitive Science (10 Simulations)

*Exploring the intersection of perception, attention, and visual processing. These simulations demonstrate how our brains interpret and sometimes misinterpret visual information.*

### Gallery: `cognitive-science/`

| # | File | Title | Description | Technology | Difficulty |
|---|------|-------|-------------|------------|------------|
| 1 | `01-change-blindness.html` | [x] **Change Blindness** | Demonstrates how we fail to notice large changes in a scene when attention is diverted. Flickering images with gradual modifications that are surprisingly hard to detect. Based on Simons & Rensink research. | Canvas 2D | Easy |
| 2 | `02-inattentional-blindness.html` | [x] **Inattentional Blindness** | Recreation of the famous "Invisible Gorilla" experiment. Users count passes while unexpected events occur. Tracks what users notice and miss. | Canvas 2D | Easy |
| 3 | `03-visual-search.html` | [x] **Visual Search Tasks** | Interactive feature search vs. conjunction search. Demonstrates pop-out effects and serial vs. parallel processing. Measures reaction times and generates attention maps. | Canvas 2D | Medium |
| 4 | `04-gestalt-principles.html` | [x] **Gestalt Principles** | Interactive demonstrations of proximity, similarity, closure, continuity, and common fate. Users manipulate parameters to see how grouping emerges. | Canvas 2D | Easy |
| 5 | `05-apparent-motion.html` | [x] **Apparent Motion** | Phi phenomenon and beta movement demonstrations. Shows how the brain interpolates motion from discrete frames. Adjustable timing and spacing. | Canvas 2D | Easy |
| 6 | `06-memory-palace.html` | [x] **Memory Palace (Method of Loci)** | 3D walkthrough of a virtual space where users place memorable images to remember lists. Based on ancient mnemonic techniques used by memory champions. | Three.js | Advanced |
| 7 | `07-stroop-effect.html` | [x] **Stroop Effect Test** | Classic cognitive interference test. Color words displayed in mismatched colors. Measures reaction time and error rate. Includes reverse Stroop variant. | Canvas 2D | Easy |
| 8 | `08-mental-rotation.html` | [x] **Mental Rotation** | Shepard & Metzler's classic task. 3D objects that must be mentally rotated to determine if they match. Measures response time vs. rotation angle (linear relationship). | Three.js | Medium |
| 9 | `09-attentional-blink.html` | [x] **Attentional Blink** | Rapid serial visual presentation (RSVP) demonstrating the 200-500ms window where second targets are missed. Visualizes the temporal dynamics of attention. | Canvas 2D | Medium |
| 10 | `10-binocular-rivalry.html` | [x] **Binocular Rivalry Simulator** | Simulates what happens when different images are presented to each eye. Demonstrates how consciousness alternates between interpretations. Requires red-cyan glasses or cross-eye viewing. | Canvas 2D | Medium |

### Educational Value
- **Psychology students**: Direct experience of classic experiments
- **UX designers**: Understanding perceptual limitations
- **General audience**: "Aha!" moments about how we see

### Visual Signature
- Clean, clinical aesthetics with clear experimental controls
- Real-time data visualization of performance metrics
- Before/after reveals for dramatic effect

---

## 2. Network Dynamics (10 Simulations)

*Exploring how information, disease, and behaviors spread through connected systems. From viral cascades to network resilience.*

### Gallery: `network-dynamics/`

| # | File | Title | Description | Technology | Difficulty |
|---|------|-------|-------------|------------|------------|
| 1 | `01-cascade-failures.html` | [x] **Cascade Failures** | Simulates how failure in one node triggers failures in connected nodes. Models power grid blackouts, financial contagion, and infrastructure collapse. Based on Watts cascade model. | D3.js | Medium |
| 2 | `02-information-diffusion.html` | [x] **Information Diffusion** | Visualizes how memes, news, and ideas spread through social networks. Compares broadcast, viral, and word-of-mouth spreading patterns. | D3.js | Medium |
| 3 | `03-network-resilience.html` | [x] **Network Resilience** | Interactive removal of nodes (random vs. targeted attacks). Shows how different network topologies (scale-free, random, small-world) respond to damage. | D3.js | Medium |
| 4 | `04-preferential-attachment.html` | [x] **Preferential Attachment** | Watch networks grow according to Barabási-Albert model. "Rich get richer" dynamics creating power-law degree distributions in real-time. | D3.js | Easy |
| 5 | `05-community-detection.html` | [x] **Community Detection** | Animated Louvain and label propagation algorithms. Watch communities emerge from seemingly random networks. Color-coded modularity visualization. | D3.js | Advanced |
| 6 | `06-network-centrality.html` | [x] **Centrality Measures** | Compare degree, betweenness, closeness, eigenvector, and PageRank centrality. Visualize which nodes are "most important" by different metrics. | D3.js | Medium |
| 7 | `07-small-world-experiment.html` | [x] **Small World Experiment** | Interactive "six degrees of separation" demonstration. Find shortest paths between any two nodes. Recreates Milgram's famous experiment. | D3.js | Easy |
| 8 | `08-network-motifs.html` | [x] **Network Motifs** | Highlights recurring patterns (triangles, feed-forward loops, bi-fans) in networks. Shows how local structure determines global behavior. | D3.js | Medium |
| 9 | `09-link-prediction.html` | [x] **Link Prediction** | Predicts which unconnected nodes will form links. Visualizes common neighbors, Jaccard coefficient, and preferential attachment scores. | D3.js | Medium |
| 10 | `10-temporal-networks.html` | [x] **Temporal Networks** | Networks that evolve over time. Shows how connection patterns change (daily communication patterns, seasonal migrations, historical alliances). | D3.js | Advanced |

### Educational Value
- **Social scientists**: Network analysis fundamentals
- **Epidemiologists**: Disease spreading patterns
- **Engineers**: Infrastructure vulnerability

### Visual Signature
- Force-directed layouts with smooth animations
- Heat maps for centrality and clustering
- Time-slider controls for temporal evolution

---

## 3. Game Theory (10 Simulations)

*Strategic interactions, evolutionary stable strategies, and the mathematics of cooperation and competition.*

### Gallery: `game-theory/`

| # | File | Title | Description | Technology | Difficulty |
|---|------|-------|-------------|------------|------------|
| 1 | `01-prisoners-dilemma-tournament.html` | [x] **Prisoner's Dilemma Tournament** | Axelrod-style tournament with multiple strategies (Tit-for-Tat, Grudger, Random, Always Cooperate/Defect, Pavlov). Watch evolution of cooperation over rounds. | Canvas 2D | Medium |
| 2 | `02-public-goods-game.html` | [x] **Public Goods Game** | N-player game where contributions are multiplied and shared. Explores free-rider problem and how punishment mechanisms enable cooperation. | Canvas 2D | Medium |
| 3 | `03-ultimatum-game.html` | [x] **Ultimatum Game** | Proposer offers split; responder accepts or both get nothing. Demonstrates how "irrational" fairness preferences persist in evolutionary settings. | Canvas 2D | Easy |
| 4 | `04-hawks-and-doves.html` | [x] **Hawks and Doves** | Classic Maynard Smith ESS model. Visualizes population dynamics as Hawks and Doves compete. Shows mixed strategy equilibrium emergence. | Canvas 2D | Medium |
| 5 | `05-stag-hunt.html` | [x] **Stag Hunt** | Coordination game: hunt stag together (high payoff) or rabbit alone (safe). Demonstrates how trust and coordination evolve. Multiple equilibria visualization. | Canvas 2D | Easy |
| 6 | `06-matching-pennies.html` | [x] **Matching Pennies** | Zero-sum game with no pure strategy equilibrium. Visualizes mixed strategy Nash equilibrium and best response dynamics. | Canvas 2D | Easy |
| 7 | `07-battle-of-sexes.html` | [x] **Battle of the Sexes** | Coordination game with asymmetric preferences. Shows how conventions emerge and how communication helps. | Canvas 2D | Easy |
| 8 | `08-centipede-game.html` | [x] **Centipede Game** | Sequential game with growing pot. Explores backward induction paradox - why people don't follow "rational" strategy. | Canvas 2D | Medium |
| 9 | `09-chicken-game.html` | [x] **Chicken (Hawk-Dove Variant)** | Two players approach collision; first to swerve loses face, but mutual defection is catastrophic. Models nuclear deterrence, labor disputes. | Canvas 2D | Easy |
| 10 | `10-replicator-dynamics.html` | [x] **Replicator Dynamics** | Continuous-time evolutionary dynamics. Watch strategy frequencies evolve toward Nash equilibrium. Includes phase portraits and basin of attraction. | Canvas 2D | Advanced |

### Educational Value
- **Economics students**: Nash equilibrium intuition
- **Biologists**: Evolutionary stable strategies
- **General audience**: Why cooperation is hard

### Visual Signature
- Payoff matrices with highlighted cells
- Population dynamics as pie charts and flow diagrams
- Strategy evolution as animated line graphs

---

## 4. Quantum Visualizations (10 Simulations)

*Making the counterintuitive world of quantum mechanics tangible through interactive visualizations. Simplified models that capture essential quantum behavior.*

### Gallery: `quantum-visualizations/`

| # | File | Title | Description | Technology | Difficulty |
|---|------|-------|-------------|------------|------------|
| 1 | `01-double-slit.html` | [x] **Double Slit Experiment** | Watch particles build up interference pattern one at a time. Toggle between wave/particle views. Demonstrates wave-particle duality. | Canvas 2D | Medium |
| 2 | `02-quantum-tunneling.html` | [x] **Quantum Tunneling** | Particle encountering barrier it "shouldn't" be able to pass. Shows probability of tunneling vs. barrier width/height. Explains radioactive decay. | Canvas 2D | Medium |
| 3 | `03-superposition.html` | [x] **Superposition States** | Visualize a qubit as Bloch sphere. Apply quantum gates (X, Y, Z, H, T) and see state evolution. Collapse upon measurement. | Three.js | Medium |
| 4 | `04-entanglement.html` | [x] **Quantum Entanglement** | Two entangled particles. Measure one, instantly affects the other. Demonstrates EPR paradox and Bell inequality violations. | Canvas 2D | Medium |
| 5 | `05-uncertainty-principle.html` | [x] **Heisenberg Uncertainty** | Interactive demonstration: narrow the position, watch momentum spread (and vice versa). Gaussian wave packets with adjustable widths. | Canvas 2D | Easy |
| 6 | `06-schrodinger-cat.html` | [x] **Schrödinger's Cat** | Playful visualization of quantum superposition paradox. Cat in box with radioactive atom. Measurement collapses superposition. | Canvas 2D | Easy |
| 7 | `07-quantum-walk.html` | [x] **Quantum Random Walk** | Compare classical vs. quantum random walks. Quantum version shows quadratic speedup and interference patterns. Foundation for quantum algorithms. | Canvas 2D | Medium |
| 8 | `08-wave-function-collapse.html` | [x] **Wave Function Collapse** | Visualization of measurement in quantum mechanics. Probability clouds collapsing to definite positions. Multiple measurement basis options. | Canvas 2D | Medium |
| 9 | `09-quantum-harmonic-oscillator.html` | [x] **Quantum Harmonic Oscillator** | Energy levels and wave functions of quantum oscillator. Shows quantized energy levels vs. classical continuous spectrum. | Canvas 2D | Medium |
| 10 | `10-hydrogen-orbitals.html` | [x] **Hydrogen Atom Orbitals** | 3D visualization of s, p, d, f orbitals. Probability density clouds. Interactive quantum numbers (n, l, m). | Three.js | Advanced |

### Educational Value
- **Physics students**: Quantum intuition builder
- **CS students**: Quantum computing foundations
- **General audience**: "Quantum weirdness" explained

### Visual Signature
- Probability clouds with opacity mapping
- Wave function plots with real/imaginary parts
- Bloch sphere rotations for qubit states

---

## 5. Social Dynamics (10 Simulations)

*How opinions form, crowds behave, and societies evolve. From polarization to consensus, from revolutions to stable states.*

### Gallery: `social-dynamics/`

| # | File | Title | Description | Technology | Difficulty |
|---|------|-------|-------------|------------|------------|
| 1 | `01-opinion-dynamics.html` | [x] **Opinion Dynamics** | Bounded confidence model (Deffuant-Weisbuch). Agents only influence those with similar opinions. Watch clustering and polarization emerge. | Canvas 2D | Medium |
| 2 | `02-voter-model.html` | [x] **Voter Model** | Agents adopt neighbor's opinion randomly. Simple model showing consensus formation. Compare with Ising model dynamics. | Canvas 2D | Easy |
| 3 | `03-social-learning.html` | [x] **Social Learning** | Agents learn from observing others' actions. Information cascades where early movers determine everyone's behavior (even if wrong). | Canvas 2D | Medium |
| 4 | `04-conformity-pressure.html` | [x] **Conformity Pressure (Asch)** | Recreation of Asch conformity experiments. Agents surrounded by unanimous majority. Measures conformity rate. | Canvas 2D | Easy |
| 5 | `05-threshold-models.html` | [x] **Threshold Models** | Granovetter's threshold model of collective behavior. Each agent has threshold for joining (riots, adoption, strikes). Cascade or fizzle. | Canvas 2D | Medium |
| 6 | `06-cultural-evolution.html` | [x] **Cultural Evolution** | Axelrod's culture model. Agents with multiple cultural features. Interact more with similar neighbors. Regional cultures emerge. | Canvas 2D | Medium |
| 7 | `07-echo-chambers.html` | [x] **Echo Chambers** | Network rewiring based on opinion similarity. Watch information bubbles form. Explores algorithm effects on polarization. | D3.js | Medium |
| 8 | `08-standing-ovation.html` | [x] **Standing Ovation Problem** | Cellular automaton model. Stand if quality exceeds threshold OR enough neighbors stand. Explores when applause becomes unanimous. | Canvas 2D | Easy |
| 9 | `09-spiral-of-silence.html` | [x] **Spiral of Silence** | Noelle-Neumann's theory. Minority opinion holders become silent, making minority seem even smaller. Self-reinforcing cycle. | Canvas 2D | Medium |
| 10 | `10-revolution-dynamics.html` | [x] **Revolution Dynamics** | Kuran's preference falsification model. People hide true preferences until tipping point. Sudden regime change from apparent stability. | Canvas 2D | Medium |

### Educational Value
- **Political scientists**: Polarization mechanisms
- **Sociologists**: Collective behavior
- **Marketers**: Viral adoption patterns

### Visual Signature
- Opinion spectrums with color gradients (red-blue polarization)
- Network graphs with community coloring
- Time-series plots of aggregate measures

---

## 6. Geophysical Simulations (10 Simulations)

*Earth processes from plate tectonics to erosion, from weather patterns to climate systems.*

### Gallery: `geophysical/`

| # | File | Title | Description | Technology | Difficulty |
|---|------|-------|-------------|------------|------------|
| 1 | `01-plate-tectonics.html` | [x] **Plate Tectonics** | Simplified model of continental drift. Convection cells drive plates. Collisions create mountains; separations create rifts. | Canvas 2D | Medium |
| 2 | `02-erosion-simulation.html` | [x] **Erosion Simulation** | Hydraulic erosion on heightmap terrain. Water carves valleys, deposits sediment. Creates realistic river networks. | WebGL | Advanced |
| 3 | `03-weather-fronts.html` | [x] **Weather Fronts** | Cold and warm air masses meeting. Visualizes pressure systems, precipitation zones, and front movements. | Canvas 2D | Medium |
| 4 | `04-ocean-currents.html` | [x] **Ocean Currents** | Global thermohaline circulation. Shows how temperature and salinity drive deep ocean currents. "Global conveyor belt." | Canvas 2D | Medium |
| 5 | `05-volcanic-eruption.html` | [x] **Volcanic Eruption** | Particle-based pyroclastic flows and ash clouds. Lava viscosity controls eruption style (Hawaiian vs. Plinian). | Canvas 2D | Medium |
| 6 | `06-glacier-dynamics.html` | [x] **Glacier Dynamics** | Ice sheet flow simulation. Accumulation, ablation, and calving. Shows response to temperature changes over centuries. | Canvas 2D | Medium |
| 7 | `07-earthquake-waves.html` | [x] **Earthquake Waves** | P-waves, S-waves, and surface waves propagating from epicenter. Shows seismograph traces and wave speeds. | Canvas 2D | Medium |
| 8 | `08-water-cycle.html` | [x] **Water Cycle** | Complete hydrological cycle: evaporation, condensation, precipitation, runoff, infiltration. Mass balance tracking. | Canvas 2D | Easy |
| 9 | `09-carbon-cycle.html` | [x] **Carbon Cycle** | Carbon flows between atmosphere, ocean, biosphere, and geosphere. Includes human emissions. Climate implications. | D3.js (Sankey) | Medium |
| 10 | `10-milankovitch-cycles.html` | [x] **Milankovitch Cycles** | Earth's orbital variations driving ice ages. Visualizes eccentricity, obliquity, and precession over 100,000+ years. | Canvas 2D | Medium |

### Educational Value
- **Earth science students**: Geological processes
- **Climate researchers**: System dynamics
- **General audience**: Understanding our planet

### Visual Signature
- Terrain heightmaps with shaded relief
- Vector fields for wind/water flow
- Long time-scale animations (compress millennia into seconds)

---

## 7. Morphogenesis (10 Simulations)

*How biological form emerges from genetic instructions. From embryo development to tissue patterns.*

### Gallery: `morphogenesis/`

| # | File | Title | Description | Technology | Difficulty |
|---|------|-------|-------------|------------|------------|
| 1 | `01-cell-division.html` | [x] **Cell Division (Mitosis)** | Watch a cell divide: chromatin condensation, spindle formation, chromosome separation. Simplified but accurate stages. | Canvas 2D | Easy |
| 2 | `02-gastrulation.html` | [x] **Gastrulation** | Embryo developing from blastula to gastrula. Cell movements creating three germ layers. Foundation of body plan. | Canvas 2D | Medium |
| 3 | `03-somite-formation.html` | [x] **Somite Formation** | Clock and wavefront model. Oscillating gene expression creates segmented vertebrate body plan. | Canvas 2D | Medium |
| 4 | `04-limb-development.html` | [x] **Limb Development** | How fingers form: sonic hedgehog gradients, zone of polarizing activity. Shows normal vs. polydactyly mutations. | Canvas 2D | Medium |
| 5 | `05-neural-tube.html` | [x] **Neural Tube Formation** | Neurulation: flat neural plate folding into tube. Foundation of brain and spinal cord. | Canvas 2D | Medium |
| 6 | `06-apoptosis-patterns.html` | [x] **Apoptosis (Programmed Death)** | Sculpting form through cell death. Web between fingers dissolving. Tail regression in tadpoles. | Canvas 2D | Easy |
| 7 | `07-morphogen-gradients.html` | [x] **Morphogen Gradients** | Bicoid, Nanos, and other gradients specifying body axes. French flag model of positional information. | Canvas 2D | Medium |
| 8 | `08-branching-morphogenesis.html` | [x] **Branching Morphogenesis** | How lungs, blood vessels, and glands develop tree-like structures. Tip bifurcation and growth factor gradients. | Canvas 2D | Medium |
| 9 | `09-epithelial-folding.html` | [x] **Epithelial Folding** | Cell shape changes driving tissue bending. Apical constriction creating invaginations and evaginations. | Canvas 2D | Medium |
| 10 | `10-wound-healing.html` | [x] **Wound Healing** | Cells migrating to close wounds. Fibroblasts laying collagen. Scar formation vs. regeneration. | Canvas 2D | Medium |

### Educational Value
- **Biology students**: Developmental biology
- **Medical students**: Congenital conditions
- **General audience**: How bodies form

### Visual Signature
- Cross-section views of developing embryos
- Color-coded cell types and gene expression
- Time-lapse development animations

---

## 8. Optimization Algorithms (10 Simulations)

*Watch algorithms search for solutions. From gradient descent to evolutionary strategies, from local to global optima.*

### Gallery: `optimization/`

| # | File | Title | Description | Technology | Difficulty |
|---|------|-------|-------------|------------|------------|
| 1 | `01-gradient-descent.html` | [x] **Gradient Descent** | Ball rolling down fitness landscape. Shows learning rate effects: too high (oscillation), too low (slow), just right. Multiple variants (SGD, momentum, Adam). | Canvas 2D | Easy |
| 2 | `02-simulated-annealing.html` | [x] **Simulated Annealing** | Metal cooling analogy. High temperature allows escaping local minima; slow cooling finds global optimum. Traveling salesman demo. | Canvas 2D | Medium |
| 3 | `03-hill-climbing.html` | [x] **Hill Climbing** | Greedy local search. Gets stuck in local optima. Compare with random restarts and simulated annealing. | Canvas 2D | Easy |
| 4 | `04-genetic-algorithm-tsp.html` | [x] **Genetic Algorithm (TSP)** | Traveling salesman solved by evolution. Selection, crossover, mutation operators. Watch tours improve over generations. | Canvas 2D | Medium |
| 5 | `05-particle-swarm.html` | [x] **Particle Swarm Optimization** | Swarm searching landscape. Personal best and global best influence movement. Social learning in action. | Canvas 2D | Medium |
| 6 | `06-ant-colony-optimization.html` | [x] **Ant Colony Optimization** | Pheromone trails finding shortest paths. Stigmergic communication. Solves routing and scheduling problems. | Canvas 2D | Medium |
| 7 | `07-differential-evolution.html` | [x] **Differential Evolution** | Population-based optimizer. Mutation based on differences between random individuals. Robust for continuous optimization. | Canvas 2D | Medium |
| 8 | `08-bayesian-optimization.html` | [x] **Bayesian Optimization** | Surrogate model (Gaussian process) guiding search. Acquisition function balancing exploration/exploitation. For expensive functions. | Canvas 2D | Advanced |
| 9 | `09-convex-vs-nonconvex.html` | [x] **Convex vs. Non-Convex** | Compare optimization landscapes. Convex: any local minimum is global. Non-convex: trap-filled terrain. | Canvas 2D | Easy |
| 10 | `10-multi-objective.html` | [x] **Multi-Objective Optimization** | Pareto frontier visualization. Trade-offs between competing objectives. NSGA-II algorithm demonstration. | Canvas 2D | Medium |

### Educational Value
- **ML students**: Optimization foundations
- **Operations researchers**: Metaheuristic comparison
- **General audience**: How computers "learn"

### Visual Signature
- 3D fitness landscapes (height = fitness)
- Animated search trajectories
- Convergence curves and population diversity plots

---

## 9. Time & Clocks (10 Simulations)

*Synchronization, oscillations, and temporal phenomena. From fireflies to heartbeats to coupled pendulums.*

### Gallery: `time-clocks/`

| # | File | Title | Description | Technology | Difficulty |
|---|------|-------|-------------|------------|------------|
| 1 | `01-kuramoto-model.html` | [x] **Kuramoto Oscillators** | Coupled oscillators synchronizing. Phase transition from incoherence to synchrony as coupling increases. Famous sync model. | Canvas 2D | Medium |
| 2 | `02-metronome-sync.html` | [x] **Metronome Synchronization** | Metronomes on movable platform. Mechanical coupling causes synchronization. Based on famous YouTube demonstrations. | Canvas 2D | Easy |
| 3 | `03-circadian-rhythms.html` | [x] **Circadian Rhythms** | 24-hour biological clock. Light entrainment, jet lag recovery, shift work effects. Based on Nobel Prize-winning research. | Canvas 2D | Medium |
| 4 | `04-cardiac-pacemaker.html` | [x] **Cardiac Pacemaker Cells** | Sinoatrial node setting heart rhythm. Shows how synchronized firing creates heartbeat. Arrhythmia when sync breaks down. | Canvas 2D | Medium |
| 5 | `05-firefly-synchronization.html` | [x] **Firefly Synchronization** | Thousands of fireflies flashing in unison. Pulse-coupled oscillators. Emergent coordination without leader. | Canvas 2D | Easy |
| 6 | `06-pendulum-waves.html` | [x] **Pendulum Wave** | 15 pendulums with carefully tuned lengths. Creates mesmerizing wave patterns. Cycles back to unison every ~60 seconds. | Canvas 2D | Easy |
| 7 | `07-phase-locking.html` | [x] **Phase Locking** | Forcing an oscillator at different frequencies. 1:1, 2:1, 3:2 locking regions. Arnold tongues and devil's staircase. | Canvas 2D | Medium |
| 8 | `08-relaxation-oscillators.html` | [x] **Relaxation Oscillators** | Van der Pol oscillator and variants. Charge-discharge cycles. Heartbeat models and electronic circuits. | Canvas 2D | Medium |
| 9 | `09-entrainment.html` | [x] **Entrainment** | Forcing an oscillator to match external rhythm. Sleep cycles entrained by light. Music entraining body rhythms. | Canvas 2D | Easy |
| 10 | `10-coupled-chaos.html` | [x] **Coupled Chaotic Systems** | Lorenz attractors that synchronize when coupled. Secure communication via chaos synchronization. | Canvas 2D | Advanced |

### Educational Value
- **Physicists**: Nonlinear dynamics
- **Biologists**: Biological rhythms
- **Musicians**: Beat synchronization

### Visual Signature
- Circular phase representations
- Oscilloscope-style traces
- Raster plots showing firing patterns

---

## 10. Information Theory (10 Simulations)

*Entropy, compression, error correction, and the fundamental limits of communication.*

### Gallery: `information-theory/`

| # | File | Title | Description | Technology | Difficulty |
|---|------|-------|-------------|------------|------------|
| 1 | `01-entropy-visualization.html` | [x] **Shannon Entropy** | Interactive entropy calculator. Adjust probability distributions, see entropy change. Maximum entropy = uniform distribution. | Canvas 2D | Easy |
| 2 | `02-huffman-coding.html` | [x] **Huffman Coding** | Build optimal prefix-free code tree. Watch compression ratio as text is encoded. Character frequency visualization. | Canvas 2D | Medium |
| 3 | `03-lz77-compression.html` | [x] **LZ77 Compression** | Sliding window compression. Watch dictionary matches being found. Foundation of ZIP and DEFLATE. | Canvas 2D | Medium |
| 4 | `04-error-correction.html` | [x] **Error Correction (Hamming)** | Hamming codes detecting and correcting bit errors. Interactive bit-flipping demonstration. Parity check visualization. | Canvas 2D | Medium |
| 5 | `05-channel-capacity.html` | [x] **Channel Capacity** | Shannon's channel capacity theorem. Noisy channel visualization. Trade-off between rate and reliability. | Canvas 2D | Medium |
| 6 | `06-mutual-information.html` | [x] **Mutual Information** | Venn diagram visualization of entropy relationships. H(X), H(Y), H(X|Y), H(Y|X), I(X;Y). | Canvas 2D | Medium |
| 7 | `07-kolmogorov-complexity.html` | [x] **Kolmogorov Complexity** | Shortest program that produces a string. Random strings are incompressible. Visualize pattern vs. randomness. | Canvas 2D | Medium |
| 8 | `08-source-coding.html` | [x] **Source Coding** | Comparison of coding schemes: fixed length, variable length, arithmetic coding. Efficiency visualization. | Canvas 2D | Medium |
| 9 | `09-cryptographic-entropy.html` | [x] **Cryptographic Entropy** | Random number quality visualization. Compare pseudo-random vs. true random. Entropy pooling. | Canvas 2D | Medium |
| 10 | `10-information-bottleneck.html` | [x] **Information Bottleneck** | Compression that preserves relevant information. Trade-off between compression and prediction. Deep learning connection. | Canvas 2D | Advanced |

### Educational Value
- **CS students**: Compression and coding theory
- **Engineers**: Communication systems
- **Cryptographers**: Entropy and security

### Visual Signature
- Tree structures for coding schemes
- Probability distributions as bar charts
- Bit-level visualizations with binary strings

---

## Implementation Priorities

### Phase 1: High Impact, Lower Difficulty (40 simulations)

**Weeks 1-4: Foundation**

| Category | Simulations | Rationale |
|----------|-------------|-----------|
| Cognitive Science | 01-05, 07 | Immediate "wow" factor, familiar experiments |
| Game Theory | 01, 04-07, 09 | Classic, well-understood games |
| Time & Clocks | 02, 05, 06, 09 | Beautiful synchronization visuals |
| Information Theory | 01, 02 | Foundational concepts |

### Phase 2: Medium Complexity (35 simulations)

**Weeks 5-8: Expansion**

| Category | Simulations | Rationale |
|----------|-------------|-----------|
| Network Dynamics | 01-04, 06, 07 | D3.js leverages existing expertise |
| Social Dynamics | 01-05, 08 | Timely topic (polarization) |
| Geophysical | 02-05, 08 | Visually striking |
| Optimization | 01-03, 05, 06 | ML education demand |

### Phase 3: Advanced (25 simulations)

**Weeks 9-12: Polish**

| Category | Simulations | Rationale |
|----------|-------------|-----------|
| Quantum Visualizations | 01-10 | Complete category |
| Morphogenesis | 01-10 | Complete category |
| Remaining | All leftovers | Fill gaps |

---

## Technical Specifications

### Common Requirements

All simulations should include:

```javascript
// Standard structure
class Simulation {
    constructor(canvas, params) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.params = { ...defaults, ...params };
        this.running = false;
    }

    init() { /* Setup */ }
    update(dt) { /* Physics/logic step */ }
    render() { /* Draw frame */ }
    handleInput(event) { /* User interaction */ }
    reset() { /* Return to initial state */ }
    exportData() { /* For analysis */ }
}
```

### Performance Targets

| Complexity | Agents/Particles | Target FPS |
|------------|-----------------|------------|
| Low | < 1,000 | 60 |
| Medium | 1,000-10,000 | 30-60 |
| High | 10,000-100,000 | 30 |
| Extreme | 100,000+ | WebGL required |

### Mobile Compatibility

- Touch event handlers for all interactions
- Responsive canvas sizing
- Reduced particle counts for mobile
- Battery-conscious animation loops

---

## Cross-Cutting Themes

### Emergence
- Cognitive Science: Attention from neurons
- Network Dynamics: Communities from connections
- Social Dynamics: Polarization from individuals
- Optimization: Solutions from random search

### Phase Transitions
- Game Theory: Cooperation tipping points
- Social Dynamics: Revolution dynamics
- Geophysical: Climate tipping points
- Time & Clocks: Synchronization onset

### Information Flow
- Network Dynamics: Cascade failures
- Social Dynamics: Echo chambers
- Information Theory: Channel capacity
- Cognitive Science: Attention as information filter

### Self-Organization
- Morphogenesis: Pattern formation
- Time & Clocks: Synchronization
- Optimization: Swarm intelligence
- Geophysical: Erosion patterns

---

## Success Metrics

### Quantitative
- 60+ FPS on modern browsers
- < 2 second load time
- < 50MB memory usage
- Mobile touch support

### Qualitative
- Clear educational value
- Aesthetically pleasing
- Intuitive controls
- Accurate underlying model

### User Engagement
- Time spent per simulation
- Parameter exploration depth
- Social sharing rate
- Return visits

---

## References and Inspiration

### Books
1. "Sync" - Steven Strogatz (Time & Clocks)
2. "Networks, Crowds, and Markets" - Easley & Kleinberg (Network, Game Theory, Social)
3. "QED" - Richard Feynman (Quantum)
4. "The Self-Made Tapestry" - Philip Ball (Morphogenesis)
5. "Elements of Information Theory" - Cover & Thomas

### Online Resources
1. Complexity Explorer (Santa Fe Institute)
2. Seeing Theory (Brown University)
3. Explorable Explanations
4. Distill.pub
5. 3Blue1Brown visualizations

### Academic Papers
- Watts (1998) on small-world networks
- Axelrod (1984) on cooperation evolution
- Kuramoto (1975) on oscillator synchronization
- Shannon (1948) on communication theory
- Turing (1952) on morphogenesis

---

## Appendix: Complete File Listing

### By Gallery

```
cognitive-science/
├── index.html
├── 01-change-blindness.html
├── 02-inattentional-blindness.html
├── 03-visual-search.html
├── 04-gestalt-principles.html
├── 05-apparent-motion.html
├── 06-memory-palace.html
├── 07-stroop-effect.html
├── 08-mental-rotation.html
├── 09-attentional-blink.html
└── 10-binocular-rivalry.html

network-dynamics/
├── index.html
├── 01-cascade-failures.html
├── 02-information-diffusion.html
├── 03-network-resilience.html
├── 04-preferential-attachment.html
├── 05-community-detection.html
├── 06-network-centrality.html
├── 07-small-world-experiment.html
├── 08-network-motifs.html
├── 09-link-prediction.html
└── 10-temporal-networks.html

game-theory/
├── index.html
├── 01-prisoners-dilemma-tournament.html
├── 02-public-goods-game.html
├── 03-ultimatum-game.html
├── 04-hawks-and-doves.html
├── 05-stag-hunt.html
├── 06-matching-pennies.html
├── 07-battle-of-sexes.html
├── 08-centipede-game.html
├── 09-chicken-game.html
└── 10-replicator-dynamics.html

quantum-visualizations/
├── index.html
├── 01-double-slit.html
├── 02-quantum-tunneling.html
├── 03-superposition.html
├── 04-entanglement.html
├── 05-uncertainty-principle.html
├── 06-schrodinger-cat.html
├── 07-quantum-walk.html
├── 08-wave-function-collapse.html
├── 09-quantum-harmonic-oscillator.html
└── 10-hydrogen-orbitals.html

social-dynamics/
├── index.html
├── 01-opinion-dynamics.html
├── 02-voter-model.html
├── 03-social-learning.html
├── 04-conformity-pressure.html
├── 05-threshold-models.html
├── 06-cultural-evolution.html
├── 07-echo-chambers.html
├── 08-standing-ovation.html
├── 09-spiral-of-silence.html
└── 10-revolution-dynamics.html

geophysical/
├── index.html
├── 01-plate-tectonics.html
├── 02-erosion-simulation.html
├── 03-weather-fronts.html
├── 04-ocean-currents.html
├── 05-volcanic-eruption.html
├── 06-glacier-dynamics.html
├── 07-earthquake-waves.html
├── 08-water-cycle.html
├── 09-carbon-cycle.html
└── 10-milankovitch-cycles.html

morphogenesis/
├── index.html
├── 01-cell-division.html
├── 02-gastrulation.html
├── 03-somite-formation.html
├── 04-limb-development.html
├── 05-neural-tube.html
├── 06-apoptosis-patterns.html
├── 07-morphogen-gradients.html
├── 08-branching-morphogenesis.html
├── 09-epithelial-folding.html
└── 10-wound-healing.html

optimization/
├── index.html
├── 01-gradient-descent.html
├── 02-simulated-annealing.html
├── 03-hill-climbing.html
├── 04-genetic-algorithm-tsp.html
├── 05-particle-swarm.html
├── 06-ant-colony-optimization.html
├── 07-differential-evolution.html
├── 08-bayesian-optimization.html
├── 09-convex-vs-nonconvex.html
└── 10-multi-objective.html

time-clocks/
├── index.html
├── 01-kuramoto-model.html
├── 02-metronome-sync.html
├── 03-circadian-rhythms.html
├── 04-cardiac-pacemaker.html
├── 05-firefly-synchronization.html
├── 06-pendulum-waves.html
├── 07-phase-locking.html
├── 08-relaxation-oscillators.html
├── 09-entrainment.html
└── 10-coupled-chaos.html

information-theory/
├── index.html
├── 01-entropy-visualization.html
├── 02-huffman-coding.html
├── 03-lz77-compression.html
├── 04-error-correction.html
├── 05-channel-capacity.html
├── 06-mutual-information.html
├── 07-kolmogorov-complexity.html
├── 08-source-coding.html
├── 09-cryptographic-entropy.html
└── 10-information-bottleneck.html
```

---

## Summary Statistics

| Category | Simulations | Primary Tech | Avg. Difficulty |
|----------|-------------|--------------|-----------------|
| Cognitive Science | 10 | Canvas 2D, Three.js | 2.1 |
| Network Dynamics | 10 | D3.js | 2.5 |
| Game Theory | 10 | Canvas 2D | 1.9 |
| Quantum Visualizations | 10 | Canvas 2D, Three.js | 2.4 |
| Social Dynamics | 10 | Canvas 2D, D3.js | 2.2 |
| Geophysical | 10 | Canvas 2D, WebGL | 2.4 |
| Morphogenesis | 10 | Canvas 2D | 2.2 |
| Optimization | 10 | Canvas 2D | 2.3 |
| Time & Clocks | 10 | Canvas 2D | 2.0 |
| Information Theory | 10 | Canvas 2D | 2.3 |
| **TOTAL** | **100** | Mixed | **2.2** |

*Difficulty scale: 1 (Easy) - 2 (Medium) - 3 (Advanced)*

---

*Document created: December 2025*
*Total new simulations planned: 100*
*New gallery categories: 10*
*Estimated implementation effort: 12 weeks*

---

## Why These 100?

### Coverage of New Domains
These 100 simulations extend CCAB into:
- **Psychology & Cognition** - Human perception and decision-making
- **Social Science** - How societies function and change
- **Earth Science** - Our planet's processes
- **Quantum Physics** - The counterintuitive quantum world
- **Biology** - How life develops
- **Computer Science** - Algorithms visualized
- **Physics** - Synchronization and oscillations
- **Mathematics** - Information and entropy

### Complementing Existing Content
The current CCAB focuses heavily on:
- Cellular automata (Wolfram, Game of Life)
- Physical simulations (particles, fluids)
- Mathematical art (fractals, attractors)
- Economic models (Sugarscape, ABM)

These 100 new simulations fill gaps in:
- Human/social systems
- Algorithmic processes
- Geophysical phenomena
- Biological development

### Educational Impact
Each category enables:
- University course supplements
- Science museum exhibits
- Self-directed learning
- Research visualization tools

### Visual Variety
- **Network graphs**: Force-directed layouts, community coloring
- **3D visualizations**: Orbitals, memory palaces
- **Time series**: Oscillations, phase portraits
- **Spatial patterns**: Erosion, morphogenesis

---

*"The best way to understand a complex system is to watch it evolve."*
