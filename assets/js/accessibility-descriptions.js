/**
 * CCAB Accessibility Descriptions
 * Provides text descriptions for visual content to support screen readers
 * Version: 1.0.0
 *
 * Features:
 * - Live ARIA descriptions for canvas animations
 * - Auto-generated scene descriptions
 * - Keyboard-accessible description panel
 * - Integration with demos
 */

class AccessibilityDescriptions {
    constructor(options = {}) {
        this.options = {
            container: options.container || document.body,
            updateInterval: options.updateInterval || 2000, // ms between updates
            announceChanges: options.announceChanges !== false,
            showPanel: options.showPanel !== false,
            position: options.position || 'bottom-right',
            customDescriber: options.customDescriber || null
        };

        this.descriptionPanel = null;
        this.liveRegion = null;
        this.updateTimer = null;
        this.lastDescription = '';
        this.sceneData = {};

        this.init();
    }

    init() {
        this.createLiveRegion();
        if (this.options.showPanel) {
            this.createDescriptionPanel();
        }
        this.setupKeyboardShortcuts();
    }

    /**
     * Create ARIA live region for screen reader announcements
     */
    createLiveRegion() {
        this.liveRegion = document.createElement('div');
        this.liveRegion.id = 'ccab-live-region';
        this.liveRegion.setAttribute('role', 'status');
        this.liveRegion.setAttribute('aria-live', 'polite');
        this.liveRegion.setAttribute('aria-atomic', 'true');
        this.liveRegion.className = 'sr-only';
        this.liveRegion.style.cssText = `
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        `;
        document.body.appendChild(this.liveRegion);
    }

    /**
     * Create visible description panel
     */
    createDescriptionPanel() {
        const positionStyles = {
            'bottom-right': 'bottom: 20px; right: 20px;',
            'bottom-left': 'bottom: 20px; left: 20px;',
            'top-right': 'top: 80px; right: 20px;',
            'top-left': 'top: 80px; left: 20px;'
        };

        this.descriptionPanel = document.createElement('div');
        this.descriptionPanel.id = 'ccab-description-panel';
        this.descriptionPanel.setAttribute('role', 'complementary');
        this.descriptionPanel.setAttribute('aria-label', 'Visual description panel');
        this.descriptionPanel.innerHTML = `
            <div class="desc-panel-header">
                <span class="desc-icon">👁️</span>
                <span class="desc-title">Scene Description</span>
                <button class="desc-toggle" aria-label="Toggle description panel">−</button>
            </div>
            <div class="desc-panel-content">
                <p class="desc-text">Loading description...</p>
                <div class="desc-stats"></div>
            </div>
        `;

        this.descriptionPanel.style.cssText = `
            position: fixed;
            ${positionStyles[this.options.position]}
            width: 280px;
            background: rgba(30, 30, 30, 0.95);
            border: 1px solid #404040;
            border-radius: 12px;
            color: #e0e0e0;
            font-family: 'Nunito', sans-serif;
            font-size: 13px;
            z-index: 1000;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        `;

        this.injectPanelStyles();
        document.body.appendChild(this.descriptionPanel);
        this.bindPanelEvents();
    }

    injectPanelStyles() {
        if (document.getElementById('ccab-desc-panel-styles')) return;

        const styles = document.createElement('style');
        styles.id = 'ccab-desc-panel-styles';
        styles.textContent = `
            #ccab-description-panel .desc-panel-header {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 12px;
                background: linear-gradient(135deg, #2d2d2d 0%, #1e1e1e 100%);
                border-bottom: 1px solid #404040;
            }

            #ccab-description-panel .desc-icon {
                font-size: 16px;
            }

            #ccab-description-panel .desc-title {
                flex: 1;
                font-weight: 600;
                color: var(--sage, #8A9A5B);
            }

            #ccab-description-panel .desc-toggle {
                background: none;
                border: none;
                color: #888;
                font-size: 18px;
                cursor: pointer;
                padding: 0 4px;
                line-height: 1;
            }

            #ccab-description-panel .desc-toggle:hover {
                color: #fff;
            }

            #ccab-description-panel .desc-panel-content {
                padding: 12px;
                max-height: 200px;
                overflow-y: auto;
            }

            #ccab-description-panel.collapsed .desc-panel-content {
                display: none;
            }

            #ccab-description-panel .desc-text {
                margin: 0 0 10px 0;
                line-height: 1.5;
            }

            #ccab-description-panel .desc-stats {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                font-size: 11px;
            }

            #ccab-description-panel .stat-item {
                background: #3c3c3c;
                padding: 4px 8px;
                border-radius: 4px;
            }

            #ccab-description-panel .stat-label {
                color: #888;
            }

            #ccab-description-panel .stat-value {
                color: var(--sage, #8A9A5B);
                font-weight: 600;
                margin-left: 4px;
            }

            /* High contrast mode */
            @media (prefers-contrast: high) {
                #ccab-description-panel {
                    background: #000;
                    border-color: #fff;
                }
            }
        `;
        document.head.appendChild(styles);
    }

