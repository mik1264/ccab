# CCAB Analysis Report - Chunk 03

## Directories: cyclic-ca through evolutionary-walkers

**Date**: 2026-02-07
**Total HTML Files**: 210 (191 demos + 19 gallery indexes)

## Executive Summary

| Metric | Count | Percentage |
|--------|-------|------------|
| enhance.js injected | 210/210 | 100% |
| window.reset exposed (demos) | 45/191 | 23% |
| Resize handler (demos) | 85/191 | 44% |
| Panel blur (demos) | 41/191 | 21% |
| Files with issues | 1/210 | 0% |

### Animation Methods (demos only)

| Method | Count | Percentage |
|--------|-------|------------|
| SI | 5 | 2% |
| none | 42 | 21% |
| rAF | 124 | 64% |
| rAF+SI | 4 | 2% |
| setTimeout | 16 | 8% |

### Quality Distribution (demos only)

| Rating | Count | Percentage |
|--------|-------|------------|
| 4/5 | 18 | 9% |
| 5/5 | 173 | 90% |

## Issues Found

| Directory | File | Issue |
|-----------|------|-------|
| d3js | 20-gelfand-tsetlin.html | ext-script: https://d3js.org/d3.v7.min.js |

## Per-Directory Breakdown

### cyclic-ca

