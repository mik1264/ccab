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

/**
 * Comprehensive Performance Monitor
 * Displays FPS, memory usage, and device info
 * Usage: const monitor = new PerformanceMonitor(); monitor.start();
 */
class PerformanceMonitor {
    constructor(options = {}) {
        this.fps = 0;
        this.frames = 0;
        this.lastTime = performance.now();
        this.memoryUsage = null;
        this.position = options.position || 'top-right';
        this.showFPS = options.showFPS !== false;
        this.showMemory = options.showMemory !== false;
        this.showDevice = options.showDevice !== false;
        this.updateInterval = options.updateInterval || 1000;
        this.visible = false;
        this.displayElement = this.createDisplay();
    }

    createDisplay() {
        const positions = {
            'top-right': { top: '80px', right: '10px' },
            'top-left': { top: '80px', left: '10px' },
            'bottom-right': { bottom: '10px', right: '10px' },
            'bottom-left': { bottom: '10px', left: '10px' }
        };

        const pos = positions[this.position];
        const div = document.createElement('div');
        div.className = 'ccab-perf-monitor';
        div.style.cssText = `
            position: fixed;
            ${pos.top ? `top: ${pos.top};` : ''}
            ${pos.bottom ? `bottom: ${pos.bottom};` : ''}
            ${pos.left ? `left: ${pos.left};` : ''}
            ${pos.right ? `right: ${pos.right};` : ''}
            background: rgba(0, 0, 0, 0.85);
            color: #fbbf24;
            padding: 10px 14px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            z-index: 9999;
            display: none;
            min-width: 150px;
            line-height: 1.6;
        `;

        div.innerHTML = `
            ${this.showFPS ? '<div>FPS: <span class="pm-fps">--</span></div>' : ''}
            ${this.showMemory ? '<div>Memory: <span class="pm-memory">--</span></div>' : ''}
            ${this.showDevice ? '<div class="pm-device" style="color: #888; font-size: 10px; margin-top: 4px;"></div>' : ''}
        `;
        document.body.appendChild(div);

        // Populate device info once
        if (this.showDevice) {
            const deviceEl = div.querySelector('.pm-device');
            deviceEl.innerHTML = this.getDeviceInfo();
        }

        return div;
    }

    getDeviceInfo() {
        const gpu = this.getGPUInfo();
        const screen = `${window.innerWidth}x${window.innerHeight}`;
        const dpr = window.devicePixelRatio?.toFixed(1) || '1.0';
        return `GPU: ${gpu}<br>Screen: ${screen} @${dpr}x`;
    }

    getGPUInfo() {
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (gl) {
                const ext = gl.getExtension('WEBGL_debug_renderer_info');
                if (ext) {
                    const renderer = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL);
                    // Shorten common GPU names
                    return renderer.replace(/ANGLE \(|, D3D.*\)|OpenGL.*\)|\(.*\)/g, '').trim().slice(0, 25);
                }
            }
        } catch (e) {}
        return 'Unknown';
    }

    start() {
        this.displayElement.style.display = 'block';
        this.visible = true;
    }

    hide() {
        this.displayElement.style.display = 'none';
        this.visible = false;
    }

    toggle() {
        this.visible ? this.hide() : this.start();
    }

    update() {
        if (!this.visible) return;

        this.frames++;
        const currentTime = performance.now();
        const delta = currentTime - this.lastTime;

        if (delta >= this.updateInterval) {
            // Update FPS
            if (this.showFPS) {
                this.fps = Math.round((this.frames * 1000) / delta);
                const fpsEl = this.displayElement.querySelector('.pm-fps');
                if (fpsEl) {
                    fpsEl.textContent = this.fps;
                    fpsEl.style.color = this.fps >= 55 ? '#10b981' :
                                        this.fps >= 30 ? '#fbbf24' : '#e11d48';
                }
            }

            // Update memory if available
            if (this.showMemory && performance.memory) {
                const memEl = this.displayElement.querySelector('.pm-memory');
                if (memEl) {
                    const usedMB = (performance.memory.usedJSHeapSize / 1048576).toFixed(1);
                    const limitMB = (performance.memory.jsHeapSizeLimit / 1048576).toFixed(0);
                    memEl.textContent = `${usedMB}MB / ${limitMB}MB`;
                }
            } else if (this.showMemory) {
                const memEl = this.displayElement.querySelector('.pm-memory');
                if (memEl) memEl.textContent = 'N/A';
            }

            this.frames = 0;
            this.lastTime = currentTime;
        }
    }

    destroy() {
        if (this.displayElement && this.displayElement.parentNode) {
            this.displayElement.parentNode.removeChild(this.displayElement);
        }
    }
}

