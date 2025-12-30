/**
 * CCAB Sonification Framework
 * Audio descriptions and sonification of visual effects
 * Version: 1.0.0
 *
 * Features:
 * - Map visual data to audio parameters
 * - Spatial audio positioning
 * - Event-based sound triggers
 * - Accessibility audio descriptions
 */

class Sonification {
    constructor(options = {}) {
        this.options = {
            enabled: options.enabled !== false,
            volume: options.volume || 0.3,
            spatialAudio: options.spatialAudio !== false,
            minFrequency: options.minFrequency || 100,
            maxFrequency: options.maxFrequency || 2000,
            waveType: options.waveType || 'sine'
        };

        this.audioContext = null;
        this.masterGain = null;
        this.isInitialized = false;
        this.oscillators = new Map();
        this.sounds = new Map();

        // Require user interaction to initialize
        this.initPromise = null;
    }

    /**
     * Initialize audio context (must be called after user interaction)
     */
    async init() {
        if (this.isInitialized) return true;

        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // Master gain
            this.masterGain = this.audioContext.createGain();
            this.masterGain.gain.value = this.options.volume;
            this.masterGain.connect(this.audioContext.destination);

            // Create spatial listener if supported
            if (this.options.spatialAudio && this.audioContext.listener) {
                this.setupSpatialAudio();
            }

            this.isInitialized = true;
            return true;
        } catch (e) {
            console.warn('Sonification: Audio context not available', e);
            return false;
        }
    }

    setupSpatialAudio() {
        const listener = this.audioContext.listener;
        if (listener.positionX) {
            // Modern API
            listener.positionX.value = 0;
            listener.positionY.value = 0;
            listener.positionZ.value = 0;
        } else if (listener.setPosition) {
            // Legacy API
            listener.setPosition(0, 0, 0);
        }
    }

    /**
     * Ensure audio is ready (call on user interaction)
     */
    async ensureReady() {
        if (!this.isInitialized) {
            await this.init();
        }
        if (this.audioContext && this.audioContext.state === 'suspended') {
            await this.audioContext.resume();
        }
        return this.isInitialized;
    }

    /**
     * Set master volume
     */
    setVolume(volume) {
        this.options.volume = Math.max(0, Math.min(1, volume));
        if (this.masterGain) {
            this.masterGain.gain.setValueAtTime(
                this.options.volume,
                this.audioContext.currentTime
            );
        }
    }

    /**
     * Enable/disable sonification
     */
    setEnabled(enabled) {
        this.options.enabled = enabled;
        if (!enabled && this.masterGain) {
            this.masterGain.gain.setValueAtTime(0, this.audioContext.currentTime);
        } else if (enabled && this.masterGain) {
            this.masterGain.gain.setValueAtTime(
                this.options.volume,
                this.audioContext.currentTime
            );
        }
    }

    // ==================
    // Data Sonification
    // ==================

    /**
     * Map a value to a frequency
     */
    valueToFrequency(value, min = 0, max = 1) {
        const normalized = (value - min) / (max - min);
        const clamped = Math.max(0, Math.min(1, normalized));
        // Logarithmic mapping for more musical intervals
        const logMin = Math.log(this.options.minFrequency);
        const logMax = Math.log(this.options.maxFrequency);
        return Math.exp(logMin + (logMax - logMin) * clamped);
    }

    /**
     * Play a tone representing a value
     */
    playTone(value, min = 0, max = 1, duration = 0.1) {
        if (!this.options.enabled || !this.isInitialized) return;

        const freq = this.valueToFrequency(value, min, max);
        this.playFrequency(freq, duration);
    }

    /**
     * Play a specific frequency
     */
    playFrequency(frequency, duration = 0.1, options = {}) {
        if (!this.options.enabled || !this.isInitialized) return;

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.type = options.waveType || this.options.waveType;
        osc.frequency.value = frequency;

        // Envelope
        const now = this.audioContext.currentTime;
        const attack = options.attack || 0.01;
        const release = options.release || 0.05;
        const volume = options.volume || 0.5;

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(volume, now + attack);
        gain.gain.linearRampToValueAtTime(0, now + duration - release);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + duration);

        return osc;
    }

    /**
     * Create a continuous tone that can be updated
     */
    createContinuousTone(id, initialFrequency = 440) {
        if (!this.isInitialized) return null;

        // Stop existing tone with same ID
        this.stopContinuousTone(id);

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.type = this.options.waveType;
        osc.frequency.value = initialFrequency;
        gain.gain.value = 0.3;

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start();

        this.oscillators.set(id, { osc, gain });
        return { osc, gain };
    }

    /**
     * Update continuous tone frequency
     */
    updateContinuousTone(id, value, min = 0, max = 1) {
        const tone = this.oscillators.get(id);
        if (!tone) return;

        const freq = this.valueToFrequency(value, min, max);
        tone.osc.frequency.setTargetAtTime(
            freq,
            this.audioContext.currentTime,
            0.05
        );
    }

    /**
     * Stop continuous tone
     */
    stopContinuousTone(id) {
        const tone = this.oscillators.get(id);
        if (tone) {
            tone.gain.gain.setTargetAtTime(0, this.audioContext.currentTime, 0.05);
            setTimeout(() => {
                try {
                    tone.osc.stop();
                } catch (e) {}
            }, 100);
            this.oscillators.delete(id);
        }
    }

    // ==================
    // Event Sounds
    // ==================

    /**
     * Play a click/tap sound
     */
    playClick() {
        if (!this.options.enabled || !this.isInitialized) return;

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.frequency.value = 1000;
        osc.type = 'square';

        const now = this.audioContext.currentTime;
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 0.05);
    }

    /**
     * Play success/completion sound
     */
    playSuccess() {
        if (!this.options.enabled || !this.isInitialized) return;

        [523.25, 659.25, 783.99].forEach((freq, i) => {
            setTimeout(() => {
                this.playFrequency(freq, 0.15, { volume: 0.4 });
            }, i * 100);
        });
    }

    /**
     * Play error/warning sound
     */
    playError() {
        if (!this.options.enabled || !this.isInitialized) return;

        this.playFrequency(200, 0.3, { waveType: 'sawtooth', volume: 0.3 });
    }

    /**
     * Play collision/impact sound
     */
    playCollision(intensity = 0.5) {
        if (!this.options.enabled || !this.isInitialized) return;

        const noise = this.createNoise(0.05 + intensity * 0.1);
        const freq = 100 + intensity * 200;
        this.playFrequency(freq, 0.05, { volume: 0.3 * intensity });
    }

    /**
     * Create white noise
     */
    createNoise(duration = 0.1) {
        if (!this.isInitialized) return null;

        const bufferSize = this.audioContext.sampleRate * duration;
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const output = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }

        const noise = this.audioContext.createBufferSource();
        noise.buffer = buffer;

        const gain = this.audioContext.createGain();
        gain.gain.value = 0.1;

        noise.connect(gain);
        gain.connect(this.masterGain);
        noise.start();

        return noise;
    }

    // ==================
    // Spatial Audio
    // ==================

    /**
     * Create a spatialized sound source
     */
    createSpatialSource(x = 0, y = 0, z = 0) {
        if (!this.isInitialized || !this.options.spatialAudio) return null;

        const panner = this.audioContext.createPanner();
        panner.panningModel = 'HRTF';
        panner.distanceModel = 'inverse';
        panner.refDistance = 1;
        panner.maxDistance = 100;
        panner.rolloffFactor = 1;

        this.setSpatialPosition(panner, x, y, z);

        panner.connect(this.masterGain);
        return panner;
    }

    setSpatialPosition(panner, x, y, z) {
        if (panner.positionX) {
            panner.positionX.value = x;
            panner.positionY.value = y;
            panner.positionZ.value = z;
        } else if (panner.setPosition) {
            panner.setPosition(x, y, z);
        }
    }

    /**
     * Play sound at a 2D position (mapped to 3D)
     */
    playSpatialTone(x, y, frequency, duration = 0.1) {
        if (!this.options.enabled || !this.isInitialized) return;

        // Map 2D coordinates (-1 to 1) to 3D space
        const panner = this.createSpatialSource(x * 5, 0, -y * 5 + 2);
        if (!panner) return;

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.frequency.value = frequency;
        osc.type = 'sine';

        const now = this.audioContext.currentTime;
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.linearRampToValueAtTime(0, now + duration);

        osc.connect(gain);
        gain.connect(panner);

        osc.start(now);
        osc.stop(now + duration);
    }

    // ==================
    // Demo-Specific Sonification
    // ==================

    /**
     * Sonify particle system
     */
    sonifyParticles(particles, options = {}) {
        if (!this.options.enabled) return;

        const count = particles.length;
        const avgVelocity = particles.reduce((sum, p) => {
            return sum + Math.sqrt((p.vx || 0) ** 2 + (p.vy || 0) ** 2);
        }, 0) / count || 0;

        // Volume based on count
        const volume = Math.min(0.5, count / 1000);

        // Frequency based on velocity
        if (!this.oscillators.has('particles')) {
            this.createContinuousTone('particles', 200);
        }
        this.updateContinuousTone('particles', avgVelocity, 0, 10);

        // Adjust volume
        const tone = this.oscillators.get('particles');
        if (tone) {
            tone.gain.gain.setTargetAtTime(volume, this.audioContext.currentTime, 0.1);
        }
    }

    /**
     * Sonify cellular automata
     */
    sonifyCellularAutomata(grid, options = {}) {
        if (!this.options.enabled || !this.isInitialized) return;

        const width = grid[0]?.length || 0;
        const height = grid.length || 0;
        const totalCells = width * height;

        // Count alive cells
        let aliveCells = 0;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (grid[y][x]) aliveCells++;
            }
        }

        const density = aliveCells / totalCells;

        // Play tone based on density
        if (!this.oscillators.has('cells')) {
            this.createContinuousTone('cells', 300);
        }
        this.updateContinuousTone('cells', density, 0, 0.5);

        // Volume based on activity
        const tone = this.oscillators.get('cells');
        if (tone) {
            const vol = 0.1 + density * 0.3;
            tone.gain.gain.setTargetAtTime(vol, this.audioContext.currentTime, 0.1);
        }
    }

    /**
     * Sonify physics simulation
     */
    sonifyPhysics(objects, options = {}) {
        if (!this.options.enabled || !this.isInitialized) return;

        // Calculate total kinetic energy
        let totalEnergy = 0;
        objects.forEach(obj => {
            const v = Math.sqrt((obj.vx || 0) ** 2 + (obj.vy || 0) ** 2);
            totalEnergy += 0.5 * (obj.mass || 1) * v * v;
        });

        // Map energy to sound
        if (!this.oscillators.has('physics')) {
            this.createContinuousTone('physics', 150);
        }
        this.updateContinuousTone('physics', totalEnergy, 0, 10000);
    }

    // ==================
    // Cleanup
    // ==================

    /**
     * Stop all sounds
     */
    stopAll() {
        this.oscillators.forEach((tone, id) => {
            this.stopContinuousTone(id);
        });
    }

    /**
     * Destroy and cleanup
     */
    destroy() {
        this.stopAll();
        if (this.audioContext) {
            this.audioContext.close();
        }
        this.isInitialized = false;
    }
}

