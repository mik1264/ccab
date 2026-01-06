# 100 New Demo Ideas (Uniqueness-Checked)

This is a curated set of **100 new demo ideas** designed to complement CCAB’s existing galleries.

## How “not present before” was checked
For each idea, I picked a **distinctive anchor keyword** (shown in backticks). At the time this list was generated, I scanned **all HTML files in the repo** and verified each anchor keyword appeared **zero times** in:
- any existing `.html` file path, and
- any existing `.html` file content (including `<title>` and inline JS/CSS).

As ideas get implemented, their anchors will naturally start appearing in the codebase; those items are tracked as **`[x]`** in this document and no longer satisfy the “anchor absent” condition.

This check is a strong guard against obvious duplicates in the current demo set. It does not guarantee there is no *conceptual* overlap under different naming.

---

## Math, Geometry & Topology (1–20)
1. **[x] Hopf Fibration Explorer** (`fibration`) — Interactive stereographic projection of fibers (circles) and the base sphere; pick a point on S² and render its linked fiber(s). Suggested: `threejs/` (Three.js).
2. **[x] 4D Tesseract Rotation & Slicing** (`tesseract`) — Rotate a hypercube in 4D, project to 3D/2D, and animate 3D "slice" cross-sections. Suggested: `threejs/` or `webgl-shaders/`.
3. **[x] Octonion Multiplication & Fano Plane** (`octonion`) — Click-to-multiply basis elements on the Fano plane and visualize non-associativity with animated parenthesization. Suggested: `d3js/` + Canvas.
4. **[x] Borsuk–Ulam "Antipodes" Game** (`borsuk`) — Let users paint a continuous map on a sphere and automatically find antipodal points with equal output. Suggested: Canvas 2D.
5. **[x] Joukowski Airfoil Designer** (`joukowski`) — Drag a circle/offset in the complex plane and watch it map into an airfoil; show circulation and lift qualitatively. Suggested: Canvas 2D.
6. **[x] Enneper Surface Curvature Explorer** (`enneper`) — Render the parametric surface with toggles for curvature heatmap and geodesic curves. Suggested: Three.js.
7. **[x] Projective Plane Crosscap Viewer** (`crosscap`) — Explore the crosscap immersion and self-intersections; show loops that reverse orientation. Suggested: Three.js.
8. **[x] Minkowski Sum Playground** (`minkowski`) — Draw polygons, compute Minkowski sums/differences, and show configuration-space obstacles (robot translation). Suggested: Canvas 2D.
9. **[x] Laguerre / Power Diagram (Weighted Voronoi)** (`laguerre`) — Sites with weights produce cells; animate weight changes and show dual (weighted Delaunay). Suggested: Canvas 2D.
10. **[x] Kakeya Needle Set Visualizer** (`kakeya`) — Demonstrate "rotate a segment" constructions and area tradeoffs; compare classic vs optimized sets. Suggested: Canvas 2D.
11. **[x] Kaleidocycle Kinematics** (`kaleidocycle`) — Simulate a hinge loop (paper kaleidocycle), with fold angles, twist, and stability regions. Suggested: Three.js.
12. **[x] Apéry's Constant ζ(3) Approximation Lab** (`apery`) — Compare series/accelerations and show error convergence visually. Suggested: Canvas 2D.
13. **[x] Schläfli Symbol Explorer** (`schlafli`) — Enter `{p,q,r}` and render the corresponding polytope/tessellation where it exists; show curvature regime (spherical/Euclidean/hyperbolic). Suggested: Three.js.
14. **[x] Sturmian Word Generator** (`sturmian`) — Choose an irrational slope α and generate cutting sequences; show balance property and factor complexity. Suggested: Canvas 2D.
15. **[x] Farey Tree & Ford Circles** (`farey`) — Build Farey sequences interactively, draw Ford circles, and highlight mediants as you zoom. Suggested: Canvas 2D.
16. **[x] Ammann–Beenker Tiling & Diffraction** (`beenker`) — Generate the 8-fold quasicrystal tiling and compute its Fourier magnitude "diffraction" pattern. Suggested: Canvas 2D / WebGL.
17. **[x] Dandelin Spheres → Conic Sections** (`dandelin`) — Slide a plane through a cone and watch spheres reveal focus points; derive ellipse/parabola/hyperbola. Suggested: Three.js.
18. **[x] Gelfand–Tsetlin Pattern Builder** (`gelfand`) — Interactive interlacing triangles; sample random patterns and relate to representation dimensions. Suggested: Canvas 2D.
19. **[x] Steiner Porism / Chain Simulator** (`steiner`) — Place two circles and generate tangent-circle chains; explore closure conditions. Suggested: Canvas 2D.
20. **[x] Pontryagin Bang–Bang Control Demo** (`pontryagin`) — Minimal-time control for a double integrator (position/velocity) with saturated control; visualize switching surfaces. Suggested: Canvas 2D.

