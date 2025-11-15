# CCAB - Claude Code and AB (aka Algorithmic Beauty) Testing

> **1,000+ Interactive Web Visualizations** across 47 galleries showcasing the creative possibilities of modern web technologies

A comprehensive collection of creative coding demonstrations spanning vanilla JavaScript, advanced graphics frameworks, scientific simulations, and cutting-edge web APIs. All demos are self-contained HTML files requiring no build process—just open and explore.

## 📖 Complete Documentation

**[→ View the Master Catalog](documentation/MASTER_CATALOG.md)** - Comprehensive listing of all 1,000+ demos with descriptions

## 🎨 What's Inside

### 47 Gallery Categories • 1,000+ Visualizations

**Core Graphics & 3D (11 galleries, 200+ demos)**
- 🎭 **Three.js** - 3D models, particles, advanced shader effects (36 demos)
- 🌈 **WebGL Shaders** - Fragment shaders, raymarching, fractals (29 demos)
- ⚡ **WebGPU** - Next-gen GPU computing, ray tracing (12 demos)
- 🎨 **Three.js TSL Shaders** - Modern shader language effects (40 demos)
- 🌊 **TSL Shaders** - Advanced TSL with orbital mechanics (46 demos)
- 🎬 **Pixi.js** - 2D sprites, particles, filters (17 demos)
- 🎪 **CSS Art** - Pure CSS3 3D transforms and animations (6 demos)
- 🔷 **SVG Animations** - Path morphing, line drawing effects (5 demos)

**Agent-Based Models (12 galleries, 200+ demos)**
- 🤝 **Altruism Evolution** - Evolutionary cooperation dynamics (16 demos)
- 🌍 **Ethnocentrism** - Cultural evolution and cooperation (20 demos)
- 🏘️ **Schelling Segregation** - Residential segregation models (20 demos)
- 🍬 **Sugarscape** - Classic resource-based ABM (20 demos)
- 💰 **Wealth Distribution** - Economic inequality patterns (20 demos)
- 🐺 **Wolf-Sheep Predation** - Predator-prey ecosystems (20 demos)
- 🦠 **Virus Epidemic Models** - SIR/SEIR epidemiology (20 demos)
- 🔥 **Fire Percolation** - Forest fire spread models (20 demos)

**Physics & Simulations (10 galleries, 350+ demos)**
- ⚛️ **Physics Simulations** - 80+ demos across 14 subcategories (largest gallery!)
- 🪐 **Gravity Orbits** - Orbital mechanics, N-body problems (50 demos)
- 🦋 **Emergent Behaviors** - Langton's Ant, boids, swarms (50 demos)
- 🧫 **Petri Arena** - Neural cellular automata competitions (50 demos)
- 🌞 **Solar Flare Visualizations** - Space weather phenomena (40 demos)
- 🦜 **Boids Flocking** - Swarm behavior and flocking (20 demos)
- ✨ **Particle Systems** - Fireworks, gravity, fluid (20 demos)
- 🔬 **Scientific Visualizations** - EM fields, waves, orbits (15 demos)

**Data Visualization & Audio (3 galleries, 60+ demos)**
- 📊 **D3.js** - Force graphs, trees, maps, Sankey diagrams (18 demos)
- 🎵 **Web Audio API** - FFT visualizers, beat detection, synthesizers (40 demos)
- 📈 **Visualization Algorithms** - Sorting, searching, pathfinding (40 demos)

**Creative & Artistic (8 galleries, 80+ demos)**
- 🎮 **Game of Life** - 23 creative variations of Conway's cellular automaton
- 🎨 **Mathematical Art** - Spirographs, harmonographs, fractals (10 demos)
- 🔺 **Geometric Patterns** - Islamic patterns, Penrose tiling (6 demos)
- 🌀 **Chaos Attractors** - Strange attractors, Lorenz systems (8 demos)
- 👁️ **Optical Illusions** - Motion illusions, moire patterns (13 demos)
- 〰️ **Lissajous** - Interactive parametric curve generator (1 demo)
- 🍂 **Autumn Leaf Visualizations** - Seasonal physics (20 demos)

## 🎯 Features

### Zero Dependencies
- ✅ No npm, webpack, or build tools
- ✅ No installation required
- ✅ All demos are self-contained HTML files
- ✅ External libraries loaded via CDN
- ✅ Works offline (after first load)

### Technology Showcase
- **Graphics**: Three.js, WebGL, WebGPU, Canvas 2D
- **Libraries**: P5.js, Pixi.js, D3.js, Tone.js
- **Performance**: WebAssembly, GPU compute shaders
- **APIs**: Web Audio API, Canvas API, WebGL API

### Educational Value
- Learn by example—view source on any demo
- Progressive complexity from basic to advanced
- Comments and clear code structure
- Diverse visualization techniques
- Real-world algorithm implementations

## 📂 Project Structure