    bindPanelEvents() {
        const toggle = this.descriptionPanel.querySelector('.desc-toggle');
        toggle.addEventListener('click', () => {
            const isCollapsed = this.descriptionPanel.classList.toggle('collapsed');
            toggle.textContent = isCollapsed ? '+' : '−';
            toggle.setAttribute('aria-expanded', !isCollapsed);
        });
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Alt + D to read description
            if (e.altKey && e.key === 'd') {
                e.preventDefault();
                this.announceCurrentDescription();
            }

            // Alt + H to toggle panel
            if (e.altKey && e.key === 'h' && this.descriptionPanel) {
                e.preventDefault();
                this.descriptionPanel.classList.toggle('collapsed');
            }
        });
    }

    /**
     * Update scene data used to generate descriptions
     */
    updateSceneData(data) {
        this.sceneData = { ...this.sceneData, ...data };
        this.updateDescription();
    }

    /**
     * Set custom describer function
     */
    setDescriber(fn) {
        this.options.customDescriber = fn;
    }

    /**
     * Generate description from scene data
     */
    generateDescription() {
        if (this.options.customDescriber) {
            return this.options.customDescriber(this.sceneData);
        }

        // Default description generation
        const parts = [];

        // Demo type
        if (this.sceneData.type) {
            parts.push(`This is a ${this.sceneData.type} visualization.`);
        }

        // Objects/entities
        if (this.sceneData.objectCount !== undefined) {
            const noun = this.sceneData.objectName || 'objects';
            parts.push(`${this.sceneData.objectCount} ${noun} are visible.`);
        }

        // Motion
        if (this.sceneData.isAnimated) {
            if (this.sceneData.motionType) {
                parts.push(`Objects are ${this.sceneData.motionType}.`);
            } else {
                parts.push('The scene is animated.');
            }
        }

        // Colors
        if (this.sceneData.dominantColor) {
            parts.push(`Dominant color is ${this.sceneData.dominantColor}.`);
        }

        // Patterns
        if (this.sceneData.pattern) {
            parts.push(`The pattern is ${this.sceneData.pattern}.`);
        }

        // Activity level
        if (this.sceneData.activityLevel) {
            parts.push(`Activity level: ${this.sceneData.activityLevel}.`);
        }

        // Custom additions
        if (this.sceneData.customText) {
            parts.push(this.sceneData.customText);
        }

        return parts.join(' ') || 'Visual demonstration in progress.';
    }

    /**
     * Update the description display
     */
    updateDescription() {
        const description = this.generateDescription();

        // Update panel
        if (this.descriptionPanel) {
            const textEl = this.descriptionPanel.querySelector('.desc-text');
            if (textEl) {
                textEl.textContent = description;
            }

            // Update stats
            const statsEl = this.descriptionPanel.querySelector('.desc-stats');
            if (statsEl) {
                statsEl.innerHTML = this.generateStats();
            }
        }

        // Announce if changed significantly
        if (this.options.announceChanges && description !== this.lastDescription) {
            this.announce(description);
            this.lastDescription = description;
        }
    }

    generateStats() {
        const stats = [];

        if (this.sceneData.fps !== undefined) {
            stats.push(`<span class="stat-item"><span class="stat-label">FPS:</span><span class="stat-value">${this.sceneData.fps}</span></span>`);
        }

        if (this.sceneData.objectCount !== undefined) {
            stats.push(`<span class="stat-item"><span class="stat-label">Objects:</span><span class="stat-value">${this.sceneData.objectCount}</span></span>`);
        }

        if (this.sceneData.generation !== undefined) {
            stats.push(`<span class="stat-item"><span class="stat-label">Gen:</span><span class="stat-value">${this.sceneData.generation}</span></span>`);
        }

        if (this.sceneData.time !== undefined) {
            stats.push(`<span class="stat-item"><span class="stat-label">Time:</span><span class="stat-value">${this.sceneData.time}s</span></span>`);
        }

        return stats.join('');
    }

    /**
     * Announce text via ARIA live region
     */
    announce(text) {
        if (this.liveRegion) {
            // Clear and re-add to trigger announcement
            this.liveRegion.textContent = '';
            setTimeout(() => {
                this.liveRegion.textContent = text;
            }, 50);
        }
    }

    /**
     * Announce current description immediately
     */
    announceCurrentDescription() {
        const description = this.generateDescription();
        this.announce(description);
    }

    /**
     * Start periodic updates
     */
    startUpdates() {
        if (this.updateTimer) return;
        this.updateTimer = setInterval(() => {
            this.updateDescription();
        }, this.options.updateInterval);
    }

    /**
     * Stop periodic updates
     */
    stopUpdates() {
        if (this.updateTimer) {
            clearInterval(this.updateTimer);
            this.updateTimer = null;
        }
    }

    /**
     * Clean up
     */
    destroy() {
        this.stopUpdates();
        if (this.liveRegion) this.liveRegion.remove();
        if (this.descriptionPanel) this.descriptionPanel.remove();
    }
}

/**
 * Preset describers for common demo types
 */
