/**
 * Unit Tests for demo-utils.js
 *
 * Can be run in browser via test-demo-utils.html or via Node.js
 * Usage: node tests/test-demo-utils.js
 */

// Simple test framework
class TestRunner {
    constructor() {
        this.tests = [];
        this.passed = 0;
        this.failed = 0;
        this.errors = [];
    }

    test(name, fn) {
        this.tests.push({ name, fn });
    }

    async run() {
        console.log('Running demo-utils.js unit tests...\n');
        console.log('='.repeat(60));

        for (const { name, fn } of this.tests) {
            try {
                await fn();
                this.passed++;
                console.log(`  ✓ ${name}`);
            } catch (error) {
                this.failed++;
                this.errors.push({ name, error: error.message });
                console.log(`  ✗ ${name}`);
                console.log(`    Error: ${error.message}`);
            }
        }

        console.log('\n' + '='.repeat(60));
        console.log(`Results: ${this.passed} passed, ${this.failed} failed`);
        console.log('='.repeat(60));

        return this.failed === 0;
    }
}

// Assertion helpers
function assertEqual(actual, expected, message = '') {
    if (actual !== expected) {
        throw new Error(`${message} Expected ${expected}, got ${actual}`);
    }
}

function assertAlmostEqual(actual, expected, tolerance = 0.0001, message = '') {
    if (Math.abs(actual - expected) > tolerance) {
        throw new Error(`${message} Expected ~${expected}, got ${actual}`);
    }
}

function assertTrue(condition, message = 'Expected true') {
    if (!condition) {
        throw new Error(message);
    }
}

function assertFalse(condition, message = 'Expected false') {
    if (condition) {
        throw new Error(message);
    }
}

function assertThrows(fn, message = 'Expected function to throw') {
    let threw = false;
    try {
        fn();
    } catch (e) {
        threw = true;
    }
    if (!threw) {
        throw new Error(message);
    }
}

function assertDeepEqual(actual, expected, message = '') {
    const actualStr = JSON.stringify(actual);
    const expectedStr = JSON.stringify(expected);
    if (actualStr !== expectedStr) {
        throw new Error(`${message} Expected ${expectedStr}, got ${actualStr}`);
    }
}

// Load demo-utils in Node.js environment
let demoUtils;
if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    demoUtils = require('../assets/js/demo-utils.js');
} else {
    // Browser environment - assume globals are available
    demoUtils = {
        clamp, lerp, map, random, randomInt, degToRad, radToDeg,
        hslToRgb, rgb, checkWebGLSupport, checkWebGL2Support,
        FPSCounter, CanvasManager, ErrorManager, LoadingManager, AnimationLoop
    };
}

// Extract functions for testing
const {
    clamp, lerp, map, random, randomInt, degToRad, radToDeg,
    hslToRgb, rgb
} = demoUtils;

// ============================================
// Test Suite
// ============================================

const runner = new TestRunner();

// --- clamp() tests ---
runner.test('clamp: value within range returns unchanged', () => {
    assertEqual(clamp(5, 0, 10), 5);
});

runner.test('clamp: value below min returns min', () => {
    assertEqual(clamp(-5, 0, 10), 0);
});

runner.test('clamp: value above max returns max', () => {
    assertEqual(clamp(15, 0, 10), 10);
});

runner.test('clamp: value at min boundary', () => {
    assertEqual(clamp(0, 0, 10), 0);
});

runner.test('clamp: value at max boundary', () => {
    assertEqual(clamp(10, 0, 10), 10);
});

runner.test('clamp: negative range', () => {
    assertEqual(clamp(-5, -10, -1), -5);
});

runner.test('clamp: handles floating point', () => {
    assertAlmostEqual(clamp(0.5, 0, 1), 0.5);
});

// --- lerp() tests ---
runner.test('lerp: t=0 returns a', () => {
    assertEqual(lerp(0, 10, 0), 0);
});

runner.test('lerp: t=1 returns b', () => {
    assertEqual(lerp(0, 10, 1), 10);
});

runner.test('lerp: t=0.5 returns midpoint', () => {
    assertEqual(lerp(0, 10, 0.5), 5);
});

runner.test('lerp: t=0.25 returns quarter', () => {
    assertEqual(lerp(0, 100, 0.25), 25);
});

runner.test('lerp: negative values', () => {
    assertEqual(lerp(-10, 10, 0.5), 0);
});

runner.test('lerp: t clamped below 0', () => {
    assertEqual(lerp(0, 10, -0.5), 0);
});

runner.test('lerp: t clamped above 1', () => {
    assertEqual(lerp(0, 10, 1.5), 10);
});

// --- map() tests ---
runner.test('map: maps midpoint correctly', () => {
    assertEqual(map(5, 0, 10, 0, 100), 50);
});

runner.test('map: maps min to outMin', () => {
    assertEqual(map(0, 0, 10, 0, 100), 0);
});

runner.test('map: maps max to outMax', () => {
    assertEqual(map(10, 0, 10, 0, 100), 100);
});

runner.test('map: maps to different range', () => {
    assertEqual(map(50, 0, 100, 0, 1), 0.5);
});

runner.test('map: handles inverted output range', () => {
    assertEqual(map(0, 0, 10, 100, 0), 100);
    assertEqual(map(10, 0, 10, 100, 0), 0);
});

runner.test('map: handles negative ranges', () => {
    assertEqual(map(0, -10, 10, 0, 100), 50);
});

// --- random() tests ---
runner.test('random: returns value in range (min, max)', () => {
    for (let i = 0; i < 100; i++) {
        const val = random(5, 10);
        assertTrue(val >= 5 && val < 10, `Value ${val} out of range [5, 10)`);
    }
});

