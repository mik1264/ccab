# Analysis Chunk 09: three-body-problem through voting-systems

**Directories analyzed:** 20
**Total HTML files:** 346 (including subdirectory demos)
**Analysis date:** 2026-02-07

## Summary Statistics

| Metric | Count | Percentage |
|--------|-------|------------|
| Total HTML files | 346 | 100% |
| Has enhance.js | 346 | 100% |
| Has window.reset | 39 | 11.3% |
| Has resize handler | 310 | 89.6% |
| Has backdrop-filter: blur | 51 | 14.7% |
| Uses rAF | 263 | 76.0% |
| Uses setAnimationLoop | 40 | 11.6% |
| Uses setInterval | 7 | 2.0% |
| Gallery index pages | 10 | - |
| Single-page demos | 10 | - |

---

## Directory-by-Directory Analysis

### 1. three-body-problem (1 file)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 5 |

**Notes:** Excellent single-page demo. Full gravitational three-body simulation with Figure-8 orbit, Lagrange points, and chaotic presets. Well-polished UI with gold/dark theme, control panel with backdrop blur, preset buttons. All enhancement features present.

---

### 2. threejs (138 files)

**Subgroups:**
- **01-20 (numbered demos):** Original Three.js demos (cubes, particles, effects)
- **21-28, 31, 40-47 (numbered demos):** Later additions with improved polish
- **constellation-001 through constellation-100:** Themed particle constellation variations

| Subgroup | Files | enhance.js | window.reset | resize | animation | panel-blur | quality |
|----------|-------|-----------|-------------|--------|-----------|------------|---------|
| 01-03 | 3 | yes | no | yes | rAF | no | 3 |
| 04-20 | 17 | yes | yes | yes | rAF | no | 3 |
| 21-28, 31 | 9 | yes | no | yes | rAF | no | 3 |
| 40-42 | 3 | yes | no | yes | rAF | no | 3 |
| 43-47 | 5 | yes | no | yes | rAF | yes | 4 |
| constellation-001 to -100 | 100 | yes | no | yes | rAF | no | 2 |
| index.html | 1 | yes | n/a | n/a | n/a | yes | 4 |

**Notes:**
- Files 04-20 have `window.reset` exposed; files 01-03 and 21+ do not
- Files 43-47 are newer, higher quality additions (Enneper surface, Crosscap, Kaleidocycle, Schlafli symbol, Dandelin spheres) with backdrop-blur on controls
- Constellation files (100 files) are minimal variations on a particle theme -- each is ~120 lines with basic back button and simple color themes, no info panels. Functional but low polish
- All numbered demos and constellation files use CDN Three.js r128
- No setInterval usage anywhere

**Issues:**
- 01-03: Minimal styling, no info panels, basic back button
- constellation files: Very similar to each other, no control panels, no descriptions, no info panels

---

### 3. threejs-tsl-shaders (41 files)

| Subgroup | Files | enhance.js | window.reset | resize | animation | panel-blur | quality |
|----------|-------|-----------|-------------|--------|-----------|------------|---------|
| 01-40 demos | 40 | yes | no | yes | setAnimationLoop | no | 3 |
| index.html | 1 | yes | n/a | n/a | n/a | yes | 4 |

**Notes:**
- All demos use `renderer.setAnimationLoop(animate)` (Three.js built-in loop) rather than raw rAF
- Use Three.js WebGPU renderer with TSL (Three Shading Language) via import maps
- Demos include: rainbow gradient, chromatic sphere, pulse glow, fresnel rim, holographic, color waves, twist deformation, spiky sphere, morphing torus, gravity well, spiral galaxy, flow field, kaleidoscope, tunnel effect, mandala, plasma, voronoi cells, fractal noise, glitch effect, energy shield, matrix rain, lava lamp, crystal refraction, neon grid, electric plasma, caustic water
- No window.reset exposed in any file
- Back button only, no panel-blur except on gallery index
- Good variety but minimal UI controls

---

### 4. time-clocks (11 files)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | n/a | n/a | n/a | yes | none | 4 |
| 01-kuramoto-model.html | yes | yes | yes | rAF | yes | none | 4 |
| 02-metronome-sync.html | yes | yes | yes | rAF | yes | none | 4 |
| 03-circadian-rhythms.html | yes | no | yes | rAF | yes | none | 4 |
| 04-cardiac-pacemaker.html | yes | no | yes | rAF | no | none | 3 |
| 05-firefly-synchronization.html | yes | no | yes | rAF | no | none | 3 |
| 06-pendulum-waves.html | yes | no | yes | rAF | no | none | 3 |
| 07-phase-locking.html | yes | no | yes | rAF | no | none | 3 |
| 08-relaxation-oscillators.html | yes | no | yes | rAF | no | none | 3 |
| 09-entrainment.html | yes | no | yes | rAF | no | none | 3 |
| 10-coupled-chaos.html | yes | no | yes | rAF | no | none | 3 |

