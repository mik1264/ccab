// ============================================================
// Handel - Alla Hornpipe from Water Music, HWV 349
// FULL VERSION - Complete movement with all repeats
// ============================================================
// Suite No. 2 in D major, movement 2 (Alla Hornpipe)
// Time signature: 3/2 (6 quarter-note beats per bar), tempo 112 BPM
// Key: D major (F#, C#)
// Form: A-B-A with repeats
// Orchestral arrangement for organ: trumpet melody on Great,
// inner voices on Swell/Choir, bass on Pedal
//
// MIDI: D3=50, E3=52, F#3=54, G3=55, A3=57, B3=59
//       C#4=61, D4=62, E4=64, F#4=66, G4=67, A4=69, B4=71
//       C#5=73, D5=74, E5=76, F#5=78, G5=79, A5=81
//       Pedal: D2=38, E2=40, F#2=42, G2=43, A2=45, B2=47
// ============================================================

const PIECE_HORNPIPE = {
    title: "Alla Hornpipe from Water Music (Full)",
    composer: "George Frideric Handel",
    catalog: "HWV 349",
    key: "D major",
    tempo: 112,
    tempoChanges: [
        { t: 0, tempo: 112, label: "Allegro maestoso" },
        { t: 276, tempo: 108, label: "Poco meno mosso (B section)" },
        { t: 420, tempo: 112, label: "A tempo (A return)" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-trumpet8'],
        swell: ['sw-gedeckt8', 'sw-principal4', 'sw-oboe8'],
        choir: ['ch-gedeckt8', 'ch-dulciana8', 'ch-principal4'],
        pedal: ['pd-principal16', 'pd-octave8']
    },
    events: [
        // ============================================================
        // SECTION A - First statement (bars 1-23)
        // The famous Hornpipe theme in D major
        // 3/2 time = 6 quarter-note beats per bar
        // ============================================================

        // --- Bar 1: Opening D major fanfare ---
        // Melody: D5 dotted-half, D5 quarter, D5 quarter, E5 quarter
        { t: 0, div: 'great', midi: 74, dur: 3, vel: 0.85 },     // D5 dotted half
        { t: 3, div: 'great', midi: 74, dur: 1, vel: 0.80 },     // D5 quarter
        { t: 4, div: 'great', midi: 74, dur: 1, vel: 0.78 },     // D5 quarter
        { t: 5, div: 'great', midi: 76, dur: 1, vel: 0.80 },     // E5 quarter
        // Swell: sustained harmony
        { t: 0, div: 'swell', midi: 66, dur: 6, vel: 0.55 },     // F#4
        { t: 0, div: 'swell', midi: 69, dur: 6, vel: 0.55 },     // A4
        // Choir: inner voice
        { t: 0, div: 'choir', midi: 62, dur: 6, vel: 0.50 },     // D4
        // Pedal: D
        { t: 0, div: 'pedal', midi: 50, dur: 6, vel: 0.75 },     // D3

        // --- Bar 2: F#5 dotted-half, E5 quarter, D5 quarter, C#5 quarter ---
        { t: 6, div: 'great', midi: 78, dur: 3, vel: 0.85 },     // F#5 dotted half
        { t: 9, div: 'great', midi: 76, dur: 1, vel: 0.78 },     // E5 quarter
        { t: 10, div: 'great', midi: 74, dur: 1, vel: 0.75 },    // D5 quarter
        { t: 11, div: 'great', midi: 73, dur: 1, vel: 0.78 },    // C#5 quarter
        // Swell harmony
        { t: 6, div: 'swell', midi: 69, dur: 3, vel: 0.55 },     // A4
        { t: 6, div: 'swell', midi: 62, dur: 3, vel: 0.55 },     // D4
        { t: 9, div: 'swell', midi: 66, dur: 3, vel: 0.55 },     // F#4
        { t: 9, div: 'swell', midi: 69, dur: 3, vel: 0.55 },     // A4
        // Pedal: A
        { t: 6, div: 'pedal', midi: 45, dur: 6, vel: 0.75 },     // A2

        // --- Bar 3: D5 half, F#5 quarter, A5 dotted-quarter, G5 eighth, F#5 quarter ---
        { t: 12, div: 'great', midi: 74, dur: 2, vel: 0.82 },    // D5 half
        { t: 14, div: 'great', midi: 78, dur: 1, vel: 0.85 },    // F#5 quarter
        { t: 15, div: 'great', midi: 81, dur: 1.5, vel: 0.88 },  // A5 dotted quarter
        { t: 16.5, div: 'great', midi: 79, dur: 0.5, vel: 0.78 },// G5 eighth
        { t: 17, div: 'great', midi: 78, dur: 1, vel: 0.82 },    // F#5 quarter
        // Swell
        { t: 12, div: 'swell', midi: 66, dur: 3, vel: 0.55 },    // F#4
        { t: 15, div: 'swell', midi: 69, dur: 3, vel: 0.55 },    // A4
        // Choir
        { t: 12, div: 'choir', midi: 62, dur: 6, vel: 0.50 },    // D4
        // Pedal: D
        { t: 12, div: 'pedal', midi: 50, dur: 3, vel: 0.75 },    // D3
        { t: 15, div: 'pedal', midi: 50, dur: 3, vel: 0.72 },    // D3

        // --- Bar 4: E5 half, G5 quarter, F#5 dotted-quarter, E5 eighth, D5 quarter ---
        { t: 18, div: 'great', midi: 76, dur: 2, vel: 0.80 },    // E5 half
        { t: 20, div: 'great', midi: 79, dur: 1, vel: 0.82 },    // G5 quarter
        { t: 21, div: 'great', midi: 78, dur: 1.5, vel: 0.85 },  // F#5 dotted quarter
        { t: 22.5, div: 'great', midi: 76, dur: 0.5, vel: 0.75 },// E5 eighth
        { t: 23, div: 'great', midi: 74, dur: 1, vel: 0.80 },    // D5 quarter
        // Swell
        { t: 18, div: 'swell', midi: 67, dur: 3, vel: 0.55 },    // G4
        { t: 18, div: 'swell', midi: 71, dur: 3, vel: 0.55 },    // B4
        { t: 21, div: 'swell', midi: 69, dur: 3, vel: 0.55 },    // A4
        // Pedal: G then A
        { t: 18, div: 'pedal', midi: 43, dur: 3, vel: 0.72 },    // G2
        { t: 21, div: 'pedal', midi: 45, dur: 3, vel: 0.72 },    // A2

        // --- Bar 5: D5 dotted-half, C#5 quarter, B4 quarter, A4 quarter ---
        { t: 24, div: 'great', midi: 74, dur: 3, vel: 0.82 },    // D5 dotted half
        { t: 27, div: 'great', midi: 73, dur: 1, vel: 0.78 },    // C#5 quarter
        { t: 28, div: 'great', midi: 71, dur: 1, vel: 0.75 },    // B4 quarter
        { t: 29, div: 'great', midi: 69, dur: 1, vel: 0.78 },    // A4 quarter
        // Swell
        { t: 24, div: 'swell', midi: 66, dur: 6, vel: 0.55 },    // F#4
        { t: 24, div: 'swell', midi: 62, dur: 6, vel: 0.55 },    // D4
        // Choir
        { t: 24, div: 'choir', midi: 57, dur: 6, vel: 0.50 },    // A3
        // Pedal: D
        { t: 24, div: 'pedal', midi: 50, dur: 6, vel: 0.72 },    // D3

        // --- Bar 6: B4 dotted-half, A4 quarter, G4 quarter, F#4 quarter ---
        { t: 30, div: 'great', midi: 71, dur: 3, vel: 0.80 },    // B4 dotted half
        { t: 33, div: 'great', midi: 69, dur: 1, vel: 0.78 },    // A4 quarter
        { t: 34, div: 'great', midi: 67, dur: 1, vel: 0.75 },    // G4 quarter
        { t: 35, div: 'great', midi: 66, dur: 1, vel: 0.78 },    // F#4 quarter
        // Swell
        { t: 30, div: 'swell', midi: 62, dur: 3, vel: 0.55 },    // D4
        { t: 30, div: 'swell', midi: 55, dur: 3, vel: 0.55 },    // G3
        { t: 33, div: 'swell', midi: 62, dur: 3, vel: 0.55 },    // D4
        // Pedal: G then D
        { t: 30, div: 'pedal', midi: 43, dur: 3, vel: 0.72 },    // G2
        { t: 33, div: 'pedal', midi: 50, dur: 3, vel: 0.72 },    // D3

        // --- Bar 7: G4 half, B4 quarter, A4 dotted-quarter, G4 eighth, F#4 quarter ---
        { t: 36, div: 'great', midi: 67, dur: 2, vel: 0.78 },    // G4 half
        { t: 38, div: 'great', midi: 71, dur: 1, vel: 0.82 },    // B4 quarter
        { t: 39, div: 'great', midi: 69, dur: 1.5, vel: 0.80 },  // A4 dotted quarter
        { t: 40.5, div: 'great', midi: 67, dur: 0.5, vel: 0.72 },// G4 eighth
        { t: 41, div: 'great', midi: 66, dur: 1, vel: 0.78 },    // F#4 quarter
        // Swell
        { t: 36, div: 'swell', midi: 59, dur: 3, vel: 0.55 },    // B3
        { t: 36, div: 'swell', midi: 55, dur: 3, vel: 0.55 },    // G3
        { t: 39, div: 'swell', midi: 62, dur: 3, vel: 0.55 },    // D4
        // Pedal: E then A
        { t: 36, div: 'pedal', midi: 40, dur: 3, vel: 0.72 },    // E2
        { t: 39, div: 'pedal', midi: 45, dur: 3, vel: 0.72 },    // A2

        // --- Bar 8: A4 dotted-half, leading into repeat, cadence on D ---
        { t: 42, div: 'great', midi: 69, dur: 3, vel: 0.82 },    // A4 dotted half
        { t: 45, div: 'great', midi: 71, dur: 1, vel: 0.78 },    // B4 quarter
        { t: 46, div: 'great', midi: 73, dur: 1, vel: 0.80 },    // C#5 quarter
        { t: 47, div: 'great', midi: 74, dur: 1, vel: 0.85 },    // D5 quarter
        // Swell
        { t: 42, div: 'swell', midi: 66, dur: 3, vel: 0.55 },    // F#4
        { t: 42, div: 'swell', midi: 61, dur: 3, vel: 0.55 },    // C#4
        { t: 45, div: 'swell', midi: 62, dur: 3, vel: 0.55 },    // D4
        { t: 45, div: 'swell', midi: 66, dur: 3, vel: 0.55 },    // F#4
        // Pedal: A then D
        { t: 42, div: 'pedal', midi: 45, dur: 3, vel: 0.72 },    // A2
        { t: 45, div: 'pedal', midi: 50, dur: 3, vel: 0.75 },    // D3

        // --- Bar 9-10: Second phrase - rising sequence ---
        // Bar 9: F#5 dotted-half, E5 quarter, D5 half
        { t: 48, div: 'great', midi: 78, dur: 3, vel: 0.85 },    // F#5 dotted half
        { t: 51, div: 'great', midi: 76, dur: 1, vel: 0.80 },    // E5 quarter
        { t: 52, div: 'great', midi: 74, dur: 2, vel: 0.78 },    // D5 half
        // Swell
        { t: 48, div: 'swell', midi: 69, dur: 3, vel: 0.55 },    // A4
        { t: 48, div: 'swell', midi: 62, dur: 3, vel: 0.55 },    // D4
        { t: 51, div: 'swell', midi: 66, dur: 3, vel: 0.55 },    // F#4
        // Choir
        { t: 48, div: 'choir', midi: 54, dur: 6, vel: 0.48 },    // F#3
        // Pedal
        { t: 48, div: 'pedal', midi: 50, dur: 6, vel: 0.72 },    // D3

        // Bar 10: E5 dotted-half, D5 quarter, C#5 quarter, B4 quarter
        { t: 54, div: 'great', midi: 76, dur: 3, vel: 0.82 },    // E5 dotted half
        { t: 57, div: 'great', midi: 74, dur: 1, vel: 0.78 },    // D5 quarter
        { t: 58, div: 'great', midi: 73, dur: 1, vel: 0.78 },    // C#5 quarter
        { t: 59, div: 'great', midi: 71, dur: 1, vel: 0.80 },    // B4 quarter
        // Swell
        { t: 54, div: 'swell', midi: 64, dur: 3, vel: 0.55 },    // E4
        { t: 54, div: 'swell', midi: 69, dur: 3, vel: 0.55 },    // A4
        { t: 57, div: 'swell', midi: 66, dur: 3, vel: 0.55 },    // F#4
        // Pedal: A
        { t: 54, div: 'pedal', midi: 45, dur: 6, vel: 0.72 },    // A2

        // --- Bar 11: A4 half, C#5 quarter, E5 dotted-quarter, D5 eighth, C#5 quarter ---
        { t: 60, div: 'great', midi: 69, dur: 2, vel: 0.80 },    // A4 half
        { t: 62, div: 'great', midi: 73, dur: 1, vel: 0.82 },    // C#5 quarter
        { t: 63, div: 'great', midi: 76, dur: 1.5, vel: 0.85 },  // E5 dotted quarter
        { t: 64.5, div: 'great', midi: 74, dur: 0.5, vel: 0.75 },// D5 eighth
        { t: 65, div: 'great', midi: 73, dur: 1, vel: 0.80 },    // C#5 quarter
        // Swell
        { t: 60, div: 'swell', midi: 61, dur: 3, vel: 0.55 },    // C#4
        { t: 60, div: 'swell', midi: 57, dur: 3, vel: 0.55 },    // A3
        { t: 63, div: 'swell', midi: 64, dur: 3, vel: 0.55 },    // E4
        // Pedal
        { t: 60, div: 'pedal', midi: 45, dur: 3, vel: 0.72 },    // A2
        { t: 63, div: 'pedal', midi: 45, dur: 3, vel: 0.72 },    // A2

        // --- Bar 12: D5 dotted-half, ascending scale passage ---
        { t: 66, div: 'great', midi: 74, dur: 3, vel: 0.85 },    // D5 dotted half
        { t: 69, div: 'great', midi: 76, dur: 1, vel: 0.80 },    // E5 quarter
        { t: 70, div: 'great', midi: 78, dur: 1, vel: 0.82 },    // F#5 quarter
        { t: 71, div: 'great', midi: 79, dur: 1, vel: 0.85 },    // G5 quarter
        // Swell
        { t: 66, div: 'swell', midi: 66, dur: 6, vel: 0.55 },    // F#4
        { t: 66, div: 'swell', midi: 69, dur: 6, vel: 0.55 },    // A4
        // Choir
        { t: 66, div: 'choir', midi: 62, dur: 6, vel: 0.50 },    // D4
        // Pedal
        { t: 66, div: 'pedal', midi: 50, dur: 6, vel: 0.75 },    // D3

        // --- Bar 13: A5 dotted-half, G5 quarter, F#5 quarter, E5 quarter ---
        { t: 72, div: 'great', midi: 81, dur: 3, vel: 0.88 },    // A5 dotted half
        { t: 75, div: 'great', midi: 79, dur: 1, vel: 0.82 },    // G5 quarter
        { t: 76, div: 'great', midi: 78, dur: 1, vel: 0.80 },    // F#5 quarter
        { t: 77, div: 'great', midi: 76, dur: 1, vel: 0.82 },    // E5 quarter
        // Swell
        { t: 72, div: 'swell', midi: 69, dur: 3, vel: 0.58 },    // A4
        { t: 72, div: 'swell', midi: 73, dur: 3, vel: 0.58 },    // C#5
        { t: 75, div: 'swell', midi: 69, dur: 3, vel: 0.55 },    // A4
        // Pedal
        { t: 72, div: 'pedal', midi: 45, dur: 3, vel: 0.72 },    // A2
        { t: 75, div: 'pedal', midi: 45, dur: 3, vel: 0.72 },    // A2

        // --- Bar 14: F#5 half, D5 quarter, B4 dotted-quarter, C#5 eighth, D5 quarter ---
        { t: 78, div: 'great', midi: 78, dur: 2, vel: 0.85 },    // F#5 half
        { t: 80, div: 'great', midi: 74, dur: 1, vel: 0.80 },    // D5 quarter
        { t: 81, div: 'great', midi: 71, dur: 1.5, vel: 0.78 },  // B4 dotted quarter
        { t: 82.5, div: 'great', midi: 73, dur: 0.5, vel: 0.72 },// C#5 eighth
        { t: 83, div: 'great', midi: 74, dur: 1, vel: 0.82 },    // D5 quarter
        // Swell
        { t: 78, div: 'swell', midi: 66, dur: 3, vel: 0.55 },    // F#4
        { t: 81, div: 'swell', midi: 62, dur: 3, vel: 0.55 },    // D4
        { t: 81, div: 'swell', midi: 55, dur: 3, vel: 0.55 },    // G3
        // Pedal: B then E
        { t: 78, div: 'pedal', midi: 47, dur: 3, vel: 0.72 },    // B2
        { t: 81, div: 'pedal', midi: 40, dur: 3, vel: 0.72 },    // E2

        // --- Bar 15: E5 dotted-half, D5 quarter, C#5 half ---
        { t: 84, div: 'great', midi: 76, dur: 3, vel: 0.82 },    // E5 dotted half
        { t: 87, div: 'great', midi: 74, dur: 1, vel: 0.78 },    // D5 quarter
        { t: 88, div: 'great', midi: 73, dur: 2, vel: 0.80 },    // C#5 half
        // Swell
        { t: 84, div: 'swell', midi: 64, dur: 6, vel: 0.55 },    // E4
        { t: 84, div: 'swell', midi: 69, dur: 6, vel: 0.55 },    // A4
        // Pedal
        { t: 84, div: 'pedal', midi: 45, dur: 6, vel: 0.72 },    // A2

        // --- Bar 16: D5 whole (6 beats), half cadence on A ---
        { t: 90, div: 'great', midi: 74, dur: 6, vel: 0.85 },    // D5 whole bar
        // Swell
        { t: 90, div: 'swell', midi: 66, dur: 6, vel: 0.58 },    // F#4
        { t: 90, div: 'swell', midi: 69, dur: 6, vel: 0.58 },    // A4
        // Choir
        { t: 90, div: 'choir', midi: 62, dur: 6, vel: 0.50 },    // D4
        // Pedal
        { t: 90, div: 'pedal', midi: 50, dur: 6, vel: 0.78 },    // D3

        // --- Bars 17-20: Continuation of A theme, more elaborate ---
        // Bar 17: D5 quarter, E5 quarter, F#5 half, E5 quarter, D5 quarter
        { t: 96, div: 'great', midi: 74, dur: 1, vel: 0.82 },    // D5
        { t: 97, div: 'great', midi: 76, dur: 1, vel: 0.82 },    // E5
        { t: 98, div: 'great', midi: 78, dur: 2, vel: 0.85 },    // F#5 half
        { t: 100, div: 'great', midi: 76, dur: 1, vel: 0.80 },   // E5
        { t: 101, div: 'great', midi: 74, dur: 1, vel: 0.80 },   // D5
        // Swell: countermelody
        { t: 96, div: 'swell', midi: 69, dur: 2, vel: 0.55 },    // A4
        { t: 98, div: 'swell', midi: 66, dur: 2, vel: 0.55 },    // F#4
        { t: 100, div: 'swell', midi: 64, dur: 2, vel: 0.55 },   // E4
        // Choir
        { t: 96, div: 'choir', midi: 57, dur: 6, vel: 0.48 },    // A3
        // Pedal
        { t: 96, div: 'pedal', midi: 50, dur: 3, vel: 0.72 },    // D3
        { t: 99, div: 'pedal', midi: 45, dur: 3, vel: 0.72 },    // A2

        // Bar 18: C#5 quarter, D5 quarter, E5 half, D5 quarter, C#5 quarter
        { t: 102, div: 'great', midi: 73, dur: 1, vel: 0.80 },   // C#5
        { t: 103, div: 'great', midi: 74, dur: 1, vel: 0.82 },   // D5
        { t: 104, div: 'great', midi: 76, dur: 2, vel: 0.85 },   // E5 half
        { t: 106, div: 'great', midi: 74, dur: 1, vel: 0.80 },   // D5
        { t: 107, div: 'great', midi: 73, dur: 1, vel: 0.78 },   // C#5
        // Swell
        { t: 102, div: 'swell', midi: 64, dur: 3, vel: 0.55 },   // E4
        { t: 105, div: 'swell', midi: 66, dur: 3, vel: 0.55 },   // F#4
        // Pedal
        { t: 102, div: 'pedal', midi: 45, dur: 3, vel: 0.72 },   // A2
        { t: 105, div: 'pedal', midi: 50, dur: 3, vel: 0.72 },   // D3

        // Bar 19: B4 quarter, A4 quarter, G4 half, F#4 quarter, E4 quarter
        { t: 108, div: 'great', midi: 71, dur: 1, vel: 0.78 },   // B4
        { t: 109, div: 'great', midi: 69, dur: 1, vel: 0.78 },   // A4
        { t: 110, div: 'great', midi: 67, dur: 2, vel: 0.80 },   // G4 half
        { t: 112, div: 'great', midi: 66, dur: 1, vel: 0.75 },   // F#4
        { t: 113, div: 'great', midi: 64, dur: 1, vel: 0.75 },   // E4
        // Swell
        { t: 108, div: 'swell', midi: 59, dur: 3, vel: 0.55 },   // B3
        { t: 108, div: 'swell', midi: 55, dur: 3, vel: 0.55 },   // G3
        { t: 111, div: 'swell', midi: 57, dur: 3, vel: 0.55 },   // A3
        // Pedal
        { t: 108, div: 'pedal', midi: 43, dur: 3, vel: 0.72 },   // G2
        { t: 111, div: 'pedal', midi: 45, dur: 3, vel: 0.72 },   // A2

        // Bar 20: D5 dotted-half (strong cadence on D), then ascending
        { t: 114, div: 'great', midi: 74, dur: 3, vel: 0.88 },   // D5 dotted half
        { t: 117, div: 'great', midi: 73, dur: 1, vel: 0.80 },   // C#5
        { t: 118, div: 'great', midi: 74, dur: 1, vel: 0.82 },   // D5
        { t: 119, div: 'great', midi: 76, dur: 1, vel: 0.85 },   // E5
        // Swell
        { t: 114, div: 'swell', midi: 66, dur: 6, vel: 0.58 },   // F#4
        { t: 114, div: 'swell', midi: 69, dur: 6, vel: 0.58 },   // A4
        // Choir
        { t: 114, div: 'choir', midi: 62, dur: 6, vel: 0.50 },   // D4
        // Pedal
        { t: 114, div: 'pedal', midi: 50, dur: 6, vel: 0.78 },   // D3

        // --- Bars 21-23: Closing of A section, brilliant cadence ---
        // Bar 21: F#5 dotted-half, E5 dotted-quarter, D5 eighth, C#5 quarter
        { t: 120, div: 'great', midi: 78, dur: 3, vel: 0.88 },   // F#5 dotted half
        { t: 123, div: 'great', midi: 76, dur: 1.5, vel: 0.82 }, // E5 dotted quarter
        { t: 124.5, div: 'great', midi: 74, dur: 0.5, vel: 0.75 },// D5 eighth
        { t: 125, div: 'great', midi: 73, dur: 1, vel: 0.80 },   // C#5 quarter
        // Swell
        { t: 120, div: 'swell', midi: 69, dur: 3, vel: 0.58 },   // A4
        { t: 123, div: 'swell', midi: 66, dur: 3, vel: 0.55 },   // F#4
        // Pedal
        { t: 120, div: 'pedal', midi: 50, dur: 3, vel: 0.72 },   // D3
        { t: 123, div: 'pedal', midi: 45, dur: 3, vel: 0.72 },   // A2

        // Bar 22: D5 half, A5 quarter, F#5 dotted-quarter, G5 eighth, A5 quarter
        { t: 126, div: 'great', midi: 74, dur: 2, vel: 0.85 },   // D5 half
        { t: 128, div: 'great', midi: 81, dur: 1, vel: 0.90 },   // A5 quarter (peak)
        { t: 129, div: 'great', midi: 78, dur: 1.5, vel: 0.85 }, // F#5 dotted quarter
        { t: 130.5, div: 'great', midi: 79, dur: 0.5, vel: 0.78 },// G5 eighth
        { t: 131, div: 'great', midi: 81, dur: 1, vel: 0.88 },   // A5 quarter
        // Swell
        { t: 126, div: 'swell', midi: 66, dur: 3, vel: 0.58 },   // F#4
        { t: 126, div: 'swell', midi: 62, dur: 3, vel: 0.58 },   // D4
        { t: 129, div: 'swell', midi: 69, dur: 3, vel: 0.58 },   // A4
        // Pedal
        { t: 126, div: 'pedal', midi: 50, dur: 3, vel: 0.75 },   // D3
        { t: 129, div: 'pedal', midi: 50, dur: 3, vel: 0.75 },   // D3

        // Bar 23: D5 whole bar - final cadence of A section
        { t: 132, div: 'great', midi: 78, dur: 2, vel: 0.88 },   // F#5
        { t: 134, div: 'great', midi: 76, dur: 1, vel: 0.82 },   // E5
        { t: 135, div: 'great', midi: 74, dur: 3, vel: 0.90 },   // D5 dotted half (cadence)
        // Swell
        { t: 132, div: 'swell', midi: 69, dur: 6, vel: 0.60 },   // A4
        { t: 132, div: 'swell', midi: 66, dur: 6, vel: 0.60 },   // F#4
        // Choir
        { t: 132, div: 'choir', midi: 62, dur: 6, vel: 0.52 },   // D4
        // Pedal
        { t: 132, div: 'pedal', midi: 50, dur: 6, vel: 0.80 },   // D3

        // ============================================================
        // SECTION A REPEAT (bars 24-46) - Same material, slightly varied dynamics
        // ============================================================

        // Bar 24 (=Bar 1 repeat): Opening fanfare
        { t: 138, div: 'great', midi: 74, dur: 3, vel: 0.88 },
        { t: 141, div: 'great', midi: 74, dur: 1, vel: 0.82 },
        { t: 142, div: 'great', midi: 74, dur: 1, vel: 0.80 },
        { t: 143, div: 'great', midi: 76, dur: 1, vel: 0.82 },
        { t: 138, div: 'swell', midi: 66, dur: 6, vel: 0.58 },
        { t: 138, div: 'swell', midi: 69, dur: 6, vel: 0.58 },
        { t: 138, div: 'choir', midi: 62, dur: 6, vel: 0.52 },
        { t: 138, div: 'pedal', midi: 50, dur: 6, vel: 0.78 },

        // Bar 25 (=Bar 2 repeat)
        { t: 144, div: 'great', midi: 78, dur: 3, vel: 0.88 },
        { t: 147, div: 'great', midi: 76, dur: 1, vel: 0.80 },
        { t: 148, div: 'great', midi: 74, dur: 1, vel: 0.78 },
        { t: 149, div: 'great', midi: 73, dur: 1, vel: 0.80 },
        { t: 144, div: 'swell', midi: 69, dur: 3, vel: 0.58 },
        { t: 147, div: 'swell', midi: 66, dur: 3, vel: 0.58 },
        { t: 144, div: 'pedal', midi: 45, dur: 6, vel: 0.78 },

        // Bar 26 (=Bar 3 repeat)
        { t: 150, div: 'great', midi: 74, dur: 2, vel: 0.85 },
        { t: 152, div: 'great', midi: 78, dur: 1, vel: 0.88 },
        { t: 153, div: 'great', midi: 81, dur: 1.5, vel: 0.90 },
        { t: 154.5, div: 'great', midi: 79, dur: 0.5, vel: 0.80 },
        { t: 155, div: 'great', midi: 78, dur: 1, vel: 0.85 },
        { t: 150, div: 'swell', midi: 66, dur: 3, vel: 0.58 },
        { t: 153, div: 'swell', midi: 69, dur: 3, vel: 0.58 },
        { t: 150, div: 'choir', midi: 62, dur: 6, vel: 0.52 },
        { t: 150, div: 'pedal', midi: 50, dur: 3, vel: 0.78 },
        { t: 153, div: 'pedal', midi: 50, dur: 3, vel: 0.75 },

        // Bar 27 (=Bar 4 repeat)
        { t: 156, div: 'great', midi: 76, dur: 2, vel: 0.82 },
        { t: 158, div: 'great', midi: 79, dur: 1, vel: 0.85 },
        { t: 159, div: 'great', midi: 78, dur: 1.5, vel: 0.88 },
        { t: 160.5, div: 'great', midi: 76, dur: 0.5, vel: 0.78 },
        { t: 161, div: 'great', midi: 74, dur: 1, vel: 0.82 },
        { t: 156, div: 'swell', midi: 67, dur: 3, vel: 0.58 },
        { t: 156, div: 'swell', midi: 71, dur: 3, vel: 0.58 },
        { t: 159, div: 'swell', midi: 69, dur: 3, vel: 0.58 },
        { t: 156, div: 'pedal', midi: 43, dur: 3, vel: 0.75 },
        { t: 159, div: 'pedal', midi: 45, dur: 3, vel: 0.75 },

        // Bar 28 (=Bar 5 repeat)
        { t: 162, div: 'great', midi: 74, dur: 3, vel: 0.85 },
        { t: 165, div: 'great', midi: 73, dur: 1, vel: 0.80 },
        { t: 166, div: 'great', midi: 71, dur: 1, vel: 0.78 },
        { t: 167, div: 'great', midi: 69, dur: 1, vel: 0.80 },
        { t: 162, div: 'swell', midi: 66, dur: 6, vel: 0.58 },
        { t: 162, div: 'swell', midi: 62, dur: 6, vel: 0.58 },
        { t: 162, div: 'pedal', midi: 50, dur: 6, vel: 0.75 },

        // Bar 29 (=Bar 6 repeat)
        { t: 168, div: 'great', midi: 71, dur: 3, vel: 0.82 },
        { t: 171, div: 'great', midi: 69, dur: 1, vel: 0.80 },
        { t: 172, div: 'great', midi: 67, dur: 1, vel: 0.78 },
        { t: 173, div: 'great', midi: 66, dur: 1, vel: 0.80 },
        { t: 168, div: 'swell', midi: 62, dur: 3, vel: 0.58 },
        { t: 168, div: 'swell', midi: 55, dur: 3, vel: 0.58 },
        { t: 171, div: 'swell', midi: 62, dur: 3, vel: 0.58 },
        { t: 168, div: 'pedal', midi: 43, dur: 3, vel: 0.75 },
        { t: 171, div: 'pedal', midi: 50, dur: 3, vel: 0.75 },

        // Bar 30 (=Bar 7 repeat)
        { t: 174, div: 'great', midi: 67, dur: 2, vel: 0.80 },
        { t: 176, div: 'great', midi: 71, dur: 1, vel: 0.85 },
        { t: 177, div: 'great', midi: 69, dur: 1.5, vel: 0.82 },
        { t: 178.5, div: 'great', midi: 67, dur: 0.5, vel: 0.75 },
        { t: 179, div: 'great', midi: 66, dur: 1, vel: 0.80 },
        { t: 174, div: 'swell', midi: 59, dur: 3, vel: 0.58 },
        { t: 174, div: 'swell', midi: 55, dur: 3, vel: 0.58 },
        { t: 177, div: 'swell', midi: 62, dur: 3, vel: 0.58 },
        { t: 174, div: 'pedal', midi: 40, dur: 3, vel: 0.75 },
        { t: 177, div: 'pedal', midi: 45, dur: 3, vel: 0.75 },

        // Bar 31 (=Bar 8 repeat): rising to cadence
        { t: 180, div: 'great', midi: 69, dur: 3, vel: 0.85 },
        { t: 183, div: 'great', midi: 71, dur: 1, vel: 0.80 },
        { t: 184, div: 'great', midi: 73, dur: 1, vel: 0.82 },
        { t: 185, div: 'great', midi: 74, dur: 1, vel: 0.88 },
        { t: 180, div: 'swell', midi: 66, dur: 3, vel: 0.58 },
        { t: 180, div: 'swell', midi: 61, dur: 3, vel: 0.58 },
        { t: 183, div: 'swell', midi: 62, dur: 3, vel: 0.58 },
        { t: 183, div: 'swell', midi: 66, dur: 3, vel: 0.58 },
        { t: 180, div: 'pedal', midi: 45, dur: 3, vel: 0.75 },
        { t: 183, div: 'pedal', midi: 50, dur: 3, vel: 0.78 },

        // Bars 32-35: Repeat of bars 9-12
        // Bar 32
        { t: 186, div: 'great', midi: 78, dur: 3, vel: 0.88 },
        { t: 189, div: 'great', midi: 76, dur: 1, vel: 0.82 },
        { t: 190, div: 'great', midi: 74, dur: 2, vel: 0.80 },
        { t: 186, div: 'swell', midi: 69, dur: 3, vel: 0.58 },
        { t: 186, div: 'swell', midi: 62, dur: 3, vel: 0.58 },
        { t: 189, div: 'swell', midi: 66, dur: 3, vel: 0.58 },
        { t: 186, div: 'pedal', midi: 50, dur: 6, vel: 0.75 },

        // Bar 33
        { t: 192, div: 'great', midi: 76, dur: 3, vel: 0.85 },
        { t: 195, div: 'great', midi: 74, dur: 1, vel: 0.80 },
        { t: 196, div: 'great', midi: 73, dur: 1, vel: 0.80 },
        { t: 197, div: 'great', midi: 71, dur: 1, vel: 0.82 },
        { t: 192, div: 'swell', midi: 64, dur: 3, vel: 0.58 },
        { t: 192, div: 'swell', midi: 69, dur: 3, vel: 0.58 },
        { t: 195, div: 'swell', midi: 66, dur: 3, vel: 0.58 },
        { t: 192, div: 'pedal', midi: 45, dur: 6, vel: 0.75 },

        // Bar 34
        { t: 198, div: 'great', midi: 69, dur: 2, vel: 0.82 },
        { t: 200, div: 'great', midi: 73, dur: 1, vel: 0.85 },
        { t: 201, div: 'great', midi: 76, dur: 1.5, vel: 0.88 },
        { t: 202.5, div: 'great', midi: 74, dur: 0.5, vel: 0.78 },
        { t: 203, div: 'great', midi: 73, dur: 1, vel: 0.82 },
        { t: 198, div: 'swell', midi: 61, dur: 3, vel: 0.58 },
        { t: 198, div: 'swell', midi: 57, dur: 3, vel: 0.58 },
        { t: 201, div: 'swell', midi: 64, dur: 3, vel: 0.58 },
        { t: 198, div: 'pedal', midi: 45, dur: 3, vel: 0.75 },
        { t: 201, div: 'pedal', midi: 45, dur: 3, vel: 0.75 },

        // Bar 35
        { t: 204, div: 'great', midi: 74, dur: 3, vel: 0.88 },
        { t: 207, div: 'great', midi: 76, dur: 1, vel: 0.82 },
        { t: 208, div: 'great', midi: 78, dur: 1, vel: 0.85 },
        { t: 209, div: 'great', midi: 79, dur: 1, vel: 0.88 },
        { t: 204, div: 'swell', midi: 66, dur: 6, vel: 0.58 },
        { t: 204, div: 'swell', midi: 69, dur: 6, vel: 0.58 },
        { t: 204, div: 'choir', midi: 62, dur: 6, vel: 0.52 },
        { t: 204, div: 'pedal', midi: 50, dur: 6, vel: 0.78 },

        // Bars 36-39: Repeat of bars 13-16 (climactic)
        // Bar 36
        { t: 210, div: 'great', midi: 81, dur: 3, vel: 0.90 },
        { t: 213, div: 'great', midi: 79, dur: 1, vel: 0.85 },
        { t: 214, div: 'great', midi: 78, dur: 1, vel: 0.82 },
        { t: 215, div: 'great', midi: 76, dur: 1, vel: 0.85 },
        { t: 210, div: 'swell', midi: 69, dur: 3, vel: 0.60 },
        { t: 210, div: 'swell', midi: 73, dur: 3, vel: 0.60 },
        { t: 213, div: 'swell', midi: 69, dur: 3, vel: 0.58 },
        { t: 210, div: 'pedal', midi: 45, dur: 6, vel: 0.75 },

        // Bar 37
        { t: 216, div: 'great', midi: 78, dur: 2, vel: 0.88 },
        { t: 218, div: 'great', midi: 74, dur: 1, vel: 0.82 },
        { t: 219, div: 'great', midi: 71, dur: 1.5, vel: 0.80 },
        { t: 220.5, div: 'great', midi: 73, dur: 0.5, vel: 0.75 },
        { t: 221, div: 'great', midi: 74, dur: 1, vel: 0.85 },
        { t: 216, div: 'swell', midi: 66, dur: 3, vel: 0.58 },
        { t: 219, div: 'swell', midi: 62, dur: 3, vel: 0.58 },
        { t: 216, div: 'pedal', midi: 47, dur: 3, vel: 0.75 },
        { t: 219, div: 'pedal', midi: 40, dur: 3, vel: 0.75 },

        // Bar 38
        { t: 222, div: 'great', midi: 76, dur: 3, vel: 0.85 },
        { t: 225, div: 'great', midi: 74, dur: 1, vel: 0.80 },
        { t: 226, div: 'great', midi: 73, dur: 2, vel: 0.82 },
        { t: 222, div: 'swell', midi: 64, dur: 6, vel: 0.58 },
        { t: 222, div: 'swell', midi: 69, dur: 6, vel: 0.58 },
        { t: 222, div: 'pedal', midi: 45, dur: 6, vel: 0.75 },

        // Bar 39: Final cadence of A repeat
        { t: 228, div: 'great', midi: 78, dur: 2, vel: 0.90 },
        { t: 230, div: 'great', midi: 76, dur: 1, vel: 0.85 },
        { t: 231, div: 'great', midi: 74, dur: 3, vel: 0.92 },
        { t: 228, div: 'swell', midi: 66, dur: 6, vel: 0.62 },
        { t: 228, div: 'swell', midi: 69, dur: 6, vel: 0.62 },
        { t: 228, div: 'choir', midi: 62, dur: 6, vel: 0.55 },
        { t: 228, div: 'pedal', midi: 50, dur: 6, vel: 0.82 },

        // ============================================================
        // SECTION B - Contrasting episode (bars 40-62)
        // Shifts to A major, then through bm, em, returns
        // Lighter texture, swell takes melody
        // ============================================================

        // Bar 40: Swell melody in A major - A4 dotted-half, G#4 quarter, A4 quarter, B4 quarter
        { t: 234, div: 'swell', midi: 69, dur: 3, vel: 0.72 },   // A4 dotted half
        { t: 237, div: 'swell', midi: 68, dur: 1, vel: 0.68 },   // G#4 quarter
        { t: 238, div: 'swell', midi: 69, dur: 1, vel: 0.70 },   // A4 quarter
        { t: 239, div: 'swell', midi: 71, dur: 1, vel: 0.72 },   // B4 quarter
        // Choir accompaniment
        { t: 234, div: 'choir', midi: 61, dur: 6, vel: 0.48 },   // C#4
        { t: 234, div: 'choir', midi: 57, dur: 6, vel: 0.48 },   // A3
        // Pedal
        { t: 234, div: 'pedal', midi: 45, dur: 6, vel: 0.65 },   // A2

        // Bar 41: C#5 dotted-half, B4 quarter, A4 half
        { t: 240, div: 'swell', midi: 73, dur: 3, vel: 0.72 },   // C#5
        { t: 243, div: 'swell', midi: 71, dur: 1, vel: 0.68 },   // B4
        { t: 244, div: 'swell', midi: 69, dur: 2, vel: 0.70 },   // A4 half
        // Choir
        { t: 240, div: 'choir', midi: 64, dur: 3, vel: 0.48 },   // E4
        { t: 243, div: 'choir', midi: 62, dur: 3, vel: 0.48 },   // D4
        // Pedal
        { t: 240, div: 'pedal', midi: 40, dur: 3, vel: 0.65 },   // E2
        { t: 243, div: 'pedal', midi: 45, dur: 3, vel: 0.65 },   // A2

        // Bar 42: E5 dotted-half, D5 quarter, C#5 quarter, B4 quarter
        { t: 246, div: 'swell', midi: 76, dur: 3, vel: 0.75 },   // E5
        { t: 249, div: 'swell', midi: 74, dur: 1, vel: 0.70 },   // D5
        { t: 250, div: 'swell', midi: 73, dur: 1, vel: 0.70 },   // C#5
        { t: 251, div: 'swell', midi: 71, dur: 1, vel: 0.72 },   // B4
        // Choir
        { t: 246, div: 'choir', midi: 64, dur: 6, vel: 0.48 },   // E4
        { t: 246, div: 'choir', midi: 69, dur: 6, vel: 0.48 },   // A4
        // Pedal
        { t: 246, div: 'pedal', midi: 45, dur: 6, vel: 0.65 },   // A2

        // Bar 43: A4 half, C#5 quarter, E5 quarter, D5 quarter, C#5 quarter
        { t: 252, div: 'swell', midi: 69, dur: 2, vel: 0.70 },   // A4
        { t: 254, div: 'swell', midi: 73, dur: 1, vel: 0.72 },   // C#5
        { t: 255, div: 'swell', midi: 76, dur: 1, vel: 0.75 },   // E5
        { t: 256, div: 'swell', midi: 74, dur: 1, vel: 0.72 },   // D5
        { t: 257, div: 'swell', midi: 73, dur: 1, vel: 0.70 },   // C#5
        // Choir
        { t: 252, div: 'choir', midi: 57, dur: 3, vel: 0.48 },   // A3
        { t: 255, div: 'choir', midi: 61, dur: 3, vel: 0.48 },   // C#4
        // Pedal
        { t: 252, div: 'pedal', midi: 45, dur: 3, vel: 0.65 },   // A2
        { t: 255, div: 'pedal', midi: 40, dur: 3, vel: 0.65 },   // E2

        // Bar 44: B4 dotted-half - transition to B minor
        { t: 258, div: 'swell', midi: 71, dur: 3, vel: 0.72 },   // B4
        { t: 261, div: 'swell', midi: 69, dur: 1, vel: 0.68 },   // A4
        { t: 262, div: 'swell', midi: 71, dur: 1, vel: 0.70 },   // B4
        { t: 263, div: 'swell', midi: 73, dur: 1, vel: 0.72 },   // C#5
        // Choir
        { t: 258, div: 'choir', midi: 59, dur: 6, vel: 0.48 },   // B3
        { t: 258, div: 'choir', midi: 66, dur: 6, vel: 0.48 },   // F#4
        // Pedal
        { t: 258, div: 'pedal', midi: 47, dur: 6, vel: 0.65 },   // B2

        // Bar 45-46: B minor episode
        // Bar 45
        { t: 264, div: 'swell', midi: 74, dur: 3, vel: 0.72 },   // D5
        { t: 267, div: 'swell', midi: 73, dur: 1, vel: 0.68 },   // C#5
        { t: 268, div: 'swell', midi: 71, dur: 2, vel: 0.70 },   // B4 half
        { t: 264, div: 'choir', midi: 66, dur: 3, vel: 0.48 },   // F#4
        { t: 267, div: 'choir', midi: 64, dur: 3, vel: 0.48 },   // E4
        { t: 264, div: 'pedal', midi: 47, dur: 3, vel: 0.65 },   // B2
        { t: 267, div: 'pedal', midi: 42, dur: 3, vel: 0.65 },   // F#2

        // Bar 46
        { t: 270, div: 'swell', midi: 69, dur: 2, vel: 0.68 },   // A4
        { t: 272, div: 'swell', midi: 71, dur: 1, vel: 0.70 },   // B4
        { t: 273, div: 'swell', midi: 73, dur: 1.5, vel: 0.72 }, // C#5
        { t: 274.5, div: 'swell', midi: 71, dur: 0.5, vel: 0.65 },// B4
        { t: 275, div: 'swell', midi: 69, dur: 1, vel: 0.70 },   // A4
        { t: 270, div: 'choir', midi: 62, dur: 6, vel: 0.48 },   // D4
        { t: 270, div: 'pedal', midi: 50, dur: 3, vel: 0.65 },   // D3
        { t: 273, div: 'pedal', midi: 45, dur: 3, vel: 0.65 },   // A2

        // ============================================================
        // SECTION B continued (bars 47-62) - developing, modulating
        // ============================================================

        // Bar 47: G major flavor
        { t: 276, div: 'swell', midi: 67, dur: 3, vel: 0.70 },   // G4
        { t: 279, div: 'swell', midi: 69, dur: 1, vel: 0.68 },   // A4
        { t: 280, div: 'swell', midi: 71, dur: 1, vel: 0.70 },   // B4
        { t: 281, div: 'swell', midi: 73, dur: 1, vel: 0.72 },   // C#5
        { t: 276, div: 'choir', midi: 59, dur: 6, vel: 0.48 },   // B3
        { t: 276, div: 'choir', midi: 55, dur: 6, vel: 0.48 },   // G3
        { t: 276, div: 'pedal', midi: 43, dur: 6, vel: 0.62 },   // G2

        // Bar 48
        { t: 282, div: 'swell', midi: 74, dur: 3, vel: 0.72 },   // D5
        { t: 285, div: 'swell', midi: 73, dur: 1, vel: 0.68 },   // C#5
        { t: 286, div: 'swell', midi: 71, dur: 1, vel: 0.70 },   // B4
        { t: 287, div: 'swell', midi: 69, dur: 1, vel: 0.68 },   // A4
        { t: 282, div: 'choir', midi: 62, dur: 3, vel: 0.48 },   // D4
        { t: 285, div: 'choir', midi: 66, dur: 3, vel: 0.48 },   // F#4
        { t: 282, div: 'pedal', midi: 50, dur: 6, vel: 0.65 },   // D3

        // Bar 49: E minor passage
        { t: 288, div: 'swell', midi: 76, dur: 2, vel: 0.72 },   // E5
        { t: 290, div: 'swell', midi: 74, dur: 1, vel: 0.70 },   // D5
        { t: 291, div: 'swell', midi: 71, dur: 1.5, vel: 0.68 }, // B4
        { t: 292.5, div: 'swell', midi: 73, dur: 0.5, vel: 0.65 },// C#5
        { t: 293, div: 'swell', midi: 74, dur: 1, vel: 0.70 },   // D5
        { t: 288, div: 'choir', midi: 64, dur: 6, vel: 0.48 },   // E4
        { t: 288, div: 'choir', midi: 55, dur: 6, vel: 0.48 },   // G3
        { t: 288, div: 'pedal', midi: 40, dur: 6, vel: 0.62 },   // E2

        // Bar 50
        { t: 294, div: 'swell', midi: 73, dur: 3, vel: 0.70 },   // C#5
        { t: 297, div: 'swell', midi: 71, dur: 1, vel: 0.68 },   // B4
        { t: 298, div: 'swell', midi: 69, dur: 1, vel: 0.68 },   // A4
        { t: 299, div: 'swell', midi: 71, dur: 1, vel: 0.70 },   // B4
        { t: 294, div: 'choir', midi: 57, dur: 6, vel: 0.48 },   // A3
        { t: 294, div: 'pedal', midi: 45, dur: 6, vel: 0.65 },   // A2

        // Bar 51-52: Sequence through F#m
        // Bar 51
        { t: 300, div: 'swell', midi: 66, dur: 3, vel: 0.68 },   // F#4
        { t: 303, div: 'swell', midi: 69, dur: 1, vel: 0.70 },   // A4
        { t: 304, div: 'swell', midi: 73, dur: 1, vel: 0.72 },   // C#5
        { t: 305, div: 'swell', midi: 71, dur: 1, vel: 0.70 },   // B4
        { t: 300, div: 'choir', midi: 54, dur: 6, vel: 0.48 },   // F#3
        { t: 300, div: 'choir', midi: 61, dur: 6, vel: 0.48 },   // C#4
        { t: 300, div: 'pedal', midi: 42, dur: 6, vel: 0.62 },   // F#2

        // Bar 52
        { t: 306, div: 'swell', midi: 69, dur: 2, vel: 0.70 },   // A4
        { t: 308, div: 'swell', midi: 71, dur: 1, vel: 0.72 },   // B4
        { t: 309, div: 'swell', midi: 73, dur: 1.5, vel: 0.75 }, // C#5
        { t: 310.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.70 },// D5
        { t: 311, div: 'swell', midi: 76, dur: 1, vel: 0.75 },   // E5
        { t: 306, div: 'choir', midi: 57, dur: 6, vel: 0.48 },   // A3
        { t: 306, div: 'pedal', midi: 45, dur: 3, vel: 0.65 },   // A2
        { t: 309, div: 'pedal', midi: 40, dur: 3, vel: 0.65 },   // E2

        // Bar 53-54: Building back toward D major
        // Bar 53
        { t: 312, div: 'swell', midi: 78, dur: 3, vel: 0.78 },   // F#5
        { t: 315, div: 'swell', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 316, div: 'swell', midi: 74, dur: 1, vel: 0.72 },   // D5
        { t: 317, div: 'swell', midi: 73, dur: 1, vel: 0.70 },   // C#5
        // Great joins in
        { t: 312, div: 'great', midi: 62, dur: 6, vel: 0.60 },   // D4
        { t: 312, div: 'great', midi: 66, dur: 6, vel: 0.60 },   // F#4
        { t: 312, div: 'pedal', midi: 50, dur: 6, vel: 0.68 },   // D3

        // Bar 54
        { t: 318, div: 'swell', midi: 74, dur: 3, vel: 0.75 },   // D5
        { t: 321, div: 'swell', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 322, div: 'swell', midi: 74, dur: 1, vel: 0.72 },   // D5
        { t: 323, div: 'swell', midi: 73, dur: 1, vel: 0.75 },   // C#5
        { t: 318, div: 'great', midi: 66, dur: 3, vel: 0.62 },   // F#4
        { t: 321, div: 'great', midi: 69, dur: 3, vel: 0.62 },   // A4
        { t: 318, div: 'pedal', midi: 42, dur: 3, vel: 0.65 },   // F#2
        { t: 321, div: 'pedal', midi: 45, dur: 3, vel: 0.68 },   // A2

        // Bar 55-56: Transition, building intensity
        // Bar 55
        { t: 324, div: 'swell', midi: 71, dur: 2, vel: 0.72 },   // B4
        { t: 326, div: 'swell', midi: 74, dur: 1, vel: 0.75 },   // D5
        { t: 327, div: 'swell', midi: 76, dur: 1.5, vel: 0.78 }, // E5
        { t: 328.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.70 },// D5
        { t: 329, div: 'swell', midi: 73, dur: 1, vel: 0.72 },   // C#5
        { t: 324, div: 'great', midi: 55, dur: 3, vel: 0.62 },   // G3
        { t: 324, div: 'great', midi: 59, dur: 3, vel: 0.62 },   // B3
        { t: 327, div: 'great', midi: 64, dur: 3, vel: 0.62 },   // E4
        { t: 324, div: 'pedal', midi: 43, dur: 3, vel: 0.65 },   // G2
        { t: 327, div: 'pedal', midi: 40, dur: 3, vel: 0.65 },   // E2

        // Bar 56: Dominant preparation
        { t: 330, div: 'swell', midi: 74, dur: 3, vel: 0.75 },   // D5
        { t: 333, div: 'swell', midi: 73, dur: 1, vel: 0.72 },   // C#5
        { t: 334, div: 'swell', midi: 74, dur: 2, vel: 0.78 },   // D5 half
        { t: 330, div: 'great', midi: 66, dur: 3, vel: 0.65 },   // F#4
        { t: 333, div: 'great', midi: 69, dur: 3, vel: 0.68 },   // A4
        { t: 330, div: 'choir', midi: 57, dur: 6, vel: 0.50 },   // A3
        { t: 330, div: 'pedal', midi: 45, dur: 6, vel: 0.70 },   // A2

        // Bars 57-62: Return transition, building to A section return
        // Bar 57: Great takes over melody
        { t: 336, div: 'great', midi: 74, dur: 3, vel: 0.82 },   // D5
        { t: 339, div: 'great', midi: 74, dur: 1, vel: 0.78 },   // D5
        { t: 340, div: 'great', midi: 76, dur: 1, vel: 0.80 },   // E5
        { t: 341, div: 'great', midi: 78, dur: 1, vel: 0.82 },   // F#5
        { t: 336, div: 'swell', midi: 66, dur: 6, vel: 0.58 },   // F#4
        { t: 336, div: 'swell', midi: 69, dur: 6, vel: 0.58 },   // A4
        { t: 336, div: 'pedal', midi: 50, dur: 6, vel: 0.72 },   // D3

        // Bar 58
        { t: 342, div: 'great', midi: 79, dur: 3, vel: 0.85 },   // G5
        { t: 345, div: 'great', midi: 78, dur: 1, vel: 0.80 },   // F#5
        { t: 346, div: 'great', midi: 76, dur: 1, vel: 0.80 },   // E5
        { t: 347, div: 'great', midi: 74, dur: 1, vel: 0.78 },   // D5
        { t: 342, div: 'swell', midi: 67, dur: 3, vel: 0.58 },   // G4
        { t: 342, div: 'swell', midi: 71, dur: 3, vel: 0.58 },   // B4
        { t: 345, div: 'swell', midi: 69, dur: 3, vel: 0.58 },   // A4
        { t: 342, div: 'pedal', midi: 43, dur: 3, vel: 0.72 },   // G2
        { t: 345, div: 'pedal', midi: 45, dur: 3, vel: 0.72 },   // A2

        // Bar 59
        { t: 348, div: 'great', midi: 73, dur: 2, vel: 0.82 },   // C#5
        { t: 350, div: 'great', midi: 74, dur: 1, vel: 0.82 },   // D5
        { t: 351, div: 'great', midi: 76, dur: 1.5, vel: 0.85 }, // E5
        { t: 352.5, div: 'great', midi: 74, dur: 0.5, vel: 0.78 },// D5
        { t: 353, div: 'great', midi: 73, dur: 1, vel: 0.80 },   // C#5
        { t: 348, div: 'swell', midi: 64, dur: 6, vel: 0.58 },   // E4
        { t: 348, div: 'swell', midi: 69, dur: 6, vel: 0.58 },   // A4
        { t: 348, div: 'pedal', midi: 45, dur: 6, vel: 0.72 },   // A2

        // Bar 60: Building
        { t: 354, div: 'great', midi: 74, dur: 2, vel: 0.85 },   // D5
        { t: 356, div: 'great', midi: 76, dur: 1, vel: 0.85 },   // E5
        { t: 357, div: 'great', midi: 78, dur: 1.5, vel: 0.88 }, // F#5
        { t: 358.5, div: 'great', midi: 79, dur: 0.5, vel: 0.82 },// G5
        { t: 359, div: 'great', midi: 81, dur: 1, vel: 0.90 },   // A5
        { t: 354, div: 'swell', midi: 66, dur: 6, vel: 0.60 },   // F#4
        { t: 354, div: 'swell', midi: 62, dur: 6, vel: 0.60 },   // D4
        { t: 354, div: 'choir', midi: 57, dur: 6, vel: 0.52 },   // A3
        { t: 354, div: 'pedal', midi: 50, dur: 3, vel: 0.75 },   // D3
        { t: 357, div: 'pedal', midi: 50, dur: 3, vel: 0.75 },   // D3

        // Bar 61: Dominant preparation for return
        { t: 360, div: 'great', midi: 81, dur: 3, vel: 0.90 },   // A5
        { t: 363, div: 'great', midi: 79, dur: 1, vel: 0.85 },   // G5
        { t: 364, div: 'great', midi: 78, dur: 1, vel: 0.85 },   // F#5
        { t: 365, div: 'great', midi: 76, dur: 1, vel: 0.82 },   // E5
        { t: 360, div: 'swell', midi: 69, dur: 3, vel: 0.60 },   // A4
        { t: 360, div: 'swell', midi: 73, dur: 3, vel: 0.60 },   // C#5
        { t: 363, div: 'swell', midi: 69, dur: 3, vel: 0.58 },   // A4
        { t: 363, div: 'swell', midi: 66, dur: 3, vel: 0.58 },   // F#4
        { t: 360, div: 'pedal', midi: 45, dur: 6, vel: 0.75 },   // A2

        // Bar 62: Half cadence, V of D
        { t: 366, div: 'great', midi: 78, dur: 2, vel: 0.88 },   // F#5
        { t: 368, div: 'great', midi: 76, dur: 1, vel: 0.85 },   // E5
        { t: 369, div: 'great', midi: 74, dur: 1.5, vel: 0.82 }, // D5
        { t: 370.5, div: 'great', midi: 73, dur: 0.5, vel: 0.78 },// C#5
        { t: 371, div: 'great', midi: 74, dur: 1, vel: 0.82 },   // D5 pickup
        // Strong dominant chord
        { t: 366, div: 'swell', midi: 61, dur: 6, vel: 0.62 },   // C#4
        { t: 366, div: 'swell', midi: 64, dur: 6, vel: 0.62 },   // E4
        { t: 366, div: 'swell', midi: 69, dur: 6, vel: 0.62 },   // A4
        { t: 366, div: 'choir', midi: 57, dur: 6, vel: 0.52 },   // A3
        { t: 366, div: 'pedal', midi: 45, dur: 6, vel: 0.78 },   // A2

        // ============================================================
        // SECTION B REPEAT (bars 63-85)
        // ============================================================

        // Bar 63 (repeat of bar 40)
        { t: 372, div: 'swell', midi: 69, dur: 3, vel: 0.72 },
        { t: 375, div: 'swell', midi: 68, dur: 1, vel: 0.68 },
        { t: 376, div: 'swell', midi: 69, dur: 1, vel: 0.70 },
        { t: 377, div: 'swell', midi: 71, dur: 1, vel: 0.72 },
        { t: 372, div: 'choir', midi: 61, dur: 6, vel: 0.50 },
        { t: 372, div: 'choir', midi: 57, dur: 6, vel: 0.50 },
        { t: 372, div: 'pedal', midi: 45, dur: 6, vel: 0.68 },

        // Bar 64
        { t: 378, div: 'swell', midi: 73, dur: 3, vel: 0.72 },
        { t: 381, div: 'swell', midi: 71, dur: 1, vel: 0.68 },
        { t: 382, div: 'swell', midi: 69, dur: 2, vel: 0.70 },
        { t: 378, div: 'choir', midi: 64, dur: 3, vel: 0.50 },
        { t: 381, div: 'choir', midi: 62, dur: 3, vel: 0.50 },
        { t: 378, div: 'pedal', midi: 40, dur: 3, vel: 0.68 },
        { t: 381, div: 'pedal', midi: 45, dur: 3, vel: 0.68 },

        // Bar 65
        { t: 384, div: 'swell', midi: 76, dur: 3, vel: 0.75 },
        { t: 387, div: 'swell', midi: 74, dur: 1, vel: 0.72 },
        { t: 388, div: 'swell', midi: 73, dur: 1, vel: 0.72 },
        { t: 389, div: 'swell', midi: 71, dur: 1, vel: 0.72 },
        { t: 384, div: 'choir', midi: 64, dur: 6, vel: 0.50 },
        { t: 384, div: 'pedal', midi: 45, dur: 6, vel: 0.68 },

        // Bar 66
        { t: 390, div: 'swell', midi: 69, dur: 2, vel: 0.72 },
        { t: 392, div: 'swell', midi: 73, dur: 1, vel: 0.75 },
        { t: 393, div: 'swell', midi: 76, dur: 1, vel: 0.78 },
        { t: 394, div: 'swell', midi: 74, dur: 1, vel: 0.72 },
        { t: 395, div: 'swell', midi: 73, dur: 1, vel: 0.72 },
        { t: 390, div: 'choir', midi: 57, dur: 3, vel: 0.50 },
        { t: 393, div: 'choir', midi: 61, dur: 3, vel: 0.50 },
        { t: 390, div: 'pedal', midi: 45, dur: 3, vel: 0.68 },
        { t: 393, div: 'pedal', midi: 40, dur: 3, vel: 0.68 },

        // Bars 67-72: abbreviated repeat with variations
        // Bar 67
        { t: 396, div: 'swell', midi: 71, dur: 3, vel: 0.72 },
        { t: 399, div: 'swell', midi: 69, dur: 1, vel: 0.70 },
        { t: 400, div: 'swell', midi: 71, dur: 1, vel: 0.72 },
        { t: 401, div: 'swell', midi: 73, dur: 1, vel: 0.75 },
        { t: 396, div: 'choir', midi: 59, dur: 6, vel: 0.50 },
        { t: 396, div: 'pedal', midi: 47, dur: 6, vel: 0.68 },

        // Bar 68
        { t: 402, div: 'swell', midi: 74, dur: 3, vel: 0.75 },
        { t: 405, div: 'swell', midi: 73, dur: 1, vel: 0.70 },
        { t: 406, div: 'swell', midi: 71, dur: 2, vel: 0.72 },
        { t: 402, div: 'choir', midi: 66, dur: 3, vel: 0.50 },
        { t: 405, div: 'choir', midi: 64, dur: 3, vel: 0.50 },
        { t: 402, div: 'pedal', midi: 47, dur: 3, vel: 0.68 },
        { t: 405, div: 'pedal', midi: 42, dur: 3, vel: 0.68 },

        // Bar 69-70: transition back
        { t: 408, div: 'great', midi: 74, dur: 3, vel: 0.82 },
        { t: 411, div: 'great', midi: 74, dur: 1, vel: 0.78 },
        { t: 412, div: 'great', midi: 76, dur: 1, vel: 0.80 },
        { t: 413, div: 'great', midi: 78, dur: 1, vel: 0.82 },
        { t: 408, div: 'swell', midi: 66, dur: 6, vel: 0.60 },
        { t: 408, div: 'swell', midi: 69, dur: 6, vel: 0.60 },
        { t: 408, div: 'pedal', midi: 50, dur: 6, vel: 0.72 },

        // Bar 70
        { t: 414, div: 'great', midi: 81, dur: 3, vel: 0.90 },
        { t: 417, div: 'great', midi: 79, dur: 1, vel: 0.85 },
        { t: 418, div: 'great', midi: 78, dur: 1, vel: 0.85 },
        { t: 419, div: 'great', midi: 76, dur: 1, vel: 0.82 },
        { t: 414, div: 'swell', midi: 69, dur: 3, vel: 0.60 },
        { t: 414, div: 'swell', midi: 73, dur: 3, vel: 0.60 },
        { t: 417, div: 'swell', midi: 69, dur: 3, vel: 0.60 },
        { t: 414, div: 'pedal', midi: 45, dur: 6, vel: 0.75 },

        // ============================================================
        // SECTION A' RETURN (bars 71-93) - Full reprise with all forces
        // ============================================================

        // Bar 71: Grand return of the Hornpipe theme
        { t: 420, div: 'great', midi: 74, dur: 3, vel: 0.90 },   // D5 dotted half
        { t: 423, div: 'great', midi: 74, dur: 1, vel: 0.85 },   // D5
        { t: 424, div: 'great', midi: 74, dur: 1, vel: 0.85 },   // D5
        { t: 425, div: 'great', midi: 76, dur: 1, vel: 0.88 },   // E5
        { t: 420, div: 'swell', midi: 66, dur: 6, vel: 0.62 },   // F#4
        { t: 420, div: 'swell', midi: 69, dur: 6, vel: 0.62 },   // A4
        { t: 420, div: 'choir', midi: 62, dur: 6, vel: 0.55 },   // D4
        { t: 420, div: 'pedal', midi: 50, dur: 6, vel: 0.82 },   // D3

        // Bar 72
        { t: 426, div: 'great', midi: 78, dur: 3, vel: 0.90 },   // F#5
        { t: 429, div: 'great', midi: 76, dur: 1, vel: 0.85 },   // E5
        { t: 430, div: 'great', midi: 74, dur: 1, vel: 0.82 },   // D5
        { t: 431, div: 'great', midi: 73, dur: 1, vel: 0.85 },   // C#5
        { t: 426, div: 'swell', midi: 69, dur: 3, vel: 0.62 },   // A4
        { t: 429, div: 'swell', midi: 66, dur: 3, vel: 0.60 },   // F#4
        { t: 426, div: 'pedal', midi: 45, dur: 6, vel: 0.82 },   // A2

        // Bar 73
        { t: 432, div: 'great', midi: 74, dur: 2, vel: 0.88 },   // D5
        { t: 434, div: 'great', midi: 78, dur: 1, vel: 0.90 },   // F#5
        { t: 435, div: 'great', midi: 81, dur: 1.5, vel: 0.92 }, // A5
        { t: 436.5, div: 'great', midi: 79, dur: 0.5, vel: 0.82 },// G5
        { t: 437, div: 'great', midi: 78, dur: 1, vel: 0.88 },   // F#5
        { t: 432, div: 'swell', midi: 66, dur: 3, vel: 0.62 },   // F#4
        { t: 435, div: 'swell', midi: 69, dur: 3, vel: 0.62 },   // A4
        { t: 432, div: 'choir', midi: 62, dur: 6, vel: 0.55 },   // D4
        { t: 432, div: 'pedal', midi: 50, dur: 3, vel: 0.82 },   // D3
        { t: 435, div: 'pedal', midi: 50, dur: 3, vel: 0.80 },   // D3

        // Bar 74
        { t: 438, div: 'great', midi: 76, dur: 2, vel: 0.88 },   // E5
        { t: 440, div: 'great', midi: 79, dur: 1, vel: 0.88 },   // G5
        { t: 441, div: 'great', midi: 78, dur: 1.5, vel: 0.90 }, // F#5
        { t: 442.5, div: 'great', midi: 76, dur: 0.5, vel: 0.82 },// E5
        { t: 443, div: 'great', midi: 74, dur: 1, vel: 0.85 },   // D5
        { t: 438, div: 'swell', midi: 67, dur: 3, vel: 0.62 },   // G4
        { t: 438, div: 'swell', midi: 71, dur: 3, vel: 0.62 },   // B4
        { t: 441, div: 'swell', midi: 69, dur: 3, vel: 0.60 },   // A4
        { t: 438, div: 'pedal', midi: 43, dur: 3, vel: 0.80 },   // G2
        { t: 441, div: 'pedal', midi: 45, dur: 3, vel: 0.80 },   // A2

        // Bar 75
        { t: 444, div: 'great', midi: 74, dur: 3, vel: 0.90 },   // D5
        { t: 447, div: 'great', midi: 73, dur: 1, vel: 0.85 },   // C#5
        { t: 448, div: 'great', midi: 71, dur: 1, vel: 0.82 },   // B4
        { t: 449, div: 'great', midi: 69, dur: 1, vel: 0.85 },   // A4
        { t: 444, div: 'swell', midi: 66, dur: 6, vel: 0.62 },   // F#4
        { t: 444, div: 'swell', midi: 62, dur: 6, vel: 0.62 },   // D4
        { t: 444, div: 'choir', midi: 57, dur: 6, vel: 0.55 },   // A3
        { t: 444, div: 'pedal', midi: 50, dur: 6, vel: 0.82 },   // D3

        // Bar 76
        { t: 450, div: 'great', midi: 71, dur: 3, vel: 0.85 },   // B4
        { t: 453, div: 'great', midi: 69, dur: 1, vel: 0.82 },   // A4
        { t: 454, div: 'great', midi: 67, dur: 1, vel: 0.80 },   // G4
        { t: 455, div: 'great', midi: 66, dur: 1, vel: 0.82 },   // F#4
        { t: 450, div: 'swell', midi: 62, dur: 3, vel: 0.60 },   // D4
        { t: 450, div: 'swell', midi: 55, dur: 3, vel: 0.60 },   // G3
        { t: 453, div: 'swell', midi: 62, dur: 3, vel: 0.60 },   // D4
        { t: 450, div: 'pedal', midi: 43, dur: 3, vel: 0.80 },   // G2
        { t: 453, div: 'pedal', midi: 50, dur: 3, vel: 0.80 },   // D3

        // Bar 77
        { t: 456, div: 'great', midi: 67, dur: 2, vel: 0.85 },   // G4
        { t: 458, div: 'great', midi: 71, dur: 1, vel: 0.88 },   // B4
        { t: 459, div: 'great', midi: 69, dur: 1.5, vel: 0.85 }, // A4
        { t: 460.5, div: 'great', midi: 67, dur: 0.5, vel: 0.78 },// G4
        { t: 461, div: 'great', midi: 66, dur: 1, vel: 0.82 },   // F#4
        { t: 456, div: 'swell', midi: 59, dur: 3, vel: 0.62 },   // B3
        { t: 456, div: 'swell', midi: 55, dur: 3, vel: 0.62 },   // G3
        { t: 459, div: 'swell', midi: 62, dur: 3, vel: 0.62 },   // D4
        { t: 456, div: 'pedal', midi: 40, dur: 3, vel: 0.80 },   // E2
        { t: 459, div: 'pedal', midi: 45, dur: 3, vel: 0.80 },   // A2

        // Bar 78: Rising passage
        { t: 462, div: 'great', midi: 69, dur: 3, vel: 0.88 },   // A4
        { t: 465, div: 'great', midi: 71, dur: 1, vel: 0.85 },   // B4
        { t: 466, div: 'great', midi: 73, dur: 1, vel: 0.88 },   // C#5
        { t: 467, div: 'great', midi: 74, dur: 1, vel: 0.90 },   // D5
        { t: 462, div: 'swell', midi: 66, dur: 3, vel: 0.62 },   // F#4
        { t: 465, div: 'swell', midi: 62, dur: 3, vel: 0.62 },   // D4
        { t: 462, div: 'pedal', midi: 45, dur: 3, vel: 0.80 },   // A2
        { t: 465, div: 'pedal', midi: 50, dur: 3, vel: 0.82 },   // D3

        // Bar 79-82: Continuation and elaboration
        // Bar 79
        { t: 468, div: 'great', midi: 78, dur: 3, vel: 0.90 },   // F#5
        { t: 471, div: 'great', midi: 76, dur: 1, vel: 0.85 },   // E5
        { t: 472, div: 'great', midi: 74, dur: 2, vel: 0.85 },   // D5
        { t: 468, div: 'swell', midi: 69, dur: 3, vel: 0.62 },   // A4
        { t: 471, div: 'swell', midi: 66, dur: 3, vel: 0.62 },   // F#4
        { t: 468, div: 'choir', midi: 62, dur: 6, vel: 0.55 },   // D4
        { t: 468, div: 'pedal', midi: 50, dur: 6, vel: 0.82 },   // D3

        // Bar 80
        { t: 474, div: 'great', midi: 76, dur: 3, vel: 0.88 },   // E5
        { t: 477, div: 'great', midi: 74, dur: 1, vel: 0.85 },   // D5
        { t: 478, div: 'great', midi: 73, dur: 1, vel: 0.85 },   // C#5
        { t: 479, div: 'great', midi: 71, dur: 1, vel: 0.85 },   // B4
        { t: 474, div: 'swell', midi: 64, dur: 3, vel: 0.62 },   // E4
        { t: 477, div: 'swell', midi: 66, dur: 3, vel: 0.62 },   // F#4
        { t: 474, div: 'pedal', midi: 45, dur: 6, vel: 0.82 },   // A2

        // Bar 81
        { t: 480, div: 'great', midi: 69, dur: 2, vel: 0.85 },   // A4
        { t: 482, div: 'great', midi: 73, dur: 1, vel: 0.88 },   // C#5
        { t: 483, div: 'great', midi: 76, dur: 1.5, vel: 0.90 }, // E5
        { t: 484.5, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },// D5
        { t: 485, div: 'great', midi: 73, dur: 1, vel: 0.85 },   // C#5
        { t: 480, div: 'swell', midi: 61, dur: 3, vel: 0.62 },   // C#4
        { t: 483, div: 'swell', midi: 64, dur: 3, vel: 0.62 },   // E4
        { t: 480, div: 'pedal', midi: 45, dur: 3, vel: 0.82 },   // A2
        { t: 483, div: 'pedal', midi: 45, dur: 3, vel: 0.82 },   // A2

        // Bar 82
        { t: 486, div: 'great', midi: 74, dur: 3, vel: 0.90 },   // D5
        { t: 489, div: 'great', midi: 76, dur: 1, vel: 0.85 },   // E5
        { t: 490, div: 'great', midi: 78, dur: 1, vel: 0.88 },   // F#5
        { t: 491, div: 'great', midi: 79, dur: 1, vel: 0.90 },   // G5
        { t: 486, div: 'swell', midi: 66, dur: 6, vel: 0.62 },   // F#4
        { t: 486, div: 'swell', midi: 69, dur: 6, vel: 0.62 },   // A4
        { t: 486, div: 'choir', midi: 62, dur: 6, vel: 0.55 },   // D4
        { t: 486, div: 'pedal', midi: 50, dur: 6, vel: 0.82 },   // D3

        // Bar 83: Climactic peak
        { t: 492, div: 'great', midi: 81, dur: 3, vel: 0.92 },   // A5 (climax!)
        { t: 495, div: 'great', midi: 79, dur: 1, vel: 0.88 },   // G5
        { t: 496, div: 'great', midi: 78, dur: 1, vel: 0.85 },   // F#5
        { t: 497, div: 'great', midi: 76, dur: 1, vel: 0.88 },   // E5
        { t: 492, div: 'swell', midi: 69, dur: 3, vel: 0.65 },   // A4
        { t: 492, div: 'swell', midi: 73, dur: 3, vel: 0.65 },   // C#5
        { t: 495, div: 'swell', midi: 69, dur: 3, vel: 0.62 },   // A4
        { t: 492, div: 'pedal', midi: 45, dur: 6, vel: 0.85 },   // A2

        // --- Bars 84-88: Final cadential passage ---
        // Bar 84
        { t: 498, div: 'great', midi: 78, dur: 2, vel: 0.90 },   // F#5
        { t: 500, div: 'great', midi: 74, dur: 1, vel: 0.85 },   // D5
        { t: 501, div: 'great', midi: 71, dur: 1.5, vel: 0.82 }, // B4
        { t: 502.5, div: 'great', midi: 73, dur: 0.5, vel: 0.78 },// C#5
        { t: 503, div: 'great', midi: 74, dur: 1, vel: 0.88 },   // D5
        { t: 498, div: 'swell', midi: 66, dur: 3, vel: 0.62 },   // F#4
        { t: 501, div: 'swell', midi: 62, dur: 3, vel: 0.60 },   // D4
        { t: 498, div: 'pedal', midi: 47, dur: 3, vel: 0.82 },   // B2
        { t: 501, div: 'pedal', midi: 40, dur: 3, vel: 0.82 },   // E2

        // Bar 85
        { t: 504, div: 'great', midi: 76, dur: 3, vel: 0.88 },   // E5
        { t: 507, div: 'great', midi: 74, dur: 1, vel: 0.85 },   // D5
        { t: 508, div: 'great', midi: 73, dur: 2, vel: 0.85 },   // C#5 half
        { t: 504, div: 'swell', midi: 64, dur: 6, vel: 0.62 },   // E4
        { t: 504, div: 'swell', midi: 69, dur: 6, vel: 0.62 },   // A4
        { t: 504, div: 'pedal', midi: 45, dur: 6, vel: 0.82 },   // A2

        // Bar 86: Approach to final cadence
        { t: 510, div: 'great', midi: 74, dur: 2, vel: 0.90 },   // D5
        { t: 512, div: 'great', midi: 81, dur: 1, vel: 0.92 },   // A5
        { t: 513, div: 'great', midi: 78, dur: 1.5, vel: 0.90 }, // F#5
        { t: 514.5, div: 'great', midi: 79, dur: 0.5, vel: 0.82 },// G5
        { t: 515, div: 'great', midi: 81, dur: 1, vel: 0.92 },   // A5
        { t: 510, div: 'swell', midi: 66, dur: 3, vel: 0.65 },   // F#4
        { t: 510, div: 'swell', midi: 62, dur: 3, vel: 0.65 },   // D4
        { t: 513, div: 'swell', midi: 69, dur: 3, vel: 0.65 },   // A4
        { t: 510, div: 'choir', midi: 57, dur: 6, vel: 0.55 },   // A3
        { t: 510, div: 'pedal', midi: 50, dur: 3, vel: 0.85 },   // D3
        { t: 513, div: 'pedal', midi: 50, dur: 3, vel: 0.85 },   // D3

        // Bar 87: Penultimate
        { t: 516, div: 'great', midi: 78, dur: 2, vel: 0.92 },   // F#5
        { t: 518, div: 'great', midi: 76, dur: 1, vel: 0.88 },   // E5
        { t: 519, div: 'great', midi: 74, dur: 1.5, vel: 0.85 }, // D5
        { t: 520.5, div: 'great', midi: 73, dur: 0.5, vel: 0.80 },// C#5
        { t: 521, div: 'great', midi: 74, dur: 1, vel: 0.88 },   // D5 (pickup)
        { t: 516, div: 'swell', midi: 69, dur: 3, vel: 0.65 },   // A4
        { t: 519, div: 'swell', midi: 66, dur: 3, vel: 0.65 },   // F#4
        { t: 516, div: 'pedal', midi: 45, dur: 3, vel: 0.85 },   // A2
        { t: 519, div: 'pedal', midi: 50, dur: 3, vel: 0.85 },   // D3

        // Bar 88: FINAL BAR - Grand D major chord
        { t: 522, div: 'great', midi: 74, dur: 6, vel: 0.95 },   // D5 whole bar
        { t: 522, div: 'great', midi: 78, dur: 6, vel: 0.92 },   // F#5
        { t: 522, div: 'great', midi: 81, dur: 6, vel: 0.90 },   // A5
        { t: 522, div: 'swell', midi: 66, dur: 6, vel: 0.68 },   // F#4
        { t: 522, div: 'swell', midi: 69, dur: 6, vel: 0.68 },   // A4
        { t: 522, div: 'swell', midi: 62, dur: 6, vel: 0.68 },   // D4
        { t: 522, div: 'choir', midi: 57, dur: 6, vel: 0.58 },   // A3
        { t: 522, div: 'choir', midi: 62, dur: 6, vel: 0.58 },   // D4
        { t: 522, div: 'pedal', midi: 50, dur: 6, vel: 0.90 },   // D3
        { t: 522, div: 'pedal', midi: 38, dur: 6, vel: 0.88 },   // D2
    ]
};

// ============================================================
// Vierne - Carillon de Westminster, Op. 54 No. 6
// FULL VERSION - Complete piece with all variations
// ============================================================
// The famous evocation of Big Ben's Westminster Quarters
// Introduction → Variation 1 → Variation 2 → Variation 3 → Grand Finale
// Key: E major → D major (finale), tempo 72 BPM
//
// Westminster Quarters chime pattern (transposed):
// Quarter 1: E-G#-F#-B (descending 5th motif)
// Quarter 2: B-F#-G#-E (inversion)
// Quarter 3: E-F#-G#-E, G#-E-F#-B (combined)
// Quarter 4: B-G#-F#-E (full hour)
//
// MIDI: E3=52, F#3=54, G#3=56, A3=57, B3=59
//       C#4=61, D4=62, E4=64, F#4=66, G#4=68, A4=69, B4=71
//       C#5=73, D5=74, E5=76, F#5=78, G#5=80, A5=81, B5=83
//       Pedal: E2=40, F#2=42, G#2=44, A2=45, B2=47
// ============================================================

const PIECE_WESTMINSTER = {
    title: "Carillon de Westminster (Full)",
    composer: "Louis Vierne",
    catalog: "Op. 54 No. 6",
    key: "E major",
    tempo: 72,
    tempoChanges: [
        { t: 0, tempo: 72, label: "Lento" },
        { t: 64, tempo: 76, label: "Andante (Variation 1)" },
        { t: 160, tempo: 80, label: "Allegretto (Variation 2)" },
        { t: 288, tempo: 84, label: "Allegro (Variation 3)" },
        { t: 416, tempo: 72, label: "Maestoso (Grand Finale)" }
    ],
    registration: {
        great: ['gt-principal16', 'gt-principal8', 'gt-octave4', 'gt-mixture', 'gt-trumpet8'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voxceleste8', 'sw-principal4', 'sw-oboe8'],
        choir: ['ch-gedeckt8', 'ch-dulciana8', 'ch-rohrflute4'],
        pedal: ['pd-subbass32', 'pd-principal16', 'pd-subbass16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ============================================================
        // INTRODUCTION - Westminster Chime motif stated on Choir
        // Ethereal, bell-like presentation (bars 1-16)
        // 4/4 time, 4 beats per bar
        // ============================================================

        // --- Bar 1-2: First quarter chime: E-G#-F#-B ---
        { t: 0, div: 'choir', midi: 76, dur: 2, vel: 0.55 },     // E5
        { t: 2, div: 'choir', midi: 80, dur: 2, vel: 0.52 },     // G#5
        { t: 4, div: 'choir', midi: 78, dur: 2, vel: 0.50 },     // F#5
        { t: 6, div: 'choir', midi: 71, dur: 2, vel: 0.55 },     // B4
        // Soft pedal point
        { t: 0, div: 'pedal', midi: 40, dur: 8, vel: 0.35 },     // E2

        // --- Bar 3-4: Second quarter chime: B-F#-G#-E ---
        { t: 8, div: 'choir', midi: 71, dur: 2, vel: 0.55 },     // B4
        { t: 10, div: 'choir', midi: 78, dur: 2, vel: 0.52 },    // F#5
        { t: 12, div: 'choir', midi: 80, dur: 2, vel: 0.50 },    // G#5
        { t: 14, div: 'choir', midi: 76, dur: 2, vel: 0.55 },    // E5
        { t: 8, div: 'pedal', midi: 47, dur: 8, vel: 0.35 },     // B2

        // --- Bar 5-6: Third quarter chime: E-F#-G#-E, G#-E-F#-B ---
        { t: 16, div: 'choir', midi: 76, dur: 1, vel: 0.55 },    // E5
        { t: 17, div: 'choir', midi: 78, dur: 1, vel: 0.52 },    // F#5
        { t: 18, div: 'choir', midi: 80, dur: 1, vel: 0.50 },    // G#5
        { t: 19, div: 'choir', midi: 76, dur: 1, vel: 0.55 },    // E5
        { t: 20, div: 'choir', midi: 80, dur: 1, vel: 0.52 },    // G#5
        { t: 21, div: 'choir', midi: 76, dur: 1, vel: 0.50 },    // E5
        { t: 22, div: 'choir', midi: 78, dur: 1, vel: 0.52 },    // F#5
        { t: 23, div: 'choir', midi: 71, dur: 1, vel: 0.55 },    // B4
        { t: 16, div: 'pedal', midi: 40, dur: 4, vel: 0.35 },    // E2
        { t: 20, div: 'pedal', midi: 47, dur: 4, vel: 0.35 },    // B2

        // --- Bar 7-8: Fourth quarter (full hour): B-G#-F#-E + hour bell ---
        { t: 24, div: 'choir', midi: 71, dur: 2, vel: 0.58 },    // B4
        { t: 26, div: 'choir', midi: 80, dur: 2, vel: 0.55 },    // G#5
        { t: 28, div: 'choir', midi: 78, dur: 2, vel: 0.55 },    // F#5
        { t: 30, div: 'choir', midi: 76, dur: 2, vel: 0.60 },    // E5 (hour)
        // Hour bell on pedal
        { t: 24, div: 'pedal', midi: 47, dur: 4, vel: 0.40 },    // B2
        { t: 28, div: 'pedal', midi: 40, dur: 4, vel: 0.45 },    // E2

        // --- Bars 9-12: Chime echo, softer, with swell harmonies ---
        // Bar 9-10: E-G#-F#-B on choir with swell pad
        { t: 32, div: 'choir', midi: 64, dur: 2, vel: 0.48 },    // E4
        { t: 34, div: 'choir', midi: 68, dur: 2, vel: 0.45 },    // G#4
        { t: 36, div: 'choir', midi: 66, dur: 2, vel: 0.45 },    // F#4
        { t: 38, div: 'choir', midi: 59, dur: 2, vel: 0.48 },    // B3
        // Swell: sustained E major chord
        { t: 32, div: 'swell', midi: 76, dur: 8, vel: 0.38 },    // E5
        { t: 32, div: 'swell', midi: 80, dur: 8, vel: 0.35 },    // G#5
        { t: 32, div: 'pedal', midi: 40, dur: 8, vel: 0.35 },    // E2

        // Bar 11-12: B-F#-G#-E
        { t: 40, div: 'choir', midi: 59, dur: 2, vel: 0.48 },    // B3
        { t: 42, div: 'choir', midi: 66, dur: 2, vel: 0.45 },    // F#4
        { t: 44, div: 'choir', midi: 68, dur: 2, vel: 0.45 },    // G#4
        { t: 46, div: 'choir', midi: 64, dur: 2, vel: 0.50 },    // E4
        { t: 40, div: 'swell', midi: 71, dur: 8, vel: 0.38 },    // B4
        { t: 40, div: 'swell', midi: 78, dur: 8, vel: 0.35 },    // F#5
        { t: 40, div: 'pedal', midi: 47, dur: 8, vel: 0.35 },    // B2

        // --- Bars 13-16: Intro coda - bells fading, harmonic wash ---
        // Bar 13
        { t: 48, div: 'choir', midi: 76, dur: 1, vel: 0.45 },    // E5
        { t: 49, div: 'choir', midi: 78, dur: 1, vel: 0.42 },    // F#5
        { t: 50, div: 'choir', midi: 80, dur: 1, vel: 0.42 },    // G#5
        { t: 51, div: 'choir', midi: 76, dur: 1, vel: 0.45 },    // E5
        { t: 48, div: 'swell', midi: 64, dur: 4, vel: 0.35 },    // E4
        { t: 48, div: 'swell', midi: 68, dur: 4, vel: 0.35 },    // G#4
        { t: 48, div: 'pedal', midi: 40, dur: 4, vel: 0.32 },    // E2

        // Bar 14
        { t: 52, div: 'choir', midi: 80, dur: 1, vel: 0.42 },    // G#5
        { t: 53, div: 'choir', midi: 76, dur: 1, vel: 0.42 },    // E5
        { t: 54, div: 'choir', midi: 78, dur: 1, vel: 0.40 },    // F#5
        { t: 55, div: 'choir', midi: 71, dur: 1, vel: 0.45 },    // B4
        { t: 52, div: 'swell', midi: 64, dur: 4, vel: 0.32 },    // E4
        { t: 52, div: 'pedal', midi: 47, dur: 4, vel: 0.30 },    // B2

        // Bar 15-16: Settling chord
        { t: 56, div: 'choir', midi: 71, dur: 2, vel: 0.42 },    // B4
        { t: 58, div: 'choir', midi: 76, dur: 2, vel: 0.45 },    // E5
        { t: 60, div: 'choir', midi: 76, dur: 4, vel: 0.40 },    // E5 sustained
        { t: 56, div: 'swell', midi: 64, dur: 8, vel: 0.32 },    // E4
        { t: 56, div: 'swell', midi: 68, dur: 8, vel: 0.30 },    // G#4
        { t: 56, div: 'swell', midi: 71, dur: 8, vel: 0.30 },    // B4
        { t: 56, div: 'pedal', midi: 40, dur: 8, vel: 0.35 },    // E2

        // ============================================================
        // VARIATION 1 - Gentle accompaniment (bars 17-40)
        // Chime theme on Choir with flowing swell arpeggios
        // ============================================================

        // --- Bar 17-18: Theme on choir, swell accompaniment ---
        { t: 64, div: 'choir', midi: 76, dur: 2, vel: 0.58 },    // E5
        { t: 66, div: 'choir', midi: 80, dur: 2, vel: 0.55 },    // G#5
        // Swell: flowing eighth-note arpeggios
        { t: 64, div: 'swell', midi: 64, dur: 1, vel: 0.42 },    // E4
        { t: 65, div: 'swell', midi: 68, dur: 1, vel: 0.40 },    // G#4
        { t: 66, div: 'swell', midi: 71, dur: 1, vel: 0.42 },    // B4
        { t: 67, div: 'swell', midi: 68, dur: 1, vel: 0.40 },    // G#4
        { t: 64, div: 'pedal', midi: 40, dur: 4, vel: 0.45 },    // E2

        // Bar 18
        { t: 68, div: 'choir', midi: 78, dur: 2, vel: 0.55 },    // F#5
        { t: 70, div: 'choir', midi: 71, dur: 2, vel: 0.58 },    // B4
        { t: 68, div: 'swell', midi: 66, dur: 1, vel: 0.42 },    // F#4
        { t: 69, div: 'swell', midi: 71, dur: 1, vel: 0.40 },    // B4
        { t: 70, div: 'swell', midi: 66, dur: 1, vel: 0.42 },    // F#4
        { t: 71, div: 'swell', midi: 59, dur: 1, vel: 0.40 },    // B3
        { t: 68, div: 'pedal', midi: 47, dur: 4, vel: 0.45 },    // B2

        // --- Bar 19-20: Second chime phrase ---
        { t: 72, div: 'choir', midi: 71, dur: 2, vel: 0.58 },    // B4
        { t: 74, div: 'choir', midi: 78, dur: 2, vel: 0.55 },    // F#5
        { t: 72, div: 'swell', midi: 59, dur: 1, vel: 0.42 },    // B3
        { t: 73, div: 'swell', midi: 66, dur: 1, vel: 0.40 },    // F#4
        { t: 74, div: 'swell', midi: 71, dur: 1, vel: 0.42 },    // B4
        { t: 75, div: 'swell', midi: 66, dur: 1, vel: 0.40 },    // F#4
        { t: 72, div: 'pedal', midi: 47, dur: 4, vel: 0.45 },    // B2

        // Bar 20
        { t: 76, div: 'choir', midi: 80, dur: 2, vel: 0.55 },    // G#5
        { t: 78, div: 'choir', midi: 76, dur: 2, vel: 0.58 },    // E5
        { t: 76, div: 'swell', midi: 68, dur: 1, vel: 0.42 },    // G#4
        { t: 77, div: 'swell', midi: 64, dur: 1, vel: 0.40 },    // E4
        { t: 78, div: 'swell', midi: 68, dur: 1, vel: 0.42 },    // G#4
        { t: 79, div: 'swell', midi: 71, dur: 1, vel: 0.40 },    // B4
        { t: 76, div: 'pedal', midi: 40, dur: 4, vel: 0.45 },    // E2

        // --- Bars 21-24: Third quarter pattern with richer harmony ---
        // Bar 21
        { t: 80, div: 'choir', midi: 76, dur: 1, vel: 0.58 },    // E5
        { t: 81, div: 'choir', midi: 78, dur: 1, vel: 0.55 },    // F#5
        { t: 82, div: 'choir', midi: 80, dur: 1, vel: 0.55 },    // G#5
        { t: 83, div: 'choir', midi: 76, dur: 1, vel: 0.58 },    // E5
        { t: 80, div: 'swell', midi: 64, dur: 1, vel: 0.45 },    // E4
        { t: 81, div: 'swell', midi: 66, dur: 1, vel: 0.42 },    // F#4
        { t: 82, div: 'swell', midi: 68, dur: 1, vel: 0.42 },    // G#4
        { t: 83, div: 'swell', midi: 64, dur: 1, vel: 0.45 },    // E4
        { t: 80, div: 'pedal', midi: 40, dur: 4, vel: 0.45 },    // E2

        // Bar 22
        { t: 84, div: 'choir', midi: 80, dur: 1, vel: 0.55 },    // G#5
        { t: 85, div: 'choir', midi: 76, dur: 1, vel: 0.55 },    // E5
        { t: 86, div: 'choir', midi: 78, dur: 1, vel: 0.55 },    // F#5
        { t: 87, div: 'choir', midi: 71, dur: 1, vel: 0.58 },    // B4
        { t: 84, div: 'swell', midi: 68, dur: 1, vel: 0.42 },    // G#4
        { t: 85, div: 'swell', midi: 64, dur: 1, vel: 0.42 },    // E4
        { t: 86, div: 'swell', midi: 66, dur: 1, vel: 0.42 },    // F#4
        { t: 87, div: 'swell', midi: 59, dur: 1, vel: 0.45 },    // B3
        { t: 84, div: 'pedal', midi: 44, dur: 4, vel: 0.45 },    // G#2

        // Bar 23-24: Fourth quarter + hour
        { t: 88, div: 'choir', midi: 71, dur: 2, vel: 0.60 },    // B4
        { t: 90, div: 'choir', midi: 80, dur: 2, vel: 0.58 },    // G#5
        { t: 88, div: 'swell', midi: 59, dur: 1, vel: 0.45 },    // B3
        { t: 89, div: 'swell', midi: 66, dur: 1, vel: 0.42 },    // F#4
        { t: 90, div: 'swell', midi: 68, dur: 1, vel: 0.42 },    // G#4
        { t: 91, div: 'swell', midi: 71, dur: 1, vel: 0.42 },    // B4
        { t: 88, div: 'pedal', midi: 47, dur: 4, vel: 0.48 },    // B2

        // Bar 24
        { t: 92, div: 'choir', midi: 78, dur: 2, vel: 0.58 },    // F#5
        { t: 94, div: 'choir', midi: 76, dur: 2, vel: 0.62 },    // E5 (hour)
        { t: 92, div: 'swell', midi: 66, dur: 1, vel: 0.42 },    // F#4
        { t: 93, div: 'swell', midi: 64, dur: 1, vel: 0.42 },    // E4
        { t: 94, div: 'swell', midi: 68, dur: 2, vel: 0.45 },    // G#4
        { t: 92, div: 'pedal', midi: 42, dur: 2, vel: 0.48 },    // F#2
        { t: 94, div: 'pedal', midi: 40, dur: 2, vel: 0.50 },    // E2

        // --- Bars 25-32: Extended variation with countermelody ---
        // Bar 25
        { t: 96, div: 'choir', midi: 76, dur: 2, vel: 0.58 },    // E5
        { t: 98, div: 'choir', midi: 80, dur: 2, vel: 0.55 },    // G#5
        { t: 96, div: 'swell', midi: 71, dur: 2, vel: 0.45 },    // B4 counter
        { t: 98, div: 'swell', midi: 73, dur: 2, vel: 0.42 },    // C#5
        { t: 96, div: 'pedal', midi: 40, dur: 4, vel: 0.48 },    // E2

        // Bar 26
        { t: 100, div: 'choir', midi: 78, dur: 2, vel: 0.55 },   // F#5
        { t: 102, div: 'choir', midi: 71, dur: 2, vel: 0.58 },   // B4
        { t: 100, div: 'swell', midi: 69, dur: 2, vel: 0.42 },   // A4
        { t: 102, div: 'swell', midi: 66, dur: 2, vel: 0.45 },   // F#4
        { t: 100, div: 'pedal', midi: 42, dur: 2, vel: 0.48 },   // F#2
        { t: 102, div: 'pedal', midi: 47, dur: 2, vel: 0.48 },   // B2

        // Bar 27
        { t: 104, div: 'choir', midi: 71, dur: 1.5, vel: 0.58 }, // B4
        { t: 105.5, div: 'choir', midi: 73, dur: 0.5, vel: 0.52 },// C#5
        { t: 106, div: 'choir', midi: 76, dur: 2, vel: 0.55 },   // E5
        { t: 104, div: 'swell', midi: 66, dur: 2, vel: 0.45 },   // F#4
        { t: 106, div: 'swell', midi: 68, dur: 2, vel: 0.42 },   // G#4
        { t: 104, div: 'pedal', midi: 47, dur: 4, vel: 0.48 },   // B2

        // Bar 28
        { t: 108, div: 'choir', midi: 80, dur: 1.5, vel: 0.55 }, // G#5
        { t: 109.5, div: 'choir', midi: 78, dur: 0.5, vel: 0.50 },// F#5
        { t: 110, div: 'choir', midi: 76, dur: 2, vel: 0.58 },   // E5
        { t: 108, div: 'swell', midi: 71, dur: 2, vel: 0.42 },   // B4
        { t: 110, div: 'swell', midi: 68, dur: 2, vel: 0.45 },   // G#4
        { t: 108, div: 'pedal', midi: 40, dur: 4, vel: 0.50 },   // E2

        // Bar 29-30: Developing, more motion
        { t: 112, div: 'choir', midi: 76, dur: 1, vel: 0.58 },   // E5
        { t: 113, div: 'choir', midi: 78, dur: 1, vel: 0.55 },   // F#5
        { t: 114, div: 'choir', midi: 80, dur: 1, vel: 0.55 },   // G#5
        { t: 115, div: 'choir', midi: 83, dur: 1, vel: 0.58 },   // B5
        { t: 112, div: 'swell', midi: 64, dur: 2, vel: 0.45 },   // E4
        { t: 114, div: 'swell', midi: 68, dur: 2, vel: 0.45 },   // G#4
        { t: 112, div: 'pedal', midi: 40, dur: 4, vel: 0.48 },   // E2

        // Bar 30
        { t: 116, div: 'choir', midi: 80, dur: 1, vel: 0.55 },   // G#5
        { t: 117, div: 'choir', midi: 76, dur: 1, vel: 0.55 },   // E5
        { t: 118, div: 'choir', midi: 78, dur: 1, vel: 0.55 },   // F#5
        { t: 119, div: 'choir', midi: 71, dur: 1, vel: 0.58 },   // B4
        { t: 116, div: 'swell', midi: 68, dur: 2, vel: 0.42 },   // G#4
        { t: 118, div: 'swell', midi: 66, dur: 2, vel: 0.42 },   // F#4
        { t: 116, div: 'pedal', midi: 44, dur: 2, vel: 0.48 },   // G#2
        { t: 118, div: 'pedal', midi: 47, dur: 2, vel: 0.48 },   // B2

        // Bar 31-32: Cadence of Var 1
        { t: 120, div: 'choir', midi: 71, dur: 2, vel: 0.60 },   // B4
        { t: 122, div: 'choir', midi: 80, dur: 2, vel: 0.58 },   // G#5
        { t: 120, div: 'swell', midi: 59, dur: 2, vel: 0.48 },   // B3
        { t: 122, div: 'swell', midi: 68, dur: 2, vel: 0.45 },   // G#4
        { t: 120, div: 'pedal', midi: 47, dur: 4, vel: 0.50 },   // B2

        // Bar 32
        { t: 124, div: 'choir', midi: 78, dur: 2, vel: 0.58 },   // F#5
        { t: 126, div: 'choir', midi: 76, dur: 2, vel: 0.62 },   // E5
        { t: 124, div: 'swell', midi: 66, dur: 2, vel: 0.45 },   // F#4
        { t: 126, div: 'swell', midi: 64, dur: 2, vel: 0.48 },   // E4
        { t: 126, div: 'swell', midi: 68, dur: 2, vel: 0.45 },   // G#4
        { t: 124, div: 'pedal', midi: 42, dur: 2, vel: 0.50 },   // F#2
        { t: 126, div: 'pedal', midi: 40, dur: 2, vel: 0.52 },   // E2

        // Bars 33-40: Extended melody over flowing bass
        // Bar 33
        { t: 128, div: 'choir', midi: 76, dur: 1, vel: 0.55 },   // E5
        { t: 129, div: 'choir', midi: 73, dur: 1, vel: 0.52 },   // C#5
        { t: 130, div: 'choir', midi: 76, dur: 1, vel: 0.55 },   // E5
        { t: 131, div: 'choir', midi: 80, dur: 1, vel: 0.55 },   // G#5
        { t: 128, div: 'swell', midi: 61, dur: 4, vel: 0.42 },   // C#4
        { t: 128, div: 'swell', midi: 64, dur: 4, vel: 0.42 },   // E4
        { t: 128, div: 'pedal', midi: 49, dur: 4, vel: 0.45 },   // C#3

        // Bar 34
        { t: 132, div: 'choir', midi: 78, dur: 2, vel: 0.55 },   // F#5
        { t: 134, div: 'choir', midi: 76, dur: 1, vel: 0.52 },   // E5
        { t: 135, div: 'choir', midi: 73, dur: 1, vel: 0.55 },   // C#5
        { t: 132, div: 'swell', midi: 66, dur: 2, vel: 0.42 },   // F#4
        { t: 134, div: 'swell', midi: 64, dur: 2, vel: 0.42 },   // E4
        { t: 132, div: 'pedal', midi: 42, dur: 4, vel: 0.45 },   // F#2

        // Bar 35
        { t: 136, div: 'choir', midi: 71, dur: 2, vel: 0.55 },   // B4
        { t: 138, div: 'choir', midi: 68, dur: 2, vel: 0.52 },   // G#4
        { t: 136, div: 'swell', midi: 59, dur: 2, vel: 0.45 },   // B3
        { t: 138, div: 'swell', midi: 56, dur: 2, vel: 0.42 },   // G#3
        { t: 136, div: 'pedal', midi: 47, dur: 4, vel: 0.48 },   // B2

        // Bar 36
        { t: 140, div: 'choir', midi: 64, dur: 1, vel: 0.52 },   // E4
        { t: 141, div: 'choir', midi: 66, dur: 1, vel: 0.52 },   // F#4
        { t: 142, div: 'choir', midi: 68, dur: 1, vel: 0.52 },   // G#4
        { t: 143, div: 'choir', midi: 71, dur: 1, vel: 0.55 },   // B4
        { t: 140, div: 'swell', midi: 52, dur: 4, vel: 0.42 },   // E3
        { t: 140, div: 'swell', midi: 56, dur: 4, vel: 0.42 },   // G#3
        { t: 140, div: 'pedal', midi: 40, dur: 4, vel: 0.48 },   // E2

        // Bar 37-38
        { t: 144, div: 'choir', midi: 76, dur: 2, vel: 0.58 },   // E5
        { t: 146, div: 'choir', midi: 73, dur: 2, vel: 0.55 },   // C#5
        { t: 144, div: 'swell', midi: 64, dur: 2, vel: 0.45 },   // E4
        { t: 146, div: 'swell', midi: 61, dur: 2, vel: 0.42 },   // C#4
        { t: 144, div: 'pedal', midi: 45, dur: 4, vel: 0.48 },   // A2

        // Bar 38
        { t: 148, div: 'choir', midi: 71, dur: 1.5, vel: 0.55 }, // B4
        { t: 149.5, div: 'choir', midi: 73, dur: 0.5, vel: 0.50 },// C#5
        { t: 150, div: 'choir', midi: 76, dur: 2, vel: 0.58 },   // E5
        { t: 148, div: 'swell', midi: 59, dur: 4, vel: 0.45 },   // B3
        { t: 148, div: 'swell', midi: 64, dur: 4, vel: 0.42 },   // E4
        { t: 148, div: 'pedal', midi: 47, dur: 4, vel: 0.48 },   // B2

        // Bar 39-40: V1 closing
        { t: 152, div: 'choir', midi: 80, dur: 2, vel: 0.55 },   // G#5
        { t: 154, div: 'choir', midi: 78, dur: 1, vel: 0.55 },   // F#5
        { t: 155, div: 'choir', midi: 76, dur: 1, vel: 0.58 },   // E5
        { t: 152, div: 'swell', midi: 68, dur: 2, vel: 0.45 },   // G#4
        { t: 154, div: 'swell', midi: 66, dur: 2, vel: 0.42 },   // F#4
        { t: 152, div: 'pedal', midi: 40, dur: 4, vel: 0.50 },   // E2

        // Bar 40
        { t: 156, div: 'choir', midi: 76, dur: 4, vel: 0.60 },   // E5 sustained
        { t: 156, div: 'swell', midi: 64, dur: 4, vel: 0.48 },   // E4
        { t: 156, div: 'swell', midi: 68, dur: 4, vel: 0.45 },   // G#4
        { t: 156, div: 'swell', midi: 71, dur: 4, vel: 0.45 },   // B4
        { t: 156, div: 'pedal', midi: 40, dur: 4, vel: 0.52 },   // E2

        // ============================================================
        // VARIATION 2 - More elaborate, swell takes melody (bars 41-72)
        // Growing intensity, chromatic embellishments
        // ============================================================

        // Bar 41-42: Theme on swell with richer voicing
        { t: 160, div: 'swell', midi: 76, dur: 2, vel: 0.65 },   // E5
        { t: 162, div: 'swell', midi: 80, dur: 2, vel: 0.62 },   // G#5
        { t: 160, div: 'choir', midi: 64, dur: 1, vel: 0.48 },   // E4
        { t: 161, div: 'choir', midi: 68, dur: 1, vel: 0.45 },   // G#4
        { t: 162, div: 'choir', midi: 71, dur: 1, vel: 0.48 },   // B4
        { t: 163, div: 'choir', midi: 68, dur: 1, vel: 0.45 },   // G#4
        { t: 160, div: 'pedal', midi: 40, dur: 4, vel: 0.55 },   // E2

        // Bar 42
        { t: 164, div: 'swell', midi: 78, dur: 2, vel: 0.62 },   // F#5
        { t: 166, div: 'swell', midi: 71, dur: 2, vel: 0.65 },   // B4
        { t: 164, div: 'choir', midi: 66, dur: 1, vel: 0.48 },   // F#4
        { t: 165, div: 'choir', midi: 71, dur: 1, vel: 0.45 },   // B4
        { t: 166, div: 'choir', midi: 66, dur: 1, vel: 0.48 },   // F#4
        { t: 167, div: 'choir', midi: 59, dur: 1, vel: 0.45 },   // B3
        { t: 164, div: 'pedal', midi: 47, dur: 4, vel: 0.55 },   // B2

        // Bar 43-44: Second phrase with ornamentation
        { t: 168, div: 'swell', midi: 71, dur: 1.5, vel: 0.65 }, // B4
        { t: 169.5, div: 'swell', midi: 73, dur: 0.5, vel: 0.58 },// C#5 grace
        { t: 170, div: 'swell', midi: 78, dur: 2, vel: 0.62 },   // F#5
        { t: 168, div: 'choir', midi: 59, dur: 2, vel: 0.48 },   // B3
        { t: 170, div: 'choir', midi: 66, dur: 2, vel: 0.48 },   // F#4
        { t: 168, div: 'pedal', midi: 47, dur: 4, vel: 0.55 },   // B2

        // Bar 44
        { t: 172, div: 'swell', midi: 80, dur: 1.5, vel: 0.62 }, // G#5
        { t: 173.5, div: 'swell', midi: 81, dur: 0.5, vel: 0.55 },// A5 passing
        { t: 174, div: 'swell', midi: 76, dur: 2, vel: 0.65 },   // E5
        { t: 172, div: 'choir', midi: 68, dur: 2, vel: 0.48 },   // G#4
        { t: 174, div: 'choir', midi: 64, dur: 2, vel: 0.48 },   // E4
        { t: 172, div: 'pedal', midi: 44, dur: 2, vel: 0.55 },   // G#2
        { t: 174, div: 'pedal', midi: 40, dur: 2, vel: 0.55 },   // E2

        // Bar 45-48: Third quarter elaborated
        { t: 176, div: 'swell', midi: 76, dur: 1, vel: 0.65 },   // E5
        { t: 177, div: 'swell', midi: 78, dur: 1, vel: 0.62 },   // F#5
        { t: 178, div: 'swell', midi: 80, dur: 1, vel: 0.62 },   // G#5
        { t: 179, div: 'swell', midi: 76, dur: 1, vel: 0.65 },   // E5
        { t: 176, div: 'choir', midi: 64, dur: 1, vel: 0.50 },   // E4
        { t: 177, div: 'choir', midi: 66, dur: 1, vel: 0.48 },   // F#4
        { t: 178, div: 'choir', midi: 68, dur: 1, vel: 0.48 },   // G#4
        { t: 179, div: 'choir', midi: 64, dur: 1, vel: 0.50 },   // E4
        { t: 176, div: 'pedal', midi: 40, dur: 4, vel: 0.55 },   // E2

        // Bar 46
        { t: 180, div: 'swell', midi: 80, dur: 1, vel: 0.62 },   // G#5
        { t: 181, div: 'swell', midi: 76, dur: 1, vel: 0.62 },   // E5
        { t: 182, div: 'swell', midi: 78, dur: 1, vel: 0.62 },   // F#5
        { t: 183, div: 'swell', midi: 71, dur: 1, vel: 0.65 },   // B4
        { t: 180, div: 'choir', midi: 68, dur: 1, vel: 0.48 },   // G#4
        { t: 181, div: 'choir', midi: 64, dur: 1, vel: 0.48 },   // E4
        { t: 182, div: 'choir', midi: 66, dur: 1, vel: 0.48 },   // F#4
        { t: 183, div: 'choir', midi: 59, dur: 1, vel: 0.50 },   // B3
        { t: 180, div: 'pedal', midi: 44, dur: 2, vel: 0.55 },   // G#2
        { t: 182, div: 'pedal', midi: 47, dur: 2, vel: 0.55 },   // B2

        // Bar 47: Fourth quarter with great beginning to enter
        { t: 184, div: 'swell', midi: 71, dur: 2, vel: 0.68 },   // B4
        { t: 186, div: 'swell', midi: 80, dur: 2, vel: 0.65 },   // G#5
        { t: 184, div: 'great', midi: 59, dur: 4, vel: 0.45 },   // B3
        { t: 184, div: 'great', midi: 54, dur: 4, vel: 0.45 },   // F#3
        { t: 184, div: 'pedal', midi: 47, dur: 4, vel: 0.58 },   // B2

        // Bar 48
        { t: 188, div: 'swell', midi: 78, dur: 2, vel: 0.65 },   // F#5
        { t: 190, div: 'swell', midi: 76, dur: 2, vel: 0.70 },   // E5
        { t: 188, div: 'great', midi: 66, dur: 2, vel: 0.48 },   // F#4
        { t: 190, div: 'great', midi: 64, dur: 2, vel: 0.50 },   // E4
        { t: 190, div: 'great', midi: 68, dur: 2, vel: 0.48 },   // G#4
        { t: 188, div: 'pedal', midi: 42, dur: 2, vel: 0.58 },   // F#2
        { t: 190, div: 'pedal', midi: 40, dur: 2, vel: 0.60 },   // E2

        // Bars 49-56: Development with sequences
        // Bar 49: Theme in C#m
        { t: 192, div: 'swell', midi: 73, dur: 2, vel: 0.65 },   // C#5
        { t: 194, div: 'swell', midi: 76, dur: 2, vel: 0.62 },   // E5
        { t: 192, div: 'choir', midi: 61, dur: 2, vel: 0.50 },   // C#4
        { t: 194, div: 'choir', midi: 64, dur: 2, vel: 0.48 },   // E4
        { t: 192, div: 'pedal', midi: 49, dur: 4, vel: 0.55 },   // C#3

        // Bar 50
        { t: 196, div: 'swell', midi: 74, dur: 2, vel: 0.62 },   // D5 (borrowed)
        { t: 198, div: 'swell', midi: 68, dur: 2, vel: 0.65 },   // G#4
        { t: 196, div: 'choir', midi: 62, dur: 2, vel: 0.48 },   // D4
        { t: 198, div: 'choir', midi: 56, dur: 2, vel: 0.50 },   // G#3
        { t: 196, div: 'pedal', midi: 50, dur: 2, vel: 0.55 },   // D3
        { t: 198, div: 'pedal', midi: 44, dur: 2, vel: 0.55 },   // G#2

        // Bar 51: Through F#m
        { t: 200, div: 'swell', midi: 66, dur: 1, vel: 0.62 },   // F#4
        { t: 201, div: 'swell', midi: 69, dur: 1, vel: 0.60 },   // A4
        { t: 202, div: 'swell', midi: 73, dur: 1, vel: 0.62 },   // C#5
        { t: 203, div: 'swell', midi: 69, dur: 1, vel: 0.60 },   // A4
        { t: 200, div: 'choir', midi: 54, dur: 4, vel: 0.48 },   // F#3
        { t: 200, div: 'choir', midi: 61, dur: 4, vel: 0.48 },   // C#4
        { t: 200, div: 'pedal', midi: 42, dur: 4, vel: 0.55 },   // F#2

        // Bar 52
        { t: 204, div: 'swell', midi: 71, dur: 2, vel: 0.62 },   // B4
        { t: 206, div: 'swell', midi: 69, dur: 1, vel: 0.60 },   // A4
        { t: 207, div: 'swell', midi: 68, dur: 1, vel: 0.62 },   // G#4
        { t: 204, div: 'choir', midi: 59, dur: 2, vel: 0.48 },   // B3
        { t: 206, div: 'choir', midi: 57, dur: 2, vel: 0.48 },   // A3
        { t: 204, div: 'pedal', midi: 47, dur: 2, vel: 0.55 },   // B2
        { t: 206, div: 'pedal', midi: 45, dur: 2, vel: 0.55 },   // A2

        // Bar 53-54: Building back to E
        { t: 208, div: 'swell', midi: 76, dur: 2, vel: 0.68 },   // E5
        { t: 210, div: 'swell', midi: 80, dur: 2, vel: 0.65 },   // G#5
        { t: 208, div: 'great', midi: 64, dur: 2, vel: 0.52 },   // E4
        { t: 210, div: 'great', midi: 68, dur: 2, vel: 0.50 },   // G#4
        { t: 208, div: 'pedal', midi: 40, dur: 4, vel: 0.58 },   // E2

        // Bar 54
        { t: 212, div: 'swell', midi: 78, dur: 1, vel: 0.65 },   // F#5
        { t: 213, div: 'swell', midi: 76, dur: 1, vel: 0.62 },   // E5
        { t: 214, div: 'swell', midi: 74, dur: 1, vel: 0.62 },   // D5
        { t: 215, div: 'swell', midi: 73, dur: 1, vel: 0.65 },   // C#5
        { t: 212, div: 'great', midi: 66, dur: 2, vel: 0.50 },   // F#4
        { t: 214, div: 'great', midi: 62, dur: 2, vel: 0.52 },   // D4
        { t: 212, div: 'pedal', midi: 42, dur: 2, vel: 0.58 },   // F#2
        { t: 214, div: 'pedal', midi: 50, dur: 2, vel: 0.58 },   // D3

        // Bar 55-56: Approach dominant
        { t: 216, div: 'swell', midi: 71, dur: 1, vel: 0.68 },   // B4
        { t: 217, div: 'swell', midi: 73, dur: 1, vel: 0.65 },   // C#5
        { t: 218, div: 'swell', midi: 74, dur: 1, vel: 0.65 },   // D5
        { t: 219, div: 'swell', midi: 76, dur: 1, vel: 0.68 },   // E5
        { t: 216, div: 'great', midi: 59, dur: 4, vel: 0.52 },   // B3
        { t: 216, div: 'great', midi: 54, dur: 4, vel: 0.52 },   // F#3
        { t: 216, div: 'pedal', midi: 47, dur: 4, vel: 0.60 },   // B2

        // Bar 56
        { t: 220, div: 'swell', midi: 78, dur: 1, vel: 0.68 },   // F#5
        { t: 221, div: 'swell', midi: 80, dur: 1, vel: 0.68 },   // G#5
        { t: 222, div: 'swell', midi: 78, dur: 1, vel: 0.65 },   // F#5
        { t: 223, div: 'swell', midi: 76, dur: 1, vel: 0.70 },   // E5
        { t: 220, div: 'great', midi: 66, dur: 2, vel: 0.52 },   // F#4
        { t: 222, div: 'great', midi: 64, dur: 2, vel: 0.55 },   // E4
        { t: 220, div: 'pedal', midi: 42, dur: 2, vel: 0.60 },   // F#2
        { t: 222, div: 'pedal', midi: 40, dur: 2, vel: 0.62 },   // E2

        // Bars 57-64: Intensifying sequences
        // Bar 57
        { t: 224, div: 'swell', midi: 76, dur: 2, vel: 0.70 },   // E5
        { t: 226, div: 'swell', midi: 80, dur: 2, vel: 0.68 },   // G#5
        { t: 224, div: 'great', midi: 64, dur: 1, vel: 0.55 },   // E4
        { t: 225, div: 'great', midi: 68, dur: 1, vel: 0.52 },   // G#4
        { t: 226, div: 'great', midi: 71, dur: 1, vel: 0.55 },   // B4
        { t: 227, div: 'great', midi: 68, dur: 1, vel: 0.52 },   // G#4
        { t: 224, div: 'pedal', midi: 40, dur: 4, vel: 0.62 },   // E2

        // Bar 58
        { t: 228, div: 'swell', midi: 78, dur: 2, vel: 0.68 },   // F#5
        { t: 230, div: 'swell', midi: 71, dur: 2, vel: 0.72 },   // B4
        { t: 228, div: 'great', midi: 66, dur: 1, vel: 0.55 },   // F#4
        { t: 229, div: 'great', midi: 71, dur: 1, vel: 0.52 },   // B4
        { t: 230, div: 'great', midi: 66, dur: 1, vel: 0.55 },   // F#4
        { t: 231, div: 'great', midi: 59, dur: 1, vel: 0.52 },   // B3
        { t: 228, div: 'pedal', midi: 47, dur: 4, vel: 0.62 },   // B2

        // Bar 59
        { t: 232, div: 'swell', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 233, div: 'swell', midi: 78, dur: 1, vel: 0.70 },   // F#5
        { t: 234, div: 'swell', midi: 80, dur: 1, vel: 0.70 },   // G#5
        { t: 235, div: 'swell', midi: 83, dur: 1, vel: 0.72 },   // B5
        { t: 232, div: 'great', midi: 64, dur: 2, vel: 0.55 },   // E4
        { t: 234, div: 'great', midi: 68, dur: 2, vel: 0.55 },   // G#4
        { t: 232, div: 'pedal', midi: 40, dur: 4, vel: 0.62 },   // E2

        // Bar 60
        { t: 236, div: 'swell', midi: 80, dur: 1, vel: 0.70 },   // G#5
        { t: 237, div: 'swell', midi: 76, dur: 1, vel: 0.70 },   // E5
        { t: 238, div: 'swell', midi: 78, dur: 1, vel: 0.70 },   // F#5
        { t: 239, div: 'swell', midi: 71, dur: 1, vel: 0.72 },   // B4
        { t: 236, div: 'great', midi: 68, dur: 2, vel: 0.55 },   // G#4
        { t: 238, div: 'great', midi: 66, dur: 2, vel: 0.55 },   // F#4
        { t: 236, div: 'pedal', midi: 44, dur: 2, vel: 0.62 },   // G#2
        { t: 238, div: 'pedal', midi: 47, dur: 2, vel: 0.62 },   // B2

        // Bar 61-62: Building to climax of Var 2
        { t: 240, div: 'swell', midi: 71, dur: 2, vel: 0.75 },   // B4
        { t: 242, div: 'swell', midi: 80, dur: 2, vel: 0.72 },   // G#5
        { t: 240, div: 'great', midi: 59, dur: 1, vel: 0.58 },   // B3
        { t: 241, div: 'great', midi: 66, dur: 1, vel: 0.55 },   // F#4
        { t: 242, div: 'great', midi: 68, dur: 1, vel: 0.58 },   // G#4
        { t: 243, div: 'great', midi: 71, dur: 1, vel: 0.55 },   // B4
        { t: 240, div: 'pedal', midi: 47, dur: 4, vel: 0.65 },   // B2

        // Bar 62
        { t: 244, div: 'swell', midi: 78, dur: 2, vel: 0.72 },   // F#5
        { t: 246, div: 'swell', midi: 76, dur: 2, vel: 0.75 },   // E5
        { t: 244, div: 'great', midi: 66, dur: 2, vel: 0.58 },   // F#4
        { t: 246, div: 'great', midi: 64, dur: 2, vel: 0.60 },   // E4
        { t: 246, div: 'great', midi: 68, dur: 2, vel: 0.58 },   // G#4
        { t: 244, div: 'pedal', midi: 42, dur: 2, vel: 0.65 },   // F#2
        { t: 246, div: 'pedal', midi: 40, dur: 2, vel: 0.68 },   // E2

        // Bars 63-72: Var 2 extension and transition
        // Bar 63-64
        { t: 248, div: 'swell', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 249, div: 'swell', midi: 73, dur: 1, vel: 0.68 },   // C#5
        { t: 250, div: 'swell', midi: 71, dur: 1, vel: 0.70 },   // B4
        { t: 251, div: 'swell', midi: 69, dur: 1, vel: 0.68 },   // A4
        { t: 248, div: 'great', midi: 61, dur: 4, vel: 0.55 },   // C#4
        { t: 248, div: 'great', midi: 57, dur: 4, vel: 0.55 },   // A3
        { t: 248, div: 'pedal', midi: 45, dur: 4, vel: 0.62 },   // A2

        // Bar 64
        { t: 252, div: 'swell', midi: 68, dur: 1, vel: 0.70 },   // G#4
        { t: 253, div: 'swell', midi: 71, dur: 1, vel: 0.72 },   // B4
        { t: 254, div: 'swell', midi: 76, dur: 2, vel: 0.75 },   // E5
        { t: 252, div: 'great', midi: 56, dur: 2, vel: 0.55 },   // G#3
        { t: 254, div: 'great', midi: 64, dur: 2, vel: 0.58 },   // E4
        { t: 252, div: 'pedal', midi: 44, dur: 2, vel: 0.62 },   // G#2
        { t: 254, div: 'pedal', midi: 40, dur: 2, vel: 0.65 },   // E2

        // Bar 65-68: Chromatic transition passage
        { t: 256, div: 'swell', midi: 75, dur: 2, vel: 0.68 },   // Eb5/D#5
        { t: 258, div: 'swell', midi: 74, dur: 2, vel: 0.68 },   // D5
        { t: 256, div: 'great', midi: 63, dur: 2, vel: 0.55 },   // Eb4
        { t: 258, div: 'great', midi: 62, dur: 2, vel: 0.55 },   // D4
        { t: 256, div: 'pedal', midi: 39, dur: 2, vel: 0.60 },   // Eb2
        { t: 258, div: 'pedal', midi: 50, dur: 2, vel: 0.60 },   // D3

        // Bar 66
        { t: 260, div: 'swell', midi: 73, dur: 2, vel: 0.70 },   // C#5
        { t: 262, div: 'swell', midi: 74, dur: 2, vel: 0.72 },   // D5
        { t: 260, div: 'great', midi: 61, dur: 2, vel: 0.58 },   // C#4
        { t: 262, div: 'great', midi: 62, dur: 2, vel: 0.58 },   // D4
        { t: 260, div: 'pedal', midi: 49, dur: 2, vel: 0.62 },   // C#3
        { t: 262, div: 'pedal', midi: 50, dur: 2, vel: 0.62 },   // D3

        // Bar 67-68: Arriving on dominant of D
        { t: 264, div: 'swell', midi: 76, dur: 2, vel: 0.72 },   // E5
        { t: 266, div: 'swell', midi: 73, dur: 2, vel: 0.70 },   // C#5
        { t: 264, div: 'great', midi: 64, dur: 2, vel: 0.58 },   // E4
        { t: 266, div: 'great', midi: 69, dur: 2, vel: 0.58 },   // A4
        { t: 264, div: 'pedal', midi: 45, dur: 4, vel: 0.65 },   // A2

        // Bar 68
        { t: 268, div: 'swell', midi: 74, dur: 2, vel: 0.72 },   // D5
        { t: 270, div: 'swell', midi: 78, dur: 2, vel: 0.70 },   // F#5
        { t: 268, div: 'great', midi: 62, dur: 2, vel: 0.60 },   // D4
        { t: 270, div: 'great', midi: 66, dur: 2, vel: 0.58 },   // F#4
        { t: 268, div: 'pedal', midi: 50, dur: 4, vel: 0.65 },   // D3

        // Bar 69-72: Pre-climax building, V2 ending
        { t: 272, div: 'swell', midi: 74, dur: 1, vel: 0.75 },   // D5
        { t: 273, div: 'swell', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 274, div: 'swell', midi: 78, dur: 1, vel: 0.72 },   // F#5
        { t: 275, div: 'swell', midi: 74, dur: 1, vel: 0.75 },   // D5
        { t: 272, div: 'great', midi: 62, dur: 2, vel: 0.60 },   // D4
        { t: 274, div: 'great', midi: 66, dur: 2, vel: 0.60 },   // F#4
        { t: 272, div: 'pedal', midi: 50, dur: 4, vel: 0.65 },   // D3

        // Bar 70
        { t: 276, div: 'swell', midi: 78, dur: 1, vel: 0.72 },   // F#5
        { t: 277, div: 'swell', midi: 74, dur: 1, vel: 0.72 },   // D5
        { t: 278, div: 'swell', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 279, div: 'swell', midi: 69, dur: 1, vel: 0.75 },   // A4
        { t: 276, div: 'great', midi: 66, dur: 2, vel: 0.60 },   // F#4
        { t: 278, div: 'great', midi: 64, dur: 2, vel: 0.60 },   // E4
        { t: 276, div: 'pedal', midi: 45, dur: 4, vel: 0.65 },   // A2

        // Bar 71
        { t: 280, div: 'swell', midi: 69, dur: 2, vel: 0.75 },   // A4
        { t: 282, div: 'swell', midi: 74, dur: 2, vel: 0.72 },   // D5
        { t: 280, div: 'great', midi: 57, dur: 2, vel: 0.62 },   // A3
        { t: 282, div: 'great', midi: 62, dur: 2, vel: 0.62 },   // D4
        { t: 280, div: 'pedal', midi: 45, dur: 2, vel: 0.68 },   // A2
        { t: 282, div: 'pedal', midi: 50, dur: 2, vel: 0.68 },   // D3

        // Bar 72: V2 cadence
        { t: 284, div: 'swell', midi: 74, dur: 4, vel: 0.78 },   // D5 sustained
        { t: 284, div: 'swell', midi: 78, dur: 4, vel: 0.75 },   // F#5
        { t: 284, div: 'great', midi: 62, dur: 4, vel: 0.65 },   // D4
        { t: 284, div: 'great', midi: 66, dur: 4, vel: 0.62 },   // F#4
        { t: 284, div: 'great', midi: 69, dur: 4, vel: 0.62 },   // A4
        { t: 284, div: 'pedal', midi: 50, dur: 4, vel: 0.70 },   // D3

        // ============================================================
        // VARIATION 3 - Building intensity on Great (bars 73-104)
        // Full organ building, triumphant, key of D major now
        // ============================================================

        // Bar 73-74: Theme blazes forth on Great in D major
        { t: 288, div: 'great', midi: 74, dur: 2, vel: 0.80 },   // D5
        { t: 290, div: 'great', midi: 78, dur: 2, vel: 0.78 },   // F#5
        { t: 288, div: 'swell', midi: 62, dur: 1, vel: 0.60 },   // D4
        { t: 289, div: 'swell', midi: 66, dur: 1, vel: 0.58 },   // F#4
        { t: 290, div: 'swell', midi: 69, dur: 1, vel: 0.60 },   // A4
        { t: 291, div: 'swell', midi: 66, dur: 1, vel: 0.58 },   // F#4
        { t: 288, div: 'choir', midi: 54, dur: 4, vel: 0.52 },   // F#3
        { t: 288, div: 'pedal', midi: 50, dur: 4, vel: 0.72 },   // D3

        // Bar 74
        { t: 292, div: 'great', midi: 76, dur: 2, vel: 0.78 },   // E5
        { t: 294, div: 'great', midi: 69, dur: 2, vel: 0.80 },   // A4
        { t: 292, div: 'swell', midi: 64, dur: 1, vel: 0.60 },   // E4
        { t: 293, div: 'swell', midi: 69, dur: 1, vel: 0.58 },   // A4
        { t: 294, div: 'swell', midi: 64, dur: 1, vel: 0.60 },   // E4
        { t: 295, div: 'swell', midi: 57, dur: 1, vel: 0.58 },   // A3
        { t: 292, div: 'pedal', midi: 45, dur: 4, vel: 0.72 },   // A2

        // Bar 75-76: Second chime phrase in D
        { t: 296, div: 'great', midi: 69, dur: 2, vel: 0.80 },   // A4
        { t: 298, div: 'great', midi: 76, dur: 2, vel: 0.78 },   // E5
        { t: 296, div: 'swell', midi: 57, dur: 2, vel: 0.60 },   // A3
        { t: 298, div: 'swell', midi: 64, dur: 2, vel: 0.60 },   // E4
        { t: 296, div: 'pedal', midi: 45, dur: 4, vel: 0.72 },   // A2

        // Bar 76
        { t: 300, div: 'great', midi: 78, dur: 2, vel: 0.78 },   // F#5
        { t: 302, div: 'great', midi: 74, dur: 2, vel: 0.82 },   // D5
        { t: 300, div: 'swell', midi: 66, dur: 2, vel: 0.60 },   // F#4
        { t: 302, div: 'swell', midi: 62, dur: 2, vel: 0.62 },   // D4
        { t: 300, div: 'pedal', midi: 42, dur: 2, vel: 0.72 },   // F#2
        { t: 302, div: 'pedal', midi: 50, dur: 2, vel: 0.75 },   // D3

        // Bar 77-78: Third quarter in D
        { t: 304, div: 'great', midi: 74, dur: 1, vel: 0.82 },   // D5
        { t: 305, div: 'great', midi: 76, dur: 1, vel: 0.80 },   // E5
        { t: 306, div: 'great', midi: 78, dur: 1, vel: 0.80 },   // F#5
        { t: 307, div: 'great', midi: 74, dur: 1, vel: 0.82 },   // D5
        { t: 304, div: 'swell', midi: 62, dur: 1, vel: 0.62 },   // D4
        { t: 305, div: 'swell', midi: 64, dur: 1, vel: 0.60 },   // E4
        { t: 306, div: 'swell', midi: 66, dur: 1, vel: 0.60 },   // F#4
        { t: 307, div: 'swell', midi: 62, dur: 1, vel: 0.62 },   // D4
        { t: 304, div: 'pedal', midi: 50, dur: 4, vel: 0.75 },   // D3

        // Bar 78
        { t: 308, div: 'great', midi: 78, dur: 1, vel: 0.80 },   // F#5
        { t: 309, div: 'great', midi: 74, dur: 1, vel: 0.80 },   // D5
        { t: 310, div: 'great', midi: 76, dur: 1, vel: 0.80 },   // E5
        { t: 311, div: 'great', midi: 69, dur: 1, vel: 0.82 },   // A4
        { t: 308, div: 'swell', midi: 66, dur: 1, vel: 0.60 },   // F#4
        { t: 309, div: 'swell', midi: 62, dur: 1, vel: 0.60 },   // D4
        { t: 310, div: 'swell', midi: 64, dur: 1, vel: 0.60 },   // E4
        { t: 311, div: 'swell', midi: 57, dur: 1, vel: 0.62 },   // A3
        { t: 308, div: 'pedal', midi: 45, dur: 4, vel: 0.75 },   // A2

        // Bar 79-80: Fourth quarter in D
        { t: 312, div: 'great', midi: 69, dur: 2, vel: 0.85 },   // A4
        { t: 314, div: 'great', midi: 78, dur: 2, vel: 0.82 },   // F#5
        { t: 312, div: 'swell', midi: 57, dur: 1, vel: 0.62 },   // A3
        { t: 313, div: 'swell', midi: 64, dur: 1, vel: 0.60 },   // E4
        { t: 314, div: 'swell', midi: 66, dur: 1, vel: 0.62 },   // F#4
        { t: 315, div: 'swell', midi: 69, dur: 1, vel: 0.60 },   // A4
        { t: 312, div: 'pedal', midi: 45, dur: 4, vel: 0.78 },   // A2

        // Bar 80
        { t: 316, div: 'great', midi: 76, dur: 2, vel: 0.82 },   // E5
        { t: 318, div: 'great', midi: 74, dur: 2, vel: 0.85 },   // D5
        { t: 316, div: 'swell', midi: 64, dur: 2, vel: 0.62 },   // E4
        { t: 318, div: 'swell', midi: 62, dur: 2, vel: 0.65 },   // D4
        { t: 318, div: 'swell', midi: 66, dur: 2, vel: 0.62 },   // F#4
        { t: 316, div: 'pedal', midi: 52, dur: 2, vel: 0.78 },   // E3
        { t: 318, div: 'pedal', midi: 50, dur: 2, vel: 0.80 },   // D3

        // Bars 81-88: Intensifying development
        // Bar 81
        { t: 320, div: 'great', midi: 74, dur: 1, vel: 0.85 },   // D5
        { t: 321, div: 'great', midi: 76, dur: 1, vel: 0.82 },   // E5
        { t: 322, div: 'great', midi: 78, dur: 1, vel: 0.82 },   // F#5
        { t: 323, div: 'great', midi: 81, dur: 1, vel: 0.85 },   // A5
        { t: 320, div: 'swell', midi: 62, dur: 2, vel: 0.65 },   // D4
        { t: 322, div: 'swell', midi: 66, dur: 2, vel: 0.65 },   // F#4
        { t: 320, div: 'choir', midi: 54, dur: 4, vel: 0.55 },   // F#3
        { t: 320, div: 'pedal', midi: 50, dur: 4, vel: 0.78 },   // D3

        // Bar 82
        { t: 324, div: 'great', midi: 79, dur: 1, vel: 0.82 },   // G5
        { t: 325, div: 'great', midi: 78, dur: 1, vel: 0.82 },   // F#5
        { t: 326, div: 'great', midi: 76, dur: 1, vel: 0.80 },   // E5
        { t: 327, div: 'great', midi: 74, dur: 1, vel: 0.82 },   // D5
        { t: 324, div: 'swell', midi: 67, dur: 2, vel: 0.62 },   // G4
        { t: 326, div: 'swell', midi: 64, dur: 2, vel: 0.62 },   // E4
        { t: 324, div: 'pedal', midi: 43, dur: 2, vel: 0.78 },   // G2
        { t: 326, div: 'pedal', midi: 45, dur: 2, vel: 0.78 },   // A2

        // Bar 83-84: Sequence ascending
        { t: 328, div: 'great', midi: 76, dur: 2, vel: 0.85 },   // E5
        { t: 330, div: 'great', midi: 81, dur: 2, vel: 0.85 },   // A5
        { t: 328, div: 'swell', midi: 64, dur: 2, vel: 0.65 },   // E4
        { t: 330, div: 'swell', midi: 69, dur: 2, vel: 0.65 },   // A4
        { t: 328, div: 'pedal', midi: 45, dur: 4, vel: 0.80 },   // A2

        // Bar 84
        { t: 332, div: 'great', midi: 79, dur: 2, vel: 0.85 },   // G5
        { t: 334, div: 'great', midi: 74, dur: 2, vel: 0.88 },   // D5
        { t: 332, div: 'swell', midi: 67, dur: 2, vel: 0.65 },   // G4
        { t: 334, div: 'swell', midi: 62, dur: 2, vel: 0.68 },   // D4
        { t: 332, div: 'pedal', midi: 43, dur: 2, vel: 0.80 },   // G2
        { t: 334, div: 'pedal', midi: 50, dur: 2, vel: 0.80 },   // D3

        // Bar 85-88: Climactic build
        { t: 336, div: 'great', midi: 74, dur: 1, vel: 0.88 },   // D5
        { t: 337, div: 'great', midi: 78, dur: 1, vel: 0.85 },   // F#5
        { t: 338, div: 'great', midi: 81, dur: 1, vel: 0.88 },   // A5
        { t: 339, div: 'great', midi: 78, dur: 1, vel: 0.85 },   // F#5
        { t: 336, div: 'swell', midi: 62, dur: 2, vel: 0.68 },   // D4
        { t: 338, div: 'swell', midi: 69, dur: 2, vel: 0.68 },   // A4
        { t: 336, div: 'choir', midi: 54, dur: 4, vel: 0.58 },   // F#3
        { t: 336, div: 'pedal', midi: 50, dur: 4, vel: 0.82 },   // D3

        // Bar 86
        { t: 340, div: 'great', midi: 81, dur: 1, vel: 0.88 },   // A5
        { t: 341, div: 'great', midi: 79, dur: 1, vel: 0.85 },   // G5
        { t: 342, div: 'great', midi: 78, dur: 1, vel: 0.85 },   // F#5
        { t: 343, div: 'great', midi: 76, dur: 1, vel: 0.85 },   // E5
        { t: 340, div: 'swell', midi: 69, dur: 2, vel: 0.68 },   // A4
        { t: 342, div: 'swell', midi: 66, dur: 2, vel: 0.65 },   // F#4
        { t: 340, div: 'pedal', midi: 45, dur: 4, vel: 0.82 },   // A2

        // Bar 87
        { t: 344, div: 'great', midi: 74, dur: 2, vel: 0.90 },   // D5
        { t: 346, div: 'great', midi: 78, dur: 2, vel: 0.88 },   // F#5
        { t: 344, div: 'swell', midi: 62, dur: 2, vel: 0.68 },   // D4
        { t: 346, div: 'swell', midi: 66, dur: 2, vel: 0.68 },   // F#4
        { t: 344, div: 'choir', midi: 57, dur: 4, vel: 0.58 },   // A3
        { t: 344, div: 'pedal', midi: 50, dur: 4, vel: 0.82 },   // D3

        // Bar 88
        { t: 348, div: 'great', midi: 76, dur: 2, vel: 0.88 },   // E5
        { t: 350, div: 'great', midi: 74, dur: 2, vel: 0.90 },   // D5
        { t: 348, div: 'swell', midi: 64, dur: 2, vel: 0.68 },   // E4
        { t: 350, div: 'swell', midi: 62, dur: 2, vel: 0.70 },   // D4
        { t: 348, div: 'pedal', midi: 52, dur: 2, vel: 0.82 },   // E3
        { t: 350, div: 'pedal', midi: 50, dur: 2, vel: 0.85 },   // D3

        // Bars 89-96: Extended V3, increasing grandeur
        // Bar 89
        { t: 352, div: 'great', midi: 74, dur: 1, vel: 0.90 },   // D5
        { t: 353, div: 'great', midi: 76, dur: 1, vel: 0.88 },   // E5
        { t: 354, div: 'great', midi: 78, dur: 1, vel: 0.88 },   // F#5
        { t: 355, div: 'great', midi: 74, dur: 1, vel: 0.90 },   // D5
        { t: 352, div: 'swell', midi: 62, dur: 1, vel: 0.68 },   // D4
        { t: 353, div: 'swell', midi: 64, dur: 1, vel: 0.65 },   // E4
        { t: 354, div: 'swell', midi: 66, dur: 1, vel: 0.65 },   // F#4
        { t: 355, div: 'swell', midi: 62, dur: 1, vel: 0.68 },   // D4
        { t: 352, div: 'pedal', midi: 50, dur: 4, vel: 0.85 },   // D3

        // Bar 90
        { t: 356, div: 'great', midi: 78, dur: 1, vel: 0.88 },   // F#5
        { t: 357, div: 'great', midi: 74, dur: 1, vel: 0.88 },   // D5
        { t: 358, div: 'great', midi: 76, dur: 1, vel: 0.88 },   // E5
        { t: 359, div: 'great', midi: 69, dur: 1, vel: 0.90 },   // A4
        { t: 356, div: 'swell', midi: 66, dur: 1, vel: 0.65 },   // F#4
        { t: 357, div: 'swell', midi: 62, dur: 1, vel: 0.65 },   // D4
        { t: 358, div: 'swell', midi: 64, dur: 1, vel: 0.65 },   // E4
        { t: 359, div: 'swell', midi: 57, dur: 1, vel: 0.68 },   // A3
        { t: 356, div: 'pedal', midi: 45, dur: 4, vel: 0.85 },   // A2

        // Bar 91
        { t: 360, div: 'great', midi: 69, dur: 2, vel: 0.90 },   // A4
        { t: 362, div: 'great', midi: 78, dur: 2, vel: 0.88 },   // F#5
        { t: 360, div: 'swell', midi: 57, dur: 2, vel: 0.68 },   // A3
        { t: 362, div: 'swell', midi: 66, dur: 2, vel: 0.68 },   // F#4
        { t: 360, div: 'pedal', midi: 45, dur: 4, vel: 0.85 },   // A2

        // Bar 92
        { t: 364, div: 'great', midi: 76, dur: 2, vel: 0.88 },   // E5
        { t: 366, div: 'great', midi: 74, dur: 2, vel: 0.92 },   // D5
        { t: 364, div: 'swell', midi: 64, dur: 2, vel: 0.68 },   // E4
        { t: 366, div: 'swell', midi: 62, dur: 2, vel: 0.72 },   // D4
        { t: 366, div: 'swell', midi: 66, dur: 2, vel: 0.68 },   // F#4
        { t: 364, div: 'pedal', midi: 52, dur: 2, vel: 0.85 },   // E3
        { t: 366, div: 'pedal', midi: 50, dur: 2, vel: 0.88 },   // D3

        // Bar 93-96: Transition to finale
        { t: 368, div: 'great', midi: 74, dur: 2, vel: 0.90 },   // D5
        { t: 370, div: 'great', midi: 81, dur: 2, vel: 0.90 },   // A5
        { t: 368, div: 'swell', midi: 62, dur: 2, vel: 0.70 },   // D4
        { t: 370, div: 'swell', midi: 69, dur: 2, vel: 0.70 },   // A4
        { t: 368, div: 'choir', midi: 54, dur: 4, vel: 0.60 },   // F#3
        { t: 368, div: 'pedal', midi: 50, dur: 4, vel: 0.88 },   // D3

        // Bar 94
        { t: 372, div: 'great', midi: 79, dur: 1, vel: 0.90 },   // G5
        { t: 373, div: 'great', midi: 78, dur: 1, vel: 0.88 },   // F#5
        { t: 374, div: 'great', midi: 76, dur: 1, vel: 0.88 },   // E5
        { t: 375, div: 'great', midi: 74, dur: 1, vel: 0.90 },   // D5
        { t: 372, div: 'swell', midi: 67, dur: 2, vel: 0.70 },   // G4
        { t: 374, div: 'swell', midi: 64, dur: 2, vel: 0.70 },   // E4
        { t: 372, div: 'pedal', midi: 43, dur: 2, vel: 0.85 },   // G2
        { t: 374, div: 'pedal', midi: 45, dur: 2, vel: 0.85 },   // A2

        // Bar 95
        { t: 376, div: 'great', midi: 73, dur: 2, vel: 0.88 },   // C#5
        { t: 378, div: 'great', midi: 74, dur: 2, vel: 0.92 },   // D5
        { t: 376, div: 'swell', midi: 61, dur: 2, vel: 0.70 },   // C#4
        { t: 378, div: 'swell', midi: 62, dur: 2, vel: 0.72 },   // D4
        { t: 376, div: 'pedal', midi: 45, dur: 4, vel: 0.88 },   // A2

        // Bar 96: V3 ends, pause before finale
        { t: 380, div: 'great', midi: 74, dur: 2, vel: 0.92 },   // D5
        { t: 382, div: 'great', midi: 78, dur: 2, vel: 0.90 },   // F#5
        { t: 380, div: 'swell', midi: 62, dur: 4, vel: 0.72 },   // D4
        { t: 380, div: 'swell', midi: 66, dur: 4, vel: 0.70 },   // F#4
        { t: 380, div: 'swell', midi: 69, dur: 4, vel: 0.70 },   // A4
        { t: 380, div: 'choir', midi: 57, dur: 4, vel: 0.60 },   // A3
        { t: 380, div: 'pedal', midi: 50, dur: 4, vel: 0.90 },   // D3

        // Bars 97-104: V3 extension with modulating sequences
        { t: 384, div: 'great', midi: 74, dur: 1, vel: 0.88 },   // D5
        { t: 385, div: 'great', midi: 73, dur: 1, vel: 0.85 },   // C#5
        { t: 386, div: 'great', midi: 71, dur: 1, vel: 0.85 },   // B4
        { t: 387, div: 'great', midi: 69, dur: 1, vel: 0.82 },   // A4
        { t: 384, div: 'swell', midi: 62, dur: 2, vel: 0.68 },   // D4
        { t: 386, div: 'swell', midi: 59, dur: 2, vel: 0.68 },   // B3
        { t: 384, div: 'pedal', midi: 47, dur: 4, vel: 0.82 },   // B2

        // Bar 98
        { t: 388, div: 'great', midi: 67, dur: 1, vel: 0.82 },   // G4
        { t: 389, div: 'great', midi: 69, dur: 1, vel: 0.85 },   // A4
        { t: 390, div: 'great', midi: 71, dur: 1, vel: 0.85 },   // B4
        { t: 391, div: 'great', midi: 74, dur: 1, vel: 0.88 },   // D5
        { t: 388, div: 'swell', midi: 55, dur: 2, vel: 0.68 },   // G3
        { t: 390, div: 'swell', midi: 59, dur: 2, vel: 0.68 },   // B3
        { t: 388, div: 'pedal', midi: 43, dur: 4, vel: 0.82 },   // G2

        // Bar 99
        { t: 392, div: 'great', midi: 73, dur: 2, vel: 0.88 },   // C#5
        { t: 394, div: 'great', midi: 76, dur: 2, vel: 0.88 },   // E5
        { t: 392, div: 'swell', midi: 61, dur: 2, vel: 0.70 },   // C#4
        { t: 394, div: 'swell', midi: 64, dur: 2, vel: 0.70 },   // E4
        { t: 392, div: 'pedal', midi: 45, dur: 4, vel: 0.85 },   // A2

        // Bar 100: Dominant preparation
        { t: 396, div: 'great', midi: 76, dur: 1, vel: 0.90 },   // E5
        { t: 397, div: 'great', midi: 74, dur: 1, vel: 0.88 },   // D5
        { t: 398, div: 'great', midi: 73, dur: 1, vel: 0.88 },   // C#5
        { t: 399, div: 'great', midi: 74, dur: 1, vel: 0.92 },   // D5
        { t: 396, div: 'swell', midi: 64, dur: 4, vel: 0.72 },   // E4
        { t: 396, div: 'swell', midi: 69, dur: 4, vel: 0.70 },   // A4
        { t: 396, div: 'pedal', midi: 45, dur: 4, vel: 0.88 },   // A2

        // Bars 101-104: Final approach
        { t: 400, div: 'great', midi: 78, dur: 2, vel: 0.92 },   // F#5
        { t: 402, div: 'great', midi: 81, dur: 2, vel: 0.92 },   // A5
        { t: 400, div: 'swell', midi: 66, dur: 2, vel: 0.72 },   // F#4
        { t: 402, div: 'swell', midi: 69, dur: 2, vel: 0.72 },   // A4
        { t: 400, div: 'pedal', midi: 50, dur: 4, vel: 0.88 },   // D3

        // Bar 102
        { t: 404, div: 'great', midi: 79, dur: 1, vel: 0.90 },   // G5
        { t: 405, div: 'great', midi: 78, dur: 1, vel: 0.90 },   // F#5
        { t: 406, div: 'great', midi: 76, dur: 1, vel: 0.88 },   // E5
        { t: 407, div: 'great', midi: 73, dur: 1, vel: 0.90 },   // C#5
        { t: 404, div: 'swell', midi: 67, dur: 2, vel: 0.72 },   // G4
        { t: 406, div: 'swell', midi: 64, dur: 2, vel: 0.72 },   // E4
        { t: 404, div: 'pedal', midi: 43, dur: 2, vel: 0.88 },   // G2
        { t: 406, div: 'pedal', midi: 45, dur: 2, vel: 0.88 },   // A2

        // Bar 103
        { t: 408, div: 'great', midi: 74, dur: 4, vel: 0.92 },   // D5 sustained
        { t: 408, div: 'swell', midi: 62, dur: 4, vel: 0.75 },   // D4
        { t: 408, div: 'swell', midi: 66, dur: 4, vel: 0.72 },   // F#4
        { t: 408, div: 'swell', midi: 69, dur: 4, vel: 0.72 },   // A4
        { t: 408, div: 'choir', midi: 57, dur: 4, vel: 0.62 },   // A3
        { t: 408, div: 'pedal', midi: 45, dur: 4, vel: 0.90 },   // A2

        // Bar 104: Fermata-like preparation
        { t: 412, div: 'great', midi: 74, dur: 4, vel: 0.95 },   // D5
        { t: 412, div: 'great', midi: 69, dur: 4, vel: 0.90 },   // A4
        { t: 412, div: 'swell', midi: 62, dur: 4, vel: 0.75 },   // D4
        { t: 412, div: 'swell', midi: 66, dur: 4, vel: 0.72 },   // F#4
        { t: 412, div: 'choir', midi: 54, dur: 4, vel: 0.62 },   // F#3
        { t: 412, div: 'pedal', midi: 45, dur: 4, vel: 0.92 },   // A2 (dominant)

        // ============================================================
        // GRAND FINALE - Triumphant D major, full organ (bars 105-130)
        // The Westminster chimes thunder forth in glory
        // ============================================================

        // Bar 105-106: Massive opening - Theme fortissimo
        { t: 416, div: 'great', midi: 74, dur: 2, vel: 0.95 },   // D5
        { t: 418, div: 'great', midi: 78, dur: 2, vel: 0.92 },   // F#5
        { t: 416, div: 'swell', midi: 62, dur: 2, vel: 0.78 },   // D4
        { t: 418, div: 'swell', midi: 66, dur: 2, vel: 0.75 },   // F#4
        { t: 416, div: 'choir', midi: 74, dur: 2, vel: 0.65 },   // D5 doubling
        { t: 418, div: 'choir', midi: 78, dur: 2, vel: 0.62 },   // F#5 doubling
        { t: 416, div: 'pedal', midi: 50, dur: 4, vel: 0.92 },   // D3
        { t: 416, div: 'pedal', midi: 38, dur: 4, vel: 0.90 },   // D2

        // Bar 106
        { t: 420, div: 'great', midi: 76, dur: 2, vel: 0.92 },   // E5
        { t: 422, div: 'great', midi: 69, dur: 2, vel: 0.95 },   // A4
        { t: 420, div: 'swell', midi: 64, dur: 2, vel: 0.78 },   // E4
        { t: 422, div: 'swell', midi: 57, dur: 2, vel: 0.78 },   // A3
        { t: 420, div: 'choir', midi: 76, dur: 2, vel: 0.65 },   // E5
        { t: 422, div: 'choir', midi: 69, dur: 2, vel: 0.65 },   // A4
        { t: 420, div: 'pedal', midi: 45, dur: 4, vel: 0.92 },   // A2

        // Bar 107-108: Second phrase
        { t: 424, div: 'great', midi: 69, dur: 2, vel: 0.95 },   // A4
        { t: 426, div: 'great', midi: 76, dur: 2, vel: 0.92 },   // E5
        { t: 424, div: 'swell', midi: 57, dur: 2, vel: 0.78 },   // A3
        { t: 426, div: 'swell', midi: 64, dur: 2, vel: 0.78 },   // E4
        { t: 424, div: 'pedal', midi: 45, dur: 4, vel: 0.92 },   // A2

        // Bar 108
        { t: 428, div: 'great', midi: 78, dur: 2, vel: 0.92 },   // F#5
        { t: 430, div: 'great', midi: 74, dur: 2, vel: 0.95 },   // D5
        { t: 428, div: 'swell', midi: 66, dur: 2, vel: 0.78 },   // F#4
        { t: 430, div: 'swell', midi: 62, dur: 2, vel: 0.80 },   // D4
        { t: 428, div: 'pedal', midi: 42, dur: 2, vel: 0.92 },   // F#2
        { t: 430, div: 'pedal', midi: 50, dur: 2, vel: 0.95 },   // D3

        // Bar 109-110: Third quarter thundering
        { t: 432, div: 'great', midi: 74, dur: 1, vel: 0.95 },   // D5
        { t: 433, div: 'great', midi: 76, dur: 1, vel: 0.92 },   // E5
        { t: 434, div: 'great', midi: 78, dur: 1, vel: 0.92 },   // F#5
        { t: 435, div: 'great', midi: 74, dur: 1, vel: 0.95 },   // D5
        { t: 432, div: 'swell', midi: 62, dur: 1, vel: 0.78 },   // D4
        { t: 433, div: 'swell', midi: 64, dur: 1, vel: 0.75 },   // E4
        { t: 434, div: 'swell', midi: 66, dur: 1, vel: 0.75 },   // F#4
        { t: 435, div: 'swell', midi: 62, dur: 1, vel: 0.78 },   // D4
        { t: 432, div: 'choir', midi: 74, dur: 1, vel: 0.68 },   // D5
        { t: 433, div: 'choir', midi: 76, dur: 1, vel: 0.65 },   // E5
        { t: 434, div: 'choir', midi: 78, dur: 1, vel: 0.65 },   // F#5
        { t: 435, div: 'choir', midi: 74, dur: 1, vel: 0.68 },   // D5
        { t: 432, div: 'pedal', midi: 50, dur: 4, vel: 0.95 },   // D3

        // Bar 110
        { t: 436, div: 'great', midi: 78, dur: 1, vel: 0.92 },   // F#5
        { t: 437, div: 'great', midi: 74, dur: 1, vel: 0.92 },   // D5
        { t: 438, div: 'great', midi: 76, dur: 1, vel: 0.92 },   // E5
        { t: 439, div: 'great', midi: 69, dur: 1, vel: 0.95 },   // A4
        { t: 436, div: 'swell', midi: 66, dur: 1, vel: 0.75 },   // F#4
        { t: 437, div: 'swell', midi: 62, dur: 1, vel: 0.75 },   // D4
        { t: 438, div: 'swell', midi: 64, dur: 1, vel: 0.75 },   // E4
        { t: 439, div: 'swell', midi: 57, dur: 1, vel: 0.78 },   // A3
        { t: 436, div: 'pedal', midi: 45, dur: 4, vel: 0.95 },   // A2

        // Bar 111-112: Fourth quarter - full force
        { t: 440, div: 'great', midi: 69, dur: 2, vel: 0.95 },   // A4
        { t: 442, div: 'great', midi: 78, dur: 2, vel: 0.92 },   // F#5
        { t: 440, div: 'swell', midi: 57, dur: 1, vel: 0.78 },   // A3
        { t: 441, div: 'swell', midi: 64, dur: 1, vel: 0.75 },   // E4
        { t: 442, div: 'swell', midi: 66, dur: 1, vel: 0.78 },   // F#4
        { t: 443, div: 'swell', midi: 69, dur: 1, vel: 0.75 },   // A4
        { t: 440, div: 'pedal', midi: 45, dur: 4, vel: 0.95 },   // A2

        // Bar 112: The hour strikes - D major
        { t: 444, div: 'great', midi: 76, dur: 2, vel: 0.92 },   // E5
        { t: 446, div: 'great', midi: 74, dur: 2, vel: 1.0 },    // D5 (hour!)
        { t: 444, div: 'swell', midi: 64, dur: 2, vel: 0.80 },   // E4
        { t: 446, div: 'swell', midi: 62, dur: 2, vel: 0.82 },   // D4
        { t: 446, div: 'swell', midi: 66, dur: 2, vel: 0.80 },   // F#4
        { t: 444, div: 'pedal', midi: 52, dur: 2, vel: 0.95 },   // E3
        { t: 446, div: 'pedal', midi: 50, dur: 2, vel: 1.0 },    // D3

        // Bars 113-118: Glorious peroration
        // Bar 113
        { t: 448, div: 'great', midi: 74, dur: 2, vel: 0.95 },   // D5
        { t: 450, div: 'great', midi: 78, dur: 2, vel: 0.92 },   // F#5
        { t: 448, div: 'swell', midi: 62, dur: 1, vel: 0.80 },   // D4
        { t: 449, div: 'swell', midi: 66, dur: 1, vel: 0.78 },   // F#4
        { t: 450, div: 'swell', midi: 69, dur: 1, vel: 0.80 },   // A4
        { t: 451, div: 'swell', midi: 66, dur: 1, vel: 0.78 },   // F#4
        { t: 448, div: 'choir', midi: 54, dur: 4, vel: 0.65 },   // F#3
        { t: 448, div: 'pedal', midi: 50, dur: 4, vel: 0.95 },   // D3
        { t: 448, div: 'pedal', midi: 38, dur: 4, vel: 0.92 },   // D2

        // Bar 114
        { t: 452, div: 'great', midi: 81, dur: 2, vel: 0.95 },   // A5
        { t: 454, div: 'great', midi: 78, dur: 2, vel: 0.92 },   // F#5
        { t: 452, div: 'swell', midi: 69, dur: 2, vel: 0.80 },   // A4
        { t: 454, div: 'swell', midi: 66, dur: 2, vel: 0.78 },   // F#4
        { t: 452, div: 'pedal', midi: 45, dur: 4, vel: 0.95 },   // A2

        // Bar 115
        { t: 456, div: 'great', midi: 74, dur: 1, vel: 0.95 },   // D5
        { t: 457, div: 'great', midi: 76, dur: 1, vel: 0.92 },   // E5
        { t: 458, div: 'great', midi: 78, dur: 1, vel: 0.92 },   // F#5
        { t: 459, div: 'great', midi: 81, dur: 1, vel: 0.95 },   // A5
        { t: 456, div: 'swell', midi: 62, dur: 2, vel: 0.80 },   // D4
        { t: 458, div: 'swell', midi: 66, dur: 2, vel: 0.80 },   // F#4
        { t: 456, div: 'pedal', midi: 50, dur: 4, vel: 0.95 },   // D3

        // Bar 116
        { t: 460, div: 'great', midi: 79, dur: 1, vel: 0.92 },   // G5
        { t: 461, div: 'great', midi: 78, dur: 1, vel: 0.92 },   // F#5
        { t: 462, div: 'great', midi: 76, dur: 1, vel: 0.90 },   // E5
        { t: 463, div: 'great', midi: 73, dur: 1, vel: 0.92 },   // C#5
        { t: 460, div: 'swell', midi: 67, dur: 2, vel: 0.78 },   // G4
        { t: 462, div: 'swell', midi: 64, dur: 2, vel: 0.78 },   // E4
        { t: 460, div: 'pedal', midi: 43, dur: 2, vel: 0.92 },   // G2
        { t: 462, div: 'pedal', midi: 45, dur: 2, vel: 0.92 },   // A2

        // Bar 117-118: Final cadence
        { t: 464, div: 'great', midi: 74, dur: 4, vel: 0.98 },   // D5
        { t: 464, div: 'great', midi: 78, dur: 4, vel: 0.95 },   // F#5
        { t: 464, div: 'great', midi: 81, dur: 4, vel: 0.92 },   // A5
        { t: 464, div: 'swell', midi: 62, dur: 4, vel: 0.82 },   // D4
        { t: 464, div: 'swell', midi: 66, dur: 4, vel: 0.80 },   // F#4
        { t: 464, div: 'swell', midi: 69, dur: 4, vel: 0.80 },   // A4
        { t: 464, div: 'choir', midi: 54, dur: 4, vel: 0.68 },   // F#3
        { t: 464, div: 'choir', midi: 57, dur: 4, vel: 0.68 },   // A3
        { t: 464, div: 'choir', midi: 62, dur: 4, vel: 0.68 },   // D4
        { t: 464, div: 'pedal', midi: 50, dur: 4, vel: 1.0 },    // D3
        { t: 464, div: 'pedal', midi: 38, dur: 4, vel: 0.98 },   // D2

        // Bar 118: Final D major chord, ringing
        { t: 468, div: 'great', midi: 74, dur: 8, vel: 0.95 },   // D5
        { t: 468, div: 'great', midi: 78, dur: 8, vel: 0.92 },   // F#5
        { t: 468, div: 'great', midi: 81, dur: 8, vel: 0.90 },   // A5
        { t: 468, div: 'swell', midi: 62, dur: 8, vel: 0.80 },   // D4
        { t: 468, div: 'swell', midi: 66, dur: 8, vel: 0.78 },   // F#4
        { t: 468, div: 'swell', midi: 69, dur: 8, vel: 0.78 },   // A4
        { t: 468, div: 'choir', midi: 54, dur: 8, vel: 0.65 },   // F#3
        { t: 468, div: 'choir', midi: 62, dur: 8, vel: 0.65 },   // D4
        { t: 468, div: 'pedal', midi: 50, dur: 8, vel: 0.98 },   // D3
        { t: 468, div: 'pedal', midi: 38, dur: 8, vel: 0.95 },   // D2
    ]
};

// ============================================================
// Saint-Saens - Symphony No. 3 "Organ" Finale (Maestoso)
// FULL VERSION - Complete finale movement
// ============================================================
// The famous organ symphony finale in C major
// Massive opening chord → Chorale theme → Development →
// Climactic build → Final peroration → Triumphant ending
// Key: C major, tempo 76 BPM, 4/4 time
//
// MIDI: C3=48, D3=50, E3=52, F3=53, G3=55, A3=57, B3=59
//       C4=60, D4=62, E4=64, F4=65, G4=67, A4=69, B4=71
//       C5=72, D5=74, E5=76, F5=77, G5=79, A5=81
//       Pedal: C2=36, D2=38, E2=40, F2=41, G2=43, A2=45, B2=47
// ============================================================

const PIECE_ORGAN_SYMPHONY = {
    title: "Symphony No. 3 Finale - Maestoso (Full)",
    composer: "Camille Saint-Saens",
    catalog: "Op. 78",
    key: "C major",
    tempo: 76,
    tempoChanges: [
        { t: 0, tempo: 76, label: "Maestoso" },
        { t: 96, tempo: 80, label: "Piu mosso" },
        { t: 224, tempo: 72, label: "Largamente" },
        { t: 288, tempo: 76, label: "Maestoso (return)" },
        { t: 384, tempo: 68, label: "Molto maestoso" }
    ],
    registration: {
        great: ['gt-principal16', 'gt-principal8', 'gt-bourdon8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8'],
        swell: ['sw-bourdon16', 'sw-gedeckt8', 'sw-salicional8', 'sw-voxceleste8', 'sw-principal4', 'sw-oboe8'],
        choir: ['ch-gedeckt8', 'ch-dulciana8', 'ch-principal4', 'ch-rohrflute4', 'ch-cromorne8'],
        pedal: ['pd-subbass32', 'pd-principal16', 'pd-subbass16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ============================================================
        // OPENING BLAST - Massive C major chord (bars 1-4)
        // Full organ, fff
        // ============================================================

        // Bar 1-2: C major chord blast
        { t: 0, div: 'great', midi: 72, dur: 8, vel: 1.0 },      // C5
        { t: 0, div: 'great', midi: 76, dur: 8, vel: 0.95 },     // E5
        { t: 0, div: 'great', midi: 79, dur: 8, vel: 0.95 },     // G5
        { t: 0, div: 'swell', midi: 60, dur: 8, vel: 0.82 },     // C4
        { t: 0, div: 'swell', midi: 64, dur: 8, vel: 0.80 },     // E4
        { t: 0, div: 'swell', midi: 67, dur: 8, vel: 0.80 },     // G4
        { t: 0, div: 'choir', midi: 60, dur: 8, vel: 0.72 },     // C4
        { t: 0, div: 'choir', midi: 55, dur: 8, vel: 0.72 },     // G3
        { t: 0, div: 'pedal', midi: 48, dur: 8, vel: 1.0 },      // C3
        { t: 0, div: 'pedal', midi: 36, dur: 8, vel: 0.98 },     // C2

        // Bar 3-4: Chord sustains then resolves
        { t: 8, div: 'great', midi: 72, dur: 4, vel: 0.95 },     // C5
        { t: 8, div: 'great', midi: 76, dur: 4, vel: 0.92 },     // E5
        { t: 8, div: 'great', midi: 79, dur: 4, vel: 0.92 },     // G5
        { t: 12, div: 'great', midi: 72, dur: 4, vel: 0.90 },    // C5
        { t: 12, div: 'great', midi: 74, dur: 4, vel: 0.88 },    // D5
        { t: 8, div: 'swell', midi: 60, dur: 4, vel: 0.78 },     // C4
        { t: 8, div: 'swell', midi: 64, dur: 4, vel: 0.78 },     // E4
        { t: 12, div: 'swell', midi: 60, dur: 4, vel: 0.75 },    // C4
        { t: 12, div: 'swell', midi: 62, dur: 4, vel: 0.75 },    // D4
        { t: 8, div: 'pedal', midi: 48, dur: 8, vel: 0.95 },     // C3

        // ============================================================
        // CHORALE THEME - First statement (bars 5-20)
        // The Dies Irae transformation: C-D-E-F-E-D-C
        // Long notes, majestic, on Great
        // ============================================================

        // Bar 5-6: C-D (whole notes)
        { t: 16, div: 'great', midi: 72, dur: 4, vel: 0.90 },    // C5 whole
        { t: 20, div: 'great', midi: 74, dur: 4, vel: 0.88 },    // D5 whole
        { t: 16, div: 'swell', midi: 64, dur: 4, vel: 0.70 },    // E4
        { t: 16, div: 'swell', midi: 67, dur: 4, vel: 0.70 },    // G4
        { t: 20, div: 'swell', midi: 62, dur: 4, vel: 0.70 },    // D4
        { t: 20, div: 'swell', midi: 67, dur: 4, vel: 0.70 },    // G4
        { t: 16, div: 'choir', midi: 60, dur: 4, vel: 0.60 },    // C4
        { t: 20, div: 'choir', midi: 59, dur: 4, vel: 0.60 },    // B3
        { t: 16, div: 'pedal', midi: 48, dur: 4, vel: 0.85 },    // C3
        { t: 20, div: 'pedal', midi: 43, dur: 4, vel: 0.85 },    // G2

        // Bar 7-8: E-F (whole notes)
        { t: 24, div: 'great', midi: 76, dur: 4, vel: 0.90 },    // E5
        { t: 28, div: 'great', midi: 77, dur: 4, vel: 0.92 },    // F5 (peak)
        { t: 24, div: 'swell', midi: 64, dur: 4, vel: 0.72 },    // E4
        { t: 24, div: 'swell', midi: 72, dur: 4, vel: 0.70 },    // C5
        { t: 28, div: 'swell', midi: 65, dur: 4, vel: 0.72 },    // F4
        { t: 28, div: 'swell', midi: 69, dur: 4, vel: 0.70 },    // A4
        { t: 24, div: 'choir', midi: 60, dur: 4, vel: 0.62 },    // C4
        { t: 28, div: 'choir', midi: 60, dur: 4, vel: 0.62 },    // C4
        { t: 24, div: 'pedal', midi: 48, dur: 4, vel: 0.85 },    // C3
        { t: 28, div: 'pedal', midi: 41, dur: 4, vel: 0.88 },    // F2

        // Bar 9-10: E-D (descending, whole notes)
        { t: 32, div: 'great', midi: 76, dur: 4, vel: 0.88 },    // E5
        { t: 36, div: 'great', midi: 74, dur: 4, vel: 0.85 },    // D5
        { t: 32, div: 'swell', midi: 64, dur: 4, vel: 0.70 },    // E4
        { t: 32, div: 'swell', midi: 67, dur: 4, vel: 0.70 },    // G4
        { t: 36, div: 'swell', midi: 62, dur: 4, vel: 0.70 },    // D4
        { t: 36, div: 'swell', midi: 67, dur: 4, vel: 0.68 },    // G4
        { t: 32, div: 'choir', midi: 60, dur: 4, vel: 0.60 },    // C4
        { t: 36, div: 'choir', midi: 59, dur: 4, vel: 0.60 },    // B3
        { t: 32, div: 'pedal', midi: 48, dur: 4, vel: 0.85 },    // C3
        { t: 36, div: 'pedal', midi: 43, dur: 4, vel: 0.82 },    // G2

        // Bar 11-12: C (resolution, whole note held)
        { t: 40, div: 'great', midi: 72, dur: 8, vel: 0.92 },    // C5 (resolution!)
        { t: 40, div: 'swell', midi: 60, dur: 8, vel: 0.75 },    // C4
        { t: 40, div: 'swell', midi: 64, dur: 8, vel: 0.72 },    // E4
        { t: 40, div: 'swell', midi: 67, dur: 8, vel: 0.72 },    // G4
        { t: 40, div: 'choir', midi: 60, dur: 8, vel: 0.62 },    // C4
        { t: 40, div: 'pedal', midi: 48, dur: 8, vel: 0.90 },    // C3
        { t: 40, div: 'pedal', midi: 36, dur: 8, vel: 0.88 },    // C2

        // Bar 13-16: Second phrase of chorale - ascending
        // Bar 13: G (new phrase)
        { t: 48, div: 'great', midi: 67, dur: 4, vel: 0.85 },    // G4
        { t: 48, div: 'swell', midi: 59, dur: 4, vel: 0.68 },    // B3
        { t: 48, div: 'swell', midi: 62, dur: 4, vel: 0.68 },    // D4
        { t: 48, div: 'pedal', midi: 43, dur: 4, vel: 0.82 },    // G2

        // Bar 14: A
        { t: 52, div: 'great', midi: 69, dur: 4, vel: 0.88 },    // A4
        { t: 52, div: 'swell', midi: 60, dur: 4, vel: 0.70 },    // C4
        { t: 52, div: 'swell', midi: 64, dur: 4, vel: 0.68 },    // E4
        { t: 52, div: 'choir', midi: 57, dur: 4, vel: 0.60 },    // A3
        { t: 52, div: 'pedal', midi: 45, dur: 4, vel: 0.85 },    // A2

        // Bar 15: B
        { t: 56, div: 'great', midi: 71, dur: 4, vel: 0.90 },    // B4
        { t: 56, div: 'swell', midi: 62, dur: 4, vel: 0.72 },    // D4
        { t: 56, div: 'swell', midi: 67, dur: 4, vel: 0.70 },    // G4
        { t: 56, div: 'pedal', midi: 43, dur: 4, vel: 0.85 },    // G2

        // Bar 16: C (octave higher)
        { t: 60, div: 'great', midi: 72, dur: 4, vel: 0.92 },    // C5
        { t: 60, div: 'swell', midi: 64, dur: 4, vel: 0.72 },    // E4
        { t: 60, div: 'swell', midi: 67, dur: 4, vel: 0.72 },    // G4
        { t: 60, div: 'choir', midi: 60, dur: 4, vel: 0.62 },    // C4
        { t: 60, div: 'pedal', midi: 48, dur: 4, vel: 0.88 },    // C3

        // Bar 17-20: Descending phrase B-A-G (resolution to C)
        { t: 64, div: 'great', midi: 71, dur: 4, vel: 0.88 },    // B4
        { t: 64, div: 'swell', midi: 62, dur: 4, vel: 0.70 },    // D4
        { t: 64, div: 'swell', midi: 65, dur: 4, vel: 0.68 },    // F4
        { t: 64, div: 'pedal', midi: 43, dur: 4, vel: 0.85 },    // G2

        { t: 68, div: 'great', midi: 69, dur: 4, vel: 0.85 },    // A4
        { t: 68, div: 'swell', midi: 60, dur: 4, vel: 0.70 },    // C4
        { t: 68, div: 'swell', midi: 65, dur: 4, vel: 0.68 },    // F4
        { t: 68, div: 'pedal', midi: 41, dur: 4, vel: 0.85 },    // F2

        { t: 72, div: 'great', midi: 67, dur: 4, vel: 0.82 },    // G4
        { t: 72, div: 'swell', midi: 59, dur: 4, vel: 0.68 },    // B3
        { t: 72, div: 'swell', midi: 62, dur: 4, vel: 0.68 },    // D4
        { t: 72, div: 'pedal', midi: 43, dur: 4, vel: 0.82 },    // G2

        // Bar 20: Resolution to C
        { t: 76, div: 'great', midi: 72, dur: 4, vel: 0.90 },    // C5
        { t: 76, div: 'great', midi: 67, dur: 4, vel: 0.88 },    // G4
        { t: 76, div: 'swell', midi: 60, dur: 4, vel: 0.72 },    // C4
        { t: 76, div: 'swell', midi: 64, dur: 4, vel: 0.70 },    // E4
        { t: 76, div: 'choir', midi: 60, dur: 4, vel: 0.62 },    // C4
        { t: 76, div: 'pedal', midi: 48, dur: 4, vel: 0.88 },    // C3
        { t: 76, div: 'pedal', midi: 36, dur: 4, vel: 0.85 },    // C2

        // Bars 21-24: Connecting passage
        { t: 80, div: 'great', midi: 72, dur: 2, vel: 0.85 },    // C5
        { t: 82, div: 'great', midi: 74, dur: 2, vel: 0.85 },    // D5
        { t: 84, div: 'great', midi: 76, dur: 2, vel: 0.88 },    // E5
        { t: 86, div: 'great', midi: 77, dur: 2, vel: 0.90 },    // F5
        { t: 80, div: 'swell', midi: 64, dur: 2, vel: 0.68 },    // E4
        { t: 82, div: 'swell', midi: 62, dur: 2, vel: 0.68 },    // D4
        { t: 84, div: 'swell', midi: 64, dur: 2, vel: 0.70 },    // E4
        { t: 86, div: 'swell', midi: 65, dur: 2, vel: 0.72 },    // F4
        { t: 80, div: 'pedal', midi: 48, dur: 4, vel: 0.82 },    // C3
        { t: 84, div: 'pedal', midi: 48, dur: 4, vel: 0.85 },    // C3

        // Bars 23-24
        { t: 88, div: 'great', midi: 76, dur: 2, vel: 0.88 },    // E5
        { t: 90, div: 'great', midi: 74, dur: 2, vel: 0.85 },    // D5
        { t: 92, div: 'great', midi: 72, dur: 4, vel: 0.90 },    // C5 (arrival)
        { t: 88, div: 'swell', midi: 64, dur: 2, vel: 0.70 },    // E4
        { t: 90, div: 'swell', midi: 59, dur: 2, vel: 0.68 },    // B3
        { t: 92, div: 'swell', midi: 60, dur: 4, vel: 0.72 },    // C4
        { t: 92, div: 'swell', midi: 64, dur: 4, vel: 0.70 },    // E4
        { t: 88, div: 'pedal', midi: 43, dur: 4, vel: 0.82 },    // G2
        { t: 92, div: 'pedal', midi: 48, dur: 4, vel: 0.88 },    // C3

        // ============================================================
        // SECOND STATEMENT - Richer harmonization (bars 25-48)
        // Theme with fuller voicing, all divisions
        // ============================================================

        // Bar 25-26: C-D with richer harmony
        { t: 96, div: 'great', midi: 72, dur: 4, vel: 0.92 },    // C5
        { t: 96, div: 'great', midi: 76, dur: 4, vel: 0.88 },    // E5
        { t: 100, div: 'great', midi: 74, dur: 4, vel: 0.90 },   // D5
        { t: 100, div: 'great', midi: 77, dur: 4, vel: 0.88 },   // F5
        { t: 96, div: 'swell', midi: 60, dur: 4, vel: 0.75 },    // C4
        { t: 96, div: 'swell', midi: 67, dur: 4, vel: 0.72 },    // G4
        { t: 100, div: 'swell', midi: 62, dur: 4, vel: 0.75 },   // D4
        { t: 100, div: 'swell', midi: 69, dur: 4, vel: 0.72 },   // A4
        { t: 96, div: 'choir', midi: 60, dur: 4, vel: 0.65 },    // C4
        { t: 100, div: 'choir', midi: 59, dur: 4, vel: 0.65 },   // B3
        { t: 96, div: 'pedal', midi: 48, dur: 4, vel: 0.90 },    // C3
        { t: 100, div: 'pedal', midi: 43, dur: 4, vel: 0.88 },   // G2

        // Bar 27-28: E-F
        { t: 104, div: 'great', midi: 76, dur: 4, vel: 0.92 },   // E5
        { t: 104, div: 'great', midi: 79, dur: 4, vel: 0.88 },   // G5
        { t: 108, div: 'great', midi: 77, dur: 4, vel: 0.95 },   // F5
        { t: 108, div: 'great', midi: 81, dur: 4, vel: 0.92 },   // A5
        { t: 104, div: 'swell', midi: 64, dur: 4, vel: 0.75 },   // E4
        { t: 104, div: 'swell', midi: 72, dur: 4, vel: 0.72 },   // C5
        { t: 108, div: 'swell', midi: 65, dur: 4, vel: 0.78 },   // F4
        { t: 108, div: 'swell', midi: 72, dur: 4, vel: 0.75 },   // C5
        { t: 104, div: 'choir', midi: 60, dur: 4, vel: 0.65 },   // C4
        { t: 108, div: 'choir', midi: 60, dur: 4, vel: 0.68 },   // C4
        { t: 104, div: 'pedal', midi: 48, dur: 4, vel: 0.90 },   // C3
        { t: 108, div: 'pedal', midi: 41, dur: 4, vel: 0.92 },   // F2

        // Bar 29-30: E-D
        { t: 112, div: 'great', midi: 76, dur: 4, vel: 0.90 },   // E5
        { t: 112, div: 'great', midi: 79, dur: 4, vel: 0.88 },   // G5
        { t: 116, div: 'great', midi: 74, dur: 4, vel: 0.88 },   // D5
        { t: 116, div: 'great', midi: 77, dur: 4, vel: 0.85 },   // F5
        { t: 112, div: 'swell', midi: 64, dur: 4, vel: 0.75 },   // E4
        { t: 112, div: 'swell', midi: 67, dur: 4, vel: 0.72 },   // G4
        { t: 116, div: 'swell', midi: 62, dur: 4, vel: 0.72 },   // D4
        { t: 116, div: 'swell', midi: 65, dur: 4, vel: 0.72 },   // F4
        { t: 112, div: 'choir', midi: 60, dur: 4, vel: 0.65 },   // C4
        { t: 116, div: 'choir', midi: 59, dur: 4, vel: 0.62 },   // B3
        { t: 112, div: 'pedal', midi: 48, dur: 4, vel: 0.88 },   // C3
        { t: 116, div: 'pedal', midi: 43, dur: 4, vel: 0.88 },   // G2

        // Bar 31-32: C resolution with grand chord
        { t: 120, div: 'great', midi: 72, dur: 8, vel: 0.95 },   // C5
        { t: 120, div: 'great', midi: 76, dur: 8, vel: 0.92 },   // E5
        { t: 120, div: 'great', midi: 79, dur: 8, vel: 0.90 },   // G5
        { t: 120, div: 'swell', midi: 60, dur: 8, vel: 0.78 },   // C4
        { t: 120, div: 'swell', midi: 64, dur: 8, vel: 0.75 },   // E4
        { t: 120, div: 'swell', midi: 67, dur: 8, vel: 0.75 },   // G4
        { t: 120, div: 'choir', midi: 60, dur: 8, vel: 0.68 },   // C4
        { t: 120, div: 'pedal', midi: 48, dur: 8, vel: 0.92 },   // C3
        { t: 120, div: 'pedal', midi: 36, dur: 8, vel: 0.90 },   // C2

        // Bar 33-40: Second phrase, enriched
        // Bar 33: G with thirds
        { t: 128, div: 'great', midi: 67, dur: 4, vel: 0.88 },   // G4
        { t: 128, div: 'great', midi: 71, dur: 4, vel: 0.85 },   // B4
        { t: 128, div: 'swell', midi: 59, dur: 4, vel: 0.72 },   // B3
        { t: 128, div: 'swell', midi: 62, dur: 4, vel: 0.72 },   // D4
        { t: 128, div: 'pedal', midi: 43, dur: 4, vel: 0.85 },   // G2

        // Bar 34: A
        { t: 132, div: 'great', midi: 69, dur: 4, vel: 0.90 },   // A4
        { t: 132, div: 'great', midi: 72, dur: 4, vel: 0.88 },   // C5
        { t: 132, div: 'swell', midi: 60, dur: 4, vel: 0.75 },   // C4
        { t: 132, div: 'swell', midi: 65, dur: 4, vel: 0.72 },   // F4
        { t: 132, div: 'choir', midi: 57, dur: 4, vel: 0.65 },   // A3
        { t: 132, div: 'pedal', midi: 45, dur: 4, vel: 0.88 },   // A2

        // Bar 35: B
        { t: 136, div: 'great', midi: 71, dur: 4, vel: 0.92 },   // B4
        { t: 136, div: 'great', midi: 74, dur: 4, vel: 0.90 },   // D5
        { t: 136, div: 'swell', midi: 62, dur: 4, vel: 0.75 },   // D4
        { t: 136, div: 'swell', midi: 67, dur: 4, vel: 0.72 },   // G4
        { t: 136, div: 'pedal', midi: 43, dur: 4, vel: 0.88 },   // G2

        // Bar 36: C5
        { t: 140, div: 'great', midi: 72, dur: 4, vel: 0.95 },   // C5
        { t: 140, div: 'great', midi: 76, dur: 4, vel: 0.92 },   // E5
        { t: 140, div: 'swell', midi: 64, dur: 4, vel: 0.78 },   // E4
        { t: 140, div: 'swell', midi: 67, dur: 4, vel: 0.75 },   // G4
        { t: 140, div: 'choir', midi: 60, dur: 4, vel: 0.68 },   // C4
        { t: 140, div: 'pedal', midi: 48, dur: 4, vel: 0.92 },   // C3

        // Bar 37-40: Descending B-A-G-C
        { t: 144, div: 'great', midi: 71, dur: 4, vel: 0.90 },   // B4
        { t: 144, div: 'great', midi: 74, dur: 4, vel: 0.88 },   // D5
        { t: 144, div: 'swell', midi: 62, dur: 4, vel: 0.72 },   // D4
        { t: 144, div: 'swell', midi: 67, dur: 4, vel: 0.72 },   // G4
        { t: 144, div: 'pedal', midi: 43, dur: 4, vel: 0.88 },   // G2

        { t: 148, div: 'great', midi: 69, dur: 4, vel: 0.88 },   // A4
        { t: 148, div: 'great', midi: 72, dur: 4, vel: 0.85 },   // C5
        { t: 148, div: 'swell', midi: 60, dur: 4, vel: 0.72 },   // C4
        { t: 148, div: 'swell', midi: 65, dur: 4, vel: 0.70 },   // F4
        { t: 148, div: 'pedal', midi: 41, dur: 4, vel: 0.88 },   // F2

        { t: 152, div: 'great', midi: 67, dur: 4, vel: 0.85 },   // G4
        { t: 152, div: 'great', midi: 71, dur: 4, vel: 0.82 },   // B4
        { t: 152, div: 'swell', midi: 59, dur: 4, vel: 0.70 },   // B3
        { t: 152, div: 'swell', midi: 62, dur: 4, vel: 0.70 },   // D4
        { t: 152, div: 'pedal', midi: 43, dur: 4, vel: 0.85 },   // G2

        // Bar 40: Grand C major arrival
        { t: 156, div: 'great', midi: 72, dur: 4, vel: 0.95 },   // C5
        { t: 156, div: 'great', midi: 76, dur: 4, vel: 0.92 },   // E5
        { t: 156, div: 'great', midi: 79, dur: 4, vel: 0.90 },   // G5
        { t: 156, div: 'swell', midi: 60, dur: 4, vel: 0.78 },   // C4
        { t: 156, div: 'swell', midi: 64, dur: 4, vel: 0.75 },   // E4
        { t: 156, div: 'choir', midi: 60, dur: 4, vel: 0.68 },   // C4
        { t: 156, div: 'pedal', midi: 48, dur: 4, vel: 0.92 },   // C3
        { t: 156, div: 'pedal', midi: 36, dur: 4, vel: 0.90 },   // C2

        // ============================================================
        // DEVELOPMENT with sequences (bars 41-56)
        // Theme fragments sequenced, modulating
        // ============================================================

        // Bar 41-42: Theme fragment in Eb (C-D-Eb)
        { t: 160, div: 'great', midi: 72, dur: 2, vel: 0.85 },   // C5
        { t: 162, div: 'great', midi: 74, dur: 2, vel: 0.85 },   // D5
        { t: 164, div: 'great', midi: 75, dur: 4, vel: 0.88 },   // Eb5
        { t: 160, div: 'swell', midi: 63, dur: 4, vel: 0.72 },   // Eb4
        { t: 164, div: 'swell', midi: 63, dur: 4, vel: 0.72 },   // Eb4
        { t: 160, div: 'swell', midi: 67, dur: 4, vel: 0.70 },   // G4
        { t: 164, div: 'swell', midi: 67, dur: 4, vel: 0.70 },   // G4
        { t: 160, div: 'pedal', midi: 48, dur: 4, vel: 0.82 },   // C3
        { t: 164, div: 'pedal', midi: 51, dur: 4, vel: 0.85 },   // Eb3

        // Bar 43-44: Sequence up (D-E-F)
        { t: 168, div: 'great', midi: 74, dur: 2, vel: 0.85 },   // D5
        { t: 170, div: 'great', midi: 76, dur: 2, vel: 0.88 },   // E5
        { t: 172, div: 'great', midi: 77, dur: 4, vel: 0.90 },   // F5
        { t: 168, div: 'swell', midi: 62, dur: 4, vel: 0.72 },   // D4
        { t: 172, div: 'swell', midi: 65, dur: 4, vel: 0.72 },   // F4
        { t: 168, div: 'swell', midi: 69, dur: 4, vel: 0.70 },   // A4
        { t: 172, div: 'swell', midi: 69, dur: 4, vel: 0.70 },   // A4
        { t: 168, div: 'pedal', midi: 50, dur: 4, vel: 0.85 },   // D3
        { t: 172, div: 'pedal', midi: 41, dur: 4, vel: 0.88 },   // F2

        // Bar 45-46: Another sequence (E-F#-G)
        { t: 176, div: 'great', midi: 76, dur: 2, vel: 0.88 },   // E5
        { t: 178, div: 'great', midi: 78, dur: 2, vel: 0.88 },   // F#5
        { t: 180, div: 'great', midi: 79, dur: 4, vel: 0.92 },   // G5
        { t: 176, div: 'swell', midi: 64, dur: 4, vel: 0.75 },   // E4
        { t: 180, div: 'swell', midi: 67, dur: 4, vel: 0.75 },   // G4
        { t: 176, div: 'swell', midi: 71, dur: 4, vel: 0.72 },   // B4
        { t: 180, div: 'swell', midi: 71, dur: 4, vel: 0.72 },   // B4
        { t: 176, div: 'choir', midi: 52, dur: 4, vel: 0.62 },   // E3
        { t: 180, div: 'choir', midi: 55, dur: 4, vel: 0.62 },   // G3
        { t: 176, div: 'pedal', midi: 40, dur: 4, vel: 0.88 },   // E2
        { t: 180, div: 'pedal', midi: 43, dur: 4, vel: 0.90 },   // G2

        // Bar 47-48: Climactic G-A-B-C ascending
        { t: 184, div: 'great', midi: 79, dur: 2, vel: 0.92 },   // G5
        { t: 186, div: 'great', midi: 81, dur: 2, vel: 0.92 },   // A5
        { t: 188, div: 'great', midi: 83, dur: 2, vel: 0.95 },   // B5
        { t: 190, div: 'great', midi: 84, dur: 2, vel: 0.98 },   // C6
        { t: 184, div: 'swell', midi: 67, dur: 2, vel: 0.78 },   // G4
        { t: 186, div: 'swell', midi: 69, dur: 2, vel: 0.78 },   // A4
        { t: 188, div: 'swell', midi: 71, dur: 2, vel: 0.80 },   // B4
        { t: 190, div: 'swell', midi: 72, dur: 2, vel: 0.82 },   // C5
        { t: 184, div: 'choir', midi: 55, dur: 4, vel: 0.65 },   // G3
        { t: 188, div: 'choir', midi: 55, dur: 4, vel: 0.68 },   // G3
        { t: 184, div: 'pedal', midi: 43, dur: 4, vel: 0.90 },   // G2
        { t: 188, div: 'pedal', midi: 43, dur: 4, vel: 0.92 },   // G2

        // Bar 49-52: Descending sequence back to tonic
        { t: 192, div: 'great', midi: 81, dur: 2, vel: 0.92 },   // A5
        { t: 194, div: 'great', midi: 79, dur: 2, vel: 0.90 },   // G5
        { t: 196, div: 'great', midi: 77, dur: 2, vel: 0.88 },   // F5
        { t: 198, div: 'great', midi: 76, dur: 2, vel: 0.90 },   // E5
        { t: 192, div: 'swell', midi: 69, dur: 2, vel: 0.75 },   // A4
        { t: 194, div: 'swell', midi: 67, dur: 2, vel: 0.72 },   // G4
        { t: 196, div: 'swell', midi: 65, dur: 2, vel: 0.72 },   // F4
        { t: 198, div: 'swell', midi: 64, dur: 2, vel: 0.75 },   // E4
        { t: 192, div: 'pedal', midi: 45, dur: 4, vel: 0.88 },   // A2
        { t: 196, div: 'pedal', midi: 41, dur: 4, vel: 0.88 },   // F2

        // Bar 51-52
        { t: 200, div: 'great', midi: 74, dur: 2, vel: 0.88 },   // D5
        { t: 202, div: 'great', midi: 72, dur: 2, vel: 0.85 },   // C5
        { t: 204, div: 'great', midi: 71, dur: 2, vel: 0.85 },   // B4
        { t: 206, div: 'great', midi: 72, dur: 2, vel: 0.90 },   // C5 (arrival)
        { t: 200, div: 'swell', midi: 62, dur: 2, vel: 0.72 },   // D4
        { t: 202, div: 'swell', midi: 60, dur: 2, vel: 0.72 },   // C4
        { t: 204, div: 'swell', midi: 59, dur: 2, vel: 0.72 },   // B3
        { t: 206, div: 'swell', midi: 60, dur: 2, vel: 0.75 },   // C4
        { t: 200, div: 'pedal', midi: 43, dur: 4, vel: 0.85 },   // G2
        { t: 204, div: 'pedal', midi: 43, dur: 2, vel: 0.85 },   // G2
        { t: 206, div: 'pedal', midi: 48, dur: 2, vel: 0.88 },   // C3

        // Bar 53-56: Development continues, building
        { t: 208, div: 'great', midi: 72, dur: 1, vel: 0.88 },   // C5
        { t: 209, div: 'great', midi: 74, dur: 1, vel: 0.88 },   // D5
        { t: 210, div: 'great', midi: 76, dur: 1, vel: 0.90 },   // E5
        { t: 211, div: 'great', midi: 77, dur: 1, vel: 0.90 },   // F5
        { t: 208, div: 'swell', midi: 60, dur: 2, vel: 0.72 },   // C4
        { t: 210, div: 'swell', midi: 64, dur: 2, vel: 0.75 },   // E4
        { t: 208, div: 'pedal', midi: 48, dur: 4, vel: 0.85 },   // C3

        { t: 212, div: 'great', midi: 76, dur: 1, vel: 0.90 },   // E5
        { t: 213, div: 'great', midi: 74, dur: 1, vel: 0.88 },   // D5
        { t: 214, div: 'great', midi: 72, dur: 2, vel: 0.92 },   // C5
        { t: 212, div: 'swell', midi: 64, dur: 2, vel: 0.72 },   // E4
        { t: 214, div: 'swell', midi: 60, dur: 2, vel: 0.75 },   // C4
        { t: 212, div: 'pedal', midi: 43, dur: 2, vel: 0.85 },   // G2
        { t: 214, div: 'pedal', midi: 48, dur: 2, vel: 0.88 },   // C3

        // Bar 55-56: More motion
        { t: 216, div: 'great', midi: 67, dur: 1, vel: 0.85 },   // G4
        { t: 217, div: 'great', midi: 69, dur: 1, vel: 0.85 },   // A4
        { t: 218, div: 'great', midi: 71, dur: 1, vel: 0.88 },   // B4
        { t: 219, div: 'great', midi: 72, dur: 1, vel: 0.90 },   // C5
        { t: 216, div: 'swell', midi: 59, dur: 2, vel: 0.72 },   // B3
        { t: 218, div: 'swell', midi: 62, dur: 2, vel: 0.75 },   // D4
        { t: 216, div: 'choir', midi: 55, dur: 4, vel: 0.62 },   // G3
        { t: 216, div: 'pedal', midi: 43, dur: 4, vel: 0.85 },   // G2

        { t: 220, div: 'great', midi: 71, dur: 1, vel: 0.88 },   // B4
        { t: 221, div: 'great', midi: 69, dur: 1, vel: 0.85 },   // A4
        { t: 222, div: 'great', midi: 67, dur: 2, vel: 0.88 },   // G4
        { t: 220, div: 'swell', midi: 59, dur: 2, vel: 0.72 },   // B3
        { t: 222, div: 'swell', midi: 59, dur: 2, vel: 0.72 },   // B3
        { t: 220, div: 'pedal', midi: 43, dur: 4, vel: 0.85 },   // G2

        // ============================================================
        // CLIMACTIC BUILD (bars 57-72)
        // All stops engaged, building to the final peroration
        // ============================================================

        // Bar 57-58: Theme augmented, slower, more weight
        { t: 224, div: 'great', midi: 72, dur: 8, vel: 0.95 },   // C5 (augmented)
        { t: 224, div: 'great', midi: 76, dur: 8, vel: 0.92 },   // E5
        { t: 224, div: 'swell', midi: 60, dur: 8, vel: 0.80 },   // C4
        { t: 224, div: 'swell', midi: 64, dur: 8, vel: 0.78 },   // E4
        { t: 224, div: 'swell', midi: 67, dur: 8, vel: 0.78 },   // G4
        { t: 224, div: 'choir', midi: 60, dur: 8, vel: 0.70 },   // C4
        { t: 224, div: 'pedal', midi: 48, dur: 8, vel: 0.92 },   // C3
        { t: 224, div: 'pedal', midi: 36, dur: 8, vel: 0.90 },   // C2

        // Bar 59-60: D augmented
        { t: 232, div: 'great', midi: 74, dur: 8, vel: 0.92 },   // D5
        { t: 232, div: 'great', midi: 77, dur: 8, vel: 0.90 },   // F5
        { t: 232, div: 'swell', midi: 62, dur: 8, vel: 0.78 },   // D4
        { t: 232, div: 'swell', midi: 65, dur: 8, vel: 0.78 },   // F4
        { t: 232, div: 'swell', midi: 69, dur: 8, vel: 0.75 },   // A4
        { t: 232, div: 'choir', midi: 59, dur: 8, vel: 0.68 },   // B3
        { t: 232, div: 'pedal', midi: 43, dur: 8, vel: 0.90 },   // G2

        // Bar 61-62: E augmented
        { t: 240, div: 'great', midi: 76, dur: 8, vel: 0.95 },   // E5
        { t: 240, div: 'great', midi: 79, dur: 8, vel: 0.92 },   // G5
        { t: 240, div: 'swell', midi: 64, dur: 8, vel: 0.80 },   // E4
        { t: 240, div: 'swell', midi: 67, dur: 8, vel: 0.78 },   // G4
        { t: 240, div: 'swell', midi: 72, dur: 8, vel: 0.78 },   // C5
        { t: 240, div: 'choir', midi: 60, dur: 8, vel: 0.70 },   // C4
        { t: 240, div: 'pedal', midi: 48, dur: 8, vel: 0.92 },   // C3

        // Bar 63-64: F augmented (CLIMAX)
        { t: 248, div: 'great', midi: 77, dur: 8, vel: 1.0 },    // F5
        { t: 248, div: 'great', midi: 81, dur: 8, vel: 0.95 },   // A5
        { t: 248, div: 'swell', midi: 65, dur: 8, vel: 0.82 },   // F4
        { t: 248, div: 'swell', midi: 69, dur: 8, vel: 0.82 },   // A4
        { t: 248, div: 'swell', midi: 72, dur: 8, vel: 0.80 },   // C5
        { t: 248, div: 'choir', midi: 60, dur: 8, vel: 0.72 },   // C4
        { t: 248, div: 'choir', midi: 65, dur: 8, vel: 0.72 },   // F4
        { t: 248, div: 'pedal', midi: 41, dur: 8, vel: 0.95 },   // F2
        { t: 248, div: 'pedal', midi: 53, dur: 8, vel: 0.92 },   // F3

        // Bar 65-66: E descending
        { t: 256, div: 'great', midi: 76, dur: 8, vel: 0.95 },   // E5
        { t: 256, div: 'great', midi: 79, dur: 8, vel: 0.92 },   // G5
        { t: 256, div: 'swell', midi: 64, dur: 8, vel: 0.80 },   // E4
        { t: 256, div: 'swell', midi: 67, dur: 8, vel: 0.78 },   // G4
        { t: 256, div: 'choir', midi: 60, dur: 8, vel: 0.70 },   // C4
        { t: 256, div: 'pedal', midi: 48, dur: 8, vel: 0.92 },   // C3

        // Bar 67-68: D
        { t: 264, div: 'great', midi: 74, dur: 8, vel: 0.92 },   // D5
        { t: 264, div: 'great', midi: 77, dur: 8, vel: 0.90 },   // F5
        { t: 264, div: 'swell', midi: 62, dur: 8, vel: 0.78 },   // D4
        { t: 264, div: 'swell', midi: 67, dur: 8, vel: 0.78 },   // G4
        { t: 264, div: 'choir', midi: 59, dur: 8, vel: 0.68 },   // B3
        { t: 264, div: 'pedal', midi: 43, dur: 8, vel: 0.90 },   // G2

        // Bar 69-72: Rushing pedal under theme resolution
        // Bar 69: C resolution beginning with pedal motion
        { t: 272, div: 'great', midi: 72, dur: 4, vel: 0.95 },   // C5
        { t: 272, div: 'great', midi: 76, dur: 4, vel: 0.92 },   // E5
        { t: 272, div: 'swell', midi: 60, dur: 4, vel: 0.80 },   // C4
        { t: 272, div: 'swell', midi: 64, dur: 4, vel: 0.78 },   // E4
        { t: 272, div: 'swell', midi: 67, dur: 4, vel: 0.78 },   // G4
        // Rushing pedal
        { t: 272, div: 'pedal', midi: 48, dur: 1, vel: 0.88 },   // C3
        { t: 273, div: 'pedal', midi: 50, dur: 1, vel: 0.85 },   // D3
        { t: 274, div: 'pedal', midi: 48, dur: 1, vel: 0.85 },   // C3
        { t: 275, div: 'pedal', midi: 43, dur: 1, vel: 0.88 },   // G2

        // Bar 70
        { t: 276, div: 'great', midi: 72, dur: 4, vel: 0.95 },   // C5
        { t: 276, div: 'great', midi: 79, dur: 4, vel: 0.92 },   // G5
        { t: 276, div: 'swell', midi: 60, dur: 4, vel: 0.80 },   // C4
        { t: 276, div: 'swell', midi: 67, dur: 4, vel: 0.80 },   // G4
        { t: 276, div: 'pedal', midi: 48, dur: 1, vel: 0.88 },   // C3
        { t: 277, div: 'pedal', midi: 43, dur: 1, vel: 0.85 },   // G2
        { t: 278, div: 'pedal', midi: 45, dur: 1, vel: 0.85 },   // A2
        { t: 279, div: 'pedal', midi: 43, dur: 1, vel: 0.88 },   // G2

        // Bar 71-72: Dominant preparation
        { t: 280, div: 'great', midi: 71, dur: 4, vel: 0.92 },   // B4
        { t: 280, div: 'great', midi: 74, dur: 4, vel: 0.90 },   // D5
        { t: 280, div: 'great', midi: 79, dur: 4, vel: 0.90 },   // G5
        { t: 280, div: 'swell', midi: 59, dur: 4, vel: 0.78 },   // B3
        { t: 280, div: 'swell', midi: 62, dur: 4, vel: 0.78 },   // D4
        { t: 280, div: 'swell', midi: 67, dur: 4, vel: 0.78 },   // G4
        { t: 280, div: 'pedal', midi: 43, dur: 4, vel: 0.92 },   // G2

        { t: 284, div: 'great', midi: 71, dur: 4, vel: 0.95 },   // B4
        { t: 284, div: 'great', midi: 74, dur: 4, vel: 0.92 },   // D5
        { t: 284, div: 'great', midi: 77, dur: 4, vel: 0.92 },   // F5
        { t: 284, div: 'swell', midi: 59, dur: 4, vel: 0.80 },   // B3
        { t: 284, div: 'swell', midi: 62, dur: 4, vel: 0.80 },   // D4
        { t: 284, div: 'swell', midi: 65, dur: 4, vel: 0.80 },   // F4
        { t: 284, div: 'choir', midi: 55, dur: 4, vel: 0.72 },   // G3
        { t: 284, div: 'pedal', midi: 43, dur: 4, vel: 0.95 },   // G2

        // ============================================================
        // FINAL PERORATION (bars 73-96)
        // Theme in augmentation, full organ, triumphant
        // ============================================================

        // Bar 73-76: Grand C major return
        { t: 288, div: 'great', midi: 72, dur: 4, vel: 1.0 },    // C5
        { t: 288, div: 'great', midi: 76, dur: 4, vel: 0.95 },   // E5
        { t: 288, div: 'great', midi: 79, dur: 4, vel: 0.95 },   // G5
        { t: 288, div: 'swell', midi: 60, dur: 4, vel: 0.82 },   // C4
        { t: 288, div: 'swell', midi: 64, dur: 4, vel: 0.82 },   // E4
        { t: 288, div: 'swell', midi: 67, dur: 4, vel: 0.80 },   // G4
        { t: 288, div: 'choir', midi: 60, dur: 4, vel: 0.72 },   // C4
        { t: 288, div: 'pedal', midi: 48, dur: 4, vel: 1.0 },    // C3
        { t: 288, div: 'pedal', midi: 36, dur: 4, vel: 0.98 },   // C2

        // Bar 74: D
        { t: 292, div: 'great', midi: 74, dur: 4, vel: 0.95 },   // D5
        { t: 292, div: 'great', midi: 77, dur: 4, vel: 0.92 },   // F5
        { t: 292, div: 'swell', midi: 62, dur: 4, vel: 0.80 },   // D4
        { t: 292, div: 'swell', midi: 65, dur: 4, vel: 0.80 },   // F4
        { t: 292, div: 'swell', midi: 69, dur: 4, vel: 0.78 },   // A4
        { t: 292, div: 'choir', midi: 59, dur: 4, vel: 0.70 },   // B3
        { t: 292, div: 'pedal', midi: 43, dur: 4, vel: 0.95 },   // G2

        // Bar 75: E
        { t: 296, div: 'great', midi: 76, dur: 4, vel: 0.98 },   // E5
        { t: 296, div: 'great', midi: 79, dur: 4, vel: 0.95 },   // G5
        { t: 296, div: 'swell', midi: 64, dur: 4, vel: 0.82 },   // E4
        { t: 296, div: 'swell', midi: 67, dur: 4, vel: 0.82 },   // G4
        { t: 296, div: 'swell', midi: 72, dur: 4, vel: 0.80 },   // C5
        { t: 296, div: 'choir', midi: 60, dur: 4, vel: 0.72 },   // C4
        { t: 296, div: 'pedal', midi: 48, dur: 4, vel: 0.95 },   // C3

        // Bar 76: F (apex)
        { t: 300, div: 'great', midi: 77, dur: 4, vel: 1.0 },    // F5
        { t: 300, div: 'great', midi: 81, dur: 4, vel: 0.98 },   // A5
        { t: 300, div: 'swell', midi: 65, dur: 4, vel: 0.85 },   // F4
        { t: 300, div: 'swell', midi: 69, dur: 4, vel: 0.85 },   // A4
        { t: 300, div: 'swell', midi: 72, dur: 4, vel: 0.82 },   // C5
        { t: 300, div: 'choir', midi: 60, dur: 4, vel: 0.75 },   // C4
        { t: 300, div: 'choir', midi: 65, dur: 4, vel: 0.72 },   // F4
        { t: 300, div: 'pedal', midi: 41, dur: 4, vel: 1.0 },    // F2

        // Bar 77-78: E-D descent
        { t: 304, div: 'great', midi: 76, dur: 4, vel: 0.95 },   // E5
        { t: 304, div: 'great', midi: 79, dur: 4, vel: 0.92 },   // G5
        { t: 304, div: 'swell', midi: 64, dur: 4, vel: 0.82 },   // E4
        { t: 304, div: 'swell', midi: 67, dur: 4, vel: 0.80 },   // G4
        { t: 304, div: 'pedal', midi: 48, dur: 4, vel: 0.95 },   // C3

        { t: 308, div: 'great', midi: 74, dur: 4, vel: 0.92 },   // D5
        { t: 308, div: 'great', midi: 77, dur: 4, vel: 0.90 },   // F5
        { t: 308, div: 'swell', midi: 62, dur: 4, vel: 0.80 },   // D4
        { t: 308, div: 'swell', midi: 67, dur: 4, vel: 0.80 },   // G4
        { t: 308, div: 'choir', midi: 59, dur: 4, vel: 0.70 },   // B3
        { t: 308, div: 'pedal', midi: 43, dur: 4, vel: 0.92 },   // G2

        // Bar 79-80: C resolution with rushing pedal
        { t: 312, div: 'great', midi: 72, dur: 8, vel: 1.0 },    // C5
        { t: 312, div: 'great', midi: 76, dur: 8, vel: 0.95 },   // E5
        { t: 312, div: 'great', midi: 79, dur: 8, vel: 0.95 },   // G5
        { t: 312, div: 'swell', midi: 60, dur: 8, vel: 0.85 },   // C4
        { t: 312, div: 'swell', midi: 64, dur: 8, vel: 0.82 },   // E4
        { t: 312, div: 'swell', midi: 67, dur: 8, vel: 0.82 },   // G4
        { t: 312, div: 'choir', midi: 60, dur: 8, vel: 0.75 },   // C4
        // Rushing pedal pattern
        { t: 312, div: 'pedal', midi: 48, dur: 1, vel: 0.92 },   // C3
        { t: 313, div: 'pedal', midi: 50, dur: 1, vel: 0.88 },   // D3
        { t: 314, div: 'pedal', midi: 48, dur: 1, vel: 0.88 },   // C3
        { t: 315, div: 'pedal', midi: 43, dur: 1, vel: 0.92 },   // G2
        { t: 316, div: 'pedal', midi: 48, dur: 1, vel: 0.92 },   // C3
        { t: 317, div: 'pedal', midi: 45, dur: 1, vel: 0.88 },   // A2
        { t: 318, div: 'pedal', midi: 43, dur: 1, vel: 0.90 },   // G2
        { t: 319, div: 'pedal', midi: 41, dur: 1, vel: 0.92 },   // F2

        // Bar 81-84: Second ascending phrase
        { t: 320, div: 'great', midi: 67, dur: 4, vel: 0.92 },   // G4
        { t: 320, div: 'great', midi: 71, dur: 4, vel: 0.90 },   // B4
        { t: 320, div: 'swell', midi: 59, dur: 4, vel: 0.80 },   // B3
        { t: 320, div: 'swell', midi: 62, dur: 4, vel: 0.78 },   // D4
        { t: 320, div: 'pedal', midi: 43, dur: 4, vel: 0.92 },   // G2

        { t: 324, div: 'great', midi: 69, dur: 4, vel: 0.95 },   // A4
        { t: 324, div: 'great', midi: 72, dur: 4, vel: 0.92 },   // C5
        { t: 324, div: 'swell', midi: 60, dur: 4, vel: 0.82 },   // C4
        { t: 324, div: 'swell', midi: 65, dur: 4, vel: 0.80 },   // F4
        { t: 324, div: 'choir', midi: 57, dur: 4, vel: 0.72 },   // A3
        { t: 324, div: 'pedal', midi: 45, dur: 4, vel: 0.95 },   // A2

        { t: 328, div: 'great', midi: 71, dur: 4, vel: 0.95 },   // B4
        { t: 328, div: 'great', midi: 74, dur: 4, vel: 0.92 },   // D5
        { t: 328, div: 'swell', midi: 62, dur: 4, vel: 0.82 },   // D4
        { t: 328, div: 'swell', midi: 67, dur: 4, vel: 0.80 },   // G4
        { t: 328, div: 'pedal', midi: 43, dur: 4, vel: 0.92 },   // G2

        // Bar 84: C5 blazing
        { t: 332, div: 'great', midi: 72, dur: 4, vel: 1.0 },    // C5
        { t: 332, div: 'great', midi: 76, dur: 4, vel: 0.98 },   // E5
        { t: 332, div: 'great', midi: 79, dur: 4, vel: 0.95 },   // G5
        { t: 332, div: 'swell', midi: 64, dur: 4, vel: 0.85 },   // E4
        { t: 332, div: 'swell', midi: 67, dur: 4, vel: 0.82 },   // G4
        { t: 332, div: 'choir', midi: 60, dur: 4, vel: 0.75 },   // C4
        { t: 332, div: 'pedal', midi: 48, dur: 4, vel: 1.0 },    // C3
        { t: 332, div: 'pedal', midi: 36, dur: 4, vel: 0.98 },   // C2

        // Bar 85-88: B-A-G descent with weight
        { t: 336, div: 'great', midi: 71, dur: 4, vel: 0.95 },   // B4
        { t: 336, div: 'great', midi: 74, dur: 4, vel: 0.92 },   // D5
        { t: 336, div: 'swell', midi: 62, dur: 4, vel: 0.82 },   // D4
        { t: 336, div: 'swell', midi: 65, dur: 4, vel: 0.80 },   // F4
        { t: 336, div: 'pedal', midi: 43, dur: 4, vel: 0.92 },   // G2

        { t: 340, div: 'great', midi: 69, dur: 4, vel: 0.92 },   // A4
        { t: 340, div: 'great', midi: 72, dur: 4, vel: 0.90 },   // C5
        { t: 340, div: 'swell', midi: 60, dur: 4, vel: 0.80 },   // C4
        { t: 340, div: 'swell', midi: 65, dur: 4, vel: 0.80 },   // F4
        { t: 340, div: 'pedal', midi: 41, dur: 4, vel: 0.92 },   // F2

        { t: 344, div: 'great', midi: 67, dur: 4, vel: 0.90 },   // G4
        { t: 344, div: 'great', midi: 71, dur: 4, vel: 0.88 },   // B4
        { t: 344, div: 'swell', midi: 59, dur: 4, vel: 0.78 },   // B3
        { t: 344, div: 'swell', midi: 62, dur: 4, vel: 0.78 },   // D4
        { t: 344, div: 'pedal', midi: 43, dur: 4, vel: 0.90 },   // G2

        // Bar 88: V-I cadence
        { t: 348, div: 'great', midi: 71, dur: 2, vel: 0.95 },   // B4 (dom)
        { t: 348, div: 'great', midi: 74, dur: 2, vel: 0.92 },   // D5
        { t: 348, div: 'great', midi: 77, dur: 2, vel: 0.92 },   // F5
        { t: 350, div: 'great', midi: 72, dur: 2, vel: 1.0 },    // C5 (tonic!)
        { t: 350, div: 'great', midi: 76, dur: 2, vel: 0.98 },   // E5
        { t: 350, div: 'great', midi: 79, dur: 2, vel: 0.95 },   // G5
        { t: 348, div: 'swell', midi: 59, dur: 2, vel: 0.82 },   // B3
        { t: 348, div: 'swell', midi: 62, dur: 2, vel: 0.82 },   // D4
        { t: 350, div: 'swell', midi: 60, dur: 2, vel: 0.85 },   // C4
        { t: 350, div: 'swell', midi: 64, dur: 2, vel: 0.82 },   // E4
        { t: 348, div: 'pedal', midi: 43, dur: 2, vel: 0.95 },   // G2
        { t: 350, div: 'pedal', midi: 48, dur: 2, vel: 1.0 },    // C3

        // Bars 89-92: More rushing pedal with sustained chords
        { t: 352, div: 'great', midi: 72, dur: 4, vel: 1.0 },    // C5
        { t: 352, div: 'great', midi: 76, dur: 4, vel: 0.95 },   // E5
        { t: 352, div: 'great', midi: 79, dur: 4, vel: 0.95 },   // G5
        { t: 352, div: 'swell', midi: 60, dur: 4, vel: 0.85 },   // C4
        { t: 352, div: 'swell', midi: 64, dur: 4, vel: 0.82 },   // E4
        { t: 352, div: 'swell', midi: 67, dur: 4, vel: 0.82 },   // G4
        { t: 352, div: 'choir', midi: 60, dur: 4, vel: 0.75 },   // C4
        { t: 352, div: 'pedal', midi: 48, dur: 1, vel: 0.95 },   // C3
        { t: 353, div: 'pedal', midi: 50, dur: 1, vel: 0.90 },   // D3
        { t: 354, div: 'pedal', midi: 52, dur: 1, vel: 0.90 },   // E3
        { t: 355, div: 'pedal', midi: 48, dur: 1, vel: 0.95 },   // C3

        // Bar 90
        { t: 356, div: 'great', midi: 72, dur: 4, vel: 0.98 },   // C5
        { t: 356, div: 'great', midi: 76, dur: 4, vel: 0.95 },   // E5
        { t: 356, div: 'swell', midi: 60, dur: 4, vel: 0.85 },   // C4
        { t: 356, div: 'swell', midi: 67, dur: 4, vel: 0.82 },   // G4
        { t: 356, div: 'pedal', midi: 43, dur: 1, vel: 0.92 },   // G2
        { t: 357, div: 'pedal', midi: 45, dur: 1, vel: 0.90 },   // A2
        { t: 358, div: 'pedal', midi: 43, dur: 1, vel: 0.90 },   // G2
        { t: 359, div: 'pedal', midi: 41, dur: 1, vel: 0.92 },   // F2

        // Bar 91-92: Final dominant preparation
        { t: 360, div: 'great', midi: 71, dur: 4, vel: 0.98 },   // B4
        { t: 360, div: 'great', midi: 74, dur: 4, vel: 0.95 },   // D5
        { t: 360, div: 'great', midi: 77, dur: 4, vel: 0.95 },   // F5
        { t: 360, div: 'great', midi: 79, dur: 4, vel: 0.95 },   // G5
        { t: 360, div: 'swell', midi: 59, dur: 4, vel: 0.85 },   // B3
        { t: 360, div: 'swell', midi: 62, dur: 4, vel: 0.85 },   // D4
        { t: 360, div: 'swell', midi: 65, dur: 4, vel: 0.82 },   // F4
        { t: 360, div: 'choir', midi: 55, dur: 4, vel: 0.75 },   // G3
        { t: 360, div: 'pedal', midi: 43, dur: 4, vel: 1.0 },    // G2

        // Bar 92: Still dominant, building tension
        { t: 364, div: 'great', midi: 71, dur: 4, vel: 1.0 },    // B4
        { t: 364, div: 'great', midi: 74, dur: 4, vel: 0.98 },   // D5
        { t: 364, div: 'great', midi: 77, dur: 4, vel: 0.98 },   // F5
        { t: 364, div: 'swell', midi: 59, dur: 4, vel: 0.88 },   // B3
        { t: 364, div: 'swell', midi: 62, dur: 4, vel: 0.85 },   // D4
        { t: 364, div: 'swell', midi: 65, dur: 4, vel: 0.85 },   // F4
        { t: 364, div: 'swell', midi: 67, dur: 4, vel: 0.85 },   // G4
        { t: 364, div: 'choir', midi: 55, dur: 4, vel: 0.78 },   // G3
        { t: 364, div: 'choir', midi: 59, dur: 4, vel: 0.75 },   // B3
        { t: 364, div: 'pedal', midi: 43, dur: 4, vel: 1.0 },    // G2
        { t: 364, div: 'pedal', midi: 55, dur: 4, vel: 0.95 },   // G3

        // ============================================================
        // BARS 93-96: FINAL TRIUMPHANT C MAJOR
        // Molto maestoso - broadest possible tempo
        // ============================================================

        // Bar 93-94: Massive C major chord, held
        { t: 368, div: 'great', midi: 72, dur: 8, vel: 1.0 },    // C5
        { t: 368, div: 'great', midi: 76, dur: 8, vel: 1.0 },    // E5
        { t: 368, div: 'great', midi: 79, dur: 8, vel: 0.98 },   // G5
        { t: 368, div: 'great', midi: 84, dur: 8, vel: 0.95 },   // C6
        { t: 368, div: 'swell', midi: 60, dur: 8, vel: 0.88 },   // C4
        { t: 368, div: 'swell', midi: 64, dur: 8, vel: 0.88 },   // E4
        { t: 368, div: 'swell', midi: 67, dur: 8, vel: 0.85 },   // G4
        { t: 368, div: 'swell', midi: 72, dur: 8, vel: 0.85 },   // C5
        { t: 368, div: 'choir', midi: 60, dur: 8, vel: 0.78 },   // C4
        { t: 368, div: 'choir', midi: 55, dur: 8, vel: 0.78 },   // G3
        { t: 368, div: 'choir', midi: 48, dur: 8, vel: 0.75 },   // C3
        { t: 368, div: 'pedal', midi: 48, dur: 8, vel: 1.0 },    // C3
        { t: 368, div: 'pedal', midi: 36, dur: 8, vel: 1.0 },    // C2

        // Bar 95-96: Final sustained C major, fading slightly
        { t: 376, div: 'great', midi: 72, dur: 8, vel: 0.98 },   // C5
        { t: 376, div: 'great', midi: 76, dur: 8, vel: 0.95 },   // E5
        { t: 376, div: 'great', midi: 79, dur: 8, vel: 0.95 },   // G5
        { t: 376, div: 'swell', midi: 60, dur: 8, vel: 0.85 },   // C4
        { t: 376, div: 'swell', midi: 64, dur: 8, vel: 0.85 },   // E4
        { t: 376, div: 'swell', midi: 67, dur: 8, vel: 0.82 },   // G4
        { t: 376, div: 'choir', midi: 60, dur: 8, vel: 0.75 },   // C4
        { t: 376, div: 'choir', midi: 55, dur: 8, vel: 0.75 },   // G3
        { t: 376, div: 'pedal', midi: 48, dur: 8, vel: 0.98 },   // C3
        { t: 376, div: 'pedal', midi: 36, dur: 8, vel: 0.98 },   // C2

        // ============================================================
        // CODA (bars 97-100): Final C major chords
        // ============================================================

        // Bar 97: C major chord ff
        { t: 384, div: 'great', midi: 72, dur: 4, vel: 1.0 },    // C5
        { t: 384, div: 'great', midi: 76, dur: 4, vel: 0.98 },   // E5
        { t: 384, div: 'great', midi: 79, dur: 4, vel: 0.95 },   // G5
        { t: 384, div: 'swell', midi: 60, dur: 4, vel: 0.85 },   // C4
        { t: 384, div: 'swell', midi: 64, dur: 4, vel: 0.85 },   // E4
        { t: 384, div: 'swell', midi: 67, dur: 4, vel: 0.82 },   // G4
        { t: 384, div: 'choir', midi: 60, dur: 4, vel: 0.75 },   // C4
        { t: 384, div: 'pedal', midi: 48, dur: 4, vel: 1.0 },    // C3
        { t: 384, div: 'pedal', midi: 36, dur: 4, vel: 0.98 },   // C2

        // Bar 98: Rest then chord
        { t: 390, div: 'great', midi: 72, dur: 2, vel: 1.0 },    // C5
        { t: 390, div: 'great', midi: 76, dur: 2, vel: 0.98 },   // E5
        { t: 390, div: 'great', midi: 79, dur: 2, vel: 0.95 },   // G5
        { t: 390, div: 'swell', midi: 60, dur: 2, vel: 0.85 },   // C4
        { t: 390, div: 'swell', midi: 64, dur: 2, vel: 0.82 },   // E4
        { t: 390, div: 'pedal', midi: 48, dur: 2, vel: 1.0 },    // C3

        // Bar 99-100: Final massive C chord, held to silence
        { t: 392, div: 'great', midi: 72, dur: 12, vel: 1.0 },   // C5
        { t: 392, div: 'great', midi: 76, dur: 12, vel: 0.98 },  // E5
        { t: 392, div: 'great', midi: 79, dur: 12, vel: 0.95 },  // G5
        { t: 392, div: 'swell', midi: 60, dur: 12, vel: 0.88 },  // C4
        { t: 392, div: 'swell', midi: 64, dur: 12, vel: 0.85 },  // E4
        { t: 392, div: 'swell', midi: 67, dur: 12, vel: 0.85 },  // G4
        { t: 392, div: 'choir', midi: 60, dur: 12, vel: 0.78 },  // C4
        { t: 392, div: 'choir', midi: 55, dur: 12, vel: 0.78 },  // G3
        { t: 392, div: 'pedal', midi: 48, dur: 12, vel: 1.0 },   // C3
        { t: 392, div: 'pedal', midi: 36, dur: 12, vel: 1.0 },   // C2
    ]
};

// ============================================================
// Buxtehude - Praeludium in D major, BuxWV 139
// FULL VERSION - Complete sectional praeludium
// ============================================================
// North German Baroque praeludium in 5 sections:
// 1. Toccata (free fantasia, pedal solos)
// 2. Fugue I (4-voice, angular subject)
// 3. Interlude (free virtuosic passage)
// 4. Fugue II (contrasting, triple meter 3/4)
// 5. Closing Toccata (brilliant pedal runs, final chord)
// Key: D major, base tempo 80 BPM
//
// MIDI: D3=50, E3=52, F#3=54, G3=55, A3=57, B3=59
//       C#4=61, D4=62, E4=64, F#4=66, G4=67, A4=69, B4=71
//       C#5=73, D5=74, E5=76, F#5=78, G5=79, A5=81
//       Pedal: D2=38, E2=40, F#2=42, G2=43, A2=45, B2=47
// ============================================================

const PIECE_BUXTEHUDE = {
    title: "Praeludium in D major (Full)",
    composer: "Dietrich Buxtehude",
    catalog: "BuxWV 139",
    key: "D major",
    tempo: 80,
    tempoChanges: [
        { t: 0, tempo: 80, label: "Toccata - Free" },
        { t: 80, tempo: 84, label: "Fugue I - Allegro moderato" },
        { t: 224, tempo: 76, label: "Interlude - Adagio" },
        { t: 280, tempo: 88, label: "Fugue II - Vivace (3/4)" },
        { t: 424, tempo: 76, label: "Closing Toccata - Maestoso" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-principal4', 'sw-flute4'],
        choir: ['ch-gedeckt8', 'ch-dulciana8', 'ch-rohrflute4'],
        pedal: ['pd-principal16', 'pd-subbass16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ============================================================
        // SECTION 1: TOCCATA - Free fantasia (bars 1-20)
        // Dramatic flourishes, pedal solos, brilliant manual work
        // 4/4 time, free tempo
        // ============================================================

        // --- Bar 1: Grand opening D major chord, then flourish ---
        { t: 0, div: 'great', midi: 74, dur: 2, vel: 0.92 },     // D5
        { t: 0, div: 'great', midi: 69, dur: 2, vel: 0.88 },     // A4
        { t: 0, div: 'great', midi: 66, dur: 2, vel: 0.88 },     // F#4
        { t: 0, div: 'swell', midi: 62, dur: 2, vel: 0.72 },     // D4
        { t: 0, div: 'pedal', midi: 50, dur: 2, vel: 0.85 },     // D3
        { t: 0, div: 'pedal', midi: 38, dur: 2, vel: 0.82 },     // D2
        // Flourish descending
        { t: 2, div: 'great', midi: 81, dur: 0.5, vel: 0.80 },   // A5
        { t: 2.5, div: 'great', midi: 79, dur: 0.5, vel: 0.78 }, // G5
        { t: 3, div: 'great', midi: 78, dur: 0.5, vel: 0.78 },   // F#5
        { t: 3.5, div: 'great', midi: 76, dur: 0.5, vel: 0.80 }, // E5

        // --- Bar 2: Continuing flourish, landing on D ---
        { t: 4, div: 'great', midi: 74, dur: 1, vel: 0.85 },     // D5
        { t: 5, div: 'great', midi: 73, dur: 0.5, vel: 0.78 },   // C#5
        { t: 5.5, div: 'great', midi: 74, dur: 0.5, vel: 0.80 }, // D5
        { t: 6, div: 'great', midi: 76, dur: 1, vel: 0.82 },     // E5
        { t: 7, div: 'great', midi: 78, dur: 1, vel: 0.85 },     // F#5
        { t: 4, div: 'pedal', midi: 50, dur: 4, vel: 0.82 },     // D3

        // --- Bar 3: Ascending run on great ---
        { t: 8, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },   // D5
        { t: 8.5, div: 'great', midi: 76, dur: 0.5, vel: 0.80 }, // E5
        { t: 9, div: 'great', midi: 78, dur: 0.5, vel: 0.82 },   // F#5
        { t: 9.5, div: 'great', midi: 79, dur: 0.5, vel: 0.85 }, // G5
        { t: 10, div: 'great', midi: 81, dur: 2, vel: 0.90 },    // A5 (peak)
        { t: 8, div: 'swell', midi: 66, dur: 4, vel: 0.65 },     // F#4
        { t: 8, div: 'swell', midi: 62, dur: 4, vel: 0.65 },     // D4
        { t: 8, div: 'pedal', midi: 50, dur: 4, vel: 0.80 },     // D3

        // --- Bar 4: Descending tirata ---
        { t: 12, div: 'great', midi: 81, dur: 0.5, vel: 0.85 },  // A5
        { t: 12.5, div: 'great', midi: 79, dur: 0.5, vel: 0.82 },// G5
        { t: 13, div: 'great', midi: 78, dur: 0.5, vel: 0.82 },  // F#5
        { t: 13.5, div: 'great', midi: 76, dur: 0.5, vel: 0.80 },// E5
        { t: 14, div: 'great', midi: 74, dur: 0.5, vel: 0.80 },  // D5
        { t: 14.5, div: 'great', midi: 73, dur: 0.5, vel: 0.78 },// C#5
        { t: 15, div: 'great', midi: 71, dur: 0.5, vel: 0.78 },  // B4
        { t: 15.5, div: 'great', midi: 69, dur: 0.5, vel: 0.80 },// A4
        { t: 12, div: 'pedal', midi: 45, dur: 4, vel: 0.80 },    // A2

        // --- Bar 5-6: PEDAL SOLO - Dramatic solo passage ---
        { t: 16, div: 'pedal', midi: 50, dur: 1, vel: 0.85 },    // D3
        { t: 17, div: 'pedal', midi: 52, dur: 1, vel: 0.82 },    // E3
        { t: 18, div: 'pedal', midi: 54, dur: 1, vel: 0.82 },    // F#3
        { t: 19, div: 'pedal', midi: 55, dur: 1, vel: 0.85 },    // G3
        { t: 20, div: 'pedal', midi: 54, dur: 1, vel: 0.82 },    // F#3
        { t: 21, div: 'pedal', midi: 52, dur: 1, vel: 0.80 },    // E3
        { t: 22, div: 'pedal', midi: 50, dur: 1, vel: 0.82 },    // D3
        { t: 23, div: 'pedal', midi: 45, dur: 1, vel: 0.85 },    // A2

        // --- Bar 7-8: Manual response, brilliant chords ---
        { t: 24, div: 'great', midi: 74, dur: 1, vel: 0.88 },    // D5
        { t: 24, div: 'great', midi: 66, dur: 1, vel: 0.85 },    // F#4
        { t: 24, div: 'great', midi: 69, dur: 1, vel: 0.85 },    // A4
        { t: 25, div: 'great', midi: 76, dur: 1, vel: 0.88 },    // E5
        { t: 25, div: 'great', midi: 67, dur: 1, vel: 0.85 },    // G4
        { t: 25, div: 'great', midi: 71, dur: 1, vel: 0.85 },    // B4
        { t: 26, div: 'great', midi: 78, dur: 2, vel: 0.90 },    // F#5
        { t: 26, div: 'great', midi: 69, dur: 2, vel: 0.88 },    // A4
        { t: 26, div: 'great', midi: 62, dur: 2, vel: 0.85 },    // D4
        { t: 24, div: 'pedal', midi: 50, dur: 4, vel: 0.82 },    // D3

        // Bar 8: More virtuosic figuration
        { t: 28, div: 'great', midi: 78, dur: 0.5, vel: 0.85 },  // F#5
        { t: 28.5, div: 'great', midi: 76, dur: 0.5, vel: 0.82 },// E5
        { t: 29, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },  // D5
        { t: 29.5, div: 'great', midi: 76, dur: 0.5, vel: 0.82 },// E5
        { t: 30, div: 'great', midi: 78, dur: 1, vel: 0.85 },    // F#5
        { t: 31, div: 'great', midi: 74, dur: 1, vel: 0.82 },    // D5
        { t: 28, div: 'swell', midi: 69, dur: 4, vel: 0.65 },    // A4
        { t: 28, div: 'pedal', midi: 45, dur: 4, vel: 0.80 },    // A2

        // --- Bar 9-10: Second pedal solo ---
        { t: 32, div: 'pedal', midi: 38, dur: 1, vel: 0.88 },    // D2
        { t: 33, div: 'pedal', midi: 40, dur: 1, vel: 0.85 },    // E2
        { t: 34, div: 'pedal', midi: 42, dur: 1, vel: 0.85 },    // F#2
        { t: 35, div: 'pedal', midi: 43, dur: 1, vel: 0.88 },    // G2
        { t: 36, div: 'pedal', midi: 45, dur: 1, vel: 0.85 },    // A2
        { t: 37, div: 'pedal', midi: 47, dur: 1, vel: 0.85 },    // B2
        { t: 38, div: 'pedal', midi: 45, dur: 1, vel: 0.85 },    // A2
        { t: 39, div: 'pedal', midi: 50, dur: 1, vel: 0.88 },    // D3

        // --- Bar 11-12: Alternating hands, broken chords ---
        { t: 40, div: 'great', midi: 66, dur: 0.5, vel: 0.82 },  // F#4
        { t: 40.5, div: 'great', midi: 69, dur: 0.5, vel: 0.80 },// A4
        { t: 41, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },  // D5
        { t: 41.5, div: 'great', midi: 78, dur: 0.5, vel: 0.85 },// F#5
        { t: 42, div: 'great', midi: 81, dur: 2, vel: 0.88 },    // A5
        { t: 40, div: 'swell', midi: 62, dur: 2, vel: 0.65 },    // D4
        { t: 42, div: 'swell', midi: 66, dur: 2, vel: 0.65 },    // F#4
        { t: 40, div: 'pedal', midi: 50, dur: 4, vel: 0.82 },    // D3

        // Bar 12
        { t: 44, div: 'great', midi: 79, dur: 0.5, vel: 0.85 },  // G5
        { t: 44.5, div: 'great', midi: 78, dur: 0.5, vel: 0.82 },// F#5
        { t: 45, div: 'great', midi: 76, dur: 0.5, vel: 0.82 },  // E5
        { t: 45.5, div: 'great', midi: 74, dur: 0.5, vel: 0.80 },// D5
        { t: 46, div: 'great', midi: 73, dur: 1, vel: 0.82 },    // C#5
        { t: 47, div: 'great', midi: 74, dur: 1, vel: 0.85 },    // D5
        { t: 44, div: 'swell', midi: 67, dur: 2, vel: 0.65 },    // G4
        { t: 46, div: 'swell', midi: 69, dur: 2, vel: 0.65 },    // A4
        { t: 44, div: 'pedal', midi: 43, dur: 2, vel: 0.80 },    // G2
        { t: 46, div: 'pedal', midi: 45, dur: 2, vel: 0.80 },    // A2

        // --- Bar 13-14: Building toward Toccata cadence ---
        { t: 48, div: 'great', midi: 76, dur: 1, vel: 0.85 },    // E5
        { t: 49, div: 'great', midi: 78, dur: 1, vel: 0.88 },    // F#5
        { t: 50, div: 'great', midi: 79, dur: 1, vel: 0.88 },    // G5
        { t: 51, div: 'great', midi: 81, dur: 1, vel: 0.90 },    // A5
        { t: 48, div: 'swell', midi: 64, dur: 2, vel: 0.68 },    // E4
        { t: 50, div: 'swell', midi: 67, dur: 2, vel: 0.68 },    // G4
        { t: 48, div: 'pedal', midi: 45, dur: 4, vel: 0.82 },    // A2

        // Bar 14
        { t: 52, div: 'great', midi: 78, dur: 2, vel: 0.88 },    // F#5
        { t: 54, div: 'great', midi: 74, dur: 2, vel: 0.85 },    // D5
        { t: 52, div: 'swell', midi: 66, dur: 2, vel: 0.68 },    // F#4
        { t: 54, div: 'swell', midi: 62, dur: 2, vel: 0.68 },    // D4
        { t: 52, div: 'pedal', midi: 50, dur: 4, vel: 0.82 },    // D3

        // --- Bar 15-16: Toccata close - ornamental cadence ---
        { t: 56, div: 'great', midi: 73, dur: 0.5, vel: 0.82 },  // C#5
        { t: 56.5, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },// D5
        { t: 57, div: 'great', midi: 76, dur: 0.5, vel: 0.85 },  // E5
        { t: 57.5, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },// D5
        { t: 58, div: 'great', midi: 73, dur: 0.5, vel: 0.80 },  // C#5
        { t: 58.5, div: 'great', midi: 71, dur: 0.5, vel: 0.78 },// B4
        { t: 59, div: 'great', midi: 73, dur: 1, vel: 0.85 },    // C#5 (leading tone)
        { t: 56, div: 'pedal', midi: 45, dur: 4, vel: 0.82 },    // A2

        // Bar 16: Resolution
        { t: 60, div: 'great', midi: 74, dur: 4, vel: 0.90 },    // D5 cadence
        { t: 60, div: 'great', midi: 69, dur: 4, vel: 0.85 },    // A4
        { t: 60, div: 'great', midi: 66, dur: 4, vel: 0.85 },    // F#4
        { t: 60, div: 'swell', midi: 62, dur: 4, vel: 0.70 },    // D4
        { t: 60, div: 'pedal', midi: 50, dur: 4, vel: 0.85 },    // D3
        { t: 60, div: 'pedal', midi: 38, dur: 4, vel: 0.82 },    // D2

        // --- Bar 17-20: Final toccata gestures ---
        // Bar 17: Rapid figuration
        { t: 64, div: 'great', midi: 62, dur: 0.5, vel: 0.78 },  // D4
        { t: 64.5, div: 'great', midi: 66, dur: 0.5, vel: 0.78 },// F#4
        { t: 65, div: 'great', midi: 69, dur: 0.5, vel: 0.80 },  // A4
        { t: 65.5, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },// D5
        { t: 66, div: 'great', midi: 76, dur: 1, vel: 0.85 },    // E5
        { t: 67, div: 'great', midi: 74, dur: 1, vel: 0.82 },    // D5
        { t: 64, div: 'pedal', midi: 50, dur: 4, vel: 0.80 },    // D3

        // Bar 18
        { t: 68, div: 'great', midi: 73, dur: 1, vel: 0.82 },    // C#5
        { t: 69, div: 'great', midi: 71, dur: 1, vel: 0.80 },    // B4
        { t: 70, div: 'great', midi: 69, dur: 1, vel: 0.80 },    // A4
        { t: 71, div: 'great', midi: 71, dur: 1, vel: 0.82 },    // B4
        { t: 68, div: 'swell', midi: 61, dur: 4, vel: 0.65 },    // C#4
        { t: 68, div: 'pedal', midi: 45, dur: 4, vel: 0.80 },    // A2

        // Bar 19-20: Cadence into Fugue I
        { t: 72, div: 'great', midi: 73, dur: 2, vel: 0.85 },    // C#5
        { t: 74, div: 'great', midi: 74, dur: 2, vel: 0.88 },    // D5
        { t: 72, div: 'swell', midi: 64, dur: 2, vel: 0.68 },    // E4
        { t: 74, div: 'swell', midi: 66, dur: 2, vel: 0.70 },    // F#4
        { t: 72, div: 'pedal', midi: 45, dur: 2, vel: 0.82 },    // A2
        { t: 74, div: 'pedal', midi: 50, dur: 2, vel: 0.85 },    // D3

        // Bar 20: Half cadence, preparing fugue
        { t: 76, div: 'great', midi: 74, dur: 4, vel: 0.85 },    // D5
        { t: 76, div: 'swell', midi: 66, dur: 4, vel: 0.68 },    // F#4
        { t: 76, div: 'swell', midi: 69, dur: 4, vel: 0.65 },    // A4
        { t: 76, div: 'pedal', midi: 50, dur: 4, vel: 0.82 },    // D3

        // ============================================================
        // SECTION 2: FUGUE I - 4-voice fugue (bars 21-56)
        // Angular subject: D-A-D-E-F#-G-F#-E-D-C#-D
        // Entries: Soprano→Alto→Tenor→Bass(pedal)
        // ============================================================

        // --- Subject entry 1: Soprano on Great ---
        // Bar 21: D-A-D-E
        { t: 80, div: 'great', midi: 74, dur: 2, vel: 0.72 },    // D5
        { t: 82, div: 'great', midi: 69, dur: 1, vel: 0.70 },    // A4
        { t: 83, div: 'great', midi: 74, dur: 1, vel: 0.72 },    // D5

        // Bar 22: E-F#-G-F#-E-D-C#-D
        { t: 84, div: 'great', midi: 76, dur: 1, vel: 0.72 },    // E5
        { t: 85, div: 'great', midi: 78, dur: 1, vel: 0.75 },    // F#5
        { t: 86, div: 'great', midi: 79, dur: 0.5, vel: 0.75 },  // G5
        { t: 86.5, div: 'great', midi: 78, dur: 0.5, vel: 0.72 },// F#5
        { t: 87, div: 'great', midi: 76, dur: 1, vel: 0.72 },    // E5

        // Bar 23: D-C#-D (end of subject)
        { t: 88, div: 'great', midi: 74, dur: 1, vel: 0.70 },    // D5
        { t: 89, div: 'great', midi: 73, dur: 0.5, vel: 0.68 },  // C#5
        { t: 89.5, div: 'great', midi: 74, dur: 1.5, vel: 0.72 },// D5

        // Countersubject in soprano continues
        { t: 91, div: 'great', midi: 76, dur: 1, vel: 0.68 },    // E5

        // --- Subject entry 2: Alto on Swell (answer in A) ---
        // Bar 23-25
        { t: 92, div: 'swell', midi: 69, dur: 2, vel: 0.68 },    // A4
        { t: 94, div: 'swell', midi: 64, dur: 1, vel: 0.65 },    // E4
        { t: 95, div: 'swell', midi: 69, dur: 1, vel: 0.68 },    // A4
        // Soprano countersubject
        { t: 92, div: 'great', midi: 78, dur: 1, vel: 0.65 },    // F#5
        { t: 93, div: 'great', midi: 76, dur: 1, vel: 0.65 },    // E5
        { t: 94, div: 'great', midi: 74, dur: 1, vel: 0.68 },    // D5
        { t: 95, div: 'great', midi: 76, dur: 1, vel: 0.65 },    // E5

        // Bar 25: Alto continues answer
        { t: 96, div: 'swell', midi: 71, dur: 1, vel: 0.68 },    // B4
        { t: 97, div: 'swell', midi: 73, dur: 1, vel: 0.70 },    // C#5
        { t: 98, div: 'swell', midi: 74, dur: 0.5, vel: 0.70 },  // D5
        { t: 98.5, div: 'swell', midi: 73, dur: 0.5, vel: 0.68 },// C#5
        { t: 99, div: 'swell', midi: 71, dur: 1, vel: 0.68 },    // B4
        // Soprano
        { t: 96, div: 'great', midi: 74, dur: 2, vel: 0.65 },    // D5
        { t: 98, div: 'great', midi: 78, dur: 2, vel: 0.68 },    // F#5

        // Bar 26: Alto end of answer
        { t: 100, div: 'swell', midi: 69, dur: 1, vel: 0.65 },   // A4
        { t: 101, div: 'swell', midi: 68, dur: 0.5, vel: 0.62 }, // G#4
        { t: 101.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.68 },// A4
        // Soprano free continuation
        { t: 100, div: 'great', midi: 76, dur: 1, vel: 0.65 },   // E5
        { t: 101, div: 'great', midi: 74, dur: 1, vel: 0.68 },   // D5
        { t: 102, div: 'great', midi: 73, dur: 1, vel: 0.65 },   // C#5
        { t: 103, div: 'great', midi: 74, dur: 1, vel: 0.68 },   // D5

        // --- Subject entry 3: Tenor on Choir ---
        // Bar 27-29
        { t: 104, div: 'choir', midi: 62, dur: 2, vel: 0.62 },   // D4
        { t: 106, div: 'choir', midi: 57, dur: 1, vel: 0.60 },   // A3
        { t: 107, div: 'choir', midi: 62, dur: 1, vel: 0.62 },   // D4
        // Soprano continues
        { t: 104, div: 'great', midi: 76, dur: 2, vel: 0.65 },   // E5
        { t: 106, div: 'great', midi: 78, dur: 2, vel: 0.68 },   // F#5
        // Alto continues
        { t: 104, div: 'swell', midi: 71, dur: 2, vel: 0.62 },   // B4
        { t: 106, div: 'swell', midi: 69, dur: 2, vel: 0.62 },   // A4

        // Bar 28: Tenor continues
        { t: 108, div: 'choir', midi: 64, dur: 1, vel: 0.62 },   // E4
        { t: 109, div: 'choir', midi: 66, dur: 1, vel: 0.65 },   // F#4
        { t: 110, div: 'choir', midi: 67, dur: 0.5, vel: 0.65 }, // G4
        { t: 110.5, div: 'choir', midi: 66, dur: 0.5, vel: 0.62 },// F#4
        { t: 111, div: 'choir', midi: 64, dur: 1, vel: 0.62 },   // E4
        // Upper voices
        { t: 108, div: 'great', midi: 74, dur: 2, vel: 0.65 },   // D5
        { t: 110, div: 'great', midi: 76, dur: 2, vel: 0.65 },   // E5
        { t: 108, div: 'swell', midi: 69, dur: 2, vel: 0.62 },   // A4
        { t: 110, div: 'swell', midi: 71, dur: 2, vel: 0.62 },   // B4

        // Bar 29: Tenor end
        { t: 112, div: 'choir', midi: 62, dur: 1, vel: 0.60 },   // D4
        { t: 113, div: 'choir', midi: 61, dur: 0.5, vel: 0.58 }, // C#4
        { t: 113.5, div: 'choir', midi: 62, dur: 1.5, vel: 0.62 },// D4
        // Upper voices
        { t: 112, div: 'great', midi: 78, dur: 2, vel: 0.68 },   // F#5
        { t: 114, div: 'great', midi: 74, dur: 2, vel: 0.65 },   // D5
        { t: 112, div: 'swell', midi: 69, dur: 2, vel: 0.62 },   // A4
        { t: 114, div: 'swell', midi: 66, dur: 2, vel: 0.62 },   // F#4
        { t: 115, div: 'choir', midi: 64, dur: 1, vel: 0.60 },   // E4

        // --- Subject entry 4: Bass on Pedal ---
        // Bar 30-32
        { t: 116, div: 'pedal', midi: 50, dur: 2, vel: 0.75 },   // D3
        { t: 118, div: 'pedal', midi: 45, dur: 1, vel: 0.72 },   // A2
        { t: 119, div: 'pedal', midi: 50, dur: 1, vel: 0.75 },   // D3
        // All upper voices
        { t: 116, div: 'great', midi: 76, dur: 2, vel: 0.68 },   // E5
        { t: 118, div: 'great', midi: 74, dur: 2, vel: 0.65 },   // D5
        { t: 116, div: 'swell', midi: 69, dur: 2, vel: 0.62 },   // A4
        { t: 118, div: 'swell', midi: 71, dur: 2, vel: 0.65 },   // B4
        { t: 116, div: 'choir', midi: 66, dur: 2, vel: 0.58 },   // F#4
        { t: 118, div: 'choir', midi: 62, dur: 2, vel: 0.58 },   // D4

        // Bar 31: Pedal continues subject
        { t: 120, div: 'pedal', midi: 52, dur: 1, vel: 0.75 },   // E3
        { t: 121, div: 'pedal', midi: 54, dur: 1, vel: 0.78 },   // F#3
        { t: 122, div: 'pedal', midi: 55, dur: 0.5, vel: 0.78 }, // G3
        { t: 122.5, div: 'pedal', midi: 54, dur: 0.5, vel: 0.75 },// F#3
        { t: 123, div: 'pedal', midi: 52, dur: 1, vel: 0.72 },   // E3
        // Upper voices
        { t: 120, div: 'great', midi: 73, dur: 2, vel: 0.65 },   // C#5
        { t: 122, div: 'great', midi: 74, dur: 2, vel: 0.68 },   // D5
        { t: 120, div: 'swell', midi: 69, dur: 4, vel: 0.62 },   // A4
        { t: 120, div: 'choir', midi: 64, dur: 2, vel: 0.58 },   // E4
        { t: 122, div: 'choir', midi: 66, dur: 2, vel: 0.58 },   // F#4

        // Bar 32: Pedal end of subject
        { t: 124, div: 'pedal', midi: 50, dur: 1, vel: 0.72 },   // D3
        { t: 125, div: 'pedal', midi: 49, dur: 0.5, vel: 0.70 }, // C#3
        { t: 125.5, div: 'pedal', midi: 50, dur: 2.5, vel: 0.75 },// D3
        // Upper voices cadence
        { t: 124, div: 'great', midi: 74, dur: 4, vel: 0.70 },   // D5
        { t: 124, div: 'swell', midi: 66, dur: 4, vel: 0.65 },   // F#4
        { t: 124, div: 'choir', midi: 62, dur: 4, vel: 0.60 },   // D4

        // --- Bars 33-44: Fugal development, episodes ---
        // Episode 1: Sequence based on countersubject
        // Bar 33
        { t: 128, div: 'great', midi: 74, dur: 1, vel: 0.70 },   // D5
        { t: 129, div: 'great', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 130, div: 'great', midi: 78, dur: 1, vel: 0.72 },   // F#5
        { t: 131, div: 'great', midi: 76, dur: 1, vel: 0.70 },   // E5
        { t: 128, div: 'swell', midi: 69, dur: 2, vel: 0.62 },   // A4
        { t: 130, div: 'swell', midi: 66, dur: 2, vel: 0.62 },   // F#4
        { t: 128, div: 'pedal', midi: 50, dur: 4, vel: 0.72 },   // D3

        // Bar 34
        { t: 132, div: 'great', midi: 74, dur: 1, vel: 0.72 },   // D5
        { t: 133, div: 'great', midi: 73, dur: 1, vel: 0.70 },   // C#5
        { t: 134, div: 'great', midi: 71, dur: 1, vel: 0.68 },   // B4
        { t: 135, div: 'great', midi: 73, dur: 1, vel: 0.70 },   // C#5
        { t: 132, div: 'swell', midi: 66, dur: 2, vel: 0.62 },   // F#4
        { t: 134, div: 'swell', midi: 64, dur: 2, vel: 0.62 },   // E4
        { t: 132, div: 'choir', midi: 57, dur: 4, vel: 0.55 },   // A3
        { t: 132, div: 'pedal', midi: 45, dur: 4, vel: 0.72 },   // A2

        // Bar 35: Stretto-like entry
        { t: 136, div: 'great', midi: 74, dur: 2, vel: 0.75 },   // D5 (subject head)
        { t: 138, div: 'great', midi: 69, dur: 1, vel: 0.72 },   // A4
        { t: 139, div: 'great', midi: 74, dur: 1, vel: 0.75 },   // D5
        { t: 136, div: 'swell', midi: 62, dur: 2, vel: 0.65 },   // D4 (subject at octave below)
        { t: 138, div: 'swell', midi: 57, dur: 1, vel: 0.62 },   // A3
        { t: 139, div: 'swell', midi: 62, dur: 1, vel: 0.65 },   // D4
        { t: 136, div: 'pedal', midi: 50, dur: 4, vel: 0.72 },   // D3

        // Bar 36
        { t: 140, div: 'great', midi: 76, dur: 1, vel: 0.75 },   // E5
        { t: 141, div: 'great', midi: 78, dur: 1, vel: 0.78 },   // F#5
        { t: 142, div: 'great', midi: 79, dur: 1, vel: 0.78 },   // G5
        { t: 143, div: 'great', midi: 78, dur: 1, vel: 0.75 },   // F#5
        { t: 140, div: 'swell', midi: 64, dur: 1, vel: 0.65 },   // E4
        { t: 141, div: 'swell', midi: 66, dur: 1, vel: 0.68 },   // F#4
        { t: 142, div: 'swell', midi: 67, dur: 1, vel: 0.68 },   // G4
        { t: 143, div: 'swell', midi: 66, dur: 1, vel: 0.65 },   // F#4
        { t: 140, div: 'pedal', midi: 45, dur: 4, vel: 0.72 },   // A2

        // Bar 37-38: Modulating sequence through B minor
        { t: 144, div: 'great', midi: 78, dur: 2, vel: 0.75 },   // F#5
        { t: 146, div: 'great', midi: 74, dur: 2, vel: 0.72 },   // D5
        { t: 144, div: 'swell', midi: 66, dur: 2, vel: 0.65 },   // F#4
        { t: 146, div: 'swell', midi: 62, dur: 2, vel: 0.62 },   // D4
        { t: 144, div: 'choir', midi: 59, dur: 4, vel: 0.55 },   // B3
        { t: 144, div: 'pedal', midi: 47, dur: 4, vel: 0.72 },   // B2

        // Bar 38
        { t: 148, div: 'great', midi: 71, dur: 1, vel: 0.72 },   // B4
        { t: 149, div: 'great', midi: 73, dur: 1, vel: 0.75 },   // C#5
        { t: 150, div: 'great', midi: 74, dur: 1, vel: 0.75 },   // D5
        { t: 151, div: 'great', midi: 73, dur: 1, vel: 0.72 },   // C#5
        { t: 148, div: 'swell', midi: 59, dur: 2, vel: 0.62 },   // B3
        { t: 150, div: 'swell', midi: 62, dur: 2, vel: 0.65 },   // D4
        { t: 148, div: 'pedal', midi: 42, dur: 2, vel: 0.72 },   // F#2
        { t: 150, div: 'pedal', midi: 47, dur: 2, vel: 0.72 },   // B2

        // Bar 39-40: Through G major
        { t: 152, div: 'great', midi: 71, dur: 2, vel: 0.72 },   // B4
        { t: 154, div: 'great', midi: 67, dur: 1, vel: 0.70 },   // G4
        { t: 155, div: 'great', midi: 71, dur: 1, vel: 0.72 },   // B4
        { t: 152, div: 'swell', midi: 67, dur: 2, vel: 0.62 },   // G4
        { t: 154, div: 'swell', midi: 59, dur: 2, vel: 0.62 },   // B3
        { t: 152, div: 'pedal', midi: 43, dur: 4, vel: 0.72 },   // G2

        // Bar 40
        { t: 156, div: 'great', midi: 72, dur: 1, vel: 0.72 },   // C5
        { t: 157, div: 'great', midi: 74, dur: 1, vel: 0.75 },   // D5
        { t: 158, div: 'great', midi: 76, dur: 1, vel: 0.75 },   // E5
        { t: 159, div: 'great', midi: 74, dur: 1, vel: 0.72 },   // D5
        { t: 156, div: 'swell', midi: 60, dur: 2, vel: 0.65 },   // C4
        { t: 158, div: 'swell', midi: 64, dur: 2, vel: 0.65 },   // E4
        { t: 156, div: 'choir', midi: 55, dur: 4, vel: 0.55 },   // G3
        { t: 156, div: 'pedal', midi: 48, dur: 4, vel: 0.72 },   // C3

        // Bar 41-44: Return to D major, final entries
        // Bar 41: Subject in alto (swell)
        { t: 160, div: 'swell', midi: 69, dur: 2, vel: 0.68 },   // A4
        { t: 162, div: 'swell', midi: 64, dur: 1, vel: 0.65 },   // E4
        { t: 163, div: 'swell', midi: 69, dur: 1, vel: 0.68 },   // A4
        { t: 160, div: 'great', midi: 73, dur: 2, vel: 0.70 },   // C#5
        { t: 162, div: 'great', midi: 74, dur: 2, vel: 0.72 },   // D5
        { t: 160, div: 'pedal', midi: 45, dur: 4, vel: 0.72 },   // A2

        // Bar 42
        { t: 164, div: 'swell', midi: 71, dur: 1, vel: 0.68 },   // B4
        { t: 165, div: 'swell', midi: 73, dur: 1, vel: 0.70 },   // C#5
        { t: 166, div: 'swell', midi: 74, dur: 0.5, vel: 0.70 }, // D5
        { t: 166.5, div: 'swell', midi: 73, dur: 0.5, vel: 0.68 },// C#5
        { t: 167, div: 'swell', midi: 71, dur: 1, vel: 0.68 },   // B4
        { t: 164, div: 'great', midi: 76, dur: 2, vel: 0.72 },   // E5
        { t: 166, div: 'great', midi: 78, dur: 2, vel: 0.75 },   // F#5
        { t: 164, div: 'choir', midi: 62, dur: 4, vel: 0.58 },   // D4
        { t: 164, div: 'pedal', midi: 50, dur: 4, vel: 0.75 },   // D3

        // Bar 43: Final subject in pedal
        { t: 168, div: 'pedal', midi: 50, dur: 2, vel: 0.78 },   // D3
        { t: 170, div: 'pedal', midi: 45, dur: 1, vel: 0.75 },   // A2
        { t: 171, div: 'pedal', midi: 50, dur: 1, vel: 0.78 },   // D3
        { t: 168, div: 'great', midi: 74, dur: 2, vel: 0.72 },   // D5
        { t: 170, div: 'great', midi: 76, dur: 2, vel: 0.72 },   // E5
        { t: 168, div: 'swell', midi: 69, dur: 4, vel: 0.65 },   // A4
        { t: 168, div: 'choir', midi: 66, dur: 4, vel: 0.58 },   // F#4

        // Bar 44: Pedal subject continues
        { t: 172, div: 'pedal', midi: 52, dur: 1, vel: 0.78 },   // E3
        { t: 173, div: 'pedal', midi: 54, dur: 1, vel: 0.80 },   // F#3
        { t: 174, div: 'pedal', midi: 55, dur: 0.5, vel: 0.80 }, // G3
        { t: 174.5, div: 'pedal', midi: 54, dur: 0.5, vel: 0.78 },// F#3
        { t: 175, div: 'pedal', midi: 52, dur: 1, vel: 0.75 },   // E3
        { t: 172, div: 'great', midi: 78, dur: 1, vel: 0.75 },   // F#5
        { t: 173, div: 'great', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 174, div: 'great', midi: 74, dur: 2, vel: 0.75 },   // D5
        { t: 172, div: 'swell', midi: 66, dur: 2, vel: 0.65 },   // F#4
        { t: 174, div: 'swell', midi: 69, dur: 2, vel: 0.65 },   // A4

        // Bars 45-56: Extended fugal episodes and closing
        // Bar 45-46
        { t: 176, div: 'great', midi: 74, dur: 1, vel: 0.72 },   // D5
        { t: 177, div: 'great', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 178, div: 'great', midi: 78, dur: 1, vel: 0.75 },   // F#5
        { t: 179, div: 'great', midi: 79, dur: 1, vel: 0.78 },   // G5
        { t: 176, div: 'swell', midi: 66, dur: 2, vel: 0.65 },   // F#4
        { t: 178, div: 'swell', midi: 69, dur: 2, vel: 0.65 },   // A4
        { t: 176, div: 'pedal', midi: 50, dur: 2, vel: 0.72 },   // D3
        { t: 178, div: 'pedal', midi: 45, dur: 2, vel: 0.72 },   // A2

        // Bar 46
        { t: 180, div: 'great', midi: 78, dur: 1, vel: 0.75 },   // F#5
        { t: 181, div: 'great', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 182, div: 'great', midi: 74, dur: 1, vel: 0.72 },   // D5
        { t: 183, div: 'great', midi: 73, dur: 1, vel: 0.70 },   // C#5
        { t: 180, div: 'swell', midi: 69, dur: 2, vel: 0.65 },   // A4
        { t: 182, div: 'swell', midi: 66, dur: 2, vel: 0.62 },   // F#4
        { t: 180, div: 'pedal', midi: 50, dur: 4, vel: 0.72 },   // D3

        // Bar 47-48: Episode in B minor
        { t: 184, div: 'great', midi: 71, dur: 1, vel: 0.72 },   // B4
        { t: 185, div: 'great', midi: 73, dur: 1, vel: 0.72 },   // C#5
        { t: 186, div: 'great', midi: 74, dur: 1, vel: 0.75 },   // D5
        { t: 187, div: 'great', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 184, div: 'swell', midi: 59, dur: 2, vel: 0.62 },   // B3
        { t: 186, div: 'swell', midi: 62, dur: 2, vel: 0.65 },   // D4
        { t: 184, div: 'choir', midi: 54, dur: 4, vel: 0.55 },   // F#3
        { t: 184, div: 'pedal', midi: 47, dur: 4, vel: 0.72 },   // B2

        // Bar 48
        { t: 188, div: 'great', midi: 74, dur: 1, vel: 0.75 },   // D5
        { t: 189, div: 'great', midi: 73, dur: 1, vel: 0.72 },   // C#5
        { t: 190, div: 'great', midi: 71, dur: 1, vel: 0.72 },   // B4
        { t: 191, div: 'great', midi: 69, dur: 1, vel: 0.70 },   // A4
        { t: 188, div: 'swell', midi: 66, dur: 2, vel: 0.62 },   // F#4
        { t: 190, div: 'swell', midi: 62, dur: 2, vel: 0.62 },   // D4
        { t: 188, div: 'pedal', midi: 42, dur: 2, vel: 0.72 },   // F#2
        { t: 190, div: 'pedal', midi: 47, dur: 2, vel: 0.72 },   // B2

        // Bars 49-52: Return to D, subject fragments
        { t: 192, div: 'great', midi: 74, dur: 2, vel: 0.75 },   // D5
        { t: 194, div: 'great', midi: 69, dur: 1, vel: 0.72 },   // A4
        { t: 195, div: 'great', midi: 74, dur: 1, vel: 0.75 },   // D5
        { t: 192, div: 'swell', midi: 66, dur: 4, vel: 0.65 },   // F#4
        { t: 192, div: 'pedal', midi: 50, dur: 4, vel: 0.75 },   // D3

        { t: 196, div: 'great', midi: 76, dur: 1, vel: 0.75 },   // E5
        { t: 197, div: 'great', midi: 78, dur: 1, vel: 0.78 },   // F#5
        { t: 198, div: 'great', midi: 79, dur: 0.5, vel: 0.78 }, // G5
        { t: 198.5, div: 'great', midi: 78, dur: 0.5, vel: 0.75 },// F#5
        { t: 199, div: 'great', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 196, div: 'swell', midi: 69, dur: 2, vel: 0.65 },   // A4
        { t: 198, div: 'swell', midi: 67, dur: 2, vel: 0.65 },   // G4
        { t: 196, div: 'pedal', midi: 45, dur: 4, vel: 0.72 },   // A2

        // Bars 51-54: Building to Fugue I close
        { t: 200, div: 'great', midi: 74, dur: 2, vel: 0.78 },   // D5
        { t: 202, div: 'great', midi: 78, dur: 2, vel: 0.78 },   // F#5
        { t: 200, div: 'swell', midi: 62, dur: 2, vel: 0.68 },   // D4
        { t: 202, div: 'swell', midi: 66, dur: 2, vel: 0.68 },   // F#4
        { t: 200, div: 'choir', midi: 57, dur: 4, vel: 0.58 },   // A3
        { t: 200, div: 'pedal', midi: 50, dur: 4, vel: 0.75 },   // D3

        // Bar 52
        { t: 204, div: 'great', midi: 76, dur: 1, vel: 0.78 },   // E5
        { t: 205, div: 'great', midi: 74, dur: 1, vel: 0.75 },   // D5
        { t: 206, div: 'great', midi: 73, dur: 1, vel: 0.72 },   // C#5
        { t: 207, div: 'great', midi: 74, dur: 1, vel: 0.78 },   // D5
        { t: 204, div: 'swell', midi: 69, dur: 2, vel: 0.65 },   // A4
        { t: 206, div: 'swell', midi: 66, dur: 2, vel: 0.65 },   // F#4
        { t: 204, div: 'pedal', midi: 45, dur: 2, vel: 0.75 },   // A2
        { t: 206, div: 'pedal', midi: 50, dur: 2, vel: 0.75 },   // D3

        // Bar 53-54: Final measures of Fugue I
        { t: 208, div: 'great', midi: 76, dur: 2, vel: 0.80 },   // E5
        { t: 210, div: 'great', midi: 78, dur: 2, vel: 0.82 },   // F#5
        { t: 208, div: 'swell', midi: 64, dur: 2, vel: 0.68 },   // E4
        { t: 210, div: 'swell', midi: 66, dur: 2, vel: 0.68 },   // F#4
        { t: 208, div: 'choir', midi: 57, dur: 4, vel: 0.60 },   // A3
        { t: 208, div: 'pedal', midi: 45, dur: 4, vel: 0.78 },   // A2

        // Bar 54: Cadence
        { t: 212, div: 'great', midi: 74, dur: 4, vel: 0.85 },   // D5
        { t: 212, div: 'great', midi: 69, dur: 4, vel: 0.82 },   // A4
        { t: 212, div: 'swell', midi: 66, dur: 4, vel: 0.70 },   // F#4
        { t: 212, div: 'swell', midi: 62, dur: 4, vel: 0.68 },   // D4
        { t: 212, div: 'choir', midi: 57, dur: 4, vel: 0.60 },   // A3
        { t: 212, div: 'pedal', midi: 50, dur: 4, vel: 0.80 },   // D3
        { t: 212, div: 'pedal', midi: 38, dur: 4, vel: 0.78 },   // D2

        // Bars 55-56: Fugue I concluding
        { t: 216, div: 'great', midi: 74, dur: 4, vel: 0.82 },   // D5
        { t: 216, div: 'swell', midi: 66, dur: 4, vel: 0.68 },   // F#4
        { t: 216, div: 'pedal', midi: 50, dur: 4, vel: 0.78 },   // D3

        { t: 220, div: 'great', midi: 74, dur: 4, vel: 0.78 },   // D5 (fading)
        { t: 220, div: 'swell', midi: 69, dur: 4, vel: 0.65 },   // A4
        { t: 220, div: 'pedal', midi: 50, dur: 4, vel: 0.75 },   // D3

        // ============================================================
        // SECTION 3: INTERLUDE - Free passage (bars 57-70)
        // Adagio, virtuosic manual work, harmonic exploration
        // ============================================================

        // Bar 57: Dramatic chord, then free passage
        { t: 224, div: 'great', midi: 74, dur: 2, vel: 0.88 },   // D5
        { t: 224, div: 'great', midi: 69, dur: 2, vel: 0.85 },   // A4
        { t: 224, div: 'swell', midi: 66, dur: 2, vel: 0.72 },   // F#4
        { t: 224, div: 'pedal', midi: 50, dur: 2, vel: 0.82 },   // D3
        // Rapid scale
        { t: 226, div: 'great', midi: 76, dur: 0.5, vel: 0.80 }, // E5
        { t: 226.5, div: 'great', midi: 78, dur: 0.5, vel: 0.82 },// F#5
        { t: 227, div: 'great', midi: 79, dur: 0.5, vel: 0.85 }, // G5
        { t: 227.5, div: 'great', midi: 81, dur: 0.5, vel: 0.88 },// A5

        // Bar 58: Descending arpeggio
        { t: 228, div: 'great', midi: 81, dur: 0.5, vel: 0.85 }, // A5
        { t: 228.5, div: 'great', midi: 78, dur: 0.5, vel: 0.82 },// F#5
        { t: 229, div: 'great', midi: 74, dur: 0.5, vel: 0.80 }, // D5
        { t: 229.5, div: 'great', midi: 69, dur: 0.5, vel: 0.78 },// A4
        { t: 230, div: 'great', midi: 66, dur: 2, vel: 0.80 },   // F#4
        { t: 228, div: 'pedal', midi: 45, dur: 4, vel: 0.78 },   // A2

        // Bar 59-60: Chromatic passage
        { t: 232, div: 'great', midi: 67, dur: 1, vel: 0.78 },   // G4
        { t: 233, div: 'great', midi: 68, dur: 1, vel: 0.78 },   // G#4
        { t: 234, div: 'great', midi: 69, dur: 1, vel: 0.80 },   // A4
        { t: 235, div: 'great', midi: 70, dur: 1, vel: 0.80 },   // Bb4
        { t: 232, div: 'swell', midi: 55, dur: 4, vel: 0.65 },   // G3
        { t: 232, div: 'pedal', midi: 43, dur: 4, vel: 0.78 },   // G2

        // Bar 60
        { t: 236, div: 'great', midi: 69, dur: 1, vel: 0.80 },   // A4
        { t: 237, div: 'great', midi: 71, dur: 1, vel: 0.82 },   // B4
        { t: 238, div: 'great', midi: 73, dur: 1, vel: 0.85 },   // C#5
        { t: 239, div: 'great', midi: 74, dur: 1, vel: 0.88 },   // D5
        { t: 236, div: 'swell', midi: 57, dur: 4, vel: 0.65 },   // A3
        { t: 236, div: 'pedal', midi: 45, dur: 4, vel: 0.78 },   // A2

        // Bar 61-62: Arpeggiated passage
        { t: 240, div: 'great', midi: 74, dur: 0.5, vel: 0.82 }, // D5
        { t: 240.5, div: 'great', midi: 78, dur: 0.5, vel: 0.82 },// F#5
        { t: 241, div: 'great', midi: 81, dur: 1, vel: 0.85 },   // A5
        { t: 242, div: 'great', midi: 79, dur: 1, vel: 0.82 },   // G5
        { t: 243, div: 'great', midi: 78, dur: 1, vel: 0.82 },   // F#5
        { t: 240, div: 'swell', midi: 62, dur: 4, vel: 0.68 },   // D4
        { t: 240, div: 'pedal', midi: 50, dur: 4, vel: 0.80 },   // D3

        // Bar 62
        { t: 244, div: 'great', midi: 76, dur: 1, vel: 0.80 },   // E5
        { t: 245, div: 'great', midi: 74, dur: 1, vel: 0.78 },   // D5
        { t: 246, div: 'great', midi: 73, dur: 1, vel: 0.80 },   // C#5
        { t: 247, div: 'great', midi: 71, dur: 1, vel: 0.78 },   // B4
        { t: 244, div: 'swell', midi: 64, dur: 2, vel: 0.65 },   // E4
        { t: 246, div: 'swell', midi: 59, dur: 2, vel: 0.65 },   // B3
        { t: 244, div: 'pedal', midi: 40, dur: 4, vel: 0.78 },   // E2

        // Bar 63-64: Harmonic exploration through A major
        { t: 248, div: 'great', midi: 69, dur: 2, vel: 0.82 },   // A4
        { t: 250, div: 'great', midi: 73, dur: 2, vel: 0.85 },   // C#5
        { t: 248, div: 'swell', midi: 57, dur: 2, vel: 0.68 },   // A3
        { t: 250, div: 'swell', midi: 61, dur: 2, vel: 0.68 },   // C#4
        { t: 248, div: 'pedal', midi: 45, dur: 4, vel: 0.80 },   // A2

        // Bar 64
        { t: 252, div: 'great', midi: 76, dur: 1, vel: 0.85 },   // E5
        { t: 253, div: 'great', midi: 74, dur: 1, vel: 0.82 },   // D5
        { t: 254, div: 'great', midi: 73, dur: 0.5, vel: 0.80 }, // C#5
        { t: 254.5, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },// D5
        { t: 255, div: 'great', midi: 76, dur: 1, vel: 0.85 },   // E5
        { t: 252, div: 'swell', midi: 64, dur: 4, vel: 0.68 },   // E4
        { t: 252, div: 'pedal', midi: 45, dur: 2, vel: 0.78 },   // A2
        { t: 254, div: 'pedal', midi: 50, dur: 2, vel: 0.80 },   // D3

        // Bar 65-66: Trill-like figuration
        { t: 256, div: 'great', midi: 78, dur: 0.5, vel: 0.82 }, // F#5
        { t: 256.5, div: 'great', midi: 79, dur: 0.5, vel: 0.80 },// G5
        { t: 257, div: 'great', midi: 78, dur: 0.5, vel: 0.82 }, // F#5
        { t: 257.5, div: 'great', midi: 76, dur: 0.5, vel: 0.80 },// E5
        { t: 258, div: 'great', midi: 74, dur: 2, vel: 0.85 },   // D5
        { t: 256, div: 'swell', midi: 66, dur: 4, vel: 0.68 },   // F#4
        { t: 256, div: 'pedal', midi: 50, dur: 4, vel: 0.80 },   // D3

        // Bar 66
        { t: 260, div: 'great', midi: 73, dur: 0.5, vel: 0.80 }, // C#5
        { t: 260.5, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },// D5
        { t: 261, div: 'great', midi: 73, dur: 0.5, vel: 0.80 }, // C#5
        { t: 261.5, div: 'great', midi: 71, dur: 0.5, vel: 0.78 },// B4
        { t: 262, div: 'great', midi: 69, dur: 2, vel: 0.82 },   // A4
        { t: 260, div: 'swell', midi: 61, dur: 4, vel: 0.65 },   // C#4
        { t: 260, div: 'pedal', midi: 45, dur: 4, vel: 0.78 },   // A2

        // Bar 67-70: Interlude cadence, preparing Fugue II
        { t: 264, div: 'great', midi: 71, dur: 2, vel: 0.82 },   // B4
        { t: 266, div: 'great', midi: 73, dur: 2, vel: 0.85 },   // C#5
        { t: 264, div: 'swell', midi: 59, dur: 2, vel: 0.68 },   // B3
        { t: 266, div: 'swell', midi: 64, dur: 2, vel: 0.68 },   // E4
        { t: 264, div: 'pedal', midi: 47, dur: 2, vel: 0.78 },   // B2
        { t: 266, div: 'pedal', midi: 45, dur: 2, vel: 0.80 },   // A2

        // Bar 68
        { t: 268, div: 'great', midi: 74, dur: 4, vel: 0.88 },   // D5
        { t: 268, div: 'great', midi: 69, dur: 4, vel: 0.85 },   // A4
        { t: 268, div: 'swell', midi: 66, dur: 4, vel: 0.72 },   // F#4
        { t: 268, div: 'pedal', midi: 50, dur: 4, vel: 0.82 },   // D3

        // Bar 69-70: Settling
        { t: 272, div: 'great', midi: 74, dur: 4, vel: 0.82 },   // D5
        { t: 272, div: 'swell', midi: 66, dur: 4, vel: 0.68 },   // F#4
        { t: 272, div: 'swell', midi: 69, dur: 4, vel: 0.65 },   // A4
        { t: 272, div: 'pedal', midi: 50, dur: 4, vel: 0.78 },   // D3

        { t: 276, div: 'great', midi: 74, dur: 4, vel: 0.78 },   // D5 (settling)
        { t: 276, div: 'swell', midi: 66, dur: 4, vel: 0.65 },   // F#4
        { t: 276, div: 'pedal', midi: 50, dur: 4, vel: 0.75 },   // D3

        // ============================================================
        // SECTION 4: FUGUE II - Triple meter (bars 71-106)
        // 3/4 time, 3 beats per bar, livelier character
        // Contrasting subject: D-E-F#-A-G-F#-E-D
        // ============================================================

        // --- Subject entry 1: Soprano on Great ---
        // Bar 71: D-E-F#
        { t: 280, div: 'great', midi: 74, dur: 1, vel: 0.72 },   // D5
        { t: 281, div: 'great', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 282, div: 'great', midi: 78, dur: 1, vel: 0.75 },   // F#5

        // Bar 72: A-G-F#
        { t: 283, div: 'great', midi: 81, dur: 1, vel: 0.78 },   // A5
        { t: 284, div: 'great', midi: 79, dur: 1, vel: 0.75 },   // G5
        { t: 285, div: 'great', midi: 78, dur: 1, vel: 0.72 },   // F#5

        // Bar 73: E-D (end of subject)
        { t: 286, div: 'great', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 287, div: 'great', midi: 74, dur: 2, vel: 0.75 },   // D5

        // --- Subject entry 2: Alto on Swell (answer in A) ---
        // Bar 74
        { t: 289, div: 'swell', midi: 69, dur: 1, vel: 0.68 },   // A4
        { t: 290, div: 'swell', midi: 71, dur: 1, vel: 0.68 },   // B4
        { t: 291, div: 'swell', midi: 73, dur: 1, vel: 0.70 },   // C#5
        // Soprano countersubject
        { t: 289, div: 'great', midi: 76, dur: 1, vel: 0.65 },   // E5
        { t: 290, div: 'great', midi: 78, dur: 1, vel: 0.68 },   // F#5
        { t: 291, div: 'great', midi: 74, dur: 1, vel: 0.65 },   // D5

        // Bar 75
        { t: 292, div: 'swell', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 293, div: 'swell', midi: 74, dur: 1, vel: 0.70 },   // D5
        { t: 294, div: 'swell', midi: 73, dur: 1, vel: 0.68 },   // C#5
        { t: 292, div: 'great', midi: 73, dur: 1, vel: 0.65 },   // C#5
        { t: 293, div: 'great', midi: 74, dur: 1, vel: 0.68 },   // D5
        { t: 294, div: 'great', midi: 76, dur: 1, vel: 0.65 },   // E5

        // Bar 76
        { t: 295, div: 'swell', midi: 71, dur: 1, vel: 0.68 },   // B4
        { t: 296, div: 'swell', midi: 69, dur: 2, vel: 0.70 },   // A4
        { t: 295, div: 'great', midi: 78, dur: 1, vel: 0.68 },   // F#5
        { t: 296, div: 'great', midi: 74, dur: 2, vel: 0.70 },   // D5

        // --- Subject entry 3: Tenor on Choir ---
        // Bar 77
        { t: 298, div: 'choir', midi: 62, dur: 1, vel: 0.60 },   // D4
        { t: 299, div: 'choir', midi: 64, dur: 1, vel: 0.60 },   // E4
        { t: 300, div: 'choir', midi: 66, dur: 1, vel: 0.62 },   // F#4
        { t: 298, div: 'great', midi: 76, dur: 1, vel: 0.65 },   // E5
        { t: 299, div: 'great', midi: 74, dur: 1, vel: 0.65 },   // D5
        { t: 300, div: 'great', midi: 73, dur: 1, vel: 0.62 },   // C#5
        { t: 298, div: 'swell', midi: 69, dur: 3, vel: 0.62 },   // A4

        // Bar 78
        { t: 301, div: 'choir', midi: 69, dur: 1, vel: 0.65 },   // A4
        { t: 302, div: 'choir', midi: 67, dur: 1, vel: 0.62 },   // G4
        { t: 303, div: 'choir', midi: 66, dur: 1, vel: 0.60 },   // F#4
        { t: 301, div: 'great', midi: 74, dur: 3, vel: 0.65 },   // D5
        { t: 301, div: 'swell', midi: 66, dur: 1, vel: 0.62 },   // F#4
        { t: 302, div: 'swell', midi: 69, dur: 1, vel: 0.62 },   // A4
        { t: 303, div: 'swell', midi: 71, dur: 1, vel: 0.62 },   // B4

        // Bar 79
        { t: 304, div: 'choir', midi: 64, dur: 1, vel: 0.60 },   // E4
        { t: 305, div: 'choir', midi: 62, dur: 2, vel: 0.62 },   // D4
        { t: 304, div: 'great', midi: 76, dur: 1, vel: 0.68 },   // E5
        { t: 305, div: 'great', midi: 78, dur: 2, vel: 0.70 },   // F#5
        { t: 304, div: 'swell', midi: 69, dur: 3, vel: 0.62 },   // A4

        // --- Subject entry 4: Pedal ---
        // Bar 80
        { t: 307, div: 'pedal', midi: 50, dur: 1, vel: 0.75 },   // D3
        { t: 308, div: 'pedal', midi: 52, dur: 1, vel: 0.75 },   // E3
        { t: 309, div: 'pedal', midi: 54, dur: 1, vel: 0.78 },   // F#3
        { t: 307, div: 'great', midi: 74, dur: 3, vel: 0.68 },   // D5
        { t: 307, div: 'swell', midi: 66, dur: 3, vel: 0.62 },   // F#4
        { t: 307, div: 'choir', midi: 57, dur: 3, vel: 0.58 },   // A3

        // Bar 81: Pedal continues
        { t: 310, div: 'pedal', midi: 45, dur: 1, vel: 0.78 },   // A2 (leap!)
        { t: 311, div: 'pedal', midi: 43, dur: 1, vel: 0.75 },   // G2
        { t: 312, div: 'pedal', midi: 42, dur: 1, vel: 0.72 },   // F#2
        { t: 310, div: 'great', midi: 76, dur: 1, vel: 0.68 },   // E5
        { t: 311, div: 'great', midi: 74, dur: 1, vel: 0.68 },   // D5
        { t: 312, div: 'great', midi: 73, dur: 1, vel: 0.65 },   // C#5
        { t: 310, div: 'swell', midi: 69, dur: 3, vel: 0.62 },   // A4

        // Bar 82: Pedal end
        { t: 313, div: 'pedal', midi: 40, dur: 1, vel: 0.72 },   // E2
        { t: 314, div: 'pedal', midi: 50, dur: 2, vel: 0.78 },   // D3
        { t: 313, div: 'great', midi: 74, dur: 3, vel: 0.70 },   // D5
        { t: 313, div: 'swell', midi: 66, dur: 3, vel: 0.65 },   // F#4
        { t: 313, div: 'choir', midi: 62, dur: 3, vel: 0.58 },   // D4

        // --- Bars 83-100: Fugue II development ---
        // Episode with sequences in 3/4
        // Bar 83-84
        { t: 316, div: 'great', midi: 74, dur: 1, vel: 0.72 },   // D5
        { t: 317, div: 'great', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 318, div: 'great', midi: 78, dur: 1, vel: 0.75 },   // F#5
        { t: 316, div: 'swell', midi: 62, dur: 1, vel: 0.62 },   // D4
        { t: 317, div: 'swell', midi: 64, dur: 1, vel: 0.62 },   // E4
        { t: 318, div: 'swell', midi: 66, dur: 1, vel: 0.65 },   // F#4
        { t: 316, div: 'pedal', midi: 50, dur: 3, vel: 0.72 },   // D3

        // Bar 84
        { t: 319, div: 'great', midi: 79, dur: 1, vel: 0.75 },   // G5
        { t: 320, div: 'great', midi: 78, dur: 1, vel: 0.72 },   // F#5
        { t: 321, div: 'great', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 319, div: 'swell', midi: 67, dur: 1, vel: 0.65 },   // G4
        { t: 320, div: 'swell', midi: 66, dur: 1, vel: 0.62 },   // F#4
        { t: 321, div: 'swell', midi: 64, dur: 1, vel: 0.62 },   // E4
        { t: 319, div: 'pedal', midi: 43, dur: 3, vel: 0.72 },   // G2

        // Bar 85-86: Sequence up
        { t: 322, div: 'great', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 323, div: 'great', midi: 78, dur: 1, vel: 0.75 },   // F#5
        { t: 324, div: 'great', midi: 79, dur: 1, vel: 0.78 },   // G5
        { t: 322, div: 'swell', midi: 64, dur: 1, vel: 0.62 },   // E4
        { t: 323, div: 'swell', midi: 66, dur: 1, vel: 0.65 },   // F#4
        { t: 324, div: 'swell', midi: 67, dur: 1, vel: 0.65 },   // G4
        { t: 322, div: 'pedal', midi: 45, dur: 3, vel: 0.72 },   // A2

        // Bar 86
        { t: 325, div: 'great', midi: 81, dur: 1, vel: 0.80 },   // A5
        { t: 326, div: 'great', midi: 79, dur: 1, vel: 0.78 },   // G5
        { t: 327, div: 'great', midi: 78, dur: 1, vel: 0.75 },   // F#5
        { t: 325, div: 'swell', midi: 69, dur: 1, vel: 0.68 },   // A4
        { t: 326, div: 'swell', midi: 67, dur: 1, vel: 0.65 },   // G4
        { t: 327, div: 'swell', midi: 66, dur: 1, vel: 0.65 },   // F#4
        { t: 325, div: 'pedal', midi: 50, dur: 3, vel: 0.75 },   // D3

        // Bars 87-92: More development
        { t: 328, div: 'great', midi: 76, dur: 1, vel: 0.75 },   // E5
        { t: 329, div: 'great', midi: 74, dur: 1, vel: 0.72 },   // D5
        { t: 330, div: 'great', midi: 73, dur: 1, vel: 0.72 },   // C#5
        { t: 328, div: 'swell', midi: 64, dur: 3, vel: 0.62 },   // E4
        { t: 328, div: 'pedal', midi: 45, dur: 3, vel: 0.72 },   // A2

        // Bar 88
        { t: 331, div: 'great', midi: 71, dur: 1, vel: 0.72 },   // B4
        { t: 332, div: 'great', midi: 73, dur: 1, vel: 0.72 },   // C#5
        { t: 333, div: 'great', midi: 74, dur: 1, vel: 0.75 },   // D5
        { t: 331, div: 'swell', midi: 59, dur: 1, vel: 0.62 },   // B3
        { t: 332, div: 'swell', midi: 61, dur: 1, vel: 0.62 },   // C#4
        { t: 333, div: 'swell', midi: 62, dur: 1, vel: 0.65 },   // D4
        { t: 331, div: 'pedal', midi: 47, dur: 3, vel: 0.72 },   // B2

        // Bar 89
        { t: 334, div: 'great', midi: 76, dur: 1, vel: 0.75 },   // E5
        { t: 335, div: 'great', midi: 78, dur: 1, vel: 0.78 },   // F#5
        { t: 336, div: 'great', midi: 74, dur: 1, vel: 0.72 },   // D5
        { t: 334, div: 'swell', midi: 64, dur: 1, vel: 0.65 },   // E4
        { t: 335, div: 'swell', midi: 66, dur: 1, vel: 0.65 },   // F#4
        { t: 336, div: 'swell', midi: 62, dur: 1, vel: 0.62 },   // D4
        { t: 334, div: 'pedal', midi: 45, dur: 3, vel: 0.75 },   // A2

        // Bar 90-91
        { t: 337, div: 'great', midi: 73, dur: 1, vel: 0.72 },   // C#5
        { t: 338, div: 'great', midi: 74, dur: 2, vel: 0.78 },   // D5
        { t: 337, div: 'swell', midi: 61, dur: 1, vel: 0.65 },   // C#4
        { t: 338, div: 'swell', midi: 62, dur: 2, vel: 0.68 },   // D4
        { t: 337, div: 'pedal', midi: 45, dur: 1, vel: 0.72 },   // A2
        { t: 338, div: 'pedal', midi: 50, dur: 2, vel: 0.78 },   // D3

        // Bar 91
        { t: 340, div: 'great', midi: 74, dur: 1, vel: 0.75 },   // D5
        { t: 341, div: 'great', midi: 76, dur: 1, vel: 0.75 },   // E5
        { t: 342, div: 'great', midi: 78, dur: 1, vel: 0.78 },   // F#5
        { t: 340, div: 'swell', midi: 66, dur: 3, vel: 0.65 },   // F#4
        { t: 340, div: 'choir', midi: 57, dur: 3, vel: 0.55 },   // A3
        { t: 340, div: 'pedal', midi: 50, dur: 3, vel: 0.75 },   // D3

        // Bars 92-100: More episodes, building to close
        { t: 343, div: 'great', midi: 81, dur: 1, vel: 0.80 },   // A5
        { t: 344, div: 'great', midi: 79, dur: 1, vel: 0.78 },   // G5
        { t: 345, div: 'great', midi: 78, dur: 1, vel: 0.75 },   // F#5
        { t: 343, div: 'swell', midi: 69, dur: 3, vel: 0.65 },   // A4
        { t: 343, div: 'pedal', midi: 45, dur: 3, vel: 0.75 },   // A2

        // Bar 93
        { t: 346, div: 'great', midi: 76, dur: 1, vel: 0.75 },   // E5
        { t: 347, div: 'great', midi: 74, dur: 1, vel: 0.72 },   // D5
        { t: 348, div: 'great', midi: 73, dur: 1, vel: 0.72 },   // C#5
        { t: 346, div: 'swell', midi: 64, dur: 1, vel: 0.65 },   // E4
        { t: 347, div: 'swell', midi: 62, dur: 1, vel: 0.62 },   // D4
        { t: 348, div: 'swell', midi: 61, dur: 1, vel: 0.62 },   // C#4
        { t: 346, div: 'pedal', midi: 45, dur: 3, vel: 0.72 },   // A2

        // Bar 94-95: Subject in pedal one more time
        { t: 349, div: 'pedal', midi: 50, dur: 1, vel: 0.78 },   // D3
        { t: 350, div: 'pedal', midi: 52, dur: 1, vel: 0.78 },   // E3
        { t: 351, div: 'pedal', midi: 54, dur: 1, vel: 0.80 },   // F#3
        { t: 349, div: 'great', midi: 74, dur: 3, vel: 0.72 },   // D5
        { t: 349, div: 'swell', midi: 66, dur: 3, vel: 0.65 },   // F#4

        // Bar 95
        { t: 352, div: 'pedal', midi: 45, dur: 1, vel: 0.80 },   // A2
        { t: 353, div: 'pedal', midi: 43, dur: 1, vel: 0.78 },   // G2
        { t: 354, div: 'pedal', midi: 42, dur: 1, vel: 0.75 },   // F#2
        { t: 352, div: 'great', midi: 76, dur: 1, vel: 0.72 },   // E5
        { t: 353, div: 'great', midi: 74, dur: 1, vel: 0.72 },   // D5
        { t: 354, div: 'great', midi: 73, dur: 1, vel: 0.70 },   // C#5
        { t: 352, div: 'swell', midi: 69, dur: 3, vel: 0.65 },   // A4

        // Bar 96
        { t: 355, div: 'pedal', midi: 40, dur: 1, vel: 0.75 },   // E2
        { t: 356, div: 'pedal', midi: 50, dur: 2, vel: 0.80 },   // D3
        { t: 355, div: 'great', midi: 74, dur: 3, vel: 0.75 },   // D5
        { t: 355, div: 'swell', midi: 66, dur: 3, vel: 0.68 },   // F#4
        { t: 355, div: 'choir', midi: 62, dur: 3, vel: 0.58 },   // D4

        // Bars 97-106: Extended closing section of Fugue II
        { t: 358, div: 'great', midi: 76, dur: 1, vel: 0.75 },   // E5
        { t: 359, div: 'great', midi: 78, dur: 1, vel: 0.78 },   // F#5
        { t: 360, div: 'great', midi: 79, dur: 1, vel: 0.78 },   // G5
        { t: 358, div: 'swell', midi: 64, dur: 3, vel: 0.65 },   // E4
        { t: 358, div: 'pedal', midi: 45, dur: 3, vel: 0.75 },   // A2

        // Bar 98
        { t: 361, div: 'great', midi: 81, dur: 1, vel: 0.82 },   // A5
        { t: 362, div: 'great', midi: 78, dur: 1, vel: 0.78 },   // F#5
        { t: 363, div: 'great', midi: 74, dur: 1, vel: 0.75 },   // D5
        { t: 361, div: 'swell', midi: 69, dur: 3, vel: 0.68 },   // A4
        { t: 361, div: 'pedal', midi: 50, dur: 3, vel: 0.75 },   // D3

        // Bar 99
        { t: 364, div: 'great', midi: 73, dur: 1, vel: 0.75 },   // C#5
        { t: 365, div: 'great', midi: 74, dur: 2, vel: 0.80 },   // D5
        { t: 364, div: 'swell', midi: 66, dur: 3, vel: 0.68 },   // F#4
        { t: 364, div: 'choir', midi: 57, dur: 3, vel: 0.58 },   // A3
        { t: 364, div: 'pedal', midi: 45, dur: 1, vel: 0.75 },   // A2
        { t: 365, div: 'pedal', midi: 50, dur: 2, vel: 0.78 },   // D3

        // Bars 100-106: Final stretto and cadence of Fugue II
        { t: 367, div: 'great', midi: 74, dur: 1, vel: 0.78 },   // D5
        { t: 368, div: 'great', midi: 76, dur: 1, vel: 0.78 },   // E5
        { t: 369, div: 'great', midi: 78, dur: 1, vel: 0.80 },   // F#5
        { t: 367, div: 'swell', midi: 62, dur: 1, vel: 0.68 },   // D4
        { t: 368, div: 'swell', midi: 64, dur: 1, vel: 0.68 },   // E4
        { t: 369, div: 'swell', midi: 66, dur: 1, vel: 0.70 },   // F#4
        { t: 367, div: 'pedal', midi: 50, dur: 3, vel: 0.78 },   // D3

        // Bar 101
        { t: 370, div: 'great', midi: 81, dur: 1, vel: 0.82 },   // A5
        { t: 371, div: 'great', midi: 79, dur: 1, vel: 0.80 },   // G5
        { t: 372, div: 'great', midi: 78, dur: 1, vel: 0.78 },   // F#5
        { t: 370, div: 'swell', midi: 69, dur: 1, vel: 0.70 },   // A4
        { t: 371, div: 'swell', midi: 67, dur: 1, vel: 0.68 },   // G4
        { t: 372, div: 'swell', midi: 66, dur: 1, vel: 0.68 },   // F#4
        { t: 370, div: 'pedal', midi: 45, dur: 3, vel: 0.78 },   // A2

        // Bar 102
        { t: 373, div: 'great', midi: 76, dur: 1, vel: 0.78 },   // E5
        { t: 374, div: 'great', midi: 74, dur: 2, vel: 0.82 },   // D5
        { t: 373, div: 'swell', midi: 64, dur: 1, vel: 0.68 },   // E4
        { t: 374, div: 'swell', midi: 62, dur: 2, vel: 0.70 },   // D4
        { t: 374, div: 'swell', midi: 66, dur: 2, vel: 0.68 },   // F#4
        { t: 373, div: 'pedal', midi: 45, dur: 1, vel: 0.75 },   // A2
        { t: 374, div: 'pedal', midi: 50, dur: 2, vel: 0.80 },   // D3

        // Bars 103-106: Fugue II final bars
        { t: 376, div: 'great', midi: 78, dur: 1, vel: 0.80 },   // F#5
        { t: 377, div: 'great', midi: 76, dur: 1, vel: 0.78 },   // E5
        { t: 378, div: 'great', midi: 73, dur: 1, vel: 0.78 },   // C#5
        { t: 376, div: 'swell', midi: 69, dur: 3, vel: 0.68 },   // A4
        { t: 376, div: 'pedal', midi: 45, dur: 3, vel: 0.78 },   // A2

        // Bar 104
        { t: 379, div: 'great', midi: 74, dur: 3, vel: 0.85 },   // D5
        { t: 379, div: 'great', midi: 69, dur: 3, vel: 0.82 },   // A4
        { t: 379, div: 'swell', midi: 66, dur: 3, vel: 0.72 },   // F#4
        { t: 379, div: 'swell', midi: 62, dur: 3, vel: 0.70 },   // D4
        { t: 379, div: 'choir', midi: 57, dur: 3, vel: 0.60 },   // A3
        { t: 379, div: 'pedal', midi: 50, dur: 3, vel: 0.82 },   // D3

        // Bar 105-106: Held chord transitioning to final toccata
        { t: 382, div: 'great', midi: 74, dur: 6, vel: 0.82 },   // D5
        { t: 382, div: 'swell', midi: 66, dur: 6, vel: 0.68 },   // F#4
        { t: 382, div: 'swell', midi: 69, dur: 6, vel: 0.65 },   // A4
        { t: 382, div: 'pedal', midi: 50, dur: 6, vel: 0.78 },   // D3

        // Bar 106: Silence/breath before toccata
        // (rest - gap in events)

        // ============================================================
        // SECTION 5: CLOSING TOCCATA (bars 107-120)
        // Brilliant closing, pedal runs, final D major chord
        // ============================================================

        // Bar 107: Dramatic chord
        { t: 388, div: 'great', midi: 74, dur: 2, vel: 0.92 },   // D5
        { t: 388, div: 'great', midi: 69, dur: 2, vel: 0.88 },   // A4
        { t: 388, div: 'great', midi: 66, dur: 2, vel: 0.88 },   // F#4
        { t: 388, div: 'swell', midi: 62, dur: 2, vel: 0.72 },   // D4
        { t: 388, div: 'pedal', midi: 50, dur: 2, vel: 0.85 },   // D3
        { t: 388, div: 'pedal', midi: 38, dur: 2, vel: 0.82 },   // D2

        // Flourish
        { t: 390, div: 'great', midi: 78, dur: 0.5, vel: 0.85 }, // F#5
        { t: 390.5, div: 'great', midi: 79, dur: 0.5, vel: 0.85 },// G5
        { t: 391, div: 'great', midi: 81, dur: 1, vel: 0.90 },   // A5

        // Bar 108: Virtuosic descent
        { t: 392, div: 'great', midi: 81, dur: 0.5, vel: 0.88 }, // A5
        { t: 392.5, div: 'great', midi: 79, dur: 0.5, vel: 0.85 },// G5
        { t: 393, div: 'great', midi: 78, dur: 0.5, vel: 0.85 }, // F#5
        { t: 393.5, div: 'great', midi: 76, dur: 0.5, vel: 0.82 },// E5
        { t: 394, div: 'great', midi: 74, dur: 0.5, vel: 0.82 }, // D5
        { t: 394.5, div: 'great', midi: 73, dur: 0.5, vel: 0.80 },// C#5
        { t: 395, div: 'great', midi: 71, dur: 0.5, vel: 0.80 }, // B4
        { t: 395.5, div: 'great', midi: 69, dur: 0.5, vel: 0.82 },// A4
        { t: 392, div: 'pedal', midi: 45, dur: 4, vel: 0.82 },   // A2

        // Bar 109: Brilliant pedal run
        { t: 396, div: 'pedal', midi: 38, dur: 0.5, vel: 0.82 }, // D2
        { t: 396.5, div: 'pedal', midi: 40, dur: 0.5, vel: 0.80 },// E2
        { t: 397, div: 'pedal', midi: 42, dur: 0.5, vel: 0.82 }, // F#2
        { t: 397.5, div: 'pedal', midi: 43, dur: 0.5, vel: 0.82 },// G2
        { t: 398, div: 'pedal', midi: 45, dur: 0.5, vel: 0.85 }, // A2
        { t: 398.5, div: 'pedal', midi: 47, dur: 0.5, vel: 0.85 },// B2
        { t: 399, div: 'pedal', midi: 50, dur: 1, vel: 0.88 },   // D3
        // Manual chords above
        { t: 396, div: 'great', midi: 66, dur: 4, vel: 0.82 },   // F#4
        { t: 396, div: 'great', midi: 69, dur: 4, vel: 0.82 },   // A4
        { t: 396, div: 'great', midi: 74, dur: 4, vel: 0.85 },   // D5

        // Bar 110: Another pedal run descending
        { t: 400, div: 'pedal', midi: 50, dur: 0.5, vel: 0.85 }, // D3
        { t: 400.5, div: 'pedal', midi: 47, dur: 0.5, vel: 0.82 },// B2
        { t: 401, div: 'pedal', midi: 45, dur: 0.5, vel: 0.82 }, // A2
        { t: 401.5, div: 'pedal', midi: 43, dur: 0.5, vel: 0.80 },// G2
        { t: 402, div: 'pedal', midi: 42, dur: 0.5, vel: 0.80 }, // F#2
        { t: 402.5, div: 'pedal', midi: 40, dur: 0.5, vel: 0.78 },// E2
        { t: 403, div: 'pedal', midi: 38, dur: 1, vel: 0.85 },   // D2
        // Manual
        { t: 400, div: 'great', midi: 74, dur: 2, vel: 0.85 },   // D5
        { t: 402, div: 'great', midi: 73, dur: 1, vel: 0.82 },   // C#5
        { t: 403, div: 'great', midi: 74, dur: 1, vel: 0.85 },   // D5
        { t: 400, div: 'swell', midi: 69, dur: 4, vel: 0.70 },   // A4

        // Bar 111-112: Alternating manual flourishes
        { t: 404, div: 'great', midi: 76, dur: 0.5, vel: 0.85 }, // E5
        { t: 404.5, div: 'great', midi: 78, dur: 0.5, vel: 0.85 },// F#5
        { t: 405, div: 'great', midi: 79, dur: 0.5, vel: 0.88 }, // G5
        { t: 405.5, div: 'great', midi: 81, dur: 0.5, vel: 0.90 },// A5
        { t: 406, div: 'great', midi: 78, dur: 1, vel: 0.85 },   // F#5
        { t: 407, div: 'great', midi: 74, dur: 1, vel: 0.82 },   // D5
        { t: 404, div: 'swell', midi: 64, dur: 4, vel: 0.68 },   // E4
        { t: 404, div: 'pedal', midi: 45, dur: 4, vel: 0.82 },   // A2

        // Bar 112
        { t: 408, div: 'great', midi: 73, dur: 0.5, vel: 0.82 }, // C#5
        { t: 408.5, div: 'great', midi: 74, dur: 0.5, vel: 0.85 },// D5
        { t: 409, div: 'great', midi: 76, dur: 0.5, vel: 0.85 }, // E5
        { t: 409.5, div: 'great', midi: 78, dur: 0.5, vel: 0.88 },// F#5
        { t: 410, div: 'great', midi: 79, dur: 1, vel: 0.90 },   // G5
        { t: 411, div: 'great', midi: 81, dur: 1, vel: 0.92 },   // A5 (peak!)
        { t: 408, div: 'swell', midi: 66, dur: 4, vel: 0.70 },   // F#4
        { t: 408, div: 'swell', midi: 62, dur: 4, vel: 0.68 },   // D4
        { t: 408, div: 'pedal', midi: 50, dur: 4, vel: 0.85 },   // D3

        // Bar 113-114: Cadential approach
        { t: 412, div: 'great', midi: 78, dur: 2, vel: 0.90 },   // F#5
        { t: 414, div: 'great', midi: 76, dur: 1, vel: 0.85 },   // E5
        { t: 415, div: 'great', midi: 73, dur: 1, vel: 0.85 },   // C#5
        { t: 412, div: 'swell', midi: 69, dur: 2, vel: 0.72 },   // A4
        { t: 414, div: 'swell', midi: 64, dur: 2, vel: 0.68 },   // E4
        { t: 412, div: 'pedal', midi: 45, dur: 4, vel: 0.85 },   // A2

        // Bar 114: Trill on leading tone
        { t: 416, div: 'great', midi: 73, dur: 0.5, vel: 0.85 }, // C#5
        { t: 416.5, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },// D5
        { t: 417, div: 'great', midi: 73, dur: 0.5, vel: 0.85 }, // C#5
        { t: 417.5, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },// D5
        { t: 418, div: 'great', midi: 73, dur: 0.5, vel: 0.85 }, // C#5
        { t: 418.5, div: 'great', midi: 71, dur: 0.5, vel: 0.80 },// B4
        { t: 419, div: 'great', midi: 73, dur: 1, vel: 0.88 },   // C#5
        { t: 416, div: 'swell', midi: 61, dur: 4, vel: 0.70 },   // C#4
        { t: 416, div: 'pedal', midi: 45, dur: 4, vel: 0.85 },   // A2

        // Bar 115: Approaching final pedal run
        { t: 420, div: 'great', midi: 74, dur: 2, vel: 0.90 },   // D5
        { t: 422, div: 'great', midi: 78, dur: 2, vel: 0.88 },   // F#5
        { t: 420, div: 'swell', midi: 62, dur: 2, vel: 0.72 },   // D4
        { t: 422, div: 'swell', midi: 66, dur: 2, vel: 0.72 },   // F#4
        { t: 420, div: 'pedal', midi: 50, dur: 4, vel: 0.85 },   // D3

        // ============================================================
        // FINAL PEDAL RUN AND CLOSING (bars 116-120)
        // ============================================================

        // Bar 116: Grand pedal solo ascending
        { t: 424, div: 'pedal', midi: 38, dur: 0.5, vel: 0.88 }, // D2
        { t: 424.5, div: 'pedal', midi: 40, dur: 0.5, vel: 0.85 },// E2
        { t: 425, div: 'pedal', midi: 42, dur: 0.5, vel: 0.85 }, // F#2
        { t: 425.5, div: 'pedal', midi: 43, dur: 0.5, vel: 0.88 },// G2
        { t: 426, div: 'pedal', midi: 45, dur: 0.5, vel: 0.88 }, // A2
        { t: 426.5, div: 'pedal', midi: 47, dur: 0.5, vel: 0.90 },// B2
        { t: 427, div: 'pedal', midi: 50, dur: 0.5, vel: 0.90 }, // D3
        { t: 427.5, div: 'pedal', midi: 52, dur: 0.5, vel: 0.92 },// E3

        // Bar 117: More pedal, descending
        { t: 428, div: 'pedal', midi: 54, dur: 0.5, vel: 0.92 }, // F#3
        { t: 428.5, div: 'pedal', midi: 52, dur: 0.5, vel: 0.90 },// E3
        { t: 429, div: 'pedal', midi: 50, dur: 0.5, vel: 0.90 }, // D3
        { t: 429.5, div: 'pedal', midi: 47, dur: 0.5, vel: 0.88 },// B2
        { t: 430, div: 'pedal', midi: 45, dur: 0.5, vel: 0.88 }, // A2
        { t: 430.5, div: 'pedal', midi: 43, dur: 0.5, vel: 0.85 },// G2
        { t: 431, div: 'pedal', midi: 42, dur: 0.5, vel: 0.85 }, // F#2
        { t: 431.5, div: 'pedal', midi: 50, dur: 0.5, vel: 0.90 },// D3

        // Manual chords over pedal runs (bars 116-117)
        { t: 424, div: 'great', midi: 74, dur: 4, vel: 0.88 },   // D5
        { t: 424, div: 'great', midi: 69, dur: 4, vel: 0.85 },   // A4
        { t: 424, div: 'swell', midi: 66, dur: 4, vel: 0.72 },   // F#4
        { t: 428, div: 'great', midi: 78, dur: 4, vel: 0.90 },   // F#5
        { t: 428, div: 'great', midi: 74, dur: 4, vel: 0.88 },   // D5
        { t: 428, div: 'swell', midi: 69, dur: 4, vel: 0.72 },   // A4

        // Bar 118: Penultimate bar - dominant
        { t: 432, div: 'great', midi: 76, dur: 2, vel: 0.90 },   // E5
        { t: 434, div: 'great', midi: 73, dur: 2, vel: 0.92 },   // C#5 (leading)
        { t: 432, div: 'swell', midi: 64, dur: 2, vel: 0.72 },   // E4
        { t: 434, div: 'swell', midi: 61, dur: 2, vel: 0.72 },   // C#4
        { t: 432, div: 'choir', midi: 57, dur: 4, vel: 0.62 },   // A3
        { t: 432, div: 'pedal', midi: 45, dur: 4, vel: 0.90 },   // A2

        // Bar 119-120: FINAL D MAJOR CHORD - Full organ
        { t: 436, div: 'great', midi: 74, dur: 8, vel: 0.95 },   // D5
        { t: 436, div: 'great', midi: 78, dur: 8, vel: 0.92 },   // F#5
        { t: 436, div: 'great', midi: 81, dur: 8, vel: 0.90 },   // A5
        { t: 436, div: 'swell', midi: 62, dur: 8, vel: 0.75 },   // D4
        { t: 436, div: 'swell', midi: 66, dur: 8, vel: 0.72 },   // F#4
        { t: 436, div: 'swell', midi: 69, dur: 8, vel: 0.72 },   // A4
        { t: 436, div: 'choir', midi: 57, dur: 8, vel: 0.62 },   // A3
        { t: 436, div: 'choir', midi: 62, dur: 8, vel: 0.60 },   // D4
        { t: 436, div: 'pedal', midi: 50, dur: 8, vel: 0.92 },   // D3
        { t: 436, div: 'pedal', midi: 38, dur: 8, vel: 0.90 },   // D2
    ]
};
