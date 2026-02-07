# Analysis Chunk 04: felix-calculator through ising-model

**Analyzer**: analyzer-04
**Directories analyzed**: 20
**Total HTML files**: 183
**Date**: 2026-02-07

---

## Summary Statistics

| Metric | Count | Percentage |
|--------|-------|------------|
| Total HTML files | 183 | 100% |
| enhance.js injected | 183 | 100% |
| window.reset exposed | 50 | 27% |
| Resize handler present | 55 | 30% |
| Uses requestAnimationFrame | 153 | 84% |
| Uses setInterval | 3 | 2% |
| No animation (event-driven/static) | 27 | 15% |
| Panel backdrop-filter blur | 42 | 23% |

---

## Per-Directory Summary

| Directory | Files | enhance.js | reset | resize | rAF | SI | blur | Avg Quality |
|-----------|-------|------------|-------|--------|-----|----|------|-------------|
| felix-calculator | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 5.0 |
| fire-percolation | 21 | 21 | 3 | 0 | 12 | 0 | 20 | 3.5 |
| fire-smoke-simulation | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 4.0 |
| flip-fluid | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 4.0 |
| follower-visualizations | 28 | 28 | 3 | 1 | 27 | 1 | 0 | 3.0 |
| fourier-epicycles | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 5.0 |
| galaxy-collision | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 5.0 |
| game-of-life | 18 | 18 | 7 | 0 | 14 | 0 | 0 | 3.5 |
| game-theory | 11 | 11 | 7 | 10 | 3 | 0 | 3 | 4.0 |
| games | 4 | 4 | 1 | 1 | 1 | 0 | 3 | 3.5 |
| generative-art-2 | 11 | 11 | 0 | 0 | 10 | 0 | 0 | 2.0 |
| genetic-algorithm | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 4.0 |
| geometric-patterns | 7 | 7 | 3 | 6 | 2 | 0 | 6 | 4.0 |
| geophysical | 11 | 11 | 3 | 10 | 9 | 0 | 3 | 3.5 |
| graph-algorithms | 3 | 3 | 2 | 2 | 0 | 0 | 2 | 3.5 |
| gravity-orbits | 50 | 50 | 3 | 1 | 49 | 0 | 0 | 3.0 |
| heat-equation | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 4.0 |
| infographics | 11 | 11 | 0 | 1 | 0 | 0 | 1 | 3.0 |
| information-theory | 11 | 11 | 3 | 10 | 10 | 1 | 3 | 4.0 |
| ising-model | 1 | 1 | 0 | 1 | 1 | 0 | 0 | 5.0 |

---

## Detailed Per-Directory Analysis

### felix-calculator (1 file)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | no | no (responsive CSS) | none (event-driven) | yes (info-panel) | none | 5 |

**Notes**: Soviet mechanical calculator simulation. Class-based FelixCalculator with lever drag UI, pinwheel visualization, crank animations, Web Audio API sounds. Event-driven -- no animation loop needed. High-quality implementation with responsive CSS layout (no explicit resize handler needed). `backdrop-filter: blur(10px)` on info-panel.

---

### fire-percolation (21 files: index + 20 demos)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | n/a | n/a | n/a | n/a | none | gallery |
| 01-*.html | yes | yes | no | rAF | yes | none | 4 |
| 02-*.html | yes | no | no | rAF | yes | none | 3 |
| 03-*.html | yes | no | no | rAF | yes | none | 3 |
| 04-*.html | yes | no | no | rAF | yes | none | 3 |
| 05-*.html | yes | no | no | rAF | yes | none | 3 |
| 06-*.html | yes | no | no | rAF | yes | none | 3 |
| 07-*.html | yes | no | no | rAF | yes | none | 3 |
| 08-*.html | yes | no | no | rAF | yes | none | 4 |
| 09-*.html | yes | yes | no | rAF | yes | none | 4 |
| 10-*.html | yes | yes | no | rAF | yes | none | 4 |
| 11-*.html | yes | no | no | none | yes | none | 3 |
| 12-*.html | yes | no | no | none | yes | none | 3 |
| 13-*.html | yes | no | no | rAF | yes | none | 4 |
| 14-*.html | yes | no | no | none | yes | none | 3 |
| 15-*.html | yes | no | no | none | yes | none | 3 |
| 16-*.html | yes | no | no | none | yes | none | 3 |
| 17-*.html | yes | no | no | none | yes | none | 4 |
| 18-*.html | yes | no | no | none | yes | none | 3 |
| 19-*.html | yes | no | no | none | yes | none | 3 |
| 20-*.html | yes | no | no | none | yes | none | 4 |

