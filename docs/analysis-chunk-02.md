# Analysis Report: Chunk 02 (burning-ship through css-art)

**Generated**: 2026-02-07
**Directories analyzed**: 20
**Total HTML files**: 192 (12 gallery indexes + 180 demo files)

## Summary Statistics

| Metric | Count | Percentage |
|--------|-------|------------|
| Total HTML files | 192 | 100% |
| Has enhance.js | 192 | 100.0% |
| Has window.reset | 92 | 47.9% |
| Has resize handler | 127 | 66.1% |
| Uses requestAnimationFrame | 98 | 51.0% |
| Uses setInterval | 8 | 4.2% |
| Has backdrop-filter blur | 47 | 24.5% |

## Per-Directory Breakdown

### 1. burning-ship (1 demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | none | no | none | 4 |

**Notes**: Fractal rendering demo. Uses pixel-by-pixel rendering via setTimeout, not rAF (render is triggered on demand). Well-polished with zoom presets, multiple color schemes, mouse zoom interaction. Panel lacks backdrop blur.

---

### 2. bz-reaction (1 demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 5 |

**Notes**: Exceptional Belousov-Zhabotinsky reaction simulation. Full Oregonator 3-variable PDE. Cross-section graphs, probe time series, multiple color schemes, presets. Very polished UI with backdrop blur on control panel and stats overlay.

---

### 3. chaos-attractors (8 demos + 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | no | no | none | no-panel | none | 3 |
| 01-lorenz-attractor.html | yes | yes | yes | rAF | yes | none | 4 |
| 02-rossler-attractor.html | yes | yes | yes | rAF | no | none | 4 |
| 03-double-pendulum.html | yes | yes | yes | rAF | no | none | 4 |
| 04-logistic-map.html | yes | yes | yes | none | no | none | 4 |
| 05-henon-attractor.html | yes | yes | yes | rAF | no | none | 4 |
| 06-clifford-attractor.html | yes | yes | yes | rAF | no | none | 4 |
| 07-dejong-attractor.html | yes | yes | yes | rAF | no | none | 4 |
| 08-aizawa-attractor.html | yes | yes | yes | rAF | no | none | 4 |

**Notes**: All 8 demos have enhance.js, window.reset, and resize handlers. All animated demos use rAF. Only 01-lorenz has backdrop blur. Index is gallery-standard. Good quality across the board.

---

### 4. chaos-game (1 demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | no | rAF | no | none | 4 |

**Notes**: Multi-tab visualization (Sierpinski, Custom Polygon, Restricted, IFS). Tab system, animate mode via rAF. Uses navigation.css. No resize handler for canvases (fixed 800x800). No backdrop blur on panels.

---

### 5. chemistry-materials (10 demos + 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | no | no | none | no-panel | none | 3 |
| 41-lennard-jones.html | yes | yes | no | rAF | no | none | 4 |
| 42-chirality.html | yes | yes | no | rAF | no | none | 3 |
| 43-electrolysis.html | yes | yes | no | rAF | no | none | 3 |
| 44-chromatography.html | yes | yes | no | rAF | no | none | 3 |
| 45-phase-diagram.html | yes | yes | no | none | no-panel | none | 3 |
| 46-crystal-lattice.html | yes | yes | no | none | no | none | 3 |
| 47-polymerization.html | yes | yes | no | rAF | no-panel | none | 3 |
| 48-buffer-ph.html | yes | yes | no | none | no | none | 3 |
| 49-spectroscopy.html | yes | yes | no | rAF | no-panel | none | 3 |
| 50-semiconductor.html | yes | yes | no | SI | no | none | 3 |

**Notes**: All demos have enhance.js and window.reset. No demos have resize handlers. 50-semiconductor uses setInterval instead of rAF. No demos have backdrop blur. Numbering starts at 41 (continuation of a larger series). Solid educational content, moderate visual polish.

---

