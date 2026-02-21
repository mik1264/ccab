// ============================================================
// Early Baroque Organ Works Collection
// ============================================================
// Six masterworks from the Early Baroque period (c.1600-1700)
// featuring Italian, French, and North German styles
// ============================================================

// ============================================================
// 1. Frescobaldi - Toccata per l'Elevazione
// ============================================================
// From Fiori musicali (1635), Messa degli Apostoli
// Slow, mystical toccata for the Elevation of the Host
// Modal/chromatic - sustained passionate mysticism
// 4 voices, molto adagio, rich chromatic suspensions
// Tempo: ~52 BPM (very slow, contemplative)
//
// MIDI: C3=48 D3=50 E3=52 F3=53 G3=55 A3=57 Bb3=58 B3=59
//       C4=60 D4=62 E4=64 F4=65 G4=67 A4=69 Bb4=70 B4=71
//       C5=72 D5=74 Eb5=75 E5=76 F5=77 G5=79 A5=81
//       C#4=61 F#4=66 G#4=68 C#5=73 F#5=78
// ============================================================

const PIECE_FRESCOBALDI_ELEVAZIONE = {
    title: "Toccata per l'Elevazione",
    composer: "Girolamo Frescobaldi",
    catalog: "F 12.45",
    key: "modal",
    tempo: 52,
    registration: {
        great: ['gt-principal8'],
        swell: ['sw-gedeckt8', 'sw-voixceleste8', 'sw-tremulant'],
        choir: [],
        pedal: ['pd-subbass32']
    },
    events: [
        // ============================================================
        // Opening - Slow chordal entrance, modal on G
        // Sustained voices entering one by one, chromatic inflections
        // ============================================================

        // --- Measure 1: Opening G minor sonority ---
        { t: 0, div: 'great', midi: 67, dur: 4, vel: 0.5 },     // G4 soprano
        { t: 0, div: 'great', midi: 62, dur: 4, vel: 0.45 },    // D4 alto
        { t: 0, div: 'swell', midi: 58, dur: 4, vel: 0.4 },     // Bb3 tenor
        { t: 0, div: 'pedal', midi: 43, dur: 4, vel: 0.45 },    // G2 bass

        // --- Measure 2: Move to D, chromatic voice leading ---
        { t: 4, div: 'great', midi: 66, dur: 2, vel: 0.5 },     // F#4 soprano
        { t: 4, div: 'great', midi: 62, dur: 4, vel: 0.45 },    // D4 alto
        { t: 4, div: 'swell', midi: 57, dur: 4, vel: 0.4 },     // A3 tenor
        { t: 4, div: 'pedal', midi: 50, dur: 4, vel: 0.45 },    // D3 bass
        { t: 6, div: 'great', midi: 67, dur: 2, vel: 0.5 },     // G4 soprano resolves

        // --- Measure 3: Chromatic ascent in soprano, Bb-B natural ---
        { t: 8, div: 'great', midi: 69, dur: 2, vel: 0.5 },     // A4
        { t: 8, div: 'great', midi: 64, dur: 4, vel: 0.45 },    // E4 alto
        { t: 8, div: 'swell', midi: 60, dur: 4, vel: 0.4 },     // C4 tenor
        { t: 8, div: 'pedal', midi: 48, dur: 4, vel: 0.45 },    // C3 bass
        { t: 10, div: 'great', midi: 70, dur: 2, vel: 0.5 },    // Bb4

        // --- Measure 4: Suspension and resolution to F ---
        { t: 12, div: 'great', midi: 69, dur: 4, vel: 0.5 },    // A4
        { t: 12, div: 'great', midi: 65, dur: 4, vel: 0.45 },   // F4 alto
        { t: 12, div: 'swell', midi: 60, dur: 4, vel: 0.4 },    // C4 tenor
        { t: 12, div: 'pedal', midi: 53, dur: 4, vel: 0.45 },   // F3 bass

        // --- Measure 5: Chromatic descent, C#-C natural ---
        { t: 16, div: 'great', midi: 67, dur: 2, vel: 0.5 },    // G4
        { t: 16, div: 'great', midi: 64, dur: 4, vel: 0.45 },   // E4
        { t: 16, div: 'swell', midi: 61, dur: 2, vel: 0.4 },    // C#4
        { t: 16, div: 'pedal', midi: 45, dur: 4, vel: 0.45 },   // A2
        { t: 18, div: 'great', midi: 65, dur: 2, vel: 0.5 },    // F4
        { t: 18, div: 'swell', midi: 60, dur: 2, vel: 0.4 },    // C4

        // --- Measure 6: D minor cadence ---
        { t: 20, div: 'great', midi: 66, dur: 2, vel: 0.5 },    // F#4
        { t: 20, div: 'great', midi: 62, dur: 4, vel: 0.45 },   // D4
        { t: 20, div: 'swell', midi: 57, dur: 4, vel: 0.4 },    // A3
        { t: 20, div: 'pedal', midi: 50, dur: 4, vel: 0.45 },   // D3
        { t: 22, div: 'great', midi: 67, dur: 2, vel: 0.5 },    // G4

        // ============================================================
        // Section B - Deeper chromatic exploration
        // Cascading suspensions, durezze e ligature style
        // ============================================================

        // --- Measure 7: Eb intrusion, modal mixture ---
        { t: 24, div: 'great', midi: 67, dur: 4, vel: 0.5 },    // G4
        { t: 24, div: 'great', midi: 63, dur: 4, vel: 0.45 },   // Eb4
        { t: 24, div: 'swell', midi: 58, dur: 4, vel: 0.4 },    // Bb3
        { t: 24, div: 'pedal', midi: 51, dur: 4, vel: 0.45 },   // Eb3

        // --- Measure 8: Chromatic passing tones ---
        { t: 28, div: 'great', midi: 65, dur: 2, vel: 0.5 },    // F4
        { t: 28, div: 'great', midi: 62, dur: 2, vel: 0.45 },   // D4
        { t: 28, div: 'swell', midi: 57, dur: 4, vel: 0.4 },    // A3
        { t: 28, div: 'pedal', midi: 50, dur: 4, vel: 0.45 },   // D3
        { t: 30, div: 'great', midi: 66, dur: 1, vel: 0.5 },    // F#4
        { t: 31, div: 'great', midi: 67, dur: 1, vel: 0.5 },    // G4
        { t: 30, div: 'great', midi: 61, dur: 2, vel: 0.45 },   // C#4

        // --- Measure 9: Tirata (scale run) in soprano ---
        { t: 32, div: 'great', midi: 69, dur: 1, vel: 0.5 },    // A4
        { t: 33, div: 'great', midi: 70, dur: 1, vel: 0.5 },    // Bb4
        { t: 34, div: 'great', midi: 72, dur: 1, vel: 0.5 },    // C5
        { t: 35, div: 'great', midi: 74, dur: 1, vel: 0.5 },    // D5
        { t: 32, div: 'great', midi: 65, dur: 4, vel: 0.45 },   // F4 alto
        { t: 32, div: 'swell', midi: 60, dur: 4, vel: 0.4 },    // C4 tenor
        { t: 32, div: 'pedal', midi: 53, dur: 4, vel: 0.45 },   // F3

        // --- Measure 10: Peak and chromatic descent ---
        { t: 36, div: 'great', midi: 75, dur: 2, vel: 0.55 },   // Eb5
        { t: 38, div: 'great', midi: 74, dur: 1, vel: 0.5 },    // D5
        { t: 39, div: 'great', midi: 72, dur: 1, vel: 0.5 },    // C5
        { t: 36, div: 'great', midi: 67, dur: 4, vel: 0.45 },   // G4 alto
        { t: 36, div: 'swell', midi: 63, dur: 2, vel: 0.4 },    // Eb4 tenor
        { t: 38, div: 'swell', midi: 62, dur: 2, vel: 0.4 },    // D4
        { t: 36, div: 'pedal', midi: 48, dur: 4, vel: 0.45 },   // C3

        // --- Measure 11: Cascata (falling figure) ---
        { t: 40, div: 'great', midi: 71, dur: 1, vel: 0.5 },    // B4
        { t: 41, div: 'great', midi: 69, dur: 1, vel: 0.5 },    // A4
        { t: 42, div: 'great', midi: 67, dur: 1, vel: 0.5 },    // G4
        { t: 43, div: 'great', midi: 66, dur: 1, vel: 0.5 },    // F#4
        { t: 40, div: 'great', midi: 62, dur: 4, vel: 0.45 },   // D4 alto
        { t: 40, div: 'swell', midi: 57, dur: 4, vel: 0.4 },    // A3
        { t: 40, div: 'pedal', midi: 50, dur: 4, vel: 0.45 },   // D3

        // --- Measure 12: G minor, suspensions ---
        { t: 44, div: 'great', midi: 67, dur: 2, vel: 0.5 },    // G4
        { t: 46, div: 'great', midi: 65, dur: 2, vel: 0.5 },    // F4
        { t: 44, div: 'great', midi: 62, dur: 2, vel: 0.45 },   // D4
        { t: 46, div: 'great', midi: 60, dur: 2, vel: 0.45 },   // C4
        { t: 44, div: 'swell', midi: 58, dur: 4, vel: 0.4 },    // Bb3
        { t: 44, div: 'pedal', midi: 43, dur: 4, vel: 0.45 },   // G2

        // --- Measure 13: 7-6 suspension chain ---
        { t: 48, div: 'great', midi: 64, dur: 2, vel: 0.5 },    // E4 (7th)
        { t: 50, div: 'great', midi: 65, dur: 2, vel: 0.5 },    // F4 (resolution)
        { t: 48, div: 'great', midi: 60, dur: 4, vel: 0.45 },   // C4
        { t: 48, div: 'swell', midi: 57, dur: 2, vel: 0.4 },    // A3
        { t: 50, div: 'swell', midi: 56, dur: 2, vel: 0.4 },    // Ab3 chromatic
        { t: 48, div: 'pedal', midi: 53, dur: 4, vel: 0.45 },   // F3

        // --- Measure 14: More chromatic suspensions ---
        { t: 52, div: 'great', midi: 64, dur: 4, vel: 0.5 },    // E4
        { t: 52, div: 'great', midi: 61, dur: 2, vel: 0.45 },   // C#4
        { t: 54, div: 'great', midi: 60, dur: 2, vel: 0.45 },   // C4
        { t: 52, div: 'swell', midi: 57, dur: 4, vel: 0.4 },    // A3
        { t: 52, div: 'pedal', midi: 45, dur: 4, vel: 0.45 },   // A2

        // ============================================================
        // Section C - Mystical climax with ornamental figures
        // Written-out trills and minute (ornamental turns)
        // ============================================================

        // --- Measure 15: Ornamental soprano over sustained harmony ---
        { t: 56, div: 'great', midi: 74, dur: 0.5, vel: 0.5 },  // D5 trill start
        { t: 56.5, div: 'great', midi: 76, dur: 0.5, vel: 0.45 },// E5
        { t: 57, div: 'great', midi: 74, dur: 0.5, vel: 0.5 },  // D5
        { t: 57.5, div: 'great', midi: 72, dur: 0.5, vel: 0.45 },// C5
        { t: 58, div: 'great', midi: 74, dur: 2, vel: 0.5 },    // D5 held
        { t: 56, div: 'great', midi: 66, dur: 4, vel: 0.45 },   // F#4
        { t: 56, div: 'swell', midi: 62, dur: 4, vel: 0.4 },    // D4
        { t: 56, div: 'pedal', midi: 50, dur: 4, vel: 0.45 },   // D3

        // --- Measure 16: Soprano cascata with chromatic neighbor ---
        { t: 60, div: 'great', midi: 72, dur: 1, vel: 0.5 },    // C5
        { t: 61, div: 'great', midi: 70, dur: 1, vel: 0.5 },    // Bb4
        { t: 62, div: 'great', midi: 69, dur: 1, vel: 0.5 },    // A4
        { t: 63, div: 'great', midi: 67, dur: 1, vel: 0.5 },    // G4
        { t: 60, div: 'great', midi: 64, dur: 4, vel: 0.45 },   // E4
        { t: 60, div: 'swell', midi: 60, dur: 4, vel: 0.4 },    // C4
        { t: 60, div: 'pedal', midi: 48, dur: 4, vel: 0.45 },   // C3

        // --- Measure 17: Bb suspension resolving to A ---
        { t: 64, div: 'great', midi: 70, dur: 2, vel: 0.5 },    // Bb4 (susp)
        { t: 66, div: 'great', midi: 69, dur: 2, vel: 0.5 },    // A4 (res)
        { t: 64, div: 'great', midi: 65, dur: 4, vel: 0.45 },   // F4
        { t: 64, div: 'swell', midi: 62, dur: 4, vel: 0.4 },    // D4
        { t: 64, div: 'pedal', midi: 50, dur: 4, vel: 0.45 },   // D3

        // --- Measure 18: Rising chromatic line in tenor ---
        { t: 68, div: 'great', midi: 67, dur: 4, vel: 0.5 },    // G4
        { t: 68, div: 'great', midi: 62, dur: 4, vel: 0.45 },   // D4
        { t: 68, div: 'swell', midi: 58, dur: 1, vel: 0.4 },    // Bb3
        { t: 69, div: 'swell', midi: 59, dur: 1, vel: 0.4 },    // B3
        { t: 70, div: 'swell', midi: 60, dur: 1, vel: 0.4 },    // C4
        { t: 71, div: 'swell', midi: 61, dur: 1, vel: 0.4 },    // C#4
        { t: 68, div: 'pedal', midi: 43, dur: 4, vel: 0.45 },   // G2

        // --- Measure 19: D major resolution (Picardy-like) ---
        { t: 72, div: 'great', midi: 66, dur: 2, vel: 0.5 },    // F#4
        { t: 74, div: 'great', midi: 67, dur: 2, vel: 0.5 },    // G4
        { t: 72, div: 'great', midi: 62, dur: 4, vel: 0.45 },   // D4
        { t: 72, div: 'swell', midi: 57, dur: 4, vel: 0.4 },    // A3
        { t: 72, div: 'pedal', midi: 50, dur: 4, vel: 0.45 },   // D3

        // --- Measure 20: Written-out trill on soprano ---
        { t: 76, div: 'great', midi: 69, dur: 0.5, vel: 0.5 },  // A4
        { t: 76.5, div: 'great', midi: 70, dur: 0.5, vel: 0.45 },// Bb4
        { t: 77, div: 'great', midi: 69, dur: 0.5, vel: 0.5 },  // A4
        { t: 77.5, div: 'great', midi: 70, dur: 0.5, vel: 0.45 },// Bb4
        { t: 78, div: 'great', midi: 69, dur: 2, vel: 0.5 },    // A4 held
        { t: 76, div: 'great', midi: 65, dur: 4, vel: 0.45 },   // F4
        { t: 76, div: 'swell', midi: 60, dur: 4, vel: 0.4 },    // C4
        { t: 76, div: 'pedal', midi: 53, dur: 4, vel: 0.45 },   // F3

        // --- Measure 21: Descending chromatic soprano ---
        { t: 80, div: 'great', midi: 68, dur: 2, vel: 0.5 },    // Ab4
        { t: 82, div: 'great', midi: 67, dur: 2, vel: 0.5 },    // G4
        { t: 80, div: 'great', midi: 63, dur: 4, vel: 0.45 },   // Eb4
        { t: 80, div: 'swell', midi: 58, dur: 4, vel: 0.4 },    // Bb3
        { t: 80, div: 'pedal', midi: 51, dur: 4, vel: 0.45 },   // Eb3

        // --- Measure 22: Chromatic tension intensifies ---
        { t: 84, div: 'great', midi: 66, dur: 1, vel: 0.5 },    // F#4
        { t: 85, div: 'great', midi: 67, dur: 1, vel: 0.5 },    // G4
        { t: 86, div: 'great', midi: 69, dur: 1, vel: 0.5 },    // A4
        { t: 87, div: 'great', midi: 70, dur: 1, vel: 0.5 },    // Bb4
        { t: 84, div: 'great', midi: 62, dur: 4, vel: 0.45 },   // D4
        { t: 84, div: 'swell', midi: 57, dur: 2, vel: 0.4 },    // A3
        { t: 86, div: 'swell', midi: 58, dur: 2, vel: 0.4 },    // Bb3
        { t: 84, div: 'pedal', midi: 50, dur: 4, vel: 0.45 },   // D3

        // --- Measure 23: Climactic suspension ---
        { t: 88, div: 'great', midi: 72, dur: 2, vel: 0.55 },   // C5 (peak)
        { t: 90, div: 'great', midi: 71, dur: 1, vel: 0.5 },    // B4
        { t: 91, div: 'great', midi: 70, dur: 1, vel: 0.5 },    // Bb4
        { t: 88, div: 'great', midi: 64, dur: 4, vel: 0.45 },   // E4
        { t: 88, div: 'swell', midi: 60, dur: 4, vel: 0.4 },    // C4
        { t: 88, div: 'pedal', midi: 48, dur: 4, vel: 0.45 },   // C3

        // ============================================================
        // Section D - Final section, return to G, gradual resolution
        // ============================================================

        // --- Measure 24: Gentle descent toward cadence ---
        { t: 92, div: 'great', midi: 69, dur: 2, vel: 0.5 },    // A4
        { t: 94, div: 'great', midi: 67, dur: 2, vel: 0.5 },    // G4
        { t: 92, div: 'great', midi: 62, dur: 4, vel: 0.45 },   // D4
        { t: 92, div: 'swell', midi: 57, dur: 4, vel: 0.4 },    // A3
        { t: 92, div: 'pedal', midi: 50, dur: 4, vel: 0.45 },   // D3

        // --- Measure 25: Ornamental soprano turn ---
        { t: 96, div: 'great', midi: 65, dur: 1, vel: 0.5 },    // F4
        { t: 97, div: 'great', midi: 67, dur: 0.5, vel: 0.5 },  // G4
        { t: 97.5, div: 'great', midi: 65, dur: 0.5, vel: 0.45 },// F4
        { t: 98, div: 'great', midi: 64, dur: 2, vel: 0.5 },    // E4
        { t: 96, div: 'great', midi: 60, dur: 4, vel: 0.45 },   // C4
        { t: 96, div: 'swell', midi: 57, dur: 4, vel: 0.4 },    // A3
        { t: 96, div: 'pedal', midi: 48, dur: 4, vel: 0.45 },   // C3

        // --- Measure 26: Penultimate - dominant preparation ---
        { t: 100, div: 'great', midi: 66, dur: 2, vel: 0.5 },   // F#4
        { t: 102, div: 'great', midi: 67, dur: 2, vel: 0.5 },   // G4
        { t: 100, div: 'great', midi: 62, dur: 4, vel: 0.45 },  // D4
        { t: 100, div: 'swell', midi: 57, dur: 2, vel: 0.4 },   // A3
        { t: 102, div: 'swell', midi: 59, dur: 2, vel: 0.4 },   // B3
        { t: 100, div: 'pedal', midi: 50, dur: 4, vel: 0.45 },  // D3

        // --- Measure 27: Final written-out ornament ---
        { t: 104, div: 'great', midi: 69, dur: 0.5, vel: 0.5 }, // A4
        { t: 104.5, div: 'great', midi: 67, dur: 0.5, vel: 0.45 },// G4
        { t: 105, div: 'great', midi: 66, dur: 0.5, vel: 0.5 }, // F#4
        { t: 105.5, div: 'great', midi: 67, dur: 2.5, vel: 0.5 },// G4 held
        { t: 104, div: 'great', midi: 62, dur: 4, vel: 0.45 },  // D4
        { t: 104, div: 'swell', midi: 59, dur: 4, vel: 0.4 },   // B3
        { t: 104, div: 'pedal', midi: 43, dur: 4, vel: 0.45 },  // G2

        // --- Measure 28: Final G major chord (Picardy third) ---
        { t: 108, div: 'great', midi: 67, dur: 6, vel: 0.45 },  // G4
        { t: 108, div: 'great', midi: 62, dur: 6, vel: 0.4 },   // D4
        { t: 108, div: 'swell', midi: 59, dur: 6, vel: 0.35 },  // B3
        { t: 108, div: 'pedal', midi: 43, dur: 6, vel: 0.4 },   // G2
    ]
};


