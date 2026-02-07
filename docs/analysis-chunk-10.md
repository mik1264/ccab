# Analysis Chunk 10: walther-calculators through xuanji-tu

**Analyzed by:** analyzer-10
**Date:** 2026-02-07
**Directories:** 13
**Total HTML files:** 114 (including index pages)

---

## Summary Table

| Directory | Files | enhance.js | window.reset | resize | animation | panel-blur | quality |
|-----------|-------|-----------|-------------|--------|-----------|------------|---------|
| walther-calculators | 9 (1 index + 8 demos) | 9/9 | 3/8 demos | 0/8 | rAF: 1, none: 7 | yes | 4.5 |
| wardley-maps | 1 (index=demo) | 1/1 | 1/1 | 1/1 | rAF | yes | 4 |
| wave-equation | 1 (index=demo) | 1/1 | 1/1 | 1/1 | rAF | yes | 4 |
| wave-function-collapse | 1 (index=demo) | 1/1 | 1/1 | 0/1 | rAF | yes | 4 |
| wealth-distribution | 20 (1 index + 19 demos) | 20/20 | 3/19 demos | 0/19 | rAF: 19 | 3/19 demos | 3.5 |
| web-audio-api | 49 (1 index + 48 demos) | 49/49 | 17/48 demos | 27/48 | rAF: 48 | 4/48 demos | 4 |
| webassembly | 14 (1 index + 13 demos) | 14/14 | 0/13 demos | 0/13 | rAF: 13 | 0/13 demos | 3 |
| webgl-shaders | 30 (1 index + 29 demos) | 30/30 | 9/29 demos | 22/29 | rAF: 28 | 5/29 demos | 4 |
| webgpu | 13 (1 index + 12 demos) | 13/13 | 7/12 demos | 8/12 | rAF: 12 | 3/12 demos | 4 |
| wireworld | 1 (index=demo) | 1/1 | 1/1 | 0/1 | rAF | yes | 4 |
| wolf-sheep-predation | 20 (1 index + 19 demos) | 20/20 | 3/19 demos | 0/19 | rAF: 19 | 19/19 demos | 4 |
| wolfram-ca | 1 (index=demo) | 1/1 | 1/1 | 1/1 | rAF | no | 4 |
| xuanji-tu | 1 (index=demo) | 1/1 | 1/1 | 1/1 | rAF | yes | 4.5 |

---

## Per-Directory Analysis

### 1. walther-calculators (9 files)

Gallery index page with organic-nature theme. 8 individual demos exploring mechanical calculator history.

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | N/A (gallery) | N/A | none | yes | none | 5 |
| 01-rmkz-simulator.html | yes | yes | no | none (event-driven) | yes (back-link) | none | 5 |
| 02-wsr160-simulator.html | yes | yes | no | none (event-driven) | yes (back-link) | none | 5 |
| 03-pinwheel-mechanism.html | yes | yes | no | rAF | yes (panels) | none | 5 |
| 04-carry-mechanism.html | yes | no | no | none (async/await) | yes (panels) | no window.reset | 4 |
| 05-multiplication.html | yes | no | no | none (async/await) | yes (back-link) | no window.reset | 4 |
| 06-division.html | yes | no | no | none (async/await) | yes (back-link) | no window.reset | 4 |
| 07-timeline.html | yes | no | no | none (scroll-based) | yes (multiple) | no window.reset | 4 |
| 08-comparison.html | yes | no | no | none (static/hover) | yes (multiple) | no window.reset | 4 |

**Notes:** Exceptionally well-crafted gallery. The RMKZ and WSR-160 simulators are standout demos with authentic mechanical calculator feel. All files use organic-nature theme with Lora/Nunito fonts. Demos 04-08 lack window.reset but have internal reset buttons. No resize handlers needed (CSS handles layout). No broken references.

---

### 2. wardley-maps (1 file)

Single-page demo: interactive Wardley Map builder for aviation industry.

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | Large file (~4600 lines). No broken refs. | 4 |

**Notes:** Feature-rich Wardley Map builder with drag-and-drop components, evolution axis, and multiple pre-built maps. Uses canvas rendering with mouse interaction. Dark theme (GitHub-style). Well-structured code.

