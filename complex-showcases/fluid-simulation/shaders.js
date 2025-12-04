// GLSL Shader source code for fluid simulation

export const shaders = {
    // Simple vertex shader for full-screen quad
    vertex: `
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        
        void main() {
            vUv = aPosition * 0.5 + 0.5;
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
    `,

    // Base fragment shader (passthrough)
    base: `
        precision highp float;
        varying vec2 vUv;
        uniform sampler2D uTexture;
        
        void main() {
            gl_FragColor = texture2D(uTexture, vUv);
        }
    `,

    // Clear shader
    clear: `
        precision highp float;
        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform float uValue;
        
        void main() {
            gl_FragColor = texture2D(uTexture, vUv) * uValue;
        }
    `,

    // Splat shader (add dye/velocity)
    splat: `
        precision highp float;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float uAspectRatio;
        uniform vec3 uColor;
        uniform vec2 uPoint;
        uniform float uRadius;
        
        void main() {
            vec2 p = vUv - uPoint.xy;
            p.x *= uAspectRatio;
            vec3 splat = exp(-dot(p, p) / uRadius) * uColor;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
    `,

    // Advection shader (move quantity along velocity field)
    advection: `
        precision highp float;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 uTexelSize;
        uniform float uDt;
        uniform float uDissipation;
        
        vec4 bilerp(sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);
            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }
        
        void main() {
            vec2 coord = vUv - uDt * texture2D(uVelocity, vUv).xy * uTexelSize;
            gl_FragColor = uDissipation * bilerp(uSource, coord, uTexelSize);
            gl_FragColor.a = 1.0;
        }
    `,

    // Divergence shader
    divergence: `
        precision highp float;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform vec2 uTexelSize;
        
        void main() {
            float L = texture2D(uVelocity, vUv - vec2(uTexelSize.x, 0.0)).x;
            float R = texture2D(uVelocity, vUv + vec2(uTexelSize.x, 0.0)).x;
            float T = texture2D(uVelocity, vUv + vec2(0.0, uTexelSize.y)).y;
            float B = texture2D(uVelocity, vUv - vec2(0.0, uTexelSize.y)).y;
            
            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
    `,

    // Pressure solve (Jacobi iteration)
    pressure: `
        precision highp float;
        varying vec2 vUv;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;
        uniform vec2 uTexelSize;
        
        void main() {
            float L = texture2D(uPressure, vUv - vec2(uTexelSize.x, 0.0)).x;
            float R = texture2D(uPressure, vUv + vec2(uTexelSize.x, 0.0)).x;
            float T = texture2D(uPressure, vUv + vec2(0.0, uTexelSize.y)).x;
            float B = texture2D(uPressure, vUv - vec2(0.0, uTexelSize.y)).x;
            float C = texture2D(uDivergence, vUv).x;
            
            float pressure = (L + R + B + T - C) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
    `,

    // Gradient subtraction
    gradientSubtract: `
        precision highp float;
        varying vec2 vUv;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;
        uniform vec2 uTexelSize;
        
        void main() {
            float L = texture2D(uPressure, vUv - vec2(uTexelSize.x, 0.0)).x;
            float R = texture2D(uPressure, vUv + vec2(uTexelSize.x, 0.0)).x;
            float T = texture2D(uPressure, vUv + vec2(0.0, uTexelSize.y)).x;
            float B = texture2D(uPressure, vUv - vec2(0.0, uTexelSize.y)).x;
            
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B) * 0.5;
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
    `,

    // Display shader with color enhancement
    display: `
        precision highp float;
        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform float uBrightness;
        
        void main() {
            vec3 color = texture2D(uTexture, vUv).rgb;
            color = pow(color, vec3(1.0 / 2.2)); // Gamma correction
            color *= uBrightness;
            gl_FragColor = vec4(color, 1.0);
        }
    `
};