## Algorithms, Data Structures & Distributed Systems (21–40)
21. **[x] van Emde Boas Tree Operations** (`emde`) — Animate predecessor/successor queries and recursive clusters; compare to BST. Suggested: Canvas 2D.
22. **[x] Treap (BST + Heap) Visualizer** (`treap`) — Insert/delete with random priorities; show rotations and expected balance. Suggested: Canvas 2D.
23. **[x] Skip List Probability Lab** (`skiplist`) — Step through insertion/search; visualize tower heights distribution under different p. Suggested: Canvas 2D.
24. **[x] Scapegoat Tree Rebuilds** (`scapegoat`) — Show when/why subtree rebuild triggers and how amortized guarantees emerge. Suggested: Canvas 2D.
25. **[x] Ukkonen Suffix Tree Construction** (`ukkonen`) — Build the suffix tree online with active point visualization; query substring matches. Suggested: Canvas 2D.
26. **[x] Aho–Corasick Automaton Builder** (`corasick`) — Draw the trie, failure links, and run matches over input text with highlights. Suggested: Canvas 2D.
27. **[x] Burrows–Wheeler + FM-Index Explorer** (`burrows`) — Show rotations, BWT string, ranks, and backward search step-by-step. Suggested: Canvas 2D.
28. **[x] HyperLogLog Estimator Sandbox** (`hyperloglog`) — Add stream items, observe register updates, bias correction, and error bars. Suggested: Canvas 2D.
29. **[x] Count-Min Sketch Frequency Estimation** (`countmin`) — Compare sketch estimates to exact counts for heavy hitters under memory constraints. Suggested: Canvas 2D.
30. **[x] XOR Filter vs Bloom Filter** (`xorfilter`) — Build filters side-by-side and measure false positives vs space; visualize fingerprint placement. Suggested: Canvas 2D.
31. **[x] LSM-Tree Compaction Simulator** (`lsmtree`) — Model memtables, SSTables, leveled vs tiered compaction, write amplification. Suggested: Canvas 2D.
32. **[x] Viewstamped Replication Timeline** (`viewstamped`) — Animate views, primary changes, log replication, and recovery. Suggested: Canvas 2D.
33. **[x] EPaxos Fast/Slow Paths** (`epaxos`) — Show dependency graphs and how commands commit without a single leader in the common case. Suggested: Canvas 2D.
34. **[x] CRDT Playground** (`crdt`) — OR-Set, LWW-Register, RGA list: run concurrent edits and visualize merges. Suggested: Canvas 2D.
35. **[x] Vector Clock Causality Explorer** (`vectorclock`) — Generate events, merge clocks, and detect concurrency vs happens-before. Suggested: Canvas 2D.
36. **[x] Hopcroft DFA Minimization** (`hopcroft`) — Partition refinement visualizer with live state diagrams and language equivalence checks. Suggested: Canvas 2D.
37. **[x] Karger Random Contraction Min-Cut** (`karger`) — Animate contractions and track cut size distribution over many trials. Suggested: Canvas 2D.
38. **[x] Dinic Max-Flow Visualizer** (`dinic`) — Build level graphs and blocking flows; show residual edges and saturations. Suggested: Canvas 2D.
39. **[x] Edmonds Arborescence (Directed MST)** (`edmonds`) — Visualize cycle contraction and restoration on directed graphs. Suggested: Canvas 2D.
40. **[x] Min-Cost Flow with Potentials** (`mincost`) — Successive shortest augmenting paths with reduced costs; show dual potentials evolving. Suggested: Canvas 2D.

