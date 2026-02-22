# <span data-proof="authored" data-by="ai:claude">Web Visualization Techniques: Comparative Analysis & CCAB Library Usage</span>

> <span data-proof="authored" data-by="ai:claude">Research date: 2026-02-21 | Library version: CCAB main branch</span>

***

## <span data-proof="authored" data-by="ai:claude">Executive Summary</span>

<span data-proof="authored" data-by="ai:claude">This report compares the top visualization techniques used in modern web development — from low-level GPU APIs to high-level creative frameworks — and maps each technique against usage in the CCAB demo library (4,000+ interactive visualizations across 179 galleries).</span>

**<span data-proof="suggestion" data-id="m1771690599893_16" data-by="ai:claude" data-kind="replace"><span data-proof="authored" data-by="ai:claude">Total demo files in library:</span></span>** <span data-proof="suggestion" data-id="m1771690599893_16" data-by="ai:claude" data-kind="replace"><span data-proof="authored" data-by="ai:claude">3,462 (non-index</span></span> <span data-proof="suggestion" data-id="m1771690599893_16" data-by="ai:claude" data-kind="replace"><span data-proof="authored" data-by="ai:claude">`.html`</span><span data-proof="authored" data-by="ai:claude">files, depth ≤ 2)</span></span> 

***

## <span data-proof="authored" data-by="ai:claude">Technique Overview</span>

### <span data-proof="authored" data-by="ai:claude">1. HTML5 Canvas 2D</span>

**<span data-proof="authored" data-by="ai:claude">What it is:</span>** <span data-proof="authored" data-by="ai:claude">The browser's native 2D raster drawing API, operated via</span> <span data-proof="authored" data-by="ai:claude">`canvas.getContext('2d')`.</span>

**<span data-proof="authored" data-by="ai:claude">Key Strengths:</span>**

* <span data-proof="authored" data-by="ai:claude">Zero dependencies — native in every browser since IE9</span>

* <span data-proof="authored" data-by="ai:claude">Excellent for pixel-level manipulation, game loops, particle systems</span>

* <span data-proof="authored" data-by="ai:claude">Simple mental model: draw commands execute immediately</span>

* <span data-proof="authored" data-by="ai:claude">Supports image compositing, gradients, paths, text</span>

* <span data-proof="authored" data-by="ai:claude">Good performance for scenes under ~50,000 elements at 60 FPS</span>

**<span data-proof="authored" data-by="ai:claude">Key Weaknesses:</span>**

* <span data-proof="authored" data-by="ai:claude">CPU-bound; scales poorly beyond ~100K elements</span>

* <span data-proof="authored" data-by="ai:claude">No retained scene graph — elements lose identity once drawn</span>

* <span data-proof="authored" data-by="ai:claude">No built-in interactivity (hit-testing requires manual pixel math)</span>

* <span data-proof="authored" data-by="ai:claude">Resolution-dependent (blurs on high-DPI without manual scaling)</span>

**<span data-proof="authored" data-by="ai:claude">Performance Benchmarks (2025):</span>**

| <span data-proof="authored" data-by="ai:claude">Element Count</span> | <span data-proof="authored" data-by="ai:claude">Render Time</span> | <span data-proof="authored" data-by="ai:claude">FPS</span> |
| -------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| <span data-proof="authored" data-by="ai:claude">1,000</span>         | <span data-proof="authored" data-by="ai:claude">3ms</span>         | <span data-proof="authored" data-by="ai:claude">60</span>  |
| <span data-proof="authored" data-by="ai:claude">10,000</span>        | <span data-proof="authored" data-by="ai:claude">18ms</span>        | <span data-proof="authored" data-by="ai:claude">60</span>  |
| <span data-proof="authored" data-by="ai:claude">50,000</span>        | <span data-proof="authored" data-by="ai:claude">45ms</span>        | <span data-proof="authored" data-by="ai:claude">55</span>  |
| <span data-proof="authored" data-by="ai:claude">100,000</span>       | <span data-proof="authored" data-by="ai:claude">95ms</span>        | <span data-proof="authored" data-by="ai:claude">40</span>  |

**<span data-proof="authored" data-by="ai:claude">Best for:</span>** <span data-proof="authored" data-by="ai:claude">Game loops, cellular automata, generative art, physics simulations, screensavers, agent-based models.</span>

***

### <span data-proof="authored" data-by="ai:claude">2. SVG (Scalable Vector Graphics)</span>

**<span data-proof="authored" data-by="ai:claude">What it is:</span>** <span data-proof="authored" data-by="ai:claude">XML-based vector format rendered by the browser's compositor. Each shape is a DOM element.</span>

**<span data-proof="authored" data-by="ai:claude">Key Strengths:</span>**

* <span data-proof="authored" data-by="ai:claude">Resolution-independent — crisp at any zoom/DPI</span>

* <span data-proof="authored" data-by="ai:claude">DOM integration: CSS styling, hover events, screen readers</span>

* <span data-proof="authored" data-by="ai:claude">Declarative: shapes are addressable objects, not pixels</span>

* <span data-proof="authored" data-by="ai:claude">Strong accessibility (ARIA labels, text remains selectable)</span>

* <span data-proof="authored" data-by="ai:claude">Excellent for charts with fewer than ~5,000 elements</span>

**<span data-proof="authored" data-by="ai:claude">Key Weaknesses:</span>**

* <span data-proof="authored" data-by="ai:claude">Performance collapses with large node counts (DOM overhead)</span>

* <span data-proof="authored" data-by="ai:claude">Not suitable for real-time animations with 10K+ elements</span>

* <span data-proof="authored" data-by="ai:claude">Memory-intensive for complex scenes</span>

**<span data-proof="authored" data-by="ai:claude">Performance Benchmarks (2025):</span>**

| <span data-proof="authored" data-by="ai:claude">Element Count</span> | <span data-proof="authored" data-by="ai:claude">Render Time</span> | <span data-proof="authored" data-by="ai:claude">FPS</span> |
| -------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| <span data-proof="authored" data-by="ai:claude">100</span>           | <span data-proof="authored" data-by="ai:claude">2ms</span>         | <span data-proof="authored" data-by="ai:claude">60</span>  |
| <span data-proof="authored" data-by="ai:claude">1,000</span>         | <span data-proof="authored" data-by="ai:claude">15ms</span>        | <span data-proof="authored" data-by="ai:claude">60</span>  |
| <span data-proof="authored" data-by="ai:claude">5,000</span>         | <span data-proof="authored" data-by="ai:claude">85ms</span>        | <span data-proof="authored" data-by="ai:claude">35</span>  |
| <span data-proof="authored" data-by="ai:claude">10,000</span>        | <span data-proof="authored" data-by="ai:claude">210ms</span>       | <span data-proof="authored" data-by="ai:claude">12</span>  |

**<span data-proof="authored" data-by="ai:claude">Best for:</span>** <span data-proof="authored" data-by="ai:claude">Data dashboards, org charts, interactive diagrams, icons/illustrations, animated infographics.</span>

