# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CCAB (Creative Code and Algorithmic Beauty)** - A comprehensive showcase of 1,072+ interactive web visualizations spanning vanilla JavaScript, modern graphics frameworks, and cutting-edge web technologies.

This is a **static HTML/CSS/JavaScript** project with no build system, no dependencies, and no package manager. All demos are self-contained HTML files that can be opened directly in a browser.

## Repository Structure

### Architecture Pattern: Gallery of Galleries

The project follows a two-tier navigation structure:

1. **Main Index** (`index.html`): Landing page with 46 category sections
2. **Gallery Indexes**: Each category has its own `index.html` linking to individual demos
3. **Individual Demos**: Self-contained HTML files with inline CSS/JavaScript

```
ccab/
├── index.html                      # Main landing page (46 categories, 1,072+ demos)
├── algorithmic-art/
│   └── index.html                  # Gallery: 20+ demos in one page
├── d3js/
│   ├── index.html                  # Gallery: 18 demos across 6 subcategories
│   ├── force-directed/             # Subcategory
│   ├── hierarchical-trees/         # Subcategory
│   └── ...
├── threejs/
│   ├── index.html                  # Gallery: 36 demos
│   ├── 01-rotating-cube.html       # Individual demo
│   ├── 02-spinning-torus.html
│   └── ...
├── physics-simulations/            # Largest gallery (80 demos)
├── petri-arena/                    # 74 neural cellular automata demos
└── [42 more gallery directories]
```

### 46 Gallery Categories

**Original (6):**
- `algorithmic-art/` - Fractals, patterns, generative art (20+ demos)
- `game-of-life/` - 23 Conway's Game of Life variations
- `infographics/` - 6 interactive data visualizations
- `lissajous/` - Lissajous curve generator
- `visualizations/` - 9 basic HTML5 canvas demos
- `games/` - Neural Cellular Automata

**Added via Automated Generation (40+):**
Major galleries include:
- `physics-simulations/` - 80 comprehensive physics simulations (largest gallery)
- `petri-arena/` - 74 neural cellular automata (PD-NCA) visualizations
- `gravity-orbits/` - 50 gravitational simulations and orbital mechanics
- `emergent-behaviors/` - 50 simulations of emergent phenomena
- `tsl-shaders/` - 46 Three.js Shading Language (TSL) demos
- `threejs-tsl-shaders/` - 40 additional TSL advanced shaders
- `p5-generative-art/` - 40 creative coding visualizations
- `web-audio-api/` - 40 audio visualizations
- `solar-flare-visualizations/` - 40 solar phenomena visualizations
- `complex-showcases/` - 40 advanced simulations
- `visualization-algorithms/` - 40 advanced algorithms
- `follower-visualizations/` - 30 pursuit behaviors
- `threejs/` - 36 Three.js 3D visualizations
- `webgl-shaders/` - 29 raw WebGL shader art
- `particle-systems/` - 20 particle effects
- `boids-flocking-visualizations/` - 20 flocking algorithms
- `wolf-sheep-predation/` - 20 predator-prey models
- Plus 23 more galleries covering ABM economics, cellular automata, evolutionary biology, segregation models, epidemiology, and more

**Key Technology Categories:**
- **Graphics Frameworks:** Three.js, WebGL, WebGPU, P5.js, Pixi.js, TSL
- **Data Viz:** D3.js, dynamic infographics
- **Agent-Based Models:** Altruism, ethnocentrism, Schelling, sugarscape, virus models
- **Scientific:** Physics simulations, biological simulations, chaos attractors
- **Advanced:** WebAssembly, Web Audio API

## Key Implementation Patterns

### 1. Self-Contained HTML Files

Every demo is a complete standalone file:
- All CSS in `<style>` tags
- All JavaScript in `<script>` tags
- External libraries loaded via CDN (unpkg.com, cdnjs.com)
- No local dependencies

### 2. Gallery Index Structure

Each gallery's `index.html` follows this pattern:
```html
<div class="category">
    <h2>Section Title</h2>
    <p class="category-description">Description text</p>
    <div class="items-grid">
        <a href="path/to/demo.html" class="item-link">Demo Name</a>
    </div>
</div>
```

### 3. Technology Stack by Gallery

