# Analysis Chunk 01: abm-economics through bouncing-balls

**Analyzer:** analyzer-01
**Date:** 2026-02-07
**Directories:** 20 (abm-economics through bouncing-balls)
**Total HTML files found:** 131 (including 17 index/gallery pages, 114 demo files)

---

## Summary Statistics

| Metric | Count | Percentage |
|--------|-------|------------|
| Total demo files (non-gallery) | 114 | - |
| Has enhance.js | 131/131 | 100% |
| Has window.reset | 82/114 | 72% |
| Has resize handler | 64/114 | 56% |
| Uses requestAnimationFrame | 94/114 | 82% |
| Uses setInterval (only) | 12/114 | 11% |
| Has backdrop-filter: blur | 62/114 | 54% |
| Uses gallery-standard.css | 20/131 | 15% |

### Enhancement Status Overview

- **Fully enhanced** (enhance.js + window.reset + blur on panels): ~55 files
- **Partially enhanced** (enhance.js only, missing reset or blur): ~59 files
- **Gallery pages** (no demo logic, just navigation): 17 files

---

## Per-Directory Analysis

### 1. abm-economics (4 files: 1 gallery + 3 demos)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | - | - | - | - | 236 | 4 (gallery) |
| 01-simple-macro-abm.html | yes | yes | no | rAF | yes | 724 | 4 |
| 02-intermediate-policy-lab.html | yes | yes | no | rAF | yes | 1057 | 5 |
| 03-full-netlogo-simulation.html | yes | yes | no | rAF | yes | 1456 | 5 |

**Notes:** Excellent gallery. All three demos are fully enhanced with comprehensive economic simulations (100-5000 agents). Progressive complexity from simple to full NetLogo-style. All have spatial visualizations, multiple charts, and CSV export. No resize handlers but demos use fixed layouts. No issues found.

### 2. acoustics-signal (1 file)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| 11-doppler-effect.html | yes | yes | yes | rAF | yes | 97 | 3 |

**Notes:** Simple but effective Doppler effect visualization. Compact code. Fully enhanced. The numbering starts at 11 which suggests missing files 01-10 (may be in a different directory or planned). No issues.

### 3. advanced-cs-ai (14 files: 1 gallery + 13 demos)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | - | - | - | - | - | 4 (gallery) |
| 01-transformer-attention.html | yes | yes | yes | none | no | 506 | 4 |
| 02-raft-consensus.html | yes | yes | yes | rAF | yes | 596 | 4 |
| 03-garbage-collection.html | yes | yes | yes | rAF | no | 325 | 3 |
| 04-btree-splitting.html | yes | no | yes | none | no | 408 | 3 |
| 05-git-merkle.html | yes | no | yes | none | no | 484 | 3 |
| 06-bloom-filter.html | yes | no | no | none | no | 255 | 3 |
| 07-kalman-filter.html | yes | no | no | rAF | no | 274 | 3 |
| 08-regex-engine.html | yes | no | no | none | no | 486 | 3 |
| 09-cpu-pipeline.html | yes | no | no | SI | no | 441 | 3 |
| 10-rsa-crypto.html | yes | no | no | none | no | 249 | 3 |
| 11-baum-welch-hmm.html | yes | no | yes | SI | yes | 979 | 4 |
| 12-elbo-variational.html | yes | no | yes | SI | yes | 815 | 4 |
| 13-bayesian-optimization.html | yes | no | yes | SI | no | 812 | 4 |

**Notes:** Mixed enhancement level. Demos 01-03 are well-enhanced (window.reset). Demos 04-13 lack window.reset. Demos 09, 11-13 use setInterval instead of rAF. Several demos (04-10) lack panel blur. Files 01-10 use gallery-standard.css. Later demos (11-13) are significantly more complex and polished. No broken references found.

**Issues:**
- Demos 04-10 missing window.reset
- Demos 09, 11-13 use setInterval (should consider rAF)
- Many demos lack backdrop-filter blur on panels