**Notes:** Good synchronization/oscillator gallery. Files 01-03 were enhanced (window.reset, backdrop-blur). Files 04-10 have proper resize handlers and rAF but lack window.reset and panel blur.

---

### 5. timezone-tools (11 files)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | n/a | n/a | n/a | yes | none | 4 |
| 01-linear-timeline.html | yes | yes | yes | rAF | yes | none | 4 |
| 02-analog-clocks.html | yes | yes | yes | rAF | yes | none | 4 |
| 03-gantt-overlap.html | yes | yes | yes | rAF+SI | yes | none | 4 |
| 04-radial-clock.html | yes | no | yes | rAF | yes | none | 3 |
| 05-matrix-grid.html | yes | no | no | SI | yes | none | 3 |
| 06-world-map.html | yes | no | no | rAF | yes | none | 3 |
| 07-stacked-chart.html | yes | no | no | none | yes | none | 3 |
| 08-slot-finder.html | yes | no | no | none | yes | none | 3 |
| 09-day-night.html | yes | no | no | rAF | yes | none | 3 |
| 10-time-slider.html | yes | no | no | rAF | yes | none | 3 |

**Notes:**
- All files have backdrop-filter: blur (this gallery consistently uses it)
- Files 01-03 fully enhanced with window.reset
- Files 05, 07, 08 are more static/tool-like (not continuous animations)
- 03-gantt-overlap and 05-matrix-grid use setInterval for periodic updates (appropriate for clock-updating use case)
- 7 files lack resize handlers (04-10), though some are tool/dashboard layouts where resize is less critical

---

### 6. totalistic-ca (1 file)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 5 |

**Notes:** Excellent single-page demo. Multi-color 1D cellular automaton with rule table display, preset rules, fully interactive. All enhancements present.

---

### 7. traffic-simulation (1 file)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 5 |

**Notes:** Nagel-Schreckenberg traffic model. Well-polished with control panel, preset buttons, space-time diagram. All enhancements present.

---

### 8. tragedy-commons (1 file)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 4 |

**Notes:** Game-theoretic tragedy of the commons simulation. Grid layout with controls panel. Has padding/scroll layout rather than fullscreen canvas. Good interactive controls.

---

### 9. triple-pendulum (1 file)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 5 |

**Notes:** Beautiful chaotic triple pendulum with trace lines. Purple/violet theme. Control groups at bottom for arm lengths, mass, gravity, damping. All enhancements present.

---

### 10. tsl-shaders (47 files)

**Subgroups:**
- **01-17 (named demos):** TSL shader art demos (pulsating sphere, wave torus, noise displacement, etc.)
- **65-69 (named demos):** Orbital mechanics visualizations (binary stars, figure-eight orbit, Lagrange points)
- **70-96 (orbital series):** Numbered "orbital" variations

| Subgroup | Files | enhance.js | window.reset | resize | animation | panel-blur | quality |
|----------|-------|-----------|-------------|--------|-----------|------------|---------|
| 01-03 | 3 | yes | no | yes | rAF | yes | 4 |
| 04-17 | 10 | yes | no | yes | rAF | no | 3 |
| 65-69 | 5 | yes | no | yes | rAF | no | 3 |
| 70-96 | 27 | yes | no | yes | rAF | no | 2 |
| index.html | 1 | yes | n/a | n/a | n/a | yes | 4 |

**Notes:**
- All use Three.js WebGPU renderer with import maps (three@0.170.0)
- Files 01-03 have backdrop-blur on info panels
- Files 70-96 (orbital series) are minimal variations on orbital mechanics themes -- short files (~100 lines each), basic info div, no controls, no window.reset. Functional but repetitive
- 65-69 are more substantial orbital mechanics demos (binary stars, figure-eight, Lagrange points, triple star hierarchical)
- All require WebGPU support; files include WebGPU availability check
- No window.reset in any file

---

### 11. turmites (1 file)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 5 |

**Notes:** Excellent 2D Turing machine visualization. Langton's Ant and many preset turmite rules. Orange/amber theme. Preset buttons, step counter, speed control. All enhancements present.

---