---

### 3. wave-equation (1 file)

Single-page demo: 2D wave equation solver with interactive source placement.

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 4 |

**Notes:** Click-to-create wave sources on a 2D grid. Clean dark theme with control panel. Uses canvas for visualization. Good interactivity with multiple wave parameters (damping, speed, boundary conditions).

---

### 4. wave-function-collapse (1 file)

Single-page demo: WFC algorithm visualization with tile-based generation.

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | no | rAF | yes | No resize handler for canvas | 4 |

**Notes:** Generates tile patterns using Wave Function Collapse algorithm. Uses custom dark theme with CSS variables. Multiple tileset options. Clean implementation. Missing resize handler but layout is reasonably fixed-size.

---

### 5. wealth-distribution (20 files)

NetLogo-inspired Sugarscape wealth distribution models. Gallery index + 19 demos exploring inequality dynamics.

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | N/A (gallery) | N/A | none | yes | none | 4 |
| 01-classic-wealth-distribution.html | yes | yes | no | rAF | yes | none | 4 |
| 02-vision-impact-comparison.html | yes | yes | no | rAF | yes | none | 4 |
| 03-metabolism-impact.html | yes | yes | no | rAF | yes | none | 4 |
| 04-combined-fitness-advantages.html | yes | no | no | rAF | no | no window.reset, no blur | 3 |
| 05-spatial-wealth-segregation.html | yes | no | no | rAF | no | no window.reset, no blur | 3 |
| 06-temporal-wealth-evolution.html | yes | no | no | rAF | no | no window.reset, no blur | 3 |
| 07-lorenz-curve-interactive.html | yes | no | no | rAF | no | no window.reset, no blur | 3 |
| 08-wealth-histogram-distribution.html | yes | no | no | rAF | no | no window.reset, no blur | 3 |
| 09-inheritance-effects.html | yes | no | no | rAF | no | no window.reset, no blur | 3 |
| 10-taxation-redistribution.html | yes | no | no | rAF | no | no window.reset, no blur | 3 |
| 11-social-mobility-tracking.html | yes | no | no | rAF | no | no window.reset, no blur | 3 |
| 12-agent-lifespan-wealth-correlation.html | yes | no | no | rAF | no | no window.reset, no blur | 3 |
| 13-equal-vs-heterogeneous-start.html | yes | no | no | rAF | no | no window.reset, no blur | 3 |
| 14-resource-regeneration-variants.html | yes | no | no | rAF | no | no window.reset, no blur | 3 |
| 15-sparse-vs-dense-resources.html | yes | no | no | rAF | no | no window.reset, no blur | 3 |
| 16-population-dynamics.html | yes | no | no | rAF | no | no window.reset, no blur | 3 |
| 17-vision-range-comparison.html | yes | no | no | rAF | no | no window.reset, no blur | 3 |
| 18-multi-generation-analysis.html | yes | no | no | rAF | no | no window.reset, no blur | 3 |
| 20-pareto-principle-demonstration.html | yes | no | no | rAF | no | no window.reset, no blur. Note: no demo 19. | 3 |

**Notes:** Demos 01-03 are well-enhanced with window.reset and backdrop-filter. Demos 04-20 are unenhanced beyond enhance.js injection - they use minimal CSS (system fonts, no Lora/Nunito, no organic theme), no window.reset, no backdrop-filter blur on panels. All use canvas with rAF. No resize handlers in any demo. No broken references. Missing demo 19.

---

### 6. web-audio-api (49 files)

Large gallery with 48 audio visualization demos in a demos/ subdirectory.

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | N/A (gallery) | N/A | none | yes | none | 4 |
| demos/01-classic-bars.html | yes | yes* | yes | rAF | yes | none | 4 |
| demos/02-circular-spectrum.html | yes | yes* | yes | rAF | yes | none | 4 |
| demos/03-symmetrical-bars.html | yes | yes* | yes | rAF | yes | none | 4 |
| demos/04 through 20 (spectrum/waveform) | yes | yes (04-20) | yes (most) | rAF | yes (01-03), no (04+) | minimal styling on 04+ | 3.5-4 |
| demos/21-48 (3D/beat/synth) | yes | no (21+) | mixed | rAF | no | Later demos lack window.reset | 3.5 |