runner.test('random: single arg uses 0 as min', () => {
    for (let i = 0; i < 100; i++) {
        const val = random(10);
        assertTrue(val >= 0 && val < 10, `Value ${val} out of range [0, 10)`);
    }
});

runner.test('random: returns different values (probabilistic)', () => {
    const values = new Set();
    for (let i = 0; i < 100; i++) {
        values.add(random(0, 1000000));
    }
    assertTrue(values.size > 90, 'Expected mostly unique random values');
});

// --- randomInt() tests ---
runner.test('randomInt: returns integers', () => {
    for (let i = 0; i < 100; i++) {
        const val = randomInt(0, 10);
        assertTrue(Number.isInteger(val), `Expected integer, got ${val}`);
    }
});

runner.test('randomInt: returns values in inclusive range', () => {
    const seen = new Set();
    for (let i = 0; i < 1000; i++) {
        seen.add(randomInt(1, 3));
    }
    assertTrue(seen.has(1), 'Should include min value 1');
    assertTrue(seen.has(2), 'Should include middle value 2');
    assertTrue(seen.has(3), 'Should include max value 3');
    assertEqual(seen.size, 3, 'Should only have values 1, 2, 3');
});

// --- degToRad() tests ---
runner.test('degToRad: 0 degrees = 0 radians', () => {
    assertEqual(degToRad(0), 0);
});

runner.test('degToRad: 180 degrees = PI radians', () => {
    assertAlmostEqual(degToRad(180), Math.PI);
});

runner.test('degToRad: 90 degrees = PI/2 radians', () => {
    assertAlmostEqual(degToRad(90), Math.PI / 2);
});

runner.test('degToRad: 360 degrees = 2*PI radians', () => {
    assertAlmostEqual(degToRad(360), Math.PI * 2);
});

runner.test('degToRad: negative degrees', () => {
    assertAlmostEqual(degToRad(-90), -Math.PI / 2);
});

// --- radToDeg() tests ---
runner.test('radToDeg: 0 radians = 0 degrees', () => {
    assertEqual(radToDeg(0), 0);
});

runner.test('radToDeg: PI radians = 180 degrees', () => {
    assertAlmostEqual(radToDeg(Math.PI), 180);
});

runner.test('radToDeg: PI/2 radians = 90 degrees', () => {
    assertAlmostEqual(radToDeg(Math.PI / 2), 90);
});

runner.test('radToDeg: 2*PI radians = 360 degrees', () => {
    assertAlmostEqual(radToDeg(Math.PI * 2), 360);
});

runner.test('radToDeg and degToRad are inverse operations', () => {
    const original = 45;
    const result = radToDeg(degToRad(original));
    assertAlmostEqual(result, original);
});

// --- hslToRgb() tests ---
runner.test('hslToRgb: pure red (0, 100, 50)', () => {
    const result = hslToRgb(0, 100, 50);
    assertDeepEqual(result, { r: 255, g: 0, b: 0 });
});

runner.test('hslToRgb: pure green (120, 100, 50)', () => {
    const result = hslToRgb(120, 100, 50);
    assertDeepEqual(result, { r: 0, g: 255, b: 0 });
});

runner.test('hslToRgb: pure blue (240, 100, 50)', () => {
    const result = hslToRgb(240, 100, 50);
    assertDeepEqual(result, { r: 0, g: 0, b: 255 });
});

runner.test('hslToRgb: white (0, 0, 100)', () => {
    const result = hslToRgb(0, 0, 100);
    assertDeepEqual(result, { r: 255, g: 255, b: 255 });
});

runner.test('hslToRgb: black (0, 0, 0)', () => {
    const result = hslToRgb(0, 0, 0);
    assertDeepEqual(result, { r: 0, g: 0, b: 0 });
});

runner.test('hslToRgb: gray (0, 0, 50)', () => {
    const result = hslToRgb(0, 0, 50);
    assertEqual(result.r, result.g);
    assertEqual(result.g, result.b);
    assertAlmostEqual(result.r, 128, 1);
});

runner.test('hslToRgb: yellow (60, 100, 50)', () => {
    const result = hslToRgb(60, 100, 50);
    assertDeepEqual(result, { r: 255, g: 255, b: 0 });
});

runner.test('hslToRgb: cyan (180, 100, 50)', () => {
    const result = hslToRgb(180, 100, 50);
    assertDeepEqual(result, { r: 0, g: 255, b: 255 });
});

runner.test('hslToRgb: magenta (300, 100, 50)', () => {
    const result = hslToRgb(300, 100, 50);
    assertDeepEqual(result, { r: 255, g: 0, b: 255 });
});

// --- rgb() tests ---
runner.test('rgb: creates rgb string', () => {
    assertEqual(rgb(255, 128, 64), 'rgb(255, 128, 64)');
});

runner.test('rgb: creates rgba string with alpha', () => {
    assertEqual(rgb(255, 128, 64, 0.5), 'rgba(255, 128, 64, 0.5)');
});

runner.test('rgb: alpha=1 uses rgb format', () => {
    assertEqual(rgb(100, 100, 100, 1), 'rgb(100, 100, 100)');
});

runner.test('rgb: default alpha is 1', () => {
    assertEqual(rgb(0, 0, 0), 'rgb(0, 0, 0)');
});

// Run tests
if (typeof module !== 'undefined' && require.main === module) {
    // Node.js direct execution
    runner.run().then(success => {
        process.exit(success ? 0 : 1);
    });
} else if (typeof window !== 'undefined') {
    // Browser environment
    window.runTests = () => runner.run();
}

// Export for use in other test files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TestRunner, runner, assertEqual, assertAlmostEqual, assertTrue, assertFalse, assertThrows, assertDeepEqual };
}