// Auto-enable performance monitor with keyboard shortcut (P key)
document.addEventListener('keydown', (e) => {
    if (e.key === 'p' && e.ctrlKey && e.shiftKey) {
        if (!window._ccabPerfMonitor) {
            window._ccabPerfMonitor = new PerformanceMonitor();
        }
        window._ccabPerfMonitor.toggle();
    }
});

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
 * Usage: const loop = new AnimationLoop((dt) => { ... }); loop.start();
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
// Vector Mathematics
// ============================================

/**
 * 2D Vector class for physics simulations
 * Usage: const v = new Vector2D(1, 2); v.add(new Vector2D(3, 4));
 */
class Vector2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    copy() {
        return new Vector2D(this.x, this.y);
    }

    add(v) {
        return new Vector2D(this.x + v.x, this.y + v.y);
    }

    sub(v) {
        return new Vector2D(this.x - v.x, this.y - v.y);
    }

    mult(s) {
        return new Vector2D(this.x * s, this.y * s);
    }

    div(s) {
        if (s === 0) return new Vector2D(0, 0);
        return new Vector2D(this.x / s, this.y / s);
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    magSq() {
        return this.x * this.x + this.y * this.y;
    }

    normalize() {
        const m = this.mag();
        return m > 0 ? this.mult(1 / m) : new Vector2D();
    }

    limit(max) {
        const m = this.mag();
        return m > max ? this.normalize().mult(max) : this.copy();
    }

    setMag(len) {
        return this.normalize().mult(len);
    }

    dist(v) {
        return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2);
    }

    dot(v) {
        return this.x * v.x + this.y * v.y;
    }

    heading() {
        return Math.atan2(this.y, this.x);
    }

    rotate(angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return new Vector2D(
            this.x * cos - this.y * sin,
            this.x * sin + this.y * cos
        );
    }

    static random() {
        const angle = Math.random() * Math.PI * 2;
        return new Vector2D(Math.cos(angle), Math.sin(angle));
    }

    static fromAngle(angle) {
        return new Vector2D(Math.cos(angle), Math.sin(angle));
    }

    static lerp(v1, v2, t) {
        return new Vector2D(
            v1.x + (v2.x - v1.x) * t,
            v1.y + (v2.y - v1.y) * t
        );
    }
}

// ============================================
// Grid Management (for Cellular Automata)
// ============================================

/**
 * Grid Manager for cellular automata and agent-based models
 * Usage: const grid = new GridManager(100, 100, 5); grid.forEach((x, y) => {...});
 */
class GridManager {
    constructor(cols, rows, cellSize = 10) {
        this.cols = cols;
        this.rows = rows;
        this.cellSize = cellSize;
        this.data = new Array(cols * rows).fill(0);
    }

    get(x, y) {
        if (x < 0 || x >= this.cols || y < 0 || y >= this.rows) return 0;
        return this.data[y * this.cols + x];
    }

    set(x, y, value) {
        if (x >= 0 && x < this.cols && y >= 0 && y < this.rows) {
            this.data[y * this.cols + x] = value;
        }
    }

    fill(value) {
        this.data.fill(value);
    }

    clear() {
        this.fill(0);
    }

    randomize(probability = 0.5) {
        for (let i = 0; i < this.data.length; i++) {
            this.data[i] = Math.random() < probability ? 1 : 0;
        }
    }

