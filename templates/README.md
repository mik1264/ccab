# CCAB Demo Templates

This directory contains production-ready templates for creating new demos with built-in error handling, loading states, performance monitoring, and accessibility features.

## Available Templates

### 1. `template-canvas.html` - HTML5 Canvas
**Best for:** 2D graphics, particle systems, generative art, simple animations

**Features:**
- ✅ Retina display support (automatic DPI scaling)
- ✅ FPS counter with color-coded performance indicators
- ✅ Error boundaries and graceful error handling
- ✅ Loading state with spinner
- ✅ Responsive canvas resizing with debouncing
- ✅ Memory leak prevention (cleanup on resize)
- ✅ Back navigation link

**Usage:**
```bash
cp templates/template-canvas.html your-gallery/your-demo.html
```

Edit the section marked "YOUR DEMO RENDERING CODE GOES HERE" with your visualization logic.

**Key Objects:**
- `canvasManager.ctx` - 2D rendering context
- `canvasManager.width/height` - Display dimensions
- `fpsCounter` - Performance monitoring

---

### 2. `template-threejs.html` - Three.js WebGL
**Best for:** 3D graphics, meshes, lighting, complex 3D scenes

**Features:**
- ✅ WebGL support detection
- ✅ CDN error handling with fallback messaging
- ✅ Modern ES6 module imports via importmap
- ✅ Automatic pixel ratio limiting (max 2x for performance)
- ✅ FPS counter
- ✅ Responsive camera/renderer resizing
- ✅ Resource cleanup on page unload
- ✅ OrbitControls support (commented out, easy to enable)

**Usage:**
```bash
cp templates/template-threejs.html threejs/your-demo.html
```

Edit sections marked "YOUR DEMO SCENE SETUP" and "YOUR DEMO ANIMATION CODE" with your Three.js objects and animation logic.

**Key Objects:**
- `scene` - Three.js Scene
- `camera` - PerspectiveCamera
- `renderer` - WebGLRenderer
- `animate()` - Animation loop

**Enabling OrbitControls:**
Uncomment these lines:
```javascript
// Line 2: import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// Lines after renderer setup: const controls = new OrbitControls(camera, renderer.domElement);
// In animate(): controls.update();
```

---

### 3. `template-p5js.html` - P5.js Creative Coding
**Best for:** Generative art, interactive sketches, creative coding

**Features:**
- ✅ CDN load verification with timeout
- ✅ Promise-based library loading
- ✅ High DPI display support via `pixelDensity(displayDensity())`
- ✅ Built-in FPS display
- ✅ Automatic window resize handling
- ✅ Error boundaries

**Usage:**
```bash
cp templates/template-p5js.html p5-generative-art/your-demo.html
```

Edit the `setup()` and `draw()` functions with your P5.js sketch.

**Key Functions:**
- `setup()` - Runs once at initialization
- `draw()` - Runs every frame (~60fps)
- `windowResized()` - Handles window resizing

---

### 4. `template-webgl.html` - Raw WebGL Shaders
**Best for:** GLSL shaders, fragment shader art, GPU-accelerated effects

