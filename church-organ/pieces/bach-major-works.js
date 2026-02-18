// Bach Major Organ Works - Church organ simulator
// MIDI reference: C2=36, D2=38, Eb2=39, E2=40, F2=41, G2=43, A2=45, Bb2=46, B2=47
//                 C3=48, D3=50, Eb3=51, E3=52, F3=53, G3=55, Ab3=56, A3=57, Bb3=58, B3=59
//                 C4=60, D4=62, Eb4=63, E4=64, F4=65, G4=67, Ab4=68, A4=69, Bb4=70, B4=71
//                 C5=72, D5=74, Eb5=75, E5=76, F5=77, G5=79, Ab5=80, A5=81, Bb5=82

// ============================================================
// 1. Fantasy and Fugue in G minor, BWV 542 ("Great")
//    Dramatic recitative-like fantasy opening with elaborate runs
//    Key: G minor (Bb, Eb). Tempo ~72
//    The fantasy opens with a solo manual passage, free and rhapsodic
// ============================================================

const PIECE_BACH_FANTASY_G = {
    title: "Fantasy and Fugue in G minor",
    composer: "Johann Sebastian Bach",
    catalog: "BWV 542",
    key: "G minor",
    tempo: 72,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture'],
        swell: ['sw-gedeckt8', 'sw-salicional8'],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ======== FANTASY - Opening recitative (bars 1-4) ========
        // Dramatic solo on Great, free tempo feel
        // Bar 1: G minor chord arpeggio then running passage
        { t: 0, div: 'great', midi: 67, dur: 1.5, vel: 0.9 },      // G4
        { t: 0, div: 'great', midi: 70, dur: 1.5, vel: 0.85 },     // Bb4
        { t: 0, div: 'great', midi: 74, dur: 1.5, vel: 0.85 },     // D5
        { t: 0, div: 'pedal', midi: 43, dur: 2.0, vel: 0.85 },     // G2 pedal

        // Descending run
        { t: 1.5, div: 'great', midi: 74, dur: 0.25, vel: 0.82 },  // D5
        { t: 1.75, div: 'great', midi: 72, dur: 0.25, vel: 0.8 },  // C5
        { t: 2.0, div: 'great', midi: 70, dur: 0.25, vel: 0.8 },   // Bb4
        { t: 2.25, div: 'great', midi: 69, dur: 0.25, vel: 0.78 }, // A4
        { t: 2.5, div: 'great', midi: 67, dur: 0.25, vel: 0.78 },  // G4
        { t: 2.75, div: 'great', midi: 65, dur: 0.25, vel: 0.76 }, // F4
        { t: 3.0, div: 'great', midi: 63, dur: 0.25, vel: 0.76 },  // Eb4
        { t: 3.25, div: 'great', midi: 62, dur: 0.25, vel: 0.74 }, // D4

        // Bar 2: Resolving figure and new recitative gesture
        { t: 3.5, div: 'great', midi: 60, dur: 1.0, vel: 0.82 },   // C4
        { t: 3.5, div: 'great', midi: 63, dur: 1.0, vel: 0.78 },   // Eb4
        { t: 4.5, div: 'great', midi: 62, dur: 0.75, vel: 0.8 },   // D4
        { t: 5.25, div: 'great', midi: 58, dur: 0.75, vel: 0.78 }, // Bb3

        // Bar 3: Ascending chromatic recitative
        { t: 6, div: 'great', midi: 55, dur: 0.5, vel: 0.82 },     // G3
        { t: 6.5, div: 'great', midi: 57, dur: 0.5, vel: 0.8 },    // A3
        { t: 7.0, div: 'great', midi: 58, dur: 0.5, vel: 0.8 },    // Bb3
        { t: 7.5, div: 'great', midi: 59, dur: 0.5, vel: 0.78 },   // B3
        { t: 8.0, div: 'great', midi: 60, dur: 0.5, vel: 0.82 },   // C4
        { t: 8.5, div: 'great', midi: 61, dur: 0.5, vel: 0.8 },    // C#4
        { t: 9.0, div: 'great', midi: 62, dur: 1.0, vel: 0.85 },   // D4
        { t: 9.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.8 },    // D2 pedal

        // Bar 4: Flourish upward
        { t: 10.0, div: 'great', midi: 62, dur: 0.25, vel: 0.82 }, // D4
        { t: 10.25, div: 'great', midi: 63, dur: 0.25, vel: 0.8 }, // Eb4
        { t: 10.5, div: 'great', midi: 65, dur: 0.25, vel: 0.8 },  // F4
        { t: 10.75, div: 'great', midi: 66, dur: 0.25, vel: 0.82 },// F#4
        { t: 11.0, div: 'great', midi: 67, dur: 0.25, vel: 0.84 }, // G4
        { t: 11.25, div: 'great', midi: 69, dur: 0.25, vel: 0.82 },// A4
        { t: 11.5, div: 'great', midi: 70, dur: 0.25, vel: 0.84 }, // Bb4
        { t: 11.75, div: 'great', midi: 72, dur: 0.25, vel: 0.86 },// C5

        // ======== Bars 5-8: Second recitative phrase ========
        // Bar 5: Held chord, dramatic pause feel
        { t: 12, div: 'great', midi: 74, dur: 2.0, vel: 0.88 },    // D5
        { t: 12, div: 'great', midi: 70, dur: 2.0, vel: 0.82 },    // Bb4
        { t: 12, div: 'great', midi: 66, dur: 2.0, vel: 0.8 },     // F#4
        { t: 12, div: 'pedal', midi: 38, dur: 2.0, vel: 0.82 },    // D2

        // Bar 6: Cascading sixteenth-note passage
        { t: 14, div: 'great', midi: 74, dur: 0.25, vel: 0.84 },   // D5
        { t: 14.25, div: 'great', midi: 72, dur: 0.25, vel: 0.82 },// C5
        { t: 14.5, div: 'great', midi: 70, dur: 0.25, vel: 0.82 }, // Bb4
        { t: 14.75, div: 'great', midi: 69, dur: 0.25, vel: 0.8 }, // A4
        { t: 15, div: 'great', midi: 67, dur: 0.25, vel: 0.8 },    // G4
        { t: 15.25, div: 'great', midi: 66, dur: 0.25, vel: 0.78 },// F#4
        { t: 15.5, div: 'great', midi: 65, dur: 0.25, vel: 0.78 }, // F4
        { t: 15.75, div: 'great', midi: 63, dur: 0.25, vel: 0.76 },// Eb4

        // Bar 7: Low register tremolo-like alternation
        { t: 16, div: 'great', midi: 62, dur: 0.5, vel: 0.8 },     // D4
        { t: 16.5, div: 'great', midi: 58, dur: 0.5, vel: 0.78 },  // Bb3
        { t: 17, div: 'great', midi: 62, dur: 0.5, vel: 0.8 },     // D4
        { t: 17.5, div: 'great', midi: 55, dur: 0.5, vel: 0.76 },  // G3
        { t: 16, div: 'pedal', midi: 43, dur: 2.0, vel: 0.78 },    // G2

        // Bar 8: Rising to high register
        { t: 18, div: 'great', midi: 58, dur: 0.25, vel: 0.78 },   // Bb3
        { t: 18.25, div: 'great', midi: 60, dur: 0.25, vel: 0.8 }, // C4
        { t: 18.5, div: 'great', midi: 62, dur: 0.25, vel: 0.8 },  // D4
        { t: 18.75, div: 'great', midi: 65, dur: 0.25, vel: 0.82 },// F4
        { t: 19, div: 'great', midi: 67, dur: 0.25, vel: 0.84 },   // G4
        { t: 19.25, div: 'great', midi: 70, dur: 0.25, vel: 0.84 },// Bb4
        { t: 19.5, div: 'great', midi: 72, dur: 0.25, vel: 0.86 }, // C5
        { t: 19.75, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },// D5

        // ======== Bars 9-14: Intensifying harmonic passage ========
        // Bar 9: Diminished chord arpeggio
        { t: 20, div: 'great', midi: 75, dur: 1.5, vel: 0.88 },    // Eb5
        { t: 20, div: 'great', midi: 72, dur: 1.5, vel: 0.84 },    // C5
        { t: 20, div: 'great', midi: 66, dur: 1.5, vel: 0.82 },    // F#4
        { t: 20, div: 'pedal', midi: 36, dur: 2.0, vel: 0.82 },    // C2

        // Bar 10: Descending sequence with chromaticism
        { t: 21.5, div: 'great', midi: 74, dur: 0.25, vel: 0.84 }, // D5
        { t: 21.75, div: 'great', midi: 72, dur: 0.25, vel: 0.82 },// C5
        { t: 22.0, div: 'great', midi: 71, dur: 0.25, vel: 0.82 }, // B4
        { t: 22.25, div: 'great', midi: 69, dur: 0.25, vel: 0.8 }, // A4
        { t: 22.5, div: 'great', midi: 67, dur: 0.25, vel: 0.8 },  // G4
        { t: 22.75, div: 'great', midi: 66, dur: 0.25, vel: 0.78 },// F#4
        { t: 23.0, div: 'great', midi: 65, dur: 0.5, vel: 0.8 },   // F4
        { t: 23.5, div: 'great', midi: 63, dur: 0.5, vel: 0.78 },  // Eb4

        // Bar 11: Chromatic bass descent with sustained upper voice
        { t: 24, div: 'great', midi: 62, dur: 2.0, vel: 0.82 },    // D4 held
        { t: 24, div: 'great', midi: 70, dur: 2.0, vel: 0.78 },    // Bb4 held
        { t: 24, div: 'pedal', midi: 46, dur: 1.0, vel: 0.78 },    // Bb2
        { t: 25, div: 'pedal', midi: 45, dur: 1.0, vel: 0.76 },    // A2

        // Bar 12: Continuing chromatic descent
        { t: 26, div: 'great', midi: 60, dur: 1.0, vel: 0.82 },    // C4
        { t: 26, div: 'great', midi: 69, dur: 1.0, vel: 0.78 },    // A4
        { t: 27, div: 'great', midi: 58, dur: 1.0, vel: 0.8 },     // Bb3
        { t: 27, div: 'great', midi: 67, dur: 1.0, vel: 0.78 },    // G4
        { t: 26, div: 'pedal', midi: 44, dur: 1.0, vel: 0.76 },    // Ab2
        { t: 27, div: 'pedal', midi: 43, dur: 1.0, vel: 0.78 },    // G2

        // Bar 13: Virtuosic flourish - 32nd-note run
        { t: 28, div: 'great', midi: 67, dur: 0.125, vel: 0.82 },  // G4
        { t: 28.125, div: 'great', midi: 69, dur: 0.125, vel: 0.8 },// A4
        { t: 28.25, div: 'great', midi: 70, dur: 0.125, vel: 0.82 },// Bb4
        { t: 28.375, div: 'great', midi: 72, dur: 0.125, vel: 0.82 },// C5
        { t: 28.5, div: 'great', midi: 74, dur: 0.125, vel: 0.84 },// D5
        { t: 28.625, div: 'great', midi: 75, dur: 0.125, vel: 0.84 },// Eb5
        { t: 28.75, div: 'great', midi: 77, dur: 0.125, vel: 0.86 },// F5
        { t: 28.875, div: 'great', midi: 78, dur: 0.125, vel: 0.86 },// F#5
        { t: 29, div: 'great', midi: 79, dur: 1.0, vel: 0.9 },     // G5 arrival

        // Bar 14: Dramatic held chord
        { t: 30, div: 'great', midi: 79, dur: 2.0, vel: 0.88 },    // G5
        { t: 30, div: 'great', midi: 74, dur: 2.0, vel: 0.84 },    // D5
        { t: 30, div: 'great', midi: 70, dur: 2.0, vel: 0.82 },    // Bb4
        { t: 30, div: 'great', midi: 67, dur: 2.0, vel: 0.8 },     // G4
        { t: 30, div: 'pedal', midi: 43, dur: 2.0, vel: 0.85 },    // G2

        // ======== Bars 15-20: Third recitative section ========
        // Bar 15: Quiet, introspective passage on Swell
        { t: 32, div: 'swell', midi: 70, dur: 1.0, vel: 0.65 },    // Bb4
        { t: 33, div: 'swell', midi: 69, dur: 0.5, vel: 0.62 },    // A4
        { t: 33.5, div: 'swell', midi: 67, dur: 0.5, vel: 0.6 },   // G4

        // Bar 16: Sighing motif
        { t: 34, div: 'swell', midi: 65, dur: 0.75, vel: 0.65 },   // F4
        { t: 34.75, div: 'swell', midi: 63, dur: 0.25, vel: 0.6 }, // Eb4
        { t: 35, div: 'swell', midi: 62, dur: 1.0, vel: 0.68 },    // D4

        // Bar 17: Pedal enters with chromatic line
        { t: 36, div: 'pedal', midi: 43, dur: 1.0, vel: 0.75 },    // G2
        { t: 37, div: 'pedal', midi: 42, dur: 1.0, vel: 0.73 },    // F#2
        { t: 36, div: 'swell', midi: 58, dur: 0.5, vel: 0.65 },    // Bb3
        { t: 36.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.65 },  // C4
        { t: 37, div: 'swell', midi: 62, dur: 0.5, vel: 0.68 },    // D4
        { t: 37.5, div: 'swell', midi: 63, dur: 0.5, vel: 0.65 },  // Eb4

        // Bar 18: Building tension
        { t: 38, div: 'pedal', midi: 41, dur: 1.0, vel: 0.73 },    // F2
        { t: 39, div: 'pedal', midi: 40, dur: 1.0, vel: 0.75 },    // E2
        { t: 38, div: 'swell', midi: 65, dur: 0.5, vel: 0.68 },    // F4
        { t: 38.5, div: 'swell', midi: 67, dur: 0.5, vel: 0.7 },   // G4
        { t: 39, div: 'swell', midi: 69, dur: 0.5, vel: 0.72 },    // A4
        { t: 39.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.72 },  // Bb4

        // Bar 19: Return to Great, full texture
        { t: 40, div: 'great', midi: 72, dur: 1.0, vel: 0.85 },    // C5
        { t: 40, div: 'great', midi: 67, dur: 1.0, vel: 0.8 },     // G4
        { t: 40, div: 'great', midi: 63, dur: 1.0, vel: 0.78 },    // Eb4
        { t: 40, div: 'pedal', midi: 39, dur: 2.0, vel: 0.8 },     // Eb2
        { t: 41, div: 'great', midi: 70, dur: 0.5, vel: 0.82 },    // Bb4
        { t: 41.5, div: 'great', midi: 69, dur: 0.5, vel: 0.8 },   // A4

        // Bar 20: Cadential passage
        { t: 42, div: 'great', midi: 70, dur: 0.25, vel: 0.84 },   // Bb4
        { t: 42.25, div: 'great', midi: 69, dur: 0.25, vel: 0.82 },// A4
        { t: 42.5, div: 'great', midi: 67, dur: 0.25, vel: 0.82 }, // G4
        { t: 42.75, div: 'great', midi: 66, dur: 0.25, vel: 0.8 }, // F#4
        { t: 43, div: 'great', midi: 67, dur: 1.0, vel: 0.88 },    // G4 resolution
        { t: 43, div: 'great', midi: 62, dur: 1.0, vel: 0.82 },    // D4
        { t: 43, div: 'great', midi: 58, dur: 1.0, vel: 0.8 },     // Bb3
        { t: 42, div: 'pedal', midi: 43, dur: 2.0, vel: 0.82 },    // G2

        // ======== Bars 21-28: FUGUE exposition ========
        // Fugue subject derived from Dutch folk song, in 4/4
        // Subject: G-A-Bb-A-G-F#-G-A-Bb-C-D-C-Bb-A-G

        // Bar 21: Subject entry 1 - Alto on Great
        { t: 44, div: 'great', midi: 67, dur: 0.5, vel: 0.75 },    // G4
        { t: 44.5, div: 'great', midi: 69, dur: 0.5, vel: 0.73 },  // A4
        { t: 45, div: 'great', midi: 70, dur: 0.5, vel: 0.75 },    // Bb4
        { t: 45.5, div: 'great', midi: 69, dur: 0.5, vel: 0.73 },  // A4
        { t: 46, div: 'great', midi: 67, dur: 0.5, vel: 0.75 },    // G4
        { t: 46.5, div: 'great', midi: 66, dur: 0.5, vel: 0.73 },  // F#4
        { t: 47, div: 'great', midi: 67, dur: 0.5, vel: 0.75 },    // G4
        { t: 47.5, div: 'great', midi: 69, dur: 0.5, vel: 0.73 },  // A4

        // Bar 22: Subject continues
        { t: 48, div: 'great', midi: 70, dur: 0.5, vel: 0.75 },    // Bb4
        { t: 48.5, div: 'great', midi: 72, dur: 0.5, vel: 0.77 },  // C5
        { t: 49, div: 'great', midi: 74, dur: 0.5, vel: 0.78 },    // D5
        { t: 49.5, div: 'great', midi: 72, dur: 0.5, vel: 0.76 },  // C5
        { t: 50, div: 'great', midi: 70, dur: 0.5, vel: 0.75 },    // Bb4
        { t: 50.5, div: 'great', midi: 69, dur: 0.5, vel: 0.73 },  // A4
        { t: 51, div: 'great', midi: 67, dur: 1.0, vel: 0.78 },    // G4

        // Bar 23: Answer entry - Soprano, subject at D
        { t: 52, div: 'great', midi: 74, dur: 0.5, vel: 0.78 },    // D5
        { t: 52.5, div: 'great', midi: 76, dur: 0.5, vel: 0.76 },  // E5
        { t: 53, div: 'great', midi: 77, dur: 0.5, vel: 0.78 },    // F5
        { t: 53.5, div: 'great', midi: 76, dur: 0.5, vel: 0.76 },  // E5
        { t: 54, div: 'great', midi: 74, dur: 0.5, vel: 0.78 },    // D5
        { t: 54.5, div: 'great', midi: 73, dur: 0.5, vel: 0.76 },  // C#5
        { t: 55, div: 'great', midi: 74, dur: 0.5, vel: 0.78 },    // D5
        { t: 55.5, div: 'great', midi: 76, dur: 0.5, vel: 0.76 },  // E5
        // Countersubject in alto
        { t: 52, div: 'great', midi: 62, dur: 1.0, vel: 0.68 },    // D4
        { t: 53, div: 'great', midi: 63, dur: 0.5, vel: 0.66 },    // Eb4
        { t: 53.5, div: 'great', midi: 62, dur: 0.5, vel: 0.66 },  // D4
        { t: 54, div: 'great', midi: 60, dur: 0.5, vel: 0.68 },    // C4
        { t: 54.5, div: 'great', midi: 58, dur: 0.5, vel: 0.66 },  // Bb3
        { t: 55, div: 'great', midi: 57, dur: 1.0, vel: 0.68 },    // A3

        // Bar 24: Answer continues
        { t: 56, div: 'great', midi: 77, dur: 0.5, vel: 0.78 },    // F5
        { t: 56.5, div: 'great', midi: 79, dur: 0.5, vel: 0.8 },   // G5
        { t: 57, div: 'great', midi: 81, dur: 0.5, vel: 0.82 },    // A5
        { t: 57.5, div: 'great', midi: 79, dur: 0.5, vel: 0.8 },   // G5
        { t: 58, div: 'great', midi: 77, dur: 0.5, vel: 0.78 },    // F5
        { t: 58.5, div: 'great', midi: 76, dur: 0.5, vel: 0.76 },  // E5
        { t: 59, div: 'great', midi: 74, dur: 1.0, vel: 0.8 },     // D5
        // Countersubject continues
        { t: 56, div: 'great', midi: 58, dur: 0.5, vel: 0.68 },    // Bb3
        { t: 56.5, div: 'great', midi: 60, dur: 0.5, vel: 0.66 },  // C4
        { t: 57, div: 'great', midi: 62, dur: 0.5, vel: 0.68 },    // D4
        { t: 57.5, div: 'great', midi: 60, dur: 0.5, vel: 0.66 },  // C4
        { t: 58, div: 'great', midi: 58, dur: 0.5, vel: 0.68 },    // Bb3
        { t: 58.5, div: 'great', midi: 57, dur: 0.5, vel: 0.66 },  // A3
        { t: 59, div: 'great', midi: 55, dur: 1.0, vel: 0.68 },    // G3

        // Bar 25-26: Tenor entry on pedal
        { t: 60, div: 'pedal', midi: 43, dur: 0.5, vel: 0.78 },    // G2
        { t: 60.5, div: 'pedal', midi: 45, dur: 0.5, vel: 0.76 },  // A2
        { t: 61, div: 'pedal', midi: 46, dur: 0.5, vel: 0.78 },    // Bb2
        { t: 61.5, div: 'pedal', midi: 45, dur: 0.5, vel: 0.76 },  // A2
        { t: 62, div: 'pedal', midi: 43, dur: 0.5, vel: 0.78 },    // G2
        { t: 62.5, div: 'pedal', midi: 42, dur: 0.5, vel: 0.76 },  // F#2
        { t: 63, div: 'pedal', midi: 43, dur: 0.5, vel: 0.78 },    // G2
        { t: 63.5, div: 'pedal', midi: 45, dur: 0.5, vel: 0.76 },  // A2
        // Upper voices continue
        { t: 60, div: 'great', midi: 70, dur: 1.0, vel: 0.72 },    // Bb4
        { t: 61, div: 'great', midi: 69, dur: 1.0, vel: 0.7 },     // A4
        { t: 62, div: 'great', midi: 67, dur: 2.0, vel: 0.72 },    // G4
        { t: 60, div: 'great', midi: 62, dur: 1.0, vel: 0.68 },    // D4
        { t: 61, div: 'great', midi: 60, dur: 1.0, vel: 0.66 },    // C4
        { t: 62, div: 'great', midi: 58, dur: 2.0, vel: 0.68 },    // Bb3

        // Bar 26: Pedal subject continues
        { t: 64, div: 'pedal', midi: 46, dur: 0.5, vel: 0.78 },    // Bb2
        { t: 64.5, div: 'pedal', midi: 48, dur: 0.5, vel: 0.8 },   // C3
        { t: 65, div: 'pedal', midi: 50, dur: 0.5, vel: 0.82 },    // D3
        { t: 65.5, div: 'pedal', midi: 48, dur: 0.5, vel: 0.8 },   // C3
        { t: 66, div: 'pedal', midi: 46, dur: 0.5, vel: 0.78 },    // Bb2
        { t: 66.5, div: 'pedal', midi: 45, dur: 0.5, vel: 0.76 },  // A2
        { t: 67, div: 'pedal', midi: 43, dur: 1.0, vel: 0.8 },     // G2
        // Chords above
        { t: 64, div: 'great', midi: 67, dur: 2.0, vel: 0.75 },    // G4
        { t: 64, div: 'great', midi: 62, dur: 2.0, vel: 0.7 },     // D4
        { t: 66, div: 'great', midi: 70, dur: 2.0, vel: 0.75 },    // Bb4
        { t: 66, div: 'great', midi: 66, dur: 2.0, vel: 0.72 },    // F#4

        // ======== Bars 27-30: Fugal development, episodes ========
        // Bar 27: Episode - sequential pattern
        { t: 68, div: 'great', midi: 74, dur: 0.5, vel: 0.78 },    // D5
        { t: 68.5, div: 'great', midi: 72, dur: 0.5, vel: 0.76 },  // C5
        { t: 69, div: 'great', midi: 70, dur: 0.5, vel: 0.78 },    // Bb4
        { t: 69.5, div: 'great', midi: 69, dur: 0.5, vel: 0.76 },  // A4
        { t: 70, div: 'great', midi: 72, dur: 0.5, vel: 0.78 },    // C5
        { t: 70.5, div: 'great', midi: 70, dur: 0.5, vel: 0.76 },  // Bb4
        { t: 71, div: 'great', midi: 69, dur: 0.5, vel: 0.78 },    // A4
        { t: 71.5, div: 'great', midi: 67, dur: 0.5, vel: 0.76 },  // G4
        // Lower voice
        { t: 68, div: 'great', midi: 58, dur: 1.0, vel: 0.68 },    // Bb3
        { t: 69, div: 'great', midi: 57, dur: 1.0, vel: 0.66 },    // A3
        { t: 70, div: 'great', midi: 55, dur: 1.0, vel: 0.68 },    // G3
        { t: 71, div: 'great', midi: 53, dur: 1.0, vel: 0.66 },    // F3
        { t: 68, div: 'pedal', midi: 46, dur: 2.0, vel: 0.75 },    // Bb2
        { t: 70, div: 'pedal', midi: 41, dur: 2.0, vel: 0.75 },    // F2

        // Bar 29-30: Final stretto and cadence
        { t: 72, div: 'great', midi: 67, dur: 0.5, vel: 0.82 },    // G4 - subject in soprano
        { t: 72.5, div: 'great', midi: 69, dur: 0.5, vel: 0.8 },   // A4
        { t: 73, div: 'great', midi: 70, dur: 0.5, vel: 0.82 },    // Bb4
        { t: 73.5, div: 'great', midi: 69, dur: 0.5, vel: 0.8 },   // A4
        { t: 72, div: 'great', midi: 55, dur: 0.5, vel: 0.72 },    // G3 - subject in tenor
        { t: 72.5, div: 'great', midi: 57, dur: 0.5, vel: 0.7 },   // A3
        { t: 73, div: 'great', midi: 58, dur: 0.5, vel: 0.72 },    // Bb3
        { t: 73.5, div: 'great', midi: 57, dur: 0.5, vel: 0.7 },   // A3

        // Bar 30: Grand final cadence - G minor
        { t: 74, div: 'great', midi: 79, dur: 2.0, vel: 0.92 },    // G5
        { t: 74, div: 'great', midi: 74, dur: 2.0, vel: 0.88 },    // D5
        { t: 74, div: 'great', midi: 70, dur: 2.0, vel: 0.86 },    // Bb4
        { t: 74, div: 'great', midi: 67, dur: 2.0, vel: 0.84 },    // G4
        { t: 74, div: 'great', midi: 62, dur: 2.0, vel: 0.82 },    // D4
        { t: 74, div: 'great', midi: 55, dur: 2.0, vel: 0.8 },     // G3
        { t: 74, div: 'pedal', midi: 43, dur: 2.0, vel: 0.9 },     // G2
        { t: 74, div: 'pedal', midi: 31, dur: 2.0, vel: 0.88 },    // G1
    ]
};