**Notes**: Fire percolation simulations. All demos have `backdrop-filter: blur` on controls/info panels. Only 3 of 20 demos have `window.reset`. No resize handlers on demo files. 12 use rAF, 8 are event-driven/static. Good overall quality -- consistent panel styling.

**Enhancement gaps**: Missing `window.reset` (17 files), missing resize handlers (20 files).

---

### fire-smoke-simulation (1 file)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 4 |

**Notes**: Particle-based fire with heat diffusion, smoke, embers. Multiple presets (campfire/inferno/candle/smoke), slider controls. `window.reset = init;`. Blur on #info, .control-group, .back-link. Well-enhanced.

---

### flip-fluid (1 file)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 4 |

**Notes**: FLIP/PIC fluid simulation with MAC staggered grid, Gauss-Seidel pressure solver, particle advection. `window.reset = reset;`. Blur on .controls. Solid physics simulation.

---

### follower-visualizations (28 files: index + 27 demos)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | n/a | n/a | n/a | n/a | none | gallery |
| 01-classic-follower.html | yes | yes | yes | rAF | no | none | 3 |
| 02-*.html | yes | yes | no | rAF | no | none | 3 |
| 03-*.html | yes | yes | no | rAF | no | none | 3 |
| 04-*.html through 27-*.html | yes | no | no | rAF | no | none | 3 |

**Notes**: NetLogo "Follower" model implementations. All 27 demos use rAF. One also uses setInterval. Only 3 have `window.reset` exposed, only 1 has a resize handler. No demos have backdrop-filter blur (no control panels -- pure canvas visualizations). Consistent but minimal implementations.

**Enhancement gaps**: Missing `window.reset` (24 files), missing resize handlers (26 files), missing panel blur (27 files -- though most lack panels).

---

### fourier-epicycles (1 file)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 5 |

**Notes**: DFT-based epicycle drawing with draw-your-own mode, presets (heart/star/pi/treble/infinity), DFT spectrum visualization tabs. Complex class, EpicycleDrawer class, DFTVisualizer. `window.reset` exposed. Blur on .controls. Outstanding implementation with multi-tab UI and drawing interaction.

---

### galaxy-collision (1 file)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 5 |

**Notes**: N-body galaxy collision with 16K stars, 3D projection, velocity Verlet integration, 4 presets. `window.reset` exposed. Blur on #info. Impressive physics simulation with large particle counts.

---

### game-of-life (18 files: index + 17 demos)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | n/a | n/a | n/a | n/a | none | gallery |
| 01-*.html through 17-*.html | yes | 7/17 | 0/17 | 14 rAF, 3 none | 0/17 | none | 3-4 |

**Notes**: Conway's Game of Life variations. 14 of 17 demos use rAF. 7 have `window.reset`. No resize handlers. No backdrop-filter blur (canvas-only visualizations without control panels). Classic implementations, solid quality.

**Enhancement gaps**: Missing `window.reset` (10 files), missing resize handlers (17 files), missing panel blur (17 files).

---

### game-theory (11 files: index + 10 demos)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | n/a | n/a | n/a | n/a | none | gallery |
| 01-*.html | yes | yes | yes | none | yes | none | 4 |
| 02-*.html through 10-*.html | yes | 6/9 | 9/9 | 3 rAF, 6 none | 2/9 | none | 4 |

