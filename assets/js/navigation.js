// CCAB Navigation System - Core JavaScript

class CCABNavigation {
  constructor() {
    this.currentPath = window.location.pathname;
    this.galleries = this.initializeGalleries();
    this.demoIndex = [];
    this.searchVisible = false;
    this.init();
  }

  init() {
    this.generateBreadcrumb();
    this.initSearchToggle();
    this.initKeyboardShortcuts();
    this.initSmoothScroll();
    this.initMobileMenu();
    this.loadDemoIndex();
    this.initializeAnimations();
  }

  initializeGalleries() {
    return {
      // Creative & Visual Arts
      'algorithmic-art': { name: 'Algorithmic Art', section: 'creative', demos: 20 },
      'p5-generative-art': { name: 'P5.js Generative Art', section: 'creative', demos: 40 },
      'tsl-shaders': { name: 'TSL Shaders', section: 'creative', demos: 47 },
      'threejs-tsl-shaders': { name: 'Three.js TSL Shaders', section: 'creative', demos: 40 },
      'pixi-sprite-animations': { name: 'Pixi.js Animations', section: 'creative', demos: 17 },
      'css-art': { name: 'CSS Art', section: 'creative', demos: 6 },
      'svg-animations': { name: 'SVG Animations', section: 'creative', demos: 5 },
      'geometric-patterns': { name: 'Geometric Patterns', section: 'creative', demos: 6 },
      'mathematical-art': { name: 'Mathematical Art', section: 'creative', demos: 10 },
      'optical-illusions': { name: 'Optical Illusions', section: 'creative', demos: 12 },
      'lissajous': { name: 'Lissajous Curves', section: 'creative', demos: 1 },
      'chaos-attractors': { name: 'Chaos Attractors', section: 'creative', demos: 8 },

      // Physics & Scientific
      'physics-simulations': { name: 'Physics Simulations', section: 'physics', demos: 80 },
      'gravity-orbits': { name: 'Gravity Orbits', section: 'physics', demos: 50 },
      'emergent-behaviors': { name: 'Emergent Behaviors', section: 'physics', demos: 50 },
      'simulations': { name: 'Simulations', section: 'physics', demos: 50 },
      'scientific-visualizations': { name: 'Scientific Visualizations', section: 'physics', demos: 15 },
      'biological-simulations': { name: 'Biological Simulations', section: 'physics', demos: 41 },
      'solar-flare-visualizations': { name: 'Solar Flare Visualizations', section: 'physics', demos: 40 },
      'particle-systems': { name: 'Particle Systems', section: 'physics', demos: 20 },
      'particle-effects': { name: 'Particle Effects', section: 'physics', demos: 8 },
      'boids-flocking-visualizations': { name: 'Boids Flocking', section: 'physics', demos: 20 },
      'follower-visualizations': { name: 'Follower Visualizations', section: 'physics', demos: 30 },
      'autumn-leaf-visualizations': { name: 'Autumn Leaf Visualizations', section: 'physics', demos: 20 },

      // Agent-Based Models
      'game-of-life': { name: 'Game of Life', section: 'abm', demos: 23 },
      'wolfram-ca': { name: 'Wolfram Cellular Automata', section: 'abm', demos: 256 },
      'petri-arena': { name: 'Petri Arena', section: 'abm', demos: 74 },
      'altruism-evolution': { name: 'Altruism Evolution', section: 'abm', demos: 16 },
      'ethnocentrism': { name: 'Ethnocentrism', section: 'abm', demos: 20 },
      'schelling-segregation': { name: 'Schelling Segregation', section: 'abm', demos: 20 },
      'sugarscape': { name: 'Sugarscape', section: 'abm', demos: 20 },
      'sugarscape-inequality': { name: 'Sugarscape Inequality', section: 'abm', demos: 20 },
      'wealth-distribution': { name: 'Wealth Distribution', section: 'abm', demos: 20 },
      'virus-epidemic-models': { name: 'Virus Epidemic Models', section: 'abm', demos: 20 },
      'fire-percolation': { name: 'Fire Percolation', section: 'abm', demos: 20 },
      'wolf-sheep-predation': { name: 'Wolf-Sheep Predation', section: 'abm', demos: 20 },
      'abm-economics': { name: 'ABM Economics', section: 'abm', demos: 3 },
      'ancient-economy-abm': { name: 'Ancient Economy ABM', section: 'abm', demos: 1 },
      'renaissance-econsim': { name: 'Renaissance EconSim', section: 'abm', demos: 5 },

      // Data Visualization
      'd3js': { name: 'D3.js', section: 'data', demos: 18 },
      'infographics': { name: 'Dynamic Infographics', section: 'data', demos: 6 },
      'data-structures': { name: 'Data Structures', section: 'data', demos: 5 },

      // 3D Graphics & WebGL
      'threejs': { name: 'Three.js', section: 'graphics', demos: 36 },
      'webgl-shaders': { name: 'WebGL Shaders', section: 'graphics', demos: 29 },
      'webgpu': { name: 'WebGPU', section: 'graphics', demos: 12 },
      'complex-showcases': { name: 'Complex Showcases', section: 'graphics', demos: 40 },
      'visualizations': { name: 'Interactive Visualizations', section: 'graphics', demos: 9 },

      // Advanced Technologies
      'web-audio-api': { name: 'Web Audio API', section: 'advanced', demos: 40 },
      'webassembly': { name: 'WebAssembly', section: 'advanced', demos: 18 },
      'visualization-algorithms': { name: 'Visualization Algorithms', section: 'advanced', demos: 40 },
      'games': { name: 'Interactive Games', section: 'advanced', demos: 1 },

      // Educational Essays
      'essays': { name: 'Visual Essays', section: 'educational', demos: 1 }
    };
  }