## ML, Statistics & Data (41–60)
41. **[x] t-SNE Embedding Explorer** (`tsne`) — Run t-SNE on synthetic clusters; animate KL descent and perplexity effects. Suggested: Canvas 2D.
42. **[x] UMAP Graph + Embedding Explorer** (`umap`) — Show k-NN graph, fuzzy simplicial set, and embedding optimization. Suggested: Canvas 2D.
43. **[x] DBSCAN Density Clustering Lab** (`dbscan`) — Adjust ε/minPts and watch clusters/noise change; highlight core/border points. Suggested: Canvas 2D.
44. **[x] Mean Shift Mode-Seeking** (`meanshift`) — Run mean shift on point clouds; visualize kernels and convergence to modes. Suggested: Canvas 2D.
45. **[x] Optimizer Shootout (AdaGrad focus)** (`adagrad`) — Compare SGD/AdaGrad/RMSprop/Adam on identical loss landscapes and noisy gradients. Suggested: Canvas 2D.
46. **[x] SVM Margin & Kernels** (`svm`) — Drag points, fit max-margin separator, and toggle RBF/poly kernels with support vectors highlighted. Suggested: Canvas 2D.
47. **[x] Baum–Welch HMM Training** (`baumwelch`) — Train a tiny HMM on sequences; visualize forward-backward probabilities per step. Suggested: Canvas 2D.
48. **[x] BCJR Soft-Decoder Demo** (`bcjr`) — Show trellis, log-likelihood ratios, and compare to hard-decision decoding. Suggested: Canvas 2D.
49. **[x] ELBO as a Geometry Problem** (`elbo`) — Interactive 1D variational inference showing how ELBO trades fit vs entropy; show KL terms. Suggested: Canvas 2D.
50. **[x] RealNVP Normalizing Flow** (`realnvp`) — Couple layers transforming a Gaussian into a multimodal target; show invertibility and Jacobians. Suggested: Canvas 2D.
51. **[x] Word2Vec in 2D (Toy Corpus)** (`word2vec`) — Train embeddings on a tiny text; show cosine neighbors and analogy vectors. Suggested: Canvas 2D.
52. **[x] Bayesian Optimization Playground** (`bayesopt`) — GP posterior + acquisition function; optimize noisy black-box functions interactively. Suggested: Canvas 2D.
53. **[x] XGBoost Step-by-Step** (`xgboost`) — Build boosted trees iteratively; visualize residuals and learning rate effects. Suggested: Canvas 2D.
54. **[x] AdaBoost with Stumps** (`adaboost`) — Show weight updates on points, stump selection, and margin evolution. Suggested: Canvas 2D.
55. **[x] RANSAC Robust Fitting** (`ransac`) — Fit a line/circle with outliers; show inlier sets across iterations and confidence. Suggested: Canvas 2D.
56. **[x] Autodiff Graph Visualizer** (`autodiff`) — Build a computation graph from an expression and animate forward/reverse mode passes. Suggested: Canvas 2D.
57. **[x] Neural Tangent Kernel Intuition** (`ntk`) — Compare kernel regression prediction to a wide network trained by gradient descent. Suggested: Canvas 2D.
58. **[x] Grad-CAM for Tiny CNNs** (`gradcam`) — Train on simple shapes; display activation maps and gradient-weighted heatmaps. Suggested: Canvas 2D.
59. **[x] Jackknife Bias/Variance Tool** (`jackknife`) — Remove-one resamples to estimate bias/SE; compare to analytic results. Suggested: Canvas 2D.
60. **[x] Expectation–Maximization Walkthrough** (`expectationmaximization`) — EM for mixture of Gaussians or coin flips; visualize responsibilities and log-likelihood. Suggested: Canvas 2D.

