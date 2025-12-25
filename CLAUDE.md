# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CCAB (Claude Code and Algorithmic Beauty)** - A comprehensive showcase of 1,072+ interactive web visualizations spanning vanilla JavaScript, modern graphics frameworks, and cutting-edge web technologies.

This is a **static HTML/CSS/JavaScript** project with no build system, no dependencies, and no package manager. All demos are self-contained HTML files that can be opened directly in a browser.

## Repository Structure

### Architecture Pattern: Gallery of Galleries

The project follows a two-tier navigation structure:

1. **Main Index** (`index.html`): Landing page with 83 galleries organized into 8 sections
2. **Gallery Indexes**: Each category has its own `index.html` linking to individual demos
3. **Individual Demos**: Self-contained HTML files with inline CSS/JavaScript

**Two Types of Gallery Pages:**
- **Multi-demo galleries** (52): Have separate HTML files for each demo (e.g., `threejs/01-rotating-cube.html`)
- **Single-page demos** (28+): The `index.html` IS the demo itself (e.g., `wolfram-ca/index.html`, `algorithmic-art/index.html`)

```
ccab/
├── index.html                      # Main landing page (83 galleries, 1,072+ demos)
├── threejs/                        # Multi-demo gallery example
│   ├── index.html                  # Gallery index listing demos
│   ├── 01-rotating-cube.html       # Individual demo
│   ├── 02-spinning-torus.html
│   └── ...
├── wolfram-ca/                     # Single-page demo example
│   └── index.html                  # The demo IS the index
├── algorithmic-art/
│   └── index.html                  # Single-page: multi-demo gallery in one file
└── [80+ more gallery directories]
```

### 83 Gallery Categories (8 Sections)

**Original (6):**
- `algorithmic-art/` - Fractals, patterns, generative art (20+ demos)
- `game-of-life/` - 23 Conway's Game of Life variations
- `infographics/` - 6 interactive data visualizations
- `lissajous/` - Lissajous curve generator
- `visualizations/` - 9 basic HTML5 canvas demos
- `games/` - Neural Cellular Automata

**Added via Automated Generation (14):**
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
- `altruism-evolution/` - Altruism & cooperation evolution (16 demos)
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

### 2. Gallery Index Structure (Organic-Nature Theme)

Multi-demo gallery `index.html` files follow the organic-nature template:
```html
<!-- Organic background shapes -->
<div class="organic-shape shape-1"></div>
<div class="organic-shape shape-2"></div>

<main class="container">
    <header class="header">
        <a href="../index.html" class="back-link">← Back to Gallery</a>
        <h1>Gallery Title</h1>
        <p class="subtitle">Description</p>
    </header>

    <div class="demos-grid">
        <a href="01-demo-name.html" class="demo-card">
            <span class="demo-number">01</span>
            <h3>Demo Title</h3>
            <p>Short description</p>
        </a>
        <!-- More demo cards -->
    </div>
</main>
```

Single-page demos include a floating back-link:
```html
<a href="../index.html" class="organic-back-link">
    <span class="back-arrow">←</span>
    <span class="back-text">Gallery</span>
</a>
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

**IMPORTANT: Always use templates when creating new demos!**

1. **Copy the appropriate template** from `templates/` directory:
   ```bash
   # For Canvas 2D demos
   cp templates/template-canvas.html your-gallery/your-demo.html

   # For Three.js 3D demos
   cp templates/template-threejs.html threejs/your-demo.html

   # For P5.js creative coding
   cp templates/template-p5js.html p5-generative-art/your-demo.html

   # For raw WebGL shaders
   cp templates/template-webgl.html webgl-shaders/your-demo.html
   ```

2. **Edit the template** - Look for sections marked `YOUR CODE GOES HERE` and replace with your visualization logic

3. **Update gallery's `index.html`** to add link:
   ```html
   <a href="your-demo.html" class="item-link">Your Demo Title</a>
   ```

4. **Test thoroughly** - Verify error handling, loading states, and mobile responsiveness work

5. No need to update main `index.html` (it links to gallery index)

**Why Use Templates?**
- ✅ Built-in error handling (CDN failures, runtime errors)
- ✅ Loading states with spinners
- ✅ Retina display support (crisp rendering)
- ✅ FPS monitoring
- ✅ Responsive resizing
- ✅ Memory leak prevention
- ✅ Accessibility features
- ✅ Consistent UX across all demos

See `templates/README.md` for detailed documentation.

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

## Reusable Components

### Shared CSS (`assets/css/`)

The project uses consolidated external stylesheets to reduce code duplication:

1. **`organic-theme.css`** - Complete organic-nature theme for gallery index pages
   - CSS variables (color palette)
   - Organic morphing background shapes with keyframe animations
   - Demo card grid layout and styling
   - Navigation components (back-link, organic-back-link)
   - Responsive breakpoints
   - Footer styling

**Gallery Index Pattern:**
```html
<head>
    <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/organic-theme.css">
