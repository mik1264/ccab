// Bach Organ Works Volume 3 - Cathedral Grand organ simulator
// MIDI reference: C2=36, D2=38, E2=40, F2=41, G2=43, A2=45, B2=47
//                 C3=48, D3=50, E3=52, F3=53, G3=55, A3=57, B3=59
//                 C4=60, D4=62, E4=64, F4=65, G4=67, A4=69, B4=71
//                 C5=72, D5=74, E5=76, F5=77, G5=79, A5=81

// ============================================================
// 1. Prelude and Fugue in D major, BWV 532
//    Brilliant, virtuosic opening with rapid pedal passages
//    Key: D major. Tempo ~112
//    Opens with famous semiquaver pedal scale run in D major
//    Fugue subject: 8 bars of tight figurations spanning a ninth
// ============================================================

const PIECE_BACH_PRELUDE_D = {
    title: "Prelude and Fugue in D major",
    composer: "Johann Sebastian Bach",
    catalog: "BWV 532",
    key: "D major",
    tempo: 112,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture'],
        swell: ['sw-gedeckt8', 'sw-flute4'],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8']
    },
    events: [
        // ======== PRELUDE: Opening pedal scale run (bars 1-2) ========
        // Famous ascending D major scale in semiquavers (16ths) in pedal
        // Bar 1: rapid scale D2 up through D major
        { t: 0, div: 'pedal', midi: 38, dur: 0.25, vel: 0.85 },     // D2
        { t: 0.25, div: 'pedal', midi: 40, dur: 0.25, vel: 0.85 },  // E2
        { t: 0.5, div: 'pedal', midi: 42, dur: 0.25, vel: 0.87 },   // F#2
        { t: 0.75, div: 'pedal', midi: 43, dur: 0.25, vel: 0.87 },  // G2
        { t: 1, div: 'pedal', midi: 45, dur: 0.25, vel: 0.88 },     // A2
        { t: 1.25, div: 'pedal', midi: 47, dur: 0.25, vel: 0.88 },  // B2
        { t: 1.5, div: 'pedal', midi: 49, dur: 0.25, vel: 0.9 },    // C#3
        { t: 1.75, div: 'pedal', midi: 50, dur: 0.25, vel: 0.9 },   // D3
        { t: 2, div: 'pedal', midi: 52, dur: 0.25, vel: 0.9 },      // E3
        { t: 2.25, div: 'pedal', midi: 54, dur: 0.25, vel: 0.92 },  // F#3
        { t: 2.5, div: 'pedal', midi: 55, dur: 0.25, vel: 0.92 },   // G3
        { t: 2.75, div: 'pedal', midi: 57, dur: 0.25, vel: 0.93 },  // A3
        { t: 3, div: 'pedal', midi: 59, dur: 0.25, vel: 0.93 },     // B3
        { t: 3.25, div: 'pedal', midi: 61, dur: 0.25, vel: 0.95 },  // C#4
        { t: 3.5, div: 'pedal', midi: 62, dur: 0.5, vel: 0.95 },    // D4 (held)

        // Bar 2-3: Manuals enter with intricate quaver pattern in D major
        // Right hand - brilliant broken chord figuration
        { t: 4, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },      // D5
        { t: 4.5, div: 'great', midi: 73, dur: 0.5, vel: 0.85 },    // C#5
        { t: 5, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },      // D5
        { t: 5.5, div: 'great', midi: 69, dur: 0.5, vel: 0.85 },    // A4
        { t: 6, div: 'great', midi: 66, dur: 0.5, vel: 0.85 },      // F#4
        { t: 6.5, div: 'great', midi: 69, dur: 0.5, vel: 0.87 },    // A4
        { t: 7, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },      // D5
        { t: 7.5, div: 'great', midi: 73, dur: 0.5, vel: 0.85 },    // C#5

        // Left hand accompaniment
        { t: 4, div: 'swell', midi: 62, dur: 0.5, vel: 0.7 },       // D4
        { t: 4.5, div: 'swell', midi: 61, dur: 0.5, vel: 0.68 },    // C#4
        { t: 5, div: 'swell', midi: 62, dur: 0.5, vel: 0.7 },       // D4
        { t: 5.5, div: 'swell', midi: 57, dur: 0.5, vel: 0.68 },    // A3
        { t: 6, div: 'swell', midi: 54, dur: 0.5, vel: 0.68 },      // F#3
        { t: 6.5, div: 'swell', midi: 57, dur: 0.5, vel: 0.7 },     // A3
        { t: 7, div: 'swell', midi: 62, dur: 0.5, vel: 0.7 },       // D4
        { t: 7.5, div: 'swell', midi: 61, dur: 0.5, vel: 0.68 },    // C#4

        // Pedal held notes
        { t: 4, div: 'pedal', midi: 38, dur: 4, vel: 0.75 },        // D2 pedal point

        // Bars 4-5: Second pedal run, descending
        { t: 8, div: 'pedal', midi: 62, dur: 0.25, vel: 0.9 },      // D4
        { t: 8.25, div: 'pedal', midi: 61, dur: 0.25, vel: 0.9 },   // C#4
        { t: 8.5, div: 'pedal', midi: 59, dur: 0.25, vel: 0.88 },   // B3
        { t: 8.75, div: 'pedal', midi: 57, dur: 0.25, vel: 0.88 },  // A3
        { t: 9, div: 'pedal', midi: 55, dur: 0.25, vel: 0.87 },     // G3
        { t: 9.25, div: 'pedal', midi: 54, dur: 0.25, vel: 0.87 },  // F#3
        { t: 9.5, div: 'pedal', midi: 52, dur: 0.25, vel: 0.85 },   // E3
        { t: 9.75, div: 'pedal', midi: 50, dur: 0.25, vel: 0.85 },  // D3
        { t: 10, div: 'pedal', midi: 49, dur: 0.25, vel: 0.83 },    // C#3
        { t: 10.25, div: 'pedal', midi: 47, dur: 0.25, vel: 0.83 }, // B2
        { t: 10.5, div: 'pedal', midi: 45, dur: 0.25, vel: 0.82 },  // A2
        { t: 10.75, div: 'pedal', midi: 43, dur: 0.25, vel: 0.82 }, // G2
        { t: 11, div: 'pedal', midi: 42, dur: 0.25, vel: 0.8 },     // F#2
        { t: 11.25, div: 'pedal', midi: 40, dur: 0.25, vel: 0.8 },  // E2
        { t: 11.5, div: 'pedal', midi: 38, dur: 0.5, vel: 0.85 },   // D2

        // Bars 5-6: Manuals continue quaver figuration
        { t: 8, div: 'great', midi: 78, dur: 0.5, vel: 0.88 },      // F#5
        { t: 8.5, div: 'great', midi: 76, dur: 0.5, vel: 0.85 },    // E5
        { t: 9, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },      // D5
        { t: 9.5, div: 'great', midi: 73, dur: 0.5, vel: 0.85 },    // C#5
        { t: 10, div: 'great', midi: 71, dur: 0.5, vel: 0.85 },     // B4
        { t: 10.5, div: 'great', midi: 69, dur: 0.5, vel: 0.83 },   // A4
        { t: 11, div: 'great', midi: 71, dur: 0.5, vel: 0.85 },     // B4
        { t: 11.5, div: 'great', midi: 73, dur: 0.5, vel: 0.87 },   // C#5

        { t: 8, div: 'swell', midi: 66, dur: 0.5, vel: 0.7 },       // F#4
        { t: 8.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.68 },    // E4
        { t: 9, div: 'swell', midi: 62, dur: 0.5, vel: 0.7 },       // D4
        { t: 9.5, div: 'swell', midi: 61, dur: 0.5, vel: 0.68 },    // C#4
        { t: 10, div: 'swell', midi: 59, dur: 0.5, vel: 0.68 },     // B3
        { t: 10.5, div: 'swell', midi: 57, dur: 0.5, vel: 0.67 },   // A3
        { t: 11, div: 'swell', midi: 59, dur: 0.5, vel: 0.68 },     // B3
        { t: 11.5, div: 'swell', midi: 61, dur: 0.5, vel: 0.7 },    // C#4

        // Bars 7-10: Continuation with brilliant manual writing over pedal point
        // Bar 7: A major chord arpeggiation
        { t: 12, div: 'great', midi: 69, dur: 0.25, vel: 0.88 },    // A4
        { t: 12.25, div: 'great', midi: 73, dur: 0.25, vel: 0.88 }, // C#5
        { t: 12.5, div: 'great', midi: 76, dur: 0.25, vel: 0.9 },   // E5
        { t: 12.75, div: 'great', midi: 73, dur: 0.25, vel: 0.88 }, // C#5
        { t: 13, div: 'great', midi: 69, dur: 0.25, vel: 0.88 },    // A4
        { t: 13.25, div: 'great', midi: 66, dur: 0.25, vel: 0.85 }, // F#4
        { t: 13.5, div: 'great', midi: 69, dur: 0.25, vel: 0.88 },  // A4
        { t: 13.75, div: 'great', midi: 73, dur: 0.25, vel: 0.88 }, // C#5

        // Bar 8: D major figuration
        { t: 14, div: 'great', midi: 74, dur: 0.25, vel: 0.9 },     // D5
        { t: 14.25, div: 'great', midi: 78, dur: 0.25, vel: 0.9 },  // F#5
        { t: 14.5, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },  // D5
        { t: 14.75, div: 'great', midi: 69, dur: 0.25, vel: 0.85 }, // A4
        { t: 15, div: 'great', midi: 66, dur: 0.25, vel: 0.85 },    // F#4
        { t: 15.25, div: 'great', midi: 62, dur: 0.25, vel: 0.83 }, // D4
        { t: 15.5, div: 'great', midi: 66, dur: 0.25, vel: 0.85 },  // F#4
        { t: 15.75, div: 'great', midi: 69, dur: 0.25, vel: 0.87 }, // A4

        // Left hand bars 7-8
        { t: 12, div: 'swell', midi: 57, dur: 1, vel: 0.7 },        // A3
        { t: 13, div: 'swell', midi: 54, dur: 1, vel: 0.68 },       // F#3
        { t: 14, div: 'swell', midi: 50, dur: 1, vel: 0.7 },        // D3
        { t: 15, div: 'swell', midi: 54, dur: 1, vel: 0.68 },       // F#3

        // Pedal bars 7-8
        { t: 12, div: 'pedal', midi: 45, dur: 2, vel: 0.75 },       // A2
        { t: 14, div: 'pedal', midi: 38, dur: 2, vel: 0.78 },       // D2

        // Bar 9-10: More intricate passage work
        { t: 16, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },    // D5
        { t: 16.25, div: 'great', midi: 76, dur: 0.25, vel: 0.88 }, // E5
        { t: 16.5, div: 'great', midi: 78, dur: 0.25, vel: 0.9 },   // F#5
        { t: 16.75, div: 'great', midi: 76, dur: 0.25, vel: 0.88 }, // E5
        { t: 17, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },    // D5
        { t: 17.25, div: 'great', midi: 73, dur: 0.25, vel: 0.87 }, // C#5
        { t: 17.5, div: 'great', midi: 71, dur: 0.25, vel: 0.85 },  // B4
        { t: 17.75, div: 'great', midi: 73, dur: 0.25, vel: 0.87 }, // C#5
        { t: 18, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },    // D5
        { t: 18.25, div: 'great', midi: 71, dur: 0.25, vel: 0.85 }, // B4
        { t: 18.5, div: 'great', midi: 69, dur: 0.25, vel: 0.85 },  // A4
        { t: 18.75, div: 'great', midi: 67, dur: 0.25, vel: 0.83 }, // G4
        { t: 19, div: 'great', midi: 66, dur: 0.25, vel: 0.85 },    // F#4
        { t: 19.25, div: 'great', midi: 69, dur: 0.25, vel: 0.87 }, // A4
        { t: 19.5, div: 'great', midi: 74, dur: 0.5, vel: 0.9 },    // D5

        { t: 16, div: 'swell', midi: 62, dur: 0.5, vel: 0.7 },      // D4
        { t: 16.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.68 },   // E4
        { t: 17, div: 'swell', midi: 66, dur: 0.5, vel: 0.7 },      // F#4
        { t: 17.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.68 },   // E4
        { t: 18, div: 'swell', midi: 62, dur: 0.5, vel: 0.7 },      // D4
        { t: 18.5, div: 'swell', midi: 57, dur: 0.5, vel: 0.68 },   // A3
        { t: 19, div: 'swell', midi: 54, dur: 0.5, vel: 0.68 },     // F#3
        { t: 19.5, div: 'swell', midi: 57, dur: 0.5, vel: 0.7 },    // A3

        { t: 16, div: 'pedal', midi: 50, dur: 2, vel: 0.75 },       // D3 (held)
        { t: 18, div: 'pedal', midi: 45, dur: 2, vel: 0.73 },       // A2

        // ======== Bars 11-14: Transition to Alla breve ========
        // Slower, more sustained chordal writing
        // Bar 11: G major chord
        { t: 20, div: 'great', midi: 71, dur: 1, vel: 0.85 },       // B4
        { t: 20, div: 'swell', midi: 67, dur: 1, vel: 0.75 },       // G4
        { t: 20, div: 'swell', midi: 62, dur: 1, vel: 0.72 },       // D4
        { t: 20, div: 'pedal', midi: 43, dur: 2, vel: 0.78 },       // G2
        { t: 21, div: 'great', midi: 69, dur: 1, vel: 0.85 },       // A4
        { t: 21, div: 'swell', midi: 66, dur: 1, vel: 0.75 },       // F#4
        { t: 21, div: 'swell', midi: 62, dur: 1, vel: 0.72 },       // D4

        // Bar 12: E minor - F# clash
        { t: 22, div: 'great', midi: 76, dur: 1, vel: 0.85 },       // E5
        { t: 22, div: 'swell', midi: 71, dur: 1, vel: 0.75 },       // B4
        { t: 22, div: 'swell', midi: 67, dur: 1, vel: 0.72 },       // G4
        { t: 22, div: 'pedal', midi: 40, dur: 2, vel: 0.78 },       // E2
        { t: 23, div: 'great', midi: 74, dur: 1, vel: 0.85 },       // D5
        { t: 23, div: 'swell', midi: 69, dur: 1, vel: 0.75 },       // A4
        { t: 23, div: 'swell', midi: 66, dur: 1, vel: 0.72 },       // F#4

        // Bar 13-14: Return to D major brilliance
        { t: 24, div: 'great', midi: 78, dur: 0.5, vel: 0.9 },      // F#5
        { t: 24.5, div: 'great', midi: 76, dur: 0.5, vel: 0.88 },   // E5
        { t: 25, div: 'great', midi: 74, dur: 0.5, vel: 0.9 },      // D5
        { t: 25.5, div: 'great', midi: 73, dur: 0.5, vel: 0.88 },   // C#5
        { t: 26, div: 'great', midi: 74, dur: 2, vel: 0.92 },       // D5 (half note)

        { t: 24, div: 'swell', midi: 66, dur: 0.5, vel: 0.75 },     // F#4
        { t: 24.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.73 },   // E4
        { t: 25, div: 'swell', midi: 62, dur: 0.5, vel: 0.75 },     // D4
        { t: 25.5, div: 'swell', midi: 61, dur: 0.5, vel: 0.73 },   // C#4
        { t: 26, div: 'swell', midi: 62, dur: 2, vel: 0.77 },       // D4

        { t: 24, div: 'pedal', midi: 38, dur: 4, vel: 0.8 },        // D2

        // ======== FUGUE: bars 15+ ========
        // Subject: 8 bars, tight figurations spanning a ninth, violin-like
        // Subject entry 1: Soprano on Great, D major
        // Bar 15: Subject begins - playful, running 8th notes
        { t: 28, div: 'great', midi: 69, dur: 0.5, vel: 0.82 },     // A4
        { t: 28.5, div: 'great', midi: 74, dur: 0.5, vel: 0.85 },   // D5
        { t: 29, div: 'great', midi: 73, dur: 0.25, vel: 0.83 },    // C#5
        { t: 29.25, div: 'great', midi: 74, dur: 0.25, vel: 0.85 }, // D5
        { t: 29.5, div: 'great', midi: 76, dur: 0.5, vel: 0.85 },   // E5
        { t: 30, div: 'great', midi: 74, dur: 0.5, vel: 0.83 },     // D5
        { t: 30.5, div: 'great', midi: 73, dur: 0.25, vel: 0.82 },  // C#5
        { t: 30.75, div: 'great', midi: 71, dur: 0.25, vel: 0.82 }, // B4
        { t: 31, div: 'great', midi: 69, dur: 0.5, vel: 0.83 },     // A4
        { t: 31.5, div: 'great', midi: 71, dur: 0.5, vel: 0.85 },   // B4

        // Bar 17: Subject continues
        { t: 32, div: 'great', midi: 73, dur: 0.5, vel: 0.85 },     // C#5
        { t: 32.5, div: 'great', midi: 74, dur: 0.25, vel: 0.85 },  // D5
        { t: 32.75, div: 'great', midi: 76, dur: 0.25, vel: 0.87 }, // E5
        { t: 33, div: 'great', midi: 78, dur: 0.5, vel: 0.88 },     // F#5
        { t: 33.5, div: 'great', midi: 76, dur: 0.5, vel: 0.85 },   // E5
        { t: 34, div: 'great', midi: 74, dur: 0.5, vel: 0.85 },     // D5
        { t: 34.5, div: 'great', midi: 73, dur: 0.25, vel: 0.83 },  // C#5
        { t: 34.75, div: 'great', midi: 71, dur: 0.25, vel: 0.83 }, // B4
        { t: 35, div: 'great', midi: 69, dur: 0.5, vel: 0.82 },     // A4
        { t: 35.5, div: 'great', midi: 66, dur: 0.5, vel: 0.82 },   // F#4

        // Bars 18-19: Subject conclusion
        { t: 36, div: 'great', midi: 67, dur: 0.5, vel: 0.83 },     // G4
        { t: 36.5, div: 'great', midi: 69, dur: 0.5, vel: 0.85 },   // A4
        { t: 37, div: 'great', midi: 71, dur: 0.25, vel: 0.85 },    // B4
        { t: 37.25, div: 'great', midi: 73, dur: 0.25, vel: 0.85 }, // C#5
        { t: 37.5, div: 'great', midi: 74, dur: 1, vel: 0.88 },     // D5
        { t: 38.5, div: 'great', midi: 73, dur: 0.25, vel: 0.85 },  // C#5
        { t: 38.75, div: 'great', midi: 74, dur: 0.25, vel: 0.85 }, // D5
        { t: 39, div: 'great', midi: 76, dur: 0.5, vel: 0.87 },     // E5
        { t: 39.5, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },   // D5

        // Answer entry: Alto on Swell, A major (dominant)
        // Bar 20: Answer in alto
        { t: 40, div: 'swell', midi: 64, dur: 0.5, vel: 0.78 },     // E4
        { t: 40.5, div: 'swell', midi: 69, dur: 0.5, vel: 0.8 },    // A4
        { t: 41, div: 'swell', midi: 68, dur: 0.25, vel: 0.78 },    // G#4
        { t: 41.25, div: 'swell', midi: 69, dur: 0.25, vel: 0.8 },  // A4
        { t: 41.5, div: 'swell', midi: 71, dur: 0.5, vel: 0.8 },    // B4
        { t: 42, div: 'swell', midi: 69, dur: 0.5, vel: 0.78 },     // A4
        { t: 42.5, div: 'swell', midi: 68, dur: 0.25, vel: 0.77 },  // G#4
        { t: 42.75, div: 'swell', midi: 66, dur: 0.25, vel: 0.77 }, // F#4
        { t: 43, div: 'swell', midi: 64, dur: 0.5, vel: 0.78 },     // E4
        { t: 43.5, div: 'swell', midi: 66, dur: 0.5, vel: 0.8 },    // F#4

        // Soprano countersubject continues
        { t: 40, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },     // D5
        { t: 40.5, div: 'great', midi: 73, dur: 0.5, vel: 0.8 },    // C#5
        { t: 41, div: 'great', midi: 71, dur: 0.5, vel: 0.8 },      // B4
        { t: 41.5, div: 'great', midi: 69, dur: 0.5, vel: 0.78 },   // A4
        { t: 42, div: 'great', midi: 71, dur: 0.5, vel: 0.8 },      // B4
        { t: 42.5, div: 'great', midi: 73, dur: 0.5, vel: 0.82 },   // C#5
        { t: 43, div: 'great', midi: 74, dur: 0.5, vel: 0.82 },     // D5
        { t: 43.5, div: 'great', midi: 76, dur: 0.5, vel: 0.83 },   // E5

        // Bar 22: Answer continues
        { t: 44, div: 'swell', midi: 68, dur: 0.5, vel: 0.8 },      // G#4
        { t: 44.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.8 },   // A4
        { t: 44.75, div: 'swell', midi: 71, dur: 0.25, vel: 0.82 }, // B4
        { t: 45, div: 'swell', midi: 73, dur: 0.5, vel: 0.83 },     // C#5
        { t: 45.5, div: 'swell', midi: 71, dur: 0.5, vel: 0.8 },    // B4
        { t: 46, div: 'swell', midi: 69, dur: 0.5, vel: 0.8 },      // A4
        { t: 46.5, div: 'swell', midi: 68, dur: 0.25, vel: 0.78 },  // G#4
        { t: 46.75, div: 'swell', midi: 66, dur: 0.25, vel: 0.78 }, // F#4
        { t: 47, div: 'swell', midi: 64, dur: 0.5, vel: 0.78 },     // E4
        { t: 47.5, div: 'swell', midi: 61, dur: 0.5, vel: 0.77 },   // C#4

        // Soprano countersubject bars 22-23
        { t: 44, div: 'great', midi: 78, dur: 0.5, vel: 0.85 },     // F#5
        { t: 44.5, div: 'great', midi: 76, dur: 0.5, vel: 0.83 },   // E5
        { t: 45, div: 'great', midi: 74, dur: 0.5, vel: 0.83 },     // D5
        { t: 45.5, div: 'great', midi: 76, dur: 0.5, vel: 0.83 },   // E5
        { t: 46, div: 'great', midi: 78, dur: 0.5, vel: 0.85 },     // F#5
        { t: 46.5, div: 'great', midi: 76, dur: 0.5, vel: 0.83 },   // E5
        { t: 47, div: 'great', midi: 74, dur: 1, vel: 0.85 },       // D5

        // Bass entry: Pedal, D major - bar 24
        { t: 48, div: 'pedal', midi: 38, dur: 0.5, vel: 0.8 },      // D2
        { t: 48.5, div: 'pedal', midi: 50, dur: 0.5, vel: 0.82 },   // D3
        { t: 49, div: 'pedal', midi: 49, dur: 0.25, vel: 0.8 },     // C#3
        { t: 49.25, div: 'pedal', midi: 50, dur: 0.25, vel: 0.82 }, // D3
        { t: 49.5, div: 'pedal', midi: 52, dur: 0.5, vel: 0.82 },   // E3
        { t: 50, div: 'pedal', midi: 50, dur: 0.5, vel: 0.8 },      // D3
        { t: 50.5, div: 'pedal', midi: 49, dur: 0.25, vel: 0.78 },  // C#3
        { t: 50.75, div: 'pedal', midi: 47, dur: 0.25, vel: 0.78 }, // B2
        { t: 51, div: 'pedal', midi: 45, dur: 0.5, vel: 0.8 },      // A2
        { t: 51.5, div: 'pedal', midi: 47, dur: 0.5, vel: 0.82 },   // B2

        // Upper voices during bass entry
        { t: 48, div: 'great', midi: 74, dur: 1, vel: 0.82 },       // D5
        { t: 49, div: 'great', midi: 73, dur: 1, vel: 0.8 },        // C#5
        { t: 50, div: 'great', midi: 71, dur: 1, vel: 0.8 },        // B4
        { t: 51, div: 'great', midi: 69, dur: 1, vel: 0.82 },       // A4

        { t: 48, div: 'swell', midi: 62, dur: 0.5, vel: 0.75 },     // D4
        { t: 48.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.73 },   // E4
        { t: 49, div: 'swell', midi: 66, dur: 0.5, vel: 0.75 },     // F#4
        { t: 49.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.73 },   // E4
        { t: 50, div: 'swell', midi: 62, dur: 0.5, vel: 0.73 },     // D4
        { t: 50.5, div: 'swell', midi: 61, dur: 0.5, vel: 0.72 },   // C#4
        { t: 51, div: 'swell', midi: 62, dur: 0.5, vel: 0.73 },     // D4
        { t: 51.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.75 },   // E4

        // Bass entry continues bar 25-26
        { t: 52, div: 'pedal', midi: 49, dur: 0.5, vel: 0.82 },     // C#3
        { t: 52.5, div: 'pedal', midi: 50, dur: 0.25, vel: 0.82 },  // D3
        { t: 52.75, div: 'pedal', midi: 52, dur: 0.25, vel: 0.83 }, // E3
        { t: 53, div: 'pedal', midi: 54, dur: 0.5, vel: 0.85 },     // F#3
        { t: 53.5, div: 'pedal', midi: 52, dur: 0.5, vel: 0.82 },   // E3
        { t: 54, div: 'pedal', midi: 50, dur: 0.5, vel: 0.82 },     // D3
        { t: 54.5, div: 'pedal', midi: 49, dur: 0.25, vel: 0.8 },   // C#3
        { t: 54.75, div: 'pedal', midi: 47, dur: 0.25, vel: 0.8 },  // B2
        { t: 55, div: 'pedal', midi: 45, dur: 0.5, vel: 0.8 },      // A2
        { t: 55.5, div: 'pedal', midi: 42, dur: 0.5, vel: 0.78 },   // F#2

        // Bars 27-30: Development with all voices
        { t: 56, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },     // D5
        { t: 56.5, div: 'great', midi: 73, dur: 0.25, vel: 0.85 },  // C#5
        { t: 56.75, div: 'great', midi: 74, dur: 0.25, vel: 0.87 }, // D5
        { t: 57, div: 'great', midi: 76, dur: 0.5, vel: 0.88 },     // E5
        { t: 57.5, div: 'great', midi: 74, dur: 0.5, vel: 0.85 },   // D5
        { t: 58, div: 'great', midi: 71, dur: 0.5, vel: 0.85 },     // B4
        { t: 58.5, div: 'great', midi: 69, dur: 0.5, vel: 0.83 },   // A4
        { t: 59, div: 'great', midi: 67, dur: 0.5, vel: 0.83 },     // G4
        { t: 59.5, div: 'great', midi: 66, dur: 0.5, vel: 0.85 },   // F#4

        { t: 56, div: 'swell', midi: 66, dur: 0.5, vel: 0.75 },     // F#4
        { t: 56.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.73 },   // E4
        { t: 57, div: 'swell', midi: 62, dur: 0.5, vel: 0.73 },     // D4
        { t: 57.5, div: 'swell', midi: 61, dur: 0.5, vel: 0.72 },   // C#4
        { t: 58, div: 'swell', midi: 59, dur: 0.5, vel: 0.72 },     // B3
        { t: 58.5, div: 'swell', midi: 57, dur: 0.5, vel: 0.7 },    // A3
        { t: 59, div: 'swell', midi: 55, dur: 0.5, vel: 0.7 },      // G3
        { t: 59.5, div: 'swell', midi: 54, dur: 0.5, vel: 0.72 },   // F#3

        { t: 56, div: 'pedal', midi: 43, dur: 1, vel: 0.78 },       // G2
        { t: 57, div: 'pedal', midi: 45, dur: 1, vel: 0.78 },       // A2
        { t: 58, div: 'pedal', midi: 47, dur: 1, vel: 0.78 },       // B2
        { t: 59, div: 'pedal', midi: 50, dur: 1, vel: 0.78 },       // D3

        // Final bars 31-33: Triumphant cadence in D major
        { t: 60, div: 'great', midi: 69, dur: 0.5, vel: 0.9 },      // A4
        { t: 60.5, div: 'great', midi: 74, dur: 0.5, vel: 0.92 },   // D5
        { t: 61, div: 'great', midi: 78, dur: 0.5, vel: 0.93 },     // F#5
        { t: 61.5, div: 'great', midi: 74, dur: 0.5, vel: 0.9 },    // D5
        { t: 62, div: 'great', midi: 76, dur: 1, vel: 0.92 },       // E5
        { t: 63, div: 'great', midi: 74, dur: 2, vel: 0.95 },       // D5

        { t: 60, div: 'swell', midi: 57, dur: 0.5, vel: 0.78 },     // A3
        { t: 60.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.8 },    // D4
        { t: 61, div: 'swell', midi: 66, dur: 0.5, vel: 0.8 },      // F#4
        { t: 61.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.78 },   // D4
        { t: 62, div: 'swell', midi: 61, dur: 1, vel: 0.78 },       // C#4
        { t: 63, div: 'swell', midi: 62, dur: 2, vel: 0.82 },       // D4

        { t: 60, div: 'pedal', midi: 45, dur: 1, vel: 0.82 },       // A2
        { t: 61, div: 'pedal', midi: 45, dur: 1, vel: 0.82 },       // A2
        { t: 62, div: 'pedal', midi: 45, dur: 1, vel: 0.82 },       // A2
        { t: 63, div: 'pedal', midi: 38, dur: 2, vel: 0.88 },       // D2
    ]
};