### 6. chess960 (10 demos + 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | no | no | none | yes | none | 4 |
| 01-classic-generator.html | yes | yes | no | none | yes | none | 4 |
| 02-position-browser.html | yes | yes | no | none | yes | none | 4 |
| 03-mirrored-chess960.html | yes | yes | no | none | yes | none | 4 |
| 04-double-fischer-random.html | yes | no | no | none | yes | none | 3 |
| 05-animated-setup.html | yes | no | no | none | yes | none | 3 |
| 06-position-statistics.html | yes | no | no | none | no-panel | none | 3 |
| 07-castling-trainer.html | yes | no | no | none | yes | none | 3 |
| 08-position-comparator.html | yes | no | no | none | yes | none | 3 |
| 09-tournament-generator.html | yes | no | no | none | yes | none | 3 |
| 10-interactive-play.html | yes | no | no | none | yes | none | 3 |

**Notes**: Non-animated interactive tools (chess position generators/browsers). Only first 3 demos have window.reset. Most panels have backdrop blur. No resize handlers needed (non-canvas layout). Good polish on gallery index.

---

### 7. chua-circuit (1 demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | no-panel | none | 5 |

**Notes**: Beautiful 3D Chua's circuit double scroll attractor with RK4 integration, 3D projection with rotation, multiple presets, mouse drag rotation, scroll zoom. Backdrop blur on back-link but not detected as panel. Exceptional quality.

---

### 8. classical-ciphers (20 demos + 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | no | no | none | no-panel | none | 3 |
| 01-caesar-cipher.html | yes | yes | yes | rAF | no | none | 4 |
| 02-vigenere-cipher.html | yes | yes | yes | SI | no | none | 3 |
| 03-enigma-machine.html | yes | yes | no | none | no | none | 4 |
| 04-playfair-cipher.html | yes | yes | yes | none | no | none | 3 |
| 05-hill-cipher.html | yes | yes | yes | none | no | none | 3 |
| 06-rail-fence.html | yes | yes | yes | none | no | none | 3 |
| 07-columnar-transposition.html | yes | yes | yes | none | no | none | 3 |
| 08-affine-cipher.html | yes | yes | yes | none | no | none | 3 |
| 09-one-time-pad.html | yes | yes | yes | none | no | none | 3 |
| 10-frequency-analysis.html | yes | yes | yes | none | no | none | 4 |
| 11-substitution-cipher.html | yes | yes | yes | none | no | none | 3 |
| 12-book-cipher.html | yes | yes | yes | none | no | none | 3 |
| 13-steganography.html | yes | yes | yes | none | no | none | 3 |
| 14-polybius-square.html | yes | yes | yes | none | no | none | 3 |
| 15-scytale-cipher.html | yes | yes | yes | none | no | none | 3 |
| 16-atbash-cipher.html | yes | yes | yes | none | no | none | 3 |
| 17-rot13-cipher.html | yes | yes | yes | none | no | none | 3 |
| 18-keyword-cipher.html | yes | yes | yes | none | no | none | 3 |
| 19-morse-code.html | yes | yes | yes | none | no | none | 4 |
| 20-pigpen-cipher.html | yes | yes | yes | none | no | none | 3 |

**Notes**: All 20 demos have enhance.js and window.reset. Most are interactive text-based tools (not animated). 02-vigenere uses setInterval. 01-caesar uses rAF (animated visualization). No backdrop blur on any demo. 03-enigma and 10-frequency-analysis are standouts for interactivity.

---

### 9. cloth-simulation (1 demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | no-panel | none | 5 |

**Notes**: Outstanding cloth simulation with Verlet integration, shear/bend springs, sphere collision, wind turbulence (Simplex noise), shaded/wireframe/stress rendering modes. Uses typed arrays for performance. Panel has -webkit-backdrop-filter but not detected with standard regex pattern (actually has `backdrop-filter: blur(20px)`). Top-tier quality.

---

