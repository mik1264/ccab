/**
 * CCAB Challenge Mode System
 * Gamification layer for interactive demos with challenges, hints, and achievements
 */

(function() {
    'use strict';

    const STORAGE_KEY = 'ccab-challenges';

    /**
     * Challenge database - keyed by demo path
     */
    const CHALLENGES = {
        // Boids Flocking
        'boids-flocking-visualizations/01-classic-boids.html': [
            {
                id: 'boids-gather',
                title: 'Gather the Flock',
                description: 'Make all boids gather within 100 pixels of the center',
                difficulty: 'medium',
                hint: 'Try increasing cohesion weight and decreasing separation. You may need to add an attractor point.',
                solution: 'Set cohesion to maximum (1.0), separation to minimum (0.1), and click center to add attractor.',
                check: () => {
                    const boids = window.boids || [];
                    const cx = window.innerWidth / 2;
                    const cy = window.innerHeight / 2;
                    const allNear = boids.every(b => {
                        const dx = b.x - cx;
                        const dy = b.y - cy;
                        return Math.sqrt(dx*dx + dy*dy) < 100;
                    });
                    return allNear && boids.length > 10;
                },
                xp: 50
            },
            {
                id: 'boids-scatter',
                title: 'Scatter Formation',
                description: 'Make boids spread out evenly across the screen',
                difficulty: 'easy',
                hint: 'Separation is your friend here.',
                solution: 'Set separation to maximum, cohesion to minimum.',
                check: () => {
                    const boids = window.boids || [];
                    if (boids.length < 20) return false;
                    // Check variance is high
                    const avgX = boids.reduce((s, b) => s + b.x, 0) / boids.length;
                    const avgY = boids.reduce((s, b) => s + b.y, 0) / boids.length;
                    const variance = boids.reduce((s, b) => s + Math.pow(b.x - avgX, 2) + Math.pow(b.y - avgY, 2), 0) / boids.length;
                    return variance > 50000;
                },
                xp: 30
            },
            {
                id: 'boids-circle',
                title: 'Circular Motion',
                description: 'Make the flock move in a circular pattern',
                difficulty: 'hard',
                hint: 'Add obstacles or attractors at cardinal points to guide the flock.',
                solution: 'Create a ring of weak attractors or use alignment dominance with initial circular velocity.',
                check: () => false, // Manual verification needed
                xp: 100
            }
        ],

        // Game of Life
        'game-of-life/classic/demos/01-classic.html': [
            {
                id: 'gol-glider',
                title: 'Create a Glider',
                description: 'Draw a glider pattern that moves diagonally',
                difficulty: 'easy',
                hint: 'A glider has 5 cells in an arrow-like shape.',
                solution: 'Draw: row 1: middle cell. Row 2: right cell. Row 3: left, middle, right cells.',
                check: () => {
                    // Check for moving pattern
                    return window.hasGlider && window.hasGlider();
                },
                xp: 20
            },
            {
                id: 'gol-still-life',
                title: 'Stable Colony',
                description: 'Create a pattern that stays still for 10 generations',
                difficulty: 'easy',
                hint: 'Try a 2x2 block or a beehive pattern.',
                solution: 'Draw a 2x2 square - it will never change.',
                check: () => window.isStable && window.isStable(10),
                xp: 25
            },
            {
                id: 'gol-oscillator',
                title: 'Perpetual Motion',
                description: 'Create an oscillator (pattern that repeats)',
                difficulty: 'medium',
                hint: 'Three cells in a row will blink forever.',
                solution: 'Draw 3 horizontal cells - they will alternate between horizontal and vertical.',
                check: () => window.isOscillating && window.isOscillating(),
                xp: 35
            },
            {
                id: 'gol-spaceship',
                title: 'Build a Spaceship',
                description: 'Create a pattern that translates across the grid',
                difficulty: 'hard',
                hint: 'Look up "lightweight spaceship" or "LWSS" pattern.',
                solution: 'LWSS: 5 cells wide, specific pattern - see LifeWiki.',
                check: () => window.hasSpaceship && window.hasSpaceship(),
                xp: 75
            }
        ],

        // Lorenz Attractor
        'lorenz-attractor/index.html': [
            {
                id: 'lorenz-collapse',
                title: 'Tame the Butterfly',
                description: 'Find parameters where the attractor collapses to a point',
                difficulty: 'medium',
                hint: 'The Rayleigh number (rho) controls this transition.',
                solution: 'Set rho below 24.74 (the critical value).',
                check: () => {
                    const rho = window.lorenzParams && window.lorenzParams.rho;
                    return rho && rho < 24.74;
                },
                xp: 40
            },
            {
                id: 'lorenz-diverge',
                title: 'Butterfly Effect',
                description: 'Start two trajectories 0.001 apart and watch them diverge completely',
                difficulty: 'easy',
                hint: 'Most simulators have a "compare" mode or you can reset with tiny offset.',
                solution: 'Enable dual trajectory mode and set offset to 0.001.',
                check: () => window.showingDivergence && window.showingDivergence(),
                xp: 30
            }
        ],

        // Mandelbrot
        'mandelbrot-julia/index.html': [
            {
                id: 'mandel-zoom',
                title: 'Deep Dive',
                description: 'Zoom in 1000x on the boundary',
                difficulty: 'easy',
                hint: 'Click and drag to zoom, focus on the fuzzy edges.',
                solution: 'Keep zooming into any colorful boundary region.',
                check: () => {
                    const zoom = window.mandelZoom || 1;
                    return zoom > 1000;
                },
                xp: 25
            },
            {
                id: 'mandel-mini',
                title: 'Find a Mini-Mandelbrot',
                description: 'Locate a miniature copy of the Mandelbrot set',
                difficulty: 'medium',
                hint: 'Look along the "antennae" extending from the main cardioid.',
                solution: 'Zoom into the thin filaments - mini copies appear at branch points.',
                check: () => window.foundMiniMandel && window.foundMiniMandel(),
                xp: 60
            },
            {
                id: 'mandel-seahorse',
                title: 'Find Seahorse Valley',
                description: 'Navigate to the famous "Seahorse Valley" region',
                difficulty: 'medium',
                hint: 'It\'s between the main cardioid and the large bulb on the left.',
                solution: 'Zoom to approximately (-0.75, 0.1) with high magnification.',
                check: () => {
                    const center = window.mandelCenter;
                    if (!center) return false;
                    return Math.abs(center.x + 0.75) < 0.1 && Math.abs(center.y - 0.1) < 0.1;
                },
                xp: 50
            }
        ],

        // Double Pendulum
        'double-pendulum/index.html': [
            {
                id: 'pendulum-flip',
                title: 'Full Revolution',
                description: 'Make the outer pendulum complete a full 360-degree revolution',
                difficulty: 'medium',
                hint: 'Start with high initial angles for more energy.',
                solution: 'Set both arms nearly vertical (170+ degrees) and release.',
                check: () => window.pendulumRevolutions && window.pendulumRevolutions() >= 1,
                xp: 45
            },
            {
                id: 'pendulum-sync',
                title: 'Synchronize',
                description: 'Start two pendulums that stay in sync for 5 seconds',
                difficulty: 'hard',
                hint: 'This is almost impossible due to chaos - that\'s the point!',
                solution: 'Identical initial conditions will diverge. The lesson is that it\'s nearly impossible.',
                check: () => window.pendulumsSynced && window.pendulumsSynced(5000),
                xp: 100
            }
        ],

        // Reaction-Diffusion
        'reaction-diffusion/index.html': [
            {
                id: 'rd-spots',
                title: 'Leopard Print',
                description: 'Create a stable spotted pattern',
                difficulty: 'easy',
                hint: 'Try F=0.025, k=0.055',
                solution: 'Set Feed=0.025, Kill=0.055 and wait for stability.',
                check: () => {
                    const f = window.rdParams && window.rdParams.feed;
                    const k = window.rdParams && window.rdParams.kill;
                    return f > 0.02 && f < 0.03 && k > 0.05 && k < 0.06;
                },
                xp: 30
            },
            {
                id: 'rd-stripes',
                title: 'Zebra Stripes',
                description: 'Create a striped pattern',
                difficulty: 'medium',
                hint: 'Lower feed rate, higher kill rate',
                solution: 'Try F=0.022, k=0.051',
                check: () => window.hasStripes && window.hasStripes(),
                xp: 45
            },
            {
                id: 'rd-coral',
                title: 'Coral Growth',
                description: 'Create branching coral-like structures',
                difficulty: 'medium',
                hint: 'F=0.055, k=0.062 is a good starting point',
                solution: 'Set Feed=0.055, Kill=0.062 for coral morphology.',
                check: () => {
                    const f = window.rdParams && window.rdParams.feed;
                    const k = window.rdParams && window.rdParams.kill;
                    return f > 0.05 && f < 0.06 && k > 0.06 && k < 0.065;
                },
                xp: 40
            }
        ],

        // Pathfinding
        'pathfinding/index.html': [
            {
                id: 'path-maze',
                title: 'Maze Solver',
                description: 'Create a maze and find the path through it',
                difficulty: 'easy',
                hint: 'Draw walls to create corridors, then set start and end.',
                solution: 'Draw a maze, place start in one corner and goal in opposite corner.',
                check: () => window.pathFound && window.pathFound() && window.wallCount && window.wallCount() > 20,
                xp: 25
            },
            {
                id: 'path-compare',
                title: 'Algorithm Battle',
                description: 'Compare A* with Dijkstra on the same maze',
                difficulty: 'medium',
                hint: 'Run both algorithms and count explored cells.',
                solution: 'A* should explore fewer cells due to heuristic guidance.',
                check: () => window.comparedAlgorithms && window.comparedAlgorithms(),
                xp: 50
            },
            {
                id: 'path-trap',
                title: 'Greedy Trap',
                description: 'Create a scenario where greedy best-first fails but A* succeeds',
                difficulty: 'hard',
                hint: 'Create a U-shaped obstacle around the goal.',
                solution: 'Put goal behind a concave wall - greedy gets stuck, A* goes around.',
                check: () => window.greedyFailed && window.greedyFailed(),
                xp: 75
            }
        ],

        // Wave Function Collapse
        'wave-function-collapse/index.html': [
            {
                id: 'wfc-complete',
                title: 'Full Collapse',
                description: 'Successfully generate a complete pattern without contradictions',
                difficulty: 'easy',
                hint: 'Just run the algorithm and let it complete.',
                solution: 'Click generate and wait - most runs succeed.',
                check: () => window.wfcComplete && window.wfcComplete(),
                xp: 20
            },
            {
                id: 'wfc-force',
                title: 'Guided Generation',
                description: 'Pre-place tiles and have the algorithm fill in around them',
                difficulty: 'medium',
                hint: 'Click to place specific tiles before running.',
                solution: 'Place a few tiles, then run generation.',
                check: () => window.wfcWithSeeds && window.wfcWithSeeds(),
                xp: 40
            },
            {
                id: 'wfc-contradiction',
                title: 'Break the System',
                description: 'Cause a contradiction by placing incompatible tiles',
                difficulty: 'medium',
                hint: 'Place tiles that can\'t have valid neighbors.',
                solution: 'Place conflicting tiles next to each other.',
                check: () => window.wfcContradiction && window.wfcContradiction(),
                xp: 35
            }
        ],

        // Voronoi
        'voronoi-delaunay/index.html': [
            {
                id: 'voronoi-100',
                title: 'Century Club',
                description: 'Create a diagram with 100 points',
                difficulty: 'easy',
                hint: 'Keep clicking or use random scatter.',
                solution: 'Add 100 points by clicking or using add random button.',
                check: () => window.voronoiPoints && window.voronoiPoints() >= 100,
                xp: 25
            },
            {
                id: 'voronoi-relax',
                title: 'Perfect Balance',
                description: 'Apply Lloyd relaxation until cells are nearly uniform',
                difficulty: 'medium',
                hint: 'Run many iterations of relaxation.',
                solution: 'Enable auto-relaxation and wait 50+ iterations.',
                check: () => window.voronoiRelaxed && window.voronoiRelaxed(),
                xp: 40
            }
        ],

        // Fourier Epicycles
        'fourier-epicycles/index.html': [
            {
                id: 'fourier-square',
                title: 'Square Wave',
                description: 'Draw a square and watch circles approximate it',
                difficulty: 'easy',
                hint: 'Draw a simple square shape.',
                solution: 'Draw a square - notice how corners are the hardest to approximate.',
                check: () => window.fourierDrawn && window.fourierDrawn(),
                xp: 25
            },
            {
                id: 'fourier-name',
                title: 'Sign Your Name',
                description: 'Draw your signature and see it reconstructed',
                difficulty: 'medium',
                hint: 'Draw your name cursively without lifting.',
                solution: 'Draw a continuous signature, then watch the reconstruction.',
                check: () => window.fourierComplex && window.fourierComplex(),
                xp: 40
            },
            {
                id: 'fourier-minimal',
                title: 'Minimalist',
                description: 'Recreate a shape recognizably with only 5 circles',
                difficulty: 'hard',
                hint: 'Simple shapes like circles or triangles work best.',
                solution: 'Draw a circle - it can be represented with very few frequencies.',
                check: () => window.fourierCircles && window.fourierCircles() <= 5,
                xp: 60
            }
        ]
    };

    /**
     * Get stored progress
     */
    function getProgress() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { completed: [], xp: 0 };
        } catch { return { completed: [], xp: 0 }; }
    }

    /**
     * Save progress
     */
    function saveProgress(progress) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }

    /**
     * Complete a challenge
     */
    function completeChallenge(challengeId, xp) {
        const progress = getProgress();
        if (!progress.completed.includes(challengeId)) {
            progress.completed.push(challengeId);
            progress.xp += xp;
            saveProgress(progress);
            showCompletionNotification(xp);
        }
    }

    /**
     * Show completion notification
     */
    function showCompletionNotification(xp) {
        const notification = document.createElement('div');
        notification.className = 'ccab-challenge-complete';
        notification.innerHTML = `
            <div class="challenge-complete-icon">🏆</div>
            <div class="challenge-complete-text">Challenge Complete!</div>
            <div class="challenge-complete-xp">+${xp} XP</div>
        `;
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #606C38, #8A9A5B);
            color: white;
            padding: 2rem 3rem;
            border-radius: 20px;
            text-align: center;
            z-index: 10000;
            animation: challengePopIn 0.5s ease-out;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        `;
        document.body.appendChild(notification);

        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes challengePopIn {
                0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.1); }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
            .challenge-complete-icon { font-size: 3rem; margin-bottom: 0.5rem; }
            .challenge-complete-text { font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem; }
            .challenge-complete-xp { font-size: 1.2rem; opacity: 0.9; }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
            notification.style.transition = 'opacity 0.5s';
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 500);
        }, 2500);
    }

    /**
     * ChallengePanel class - displays challenges for current demo
     */
    class ChallengePanel {
        constructor() {
            this.challenges = this.getChallengesForCurrentPage();
            this.progress = getProgress();
            this.panel = null;
            this.isOpen = false;
        }

        getChallengesForCurrentPage() {
            const path = window.location.pathname;
            for (const key in CHALLENGES) {
                if (path.endsWith(key) || path.includes(key)) {
                    return CHALLENGES[key];
                }
            }
            return null;
        }

        init() {
            if (!this.challenges || this.challenges.length === 0) return;

            this.createButton();
            this.createPanel();
            this.startChecking();
        }

        createButton() {
            const btn = document.createElement('button');
            btn.id = 'ccab-challenge-btn';
            btn.innerHTML = '🏆 Challenges';
            btn.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 9999;
                background: linear-gradient(135deg, #BC6C25, #DDA15E);
                color: white;
                border: none;
                padding: 12px 20px;
                border-radius: 25px;
                cursor: pointer;
                font-family: 'Nunito', sans-serif;
                font-size: 14px;
                font-weight: 600;
                box-shadow: 0 4px 15px rgba(188, 108, 37, 0.4);
                transition: all 0.2s;
            `;
            btn.onmouseover = () => btn.style.transform = 'scale(1.05)';
            btn.onmouseout = () => btn.style.transform = 'scale(1)';
            btn.onclick = () => this.toggle();
            document.body.appendChild(btn);
        }

        createPanel() {
            this.panel = document.createElement('div');
            this.panel.id = 'ccab-challenge-panel';
            this.panel.style.cssText = `
                position: fixed;
                bottom: 80px;
                right: 20px;
                width: 350px;
                max-height: 500px;
                background: rgba(254, 250, 224, 0.98);
                border-radius: 20px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                z-index: 9998;
                display: none;
                overflow: hidden;
                font-family: 'Nunito', sans-serif;
            `;

            const header = document.createElement('div');
            header.style.cssText = `
                background: linear-gradient(135deg, #606C38, #8A9A5B);
                color: white;
                padding: 1rem 1.5rem;
            `;
            header.innerHTML = `
                <h3 style="margin: 0; font-family: 'Lora', serif; font-size: 1.3rem;">Challenges</h3>
                <p style="margin: 0.25rem 0 0; opacity: 0.9; font-size: 0.9rem;">
                    Total XP: ${this.progress.xp}
                </p>
            `;

            const content = document.createElement('div');
            content.style.cssText = `
                padding: 1rem;
                max-height: 400px;
                overflow-y: auto;
            `;

            this.challenges.forEach((challenge, index) => {
                const isCompleted = this.progress.completed.includes(challenge.id);
                const card = document.createElement('div');
                card.className = 'challenge-card';
                card.dataset.id = challenge.id;
                card.style.cssText = `
                    background: ${isCompleted ? 'rgba(96, 108, 56, 0.1)' : 'white'};
                    border: 2px solid ${isCompleted ? '#606C38' : '#ddd'};
                    border-radius: 12px;
                    padding: 1rem;
                    margin-bottom: 0.75rem;
                `;

                const difficultyColors = {
                    easy: '#4CAF50',
                    medium: '#FF9800',
                    hard: '#f44336'
                };

                card.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                        <h4 style="margin: 0; color: #3d4423; font-size: 1rem;">
                            ${isCompleted ? '✅' : '⭕'} ${challenge.title}
                        </h4>
                        <span style="
                            background: ${difficultyColors[challenge.difficulty]};
                            color: white;
                            padding: 2px 8px;
                            border-radius: 10px;
                            font-size: 0.7rem;
                            text-transform: uppercase;
                        ">${challenge.difficulty}</span>
                    </div>
                    <p style="margin: 0 0 0.75rem; color: #666; font-size: 0.9rem;">
                        ${challenge.description}
                    </p>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="color: #BC6C25; font-weight: bold; font-size: 0.9rem;">
                            ${challenge.xp} XP
                        </span>
                        <div>
                            <button class="hint-btn" data-index="${index}" style="
                                background: none;
                                border: 1px solid #8A9A5B;
                                color: #606C38;
                                padding: 4px 10px;
                                border-radius: 12px;
                                cursor: pointer;
                                font-size: 0.8rem;
                                margin-right: 5px;
                            ">💡 Hint</button>
                            <button class="solution-btn" data-index="${index}" style="
                                background: none;
                                border: 1px solid #BC6C25;
                                color: #BC6C25;
                                padding: 4px 10px;
                                border-radius: 12px;
                                cursor: pointer;
                                font-size: 0.8rem;
                            ">🔑 Solution</button>
                        </div>
                    </div>
                    <div class="hint-box" style="display: none; margin-top: 0.75rem; padding: 0.75rem; background: #f5f5dc; border-radius: 8px; font-size: 0.85rem; color: #666;">
                    </div>
                `;

                content.appendChild(card);
            });

            this.panel.appendChild(header);
            this.panel.appendChild(content);
            document.body.appendChild(this.panel);

            // Add event listeners for hint/solution buttons
            this.panel.querySelectorAll('.hint-btn').forEach(btn => {
                btn.onclick = (e) => {
                    const idx = parseInt(e.target.dataset.index);
                    const hintBox = e.target.closest('.challenge-card').querySelector('.hint-box');
                    hintBox.textContent = '💡 ' + this.challenges[idx].hint;
                    hintBox.style.display = 'block';
                };
            });

            this.panel.querySelectorAll('.solution-btn').forEach(btn => {
                btn.onclick = (e) => {
                    const idx = parseInt(e.target.dataset.index);
                    const hintBox = e.target.closest('.challenge-card').querySelector('.hint-box');
                    hintBox.textContent = '🔑 ' + this.challenges[idx].solution;
                    hintBox.style.display = 'block';
                };
            });
        }

        toggle() {
            this.isOpen = !this.isOpen;
            this.panel.style.display = this.isOpen ? 'block' : 'none';
        }

        startChecking() {
            setInterval(() => {
                this.challenges.forEach(challenge => {
                    if (this.progress.completed.includes(challenge.id)) return;
                    try {
                        if (challenge.check && challenge.check()) {
                            completeChallenge(challenge.id, challenge.xp);
                            this.progress = getProgress();
                            this.updateUI(challenge.id);
                        }
                    } catch (e) {
                        // Check function not available yet
                    }
                });
            }, 1000);
        }

        updateUI(completedId) {
            const card = this.panel.querySelector(`[data-id="${completedId}"]`);
            if (card) {
                card.style.background = 'rgba(96, 108, 56, 0.1)';
                card.style.borderColor = '#606C38';
                const title = card.querySelector('h4');
                title.innerHTML = title.innerHTML.replace('⭕', '✅');
            }
            // Update XP display
            const xpDisplay = this.panel.querySelector('p');
            if (xpDisplay) {
                xpDisplay.textContent = `Total XP: ${this.progress.xp}`;
            }
        }
    }

    /**
     * Comprehension check system
     */
    class ComprehensionCheck {
        constructor(questions) {
            this.questions = questions;
            this.currentIndex = 0;
            this.score = 0;
        }

        static QUESTIONS = {
            'boids': [
                {
                    question: 'Which rule makes boids avoid crowding?',
                    options: ['Alignment', 'Cohesion', 'Separation', 'Velocity'],
                    correct: 2
                },
                {
                    question: 'What happens if cohesion is set to zero?',
                    options: ['Boids cluster tightly', 'Boids spread out randomly', 'Boids form a line', 'Boids stop moving'],
                    correct: 1
                }
            ],
            'game-of-life': [
                {
                    question: 'A living cell with exactly 2 neighbors will:',
                    options: ['Die', 'Stay alive', 'Duplicate', 'Move'],
                    correct: 1
                },
                {
                    question: 'What is a "glider"?',
                    options: ['A still pattern', 'A pattern that moves', 'A dying pattern', 'A random pattern'],
                    correct: 1
                }
            ],
            'lorenz': [
                {
                    question: 'What is the "butterfly effect"?',
                    options: ['Butterflies cause weather', 'Small changes cause large differences', 'Patterns look like butterflies', 'Butterflies follow equations'],
                    correct: 1
                }
            ]
        };

        show() {
            // Create modal for quiz
            const modal = document.createElement('div');
            modal.id = 'comprehension-modal';
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10001;
            `;
            modal.innerHTML = this.renderQuestion();
            document.body.appendChild(modal);
        }

        renderQuestion() {
            const q = this.questions[this.currentIndex];
            return `
                <div style="background: white; padding: 2rem; border-radius: 20px; max-width: 500px; text-align: center;">
                    <h3 style="color: #606C38; margin-bottom: 1rem;">Comprehension Check</h3>
                    <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">${q.question}</p>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        ${q.options.map((opt, i) => `
                            <button onclick="window.checkAnswer(${i})" style="
                                padding: 0.75rem;
                                border: 2px solid #8A9A5B;
                                border-radius: 10px;
                                background: white;
                                cursor: pointer;
                                font-size: 1rem;
                            ">${opt}</button>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    }

    // Export for use
    window.CHALLENGES = CHALLENGES;
    window.ChallengePanel = ChallengePanel;
    window.ComprehensionCheck = ComprehensionCheck;
    window.completeChallenge = completeChallenge;
    window.getChallengeProgress = getProgress;

    // Auto-init on demo pages
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            const panel = new ChallengePanel();
            panel.init();
        });
    } else {
        const panel = new ChallengePanel();
        panel.init();
    }
})();
