# CCAB Duplicate & Quality Audit Report

**Generated**: 2026-02-07 by 50-agent swarm analysis
**Scope**: 4,375 HTML demos across 118 directories
**Reports compiled**: 39 agent reports (agents 01-40)

---

## 1. EXECUTIVE SUMMARY

| Metric | Count |
|--------|-------|
| Total demos analyzed | 4,375 |
| Directories covered | 118 |
| **Files rated EXCELLENT** | ~350 (8%) |
| **Files rated GOOD** | ~1,600 (37%) |
| **Files rated BASIC** | ~700 (16%) |
| **Files rated WEAK** | ~1,725 (39%) |
| **Recommended for deletion** | **~1,200+ files** |
| Duplicate sets identified | 150+ |
| Cross-directory overlaps | 25+ topic areas |

### Key Finding
**Nearly 40% of the collection (1,725 files) are WEAK** -- template clones with no topic-specific logic, identical code with only titles changed, or stub files that don't function. The worst offenders are `netlogo-simulations-3` (537+ deletable files) and `jensen-linkage` (130+ deletable files).

---

## 2. MASS DELETION CANDIDATES (Priority Order)

These are bulk-deletable ranges where entire blocks use copy-pasted templates with zero topic-specific implementation.

### Tier 1: Delete Immediately (~850 files)

| Directory | Range/Count | Issue | Files to Delete |
|-----------|-------------|-------|----------------|
| **netlogo-simulations-3** | files 634-844 (211 files) | ALL use only 4 templates (AGENT_RESOURCE, GRID_FLOW, NETWORK_GRAPH, AGENT_WAYPOINT). 88 files share byte-identical JS. Zero topic-specific logic. 20+ modal title mismatches. | **Delete all 211** |
| **netlogo-simulations-3** | files 845-1056 (211 files) | ALL use only 3 templates (Resource Foraging, Belief Spreading, Rotating Shapes). 42% have wrong modal titles. | **Delete all 211** |
| **netlogo-simulations-3** | files 1001-1050 (50 files) | Identical force-directed graph visualization rebranded for 50 different topics. | **Delete all 50** |
| **netlogo-simulations-3** | astrophysics block 221-270 (50 files) | Identical N-body gravity template. All show bouncing colored balls regardless of topic. Modal text mismatches. | **Delete all 50** |
| **jensen-linkage** | ~130 of 160 files | All 160 files derived from same template. ~100 are pure color-swap duplicates. ~40 have false title claims ("Soft Body", "Audio Reactive") with no implementation. | **Delete ~130** |
| **netlogo-simulations-2** | files 087-100 (14 files) | Skeleton clones -- byte-identical bouncing-dot demos with generic "Parameter 1/2" sliders. | **Delete 14** |
| **netlogo-simulations-2** | ~68 template clones | Generic code rebranded with different topic titles. Game theory files share identical A/B payoff matrix. | **Delete ~68** |
| **cosmology** | 20 of 22 files | 3 exact clone groups (3+7+10 files). Stubs referencing external `demo-engine.js`. Many byte-identical. | **Delete 17-20** |
| **classical-ciphers** | 15 of 20 files | 2 clone groups -- stubs with no cipher-specific logic. | **Delete 15** |

**Tier 1 Total: ~850 files**

### Tier 2: Consolidate/Reduce (~350 files)

| Directory | Range/Count | Issue | Action |
|-----------|-------------|-------|--------|
| **netlogo-simulations-3** | remaining 15 stub files in agent-02 batch | Stubs mixed among good files | Delete 15 |
| **orbital-flythroughs** | files 20-50 (31 files) | 90%+ identical code clones. Same draw/animate/resize. Only mission name text differs. | Consolidate to ~8, delete 23 |
| **threejs** | constellation-001 to 020 (20 files) | 17 are color-swapped copies of demo 16. | Keep 3 best, delete 17 |
| **surprising-paradoxes** | ~83 excess copies | 47 topic groups have 2-6 copies. 4 byte-identical clone pairs. | Delete ~83 |
| **follower-visualizations** | files 03-11 (9 files) | Near-identical core logic, single visual tweak per file. | Consolidate to 3, delete 6 |
| **netlogo-simulations** | 7 duplicate pairs + 4 arcade games | Pairs like gaslab-piston vs gaslab-isothermal-piston. Arcade games don't belong. | Delete 11 |
| **schelling-segregation** | 20 files share identical Agent class | High structural repetition, but each variant is intentional. | Review, keep best 10-12 |
| **threejs-tsl-shaders** | ~8 files overlapping tsl-shaders | tsl-shaders has superior versions with OrbitControls, better materials. | Delete 8 |
| **netlogo-simulations-2** | 15 inferior duplicates | Good and template-clone versions exist of same topic. | Delete 15 |