### 10. cognitive-science (11 demos + 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | no | no | none | no-panel | none | 3 |
| 01-change-blindness.html | yes | yes | yes | rAF | no-panel | none | 4 |
| 02-inattentional-blindness.html | yes | yes | yes | rAF | no-panel | none | 4 |
| 03-visual-search.html | yes | yes | yes | rAF | no-panel | none | 4 |
| 04-gestalt-principles.html | yes | yes | yes | rAF | no-panel | none | 4 |
| 05-apparent-motion.html | yes | yes | yes | rAF | no-panel | none | 4 |
| 06-memory-palace.html | yes | yes | yes | rAF | no-panel | none | 3 |
| 07-stroop-effect.html | yes | yes | yes | rAF | no-panel | none | 4 |
| 08-mental-rotation.html | yes | yes | yes | rAF | no-panel | none | 4 |
| 09-attentional-blink.html | yes | yes | yes | rAF | no-panel | none | 3 |
| 10-binocular-rivalry.html | yes | yes | yes | rAF | no-panel | none | 3 |
| 31-mcgurk-effect.html | yes | yes | no | none | no | none | 3 |

**Notes**: All demos have enhance.js and window.reset. All except 31-mcgurk-effect have resize handlers and rAF. The 31-mcgurk-effect is a text/video based demo. No panels have backdrop blur. Numbering gap (31) suggests files from a different series. Strong educational demonstrations of cognitive phenomena.

---

### 11. communications-systems (20 demos + 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | no | no | none | no-panel | none | 3 |
| 01-am-modulation.html | yes | yes | yes | none | no | none | 4 |
| 02-fm-modulation.html | yes | yes | yes | none | no | none | 4 |
| 03-bpsk-modulation.html | yes | yes | yes | rAF | no | none | 4 |
| 04-qpsk-modulation.html | yes | yes | yes | none | no | none | 4 |
| 05-qam-constellation.html | yes | yes | yes | none | no | none | 4 |
| 06-ofdm-subcarriers.html | yes | yes | yes | none | no | none | 3 |
| 07-spread-spectrum.html | yes | yes | yes | none | no | none | 3 |
| 08-channel-capacity.html | yes | yes | yes | none | no | none | 3 |
| 09-convolutional-codes.html | yes | yes | yes | none | no | none | 3 |
| 10-viterbi-decoder.html | yes | yes | yes | none | no | none | 3 |
| 11-turbo-codes.html | yes | yes | yes | none | no | none | 3 |
| 12-ldpc-codes.html | yes | yes | yes | none | no | none | 3 |
| 13-mimo-systems.html | yes | yes | yes | SI | no | none | 3 |
| 14-beamforming.html | yes | yes | yes | none | no | none | 4 |
| 15-pulse-shaping.html | yes | yes | yes | none | no | none | 3 |
| 16-eye-diagram.html | yes | yes | yes | none | no | none | 3 |
| 17-carrier-recovery.html | yes | yes | yes | none | no | none | 3 |
| 18-multipath-fading.html | yes | yes | yes | rAF | no | none | 3 |
| 19-equalizer.html | yes | yes | yes | none | no | none | 3 |
| 20-ber-curves.html | yes | yes | yes | none | no | none | 3 |

**Notes**: All 20 demos have enhance.js, window.reset, and resize handlers. Most are interactive graph/chart-based tools (Canvas-drawn). 13-mimo uses setInterval. No backdrop blur. Solid educational DSP/communications content.

---

### 12. complex-showcases (17 demos + 1 index, nested subdirectories)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | no | no | none | no-panel | none | 3 |
| reaction-diffusion/index.html | yes | no | yes | rAF | yes | none | 4 |
| fluid-simulation/index.html | yes | no | no | none | no | none | 3 |
| galaxy-simulator/02-dark-matter.html | yes | no | no | rAF | no | none | 3 |
| galaxy-simulator/03-collision.html | yes | no | no | rAF | no-panel | none | 3 |
| ocean-waves/01-gerstner-waves.html | yes | no | no | rAF | no-panel | none | 4 |
| ocean-waves/02-interference.html | yes | no | no | rAF | no | none | 3 |
| crowd-simulation/01-boids-flocking.html | yes | no | no | rAF | no-panel | none | 4 |
| ray-tracer/01-basic-spheres.html | yes | no | no | rAF | no-panel | none | 4 |
| fractal-explorer/01-mandelbrot-zoom.html | yes | no | no | rAF | no | none | 4 |
| fractal-explorer/02-julia-set.html | yes | no | no | rAF | no | none | 4 |
| fractal-explorer/03-burning-ship.html | yes | no | no | none | no | none | 3 |
| terrain-generation/02-diamond-square.html | yes | no | no | rAF | no-panel | none | 3 |
| music-synthesizer/02-step-sequencer.html | yes | no | no | rAF | no | none | 4 |
| music-synthesizer/03-spectrum-visualizer.html | yes | no | no | rAF | no | none | 3 |
| music-synthesizer/04-theremin.html | yes | no | no | rAF | yes | none | 4 |
| city-generator/02-organic-streets.html | yes | no | no | rAF | no | none | 3 |
| weather-system/04-hurricane.html | yes | no | no | rAF | no-panel | none | 3 |