// ============================================================
// 2. Couperin - Offertoire sur les grands jeux
// ============================================================
// From Messe pour les Couvents (1690)
// Grand French Classical organ piece, G minor
// Three sections: grave opening, academic fugue, lively gigue
// Inspired by French theatrical overture style
// Tempo: ~72 BPM (varies by section)
//
// MIDI: G2=43 A2=45 Bb2=46 C3=48 D3=50 Eb3=51 F3=53 G3=55
//       A3=57 Bb3=58 C4=60 D4=62 Eb4=63 F4=65 F#4=66 G4=67
//       A4=69 Bb4=70 C5=72 D5=74 Eb5=75 F5=77 G5=79
// ============================================================

const PIECE_COUPERIN_OFFERTOIRE = {
    title: "Offertoire sur les grands jeux",
    composer: "Francois Couperin",
    catalog: "Messe pour les Couvents",
    key: "G minor",
    tempo: 72,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-oboe8', 'sw-flute4'],
        choir: ['ch-clarinet8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ============================================================
        // Section A - Grave: Majestic opening, French overture style
        // Dotted rhythms, commanding reed tone, G minor
        // ============================================================

        // --- Measure 1: Grand opening G minor ---
        { t: 0, div: 'great', midi: 79, dur: 3, vel: 0.8 },     // G5 dotted half
        { t: 0, div: 'great', midi: 67, dur: 3, vel: 0.75 },    // G4
        { t: 0, div: 'great', midi: 58, dur: 4, vel: 0.7 },     // Bb3
        { t: 0, div: 'pedal', midi: 43, dur: 4, vel: 0.75 },    // G2
        { t: 3, div: 'great', midi: 77, dur: 1, vel: 0.75 },    // F5 pickup

        // --- Measure 2: Dotted figure, D-Eb-D ---
        { t: 4, div: 'great', midi: 74, dur: 3, vel: 0.8 },     // D5 dotted
        { t: 7, div: 'great', midi: 75, dur: 0.5, vel: 0.7 },   // Eb5 short
        { t: 7.5, div: 'great', midi: 74, dur: 0.5, vel: 0.75 },// D5
        { t: 4, div: 'great', midi: 66, dur: 4, vel: 0.7 },     // F#4
        { t: 4, div: 'great', midi: 62, dur: 4, vel: 0.65 },    // D4
        { t: 4, div: 'pedal', midi: 50, dur: 4, vel: 0.75 },    // D3

        // --- Measure 3: Sequential dotted figure descending ---
        { t: 8, div: 'great', midi: 72, dur: 3, vel: 0.8 },     // C5 dotted
        { t: 11, div: 'great', midi: 70, dur: 1, vel: 0.75 },   // Bb4
        { t: 8, div: 'great', midi: 63, dur: 4, vel: 0.7 },     // Eb4
        { t: 8, div: 'great', midi: 60, dur: 4, vel: 0.65 },    // C4
        { t: 8, div: 'pedal', midi: 48, dur: 4, vel: 0.75 },    // C3

        // --- Measure 4: Cadence to Bb major ---
        { t: 12, div: 'great', midi: 70, dur: 2, vel: 0.8 },    // Bb4
        { t: 14, div: 'great', midi: 74, dur: 2, vel: 0.75 },   // D5
        { t: 12, div: 'great', midi: 65, dur: 4, vel: 0.7 },    // F4
        { t: 12, div: 'great', midi: 58, dur: 4, vel: 0.65 },   // Bb3
        { t: 12, div: 'pedal', midi: 46, dur: 4, vel: 0.75 },   // Bb2

        // --- Measure 5: Rising figure, return toward G minor ---
        { t: 16, div: 'great', midi: 75, dur: 3, vel: 0.8 },    // Eb5
        { t: 19, div: 'great', midi: 74, dur: 1, vel: 0.75 },   // D5
        { t: 16, div: 'great', midi: 67, dur: 4, vel: 0.7 },    // G4
        { t: 16, div: 'great', midi: 63, dur: 4, vel: 0.65 },   // Eb4
        { t: 16, div: 'pedal', midi: 51, dur: 4, vel: 0.75 },   // Eb3

        // --- Measure 6: D major dominant preparation ---
        { t: 20, div: 'great', midi: 72, dur: 1, vel: 0.75 },   // C5
        { t: 21, div: 'great', midi: 70, dur: 1, vel: 0.75 },   // Bb4
        { t: 22, div: 'great', midi: 69, dur: 2, vel: 0.8 },    // A4
        { t: 20, div: 'great', midi: 66, dur: 4, vel: 0.7 },    // F#4
        { t: 20, div: 'great', midi: 62, dur: 4, vel: 0.65 },   // D4
        { t: 20, div: 'pedal', midi: 50, dur: 4, vel: 0.75 },   // D3

        // --- Measure 7: Half cadence on D ---
        { t: 24, div: 'great', midi: 67, dur: 3, vel: 0.8 },    // G4 dotted
        { t: 27, div: 'great', midi: 69, dur: 1, vel: 0.75 },   // A4
        { t: 24, div: 'great', midi: 62, dur: 4, vel: 0.7 },    // D4
        { t: 24, div: 'great', midi: 58, dur: 4, vel: 0.65 },   // Bb3
        { t: 24, div: 'pedal', midi: 43, dur: 4, vel: 0.75 },   // G2

        // --- Measure 8: Grand cadence to G minor ---
        { t: 28, div: 'great', midi: 70, dur: 2, vel: 0.8 },    // Bb4
        { t: 30, div: 'great', midi: 69, dur: 1, vel: 0.75 },   // A4
        { t: 31, div: 'great', midi: 67, dur: 1, vel: 0.8 },    // G4
        { t: 28, div: 'great', midi: 62, dur: 2, vel: 0.7 },    // D4
        { t: 30, div: 'great', midi: 66, dur: 2, vel: 0.7 },    // F#4
        { t: 28, div: 'pedal', midi: 50, dur: 2, vel: 0.75 },   // D3
        { t: 30, div: 'pedal', midi: 43, dur: 2, vel: 0.75 },   // G2

        // ============================================================
        // Section B - Fugue: Academic fugal entries on Grands Jeux
        // Subject: G-A-Bb-C-D with rhythmic drive
        // Dissonant entries characteristic of Couperin
        // ============================================================

        // --- Measure 9: Fugue subject - soprano entry ---
        { t: 32, div: 'great', midi: 67, dur: 1, vel: 0.75 },   // G4
        { t: 33, div: 'great', midi: 69, dur: 1, vel: 0.7 },    // A4
        { t: 34, div: 'great', midi: 70, dur: 1, vel: 0.7 },    // Bb4
        { t: 35, div: 'great', midi: 72, dur: 1, vel: 0.75 },   // C5

        // --- Measure 10: Subject continues ---
        { t: 36, div: 'great', midi: 74, dur: 2, vel: 0.8 },    // D5
        { t: 38, div: 'great', midi: 72, dur: 1, vel: 0.7 },    // C5
        { t: 39, div: 'great', midi: 70, dur: 1, vel: 0.7 },    // Bb4

        // --- Measure 11: Answer in alto (D) + subject continuation ---
        { t: 40, div: 'great', midi: 69, dur: 2, vel: 0.75 },   // A4 soprano
        { t: 42, div: 'great', midi: 67, dur: 2, vel: 0.75 },   // G4
        { t: 40, div: 'swell', midi: 62, dur: 1, vel: 0.7 },    // D4 answer
        { t: 41, div: 'swell', midi: 64, dur: 1, vel: 0.65 },   // E4
        { t: 42, div: 'swell', midi: 65, dur: 1, vel: 0.65 },   // F4
        { t: 43, div: 'swell', midi: 67, dur: 1, vel: 0.7 },    // G4

        // --- Measure 12: Answer continues, soprano countersubject ---
        { t: 44, div: 'great', midi: 70, dur: 1, vel: 0.75 },   // Bb4
        { t: 45, div: 'great', midi: 69, dur: 1, vel: 0.7 },    // A4
        { t: 46, div: 'great', midi: 67, dur: 1, vel: 0.75 },   // G4
        { t: 47, div: 'great', midi: 65, dur: 1, vel: 0.7 },    // F4
        { t: 44, div: 'swell', midi: 69, dur: 2, vel: 0.75 },   // A4
        { t: 46, div: 'swell', midi: 67, dur: 1, vel: 0.7 },    // G4
        { t: 47, div: 'swell', midi: 65, dur: 1, vel: 0.65 },   // F4

        // --- Measure 13: Tenor entry of subject ---
        { t: 48, div: 'great', midi: 67, dur: 2, vel: 0.75 },   // G4 soprano held
        { t: 50, div: 'great', midi: 65, dur: 2, vel: 0.7 },    // F4
        { t: 48, div: 'swell', midi: 62, dur: 4, vel: 0.7 },    // D4 alto held
        { t: 48, div: 'choir', midi: 55, dur: 1, vel: 0.7 },    // G3 tenor subject
        { t: 49, div: 'choir', midi: 57, dur: 1, vel: 0.65 },   // A3
        { t: 50, div: 'choir', midi: 58, dur: 1, vel: 0.65 },   // Bb3
        { t: 51, div: 'choir', midi: 60, dur: 1, vel: 0.7 },    // C4

        // --- Measure 14: Subject continues in tenor ---
        { t: 52, div: 'great', midi: 62, dur: 4, vel: 0.7 },    // D4 soprano
        { t: 52, div: 'swell', midi: 58, dur: 4, vel: 0.65 },   // Bb3 alto
        { t: 52, div: 'choir', midi: 62, dur: 2, vel: 0.75 },   // D4 tenor
        { t: 54, div: 'choir', midi: 60, dur: 1, vel: 0.7 },    // C4
        { t: 55, div: 'choir', midi: 58, dur: 1, vel: 0.65 },   // Bb3

        // --- Measure 15: Bass entry (pedal) ---
        { t: 56, div: 'great', midi: 67, dur: 2, vel: 0.75 },   // G4
        { t: 58, div: 'great', midi: 65, dur: 2, vel: 0.7 },    // F4
        { t: 56, div: 'swell', midi: 62, dur: 4, vel: 0.65 },   // D4
        { t: 56, div: 'choir', midi: 57, dur: 4, vel: 0.65 },   // A3
        { t: 56, div: 'pedal', midi: 43, dur: 1, vel: 0.75 },   // G2
        { t: 57, div: 'pedal', midi: 45, dur: 1, vel: 0.7 },    // A2
        { t: 58, div: 'pedal', midi: 46, dur: 1, vel: 0.7 },    // Bb2
        { t: 59, div: 'pedal', midi: 48, dur: 1, vel: 0.75 },   // C3

        // --- Measure 16: Bass subject continues ---
        { t: 60, div: 'great', midi: 63, dur: 4, vel: 0.7 },    // Eb4
        { t: 60, div: 'swell', midi: 58, dur: 4, vel: 0.65 },   // Bb3
        { t: 60, div: 'choir', midi: 55, dur: 4, vel: 0.65 },   // G3
        { t: 60, div: 'pedal', midi: 50, dur: 2, vel: 0.8 },    // D3
        { t: 62, div: 'pedal', midi: 48, dur: 1, vel: 0.7 },    // C3
        { t: 63, div: 'pedal', midi: 46, dur: 1, vel: 0.7 },    // Bb2

        // --- Measure 17: Episode - all voices in dialogue ---
        { t: 64, div: 'great', midi: 70, dur: 1, vel: 0.75 },   // Bb4
        { t: 65, div: 'great', midi: 72, dur: 1, vel: 0.75 },   // C5
        { t: 66, div: 'great', midi: 74, dur: 2, vel: 0.8 },    // D5
        { t: 64, div: 'swell', midi: 65, dur: 2, vel: 0.7 },    // F4
        { t: 66, div: 'swell', midi: 62, dur: 2, vel: 0.65 },   // D4
        { t: 64, div: 'pedal', midi: 46, dur: 2, vel: 0.7 },    // Bb2
        { t: 66, div: 'pedal', midi: 50, dur: 2, vel: 0.75 },   // D3

        // --- Measure 18: Stretto entries ---
        { t: 68, div: 'great', midi: 72, dur: 1, vel: 0.75 },   // C5
        { t: 69, div: 'great', midi: 70, dur: 1, vel: 0.75 },   // Bb4
        { t: 70, div: 'great', midi: 69, dur: 2, vel: 0.75 },   // A4
        { t: 68, div: 'swell', midi: 60, dur: 1, vel: 0.7 },    // C4 imitation
        { t: 69, div: 'swell', midi: 62, dur: 1, vel: 0.65 },   // D4
        { t: 70, div: 'swell', midi: 63, dur: 1, vel: 0.65 },   // Eb4
        { t: 71, div: 'swell', midi: 65, dur: 1, vel: 0.7 },    // F4
        { t: 68, div: 'pedal', midi: 48, dur: 4, vel: 0.75 },   // C3

        // ============================================================
        // Section C - Gigue: Lively compound meter feel
        // Spirited reed-driven conclusion
        // ============================================================

        // --- Measure 19: Gigue subject on reeds ---
        { t: 72, div: 'great', midi: 67, dur: 1.5, vel: 0.8 },  // G4 dotted
        { t: 73.5, div: 'great', midi: 69, dur: 0.5, vel: 0.7 },// A4
        { t: 74, div: 'great', midi: 70, dur: 1, vel: 0.75 },   // Bb4
        { t: 75, div: 'great', midi: 72, dur: 1, vel: 0.8 },    // C5
        { t: 72, div: 'pedal', midi: 43, dur: 4, vel: 0.75 },   // G2

        // --- Measure 20: Gigue continues with leaps ---
        { t: 76, div: 'great', midi: 74, dur: 1.5, vel: 0.8 },  // D5
        { t: 77.5, div: 'great', midi: 70, dur: 0.5, vel: 0.7 },// Bb4
        { t: 78, div: 'great', midi: 67, dur: 1, vel: 0.75 },   // G4
        { t: 79, div: 'great', midi: 69, dur: 1, vel: 0.75 },   // A4
        { t: 76, div: 'swell', midi: 62, dur: 4, vel: 0.65 },   // D4
        { t: 76, div: 'pedal', midi: 50, dur: 4, vel: 0.75 },   // D3

        // --- Measure 21: Dialogue between manuals ---
        { t: 80, div: 'great', midi: 70, dur: 2, vel: 0.8 },    // Bb4
        { t: 82, div: 'swell', midi: 65, dur: 1, vel: 0.7 },    // F4 response
        { t: 83, div: 'swell', midi: 67, dur: 1, vel: 0.7 },    // G4
        { t: 80, div: 'choir', midi: 58, dur: 4, vel: 0.65 },   // Bb3
        { t: 80, div: 'pedal', midi: 46, dur: 4, vel: 0.75 },   // Bb2

        // --- Measure 22: Brilliant passage work ---
        { t: 84, div: 'great', midi: 72, dur: 0.5, vel: 0.8 },  // C5
        { t: 84.5, div: 'great', midi: 74, dur: 0.5, vel: 0.75 },// D5
        { t: 85, div: 'great', midi: 75, dur: 0.5, vel: 0.75 }, // Eb5
        { t: 85.5, div: 'great', midi: 74, dur: 0.5, vel: 0.8 },// D5
        { t: 86, div: 'great', midi: 72, dur: 1, vel: 0.75 },   // C5
        { t: 87, div: 'great', midi: 70, dur: 1, vel: 0.75 },   // Bb4
        { t: 84, div: 'swell', midi: 63, dur: 4, vel: 0.65 },   // Eb4
        { t: 84, div: 'pedal', midi: 48, dur: 4, vel: 0.75 },   // C3

        // --- Measure 23: Sequential descent ---
        { t: 88, div: 'great', midi: 69, dur: 1.5, vel: 0.8 },  // A4
        { t: 89.5, div: 'great', midi: 67, dur: 0.5, vel: 0.7 },// G4
        { t: 90, div: 'great', midi: 65, dur: 1, vel: 0.75 },   // F4
        { t: 91, div: 'great', midi: 67, dur: 1, vel: 0.75 },   // G4
        { t: 88, div: 'swell', midi: 62, dur: 4, vel: 0.65 },   // D4
        { t: 88, div: 'pedal', midi: 50, dur: 4, vel: 0.75 },   // D3

        // --- Measure 24: Final grand cadence preparation ---
        { t: 92, div: 'great', midi: 69, dur: 1, vel: 0.8 },    // A4
        { t: 93, div: 'great', midi: 70, dur: 1, vel: 0.75 },   // Bb4
        { t: 94, div: 'great', midi: 72, dur: 1, vel: 0.8 },    // C5
        { t: 95, div: 'great', midi: 74, dur: 1, vel: 0.8 },    // D5
        { t: 92, div: 'swell', midi: 66, dur: 2, vel: 0.7 },    // F#4
        { t: 94, div: 'swell', midi: 62, dur: 2, vel: 0.65 },   // D4
        { t: 92, div: 'choir', midi: 57, dur: 4, vel: 0.65 },   // A3
        { t: 92, div: 'pedal', midi: 50, dur: 4, vel: 0.75 },   // D3

        // --- Measure 25: Grand cadence to G minor ---
        { t: 96, div: 'great', midi: 79, dur: 4, vel: 0.85 },   // G5
        { t: 96, div: 'great', midi: 70, dur: 4, vel: 0.75 },   // Bb4
        { t: 96, div: 'great', midi: 67, dur: 4, vel: 0.75 },   // G4
        { t: 96, div: 'swell', midi: 62, dur: 4, vel: 0.7 },    // D4
        { t: 96, div: 'choir', midi: 58, dur: 4, vel: 0.65 },   // Bb3
        { t: 96, div: 'pedal', midi: 43, dur: 4, vel: 0.8 },    // G2

        // --- Measure 26: Final flourish and resolution ---
        { t: 100, div: 'great', midi: 77, dur: 1, vel: 0.8 },   // F5
        { t: 101, div: 'great', midi: 75, dur: 1, vel: 0.8 },   // Eb5
        { t: 102, div: 'great', midi: 74, dur: 2, vel: 0.85 },  // D5
        { t: 100, div: 'great', midi: 66, dur: 4, vel: 0.75 },  // F#4
        { t: 100, div: 'swell', midi: 62, dur: 4, vel: 0.7 },   // D4
        { t: 100, div: 'pedal', midi: 50, dur: 2, vel: 0.75 },  // D3
        { t: 102, div: 'pedal', midi: 43, dur: 2, vel: 0.8 },   // G2

        // --- Measure 27: Final G minor chord ---
        { t: 104, div: 'great', midi: 79, dur: 6, vel: 0.8 },   // G5
        { t: 104, div: 'great', midi: 67, dur: 6, vel: 0.75 },  // G4
        { t: 104, div: 'swell', midi: 62, dur: 6, vel: 0.7 },   // D4
        { t: 104, div: 'choir', midi: 58, dur: 6, vel: 0.65 },  // Bb3
        { t: 104, div: 'pedal', midi: 43, dur: 6, vel: 0.8 },   // G2
    ]
};