**Summary for web-audio-api:**
- **All 49 files** have enhance.js
- **17 of 48 demos** have window.reset (demos 04-20)
- **27 of 48 demos** have resize handlers
- **All 48 demos** use rAF
- **4 of 48 demos** have backdrop-filter blur (01-03 and a few others)
- Demos 01-03 are the most polished. Later demos (21+) have basic dark styling but lack organic theme, window.reset, and blur effects. All require user microphone permission to function. No broken references.

---

### 7. webassembly (14 files)

Gallery index + 13 demos in demos/ subdirectory. Simulated WASM demos (most use JS with WASM-like structure).

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | N/A (gallery) | N/A | none | yes | none | 4 |
| demos/03-nbody-simulation.html | yes | no | no | rAF | no | Minimal CSS, no panels | 3 |
| demos/10-prime-sieve.html | yes | no | no | rAF | no | Minimal CSS | 3 |
| demos/11-hash-collision.html | yes | no | no | rAF | no | Minimal CSS | 3 |
| demos/12-sorting-race.html | yes | no | no | rAF | no | Minimal CSS | 3 |
| demos/14-convex-hull.html | yes | no | no | rAF | no | Minimal CSS | 3 |
| demos/15-voronoi-diagram.html | yes | no | no | rAF | no | Minimal CSS | 3 |
| demos/18-terrain-generator.html | yes | no | no | rAF | no | Minimal CSS | 3 |
| demos/21-metaballs.html | yes | no | no | rAF | no | Minimal CSS | 3 |
| demos/25-cloth-simulation.html | yes | no | no | rAF | no | Minimal CSS | 3 |
| demos/26-hair-grass.html | yes | no | no | rAF | no | Minimal CSS | 3 |
| demos/28-marching-cubes.html | yes | no | no | rAF | no | Minimal CSS | 3 |
| demos/34-boids-flocking.html | yes | no | no | rAF | no | Minimal CSS | 3 |
| demos/35-ant-colony.html | yes | no | no | rAF | no | Minimal CSS | 3 |

**Notes:** None of the 13 demos have window.reset, resize handlers, or backdrop-filter blur. All use canvas with rAF animation. Files are functional but have very minimal styling - basic black backgrounds, simple canvas rendering. No broken references. These demos simulate WASM performance comparisons using pure JS.

---

### 8. webgl-shaders (30 files)

Gallery index + 29 WebGL shader demos split between root directory (22-29) and demos/ subdirectory (05-40).

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | N/A (gallery) | N/A | none | yes | none | 4 |
| 22-mandelbrot-zoom.html | yes | yes | yes | rAF | yes | none | 5 |
| 23-fluid-simulation.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 24-volumetric-light.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 25-truchet-tiles.html | yes | no | yes* | rAF | no | none | 4 |
| 26-sdf-gallery.html | yes | no | yes* | rAF | no | none | 4 |
| 27-domain-warping.html | yes | no | yes* | rAF | no | none | 4 |
| 28-cellular-noise-3d.html | yes | no | yes* | rAF | no | none | 4 |
| 29-plasma-effect.html | yes | no | yes* | rAF | no | none | 4 |
| demos/05-plasma-fire.html | yes | yes | yes | rAF | yes | none | 4 |
| demos/09-liquid-metal.html | yes | yes | yes | rAF | no | none | 4 |
| demos/10-aurora-waves.html | yes | yes | yes | rAF | no | none | 4 |
| demos/12-cube-fractal.html | yes | yes | yes | rAF | no | none | 4 |
| demos/14-menger-sponge.html | yes | yes | yes | rAF | no | none | 4 |
| demos/19-particle-explosion.html | yes | yes | yes | rAF | no | none | 4 |
| demos/20-particle-flow-field.html | yes | yes | yes | rAF | no | none | 4 |
| demos/21-particle-galaxy.html | yes | yes | yes | rAF | no | none | 4 |
| demos/22-particle-swarm.html | yes | no | yes | rAF | no | none | 3.5 |
| demos/23-particle-waves.html | yes | no | yes | rAF | no | none | 3.5 |
| demos/24-particle-vortex.html | yes | no | yes | rAF | no | none | 3.5 |
| demos/25-particle-nebula.html | yes | no | yes | rAF | no | none | 3.5 |
| demos/30-bacterial-colonies.html | yes | no | yes | rAF | no | none | 3.5 |
| demos/33-mandelbrot-set.html | yes | no | yes | rAF | no | none | 4 |
| demos/34-julia-set.html | yes | no | yes | rAF | no | none | 4 |
| demos/35-burning-ship.html | yes | no | yes | rAF | no | none | 4 |
| demos/36-newton-fractal.html | yes | no | yes | rAF | no | none | 4 |
| demos/37-phoenix-fractal.html | yes | no | yes | rAF | no | none | 4 |
| demos/38-tricorn-fractal.html | yes | no | yes | rAF | no | none | 4 |
| demos/39-mandelbrot-zoom.html | yes | no | yes | rAF | no | none | 4 |
| demos/40-julia-morph.html | yes | no | yes | rAF | no | none | 4 |

