/**
 * CCAB Demo Utilities
 * Common functions and classes for interactive demos
 * Version: 1.0.0
 */

// ============================================
// Performance Monitoring
// ============================================

/**
 * FPS Counter with color-coded performance indicators
 * Usage: const fps = new FPSCounter(); fps.start(); // In animation loop: fps.update();
 */
class FPSCounter {
    constructor(options = {}) {
        this.fps = 0;
        this.frames = 0;
        this.lastTime = performance.now();
        this.displayElement = options.element || this.createDisplay(options.position || 'top-right');
        this.fpsValue = this.displayElement.querySelector('.fps-value');
        this.visible = false;
    }

    createDisplay(position = 'top-right') {
        const positions = {
            'top-right': { top: '80px', right: '10px' },
            'top-left': { top: '80px', left: '10px' },
            'bottom-right': { bottom: '10px', right: '10px' },
            'bottom-left': { bottom: '10px', left: '10px' }
        };

        const div = document.createElement('div');
        div.className = 'ccab-fps-counter';
        div.style.cssText = `
            position: fixed;
            ${positions[position].top ? `top: ${positions[position].top};` : ''}
            ${positions[position].bottom ? `bottom: ${positions[position].bottom};` : ''}
            ${positions[position].left ? `left: ${positions[position].left};` : ''}
            ${positions[position].right ? `right: ${positions[position].right};` : ''}
            background: rgba(0, 0, 0, 0.8);
            color: #fbbf24;
            padding: 8px 12px;
            border-radius: 6px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            z-index: 9999;
            display: none;
            pointer-events: none;
        `;
        div.innerHTML = 'FPS: <span class="fps-value">0</span>';
        document.body.appendChild(div);
        return div;
    }

    start() {
        this.displayElement.style.display = 'block';
        this.visible = true;
    }

    hide() {
        this.displayElement.style.display = 'none';
        this.visible = false;
    }

    update() {
        if (!this.visible) return;

        this.frames++;
        const currentTime = performance.now();
        const delta = currentTime - this.lastTime;

        if (delta >= 1000) {
            this.fps = Math.round((this.frames * 1000) / delta);
            this.frames = 0;
            this.lastTime = currentTime;

            this.fpsValue.textContent = this.fps;
            this.fpsValue.style.color = this.fps >= 55 ? '#10b981' :
                                        this.fps >= 30 ? '#fbbf24' : '#e11d48';
        }
    }

    destroy() {
        if (this.displayElement && this.displayElement.parentNode) {
            this.displayElement.parentNode.removeChild(this.displayElement);
        }
    }
}

// ============================================
// Canvas Management
// ============================================

/**
 * Canvas Manager with automatic retina display support and responsive resizing
 * Usage: const canvas = new CanvasManager('canvasId');
 */
class CanvasManager {
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            throw new Error(`Canvas element '${canvasId}' not found`);
        }

        this.ctx = this.canvas.getContext('2d', options.contextOptions || {});
        if (!this.ctx) {
            throw new Error('Could not get 2D context');
        }

        this.dpr = Math.min(window.devicePixelRatio || 1, options.maxDPR || 2);
        this.autoResize = options.autoResize !== false;
        this.resizeDebounce = options.resizeDebounce || 150;

        this.resize();

        if (this.autoResize) {
            this.resizeHandler = this.createResizeHandler();
            window.addEventListener('resize', this.resizeHandler);
        }
    }

    createResizeHandler() {
        let resizeTimeout;
        return () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => this.resize(), this.resizeDebounce);
        };
    }

    resize() {
        const rect = this.canvas.getBoundingClientRect();

        // Set canvas size accounting for device pixel ratio
        this.canvas.width = rect.width * this.dpr;
        this.canvas.height = rect.height * this.dpr;

        // Scale context to account for pixel ratio
        this.ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
        this.ctx.scale(this.dpr, this.dpr);

        // Store display size for convenience
        this.width = rect.width;
        this.height = rect.height;
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
    }

    clear(color) {
        if (color) {
            this.ctx.fillStyle = color;
            this.ctx.fillRect(0, 0, this.width, this.height);
        } else {
            this.ctx.clearRect(0, 0, this.width, this.height);
        }
    }

    destroy() {
        if (this.autoResize && this.resizeHandler) {
            window.removeEventListener('resize', this.resizeHandler);
        }
    }
}

