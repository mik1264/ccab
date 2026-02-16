// Bach Organ Works Volume 2 - Cathedral Grand organ simulator
// MIDI reference: C3=48, D3=50, Eb3=51, E3=52, F3=53, G3=55, Ab3=56, A3=57, Bb3=58, B3=59
//                 C4=60, D4=62, Eb4=63, E4=64, F4=65, G4=67, Ab4=68, A4=69, Bb4=70, B4=71
//                 C5=72, D5=74, Eb5=75, E5=76, F5=77, G5=79, Ab5=80, A5=81, Bb5=82

// ============================================================
// 1. Passacaglia in C minor, BWV 582
//    Ground bass theme (8 bars in 3/4) + Variations 1-3
//    Key: C minor (Bb, Eb, Ab). Tempo ~60
//    The famous descending ostinato in pedal
//    Based on André Raison's Christe: Trio en passacaille
// ============================================================

const PIECE_PASSACAGLIA = {
    title: "Passacaglia in C minor",
    composer: "J.S. Bach",
    key: 'C minor',
    catalog: "BWV 582",
    tempo: 60,
    tempoChanges: [{ t: 0, tempo: 60, label: 'Andante' }],
    registration: {
        great: ['gt-principal8', 'gt-octave4'],
        swell: ['sw-gedeckt8', 'sw-salicional8'],
        choir: [],
        pedal: ['pd-principal16', 'pd-subbass16']
    },
    events: [
        // ======== THEME (bars 1-8): Pedal solo, 3/4 time ========
        // Each bar = 3 beats. The famous descending ground bass.
        // Bar 1: C3 (dotted half note)
        { t: 0, div: 'pedal', midi: 48, dur: 3, vel: 0.8 },

        // Bar 2: Bb2-Ab2 (half + quarter)
        { t: 3, div: 'pedal', midi: 46, dur: 2, vel: 0.75 },
        { t: 5, div: 'pedal', midi: 44, dur: 1, vel: 0.7 },

        // Bar 3: G2 (dotted half)
        { t: 6, div: 'pedal', midi: 43, dur: 3, vel: 0.75 },

        // Bar 4: Ab2-G2-F2 (quarter each)
        { t: 9, div: 'pedal', midi: 44, dur: 1, vel: 0.7 },
        { t: 10, div: 'pedal', midi: 43, dur: 1, vel: 0.7 },
        { t: 11, div: 'pedal', midi: 41, dur: 1, vel: 0.7 },

        // Bar 5: Eb2 (dotted half)
        { t: 12, div: 'pedal', midi: 39, dur: 3, vel: 0.75 },

        // Bar 6: F2-G2 (half + quarter)
        { t: 15, div: 'pedal', midi: 41, dur: 2, vel: 0.7 },
        { t: 17, div: 'pedal', midi: 43, dur: 1, vel: 0.7 },

        // Bar 7: Ab2-Bb2-Ab2 (quarter each)
        { t: 18, div: 'pedal', midi: 44, dur: 1, vel: 0.7 },
        { t: 19, div: 'pedal', midi: 46, dur: 1, vel: 0.7 },
        { t: 20, div: 'pedal', midi: 44, dur: 1, vel: 0.7 },

        // Bar 8: G2 (dotted half, resolving back)
        { t: 21, div: 'pedal', midi: 43, dur: 3, vel: 0.8 },

        // ======== VARIATION 1 (bars 9-16): Theme in pedal, soprano melody on Great ========
        // Pedal repeats ground bass
        { t: 24, div: 'pedal', midi: 48, dur: 3, vel: 0.75 },
        { t: 27, div: 'pedal', midi: 46, dur: 2, vel: 0.7 },
        { t: 29, div: 'pedal', midi: 44, dur: 1, vel: 0.65 },
        { t: 30, div: 'pedal', midi: 43, dur: 3, vel: 0.7 },
        { t: 33, div: 'pedal', midi: 44, dur: 1, vel: 0.65 },
        { t: 34, div: 'pedal', midi: 43, dur: 1, vel: 0.65 },
        { t: 35, div: 'pedal', midi: 41, dur: 1, vel: 0.65 },
        { t: 36, div: 'pedal', midi: 39, dur: 3, vel: 0.7 },
        { t: 39, div: 'pedal', midi: 41, dur: 2, vel: 0.65 },
        { t: 41, div: 'pedal', midi: 43, dur: 1, vel: 0.65 },
        { t: 42, div: 'pedal', midi: 44, dur: 1, vel: 0.65 },
        { t: 43, div: 'pedal', midi: 46, dur: 1, vel: 0.65 },
        { t: 44, div: 'pedal', midi: 44, dur: 1, vel: 0.65 },
        { t: 45, div: 'pedal', midi: 43, dur: 3, vel: 0.7 },

        // Soprano melody (Great) - lyrical quarter-note line
        // Bar 9: G4-Ab4-G4
        { t: 24, div: 'great', midi: 67, dur: 1, vel: 0.7 },
        { t: 25, div: 'great', midi: 68, dur: 1, vel: 0.7 },
        { t: 26, div: 'great', midi: 67, dur: 1, vel: 0.7 },
        // Bar 10: F4-Eb4-D4
        { t: 27, div: 'great', midi: 65, dur: 1, vel: 0.7 },
        { t: 28, div: 'great', midi: 63, dur: 1, vel: 0.68 },
        { t: 29, div: 'great', midi: 62, dur: 1, vel: 0.68 },
        // Bar 11: Eb4 (dotted half)
        { t: 30, div: 'great', midi: 63, dur: 3, vel: 0.72 },
        // Bar 12: D4-Eb4-F4
        { t: 33, div: 'great', midi: 62, dur: 1, vel: 0.68 },
        { t: 34, div: 'great', midi: 63, dur: 1, vel: 0.68 },
        { t: 35, div: 'great', midi: 65, dur: 1, vel: 0.7 },
        // Bar 13: G4 (dotted half)
        { t: 36, div: 'great', midi: 67, dur: 3, vel: 0.72 },
        // Bar 14: Ab4-G4-F4
        { t: 39, div: 'great', midi: 68, dur: 1, vel: 0.7 },
        { t: 40, div: 'great', midi: 67, dur: 1, vel: 0.7 },
        { t: 41, div: 'great', midi: 65, dur: 1, vel: 0.7 },
        // Bar 15: Eb4-D4-Eb4
        { t: 42, div: 'great', midi: 63, dur: 1, vel: 0.68 },
        { t: 43, div: 'great', midi: 62, dur: 1, vel: 0.68 },
        { t: 44, div: 'great', midi: 63, dur: 1, vel: 0.68 },
        // Bar 16: C4 (dotted half)
        { t: 45, div: 'great', midi: 60, dur: 3, vel: 0.72 },

        // ======== VARIATION 2 (bars 17-24): Two upper voices in counterpoint ========
        // Pedal ground bass continues
        { t: 48, div: 'pedal', midi: 48, dur: 3, vel: 0.7 },
        { t: 51, div: 'pedal', midi: 46, dur: 2, vel: 0.65 },
        { t: 53, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 54, div: 'pedal', midi: 43, dur: 3, vel: 0.65 },
        { t: 57, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 58, div: 'pedal', midi: 43, dur: 1, vel: 0.6 },
        { t: 59, div: 'pedal', midi: 41, dur: 1, vel: 0.6 },
        { t: 60, div: 'pedal', midi: 39, dur: 3, vel: 0.65 },
        { t: 63, div: 'pedal', midi: 41, dur: 2, vel: 0.6 },
        { t: 65, div: 'pedal', midi: 43, dur: 1, vel: 0.6 },
        { t: 66, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 67, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 68, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 69, div: 'pedal', midi: 43, dur: 3, vel: 0.65 },

        // Soprano (Great) - eighth-note flowing line
        // Bar 17
        { t: 48, div: 'great', midi: 72, dur: 0.5, vel: 0.72 },    // C5
        { t: 48.5, div: 'great', midi: 74, dur: 0.5, vel: 0.7 },   // D5
        { t: 49, div: 'great', midi: 75, dur: 0.5, vel: 0.72 },    // Eb5
        { t: 49.5, div: 'great', midi: 74, dur: 0.5, vel: 0.7 },   // D5
        { t: 50, div: 'great', midi: 72, dur: 0.5, vel: 0.72 },    // C5
        { t: 50.5, div: 'great', midi: 70, dur: 0.5, vel: 0.7 },   // Bb4
        // Bar 18
        { t: 51, div: 'great', midi: 68, dur: 0.5, vel: 0.72 },    // Ab4
        { t: 51.5, div: 'great', midi: 70, dur: 0.5, vel: 0.7 },   // Bb4
        { t: 52, div: 'great', midi: 72, dur: 0.5, vel: 0.72 },    // C5
        { t: 52.5, div: 'great', midi: 70, dur: 0.5, vel: 0.7 },   // Bb4
        { t: 53, div: 'great', midi: 68, dur: 0.5, vel: 0.72 },    // Ab4
        { t: 53.5, div: 'great', midi: 67, dur: 0.5, vel: 0.7 },   // G4
        // Bar 19
        { t: 54, div: 'great', midi: 67, dur: 0.5, vel: 0.72 },    // G4
        { t: 54.5, div: 'great', midi: 68, dur: 0.5, vel: 0.7 },   // Ab4
        { t: 55, div: 'great', midi: 70, dur: 0.5, vel: 0.72 },    // Bb4
        { t: 55.5, div: 'great', midi: 72, dur: 0.5, vel: 0.7 },   // C5
        { t: 56, div: 'great', midi: 74, dur: 0.5, vel: 0.72 },    // D5
        { t: 56.5, div: 'great', midi: 72, dur: 0.5, vel: 0.7 },   // C5
        // Bar 20
        { t: 57, div: 'great', midi: 70, dur: 0.5, vel: 0.72 },    // Bb4
        { t: 57.5, div: 'great', midi: 68, dur: 0.5, vel: 0.7 },   // Ab4
        { t: 58, div: 'great', midi: 67, dur: 0.5, vel: 0.72 },    // G4
        { t: 58.5, div: 'great', midi: 65, dur: 0.5, vel: 0.7 },   // F4
        { t: 59, div: 'great', midi: 63, dur: 0.5, vel: 0.72 },    // Eb4
        { t: 59.5, div: 'great', midi: 62, dur: 0.5, vel: 0.7 },   // D4
        // Bar 21
        { t: 60, div: 'great', midi: 63, dur: 0.5, vel: 0.72 },    // Eb4
        { t: 60.5, div: 'great', midi: 65, dur: 0.5, vel: 0.7 },   // F4
        { t: 61, div: 'great', midi: 67, dur: 0.5, vel: 0.72 },    // G4
        { t: 61.5, div: 'great', midi: 68, dur: 0.5, vel: 0.7 },   // Ab4
        { t: 62, div: 'great', midi: 70, dur: 0.5, vel: 0.72 },    // Bb4
        { t: 62.5, div: 'great', midi: 72, dur: 0.5, vel: 0.7 },   // C5
        // Bar 22
        { t: 63, div: 'great', midi: 74, dur: 0.5, vel: 0.72 },    // D5
        { t: 63.5, div: 'great', midi: 72, dur: 0.5, vel: 0.7 },   // C5
        { t: 64, div: 'great', midi: 70, dur: 0.5, vel: 0.72 },    // Bb4
        { t: 64.5, div: 'great', midi: 68, dur: 0.5, vel: 0.7 },   // Ab4
        { t: 65, div: 'great', midi: 67, dur: 0.5, vel: 0.72 },    // G4
        { t: 65.5, div: 'great', midi: 65, dur: 0.5, vel: 0.7 },   // F4
        // Bar 23
        { t: 66, div: 'great', midi: 63, dur: 0.5, vel: 0.72 },    // Eb4
        { t: 66.5, div: 'great', midi: 62, dur: 0.5, vel: 0.7 },   // D4
        { t: 67, div: 'great', midi: 63, dur: 0.5, vel: 0.72 },    // Eb4
        { t: 67.5, div: 'great', midi: 65, dur: 0.5, vel: 0.7 },   // F4
        { t: 68, div: 'great', midi: 67, dur: 0.5, vel: 0.72 },    // G4
        { t: 68.5, div: 'great', midi: 65, dur: 0.5, vel: 0.7 },   // F4
        // Bar 24
        { t: 69, div: 'great', midi: 63, dur: 1, vel: 0.72 },      // Eb4
        { t: 70, div: 'great', midi: 62, dur: 0.5, vel: 0.7 },     // D4
        { t: 70.5, div: 'great', midi: 60, dur: 1.5, vel: 0.72 },  // C4

        // Alto (Swell) - Var 2 counter-melody
        // Bar 17
        { t: 48, div: 'swell', midi: 60, dur: 1.5, vel: 0.6 },     // C4
        { t: 49.5, div: 'swell', midi: 63, dur: 1.5, vel: 0.6 },   // Eb4
        // Bar 18
        { t: 51, div: 'swell', midi: 62, dur: 1.5, vel: 0.6 },     // D4
        { t: 52.5, div: 'swell', midi: 60, dur: 1.5, vel: 0.6 },   // C4
        // Bar 19
        { t: 54, div: 'swell', midi: 58, dur: 1.5, vel: 0.6 },     // Bb3
        { t: 55.5, div: 'swell', midi: 60, dur: 1.5, vel: 0.6 },   // C4
        // Bar 20
        { t: 57, div: 'swell', midi: 62, dur: 1, vel: 0.6 },       // D4
        { t: 58, div: 'swell', midi: 60, dur: 1, vel: 0.6 },       // C4
        { t: 59, div: 'swell', midi: 58, dur: 1, vel: 0.6 },       // Bb3
        // Bar 21
        { t: 60, div: 'swell', midi: 56, dur: 1.5, vel: 0.6 },     // Ab3
        { t: 61.5, div: 'swell', midi: 58, dur: 1.5, vel: 0.6 },   // Bb3
        // Bar 22
        { t: 63, div: 'swell', midi: 60, dur: 1, vel: 0.6 },       // C4
        { t: 64, div: 'swell', midi: 58, dur: 1, vel: 0.6 },       // Bb3
        { t: 65, div: 'swell', midi: 56, dur: 1, vel: 0.6 },       // Ab3
        // Bar 23
        { t: 66, div: 'swell', midi: 55, dur: 1.5, vel: 0.6 },     // G3
        { t: 67.5, div: 'swell', midi: 56, dur: 1.5, vel: 0.6 },   // Ab3
        // Bar 24
        { t: 69, div: 'swell', midi: 55, dur: 3, vel: 0.62 },      // G3

        // ======== VARIATION 3 (bars 25-32): Three voices, more animated ========
        // Pedal ground bass
        { t: 72, div: 'pedal', midi: 48, dur: 3, vel: 0.7 },
        { t: 75, div: 'pedal', midi: 46, dur: 2, vel: 0.65 },
        { t: 77, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 78, div: 'pedal', midi: 43, dur: 3, vel: 0.65 },
        { t: 81, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 82, div: 'pedal', midi: 43, dur: 1, vel: 0.6 },
        { t: 83, div: 'pedal', midi: 41, dur: 1, vel: 0.6 },
        { t: 84, div: 'pedal', midi: 39, dur: 3, vel: 0.65 },
        { t: 87, div: 'pedal', midi: 41, dur: 2, vel: 0.6 },
        { t: 89, div: 'pedal', midi: 43, dur: 1, vel: 0.6 },
        { t: 90, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 91, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 92, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 93, div: 'pedal', midi: 43, dur: 3, vel: 0.65 },

        // Soprano (Great) - sixteenth-note figurations
        // Bar 25
        { t: 72, div: 'great', midi: 72, dur: 0.25, vel: 0.75 },
        { t: 72.25, div: 'great', midi: 74, dur: 0.25, vel: 0.7 },
        { t: 72.5, div: 'great', midi: 75, dur: 0.25, vel: 0.72 },
        { t: 72.75, div: 'great', midi: 74, dur: 0.25, vel: 0.7 },
        { t: 73, div: 'great', midi: 72, dur: 0.25, vel: 0.75 },
        { t: 73.25, div: 'great', midi: 70, dur: 0.25, vel: 0.7 },
        { t: 73.5, div: 'great', midi: 72, dur: 0.25, vel: 0.72 },
        { t: 73.75, div: 'great', midi: 74, dur: 0.25, vel: 0.7 },
        { t: 74, div: 'great', midi: 75, dur: 0.25, vel: 0.75 },
        { t: 74.25, div: 'great', midi: 74, dur: 0.25, vel: 0.7 },
        { t: 74.5, div: 'great', midi: 72, dur: 0.25, vel: 0.72 },
        { t: 74.75, div: 'great', midi: 70, dur: 0.25, vel: 0.7 },
        // Bar 26
        { t: 75, div: 'great', midi: 68, dur: 0.25, vel: 0.75 },
        { t: 75.25, div: 'great', midi: 70, dur: 0.25, vel: 0.7 },
        { t: 75.5, div: 'great', midi: 72, dur: 0.25, vel: 0.72 },
        { t: 75.75, div: 'great', midi: 70, dur: 0.25, vel: 0.7 },
        { t: 76, div: 'great', midi: 68, dur: 0.25, vel: 0.75 },
        { t: 76.25, div: 'great', midi: 67, dur: 0.25, vel: 0.7 },
        { t: 76.5, div: 'great', midi: 68, dur: 0.25, vel: 0.72 },
        { t: 76.75, div: 'great', midi: 70, dur: 0.25, vel: 0.7 },
        { t: 77, div: 'great', midi: 72, dur: 0.25, vel: 0.75 },
        { t: 77.25, div: 'great', midi: 70, dur: 0.25, vel: 0.7 },
        { t: 77.5, div: 'great', midi: 68, dur: 0.25, vel: 0.72 },
        { t: 77.75, div: 'great', midi: 67, dur: 0.25, vel: 0.7 },
        // Bar 27
        { t: 78, div: 'great', midi: 67, dur: 0.25, vel: 0.75 },
        { t: 78.25, div: 'great', midi: 68, dur: 0.25, vel: 0.7 },
        { t: 78.5, div: 'great', midi: 70, dur: 0.25, vel: 0.72 },
        { t: 78.75, div: 'great', midi: 72, dur: 0.25, vel: 0.7 },
        { t: 79, div: 'great', midi: 74, dur: 0.25, vel: 0.75 },
        { t: 79.25, div: 'great', midi: 72, dur: 0.25, vel: 0.7 },
        { t: 79.5, div: 'great', midi: 70, dur: 0.25, vel: 0.72 },
        { t: 79.75, div: 'great', midi: 68, dur: 0.25, vel: 0.7 },
        { t: 80, div: 'great', midi: 67, dur: 0.25, vel: 0.75 },
        { t: 80.25, div: 'great', midi: 65, dur: 0.25, vel: 0.7 },
        { t: 80.5, div: 'great', midi: 67, dur: 0.25, vel: 0.72 },
        { t: 80.75, div: 'great', midi: 68, dur: 0.25, vel: 0.7 },
        // Bar 28
        { t: 81, div: 'great', midi: 70, dur: 0.25, vel: 0.75 },
        { t: 81.25, div: 'great', midi: 68, dur: 0.25, vel: 0.7 },
        { t: 81.5, div: 'great', midi: 67, dur: 0.25, vel: 0.72 },
        { t: 81.75, div: 'great', midi: 65, dur: 0.25, vel: 0.7 },
        { t: 82, div: 'great', midi: 63, dur: 0.25, vel: 0.75 },
        { t: 82.25, div: 'great', midi: 65, dur: 0.25, vel: 0.7 },
        { t: 82.5, div: 'great', midi: 67, dur: 0.25, vel: 0.72 },
        { t: 82.75, div: 'great', midi: 65, dur: 0.25, vel: 0.7 },
        { t: 83, div: 'great', midi: 63, dur: 0.25, vel: 0.75 },
        { t: 83.25, div: 'great', midi: 62, dur: 0.25, vel: 0.7 },
        { t: 83.5, div: 'great', midi: 60, dur: 0.25, vel: 0.72 },
        { t: 83.75, div: 'great', midi: 62, dur: 0.25, vel: 0.7 },
        // Bar 29
        { t: 84, div: 'great', midi: 63, dur: 0.25, vel: 0.75 },
        { t: 84.25, div: 'great', midi: 65, dur: 0.25, vel: 0.7 },
        { t: 84.5, div: 'great', midi: 67, dur: 0.25, vel: 0.72 },
        { t: 84.75, div: 'great', midi: 68, dur: 0.25, vel: 0.7 },
        { t: 85, div: 'great', midi: 70, dur: 0.25, vel: 0.75 },
        { t: 85.25, div: 'great', midi: 72, dur: 0.25, vel: 0.7 },
        { t: 85.5, div: 'great', midi: 74, dur: 0.25, vel: 0.72 },
        { t: 85.75, div: 'great', midi: 72, dur: 0.25, vel: 0.7 },
        { t: 86, div: 'great', midi: 70, dur: 0.25, vel: 0.75 },
        { t: 86.25, div: 'great', midi: 68, dur: 0.25, vel: 0.7 },
        { t: 86.5, div: 'great', midi: 67, dur: 0.25, vel: 0.72 },
        { t: 86.75, div: 'great', midi: 65, dur: 0.25, vel: 0.7 },
        // Bar 30
        { t: 87, div: 'great', midi: 67, dur: 0.25, vel: 0.75 },
        { t: 87.25, div: 'great', midi: 68, dur: 0.25, vel: 0.7 },
        { t: 87.5, div: 'great', midi: 70, dur: 0.25, vel: 0.72 },
        { t: 87.75, div: 'great', midi: 72, dur: 0.25, vel: 0.7 },
        { t: 88, div: 'great', midi: 74, dur: 0.25, vel: 0.75 },
        { t: 88.25, div: 'great', midi: 72, dur: 0.25, vel: 0.7 },
        { t: 88.5, div: 'great', midi: 70, dur: 0.25, vel: 0.72 },
        { t: 88.75, div: 'great', midi: 68, dur: 0.25, vel: 0.7 },
        { t: 89, div: 'great', midi: 67, dur: 0.25, vel: 0.75 },
        { t: 89.25, div: 'great', midi: 65, dur: 0.25, vel: 0.7 },
        { t: 89.5, div: 'great', midi: 63, dur: 0.25, vel: 0.72 },
        { t: 89.75, div: 'great', midi: 62, dur: 0.25, vel: 0.7 },
        // Bar 31
        { t: 90, div: 'great', midi: 63, dur: 0.25, vel: 0.75 },
        { t: 90.25, div: 'great', midi: 62, dur: 0.25, vel: 0.7 },
        { t: 90.5, div: 'great', midi: 63, dur: 0.25, vel: 0.72 },
        { t: 90.75, div: 'great', midi: 65, dur: 0.25, vel: 0.7 },
        { t: 91, div: 'great', midi: 67, dur: 0.25, vel: 0.75 },
        { t: 91.25, div: 'great', midi: 68, dur: 0.25, vel: 0.7 },
        { t: 91.5, div: 'great', midi: 70, dur: 0.25, vel: 0.72 },
        { t: 91.75, div: 'great', midi: 68, dur: 0.25, vel: 0.7 },
        { t: 92, div: 'great', midi: 67, dur: 0.25, vel: 0.75 },
        { t: 92.25, div: 'great', midi: 65, dur: 0.25, vel: 0.7 },
        { t: 92.5, div: 'great', midi: 63, dur: 0.25, vel: 0.72 },
        { t: 92.75, div: 'great', midi: 62, dur: 0.25, vel: 0.7 },
        // Bar 32
        { t: 93, div: 'great', midi: 60, dur: 1, vel: 0.75 },
        { t: 94, div: 'great', midi: 62, dur: 0.5, vel: 0.7 },
        { t: 94.5, div: 'great', midi: 60, dur: 1.5, vel: 0.72 },

        // Alto voice (Swell) - Var 3
        { t: 72, div: 'swell', midi: 63, dur: 1, vel: 0.58 },
        { t: 73, div: 'swell', midi: 60, dur: 1, vel: 0.58 },
        { t: 74, div: 'swell', midi: 63, dur: 1, vel: 0.58 },
        { t: 75, div: 'swell', midi: 62, dur: 1.5, vel: 0.58 },
        { t: 76.5, div: 'swell', midi: 60, dur: 1.5, vel: 0.58 },
        { t: 78, div: 'swell', midi: 58, dur: 1, vel: 0.58 },
        { t: 79, div: 'swell', midi: 60, dur: 1, vel: 0.58 },
        { t: 80, div: 'swell', midi: 62, dur: 1, vel: 0.58 },
        { t: 81, div: 'swell', midi: 63, dur: 1, vel: 0.58 },
        { t: 82, div: 'swell', midi: 60, dur: 1, vel: 0.58 },
        { t: 83, div: 'swell', midi: 58, dur: 1, vel: 0.58 },
        { t: 84, div: 'swell', midi: 56, dur: 1.5, vel: 0.58 },
        { t: 85.5, div: 'swell', midi: 58, dur: 1.5, vel: 0.58 },
        { t: 87, div: 'swell', midi: 60, dur: 1, vel: 0.58 },
        { t: 88, div: 'swell', midi: 58, dur: 1, vel: 0.58 },
        { t: 89, div: 'swell', midi: 56, dur: 1, vel: 0.58 },
        { t: 90, div: 'swell', midi: 55, dur: 1.5, vel: 0.58 },
        { t: 91.5, div: 'swell', midi: 58, dur: 1.5, vel: 0.58 },
        { t: 93, div: 'swell', midi: 55, dur: 3, vel: 0.6 },
    ]
};