**Tier 2 Total: ~350 files**

### Combined: ~1,200 files recommended for deletion

---

## 3. DUPLICATE SETS (Within Directories)

### surprising-paradoxes (729 files) -- HEAVIEST DUPLICATION

**Exact byte-identical clones (delete one from each):**
- `185/186-quantum-eraser.html`
- `262/264-peltzman-effect.html`
- `261/265-zollner-illusion.html`
- `213/217-tragedy-of-the-commons.html`

**5-6 copy topics (keep winner, delete rest):**

| Paradox | Copies | Keep | Delete |
|---------|--------|------|--------|
| Coastline Paradox | 6 (14, 109, 122, 187, 205, 252) | **109** (48KB, richest) | 122, 252, 205 (keep 14, 187 as alternatives) |
| Gabriel's Horn | 6 (85, 97, 618, 637, 694, 715) | **97** (30KB, 3D viz, star-field) | 618, 637, 694, 715 |
| Unexpected Hanging | 5 (29, 189, 197, 214, 284) | **29** (51KB, most interactive) | 189, 197, 284 |
| Simpson's Paradox | 5 (60, 623, 666, 693, 699) | **60** (38.6KB, DPR-aware, 3 scenarios) | 623, 666, 693, 699 |
| Potato Paradox | 5 (74, 625, 661, 689, 711) | **74** or **711** | 3 others |
| Birthday Paradox | 4 (627, 662, 685, 712) | **685** (Monte Carlo + crypto) | 627, 662, 712 |
| Benford's Law | 4 (567, 632, 672, 704) | **567** or **632** | 2 others |
| Dragon Curve | 4 (569, 601, 634, 676) | **569** | 601, 634, 676 |

**3-copy topics:** Abilene Paradox, Zeigarnik Effect, Monty Hall, St. Petersburg, Braess's Paradox, Ship of Theseus, Fermi Paradox, Newcomb's Problem, Sleeping Beauty, and ~20 more.

**Agent 07 identified 14 removals from 12 groups in batch 2.**
**Agent 08 identified 69 excess copies from 34 groups in batch 3.**

### threejs (137 files)
- **constellation-001 to 020**: 17 color-swapped copies of same template. Keep 001, 016, 020. Delete 17.
- **constellation-021 to 040**: Slightly better (different particle shapes) but still templated.
- **Core demos 01-10**: Minimal single-geometry spinners (~70 lines each). Keep as intro series.
- **Best demos**: 41-47 (Hopf Fibration, 4D Tesseract, Enneper Surface, Crosscap, Kaleidocycle, Schlafli Symbol, Dandelin Spheres)

### data-structures (23 files)
- Scapegoat Tree: `12-scapegoat-tree.html` vs `13-scapegoat-tree.html` -- **keep 13** (has Force Rebuild, balance overlay)
- Ukkonen Suffix Tree: `13-ukkonen` vs `14-ukkonen` -- **keep 13** (has pattern search)
- Aho-Corasick: `14-aho-corasick` vs `15-aho-corasick` -- **keep 14** (step-through mode)

### webgl-shaders (29 files)
- 3 Mandelbrot implementations: keep `22-mandelbrot-zoom.html` (WebGL2, interactive), delete `demos/33` and `demos/39`
- Julia Set pair: `demos/34` vs `demos/40` -- keep `40-julia-morph` (richer cycling)

### biological-simulations/reaction-diffusion
- `01-gray-scott`, `04-spots-patterns`, `06-mitosis`: 95%+ identical code, differ only in feed/kill values. **Merge into single Gray-Scott Explorer** with preset dropdown.