// ============================================================
// 3. Grigny - Recit de tierce en taille
// ============================================================
// From Livre d'orgue (1699), Gloria section
// Solo melody in tenor register with tierce stop
// Key: D minor, lyrical French style
// The "en taille" means the solo is in the middle (tenor) voice
// Accompanied by gentle flue stops above and below
// Tempo: ~60 BPM (expressive, lyrical)
//
// MIDI: D2=38 A2=45 D3=50 E3=52 F3=53 G3=55 A3=57 Bb3=58
//       C4=60 C#4=61 D4=62 E4=64 F4=65 G4=67 A4=69 Bb4=70
//       C5=72 D5=74 E5=76 F5=77
// ============================================================

const PIECE_GRIGNY_TIERCE = {
    title: "Recit de tierce en taille",
    composer: "Nicolas de Grigny",
    catalog: "Livre d'orgue",
    key: "D minor",
    tempo: 60,
    registration: {
        great: ['gt-principal8', 'gt-octave4'],
        swell: ['sw-gedeckt8', 'sw-flute4', 'sw-nazard', 'sw-tremulant'],
        choir: ['ch-flute8', 'ch-spitzflute4', 'ch-quint'],
        pedal: ['pd-subbass32', 'pd-octave8']
    },
    events: [
        // ============================================================
        // The tierce en taille: solo melody on Choir (tenor register)
        // with Swell providing the tierce color
        // Great plays upper accompaniment, Pedal the bass
        // ============================================================

        // --- Measure 1: Soprano/alto accompaniment enters ---
        { t: 0, div: 'great', midi: 69, dur: 2, vel: 0.45 },    // A4 soprano
        { t: 0, div: 'great', midi: 65, dur: 2, vel: 0.4 },     // F4 alto
        { t: 2, div: 'great', midi: 67, dur: 2, vel: 0.45 },    // G4
        { t: 2, div: 'great', midi: 64, dur: 2, vel: 0.4 },     // E4
        { t: 0, div: 'pedal', midi: 50, dur: 4, vel: 0.5 },     // D3

        // --- Measure 2: Tenor solo enters on tierce ---
        { t: 4, div: 'great', midi: 65, dur: 4, vel: 0.45 },    // F4 soprano
        { t: 4, div: 'great', midi: 62, dur: 4, vel: 0.4 },     // D4 alto
        // Tenor solo (the recit)
        { t: 4, div: 'choir', midi: 57, dur: 1, vel: 0.7 },     // A3
        { t: 5, div: 'choir', midi: 58, dur: 1, vel: 0.65 },    // Bb3
        { t: 6, div: 'choir', midi: 60, dur: 1, vel: 0.65 },    // C4
        { t: 7, div: 'choir', midi: 62, dur: 1, vel: 0.7 },     // D4
        { t: 4, div: 'pedal', midi: 50, dur: 4, vel: 0.5 },     // D3

        // --- Measure 3: Tenor melody expands ---
        { t: 8, div: 'great', midi: 67, dur: 2, vel: 0.45 },    // G4
        { t: 10, div: 'great', midi: 65, dur: 2, vel: 0.45 },   // F4
        { t: 8, div: 'great', midi: 62, dur: 4, vel: 0.4 },     // D4
        { t: 8, div: 'choir', midi: 64, dur: 2, vel: 0.7 },     // E4 tenor
        { t: 10, div: 'choir', midi: 62, dur: 1, vel: 0.65 },   // D4
        { t: 11, div: 'choir', midi: 60, dur: 1, vel: 0.65 },   // C4
        { t: 8, div: 'pedal', midi: 48, dur: 4, vel: 0.5 },     // C3

        // --- Measure 4: Tenor ornamental passage ---
        { t: 12, div: 'great', midi: 65, dur: 4, vel: 0.45 },   // F4
        { t: 12, div: 'great', midi: 60, dur: 4, vel: 0.4 },    // C4
        { t: 12, div: 'choir', midi: 58, dur: 0.5, vel: 0.7 },  // Bb3
        { t: 12.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.65 },// C4
        { t: 13, div: 'choir', midi: 58, dur: 0.5, vel: 0.65 }, // Bb3
        { t: 13.5, div: 'choir', midi: 57, dur: 0.5, vel: 0.65 },// A3
        { t: 14, div: 'choir', midi: 58, dur: 2, vel: 0.7 },    // Bb3 held
        { t: 12, div: 'pedal', midi: 53, dur: 4, vel: 0.5 },    // F3

        // --- Measure 5: Rising tenor melody ---
        { t: 16, div: 'great', midi: 69, dur: 2, vel: 0.45 },   // A4
        { t: 18, div: 'great', midi: 67, dur: 2, vel: 0.45 },   // G4
        { t: 16, div: 'great', midi: 64, dur: 4, vel: 0.4 },    // E4
        { t: 16, div: 'choir', midi: 57, dur: 1, vel: 0.7 },    // A3
        { t: 17, div: 'choir', midi: 60, dur: 1, vel: 0.65 },   // C4
        { t: 18, div: 'choir', midi: 62, dur: 1, vel: 0.7 },    // D4
        { t: 19, div: 'choir', midi: 64, dur: 1, vel: 0.7 },    // E4
        { t: 16, div: 'pedal', midi: 45, dur: 4, vel: 0.5 },    // A2

        // --- Measure 6: Tenor reaches high point ---
        { t: 20, div: 'great', midi: 69, dur: 4, vel: 0.45 },   // A4
        { t: 20, div: 'great', midi: 65, dur: 4, vel: 0.4 },    // F4
        { t: 20, div: 'choir', midi: 65, dur: 2, vel: 0.75 },   // F4 (peak)
        { t: 22, div: 'choir', midi: 64, dur: 1, vel: 0.7 },    // E4
        { t: 23, div: 'choir', midi: 62, dur: 1, vel: 0.65 },   // D4
        { t: 20, div: 'pedal', midi: 50, dur: 4, vel: 0.5 },    // D3

        // --- Measure 7: Descending with ornament ---
        { t: 24, div: 'great', midi: 67, dur: 2, vel: 0.45 },   // G4
        { t: 26, div: 'great', midi: 65, dur: 2, vel: 0.45 },   // F4
        { t: 24, div: 'great', midi: 62, dur: 4, vel: 0.4 },    // D4
        { t: 24, div: 'choir', midi: 61, dur: 0.5, vel: 0.7 },  // C#4 ornament
        { t: 24.5, div: 'choir', midi: 62, dur: 0.5, vel: 0.65 },// D4
        { t: 25, div: 'choir', midi: 61, dur: 0.5, vel: 0.65 }, // C#4
        { t: 25.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.65 },// C4
        { t: 26, div: 'choir', midi: 58, dur: 2, vel: 0.7 },    // Bb3
        { t: 24, div: 'pedal', midi: 55, dur: 2, vel: 0.5 },    // G3
        { t: 26, div: 'pedal', midi: 53, dur: 2, vel: 0.5 },    // F3

        // --- Measure 8: Cadence to D minor ---
        { t: 28, div: 'great', midi: 64, dur: 2, vel: 0.45 },   // E4
        { t: 30, div: 'great', midi: 62, dur: 2, vel: 0.45 },   // D4
        { t: 28, div: 'great', midi: 61, dur: 2, vel: 0.4 },    // C#4
        { t: 30, div: 'great', midi: 62, dur: 2, vel: 0.4 },    // D4
        { t: 28, div: 'choir', midi: 57, dur: 2, vel: 0.7 },    // A3
        { t: 30, div: 'choir', midi: 57, dur: 2, vel: 0.65 },   // A3
        { t: 28, div: 'pedal', midi: 45, dur: 2, vel: 0.5 },    // A2
        { t: 30, div: 'pedal', midi: 50, dur: 2, vel: 0.5 },    // D3

        // ============================================================
        // Second phrase - more elaborate tenor solo
        // ============================================================

        // --- Measure 9: New phrase, soprano rises ---
        { t: 32, div: 'great', midi: 72, dur: 2, vel: 0.45 },   // C5
        { t: 34, div: 'great', midi: 70, dur: 2, vel: 0.45 },   // Bb4
        { t: 32, div: 'great', midi: 65, dur: 4, vel: 0.4 },    // F4
        { t: 32, div: 'choir', midi: 60, dur: 1, vel: 0.7 },    // C4
        { t: 33, div: 'choir', midi: 62, dur: 1, vel: 0.65 },   // D4
        { t: 34, div: 'choir', midi: 64, dur: 1, vel: 0.7 },    // E4
        { t: 35, div: 'choir', midi: 65, dur: 1, vel: 0.7 },    // F4
        { t: 32, div: 'pedal', midi: 53, dur: 4, vel: 0.5 },    // F3

        // --- Measure 10: Lyrical tenor with runs ---
        { t: 36, div: 'great', midi: 69, dur: 4, vel: 0.45 },   // A4
        { t: 36, div: 'great', midi: 64, dur: 4, vel: 0.4 },    // E4
        { t: 36, div: 'choir', midi: 65, dur: 1, vel: 0.75 },   // F4
        { t: 37, div: 'choir', midi: 64, dur: 0.5, vel: 0.65 }, // E4
        { t: 37.5, div: 'choir', midi: 62, dur: 0.5, vel: 0.65 },// D4
        { t: 38, div: 'choir', midi: 60, dur: 1, vel: 0.65 },   // C4
        { t: 39, div: 'choir', midi: 58, dur: 1, vel: 0.7 },    // Bb3
        { t: 36, div: 'pedal', midi: 48, dur: 4, vel: 0.5 },    // C3

        // --- Measure 11: Tenor ornamental turn ---
        { t: 40, div: 'great', midi: 70, dur: 2, vel: 0.45 },   // Bb4
        { t: 42, div: 'great', midi: 69, dur: 2, vel: 0.45 },   // A4
        { t: 40, div: 'great', midi: 65, dur: 4, vel: 0.4 },    // F4
        { t: 40, div: 'choir', midi: 57, dur: 0.5, vel: 0.7 },  // A3
        { t: 40.5, div: 'choir', midi: 58, dur: 0.5, vel: 0.65 },// Bb3
        { t: 41, div: 'choir', midi: 57, dur: 0.5, vel: 0.65 }, // A3
        { t: 41.5, div: 'choir', midi: 55, dur: 0.5, vel: 0.65 },// G3
        { t: 42, div: 'choir', midi: 57, dur: 2, vel: 0.7 },    // A3
        { t: 40, div: 'pedal', midi: 53, dur: 4, vel: 0.5 },    // F3

        // --- Measure 12: Approaching cadence ---
        { t: 44, div: 'great', midi: 67, dur: 4, vel: 0.45 },   // G4
        { t: 44, div: 'great', midi: 62, dur: 4, vel: 0.4 },    // D4
        { t: 44, div: 'choir', midi: 58, dur: 1, vel: 0.7 },    // Bb3
        { t: 45, div: 'choir', midi: 57, dur: 1, vel: 0.65 },   // A3
        { t: 46, div: 'choir', midi: 55, dur: 1, vel: 0.65 },   // G3
        { t: 47, div: 'choir', midi: 57, dur: 1, vel: 0.7 },    // A3
        { t: 44, div: 'pedal', midi: 46, dur: 2, vel: 0.5 },    // Bb2
        { t: 46, div: 'pedal', midi: 48, dur: 2, vel: 0.5 },    // C3

        // --- Measure 13: Extended run in tenor ---
        { t: 48, div: 'great', midi: 65, dur: 4, vel: 0.45 },   // F4
        { t: 48, div: 'great', midi: 60, dur: 4, vel: 0.4 },    // C4
        { t: 48, div: 'choir', midi: 57, dur: 0.5, vel: 0.7 },  // A3
        { t: 48.5, div: 'choir', midi: 58, dur: 0.5, vel: 0.65 },// Bb3
        { t: 49, div: 'choir', midi: 60, dur: 0.5, vel: 0.65 }, // C4
        { t: 49.5, div: 'choir', midi: 62, dur: 0.5, vel: 0.7 },// D4
        { t: 50, div: 'choir', midi: 64, dur: 0.5, vel: 0.7 },  // E4
        { t: 50.5, div: 'choir', midi: 62, dur: 0.5, vel: 0.65 },// D4
        { t: 51, div: 'choir', midi: 60, dur: 0.5, vel: 0.65 }, // C4
        { t: 51.5, div: 'choir', midi: 58, dur: 0.5, vel: 0.7 },// Bb3
        { t: 48, div: 'pedal', midi: 53, dur: 4, vel: 0.5 },    // F3

        // --- Measure 14: Cadential turn ---
        { t: 52, div: 'great', midi: 64, dur: 2, vel: 0.45 },   // E4
        { t: 54, div: 'great', midi: 62, dur: 2, vel: 0.45 },   // D4
        { t: 52, div: 'great', midi: 61, dur: 4, vel: 0.4 },    // C#4
        { t: 52, div: 'choir', midi: 57, dur: 1, vel: 0.7 },    // A3
        { t: 53, div: 'choir', midi: 55, dur: 1, vel: 0.65 },   // G3
        { t: 54, div: 'choir', midi: 57, dur: 0.5, vel: 0.65 }, // A3 turn
        { t: 54.5, div: 'choir', midi: 58, dur: 0.5, vel: 0.6 },// Bb3
        { t: 55, div: 'choir', midi: 57, dur: 1, vel: 0.7 },    // A3
        { t: 52, div: 'pedal', midi: 45, dur: 4, vel: 0.5 },    // A2

        // --- Measure 15: Final phrase - gentle closing ---
        { t: 56, div: 'great', midi: 65, dur: 2, vel: 0.45 },   // F4
        { t: 58, div: 'great', midi: 64, dur: 2, vel: 0.45 },   // E4
        { t: 56, div: 'great', midi: 62, dur: 4, vel: 0.4 },    // D4
        { t: 56, div: 'choir', midi: 57, dur: 1, vel: 0.65 },   // A3
        { t: 57, div: 'choir', midi: 58, dur: 1, vel: 0.65 },   // Bb3
        { t: 58, div: 'choir', midi: 57, dur: 1, vel: 0.6 },    // A3
        { t: 59, div: 'choir', midi: 55, dur: 1, vel: 0.6 },    // G3
        { t: 56, div: 'pedal', midi: 50, dur: 4, vel: 0.5 },    // D3

        // ============================================================
        // Third phrase - final elaboration before closing
        // Extended ornamental tenor passage, richest writing
        // ============================================================

        // --- Measure 16: New phrase opening ---
        { t: 60, div: 'great', midi: 69, dur: 2, vel: 0.45 },   // A4
        { t: 62, div: 'great', midi: 72, dur: 2, vel: 0.45 },   // C5
        { t: 60, div: 'great', midi: 65, dur: 4, vel: 0.4 },    // F4
        { t: 60, div: 'choir', midi: 57, dur: 1, vel: 0.7 },    // A3
        { t: 61, div: 'choir', midi: 58, dur: 1, vel: 0.65 },   // Bb3
        { t: 62, div: 'choir', midi: 60, dur: 1, vel: 0.65 },   // C4
        { t: 63, div: 'choir', midi: 62, dur: 1, vel: 0.7 },    // D4
        { t: 60, div: 'pedal', midi: 53, dur: 4, vel: 0.5 },    // F3

        // --- Measure 17: Tenor ascending with ornament ---
        { t: 64, div: 'great', midi: 70, dur: 4, vel: 0.45 },   // Bb4
        { t: 64, div: 'great', midi: 65, dur: 4, vel: 0.4 },    // F4
        { t: 64, div: 'choir', midi: 64, dur: 0.5, vel: 0.7 },  // E4
        { t: 64.5, div: 'choir', midi: 65, dur: 0.5, vel: 0.65 },// F4
        { t: 65, div: 'choir', midi: 64, dur: 0.5, vel: 0.65 }, // E4
        { t: 65.5, div: 'choir', midi: 62, dur: 0.5, vel: 0.65 },// D4
        { t: 66, div: 'choir', midi: 60, dur: 1, vel: 0.65 },   // C4
        { t: 67, div: 'choir', midi: 62, dur: 1, vel: 0.7 },    // D4
        { t: 64, div: 'pedal', midi: 46, dur: 4, vel: 0.5 },    // Bb2

        // --- Measure 18: Dramatic tenor run ---
        { t: 68, div: 'great', midi: 69, dur: 2, vel: 0.45 },   // A4
        { t: 70, div: 'great', midi: 67, dur: 2, vel: 0.45 },   // G4
        { t: 68, div: 'great', midi: 64, dur: 4, vel: 0.4 },    // E4
        { t: 68, div: 'choir', midi: 60, dur: 0.5, vel: 0.7 },  // C4
        { t: 68.5, div: 'choir', midi: 62, dur: 0.5, vel: 0.65 },// D4
        { t: 69, div: 'choir', midi: 64, dur: 0.5, vel: 0.7 },  // E4
        { t: 69.5, div: 'choir', midi: 65, dur: 0.5, vel: 0.7 },// F4
        { t: 70, div: 'choir', midi: 64, dur: 0.5, vel: 0.65 }, // E4
        { t: 70.5, div: 'choir', midi: 62, dur: 0.5, vel: 0.65 },// D4
        { t: 71, div: 'choir', midi: 60, dur: 0.5, vel: 0.65 }, // C4
        { t: 71.5, div: 'choir', midi: 58, dur: 0.5, vel: 0.7 },// Bb3
        { t: 68, div: 'pedal', midi: 48, dur: 2, vel: 0.5 },    // C3
        { t: 70, div: 'pedal', midi: 45, dur: 2, vel: 0.5 },    // A2

        // --- Measure 19: Tenor reaches climax ---
        { t: 72, div: 'great', midi: 65, dur: 4, vel: 0.45 },   // F4
        { t: 72, div: 'great', midi: 60, dur: 4, vel: 0.4 },    // C4
        { t: 72, div: 'choir', midi: 57, dur: 1, vel: 0.75 },   // A3 (peak approach)
        { t: 73, div: 'choir', midi: 60, dur: 1, vel: 0.7 },    // C4
        { t: 74, div: 'choir', midi: 62, dur: 1, vel: 0.7 },    // D4
        { t: 75, div: 'choir', midi: 65, dur: 1, vel: 0.75 },   // F4 (peak)
        { t: 72, div: 'pedal', midi: 53, dur: 4, vel: 0.5 },    // F3

        // --- Measure 20: Graceful descent with port de voix ---
        { t: 76, div: 'great', midi: 67, dur: 2, vel: 0.45 },   // G4
        { t: 78, div: 'great', midi: 65, dur: 2, vel: 0.45 },   // F4
        { t: 76, div: 'great', midi: 62, dur: 4, vel: 0.4 },    // D4
        { t: 76, div: 'choir', midi: 64, dur: 0.5, vel: 0.7 },  // E4
        { t: 76.5, div: 'choir', midi: 62, dur: 0.5, vel: 0.65 },// D4
        { t: 77, div: 'choir', midi: 61, dur: 0.5, vel: 0.65 }, // C#4
        { t: 77.5, div: 'choir', midi: 62, dur: 0.5, vel: 0.65 },// D4
        { t: 78, div: 'choir', midi: 60, dur: 1, vel: 0.65 },   // C4
        { t: 79, div: 'choir', midi: 58, dur: 1, vel: 0.7 },    // Bb3
        { t: 76, div: 'pedal', midi: 55, dur: 2, vel: 0.5 },    // G3
        { t: 78, div: 'pedal', midi: 53, dur: 2, vel: 0.5 },    // F3

        // --- Measure 21: Final cadential preparation ---
        { t: 80, div: 'great', midi: 64, dur: 2, vel: 0.45 },   // E4
        { t: 82, div: 'great', midi: 62, dur: 2, vel: 0.45 },   // D4
        { t: 80, div: 'great', midi: 61, dur: 4, vel: 0.4 },    // C#4
        { t: 80, div: 'choir', midi: 57, dur: 1, vel: 0.7 },    // A3
        { t: 81, div: 'choir', midi: 55, dur: 1, vel: 0.65 },   // G3
        { t: 82, div: 'choir', midi: 57, dur: 0.5, vel: 0.65 }, // A3
        { t: 82.5, div: 'choir', midi: 58, dur: 0.5, vel: 0.6 },// Bb3
        { t: 83, div: 'choir', midi: 57, dur: 1, vel: 0.7 },    // A3
        { t: 80, div: 'pedal', midi: 45, dur: 4, vel: 0.5 },    // A2

        // --- Measure 22: Closing passage ---
        { t: 84, div: 'great', midi: 65, dur: 2, vel: 0.45 },   // F4
        { t: 86, div: 'great', midi: 64, dur: 2, vel: 0.45 },   // E4
        { t: 84, div: 'great', midi: 62, dur: 4, vel: 0.4 },    // D4
        { t: 84, div: 'choir', midi: 57, dur: 1, vel: 0.65 },   // A3
        { t: 85, div: 'choir', midi: 58, dur: 1, vel: 0.65 },   // Bb3
        { t: 86, div: 'choir', midi: 57, dur: 1, vel: 0.6 },    // A3
        { t: 87, div: 'choir', midi: 55, dur: 1, vel: 0.6 },    // G3
        { t: 84, div: 'pedal', midi: 50, dur: 4, vel: 0.5 },    // D3

        // --- Measure 23: Final D minor chord ---
        { t: 88, div: 'great', midi: 62, dur: 6, vel: 0.4 },    // D4
        { t: 88, div: 'great', midi: 57, dur: 6, vel: 0.35 },   // A3
        { t: 88, div: 'choir', midi: 53, dur: 6, vel: 0.6 },    // F3 tenor
        { t: 88, div: 'pedal', midi: 38, dur: 6, vel: 0.5 },    // D2
    ]
};