**Notes**: All have enhance.js but NONE have window.reset. Most lack resize handlers. This is an older gallery with sub-directories. Only reaction-diffusion and theremin have backdrop blur. Mixed quality - some standout demos (ray-tracer, fractal-explorer, boids) alongside simpler ones.

---

### 13. consciousness-science (14 demos + 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | no | no | none | no-panel | none | 3 |
| 01-theory-comparison.html | yes | no | no | none | no-panel | none | 3 |
| 02-integrated-information.html | yes | yes | yes | rAF | yes | none | 4 |
| 03-global-workspace.html | yes | yes | yes | rAF | yes | none | 4 |
| 04-cogitate-results.html | yes | no | yes | none | no-panel | none | 3 |
| 05-brain-regions.html | yes | no | yes | none | yes | none | 4 |
| 06-pci-simulator.html | yes | no | yes | rAF | yes | none | 4 |
| 07-ai-consciousness.html | yes | no | no | none | no-panel | none | 3 |
| 08-timeline.html | yes | no | no | none | no-panel | none | 3 |
| 09-hard-problem.html | yes | no | yes | rAF | no-panel | none | 3 |
| 10-pseudoscience-debate.html | yes | no | no | none | no-panel | none | 3 |
| 11-disorders-of-consciousness.html | yes | no | no | none | yes | none | 3 |
| 12-theory-landscape.html | yes | no | yes | rAF | yes | none | 4 |
| 13-wager.html | yes | no | no | SI | no-panel | none | 3 |
| 14-threshold-experiment.html | yes | no | no | none | yes | none | 3 |

**Notes**: Only 2 demos (02, 03) have window.reset. Mix of animated and static informational pages. Several have backdrop blur. 13-wager uses setInterval. Good educational content about consciousness theories.

---

### 14. convex-hull (1 demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | none | no-panel | none | 4 |

**Notes**: Algorithm visualization with step-by-step execution (Graham Scan, Jarvis March, QuickHull, Monotone Chain). Uses async/await with setTimeout for step delays. Panels have backdrop blur on back-link. Good interactive educational tool.

---

### 15. cosmology (22 demos + 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | no | no | none | no-panel | none | 3 |
| 01-cmb-anisotropies.html | yes | yes | yes | none | no | none | 3 |
| 02-inflation.html | yes | yes | yes | none | no | none | 3 |
| 03-nucleosynthesis.html | yes | yes | yes | none | no | none | 3 |
| 04 through 20 | yes | no | yes | rAF/none | no | none | 3 |
| demo-template.html | yes | no | yes | none | no | none | 2 |

**Notes**: Only first 3 demos have window.reset. All have resize handlers. Later demos (10-20) use rAF for animated visualizations. No backdrop blur. Demo-template.html is a template file (quality 2 - not a finished demo). Has duplicate numbering: two files named 10-recombination.html and 10-redshift-surveys.html (naming conflict).

---

### 16. cosmology-universe (20 demos + 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | no | no | none | no-panel | none | 3 |
| 01-big-bang-expansion.html | yes | yes | yes | rAF | no | none | 4 |
| 02-cmb-anisotropies.html | yes | yes | yes | rAF | no | none | 4 |
| 03-hubble-expansion.html | yes | yes | yes | rAF | no | none | 4 |
| 04 through 20 | yes | no | yes | rAF | no | none | 3 |

