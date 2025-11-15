# WebGL Shaders Gallery Documentation

## Overview
Raw WebGL shader programming showcasing fragment shaders, raymarching, fractals, and GPU-accelerated particle systems.

**Total Demos:** 29
**Path:** `/webgl-shaders/demos/`
**Technology:** Raw WebGL 2.0, GLSL

## Demos

### Visual Effects (05-10)

#### 05-plasma-fire.html
**Description:** Animated plasma fire effect using fragment shaders.
**Key Features:** Plasma patterns, fire-like colors, animated noise
**Techniques:** Multiple sine waves, color gradients, time-based animation

#### 09-liquid-metal.html
**Description:** Liquid metal surface simulation with reflections.
**Key Features:** Metallic reflections, surface deformation
**Techniques:** Environment mapping, normal perturbation

#### 10-aurora-waves.html
**Description:** Northern lights (aurora borealis) visualization.
**Key Features:** Flowing curtains of light, color gradients
**Techniques:** Wave interference, atmospheric effects

### Fractal Geometry (12-14, 33-40)

#### 12-cube-fractal.html
**Description:** 3D fractal based on recursive cube subdivisions.
**Key Features:** 3D raymarching, infinite detail
**Techniques:** Distance fields, recursive geometry

#### 14-menger-sponge.html
**Description:** Menger sponge fractal rendered with raymarching.
**Key Features:** 3D fractal structure, infinite holes
**Techniques:** SDF (Signed Distance Fields), iterative construction

#### 33-mandelbrot-set.html
**Description:** Classic Mandelbrot set fractal explorer.
**Key Features:** Infinite zoom, complex number iteration
**Techniques:** Escape time algorithm, color mapping

#### 34-julia-set.html
**Description:** Julia set fractal with parameter control.
**Key Features:** Complex dynamics, parameter variation
**Techniques:** Julia set algorithm, smooth coloring

#### 35-burning-ship.html
**Description:** Burning Ship fractal variant of Mandelbrot.
**Key Features:** Asymmetric fractal, ship-like formations
**Techniques:** Modified Mandelbrot iteration

#### 36-newton-fractal.html
**Description:** Newton's method fractal visualization.
**Key Features:** Root-finding visualization, basin boundaries
**Techniques:** Newton-Raphson iteration, complex dynamics

#### 37-phoenix-fractal.html
**Description:** Phoenix fractal with unique recursive formula.
**Key Features:** Phoenix curve patterns, self-similarity
**Techniques:** Phoenix iteration formula

#### 38-tricorn-fractal.html
**Description:** Tricorn (Mandelbar) fractal visualization.
**Key Features:** Complex conjugate dynamics
**Techniques:** Conjugate Mandelbrot variant

#### 39-mandelbrot-zoom.html
**Description:** Deep zoom animation into Mandelbrot set.
**Key Features:** Automated zoom, infinite detail
**Techniques:** Precision handling, smooth zooming

#### 40-julia-morph.html
**Description:** Animated morphing between Julia set variations.
**Key Features:** Parameter animation, smooth transitions
**Techniques:** Julia set morphing, interpolation

### Particle Systems (19-25)

#### 19-particle-explosion.html
**Description:** GPU-accelerated particle explosion effect.
**Key Features:** Thousands of particles, radial burst
**Techniques:** GPU particle physics, velocity simulation

#### 20-particle-flow-field.html
**Description:** Particles following a flow field pattern.
**Key Features:** Vector field visualization, fluid motion
**Techniques:** Perlin noise fields, particle advection

#### 21-particle-galaxy.html
**Description:** Galaxy simulation with spiral arm particles.
**Key Features:** Spiral galaxy structure, star clusters
**Techniques:** Galaxy dynamics, density waves

#### 22-particle-swarm.html
**Description:** Swarm behavior simulation with particles.
**Key Features:** Emergent behavior, flocking patterns
**Techniques:** Boid algorithms, GPU acceleration

#### 23-particle-waves.html
**Description:** Particles moving in wave patterns.
**Key Features:** Sine wave motion, synchronized particles
**Techniques:** Wave equations, phase offsets

#### 24-particle-vortex.html
**Description:** Vortex simulation with swirling particles.
**Key Features:** Rotational dynamics, vortex physics
**Techniques:** Vortex equations, angular momentum

#### 25-particle-nebula.html
**Description:** Nebula cloud effect with colored particles.
**Key Features:** Volumetric appearance, color gradients
**Techniques:** Point sprites, alpha blending

### Biological Simulations (30)

#### 30-bacterial-colonies.html
**Description:** Bacterial colony growth pattern simulation.
**Key Features:** Growth patterns, colony formation
**Techniques:** Reaction-diffusion, cellular automata

## Technical Details

### Shader Structure
All demos use a common WebGL 2.0 setup with vertex and fragment shaders:

```glsl
// Vertex Shader
attribute vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}

// Fragment Shader
precision highp float;
uniform float time;
uniform vec2 resolution;
void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    // Shader logic here
    gl_FragColor = vec4(color, 1.0);
}
```

### Common Techniques

#### Raymarching
Used in fractals and 3D scenes:
```glsl
float map(vec3 p) {
    // Distance function
}
vec3 raymarch(vec3 ro, vec3 rd) {
    // Ray marching loop
}
```

#### Noise Functions
Perlin and simplex noise for organic effects:
```glsl
float noise(vec2 p) {
    // Noise implementation
}
```

#### Color Mapping
Converting mathematical values to colors:
```glsl
vec3 palette(float t) {
    // Color gradient mapping
}
```

## Performance Optimization

- **Fragment Shader Efficiency:** Minimized texture lookups
- **Precision Management:** Using mediump where possible
- **Early Fragment Termination:** Discard for invisible pixels
- **Loop Unrolling:** For fixed iteration counts
- **Branching Minimization:** Avoiding if-statements in hot paths

## Browser Compatibility

- Requires WebGL 2.0 support
- Fallback messages for unsupported browsers
- Mobile optimization with reduced quality options
- Performance scaling based on device capabilities