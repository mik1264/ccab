/**
 * CCAB Educational Panel JavaScript
 * Handles collapsible panels, tab switching, and content loading
 * Version: 1.0.0
 */

class EduPanel {
    constructor(element, options = {}) {
        this.element = typeof element === 'string' ? document.querySelector(element) : element;
        if (!this.element) return;

        this.options = {
            startOpen: options.startOpen || false,
            rememberState: options.rememberState !== false,
            storageKey: options.storageKey || 'ccab-edu-panel-state',
            activeTab: options.activeTab || 'theory',
            onToggle: options.onToggle || null,
            onTabChange: options.onTabChange || null
        };

        this.header = this.element.querySelector('.edu-header');
        this.content = this.element.querySelector('.edu-content');
        this.tabs = this.element.querySelectorAll('.edu-tab');
        this.tabContents = this.element.querySelectorAll('.edu-tab-content');

        this.init();
    }

    init() {
        // Set up header toggle
        if (this.header) {
            this.header.addEventListener('click', () => this.toggle());
            this.header.setAttribute('role', 'button');
            this.header.setAttribute('aria-expanded', 'false');
            this.header.setAttribute('tabindex', '0');

            // Keyboard support
            this.header.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggle();
                }
            });
        }

        // Set up tabs
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.dataset.tab;
                this.switchTab(tabId);
            });

            // Keyboard support for tabs
            tab.setAttribute('role', 'tab');
            tab.setAttribute('tabindex', '0');
            tab.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const tabId = tab.dataset.tab;
                    this.switchTab(tabId);
                }
            });
        });

        // Restore state from localStorage if enabled
        if (this.options.rememberState) {
            this.restoreState();
        } else if (this.options.startOpen) {
            this.open();
        }

        // Set initial active tab
        this.switchTab(this.options.activeTab);
    }

    toggle() {
        if (this.element.classList.contains('open')) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        this.element.classList.add('open');
        if (this.header) {
            this.header.setAttribute('aria-expanded', 'true');
        }
        this.saveState();
        if (this.options.onToggle) {
            this.options.onToggle(true);
        }
    }

    close() {
        this.element.classList.remove('open');
        if (this.header) {
            this.header.setAttribute('aria-expanded', 'false');
        }
        this.saveState();
        if (this.options.onToggle) {
            this.options.onToggle(false);
        }
    }

    switchTab(tabId) {
        // Update tab buttons
        this.tabs.forEach(tab => {
            const isActive = tab.dataset.tab === tabId;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive);
        });

        // Update tab content
        this.tabContents.forEach(content => {
            const isActive = content.id === tabId || content.dataset.tab === tabId;
            content.classList.toggle('active', isActive);
        });

        this.options.activeTab = tabId;
        this.saveState();

        if (this.options.onTabChange) {
            this.options.onTabChange(tabId);
        }
    }

    saveState() {
        if (!this.options.rememberState) return;

        const state = {
            isOpen: this.element.classList.contains('open'),
            activeTab: this.options.activeTab
        };

        try {
            localStorage.setItem(this.options.storageKey, JSON.stringify(state));
        } catch (e) {
            // localStorage not available
        }
    }

    restoreState() {
        try {
            const saved = localStorage.getItem(this.options.storageKey);
            if (saved) {
                const state = JSON.parse(saved);
                if (state.isOpen) {
                    this.open();
                }
                if (state.activeTab) {
                    this.options.activeTab = state.activeTab;
                }
            } else if (this.options.startOpen) {
                this.open();
            }
        } catch (e) {
            // localStorage not available
            if (this.options.startOpen) {
                this.open();
            }
        }
    }

    destroy() {
        // Remove event listeners would go here
        // For simplicity, we're not tracking them individually
    }
}

/**
 * Educational Content Template Generator
 * Creates educational panel HTML from structured data
 */
class EduContentBuilder {
    constructor(data) {
        this.data = data;
    }

    build() {
        const panel = document.createElement('div');
        panel.className = 'edu-panel';
        panel.innerHTML = this.generateHTML();
        return panel;
    }

    generateHTML() {
        const { title, icon, theory, algorithm, applications, explore, references } = this.data;

        return `
            <div class="edu-header">
                <span class="edu-icon">${icon || '📚'}</span>
                <span class="edu-title">${title || 'Learn More'}</span>
                <span class="edu-toggle">▼</span>
            </div>
            <div class="edu-content">
                <div class="edu-tabs">
                    ${theory ? '<button class="edu-tab active" data-tab="theory">Theory</button>' : ''}
                    ${algorithm ? '<button class="edu-tab" data-tab="algorithm">Algorithm</button>' : ''}
                    ${applications ? '<button class="edu-tab" data-tab="applications">Applications</button>' : ''}
                    ${explore ? '<button class="edu-tab" data-tab="explore">Explore</button>' : ''}
                    ${references ? '<button class="edu-tab" data-tab="references">References</button>' : ''}
                </div>

                ${theory ? this.buildTheoryTab(theory) : ''}
                ${algorithm ? this.buildAlgorithmTab(algorithm) : ''}
                ${applications ? this.buildApplicationsTab(applications) : ''}
                ${explore ? this.buildExploreTab(explore) : ''}
                ${references ? this.buildReferencesTab(references) : ''}
            </div>
        `;
    }