// ============================================
// Error Handling
// ============================================

/**
 * Error Display Manager
 * Usage: const errorManager = new ErrorManager(); errorManager.show('Error message');
 */
class ErrorManager {
    constructor() {
        this.errorElement = this.createErrorElement();
        this.messageElement = this.errorElement.querySelector('.error-message');
        this.detailsElement = this.errorElement.querySelector('.error-details');
    }

    createErrorElement() {
        const div = document.createElement('div');
        div.className = 'ccab-error';
        div.style.cssText = `
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(225, 29, 72, 0.95);
            color: white;
            padding: 2rem;
            border-radius: 12px;
            text-align: center;
            max-width: 500px;
            z-index: 10000;
            box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
        `;
        div.innerHTML = `
            <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem;">Error</h2>
            <p class="error-message" style="margin: 0 0 1rem 0;"></p>
            <pre class="error-details" style="display: none; background: rgba(0, 0, 0, 0.3); padding: 1rem; border-radius: 6px; overflow-x: auto; text-align: left; font-size: 12px; margin: 0;"></pre>
        `;
        document.body.appendChild(div);
        return div;
    }

    show(message, details) {
        this.messageElement.textContent = message;
        if (details) {
            this.detailsElement.textContent = details;
            this.detailsElement.style.display = 'block';
        }
        this.errorElement.style.display = 'block';
    }

    hide() {
        this.errorElement.style.display = 'none';
    }

    destroy() {
        if (this.errorElement && this.errorElement.parentNode) {
            this.errorElement.parentNode.removeChild(this.errorElement);
        }
    }
}

/**
 * Global error handler setup
 * Usage: setupGlobalErrorHandler((message, details) => { console.error(message); });
 */
function setupGlobalErrorHandler(callback) {
    window.addEventListener('error', (e) => {
        callback(e.message, e.error?.stack);
    });

    window.addEventListener('unhandledrejection', (e) => {
        callback('Unhandled Promise Rejection', e.reason);
    });
}

// ============================================
// Loading State Management
// ============================================

/**
 * Loading Spinner Manager
 * Usage: const loader = new LoadingManager(); loader.hide();
 */
class LoadingManager {
    constructor(message = 'Loading...') {
        this.loadingElement = this.createLoadingElement(message);
    }

