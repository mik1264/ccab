# Gallery Index Audit Report

**Date:** 2025-11-15
**Galleries Checked:** 50
**Galleries with Issues:** 51 (including main index)

## Executive Summary

- **Total Broken Links:** 214 HTML files referenced but not found on disk
- **Generic/Placeholder Names:** 0 found
- **Placeholder Content:** 0 found
- **Disabled Elements:** 51 galleries have commented-out links (navigation boilerplate)

## Critical Issues: Broken Links by Gallery

### Severe (20+ broken links)
1. **simulations/** - 50 broken links (all subcategory files missing)
2. **physics-simulations/** - 40 broken links (all subcategory files missing)
3. **biological-simulations/** - 22 broken links (boids, evolution, l-systems, reaction-diffusion)
4. **game-of-life/** - 22 broken links (classic, set1, set2 subdirectories)

### Moderate (10-19 broken links)
5. **d3js/** - 18 broken links (force-directed, hierarchical, sankey, chord, maps, streaming)
6. **pixi-sprite-animations/** - 17 broken links (demos subdirectory)
7. **scientific-visualizations/** - 15 broken links (orbital-mechanics, wave-interference, electromagnetic-fields, fluid-dynamics)
8. **complex-showcases/** - 15 broken links (ray-tracer, terrain, city, galaxy, music, ocean, crowd, fractal, weather)
9. **visualization-algorithms/** - 12 broken links (voronoi, delaunay, pathfinding, graph-theory)
10. **web-audio-api/** - 11 broken links (synthesizer, visualizer, effects)
11. **webassembly/** - 10 broken links (mandelbrot, game-of-life, physics, nbody, wasm-basics)

### Minor (1-9 broken links)
12. **webgpu/** - 9 broken links (compute, particles, fractals)
13. **webgl-shaders/** - 7 broken links (fractals, noise, raymarching)
14. **threejs-tsl-shaders/** - 6 broken links (tsl-demos)
15. **threejs/** - 4 broken links (basic demos)
16. **tsl-shaders/** - 5 broken links (shader demos)
17. **visualization-algorithms/** - 3 broken links (algorithm visualizations)

## Clean Galleries (No Broken Links)

The following galleries have their index.html files properly configured with all links working:

- abm-economics/ (3 demos)
- algorithmic-art/ (20+ demos)
- altruism-evolution/ (16 demos)
- ancient-economy-abm/ (demos)
- autumn-leaf-visualizations/ (demos)
- boids-flocking-visualizations/ (20 demos)
- chaos-attractors/ (demos)
- css-art/ (6 demos)
- data-structures/ (demos)
- emergent-behaviors/ (demos)
- ethnocentrism/ (20 demos)
- fire-percolation/ (demos)
- follower-visualizations/ (demos)
- games/ (demos)
- geometric-patterns/ (demos)
- gravity-orbits/ (demos)
- infographics/ (6 demos)
- lissajous/ (1 demo)
- mathematical-art/ (demos)
- optical-illusions/ (demos)
- p5-generative-art/ (40 demos)
- particle-effects/ (demos)
- particle-systems/ (demos)
- petri-arena/ (demos)
- renaissance-econsim/ (demos)
- schelling-segregation/ (demos)
- solar-flare-visualizations/ (demos)
- sugarscape/ (demos)
- sugarscape-inequality/ (demos)
- svg-animations/ (demos)
- virus-epidemic-models/ (demos)
- wealth-distribution/ (demos)
- wolf-sheep-predation/ (demos)
- wolfram-ca/ (1 demo)

## Non-Critical Issues

### Commented Links (All Galleries)
All 51 galleries contain 2 instances of commented-out links in their navigation structure. This appears to be intentional boilerplate code for search and menu functionality that hasn't been implemented yet. These are in:

```html
<!-- Navigation boilerplate comments -->
<button class="nav-search" aria-label="Search">...</button>
<button class="nav-menu" aria-label="Menu">...</button>
```

**Recommendation:** This is low priority unless the navigation features are to be implemented.

## Detailed Breakdown of Broken Links

### Gallery: simulations/ (50 broken links)
Missing subdirectories and files:
- `fluid-dynamics/` (5 files)
- `cellular-automata/` (5 files)
- `l-systems/` (5 files)
- `particle-systems/` (5 files)
- `reaction-diffusion/` (5 files)
- `n-body/` (5 files)
- `flocking-swarms/` (5 files)
- `physics/` (5 files)
- `waves/` (5 files)
- `statistical-mechanics/` (5 files)

### Gallery: physics-simulations/ (40 broken links)
Missing subdirectories and files:
- `boids/` (8 files)
- `reaction-diffusion/` (5 files)
- `fluid/` (5 files)
- `ising-model/` (5 files)
- `langtons-ant/` (5 files)
- `dla/` (5 files)
- `additional-physics/` (7 files)

### Gallery: biological-simulations/ (22 broken links)
Missing subdirectories:
- `boids/` (8 files)
- `evolution/` (8 files)
- `l-systems/` (3 files)
- `reaction-diffusion/` (3 files)

### Gallery: game-of-life/ (22 broken links)
Missing subdirectories:
- `classic/` (2 files)
- `set1/` (10 files)
- `set2/` (10 files)

### Gallery: d3js/ (18 broken links)
Missing subdirectories:
- `force-directed/` (7 files)
- `hierarchical-trees/` (2 files)
- `sankey/` (3 files)
- `chord/` (2 files)
- `maps/` (2 files)
- `streaming/` (2 files)

### Gallery: pixi-sprite-animations/ (17 broken links)
Missing files in `demos/` subdirectory (numbered 01-38, with gaps)

### Gallery: scientific-visualizations/ (15 broken links)
Missing subdirectories:
- `orbital-mechanics/` (5 files)
- `wave-interference/` (4 files)
- `electromagnetic-fields/` (3 files)
- `fluid-dynamics/` (3 files)

### Gallery: complex-showcases/ (15 broken links)
Missing subdirectories:
- `ray-tracer/` (1 file)
- `terrain-generation/` (1 file)
- `city-generator/` (1 file)
- `galaxy-simulator/` (2 files)
- `music-synthesizer/` (3 files)
- `ocean-waves/` (2 files)
- `crowd-simulation/` (1 file)
- `fractal-explorer/` (3 files)
- `weather-system/` (1 file)

## Recommendations

### Priority 1: Fix or Remove Broken Links
The galleries with broken links have one of two issues:
1. **Files were deleted** - Remove the links from index.html
2. **Files were never created** - Either create the missing demos or remove the placeholder links

### Priority 2: Pattern Analysis
Most broken link galleries follow this pattern:
- Index.html references subcategory directories (e.g., `boids/`, `fluid/`, etc.)
- The subcategory directories either don't exist or are empty
- This suggests these galleries were created with planned structure but content was never completed

### Priority 3: Action Items
For galleries with extensive broken links (simulations, physics-simulations, biological-simulations, game-of-life, d3js, etc.):

**Option A:** Remove placeholder links
- Edit index.html to remove all broken links
- Keep only working demos
- Update demo count in stats

**Option B:** Create minimal demos
- Generate simple placeholder demos for each broken link
- Ensure functional (even if basic)
- This maintains the gallery structure

**Option C:** Consolidate galleries
- Merge working demos from broken galleries into functional equivalents
- Delete galleries that are completely non-functional
- Update main index.html accordingly

## Files for Reference

- Audit script: `/Users/mik1264/experiments/ccab/ccab/check_galleries.py`
- Full audit output: `/tmp/gallery_audit.txt`
- This summary: `/Users/mik1264/experiments/ccab/ccab/GALLERY_AUDIT_SUMMARY.md`

## Next Steps

1. Review this report
2. Decide on approach (remove links vs create demos vs consolidate)
3. Execute cleanup systematically by gallery
4. Update main index.html demo counts to reflect actual working demos
5. Re-run audit script to verify all issues resolved
