# The Big Refactor Map

## Executive Summary
This document outlines the strategy for standardizing the 4,000+ HTML files in the CCAB project. The goal is to move from a fragmented collection of demos to a unified, maintainable, and offline-capable platform.

**Total Files Analyzed:** ~4235 HTML files
**Key Findings:**
*   **15% (644 files)** rely on external CDNs (Three.js, p5.js), breaking offline functionality.
*   **~9% (390 files)** have massive inline scripts (>500 lines) that should be externalized.
*   **~7% (300 files)** lack basic mobile responsiveness (viewport tags).
*   **UI Inconsistency:** A mix of ancient table layouts and modern flexbox grids.

---

## Refactor Groups

### Group A: The "Offline First" Migration (Priority: High)
**Target:** ~170 files using external CDNs.
**Goal:** Replace all CDN links with references to `../assets/lib/`.

| Library | Count | Current Versions | Target Version |
|---------|-------|------------------|----------------|
| **Three.js** | ~150 | r128, r149, r170 | **r128** (Stable baseline) |
| **p5.js** | ~20 | 1.7.0 | **1.9.0** (Latest) |
| **D3.js** | ~10 | v4, v7 | **v7** |

**Action Items:**
1.  Download standard versions to `assets/lib/three.min.js`, `assets/lib/p5.min.js`, etc.
2.  Run a regex replace script to update `<script src="https://...">` to `<script src="../assets/lib/...">`.

### Group B: The "Mobile Ready" Fix (Priority: Medium)
**Target:** ~300 files (mostly older galleries like `surprising-paradoxes`, `walther-calculators`).
**Goal:** Ensure every page is readable on mobile.

**Missing Elements:**
*   `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
*   CSS Media Queries for canvas resizing.

**Action Items:**
1.  Inject the standard viewport meta tag into the `<head>` of every file missing it.
2.  Inject a standard CSS block for canvas responsiveness:
    ```css
    canvas { max-width: 100%; height: auto; touch-action: none; }
    ```

### Group C: The "Code Hygiene" Split (Priority: Low)
**Target:** 390 files with massive inline scripts.
**Goal:** Separate logic from presentation.

**Problem:** Files like `netlogo-simulations-2/001-genetic-drift.html` likely contain the entire simulation engine inline.
**Strategy:**
1.  Identify blocks between `<script>...</script>` that exceed 200 lines.
2.  Extract them to `js/001-genetic-drift.js`.
3.  Update HTML to `<script src="js/001-genetic-drift.js"></script>`.

### Group D: UI Standardization (Priority: Long-term)
**Target:** ~1000 files using legacy layouts.
**Goal:** Unified "Shell" for controls and navigation.

**Current State:**
*   **Legacy:** `<table>` based layouts for controls.
*   **Modern:** `display: flex` with custom sidebars.
*   **Raw:** Canvas with no UI.

**Target State:**
*   Adopt the **Cosmology Template** (`demo-template.html`) as the universal shell:
    *   Fixed sidebar for controls (`#panel`).
    *   Full-screen canvas (`#canvas`).
    *   Standardized "Back" button (`.back-link`).

---

## Execution Plan

### Phase 1: Infrastructure & Offline Capability (Week 1)
**Objective:** Ensure all demos work without an internet connection.
*   [x] **Setup:** Create `assets/lib/` and download core libraries (Three.js r128, p5.js v1.9.0, D3.js v7).
*   [ ] **Script:** Develop `scripts/migrate_cdns.py`.
    *   *Logic:* Regex match `src="https://.../three.min.js"` -> replace with `src="../assets/lib/three.min.js"`. Handle relative path depth automatically.
*   [ ] **Execution:** Run migration script on all 4000+ files.
*   [ ] **Validation:** Disconnect network and run `test_all_demos.py` (headless browser check) to ensure no 404s on script loads.

### Phase 2: Accessibility & Mobile (Week 1-2)
**Objective:** Make the library playable on phones and tablets.
*   [ ] **Script:** Develop `scripts/inject_viewport.py`.
    *   *Logic:* Parse HTML, check for `<meta name="viewport">`. If missing, insert it after `<head>`.
*   [ ] **Style Injection:** Append a standard CSS block to `<head>` in the same script:
    ```css
    <style>canvas { max-width: 100%; height: auto; touch-action: none; }</style>
    ```
*   [ ] **Validation:** specific check on `netlogo-simulations-2` and `surprising-paradoxes` galleries using mobile user-agent emulation.

### Phase 3: Engine Extraction (Week 3+)
**Objective:** Improve maintainability by separating logic from views.
*   [ ] **Pilot:** Manually extract the 5 largest inline scripts in `netlogo-simulations-2` to establish a pattern (`js/<demo-name>.js`).
*   [ ] **Script:** Develop `scripts/extract_inline_js.py`.
    *   *Logic:* Find `<script>` tags > 500 lines. Extract content to new file. Replace tag with `src`.
*   [ ] **Validation:** Manual review of the first 20 extracted files to ensure variable scope isn't broken (e.g., global variables no longer being global).

### Phase 4: UI Unification (Ongoing)
**Objective:** Apply the "Cosmology Standard" UI to all galleries.
*   **Batch 1: NetLogo Simulations (High Value)**
    *   Target: `netlogo-simulations-2/`.
    *   Action: These already use a decent flex layout but need the standard "Controls" sidebar standardized.
*   **Batch 2: Physics & Math (High Traffic)**
    *   Target: `physics-simulations/`, `chaos-attractors/`.
    *   Action: Convert from raw canvas/table layouts to the `demo-template.html` structure.
*   **Batch 3: Legacy Galleries**
    *   Target: `walther-calculators/`, `surprising-paradoxes/`.
    *   Action: Full rewrite of HTML structure required.
*   **Validation:** Visual regression testing (screenshot comparison) before/after for key demos.