### 4. advanced-engineering (1 file)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| 61-fem-stress.html | yes | yes | yes | none | yes | 143 | 3 |

**Notes:** Simple FEM stress analysis truss visualization. Numbering starts at 61 suggesting missing files. Static visualization (click to add load). Fully enhanced. Compact.

### 5. algorithmic-art (18 files: 1 single-page gallery + 17 demos)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html (gallery+demos) | yes | no | no | rAF | no | 1522 | 4 |
| 21-kintsugi.html | yes | yes | no | rAF | yes | 427 | 4 |
| 21-sturmian-words.html | yes | yes | yes | none | no | 771 | 4 |
| 23-anamorphosis.html | yes | yes | no | rAF | no | 614 | 4 |
| 24-datamosh.html | yes | no | no | rAF | no | 714 | 3 |
| 25-blue-noise.html | yes | no | no | rAF | no | 770 | 4 |
| 26-kuwahara.html | yes | no | no | none | no | 613 | 3 |
| 27-xdog.html | yes | no | no | none | no | 639 | 3 |
| 28-frei-chen.html | yes | no | no | none | no | 528 | 3 |
| 29-bayer-dithering.html | yes | no | no | rAF | no | 520 | 3 |
| 30-stucki-dithering.html | yes | no | no | none | no | 494 | 3 |
| 31-perona-malik.html | yes | no | no | rAF | no | 515 | 3 |
| 32-clahe.html | yes | no | no | none | no | 443 | 3 |
| 33-reinhard-tonemapping.html | yes | no | no | SI | no | 543 | 3 |
| 34-msdf-fonts.html | yes | no | no | none | no | 676 | 3 |
| 35-nurbs-curve.html | yes | no | yes | none | no | 795 | 4 |
| 36-suminagashi.html | yes | no | no | rAF | no | 628 | 4 |
| 37-quasicrystals.html | yes | no | no | rAF | no | 695 | 4 |

**Notes:** index.html is a large single-page multi-demo gallery (20 embedded mini-demos in one file, each with its own canvas and animation loop). Numbered demos 21-37 are individual files. Note: two files share number 21 (kintsugi and sturmian-words - duplicate numbering). Most demos 24-37 lack window.reset and panel blur. Demo 33 uses setInterval. Many image-processing demos (26-32) load sample images from CDN (external refs detected). The index.html has no window.reset.

**Issues:**
- Duplicate numbering: two files named 21-*.html
- Demos 24-37 missing window.reset
- Demo 33 uses setInterval
- No panel blur on most demos
- index.html (single-page gallery) lacks window.reset

### 6. altruism-evolution (17 files: 1 gallery + 16 demos)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | - | - | - | - | - | 4 (gallery) |
| 01-classic-grid.html | yes | yes | no | rAF | yes | 591 | 4 |
| 02-population-dynamics.html | yes | yes | no | rAF | yes | 490 | 4 |
| 03-hexagonal-grid.html | yes | yes | no | rAF | yes | 410 | 4 |
| 05-fitness-landscape.html | yes | yes | no | rAF | yes | 587 | 4 |
| 06-radial-grid.html | yes | yes | no | SI | yes | 337 | 3 |
| 09-agent-genealogy.html | yes | yes | no | SI | yes | 426 | 3 |
| 10-environmental-gradient.html | yes | yes | no | rAF | yes | 572 | 4 |
| 11-time-lapse-evolution.html | yes | yes | no | SI | yes | 347 | 3 |
| 12-cluster-analysis.html | yes | yes | no | SI | yes | 438 | 3 |
| 13-interactive-sandbox.html | yes | yes | no | SI | yes | 464 | 4 |
| 14-phase-diagram.html | yes | yes | no | none | yes | 345 | 3 |
| 15-wave-propagation.html | yes | yes | no | rAF | yes | 520 | 4 |
| 16-multi-scenario-comparison.html | yes | yes | no | SI | yes | 330 | 3 |
| 18-genetic-flow.html | yes | yes | no | rAF | yes | 512 | 4 |
| 19-sound-visualization.html | yes | yes | no | SI | yes | 405 | 3 |
| 20-evolutionary-story.html | yes | yes | no | SI | yes | 413 | 3 |

