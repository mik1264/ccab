# 100 Planned Simulations for CCAB

A comprehensive catalog of 100 new simulations to expand the CCAB collection, organized into 12 thematic categories. Each simulation is designed to be technically feasible within CCAB's constraints (vanilla JS, no build system) while filling educational and aesthetic gaps.

---

## Executive Summary

| Category | Count | Primary Tech | Difficulty |
|----------|-------|--------------|------------|
| Game Theory & Strategic Interactions | 12 | Canvas 2D | Medium |
| Network Science & Graph Theory | 10 | D3.js / Canvas | Medium |
| Quantum Physics Visualizations | 8 | WebGL / Three.js | Hard |
| Machine Learning Visualizations | 10 | Canvas 2D | Medium |
| Ecology & Population Dynamics | 8 | Canvas 2D | Easy-Medium |
| Social Dynamics & Opinion Formation | 10 | Canvas 2D | Medium |
| Traffic & Urban Systems | 8 | Canvas 2D | Medium |
| Chemistry & Molecular Dynamics | 8 | Three.js / Canvas | Medium-Hard |
| Information Theory & Cryptography | 8 | Canvas 2D | Medium |
| Music Theory & Acoustics | 8 | Web Audio + Canvas | Medium |
| Sports Analytics & Game Strategy | 5 | Canvas 2D | Easy-Medium |
| Historical & Archaeological Simulations | 5 | Canvas 2D | Medium |
| **Total** | **100** | | |

---

## Category 1: Game Theory & Strategic Interactions (12 simulations)

Classical and evolutionary game theory visualizations exploring cooperation, competition, and strategic decision-making.

### 1.1 Iterated Prisoner's Dilemma Tournament
**File:** `game-theory/01-prisoners-dilemma-tournament.html`
**Description:** Round-robin tournament between classic strategies (Tit-for-Tat, Always Defect, Always Cooperate, Grim Trigger, Pavlov, Random). Visualizes head-to-head matches, cumulative scores, and evolutionary success over generations.
**Key Features:**
- Strategy selector with 10+ pre-built strategies
- Custom strategy builder (simple FSM)
- Real-time score matrix visualization
- Evolutionary dynamics mode (successful strategies reproduce)
- Axelrod tournament replication

**Educational Value:** Demonstrates how cooperation can emerge among self-interested agents; the power of reciprocity; robustness vs. exploitability tradeoffs.

---

### 1.2 Spatial Prisoner's Dilemma
**File:** `game-theory/02-spatial-prisoners-dilemma.html`
**Description:** Agents play IPD with neighbors on a 2D grid. Strategies spread through imitation of successful neighbors. Visualizes the spatial clustering of cooperators and defectors.
**Key Features:**
- Multiple lattice topologies (square, hexagonal, random graph)
- Adjustable neighborhood radius
- Color-coded strategy distribution
- Cooperation rate time series
- Phase transition exploration (varying payoff matrix)

**Educational Value:** Shows how spatial structure enables cooperation to survive; demonstrates importance of locality in evolutionary dynamics.

---

### 1.3 Public Goods Game
**File:** `game-theory/03-public-goods-game.html`
**Description:** N-player game where agents decide how much to contribute to a shared pool. Pool is multiplied and divided equally. Explores the tension between individual and collective rationality.
**Key Features:**
- Adjustable group size (2-20 players)
- Multiplication factor slider (1.0-3.0)
- Punishment mechanism option (costly punishment)
- Reward mechanism option
- Evolutionary dynamics with reproduction

**Educational Value:** Classic model of collective action problems; shows how free-riding emerges and how institutions can promote cooperation.

---

### 1.4 Hawk-Dove Game (Chicken)
**File:** `game-theory/04-hawk-dove-game.html`
**Description:** Two-player game modeling conflict over resources. Hawks fight, Doves share. Explores evolutionarily stable strategies and mixed equilibria.
**Key Features:**
- Payoff matrix editor
- Population composition over time
- Replicator dynamics visualization
- Phase portrait of evolutionary trajectories
- Spatial variant with territorial dynamics

**Educational Value:** Foundation of evolutionary game theory; explains animal conflict behavior without fatal outcomes; introduces ESS concept.

---

### 1.5 Ultimatum Game
**File:** `game-theory/05-ultimatum-game.html`
**Description:** Proposer offers split; Responder accepts or rejects. Visualizes the evolution of fairness norms and punishment of unfair offers.
**Key Features:**
- Human vs AI mode (play against strategies)
- Population of proposer/responder strategies
- Offer distribution histogram
- Acceptance threshold evolution
- Cross-cultural comparison data overlay

**Educational Value:** Demonstrates that humans reject "rational" predictions; fairness as evolved norm; importance of social emotions in economics.

---

### 1.6 Dictator Game
**File:** `game-theory/06-dictator-game.html`
**Description:** One player decides allocation; other player has no recourse. Studies pure altruism without strategic considerations.
**Key Features:**
- Giving distribution visualization
- Anonymity effect toggle
- Observer effect (third party watching)
- Earned vs windfall money comparison
- Reputation tracking across rounds

**Educational Value:** Isolates altruistic preferences from strategic cooperation; explores intrinsic vs extrinsic motivation.

---

### 1.7 Coordination Game (Stag Hunt)
**File:** `game-theory/07-stag-hunt.html`
**Description:** Players must coordinate on hunting stag (high payoff, requires cooperation) vs hare (safe, low payoff). Explores risk dominance vs payoff dominance.
**Key Features:**
- Multiple equilibria visualization
- Basin of attraction diagram
- Spatial coordination dynamics
- Communication channel option
- History of play influence

**Educational Value:** Shows why coordination fails even when cooperation is optimal; importance of trust and expectations.

---

### 1.8 Battle of the Sexes
**File:** `game-theory/08-battle-of-sexes.html`
**Description:** Coordination game where players prefer different outcomes but value coordination. Models compromise and convention formation.
**Key Features:**
- Payoff asymmetry slider
- Convention emergence over time
- Focal point exploration
- Communication effects
- Gender-neutral framing option (Opera/Football → A/B)

**Educational Value:** Demonstrates coordination with conflicting preferences; how social conventions emerge to solve coordination problems.

---

### 1.9 Tragedy of the Commons
**File:** `game-theory/09-tragedy-commons.html`
**Description:** Multiple agents harvest from shared resource. Without coordination, overexploitation depletes the commons. Explores sustainable harvesting.
**Key Features:**
- Resource regeneration dynamics (logistic growth)
- Agent harvest rate sliders
- Depletion visualization over time
- Privatization vs regulation comparison
- Communication channel for coordination

**Educational Value:** Classic environmental economics model; shows how individual rationality leads to collective disaster; explores institutional solutions.

---