// ============================================================
// 4. Bruhns - Praeludium in E minor (the "Great")
// ============================================================
// North German stylus fantasticus masterwork
// Alternating free and fugal sections, virtuosic pedal
// Opening chromatic flourish spanning B to E
// Structure: Toccata - Fugue 1 (chromatic) - Free section - Fugue 2
// Tempo: ~80 BPM (variable, fantasticus style)
//
// MIDI: E2=40 B2=47 C3=48 D3=50 E3=52 F#3=54 G3=55 A3=57
//       B3=59 C4=60 D4=62 E4=64 F#4=66 G4=67 A4=69 B4=71
//       C5=72 D5=74 E5=76 F#5=78 G5=79 A5=81
// ============================================================

const PIECE_BRUHNS_E_MINOR = {
    title: "Praeludium in E minor",
    composer: "Nicolaus Bruhns",
    catalog: "",
    key: "E minor",
    tempo: 80,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture'],
        swell: ['sw-gedeckt8', 'sw-salicional8'],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ============================================================
        // Section A - Opening Toccata: Chromatic flourish
        // Dramatic pedal solo expanding from E minor triad
        // The flourish covers nearly a chromatic octave B to E
        // ============================================================

        // --- Measure 1: Dramatic pedal solo opening ---
        { t: 0, div: 'pedal', midi: 40, dur: 1, vel: 0.85 },    // E2
        { t: 1, div: 'pedal', midi: 47, dur: 1, vel: 0.8 },     // B2
        { t: 2, div: 'pedal', midi: 52, dur: 2, vel: 0.85 },    // E3

        // --- Measure 2: Pedal flourish continues ---
        { t: 4, div: 'pedal', midi: 50, dur: 1, vel: 0.8 },     // D3
        { t: 5, div: 'pedal', midi: 48, dur: 1, vel: 0.8 },     // C3
        { t: 6, div: 'pedal', midi: 47, dur: 1, vel: 0.8 },     // B2
        { t: 7, div: 'pedal', midi: 45, dur: 1, vel: 0.8 },     // A2

        // --- Measure 3: Chromatic pedal descent ---
        { t: 8, div: 'pedal', midi: 47, dur: 0.5, vel: 0.85 },  // B2
        { t: 8.5, div: 'pedal', midi: 46, dur: 0.5, vel: 0.8 }, // Bb2
        { t: 9, div: 'pedal', midi: 45, dur: 0.5, vel: 0.8 },   // A2
        { t: 9.5, div: 'pedal', midi: 44, dur: 0.5, vel: 0.8 }, // Ab2
        { t: 10, div: 'pedal', midi: 43, dur: 0.5, vel: 0.8 },  // G2
        { t: 10.5, div: 'pedal', midi: 42, dur: 0.5, vel: 0.8 },// F#2
        { t: 11, div: 'pedal', midi: 40, dur: 1, vel: 0.85 },   // E2

        // --- Measure 4: Manuals enter with chords over pedal ---
        { t: 12, div: 'great', midi: 76, dur: 2, vel: 0.8 },    // E5
        { t: 12, div: 'great', midi: 71, dur: 2, vel: 0.75 },   // B4
        { t: 12, div: 'great', midi: 67, dur: 2, vel: 0.75 },   // G4
        { t: 12, div: 'pedal', midi: 52, dur: 4, vel: 0.85 },   // E3
        { t: 14, div: 'great', midi: 74, dur: 1, vel: 0.75 },   // D5
        { t: 14, div: 'great', midi: 71, dur: 1, vel: 0.7 },    // B4
        { t: 14, div: 'great', midi: 66, dur: 1, vel: 0.7 },    // F#4
        { t: 15, div: 'great', midi: 72, dur: 1, vel: 0.8 },    // C5
        { t: 15, div: 'great', midi: 69, dur: 1, vel: 0.75 },   // A4
        { t: 15, div: 'great', midi: 64, dur: 1, vel: 0.75 },   // E4

        // --- Measure 5: Rapid manual figuration ---
        { t: 16, div: 'great', midi: 71, dur: 0.5, vel: 0.8 },  // B4
        { t: 16.5, div: 'great', midi: 72, dur: 0.5, vel: 0.75 },// C5
        { t: 17, div: 'great', midi: 74, dur: 0.5, vel: 0.75 }, // D5
        { t: 17.5, div: 'great', midi: 76, dur: 0.5, vel: 0.8 },// E5
        { t: 18, div: 'great', midi: 78, dur: 1, vel: 0.85 },   // F#5
        { t: 19, div: 'great', midi: 76, dur: 1, vel: 0.8 },    // E5
        { t: 16, div: 'swell', midi: 64, dur: 4, vel: 0.65 },   // E4
        { t: 16, div: 'pedal', midi: 47, dur: 4, vel: 0.8 },    // B2

        // --- Measure 6: Descending passage to cadence ---
        { t: 20, div: 'great', midi: 74, dur: 1, vel: 0.8 },    // D5
        { t: 21, div: 'great', midi: 72, dur: 1, vel: 0.75 },   // C5
        { t: 22, div: 'great', midi: 71, dur: 1, vel: 0.75 },   // B4
        { t: 23, div: 'great', midi: 69, dur: 1, vel: 0.8 },    // A4
        { t: 20, div: 'swell', midi: 62, dur: 2, vel: 0.65 },   // D4
        { t: 22, div: 'swell', midi: 60, dur: 2, vel: 0.65 },   // C4
        { t: 20, div: 'pedal', midi: 50, dur: 2, vel: 0.8 },    // D3
        { t: 22, div: 'pedal', midi: 45, dur: 2, vel: 0.8 },    // A2

        // --- Measure 7: Half cadence flourish ---
        { t: 24, div: 'great', midi: 71, dur: 0.5, vel: 0.85 }, // B4
        { t: 24.5, div: 'great', midi: 69, dur: 0.5, vel: 0.8 },// A4
        { t: 25, div: 'great', midi: 67, dur: 0.5, vel: 0.8 },  // G4
        { t: 25.5, div: 'great', midi: 66, dur: 0.5, vel: 0.8 },// F#4
        { t: 26, div: 'great', midi: 64, dur: 2, vel: 0.85 },   // E4 held
        { t: 24, div: 'swell', midi: 59, dur: 4, vel: 0.65 },   // B3
        { t: 24, div: 'pedal', midi: 40, dur: 4, vel: 0.85 },   // E2

        // ============================================================
        // Section B - Fugue 1: Chromatic subject
        // Subject descends chromatically over a 4th: B-A#-A-G#-G-F#
        // ============================================================

        // --- Measure 8: Fugue subject - soprano entry ---
        { t: 28, div: 'great', midi: 71, dur: 1, vel: 0.75 },   // B4
        { t: 29, div: 'great', midi: 70, dur: 1, vel: 0.7 },    // Bb4 (A#)
        { t: 30, div: 'great', midi: 69, dur: 1, vel: 0.7 },    // A4
        { t: 31, div: 'great', midi: 68, dur: 1, vel: 0.7 },    // Ab4 (G#)

        // --- Measure 9: Subject continues ---
        { t: 32, div: 'great', midi: 67, dur: 1, vel: 0.7 },    // G4
        { t: 33, div: 'great', midi: 66, dur: 1, vel: 0.75 },   // F#4
        { t: 34, div: 'great', midi: 64, dur: 2, vel: 0.75 },   // E4

        // --- Measure 10: Alto answer at the 5th (E) ---
        { t: 36, div: 'great', midi: 67, dur: 2, vel: 0.75 },   // G4 soprano counter
        { t: 38, div: 'great', midi: 66, dur: 2, vel: 0.7 },    // F#4
        { t: 36, div: 'swell', midi: 64, dur: 1, vel: 0.7 },    // E4 answer
        { t: 37, div: 'swell', midi: 63, dur: 1, vel: 0.65 },   // Eb4 (D#)
        { t: 38, div: 'swell', midi: 62, dur: 1, vel: 0.65 },   // D4
        { t: 39, div: 'swell', midi: 61, dur: 1, vel: 0.65 },   // C#4

        // --- Measure 11: Answer continues, soprano countersubject ---
        { t: 40, div: 'great', midi: 64, dur: 1, vel: 0.75 },   // E4
        { t: 41, div: 'great', midi: 66, dur: 1, vel: 0.7 },    // F#4
        { t: 42, div: 'great', midi: 67, dur: 2, vel: 0.75 },   // G4
        { t: 40, div: 'swell', midi: 60, dur: 1, vel: 0.65 },   // C4
        { t: 41, div: 'swell', midi: 59, dur: 1, vel: 0.7 },    // B3
        { t: 42, div: 'swell', midi: 57, dur: 2, vel: 0.7 },    // A3

        // --- Measure 12: Tenor entry ---
        { t: 44, div: 'great', midi: 69, dur: 2, vel: 0.75 },   // A4
        { t: 46, div: 'great', midi: 67, dur: 2, vel: 0.7 },    // G4
        { t: 44, div: 'swell', midi: 59, dur: 4, vel: 0.65 },   // B3 alto held
        { t: 44, div: 'swell', midi: 47, dur: 1, vel: 0.7 },    // B2 tenor subject
        { t: 45, div: 'swell', midi: 46, dur: 1, vel: 0.65 },   // Bb2
        { t: 46, div: 'swell', midi: 45, dur: 1, vel: 0.65 },   // A2
        { t: 47, div: 'swell', midi: 44, dur: 1, vel: 0.65 },   // Ab2

        // --- Measure 13: Tenor subject continues + bass entry ---
        { t: 48, div: 'great', midi: 71, dur: 2, vel: 0.75 },   // B4
        { t: 50, div: 'great', midi: 69, dur: 2, vel: 0.7 },    // A4
        { t: 48, div: 'swell', midi: 60, dur: 4, vel: 0.65 },   // C4
        { t: 48, div: 'swell', midi: 43, dur: 1, vel: 0.65 },   // G2 tenor
        { t: 49, div: 'swell', midi: 42, dur: 1, vel: 0.7 },    // F#2
        { t: 50, div: 'swell', midi: 40, dur: 2, vel: 0.7 },    // E2
        { t: 48, div: 'pedal', midi: 52, dur: 1, vel: 0.8 },    // E3 bass
        { t: 49, div: 'pedal', midi: 51, dur: 1, vel: 0.75 },   // Eb3
        { t: 50, div: 'pedal', midi: 50, dur: 1, vel: 0.75 },   // D3
        { t: 51, div: 'pedal', midi: 49, dur: 1, vel: 0.75 },   // C#3

        // --- Measure 14: Bass subject continues ---
        { t: 52, div: 'great', midi: 67, dur: 4, vel: 0.7 },    // G4
        { t: 52, div: 'swell', midi: 64, dur: 2, vel: 0.65 },   // E4
        { t: 54, div: 'swell', midi: 62, dur: 2, vel: 0.65 },   // D4
        { t: 52, div: 'pedal', midi: 48, dur: 1, vel: 0.75 },   // C3
        { t: 53, div: 'pedal', midi: 47, dur: 1, vel: 0.8 },    // B2
        { t: 54, div: 'pedal', midi: 45, dur: 2, vel: 0.8 },    // A2

        // --- Measure 15: Fugal episode - sequential passages ---
        { t: 56, div: 'great', midi: 71, dur: 1, vel: 0.75 },   // B4
        { t: 57, div: 'great', midi: 69, dur: 1, vel: 0.7 },    // A4
        { t: 58, div: 'great', midi: 67, dur: 1, vel: 0.7 },    // G4
        { t: 59, div: 'great', midi: 66, dur: 1, vel: 0.75 },   // F#4
        { t: 56, div: 'swell', midi: 59, dur: 2, vel: 0.65 },   // B3
        { t: 58, div: 'swell', midi: 57, dur: 2, vel: 0.65 },   // A3
        { t: 56, div: 'pedal', midi: 47, dur: 4, vel: 0.8 },    // B2

        // --- Measure 16: Stretto and climax ---
        { t: 60, div: 'great', midi: 64, dur: 1, vel: 0.75 },   // E4
        { t: 61, div: 'great', midi: 66, dur: 1, vel: 0.75 },   // F#4
        { t: 62, div: 'great', midi: 67, dur: 1, vel: 0.8 },    // G4
        { t: 63, div: 'great', midi: 69, dur: 1, vel: 0.8 },    // A4
        { t: 60, div: 'swell', midi: 59, dur: 1, vel: 0.7 },    // B3 stretto
        { t: 61, div: 'swell', midi: 58, dur: 1, vel: 0.65 },   // Bb3
        { t: 62, div: 'swell', midi: 57, dur: 1, vel: 0.65 },   // A3
        { t: 63, div: 'swell', midi: 56, dur: 1, vel: 0.65 },   // Ab3
        { t: 60, div: 'pedal', midi: 40, dur: 4, vel: 0.8 },    // E2

        // ============================================================
        // Section C - Free fantasia: Diverse textures
        // Alternating manual/pedal passages, echo effects
        // ============================================================

        // --- Measure 17: Free passage - rapid scales ---
        { t: 64, div: 'great', midi: 71, dur: 0.5, vel: 0.8 },  // B4
        { t: 64.5, div: 'great', midi: 72, dur: 0.5, vel: 0.75 },// C5
        { t: 65, div: 'great', midi: 74, dur: 0.5, vel: 0.75 }, // D5
        { t: 65.5, div: 'great', midi: 76, dur: 0.5, vel: 0.8 },// E5
        { t: 66, div: 'great', midi: 74, dur: 0.5, vel: 0.75 }, // D5
        { t: 66.5, div: 'great', midi: 72, dur: 0.5, vel: 0.75 },// C5
        { t: 67, div: 'great', midi: 71, dur: 0.5, vel: 0.75 }, // B4
        { t: 67.5, div: 'great', midi: 69, dur: 0.5, vel: 0.75 },// A4
        { t: 64, div: 'pedal', midi: 52, dur: 4, vel: 0.8 },    // E3

        // --- Measure 18: Echo effect between manuals ---
        { t: 68, div: 'great', midi: 76, dur: 2, vel: 0.8 },    // E5 forte
        { t: 70, div: 'swell', midi: 76, dur: 2, vel: 0.5 },    // E5 echo (piano)
        { t: 68, div: 'great', midi: 71, dur: 2, vel: 0.75 },   // B4
        { t: 70, div: 'swell', midi: 71, dur: 2, vel: 0.45 },   // B4 echo
        { t: 68, div: 'pedal', midi: 40, dur: 4, vel: 0.8 },    // E2

        // --- Measure 19: Pedal solo passage ---
        { t: 72, div: 'pedal', midi: 52, dur: 1, vel: 0.85 },   // E3
        { t: 73, div: 'pedal', midi: 54, dur: 1, vel: 0.8 },    // F#3
        { t: 74, div: 'pedal', midi: 55, dur: 1, vel: 0.8 },    // G3
        { t: 75, div: 'pedal', midi: 57, dur: 1, vel: 0.8 },    // A3

        // --- Measure 20: Pedal continues with manual chords ---
        { t: 76, div: 'great', midi: 71, dur: 4, vel: 0.75 },   // B4
        { t: 76, div: 'great', midi: 66, dur: 4, vel: 0.7 },    // F#4
        { t: 76, div: 'swell', midi: 62, dur: 4, vel: 0.65 },   // D4
        { t: 76, div: 'pedal', midi: 59, dur: 1, vel: 0.85 },   // B3
        { t: 77, div: 'pedal', midi: 57, dur: 1, vel: 0.8 },    // A3
        { t: 78, div: 'pedal', midi: 55, dur: 1, vel: 0.8 },    // G3
        { t: 79, div: 'pedal', midi: 54, dur: 1, vel: 0.8 },    // F#3

        // --- Measure 21: Virtuosic pedal with chord changes ---
        { t: 80, div: 'great', midi: 72, dur: 2, vel: 0.75 },   // C5
        { t: 82, div: 'great', midi: 69, dur: 2, vel: 0.75 },   // A4
        { t: 80, div: 'great', midi: 67, dur: 2, vel: 0.7 },    // G4
        { t: 82, div: 'great', midi: 64, dur: 2, vel: 0.7 },    // E4
        { t: 80, div: 'pedal', midi: 55, dur: 0.5, vel: 0.85 }, // G3
        { t: 80.5, div: 'pedal', midi: 54, dur: 0.5, vel: 0.8 },// F#3
        { t: 81, div: 'pedal', midi: 52, dur: 0.5, vel: 0.8 },  // E3
        { t: 81.5, div: 'pedal', midi: 50, dur: 0.5, vel: 0.8 },// D3
        { t: 82, div: 'pedal', midi: 48, dur: 0.5, vel: 0.8 },  // C3
        { t: 82.5, div: 'pedal', midi: 47, dur: 0.5, vel: 0.8 },// B2
        { t: 83, div: 'pedal', midi: 45, dur: 1, vel: 0.85 },   // A2

        // ============================================================
        // Section D - Fugue 2: Sprightly, energetic subject
        // Contrasts with chromatic first fugue
        // ============================================================

        // --- Measure 22: Fugue 2 subject in soprano ---
        { t: 84, div: 'great', midi: 64, dur: 1, vel: 0.8 },    // E4
        { t: 85, div: 'great', midi: 66, dur: 0.5, vel: 0.75 }, // F#4
        { t: 85.5, div: 'great', midi: 67, dur: 0.5, vel: 0.75 },// G4
        { t: 86, div: 'great', midi: 69, dur: 1, vel: 0.8 },    // A4
        { t: 87, div: 'great', midi: 71, dur: 1, vel: 0.8 },    // B4

        // --- Measure 23: Subject continues ---
        { t: 88, div: 'great', midi: 72, dur: 1, vel: 0.8 },    // C5
        { t: 89, div: 'great', midi: 71, dur: 0.5, vel: 0.75 }, // B4
        { t: 89.5, div: 'great', midi: 69, dur: 0.5, vel: 0.75 },// A4
        { t: 90, div: 'great', midi: 67, dur: 1, vel: 0.75 },   // G4
        { t: 91, div: 'great', midi: 64, dur: 1, vel: 0.8 },    // E4

        // --- Measure 24: Answer in alto ---
        { t: 92, div: 'great', midi: 66, dur: 2, vel: 0.75 },   // F#4 soprano cpt
        { t: 94, div: 'great', midi: 67, dur: 2, vel: 0.75 },   // G4
        { t: 92, div: 'swell', midi: 59, dur: 1, vel: 0.7 },    // B3 answer
        { t: 93, div: 'swell', midi: 60, dur: 0.5, vel: 0.65 }, // C4
        { t: 93.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.65 },// D4
        { t: 94, div: 'swell', midi: 64, dur: 1, vel: 0.7 },    // E4
        { t: 95, div: 'swell', midi: 66, dur: 1, vel: 0.7 },    // F#4

        // --- Measure 25: Answer continues + tenor ---
        { t: 96, div: 'great', midi: 71, dur: 2, vel: 0.8 },    // B4
        { t: 98, div: 'great', midi: 69, dur: 2, vel: 0.75 },   // A4
        { t: 96, div: 'swell', midi: 67, dur: 1, vel: 0.7 },    // G4
        { t: 97, div: 'swell', midi: 66, dur: 0.5, vel: 0.65 }, // F#4
        { t: 97.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.65 },// E4
        { t: 98, div: 'swell', midi: 62, dur: 1, vel: 0.65 },   // D4
        { t: 99, div: 'swell', midi: 59, dur: 1, vel: 0.7 },    // B3

        // --- Measure 26: All voices building tension ---
        { t: 100, div: 'great', midi: 71, dur: 1, vel: 0.8 },   // B4
        { t: 101, div: 'great', midi: 72, dur: 1, vel: 0.8 },   // C5
        { t: 102, div: 'great', midi: 74, dur: 1, vel: 0.85 },  // D5
        { t: 103, div: 'great', midi: 76, dur: 1, vel: 0.85 },  // E5
        { t: 100, div: 'swell', midi: 64, dur: 2, vel: 0.7 },   // E4
        { t: 102, div: 'swell', midi: 62, dur: 2, vel: 0.65 },  // D4
        { t: 100, div: 'pedal', midi: 52, dur: 1, vel: 0.8 },   // E3
        { t: 101, div: 'pedal', midi: 54, dur: 1, vel: 0.8 },   // F#3
        { t: 102, div: 'pedal', midi: 55, dur: 1, vel: 0.8 },   // G3
        { t: 103, div: 'pedal', midi: 57, dur: 1, vel: 0.8 },   // A3

        // --- Measure 27: Climactic passage ---
        { t: 104, div: 'great', midi: 76, dur: 2, vel: 0.85 },  // E5
        { t: 106, div: 'great', midi: 74, dur: 1, vel: 0.8 },   // D5
        { t: 107, div: 'great', midi: 72, dur: 1, vel: 0.8 },   // C5
        { t: 104, div: 'swell', midi: 67, dur: 2, vel: 0.7 },   // G4
        { t: 106, div: 'swell', midi: 66, dur: 2, vel: 0.7 },   // F#4
        { t: 104, div: 'pedal', midi: 47, dur: 4, vel: 0.85 },  // B2

        // --- Measure 28: Final cadence - E minor ---
        { t: 108, div: 'great', midi: 71, dur: 2, vel: 0.85 },  // B4
        { t: 110, div: 'great', midi: 76, dur: 2, vel: 0.85 },  // E5
        { t: 108, div: 'great', midi: 64, dur: 4, vel: 0.75 },  // E4
        { t: 108, div: 'swell', midi: 59, dur: 4, vel: 0.7 },   // B3
        { t: 108, div: 'pedal', midi: 47, dur: 2, vel: 0.85 },  // B2
        { t: 110, div: 'pedal', midi: 40, dur: 2, vel: 0.85 },  // E2

        // --- Measure 29: Final E minor chord ---
        { t: 112, div: 'great', midi: 76, dur: 6, vel: 0.8 },   // E5
        { t: 112, div: 'great', midi: 71, dur: 6, vel: 0.75 },  // B4
        { t: 112, div: 'great', midi: 67, dur: 6, vel: 0.75 },  // G4
        { t: 112, div: 'swell', midi: 64, dur: 6, vel: 0.7 },   // E4
        { t: 112, div: 'pedal', midi: 40, dur: 6, vel: 0.85 },  // E2
    ]
};