### stellar-evolution
- Numbering collision: `20-accretion-disk.html` vs `20-r-process.html` -- both good but `12-r-process.html` already covers r-process. Keep `20-accretion-disk`, remove `20-r-process`.

---

## 4. CROSS-DIRECTORY OVERLAPS

### Major Overlaps (same concept in multiple directories)

| Concept | Directories | Best Implementation | Notes |
|---------|------------|-------------------|-------|
| **Boids/Flocking** | boids-flocking-visualizations (19), emergent-behaviors (8), physics-simulations/boids (7), complex-showcases | **boids-flocking-visualizations** | emergent-behaviors boids are redundant |
| **SIR/SEIR Epidemics** | virus-epidemic-models (20), emergent-behaviors (3+), netlogo-simulations | **virus-epidemic-models** | emergent-behaviors epidemic files redundant |
| **Reaction-Diffusion** | biological-simulations/rd (5), physics-simulations/rd (5), simulations/rd, bz-reaction | **physics-simulations/reaction-diffusion** (has interactive painting) | Several identical Gray-Scott engines |
| **Ising Model** | physics-simulations/ising (6), netlogo-simulations, scientific-visualizations | **physics-simulations/ising** | Most complete with 6 variants |
| **Sugarscape** | sugarscape (19), sugarscape-inequality (20) | Both good, different focus | sugarscape-inequality = wealth focus |
| **Schelling Segregation** | schelling-segregation (20), netlogo-simulations, emergent-behaviors | **schelling-segregation** | Dedicated directory is best |
| **Game of Life** | game-of-life, netlogo-simulations, emergent-behaviors | **game-of-life** | Purpose-built implementations |
| **Three.js TSL Shaders** | tsl-shaders (46), threejs-tsl-shaders (40), threejs (137) | **tsl-shaders** (newer Three.js, OrbitControls, better materials) | 8+ cross-dir duplicates with threejs-tsl-shaders |
| **NetLogo Simulations** | netlogo-simulations (114), netlogo-simulations-2 (255), netlogo-simulations-3 (1056) | **netlogo-simulations** (original, highest quality) | -2 and -3 are largely template clones |
| **Predator-Prey** | wolf-sheep-predation (19), netlogo-simulations, emergent-behaviors, biological-simulations | **wolf-sheep-predation** | Dedicated 19-demo series |
| **Verlet Physics** | cloth-simulation, rope-chain-physics, spring-mass-systems | **cloth-simulation** (typed arrays, wind, tearing, presets) | Each has unique presets worth keeping |
| **Cosmology** | cosmology (22), cosmology-universe (20) | **cosmology-universe** (all unique, GOOD quality) | cosmology is 90% stubs/clones |
| **Jansen/Jensen Linkage** | jansen-linkage (20), jensen-linkage (160) | **jansen-linkage** (20 focused demos) | jensen-linkage is 160 template clones |
| **Orbital Mechanics** | gravity-orbits (50), orbital-flythroughs (51), tsl-shaders/65-96 (28) | **gravity-orbits** for orbits, **tsl-shaders** for 3D | orbital-flythroughs has 31 clones |
| **Cryptography** | classical-ciphers (20), modern-cryptography (20), cryptography-security (1) | **modern-cryptography** (all unique) | classical-ciphers mostly clones |
| **Music/Audio** | music-sequencers (50), web-audio-api (48) | Both good, minimal overlap | web-audio-api 41-48 "hybrid" series is strongest |
| **Particle Systems** | particle-systems (20), particle-effects (8) | **particle-effects** (higher polish) | Some concept overlap |
| **Autumn Leaves** | autumn-leaf-visualizations (19) | Unique gallery, no cross-dir overlap | All 19 are distinct |

### Cross-Dir TSL Shader Duplicates (Agent 39 detail)

| Concept | tsl-shaders/ | threejs-tsl-shaders/ | Winner |
|---------|-------------|---------------------|--------|
| Pulsating Sphere | 01 | 14 | tsl-shaders/01 |
| Fractal Noise | 12 | 31 | tsl-shaders/12 |
| Fresnel Rim | 07 | 06-fresnel-rim | tsl-shaders/07 |
| Wave Displacement | 02 (torus) | 11-wave-displacement | tsl-shaders/02 |
| Dissolve Effect | 10 | 33-dissolve | tsl-shaders/10 |
| Pixelation | 11 | 34-pixelation | tsl-shaders/11 |
| Lissajous 3D | 17 | (none) | unique to tsl-shaders |
| Superformula | 16 | (none) | unique to tsl-shaders |