### 1.10 Minority Game (El Farol Bar Problem)
**File:** `game-theory/10-minority-game.html`
**Description:** Agents must predict minority choice (attend bar if <60% attendance). Explores bounded rationality and self-defeating prophecies.
**Key Features:**
- Attendance time series
- Strategy ecosystem visualization
- Memory length adjustment
- Information cascade detection
- Volatility clustering analysis

**Educational Value:** Shows emergent complexity from simple adaptive agents; challenges efficient market hypothesis; demonstrates self-organization.

---

### 1.11 Rock-Paper-Scissors Evolutionary Dynamics
**File:** `game-theory/11-rps-evolution.html`
**Description:** Cyclic dominance game with replicator dynamics. Visualizes oscillating population frequencies and spatial spiral patterns.
**Key Features:**
- 3D simplex trajectory visualization
- Spatial RPS on grid (spiral waves)
- Biodiversity measurement
- Lotka-Volterra connection
- Extended RPS (5, 7 strategies)

**Educational Value:** Demonstrates non-equilibrium dynamics; connection to ecological cycles; importance of intransitive competition.

---

### 1.12 Auction Mechanisms
**File:** `game-theory/12-auction-mechanisms.html`
**Description:** Compare sealed-bid first-price, second-price (Vickrey), English, and Dutch auctions. Visualizes bidding strategies and revenue equivalence.
**Key Features:**
- Multiple auction format selector
- AI bidder strategies (risk-neutral, risk-averse)
- Revenue comparison across formats
- Private vs common value settings
- Winner's curse demonstration

**Educational Value:** Mechanism design fundamentals; shows why truthful bidding is optimal in Vickrey auctions; practical application of game theory.

---

## Category 2: Network Science & Graph Theory (10 simulations)

Visualizations exploring network structure, dynamics, and emergent properties in complex systems.

### 2.1 Preferential Attachment (Barabási-Albert Model)
**File:** `network-science/01-preferential-attachment.html`
**Description:** Grow networks where new nodes prefer connecting to well-connected nodes. Demonstrates emergence of scale-free networks and hub formation.
**Key Features:**
- Real-time network growth animation
- Degree distribution histogram (log-log plot)
- Hub identification and highlighting
- Adjustable attachment preference (linear, sublinear, superlinear)
- Comparison with random (Erdős-Rényi) networks

**Educational Value:** Explains why many real networks (web, social, biological) have power-law degree distributions; "rich get richer" dynamics.

---

### 2.2 Small World Networks (Watts-Strogatz Model)
**File:** `network-science/02-small-world.html`
**Description:** Interpolate between regular lattice and random graph. Shows how small rewiring probability creates short paths while maintaining clustering.
**Key Features:**
- Rewiring probability slider (p = 0 to 1)
- Average path length calculation
- Clustering coefficient visualization
- "Six degrees of separation" demonstration
- Ring lattice starting configuration

**Educational Value:** Explains the small world phenomenon; shows transition between order and randomness; network efficiency vs redundancy.

---

### 2.3 Epidemic Spreading on Networks
**File:** `network-science/03-network-epidemics.html`
**Description:** SIR/SIS epidemic dynamics on various network topologies. Compare spreading on random, scale-free, and regular networks.
**Key Features:**
- Network topology selector (random, scale-free, lattice, small-world)
- Infection probability and recovery rate sliders
- Superspreader identification (hub infection)
- Vaccination strategies (random, targeted, acquaintance)
- Epidemic threshold calculation

**Educational Value:** Shows how network structure determines epidemic dynamics; importance of hubs for disease spread; targeted vs random intervention.

---

### 2.4 Cascading Failures
**File:** `network-science/04-cascading-failures.html`
**Description:** Remove nodes and observe cascade of failures as load redistributes. Models blackouts, financial contagion, and infrastructure collapse.
**Key Features:**
- Load redistribution rules (proportional, equal)
- Capacity threshold setting
- Cascade size distribution
- Critical node identification
- Comparison: targeted vs random attack

**Educational Value:** Understanding systemic risk; fragility of interconnected systems; robustness vs efficiency tradeoffs.

---