    forEach(callback) {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                callback(x, y, this.get(x, y));
            }
        }
    }

    countNeighbors(x, y, wrap = false) {
        let count = 0;
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) continue;
                let nx = x + dx;
                let ny = y + dy;
                if (wrap) {
                    nx = (nx + this.cols) % this.cols;
                    ny = (ny + this.rows) % this.rows;
                }
                if (this.get(nx, ny)) count++;
            }
        }
        return count;
    }

    draw(ctx, colorCallback) {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                const value = this.get(x, y);
                if (value !== 0) {
                    ctx.fillStyle = colorCallback ? colorCallback(value, x, y) : '#ffffff';
                    ctx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize - 1, this.cellSize - 1);
                }
            }
        }
    }

    resize(newCols, newRows) {
        const newData = new Array(newCols * newRows).fill(0);
        const minCols = Math.min(this.cols, newCols);
        const minRows = Math.min(this.rows, newRows);
        for (let y = 0; y < minRows; y++) {
            for (let x = 0; x < minCols; x++) {
                newData[y * newCols + x] = this.get(x, y);
            }
        }
        this.cols = newCols;
        this.rows = newRows;
        this.data = newData;
    }

    clone() {
        const grid = new GridManager(this.cols, this.rows, this.cellSize);
        grid.data = [...this.data];
        return grid;
    }
}

// ============================================
// Statistics Display
// ============================================

/**
 * Statistics Display Panel for simulation metrics
 * Usage: const stats = new StatsDisplay(['Generation', 'Population', 'Fitness']);
 */
class StatsDisplay {
    constructor(labels = [], options = {}) {
        this.labels = labels;
        this.values = {};
        this.position = options.position || 'top-left';
        this.element = this.createDisplay(options);
    }

    createDisplay(options) {
        const positions = {
            'top-right': { top: '80px', right: '10px' },
            'top-left': { top: '80px', left: '10px' },
            'bottom-right': { bottom: '10px', right: '10px' },
            'bottom-left': { bottom: '10px', left: '10px' }
        };

        const div = document.createElement('div');
        div.className = 'ccab-stats';
        div.style.cssText = `
            position: fixed;
            ${positions[this.position].top ? `top: ${positions[this.position].top};` : ''}
            ${positions[this.position].bottom ? `bottom: ${positions[this.position].bottom};` : ''}
            ${positions[this.position].left ? `left: ${positions[this.position].left};` : ''}
            ${positions[this.position].right ? `right: ${positions[this.position].right};` : ''}
            background: rgba(0, 0, 0, 0.85);
            color: #e8e6e1;
            padding: 12px 16px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 13px;
            z-index: 9998;
            min-width: 150px;
            line-height: 1.6;
        `;

        this.labels.forEach(label => {
            const row = document.createElement('div');
            row.innerHTML = `<span style="color: #8A9A5B;">${label}:</span> <span class="stat-${label.toLowerCase().replace(/\s+/g, '-')}" style="color: #fbbf24;">0</span>`;
            div.appendChild(row);
            this.values[label] = 0;
        });

        document.body.appendChild(div);
        return div;
    }

    update(label, value) {
        this.values[label] = value;
        const el = this.element.querySelector(`.stat-${label.toLowerCase().replace(/\s+/g, '-')}`);
        if (el) {
            el.textContent = typeof value === 'number' ?
                (Number.isInteger(value) ? value.toLocaleString() : value.toFixed(2)) : value;
        }
    }

    updateAll(valuesObj) {
        Object.entries(valuesObj).forEach(([label, value]) => {
            this.update(label, value);
        });
    }

    addLabel(label, initialValue = 0) {
        if (this.values[label] !== undefined) return;
        this.labels.push(label);
        this.values[label] = initialValue;
        const row = document.createElement('div');
        row.innerHTML = `<span style="color: #8A9A5B;">${label}:</span> <span class="stat-${label.toLowerCase().replace(/\s+/g, '-')}" style="color: #fbbf24;">${initialValue}</span>`;
        this.element.appendChild(row);
    }