## Physics, Chemistry & Biology (61–80)
61. **[x] Izhikevich Spiking Neuron Zoo** (`izhikevich`) — Explore bursting, tonic spiking, chattering, etc., via parameter presets and phase-plane traces. Suggested: Canvas 2D.
62. **[x] Morris–Lecar Neuron Bifurcations** (`morrislecar`) — Nullclines, fixed points, and oscillations; sweep parameters and show transitions. Suggested: Canvas 2D.
63. **[x] 2D FDTD Maxwell Waves** (`fdtd`) — Propagate EM waves, reflect/refract through materials, and build a simple waveguide. Suggested: Canvas 2D (coarse grid) or WebGL.
64. **[x] Rayleigh–Bénard Convection** (`rayleighbenard`) — Heat-from-below fluid convection with adjustable Rayleigh number; show roll formation. Suggested: Canvas 2D.
65. **[x] Ornstein–Uhlenbeck Process** (`ornstein`) — Mean-reverting noise; compare sample paths, stationary distribution, and autocorrelation. Suggested: Canvas 2D.
66. **[x] Fokker–Planck PDE Visualizer** (`fokker`) — Evolve probability density under drift+diffusion; compare to Monte Carlo sampling. Suggested: Canvas 2D.
67. **[x] Langevin Dynamics in a Potential** (`langevin`) — Particle in double-well potential; show temperature-driven hopping and energy stats. Suggested: Canvas 2D.
68. **[x] Kuramoto–Sivashinsky Chaos (1D)** (`sivashinsky`) — Solve a chaotic PDE; visualize spatiotemporal patterns and spectrum. Suggested: Canvas 2D.
69. **[x] Kac Ring Irreversibility Demo** (`kac`) — Flip markers with deterministic rules and show macroscopic relaxation despite reversibility. Suggested: Canvas 2D.
70. **[x] Selkov Glycolysis Oscillator** (`selkov`) — Limit cycles from autocatalysis; phase portrait + time series with parameter sweeps. Suggested: Canvas 2D.
71. **[x] Smoluchowski Coagulation** (`smoluchowski`) — Cluster-size distributions over time; compare kernels and gelation thresholds. Suggested: Canvas 2D.
72. **[x] Kramers Escape Rate** (`kramers`) — Barrier crossing vs damping/temperature; compare simulated rates to theory. Suggested: Canvas 2D.
73. **[x] Ekman Spiral Explorer** (`ekman`) — Wind forcing + Coriolis + viscosity; show velocity vectors with depth. Suggested: Canvas 2D.
74. **[x] Rossby Wave Dispersion** (`rossby`) — Visualize phase/group velocities on a beta plane; interactive wavenumber selection. Suggested: Canvas 2D.
75. **[x] Sagnac Interferometer** (`sagnac`) — Rotation-induced phase shift; animate fringes and show sensitivity scaling. Suggested: Canvas 2D.
76. **[x] Van Allen Belt Trapping** (`vanallen`) — Charged particles spiraling/bouncing/drifting in dipole field; show loss cones. Suggested: Canvas 2D.
77. **[x] Lichtenberg Figure Growth** (`lichtenberg`) — Dielectric breakdown / discharge branching with tunable bias and noise. Suggested: Canvas 2D.
78. **[x] Foucault Pendulum Precession** (`foucault`) — Simulate pendulum swing plane rotation vs latitude; include Earth rotation visualization. Suggested: Canvas 2D.
79. **[x] Aharonov–Bohm Phase** (`aharonov`) — Show interference shift when paths enclose a flux tube (even with zero B along paths). Suggested: Canvas 2D.
80. **[x] Fabry–Pérot Interferometer** (`fabry`) — Multiple-beam interference; finesse vs reflectivity; animate transmitted spectrum. Suggested: Canvas 2D.