### 2.5 Community Detection Visualization
**File:** `network-science/05-community-detection.html`
**Description:** Interactive visualization of community structure in networks using modularity optimization, spectral clustering, and label propagation.
**Key Features:**
- Multiple algorithms (Louvain, spectral, label propagation)
- Modularity score display
- Hierarchical community structure
- Edge bundling visualization
- Real-world network datasets (Zachary's karate club, Les Misérables)

**Educational Value:** Understanding network modularity; how to identify groups in data; connection to clustering and machine learning.

---

### 2.6 Network Centrality Measures
**File:** `network-science/06-centrality-measures.html`
**Description:** Compare degree, betweenness, closeness, eigenvector, and PageRank centrality. Visualize which nodes are "important" by different measures.
**Key Features:**
- Centrality measure selector
- Node size/color by centrality
- Ranking comparison table
- Correlation between measures
- Custom network input

**Educational Value:** Understanding different notions of importance in networks; PageRank algorithm foundation; identifying influencers.

---

### 2.7 Network Growth Models Comparison
**File:** `network-science/07-growth-models.html`
**Description:** Side-by-side comparison of random, preferential attachment, copy model, and fitness model network growth.
**Key Features:**
- Four simultaneous network visualizations
- Synchronized growth (same node count)
- Degree distribution overlay comparison
- Giant component emergence
- Network statistics dashboard

**Educational Value:** Understanding how different mechanisms produce different network structures; model selection in network science.

---

### 2.8 Information Diffusion on Networks
**File:** `network-science/08-information-diffusion.html`
**Description:** Model how information, memes, or innovations spread through networks. Compare simple contagion (disease-like) vs complex contagion (requiring multiple exposures).
**Key Features:**
- Threshold model implementation
- Information cascade visualization
- Adoption curve (S-curve)
- Influencer seeding strategies
- Viral vs gradual diffusion comparison

**Educational Value:** Understanding viral marketing; diffusion of innovations theory; social influence and adoption dynamics.

---

### 2.9 Network Motifs
**File:** `network-science/09-network-motifs.html`
**Description:** Identify and count recurring subgraph patterns (motifs) in networks. Visualize the building blocks of complex networks.
**Key Features:**
- Motif catalog (triangles, feed-forward loops, etc.)
- Motif frequency counter
- Random network comparison (Z-scores)
- Biological network examples
- Social network examples

**Educational Value:** Understanding network microstructure; how local patterns reflect network function; motif discovery algorithms.

---

### 2.10 Bipartite Networks
**File:** `network-science/10-bipartite-networks.html`
**Description:** Visualize two-mode networks (e.g., people-organizations, papers-authors). Show projections and analyze bipartite structure.
**Key Features:**
- Bipartite layout visualization
- One-mode projections
- Bipartite degree distribution
- Matching algorithms (marriage problem)
- Real-world datasets (movie-actor, author-paper)

**Educational Value:** Understanding multi-modal networks; recommendation systems foundation; matching markets.

---

## Category 3: Quantum Physics Visualizations (8 simulations)

Intuitive visualizations of quantum mechanical phenomena, making the counterintuitive accessible.

### 3.1 Double Slit Experiment
**File:** `quantum-physics/01-double-slit.html`
**Description:** Visualize wave-particle duality through the famous double-slit experiment. Show interference patterns and measurement effects.
**Key Features:**
- Wave function propagation animation
- Particle-by-particle accumulation mode
- Which-path detector toggle (collapse to particle behavior)
- Adjustable slit separation and width
- Intensity distribution graph

**Educational Value:** The quintessential quantum experiment; demonstrates superposition and measurement problem; wave-particle duality.

---

### 3.2 Quantum Tunneling
**File:** `quantum-physics/02-quantum-tunneling.html`
**Description:** Visualize a particle's wave function encountering a potential barrier. Show probability of transmission through classically forbidden region.
**Key Features:**
- Adjustable barrier height and width
- Wave packet animation approaching barrier
- Transmission/reflection probability calculator
- Energy vs transmission curve
- Application examples (alpha decay, STM)

**Educational Value:** Shows how quantum mechanics allows forbidden transitions; foundation for semiconductor devices and nuclear physics.

---

### 3.3 Hydrogen Atom Orbitals
**File:** `quantum-physics/03-hydrogen-orbitals.html`
**Description:** 3D visualization of electron probability densities for hydrogen atom. Show s, p, d, f orbitals with quantum number controls.
**Key Features:**
- Quantum number selectors (n, l, m)
- 3D probability density rendering (Three.js)
- Cross-section slices
- Radial distribution function
- Energy level diagram

**Educational Value:** Understanding atomic structure; quantum numbers and their meaning; foundation for chemistry.

---

### 3.4 Stern-Gerlach Experiment
**File:** `quantum-physics/04-stern-gerlach.html`
**Description:** Visualize spin measurement with sequential Stern-Gerlach apparatus. Demonstrate spin quantization and measurement basis dependence.
**Key Features:**
- Particle beam through magnetic field
- Sequential measurement apparatus
- Different measurement axis angles
- Probability predictions vs outcomes
- Bell inequality setup (conceptual)

**Educational Value:** Demonstrates spin quantization; measurement in quantum mechanics; foundation for quantum computing qubits.

---

### 3.5 Wave Packet Dispersion
**File:** `quantum-physics/05-wave-packet.html`
**Description:** Visualize Gaussian wave packet spreading over time in free space. Show relationship between position and momentum uncertainty.
**Key Features:**
- Wave packet width evolution
- Position probability distribution
- Momentum space representation
- Uncertainty product tracking (Δx·Δp ≥ ℏ/2)
- Different initial conditions

**Educational Value:** Visualizes Heisenberg uncertainty principle; shows why particles can't have definite position and momentum.

---

### 3.6 Quantum Harmonic Oscillator
**File:** `quantum-physics/06-harmonic-oscillator.html`
**Description:** Visualize energy eigenstates and superpositions of the quantum harmonic oscillator. Show coherent states and squeezed states.
**Key Features:**
- Energy level diagram with eigenstates
- Wave function visualization for each n
- Superposition state evolution
- Coherent state (most classical)
- Probability density animation

**Educational Value:** Most important exactly solvable quantum system; connection to photons and phonons; quantum vs classical behavior.

---

### 3.7 Particle in a Box
**File:** `quantum-physics/07-particle-in-box.html`
**Description:** 1D, 2D, and 3D infinite square well. Visualize quantized energy levels and standing wave patterns.
**Key Features:**
- Dimension selector (1D, 2D, 3D)
- Quantum number input
- Energy spectrum visualization
- Wave function and probability density
- Time evolution of superpositions

**Educational Value:** Simplest quantum system with confinement; explains quantum dots and quantum wells in nanotechnology.

---

### 3.8 Quantum Entanglement Visualization
**File:** `quantum-physics/08-entanglement.html`
**Description:** Visualize Bell states and correlations between entangled particles. Show instantaneous correlation without communication.
**Key Features:**
- Bell state selector (Φ+, Φ-, Ψ+, Ψ-)
- Two-particle correlation visualization
- Measurement on one particle, outcome on other
- Bell inequality testing
- EPR paradox explanation

**Educational Value:** The strangest quantum phenomenon; foundation for quantum computing and cryptography; "spooky action at a distance."

---

## Category 4: Machine Learning Visualizations (10 simulations)

Interactive visualizations of ML algorithms, making black boxes transparent.

### 4.1 Neural Network Playground
**File:** `machine-learning/01-neural-network-playground.html`
**Description:** Train small neural networks on 2D classification problems in real-time. Visualize decision boundaries and weight updates.
**Key Features:**
- Dataset selector (circles, XOR, spiral, Gaussian)
- Network architecture builder (layers, neurons)
- Activation function selector (ReLU, tanh, sigmoid)
- Learning rate and batch size controls
- Decision boundary visualization

**Educational Value:** Understanding how neural networks learn; effect of architecture choices; overfitting and regularization.

---

### 4.2 Gradient Descent Visualization
**File:** `machine-learning/02-gradient-descent.html`
**Description:** Visualize gradient descent on 2D loss surfaces. Compare SGD, momentum, Adam, and RMSprop optimizers.
**Key Features:**
- Multiple loss surface options (convex, saddle, local minima)
- Optimizer comparison (side-by-side paths)
- Learning rate effects
- Momentum visualization
- 3D surface rendering with path

**Educational Value:** Understanding optimization algorithms; why modern optimizers work better; importance of learning rate.

---

### 4.3 K-Means Clustering
**File:** `machine-learning/03-kmeans-clustering.html`
**Description:** Step-by-step visualization of k-means algorithm. Show centroid updates and cluster assignments.
**Key Features:**
- Click to add data points
- Adjustable K value
- Step-by-step mode
- Initialization methods (random, k-means++)
- Voronoi diagram overlay

**Educational Value:** Most fundamental clustering algorithm; understanding iterative refinement; importance of initialization.

---

### 4.4 Decision Tree Construction
**File:** `machine-learning/04-decision-tree.html`
**Description:** Visualize decision tree growing with each split. Show information gain and decision boundaries.
**Key Features:**
- 2D classification data
- Tree structure visualization
- Decision boundary evolution
- Information gain / Gini impurity display
- Pruning controls

**Educational Value:** Most interpretable ML model; understanding feature splits; overfitting in tree models.

---

### 4.5 Support Vector Machine
**File:** `machine-learning/05-svm.html`
**Description:** Visualize maximum margin classifier and support vectors. Show kernel transformations.
**Key Features:**
- Linear SVM with margin visualization
- Support vector highlighting
- Kernel selector (linear, polynomial, RBF)
- C parameter (soft margin) slider
- 2D to higher dimension transformation animation

**Educational Value:** Understanding margin maximization; kernel trick intuition; regularization-margin tradeoff.

---

### 4.6 Principal Component Analysis
**File:** `machine-learning/06-pca.html`
**Description:** Visualize dimensionality reduction with PCA. Show eigenvectors, variance explained, and reconstruction.
**Key Features:**
- 2D/3D data with principal axes
- Variance explained bar chart
- Reconstruction error visualization
- Interactive component selection
- Comparison with original data

**Educational Value:** Most fundamental dimensionality reduction; understanding variance and covariance; data compression.

---

### 4.7 t-SNE Visualization
**File:** `machine-learning/07-tsne.html`
**Description:** Watch t-SNE optimization in real-time. Visualize how high-dimensional clusters emerge in 2D.
**Key Features:**
- Famous datasets (MNIST digits, word embeddings)
- Perplexity parameter exploration
- Animation of optimization process
- Cluster separation evolution
- Comparison with PCA

**Educational Value:** Understanding non-linear dimensionality reduction; perplexity parameter effects; visualization of high-dimensional data.

---

### 4.8 Convolutional Neural Network Visualization
**File:** `machine-learning/08-cnn-visualization.html`
**Description:** Visualize what CNN layers see. Show filters, feature maps, and activation patterns for image classification.
**Key Features:**
- Layer-by-layer feature map display
- Filter visualization
- Activation maximization
- Occlusion sensitivity maps
- Simple image input (draw digit)

**Educational Value:** Understanding what CNNs learn; hierarchical feature extraction; interpretability of deep learning.

---

### 4.9 Reinforcement Learning Grid World
**File:** `machine-learning/09-rl-gridworld.html`
**Description:** Train an agent to navigate a grid world. Visualize Q-values, policies, and learning progress.
**Key Features:**
- Customizable grid world (walls, rewards)
- Q-learning algorithm visualization
- Policy visualization (arrows)
- Value function heatmap
- Exploration vs exploitation (ε-greedy)

**Educational Value:** Foundation of reinforcement learning; understanding value functions and policies; temporal difference learning.

---

### 4.10 Genetic Algorithm Optimization
**File:** `machine-learning/10-genetic-algorithm.html`
**Description:** Visualize evolution of solutions using selection, crossover, and mutation. Apply to function optimization and symbolic regression.
**Key Features:**
- Function landscape visualization
- Population distribution over time
- Fitness histogram
- Genotype → phenotype mapping
- Traveling salesman problem option

**Educational Value:** Evolutionary optimization; population-based search; mutation and crossover effects.

---

## Category 5: Ecology & Population Dynamics (8 simulations)

Models of species interactions, population growth, and ecosystem dynamics.

### 5.1 Lotka-Volterra Predator-Prey
**File:** `ecology/01-lotka-volterra.html`
**Description:** Classic predator-prey differential equations. Visualize population oscillations and phase space orbits.
**Key Features:**
- Population time series (both species)
- Phase space trajectory
- Parameter sliders (growth rates, interaction coefficients)
- Stable limit cycle visualization
- Multiple predator-prey systems

**Educational Value:** Foundation of mathematical ecology; understanding oscillatory dynamics; phase space analysis.

---

### 5.2 Competitive Exclusion Principle
**File:** `ecology/02-competitive-exclusion.html`
**Description:** Two species competing for the same resource. Demonstrate that complete competitors cannot coexist.
**Key Features:**
- Resource competition model
- Niche overlap visualization
- Coexistence conditions (different niches)
- Character displacement
- Parameter space exploration

**Educational Value:** Understanding ecological niches; competitive dynamics; conditions for biodiversity.

---

### 5.3 Island Biogeography
**File:** `ecology/03-island-biogeography.html`
**Description:** MacArthur-Wilson model of species richness on islands. Balance between immigration and extinction.
**Key Features:**
- Island size and distance controls
- Immigration and extinction curves
- Equilibrium species richness
- Turnover dynamics
- Multiple islands comparison

**Educational Value:** Foundation of conservation biology; understanding species-area relationships; habitat fragmentation effects.

---

### 5.4 Ecological Succession
**File:** `ecology/04-ecological-succession.html`
**Description:** Visualize community change over time from pioneer species to climax community. Model primary and secondary succession.
**Key Features:**
- Time-lapse vegetation change
- Species composition bar chart
- Disturbance events (fire, clearing)
- Soil development model
- Biodiversity metrics over time

**Educational Value:** Understanding ecosystem development; disturbance ecology; restoration ecology principles.

---

### 5.5 Food Web Dynamics
**File:** `ecology/05-food-web.html`
**Description:** Multi-trophic food web with producers, herbivores, and predators. Visualize energy flow and trophic cascades.
**Key Features:**
- Food web network visualization
- Energy flow (Sankey-style)
- Species removal experiments
- Trophic cascade demonstration
- Keystone species identification

**Educational Value:** Understanding ecosystem structure; energy transfer efficiency; importance of biodiversity.

---

### 5.6 Metapopulation Dynamics
**File:** `ecology/06-metapopulation.html`
**Description:** Levins model of population of populations. Patches colonized and go extinct; overall persistence depends on connectivity.
**Key Features:**
- Patch occupancy visualization
- Colonization and extinction rates
- Equilibrium occupancy calculation
- Landscape connectivity effects
- Corridor addition experiments

**Educational Value:** Understanding fragmented habitats; source-sink dynamics; conservation corridor design.

---

### 5.7 Fisheries Management Model
**File:** `ecology/07-fisheries.html`
**Description:** Maximum sustainable yield and stock-recruitment models. Explore overfishing and recovery dynamics.
**Key Features:**
- Stock biomass over time
- Fishing effort controls
- MSY calculation and display
- Collapse and recovery scenarios
- Economic revenue optimization

**Educational Value:** Applied ecology; renewable resource management; tragedy of the commons in fisheries.

---

### 5.8 Climate Envelope Model
**File:** `ecology/08-climate-envelope.html`
**Description:** Species distribution based on climate variables. Visualize range shifts under climate change scenarios.
**Key Features:**
- Temperature-precipitation space
- Species occurrence points
- Predicted range (current climate)
- Future range (climate scenarios)
- Range contraction/expansion metrics

**Educational Value:** Understanding species-climate relationships; climate change impacts; conservation planning.

---

## Category 6: Social Dynamics & Opinion Formation (10 simulations)

Models of how opinions, behaviors, and cultural traits spread through populations.

### 6.1 Voter Model
**File:** `social-dynamics/01-voter-model.html`
**Description:** Agents adopt opinions of randomly chosen neighbors. Visualize consensus formation and interface dynamics.
**Key Features:**
- Grid and network topology options
- Multiple opinion states (2, 3, 4+)
- Consensus time measurement
- Interface (boundary) visualization
- Coarsening dynamics

**Educational Value:** Simplest opinion dynamics model; understanding social influence; emergence of consensus.

---

### 6.2 Bounded Confidence Model (Deffuant)
**File:** `social-dynamics/02-bounded-confidence.html`
**Description:** Agents only interact if opinions are within a threshold. Shows clustering of opinions and polarization.
**Key Features:**
- Confidence threshold slider
- Opinion distribution histogram
- Cluster formation animation
- Number of final clusters analysis
- Extremism dynamics

**Educational Value:** Understanding opinion polarization; echo chambers; role of selective exposure.

---

### 6.3 Axelrod Culture Model
**File:** `social-dynamics/03-axelrod-culture.html`
**Description:** Agents have multiple cultural features. Interaction probability depends on similarity. Shows homogenization vs polarization.
**Key Features:**
- Number of features and traits controls
- Cultural regions visualization
- Similarity-driven interaction
- Phase transition (noise level)
- Cultural diversity metrics

**Educational Value:** Understanding cultural dynamics; why global culture doesn't homogenize; importance of initial conditions.

---

### 6.4 Social Influence and Conformity
**File:** `social-dynamics/04-social-conformity.html`
**Description:** Asch conformity experiment simulation. Agents balance private opinion with social pressure.
**Key Features:**
- Individual threshold variation
- Group pressure visualization
- Pluralistic ignorance emergence
- Private vs public opinion divergence
- Critical mass dynamics

**Educational Value:** Understanding conformity and social pressure; spiral of silence; information cascades.

---

### 6.5 Social Learning and Imitation
**File:** `social-dynamics/05-social-learning.html`
**Description:** Agents learn from observing others' successes. Compare social learning with individual exploration.
**Key Features:**
- Multi-armed bandit environment
- Social vs individual learning comparison
- Information cascade dynamics
- Conformity bias effects
- Payoff-biased imitation

**Educational Value:** Understanding cultural transmission; wisdom of crowds vs herding; innovation adoption.

---

### 6.6 Rumor Spreading Model
**File:** `social-dynamics/06-rumor-spreading.html`
**Description:** SIR-type model for rumor propagation. Spreaders, ignorants, stiflers. Different from disease spreading.
**Key Features:**
- Spreading rate and stifling rate
- Network topology effects
- Multiple competing rumors
- Fact-checking mechanism
- Rumor lifetime analysis

**Educational Value:** Understanding information epidemics; misinformation spread; fact-checking effectiveness.

---

### 6.7 Threshold Model of Collective Action
**File:** `social-dynamics/07-collective-action.html`
**Description:** Granovetter's threshold model. Agents act if enough others have acted. Shows cascade dynamics.
**Key Features:**
- Threshold distribution (uniform, normal, bimodal)
- Cascade visualization
- Critical mass calculation
- Cascade size distribution
- Multiple equilibria demonstration

**Educational Value:** Understanding riots, revolutions, technology adoption; importance of threshold distribution.

---

### 6.8 Spiral of Silence
**File:** `social-dynamics/08-spiral-silence.html`
**Description:** Minority opinions become silenced as holders fear isolation. Perceived majority can differ from actual majority.
**Key Features:**
- Willingness to speak out parameter
- Perceived vs actual opinion distribution
- Silence spiral dynamics
- Media influence effects
- Sudden opinion reversal

**Educational Value:** Understanding public opinion dynamics; pluralistic ignorance; media effects on discourse.

---

### 6.9 Norm Emergence and Enforcement
**File:** `social-dynamics/09-norm-emergence.html`
**Description:** How social norms emerge from individual interactions. Include costly punishment and reward mechanisms.
**Key Features:**
- Behavior frequency tracking
- Punishment/reward mechanisms
- Norm internalization dynamics
- Multiple competing norms
- Norm change (tipping points)

**Educational Value:** Understanding social norms; institutional emergence; cooperation through punishment.

---

### 6.10 Filter Bubble Simulation
**File:** `social-dynamics/10-filter-bubble.html`
**Description:** Agents consume content recommended by algorithm. Shows opinion polarization due to algorithmic filtering.
**Key Features:**
- Content recommendation algorithm
- User preference evolution
- Content diversity metrics
- Polarization measurement
- Algorithm comparison (neutral vs personalized)

**Educational Value:** Understanding algorithmic bias; social media effects; digital echo chambers.

---

## Category 7: Traffic & Urban Systems (8 simulations)

Models of urban dynamics, transportation, and infrastructure systems.

### 7.1 Nagel-Schreckenberg Traffic Model
**File:** `traffic-systems/01-nagel-schreckenberg.html`
**Description:** Cellular automaton model of traffic flow. Shows phantom traffic jams emerging from homogeneous flow.
**Key Features:**
- Vehicle density slider
- Max velocity control
- Random deceleration (dawdling) probability
- Space-time diagram
- Fundamental diagram (flow vs density)

**Educational Value:** Understanding traffic jams without cause; cellular automata in real applications; emergent phenomena.

---

### 7.2 Traffic Light Synchronization
**File:** `traffic-systems/02-traffic-lights.html`
**Description:** Optimize traffic light timing for green waves. Visualize vehicle flow through intersection network.
**Key Features:**
- Grid of intersections
- Light timing controls
- Green wave visualization
- Average travel time metrics
- Adaptive vs fixed timing comparison

**Educational Value:** Understanding urban traffic flow; optimization in complex systems; trade-offs in multi-objective optimization.

---

### 7.3 Roundabout vs Intersection
**File:** `traffic-systems/03-roundabout.html`
**Description:** Compare throughput and safety of roundabouts vs signalized intersections under various traffic loads.
**Key Features:**
- Side-by-side comparison
- Traffic volume slider
- Throughput measurement
- Conflict point visualization
- Emissions estimation

**Educational Value:** Understanding traffic engineering trade-offs; when roundabouts work better; safety through design.

---

### 7.4 Braess's Paradox
**File:** `traffic-systems/04-braess-paradox.html`
**Description:** Adding a road can increase travel time for everyone. Counterintuitive result of selfish routing.
**Key Features:**
- Classic Braess network
- Route flow visualization
- Travel time calculation
- Road addition experiment
- Equilibrium vs optimal comparison

**Educational Value:** Understanding paradoxes in network optimization; selfish vs social optimum; transportation planning.

---

### 7.5 Parking Search Model
**File:** `traffic-systems/05-parking-search.html`
**Description:** Agents search for parking spaces. Model cruising behavior and its contribution to traffic congestion.
**Key Features:**
- Street network with parking spaces
- Search strategy options (nearest, random, informed)
- Cruising time statistics
- Congestion from searchers
- Dynamic pricing effects

**Educational Value:** Understanding parking economics; information effects; last-mile transportation challenges.

---

### 7.6 City Growth Simulation
**File:** `traffic-systems/06-city-growth.html`
**Description:** Urban growth model combining transportation network development with land use changes.
**Key Features:**
- Accessibility-driven development
- Transportation network expansion
- Population density evolution
- Urban sprawl measurement
- Policy intervention tests

**Educational Value:** Understanding urban development patterns; transportation-land use feedback; urban planning principles.

---

### 7.7 Public Transit Network Design
**File:** `traffic-systems/07-transit-network.html`
**Description:** Design transit routes to maximize ridership given budget constraints. Visualize coverage and accessibility.
**Key Features:**
- Demand point placement
- Route drawing tool
- Coverage calculation
- Transfer penalty modeling
- Budget constraints

**Educational Value:** Understanding transit planning; network design trade-offs; equity in transportation.

---

### 7.8 Ride-Sharing Dynamics
**File:** `traffic-systems/08-ride-sharing.html`
**Description:** Model ride-sharing platform dynamics. Matching drivers with riders, surge pricing effects.
**Key Features:**
- Supply (drivers) and demand (riders) controls
- Matching algorithm visualization
- Wait time and price dynamics
- Surge pricing mechanism
- Comparison with traditional taxi

**Educational Value:** Understanding two-sided markets; platform economics; dynamic pricing effects.

---

## Category 8: Chemistry & Molecular Dynamics (8 simulations)

Visualizations of chemical and molecular phenomena.

### 8.1 Ideal Gas Simulation
**File:** `chemistry/01-ideal-gas.html`
**Description:** Kinetic theory visualization with many particles. Show Maxwell-Boltzmann distribution emerging.
**Key Features:**
- Particle number and temperature controls
- Velocity distribution histogram
- Pressure measurement (wall collisions)
- Temperature-pressure relationship
- Mean free path visualization

**Educational Value:** Foundation of statistical mechanics; connecting microscopic and macroscopic; gas laws derivation.

---

### 8.2 Phase Transitions (Solid-Liquid-Gas)
**File:** `chemistry/02-phase-transitions.html`
**Description:** Lennard-Jones potential particles showing solid, liquid, and gas phases based on temperature.
**Key Features:**
- Temperature control slider
- Phase identification
- Radial distribution function
- Latent heat visualization
- Phase diagram overlay

**Educational Value:** Understanding states of matter; molecular basis of phases; critical point and supercritical fluids.

---

### 8.3 Crystal Growth
**File:** `chemistry/03-crystal-growth.html`
**Description:** Molecular-level visualization of crystallization from melt or solution.
**Key Features:**
- Nucleation events
- Crystal structure formation
- Growth rate vs supercooling
- Defect incorporation
- Multiple crystal types (cubic, hexagonal)

**Educational Value:** Understanding crystallography; nucleation and growth; solid-state chemistry.

---

### 8.4 Enzyme Kinetics (Michaelis-Menten)
**File:** `chemistry/04-enzyme-kinetics.html`
**Description:** Visualize enzyme-substrate binding and product formation. Derive Michaelis-Menten kinetics.
**Key Features:**
- Substrate concentration series
- Velocity vs [S] curve
- Lineweaver-Burk plot
- Inhibition modes (competitive, non-competitive)
- Km and Vmax determination

**Educational Value:** Foundation of biochemistry; understanding catalysis; drug mechanism analysis.

---

### 8.5 Molecular Collision Dynamics
**File:** `chemistry/05-molecular-collisions.html`
**Description:** Visualize collision theory of chemical reactions. Show activation energy barrier and orientation effects.
**Key Features:**
- Collision frequency calculation
- Energy distribution visualization
- Activation energy barrier
- Arrhenius equation connection
- Catalyst effect demonstration

**Educational Value:** Understanding reaction rates; molecular basis of Arrhenius equation; catalyst mechanisms.

---

### 8.6 Electrochemistry Cell
**File:** `chemistry/06-electrochemistry.html`
**Description:** Visualize electrochemical cell with oxidation and reduction half-reactions. Show electron flow and ion migration.
**Key Features:**
- Galvanic and electrolytic cell modes
- Half-reaction visualization
- Cell potential calculation
- Concentration effects (Nernst equation)
- Battery discharge simulation

**Educational Value:** Understanding electrochemistry; battery operation; corrosion and protection.

---

### 8.7 Polymer Chain Dynamics
**File:** `chemistry/07-polymer-chains.html`
**Description:** Random walk model of polymer chains. Visualize radius of gyration, end-to-end distance, and entanglement.
**Key Features:**
- Chain length control
- Multiple chain visualization
- Radius of gyration calculation
- Self-avoiding walk comparison
- Entanglement effects

**Educational Value:** Understanding polymer physics; random walks in chemistry; material properties.

---

### 8.8 Chemical Equilibrium
**File:** `chemistry/08-chemical-equilibrium.html`
**Description:** Visualize dynamic equilibrium where forward and reverse reaction rates balance. Le Chatelier's principle.
**Key Features:**
- Reactant/product concentration bars
- Forward/reverse rate visualization
- Equilibrium constant calculation
- Perturbation experiments (concentration, temperature)
- Reaction quotient vs K comparison

**Educational Value:** Understanding dynamic equilibrium; Le Chatelier's principle; equilibrium calculations.

---

## Category 9: Information Theory & Cryptography (8 simulations)

Visualizations of information encoding, transmission, and security.

### 9.1 Shannon Entropy Visualization
**File:** `information-theory/01-shannon-entropy.html`
**Description:** Calculate and visualize information entropy for various probability distributions.
**Key Features:**
- Distribution editor (bar chart)
- Entropy calculation and display
- Optimal code length comparison
- Entropy maximization (uniform)
- Conditional entropy

**Educational Value:** Foundation of information theory; understanding randomness and information; compression limits.

---

### 9.2 Huffman Coding
**File:** `information-theory/02-huffman-coding.html`
**Description:** Build Huffman tree step-by-step. Visualize variable-length coding and compression ratio.
**Key Features:**
- Symbol frequency input
- Tree construction animation
- Code assignment visualization
- Compression ratio calculation
- Comparison with fixed-length codes

**Educational Value:** Understanding lossless compression; optimal prefix codes; tree data structures.

---

### 9.3 Error Correction Codes
**File:** `information-theory/03-error-correction.html`
**Description:** Visualize Hamming codes and Reed-Solomon codes correcting errors in transmission.
**Key Features:**
- Message encoding visualization
- Error injection
- Syndrome calculation
- Error correction animation
- Multiple error scenarios

**Educational Value:** Understanding redundancy for reliability; parity checks; QR code error correction.

---

### 9.4 Visual Cryptography
**File:** `information-theory/04-visual-cryptography.html`
**Description:** Split an image into shares that reveal nothing individually but show image when overlaid.
**Key Features:**
- Image upload or drawing
- (2,2) threshold scheme
- Share generation visualization
- Overlay reconstruction
- (3,3) and (2,3) schemes

**Educational Value:** Understanding secret sharing; threshold schemes; XOR operations.

---

### 9.5 RSA Encryption Visualization
**File:** `information-theory/05-rsa-encryption.html`
**Description:** Step-by-step visualization of RSA key generation, encryption, and decryption.
**Key Features:**
- Prime number selection
- Key generation process
- Encryption/decryption animation
- Modular exponentiation visualization
- Small example with traceable calculations

**Educational Value:** Understanding public key cryptography; mathematical foundations; digital signatures.

---

### 9.6 Diffie-Hellman Key Exchange
**File:** `information-theory/06-diffie-hellman.html`
**Description:** Visualize how two parties can establish a shared secret over public channel.
**Key Features:**
- Color mixing analogy
- Mathematical version with discrete log
- Public/private value visualization
- Eavesdropper view
- MITM attack demonstration

**Educational Value:** Understanding key exchange; public channel communication; cryptographic protocols.

---

### 9.7 Hash Function Visualization
**File:** `information-theory/07-hash-functions.html`
**Description:** Visualize how hash functions create fixed-size digests. Show avalanche effect and collision resistance.
**Key Features:**
- Input text field
- Hash output (simplified algorithm)
- Avalanche effect demonstration
- Collision search
- Hash chain visualization

**Educational Value:** Understanding hash functions; password storage; blockchain foundations.

---

### 9.8 Steganography
**File:** `information-theory/08-steganography.html`
**Description:** Hide messages in images using LSB (least significant bit) encoding. Demonstrate and detect.
**Key Features:**
- Image upload
- Message embedding
- Before/after comparison
- Detection algorithm
- Capacity calculation

**Educational Value:** Understanding covert communication; digital watermarking; forensic analysis.

---

## Category 10: Music Theory & Acoustics (8 simulations)

Visualizations connecting mathematics, physics, and music.

### 10.1 Harmonic Series
**File:** `music-acoustics/01-harmonic-series.html`
**Description:** Visualize overtones of a fundamental frequency. Show why musical instruments have distinct timbres.
**Key Features:**
- Fundamental frequency selector
- Harmonic amplitude controls
- Waveform synthesis display
- Spectrum analyzer
- Instrument timbre presets

**Educational Value:** Understanding timbre; physics of musical instruments; Fourier analysis of sound.

---

### 10.2 Just Intonation vs Equal Temperament
**File:** `music-acoustics/02-temperament.html`
**Description:** Compare pure ratio intervals with equal temperament. Hear and see the difference.
**Key Features:**
- Interval selector
- Ratio vs cents display
- Beat frequency visualization
- Side-by-side comparison
- Pythagorean comma demonstration

**Educational Value:** Understanding tuning systems; history of music; mathematical basis of harmony.

---

### 10.3 Chord Visualization
**File:** `music-acoustics/03-chord-visualization.html`
**Description:** Visualize chord structure on piano, guitar, and circle of fifths. Show intervals and inversions.
**Key Features:**
- Chord type selector (major, minor, 7th, etc.)
- Root note selector
- Multiple instrument views
- Voice leading visualization
- Chord progression builder

**Educational Value:** Understanding chord construction; music theory fundamentals; instrument fingerings.

---

### 10.4 Rhythm Pattern Generator
**File:** `music-acoustics/04-rhythm-patterns.html`
**Description:** Visualize and play polyrhythms, Euclidean rhythms, and complex time signatures.
**Key Features:**
- Multiple rhythm tracks
- Euclidean rhythm generator
- Polyrhythm visualization (circular)
- Time signature selector
- Groove/swing adjustment

**Educational Value:** Understanding rhythm; world music patterns; mathematical rhythm generation.

---

### 10.5 Standing Waves on Strings
**File:** `music-acoustics/05-standing-waves.html`
**Description:** Visualize how string length, tension, and density determine pitch. Show nodes and antinodes.
**Key Features:**
- String length adjustment
- Harmonic mode selector
- Wave equation animation
- Frequency calculation
- Guitar/violin comparison

**Educational Value:** Physics of stringed instruments; wave mechanics; quantization of frequencies.

---

### 10.6 Resonance and Sympathetic Vibration
**File:** `music-acoustics/06-resonance.html`
**Description:** Visualize how objects vibrate in response to matching frequencies. Demonstrate beating and resonance.
**Key Features:**
- Driving frequency control
- Natural frequency setting
- Amplitude response curve
- Damping effect
- Tacoma Narrows example

**Educational Value:** Understanding resonance; mechanical vibrations; acoustic design.

---

### 10.7 Circle of Fifths
**File:** `music-acoustics/07-circle-of-fifths.html`
**Description:** Interactive circle of fifths showing key relationships, chord progressions, and modulations.
**Key Features:**
- Key selection
- Relative major/minor display
- Common chord progressions
- Modulation pathways
- Enharmonic equivalents

**Educational Value:** Understanding key relationships; chord progression theory; composition techniques.

---

### 10.8 Wave Interference and Beats
**File:** `music-acoustics/08-wave-beats.html`
**Description:** Visualize interference between two close frequencies creating beat frequency. Used for tuning instruments.
**Key Features:**
- Two frequency sliders
- Sum waveform display
- Beat frequency calculation
- Envelope visualization
- Audio output

**Educational Value:** Understanding wave superposition; beat frequency tuning; acoustic phenomena.

---

## Category 11: Sports Analytics & Game Strategy (5 simulations)

Visualizations of strategic decision-making in sports and games.

### 11.1 Basketball Shot Chart
**File:** `sports-analytics/01-basketball-shots.html`
**Description:** Visualize optimal shooting positions based on expected points. Heat map of shot efficiency.
**Key Features:**
- Court visualization
- Shot location input
- Expected points calculation
- Player comparison mode
- 3-point vs midrange analysis

**Educational Value:** Understanding sports analytics; expected value in decision-making; data visualization.

---

### 11.2 Penalty Kick Game Theory
**File:** `sports-analytics/02-penalty-kicks.html`
**Description:** Mixed strategy equilibrium in penalty kicks. Kicker vs goalkeeper game.
**Key Features:**
- Payoff matrix
- Mixed strategy calculation
- Randomization demonstration
- Historical data comparison
- Real player tendencies

**Educational Value:** Application of game theory; mixed strategies in sports; behavioral economics.

---

### 11.3 Tournament Bracket Simulator
**File:** `sports-analytics/03-tournament-brackets.html`
**Description:** Simulate tournament outcomes based on team ratings. Visualize upset probabilities and expected champions.
**Key Features:**
- Bracket editor
- Team rating input
- Monte Carlo simulation
- Path to victory visualization
- Upset probability display

**Educational Value:** Understanding tournament formats; probability in sports; simulation methods.

---

### 11.4 Optimal Running Pace Strategy
**File:** `sports-analytics/04-running-pace.html`
**Description:** Visualize optimal pacing strategy for distance running based on energy depletion model.
**Key Features:**
- Race distance selector
- Critical power model
- Even vs negative split comparison
- Energy reserve visualization
- World record pace comparison

**Educational Value:** Understanding physiological optimization; pacing strategies; sports science.

---

### 11.5 Game Tree (Tic-Tac-Toe / Connect Four)
**File:** `sports-analytics/05-game-tree.html`
**Description:** Visualize complete game tree and optimal play for simple games. Minimax algorithm demonstration.
**Key Features:**
- Game selector (tic-tac-toe, nim, simplified connect four)
- Tree expansion animation
- Minimax value calculation
- Alpha-beta pruning visualization
- Optimal move highlighting

**Educational Value:** Understanding game trees; minimax algorithm; AI in games; pruning strategies.

---

## Category 12: Historical & Archaeological Simulations (5 simulations)

Models exploring historical processes and archaeological phenomena.

### 12.1 Trade Route Emergence
**File:** `historical/01-trade-routes.html`
**Description:** Simulate how trade routes emerge between settlements based on resource distribution and terrain.
**Key Features:**
- Settlement placement
- Resource distribution
- Terrain difficulty map
- Route optimization (least cost path)
- Trade volume visualization

**Educational Value:** Understanding historical trade networks; economic geography; network formation.

---

### 12.2 Agricultural Spread
**File:** `historical/02-agricultural-spread.html`
**Description:** Model the spread of agriculture from the Fertile Crescent across Europe. Demic diffusion vs cultural diffusion.
**Key Features:**
- Geography map overlay
- Spread rate calculation
- Climate zone effects
- Population density evolution
- Archaeological site comparison

**Educational Value:** Understanding Neolithic transition; diffusion processes; human migration.

---

### 12.3 Settlement Pattern Simulation
**File:** `historical/03-settlement-patterns.html`
**Description:** Central place theory and rank-size distribution. Why cities form where they do.
**Key Features:**
- Christaller hexagonal market areas
- Rank-size distribution plot
- Primate city vs regular distribution
- Resource location effects
- Transportation network influence

**Educational Value:** Understanding urban geography; central place theory; archaeological settlement analysis.

---

### 12.4 Writing System Evolution
**File:** `historical/04-writing-evolution.html`
**Description:** Simulate evolution from pictographs to abstract symbols. Show how writing systems simplify over time.
**Key Features:**
- Symbol evolution animation
- Simplification rules
- Frequency-based change
- Multiple script comparison
- Decipherment challenge mode

**Educational Value:** Understanding writing system evolution; information encoding; cultural transmission.

---

### 12.5 Civilization Collapse Model
**File:** `historical/05-civilization-collapse.html`
**Description:** Model factors leading to civilization collapse: climate, resource depletion, complexity.
**Key Features:**
- Population-resource dynamics
- Social complexity cost
- Climate variability
- Elite resource extraction
- Collapse cascade visualization

**Educational Value:** Understanding societal sustainability; systemic risk; lessons from history.

---

## Implementation Priority Matrix

### Tier 1: High Impact, Medium Difficulty (Implement First)
| Simulation | Category | Rationale |
|------------|----------|-----------|
| Iterated Prisoner's Dilemma Tournament | Game Theory | Classic, highly visual, educational |
| Preferential Attachment | Network Science | Beautiful network growth animation |
| Neural Network Playground | Machine Learning | Highly requested, interactive |
| Lotka-Volterra Predator-Prey | Ecology | Foundation model, elegant oscillations |
| Voter Model | Social Dynamics | Simple, visually compelling |
| Nagel-Schreckenberg Traffic | Traffic Systems | Relatable, shows emergent jams |
| Double Slit Experiment | Quantum Physics | Iconic physics visualization |
| Shannon Entropy | Information Theory | Foundation concept |

### Tier 2: High Educational Value, Medium-Hard Difficulty
| Simulation | Category | Rationale |
|------------|----------|-----------|
| Bounded Confidence Model | Social Dynamics | Explains polarization |
| Epidemic Spreading on Networks | Network Science | Timely, important |
| Gradient Descent Visualization | Machine Learning | Core ML concept |
| Small World Networks | Network Science | Famous result |
| Braess's Paradox | Traffic Systems | Counterintuitive, memorable |
| RSA Encryption | Information Theory | Practical importance |

### Tier 3: Visually Stunning, Higher Difficulty
| Simulation | Category | Rationale |
|------------|----------|-----------|
| Hydrogen Atom Orbitals | Quantum Physics | Beautiful 3D (Three.js) |
| Phase Transitions | Chemistry | Dramatic visual change |
| Community Detection | Network Science | Impressive force-directed |
| t-SNE Visualization | Machine Learning | Mesmerizing clustering |

### Tier 4: Niche but Valuable
| Simulation | Category | Rationale |
|------------|----------|-----------|
| All Historical Simulations | Historical | Unique educational niche |
| Sports Analytics | Sports | Different audience appeal |
| Music Theory | Acoustics | Intersection of art and science |

---

## Technical Considerations

### Technologies by Category
| Category | Primary | Backup |
|----------|---------|--------|
| Game Theory | Canvas 2D | D3.js for network games |
| Network Science | D3.js (force-directed) | Canvas for large networks |
| Quantum Physics | Three.js + WebGL | Canvas for 2D projections |
| Machine Learning | Canvas 2D | WebGL for neural nets |
| Ecology | Canvas 2D | D3.js for food webs |
| Social Dynamics | Canvas 2D | D3.js for networks |
| Traffic Systems | Canvas 2D | WebGL for 3D cities |
| Chemistry | Three.js | Canvas for 2D reactions |
| Information Theory | Canvas 2D | SVG for trees |
| Music/Acoustics | Web Audio + Canvas | Three.js for 3D |
| Sports | Canvas 2D + SVG | D3.js for charts |
| Historical | Canvas 2D | Mapbox for geography |

### Performance Targets
- Grid-based simulations: 1000x1000 @ 60 FPS
- Network visualizations: 1000 nodes, 5000 edges
- 3D visualizations: 60 FPS on mid-range GPU
- Audio synthesis: < 10ms latency

### Accessibility
- All simulations should work without audio
- Color-blind friendly palettes
- Keyboard navigation where possible
- Explanatory text for all parameters

---

## Next Steps

1. **Phase 1 (Months 1-3):** Implement Tier 1 simulations (8 simulations)
2. **Phase 2 (Months 4-6):** Implement Tier 2 simulations (6 simulations)
3. **Phase 3 (Months 7-9):** Implement Tier 3 simulations (4 simulations)
4. **Phase 4 (Months 10-12):** Implement Tier 4 and remaining (82 simulations)

---

*Document Version: 1.0*
*Created: December 2024*
*Total Planned Simulations: 100*
*Estimated Implementation Time: 12 months*