// ============================================================
// 2. Toccata, Adagio and Fugue in C major, BWV 564
//    Famous opening pedal solo - unique in organ literature
//    Key: C major. Tempo ~80
//    Brilliant, virtuosic character
// ============================================================

const PIECE_BACH_TOCCATA_C = {
    title: "Toccata, Adagio and Fugue in C major",
    composer: "Johann Sebastian Bach",
    catalog: "BWV 564",
    key: "C major",
    tempo: 80,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8'],
        swell: ['sw-gedeckt8', 'sw-flute4'],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8']
    },
    events: [
        // ======== TOCCATA - Pedal solo opening (bars 1-8) ========
        // The famous unaccompanied pedal passage in C major
        // Bar 1: Bold C major statement - pedal alone
        { t: 0, div: 'pedal', midi: 48, dur: 1.0, vel: 0.88 },     // C3
        { t: 1, div: 'pedal', midi: 50, dur: 0.5, vel: 0.85 },     // D3
        { t: 1.5, div: 'pedal', midi: 52, dur: 0.5, vel: 0.85 },   // E3
        { t: 2, div: 'pedal', midi: 53, dur: 0.5, vel: 0.85 },     // F3
        { t: 2.5, div: 'pedal', midi: 52, dur: 0.5, vel: 0.83 },   // E3
        { t: 3, div: 'pedal', midi: 50, dur: 0.5, vel: 0.83 },     // D3
        { t: 3.5, div: 'pedal', midi: 48, dur: 0.5, vel: 0.85 },   // C3

        // Bar 2: Ascending scale passage
        { t: 4, div: 'pedal', midi: 48, dur: 0.5, vel: 0.85 },     // C3
        { t: 4.5, div: 'pedal', midi: 50, dur: 0.5, vel: 0.83 },   // D3
        { t: 5, div: 'pedal', midi: 52, dur: 0.5, vel: 0.85 },     // E3
        { t: 5.5, div: 'pedal', midi: 53, dur: 0.5, vel: 0.85 },   // F3
        { t: 6, div: 'pedal', midi: 55, dur: 0.5, vel: 0.87 },     // G3
        { t: 6.5, div: 'pedal', midi: 57, dur: 0.5, vel: 0.87 },   // A3
        { t: 7, div: 'pedal', midi: 59, dur: 0.5, vel: 0.88 },     // B3
        { t: 7.5, div: 'pedal', midi: 60, dur: 0.5, vel: 0.9 },    // C4

        // Bar 3: High register pedal work and descent
        { t: 8, div: 'pedal', midi: 60, dur: 0.5, vel: 0.88 },     // C4
        { t: 8.5, div: 'pedal', midi: 59, dur: 0.5, vel: 0.86 },   // B3
        { t: 9, div: 'pedal', midi: 57, dur: 0.5, vel: 0.86 },     // A3
        { t: 9.5, div: 'pedal', midi: 55, dur: 0.5, vel: 0.85 },   // G3
        { t: 10, div: 'pedal', midi: 53, dur: 0.5, vel: 0.85 },    // F3
        { t: 10.5, div: 'pedal', midi: 52, dur: 0.5, vel: 0.83 },  // E3
        { t: 11, div: 'pedal', midi: 50, dur: 0.5, vel: 0.83 },    // D3
        { t: 11.5, div: 'pedal', midi: 48, dur: 0.5, vel: 0.85 },  // C3

        // Bar 4: Arpeggiated figures
        { t: 12, div: 'pedal', midi: 48, dur: 0.5, vel: 0.86 },    // C3
        { t: 12.5, div: 'pedal', midi: 52, dur: 0.5, vel: 0.86 },  // E3
        { t: 13, div: 'pedal', midi: 55, dur: 0.5, vel: 0.88 },    // G3
        { t: 13.5, div: 'pedal', midi: 60, dur: 0.5, vel: 0.9 },   // C4
        { t: 14, div: 'pedal', midi: 55, dur: 0.5, vel: 0.86 },    // G3
        { t: 14.5, div: 'pedal', midi: 52, dur: 0.5, vel: 0.85 },  // E3
        { t: 15, div: 'pedal', midi: 48, dur: 1.0, vel: 0.88 },    // C3

        // Bar 5: Pedal trills and turns
        { t: 16, div: 'pedal', midi: 55, dur: 0.5, vel: 0.86 },    // G3
        { t: 16.5, div: 'pedal', midi: 57, dur: 0.25, vel: 0.84 }, // A3
        { t: 16.75, div: 'pedal', midi: 55, dur: 0.25, vel: 0.84 },// G3
        { t: 17, div: 'pedal', midi: 53, dur: 0.5, vel: 0.85 },    // F3
        { t: 17.5, div: 'pedal', midi: 55, dur: 0.25, vel: 0.84 }, // G3
        { t: 17.75, div: 'pedal', midi: 53, dur: 0.25, vel: 0.84 },// F3
        { t: 18, div: 'pedal', midi: 52, dur: 0.5, vel: 0.85 },    // E3
        { t: 18.5, div: 'pedal', midi: 53, dur: 0.25, vel: 0.84 }, // F3
        { t: 18.75, div: 'pedal', midi: 52, dur: 0.25, vel: 0.84 },// E3
        { t: 19, div: 'pedal', midi: 50, dur: 1.0, vel: 0.86 },    // D3

        // Bar 6-7: Dramatic pedal passage leading to manual entry
        { t: 20, div: 'pedal', midi: 50, dur: 0.5, vel: 0.86 },    // D3
        { t: 20.5, div: 'pedal', midi: 48, dur: 0.5, vel: 0.85 },  // C3
        { t: 21, div: 'pedal', midi: 47, dur: 0.5, vel: 0.85 },    // B2
        { t: 21.5, div: 'pedal', midi: 48, dur: 0.5, vel: 0.86 },  // C3
        { t: 22, div: 'pedal', midi: 50, dur: 0.5, vel: 0.85 },    // D3
        { t: 22.5, div: 'pedal', midi: 52, dur: 0.5, vel: 0.86 },  // E3
        { t: 23, div: 'pedal', midi: 53, dur: 0.5, vel: 0.86 },    // F3
        { t: 23.5, div: 'pedal', midi: 55, dur: 0.5, vel: 0.88 },  // G3

        // Bar 8: Pedal cadential figure
        { t: 24, div: 'pedal', midi: 55, dur: 1.0, vel: 0.88 },    // G3
        { t: 25, div: 'pedal', midi: 53, dur: 0.5, vel: 0.85 },    // F3
        { t: 25.5, div: 'pedal', midi: 52, dur: 0.5, vel: 0.85 },  // E3
        { t: 26, div: 'pedal', midi: 50, dur: 0.5, vel: 0.85 },    // D3
        { t: 26.5, div: 'pedal', midi: 48, dur: 0.5, vel: 0.86 },  // C3
        { t: 27, div: 'pedal', midi: 47, dur: 0.5, vel: 0.84 },    // B2
        { t: 27.5, div: 'pedal', midi: 48, dur: 0.5, vel: 0.88 },  // C3

        // ======== Bars 9-14: Manual passaggio enters ========
        // Bar 9: Brilliant manual entry - C major chords with running sixteenths
        { t: 28, div: 'great', midi: 72, dur: 0.25, vel: 0.88 },   // C5
        { t: 28.25, div: 'great', midi: 71, dur: 0.25, vel: 0.85 },// B4
        { t: 28.5, div: 'great', midi: 72, dur: 0.25, vel: 0.88 }, // C5
        { t: 28.75, div: 'great', midi: 74, dur: 0.25, vel: 0.86 },// D5
        { t: 29, div: 'great', midi: 76, dur: 0.25, vel: 0.88 },   // E5
        { t: 29.25, div: 'great', midi: 74, dur: 0.25, vel: 0.86 },// D5
        { t: 29.5, div: 'great', midi: 72, dur: 0.25, vel: 0.86 }, // C5
        { t: 29.75, div: 'great', midi: 71, dur: 0.25, vel: 0.85 },// B4
        { t: 28, div: 'pedal', midi: 48, dur: 2.0, vel: 0.85 },    // C3

        // Bar 10: Continuing passage work
        { t: 30, div: 'great', midi: 69, dur: 0.25, vel: 0.86 },   // A4
        { t: 30.25, div: 'great', midi: 71, dur: 0.25, vel: 0.85 },// B4
        { t: 30.5, div: 'great', midi: 72, dur: 0.25, vel: 0.88 }, // C5
        { t: 30.75, div: 'great', midi: 74, dur: 0.25, vel: 0.86 },// D5
        { t: 31, div: 'great', midi: 76, dur: 0.25, vel: 0.88 },   // E5
        { t: 31.25, div: 'great', midi: 77, dur: 0.25, vel: 0.88 },// F5
        { t: 31.5, div: 'great', midi: 79, dur: 0.25, vel: 0.9 },  // G5
        { t: 31.75, div: 'great', midi: 77, dur: 0.25, vel: 0.88 },// F5
        { t: 30, div: 'pedal', midi: 53, dur: 2.0, vel: 0.83 },    // F3

        // Bar 11: Full texture - chords with inner voice
        { t: 32, div: 'great', midi: 76, dur: 1.0, vel: 0.88 },    // E5
        { t: 32, div: 'great', midi: 72, dur: 1.0, vel: 0.84 },    // C5
        { t: 32, div: 'great', midi: 67, dur: 1.0, vel: 0.8 },     // G4
        { t: 33, div: 'great', midi: 74, dur: 1.0, vel: 0.86 },    // D5
        { t: 33, div: 'great', midi: 71, dur: 1.0, vel: 0.82 },    // B4
        { t: 33, div: 'great', midi: 67, dur: 1.0, vel: 0.8 },     // G4
        { t: 32, div: 'pedal', midi: 48, dur: 2.0, vel: 0.85 },    // C3

        // Bar 12: Descending sequences
        { t: 34, div: 'great', midi: 72, dur: 0.25, vel: 0.86 },   // C5
        { t: 34.25, div: 'great', midi: 71, dur: 0.25, vel: 0.84 },// B4
        { t: 34.5, div: 'great', midi: 69, dur: 0.25, vel: 0.84 }, // A4
        { t: 34.75, div: 'great', midi: 67, dur: 0.25, vel: 0.82 },// G4
        { t: 35, div: 'great', midi: 65, dur: 0.25, vel: 0.82 },   // F4
        { t: 35.25, div: 'great', midi: 64, dur: 0.25, vel: 0.8 }, // E4
        { t: 35.5, div: 'great', midi: 62, dur: 0.25, vel: 0.8 },  // D4
        { t: 35.75, div: 'great', midi: 60, dur: 0.25, vel: 0.82 },// C4
        { t: 34, div: 'pedal', midi: 55, dur: 2.0, vel: 0.82 },    // G3

        // Bar 13: Building back up
        { t: 36, div: 'great', midi: 60, dur: 0.25, vel: 0.82 },   // C4
        { t: 36.25, div: 'great', midi: 62, dur: 0.25, vel: 0.82 },// D4
        { t: 36.5, div: 'great', midi: 64, dur: 0.25, vel: 0.84 }, // E4
        { t: 36.75, div: 'great', midi: 65, dur: 0.25, vel: 0.84 },// F4
        { t: 37, div: 'great', midi: 67, dur: 0.25, vel: 0.86 },   // G4
        { t: 37.25, div: 'great', midi: 69, dur: 0.25, vel: 0.86 },// A4
        { t: 37.5, div: 'great', midi: 71, dur: 0.25, vel: 0.88 }, // B4
        { t: 37.75, div: 'great', midi: 72, dur: 0.25, vel: 0.88 },// C5
        { t: 36, div: 'pedal', midi: 48, dur: 1.0, vel: 0.83 },    // C3
        { t: 37, div: 'pedal', midi: 47, dur: 1.0, vel: 0.82 },    // B2

        // Bar 14: Climactic passage
        { t: 38, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },   // D5
        { t: 38.25, div: 'great', midi: 76, dur: 0.25, vel: 0.9 }, // E5
        { t: 38.5, div: 'great', midi: 77, dur: 0.25, vel: 0.9 },  // F5
        { t: 38.75, div: 'great', midi: 79, dur: 0.25, vel: 0.92 },// G5
        { t: 39, div: 'great', midi: 77, dur: 0.25, vel: 0.9 },    // F5
        { t: 39.25, div: 'great', midi: 76, dur: 0.25, vel: 0.88 },// E5
        { t: 39.5, div: 'great', midi: 74, dur: 0.25, vel: 0.88 }, // D5
        { t: 39.75, div: 'great', midi: 72, dur: 0.25, vel: 0.88 },// C5
        { t: 38, div: 'pedal', midi: 48, dur: 2.0, vel: 0.85 },    // C3

        // ======== Bars 15-20: Contrapuntal section ========
        // Bar 15: Motivic development, two voices
        { t: 40, div: 'great', midi: 72, dur: 0.5, vel: 0.85 },    // C5
        { t: 40.5, div: 'great', midi: 71, dur: 0.5, vel: 0.83 },  // B4
        { t: 41, div: 'great', midi: 72, dur: 0.5, vel: 0.85 },    // C5
        { t: 41.5, div: 'great', midi: 69, dur: 0.5, vel: 0.83 },  // A4
        // Inner voice
        { t: 40, div: 'great', midi: 64, dur: 0.5, vel: 0.75 },    // E4
        { t: 40.5, div: 'great', midi: 62, dur: 0.5, vel: 0.73 },  // D4
        { t: 41, div: 'great', midi: 64, dur: 0.5, vel: 0.75 },    // E4
        { t: 41.5, div: 'great', midi: 60, dur: 0.5, vel: 0.73 },  // C4
        { t: 40, div: 'pedal', midi: 48, dur: 2.0, vel: 0.82 },    // C3

        // Bar 16: Imitative entries
        { t: 42, div: 'great', midi: 67, dur: 0.5, vel: 0.83 },    // G4
        { t: 42.5, div: 'great', midi: 69, dur: 0.5, vel: 0.83 },  // A4
        { t: 43, div: 'great', midi: 71, dur: 0.5, vel: 0.85 },    // B4
        { t: 43.5, div: 'great', midi: 72, dur: 0.5, vel: 0.86 },  // C5
        { t: 42, div: 'great', midi: 60, dur: 0.5, vel: 0.73 },    // C4
        { t: 42.5, div: 'great', midi: 62, dur: 0.5, vel: 0.73 },  // D4
        { t: 43, div: 'great', midi: 64, dur: 0.5, vel: 0.75 },    // E4
        { t: 43.5, div: 'great', midi: 65, dur: 0.5, vel: 0.75 },  // F4
        { t: 42, div: 'pedal', midi: 55, dur: 2.0, vel: 0.8 },     // G3

        // Bar 17: Intensifying texture
        { t: 44, div: 'great', midi: 74, dur: 0.5, vel: 0.86 },    // D5
        { t: 44.5, div: 'great', midi: 72, dur: 0.5, vel: 0.85 },  // C5
        { t: 45, div: 'great', midi: 71, dur: 0.5, vel: 0.84 },    // B4
        { t: 45.5, div: 'great', midi: 69, dur: 0.5, vel: 0.83 },  // A4
        { t: 44, div: 'great', midi: 67, dur: 0.5, vel: 0.76 },    // G4
        { t: 44.5, div: 'great', midi: 65, dur: 0.5, vel: 0.75 },  // F4
        { t: 45, div: 'great', midi: 64, dur: 0.5, vel: 0.75 },    // E4
        { t: 45.5, div: 'great', midi: 62, dur: 0.5, vel: 0.73 },  // D4
        { t: 44, div: 'pedal', midi: 50, dur: 1.0, vel: 0.8 },     // D3
        { t: 45, div: 'pedal', midi: 52, dur: 1.0, vel: 0.8 },     // E3

        // Bar 18: Cadential approach
        { t: 46, div: 'great', midi: 67, dur: 1.0, vel: 0.85 },    // G4
        { t: 46, div: 'great', midi: 64, dur: 1.0, vel: 0.78 },    // E4
        { t: 46, div: 'great', midi: 60, dur: 1.0, vel: 0.76 },    // C4
        { t: 47, div: 'great', midi: 65, dur: 0.5, vel: 0.82 },    // F4
        { t: 47.5, div: 'great', midi: 64, dur: 0.5, vel: 0.82 },  // E4
        { t: 47, div: 'great', midi: 60, dur: 0.5, vel: 0.75 },    // C4
        { t: 47.5, div: 'great', midi: 59, dur: 0.5, vel: 0.75 },  // B3
        { t: 46, div: 'pedal', midi: 53, dur: 1.0, vel: 0.8 },     // F3
        { t: 47, div: 'pedal', midi: 55, dur: 1.0, vel: 0.82 },    // G3

        // Bar 19: G pedal point
        { t: 48, div: 'great', midi: 71, dur: 0.25, vel: 0.86 },   // B4
        { t: 48.25, div: 'great', midi: 72, dur: 0.25, vel: 0.86 },// C5
        { t: 48.5, div: 'great', midi: 74, dur: 0.25, vel: 0.88 }, // D5
        { t: 48.75, div: 'great', midi: 72, dur: 0.25, vel: 0.86 },// C5
        { t: 49, div: 'great', midi: 71, dur: 0.25, vel: 0.86 },   // B4
        { t: 49.25, div: 'great', midi: 69, dur: 0.25, vel: 0.84 },// A4
        { t: 49.5, div: 'great', midi: 67, dur: 0.25, vel: 0.84 }, // G4
        { t: 49.75, div: 'great', midi: 65, dur: 0.25, vel: 0.82 },// F4
        { t: 48, div: 'pedal', midi: 55, dur: 2.0, vel: 0.85 },    // G3 pedal point

        // Bar 20: Resolution to C
        { t: 50, div: 'great', midi: 64, dur: 0.5, vel: 0.82 },    // E4
        { t: 50.5, div: 'great', midi: 65, dur: 0.5, vel: 0.82 },  // F4
        { t: 51, div: 'great', midi: 67, dur: 0.5, vel: 0.84 },    // G4
        { t: 51.5, div: 'great', midi: 69, dur: 0.5, vel: 0.84 },  // A4
        { t: 50, div: 'great', midi: 60, dur: 2.0, vel: 0.78 },    // C4
        { t: 50, div: 'pedal', midi: 55, dur: 1.0, vel: 0.83 },    // G3
        { t: 51, div: 'pedal', midi: 48, dur: 1.0, vel: 0.85 },    // C3

        // ======== Bars 21-28: FUGUE subject and exposition ========
        // 6/8 compound meter - each beat = dotted quarter
        // Fugue subject in 6/8: C-D-E-F-E-D-C-B-C-D-E-C-G

        // Bar 21: Subject - soprano
        { t: 52, div: 'great', midi: 72, dur: 0.33, vel: 0.78 },   // C5
        { t: 52.33, div: 'great', midi: 74, dur: 0.33, vel: 0.76 },// D5
        { t: 52.66, div: 'great', midi: 76, dur: 0.33, vel: 0.78 },// E5
        { t: 53, div: 'great', midi: 77, dur: 0.33, vel: 0.78 },   // F5
        { t: 53.33, div: 'great', midi: 76, dur: 0.33, vel: 0.76 },// E5
        { t: 53.66, div: 'great', midi: 74, dur: 0.33, vel: 0.76 },// D5

        // Bar 22: Subject continues
        { t: 54, div: 'great', midi: 72, dur: 0.33, vel: 0.78 },   // C5
        { t: 54.33, div: 'great', midi: 71, dur: 0.33, vel: 0.76 },// B4
        { t: 54.66, div: 'great', midi: 72, dur: 0.33, vel: 0.78 },// C5
        { t: 55, div: 'great', midi: 74, dur: 0.33, vel: 0.78 },   // D5
        { t: 55.33, div: 'great', midi: 76, dur: 0.33, vel: 0.78 },// E5
        { t: 55.66, div: 'great', midi: 72, dur: 0.33, vel: 0.76 },// C5

        // Bar 23: Subject end + answer entry
        { t: 56, div: 'great', midi: 79, dur: 1.0, vel: 0.82 },    // G5
        // Answer at dominant - alto
        { t: 56, div: 'great', midi: 67, dur: 0.33, vel: 0.75 },   // G4
        { t: 56.33, div: 'great', midi: 69, dur: 0.33, vel: 0.73 },// A4
        { t: 56.66, div: 'great', midi: 71, dur: 0.33, vel: 0.75 },// B4
        { t: 57, div: 'great', midi: 72, dur: 0.33, vel: 0.75 },   // C5
        { t: 57.33, div: 'great', midi: 71, dur: 0.33, vel: 0.73 },// B4
        { t: 57.66, div: 'great', midi: 69, dur: 0.33, vel: 0.73 },// A4
        // Countersubject in soprano
        { t: 57, div: 'great', midi: 76, dur: 0.5, vel: 0.72 },    // E5
        { t: 57.5, div: 'great', midi: 77, dur: 0.5, vel: 0.72 },  // F5

        // Bar 24: Answer continues
        { t: 58, div: 'great', midi: 67, dur: 0.33, vel: 0.75 },   // G4
        { t: 58.33, div: 'great', midi: 66, dur: 0.33, vel: 0.73 },// F#4
        { t: 58.66, div: 'great', midi: 67, dur: 0.33, vel: 0.75 },// G4
        { t: 59, div: 'great', midi: 69, dur: 0.33, vel: 0.75 },   // A4
        { t: 59.33, div: 'great', midi: 71, dur: 0.33, vel: 0.76 },// B4
        { t: 59.66, div: 'great', midi: 67, dur: 0.33, vel: 0.75 },// G4
        // Countersubject
        { t: 58, div: 'great', midi: 76, dur: 0.33, vel: 0.72 },   // E5
        { t: 58.33, div: 'great', midi: 74, dur: 0.33, vel: 0.7 }, // D5
        { t: 58.66, div: 'great', midi: 72, dur: 0.33, vel: 0.72 },// C5
        { t: 59, div: 'great', midi: 71, dur: 0.5, vel: 0.72 },    // B4
        { t: 59.5, div: 'great', midi: 72, dur: 0.5, vel: 0.72 },  // C5

        // Bar 25: Answer resolves, tenor entry on pedal
        { t: 60, div: 'great', midi: 74, dur: 1.0, vel: 0.78 },    // D5
        { t: 60, div: 'great', midi: 67, dur: 1.0, vel: 0.72 },    // G4
        { t: 60, div: 'pedal', midi: 48, dur: 0.33, vel: 0.78 },   // C3
        { t: 60.33, div: 'pedal', midi: 50, dur: 0.33, vel: 0.76 },// D3
        { t: 60.66, div: 'pedal', midi: 52, dur: 0.33, vel: 0.78 },// E3
        { t: 61, div: 'pedal', midi: 53, dur: 0.33, vel: 0.78 },   // F3
        { t: 61.33, div: 'pedal', midi: 52, dur: 0.33, vel: 0.76 },// E3
        { t: 61.66, div: 'pedal', midi: 50, dur: 0.33, vel: 0.76 },// D3

        // Bar 26: Pedal subject continues
        { t: 62, div: 'pedal', midi: 48, dur: 0.33, vel: 0.78 },   // C3
        { t: 62.33, div: 'pedal', midi: 47, dur: 0.33, vel: 0.76 },// B2
        { t: 62.66, div: 'pedal', midi: 48, dur: 0.33, vel: 0.78 },// C3
        { t: 63, div: 'pedal', midi: 50, dur: 0.33, vel: 0.78 },   // D3
        { t: 63.33, div: 'pedal', midi: 52, dur: 0.33, vel: 0.78 },// E3
        { t: 63.66, div: 'pedal', midi: 48, dur: 0.33, vel: 0.76 },// C3
        // Upper voices - sustained
        { t: 62, div: 'great', midi: 72, dur: 1.0, vel: 0.75 },    // C5
        { t: 62, div: 'great', midi: 64, dur: 1.0, vel: 0.7 },     // E4
        { t: 63, div: 'great', midi: 71, dur: 1.0, vel: 0.75 },    // B4
        { t: 63, div: 'great', midi: 62, dur: 1.0, vel: 0.7 },     // D4

        // Bar 27: Pedal resolves
        { t: 64, div: 'pedal', midi: 55, dur: 2.0, vel: 0.82 },    // G3
        { t: 64, div: 'great', midi: 72, dur: 1.0, vel: 0.78 },    // C5
        { t: 64, div: 'great', midi: 67, dur: 1.0, vel: 0.74 },    // G4
        { t: 64, div: 'great', midi: 64, dur: 1.0, vel: 0.72 },    // E4
        { t: 65, div: 'great', midi: 71, dur: 0.5, vel: 0.76 },    // B4
        { t: 65.5, div: 'great', midi: 72, dur: 0.5, vel: 0.78 },  // C5

        // Bar 28: Grand C major cadence
        { t: 66, div: 'great', midi: 79, dur: 2.0, vel: 0.92 },    // G5
        { t: 66, div: 'great', midi: 76, dur: 2.0, vel: 0.88 },    // E5
        { t: 66, div: 'great', midi: 72, dur: 2.0, vel: 0.86 },    // C5
        { t: 66, div: 'great', midi: 67, dur: 2.0, vel: 0.84 },    // G4
        { t: 66, div: 'great', midi: 64, dur: 2.0, vel: 0.82 },    // E4
        { t: 66, div: 'great', midi: 60, dur: 2.0, vel: 0.8 },     // C4
        { t: 66, div: 'pedal', midi: 48, dur: 2.0, vel: 0.9 },     // C3
        { t: 66, div: 'pedal', midi: 36, dur: 2.0, vel: 0.88 },    // C2
    ]
};


