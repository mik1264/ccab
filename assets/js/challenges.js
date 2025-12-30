/**
 * CCAB Challenge System
 * Gamification framework for interactive demos
 * Version: 1.0.0
 *
 * Features:
 * - Challenge mode for demos
 * - Tasks with hints and solutions
 * - Progress tracking
 * - Comprehension checks
 */

class ChallengeManager {
    constructor(options = {}) {
        this.options = {
            container: options.container || document.body,
            storageKey: options.storageKey || 'ccab-challenges',
            onComplete: options.onComplete || null,
            onProgress: options.onProgress || null
        };

        this.challenges = [];
        this.currentChallenge = null;
        this.progress = this.loadProgress();
        this.ui = null;

        this.init();
    }

    init() {
        this.createUI();
        this.bindEvents();
    }

    createUI() {
        this.ui = document.createElement('div');
        this.ui.className = 'challenge-panel';
        this.ui.innerHTML = `
            <div class="challenge-header">
                <span class="challenge-icon">🎯</span>
                <span class="challenge-title">Challenge Mode</span>
                <button class="challenge-toggle" aria-label="Toggle challenges">▼</button>
            </div>
            <div class="challenge-content">
                <div class="challenge-list"></div>
                <div class="challenge-active" style="display: none;">
                    <h4 class="active-title"></h4>
                    <p class="active-description"></p>
                    <div class="active-progress">
                        <div class="progress-bar"><div class="progress-fill"></div></div>
                        <span class="progress-text">0%</span>
                    </div>
                    <div class="active-hints"></div>
                    <div class="active-actions">
                        <button class="btn-hint">💡 Hint</button>
                        <button class="btn-solution">🔑 Solution</button>
                        <button class="btn-check">✓ Check</button>
                    </div>
                </div>
                <div class="challenge-complete" style="display: none;">
                    <div class="complete-icon">🎉</div>
                    <h4>Challenge Complete!</h4>
                    <p class="complete-message"></p>
                    <button class="btn-next">Next Challenge →</button>
                </div>
            </div>
        `;

        this.injectStyles();
        this.options.container.appendChild(this.ui);
    }

    injectStyles() {
        if (document.getElementById('ccab-challenge-styles')) return;

        const styles = document.createElement('style');
        styles.id = 'ccab-challenge-styles';
        styles.textContent = `
            .challenge-panel {
                position: fixed;
                top: 80px;
                right: 20px;
                width: 320px;
                background: rgba(30, 30, 30, 0.95);
                border: 1px solid #404040;
                border-radius: 12px;
                color: #e0e0e0;
                font-family: 'Nunito', sans-serif;
                font-size: 14px;
                z-index: 1000;
                overflow: hidden;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            }

            .challenge-header {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 12px;
                background: linear-gradient(135deg, var(--moss, #606C38) 0%, var(--sage, #8A9A5B) 100%);
                cursor: pointer;
            }

            .challenge-icon { font-size: 18px; }
            .challenge-title { flex: 1; font-weight: 600; color: white; }
            .challenge-toggle {
                background: none;
                border: none;
                color: white;
                font-size: 14px;
                cursor: pointer;
            }

            .challenge-content {
                max-height: 400px;
                overflow-y: auto;
                padding: 12px;
            }

            .challenge-panel.collapsed .challenge-content {
                display: none;
            }

            /* Challenge List */
            .challenge-item {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px;
                margin-bottom: 8px;
                background: #2d2d2d;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .challenge-item:hover {
                background: #3d3d3d;
            }

            .challenge-item.completed {
                opacity: 0.6;
            }

            .challenge-item .status {
                width: 24px;
                height: 24px;
                border: 2px solid #555;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
            }

            .challenge-item.completed .status {
                background: var(--sage, #8A9A5B);
                border-color: var(--sage, #8A9A5B);
            }

            .challenge-item .info {
                flex: 1;
            }

            .challenge-item .name {
                font-weight: 600;
                margin-bottom: 2px;
            }

            .challenge-item .difficulty {
                font-size: 11px;
                color: #888;
            }

            /* Active Challenge */
            .challenge-active {
                padding: 10px;
                background: #252525;
                border-radius: 8px;
            }

            .active-title {
                margin: 0 0 8px 0;
                color: var(--earth, #DDA15E);
            }

            .active-description {
                margin: 0 0 12px 0;
                line-height: 1.5;
            }

            .active-progress {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;
            }

            .progress-bar {
                flex: 1;
                height: 8px;
                background: #404040;
                border-radius: 4px;
                overflow: hidden;
            }

            .progress-fill {
                height: 100%;
                background: linear-gradient(90deg, var(--sage, #8A9A5B), var(--earth, #DDA15E));
                width: 0%;
                transition: width 0.3s ease;
            }

            .progress-text {
                font-size: 12px;
                color: #888;
                min-width: 35px;
            }

            .active-hints {
                margin-bottom: 12px;
            }

            .hint-item {
                padding: 8px 10px;
                margin-bottom: 6px;
                background: #333;
                border-radius: 6px;
                border-left: 3px solid var(--earth, #DDA15E);
            }

            .active-actions {
                display: flex;
                gap: 8px;
            }

            .active-actions button {
                flex: 1;
                padding: 8px;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-size: 12px;
                transition: all 0.2s ease;
            }

            .btn-hint {
                background: #4a4a4a;
                color: #e0e0e0;
            }

            .btn-solution {
                background: #4a4a4a;
                color: #e0e0e0;
            }

            .btn-check {
                background: var(--sage, #8A9A5B);
                color: white;
            }

            .active-actions button:hover {
                filter: brightness(1.2);
            }

            /* Complete Screen */
            .challenge-complete {
                text-align: center;
                padding: 20px;
            }

            .complete-icon {
                font-size: 48px;
                margin-bottom: 10px;
            }

            .complete-message {
                color: #888;
                margin-bottom: 15px;
            }

            .btn-next {
                padding: 10px 20px;
                background: var(--sage, #8A9A5B);
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
            }

            .btn-next:hover {
                background: var(--moss, #606C38);
            }
        `;
        document.head.appendChild(styles);
    }

