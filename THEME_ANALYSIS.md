# Common Themes & Missing Themes (Demo Slice)

This report summarizes **common themes** and **missing themes** across the **first 2,000 HTML demos** in this repo, using the file lists `first_1000_html.txt` and `second_1000_html.txt`. Findings are based on lightweight static heuristics (keywords/patterns in HTML/JS), so treat counts as directional rather than definitive.

## What This Slice Looks Like

### Dominant “gallery” themes (by top-level directory frequency)
This slice is heavily skewed toward a few directories:
- `netlogo-simulations-2/` (256), `threejs/` (131), `screensaver-patterns/` (101)
- `emergent-behaviors/` (93), `physics-simulations/` (79), `biological-simulations/` (56)
- `orbital-flythroughs/` (52), `music-sequencers/` (51), `web-audio-api/` (49)
- `gravity-orbits/` (46), `simulations/` (45)

### Technology themes (inferred)
Across 2,000 demos:
- **Canvas 2D dominates**: 1,390 demos (~69.5%).
- Smaller slices: **Three.js** 173 (~8.7%), **Web Audio** 106 (~5.3%), **WebGL/GLSL** 67 (~3.4%).
- Rare in this slice: **D3** 36 (~1.8%), **P5** 19 (~0.9%), **WebGPU** 13 (~0.7%), **SVG-only** 11 (~0.6%).

## Common Themes (What Shows Up A Lot)

### Subject-matter motifs (from filenames/titles)
High-frequency keywords suggest recurring content motifs:
- **Generative “screensaver” patterning**: *patterns*, *screensaver*, *constellation*, *fractal*, *spiral*.
- **Particle-centric visuals**: *particle*, *flow*, *wave* (often particle fields, advection, or wave-driven motion).
- **Emergence + complex systems**: *boids*, *ant*, *cellular*, *network*, *evolution*, *distribution*.
- **Science/education framing**: *model*, *dynamics*, *science*, *quantum*, plus explicit “gallery” framing in titles.

### Interaction patterns
Interactive controls are common, but mostly “hand-rolled”:
- `<button>` appears in 1,233 demos (~61.7%).
- `<input type="range">` appears in 782 demos (~39.1%).
- `<select>` appears in 151 demos (~7.5%).
- No usage detected (in this slice) of common control libraries like `dat.gui`, `lil-gui`, or `tweakpane`.

### Animation & responsiveness conventions
The baseline engineering posture is consistent with real-time visuals:
- `requestAnimationFrame` is present in 1,624 demos (~81.2%).
- A `resize` listener is present in 1,149 demos (~57.5%).
- Most canvas-based demos create a `<canvas>` (1,597; ~79.8%) and call `getContext('2d')` (1,513; ~75.6%).

## Missing Themes (What’s Systematically Thin)

### Accessibility is largely absent
In this 2,000-demo slice:
- `prefers-reduced-motion` appears in **1 demo** (~0.1%).
- `aria-*` appears in **2 demos** (~0.1%).
- Explicit seizure/photosensitivity warnings appear in **5 demos** (~0.2%).

Interpretation: many demos likely *work*, but few systematically support reduced motion, assistive tech semantics, or risk disclosures. Given that the project’s templates and contributing docs call these out, this is the largest cross-cutting “missing theme”.

### Template “demo chrome” adoption is low
Markers that typically come from the templates are rare:
- “Loading/error overlay” markers in 46 demos (~2.3%).
- Linking to `assets/css/navigation.css` in 27 demos (~1.4%).
- `type="module"` in 32 demos (~1.6%); importmaps in 20 demos (~1.0%).

Interpretation: the repo has strong templates (`templates/`) and a design system (`assets/css/navigation.css`), but the median demo in this slice appears to be a bespoke, older, or externally sourced HTML file that didn’t inherit the standard scaffolding.

### Operational hardening (errors, cleanup, DPI) is inconsistent
Signals for robust runtime behavior are extremely sparse:
- `window.addEventListener('error', …)` appears in **3 demos** (~0.1%).
- Unload cleanup patterns appear in **1 demo** (~0.1%).
- Pixel-ratio guards (`devicePixelRatio`, `setPixelRatio`, `pixelDensity`) appear in 225 demos (~11.2%).

Interpretation: many demos likely run fine in the happy path, but fewer anticipate CDN failures, WebGL context loss, runtime exceptions, or long-lived tab behavior. High-DPI handling appears underused, which can cause either blurriness (no DPR scaling) or unnecessary work (unbounded DPR).

### Input modality diversity is limited
Despite many demos being interactive via sliders/buttons, explicit multi-input support is rare:
- Keyboard event listeners appear in 23 demos (~1.1%).
- Touch/pointer handlers appear in 25 demos (~1.2%).

Interpretation: interaction is frequently mouse-centric UI widgets rather than keyboard/touch-first controls, which impacts accessibility and mobile UX.

### Reproducibility and sharing are uncommon
If you value “scientific demo” ergonomics, these themes are thin:
- Seed/rng mentions appear in 67 demos (~3.4%).
- Export/download hooks appear in 40 demos (~2.0%).
- Screenshot APIs appear in 6 demos (~0.3%).

## Recommendations (High-Leverage Fixes)
1. **Define a minimum “demo contract”.** Standardize the smallest set of required features (back link, loading/error UI, reduced-motion handling, basic keyboard focus order). Enforce it for new demos; add a “best effort” retrofit path for existing demos.
2. **Automate retrofits.** Create a script that can inject a shared back-link + minimal CSS + reduced-motion toggle into demos that meet simple structural checks, similar to how NetLogo demos were batch-augmented.
3. **Improve hardening by default.** Adopt template-style error boundaries and cleanup hooks, plus a consistent pixel-ratio policy (cap DPR; scale canvas intentionally). This is the easiest way to improve stability without rewriting demo logic.
4. **Make interaction more inclusive.** When demos have start/pause/step controls, bind them to keyboard shortcuts and add visible focus styles; prefer pointer events over mouse-only listeners.
5. **Add reproducibility affordances.** Where randomness drives visuals, add an explicit seed input and a “copy link with seed” pattern so results can be shared and debugged.

## Relationship to `DEMO_ANALYSIS.md`
This report is an aggregated view of the same demo slice covered by `DEMO_ANALYSIS.md` (which contains per-file notes). Use this to pick broad refactors; use `DEMO_ANALYSIS.md` to locate specific candidates.