// ============================================================
// 3. Prelude and Fugue in E-flat major "St. Anne", BWV 552
//    Majestic French-overture style opening with dotted rhythms
//    Key: Eb major (Bb, Eb, Ab). Tempo ~66
//    Grand, ceremonial - bookends of Clavierubung III
//    Trinity symbolism: 3 themes, 3 fugue subjects, 3 flats
// ============================================================

const PIECE_BACH_ST_ANNE = {
    title: 'Prelude and Fugue in E-flat major "St. Anne"',
    composer: "Johann Sebastian Bach",
    catalog: "BWV 552",
    key: "E-flat major",
    tempo: 66,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-oboe8'],
        choir: ['ch-flute8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ======== PRELUDE - French overture opening (bars 1-4) ========
        // Majestic dotted rhythms, full organ
        // Bar 1: Grand Eb major chord with dotted rhythm
        { t: 0, div: 'great', midi: 75, dur: 1.5, vel: 0.92 },     // Eb5 (dotted quarter)
        { t: 0, div: 'great', midi: 70, dur: 1.5, vel: 0.88 },     // Bb4
        { t: 0, div: 'great', midi: 67, dur: 1.5, vel: 0.86 },     // G4
        { t: 0, div: 'great', midi: 63, dur: 1.5, vel: 0.84 },     // Eb4
        { t: 0, div: 'pedal', midi: 39, dur: 1.5, vel: 0.9 },      // Eb2
        { t: 1.5, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },   // D5 (short upbeat)
        { t: 1.5, div: 'great', midi: 70, dur: 0.5, vel: 0.84 },   // Bb4
        { t: 1.5, div: 'great', midi: 65, dur: 0.5, vel: 0.82 },   // F4

        // Bar 2: Second dotted rhythm figure
        { t: 2, div: 'great', midi: 75, dur: 1.5, vel: 0.9 },      // Eb5
        { t: 2, div: 'great', midi: 72, dur: 1.5, vel: 0.86 },     // C5
        { t: 2, div: 'great', midi: 68, dur: 1.5, vel: 0.84 },     // Ab4
        { t: 2, div: 'great', midi: 63, dur: 1.5, vel: 0.82 },     // Eb4
        { t: 2, div: 'pedal', midi: 44, dur: 1.5, vel: 0.88 },     // Ab2
        { t: 3.5, div: 'great', midi: 75, dur: 0.5, vel: 0.86 },   // Eb5
        { t: 3.5, div: 'great', midi: 70, dur: 0.5, vel: 0.82 },   // Bb4
        { t: 3.5, div: 'great', midi: 67, dur: 0.5, vel: 0.8 },    // G4

        // Bar 3: Rising dotted figure
        { t: 4, div: 'great', midi: 77, dur: 1.5, vel: 0.92 },     // F5
        { t: 4, div: 'great', midi: 74, dur: 1.5, vel: 0.88 },     // D5
        { t: 4, div: 'great', midi: 70, dur: 1.5, vel: 0.86 },     // Bb4
        { t: 4, div: 'great', midi: 65, dur: 1.5, vel: 0.84 },     // F4
        { t: 4, div: 'pedal', midi: 46, dur: 1.5, vel: 0.88 },     // Bb2
        { t: 5.5, div: 'great', midi: 75, dur: 0.5, vel: 0.88 },   // Eb5
        { t: 5.5, div: 'great', midi: 72, dur: 0.5, vel: 0.84 },   // C5

        // Bar 4: Cadence to Bb
        { t: 6, div: 'great', midi: 74, dur: 1.5, vel: 0.9 },      // D5
        { t: 6, div: 'great', midi: 70, dur: 1.5, vel: 0.86 },     // Bb4
        { t: 6, div: 'great', midi: 65, dur: 1.5, vel: 0.84 },     // F4
        { t: 6, div: 'pedal', midi: 46, dur: 2.0, vel: 0.88 },     // Bb2
        { t: 7.5, div: 'great', midi: 72, dur: 0.5, vel: 0.86 },   // C5
        { t: 7.5, div: 'great', midi: 68, dur: 0.5, vel: 0.82 },   // Ab4

        // ======== Bars 5-8: Continuation of first theme ========
        // Bar 5: Return of dotted rhythm in Eb
        { t: 8, div: 'great', midi: 70, dur: 1.5, vel: 0.9 },      // Bb4
        { t: 8, div: 'great', midi: 67, dur: 1.5, vel: 0.86 },     // G4
        { t: 8, div: 'great', midi: 63, dur: 1.5, vel: 0.84 },     // Eb4
        { t: 8, div: 'pedal', midi: 39, dur: 2.0, vel: 0.88 },     // Eb2
        { t: 9.5, div: 'great', midi: 68, dur: 0.5, vel: 0.86 },   // Ab4
        { t: 9.5, div: 'great', midi: 63, dur: 0.5, vel: 0.82 },   // Eb4

        // Bar 6: Scalar passage
        { t: 10, div: 'great', midi: 67, dur: 0.25, vel: 0.86 },   // G4
        { t: 10.25, div: 'great', midi: 68, dur: 0.25, vel: 0.84 },// Ab4
        { t: 10.5, div: 'great', midi: 70, dur: 0.25, vel: 0.86 }, // Bb4
        { t: 10.75, div: 'great', midi: 72, dur: 0.25, vel: 0.88 },// C5
        { t: 11, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },   // D5
        { t: 11.25, div: 'great', midi: 75, dur: 0.25, vel: 0.9 }, // Eb5
        { t: 11.5, div: 'great', midi: 77, dur: 0.25, vel: 0.9 },  // F5
        { t: 11.75, div: 'great', midi: 75, dur: 0.25, vel: 0.88 },// Eb5
        { t: 10, div: 'pedal', midi: 43, dur: 1.0, vel: 0.85 },    // G2
        { t: 11, div: 'pedal', midi: 44, dur: 1.0, vel: 0.85 },    // Ab2

        // Bar 7: Sustained chords
        { t: 12, div: 'great', midi: 74, dur: 2.0, vel: 0.88 },    // D5
        { t: 12, div: 'great', midi: 70, dur: 2.0, vel: 0.84 },    // Bb4
        { t: 12, div: 'great', midi: 65, dur: 2.0, vel: 0.82 },    // F4
        { t: 12, div: 'pedal', midi: 46, dur: 2.0, vel: 0.86 },    // Bb2

        // Bar 8: Half cadence
        { t: 14, div: 'great', midi: 75, dur: 1.5, vel: 0.9 },     // Eb5
        { t: 14, div: 'great', midi: 70, dur: 1.5, vel: 0.86 },    // Bb4
        { t: 14, div: 'great', midi: 67, dur: 1.5, vel: 0.84 },    // G4
        { t: 14, div: 'pedal', midi: 39, dur: 2.0, vel: 0.88 },    // Eb2
        { t: 15.5, div: 'great', midi: 74, dur: 0.5, vel: 0.86 },  // D5

        // ======== Bars 9-14: Second theme - galant, lighter ========
        // Quieter, on Swell - representing the Son
        // Bar 9: Graceful melody
        { t: 16, div: 'swell', midi: 75, dur: 1.0, vel: 0.68 },    // Eb5
        { t: 17, div: 'swell', midi: 74, dur: 0.5, vel: 0.65 },    // D5
        { t: 17.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.65 },  // C5
        // Accompanying voice
        { t: 16, div: 'swell', midi: 67, dur: 1.0, vel: 0.58 },    // G4
        { t: 17, div: 'swell', midi: 65, dur: 1.0, vel: 0.56 },    // F4

        // Bar 10: Echo effect
        { t: 18, div: 'swell', midi: 70, dur: 1.0, vel: 0.65 },    // Bb4
        { t: 19, div: 'swell', midi: 70, dur: 0.5, vel: 0.55 },    // Bb4 echo
        { t: 19.5, div: 'swell', midi: 68, dur: 0.5, vel: 0.55 },  // Ab4 echo
        { t: 18, div: 'swell', midi: 63, dur: 1.0, vel: 0.55 },    // Eb4
        { t: 19, div: 'swell', midi: 63, dur: 1.0, vel: 0.48 },    // Eb4

        // Bar 11: Continuing galant theme
        { t: 20, div: 'swell', midi: 67, dur: 0.5, vel: 0.65 },    // G4
        { t: 20.5, div: 'swell', midi: 68, dur: 0.5, vel: 0.65 },  // Ab4
        { t: 21, div: 'swell', midi: 70, dur: 0.5, vel: 0.68 },    // Bb4
        { t: 21.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.68 },  // C5
        { t: 20, div: 'swell', midi: 63, dur: 2.0, vel: 0.55 },    // Eb4

        // Bar 12: Cadential figure
        { t: 22, div: 'swell', midi: 74, dur: 1.0, vel: 0.7 },     // D5
        { t: 23, div: 'swell', midi: 72, dur: 0.5, vel: 0.65 },    // C5
        { t: 23.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.68 },  // Bb4
        { t: 22, div: 'swell', midi: 65, dur: 1.0, vel: 0.58 },    // F4
        { t: 23, div: 'swell', midi: 63, dur: 1.0, vel: 0.56 },    // Eb4

        // ======== Bars 13-16: Third theme - flowing sixteenths (Holy Spirit) ========
        // Bar 13: Sixteenth-note melody returns to Great
        { t: 24, div: 'great', midi: 70, dur: 0.25, vel: 0.82 },   // Bb4
        { t: 24.25, div: 'great', midi: 72, dur: 0.25, vel: 0.82 },// C5
        { t: 24.5, div: 'great', midi: 74, dur: 0.25, vel: 0.84 }, // D5
        { t: 24.75, div: 'great', midi: 75, dur: 0.25, vel: 0.84 },// Eb5
        { t: 25, div: 'great', midi: 74, dur: 0.25, vel: 0.84 },   // D5
        { t: 25.25, div: 'great', midi: 72, dur: 0.25, vel: 0.82 },// C5
        { t: 25.5, div: 'great', midi: 70, dur: 0.25, vel: 0.82 }, // Bb4
        { t: 25.75, div: 'great', midi: 68, dur: 0.25, vel: 0.8 }, // Ab4
        { t: 24, div: 'pedal', midi: 46, dur: 2.0, vel: 0.82 },    // Bb2

        // Bar 14: Continuing sixteenth flow
        { t: 26, div: 'great', midi: 67, dur: 0.25, vel: 0.82 },   // G4
        { t: 26.25, div: 'great', midi: 68, dur: 0.25, vel: 0.82 },// Ab4
        { t: 26.5, div: 'great', midi: 70, dur: 0.25, vel: 0.84 }, // Bb4
        { t: 26.75, div: 'great', midi: 72, dur: 0.25, vel: 0.84 },// C5
        { t: 27, div: 'great', midi: 74, dur: 0.25, vel: 0.86 },   // D5
        { t: 27.25, div: 'great', midi: 75, dur: 0.25, vel: 0.86 },// Eb5
        { t: 27.5, div: 'great', midi: 77, dur: 0.25, vel: 0.88 }, // F5
        { t: 27.75, div: 'great', midi: 75, dur: 0.25, vel: 0.86 },// Eb5
        { t: 26, div: 'pedal', midi: 39, dur: 2.0, vel: 0.84 },    // Eb2

        // Bar 15: Culminating passage
        { t: 28, div: 'great', midi: 74, dur: 0.25, vel: 0.86 },   // D5
        { t: 28.25, div: 'great', midi: 72, dur: 0.25, vel: 0.84 },// C5
        { t: 28.5, div: 'great', midi: 70, dur: 0.25, vel: 0.84 }, // Bb4
        { t: 28.75, div: 'great', midi: 68, dur: 0.25, vel: 0.82 },// Ab4
        { t: 29, div: 'great', midi: 67, dur: 0.25, vel: 0.82 },   // G4
        { t: 29.25, div: 'great', midi: 65, dur: 0.25, vel: 0.8 }, // F4
        { t: 29.5, div: 'great', midi: 63, dur: 0.25, vel: 0.8 },  // Eb4
        { t: 29.75, div: 'great', midi: 62, dur: 0.25, vel: 0.78 },// D4
        { t: 28, div: 'pedal', midi: 46, dur: 1.0, vel: 0.82 },    // Bb2
        { t: 29, div: 'pedal', midi: 44, dur: 1.0, vel: 0.82 },    // Ab2

        // Bar 16: Return of first theme - dotted rhythms, full organ
        { t: 30, div: 'great', midi: 75, dur: 1.5, vel: 0.92 },    // Eb5
        { t: 30, div: 'great', midi: 70, dur: 1.5, vel: 0.88 },    // Bb4
        { t: 30, div: 'great', midi: 67, dur: 1.5, vel: 0.86 },    // G4
        { t: 30, div: 'great', midi: 63, dur: 1.5, vel: 0.84 },    // Eb4
        { t: 30, div: 'pedal', midi: 39, dur: 1.5, vel: 0.9 },     // Eb2
        { t: 31.5, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },  // D5

        // ======== Bars 17-22: FUGUE - "St. Anne" subject ========
        // The famous subject similar to Croft's hymn tune
        // Subject: Eb-Bb-Eb-F-G-Ab-G-F-Eb (stately, in 4/2)

        // Bar 17: Fugue subject entry 1 - Alto
        { t: 32, div: 'great', midi: 63, dur: 1.0, vel: 0.78 },    // Eb4
        { t: 33, div: 'great', midi: 70, dur: 1.0, vel: 0.78 },    // Bb4
        { t: 34, div: 'great', midi: 75, dur: 1.0, vel: 0.8 },     // Eb5
        { t: 35, div: 'great', midi: 77, dur: 1.0, vel: 0.8 },     // F5

        // Bar 18: Subject continues
        { t: 36, div: 'great', midi: 79, dur: 1.0, vel: 0.82 },    // G5
        { t: 37, div: 'great', midi: 80, dur: 1.0, vel: 0.82 },    // Ab5
        { t: 38, div: 'great', midi: 79, dur: 1.0, vel: 0.8 },     // G5
        { t: 39, div: 'great', midi: 77, dur: 1.0, vel: 0.78 },    // F5

        // Bar 19: Subject resolves, Answer entry - Soprano
        { t: 40, div: 'great', midi: 75, dur: 2.0, vel: 0.8 },     // Eb5
        // Answer at dominant Bb
        { t: 40, div: 'great', midi: 70, dur: 1.0, vel: 0.78 },    // Bb4
        { t: 41, div: 'great', midi: 77, dur: 1.0, vel: 0.78 },    // F5
        // Countersubject in alto
        { t: 40, div: 'swell', midi: 63, dur: 0.5, vel: 0.65 },    // Eb4
        { t: 40.5, div: 'swell', midi: 65, dur: 0.5, vel: 0.65 },  // F4
        { t: 41, div: 'swell', midi: 67, dur: 0.5, vel: 0.68 },    // G4
        { t: 41.5, div: 'swell', midi: 68, dur: 0.5, vel: 0.65 },  // Ab4

        // Bar 20: Answer continues
        { t: 42, div: 'great', midi: 82, dur: 1.0, vel: 0.82 },    // Bb5
        { t: 43, div: 'great', midi: 84, dur: 1.0, vel: 0.82 },    // C6 (midi 84)
        { t: 42, div: 'swell', midi: 70, dur: 1.0, vel: 0.68 },    // Bb4
        { t: 43, div: 'swell', midi: 72, dur: 1.0, vel: 0.65 },    // C5

        // Bar 21: Answer resolves
        { t: 44, div: 'great', midi: 82, dur: 1.0, vel: 0.8 },     // Bb5
        { t: 45, div: 'great', midi: 80, dur: 1.0, vel: 0.78 },    // Ab5
        { t: 44, div: 'swell', midi: 74, dur: 1.0, vel: 0.68 },    // D5
        { t: 45, div: 'swell', midi: 72, dur: 1.0, vel: 0.65 },    // C5

        // Bar 22: Tenor/Pedal entry
        { t: 46, div: 'great', midi: 77, dur: 2.0, vel: 0.8 },     // F5
        { t: 46, div: 'swell', midi: 70, dur: 2.0, vel: 0.68 },    // Bb4
        // Subject in pedal
        { t: 46, div: 'pedal', midi: 39, dur: 1.0, vel: 0.82 },    // Eb2
        { t: 47, div: 'pedal', midi: 46, dur: 1.0, vel: 0.82 },    // Bb2

        // Bar 23: Pedal subject continues
        { t: 48, div: 'pedal', midi: 51, dur: 1.0, vel: 0.84 },    // Eb3
        { t: 49, div: 'pedal', midi: 53, dur: 1.0, vel: 0.84 },    // F3
        { t: 48, div: 'great', midi: 75, dur: 1.0, vel: 0.78 },    // Eb5
        { t: 48, div: 'great', midi: 70, dur: 1.0, vel: 0.74 },    // Bb4
        { t: 49, div: 'great', midi: 74, dur: 1.0, vel: 0.76 },    // D5
        { t: 49, div: 'great', midi: 70, dur: 1.0, vel: 0.72 },    // Bb4

        // Bar 24: Pedal subject concludes
        { t: 50, div: 'pedal', midi: 55, dur: 1.0, vel: 0.86 },    // G3
        { t: 51, div: 'pedal', midi: 56, dur: 1.0, vel: 0.84 },    // Ab3
        { t: 50, div: 'great', midi: 75, dur: 1.0, vel: 0.8 },     // Eb5
        { t: 50, div: 'great', midi: 67, dur: 1.0, vel: 0.76 },    // G4
        { t: 51, div: 'great', midi: 72, dur: 1.0, vel: 0.78 },    // C5
        { t: 51, div: 'great', midi: 68, dur: 1.0, vel: 0.74 },    // Ab4

        // Bar 25: Pedal resolves
        { t: 52, div: 'pedal', midi: 55, dur: 1.0, vel: 0.84 },    // G3
        { t: 53, div: 'pedal', midi: 53, dur: 1.0, vel: 0.82 },    // F3

        // Bar 26: Grand final cadence - Eb major, full organ
        { t: 54, div: 'pedal', midi: 39, dur: 2.0, vel: 0.92 },    // Eb2
        { t: 54, div: 'great', midi: 75, dur: 2.0, vel: 0.92 },    // Eb5
        { t: 54, div: 'great', midi: 70, dur: 2.0, vel: 0.9 },     // Bb4
        { t: 54, div: 'great', midi: 67, dur: 2.0, vel: 0.88 },    // G4
        { t: 54, div: 'great', midi: 63, dur: 2.0, vel: 0.86 },    // Eb4
        { t: 54, div: 'swell', midi: 58, dur: 2.0, vel: 0.78 },    // Bb3
        { t: 54, div: 'swell', midi: 55, dur: 2.0, vel: 0.76 },    // G3
        { t: 54, div: 'pedal', midi: 27, dur: 2.0, vel: 0.9 },     // Eb1
    ]
};