const DemoDescribers = {
    /**
     * Cellular automata (Game of Life, etc.)
     */
    cellularAutomata: (data) => {
        const { aliveCells, totalCells, generation, pattern, isStable } = data;
        const density = totalCells ? ((aliveCells / totalCells) * 100).toFixed(1) : 0;

        let desc = `Cellular automaton at generation ${generation || 0}. `;
        desc += `${aliveCells || 0} cells alive (${density}% density). `;

        if (pattern) desc += `Current pattern: ${pattern}. `;
        if (isStable) desc += 'Pattern has stabilized. ';

        return desc;
    },

    /**
     * Particle systems
     */
    particles: (data) => {
        const { particleCount, avgVelocity, distribution, colorScheme } = data;

        let desc = `Particle system with ${particleCount || 0} particles. `;

        if (avgVelocity !== undefined) {
            desc += avgVelocity > 5 ? 'Particles moving rapidly. ' :
                    avgVelocity > 2 ? 'Particles moving moderately. ' :
                    'Particles moving slowly. ';
        }

        if (distribution) desc += `Distribution is ${distribution}. `;
        if (colorScheme) desc += `Color scheme: ${colorScheme}. `;

        return desc;
    },

    /**
     * Boids/flocking
     */
    boids: (data) => {
        const { boidCount, flockCount, avgSpeed, cohesion } = data;

        let desc = `Flocking simulation with ${boidCount || 0} boids. `;

        if (flockCount) desc += `${flockCount} distinct flocks visible. `;
        if (avgSpeed !== undefined) desc += `Average speed: ${avgSpeed.toFixed(1)}. `;
        if (cohesion) desc += `Cohesion level: ${cohesion}. `;

        return desc;
    },

    /**
     * Physics simulations
     */
    physics: (data) => {
        const { objectCount, energy, collisions, stability } = data;

        let desc = `Physics simulation with ${objectCount || 0} objects. `;

        if (energy !== undefined) desc += `System energy: ${energy.toFixed(1)}. `;
        if (collisions !== undefined) desc += `${collisions} collisions. `;
        if (stability) desc += `System is ${stability}. `;

        return desc;
    },

    /**
     * Fractal/mathematical art
     */
    fractal: (data) => {
        const { type, zoomLevel, iterations, region } = data;

        let desc = `${type || 'Fractal'} visualization. `;

        if (zoomLevel !== undefined) desc += `Zoom level: ${zoomLevel.toExponential(2)}. `;
        if (iterations !== undefined) desc += `${iterations} iterations. `;
        if (region) desc += `Viewing ${region}. `;

        return desc;
    },

    /**
     * Evolution/genetic
     */
    evolution: (data) => {
        const { generation, population, avgFitness, bestFitness, species } = data;

        let desc = `Evolution simulation at generation ${generation || 0}. `;
        desc += `Population: ${population || 0}. `;

        if (avgFitness !== undefined) desc += `Average fitness: ${avgFitness.toFixed(2)}. `;
        if (bestFitness !== undefined) desc += `Best fitness: ${bestFitness.toFixed(2)}. `;
        if (species) desc += `${species} species. `;

        return desc;
    },

    /**
     * Audio visualization
     */
    audio: (data) => {
        const { frequency, amplitude, waveform, tempo } = data;

        let desc = 'Audio visualization. ';

        if (frequency) desc += `Dominant frequency: ${frequency}Hz. `;
        if (amplitude !== undefined) desc += amplitude > 0.7 ? 'Loud audio. ' : amplitude > 0.3 ? 'Moderate volume. ' : 'Quiet audio. ';
        if (waveform) desc += `Waveform: ${waveform}. `;
        if (tempo) desc += `Tempo: ${tempo} BPM. `;

        return desc;
    },

    /**
     * 3D scene
     */
    threeD: (data) => {
        const { objectCount, cameraPosition, lightCount, meshCount } = data;

        let desc = `3D scene with ${objectCount || meshCount || 0} objects. `;

        if (lightCount) desc += `${lightCount} light sources. `;
        if (cameraPosition) {
            const dist = Math.sqrt(
                cameraPosition.x ** 2 +
                cameraPosition.y ** 2 +
                cameraPosition.z ** 2
            );
            desc += dist > 50 ? 'Camera far from center. ' : 'Camera close to center. ';
        }

        return desc;
    }
};

/**
 * Helper to add accessibility to a canvas demo
 */
function makeCanvasAccessible(canvas, options = {}) {
    if (!canvas) return null;

    // Add required ARIA attributes
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('tabindex', '0');

    // Create fallback content
    const fallback = document.createElement('span');
    fallback.className = 'sr-only';
    fallback.textContent = options.fallbackText || 'Interactive visualization. Press Alt+D for description.';

    // Insert after canvas
    canvas.parentNode.insertBefore(fallback, canvas.nextSibling);

    // Create accessibility helper
    const a11y = new AccessibilityDescriptions({
        container: canvas.parentElement,
        customDescriber: options.describer,
        position: options.panelPosition || 'bottom-right',
        showPanel: options.showPanel !== false
    });

    // Focus handling
    canvas.addEventListener('focus', () => {
        a11y.announceCurrentDescription();
    });

    return a11y;
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AccessibilityDescriptions,
        DemoDescribers,
        makeCanvasAccessible
    };
}