    bindEvents() {
        // Toggle panel
        const header = this.ui.querySelector('.challenge-header');
        header.addEventListener('click', () => {
            this.ui.classList.toggle('collapsed');
            const toggle = this.ui.querySelector('.challenge-toggle');
            toggle.textContent = this.ui.classList.contains('collapsed') ? '▶' : '▼';
        });

        // Hint button
        this.ui.querySelector('.btn-hint').addEventListener('click', () => {
            this.showNextHint();
        });

        // Solution button
        this.ui.querySelector('.btn-solution').addEventListener('click', () => {
            this.showSolution();
        });

        // Check button
        this.ui.querySelector('.btn-check').addEventListener('click', () => {
            this.checkChallenge();
        });

        // Next button
        this.ui.querySelector('.btn-next').addEventListener('click', () => {
            this.nextChallenge();
        });
    }

    /**
     * Add challenges for this demo
     */
    setChallenges(challenges) {
        this.challenges = challenges.map((c, i) => ({
            id: c.id || `challenge-${i}`,
            name: c.name,
            description: c.description,
            difficulty: c.difficulty || 'medium',
            hints: c.hints || [],
            solution: c.solution || '',
            checkFn: c.checkFn || (() => false),
            completedMessage: c.completedMessage || 'Great job!'
        }));

        this.renderChallengeList();
    }

    renderChallengeList() {
        const list = this.ui.querySelector('.challenge-list');
        list.innerHTML = '';

        this.challenges.forEach(challenge => {
            const isCompleted = this.progress[challenge.id];
            const item = document.createElement('div');
            item.className = `challenge-item ${isCompleted ? 'completed' : ''}`;
            item.innerHTML = `
                <div class="status">${isCompleted ? '✓' : ''}</div>
                <div class="info">
                    <div class="name">${challenge.name}</div>
                    <div class="difficulty">${this.getDifficultyStars(challenge.difficulty)}</div>
                </div>
            `;

            item.addEventListener('click', () => this.startChallenge(challenge));
            list.appendChild(item);
        });
    }

    getDifficultyStars(difficulty) {
        const levels = { easy: 1, medium: 2, hard: 3, expert: 4 };
        const count = levels[difficulty] || 2;
        return '⭐'.repeat(count) + '☆'.repeat(4 - count);
    }

    startChallenge(challenge) {
        this.currentChallenge = challenge;
        this.currentHintIndex = 0;

        // Show active view
        this.ui.querySelector('.challenge-list').style.display = 'none';
        this.ui.querySelector('.challenge-active').style.display = 'block';
        this.ui.querySelector('.challenge-complete').style.display = 'none';

        // Populate
        this.ui.querySelector('.active-title').textContent = challenge.name;
        this.ui.querySelector('.active-description').textContent = challenge.description;
        this.ui.querySelector('.active-hints').innerHTML = '';
        this.updateProgress(0);
    }

    showNextHint() {
        if (!this.currentChallenge) return;

        const hints = this.currentChallenge.hints;
        if (this.currentHintIndex < hints.length) {
            const hintsEl = this.ui.querySelector('.active-hints');
            const hintEl = document.createElement('div');
            hintEl.className = 'hint-item';
            hintEl.textContent = `💡 ${hints[this.currentHintIndex]}`;
            hintsEl.appendChild(hintEl);
            this.currentHintIndex++;
        }
    }

    showSolution() {
        if (!this.currentChallenge || !this.currentChallenge.solution) return;

        const hintsEl = this.ui.querySelector('.active-hints');
        const solEl = document.createElement('div');
        solEl.className = 'hint-item';
        solEl.innerHTML = `<strong>🔑 Solution:</strong> ${this.currentChallenge.solution}`;
        hintsEl.appendChild(solEl);
    }

    checkChallenge() {
        if (!this.currentChallenge) return;

        try {
            const result = this.currentChallenge.checkFn();

            if (typeof result === 'number') {
                // Progress percentage
                this.updateProgress(result);
                if (result >= 100) {
                    this.completeChallenge();
                }
            } else if (result === true) {
                this.updateProgress(100);
                this.completeChallenge();
            } else {
                // Not yet complete
                this.showNotification('Keep trying! Check the hints for help.', 'info');
            }
        } catch (e) {
            console.error('Challenge check error:', e);
        }
    }