// ============================================================
// 2. Prelude and Fugue in E minor "Wedge", BWV 548
//    Named for the fugue subject that expands like a wedge
//    Key: E minor. Tempo ~72 (Prelude), ~80 (Fugue)
//    Prelude: grand, symphonic in scope (137 bars)
//    Fugue: da capo form, subject with chromatic wedge expansion
// ============================================================

const PIECE_BACH_WEDGE = {
    title: 'Prelude and Fugue in E minor "Wedge"',
    composer: "Johann Sebastian Bach",
    catalog: "BWV 548",
    key: "E minor",
    tempo: 72,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4'],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ======== PRELUDE (bars 1-12): Grand opening in E minor ========
        // Bar 1: Full E minor chord, then stepwise motion
        { t: 0, div: 'great', midi: 76, dur: 1, vel: 0.9 },         // E5
        { t: 0, div: 'great', midi: 71, dur: 1, vel: 0.88 },        // B4
        { t: 0, div: 'swell', midi: 67, dur: 1, vel: 0.78 },        // G4
        { t: 0, div: 'swell', midi: 64, dur: 1, vel: 0.75 },        // E4
        { t: 0, div: 'pedal', midi: 40, dur: 2, vel: 0.85 },        // E2
        { t: 1, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },      // D5
        { t: 1.5, div: 'great', midi: 76, dur: 0.5, vel: 0.9 },     // E5
        { t: 1, div: 'swell', midi: 71, dur: 0.5, vel: 0.78 },      // B4
        { t: 1.5, div: 'swell', midi: 67, dur: 0.5, vel: 0.75 },    // G4
        { t: 2, div: 'great', midi: 78, dur: 0.5, vel: 0.9 },       // F#5
        { t: 2.5, div: 'great', midi: 76, dur: 0.5, vel: 0.88 },    // E5
        { t: 2, div: 'swell', midi: 71, dur: 1, vel: 0.78 },        // B4
        { t: 2, div: 'swell', midi: 66, dur: 1, vel: 0.75 },        // F#4
        { t: 2, div: 'pedal', midi: 47, dur: 2, vel: 0.82 },        // B2
        { t: 3, div: 'great', midi: 74, dur: 0.5, vel: 0.87 },      // D5
        { t: 3.5, div: 'great', midi: 72, dur: 0.5, vel: 0.85 },    // C5

        // Bar 3-4: Descending sequence
        { t: 4, div: 'great', midi: 71, dur: 0.5, vel: 0.88 },      // B4
        { t: 4.5, div: 'great', midi: 72, dur: 0.5, vel: 0.88 },    // C5
        { t: 5, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },      // D5
        { t: 5.5, div: 'great', midi: 71, dur: 0.5, vel: 0.85 },    // B4
        { t: 4, div: 'swell', midi: 67, dur: 0.5, vel: 0.75 },      // G4
        { t: 4.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.73 },    // E4
        { t: 5, div: 'swell', midi: 66, dur: 0.5, vel: 0.75 },      // F#4
        { t: 5.5, div: 'swell', midi: 67, dur: 0.5, vel: 0.75 },    // G4
        { t: 4, div: 'pedal', midi: 48, dur: 2, vel: 0.82 },        // C3
        { t: 6, div: 'great', midi: 69, dur: 0.5, vel: 0.87 },      // A4
        { t: 6.5, div: 'great', midi: 71, dur: 0.5, vel: 0.88 },    // B4
        { t: 7, div: 'great', midi: 72, dur: 0.5, vel: 0.88 },      // C5
        { t: 7.5, div: 'great', midi: 69, dur: 0.5, vel: 0.85 },    // A4
        { t: 6, div: 'swell', midi: 64, dur: 0.5, vel: 0.73 },      // E4
        { t: 6.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.72 },    // D4
        { t: 7, div: 'swell', midi: 60, dur: 0.5, vel: 0.72 },      // C4
        { t: 7.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.73 },    // E4
        { t: 6, div: 'pedal', midi: 45, dur: 2, vel: 0.8 },         // A2

        // Bars 5-6: Building intensity
        { t: 8, div: 'great', midi: 67, dur: 0.5, vel: 0.85 },      // G4
        { t: 8.5, div: 'great', midi: 71, dur: 0.5, vel: 0.87 },    // B4
        { t: 9, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },      // D5
        { t: 9.5, div: 'great', midi: 76, dur: 0.5, vel: 0.9 },     // E5
        { t: 10, div: 'great', midi: 78, dur: 0.5, vel: 0.9 },      // F#5
        { t: 10.5, div: 'great', midi: 76, dur: 0.5, vel: 0.88 },   // E5
        { t: 11, div: 'great', midi: 74, dur: 0.5, vel: 0.87 },     // D5
        { t: 11.5, div: 'great', midi: 72, dur: 0.5, vel: 0.85 },   // C5

        { t: 8, div: 'swell', midi: 59, dur: 0.5, vel: 0.73 },      // B3
        { t: 8.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.75 },    // D4
        { t: 9, div: 'swell', midi: 66, dur: 0.5, vel: 0.75 },      // F#4
        { t: 9.5, div: 'swell', midi: 67, dur: 0.5, vel: 0.77 },    // G4
        { t: 10, div: 'swell', midi: 66, dur: 0.5, vel: 0.75 },     // F#4
        { t: 10.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.73 },   // E4
        { t: 11, div: 'swell', midi: 62, dur: 0.5, vel: 0.73 },     // D4
        { t: 11.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.72 },   // C4

        { t: 8, div: 'pedal', midi: 43, dur: 2, vel: 0.82 },        // G2
        { t: 10, div: 'pedal', midi: 42, dur: 2, vel: 0.82 },       // F#2

        // Bars 7-8: Intensifying with chromatic movement
        { t: 12, div: 'great', midi: 71, dur: 0.5, vel: 0.88 },     // B4
        { t: 12.5, div: 'great', midi: 72, dur: 0.5, vel: 0.88 },   // C5
        { t: 13, div: 'great', midi: 71, dur: 0.5, vel: 0.87 },     // B4
        { t: 13.5, div: 'great', midi: 69, dur: 0.5, vel: 0.85 },   // A4
        { t: 14, div: 'great', midi: 67, dur: 0.5, vel: 0.85 },     // G4
        { t: 14.5, div: 'great', midi: 69, dur: 0.5, vel: 0.87 },   // A4
        { t: 15, div: 'great', midi: 71, dur: 1, vel: 0.9 },        // B4

        { t: 12, div: 'swell', midi: 59, dur: 0.5, vel: 0.73 },     // B3
        { t: 12.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.73 },   // C4
        { t: 13, div: 'swell', midi: 62, dur: 0.5, vel: 0.75 },     // D4
        { t: 13.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 14, div: 'swell', midi: 62, dur: 0.5, vel: 0.73 },     // D4
        { t: 14.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.72 },   // C4
        { t: 15, div: 'swell', midi: 59, dur: 1, vel: 0.75 },       // B3

        { t: 12, div: 'pedal', midi: 40, dur: 2, vel: 0.83 },       // E2
        { t: 14, div: 'pedal', midi: 40, dur: 2, vel: 0.83 },       // E2

        // ======== FUGUE: Wedge subject (bars 13+) ========
        // The famous wedge: starts on E, expands chromatically outward
        // One voice goes up by semitones, the other down - like a wedge opening
        // Subject entry 1: Alto on Swell
        // The wedge: E4, then E-F and Eb, then F#-D, then G-C#, etc.

        // Bar 13: Wedge subject - starts with E alone
        { t: 16, div: 'swell', midi: 64, dur: 1, vel: 0.8 },        // E4 (whole)

        // Bar 14: Wedge opens - upper voice rises, lower descends
        { t: 17, div: 'swell', midi: 65, dur: 0.5, vel: 0.8 },      // F4 (up semitone)
        { t: 17.5, div: 'swell', midi: 63, dur: 0.5, vel: 0.78 },   // Eb4 (down semitone)
        { t: 18, div: 'swell', midi: 66, dur: 0.5, vel: 0.82 },     // F#4 (up)
        { t: 18.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.78 },   // D4 (down)

        // Bar 15: Wedge continues expanding
        { t: 19, div: 'swell', midi: 67, dur: 0.5, vel: 0.83 },     // G4
        { t: 19.5, div: 'swell', midi: 61, dur: 0.5, vel: 0.77 },   // C#4
        { t: 20, div: 'swell', midi: 69, dur: 0.5, vel: 0.85 },     // A4
        { t: 20.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.77 },   // C4

        // Bar 16: Wedge at full width - octave
        { t: 21, div: 'swell', midi: 71, dur: 0.5, vel: 0.87 },     // B4
        { t: 21.5, div: 'swell', midi: 59, dur: 0.5, vel: 0.75 },   // B3
        { t: 22, div: 'swell', midi: 72, dur: 0.5, vel: 0.88 },     // C5
        { t: 22.5, div: 'swell', midi: 57, dur: 0.5, vel: 0.75 },   // A3

        // Bar 17: Subject tail - running passage
        { t: 23, div: 'swell', midi: 71, dur: 0.5, vel: 0.85 },     // B4
        { t: 23.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.83 },  // A4
        { t: 23.75, div: 'swell', midi: 67, dur: 0.25, vel: 0.82 }, // G4
        { t: 24, div: 'swell', midi: 66, dur: 0.25, vel: 0.8 },     // F#4
        { t: 24.25, div: 'swell', midi: 67, dur: 0.25, vel: 0.82 }, // G4
        { t: 24.5, div: 'swell', midi: 69, dur: 0.5, vel: 0.83 },   // A4
        { t: 25, div: 'swell', midi: 67, dur: 0.5, vel: 0.82 },     // G4
        { t: 25.5, div: 'swell', midi: 66, dur: 0.25, vel: 0.8 },   // F#4
        { t: 25.75, div: 'swell', midi: 64, dur: 0.25, vel: 0.8 },  // E4

        // Answer entry: Soprano on Great, B minor (dominant)
        // Bar 18: Wedge on B
        { t: 26, div: 'great', midi: 71, dur: 1, vel: 0.85 },       // B4

        // Bar 19: Wedge opens from B
        { t: 27, div: 'great', midi: 72, dur: 0.5, vel: 0.85 },     // C5
        { t: 27.5, div: 'great', midi: 70, dur: 0.5, vel: 0.83 },   // Bb4
        { t: 28, div: 'great', midi: 73, dur: 0.5, vel: 0.87 },     // C#5
        { t: 28.5, div: 'great', midi: 69, dur: 0.5, vel: 0.83 },   // A4

        // Countersubject in alto
        { t: 26, div: 'swell', midi: 64, dur: 0.5, vel: 0.75 },     // E4
        { t: 26.5, div: 'swell', midi: 66, dur: 0.5, vel: 0.77 },   // F#4
        { t: 27, div: 'swell', midi: 67, dur: 0.5, vel: 0.78 },     // G4
        { t: 27.5, div: 'swell', midi: 66, dur: 0.5, vel: 0.77 },   // F#4
        { t: 28, div: 'swell', midi: 64, dur: 0.5, vel: 0.75 },     // E4
        { t: 28.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.73 },   // D4

        // Bar 20: Soprano wedge continues
        { t: 29, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },     // D5
        { t: 29.5, div: 'great', midi: 68, dur: 0.5, vel: 0.82 },   // G#4
        { t: 30, div: 'great', midi: 76, dur: 0.5, vel: 0.9 },      // E5
        { t: 30.5, div: 'great', midi: 67, dur: 0.5, vel: 0.82 },   // G4

        { t: 29, div: 'swell', midi: 60, dur: 0.5, vel: 0.73 },     // C4
        { t: 29.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.75 },   // D4
        { t: 30, div: 'swell', midi: 64, dur: 0.5, vel: 0.75 },     // E4
        { t: 30.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.73 },   // D4

        // Bar 21: Wedge at full width
        { t: 31, div: 'great', midi: 78, dur: 0.5, vel: 0.92 },     // F#5
        { t: 31.5, div: 'great', midi: 66, dur: 0.5, vel: 0.8 },    // F#4
        { t: 32, div: 'great', midi: 79, dur: 0.5, vel: 0.92 },     // G5
        { t: 32.5, div: 'great', midi: 64, dur: 0.5, vel: 0.8 },    // E4

        { t: 31, div: 'swell', midi: 59, dur: 0.5, vel: 0.72 },     // B3
        { t: 31.5, div: 'swell', midi: 57, dur: 0.5, vel: 0.7 },    // A3
        { t: 32, div: 'swell', midi: 59, dur: 0.5, vel: 0.72 },     // B3
        { t: 32.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.73 },   // C4

        // Bass entry: Pedal, E minor
        // Bar 22: Wedge on E in pedal
        { t: 33, div: 'pedal', midi: 40, dur: 1, vel: 0.82 },       // E2

        // Answer running tail in soprano
        { t: 33, div: 'great', midi: 78, dur: 0.5, vel: 0.88 },     // F#5
        { t: 33.5, div: 'great', midi: 76, dur: 0.25, vel: 0.85 },  // E5
        { t: 33.75, div: 'great', midi: 74, dur: 0.25, vel: 0.85 }, // D5
        { t: 34, div: 'great', midi: 73, dur: 0.25, vel: 0.83 },    // C#5
        { t: 34.25, div: 'great', midi: 74, dur: 0.25, vel: 0.85 }, // D5
        { t: 34.5, div: 'great', midi: 76, dur: 0.5, vel: 0.87 },   // E5

        // Countersubject in alto
        { t: 33, div: 'swell', midi: 64, dur: 0.5, vel: 0.75 },     // E4
        { t: 33.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.73 },   // D4
        { t: 34, div: 'swell', midi: 59, dur: 0.5, vel: 0.72 },     // B3
        { t: 34.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.73 },   // C4

        // Bar 23: Pedal wedge opens
        { t: 35, div: 'pedal', midi: 41, dur: 0.5, vel: 0.82 },     // F2
        { t: 35.5, div: 'pedal', midi: 39, dur: 0.5, vel: 0.8 },    // Eb2
        { t: 36, div: 'pedal', midi: 42, dur: 0.5, vel: 0.83 },     // F#2
        { t: 36.5, div: 'pedal', midi: 38, dur: 0.5, vel: 0.8 },    // D2

        { t: 35, div: 'great', midi: 74, dur: 0.5, vel: 0.85 },     // D5
        { t: 35.5, div: 'great', midi: 71, dur: 0.5, vel: 0.83 },   // B4
        { t: 36, div: 'great', midi: 72, dur: 0.5, vel: 0.85 },     // C5
        { t: 36.5, div: 'great', midi: 74, dur: 0.5, vel: 0.87 },   // D5

        { t: 35, div: 'swell', midi: 62, dur: 0.5, vel: 0.75 },     // D4
        { t: 35.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 36, div: 'swell', midi: 66, dur: 0.5, vel: 0.77 },     // F#4
        { t: 36.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.75 },   // E4

        // Bar 24: Pedal wedge expands further
        { t: 37, div: 'pedal', midi: 43, dur: 0.5, vel: 0.85 },     // G2
        { t: 37.5, div: 'pedal', midi: 37, dur: 0.5, vel: 0.78 },   // C#2
        { t: 38, div: 'pedal', midi: 45, dur: 0.5, vel: 0.87 },     // A2
        { t: 38.5, div: 'pedal', midi: 36, dur: 0.5, vel: 0.78 },   // C2

        // Bars 25-28: Episode with toccata passages
        { t: 39, div: 'great', midi: 76, dur: 0.25, vel: 0.9 },     // E5
        { t: 39.25, div: 'great', midi: 74, dur: 0.25, vel: 0.88 }, // D5
        { t: 39.5, div: 'great', midi: 72, dur: 0.25, vel: 0.87 },  // C5
        { t: 39.75, div: 'great', midi: 71, dur: 0.25, vel: 0.85 }, // B4
        { t: 40, div: 'great', midi: 69, dur: 0.25, vel: 0.85 },    // A4
        { t: 40.25, div: 'great', midi: 71, dur: 0.25, vel: 0.87 }, // B4
        { t: 40.5, div: 'great', midi: 72, dur: 0.25, vel: 0.88 },  // C5
        { t: 40.75, div: 'great', midi: 74, dur: 0.25, vel: 0.88 }, // D5
        { t: 41, div: 'great', midi: 76, dur: 0.25, vel: 0.9 },     // E5
        { t: 41.25, div: 'great', midi: 78, dur: 0.25, vel: 0.92 }, // F#5
        { t: 41.5, div: 'great', midi: 79, dur: 0.25, vel: 0.92 },  // G5
        { t: 41.75, div: 'great', midi: 78, dur: 0.25, vel: 0.9 },  // F#5
        { t: 42, div: 'great', midi: 76, dur: 1, vel: 0.92 },       // E5

        { t: 39, div: 'swell', midi: 67, dur: 0.5, vel: 0.78 },     // G4
        { t: 39.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 40, div: 'swell', midi: 62, dur: 0.5, vel: 0.73 },     // D4
        { t: 40.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 41, div: 'swell', midi: 67, dur: 0.5, vel: 0.78 },     // G4
        { t: 41.5, div: 'swell', midi: 71, dur: 0.5, vel: 0.8 },    // B4
        { t: 42, div: 'swell', midi: 67, dur: 1, vel: 0.78 },       // G4

        { t: 39, div: 'pedal', midi: 47, dur: 1, vel: 0.83 },       // B2
        { t: 40, div: 'pedal', midi: 45, dur: 1, vel: 0.82 },       // A2
        { t: 41, div: 'pedal', midi: 43, dur: 1, vel: 0.82 },       // G2
        { t: 42, div: 'pedal', midi: 40, dur: 1, vel: 0.85 },       // E2

        // Bars 29-32: Fourth voice entry and development
        { t: 43, div: 'great', midi: 76, dur: 0.5, vel: 0.88 },     // E5
        { t: 43.5, div: 'great', midi: 74, dur: 0.5, vel: 0.85 },   // D5
        { t: 44, div: 'great', midi: 72, dur: 0.5, vel: 0.85 },     // C5
        { t: 44.5, div: 'great', midi: 71, dur: 0.5, vel: 0.83 },   // B4
        { t: 45, div: 'great', midi: 69, dur: 0.5, vel: 0.83 },     // A4
        { t: 45.5, div: 'great', midi: 67, dur: 0.5, vel: 0.82 },   // G4
        { t: 46, div: 'great', midi: 66, dur: 0.5, vel: 0.83 },     // F#4
        { t: 46.5, div: 'great', midi: 69, dur: 0.5, vel: 0.85 },   // A4

        { t: 43, div: 'swell', midi: 64, dur: 1, vel: 0.78 },       // E4 (new wedge)
        { t: 44, div: 'swell', midi: 65, dur: 0.5, vel: 0.78 },     // F4
        { t: 44.5, div: 'swell', midi: 63, dur: 0.5, vel: 0.75 },   // Eb4
        { t: 45, div: 'swell', midi: 66, dur: 0.5, vel: 0.8 },      // F#4
        { t: 45.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.75 },   // D4
        { t: 46, div: 'swell', midi: 67, dur: 0.5, vel: 0.8 },      // G4
        { t: 46.5, div: 'swell', midi: 61, dur: 0.5, vel: 0.73 },   // C#4

        { t: 43, div: 'pedal', midi: 48, dur: 2, vel: 0.82 },       // C3
        { t: 45, div: 'pedal', midi: 45, dur: 2, vel: 0.8 },        // A2

        // Bars 33-36: Climactic section
        { t: 47, div: 'great', midi: 71, dur: 0.25, vel: 0.9 },     // B4
        { t: 47.25, div: 'great', midi: 72, dur: 0.25, vel: 0.9 },  // C5
        { t: 47.5, div: 'great', midi: 74, dur: 0.25, vel: 0.92 },  // D5
        { t: 47.75, div: 'great', midi: 76, dur: 0.25, vel: 0.92 }, // E5
        { t: 48, div: 'great', midi: 78, dur: 0.5, vel: 0.93 },     // F#5
        { t: 48.5, div: 'great', midi: 76, dur: 0.5, vel: 0.9 },    // E5
        { t: 49, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },     // D5
        { t: 49.5, div: 'great', midi: 72, dur: 0.5, vel: 0.87 },   // C5
        { t: 50, div: 'great', midi: 71, dur: 2, vel: 0.92 },       // B4

        { t: 47, div: 'swell', midi: 67, dur: 1, vel: 0.8 },        // G4
        { t: 48, div: 'swell', midi: 66, dur: 1, vel: 0.78 },       // F#4
        { t: 49, div: 'swell', midi: 64, dur: 1, vel: 0.77 },       // E4
        { t: 50, div: 'swell', midi: 59, dur: 2, vel: 0.78 },       // B3

        { t: 47, div: 'pedal', midi: 40, dur: 1, vel: 0.85 },       // E2
        { t: 48, div: 'pedal', midi: 42, dur: 1, vel: 0.85 },       // F#2
        { t: 49, div: 'pedal', midi: 43, dur: 1, vel: 0.83 },       // G2
        { t: 50, div: 'pedal', midi: 40, dur: 2, vel: 0.88 },       // E2 (final)
    ]
};