// ============================================================
// 2. Sheep May Safely Graze, BWV 208
//    Aria from "Birthday Cantata" (Was mir behagt)
//    Key: Bb major. Tempo ~66
//    Two flute parts + soprano vocal + continuo bass
//    4/4 time
// ============================================================

const PIECE_SHEEP_SAFELY = {
    title: "Sheep May Safely Graze",
    composer: "J.S. Bach",
    key: 'Bb major',
    catalog: "BWV 208",
    tempo: 66,
    tempoChanges: [{ t: 0, tempo: 66, label: 'Andante pastorale' }],
    registration: {
        great: [],
        swell: ['sw-salicional8', 'sw-voxceleste8', 'sw-flute4'],
        choir: ['ch-gedeckt8', 'ch-rohrflute4'],
        pedal: ['pd-subbass16', 'pd-octave8']
    },
    events: [
        // ======== FLUTE INTRODUCTION (bars 1-4) ========
        // Flute 1 (Choir) - the famous pastoral melody
        // Bar 1: pickup and opening phrase in Bb major
        { t: 0, div: 'choir', midi: 70, dur: 1, vel: 0.65 },       // Bb4
        { t: 1, div: 'choir', midi: 69, dur: 0.5, vel: 0.6 },      // A4
        { t: 1.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.6 },    // Bb4
        { t: 2, div: 'choir', midi: 72, dur: 1, vel: 0.65 },       // C5
        { t: 3, div: 'choir', midi: 74, dur: 0.5, vel: 0.6 },      // D5
        { t: 3.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.6 },    // C5

        // Bar 2
        { t: 4, div: 'choir', midi: 70, dur: 1.5, vel: 0.65 },     // Bb4
        { t: 5.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.6 },    // A4
        { t: 6, div: 'choir', midi: 67, dur: 1, vel: 0.65 },       // G4
        { t: 7, div: 'choir', midi: 69, dur: 0.5, vel: 0.6 },      // A4
        { t: 7.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.6 },    // Bb4

        // Bar 3
        { t: 8, div: 'choir', midi: 72, dur: 1, vel: 0.65 },       // C5
        { t: 9, div: 'choir', midi: 70, dur: 0.5, vel: 0.6 },      // Bb4
        { t: 9.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.6 },    // A4
        { t: 10, div: 'choir', midi: 70, dur: 1, vel: 0.65 },      // Bb4
        { t: 11, div: 'choir', midi: 67, dur: 0.5, vel: 0.6 },     // G4
        { t: 11.5, div: 'choir', midi: 65, dur: 0.5, vel: 0.6 },   // F4

        // Bar 4
        { t: 12, div: 'choir', midi: 65, dur: 2, vel: 0.65 },      // F4
        { t: 14, div: 'choir', midi: 67, dur: 0.5, vel: 0.6 },     // G4
        { t: 14.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.6 },   // A4
        { t: 15, div: 'choir', midi: 70, dur: 1, vel: 0.65 },      // Bb4

        // Flute 2 (Choir) - parallel thirds/sixths below flute 1
        // Bar 1
        { t: 0, div: 'choir', midi: 67, dur: 1, vel: 0.55 },       // G4
        { t: 1, div: 'choir', midi: 65, dur: 0.5, vel: 0.5 },      // F4
        { t: 1.5, div: 'choir', midi: 67, dur: 0.5, vel: 0.5 },    // G4
        { t: 2, div: 'choir', midi: 69, dur: 1, vel: 0.55 },       // A4
        { t: 3, div: 'choir', midi: 70, dur: 0.5, vel: 0.5 },      // Bb4
        { t: 3.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.5 },    // A4
        // Bar 2
        { t: 4, div: 'choir', midi: 67, dur: 1.5, vel: 0.55 },     // G4
        { t: 5.5, div: 'choir', midi: 65, dur: 0.5, vel: 0.5 },    // F4
        { t: 6, div: 'choir', midi: 63, dur: 1, vel: 0.55 },       // Eb4
        { t: 7, div: 'choir', midi: 65, dur: 0.5, vel: 0.5 },      // F4
        { t: 7.5, div: 'choir', midi: 67, dur: 0.5, vel: 0.5 },    // G4
        // Bar 3
        { t: 8, div: 'choir', midi: 69, dur: 1, vel: 0.55 },       // A4
        { t: 9, div: 'choir', midi: 67, dur: 0.5, vel: 0.5 },      // G4
        { t: 9.5, div: 'choir', midi: 65, dur: 0.5, vel: 0.5 },    // F4
        { t: 10, div: 'choir', midi: 67, dur: 1, vel: 0.55 },      // G4
        { t: 11, div: 'choir', midi: 63, dur: 0.5, vel: 0.5 },     // Eb4
        { t: 11.5, div: 'choir', midi: 62, dur: 0.5, vel: 0.5 },   // D4
        // Bar 4
        { t: 12, div: 'choir', midi: 62, dur: 2, vel: 0.55 },      // D4
        { t: 14, div: 'choir', midi: 63, dur: 0.5, vel: 0.5 },     // Eb4
        { t: 14.5, div: 'choir', midi: 65, dur: 0.5, vel: 0.5 },   // F4
        { t: 15, div: 'choir', midi: 67, dur: 1, vel: 0.55 },      // G4

        // Continuo bass (Pedal) bars 1-4
        { t: 0, div: 'pedal', midi: 46, dur: 2, vel: 0.6 },        // Bb2
        { t: 2, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },       // Bb2
        { t: 4, div: 'pedal', midi: 46, dur: 2, vel: 0.6 },        // Bb2
        { t: 6, div: 'pedal', midi: 39, dur: 2, vel: 0.55 },       // Eb2
        { t: 8, div: 'pedal', midi: 41, dur: 2, vel: 0.6 },        // F2
        { t: 10, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },      // Bb2
        { t: 12, div: 'pedal', midi: 41, dur: 2, vel: 0.6 },       // F2
        { t: 14, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },      // Bb2

        // ======== VOCAL ENTRY (bars 5-12): Soprano melody on Swell ========
        // "Schafe koennen sicher weiden"
        // Bar 5
        { t: 16, div: 'swell', midi: 70, dur: 2, vel: 0.7 },       // Bb4
        { t: 18, div: 'swell', midi: 74, dur: 1, vel: 0.68 },      // D5
        { t: 19, div: 'swell', midi: 72, dur: 1, vel: 0.68 },      // C5
        // Bar 6
        { t: 20, div: 'swell', midi: 70, dur: 1, vel: 0.7 },       // Bb4
        { t: 21, div: 'swell', midi: 69, dur: 1, vel: 0.68 },      // A4
        { t: 22, div: 'swell', midi: 70, dur: 2, vel: 0.7 },       // Bb4
        // Bar 7
        { t: 24, div: 'swell', midi: 74, dur: 1, vel: 0.7 },       // D5
        { t: 25, div: 'swell', midi: 77, dur: 1, vel: 0.72 },      // F5
        { t: 26, div: 'swell', midi: 75, dur: 0.5, vel: 0.7 },     // Eb5
        { t: 26.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.68 },  // D5
        { t: 27, div: 'swell', midi: 72, dur: 1, vel: 0.68 },      // C5
        // Bar 8
        { t: 28, div: 'swell', midi: 70, dur: 2, vel: 0.7 },       // Bb4
        { t: 30, div: 'swell', midi: 69, dur: 1, vel: 0.65 },      // A4
        { t: 31, div: 'swell', midi: 67, dur: 1, vel: 0.65 },      // G4
        // Bar 9
        { t: 32, div: 'swell', midi: 65, dur: 1, vel: 0.68 },      // F4
        { t: 33, div: 'swell', midi: 67, dur: 1, vel: 0.68 },      // G4
        { t: 34, div: 'swell', midi: 69, dur: 1, vel: 0.7 },       // A4
        { t: 35, div: 'swell', midi: 70, dur: 1, vel: 0.7 },       // Bb4
        // Bar 10
        { t: 36, div: 'swell', midi: 72, dur: 1.5, vel: 0.72 },    // C5
        { t: 37.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.68 },  // Bb4
        { t: 38, div: 'swell', midi: 69, dur: 1, vel: 0.68 },      // A4
        { t: 39, div: 'swell', midi: 67, dur: 1, vel: 0.65 },      // G4
        // Bar 11
        { t: 40, div: 'swell', midi: 65, dur: 2, vel: 0.7 },       // F4
        { t: 42, div: 'swell', midi: 67, dur: 1, vel: 0.68 },      // G4
        { t: 43, div: 'swell', midi: 69, dur: 1, vel: 0.68 },      // A4
        // Bar 12
        { t: 44, div: 'swell', midi: 70, dur: 4, vel: 0.72 },      // Bb4 (whole note)

        // Flutes continue during vocal (Choir) bars 5-12
        // Flute 1 ornamental responses
        // Bar 5
        { t: 16, div: 'choir', midi: 74, dur: 0.5, vel: 0.55 },    // D5
        { t: 16.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },   // C5
        { t: 17, div: 'choir', midi: 70, dur: 0.5, vel: 0.55 },    // Bb4
        { t: 17.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.5 },   // A4
        { t: 18, div: 'choir', midi: 70, dur: 0.5, vel: 0.55 },    // Bb4
        { t: 18.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },   // C5
        { t: 19, div: 'choir', midi: 74, dur: 0.5, vel: 0.55 },    // D5
        { t: 19.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },   // C5
        // Bar 6
        { t: 20, div: 'choir', midi: 70, dur: 0.5, vel: 0.55 },
        { t: 20.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 21, div: 'choir', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 21.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 22, div: 'choir', midi: 70, dur: 1, vel: 0.55 },
        { t: 23, div: 'choir', midi: 69, dur: 0.5, vel: 0.5 },
        { t: 23.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.5 },
        // Bar 7
        { t: 24, div: 'choir', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 24.5, div: 'choir', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 25, div: 'choir', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 25.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 26, div: 'choir', midi: 70, dur: 0.5, vel: 0.55 },
        { t: 26.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 27, div: 'choir', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 27.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },
        // Bar 8
        { t: 28, div: 'choir', midi: 70, dur: 1, vel: 0.55 },
        { t: 29, div: 'choir', midi: 69, dur: 0.5, vel: 0.5 },
        { t: 29.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 30, div: 'choir', midi: 72, dur: 1, vel: 0.55 },
        { t: 31, div: 'choir', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 31.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.5 },
        // Bar 9
        { t: 32, div: 'choir', midi: 67, dur: 0.5, vel: 0.55 },
        { t: 32.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.5 },
        { t: 33, div: 'choir', midi: 70, dur: 0.5, vel: 0.55 },
        { t: 33.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 34, div: 'choir', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 34.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 35, div: 'choir', midi: 70, dur: 0.5, vel: 0.55 },
        { t: 35.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.5 },
        // Bar 10
        { t: 36, div: 'choir', midi: 70, dur: 0.5, vel: 0.55 },
        { t: 36.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 37, div: 'choir', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 37.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 38, div: 'choir', midi: 70, dur: 1, vel: 0.55 },
        { t: 39, div: 'choir', midi: 69, dur: 0.5, vel: 0.5 },
        { t: 39.5, div: 'choir', midi: 67, dur: 0.5, vel: 0.5 },
        // Bar 11
        { t: 40, div: 'choir', midi: 65, dur: 0.5, vel: 0.55 },
        { t: 40.5, div: 'choir', midi: 67, dur: 0.5, vel: 0.5 },
        { t: 41, div: 'choir', midi: 69, dur: 0.5, vel: 0.55 },
        { t: 41.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 42, div: 'choir', midi: 72, dur: 1, vel: 0.55 },
        { t: 43, div: 'choir', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 43.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.5 },
        // Bar 12
        { t: 44, div: 'choir', midi: 70, dur: 2, vel: 0.55 },
        { t: 46, div: 'choir', midi: 74, dur: 1, vel: 0.55 },
        { t: 47, div: 'choir', midi: 72, dur: 1, vel: 0.55 },

        // Bass (Pedal) bars 5-12
        { t: 16, div: 'pedal', midi: 46, dur: 2, vel: 0.6 },       // Bb2
        { t: 18, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },      // Bb2
        { t: 20, div: 'pedal', midi: 46, dur: 2, vel: 0.6 },       // Bb2
        { t: 22, div: 'pedal', midi: 41, dur: 2, vel: 0.55 },      // F2
        { t: 24, div: 'pedal', midi: 46, dur: 2, vel: 0.6 },       // Bb2
        { t: 26, div: 'pedal', midi: 41, dur: 2, vel: 0.55 },      // F2
        { t: 28, div: 'pedal', midi: 46, dur: 2, vel: 0.6 },       // Bb2
        { t: 30, div: 'pedal', midi: 39, dur: 2, vel: 0.55 },      // Eb2
        { t: 32, div: 'pedal', midi: 41, dur: 2, vel: 0.6 },       // F2
        { t: 34, div: 'pedal', midi: 39, dur: 2, vel: 0.55 },      // Eb2
        { t: 36, div: 'pedal', midi: 41, dur: 2, vel: 0.6 },       // F2
        { t: 38, div: 'pedal', midi: 39, dur: 2, vel: 0.55 },      // Eb2
        { t: 40, div: 'pedal', midi: 41, dur: 2, vel: 0.6 },       // F2
        { t: 42, div: 'pedal', midi: 44, dur: 2, vel: 0.55 },      // Ab2
        { t: 44, div: 'pedal', midi: 46, dur: 4, vel: 0.6 },       // Bb2,
        { t: 24, div: 'choir', midi: 74, dur: 1, vel: 0.56 },
        { t: 36, div: 'choir', midi: 72, dur: 1.5, vel: 0.58 },
        { t: 19, div: 'choir', midi: 72, dur: 1, vel: 0.54 },
        { t: 43, div: 'choir', midi: 69, dur: 1, vel: 0.54 },
        { t: 18, div: 'choir', midi: 74, dur: 1, vel: 0.54 },
        { t: 22, div: 'choir', midi: 70, dur: 2, vel: 0.56 },
        { t: 40, div: 'choir', midi: 65, dur: 2, vel: 0.56 },
        { t: 25, div: 'choir', midi: 77, dur: 1, vel: 0.58 },
        { t: 26.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.54 },
        { t: 20, div: 'choir', midi: 70, dur: 1, vel: 0.56 }
    ]
};