    show() {
        this.element.style.display = 'block';
    }

    hide() {
        this.element.style.display = 'none';
    }

    destroy() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    }
}

// ============================================
// Controls Manager
// ============================================

/**
 * Controls Manager for simulation parameters
 * Usage: const controls = new ControlsManager({ container: '#controls', params: {...} });
 */
class ControlsManager {
    constructor(options = {}) {
        this.params = options.params || {};
        this.callbacks = options.callbacks || {};
        this.presets = options.presets || {};
        this.container = options.container ?
            (typeof options.container === 'string' ? document.querySelector(options.container) : options.container) :
            document.querySelector('.controls');

        if (this.container) {
            this.init();
        }
    }

    init() {
        this.bindSliders();
        this.bindButtons();
        this.bindPresets();
        this.setupKeyboardShortcuts();
    }

    bindSliders() {
        if (!this.container) return;
        this.container.querySelectorAll('input[type="range"]').forEach(slider => {
            const param = slider.dataset.param || slider.name || slider.id;
            if (!param) return;

            // Initialize param value
            if (this.params[param] === undefined) {
                this.params[param] = parseFloat(slider.value);
            } else {
                slider.value = this.params[param];
            }

            // Find value display
            const valueDisplay = slider.parentElement?.querySelector('.value') ||
                                slider.parentElement?.querySelector('[data-value]');

            slider.addEventListener('input', (e) => {
                const value = parseFloat(e.target.value);
                this.params[param] = value;
                if (valueDisplay) {
                    valueDisplay.textContent = Number.isInteger(value) ? value : value.toFixed(2);
                }
                if (this.callbacks.onParamChange) {
                    this.callbacks.onParamChange(param, value, this.params);
                }
            });
        });
    }

    bindButtons() {
        if (!this.container) return;
        this.container.querySelectorAll('[data-action]').forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                if (this.callbacks[action]) {
                    this.callbacks[action](this.params);
                }
            });
        });
    }

    bindPresets() {
        if (!this.container) return;
        this.container.querySelectorAll('[data-preset]').forEach(btn => {
            btn.addEventListener('click', () => {
                const presetName = btn.dataset.preset;
                const preset = this.presets[presetName];
                if (preset) {
                    this.applyPreset(preset);
                }
            });
        });
    }

    applyPreset(preset) {
        Object.entries(preset).forEach(([param, value]) => {
            this.params[param] = value;
            const slider = this.container?.querySelector(`[data-param="${param}"], [name="${param}"], #${param}`);
            if (slider) {
                slider.value = value;
                slider.dispatchEvent(new Event('input'));
            }
        });
        if (this.callbacks.onPresetApply) {
            this.callbacks.onPresetApply(preset, this.params);
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Skip if user is typing in an input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            switch (e.code) {
                case 'Space':
                    if (this.callbacks['play-pause'] || this.callbacks.playPause) {
                        e.preventDefault();
                        (this.callbacks['play-pause'] || this.callbacks.playPause)(this.params);
                    }
                    break;
                case 'KeyR':
                    if (this.callbacks.reset) {
                        this.callbacks.reset(this.params);
                    }
                    break;
                case 'KeyS':
                    if (this.callbacks.screenshot) {
                        this.callbacks.screenshot(this.params);
                    }
                    break;
                case 'KeyN':
                    if (this.callbacks.step) {
                        this.callbacks.step(this.params);
                    }
                    break;
            }
        });
    }

    get(param) {
        return this.params[param];
    }

    set(param, value) {
        this.params[param] = value;
        const slider = this.container?.querySelector(`[data-param="${param}"], [name="${param}"], #${param}`);
        if (slider) {
            slider.value = value;
            slider.dispatchEvent(new Event('input'));
        }
    }

    getAll() {
        return { ...this.params };
    }
}

// ============================================
// Export Manager
// ============================================

/**
 * Export Manager for screenshots and data export
 * Usage: ExportManager.screenshot(canvas, 'my-screenshot');
 */