**Features:**
- ✅ WebGL2 with WebGL1 fallback
- ✅ Shader compilation error reporting with detailed messages
- ✅ Fullscreen quad setup
- ✅ Resolution and time uniforms
- ✅ Pixel ratio handling
- ✅ Version-aware shader source (automatic #version 300 es for WebGL2)

**Usage:**
```bash
cp templates/template-webgl.html webgl-shaders/your-demo.html
```

Edit the `vertexShaderSource` and `fragmentShaderSource` with your GLSL code.

**Available Uniforms:**
- `u_resolution` - Canvas resolution (vec2)
- `u_time` - Time since page load (float)

**Shader Version Detection:**
The template automatically uses the correct shader syntax:
- WebGL2: `#version 300 es` with `in/out` keywords
- WebGL1: `attribute/varying` keywords

---

## Common Patterns Across All Templates

### Error Handling
All templates include:
```javascript
window.addEventListener('error', (e) => {
    showError(`Runtime Error: ${e.message}`);
});
```

### Loading States
All templates show a loading spinner until initialization completes:
```javascript
hideLoading(); // Call when ready to show your demo
```

### Back Navigation
All templates include a styled back link to their respective gallery:
```html
<a href="../gallery/index.html" class="back-link">← Back to Gallery</a>
```

### Performance Monitoring
Canvas and Three.js templates include FPS counters that color-code performance:
- 🟢 Green (55+ FPS) - Excellent
- 🟡 Yellow (30-54 FPS) - Acceptable
- 🔴 Red (<30 FPS) - Poor

---

## Best Practices

### 1. Always Use Templates
Don't create demos from scratch - templates ensure consistency and prevent common bugs.

### 2. Test Error States
Temporarily break CDN URLs or WebGL context to verify error handling works.

### 3. Mobile Testing
Test on actual mobile devices or use browser DevTools device emulation.

### 4. Performance Budgets
- Target: 60 FPS on mid-range devices
- Canvas: Limit particles to <10,000
- Three.js: Keep polycount reasonable, limit pixel ratio to 2x
- WebGL: Use mipmapping for textures, minimize uniform updates

### 5. Accessibility
- All templates include keyboard-accessible back links
- Consider adding pause/play controls for animations
- Provide text alternatives for visual-only content

### 6. Retina Displays
Templates automatically handle high-DPI displays:
- **Canvas**: `window.devicePixelRatio` scaling
- **Three.js**: `setPixelRatio(Math.min(devicePixelRatio, 2))`
- **P5.js**: `pixelDensity(displayDensity())`
- **WebGL**: Resolution uniform accounts for DPR

---

## Customization Guide

### Changing Theme Colors
Each template uses a specific accent color:
- Canvas: `#fbbf24` (Amber/Gold)
- Three.js: `#f97316` (Orange)
- P5.js: `#ec4899` (Pink/Rose)
- WebGL: `#f97316` (Orange)

To change, search for the color hex code and replace throughout the template.

### Adding Custom Controls
Example: Add a pause button
```javascript
let isPaused = false;
const pauseBtn = document.createElement('button');
pauseBtn.textContent = 'Pause';
pauseBtn.style.position = 'fixed';
pauseBtn.style.top = '10px';
pauseBtn.style.right = '10px';
pauseBtn.addEventListener('click', () => {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? 'Play' : 'Pause';
});
document.body.appendChild(pauseBtn);

// In animate loop:
if (!isPaused) {
    // Update logic here
}
```

---

## Template Comparison Matrix

| Feature | Canvas | Three.js | P5.js | WebGL |
|---------|--------|----------|-------|-------|
| 2D Graphics | ⭐⭐⭐ | ⭐ | ⭐⭐⭐ | ⭐⭐ |
| 3D Graphics | ❌ | ⭐⭐⭐ | ⭐ | ⭐⭐⭐ |
| Learning Curve | Easy | Medium | Easy | Hard |
| Performance | Good | Excellent | Good | Excellent |
| Built-in Physics | ❌ | Limited | ⭐⭐ | ❌ |
| Shader Support | ❌ | ⭐⭐⭐ | ⭐ | ⭐⭐⭐ |
| Best Use Case | Particles, 2D art | 3D scenes | Creative coding | Shader art |

---

## Troubleshooting

### "CDN failed to load"
- Check internet connection
- Verify CDN URL is correct
- Try alternative CDN (e.g., jsDelivr instead of unpkg)

### "WebGL not supported"
- Update browser to latest version
- Check if hardware acceleration is enabled
- Try different browser (Chrome/Firefox recommended)

### Low FPS / Performance Issues
- Reduce particle count or polygon count
- Lower pixel ratio (change `Math.min(dpr, 2)` to `Math.min(dpr, 1)`)
- Simplify shader calculations
- Use simpler geometry or lower resolution textures

### Canvas Blurry on Retina
- Ensure you're using the template's built-in DPI scaling
- For Canvas: Check `canvasManager.dpr` is being applied
- For WebGL: Verify `gl.viewport()` uses `canvas.width/height` not CSS dimensions

---

## Contributing New Templates

When adding a new template:
1. Follow the naming convention: `template-{framework}.html`
2. Include all standard features (error handling, loading, FPS, etc.)
3. Add comprehensive comments for "YOUR CODE HERE" sections
4. Update this README with usage instructions
5. Test on multiple devices and browsers
6. Choose an appropriate theme color from the CCAB palette

---

---

## Control Panel Templates

These templates provide ready-to-use control panels for different simulation types. Copy into your demo and customize the parameters.

### 5. `controls-standard.html` - Standard Simulation Controls
**Best for:** General-purpose simulations with parameter sliders

**Features:**
- ✅ Parameter sliders with value display
- ✅ Play/Pause/Reset/Step buttons
- ✅ Preset buttons for quick configuration
- ✅ Statistics display grid
- ✅ Export (screenshot/data) buttons
- ✅ Keyboard shortcuts (Space, R, S)

**Usage:**
```javascript
const controls = new ControlsManager({
    container: '.controls',
    params: { speed: 1, count: 100 },
    callbacks: {
        'play-pause': () => togglePause(),
        reset: () => resetSimulation(),
        onParamChange: (param, value) => console.log(param, value)
    },
    presets: {
        default: { speed: 1, count: 100 },
        fast: { speed: 3, count: 50 }
    }
});
```

---

### 6. `controls-drawing.html` - Drawing/Painting Controls
**Best for:** Cellular automata, interactive canvas painting, pattern editors

**Features:**
- ✅ Tool selector (Paint, Erase, Spray, Line)
- ✅ Brush size and density sliders
- ✅ Color/state palette
- ✅ Pattern library buttons
- ✅ Clear/Randomize canvas

**Usage:**
```javascript
const touch = new TouchHandler(canvas, {
    onStart: (pos) => drawAt(pos),
    onMove: (pos) => drawAt(pos)
});
```

---

### 7. `controls-physics.html` - Physics Simulation Controls
**Best for:** Physics simulations with force, mass, and time controls

**Features:**
- ✅ Force controls (gravity, friction, restitution)
- ✅ Object property controls (mass, velocity, angle)
- ✅ Time scale and step controls
- ✅ Toggle switches for visualization options
- ✅ Energy bar charts (kinetic, potential, total)
- ✅ Physics presets (Earth, Moon, Mars, Space)

---

### 8. `controls-abm.html` - Agent-Based Model Controls
**Best for:** Evolution simulations, population dynamics, social simulations

**Features:**
- ✅ Population parameters (size, distribution)
- ✅ Evolution parameters (mutation, reproduction, death rates)
- ✅ Behavior parameters (altruism benefit/cost)
- ✅ Environment parameters (harshness, disease, scarcity)
- ✅ Scenario presets with descriptions
- ✅ Visualization mode selector
- ✅ Population statistics with bar charts

---

## Educational Panel System

Add educational content to any demo using the edu-panel system.

### Files
- `../assets/css/edu-panel.css` - Organic-nature themed styling
- `../assets/js/edu-panel.js` - Tab switching and collapse/expand logic

### Basic Usage
```html
<link rel="stylesheet" href="../assets/css/edu-panel.css">
<script src="../assets/js/edu-panel.js"></script>

<div class="edu-panel">
    <div class="edu-header">
        <span class="edu-icon">📚</span>
        <span class="edu-title">Learn More</span>
        <span class="edu-toggle">▼</span>
    </div>
    <div class="edu-content">
        <div class="edu-tabs">
            <button class="edu-tab active" data-tab="theory">Theory</button>
            <button class="edu-tab" data-tab="algorithm">Algorithm</button>
            <button class="edu-tab" data-tab="applications">Applications</button>
        </div>

        <div class="edu-tab-content active" id="theory">
            <h4>Mathematical Foundation</h4>
            <p class="edu-intro">Brief accessible introduction...</p>
            <div class="edu-equation">F = ma</div>
        </div>
        <!-- More tab content -->
    </div>
</div>
```

### Programmatic Usage
```javascript
const eduContent = {
    title: 'About This Simulation',
    icon: '🧬',
    theory: {
        intro: 'One-sentence accessible summary.',
        equation: 'rB > C',
        explanation: 'Detailed explanation...',
        concepts: [
            { term: 'Fitness', definition: 'Reproductive success...' }
        ]
    },
    algorithm: {
        overview: 'How the simulation works...',
        steps: ['Initialize population', 'Evaluate fitness', 'Select parents'],
        pseudocode: 'for each generation:\n  evaluate(population)'
    },
    applications: [
        { icon: '🧬', field: 'Biology', description: 'Studying evolution...' }
    ],
    explore: [
        'Try setting mutation rate to 0.1 and observe...',
        'Compare cooperation vs defection strategies...'
    ],
    references: [
        { title: 'Wikipedia: Game Theory', url: 'https://...', type: 'wikipedia' }
    ]
};

const panel = createEduPanel(eduContent, '#after-canvas', { startOpen: true });
```

---

## Extended Utility Library (demo-utils.js)

The utility library now includes additional classes for simulations:

### Vector2D
2D vector mathematics for physics simulations:
```javascript
const v1 = new Vector2D(3, 4);
const v2 = new Vector2D(1, 2);
console.log(v1.add(v2));         // Vector2D(4, 6)
console.log(v1.mag());           // 5
console.log(v1.normalize());     // Unit vector
console.log(v1.limit(3));        // Clamped magnitude
console.log(Vector2D.random());  // Random unit vector
```

### GridManager
Grid operations for cellular automata:
```javascript
const grid = new GridManager(100, 100, 5); // 100x100 grid, 5px cells
grid.randomize(0.3);                       // 30% alive
grid.countNeighbors(50, 50, true);         // Count with wrapping
grid.forEach((x, y, value) => {...});
grid.draw(ctx, (value) => value ? '#fff' : '#000');
```

### StatsDisplay
Live statistics panel:
```javascript
const stats = new StatsDisplay(['Generation', 'Population', 'Avg Fitness'], {
    position: 'top-left'
});
stats.updateAll({
    'Generation': 100,
    'Population': 500,
    'Avg Fitness': 0.75
});
```

### ControlsManager
Unified control panel management:
```javascript
const controls = new ControlsManager({
    container: '.controls',
    params: { speed: 1.0, count: 100 },
    callbacks: {
        'play-pause': () => togglePause(),
        reset: () => reset(),
        onParamChange: (param, value) => updateSimulation()
    },
    presets: {
        default: { speed: 1, count: 100 },
        chaos: { speed: 5, count: 500 }
    }
});
```

### ExportManager
Screenshot and data export:
```javascript
ExportManager.screenshot(canvas, 'my-simulation');
ExportManager.exportJSON(simulationData, 'data');
ExportManager.exportCSV(dataArray, ['x', 'y', 'value'], 'results');
ExportManager.copyToClipboard(canvas);
```

### TouchHandler
Mobile touch support:
```javascript
const touch = new TouchHandler(canvas, {
    onStart: (pos) => startDraw(pos),
    onMove: (pos, lastPos) => continueDraw(pos),
    onEnd: (pos) => endDraw()
});
```

### Easing Functions
```javascript
const t = Easing.easeOutCubic(progress);  // 0-1
// Available: linear, easeInQuad, easeOutQuad, easeInOutQuad,
//            easeInCubic, easeOutCubic, easeInOutCubic,
//            easeInElastic, easeOutElastic, easeOutBounce
```

### Noise Generation
```javascript
Noise.seed(12345);                         // Reproducible
const value = Noise.perlin2D(x * 0.01, y * 0.01);
const terrain = Noise.fbm(x, y, 4);        // Fractal Brownian motion
```

---

## Template Version History

**v2.0 (Current)**
- Added control panel templates (standard, drawing, physics, ABM)
- Added educational panel system (edu-panel.css, edu-panel.js)
- Extended demo-utils.js with Vector2D, GridManager, StatsDisplay
- Added ControlsManager, ExportManager, TouchHandler utilities
- Added Easing functions and Noise generation

**v1.0**
- Initial release with Canvas, Three.js, P5.js, and WebGL templates
- Full error handling and loading states
- Retina display support
- FPS monitoring
- Responsive design

---

## License

These templates are part of the CCAB project and follow the same license.
Free to use, modify, and distribute for creative coding projects.