    createLoadingElement(message) {
        const div = document.createElement('div');
        div.className = 'ccab-loading';
        div.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 9999;
            color: #e8e6e1;
        `;
        div.innerHTML = `
            <div class="spinner" style="
                width: 50px;
                height: 50px;
                border: 4px solid rgba(255, 255, 255, 0.1);
                border-top-color: #fbbf24;
                border-radius: 50%;
                animation: ccab-spin 1s linear infinite;
                margin: 0 auto 1rem;
            "></div>
            <p style="margin: 0; font-family: -apple-system, sans-serif;">${message}</p>
        `;

        // Add animation if not already present
        if (!document.getElementById('ccab-spin-animation')) {
            const style = document.createElement('style');
            style.id = 'ccab-spin-animation';
            style.textContent = '@keyframes ccab-spin { to { transform: rotate(360deg); } }';
            document.head.appendChild(style);
        }

        document.body.appendChild(div);
        return div;
    }

    hide() {
        if (this.loadingElement) {
            this.loadingElement.style.display = 'none';
        }
    }

    show() {
        if (this.loadingElement) {
            this.loadingElement.style.display = 'block';
        }
    }

    updateMessage(message) {
        const p = this.loadingElement.querySelector('p');
        if (p) p.textContent = message;
    }

    destroy() {
        if (this.loadingElement && this.loadingElement.parentNode) {
            this.loadingElement.parentNode.removeChild(this.loadingElement);
        }
    }
}

// ============================================
// CDN Loading Helpers
// ============================================

/**
 * Load external library from CDN with timeout
 * Usage: await loadLibrary(() => typeof THREE !== 'undefined', 'Three.js', 10000);
 */
function loadLibrary(checkFunction, libraryName, timeout = 10000) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        const checkInterval = setInterval(() => {
            if (checkFunction()) {
                clearInterval(checkInterval);
                resolve();
            } else if (Date.now() - startTime > timeout) {
                clearInterval(checkInterval);
                reject(new Error(`${libraryName} failed to load from CDN within ${timeout}ms`));
            }
        }, 100);
    });
}

/**
 * Check if WebGL is supported
 */
function checkWebGLSupport() {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        return !!gl;
    } catch (e) {
        return false;
    }
}

/**
 * Check if WebGL2 is supported
 */
function checkWebGL2Support() {
    try {
        const canvas = document.createElement('canvas');
        return !!canvas.getContext('webgl2');
    } catch (e) {
        return false;
    }
}

// ============================================
// Math Utilities
// ============================================

/**
 * Clamp value between min and max
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation
 */
function lerp(a, b, t) {
    return a + (b - a) * clamp(t, 0, 1);
}

/**
 * Map value from one range to another
 */
function map(value, inMin, inMax, outMin, outMax) {
    return outMin + (outMax - outMin) * ((value - inMin) / (inMax - inMin));
}

/**
 * Generate random number between min and max
 */
function random(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.random() * (max - min) + min;
}

/**
 * Generate random integer between min and max (inclusive)
 */
function randomInt(min, max) {
    return Math.floor(random(min, max + 1));
}

/**
 * Convert degrees to radians
 */
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

/**
 * Convert radians to degrees
 */
function radToDeg(radians) {
    return radians * (180 / Math.PI);
}

// ============================================
// Color Utilities
// ============================================

/**
 * Convert HSL to RGB
 * @param {number} h - Hue (0-360)
 * @param {number} s - Saturation (0-100)
 * @param {number} l - Lightness (0-100)
 * @returns {object} - {r, g, b} values (0-255)
 */
function hslToRgb(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

/**
 * Create color string from RGB values
 */
function rgb(r, g, b, a = 1) {
    if (a === 1) {
        return `rgb(${r}, ${g}, ${b})`;
    }
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// ============================================
// Animation Helpers
// ============================================

/**
 * Simple animation loop manager
 * Usage: const loop = new AnimationLoop((dt) => { /* render */ }); loop.start();
 */
class AnimationLoop {
    constructor(callback) {
        this.callback = callback;
        this.running = false;
        this.lastTime = 0;
        this.animationFrameId = null;
    }

    start() {
        if (this.running) return;
        this.running = true;
        this.lastTime = performance.now();
        this.tick();
    }

    stop() {
        this.running = false;
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }

    tick = () => {
        if (!this.running) return;

        const currentTime = performance.now();
        const deltaTime = (currentTime - this.lastTime) / 1000; // Convert to seconds
        this.lastTime = currentTime;

        this.callback(deltaTime, currentTime / 1000);

        this.animationFrameId = requestAnimationFrame(this.tick);
    }
}

// ============================================
// Export for use
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        FPSCounter,
        CanvasManager,
        ErrorManager,
        LoadingManager,
        AnimationLoop,
        setupGlobalErrorHandler,
        loadLibrary,
        checkWebGLSupport,
        checkWebGL2Support,
        clamp,
        lerp,
        map,
        random,
        randomInt,
        degToRad,
        radToDeg,
        hslToRgb,
        rgb
    };
}