/**
 * Create sonification controls UI
 */
function createSonificationControls(sonification) {
    const container = document.createElement('div');
    container.className = 'sonification-controls';
    container.innerHTML = `
        <label class="sonification-toggle">
            <input type="checkbox" id="sonification-enabled" checked>
            <span>🔊 Audio Descriptions</span>
        </label>
        <div class="sonification-volume">
            <label for="sonification-volume">Volume:</label>
            <input type="range" id="sonification-volume" min="0" max="100" value="30">
        </div>
    `;

    container.style.cssText = `
        position: fixed;
        bottom: 70px;
        left: 20px;
        background: rgba(30, 30, 30, 0.9);
        padding: 12px;
        border-radius: 8px;
        color: #e0e0e0;
        font-size: 13px;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        gap: 8px;
    `;

    const checkbox = container.querySelector('#sonification-enabled');
    checkbox.addEventListener('change', async () => {
        if (checkbox.checked) {
            await sonification.ensureReady();
        }
        sonification.setEnabled(checkbox.checked);
    });

    const volumeSlider = container.querySelector('#sonification-volume');
    volumeSlider.addEventListener('input', () => {
        sonification.setVolume(volumeSlider.value / 100);
    });

    document.body.appendChild(container);
    return container;
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Sonification, createSonificationControls };
}
