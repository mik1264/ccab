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

## Template Version History

**v1.0 (Current)**
- Initial release with Canvas, Three.js, P5.js, and WebGL templates
- Full error handling and loading states
- Retina display support
- FPS monitoring
- Responsive design

---

## License

These templates are part of the CCAB project and follow the same license.
Free to use, modify, and distribute for creative coding projects.