***

### <span data-proof="authored" data-by="ai:claude">3. WebGL (Raw)</span>

**<span data-proof="authored" data-by="ai:claude">What it is:</span>** <span data-proof="authored" data-by="ai:claude">A low-level JavaScript API exposing OpenGL ES 2.0/3.0 for GPU-accelerated rendering. Requires writing GLSL shaders.</span>

**<span data-proof="authored" data-by="ai:claude">Key Strengths:</span>**

* <span data-proof="authored" data-by="ai:claude">Massive GPU parallelism: 100K+ elements at 60 FPS</span>

* <span data-proof="authored" data-by="ai:claude">Full control over vertex/fragment pipelines</span>

* <span data-proof="authored" data-by="ai:claude">Enables custom shader art (procedural graphics, raymarching)</span>

* <span data-proof="authored" data-by="ai:claude">Both 2D and 3D; compute-like operations via fragment shaders</span>

**<span data-proof="authored" data-by="ai:claude">Key Weaknesses:</span>**

* <span data-proof="authored" data-by="ai:claude">Steep learning curve (GLSL, matrices, buffer management)</span>

* <span data-proof="authored" data-by="ai:claude">Verbose boilerplate for simple tasks</span>

* <span data-proof="authored" data-by="ai:claude">Debugging tooling weaker than higher-level APIs</span>

* <span data-proof="authored" data-by="ai:claude">WebGL 1.0 has inconsistencies across browsers; WebGL 2.0 resolves most</span>

**<span data-proof="authored" data-by="ai:claude">Performance Benchmarks (2025):</span>**

| <span data-proof="authored" data-by="ai:claude">Element Count</span> | <span data-proof="authored" data-by="ai:claude">Render Time</span> | <span data-proof="authored" data-by="ai:claude">FPS</span> |
| -------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| <span data-proof="authored" data-by="ai:claude">10,000</span>        | <span data-proof="authored" data-by="ai:claude">2ms</span>         | <span data-proof="authored" data-by="ai:claude">60</span>  |
| <span data-proof="authored" data-by="ai:claude">100,000</span>       | <span data-proof="authored" data-by="ai:claude">8ms</span>         | <span data-proof="authored" data-by="ai:claude">60</span>  |
| <span data-proof="authored" data-by="ai:claude">500,000</span>       | <span data-proof="authored" data-by="ai:claude">25ms</span>        | <span data-proof="authored" data-by="ai:claude">55</span>  |
| <span data-proof="authored" data-by="ai:claude">1,000,000</span>     | <span data-proof="authored" data-by="ai:claude">45ms</span>        | <span data-proof="authored" data-by="ai:claude">45</span>  |

**<span data-proof="authored" data-by="ai:claude">Best for:</span>** <span data-proof="authored" data-by="ai:claude">Shader art, particle systems at GPU scale, custom 3D engines, visual effects.</span>

***

### <span data-proof="authored" data-by="ai:claude">4. WebGPU</span>

**<span data-proof="authored" data-by="ai:claude">What it is:</span>** <span data-proof="authored" data-by="ai:claude">The successor to WebGL, exposing modern GPU compute (similar to Vulkan/Metal). Includes compute shaders and explicit memory management.</span>

**<span data-proof="authored" data-by="ai:claude">Key Strengths:</span>**

* <span data-proof="authored" data-by="ai:claude">Compute shaders: GPU-side data processing without round-trips</span>

* <span data-proof="authored" data-by="ai:claude">Explicit memory model eliminates driver-side surprises</span>

* <span data-proof="authored" data-by="ai:claude">Up to 10M+ points at 45+ FPS on consumer hardware (Chrome 124+ benchmarks)</span>

* <span data-proof="authored" data-by="ai:claude">Better multi-threading support via SharedArrayBuffer</span>

* <span data-proof="authored" data-by="ai:claude">Future-proof architecture</span>

**<span data-proof="authored" data-by="ai:claude">Key Weaknesses:</span>**

* <span data-proof="authored" data-by="ai:claude">Browser support still maturing (Chrome/Edge full; Firefox/Safari partial)</span>

* <span data-proof="authored" data-by="ai:claude">Even steeper learning curve than WebGL</span>

* <span data-proof="authored" data-by="ai:claude">Requires WGSL shader language (not GLSL)</span>

* <span data-proof="authored" data-by="ai:claude">Small ecosystem; fewer tutorials</span>

**<span data-proof="authored" data-by="ai:claude">Best for:</span>** <span data-proof="authored" data-by="ai:claude">Scientific simulations, fluid dynamics, real-time GPU compute, next-gen visualizations.</span>

***

### <span data-proof="authored" data-by="ai:claude">5. Three.js</span>

**<span data-proof="authored" data-by="ai:claude">What it is:</span>** <span data-proof="authored" data-by="ai:claude">The most popular high-level 3D JavaScript library, abstracting WebGL into a scene graph with meshes, materials, lights, cameras, and renderers.</span>

**<span data-proof="authored" data-by="ai:claude">Key Strengths:</span>**

* <span data-proof="authored" data-by="ai:claude">Dramatically reduces WebGL boilerplate</span>

* <span data-proof="authored" data-by="ai:claude">Rich ecosystem: loaders, post-processing, geometry helpers</span>

* <span data-proof="authored" data-by="ai:claude">Three.js Shading Language (TSL) enables portable shader authoring</span>

* <span data-proof="authored" data-by="ai:claude">Active community, extensive examples</span>

* <span data-proof="authored" data-by="ai:claude">OrbitControls, GLTF import, raycasting built-in</span>

**<span data-proof="authored" data-by="ai:claude">Key Weaknesses:</span>**

* <span data-proof="authored" data-by="ai:claude">Overkill for 2D tasks</span>

* <span data-proof="authored" data-by="ai:claude">Bundle size (~600KB min+gzip)</span>

* <span data-proof="authored" data-by="ai:claude">Abstractions can make custom GPU work harder to reason about</span>

* <span data-proof="authored" data-by="ai:claude">3D math knowledge still required</span>

**<span data-proof="authored" data-by="ai:claude">Best for:</span>** <span data-proof="authored" data-by="ai:claude">3D scenes, data globes, physics-based 3D, VFX showcases, interactive product demos.</span>

***

### <span data-proof="authored" data-by="ai:claude">6. D3.js</span>

**<span data-proof="authored" data-by="ai:claude">What it is:</span>** <span data-proof="authored" data-by="ai:claude">A data-driven document manipulation library. Binds data to DOM/SVG elements and applies transformations declaratively.</span>

**<span data-proof="authored" data-by="ai:claude">Key Strengths:</span>**

* <span data-proof="authored" data-by="ai:claude">Unmatched flexibility for custom chart types</span>

* <span data-proof="authored" data-by="ai:claude">First-class SVG, Canvas, and WebGL backends</span>

* <span data-proof="authored" data-by="ai:claude">Scales, axes, projections, force layouts, geographic tools</span>

