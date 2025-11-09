# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CCAB (Creative Code and Algorithmic Beauty)** - A comprehensive showcase of 348+ interactive web visualizations spanning vanilla JavaScript, modern graphics frameworks, and cutting-edge web technologies.

This is a **static HTML/CSS/JavaScript** project with no build system, no dependencies, and no package manager. All demos are self-contained HTML files that can be opened directly in a browser.

## Repository Structure

### Architecture Pattern: Gallery of Galleries

The project follows a two-tier navigation structure:

1. **Main Index** (`index.html`): Landing page with 19 category sections
2. **Gallery Indexes**: Each category has its own `index.html` linking to individual demos
3. **Individual Demos**: Self-contained HTML files with inline CSS/JavaScript

```
ccab/
├── index.html                      # Main landing page (19 categories, 348+ demos)
├── algorithmic-art/
│   └── index.html                  # Gallery: 20+ demos in one page
├── d3js/
│   ├── index.html                  # Gallery: 18 demos across 6 subcategories
│   ├── force-directed/             # Subcategory
│   ├── hierarchical-trees/         # Subcategory
│   └── ...
├── threejs/
│   ├── index.html                  # Gallery: 30 demos
│   ├── 01-rotating-cube.html       # Individual demo
│   ├── 02-spinning-torus.html
│   └── ...
└── [12 more gallery directories]
```

### 19 Gallery Categories

**Original (6):**
- `algorithmic-art/` - Fractals, patterns, generative art (20+ demos)
- `game-of-life/` - 23 Conway's Game of Life variations
- `infographics/` - 6 interactive data visualizations
- `lissajous/` - Lissajous curve generator
- `visualizations/` - 9 basic HTML5 canvas demos
- `games/` - Neural Cellular Automata

**Added via Automated Generation (13):**
- `wolfram-ca/` - All 256 Wolfram Elementary Cellular Automata rules
- `threejs/` - Three.js 3D visualizations (30 demos)
- `webgl-shaders/` - Raw WebGL shader art (21 demos)
- `webgpu/` - WebGPU compute shaders (12 demos)
- `p5-generative-art/` - P5.js creative coding (40 demos)
- `pixi-sprite-animations/` - Pixi.js sprites (17 demos)
- `d3js/` - D3.js data visualizations (18 demos)
- `web-audio-api/` - Web Audio API (40 demos)
- `scientific-visualizations/` - Physics/chemistry/biology (15 demos)
- `biological-simulations/` - Boids, evolution, L-systems (22 demos)
- `visualization-algorithms/` - Voronoi, Delaunay, pathfinding (25 demos)
- `webassembly/` - High-performance WASM (13 demos)
- `complex-showcases/` - Ray tracers, terrain, galaxies (15 demos)

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

- `IMPLEMENTATION_STATUS.md` - Tracks 19 automated branch implementations (13 successful, 6 failed)
- `NEXT_STEPS.md` - Comprehensive 12-week roadmap for platform enhancement
- `SIMULATIONS_ROADMAP.md` - Deep dive into 10 essential simulations beyond Game of Life
- `SIMULATIONS_QUICK_GUIDE.md` - Quick reference for simulation priorities

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

This project uses a unique git worktree pattern for parallel development:

```bash
# List all worktrees (if any remain)
git worktree list

# Current setup: Single main branch
# Previous: 13 successful feature branches were merged
# 6 failed branches were deleted
```

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

When demos are added/removed, update line 331 in `index.html`:
```html
<div class="stats">
    <h3>348+ Interactive Demos</h3>  <!-- Update this number -->
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
1. **Initial creation**: 40 vanilla HTML/CSS/JS demos across 6 categories
2. **Automated generation**: 19 feature branches created, 13 successful (520+ new demos)
3. **Consolidation**: All successful branches merged to main (Nov 2025)
4. **Quality curation**: 560 → 348 demos (38% reduction, retaining highest quality)
5. **Current state**: 348+ demos across 19 categories

Success pattern: Graphics frameworks outperformed physics simulations (68% success rate overall).