| Gallery | Primary Tech | Loading Pattern |
|---------|-------------|-----------------|
| `d3js/` | D3.js v7 | `<script src="https://d3js.org/d3.v7.min.js">` |
| `threejs/` | Three.js r149+ | `<script src="https://unpkg.com/three@...">` |
| `p5-generative-art/` | P5.js | `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/...">` |
| `pixi-sprite-animations/` | Pixi.js v7 | `<script src="https://pixijs.download/release/pixi.js">` |
| `webgl-shaders/` | Raw WebGL | No libraries, pure GLSL |
| `webgpu/` | WebGPU API | Native browser API |
| `web-audio-api/` | Web Audio + Tone.js | Native + `<script src="https://unpkg.com/tone">` |
| `webassembly/` | WASM + C/Rust | Emscripten or manual WASM |

### 4. Common Demo Patterns

**Canvas-based visualizations:**
```javascript
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function animate() {
    // Clear, update, draw
    requestAnimationFrame(animate);
}
animate();
```

**WebGL shader pattern:**
```javascript
const gl = canvas.getContext('webgl2');
const program = createShaderProgram(vertexShader, fragmentShader);
// Uniform setup, draw calls
```

## Adding New Content

### Adding a New Demo to Existing Gallery

1. Create new HTML file in gallery directory (e.g., `threejs/41-new-demo.html`)
2. Update gallery's `index.html` to add link:
   ```html
   <a href="41-new-demo.html" class="item-link">New Demo Title</a>
   ```
3. No need to update main `index.html` (it links to gallery index)

### Adding a New Gallery Category

1. Create new directory (e.g., `new-gallery/`)
2. Add individual demo files
3. Create `new-gallery/index.html` following existing gallery pattern
4. Update main `index.html` with new category section:
   ```html
   <!-- New Gallery Category -->
   <div class="category">
       <h2>New Gallery Title</h2>
       <p class="category-description">Description of gallery contents</p>
       <div class="items-grid">
           <a href="new-gallery/index.html" class="item-link">New Gallery (X demos)</a>
       </div>
   </div>
   ```
5. Update stats in main `index.html` (`<div class="stats">`)

## Important Constraints

### What NOT to Do

1. **Do NOT add build systems** - No npm, webpack, vite, parcel, etc.
2. **Do NOT add package.json** - This is explicitly vanilla web
3. **Do NOT create dependencies** - Each file must be independently openable
4. **Do NOT use modern module syntax** - No `import/export`, use global scope
5. **Do NOT require compilation** - All code must run directly in browser

### What FAILED Previously

Based on `IMPLEMENTATION_STATUS.md`, these implementations failed:
- **Boids simulation** - Incomplete/buggy (avoid complex physics sims)
- **Lattice Boltzmann fluid** - Performance issues (too computationally heavy)
- **N-Body gravity** - Not working properly
- **Paper.js integration** - Framework issues
- **Reaction-Diffusion** - Poor visual quality

**Lesson:** Framework-based visualizations succeed better than complex physics simulations.

## Documentation Files

**Analysis & Planning:**
- `DUPLICATE_ANALYSIS.md` - Analysis of 189 orphaned/duplicate demos across 1,114 files
- `ORPHANED_FILES.md` - Comprehensive orphaned files report (17% of content)
- `NAVIGATION_RESTRUCTURING_PLAN.md` - Navigation improvement plan for 46 galleries
- `IMPLEMENTATION_STATUS.md` - Tracks 19 automated branch implementations (13 successful, 6 failed)
- `NEXT_STEPS.md` - Comprehensive 12-week roadmap for platform enhancement
- `SIMULATIONS_ROADMAP.md` - Deep dive into 10 essential simulations beyond Game of Life
- `SIMULATIONS_QUICK_GUIDE.md` - Quick reference for simulation priorities

**Key Findings:**
- 189 orphaned items identified (4 empty dirs, 2 orphaned galleries, 183 orphaned demos)
- Galleries missing index.html: game-of-life, infographics, visualizations
- Highest orphan rates: petri-arena (73%), physics-simulations (50%)

## Development Workflow

### Testing Changes Locally

