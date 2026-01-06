# CCAB Directory Structure Analysis & Cleanup Plan

**Generated:** 2025-01-05
**Project:** CCAB (Claude Code and Algorithmic Beauty)
**Scope:** 3,774 HTML demos across 189 directories

---

## Executive Summary

Analysis of the CCAB project reveals significant structural issues requiring cleanup. This document details findings and recommended actions.

---

## Key Findings

### Critical Issues

| Issue | Count | Impact |
|-------|-------|--------|
| Empty directories | 4 | Clutter, confusion |
| Directory named with `.md` extension | 1 | Critical structural issue |
| Galleries not in main index | 76 | 1,000+ demos undiscoverable |
| Unlinked demos within galleries | 101+ | 75% of threejs gallery invisible |
| Generated temp files | 2 | Should be gitignored |
| Incomplete gallery (stub) | 1 | earth-space/ has no demos |

### Moderate Issues

| Issue | Count | Impact |
|-------|-------|--------|
| Duplicate/redundant galleries | 2-3 sets | Navigation confusion |
| Excessive root-level markdown files | 29 | Clutter |
| Test result JSON files | 3 | Should be gitignored |
| Untracked valuable documentation | 5 | Should be committed |

---

## Directory Structure Overview

### Statistics
- **Total top-level items:** 237
- **Total directories:** 189 gallery categories
- **Total HTML files:** 3,774
- **Top-level files:** 55

### Gallery Distribution

| Category | Directories | Notes |
|----------|-------------|-------|
| Original Core | 6 | algorithmic-art, game-of-life, etc. |
| Framework-based | 10+ | threejs, d3js, p5, pixi, webgl, etc. |
| Simulation | 50+ | physics, biology, chaos, social |
| NetLogo | 3 | 1,429 demos total |
| New (untracked) | 6 | advanced-cs-ai, quantum-relativity, etc. |

---

## Phase 1: Critical Cleanup

### 1.1 Remove Empty Directories

These directories contain no files:

```
acoustics-signal/
art-experimental/
math-geometry/
social-science/
```

### 1.2 Fix Misnamed Directory

**Problem:** `completed.md/` is a directory with a `.md` extension (misleading)

**Contents:**
- NetLogo-Simulation-2-205.md
- RESEARCH_TODO.md
- SIMULATIONS_PLAN_100.md
- TODO.md

**Action:** Rename to `completed-work/`

### 1.3 Handle Generated Files

**Add to .gitignore:**
```
_repo_wordset.txt
all_html_files.txt
test_results*.json
```

**Delete (can regenerate):**
```
_repo_wordset.txt (87K)
all_html_files.txt (176K)
```

### 1.4 Incomplete Stub Gallery

**Directory:** `earth-space/`
**Status:** Has index.html only, no demo files

**Planned demos (topics 51-60):**
- 51-seismic-waves.html
- 52-plate-tectonics.html
- 53-coriolis-effect.html
- 54-milankovitch-cycles.html
- 55-exoplanet-transit.html
- 56-magnetosphere.html
- 57-greenhouse-effect.html
- 58-ocean-currents.html
- 59-aurora.html
- 60-tidal-forces.html

---

## Phase 2: Index Linkage Issues

### 2.1 New Galleries Not in Main Index

These 6 complete galleries exist but aren't linked from `index.html`:

| Gallery | Demos | Topics |
|---------|-------|--------|
| advanced-cs-ai/ | 10 | Transformer Attention, Raft Consensus, GC, B-Tree, etc. |
| quantum-relativity/ | 10 | Special Relativity, Lorentz, QKD, Bloch Sphere, etc. |
| engineering-robotics/ | 10 | IK Solver, PID, Truss Bridge, Gear Ratios, etc. |
| biology-medicine/ | 10 | CRISPR, Action Potential, Antibodies, etc. |
| chemistry-materials/ | 10 | Lennard-Jones, Chirality, Electrolysis, etc. |
| earth-space/ | 0 (stub) | Needs completion |

### 2.2 Orphaned Galleries (76 directories)

