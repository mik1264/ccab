# Web Audio API Gallery Documentation

## Overview
Real-time audio visualizations and synthesizers using the Web Audio API, featuring FFT analysis, waveform displays, 3D audio-reactive graphics, beat detection, and interactive instruments.

**Total Demos:** 40
**Path:** `/web-audio-api/demos/`
**Technology:** Web Audio API, Canvas 2D/WebGL, Three.js, Tone.js
**Categories:** Spectrum Analyzers, Waveforms, 3D Visualizations, Beat Detection, Synthesizers

## Demos

### Spectrum Analyzers (01-10)

#### 01-classic-bars.html
**Description:** Classic frequency bar visualizer.
**Key Features:** FFT analysis, frequency bins, animated bars
**Techniques:** AnalyserNode, getByteFrequencyData

#### 02-circular-spectrum.html
**Description:** Circular spectrum analyzer with radial bars.
**Key Features:** Polar coordinates, circular layout
**Techniques:** Radial transformation, frequency mapping

#### 03-symmetrical-bars.html
**Description:** Mirrored frequency bars creating symmetrical patterns.
**Key Features:** Bilateral symmetry, reflection effects
**Techniques:** Mirrored rendering, stereo analysis

#### 04-waterfall-spectrum.html
**Description:** Scrolling waterfall spectrogram display.
**Key Features:** Time-frequency visualization, history buffer
**Techniques:** Canvas scrolling, color mapping

#### 05-radial-equalizer.html
**Description:** Radial equalizer with frequency rings.
**Key Features:** Concentric circles, frequency bands
**Techniques:** Ring-based visualization, logarithmic scaling

#### 06-particle-frequency.html
**Description:** Particles responding to frequency amplitudes.
**Key Features:** Particle systems, frequency-driven motion
**Techniques:** Particle dynamics, frequency mapping

#### 07-spiral-spectrum.html
**Description:** Frequency data displayed as spiral pattern.
**Key Features:** Spiral mathematics, continuous flow
**Techniques:** Archimedean spiral, frequency unwrapping

#### 08-flower-visualizer.html
**Description:** Flower-like patterns from audio frequencies.
**Key Features:** Petal generation, organic shapes
**Techniques:** Polar roses, frequency modulation

#### 09-dual-spectrum.html
**Description:** Dual channel spectrum for stereo analysis.
**Key Features:** Left/right channels, stereo comparison
**Techniques:** Channel splitting, dual analyzers

#### 10-kaleidoscope-fft.html
**Description:** Kaleidoscope patterns from FFT data.
**Key Features:** Symmetrical patterns, rotation
**Techniques:** Multiple reflections, FFT-driven geometry

### Waveform Visualizers (11-18)

#### 11-oscilloscope.html
**Description:** Classic oscilloscope waveform display.
**Key Features:** Time-domain visualization, trigger level
**Techniques:** getByteTimeDomainData, waveform rendering

#### 12-lissajous.html
**Description:** Lissajous curves from stereo audio.
**Key Features:** X-Y mode display, phase relationships
**Techniques:** Stereo correlation, parametric curves

#### 13-circular-waveform.html
**Description:** Waveform wrapped in circular pattern.
**Key Features:** Polar waveform, circular buffer
**Techniques:** Circular mapping, continuous rotation

#### 14-ribbon-wave.html
**Description:** Flowing ribbon representing waveform.
**Key Features:** Smooth curves, ribbon physics
**Techniques:** Catmull-Rom splines, ribbon geometry

#### 15-dual-oscilloscope.html
**Description:** Dual-channel oscilloscope display.
**Key Features:** Two-channel view, synchronization
**Techniques:** Dual buffers, channel comparison

#### 16-wave-tunnel.html
**Description:** 3D tunnel effect from waveform data.
**Key Features:** Depth illusion, tunnel perspective
**Techniques:** Z-axis projection, ring generation

#### 17-waveform-particles.html
**Description:** Particles following waveform shape.
**Key Features:** Particle trails, waveform tracking
**Techniques:** Particle emission, path following

#### 18-morphing-wave.html
**Description:** Waveform morphing between shapes.
**Key Features:** Shape interpolation, smooth transitions
**Techniques:** Morph targets, blend factors

### 3D Visualizations (19-26)

#### 19-3d-bars.html
**Description:** 3D frequency bars in perspective.
**Key Features:** 3D bar chart, perspective view
**Techniques:** Three.js integration, depth sorting

#### 20-3d-sphere.html
**Description:** Audio-reactive 3D sphere deformation.
**Key Features:** Sphere displacement, frequency mapping
**Techniques:** Vertex displacement, spherical harmonics