* <span data-proof="authored" data-by="ai:claude">Supports transitions and enter/update/exit patterns</span>

* <span data-proof="authored" data-by="ai:claude">Used by major news orgs (NYT, Washington Post, BBC)</span>

**<span data-proof="authored" data-by="ai:claude">Key Weaknesses:</span>**

* <span data-proof="authored" data-by="ai:claude">Steepest learning curve of all visualization libraries</span>

* <span data-proof="authored" data-by="ai:claude">Verbose for common chart types (use Vega-Lite or Chart.js instead)</span>

* <span data-proof="authored" data-by="ai:claude">SVG-based output degrades at high element counts</span>

* <span data-proof="authored" data-by="ai:claude">Imperative API mixed with functional patterns can confuse newcomers</span>

**<span data-proof="authored" data-by="ai:claude">Best for:</span>** <span data-proof="authored" data-by="ai:claude">Custom data stories, journalism graphics, interactive geo maps, network graphs, statistical charts.</span>

***

### <span data-proof="authored" data-by="ai:claude">7. P5.js</span>

**<span data-proof="authored" data-by="ai:claude">What it is:</span>** <span data-proof="authored" data-by="ai:claude">A JavaScript port of Processing — a beginner-friendly creative coding framework built on Canvas 2D (with some WebGL via</span> <span data-proof="authored" data-by="ai:claude">`WEBGL`</span> <span data-proof="authored" data-by="ai:claude">mode).</span>

**<span data-proof="authored" data-by="ai:claude">Key Strengths:</span>**

* <span data-proof="authored" data-by="ai:claude">Lowest barrier to entry; designed for artists and educators</span>

* <span data-proof="authored" data-by="ai:claude">`setup()`</span> <span data-proof="authored" data-by="ai:claude">/</span> <span data-proof="authored" data-by="ai:claude">`draw()`</span> <span data-proof="authored" data-by="ai:claude">loop mental model mirrors Processing</span>

* <span data-proof="authored" data-by="ai:claude">Built-in vector math, noise, color, input handling</span>

* <span data-proof="authored" data-by="ai:claude">15+ years of community examples and ports</span>

* <span data-proof="authored" data-by="ai:claude">`p5.sound`</span> <span data-proof="authored" data-by="ai:claude">for audio integration</span>

**<span data-proof="authored" data-by="ai:claude">Key Weaknesses:</span>**

* <span data-proof="authored" data-by="ai:claude">Performance limited by Canvas 2D ceiling</span>

* <span data-proof="authored" data-by="ai:claude">Global namespace pollution in non-instance mode</span>

* <span data-proof="authored" data-by="ai:claude">3D (WEBGL mode) far weaker than Three.js</span>

* <span data-proof="authored" data-by="ai:claude">Not production-optimized — suited for sketches and prototypes</span>

**<span data-proof="authored" data-by="ai:claude">Best for:</span>** <span data-proof="authored" data-by="ai:claude">Creative coding education, generative art, interactive sketches, algorithmic patterns.</span>

***

### <span data-proof="authored" data-by="ai:claude">8. PixiJS</span>

**<span data-proof="authored" data-by="ai:claude">What it is:</span>** <span data-proof="authored" data-by="ai:claude">A 2D rendering engine using WebGL (Canvas fallback), optimized for sprites, textures, and high-performance 2D games.</span>

**<span data-proof="authored" data-by="ai:claude">Key Strengths:</span>**

* <span data-proof="authored" data-by="ai:claude">GPU-accelerated sprite batching: handles 10K+ animated sprites at 60 FPS</span>

* <span data-proof="authored" data-by="ai:claude">Comprehensive filter/shader system</span>

* <span data-proof="authored" data-by="ai:claude">Excellent texture atlas support</span>

* <span data-proof="authored" data-by="ai:claude">Good balance between ease and performance for 2D</span>

**<span data-proof="authored" data-by="ai:claude">Key Weaknesses:</span>**

* <span data-proof="authored" data-by="ai:claude">Primarily 2D; limited 3D support</span>

* <span data-proof="authored" data-by="ai:claude">Smaller community than Three.js</span>

* <span data-proof="authored" data-by="ai:claude">More focused on game-style rendering than data visualization</span>

**<span data-proof="authored" data-by="ai:claude">Best for:</span>** <span data-proof="authored" data-by="ai:claude">Sprite animations, 2D games, interactive media with many moving image assets.</span>

***

### <span data-proof="authored" data-by="ai:claude">9. Web Audio API</span>

**<span data-proof="authored" data-by="ai:claude">What it is:</span>** <span data-proof="authored" data-by="ai:claude">A native browser API for audio processing, synthesis, and analysis. Provides</span> <span data-proof="authored" data-by="ai:claude">`AudioContext`, oscillators, filters, and</span> <span data-proof="authored" data-by="ai:claude">`AnalyserNode`</span> <span data-proof="authored" data-by="ai:claude">for waveform/frequency visualization.</span>

**<span data-proof="authored" data-by="ai:claude">Key Strengths:</span>**

* <span data-proof="authored" data-by="ai:claude">Native browser support, no dependencies</span>

* <span data-proof="authored" data-by="ai:claude">Real-time FFT and waveform data via</span> <span data-proof="authored" data-by="ai:claude">`AnalyserNode`</span>

* <span data-proof="authored" data-by="ai:claude">Integrates with Canvas 2D/WebGL for audio-reactive visuals</span>

* <span data-proof="authored" data-by="ai:claude">Tone.js library extends it with musical abstractions</span>

**<span data-proof="authored" data-by="ai:claude">Key Weaknesses:</span>**

* <span data-proof="authored" data-by="ai:claude">Complex graph model (source → effect → destination)</span>

* <span data-proof="authored" data-by="ai:claude">Limited precision for pro-audio use (Web MIDI + WASM preferred)</span>

* <span data-proof="authored" data-by="ai:claude">AudioWorklets add complexity for custom DSP</span>

**<span data-proof="authored" data-by="ai:claude">Best for:</span>** <span data-proof="authored" data-by="ai:claude">Audio visualizers, music theory demos, synthesizers, sound design tools, rhythm generators.</span>

***

### <span data-proof="authored" data-by="ai:claude">10. WebAssembly (WASM)</span>

**<span data-proof="authored" data-by="ai:claude">What it is:</span>** <span data-proof="authored" data-by="ai:claude">A binary instruction format enabling C/C++/Rust code to run at near-native speed in the browser. Pairs with JavaScript via the WASM JS API.</span>

**<span data-proof="authored" data-by="ai:claude">Key Strengths:</span>**

* <span data-proof="authored" data-by="ai:claude">Near-native execution speed: 2–10× faster than JS for compute-heavy tasks</span>

* <span data-proof="authored" data-by="ai:claude">No garbage collection pauses (Rust-based WASM)</span>

* <span data-proof="authored" data-by="ai:claude">Language-agnostic: port existing C++/Rust scientific code</span>