Directories with content but not linked from main index:

**High-priority (known valid):**
- p5-generative-art/ (16+ demos)
- ml-visualizations/ (20+ demos)
- netlogo-simulations-3/ (1,057 demos)

**Other orphaned directories:**
acoustic-signal, ant-colony-optimization, apollonian-gasket, barnsley-fern, bifurcation-diagrams, binary-tree-traversal, black-hole-lensing, bouncing-balls, burning-ship, chua-circuit, classical-ciphers, cloth-simulation, convex-hull, cosmology, coupled-oscillators, crazy-christmas, cyclic-ca, dragon-curve, duffing-oscillator, electromagnetic-fields, epidemic-model, evolution-of-trust, evolutionary-walkers, fire-smoke-simulation, flip-fluid, galaxy-collision, heat-equation, jansen-linkage, larger-than-life, lattice-boltzmann, lenia, lyapunov-exponent, magnetic-pendulum, marching-cubes, maze-generation, menger-sponge, mnca, modern-cryptography, newton-fractals, physarum-simulation, projectile-motion, rigid-body-collision, rope-chain-physics, smoke-simulation, smoothlife, soft-body-physics, sorting-algorithms, space-filling-curves, sph-water, spring-mass-systems, three-body-problem, totalistic-ca, traffic-simulation, tragedy-commons, triple-pendulum, turmites, van-der-pol, voting-ca, voting-systems, wave-equation, webgpu, wireworld

### 2.3 Gallery Index Inconsistencies