// ============================================================
// 4. In dulci jubilo, BWV 729
//    Christmas chorale prelude, joyful dancing character
//    Key: A major (F#, C#, G#). Compound meter (triplet feel)
//    Chorale melody in long notes with flowing accompaniment
//    Traditional melody: A-A-B-C#-D-C#-B-A (first phrase)
// ============================================================

const PIECE_BACH_DULCI_JUBILO = {
    title: "In dulci jubilo",
    composer: "Johann Sebastian Bach",
    catalog: "BWV 729",
    key: "A major",
    tempo: 84,
    registration: {
        great: ['gt-principal8', 'gt-octave4'],
        swell: ['sw-gedeckt8', 'sw-flute4', 'sw-tremulant'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-octave8']
    },
    events: [
        // ======== Chorale phrase 1: "In dulci jubilo" ========
        // Compound meter: each beat subdivided in 3
        // Chorale melody on Great in long notes, accompaniment on Swell

        // Bar 1: Chorale note A4 held, accompaniment begins
        { t: 0, div: 'great', midi: 69, dur: 3.0, vel: 0.8 },      // A4 (chorale)
        { t: 0, div: 'swell', midi: 64, dur: 0.33, vel: 0.6 },     // E4
        { t: 0.33, div: 'swell', midi: 61, dur: 0.33, vel: 0.58 }, // C#4
        { t: 0.66, div: 'swell', midi: 64, dur: 0.33, vel: 0.6 },  // E4
        { t: 1, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },     // F#4
        { t: 1.33, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 }, // E4
        { t: 1.66, div: 'swell', midi: 61, dur: 0.33, vel: 0.58 }, // C#4
        { t: 2, div: 'swell', midi: 64, dur: 0.33, vel: 0.6 },     // E4
        { t: 2.33, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },  // F#4
        { t: 2.66, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 }, // E4
        { t: 0, div: 'pedal', midi: 45, dur: 3.0, vel: 0.75 },     // A2

        // Bar 2: Chorale A4 continues, then B4
        { t: 3, div: 'great', midi: 69, dur: 1.5, vel: 0.78 },     // A4
        { t: 4.5, div: 'great', midi: 71, dur: 1.5, vel: 0.8 },    // B4
        { t: 3, div: 'swell', midi: 61, dur: 0.33, vel: 0.6 },     // C#4
        { t: 3.33, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 }, // E4
        { t: 3.66, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },  // F#4
        { t: 4, div: 'swell', midi: 64, dur: 0.33, vel: 0.6 },     // E4
        { t: 4.33, div: 'swell', midi: 66, dur: 0.33, vel: 0.58 }, // F#4
        { t: 4.66, div: 'swell', midi: 68, dur: 0.33, vel: 0.6 },  // G#4
        { t: 5, div: 'swell', midi: 66, dur: 0.33, vel: 0.58 },    // F#4
        { t: 5.33, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 }, // E4
        { t: 5.66, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },  // F#4
        { t: 3, div: 'pedal', midi: 45, dur: 1.5, vel: 0.73 },     // A2
        { t: 4.5, div: 'pedal', midi: 47, dur: 1.5, vel: 0.75 },   // B2

        // Bar 3: C#5 - D5 (peak of first phrase)
        { t: 6, div: 'great', midi: 73, dur: 1.5, vel: 0.82 },     // C#5
        { t: 7.5, div: 'great', midi: 74, dur: 1.5, vel: 0.84 },   // D5
        { t: 6, div: 'swell', midi: 64, dur: 0.33, vel: 0.6 },     // E4
        { t: 6.33, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },  // F#4
        { t: 6.66, div: 'swell', midi: 69, dur: 0.33, vel: 0.62 }, // A4
        { t: 7, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },     // F#4
        { t: 7.33, div: 'swell', midi: 69, dur: 0.33, vel: 0.62 }, // A4
        { t: 7.66, div: 'swell', midi: 71, dur: 0.33, vel: 0.62 }, // B4
        { t: 8, div: 'swell', midi: 69, dur: 0.33, vel: 0.6 },     // A4
        { t: 8.33, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },  // F#4
        { t: 8.66, div: 'swell', midi: 69, dur: 0.33, vel: 0.6 },  // A4
        { t: 6, div: 'pedal', midi: 49, dur: 1.5, vel: 0.76 },     // C#3
        { t: 7.5, div: 'pedal', midi: 50, dur: 1.5, vel: 0.78 },   // D3

        // Bar 4: C#5 - B4 - A4 (descent)
        { t: 9, div: 'great', midi: 73, dur: 1.0, vel: 0.82 },     // C#5
        { t: 10, div: 'great', midi: 71, dur: 1.0, vel: 0.8 },     // B4
        { t: 11, div: 'great', midi: 69, dur: 1.0, vel: 0.78 },    // A4
        { t: 9, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },     // F#4
        { t: 9.33, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 }, // E4
        { t: 9.66, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },  // F#4
        { t: 10, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 },   // E4
        { t: 10.33, div: 'swell', midi: 62, dur: 0.33, vel: 0.58 },// D4
        { t: 10.66, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 },// E4
        { t: 11, div: 'swell', midi: 61, dur: 0.33, vel: 0.58 },   // C#4
        { t: 11.33, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 },// E4
        { t: 11.66, div: 'swell', midi: 61, dur: 0.33, vel: 0.56 },// C#4
        { t: 9, div: 'pedal', midi: 49, dur: 1.0, vel: 0.75 },     // C#3
        { t: 10, div: 'pedal', midi: 47, dur: 1.0, vel: 0.73 },    // B2
        { t: 11, div: 'pedal', midi: 45, dur: 1.0, vel: 0.75 },    // A2

        // ======== Chorale phrase 2: "nun singet und seid froh" ========
        // Bar 5: A4 held
        { t: 12, div: 'great', midi: 69, dur: 3.0, vel: 0.8 },     // A4
        { t: 12, div: 'swell', midi: 64, dur: 0.33, vel: 0.6 },    // E4
        { t: 12.33, div: 'swell', midi: 61, dur: 0.33, vel: 0.58 },// C#4
        { t: 12.66, div: 'swell', midi: 64, dur: 0.33, vel: 0.6 }, // E4
        { t: 13, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },    // F#4
        { t: 13.33, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 },// E4
        { t: 13.66, div: 'swell', midi: 61, dur: 0.33, vel: 0.58 },// C#4
        { t: 14, div: 'swell', midi: 64, dur: 0.33, vel: 0.6 },    // E4
        { t: 14.33, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 }, // F#4
        { t: 14.66, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 },// E4
        { t: 12, div: 'pedal', midi: 45, dur: 3.0, vel: 0.75 },    // A2

        // Bar 6: B4 - C#5
        { t: 15, div: 'great', midi: 71, dur: 1.5, vel: 0.8 },     // B4
        { t: 16.5, div: 'great', midi: 73, dur: 1.5, vel: 0.82 },  // C#5
        { t: 15, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },    // F#4
        { t: 15.33, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 },// E4
        { t: 15.66, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 }, // F#4
        { t: 16, div: 'swell', midi: 68, dur: 0.33, vel: 0.6 },    // G#4
        { t: 16.33, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 }, // F#4
        { t: 16.66, div: 'swell', midi: 69, dur: 0.33, vel: 0.62 },// A4
        { t: 17, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },    // F#4
        { t: 17.33, div: 'swell', midi: 69, dur: 0.33, vel: 0.6 }, // A4
        { t: 17.66, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 }, // F#4
        { t: 15, div: 'pedal', midi: 47, dur: 1.5, vel: 0.75 },    // B2
        { t: 16.5, div: 'pedal', midi: 49, dur: 1.5, vel: 0.76 },  // C#3

        // Bar 7: D5 - C#5 - B4
        { t: 18, div: 'great', midi: 74, dur: 1.0, vel: 0.84 },    // D5
        { t: 19, div: 'great', midi: 73, dur: 1.0, vel: 0.82 },    // C#5
        { t: 20, div: 'great', midi: 71, dur: 1.0, vel: 0.8 },     // B4
        { t: 18, div: 'swell', midi: 69, dur: 0.33, vel: 0.62 },   // A4
        { t: 18.33, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 }, // F#4
        { t: 18.66, div: 'swell', midi: 69, dur: 0.33, vel: 0.6 }, // A4
        { t: 19, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },    // F#4
        { t: 19.33, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 },// E4
        { t: 19.66, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 }, // F#4
        { t: 20, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 },   // E4
        { t: 20.33, div: 'swell', midi: 62, dur: 0.33, vel: 0.58 },// D4
        { t: 20.66, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 },// E4
        { t: 18, div: 'pedal', midi: 50, dur: 1.0, vel: 0.78 },    // D3
        { t: 19, div: 'pedal', midi: 49, dur: 1.0, vel: 0.76 },    // C#3
        { t: 20, div: 'pedal', midi: 47, dur: 1.0, vel: 0.75 },    // B2

        // Bar 8: A4 - resolution
        { t: 21, div: 'great', midi: 69, dur: 3.0, vel: 0.8 },     // A4
        { t: 21, div: 'swell', midi: 61, dur: 0.33, vel: 0.58 },   // C#4
        { t: 21.33, div: 'swell', midi: 64, dur: 0.33, vel: 0.6 }, // E4
        { t: 21.66, div: 'swell', midi: 61, dur: 0.33, vel: 0.58 },// C#4
        { t: 22, div: 'swell', midi: 64, dur: 0.33, vel: 0.6 },    // E4
        { t: 22.33, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 }, // F#4
        { t: 22.66, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 },// E4
        { t: 23, div: 'swell', midi: 61, dur: 0.33, vel: 0.58 },   // C#4
        { t: 23.33, div: 'swell', midi: 64, dur: 0.33, vel: 0.6 }, // E4
        { t: 23.66, div: 'swell', midi: 61, dur: 0.33, vel: 0.56 },// C#4
        { t: 21, div: 'pedal', midi: 45, dur: 3.0, vel: 0.76 },    // A2

        // ======== Chorale phrase 3: "Unsres Herzens Wonne" ========
        // Bar 9: E5 held (higher register)
        { t: 24, div: 'great', midi: 76, dur: 3.0, vel: 0.82 },    // E5
        { t: 24, div: 'swell', midi: 69, dur: 0.33, vel: 0.62 },   // A4
        { t: 24.33, div: 'swell', midi: 68, dur: 0.33, vel: 0.6 }, // G#4
        { t: 24.66, div: 'swell', midi: 69, dur: 0.33, vel: 0.62 },// A4
        { t: 25, div: 'swell', midi: 71, dur: 0.33, vel: 0.62 },   // B4
        { t: 25.33, div: 'swell', midi: 69, dur: 0.33, vel: 0.6 }, // A4
        { t: 25.66, div: 'swell', midi: 68, dur: 0.33, vel: 0.6 }, // G#4
        { t: 26, div: 'swell', midi: 69, dur: 0.33, vel: 0.62 },   // A4
        { t: 26.33, div: 'swell', midi: 71, dur: 0.33, vel: 0.62 },// B4
        { t: 26.66, div: 'swell', midi: 69, dur: 0.33, vel: 0.6 }, // A4
        { t: 24, div: 'pedal', midi: 52, dur: 3.0, vel: 0.78 },    // E3

        // Bar 10: E5 - D5
        { t: 27, div: 'great', midi: 76, dur: 1.5, vel: 0.8 },     // E5
        { t: 28.5, div: 'great', midi: 74, dur: 1.5, vel: 0.82 },  // D5
        { t: 27, div: 'swell', midi: 68, dur: 0.33, vel: 0.6 },    // G#4
        { t: 27.33, div: 'swell', midi: 69, dur: 0.33, vel: 0.62 },// A4
        { t: 27.66, div: 'swell', midi: 71, dur: 0.33, vel: 0.62 },// B4
        { t: 28, div: 'swell', midi: 69, dur: 0.33, vel: 0.6 },    // A4
        { t: 28.33, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 }, // F#4
        { t: 28.66, div: 'swell', midi: 69, dur: 0.33, vel: 0.62 },// A4
        { t: 29, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },    // F#4
        { t: 29.33, div: 'swell', midi: 69, dur: 0.33, vel: 0.6 }, // A4
        { t: 29.66, div: 'swell', midi: 71, dur: 0.33, vel: 0.62 },// B4
        { t: 27, div: 'pedal', midi: 52, dur: 1.5, vel: 0.76 },    // E3
        { t: 28.5, div: 'pedal', midi: 50, dur: 1.5, vel: 0.78 },  // D3

        // Bar 11: C#5 - B4 - A4
        { t: 30, div: 'great', midi: 73, dur: 1.0, vel: 0.82 },    // C#5
        { t: 31, div: 'great', midi: 71, dur: 1.0, vel: 0.8 },     // B4
        { t: 32, div: 'great', midi: 69, dur: 1.0, vel: 0.78 },    // A4
        { t: 30, div: 'swell', midi: 69, dur: 0.33, vel: 0.62 },   // A4
        { t: 30.33, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 }, // F#4
        { t: 30.66, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 },// E4
        { t: 31, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },    // F#4
        { t: 31.33, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 },// E4
        { t: 31.66, div: 'swell', midi: 62, dur: 0.33, vel: 0.58 },// D4
        { t: 32, div: 'swell', midi: 61, dur: 0.33, vel: 0.58 },   // C#4
        { t: 32.33, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 },// E4
        { t: 32.66, div: 'swell', midi: 61, dur: 0.33, vel: 0.56 },// C#4
        { t: 30, div: 'pedal', midi: 49, dur: 1.0, vel: 0.76 },    // C#3
        { t: 31, div: 'pedal', midi: 47, dur: 1.0, vel: 0.75 },    // B2
        { t: 32, div: 'pedal', midi: 45, dur: 1.0, vel: 0.76 },    // A2

        // ======== Chorale phrase 4: "liegt in praesepio" ========
        // Bar 12: F#5 held
        { t: 33, div: 'great', midi: 78, dur: 3.0, vel: 0.84 },    // F#5
        { t: 33, div: 'swell', midi: 69, dur: 0.33, vel: 0.62 },   // A4
        { t: 33.33, div: 'swell', midi: 71, dur: 0.33, vel: 0.62 },// B4
        { t: 33.66, div: 'swell', midi: 69, dur: 0.33, vel: 0.6 }, // A4
        { t: 34, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },    // F#4
        { t: 34.33, div: 'swell', midi: 69, dur: 0.33, vel: 0.62 },// A4
        { t: 34.66, div: 'swell', midi: 71, dur: 0.33, vel: 0.62 },// B4
        { t: 35, div: 'swell', midi: 73, dur: 0.33, vel: 0.64 },   // C#5
        { t: 35.33, div: 'swell', midi: 71, dur: 0.33, vel: 0.62 },// B4
        { t: 35.66, div: 'swell', midi: 69, dur: 0.33, vel: 0.6 }, // A4
        { t: 33, div: 'pedal', midi: 42, dur: 3.0, vel: 0.76 },    // F#2

        // Bar 13: E5 - D5
        { t: 36, div: 'great', midi: 76, dur: 1.5, vel: 0.82 },    // E5
        { t: 37.5, div: 'great', midi: 74, dur: 1.5, vel: 0.82 },  // D5
        { t: 36, div: 'swell', midi: 68, dur: 0.33, vel: 0.6 },    // G#4
        { t: 36.33, div: 'swell', midi: 69, dur: 0.33, vel: 0.62 },// A4
        { t: 36.66, div: 'swell', midi: 71, dur: 0.33, vel: 0.62 },// B4
        { t: 37, div: 'swell', midi: 69, dur: 0.33, vel: 0.6 },    // A4
        { t: 37.33, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 }, // F#4
        { t: 37.66, div: 'swell', midi: 69, dur: 0.33, vel: 0.62 },// A4
        { t: 38, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 },    // F#4
        { t: 38.33, div: 'swell', midi: 69, dur: 0.33, vel: 0.6 }, // A4
        { t: 38.66, div: 'swell', midi: 66, dur: 0.33, vel: 0.58 },// F#4
        { t: 36, div: 'pedal', midi: 52, dur: 1.5, vel: 0.76 },    // E3
        { t: 37.5, div: 'pedal', midi: 50, dur: 1.5, vel: 0.78 },  // D3

        // Bar 14: C#5 - B4 - A4 final cadence
        { t: 39, div: 'great', midi: 73, dur: 1.0, vel: 0.82 },    // C#5
        { t: 40, div: 'great', midi: 71, dur: 1.0, vel: 0.8 },     // B4
        { t: 41, div: 'great', midi: 69, dur: 2.0, vel: 0.82 },    // A4 (final)
        { t: 39, div: 'swell', midi: 64, dur: 0.33, vel: 0.6 },    // E4
        { t: 39.33, div: 'swell', midi: 66, dur: 0.33, vel: 0.6 }, // F#4
        { t: 39.66, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 },// E4
        { t: 40, div: 'swell', midi: 62, dur: 0.33, vel: 0.58 },   // D4
        { t: 40.33, div: 'swell', midi: 64, dur: 0.33, vel: 0.58 },// E4
        { t: 40.66, div: 'swell', midi: 62, dur: 0.33, vel: 0.56 },// D4
        // Final chord
        { t: 41, div: 'swell', midi: 61, dur: 2.0, vel: 0.62 },    // C#4
        { t: 41, div: 'swell', midi: 64, dur: 2.0, vel: 0.6 },     // E4
        { t: 39, div: 'pedal', midi: 49, dur: 1.0, vel: 0.76 },    // C#3
        { t: 40, div: 'pedal', midi: 47, dur: 1.0, vel: 0.75 },    // B2
        { t: 41, div: 'pedal', midi: 45, dur: 2.0, vel: 0.78 },    // A2
    ]
};


// ============================================================
// 5. Komm, susser Tod, BWV 478
//    Slow, contemplative chorale harmonization
//    Key: Eb major (Bb, Eb, Ab). Tempo ~52
//    From Schemelli Gesangbuch - gentle, devotional character
//    SATB texture, organ arrangement
// ============================================================

const PIECE_BACH_KOMM_SUSSER = {
    title: "Komm, susser Tod",
    composer: "Johann Sebastian Bach",
    catalog: "BWV 478",
    key: "E-flat major",
    tempo: 52,
    registration: {
        great: ['gt-principal8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-tremulant'],
        choir: ['ch-flute8'],
        pedal: ['pd-subbass32', 'pd-principal16']
    },
    events: [
        // ======== Phrase 1: "Komm, susser Tod" ========
        // Gentle SATB chorale, slow and sustained
        // Soprano
        { t: 0, div: 'swell', midi: 75, dur: 2.0, vel: 0.65 },     // Eb5
        { t: 2, div: 'swell', midi: 74, dur: 1.0, vel: 0.62 },     // D5
        { t: 3, div: 'swell', midi: 72, dur: 1.0, vel: 0.62 },     // C5
        { t: 4, div: 'swell', midi: 70, dur: 2.0, vel: 0.65 },     // Bb4
        // Alto
        { t: 0, div: 'swell', midi: 67, dur: 2.0, vel: 0.55 },     // G4
        { t: 2, div: 'swell', midi: 65, dur: 1.0, vel: 0.52 },     // F4
        { t: 3, div: 'swell', midi: 63, dur: 1.0, vel: 0.52 },     // Eb4
        { t: 4, div: 'swell', midi: 65, dur: 2.0, vel: 0.55 },     // F4
        // Tenor
        { t: 0, div: 'great', midi: 58, dur: 2.0, vel: 0.55 },     // Bb3
        { t: 2, div: 'great', midi: 58, dur: 1.0, vel: 0.52 },     // Bb3
        { t: 3, div: 'great', midi: 56, dur: 1.0, vel: 0.52 },     // Ab3
        { t: 4, div: 'great', midi: 58, dur: 2.0, vel: 0.55 },     // Bb3
        // Bass (pedal)
        { t: 0, div: 'pedal', midi: 39, dur: 2.0, vel: 0.68 },     // Eb2
        { t: 2, div: 'pedal', midi: 46, dur: 1.0, vel: 0.65 },     // Bb2
        { t: 3, div: 'pedal', midi: 44, dur: 1.0, vel: 0.65 },     // Ab2
        { t: 4, div: 'pedal', midi: 46, dur: 2.0, vel: 0.68 },     // Bb2

        // ======== Phrase 2: "komm sel'ge Ruh" ========
        // Soprano
        { t: 6, div: 'swell', midi: 72, dur: 2.0, vel: 0.65 },     // C5
        { t: 8, div: 'swell', midi: 70, dur: 1.0, vel: 0.62 },     // Bb4
        { t: 9, div: 'swell', midi: 68, dur: 1.0, vel: 0.62 },     // Ab4
        { t: 10, div: 'swell', midi: 67, dur: 2.0, vel: 0.65 },    // G4
        // Alto
        { t: 6, div: 'swell', midi: 63, dur: 2.0, vel: 0.55 },     // Eb4
        { t: 8, div: 'swell', midi: 63, dur: 1.0, vel: 0.52 },     // Eb4
        { t: 9, div: 'swell', midi: 60, dur: 1.0, vel: 0.52 },     // C4
        { t: 10, div: 'swell', midi: 63, dur: 2.0, vel: 0.55 },    // Eb4
        // Tenor
        { t: 6, div: 'great', midi: 56, dur: 2.0, vel: 0.55 },     // Ab3
        { t: 8, div: 'great', midi: 55, dur: 1.0, vel: 0.52 },     // G3
        { t: 9, div: 'great', midi: 56, dur: 1.0, vel: 0.52 },     // Ab3
        { t: 10, div: 'great', midi: 55, dur: 2.0, vel: 0.55 },    // G3
        // Bass
        { t: 6, div: 'pedal', midi: 44, dur: 2.0, vel: 0.68 },     // Ab2
        { t: 8, div: 'pedal', midi: 39, dur: 1.0, vel: 0.65 },     // Eb2
        { t: 9, div: 'pedal', midi: 44, dur: 1.0, vel: 0.65 },     // Ab2
        { t: 10, div: 'pedal', midi: 39, dur: 2.0, vel: 0.68 },    // Eb2

        // ======== Phrase 3: "Komm, fuhre mich in Frieden" ========
        // Soprano
        { t: 12, div: 'swell', midi: 70, dur: 1.0, vel: 0.65 },    // Bb4
        { t: 13, div: 'swell', midi: 72, dur: 1.0, vel: 0.65 },    // C5
        { t: 14, div: 'swell', midi: 74, dur: 1.0, vel: 0.68 },    // D5
        { t: 15, div: 'swell', midi: 75, dur: 1.0, vel: 0.68 },    // Eb5
        { t: 16, div: 'swell', midi: 74, dur: 1.0, vel: 0.65 },    // D5
        { t: 17, div: 'swell', midi: 72, dur: 1.0, vel: 0.65 },    // C5
        // Alto
        { t: 12, div: 'swell', midi: 65, dur: 1.0, vel: 0.55 },    // F4
        { t: 13, div: 'swell', midi: 67, dur: 1.0, vel: 0.55 },    // G4
        { t: 14, div: 'swell', midi: 65, dur: 1.0, vel: 0.58 },    // F4
        { t: 15, div: 'swell', midi: 67, dur: 1.0, vel: 0.58 },    // G4
        { t: 16, div: 'swell', midi: 70, dur: 1.0, vel: 0.55 },    // Bb4
        { t: 17, div: 'swell', midi: 68, dur: 1.0, vel: 0.55 },    // Ab4
        // Tenor
        { t: 12, div: 'great', midi: 58, dur: 1.0, vel: 0.55 },    // Bb3
        { t: 13, div: 'great', midi: 60, dur: 1.0, vel: 0.55 },    // C4
        { t: 14, div: 'great', midi: 58, dur: 1.0, vel: 0.55 },    // Bb3
        { t: 15, div: 'great', midi: 58, dur: 1.0, vel: 0.55 },    // Bb3
        { t: 16, div: 'great', midi: 58, dur: 1.0, vel: 0.55 },    // Bb3
        { t: 17, div: 'great', midi: 56, dur: 1.0, vel: 0.52 },    // Ab3
        // Bass
        { t: 12, div: 'pedal', midi: 46, dur: 1.0, vel: 0.68 },    // Bb2
        { t: 13, div: 'pedal', midi: 44, dur: 1.0, vel: 0.65 },    // Ab2
        { t: 14, div: 'pedal', midi: 46, dur: 1.0, vel: 0.68 },    // Bb2
        { t: 15, div: 'pedal', midi: 39, dur: 1.0, vel: 0.68 },    // Eb2
        { t: 16, div: 'pedal', midi: 41, dur: 1.0, vel: 0.65 },    // F2
        { t: 17, div: 'pedal', midi: 44, dur: 1.0, vel: 0.65 },    // Ab2

        // ======== Phrase 4: "weil ich allhier" ========
        // Soprano
        { t: 18, div: 'swell', midi: 70, dur: 2.0, vel: 0.68 },    // Bb4
        { t: 20, div: 'swell', midi: 68, dur: 1.0, vel: 0.65 },    // Ab4
        { t: 21, div: 'swell', midi: 67, dur: 1.0, vel: 0.62 },    // G4
        { t: 22, div: 'swell', midi: 65, dur: 2.0, vel: 0.65 },    // F4
        // Alto
        { t: 18, div: 'swell', midi: 65, dur: 2.0, vel: 0.55 },    // F4
        { t: 20, div: 'swell', midi: 63, dur: 1.0, vel: 0.52 },    // Eb4
        { t: 21, div: 'swell', midi: 63, dur: 1.0, vel: 0.52 },    // Eb4
        { t: 22, div: 'swell', midi: 60, dur: 2.0, vel: 0.55 },    // C4
        // Tenor
        { t: 18, div: 'great', midi: 58, dur: 2.0, vel: 0.55 },    // Bb3
        { t: 20, div: 'great', midi: 56, dur: 1.0, vel: 0.52 },    // Ab3
        { t: 21, div: 'great', midi: 55, dur: 1.0, vel: 0.52 },    // G3
        { t: 22, div: 'great', midi: 56, dur: 2.0, vel: 0.55 },    // Ab3
        // Bass
        { t: 18, div: 'pedal', midi: 46, dur: 2.0, vel: 0.68 },    // Bb2
        { t: 20, div: 'pedal', midi: 44, dur: 1.0, vel: 0.65 },    // Ab2
        { t: 21, div: 'pedal', midi: 39, dur: 1.0, vel: 0.65 },    // Eb2
        { t: 22, div: 'pedal', midi: 41, dur: 2.0, vel: 0.68 },    // F2

        // ======== Phrase 5: "mit Sorgen muss umgeben" ========
        // Soprano
        { t: 24, div: 'swell', midi: 67, dur: 1.0, vel: 0.65 },    // G4
        { t: 25, div: 'swell', midi: 68, dur: 1.0, vel: 0.65 },    // Ab4
        { t: 26, div: 'swell', midi: 70, dur: 1.0, vel: 0.68 },    // Bb4
        { t: 27, div: 'swell', midi: 72, dur: 1.0, vel: 0.68 },    // C5
        { t: 28, div: 'swell', midi: 70, dur: 1.0, vel: 0.65 },    // Bb4
        { t: 29, div: 'swell', midi: 68, dur: 1.0, vel: 0.65 },    // Ab4
        // Alto
        { t: 24, div: 'swell', midi: 63, dur: 1.0, vel: 0.55 },    // Eb4
        { t: 25, div: 'swell', midi: 63, dur: 1.0, vel: 0.55 },    // Eb4
        { t: 26, div: 'swell', midi: 65, dur: 1.0, vel: 0.55 },    // F4
        { t: 27, div: 'swell', midi: 63, dur: 1.0, vel: 0.55 },    // Eb4
        { t: 28, div: 'swell', midi: 63, dur: 1.0, vel: 0.55 },    // Eb4
        { t: 29, div: 'swell', midi: 60, dur: 1.0, vel: 0.52 },    // C4
        // Tenor
        { t: 24, div: 'great', midi: 55, dur: 1.0, vel: 0.52 },    // G3
        { t: 25, div: 'great', midi: 56, dur: 1.0, vel: 0.52 },    // Ab3
        { t: 26, div: 'great', midi: 58, dur: 1.0, vel: 0.55 },    // Bb3
        { t: 27, div: 'great', midi: 56, dur: 1.0, vel: 0.52 },    // Ab3
        { t: 28, div: 'great', midi: 55, dur: 1.0, vel: 0.52 },    // G3
        { t: 29, div: 'great', midi: 56, dur: 1.0, vel: 0.52 },    // Ab3
        // Bass
        { t: 24, div: 'pedal', midi: 39, dur: 1.0, vel: 0.65 },    // Eb2
        { t: 25, div: 'pedal', midi: 44, dur: 1.0, vel: 0.65 },    // Ab2
        { t: 26, div: 'pedal', midi: 46, dur: 1.0, vel: 0.68 },    // Bb2
        { t: 27, div: 'pedal', midi: 44, dur: 1.0, vel: 0.65 },    // Ab2
        { t: 28, div: 'pedal', midi: 39, dur: 1.0, vel: 0.65 },    // Eb2
        { t: 29, div: 'pedal', midi: 41, dur: 1.0, vel: 0.65 },    // F2

        // ======== Phrase 6: Final cadence "komm, komm" ========
        // Soprano - gentle rise and fall
        { t: 30, div: 'swell', midi: 67, dur: 1.5, vel: 0.68 },    // G4
        { t: 31.5, div: 'swell', midi: 68, dur: 0.5, vel: 0.65 },  // Ab4
        { t: 32, div: 'swell', midi: 70, dur: 1.0, vel: 0.68 },    // Bb4
        { t: 33, div: 'swell', midi: 68, dur: 1.0, vel: 0.65 },    // Ab4
        { t: 34, div: 'swell', midi: 67, dur: 2.0, vel: 0.68 },    // G4
        // Alto
        { t: 30, div: 'swell', midi: 63, dur: 2.0, vel: 0.55 },    // Eb4
        { t: 32, div: 'swell', midi: 65, dur: 1.0, vel: 0.55 },    // F4
        { t: 33, div: 'swell', midi: 63, dur: 1.0, vel: 0.52 },    // Eb4
        { t: 34, div: 'swell', midi: 63, dur: 2.0, vel: 0.55 },    // Eb4
        // Tenor
        { t: 30, div: 'great', midi: 55, dur: 2.0, vel: 0.52 },    // G3
        { t: 32, div: 'great', midi: 58, dur: 1.0, vel: 0.55 },    // Bb3
        { t: 33, div: 'great', midi: 56, dur: 1.0, vel: 0.52 },    // Ab3
        { t: 34, div: 'great', midi: 55, dur: 2.0, vel: 0.55 },    // G3
        // Bass
        { t: 30, div: 'pedal', midi: 39, dur: 2.0, vel: 0.68 },    // Eb2
        { t: 32, div: 'pedal', midi: 46, dur: 1.0, vel: 0.65 },    // Bb2
        { t: 33, div: 'pedal', midi: 44, dur: 1.0, vel: 0.65 },    // Ab2

        // Final Eb major chord - peaceful resolution
        { t: 34, div: 'pedal', midi: 39, dur: 3.0, vel: 0.7 },     // Eb2
        { t: 34, div: 'pedal', midi: 27, dur: 3.0, vel: 0.65 },    // Eb1 (subbass)
    ]
};