* <span data-proof="authored" data-by="ai:claude">Enables in-browser video encoding, physics engines, compilers</span>

* <span data-proof="authored" data-by="ai:claude">Works alongside JavaScript (not a replacement)</span>

**<span data-proof="authored" data-by="ai:claude">Key Weaknesses:</span>**

* <span data-proof="authored" data-by="ai:claude">Complex build toolchain (Emscripten, wasm-pack)</span>

* <span data-proof="authored" data-by="ai:claude">Larger initial payload (binary + JS glue)</span>

* <span data-proof="authored" data-by="ai:claude">Debugging harder than JavaScript</span>

* <span data-proof="authored" data-by="ai:claude">Memory management still manual in C/C++ targets</span>

**<span data-proof="authored" data-by="ai:claude">Best for:</span>** <span data-proof="authored" data-by="ai:claude">CPU-intensive simulations, audio DSP, image/video processing, scientific computation, game engines.</span>

***

## <span data-proof="authored" data-by="ai:claude">Comparative Decision Matrix</span>

| <span data-proof="authored" data-by="ai:claude">Technique</span>     | <span data-proof="authored" data-by="ai:claude">Performance</span> | <span data-proof="authored" data-by="ai:claude">Ease of Use</span> | <span data-proof="authored" data-by="ai:claude">Interactivity</span> | <span data-proof="authored" data-by="ai:claude">3D Support</span> | <span data-proof="authored" data-by="ai:claude">Dependencies</span> | <span data-proof="authored" data-by="ai:claude">Best Scale</span>          |
| -------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ | -------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| <span data-proof="authored" data-by="ai:claude">Canvas 2D</span>     | <span data-proof="authored" data-by="ai:claude">Good</span>        | <span data-proof="authored" data-by="ai:claude">★★★★★</span>       | <span data-proof="authored" data-by="ai:claude">Manual</span>        | <span data-proof="authored" data-by="ai:claude">No</span>         | <span data-proof="authored" data-by="ai:claude">None</span>         | <span data-proof="authored" data-by="ai:claude">Up to 100K elements</span> |
| <span data-proof="authored" data-by="ai:claude">SVG</span>           | <span data-proof="authored" data-by="ai:claude">DOM-limited</span> | <span data-proof="authored" data-by="ai:claude">★★★★☆</span>       | <span data-proof="authored" data-by="ai:claude">Native</span>        | <span data-proof="authored" data-by="ai:claude">No</span>         | <span data-proof="authored" data-by="ai:claude">None</span>         | <span data-proof="authored" data-by="ai:claude">Up to 5K elements</span>   |
| <span data-proof="authored" data-by="ai:claude">WebGL (raw)</span>   | <span data-proof="authored" data-by="ai:claude">Excellent</span>   | <span data-proof="authored" data-by="ai:claude">★★☆☆☆</span>       | <span data-proof="authored" data-by="ai:claude">Manual</span>        | <span data-proof="authored" data-by="ai:claude">Yes</span>        | <span data-proof="authored" data-by="ai:claude">None</span>         | <span data-proof="authored" data-by="ai:claude">1M+ elements</span>        |
| <span data-proof="authored" data-by="ai:claude">WebGPU</span>        | <span data-proof="authored" data-by="ai:claude">Best</span>        | <span data-proof="authored" data-by="ai:claude">★★☆☆☆</span>       | <span data-proof="authored" data-by="ai:claude">Manual</span>        | <span data-proof="authored" data-by="ai:claude">Yes</span>        | <span data-proof="authored" data-by="ai:claude">None</span>         | <span data-proof="authored" data-by="ai:claude">10M+ elements</span>       |
| <span data-proof="authored" data-by="ai:claude">Three.js</span>      | <span data-proof="authored" data-by="ai:claude">Very Good</span>   | <span data-proof="authored" data-by="ai:claude">★★★★☆</span>       | <span data-proof="authored" data-by="ai:claude">Plugin</span>        | <span data-proof="authored" data-by="ai:claude">Yes</span>        | <span data-proof="authored" data-by="ai:claude">~600KB</span>       | <span data-proof="authored" data-by="ai:claude">100K–1M</span>             |
| <span data-proof="authored" data-by="ai:claude">D3.js</span>         | <span data-proof="authored" data-by="ai:claude">Good</span>        | <span data-proof="authored" data-by="ai:claude">★★★☆☆</span>       | <span data-proof="authored" data-by="ai:claude">Native</span>        | <span data-proof="authored" data-by="ai:claude">Partial</span>    | <span data-proof="authored" data-by="ai:claude">~240KB</span>       | <span data-proof="authored" data-by="ai:claude">Up to 10K (SVG)</span>     |
| <span data-proof="authored" data-by="ai:claude">P5.js</span>         | <span data-proof="authored" data-by="ai:claude">Moderate</span>    | <span data-proof="authored" data-by="ai:claude">★★★★★</span>       | <span data-proof="authored" data-by="ai:claude">Built-in</span>      | <span data-proof="authored" data-by="ai:claude">Limited</span>    | <span data-proof="authored" data-by="ai:claude">~800KB</span>       | <span data-proof="authored" data-by="ai:claude">Up to 50K</span>           |
| <span data-proof="authored" data-by="ai:claude">PixiJS</span>        | <span data-proof="authored" data-by="ai:claude">Very Good</span>   | <span data-proof="authored" data-by="ai:claude">★★★★☆</span>       | <span data-proof="authored" data-by="ai:claude">Built-in</span>      | <span data-proof="authored" data-by="ai:claude">No</span>         | <span data-proof="authored" data-by="ai:claude">~1MB</span>         | <span data-proof="authored" data-by="ai:claude">Up to 500K sprites</span>  |
| <span data-proof="authored" data-by="ai:claude">Web Audio API</span> | <span data-proof="authored" data-by="ai:claude">Native</span>      | <span data-proof="authored" data-by="ai:claude">★★★☆☆</span>       | <span data-proof="authored" data-by="ai:claude">Built-in</span>      | <span data-proof="authored" data-by="ai:claude">N/A</span>        | <span data-proof="authored" data-by="ai:claude">None</span>         | <span data-proof="authored" data-by="ai:claude">Real-time</span>           |
| <span data-proof="authored" data-by="ai:claude">WebAssembly</span>   | <span data-proof="authored" data-by="ai:claude">Near-native</span> | <span data-proof="authored" data-by="ai:claude">★★☆☆☆</span>       | <span data-proof="authored" data-by="ai:claude">Via JS</span>        | <span data-proof="authored" data-by="ai:claude">N/A</span>        | <span data-proof="authored" data-by="ai:claude">Build chain</span>  | <span data-proof="authored" data-by="ai:claude">Unlimited</span>           |

***

## <span data-proof="authored" data-by="ai:claude">CCAB Library Usage Analysis</span>

### <span data-proof="authored" data-by="ai:claude">Overall Library Scale</span>