**Files**: 1 (0 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| **index.html** (index) | yes | yes | yes | rAF | no | 3 | - |

### d3js

**Files**: 3 (2 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 19-octonion-fano.html | yes | yes | no | SI | yes | 5 | - |
| 20-gelfand-tsetlin.html | yes | yes | yes | none | yes | 5 | ext-script: https://d3js.org/d3.v7.min.js |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### data-structures

**Files**: 24 (23 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-binary-search-tree.html | yes | yes | yes | rAF | yes | 5 | - |
| 02-heap-visualization.html | yes | yes | yes | rAF | yes | 5 | - |
| 03-hash-table.html | yes | yes | yes | rAF | yes | 5 | - |
| 04-graph-traversal.html | yes | no | yes | rAF | yes | 5 | - |
| 05-trie-structure.html | yes | no | yes | rAF | yes | 5 | - |
| 06-red-black-tree.html | yes | no | yes | rAF | yes | 5 | - |
| 07-skip-list.html | yes | no | yes | setTimeout | no | 5 | - |
| 08-treap.html | yes | no | no | SI | no | 5 | - |
| 09-hyperloglog.html | yes | no | no | none | no | 5 | - |
| 10-count-min-sketch.html | yes | no | no | none | no | 5 | - |
| 11-crdt-playground.html | yes | no | no | none | no | 5 | - |
| 12-scapegoat-tree.html | yes | no | yes | setTimeout | yes | 5 | - |
| 12-van-emde-boas.html | yes | no | yes | none | yes | 5 | - |
| 13-scapegoat-tree.html | yes | no | no | SI | no | 5 | - |
| 13-ukkonen-suffix-tree.html | yes | no | yes | setTimeout | yes | 5 | - |
| 14-aho-corasick.html | yes | no | yes | setTimeout | yes | 5 | - |
| 14-ukkonen-suffix-tree.html | yes | no | no | SI | no | 5 | - |
| 15-aho-corasick.html | yes | no | no | SI | no | 5 | - |
| 16-burrows-wheeler.html | yes | no | no | setTimeout | no | 5 | - |
| 17-xor-bloom-filter.html | yes | no | no | none | no | 5 | - |
| 18-lsm-tree.html | yes | no | no | setTimeout | no | 5 | - |
| 19-viewstamped-replication.html | yes | no | no | setTimeout | no | 5 | - |
| 20-epaxos.html | yes | no | yes | setTimeout | no | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### digital-signal-processing

**Files**: 21 (20 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-fourier-transform.html | yes | yes | yes | rAF | yes | 5 | - |
| 02-fft-algorithm.html | yes | yes | yes | setTimeout | yes | 5 | - |
| 03-windowing-functions.html | yes | yes | yes | none | yes | 5 | - |
| 04-aliasing-demo.html | yes | no | yes | rAF | no | 5 | - |
| 05-convolution.html | yes | no | yes | setTimeout | no | 5 | - |
| 06-fir-filter.html | yes | no | yes | none | no | 5 | - |
| 07-iir-filter.html | yes | no | yes | none | no | 5 | - |
| 08-butterworth-filter.html | yes | no | yes | none | no | 5 | - |
| 09-chebyshev-filter.html | yes | no | yes | none | no | 5 | - |
| 10-elliptic-filter.html | yes | no | yes | none | no | 4 | - |
| 11-notch-filter.html | yes | no | yes | rAF | no | 5 | - |
| 12-comb-filter.html | yes | no | yes | none | no | 5 | - |
| 13-allpass-filter.html | yes | no | yes | none | no | 5 | - |
| 14-filter-cascade.html | yes | no | yes | none | no | 5 | - |
| 15-wavelet-transform.html | yes | no | yes | none | no | 5 | - |
| 16-spectrogram.html | yes | no | yes | none | no | 5 | - |
| 17-autocorrelation.html | yes | no | yes | rAF | no | 5 | - |
| 18-cross-correlation.html | yes | no | yes | rAF | no | 5 | - |
| 19-hilbert-transform.html | yes | no | yes | none | no | 5 | - |
| 20-phase-vocoder.html | yes | no | yes | none | no | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### distributed-systems

**Files**: 4 (3 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-viewstamped-replication.html | yes | yes | yes | rAF+SI | yes | 5 | - |
| 02-epaxos.html | yes | yes | yes | rAF+SI | yes | 5 | - |
| 91-paxos.html | yes | yes | yes | rAF | yes | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### dla-fractals

**Files**: 1 (0 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| **index.html** (index) | yes | yes | no | SI | yes | 3 | - |

### double-pendulum

**Files**: 1 (0 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| **index.html** (index) | yes | yes | no | rAF | yes | 3 | - |

### dragon-curve

**Files**: 1 (0 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| **index.html** (index) | yes | yes | yes | rAF | yes | 3 | - |

### duffing-oscillator

**Files**: 1 (0 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| **index.html** (index) | yes | yes | yes | rAF | yes | 3 | - |

### earth-space

**Files**: 11 (10 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 51-seismic-waves.html | yes | yes | no | rAF | yes | 5 | - |
| 52-plate-tectonics.html | yes | no | no | rAF | no | 5 | - |
| 53-coriolis.html | yes | no | no | rAF | no | 4 | - |
| 54-milankovitch.html | yes | no | no | rAF | no | 4 | - |
| 55-transit-method.html | yes | no | no | rAF | no | 4 | - |
| 56-radial-velocity.html | yes | no | no | rAF | no-panel | 4 | - |
| 57-lapse-rate.html | yes | no | no | none | no-panel | 4 | - |
| 58-thermohaline.html | yes | no | no | rAF | no-panel | 5 | - |
| 59-lunar-phases.html | yes | no | no | rAF | no | 5 | - |
| 60-retrograde.html | yes | no | no | rAF | no-panel | 4 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### economics-games

**Files**: 1 (1 demos, 0 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 41-prisoners-dilemma.html | yes | yes | no | none | yes | 5 | - |

### educational

**Files**: 11 (10 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-double-pendulum-edu.html | yes | yes | no | rAF | yes | 5 | - |
| 02-mandelbrot-edu.html | yes | yes | yes | none | yes | 5 | - |
| 03-boids-edu.html | yes | yes | yes | rAF | yes | 5 | - |
| 04-gray-scott-edu.html | yes | no | yes | rAF | no | 5 | - |
| 05-game-of-life-edu.html | yes | no | yes | rAF | no | 5 | - |
| 06-fourier-edu.html | yes | no | yes | rAF | no | 5 | - |
| 07-lorenz-edu.html | yes | no | yes | rAF | no | 5 | - |
| 08-nbody-edu.html | yes | no | yes | rAF | no | 5 | - |
| 09-lsystem-edu.html | yes | no | yes | rAF | no | 5 | - |
| 10-voronoi-edu.html | yes | no | yes | rAF | no | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### electromagnetic-fields

**Files**: 1 (0 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| **index.html** (index) | yes | yes | yes | rAF | yes | 3 | - |

### elliptic-curve-murmurations

**Files**: 40 (39 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-elliptic-curve-explorer.html | yes | yes | yes | none | yes | 5 | - |
| 02-curve-family-gallery.html | yes | yes | no | none | no | 4 | - |
| 03-point-addition.html | yes | yes | yes | rAF | yes | 5 | - |
| 04-finite-field-curves.html | yes | no | yes | none | no | 5 | - |
| 05-conductor-visualizer.html | yes | no | yes | none | no | 5 | - |
| 06-rank-comparison.html | yes | no | yes | none | no | 4 | - |
| 07-murmuration-waves.html | yes | no | yes | rAF | no | 5 | - |
| 08-ap-scatter-plot.html | yes | no | yes | none | no | 5 | - |
| 09-scale-invariance.html | yes | no | yes | none | no | 4 | - |
| 10-animated-emergence.html | yes | no | no | setTimeout | no | 5 | - |
| 11-3d-murmuration-surface.html | yes | no | yes | rAF | no | 5 | - |
| 12-frequency-spectrum.html | yes | no | yes | none | no | 5 | - |
| 13-phase-portrait.html | yes | no | yes | rAF | no | 5 | - |
| 14-density-heatmap.html | yes | no | yes | none | no | 4 | - |
| 15-wave-interference.html | yes | no | yes | rAF | no | 5 | - |
| 16-conductor-grouping.html | yes | no | yes | none | no | 5 | - |
| 17-lfunction-zeros.html | yes | no | yes | none | no | 5 | - |
| 18-airy-function.html | yes | no | yes | none | no | 5 | - |
| 19-starling-flock.html | yes | no | yes | rAF | no | 5 | - |
| 20-flow-field-murmur.html | yes | no | yes | rAF | no | 5 | - |
| 21-modular-forms.html | yes | no | yes | none | no | 5 | - |
| 22-dirichlet-characters.html | yes | no | yes | none | no | 4 | - |
| 23-prime-distribution.html | yes | no | yes | none | no | 5 | - |
| 25-color-wave-art.html | yes | no | yes | rAF | no | 5 | - |
| 26-sound-visualization.html | yes | no | no | rAF | no | 5 | - |
| 27-3d-curve-dance.html | yes | no | yes | rAF | no | 5 | - |
| 28-neural-pattern.html | yes | no | yes | setTimeout | no | 5 | - |
| 29-particle-curves.html | yes | no | yes | rAF | no | 5 | - |
| 30-zubrilina-formula.html | yes | no | yes | none | no | 4 | - |
| 31-interactive-dashboard.html | yes | no | yes | setTimeout | no | 5 | - |
| 32-lmfdb-explorer.html | yes | no | no | none | no | 5 | - |
| 33-build-your-curve.html | yes | no | no | none | no | 5 | - |
| 34-orbit-tracer.html | yes | no | yes | rAF | no | 5 | - |
| 35-statistical-analyzer.html | yes | no | yes | setTimeout | no | 5 | - |
| 36-prime-sieve.html | yes | no | no | setTimeout | no | 5 | - |
| 37-torsion-explorer.html | yes | no | yes | setTimeout | no | 5 | - |
| 38-isogeny-graph.html | yes | no | yes | rAF | no | 5 | - |
| 39-realtime-builder.html | yes | no | yes | rAF | no | 5 | - |
| 40-complete-experience.html | yes | no | yes | rAF | no | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### emergent-behaviors

**Files**: 54 (53 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-langtons-ant-classic.html | yes | yes | no | rAF | yes | 5 | - |
| 02-langtons-ant-rlr.html | yes | yes | no | rAF | yes | 5 | - |
| 03-langtons-ant-llrr.html | yes | yes | no | rAF | yes | 5 | - |
| 04-langtons-ant-highway.html | yes | no | no | rAF | no | 5 | - |
| 05-langtons-ant-complex-highway.html | yes | no | no | rAF | no | 5 | - |
| 06-langtons-ant-two-ants.html | yes | no | no | rAF | no | 5 | - |
| 07-langtons-ant-five-ants.html | yes | no | no | rAF | no | 5 | - |
| 08-langtons-ant-four-colors.html | yes | no | no | rAF | no | 5 | - |
| 09-langtons-ant-six-colors.html | yes | no | no | rAF | no | 5 | - |
| 10-langtons-ant-hex-grid.html | yes | no | no | rAF | no | 5 | - |
| 11-langtons-ant-trails.html | yes | no | no | rAF | no | 5 | - |
| 12-langtons-ant-race.html | yes | no | no | rAF | no | 5 | - |
| 13-boids-2d-basic.html | yes | no | no | rAF | no | 5 | - |
| 14-boids-with-obstacles.html | yes | no | no | rAF | no | 5 | - |
| 15-boids-with-predator.html | yes | no | no | rAF | no | 5 | - |
| 16-boids-two-species.html | yes | no | no | rAF | no | 5 | - |
| 17-boids-velocity-trails.html | yes | no | no | rAF | no | 5 | - |
| 18-boids-separation-zones.html | yes | no | no | rAF | no | 5 | - |
| 19-boids-alignment-vectors.html | yes | no | no | rAF | no | 5 | - |
| 20-boids-cohesion-visualization.html | yes | no | no | rAF | no | 5 | - |
| 26-ca-brians-brain.html | yes | no | no | rAF | no | 5 | - |
| 27-ca-seeds.html | yes | no | no | rAF | no | 5 | - |
| 28-ca-wireworld.html | yes | no | no | rAF | no | 5 | - |
| 29-ca-day-and-night.html | yes | no | no | rAF | no | 5 | - |
| 30-ca-highlife.html | yes | no | no | rAF | no | 5 | - |
| 31-ca-replicator.html | yes | no | no | rAF | no | 5 | - |
| 32-ca-cyclic.html | yes | no | no | rAF | no | 5 | - |
| 33-ca-rock-paper-scissors.html | yes | no | no | rAF | no | 5 | - |
| 34-ca-majority-rule.html | yes | no | no | rAF | no | 5 | - |
| 35-ca-immigration.html | yes | no | no | rAF | no | 5 | - |
| 36-ca-anneal.html | yes | no | no | rAF | no | 5 | - |
| 37-ca-vote.html | yes | no | no | rAF | no | 5 | - |
| 38-swarm-ant-colony.html | yes | no | no | rAF | yes | 5 | - |
| 39-swarm-slime-mold.html | yes | no | no | rAF | yes | 5 | - |
| 40-swarm-particle-swarm.html | yes | no | no | rAF | yes | 5 | - |
| 41-swarm-fireflies.html | yes | no | no | rAF | yes | 5 | - |
| 42-swarm-bacteria.html | yes | no | no | rAF | yes | 5 | - |
| 43-swarm-fish-school.html | yes | no | no | rAF | yes | 5 | - |
| 44-swarm-termite-nest.html | yes | no | no | rAF | yes | 5 | - |
| 45-particle-life-3-types.html | yes | no | no | rAF | no | 5 | - |
| 46-particle-life-5-types.html | yes | no | no | rAF | no | 5 | - |
| 47-particle-life-6-types.html | yes | no | no | rAF | no | 5 | - |
| 48-particle-life-magnetic.html | yes | no | no | rAF | no | 5 | - |
| 49-particle-life-gravitational.html | yes | no | no | rAF | no | 5 | - |
| 50-particle-life-chemistry.html | yes | no | no | rAF | no | 5 | - |
| 51-edge-of-chaos.html | yes | no | no | rAF | no | 5 | - |
| 51-sir-epidemic.html | yes | no | yes | rAF | no | 5 | - |
| 52-emergence-principles.html | yes | no | no | rAF | no | 5 | - |
| 52-seir-epidemic.html | yes | no | yes | rAF | no | 5 | - |
| 53-collective-problem-solving.html | yes | no | yes | rAF | no | 5 | - |
| 53-kuramoto-sync.html | yes | no | yes | rAF | no | 5 | - |
| 54-fitness-landscape.html | yes | no | yes | rAF | no | 5 | - |
| 54-vicsek-model.html | yes | no | yes | rAF | no | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### engineering-robotics

**Files**: 11 (10 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 21-inverse-kinematics.html | yes | yes | no | rAF | yes | 5 | - |
| 22-pid-controller.html | yes | yes | no | rAF | yes | 5 | - |
| 23-truss-analysis.html | yes | yes | no | none | yes | 4 | - |
| 24-four-bar-linkage.html | yes | no | no | rAF | no | 5 | - |
| 25-gear-ratios.html | yes | no | no | rAF | no | 4 | - |
| 26-op-amp.html | yes | no | no | rAF | no | 4 | - |
| 27-logic-gates.html | yes | no | yes | rAF+SI | no | 5 | - |
| 28-stepper-motor.html | yes | no | no | rAF+SI | no | 5 | - |
| 29-hydraulic-press.html | yes | no | no | none | no | 4 | - |
| 30-wind-tunnel.html | yes | no | no | rAF | no | 4 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### epidemic-model

**Files**: 1 (0 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| **index.html** (index) | yes | yes | yes | rAF | yes | 3 | - |

### ethnocentrism

**Files**: 21 (20 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-basic-ethnocentrism.html | yes | yes | no | rAF | yes | 5 | - |
| 02-strategy-distribution.html | yes | yes | no | rAF | yes | 5 | - |
| 03-spatial-segregation.html | yes | yes | no | rAF | yes | 5 | - |
| 04-cooperation-rate.html | yes | yes | no | rAF | no | 5 | - |
| 05-strategy-survival.html | yes | yes | no | rAF | no | 5 | - |
| 06-color-territories.html | yes | yes | no | rAF | no | 5 | - |
| 07-boundary-dynamics.html | yes | yes | no | rAF | no | 5 | - |
| 08-mutation-effects.html | yes | yes | no | rAF | no | 5 | - |
| 09-initial-conditions.html | yes | yes | no | rAF | no | 5 | - |
| 10-payoff-matrix.html | yes | yes | no | rAF | no | 5 | - |
| 11-cluster-size.html | yes | yes | no | rAF | no | 5 | - |
| 12-immigration-effects.html | yes | yes | no | rAF | no | 5 | - |
| 13-four-strategy-arena.html | yes | yes | no | rAF | no | 5 | - |
| 14-altruist-exploitation.html | yes | yes | no | rAF | no | 5 | - |
| 15-spatial-assortment.html | yes | yes | no | rAF | no | 5 | - |
| 16-frequency-dependent.html | yes | yes | no | rAF | no | 5 | - |
| 17-agent-migration.html | yes | yes | no | rAF | no | 5 | - |
| 18-network-topology.html | yes | yes | no | rAF | no | 5 | - |
| 19-carrying-capacity.html | yes | yes | no | rAF | no | 5 | - |
| 20-parameter-space.html | yes | yes | no | rAF | no | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### evolution-of-trust

**Files**: 1 (0 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| **index.html** (index) | yes | yes | no | rAF | yes | 3 | - |

### evolutionary-walkers

**Files**: 1 (0 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| **index.html** (index) | yes | yes | yes | rAF | yes | 3 | - |

## Enhancement Recommendations

### Priority 1: Missing window.reset (demos without it)

- **data-structures**: 20 files (04-graph-traversal.html, 05-trie-structure.html, 06-red-black-tree.html, 07-skip-list.html, 08-treap.html...)
- **digital-signal-processing**: 17 files (04-aliasing-demo.html, 05-convolution.html, 06-fir-filter.html, 07-iir-filter.html, 08-butterworth-filter.html...)
- **earth-space**: 9 files (52-plate-tectonics.html, 53-coriolis.html, 54-milankovitch.html, 55-transit-method.html, 56-radial-velocity.html...)
- **educational**: 7 files (04-gray-scott-edu.html, 05-game-of-life-edu.html, 06-fourier-edu.html, 07-lorenz-edu.html, 08-nbody-edu.html...)
- **elliptic-curve-murmurations**: 36 files (04-finite-field-curves.html, 05-conductor-visualizer.html, 06-rank-comparison.html, 07-murmuration-waves.html, 08-ap-scatter-plot.html...)
- **emergent-behaviors**: 50 files (04-langtons-ant-highway.html, 05-langtons-ant-complex-highway.html, 06-langtons-ant-two-ants.html, 07-langtons-ant-five-ants.html, 08-langtons-ant-four-colors.html...)
- **engineering-robotics**: 7 files (24-four-bar-linkage.html, 25-gear-ratios.html, 26-op-amp.html, 27-logic-gates.html, 28-stepper-motor.html...)

### Priority 2: Missing resize handlers (demos without them)

- **d3js**: 1 files (19-octonion-fano.html)
- **data-structures**: 7 files (08-treap.html, 13-scapegoat-tree.html, 14-ukkonen-suffix-tree.html, 15-aho-corasick.html, 16-burrows-wheeler.html...)
- **earth-space**: 9 files (51-seismic-waves.html, 52-plate-tectonics.html, 53-coriolis.html, 54-milankovitch.html, 55-transit-method.html...)
- **educational**: 1 files (01-double-pendulum-edu.html)
- **elliptic-curve-murmurations**: 3 files (10-animated-emergence.html, 26-sound-visualization.html, 36-prime-sieve.html)
- **emergent-behaviors**: 47 files (01-langtons-ant-classic.html, 02-langtons-ant-rlr.html, 03-langtons-ant-llrr.html, 04-langtons-ant-highway.html, 05-langtons-ant-complex-highway.html...)
- **engineering-robotics**: 7 files (21-inverse-kinematics.html, 22-pid-controller.html, 24-four-bar-linkage.html, 25-gear-ratios.html, 26-op-amp.html...)
- **ethnocentrism**: 20 files (01-basic-ethnocentrism.html, 02-strategy-distribution.html, 03-spatial-segregation.html, 04-cooperation-rate.html, 05-strategy-survival.html...)

### Priority 3: Missing panel blur (demos with panels but no blur)

- **data-structures**: 13 files (07-skip-list.html, 08-treap.html, 09-hyperloglog.html, 10-count-min-sketch.html, 11-crdt-playground.html...)
- **digital-signal-processing**: 17 files (04-aliasing-demo.html, 05-convolution.html, 06-fir-filter.html, 07-iir-filter.html, 08-butterworth-filter.html...)
- **earth-space**: 5 files (52-plate-tectonics.html, 53-coriolis.html, 54-milankovitch.html, 55-transit-method.html, 59-lunar-phases.html)
- **educational**: 7 files (04-gray-scott-edu.html, 05-game-of-life-edu.html, 06-fourier-edu.html, 07-lorenz-edu.html, 08-nbody-edu.html...)
- **elliptic-curve-murmurations**: 37 files (02-curve-family-gallery.html, 04-finite-field-curves.html, 05-conductor-visualizer.html, 06-rank-comparison.html, 07-murmuration-waves.html...)
- **emergent-behaviors**: 43 files (04-langtons-ant-highway.html, 05-langtons-ant-complex-highway.html, 06-langtons-ant-two-ants.html, 07-langtons-ant-five-ants.html, 08-langtons-ant-four-colors.html...)
- **engineering-robotics**: 7 files (24-four-bar-linkage.html, 25-gear-ratios.html, 26-op-amp.html, 27-logic-gates.html, 28-stepper-motor.html...)
- **ethnocentrism**: 17 files (04-cooperation-rate.html, 05-strategy-survival.html, 06-color-territories.html, 07-boundary-dynamics.html, 08-mutation-effects.html...)

### Priority 4: setInterval-based animations (should use rAF)

- **d3js**: 1 files (19-octonion-fano.html)
- **data-structures**: 4 files (08-treap.html, 13-scapegoat-tree.html, 14-ukkonen-suffix-tree.html, 15-aho-corasick.html)
- **distributed-systems**: 2 files (01-viewstamped-replication.html, 02-epaxos.html)
- **engineering-robotics**: 2 files (27-logic-gates.html, 28-stepper-motor.html)

### Notable: Duplicate Number Prefixes

- **data-structures**: Prefix 12 used by: 12-scapegoat-tree.html, 12-van-emde-boas.html
- **data-structures**: Prefix 13 used by: 13-scapegoat-tree.html, 13-ukkonen-suffix-tree.html
- **data-structures**: Prefix 14 used by: 14-aho-corasick.html, 14-ukkonen-suffix-tree.html
- **emergent-behaviors**: Prefix 51 used by: 51-edge-of-chaos.html, 51-sir-epidemic.html
- **emergent-behaviors**: Prefix 52 used by: 52-emergence-principles.html, 52-seir-epidemic.html
- **emergent-behaviors**: Prefix 53 used by: 53-collective-problem-solving.html, 53-kuramoto-sync.html
- **emergent-behaviors**: Prefix 54 used by: 54-fitness-landscape.html, 54-vicsek-model.html
