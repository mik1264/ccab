# Content Completion & Enhancement Plan

## Overview
This document expands on "Section 3" of the master rework plan. It details the specific algorithms, libraries, and design patterns required to fill the content gaps in the CCAB project. Our primary focus is on the **Cosmology** gallery (scientific accuracy), the **NetLogo** archive (agent-based modeling logic), and the **Crazy Christmas** collection (seasonal engagement).

---

## Chapter 1: The Cosmology Suite
**Goal:** Visualize the history of the universe from the Big Bang to the present day. These simulations require a balance between scientific accuracy and visual abstraction.

### 1.1 Cosmic Inflation (`02-inflation.html`)
*   **Concept:** Visualize the exponential expansion of space in the first fraction of a second.
*   **Visuals:** Start with a dense, chaotic quantum foam (particle system) that suddenly expands outward at superluminal speeds, smoothing out irregularities.
*   **Tech Stack:** p5.js (2D/3D).
*   **Key Mechanics:**
    *   **Phase 1 (Quantum Fluctuations):** High-frequency noise/jitter of particles in a small radius.
    *   **Phase 2 (Inflation):** Rapid scaling of the coordinate system (`scale(t)` where `t` grows exponentially). Particles move apart, but their local configuration remains "frozen".
    *   **Phase 3 (Reheating):** Decay of the "inflaton field" into standard particles (hot plasma), represented by a color shift to bright orange/white.

### 1.2 Big Bang Nucleosynthesis (`03-nucleosynthesis.html`)
*   **Concept:** The formation of the first protons and neutrons, then helium and lithium nuclei.
*   **Visuals:** fast-moving particles (protons/neutrons) colliding.
*   **Tech Stack:** Canvas 2D (Kinetic Theory simulation).
*   **Key Mechanics:**
    *   **Temperature:** Controls particle velocity. As simulation time passes, temperature drops.
    *   **Fusion Rules:**
        *   `p + n -> D` (Deuterium)
        *   `D + D -> He3 + n`
        *   `He3 + D -> He4 + p`
    *   **Outcome:** A final ratio graph showing ~75% Hydrogen, ~25% Helium.

### 1.3 Baryon Acoustic Oscillations (`08-bao.html`)
*   **Concept:** Sound waves propagating through the early universe plasma, freezing into "rings" of galaxy density.
*   **Visuals:** A 3D view of galaxy distribution showing subtle spherical shells of higher density.
*   **Tech Stack:** Three.js (PointsMaterial).
*   **Key Mechanics:**
    *   **Seed:** Random distribution of points.
    *   **Ripple:** For every high-density point, create a faint "shell" of points at a fixed radius (the sound horizon).
    *   **Camera:** Fly-through controls to see the density structures.

---

## Chapter 2: The NetLogo Migration
**Goal:** Create a unified JavaScript "Agent-Based Model" (ABM) engine to rapidly port the 70+ missing NetLogo simulations.

### 2.1 The `GridAgent` Engine
Instead of writing custom code for every simulation, we will build a reusable class structure.

```javascript
class SimulationWorld {
    constructor(width, height, patchSize) {
        this.patches = []; // 2D array of Patch objects
        this.agents = [];  // List of mobile Agent objects
        this.ticks = 0;
    }
    
    setup() { /* Init grid and agents */ }
    go() { /* Execute one tick of logic */ }
}

class Agent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 100;
        this.heading = Math.random() * 360;
    }
    
    move(speed) { /* Standard NetLogo "fd 1" logic */ }
    turn(angle) { /* Standard NetLogo "rt/lt" logic */ }
}
```

### 2.2 Wolf Sheep Predation (`wolf-sheep-predation/`)
*   **Logic:**
    *   **Move:** Wolves and sheep move randomly each tick.
    *   **Eat:** Wolves eat sheep on the same patch (gain energy). Sheep eat grass (gain energy).
    *   **Die:** Energy < 0 removes agent.
    *   **Reproduce:** Chance to clone if energy > threshold.
*   **UI Controls:** Sliders for `initial-number-sheep`, `sheep-gain-from-food`, `wolf-reproduce-chance`.

### 2.3 Schelling Segregation (`053-segregation.html`)
*   **Logic:**
    *   **Happiness:** An agent is happy if `X%` of neighbors match its color.
    *   **Movement:** If unhappy, move to a random empty spot.
*   **Visuals:** Grid of Red/Blue squares. Watch distinct clusters form over time.

---

## Chapter 3: Interactive Christmas
**Goal:** Revive the "Crazy Christmas" gallery with 17 whimsical, seasonal demos. These are low-complexity, high-visual-impact visualizations.

### 3.1 Mythology Meets Holidays
The concept is mixing Greek Mythology with Christmas tropes.

*   **Cerberus Santa Hats (`12-cerberus-santa-hats.html`):**
    *   **Visual:** A 3-headed dog sprite.
    *   **Interaction:** User drags Santa hats onto each head. If you miss, the head growls (screenshake).
*   **Medusa Snow Sculptures (`13-medusa-snow-sculptures.html`):**
    *   **Visual:** Medusa in a winter landscape.
    *   **Mechanic:** Snowmen move towards her. When she looks at them (mouse cursor), they turn to ice statues.
*   **Icarus Star Flight (`15-icarus-christmas-star.html`):**
    *   **Visual:** Side-scroller flappy-bird style.
    *   **Mechanic:** Fly Icarus towards the Christmas Star (Sun). Don't get too close or wax wings melt (physics gravity increases).

---

## Chapter 4: Modernization & UX
**Goal:** Ensure all new and existing demos feel professional and accessible.

### 4.1 The Standard UI Shell
Every demo file should implement:
*   **Responsive Canvas:**
    ```javascript
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    ```
*   **Controls:** Use `tweakpane` or `dat.GUI` for all parameters. Do not build custom HTML sliders unless necessary.
*   **Pause/Resume:** Spacebar toggle loop.

### 4.2 Accessibility (a11y)
*   **Canvas Fallback:** `<canvas>Your browser does not support canvas. Description of simulation: ...</canvas>`
*   **Contrast:** Ensure text overlay on canvas has high contrast (add semi-transparent background behind text).
*   **Motion Sensitivity:** Respect `prefers-reduced-motion`. If true, disable auto-rotation or flashing effects.

---

## Chapter 5: Implementation Roadmap

| Phase | Duration | Focus | Key Deliverables |
|-------|----------|-------|------------------|
| **1** | Week 1 | **Architecture** | Build `GridAgent` engine, Standard UI Template. |
| **2** | Week 2 | **Cosmology** | Implement Inflation, Nucleosynthesis, BAO. |
| **3** | Week 3 | **NetLogo** | Port Wolf-Sheep, Segregation, Fire, Disease. |
| **4** | Week 4 | **Christmas** | Implement top 5 "Crazy Christmas" demos. |
| **5** | Week 5 | **Polish** | Mobile testing, Thumbnail generation, Linting. |
