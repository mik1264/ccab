# Game of Life Gallery Documentation

## Overview
23 creative variations of Conway's Game of Life, showcasing different rendering techniques, visual styles, and rule modifications.

**Total Demos:** 23
**Path:** `/game-of-life/`
**Technology:** Canvas 2D, WebGL, Three.js TSL
**Organization:** Three sets - classic demos, set1, and set2

## Demos

### Classic Variations
**Path:** `/game-of-life/classic/demos/`

#### 01-rainbow-cycling.html
**Description:** GPU-accelerated Game of Life with rainbow color cycling.
**Key Features:** HSV color rotation, GPU computation, smooth transitions
**Techniques:** Three.js TSL shaders, ping-pong buffering

#### 02-hexagonal-grid.html
**Description:** Game of Life on hexagonal grid instead of square grid.
**Key Features:** Hexagonal topology, 6-neighbor rules
**Techniques:** Hex grid mathematics, adapted rules

#### 05-ghost-trails.html
**Description:** Cells leave fading trails as they die.
**Key Features:** Trail persistence, gradual fade, ghosting effect
**Techniques:** Alpha blending, history buffer

#### 06-growing-circles.html
**Description:** Cells rendered as growing/shrinking circles.
**Key Features:** Smooth size transitions, organic appearance
**Techniques:** Circle rendering, size interpolation

#### 08-multi-species.html
**Description:** Multiple species competing in same grid.
**Key Features:** Different rules per species, species interaction
**Techniques:** Multi-state cells, competition dynamics

#### 09-heat-map.html
**Description:** Heat map visualization of cell activity.
**Key Features:** Activity tracking, temperature colors
**Techniques:** Activity accumulation, color gradients

#### 11-pixel-art.html
**Description:** Pixel art aesthetic with chunky pixels.
**Key Features:** Retro graphics, large pixels, dithering
**Techniques:** Nearest neighbor scaling, pixel effects

#### 13-network-web.html
**Description:** Living cells connected by network lines.
**Key Features:** Dynamic connections, web visualization
**Techniques:** Nearest neighbor connections, line drawing

#### 15-kaleidoscope.html
**Description:** Kaleidoscope symmetry applied to Game of Life.
**Key Features:** Mirror symmetry, rotating patterns
**Techniques:** Symmetry transformations, polar coordinates

#### 16-matrix-rain.html
**Description:** Matrix-style falling code rain effect.
**Key Features:** Vertical trails, green phosphor look
**Techniques:** Vertical propagation, character rendering

#### 19-musical-viz.html
**Description:** Game of Life generating musical patterns.
**Key Features:** Cell-to-sound mapping, rhythm generation
**Techniques:** Web Audio API, pattern sonification

### Set 1 Variations
**Path:** `/game-of-life/set1/`

#### viz1.html
**Description:** Classic Game of Life with smooth color transitions.
**Key Features:** Color gradients based on neighbor count
**Techniques:** Canvas 2D, color interpolation

#### viz4.html
**Description:** 3D elevation based on cell age.
**Key Features:** Height mapping, age tracking
**Techniques:** Pseudo-3D rendering, elevation maps

#### viz5.html
**Description:** Particle effects for births and deaths.
**Key Features:** Particle emission, life events
**Techniques:** Particle systems, event detection

#### viz6.html
**Description:** Wave propagation from living cells.
**Key Features:** Ripple effects, wave interference
**Techniques:** Wave simulation, propagation

#### viz16.html
**Description:** Voronoi cells instead of square grid.
**Key Features:** Voronoi tessellation, irregular cells
**Techniques:** Voronoi diagrams, region-based rules

#### viz17.html
**Description:** Fluid-like blob rendering.
**Key Features:** Metaball effect, smooth boundaries
**Techniques:** Marching squares, blob rendering

### Set 2 Variations
**Path:** `/game-of-life/set2/`

#### gol_3d_heightmap.html
**Description:** 3D heightmap visualization of Game of Life.
**Key Features:** True 3D rendering, height based on density
**Techniques:** WebGL, height field rendering

#### gol_color_trails.html
**Description:** Colored trails showing cell movement history.
**Key Features:** RGB trail mixing, path visualization
**Techniques:** Trail buffers, color blending

#### gol_emoji.html
**Description:** Emoji-based Game of Life display.
**Key Features:** Emoji characters as cells, expressive faces
**Techniques:** Emoji rendering, state mapping

#### gol_ghost_trails.html
**Description:** Enhanced ghost trail effects with transparency.
**Key Features:** Multi-layer trails, transparency effects
**Techniques:** Multiple buffers, alpha composition

#### gol_interactive_paint.html
**Description:** Interactive painting to create patterns.
**Key Features:** Mouse/touch painting, pattern drawing
**Techniques:** Interactive controls, drawing tools

#### gol_network.html
**Description:** Network graph visualization of connections.
**Key Features:** Force-directed layout, dynamic topology
**Techniques:** Graph algorithms, force simulation

## Technical Implementation

### Classic Conway's Rules
```javascript
function getNextState(current, neighbors) {
    if (current === 1) {
        // Living cell
        return (neighbors === 2 || neighbors === 3) ? 1 : 0;
    } else {
        // Dead cell
        return neighbors === 3 ? 1 : 0;
    }
}
```

### Grid Management
```javascript
// Double buffering for smooth updates
let currentGrid = createGrid(width, height);
let nextGrid = createGrid(width, height);

function update() {
    // Calculate next generation
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const neighbors = countNeighbors(currentGrid, x, y);
            nextGrid[y][x] = getNextState(currentGrid[y][x], neighbors);
        }
    }
    // Swap buffers
    [currentGrid, nextGrid] = [nextGrid, currentGrid];
}
```

### Neighbor Counting
```javascript
function countNeighbors(grid, x, y) {
    let count = 0;
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = (x + dx + width) % width;  // Wrap edges
            const ny = (y + dy + height) % height;
            count += grid[ny][nx];
        }
    }
    return count;
}
```

## Rendering Techniques

### Canvas 2D
- Simple pixel drawing
- Color gradients
- Shape rendering (circles, hexagons)

### WebGL/Three.js
- GPU acceleration
- Shader-based computation
- Real-time effects

### Visual Effects
- Trail rendering
- Particle systems
- 3D elevation
- Network connections

## Interactive Features

- **Mouse Drawing:** Click/drag to toggle cells
- **Pattern Loading:** Preset patterns (glider, oscillators)
- **Speed Control:** Adjustable simulation speed
- **Zoom/Pan:** Navigate large grids
- **Rule Modification:** Experiment with different rules

## Performance Optimization

- Double buffering for smooth updates
- GPU computation for large grids
- Spatial hashing for sparse grids
- Dirty rectangle tracking
- WebGL for complex visualizations

## Common Patterns

### Glider
```
. # .
. . #
# # #
```

### Blinker
```
# # #
```

### Block
```
# #
# #
```

### Glider Gun
Complex pattern that generates gliders periodically

## Variations and Extensions

- **Highlife:** B36/S23 rules
- **Day & Night:** B3678/S34678
- **Seeds:** B2/S
- **Life Without Death:** B3/S012345678
- **Maze:** B3/S12345
- **Multi-state:** Generations, Brian's Brain