// ============================================================
// 5. Bohm - Vater unser im Himmelreich
// ============================================================
// Chorale partita (variations) on "Our Father in Heaven"
// Luther's hymn tune (1539), D minor setting
// Böhm invented the chorale partita genre
// Theme + 4 variations of increasing ornamentation
// Tempo: ~66 BPM (chorale tempo, varies per variation)
//
// The chorale melody: D-D-A-A-G-F-E-D (first phrase)
// 6-line chorale stanza, AAB bar form
//
// MIDI: D2=38 A2=45 D3=50 E3=52 F3=53 G3=55 A3=57 Bb3=58
//       C4=60 C#4=61 D4=62 E4=64 F4=65 G4=67 A4=69 Bb4=70
//       C5=72 D5=74
// ============================================================

const PIECE_BOHM_VATER = {
    title: "Vater unser im Himmelreich",
    composer: "Georg Bohm",
    catalog: "",
    key: "D minor",
    tempo: 66,
    registration: {
        great: ['gt-principal8', 'gt-octave4'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-tremulant'],
        choir: ['ch-flute8'],
        pedal: ['pd-subbass32', 'pd-octave8']
    },
    events: [
        // ============================================================
        // THEME: Plain chorale harmonization
        // Melody in soprano (Great), inner voices (Swell), bass (Pedal)
        // Chorale: D-D-A-A | G-F-E-D | D-E-F-G | A-A-G-F | E-D-C#-D
        // ============================================================

        // --- Phrase 1: D-D-A-A ---
        { t: 0, div: 'great', midi: 62, dur: 2, vel: 0.65 },    // D4
        { t: 0, div: 'swell', midi: 57, dur: 2, vel: 0.55 },    // A3
        { t: 0, div: 'swell', midi: 53, dur: 2, vel: 0.5 },     // F3
        { t: 0, div: 'pedal', midi: 50, dur: 2, vel: 0.6 },     // D3
        { t: 2, div: 'great', midi: 62, dur: 2, vel: 0.65 },    // D4
        { t: 2, div: 'swell', midi: 57, dur: 2, vel: 0.55 },    // A3
        { t: 2, div: 'swell', midi: 53, dur: 2, vel: 0.5 },     // F3
        { t: 2, div: 'pedal', midi: 50, dur: 2, vel: 0.6 },     // D3
        { t: 4, div: 'great', midi: 69, dur: 2, vel: 0.65 },    // A4
        { t: 4, div: 'swell', midi: 64, dur: 2, vel: 0.55 },    // E4
        { t: 4, div: 'swell', midi: 60, dur: 2, vel: 0.5 },     // C4
        { t: 4, div: 'pedal', midi: 45, dur: 2, vel: 0.6 },     // A2
        { t: 6, div: 'great', midi: 69, dur: 2, vel: 0.65 },    // A4
        { t: 6, div: 'swell', midi: 65, dur: 2, vel: 0.55 },    // F4
        { t: 6, div: 'swell', midi: 60, dur: 2, vel: 0.5 },     // C4
        { t: 6, div: 'pedal', midi: 53, dur: 2, vel: 0.6 },     // F3

        // --- Phrase 2: G-F-E-D ---
        { t: 8, div: 'great', midi: 67, dur: 2, vel: 0.65 },    // G4
        { t: 8, div: 'swell', midi: 62, dur: 2, vel: 0.55 },    // D4
        { t: 8, div: 'swell', midi: 58, dur: 2, vel: 0.5 },     // Bb3
        { t: 8, div: 'pedal', midi: 55, dur: 2, vel: 0.6 },     // G3
        { t: 10, div: 'great', midi: 65, dur: 2, vel: 0.65 },   // F4
        { t: 10, div: 'swell', midi: 60, dur: 2, vel: 0.55 },   // C4
        { t: 10, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 10, div: 'pedal', midi: 53, dur: 2, vel: 0.6 },    // F3
        { t: 12, div: 'great', midi: 64, dur: 2, vel: 0.65 },   // E4
        { t: 12, div: 'swell', midi: 61, dur: 2, vel: 0.55 },   // C#4
        { t: 12, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 12, div: 'pedal', midi: 45, dur: 2, vel: 0.6 },    // A2
        { t: 14, div: 'great', midi: 62, dur: 2, vel: 0.65 },   // D4
        { t: 14, div: 'swell', midi: 57, dur: 2, vel: 0.55 },   // A3
        { t: 14, div: 'swell', midi: 53, dur: 2, vel: 0.5 },    // F3
        { t: 14, div: 'pedal', midi: 50, dur: 2, vel: 0.6 },    // D3

        // --- Phrase 3: D-E-F-G ---
        { t: 16, div: 'great', midi: 62, dur: 2, vel: 0.65 },   // D4
        { t: 16, div: 'swell', midi: 58, dur: 2, vel: 0.55 },   // Bb3
        { t: 16, div: 'pedal', midi: 46, dur: 2, vel: 0.6 },    // Bb2
        { t: 18, div: 'great', midi: 64, dur: 2, vel: 0.65 },   // E4
        { t: 18, div: 'swell', midi: 60, dur: 2, vel: 0.55 },   // C4
        { t: 18, div: 'pedal', midi: 48, dur: 2, vel: 0.6 },    // C3
        { t: 20, div: 'great', midi: 65, dur: 2, vel: 0.65 },   // F4
        { t: 20, div: 'swell', midi: 60, dur: 2, vel: 0.55 },   // C4
        { t: 20, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 20, div: 'pedal', midi: 53, dur: 2, vel: 0.6 },    // F3
        { t: 22, div: 'great', midi: 67, dur: 2, vel: 0.65 },   // G4
        { t: 22, div: 'swell', midi: 62, dur: 2, vel: 0.55 },   // D4
        { t: 22, div: 'swell', midi: 58, dur: 2, vel: 0.5 },    // Bb3
        { t: 22, div: 'pedal', midi: 55, dur: 2, vel: 0.6 },    // G3

        // --- Phrase 4: A-A-G-F ---
        { t: 24, div: 'great', midi: 69, dur: 2, vel: 0.65 },   // A4
        { t: 24, div: 'swell', midi: 65, dur: 2, vel: 0.55 },   // F4
        { t: 24, div: 'swell', midi: 60, dur: 2, vel: 0.5 },    // C4
        { t: 24, div: 'pedal', midi: 53, dur: 2, vel: 0.6 },    // F3
        { t: 26, div: 'great', midi: 69, dur: 2, vel: 0.65 },   // A4
        { t: 26, div: 'swell', midi: 64, dur: 2, vel: 0.55 },   // E4
        { t: 26, div: 'swell', midi: 60, dur: 2, vel: 0.5 },    // C4
        { t: 26, div: 'pedal', midi: 45, dur: 2, vel: 0.6 },    // A2
        { t: 28, div: 'great', midi: 67, dur: 2, vel: 0.65 },   // G4
        { t: 28, div: 'swell', midi: 62, dur: 2, vel: 0.55 },   // D4
        { t: 28, div: 'swell', midi: 58, dur: 2, vel: 0.5 },    // Bb3
        { t: 28, div: 'pedal', midi: 55, dur: 2, vel: 0.6 },    // G3
        { t: 30, div: 'great', midi: 65, dur: 2, vel: 0.65 },   // F4
        { t: 30, div: 'swell', midi: 60, dur: 2, vel: 0.55 },   // C4
        { t: 30, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 30, div: 'pedal', midi: 53, dur: 2, vel: 0.6 },    // F3

        // --- Phrase 5 (closing): E-D-C#-D ---
        { t: 32, div: 'great', midi: 64, dur: 2, vel: 0.65 },   // E4
        { t: 32, div: 'swell', midi: 60, dur: 2, vel: 0.55 },   // C4
        { t: 32, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 32, div: 'pedal', midi: 45, dur: 2, vel: 0.6 },    // A2
        { t: 34, div: 'great', midi: 62, dur: 2, vel: 0.65 },   // D4
        { t: 34, div: 'swell', midi: 58, dur: 2, vel: 0.55 },   // Bb3
        { t: 34, div: 'pedal', midi: 55, dur: 2, vel: 0.6 },    // G3
        { t: 36, div: 'great', midi: 61, dur: 2, vel: 0.65 },   // C#4
        { t: 36, div: 'swell', midi: 57, dur: 2, vel: 0.55 },   // A3
        { t: 36, div: 'pedal', midi: 45, dur: 2, vel: 0.6 },    // A2
        { t: 38, div: 'great', midi: 62, dur: 2, vel: 0.65 },   // D4 final
        { t: 38, div: 'swell', midi: 57, dur: 2, vel: 0.55 },   // A3
        { t: 38, div: 'swell', midi: 53, dur: 2, vel: 0.5 },    // F3
        { t: 38, div: 'pedal', midi: 50, dur: 2, vel: 0.6 },    // D3

        // ============================================================
        // VARIATION 1: Melodic embellishment in soprano
        // Chorale tune decorated with passing tones and turns
        // ============================================================

        // --- Var1 Phrase 1: Ornamented D-D-A-A ---
        { t: 40, div: 'great', midi: 62, dur: 1, vel: 0.65 },   // D4
        { t: 41, div: 'great', midi: 64, dur: 0.5, vel: 0.6 },  // E4 passing
        { t: 41.5, div: 'great', midi: 62, dur: 0.5, vel: 0.65 },// D4
        { t: 42, div: 'great', midi: 62, dur: 1, vel: 0.65 },   // D4
        { t: 43, div: 'great', midi: 60, dur: 0.5, vel: 0.6 },  // C4 lower neighbor
        { t: 43.5, div: 'great', midi: 62, dur: 0.5, vel: 0.65 },// D4
        { t: 40, div: 'swell', midi: 57, dur: 4, vel: 0.5 },    // A3
        { t: 40, div: 'swell', midi: 53, dur: 4, vel: 0.45 },   // F3
        { t: 40, div: 'pedal', midi: 50, dur: 4, vel: 0.55 },   // D3

        { t: 44, div: 'great', midi: 69, dur: 1, vel: 0.65 },   // A4
        { t: 45, div: 'great', midi: 70, dur: 0.5, vel: 0.6 },  // Bb4
        { t: 45.5, div: 'great', midi: 69, dur: 0.5, vel: 0.65 },// A4
        { t: 46, div: 'great', midi: 69, dur: 1, vel: 0.65 },   // A4
        { t: 47, div: 'great', midi: 67, dur: 0.5, vel: 0.6 },  // G4 lower neighbor
        { t: 47.5, div: 'great', midi: 69, dur: 0.5, vel: 0.65 },// A4
        { t: 44, div: 'swell', midi: 64, dur: 2, vel: 0.5 },    // E4
        { t: 46, div: 'swell', midi: 65, dur: 2, vel: 0.5 },    // F4
        { t: 44, div: 'swell', midi: 60, dur: 4, vel: 0.45 },   // C4
        { t: 44, div: 'pedal', midi: 45, dur: 2, vel: 0.55 },   // A2
        { t: 46, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },   // F3

        // --- Var1 Phrase 2: Ornamented G-F-E-D ---
        { t: 48, div: 'great', midi: 67, dur: 1, vel: 0.65 },   // G4
        { t: 49, div: 'great', midi: 69, dur: 0.5, vel: 0.6 },  // A4 upper
        { t: 49.5, div: 'great', midi: 67, dur: 0.5, vel: 0.65 },// G4
        { t: 50, div: 'great', midi: 65, dur: 1, vel: 0.65 },   // F4
        { t: 51, div: 'great', midi: 67, dur: 0.5, vel: 0.6 },  // G4
        { t: 51.5, div: 'great', midi: 65, dur: 0.5, vel: 0.65 },// F4
        { t: 48, div: 'swell', midi: 62, dur: 2, vel: 0.5 },    // D4
        { t: 50, div: 'swell', midi: 60, dur: 2, vel: 0.5 },    // C4
        { t: 48, div: 'swell', midi: 58, dur: 4, vel: 0.45 },   // Bb3
        { t: 48, div: 'pedal', midi: 55, dur: 2, vel: 0.55 },   // G3
        { t: 50, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },   // F3

        { t: 52, div: 'great', midi: 64, dur: 1, vel: 0.65 },   // E4
        { t: 53, div: 'great', midi: 65, dur: 0.5, vel: 0.6 },  // F4
        { t: 53.5, div: 'great', midi: 64, dur: 0.5, vel: 0.65 },// E4
        { t: 54, div: 'great', midi: 62, dur: 2, vel: 0.65 },   // D4
        { t: 52, div: 'swell', midi: 61, dur: 2, vel: 0.5 },    // C#4
        { t: 54, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 52, div: 'pedal', midi: 45, dur: 2, vel: 0.55 },   // A2
        { t: 54, div: 'pedal', midi: 50, dur: 2, vel: 0.55 },   // D3

        // ============================================================
        // VARIATION 2: Running sixteenths in right hand
        // Chorale in longer notes while figuration flows
        // ============================================================

        // --- Var2 Phrase 1: Running 16ths around D ---
        { t: 56, div: 'great', midi: 62, dur: 0.5, vel: 0.65 }, // D4
        { t: 56.5, div: 'great', midi: 64, dur: 0.5, vel: 0.6 },// E4
        { t: 57, div: 'great', midi: 65, dur: 0.5, vel: 0.6 },  // F4
        { t: 57.5, div: 'great', midi: 64, dur: 0.5, vel: 0.6 },// E4
        { t: 58, div: 'great', midi: 62, dur: 0.5, vel: 0.65 }, // D4
        { t: 58.5, div: 'great', midi: 60, dur: 0.5, vel: 0.6 },// C4
        { t: 59, div: 'great', midi: 62, dur: 0.5, vel: 0.6 },  // D4
        { t: 59.5, div: 'great', midi: 64, dur: 0.5, vel: 0.6 },// E4
        { t: 56, div: 'swell', midi: 57, dur: 4, vel: 0.5 },    // A3
        { t: 56, div: 'pedal', midi: 50, dur: 4, vel: 0.55 },   // D3

        // Running 16ths around A
        { t: 60, div: 'great', midi: 69, dur: 0.5, vel: 0.65 }, // A4
        { t: 60.5, div: 'great', midi: 70, dur: 0.5, vel: 0.6 },// Bb4
        { t: 61, div: 'great', midi: 72, dur: 0.5, vel: 0.6 },  // C5
        { t: 61.5, div: 'great', midi: 70, dur: 0.5, vel: 0.6 },// Bb4
        { t: 62, div: 'great', midi: 69, dur: 0.5, vel: 0.65 }, // A4
        { t: 62.5, div: 'great', midi: 67, dur: 0.5, vel: 0.6 },// G4
        { t: 63, div: 'great', midi: 69, dur: 0.5, vel: 0.6 },  // A4
        { t: 63.5, div: 'great', midi: 70, dur: 0.5, vel: 0.6 },// Bb4
        { t: 60, div: 'swell', midi: 65, dur: 4, vel: 0.5 },    // F4
        { t: 60, div: 'pedal', midi: 53, dur: 4, vel: 0.55 },   // F3

        // --- Var2 Phrase 2: Running 16ths G-F-E-D ---
        { t: 64, div: 'great', midi: 67, dur: 0.5, vel: 0.65 }, // G4
        { t: 64.5, div: 'great', midi: 69, dur: 0.5, vel: 0.6 },// A4
        { t: 65, div: 'great', midi: 67, dur: 0.5, vel: 0.6 },  // G4
        { t: 65.5, div: 'great', midi: 65, dur: 0.5, vel: 0.6 },// F4
        { t: 66, div: 'great', midi: 65, dur: 0.5, vel: 0.65 }, // F4
        { t: 66.5, div: 'great', midi: 67, dur: 0.5, vel: 0.6 },// G4
        { t: 67, div: 'great', midi: 65, dur: 0.5, vel: 0.6 },  // F4
        { t: 67.5, div: 'great', midi: 64, dur: 0.5, vel: 0.6 },// E4
        { t: 64, div: 'swell', midi: 62, dur: 2, vel: 0.5 },    // D4
        { t: 66, div: 'swell', midi: 60, dur: 2, vel: 0.5 },    // C4
        { t: 64, div: 'pedal', midi: 55, dur: 2, vel: 0.55 },   // G3
        { t: 66, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },   // F3

        { t: 68, div: 'great', midi: 64, dur: 0.5, vel: 0.65 }, // E4
        { t: 68.5, div: 'great', midi: 65, dur: 0.5, vel: 0.6 },// F4
        { t: 69, div: 'great', midi: 64, dur: 0.5, vel: 0.6 },  // E4
        { t: 69.5, div: 'great', midi: 62, dur: 0.5, vel: 0.6 },// D4
        { t: 70, div: 'great', midi: 62, dur: 2, vel: 0.65 },   // D4 held
        { t: 68, div: 'swell', midi: 61, dur: 2, vel: 0.5 },    // C#4
        { t: 70, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 68, div: 'pedal', midi: 45, dur: 2, vel: 0.55 },   // A2
        { t: 70, div: 'pedal', midi: 50, dur: 2, vel: 0.55 },   // D3

        // ============================================================
        // VARIATION 3: Flowing triplets, more elaborate
        // ============================================================

        // --- Var3 Phrase 1: Triplet figuration ---
        { t: 72, div: 'great', midi: 62, dur: 0.67, vel: 0.65 },// D4 triplet
        { t: 72.67, div: 'great', midi: 65, dur: 0.67, vel: 0.6 },// F4
        { t: 73.33, div: 'great', midi: 69, dur: 0.67, vel: 0.6 },// A4
        { t: 74, div: 'great', midi: 62, dur: 0.67, vel: 0.65 },// D4
        { t: 74.67, div: 'great', midi: 64, dur: 0.67, vel: 0.6 },// E4
        { t: 75.33, div: 'great', midi: 65, dur: 0.67, vel: 0.6 },// F4
        { t: 72, div: 'swell', midi: 57, dur: 4, vel: 0.5 },    // A3
        { t: 72, div: 'pedal', midi: 50, dur: 4, vel: 0.55 },   // D3

        { t: 76, div: 'great', midi: 69, dur: 0.67, vel: 0.65 },// A4 triplet
        { t: 76.67, div: 'great', midi: 72, dur: 0.67, vel: 0.6 },// C5
        { t: 77.33, div: 'great', midi: 69, dur: 0.67, vel: 0.6 },// A4
        { t: 78, div: 'great', midi: 69, dur: 0.67, vel: 0.65 },// A4
        { t: 78.67, div: 'great', midi: 67, dur: 0.67, vel: 0.6 },// G4
        { t: 79.33, div: 'great', midi: 69, dur: 0.67, vel: 0.6 },// A4
        { t: 76, div: 'swell', midi: 65, dur: 4, vel: 0.5 },    // F4
        { t: 76, div: 'pedal', midi: 53, dur: 4, vel: 0.55 },   // F3

        // --- Var3 Phrase 2: Triplets on G-F-E-D ---
        { t: 80, div: 'great', midi: 67, dur: 0.67, vel: 0.65 },// G4
        { t: 80.67, div: 'great', midi: 70, dur: 0.67, vel: 0.6 },// Bb4
        { t: 81.33, div: 'great', midi: 67, dur: 0.67, vel: 0.6 },// G4
        { t: 82, div: 'great', midi: 65, dur: 0.67, vel: 0.65 },// F4
        { t: 82.67, div: 'great', midi: 69, dur: 0.67, vel: 0.6 },// A4
        { t: 83.33, div: 'great', midi: 65, dur: 0.67, vel: 0.6 },// F4
        { t: 80, div: 'swell', midi: 62, dur: 2, vel: 0.5 },    // D4
        { t: 82, div: 'swell', midi: 60, dur: 2, vel: 0.5 },    // C4
        { t: 80, div: 'pedal', midi: 55, dur: 2, vel: 0.55 },   // G3
        { t: 82, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },   // F3

        { t: 84, div: 'great', midi: 64, dur: 0.67, vel: 0.65 },// E4
        { t: 84.67, div: 'great', midi: 67, dur: 0.67, vel: 0.6 },// G4
        { t: 85.33, div: 'great', midi: 64, dur: 0.67, vel: 0.6 },// E4
        { t: 86, div: 'great', midi: 62, dur: 2, vel: 0.65 },   // D4
        { t: 84, div: 'swell', midi: 61, dur: 2, vel: 0.5 },    // C#4
        { t: 86, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 84, div: 'pedal', midi: 45, dur: 2, vel: 0.55 },   // A2
        { t: 86, div: 'pedal', midi: 50, dur: 2, vel: 0.55 },   // D3

        // ============================================================
        // VARIATION 4: Grand finale with full texture
        // Rich chords and sustained melody
        // ============================================================

        // --- Var4: Full texture, majestic conclusion ---
        { t: 88, div: 'great', midi: 74, dur: 2, vel: 0.7 },    // D5 high melody
        { t: 88, div: 'great', midi: 69, dur: 2, vel: 0.65 },   // A4
        { t: 88, div: 'swell', midi: 62, dur: 2, vel: 0.55 },   // D4
        { t: 88, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 88, div: 'pedal', midi: 50, dur: 2, vel: 0.6 },    // D3
        { t: 90, div: 'great', midi: 74, dur: 2, vel: 0.7 },    // D5
        { t: 90, div: 'great', midi: 69, dur: 2, vel: 0.65 },   // A4
        { t: 90, div: 'swell', midi: 65, dur: 2, vel: 0.55 },   // F4
        { t: 90, div: 'pedal', midi: 50, dur: 2, vel: 0.6 },    // D3

        { t: 92, div: 'great', midi: 81, dur: 2, vel: 0.7 },    // A5
        { t: 92, div: 'great', midi: 72, dur: 2, vel: 0.65 },   // C5
        { t: 92, div: 'swell', midi: 69, dur: 2, vel: 0.55 },   // A4
        { t: 92, div: 'pedal', midi: 45, dur: 2, vel: 0.6 },    // A2
        { t: 94, div: 'great', midi: 81, dur: 2, vel: 0.7 },    // A5
        { t: 94, div: 'great', midi: 72, dur: 2, vel: 0.65 },   // C5
        { t: 94, div: 'swell', midi: 65, dur: 2, vel: 0.55 },   // F4
        { t: 94, div: 'pedal', midi: 53, dur: 2, vel: 0.6 },    // F3

        // --- Var4 Phrase 2: G-F-E-D grand ---
        { t: 96, div: 'great', midi: 79, dur: 2, vel: 0.7 },    // G5
        { t: 96, div: 'great', midi: 70, dur: 2, vel: 0.65 },   // Bb4
        { t: 96, div: 'swell', midi: 62, dur: 2, vel: 0.55 },   // D4
        { t: 96, div: 'pedal', midi: 55, dur: 2, vel: 0.6 },    // G3
        { t: 98, div: 'great', midi: 77, dur: 2, vel: 0.7 },    // F5
        { t: 98, div: 'great', midi: 69, dur: 2, vel: 0.65 },   // A4
        { t: 98, div: 'swell', midi: 60, dur: 2, vel: 0.55 },   // C4
        { t: 98, div: 'pedal', midi: 53, dur: 2, vel: 0.6 },    // F3
        { t: 100, div: 'great', midi: 76, dur: 2, vel: 0.7 },   // E5
        { t: 100, div: 'great', midi: 69, dur: 2, vel: 0.65 },  // A4
        { t: 100, div: 'swell', midi: 61, dur: 2, vel: 0.55 },  // C#4
        { t: 100, div: 'pedal', midi: 45, dur: 2, vel: 0.6 },   // A2
        { t: 102, div: 'great', midi: 74, dur: 2, vel: 0.7 },   // D5 final
        { t: 102, div: 'great', midi: 69, dur: 2, vel: 0.65 },  // A4
        { t: 102, div: 'swell', midi: 62, dur: 2, vel: 0.55 },  // D4
        { t: 102, div: 'swell', midi: 57, dur: 2, vel: 0.5 },   // A3
        { t: 102, div: 'pedal', midi: 50, dur: 2, vel: 0.6 },   // D3

        // --- Final chord ---
        { t: 104, div: 'great', midi: 74, dur: 6, vel: 0.65 },  // D5
        { t: 104, div: 'great', midi: 69, dur: 6, vel: 0.6 },   // A4
        { t: 104, div: 'swell', midi: 62, dur: 6, vel: 0.5 },   // D4
        { t: 104, div: 'swell', midi: 57, dur: 6, vel: 0.45 },  // A3
        { t: 104, div: 'swell', midi: 53, dur: 6, vel: 0.45 },  // F3
        { t: 104, div: 'pedal', midi: 38, dur: 6, vel: 0.6 },   // D2
    ]
};


// ============================================================
// 6. Pachelbel - Chaconne in D minor
// ============================================================
// P.41, from Andreas Bach Buch manuscript
// Theme (8 bars) + 16 variations over repeating bass
// Bass pattern preserved throughout (unique among Pachelbel chaconnes)
// "Harmonies dissected through an amazing profusion of devices"
// Anticipates Bach's Passacaglia and Fugue
// Tempo: ~60 BPM (stately, variations build)
//
// Bass pattern (8-bar): D-C-Bb-A-G-F-G-A (descending then rising)
// Each bass note = 2 beats (half note), 8 notes = 16 beats per cycle
//
// MIDI: D2=38 A2=45 Bb2=46 C3=48 D3=50 E3=52 F3=53 G3=55
//       A3=57 Bb3=58 C4=60 C#4=61 D4=62 E4=64 F4=65 G4=67
//       A4=69 Bb4=70 C5=72 D5=74
// ============================================================

const PIECE_PACHELBEL_CHACONNE = {
    title: "Chaconne in D minor",
    composer: "Johann Pachelbel",
    catalog: "P.41",
    key: "D minor",
    tempo: 60,
    registration: {
        great: ['gt-principal8', 'gt-octave4'],
        swell: ['sw-gedeckt8', 'sw-salicional8'],
        choir: [],
        pedal: ['pd-principal16', 'pd-subbass32']
    },
    events: [
        // ============================================================
        // THEME: 8-bar ground bass with simple harmonization
        // Bass: D-C-Bb-A-G-F-G-A (each 2 beats)
        // ============================================================

        // --- Theme bars 1-4: D-C-Bb-A ---
        { t: 0, div: 'great', midi: 62, dur: 2, vel: 0.6 },     // D4 soprano
        { t: 0, div: 'swell', midi: 57, dur: 2, vel: 0.5 },     // A3
        { t: 0, div: 'pedal', midi: 50, dur: 2, vel: 0.6 },     // D3
        { t: 2, div: 'great', midi: 64, dur: 2, vel: 0.6 },     // E4
        { t: 2, div: 'swell', midi: 60, dur: 2, vel: 0.5 },     // C4
        { t: 2, div: 'pedal', midi: 48, dur: 2, vel: 0.6 },     // C3
        { t: 4, div: 'great', midi: 65, dur: 2, vel: 0.6 },     // F4
        { t: 4, div: 'swell', midi: 62, dur: 2, vel: 0.5 },     // D4
        { t: 4, div: 'pedal', midi: 46, dur: 2, vel: 0.6 },     // Bb2
        { t: 6, div: 'great', midi: 64, dur: 2, vel: 0.6 },     // E4
        { t: 6, div: 'swell', midi: 61, dur: 2, vel: 0.5 },     // C#4
        { t: 6, div: 'pedal', midi: 45, dur: 2, vel: 0.6 },     // A2

        // --- Theme bars 5-8: G-F-G-A ---
        { t: 8, div: 'great', midi: 62, dur: 2, vel: 0.6 },     // D4
        { t: 8, div: 'swell', midi: 58, dur: 2, vel: 0.5 },     // Bb3
        { t: 8, div: 'pedal', midi: 43, dur: 2, vel: 0.6 },     // G2
        { t: 10, div: 'great', midi: 60, dur: 2, vel: 0.6 },    // C4
        { t: 10, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 10, div: 'pedal', midi: 41, dur: 2, vel: 0.6 },    // F2
        { t: 12, div: 'great', midi: 62, dur: 2, vel: 0.6 },    // D4
        { t: 12, div: 'swell', midi: 58, dur: 2, vel: 0.5 },    // Bb3
        { t: 12, div: 'pedal', midi: 43, dur: 2, vel: 0.6 },    // G2
        { t: 14, div: 'great', midi: 61, dur: 2, vel: 0.6 },    // C#4
        { t: 14, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 14, div: 'pedal', midi: 45, dur: 2, vel: 0.6 },    // A2

        // ============================================================
        // VARIATION 1: Gentle eighth-note figuration in soprano
        // ============================================================

        // --- Var1 bars 1-4 ---
        { t: 16, div: 'great', midi: 62, dur: 1, vel: 0.6 },    // D4
        { t: 17, div: 'great', midi: 64, dur: 1, vel: 0.55 },   // E4
        { t: 16, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 16, div: 'pedal', midi: 50, dur: 2, vel: 0.6 },    // D3
        { t: 18, div: 'great', midi: 65, dur: 1, vel: 0.6 },    // F4
        { t: 19, div: 'great', midi: 64, dur: 1, vel: 0.55 },   // E4
        { t: 18, div: 'swell', midi: 60, dur: 2, vel: 0.5 },    // C4
        { t: 18, div: 'pedal', midi: 48, dur: 2, vel: 0.6 },    // C3
        { t: 20, div: 'great', midi: 65, dur: 1, vel: 0.6 },    // F4
        { t: 21, div: 'great', midi: 67, dur: 1, vel: 0.55 },   // G4
        { t: 20, div: 'swell', midi: 62, dur: 2, vel: 0.5 },    // D4
        { t: 20, div: 'pedal', midi: 46, dur: 2, vel: 0.6 },    // Bb2
        { t: 22, div: 'great', midi: 69, dur: 1, vel: 0.6 },    // A4
        { t: 23, div: 'great', midi: 67, dur: 1, vel: 0.55 },   // G4
        { t: 22, div: 'swell', midi: 61, dur: 2, vel: 0.5 },    // C#4
        { t: 22, div: 'pedal', midi: 45, dur: 2, vel: 0.6 },    // A2

        // --- Var1 bars 5-8 ---
        { t: 24, div: 'great', midi: 67, dur: 1, vel: 0.6 },    // G4
        { t: 25, div: 'great', midi: 65, dur: 1, vel: 0.55 },   // F4
        { t: 24, div: 'swell', midi: 58, dur: 2, vel: 0.5 },    // Bb3
        { t: 24, div: 'pedal', midi: 43, dur: 2, vel: 0.6 },    // G2
        { t: 26, div: 'great', midi: 65, dur: 1, vel: 0.6 },    // F4
        { t: 27, div: 'great', midi: 64, dur: 1, vel: 0.55 },   // E4
        { t: 26, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 26, div: 'pedal', midi: 41, dur: 2, vel: 0.6 },    // F2
        { t: 28, div: 'great', midi: 62, dur: 1, vel: 0.6 },    // D4
        { t: 29, div: 'great', midi: 64, dur: 1, vel: 0.55 },   // E4
        { t: 28, div: 'swell', midi: 58, dur: 2, vel: 0.5 },    // Bb3
        { t: 28, div: 'pedal', midi: 43, dur: 2, vel: 0.6 },    // G2
        { t: 30, div: 'great', midi: 64, dur: 1, vel: 0.6 },    // E4
        { t: 31, div: 'great', midi: 62, dur: 1, vel: 0.55 },   // D4
        { t: 30, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 30, div: 'pedal', midi: 45, dur: 2, vel: 0.6 },    // A2

        // ============================================================
        // VARIATION 2: Flowing sixteenth-note runs
        // ============================================================

        // --- Var2 bars 1-4 ---
        { t: 32, div: 'great', midi: 62, dur: 0.5, vel: 0.65 }, // D4
        { t: 32.5, div: 'great', midi: 64, dur: 0.5, vel: 0.6 },// E4
        { t: 33, div: 'great', midi: 65, dur: 0.5, vel: 0.6 },  // F4
        { t: 33.5, div: 'great', midi: 67, dur: 0.5, vel: 0.6 },// G4
        { t: 32, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 32, div: 'pedal', midi: 50, dur: 2, vel: 0.6 },    // D3
        { t: 34, div: 'great', midi: 67, dur: 0.5, vel: 0.65 }, // G4
        { t: 34.5, div: 'great', midi: 65, dur: 0.5, vel: 0.6 },// F4
        { t: 35, div: 'great', midi: 64, dur: 0.5, vel: 0.6 },  // E4
        { t: 35.5, div: 'great', midi: 62, dur: 0.5, vel: 0.6 },// D4
        { t: 34, div: 'swell', midi: 60, dur: 2, vel: 0.5 },    // C4
        { t: 34, div: 'pedal', midi: 48, dur: 2, vel: 0.6 },    // C3
        { t: 36, div: 'great', midi: 65, dur: 0.5, vel: 0.65 }, // F4
        { t: 36.5, div: 'great', midi: 67, dur: 0.5, vel: 0.6 },// G4
        { t: 37, div: 'great', midi: 69, dur: 0.5, vel: 0.6 },  // A4
        { t: 37.5, div: 'great', midi: 70, dur: 0.5, vel: 0.6 },// Bb4
        { t: 36, div: 'swell', midi: 62, dur: 2, vel: 0.5 },    // D4
        { t: 36, div: 'pedal', midi: 46, dur: 2, vel: 0.6 },    // Bb2
        { t: 38, div: 'great', midi: 69, dur: 0.5, vel: 0.65 }, // A4
        { t: 38.5, div: 'great', midi: 67, dur: 0.5, vel: 0.6 },// G4
        { t: 39, div: 'great', midi: 65, dur: 0.5, vel: 0.6 },  // F4
        { t: 39.5, div: 'great', midi: 64, dur: 0.5, vel: 0.6 },// E4
        { t: 38, div: 'swell', midi: 61, dur: 2, vel: 0.5 },    // C#4
        { t: 38, div: 'pedal', midi: 45, dur: 2, vel: 0.6 },    // A2

        // --- Var2 bars 5-8 ---
        { t: 40, div: 'great', midi: 67, dur: 0.5, vel: 0.65 }, // G4
        { t: 40.5, div: 'great', midi: 69, dur: 0.5, vel: 0.6 },// A4
        { t: 41, div: 'great', midi: 67, dur: 0.5, vel: 0.6 },  // G4
        { t: 41.5, div: 'great', midi: 65, dur: 0.5, vel: 0.6 },// F4
        { t: 40, div: 'swell', midi: 58, dur: 2, vel: 0.5 },    // Bb3
        { t: 40, div: 'pedal', midi: 43, dur: 2, vel: 0.6 },    // G2
        { t: 42, div: 'great', midi: 65, dur: 0.5, vel: 0.65 }, // F4
        { t: 42.5, div: 'great', midi: 64, dur: 0.5, vel: 0.6 },// E4
        { t: 43, div: 'great', midi: 62, dur: 0.5, vel: 0.6 },  // D4
        { t: 43.5, div: 'great', midi: 60, dur: 0.5, vel: 0.6 },// C4
        { t: 42, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 42, div: 'pedal', midi: 41, dur: 2, vel: 0.6 },    // F2
        { t: 44, div: 'great', midi: 62, dur: 0.5, vel: 0.65 }, // D4
        { t: 44.5, div: 'great', midi: 65, dur: 0.5, vel: 0.6 },// F4
        { t: 45, div: 'great', midi: 67, dur: 0.5, vel: 0.6 },  // G4
        { t: 45.5, div: 'great', midi: 65, dur: 0.5, vel: 0.6 },// F4
        { t: 44, div: 'swell', midi: 58, dur: 2, vel: 0.5 },    // Bb3
        { t: 44, div: 'pedal', midi: 43, dur: 2, vel: 0.6 },    // G2
        { t: 46, div: 'great', midi: 64, dur: 0.5, vel: 0.65 }, // E4
        { t: 46.5, div: 'great', midi: 62, dur: 0.5, vel: 0.6 },// D4
        { t: 47, div: 'great', midi: 61, dur: 0.5, vel: 0.6 },  // C#4
        { t: 47.5, div: 'great', midi: 62, dur: 0.5, vel: 0.6 },// D4
        { t: 46, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 46, div: 'pedal', midi: 45, dur: 2, vel: 0.6 },    // A2

        // ============================================================
        // VARIATION 3: Chordal - full harmony, building intensity
        // ============================================================

        // --- Var3 bars 1-4 ---
        { t: 48, div: 'great', midi: 69, dur: 2, vel: 0.7 },    // A4
        { t: 48, div: 'great', midi: 65, dur: 2, vel: 0.65 },   // F4
        { t: 48, div: 'swell', midi: 62, dur: 2, vel: 0.55 },   // D4
        { t: 48, div: 'pedal', midi: 50, dur: 2, vel: 0.65 },   // D3
        { t: 50, div: 'great', midi: 67, dur: 2, vel: 0.7 },    // G4
        { t: 50, div: 'great', midi: 64, dur: 2, vel: 0.65 },   // E4
        { t: 50, div: 'swell', midi: 60, dur: 2, vel: 0.55 },   // C4
        { t: 50, div: 'pedal', midi: 48, dur: 2, vel: 0.65 },   // C3
        { t: 52, div: 'great', midi: 70, dur: 2, vel: 0.7 },    // Bb4
        { t: 52, div: 'great', midi: 65, dur: 2, vel: 0.65 },   // F4
        { t: 52, div: 'swell', midi: 62, dur: 2, vel: 0.55 },   // D4
        { t: 52, div: 'pedal', midi: 46, dur: 2, vel: 0.65 },   // Bb2
        { t: 54, div: 'great', midi: 69, dur: 2, vel: 0.7 },    // A4
        { t: 54, div: 'great', midi: 64, dur: 2, vel: 0.65 },   // E4
        { t: 54, div: 'swell', midi: 61, dur: 2, vel: 0.55 },   // C#4
        { t: 54, div: 'pedal', midi: 45, dur: 2, vel: 0.65 },   // A2

        // --- Var3 bars 5-8 ---
        { t: 56, div: 'great', midi: 67, dur: 2, vel: 0.7 },    // G4
        { t: 56, div: 'great', midi: 62, dur: 2, vel: 0.65 },   // D4
        { t: 56, div: 'swell', midi: 58, dur: 2, vel: 0.55 },   // Bb3
        { t: 56, div: 'pedal', midi: 43, dur: 2, vel: 0.65 },   // G2
        { t: 58, div: 'great', midi: 65, dur: 2, vel: 0.7 },    // F4
        { t: 58, div: 'great', midi: 60, dur: 2, vel: 0.65 },   // C4
        { t: 58, div: 'swell', midi: 57, dur: 2, vel: 0.55 },   // A3
        { t: 58, div: 'pedal', midi: 41, dur: 2, vel: 0.65 },   // F2
        { t: 60, div: 'great', midi: 67, dur: 2, vel: 0.7 },    // G4
        { t: 60, div: 'great', midi: 62, dur: 2, vel: 0.65 },   // D4
        { t: 60, div: 'swell', midi: 58, dur: 2, vel: 0.55 },   // Bb3
        { t: 60, div: 'pedal', midi: 43, dur: 2, vel: 0.65 },   // G2
        { t: 62, div: 'great', midi: 69, dur: 2, vel: 0.7 },    // A4
        { t: 62, div: 'great', midi: 64, dur: 2, vel: 0.65 },   // E4
        { t: 62, div: 'swell', midi: 61, dur: 2, vel: 0.55 },   // C#4
        { t: 62, div: 'pedal', midi: 45, dur: 2, vel: 0.65 },   // A2

        // ============================================================
        // VARIATION 4: Climactic with faster figuration + chords
        // ============================================================

        // --- Var4 bars 1-4: Climactic running soprano with chords ---
        { t: 64, div: 'great', midi: 74, dur: 0.5, vel: 0.75 }, // D5
        { t: 64.5, div: 'great', midi: 72, dur: 0.5, vel: 0.7 },// C5
        { t: 65, div: 'great', midi: 70, dur: 0.5, vel: 0.7 },  // Bb4
        { t: 65.5, div: 'great', midi: 69, dur: 0.5, vel: 0.7 },// A4
        { t: 64, div: 'swell', midi: 62, dur: 2, vel: 0.6 },    // D4
        { t: 64, div: 'pedal', midi: 50, dur: 2, vel: 0.65 },   // D3
        { t: 66, div: 'great', midi: 72, dur: 0.5, vel: 0.75 }, // C5
        { t: 66.5, div: 'great', midi: 70, dur: 0.5, vel: 0.7 },// Bb4
        { t: 67, div: 'great', midi: 69, dur: 0.5, vel: 0.7 },  // A4
        { t: 67.5, div: 'great', midi: 67, dur: 0.5, vel: 0.7 },// G4
        { t: 66, div: 'swell', midi: 60, dur: 2, vel: 0.6 },    // C4
        { t: 66, div: 'pedal', midi: 48, dur: 2, vel: 0.65 },   // C3
        { t: 68, div: 'great', midi: 70, dur: 0.5, vel: 0.75 }, // Bb4
        { t: 68.5, div: 'great', midi: 72, dur: 0.5, vel: 0.7 },// C5
        { t: 69, div: 'great', midi: 74, dur: 0.5, vel: 0.7 },  // D5
        { t: 69.5, div: 'great', midi: 72, dur: 0.5, vel: 0.7 },// C5
        { t: 68, div: 'swell', midi: 62, dur: 2, vel: 0.6 },    // D4
        { t: 68, div: 'pedal', midi: 46, dur: 2, vel: 0.65 },   // Bb2
        { t: 70, div: 'great', midi: 69, dur: 0.5, vel: 0.75 }, // A4
        { t: 70.5, div: 'great', midi: 67, dur: 0.5, vel: 0.7 },// G4
        { t: 71, div: 'great', midi: 69, dur: 0.5, vel: 0.7 },  // A4
        { t: 71.5, div: 'great', midi: 64, dur: 0.5, vel: 0.7 },// E4
        { t: 70, div: 'swell', midi: 61, dur: 2, vel: 0.6 },    // C#4
        { t: 70, div: 'pedal', midi: 45, dur: 2, vel: 0.65 },   // A2

        // --- Var4 bars 5-8 ---
        { t: 72, div: 'great', midi: 67, dur: 0.5, vel: 0.75 }, // G4
        { t: 72.5, div: 'great', midi: 69, dur: 0.5, vel: 0.7 },// A4
        { t: 73, div: 'great', midi: 70, dur: 0.5, vel: 0.7 },  // Bb4
        { t: 73.5, div: 'great', midi: 72, dur: 0.5, vel: 0.7 },// C5
        { t: 72, div: 'swell', midi: 62, dur: 2, vel: 0.6 },    // D4
        { t: 72, div: 'pedal', midi: 43, dur: 2, vel: 0.65 },   // G2
        { t: 74, div: 'great', midi: 69, dur: 0.5, vel: 0.75 }, // A4
        { t: 74.5, div: 'great', midi: 67, dur: 0.5, vel: 0.7 },// G4
        { t: 75, div: 'great', midi: 65, dur: 0.5, vel: 0.7 },  // F4
        { t: 75.5, div: 'great', midi: 64, dur: 0.5, vel: 0.7 },// E4
        { t: 74, div: 'swell', midi: 60, dur: 2, vel: 0.6 },    // C4
        { t: 74, div: 'pedal', midi: 41, dur: 2, vel: 0.65 },   // F2
        { t: 76, div: 'great', midi: 62, dur: 0.5, vel: 0.75 }, // D4
        { t: 76.5, div: 'great', midi: 65, dur: 0.5, vel: 0.7 },// F4
        { t: 77, div: 'great', midi: 67, dur: 0.5, vel: 0.7 },  // G4
        { t: 77.5, div: 'great', midi: 70, dur: 0.5, vel: 0.7 },// Bb4
        { t: 76, div: 'swell', midi: 58, dur: 2, vel: 0.6 },    // Bb3
        { t: 76, div: 'pedal', midi: 43, dur: 2, vel: 0.65 },   // G2
        { t: 78, div: 'great', midi: 69, dur: 1, vel: 0.75 },   // A4
        { t: 79, div: 'great', midi: 64, dur: 1, vel: 0.7 },    // E4
        { t: 78, div: 'swell', midi: 61, dur: 2, vel: 0.6 },    // C#4
        { t: 78, div: 'pedal', midi: 45, dur: 2, vel: 0.65 },   // A2

        // ============================================================
        // VARIATION 5 (final): Near-exact repeat of theme, resolution
        // Returns to the simplicity of the opening
        // ============================================================

        // --- Final bars 1-4 ---
        { t: 80, div: 'great', midi: 62, dur: 2, vel: 0.6 },    // D4
        { t: 80, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 80, div: 'pedal', midi: 50, dur: 2, vel: 0.6 },    // D3
        { t: 82, div: 'great', midi: 64, dur: 2, vel: 0.6 },    // E4
        { t: 82, div: 'swell', midi: 60, dur: 2, vel: 0.5 },    // C4
        { t: 82, div: 'pedal', midi: 48, dur: 2, vel: 0.6 },    // C3
        { t: 84, div: 'great', midi: 65, dur: 2, vel: 0.6 },    // F4
        { t: 84, div: 'swell', midi: 62, dur: 2, vel: 0.5 },    // D4
        { t: 84, div: 'pedal', midi: 46, dur: 2, vel: 0.6 },    // Bb2
        { t: 86, div: 'great', midi: 64, dur: 2, vel: 0.6 },    // E4
        { t: 86, div: 'swell', midi: 61, dur: 2, vel: 0.5 },    // C#4
        { t: 86, div: 'pedal', midi: 45, dur: 2, vel: 0.6 },    // A2

        // --- Final bars 5-8 ---
        { t: 88, div: 'great', midi: 62, dur: 2, vel: 0.6 },    // D4
        { t: 88, div: 'swell', midi: 58, dur: 2, vel: 0.5 },    // Bb3
        { t: 88, div: 'pedal', midi: 43, dur: 2, vel: 0.6 },    // G2
        { t: 90, div: 'great', midi: 60, dur: 2, vel: 0.6 },    // C4
        { t: 90, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 90, div: 'pedal', midi: 41, dur: 2, vel: 0.6 },    // F2
        { t: 92, div: 'great', midi: 62, dur: 2, vel: 0.6 },    // D4
        { t: 92, div: 'swell', midi: 58, dur: 2, vel: 0.5 },    // Bb3
        { t: 92, div: 'pedal', midi: 43, dur: 2, vel: 0.6 },    // G2
        { t: 94, div: 'great', midi: 61, dur: 2, vel: 0.6 },    // C#4
        { t: 94, div: 'swell', midi: 57, dur: 2, vel: 0.5 },    // A3
        { t: 94, div: 'pedal', midi: 45, dur: 2, vel: 0.6 },    // A2

        // --- Final D minor chord ---
        { t: 96, div: 'great', midi: 62, dur: 6, vel: 0.6 },    // D4
        { t: 96, div: 'swell', midi: 57, dur: 6, vel: 0.5 },    // A3
        { t: 96, div: 'swell', midi: 53, dur: 6, vel: 0.45 },   // F3
        { t: 96, div: 'pedal', midi: 38, dur: 6, vel: 0.6 },    // D2
    ]
};
