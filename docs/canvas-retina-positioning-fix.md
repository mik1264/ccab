# Canvas Positioning Bug on Retina/High-DPI Displays

## Problem

Canvas visualizations appear incorrectly positioned (off-center, at bottom of screen) or scaled incorrectly on retina/high-DPI displays.

## Symptoms

- Visualization renders in wrong location (e.g., bottom-right instead of center)
- Title text appears misaligned from the visualization
- Canvas content appears at incorrect scale
- Issues worsen after window resize events
- Problem only manifests on high-DPI displays (devicePixelRatio > 1)

## Root Cause

Two issues combine to cause this bug:

### 1. Missing CSS Display Property

```css
/* Problematic */
#canvas { flex: 1; }
```

Without `display: block`, the canvas may not size correctly within flex containers.

### 2. Transform Stacking with ctx.scale()

```javascript
/* Problematic */
function resize() {
    canvas.width = (window.innerWidth - panelWidth) * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);  // STACKS on each call!
}
```

`ctx.scale()` is additive - each call multiplies with the existing transform. On window resize, the scale compounds (2x becomes 4x, then 8x, etc.), causing increasingly incorrect positioning.

Additionally, without explicit CSS dimensions, the canvas display size doesn't match the buffer size, causing coordinate mismatches.

## Solution

### 1. Add display: block to Canvas CSS

```css
/* Fixed */
#canvas { flex: 1; display: block; }
```

### 2. Fix the Resize Function

```javascript
/* Fixed */
function resize() {
    const displayWidth = window.innerWidth - panelWidth;
    const displayHeight = window.innerHeight;

    // Set CSS display size (what user sees)
    canvas.style.width = displayWidth + 'px';
    canvas.style.height = displayHeight + 'px';

    // Set buffer size (actual pixels for sharp rendering)
    canvas.width = displayWidth * devicePixelRatio;
    canvas.height = displayHeight * devicePixelRatio;

    // Reset transform completely, then set scale (no stacking!)
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}
```

## Key Differences

| Aspect | Problematic | Fixed |
|--------|-------------|-------|
| CSS display | Not set | `display: block` |
| CSS dimensions | Implicit | Explicit via `style.width/height` |
| Transform | `ctx.scale()` (additive) | `ctx.setTransform()` (absolute) |
| Buffer size | Set correctly | Set correctly |

## Why setTransform() Works

- `ctx.scale(a, b)` - Multiplies current transform by scale factors
- `ctx.setTransform(a, b, c, d, e, f)` - Replaces entire transform matrix

Using `setTransform(dpr, 0, 0, dpr, 0, 0)` sets an absolute scale, regardless of previous state.

## Testing

1. Open demo on a retina display (or use browser DevTools to simulate high DPI)
2. Verify visualization is centered
3. Resize window multiple times
4. Confirm positioning remains correct after each resize

## Files Fixed

This pattern was applied to fix 20 demos in `cosmology-universe/`:
- 01-big-bang-expansion.html through 20-fate-of-universe.html

## Related

- [MDN: Window.devicePixelRatio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio)
- [MDN: CanvasRenderingContext2D.setTransform()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setTransform)
- [High DPI Canvas (HTML5 Rocks)](https://www.html5rocks.com/en/tutorials/canvas/hidpi/)
