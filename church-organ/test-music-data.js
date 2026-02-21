#!/usr/bin/env node
// Musical Data Quality Validator for Church Organ Pieces
// Tests all piece JS files in pieces/ (excluding repertoire.js and full/)

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const PIECES_DIR = path.join(__dirname, 'pieces');

// ============================================================
// 1. Discover and load all pieces
// ============================================================

const pieceFiles = fs.readdirSync(PIECES_DIR)
    .filter(f => f.endsWith('.js') && f !== 'repertoire.js')
    .filter(f => !fs.statSync(path.join(PIECES_DIR, f)).isDirectory());

console.log(`\nDiscovered ${pieceFiles.length} piece files.\n`);

// Parse all pieces from all files
const allPieces = [];
const errors = [];
const warnings = [];

for (const file of pieceFiles) {
    const filePath = path.join(PIECES_DIR, file);
    const code = fs.readFileSync(filePath, 'utf-8');

    // Extract all const PIECE_XXX declarations
    const pieceRegex = /const\s+(PIECE_\w+)\s*=\s*\{/g;
    let match;
    const pieceNames = [];
    while ((match = pieceRegex.exec(code)) !== null) {
        pieceNames.push(match[1]);
    }

    if (pieceNames.length === 0) {
        errors.push(`[FILE] ${file}: No PIECE_ constants found`);
        continue;
    }

    // Replace 'const' with 'var' so declarations become properties of the sandbox
    const modifiedCode = code.replace(/\bconst\s+(PIECE_\w+)/g, 'var $1');

    // Execute the file in a sandbox to get the actual objects
    const sandbox = {};
    try {
        vm.runInNewContext(modifiedCode, sandbox, { filename: file });
    } catch (e) {
        errors.push(`[FILE] ${file}: Failed to parse - ${e.message}`);
        continue;
    }

    for (const name of pieceNames) {
        if (!sandbox[name]) {
            errors.push(`[FILE] ${file}: ${name} not accessible after eval`);
            continue;
        }
        allPieces.push({
            constName: name,
            file: file,
            data: sandbox[name]
        });
    }
}

console.log(`Loaded ${allPieces.length} pieces from ${pieceFiles.length} files.\n`);

// ============================================================
// 2. Run all validation tests
// ============================================================

const results = [];

for (const piece of allPieces) {
    const { constName, file, data } = piece;
    const label = `${constName} (${file})`;
    const events = data.events || [];
    const tempo = data.tempo || 80;
    const title = data.title || constName;

    const result = {
        constName,
        file,
        title,
        tempo,
        eventCount: events.length,
        divisions: new Set(),
        minT: Infinity,
        maxT: -Infinity,
        minMidi: Infinity,
        maxMidi: -Infinity,
        durationSec: 0,
        errors: [],
        warnings: []
    };

    // ---- Test 1: Event count ----
    if (events.length < 30) {
        result.errors.push(`EVENT_COUNT: Only ${events.length} events (minimum 30)`);
    } else if (events.length < 50) {
        result.warnings.push(`EVENT_COUNT: Only ${events.length} events (ideally 50+)`);
    }

    // ---- Process events ----
    let hasNegativeT = false;
    let prevT = -Infinity;
    let nonMonotonicCount = 0;

    for (let i = 0; i < events.length; i++) {
        const e = events[i];

        // Track divisions
        if (e.div) result.divisions.add(e.div);

        // Track time range
        if (typeof e.t === 'number') {
            if (e.t < result.minT) result.minT = e.t;
            if (e.t > result.maxT) result.maxT = e.t;
        }

        // Track MIDI range
        if (typeof e.midi === 'number') {
            if (e.midi < result.minMidi) result.minMidi = e.midi;
            if (e.midi > result.maxMidi) result.maxMidi = e.midi;
        }

        // ---- Test 2: Time monotonicity ----
        if (typeof e.t === 'number') {
            if (e.t < 0) {
                hasNegativeT = true;
                result.errors.push(`NEGATIVE_T: Event ${i} has t=${e.t}`);
            }
        } else {
            result.errors.push(`MISSING_T: Event ${i} has no numeric t value`);
        }

        // ---- Test 3: MIDI range (24-108) ----
        if (typeof e.midi === 'number') {
            if (!Number.isInteger(e.midi)) {
                result.errors.push(`MIDI_NOT_INT: Event ${i} has midi=${e.midi} (not integer)`);
            }
            if (e.midi < 24 || e.midi > 108) {
                result.errors.push(`MIDI_RANGE: Event ${i} has midi=${e.midi} (outside 24-108)`);
            }
        } else {
            result.errors.push(`MISSING_MIDI: Event ${i} has no numeric midi value`);
        }

        // ---- Test 4: Velocity range (0.0-1.0) ----
        if (e.vel !== undefined) {
            if (typeof e.vel !== 'number') {
                result.errors.push(`VEL_NOT_NUM: Event ${i} has vel=${e.vel}`);
            } else if (e.vel < 0.0 || e.vel > 1.0) {
                result.errors.push(`VEL_RANGE: Event ${i} has vel=${e.vel} (outside 0.0-1.0)`);
            }
        }
        // vel is optional in some pieces

        // ---- Test 5: Duration validity ----
        if (typeof e.dur === 'number') {
            if (e.dur <= 0) {
                result.errors.push(`DUR_INVALID: Event ${i} has dur=${e.dur} (must be > 0)`);
            }
        } else {
            result.errors.push(`MISSING_DUR: Event ${i} has no numeric dur value`);
        }
    }

    // ---- Test 2 (continued): Check last event time ----
    if (result.maxT < 10) {
        result.errors.push(`SHORT_PIECE: max t=${result.maxT.toFixed(2)} (should be at least 10 beats)`);
    }

    // ---- Test 6: Division usage ----
    const divArray = Array.from(result.divisions);
    if (divArray.length === 0) {
        result.errors.push(`NO_DIVISIONS: No divisions found in events`);
    } else if (divArray.length === 1) {
        result.warnings.push(`SINGLE_DIVISION: Only uses "${divArray[0]}" (most organ pieces use 2+)`);
    }

    // ---- Test 7: Duration estimate ----
    if (result.minT !== Infinity && result.maxT !== -Infinity && tempo > 0) {
        result.durationSec = ((result.maxT - result.minT) * 60) / tempo;
        if (result.durationSec < 15) {
            result.warnings.push(`DURATION_SHORT: Estimated ${result.durationSec.toFixed(1)}s (< 15s)`);
        }
        if (result.durationSec > 300) {
            result.warnings.push(`DURATION_LONG: Estimated ${result.durationSec.toFixed(1)}s (> 300s / 5min)`);
        }
    }

    results.push(result);
}

// ============================================================
// 3. Print results
// ============================================================

// ---------- Summary Table ----------
console.log('='.repeat(140));
console.log('SUMMARY TABLE: All Pieces');
console.log('='.repeat(140));

const header = [
    'Piece'.padEnd(40),
    'Events'.padStart(7),
    'Divisions'.padEnd(22),
    'Duration(s)'.padStart(12),
    'MIDI Range'.padStart(11),
    'Issues'.padStart(7)
].join(' | ');

console.log(header);
console.log('-'.repeat(140));

let totalEvents = 0;
let totalErrors = 0;
let totalWarnings = 0;
let piecesWithErrors = 0;
let piecesWithWarnings = 0;

for (const r of results) {
    const name = (r.title || r.constName).substring(0, 40).padEnd(40);
    const evts = String(r.eventCount).padStart(7);
    const divs = Array.from(r.divisions).join(', ').substring(0, 22).padEnd(22);
    const dur = r.durationSec > 0 ? r.durationSec.toFixed(1).padStart(12) : 'N/A'.padStart(12);
    const midi = r.minMidi !== Infinity ? `${r.minMidi}-${r.maxMidi}`.padStart(11) : 'N/A'.padStart(11);
    const issues = (r.errors.length + r.warnings.length);
    const issueStr = issues > 0 ? String(issues).padStart(7) : '     OK';
    const marker = r.errors.length > 0 ? ' *** ERROR' : (r.warnings.length > 0 ? ' * WARN' : '');

    console.log(`${name} | ${evts} | ${divs} | ${dur} | ${midi} | ${issueStr}${marker}`);

    totalEvents += r.eventCount;
    totalErrors += r.errors.length;
    totalWarnings += r.warnings.length;
    if (r.errors.length > 0) piecesWithErrors++;
    if (r.warnings.length > 0) piecesWithWarnings++;
}

console.log('-'.repeat(140));
console.log(`Total: ${results.length} pieces, ${totalEvents} events\n`);

// ---------- Detailed Error/Warning Report ----------
const piecesWithIssues = results.filter(r => r.errors.length > 0 || r.warnings.length > 0);

if (piecesWithIssues.length > 0) {
    console.log('='.repeat(100));
    console.log('DETAILED ISSUES REPORT');
    console.log('='.repeat(100));

    for (const r of piecesWithIssues) {
        console.log(`\n--- ${r.constName} (${r.file}) ---`);
        console.log(`    Title: ${r.title}`);
        for (const e of r.errors) {
            console.log(`    [ERROR] ${e}`);
        }
        for (const w of r.warnings) {
            console.log(`    [WARN]  ${w}`);
        }
    }
}

// ---------- Global Statistics ----------
console.log('\n' + '='.repeat(100));
console.log('GLOBAL STATISTICS');
console.log('='.repeat(100));

console.log(`Total pieces:           ${results.length}`);
console.log(`Total events:           ${totalEvents}`);
console.log(`Pieces with errors:     ${piecesWithErrors}`);
console.log(`Pieces with warnings:   ${piecesWithWarnings}`);
console.log(`Total errors:           ${totalErrors}`);
console.log(`Total warnings:         ${totalWarnings}`);

const eventCounts = results.map(r => r.eventCount).sort((a, b) => a - b);
console.log(`\nEvent count distribution:`);
console.log(`  Min:    ${eventCounts[0]}`);
console.log(`  Median: ${eventCounts[Math.floor(eventCounts.length / 2)]}`);
console.log(`  Max:    ${eventCounts[eventCounts.length - 1]}`);
console.log(`  Mean:   ${(totalEvents / results.length).toFixed(1)}`);

const durations = results.map(r => r.durationSec).filter(d => d > 0).sort((a, b) => a - b);
if (durations.length > 0) {
    console.log(`\nDuration distribution (seconds):`);
    console.log(`  Min:    ${durations[0].toFixed(1)}`);
    console.log(`  Median: ${durations[Math.floor(durations.length / 2)].toFixed(1)}`);
    console.log(`  Max:    ${durations[durations.length - 1].toFixed(1)}`);
    console.log(`  Mean:   ${(durations.reduce((a, b) => a + b, 0) / durations.length).toFixed(1)}`);
}

// Division usage across all pieces
const divisionCounts = {};
for (const r of results) {
    for (const d of r.divisions) {
        divisionCounts[d] = (divisionCounts[d] || 0) + 1;
    }
}
console.log(`\nDivision usage across all pieces:`);
for (const [div, count] of Object.entries(divisionCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${div}: ${count} pieces`);
}

// MIDI range across all pieces
const allMinMidi = Math.min(...results.map(r => r.minMidi).filter(m => m !== Infinity));
const allMaxMidi = Math.max(...results.map(r => r.maxMidi).filter(m => m !== -Infinity));
console.log(`\nGlobal MIDI range: ${allMinMidi} - ${allMaxMidi}`);

// ---------- Final Verdict ----------
console.log('\n' + '='.repeat(100));
if (totalErrors === 0) {
    console.log('VERDICT: ALL TESTS PASSED (no errors)');
    if (totalWarnings > 0) {
        console.log(`  (${totalWarnings} warnings across ${piecesWithWarnings} pieces - see details above)`);
    }
} else {
    console.log(`VERDICT: ${totalErrors} ERRORS found across ${piecesWithErrors} pieces`);
    console.log(`  Plus ${totalWarnings} warnings across ${piecesWithWarnings} pieces`);
}
console.log('='.repeat(100));

// Exit code: non-zero if errors
process.exit(totalErrors > 0 ? 1 : 0);