---

## 5. TOP 50 BEST DEMOS

| # | Path | Why |
|---|------|-----|
| 1 | `graph-algorithms/01-*.html` & `02-*.html` | EXCELLENT step-through algorithm viz, DPR-aware, interactive |
| 2 | `morphogenesis/01-10` (all 10) | EXCELLENT biology sims with info panels, legends, phase animations |
| 3 | `ml-visualizations/01-nn-playground.html` | TF.js neural network playground, EXCELLENT |
| 4 | `ml-visualizations/16-tsne-explorer.html` | Interactive t-SNE, EXCELLENT |
| 5 | `ml-visualizations/12-gan-explorer.html` | GAN latent space explorer, EXCELLENT |
| 6 | `advanced-cs-ai/transformer-attention.html` | Real transformer attention visualization, EXCELLENT |
| 7 | `advanced-cs-ai/raft-consensus.html` | Distributed consensus algorithm, EXCELLENT |
| 8 | `scientific-visualizations/32-fdtd-maxwell.html` | Full 2D Maxwell FDTD solver, organic theme |
| 9 | `scientific-visualizations/19-fokker-planck.html` | PDE solver, 984 lines, EXCELLENT |
| 10 | `scientific-visualizations/28-lichtenberg-figures.html` | Dielectric breakdown fractal |
| 11 | `stellar-evolution/01-hr-diagram-navigator.html` | Interactive HR diagram with famous stars |
| 12 | `stellar-evolution/07-stellar-nucleosynthesis.html` | Element grid, binding energy, 8 fusion processes |
| 13 | `threejs/41-hopf-fibration.html` | 4D math visualization crown jewel |
| 14 | `threejs/42-4d-tesseract.html` | 4D geometry with full UI |
| 15 | `biological-simulations/23-morris-lecar.html` | Most sophisticated neuron model, 28.7KB |
| 16 | `biological-simulations/22-izhikevich-neuron.html` | Spiking neuron zoo with presets |
| 17 | `biological-simulations/neuron-hh.html` | Hodgkin-Huxley with full gating functions |
| 18 | `renaissance-econsim/01-05` (all 5) | Outstanding progressive economics series |
| 19 | `cloth-simulation/01-*.html` | Verlet cloth with wind, tearing, collision, typed arrays |
| 20 | `educational/01-10` (all 10) | Classic sims with learning panels, EXCELLENT |
| 21 | `digital-signal-processing/01-20` (most) | Exemplary retina support, consistent theme |
| 22 | `screensaver-patterns` (top 18) | 18 EXCELLENT, 0 duplicates, perfectly organized |
| 23 | `satisfying-animations` (top 18) | 18 EXCELLENT across 6 visual categories |
| 24 | `network-dynamics/01-10` | 6 EXCELLENT, consistent D3.js, no duplicates |
| 25 | `procedural-generation/01-12` | 7 EXCELLENT, cleanest gallery |
| 26 | `visualization-algorithms/33-ammann-beenker.html` | Dual-grid tiling, 8 color schemes, diffraction view |
| 27 | `visualization-algorithms/26-seam-carving.html` | Content-aware resize with animated seam removal |
| 28 | `webgl-shaders/22-mandelbrot-zoom.html` | WebGL2 deep zoom with palette control |
| 29 | `webgl-shaders/23-fluid-simulation.html` | Real Navier-Stokes double-FBO fluid sim |
| 30 | `elliptic-curve-murmurations/` (top 9) | Unique mathematical topic, 9 EXCELLENT |
| 31 | `walther-calculators/01-08` | Unique niche, large OOP sims (34-35KB) |
| 32 | `social-dynamics/01-10` | 3 EXCELLENT, zero duplicates, cohesive |
| 33 | `wolf-sheep-predation/01-19` | Comprehensive predator-prey series |
| 34 | `infographics/treemap.html` | EXCELLENT data visualization |
| 35 | `infographics/heatmap.html` | EXCELLENT data visualization |
| 36 | `games/storytelling-engine.html` | 55KB, full organic theme, EXCELLENT |
| 37 | `games/threes.html` | 49KB, polished game, EXCELLENT |
| 38 | `chess960/01-10` | Unique niche, GOOD-EXCELLENT |
| 39 | `webgpu/01-12` | Cutting-edge WebGPU demos, GOOD-EXCELLENT |
| 40 | `optimization/01-10` | EXCELLENT algorithm visualizations |
| 41 | `information-theory/01-10` | Most cohesive gallery, zero overlap |
| 42 | `cognitive-science/01-11` | GOOD-EXCELLENT, no duplicates |
| 43 | `surprising-paradoxes/109-coastline.html` | Best of 6 versions (48KB, richest) |
| 44 | `surprising-paradoxes/29-unexpected-hanging.html` | Best of 5 versions (51KB) |
| 45 | `surprising-paradoxes/60-simpsons-paradox.html` | Best of 5 (38.6KB, DPR-aware) |
| 46 | `netlogo-simulations-3/114-sleep-architecture.html` | 36KB, detailed simulation |
| 47 | `netlogo-simulations-3/150-crispr-immunity.html` | 33KB, real biology |
| 48 | `boids-flocking-visualizations/21-webgl-gpu.html` | WebGL, 5000 agents, spatial hash |
| 49 | `follower-visualizations/22-parameter-playground.html` | Full parameter UI + presets |
| 50 | `complex-showcases/ray-tracer/01.html` | WebGL2 shader ray tracer |

