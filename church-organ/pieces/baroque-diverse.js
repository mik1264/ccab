// ============================================================
// Handel - Alla Hornpipe from Water Music, HWV 349
// ============================================================
// Suite No. 2 in D major, movement 2 (Alla Hornpipe)
// Time signature: 3/2 (three half-notes per bar), tempo ~112 BPM
// Key: D major (F#, C#)
// Form: ABA ternary (fanfare style)
// The famous celebratory hornpipe - joyous, stately, brilliant
//
// MIDI reference:
//   D2=38, A2=45, B2=47, D3=50, E3=52, F#3=54, G3=55, A3=57
//   B3=59, C#4=61, D4=62, E4=64, F#4=66, G4=67, A4=69, B4=71
//   C#5=73, D5=74, E5=76, F#5=78, G5=79, A5=81, B5=83
// ============================================================

const PIECE_HORNPIPE = {
    title: "Hornpipe (Water Music)",
    composer: "G.F. Handel",
    tempo: 112,
    timeSignature: '3/2',
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-trumpet8'],
        swell: [],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8']
    },
    events: [
        // ============================================================
        // SECTION A - The famous Hornpipe theme
        // 3/2 time: 6 beats per bar (each beat = quarter note at 112)
        // The iconic opening: upbeat pickup into the bold D major melody
        // ============================================================

        // --- Bar 1: Opening D major fanfare ---
        // Melody: D5(dotted half) D5(quarter) D5(quarter) E5(quarter)
        { t: 0,   div: 'great', midi: 74, dur: 3 },    // D5 dotted half
        { t: 3,   div: 'great', midi: 74, dur: 1 },    // D5 quarter
        { t: 4,   div: 'great', midi: 74, dur: 1 },    // D5 quarter
        { t: 5,   div: 'great', midi: 76, dur: 1 },    // E5 quarter
        // Pedal: D
        { t: 0,   div: 'pedal', midi: 50, dur: 6 },    // D3

        // --- Bar 2: F#5 dotted half, E5 quarter, D5 quarter, C#5 quarter ---
        { t: 6,   div: 'great', midi: 78, dur: 3 },    // F#5 dotted half
        { t: 9,   div: 'great', midi: 76, dur: 1 },    // E5 quarter
        { t: 10,  div: 'great', midi: 74, dur: 1 },    // D5 quarter
        { t: 11,  div: 'great', midi: 73, dur: 1 },    // C#5 quarter
        // Pedal: A
        { t: 6,   div: 'pedal', midi: 45, dur: 6 },    // A2

        // --- Bar 3: D5(half) F#5(quarter) A5(dotted quarter) G5(eighth) F#5(quarter) ---
        { t: 12,  div: 'great', midi: 74, dur: 2 },    // D5 half
        { t: 14,  div: 'great', midi: 78, dur: 1 },    // F#5 quarter
        { t: 15,  div: 'great', midi: 81, dur: 1.5 },  // A5 dotted quarter
        { t: 16.5, div: 'great', midi: 79, dur: 0.5 }, // G5 eighth
        { t: 17,  div: 'great', midi: 78, dur: 1 },    // F#5 quarter
        // Pedal: D
        { t: 12,  div: 'pedal', midi: 50, dur: 3 },    // D3
        { t: 15,  div: 'pedal', midi: 50, dur: 3 },    // D3

        // --- Bar 4: E5(half) G5(quarter) F#5(dotted quarter) E5(eighth) D5(quarter) ---
        { t: 18,  div: 'great', midi: 76, dur: 2 },    // E5 half
        { t: 20,  div: 'great', midi: 79, dur: 1 },    // G5 quarter
        { t: 21,  div: 'great', midi: 78, dur: 1.5 },  // F#5 dotted quarter
        { t: 22.5, div: 'great', midi: 76, dur: 0.5 }, // E5 eighth
        { t: 23,  div: 'great', midi: 74, dur: 1 },    // D5 quarter
        // Pedal: G then A
        { t: 18,  div: 'pedal', midi: 43, dur: 3 },    // G2
        { t: 21,  div: 'pedal', midi: 45, dur: 3 },    // A2

        // --- Bar 5: D5 dotted half, C#5 quarter, B4 quarter, A4 quarter ---
        { t: 24,  div: 'great', midi: 74, dur: 3 },    // D5 dotted half
        { t: 27,  div: 'great', midi: 73, dur: 1 },    // C#5 quarter
        { t: 28,  div: 'great', midi: 71, dur: 1 },    // B4 quarter
        { t: 29,  div: 'great', midi: 69, dur: 1 },    // A4 quarter
        // Pedal: D
        { t: 24,  div: 'pedal', midi: 50, dur: 6 },    // D3

        // --- Bar 6: B4(half) D5(quarter) A4(dotted quarter) B4(eighth) C#5(quarter) ---
        { t: 30,  div: 'great', midi: 71, dur: 2 },    // B4 half
        { t: 32,  div: 'great', midi: 74, dur: 1 },    // D5 quarter
        { t: 33,  div: 'great', midi: 69, dur: 1.5 },  // A4 dotted quarter
        { t: 34.5, div: 'great', midi: 71, dur: 0.5 }, // B4 eighth
        { t: 35,  div: 'great', midi: 73, dur: 1 },    // C#5 quarter
        // Pedal: G then A
        { t: 30,  div: 'pedal', midi: 43, dur: 3 },    // G2
        { t: 33,  div: 'pedal', midi: 45, dur: 3 },    // A2

        // --- Bar 7: D5 whole tied to half (6 beats - strong cadence) ---
        { t: 36,  div: 'great', midi: 74, dur: 6 },    // D5 whole bar
        // Pedal: D
        { t: 36,  div: 'pedal', midi: 50, dur: 6 },    // D3

        // --- Bar 8: Second phrase - A5(dotted half) A5(quarter) A5(quarter) B5(quarter) ---
        { t: 42,  div: 'great', midi: 81, dur: 3 },    // A5 dotted half
        { t: 45,  div: 'great', midi: 81, dur: 1 },    // A5 quarter
        { t: 46,  div: 'great', midi: 81, dur: 1 },    // A5 quarter
        { t: 47,  div: 'great', midi: 83, dur: 1 },    // B5 quarter
        // Pedal: A
        { t: 42,  div: 'pedal', midi: 45, dur: 6 },    // A2

        // --- Bar 9: A5(dotted half) G5(quarter) F#5(quarter) E5(quarter) ---
        { t: 48,  div: 'great', midi: 81, dur: 3 },    // A5 dotted half
        { t: 51,  div: 'great', midi: 79, dur: 1 },    // G5 quarter
        { t: 52,  div: 'great', midi: 78, dur: 1 },    // F#5 quarter
        { t: 53,  div: 'great', midi: 76, dur: 1 },    // E5 quarter
        // Pedal: D
        { t: 48,  div: 'pedal', midi: 50, dur: 6 },    // D3

        // --- Bar 10: F#5(half) A5(quarter) D5(dotted quarter) E5(eighth) F#5(quarter) ---
        { t: 54,  div: 'great', midi: 78, dur: 2 },    // F#5 half
        { t: 56,  div: 'great', midi: 81, dur: 1 },    // A5 quarter
        { t: 57,  div: 'great', midi: 74, dur: 1.5 },  // D5 dotted quarter
        { t: 58.5, div: 'great', midi: 76, dur: 0.5 }, // E5 eighth
        { t: 59,  div: 'great', midi: 78, dur: 1 },    // F#5 quarter
        // Pedal: D then A
        { t: 54,  div: 'pedal', midi: 50, dur: 3 },    // D3
        { t: 57,  div: 'pedal', midi: 45, dur: 3 },    // A2

        // --- Bar 11: G5(half) F#5(quarter) E5(dotted quarter) D5(eighth) C#5(quarter) ---
        { t: 60,  div: 'great', midi: 79, dur: 2 },    // G5 half
        { t: 62,  div: 'great', midi: 78, dur: 1 },    // F#5 quarter
        { t: 63,  div: 'great', midi: 76, dur: 1.5 },  // E5 dotted quarter
        { t: 64.5, div: 'great', midi: 74, dur: 0.5 }, // D5 eighth
        { t: 65,  div: 'great', midi: 73, dur: 1 },    // C#5 quarter
        // Pedal: G then A
        { t: 60,  div: 'pedal', midi: 43, dur: 3 },    // G2
        { t: 63,  div: 'pedal', midi: 45, dur: 3 },    // A2

        // --- Bar 12: D5 whole tied to half (final cadence) ---
        { t: 66,  div: 'great', midi: 74, dur: 6 },    // D5 whole bar
        // Pedal: D
        { t: 66,  div: 'pedal', midi: 50, dur: 6 },    // D3

        // ============================================================
        // SECTION B - Middle section, lighter character
        // ============================================================

        // --- Bar 13: B4(half) C#5(quarter) D5(dotted quarter) C#5(eighth) B4(quarter) ---
        { t: 72,  div: 'great', midi: 71, dur: 2 },    // B4 half
        { t: 74,  div: 'great', midi: 73, dur: 1 },    // C#5 quarter
        { t: 75,  div: 'great', midi: 74, dur: 1.5 },  // D5 dotted quarter
        { t: 76.5, div: 'great', midi: 73, dur: 0.5 }, // C#5 eighth
        { t: 77,  div: 'great', midi: 71, dur: 1 },    // B4 quarter
        // Pedal: G
        { t: 72,  div: 'pedal', midi: 43, dur: 6 },    // G2

        // --- Bar 14: A4(half) B4(quarter) C#5(dotted quarter) B4(eighth) A4(quarter) ---
        { t: 78,  div: 'great', midi: 69, dur: 2 },    // A4 half
        { t: 80,  div: 'great', midi: 71, dur: 1 },    // B4 quarter
        { t: 81,  div: 'great', midi: 73, dur: 1.5 },  // C#5 dotted quarter
        { t: 82.5, div: 'great', midi: 71, dur: 0.5 }, // B4 eighth
        { t: 83,  div: 'great', midi: 69, dur: 1 },    // A4 quarter
        // Pedal: A
        { t: 78,  div: 'pedal', midi: 45, dur: 6 },    // A2

        // --- Bar 15: G4(half) A4(quarter) B4(half) C#5(quarter) ---
        { t: 84,  div: 'great', midi: 67, dur: 2 },    // G4 half
        { t: 86,  div: 'great', midi: 69, dur: 1 },    // A4 quarter
        { t: 87,  div: 'great', midi: 71, dur: 2 },    // B4 half
        { t: 89,  div: 'great', midi: 73, dur: 1 },    // C#5 quarter
        // Pedal: E then A
        { t: 84,  div: 'pedal', midi: 40, dur: 3 },    // E2
        { t: 87,  div: 'pedal', midi: 45, dur: 3 },    // A2

        // --- Bar 16: D5(dotted half) C#5(quarter) B4(quarter) A4(quarter) ---
        { t: 90,  div: 'great', midi: 74, dur: 3 },    // D5 dotted half
        { t: 93,  div: 'great', midi: 73, dur: 1 },    // C#5 quarter
        { t: 94,  div: 'great', midi: 71, dur: 1 },    // B4 quarter
        { t: 95,  div: 'great', midi: 69, dur: 1 },    // A4 quarter
        // Pedal: D
        { t: 90,  div: 'pedal', midi: 50, dur: 6 },    // D3

        // ============================================================
        // SECTION A' - Return of hornpipe theme with ornamentation
        // ============================================================

        // --- Bar 17: D5(dotted half) D5(quarter) D5(quarter) E5(quarter) ---
        { t: 96,   div: 'great', midi: 74, dur: 3 },   // D5 dotted half
        { t: 99,   div: 'great', midi: 74, dur: 1 },   // D5 quarter
        { t: 100,  div: 'great', midi: 74, dur: 1 },   // D5 quarter
        { t: 101,  div: 'great', midi: 76, dur: 1 },   // E5 quarter
        { t: 96,   div: 'pedal', midi: 50, dur: 6 },   // D3

        // --- Bar 18: F#5(dotted half) E5(quarter) D5(quarter) C#5(quarter) ---
        { t: 102,  div: 'great', midi: 78, dur: 3 },   // F#5 dotted half
        { t: 105,  div: 'great', midi: 76, dur: 1 },   // E5 quarter
        { t: 106,  div: 'great', midi: 74, dur: 1 },   // D5 quarter
        { t: 107,  div: 'great', midi: 73, dur: 1 },   // C#5 quarter
        { t: 102,  div: 'pedal', midi: 45, dur: 6 },   // A2

        // --- Bar 19: D5(half) F#5(quarter) A5(half) F#5(quarter) ---
        { t: 108,  div: 'great', midi: 74, dur: 2 },   // D5 half
        { t: 110,  div: 'great', midi: 78, dur: 1 },   // F#5 quarter
        { t: 111,  div: 'great', midi: 81, dur: 2 },   // A5 half
        { t: 113,  div: 'great', midi: 78, dur: 1 },   // F#5 quarter
        { t: 108,  div: 'pedal', midi: 50, dur: 3 },   // D3
        { t: 111,  div: 'pedal', midi: 50, dur: 3 },   // D3

        // --- Bar 20: E5(half) G5(quarter) F#5(half) E5(quarter) ---
        { t: 114,  div: 'great', midi: 76, dur: 2 },   // E5 half
        { t: 116,  div: 'great', midi: 79, dur: 1 },   // G5 quarter
        { t: 117,  div: 'great', midi: 78, dur: 2 },   // F#5 half
        { t: 119,  div: 'great', midi: 76, dur: 1 },   // E5 quarter
        { t: 114,  div: 'pedal', midi: 43, dur: 3 },   // G2
        { t: 117,  div: 'pedal', midi: 45, dur: 3 },   // A2

        // --- Bar 21: Final D major chord ---
        { t: 120,  div: 'great', midi: 74, dur: 6 },   // D5
        { t: 120,  div: 'great', midi: 69, dur: 6 },   // A4
        { t: 120,  div: 'great', midi: 66, dur: 6 },   // F#4
        { t: 120,  div: 'pedal', midi: 50, dur: 6 },   // D3
        { t: 120,  div: 'pedal', midi: 38, dur: 6 },   // D2
    ]
};