**Notes:** Excellent enhancement coverage - all 16 demos have window.reset AND panel blur. Good variety of evolutionary game theory visualizations. Missing demos 04, 07, 08, 17 (gaps in numbering). 8 out of 16 demos use setInterval instead of rAF. None have resize handlers.

**Issues:**
- 8 demos use setInterval instead of rAF (06, 09, 11, 12, 13, 16, 19, 20)
- No resize handlers on any demo
- Gaps in numbering (04, 07, 08, 17 missing)

### 7. ancient-economy-abm (2 files: 1 gallery + 1 demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | - | - | - | - | 228 | 4 (gallery) |
| m0-prototype.html | yes | yes | yes | rAF | no | 829 | 4 |

**Notes:** Single demo with 3-panel layout (controls, world view, statistics). Well-implemented agent-based ancient economy model with node-based market system. Fully enhanced. No panel blur on controls (white opaque panels instead). No issues.

### 8. ant-colony-optimization (1 file: single-page demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | yes | yes | rAF | yes | 693 | 5 |

**Notes:** Excellent single-page demo. TSP solver with pheromone visualization, multiple presets, parameter sliders, FPS counter. Fully enhanced with all features. Very polished.

### 9. apollonian-gasket (1 file: single-page demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | yes | yes | rAF | yes | 660 | 5 |

**Notes:** Beautiful fractal circle packing using Descartes' Circle Theorem. Multiple presets, color modes, animation toggle. Fully enhanced. Excellent mathematical visualization.

### 10. art-experimental (0 files)

**Notes:** Directory exists but contains no HTML files. Empty gallery.

### 11. automata (2 files: 1 gallery + 1 demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | - | - | - | - | 229 | 4 (gallery) |
| 01-hopcroft-minimization.html | yes | yes | yes | none | yes | 792 | 4 |

**Notes:** DFA minimization visualizer. Step-through algorithm with state diagram rendering. Fully enhanced. Static (event-driven, no animation loop). Well-structured code.

### 12. autumn-leaf-visualizations (20 files: 1 gallery + 19 demos)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | - | - | - | - | - | 4 (gallery) |
| 01-chlorophyll-degradation.html | yes | yes | yes | rAF | no | 245 | 3 |
| 02-falling-leaves-physics.html | yes | yes | yes | rAF | no | 291 | 4 |
| 03-seasonal-tree-transition.html | yes | yes | yes | rAF | no | 431 | 4 |
| 04-anthocyanin-production.html | yes | no | yes | rAF | no | 388 | 3 |
| 05-wind-and-rain-effects.html | yes | no | yes | rAF | no | 464 | 4 |
| 06-interactive-leaf-chemistry.html | yes | no | yes | rAF | no | 445 | 4 |
| 07-temperature-gradient-tree.html | yes | no | yes | rAF | no | 398 | 3 |
| 08-leaf-particle-storm.html | yes | no | yes | rAF | no | 370 | 4 |
| 09-day-night-cycle.html | yes | no | yes | rAF | no | 454 | 4 |
| 10-fractal-autumn-tree.html | yes | no | yes | rAF | no | 423 | 4 |
| 12-webgl-shader-leaves.html | yes | no | yes | rAF | no | 428 | 4 |
| 13-multiple-tree-varieties.html | yes | no | yes | rAF | no | 392 | 3 |
| 14-chemical-flow-visualization.html | yes | no | yes | rAF | no | 356 | 3 |
| 15-ground-accumulation.html | yes | no | yes | rAF | no | 396 | 3 |
| 16-timelapse-season.html | yes | no | yes | rAF | no | 400 | 3 |
| 17-microscopic-cell-view.html | yes | no | yes | rAF | no | 380 | 3 |
| 18-forest-canopy-view.html | yes | no | yes | rAF | no | 328 | 3 |
| 19-branch-progression.html | yes | no | yes | rAF | no | 318 | 3 |
| 20-complete-ecosystem.html | yes | no | yes | rAF | no | 431 | 4 |

