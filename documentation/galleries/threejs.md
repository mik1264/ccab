# Three.js Gallery Documentation

## Overview
Three.js 3D visualizations showcasing various geometric shapes, particle systems, shaders, and advanced 3D rendering techniques.

**Total Demos:** 36
**Path:** `/threejs/`
**Technology:** Three.js r149+

## Demos

### Basic Geometric Shapes (1-10)

#### 01-rotating-cube.html
**Description:** A simple rotating cube demonstrating basic 3D geometry and animation in Three.js.
**Key Features:** Basic geometry, rotation animation, material lighting
**Techniques:** BoxGeometry, MeshStandardMaterial, rotation transforms

#### 02-spinning-torus.html
**Description:** A smoothly spinning torus (donut shape) with reflective material.
**Key Features:** Torus geometry, continuous rotation, specular lighting
**Techniques:** TorusGeometry, animation loop, material properties

#### 03-icosahedron.html
**Description:** A 20-faced polyhedron rotating in 3D space with wireframe overlay.
**Key Features:** Complex polyhedron geometry, dual rendering modes
**Techniques:** IcosahedronGeometry, wireframe rendering

#### 04-dodecahedron.html
**Description:** A 12-faced regular polyhedron with dynamic rotation.
**Key Features:** Platonic solid geometry, smooth shading
**Techniques:** DodecahedronGeometry, face normals

#### 05-sphere-wireframe.html
**Description:** A sphere rendered in wireframe mode showing its mesh structure.
**Key Features:** Wireframe visualization, sphere tessellation
**Techniques:** SphereGeometry, wireframe material

#### 06-multi-cubes.html
**Description:** Multiple cubes arranged in patterns with synchronized animations.
**Key Features:** Object instancing, group transformations
**Techniques:** Multiple mesh instances, group animations

#### 07-tetrahedron.html
**Description:** A four-faced pyramid shape rotating in 3D.
**Key Features:** Simplest 3D shape, triangular faces
**Techniques:** TetrahedronGeometry, basic lighting

#### 08-octahedron.html
**Description:** An eight-faced polyhedron with smooth rotation.
**Key Features:** Dual of cube geometry, diamond-like shape
**Techniques:** OctahedronGeometry, smooth shading

#### 09-torusknot.html
**Description:** A complex knot shape wrapped around a torus.
**Key Features:** Mathematical knot geometry, complex curves
**Techniques:** TorusKnotGeometry, parametric surfaces

#### 10-geometric-mix.html
**Description:** Multiple geometric shapes animated together in a scene.
**Key Features:** Mixed geometries, coordinated animations
**Techniques:** Scene composition, multiple materials

### Particle Systems (11-20)

#### 11-particle-sphere.html
**Description:** Particles arranged in a spherical formation.
**Key Features:** Point cloud sphere, particle distribution
**Techniques:** Points geometry, spherical coordinates

#### 12-particle-wave.html
**Description:** Particles moving in wave patterns.
**Key Features:** Sine wave motion, particle dynamics
**Techniques:** Wave functions, time-based animation

#### 13-particle-spiral.html
**Description:** Particles arranged in spiral patterns.
**Key Features:** Spiral mathematics, rotating particle cloud
**Techniques:** Parametric spirals, particle positioning

#### 14-particle-explosion.html
**Description:** Particle explosion effect from a central point.
**Key Features:** Radial particle motion, velocity simulation
**Techniques:** Particle physics, outward forces

#### 15-particle-galaxy.html
**Description:** Galaxy-like particle system with spiral arms.
**Key Features:** Galaxy simulation, density variations
**Techniques:** Spiral galaxy mathematics, particle clouds

#### 16-particle-constellation.html
**Description:** Particles connected by lines forming constellation patterns.
**Key Features:** Connected particles, dynamic line drawing
**Techniques:** Line geometry, nearest neighbor connections

#### 17-particle-flow.html
**Description:** Flowing particle stream with fluid-like motion.
**Key Features:** Flow field visualization, continuous motion
**Techniques:** Vector fields, particle advection

