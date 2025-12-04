import { shaders } from './shaders.js';

class FluidSimulation {
    constructor(canvas) {
        this.canvas = canvas;
        this.config = {
            simResolution: 128,
            dyeResolution: 512,
            densityDissipation: 0.98,
            velocityDissipation: 0.99,
            pressureIterations: 20,
            splatRadius: 0.005,
            brightness: 1.5
        };

        this.pointers = [];
        this.gl = null;
        this.programs = {};
        this.frameBuffers = {};

        this.init();
    }

    init() {
        // Get WebGL context
        this.gl = this.canvas.getContext('webgl', {
            alpha: false,
            depth: false,
            stencil: false,
            antialias: false,
            preserveDrawingBuffer: false
        });

        if (!this.gl) {
            alert('WebGL not supported!');
            return;
        }

        const gl = this.gl;

        // Enable float textures
        const ext = gl.getExtension('OES_texture_float');
        if (!ext) {
            alert('Float textures not supported!');
            return;
        }

        // Compile shaders
        this.programs.clear = this.createProgram(shaders.vertex, shaders.clear);
        this.programs.splat = this.createProgram(shaders.vertex, shaders.splat);
        this.programs.advection = this.createProgram(shaders.vertex, shaders.advection);
        this.programs.divergence = this.createProgram(shaders.vertex, shaders.divergence);
        this.programs.pressure = this.createProgram(shaders.vertex, shaders.pressure);
        this.programs.gradientSubtract = this.createProgram(shaders.vertex, shaders.gradientSubtract);
        this.programs.display = this.createProgram(shaders.vertex, shaders.display);

        // Create full-screen quad
        this.createQuad();

        // Initialize framebuffers
        this.initFramebuffers();

        // Setup interaction
        this.setupInteraction();

        // Start animation loop
        this.lastTime = Date.now();
        this.update();
    }

    createProgram(vertexShader, fragmentShader) {
        const gl = this.gl;

        const vs = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vs, vertexShader);
        gl.compileShader(vs);