---

## 6. BOTTOM 50 WORST DEMOS (Remove or Rebuild)

| # | Path | Why |
|---|------|-----|
| 1-211 | `netlogo-simulations-3/` files 634-844 | All 211: 4 generic templates, zero topic logic |
| 212-422 | `netlogo-simulations-3/` files 845-1056 | All 211: 3 generic templates, wrong modals |
| 423 | `netlogo-simulations-3/1001-1050` | 50 identical network viz, different labels |
| 424 | `netlogo-simulations-3/221-270` | 50 bouncing balls, labeled as astrophysics |
| 425-554 | `jensen-linkage/` ~130 files | Color-swap clones, false feature claims |
| 555 | `cosmology/01-03` | Empty shell stubs |
| 556 | `cosmology/04-10` | Byte-identical stubs |
| 557 | `cosmology/11-20` | Byte-identical mega-files, 6/10 show generic placeholder |
| 558 | `classical-ciphers/` 15 files | Clone stubs |
| 559 | `netlogo-simulations-2/087-100` | Skeleton clones |
| 560 | `acoustics-signal/01.html` | 97 lines, splice-during-iteration bug |
| 561 | `linguistics-nlp/01.html` | WEAK singleton |
| 562 | `cryptography-security/01.html` | WEAK singleton |
| 563 | `generative-art-2/01.html` | 76-line orphan file |
| 564 | `advanced-engineering/01.html` | WEAK singleton |
| 565 | `complex-showcases/galaxy-simulator/02-03.html` | 20-27 lines, too minimal |
| 566 | `complex-showcases/ocean-waves/02.html` | Too minimal for "complex showcase" |

*Note: Items 1-554 represent the bulk template clones. Individual worst files listed from 555 onward.*

---

## 7. QUALITY BY DIRECTORY