| <span data-proof="authored" data-by="ai:claude">Metric</span>                        | <span data-proof="authored" data-by="ai:claude">Count</span>                                                                                                               |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **<span data-proof="authored" data-by="ai:claude">Total demo files</span>**          | **<span data-proof="authored" data-by="ai:claude">3,462</span>**                                                                                                           |
| **<span data-proof="authored" data-by="ai:claude">Gallery directories</span>**       | **<span data-proof="authored" data-by="ai:claude">179</span>**                                                                                                             |
| **<span data-proof="authored" data-by="ai:claude">NetLogo agent-based demos</span>** | **<span data-proof="authored" data-by="ai:claude">598</span>**                                                                                                             |
| **<span data-proof="authored" data-by="ai:claude">Demos excluding NetLogo</span>**   | **<span data-proof="suggestion" data-id="m1771690599880_15" data-by="ai:claude" data-kind="replace"><span data-proof="authored" data-by="ai:claude">~2,864</span></span>** |

***

### <span data-proof="authored" data-by="ai:claude">Technology-Specific Gallery Counts</span>

<span data-proof="authored" data-by="ai:claude">These galleries are</span> **<span data-proof="authored" data-by="ai:claude">dedicated</span>** <span data-proof="authored" data-by="ai:claude">to a single primary technology:</span>

| <span data-proof="authored" data-by="ai:claude">Technology</span>                 | <span data-proof="authored" data-by="ai:claude">Gallery</span>                   | <span data-proof="authored" data-by="ai:claude">Demo Count</span> |
| --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **<span data-proof="authored" data-by="ai:claude">Three.js</span>**               | <span data-proof="authored" data-by="ai:claude">`threejs/`</span>                | <span data-proof="authored" data-by="ai:claude">54</span>         |
| **<span data-proof="authored" data-by="ai:claude">Three.js (TSL Shaders)</span>** | <span data-proof="authored" data-by="ai:claude">`tsl-shaders/`</span>            | <span data-proof="authored" data-by="ai:claude">19</span>         |
| **<span data-proof="authored" data-by="ai:claude">Three.js (Complex)</span>**     | <span data-proof="authored" data-by="ai:claude">`complex-showcases/`</span>      | <span data-proof="authored" data-by="ai:claude">15</span>         |
| **<span data-proof="authored" data-by="ai:claude">Three.js subtotal</span>**      | <span data-proof="authored" data-by="ai:claude">—</span>                         | **<span data-proof="authored" data-by="ai:claude">88</span>**     |
| **<span data-proof="authored" data-by="ai:claude">WebGL (raw shaders)</span>**    | <span data-proof="authored" data-by="ai:claude">`webgl-shaders/`</span>          | <span data-proof="authored" data-by="ai:claude">29</span>         |
| **<span data-proof="authored" data-by="ai:claude">WebGPU</span>**                 | <span data-proof="authored" data-by="ai:claude">`webgpu/`</span>                 | <span data-proof="authored" data-by="ai:claude">12</span>         |
| **<span data-proof="authored" data-by="ai:claude">P5.js</span>**                  | <span data-proof="authored" data-by="ai:claude">`p5-generative-art/`</span>      | <span data-proof="authored" data-by="ai:claude">15</span>         |
| **<span data-proof="authored" data-by="ai:claude">PixiJS</span>**                 | <span data-proof="authored" data-by="ai:claude">`pixi-sprite-animations/`</span> | <span data-proof="authored" data-by="ai:claude">17</span>         |
| **<span data-proof="authored" data-by="ai:claude">D3.js</span>**                  | <span data-proof="authored" data-by="ai:claude">`d3js/`</span>                   | <span data-proof="authored" data-by="ai:claude">20</span>         |
| **<span data-proof="authored" data-by="ai:claude">Web Audio API</span>**          | <span data-proof="authored" data-by="ai:claude">`web-audio-api/`</span>          | <span data-proof="authored" data-by="ai:claude">48</span>         |
| **<span data-proof="authored" data-by="ai:claude">WebAssembly</span>**            | <span data-proof="authored" data-by="ai:claude">`webassembly/`</span>            | <span data-proof="authored" data-by="ai:claude">13</span>         |
| **<span data-proof="authored" data-by="ai:claude">SVG Animations</span>**         | <span data-proof="authored" data-by="ai:claude">`svg-animations/`</span>         | <span data-proof="authored" data-by="ai:claude">5</span>          |
| **<span data-proof="authored" data-by="ai:claude">NetLogo (agent-based)</span>**  | <span data-proof="authored" data-by="ai:claude">`netlogo-simulations/`</span>    | <span data-proof="authored" data-by="ai:claude">148</span>        |
| **<span data-proof="authored" data-by="ai:claude">NetLogo II</span>**             | <span data-proof="authored" data-by="ai:claude">`netlogo-simulations-2/`</span>  | <span data-proof="authored" data-by="ai:claude">149</span>        |
| **<span data-proof="authored" data-by="ai:claude">NetLogo III</span>**            | <span data-proof="authored" data-by="ai:claude">`netlogo-simulations-3/`</span>  | <span data-proof="authored" data-by="ai:claude">301</span>        |
| **<span data-proof="authored" data-by="ai:claude">NetLogo subtotal</span>**       | <span data-proof="authored" data-by="ai:claude">—</span>                         | **<span data-proof="authored" data-by="ai:claude">598</span>**    |

***

### <span data-proof="authored" data-by="ai:claude">Canvas 2D–Dominant Galleries</span>

<span data-proof="authored" data-by="ai:claude">The majority of the library uses HTML5 Canvas 2D (native API) — either directly or via Canvas-backed libraries. Key examples:</span>