</head>
```

**51 gallery index files** now use this external stylesheet instead of inline CSS (~200 lines each), eliminating ~10,000 lines of duplicate CSS.

2. **`gallery-standard.css`** - Alternative gradient theme (purple/blue)
3. **`navigation.css`** - Digital museum navigation system

### Demo Templates (`templates/`)

Production-ready templates for creating new demos with built-in best practices:

1. **`template-canvas.html`** - HTML5 Canvas 2D graphics
2. **`template-threejs.html`** - Three.js 3D WebGL scenes
3. **`template-p5js.html`** - P5.js creative coding
4. **`template-webgl.html`** - Raw WebGL shader art

Each template includes:
- Error handling for CDN failures and runtime errors
- Loading states with animated spinners
- FPS counters with color-coded performance indicators
- Retina display support (automatic DPI scaling)
- Responsive canvas/renderer resizing with debouncing
- Memory leak prevention
- WebGL support detection
- Back navigation links
- Proper resource cleanup

**See `templates/README.md` for complete documentation.**

### Utility Library (`assets/js/demo-utils.js`)

Reusable JavaScript utilities that can be included in any demo:

```html
<script src="../assets/js/demo-utils.js"></script>
<script>
    const canvas = new CanvasManager('canvas'); // Retina-aware canvas
    const fps = new FPSCounter({ position: 'top-right' });
    const loader = new LoadingManager('Loading...');
    const errorMgr = new ErrorManager();

    // Math utilities
    const x = lerp(0, 100, 0.5); // Linear interpolation
    const rand = random(0, 10); // Random float
    const angle = degToRad(45); // Degrees to radians

    // Color utilities
    const color = hslToRgb(360, 100, 50); // HSL to RGB
    const colorStr = rgb(255, 100, 50, 0.8); // Create rgba string

    // Animation loop
    const loop = new AnimationLoop((deltaTime, totalTime) => {
        fps.update();
        // Render logic here
    });
    loop.start();
</script>
```

**Available Classes:**
- `FPSCounter` - Performance monitoring
- `CanvasManager` - Retina canvas with auto-resize
- `ErrorManager` - Centralized error UI
- `LoadingManager` - Loading spinner management
- `AnimationLoop` - Delta-time animation loop

**Available Functions:**
- Math: `clamp()`, `lerp()`, `map()`, `random()`, `randomInt()`, `degToRad()`, `radToDeg()`
- Color: `hslToRgb()`, `rgb()`
- Loading: `loadLibrary()`, `checkWebGLSupport()`, `checkWebGL2Support()`
- Error: `setupGlobalErrorHandler()`

## Documentation Files

### Project Documentation
- `CLAUDE.md` - This file, guidance for Claude Code
- `IMPROVEMENTS.md` - Detailed changelog of November 2025 improvements
- `README.md` - *(If exists)* Project overview and setup

### Historical Documentation
- `IMPLEMENTATION_STATUS.md` - Tracks 19 automated branch implementations (13 successful, 6 failed)
- `NEXT_STEPS.md` - Comprehensive 12-week roadmap for platform enhancement
- `SIMULATIONS_ROADMAP.md` - Deep dive into 10 essential simulations beyond Game of Life
- `SIMULATIONS_QUICK_GUIDE.md` - Quick reference for simulation priorities

### Template Documentation
- `templates/README.md` - Complete guide to using demo templates (400+ lines)

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

When demos are added/removed, update the stats in `index.html` (organic-nature format):
```html
<div class="stats">
    <div class="stat">
        <div class="stat-number">1,072+</div>
        <div class="stat-label">Interactive Demos</div>
    </div>
    <div class="stat">
        <div class="stat-number">83</div>
        <div class="stat-label">Galleries</div>
    </div>
    <!-- Add more stat blocks as needed -->