// ============================================================
// 3. Toccata in F major, BWV 540
//    Massive double-pedal toccata, one of Bach's most virtuosic
//    Key: F major. Tempo ~88
//    Opens with two-part canon over F pedal point (108 bars)
//    Features extraordinary pedal solos
// ============================================================

const PIECE_BACH_TOCCATA_F = {
    title: "Toccata in F major",
    composer: "Johann Sebastian Bach",
    catalog: "BWV 540",
    key: "F major",
    tempo: 88,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-subbass32']
    },
    events: [
        // ======== TOCCATA: Two-part canon over F pedal point ========
        // Bar 1-2: Right hand begins the canon subject in 16th notes
        // over an unwavering F pedal in the feet
        { t: 0, div: 'pedal', midi: 41, dur: 8, vel: 0.82 },        // F2 pedal point (sustained 2 bars)

        // Canon leader (right hand) - perpetual motion 16ths in F major
        // Bar 1
        { t: 0, div: 'great', midi: 77, dur: 0.25, vel: 0.85 },     // F5
        { t: 0.25, div: 'great', midi: 76, dur: 0.25, vel: 0.83 },  // E5
        { t: 0.5, div: 'great', midi: 77, dur: 0.25, vel: 0.85 },   // F5
        { t: 0.75, div: 'great', midi: 72, dur: 0.25, vel: 0.82 },  // C5
        { t: 1, div: 'great', midi: 69, dur: 0.25, vel: 0.82 },     // A4
        { t: 1.25, div: 'great', midi: 72, dur: 0.25, vel: 0.83 },  // C5
        { t: 1.5, div: 'great', midi: 77, dur: 0.25, vel: 0.85 },   // F5
        { t: 1.75, div: 'great', midi: 76, dur: 0.25, vel: 0.83 },  // E5
        { t: 2, div: 'great', midi: 77, dur: 0.25, vel: 0.85 },     // F5
        { t: 2.25, div: 'great', midi: 79, dur: 0.25, vel: 0.87 },  // G5
        { t: 2.5, div: 'great', midi: 77, dur: 0.25, vel: 0.85 },   // F5
        { t: 2.75, div: 'great', midi: 76, dur: 0.25, vel: 0.83 },  // E5
        { t: 3, div: 'great', midi: 74, dur: 0.25, vel: 0.83 },     // D5
        { t: 3.25, div: 'great', midi: 72, dur: 0.25, vel: 0.82 },  // C5
        { t: 3.5, div: 'great', midi: 70, dur: 0.25, vel: 0.82 },   // Bb4
        { t: 3.75, div: 'great', midi: 69, dur: 0.25, vel: 0.8 },   // A4

        // Bar 2: Canon leader continues
        { t: 4, div: 'great', midi: 70, dur: 0.25, vel: 0.82 },     // Bb4
        { t: 4.25, div: 'great', midi: 72, dur: 0.25, vel: 0.83 },  // C5
        { t: 4.5, div: 'great', midi: 74, dur: 0.25, vel: 0.85 },   // D5
        { t: 4.75, div: 'great', midi: 72, dur: 0.25, vel: 0.83 },  // C5
        { t: 5, div: 'great', midi: 70, dur: 0.25, vel: 0.82 },     // Bb4
        { t: 5.25, div: 'great', midi: 69, dur: 0.25, vel: 0.8 },   // A4
        { t: 5.5, div: 'great', midi: 67, dur: 0.25, vel: 0.8 },    // G4
        { t: 5.75, div: 'great', midi: 69, dur: 0.25, vel: 0.82 },  // A4
        { t: 6, div: 'great', midi: 70, dur: 0.25, vel: 0.83 },     // Bb4
        { t: 6.25, div: 'great', midi: 69, dur: 0.25, vel: 0.82 },  // A4
        { t: 6.5, div: 'great', midi: 67, dur: 0.25, vel: 0.8 },    // G4
        { t: 6.75, div: 'great', midi: 65, dur: 0.25, vel: 0.8 },   // F4
        { t: 7, div: 'great', midi: 64, dur: 0.25, vel: 0.78 },     // E4
        { t: 7.25, div: 'great', midi: 65, dur: 0.25, vel: 0.8 },   // F4
        { t: 7.5, div: 'great', midi: 67, dur: 0.25, vel: 0.82 },   // G4
        { t: 7.75, div: 'great', midi: 69, dur: 0.25, vel: 0.83 },  // A4

        // Bar 3-4: Canon follower (left hand) enters one bar later
        // while right hand continues
        { t: 8, div: 'pedal', midi: 41, dur: 8, vel: 0.8 },         // F2 pedal point continues

        // Left hand: canon at the octave below
        { t: 8, div: 'swell', midi: 65, dur: 0.25, vel: 0.78 },     // F4
        { t: 8.25, div: 'swell', midi: 64, dur: 0.25, vel: 0.75 },  // E4
        { t: 8.5, div: 'swell', midi: 65, dur: 0.25, vel: 0.78 },   // F4
        { t: 8.75, div: 'swell', midi: 60, dur: 0.25, vel: 0.75 },  // C4
        { t: 9, div: 'swell', midi: 57, dur: 0.25, vel: 0.75 },     // A3
        { t: 9.25, div: 'swell', midi: 60, dur: 0.25, vel: 0.77 },  // C4
        { t: 9.5, div: 'swell', midi: 65, dur: 0.25, vel: 0.78 },   // F4
        { t: 9.75, div: 'swell', midi: 64, dur: 0.25, vel: 0.75 },  // E4
        { t: 10, div: 'swell', midi: 65, dur: 0.25, vel: 0.78 },    // F4
        { t: 10.25, div: 'swell', midi: 67, dur: 0.25, vel: 0.8 },  // G4
        { t: 10.5, div: 'swell', midi: 65, dur: 0.25, vel: 0.78 },  // F4
        { t: 10.75, div: 'swell', midi: 64, dur: 0.25, vel: 0.75 }, // E4
        { t: 11, div: 'swell', midi: 62, dur: 0.25, vel: 0.75 },    // D4
        { t: 11.25, div: 'swell', midi: 60, dur: 0.25, vel: 0.73 }, // C4
        { t: 11.5, div: 'swell', midi: 58, dur: 0.25, vel: 0.73 },  // Bb3
        { t: 11.75, div: 'swell', midi: 57, dur: 0.25, vel: 0.72 }, // A3

        // Right hand continues canon bar 3-4
        { t: 8, div: 'great', midi: 70, dur: 0.25, vel: 0.85 },     // Bb4
        { t: 8.25, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },  // C5
        { t: 8.5, div: 'great', midi: 74, dur: 0.25, vel: 0.87 },   // D5
        { t: 8.75, div: 'great', midi: 77, dur: 0.25, vel: 0.88 },  // F5
        { t: 9, div: 'great', midi: 76, dur: 0.25, vel: 0.87 },     // E5
        { t: 9.25, div: 'great', midi: 74, dur: 0.25, vel: 0.85 },  // D5
        { t: 9.5, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },   // C5
        { t: 9.75, div: 'great', midi: 74, dur: 0.25, vel: 0.87 },  // D5
        { t: 10, div: 'great', midi: 76, dur: 0.25, vel: 0.88 },    // E5
        { t: 10.25, div: 'great', midi: 74, dur: 0.25, vel: 0.85 }, // D5
        { t: 10.5, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },  // C5
        { t: 10.75, div: 'great', midi: 70, dur: 0.25, vel: 0.83 }, // Bb4
        { t: 11, div: 'great', midi: 69, dur: 0.25, vel: 0.83 },    // A4
        { t: 11.25, div: 'great', midi: 70, dur: 0.25, vel: 0.85 }, // Bb4
        { t: 11.5, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },  // C5
        { t: 11.75, div: 'great', midi: 74, dur: 0.25, vel: 0.87 }, // D5

        // Bar 5-6: Canon continues developing, left hand follows
        { t: 12, div: 'swell', midi: 58, dur: 0.25, vel: 0.75 },    // Bb3
        { t: 12.25, div: 'swell', midi: 60, dur: 0.25, vel: 0.77 }, // C4
        { t: 12.5, div: 'swell', midi: 62, dur: 0.25, vel: 0.78 },  // D4
        { t: 12.75, div: 'swell', midi: 60, dur: 0.25, vel: 0.77 }, // C4
        { t: 13, div: 'swell', midi: 58, dur: 0.25, vel: 0.75 },    // Bb3
        { t: 13.25, div: 'swell', midi: 57, dur: 0.25, vel: 0.73 }, // A3
        { t: 13.5, div: 'swell', midi: 55, dur: 0.25, vel: 0.73 },  // G3
        { t: 13.75, div: 'swell', midi: 57, dur: 0.25, vel: 0.75 }, // A3
        { t: 14, div: 'swell', midi: 58, dur: 0.25, vel: 0.77 },    // Bb3
        { t: 14.25, div: 'swell', midi: 57, dur: 0.25, vel: 0.75 }, // A3
        { t: 14.5, div: 'swell', midi: 55, dur: 0.25, vel: 0.73 },  // G3
        { t: 14.75, div: 'swell', midi: 53, dur: 0.25, vel: 0.72 }, // F3
        { t: 15, div: 'swell', midi: 52, dur: 0.25, vel: 0.72 },    // E3
        { t: 15.25, div: 'swell', midi: 53, dur: 0.25, vel: 0.73 }, // F3
        { t: 15.5, div: 'swell', midi: 55, dur: 0.25, vel: 0.75 },  // G3
        { t: 15.75, div: 'swell', midi: 57, dur: 0.25, vel: 0.77 }, // A3

        // Right hand bars 5-6
        { t: 12, div: 'great', midi: 77, dur: 0.25, vel: 0.88 },    // F5
        { t: 12.25, div: 'great', midi: 76, dur: 0.25, vel: 0.87 }, // E5
        { t: 12.5, div: 'great', midi: 74, dur: 0.25, vel: 0.85 },  // D5
        { t: 12.75, div: 'great', midi: 72, dur: 0.25, vel: 0.85 }, // C5
        { t: 13, div: 'great', midi: 70, dur: 0.25, vel: 0.83 },    // Bb4
        { t: 13.25, div: 'great', midi: 69, dur: 0.25, vel: 0.83 }, // A4
        { t: 13.5, div: 'great', midi: 70, dur: 0.25, vel: 0.85 },  // Bb4
        { t: 13.75, div: 'great', midi: 72, dur: 0.25, vel: 0.85 }, // C5
        { t: 14, div: 'great', midi: 74, dur: 0.25, vel: 0.87 },    // D5
        { t: 14.25, div: 'great', midi: 76, dur: 0.25, vel: 0.88 }, // E5
        { t: 14.5, div: 'great', midi: 77, dur: 0.25, vel: 0.88 },  // F5
        { t: 14.75, div: 'great', midi: 79, dur: 0.25, vel: 0.9 },  // G5
        { t: 15, div: 'great', midi: 81, dur: 0.25, vel: 0.9 },     // A5
        { t: 15.25, div: 'great', midi: 79, dur: 0.25, vel: 0.88 }, // G5
        { t: 15.5, div: 'great', midi: 77, dur: 0.25, vel: 0.88 },  // F5
        { t: 15.75, div: 'great', midi: 76, dur: 0.25, vel: 0.87 }, // E5

        { t: 12, div: 'pedal', midi: 41, dur: 4, vel: 0.8 },        // F2 pedal point

        // ======== Bars 7-10: Pedal solo section ========
        // The pedal breaks free from its sustained note into virtuosic passage
        // Bar 7: Pedal solo begins
        { t: 16, div: 'pedal', midi: 41, dur: 0.25, vel: 0.85 },    // F2
        { t: 16.25, div: 'pedal', midi: 43, dur: 0.25, vel: 0.85 }, // G2
        { t: 16.5, div: 'pedal', midi: 45, dur: 0.25, vel: 0.87 },  // A2
        { t: 16.75, div: 'pedal', midi: 46, dur: 0.25, vel: 0.87 }, // Bb2
        { t: 17, div: 'pedal', midi: 48, dur: 0.25, vel: 0.88 },    // C3
        { t: 17.25, div: 'pedal', midi: 50, dur: 0.25, vel: 0.88 }, // D3
        { t: 17.5, div: 'pedal', midi: 52, dur: 0.25, vel: 0.9 },   // E3
        { t: 17.75, div: 'pedal', midi: 53, dur: 0.25, vel: 0.9 },  // F3
        { t: 18, div: 'pedal', midi: 55, dur: 0.25, vel: 0.9 },     // G3
        { t: 18.25, div: 'pedal', midi: 53, dur: 0.25, vel: 0.88 }, // F3
        { t: 18.5, div: 'pedal', midi: 52, dur: 0.25, vel: 0.87 },  // E3
        { t: 18.75, div: 'pedal', midi: 50, dur: 0.25, vel: 0.87 }, // D3
        { t: 19, div: 'pedal', midi: 48, dur: 0.25, vel: 0.85 },    // C3
        { t: 19.25, div: 'pedal', midi: 46, dur: 0.25, vel: 0.85 }, // Bb2
        { t: 19.5, div: 'pedal', midi: 45, dur: 0.25, vel: 0.83 },  // A2
        { t: 19.75, div: 'pedal', midi: 43, dur: 0.25, vel: 0.83 }, // G2

        // Bar 9: Pedal solo continues with wider leaps
        { t: 20, div: 'pedal', midi: 41, dur: 0.25, vel: 0.85 },    // F2
        { t: 20.25, div: 'pedal', midi: 48, dur: 0.25, vel: 0.87 }, // C3
        { t: 20.5, div: 'pedal', midi: 45, dur: 0.25, vel: 0.85 },  // A2
        { t: 20.75, div: 'pedal', midi: 53, dur: 0.25, vel: 0.88 }, // F3
        { t: 21, div: 'pedal', midi: 50, dur: 0.25, vel: 0.87 },    // D3
        { t: 21.25, div: 'pedal', midi: 46, dur: 0.25, vel: 0.85 }, // Bb2
        { t: 21.5, div: 'pedal', midi: 48, dur: 0.25, vel: 0.87 },  // C3
        { t: 21.75, div: 'pedal', midi: 45, dur: 0.25, vel: 0.85 }, // A2
        { t: 22, div: 'pedal', midi: 43, dur: 0.25, vel: 0.83 },    // G2
        { t: 22.25, div: 'pedal', midi: 46, dur: 0.25, vel: 0.85 }, // Bb2
        { t: 22.5, div: 'pedal', midi: 45, dur: 0.25, vel: 0.83 },  // A2
        { t: 22.75, div: 'pedal', midi: 43, dur: 0.25, vel: 0.82 }, // G2
        { t: 23, div: 'pedal', midi: 41, dur: 1, vel: 0.88 },       // F2

        // ======== Bars 11-14: Canon resumes in C major (dominant) ========
        // Hands switch: left leads, right follows
        { t: 24, div: 'pedal', midi: 48, dur: 8, vel: 0.8 },        // C3 pedal point

        // Left hand leads the canon in C major
        { t: 24, div: 'swell', midi: 60, dur: 0.25, vel: 0.78 },    // C4
        { t: 24.25, div: 'swell', midi: 59, dur: 0.25, vel: 0.75 }, // B3
        { t: 24.5, div: 'swell', midi: 60, dur: 0.25, vel: 0.78 },  // C4
        { t: 24.75, div: 'swell', midi: 55, dur: 0.25, vel: 0.75 }, // G3
        { t: 25, div: 'swell', midi: 52, dur: 0.25, vel: 0.75 },    // E3
        { t: 25.25, div: 'swell', midi: 55, dur: 0.25, vel: 0.77 }, // G3
        { t: 25.5, div: 'swell', midi: 60, dur: 0.25, vel: 0.78 },  // C4
        { t: 25.75, div: 'swell', midi: 59, dur: 0.25, vel: 0.75 }, // B3
        { t: 26, div: 'swell', midi: 60, dur: 0.25, vel: 0.78 },    // C4
        { t: 26.25, div: 'swell', midi: 62, dur: 0.25, vel: 0.8 },  // D4
        { t: 26.5, div: 'swell', midi: 60, dur: 0.25, vel: 0.78 },  // C4
        { t: 26.75, div: 'swell', midi: 59, dur: 0.25, vel: 0.75 }, // B3
        { t: 27, div: 'swell', midi: 57, dur: 0.25, vel: 0.75 },    // A3
        { t: 27.25, div: 'swell', midi: 55, dur: 0.25, vel: 0.73 }, // G3
        { t: 27.5, div: 'swell', midi: 53, dur: 0.25, vel: 0.73 },  // F3
        { t: 27.75, div: 'swell', midi: 52, dur: 0.25, vel: 0.72 }, // E3

        // Right hand follows one bar later in C major
        { t: 28, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },    // C5
        { t: 28.25, div: 'great', midi: 71, dur: 0.25, vel: 0.83 }, // B4
        { t: 28.5, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },  // C5
        { t: 28.75, div: 'great', midi: 67, dur: 0.25, vel: 0.82 }, // G4
        { t: 29, div: 'great', midi: 64, dur: 0.25, vel: 0.82 },    // E4
        { t: 29.25, div: 'great', midi: 67, dur: 0.25, vel: 0.83 }, // G4
        { t: 29.5, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },  // C5
        { t: 29.75, div: 'great', midi: 71, dur: 0.25, vel: 0.83 }, // B4
        { t: 30, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },    // C5
        { t: 30.25, div: 'great', midi: 74, dur: 0.25, vel: 0.87 }, // D5
        { t: 30.5, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },  // C5
        { t: 30.75, div: 'great', midi: 71, dur: 0.25, vel: 0.83 }, // B4
        { t: 31, div: 'great', midi: 69, dur: 0.25, vel: 0.83 },    // A4
        { t: 31.25, div: 'great', midi: 67, dur: 0.25, vel: 0.82 }, // G4
        { t: 31.5, div: 'great', midi: 65, dur: 0.25, vel: 0.8 },   // F4
        { t: 31.75, div: 'great', midi: 64, dur: 0.25, vel: 0.8 },  // E4

        // Left hand continues bars 13-14
        { t: 28, div: 'swell', midi: 53, dur: 0.25, vel: 0.75 },    // F3
        { t: 28.25, div: 'swell', midi: 55, dur: 0.25, vel: 0.77 }, // G3
        { t: 28.5, div: 'swell', midi: 57, dur: 0.25, vel: 0.78 },  // A3
        { t: 28.75, div: 'swell', midi: 55, dur: 0.25, vel: 0.77 }, // G3
        { t: 29, div: 'swell', midi: 53, dur: 0.25, vel: 0.75 },    // F3
        { t: 29.25, div: 'swell', midi: 52, dur: 0.25, vel: 0.73 }, // E3
        { t: 29.5, div: 'swell', midi: 50, dur: 0.25, vel: 0.73 },  // D3
        { t: 29.75, div: 'swell', midi: 52, dur: 0.25, vel: 0.75 }, // E3
        { t: 30, div: 'swell', midi: 53, dur: 0.25, vel: 0.77 },    // F3
        { t: 30.25, div: 'swell', midi: 52, dur: 0.25, vel: 0.75 }, // E3
        { t: 30.5, div: 'swell', midi: 50, dur: 0.25, vel: 0.73 },  // D3
        { t: 30.75, div: 'swell', midi: 48, dur: 0.25, vel: 0.72 }, // C3
        { t: 31, div: 'swell', midi: 47, dur: 0.25, vel: 0.72 },    // B2
        { t: 31.25, div: 'swell', midi: 48, dur: 0.25, vel: 0.73 }, // C3
        { t: 31.5, div: 'swell', midi: 50, dur: 0.25, vel: 0.75 },  // D3
        { t: 31.75, div: 'swell', midi: 52, dur: 0.25, vel: 0.77 }, // E3

        // ======== Bars 15-18: Second pedal solo + chordal interruption ========
        // Bar 15-16: Another pedal virtuoso passage
        { t: 32, div: 'pedal', midi: 48, dur: 0.25, vel: 0.87 },    // C3
        { t: 32.25, div: 'pedal', midi: 50, dur: 0.25, vel: 0.87 }, // D3
        { t: 32.5, div: 'pedal', midi: 52, dur: 0.25, vel: 0.88 },  // E3
        { t: 32.75, div: 'pedal', midi: 53, dur: 0.25, vel: 0.88 }, // F3
        { t: 33, div: 'pedal', midi: 55, dur: 0.25, vel: 0.9 },     // G3
        { t: 33.25, div: 'pedal', midi: 57, dur: 0.25, vel: 0.9 },  // A3
        { t: 33.5, div: 'pedal', midi: 58, dur: 0.25, vel: 0.9 },   // Bb3
        { t: 33.75, div: 'pedal', midi: 57, dur: 0.25, vel: 0.88 }, // A3
        { t: 34, div: 'pedal', midi: 55, dur: 0.25, vel: 0.88 },    // G3
        { t: 34.25, div: 'pedal', midi: 53, dur: 0.25, vel: 0.87 }, // F3
        { t: 34.5, div: 'pedal', midi: 52, dur: 0.25, vel: 0.87 },  // E3
        { t: 34.75, div: 'pedal', midi: 50, dur: 0.25, vel: 0.85 }, // D3
        { t: 35, div: 'pedal', midi: 48, dur: 0.5, vel: 0.87 },     // C3
        { t: 35.5, div: 'pedal', midi: 41, dur: 0.5, vel: 0.85 },   // F2

        // Bar 17: Deceptive cadence - chordal interruption
        { t: 36, div: 'great', midi: 77, dur: 1, vel: 0.92 },       // F5
        { t: 36, div: 'great', midi: 72, dur: 1, vel: 0.9 },        // C5
        { t: 36, div: 'swell', midi: 69, dur: 1, vel: 0.82 },       // A4
        { t: 36, div: 'swell', midi: 65, dur: 1, vel: 0.8 },        // F4
        { t: 36, div: 'pedal', midi: 41, dur: 1, vel: 0.88 },       // F2
        // Deceptive resolution to Dm
        { t: 37, div: 'great', midi: 77, dur: 1, vel: 0.9 },        // F5
        { t: 37, div: 'great', midi: 74, dur: 1, vel: 0.88 },       // D5
        { t: 37, div: 'swell', midi: 69, dur: 1, vel: 0.8 },        // A4
        { t: 37, div: 'swell', midi: 62, dur: 1, vel: 0.78 },       // D4
        { t: 37, div: 'pedal', midi: 38, dur: 1, vel: 0.85 },       // D2

        // Bar 18: Back to F major, building to return
        { t: 38, div: 'great', midi: 76, dur: 0.5, vel: 0.88 },     // E5
        { t: 38.5, div: 'great', midi: 77, dur: 0.5, vel: 0.9 },    // F5
        { t: 39, div: 'great', midi: 79, dur: 0.5, vel: 0.9 },      // G5
        { t: 39.5, div: 'great', midi: 77, dur: 0.5, vel: 0.88 },   // F5

        { t: 38, div: 'swell', midi: 60, dur: 0.5, vel: 0.78 },     // C4
        { t: 38.5, div: 'swell', midi: 65, dur: 0.5, vel: 0.8 },    // F4
        { t: 39, div: 'swell', midi: 67, dur: 0.5, vel: 0.8 },      // G4
        { t: 39.5, div: 'swell', midi: 65, dur: 0.5, vel: 0.78 },   // F4

        { t: 38, div: 'pedal', midi: 48, dur: 2, vel: 0.82 },       // C3

        // ======== Bars 19-22: Triumphant return to F major ========
        // Canon resumes with both hands in full force
        { t: 40, div: 'pedal', midi: 41, dur: 4, vel: 0.85 },       // F2 pedal

        { t: 40, div: 'great', midi: 77, dur: 0.25, vel: 0.9 },     // F5
        { t: 40.25, div: 'great', midi: 76, dur: 0.25, vel: 0.88 }, // E5
        { t: 40.5, div: 'great', midi: 77, dur: 0.25, vel: 0.9 },   // F5
        { t: 40.75, div: 'great', midi: 79, dur: 0.25, vel: 0.92 }, // G5
        { t: 41, div: 'great', midi: 81, dur: 0.25, vel: 0.92 },    // A5
        { t: 41.25, div: 'great', midi: 79, dur: 0.25, vel: 0.9 },  // G5
        { t: 41.5, div: 'great', midi: 77, dur: 0.25, vel: 0.9 },   // F5
        { t: 41.75, div: 'great', midi: 76, dur: 0.25, vel: 0.88 }, // E5
        { t: 42, div: 'great', midi: 74, dur: 0.25, vel: 0.87 },    // D5
        { t: 42.25, div: 'great', midi: 72, dur: 0.25, vel: 0.85 }, // C5
        { t: 42.5, div: 'great', midi: 70, dur: 0.25, vel: 0.85 },  // Bb4
        { t: 42.75, div: 'great', midi: 69, dur: 0.25, vel: 0.83 }, // A4
        { t: 43, div: 'great', midi: 67, dur: 0.25, vel: 0.83 },    // G4
        { t: 43.25, div: 'great', midi: 69, dur: 0.25, vel: 0.85 }, // A4
        { t: 43.5, div: 'great', midi: 70, dur: 0.25, vel: 0.87 },  // Bb4
        { t: 43.75, div: 'great', midi: 72, dur: 0.25, vel: 0.88 }, // C5

        { t: 40, div: 'swell', midi: 65, dur: 0.25, vel: 0.8 },     // F4
        { t: 40.25, div: 'swell', midi: 64, dur: 0.25, vel: 0.78 }, // E4
        { t: 40.5, div: 'swell', midi: 65, dur: 0.25, vel: 0.8 },   // F4
        { t: 40.75, div: 'swell', midi: 67, dur: 0.25, vel: 0.82 }, // G4
        { t: 41, div: 'swell', midi: 69, dur: 0.25, vel: 0.82 },    // A4
        { t: 41.25, div: 'swell', midi: 67, dur: 0.25, vel: 0.8 },  // G4
        { t: 41.5, div: 'swell', midi: 65, dur: 0.25, vel: 0.8 },   // F4
        { t: 41.75, div: 'swell', midi: 64, dur: 0.25, vel: 0.78 }, // E4
        { t: 42, div: 'swell', midi: 62, dur: 0.25, vel: 0.77 },    // D4
        { t: 42.25, div: 'swell', midi: 60, dur: 0.25, vel: 0.75 }, // C4
        { t: 42.5, div: 'swell', midi: 58, dur: 0.25, vel: 0.75 },  // Bb3
        { t: 42.75, div: 'swell', midi: 57, dur: 0.25, vel: 0.73 }, // A3
        { t: 43, div: 'swell', midi: 55, dur: 0.25, vel: 0.73 },    // G3
        { t: 43.25, div: 'swell', midi: 57, dur: 0.25, vel: 0.75 }, // A3
        { t: 43.5, div: 'swell', midi: 58, dur: 0.25, vel: 0.77 },  // Bb3
        { t: 43.75, div: 'swell', midi: 60, dur: 0.25, vel: 0.78 }, // C4

        // Final bars 23-25: Grand conclusion
        { t: 44, div: 'great', midi: 74, dur: 0.5, vel: 0.92 },     // D5
        { t: 44.5, div: 'great', midi: 72, dur: 0.5, vel: 0.9 },    // C5
        { t: 45, div: 'great', midi: 70, dur: 0.5, vel: 0.88 },     // Bb4
        { t: 45.5, div: 'great', midi: 69, dur: 0.5, vel: 0.88 },   // A4
        { t: 46, div: 'great', midi: 77, dur: 2, vel: 0.95 },       // F5 (final)

        { t: 44, div: 'swell', midi: 62, dur: 0.5, vel: 0.8 },      // D4
        { t: 44.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.78 },   // C4
        { t: 45, div: 'swell', midi: 58, dur: 0.5, vel: 0.77 },     // Bb3
        { t: 45.5, div: 'swell', midi: 57, dur: 0.5, vel: 0.77 },   // A3
        { t: 46, div: 'swell', midi: 65, dur: 2, vel: 0.85 },       // F4

        { t: 44, div: 'pedal', midi: 41, dur: 4, vel: 0.85 },       // F2
        { t: 46, div: 'pedal', midi: 36, dur: 2, vel: 0.9 },        // C2
        // NOTE: overlapping pedal intentional - resolves to F
    ]
};