```bash
# No build needed! Just open files directly
open index.html                                    # Main gallery
open threejs/index.html                           # Three.js gallery
open threejs/01-rotating-cube.html                # Individual demo

# Or use Python's built-in server
python3 -m http.server 8000
# Navigate to http://localhost:8000
```

### Git Workflow

This project uses git worktrees for parallel development:

```bash
# List all worktrees
git worktree list

# Check for new branches
git fetch --all

# Create worktree for a branch
git worktree add ../ccab-branch-name origin/branch-name

# Remove worktree
git worktree remove ../ccab-branch-name --force

# Archive merged branches
git branch -r --merged main  # List merged branches
git push origin --delete branch-name  # Delete from remote
```

**Current Status:**
- Main working directory: `/Users/mik1264/experiments/ccab/ccab`
- 35 merged branches archived (deleted from origin Nov 2025)
- Active worktrees for unmerged branches as needed

**Standard workflow:**
1. Work directly on main branch (no build to break)
2. Test by opening HTML files in browser
3. Commit changes with descriptive messages including demo counts
4. Include Claude Code co-authorship footer:
   ```
   🤖 Generated with [Claude Code](https://claude.com/claude-code)

   Co-Authored-By: Claude <noreply@anthropic.com>
   ```

### Commit Message Format

Follow the established pattern for this repo:
```
Action: Brief description with counts

Detailed explanation of changes:
- Category/gallery affected
- Number of demos added/modified
- Technologies involved

Technologies: Three.js, WebGL, etc.
Total additions: X demos across Y categories

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## Common Modifications

### Updating Main Gallery Stats

When demos are added/removed, update the stats in `index.html`:
```html
<div class="stats">
    <h3>1,072+ Interactive Demos</h3>  <!-- Update this number -->
    <p>From vanilla HTML/CSS/JavaScript to WebGL, WebGPU, Three.js, P5.js, D3.js, Pixi.js, and WebAssembly</p>
</div>
```

### Adding New Category Section

Insert new `<div class="category">` blocks **before** the `<div class="stats">` section to maintain layout.

### Gallery Index Naming Conventions

- Individual demos: `01-descriptive-name.html` (numbered)
- Subcategories: Use folder names like `force-directed/`, `molecular-structures/`
- Gallery index: Always `index.html` in category root

## Browser Compatibility

Target: **Modern evergreen browsers** (Chrome, Firefox, Safari, Edge)
- WebGL 2.0 support required for shader demos
- WebGPU support optional (gracefully degrade)
- Web Audio API widely supported
- Canvas 2D universally supported

## Performance Considerations

- Each demo should target **60 FPS** for animations
- Use `requestAnimationFrame()` for smooth rendering
- Avoid blocking operations in animation loops
- For heavy computation, consider Web Workers or WASM
- GPU particle systems: Keep particle counts under 100K for broad compatibility

## Visual Consistency

Main gallery (`index.html`) uses:
- **Gradient background**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Primary color**: `#667eea` (purple-blue)
- **Font**: System font stack
- **Card shadows**: `0 10px 30px rgba(0, 0, 0, 0.2)`
- **Border radius**: 15px for categories, 8px for items

Individual gallery indexes may have their own styling but should maintain professional appearance.

## Historical Context

This project evolved through:
1. **Initial creation**: 40 vanilla HTML/CSS/JS demos across 6 categories (Nov 2024)
2. **Automated generation**: 19 feature branches created, 13 successful (520+ new demos)
3. **Consolidation**: All successful branches merged to main (Nov 2025)
4. **Quality curation**: 560 → 348 demos (38% reduction, retaining highest quality)
5. **Expansion phase**: Added 30+ new galleries (ABM models, physics, TSL shaders)
6. **Current state**: 1,072+ demos across 46 categories
7. **Analysis phase**: Identified 189 orphaned items, documented duplicates (Nov 2025)

Success pattern: Graphics frameworks outperformed physics simulations (68% success rate overall).

## Deployment

**GitHub Pages**: Automatically deployed via GitHub Actions
- Live site: `https://mik1264.github.io/ccab/`
- Workflow: `.github/workflows/deploy.yml`
- Trigger: Every push to `main` branch
- Manual trigger available via Actions tab

**Setup:**
```bash
# Deployment happens automatically on push
git push origin main

# Monitor deployment
# Visit: https://github.com/mik1264/ccab/actions
```