// ============================================================
// 3. Prelude and Fugue in A minor, BWV 543 ("The Great")
//    Dramatic toccata-style prelude with cascading arpeggios
//    Key: A minor. Tempo ~80. 4/4 time
//    Famous opening: solo manual arpeggios before pedal enters
// ============================================================

const PIECE_PRELUDE_A_MINOR = {
    title: "Prelude and Fugue in A minor",
    composer: "J.S. Bach",
    key: 'A minor',
    catalog: "BWV 543",
    tempo: 80,
    tempoChanges: [{ t: 0, tempo: 80, label: 'Moderato' }],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture'],
        swell: [],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ======== BAR 1: Opening A minor arpeggio, solo manual ========
        // Sweeping 32nd-note arpeggio figures on Great
        // A minor arpeggio ascending: A3-C4-E4-A4-C5-E5
        { t: 0, div: 'great', midi: 57, dur: 0.25, vel: 0.85 },     // A3
        { t: 0.25, div: 'great', midi: 60, dur: 0.25, vel: 0.82 },  // C4
        { t: 0.5, div: 'great', midi: 64, dur: 0.25, vel: 0.84 },   // E4
        { t: 0.75, div: 'great', midi: 69, dur: 0.25, vel: 0.86 },  // A4
        { t: 1, div: 'great', midi: 72, dur: 0.25, vel: 0.88 },     // C5
        { t: 1.25, div: 'great', midi: 76, dur: 0.25, vel: 0.9 },   // E5
        { t: 1.5, div: 'great', midi: 81, dur: 0.5, vel: 0.92 },    // A5 (held)
        // Descending response
        { t: 2, div: 'great', midi: 80, dur: 0.25, vel: 0.85 },     // Ab5 (dim7 passing)
        { t: 2.25, div: 'great', midi: 76, dur: 0.25, vel: 0.83 },  // E5
        { t: 2.5, div: 'great', midi: 72, dur: 0.25, vel: 0.81 },   // C5
        { t: 2.75, div: 'great', midi: 69, dur: 0.25, vel: 0.8 },   // A4
        { t: 3, div: 'great', midi: 68, dur: 0.25, vel: 0.82 },     // G#4
        { t: 3.25, div: 'great', midi: 64, dur: 0.25, vel: 0.8 },   // E4
        { t: 3.5, div: 'great', midi: 60, dur: 0.25, vel: 0.78 },   // C4
        { t: 3.75, div: 'great', midi: 57, dur: 0.25, vel: 0.8 },   // A3

        // ======== BAR 2: Diminished 7th arpeggio into E major ========
        // G#-B-D-F (dim7) ascending
        { t: 4, div: 'great', midi: 56, dur: 0.25, vel: 0.85 },     // G#3
        { t: 4.25, div: 'great', midi: 59, dur: 0.25, vel: 0.83 },  // B3
        { t: 4.5, div: 'great', midi: 62, dur: 0.25, vel: 0.85 },   // D4
        { t: 4.75, div: 'great', midi: 65, dur: 0.25, vel: 0.87 },  // F4
        { t: 5, div: 'great', midi: 68, dur: 0.25, vel: 0.88 },     // G#4
        { t: 5.25, div: 'great', midi: 71, dur: 0.25, vel: 0.9 },   // B4
        { t: 5.5, div: 'great', midi: 74, dur: 0.25, vel: 0.92 },   // D5
        { t: 5.75, div: 'great', midi: 77, dur: 0.25, vel: 0.9 },   // F5
        // Resolution: E major chord
        { t: 6, div: 'great', midi: 76, dur: 0.5, vel: 0.92 },      // E5
        { t: 6, div: 'great', midi: 71, dur: 0.5, vel: 0.85 },      // B4
        { t: 6, div: 'great', midi: 68, dur: 0.5, vel: 0.82 },      // G#4
        // Descending scale run in A harmonic minor
        { t: 6.5, div: 'great', midi: 76, dur: 0.2, vel: 0.85 },    // E5
        { t: 6.7, div: 'great', midi: 74, dur: 0.2, vel: 0.83 },    // D5
        { t: 6.9, div: 'great', midi: 72, dur: 0.2, vel: 0.81 },    // C5
        { t: 7.1, div: 'great', midi: 71, dur: 0.2, vel: 0.8 },     // B4
        { t: 7.3, div: 'great', midi: 69, dur: 0.2, vel: 0.82 },    // A4
        { t: 7.5, div: 'great', midi: 68, dur: 0.2, vel: 0.8 },     // G#4
        { t: 7.7, div: 'great', midi: 69, dur: 0.3, vel: 0.85 },    // A4

        // ======== BAR 3: Second wave - broader arpeggio with pedal entry ========
        // A minor arpeggio, wider spacing
        { t: 8, div: 'great', midi: 57, dur: 0.2, vel: 0.88 },      // A3
        { t: 8.2, div: 'great', midi: 60, dur: 0.2, vel: 0.85 },    // C4
        { t: 8.4, div: 'great', midi: 64, dur: 0.2, vel: 0.87 },    // E4
        { t: 8.6, div: 'great', midi: 69, dur: 0.2, vel: 0.88 },    // A4
        { t: 8.8, div: 'great', midi: 72, dur: 0.2, vel: 0.9 },     // C5
        { t: 9, div: 'great', midi: 76, dur: 0.2, vel: 0.92 },      // E5
        { t: 9.2, div: 'great', midi: 81, dur: 0.2, vel: 0.94 },    // A5
        { t: 9.4, div: 'great', midi: 84, dur: 0.6, vel: 0.95 },    // C6
        // Pedal enters with low A
        { t: 8, div: 'pedal', midi: 45, dur: 4, vel: 0.85 },        // A2

        // Cascading descent
        { t: 10, div: 'great', midi: 84, dur: 0.2, vel: 0.9 },      // C6
        { t: 10.2, div: 'great', midi: 81, dur: 0.2, vel: 0.88 },   // A5
        { t: 10.4, div: 'great', midi: 76, dur: 0.2, vel: 0.86 },   // E5
        { t: 10.6, div: 'great', midi: 72, dur: 0.2, vel: 0.84 },   // C5
        { t: 10.8, div: 'great', midi: 69, dur: 0.2, vel: 0.82 },   // A4
        { t: 11, div: 'great', midi: 68, dur: 0.25, vel: 0.84 },    // G#4
        { t: 11.25, div: 'great', midi: 64, dur: 0.25, vel: 0.82 }, // E4
        { t: 11.5, div: 'great', midi: 60, dur: 0.25, vel: 0.8 },   // C4
        { t: 11.75, div: 'great', midi: 57, dur: 0.25, vel: 0.82 }, // A3

        // ======== BAR 4: D minor arpeggio sequence ========
        { t: 12, div: 'great', midi: 50, dur: 0.25, vel: 0.88 },    // D3
        { t: 12.25, div: 'great', midi: 53, dur: 0.25, vel: 0.85 }, // F3
        { t: 12.5, div: 'great', midi: 57, dur: 0.25, vel: 0.87 },  // A3
        { t: 12.75, div: 'great', midi: 62, dur: 0.25, vel: 0.88 }, // D4
        { t: 13, div: 'great', midi: 65, dur: 0.25, vel: 0.9 },     // F4
        { t: 13.25, div: 'great', midi: 69, dur: 0.25, vel: 0.92 }, // A4
        { t: 13.5, div: 'great', midi: 74, dur: 0.5, vel: 0.94 },   // D5
        // Pedal D
        { t: 12, div: 'pedal', midi: 38, dur: 4, vel: 0.85 },       // D2

        // Descending from D
        { t: 14, div: 'great', midi: 74, dur: 0.2, vel: 0.88 },     // D5
        { t: 14.2, div: 'great', midi: 72, dur: 0.2, vel: 0.86 },   // C5
        { t: 14.4, div: 'great', midi: 71, dur: 0.2, vel: 0.84 },   // B4
        { t: 14.6, div: 'great', midi: 69, dur: 0.2, vel: 0.82 },   // A4
        { t: 14.8, div: 'great', midi: 68, dur: 0.2, vel: 0.84 },   // G#4
        { t: 15, div: 'great', midi: 69, dur: 0.5, vel: 0.88 },     // A4
        { t: 15.5, div: 'great', midi: 64, dur: 0.5, vel: 0.85 },   // E4

        // ======== BAR 5-6: Toccata figuration continues ========
        // C major arpeggio
        { t: 16, div: 'great', midi: 48, dur: 0.25, vel: 0.88 },    // C3
        { t: 16.25, div: 'great', midi: 52, dur: 0.25, vel: 0.85 }, // E3
        { t: 16.5, div: 'great', midi: 55, dur: 0.25, vel: 0.87 },  // G3
        { t: 16.75, div: 'great', midi: 60, dur: 0.25, vel: 0.88 }, // C4
        { t: 17, div: 'great', midi: 64, dur: 0.25, vel: 0.9 },     // E4
        { t: 17.25, div: 'great', midi: 67, dur: 0.25, vel: 0.92 }, // G4
        { t: 17.5, div: 'great', midi: 72, dur: 0.5, vel: 0.94 },   // C5
        { t: 16, div: 'pedal', midi: 36, dur: 4, vel: 0.85 },       // C2

        // Descending C major
        { t: 18, div: 'great', midi: 72, dur: 0.2, vel: 0.88 },     // C5
        { t: 18.2, div: 'great', midi: 71, dur: 0.2, vel: 0.86 },   // B4
        { t: 18.4, div: 'great', midi: 69, dur: 0.2, vel: 0.84 },   // A4
        { t: 18.6, div: 'great', midi: 67, dur: 0.2, vel: 0.82 },   // G4
        { t: 18.8, div: 'great', midi: 65, dur: 0.2, vel: 0.84 },   // F4
        { t: 19, div: 'great', midi: 64, dur: 0.25, vel: 0.86 },    // E4
        { t: 19.25, div: 'great', midi: 62, dur: 0.25, vel: 0.84 }, // D4
        { t: 19.5, div: 'great', midi: 60, dur: 0.5, vel: 0.88 },   // C4

        // Bar 6: F major / Dm sequence
        { t: 20, div: 'great', midi: 53, dur: 0.25, vel: 0.88 },    // F3
        { t: 20.25, div: 'great', midi: 57, dur: 0.25, vel: 0.85 }, // A3
        { t: 20.5, div: 'great', midi: 60, dur: 0.25, vel: 0.87 },  // C4
        { t: 20.75, div: 'great', midi: 65, dur: 0.25, vel: 0.88 }, // F4
        { t: 21, div: 'great', midi: 69, dur: 0.25, vel: 0.9 },     // A4
        { t: 21.25, div: 'great', midi: 72, dur: 0.25, vel: 0.92 }, // C5
        { t: 21.5, div: 'great', midi: 77, dur: 0.5, vel: 0.94 },   // F5
        { t: 20, div: 'pedal', midi: 41, dur: 2, vel: 0.85 },       // F2

        // Descending
        { t: 22, div: 'great', midi: 77, dur: 0.2, vel: 0.88 },     // F5
        { t: 22.2, div: 'great', midi: 76, dur: 0.2, vel: 0.86 },   // E5
        { t: 22.4, div: 'great', midi: 74, dur: 0.2, vel: 0.84 },   // D5
        { t: 22.6, div: 'great', midi: 72, dur: 0.2, vel: 0.82 },   // C5
        { t: 22.8, div: 'great', midi: 71, dur: 0.2, vel: 0.84 },   // B4
        { t: 23, div: 'great', midi: 69, dur: 0.25, vel: 0.86 },    // A4
        { t: 23.25, div: 'great', midi: 68, dur: 0.25, vel: 0.88 }, // G#4
        { t: 23.5, div: 'great', midi: 69, dur: 0.5, vel: 0.9 },    // A4
        { t: 22, div: 'pedal', midi: 40, dur: 2, vel: 0.85 },       // E2

        // ======== BAR 7-8: Climactic passage, chords + runs ========
        // Am chord
        { t: 24, div: 'great', midi: 69, dur: 1, vel: 0.92 },       // A4
        { t: 24, div: 'great', midi: 64, dur: 1, vel: 0.88 },       // E4
        { t: 24, div: 'great', midi: 60, dur: 1, vel: 0.85 },       // C4
        { t: 24, div: 'pedal', midi: 45, dur: 2, vel: 0.9 },        // A2
        // Scale run up
        { t: 25, div: 'great', midi: 69, dur: 0.2, vel: 0.85 },     // A4
        { t: 25.2, div: 'great', midi: 71, dur: 0.2, vel: 0.86 },   // B4
        { t: 25.4, div: 'great', midi: 72, dur: 0.2, vel: 0.87 },   // C5
        { t: 25.6, div: 'great', midi: 74, dur: 0.2, vel: 0.88 },   // D5
        { t: 25.8, div: 'great', midi: 76, dur: 0.2, vel: 0.9 },    // E5
        // E major chord (V)
        { t: 26, div: 'great', midi: 76, dur: 1, vel: 0.92 },       // E5
        { t: 26, div: 'great', midi: 71, dur: 1, vel: 0.88 },       // B4
        { t: 26, div: 'great', midi: 68, dur: 1, vel: 0.85 },       // G#4
        { t: 26, div: 'pedal', midi: 40, dur: 2, vel: 0.9 },        // E2
        // Descending run
        { t: 27, div: 'great', midi: 76, dur: 0.2, vel: 0.85 },     // E5
        { t: 27.2, div: 'great', midi: 74, dur: 0.2, vel: 0.83 },   // D5
        { t: 27.4, div: 'great', midi: 72, dur: 0.2, vel: 0.81 },   // C5
        { t: 27.6, div: 'great', midi: 71, dur: 0.2, vel: 0.8 },    // B4
        { t: 27.8, div: 'great', midi: 69, dur: 0.2, vel: 0.82 },   // A4

        // Bar 8: Final flourish
        // Dm chord
        { t: 28, div: 'great', midi: 74, dur: 0.5, vel: 0.92 },     // D5
        { t: 28, div: 'great', midi: 69, dur: 0.5, vel: 0.88 },     // A4
        { t: 28, div: 'great', midi: 65, dur: 0.5, vel: 0.85 },     // F4
        { t: 28, div: 'pedal', midi: 38, dur: 1, vel: 0.9 },        // D2
        // E dim7 arpeggio
        { t: 28.5, div: 'great', midi: 68, dur: 0.2, vel: 0.88 },   // G#4
        { t: 28.7, div: 'great', midi: 71, dur: 0.2, vel: 0.9 },    // B4
        { t: 28.9, div: 'great', midi: 74, dur: 0.2, vel: 0.92 },   // D5
        { t: 29.1, div: 'great', midi: 77, dur: 0.4, vel: 0.94 },   // F5
        // Resolution to Am
        { t: 29.5, div: 'great', midi: 76, dur: 0.5, vel: 0.92 },   // E5
        { t: 30, div: 'great', midi: 81, dur: 2, vel: 0.95 },       // A5
        { t: 30, div: 'great', midi: 76, dur: 2, vel: 0.9 },        // E5
        { t: 30, div: 'great', midi: 72, dur: 2, vel: 0.88 },       // C5
        { t: 30, div: 'great', midi: 69, dur: 2, vel: 0.85 },       // A4
        { t: 29, div: 'pedal', midi: 40, dur: 1, vel: 0.88 },       // E2
        { t: 30, div: 'pedal', midi: 45, dur: 2, vel: 0.92 },       // A2

        // ======== BARS 9-12: Continued toccata figuration ========
        // Rapid 16th-note scalar passages
        // Bar 9: A minor scale down then up
        { t: 32, div: 'great', midi: 81, dur: 0.25, vel: 0.88 },    // A5
        { t: 32.25, div: 'great', midi: 79, dur: 0.25, vel: 0.85 }, // G5
        { t: 32.5, div: 'great', midi: 77, dur: 0.25, vel: 0.83 },  // F5
        { t: 32.75, div: 'great', midi: 76, dur: 0.25, vel: 0.85 }, // E5
        { t: 33, div: 'great', midi: 74, dur: 0.25, vel: 0.87 },    // D5
        { t: 33.25, div: 'great', midi: 72, dur: 0.25, vel: 0.85 }, // C5
        { t: 33.5, div: 'great', midi: 71, dur: 0.25, vel: 0.83 },  // B4
        { t: 33.75, div: 'great', midi: 69, dur: 0.25, vel: 0.85 }, // A4
        { t: 34, div: 'great', midi: 68, dur: 0.25, vel: 0.87 },    // G#4
        { t: 34.25, div: 'great', midi: 69, dur: 0.25, vel: 0.85 }, // A4
        { t: 34.5, div: 'great', midi: 71, dur: 0.25, vel: 0.87 },  // B4
        { t: 34.75, div: 'great', midi: 72, dur: 0.25, vel: 0.88 }, // C5
        { t: 35, div: 'great', midi: 74, dur: 0.25, vel: 0.9 },     // D5
        { t: 35.25, div: 'great', midi: 76, dur: 0.25, vel: 0.92 }, // E5
        { t: 35.5, div: 'great', midi: 77, dur: 0.25, vel: 0.88 },  // F5
        { t: 35.75, div: 'great', midi: 76, dur: 0.25, vel: 0.86 }, // E5
        { t: 32, div: 'pedal', midi: 45, dur: 4, vel: 0.85 },       // A2

        // Bar 10: Dm arpeggio sequence
        { t: 36, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },    // D5
        { t: 36.25, div: 'great', midi: 72, dur: 0.25, vel: 0.85 }, // C5
        { t: 36.5, div: 'great', midi: 69, dur: 0.25, vel: 0.83 },  // A4
        { t: 36.75, div: 'great', midi: 65, dur: 0.25, vel: 0.85 }, // F4
        { t: 37, div: 'great', midi: 62, dur: 0.25, vel: 0.87 },    // D4
        { t: 37.25, div: 'great', midi: 65, dur: 0.25, vel: 0.85 }, // F4
        { t: 37.5, div: 'great', midi: 69, dur: 0.25, vel: 0.87 },  // A4
        { t: 37.75, div: 'great', midi: 72, dur: 0.25, vel: 0.88 }, // C5
        { t: 38, div: 'great', midi: 74, dur: 0.25, vel: 0.9 },     // D5
        { t: 38.25, div: 'great', midi: 76, dur: 0.25, vel: 0.92 }, // E5
        { t: 38.5, div: 'great', midi: 77, dur: 0.25, vel: 0.88 },  // F5
        { t: 38.75, div: 'great', midi: 76, dur: 0.25, vel: 0.86 }, // E5
        { t: 39, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },    // D5
        { t: 39.25, div: 'great', midi: 72, dur: 0.25, vel: 0.86 }, // C5
        { t: 39.5, div: 'great', midi: 71, dur: 0.25, vel: 0.84 },  // B4
        { t: 39.75, div: 'great', midi: 69, dur: 0.25, vel: 0.86 }, // A4
        { t: 36, div: 'pedal', midi: 38, dur: 4, vel: 0.85 },       // D2

        // Bar 11: G#dim7 into Am
        { t: 40, div: 'great', midi: 68, dur: 0.25, vel: 0.88 },    // G#4
        { t: 40.25, div: 'great', midi: 71, dur: 0.25, vel: 0.9 },  // B4
        { t: 40.5, div: 'great', midi: 74, dur: 0.25, vel: 0.92 },  // D5
        { t: 40.75, div: 'great', midi: 77, dur: 0.25, vel: 0.9 },  // F5
        { t: 41, div: 'great', midi: 76, dur: 0.5, vel: 0.92 },     // E5
        { t: 41.5, div: 'great', midi: 72, dur: 0.5, vel: 0.88 },   // C5
        { t: 42, div: 'great', midi: 69, dur: 1, vel: 0.92 },       // A4
        { t: 42, div: 'great', midi: 64, dur: 1, vel: 0.88 },       // E4
        { t: 42, div: 'great', midi: 60, dur: 1, vel: 0.85 },       // C4
        { t: 43, div: 'great', midi: 69, dur: 0.25, vel: 0.85 },    // A4
        { t: 43.25, div: 'great', midi: 71, dur: 0.25, vel: 0.86 }, // B4
        { t: 43.5, div: 'great', midi: 72, dur: 0.25, vel: 0.87 },  // C5
        { t: 43.75, div: 'great', midi: 74, dur: 0.25, vel: 0.88 }, // D5
        { t: 40, div: 'pedal', midi: 40, dur: 2, vel: 0.88 },       // E2
        { t: 42, div: 'pedal', midi: 45, dur: 2, vel: 0.9 },        // A2

        // Bar 12: Final cadential bar of excerpt - powerful Am chord
        { t: 44, div: 'great', midi: 76, dur: 0.25, vel: 0.9 },     // E5
        { t: 44.25, div: 'great', midi: 77, dur: 0.25, vel: 0.92 }, // F5
        { t: 44.5, div: 'great', midi: 76, dur: 0.25, vel: 0.9 },   // E5
        { t: 44.75, div: 'great', midi: 74, dur: 0.25, vel: 0.88 }, // D5
        { t: 45, div: 'great', midi: 72, dur: 0.25, vel: 0.9 },     // C5
        { t: 45.25, div: 'great', midi: 71, dur: 0.25, vel: 0.88 }, // B4
        { t: 45.5, div: 'great', midi: 69, dur: 0.25, vel: 0.86 },  // A4
        { t: 45.75, div: 'great', midi: 68, dur: 0.25, vel: 0.88 }, // G#4
        // Final Am chord with fermata
        { t: 46, div: 'great', midi: 81, dur: 2, vel: 0.95 },       // A5
        { t: 46, div: 'great', midi: 76, dur: 2, vel: 0.92 },       // E5
        { t: 46, div: 'great', midi: 72, dur: 2, vel: 0.88 },       // C5
        { t: 46, div: 'great', midi: 69, dur: 2, vel: 0.85 },       // A4
        { t: 46, div: 'great', midi: 64, dur: 2, vel: 0.82 },       // E4
        { t: 44, div: 'pedal', midi: 40, dur: 2, vel: 0.88 },       // E2
        { t: 46, div: 'pedal', midi: 45, dur: 2, vel: 0.95 },       // A2
    ]
};


