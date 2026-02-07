# CCAB Analysis Report - Chunk 06

## Directories: metaballs through percolation

**Date**: 2026-02-07
**Total HTML Files**: 1686 (1666 demos + 20 gallery indexes)

## Executive Summary

| Metric | Count | Percentage |
|--------|-------|------------|
| enhance.js injected | 1686/1686 | 100% |
| window.reset exposed (demos) | 58/1666 | 3% |
| Resize handler (demos) | 709/1666 | 42% |
| Panel blur (demos) | 107/1666 | 6% |
| Files with issues | 10/1686 | 0% |

### Animation Methods (demos only)

| Method | Count | Percentage |
|--------|-------|------------|
| SI | 8 | 0% |
| none | 55 | 3% |
| rAF | 1529 | 91% |
| rAF+SI | 22 | 1% |
| setTimeout | 52 | 3% |

### Quality Distribution (demos only)

| Rating | Count | Percentage |
|--------|-------|------------|
| 4/5 | 30 | 1% |
| 5/5 | 1636 | 98% |

## Issues Found

**Total files with issues**: 10

| Issue Type | Count | Example Files |
|-----------|-------|---------------|
| ext-script | 10 | network-dynamics/01-cascade-failures.html, network-dynamics/02-information-diffusion.html, network-dynamics/03-network-resilience.html... (+7 more) |

## Per-Directory Summary

| Directory | Files | Demos | enhance.js | window.reset | resize | rAF | panel-blur | Avg Quality | Issues |
|-----------|-------|-------|-----------|-------------|--------|-----|------------|-------------|--------|
| metaballs | 1 | 0 | 1/1 | 0/0 | 0/0 | 0/0 | 0/0 | 0.0 | 0 |
| ml-visualizations | 36 | 35 | 36/36 | 3/35 | 8/35 | 13/35 | 0/35 | 5.0 | 0 |
| mnca | 1 | 0 | 1/1 | 0/0 | 0/0 | 0/0 | 0/0 | 0.0 | 0 |
| modern-cryptography | 21 | 20 | 21/21 | 3/20 | 0/20 | 1/20 | 0/20 | 5.0 | 0 |
| morphogenesis | 11 | 10 | 11/11 | 3/10 | 10/10 | 10/10 | 3/10 | 5.0 | 0 |
| music-sequencers | 51 | 50 | 51/51 | 3/50 | 41/50 | 50/50 | 0/50 | 5.0 | 0 |
| netlogo-simulations | 115 | 114 | 115/115 | 3/114 | 82/114 | 90/114 | 27/114 | 5.0 | 0 |
| netlogo-simulations-2 | 256 | 255 | 256/256 | 3/255 | 229/255 | 233/255 | 38/255 | 5.0 | 0 |
| netlogo-simulations-3 | 1057 | 1056 | 1057/1057 | 4/1056 | 239/1056 | 1056/1056 | 0/1056 | 5.0 | 0 |
| network-dynamics | 11 | 10 | 11/11 | 3/10 | 0/10 | 0/10 | 3/10 | 4.8 | 10 |
| neural-network-playgrounds | 8 | 7 | 8/8 | 3/7 | 6/7 | 4/7 | 7/7 | 5.0 | 0 |
| newton-fractals | 1 | 0 | 1/1 | 0/0 | 0/0 | 0/0 | 0/0 | 0.0 | 0 |
| optical-illusions | 6 | 5 | 6/6 | 3/5 | 5/5 | 5/5 | 5/5 | 5.0 | 0 |
| optimization | 11 | 10 | 11/11 | 3/10 | 10/10 | 10/10 | 10/10 | 5.0 | 0 |
| orbital-flythroughs | 52 | 51 | 52/52 | 3/51 | 51/51 | 51/51 | 3/51 | 5.0 | 0 |
| p5-generative-art | 16 | 15 | 16/16 | 15/15 | 0/15 | 0/15 | 3/15 | 4.5 | 0 |
| particle-effects | 9 | 8 | 9/9 | 3/8 | 8/8 | 8/8 | 8/8 | 5.0 | 0 |
| particle-systems | 21 | 20 | 21/21 | 3/20 | 20/20 | 20/20 | 0/20 | 4.0 | 0 |
| pathfinding | 1 | 0 | 1/1 | 0/0 | 0/0 | 0/0 | 0/0 | 0.0 | 0 |
| percolation | 1 | 0 | 1/1 | 0/0 | 0/0 | 0/0 | 0/0 | 0.0 | 0 |

## Detailed File Analysis

*(Directories with >60 files show summary only; full details in JSON)*

### metaballs