**Notes:** Consistent gallery - all use rAF, all have resize handlers. Only demos 01-03 have window.reset. No demo has panel blur (most use canvas-only layouts without info panels). Demo 11 is missing (gap in numbering). Demo 12 uses WebGL shaders. Good thematic consistency.

**Issues:**
- Demos 04-20 missing window.reset (16 files)
- No panel blur on any demo (but most are fullscreen canvas without panels)
- Demo 11 missing from sequence

### 13. barnsley-fern (1 file: single-page demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | yes | yes | rAF | yes | 462 | 5 |

**Notes:** Beautiful IFS fractal with multiple presets (classic, tree, modified, mutant, custom). Color modes, animation speed control. Fully enhanced. Excellent.

### 14. bifurcation-diagrams (1 file: single-page demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | yes | yes | none | no | 629 | 4 |

**Notes:** Interactive logistic map bifurcation diagram with zoom, crosshair, and multiple map types. Static rendering (redraws on parameter change). No panel blur on sidebar (uses opaque dark background). Fully enhanced otherwise.

**Issues:**
- No backdrop-filter blur on control panel

### 15. binary-tree-traversal (1 file: single-page demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | yes | yes | none | yes | 791 | 4 |

**Notes:** Step-by-step animated tree traversal (pre-order, in-order, post-order, BFS). Well-structured code. Event-driven animation (not continuous loop). Fully enhanced.