#### 21-3d-tunnel.html
**Description:** Flying through audio-reactive 3D tunnel.
**Key Features:** Tunnel generation, forward motion
**Techniques:** Procedural geometry, camera movement

#### 22-3d-landscape.html
**Description:** Terrain deformed by audio frequencies.
**Key Features:** Height map generation, terrain mesh
**Techniques:** Displacement mapping, LOD terrain

#### 23-3d-cube-matrix.html
**Description:** Matrix of 3D cubes responding to audio.
**Key Features:** Cube grid, frequency distribution
**Techniques:** Instanced rendering, grid mapping

#### 24-3d-wave-surface.html
**Description:** 3D surface waves from audio input.
**Key Features:** Wave propagation, surface deformation
**Techniques:** Wave equations, mesh deformation

#### 25-3d-gyroscope.html
**Description:** Gyroscope rotation controlled by audio.
**Key Features:** Multi-axis rotation, frequency control
**Techniques:** Quaternion rotation, frequency bands

#### 26-3d-galaxy.html
**Description:** Galaxy simulation with audio-driven motion.
**Key Features:** Spiral arms, particle clouds
**Techniques:** Galaxy dynamics, audio modulation

### Beat Detection & Rhythm (27-32)

#### 27-kick-detector.html
**Description:** Kick drum detection and visualization.
**Key Features:** Low-frequency detection, threshold analysis
**Techniques:** Energy detection, onset detection

#### 28-beat-circles.html
**Description:** Circles pulsing with beat detection.
**Key Features:** Beat synchronization, pulse effects
**Techniques:** Beat tracking, visual feedback

#### 29-rhythm-grid.html
**Description:** Grid-based rhythm pattern display.
**Key Features:** Beat grid, pattern recognition
**Techniques:** Tempo detection, grid quantization

#### 30-beat-particles.html
**Description:** Particles emitted on beat detection.
**Key Features:** Beat-triggered emission, particle bursts
**Techniques:** Onset detection, particle systems

#### 31-bpm-analyzer.html
**Description:** Real-time BPM detection and display.
**Key Features:** Tempo analysis, BPM calculation
**Techniques:** Autocorrelation, tempo tracking

#### 32-multi-band-beat.html
**Description:** Multi-band beat detection visualization.
**Key Features:** Frequency band isolation, multi-beat tracking
**Techniques:** Band-pass filtering, parallel detection

### Musical Interfaces (33-40)

#### 33-piano-roll.html
**Description:** Piano roll display for MIDI visualization.
**Key Features:** Note display, timeline scrolling
**Techniques:** MIDI parsing, piano roll rendering

#### 34-midi-particles.html
**Description:** Particles triggered by MIDI notes.
**Key Features:** MIDI input, note-to-particle mapping
**Techniques:** Web MIDI API, particle generation

#### 35-velocity-spectrum.html
**Description:** Spectrum with velocity-sensitive response.
**Key Features:** Velocity mapping, dynamic range
**Techniques:** Amplitude scaling, velocity curves

#### 36-midi-fireworks.html
**Description:** Firework effects triggered by MIDI events.
**Key Features:** MIDI triggers, firework physics
**Techniques:** Particle explosions, MIDI mapping

#### 37-synth-keyboard.html
**Description:** Interactive synthesizer keyboard.
**Key Features:** Playable keys, oscillator control
**Techniques:** OscillatorNode, keyboard mapping

#### 38-step-sequencer.html
**Description:** 16-step drum sequencer interface.
**Key Features:** Pattern programming, tempo control
**Techniques:** Scheduling, pattern playback

#### 39-fm-synth.html
**Description:** FM synthesis with visual feedback.
**Key Features:** FM parameters, modulation display
**Techniques:** FM synthesis, operator routing

#### 40-modular-synth.html
**Description:** Modular synthesizer with patchable modules.
**Key Features:** Module routing, parameter control
**Techniques:** Audio graph, modular architecture

## Technical Implementation

### Audio Context Setup
```javascript
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
analyser.fftSize = 2048;
```

### Microphone Access
```javascript
navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
    });
```

### FFT Data Processing
```javascript
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteFrequencyData(dataArray);
```

## Common Techniques

- **FFT Analysis:** Fast Fourier Transform for frequency domain
- **Waveform Analysis:** Time-domain signal processing
- **Beat Detection:** Onset detection algorithms
- **Audio Synthesis:** Oscillators, filters, effects
- **3D Audio:** Spatial audio positioning
- **MIDI Integration:** Web MIDI API for instruments

## Performance Optimization

- RequestAnimationFrame for smooth rendering
- Canvas optimization techniques
- WebGL for complex visualizations
- Audio worklets for processing
- Buffer management for real-time audio

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Requires user interaction for audio
- Mobile: Touch interaction for audio context