### 12. ulam-spirals (21 files)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | n/a | yes | n/a | yes | none | 4 |
| 01-classic-ulam.html | yes | yes | yes | rAF | yes | none | 4 |
| 02-animated-growth.html | yes | yes | yes | rAF | yes | none | 4 |
| 03-interactive-zoom.html | yes | yes | yes | rAF | yes | none | 4 |
| 04-twin-primes.html | yes | no | yes | rAF | no | none | 3 |
| 05-prime-gaps.html | yes | no | yes | rAF | no | none | 3 |
| 06-diagonal-patterns.html | yes | no | yes | rAF | no | none | 3 |
| 07-modular-colors.html | yes | no | yes | rAF | no | none | 3 |
| 08-particle-spiral.html | yes | no | yes | rAF | no | none | 3 |
| 09-sieve-animation.html | yes | no | yes | rAF | no | none | 3 |
| 10-prime-density.html | yes | no | yes | rAF | no | none | 3 |
| 11-hexagonal-ulam.html | yes | no | yes | rAF | no | none | 3 |
| 12-sophie-germain.html | yes | no | yes | rAF | no | none | 3 |
| 13-3d-helix.html | yes | no | yes | rAF | no | none | 3 |
| 14-prime-constellations.html | yes | no | yes | rAF | no | none | 3 |
| 15-goldbach-spiral.html | yes | no | yes | rAF | no | none | 3 |
| 16-palindromic-primes.html | yes | no | yes | rAF | no | none | 3 |
| 17-morphing-spiral.html | yes | no | yes | rAF | no | none | 3 |
| 18-prime-factorization.html | yes | no | yes | rAF | no | none | 3 |
| 19-lucky-numbers.html | yes | no | yes | rAF | no | none | 3 |
| 20-prime-races.html | yes | no | yes | rAF | no | none | 3 |

**Notes:** Strong prime number visualization gallery. Files 01-03 fully enhanced. Files 04-20 all have resize and rAF but lack window.reset and backdrop-blur.

---

### 13. van-der-pol (1 file)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 5 |

**Notes:** Van der Pol oscillator with phase portrait and time series. Dual-panel layout. Pink/magenta theme. Adjustable damping parameter. All enhancements present.

---

### 14. virus-epidemic-models (21 files)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | n/a | yes | n/a | yes | none | 4 |
| 01-sir-spatial-basic.html | yes | yes | yes | rAF | yes | none | 4 |
| 02-sir-endemic-equilibrium.html | yes | yes | yes | rAF | yes | none | 4 |
| 03-sir-epidemic-extinction.html | yes | yes | yes | rAF | yes | none | 4 |
| 04-seir-spatial-model.html | yes | no | yes | rAF | no | none | 3 |
| 05-virus-random-network.html | yes | no | yes | rAF | no | none | 3 |
| 06-virus-scale-free-network.html | yes | no | yes | rAF | no | none | 3 |
| 07-virus-small-world-network.html | yes | no | yes | rAF | no | none | 3 |
| 08-virus-lattice-network.html | yes | no | yes | rAF | no | none | 3 |
| 09-network-topology-comparison.html | yes | no | yes | rAF | no | none | 3 |
| 10-behavioral-transmission.html | yes | no | yes | rAF | no | none | 3 |
| 11-testing-impact.html | yes | no | yes | rAF | no | none | 3 |
| 12-r0-calculator.html | yes | no | yes | rAF | no | none | 3 |
| 13-sis-model.html | yes | no | yes | rAF | no | none | 3 |
| 14-sirs-model.html | yes | no | yes | rAF | no | none | 3 |
| 15-quarantine-effect.html | yes | no | yes | rAF | no | none | 3 |
| 16-vaccination-strategy.html | yes | no | yes | rAF | no | none | 3 |
| 17-superspreader-events.html | yes | no | yes | rAF | no | none | 3 |
| 18-spatial-clustering.html | yes | no | yes | rAF | no | none | 3 |
| 19-multi-strain-competition.html | yes | no | yes | rAF | no | none | 3 |
| 20-contact-tracing.html | yes | no | yes | rAF | no | none | 3 |

**Notes:** Comprehensive epidemiological modeling gallery. Files 01-03 fully enhanced. Files 04-20 have resize and rAF but lack window.reset and panel blur. Good scientific content throughout.

---

### 15. visual-essays (4 files)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | n/a | n/a | n/a | no | none | 4 |
| computational-history.html | yes | no | yes | rAF | yes | none | 4 |
| computational-history-webgl.html | yes | no | yes | rAF | no | none | 4 |
| computational-history-original.html | yes | no | yes | rAF+SI | no | setInterval for timed reveals | 3 |