### 16. biological-simulations (31 files: 1 gallery + 30 demos across 4 subdirs)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | - | - | - | - | 312 | 4 (gallery) |
| bz-target-patterns.html | yes | no | yes | rAF | no | 453 | 3 |
| bz-reaction-spirals.html | yes | no | yes | rAF | no | 471 | 3 |
| bz-chaos.html | yes | no | yes | rAF | no | 481 | 3 |
| neuron-hh.html | yes | no | yes | rAF | no | 521 | 4 |
| neuron-fhn.html | yes | no | yes | rAF | no | 544 | 4 |
| plough-and-plague.html | yes | no | no | rAF | yes | 1216 | 4 |
| 22-izhikevich-neuron.html | yes | yes | yes | rAF | no | 522 | 4 |
| 23-morris-lecar.html | yes | yes | no | rAF | no | 776 | 4 |
| 24-selkov-glycolysis.html | yes | yes | no | rAF | no | 514 | 4 |
| **evolution/** | | | | | | | |
| 01-genetic-creatures.html | yes | no | no | rAF | yes | 282 | 3 |
| 02-natural-selection.html | yes | no | no | rAF | yes | 189 | 3 |
| 03-survival-fittest.html | yes | no | no | rAF | yes | 206 | 3 |
| 04-gene-pool.html | yes | yes | no | rAF | yes | 198 | 3 |
| 05-ecosystem-evolution.html | yes | yes | no | rAF | yes | 266 | 4 |
| 06-neural-evolution.html | yes | yes | no | rAF | yes | 253 | 4 |
| 07-morphology-evolution.html | yes | yes | no | rAF | yes | 246 | 3 |
| 08-cooperation-competition.html | yes | yes | no | rAF | yes | 271 | 3 |
| 09-selection-pressures.html | yes | yes | no | rAF | yes | 339 | 4 |
| 10-competitive-exclusion.html | yes | yes | no | rAF | yes | 362 | 4 |
| 11-hardy-weinberg.html | yes | no | no | rAF | yes | 506 | 4 |
| 12-drift-vs-selection.html | yes | no | no | rAF | yes | 398 | 4 |
| 13-red-queen.html | yes | no | no | rAF | yes | 518 | 4 |
| **l-systems/** | | | | | | | |
| 01-basic-tree.html | yes | no | yes | rAF | yes | 254 | 3 |
| 02-fractal-plant.html | yes | no | yes | rAF | yes | 260 | 3 |
| 03-koch-snowflake.html | yes | no | yes | rAF | yes | 248 | 3 |
| **reaction-diffusion/** | | | | | | | |
| 01-gray-scott.html | yes | no | no | rAF | yes | 291 | 4 |
| 04-spots-patterns.html | yes | yes | no | rAF | yes | 291 | 3 |
| 06-mitosis.html | yes | yes | no | rAF | yes | 289 | 3 |
| 07-brusselator.html | yes | yes | yes | rAF | no | 408 | 4 |
| 08-schnakenberg.html | yes | yes | yes | rAF | no | 426 | 4 |

**Notes:** Large, well-organized gallery with 4 subdirectories. All demos use rAF (excellent). Good mix of neuroscience (HH, FHN, Izhikevich, Morris-Lecar), chemistry (BZ reactions, Selkov), evolution (13 demos), L-systems (3), and reaction-diffusion (5). Enhancement coverage is mixed: evolution/04-10 and reaction-diffusion/04-08 have window.reset; earlier demos and bz-* files don't. Panel blur is present on most evolution and l-system demos but absent from neuron and BZ demos.

**Issues:**
- bz-*, neuron-*, evolution/01-03, evolution/11-13, l-systems/*, reaction-diffusion/01 missing window.reset
- neuron and BZ demos lack panel blur
- Files 07-brusselator.html and 08-schnakenberg.html lack blur but have resize

### 17. biology-medicine (11 files: 1 gallery + 10 demos)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | - | - | - | - | - | 4 (gallery) |
| 31-crispr.html | yes | yes | no | none | no | 285 | 3 |
| 32-action-potential.html | yes | yes | no | rAF | no | 265 | 3 |
| 33-antibody.html | yes | yes | no | rAF | no | 212 | 3 |
| 34-circadian-clock.html | yes | no | no | rAF | no | 194 | 3 |
| 35-gene-transfer.html | yes | no | no | rAF | no | 172 | 3 |
| 36-blood-types.html | yes | no | no | none | no | 229 | 3 |
| 37-muscle.html | yes | no | no | rAF | no | 197 | 3 |
| 38-synapse.html | yes | no | no | rAF | no | 212 | 3 |
| 39-nephron.html | yes | no | no | rAF | no | 234 | 3 |
| 40-mendel.html | yes | no | no | none | no | 208 | 3 |

**Notes:** All demos use gallery-standard.css (consistent styling). Numbering starts at 31 (earlier demos likely in another directory). Only demos 31-33 have window.reset. No demos have panel blur or resize handlers. Demos are relatively short (172-285 lines). 3 demos (31, 36, 40) are static/event-driven; rest use rAF.

**Issues:**
- Demos 34-40 missing window.reset
- No panel blur on any demo
- No resize handlers on any demo
- Relatively small/simple demos

### 18. black-hole-lensing (1 file: single-page demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | yes | yes | rAF | yes | 642 | 5 |

**Notes:** Impressive gravitational lensing visualization with ray tracing, star field, photon sphere and Einstein ring visualization. Fully enhanced. Excellent quality.

### 19. boids-flocking-visualizations (20 files: 1 gallery + 19 demos)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | - | - | - | - | - | 4 (gallery) |
| 01-classic-boids.html | yes | yes | yes | rAF | yes | 356 | 4 |
| 02-predator-avoidance.html | yes | yes | yes | rAF | yes | 433 | 4 |
| 03-obstacle-avoidance.html | yes | yes | yes | rAF | yes | 340 | 4 |
| 04-wind-fields.html | yes | yes | no | rAF | yes | 213 | 3 |
| 05-interactive-parameters.html | yes | yes | no | rAF | yes | 225 | 3 |
| 07-path-trails.html | yes | yes | no | rAF | yes | 172 | 3 |
| 08-multi-species.html | yes | yes | no | rAF | yes | 173 | 3 |
| 09-leader-following.html | yes | yes | no | rAF | yes | 234 | 3 |
| 10-goal-seeking.html | yes | yes | no | rAF | yes | 218 | 3 |
| 11-perching-behavior.html | yes | yes | no | rAF | no | 263 | 3 |
| 12-velocity-vectors.html | yes | yes | no | rAF | no | 212 | 3 |
| 13-neighborhood-debug.html | yes | yes | no | rAF | no | 229 | 3 |
| 14-alignment-showcase.html | yes | yes | no | rAF | no | 163 | 3 |
| 15-cohesion-showcase.html | yes | yes | no | rAF | no | 160 | 3 |
| 16-separation-showcase.html | yes | yes | no | rAF | no | 164 | 3 |
| 17-toroidal-wrapping.html | yes | yes | no | rAF | no | 233 | 3 |
| 18-realistic-birds.html | yes | yes | no | rAF | no | 232 | 3 |
| 19-performance-stress.html | yes | yes | no | rAF | no | 271 | 3 |
| 20-parameter-playground.html | yes | yes | yes | rAF | no | 507 | 4 |

**Notes:** Excellent enhancement coverage - ALL 19 demos have window.reset (100%). All use rAF. Demo 06 is missing (gap). Demos 01-10 have panel blur; demos 11-20 don't. Early demos (01-03) have resize handlers. Later demos (04-20) are more compact. Demo 20 (parameter playground) is the most complex at 507 lines.

**Issues:**
- Demo 06 missing from sequence
- Demos 11-20 lack panel blur
- Demos 04-19 lack resize handlers

### 20. bouncing-balls (1 file: single-page demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | lines | quality |
|------|-----------|-------------|--------|-----------|------------|-------|---------|
| index.html | yes | yes | yes | rAF | yes | 537 | 4 |

**Notes:** Elastic collision physics simulation with energy conservation visualization. Side panel with controls. Fully enhanced.

---

## Quality Rating Distribution

| Rating | Count | Description |
|--------|-------|-------------|
| 5 | 5 | Exceptional (ant-colony, apollonian, barnsley, black-hole, abm-02/03) |
| 4 | 46 | Good - polished, interactive, well-structured |
| 3 | 63 | Adequate - functional but could use more polish |
| 2 | 0 | - |
| 1 | 0 | - |

## Key Issues Summary

### Missing window.reset (32 files)
- advanced-cs-ai: 04-13 (10 files)
- algorithmic-art: 24-37 + index.html (15 files)
- autumn-leaf-visualizations: 04-20 (16 files)
- biological-simulations: bz-*, neuron-*, evolution/01-03, 11-13, l-systems/*, rd/01 (~15 files)
- biology-medicine: 34-40 (7 files)

### Using setInterval instead of rAF (12 files)
- advanced-cs-ai: 09, 11, 12, 13
- algorithmic-art: 33
- altruism-evolution: 06, 09, 11, 12, 13, 16, 19, 20

### Missing backdrop-filter blur (52+ files)
Most common in: algorithmic-art, autumn-leaf-visualizations, biology-medicine, boids (11-20), biological-simulations (neuron/BZ subset)

### Missing resize handlers (50+ files)
Most common in: abm-economics, altruism-evolution, boids (04-19), biology-medicine, biological-simulations (evolution subset)

### Empty directory
- art-experimental: no HTML files found

### Numbering gaps
- acoustics-signal: starts at 11
- advanced-engineering: starts at 61
- algorithmic-art: duplicate 21-* files, starts at 21
- altruism-evolution: missing 04, 07, 08, 17
- autumn-leaf-visualizations: missing 11
- biology-medicine: starts at 31
- boids-flocking-visualizations: missing 06