// ============================================================
// 4. "Nun komm, der Heiden Heiland", BWV 659
//    Ornamental chorale prelude from the "Great Eighteen"
//    Key: G minor (Bb, Eb). Tempo ~52. 4/4 time
//    Ornamented melody on Swell, inner voices on Choir
//    Walking bass in pedal, two inner parts in canon
//    The chorale tune: D-D-D-Eb-F | F-Eb-D-C-D
//    (based on Veni redemptor gentium plainchant)
// ============================================================

const PIECE_NUN_KOMM = {
    title: "Nun komm, der Heiden Heiland",
    composer: "J.S. Bach",
    key: 'G major',
    catalog: "BWV 659",
    tempo: 52,
    tempoChanges: [{ t: 0, tempo: 52, label: 'Adagio' }],
    registration: {
        great: [],
        swell: ['sw-oboe8', 'sw-gedeckt8'],
        choir: ['ch-gedeckt8', 'ch-dulciana8'],
        pedal: ['pd-subbass16', 'pd-octave8']
    },
    events: [
        // ======== PHRASE 1 (bars 1-4): "Nun komm, der Heiden Heiland" ========
        // Ornamented chorale melody on Swell (highly decorated version of D-D-D-Eb-F)
        // Bar 1: Opening ornamental figure around D5
        { t: 0, div: 'swell', midi: 74, dur: 0.5, vel: 0.75 },      // D5
        { t: 0.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.68 },   // C5 (ornament)
        { t: 0.75, div: 'swell', midi: 74, dur: 0.75, vel: 0.72 },  // D5
        { t: 1.5, div: 'swell', midi: 75, dur: 0.25, vel: 0.68 },   // Eb5 (turn)
        { t: 1.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.68 },  // D5
        { t: 2, div: 'swell', midi: 72, dur: 0.25, vel: 0.7 },      // C5
        { t: 2.25, div: 'swell', midi: 74, dur: 0.5, vel: 0.72 },   // D5
        { t: 2.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.68 },  // Bb4 (passing)
        { t: 3, div: 'swell', midi: 72, dur: 0.5, vel: 0.7 },       // C5
        { t: 3.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.72 },    // D5

        // Bar 2: Second D, ornamented differently
        { t: 4, div: 'swell', midi: 74, dur: 0.75, vel: 0.75 },     // D5
        { t: 4.75, div: 'swell', midi: 76, dur: 0.25, vel: 0.68 },  // E5 (chromatic neighbor)
        { t: 5, div: 'swell', midi: 74, dur: 0.5, vel: 0.72 },      // D5
        { t: 5.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.68 },   // C5
        { t: 5.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.68 },  // Bb4
        { t: 6, div: 'swell', midi: 72, dur: 0.5, vel: 0.7 },       // C5
        { t: 6.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.68 },   // D5
        { t: 6.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.7 },   // Eb5
        { t: 7, div: 'swell', midi: 74, dur: 0.5, vel: 0.72 },      // D5
        { t: 7.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.7 },     // C5

        // Bar 3: Eb ornamented, leading to F
        { t: 8, div: 'swell', midi: 75, dur: 0.5, vel: 0.75 },      // Eb5
        { t: 8.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.68 },   // D5 (lower neighbor)
        { t: 8.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.7 },   // Eb5
        { t: 9, div: 'swell', midi: 77, dur: 0.5, vel: 0.72 },      // F5
        { t: 9.5, div: 'swell', midi: 79, dur: 0.25, vel: 0.7 },    // G5 (upper neighbor)
        { t: 9.75, div: 'swell', midi: 77, dur: 0.25, vel: 0.72 },  // F5
        { t: 10, div: 'swell', midi: 75, dur: 0.5, vel: 0.7 },      // Eb5
        { t: 10.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.68 },  // D5
        { t: 10.75, div: 'swell', midi: 72, dur: 0.25, vel: 0.68 }, // C5
        { t: 11, div: 'swell', midi: 74, dur: 1, vel: 0.72 },       // D5

        // Bar 4: cadential figure, phrase ending
        { t: 12, div: 'swell', midi: 74, dur: 0.5, vel: 0.72 },     // D5
        { t: 12.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.68 },  // C5
        { t: 12.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.68 }, // Bb4
        { t: 13, div: 'swell', midi: 69, dur: 0.5, vel: 0.7 },      // A4
        { t: 13.5, div: 'swell', midi: 70, dur: 0.25, vel: 0.68 },  // Bb4
        { t: 13.75, div: 'swell', midi: 72, dur: 0.25, vel: 0.7 },  // C5
        { t: 14, div: 'swell', midi: 74, dur: 2, vel: 0.75 },       // D5 (half note cadence)

        // Inner voice 1 (Choir) - canonic part, bars 1-4
        // Walking eighth notes
        { t: 0, div: 'choir', midi: 62, dur: 0.5, vel: 0.5 },       // D4
        { t: 0.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.48 },    // Eb4
        { t: 1, div: 'choir', midi: 65, dur: 0.5, vel: 0.5 },       // F4
        { t: 1.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.48 },    // Eb4
        { t: 2, div: 'choir', midi: 62, dur: 0.5, vel: 0.5 },       // D4
        { t: 2.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.48 },    // C4
        { t: 3, div: 'choir', midi: 58, dur: 0.5, vel: 0.5 },       // Bb3
        { t: 3.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.48 },    // C4

        { t: 4, div: 'choir', midi: 62, dur: 0.5, vel: 0.5 },       // D4
        { t: 4.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.48 },    // Eb4
        { t: 5, div: 'choir', midi: 65, dur: 0.5, vel: 0.5 },       // F4
        { t: 5.5, div: 'choir', midi: 67, dur: 0.5, vel: 0.48 },    // G4
        { t: 6, div: 'choir', midi: 65, dur: 0.5, vel: 0.5 },       // F4
        { t: 6.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.48 },    // Eb4
        { t: 7, div: 'choir', midi: 62, dur: 0.5, vel: 0.5 },       // D4
        { t: 7.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.48 },    // C4

        { t: 8, div: 'choir', midi: 58, dur: 0.5, vel: 0.5 },       // Bb3
        { t: 8.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.48 },    // C4
        { t: 9, div: 'choir', midi: 62, dur: 0.5, vel: 0.5 },       // D4
        { t: 9.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.48 },    // Eb4
        { t: 10, div: 'choir', midi: 65, dur: 0.5, vel: 0.5 },      // F4
        { t: 10.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.48 },   // Eb4
        { t: 11, div: 'choir', midi: 62, dur: 0.5, vel: 0.5 },      // D4
        { t: 11.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.48 },   // C4

        { t: 12, div: 'choir', midi: 58, dur: 0.5, vel: 0.5 },      // Bb3
        { t: 12.5, div: 'choir', midi: 57, dur: 0.5, vel: 0.48 },   // A3
        { t: 13, div: 'choir', midi: 55, dur: 0.5, vel: 0.5 },      // G3
        { t: 13.5, div: 'choir', midi: 57, dur: 0.5, vel: 0.48 },   // A3
        { t: 14, div: 'choir', midi: 58, dur: 1, vel: 0.5 },        // Bb3
        { t: 15, div: 'choir', midi: 57, dur: 1, vel: 0.5 },        // A3

        // Inner voice 2 (Choir) - second canonic voice, entering bar 2
        { t: 4, div: 'choir', midi: 55, dur: 0.5, vel: 0.45 },      // G3
        { t: 4.5, div: 'choir', midi: 56, dur: 0.5, vel: 0.43 },    // Ab3
        { t: 5, div: 'choir', midi: 58, dur: 0.5, vel: 0.45 },      // Bb3
        { t: 5.5, div: 'choir', midi: 56, dur: 0.5, vel: 0.43 },    // Ab3
        { t: 6, div: 'choir', midi: 55, dur: 0.5, vel: 0.45 },      // G3
        { t: 6.5, div: 'choir', midi: 53, dur: 0.5, vel: 0.43 },    // F3
        { t: 7, div: 'choir', midi: 51, dur: 0.5, vel: 0.45 },      // Eb3
        { t: 7.5, div: 'choir', midi: 53, dur: 0.5, vel: 0.43 },    // F3

        { t: 8, div: 'choir', midi: 55, dur: 0.5, vel: 0.45 },      // G3
        { t: 8.5, div: 'choir', midi: 56, dur: 0.5, vel: 0.43 },    // Ab3
        { t: 9, div: 'choir', midi: 55, dur: 0.5, vel: 0.45 },      // G3
        { t: 9.5, div: 'choir', midi: 53, dur: 0.5, vel: 0.43 },    // F3
        { t: 10, div: 'choir', midi: 55, dur: 0.5, vel: 0.45 },     // G3
        { t: 10.5, div: 'choir', midi: 53, dur: 0.5, vel: 0.43 },   // F3
        { t: 11, div: 'choir', midi: 55, dur: 0.5, vel: 0.45 },     // G3
        { t: 11.5, div: 'choir', midi: 56, dur: 0.5, vel: 0.43 },   // Ab3

        { t: 12, div: 'choir', midi: 55, dur: 0.5, vel: 0.45 },     // G3
        { t: 12.5, div: 'choir', midi: 53, dur: 0.5, vel: 0.43 },   // F3
        { t: 13, div: 'choir', midi: 51, dur: 0.5, vel: 0.45 },     // Eb3
        { t: 13.5, div: 'choir', midi: 53, dur: 0.5, vel: 0.43 },   // F3
        { t: 14, div: 'choir', midi: 55, dur: 1, vel: 0.45 },       // G3
        { t: 15, div: 'choir', midi: 54, dur: 1, vel: 0.45 },       // F#3

        // Walking bass (Pedal) bars 1-4
        { t: 0, div: 'pedal', midi: 43, dur: 1, vel: 0.6 },         // G2
        { t: 1, div: 'pedal', midi: 41, dur: 1, vel: 0.55 },        // F2
        { t: 2, div: 'pedal', midi: 39, dur: 1, vel: 0.58 },        // Eb2
        { t: 3, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },        // D2
        { t: 4, div: 'pedal', midi: 36, dur: 1, vel: 0.6 },         // C2
        { t: 5, div: 'pedal', midi: 34, dur: 1, vel: 0.55 },        // Bb1
        { t: 6, div: 'pedal', midi: 36, dur: 1, vel: 0.58 },        // C2
        { t: 7, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },        // D2
        { t: 8, div: 'pedal', midi: 39, dur: 1, vel: 0.6 },         // Eb2
        { t: 9, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },        // D2
        { t: 10, div: 'pedal', midi: 36, dur: 1, vel: 0.58 },       // C2
        { t: 11, div: 'pedal', midi: 34, dur: 1, vel: 0.55 },       // Bb1
        { t: 12, div: 'pedal', midi: 36, dur: 1, vel: 0.6 },        // C2
        { t: 13, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },       // D2
        { t: 14, div: 'pedal', midi: 39, dur: 1, vel: 0.58 },       // Eb2
        { t: 15, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },       // D2

        // ======== PHRASE 2 (bars 5-8): "Der Jungfrauen Kind erkannt" ========
        // Ornamented chorale melody: F-Eb-D-C-D
        // Bar 5: F5 ornamented
        { t: 16, div: 'swell', midi: 77, dur: 0.5, vel: 0.75 },     // F5
        { t: 16.5, div: 'swell', midi: 75, dur: 0.25, vel: 0.68 },  // Eb5
        { t: 16.75, div: 'swell', midi: 77, dur: 0.25, vel: 0.7 },  // F5
        { t: 17, div: 'swell', midi: 79, dur: 0.25, vel: 0.72 },    // G5 (upper)
        { t: 17.25, div: 'swell', midi: 77, dur: 0.25, vel: 0.7 },  // F5
        { t: 17.5, div: 'swell', midi: 75, dur: 0.25, vel: 0.68 },  // Eb5
        { t: 17.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.68 }, // D5
        { t: 18, div: 'swell', midi: 75, dur: 0.5, vel: 0.72 },     // Eb5
        { t: 18.5, div: 'swell', midi: 77, dur: 0.5, vel: 0.7 },    // F5
        { t: 19, div: 'swell', midi: 75, dur: 0.5, vel: 0.68 },     // Eb5
        { t: 19.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.7 },    // D5

        // Bar 6: Eb descending to C
        { t: 20, div: 'swell', midi: 75, dur: 0.5, vel: 0.75 },     // Eb5
        { t: 20.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.68 },  // D5
        { t: 20.75, div: 'swell', midi: 72, dur: 0.25, vel: 0.68 }, // C5
        { t: 21, div: 'swell', midi: 74, dur: 0.5, vel: 0.72 },     // D5
        { t: 21.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.68 },  // C5
        { t: 21.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.68 }, // Bb4
        { t: 22, div: 'swell', midi: 72, dur: 1, vel: 0.72 },       // C5
        { t: 23, div: 'swell', midi: 70, dur: 0.5, vel: 0.68 },     // Bb4
        { t: 23.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.7 },    // C5

        // Bar 7: D ornamented
        { t: 24, div: 'swell', midi: 74, dur: 0.5, vel: 0.75 },     // D5
        { t: 24.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.68 },  // C5
        { t: 24.75, div: 'swell', midi: 74, dur: 0.75, vel: 0.72 }, // D5
        { t: 25.5, div: 'swell', midi: 75, dur: 0.25, vel: 0.68 },  // Eb5
        { t: 25.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.7 },  // D5
        { t: 26, div: 'swell', midi: 72, dur: 0.5, vel: 0.68 },     // C5
        { t: 26.5, div: 'swell', midi: 70, dur: 0.25, vel: 0.68 },  // Bb4
        { t: 26.75, div: 'swell', midi: 69, dur: 0.25, vel: 0.68 }, // A4
        { t: 27, div: 'swell', midi: 70, dur: 0.5, vel: 0.7 },      // Bb4
        { t: 27.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.68 },   // C5

        // Bar 8: cadence on G (phrase end)
        { t: 28, div: 'swell', midi: 74, dur: 0.5, vel: 0.72 },     // D5
        { t: 28.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.68 },  // C5
        { t: 28.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.68 }, // Bb4
        { t: 29, div: 'swell', midi: 69, dur: 0.5, vel: 0.7 },      // A4
        { t: 29.5, div: 'swell', midi: 70, dur: 0.25, vel: 0.68 },  // Bb4
        { t: 29.75, div: 'swell', midi: 69, dur: 0.25, vel: 0.68 }, // A4
        { t: 30, div: 'swell', midi: 67, dur: 2, vel: 0.75 },       // G4 (half note cadence)

        // Inner voice 1 (Choir) bars 5-8
        { t: 16, div: 'choir', midi: 62, dur: 0.5, vel: 0.5 },      // D4
        { t: 16.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.48 },   // C4
        { t: 17, div: 'choir', midi: 58, dur: 0.5, vel: 0.5 },      // Bb3
        { t: 17.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.48 },   // C4
        { t: 18, div: 'choir', midi: 62, dur: 0.5, vel: 0.5 },      // D4
        { t: 18.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.48 },   // Eb4
        { t: 19, div: 'choir', midi: 62, dur: 0.5, vel: 0.5 },      // D4
        { t: 19.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.48 },   // C4

        { t: 20, div: 'choir', midi: 58, dur: 0.5, vel: 0.5 },      // Bb3
        { t: 20.5, div: 'choir', midi: 57, dur: 0.5, vel: 0.48 },   // A3
        { t: 21, div: 'choir', midi: 58, dur: 0.5, vel: 0.5 },      // Bb3
        { t: 21.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.48 },   // C4
        { t: 22, div: 'choir', midi: 62, dur: 0.5, vel: 0.5 },      // D4
        { t: 22.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.48 },   // Eb4
        { t: 23, div: 'choir', midi: 62, dur: 0.5, vel: 0.5 },      // D4
        { t: 23.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.48 },   // C4

        { t: 24, div: 'choir', midi: 58, dur: 0.5, vel: 0.5 },      // Bb3
        { t: 24.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.48 },   // C4
        { t: 25, div: 'choir', midi: 62, dur: 0.5, vel: 0.5 },      // D4
        { t: 25.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.48 },   // Eb4
        { t: 26, div: 'choir', midi: 62, dur: 0.5, vel: 0.5 },      // D4
        { t: 26.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.48 },   // C4
        { t: 27, div: 'choir', midi: 58, dur: 0.5, vel: 0.5 },      // Bb3
        { t: 27.5, div: 'choir', midi: 57, dur: 0.5, vel: 0.48 },   // A3

        { t: 28, div: 'choir', midi: 58, dur: 0.5, vel: 0.5 },      // Bb3
        { t: 28.5, div: 'choir', midi: 57, dur: 0.5, vel: 0.48 },   // A3
        { t: 29, div: 'choir', midi: 55, dur: 0.5, vel: 0.5 },      // G3
        { t: 29.5, div: 'choir', midi: 54, dur: 0.5, vel: 0.48 },   // F#3
        { t: 30, div: 'choir', midi: 55, dur: 2, vel: 0.5 },        // G3

        // Inner voice 2 (Choir) bars 5-8
        { t: 16, div: 'choir', midi: 55, dur: 0.5, vel: 0.45 },     // G3
        { t: 16.5, div: 'choir', midi: 53, dur: 0.5, vel: 0.43 },   // F3
        { t: 17, div: 'choir', midi: 51, dur: 0.5, vel: 0.45 },     // Eb3
        { t: 17.5, div: 'choir', midi: 53, dur: 0.5, vel: 0.43 },   // F3
        { t: 18, div: 'choir', midi: 55, dur: 0.5, vel: 0.45 },     // G3
        { t: 18.5, div: 'choir', midi: 56, dur: 0.5, vel: 0.43 },   // Ab3
        { t: 19, div: 'choir', midi: 55, dur: 0.5, vel: 0.45 },     // G3
        { t: 19.5, div: 'choir', midi: 53, dur: 0.5, vel: 0.43 },   // F3

        { t: 20, div: 'choir', midi: 51, dur: 0.5, vel: 0.45 },     // Eb3
        { t: 20.5, div: 'choir', midi: 50, dur: 0.5, vel: 0.43 },   // D3
        { t: 21, div: 'choir', midi: 51, dur: 0.5, vel: 0.45 },     // Eb3
        { t: 21.5, div: 'choir', midi: 53, dur: 0.5, vel: 0.43 },   // F3
        { t: 22, div: 'choir', midi: 55, dur: 0.5, vel: 0.45 },     // G3
        { t: 22.5, div: 'choir', midi: 53, dur: 0.5, vel: 0.43 },   // F3
        { t: 23, div: 'choir', midi: 55, dur: 0.5, vel: 0.45 },     // G3
        { t: 23.5, div: 'choir', midi: 53, dur: 0.5, vel: 0.43 },   // F3

        { t: 24, div: 'choir', midi: 51, dur: 0.5, vel: 0.45 },     // Eb3
        { t: 24.5, div: 'choir', midi: 53, dur: 0.5, vel: 0.43 },   // F3
        { t: 25, div: 'choir', midi: 55, dur: 0.5, vel: 0.45 },     // G3
        { t: 25.5, div: 'choir', midi: 53, dur: 0.5, vel: 0.43 },   // F3
        { t: 26, div: 'choir', midi: 51, dur: 0.5, vel: 0.45 },     // Eb3
        { t: 26.5, div: 'choir', midi: 50, dur: 0.5, vel: 0.43 },   // D3
        { t: 27, div: 'choir', midi: 48, dur: 0.5, vel: 0.45 },     // C3
        { t: 27.5, div: 'choir', midi: 50, dur: 0.5, vel: 0.43 },   // D3

        { t: 28, div: 'choir', midi: 51, dur: 0.5, vel: 0.45 },     // Eb3
        { t: 28.5, div: 'choir', midi: 50, dur: 0.5, vel: 0.43 },   // D3
        { t: 29, div: 'choir', midi: 48, dur: 0.5, vel: 0.45 },     // C3
        { t: 29.5, div: 'choir', midi: 50, dur: 0.5, vel: 0.43 },   // D3
        { t: 30, div: 'choir', midi: 47, dur: 2, vel: 0.45 },       // B2

        // Walking bass (Pedal) bars 5-8
        { t: 16, div: 'pedal', midi: 43, dur: 1, vel: 0.6 },        // G2
        { t: 17, div: 'pedal', midi: 41, dur: 1, vel: 0.55 },       // F2
        { t: 18, div: 'pedal', midi: 39, dur: 1, vel: 0.58 },       // Eb2
        { t: 19, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },       // D2
        { t: 20, div: 'pedal', midi: 36, dur: 1, vel: 0.6 },        // C2
        { t: 21, div: 'pedal', midi: 34, dur: 1, vel: 0.55 },       // Bb1
        { t: 22, div: 'pedal', midi: 36, dur: 1, vel: 0.58 },       // C2
        { t: 23, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },       // D2
        { t: 24, div: 'pedal', midi: 39, dur: 1, vel: 0.6 },        // Eb2
        { t: 25, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },       // D2
        { t: 26, div: 'pedal', midi: 36, dur: 1, vel: 0.58 },       // C2
        { t: 27, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },       // D2
        { t: 28, div: 'pedal', midi: 36, dur: 1, vel: 0.6 },        // C2
        { t: 29, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },       // D2
        { t: 30, div: 'pedal', midi: 31, dur: 2, vel: 0.65 },       // G1 (cadence)
    ]
};
