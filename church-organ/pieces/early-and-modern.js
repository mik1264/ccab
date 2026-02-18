// ============================================================
// Early & Modern Organ Works Collection
// ============================================================
// Four works spanning early Baroque through 20th century
// MIDI reference: C2=36, C3=48, C4=60, D4=62, E4=64, F4=65, G4=67, A4=69, Bb4=70, B4=71, C5=72
// ============================================================

// ============================================================
// 1. Handel - The Cuckoo and the Nightingale
//    Organ Concerto No. 13 in F major, HWV 295
// ============================================================
// Second movement (Allegro) - the famous bird-call movement
// The "cuckoo" call is a descending major third (E5-C5)
// Key: F major. Written for chamber organ without pedals,
// but adapted here with light pedal bass.
// The nightingale episode modulates to G minor with
// rapid trills and ornamental figures.
// Time signature: 4/4, Allegro ~108 BPM
//
// MIDI reference for F major:
//   F2=41, C3=48, F3=53, A3=57, Bb3=58, C4=60, D4=62, E4=64
//   F4=65, G4=67, A4=69, Bb4=70, C5=72, D5=74, E5=76, F5=77
//   G5=79, A5=81
// ============================================================

const PIECE_HANDEL_CUCKOO = {
    title: "The Cuckoo and the Nightingale",
    composer: "George Frideric Handel",
    catalog: "HWV 295",
    key: "F major",
    tempo: 108,
    tempoChanges: [
        { t: 0, tempo: 108, label: "Allegro" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4'],
        swell: ['sw-flute4', 'sw-gedeckt8'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-octave8']
    },
    events: [
        // ============================================================
        // SECTION A - Opening with cuckoo call motif
        // The cuckoo call: descending major third E5(76)-C5(72)
        // Bright, playful Baroque texture
        // ============================================================

        // --- Bar 1: F major opening, melody enters with upbeat feel ---
        // Melody: C5 quarter, D5 quarter, E5 quarter, F5 quarter
        { t: 0,    div: 'great', midi: 72, dur: 1.0, vel: 0.80 },  // C5
        { t: 1,    div: 'great', midi: 74, dur: 1.0, vel: 0.80 },  // D5
        { t: 2,    div: 'great', midi: 76, dur: 1.0, vel: 0.82 },  // E5
        { t: 3,    div: 'great', midi: 77, dur: 1.0, vel: 0.82 },  // F5
        // Choir: inner voice harmony
        { t: 0,    div: 'choir', midi: 60, dur: 2.0, vel: 0.65 },  // C4
        { t: 0,    div: 'choir', midi: 65, dur: 2.0, vel: 0.65 },  // F4
        { t: 2,    div: 'choir', midi: 60, dur: 2.0, vel: 0.65 },  // C4
        { t: 2,    div: 'choir', midi: 64, dur: 2.0, vel: 0.65 },  // E4
        // Pedal: F
        { t: 0,    div: 'pedal', midi: 41, dur: 4.0, vel: 0.70 },  // F2

        // --- Bar 2: First cuckoo call! E5-C5 ---
        { t: 4,    div: 'great', midi: 76, dur: 0.75, vel: 0.85 }, // E5 (cuckoo high)
        { t: 4.75, div: 'great', midi: 72, dur: 1.25, vel: 0.85 }, // C5 (cuckoo low)
        { t: 6,    div: 'great', midi: 74, dur: 1.0, vel: 0.78 },  // D5
        { t: 7,    div: 'great', midi: 72, dur: 1.0, vel: 0.78 },  // C5
        // Choir harmony
        { t: 4,    div: 'choir', midi: 60, dur: 2.0, vel: 0.65 },  // C4
        { t: 4,    div: 'choir', midi: 67, dur: 2.0, vel: 0.65 },  // G4
        { t: 6,    div: 'choir', midi: 62, dur: 2.0, vel: 0.65 },  // D4
        { t: 6,    div: 'choir', midi: 65, dur: 2.0, vel: 0.65 },  // F4
        // Pedal: C
        { t: 4,    div: 'pedal', midi: 48, dur: 4.0, vel: 0.70 },  // C3

        // --- Bar 3: Melodic continuation with sequence ---
        { t: 8,    div: 'great', midi: 69, dur: 0.5, vel: 0.78 },  // A4
        { t: 8.5,  div: 'great', midi: 70, dur: 0.5, vel: 0.78 },  // Bb4
        { t: 9,    div: 'great', midi: 72, dur: 1.0, vel: 0.80 },  // C5
        { t: 10,   div: 'great', midi: 74, dur: 1.0, vel: 0.80 },  // D5
        { t: 11,   div: 'great', midi: 72, dur: 1.0, vel: 0.78 },  // C5
        // Choir
        { t: 8,    div: 'choir', midi: 65, dur: 4.0, vel: 0.65 },  // F4
        { t: 8,    div: 'choir', midi: 57, dur: 4.0, vel: 0.65 },  // A3
        // Pedal: F
        { t: 8,    div: 'pedal', midi: 41, dur: 4.0, vel: 0.70 },  // F2

        // --- Bar 4: Second cuckoo call with ornamentation ---
        { t: 12,   div: 'great', midi: 76, dur: 0.75, vel: 0.87 }, // E5 (cuckoo)
        { t: 12.75,div: 'great', midi: 72, dur: 0.75, vel: 0.87 }, // C5 (cuckoo)
        { t: 13.5, div: 'great', midi: 76, dur: 0.5, vel: 0.85 },  // E5 (echo)
        { t: 14,   div: 'great', midi: 72, dur: 0.5, vel: 0.83 },  // C5 (echo)
        { t: 14.5, div: 'great', midi: 74, dur: 0.5, vel: 0.80 },  // D5
        { t: 15,   div: 'great', midi: 72, dur: 1.0, vel: 0.80 },  // C5
        // Choir
        { t: 12,   div: 'choir', midi: 60, dur: 2.0, vel: 0.65 },  // C4
        { t: 12,   div: 'choir', midi: 64, dur: 2.0, vel: 0.65 },  // E4
        { t: 14,   div: 'choir', midi: 60, dur: 2.0, vel: 0.65 },  // C4
        { t: 14,   div: 'choir', midi: 67, dur: 2.0, vel: 0.65 },  // G4
        // Pedal: C
        { t: 12,   div: 'pedal', midi: 48, dur: 4.0, vel: 0.70 },  // C3

        // --- Bar 5: Bright scalar passage ascending ---
        { t: 16,   div: 'great', midi: 65, dur: 0.5, vel: 0.78 },  // F4
        { t: 16.5, div: 'great', midi: 67, dur: 0.5, vel: 0.78 },  // G4
        { t: 17,   div: 'great', midi: 69, dur: 0.5, vel: 0.80 },  // A4
        { t: 17.5, div: 'great', midi: 70, dur: 0.5, vel: 0.80 },  // Bb4
        { t: 18,   div: 'great', midi: 72, dur: 0.5, vel: 0.82 },  // C5
        { t: 18.5, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },  // D5
        { t: 19,   div: 'great', midi: 76, dur: 0.5, vel: 0.84 },  // E5
        { t: 19.5, div: 'great', midi: 77, dur: 0.5, vel: 0.84 },  // F5
        // Swell: countermelody
        { t: 16,   div: 'swell', midi: 60, dur: 1.0, vel: 0.60 },  // C4
        { t: 17,   div: 'swell', midi: 62, dur: 1.0, vel: 0.60 },  // D4
        { t: 18,   div: 'swell', midi: 64, dur: 1.0, vel: 0.60 },  // E4
        { t: 19,   div: 'swell', midi: 65, dur: 1.0, vel: 0.60 },  // F4
        // Pedal: F then C
        { t: 16,   div: 'pedal', midi: 41, dur: 2.0, vel: 0.70 },  // F2
        { t: 18,   div: 'pedal', midi: 48, dur: 2.0, vel: 0.70 },  // C3

        // --- Bar 6: Third cuckoo call at top of phrase ---
        { t: 20,   div: 'great', midi: 81, dur: 0.75, vel: 0.88 }, // A5 (high cuckoo)
        { t: 20.75,div: 'great', midi: 77, dur: 1.25, vel: 0.88 }, // F5 (cuckoo low - third)
        { t: 22,   div: 'great', midi: 77, dur: 0.5, vel: 0.82 },  // F5
        { t: 22.5, div: 'great', midi: 76, dur: 0.5, vel: 0.80 },  // E5
        { t: 23,   div: 'great', midi: 74, dur: 0.5, vel: 0.78 },  // D5
        { t: 23.5, div: 'great', midi: 72, dur: 0.5, vel: 0.78 },  // C5
        // Choir
        { t: 20,   div: 'choir', midi: 65, dur: 2.0, vel: 0.65 },  // F4
        { t: 20,   div: 'choir', midi: 69, dur: 2.0, vel: 0.65 },  // A4
        { t: 22,   div: 'choir', midi: 65, dur: 2.0, vel: 0.65 },  // F4
        { t: 22,   div: 'choir', midi: 67, dur: 2.0, vel: 0.65 },  // G4
        // Pedal: F
        { t: 20,   div: 'pedal', midi: 41, dur: 4.0, vel: 0.70 },  // F2

        // --- Bar 7: Descending sequence with cuckoo echoes ---
        { t: 24,   div: 'great', midi: 76, dur: 0.75, vel: 0.85 }, // E5 (cuckoo)
        { t: 24.75,div: 'great', midi: 72, dur: 0.75, vel: 0.85 }, // C5
        { t: 25.5, div: 'great', midi: 74, dur: 0.75, vel: 0.83 }, // D5 (cuckoo variant)
        { t: 26.25,div: 'great', midi: 70, dur: 0.75, vel: 0.83 }, // Bb4
        { t: 27,   div: 'great', midi: 72, dur: 0.5, vel: 0.80 },  // C5
        { t: 27.5, div: 'great', midi: 69, dur: 0.5, vel: 0.78 },  // A4
        // Swell
        { t: 24,   div: 'swell', midi: 60, dur: 2.0, vel: 0.60 },  // C4
        { t: 26,   div: 'swell', midi: 58, dur: 2.0, vel: 0.60 },  // Bb3
        // Pedal: C then Bb
        { t: 24,   div: 'pedal', midi: 48, dur: 2.0, vel: 0.70 },  // C3
        { t: 26,   div: 'pedal', midi: 46, dur: 2.0, vel: 0.70 },  // Bb2

        // --- Bar 8: Resolution to F, half cadence ---
        { t: 28,   div: 'great', midi: 69, dur: 1.0, vel: 0.80 },  // A4
        { t: 29,   div: 'great', midi: 67, dur: 0.5, vel: 0.78 },  // G4
        { t: 29.5, div: 'great', midi: 65, dur: 0.5, vel: 0.78 },  // F4
        { t: 30,   div: 'great', midi: 67, dur: 1.0, vel: 0.80 },  // G4
        { t: 31,   div: 'great', midi: 65, dur: 1.0, vel: 0.82 },  // F4
        // Choir: I chord
        { t: 28,   div: 'choir', midi: 60, dur: 4.0, vel: 0.65 },  // C4
        { t: 28,   div: 'choir', midi: 57, dur: 4.0, vel: 0.65 },  // A3
        // Pedal: F
        { t: 28,   div: 'pedal', midi: 41, dur: 4.0, vel: 0.70 },  // F2

        // ============================================================
        // SECTION B - Nightingale episode (G minor)
        // Rapid trills and ornamental figures evoking birdsong
        // ============================================================

        // --- Bar 9: G minor entry - nightingale trills ---
        { t: 32,   div: 'swell', midi: 74, dur: 0.25, vel: 0.72 }, // D5 trill
        { t: 32.25,div: 'swell', midi: 76, dur: 0.25, vel: 0.70 }, // E5
        { t: 32.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.72 }, // D5
        { t: 32.75,div: 'swell', midi: 76, dur: 0.25, vel: 0.70 }, // E5
        { t: 33,   div: 'swell', midi: 74, dur: 0.5, vel: 0.74 },  // D5
        { t: 33.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.72 },  // C5
        { t: 34,   div: 'swell', midi: 70, dur: 0.5, vel: 0.70 },  // Bb4
        { t: 34.5, div: 'swell', midi: 69, dur: 0.5, vel: 0.68 },  // A4
        { t: 35,   div: 'swell', midi: 67, dur: 1.0, vel: 0.72 },  // G4
        // Choir: G minor harmony
        { t: 32,   div: 'choir', midi: 55, dur: 4.0, vel: 0.60 },  // G3
        { t: 32,   div: 'choir', midi: 58, dur: 4.0, vel: 0.60 },  // Bb3
        { t: 32,   div: 'choir', midi: 62, dur: 4.0, vel: 0.60 },  // D4
        // Pedal: G
        { t: 32,   div: 'pedal', midi: 43, dur: 4.0, vel: 0.68 },  // G2

        // --- Bar 10: Nightingale continues - more ornamental ---
        { t: 36,   div: 'swell', midi: 69, dur: 0.25, vel: 0.72 }, // A4
        { t: 36.25,div: 'swell', midi: 70, dur: 0.25, vel: 0.70 }, // Bb4
        { t: 36.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.72 }, // C5
        { t: 36.75,div: 'swell', midi: 70, dur: 0.25, vel: 0.70 }, // Bb4
        { t: 37,   div: 'swell', midi: 69, dur: 0.25, vel: 0.72 }, // A4
        { t: 37.25,div: 'swell', midi: 70, dur: 0.25, vel: 0.70 }, // Bb4
        { t: 37.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.74 },  // C5
        { t: 38,   div: 'swell', midi: 74, dur: 0.5, vel: 0.74 },  // D5
        { t: 38.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.72 },  // C5
        { t: 39,   div: 'swell', midi: 70, dur: 0.5, vel: 0.70 },  // Bb4
        { t: 39.5, div: 'swell', midi: 69, dur: 0.5, vel: 0.72 },  // A4
        // Choir: moving bass
        { t: 36,   div: 'choir', midi: 53, dur: 2.0, vel: 0.60 },  // F3
        { t: 38,   div: 'choir', midi: 55, dur: 2.0, vel: 0.60 },  // G3
        // Pedal: F then G
        { t: 36,   div: 'pedal', midi: 41, dur: 2.0, vel: 0.68 },  // F2
        { t: 38,   div: 'pedal', midi: 43, dur: 2.0, vel: 0.68 },  // G2

        // --- Bar 11: Rapid nightingale figurations ---
        { t: 40,   div: 'swell', midi: 67, dur: 0.25, vel: 0.70 }, // G4
        { t: 40.25,div: 'swell', midi: 70, dur: 0.25, vel: 0.72 }, // Bb4
        { t: 40.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.74 }, // D5
        { t: 40.75,div: 'swell', midi: 70, dur: 0.25, vel: 0.72 }, // Bb4
        { t: 41,   div: 'swell', midi: 67, dur: 0.25, vel: 0.70 }, // G4
        { t: 41.25,div: 'swell', midi: 70, dur: 0.25, vel: 0.72 }, // Bb4
        { t: 41.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.74 }, // D5
        { t: 41.75,div: 'swell', midi: 77, dur: 0.25, vel: 0.76 }, // F5
        { t: 42,   div: 'swell', midi: 74, dur: 0.5, vel: 0.74 },  // D5
        { t: 42.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.72 },  // C5
        { t: 43,   div: 'swell', midi: 70, dur: 0.5, vel: 0.70 },  // Bb4
        { t: 43.5, div: 'swell', midi: 69, dur: 0.5, vel: 0.70 },  // A4
        // Choir: Gm harmony
        { t: 40,   div: 'choir', midi: 55, dur: 4.0, vel: 0.60 },  // G3
        { t: 40,   div: 'choir', midi: 62, dur: 4.0, vel: 0.60 },  // D4
        // Pedal
        { t: 40,   div: 'pedal', midi: 43, dur: 4.0, vel: 0.68 },  // G2

        // --- Bar 12: Transition back to F major ---
        { t: 44,   div: 'swell', midi: 70, dur: 0.5, vel: 0.72 },  // Bb4
        { t: 44.5, div: 'swell', midi: 69, dur: 0.5, vel: 0.72 },  // A4
        { t: 45,   div: 'swell', midi: 67, dur: 0.5, vel: 0.70 },  // G4
        { t: 45.5, div: 'swell', midi: 65, dur: 0.5, vel: 0.70 },  // F4
        { t: 46,   div: 'great', midi: 64, dur: 0.5, vel: 0.78 },  // E4
        { t: 46.5, div: 'great', midi: 65, dur: 0.5, vel: 0.78 },  // F4
        { t: 47,   div: 'great', midi: 67, dur: 0.5, vel: 0.80 },  // G4
        { t: 47.5, div: 'great', midi: 69, dur: 0.5, vel: 0.80 },  // A4
        // Choir
        { t: 44,   div: 'choir', midi: 58, dur: 2.0, vel: 0.60 },  // Bb3
        { t: 46,   div: 'choir', midi: 60, dur: 2.0, vel: 0.65 },  // C4
        // Pedal: Bb then C
        { t: 44,   div: 'pedal', midi: 46, dur: 2.0, vel: 0.68 },  // Bb2
        { t: 46,   div: 'pedal', midi: 48, dur: 2.0, vel: 0.70 },  // C3

        // ============================================================
        // SECTION A' - Return of cuckoo theme, F major
        // More elaborate with both bird calls together
        // ============================================================

        // --- Bar 13: Cuckoo returns triumphantly ---
        { t: 48,   div: 'great', midi: 72, dur: 0.5, vel: 0.82 },  // C5
        { t: 48.5, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },  // D5
        { t: 49,   div: 'great', midi: 76, dur: 0.75, vel: 0.88 }, // E5 (cuckoo!)
        { t: 49.75,div: 'great', midi: 72, dur: 1.25, vel: 0.88 }, // C5
        { t: 51,   div: 'great', midi: 74, dur: 0.5, vel: 0.82 },  // D5
        { t: 51.5, div: 'great', midi: 76, dur: 0.5, vel: 0.82 },  // E5
        // Swell: nightingale trill underneath
        { t: 48,   div: 'swell', midi: 65, dur: 0.25, vel: 0.65 }, // F4
        { t: 48.25,div: 'swell', midi: 67, dur: 0.25, vel: 0.63 }, // G4
        { t: 48.5, div: 'swell', midi: 65, dur: 0.25, vel: 0.65 }, // F4
        { t: 48.75,div: 'swell', midi: 67, dur: 0.25, vel: 0.63 }, // G4
        { t: 49,   div: 'swell', midi: 69, dur: 1.0, vel: 0.65 },  // A4
        { t: 50,   div: 'swell', midi: 67, dur: 1.0, vel: 0.63 },  // G4
        { t: 51,   div: 'swell', midi: 65, dur: 1.0, vel: 0.65 },  // F4
        // Pedal: F
        { t: 48,   div: 'pedal', midi: 41, dur: 4.0, vel: 0.72 },  // F2

        // --- Bar 14: Double cuckoo and ornamental close ---
        { t: 52,   div: 'great', midi: 77, dur: 0.75, vel: 0.88 }, // F5 (high cuckoo variant)
        { t: 52.75,div: 'great', midi: 74, dur: 0.75, vel: 0.88 }, // D5
        { t: 53.5, div: 'great', midi: 76, dur: 0.75, vel: 0.86 }, // E5 (cuckoo)
        { t: 54.25,div: 'great', midi: 72, dur: 0.75, vel: 0.86 }, // C5
        { t: 55,   div: 'great', midi: 74, dur: 0.5, vel: 0.82 },  // D5
        { t: 55.5, div: 'great', midi: 72, dur: 0.5, vel: 0.80 },  // C5
        // Swell: flowing response
        { t: 52,   div: 'swell', midi: 69, dur: 0.5, vel: 0.65 },  // A4
        { t: 52.5, div: 'swell', midi: 67, dur: 0.5, vel: 0.63 },  // G4
        { t: 53,   div: 'swell', midi: 65, dur: 0.5, vel: 0.65 },  // F4
        { t: 53.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.63 },  // E4
        { t: 54,   div: 'swell', midi: 65, dur: 1.0, vel: 0.65 },  // F4
        { t: 55,   div: 'swell', midi: 64, dur: 1.0, vel: 0.63 },  // E4
        // Choir
        { t: 52,   div: 'choir', midi: 57, dur: 2.0, vel: 0.63 },  // A3
        { t: 54,   div: 'choir', midi: 60, dur: 2.0, vel: 0.63 },  // C4
        // Pedal
        { t: 52,   div: 'pedal', midi: 41, dur: 2.0, vel: 0.72 },  // F2
        { t: 54,   div: 'pedal', midi: 48, dur: 2.0, vel: 0.72 },  // C3

        // --- Bar 15: Scalar elaboration ---
        { t: 56,   div: 'great', midi: 70, dur: 0.5, vel: 0.80 },  // Bb4
        { t: 56.5, div: 'great', midi: 69, dur: 0.5, vel: 0.80 },  // A4
        { t: 57,   div: 'great', midi: 72, dur: 0.5, vel: 0.82 },  // C5
        { t: 57.5, div: 'great', midi: 70, dur: 0.5, vel: 0.80 },  // Bb4
        { t: 58,   div: 'great', midi: 69, dur: 0.5, vel: 0.80 },  // A4
        { t: 58.5, div: 'great', midi: 67, dur: 0.5, vel: 0.78 },  // G4
        { t: 59,   div: 'great', midi: 69, dur: 0.5, vel: 0.80 },  // A4
        { t: 59.5, div: 'great', midi: 70, dur: 0.5, vel: 0.80 },  // Bb4
        // Swell: held harmony
        { t: 56,   div: 'swell', midi: 65, dur: 2.0, vel: 0.62 },  // F4
        { t: 58,   div: 'swell', midi: 64, dur: 2.0, vel: 0.62 },  // E4
        // Pedal: Bb then F
        { t: 56,   div: 'pedal', midi: 46, dur: 2.0, vel: 0.70 },  // Bb2
        { t: 58,   div: 'pedal', midi: 41, dur: 2.0, vel: 0.70 },  // F2

        // --- Bar 16: Fourth cuckoo call with answer ---
        { t: 60,   div: 'great', midi: 76, dur: 0.75, vel: 0.87 }, // E5 (cuckoo)
        { t: 60.75,div: 'great', midi: 72, dur: 1.0, vel: 0.87 },  // C5
        { t: 61.75,div: 'great', midi: 76, dur: 0.75, vel: 0.85 }, // E5 (answer)
        { t: 62.5, div: 'great', midi: 72, dur: 0.75, vel: 0.85 }, // C5
        { t: 63.25,div: 'great', midi: 74, dur: 0.75, vel: 0.83 }, // D5
        // Swell: nightingale ornament
        { t: 60,   div: 'swell', midi: 67, dur: 0.25, vel: 0.65 }, // G4
        { t: 60.25,div: 'swell', midi: 69, dur: 0.25, vel: 0.63 }, // A4
        { t: 60.5, div: 'swell', midi: 67, dur: 0.25, vel: 0.65 }, // G4
        { t: 60.75,div: 'swell', midi: 65, dur: 1.25, vel: 0.63 }, // F4
        { t: 62,   div: 'swell', midi: 64, dur: 1.0, vel: 0.63 },  // E4
        { t: 63,   div: 'swell', midi: 65, dur: 1.0, vel: 0.65 },  // F4
        // Pedal: C
        { t: 60,   div: 'pedal', midi: 48, dur: 4.0, vel: 0.72 },  // C3

        // --- Bar 17: Building toward cadence ---
        { t: 64,   div: 'great', midi: 72, dur: 0.5, vel: 0.82 },  // C5
        { t: 64.5, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },  // D5
        { t: 65,   div: 'great', midi: 76, dur: 0.5, vel: 0.84 },  // E5
        { t: 65.5, div: 'great', midi: 77, dur: 0.5, vel: 0.84 },  // F5
        { t: 66,   div: 'great', midi: 76, dur: 0.5, vel: 0.84 },  // E5
        { t: 66.5, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },  // D5
        { t: 67,   div: 'great', midi: 72, dur: 0.5, vel: 0.82 },  // C5
        { t: 67.5, div: 'great', midi: 70, dur: 0.5, vel: 0.80 },  // Bb4
        // Choir: rising bass
        { t: 64,   div: 'choir', midi: 57, dur: 2.0, vel: 0.65 },  // A3
        { t: 64,   div: 'choir', midi: 60, dur: 2.0, vel: 0.65 },  // C4
        { t: 66,   div: 'choir', midi: 58, dur: 2.0, vel: 0.65 },  // Bb3
        { t: 66,   div: 'choir', midi: 62, dur: 2.0, vel: 0.65 },  // D4
        // Pedal: F then Bb
        { t: 64,   div: 'pedal', midi: 41, dur: 2.0, vel: 0.72 },  // F2
        { t: 66,   div: 'pedal', midi: 46, dur: 2.0, vel: 0.72 },  // Bb2

        // --- Bar 18: Fifth cuckoo - final statement ---
        { t: 68,   div: 'great', midi: 76, dur: 0.75, vel: 0.90 }, // E5 (cuckoo forte)
        { t: 68.75,div: 'great', midi: 72, dur: 1.25, vel: 0.90 }, // C5
        { t: 70,   div: 'great', midi: 74, dur: 1.0, vel: 0.85 },  // D5
        { t: 71,   div: 'great', midi: 72, dur: 1.0, vel: 0.82 },  // C5
        // Swell: final nightingale trill
        { t: 68,   div: 'swell', midi: 65, dur: 0.25, vel: 0.68 }, // F4
        { t: 68.25,div: 'swell', midi: 67, dur: 0.25, vel: 0.66 }, // G4
        { t: 68.5, div: 'swell', midi: 65, dur: 0.25, vel: 0.68 }, // F4
        { t: 68.75,div: 'swell', midi: 67, dur: 0.25, vel: 0.66 }, // G4
        { t: 69,   div: 'swell', midi: 69, dur: 1.0, vel: 0.68 },  // A4
        { t: 70,   div: 'swell', midi: 67, dur: 1.0, vel: 0.66 },  // G4
        { t: 71,   div: 'swell', midi: 65, dur: 1.0, vel: 0.68 },  // F4
        // Choir
        { t: 68,   div: 'choir', midi: 60, dur: 4.0, vel: 0.65 },  // C4
        { t: 68,   div: 'choir', midi: 64, dur: 4.0, vel: 0.65 },  // E4
        // Pedal: C
        { t: 68,   div: 'pedal', midi: 48, dur: 4.0, vel: 0.72 },  // C3

        // --- Bar 19: Cadential approach ---
        { t: 72,   div: 'great', midi: 69, dur: 0.5, vel: 0.82 },  // A4
        { t: 72.5, div: 'great', midi: 70, dur: 0.5, vel: 0.82 },  // Bb4
        { t: 73,   div: 'great', midi: 72, dur: 1.0, vel: 0.84 },  // C5
        { t: 74,   div: 'great', midi: 70, dur: 0.5, vel: 0.82 },  // Bb4
        { t: 74.5, div: 'great', midi: 69, dur: 0.5, vel: 0.82 },  // A4
        { t: 75,   div: 'great', midi: 67, dur: 0.5, vel: 0.80 },  // G4
        { t: 75.5, div: 'great', midi: 65, dur: 0.5, vel: 0.80 },  // F4
        // Swell
        { t: 72,   div: 'swell', midi: 65, dur: 2.0, vel: 0.65 },  // F4
        { t: 74,   div: 'swell', midi: 64, dur: 2.0, vel: 0.65 },  // E4
        // Choir
        { t: 72,   div: 'choir', midi: 57, dur: 4.0, vel: 0.63 },  // A3
        // Pedal: F
        { t: 72,   div: 'pedal', midi: 41, dur: 4.0, vel: 0.72 },  // F2

        // --- Bar 20: Final cadence - V-I in F major ---
        { t: 76,   div: 'great', midi: 67, dur: 1.0, vel: 0.84 },  // G4
        { t: 77,   div: 'great', midi: 64, dur: 0.5, vel: 0.84 },  // E4 (leading tone)
        { t: 77.5, div: 'great', midi: 65, dur: 0.5, vel: 0.84 },  // F4
        { t: 78,   div: 'great', midi: 76, dur: 0.75, vel: 0.90 }, // E5 (final cuckoo!)
        { t: 78.75,div: 'great', midi: 72, dur: 1.25, vel: 0.88 }, // C5
        // Swell
        { t: 76,   div: 'swell', midi: 62, dur: 2.0, vel: 0.65 },  // D4
        { t: 78,   div: 'swell', midi: 60, dur: 2.0, vel: 0.68 },  // C4
        // Choir: V then I
        { t: 76,   div: 'choir', midi: 55, dur: 2.0, vel: 0.65 },  // G3
        { t: 76,   div: 'choir', midi: 59, dur: 2.0, vel: 0.65 },  // B3
        { t: 78,   div: 'choir', midi: 57, dur: 2.0, vel: 0.68 },  // A3
        { t: 78,   div: 'choir', midi: 60, dur: 2.0, vel: 0.68 },  // C4
        // Pedal: C then F
        { t: 76,   div: 'pedal', midi: 48, dur: 2.0, vel: 0.72 },  // C3
        { t: 78,   div: 'pedal', midi: 41, dur: 2.0, vel: 0.75 },  // F2

        // --- Bar 21: Final F major chord ---
        { t: 80,   div: 'great', midi: 77, dur: 2.5, vel: 0.88 },  // F5
        { t: 80,   div: 'great', midi: 72, dur: 2.5, vel: 0.85 },  // C5
        { t: 80,   div: 'swell', midi: 69, dur: 2.5, vel: 0.70 },  // A4
        { t: 80,   div: 'choir', midi: 65, dur: 2.5, vel: 0.68 },  // F4
        { t: 80,   div: 'choir', midi: 60, dur: 2.5, vel: 0.68 },  // C4
        { t: 80,   div: 'choir', midi: 57, dur: 2.5, vel: 0.65 },  // A3
        { t: 80,   div: 'pedal', midi: 41, dur: 2.5, vel: 0.75 },  // F2
    ]
};


// ============================================================
// 2. Sweelinck - Mein junges Leben hat ein End, SwWV 324
// ============================================================
// Theme and Variations on the Dutch/German folk song
// "My young life has come to an end"
// Key: A minor (dorian inflection typical of period)
// The theme is stated simply, then each variation adds
// progressive ornamentation and rhythmic diminution.
// Encode: Theme + Variations 1 and 2
// Time signature: 4/4, tempo ~66 BPM (stately)
//
// MIDI reference for A minor:
//   A1=33, E2=40, A2=45, B2=47, C3=48, D3=50, E3=52, F3=53
//   G3=55, A3=57, B3=59, C4=60, D4=62, E4=64, F4=65, G4=67
//   A4=69, B4=71, C5=72, D5=74, E5=76
// ============================================================

const PIECE_SWEELINCK_JUNGES = {
    title: "Mein junges Leben hat ein End",
    composer: "Jan Pieterszoon Sweelinck",
    catalog: "SwWV 324",
    key: "A minor",
    tempo: 66,
    tempoChanges: [
        { t: 0, tempo: 66, label: "Andante" }
    ],
    registration: {
        great: ['gt-principal8'],
        swell: ['sw-gedeckt8', 'sw-salicional8'],
        choir: ['ch-flute8'],
        pedal: ['pd-octave8']
    },
    events: [
        // ============================================================
        // THEME - Simple statement of the folk melody
        // The melody: A-A-B-C-B-A-G-A  (outline, song-like phrases)
        // Plaintive, minor, gentle
        // ============================================================

        // --- Theme, phrase 1 (bars 1-4): The opening melody ---
        // Soprano: A4 - A4 - B4 - C5 - B4 - A4
        { t: 0,    div: 'great', midi: 69, dur: 2.0, vel: 0.72 },  // A4 half
        { t: 2,    div: 'great', midi: 69, dur: 1.0, vel: 0.72 },  // A4 quarter
        { t: 3,    div: 'great', midi: 71, dur: 1.0, vel: 0.72 },  // B4 quarter
        { t: 4,    div: 'great', midi: 72, dur: 2.0, vel: 0.74 },  // C5 half
        { t: 6,    div: 'great', midi: 71, dur: 1.0, vel: 0.72 },  // B4 quarter
        { t: 7,    div: 'great', midi: 69, dur: 1.0, vel: 0.72 },  // A4 quarter
        // Alto voice
        { t: 0,    div: 'swell', midi: 64, dur: 2.0, vel: 0.58 },  // E4
        { t: 2,    div: 'swell', midi: 64, dur: 2.0, vel: 0.58 },  // E4
        { t: 4,    div: 'swell', midi: 67, dur: 2.0, vel: 0.58 },  // G4
        { t: 6,    div: 'swell', midi: 67, dur: 1.0, vel: 0.58 },  // G4
        { t: 7,    div: 'swell', midi: 64, dur: 1.0, vel: 0.58 },  // E4
        // Tenor voice
        { t: 0,    div: 'choir', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        { t: 2,    div: 'choir', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        { t: 4,    div: 'choir', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        { t: 6,    div: 'choir', midi: 62, dur: 2.0, vel: 0.55 },  // D4
        // Pedal: A
        { t: 0,    div: 'pedal', midi: 45, dur: 4.0, vel: 0.65 },  // A2
        { t: 4,    div: 'pedal', midi: 48, dur: 4.0, vel: 0.65 },  // C3

        // --- Theme, phrase 2 (bars 5-8): Descent and cadence ---
        // Soprano: G4 - A4 - G4 - F4 - E4
        { t: 8,    div: 'great', midi: 67, dur: 1.0, vel: 0.72 },  // G4
        { t: 9,    div: 'great', midi: 69, dur: 1.0, vel: 0.72 },  // A4
        { t: 10,   div: 'great', midi: 67, dur: 1.0, vel: 0.70 },  // G4
        { t: 11,   div: 'great', midi: 65, dur: 1.0, vel: 0.70 },  // F4
        { t: 12,   div: 'great', midi: 64, dur: 2.0, vel: 0.72 },  // E4 half
        { t: 14,   div: 'great', midi: 67, dur: 1.0, vel: 0.70 },  // G4
        { t: 15,   div: 'great', midi: 64, dur: 1.0, vel: 0.70 },  // E4
        // Alto
        { t: 8,    div: 'swell', midi: 62, dur: 2.0, vel: 0.55 },  // D4
        { t: 10,   div: 'swell', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        { t: 12,   div: 'swell', midi: 59, dur: 2.0, vel: 0.55 },  // B3
        { t: 14,   div: 'swell', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        // Tenor
        { t: 8,    div: 'choir', midi: 55, dur: 2.0, vel: 0.52 },  // G3
        { t: 10,   div: 'choir', midi: 57, dur: 2.0, vel: 0.52 },  // A3
        { t: 12,   div: 'choir', midi: 55, dur: 2.0, vel: 0.52 },  // G3
        { t: 14,   div: 'choir', midi: 55, dur: 2.0, vel: 0.52 },  // G3
        // Pedal
        { t: 8,    div: 'pedal', midi: 43, dur: 4.0, vel: 0.65 },  // G2
        { t: 12,   div: 'pedal', midi: 40, dur: 4.0, vel: 0.65 },  // E2

        // --- Theme, phrase 3 (bars 9-12): Second half of melody ---
        // Soprano: D4 - E4 - F4 - G4 - A4
        { t: 16,   div: 'great', midi: 62, dur: 1.0, vel: 0.70 },  // D4
        { t: 17,   div: 'great', midi: 64, dur: 1.0, vel: 0.70 },  // E4
        { t: 18,   div: 'great', midi: 65, dur: 1.0, vel: 0.72 },  // F4
        { t: 19,   div: 'great', midi: 67, dur: 1.0, vel: 0.72 },  // G4
        { t: 20,   div: 'great', midi: 69, dur: 2.0, vel: 0.74 },  // A4 half
        { t: 22,   div: 'great', midi: 67, dur: 1.0, vel: 0.72 },  // G4
        { t: 23,   div: 'great', midi: 69, dur: 1.0, vel: 0.72 },  // A4
        // Alto
        { t: 16,   div: 'swell', midi: 57, dur: 2.0, vel: 0.55 },  // A3
        { t: 18,   div: 'swell', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        { t: 20,   div: 'swell', midi: 64, dur: 2.0, vel: 0.55 },  // E4
        { t: 22,   div: 'swell', midi: 62, dur: 2.0, vel: 0.55 },  // D4
        // Tenor
        { t: 16,   div: 'choir', midi: 50, dur: 2.0, vel: 0.52 },  // D3
        { t: 18,   div: 'choir', midi: 53, dur: 2.0, vel: 0.52 },  // F3
        { t: 20,   div: 'choir', midi: 57, dur: 2.0, vel: 0.52 },  // A3
        { t: 22,   div: 'choir', midi: 55, dur: 2.0, vel: 0.52 },  // G3
        // Pedal
        { t: 16,   div: 'pedal', midi: 38, dur: 4.0, vel: 0.65 },  // D2
        { t: 20,   div: 'pedal', midi: 45, dur: 4.0, vel: 0.65 },  // A2

        // --- Theme, phrase 4 (bars 13-16): Final cadence in A minor ---
        // Soprano: B4 - C5 - B4 - A4 (whole)
        { t: 24,   div: 'great', midi: 71, dur: 1.0, vel: 0.72 },  // B4
        { t: 25,   div: 'great', midi: 72, dur: 1.0, vel: 0.74 },  // C5
        { t: 26,   div: 'great', midi: 71, dur: 1.0, vel: 0.72 },  // B4
        { t: 27,   div: 'great', midi: 69, dur: 1.0, vel: 0.72 },  // A4
        { t: 28,   div: 'great', midi: 71, dur: 1.0, vel: 0.72 },  // B4
        { t: 29,   div: 'great', midi: 69, dur: 1.0, vel: 0.74 },  // A4
        { t: 30,   div: 'great', midi: 68, dur: 1.0, vel: 0.72 },  // G#4 (picardy leading tone)
        { t: 31,   div: 'great', midi: 69, dur: 1.5, vel: 0.76 },  // A4 (final)
        // Alto
        { t: 24,   div: 'swell', midi: 64, dur: 2.0, vel: 0.55 },  // E4
        { t: 26,   div: 'swell', midi: 67, dur: 2.0, vel: 0.55 },  // G4
        { t: 28,   div: 'swell', midi: 64, dur: 2.0, vel: 0.55 },  // E4
        { t: 30,   div: 'swell', midi: 64, dur: 2.5, vel: 0.58 },  // E4
        // Tenor
        { t: 24,   div: 'choir', midi: 59, dur: 2.0, vel: 0.52 },  // B3
        { t: 26,   div: 'choir', midi: 60, dur: 2.0, vel: 0.52 },  // C4
        { t: 28,   div: 'choir', midi: 59, dur: 2.0, vel: 0.52 },  // B3
        { t: 30,   div: 'choir', midi: 60, dur: 2.5, vel: 0.55 },  // C4
        // Pedal: E then A
        { t: 24,   div: 'pedal', midi: 40, dur: 4.0, vel: 0.65 },  // E2
        { t: 28,   div: 'pedal', midi: 40, dur: 2.0, vel: 0.65 },  // E2
        { t: 30,   div: 'pedal', midi: 45, dur: 2.5, vel: 0.68 },  // A2

        // ============================================================
        // VARIATION 1 - Eighth-note diminution in soprano
        // Same harmony, melody ornamented with passing tones
        // Registration: add flute 4' for brightness
        // ============================================================

        // --- Var 1, phrase 1 (bars 17-20) ---
        // Soprano: A4 with eighth-note ornaments around each melody note
        { t: 33,   div: 'great', midi: 69, dur: 0.5, vel: 0.72 },  // A4
        { t: 33.5, div: 'great', midi: 71, dur: 0.5, vel: 0.70 },  // B4
        { t: 34,   div: 'great', midi: 69, dur: 0.5, vel: 0.72 },  // A4
        { t: 34.5, div: 'great', midi: 67, dur: 0.5, vel: 0.70 },  // G4
        { t: 35,   div: 'great', midi: 69, dur: 0.5, vel: 0.72 },  // A4
        { t: 35.5, div: 'great', midi: 71, dur: 0.5, vel: 0.72 },  // B4
        { t: 36,   div: 'great', midi: 72, dur: 0.5, vel: 0.74 },  // C5
        { t: 36.5, div: 'great', midi: 71, dur: 0.5, vel: 0.72 },  // B4
        { t: 37,   div: 'great', midi: 72, dur: 0.5, vel: 0.74 },  // C5
        { t: 37.5, div: 'great', midi: 74, dur: 0.5, vel: 0.74 },  // D5
        { t: 38,   div: 'great', midi: 72, dur: 0.5, vel: 0.74 },  // C5
        { t: 38.5, div: 'great', midi: 71, dur: 0.5, vel: 0.72 },  // B4
        { t: 39,   div: 'great', midi: 69, dur: 0.5, vel: 0.72 },  // A4
        { t: 39.5, div: 'great', midi: 67, dur: 0.5, vel: 0.70 },  // G4
        // Alto (same as theme)
        { t: 33,   div: 'swell', midi: 64, dur: 2.0, vel: 0.58 },  // E4
        { t: 35,   div: 'swell', midi: 64, dur: 2.0, vel: 0.58 },  // E4
        { t: 37,   div: 'swell', midi: 67, dur: 2.0, vel: 0.58 },  // G4
        { t: 39,   div: 'swell', midi: 64, dur: 1.0, vel: 0.58 },  // E4
        // Tenor
        { t: 33,   div: 'choir', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        { t: 35,   div: 'choir', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        { t: 37,   div: 'choir', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        { t: 39,   div: 'choir', midi: 62, dur: 1.0, vel: 0.55 },  // D4
        // Pedal
        { t: 33,   div: 'pedal', midi: 45, dur: 4.0, vel: 0.65 },  // A2
        { t: 37,   div: 'pedal', midi: 48, dur: 3.0, vel: 0.65 },  // C3

        // --- Var 1, phrase 2 (bars 21-24) ---
        { t: 40,   div: 'great', midi: 67, dur: 0.5, vel: 0.70 },  // G4
        { t: 40.5, div: 'great', midi: 65, dur: 0.5, vel: 0.70 },  // F4
        { t: 41,   div: 'great', midi: 69, dur: 0.5, vel: 0.72 },  // A4
        { t: 41.5, div: 'great', midi: 71, dur: 0.5, vel: 0.72 },  // B4
        { t: 42,   div: 'great', midi: 69, dur: 0.5, vel: 0.72 },  // A4
        { t: 42.5, div: 'great', midi: 67, dur: 0.5, vel: 0.70 },  // G4
        { t: 43,   div: 'great', midi: 65, dur: 0.5, vel: 0.70 },  // F4
        { t: 43.5, div: 'great', midi: 64, dur: 0.5, vel: 0.70 },  // E4
        { t: 44,   div: 'great', midi: 64, dur: 0.5, vel: 0.70 },  // E4
        { t: 44.5, div: 'great', midi: 62, dur: 0.5, vel: 0.68 },  // D4
        { t: 45,   div: 'great', midi: 64, dur: 0.5, vel: 0.70 },  // E4
        { t: 45.5, div: 'great', midi: 65, dur: 0.5, vel: 0.70 },  // F4
        { t: 46,   div: 'great', midi: 67, dur: 0.5, vel: 0.72 },  // G4
        { t: 46.5, div: 'great', midi: 65, dur: 0.5, vel: 0.70 },  // F4
        { t: 47,   div: 'great', midi: 64, dur: 0.5, vel: 0.70 },  // E4
        { t: 47.5, div: 'great', midi: 62, dur: 0.5, vel: 0.68 },  // D4
        // Alto
        { t: 40,   div: 'swell', midi: 62, dur: 2.0, vel: 0.55 },  // D4
        { t: 42,   div: 'swell', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        { t: 44,   div: 'swell', midi: 59, dur: 2.0, vel: 0.55 },  // B3
        { t: 46,   div: 'swell', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        // Tenor
        { t: 40,   div: 'choir', midi: 55, dur: 2.0, vel: 0.52 },  // G3
        { t: 42,   div: 'choir', midi: 57, dur: 2.0, vel: 0.52 },  // A3
        { t: 44,   div: 'choir', midi: 55, dur: 2.0, vel: 0.52 },  // G3
        { t: 46,   div: 'choir', midi: 55, dur: 2.0, vel: 0.52 },  // G3
        // Pedal
        { t: 40,   div: 'pedal', midi: 43, dur: 4.0, vel: 0.65 },  // G2
        { t: 44,   div: 'pedal', midi: 40, dur: 4.0, vel: 0.65 },  // E2

        // --- Var 1, phrase 3 (bars 25-28) ---
        { t: 48,   div: 'great', midi: 62, dur: 0.5, vel: 0.70 },  // D4
        { t: 48.5, div: 'great', midi: 60, dur: 0.5, vel: 0.68 },  // C4
        { t: 49,   div: 'great', midi: 64, dur: 0.5, vel: 0.70 },  // E4
        { t: 49.5, div: 'great', midi: 65, dur: 0.5, vel: 0.70 },  // F4
        { t: 50,   div: 'great', midi: 65, dur: 0.5, vel: 0.70 },  // F4
        { t: 50.5, div: 'great', midi: 67, dur: 0.5, vel: 0.72 },  // G4
        { t: 51,   div: 'great', midi: 69, dur: 0.5, vel: 0.72 },  // A4
        { t: 51.5, div: 'great', midi: 67, dur: 0.5, vel: 0.72 },  // G4
        { t: 52,   div: 'great', midi: 69, dur: 0.5, vel: 0.74 },  // A4
        { t: 52.5, div: 'great', midi: 71, dur: 0.5, vel: 0.74 },  // B4
        { t: 53,   div: 'great', midi: 69, dur: 0.5, vel: 0.72 },  // A4
        { t: 53.5, div: 'great', midi: 67, dur: 0.5, vel: 0.72 },  // G4
        { t: 54,   div: 'great', midi: 67, dur: 0.5, vel: 0.72 },  // G4
        { t: 54.5, div: 'great', midi: 69, dur: 0.5, vel: 0.72 },  // A4
        { t: 55,   div: 'great', midi: 71, dur: 0.5, vel: 0.74 },  // B4
        { t: 55.5, div: 'great', midi: 69, dur: 0.5, vel: 0.72 },  // A4
        // Alto
        { t: 48,   div: 'swell', midi: 57, dur: 2.0, vel: 0.55 },  // A3
        { t: 50,   div: 'swell', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        { t: 52,   div: 'swell', midi: 64, dur: 2.0, vel: 0.55 },  // E4
        { t: 54,   div: 'swell', midi: 62, dur: 2.0, vel: 0.55 },  // D4
        // Tenor
        { t: 48,   div: 'choir', midi: 50, dur: 2.0, vel: 0.52 },  // D3
        { t: 50,   div: 'choir', midi: 53, dur: 2.0, vel: 0.52 },  // F3
        { t: 52,   div: 'choir', midi: 57, dur: 2.0, vel: 0.52 },  // A3
        { t: 54,   div: 'choir', midi: 55, dur: 2.0, vel: 0.52 },  // G3
        // Pedal
        { t: 48,   div: 'pedal', midi: 38, dur: 4.0, vel: 0.65 },  // D2
        { t: 52,   div: 'pedal', midi: 45, dur: 4.0, vel: 0.65 },  // A2

        // --- Var 1, phrase 4 (bars 29-32): Cadence ---
        { t: 56,   div: 'great', midi: 71, dur: 0.5, vel: 0.72 },  // B4
        { t: 56.5, div: 'great', midi: 72, dur: 0.5, vel: 0.74 },  // C5
        { t: 57,   div: 'great', midi: 74, dur: 0.5, vel: 0.74 },  // D5
        { t: 57.5, div: 'great', midi: 72, dur: 0.5, vel: 0.74 },  // C5
        { t: 58,   div: 'great', midi: 71, dur: 0.5, vel: 0.72 },  // B4
        { t: 58.5, div: 'great', midi: 69, dur: 0.5, vel: 0.72 },  // A4
        { t: 59,   div: 'great', midi: 71, dur: 0.5, vel: 0.72 },  // B4
        { t: 59.5, div: 'great', midi: 72, dur: 0.5, vel: 0.74 },  // C5
        { t: 60,   div: 'great', midi: 71, dur: 0.5, vel: 0.72 },  // B4
        { t: 60.5, div: 'great', midi: 69, dur: 0.5, vel: 0.72 },  // A4
        { t: 61,   div: 'great', midi: 68, dur: 0.5, vel: 0.72 },  // G#4
        { t: 61.5, div: 'great', midi: 69, dur: 0.5, vel: 0.72 },  // A4
        { t: 62,   div: 'great', midi: 71, dur: 0.5, vel: 0.72 },  // B4
        { t: 62.5, div: 'great', midi: 69, dur: 0.5, vel: 0.74 },  // A4
        { t: 63,   div: 'great', midi: 68, dur: 0.5, vel: 0.72 },  // G#4
        { t: 63.5, div: 'great', midi: 69, dur: 1.0, vel: 0.76 },  // A4 (cadence)
        // Alto
        { t: 56,   div: 'swell', midi: 64, dur: 2.0, vel: 0.55 },  // E4
        { t: 58,   div: 'swell', midi: 67, dur: 2.0, vel: 0.55 },  // G4
        { t: 60,   div: 'swell', midi: 64, dur: 2.0, vel: 0.55 },  // E4
        { t: 62,   div: 'swell', midi: 64, dur: 2.5, vel: 0.58 },  // E4
        // Tenor
        { t: 56,   div: 'choir', midi: 59, dur: 2.0, vel: 0.52 },  // B3
        { t: 58,   div: 'choir', midi: 60, dur: 2.0, vel: 0.52 },  // C4
        { t: 60,   div: 'choir', midi: 59, dur: 2.0, vel: 0.52 },  // B3
        { t: 62,   div: 'choir', midi: 60, dur: 2.5, vel: 0.55 },  // C4
        // Pedal
        { t: 56,   div: 'pedal', midi: 40, dur: 4.0, vel: 0.65 },  // E2
        { t: 60,   div: 'pedal', midi: 40, dur: 2.0, vel: 0.65 },  // E2
        { t: 62,   div: 'pedal', midi: 45, dur: 2.5, vel: 0.68 },  // A2

        // ============================================================
        // VARIATION 2 - Sixteenth-note diminution, faster figuration
        // The melody now appears in running 16ths
        // Added stops: octave 4' on great for sparkle
        // ============================================================

        // --- Var 2, phrase 1 (bars 33-36) ---
        // Soprano: rapid 16th-note figurations around A4
        { t: 65.5, div: 'great', midi: 69, dur: 0.25, vel: 0.74 },  // A4
        { t: 65.75,div: 'great', midi: 71, dur: 0.25, vel: 0.72 },  // B4
        { t: 66,   div: 'great', midi: 72, dur: 0.25, vel: 0.74 },  // C5
        { t: 66.25,div: 'great', midi: 71, dur: 0.25, vel: 0.72 },  // B4
        { t: 66.5, div: 'great', midi: 69, dur: 0.25, vel: 0.74 },  // A4
        { t: 66.75,div: 'great', midi: 67, dur: 0.25, vel: 0.72 },  // G4
        { t: 67,   div: 'great', midi: 69, dur: 0.25, vel: 0.74 },  // A4
        { t: 67.25,div: 'great', midi: 71, dur: 0.25, vel: 0.74 },  // B4
        { t: 67.5, div: 'great', midi: 69, dur: 0.25, vel: 0.74 },  // A4
        { t: 67.75,div: 'great', midi: 71, dur: 0.25, vel: 0.74 },  // B4
        { t: 68,   div: 'great', midi: 72, dur: 0.25, vel: 0.76 },  // C5
        { t: 68.25,div: 'great', midi: 74, dur: 0.25, vel: 0.76 },  // D5
        { t: 68.5, div: 'great', midi: 76, dur: 0.25, vel: 0.78 },  // E5
        { t: 68.75,div: 'great', midi: 74, dur: 0.25, vel: 0.76 },  // D5
        { t: 69,   div: 'great', midi: 72, dur: 0.25, vel: 0.76 },  // C5
        { t: 69.25,div: 'great', midi: 71, dur: 0.25, vel: 0.74 },  // B4
        { t: 69.5, div: 'great', midi: 72, dur: 0.25, vel: 0.76 },  // C5
        { t: 69.75,div: 'great', midi: 74, dur: 0.25, vel: 0.76 },  // D5
        { t: 70,   div: 'great', midi: 72, dur: 0.25, vel: 0.76 },  // C5
        { t: 70.25,div: 'great', midi: 71, dur: 0.25, vel: 0.74 },  // B4
        { t: 70.5, div: 'great', midi: 69, dur: 0.25, vel: 0.74 },  // A4
        { t: 70.75,div: 'great', midi: 67, dur: 0.25, vel: 0.72 },  // G4
        { t: 71,   div: 'great', midi: 69, dur: 0.25, vel: 0.74 },  // A4
        { t: 71.25,div: 'great', midi: 67, dur: 0.25, vel: 0.72 },  // G4
        { t: 71.5, div: 'great', midi: 65, dur: 0.25, vel: 0.72 },  // F4
        { t: 71.75,div: 'great', midi: 64, dur: 0.25, vel: 0.70 },  // E4
        // Alto: sustained as before
        { t: 65.5, div: 'swell', midi: 64, dur: 2.0, vel: 0.58 },  // E4
        { t: 67.5, div: 'swell', midi: 64, dur: 2.0, vel: 0.58 },  // E4
        { t: 69.5, div: 'swell', midi: 67, dur: 2.0, vel: 0.58 },  // G4
        // Tenor
        { t: 65.5, div: 'choir', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        { t: 67.5, div: 'choir', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        { t: 69.5, div: 'choir', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        // Pedal
        { t: 65.5, div: 'pedal', midi: 45, dur: 3.5, vel: 0.65 },  // A2
        { t: 69,   div: 'pedal', midi: 48, dur: 3.0, vel: 0.65 },  // C3

        // --- Var 2, phrase 2 (bars 37-40) ---
        { t: 72,   div: 'great', midi: 67, dur: 0.25, vel: 0.72 },  // G4
        { t: 72.25,div: 'great', midi: 65, dur: 0.25, vel: 0.70 },  // F4
        { t: 72.5, div: 'great', midi: 67, dur: 0.25, vel: 0.72 },  // G4
        { t: 72.75,div: 'great', midi: 69, dur: 0.25, vel: 0.72 },  // A4
        { t: 73,   div: 'great', midi: 71, dur: 0.25, vel: 0.74 },  // B4
        { t: 73.25,div: 'great', midi: 69, dur: 0.25, vel: 0.72 },  // A4
        { t: 73.5, div: 'great', midi: 67, dur: 0.25, vel: 0.72 },  // G4
        { t: 73.75,div: 'great', midi: 65, dur: 0.25, vel: 0.70 },  // F4
        { t: 74,   div: 'great', midi: 67, dur: 0.25, vel: 0.72 },  // G4
        { t: 74.25,div: 'great', midi: 65, dur: 0.25, vel: 0.70 },  // F4
        { t: 74.5, div: 'great', midi: 64, dur: 0.25, vel: 0.70 },  // E4
        { t: 74.75,div: 'great', midi: 62, dur: 0.25, vel: 0.68 },  // D4
        { t: 75,   div: 'great', midi: 64, dur: 0.25, vel: 0.70 },  // E4
        { t: 75.25,div: 'great', midi: 62, dur: 0.25, vel: 0.68 },  // D4
        { t: 75.5, div: 'great', midi: 64, dur: 0.25, vel: 0.70 },  // E4
        { t: 75.75,div: 'great', midi: 65, dur: 0.25, vel: 0.70 },  // F4
        { t: 76,   div: 'great', midi: 67, dur: 0.25, vel: 0.72 },  // G4
        { t: 76.25,div: 'great', midi: 65, dur: 0.25, vel: 0.70 },  // F4
        { t: 76.5, div: 'great', midi: 64, dur: 0.25, vel: 0.70 },  // E4
        { t: 76.75,div: 'great', midi: 62, dur: 0.25, vel: 0.68 },  // D4
        { t: 77,   div: 'great', midi: 64, dur: 0.25, vel: 0.70 },  // E4
        { t: 77.25,div: 'great', midi: 65, dur: 0.25, vel: 0.70 },  // F4
        { t: 77.5, div: 'great', midi: 64, dur: 0.25, vel: 0.70 },  // E4
        { t: 77.75,div: 'great', midi: 62, dur: 0.25, vel: 0.68 },  // D4
        // Alto
        { t: 72,   div: 'swell', midi: 62, dur: 2.0, vel: 0.55 },  // D4
        { t: 74,   div: 'swell', midi: 60, dur: 2.0, vel: 0.55 },  // C4
        { t: 76,   div: 'swell', midi: 59, dur: 2.0, vel: 0.55 },  // B3
        // Tenor
        { t: 72,   div: 'choir', midi: 55, dur: 2.0, vel: 0.52 },  // G3
        { t: 74,   div: 'choir', midi: 57, dur: 2.0, vel: 0.52 },  // A3
        { t: 76,   div: 'choir', midi: 55, dur: 2.0, vel: 0.52 },  // G3
        // Pedal
        { t: 72,   div: 'pedal', midi: 43, dur: 4.0, vel: 0.65 },  // G2
        { t: 76,   div: 'pedal', midi: 40, dur: 2.0, vel: 0.65 },  // E2

        // --- Var 2, phrase 3 (bars 41-44) ---
        { t: 78,   div: 'great', midi: 62, dur: 0.25, vel: 0.70 },  // D4
        { t: 78.25,div: 'great', midi: 60, dur: 0.25, vel: 0.68 },  // C4
        { t: 78.5, div: 'great', midi: 62, dur: 0.25, vel: 0.70 },  // D4
        { t: 78.75,div: 'great', midi: 64, dur: 0.25, vel: 0.70 },  // E4
        { t: 79,   div: 'great', midi: 65, dur: 0.25, vel: 0.72 },  // F4
        { t: 79.25,div: 'great', midi: 64, dur: 0.25, vel: 0.70 },  // E4
        { t: 79.5, div: 'great', midi: 65, dur: 0.25, vel: 0.72 },  // F4
        { t: 79.75,div: 'great', midi: 67, dur: 0.25, vel: 0.72 },  // G4
        { t: 80,   div: 'great', midi: 69, dur: 0.25, vel: 0.74 },  // A4
        { t: 80.25,div: 'great', midi: 67, dur: 0.25, vel: 0.72 },  // G4
        { t: 80.5, div: 'great', midi: 69, dur: 0.25, vel: 0.74 },  // A4
        { t: 80.75,div: 'great', midi: 71, dur: 0.25, vel: 0.74 },  // B4
        { t: 81,   div: 'great', midi: 69, dur: 0.25, vel: 0.74 },  // A4
        { t: 81.25,div: 'great', midi: 67, dur: 0.25, vel: 0.72 },  // G4
        { t: 81.5, div: 'great', midi: 69, dur: 0.25, vel: 0.74 },  // A4
        { t: 81.75,div: 'great', midi: 71, dur: 0.25, vel: 0.74 },  // B4
        // Alto
        { t: 78,   div: 'swell', midi: 57, dur: 2.0, vel: 0.55 },  // A3
        { t: 80,   div: 'swell', midi: 64, dur: 2.0, vel: 0.55 },  // E4
        // Tenor
        { t: 78,   div: 'choir', midi: 50, dur: 2.0, vel: 0.52 },  // D3
        { t: 80,   div: 'choir', midi: 57, dur: 2.0, vel: 0.52 },  // A3
        // Pedal
        { t: 78,   div: 'pedal', midi: 38, dur: 4.0, vel: 0.65 },  // D2

        // --- Var 2, phrase 4 (bars 45-48): Final cadence ---
        { t: 82,   div: 'great', midi: 72, dur: 0.25, vel: 0.76 },  // C5
        { t: 82.25,div: 'great', midi: 71, dur: 0.25, vel: 0.74 },  // B4
        { t: 82.5, div: 'great', midi: 72, dur: 0.25, vel: 0.76 },  // C5
        { t: 82.75,div: 'great', midi: 74, dur: 0.25, vel: 0.76 },  // D5
        { t: 83,   div: 'great', midi: 72, dur: 0.25, vel: 0.76 },  // C5
        { t: 83.25,div: 'great', midi: 71, dur: 0.25, vel: 0.74 },  // B4
        { t: 83.5, div: 'great', midi: 69, dur: 0.25, vel: 0.74 },  // A4
        { t: 83.75,div: 'great', midi: 68, dur: 0.25, vel: 0.72 },  // G#4
        { t: 84,   div: 'great', midi: 69, dur: 0.25, vel: 0.74 },  // A4
        { t: 84.25,div: 'great', midi: 71, dur: 0.25, vel: 0.74 },  // B4
        { t: 84.5, div: 'great', midi: 72, dur: 0.25, vel: 0.76 },  // C5
        { t: 84.75,div: 'great', midi: 71, dur: 0.25, vel: 0.74 },  // B4
        { t: 85,   div: 'great', midi: 69, dur: 0.25, vel: 0.74 },  // A4
        { t: 85.25,div: 'great', midi: 68, dur: 0.25, vel: 0.72 },  // G#4
        { t: 85.5, div: 'great', midi: 69, dur: 1.5, vel: 0.78 },   // A4 final
        // Alto
        { t: 82,   div: 'swell', midi: 64, dur: 2.0, vel: 0.55 },  // E4
        { t: 84,   div: 'swell', midi: 64, dur: 2.0, vel: 0.55 },  // E4
        { t: 85.5, div: 'swell', midi: 64, dur: 1.5, vel: 0.58 },  // E4
        // Tenor
        { t: 82,   div: 'choir', midi: 59, dur: 2.0, vel: 0.52 },  // B3
        { t: 84,   div: 'choir', midi: 59, dur: 2.0, vel: 0.52 },  // B3
        { t: 85.5, div: 'choir', midi: 60, dur: 1.5, vel: 0.55 },  // C4
        // Pedal
        { t: 82,   div: 'pedal', midi: 40, dur: 4.0, vel: 0.65 },  // E2
        { t: 85.5, div: 'pedal', midi: 45, dur: 1.5, vel: 0.68 },  // A2
    ]
};


// ============================================================
// 3. Messiaen - Apparition de l'Eglise Eternelle
// ============================================================
// A single vast crescendo and diminuendo - the church appears
// and then fades away. Very slow tempo, massive chords.
// Richly colored chords alternate with open fifths, over a
// throbbing bass with a repeated rhythmic pattern.
// The climax features a stark C major chord on full organ.
// Structure: ppp -> gradual build -> fff climax -> fade to ppp
// Duration: ~8 minutes in performance; we encode ~80 seconds
//
// MIDI reference:
//   F#1=30, C#2=37, F#2=42, C#3=49, F#3=54, G#3=56, A3=57
//   B3=59, C#4=61, D#4=63, E4=64, F#4=66, G#4=68, A4=69
//   B4=71, C5=72, C#5=73, D5=74, E5=76, F#5=78, G5=79
// ============================================================

const PIECE_MESSIAEN_APPARITION = {
    title: "Apparition de l'Eglise Eternelle",
    composer: "Olivier Messiaen",
    catalog: "I/8",
    key: "F# (modal)",
    tempo: 40,
    tempoChanges: [
        { t: 0, tempo: 40, label: "Tres lent (ppp)" },
        { t: 60, tempo: 36, label: "Encore plus lent" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ============================================================
        // OPENING - ppp, the throbbing bass begins
        // Open fifths and sparse chords, barely audible
        // The repeated rhythmic bass pattern: long-short-long
        // ============================================================

        // --- Section 1: First chord - F# open fifth, ppp ---
        { t: 0,    div: 'pedal', midi: 30, dur: 6.0, vel: 0.20 },  // F#1
        { t: 0,    div: 'pedal', midi: 42, dur: 6.0, vel: 0.20 },  // F#2
        { t: 0,    div: 'great', midi: 54, dur: 6.0, vel: 0.18 },  // F#3
        { t: 0,    div: 'great', midi: 61, dur: 6.0, vel: 0.18 },  // C#4 (fifth)
        { t: 0,    div: 'swell', midi: 66, dur: 6.0, vel: 0.15 },  // F#4

        // --- Throbbing bass pulse 1 ---
        { t: 6,    div: 'pedal', midi: 30, dur: 2.0, vel: 0.22 },  // F#1 (short)
        { t: 6,    div: 'pedal', midi: 42, dur: 2.0, vel: 0.22 },  // F#2
        { t: 8,    div: 'pedal', midi: 30, dur: 4.0, vel: 0.24 },  // F#1 (long)
        { t: 8,    div: 'pedal', midi: 42, dur: 4.0, vel: 0.24 },  // F#2

        // --- Section 2: Second chord - richer, still very quiet ---
        { t: 6,    div: 'great', midi: 54, dur: 6.0, vel: 0.22 },  // F#3
        { t: 6,    div: 'great', midi: 59, dur: 6.0, vel: 0.22 },  // B3
        { t: 6,    div: 'great', midi: 61, dur: 6.0, vel: 0.22 },  // C#4
        { t: 6,    div: 'swell', midi: 66, dur: 6.0, vel: 0.20 },  // F#4
        { t: 6,    div: 'swell', midi: 71, dur: 6.0, vel: 0.18 },  // B4

        // --- Section 3: Third chord - adding color, pp ---
        { t: 12,   div: 'pedal', midi: 30, dur: 6.0, vel: 0.28 },  // F#1
        { t: 12,   div: 'pedal', midi: 42, dur: 6.0, vel: 0.28 },  // F#2
        { t: 12,   div: 'great', midi: 56, dur: 6.0, vel: 0.28 },  // G#3
        { t: 12,   div: 'great', midi: 61, dur: 6.0, vel: 0.28 },  // C#4
        { t: 12,   div: 'great', midi: 64, dur: 6.0, vel: 0.26 },  // E4
        { t: 12,   div: 'swell', midi: 68, dur: 6.0, vel: 0.24 },  // G#4
        { t: 12,   div: 'swell', midi: 73, dur: 6.0, vel: 0.22 },  // C#5

        // --- Throbbing bass pulse 2 ---
        { t: 18,   div: 'pedal', midi: 30, dur: 2.0, vel: 0.30 },  // F#1
        { t: 18,   div: 'pedal', midi: 42, dur: 2.0, vel: 0.30 },  // F#2
        { t: 20,   div: 'pedal', midi: 30, dur: 4.0, vel: 0.32 },  // F#1
        { t: 20,   div: 'pedal', midi: 42, dur: 4.0, vel: 0.32 },  // F#2

        // --- Section 4: Building - p, richer harmony ---
        { t: 18,   div: 'great', midi: 54, dur: 6.0, vel: 0.35 },  // F#3
        { t: 18,   div: 'great', midi: 57, dur: 6.0, vel: 0.35 },  // A3
        { t: 18,   div: 'great', midi: 61, dur: 6.0, vel: 0.35 },  // C#4
        { t: 18,   div: 'great', midi: 66, dur: 6.0, vel: 0.33 },  // F#4
        { t: 18,   div: 'swell', midi: 69, dur: 6.0, vel: 0.30 },  // A4
        { t: 18,   div: 'swell', midi: 73, dur: 6.0, vel: 0.28 },  // C#5
        { t: 18,   div: 'swell', midi: 78, dur: 6.0, vel: 0.26 },  // F#5

        // ============================================================
        // BUILDING - mp to mf, the church takes shape
        // Chords become denser, bass more insistent
        // ============================================================

        // --- Section 5: mp, open fifth returns but louder ---
        { t: 24,   div: 'pedal', midi: 30, dur: 6.0, vel: 0.40 },  // F#1
        { t: 24,   div: 'pedal', midi: 37, dur: 6.0, vel: 0.40 },  // C#2
        { t: 24,   div: 'pedal', midi: 42, dur: 6.0, vel: 0.40 },  // F#2
        { t: 24,   div: 'great', midi: 54, dur: 6.0, vel: 0.42 },  // F#3
        { t: 24,   div: 'great', midi: 61, dur: 6.0, vel: 0.42 },  // C#4
        { t: 24,   div: 'great', midi: 66, dur: 6.0, vel: 0.40 },  // F#4
        { t: 24,   div: 'swell', midi: 73, dur: 6.0, vel: 0.38 },  // C#5
        { t: 24,   div: 'swell', midi: 78, dur: 6.0, vel: 0.36 },  // F#5

        // --- Section 6: mf, dense chord cluster ---
        { t: 30,   div: 'pedal', midi: 30, dur: 3.0, vel: 0.48 },  // F#1 (throbbing)
        { t: 30,   div: 'pedal', midi: 42, dur: 3.0, vel: 0.48 },  // F#2
        { t: 33,   div: 'pedal', midi: 30, dur: 3.0, vel: 0.50 },  // F#1
        { t: 33,   div: 'pedal', midi: 42, dur: 3.0, vel: 0.50 },  // F#2
        { t: 30,   div: 'great', midi: 54, dur: 6.0, vel: 0.50 },  // F#3
        { t: 30,   div: 'great', midi: 59, dur: 6.0, vel: 0.50 },  // B3
        { t: 30,   div: 'great', midi: 63, dur: 6.0, vel: 0.50 },  // D#4
        { t: 30,   div: 'great', midi: 66, dur: 6.0, vel: 0.48 },  // F#4
        { t: 30,   div: 'swell', midi: 71, dur: 6.0, vel: 0.46 },  // B4
        { t: 30,   div: 'swell', midi: 75, dur: 6.0, vel: 0.44 },  // D#5
        { t: 30,   div: 'swell', midi: 78, dur: 6.0, vel: 0.42 },  // F#5
        { t: 30,   div: 'choir', midi: 59, dur: 6.0, vel: 0.45 },  // B3
        { t: 30,   div: 'choir', midi: 63, dur: 6.0, vel: 0.45 },  // D#4

        // --- Section 7: f, intensifying ---
        { t: 36,   div: 'pedal', midi: 30, dur: 6.0, vel: 0.58 },  // F#1
        { t: 36,   div: 'pedal', midi: 37, dur: 6.0, vel: 0.58 },  // C#2
        { t: 36,   div: 'pedal', midi: 42, dur: 6.0, vel: 0.58 },  // F#2
        { t: 36,   div: 'great', midi: 49, dur: 6.0, vel: 0.60 },  // C#3
        { t: 36,   div: 'great', midi: 54, dur: 6.0, vel: 0.60 },  // F#3
        { t: 36,   div: 'great', midi: 57, dur: 6.0, vel: 0.60 },  // A3
        { t: 36,   div: 'great', midi: 61, dur: 6.0, vel: 0.60 },  // C#4
        { t: 36,   div: 'great', midi: 66, dur: 6.0, vel: 0.58 },  // F#4
        { t: 36,   div: 'swell', midi: 69, dur: 6.0, vel: 0.56 },  // A4
        { t: 36,   div: 'swell', midi: 73, dur: 6.0, vel: 0.54 },  // C#5
        { t: 36,   div: 'swell', midi: 78, dur: 6.0, vel: 0.52 },  // F#5
        { t: 36,   div: 'choir', midi: 57, dur: 6.0, vel: 0.55 },  // A3
        { t: 36,   div: 'choir', midi: 61, dur: 6.0, vel: 0.55 },  // C#4

        // --- Section 8: ff, throbbing intensifies ---
        { t: 42,   div: 'pedal', midi: 30, dur: 2.0, vel: 0.68 },  // F#1 (throb)
        { t: 42,   div: 'pedal', midi: 42, dur: 2.0, vel: 0.68 },  // F#2
        { t: 44,   div: 'pedal', midi: 30, dur: 2.0, vel: 0.70 },  // F#1
        { t: 44,   div: 'pedal', midi: 37, dur: 2.0, vel: 0.70 },  // C#2
        { t: 44,   div: 'pedal', midi: 42, dur: 2.0, vel: 0.70 },  // F#2
        { t: 46,   div: 'pedal', midi: 30, dur: 2.0, vel: 0.72 },  // F#1
        { t: 46,   div: 'pedal', midi: 42, dur: 2.0, vel: 0.72 },  // F#2
        // Huge chord across all divisions
        { t: 42,   div: 'great', midi: 49, dur: 6.0, vel: 0.72 },  // C#3
        { t: 42,   div: 'great', midi: 54, dur: 6.0, vel: 0.72 },  // F#3
        { t: 42,   div: 'great', midi: 56, dur: 6.0, vel: 0.72 },  // G#3
        { t: 42,   div: 'great', midi: 61, dur: 6.0, vel: 0.70 },  // C#4
        { t: 42,   div: 'great', midi: 64, dur: 6.0, vel: 0.70 },  // E4
        { t: 42,   div: 'great', midi: 66, dur: 6.0, vel: 0.68 },  // F#4
        { t: 42,   div: 'swell', midi: 68, dur: 6.0, vel: 0.66 },  // G#4
        { t: 42,   div: 'swell', midi: 73, dur: 6.0, vel: 0.64 },  // C#5
        { t: 42,   div: 'swell', midi: 76, dur: 6.0, vel: 0.62 },  // E5
        { t: 42,   div: 'swell', midi: 78, dur: 6.0, vel: 0.60 },  // F#5
        { t: 42,   div: 'choir', midi: 56, dur: 6.0, vel: 0.65 },  // G#3
        { t: 42,   div: 'choir', midi: 61, dur: 6.0, vel: 0.65 },  // C#4

        // ============================================================
        // CLIMAX - fff, the Vision in full view
        // Stark C major chord on full organ
        // ============================================================

        // --- Section 9: fff CLIMAX - C major chord! ---
        { t: 48,   div: 'pedal', midi: 36, dur: 8.0, vel: 0.92 },  // C2
        { t: 48,   div: 'pedal', midi: 48, dur: 8.0, vel: 0.92 },  // C3
        { t: 48,   div: 'great', midi: 48, dur: 8.0, vel: 0.95 },  // C3
        { t: 48,   div: 'great', midi: 52, dur: 8.0, vel: 0.95 },  // E3
        { t: 48,   div: 'great', midi: 55, dur: 8.0, vel: 0.95 },  // G3
        { t: 48,   div: 'great', midi: 60, dur: 8.0, vel: 0.95 },  // C4
        { t: 48,   div: 'great', midi: 64, dur: 8.0, vel: 0.93 },  // E4
        { t: 48,   div: 'great', midi: 67, dur: 8.0, vel: 0.93 },  // G4
        { t: 48,   div: 'swell', midi: 72, dur: 8.0, vel: 0.90 },  // C5
        { t: 48,   div: 'swell', midi: 76, dur: 8.0, vel: 0.88 },  // E5
        { t: 48,   div: 'swell', midi: 79, dur: 8.0, vel: 0.88 },  // G5
        { t: 48,   div: 'choir', midi: 60, dur: 8.0, vel: 0.90 },  // C4
        { t: 48,   div: 'choir', midi: 64, dur: 8.0, vel: 0.90 },  // E4
        { t: 48,   div: 'choir', midi: 67, dur: 8.0, vel: 0.90 },  // G4

        // --- Sustained climax pedal throb ---
        { t: 56,   div: 'pedal', midi: 36, dur: 4.0, vel: 0.90 },  // C2
        { t: 56,   div: 'pedal', midi: 48, dur: 4.0, vel: 0.90 },  // C3
        { t: 56,   div: 'great', midi: 48, dur: 4.0, vel: 0.92 },  // C3
        { t: 56,   div: 'great', midi: 52, dur: 4.0, vel: 0.92 },  // E3
        { t: 56,   div: 'great', midi: 55, dur: 4.0, vel: 0.92 },  // G3
        { t: 56,   div: 'great', midi: 60, dur: 4.0, vel: 0.90 },  // C4
        { t: 56,   div: 'great', midi: 64, dur: 4.0, vel: 0.90 },  // E4
        { t: 56,   div: 'great', midi: 67, dur: 4.0, vel: 0.90 },  // G4
        { t: 56,   div: 'swell', midi: 72, dur: 4.0, vel: 0.88 },  // C5
        { t: 56,   div: 'swell', midi: 76, dur: 4.0, vel: 0.86 },  // E5
        { t: 56,   div: 'swell', midi: 79, dur: 4.0, vel: 0.86 },  // G5

        // ============================================================
        // DIMINUENDO - the church recedes and fades
        // Gradually reducing velocity back to ppp
        // ============================================================

        // --- Section 10: ff, beginning to recede ---
        { t: 60,   div: 'pedal', midi: 30, dur: 6.0, vel: 0.65 },  // F#1
        { t: 60,   div: 'pedal', midi: 42, dur: 6.0, vel: 0.65 },  // F#2
        { t: 60,   div: 'great', midi: 54, dur: 6.0, vel: 0.68 },  // F#3
        { t: 60,   div: 'great', midi: 57, dur: 6.0, vel: 0.68 },  // A3
        { t: 60,   div: 'great', midi: 61, dur: 6.0, vel: 0.68 },  // C#4
        { t: 60,   div: 'great', midi: 66, dur: 6.0, vel: 0.65 },  // F#4
        { t: 60,   div: 'swell', midi: 69, dur: 6.0, vel: 0.60 },  // A4
        { t: 60,   div: 'swell', midi: 73, dur: 6.0, vel: 0.58 },  // C#5
        { t: 60,   div: 'swell', midi: 78, dur: 6.0, vel: 0.55 },  // F#5
        { t: 60,   div: 'choir', midi: 57, dur: 6.0, vel: 0.58 },  // A3
        { t: 60,   div: 'choir', midi: 61, dur: 6.0, vel: 0.58 },  // C#4

        // --- Section 11: mf, fading ---
        { t: 66,   div: 'pedal', midi: 30, dur: 2.0, vel: 0.48 },  // F#1 (throb)
        { t: 66,   div: 'pedal', midi: 42, dur: 2.0, vel: 0.48 },  // F#2
        { t: 68,   div: 'pedal', midi: 30, dur: 4.0, vel: 0.45 },  // F#1
        { t: 68,   div: 'pedal', midi: 42, dur: 4.0, vel: 0.45 },  // F#2
        { t: 66,   div: 'great', midi: 54, dur: 6.0, vel: 0.48 },  // F#3
        { t: 66,   div: 'great', midi: 59, dur: 6.0, vel: 0.48 },  // B3
        { t: 66,   div: 'great', midi: 61, dur: 6.0, vel: 0.48 },  // C#4
        { t: 66,   div: 'swell', midi: 66, dur: 6.0, vel: 0.42 },  // F#4
        { t: 66,   div: 'swell', midi: 71, dur: 6.0, vel: 0.40 },  // B4

        // --- Section 12: p, nearly gone ---
        { t: 72,   div: 'pedal', midi: 30, dur: 6.0, vel: 0.30 },  // F#1
        { t: 72,   div: 'pedal', midi: 42, dur: 6.0, vel: 0.30 },  // F#2
        { t: 72,   div: 'great', midi: 54, dur: 6.0, vel: 0.32 },  // F#3
        { t: 72,   div: 'great', midi: 61, dur: 6.0, vel: 0.30 },  // C#4
        { t: 72,   div: 'swell', midi: 66, dur: 6.0, vel: 0.25 },  // F#4

        // --- Section 13: pp, barely audible ---
        { t: 78,   div: 'pedal', midi: 30, dur: 2.0, vel: 0.22 },  // F#1 (last throb)
        { t: 78,   div: 'pedal', midi: 42, dur: 2.0, vel: 0.22 },  // F#2
        { t: 80,   div: 'pedal', midi: 30, dur: 4.0, vel: 0.20 },  // F#1
        { t: 80,   div: 'pedal', midi: 42, dur: 4.0, vel: 0.20 },  // F#2
        { t: 78,   div: 'great', midi: 54, dur: 6.0, vel: 0.22 },  // F#3
        { t: 78,   div: 'great', midi: 61, dur: 6.0, vel: 0.20 },  // C#4

        // --- Section 14: ppp, final open fifth fading to nothing ---
        { t: 84,   div: 'pedal', midi: 30, dur: 8.0, vel: 0.15 },  // F#1
        { t: 84,   div: 'pedal', midi: 42, dur: 8.0, vel: 0.15 },  // F#2
        { t: 84,   div: 'great', midi: 54, dur: 8.0, vel: 0.15 },  // F#3
        { t: 84,   div: 'great', midi: 61, dur: 8.0, vel: 0.12 },  // C#4 (fifth)
        { t: 84,   div: 'swell', midi: 66, dur: 8.0, vel: 0.10 },  // F#4 (last whisper)
    ]
};


// ============================================================
// 4. Guilmant - March from Sonata No. 1 in D minor, Op. 42
// ============================================================
// Third movement: Final - Allegro assai
// Triumphant, processional character. The A sections feature
// running 16th notes with the melody in the top voice.
// The B section has a solemn chorale in half notes.
// Key: D major (resolving from the sonata's D minor)
// Dotted rhythms, full organ, majestic toccata-like drive
// Time signature: 4/4, Allegro assai ~126 BPM
//
// MIDI reference for D major:
//   D2=38, A2=45, D3=50, E3=52, F#3=54, G3=55, A3=57, B3=59
//   C#4=61, D4=62, E4=64, F#4=66, G4=67, A4=69, B4=71
//   C#5=73, D5=74, E5=76, F#5=78, G5=79, A5=81
// ============================================================

const PIECE_GUILMANT_MARCH = {
    title: "March from Sonata No. 1",
    composer: "Alexandre Guilmant",
    catalog: "Op. 42",
    key: "D major",
    tempo: 126,
    tempoChanges: [
        { t: 0, tempo: 126, label: "Allegro assai" },
        { t: 48, tempo: 92, label: "Chorale - Andante" },
        { t: 72, tempo: 126, label: "A tempo - Allegro assai" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ============================================================
        // SECTION A - Brilliant toccata-like opening
        // Running 16th notes, bold D major, dotted rhythms
        // Full organ, majestic processional
        // ============================================================

        // --- Bar 1: D major fanfare opening ---
        // RH: Bold D5 dotted rhythm + 16th-note flourish
        { t: 0,    div: 'great', midi: 74, dur: 1.5, vel: 0.90 },   // D5 dotted quarter
        { t: 1.5,  div: 'great', midi: 73, dur: 0.25, vel: 0.85 },  // C#5 16th
        { t: 1.75, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },  // D5 16th
        { t: 2,    div: 'great', midi: 76, dur: 1.0, vel: 0.88 },   // E5 quarter
        { t: 3,    div: 'great', midi: 78, dur: 0.5, vel: 0.88 },   // F#5 eighth
        { t: 3.5,  div: 'great', midi: 76, dur: 0.5, vel: 0.86 },   // E5 eighth
        // LH: chord support
        { t: 0,    div: 'swell', midi: 62, dur: 2.0, vel: 0.75 },   // D4
        { t: 0,    div: 'swell', midi: 66, dur: 2.0, vel: 0.75 },   // F#4
        { t: 0,    div: 'swell', midi: 69, dur: 2.0, vel: 0.75 },   // A4
        { t: 2,    div: 'swell', midi: 64, dur: 2.0, vel: 0.75 },   // E4
        { t: 2,    div: 'swell', midi: 67, dur: 2.0, vel: 0.75 },   // G4
        { t: 2,    div: 'swell', midi: 71, dur: 2.0, vel: 0.75 },   // B4
        // Pedal: D
        { t: 0,    div: 'pedal', midi: 38, dur: 4.0, vel: 0.88 },   // D2

        // --- Bar 2: Continuation with running 16ths ---
        { t: 4,    div: 'great', midi: 74, dur: 0.25, vel: 0.86 },  // D5
        { t: 4.25, div: 'great', midi: 76, dur: 0.25, vel: 0.86 },  // E5
        { t: 4.5,  div: 'great', midi: 78, dur: 0.25, vel: 0.88 },  // F#5
        { t: 4.75, div: 'great', midi: 76, dur: 0.25, vel: 0.86 },  // E5
        { t: 5,    div: 'great', midi: 74, dur: 0.25, vel: 0.86 },  // D5
        { t: 5.25, div: 'great', midi: 73, dur: 0.25, vel: 0.84 },  // C#5
        { t: 5.5,  div: 'great', midi: 74, dur: 0.25, vel: 0.86 },  // D5
        { t: 5.75, div: 'great', midi: 71, dur: 0.25, vel: 0.84 },  // B4
        { t: 6,    div: 'great', midi: 69, dur: 1.5, vel: 0.88 },   // A4 dotted quarter
        { t: 7.5,  div: 'great', midi: 71, dur: 0.5, vel: 0.85 },   // B4 eighth
        // LH
        { t: 4,    div: 'swell', midi: 62, dur: 2.0, vel: 0.75 },   // D4
        { t: 4,    div: 'swell', midi: 66, dur: 2.0, vel: 0.75 },   // F#4
        { t: 6,    div: 'swell', midi: 61, dur: 2.0, vel: 0.75 },   // C#4
        { t: 6,    div: 'swell', midi: 64, dur: 2.0, vel: 0.75 },   // E4
        // Pedal: D then A
        { t: 4,    div: 'pedal', midi: 38, dur: 2.0, vel: 0.88 },   // D2
        { t: 6,    div: 'pedal', midi: 45, dur: 2.0, vel: 0.88 },   // A2

        // --- Bar 3: Ascending scale passage ---
        { t: 8,    div: 'great', midi: 73, dur: 0.25, vel: 0.86 },  // C#5
        { t: 8.25, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },  // D5
        { t: 8.5,  div: 'great', midi: 76, dur: 0.25, vel: 0.88 },  // E5
        { t: 8.75, div: 'great', midi: 78, dur: 0.25, vel: 0.90 },  // F#5
        { t: 9,    div: 'great', midi: 79, dur: 0.25, vel: 0.90 },  // G5
        { t: 9.25, div: 'great', midi: 78, dur: 0.25, vel: 0.88 },  // F#5
        { t: 9.5,  div: 'great', midi: 76, dur: 0.25, vel: 0.88 },  // E5
        { t: 9.75, div: 'great', midi: 74, dur: 0.25, vel: 0.86 },  // D5
        { t: 10,   div: 'great', midi: 73, dur: 0.25, vel: 0.86 },  // C#5
        { t: 10.25,div: 'great', midi: 71, dur: 0.25, vel: 0.84 },  // B4
        { t: 10.5, div: 'great', midi: 69, dur: 0.25, vel: 0.84 },  // A4
        { t: 10.75,div: 'great', midi: 71, dur: 0.25, vel: 0.84 },  // B4
        { t: 11,   div: 'great', midi: 73, dur: 0.5, vel: 0.86 },   // C#5
        { t: 11.5, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },   // D5
        // LH
        { t: 8,    div: 'swell', midi: 57, dur: 2.0, vel: 0.75 },   // A3
        { t: 8,    div: 'swell', midi: 61, dur: 2.0, vel: 0.75 },   // C#4
        { t: 10,   div: 'swell', midi: 57, dur: 2.0, vel: 0.75 },   // A3
        { t: 10,   div: 'swell', midi: 62, dur: 2.0, vel: 0.75 },   // D4
        // Pedal
        { t: 8,    div: 'pedal', midi: 45, dur: 2.0, vel: 0.88 },   // A2
        { t: 10,   div: 'pedal', midi: 38, dur: 2.0, vel: 0.88 },   // D2

        // --- Bar 4: Dotted rhythm fanfare ---
        { t: 12,   div: 'great', midi: 76, dur: 1.5, vel: 0.90 },   // E5 dotted quarter
        { t: 13.5, div: 'great', midi: 74, dur: 0.25, vel: 0.85 },  // D5 16th
        { t: 13.75,div: 'great', midi: 76, dur: 0.25, vel: 0.88 },  // E5 16th
        { t: 14,   div: 'great', midi: 78, dur: 1.5, vel: 0.90 },   // F#5 dotted quarter
        { t: 15.5, div: 'great', midi: 76, dur: 0.25, vel: 0.86 },  // E5 16th
        { t: 15.75,div: 'great', midi: 74, dur: 0.25, vel: 0.86 },  // D5 16th
        // LH
        { t: 12,   div: 'swell', midi: 61, dur: 2.0, vel: 0.75 },   // C#4
        { t: 12,   div: 'swell', midi: 64, dur: 2.0, vel: 0.75 },   // E4
        { t: 12,   div: 'swell', midi: 69, dur: 2.0, vel: 0.75 },   // A4
        { t: 14,   div: 'swell', midi: 62, dur: 2.0, vel: 0.75 },   // D4
        { t: 14,   div: 'swell', midi: 66, dur: 2.0, vel: 0.75 },   // F#4
        { t: 14,   div: 'swell', midi: 69, dur: 2.0, vel: 0.75 },   // A4
        // Pedal: A then D
        { t: 12,   div: 'pedal', midi: 45, dur: 2.0, vel: 0.88 },   // A2
        { t: 14,   div: 'pedal', midi: 38, dur: 2.0, vel: 0.90 },   // D2

        // --- Bar 5: More 16th-note toccata figuration ---
        { t: 16,   div: 'great', midi: 74, dur: 0.25, vel: 0.88 },  // D5
        { t: 16.25,div: 'great', midi: 73, dur: 0.25, vel: 0.86 },  // C#5
        { t: 16.5, div: 'great', midi: 71, dur: 0.25, vel: 0.86 },  // B4
        { t: 16.75,div: 'great', midi: 69, dur: 0.25, vel: 0.84 },  // A4
        { t: 17,   div: 'great', midi: 71, dur: 0.25, vel: 0.86 },  // B4
        { t: 17.25,div: 'great', midi: 73, dur: 0.25, vel: 0.86 },  // C#5
        { t: 17.5, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },  // D5
        { t: 17.75,div: 'great', midi: 76, dur: 0.25, vel: 0.88 },  // E5
        { t: 18,   div: 'great', midi: 78, dur: 0.25, vel: 0.90 },  // F#5
        { t: 18.25,div: 'great', midi: 76, dur: 0.25, vel: 0.88 },  // E5
        { t: 18.5, div: 'great', midi: 78, dur: 0.25, vel: 0.90 },  // F#5
        { t: 18.75,div: 'great', midi: 79, dur: 0.25, vel: 0.90 },  // G5
        { t: 19,   div: 'great', midi: 81, dur: 0.5, vel: 0.92 },   // A5
        { t: 19.5, div: 'great', midi: 78, dur: 0.5, vel: 0.88 },   // F#5
        // LH
        { t: 16,   div: 'swell', midi: 66, dur: 2.0, vel: 0.75 },   // F#4
        { t: 16,   div: 'swell', midi: 62, dur: 2.0, vel: 0.75 },   // D4
        { t: 18,   div: 'swell', midi: 62, dur: 2.0, vel: 0.75 },   // D4
        { t: 18,   div: 'swell', midi: 66, dur: 2.0, vel: 0.75 },   // F#4
        { t: 18,   div: 'swell', midi: 69, dur: 2.0, vel: 0.75 },   // A4
        // Pedal
        { t: 16,   div: 'pedal', midi: 50, dur: 2.0, vel: 0.88 },   // D3
        { t: 18,   div: 'pedal', midi: 38, dur: 2.0, vel: 0.90 },   // D2

        // --- Bar 6: Cadential passage, half close on A ---
        { t: 20,   div: 'great', midi: 74, dur: 1.5, vel: 0.88 },   // D5 dotted
        { t: 21.5, div: 'great', midi: 73, dur: 0.25, vel: 0.84 },  // C#5
        { t: 21.75,div: 'great', midi: 71, dur: 0.25, vel: 0.84 },  // B4
        { t: 22,   div: 'great', midi: 69, dur: 1.0, vel: 0.86 },   // A4
        { t: 23,   div: 'great', midi: 73, dur: 0.5, vel: 0.86 },   // C#5
        { t: 23.5, div: 'great', midi: 69, dur: 0.5, vel: 0.84 },   // A4
        // LH
        { t: 20,   div: 'swell', midi: 62, dur: 2.0, vel: 0.75 },   // D4
        { t: 20,   div: 'swell', midi: 66, dur: 2.0, vel: 0.75 },   // F#4
        { t: 22,   div: 'swell', midi: 61, dur: 2.0, vel: 0.75 },   // C#4
        { t: 22,   div: 'swell', midi: 64, dur: 2.0, vel: 0.75 },   // E4
        // Pedal
        { t: 20,   div: 'pedal', midi: 50, dur: 2.0, vel: 0.88 },   // D3
        { t: 22,   div: 'pedal', midi: 45, dur: 2.0, vel: 0.88 },   // A2

        // --- Bar 7: Second subject - espressivo, more sustained ---
        { t: 24,   div: 'great', midi: 69, dur: 2.0, vel: 0.82 },   // A4 half
        { t: 26,   div: 'great', midi: 71, dur: 1.0, vel: 0.82 },   // B4
        { t: 27,   div: 'great', midi: 73, dur: 1.0, vel: 0.84 },   // C#5
        // Swell: expressive inner voice
        { t: 24,   div: 'swell', midi: 62, dur: 2.0, vel: 0.72 },   // D4
        { t: 24,   div: 'swell', midi: 66, dur: 2.0, vel: 0.72 },   // F#4
        { t: 26,   div: 'swell', midi: 64, dur: 2.0, vel: 0.72 },   // E4
        { t: 26,   div: 'swell', midi: 67, dur: 2.0, vel: 0.72 },   // G4
        // Pedal
        { t: 24,   div: 'pedal', midi: 38, dur: 4.0, vel: 0.82 },   // D2

        // --- Bar 8: Second subject continued ---
        { t: 28,   div: 'great', midi: 74, dur: 2.0, vel: 0.84 },   // D5
        { t: 30,   div: 'great', midi: 73, dur: 1.0, vel: 0.82 },   // C#5
        { t: 31,   div: 'great', midi: 71, dur: 1.0, vel: 0.82 },   // B4
        // Swell
        { t: 28,   div: 'swell', midi: 66, dur: 2.0, vel: 0.72 },   // F#4
        { t: 28,   div: 'swell', midi: 69, dur: 2.0, vel: 0.72 },   // A4
        { t: 30,   div: 'swell', midi: 64, dur: 2.0, vel: 0.72 },   // E4
        { t: 30,   div: 'swell', midi: 67, dur: 2.0, vel: 0.72 },   // G4
        // Pedal
        { t: 28,   div: 'pedal', midi: 50, dur: 2.0, vel: 0.82 },   // D3
        { t: 30,   div: 'pedal', midi: 45, dur: 2.0, vel: 0.82 },   // A2

        // --- Bar 9: Return of 16th notes ---
        { t: 32,   div: 'great', midi: 69, dur: 0.25, vel: 0.88 },  // A4
        { t: 32.25,div: 'great', midi: 71, dur: 0.25, vel: 0.88 },  // B4
        { t: 32.5, div: 'great', midi: 73, dur: 0.25, vel: 0.88 },  // C#5
        { t: 32.75,div: 'great', midi: 74, dur: 0.25, vel: 0.90 },  // D5
        { t: 33,   div: 'great', midi: 76, dur: 0.25, vel: 0.90 },  // E5
        { t: 33.25,div: 'great', midi: 74, dur: 0.25, vel: 0.88 },  // D5
        { t: 33.5, div: 'great', midi: 73, dur: 0.25, vel: 0.88 },  // C#5
        { t: 33.75,div: 'great', midi: 71, dur: 0.25, vel: 0.86 },  // B4
        { t: 34,   div: 'great', midi: 69, dur: 0.25, vel: 0.86 },  // A4
        { t: 34.25,div: 'great', midi: 66, dur: 0.25, vel: 0.84 },  // F#4
        { t: 34.5, div: 'great', midi: 69, dur: 0.25, vel: 0.86 },  // A4
        { t: 34.75,div: 'great', midi: 71, dur: 0.25, vel: 0.86 },  // B4
        { t: 35,   div: 'great', midi: 73, dur: 0.5, vel: 0.88 },   // C#5
        { t: 35.5, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },   // D5
        // LH
        { t: 32,   div: 'swell', midi: 57, dur: 2.0, vel: 0.75 },   // A3
        { t: 32,   div: 'swell', midi: 61, dur: 2.0, vel: 0.75 },   // C#4
        { t: 34,   div: 'swell', midi: 62, dur: 2.0, vel: 0.75 },   // D4
        { t: 34,   div: 'swell', midi: 66, dur: 2.0, vel: 0.75 },   // F#4
        // Pedal
        { t: 32,   div: 'pedal', midi: 45, dur: 2.0, vel: 0.88 },   // A2
        { t: 34,   div: 'pedal', midi: 38, dur: 2.0, vel: 0.88 },   // D2

        // --- Bar 10: Climactic 16ths into cadence ---
        { t: 36,   div: 'great', midi: 76, dur: 0.25, vel: 0.90 },  // E5
        { t: 36.25,div: 'great', midi: 78, dur: 0.25, vel: 0.90 },  // F#5
        { t: 36.5, div: 'great', midi: 79, dur: 0.25, vel: 0.92 },  // G5
        { t: 36.75,div: 'great', midi: 78, dur: 0.25, vel: 0.90 },  // F#5
        { t: 37,   div: 'great', midi: 76, dur: 0.25, vel: 0.90 },  // E5
        { t: 37.25,div: 'great', midi: 74, dur: 0.25, vel: 0.88 },  // D5
        { t: 37.5, div: 'great', midi: 73, dur: 0.25, vel: 0.88 },  // C#5
        { t: 37.75,div: 'great', midi: 71, dur: 0.25, vel: 0.86 },  // B4
        { t: 38,   div: 'great', midi: 69, dur: 1.5, vel: 0.90 },   // A4 dotted quarter
        { t: 39.5, div: 'great', midi: 71, dur: 0.25, vel: 0.86 },  // B4
        { t: 39.75,div: 'great', midi: 73, dur: 0.25, vel: 0.88 },  // C#5
        // LH
        { t: 36,   div: 'swell', midi: 61, dur: 2.0, vel: 0.75 },   // C#4
        { t: 36,   div: 'swell', midi: 64, dur: 2.0, vel: 0.75 },   // E4
        { t: 38,   div: 'swell', midi: 61, dur: 2.0, vel: 0.78 },   // C#4
        { t: 38,   div: 'swell', midi: 64, dur: 2.0, vel: 0.78 },   // E4
        { t: 38,   div: 'swell', midi: 69, dur: 2.0, vel: 0.78 },   // A4
        // Pedal
        { t: 36,   div: 'pedal', midi: 45, dur: 2.0, vel: 0.88 },   // A2
        { t: 38,   div: 'pedal', midi: 45, dur: 2.0, vel: 0.90 },   // A2

        // --- Bar 11: Grand D major arrival ---
        { t: 40,   div: 'great', midi: 74, dur: 1.5, vel: 0.92 },   // D5 dotted
        { t: 41.5, div: 'great', midi: 73, dur: 0.25, vel: 0.88 },  // C#5
        { t: 41.75,div: 'great', midi: 74, dur: 0.25, vel: 0.90 },  // D5
        { t: 42,   div: 'great', midi: 76, dur: 1.0, vel: 0.90 },   // E5
        { t: 43,   div: 'great', midi: 78, dur: 0.5, vel: 0.90 },   // F#5
        { t: 43.5, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },   // D5
        // LH: full D major
        { t: 40,   div: 'swell', midi: 62, dur: 2.0, vel: 0.78 },   // D4
        { t: 40,   div: 'swell', midi: 66, dur: 2.0, vel: 0.78 },   // F#4
        { t: 40,   div: 'swell', midi: 69, dur: 2.0, vel: 0.78 },   // A4
        { t: 42,   div: 'swell', midi: 64, dur: 2.0, vel: 0.78 },   // E4
        { t: 42,   div: 'swell', midi: 67, dur: 2.0, vel: 0.78 },   // G4
        { t: 42,   div: 'swell', midi: 71, dur: 2.0, vel: 0.78 },   // B4
        // Pedal
        { t: 40,   div: 'pedal', midi: 38, dur: 4.0, vel: 0.92 },   // D2

        // --- Bar 12: Leading into chorale ---
        { t: 44,   div: 'great', midi: 76, dur: 0.25, vel: 0.88 },  // E5
        { t: 44.25,div: 'great', midi: 74, dur: 0.25, vel: 0.88 },  // D5
        { t: 44.5, div: 'great', midi: 73, dur: 0.25, vel: 0.86 },  // C#5
        { t: 44.75,div: 'great', midi: 71, dur: 0.25, vel: 0.86 },  // B4
        { t: 45,   div: 'great', midi: 69, dur: 0.25, vel: 0.86 },  // A4
        { t: 45.25,div: 'great', midi: 71, dur: 0.25, vel: 0.86 },  // B4
        { t: 45.5, div: 'great', midi: 73, dur: 0.25, vel: 0.88 },  // C#5
        { t: 45.75,div: 'great', midi: 69, dur: 0.25, vel: 0.84 },  // A4
        { t: 46,   div: 'great', midi: 66, dur: 1.0, vel: 0.86 },   // F#4
        { t: 47,   div: 'great', midi: 69, dur: 1.0, vel: 0.86 },   // A4
        // LH
        { t: 44,   div: 'swell', midi: 62, dur: 2.0, vel: 0.75 },   // D4
        { t: 44,   div: 'swell', midi: 66, dur: 2.0, vel: 0.75 },   // F#4
        { t: 46,   div: 'swell', midi: 57, dur: 2.0, vel: 0.75 },   // A3
        { t: 46,   div: 'swell', midi: 62, dur: 2.0, vel: 0.75 },   // D4
        // Pedal
        { t: 44,   div: 'pedal', midi: 38, dur: 2.0, vel: 0.88 },   // D2
        { t: 46,   div: 'pedal', midi: 38, dur: 2.0, vel: 0.85 },   // D2

        // ============================================================
        // SECTION B - Solemn Chorale
        // Half notes, voix humaine character, contrasting section
        // Slower tempo, sustained, hymnlike
        // ============================================================

        // --- Chorale phrase 1 (bars 13-16) ---
        // D major chorale: D-F#-A-D  half notes
        { t: 48,   div: 'great', midi: 74, dur: 3.0, vel: 0.78 },   // D5 dotted half
        { t: 48,   div: 'swell', midi: 69, dur: 3.0, vel: 0.70 },   // A4
        { t: 48,   div: 'swell', midi: 66, dur: 3.0, vel: 0.70 },   // F#4
        { t: 48,   div: 'choir', midi: 62, dur: 3.0, vel: 0.68 },   // D4
        { t: 48,   div: 'pedal', midi: 38, dur: 3.0, vel: 0.78 },   // D2

        { t: 51,   div: 'great', midi: 73, dur: 3.0, vel: 0.78 },   // C#5
        { t: 51,   div: 'swell', midi: 69, dur: 3.0, vel: 0.70 },   // A4
        { t: 51,   div: 'swell', midi: 64, dur: 3.0, vel: 0.70 },   // E4
        { t: 51,   div: 'choir', midi: 61, dur: 3.0, vel: 0.68 },   // C#4
        { t: 51,   div: 'pedal', midi: 45, dur: 3.0, vel: 0.78 },   // A2

        { t: 54,   div: 'great', midi: 71, dur: 3.0, vel: 0.78 },   // B4
        { t: 54,   div: 'swell', midi: 67, dur: 3.0, vel: 0.70 },   // G4
        { t: 54,   div: 'swell', midi: 62, dur: 3.0, vel: 0.70 },   // D4
        { t: 54,   div: 'choir', midi: 59, dur: 3.0, vel: 0.68 },   // B3
        { t: 54,   div: 'pedal', midi: 43, dur: 3.0, vel: 0.78 },   // G2

        { t: 57,   div: 'great', midi: 69, dur: 3.0, vel: 0.78 },   // A4
        { t: 57,   div: 'swell', midi: 66, dur: 3.0, vel: 0.70 },   // F#4
        { t: 57,   div: 'swell', midi: 62, dur: 3.0, vel: 0.70 },   // D4
        { t: 57,   div: 'choir', midi: 57, dur: 3.0, vel: 0.68 },   // A3
        { t: 57,   div: 'pedal', midi: 38, dur: 3.0, vel: 0.78 },   // D2

        // --- Chorale phrase 2 (bars 17-20) ---
        { t: 60,   div: 'great', midi: 71, dur: 3.0, vel: 0.78 },   // B4
        { t: 60,   div: 'swell', midi: 67, dur: 3.0, vel: 0.70 },   // G4
        { t: 60,   div: 'swell', midi: 62, dur: 3.0, vel: 0.70 },   // D4
        { t: 60,   div: 'choir', midi: 59, dur: 3.0, vel: 0.68 },   // B3
        { t: 60,   div: 'pedal', midi: 43, dur: 3.0, vel: 0.78 },   // G2

        { t: 63,   div: 'great', midi: 73, dur: 3.0, vel: 0.80 },   // C#5
        { t: 63,   div: 'swell', midi: 69, dur: 3.0, vel: 0.72 },   // A4
        { t: 63,   div: 'swell', midi: 64, dur: 3.0, vel: 0.72 },   // E4
        { t: 63,   div: 'choir', midi: 61, dur: 3.0, vel: 0.70 },   // C#4
        { t: 63,   div: 'pedal', midi: 45, dur: 3.0, vel: 0.78 },   // A2

        { t: 66,   div: 'great', midi: 74, dur: 4.0, vel: 0.82 },   // D5 (whole)
        { t: 66,   div: 'swell', midi: 69, dur: 4.0, vel: 0.74 },   // A4
        { t: 66,   div: 'swell', midi: 66, dur: 4.0, vel: 0.74 },   // F#4
        { t: 66,   div: 'choir', midi: 62, dur: 4.0, vel: 0.72 },   // D4
        { t: 66,   div: 'pedal', midi: 38, dur: 4.0, vel: 0.80 },   // D2

        // --- Pedal flourish at end of chorale ---
        { t: 70,   div: 'pedal', midi: 38, dur: 0.5, vel: 0.82 },   // D2
        { t: 70.5, div: 'pedal', midi: 40, dur: 0.5, vel: 0.82 },   // E2
        { t: 71,   div: 'pedal', midi: 42, dur: 0.5, vel: 0.84 },   // F#2
        { t: 71.5, div: 'pedal', midi: 45, dur: 0.5, vel: 0.84 },   // A2

        // ============================================================
        // SECTION A' - Return of toccata, building to grand coda
        // Even more brilliant, full organ
        // ============================================================

        // --- Bar 21: Toccata returns, D major ---
        { t: 72,   div: 'great', midi: 74, dur: 1.5, vel: 0.92 },   // D5 dotted
        { t: 73.5, div: 'great', midi: 73, dur: 0.25, vel: 0.88 },  // C#5
        { t: 73.75,div: 'great', midi: 74, dur: 0.25, vel: 0.90 },  // D5
        { t: 74,   div: 'great', midi: 76, dur: 1.0, vel: 0.90 },   // E5
        { t: 75,   div: 'great', midi: 78, dur: 0.5, vel: 0.92 },   // F#5
        { t: 75.5, div: 'great', midi: 76, dur: 0.5, vel: 0.90 },   // E5
        // LH
        { t: 72,   div: 'swell', midi: 62, dur: 2.0, vel: 0.78 },   // D4
        { t: 72,   div: 'swell', midi: 66, dur: 2.0, vel: 0.78 },   // F#4
        { t: 72,   div: 'swell', midi: 69, dur: 2.0, vel: 0.78 },   // A4
        { t: 74,   div: 'swell', midi: 64, dur: 2.0, vel: 0.78 },   // E4
        { t: 74,   div: 'swell', midi: 67, dur: 2.0, vel: 0.78 },   // G4
        { t: 74,   div: 'swell', midi: 71, dur: 2.0, vel: 0.78 },   // B4
        // Pedal
        { t: 72,   div: 'pedal', midi: 38, dur: 4.0, vel: 0.92 },   // D2

        // --- Bar 22: Running 16ths ascending ---
        { t: 76,   div: 'great', midi: 74, dur: 0.25, vel: 0.90 },  // D5
        { t: 76.25,div: 'great', midi: 76, dur: 0.25, vel: 0.90 },  // E5
        { t: 76.5, div: 'great', midi: 78, dur: 0.25, vel: 0.92 },  // F#5
        { t: 76.75,div: 'great', midi: 79, dur: 0.25, vel: 0.92 },  // G5
        { t: 77,   div: 'great', midi: 81, dur: 0.25, vel: 0.94 },  // A5
        { t: 77.25,div: 'great', midi: 79, dur: 0.25, vel: 0.92 },  // G5
        { t: 77.5, div: 'great', midi: 78, dur: 0.25, vel: 0.92 },  // F#5
        { t: 77.75,div: 'great', midi: 76, dur: 0.25, vel: 0.90 },  // E5
        { t: 78,   div: 'great', midi: 74, dur: 0.25, vel: 0.90 },  // D5
        { t: 78.25,div: 'great', midi: 73, dur: 0.25, vel: 0.88 },  // C#5
        { t: 78.5, div: 'great', midi: 71, dur: 0.25, vel: 0.88 },  // B4
        { t: 78.75,div: 'great', midi: 69, dur: 0.25, vel: 0.86 },  // A4
        { t: 79,   div: 'great', midi: 71, dur: 0.5, vel: 0.88 },   // B4
        { t: 79.5, div: 'great', midi: 73, dur: 0.5, vel: 0.88 },   // C#5
        // LH
        { t: 76,   div: 'swell', midi: 62, dur: 2.0, vel: 0.78 },   // D4
        { t: 76,   div: 'swell', midi: 66, dur: 2.0, vel: 0.78 },   // F#4
        { t: 78,   div: 'swell', midi: 57, dur: 2.0, vel: 0.78 },   // A3
        { t: 78,   div: 'swell', midi: 61, dur: 2.0, vel: 0.78 },   // C#4
        // Pedal
        { t: 76,   div: 'pedal', midi: 38, dur: 2.0, vel: 0.90 },   // D2
        { t: 78,   div: 'pedal', midi: 45, dur: 2.0, vel: 0.90 },   // A2

        // --- Bar 23: Grand cadential approach ---
        { t: 80,   div: 'great', midi: 74, dur: 0.25, vel: 0.92 },  // D5
        { t: 80.25,div: 'great', midi: 73, dur: 0.25, vel: 0.90 },  // C#5
        { t: 80.5, div: 'great', midi: 74, dur: 0.25, vel: 0.92 },  // D5
        { t: 80.75,div: 'great', midi: 76, dur: 0.25, vel: 0.92 },  // E5
        { t: 81,   div: 'great', midi: 78, dur: 0.25, vel: 0.94 },  // F#5
        { t: 81.25,div: 'great', midi: 76, dur: 0.25, vel: 0.92 },  // E5
        { t: 81.5, div: 'great', midi: 78, dur: 0.25, vel: 0.94 },  // F#5
        { t: 81.75,div: 'great', midi: 79, dur: 0.25, vel: 0.94 },  // G5
        { t: 82,   div: 'great', midi: 81, dur: 1.0, vel: 0.95 },   // A5 (peak!)
        { t: 83,   div: 'great', midi: 78, dur: 0.5, vel: 0.92 },   // F#5
        { t: 83.5, div: 'great', midi: 74, dur: 0.5, vel: 0.90 },   // D5
        // LH: full chords
        { t: 80,   div: 'swell', midi: 62, dur: 2.0, vel: 0.80 },   // D4
        { t: 80,   div: 'swell', midi: 66, dur: 2.0, vel: 0.80 },   // F#4
        { t: 80,   div: 'swell', midi: 69, dur: 2.0, vel: 0.80 },   // A4
        { t: 82,   div: 'swell', midi: 62, dur: 2.0, vel: 0.82 },   // D4
        { t: 82,   div: 'swell', midi: 66, dur: 2.0, vel: 0.82 },   // F#4
        { t: 82,   div: 'swell', midi: 69, dur: 2.0, vel: 0.82 },   // A4
        // Choir: doubling
        { t: 80,   div: 'choir', midi: 57, dur: 4.0, vel: 0.75 },   // A3
        { t: 80,   div: 'choir', midi: 62, dur: 4.0, vel: 0.75 },   // D4
        // Pedal: D with authority
        { t: 80,   div: 'pedal', midi: 38, dur: 4.0, vel: 0.95 },   // D2

        // ============================================================
        // CODA - Grand conclusion, fff, D major triumph
        // ============================================================

        // --- Bar 24: Final D major chord - full organ ---
        { t: 84,   div: 'great', midi: 74, dur: 1.5, vel: 0.95 },   // D5 dotted
        { t: 85.5, div: 'great', midi: 73, dur: 0.25, vel: 0.90 },  // C#5
        { t: 85.75,div: 'great', midi: 74, dur: 0.25, vel: 0.92 },  // D5
        { t: 86,   div: 'great', midi: 78, dur: 2.0, vel: 0.95 },   // F#5 half
        // LH
        { t: 84,   div: 'swell', midi: 62, dur: 4.0, vel: 0.82 },   // D4
        { t: 84,   div: 'swell', midi: 66, dur: 4.0, vel: 0.82 },   // F#4
        { t: 84,   div: 'swell', midi: 69, dur: 4.0, vel: 0.82 },   // A4
        // Choir
        { t: 84,   div: 'choir', midi: 57, dur: 4.0, vel: 0.78 },   // A3
        { t: 84,   div: 'choir', midi: 62, dur: 4.0, vel: 0.78 },   // D4
        // Pedal
        { t: 84,   div: 'pedal', midi: 38, dur: 4.0, vel: 0.95 },   // D2

        // --- Bar 25: Final held chord ---
        { t: 88,   div: 'great', midi: 74, dur: 4.0, vel: 0.95 },   // D5
        { t: 88,   div: 'great', midi: 78, dur: 4.0, vel: 0.92 },   // F#5
        { t: 88,   div: 'great', midi: 81, dur: 4.0, vel: 0.90 },   // A5
        { t: 88,   div: 'swell', midi: 62, dur: 4.0, vel: 0.85 },   // D4
        { t: 88,   div: 'swell', midi: 66, dur: 4.0, vel: 0.85 },   // F#4
        { t: 88,   div: 'swell', midi: 69, dur: 4.0, vel: 0.85 },   // A4
        { t: 88,   div: 'choir', midi: 57, dur: 4.0, vel: 0.80 },   // A3
        { t: 88,   div: 'choir', midi: 62, dur: 4.0, vel: 0.80 },   // D4
        { t: 88,   div: 'choir', midi: 66, dur: 4.0, vel: 0.80 },   // F#4
        { t: 88,   div: 'pedal', midi: 38, dur: 4.0, vel: 0.95 },   // D2
        { t: 88,   div: 'pedal', midi: 50, dur: 4.0, vel: 0.92 },   // D3
    ]
};