// ============================================================
// Vierne - Carillon de Westminster, Op. 54 No. 6
// ============================================================
// Fantasia on the Westminster Quarters chime melody
// Time signature: 9/4 (compound triple), tempo ~72 BPM
// Key: starts in E major (chime), builds to D major
// Structure: Chime statement -> variations with increasing grandeur
//
// Westminster Quarters chime notes (in E major):
//   Change 1: G#4 - F#4 - E4 - B3
//   Change 2: E4 - G#4 - F#4 - B3
//   Change 3: E4 - F#4 - G#4 - E4
//   Change 4: G#4 - E4 - F#4 - B3
//   Change 5: B3 - F#4 - G#4 - E4
//
// MIDI reference:
//   B2=47, E3=52, G#3=56, B3=59, C#4=61, D4=62, E4=64
//   F#4=66, G#4=68, A4=69, B4=71, C#5=73, D5=74, E5=76
//   F#5=78, G#5=80, A5=81, B5=83
// ============================================================

const PIECE_WESTMINSTER = {
    title: "Carillon de Westminster",
    composer: "Louis Vierne",
    tempo: 72,
    timeSignature: '9/4',
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-spitzflute4', 'gt-mixture', 'gt-trumpet8'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-principal4'],
        choir: ['ch-gedeckt8', 'ch-rohrflute4'],
        pedal: ['pd-principal16', 'pd-subbass16', 'pd-trombone16']
    },
    events: [
        // ============================================================
        // SECTION 1: The Westminster Chime Statement (Choir, gentle)
        // The four chime changes played as the clock would sound them
        // Each note is a dotted half (3 beats), last note is whole (4 beats)
        // ============================================================

        // --- Change 1 (quarter past): G#4 - F#4 - E4 - B3 ---
        { t: 0,   div: 'choir', midi: 68, dur: 3 },    // G#4
        { t: 3,   div: 'choir', midi: 66, dur: 3 },    // F#4
        { t: 6,   div: 'choir', midi: 64, dur: 3 },    // E4
        { t: 9,   div: 'choir', midi: 59, dur: 4 },    // B3 (held longer)
        // Soft pedal note on B
        { t: 9,   div: 'pedal', midi: 47, dur: 4 },    // B2

        // --- Change 2 (half past): E4 - G#4 - F#4 - B3 ---
        { t: 14,  div: 'choir', midi: 64, dur: 3 },    // E4
        { t: 17,  div: 'choir', midi: 68, dur: 3 },    // G#4
        { t: 20,  div: 'choir', midi: 66, dur: 3 },    // F#4
        { t: 23,  div: 'choir', midi: 59, dur: 4 },    // B3
        { t: 23,  div: 'pedal', midi: 47, dur: 4 },    // B2

        // --- Change 3 (three quarters): E4 - F#4 - G#4 - E4 ---
        { t: 28,  div: 'choir', midi: 64, dur: 3 },    // E4
        { t: 31,  div: 'choir', midi: 66, dur: 3 },    // F#4
        { t: 34,  div: 'choir', midi: 68, dur: 3 },    // G#4
        { t: 37,  div: 'choir', midi: 64, dur: 4 },    // E4 (resolves to tonic)
        { t: 37,  div: 'pedal', midi: 52, dur: 4 },    // E3

        // --- Change 4 (the hour, part 1): G#4 - E4 - F#4 - B3 ---
        { t: 42,  div: 'choir', midi: 68, dur: 3 },    // G#4
        { t: 45,  div: 'choir', midi: 64, dur: 3 },    // E4
        { t: 48,  div: 'choir', midi: 66, dur: 3 },    // F#4
        { t: 51,  div: 'choir', midi: 59, dur: 4 },    // B3
        { t: 51,  div: 'pedal', midi: 47, dur: 4 },    // B2

        // --- Change 5 (the hour, part 2): B3 - F#4 - G#4 - E4 ---
        { t: 56,  div: 'choir', midi: 59, dur: 3 },    // B3
        { t: 59,  div: 'choir', midi: 66, dur: 3 },    // F#4
        { t: 62,  div: 'choir', midi: 68, dur: 3 },    // G#4
        { t: 65,  div: 'choir', midi: 64, dur: 5 },    // E4 (long final note)
        { t: 65,  div: 'pedal', midi: 52, dur: 5 },    // E3

        // ============================================================
        // SECTION 2: First Variation - Great organ, grander
        // Chime theme transposed up an octave with harmonization
        // ============================================================

        // --- Variation theme on Great: Change 1 up octave with chords ---
        // G#5 - F#5 - E5 - B4 with full harmony
        { t: 72,  div: 'great', midi: 80, dur: 3 },    // G#5
        { t: 72,  div: 'great', midi: 76, dur: 3 },    // E5 (harmony)
        { t: 72,  div: 'swell', midi: 68, dur: 3 },    // G#4 (doubled)
        { t: 75,  div: 'great', midi: 78, dur: 3 },    // F#5
        { t: 75,  div: 'great', midi: 73, dur: 3 },    // C#5 (harmony)
        { t: 75,  div: 'swell', midi: 66, dur: 3 },    // F#4
        { t: 78,  div: 'great', midi: 76, dur: 3 },    // E5
        { t: 78,  div: 'great', midi: 71, dur: 3 },    // B4 (harmony)
        { t: 78,  div: 'swell', midi: 64, dur: 3 },    // E4
        { t: 81,  div: 'great', midi: 71, dur: 4 },    // B4
        { t: 81,  div: 'great', midi: 66, dur: 4 },    // F#4 (harmony)
        { t: 81,  div: 'swell', midi: 59, dur: 4 },    // B3
        // Pedal bass
        { t: 72,  div: 'pedal', midi: 52, dur: 6 },    // E3
        { t: 78,  div: 'pedal', midi: 47, dur: 7 },    // B2

        // --- Change 2 variation: E5 - G#5 - F#5 - B4 ---
        { t: 86,  div: 'great', midi: 76, dur: 3 },    // E5
        { t: 86,  div: 'great', midi: 71, dur: 3 },    // B4 (harmony)
        { t: 86,  div: 'swell', midi: 64, dur: 3 },    // E4
        { t: 89,  div: 'great', midi: 80, dur: 3 },    // G#5
        { t: 89,  div: 'great', midi: 76, dur: 3 },    // E5 (harmony)
        { t: 89,  div: 'swell', midi: 68, dur: 3 },    // G#4
        { t: 92,  div: 'great', midi: 78, dur: 3 },    // F#5
        { t: 92,  div: 'great', midi: 73, dur: 3 },    // C#5 (harmony)
        { t: 92,  div: 'swell', midi: 66, dur: 3 },    // F#4
        { t: 95,  div: 'great', midi: 71, dur: 4 },    // B4
        { t: 95,  div: 'great', midi: 66, dur: 4 },    // F#4 (harmony)
        { t: 95,  div: 'swell', midi: 59, dur: 4 },    // B3
        // Pedal
        { t: 86,  div: 'pedal', midi: 52, dur: 6 },    // E3
        { t: 92,  div: 'pedal', midi: 47, dur: 7 },    // B2

        // --- Change 3 variation: E5 - F#5 - G#5 - E5 (climax) ---
        { t: 100, div: 'great', midi: 76, dur: 3 },    // E5
        { t: 100, div: 'great', midi: 71, dur: 3 },    // B4
        { t: 100, div: 'swell', midi: 64, dur: 3 },    // E4
        { t: 103, div: 'great', midi: 78, dur: 3 },    // F#5
        { t: 103, div: 'great', midi: 73, dur: 3 },    // C#5
        { t: 103, div: 'swell', midi: 66, dur: 3 },    // F#4
        { t: 106, div: 'great', midi: 80, dur: 3 },    // G#5
        { t: 106, div: 'great', midi: 76, dur: 3 },    // E5
        { t: 106, div: 'swell', midi: 68, dur: 3 },    // G#4
        { t: 109, div: 'great', midi: 76, dur: 5 },    // E5 (resolving)
        { t: 109, div: 'great', midi: 71, dur: 5 },    // B4
        { t: 109, div: 'swell', midi: 64, dur: 5 },    // E4
        // Pedal
        { t: 100, div: 'pedal', midi: 52, dur: 6 },    // E3
        { t: 106, div: 'pedal', midi: 52, dur: 8 },    // E3

        // ============================================================
        // SECTION 3: Grand finale - full organ, D major
        // Transposed chime becomes the triumphant ending
        // ============================================================

        // --- Massive D major chords building the final statement ---
        // The chime motif in D major: F#5 - E5 - D5 - A4
        { t: 116, div: 'great', midi: 78, dur: 3 },    // F#5
        { t: 116, div: 'great', midi: 74, dur: 3 },    // D5
        { t: 116, div: 'great', midi: 69, dur: 3 },    // A4
        { t: 116, div: 'swell', midi: 66, dur: 3 },    // F#4
        { t: 116, div: 'swell', midi: 62, dur: 3 },    // D4
        { t: 119, div: 'great', midi: 76, dur: 3 },    // E5
        { t: 119, div: 'great', midi: 73, dur: 3 },    // C#5
        { t: 119, div: 'great', midi: 69, dur: 3 },    // A4
        { t: 119, div: 'swell', midi: 64, dur: 3 },    // E4
        { t: 122, div: 'great', midi: 74, dur: 3 },    // D5
        { t: 122, div: 'great', midi: 69, dur: 3 },    // A4
        { t: 122, div: 'great', midi: 66, dur: 3 },    // F#4
        { t: 122, div: 'swell', midi: 62, dur: 3 },    // D4
        { t: 125, div: 'great', midi: 69, dur: 6 },    // A4 (sustained)
        { t: 125, div: 'great', midi: 66, dur: 6 },    // F#4
        { t: 125, div: 'great', midi: 62, dur: 6 },    // D4
        { t: 125, div: 'swell', midi: 57, dur: 6 },    // A3
        // Pedal: D major bass
        { t: 116, div: 'pedal', midi: 50, dur: 6 },    // D3
        { t: 122, div: 'pedal', midi: 45, dur: 3 },    // A2
        { t: 125, div: 'pedal', midi: 38, dur: 6 },    // D2

        // --- Final massive D major chord ---
        { t: 132, div: 'great', midi: 74, dur: 8 },    // D5
        { t: 132, div: 'great', midi: 69, dur: 8 },    // A4
        { t: 132, div: 'great', midi: 66, dur: 8 },    // F#4
        { t: 132, div: 'great', midi: 62, dur: 8 },    // D4
        { t: 132, div: 'swell', midi: 57, dur: 8 },    // A3
        { t: 132, div: 'swell', midi: 54, dur: 8 },    // F#3
        { t: 132, div: 'pedal', midi: 50, dur: 8 },    // D3
        { t: 132, div: 'pedal', midi: 38, dur: 8 },    // D2
    ]
};