| <span data-proof="authored" data-by="ai:claude">Gallery</span>                        | <span data-proof="authored" data-by="ai:claude">Demos</span>         | <span data-proof="authored" data-by="ai:claude">Notes</span>                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span data-proof="authored" data-by="ai:claude">`surprising-paradoxes/`</span>        | <span data-proof="authored" data-by="ai:claude">514</span>           | <span data-proof="authored" data-by="ai:claude">Math & probability paradoxes</span>                                                                                                                                                                                                                                                                                                                    |
| <span data-proof="authored" data-by="ai:claude">`screensaver-patterns/`</span>        | <span data-proof="authored" data-by="ai:claude">100</span>           | <span data-proof="authored" data-by="ai:claude">Abstract Canvas animations</span>                                                                                                                                                                                                                                                                                                                      |
| <span data-proof="authored" data-by="ai:claude">`satisfying-animations/`</span>       | <span data-proof="authored" data-by="ai:claude">104</span>           | <span data-proof="authored" data-by="ai:claude">Loop animations</span>                                                                                                                                                                                                                                                                                                                                 |
| <span data-proof="authored" data-by="ai:claude">`physics-simulations/`</span>         | <span data-proof="authored" data-by="ai:claude">44</span>            | <span data-proof="authored" data-by="ai:claude">Rigid body, springs, waves</span>                                                                                                                                                                                                                                                                                                                      |
| <span data-proof="authored" data-by="ai:claude">`emergent-behaviors/`</span>          | <span data-proof="authored" data-by="ai:claude">53</span>            | <span data-proof="authored" data-by="ai:claude">Swarms, self-organization</span>                                                                                                                                                                                                                                                                                                                       |
| <span data-proof="authored" data-by="ai:claude">`elliptic-curve-murmurations/`</span> | <span data-proof="authored" data-by="ai:claude">39</span>            | <span data-proof="authored" data-by="ai:claude">Math visualizations</span>                                                                                                                                                                                                                                                                                                                             |
| <span data-proof="authored" data-by="ai:claude">`solar-flare-visualizations/`</span>  | <span data-proof="authored" data-by="ai:claude">39</span>            | <span data-proof="authored" data-by="ai:claude">Space phenomena</span>                                                                                                                                                                                                                                                                                                                                 |
| <span data-proof="authored" data-by="ai:claude">`scientific-visualizations/`</span>   | <span data-proof="authored" data-by="ai:claude">33</span>            | <span data-proof="authored" data-by="ai:claude">Physics/chemistry/biology</span>                                                                                                                                                                                                                                                                                                                       |
| <span data-proof="authored" data-by="ai:claude">`biological-simulations/`</span>      | <span data-proof="authored" data-by="ai:claude">30</span>            | <span data-proof="authored" data-by="ai:claude">Evolution, cellular growth</span>                                                                                                                                                                                                                                                                                                                      |
| <span data-proof="authored" data-by="ai:claude">`visualization-algorithms/`</span>    | <span data-proof="authored" data-by="ai:claude">31</span>            | <span data-proof="authored" data-by="ai:claude">Voronoi, pathfinding, sorting</span>                                                                                                                                                                                                                                                                                                                   |
| <span data-proof="authored" data-by="ai:claude">`data-structures/`</span>             | <span data-proof="authored" data-by="ai:claude">23</span>            | <span data-proof="authored" data-by="ai:claude">Trees, graphs, heaps</span>                                                                                                                                                                                                                                                                                                                            |
| <span data-proof="authored" data-by="ai:claude">`game-of-life/`</span>                | <span data-proof="authored" data-by="ai:claude">17</span>            | <span data-proof="authored" data-by="ai:claude">Conway's Game of Life variants</span>                                                                                                                                                                                                                                                                                                                  |
| <span data-proof="authored" data-by="ai:claude">`wolfram-ca/`</span>                  | <span data-proof="authored" data-by="ai:claude">1 (256 rules)</span> | <span data-proof="authored" data-by="ai:claude">All 256 Wolfram ECA rules</span><span data-proof="suggestion" data-id="m1771690592475_4" data-by="ai:claude" data-kind="insert"><span data-proof="authored" data-by="ai:claude">
music-sequencers/
50
Generative music, step sequencers
gravity-orbits/
49
Orbital mechanics, n-body
ml-visualizations/
35
Neural nets, gradient descent</span></span> |
| <span data-proof="authored" data-by="ai:claude">`algorithmic-art/`</span>             | <span data-proof="authored" data-by="ai:claude">17</span>            | <span data-proof="authored" data-by="ai:claude">Fractals, generative patterns</span>                                                                                                                                                                                                                                                                                                                   |
| <span data-proof="authored" data-by="ai:claude">`altruism-evolution/`</span>          | <span data-proof="authored" data-by="ai:claude">16</span>            | <span data-proof="authored" data-by="ai:claude">Evolutionary game theory</span>                                                                                                                                                                                                                                                                                                                        |
| <span data-proof="authored" data-by="ai:claude">`cellular-automata-lab/`</span>       | <span data-proof="authored" data-by="ai:claude">15</span>            | <span data-proof="authored" data-by="ai:claude">CA experiments</span>                                                                                                                                                                                                                                                                                                                                  |
| <span data-proof="authored" data-by="ai:claude">`particle-systems/`</span>            | <span data-proof="authored" data-by="ai:claude">20</span>            | <span data-proof="authored" data-by="ai:claude">GPU-style particle Canvas</span>                                                                                                                                                                                                                                                                                                                       |
| <span data-proof="authored" data-by="ai:claude">`chaos-attractors/`</span>            | <span data-proof="authored" data-by="ai:claude">8</span>             | <span data-proof="authored" data-by="ai:claude">Lorenz, Rössler, Hénon</span>                                                                                                                                                                                                                                                                                                                          |
| <span data-proof="authored" data-by="ai:claude">`lissajous/`</span>                   | <span data-proof="authored" data-by="ai:claude">1</span>             | <span data-proof="authored" data-by="ai:claude">Parametric curve explorer</span>                                                                                                                                                                                                                                                                                                                       |
| <span data-proof="authored" data-by="ai:claude">`visualizations/`</span>              | <span data-proof="authored" data-by="ai:claude">9</span>             | <span data-proof="authored" data-by="ai:claude">Basic Canvas 2D demos</span>                                                                                                                                                                                                                                                                                                                           |

**<span data-proof="authored" data-by="ai:claude">Estimated Canvas 2D–primary demo count: ~1,600–1,800</span>**

***

### <span data-proof="authored" data-by="ai:claude">Technology Share Estimate</span>

> <span data-proof="authored" data-by="ai:claude">Note: Many domain galleries (biology, chemistry, economics, etc.) use Canvas 2D as their rendering layer. Percentages are estimates based on gallery-level analysis.</span>