| Directory | Files | Rating | Key Issue |
|-----------|-------|--------|-----------|
| abm-economics | 3 | GOOD-EXCELLENT | Intentional progression, no dupes |
| acoustics-signal | 1 | WEAK | 97 lines, has bugs |
| advanced-cs-ai | 13 | EXCELLENT | Zero duplication, real algorithms |
| advanced-engineering | 1 | WEAK | Singleton |
| algorithmic-art | 17 | GOOD-EXCELLENT | 1 near-dup pair |
| altruism-evolution | 16 | GOOD | Some cross-dir overlap with netlogo |
| ancient-economy-abm | 1 | GOOD | Singleton |
| automata | 1 | EXCELLENT | Singleton |
| autumn-leaf-visualizations | 19 | GOOD | No duplicates |
| biological-simulations | 29 | GOOD-EXCELLENT | 3 reaction-diffusion near-dupes |
| biology-medicine | 10 | BASIC-GOOD | 2 static calculators |
| boids-flocking-visualizations | 19 | GOOD | 1 overlap pair, cross-dir with emergent |
| challenges | 10 | EXCELLENT | Zero duplication |
| chaos-attractors | 8 | GOOD | 1 near-dup pair |
| chemistry-materials | 10 | GOOD | No dupes |
| chess960 | 10 | GOOD-EXCELLENT | No dupes |
| classical-ciphers | 20 | MIXED | 15 are clones, 5 unique EXCELLENT |
| cloth-simulation | 1 | EXCELLENT | Best Verlet implementation |
| cognitive-science | 11 | GOOD-EXCELLENT | No dupes |
| communications-systems | 20 | GOOD | No dupes |
| complex-showcases | 15 | MIXED | Several WEAK minimal files |
| consciousness-science | 14 | GOOD | No dupes |
| cosmology | 22 | WEAK | 20 exact clones/stubs |
| cosmology-universe | 20 | GOOD | No dupes, cross-dir overlap with cosmology |
| crazy-christmas | 14 | GOOD | Seasonal, no dupes |
| cryptography-security | 1 | WEAK | Singleton |
| css-art | 6 | GOOD | No dupes |
| d3js | 20 | GOOD-EXCELLENT | 1 overlap cluster |
| data-structures | 23 | GOOD-EXCELLENT | 3 duplicate pairs |
| digital-signal-processing | 20 | EXCELLENT | Exemplary quality, no dupes |
| distributed-systems | 3 | GOOD | No dupes |
| earth-space | 10 | GOOD-EXCELLENT | No dupes |
| economics-games | 1 | BASIC | Singleton |
| educational | 10 | EXCELLENT | No dupes |
| electromagnetic-fields | - | GOOD | Part of wave/signal cluster |
| elliptic-curve-murmurations | 39 | GOOD-EXCELLENT | 3 overlap clusters within |
| emergent-behaviors | 53 | GOOD | Boids/epidemic cross-dir dupes |
| engineering-robotics | 10 | GOOD | No dupes |
| ethnocentrism | 20 | GOOD | No dupes |
| fire-percolation | 20 | GOOD | No dupes |
| follower-visualizations | 27 | MIXED | 11 core files very similar |
| game-of-life | varies | GOOD | Cross-dir with netlogo, emergent |
| game-theory | 10 | GOOD | No dupes |
| games | 3 | EXCELLENT | Small but high quality |
| generative-art-2 | 1 | WEAK | Orphan file |
| geometric-patterns | 6 | GOOD | No dupes |
| geophysical | 10 | GOOD | No dupes |
| gravity-orbits | 50 | GOOD | 2 duplicate pairs, 2 borderline |
| graph-algorithms | 2 | EXCELLENT | Best in collection |
| infographics | 10 | GOOD-EXCELLENT | No dupes |
| information-theory | 10 | EXCELLENT | Most cohesive gallery |
| jansen-linkage | 20 | GOOD-EXCELLENT | The good linkage dir |
| jensen-linkage | 160 | WEAK | 130+ are template clones |
| linguistics-nlp | 1 | WEAK | Singleton |
| lottie-animations | 14 | BASIC-GOOD | 1 near-dup pair |
| math-geometry | 10 | WEAK-GOOD | Mixed quality |
| mathematical-art | 20 | GOOD | No dupes |
| ml-visualizations | 35 | EXCELLENT | 1 numbering collision |
| modern-cryptography | 20 | GOOD | No dupes |
| morphogenesis | 10 | EXCELLENT | Highest quality small gallery |
| music-sequencers | 50 | BASIC-GOOD | Template pattern, JS bug in file 01 |
| netlogo-simulations | 114 | GOOD | 7 dup pairs, 4 arcade games |
| netlogo-simulations-2 | 255 | MIXED | 82 template clones, 4 EXCELLENT |
| netlogo-simulations-3 | 1056 | MOSTLY WEAK | 537+ deletable template clones |
| network-dynamics | 10 | EXCELLENT | D3.js, no dupes |
| neural-network-playgrounds | 7 | GOOD | No dupes |
| optical-illusions | 5 | GOOD | No dupes |
| optimization | 10 | EXCELLENT | Cross-dir overlaps exist |
| orbital-flythroughs | 51 | MIXED | 31 are 90%+ identical clones |
| p5-generative-art | 15 | GOOD | 1 dup pair (03 vs 13) |
| particle-effects | 8 | GOOD-EXCELLENT | No dupes |
| particle-systems | 20 | BASIC-GOOD | Cross-dir overlap with particle-effects |
| petri-arena | 19 | GOOD | No dupes |
| philosophy-logic | 1 | GOOD | Singleton |
| procedural-generation | 12 | EXCELLENT | Cleanest gallery |
| quantum-computing | 1 | WEAK | Singleton |
| quantum-relativity | 10 | GOOD | Topical overlap with quantum-vis |
| quantum-visualizations | 10 | EXCELLENT | No dupes |
| religion-trends | 6 | GOOD | No dupes |
| renaissance-econsim | 5 | EXCELLENT | Outstanding series |
| satisfying-animations | 104 | GOOD | 18 EXCELLENT, 1 near-dup pair, 0 true dupes |
| schelling-segregation | 20 | BASIC-GOOD | All share identical Agent class |
| scientific-visualizations | 33 | EXCELLENT | 2 near-overlaps, mostly unique |
| screensaver-patterns | 100 | GOOD-EXCELLENT | 18 EXCELLENT, 0 true duplicates |
| social-dynamics | 10 | GOOD-EXCELLENT | Zero duplicates |
| social-science | 1 | GOOD | Singleton |
| solar-flare-visualizations | 39 | BASIC-GOOD | 3 overlap clusters |
| stellar-evolution | 21 | EXCELLENT | 1 numbering collision |
| sugarscape | 19 | GOOD | Cross-dir overlap with sugarscape-inequality |
| sugarscape-inequality | 20 | GOOD-EXCELLENT | Heavy code paste but intentional |
| svg-animations | 5 | GOOD | No dupes |
| threejs | 137 | MIXED | 7 EXCELLENT gems, 17+ constellation clones |
| threejs-tsl-shaders | 40 | BASIC | 8+ redundant with tsl-shaders |
| tsl-shaders | 46 | GOOD | Cross-dir winner over threejs-tsl |
| visualization-algorithms | 34 | GOOD | Some GPU demo overlap |
| virus-epidemic-models | 20 | GOOD | Cross-dir with emergent-behaviors |
| walther-calculators | 8 | GOOD-EXCELLENT | Unique niche |
| wealth-distribution | 19 | GOOD | Overlap with sugarscape |
| web-audio-api | 48 | GOOD | 2 dup pairs, hybrid series strongest |
| webassembly | varies | GOOD | No dupes |
| webgl-shaders | 29 | GOOD | 3 Mandelbrot dupes, 1 Julia pair |
| webgpu | 12 | GOOD-EXCELLENT | No dupes |
| wolf-sheep-predation | 19 | GOOD-EXCELLENT | Comprehensive series |

