# Codebase Analysis

## Snapshot
- **Repository scope:** 160+ galleries rendered as ~4,000 standalone HTML demos (`rg --files -g '*.html'` reports 4,029 files) with zero npm/bundle dependencies.
- **Primary entry points:** `index.html` for the master navigation plus per-gallery landing pages such as `threejs/index.html`, each linking to numbered demos (for example `threejs/01-rotating-cube.html`).
- **Shared assets:** typography/navigation styles in `assets/css/navigation.css`, templates in `templates/`, documentation in `README.md`, `CLAUDE.md`, and `CONTRIBUTING.md`.
- **Automation surface:** Python utilities in `scripts/` for batch-editing galleries and a Playwright-based testing suite consisting of `test_demos.py`, `test_all_fast.py`, `test_all_demos.py`, and targeted branch testers.

## Architecture Observations
1. **Gallery-of-galleries layout.** The repository is intentionally flat; each gallery is self-contained with its own index, organic background aesthetics, and direct links to demos. The approach keeps hosting trivial (any static file server works) but duplicates structural markup and CSS in dozens of directories, which complicates holistic updates.
2. **Template-driven intent vs. actual adoption.** `templates/README.md` documents rich starter files with consistent loading states, FPS counters, accessibility affordances, and cleanup hooks. However, representative demos like `threejs/01-rotating-cube.html` still hand-roll styling/logic and omit the shared behaviors, suggesting that template coverage is uneven.
3. **Design system centralization.** `assets/css/navigation.css` defines a comprehensive navigation + typography system (CSS variables, organic shapes, breadcrumbs). Only gallery landing pages pull directly from these styles; most demos inline their own styles, so visual drift across galleries is expected.
4. **Content generation scripts.** Utilities such as `scripts/add_explain_to_netlogo3.py` programmatically augment hundreds of NetLogo-based demos (injecting modal explainers derived from `NetLogo-Simulation-3-1000.md`). This shows a pattern where large gallery drops are automated, but the scripts are highly specialized and rarely parameterized for reuse.

## Tooling & Testing
- **Local serving.** Contributors rely on `python3 -m http.server` (ports 8000 or 8889) for previewing galleries; there is no dev server with live reload or bundling.
- **Playwright coverage.** Three tiers of Python scripts exercise demos:
  - `test_demos.py` hits a curated sample, capturing screenshots per gallery for smoke verification.
  - `test_all_fast.py` reuses a single Chromium instance to crawl every HTML file.
  - `test_all_demos.py` launches a fresh browser per page, trading runtime for isolation and more reliable error capture.
  Each runner writes JSON summaries (`test_results*.json`) and optional screenshots, but no CI integration or badge is present.
- **Branch-specific suites.** `test_new_branches.py` enumerates demos across external repos (emergent behaviors, simulations suite, pattern formation, gravity orbits), hinting at satellite projects that mirror CCAB’s structure.

## Strengths
1. **Massive catalog with zero build friction** makes the project easy to clone, view, and host.
2. **Well-documented contributor expectations** (`README.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `templates/README.md`) clearly explain architecture, naming, and template usage.
3. **Automated quality gates** via Playwright scripts detect console errors, network issues, and capture visual regressions without manual browser walkthroughs.
4. **Template ecosystem** bundles accessibility, performance monitoring, and responsive scaffolding that can be copy-pasted into any gallery.

## Risks & Gaps
1. **Inconsistent template adoption** means many demos lack accessibility helpers, error boundaries, and FPS monitors despite documentation encouraging them.
2. **Duplication of layout/CSS** across 160 galleries increases maintenance cost when branding or navigation needs an update; there is no shared layout partial or generator.
3. **Testing fragmentation**: server ports are hard-coded per script (`BASE_URL` in `test_demos.py` vs. `test_all_demos.py`), so contributors must remember which port to run, and there is no single command orchestrating server + tests.
4. **CI/CD absence**: the repo lacks a workflow definition (no `.github/workflows/`), so automated regressions, visual diffs, or linting do not run on pull requests.
5. **Script specialization**: automation scripts reference absolute paths (`BASE_DIR = Path("/Users/...")`) and gallery-specific logic, limiting portability to other environments or future gallery batches.

## Recommendations
1. **Codify template enforcement.** Provide a lint-like script that scans demos for template markers (back-link, loading overlay, FPS widget, `prefers-reduced-motion` media queries). Flag deviations in CI so new contributions inherit accessibility/performance defaults. Optionally add a lightweight scaffolding CLI that copies the correct template and prompts for metadata.
2. **Introduce shared includes or generation.** Consider building gallery indexes from structured metadata (JSON/YAML) to reduce duplicated HTML. A static site generator or even a Python script that composes `index.html` files from data would allow global layout changes with a single template edit.
3. **Unify developer workflow.** Wrap “start server + run tests” in a helper script (e.g., `./scripts/dev_test.sh`) that spins up the HTTP server, runs the desired Playwright tier, and shuts down cleanly. This reduces port mismatch errors and makes it easier to document a single `make test` command.
4. **Add CI automation.** Configure GitHub Actions (or similar) to run `python3 -m http.server` via `playwright`’s CLI runner with `test_demos.py` on every PR. Cache Playwright browsers and persist `test_results.json`/screenshots as artifacts for review. Extend to nightly `test_all_demos.py` runs for regression tracking.
5. **Parameterize maintenance scripts.** Refactor utilities like `scripts/add_explain_to_netlogo3.py` to read repo-relative paths (e.g., `BASE_DIR = Path(__file__).resolve().parents[1]`) and accept CLI arguments for gallery directories or markdown sources. This makes them reusable for future gallery batches and safer to run on other machines.
6. **Establish quality metrics.** Track stats such as number of demos per gallery, last tested timestamp, and outstanding failures by updating `test_results*.json` into a dashboard (maybe `documentation/test-status.md`). This gives maintainers visibility into health across the 4k demos and prioritizes fixes.
