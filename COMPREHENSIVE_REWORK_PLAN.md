# Comprehensive Rework Plan for CCAB

## Executive Summary
The Creative Code Art Browser (CCAB) is an ambitious project with a claimed catalog of 936 simulations. However, a deep audit reveals significant discrepancies between the catalog and the actual codebase. Over 200 broken links exist, primarily in `netlogo-simulations-2` (77 missing), `crazy-christmas` (17 missing), and `cosmology` (9 missing). The project lacks a unified architectural standard, leading to inconsistent UI/UX, redundant library imports, and scattered "placeholder" artifacts.

This plan outlines a 4-phase rework strategy to stabilize, standardize, and scale the platform.

---

## Phase 1: Stabilization & Cleanup (Immediate Action)
**Goal:** Eliminate broken user paths and "under construction" artifacts.

### 1.1 Fix Broken Galleries
*   **`netlogo-simulations-2/`**: This directory contains 77 broken links to non-existent HTML files (e.g., `032-food-web.html`).
    *   *Action:* Convert these list items in `index.html` to non-clickable "Coming Soon" cards or comment them out until implemented.
*   **`crazy-christmas/`**: Missing 17 demos (e.g., `12-cerberus-santa-hats.html`).
    *   *Action:* Remove links or mark as pending.
*   **`cosmology/`**: Missing 9 demos (e.g., `02-inflation.html`).
    *   *Action:* Mark as "Planned".

### 1.2 Remove Placeholders
*   **Search & Destroy**: Remove `<input>` fields with "placeholder" attributes found in `kennings/`, `l-systems/`, and `langtons-ant/` that appear to be copy-paste artifacts or unfinished UI.
*   **Clean `check_galleries.py` Output**: Address all "DISABLED ELEMENTS" and "PLACEHOLDER CONTENT" flagged in the audit.

### 1.3 Fix Redundancy
*   **Consolidate Libraries**: Audit `index.html` files for CDN links (p5.js, three.js).
    *   *Action:* Download standard versions to `assets/lib/` and update all demos to reference local copies. This improves offline capability and stability.

---

## Phase 2: Standardization (Architectural Rework)
**Goal:** Enforce a consistent developer and user experience.

### 2.1 The "Golden Standard" Demo Structure
Every demo must adhere to a strict template to ensure compatibility with the main browser.

**Directory Structure:**
```text
gallery-name/
├── index.html          # Gallery entry point (grid view)
├── metadata.json       # (NEW) Machine-readable catalog of contained demos
├── js/                 # Gallery-specific scripts
├── css/                # Gallery-specific styles
└── 01-demo-name.html   # Standalone demo file
```

**Demo File Template (`templates/std-demo.html`):**
*   **Header**: Standard navigation bar (Home > Gallery > Demo).
*   **Canvas**: Full-screen or centered canvas container with ID `#simulation-canvas`.
*   **Controls**: Collapsible control panel (dat.GUI or Tweakpane) on the right.
*   **Metadata**: `<meta name="description">` and `<title>` tags properly set.
*   **Footer**: Copyright and license info.

### 2.2 Shared Asset Pipeline
Create a centralized `assets/` directory structure:
*   `assets/css/style.css`: Global variables (colors, fonts) and reset.
*   `assets/js/utils.js`: Common math helpers (random, perlin noise, vector math) to reduce code duplication in individual demos.
*   `assets/lib/`: Vendor libraries (Three.js r128, p5.js v1.4, etc.).

### 2.3 Navigation Overhaul
*   **Main Index (`/index.html`)**: Rewrite to generate the grid dynamically from a master `galleries.json` registry instead of hardcoded HTML. This prevents "ghost" galleries.
*   **Gallery Indices**: Update all gallery `index.html` files to use a shared CSS grid layout. Currently, older galleries use table-based or float-based layouts while newer ones use Flexbox/Grid.

---

## Phase 3: Content Completion & Enhancement
**Goal:** Fulfill the promise of `SIMULATION_CATALOG.md`.

### 3.1 Priority Implementation List
Based on the `SIMULATION_CATALOG.md` vs. Reality audit, prioritize implementing:
1.  **Cosmology**: High educational value. Implement `02-inflation.html` using basic canvas particles.
2.  **NetLogo Conversions**: The `netlogo-simulations-2` gap is huge. Implement a generic "GridAgent" class in JS to port these rapidly.
3.  **Crazy Christmas**: Low priority, seasonal. Can be hidden for now.

### 3.2 "Modernization" Pass
Select the top 20 most visited/prominent demos (e.g., `boids`, `game-of-life`) and:
*   Add mobile touch support.
*   Implement Dark Mode support (via `prefers-color-scheme`).
*   Add "Pause/Reset" buttons to all simulations (many currently lack this).

---

## Phase 4: Automation & Quality Assurance
**Goal:** Prevent regression.

### 4.1 CI/CD Pipeline Checks
*   **Link Checker**: Run an enhanced `check_galleries.py` on every commit. Fail build if new broken links are introduced.
*   **Linter**: Add ESLint configuration for the root directory to catch syntax errors in JS files.

### 4.2 Automated Thumbnails
*   Create a script (`scripts/generate_thumbnails.js`) using Puppeteer/Playwright to open every demo, wait 2 seconds, take a screenshot, and save it to `assets/thumbnails/`. This replaces broken or missing images in the gallery grids.

### 4.3 Documentation
*   **`CONTRIBUTING.md`**: Update with the new "Golden Standard" for creating demos.
*   **`AGENTS.md`**: Update to reflect the new architecture so AI agents can navigate the repo effectively.

---

## Estimated Timeline
*   **Week 1**: Phase 1 (Cleanup) - *High Priority*
*   **Week 2**: Phase 2 (Standardization - Architecture & Templates)
*   **Week 3**: Phase 2 (Standardization - Migration of top 10 galleries)
*   **Week 4+**: Phase 3 (Content Implementation)

## Next Steps
1.  Approve this plan.
2.  Execute **Phase 1.1** (Fix broken links in `netlogo-simulations-2` and `cosmology`).
3.  Execute **Phase 1.3** (Centralize `assets/lib/`).