| <span data-proof="authored" data-by="ai:claude">Technology</span>                    | <span data-proof="authored" data-by="ai:claude">Estimated Demos</span>                                                                                                    | <span data-proof="authored" data-by="ai:claude">% of Library</span>                                                                                                   |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span data-proof="authored" data-by="ai:claude">HTML5 Canvas 2D</span>               | <span data-proof="authored" data-by="ai:claude">~1,700</span>                                                                                                             | <span data-proof="authored" data-by="ai:claude">~49%</span>                                                                                                           |
| <span data-proof="authored" data-by="ai:claude">NetLogo (agent-based, Canvas)</span> | <span data-proof="authored" data-by="ai:claude">598</span>                                                                                                                | <span data-proof="suggestion" data-id="m1771690599868_14" data-by="ai:claude" data-kind="replace"><span data-proof="authored" data-by="ai:claude">~17%</span></span>  |
| <span data-proof="authored" data-by="ai:claude">Three.js ecosystem</span>            | <span data-proof="authored" data-by="ai:claude">88</span>                                                                                                                 | <span data-proof="suggestion" data-id="m1771690599857_13" data-by="ai:claude" data-kind="replace"><span data-proof="authored" data-by="ai:claude">~2.5%</span></span> |
| <span data-proof="authored" data-by="ai:claude">Web Audio API</span>                 | <span data-proof="authored" data-by="ai:claude">48</span>                                                                                                                 | <span data-proof="suggestion" data-id="m1771690599845_12" data-by="ai:claude" data-kind="replace"><span data-proof="authored" data-by="ai:claude">~1.4%</span></span> |
| <span data-proof="authored" data-by="ai:claude">WebGL (raw)</span>                   | <span data-proof="authored" data-by="ai:claude">29</span>                                                                                                                 | <span data-proof="suggestion" data-id="m1771690599834_11" data-by="ai:claude" data-kind="replace"><span data-proof="authored" data-by="ai:claude">~0.8%</span></span> |
| <span data-proof="authored" data-by="ai:claude">D3.js / SVG</span>                   | <span data-proof="authored" data-by="ai:claude">25</span>                                                                                                                 | <span data-proof="suggestion" data-id="m1771690599823_10" data-by="ai:claude" data-kind="replace"><span data-proof="authored" data-by="ai:claude">~0.7%</span></span> |
| <span data-proof="authored" data-by="ai:claude">PixiJS</span>                        | <span data-proof="authored" data-by="ai:claude">17</span>                                                                                                                 | <span data-proof="suggestion" data-id="m1771690599811_9" data-by="ai:claude" data-kind="replace"><span data-proof="authored" data-by="ai:claude">~0.5%</span></span>  |
| <span data-proof="authored" data-by="ai:claude">P5.js</span>                         | <span data-proof="authored" data-by="ai:claude">15</span>                                                                                                                 | <span data-proof="authored" data-by="ai:claude">~0.4%</span>                                                                                                          |
| <span data-proof="authored" data-by="ai:claude">WebAssembly</span>                   | <span data-proof="authored" data-by="ai:claude">13</span>                                                                                                                 | <span data-proof="suggestion" data-id="m1771690599800_8" data-by="ai:claude" data-kind="replace"><span data-proof="authored" data-by="ai:claude">~0.4%</span></span>  |
| <span data-proof="authored" data-by="ai:claude">WebGPU</span>                        | <span data-proof="authored" data-by="ai:claude">12</span>                                                                                                                 | <span data-proof="authored" data-by="ai:claude">~0.3%</span>                                                                                                          |
| <span data-proof="authored" data-by="ai:claude">Mixed / Other</span>                 | <span data-proof="authored" data-by="ai:claude">~917</span>                                                                                                               | <span data-proof="authored" data-by="ai:claude">~26%</span>                                                                                                           |
| **<span data-proof="authored" data-by="ai:claude">Total</span>**                     | **<span data-proof="suggestion" data-id="m1771690599786_7" data-by="ai:claude" data-kind="replace"><span data-proof="authored" data-by="ai:claude">~3,462</span></span>** | **<span data-proof="authored" data-by="ai:claude">100%</span>**                                                                                                       |

***

## <span data-proof="authored" data-by="ai:claude">Strategic Insights for the Library</span>

### <span data-proof="authored" data-by="ai:claude">Underrepresented Technologies</span>

<span data-proof="authored" data-by="ai:claude">Given the comparative benefits research, these techniques are under-utilized relative to their capabilities:</span>

| <span data-proof="authored" data-by="ai:claude">Technology</span> | <span data-proof="authored" data-by="ai:claude">Current Demos</span> | <span data-proof="authored" data-by="ai:claude">Potential</span>                   | <span data-proof="authored" data-by="ai:claude">Gap</span>                                 |
| ----------------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **<span data-proof="authored" data-by="ai:claude">D3.js</span>**  | <span data-proof="authored" data-by="ai:claude">20</span>            | <span data-proof="authored" data-by="ai:claude">High (data storytelling)</span>    | <span data-proof="authored" data-by="ai:claude">Large — only 1 dedicated gallery</span>    |
| **<span data-proof="authored" data-by="ai:claude">WebGPU</span>** | <span data-proof="authored" data-by="ai:claude">12</span>            | <span data-proof="authored" data-by="ai:claude">Very High (compute)</span>         | <span data-proof="authored" data-by="ai:claude">Large — cutting-edge, few demos</span>     |
| **<span data-proof="authored" data-by="ai:claude">SVG</span>**    | <span data-proof="authored" data-by="ai:claude">5</span>             | <span data-proof="authored" data-by="ai:claude">High (interactive diagrams)</span> | <span data-proof="authored" data-by="ai:claude">Large — no flow charts, network viz</span> |
| **<span data-proof="authored" data-by="ai:claude">PixiJS</span>** | <span data-proof="authored" data-by="ai:claude">17</span>            | <span data-proof="authored" data-by="ai:claude">Medium (2D games)</span>           | <span data-proof="authored" data-by="ai:claude">Moderate</span>                            |
| **<span data-proof="authored" data-by="ai:claude">P5.js</span>**  | <span data-proof="authored" data-by="ai:claude">15</span>            | <span data-proof="authored" data-by="ai:claude">Medium (education)</span>          | <span data-proof="authored" data-by="ai:claude">Moderate</span>                            |

### <span data-proof="authored" data-by="ai:claude">Well-Covered Technologies</span>

| <span data-proof="authored" data-by="ai:claude">Technology</span>            | <span data-proof="authored" data-by="ai:claude">Assessment</span>                                            |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| <span data-proof="authored" data-by="ai:claude">Canvas 2D</span>             | <span data-proof="authored" data-by="ai:claude">Dominant, well-explored across hundreds of domains</span>    |
| <span data-proof="authored" data-by="ai:claude">Three.js</span>              | <span data-proof="authored" data-by="ai:claude">Strong coverage with 88 dedicated demos + VFX gallery</span> |
| <span data-proof="authored" data-by="ai:claude">Web Audio API</span>         | <span data-proof="authored" data-by="ai:claude">Excellent coverage with 48 demos</span>                      |
| <span data-proof="authored" data-by="ai:claude">NetLogo / Agent-Based</span> | <span data-proof="authored" data-by="ai:claude">Outstanding — 598 simulations across 26 categories</span>    |
| <span data-proof="authored" data-by="ai:claude">WebAssembly</span>           | <span data-proof="authored" data-by="ai:claude">Good starting point; 13 demos covering key use cases</span>  |

### <span data-proof="authored" data-by="ai:claude">Recommended Expansion Areas</span>

1. **<span data-proof="authored" data-by="ai:claude">WebGPU Compute Demos</span>** <span data-proof="authored" data-by="ai:claude">— particle simulations, fluid dynamics, N-body gravity using compute shaders (currently only 12 demos, all rendering-focused)</span>
2. **<span data-proof="authored" data-by="ai:claude">D3.js Data Stories</span><span data-proof="authored" data-by="human:MIKHAIL KIRSANOV"> </span>**<span data-proof="authored" data-by="ai:claude">— interactive journalism-style visualizations; network graphs, geographic projections, animated transitions</span>
3. **<span data-proof="authored" data-by="ai:claude">SVG-First Interactivity</span>** <span data-proof="authored" data-by="ai:claude">— diagrams, org charts, annotated scientific illustrations where accessibility matters</span>
4. **<span data-proof="authored" data-by="ai:claude">Hybrid Canvas + SVG</span>** <span data-proof="authored" data-by="ai:claude">— high-performance animated backgrounds (Canvas) with SVG overlays for labels and interactivity</span>