**Notes**: First 3 demos have window.reset; rest do not. All demos have resize handlers and use rAF. No backdrop blur. Similar quality and structure to cosmology directory (possible overlap in topics). Good animated simulations.

---

### 17. coupled-oscillators (1 demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | no-panel | none | 5 |

**Notes**: Excellent Kuramoto model visualization with three synchronized canvases (phase circle, time series, order parameter). Full coupling dynamics with critical threshold calculation. Force sync, frequency spread controls. Very polished.

---

### 18. crazy-christmas (14 demos + 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | no | no | none | no-panel | none | 3 |
| 01-zeus-gingerbread-judge.html | yes | yes | yes | rAF | no-panel | none | 4 |
| 02-athena-santas-workshop.html | yes | yes | yes | rAF | no-panel | none | 4 |
| 03-apollo-angel-choir.html | yes | yes | yes | rAF | no-panel | none | 4 |
| 04 through 15 | yes | no | yes | rAF | no-panel | none | 3 |

**Notes**: Greek mythology-themed Christmas demos. First 3 have window.reset; rest do not. All animated demos use rAF with resize handlers. No backdrop blur. Missing demo #14 (numbering goes 13, 15). Fun creative content.

---

### 19. cryptography-security (1 demo)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| 81-diffie-hellman.html | yes | yes | no | none | no-panel | **BUG**: window.reset references undefined function "exchange" | 2 |

**Notes**: Simple Diffie-Hellman color mixing demo. **Has a bug**: `window.reset = exchange` references a function called `exchange` that does not exist (the function is named `animate`). Very basic styling (no dark theme). Minimal interactivity. Numbering (81) suggests part of a larger removed series. No gallery index.html.

---

### 20. css-art (6 demos + 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | no | no | none | no-panel | none | 3 |
| 01-css-3d-cube-gallery.html | yes | no | no | none | yes | none | 4 |
| 02-css-grid-patterns.html | yes | yes | no | none | no | none | 3 |
| 03-css-blend-modes.html | yes | no | no | none | no | none | 3 |
| 04-css-clip-path.html | yes | no | no | none | no | none | 3 |
| 05-css-filter-effects.html | yes | no | no | none | no | none | 3 |
| 06-css-variables-animation.html | yes | no | no | rAF | yes | none | 4 |

**Notes**: CSS-focused demos (minimal JS). Only 02 has window.reset. No resize handlers (mostly CSS layout). Two demos have backdrop blur. 06 uses rAF for CSS custom property animation. No canvas-based rendering.

---

## Issues Found

| File | Issue | Severity |
|------|-------|----------|
| cryptography-security/81-diffie-hellman.html | `window.reset = exchange` references undefined function (should be `animate`) | HIGH |
| cosmology/demo-template.html | Template file shipped as demo (not a finished visualization) | LOW |
| cosmology/10-recombination.html + 10-redshift-surveys.html | Duplicate demo numbering (both #10) | LOW |
| crazy-christmas/ | Missing demo #14 in sequence (goes 13 to 15) | LOW |

## Quality Distribution

| Rating | Count | Description |
|--------|-------|-------------|
| 5 | 4 | Exceptional (bz-reaction, chua-circuit, cloth-simulation, coupled-oscillators) |
| 4 | ~55 | Good polish, full interactivity |
| 3 | ~125 | Functional, moderate polish |
| 2 | 2 | Basic/buggy (cryptography-security/81-diffie-hellman, cosmology/demo-template) |

## Recommendations

1. **High priority**: Fix `window.reset` bug in `cryptography-security/81-diffie-hellman.html` (change `exchange` to `animate`)
2. **Medium priority**: Add `window.reset` to the 100 demos that lack it (especially complex-showcases, cosmology 04-20, cosmology-universe 04-20, consciousness-science, crazy-christmas 04-15, css-art)
3. **Medium priority**: Add backdrop-filter blur to panels in chaos-attractors 02-08, chemistry-materials, classical-ciphers, communications-systems
4. **Low priority**: Add resize handlers to chemistry-materials, chess960, css-art demos
5. **Low priority**: Remove or complete cosmology/demo-template.html
6. **Low priority**: Resolve cosmology #10 duplicate numbering