---

## 8. RECOMMENDATIONS (Priority Order)

### P0: Immediate Bulk Cleanup (saves ~850 files)
1. **Delete `netlogo-simulations-3` files 634-1056** (~422 files) -- All are generic templates with no topic logic
2. **Delete `netlogo-simulations-3` files 1001-1050** (~50 files) -- Identical network viz
3. **Delete `netlogo-simulations-3` astrophysics stubs 221-270** (~50 files)
4. **Delete `jensen-linkage` color-swap clones** (~130 files, keep ~30 with unique features)
5. **Delete `cosmology` stub/clone files 01-20** (keep `21-22` and move to `cosmology-universe`)
6. **Delete `classical-ciphers` clone stubs** (~15 files, keep 5 unique)
7. **Delete `netlogo-simulations-2` skeleton clones** (~82 files)

### P1: Targeted Duplicate Removal (saves ~200 files)
8. **De-duplicate `surprising-paradoxes`** -- Remove ~83 excess copies (keep best of each topic)
9. **Consolidate `orbital-flythroughs`** -- Reduce 31 clones to ~8 representative missions
10. **Clean `threejs` constellation series** -- Keep 3-5 best, delete ~17 copies
11. **Remove `threejs-tsl-shaders` files** redundant with `tsl-shaders` (~8 files)
12. **De-duplicate `follower-visualizations`** -- Consolidate 11 similar core files to ~3