***

## <span data-proof="authored" data-by="ai:claude">Sources</span>

* [<span data-proof="authored" data-by="ai:claude">Comparing Web Graphics: Canvas, SVG, WebGL, and CSS — Tapflare</span>](https://tapflare.com/articles/web-graphics-comparison-canvas-svg-webgl)

* [<span data-proof="authored" data-by="ai:claude">SVG vs Canvas vs WebGL: Benchmarked — SVG Genie Blog (2025)</span>](https://www.svggenie.com/blog/svg-vs-canvas-vs-webgl-performance-2025)

* [<span data-proof="authored" data-by="ai:claude">Comparing Canvas vs. WebGL for Chart Performance — DigitalAdBlog (2025)</span>](https://digitaladblog.com/2025/05/21/comparing-canvas-vs-webgl-for-javascript-chart-performance/)

* [<span data-proof="authored" data-by="ai:claude">Graph visualization efficiency of popular web-based libraries — SpringerOpen</span>](https://vciba.springeropen.com/articles/10.1186/s42492-025-00193-y)

* [<span data-proof="authored" data-by="ai:claude">Past and future of HTML Canvas — Viacheslav Demianov</span>](https://demyanov.dev/past-and-future-html-canvas-brief-overview-2d-webgl-and-webgpu)

* [<span data-proof="authored" data-by="ai:claude">SVG vs Canvas vs WebGL Rendering Choice — Dev3lop</span>](https://dev3lop.com/svg-vs-canvas-vs-webgl-rendering-choice-for-data-visualization/)

* [<span data-proof="authored" data-by="ai:claude">SVG versus Canvas: Which technology to choose — JointJS</span>](https://www.jointjs.com/blog/svg-versus-canvas)

* [<span data-proof="authored" data-by="ai:claude">Canvas vs. SVG Best Practices — Apache ECharts Handbook</span>](https://apache.github.io/echarts-handbook/en/best-practices/canvas-vs-svg/)

* [<span data-proof="authored" data-by="ai:claude">p5.js vs Pixi.js comparison — Slant (2025)</span>](https://www.slant.co/versus/147/1965/~p5-js_vs_pixi-js)

* [<span data-proof="authored" data-by="ai:claude">Pixi.js vs Three.js comparison — Slant (2026)</span>](https://www.slant.co/versus/1965/11348/~pixi-js_vs_three-js)

* [<span data-proof="authored" data-by="ai:claude">canvas vs three vs fabric vs pixi.js vs paper vs p5 — npm-compare</span>](https://npm-compare.com/canvas,fabric,p5,paper,pixi.js,three)

* [<span data-proof="authored" data-by="ai:claude">WebAssembly in 2025: High-Performance Web Applications — Atak Interactive</span>](https://www.atakinteractive.com/blog/webassembly-in-2025-the-future-of-high-performance-web-applications)

* [<span data-proof="authored" data-by="ai:claude">Web Audio Effect Library with Rust and WASM — Ryo Suzuki (2025)</span>](https://whoisryosuke.com/blog/2025/web-audio-effect-library-with-rust-and-wasm)

* [<span data-proof="authored" data-by="ai:claude">JavaScript Rendering/Game Engine Benchmarks — Shirajuki (GitHub)</span>](https://github.com/Shirajuki/js-game-rendering-benchmark)

* [<span data-proof="authored" data-by="ai:claude">PixiJS Canvas Engine Benchmarks — Slaylines</span>](https://benchmarks.slaylines.io/)

<!-- PROOF
{
  "version": 2,
  "marks": {
    "m1771690599893_16": {
      "kind": "replace",
      "by": "ai:claude",
      "createdAt": "2026-02-21T16:16:39.893Z",
      "range": {
        "from": 428,
        "to": 497
      },
      "content": "Total demo files in library: ~3,874 (non-index .html files across all gallery depths)",
      "status": "pending"
    },
    "m1771690599880_15": {
      "kind": "replace",
      "by": "ai:claude",
      "createdAt": "2026-02-21T16:16:39.880Z",
      "range": {
        "from": 9664,
        "to": 9670
      },
      "content": "~3,276",
      "status": "pending"
    },
    "m1771690592475_4": {
      "kind": "insert",
      "by": "ai:claude",
      "createdAt": "2026-02-21T16:16:32.475Z",
      "range": {
        "from": 11480,
        "to": 11632
      },
      "content": "\nmusic-sequencers/\n50\nGenerative music, step sequencers\ngravity-orbits/\n49\nOrbital mechanics, n-body\nml-visualizations/\n35\nNeural nets, gradient descent",
      "status": "pending"
    },
    "m1771690599868_14": {
      "kind": "replace",
      "by": "ai:claude",
      "createdAt": "2026-02-21T16:16:39.868Z",
      "range": {
        "from": 12405,
        "to": 12409
      },
      "content": "~15%",
      "status": "pending"
    },
    "m1771690599857_13": {
      "kind": "replace",
      "by": "ai:claude",
      "createdAt": "2026-02-21T16:16:39.857Z",
      "range": {
        "from": 12443,
        "to": 12448
      },
      "content": "~2.3%",
      "status": "pending"
    },
    "m1771690599845_12": {
      "kind": "replace",
      "by": "ai:claude",
      "createdAt": "2026-02-21T16:16:39.845Z",
      "range": {
        "from": 12477,
        "to": 12482
      },
      "content": "~1.2%",
      "status": "pending"
    },
    "m1771690599834_11": {
      "kind": "replace",
      "by": "ai:claude",
      "createdAt": "2026-02-21T16:16:39.834Z",
      "range": {
        "from": 12509,
        "to": 12514
      },
      "content": "~0.7%",
      "status": "pending"
    },
    "m1771690599823_10": {
      "kind": "replace",
      "by": "ai:claude",
      "createdAt": "2026-02-21T16:16:39.823Z",
      "range": {
        "from": 12541,
        "to": 12546
      },
      "content": "~0.6%",
      "status": "pending"
    },
    "m1771690599811_9": {
      "kind": "replace",
      "by": "ai:claude",
      "createdAt": "2026-02-21T16:16:39.811Z",
      "range": {
        "from": 12568,
        "to": 12573
      },
      "content": "~0.4%",
      "status": "pending"
    },
    "m1771690599800_8": {
      "kind": "replace",
      "by": "ai:claude",
      "createdAt": "2026-02-21T16:16:39.800Z",
      "range": {
        "from": 12626,
        "to": 12631
      },
      "content": "~0.3%",
      "status": "pending"
    },
    "m1771690599786_7": {
      "kind": "replace",
      "by": "ai:claude",
      "createdAt": "2026-02-21T16:16:39.786Z",
      "range": {
        "from": 12708,
        "to": 12714
      },
      "content": "~3,874",
      "status": "pending"
    }
  }
}
-->

<!-- PROOF:END -->
