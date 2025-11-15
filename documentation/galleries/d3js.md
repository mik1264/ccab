# D3.js Gallery Documentation

## Overview
Data-driven visualizations using D3.js v7, showcasing force-directed graphs, hierarchical layouts, geographic maps, flow diagrams, and real-time streaming data.

**Total Demos:** 18
**Path:** `/d3js/`
**Technology:** D3.js v7
**Structure:** Organized in thematic subcategories

## Demos by Category

### Force-Directed Graphs
**Path:** `/d3js/force-directed/`

#### 01-basic-network.html
**Description:** Basic force-directed network graph with nodes and links.
**Key Features:** Force simulation, node dragging, link strength
**Techniques:** d3.forceSimulation, d3.forceLink, d3.forceManyBody

#### 02-collision-detection.html
**Description:** Particles with collision detection and avoidance.
**Key Features:** Collision forces, particle physics, boundaries
**Techniques:** d3.forceCollide, radius-based collision

#### 03-clustered-network.html
**Description:** Network with clustered node groups.
**Key Features:** Group clustering, color coding, force clustering
**Techniques:** d3.forceCluster, group-based forces

#### 04-dynamic-network.html
**Description:** Network that dynamically adds and removes nodes.
**Key Features:** Live updates, smooth transitions, dynamic forces
**Techniques:** Enter/exit patterns, force restart

#### 05-hierarchical-force.html
**Description:** Force layout with hierarchical constraints.
**Key Features:** Level-based positioning, hierarchical forces
**Techniques:** Custom force functions, y-position constraints

#### 06-charged-particles.html
**Description:** Electrically charged particle simulation.
**Key Features:** Charge simulation, attraction/repulsion
**Techniques:** d3.forceManyBody with variable charge

#### 07-social-network.html
**Description:** Social network visualization with community detection.
**Key Features:** Community clusters, node importance, edge weights
**Techniques:** Community detection algorithms, weighted edges

### Hierarchical Trees
**Path:** `/d3js/hierarchical-trees/`

#### 04-dendrogram.html
**Description:** Dendrogram showing hierarchical clustering.
**Key Features:** Tree layout, leaf nodes, branch paths
**Techniques:** d3.cluster, d3.hierarchy, path generation

#### 05-treemap.html
**Description:** Treemap visualization for hierarchical data.
**Key Features:** Nested rectangles, size encoding, color scales
**Techniques:** d3.treemap, d3.hierarchy, squarified tiling

### Geographic Maps
**Path:** `/d3js/maps/`

#### 04-flow-map.html
**Description:** Geographic flow map showing movement patterns.
**Key Features:** Arc paths, flow intensity, geographic projection
**Techniques:** d3.geoPath, arc interpolation, projections

#### 05-hex-bin-map.html
**Description:** Hexagonal binning on geographic maps.
**Key Features:** Hexbin aggregation, density visualization
**Techniques:** d3.hexbin, geographic binning, color scales

### Sankey Diagrams
**Path:** `/d3js/sankey/`

#### 02-budget-allocation.html
**Description:** Budget flow visualization using Sankey diagram.
**Key Features:** Flow distribution, category breakdown
**Techniques:** d3-sankey, flow calculation, link gradients

#### 05-traffic-flow.html
**Description:** Traffic flow patterns through network nodes.
**Key Features:** Traffic volume, path visualization
**Techniques:** Sankey layout, flow optimization

#### 07-food-chain.html
**Description:** Ecological food chain energy transfer.
**Key Features:** Energy flow, trophic levels, loss visualization
**Techniques:** Hierarchical Sankey, energy calculations

### Chord Diagrams
**Path:** `/d3js/chord/`

#### 01-migration-flow.html
**Description:** Migration patterns between regions using chord diagram.
**Key Features:** Bidirectional flows, arc relationships
**Techniques:** d3.chord, ribbon paths, matrix layout

#### 02-trade-relationships.html
**Description:** International trade relationships visualization.
**Key Features:** Trade volumes, import/export flows
**Techniques:** Chord layout, asymmetric flows

### Streaming Data
**Path:** `/d3js/streaming/`

#### 03-particle-stream.html
**Description:** Real-time particle stream visualization.
**Key Features:** Continuous data flow, particle trails
**Techniques:** Time-series updates, particle lifecycle

#### 06-heatmap-stream.html
**Description:** Streaming heatmap with live data updates.
**Key Features:** Real-time grid updates, color interpolation
**Techniques:** Grid-based visualization, temporal smoothing

## Common Patterns

### D3.js Setup
```javascript
const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
```

### Data Binding
```javascript
const nodes = svg.selectAll(".node")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", d => d.radius);
```

### Force Simulation
```javascript
const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width/2, height/2));
```

### Transitions
```javascript
selection.transition()
    .duration(750)
    .attr("transform", d => `translate(${d.x},${d.y})`);
```

## Data Handling

### Data Formats
- JSON for hierarchical data
- CSV for tabular data
- GeoJSON for geographic features
- Matrix format for chord diagrams

### Scales and Axes
```javascript
const xScale = d3.scaleLinear()
    .domain([0, maxValue])
    .range([0, width]);

const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
```

## Interactive Features

- **Dragging:** Node repositioning in force layouts
- **Hovering:** Tooltips and highlighting
- **Zooming:** Pan and zoom for detailed exploration
- **Brushing:** Selection and filtering
- **Animation:** Smooth transitions between states

## Performance Optimization

- Canvas rendering for large datasets
- Quadtree for collision detection
- Throttled updates for streaming data
- Level-of-detail rendering
- WebGL integration for massive datasets

## Responsive Design

All demos include:
- SVG viewBox for scaling
- Window resize handlers
- Mobile touch support
- Adaptive layouts based on screen size