**Notes:** All use raw WebGL shaders. 22-mandelbrot-zoom is the most polished (has all enhancements). The demos/ files have consistent quality. Root files (23-29) are well-styled but lack window.reset. Most have resize handlers via canvas fullscreen. No broken references. Pure GLSL shader art - visually impressive.

---

### 9. webgpu (13 files)

Gallery index + 12 cutting-edge WebGPU compute shader demos.

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | N/A (gallery) | N/A | none | yes | none | 4 |
| 01-nbody-gpu.html | yes | yes | yes | rAF | yes | Requires WebGPU browser | 4 |
| 02-fluid-mpm.html | yes | yes | yes | rAF | yes | Requires WebGPU browser | 4.5 |
| 03-path-tracer.html | yes | yes | no | rAF | yes | Requires WebGPU browser | 4 |
| 04-marching-cubes.html | yes | no | no | rAF | no | Requires WebGPU, no window.reset | 3.5 |
| 05-cloth-gpu.html | yes | yes | no | rAF | no | Requires WebGPU | 4 |
| 06-particle-life-gpu.html | yes | yes | yes | rAF | no | Requires WebGPU | 4 |
| 07-julia-deep.html | yes | yes | yes | rAF | no | Requires WebGPU | 4 |
| 08-rd-gpu.html | yes | yes | no | rAF | no | Requires WebGPU | 4 |
| 09-gol-4k.html | yes | no | yes | rAF | no | Requires WebGPU, no window.reset | 3.5 |
| 10-boids-gpu.html | yes | no | yes | rAF | no | Requires WebGPU, no window.reset | 3.5 |
| 11-ocean-gpu.html | yes | no | yes | rAF | no | Requires WebGPU, no window.reset | 3.5 |
| 12-voronoi-gpu.html | yes | no | yes | rAF | no | Requires WebGPU, no window.reset | 3.5 |

**Notes:** Cutting-edge WebGPU demos. All require WebGPU-capable browser (Chrome 113+). Most have error handling for unsupported browsers. Demos 01-03 are the most polished with backdrop-filter. Files 04-12 have minimal styling. Good compute shader implementations. No broken references.

---

### 10. wireworld (1 file)

Single-page demo: Wireworld cellular automaton circuit simulator.

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | no | rAF | yes | No resize handler but fixed layout works | 4 |

**Notes:** Interactive circuit drawing tool with electron head/tail simulation. Dark blue theme. Clean implementation with preset patterns. Has meta description tag for SEO.

---

### 11. wolf-sheep-predation (20 files)

