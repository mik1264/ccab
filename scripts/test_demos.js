#!/usr/bin/env node
/**
 * Automated demo testing script using Playwright
 * Detects blank screens, JS errors, and rendering issues
 *
 * Usage:
 *   npm install playwright (if not installed)
 *   node scripts/test_demos.js [gallery-name]
 *   node scripts/test_demos.js cosmology-universe
 *   node scripts/test_demos.js --all (test everything - takes a long time)
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const TIMEOUT = 5000; // 5 seconds per page
const RENDER_WAIT = 2000; // Wait 2s for animations to render

async function getHtmlFiles(dir) {
    const files = [];
    try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== 'index.html') {
                files.push(path.join(dir, entry.name));
            }
        }
    } catch (e) {
        // Directory doesn't exist
    }
    return files;
}

async function isCanvasBlank(page) {
    // Check if canvas exists and has content
    return await page.evaluate(() => {
        const canvas = document.querySelector('canvas');
        if (!canvas) return { blank: false, reason: 'no-canvas' };

        const ctx = canvas.getContext('2d');
        if (!ctx) return { blank: true, reason: 'no-context' };

        try {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            // Sample pixels (checking every pixel is too slow)
            let nonBlankPixels = 0;
            const sampleSize = Math.min(10000, data.length / 4);
            const step = Math.floor(data.length / 4 / sampleSize);

            for (let i = 0; i < data.length; i += step * 4) {
                const r = data[i], g = data[i+1], b = data[i+2], a = data[i+3];
                // Check if pixel is not black/transparent
                if (a > 10 && (r > 5 || g > 5 || b > 5)) {
                    nonBlankPixels++;
                }
            }

            const percentFilled = (nonBlankPixels / sampleSize) * 100;
            return {
                blank: percentFilled < 1, // Less than 1% non-blank pixels
                percentFilled: percentFilled.toFixed(2),
                reason: percentFilled < 1 ? 'mostly-blank' : 'has-content'
            };
        } catch (e) {
            return { blank: true, reason: 'canvas-error: ' + e.message };
        }
    });
}

async function testDemo(browser, filePath, baseUrl) {
    const page = await browser.newPage();
    const errors = [];
    const warnings = [];

    // Capture console errors
    page.on('console', msg => {
        if (msg.type() === 'error') {
            errors.push(msg.text());
        } else if (msg.type() === 'warning') {
            warnings.push(msg.text());
        }
    });

    page.on('pageerror', err => {
        errors.push(err.message);
    });

    const relativePath = path.relative('.', filePath);
    const url = `${baseUrl}/${relativePath}`;

    try {
        await page.goto(url, { timeout: TIMEOUT, waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(RENDER_WAIT); // Wait for rendering

        const canvasCheck = await isCanvasBlank(page);

        await page.close();

        return {
            file: relativePath,
            status: errors.length > 0 ? 'error' : (canvasCheck.blank ? 'blank' : 'ok'),
            errors,
            warnings,
            canvas: canvasCheck
        };
    } catch (e) {
        await page.close();
        return {
            file: relativePath,
            status: 'error',
            errors: [e.message],
            warnings,
            canvas: { blank: true, reason: 'load-failed' }
        };
    }
}

async function main() {
    const args = process.argv.slice(2);
    let galleries = [];

    if (args.includes('--all')) {
        // Get all gallery directories
        const entries = fs.readdirSync('.', { withFileTypes: true });
        galleries = entries
            .filter(e => e.isDirectory() && !e.name.startsWith('.') && !e.name.startsWith('_'))
            .filter(e => !['assets', 'templates', 'scripts', 'node_modules'].includes(e.name))
            .map(e => e.name);
    } else if (args.length > 0) {
        galleries = args;
    } else {
        console.log('Usage: node scripts/test_demos.js <gallery-name> [gallery-name...]');
        console.log('       node scripts/test_demos.js --all');
        console.log('');
        console.log('Examples:');
        console.log('  node scripts/test_demos.js cosmology-universe');
        console.log('  node scripts/test_demos.js threejs webgl-shaders');
        process.exit(1);
    }

    console.log('Starting demo tests...');
    console.log('Testing galleries:', galleries.join(', '));
    console.log('');

    // Start local server
    const http = require('http');
    const server = http.createServer((req, res) => {
        let filePath = '.' + decodeURIComponent(req.url);
        if (filePath === './') filePath = './index.html';

        const ext = path.extname(filePath);
        const contentTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.woff2': 'font/woff2',
        };

        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404);
                res.end('Not found');
            } else {
                res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/plain' });
                res.end(content);
            }
        });
    });

    const PORT = 8765;
    server.listen(PORT);
    const baseUrl = `http://localhost:${PORT}`;

    const browser = await chromium.launch({ headless: true });

    const results = { ok: [], blank: [], error: [] };
    let totalTested = 0;

    for (const gallery of galleries) {
        const files = await getHtmlFiles(gallery);
        if (files.length === 0) {
            console.log(`⚠️  ${gallery}: No demo files found`);
            continue;
        }

        console.log(`Testing ${gallery} (${files.length} files)...`);

        for (const file of files) {
            const result = await testDemo(browser, file, baseUrl);
            totalTested++;

            if (result.status === 'ok') {
                results.ok.push(result);
                process.stdout.write('.');
            } else if (result.status === 'blank') {
                results.blank.push(result);
                process.stdout.write('B');
            } else {
                results.error.push(result);
                process.stdout.write('E');
            }
        }
        console.log('');
    }

    await browser.close();
    server.close();

    // Print summary
    console.log('\n' + '='.repeat(60));
    console.log('SUMMARY');
    console.log('='.repeat(60));
    console.log(`Total tested: ${totalTested}`);
    console.log(`✅ OK: ${results.ok.length}`);
    console.log(`⬜ Blank: ${results.blank.length}`);
    console.log(`❌ Errors: ${results.error.length}`);

    if (results.blank.length > 0) {
        console.log('\n' + '-'.repeat(60));
        console.log('BLANK SCREENS:');
        results.blank.forEach(r => {
            console.log(`  ${r.file}`);
            console.log(`    Canvas: ${r.canvas.reason} (${r.canvas.percentFilled || 0}% filled)`);
        });
    }

    if (results.error.length > 0) {
        console.log('\n' + '-'.repeat(60));
        console.log('ERRORS:');
        results.error.forEach(r => {
            console.log(`  ${r.file}`);
            r.errors.forEach(e => console.log(`    ❌ ${e}`));
        });
    }

    // Write detailed report
    const report = {
        timestamp: new Date().toISOString(),
        summary: {
            total: totalTested,
            ok: results.ok.length,
            blank: results.blank.length,
            error: results.error.length
        },
        blank: results.blank,
        errors: results.error
    };

    fs.writeFileSync('demo-test-report.json', JSON.stringify(report, null, 2));
    console.log('\nDetailed report saved to: demo-test-report.json');
}

main().catch(console.error);