  generateBreadcrumb() {
    const breadcrumbEl = document.querySelector('.nav-breadcrumb');
    if (!breadcrumbEl) return;

    const parts = this.currentPath.split('/').filter(p => p);
    let html = '<a href="/">Home</a>';

    if (parts.length > 0) {
      const galleryKey = parts[parts.length - 2] || parts[parts.length - 1];
      const gallery = this.galleries[galleryKey];

      if (gallery) {
        html += '<span class="separator">›</span>';
        html += `<a href="/${galleryKey}/">${gallery.name}</a>`;
      }

      // If we're on a specific demo
      const lastPart = parts[parts.length - 1];
      if (lastPart && lastPart.endsWith('.html') && lastPart !== 'index.html') {
        html += '<span class="separator">›</span>';
        const demoName = this.formatDemoName(lastPart);
        html += `<span class="current">${demoName}</span>`;
      }
    }

    breadcrumbEl.innerHTML = html;
  }

  formatDemoName(filename) {
    return filename
      .replace('.html', '')
      .replace(/^\d+-/, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }

  initSearchToggle() {
    const searchBtn = document.querySelector('.nav-search');
    if (!searchBtn) return;

    searchBtn.addEventListener('click', () => {
      this.toggleSearch();
    });

    // Close search on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.searchVisible) {
        this.toggleSearch();
      }
    });
  }

  toggleSearch() {
    const searchContainer = document.getElementById('searchContainer');
    if (!searchContainer) {
      this.createSearchContainer();
      return;
    }

    this.searchVisible = !this.searchVisible;
    searchContainer.hidden = !this.searchVisible;

    if (this.searchVisible) {
      const searchInput = searchContainer.querySelector('input');
      searchInput?.focus();
    }
  }

  createSearchContainer() {
    const container = document.createElement('div');
    container.className = 'search-container';
    container.id = 'searchContainer';

    container.innerHTML = `
      <input type="search"
             id="demoSearch"
             placeholder="Search 1,072+ demos..."
             autocomplete="off">
      <div class="search-filters">
        <button class="filter-chip active" data-filter="all">All</button>
        <button class="filter-chip" data-filter="creative">Creative</button>
        <button class="filter-chip" data-filter="physics">Physics</button>
        <button class="filter-chip" data-filter="abm">Agent-Based</button>
        <button class="filter-chip" data-filter="data">Data Viz</button>
        <button class="filter-chip" data-filter="graphics">3D/WebGL</button>
        <button class="filter-chip" data-filter="advanced">Advanced</button>
        <button class="filter-chip" data-filter="educational">Essays</button>
      </div>
      <div class="search-results" id="searchResults"></div>
    `;

    document.body.appendChild(container);

    // Initialize search functionality
    this.initSearchFunctionality(container);
    this.searchVisible = true;
  }

  initSearchFunctionality(container) {
    const searchInput = container.querySelector('#demoSearch');
    const filterChips = container.querySelectorAll('.filter-chip');
    const resultsContainer = container.querySelector('#searchResults');

    let currentFilter = 'all';

    // Filter chip clicks
    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentFilter = chip.dataset.filter;
        this.performSearch(searchInput.value, currentFilter, resultsContainer);
      });
    });

    // Search input with debouncing
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        this.performSearch(e.target.value, currentFilter, resultsContainer);
      }, 200);
    });
  }

  performSearch(query, filter, resultsContainer) {
    if (!query.trim() && filter === 'all') {
      resultsContainer.innerHTML = '<div class="search-empty">Type to search demos...</div>';
      return;
    }

    const results = this.demoIndex.filter(demo => {
      const matchesQuery = !query.trim() ||
        demo.title.toLowerCase().includes(query.toLowerCase()) ||
        demo.gallery.toLowerCase().includes(query.toLowerCase()) ||
        demo.tags.some(tag => tag.includes(query.toLowerCase()));

      const matchesFilter = filter === 'all' || demo.section === filter;

      return matchesQuery && matchesFilter;
    });

    if (results.length === 0) {
      resultsContainer.innerHTML = '<div class="search-empty">No demos found</div>';
      return;
    }

    resultsContainer.innerHTML = results.slice(0, 50).map(demo => `
      <a href="${demo.path}" class="search-result">
        <div class="result-title">${demo.title}</div>
        <div class="result-gallery">${demo.gallery}</div>
        <div class="result-tags">${demo.tags.join(', ')}</div>
      </a>
    `).join('');
  }

  loadDemoIndex() {
    // In production, this would load from demo-index.json
    // For now, we'll populate with sample data
    Object.entries(this.galleries).forEach(([key, gallery]) => {
      for (let i = 1; i <= Math.min(5, gallery.demos); i++) {
        this.demoIndex.push({
          title: `Demo ${i}`,
          path: `/${key}/demo-${i}.html`,
          gallery: gallery.name,
          section: gallery.section,
          tags: [gallery.section, key.split('-')[0]]
        });
      }
    });
  }

  initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Cmd/Ctrl + K for search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        this.toggleSearch();
      }

      // Arrow keys for demo navigation
      if (e.key === 'ArrowLeft') {
        const prevLink = document.querySelector('.demo-nav-prev');
        if (prevLink) prevLink.click();
      }
      if (e.key === 'ArrowRight') {
        const nextLink = document.querySelector('.demo-nav-next');
        if (nextLink) nextLink.click();
      }
    });
  }

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  initMobileMenu() {
    const menuBtn = document.querySelector('.nav-menu');
    if (!menuBtn) return;

    menuBtn.addEventListener('click', () => {
      const quickJump = document.querySelector('.quick-jump');
      if (quickJump) {
        quickJump.classList.toggle('mobile-visible');
      }
    });
  }

  initializeAnimations() {
    // Add staggered animations to gallery items
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.demo-card, .category-card, .gallery-item').forEach((el, index) => {
      el.style.animationDelay = `${index * 50}ms`;
      observer.observe(el);
    });
  }

  // Helper method to inject navigation into existing pages
  static injectNavigation() {
    const nav = document.createElement('nav');
    nav.className = 'ccab-nav';
    nav.innerHTML = `
      <div class="nav-container">
        <a href="/" class="nav-home">
          <span class="nav-logo">CCAB</span>
          <span class="nav-tagline">Creative Code & Algorithmic Beauty</span>
        </a>
        <div class="nav-breadcrumb"></div>
        <div class="nav-actions">
          <button class="nav-search" aria-label="Search">🔍</button>
          <button class="nav-menu" aria-label="Menu">☰</button>
        </div>
      </div>
    `;

    document.body.insertBefore(nav, document.body.firstChild);
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new CCABNavigation();
  });
} else {
  new CCABNavigation();
}

// Export for use in other scripts
window.CCABNavigation = CCABNavigation;