// ============================================================
// 4. Toccata and Fugue in D minor "Dorian", BWV 538
//    Called "Dorian" because original copy lacked key signature
//    Key: D minor. Tempo ~80
//    Toccata: perpetuum mobile of semiquavers on a single motif
//    Fugue: syncopated subject with upward leaps of perfect fourths
// ============================================================

const PIECE_BACH_DORIAN = {
    title: 'Toccata and Fugue in D minor "Dorian"',
    composer: "Johann Sebastian Bach",
    catalog: "BWV 538",
    key: "D minor",
    tempo: 80,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-mixture'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-clarinet8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ======== TOCCATA: Perpetuum mobile on a single motif ========
        // Bar 1-2: The germinal motif in 16th notes, Great organ
        // Motoric, relentless semiquaver motion in D minor
        { t: 0, div: 'great', midi: 62, dur: 0.25, vel: 0.85 },     // D4
        { t: 0.25, div: 'great', midi: 60, dur: 0.25, vel: 0.83 },  // C4
        { t: 0.5, div: 'great', midi: 62, dur: 0.25, vel: 0.85 },   // D4
        { t: 0.75, div: 'great', midi: 65, dur: 0.25, vel: 0.87 },  // F4
        { t: 1, div: 'great', midi: 64, dur: 0.25, vel: 0.85 },     // E4
        { t: 1.25, div: 'great', midi: 62, dur: 0.25, vel: 0.83 },  // D4
        { t: 1.5, div: 'great', midi: 60, dur: 0.25, vel: 0.82 },   // C4
        { t: 1.75, div: 'great', midi: 62, dur: 0.25, vel: 0.85 },  // D4
        { t: 2, div: 'great', midi: 65, dur: 0.25, vel: 0.87 },     // F4
        { t: 2.25, div: 'great', midi: 67, dur: 0.25, vel: 0.88 },  // G4
        { t: 2.5, div: 'great', midi: 69, dur: 0.25, vel: 0.88 },   // A4
        { t: 2.75, div: 'great', midi: 67, dur: 0.25, vel: 0.87 },  // G4
        { t: 3, div: 'great', midi: 65, dur: 0.25, vel: 0.85 },     // F4
        { t: 3.25, div: 'great', midi: 64, dur: 0.25, vel: 0.85 },  // E4
        { t: 3.5, div: 'great', midi: 62, dur: 0.25, vel: 0.83 },   // D4
        { t: 3.75, div: 'great', midi: 60, dur: 0.25, vel: 0.82 },  // C4

        // Sustained chord underneath (Chair organ response)
        { t: 0, div: 'choir', midi: 62, dur: 2, vel: 0.68 },        // D4
        { t: 0, div: 'choir', midi: 57, dur: 2, vel: 0.65 },        // A3
        { t: 2, div: 'choir', midi: 65, dur: 2, vel: 0.7 },         // F4
        { t: 2, div: 'choir', midi: 60, dur: 2, vel: 0.67 },        // C4

        // Pedal
        { t: 0, div: 'pedal', midi: 38, dur: 4, vel: 0.8 },         // D2

        // Bar 3-4: Motif reworked, answered by Chair organ
        { t: 4, div: 'choir', midi: 62, dur: 0.25, vel: 0.78 },     // D4
        { t: 4.25, div: 'choir', midi: 60, dur: 0.25, vel: 0.75 },  // C4
        { t: 4.5, div: 'choir', midi: 62, dur: 0.25, vel: 0.78 },   // D4
        { t: 4.75, div: 'choir', midi: 65, dur: 0.25, vel: 0.8 },   // F4
        { t: 5, div: 'choir', midi: 64, dur: 0.25, vel: 0.78 },     // E4
        { t: 5.25, div: 'choir', midi: 62, dur: 0.25, vel: 0.75 },  // D4
        { t: 5.5, div: 'choir', midi: 60, dur: 0.25, vel: 0.75 },   // C4
        { t: 5.75, div: 'choir', midi: 62, dur: 0.25, vel: 0.78 },  // D4
        { t: 6, div: 'choir', midi: 65, dur: 0.25, vel: 0.8 },      // F4
        { t: 6.25, div: 'choir', midi: 67, dur: 0.25, vel: 0.82 },  // G4
        { t: 6.5, div: 'choir', midi: 69, dur: 0.25, vel: 0.82 },   // A4
        { t: 6.75, div: 'choir', midi: 67, dur: 0.25, vel: 0.8 },   // G4
        { t: 7, div: 'choir', midi: 65, dur: 0.25, vel: 0.78 },     // F4
        { t: 7.25, div: 'choir', midi: 64, dur: 0.25, vel: 0.78 },  // E4
        { t: 7.5, div: 'choir', midi: 62, dur: 0.25, vel: 0.75 },   // D4
        { t: 7.75, div: 'choir', midi: 60, dur: 0.25, vel: 0.75 },  // C4

        // Great organ tense chords answering
        { t: 4, div: 'great', midi: 70, dur: 2, vel: 0.82 },        // Bb4
        { t: 4, div: 'great', midi: 65, dur: 2, vel: 0.8 },         // F4
        { t: 6, div: 'great', midi: 69, dur: 2, vel: 0.82 },        // A4
        { t: 6, div: 'great', midi: 62, dur: 2, vel: 0.78 },        // D4

        { t: 4, div: 'pedal', midi: 46, dur: 2, vel: 0.78 },        // Bb2
        { t: 6, div: 'pedal', midi: 38, dur: 2, vel: 0.8 },         // D2

        // Bar 5-8: Motif developed, new registrations
        // Bar 5-6: Great organ continues semiquaver motion, now ascending
        { t: 8, div: 'great', midi: 58, dur: 0.25, vel: 0.82 },     // Bb3
        { t: 8.25, div: 'great', midi: 60, dur: 0.25, vel: 0.83 },  // C4
        { t: 8.5, div: 'great', midi: 62, dur: 0.25, vel: 0.85 },   // D4
        { t: 8.75, div: 'great', midi: 65, dur: 0.25, vel: 0.87 },  // F4
        { t: 9, div: 'great', midi: 67, dur: 0.25, vel: 0.88 },     // G4
        { t: 9.25, div: 'great', midi: 69, dur: 0.25, vel: 0.88 },  // A4
        { t: 9.5, div: 'great', midi: 70, dur: 0.25, vel: 0.88 },   // Bb4
        { t: 9.75, div: 'great', midi: 69, dur: 0.25, vel: 0.87 },  // A4
        { t: 10, div: 'great', midi: 67, dur: 0.25, vel: 0.85 },    // G4
        { t: 10.25, div: 'great', midi: 65, dur: 0.25, vel: 0.85 }, // F4
        { t: 10.5, div: 'great', midi: 64, dur: 0.25, vel: 0.83 },  // E4
        { t: 10.75, div: 'great', midi: 62, dur: 0.25, vel: 0.83 }, // D4
        { t: 11, div: 'great', midi: 61, dur: 0.25, vel: 0.85 },    // C#4
        { t: 11.25, div: 'great', midi: 62, dur: 0.25, vel: 0.85 }, // D4
        { t: 11.5, div: 'great', midi: 65, dur: 0.25, vel: 0.87 },  // F4
        { t: 11.75, div: 'great', midi: 69, dur: 0.25, vel: 0.88 }, // A4

        // Choir organ sustained response
        { t: 8, div: 'choir', midi: 58, dur: 2, vel: 0.7 },         // Bb3
        { t: 8, div: 'choir', midi: 55, dur: 2, vel: 0.68 },        // G3
        { t: 10, div: 'choir', midi: 57, dur: 2, vel: 0.7 },        // A3
        { t: 10, div: 'choir', midi: 53, dur: 2, vel: 0.68 },       // F3

        { t: 8, div: 'pedal', midi: 43, dur: 2, vel: 0.78 },        // G2
        { t: 10, div: 'pedal', midi: 38, dur: 2, vel: 0.8 },        // D2

        // Bar 7-8: Building intensity with chromatic inflections
        { t: 12, div: 'great', midi: 70, dur: 0.25, vel: 0.88 },    // Bb4
        { t: 12.25, div: 'great', midi: 69, dur: 0.25, vel: 0.87 }, // A4
        { t: 12.5, div: 'great', midi: 67, dur: 0.25, vel: 0.85 },  // G4
        { t: 12.75, div: 'great', midi: 65, dur: 0.25, vel: 0.85 }, // F4
        { t: 13, div: 'great', midi: 64, dur: 0.25, vel: 0.83 },    // E4
        { t: 13.25, div: 'great', midi: 65, dur: 0.25, vel: 0.85 }, // F4
        { t: 13.5, div: 'great', midi: 67, dur: 0.25, vel: 0.87 },  // G4
        { t: 13.75, div: 'great', midi: 69, dur: 0.25, vel: 0.88 }, // A4
        { t: 14, div: 'great', midi: 70, dur: 0.25, vel: 0.88 },    // Bb4
        { t: 14.25, div: 'great', midi: 72, dur: 0.25, vel: 0.9 },  // C5
        { t: 14.5, div: 'great', midi: 74, dur: 0.25, vel: 0.9 },   // D5
        { t: 14.75, div: 'great', midi: 72, dur: 0.25, vel: 0.88 }, // C5
        { t: 15, div: 'great', midi: 70, dur: 0.25, vel: 0.87 },    // Bb4
        { t: 15.25, div: 'great', midi: 69, dur: 0.25, vel: 0.87 }, // A4
        { t: 15.5, div: 'great', midi: 67, dur: 0.25, vel: 0.85 },  // G4
        { t: 15.75, div: 'great', midi: 65, dur: 0.25, vel: 0.85 }, // F4

        // Choir chordal response
        { t: 12, div: 'choir', midi: 62, dur: 2, vel: 0.72 },       // D4
        { t: 12, div: 'choir', midi: 58, dur: 2, vel: 0.7 },        // Bb3
        { t: 14, div: 'choir', midi: 65, dur: 2, vel: 0.73 },       // F4
        { t: 14, div: 'choir', midi: 60, dur: 2, vel: 0.7 },        // C4

        { t: 12, div: 'pedal', midi: 46, dur: 2, vel: 0.78 },       // Bb2
        { t: 14, div: 'pedal', midi: 41, dur: 2, vel: 0.8 },        // F2

        // ======== FUGUE: bars 9+ ========
        // Subject with syncopations and upward perfect fourths
        // Subject entry 1: Alto on Swell
        // Bar 9: Fugue subject begins - D, then syncopated leaps of 4ths
        { t: 16, div: 'swell', midi: 62, dur: 1.5, vel: 0.8 },      // D4 (dotted quarter)
        { t: 17.5, div: 'swell', midi: 61, dur: 0.5, vel: 0.78 },   // C#4 (syncopation)
        { t: 18, div: 'swell', midi: 62, dur: 0.5, vel: 0.8 },      // D4
        // First upward fourth leap
        { t: 18.5, div: 'swell', midi: 67, dur: 1, vel: 0.82 },     // G4 (up P4)
        { t: 19.5, div: 'swell', midi: 65, dur: 0.5, vel: 0.8 },    // F4

        // Bar 11: Second fourth and continuation
        { t: 20, div: 'swell', midi: 64, dur: 0.5, vel: 0.78 },     // E4
        // Second upward fourth leap
        { t: 20.5, div: 'swell', midi: 69, dur: 1, vel: 0.83 },     // A4 (up P4)
        { t: 21.5, div: 'swell', midi: 67, dur: 0.5, vel: 0.8 },    // G4
        { t: 22, div: 'swell', midi: 65, dur: 0.5, vel: 0.78 },     // F4
        // Third upward fourth leap
        { t: 22.5, div: 'swell', midi: 70, dur: 1, vel: 0.85 },     // Bb4 (up P4)
        { t: 23.5, div: 'swell', midi: 69, dur: 0.5, vel: 0.82 },   // A4

        // Bar 13: Subject tail
        { t: 24, div: 'swell', midi: 67, dur: 0.5, vel: 0.8 },      // G4
        { t: 24.5, div: 'swell', midi: 65, dur: 0.5, vel: 0.78 },   // F4
        { t: 25, div: 'swell', midi: 64, dur: 0.5, vel: 0.77 },     // E4
        { t: 25.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.78 },   // D4
        { t: 26, div: 'swell', midi: 61, dur: 0.5, vel: 0.78 },     // C#4
        { t: 26.5, div: 'swell', midi: 62, dur: 1.5, vel: 0.82 },   // D4

        // Answer entry: Soprano on Great, A minor (dominant)
        // Bar 14: Answer starts on A
        { t: 28, div: 'great', midi: 69, dur: 1.5, vel: 0.85 },     // A4
        { t: 29.5, div: 'great', midi: 68, dur: 0.5, vel: 0.83 },   // G#4
        { t: 30, div: 'great', midi: 69, dur: 0.5, vel: 0.85 },     // A4
        // First upward fourth
        { t: 30.5, div: 'great', midi: 74, dur: 1, vel: 0.87 },     // D5 (up P4)
        { t: 31.5, div: 'great', midi: 72, dur: 0.5, vel: 0.85 },   // C5

        // Countersubject in alto
        { t: 28, div: 'swell', midi: 62, dur: 0.5, vel: 0.75 },     // D4
        { t: 28.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.77 },   // E4
        { t: 29, div: 'swell', midi: 65, dur: 0.5, vel: 0.78 },     // F4
        { t: 29.5, div: 'swell', midi: 67, dur: 0.5, vel: 0.78 },   // G4
        { t: 30, div: 'swell', midi: 69, dur: 0.5, vel: 0.8 },      // A4
        { t: 30.5, div: 'swell', midi: 67, dur: 0.5, vel: 0.78 },   // G4
        { t: 31, div: 'swell', midi: 65, dur: 0.5, vel: 0.77 },     // F4
        { t: 31.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.75 },   // E4

        // Bar 16: Answer continues with fourths
        { t: 32, div: 'great', midi: 71, dur: 0.5, vel: 0.83 },     // B4
        // Second upward fourth
        { t: 32.5, div: 'great', midi: 76, dur: 1, vel: 0.88 },     // E5 (up P4)
        { t: 33.5, div: 'great', midi: 74, dur: 0.5, vel: 0.85 },   // D5
        { t: 34, div: 'great', midi: 72, dur: 0.5, vel: 0.83 },     // C5
        // Third upward fourth
        { t: 34.5, div: 'great', midi: 77, dur: 1, vel: 0.88 },     // F5 (up P4)
        { t: 35.5, div: 'great', midi: 76, dur: 0.5, vel: 0.87 },   // E5

        // Alto countersubject continues
        { t: 32, div: 'swell', midi: 62, dur: 0.5, vel: 0.75 },     // D4
        { t: 32.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.73 },   // C4
        { t: 33, div: 'swell', midi: 59, dur: 0.5, vel: 0.73 },     // B3
        { t: 33.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.75 },   // C4
        { t: 34, div: 'swell', midi: 62, dur: 0.5, vel: 0.75 },     // D4
        { t: 34.5, div: 'swell', midi: 65, dur: 0.5, vel: 0.78 },   // F4
        { t: 35, div: 'swell', midi: 64, dur: 0.5, vel: 0.77 },     // E4
        { t: 35.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.75 },   // D4

        // Answer tail bar 17
        { t: 36, div: 'great', midi: 74, dur: 0.5, vel: 0.85 },     // D5
        { t: 36.5, div: 'great', midi: 72, dur: 0.5, vel: 0.83 },   // C5
        { t: 37, div: 'great', midi: 71, dur: 0.5, vel: 0.82 },     // B4
        { t: 37.5, div: 'great', midi: 69, dur: 0.5, vel: 0.83 },   // A4
        { t: 38, div: 'great', midi: 68, dur: 0.5, vel: 0.83 },     // G#4
        { t: 38.5, div: 'great', midi: 69, dur: 1.5, vel: 0.87 },   // A4

        // Bass entry: Pedal, D minor
        // Bar 18: Subject in pedal
        { t: 40, div: 'pedal', midi: 38, dur: 1.5, vel: 0.82 },     // D2
        { t: 41.5, div: 'pedal', midi: 37, dur: 0.5, vel: 0.8 },    // C#2
        { t: 42, div: 'pedal', midi: 38, dur: 0.5, vel: 0.82 },     // D2
        // First upward fourth
        { t: 42.5, div: 'pedal', midi: 43, dur: 1, vel: 0.85 },     // G2 (up P4)
        { t: 43.5, div: 'pedal', midi: 41, dur: 0.5, vel: 0.82 },   // F2

        // Upper voices continue
        { t: 40, div: 'great', midi: 74, dur: 0.5, vel: 0.83 },     // D5
        { t: 40.5, div: 'great', midi: 72, dur: 0.5, vel: 0.82 },   // C5
        { t: 41, div: 'great', midi: 70, dur: 0.5, vel: 0.82 },     // Bb4
        { t: 41.5, div: 'great', midi: 69, dur: 0.5, vel: 0.8 },    // A4
        { t: 42, div: 'great', midi: 67, dur: 0.5, vel: 0.8 },      // G4
        { t: 42.5, div: 'great', midi: 69, dur: 0.5, vel: 0.82 },   // A4
        { t: 43, div: 'great', midi: 70, dur: 0.5, vel: 0.83 },     // Bb4
        { t: 43.5, div: 'great', midi: 72, dur: 0.5, vel: 0.85 },   // C5

        { t: 40, div: 'swell', midi: 65, dur: 0.5, vel: 0.77 },     // F4
        { t: 40.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 41, div: 'swell', midi: 62, dur: 0.5, vel: 0.75 },     // D4
        { t: 41.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.73 },   // C4
        { t: 42, div: 'swell', midi: 58, dur: 0.5, vel: 0.73 },     // Bb3
        { t: 42.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.75 },   // C4
        { t: 43, div: 'swell', midi: 62, dur: 0.5, vel: 0.75 },     // D4
        { t: 43.5, div: 'swell', midi: 65, dur: 0.5, vel: 0.78 },   // F4

        // Pedal continues bar 19-20
        { t: 44, div: 'pedal', midi: 40, dur: 0.5, vel: 0.8 },      // E2
        { t: 44.5, div: 'pedal', midi: 45, dur: 1, vel: 0.85 },     // A2 (up P4)
        { t: 45.5, div: 'pedal', midi: 43, dur: 0.5, vel: 0.82 },   // G2
        { t: 46, div: 'pedal', midi: 41, dur: 0.5, vel: 0.8 },      // F2
        { t: 46.5, div: 'pedal', midi: 46, dur: 1, vel: 0.85 },     // Bb2 (up P4)
        { t: 47.5, div: 'pedal', midi: 45, dur: 0.5, vel: 0.83 },   // A2

        // Bars 21-22: All voices converge
        { t: 48, div: 'pedal', midi: 43, dur: 0.5, vel: 0.82 },     // G2
        { t: 48.5, div: 'pedal', midi: 41, dur: 0.5, vel: 0.8 },    // F2
        { t: 49, div: 'pedal', midi: 40, dur: 0.5, vel: 0.78 },     // E2
        { t: 49.5, div: 'pedal', midi: 38, dur: 0.5, vel: 0.8 },    // D2
        { t: 50, div: 'pedal', midi: 37, dur: 0.5, vel: 0.82 },     // C#2
        { t: 50.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.85 },   // D2

        // Sharp question-and-answer chords (reference to toccata)
        { t: 48, div: 'great', midi: 74, dur: 0.5, vel: 0.9 },      // D5
        { t: 48, div: 'swell', midi: 69, dur: 0.5, vel: 0.82 },     // A4
        { t: 48, div: 'swell', midi: 65, dur: 0.5, vel: 0.8 },      // F4
        { t: 49, div: 'choir', midi: 62, dur: 0.5, vel: 0.75 },     // D4 (choir answers)
        { t: 49, div: 'choir', midi: 57, dur: 0.5, vel: 0.73 },     // A3
        { t: 50, div: 'great', midi: 72, dur: 0.5, vel: 0.88 },     // C5
        { t: 50, div: 'swell', midi: 67, dur: 0.5, vel: 0.8 },      // G4
        { t: 50, div: 'swell', midi: 64, dur: 0.5, vel: 0.78 },     // E4
        { t: 51, div: 'choir', midi: 60, dur: 0.5, vel: 0.73 },     // C4 (choir answers)
        { t: 51, div: 'choir', midi: 55, dur: 0.5, vel: 0.72 },     // G3

        // Final resolution
        { t: 52, div: 'great', midi: 74, dur: 2, vel: 0.92 },       // D5
        { t: 52, div: 'swell', midi: 69, dur: 2, vel: 0.85 },       // A4
        { t: 52, div: 'swell', midi: 65, dur: 2, vel: 0.82 },       // F4
        { t: 52, div: 'swell', midi: 62, dur: 2, vel: 0.8 },        // D4
        { t: 52, div: 'pedal', midi: 38, dur: 2, vel: 0.88 },       // D2
    ]
};