</div>
```

### Adding New Category Section

Add gallery cards inside the appropriate `<section class="category">` block. Each gallery is a card:
```html
<a href="new-gallery/index.html" class="gallery-card">
    <span class="card-number">84</span>
    <h3>New Gallery</h3>
    <p>Description of gallery contents</p>
</a>
```

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

## Visual Design System: Organic-Nature Theme

All pages use a consistent organic-nature design aesthetic (December 2025 redesign):

### Color Palette (CSS Variables)
```css
:root {
    --sage: #8A9A5B;       /* Primary accent */
    --moss: #606C38;       /* Headings, text emphasis */
    --earth: #DDA15E;      /* Warm accent */
    --cream: #FEFAE0;      /* Background base */
    --terracotta: #BC6C25; /* Secondary accent */
    --dark-moss: #3d4423;  /* Dark text */
}
```

### Typography
- **Headings**: `'Lora', serif` - Elegant, nature-inspired
- **Body text**: `'Nunito', sans-serif` - Clean, readable
- Load via Google Fonts: `https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap`

### Key Design Elements
- **Morphing organic shapes**: Animated blob backgrounds with `border-radius` morphing over 30s
- **Glassmorphism cards**: `background: rgba(255,255,255,0.6); backdrop-filter: blur(10px)`
- **Gradient background**: `linear-gradient(135deg, #FEFAE0 0%, #F4F1DE 50%, #EDE8D5 100%)`
- **Border radius**: 20px for cards, organic rounded corners
- **Hover animations**: Cubic-bezier easing, subtle transforms

### Page Types
1. **Multi-demo galleries**: Full organic template with numbered demo cards
2. **Single-page demos**: Floating back-link in top-left corner with organic styling

## Historical Context

This project evolved through:
1. **Initial creation**: 40 vanilla HTML/CSS/JS demos across 6 categories
2. **Automated generation**: 19 feature branches created, 13 successful (520+ new demos)
3. **Consolidation**: All successful branches merged to main (Nov 2025)
4. **Quality curation**: 560 → 348 demos (38% reduction, retaining highest quality)
5. **Altruism Evolution**: Added educational evolutionary biology gallery (16 demos)
6. **Platform improvements** (Nov 2025): Major code quality, UX, accessibility, and DX enhancements
   - Created 4 production-ready demo templates with error handling
   - Built reusable utility library (demo-utils.js)
   - Added comprehensive SEO meta tags
   - Enhanced accessibility (WCAG 2.1 Level AA+)
7. **Organic-Nature Redesign** (Dec 2025): Complete visual overhaul
   - Redesigned main index.html with organic-nature aesthetic
   - Updated 52 multi-demo gallery pages with full organic template
   - Added organic-styled floating back-links to 28 single-page demos
   - New color palette: sage, moss, earth, cream, terracotta
   - Typography: Lora (headings) + Nunito (body)
   - Animated morphing blob backgrounds, glassmorphism cards
8. **CSS Consolidation** (Dec 2025): Major codebase refactoring
   - Created `assets/css/organic-theme.css` (consolidated theme stylesheet)
   - Migrated 51 gallery index files from inline CSS to external stylesheet
   - Eliminated ~10,000 lines of duplicate CSS code
   - Fixed merge conflicts in algorithmic-art/index.html
   - Standardized gallery index structure across all galleries
9. **Current state**: 1,072+ demos across 83 galleries with consistent organic-nature design and consolidated CSS

Success pattern: Graphics frameworks outperformed physics simulations (68% success rate overall).