**Critical Example: threejs/**
- Actual HTML files: **135**
- Linked in index.html: **34**
- Missing links: **101 demos (75% invisible)**

**Other galleries need similar audit.**

---

## Phase 3: Documentation Reorganization

### 3.1 Current State

29 markdown files at root level:

**Project docs:** CLAUDE.md, AGENTS.md, README.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md

**Analysis docs:** CODEBASE_ANALYSIS.md, THEME_ANALYSIS.md, DUPLICATE_ANALYSIS.md, GALLERY_AUDIT_SUMMARY.md, PHILOSOPHICAL_ANALYSIS.md

**Roadmaps:** NEXT_STEPS.md, SIMULATIONS_ROADMAP.md, SIMULATIONS_QUICK_GUIDE.md, NEW_DEMO_IDEAS.md, NEW_DEMO_IDEAS_100.md, WHAT_TO_DO_NEXT.md, NAVIGATION_RESTRUCTURING_PLAN.md

**Implementation:** IMPLEMENTATION_STATUS.md, IMPROVEMENTS.md, REDDIT_TOP_100_SIMULATIONS.md, SIMULATION_CATALOG.md, SIMULATION_TOPICS.md

**NetLogo:** NetLogo-Simulations.md, NetLogo-Simulations-TODO.md, NetLogo-Simulation-3-1000.md

**Legal:** PRIVACY.md, TERMS.md, DMCA.md

### 3.2 Proposed Structure

```
docs/
├── project/
│   ├── AGENTS.md
│   ├── CONTRIBUTING.md
│   └── CODE_OF_CONDUCT.md
├── analysis/
│   ├── CODEBASE_ANALYSIS.md
│   ├── THEME_ANALYSIS.md
│   ├── DUPLICATE_ANALYSIS.md
│   ├── GALLERY_AUDIT_SUMMARY.md
│   └── PHILOSOPHICAL_ANALYSIS.md
├── roadmaps/
│   ├── NEXT_STEPS.md
│   ├── SIMULATIONS_ROADMAP.md
│   ├── SIMULATIONS_QUICK_GUIDE.md
│   ├── NEW_DEMO_IDEAS.md
│   ├── NEW_DEMO_IDEAS_100.md
│   ├── WHAT_TO_DO_NEXT.md
│   └── NAVIGATION_RESTRUCTURING_PLAN.md
├── implementation/
│   ├── IMPLEMENTATION_STATUS.md
│   ├── IMPROVEMENTS.md
│   ├── REDDIT_TOP_100_SIMULATIONS.md
│   ├── SIMULATION_CATALOG.md
│   └── SIMULATION_TOPICS.md
├── netlogo/
│   ├── NetLogo-Simulations.md
│   ├── NetLogo-Simulations-TODO.md
│   └── NetLogo-Simulation-3-1000.md
├── legal/
│   ├── PRIVACY.md
│   ├── TERMS.md
│   └── DMCA.md
└── completed-work/
    ├── NetLogo-Simulation-2-205.md
    ├── RESEARCH_TODO.md
    ├── SIMULATIONS_PLAN_100.md
    └── TODO.md

KEEP AT ROOT:
- CLAUDE.md (required by Claude Code)
- README.md (standard repo entry point)
- EDUCATIONAL_GALLERY_RECIPE.md (template reference)
```

---

## Phase 4: Duplicate/Redundant Galleries

### 4.1 NetLogo Simulations (3 separate galleries)

| Gallery | Files | Description |
|---------|-------|-------------|
| netlogo-simulations/ | 116 | Original collection |
| netlogo-simulations-2/ | 256 | Extended collection |
| netlogo-simulations-3/ | 1,057 | Comprehensive (40% of all demos) |

**Issue:** Unclear organizational principle, poor naming

**Options:**
- Rename for clarity (netlogo-basic, netlogo-advanced, netlogo-comprehensive)
- Merge into single mega-gallery with subcategories
- Keep as-is but document the distinction

### 4.2 Cosmology Galleries

| Gallery | Files |
|---------|-------|
| cosmology/ | 23 |
| cosmology-universe/ | 23 |

**Issue:** Near-identical names, unclear differentiation

### 4.3 Numbering Collisions

In `netlogo-simulations/`, multiple demos share prefix numbers:

```
11-binary-search.html AND 11-opinion-dynamics.html
13-brians-brain.html AND 13-traffic-grid.html
14-monte-carlo-pi.html, 14-snake-game.html, 14-koch-snowflake.html
15-giant-component.html AND 15-hilbert-curve.html
```

**Action:** Renumber to ensure unique prefixes

---

## Implementation Order

### Step 1: Critical Cleanup
1. Delete 4 empty directories
2. Rename `completed.md/` → `completed-work/`
3. Delete generated files
4. Update `.gitignore`

### Step 2: Complete earth-space/
Create 10 demos for topics 51-60

### Step 3: Fix Gallery Linkage
1. Auto-link all 135 demos in `threejs/index.html`
2. Audit and fix other galleries

### Step 4: Full Gallery Audit
1. Check all 76 orphaned directories
2. Add valid galleries to main `index.html`
3. Remove additional empty/duplicate directories
4. Update demo/gallery counts

### Step 5: Documentation Reorganization
1. Create `docs/` folder structure
2. Move markdown files to appropriate subfolders

### Step 6: Add New Galleries
Add 6 new galleries to main `index.html`

---

## Files Summary

### Deletions
```
acoustics-signal/
art-experimental/
math-geometry/
social-science/
_repo_wordset.txt
all_html_files.txt
```

### Renames/Moves
```
completed.md/ → docs/completed-work/
25+ markdown files → docs/*/
```

### Creates
```
earth-space/51-seismic-waves.html (+ 9 more)
docs/project/
docs/analysis/
docs/roadmaps/
docs/implementation/
docs/netlogo/
docs/legal/
docs/completed-work/
```

### Updates
```
index.html (add 76+ galleries, update stats)
.gitignore (add generated file patterns)
threejs/index.html (add 101 missing demos)
earth-space/index.html (update with demos)
```

---

## Metrics

### Before Cleanup
- Directories: 189
- Empty directories: 4
- Root markdown files: 29
- Orphaned galleries: 76
- Unlinked threejs demos: 101

### After Cleanup (Expected)
- Directories: ~185 (after removing empty)
- Empty directories: 0
- Root markdown files: 3-4
- Orphaned galleries: 0
- All demos linked

---

*This analysis was generated by examining every file and directory in the CCAB project.*