### P2: Cross-Directory Cleanup
13. **Remove `emergent-behaviors` boids files** (redundant with `boids-flocking-visualizations`)
14. **Remove `emergent-behaviors` epidemic files** (redundant with `virus-epidemic-models`)
15. **Merge `biological-simulations/reaction-diffusion` 01/04/06** into single Gray-Scott Explorer
16. **Consider merging `cosmology` into `cosmology-universe`**
17. **Consider merging `jansen-linkage` and cleaned `jensen-linkage`** into single linkage gallery

### P3: Quality Improvements
18. **Fix modal text mismatches** in netlogo-simulations-3 (20+ files say wrong topic)
19. **Fix JS bug in `music-sequencers/01.html`** (broken AudioParam prototype extension)
20. **Fix splice-during-iteration bug in `acoustics-signal/01.html`**
21. **Add `window.reset` to `satisfying-animations`** (102 of 104 missing it)
22. **Add DPR scaling to WebGL demos in `satisfying-animations`** (22 blurry on retina)
23. **Delete orphan files**: `generative-art-2/01.html`, `linguistics-nlp/01.html`, `cryptography-security/01.html`

---

## Appendix: Agent Coverage Map

| Agent | Assignment | Files | Report Status |
|-------|-----------|-------|---------------|
| 01 | netlogo-simulations-3 pt1 | 211 | Done |
| 02 | netlogo-simulations-3 pt2 | 211 | Done |
| 03 | netlogo-simulations-3 pt3 | 211 | Done |
| 04 | netlogo-simulations-3 pt4 | 211 | Done |
| 05 | netlogo-simulations-3 pt5 | 212 | Done |
| 06 | surprising-paradoxes pt1 | 243 | Done |
| 07 | surprising-paradoxes pt2 | 243 | Done |
| 08 | surprising-paradoxes pt3 | 243 | Done |
| 09 | netlogo-simulations-2 pt1 | 127 | Done |
| 10 | netlogo-simulations-2 pt2 | 128 | Done |
| 11 | jensen-linkage | 160 | Done |
| 12 | threejs | 137 | Done |
| 13 | netlogo-simulations | 148 | Done |
| 14 | satisfying-animations | 104 | Done |
| 15 | screensaver-patterns | 100 | Done |
| 16 | emergent + procgen + network | 77 | Done |
| 17 | orbital + cs-ai + bio-med | 77 | Done |
| 18 | music + lottie + morpho | 77 | Done |
| 19 | gravity + p5 + templates | 77 | Done |
| 20 | web-audio + complex + infographics | 78 | Done |
| 21 | physics-sims + gol + eng | 77 | Done |
| 22 | tsl + algo-art + educational | 77 | Done |
| 23 | simulations + sugarscape + info | 77 | Done |
| 24 | threejs-tsl + boids + chem | 77 | Done |
| 25 | solar-flare + d3 + earth | 77 | Done |
| 26 | elliptic + dsp + social + walther | 77 | Done |
| 27 | ml + particles + cognitive | 77 | Done |
| 28 | sciviz + schelling + webgpu | 77 | Done |
| 29 | viz-algo + math-art + wasm | 76 | Done |
| 30 | biosims + sugarscape-ineq + xmas | 76 | Done |
| 31 | webgl + virus + consciousness | 76 | Done |
| 32 | follower + ulam + altruism | 76 | Done |
| 33 | data-structs + fire + pixi | 76 | Done |
| 34 | cosmology + ciphers + wolf | 76 | Done |
| 35 | stellar + comms + petri | 76 | Done |
| 36 | ethno + crypto + autumn | 76 | Done |
| 37 | cosmo-u + jansen + wealth | 76 | Done |
| 38 | X-compare: NetLogo | cross | Partial |
| 39 | X-compare: Three.js/TSL | cross | Done |
| 40 | X-compare: Physics | cross | Done |
| 41-49 | X-compare: Various | cross | Partial |
| 50 | Coordinator | all | This report |