```
ccab/
├── index.html                          # Main gallery (47 categories)
│
├── documentation/                      # Comprehensive documentation
│   ├── MASTER_CATALOG.md              # Complete catalog of all 1,000+ demos
│   └── galleries/                     # Detailed gallery documentation
│       ├── threejs.md                 # Three.js demos documentation
│       ├── webgl-shaders.md           # WebGL demos documentation
│       ├── d3js.md                    # D3.js demos documentation
│       ├── web-audio-api.md           # Audio demos documentation
│       └── game-of-life.md            # Game of Life documentation
│
├── [Core Graphics & 3D - 11 galleries]
│   ├── threejs/                       # Three.js 3D (36 demos)
│   ├── webgl-shaders/                 # Raw WebGL (29 demos)
│   ├── webgpu/                        # WebGPU compute (12 demos)
│   ├── threejs-tsl-shaders/           # TSL shaders (40 demos)
│   ├── tsl-shaders/                   # Advanced TSL (46 demos)
│   └── ...
│
├── [Agent-Based Models - 12 galleries]
│   ├── altruism-evolution/            # Cooperation dynamics (16 demos)
│   ├── ethnocentrism/                 # Cultural evolution (20 demos)
│   ├── schelling-segregation/         # Segregation models (20 demos)
│   ├── sugarscape/                    # Resource ABM (20 demos)
│   └── ...
│
├── [Physics & Simulations - 10 galleries]
│   ├── physics-simulations/           # Largest gallery (80+ demos)
│   ├── gravity-orbits/                # Orbital mechanics (50 demos)
│   ├── emergent-behaviors/            # Swarm behaviors (50 demos)
│   ├── petri-arena/                   # Neural CA (50 demos)
│   └── ...
│
├── [Data Visualization - 3 galleries]
│   ├── d3js/                          # D3.js visualizations (18 demos)
│   ├── web-audio-api/                 # Audio visualizers (40 demos)
│   └── visualization-algorithms/      # Algorithm viz (40 demos)
│
└── [Project Documentation]
    ├── CLAUDE.md                       # Developer guide
    ├── IMPLEMENTATION_STATUS.md        # Project history
    ├── NEXT_STEPS.md                   # Future roadmap
    └── SIMULATIONS_ROADMAP.md          # Simulation details
```

## 🎓 Learning Path

### Beginner
Start with these accessible visualizations:
1. `algorithmic-art/index.html` - Mathematical art fundamentals
2. `visualizations/demos/01-particle-system.html` - Canvas basics
3. `lissajous/lissajous.html` - Parametric curves

### Intermediate
Progress to framework-based demos:
1. `p5-generative-art/index.html` - Creative coding with P5.js
2. `d3js/force-directed/` - Data visualization fundamentals
3. `threejs/01-rotating-cube.html` - 3D graphics introduction

### Advanced
Explore cutting-edge techniques:
1. `webgl-shaders/demos/12-cube-fractal.html` - Raymarching & SDFs
2. `webgpu/demos/22-ray-reflections.html` - GPU ray tracing
3. `webassembly/demos/05-fluid-dynamics.html` - High-performance computing
4. `wolfram-ca/index.html` - Computational complexity

## 📊 Statistics

- **Total Visualizations**: 1,000+
- **Gallery Categories**: 47
- **Active Galleries**: 44 (with demos)
- **Technologies**: 10+ frameworks/APIs
- **Largest Gallery**: Physics Simulations (80+ demos)
- **Lines of Code**: 150,000+
- **Browser Compatibility**: Modern evergreen browsers
- **Performance Target**: 60 FPS

## 🎯 Highlights

### Computational Showcases
- **256 Wolfram Rules** - Complete elementary cellular automata explorer
- **Ray Tracing** - Real-time WebGPU path tracing
- **Fluid Dynamics** - SPH and grid-based simulations
- **Fractal Explorers** - Deep zoom Mandelbrot and Julia sets

### Interactive Experiences
- **Web Audio Visualizers** - 40 real-time audio-reactive demos
- **Biological Simulations** - Flocking, evolution, neural networks
- **D3.js Data Viz** - Force graphs, geographic maps, streaming data
- **Particle Systems** - GPU-accelerated thousands of particles

### Educational Simulations
- **Scientific Visualizations** - Orbital mechanics, wave interference, electromagnetic fields, fluid dynamics
- **Visualization Algorithms** - Voronoi, Delaunay, pathfinding
- **L-Systems** - Recursive plant growth
- **Strange Attractors** - Chaos theory demonstrations

## 📚 Documentation

- **[CLAUDE.md](CLAUDE.md)** - Developer guide for contributors
- **[IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md)** - Project history and implementation results
- **[NEXT_STEPS.md](NEXT_STEPS.md)** - Future enhancement roadmap
- **[SIMULATIONS_ROADMAP.md](SIMULATIONS_ROADMAP.md)** - Deep dive into essential simulations
- **[SIMULATIONS_QUICK_GUIDE.md](SIMULATIONS_QUICK_GUIDE.md)** - Quick reference guide

## 🌟 Key Technologies