class ExportManager {
    static screenshot(canvas, filename = 'ccab-screenshot') {
        const link = document.createElement('a');
        link.download = `${filename}-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }

    static screenshotWithUI(canvas, overlayElements = [], filename = 'ccab-screenshot') {
        // Create a composite canvas
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');

        // Draw main canvas
        tempCtx.drawImage(canvas, 0, 0);

        // Could draw overlay elements here if needed

        ExportManager.screenshot(tempCanvas, filename);
    }

    static exportJSON(data, filename = 'ccab-data') {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        link.download = `${filename}-${Date.now()}.json`;
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
    }

    static exportCSV(data, headers, filename = 'ccab-data') {
        const csvContent = [
            headers.join(','),
            ...data.map(row => headers.map(h => row[h]).join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const link = document.createElement('a');
        link.download = `${filename}-${Date.now()}.csv`;
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
    }

    static copyToClipboard(canvas) {
        canvas.toBlob((blob) => {
            const item = new ClipboardItem({ 'image/png': blob });
            navigator.clipboard.write([item]);
        });
    }

    /**
     * Export current page as standalone HTML file
     * Captures current state including any parameter modifications
     */
    static exportDemo(filename = 'ccab-demo') {
        // Clone the document
        const html = document.documentElement.cloneNode(true);

        // Remove CCAB UI elements that shouldn't be in export
        const removeSelectors = [
            '#ccab-search',
            '.ccab-fps-counter',
            '.ccab-perf-monitor',
            '.ccab-stats',
            '.ccab-loading',
            '.pause-animations-btn',
            '.colorblind-toggle-btn',
            '#pwa-install-btn',
            '.skip-link'
        ];
        removeSelectors.forEach(sel => {
            html.querySelectorAll(sel).forEach(el => el.remove());
        });

        // Get current URL parameters and embed them
        const params = new URLSearchParams(window.location.search);
        if (params.toString()) {
            const script = document.createElement('script');
            script.textContent = `
                // Embedded parameters from export
                window.CCAB_EXPORT_PARAMS = ${JSON.stringify(Object.fromEntries(params))};
            `;
            html.querySelector('head').insertBefore(script, html.querySelector('head').firstChild);
        }

        // Create download
        const blob = new Blob(['<!DOCTYPE html>\n' + html.outerHTML], { type: 'text/html' });
        const link = document.createElement('a');
        link.download = `${filename}-${Date.now()}.html`;
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
    }

    /**
     * Export demo with custom parameters embedded
     */
    static exportDemoWithParams(params, filename = 'ccab-demo') {
        const html = document.documentElement.cloneNode(true);

        // Remove CCAB UI elements
        const removeSelectors = ['#ccab-search', '.ccab-fps-counter', '.ccab-perf-monitor', '.pause-animations-btn', '.colorblind-toggle-btn', '#pwa-install-btn'];
        removeSelectors.forEach(sel => {
            html.querySelectorAll(sel).forEach(el => el.remove());
        });

        // Embed parameters
        const script = document.createElement('script');
        script.textContent = `window.CCAB_EXPORT_PARAMS = ${JSON.stringify(params)};`;
        html.querySelector('head').insertBefore(script, html.querySelector('head').firstChild);

        const blob = new Blob(['<!DOCTYPE html>\n' + html.outerHTML], { type: 'text/html' });
        const link = document.createElement('a');
        link.download = `${filename}-${Date.now()}.html`;
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
    }
}

// ============================================
// Touch Handler
// ============================================

/**
 * Touch Handler for mobile interaction
 * Usage: const touch = new TouchHandler(canvas, { onStart: (pos) => {...} });
 */
class TouchHandler {
    constructor(element, callbacks = {}) {
        if (typeof element === 'string') {
            // Try as selector first, then as ID
            this.element = document.querySelector(element) || document.getElementById(element);
        } else {
            this.element = element;
        }
        this.callbacks = callbacks;
        this.isDrawing = false;
        this.lastPos = null;

        if (this.element) {
            this.init();
        }
    }

    init() {
        // Touch events
        this.element.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: false });
        this.element.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
        this.element.addEventListener('touchend', this.handleTouchEnd.bind(this));
        this.element.addEventListener('touchcancel', this.handleTouchEnd.bind(this));

        // Mouse events for desktop compatibility
        this.element.addEventListener('mousedown', this.handleMouseDown.bind(this));
        this.element.addEventListener('mousemove', this.handleMouseMove.bind(this));
        this.element.addEventListener('mouseup', this.handleMouseUp.bind(this));
        this.element.addEventListener('mouseleave', this.handleMouseUp.bind(this));
    }

    getPos(e) {
        const rect = this.element.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    handleTouchStart(e) {
        e.preventDefault();
        this.isDrawing = true;
        const pos = this.getPos(e);
        this.lastPos = pos;
        if (this.callbacks.onStart) this.callbacks.onStart(pos, e);
    }

    handleTouchMove(e) {
        if (!this.isDrawing) return;
        e.preventDefault();
        const pos = this.getPos(e);
        if (this.callbacks.onMove) this.callbacks.onMove(pos, this.lastPos, e);
        this.lastPos = pos;
    }

    handleTouchEnd(e) {
        if (!this.isDrawing) return;
        this.isDrawing = false;
        if (this.callbacks.onEnd) this.callbacks.onEnd(this.lastPos, e);
        this.lastPos = null;
    }

    handleMouseDown(e) {
        this.isDrawing = true;
        const pos = this.getPos(e);
        this.lastPos = pos;
        if (this.callbacks.onStart) this.callbacks.onStart(pos, e);
    }

    handleMouseMove(e) {
        if (!this.isDrawing) return;
        const pos = this.getPos(e);
        if (this.callbacks.onMove) this.callbacks.onMove(pos, this.lastPos, e);
        this.lastPos = pos;
    }

    handleMouseUp(e) {
        if (!this.isDrawing) return;
        this.isDrawing = false;
        if (this.callbacks.onEnd) this.callbacks.onEnd(this.lastPos, e);
        this.lastPos = null;
    }

    destroy() {
        // Touch events
        this.element.removeEventListener('touchstart', this.handleTouchStart.bind(this));
        this.element.removeEventListener('touchmove', this.handleTouchMove.bind(this));
        this.element.removeEventListener('touchend', this.handleTouchEnd.bind(this));
        this.element.removeEventListener('touchcancel', this.handleTouchEnd.bind(this));

        // Mouse events
        this.element.removeEventListener('mousedown', this.handleMouseDown.bind(this));
        this.element.removeEventListener('mousemove', this.handleMouseMove.bind(this));
        this.element.removeEventListener('mouseup', this.handleMouseUp.bind(this));
        this.element.removeEventListener('mouseleave', this.handleMouseUp.bind(this));
    }
}

// ============================================
// Easing Functions
// ============================================

const Easing = {
    linear: t => t,
    easeInQuad: t => t * t,
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInCubic: t => t * t * t,
    easeOutCubic: t => (--t) * t * t + 1,
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    easeInElastic: t => t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * (2 * Math.PI / 3)),
    easeOutElastic: t => t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI / 3)) + 1,
    easeOutBounce: t => {
        if (t < 1 / 2.75) return 7.5625 * t * t;
        if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
        if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
        return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    }
};

// ============================================
// Noise Generation
// ============================================

/**
 * Simple 2D Perlin-like noise
 * Usage: const value = noise2D(x * 0.01, y * 0.01);
 */
const Noise = {
    // Permutation table
    _p: null,

    _init() {
        if (this._p) return;
        this._p = new Uint8Array(512);
        const perm = [];
        for (let i = 0; i < 256; i++) perm[i] = i;
        for (let i = 255; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [perm[i], perm[j]] = [perm[j], perm[i]];
        }
        for (let i = 0; i < 512; i++) {
            this._p[i] = perm[i & 255];
        }
    },

    _fade(t) {
        return t * t * t * (t * (t * 6 - 15) + 10);
    },

    _grad(hash, x, y) {
        const h = hash & 3;
        const u = h < 2 ? x : y;
        const v = h < 2 ? y : x;
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    },

    perlin2D(x, y) {
        this._init();
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;
        x -= Math.floor(x);
        y -= Math.floor(y);
        const u = this._fade(x);
        const v = this._fade(y);
        const A = this._p[X] + Y;
        const B = this._p[X + 1] + Y;
        return lerp(
            lerp(this._grad(this._p[A], x, y), this._grad(this._p[B], x - 1, y), u),
            lerp(this._grad(this._p[A + 1], x, y - 1), this._grad(this._p[B + 1], x - 1, y - 1), u),
            v
        );
    },

    fbm(x, y, octaves = 4, lacunarity = 2, persistence = 0.5) {
        let value = 0;
        let amplitude = 1;
        let frequency = 1;
        let maxValue = 0;

        for (let i = 0; i < octaves; i++) {
            value += amplitude * this.perlin2D(x * frequency, y * frequency);
            maxValue += amplitude;
            amplitude *= persistence;
            frequency *= lacunarity;
        }

        return value / maxValue;
    },

    seed(s) {
        // Simple seeded random for reproducibility
        this._p = null;
        const oldRandom = Math.random;
        let seed = s;
        Math.random = () => {
            seed = (seed * 9301 + 49297) % 233280;
            return seed / 233280;
        };
        this._init();
        Math.random = oldRandom;
    }
};

// ============================================
// URL State Manager
// ============================================

/**
 * URL State Manager for shareable demo configurations
 * Usage: const state = new URLStateManager(); state.get('param'); state.set('param', value);
 */
class URLStateManager {
    constructor(options = {}) {
        this.prefix = options.prefix || '';
        this.defaults = options.defaults || {};
        this.params = new URLSearchParams(window.location.search);
    }

    get(key) {
        const fullKey = this.prefix + key;
        const value = this.params.get(fullKey);
        if (value === null) return this.defaults[key];

        // Try to parse as JSON for complex values
        try {
            return JSON.parse(value);
        } catch {
            return value;
        }
    }

    set(key, value) {
        const fullKey = this.prefix + key;
        if (value === null || value === undefined) {
            this.params.delete(fullKey);
        } else {
            this.params.set(fullKey, typeof value === 'object' ? JSON.stringify(value) : value);
        }
    }

    getAll() {
        const result = { ...this.defaults };
        for (const [key, value] of this.params) {
            const cleanKey = this.prefix ? key.replace(this.prefix, '') : key;
            try {
                result[cleanKey] = JSON.parse(value);
            } catch {
                result[cleanKey] = value;
            }
        }
        return result;
    }

    setAll(params) {
        Object.entries(params).forEach(([key, value]) => {
            this.set(key, value);
        });
    }

    updateURL(replaceState = true) {
        const url = new URL(window.location.href);
        url.search = this.params.toString();
        if (replaceState) {
            window.history.replaceState({}, '', url);
        } else {
            window.history.pushState({}, '', url);
        }
    }

    getShareableURL() {
        const url = new URL(window.location.href);
        url.search = this.params.toString();
        return url.toString();
    }

    copyShareableURL() {
        const url = this.getShareableURL();
        navigator.clipboard.writeText(url).then(() => {
            console.log('CCAB: URL copied to clipboard');
        });
        return url;
    }

    clear() {
        this.params = new URLSearchParams();
    }

    static fromCurrentURL() {
        return new URLStateManager();
    }
}

// ============================================
// Export for use
// ============================================

// For Node.js/CommonJS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        FPSCounter,
        PerformanceMonitor,
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
        rgb,
        Vector2D,
        GridManager,
        StatsDisplay,
        ControlsManager,
        ExportManager,
        TouchHandler,
        Easing,
        Noise,
        URLStateManager
    };
}

// For browser global scope - classes and functions are already global
// since they're defined with 'class' and 'function' at the top level