## Art, Graphics & Creative Tools (81–100)
81. **[x] Cylindrical Anamorphosis Maker** (`anamorphosis`) — Draw an image and generate its distorted floor projection for a cylindrical mirror reveal. Suggested: Canvas 2D.
82. **[x] Datamosh-Style Motion Glitch** (`datamosh`) — Blend frames using motion vectors / block shifts; adjustable "codec error" controls. Suggested: Canvas 2D.
83. **[x] Blue-Noise via Void-and-Cluster** (`voidandcluster`) — Generate blue-noise point sets; show spectrum and compare to random/Poisson. Suggested: Canvas 2D.
84. **[x] Kuwahara Painterly Filter** (`kuwahara`) — Region-based smoothing for painterly abstraction; adjustable kernel size and edge preservation. Suggested: Canvas 2D.
85. **[x] XDoG Sketch Effect** (`xdog`) — Stylized edge drawing via difference-of-Gaussians + thresholding; live parameter UI. Suggested: Canvas 2D.
86. **[x] Frei-Chen Edge Energy Visualizer** (`freichen`) — Show directional edge energies and combine into a coherent edge map. Suggested: Canvas 2D.
87. **[x] Bayer Ordered Dithering** (`bayer`) — Compare matrix sizes and threshold maps; animate dithering as you vary levels. Suggested: Canvas 2D.
88. **[x] Floyd–Steinberg Dithering** (`floydsteinberg`) — Error diffusion with live kernel visualization and artifact comparison. Suggested: Canvas 2D.
89. **[x] Stucki Dithering Variant** (`stucki`) — Compare Stucki vs Floyd–Steinberg vs ordered dithers on the same image. Suggested: Canvas 2D.
90. **[x] Perona–Malik Anisotropic Diffusion** (`perona`) — Edge-preserving smoothing; visualize diffusion coefficients and time steps. Suggested: Canvas 2D.
91. **[x] CLAHE Contrast Enhancer** (`clahe`) — Tile-based histogram equalization with clip limit; show per-tile histograms. Suggested: Canvas 2D.
92. **[x] Reinhard Tone Mapping Lab** (`reinhard`) — Exposure, white point, and local vs global tone mapping comparisons. Suggested: Canvas 2D.
93. **[x] MSDF Font Rendering Zoom Tool** (`msdf`) — Show how multi-channel SDF preserves corners at any scale; render text with zoom/rotation. Suggested: Canvas 2D / WebGL.
94. **[x] De Casteljau Bezier Construction** (`casteljau`) — Step through interpolation layers and show the curve point construction over time. Suggested: Canvas 2D.
95. **[x] Catmull–Rom Spline Editor** (`catmull`) — Drag control points; show tangents and tension; compare to Bezier. Suggested: Canvas 2D.
96. **[x] NURBS Curve Playground** (`nurbs`) — Interactive knot vector + weights; demonstrate how weights pull the curve. Suggested: Canvas 2D.
97. **[x] Kintsugi Crack Generator** (`kintsugi`) — Procedural cracks + golden fill; control crack density and "repair" animation. Suggested: Canvas 2D.
98. **[x] Suminagashi Ink Marbling** (`suminagashi`) — Layered ink rings advected by gentle flow fields to mimic marbling. Suggested: Canvas 2D.
99. **[x] Cut-and-Project Quasicrystals** (`cutandproject`) — Generate quasiperiodic point sets/tilings from higher-dimensional lattices and projections. Suggested: Canvas 2D.
100. **[x] Seam Carving Resizer** (`seamcarving`) — Content-aware resizing with energy maps; visualize removed seams step-by-step. Suggested: Canvas 2D.