        if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
            console.error('Vertex shader error:', gl.getShaderInfoLog(vs));
            return null;
        }

        const fs = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fs, fragmentShader);
        gl.compileShader(fs);

        if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
            console.error('Fragment shader error:', gl.getShaderInfoLog(fs));
            return null;
        }

        const program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program link error:', gl.getProgramInfoLog(program));
            return null;
        }

        // Cache uniform locations
        const uniforms = {};
        const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
            const uniformName = gl.getActiveUniform(program, i).name;
            uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
        }

        return { program, uniforms };
    }

    createQuad() {
        const gl = this.gl;
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        this.quadBuffer = buffer;
    }

    createFBO(w, h, type = this.gl.UNSIGNED_BYTE) {
        const gl = this.gl;
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, type, null);

        const fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        gl.viewport(0, 0, w, h);
        gl.clear(gl.COLOR_BUFFER_BIT);

        return {
            texture,
            fbo,
            width: w,
            height: h,
            attach(id) {
                gl.activeTexture(gl.TEXTURE0 + id);
                gl.bindTexture(gl.TEXTURE_2D, texture);
                return id;
            }
        };
    }

    createDoubleFBO(w, h, type) {
        let fbo1 = this.createFBO(w, h, type);
        let fbo2 = this.createFBO(w, h, type);

        return {
            width: w,
            height: h,
            read: fbo1,
            write: fbo2,
            swap() {
                let temp = fbo1;
                fbo1 = fbo2;
                fbo2 = temp;
                this.read = fbo1;
                this.write = fbo2;
            }
        };
    }

    initFramebuffers() {
        const simRes = this.config.simResolution;
        const dyeRes = this.config.dyeResolution;
        const texType = this.gl.FLOAT;

        this.frameBuffers.velocity = this.createDoubleFBO(simRes, simRes, texType);
        this.frameBuffers.density = this.createDoubleFBO(dyeRes, dyeRes, texType);
        this.frameBuffers.divergence = this.createFBO(simRes, simRes, texType);
        this.frameBuffers.pressure = this.createDoubleFBO(simRes, simRes, texType);
    }

    setupInteraction() {
        this.canvas.addEventListener('mousedown', e => {
            const pointer = {
                id: -1,
                x: e.offsetX,
                y: e.offsetY,
                dx: 0,
                dy: 0,
                down: true,
                moved: false,
                color: [Math.random(), Math.random(), Math.random()]
            };
            this.pointers.push(pointer);
        });

        this.canvas.addEventListener('mousemove', e => {
            const pointer = this.pointers.find(p => p.id === -1);
            if (pointer && pointer.down) {
                pointer.moved = pointer.moved || Math.abs(pointer.dx) > 0 || Math.abs(pointer.dy) > 0;
                pointer.dx = (e.offsetX - pointer.x) * 10.0;
                pointer.dy = (e.offsetY - pointer.y) * 10.0;
                pointer.x = e.offsetX;
                pointer.y = e.offsetY;
            }
        });

        this.canvas.addEventListener('mouseup', () => {
            this.pointers = this.pointers.filter(p => p.id !== -1);
        });

        // Touch support
        this.canvas.addEventListener('touchstart', e => {
            e.preventDefault();
            const touches = e.targetTouches;
            for (let i = 0; i < touches.length; i++) {
                const touch = touches[i];
                const pointer = {
                    id: touch.identifier,
                    x: touch.pageX,
                    y: touch.pageY,
                    dx: 0,
                    dy: 0,
                    down: true,
                    moved: false,
                    color: [Math.random(), Math.random(), Math.random()]
                };
                this.pointers.push(pointer);
            }
        });

        this.canvas.addEventListener('touchmove', e => {
            e.preventDefault();
            const touches = e.targetTouches;
            for (let i = 0; i < touches.length; i++) {
                const touch = touches[i];
                const pointer = this.pointers.find(p => p.id === touch.identifier);
                if (pointer && pointer.down) {
                    pointer.moved = pointer.moved || Math.abs(pointer.dx) > 0 || Math.abs(pointer.dy) > 0;
                    pointer.dx = (touch.pageX - pointer.x) * 10.0;
                    pointer.dy = (touch.pageY - pointer.y) * 10.0;
                    pointer.x = touch.pageX;
                    pointer.y = touch.pageY;
                }
            }
        });

        this.canvas.addEventListener('touchend', e => {
            const touches = e.changedTouches;
            for (let i = 0; i < touches.length; i++) {
                const touch = touches[i];
                this.pointers = this.pointers.filter(p => p.id !== touch.identifier);
            }
        });
    }

    update() {
        const now = Date.now();
        let dt = (now - this.lastTime) / 1000;
        dt = Math.min(dt, 0.016); // Cap at 60fps
        this.lastTime = now;

        this.resizeCanvas();
        this.applyInputs();
        this.step(dt);
        this.render();

        requestAnimationFrame(() => this.update());
    }

    resizeCanvas() {
        const width = this.canvas.clientWidth;
        const height = this.canvas.clientHeight;

        if (this.canvas.width !== width || this.canvas.height !== height) {
            this.canvas.width = width;
            this.canvas.height = height;
        }
    }

    applyInputs() {
        const gl = this.gl;

        this.pointers.forEach(pointer => {
            if (pointer.moved) {
                this.splat(
                    pointer.x / this.canvas.width,
                    1.0 - pointer.y / this.canvas.height,
                    pointer.dx,
                    -pointer.dy,
                    pointer.color
                );
                pointer.moved = false;
            }
        });
    }

    splat(x, y, dx, dy, color) {
        const gl = this.gl;
        const prog = this.programs.splat;

        gl.useProgram(prog.program);
        gl.uniform1i(prog.uniforms.uTarget, this.frameBuffers.velocity.read.attach(0));
        gl.uniform1f(prog.uniforms.uAspectRatio, this.canvas.width / this.canvas.height);
        gl.uniform2f(prog.uniforms.uPoint, x, y);
        gl.uniform3f(prog.uniforms.uColor, dx, dy, 0.0);
        gl.uniform1f(prog.uniforms.uRadius, this.config.splatRadius);
        this.blit(this.frameBuffers.velocity.write.fbo);
        this.frameBuffers.velocity.swap();

        gl.uniform1i(prog.uniforms.uTarget, this.frameBuffers.density.read.attach(0));
        gl.uniform3f(prog.uniforms.uColor, color[0], color[1], color[2]);
        this.blit(this.frameBuffers.density.write.fbo);
        this.frameBuffers.density.swap();
    }

    step(dt) {
        const gl = this.gl;

        // Advect velocity
        gl.useProgram(this.programs.advection.program);
        gl.viewport(0, 0, this.frameBuffers.velocity.width, this.frameBuffers.velocity.height);
        gl.uniform1i(this.programs.advection.uniforms.uVelocity, this.frameBuffers.velocity.read.attach(0));
        gl.uniform1i(this.programs.advection.uniforms.uSource, this.frameBuffers.velocity.read.attach(0));
        gl.uniform2f(this.programs.advection.uniforms.uTexelSize, 1.0 / this.frameBuffers.velocity.width, 1.0 / this.frameBuffers.velocity.height);
        gl.uniform1f(this.programs.advection.uniforms.uDt, dt);
        gl.uniform1f(this.programs.advection.uniforms.uDissipation, this.config.velocityDissipation);
        this.blit(this.frameBuffers.velocity.write.fbo);
        this.frameBuffers.velocity.swap();

        // Advect density
        gl.viewport(0, 0, this.frameBuffers.density.width, this.frameBuffers.density.height);
        gl.uniform1i(this.programs.advection.uniforms.uVelocity, this.frameBuffers.velocity.read.attach(0));
        gl.uniform1i(this.programs.advection.uniforms.uSource, this.frameBuffers.density.read.attach(1));
        gl.uniform2f(this.programs.advection.uniforms.uTexelSize, 1.0 / this.frameBuffers.density.width, 1.0 / this.frameBuffers.density.height);
        gl.uniform1f(this.programs.advection.uniforms.uDissipation, this.config.densityDissipation);
        this.blit(this.frameBuffers.density.write.fbo);
        this.frameBuffers.density.swap();

        // Compute divergence
        gl.useProgram(this.programs.divergence.program);
        gl.viewport(0, 0, this.frameBuffers.divergence.width, this.frameBuffers.divergence.height);
        gl.uniform1i(this.programs.divergence.uniforms.uVelocity, this.frameBuffers.velocity.read.attach(0));
        gl.uniform2f(this.programs.divergence.uniforms.uTexelSize, 1.0 / this.frameBuffers.velocity.width, 1.0 / this.frameBuffers.velocity.height);
        this.blit(this.frameBuffers.divergence.fbo);

        // Clear pressure
        gl.useProgram(this.programs.clear.program);
        gl.viewport(0, 0, this.frameBuffers.pressure.width, this.frameBuffers.pressure.height);
        gl.uniform1i(this.programs.clear.uniforms.uTexture, this.frameBuffers.pressure.read.attach(0));
        gl.uniform1f(this.programs.clear.uniforms.uValue, 0.0);
        this.blit(this.frameBuffers.pressure.write.fbo);
        this.frameBuffers.pressure.swap();

        // Solve for pressure
        gl.useProgram(this.programs.pressure.program);
        gl.uniform2f(this.programs.pressure.uniforms.uTexelSize, 1.0 / this.frameBuffers.pressure.width, 1.0 / this.frameBuffers.pressure.height);
        gl.uniform1i(this.programs.pressure.uniforms.uDivergence, this.frameBuffers.divergence.attach(0));

        for (let i = 0; i < this.config.pressureIterations; i++) {
            gl.uniform1i(this.programs.pressure.uniforms.uPressure, this.frameBuffers.pressure.read.attach(1));
            this.blit(this.frameBuffers.pressure.write.fbo);
            this.frameBuffers.pressure.swap();
        }

        // Subtract pressure gradient
        gl.useProgram(this.programs.gradientSubtract.program);
        gl.viewport(0, 0, this.frameBuffers.velocity.width, this.frameBuffers.velocity.height);
        gl.uniform1i(this.programs.gradientSubtract.uniforms.uPressure, this.frameBuffers.pressure.read.attach(0));
        gl.uniform1i(this.programs.gradientSubtract.uniforms.uVelocity, this.frameBuffers.velocity.read.attach(1));
        gl.uniform2f(this.programs.gradientSubtract.uniforms.uTexelSize, 1.0 / this.frameBuffers.velocity.width, 1.0 / this.frameBuffers.velocity.height);
        this.blit(this.frameBuffers.velocity.write.fbo);
        this.frameBuffers.velocity.swap();
    }

    render() {
        const gl = this.gl;

        gl.useProgram(this.programs.display.program);
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        gl.uniform1i(this.programs.display.uniforms.uTexture, this.frameBuffers.density.read.attach(0));
        gl.uniform1f(this.programs.display.uniforms.uBrightness, this.config.brightness);
        this.blit(null);
    }

    blit(destination) {
        const gl = this.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.quadBuffer);
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(0);
        gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    }

    updateConfig(key, value) {
        this.config[key] = value;
        if (key === 'simResolution' || key === 'dyeResolution') {
            this.initFramebuffers();
        }
    }
}

export { FluidSimulation };