#### 18-particle-tornado.html
**Description:** Tornado-like vortex of spinning particles.
**Key Features:** Vortex dynamics, cylindrical motion
**Techniques:** Cylindrical coordinates, rotational forces

#### 19-particle-fountain.html
**Description:** Fountain effect with particles falling under gravity.
**Key Features:** Gravity simulation, particle recycling
**Techniques:** Physics simulation, particle lifecycle

#### 20-particle-nebula.html
**Description:** Nebula-like cloud of colored particles.
**Key Features:** Color gradients, volumetric appearance
**Techniques:** Particle colors, alpha blending

### Shader Effects (21-30)

#### 21-shader-gradient.html
**Description:** Custom gradient shader on 3D geometry.
**Key Features:** Fragment shader gradients, color interpolation
**Techniques:** GLSL shaders, vertex colors

#### 22-shader-noise.html
**Description:** Procedural noise patterns using shaders.
**Key Features:** Perlin noise, animated textures
**Techniques:** Noise functions, shader animation

#### 23-shader-wave.html
**Description:** Vertex shader creating wave deformations.
**Key Features:** Vertex displacement, sine waves
**Techniques:** Vertex shaders, wave mathematics

#### 24-shader-plasma.html
**Description:** Animated plasma effect using fragment shaders.
**Key Features:** Plasma patterns, color cycling
**Techniques:** Multiple sine waves, color mapping

#### 25-shader-hologram.html
**Description:** Holographic effect with transparency and glow.
**Key Features:** Hologram simulation, edge detection
**Techniques:** Fresnel effect, rim lighting

#### 26-shader-dissolve.html
**Description:** Dissolve transition effect using shaders.
**Key Features:** Dissolution animation, noise-based masking
**Techniques:** Alpha masking, threshold effects

#### 27-shader-glow.html
**Description:** Glowing material effect with bloom.
**Key Features:** Emissive materials, post-processing
**Techniques:** Bloom effect, emission maps

#### 28-shader-reflection.html
**Description:** Real-time reflection using cube mapping.
**Key Features:** Environment mapping, reflections
**Techniques:** Cube textures, reflection vectors

#### 29-shader-ripple.html
**Description:** Water ripple effect on surfaces.
**Key Features:** Ripple propagation, wave interference
**Techniques:** Displacement mapping, wave simulation

#### 30-shader-kaleidoscope.html
**Description:** Kaleidoscope pattern generator using shaders.
**Key Features:** Symmetry patterns, color manipulation
**Techniques:** Polar coordinates, symmetry operations

### Advanced Techniques (31-36)

#### 31-instanced-geometry.html
**Description:** Efficiently rendering thousands of objects using instancing.
**Key Features:** GPU instancing, performance optimization
**Techniques:** InstancedMesh, attribute arrays

#### 32-morphing-shapes.html
**Description:** Smooth morphing between different geometries.
**Key Features:** Shape interpolation, morph targets
**Techniques:** Morph target animation, LERP

#### 33-physics-simulation.html
**Description:** Basic physics with colliding objects.
**Key Features:** Collision detection, physics response
**Techniques:** Simple physics engine, bounding boxes

#### 34-procedural-terrain.html
**Description:** Procedurally generated terrain using height maps.
**Key Features:** Terrain generation, height-based coloring
**Techniques:** Perlin noise terrain, LOD

#### 35-volumetric-lighting.html
**Description:** God rays and volumetric light effects.
**Key Features:** Light scattering, atmospheric effects
**Techniques:** Ray marching, volume rendering

#### 36-portal-effect.html
**Description:** Portal rendering with render-to-texture.
**Key Features:** Portal visualization, render targets
**Techniques:** Render to texture, stencil masking

## Common Patterns

### Standard Setup
```javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
```

### Animation Loop
```javascript
function animate() {
    requestAnimationFrame(animate);
    // Update animations
    renderer.render(scene, camera);
}
```

### Responsive Design
All demos include window resize handlers to maintain proper aspect ratios.

## Performance Notes
- Demos target 60 FPS
- Particle counts optimized for broad compatibility
- Shader complexity balanced with performance