**Notes**: Game theory visualizations (prisoner's dilemma, Nash equilibrium, evolutionary games, etc.). Most are interactive/event-driven rather than animated. 10 of 10 demos have resize handlers. 7 of 10 have `window.reset`. 3 have backdrop-filter blur on controls-panel. Good interactivity and educational value.

---

### games (4 files: index + 3 demos)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | n/a | n/a | n/a | n/a | none | gallery |
| 01-*.html | yes | yes | yes | rAF | yes | none | 4 |
| 02-*.html | yes | no | no | none | yes | none | 3 |
| 03-*.html | yes | no | no | none | yes | none | 3 |

**Notes**: Neural Cellular Automata and related game simulations. 3 of 3 demos have backdrop-filter blur. Only 1 has `window.reset` and resize handler.

---

### generative-art-2 (11 files: index + 10 demos)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | n/a | n/a | n/a | n/a | none | gallery |
| 101-l-systems-3d.html | yes | no | no | rAF | no | local three.min.js dependency | 2 |
| 102-*.html through 110-*.html | yes | 0/9 | 0/9 | 9 rAF, 0 none | 0/9 | potential local lib deps | 2 |

**Notes**: L-system and generative art demos. All are minimal implementations. No `window.reset`, no resize handlers, no panel blur. References local `../assets/js/three.min.js` (may not exist). Lowest quality gallery in this chunk -- appears to be auto-generated without individual polish.

**Issues**: Depends on local `three.min.js` which may be missing. No control panels. Minimal implementations.
**Enhancement gaps**: Missing `window.reset` (10 files), missing resize handlers (10 files), no panels to blur.

---

### genetic-algorithm (1 file)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | yes | yes | rAF + setTimeout | no | none | 4 |

**Notes**: Three-tab GA visualizer (TSP, String Evolution, Creature Evolution). Tournament selection, order crossover, FitnessChart class. `window.reset` exposed. Resize handler in class. Uses rAF for TSP/creature tabs, setTimeout for string evolution tab. No backdrop-filter blur -- has control panels but they use opaque backgrounds.

---

### geometric-patterns (7 files: index + 6 demos)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | n/a | n/a | n/a | n/a | none | gallery |
| 01-*.html | yes | yes | yes | none | yes | none | 4 |
| 02-*.html | yes | yes | yes | none | yes | none | 4 |
| 03-*.html | yes | yes | yes | rAF | yes | none | 4 |
| 04-*.html | yes | no | yes | rAF | yes | none | 4 |
| 05-*.html | yes | no | yes | none | yes | none | 4 |
| 06-*.html | yes | no | yes | none | yes | none | 4 |

**Notes**: Geometric pattern generators (Islamic, Celtic, Penrose, tessellations). All 6 demos have resize handlers and backdrop-filter blur on info-panel and controls. 3 of 6 have `window.reset`. Good quality across the board -- well-polished gallery.

---

### geophysical (11 files: index + 10 demos)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | n/a | n/a | n/a | n/a | none | gallery |
| 01-*.html | yes | yes | yes | rAF | yes | none | 4 |
| 02-*.html through 10-*.html | yes | 2/9 | 9/9 | 8 rAF, 1 none | 2/9 | none | 3-4 |

**Notes**: Geophysical simulations (plate tectonics, weather, seismic waves, ocean currents, etc.). All 10 demos have resize handlers. 9 use rAF. 3 of 10 have `window.reset`. 3 have backdrop-filter blur. Solid educational simulations.

**Enhancement gaps**: Missing `window.reset` (7 files), missing panel blur (7 files).

---

### graph-algorithms (3 files: index + 2 demos)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | n/a | n/a | n/a | n/a | none | gallery |
| 01-*.html | yes | yes | yes | none | yes | none | 4 |
| 02-*.html | yes | yes | yes | none | yes | none | 3 |

**Notes**: Graph algorithm visualizations (BFS/DFS, Dijkstra, etc.). Both demos are event-driven (step-through) rather than animated. Both have `window.reset`, resize handlers, and backdrop-filter blur. Small but well-implemented gallery.

---

### gravity-orbits (50 files: index + 49 demos)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | n/a | n/a | n/a | n/a | none | gallery |
| 01-simple-circular-orbit.html | yes | yes | yes | rAF | no | uses demo-utils.js | 3 |
| 02-*.html through 49-*.html | yes | 2/48 | 0/48 | 48 rAF | 0/48 | minimal info panels | 3 |

**Notes**: Gravity orbit simulations (circular, elliptical, binary stars, Lagrange points, three-body, etc.). All 49 demos use rAF. Uses `demo-utils.js` (FPSCounter, ErrorManager). Only 3 of 49 have `window.reset`. Only 1 has a resize handler. No backdrop-filter blur -- demos use simple opaque `.info` panels. Largest gallery in this chunk. Consistent but repetitive implementations -- many follow the same template pattern.

**Issues**: Fixed 800x800 canvas size without responsive resize in most files. Relies on `demo-utils.js` for FPS/error handling (different pattern from enhance.js).
**Enhancement gaps**: Missing `window.reset` (46 files), missing resize handlers (48 files), missing panel blur (49 files).

---

### heat-equation (1 file)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 4 |

**Notes**: 2D heat equation PDE solver with explicit finite differences. 3 boundary conditions (insulated/fixed/periodic), hot/cold painting interaction. `window.reset = reset;`. Blur on .controls and .equation. Well-implemented with good interactivity.

---

### infographics (11 files: index + 10 demos in demos/ subfolder)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | n/a | n/a | n/a | n/a | none | gallery |
| demos/bar-chart.html | yes | no | no | none (CSS anim) | no | none | 3 |
| demos/bubble-chart.html | yes | no | no | none (CSS anim) | no | none | 3 |
| demos/*.html (remaining 8) | yes | 0/8 | 1/8 | none (CSS/SVG) | 1/8 | none | 3 |

**Notes**: Static/CSS-animated infographic visualizations (bar charts, bubble charts, pie charts, timelines, etc.). No demos use rAF -- they rely on CSS animations and SVG. No `window.reset` in any file. 1 has a resize handler. 1 has backdrop-filter blur. Decent visual quality but limited interactivity. Uses deeper path (`demos/` subfolder).

**Enhancement gaps**: Missing `window.reset` (10 files -- though reset is less meaningful for static infographics), missing resize handlers (9 files).

---

### information-theory (11 files: index + 10 demos)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | n/a | n/a | n/a | n/a | none | gallery |
| 01-*.html | yes | yes | yes | rAF | yes | none | 4 |
| 02-*.html through 10-*.html | yes | 2/9 | 9/9 | 9 rAF, 1 SI | 2/9 | none | 4 |

**Notes**: Information theory visualizations (entropy, Huffman coding, Shannon, error correction, etc.). All 10 demos have resize handlers. 10 use rAF, 1 also uses setInterval. 3 have `window.reset`. 3 have backdrop-filter blur on controls. Good educational quality with interactive controls.

---

### ising-model (1 file)

| File | enhance.js | reset | resize | anim | blur | issues | quality |
|------|-----------|-------|--------|------|------|--------|---------|
| index.html | yes | no | yes | rAF | no | none | 5 |

**Notes**: Ising model with Metropolis algorithm, 3 tabs (simulation/phase sweep/magnetization plot), phase transition analysis. No `window.reset` exposed despite having internal reset logic. Resize handler is conditional. Uses rAF plus setInterval for sweep. Outstanding multi-tab UI with deep physics. No panel blur -- uses opaque backgrounds.

**Enhancement gaps**: Missing `window.reset` (1 file), missing panel blur (1 file).

---

## Top Enhancement Priorities

### Critical (high impact, many files)

1. **gravity-orbits**: 46 files missing `window.reset`, 48 missing resize handlers, 49 missing blur. Largest gallery -- fixing the template pattern would address all 49 demos.

2. **follower-visualizations**: 24 files missing `window.reset`, 26 missing resize handlers. Second-largest gallery with consistent template.

3. **game-of-life**: 10 files missing `window.reset`, 17 missing resize handlers.

4. **fire-percolation**: 17 files missing `window.reset`, 20 missing resize handlers (though blur is already at 100%).

### Medium (smaller galleries, good ROI)

5. **geophysical**: 7 files missing `window.reset`, 7 missing blur.
6. **information-theory**: 7 files missing `window.reset`, 7 missing blur.
7. **game-theory**: 3 files missing `window.reset`, 7 missing blur.

### Low Priority

8. **generative-art-2**: All 10 demos need significant rework (quality=2). May need local `three.min.js` fixed.
9. **infographics**: Static visualizations -- `window.reset` less applicable.

---

## Issues Found

| Directory | Issue | Severity |
|-----------|-------|----------|
| generative-art-2 | References local `../assets/js/three.min.js` -- may be missing | Medium |
| generative-art-2 | Overall low quality (2/5) -- minimal implementations | Low |
| gravity-orbits | Fixed 800x800 canvas, not responsive | Low |
| gravity-orbits | Uses demo-utils.js pattern instead of enhance.js for FPS | Info |
| infographics | Uses `demos/` subfolder (deeper nesting) | Info |

---

## Quality Distribution

| Rating | Count | Directories |
|--------|-------|-------------|
| 5 | 5 files | felix-calculator, fourier-epicycles, galaxy-collision, ising-model (single files) |
| 4 | ~55 files | fire-smoke-simulation, flip-fluid, genetic-algorithm, heat-equation, geometric-patterns, game-theory, information-theory, geophysical, graph-algorithms, select fire-percolation demos |
| 3 | ~102 files | game-of-life, follower-visualizations, gravity-orbits, games, infographics, select fire-percolation demos |
| 2 | ~10 files | generative-art-2 |
| Gallery | 11 files | index.html pages (not rated) |