**Notes:**
- Gallery of visual essay variations on computational history
- Index uses organic-nature gallery template
- computational-history-original.html uses setInterval for timed content reveals (appropriate for scrolling essay format)
- No window.reset in any file (these are essay/article format, not simulations)
- computational-history.html has backdrop-blur on navigation elements

---

### 16. visualization-algorithms (32 files: 12 root + 20 in demos/)

#### Root-level files (12)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | n/a | n/a | n/a | yes | none | 4 |
| 26-seam-carving.html | yes | yes | yes | rAF | yes | none | 4 |
| 27-minkowski-sum.html | yes | yes | yes | rAF | yes | none | 4 |
| 28-floyd-steinberg.html | yes | yes | yes | rAF | yes | none | 4 |
| 29-de-casteljau.html | yes | no | no | SI | no | uses setInterval | 3 |
| 30-vector-clock.html | yes | no | no | none | no | none | 3 |
| 31-karger-mincut.html | yes | no | no | none | no | none | 3 |
| 32-catmull-rom.html | yes | no | yes | rAF | no | none | 3 |
| 32-laguerre-power-diagram.html | yes | no | yes | rAF | yes | duplicate numbering | 3 |
| 33-ammann-beenker.html | yes | no | no | none | no | none | 3 |
| 33-dinic-maxflow.html | yes | no | no | none | no | duplicate numbering | 3 |
| 34-steiner-chain.html | yes | no | no | none | no | none | 3 |

#### demos/ subfolder (20 files)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| 02-voronoi-animated.html | yes | no | yes | rAF | no | none | 3 |
| 06-delaunay-animated.html | yes | no | yes | rAF | no | none | 3 |
| 10-metaballs-colorful.html | yes | no | yes | rAF | no | none | 3 |
| 11-metaballs-mouse.html | yes | no | yes | rAF | no | none | 3 |
| 13-lorenz-attractor.html | yes | no | yes | rAF | yes | none | 4 |
| 14-rossler-attractor.html | yes | no | yes | rAF | yes | none | 4 |
| 15-aizawa-attractor.html | yes | no | yes | rAF | yes | none | 4 |
| 16-thomas-attractor.html | yes | no | yes | rAF | yes | none | 4 |
| 23-reaction-diffusion-coral.html | yes | no | yes | rAF | no | none | 3 |
| 25-marching-squares.html | yes | no | yes | rAF | no | none | 3 |
| 26-marching-squares-noise.html | yes | no | yes | rAF | no | none | 3 |
| 27-marching-squares-terrain.html | yes | no | yes | rAF | no | none | 3 |
| 28-marching-squares-blobs.html | yes | no | yes | rAF | no | none | 3 |
| 29-quadtree-points.html | yes | no | yes | none | no | none | 3 |
| 30-quadtree-collision.html | yes | no | yes | rAF | no | none | 3 |
| 32-quadtree-animated.html | yes | no | yes | rAF | no | none | 3 |
| 33-astar-pathfinding.html | yes | no | yes | rAF | no | none | 3 |
| 34-dijkstra-pathfinding.html | yes | no | yes | rAF | no | none | 3 |
| 35-bfs-pathfinding.html | yes | no | yes | rAF | no | none | 3 |
| 36-dfs-maze.html | yes | no | yes | rAF | no | none | 3 |

**Notes:**
- Duplicate file numbering: two files numbered 32, two numbered 33 (root level)
- 29-de-casteljau.html uses setInterval for animation (could be rAF)
- Root files 26-28 are fully enhanced with window.reset and backdrop-blur
- demos/ attractor files (13-16) have backdrop-blur on info panels
- Good algorithmic variety: Voronoi, Delaunay, metaballs, attractors, marching squares, quadtree, pathfinding

**Issues:**
- Duplicate file numbers (32-catmull-rom + 32-laguerre, 33-ammann-beenker + 33-dinic-maxflow)

---

### 17. visualizations (10 files: 1 root + 9 in demos/)

#### Root-level

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | n/a | n/a | n/a | yes | none | 4 |