    buildTheoryTab(theory) {
        return `
            <div class="edu-tab-content active" id="theory" data-tab="theory">
                <h4>Mathematical Foundation</h4>
                ${theory.intro ? `<p class="edu-intro">${theory.intro}</p>` : ''}
                ${theory.equation ? `<div class="edu-equation">${theory.equation}</div>` : ''}
                ${theory.explanation ? `<p class="edu-explanation">${theory.explanation}</p>` : ''}
                ${theory.concepts ? this.buildConcepts(theory.concepts) : ''}
            </div>
        `;
    }

    buildConcepts(concepts) {
        const items = concepts.map(c =>
            `<li><strong>${c.term}:</strong> ${c.definition}</li>`
        ).join('');
        return `
            <div class="edu-key-concepts">
                <h5>Key Concepts</h5>
                <ul>${items}</ul>
            </div>
        `;
    }

    buildAlgorithmTab(algorithm) {
        const steps = algorithm.steps ? algorithm.steps.map((step, i) => `
            <div class="edu-step">
                <span class="step-num">${i + 1}</span>
                <span class="step-text">${step}</span>
            </div>
        `).join('') : '';

        return `
            <div class="edu-tab-content" id="algorithm" data-tab="algorithm">
                <h4>How It Works</h4>
                ${algorithm.overview ? `<p>${algorithm.overview}</p>` : ''}
                ${steps ? `<div class="edu-steps">${steps}</div>` : ''}
                ${algorithm.pseudocode ? `
                    <div class="edu-pseudocode">
                        <pre>${algorithm.pseudocode}</pre>
                    </div>
                ` : ''}
            </div>
        `;
    }

    buildApplicationsTab(applications) {
        const items = applications.map(app => `
            <div class="edu-application">
                <h5>${app.icon || '🔬'} ${app.field}</h5>
                <p>${app.description}</p>
            </div>
        `).join('');

        return `
            <div class="edu-tab-content" id="applications" data-tab="applications">
                <h4>Real-World Applications</h4>
                ${items}
            </div>
        `;
    }

    buildExploreTab(explore) {
        const items = explore.map(item => `
            <div class="edu-tutorial-step">
                <span class="edu-try-this">💡 Try This</span>
                <p>${item}</p>
            </div>
        `).join('');

        return `
            <div class="edu-tab-content" id="explore" data-tab="explore">
                <h4>Interactive Tutorial</h4>
                ${items}
            </div>
        `;
    }

    buildReferencesTab(references) {
        const items = references.map(ref => {
            const badge = ref.type ? `<span class="edu-ref-badge edu-ref-badge--${ref.type}">${ref.type}</span>` : '';
            return `<li><a href="${ref.url}" target="_blank" rel="noopener">${ref.title}${badge}</a></li>`;
        }).join('');

        return `
            <div class="edu-tab-content" id="references" data-tab="references">
                <h4>Further Reading</h4>
                <ul class="edu-refs">${items}</ul>
            </div>
        `;
    }
}

/**
 * Auto-initialize all edu-panels on page load
 */
function initEduPanels(options = {}) {
    document.querySelectorAll('.edu-panel').forEach(panel => {
        new EduPanel(panel, options);
    });
}

/**
 * Create and insert an educational panel from data
 * @param {Object} data - Educational content data
 * @param {string|Element} target - Target element or selector to insert after
 * @param {Object} options - EduPanel options
 * @returns {EduPanel} - The created EduPanel instance
 */
function createEduPanel(data, target, options = {}) {
    const builder = new EduContentBuilder(data);
    const panelElement = builder.build();

    const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
    if (targetElement) {
        targetElement.parentNode.insertBefore(panelElement, targetElement.nextSibling);
    } else {
        document.body.appendChild(panelElement);
    }

    return new EduPanel(panelElement, options);
}

/**
 * Toggle edu-panel visibility (for use with onclick handlers)
 */
function toggleEduPanel(panelId) {
    const panel = document.getElementById(panelId) || document.querySelector('.edu-panel');
    if (panel) {
        panel.classList.toggle('open');
        const header = panel.querySelector('.edu-header');
        if (header) {
            const isOpen = panel.classList.contains('open');
            header.setAttribute('aria-expanded', isOpen);
        }
    }
}

// Auto-init on DOMContentLoaded
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => initEduPanels());
    } else {
        initEduPanels();
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        EduPanel,
        EduContentBuilder,
        initEduPanels,
        createEduPanel,
        toggleEduPanel
    };
}