| Technology | Usage | Demos |
|------------|-------|-------|
| **Three.js** | 3D graphics, WebGL wrapper | 30+ |
| **WebGL** | Raw shader programming | 21+ |
| **WebGPU** | Next-gen GPU computing | 12+ |
| **P5.js** | Creative coding framework | 40+ |
| **Pixi.js** | 2D sprite rendering | 17+ |
| **D3.js** | Data visualization | 18+ |
| **Web Audio API** | Audio processing & visualization | 40+ |
| **WebAssembly** | High-performance computing | 40+ |
| **Canvas 2D** | Basic graphics | 50+ |
| **Vanilla JS** | No framework demos | 60+ |

## 🎨 Visual Gallery Preview

Each gallery features:
- **Consistent styling** - Professional purple-gradient design
- **Responsive layout** - Works on desktop and mobile
- **Hover effects** - Interactive card animations
- **Category organization** - Logical grouping by technology
- **Direct linking** - No complex routing needed

## 🔬 Scientific & Educational Use Cases

This collection is valuable for:
- **Computer Graphics Education** - Learning shaders, 3D math, rendering
- **Algorithm Visualization** - Understanding computational geometry
- **Creative Coding Practice** - Experimenting with generative art
- **Web Technology Demos** - Showcasing browser capabilities
- **Physics/Math Education** - Interactive scientific simulations
- **Portfolio Projects** - Reference implementations

## ⚡ Performance

All visualizations target:
- **60 FPS** for smooth animations
- **< 3s load time** per demo
- **Efficient GPU usage** for complex rendering
- **Responsive controls** for interactive demos
- **Browser optimization** using requestAnimationFrame

## 🏆 Project Evolution

1. **Phase 1**: Manual creation of 40 foundational demos
2. **Phase 2**: Automated generation of 19 feature branches
3. **Phase 3**: Quality filtering (13 successful, 6 failed)
4. **Phase 4**: Consolidation into main branch
5. **Phase 5**: Quality curation (560 → 348 demos)
6. **Phase 6**: Altruism Evolution gallery (16 demos)
7. **Current**: 364 curated demos across 20 categories

**Success Pattern**: Framework-based visualizations (Three.js, D3.js, P5.js) succeeded at higher rates than complex physics simulations.

## 🎓 Method: A Class of 100+ Claude Code Instances as Students

This project represents an experimental approach to AI-assisted creative coding - essentially running a "class" of 100+ Claude Code instances as students working on visualization assignments.

### The Process

**Initial Exploration (10 Web Instances)**
1. Launched 10 Claude Code web instances (enabled by $1000 credit for Max plan subscribers)
2. Each instance tasked with creating 20 unique beautiful visualizations
3. Result: ~200 initial demos exploring different approaches and techniques

**Consolidation & Evaluation**
1. Used `git worktree` to pull all work into local Claude Code environment
2. Merged and evaluated each contribution
3. Sorted by: functionality, visual appeal, code quality
4. Identified patterns: what works, what doesn't, what looks attractive

**Strategic Planning**
1. Developed comprehensive implementation roadmap using Claude Opus
2. Identified 10 essential technology categories for deep exploration
3. Planned 40 demonstrations per category for thorough coverage

**Scaled Implementation (10 More Instances)**
1. Launched 10 additional cloud instances
2. Each instance assigned a specific section from the roadmap
3. Each generated 40 iterations/variations on their assigned technology
4. Result: 400 additional demos across diverse categories

**Final Curation**
1. Second merge and evaluation cycle
2. Analysis of successes and failures (documented in IMPLEMENTATION_STATUS.md)
3. Quality-focused curation: 560 → 348 demos (38% reduction)
4. Kept only the most visually impressive and educationally valuable examples

### Reflections

**A Memory Lane Moment**: This process reminded me of high school computer science class with teacher Alexander Kremlev, who would assign visualization tasks and visit each student to see their progress and challenges. Here, I experienced a 400+ student work evaluation exercise - though admittedly, I was much lazier than Alexander was with us as students!

**Key Insights**:
- **Parallel AI Development Works**: Multiple instances exploring the same problem space generate diverse solutions
- **Curation is Critical**: Quality over quantity - 68% success rate for automated generation, 62% retention after curation
- **Framework Success**: Graphics libraries (Three.js, D3.js, P5.js) automated better than complex physics simulations
- **Educational Value**: The final collection serves as a comprehensive learning resource

### Next Steps

**Skill Distillation**: Planning to distill this methodology into a Claude Code skill to see if it generates more persistent, reusable results for future visualization projects.

## 📜 License

This project is open source. Feel free to learn from, modify, and build upon these visualizations.

## 🙏 Acknowledgments

Built with:
- **Claude Code** - AI-assisted development and automated implementations
- **Modern Web Standards** - WebGL, WebGPU, Web Audio API
- **Open Source Libraries** - Three.js, D3.js, P5.js, Pixi.js, Tone.js
- **CDN Providers** - unpkg.com, cdnjs.com for library hosting

## 🔗 Links

- **Repository**: [github.com/mik1264/ccab](https://github.com/mik1264/ccab)
- **Developer Guide**: [CLAUDE.md](CLAUDE.md)
- **Implementation Details**: [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md)

---

**Explore. Learn. Create.** 🚀

*364+ visualizations demonstrating the creative possibilities of web technologies*