Gallery index + 19 NetLogo-inspired predator-prey ecosystem simulations.

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | N/A (gallery) | N/A | none | yes | none | 4 |
| 01-basic-predator-prey.html | yes | yes | no | rAF | yes | none | 4 |
| 02-stable-ecosystem-with-grass.html | yes | yes | no | rAF | yes | none | 4 |
| 03-population-graphs.html | yes | yes | no | rAF | yes | none | 4 |
| 04-phase-space-diagram.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 05-energy-visualization.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 06-spatial-density-heatmap.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 07-energy-distribution.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 08-grass-coverage-timeline.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 09-parameter-sensitivity.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 10-scenario-comparison.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 11-agent-trails.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 12-reproduction-timeline.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 13-death-analysis.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 14-carrying-capacity.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 15-oscillation-analysis.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 16-initial-conditions.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 17-interactive-sandbox.html | yes | no | no | rAF | yes | no window.reset | 4 |
| 19-lifetime-distribution.html | yes | no | no | rAF | yes | no window.reset. Note: no demo 18. | 4 |
| 20-stability-metrics.html | yes | no | no | rAF | yes | no window.reset | 4 |

**Notes:** Consistent gallery with good visual quality throughout. All demos have backdrop-filter blur on container panels. Only demos 01-03 have window.reset. No resize handlers but CSS layout handles responsiveness. All use canvas+rAF. Missing demo 18. No broken references.

---

### 12. wolfram-ca (1 file)

Single-page demo: All 256 Wolfram Elementary Cellular Automata rules.

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | no | Uses external CSS (system.css, navigation.css) | 4 |

**Notes:** Retro Mac OS 9 themed UI with system.css library. Displays all 256 ECA rules with interactive controls. References external CSS files (`unpkg.com/@sakun/system.css` and `../assets/css/navigation.css`). No backdrop-filter blur but the retro theme doesn't need it. Unique and creative presentation.

---

### 13. xuanji-tu (1 file)

Single-page demo: Interactive sonification of Su Hui's ancient Chinese palindrome poem.

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 4.5 |

**Notes:** Beautiful demo combining Chinese poetry, visual art, and music. Uses Lora/Nunito/Noto Serif SC fonts. Organic-nature theme with sage/moss/earth colors. Interactive 29x29 character grid with multiple traversal patterns that generate music. Culturally rich and technically sophisticated. Uses Web Audio API for sonification.

---

## Aggregate Statistics

| Metric | Count | Total | Percentage |
|--------|-------|-------|------------|
| Files with enhance.js | 114 | 114 | 100% |
| Demo files with window.reset | 47 | 107 demos | 44% |
| Demo files with resize handler | 60 | 107 demos | 56% |
| Demo files using rAF | 106 | 107 demos | 99% |
| Demo files with backdrop-filter blur | 49 | 107 demos | 46% |
| Gallery index pages | 7 | 7 | 100% polished |
| Single-page demos | 6 | 6 | 100% polished |

## Key Findings

1. **enhance.js**: 100% coverage across all 114 files. Universal injection is complete.

2. **window.reset**: Only 44% of demos expose this. Consistently present in first 1-3 demos of each multi-demo gallery (the "first pass" files). Later demos (04+) almost universally lack it. The single-page demos all have it.

3. **resize handlers**: 56% coverage. WebGL and WebAudio demos tend to have them (fullscreen canvas pattern). Wealth-distribution and wolf-sheep-predation galleries lack them entirely. The single-page demos mostly have them.

4. **Animation**: 99% use requestAnimationFrame. Only exception: walther-calculators demos 01-02, 04-08 which are event-driven (no continuous animation needed). Zero setInterval usage.

5. **Panel blur**: 46% coverage. wolf-sheep-predation is notable for having it on ALL 19 demos. walther-calculators has it on all demos. webassembly and most webgl-shaders/demos lack it. wealth-distribution only has it on demos 01-03.

6. **Quality distribution**: Average ~3.8/5. Single-page demos and walther-calculators score highest (4-5). webassembly demos score lowest (3) due to minimal styling. No broken references or obvious JS issues found in any file.

7. **Missing demos**: wealth-distribution is missing demo 19; wolf-sheep-predation is missing demo 18.

8. **Enhancement priority**: webassembly demos (13 files) and wealth-distribution demos 04-20 (16 files) would benefit most from per-file enhancements (window.reset, backdrop-filter, improved styling).