    updateProgress(percent) {
        const fill = this.ui.querySelector('.progress-fill');
        const text = this.ui.querySelector('.progress-text');
        fill.style.width = `${percent}%`;
        text.textContent = `${Math.round(percent)}%`;

        if (this.options.onProgress) {
            this.options.onProgress(percent, this.currentChallenge);
        }
    }

    completeChallenge() {
        if (!this.currentChallenge) return;

        // Save progress
        this.progress[this.currentChallenge.id] = true;
        this.saveProgress();

        // Show complete view
        this.ui.querySelector('.challenge-active').style.display = 'none';
        this.ui.querySelector('.challenge-complete').style.display = 'block';
        this.ui.querySelector('.complete-message').textContent =
            this.currentChallenge.completedMessage;

        if (this.options.onComplete) {
            this.options.onComplete(this.currentChallenge);
        }
    }

    nextChallenge() {
        // Find next incomplete challenge
        const currentIndex = this.challenges.indexOf(this.currentChallenge);
        let nextIndex = (currentIndex + 1) % this.challenges.length;

        while (nextIndex !== currentIndex) {
            if (!this.progress[this.challenges[nextIndex].id]) {
                this.startChallenge(this.challenges[nextIndex]);
                return;
            }
            nextIndex = (nextIndex + 1) % this.challenges.length;
        }

        // All complete - show list
        this.ui.querySelector('.challenge-list').style.display = 'block';
        this.ui.querySelector('.challenge-complete').style.display = 'none';
        this.renderChallengeList();
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 12px 24px;
            border-radius: 8px;
            color: white;
            font-size: 14px;
            z-index: 10001;
            background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }

    loadProgress() {
        try {
            return JSON.parse(localStorage.getItem(this.options.storageKey)) || {};
        } catch (e) {
            return {};
        }
    }

    saveProgress() {
        try {
            localStorage.setItem(this.options.storageKey, JSON.stringify(this.progress));
        } catch (e) {}
    }

    resetProgress() {
        this.progress = {};
        this.saveProgress();
        this.renderChallengeList();
    }

    destroy() {
        if (this.ui) {
            this.ui.remove();
        }
    }
}

/**
 * Pre-built challenges for common demos
 */
const ChallengeLibrary = {
    gameOfLife: [
        {
            id: 'gol-glider',
            name: 'Create a Glider',
            description: 'Draw the classic glider pattern that moves across the grid.',
            difficulty: 'easy',
            hints: [
                'A glider uses 5 cells.',
                'Think of an arrow shape pointing diagonally.',
                'Pattern: ▪▪▫ / ▫▪▪ / ▪▪▫ rotated'
            ],
            solution: 'Draw cells at: (1,0), (2,1), (0,2), (1,2), (2,2)',
            checkFn: null // Must be set by demo
        },
        {
            id: 'gol-oscillator',
            name: 'Find an Oscillator',
            description: 'Create a pattern that cycles between states.',
            difficulty: 'easy',
            hints: [
                'The simplest oscillator uses just 3 cells.',
                'Try placing 3 cells in a row.',
                'This pattern is called a "blinker".'
            ],
            solution: 'Draw 3 cells horizontally or vertically in a row.'
        },
        {
            id: 'gol-stable',
            name: 'Build a Stable Structure',
            description: 'Create a pattern that never changes.',
            difficulty: 'medium',
            hints: [
                'Stable patterns are called "still lifes".',
                'A 2x2 block is the simplest still life.',
                'Try the "beehive" shape: 6 cells.'
            ]
        }
    ],

    boids: [
        {
            id: 'boids-gather',
            name: 'Gather the Flock',
            description: 'Make all boids gather in the center of the screen.',
            difficulty: 'medium',
            hints: [
                'Increase the cohesion force.',
                'Reduce separation to allow closer grouping.',
                'Try adding an attractor at the center.'
            ]
        },
        {
            id: 'boids-split',
            name: 'Split the Flock',
            description: 'Create two separate flocks that avoid each other.',
            difficulty: 'hard',
            hints: [
                'Increase separation force significantly.',
                'Try adding obstacles between groups.',
                'Initial positions matter!'
            ]
        }
    ],

    orbits: [
        {
            id: 'orbit-circular',
            name: 'Perfect Circle',
            description: 'Create a perfectly circular orbit.',
            difficulty: 'medium',
            hints: [
                'Orbital velocity v = √(GM/r).',
                'Make sure velocity is perpendicular to radius.',
                'Start at the right distance for your velocity.'
            ]
        },
        {
            id: 'orbit-escape',
            name: 'Escape Velocity',
            description: 'Launch an object that escapes the gravity well.',
            difficulty: 'easy',
            hints: [
                'Escape velocity = √(2GM/r).',
                'That\'s about 1.41× orbital velocity.',
                'Direction doesn\'t matter—just speed!'
            ]
        }
    ]
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ChallengeManager, ChallengeLibrary };
}
