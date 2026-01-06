# Repository Guidelines

## Project Structure & Module Organization
CCAB is a static “gallery of galleries”: `index.html` is the main landing page, each gallery directory (`threejs/`, `webgl-shaders/`, `altruism-evolution/`, etc.) includes its own `index.html`, and demos sit beside it as numbered files like `threejs/01-rotating-cube.html`. Shared docs live in `documentation/` (start with `MASTER_CATALOG.md`), reusable CSS/assets live in `assets/`, and all starter HTML lives in `templates/` (`template-threejs.html`, `template-canvas.html`, `template-webgl.html`).

## Build, Test, and Development Commands
- `python3 -m http.server 8000` – serve the repo locally; this matches the default `BASE_URL` for `test_demos.py`.
- `python3 -m http.server 8889` – serve on the port consumed by `test_all_fast.py` and `test_all_demos.py`.
- `python3 test_demos.py` – quick sanity check that exercises 10+ representative demos, saving screenshots in `test_screenshots/`.
- `python3 test_all_fast.py` or `python3 test_all_demos.py` – crawl every HTML file; the latter launches a fresh browser per demo and is the release gate.

## Coding Style & Naming Conventions
Every demo remains a single HTML file with inline `<style>`/`<script>`, CDN imports, and no bundlers. Start from the closest template so you inherit the organic navigation, loading/error states, FPS monitor, and `prefers-reduced-motion` hook. File names use the `NN-demo-name.html` pattern (two digits keep galleries ordered), four-space indentation, and descriptive classes such as `.organic-shape` or `.demo-card`. Use shared hues/typography from `assets/css/navigation.css` and keep back-links pointed at `../index.html`.

## Testing Guidelines
Always start the HTTP server before running Playwright so the expected port is open. New demos must pass `test_demos.py`; new galleries, infrastructure refactors, or pre-release work should also pass `test_all_fast.py`, with `test_all_demos.py` reserved for final verification. Collect the generated `test_results*.json` and screenshots and attach them to PRs whenever there is a failure so reviewers can see the regression.

## Commit & Pull Request Guidelines
Follow the format in `CONTRIBUTING.md`:
```
Type: Brief description

Body (what changed, galleries touched)

🤖 Generated with Claude Code
Co-Authored-By: Name <email>
```
Use `Add`, `Fix`, `Update`, `Remove`, or `Refactor` for `Type`. PRs should describe the affected gallery, list new demos/assets, summarize testing (commands + browsers), and link to issues or roadmap items. Screenshots or GIFs for visually rich changes keep reviews fast.

## Accessibility & Performance Expectations
Every page must keep the template skip/back links, keyboard focus order, and `prefers-reduced-motion` fallbacks; add seizure warnings when introducing flashes. Monitor runtime cost with the FPS widget, rely on `requestAnimationFrame` loops, and clean up timers/listeners so multiple demos can stay open without memory leaks.
