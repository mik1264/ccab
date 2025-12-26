# Reddit Visualization Implementation Plan

**Based on:** REDDIT_VISUALIZATION_RESEARCH.md
**Date:** December 2025
**Goal:** Implement top missing visualizations from Reddit research

---

## Gap Analysis

### Already Implemented in CCAB

| Visualization | Gallery | Status |
|---------------|---------|--------|
| Lorenz Attractor | chaos-attractors | ✅ Complete |
| Clifford Attractor | chaos-attractors | ✅ Complete |
| Double Pendulum | chaos-attractors | ✅ Complete |
| Spirograph | mathematical-art | ✅ Complete |
| Harmonograph | mathematical-art | ✅ Complete |
| Fourier Epicycles | mathematical-art | ✅ Complete |
| Moiré Patterns | optical-illusions | ✅ Complete |
| Voronoi/Delaunay | voronoi-delaunay | ✅ Complete |
| Boids Flocking | boids-flocking | ✅ Complete |
| L-Systems | l-systems | ✅ Complete |
| Mandelbrot/Julia | mandelbrot-julia | ✅ Complete |
| DLA Fractals | dla-fractals | ✅ Complete |
| Sorting Algorithms | visualization-algorithms | ✅ Partial |
| Pathfinding | pathfinding | ✅ Complete |
| FFT Audio | web-audio-api | ✅ Complete |
| Raymarching | ray-marching | ✅ Complete |
| Flow Fields | emergent-behaviors | ✅ Partial |
| Perlin Terrain | procedural-terrain | ✅ Complete |

### Missing High-Priority Visualizations

| # | Visualization | Priority | Est. Time | Notes |
|---|---------------|----------|-----------|-------|
| 1 | **Physarum Slime Mold** | ★★★★★ | 3-4 hours | Agent-based, very popular |
| 2 | **Cyclic Cellular Automata** | ★★★★★ | 1-2 hours | Beautiful spirals |
| 3 | **Bar Chart Race** | ★★★★ | 2-3 hours | D3.js animated racing bars |
| 4 | **Jos Stam Fluid** | ★★★★ | 3-4 hours | Interactive smoke |
| 5 | **Galaxy Formation** | ★★★★ | 2-3 hours | N-body spiral galaxy |
| 6 | **Wireworld CA** | ★★★ | 1-2 hours | Logic gates simulation |
| 7 | **3D Boids (Three.js)** | ★★★ | 2-3 hours | Enhanced boids |
| 8 | **Magnetic Field Lines** | ★★★ | 1-2 hours | Iron filings effect |

---

## Phase 1: Quick Wins (This Session)

### 1.1 Physarum Slime Mold Simulation

**File:** `simulations/physarum-slime/index.html`

**Algorithm:**
1. Create N agents with position, heading
2. Each step:
   - Sense: Sample environment at 3 sensor positions (ahead-left, ahead, ahead-right)
   - Rotate: Turn toward strongest signal
   - Move: Step forward
   - Deposit: Leave trail at current position
3. Diffuse and decay trail map

**Visual Appeal:** Organic network growth, similar to r/generative favorites

### 1.2 Cyclic Cellular Automata

**File:** `emergent-behaviors/cyclic-ca.html`

**Algorithm:**
1. Grid of cells, each with state 0 to N-1
2. Cell advances state if neighbor has next state
3. Creates spiral patterns

**Visual Appeal:** Hypnotic spiraling colors

### 1.3 Bar Chart Race

**File:** `d3js/bar-chart-race.html`

**Algorithm:**
1. Load time-series data
2. Animate bars reordering over time
3. Show rank changes with smooth transitions

**Visual Appeal:** Viral format from r/dataisbeautiful

---

## Phase 2: Medium Effort (Future Session)

### 2.1 Jos Stam Fluid Solver

**File:** `simulations/fluid-simulation/index.html`

**Algorithm:**
1. Velocity field advection
2. Diffusion
3. Project (make divergence-free)
4. Apply external forces (mouse input)

### 2.2 Galaxy Formation

**File:** `gravity-orbits/galaxy-formation.html`

**Algorithm:**
1. N-body with thousands of particles
2. Initial conditions for spiral arm formation
3. Barnes-Hut optimization for performance

---

## Implementation: Physarum Slime Mold

### Complete Implementation

```html
<!--
# Physarum Slime Mold Simulation

## Goal
Simulate the behavior of Physarum polycephalum slime mold,
demonstrating emergent network formation from simple agent rules.

## Algorithm
Agents sense, rotate, move, and deposit pheromones on a trail map.
The trail diffuses and decays over time, creating organic patterns.

## Educational Value
- Emergent behavior from simple rules
- Biological inspiration for optimization algorithms
- Network formation and self-organization
-->
```

---

## Implementation Order

1. **Physarum Slime Mold** - Highest impact, very popular
2. **Cyclic Cellular Automata** - Quick to implement, beautiful
3. **Bar Chart Race** - Viral format, extends D3 gallery
4. **Jos Stam Fluid** - Interactive, mesmerizing
5. **Galaxy Formation** - Extends gravity gallery

---

## Success Metrics

- [ ] Each demo loads without errors
- [ ] 60 FPS performance on desktop
- [ ] Interactive controls where applicable
- [ ] Educational description included
- [ ] Back navigation to gallery
- [ ] Mobile-responsive layout

---

## Files to Create

1. `/home/user/ccab/simulations/physarum-slime/index.html`
2. `/home/user/ccab/emergent-behaviors/cyclic-ca.html`
3. `/home/user/ccab/d3js/bar-chart-race/index.html`

---

*Plan created December 2025 based on Reddit research*