// ============================================================
// 5. Fantasia in G major "Piece d'Orgue", BWV 572
//    Three sections: Tres vitement, Gravement, Lentement
//    Key: G major. Tempo ~108 (Tres vitement), ~52 (Gravement)
//    Opens with sparkling single-voice arpeggios
//    Central section: 5-6 voice ricercar-like counterpoint
// ============================================================

const PIECE_BACH_PIECE_ORGUE = {
    title: 'Fantasia in G major "Piece d\'Orgue"',
    composer: "Johann Sebastian Bach",
    catalog: "BWV 572",
    key: "G major",
    tempo: 108,
    registration: {
        great: ['gt-principal8', 'gt-octave4'],
        swell: ['sw-gedeckt8', 'sw-flute4', 'sw-nazard'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-octave8']
    },
    events: [
        // ======== TRES VITEMENT: Sparkling arpeggios ========
        // Single voice, dancing arpeggios in compound triple (12/8 feel)
        // Bar 1: G major arpeggio ascending - light, clear stops
        { t: 0, div: 'great', midi: 67, dur: 0.25, vel: 0.82 },     // G4
        { t: 0.25, div: 'great', midi: 71, dur: 0.25, vel: 0.85 },  // B4
        { t: 0.5, div: 'great', midi: 74, dur: 0.25, vel: 0.87 },   // D5
        { t: 0.75, div: 'great', midi: 79, dur: 0.25, vel: 0.88 },  // G5
        { t: 1, div: 'great', midi: 74, dur: 0.25, vel: 0.85 },     // D5
        { t: 1.25, div: 'great', midi: 71, dur: 0.25, vel: 0.83 },  // B4
        { t: 1.5, div: 'great', midi: 67, dur: 0.25, vel: 0.82 },   // G4
        { t: 1.75, div: 'great', midi: 62, dur: 0.25, vel: 0.8 },   // D4
        { t: 2, div: 'great', midi: 59, dur: 0.25, vel: 0.78 },     // B3
        { t: 2.25, div: 'great', midi: 62, dur: 0.25, vel: 0.8 },   // D4
        { t: 2.5, div: 'great', midi: 67, dur: 0.25, vel: 0.82 },   // G4
        { t: 2.75, div: 'great', midi: 71, dur: 0.25, vel: 0.85 },  // B4

        // Bar 2: Continuation with passing tones
        { t: 3, div: 'great', midi: 74, dur: 0.25, vel: 0.87 },     // D5
        { t: 3.25, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },  // C5
        { t: 3.5, div: 'great', midi: 71, dur: 0.25, vel: 0.85 },   // B4
        { t: 3.75, div: 'great', midi: 69, dur: 0.25, vel: 0.83 },  // A4
        { t: 4, div: 'great', midi: 67, dur: 0.25, vel: 0.82 },     // G4
        { t: 4.25, div: 'great', midi: 66, dur: 0.25, vel: 0.82 },  // F#4
        { t: 4.5, div: 'great', midi: 67, dur: 0.25, vel: 0.83 },   // G4
        { t: 4.75, div: 'great', midi: 69, dur: 0.25, vel: 0.85 },  // A4
        { t: 5, div: 'great', midi: 71, dur: 0.25, vel: 0.85 },     // B4
        { t: 5.25, div: 'great', midi: 72, dur: 0.25, vel: 0.87 },  // C5
        { t: 5.5, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },   // D5
        { t: 5.75, div: 'great', midi: 76, dur: 0.25, vel: 0.88 },  // E5

        // Bar 3: Scalar flourish rising
        { t: 6, div: 'great', midi: 78, dur: 0.25, vel: 0.9 },      // F#5
        { t: 6.25, div: 'great', midi: 76, dur: 0.25, vel: 0.88 },  // E5
        { t: 6.5, div: 'great', midi: 74, dur: 0.25, vel: 0.87 },   // D5
        { t: 6.75, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },  // C5
        { t: 7, div: 'great', midi: 71, dur: 0.25, vel: 0.85 },     // B4
        { t: 7.25, div: 'great', midi: 69, dur: 0.25, vel: 0.83 },  // A4
        { t: 7.5, div: 'great', midi: 67, dur: 0.25, vel: 0.82 },   // G4
        { t: 7.75, div: 'great', midi: 66, dur: 0.25, vel: 0.82 },  // F#4
        { t: 8, div: 'great', midi: 64, dur: 0.25, vel: 0.8 },      // E4
        { t: 8.25, div: 'great', midi: 62, dur: 0.25, vel: 0.8 },   // D4
        { t: 8.5, div: 'great', midi: 60, dur: 0.25, vel: 0.78 },   // C4
        { t: 8.75, div: 'great', midi: 62, dur: 0.25, vel: 0.8 },   // D4

        // Bar 4: D major arpeggio (dominant area)
        { t: 9, div: 'great', midi: 66, dur: 0.25, vel: 0.83 },     // F#4
        { t: 9.25, div: 'great', midi: 69, dur: 0.25, vel: 0.85 },  // A4
        { t: 9.5, div: 'great', midi: 74, dur: 0.25, vel: 0.87 },   // D5
        { t: 9.75, div: 'great', midi: 78, dur: 0.25, vel: 0.9 },   // F#5
        { t: 10, div: 'great', midi: 74, dur: 0.25, vel: 0.87 },    // D5
        { t: 10.25, div: 'great', midi: 69, dur: 0.25, vel: 0.85 }, // A4
        { t: 10.5, div: 'great', midi: 66, dur: 0.25, vel: 0.83 },  // F#4
        { t: 10.75, div: 'great', midi: 62, dur: 0.25, vel: 0.8 },  // D4
        { t: 11, div: 'great', midi: 57, dur: 0.25, vel: 0.78 },    // A3
        { t: 11.25, div: 'great', midi: 62, dur: 0.25, vel: 0.8 },  // D4
        { t: 11.5, div: 'great', midi: 66, dur: 0.25, vel: 0.83 },  // F#4
        { t: 11.75, div: 'great', midi: 69, dur: 0.25, vel: 0.85 }, // A4

        // Bar 5-6: More arpeggios with pedal Gs entering
        { t: 12, div: 'great', midi: 71, dur: 0.25, vel: 0.85 },    // B4
        { t: 12.25, div: 'great', midi: 74, dur: 0.25, vel: 0.87 }, // D5
        { t: 12.5, div: 'great', midi: 79, dur: 0.25, vel: 0.9 },   // G5
        { t: 12.75, div: 'great', midi: 74, dur: 0.25, vel: 0.87 }, // D5
        { t: 13, div: 'great', midi: 71, dur: 0.25, vel: 0.85 },    // B4
        { t: 13.25, div: 'great', midi: 74, dur: 0.25, vel: 0.87 }, // D5
        { t: 13.5, div: 'great', midi: 76, dur: 0.25, vel: 0.88 },  // E5
        { t: 13.75, div: 'great', midi: 78, dur: 0.25, vel: 0.9 },  // F#5
        { t: 14, div: 'great', midi: 79, dur: 0.25, vel: 0.92 },    // G5
        { t: 14.25, div: 'great', midi: 78, dur: 0.25, vel: 0.9 },  // F#5
        { t: 14.5, div: 'great', midi: 76, dur: 0.25, vel: 0.88 },  // E5
        { t: 14.75, div: 'great', midi: 74, dur: 0.25, vel: 0.87 }, // D5

        // Repeated G pedal tones start (hint of the Gravement)
        { t: 12, div: 'pedal', midi: 43, dur: 3, vel: 0.7 },        // G2

        // Bar 7: Transitional flourish
        { t: 15, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },    // C5
        { t: 15.25, div: 'great', midi: 71, dur: 0.25, vel: 0.85 }, // B4
        { t: 15.5, div: 'great', midi: 69, dur: 0.25, vel: 0.83 },  // A4
        { t: 15.75, div: 'great', midi: 67, dur: 0.25, vel: 0.82 }, // G4
        { t: 16, div: 'great', midi: 66, dur: 0.25, vel: 0.82 },    // F#4
        { t: 16.25, div: 'great', midi: 69, dur: 0.25, vel: 0.85 }, // A4
        { t: 16.5, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },  // D5
        { t: 16.75, div: 'great', midi: 78, dur: 0.25, vel: 0.9 },  // F#5
        { t: 17, div: 'great', midi: 79, dur: 0.5, vel: 0.92 },     // G5

        { t: 15, div: 'pedal', midi: 50, dur: 2, vel: 0.72 },       // D3

        // ======== GRAVEMENT: 5-voice ricercar, tempo change ========
        // Grand Plein Jeu - all stops, solemn five-part counterpoint
        // Tempo drops to ~52. Sustained chords over pedal G

        // Bar 8: Opening of Gravement - full organ chord on G
        { t: 18, div: 'great', midi: 79, dur: 2, vel: 0.9 },        // G5
        { t: 18, div: 'great', midi: 74, dur: 2, vel: 0.88 },       // D5
        { t: 18, div: 'swell', midi: 71, dur: 2, vel: 0.82 },       // B4
        { t: 18, div: 'swell', midi: 67, dur: 2, vel: 0.8 },        // G4
        { t: 18, div: 'choir', midi: 62, dur: 2, vel: 0.75 },       // D4
        { t: 18, div: 'pedal', midi: 43, dur: 4, vel: 0.85 },       // G2

        // Bar 9: Quasi-motivic element - suspended note then 4 descending pitches
        { t: 20, div: 'great', midi: 78, dur: 1, vel: 0.88 },       // F#5 (suspended)
        { t: 21, div: 'great', midi: 76, dur: 0.5, vel: 0.85 },     // E5
        { t: 21.5, div: 'great', midi: 74, dur: 0.5, vel: 0.83 },   // D5
        { t: 22, div: 'great', midi: 72, dur: 0.5, vel: 0.82 },     // C5
        { t: 22.5, div: 'great', midi: 71, dur: 0.5, vel: 0.82 },   // B4

        // Inner voices move in tight counterpoint
        { t: 20, div: 'swell', midi: 69, dur: 1, vel: 0.78 },       // A4 (suspended)
        { t: 21, div: 'swell', midi: 67, dur: 0.5, vel: 0.77 },     // G4
        { t: 21.5, div: 'swell', midi: 66, dur: 0.5, vel: 0.75 },   // F#4
        { t: 22, div: 'swell', midi: 64, dur: 0.5, vel: 0.75 },     // E4
        { t: 22.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.73 },   // D4

        { t: 20, div: 'choir', midi: 62, dur: 1, vel: 0.72 },       // D4
        { t: 21, div: 'choir', midi: 60, dur: 1, vel: 0.7 },        // C4
        { t: 22, div: 'choir', midi: 59, dur: 1, vel: 0.7 },        // B3

        { t: 20, div: 'pedal', midi: 43, dur: 3, vel: 0.82 },       // G2

        // Bar 10: Second statement of motif, overlapping entries
        { t: 23, div: 'swell', midi: 67, dur: 1, vel: 0.8 },        // G4 (suspended)
        { t: 24, div: 'swell', midi: 66, dur: 0.5, vel: 0.78 },     // F#4
        { t: 24.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.77 },   // E4
        { t: 25, div: 'swell', midi: 62, dur: 0.5, vel: 0.75 },     // D4
        { t: 25.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.73 },   // C4

        // Soprano enters with overlapping motif
        { t: 23, div: 'great', midi: 74, dur: 2, vel: 0.85 },       // D5
        { t: 25, div: 'great', midi: 72, dur: 1, vel: 0.83 },       // C5 (suspended)
        { t: 26, div: 'great', midi: 71, dur: 0.5, vel: 0.82 },     // B4
        { t: 26.5, div: 'great', midi: 69, dur: 0.5, vel: 0.8 },    // A4
        { t: 27, div: 'great', midi: 67, dur: 0.5, vel: 0.8 },      // G4
        { t: 27.5, div: 'great', midi: 66, dur: 0.5, vel: 0.78 },   // F#4

        // Bass with staircase scalar progression
        { t: 23, div: 'pedal', midi: 43, dur: 1.5, vel: 0.82 },     // G2
        { t: 24.5, div: 'pedal', midi: 45, dur: 1.5, vel: 0.82 },   // A2
        { t: 26, div: 'pedal', midi: 47, dur: 1.5, vel: 0.83 },     // B2
        { t: 27.5, div: 'pedal', midi: 48, dur: 1.5, vel: 0.85 },   // C3

        // Choir adds fifth voice
        { t: 23, div: 'choir', midi: 59, dur: 1, vel: 0.72 },       // B3
        { t: 24, div: 'choir', midi: 57, dur: 1, vel: 0.7 },        // A3
        { t: 25, div: 'choir', midi: 55, dur: 1, vel: 0.7 },        // G3
        { t: 26, div: 'choir', midi: 57, dur: 1, vel: 0.72 },       // A3
        { t: 27, div: 'choir', midi: 59, dur: 1, vel: 0.72 },       // B3
        { t: 28, div: 'choir', midi: 60, dur: 1, vel: 0.73 },       // C4

        // Bars 11-12: More entries in tight succession
        { t: 29, div: 'great', midi: 67, dur: 2, vel: 0.85 },       // G4
        { t: 29, div: 'swell', midi: 62, dur: 1, vel: 0.78 },       // D4 (suspended)
        { t: 30, div: 'swell', midi: 60, dur: 0.5, vel: 0.75 },     // C4
        { t: 30.5, div: 'swell', midi: 59, dur: 0.5, vel: 0.73 },   // B3
        { t: 31, div: 'swell', midi: 57, dur: 0.5, vel: 0.73 },     // A3
        { t: 31.5, div: 'swell', midi: 55, dur: 0.5, vel: 0.72 },   // G3

        { t: 29, div: 'pedal', midi: 50, dur: 1.5, vel: 0.85 },     // D3
        { t: 30.5, div: 'pedal', midi: 48, dur: 1.5, vel: 0.83 },   // C3
        { t: 32, div: 'pedal', midi: 47, dur: 1.5, vel: 0.82 },     // B2

        { t: 29, div: 'choir', midi: 59, dur: 1, vel: 0.73 },       // B3
        { t: 30, div: 'choir', midi: 62, dur: 1, vel: 0.75 },       // D4
        { t: 31, div: 'choir', midi: 60, dur: 1, vel: 0.73 },       // C4
        { t: 32, div: 'choir', midi: 59, dur: 1, vel: 0.72 },       // B3

        // ======== LENTEMENT: Brief concluding section ========
        // Bar 13-16: Final section, almost neurotic coda
        { t: 33, div: 'great', midi: 79, dur: 0.5, vel: 0.88 },     // G5
        { t: 33.5, div: 'great', midi: 78, dur: 0.5, vel: 0.87 },   // F#5
        { t: 34, div: 'great', midi: 79, dur: 0.25, vel: 0.9 },     // G5
        { t: 34.25, div: 'great', midi: 78, dur: 0.25, vel: 0.88 }, // F#5
        { t: 34.5, div: 'great', midi: 76, dur: 0.25, vel: 0.87 },  // E5
        { t: 34.75, div: 'great', midi: 74, dur: 0.25, vel: 0.85 }, // D5
        { t: 35, div: 'great', midi: 72, dur: 0.25, vel: 0.83 },    // C5
        { t: 35.25, div: 'great', midi: 71, dur: 0.25, vel: 0.83 }, // B4
        { t: 35.5, div: 'great', midi: 69, dur: 0.25, vel: 0.82 },  // A4
        { t: 35.75, div: 'great', midi: 67, dur: 0.25, vel: 0.8 },  // G4

        { t: 33, div: 'swell', midi: 67, dur: 0.5, vel: 0.8 },      // G4
        { t: 33.5, div: 'swell', midi: 66, dur: 0.5, vel: 0.78 },   // F#4
        { t: 34, div: 'swell', midi: 62, dur: 2, vel: 0.78 },       // D4

        { t: 33, div: 'choir', midi: 59, dur: 1, vel: 0.73 },       // B3
        { t: 34, div: 'choir', midi: 57, dur: 2, vel: 0.72 },       // A3

        { t: 33, div: 'pedal', midi: 43, dur: 3, vel: 0.85 },       // G2

        // Final bars: return to G major arpeggios then resolution
        { t: 36, div: 'great', midi: 66, dur: 0.25, vel: 0.82 },    // F#4
        { t: 36.25, div: 'great', midi: 69, dur: 0.25, vel: 0.85 }, // A4
        { t: 36.5, div: 'great', midi: 71, dur: 0.25, vel: 0.87 },  // B4
        { t: 36.75, div: 'great', midi: 74, dur: 0.25, vel: 0.88 }, // D5
        { t: 37, div: 'great', midi: 78, dur: 0.25, vel: 0.9 },     // F#5
        { t: 37.25, div: 'great', midi: 79, dur: 0.75, vel: 0.92 }, // G5

        // Final chord: G major
        { t: 38, div: 'great', midi: 79, dur: 2, vel: 0.92 },       // G5
        { t: 38, div: 'great', midi: 74, dur: 2, vel: 0.88 },       // D5
        { t: 38, div: 'swell', midi: 71, dur: 2, vel: 0.82 },       // B4
        { t: 38, div: 'swell', midi: 67, dur: 2, vel: 0.8 },        // G4
        { t: 38, div: 'choir', midi: 62, dur: 2, vel: 0.75 },       // D4
        { t: 38, div: 'choir', midi: 59, dur: 2, vel: 0.73 },       // B3
        { t: 38, div: 'pedal', midi: 43, dur: 2, vel: 0.88 },       // G2
    ]
};


// ============================================================
// 6. Ich ruf zu dir, Herr Jesu Christ, BWV 639
//    Tender chorale prelude from Orgelbuchlein
//    Key: F minor. Tempo ~52
//    Trio form: ornamented soprano melody (quarter notes),
//    flowing 16th-note middle voice, pulsing 8th-note pedal
//    Used in Tarkovsky's Solaris (1972)
// ============================================================

const PIECE_BACH_ICH_RUF = {
    title: "Ich ruf zu dir, Herr Jesu Christ",
    composer: "Johann Sebastian Bach",
    catalog: "BWV 639",
    key: "F minor",
    tempo: 52,
    registration: {
        great: ['gt-principal8'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-tremulant'],
        choir: ['ch-flute8'],
        pedal: ['pd-subbass32']
    },
    events: [
        // ======== CHORALE PRELUDE: Trio texture ========
        // Soprano: ornamented chorale melody on Great (quarter note motion)
        // Middle voice: flowing legato 16th notes on Swell
        // Bass: gently pulsating 8th notes in Pedal

        // ---- Bar 1: F minor ----
        // Soprano melody: F5 (ornamented)
        { t: 0, div: 'great', midi: 77, dur: 0.75, vel: 0.75 },     // F5
        { t: 0.75, div: 'great', midi: 75, dur: 0.25, vel: 0.7 },   // Eb5 (ornament)

        // Middle voice: flowing 16ths on Swell
        { t: 0, div: 'swell', midi: 65, dur: 0.25, vel: 0.6 },      // F4
        { t: 0.25, div: 'swell', midi: 63, dur: 0.25, vel: 0.58 },  // Eb4
        { t: 0.5, div: 'swell', midi: 61, dur: 0.25, vel: 0.58 },   // C#4 (Db4)
        { t: 0.75, div: 'swell', midi: 60, dur: 0.25, vel: 0.57 },  // C4
        { t: 1, div: 'swell', midi: 61, dur: 0.25, vel: 0.58 },     // Db4
        { t: 1.25, div: 'swell', midi: 63, dur: 0.25, vel: 0.6 },   // Eb4
        { t: 1.5, div: 'swell', midi: 65, dur: 0.25, vel: 0.6 },    // F4
        { t: 1.75, div: 'swell', midi: 63, dur: 0.25, vel: 0.58 },  // Eb4

        // Pedal: pulsing 8th notes
        { t: 0, div: 'pedal', midi: 41, dur: 0.5, vel: 0.65 },      // F2
        { t: 0.5, div: 'pedal', midi: 41, dur: 0.5, vel: 0.62 },    // F2
        { t: 1, div: 'pedal', midi: 41, dur: 0.5, vel: 0.65 },      // F2
        { t: 1.5, div: 'pedal', midi: 41, dur: 0.5, vel: 0.62 },    // F2

        // Soprano: Ab5
        { t: 1, div: 'great', midi: 80, dur: 0.75, vel: 0.77 },     // Ab5
        { t: 1.75, div: 'great', midi: 79, dur: 0.25, vel: 0.72 },  // G5 (ornament)

        // ---- Bar 2: Moving to Db ----
        // Soprano: C5 (with turn ornament)
        { t: 2, div: 'great', midi: 84, dur: 0.5, vel: 0.78 },      // C6
        { t: 2.5, div: 'great', midi: 82, dur: 0.25, vel: 0.73 },   // Bb5 (ornament)
        { t: 2.75, div: 'great', midi: 80, dur: 0.25, vel: 0.72 },  // Ab5

        // Middle voice continues
        { t: 2, div: 'swell', midi: 61, dur: 0.25, vel: 0.58 },     // Db4
        { t: 2.25, div: 'swell', midi: 60, dur: 0.25, vel: 0.57 },  // C4
        { t: 2.5, div: 'swell', midi: 58, dur: 0.25, vel: 0.57 },   // Bb3
        { t: 2.75, div: 'swell', midi: 60, dur: 0.25, vel: 0.58 },  // C4
        { t: 3, div: 'swell', midi: 61, dur: 0.25, vel: 0.58 },     // Db4
        { t: 3.25, div: 'swell', midi: 63, dur: 0.25, vel: 0.6 },   // Eb4
        { t: 3.5, div: 'swell', midi: 65, dur: 0.25, vel: 0.6 },    // F4
        { t: 3.75, div: 'swell', midi: 68, dur: 0.25, vel: 0.62 },  // Ab4

        // Pedal
        { t: 2, div: 'pedal', midi: 37, dur: 0.5, vel: 0.65 },      // Db2 (C#2)
        { t: 2.5, div: 'pedal', midi: 37, dur: 0.5, vel: 0.62 },    // Db2
        { t: 3, div: 'pedal', midi: 36, dur: 0.5, vel: 0.63 },      // C2
        { t: 3.5, div: 'pedal', midi: 36, dur: 0.5, vel: 0.6 },     // C2

        // Soprano: Bb5 descending
        { t: 3, div: 'great', midi: 82, dur: 0.5, vel: 0.77 },      // Bb5
        { t: 3.5, div: 'great', midi: 80, dur: 0.25, vel: 0.73 },   // Ab5
        { t: 3.75, div: 'great', midi: 79, dur: 0.25, vel: 0.72 },  // G5

        // ---- Bar 3: Eb minor area ----
        // Soprano: Ab5 with ornament
        { t: 4, div: 'great', midi: 80, dur: 0.75, vel: 0.77 },     // Ab5
        { t: 4.75, div: 'great', midi: 79, dur: 0.25, vel: 0.72 },  // G5 (turn)

        // Middle voice
        { t: 4, div: 'swell', midi: 68, dur: 0.25, vel: 0.62 },     // Ab4
        { t: 4.25, div: 'swell', midi: 67, dur: 0.25, vel: 0.6 },   // G4
        { t: 4.5, div: 'swell', midi: 65, dur: 0.25, vel: 0.6 },    // F4
        { t: 4.75, div: 'swell', midi: 63, dur: 0.25, vel: 0.58 },  // Eb4
        { t: 5, div: 'swell', midi: 61, dur: 0.25, vel: 0.58 },     // Db4
        { t: 5.25, div: 'swell', midi: 60, dur: 0.25, vel: 0.57 },  // C4
        { t: 5.5, div: 'swell', midi: 61, dur: 0.25, vel: 0.58 },   // Db4
        { t: 5.75, div: 'swell', midi: 63, dur: 0.25, vel: 0.6 },   // Eb4

        // Pedal
        { t: 4, div: 'pedal', midi: 44, dur: 0.5, vel: 0.65 },      // Ab2
        { t: 4.5, div: 'pedal', midi: 44, dur: 0.5, vel: 0.62 },    // Ab2
        { t: 5, div: 'pedal', midi: 43, dur: 0.5, vel: 0.63 },      // G2
        { t: 5.5, div: 'pedal', midi: 43, dur: 0.5, vel: 0.6 },     // G2

        // Soprano: G5 descending
        { t: 5, div: 'great', midi: 79, dur: 0.5, vel: 0.75 },      // G5
        { t: 5.5, div: 'great', midi: 77, dur: 0.25, vel: 0.72 },   // F5
        { t: 5.75, div: 'great', midi: 75, dur: 0.25, vel: 0.7 },   // Eb5

        // ---- Bar 4: Cadence area ----
        // Soprano: F5 (approach to cadence)
        { t: 6, div: 'great', midi: 77, dur: 0.75, vel: 0.75 },     // F5
        { t: 6.75, div: 'great', midi: 75, dur: 0.25, vel: 0.7 },   // Eb5 (ornament)

        // Middle voice
        { t: 6, div: 'swell', midi: 65, dur: 0.25, vel: 0.6 },      // F4
        { t: 6.25, div: 'swell', midi: 63, dur: 0.25, vel: 0.58 },  // Eb4
        { t: 6.5, div: 'swell', midi: 61, dur: 0.25, vel: 0.58 },   // Db4
        { t: 6.75, div: 'swell', midi: 60, dur: 0.25, vel: 0.57 },  // C4
        { t: 7, div: 'swell', midi: 58, dur: 0.25, vel: 0.57 },     // Bb3
        { t: 7.25, div: 'swell', midi: 60, dur: 0.25, vel: 0.58 },  // C4
        { t: 7.5, div: 'swell', midi: 61, dur: 0.25, vel: 0.58 },   // Db4
        { t: 7.75, div: 'swell', midi: 60, dur: 0.25, vel: 0.57 },  // C4

        // Pedal
        { t: 6, div: 'pedal', midi: 41, dur: 0.5, vel: 0.65 },      // F2
        { t: 6.5, div: 'pedal', midi: 41, dur: 0.5, vel: 0.62 },    // F2
        { t: 7, div: 'pedal', midi: 39, dur: 0.5, vel: 0.63 },      // Eb2
        { t: 7.5, div: 'pedal', midi: 39, dur: 0.5, vel: 0.6 },     // Eb2

        // Soprano: Eb5
        { t: 7, div: 'great', midi: 75, dur: 0.5, vel: 0.73 },      // Eb5
        { t: 7.5, div: 'great', midi: 73, dur: 0.25, vel: 0.7 },    // C#5 (Db5)
        { t: 7.75, div: 'great', midi: 72, dur: 0.25, vel: 0.68 },  // C5

        // ---- Bar 5: Second phrase ----
        // Soprano: Db5 (new phrase)
        { t: 8, div: 'great', midi: 73, dur: 0.75, vel: 0.75 },     // Db5
        { t: 8.75, div: 'great', midi: 72, dur: 0.25, vel: 0.7 },   // C5 (ornament)

        // Middle voice
        { t: 8, div: 'swell', midi: 58, dur: 0.25, vel: 0.58 },     // Bb3
        { t: 8.25, div: 'swell', midi: 56, dur: 0.25, vel: 0.57 },  // Ab3
        { t: 8.5, div: 'swell', midi: 58, dur: 0.25, vel: 0.58 },   // Bb3
        { t: 8.75, div: 'swell', midi: 60, dur: 0.25, vel: 0.58 },  // C4
        { t: 9, div: 'swell', midi: 61, dur: 0.25, vel: 0.58 },     // Db4
        { t: 9.25, div: 'swell', midi: 60, dur: 0.25, vel: 0.57 },  // C4
        { t: 9.5, div: 'swell', midi: 58, dur: 0.25, vel: 0.57 },   // Bb3
        { t: 9.75, div: 'swell', midi: 56, dur: 0.25, vel: 0.57 },  // Ab3

        // Pedal
        { t: 8, div: 'pedal', midi: 37, dur: 0.5, vel: 0.65 },      // Db2
        { t: 8.5, div: 'pedal', midi: 37, dur: 0.5, vel: 0.62 },    // Db2
        { t: 9, div: 'pedal', midi: 36, dur: 0.5, vel: 0.63 },      // C2
        { t: 9.5, div: 'pedal', midi: 36, dur: 0.5, vel: 0.6 },     // C2

        // Soprano: C5 with ornament
        { t: 9, div: 'great', midi: 72, dur: 0.75, vel: 0.73 },     // C5
        { t: 9.75, div: 'great', midi: 70, dur: 0.25, vel: 0.68 },  // Bb4

        // ---- Bar 6: Bb minor area ----
        // Soprano: Bb4
        { t: 10, div: 'great', midi: 70, dur: 0.75, vel: 0.72 },    // Bb4
        { t: 10.75, div: 'great', midi: 68, dur: 0.25, vel: 0.68 }, // Ab4

        // Middle voice
        { t: 10, div: 'swell', midi: 58, dur: 0.25, vel: 0.58 },    // Bb3
        { t: 10.25, div: 'swell', midi: 56, dur: 0.25, vel: 0.57 }, // Ab3
        { t: 10.5, div: 'swell', midi: 55, dur: 0.25, vel: 0.57 },  // G3
        { t: 10.75, div: 'swell', midi: 53, dur: 0.25, vel: 0.55 }, // F3
        { t: 11, div: 'swell', midi: 55, dur: 0.25, vel: 0.57 },    // G3
        { t: 11.25, div: 'swell', midi: 56, dur: 0.25, vel: 0.58 }, // Ab3
        { t: 11.5, div: 'swell', midi: 58, dur: 0.25, vel: 0.58 },  // Bb3
        { t: 11.75, div: 'swell', midi: 60, dur: 0.25, vel: 0.6 },  // C4

        // Pedal
        { t: 10, div: 'pedal', midi: 46, dur: 0.5, vel: 0.63 },     // Bb2
        { t: 10.5, div: 'pedal', midi: 46, dur: 0.5, vel: 0.6 },    // Bb2
        { t: 11, div: 'pedal', midi: 44, dur: 0.5, vel: 0.63 },     // Ab2
        { t: 11.5, div: 'pedal', midi: 44, dur: 0.5, vel: 0.6 },    // Ab2

        // Soprano: Ab4 resolving
        { t: 11, div: 'great', midi: 68, dur: 0.75, vel: 0.7 },     // Ab4
        { t: 11.75, div: 'great', midi: 67, dur: 0.25, vel: 0.67 }, // G4

        // ---- Bar 7: Return to F minor ----
        // Soprano: Ab4 with ornamental approach to cadence
        { t: 12, div: 'great', midi: 68, dur: 0.5, vel: 0.72 },     // Ab4
        { t: 12.5, div: 'great', midi: 70, dur: 0.25, vel: 0.73 },  // Bb4
        { t: 12.75, div: 'great', midi: 68, dur: 0.25, vel: 0.7 },  // Ab4

        // Middle voice
        { t: 12, div: 'swell', midi: 61, dur: 0.25, vel: 0.6 },     // Db4
        { t: 12.25, div: 'swell', midi: 60, dur: 0.25, vel: 0.58 }, // C4
        { t: 12.5, div: 'swell', midi: 58, dur: 0.25, vel: 0.58 },  // Bb3
        { t: 12.75, div: 'swell', midi: 60, dur: 0.25, vel: 0.58 }, // C4
        { t: 13, div: 'swell', midi: 61, dur: 0.25, vel: 0.58 },    // Db4
        { t: 13.25, div: 'swell', midi: 63, dur: 0.25, vel: 0.6 },  // Eb4
        { t: 13.5, div: 'swell', midi: 64, dur: 0.25, vel: 0.6 },   // E4 (leading tone)
        { t: 13.75, div: 'swell', midi: 63, dur: 0.25, vel: 0.58 }, // Eb4

        // Pedal
        { t: 12, div: 'pedal', midi: 41, dur: 0.5, vel: 0.65 },     // F2
        { t: 12.5, div: 'pedal', midi: 39, dur: 0.5, vel: 0.62 },   // Eb2
        { t: 13, div: 'pedal', midi: 37, dur: 0.5, vel: 0.63 },     // Db2
        { t: 13.5, div: 'pedal', midi: 36, dur: 0.5, vel: 0.65 },   // C2

        // Soprano: G4 leading tone to final
        { t: 13, div: 'great', midi: 67, dur: 0.5, vel: 0.7 },      // G4
        { t: 13.5, div: 'great', midi: 65, dur: 0.25, vel: 0.68 },  // F4
        { t: 13.75, div: 'great', midi: 64, dur: 0.25, vel: 0.67 }, // E4

        // ---- Bar 8: Final cadence F minor ----
        // Soprano: F4 (final note, with gentle resolution)
        { t: 14, div: 'great', midi: 65, dur: 1.5, vel: 0.72 },     // F4 (long)
        { t: 15.5, div: 'great', midi: 77, dur: 2.5, vel: 0.7 },    // F5 (octave higher, final)

        // Middle voice: final resolution
        { t: 14, div: 'swell', midi: 61, dur: 0.25, vel: 0.58 },    // Db4
        { t: 14.25, div: 'swell', midi: 60, dur: 0.25, vel: 0.57 }, // C4
        { t: 14.5, div: 'swell', midi: 61, dur: 0.25, vel: 0.58 },  // Db4
        { t: 14.75, div: 'swell', midi: 63, dur: 0.25, vel: 0.58 }, // Eb4
        { t: 15, div: 'swell', midi: 65, dur: 0.25, vel: 0.6 },     // F4
        { t: 15.25, div: 'swell', midi: 63, dur: 0.25, vel: 0.58 }, // Eb4
        { t: 15.5, div: 'swell', midi: 61, dur: 0.25, vel: 0.57 },  // Db4
        { t: 15.75, div: 'swell', midi: 60, dur: 0.25, vel: 0.57 }, // C4
        { t: 16, div: 'swell', midi: 61, dur: 2, vel: 0.58 },       // Db4 (final)

        // Pedal: final
        { t: 14, div: 'pedal', midi: 41, dur: 0.5, vel: 0.65 },     // F2
        { t: 14.5, div: 'pedal', midi: 41, dur: 0.5, vel: 0.62 },   // F2
        { t: 15, div: 'pedal', midi: 41, dur: 0.5, vel: 0.63 },     // F2
        { t: 15.5, div: 'pedal', midi: 41, dur: 0.5, vel: 0.6 },    // F2
        { t: 16, div: 'pedal', midi: 41, dur: 2, vel: 0.65 },       // F2 (final)
    ]
};