// ============================================================
// Saint-Saens - Symphony No. 3 "Organ" (Finale theme)
// ============================================================
// The famous triumphant Maestoso from the finale
// Time signature: 6/4, tempo ~76 BPM
// Key: C major
// The massive chorale theme that enters with full organ
// Dies Irae-derived opening: C-D-E-F-E-D-C
// Then the soaring, triumphant melody
//
// MIDI reference:
//   C2=36, G2=43, C3=48, E3=52, G3=55, C4=60, D4=62, E4=64
//   F4=65, G4=67, A4=69, B4=71, C5=72, D5=74, E5=76, F5=77
//   G5=79, A5=81, B5=83, C6=84
// ============================================================

const PIECE_ORGAN_SYMPHONY = {
    title: "Organ Symphony (Finale)",
    composer: "Camille Saint-Saens",
    tempo: 76,
    timeSignature: '6/4',
    registration: {
        great: ['gt-principal16', 'gt-principal8', 'gt-bourdon8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8'],
        swell: ['sw-bourdon16', 'sw-gedeckt8', 'sw-salicional8', 'sw-principal4', 'sw-oboe8'],
        choir: ['ch-gedeckt8', 'ch-principal4', 'ch-cromorne8'],
        pedal: ['pd-subbass32', 'pd-principal16', 'pd-subbass16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ============================================================
        // The famous opening: massive C major organ chord
        // followed by the triumphant chorale theme
        // 6/4 time: 6 beats per bar
        // ============================================================

        // --- Opening C major chord blast (bar 0, pickup) ---
        { t: 0,   div: 'great', midi: 72, dur: 6 },    // C5
        { t: 0,   div: 'great', midi: 67, dur: 6 },    // G4
        { t: 0,   div: 'great', midi: 64, dur: 6 },    // E4
        { t: 0,   div: 'great', midi: 60, dur: 6 },    // C4
        { t: 0,   div: 'swell', midi: 55, dur: 6 },    // G3
        { t: 0,   div: 'swell', midi: 52, dur: 6 },    // E3
        { t: 0,   div: 'pedal', midi: 48, dur: 6 },    // C3
        { t: 0,   div: 'pedal', midi: 36, dur: 6 },    // C2

        // ============================================================
        // THE CHORALE THEME - The famous triumphant melody
        // Played in powerful block chords
        // Melody: C5-D5-E5-F5-E5-D5-C5 (Dies Irae motif)
        //         then E5-F5-G5-A5-G5-F5-E5-D5-C5
        // ============================================================

        // --- Bar 1: C5(half) D5(half) E5(half) ---
        { t: 6,   div: 'great', midi: 72, dur: 2 },    // C5
        { t: 6,   div: 'great', midi: 64, dur: 2 },    // E4 (chord)
        { t: 6,   div: 'swell', midi: 60, dur: 2 },    // C4
        { t: 8,   div: 'great', midi: 74, dur: 2 },    // D5
        { t: 8,   div: 'great', midi: 67, dur: 2 },    // G4
        { t: 8,   div: 'swell', midi: 62, dur: 2 },    // D4
        { t: 10,  div: 'great', midi: 76, dur: 2 },    // E5
        { t: 10,  div: 'great', midi: 67, dur: 2 },    // G4
        { t: 10,  div: 'swell', midi: 64, dur: 2 },    // E4
        // Pedal
        { t: 6,   div: 'pedal', midi: 48, dur: 2 },    // C3
        { t: 8,   div: 'pedal', midi: 43, dur: 2 },    // G2
        { t: 10,  div: 'pedal', midi: 48, dur: 2 },    // C3

        // --- Bar 2: F5(dotted half) E5(dotted half) ---
        { t: 12,  div: 'great', midi: 77, dur: 3 },    // F5
        { t: 12,  div: 'great', midi: 69, dur: 3 },    // A4
        { t: 12,  div: 'swell', midi: 65, dur: 3 },    // F4
        { t: 15,  div: 'great', midi: 76, dur: 3 },    // E5
        { t: 15,  div: 'great', midi: 67, dur: 3 },    // G4
        { t: 15,  div: 'swell', midi: 64, dur: 3 },    // E4
        // Pedal
        { t: 12,  div: 'pedal', midi: 41, dur: 3 },    // F2
        { t: 15,  div: 'pedal', midi: 48, dur: 3 },    // C3

        // --- Bar 3: D5(half) C5(whole = 4 beats) ---
        { t: 18,  div: 'great', midi: 74, dur: 2 },    // D5
        { t: 18,  div: 'great', midi: 67, dur: 2 },    // G4
        { t: 18,  div: 'swell', midi: 62, dur: 2 },    // D4
        { t: 20,  div: 'great', midi: 72, dur: 4 },    // C5 (held)
        { t: 20,  div: 'great', midi: 64, dur: 4 },    // E4
        { t: 20,  div: 'swell', midi: 60, dur: 4 },    // C4
        // Pedal
        { t: 18,  div: 'pedal', midi: 43, dur: 2 },    // G2
        { t: 20,  div: 'pedal', midi: 48, dur: 4 },    // C3

        // --- Bar 4: E5(half) F5(half) G5(half) ---
        { t: 24,  div: 'great', midi: 76, dur: 2 },    // E5
        { t: 24,  div: 'great', midi: 67, dur: 2 },    // G4
        { t: 24,  div: 'swell', midi: 64, dur: 2 },    // E4
        { t: 26,  div: 'great', midi: 77, dur: 2 },    // F5
        { t: 26,  div: 'great', midi: 69, dur: 2 },    // A4
        { t: 26,  div: 'swell', midi: 65, dur: 2 },    // F4
        { t: 28,  div: 'great', midi: 79, dur: 2 },    // G5
        { t: 28,  div: 'great', midi: 71, dur: 2 },    // B4
        { t: 28,  div: 'swell', midi: 67, dur: 2 },    // G4
        // Pedal
        { t: 24,  div: 'pedal', midi: 48, dur: 2 },    // C3
        { t: 26,  div: 'pedal', midi: 41, dur: 2 },    // F2
        { t: 28,  div: 'pedal', midi: 43, dur: 2 },    // G2

        // --- Bar 5: A5(dotted half) G5(dotted half) ---
        { t: 30,  div: 'great', midi: 81, dur: 3 },    // A5
        { t: 30,  div: 'great', midi: 72, dur: 3 },    // C5
        { t: 30,  div: 'swell', midi: 69, dur: 3 },    // A4
        { t: 33,  div: 'great', midi: 79, dur: 3 },    // G5
        { t: 33,  div: 'great', midi: 71, dur: 3 },    // B4
        { t: 33,  div: 'swell', midi: 67, dur: 3 },    // G4
        // Pedal
        { t: 30,  div: 'pedal', midi: 45, dur: 3 },    // A2
        { t: 33,  div: 'pedal', midi: 43, dur: 3 },    // G2

        // --- Bar 6: F5(half) E5(half) D5(half) ---
        { t: 36,  div: 'great', midi: 77, dur: 2 },    // F5
        { t: 36,  div: 'great', midi: 69, dur: 2 },    // A4
        { t: 36,  div: 'swell', midi: 65, dur: 2 },    // F4
        { t: 38,  div: 'great', midi: 76, dur: 2 },    // E5
        { t: 38,  div: 'great', midi: 67, dur: 2 },    // G4
        { t: 38,  div: 'swell', midi: 64, dur: 2 },    // E4
        { t: 40,  div: 'great', midi: 74, dur: 2 },    // D5
        { t: 40,  div: 'great', midi: 67, dur: 2 },    // G4
        { t: 40,  div: 'swell', midi: 62, dur: 2 },    // D4
        // Pedal
        { t: 36,  div: 'pedal', midi: 41, dur: 2 },    // F2
        { t: 38,  div: 'pedal', midi: 48, dur: 2 },    // C3
        { t: 40,  div: 'pedal', midi: 43, dur: 2 },    // G2

        // --- Bar 7: C5 whole (6 beats - grand resolution) ---
        { t: 42,  div: 'great', midi: 72, dur: 6 },    // C5
        { t: 42,  div: 'great', midi: 67, dur: 6 },    // G4
        { t: 42,  div: 'great', midi: 64, dur: 6 },    // E4
        { t: 42,  div: 'great', midi: 60, dur: 6 },    // C4
        { t: 42,  div: 'swell', midi: 55, dur: 6 },    // G3
        { t: 42,  div: 'swell', midi: 52, dur: 6 },    // E3
        { t: 42,  div: 'pedal', midi: 48, dur: 6 },    // C3
        { t: 42,  div: 'pedal', midi: 36, dur: 6 },    // C2

        // ============================================================
        // SECOND STATEMENT - Even grander, with added voices
        // The theme repeated with more power
        // ============================================================

        // --- Bar 8: C5(half) D5(half) E5(half) - theme returns ---
        { t: 48,  div: 'great', midi: 72, dur: 2 },    // C5
        { t: 48,  div: 'great', midi: 64, dur: 2 },    // E4
        { t: 48,  div: 'choir', midi: 60, dur: 2 },    // C4
        { t: 48,  div: 'swell', midi: 72, dur: 2 },    // C5 (doubled)
        { t: 50,  div: 'great', midi: 74, dur: 2 },    // D5
        { t: 50,  div: 'great', midi: 67, dur: 2 },    // G4
        { t: 50,  div: 'choir', midi: 62, dur: 2 },    // D4
        { t: 50,  div: 'swell', midi: 74, dur: 2 },    // D5
        { t: 52,  div: 'great', midi: 76, dur: 2 },    // E5
        { t: 52,  div: 'great', midi: 67, dur: 2 },    // G4
        { t: 52,  div: 'choir', midi: 64, dur: 2 },    // E4
        { t: 52,  div: 'swell', midi: 76, dur: 2 },    // E5
        // Pedal
        { t: 48,  div: 'pedal', midi: 48, dur: 2 },    // C3
        { t: 50,  div: 'pedal', midi: 43, dur: 2 },    // G2
        { t: 52,  div: 'pedal', midi: 48, dur: 2 },    // C3

        // --- Bar 9: F5(dotted half) E5(dotted half) ---
        { t: 54,  div: 'great', midi: 77, dur: 3 },    // F5
        { t: 54,  div: 'great', midi: 69, dur: 3 },    // A4
        { t: 54,  div: 'choir', midi: 65, dur: 3 },    // F4
        { t: 54,  div: 'swell', midi: 77, dur: 3 },    // F5
        { t: 57,  div: 'great', midi: 76, dur: 3 },    // E5
        { t: 57,  div: 'great', midi: 67, dur: 3 },    // G4
        { t: 57,  div: 'choir', midi: 64, dur: 3 },    // E4
        { t: 57,  div: 'swell', midi: 76, dur: 3 },    // E5
        // Pedal
        { t: 54,  div: 'pedal', midi: 41, dur: 3 },    // F2
        { t: 57,  div: 'pedal', midi: 48, dur: 3 },    // C3

        // --- Bar 10: D5(half) C5(whole) ---
        { t: 60,  div: 'great', midi: 74, dur: 2 },    // D5
        { t: 60,  div: 'great', midi: 67, dur: 2 },    // G4
        { t: 60,  div: 'swell', midi: 74, dur: 2 },    // D5
        { t: 62,  div: 'great', midi: 72, dur: 4 },    // C5
        { t: 62,  div: 'great', midi: 64, dur: 4 },    // E4
        { t: 62,  div: 'swell', midi: 72, dur: 4 },    // C5
        { t: 60,  div: 'pedal', midi: 43, dur: 2 },    // G2
        { t: 62,  div: 'pedal', midi: 48, dur: 4 },    // C3

        // --- Bar 11: G5(half) A5(half) G5(half) - ascending climax ---
        { t: 66,  div: 'great', midi: 79, dur: 2 },    // G5
        { t: 66,  div: 'great', midi: 71, dur: 2 },    // B4
        { t: 66,  div: 'swell', midi: 79, dur: 2 },    // G5
        { t: 68,  div: 'great', midi: 81, dur: 2 },    // A5
        { t: 68,  div: 'great', midi: 72, dur: 2 },    // C5
        { t: 68,  div: 'swell', midi: 81, dur: 2 },    // A5
        { t: 70,  div: 'great', midi: 79, dur: 2 },    // G5
        { t: 70,  div: 'great', midi: 71, dur: 2 },    // B4
        { t: 70,  div: 'swell', midi: 79, dur: 2 },    // G5
        // Pedal
        { t: 66,  div: 'pedal', midi: 43, dur: 2 },    // G2
        { t: 68,  div: 'pedal', midi: 45, dur: 2 },    // A2
        { t: 70,  div: 'pedal', midi: 43, dur: 2 },    // G2

        // --- Bar 12: F5(half) E5(half) D5(half) ---
        { t: 72,  div: 'great', midi: 77, dur: 2 },    // F5
        { t: 72,  div: 'great', midi: 69, dur: 2 },    // A4
        { t: 72,  div: 'swell', midi: 77, dur: 2 },    // F5
        { t: 74,  div: 'great', midi: 76, dur: 2 },    // E5
        { t: 74,  div: 'great', midi: 67, dur: 2 },    // G4
        { t: 74,  div: 'swell', midi: 76, dur: 2 },    // E5
        { t: 76,  div: 'great', midi: 74, dur: 2 },    // D5
        { t: 76,  div: 'great', midi: 67, dur: 2 },    // G4
        { t: 76,  div: 'swell', midi: 74, dur: 2 },    // D5
        // Pedal
        { t: 72,  div: 'pedal', midi: 41, dur: 2 },    // F2
        { t: 74,  div: 'pedal', midi: 48, dur: 2 },    // C3
        { t: 76,  div: 'pedal', midi: 43, dur: 2 },    // G2

        // --- Bar 13: Final triumphant C major chord ---
        { t: 78,  div: 'great', midi: 84, dur: 8 },    // C6
        { t: 78,  div: 'great', midi: 79, dur: 8 },    // G5
        { t: 78,  div: 'great', midi: 76, dur: 8 },    // E5
        { t: 78,  div: 'great', midi: 72, dur: 8 },    // C5
        { t: 78,  div: 'great', midi: 67, dur: 8 },    // G4
        { t: 78,  div: 'great', midi: 64, dur: 8 },    // E4
        { t: 78,  div: 'great', midi: 60, dur: 8 },    // C4
        { t: 78,  div: 'swell', midi: 55, dur: 8 },    // G3
        { t: 78,  div: 'swell', midi: 52, dur: 8 },    // E3
        { t: 78,  div: 'choir', midi: 60, dur: 8 },    // C4
        { t: 78,  div: 'pedal', midi: 48, dur: 8 },    // C3
        { t: 78,  div: 'pedal', midi: 36, dur: 8 },    // C2
    ]
};


// ============================================================
// Buxtehude - Praeludium in G minor, BuxWV 149
// ============================================================
// Classic North German Baroque prelude (stylus phantasticus)
// Time signature: 4/4 (free sections), tempo ~80 BPM
// Key: G minor (Bb, Eb)
// Structure: Toccata opening - Fugue - Allegro - Final cadence
// Features virtuosic pedal ostinato and dramatic manual runs
//
// MIDI reference:
//   G1=31, D2=38, G2=43, A2=45, Bb2=46, C3=48, D3=50, Eb3=51
//   F3=53, G3=55, A3=57, Bb3=58, C4=60, D4=62, Eb4=63, F4=65
//   G4=67, A4=69, Bb4=70, C5=72, D5=74, Eb5=75, F5=77, G5=79
//   A5=81, Bb5=82
// ============================================================

const PIECE_BUXTEHUDE = {
    title: "Praeludium in G minor",
    composer: "Dietrich Buxtehude",
    tempo: 80,
    timeSignature: '4/4',
    registration: {
        great: ['gt-principal8', 'gt-octave4'],
        swell: [],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8']
    },
    events: [
        // ============================================================
        // SECTION 1: Toccata Opening (stylus phantasticus)
        // Dramatic, quasi-improvisational flourish
        // Pedal ostinato on G with manual figurations
        // ============================================================

        // --- Bar 1: Opening pedal G, then manual chord ---
        { t: 0,   div: 'pedal', midi: 43, dur: 4 },    // G2 (pedal point)
        // Manual: G minor chord burst
        { t: 0,   div: 'great', midi: 67, dur: 1 },    // G4
        { t: 0,   div: 'great', midi: 70, dur: 1 },    // Bb4
        { t: 0,   div: 'great', midi: 74, dur: 1 },    // D5
        // Descending flourish
        { t: 1,   div: 'great', midi: 79, dur: 0.5 },  // G5
        { t: 1.5, div: 'great', midi: 77, dur: 0.5 },  // F5
        { t: 2,   div: 'great', midi: 75, dur: 0.5 },  // Eb5
        { t: 2.5, div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 3,   div: 'great', midi: 72, dur: 0.5 },  // C5
        { t: 3.5, div: 'great', midi: 70, dur: 0.5 },  // Bb4

        // --- Bar 2: Continuing flourish over pedal ---
        { t: 4,   div: 'pedal', midi: 43, dur: 4 },    // G2
        { t: 4,   div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 4.5, div: 'great', midi: 70, dur: 0.5 },  // Bb4
        { t: 5,   div: 'great', midi: 72, dur: 0.5 },  // C5
        { t: 5.5, div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 6,   div: 'great', midi: 75, dur: 0.5 },  // Eb5
        { t: 6.5, div: 'great', midi: 77, dur: 0.5 },  // F5
        { t: 7,   div: 'great', midi: 79, dur: 0.5 },  // G5
        { t: 7.5, div: 'great', midi: 77, dur: 0.5 },  // F5

        // --- Bar 3: More toccata figuration ---
        { t: 8,   div: 'pedal', midi: 50, dur: 4 },    // D3
        { t: 8,   div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 8.5, div: 'great', midi: 72, dur: 0.5 },  // C5
        { t: 9,   div: 'great', midi: 70, dur: 0.5 },  // Bb4
        { t: 9.5, div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 10,  div: 'great', midi: 67, dur: 0.5 },  // G4
        { t: 10.5, div: 'great', midi: 65, dur: 0.5 }, // F4
        { t: 11,  div: 'great', midi: 67, dur: 0.5 },  // G4
        { t: 11.5, div: 'great', midi: 69, dur: 0.5 }, // A4

        // --- Bar 4: Cadential figure back to G minor ---
        { t: 12,  div: 'pedal', midi: 43, dur: 2 },    // G2
        { t: 14,  div: 'pedal', midi: 50, dur: 2 },    // D3
        { t: 12,  div: 'great', midi: 70, dur: 1 },    // Bb4
        { t: 13,  div: 'great', midi: 72, dur: 1 },    // C5
        { t: 14,  div: 'great', midi: 74, dur: 1.5 },  // D5
        { t: 15.5, div: 'great', midi: 72, dur: 0.5 }, // C5

        // --- Bar 5: Resolution to G minor chord ---
        { t: 16,  div: 'pedal', midi: 43, dur: 4 },    // G2
        { t: 16,  div: 'great', midi: 70, dur: 2 },    // Bb4
        { t: 16,  div: 'great', midi: 67, dur: 2 },    // G4
        { t: 16,  div: 'great', midi: 74, dur: 2 },    // D5
        // More figuration
        { t: 18,  div: 'great', midi: 79, dur: 0.5 },  // G5
        { t: 18.5, div: 'great', midi: 77, dur: 0.5 }, // F5
        { t: 19,  div: 'great', midi: 75, dur: 0.5 },  // Eb5
        { t: 19.5, div: 'great', midi: 74, dur: 0.5 }, // D5

        // ============================================================
        // SECTION 2: Fugue (4 voices)
        // Subject: G4-D5-Bb4-C5-D5-Eb5-D5-C5-Bb4-A4-G4
        // Stately, sober four-voice fugue
        // ============================================================

        // --- Fugue subject entry 1 (soprano on Great) ---
        // Bar 6
        { t: 20,  div: 'great', midi: 67, dur: 1 },    // G4
        { t: 21,  div: 'great', midi: 74, dur: 1 },    // D5
        { t: 22,  div: 'great', midi: 70, dur: 0.5 },  // Bb4
        { t: 22.5, div: 'great', midi: 72, dur: 0.5 }, // C5
        // Bar 7
        { t: 23,  div: 'great', midi: 74, dur: 1 },    // D5
        { t: 24,  div: 'great', midi: 75, dur: 0.5 },  // Eb5
        { t: 24.5, div: 'great', midi: 74, dur: 0.5 }, // D5
        { t: 25,  div: 'great', midi: 72, dur: 0.5 },  // C5
        { t: 25.5, div: 'great', midi: 70, dur: 0.5 }, // Bb4
        { t: 26,  div: 'great', midi: 69, dur: 1 },    // A4
        { t: 27,  div: 'great', midi: 67, dur: 1 },    // G4

        // --- Fugue subject entry 2 (answer in D, alto voice) ---
        // Enters at bar 8 while soprano continues
        // Answer: D4-A4-F4-G4-A4-Bb4-A4-G4-F4-E4-D4
        // Bar 8
        { t: 28,  div: 'great', midi: 62, dur: 1 },    // D4 (alto)
        { t: 28,  div: 'great', midi: 70, dur: 1 },    // Bb4 (sop continues)
        { t: 29,  div: 'great', midi: 69, dur: 1 },    // A4 (alto)
        { t: 29,  div: 'great', midi: 72, dur: 1 },    // C5 (sop)
        { t: 30,  div: 'great', midi: 65, dur: 0.5 },  // F4 (alto)
        { t: 30,  div: 'great', midi: 74, dur: 2 },    // D5 (sop, held)
        { t: 30.5, div: 'great', midi: 67, dur: 0.5 }, // G4 (alto)
        // Bar 9
        { t: 31,  div: 'great', midi: 69, dur: 1 },    // A4 (alto)
        { t: 32,  div: 'great', midi: 70, dur: 0.5 },  // Bb4 (alto)
        { t: 32,  div: 'great', midi: 72, dur: 2 },    // C5 (sop)
        { t: 32.5, div: 'great', midi: 69, dur: 0.5 }, // A4 (alto)
        { t: 33,  div: 'great', midi: 67, dur: 0.5 },  // G4 (alto)
        { t: 33.5, div: 'great', midi: 65, dur: 0.5 }, // F4 (alto)
        { t: 34,  div: 'great', midi: 64, dur: 1 },    // E4 (alto)
        { t: 34,  div: 'great', midi: 70, dur: 2 },    // Bb4 (sop)
        { t: 35,  div: 'great', midi: 62, dur: 1 },    // D4 (alto)

        // --- Fugue subject entry 3 (tenor, lower octave) ---
        // Bar 10: Tenor enters with subject on G3
        { t: 36,  div: 'great', midi: 55, dur: 1 },    // G3 (tenor)
        { t: 36,  div: 'great', midi: 67, dur: 2 },    // G4 (sop/alto continue)
        { t: 36,  div: 'great', midi: 62, dur: 2 },    // D4
        { t: 37,  div: 'great', midi: 62, dur: 1 },    // D4 (tenor)
        { t: 38,  div: 'great', midi: 58, dur: 0.5 },  // Bb3 (tenor)
        { t: 38,  div: 'great', midi: 69, dur: 2 },    // A4 (sop)
        { t: 38,  div: 'great', midi: 65, dur: 2 },    // F4 (alto)
        { t: 38.5, div: 'great', midi: 60, dur: 0.5 }, // C4 (tenor)
        // Bar 11
        { t: 39,  div: 'great', midi: 62, dur: 1 },    // D4 (tenor)
        { t: 40,  div: 'great', midi: 63, dur: 0.5 },  // Eb4 (tenor)
        { t: 40,  div: 'great', midi: 67, dur: 2 },    // G4 (sop)
        { t: 40.5, div: 'great', midi: 62, dur: 0.5 }, // D4 (tenor)
        { t: 41,  div: 'great', midi: 60, dur: 0.5 },  // C4 (tenor)
        { t: 41.5, div: 'great', midi: 58, dur: 0.5 }, // Bb3 (tenor)
        { t: 42,  div: 'great', midi: 57, dur: 1 },    // A3 (tenor)
        { t: 42,  div: 'great', midi: 70, dur: 1 },    // Bb4 (upper voices)
        { t: 42,  div: 'great', midi: 65, dur: 1 },    // F4
        { t: 43,  div: 'great', midi: 55, dur: 1 },    // G3 (tenor resolves)

        // --- Fugue subject entry 4 (pedal enters!) ---
        // Bar 12: Pedal enters with subject on G2
        { t: 44,  div: 'pedal', midi: 43, dur: 2 },    // G2
        { t: 44,  div: 'great', midi: 67, dur: 2 },    // G4 (upper voices)
        { t: 44,  div: 'great', midi: 70, dur: 2 },    // Bb4
        { t: 44,  div: 'great', midi: 62, dur: 2 },    // D4
        { t: 46,  div: 'pedal', midi: 50, dur: 2 },    // D3
        { t: 46,  div: 'great', midi: 65, dur: 1 },    // F4
        { t: 46,  div: 'great', midi: 69, dur: 1 },    // A4
        { t: 47,  div: 'great', midi: 67, dur: 1 },    // G4
        { t: 47,  div: 'great', midi: 72, dur: 1 },    // C5
        // Bar 13
        { t: 48,  div: 'pedal', midi: 46, dur: 1 },    // Bb2
        { t: 48,  div: 'great', midi: 74, dur: 2 },    // D5
        { t: 48,  div: 'great', midi: 67, dur: 2 },    // G4
        { t: 49,  div: 'pedal', midi: 48, dur: 1 },    // C3
        { t: 50,  div: 'pedal', midi: 50, dur: 1 },    // D3
        { t: 50,  div: 'great', midi: 72, dur: 1 },    // C5
        { t: 50,  div: 'great', midi: 69, dur: 1 },    // A4
        { t: 51,  div: 'pedal', midi: 51, dur: 0.5 },  // Eb3
        { t: 51,  div: 'great', midi: 70, dur: 1 },    // Bb4
        { t: 51.5, div: 'pedal', midi: 50, dur: 0.5 }, // D3

        // ============================================================
        // SECTION 3: Allegro - Running pedal passages
        // Fast foot-powered running notes with rhythmic manual chords
        // ============================================================

        // --- Bar 14: Pedal running eighth notes ---
        { t: 52,  div: 'pedal', midi: 43, dur: 0.5 },  // G2
        { t: 52.5, div: 'pedal', midi: 45, dur: 0.5 }, // A2
        { t: 53,  div: 'pedal', midi: 46, dur: 0.5 },  // Bb2
        { t: 53.5, div: 'pedal', midi: 48, dur: 0.5 }, // C3
        { t: 54,  div: 'pedal', midi: 50, dur: 0.5 },  // D3
        { t: 54.5, div: 'pedal', midi: 48, dur: 0.5 }, // C3
        { t: 55,  div: 'pedal', midi: 46, dur: 0.5 },  // Bb2
        { t: 55.5, div: 'pedal', midi: 45, dur: 0.5 }, // A2
        // Manual: rhythmic chords
        { t: 52,  div: 'great', midi: 67, dur: 1 },    // G4
        { t: 52,  div: 'great', midi: 70, dur: 1 },    // Bb4
        { t: 52,  div: 'great', midi: 74, dur: 1 },    // D5
        { t: 54,  div: 'great', midi: 65, dur: 1 },    // F4
        { t: 54,  div: 'great', midi: 69, dur: 1 },    // A4
        { t: 54,  div: 'great', midi: 74, dur: 1 },    // D5

        // --- Bar 15: More pedal running ---
        { t: 56,  div: 'pedal', midi: 43, dur: 0.5 },  // G2
        { t: 56.5, div: 'pedal', midi: 46, dur: 0.5 }, // Bb2
        { t: 57,  div: 'pedal', midi: 50, dur: 0.5 },  // D3
        { t: 57.5, div: 'pedal', midi: 53, dur: 0.5 }, // F3
        { t: 58,  div: 'pedal', midi: 55, dur: 0.5 },  // G3
        { t: 58.5, div: 'pedal', midi: 53, dur: 0.5 }, // F3
        { t: 59,  div: 'pedal', midi: 50, dur: 0.5 },  // D3
        { t: 59.5, div: 'pedal', midi: 46, dur: 0.5 }, // Bb2
        // Manual chords
        { t: 56,  div: 'great', midi: 67, dur: 2 },    // G4
        { t: 56,  div: 'great', midi: 70, dur: 2 },    // Bb4
        { t: 58,  div: 'great', midi: 65, dur: 2 },    // F4
        { t: 58,  div: 'great', midi: 69, dur: 2 },    // A4

        // --- Bar 16: Pedal scale descending ---
        { t: 60,  div: 'pedal', midi: 55, dur: 0.5 },  // G3
        { t: 60.5, div: 'pedal', midi: 53, dur: 0.5 }, // F3
        { t: 61,  div: 'pedal', midi: 51, dur: 0.5 },  // Eb3
        { t: 61.5, div: 'pedal', midi: 50, dur: 0.5 }, // D3
        { t: 62,  div: 'pedal', midi: 48, dur: 0.5 },  // C3
        { t: 62.5, div: 'pedal', midi: 46, dur: 0.5 }, // Bb2
        { t: 63,  div: 'pedal', midi: 45, dur: 0.5 },  // A2
        { t: 63.5, div: 'pedal', midi: 43, dur: 0.5 }, // G2
        // Manual: descending chords
        { t: 60,  div: 'great', midi: 75, dur: 1 },    // Eb5
        { t: 60,  div: 'great', midi: 72, dur: 1 },    // C5
        { t: 61,  div: 'great', midi: 74, dur: 1 },    // D5
        { t: 61,  div: 'great', midi: 70, dur: 1 },    // Bb4
        { t: 62,  div: 'great', midi: 72, dur: 1 },    // C5
        { t: 62,  div: 'great', midi: 69, dur: 1 },    // A4
        { t: 63,  div: 'great', midi: 70, dur: 1 },    // Bb4
        { t: 63,  div: 'great', midi: 67, dur: 1 },    // G4

        // --- Bar 17: Ascending pedal run ---
        { t: 64,  div: 'pedal', midi: 43, dur: 0.5 },  // G2
        { t: 64.5, div: 'pedal', midi: 45, dur: 0.5 }, // A2
        { t: 65,  div: 'pedal', midi: 46, dur: 0.5 },  // Bb2
        { t: 65.5, div: 'pedal', midi: 48, dur: 0.5 }, // C3
        { t: 66,  div: 'pedal', midi: 50, dur: 0.5 },  // D3
        { t: 66.5, div: 'pedal', midi: 51, dur: 0.5 }, // Eb3
        { t: 67,  div: 'pedal', midi: 53, dur: 0.5 },  // F3
        { t: 67.5, div: 'pedal', midi: 55, dur: 0.5 }, // G3
        // Manual: climbing chords
        { t: 64,  div: 'great', midi: 67, dur: 2 },    // G4
        { t: 64,  div: 'great', midi: 70, dur: 2 },    // Bb4
        { t: 66,  div: 'great', midi: 72, dur: 2 },    // C5
        { t: 66,  div: 'great', midi: 75, dur: 2 },    // Eb5

        // --- Bar 18: Final cadence approach ---
        { t: 68,  div: 'pedal', midi: 50, dur: 0.5 },  // D3
        { t: 68.5, div: 'pedal', midi: 48, dur: 0.5 }, // C3
        { t: 69,  div: 'pedal', midi: 46, dur: 0.5 },  // Bb2
        { t: 69.5, div: 'pedal', midi: 45, dur: 0.5 }, // A2
        { t: 70,  div: 'pedal', midi: 43, dur: 2 },    // G2 (held)
        // Manual: dramatic chords
        { t: 68,  div: 'great', midi: 74, dur: 1 },    // D5
        { t: 68,  div: 'great', midi: 69, dur: 1 },    // A4
        { t: 68,  div: 'great', midi: 66, dur: 1 },    // F#4
        { t: 69,  div: 'great', midi: 72, dur: 1 },    // C5
        { t: 69,  div: 'great', midi: 69, dur: 1 },    // A4
        { t: 69,  div: 'great', midi: 66, dur: 1 },    // F#4

        // ============================================================
        // SECTION 4: Final cadence - dramatic close
        // ============================================================

        // --- The Picardy third: G major final chord ---
        // (Baroque convention: minor key pieces end on major chord)
        { t: 72,  div: 'great', midi: 79, dur: 4 },    // G5
        { t: 72,  div: 'great', midi: 74, dur: 4 },    // D5
        { t: 72,  div: 'great', midi: 71, dur: 4 },    // B4 (major third!)
        { t: 72,  div: 'great', midi: 67, dur: 4 },    // G4
        { t: 72,  div: 'pedal', midi: 43, dur: 4 },    // G2
        { t: 72,  div: 'pedal', midi: 31, dur: 4 },    // G1

        // Sustained final chord
        { t: 76,  div: 'great', midi: 79, dur: 8 },    // G5
        { t: 76,  div: 'great', midi: 74, dur: 8 },    // D5
        { t: 76,  div: 'great', midi: 71, dur: 8 },    // B4
        { t: 76,  div: 'great', midi: 67, dur: 8 },    // G4
        { t: 76,  div: 'pedal', midi: 43, dur: 8 },    // G2
        { t: 76,  div: 'pedal', midi: 31, dur: 8 },    // G1
    ]
};