#### demos/ subfolder (9 files)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| 01-particle-system.html | yes | yes | yes | rAF | yes | none | 4 |
| 02-wave-animation.html | yes | yes | yes | rAF | yes | none | 4 |
| 03-rotating-cube.html | yes | yes | yes | rAF | yes | none | 4 |
| 07-animated-clock.html | yes | no | yes | rAF | no | none | 3 |
| 08-fireworks.html | yes | no | yes | rAF+SI | no | setInterval for spawn timer | 3 |
| 09-matrix-rain.html | yes | no | yes | rAF+SI | no | setInterval for column timing | 3 |
| 11-network-graph.html | yes | no | yes | rAF | no | none | 3 |
| 13-audio-visualizer.html | yes | no | yes | rAF+SI | no | setInterval for frequency updates | 3 |
| 18-solar-system.html | yes | no | yes | rAF | no | none | 3 |

**Notes:**
- Files 01-03 fully enhanced with window.reset and backdrop-blur
- 08-fireworks, 09-matrix-rain, 13-audio-visualizer use setInterval alongside rAF (for spawn/timing purposes)
- Gallery index uses organic-nature theme

---

### 18. voronoi-delaunay (1 file)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | no | no | rAF | yes | none | 4 |

**Notes:** Comprehensive single-page multi-tab demo (1,142 lines). Features Voronoi diagrams, Delaunay triangulation, Fortune's algorithm, with tabs and interactive controls. Uses custom navigation CSS. Has backdrop-blur on info boxes. Complex and feature-rich but no window.reset or resize handler.

---

### 19. voting-ca (1 file)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | yes | yes | rAF | yes | none | 5 |

**Notes:** Voting/majority rules cellular automaton. Blue/navy theme. Population bar visualization, preset rules, adjustable states count. All enhancements present.

---

### 20. voting-systems (1 file)

| File | enhance.js | window.reset | resize | animation | panel-blur | issues | quality |
|------|-----------|-------------|--------|-----------|------------|--------|---------|
| index.html | yes | no | yes | rAF | yes | none | 4 |

**Notes:** Comprehensive voting systems comparison tool. 6 different voting methods (plurality, ranked choice, Borda, approval, Condorcet, score). Interactive candidate placement on 2D political spectrum. Grid layout with controls sidebar. Backdrop-blur on controls. No window.reset (complex stateful application).

---

## Quality Rating Distribution

| Rating | Count | Description |
|--------|-------|-------------|
| 5 | 7 | Fully polished, all enhancements, excellent UX |
| 4 | 42 | Good quality, most enhancements, polished UI |
| 3 | 170 | Functional, basic UI, missing some enhancements |
| 2 | 127 | Minimal UI, repetitive, missing many enhancements |

**Rating 5 files:** three-body-problem/index, totalistic-ca/index, traffic-simulation/index, triple-pendulum/index, turmites/index, van-der-pol/index, voting-ca/index

**Rating 2 files:** 100 threejs/constellation-* files, 27 tsl-shaders orbital-* files

---

## Key Issues Found

1. **Duplicate file numbering** in visualization-algorithms: two `32-*.html` and two `33-*.html` files at root level
2. **100 constellation files** in threejs/ are very similar variations with minimal differentiation and no panels/controls
3. **27 orbital files** in tsl-shaders/ (70-96) are minimal WebGPU demos with basic info divs only
4. **setInterval usage** in 7 files (timezone-tools/03, timezone-tools/05, visual-essays/computational-history-original, visualization-algorithms/29-de-casteljau, visualizations/demos/08-fireworks, visualizations/demos/09-matrix-rain, visualizations/demos/13-audio-visualizer) -- most are appropriate for their use case (timing, spawning) alongside rAF
5. **voronoi-delaunay** lacks resize handler despite being a canvas-based visualization
6. **window.reset missing** from 307/346 files (88.7%) -- only first 1-3 demos per gallery were enhanced

## Enhancement Priority Recommendations

### High Priority
1. **voronoi-delaunay/index.html** -- Add resize handler (canvas-based, single important file)
2. **threejs-tsl-shaders 01-40** -- Add window.reset to all demos
3. **tsl-shaders 01-17, 65-69** -- Add window.reset to named demos

### Medium Priority
4. **ulam-spirals 04-20** -- Add window.reset and backdrop-blur
5. **virus-epidemic-models 04-20** -- Add window.reset and backdrop-blur
6. **time-clocks 03-10** -- Add window.reset and backdrop-blur
7. **visualization-algorithms root 29-34** -- Add resize handlers and backdrop-blur
8. **visualizations/demos 07-18** -- Add window.reset and backdrop-blur

### Low Priority
9. **threejs constellation-001 to -100** -- Very repetitive files, minimal value from individual enhancement
10. **tsl-shaders orbital 70-96** -- Minimal files, requires WebGPU
11. Fix duplicate numbering in visualization-algorithms (cosmetic issue)