**Files**: 1 (0 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| **index.html** (index) | yes | no | no | rAF | no | 3 | - |

### ml-visualizations

**Files**: 36 (35 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-nn-playground.html | yes | yes | no | none | no | 5 | - |
| 02-mnist-digits.html | yes | yes | no | none | no | 5 | - |
| 03-image-classifier.html | yes | yes | no | rAF | no | 5 | - |
| 04-pose-detection.html | yes | no | no | rAF | no | 5 | - |
| 05-face-mesh.html | yes | no | no | rAF | no | 5 | - |
| 06-style-transfer.html | yes | no | no | rAF | no | 5 | - |
| 07-hand-tracking.html | yes | no | no | rAF | no | 5 | - |
| 08-object-detection.html | yes | no | no | rAF | no | 5 | - |
| 09-sentiment-viz.html | yes | no | no | none | no | 5 | - |
| 10-audio-commands.html | yes | no | no | setTimeout | no | 5 | - |
| 11-body-segmentation.html | yes | no | no | rAF | no | 5 | - |
| 12-gan-explorer.html | yes | no | no | rAF | no | 5 | - |
| 13-neural-doodle.html | yes | no | no | none | no | 5 | - |
| 14-music-generation.html | yes | no | no | SI | no | 5 | - |
| 15-rl-game.html | yes | no | no | SI | no | 4 | - |
| 16-tsne-explorer.html | yes | no | yes | rAF | no | 5 | - |
| 17-dbscan-clustering.html | yes | no | yes | none | no | 5 | - |
| 18-mean-shift.html | yes | no | no | SI | no | 5 | - |
| 19-ransac.html | yes | no | no | none | no | 5 | - |
| 20-svm.html | yes | no | no | none | no | 5 | - |
| 21-adaboost.html | yes | no | no | none | no | 5 | - |
| 21-umap-explorer.html | yes | no | yes | rAF | no | 5 | - |
| 22-em-algorithm.html | yes | no | yes | none | no | 5 | - |
| 24-optimizer-shootout.html | yes | no | yes | rAF | no | 5 | - |
| 25-baum-welch-hmm.html | yes | no | yes | none | no | 5 | - |
| 26-bcjr-decoder.html | yes | no | no | none | no | 5 | - |
| 27-elbo-geometry.html | yes | no | no | rAF | no | 5 | - |
| 28-realnvp-flow.html | yes | no | no | rAF | no | 5 | - |
| 29-word2vec.html | yes | no | no | setTimeout | no | 5 | - |
| 30-bayesian-optimization.html | yes | no | no | setTimeout | no | 5 | - |
| 31-xgboost.html | yes | no | no | setTimeout | no | 5 | - |
| 32-autodiff.html | yes | no | no | setTimeout | no | 5 | - |
| 33-ntk.html | yes | no | yes | setTimeout | no | 5 | - |
| 34-gradcam.html | yes | no | no | setTimeout | no | 5 | - |
| 35-jackknife.html | yes | no | yes | setTimeout | no | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### mnca

**Files**: 1 (0 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| **index.html** (index) | yes | yes | yes | rAF | yes | 3 | - |

### modern-cryptography

**Files**: 21 (20 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-des-block-cipher.html | yes | yes | no | setTimeout | no | 5 | - |
| 02-aes-visualization.html | yes | yes | no | setTimeout | no | 5 | - |
| 03-rsa-key-generation.html | yes | yes | no | setTimeout | no | 5 | - |
| 04-diffie-hellman.html | yes | no | no | setTimeout | no | 5 | - |
| 05-elliptic-curve.html | yes | no | no | none | no | 5 | - |
| 06-sha256-hash.html | yes | no | no | none | no | 5 | - |
| 07-digital-signature.html | yes | no | no | setTimeout | no | 5 | - |
| 08-ssl-tls-handshake.html | yes | no | no | setTimeout | no | 5 | - |
| 09-block-cipher-modes.html | yes | no | no | none | no | 5 | - |
| 10-zero-knowledge-proof.html | yes | no | no | setTimeout | no | 5 | - |
| 11-hmac-authentication.html | yes | no | no | none | no | 5 | - |
| 12-key-derivation.html | yes | no | no | none | no | 5 | - |
| 13-symmetric-vs-asymmetric.html | yes | no | no | none | no-panel | 5 | - |
| 14-quantum-key-distribution.html | yes | no | no | none | no | 5 | - |
| 15-blockchain-hashing.html | yes | no | no | rAF+SI | no | 5 | - |
| 16-pki-certificates.html | yes | no | no | setTimeout | no | 5 | - |
| 17-post-quantum.html | yes | no | no | none | no | 5 | - |
| 18-homomorphic-encryption.html | yes | no | no | setTimeout | no | 5 | - |
| 19-padding-oracle.html | yes | no | no | setTimeout | no | 5 | - |
| 20-md5-collision.html | yes | no | no | none | no | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### morphogenesis

**Files**: 11 (10 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-cell-division.html | yes | yes | yes | rAF | yes | 5 | - |
| 02-gastrulation.html | yes | yes | yes | rAF | yes | 5 | - |
| 03-somite-formation.html | yes | yes | yes | rAF | yes | 5 | - |
| 04-limb-development.html | yes | no | yes | rAF | no | 5 | - |
| 05-neural-tube.html | yes | no | yes | rAF | no | 5 | - |
| 06-apoptosis-patterns.html | yes | no | yes | rAF | no | 5 | - |
| 07-morphogen-gradients.html | yes | no | yes | rAF | no | 5 | - |
| 08-branching-morphogenesis.html | yes | no | yes | rAF | no | 5 | - |
| 09-epithelial-folding.html | yes | no | yes | rAF | no | 5 | - |
| 10-wound-healing.html | yes | no | yes | rAF | no | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### music-sequencers

**Files**: 51 (50 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-radial-orbit-sequencer.html | yes | yes | yes | rAF | no | 5 | - |
| 02-hexagonal-grid-sequencer.html | yes | yes | yes | rAF | no | 5 | - |
| 03-gravity-drop-sequencer.html | yes | yes | yes | rAF | no | 5 | - |
| 04-game-of-life-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 05-pendulum-wave-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 06-fibonacci-spiral-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 07-bouncing-ball-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 08-voronoi-cell-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 09-langtons-ant-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 10-drawing-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 11-tree-growth-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 12-wave-interference-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 13-prime-number-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 14-markov-chain-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 15-3d-rotating-cube-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 16-particle-flow-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 17-orbital-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 18-polyrhythmic-circles-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 19-rain-drop-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 20-text-to-melody-sequencer.html | yes | no | no | rAF+SI | no | 5 | - |
| 21-constellation-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 22-maze-sequencer.html | yes | no | no | rAF | no | 5 | - |
| 23-euclidean-rhythm-sequencer.html | yes | no | no | rAF | no | 5 | - |
| 24-ripple-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 25-flocking-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 26-spring-network-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 27-chaos-attractor-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 28-sand-pile-sequencer.html | yes | no | no | rAF | no | 5 | - |
| 29-laser-reflection-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 30-mobius-strip-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 31-genetic-melody-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 32-probability-matrix-sequencer.html | yes | no | no | rAF | no | 5 | - |
| 33-neural-network-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 34-circular-piano-roll-sequencer.html | yes | no | no | rAF | no | 5 | - |
| 35-phase-shifting-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 36-chord-progression-sequencer.html | yes | no | no | rAF | no | 5 | - |
| 37-domino-chain-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 38-stochastic-drum-machine.html | yes | no | no | rAF | no | 5 | - |
| 39-arpeggiator-grid-sequencer.html | yes | no | no | rAF | no | 5 | - |
| 40-time-signature-morph-sequencer.html | yes | no | yes | rAF+SI | no | 5 | - |
| 41-quantum-superposition-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 42-magnetic-field-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 43-gyroscope-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 44-reaction-diffusion-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 45-breathing-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 46-color-spectrum-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 47-binary-counter-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 48-mirror-symmetry-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 49-spiral-galaxy-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| 50-retrograde-sequencer.html | yes | no | yes | rAF | no | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### netlogo-simulations

**Files**: 115 (114 demos, 1 index)

**Animation methods**: SI: 2, none: 5, rAF: 75, rAF+SI: 15, setTimeout: 17


### netlogo-simulations-2

**Files**: 256 (255 demos, 1 index)

**Animation methods**: none: 8, rAF: 232, rAF+SI: 1, setTimeout: 14


### netlogo-simulations-3

**Files**: 1057 (1056 demos, 1 index)

**Animation methods**: rAF: 1056


### network-dynamics

**Files**: 11 (10 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-cascade-failures.html | yes | yes | no | setTimeout | yes | 5 | ext-script: https://d3js.org/d3.v7.min.js |
| 02-information-diffusion.html | yes | yes | no | SI | yes | 5 | ext-script: https://d3js.org/d3.v7.min.js |
| 03-network-resilience.html | yes | yes | no | none | yes | 5 | ext-script: https://d3js.org/d3.v7.min.js |
| 04-preferential-attachment.html | yes | no | no | SI | no | 4 | ext-script: https://d3js.org/d3.v7.min.js |
| 05-community-detection.html | yes | no | no | none | no | 5 | ext-script: https://d3js.org/d3.v7.min.js |
| 06-network-centrality.html | yes | no | no | none | no | 5 | ext-script: https://d3js.org/d3.v7.min.js |
| 07-small-world-experiment.html | yes | no | no | none | no | 5 | ext-script: https://d3js.org/d3.v7.min.js |
| 08-network-motifs.html | yes | no | no | none | no | 5 | ext-script: https://d3js.org/d3.v7.min.js |
| 09-link-prediction.html | yes | no | no | setTimeout | no | 5 | ext-script: https://d3js.org/d3.v7.min.js |
| 10-temporal-networks.html | yes | no | no | SI | no | 4 | ext-script: https://d3js.org/d3.v7.min.js |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### neural-network-playgrounds

**Files**: 8 (7 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-perceptron-learning.html | yes | yes | yes | rAF | yes | 5 | - |
| 02-gradient-descent-landscape.html | yes | yes | yes | rAF | yes | 5 | - |
| 03-activation-functions.html | yes | yes | yes | none | yes | 5 | - |
| 04-backpropagation-flow.html | yes | no | yes | rAF | yes | 5 | - |
| 05-cnn-filter-viewer.html | yes | no | no | none | yes | 5 | - |
| 06-attention-mechanism.html | yes | no | yes | rAF | yes | 5 | - |
| 07-kmeans-clustering.html | yes | no | yes | setTimeout | yes | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### newton-fractals

**Files**: 1 (0 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| **index.html** (index) | yes | yes | yes | rAF | yes | 3 | - |

### optical-illusions

**Files**: 6 (5 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-moire-patterns.html | yes | yes | yes | rAF | yes | 5 | - |
| 02-optical-flow.html | yes | yes | yes | rAF | yes | 5 | - |
| 03-fraser-spiral.html | yes | yes | yes | rAF | yes | 5 | - |
| 04-motion-induced-blindness.html | yes | no | yes | rAF | yes | 5 | - |
| 05-cafe-wall-illusion.html | yes | no | yes | rAF | yes | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### optimization

**Files**: 11 (10 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-gradient-descent.html | yes | yes | yes | rAF | yes | 5 | - |
| 02-simulated-annealing.html | yes | yes | yes | rAF | yes | 5 | - |
| 03-hill-climbing.html | yes | yes | yes | rAF | yes | 5 | - |
| 04-genetic-algorithm-tsp.html | yes | no | yes | rAF | yes | 5 | - |
| 05-particle-swarm.html | yes | no | yes | rAF | yes | 5 | - |
| 06-ant-colony-optimization.html | yes | no | yes | rAF | yes | 5 | - |
| 07-differential-evolution.html | yes | no | yes | rAF | yes | 5 | - |
| 08-bayesian-optimization.html | yes | no | yes | rAF | yes | 5 | - |
| 09-convex-vs-nonconvex.html | yes | no | yes | rAF | yes | 5 | - |
| 10-multi-objective.html | yes | no | yes | rAF | yes | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### orbital-flythroughs

**Files**: 52 (51 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 00-all-missions.html | yes | no | yes | rAF | no | 5 | - |
| 01-voyager-1.html | yes | yes | yes | rAF | yes | 5 | - |
| 02-voyager-2.html | yes | yes | yes | rAF | yes | 5 | - |
| 03-pioneer-10.html | yes | yes | yes | rAF | yes | 5 | - |
| 04-pioneer-11.html | yes | no | yes | rAF | no | 5 | - |
| 05-mariner-10.html | yes | no | yes | rAF | no | 5 | - |
| 06-cassini-huygens.html | yes | no | yes | rAF | no | 5 | - |
| 07-new-horizons.html | yes | no | yes | rAF | no | 5 | - |
| 08-galileo.html | yes | no | yes | rAF | no | 5 | - |
| 09-juno.html | yes | no | yes | rAF | no | 5 | - |
| 10-messenger.html | yes | no | yes | rAF | no | 5 | - |
| 11-parker-solar-probe.html | yes | no | yes | rAF | no | 5 | - |
| 12-dawn.html | yes | no | yes | rAF | no | 5 | - |
| 13-osiris-rex.html | yes | no | yes | rAF | no | 5 | - |
| 14-lucy.html | yes | no | yes | rAF | no | 5 | - |
| 15-luna-3.html | yes | no | yes | rAF | no | 5 | - |
| 16-venera-9.html | yes | no | yes | rAF | no | 5 | - |
| 17-vega-1-2.html | yes | no | yes | rAF | no | 5 | - |
| 18-rosetta.html | yes | no | yes | rAF | no | 5 | - |
| 19-bepi-colombo.html | yes | no | yes | rAF | no | 5 | - |
| 20-hayabusa2.html | yes | no | yes | rAF | no | 5 | - |
| 21-mars-3.html | yes | no | yes | rAF | no | 5 | - |
| 22-juice.html | yes | no | yes | rAF | no | 5 | - |
| 23-europa-clipper.html | yes | no | yes | rAF | no | 5 | - |
| 24-mangalyaan.html | yes | no | yes | rAF | no | 5 | - |
| 25-tianwen-1.html | yes | no | yes | rAF | no | 5 | - |
| 26-giotto.html | yes | no | yes | rAF | no | 5 | - |
| 27-mariner-2.html | yes | no | yes | rAF | no | 5 | - |
| 28-mariner-4.html | yes | no | yes | rAF | no | 5 | - |
| 29-mariner-9.html | yes | no | yes | rAF | no | 5 | - |
| 30-viking-1.html | yes | no | yes | rAF | no | 5 | - |
| 31-phobos-2.html | yes | no | yes | rAF | no | 5 | - |
| 32-ulysses.html | yes | no | yes | rAF | no | 5 | - |
| 33-near-shoemaker.html | yes | no | yes | rAF | no | 5 | - |
| 34-stardust.html | yes | no | yes | rAF | no | 5 | - |
| 35-genesis.html | yes | no | yes | rAF | no | 5 | - |
| 36-deep-impact.html | yes | no | yes | rAF | no | 5 | - |
| 37-chandrayaan-1.html | yes | no | yes | rAF | no | 5 | - |
| 38-chang-e-2.html | yes | no | yes | rAF | no | 5 | - |
| 39-psyche.html | yes | no | yes | rAF | no | 5 | - |
| 40-dragonfly.html | yes | no | yes | rAF | no | 5 | - |
| 41-solar-orbiter.html | yes | no | yes | rAF | no | 5 | - |
| 42-mars-express.html | yes | no | yes | rAF | no | 5 | - |
| 43-venus-express.html | yes | no | yes | rAF | no | 5 | - |
| 44-akatsuki.html | yes | no | yes | rAF | no | 5 | - |
| 45-hope.html | yes | no | yes | rAF | no | 5 | - |
| 46-perseverance.html | yes | no | yes | rAF | no | 5 | - |
| 47-insight.html | yes | no | yes | rAF | no | 5 | - |
| 48-lunar-gateway.html | yes | no | yes | rAF | no | 5 | - |
| 49-artemis.html | yes | no | yes | rAF | no | 5 | - |
| 50-clementine.html | yes | no | yes | rAF | no | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### p5-generative-art

**Files**: 16 (15 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-flow-field.html | yes | yes | no | none | yes | 5 | - |
| 02-circle-packing.html | yes | yes | no | none | yes | 4 | - |
| 03-recursive-tree.html | yes | yes | no | none | yes | 5 | - |
| 04-phyllotaxis.html | yes | yes | no | none | no | 4 | - |
| 05-metaballs.html | yes | yes | no | none | no | 4 | - |
| 06-10-print.html | yes | yes | no | none | no | 4 | - |
| 07-perlin-terrain.html | yes | yes | no | none | no | 4 | - |
| 08-spirograph.html | yes | yes | no | none | no | 5 | - |
| 09-maze-generator.html | yes | yes | no | none | no | 5 | - |
| 10-chladni-figures.html | yes | yes | no | none | no | 4 | - |
| 11-coding-clock.html | yes | yes | no | none | no-panel | 4 | - |
| 12-attractors.html | yes | yes | no | none | no | 4 | - |
| 13-fractal-tree.html | yes | yes | no | none | no | 5 | - |
| 14-wfc.html | yes | yes | no | none | no | 5 | - |
| 15-gen-typography.html | yes | yes | no | none | no | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### particle-effects

**Files**: 9 (8 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-fire-effect.html | yes | yes | yes | rAF | yes | 5 | - |
| 02-water-fountain.html | yes | yes | yes | rAF | yes | 5 | - |
| 03-smoke-particles.html | yes | yes | yes | rAF | yes | 5 | - |
| 04-fireworks.html | yes | no | yes | rAF | yes | 5 | - |
| 05-snow-fall.html | yes | no | yes | rAF | yes | 5 | - |
| 06-starfield.html | yes | no | yes | rAF | yes | 5 | - |
| 07-plasma-effect.html | yes | no | yes | rAF | yes | 5 | - |
| 08-galaxy-spiral.html | yes | no | yes | rAF | yes | 5 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### particle-systems

**Files**: 21 (20 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| 01-fireworks.html | yes | yes | yes | rAF+SI | no-panel | 4 | - |
| 02-gravity-well.html | yes | yes | yes | rAF | no-panel | 4 | - |
| 03-mouse-attraction.html | yes | yes | yes | rAF | no-panel | 4 | - |
| 04-orbital-particles.html | yes | no | yes | rAF | no-panel | 4 | - |
| 05-fluid-particles.html | yes | no | yes | rAF | no-panel | 4 | - |
| 06-smoke-simulation.html | yes | no | yes | rAF | no-panel | 4 | - |
| 07-electric-arcs.html | yes | no | yes | rAF | no-panel | 4 | - |
| 08-constellation.html | yes | no | yes | rAF | no-panel | 4 | - |
| 09-dna-helix.html | yes | no | yes | rAF | no-panel | 4 | - |
| 10-spiral-galaxy.html | yes | no | yes | rAF | no-panel | 4 | - |
| 11-bouncing-balls.html | yes | no | yes | rAF | no-panel | 4 | - |
| 12-magnetic-field.html | yes | no | yes | rAF | no-panel | 4 | - |
| 13-aurora-borealis.html | yes | no | yes | rAF | no-panel | 4 | - |
| 14-rain-snow.html | yes | no | yes | rAF | no-panel | 5 | - |
| 15-paint-splatter.html | yes | no | yes | rAF+SI | no-panel | 4 | - |
| 16-particle-trails.html | yes | no | yes | rAF | no-panel | 4 | - |
| 17-turbulence.html | yes | no | yes | rAF | no-panel | 4 | - |
| 18-explosion.html | yes | no | yes | rAF+SI | no-panel | 4 | - |
| 19-morphing-shapes.html | yes | no | yes | rAF | no-panel | 4 | - |
| 20-swarm-interaction.html | yes | no | yes | rAF | no-panel | 4 | - |
| **index.html** (index) | yes | no | no | none | yes | 3 | - |

### pathfinding

**Files**: 1 (0 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| **index.html** (index) | yes | yes | yes | setTimeout | no | 3 | - |

### percolation

**Files**: 1 (0 demos, 1 index)

| File | enhance.js | window.reset | resize | animation | panel-blur | quality | issues |
|------|-----------|-------------|--------|-----------|------------|---------|--------|
| **index.html** (index) | yes | yes | yes | SI | no | 3 | - |

## Enhancement Recommendations

### Priority 1: Missing window.reset (demos without it)

- **ml-visualizations**: 32 files
- **modern-cryptography**: 17 files
- **morphogenesis**: 7 files
- **music-sequencers**: 47 files
- **netlogo-simulations**: 111 files
- **netlogo-simulations-2**: 252 files
- **netlogo-simulations-3**: 1052 files
- **network-dynamics**: 7 files
- **neural-network-playgrounds**: 4 files
- **optical-illusions**: 2 files
- **optimization**: 7 files
- **orbital-flythroughs**: 48 files
- **particle-effects**: 5 files
- **particle-systems**: 17 files

### Priority 2: Missing resize handlers

- **ml-visualizations**: 19 files
- **modern-cryptography**: 11 files
- **music-sequencers**: 9 files
- **netlogo-simulations**: 31 files
- **netlogo-simulations-2**: 24 files
- **netlogo-simulations-3**: 817 files
- **network-dynamics**: 5 files

### Priority 3: Missing panel blur

- **ml-visualizations**: 35 files
- **modern-cryptography**: 19 files
- **morphogenesis**: 7 files
- **music-sequencers**: 50 files
- **netlogo-simulations**: 87 files
- **netlogo-simulations-2**: 217 files
- **netlogo-simulations-3**: 1056 files
- **network-dynamics**: 7 files
- **orbital-flythroughs**: 48 files
- **p5-generative-art**: 11 files

### Priority 4: setInterval-based animations

- **ml-visualizations**: 3 files
- **modern-cryptography**: 1 files
- **music-sequencers**: 2 files
- **netlogo-simulations**: 17 files
- **netlogo-simulations-2**: 1 files
- **network-dynamics**: 3 files
- **particle-systems**: 3 files

### Notable: Duplicate Number Prefixes

- **ml-visualizations**: Prefix 21 used by 2 files: 21-adaboost.html, 21-umap-explorer.html
- **netlogo-simulations**: Prefix 11 used by 2 files: 11-binary-search.html, 11-opinion-dynamics.html
- **netlogo-simulations**: Prefix 13 used by 2 files: 13-brians-brain.html, 13-traffic-grid.html
- **netlogo-simulations**: Prefix 14 used by 3 files: 14-koch-snowflake.html, 14-monte-carlo-pi.html, 14-snake-game.html
- **netlogo-simulations**: Prefix 15 used by 2 files: 15-giant-component.html, 15-hilbert-curve.html
- **netlogo-simulations**: Prefix 16 used by 3 files: 16-crystallization.html, 16-el-farol-bar.html, 16-radioactivity.html
- **netlogo-simulations**: Prefix 17 used by 2 files: 17-exponential-growth.html, 17-standing-ovation.html
- **netlogo-simulations**: Prefix 18 used by 2 files: 18-logistic-growth.html, 18-shepherds.html
- **netlogo-simulations**: Prefix 20 used by 3 files: 20-birthday-paradox.html, 20-chemical-equilibrium.html, 20-rabbits-grass-weeds.html
- **netlogo-simulations**: Prefix 21 used by 3 files: 21-decay.html, 21-lennard-jones.html, 21-probability-distributions.html
- **netlogo-simulations**: Prefix 22 used by 2 files: 22-ant-lines.html, 22-electrostatics.html
- **netlogo-simulations**: Prefix 23 used by 3 files: 23-bee-hive.html, 23-pacman.html, 23-voting.html
- **netlogo-simulations**: Prefix 25 used by 2 files: 25-aids.html, 25-public-goods.html
- **netlogo-simulations**: Prefix 26 used by 2 files: 26-boiling.html, 26-butterfly.html
- **netlogo-simulations**: Prefix 27 used by 2 files: 27-parallel-sorting.html, 27-tumor-growth.html
- **netlogo-simulations**: Prefix 28 used by 3 files: 28-disease-spread.html, 28-rope.html, 28-vants.html
- **netlogo-simulations**: Prefix 29 used by 2 files: 29-disease-solo.html, 29-hashing.html
- **netlogo-simulations**: Prefix 30 used by 3 files: 30-leaf-venation.html, 30-network-virus.html, 30-tumor.html
- **netlogo-simulations**: Prefix 32 used by 2 files: 32-beesmart-hive.html, 32-solid-diffusion.html
- **netlogo-simulations**: Prefix 33 used by 4 files: 33-gaslab-piston.html, 33-life-turtle.html, 33-traffic-2-lanes.html...
- **netlogo-simulations**: Prefix 34 used by 4 files: 34-dice-stalagmite.html, 34-fractal-dimension.html, 34-random-walk.html...
- **netlogo-simulations**: Prefix 35 used by 3 files: 35-bird-breeders.html, 35-daisyworld.html, 35-random-walk-biased.html
- **netlogo-simulations**: Prefix 37 used by 2 files: 37-gaslab-adiabatic.html, 37-random-balls.html
- **netlogo-simulations**: Prefix 38 used by 2 files: 38-gaslab-gravity-box.html, 38-rumor-mill.html
- **netlogo-simulations**: Prefix 42 used by 2 files: 42-party.html, 42-phase-change.html
- **netlogo-simulations**: Prefix 43 used by 3 files: 43-bug-hunt-speeds.html, 43-climate-change.html, 43-hex-cells.html
- **netlogo-simulations**: Prefix 44 used by 3 files: 44-gaslab-isothermal-piston.html, 44-language-change.html, 44-painted-desert.html
- **netlogo-simulations**: Prefix 45 used by 2 files: 45-gaslab-adiabatic-piston.html, 45-grand-canyon.html
- **netlogo-simulations**: Prefix 47 used by 2 files: 47-continental-divide.html, 47-drought.html
- **netlogo-simulations**: Prefix 48 used by 2 files: 48-gaslab-gravity.html, 48-tide-pool.html
- **netlogo-simulations**: Prefix 50 used by 3 files: 50-artificial-anasazi.html, 50-muscle-development.html, 50-virus-art.html
- **netlogo-simulations**: Prefix 51 used by 2 files: 51-ant-adaptation.html, 51-echo.html
- **netlogo-simulations**: Prefix 52 used by 3 files: 52-connected-chemistry.html, 52-population-two-region.html, 52-unverified-virus.html
- **netlogo-simulations**: Prefix 54 used by 3 files: 54-3d-shapes.html, 54-atmosphere-chemistry.html, 54-urban-sprawl.html
- **netlogo-simulations-2**: Prefix 138 used by 2 files: 138-battle-of-sexes.html, 138-battle-sexes.html
- **netlogo-simulations-2**: Prefix 139 used by 2 files: 139-ultimatum-game.html, 139-ultimatum.html
- **netlogo-simulations-2**: Prefix 140 used by 2 files: 140-centipede-game.html, 140-centipede.html
- **netlogo-simulations-2**: Prefix 142 used by 2 files: 142-war-attrition.html, 142-war-of-attrition.html
- **netlogo-simulations-2**: Prefix 144 used by 2 files: 144-coalition-formation.html, 144-coalition.html
- **netlogo-simulations-2**: Prefix 145 used by 2 files: 145-signaling-games.html, 145-signaling.html
- **netlogo-simulations-2**: Prefix 154 used by 2 files: 154-kmeans-clustering.html, 154-neural-network.html
- **netlogo-simulations-2**: Prefix 155 used by 2 files: 155-decision-tree.html, 155-gradient-descent.html
- **netlogo-simulations-2**: Prefix 156 used by 2 files: 156-backpropagation.html, 156-k-means-clustering.html
- **netlogo-simulations-2**: Prefix 157 used by 2 files: 157-decision-tree.html, 157-rl-gridworld.html
- **netlogo-simulations-2**: Prefix 158 used by 2 files: 158-genetic-algorithm.html, 158-hopfield-network.html
- **netlogo-simulations-2**: Prefix 159 used by 3 files: 159-q-learning.html, 159-self-organizing-map.html, 159-som.html
- **netlogo-simulations-2**: Prefix 160 used by 3 files: 160-evolution-strategies.html, 160-evolutionary-strategies.html, 160-perceptron.html
- **netlogo-simulations-2**: Prefix 161 used by 2 files: 161-neuroevolution.html, 161-random-forest.html
- **netlogo-simulations-2**: Prefix 169 used by 2 files: 169-crowd-dynamics.html, 169-tournament-brackets.html
- **netlogo-simulations-2**: Prefix 172 used by 2 files: 172-tournament-bracket.html, 172-training-periodization.html
- **netlogo-simulations-2**: Prefix 173 used by 3 files: 173-stadium-crowd-dynamics.html, 173-stadium-crowd.html, 173-training-adaptation.html
- **netlogo-simulations-2**: Prefix 174 used by 2 files: 174-generative-music.html, 174-procedural-music.html
- **netlogo-simulations-2**: Prefix 175 used by 2 files: 175-generative-art.html, 175-rhythm-evolution.html
- **netlogo-simulations-2**: Prefix 176 used by 2 files: 176-color-harmony.html, 176-rhythm-patterns.html
- **netlogo-simulations-2**: Prefix 177 used by 2 files: 177-color-harmony.html, 177-space-syntax.html
- **netlogo-simulations-2**: Prefix 178 used by 2 files: 178-generative-architecture.html, 178-visual-music.html
- **netlogo-simulations-2**: Prefix 179 used by 2 files: 179-gene-regulation.html, 179-gene-regulatory-networks.html
- **netlogo-simulations-2**: Prefix 180 used by 2 files: 180-metabolic-flux.html, 180-protein-folding.html
- **netlogo-simulations-2**: Prefix 182 used by 2 files: 182-cell-cycle.html, 182-metabolic-pathways.html
- **netlogo-simulations-2**: Prefix 183 used by 2 files: 183-apoptosis.html, 183-circadian-rhythm.html
- **netlogo-simulations-2**: Prefix 184 used by 2 files: 184-stem-cell-niche.html, 184-stem-cell.html
- **netlogo-simulations-2**: Prefix 185 used by 2 files: 185-immune-response.html, 185-tissue-homeostasis.html
- **netlogo-simulations-2**: Prefix 186 used by 2 files: 186-iterated-learning.html, 186-language-evolution.html
- **netlogo-simulations-2**: Prefix 187 used by 2 files: 187-naming-game.html, 187-word-formation.html
- **netlogo-simulations-2**: Prefix 188 used by 2 files: 188-grammar-evolution.html, 188-semantic-networks.html
- **netlogo-simulations-2**: Prefix 189 used by 2 files: 189-dialect-diffusion.html, 189-pidgin-creole.html
- **netlogo-simulations-2**: Prefix 190 used by 2 files: 190-grammar-emergence.html, 190-semantic-change.html
- **netlogo-simulations-2**: Prefix 191 used by 2 files: 191-pid-controller.html, 191-thermostat-control.html
- **netlogo-simulations-2**: Prefix 192 used by 2 files: 192-feedback-loop.html, 192-pid-controller.html
- **netlogo-simulations-2**: Prefix 193 used by 2 files: 193-cruise-control.html, 193-homeostasis.html
- **netlogo-simulations-2**: Prefix 194 used by 2 files: 194-oscillator-control.html, 194-population-control.html
- **netlogo-simulations-2**: Prefix 195 used by 2 files: 195-adaptive-control.html, 195-inventory-management.html
- **netlogo-simulations-2**: Prefix 196 used by 2 files: 196-central-limit.html, 196-gamblers-ruin.html
- **netlogo-simulations-2**: Prefix 197 used by 2 files: 197-polya-urn.html, 197-random-walk.html
- **netlogo-simulations-2**: Prefix 198 used by 2 files: 198-bayesian-update.html, 198-coupon-collector.html
- **netlogo-simulations-2**: Prefix 199 used by 2 files: 199-monte-carlo.html, 199-secretary-problem.html
- **netlogo-simulations-2**: Prefix 200 used by 2 files: 200-markov-chain.html, 200-martingales.html
- **netlogo-simulations-2**: Prefix 201 used by 2 files: 201-multi-level-selection.html, 201-swarm-robotics.html
- **netlogo-simulations-2**: Prefix 202 used by 2 files: 202-niche-construction.html, 202-quantum-walk.html
- **netlogo-simulations-2**: Prefix 203 used by 2 files: 203-extended-phenotype.html, 203-network-resilience.html
- **netlogo-simulations-2**: Prefix 204 used by 2 files: 204-cultural-niche.html, 204-opinion-polarization.html
- **netlogo-simulations-2**: Prefix 205 used by 2 files: 205-emergence-complexity.html, 205-stigmergic-construction.html
- **netlogo-simulations-3**: Prefix 001 used by 2 files: 001-fitness-landscape-navigation.html, 001-fitness-landscape.html
