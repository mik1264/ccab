// ============================================================
// English Organ Works Collection
// ============================================================
// Six masterworks of the English organ tradition
// MIDI reference: C3=48, D3=50, Eb3=51, E3=52, F3=53, G3=55, A3=57, Bb3=58, B3=59
// C4=60, D4=62, Eb4=63, E4=64, F4=65, G4=67, A4=69, Bb4=70, B4=71
// C5=72, D5=74, Eb5=75, E5=76, F5=77, G5=79, A5=81, Bb5=82
// ============================================================

// ============================================================
// 1. Elgar - Organ Sonata No. 1 in G major, Op. 28
// ============================================================
// First movement: Allegro maestoso, 3/4 time
// Sonata form - noble opening theme resembling The Black Knight,
// broad sweeping melodies, symphonic in conception.
// Primary theme in G major, secondary theme more flowing in 9/8.
// ============================================================

const PIECE_ELGAR_SONATA = {
    title: "Organ Sonata No. 1 in G major",
    composer: "Edward Elgar",
    catalog: "Op. 28",
    key: "G major",
    tempo: 96,
    tempoChanges: [
        { t: 0, tempo: 96, label: "Allegro maestoso" },
        { t: 96, tempo: 88, label: "Second theme - più tranquillo" },
        { t: 144, tempo: 96, label: "Development" },
        { t: 216, tempo: 100, label: "Recapitulation" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-bourdon16', 'gt-trumpet8'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-oboe8'],
        choir: ['ch-flute8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ===== EXPOSITION: Primary theme in G major, 3/4 time =====
        // Measure 1: Noble opening - G major chord, broad and maestoso
        { t: 0, div: 'pedal', midi: 43, dur: 3.0, vel: 0.88 },      // G2
        { t: 0, div: 'great', midi: 55, dur: 1.5, vel: 0.90 },      // G3
        { t: 0, div: 'great', midi: 59, dur: 1.5, vel: 0.88 },      // B3
        { t: 0, div: 'great', midi: 62, dur: 1.5, vel: 0.88 },      // D4
        { t: 0, div: 'great', midi: 67, dur: 1.5, vel: 0.92 },      // G4 (melody)
        { t: 1.5, div: 'great', midi: 69, dur: 0.75, vel: 0.90 },   // A4
        { t: 2.25, div: 'great', midi: 71, dur: 0.75, vel: 0.88 },  // B4
        { t: 1.5, div: 'great', midi: 55, dur: 1.5, vel: 0.85 },    // G3
        { t: 1.5, div: 'great', midi: 62, dur: 1.5, vel: 0.85 },    // D4

        // Measure 2: Rising melody continues
        { t: 3, div: 'pedal', midi: 47, dur: 3.0, vel: 0.85 },      // B2
        { t: 3, div: 'great', midi: 71, dur: 2.25, vel: 0.92 },     // B4 (melody held)
        { t: 3, div: 'great', midi: 59, dur: 1.5, vel: 0.85 },      // B3
        { t: 3, div: 'great', midi: 62, dur: 1.5, vel: 0.85 },      // D4
        { t: 3, div: 'great', midi: 66, dur: 1.5, vel: 0.85 },      // F#4
        { t: 5.25, div: 'great', midi: 69, dur: 0.75, vel: 0.88 },  // A4

        // Measure 3: D major (dominant), melody descends
        { t: 6, div: 'pedal', midi: 50, dur: 3.0, vel: 0.88 },      // D3
        { t: 6, div: 'great', midi: 74, dur: 1.5, vel: 0.93 },      // D5 (melody peak)
        { t: 6, div: 'great', midi: 62, dur: 3.0, vel: 0.85 },      // D4
        { t: 6, div: 'great', midi: 66, dur: 3.0, vel: 0.85 },      // F#4
        { t: 6, div: 'great', midi: 69, dur: 3.0, vel: 0.85 },      // A4
        { t: 7.5, div: 'great', midi: 72, dur: 0.75, vel: 0.90 },   // C5
        { t: 8.25, div: 'great', midi: 71, dur: 0.75, vel: 0.88 },  // B4

        // Measure 4: Return to G, cadential
        { t: 9, div: 'pedal', midi: 43, dur: 3.0, vel: 0.88 },      // G2
        { t: 9, div: 'great', midi: 69, dur: 1.5, vel: 0.90 },      // A4
        { t: 9, div: 'great', midi: 55, dur: 3.0, vel: 0.85 },      // G3
        { t: 9, div: 'great', midi: 59, dur: 3.0, vel: 0.85 },      // B3
        { t: 10.5, div: 'great', midi: 67, dur: 1.5, vel: 0.92 },   // G4

        // Measure 5-6: Theme restated with more fullness
        { t: 12, div: 'pedal', midi: 43, dur: 3.0, vel: 0.90 },     // G2
        { t: 12, div: 'great', midi: 67, dur: 1.0, vel: 0.93 },     // G4
        { t: 13, div: 'great', midi: 69, dur: 0.5, vel: 0.90 },     // A4
        { t: 13.5, div: 'great', midi: 71, dur: 0.5, vel: 0.90 },   // B4
        { t: 14, div: 'great', midi: 74, dur: 1.0, vel: 0.95 },     // D5
        { t: 12, div: 'great', midi: 55, dur: 3.0, vel: 0.85 },     // G3
        { t: 12, div: 'great', midi: 59, dur: 3.0, vel: 0.85 },     // B3
        { t: 12, div: 'great', midi: 62, dur: 3.0, vel: 0.85 },     // D4
        { t: 12, div: 'swell', midi: 67, dur: 3.0, vel: 0.75 },     // G4 (swell doubles)

        { t: 15, div: 'pedal', midi: 47, dur: 3.0, vel: 0.88 },     // B2
        { t: 15, div: 'great', midi: 74, dur: 2.25, vel: 0.95 },    // D5
        { t: 17.25, div: 'great', midi: 72, dur: 0.75, vel: 0.90 }, // C5
        { t: 15, div: 'great', midi: 59, dur: 3.0, vel: 0.85 },     // B3
        { t: 15, div: 'great', midi: 66, dur: 3.0, vel: 0.85 },     // F#4

        // Measure 7-8: Broadening, more weight
        { t: 18, div: 'pedal', midi: 48, dur: 3.0, vel: 0.90 },     // C3
        { t: 18, div: 'great', midi: 72, dur: 1.5, vel: 0.93 },     // C5
        { t: 19.5, div: 'great', midi: 71, dur: 0.75, vel: 0.90 },  // B4
        { t: 20.25, div: 'great', midi: 69, dur: 0.75, vel: 0.88 }, // A4
        { t: 18, div: 'great', midi: 60, dur: 3.0, vel: 0.85 },     // C4
        { t: 18, div: 'great', midi: 64, dur: 3.0, vel: 0.85 },     // E4

        { t: 21, div: 'pedal', midi: 50, dur: 1.5, vel: 0.88 },     // D3
        { t: 22.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.90 },   // G2
        { t: 21, div: 'great', midi: 67, dur: 3.0, vel: 0.95 },     // G4 (arrival)
        { t: 21, div: 'great', midi: 55, dur: 3.0, vel: 0.88 },     // G3
        { t: 21, div: 'great', midi: 59, dur: 3.0, vel: 0.88 },     // B3
        { t: 21, div: 'great', midi: 62, dur: 3.0, vel: 0.88 },     // D4

        // ===== Measures 9-12: Transitional passage, gentler =====
        { t: 24, div: 'pedal', midi: 45, dur: 3.0, vel: 0.78 },     // A2
        { t: 24, div: 'swell', midi: 64, dur: 1.5, vel: 0.80 },     // E4
        { t: 24, div: 'swell', midi: 69, dur: 1.5, vel: 0.82 },     // A4
        { t: 25.5, div: 'swell', midi: 67, dur: 0.75, vel: 0.80 },  // G4
        { t: 26.25, div: 'swell', midi: 66, dur: 0.75, vel: 0.78 }, // F#4

        { t: 27, div: 'pedal', midi: 50, dur: 3.0, vel: 0.78 },     // D3
        { t: 27, div: 'swell', midi: 66, dur: 1.5, vel: 0.82 },     // F#4
        { t: 28.5, div: 'swell', midi: 69, dur: 0.75, vel: 0.80 },  // A4
        { t: 29.25, div: 'swell', midi: 71, dur: 0.75, vel: 0.80 }, // B4
        { t: 27, div: 'swell', midi: 57, dur: 3.0, vel: 0.75 },     // A3
        { t: 27, div: 'swell', midi: 62, dur: 3.0, vel: 0.75 },     // D4

        { t: 30, div: 'pedal', midi: 47, dur: 3.0, vel: 0.78 },     // B2
        { t: 30, div: 'swell', midi: 71, dur: 2.25, vel: 0.82 },    // B4
        { t: 32.25, div: 'swell', midi: 69, dur: 0.75, vel: 0.78 }, // A4
        { t: 30, div: 'swell', midi: 59, dur: 3.0, vel: 0.75 },     // B3
        { t: 30, div: 'swell', midi: 62, dur: 3.0, vel: 0.75 },     // D4

        { t: 33, div: 'pedal', midi: 52, dur: 3.0, vel: 0.78 },     // E3
        { t: 33, div: 'swell', midi: 67, dur: 1.5, vel: 0.80 },     // G4
        { t: 34.5, div: 'swell', midi: 66, dur: 1.5, vel: 0.78 },   // F#4
        { t: 33, div: 'swell', midi: 55, dur: 3.0, vel: 0.75 },     // G3
        { t: 33, div: 'swell', midi: 59, dur: 3.0, vel: 0.75 },     // B3

        // ===== Measures 13-16: Second subject group, flowing 9/8 feel =====
        { t: 36, div: 'pedal', midi: 50, dur: 6.0, vel: 0.75 },     // D3
        { t: 36, div: 'swell', midi: 66, dur: 1.0, vel: 0.80 },     // F#4
        { t: 37, div: 'swell', midi: 69, dur: 1.0, vel: 0.82 },     // A4
        { t: 38, div: 'swell', midi: 74, dur: 1.0, vel: 0.85 },     // D5
        { t: 39, div: 'swell', midi: 72, dur: 1.0, vel: 0.82 },     // C5
        { t: 40, div: 'swell', midi: 71, dur: 1.0, vel: 0.80 },     // B4
        { t: 41, div: 'swell', midi: 69, dur: 1.0, vel: 0.78 },     // A4
        { t: 36, div: 'swell', midi: 57, dur: 6.0, vel: 0.70 },     // A3
        { t: 36, div: 'swell', midi: 62, dur: 6.0, vel: 0.70 },     // D4

        { t: 42, div: 'pedal', midi: 47, dur: 6.0, vel: 0.75 },     // B2
        { t: 42, div: 'swell', midi: 71, dur: 1.0, vel: 0.82 },     // B4
        { t: 43, div: 'swell', midi: 74, dur: 1.0, vel: 0.85 },     // D5
        { t: 44, div: 'swell', midi: 76, dur: 1.0, vel: 0.87 },     // E5
        { t: 45, div: 'swell', midi: 74, dur: 1.0, vel: 0.85 },     // D5
        { t: 46, div: 'swell', midi: 71, dur: 1.0, vel: 0.82 },     // B4
        { t: 47, div: 'swell', midi: 69, dur: 1.0, vel: 0.80 },     // A4
        { t: 42, div: 'swell', midi: 59, dur: 6.0, vel: 0.70 },     // B3
        { t: 42, div: 'swell', midi: 66, dur: 6.0, vel: 0.70 },     // F#4

        { t: 48, div: 'pedal', midi: 45, dur: 6.0, vel: 0.75 },     // A2
        { t: 48, div: 'swell', midi: 69, dur: 1.5, vel: 0.82 },     // A4
        { t: 49.5, div: 'swell', midi: 72, dur: 1.5, vel: 0.85 },   // C5
        { t: 51, div: 'swell', midi: 71, dur: 1.5, vel: 0.82 },     // B4
        { t: 52.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.80 },   // A4
        { t: 48, div: 'swell', midi: 57, dur: 6.0, vel: 0.70 },     // A3
        { t: 48, div: 'swell', midi: 64, dur: 6.0, vel: 0.70 },     // E4

        // ===== Measures 17-20: Second theme continued, more lyrical =====
        { t: 54, div: 'pedal', midi: 43, dur: 6.0, vel: 0.78 },     // G2
        { t: 54, div: 'swell', midi: 67, dur: 1.5, vel: 0.82 },     // G4
        { t: 55.5, div: 'swell', midi: 71, dur: 1.5, vel: 0.85 },   // B4
        { t: 57, div: 'swell', midi: 74, dur: 3.0, vel: 0.88 },     // D5 (held)
        { t: 54, div: 'swell', midi: 55, dur: 6.0, vel: 0.72 },     // G3
        { t: 54, div: 'swell', midi: 59, dur: 6.0, vel: 0.72 },     // B3

        { t: 60, div: 'pedal', midi: 50, dur: 3.0, vel: 0.78 },     // D3
        { t: 60, div: 'swell', midi: 72, dur: 1.5, vel: 0.85 },     // C5
        { t: 61.5, div: 'swell', midi: 71, dur: 1.5, vel: 0.82 },   // B4
        { t: 60, div: 'swell', midi: 62, dur: 3.0, vel: 0.72 },     // D4
        { t: 60, div: 'swell', midi: 66, dur: 3.0, vel: 0.72 },     // F#4

        { t: 63, div: 'pedal', midi: 48, dur: 3.0, vel: 0.78 },     // C3
        { t: 63, div: 'swell', midi: 69, dur: 1.5, vel: 0.82 },     // A4
        { t: 64.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.80 },   // G4
        { t: 63, div: 'swell', midi: 60, dur: 3.0, vel: 0.72 },     // C4
        { t: 63, div: 'swell', midi: 64, dur: 3.0, vel: 0.72 },     // E4

        // ===== Measures 21-24: Closing of exposition =====
        { t: 66, div: 'pedal', midi: 50, dur: 1.5, vel: 0.82 },     // D3
        { t: 67.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.85 },   // G2
        { t: 66, div: 'great', midi: 67, dur: 3.0, vel: 0.90 },     // G4
        { t: 66, div: 'great', midi: 55, dur: 3.0, vel: 0.85 },     // G3
        { t: 66, div: 'great', midi: 59, dur: 3.0, vel: 0.85 },     // B3
        { t: 66, div: 'great', midi: 62, dur: 3.0, vel: 0.85 },     // D4

        // ===== DEVELOPMENT SECTION: Measures 25-36 =====
        // Contrapuntal working of themes, modulating through E minor, C major

        // Measure 25-26: Theme fragment in E minor
        { t: 69, div: 'pedal', midi: 40, dur: 3.0, vel: 0.85 },     // E2
        { t: 69, div: 'great', midi: 64, dur: 1.0, vel: 0.88 },     // E4
        { t: 70, div: 'great', midi: 67, dur: 0.5, vel: 0.85 },     // G4
        { t: 70.5, div: 'great', midi: 66, dur: 0.5, vel: 0.85 },   // F#4
        { t: 71, div: 'great', midi: 71, dur: 1.0, vel: 0.90 },     // B4
        { t: 69, div: 'swell', midi: 52, dur: 3.0, vel: 0.75 },     // E3
        { t: 69, div: 'swell', midi: 55, dur: 3.0, vel: 0.75 },     // G3
        { t: 69, div: 'swell', midi: 59, dur: 3.0, vel: 0.75 },     // B3

        { t: 72, div: 'pedal', midi: 45, dur: 3.0, vel: 0.85 },     // A2
        { t: 72, div: 'great', midi: 72, dur: 1.5, vel: 0.90 },     // C5
        { t: 73.5, div: 'great', midi: 71, dur: 0.75, vel: 0.88 },  // B4
        { t: 74.25, div: 'great', midi: 69, dur: 0.75, vel: 0.85 }, // A4
        { t: 72, div: 'swell', midi: 57, dur: 3.0, vel: 0.75 },     // A3
        { t: 72, div: 'swell', midi: 60, dur: 3.0, vel: 0.75 },     // C4
        { t: 72, div: 'swell', midi: 64, dur: 3.0, vel: 0.75 },     // E4

        // Measure 27-28: Canon between hands, C major
        { t: 75, div: 'pedal', midi: 48, dur: 3.0, vel: 0.85 },     // C3
        { t: 75, div: 'great', midi: 72, dur: 1.0, vel: 0.90 },     // C5
        { t: 76, div: 'great', midi: 74, dur: 0.5, vel: 0.88 },     // D5
        { t: 76.5, div: 'great', midi: 76, dur: 0.5, vel: 0.88 },   // E5
        { t: 77, div: 'great', midi: 79, dur: 1.0, vel: 0.92 },     // G5
        // Swell enters 1 beat later in canon
        { t: 76, div: 'swell', midi: 60, dur: 1.0, vel: 0.82 },     // C4
        { t: 77, div: 'swell', midi: 62, dur: 0.5, vel: 0.80 },     // D4
        { t: 77.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.80 },   // E4

        { t: 78, div: 'pedal', midi: 53, dur: 3.0, vel: 0.85 },     // F3
        { t: 78, div: 'great', midi: 77, dur: 1.5, vel: 0.90 },     // F5
        { t: 79.5, div: 'great', midi: 76, dur: 0.75, vel: 0.88 },  // E5
        { t: 80.25, div: 'great', midi: 74, dur: 0.75, vel: 0.85 }, // D5
        { t: 78, div: 'swell', midi: 67, dur: 1.5, vel: 0.82 },     // G4
        { t: 79.5, div: 'swell', midi: 65, dur: 0.75, vel: 0.80 },  // F4
        { t: 80.25, div: 'swell', midi: 64, dur: 0.75, vel: 0.78 }, // E4

        // Measure 29-30: Building intensity
        { t: 81, div: 'pedal', midi: 50, dur: 3.0, vel: 0.88 },     // D3
        { t: 81, div: 'great', midi: 74, dur: 1.0, vel: 0.92 },     // D5
        { t: 82, div: 'great', midi: 72, dur: 0.5, vel: 0.90 },     // C5
        { t: 82.5, div: 'great', midi: 71, dur: 0.5, vel: 0.90 },   // B4
        { t: 83, div: 'great', midi: 74, dur: 1.0, vel: 0.93 },     // D5
        { t: 81, div: 'swell', midi: 62, dur: 3.0, vel: 0.82 },     // D4
        { t: 81, div: 'swell', midi: 66, dur: 3.0, vel: 0.82 },     // F#4

        { t: 84, div: 'pedal', midi: 43, dur: 6.0, vel: 0.90 },     // G2 (pedal point)
        { t: 84, div: 'great', midi: 71, dur: 1.5, vel: 0.90 },     // B4
        { t: 85.5, div: 'great', midi: 74, dur: 1.5, vel: 0.92 },   // D5
        { t: 87, div: 'great', midi: 76, dur: 1.5, vel: 0.93 },     // E5
        { t: 88.5, div: 'great', midi: 79, dur: 1.5, vel: 0.95 },   // G5
        { t: 84, div: 'swell', midi: 55, dur: 6.0, vel: 0.82 },     // G3
        { t: 84, div: 'swell', midi: 59, dur: 6.0, vel: 0.82 },     // B3
        { t: 84, div: 'swell', midi: 62, dur: 6.0, vel: 0.82 },     // D4

        // Measure 31-34: Climax of development, full organ
        { t: 90, div: 'pedal', midi: 48, dur: 3.0, vel: 0.92 },     // C3
        { t: 90, div: 'great', midi: 79, dur: 1.5, vel: 0.95 },     // G5
        { t: 91.5, div: 'great', midi: 77, dur: 0.75, vel: 0.93 },  // F5
        { t: 92.25, div: 'great', midi: 76, dur: 0.75, vel: 0.92 }, // E5
        { t: 90, div: 'great', midi: 60, dur: 3.0, vel: 0.88 },     // C4
        { t: 90, div: 'great', midi: 64, dur: 3.0, vel: 0.88 },     // E4
        { t: 90, div: 'great', midi: 67, dur: 3.0, vel: 0.88 },     // G4

        { t: 93, div: 'pedal', midi: 50, dur: 3.0, vel: 0.92 },     // D3
        { t: 93, div: 'great', midi: 74, dur: 2.25, vel: 0.95 },    // D5
        { t: 95.25, div: 'great', midi: 72, dur: 0.75, vel: 0.92 }, // C5
        { t: 93, div: 'great', midi: 62, dur: 3.0, vel: 0.88 },     // D4
        { t: 93, div: 'great', midi: 66, dur: 3.0, vel: 0.88 },     // F#4
        { t: 93, div: 'great', midi: 69, dur: 3.0, vel: 0.88 },     // A4

        // ===== RECAPITULATION: Measures 35-48 =====
        // Primary theme returns in G major, fuller

        // Measure 35-36: Theme returns with triumph
        { t: 96, div: 'pedal', midi: 43, dur: 3.0, vel: 0.92 },     // G2
        { t: 96, div: 'great', midi: 55, dur: 1.5, vel: 0.93 },     // G3
        { t: 96, div: 'great', midi: 59, dur: 1.5, vel: 0.90 },     // B3
        { t: 96, div: 'great', midi: 62, dur: 1.5, vel: 0.90 },     // D4
        { t: 96, div: 'great', midi: 67, dur: 1.5, vel: 0.95 },     // G4
        { t: 97.5, div: 'great', midi: 69, dur: 0.75, vel: 0.93 },  // A4
        { t: 98.25, div: 'great', midi: 71, dur: 0.75, vel: 0.92 }, // B4
        { t: 96, div: 'swell', midi: 67, dur: 3.0, vel: 0.80 },     // G4 (doubling)

        { t: 99, div: 'pedal', midi: 47, dur: 3.0, vel: 0.90 },     // B2
        { t: 99, div: 'great', midi: 71, dur: 2.25, vel: 0.95 },    // B4
        { t: 101.25, div: 'great', midi: 69, dur: 0.75, vel: 0.92 },// A4
        { t: 99, div: 'great', midi: 59, dur: 3.0, vel: 0.88 },     // B3
        { t: 99, div: 'great', midi: 62, dur: 3.0, vel: 0.88 },     // D4
        { t: 99, div: 'great', midi: 66, dur: 3.0, vel: 0.88 },     // F#4

        // Measure 37-38: Majestic continuation
        { t: 102, div: 'pedal', midi: 50, dur: 3.0, vel: 0.92 },    // D3
        { t: 102, div: 'great', midi: 74, dur: 1.5, vel: 0.95 },    // D5
        { t: 103.5, div: 'great', midi: 72, dur: 0.75, vel: 0.93 }, // C5
        { t: 104.25, div: 'great', midi: 71, dur: 0.75, vel: 0.92 },// B4
        { t: 102, div: 'great', midi: 62, dur: 3.0, vel: 0.88 },    // D4
        { t: 102, div: 'great', midi: 66, dur: 3.0, vel: 0.88 },    // F#4
        { t: 102, div: 'great', midi: 69, dur: 3.0, vel: 0.88 },    // A4

        { t: 105, div: 'pedal', midi: 48, dur: 3.0, vel: 0.90 },    // C3
        { t: 105, div: 'great', midi: 72, dur: 1.5, vel: 0.93 },    // C5
        { t: 106.5, div: 'great', midi: 71, dur: 0.75, vel: 0.92 }, // B4
        { t: 107.25, div: 'great', midi: 69, dur: 0.75, vel: 0.90 },// A4
        { t: 105, div: 'great', midi: 60, dur: 3.0, vel: 0.88 },    // C4
        { t: 105, div: 'great', midi: 64, dur: 3.0, vel: 0.88 },    // E4

        // Measure 39-40: Second theme now in tonic G
        { t: 108, div: 'pedal', midi: 43, dur: 6.0, vel: 0.82 },    // G2
        { t: 108, div: 'swell', midi: 59, dur: 1.0, vel: 0.82 },    // B3
        { t: 109, div: 'swell', midi: 62, dur: 1.0, vel: 0.85 },    // D4
        { t: 110, div: 'swell', midi: 67, dur: 1.0, vel: 0.88 },    // G4
        { t: 111, div: 'swell', midi: 66, dur: 1.0, vel: 0.85 },    // F#4
        { t: 112, div: 'swell', midi: 64, dur: 1.0, vel: 0.82 },    // E4
        { t: 113, div: 'swell', midi: 62, dur: 1.0, vel: 0.80 },    // D4
        { t: 108, div: 'swell', midi: 55, dur: 6.0, vel: 0.72 },    // G3

        { t: 114, div: 'pedal', midi: 40, dur: 6.0, vel: 0.82 },    // E2
        { t: 114, div: 'swell', midi: 64, dur: 1.5, vel: 0.85 },    // E4
        { t: 115.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.88 },  // G4
        { t: 117, div: 'swell', midi: 71, dur: 1.5, vel: 0.90 },    // B4
        { t: 118.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.85 },  // A4
        { t: 114, div: 'swell', midi: 52, dur: 6.0, vel: 0.72 },    // E3
        { t: 114, div: 'swell', midi: 59, dur: 6.0, vel: 0.72 },    // B3

        // ===== Measures 41-48: CODA - grandioso =====
        { t: 120, div: 'pedal', midi: 48, dur: 3.0, vel: 0.90 },    // C3
        { t: 120, div: 'great', midi: 72, dur: 1.5, vel: 0.93 },    // C5
        { t: 121.5, div: 'great', midi: 74, dur: 1.5, vel: 0.95 },  // D5
        { t: 120, div: 'great', midi: 60, dur: 3.0, vel: 0.88 },    // C4
        { t: 120, div: 'great', midi: 64, dur: 3.0, vel: 0.88 },    // E4
        { t: 120, div: 'great', midi: 67, dur: 3.0, vel: 0.88 },    // G4

        { t: 123, div: 'pedal', midi: 45, dur: 3.0, vel: 0.90 },    // A2
        { t: 123, div: 'great', midi: 76, dur: 1.5, vel: 0.95 },    // E5
        { t: 124.5, div: 'great', midi: 74, dur: 1.5, vel: 0.93 },  // D5
        { t: 123, div: 'great', midi: 57, dur: 3.0, vel: 0.88 },    // A3
        { t: 123, div: 'great', midi: 64, dur: 3.0, vel: 0.88 },    // E4
        { t: 123, div: 'great', midi: 69, dur: 3.0, vel: 0.88 },    // A4

        { t: 126, div: 'pedal', midi: 50, dur: 3.0, vel: 0.92 },    // D3
        { t: 126, div: 'great', midi: 74, dur: 3.0, vel: 0.95 },    // D5 (held)
        { t: 126, div: 'great', midi: 62, dur: 3.0, vel: 0.90 },    // D4
        { t: 126, div: 'great', midi: 66, dur: 3.0, vel: 0.90 },    // F#4
        { t: 126, div: 'great', midi: 69, dur: 3.0, vel: 0.90 },    // A4
        { t: 126, div: 'swell', midi: 74, dur: 3.0, vel: 0.82 },    // D5

        // Final measures: Grand G major resolution
        { t: 129, div: 'pedal', midi: 43, dur: 4.5, vel: 0.95 },    // G2
        { t: 129, div: 'pedal', midi: 31, dur: 4.5, vel: 0.90 },    // G1 (subbass)
        { t: 129, div: 'great', midi: 55, dur: 4.5, vel: 0.95 },    // G3
        { t: 129, div: 'great', midi: 59, dur: 4.5, vel: 0.95 },    // B3
        { t: 129, div: 'great', midi: 62, dur: 4.5, vel: 0.95 },    // D4
        { t: 129, div: 'great', midi: 67, dur: 4.5, vel: 0.95 },    // G4
        { t: 129, div: 'great', midi: 71, dur: 4.5, vel: 0.95 },    // B4
        { t: 129, div: 'great', midi: 74, dur: 4.5, vel: 0.95 },    // D5
        { t: 129, div: 'swell', midi: 67, dur: 4.5, vel: 0.85 },    // G4
        { t: 129, div: 'swell', midi: 71, dur: 4.5, vel: 0.85 },    // B4
    ]
};


// ============================================================
// 2. Parry - Chorale Prelude on "Eventide" (Abide with me)
// ============================================================
// Based on the EVENTIDE hymn tune by W.H. Monk (1861)
// Key of Eb major, deeply moving chorale prelude
// The hymn melody appears as cantus firmus in the soprano
// with rich chromatic harmonization beneath
// Meter: 10.10.10.10 (4/4 time), stately and devotional
// EVENTIDE melody: Eb-Eb-Eb-D-Eb-F | G-G-Ab-G-F-Eb-D-Eb
// ============================================================

const PIECE_PARRY_EVENTIDE = {
    title: "Chorale Prelude on \"Eventide\"",
    composer: "C. Hubert H. Parry",
    catalog: "Chorale Preludes",
    key: "Eb major",
    tempo: 60,
    tempoChanges: [
        { t: 0, tempo: 60, label: "Andante sostenuto" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-oboe8', 'sw-tremulant'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-subbass32']
    },
    events: [
        // ===== VERSE 1: "Abide with me, fast falls the eventide" =====
        // Line 1: Eb-Eb | Eb-D-Eb-F | G-G | (10 syllables)

        // Measure 1: pickup + "Abide with me"
        { t: 0, div: 'pedal', midi: 39, dur: 4.0, vel: 0.78 },      // Eb2
        // Soprano: Eb4-Eb4 (A-bide)
        { t: 0, div: 'swell', midi: 63, dur: 2.0, vel: 0.82 },      // Eb4
        { t: 2, div: 'swell', midi: 63, dur: 2.0, vel: 0.82 },      // Eb4
        // Alto
        { t: 0, div: 'swell', midi: 58, dur: 2.0, vel: 0.72 },      // Bb3
        { t: 2, div: 'swell', midi: 58, dur: 2.0, vel: 0.72 },      // Bb3
        // Tenor
        { t: 0, div: 'choir', midi: 55, dur: 2.0, vel: 0.70 },      // G3
        { t: 2, div: 'choir', midi: 55, dur: 2.0, vel: 0.70 },      // G3

        // Measure 2: "fast falls the e-ven-tide"
        { t: 4, div: 'pedal', midi: 39, dur: 2.0, vel: 0.78 },      // Eb2
        { t: 6, div: 'pedal', midi: 41, dur: 2.0, vel: 0.78 },      // F2
        // Soprano: Eb-D-Eb-F
        { t: 4, div: 'swell', midi: 63, dur: 1.0, vel: 0.82 },      // Eb4
        { t: 5, div: 'swell', midi: 62, dur: 1.0, vel: 0.80 },      // D4
        { t: 6, div: 'swell', midi: 63, dur: 1.0, vel: 0.82 },      // Eb4
        { t: 7, div: 'swell', midi: 65, dur: 1.0, vel: 0.85 },      // F4
        // Alto
        { t: 4, div: 'swell', midi: 58, dur: 1.0, vel: 0.72 },      // Bb3
        { t: 5, div: 'swell', midi: 56, dur: 1.0, vel: 0.70 },      // Ab3
        { t: 6, div: 'swell', midi: 58, dur: 1.0, vel: 0.72 },      // Bb3
        { t: 7, div: 'swell', midi: 58, dur: 1.0, vel: 0.72 },      // Bb3
        // Tenor
        { t: 4, div: 'choir', midi: 55, dur: 1.0, vel: 0.70 },      // G3
        { t: 5, div: 'choir', midi: 53, dur: 1.0, vel: 0.68 },      // F3
        { t: 6, div: 'choir', midi: 55, dur: 1.0, vel: 0.70 },      // G3
        { t: 7, div: 'choir', midi: 56, dur: 1.0, vel: 0.72 },      // Ab3

        // Measure 3: (continued) G-G
        { t: 8, div: 'pedal', midi: 43, dur: 4.0, vel: 0.78 },      // G2
        { t: 8, div: 'swell', midi: 67, dur: 2.0, vel: 0.85 },      // G4
        { t: 10, div: 'swell', midi: 67, dur: 2.0, vel: 0.85 },     // G4
        { t: 8, div: 'swell', midi: 58, dur: 2.0, vel: 0.72 },      // Bb3
        { t: 10, div: 'swell', midi: 63, dur: 2.0, vel: 0.72 },     // Eb4
        { t: 8, div: 'choir', midi: 55, dur: 2.0, vel: 0.70 },      // G3
        { t: 10, div: 'choir', midi: 55, dur: 2.0, vel: 0.70 },     // G3

        // Line 2: "The darkness deepens, Lord, with me abide"
        // Melody: Ab-G-F-Eb | D-Eb

        // Measure 4
        { t: 12, div: 'pedal', midi: 44, dur: 2.0, vel: 0.78 },     // Ab2
        { t: 14, div: 'pedal', midi: 39, dur: 2.0, vel: 0.78 },     // Eb2
        { t: 12, div: 'swell', midi: 68, dur: 1.0, vel: 0.85 },     // Ab4
        { t: 13, div: 'swell', midi: 67, dur: 1.0, vel: 0.85 },     // G4
        { t: 14, div: 'swell', midi: 65, dur: 1.0, vel: 0.83 },     // F4
        { t: 15, div: 'swell', midi: 63, dur: 1.0, vel: 0.82 },     // Eb4
        // Alto
        { t: 12, div: 'swell', midi: 63, dur: 1.0, vel: 0.72 },     // Eb4
        { t: 13, div: 'swell', midi: 63, dur: 1.0, vel: 0.72 },     // Eb4
        { t: 14, div: 'swell', midi: 60, dur: 1.0, vel: 0.72 },     // C4
        { t: 15, div: 'swell', midi: 58, dur: 1.0, vel: 0.72 },     // Bb3
        // Tenor
        { t: 12, div: 'choir', midi: 56, dur: 1.0, vel: 0.70 },     // Ab3
        { t: 13, div: 'choir', midi: 55, dur: 1.0, vel: 0.70 },     // G3
        { t: 14, div: 'choir', midi: 56, dur: 1.0, vel: 0.70 },     // Ab3
        { t: 15, div: 'choir', midi: 55, dur: 1.0, vel: 0.70 },     // G3

        // Measure 5: D-Eb (half cadence)
        { t: 16, div: 'pedal', midi: 34, dur: 2.0, vel: 0.78 },     // Bb1
        { t: 18, div: 'pedal', midi: 39, dur: 2.0, vel: 0.80 },     // Eb2
        { t: 16, div: 'swell', midi: 62, dur: 2.0, vel: 0.82 },     // D4
        { t: 18, div: 'swell', midi: 63, dur: 2.0, vel: 0.85 },     // Eb4
        { t: 16, div: 'swell', midi: 56, dur: 2.0, vel: 0.72 },     // Ab3
        { t: 18, div: 'swell', midi: 55, dur: 2.0, vel: 0.72 },     // G3
        { t: 16, div: 'choir', midi: 53, dur: 2.0, vel: 0.70 },     // F3
        { t: 18, div: 'choir', midi: 51, dur: 2.0, vel: 0.70 },     // Eb3

        // Line 3: "When other helpers fail and comforts flee"
        // Melody: Bb-Bb-Bb-Ab-G-F | G-Ab

        // Measure 6
        { t: 20, div: 'pedal', midi: 39, dur: 2.0, vel: 0.80 },     // Eb2
        { t: 22, div: 'pedal', midi: 44, dur: 2.0, vel: 0.80 },     // Ab2
        { t: 20, div: 'swell', midi: 70, dur: 1.0, vel: 0.87 },     // Bb4
        { t: 21, div: 'swell', midi: 70, dur: 1.0, vel: 0.87 },     // Bb4
        { t: 22, div: 'swell', midi: 70, dur: 1.0, vel: 0.87 },     // Bb4
        { t: 23, div: 'swell', midi: 68, dur: 1.0, vel: 0.85 },     // Ab4
        // Alto
        { t: 20, div: 'swell', midi: 63, dur: 1.0, vel: 0.75 },     // Eb4
        { t: 21, div: 'swell', midi: 63, dur: 1.0, vel: 0.75 },     // Eb4
        { t: 22, div: 'swell', midi: 63, dur: 1.0, vel: 0.75 },     // Eb4
        { t: 23, div: 'swell', midi: 63, dur: 1.0, vel: 0.75 },     // Eb4
        // Tenor
        { t: 20, div: 'choir', midi: 55, dur: 2.0, vel: 0.72 },     // G3
        { t: 22, div: 'choir', midi: 56, dur: 2.0, vel: 0.72 },     // Ab3

        // Measure 7
        { t: 24, div: 'pedal', midi: 39, dur: 2.0, vel: 0.80 },     // Eb2
        { t: 26, div: 'pedal', midi: 34, dur: 2.0, vel: 0.80 },     // Bb1
        { t: 24, div: 'swell', midi: 67, dur: 1.0, vel: 0.85 },     // G4
        { t: 25, div: 'swell', midi: 65, dur: 1.0, vel: 0.83 },     // F4
        { t: 26, div: 'swell', midi: 67, dur: 1.0, vel: 0.85 },     // G4
        { t: 27, div: 'swell', midi: 68, dur: 1.0, vel: 0.87 },     // Ab4
        // Alto
        { t: 24, div: 'swell', midi: 63, dur: 1.0, vel: 0.75 },     // Eb4
        { t: 25, div: 'swell', midi: 60, dur: 1.0, vel: 0.73 },     // C4
        { t: 26, div: 'swell', midi: 63, dur: 1.0, vel: 0.75 },     // Eb4
        { t: 27, div: 'swell', midi: 63, dur: 1.0, vel: 0.75 },     // Eb4
        // Tenor
        { t: 24, div: 'choir', midi: 55, dur: 1.0, vel: 0.72 },     // G3
        { t: 25, div: 'choir', midi: 56, dur: 1.0, vel: 0.72 },     // Ab3
        { t: 26, div: 'choir', midi: 58, dur: 1.0, vel: 0.72 },     // Bb3
        { t: 27, div: 'choir', midi: 56, dur: 1.0, vel: 0.72 },     // Ab3

        // Line 4: "Help of the helpless, O abide with me"
        // Melody: G-F-Eb-F | Eb-D-Eb (closing)

        // Measure 8
        { t: 28, div: 'pedal', midi: 43, dur: 2.0, vel: 0.82 },     // G2
        { t: 30, div: 'pedal', midi: 44, dur: 2.0, vel: 0.82 },     // Ab2
        { t: 28, div: 'swell', midi: 67, dur: 1.0, vel: 0.87 },     // G4
        { t: 29, div: 'swell', midi: 65, dur: 1.0, vel: 0.85 },     // F4
        { t: 30, div: 'swell', midi: 63, dur: 1.0, vel: 0.83 },     // Eb4
        { t: 31, div: 'swell', midi: 65, dur: 1.0, vel: 0.85 },     // F4
        // Alto
        { t: 28, div: 'swell', midi: 63, dur: 1.0, vel: 0.75 },     // Eb4
        { t: 29, div: 'swell', midi: 60, dur: 1.0, vel: 0.73 },     // C4
        { t: 30, div: 'swell', midi: 58, dur: 1.0, vel: 0.72 },     // Bb3
        { t: 31, div: 'swell', midi: 60, dur: 1.0, vel: 0.73 },     // C4
        // Tenor
        { t: 28, div: 'choir', midi: 55, dur: 1.0, vel: 0.72 },     // G3
        { t: 29, div: 'choir', midi: 56, dur: 1.0, vel: 0.72 },     // Ab3
        { t: 30, div: 'choir', midi: 55, dur: 1.0, vel: 0.72 },     // G3
        { t: 31, div: 'choir', midi: 53, dur: 1.0, vel: 0.72 },     // F3

        // Measure 9: Final cadence Eb-D-Eb
        { t: 32, div: 'pedal', midi: 34, dur: 2.0, vel: 0.82 },     // Bb1
        { t: 34, div: 'pedal', midi: 39, dur: 4.0, vel: 0.85 },     // Eb2
        { t: 32, div: 'swell', midi: 63, dur: 1.0, vel: 0.85 },     // Eb4
        { t: 33, div: 'swell', midi: 62, dur: 1.0, vel: 0.82 },     // D4
        { t: 34, div: 'swell', midi: 63, dur: 4.0, vel: 0.88 },     // Eb4 (held)
        { t: 32, div: 'swell', midi: 58, dur: 2.0, vel: 0.75 },     // Bb3
        { t: 34, div: 'swell', midi: 55, dur: 4.0, vel: 0.75 },     // G3
        { t: 32, div: 'choir', midi: 53, dur: 2.0, vel: 0.72 },     // F3
        { t: 34, div: 'choir', midi: 51, dur: 4.0, vel: 0.72 },     // Eb3

        // ===== VERSE 2: Richer harmonization, more chromatic =====
        // "Swift to its close ebbs out life's little day"
        // Same melody, richer texture

        // Measure 10: Eb-Eb (enriched)
        { t: 38, div: 'pedal', midi: 39, dur: 4.0, vel: 0.80 },     // Eb2
        { t: 38, div: 'swell', midi: 63, dur: 2.0, vel: 0.85 },     // Eb4
        { t: 40, div: 'swell', midi: 63, dur: 2.0, vel: 0.85 },     // Eb4
        { t: 38, div: 'swell', midi: 58, dur: 1.0, vel: 0.75 },     // Bb3
        { t: 39, div: 'swell', midi: 60, dur: 1.0, vel: 0.75 },     // C4 (chromatic inner voice)
        { t: 40, div: 'swell', midi: 58, dur: 2.0, vel: 0.75 },     // Bb3
        { t: 38, div: 'choir', midi: 55, dur: 2.0, vel: 0.72 },     // G3
        { t: 40, div: 'choir', midi: 56, dur: 2.0, vel: 0.72 },     // Ab3
        { t: 38, div: 'great', midi: 51, dur: 4.0, vel: 0.68 },     // Eb3 (great adds body)

        // Measure 11: Eb-D-Eb-F (chromatic enrichment)
        { t: 42, div: 'pedal', midi: 36, dur: 2.0, vel: 0.80 },     // C2
        { t: 44, div: 'pedal', midi: 41, dur: 2.0, vel: 0.80 },     // F2
        { t: 42, div: 'swell', midi: 63, dur: 1.0, vel: 0.85 },     // Eb4
        { t: 43, div: 'swell', midi: 62, dur: 1.0, vel: 0.83 },     // D4
        { t: 44, div: 'swell', midi: 63, dur: 1.0, vel: 0.85 },     // Eb4
        { t: 45, div: 'swell', midi: 65, dur: 1.0, vel: 0.87 },     // F4
        { t: 42, div: 'swell', midi: 56, dur: 1.0, vel: 0.75 },     // Ab3
        { t: 43, div: 'swell', midi: 56, dur: 1.0, vel: 0.73 },     // Ab3
        { t: 44, div: 'swell', midi: 58, dur: 1.0, vel: 0.75 },     // Bb3
        { t: 45, div: 'swell', midi: 60, dur: 1.0, vel: 0.77 },     // C4
        { t: 42, div: 'choir', midi: 56, dur: 2.0, vel: 0.72 },     // Ab3
        { t: 44, div: 'choir', midi: 55, dur: 2.0, vel: 0.72 },     // G3

        // Measure 12: G-G
        { t: 46, div: 'pedal', midi: 43, dur: 4.0, vel: 0.82 },     // G2
        { t: 46, div: 'swell', midi: 67, dur: 2.0, vel: 0.88 },     // G4
        { t: 48, div: 'swell', midi: 67, dur: 2.0, vel: 0.88 },     // G4
        { t: 46, div: 'swell', midi: 63, dur: 2.0, vel: 0.75 },     // Eb4
        { t: 48, div: 'swell', midi: 62, dur: 2.0, vel: 0.75 },     // D4
        { t: 46, div: 'choir', midi: 55, dur: 4.0, vel: 0.72 },     // G3
        { t: 46, div: 'great', midi: 55, dur: 4.0, vel: 0.70 },     // G3

        // Measure 13: Ab-G-F-Eb
        { t: 50, div: 'pedal', midi: 44, dur: 2.0, vel: 0.82 },     // Ab2
        { t: 52, div: 'pedal', midi: 41, dur: 2.0, vel: 0.82 },     // F2
        { t: 50, div: 'swell', midi: 68, dur: 1.0, vel: 0.88 },     // Ab4
        { t: 51, div: 'swell', midi: 67, dur: 1.0, vel: 0.87 },     // G4
        { t: 52, div: 'swell', midi: 65, dur: 1.0, vel: 0.85 },     // F4
        { t: 53, div: 'swell', midi: 63, dur: 1.0, vel: 0.83 },     // Eb4
        { t: 50, div: 'swell', midi: 63, dur: 2.0, vel: 0.75 },     // Eb4
        { t: 52, div: 'swell', midi: 60, dur: 2.0, vel: 0.75 },     // C4
        { t: 50, div: 'choir', midi: 56, dur: 2.0, vel: 0.72 },     // Ab3
        { t: 52, div: 'choir', midi: 53, dur: 2.0, vel: 0.72 },     // F3

        // Measure 14: D-Eb (cadence)
        { t: 54, div: 'pedal', midi: 34, dur: 2.0, vel: 0.82 },     // Bb1
        { t: 56, div: 'pedal', midi: 39, dur: 2.0, vel: 0.85 },     // Eb2
        { t: 54, div: 'swell', midi: 62, dur: 2.0, vel: 0.85 },     // D4
        { t: 56, div: 'swell', midi: 63, dur: 2.0, vel: 0.87 },     // Eb4
        { t: 54, div: 'swell', midi: 56, dur: 2.0, vel: 0.75 },     // Ab3
        { t: 56, div: 'swell', midi: 55, dur: 2.0, vel: 0.75 },     // G3
        { t: 54, div: 'choir', midi: 53, dur: 2.0, vel: 0.72 },     // F3
        { t: 56, div: 'choir', midi: 51, dur: 2.0, vel: 0.72 },     // Eb3

        // ===== Measures 15-18: Lines 3-4 of verse 2, building =====
        // "Earth's joys grow dim, its glories pass away"
        // Bb-Bb-Bb-Ab-G-F | G-Ab

        { t: 58, div: 'pedal', midi: 39, dur: 2.0, vel: 0.83 },     // Eb2
        { t: 60, div: 'pedal', midi: 44, dur: 2.0, vel: 0.83 },     // Ab2
        { t: 58, div: 'swell', midi: 70, dur: 1.0, vel: 0.90 },     // Bb4
        { t: 59, div: 'swell', midi: 70, dur: 1.0, vel: 0.90 },     // Bb4
        { t: 60, div: 'swell', midi: 70, dur: 1.0, vel: 0.90 },     // Bb4
        { t: 61, div: 'swell', midi: 68, dur: 1.0, vel: 0.88 },     // Ab4
        { t: 58, div: 'swell', midi: 63, dur: 2.0, vel: 0.78 },     // Eb4
        { t: 60, div: 'swell', midi: 63, dur: 2.0, vel: 0.78 },     // Eb4
        { t: 58, div: 'choir', midi: 55, dur: 2.0, vel: 0.75 },     // G3
        { t: 60, div: 'choir', midi: 56, dur: 2.0, vel: 0.75 },     // Ab3
        { t: 58, div: 'great', midi: 55, dur: 4.0, vel: 0.72 },     // G3

        // G-F-G-Ab
        { t: 62, div: 'pedal', midi: 39, dur: 2.0, vel: 0.83 },     // Eb2
        { t: 64, div: 'pedal', midi: 34, dur: 2.0, vel: 0.83 },     // Bb1
        { t: 62, div: 'swell', midi: 67, dur: 1.0, vel: 0.88 },     // G4
        { t: 63, div: 'swell', midi: 65, dur: 1.0, vel: 0.87 },     // F4
        { t: 64, div: 'swell', midi: 67, dur: 1.0, vel: 0.88 },     // G4
        { t: 65, div: 'swell', midi: 68, dur: 1.0, vel: 0.90 },     // Ab4
        { t: 62, div: 'swell', midi: 63, dur: 2.0, vel: 0.78 },     // Eb4
        { t: 64, div: 'swell', midi: 63, dur: 2.0, vel: 0.78 },     // Eb4
        { t: 62, div: 'choir', midi: 55, dur: 2.0, vel: 0.75 },     // G3
        { t: 64, div: 'choir', midi: 58, dur: 2.0, vel: 0.75 },     // Bb3

        // "Change and decay in all around I see"
        // G-F-Eb-F | Eb-D-Eb (with richer harmony)

        { t: 66, div: 'pedal', midi: 43, dur: 2.0, vel: 0.85 },     // G2
        { t: 68, div: 'pedal', midi: 44, dur: 2.0, vel: 0.85 },     // Ab2
        { t: 66, div: 'swell', midi: 67, dur: 1.0, vel: 0.90 },     // G4
        { t: 67, div: 'swell', midi: 65, dur: 1.0, vel: 0.88 },     // F4
        { t: 68, div: 'swell', midi: 63, dur: 1.0, vel: 0.87 },     // Eb4
        { t: 69, div: 'swell', midi: 65, dur: 1.0, vel: 0.88 },     // F4
        { t: 66, div: 'swell', midi: 63, dur: 2.0, vel: 0.78 },     // Eb4
        { t: 68, div: 'swell', midi: 58, dur: 2.0, vel: 0.78 },     // Bb3
        { t: 66, div: 'choir', midi: 55, dur: 2.0, vel: 0.75 },     // G3
        { t: 68, div: 'choir', midi: 55, dur: 2.0, vel: 0.75 },     // G3
        { t: 66, div: 'great', midi: 55, dur: 4.0, vel: 0.72 },     // G3

        // Final cadence: Eb-D-Eb (rich, sustained)
        { t: 70, div: 'pedal', midi: 34, dur: 2.0, vel: 0.85 },     // Bb1
        { t: 72, div: 'pedal', midi: 39, dur: 6.0, vel: 0.88 },     // Eb2
        { t: 70, div: 'swell', midi: 63, dur: 1.0, vel: 0.88 },     // Eb4
        { t: 71, div: 'swell', midi: 62, dur: 1.0, vel: 0.85 },     // D4
        { t: 72, div: 'swell', midi: 63, dur: 6.0, vel: 0.92 },     // Eb4 (held, final)
        { t: 70, div: 'swell', midi: 58, dur: 2.0, vel: 0.78 },     // Bb3
        { t: 72, div: 'swell', midi: 58, dur: 6.0, vel: 0.78 },     // Bb3
        { t: 72, div: 'swell', midi: 55, dur: 6.0, vel: 0.78 },     // G3
        { t: 70, div: 'choir', midi: 53, dur: 2.0, vel: 0.75 },     // F3
        { t: 72, div: 'choir', midi: 51, dur: 6.0, vel: 0.75 },     // Eb3
        { t: 72, div: 'great', midi: 51, dur: 6.0, vel: 0.72 },     // Eb3
    ]
};


// ============================================================
// 3. Whitlock - Folk Tune from Five Short Pieces
// ============================================================
// Second movement of Five Short Pieces (1929)
// Key of Eb major, gentle English pastoral character
// Simple folk-like melody (original, not actual folk tune)
// Influence of Vaughan Williams - modal inflections
// ABA form, quiet and lyrical throughout
// ============================================================

const PIECE_WHITLOCK_FOLK = {
    title: "Folk Tune",
    composer: "Percy Whitlock",
    catalog: "Five Short Pieces, No. 2",
    key: "Eb major",
    tempo: 66,
    tempoChanges: [
        { t: 0, tempo: 66, label: "Andante con moto" },
        { t: 72, tempo: 60, label: "Poco meno mosso" },
        { t: 120, tempo: 66, label: "Tempo primo" }
    ],
    registration: {
        great: ['gt-bourdon16', 'gt-principal8'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-tremulant'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-subbass32']
    },
    events: [
        // ===== A SECTION: Gentle folk-like melody =====
        // The melody has a pastoral, wistful quality
        // Simple diatonic tune with modal inflections

        // Measure 1-2: Opening melody on Swell
        { t: 0, div: 'pedal', midi: 39, dur: 4.0, vel: 0.70 },      // Eb2
        { t: 0, div: 'swell', midi: 63, dur: 1.5, vel: 0.78 },      // Eb4
        { t: 1.5, div: 'swell', midi: 65, dur: 1.0, vel: 0.80 },    // F4
        { t: 2.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.82 },    // G4
        { t: 0, div: 'swell', midi: 58, dur: 4.0, vel: 0.68 },      // Bb3
        { t: 0, div: 'choir', midi: 55, dur: 4.0, vel: 0.65 },      // G3

        { t: 4, div: 'pedal', midi: 34, dur: 4.0, vel: 0.70 },      // Bb1
        { t: 4, div: 'swell', midi: 68, dur: 1.5, vel: 0.82 },      // Ab4
        { t: 5.5, div: 'swell', midi: 67, dur: 1.0, vel: 0.80 },    // G4
        { t: 6.5, div: 'swell', midi: 65, dur: 1.5, vel: 0.78 },    // F4
        { t: 4, div: 'swell', midi: 58, dur: 2.0, vel: 0.68 },      // Bb3
        { t: 6, div: 'swell', midi: 60, dur: 2.0, vel: 0.68 },      // C4
        { t: 4, div: 'choir', midi: 55, dur: 4.0, vel: 0.65 },      // G3

        // Measure 3-4: Melody continues, descending
        { t: 8, div: 'pedal', midi: 39, dur: 4.0, vel: 0.70 },      // Eb2
        { t: 8, div: 'swell', midi: 63, dur: 2.0, vel: 0.80 },      // Eb4
        { t: 10, div: 'swell', midi: 62, dur: 1.0, vel: 0.78 },     // D4
        { t: 11, div: 'swell', midi: 60, dur: 1.0, vel: 0.75 },     // C4
        { t: 8, div: 'swell', midi: 56, dur: 2.0, vel: 0.68 },      // Ab3
        { t: 10, div: 'swell', midi: 55, dur: 2.0, vel: 0.68 },     // G3
        { t: 8, div: 'choir', midi: 51, dur: 4.0, vel: 0.65 },      // Eb3

        { t: 12, div: 'pedal', midi: 34, dur: 2.0, vel: 0.70 },     // Bb1
        { t: 14, div: 'pedal', midi: 39, dur: 2.0, vel: 0.72 },     // Eb2
        { t: 12, div: 'swell', midi: 58, dur: 2.0, vel: 0.75 },     // Bb3
        { t: 14, div: 'swell', midi: 63, dur: 2.0, vel: 0.78 },     // Eb4 (gentle arrival)
        { t: 12, div: 'swell', midi: 55, dur: 2.0, vel: 0.68 },     // G3
        { t: 14, div: 'swell', midi: 58, dur: 2.0, vel: 0.68 },     // Bb3
        { t: 12, div: 'choir', midi: 53, dur: 2.0, vel: 0.65 },     // F3
        { t: 14, div: 'choir', midi: 55, dur: 2.0, vel: 0.65 },     // G3

        // Measure 5-6: Second phrase, higher and more yearning
        { t: 16, div: 'pedal', midi: 44, dur: 4.0, vel: 0.72 },     // Ab2
        { t: 16, div: 'swell', midi: 68, dur: 1.5, vel: 0.82 },     // Ab4
        { t: 17.5, div: 'swell', midi: 70, dur: 1.0, vel: 0.85 },   // Bb4
        { t: 18.5, div: 'swell', midi: 72, dur: 1.5, vel: 0.87 },   // C5
        { t: 16, div: 'swell', midi: 63, dur: 4.0, vel: 0.70 },     // Eb4
        { t: 16, div: 'choir', midi: 56, dur: 4.0, vel: 0.67 },     // Ab3

        { t: 20, div: 'pedal', midi: 39, dur: 4.0, vel: 0.72 },     // Eb2
        { t: 20, div: 'swell', midi: 70, dur: 1.5, vel: 0.85 },     // Bb4
        { t: 21.5, div: 'swell', midi: 68, dur: 1.0, vel: 0.82 },   // Ab4
        { t: 22.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.80 },   // G4
        { t: 20, div: 'swell', midi: 63, dur: 2.0, vel: 0.70 },     // Eb4
        { t: 22, div: 'swell', midi: 58, dur: 2.0, vel: 0.70 },     // Bb3
        { t: 20, div: 'choir', midi: 55, dur: 4.0, vel: 0.67 },     // G3

        // Measure 7-8: Gentle descent to close A section
        { t: 24, div: 'pedal', midi: 44, dur: 4.0, vel: 0.70 },     // Ab2
        { t: 24, div: 'swell', midi: 65, dur: 1.5, vel: 0.80 },     // F4
        { t: 25.5, div: 'swell', midi: 67, dur: 1.0, vel: 0.82 },   // G4
        { t: 26.5, div: 'swell', midi: 68, dur: 1.5, vel: 0.82 },   // Ab4
        { t: 24, div: 'swell', midi: 60, dur: 2.0, vel: 0.68 },     // C4
        { t: 26, div: 'swell', midi: 63, dur: 2.0, vel: 0.68 },     // Eb4
        { t: 24, div: 'choir', midi: 56, dur: 4.0, vel: 0.65 },     // Ab3

        { t: 28, div: 'pedal', midi: 34, dur: 2.0, vel: 0.70 },     // Bb1
        { t: 30, div: 'pedal', midi: 39, dur: 2.0, vel: 0.72 },     // Eb2
        { t: 28, div: 'swell', midi: 67, dur: 1.0, vel: 0.80 },     // G4
        { t: 29, div: 'swell', midi: 65, dur: 1.0, vel: 0.78 },     // F4
        { t: 30, div: 'swell', midi: 63, dur: 2.0, vel: 0.80 },     // Eb4 (rest)
        { t: 28, div: 'swell', midi: 58, dur: 2.0, vel: 0.68 },     // Bb3
        { t: 30, div: 'swell', midi: 55, dur: 2.0, vel: 0.68 },     // G3
        { t: 28, div: 'choir', midi: 55, dur: 2.0, vel: 0.65 },     // G3
        { t: 30, div: 'choir', midi: 51, dur: 2.0, vel: 0.65 },     // Eb3

        // ===== Measures 9-12: Repeat of A with slight variation =====
        { t: 32, div: 'pedal', midi: 39, dur: 4.0, vel: 0.72 },     // Eb2
        { t: 32, div: 'swell', midi: 63, dur: 1.5, vel: 0.80 },     // Eb4
        { t: 33.5, div: 'swell', midi: 65, dur: 1.0, vel: 0.82 },   // F4
        { t: 34.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.85 },   // G4
        { t: 32, div: 'swell', midi: 58, dur: 4.0, vel: 0.70 },     // Bb3
        { t: 32, div: 'choir', midi: 55, dur: 4.0, vel: 0.67 },     // G3
        { t: 32, div: 'great', midi: 51, dur: 4.0, vel: 0.62 },     // Eb3 (added warmth)

        { t: 36, div: 'pedal', midi: 34, dur: 4.0, vel: 0.72 },     // Bb1
        { t: 36, div: 'swell', midi: 68, dur: 1.5, vel: 0.85 },     // Ab4
        { t: 37.5, div: 'swell', midi: 67, dur: 1.0, vel: 0.82 },   // G4
        { t: 38.5, div: 'swell', midi: 65, dur: 1.5, vel: 0.80 },   // F4
        { t: 36, div: 'swell', midi: 60, dur: 2.0, vel: 0.70 },     // C4
        { t: 38, div: 'swell', midi: 58, dur: 2.0, vel: 0.70 },     // Bb3
        { t: 36, div: 'choir', midi: 56, dur: 4.0, vel: 0.67 },     // Ab3

        { t: 40, div: 'pedal', midi: 39, dur: 4.0, vel: 0.72 },     // Eb2
        { t: 40, div: 'swell', midi: 63, dur: 2.0, vel: 0.82 },     // Eb4
        { t: 42, div: 'swell', midi: 62, dur: 1.0, vel: 0.80 },     // D4
        { t: 43, div: 'swell', midi: 60, dur: 1.0, vel: 0.78 },     // C4
        { t: 40, div: 'swell', midi: 56, dur: 2.0, vel: 0.70 },     // Ab3
        { t: 42, div: 'swell', midi: 55, dur: 2.0, vel: 0.70 },     // G3
        { t: 40, div: 'choir', midi: 51, dur: 4.0, vel: 0.67 },     // Eb3

        { t: 44, div: 'pedal', midi: 34, dur: 2.0, vel: 0.72 },     // Bb1
        { t: 46, div: 'pedal', midi: 39, dur: 2.0, vel: 0.74 },     // Eb2
        { t: 44, div: 'swell', midi: 58, dur: 2.0, vel: 0.78 },     // Bb3
        { t: 46, div: 'swell', midi: 63, dur: 2.0, vel: 0.80 },     // Eb4
        { t: 44, div: 'swell', midi: 55, dur: 2.0, vel: 0.70 },     // G3
        { t: 46, div: 'swell', midi: 58, dur: 2.0, vel: 0.70 },     // Bb3
        { t: 44, div: 'choir', midi: 53, dur: 2.0, vel: 0.67 },     // F3
        { t: 46, div: 'choir', midi: 55, dur: 2.0, vel: 0.67 },     // G3

        // Measure 13-14: Higher phrase, more expressive
        { t: 48, div: 'pedal', midi: 44, dur: 4.0, vel: 0.74 },     // Ab2
        { t: 48, div: 'swell', midi: 68, dur: 1.5, vel: 0.85 },     // Ab4
        { t: 49.5, div: 'swell', midi: 70, dur: 1.0, vel: 0.87 },   // Bb4
        { t: 50.5, div: 'swell', midi: 72, dur: 1.5, vel: 0.90 },   // C5
        { t: 48, div: 'swell', midi: 63, dur: 4.0, vel: 0.72 },     // Eb4
        { t: 48, div: 'choir', midi: 56, dur: 4.0, vel: 0.68 },     // Ab3

        { t: 52, div: 'pedal', midi: 39, dur: 4.0, vel: 0.74 },     // Eb2
        { t: 52, div: 'swell', midi: 70, dur: 2.0, vel: 0.88 },     // Bb4
        { t: 54, div: 'swell', midi: 68, dur: 1.0, vel: 0.85 },     // Ab4
        { t: 55, div: 'swell', midi: 67, dur: 1.0, vel: 0.82 },     // G4
        { t: 52, div: 'swell', midi: 63, dur: 2.0, vel: 0.72 },     // Eb4
        { t: 54, div: 'swell', midi: 58, dur: 2.0, vel: 0.72 },     // Bb3
        { t: 52, div: 'choir', midi: 55, dur: 4.0, vel: 0.68 },     // G3

        // Measure 15-16: Warmest climax then settling down
        { t: 56, div: 'pedal', midi: 44, dur: 4.0, vel: 0.74 },     // Ab2
        { t: 56, div: 'swell', midi: 72, dur: 2.0, vel: 0.90 },     // C5
        { t: 58, div: 'swell', midi: 70, dur: 1.0, vel: 0.87 },     // Bb4
        { t: 59, div: 'swell', midi: 68, dur: 1.0, vel: 0.85 },     // Ab4
        { t: 56, div: 'swell', midi: 63, dur: 2.0, vel: 0.72 },     // Eb4
        { t: 58, div: 'swell', midi: 65, dur: 2.0, vel: 0.72 },     // F4
        { t: 56, div: 'choir', midi: 56, dur: 4.0, vel: 0.68 },     // Ab3
        { t: 56, div: 'great', midi: 56, dur: 4.0, vel: 0.65 },     // Ab3

        { t: 60, div: 'pedal', midi: 39, dur: 4.0, vel: 0.74 },     // Eb2
        { t: 60, div: 'swell', midi: 67, dur: 1.5, vel: 0.85 },     // G4
        { t: 61.5, div: 'swell', midi: 65, dur: 1.0, vel: 0.82 },   // F4
        { t: 62.5, div: 'swell', midi: 63, dur: 1.5, vel: 0.80 },   // Eb4
        { t: 60, div: 'swell', midi: 58, dur: 2.0, vel: 0.72 },     // Bb3
        { t: 62, div: 'swell', midi: 55, dur: 2.0, vel: 0.72 },     // G3
        { t: 60, div: 'choir', midi: 55, dur: 4.0, vel: 0.68 },     // G3

        // Measure 17-18: Closing phrase
        { t: 64, div: 'pedal', midi: 44, dur: 4.0, vel: 0.72 },     // Ab2
        { t: 64, div: 'swell', midi: 63, dur: 2.0, vel: 0.80 },     // Eb4
        { t: 66, div: 'swell', midi: 62, dur: 1.0, vel: 0.78 },     // D4
        { t: 67, div: 'swell', midi: 60, dur: 1.0, vel: 0.76 },     // C4
        { t: 64, div: 'swell', midi: 56, dur: 2.0, vel: 0.70 },     // Ab3
        { t: 66, div: 'swell', midi: 55, dur: 2.0, vel: 0.70 },     // G3
        { t: 64, div: 'choir', midi: 51, dur: 4.0, vel: 0.65 },     // Eb3

        { t: 68, div: 'pedal', midi: 34, dur: 2.0, vel: 0.72 },     // Bb1
        { t: 70, div: 'pedal', midi: 39, dur: 2.0, vel: 0.74 },     // Eb2
        { t: 68, div: 'swell', midi: 58, dur: 2.0, vel: 0.78 },     // Bb3
        { t: 70, div: 'swell', midi: 63, dur: 2.0, vel: 0.80 },     // Eb4
        { t: 68, div: 'swell', midi: 55, dur: 2.0, vel: 0.68 },     // G3
        { t: 70, div: 'swell', midi: 58, dur: 2.0, vel: 0.70 },     // Bb3
        { t: 68, div: 'choir', midi: 53, dur: 2.0, vel: 0.65 },     // F3
        { t: 70, div: 'choir', midi: 55, dur: 2.0, vel: 0.67 },     // G3

        // ===== B SECTION: Middle section, slightly richer =====
        // Measures 19-26: More chromatic harmony, warmer

        { t: 72, div: 'pedal', midi: 36, dur: 4.0, vel: 0.72 },     // C2
        { t: 72, div: 'swell', midi: 60, dur: 1.5, vel: 0.82 },     // C4
        { t: 73.5, div: 'swell', midi: 62, dur: 1.0, vel: 0.83 },   // D4
        { t: 74.5, div: 'swell', midi: 63, dur: 1.5, vel: 0.85 },   // Eb4
        { t: 72, div: 'swell', midi: 55, dur: 4.0, vel: 0.70 },     // G3
        { t: 72, div: 'choir', midi: 51, dur: 4.0, vel: 0.67 },     // Eb3

        { t: 76, div: 'pedal', midi: 41, dur: 4.0, vel: 0.72 },     // F2
        { t: 76, div: 'swell', midi: 65, dur: 1.5, vel: 0.85 },     // F4
        { t: 77.5, div: 'swell', midi: 63, dur: 1.0, vel: 0.83 },   // Eb4
        { t: 78.5, div: 'swell', midi: 62, dur: 1.5, vel: 0.82 },   // D4
        { t: 76, div: 'swell', midi: 56, dur: 2.0, vel: 0.70 },     // Ab3
        { t: 78, div: 'swell', midi: 58, dur: 2.0, vel: 0.70 },     // Bb3
        { t: 76, div: 'choir', midi: 53, dur: 4.0, vel: 0.67 },     // F3

        { t: 80, div: 'pedal', midi: 43, dur: 4.0, vel: 0.72 },     // G2
        { t: 80, div: 'swell', midi: 63, dur: 2.0, vel: 0.83 },     // Eb4
        { t: 82, div: 'swell', midi: 67, dur: 2.0, vel: 0.87 },     // G4
        { t: 80, div: 'swell', midi: 58, dur: 2.0, vel: 0.70 },     // Bb3
        { t: 82, div: 'swell', midi: 62, dur: 2.0, vel: 0.70 },     // D4
        { t: 80, div: 'choir', midi: 55, dur: 4.0, vel: 0.67 },     // G3

        { t: 84, div: 'pedal', midi: 36, dur: 4.0, vel: 0.72 },     // C2
        { t: 84, div: 'swell', midi: 68, dur: 1.5, vel: 0.87 },     // Ab4
        { t: 85.5, div: 'swell', midi: 67, dur: 1.0, vel: 0.85 },   // G4
        { t: 86.5, div: 'swell', midi: 65, dur: 1.5, vel: 0.83 },   // F4
        { t: 84, div: 'swell', midi: 60, dur: 2.0, vel: 0.70 },     // C4
        { t: 86, div: 'swell', midi: 56, dur: 2.0, vel: 0.70 },     // Ab3
        { t: 84, div: 'choir', midi: 56, dur: 4.0, vel: 0.67 },     // Ab3

        // Measure 23-26: B section continuation, modal inflections
        { t: 88, div: 'pedal', midi: 41, dur: 4.0, vel: 0.74 },     // F2
        { t: 88, div: 'swell', midi: 65, dur: 1.5, vel: 0.85 },     // F4
        { t: 89.5, div: 'swell', midi: 67, dur: 1.0, vel: 0.87 },   // G4
        { t: 90.5, div: 'swell', midi: 68, dur: 1.5, vel: 0.88 },   // Ab4
        { t: 88, div: 'swell', midi: 60, dur: 4.0, vel: 0.72 },     // C4
        { t: 88, div: 'choir', midi: 53, dur: 4.0, vel: 0.68 },     // F3

        { t: 92, div: 'pedal', midi: 34, dur: 4.0, vel: 0.74 },     // Bb1
        { t: 92, div: 'swell', midi: 70, dur: 2.0, vel: 0.90 },     // Bb4 (B section peak)
        { t: 94, div: 'swell', midi: 68, dur: 1.0, vel: 0.87 },     // Ab4
        { t: 95, div: 'swell', midi: 67, dur: 1.0, vel: 0.85 },     // G4
        { t: 92, div: 'swell', midi: 58, dur: 2.0, vel: 0.72 },     // Bb3
        { t: 94, div: 'swell', midi: 63, dur: 2.0, vel: 0.72 },     // Eb4
        { t: 92, div: 'choir', midi: 55, dur: 4.0, vel: 0.68 },     // G3

        { t: 96, div: 'pedal', midi: 43, dur: 4.0, vel: 0.72 },     // G2
        { t: 96, div: 'swell', midi: 67, dur: 2.0, vel: 0.85 },     // G4
        { t: 98, div: 'swell', midi: 65, dur: 1.0, vel: 0.82 },     // F4
        { t: 99, div: 'swell', midi: 63, dur: 1.0, vel: 0.80 },     // Eb4
        { t: 96, div: 'swell', midi: 55, dur: 4.0, vel: 0.70 },     // G3
        { t: 96, div: 'choir', midi: 55, dur: 4.0, vel: 0.67 },     // G3

        { t: 100, div: 'pedal', midi: 44, dur: 4.0, vel: 0.72 },    // Ab2
        { t: 100, div: 'swell', midi: 63, dur: 2.0, vel: 0.80 },    // Eb4
        { t: 102, div: 'swell', midi: 60, dur: 1.0, vel: 0.78 },    // C4
        { t: 103, div: 'swell', midi: 58, dur: 1.0, vel: 0.76 },    // Bb3
        { t: 100, div: 'swell', midi: 56, dur: 4.0, vel: 0.70 },    // Ab3
        { t: 100, div: 'choir', midi: 51, dur: 4.0, vel: 0.67 },    // Eb3

        // Transition back to A
        { t: 104, div: 'pedal', midi: 41, dur: 4.0, vel: 0.70 },    // F2
        { t: 104, div: 'swell', midi: 60, dur: 2.0, vel: 0.78 },    // C4
        { t: 106, div: 'swell', midi: 62, dur: 2.0, vel: 0.78 },    // D4
        { t: 104, div: 'swell', midi: 56, dur: 4.0, vel: 0.68 },    // Ab3
        { t: 104, div: 'choir', midi: 53, dur: 4.0, vel: 0.65 },    // F3

        { t: 108, div: 'pedal', midi: 34, dur: 4.0, vel: 0.70 },    // Bb1
        { t: 108, div: 'swell', midi: 63, dur: 2.0, vel: 0.80 },    // Eb4
        { t: 110, div: 'swell', midi: 62, dur: 1.0, vel: 0.78 },    // D4
        { t: 111, div: 'swell', midi: 60, dur: 1.0, vel: 0.76 },    // C4
        { t: 108, div: 'swell', midi: 58, dur: 4.0, vel: 0.68 },    // Bb3
        { t: 108, div: 'choir', midi: 55, dur: 4.0, vel: 0.65 },    // G3

        // Retransition
        { t: 112, div: 'pedal', midi: 34, dur: 4.0, vel: 0.68 },    // Bb1
        { t: 116, div: 'pedal', midi: 39, dur: 4.0, vel: 0.70 },    // Eb2
        { t: 112, div: 'swell', midi: 58, dur: 4.0, vel: 0.75 },    // Bb3
        { t: 116, div: 'swell', midi: 58, dur: 4.0, vel: 0.75 },    // Bb3
        { t: 112, div: 'swell', midi: 55, dur: 4.0, vel: 0.67 },    // G3
        { t: 116, div: 'swell', midi: 55, dur: 4.0, vel: 0.67 },    // G3
        { t: 112, div: 'choir', midi: 53, dur: 4.0, vel: 0.63 },    // F3
        { t: 116, div: 'choir', midi: 51, dur: 4.0, vel: 0.63 },    // Eb3

        // ===== A' SECTION: Return, more tender =====
        // Measures 27-34: Opening theme returns, quieter

        { t: 120, div: 'pedal', midi: 39, dur: 4.0, vel: 0.68 },    // Eb2
        { t: 120, div: 'swell', midi: 63, dur: 1.5, vel: 0.77 },    // Eb4
        { t: 121.5, div: 'swell', midi: 65, dur: 1.0, vel: 0.78 },  // F4
        { t: 122.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.80 },  // G4
        { t: 120, div: 'swell', midi: 58, dur: 4.0, vel: 0.66 },    // Bb3
        { t: 120, div: 'choir', midi: 55, dur: 4.0, vel: 0.63 },    // G3

        { t: 124, div: 'pedal', midi: 34, dur: 4.0, vel: 0.68 },    // Bb1
        { t: 124, div: 'swell', midi: 68, dur: 1.5, vel: 0.80 },    // Ab4
        { t: 125.5, div: 'swell', midi: 67, dur: 1.0, vel: 0.78 },  // G4
        { t: 126.5, div: 'swell', midi: 65, dur: 1.5, vel: 0.76 },  // F4
        { t: 124, div: 'swell', midi: 58, dur: 2.0, vel: 0.66 },    // Bb3
        { t: 126, div: 'swell', midi: 60, dur: 2.0, vel: 0.66 },    // C4
        { t: 124, div: 'choir', midi: 55, dur: 4.0, vel: 0.63 },    // G3

        { t: 128, div: 'pedal', midi: 39, dur: 4.0, vel: 0.68 },    // Eb2
        { t: 128, div: 'swell', midi: 63, dur: 2.0, vel: 0.78 },    // Eb4
        { t: 130, div: 'swell', midi: 62, dur: 1.0, vel: 0.76 },    // D4
        { t: 131, div: 'swell', midi: 60, dur: 1.0, vel: 0.74 },    // C4
        { t: 128, div: 'swell', midi: 56, dur: 2.0, vel: 0.66 },    // Ab3
        { t: 130, div: 'swell', midi: 55, dur: 2.0, vel: 0.66 },    // G3
        { t: 128, div: 'choir', midi: 51, dur: 4.0, vel: 0.63 },    // Eb3

        // Final measures: very gentle Eb major close
        { t: 132, div: 'pedal', midi: 34, dur: 2.0, vel: 0.68 },    // Bb1
        { t: 134, div: 'pedal', midi: 39, dur: 6.0, vel: 0.72 },    // Eb2
        { t: 132, div: 'swell', midi: 58, dur: 2.0, vel: 0.75 },    // Bb3
        { t: 134, div: 'swell', midi: 63, dur: 6.0, vel: 0.78 },    // Eb4 (final)
        { t: 132, div: 'swell', midi: 55, dur: 2.0, vel: 0.66 },    // G3
        { t: 134, div: 'swell', midi: 55, dur: 6.0, vel: 0.68 },    // G3
        { t: 132, div: 'choir', midi: 53, dur: 2.0, vel: 0.63 },    // F3
        { t: 134, div: 'choir', midi: 51, dur: 6.0, vel: 0.65 },    // Eb3
        { t: 134, div: 'swell', midi: 58, dur: 6.0, vel: 0.66 },    // Bb3
    ]
};


// ============================================================
// 4. Howells - Psalm Prelude Set 1, No. 1
// ============================================================
// Based on Psalm 34:6: "This poor man cried, and the Lord heard him"
// Key of D minor → D major. Op. 32 (1915-16)
// Lento, poco appenato - modal D minor, wandering melodic line
// Arched dynamic: pp → ff → pp. Central climax over pedal C
// Deeply mystical, expansive, with Elgarian echoes
// ============================================================

const PIECE_HOWELLS_PSALM = {
    title: "Psalm Prelude, Set 1, No. 1",
    composer: "Herbert Howells",
    catalog: "Op. 32",
    key: "D minor",
    tempo: 52,
    tempoChanges: [
        { t: 0, tempo: 52, label: "Lento, poco appenato" },
        { t: 64, tempo: 56, label: "Poco più mosso" },
        { t: 96, tempo: 48, label: "Largamente" },
        { t: 128, tempo: 52, label: "Tempo primo" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-bourdon16', 'gt-trumpet8'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-oboe8', 'sw-tremulant'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== OPENING: pp, string registration, modal D minor =====
        // Wandering melodic line, conjunct motion, accented passing notes

        // Measure 1-2: Quiet opening, solo voice on Swell
        { t: 0, div: 'pedal', midi: 38, dur: 8.0, vel: 0.55 },      // D2
        { t: 0, div: 'swell', midi: 62, dur: 2.0, vel: 0.60 },      // D4
        { t: 2, div: 'swell', midi: 64, dur: 2.0, vel: 0.62 },      // E4
        { t: 4, div: 'swell', midi: 65, dur: 2.0, vel: 0.65 },      // F4
        { t: 6, div: 'swell', midi: 64, dur: 2.0, vel: 0.62 },      // E4
        // Inner voices
        { t: 0, div: 'swell', midi: 57, dur: 4.0, vel: 0.50 },      // A3
        { t: 4, div: 'swell', midi: 57, dur: 4.0, vel: 0.50 },      // A3

        // Measure 3-4: Melody rises, modal inflections
        { t: 8, div: 'pedal', midi: 45, dur: 4.0, vel: 0.55 },      // A2
        { t: 12, div: 'pedal', midi: 41, dur: 4.0, vel: 0.55 },     // F2
        { t: 8, div: 'swell', midi: 65, dur: 2.0, vel: 0.65 },      // F4
        { t: 10, div: 'swell', midi: 67, dur: 2.0, vel: 0.68 },     // G4
        { t: 12, div: 'swell', midi: 69, dur: 2.0, vel: 0.70 },     // A4
        { t: 14, div: 'swell', midi: 67, dur: 2.0, vel: 0.68 },     // G4
        { t: 8, div: 'swell', midi: 60, dur: 4.0, vel: 0.52 },      // C4
        { t: 12, div: 'swell', midi: 57, dur: 4.0, vel: 0.52 },     // A3
        { t: 8, div: 'choir', midi: 53, dur: 4.0, vel: 0.48 },      // F3
        { t: 12, div: 'choir', midi: 53, dur: 4.0, vel: 0.48 },     // F3

        // Measure 5-6: Melody descends chromatically
        { t: 16, div: 'pedal', midi: 43, dur: 4.0, vel: 0.57 },     // G2
        { t: 20, div: 'pedal', midi: 38, dur: 4.0, vel: 0.57 },     // D2
        { t: 16, div: 'swell', midi: 65, dur: 2.0, vel: 0.68 },     // F4
        { t: 18, div: 'swell', midi: 64, dur: 2.0, vel: 0.65 },     // E4
        { t: 20, div: 'swell', midi: 62, dur: 4.0, vel: 0.63 },     // D4 (held)
        { t: 16, div: 'swell', midi: 59, dur: 4.0, vel: 0.52 },     // B3
        { t: 20, div: 'swell', midi: 57, dur: 4.0, vel: 0.52 },     // A3
        { t: 16, div: 'choir', midi: 55, dur: 4.0, vel: 0.48 },     // G3
        { t: 20, div: 'choir', midi: 53, dur: 4.0, vel: 0.48 },     // F3

        // Measure 7-8: Second phrase, slightly more urgent
        { t: 24, div: 'pedal', midi: 36, dur: 4.0, vel: 0.58 },     // C2
        { t: 28, div: 'pedal', midi: 41, dur: 4.0, vel: 0.58 },     // F2
        { t: 24, div: 'swell', midi: 60, dur: 2.0, vel: 0.65 },     // C4
        { t: 26, div: 'swell', midi: 62, dur: 2.0, vel: 0.68 },     // D4
        { t: 28, div: 'swell', midi: 65, dur: 2.0, vel: 0.70 },     // F4
        { t: 30, div: 'swell', midi: 67, dur: 2.0, vel: 0.72 },     // G4
        { t: 24, div: 'swell', midi: 55, dur: 4.0, vel: 0.53 },     // G3
        { t: 28, div: 'swell', midi: 57, dur: 4.0, vel: 0.53 },     // A3
        { t: 24, div: 'choir', midi: 52, dur: 4.0, vel: 0.50 },     // E3
        { t: 28, div: 'choir', midi: 53, dur: 4.0, vel: 0.50 },     // F3

        // Measure 9-10: Growing, Elgarian echo
        { t: 32, div: 'pedal', midi: 43, dur: 4.0, vel: 0.62 },     // G2
        { t: 36, div: 'pedal', midi: 45, dur: 4.0, vel: 0.65 },     // A2
        { t: 32, div: 'swell', midi: 69, dur: 2.0, vel: 0.75 },     // A4
        { t: 34, div: 'swell', midi: 70, dur: 2.0, vel: 0.78 },     // Bb4
        { t: 36, div: 'swell', midi: 69, dur: 2.0, vel: 0.75 },     // A4
        { t: 38, div: 'swell', midi: 67, dur: 2.0, vel: 0.72 },     // G4
        { t: 32, div: 'swell', midi: 60, dur: 4.0, vel: 0.58 },     // C4
        { t: 36, div: 'swell', midi: 60, dur: 4.0, vel: 0.60 },     // C4
        { t: 32, div: 'choir', midi: 55, dur: 4.0, vel: 0.55 },     // G3
        { t: 36, div: 'choir', midi: 57, dur: 4.0, vel: 0.55 },     // A3

        // Measure 11-12: Elgarian chords, moving towards climax
        { t: 40, div: 'pedal', midi: 46, dur: 4.0, vel: 0.68 },     // Bb2
        { t: 44, div: 'pedal', midi: 48, dur: 4.0, vel: 0.72 },     // C3
        { t: 40, div: 'swell', midi: 70, dur: 2.0, vel: 0.80 },     // Bb4
        { t: 42, div: 'swell', midi: 72, dur: 2.0, vel: 0.83 },     // C5
        { t: 44, div: 'swell', midi: 74, dur: 2.0, vel: 0.85 },     // D5
        { t: 46, div: 'swell', midi: 72, dur: 2.0, vel: 0.83 },     // C5
        { t: 40, div: 'great', midi: 62, dur: 4.0, vel: 0.72 },     // D4
        { t: 44, div: 'great', midi: 64, dur: 4.0, vel: 0.75 },     // E4
        { t: 40, div: 'great', midi: 58, dur: 4.0, vel: 0.68 },     // Bb3
        { t: 44, div: 'great', midi: 60, dur: 4.0, vel: 0.72 },     // C4
        { t: 40, div: 'swell', midi: 65, dur: 4.0, vel: 0.65 },     // F4
        { t: 44, div: 'swell', midi: 67, dur: 4.0, vel: 0.68 },     // G4

        // Measure 13-14: Continuing to build
        { t: 48, div: 'pedal', midi: 50, dur: 4.0, vel: 0.75 },     // D3
        { t: 52, div: 'pedal', midi: 46, dur: 4.0, vel: 0.78 },     // Bb2
        { t: 48, div: 'great', midi: 74, dur: 2.0, vel: 0.88 },     // D5
        { t: 50, div: 'great', midi: 72, dur: 2.0, vel: 0.85 },     // C5
        { t: 52, div: 'great', midi: 70, dur: 2.0, vel: 0.85 },     // Bb4
        { t: 54, div: 'great', midi: 72, dur: 2.0, vel: 0.88 },     // C5
        { t: 48, div: 'great', midi: 65, dur: 4.0, vel: 0.78 },     // F4
        { t: 52, div: 'great', midi: 62, dur: 4.0, vel: 0.78 },     // D4
        { t: 48, div: 'swell', midi: 69, dur: 4.0, vel: 0.72 },     // A4
        { t: 52, div: 'swell', midi: 67, dur: 4.0, vel: 0.72 },     // G4

        // Measure 15-16: More urgency, approaching climax
        { t: 56, div: 'pedal', midi: 45, dur: 4.0, vel: 0.80 },     // A2
        { t: 60, div: 'pedal', midi: 43, dur: 4.0, vel: 0.82 },     // G2
        { t: 56, div: 'great', midi: 69, dur: 1.5, vel: 0.88 },     // A4
        { t: 57.5, div: 'great', midi: 72, dur: 1.5, vel: 0.90 },   // C5
        { t: 59, div: 'great', midi: 74, dur: 1.0, vel: 0.92 },     // D5
        { t: 60, div: 'great', midi: 76, dur: 2.0, vel: 0.93 },     // E5
        { t: 62, div: 'great', midi: 74, dur: 2.0, vel: 0.90 },     // D5
        { t: 56, div: 'great', midi: 60, dur: 4.0, vel: 0.80 },     // C4
        { t: 60, div: 'great', midi: 62, dur: 4.0, vel: 0.82 },     // D4
        { t: 56, div: 'swell', midi: 65, dur: 4.0, vel: 0.75 },     // F4
        { t: 60, div: 'swell', midi: 67, dur: 4.0, vel: 0.78 },     // G4

        // ===== CENTRAL CLIMAX over pedal C =====
        // Measure 17-20: Full organ, maximum intensity

        { t: 64, div: 'pedal', midi: 36, dur: 16.0, vel: 0.92 },    // C2 (pedal point!)
        { t: 64, div: 'pedal', midi: 48, dur: 16.0, vel: 0.88 },    // C3

        // Measure 17: ff, full organ
        { t: 64, div: 'great', midi: 77, dur: 2.0, vel: 0.95 },     // F5
        { t: 66, div: 'great', midi: 76, dur: 2.0, vel: 0.93 },     // E5
        { t: 64, div: 'great', midi: 69, dur: 4.0, vel: 0.88 },     // A4
        { t: 64, div: 'great', midi: 65, dur: 4.0, vel: 0.88 },     // F4
        { t: 64, div: 'great', midi: 60, dur: 4.0, vel: 0.85 },     // C4
        { t: 64, div: 'swell', midi: 72, dur: 4.0, vel: 0.82 },     // C5

        // Measure 18: Peak
        { t: 68, div: 'great', midi: 74, dur: 2.0, vel: 0.95 },     // D5
        { t: 70, div: 'great', midi: 77, dur: 2.0, vel: 0.97 },     // F5 (PEAK)
        { t: 68, div: 'great', midi: 65, dur: 4.0, vel: 0.90 },     // F4
        { t: 68, div: 'great', midi: 69, dur: 4.0, vel: 0.90 },     // A4
        { t: 68, div: 'swell', midi: 74, dur: 4.0, vel: 0.85 },     // D5

        // Measure 19: Beginning to subside
        { t: 72, div: 'great', midi: 76, dur: 2.0, vel: 0.93 },     // E5
        { t: 74, div: 'great', midi: 74, dur: 2.0, vel: 0.90 },     // D5
        { t: 72, div: 'great', midi: 67, dur: 4.0, vel: 0.85 },     // G4
        { t: 72, div: 'great', midi: 60, dur: 4.0, vel: 0.85 },     // C4
        { t: 72, div: 'swell', midi: 72, dur: 4.0, vel: 0.80 },     // C5

        // Measure 20: Diminishing
        { t: 76, div: 'great', midi: 72, dur: 2.0, vel: 0.88 },     // C5
        { t: 78, div: 'great', midi: 70, dur: 2.0, vel: 0.85 },     // Bb4
        { t: 76, div: 'great', midi: 65, dur: 4.0, vel: 0.80 },     // F4
        { t: 76, div: 'great', midi: 57, dur: 4.0, vel: 0.80 },     // A3
        { t: 76, div: 'swell', midi: 69, dur: 4.0, vel: 0.75 },     // A4

        // ===== DESCENT FROM CLIMAX =====
        // Measures 21-24: Gradually subsiding, Elgarian chords return

        { t: 80, div: 'pedal', midi: 41, dur: 4.0, vel: 0.78 },     // F2
        { t: 80, div: 'great', midi: 69, dur: 2.0, vel: 0.82 },     // A4
        { t: 82, div: 'great', midi: 67, dur: 2.0, vel: 0.80 },     // G4
        { t: 80, div: 'great', midi: 60, dur: 4.0, vel: 0.75 },     // C4
        { t: 80, div: 'great', midi: 57, dur: 4.0, vel: 0.75 },     // A3
        { t: 80, div: 'swell', midi: 65, dur: 4.0, vel: 0.72 },     // F4

        { t: 84, div: 'pedal', midi: 43, dur: 4.0, vel: 0.75 },     // G2
        { t: 84, div: 'swell', midi: 67, dur: 2.0, vel: 0.78 },     // G4
        { t: 86, div: 'swell', midi: 65, dur: 2.0, vel: 0.75 },     // F4
        { t: 84, div: 'swell', midi: 59, dur: 4.0, vel: 0.68 },     // B3
        { t: 84, div: 'choir', midi: 55, dur: 4.0, vel: 0.62 },     // G3

        { t: 88, div: 'pedal', midi: 45, dur: 4.0, vel: 0.72 },     // A2
        { t: 88, div: 'swell', midi: 65, dur: 2.0, vel: 0.75 },     // F4
        { t: 90, div: 'swell', midi: 64, dur: 2.0, vel: 0.72 },     // E4
        { t: 88, div: 'swell', midi: 57, dur: 4.0, vel: 0.65 },     // A3
        { t: 88, div: 'choir', midi: 53, dur: 4.0, vel: 0.60 },     // F3

        { t: 92, div: 'pedal', midi: 46, dur: 4.0, vel: 0.68 },     // Bb2
        { t: 92, div: 'swell', midi: 62, dur: 2.0, vel: 0.72 },     // D4
        { t: 94, div: 'swell', midi: 60, dur: 2.0, vel: 0.68 },     // C4
        { t: 92, div: 'swell', midi: 58, dur: 4.0, vel: 0.62 },     // Bb3
        { t: 92, div: 'choir', midi: 55, dur: 4.0, vel: 0.58 },     // G3

        // ===== Measures 25-28: Elgarian chords heard again =====
        { t: 96, div: 'pedal', midi: 43, dur: 8.0, vel: 0.65 },     // G2
        { t: 96, div: 'swell', midi: 62, dur: 4.0, vel: 0.70 },     // D4
        { t: 100, div: 'swell', midi: 64, dur: 4.0, vel: 0.68 },    // E4
        { t: 96, div: 'swell', midi: 55, dur: 4.0, vel: 0.60 },     // G3
        { t: 100, div: 'swell', midi: 57, dur: 4.0, vel: 0.58 },    // A3
        { t: 96, div: 'choir', midi: 59, dur: 8.0, vel: 0.55 },     // B3

        { t: 104, div: 'pedal', midi: 41, dur: 4.0, vel: 0.62 },    // F2
        { t: 108, div: 'pedal', midi: 45, dur: 4.0, vel: 0.60 },    // A2
        { t: 104, div: 'swell', midi: 65, dur: 2.0, vel: 0.68 },    // F4
        { t: 106, div: 'swell', midi: 64, dur: 2.0, vel: 0.65 },    // E4
        { t: 108, div: 'swell', midi: 62, dur: 2.0, vel: 0.63 },    // D4
        { t: 110, div: 'swell', midi: 60, dur: 2.0, vel: 0.60 },    // C4
        { t: 104, div: 'swell', midi: 57, dur: 4.0, vel: 0.55 },    // A3
        { t: 108, div: 'swell', midi: 57, dur: 4.0, vel: 0.53 },    // A3
        { t: 104, div: 'choir', midi: 53, dur: 8.0, vel: 0.52 },    // F3

        // ===== Measures 29-32: Trouble resolved, heading to D major =====
        { t: 112, div: 'pedal', midi: 46, dur: 4.0, vel: 0.58 },    // Bb2
        { t: 112, div: 'swell', midi: 62, dur: 2.0, vel: 0.62 },    // D4
        { t: 114, div: 'swell', midi: 60, dur: 2.0, vel: 0.60 },    // C4
        { t: 112, div: 'swell', midi: 55, dur: 4.0, vel: 0.53 },    // G3
        { t: 112, div: 'choir', midi: 58, dur: 4.0, vel: 0.50 },    // Bb3

        { t: 116, div: 'pedal', midi: 45, dur: 4.0, vel: 0.58 },    // A2
        { t: 116, div: 'swell', midi: 61, dur: 2.0, vel: 0.60 },    // C#4 (leading to D)
        { t: 118, div: 'swell', midi: 62, dur: 2.0, vel: 0.62 },    // D4
        { t: 116, div: 'swell', midi: 57, dur: 4.0, vel: 0.53 },    // A3
        { t: 116, div: 'choir', midi: 52, dur: 4.0, vel: 0.50 },    // E3

        { t: 120, div: 'pedal', midi: 43, dur: 4.0, vel: 0.55 },    // G2
        { t: 120, div: 'swell', midi: 62, dur: 2.0, vel: 0.60 },    // D4
        { t: 122, div: 'swell', midi: 64, dur: 2.0, vel: 0.58 },    // E4
        { t: 120, div: 'swell', midi: 55, dur: 4.0, vel: 0.52 },    // G3
        { t: 120, div: 'choir', midi: 59, dur: 4.0, vel: 0.48 },    // B3

        { t: 124, div: 'pedal', midi: 45, dur: 4.0, vel: 0.55 },    // A2
        { t: 124, div: 'swell', midi: 62, dur: 4.0, vel: 0.58 },    // D4
        { t: 124, div: 'swell', midi: 57, dur: 4.0, vel: 0.52 },    // A3
        { t: 124, div: 'choir', midi: 61, dur: 4.0, vel: 0.48 },    // C#4

        // ===== FINAL: Hushed chord of D MAJOR =====
        { t: 128, div: 'pedal', midi: 38, dur: 12.0, vel: 0.55 },   // D2
        { t: 128, div: 'pedal', midi: 26, dur: 12.0, vel: 0.50 },   // D1 (subbass)
        { t: 128, div: 'swell', midi: 62, dur: 12.0, vel: 0.58 },   // D4
        { t: 128, div: 'swell', midi: 66, dur: 12.0, vel: 0.55 },   // F#4 (MAJOR!)
        { t: 128, div: 'swell', midi: 57, dur: 12.0, vel: 0.50 },   // A3
        { t: 128, div: 'choir', midi: 54, dur: 12.0, vel: 0.48 },   // F#3
        { t: 128, div: 'choir', midi: 50, dur: 12.0, vel: 0.45 },   // D3
    ]
};


// ============================================================
// 5. Walton - Crown Imperial March (arr. Murrill)
// ============================================================
// Coronation march (1937), arranged for organ by Herbert Murrill
// Key of C major, ABABC form. Allegro reale.
// Brisk opening theme, broad Elgarian trio in Ab major,
// return to C major, festive coda.
// Brilliant and ceremonial, pomp and circumstance tradition.
// ============================================================

const PIECE_WALTON_CROWN = {
    title: "Crown Imperial March",
    composer: "William Walton",
    catalog: "arr. Murrill",
    key: "C major",
    tempo: 120,
    tempoChanges: [
        { t: 0, tempo: 120, label: "Allegro reale" },
        { t: 72, tempo: 92, label: "Trio - Largamente" },
        { t: 128, tempo: 120, label: "Tempo primo" },
        { t: 168, tempo: 126, label: "Più mosso - Coda" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-clarinet8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== A SECTION: Opening march theme in C major =====
        // Rhythmically pointed, brilliant, regal character

        // Measure 1-2: Bold opening fanfare
        { t: 0, div: 'pedal', midi: 36, dur: 1.0, vel: 0.92 },      // C2
        { t: 0, div: 'great', midi: 60, dur: 0.5, vel: 0.93 },      // C4
        { t: 0, div: 'great', midi: 64, dur: 0.5, vel: 0.93 },      // E4
        { t: 0, div: 'great', midi: 67, dur: 0.5, vel: 0.93 },      // G4
        { t: 0, div: 'great', midi: 72, dur: 0.5, vel: 0.95 },      // C5
        { t: 0.5, div: 'great', midi: 72, dur: 0.25, vel: 0.90 },   // C5 (dotted rhythm)
        { t: 0.75, div: 'great', midi: 71, dur: 0.25, vel: 0.88 },  // B4
        { t: 1, div: 'pedal', midi: 43, dur: 1.0, vel: 0.90 },      // G2
        { t: 1, div: 'great', midi: 72, dur: 1.0, vel: 0.93 },      // C5
        { t: 1, div: 'great', midi: 64, dur: 1.0, vel: 0.90 },      // E4
        { t: 1, div: 'great', midi: 67, dur: 1.0, vel: 0.90 },      // G4

        { t: 2, div: 'pedal', midi: 36, dur: 1.0, vel: 0.92 },      // C2
        { t: 2, div: 'great', midi: 74, dur: 0.5, vel: 0.95 },      // D5
        { t: 2.5, div: 'great', midi: 72, dur: 0.25, vel: 0.92 },   // C5
        { t: 2.75, div: 'great', midi: 71, dur: 0.25, vel: 0.90 },  // B4
        { t: 3, div: 'pedal', midi: 43, dur: 1.0, vel: 0.90 },      // G2
        { t: 3, div: 'great', midi: 72, dur: 0.75, vel: 0.93 },     // C5
        { t: 3.75, div: 'great', midi: 74, dur: 0.25, vel: 0.90 },  // D5
        { t: 2, div: 'great', midi: 64, dur: 2.0, vel: 0.88 },      // E4
        { t: 2, div: 'great', midi: 67, dur: 2.0, vel: 0.88 },      // G4

        // Measure 3-4: March theme continues, rhythmically crisp
        { t: 4, div: 'pedal', midi: 45, dur: 1.0, vel: 0.90 },      // A2
        { t: 4, div: 'great', midi: 76, dur: 0.75, vel: 0.95 },     // E5
        { t: 4.75, div: 'great', midi: 74, dur: 0.25, vel: 0.92 },  // D5
        { t: 5, div: 'pedal', midi: 41, dur: 1.0, vel: 0.90 },      // F2
        { t: 5, div: 'great', midi: 72, dur: 1.0, vel: 0.93 },      // C5
        { t: 4, div: 'great', midi: 64, dur: 2.0, vel: 0.88 },      // E4
        { t: 4, div: 'great', midi: 69, dur: 2.0, vel: 0.88 },      // A4

        { t: 6, div: 'pedal', midi: 43, dur: 2.0, vel: 0.92 },      // G2
        { t: 6, div: 'great', midi: 71, dur: 0.5, vel: 0.93 },      // B4
        { t: 6.5, div: 'great', midi: 72, dur: 0.25, vel: 0.92 },   // C5
        { t: 6.75, div: 'great', midi: 74, dur: 0.25, vel: 0.93 },  // D5
        { t: 7, div: 'great', midi: 76, dur: 0.75, vel: 0.95 },     // E5
        { t: 7.75, div: 'great', midi: 74, dur: 0.25, vel: 0.93 },  // D5
        { t: 6, div: 'great', midi: 59, dur: 2.0, vel: 0.88 },      // B3
        { t: 6, div: 'great', midi: 67, dur: 2.0, vel: 0.88 },      // G4

        // Measure 5-6: Continuation with big chords
        { t: 8, div: 'pedal', midi: 36, dur: 2.0, vel: 0.92 },      // C2
        { t: 8, div: 'great', midi: 72, dur: 2.0, vel: 0.95 },      // C5
        { t: 8, div: 'great', midi: 60, dur: 2.0, vel: 0.90 },      // C4
        { t: 8, div: 'great', midi: 64, dur: 2.0, vel: 0.90 },      // E4
        { t: 8, div: 'great', midi: 67, dur: 2.0, vel: 0.90 },      // G4

        { t: 10, div: 'pedal', midi: 41, dur: 1.0, vel: 0.90 },     // F2
        { t: 11, div: 'pedal', midi: 43, dur: 1.0, vel: 0.92 },     // G2
        { t: 10, div: 'great', midi: 69, dur: 0.5, vel: 0.92 },     // A4
        { t: 10.5, div: 'great', midi: 71, dur: 0.25, vel: 0.90 },  // B4
        { t: 10.75, div: 'great', midi: 72, dur: 0.25, vel: 0.92 }, // C5
        { t: 11, div: 'great', midi: 74, dur: 0.75, vel: 0.95 },    // D5
        { t: 11.75, div: 'great', midi: 72, dur: 0.25, vel: 0.92 }, // C5
        { t: 10, div: 'great', midi: 65, dur: 2.0, vel: 0.88 },     // F4

        // Measure 7-8: Half cadence, preparing repeat
        { t: 12, div: 'pedal', midi: 45, dur: 1.0, vel: 0.90 },     // A2
        { t: 13, div: 'pedal', midi: 43, dur: 1.0, vel: 0.92 },     // G2
        { t: 12, div: 'great', midi: 76, dur: 0.75, vel: 0.95 },    // E5
        { t: 12.75, div: 'great', midi: 74, dur: 0.25, vel: 0.93 }, // D5
        { t: 13, div: 'great', midi: 72, dur: 1.0, vel: 0.93 },     // C5
        { t: 12, div: 'great', midi: 64, dur: 2.0, vel: 0.88 },     // E4
        { t: 12, div: 'great', midi: 69, dur: 2.0, vel: 0.88 },     // A4

        { t: 14, div: 'pedal', midi: 43, dur: 2.0, vel: 0.92 },     // G2
        { t: 14, div: 'great', midi: 71, dur: 2.0, vel: 0.93 },     // B4
        { t: 14, div: 'great', midi: 59, dur: 2.0, vel: 0.90 },     // B3
        { t: 14, div: 'great', midi: 62, dur: 2.0, vel: 0.90 },     // D4
        { t: 14, div: 'great', midi: 67, dur: 2.0, vel: 0.90 },     // G4

        // ===== B SECTION: Second theme, slightly broader =====
        // Measures 9-16

        { t: 16, div: 'pedal', midi: 36, dur: 2.0, vel: 0.90 },     // C2
        { t: 16, div: 'great', midi: 67, dur: 0.75, vel: 0.92 },    // G4
        { t: 16.75, div: 'great', midi: 69, dur: 0.25, vel: 0.90 }, // A4
        { t: 17, div: 'great', midi: 72, dur: 1.0, vel: 0.93 },     // C5
        { t: 16, div: 'great', midi: 60, dur: 2.0, vel: 0.88 },     // C4
        { t: 16, div: 'great', midi: 64, dur: 2.0, vel: 0.88 },     // E4

        { t: 18, div: 'pedal', midi: 41, dur: 2.0, vel: 0.90 },     // F2
        { t: 18, div: 'great', midi: 76, dur: 0.75, vel: 0.95 },    // E5
        { t: 18.75, div: 'great', midi: 74, dur: 0.25, vel: 0.92 }, // D5
        { t: 19, div: 'great', midi: 72, dur: 0.5, vel: 0.93 },     // C5
        { t: 19.5, div: 'great', midi: 71, dur: 0.5, vel: 0.90 },   // B4
        { t: 18, div: 'great', midi: 60, dur: 2.0, vel: 0.88 },     // C4
        { t: 18, div: 'great', midi: 65, dur: 2.0, vel: 0.88 },     // F4

        { t: 20, div: 'pedal', midi: 43, dur: 2.0, vel: 0.92 },     // G2
        { t: 20, div: 'great', midi: 72, dur: 1.5, vel: 0.95 },     // C5
        { t: 21.5, div: 'great', midi: 74, dur: 0.5, vel: 0.92 },   // D5
        { t: 20, div: 'great', midi: 64, dur: 2.0, vel: 0.88 },     // E4
        { t: 20, div: 'great', midi: 67, dur: 2.0, vel: 0.88 },     // G4

        { t: 22, div: 'pedal', midi: 36, dur: 2.0, vel: 0.92 },     // C2
        { t: 22, div: 'great', midi: 76, dur: 2.0, vel: 0.95 },     // E5
        { t: 22, div: 'great', midi: 60, dur: 2.0, vel: 0.90 },     // C4
        { t: 22, div: 'great', midi: 64, dur: 2.0, vel: 0.90 },     // E4
        { t: 22, div: 'great', midi: 72, dur: 2.0, vel: 0.90 },     // C5

        // Measures 13-16: Building energy
        { t: 24, div: 'pedal', midi: 45, dur: 1.0, vel: 0.90 },     // A2
        { t: 25, div: 'pedal', midi: 43, dur: 1.0, vel: 0.90 },     // G2
        { t: 24, div: 'great', midi: 74, dur: 0.5, vel: 0.93 },     // D5
        { t: 24.5, div: 'great', midi: 72, dur: 0.25, vel: 0.92 },  // C5
        { t: 24.75, div: 'great', midi: 71, dur: 0.25, vel: 0.90 }, // B4
        { t: 25, div: 'great', midi: 69, dur: 1.0, vel: 0.92 },     // A4
        { t: 24, div: 'great', midi: 57, dur: 2.0, vel: 0.88 },     // A3
        { t: 24, div: 'great', midi: 64, dur: 2.0, vel: 0.88 },     // E4

        { t: 26, div: 'pedal', midi: 41, dur: 1.0, vel: 0.90 },     // F2
        { t: 27, div: 'pedal', midi: 43, dur: 1.0, vel: 0.92 },     // G2
        { t: 26, div: 'great', midi: 72, dur: 0.5, vel: 0.93 },     // C5
        { t: 26.5, div: 'great', midi: 71, dur: 0.25, vel: 0.92 },  // B4
        { t: 26.75, div: 'great', midi: 69, dur: 0.25, vel: 0.90 }, // A4
        { t: 27, div: 'great', midi: 67, dur: 1.0, vel: 0.92 },     // G4
        { t: 26, div: 'great', midi: 60, dur: 2.0, vel: 0.88 },     // C4
        { t: 26, div: 'great', midi: 65, dur: 2.0, vel: 0.88 },     // F4

        // Cadence to repeat
        { t: 28, div: 'pedal', midi: 43, dur: 2.0, vel: 0.92 },     // G2
        { t: 28, div: 'great', midi: 67, dur: 0.5, vel: 0.92 },     // G4
        { t: 28.5, div: 'great', midi: 69, dur: 0.5, vel: 0.93 },   // A4
        { t: 29, div: 'great', midi: 71, dur: 1.0, vel: 0.95 },     // B4
        { t: 28, div: 'great', midi: 59, dur: 2.0, vel: 0.90 },     // B3
        { t: 28, div: 'great', midi: 62, dur: 2.0, vel: 0.90 },     // D4

        { t: 30, div: 'pedal', midi: 36, dur: 2.0, vel: 0.95 },     // C2
        { t: 30, div: 'great', midi: 72, dur: 2.0, vel: 0.95 },     // C5
        { t: 30, div: 'great', midi: 60, dur: 2.0, vel: 0.92 },     // C4
        { t: 30, div: 'great', midi: 64, dur: 2.0, vel: 0.92 },     // E4
        { t: 30, div: 'great', midi: 67, dur: 2.0, vel: 0.92 },     // G4

        // ===== A REPEAT: Abbreviated =====
        // Measures 17-24
        { t: 32, div: 'pedal', midi: 36, dur: 1.0, vel: 0.93 },     // C2
        { t: 32, div: 'great', midi: 60, dur: 0.5, vel: 0.93 },     // C4
        { t: 32, div: 'great', midi: 64, dur: 0.5, vel: 0.93 },     // E4
        { t: 32, div: 'great', midi: 67, dur: 0.5, vel: 0.93 },     // G4
        { t: 32, div: 'great', midi: 72, dur: 0.5, vel: 0.95 },     // C5
        { t: 32.5, div: 'great', midi: 72, dur: 0.25, vel: 0.92 },  // C5
        { t: 32.75, div: 'great', midi: 71, dur: 0.25, vel: 0.90 }, // B4
        { t: 33, div: 'pedal', midi: 43, dur: 1.0, vel: 0.92 },     // G2
        { t: 33, div: 'great', midi: 72, dur: 1.0, vel: 0.93 },     // C5
        { t: 33, div: 'great', midi: 64, dur: 1.0, vel: 0.90 },     // E4

        { t: 34, div: 'pedal', midi: 36, dur: 1.0, vel: 0.93 },     // C2
        { t: 34, div: 'great', midi: 74, dur: 0.5, vel: 0.95 },     // D5
        { t: 34.5, div: 'great', midi: 72, dur: 0.25, vel: 0.93 },  // C5
        { t: 34.75, div: 'great', midi: 71, dur: 0.25, vel: 0.92 }, // B4
        { t: 35, div: 'pedal', midi: 43, dur: 1.0, vel: 0.92 },     // G2
        { t: 35, div: 'great', midi: 72, dur: 1.0, vel: 0.93 },     // C5

        // Measures 19-24: Continuing march to transition
        { t: 36, div: 'pedal', midi: 45, dur: 2.0, vel: 0.92 },     // A2
        { t: 36, div: 'great', midi: 76, dur: 0.75, vel: 0.95 },    // E5
        { t: 36.75, div: 'great', midi: 74, dur: 0.25, vel: 0.93 }, // D5
        { t: 37, div: 'great', midi: 72, dur: 1.0, vel: 0.93 },     // C5
        { t: 36, div: 'great', midi: 64, dur: 2.0, vel: 0.88 },     // E4
        { t: 36, div: 'great', midi: 69, dur: 2.0, vel: 0.88 },     // A4

        { t: 38, div: 'pedal', midi: 43, dur: 2.0, vel: 0.92 },     // G2
        { t: 38, div: 'great', midi: 71, dur: 0.5, vel: 0.93 },     // B4
        { t: 38.5, div: 'great', midi: 72, dur: 0.25, vel: 0.92 },  // C5
        { t: 38.75, div: 'great', midi: 74, dur: 0.25, vel: 0.93 }, // D5
        { t: 39, div: 'great', midi: 76, dur: 1.0, vel: 0.95 },     // E5
        { t: 38, div: 'great', midi: 59, dur: 2.0, vel: 0.88 },     // B3
        { t: 38, div: 'great', midi: 67, dur: 2.0, vel: 0.88 },     // G4

        // Measures 21-24: Building to transition, modulating toward Ab
        { t: 40, div: 'pedal', midi: 36, dur: 2.0, vel: 0.93 },     // C2
        { t: 40, div: 'great', midi: 72, dur: 2.0, vel: 0.95 },     // C5
        { t: 40, div: 'great', midi: 60, dur: 2.0, vel: 0.90 },     // C4
        { t: 40, div: 'great', midi: 64, dur: 2.0, vel: 0.90 },     // E4
        { t: 40, div: 'great', midi: 67, dur: 2.0, vel: 0.90 },     // G4

        { t: 42, div: 'pedal', midi: 41, dur: 2.0, vel: 0.90 },     // F2
        { t: 42, div: 'great', midi: 69, dur: 2.0, vel: 0.92 },     // A4
        { t: 42, div: 'great', midi: 60, dur: 2.0, vel: 0.88 },     // C4
        { t: 42, div: 'great', midi: 65, dur: 2.0, vel: 0.88 },     // F4

        // Transition: modulating to Ab major
        { t: 44, div: 'pedal', midi: 43, dur: 2.0, vel: 0.88 },     // G2
        { t: 44, div: 'great', midi: 67, dur: 1.0, vel: 0.90 },     // G4
        { t: 45, div: 'great', midi: 68, dur: 1.0, vel: 0.88 },     // Ab4
        { t: 44, div: 'great', midi: 59, dur: 2.0, vel: 0.85 },     // B3

        { t: 46, div: 'pedal', midi: 44, dur: 2.0, vel: 0.85 },     // Ab2
        { t: 46, div: 'swell', midi: 68, dur: 2.0, vel: 0.82 },     // Ab4
        { t: 46, div: 'swell', midi: 63, dur: 2.0, vel: 0.78 },     // Eb4
        { t: 46, div: 'swell', midi: 60, dur: 2.0, vel: 0.78 },     // C4

        // More transition measures
        { t: 48, div: 'pedal', midi: 39, dur: 2.0, vel: 0.85 },     // Eb2
        { t: 48, div: 'swell', midi: 70, dur: 1.0, vel: 0.82 },     // Bb4
        { t: 49, div: 'swell', midi: 68, dur: 1.0, vel: 0.80 },     // Ab4
        { t: 48, div: 'swell', midi: 63, dur: 2.0, vel: 0.78 },     // Eb4

        { t: 50, div: 'pedal', midi: 44, dur: 2.0, vel: 0.85 },     // Ab2
        { t: 50, div: 'swell', midi: 68, dur: 2.0, vel: 0.82 },     // Ab4
        { t: 50, div: 'swell', midi: 60, dur: 2.0, vel: 0.78 },     // C4
        { t: 50, div: 'swell', midi: 63, dur: 2.0, vel: 0.78 },     // Eb4

        // Settling into Ab
        { t: 52, div: 'pedal', midi: 39, dur: 4.0, vel: 0.82 },     // Eb2
        { t: 52, div: 'swell', midi: 67, dur: 2.0, vel: 0.80 },     // G4
        { t: 54, div: 'swell', midi: 68, dur: 2.0, vel: 0.82 },     // Ab4
        { t: 52, div: 'swell', midi: 63, dur: 4.0, vel: 0.78 },     // Eb4
        { t: 52, div: 'choir', midi: 58, dur: 4.0, vel: 0.72 },     // Bb3

        { t: 56, div: 'pedal', midi: 44, dur: 4.0, vel: 0.82 },     // Ab2
        { t: 56, div: 'swell', midi: 68, dur: 4.0, vel: 0.82 },     // Ab4
        { t: 56, div: 'swell', midi: 60, dur: 4.0, vel: 0.78 },     // C4
        { t: 56, div: 'swell', midi: 63, dur: 4.0, vel: 0.78 },     // Eb4

        // Preparing trio entrance
        { t: 60, div: 'pedal', midi: 39, dur: 4.0, vel: 0.80 },     // Eb2
        { t: 60, div: 'swell', midi: 70, dur: 2.0, vel: 0.80 },     // Bb4
        { t: 62, div: 'swell', midi: 72, dur: 2.0, vel: 0.82 },     // C5
        { t: 60, div: 'swell', midi: 63, dur: 4.0, vel: 0.76 },     // Eb4

        { t: 64, div: 'pedal', midi: 44, dur: 4.0, vel: 0.82 },     // Ab2
        { t: 64, div: 'swell', midi: 68, dur: 4.0, vel: 0.82 },     // Ab4
        { t: 64, div: 'swell', midi: 60, dur: 4.0, vel: 0.78 },     // C4
        { t: 64, div: 'swell', midi: 63, dur: 4.0, vel: 0.78 },     // Eb4

        { t: 68, div: 'pedal', midi: 39, dur: 4.0, vel: 0.82 },     // Eb2
        { t: 68, div: 'swell', midi: 67, dur: 2.0, vel: 0.80 },     // G4
        { t: 70, div: 'swell', midi: 68, dur: 2.0, vel: 0.82 },     // Ab4
        { t: 68, div: 'swell', midi: 58, dur: 4.0, vel: 0.76 },     // Bb3

        // ===== TRIO: Ab major, broad cantabile melody =====
        // Measures 25-40: Elgarian broad theme, lyrical

        { t: 72, div: 'pedal', midi: 44, dur: 4.0, vel: 0.82 },     // Ab2
        { t: 72, div: 'swell', midi: 68, dur: 4.0, vel: 0.88 },     // Ab4 (melody)
        { t: 72, div: 'swell', midi: 60, dur: 4.0, vel: 0.75 },     // C4
        { t: 72, div: 'swell', midi: 63, dur: 4.0, vel: 0.75 },     // Eb4
        { t: 72, div: 'choir', midi: 56, dur: 4.0, vel: 0.70 },     // Ab3

        { t: 76, div: 'pedal', midi: 39, dur: 4.0, vel: 0.82 },     // Eb2
        { t: 76, div: 'swell', midi: 70, dur: 2.0, vel: 0.90 },     // Bb4
        { t: 78, div: 'swell', midi: 72, dur: 2.0, vel: 0.92 },     // C5
        { t: 76, div: 'swell', midi: 63, dur: 4.0, vel: 0.75 },     // Eb4
        { t: 76, div: 'swell', midi: 67, dur: 4.0, vel: 0.75 },     // G4
        { t: 76, div: 'choir', midi: 58, dur: 4.0, vel: 0.70 },     // Bb3

        { t: 80, div: 'pedal', midi: 41, dur: 4.0, vel: 0.82 },     // F2
        { t: 80, div: 'swell', midi: 75, dur: 4.0, vel: 0.93 },     // Eb5 (high point)
        { t: 80, div: 'swell', midi: 65, dur: 4.0, vel: 0.78 },     // F4
        { t: 80, div: 'swell', midi: 68, dur: 4.0, vel: 0.78 },     // Ab4
        { t: 80, div: 'choir', midi: 60, dur: 4.0, vel: 0.72 },     // C4

        { t: 84, div: 'pedal', midi: 39, dur: 4.0, vel: 0.82 },     // Eb2
        { t: 84, div: 'swell', midi: 75, dur: 2.0, vel: 0.92 },     // Eb5
        { t: 86, div: 'swell', midi: 73, dur: 2.0, vel: 0.90 },     // Db5
        { t: 84, div: 'swell', midi: 63, dur: 4.0, vel: 0.75 },     // Eb4
        { t: 84, div: 'swell', midi: 68, dur: 4.0, vel: 0.75 },     // Ab4

        // Trio continuation
        { t: 88, div: 'pedal', midi: 44, dur: 4.0, vel: 0.82 },     // Ab2
        { t: 88, div: 'swell', midi: 72, dur: 4.0, vel: 0.90 },     // C5
        { t: 88, div: 'swell', midi: 63, dur: 4.0, vel: 0.75 },     // Eb4
        { t: 88, div: 'swell', midi: 68, dur: 4.0, vel: 0.75 },     // Ab4

        { t: 92, div: 'pedal', midi: 46, dur: 4.0, vel: 0.82 },     // Bb2
        { t: 92, div: 'swell', midi: 70, dur: 2.0, vel: 0.88 },     // Bb4
        { t: 94, div: 'swell', midi: 68, dur: 2.0, vel: 0.85 },     // Ab4
        { t: 92, div: 'swell', midi: 63, dur: 4.0, vel: 0.75 },     // Eb4
        { t: 92, div: 'swell', midi: 58, dur: 4.0, vel: 0.75 },     // Bb3

        { t: 96, div: 'pedal', midi: 44, dur: 4.0, vel: 0.85 },     // Ab2
        { t: 96, div: 'swell', midi: 68, dur: 4.0, vel: 0.90 },     // Ab4
        { t: 96, div: 'swell', midi: 60, dur: 4.0, vel: 0.78 },     // C4
        { t: 96, div: 'swell', midi: 63, dur: 4.0, vel: 0.78 },     // Eb4

        // Trio second phrase - more passionate
        { t: 100, div: 'pedal', midi: 41, dur: 4.0, vel: 0.85 },    // F2
        { t: 100, div: 'swell', midi: 68, dur: 2.0, vel: 0.90 },    // Ab4
        { t: 102, div: 'swell', midi: 70, dur: 2.0, vel: 0.92 },    // Bb4
        { t: 100, div: 'swell', midi: 60, dur: 4.0, vel: 0.78 },    // C4
        { t: 100, div: 'swell', midi: 65, dur: 4.0, vel: 0.78 },    // F4

        { t: 104, div: 'pedal', midi: 39, dur: 4.0, vel: 0.85 },    // Eb2
        { t: 104, div: 'swell', midi: 72, dur: 2.0, vel: 0.93 },    // C5
        { t: 106, div: 'swell', midi: 75, dur: 2.0, vel: 0.95 },    // Eb5
        { t: 104, div: 'swell', midi: 63, dur: 4.0, vel: 0.80 },    // Eb4
        { t: 104, div: 'swell', midi: 67, dur: 4.0, vel: 0.80 },    // G4

        { t: 108, div: 'pedal', midi: 41, dur: 4.0, vel: 0.88 },    // F2
        { t: 108, div: 'swell', midi: 77, dur: 4.0, vel: 0.97 },    // F5 (trio climax!)
        { t: 108, div: 'swell', midi: 65, dur: 4.0, vel: 0.82 },    // F4
        { t: 108, div: 'swell', midi: 68, dur: 4.0, vel: 0.82 },    // Ab4
        { t: 108, div: 'swell', midi: 72, dur: 4.0, vel: 0.82 },    // C5
        { t: 108, div: 'great', midi: 53, dur: 4.0, vel: 0.85 },    // F3

        // Trio subsiding
        { t: 112, div: 'pedal', midi: 39, dur: 4.0, vel: 0.85 },    // Eb2
        { t: 112, div: 'swell', midi: 75, dur: 2.0, vel: 0.93 },    // Eb5
        { t: 114, div: 'swell', midi: 73, dur: 2.0, vel: 0.90 },    // Db5
        { t: 112, div: 'swell', midi: 63, dur: 4.0, vel: 0.78 },    // Eb4
        { t: 112, div: 'swell', midi: 68, dur: 4.0, vel: 0.78 },    // Ab4

        { t: 116, div: 'pedal', midi: 44, dur: 4.0, vel: 0.85 },    // Ab2
        { t: 116, div: 'swell', midi: 72, dur: 4.0, vel: 0.90 },    // C5
        { t: 116, div: 'swell', midi: 60, dur: 4.0, vel: 0.78 },    // C4
        { t: 116, div: 'swell', midi: 63, dur: 4.0, vel: 0.78 },    // Eb4
        { t: 116, div: 'swell', midi: 68, dur: 4.0, vel: 0.78 },    // Ab4

        // Transition back to C major
        { t: 120, div: 'pedal', midi: 43, dur: 4.0, vel: 0.85 },    // G2
        { t: 120, div: 'swell', midi: 71, dur: 2.0, vel: 0.85 },    // B4
        { t: 122, div: 'swell', midi: 72, dur: 2.0, vel: 0.88 },    // C5
        { t: 120, div: 'swell', midi: 59, dur: 4.0, vel: 0.78 },    // B3
        { t: 120, div: 'swell', midi: 62, dur: 4.0, vel: 0.78 },    // D4
        { t: 120, div: 'swell', midi: 67, dur: 4.0, vel: 0.78 },    // G4

        { t: 124, div: 'pedal', midi: 43, dur: 4.0, vel: 0.88 },    // G2
        { t: 124, div: 'great', midi: 67, dur: 0.5, vel: 0.90 },    // G4
        { t: 124.5, div: 'great', midi: 69, dur: 0.5, vel: 0.90 },  // A4
        { t: 125, div: 'great', midi: 71, dur: 0.5, vel: 0.92 },    // B4
        { t: 125.5, div: 'great', midi: 72, dur: 0.5, vel: 0.93 },  // C5
        { t: 126, div: 'great', midi: 74, dur: 1.0, vel: 0.95 },    // D5
        { t: 127, div: 'great', midi: 71, dur: 1.0, vel: 0.93 },    // B4
        { t: 124, div: 'great', midi: 59, dur: 4.0, vel: 0.85 },    // B3

        // ===== RETURN OF A: C major, full organ =====
        // Measures 33-40: March returns triumphantly

        { t: 128, div: 'pedal', midi: 36, dur: 1.0, vel: 0.95 },    // C2
        { t: 128, div: 'great', midi: 60, dur: 0.5, vel: 0.95 },    // C4
        { t: 128, div: 'great', midi: 64, dur: 0.5, vel: 0.95 },    // E4
        { t: 128, div: 'great', midi: 67, dur: 0.5, vel: 0.95 },    // G4
        { t: 128, div: 'great', midi: 72, dur: 0.5, vel: 0.97 },    // C5
        { t: 128.5, div: 'great', midi: 72, dur: 0.25, vel: 0.95 }, // C5
        { t: 128.75, div: 'great', midi: 71, dur: 0.25, vel: 0.93 },// B4
        { t: 129, div: 'pedal', midi: 43, dur: 1.0, vel: 0.93 },    // G2
        { t: 129, div: 'great', midi: 72, dur: 1.0, vel: 0.95 },    // C5

        { t: 130, div: 'pedal', midi: 36, dur: 1.0, vel: 0.95 },    // C2
        { t: 130, div: 'great', midi: 74, dur: 0.5, vel: 0.97 },    // D5
        { t: 130.5, div: 'great', midi: 72, dur: 0.25, vel: 0.95 }, // C5
        { t: 130.75, div: 'great', midi: 71, dur: 0.25, vel: 0.93 },// B4
        { t: 131, div: 'pedal', midi: 43, dur: 1.0, vel: 0.93 },    // G2
        { t: 131, div: 'great', midi: 72, dur: 1.0, vel: 0.95 },    // C5

        // Full march restatement continues
        { t: 132, div: 'pedal', midi: 45, dur: 1.0, vel: 0.93 },    // A2
        { t: 132, div: 'great', midi: 76, dur: 0.75, vel: 0.97 },   // E5
        { t: 132.75, div: 'great', midi: 74, dur: 0.25, vel: 0.95 },// D5
        { t: 133, div: 'pedal', midi: 41, dur: 1.0, vel: 0.93 },    // F2
        { t: 133, div: 'great', midi: 72, dur: 1.0, vel: 0.95 },    // C5
        { t: 132, div: 'great', midi: 64, dur: 2.0, vel: 0.90 },    // E4
        { t: 132, div: 'great', midi: 69, dur: 2.0, vel: 0.90 },    // A4

        { t: 134, div: 'pedal', midi: 43, dur: 2.0, vel: 0.95 },    // G2
        { t: 134, div: 'great', midi: 71, dur: 0.5, vel: 0.95 },    // B4
        { t: 134.5, div: 'great', midi: 72, dur: 0.25, vel: 0.95 }, // C5
        { t: 134.75, div: 'great', midi: 74, dur: 0.25, vel: 0.95 },// D5
        { t: 135, div: 'great', midi: 76, dur: 1.0, vel: 0.97 },    // E5
        { t: 134, div: 'great', midi: 59, dur: 2.0, vel: 0.90 },    // B3
        { t: 134, div: 'great', midi: 67, dur: 2.0, vel: 0.90 },    // G4

        // Full chords
        { t: 136, div: 'pedal', midi: 36, dur: 2.0, vel: 0.95 },    // C2
        { t: 136, div: 'great', midi: 72, dur: 2.0, vel: 0.97 },    // C5
        { t: 136, div: 'great', midi: 60, dur: 2.0, vel: 0.92 },    // C4
        { t: 136, div: 'great', midi: 64, dur: 2.0, vel: 0.92 },    // E4
        { t: 136, div: 'great', midi: 67, dur: 2.0, vel: 0.92 },    // G4

        { t: 138, div: 'pedal', midi: 41, dur: 2.0, vel: 0.93 },    // F2
        { t: 138, div: 'great', midi: 69, dur: 0.5, vel: 0.95 },    // A4
        { t: 138.5, div: 'great', midi: 71, dur: 0.25, vel: 0.93 }, // B4
        { t: 138.75, div: 'great', midi: 72, dur: 0.25, vel: 0.93 },// C5
        { t: 139, div: 'great', midi: 74, dur: 1.0, vel: 0.97 },    // D5
        { t: 138, div: 'great', midi: 65, dur: 2.0, vel: 0.90 },    // F4

        // Bridge to coda
        { t: 140, div: 'pedal', midi: 45, dur: 2.0, vel: 0.93 },    // A2
        { t: 140, div: 'great', midi: 76, dur: 1.5, vel: 0.97 },    // E5
        { t: 141.5, div: 'great', midi: 74, dur: 0.5, vel: 0.95 },  // D5
        { t: 140, div: 'great', midi: 64, dur: 2.0, vel: 0.90 },    // E4
        { t: 140, div: 'great', midi: 69, dur: 2.0, vel: 0.90 },    // A4

        { t: 142, div: 'pedal', midi: 43, dur: 2.0, vel: 0.95 },    // G2
        { t: 142, div: 'great', midi: 72, dur: 2.0, vel: 0.95 },    // C5
        { t: 142, div: 'great', midi: 59, dur: 2.0, vel: 0.92 },    // B3
        { t: 142, div: 'great', midi: 62, dur: 2.0, vel: 0.92 },    // D4
        { t: 142, div: 'great', midi: 67, dur: 2.0, vel: 0.92 },    // G4

        // More bridge measures
        { t: 144, div: 'pedal', midi: 36, dur: 4.0, vel: 0.95 },    // C2
        { t: 144, div: 'great', midi: 72, dur: 2.0, vel: 0.95 },    // C5
        { t: 146, div: 'great', midi: 76, dur: 2.0, vel: 0.97 },    // E5
        { t: 144, div: 'great', midi: 60, dur: 4.0, vel: 0.92 },    // C4
        { t: 144, div: 'great', midi: 64, dur: 4.0, vel: 0.92 },    // E4
        { t: 144, div: 'great', midi: 67, dur: 4.0, vel: 0.92 },    // G4
        { t: 144, div: 'swell', midi: 72, dur: 4.0, vel: 0.85 },    // C5

        { t: 148, div: 'pedal', midi: 41, dur: 2.0, vel: 0.93 },    // F2
        { t: 150, div: 'pedal', midi: 43, dur: 2.0, vel: 0.95 },    // G2
        { t: 148, div: 'great', midi: 77, dur: 2.0, vel: 0.97 },    // F5
        { t: 150, div: 'great', midi: 76, dur: 0.5, vel: 0.95 },    // E5
        { t: 150.5, div: 'great', midi: 74, dur: 0.5, vel: 0.93 },  // D5
        { t: 151, div: 'great', midi: 72, dur: 1.0, vel: 0.95 },    // C5
        { t: 148, div: 'great', midi: 65, dur: 4.0, vel: 0.92 },    // F4
        { t: 148, div: 'great', midi: 69, dur: 4.0, vel: 0.92 },    // A4

        // Preparing coda
        { t: 152, div: 'pedal', midi: 36, dur: 4.0, vel: 0.95 },    // C2
        { t: 152, div: 'great', midi: 72, dur: 4.0, vel: 0.97 },    // C5
        { t: 152, div: 'great', midi: 60, dur: 4.0, vel: 0.93 },    // C4
        { t: 152, div: 'great', midi: 64, dur: 4.0, vel: 0.93 },    // E4
        { t: 152, div: 'great', midi: 67, dur: 4.0, vel: 0.93 },    // G4

        { t: 156, div: 'pedal', midi: 43, dur: 4.0, vel: 0.95 },    // G2
        { t: 156, div: 'great', midi: 71, dur: 0.5, vel: 0.95 },    // B4
        { t: 156.5, div: 'great', midi: 72, dur: 0.5, vel: 0.95 },  // C5
        { t: 157, div: 'great', midi: 74, dur: 0.5, vel: 0.97 },    // D5
        { t: 157.5, div: 'great', midi: 76, dur: 0.5, vel: 0.97 },  // E5
        { t: 158, div: 'great', midi: 77, dur: 2.0, vel: 0.98 },    // F5
        { t: 156, div: 'great', midi: 59, dur: 4.0, vel: 0.92 },    // B3
        { t: 156, div: 'great', midi: 67, dur: 4.0, vel: 0.92 },    // G4

        // Measure 43-44: Accelerating
        { t: 160, div: 'pedal', midi: 36, dur: 2.0, vel: 0.95 },    // C2
        { t: 160, div: 'great', midi: 76, dur: 0.5, vel: 0.97 },    // E5
        { t: 160.5, div: 'great', midi: 74, dur: 0.5, vel: 0.95 },  // D5
        { t: 161, div: 'great', midi: 72, dur: 0.5, vel: 0.95 },    // C5
        { t: 161.5, div: 'great', midi: 71, dur: 0.5, vel: 0.93 },  // B4
        { t: 160, div: 'great', midi: 60, dur: 2.0, vel: 0.92 },    // C4
        { t: 160, div: 'great', midi: 64, dur: 2.0, vel: 0.92 },    // E4

        { t: 162, div: 'pedal', midi: 45, dur: 2.0, vel: 0.93 },    // A2
        { t: 162, div: 'great', midi: 69, dur: 0.5, vel: 0.93 },    // A4
        { t: 162.5, div: 'great', midi: 71, dur: 0.5, vel: 0.95 },  // B4
        { t: 163, div: 'great', midi: 72, dur: 0.5, vel: 0.95 },    // C5
        { t: 163.5, div: 'great', midi: 74, dur: 0.5, vel: 0.97 },  // D5
        { t: 162, div: 'great', midi: 64, dur: 2.0, vel: 0.92 },    // E4
        { t: 162, div: 'great', midi: 57, dur: 2.0, vel: 0.90 },    // A3

        // Scale run to coda
        { t: 164, div: 'pedal', midi: 43, dur: 4.0, vel: 0.95 },    // G2
        { t: 164, div: 'great', midi: 76, dur: 0.5, vel: 0.97 },    // E5
        { t: 164.5, div: 'great', midi: 77, dur: 0.5, vel: 0.97 },  // F5
        { t: 165, div: 'great', midi: 79, dur: 0.5, vel: 0.98 },    // G5
        { t: 165.5, div: 'great', midi: 77, dur: 0.5, vel: 0.97 },  // F5
        { t: 166, div: 'great', midi: 76, dur: 0.5, vel: 0.97 },    // E5
        { t: 166.5, div: 'great', midi: 74, dur: 0.5, vel: 0.95 },  // D5
        { t: 167, div: 'great', midi: 72, dur: 1.0, vel: 0.97 },    // C5
        { t: 164, div: 'great', midi: 59, dur: 4.0, vel: 0.92 },    // B3
        { t: 164, div: 'great', midi: 67, dur: 4.0, vel: 0.92 },    // G4

        // ===== CODA: Blazing C major =====
        { t: 168, div: 'pedal', midi: 36, dur: 2.0, vel: 0.98 },    // C2
        { t: 168, div: 'pedal', midi: 24, dur: 2.0, vel: 0.92 },    // C1 (subbass)
        { t: 168, div: 'great', midi: 72, dur: 0.5, vel: 0.98 },    // C5
        { t: 168.5, div: 'great', midi: 76, dur: 0.5, vel: 0.98 },  // E5
        { t: 169, div: 'great', midi: 79, dur: 1.0, vel: 1.00 },    // G5
        { t: 168, div: 'great', midi: 60, dur: 2.0, vel: 0.95 },    // C4
        { t: 168, div: 'great', midi: 64, dur: 2.0, vel: 0.95 },    // E4
        { t: 168, div: 'great', midi: 67, dur: 2.0, vel: 0.95 },    // G4
        { t: 168, div: 'swell', midi: 72, dur: 2.0, vel: 0.88 },    // C5

        { t: 170, div: 'pedal', midi: 41, dur: 1.0, vel: 0.95 },    // F2
        { t: 171, div: 'pedal', midi: 43, dur: 1.0, vel: 0.98 },    // G2
        { t: 170, div: 'great', midi: 77, dur: 0.75, vel: 0.98 },   // F5
        { t: 170.75, div: 'great', midi: 76, dur: 0.25, vel: 0.97 },// E5
        { t: 171, div: 'great', midi: 74, dur: 0.75, vel: 0.98 },   // D5
        { t: 171.75, div: 'great', midi: 72, dur: 0.25, vel: 0.97 },// C5
        { t: 170, div: 'great', midi: 65, dur: 2.0, vel: 0.93 },    // F4
        { t: 170, div: 'great', midi: 69, dur: 2.0, vel: 0.93 },    // A4

        // Final blaze
        { t: 172, div: 'pedal', midi: 36, dur: 4.0, vel: 1.00 },    // C2
        { t: 172, div: 'pedal', midi: 24, dur: 4.0, vel: 0.95 },    // C1
        { t: 172, div: 'great', midi: 48, dur: 4.0, vel: 0.97 },    // C3
        { t: 172, div: 'great', midi: 60, dur: 4.0, vel: 0.97 },    // C4
        { t: 172, div: 'great', midi: 64, dur: 4.0, vel: 0.97 },    // E4
        { t: 172, div: 'great', midi: 67, dur: 4.0, vel: 0.97 },    // G4
        { t: 172, div: 'great', midi: 72, dur: 4.0, vel: 0.98 },    // C5
        { t: 172, div: 'great', midi: 76, dur: 4.0, vel: 0.98 },    // E5
        { t: 172, div: 'great', midi: 79, dur: 4.0, vel: 1.00 },    // G5
        { t: 172, div: 'swell', midi: 72, dur: 4.0, vel: 0.90 },    // C5
        { t: 172, div: 'swell', midi: 76, dur: 4.0, vel: 0.90 },    // E5
    ]
};


// ============================================================
// 6. Stanford - Fantasia and Toccata in D minor, Op. 57
// ============================================================
// Completed July 1894, dedicated to Sir Walter Parratt
// Two movements: Fantasia (heroic, Bach-inspired flourishes)
// and Toccata (perpetual motion, concerto design)
// Opening flourish inspired by Bach BWV 542 Fantasy in G minor
// Toccata: pedal ritornello, virtuosic manual episodes
// D minor → D major conclusion with full organ
// ============================================================

const PIECE_STANFORD_FANTASIA = {
    title: "Fantasia and Toccata in D minor",
    composer: "Charles Villiers Stanford",
    catalog: "Op. 57",
    key: "D minor",
    tempo: 80,
    tempoChanges: [
        { t: 0, tempo: 80, label: "Allegro con fuoco (Fantasia)" },
        { t: 48, tempo: 72, label: "Allegretto espressivo" },
        { t: 80, tempo: 80, label: "Tempo primo" },
        { t: 108, tempo: 132, label: "Vivace (Toccata)" },
        { t: 192, tempo: 120, label: "Maestoso" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-spitzflute4', 'ch-clarinet8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== FANTASIA: Opening flourish, D minor =====
        // Big sweep across the organ, Bach BWV 542-inspired

        // Measure 1: Dramatic opening flourish - ascending D minor scale
        { t: 0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.92 },      // D2
        { t: 0, div: 'great', midi: 50, dur: 0.25, vel: 0.90 },     // D3
        { t: 0.25, div: 'great', midi: 52, dur: 0.25, vel: 0.90 },  // E3
        { t: 0.5, div: 'great', midi: 53, dur: 0.25, vel: 0.90 },   // F3
        { t: 0.75, div: 'great', midi: 55, dur: 0.25, vel: 0.92 },  // G3
        { t: 1, div: 'great', midi: 57, dur: 0.25, vel: 0.92 },     // A3
        { t: 1.25, div: 'great', midi: 58, dur: 0.25, vel: 0.93 },  // Bb3
        { t: 1.5, div: 'great', midi: 61, dur: 0.25, vel: 0.95 },   // C#4
        { t: 1.75, div: 'great', midi: 62, dur: 0.25, vel: 0.95 },  // D4

        // Measure 2: Flourish continues upward
        { t: 2, div: 'great', midi: 64, dur: 0.25, vel: 0.93 },     // E4
        { t: 2.25, div: 'great', midi: 65, dur: 0.25, vel: 0.93 },  // F4
        { t: 2.5, div: 'great', midi: 67, dur: 0.25, vel: 0.95 },   // G4
        { t: 2.75, div: 'great', midi: 69, dur: 0.25, vel: 0.95 },  // A4
        { t: 3, div: 'great', midi: 70, dur: 0.25, vel: 0.95 },     // Bb4
        { t: 3.25, div: 'great', midi: 72, dur: 0.25, vel: 0.97 },  // C5
        { t: 3.5, div: 'great', midi: 74, dur: 1.5, vel: 0.98 },    // D5 (arrival!)
        { t: 2, div: 'pedal', midi: 45, dur: 3.0, vel: 0.90 },      // A2

        // Measure 3: Dramatic chord after flourish
        { t: 5, div: 'pedal', midi: 38, dur: 3.0, vel: 0.93 },      // D2
        { t: 5, div: 'great', midi: 74, dur: 3.0, vel: 0.97 },      // D5
        { t: 5, div: 'great', midi: 62, dur: 3.0, vel: 0.90 },      // D4
        { t: 5, div: 'great', midi: 65, dur: 3.0, vel: 0.90 },      // F4
        { t: 5, div: 'great', midi: 69, dur: 3.0, vel: 0.92 },      // A4
        { t: 5, div: 'swell', midi: 57, dur: 3.0, vel: 0.82 },      // A3

        // Measure 4: Dissonant romantic gesture, then resolution
        { t: 8, div: 'pedal', midi: 43, dur: 2.0, vel: 0.90 },      // G2
        { t: 8, div: 'great', midi: 72, dur: 1.0, vel: 0.95 },      // C5
        { t: 9, div: 'great', midi: 70, dur: 1.0, vel: 0.93 },      // Bb4
        { t: 8, div: 'great', midi: 62, dur: 2.0, vel: 0.88 },      // D4
        { t: 8, div: 'great', midi: 67, dur: 2.0, vel: 0.88 },      // G4
        { t: 10, div: 'pedal', midi: 45, dur: 2.0, vel: 0.90 },     // A2
        { t: 10, div: 'great', midi: 69, dur: 2.0, vel: 0.93 },     // A4
        { t: 10, div: 'great', midi: 61, dur: 2.0, vel: 0.88 },     // C#4
        { t: 10, div: 'great', midi: 64, dur: 2.0, vel: 0.88 },     // E4

        // Measure 5-6: Second flourish, descending
        { t: 12, div: 'pedal', midi: 38, dur: 4.0, vel: 0.92 },     // D2
        { t: 12, div: 'great', midi: 74, dur: 0.25, vel: 0.95 },    // D5
        { t: 12.25, div: 'great', midi: 72, dur: 0.25, vel: 0.93 }, // C5
        { t: 12.5, div: 'great', midi: 70, dur: 0.25, vel: 0.93 },  // Bb4
        { t: 12.75, div: 'great', midi: 69, dur: 0.25, vel: 0.92 }, // A4
        { t: 13, div: 'great', midi: 67, dur: 0.25, vel: 0.92 },    // G4
        { t: 13.25, div: 'great', midi: 65, dur: 0.25, vel: 0.90 }, // F4
        { t: 13.5, div: 'great', midi: 64, dur: 0.25, vel: 0.90 },  // E4
        { t: 13.75, div: 'great', midi: 62, dur: 0.25, vel: 0.88 }, // D4
        { t: 14, div: 'great', midi: 60, dur: 0.25, vel: 0.88 },    // C4
        { t: 14.25, div: 'great', midi: 58, dur: 0.25, vel: 0.87 }, // Bb3
        { t: 14.5, div: 'great', midi: 57, dur: 0.25, vel: 0.87 },  // A3
        { t: 14.75, div: 'great', midi: 55, dur: 0.25, vel: 0.85 }, // G3
        { t: 15, div: 'great', midi: 53, dur: 1.0, vel: 0.88 },     // F3

        // Measure 7-8: Chord progressions, chromatic
        { t: 16, div: 'pedal', midi: 46, dur: 2.0, vel: 0.90 },     // Bb2
        { t: 16, div: 'great', midi: 58, dur: 2.0, vel: 0.92 },     // Bb3
        { t: 16, div: 'great', midi: 62, dur: 2.0, vel: 0.90 },     // D4
        { t: 16, div: 'great', midi: 65, dur: 2.0, vel: 0.90 },     // F4
        { t: 16, div: 'great', midi: 70, dur: 2.0, vel: 0.93 },     // Bb4

        { t: 18, div: 'pedal', midi: 45, dur: 2.0, vel: 0.90 },     // A2
        { t: 18, div: 'great', midi: 57, dur: 2.0, vel: 0.90 },     // A3
        { t: 18, div: 'great', midi: 61, dur: 2.0, vel: 0.90 },     // C#4
        { t: 18, div: 'great', midi: 64, dur: 2.0, vel: 0.90 },     // E4
        { t: 18, div: 'great', midi: 69, dur: 2.0, vel: 0.93 },     // A4

        // Measure 9-10: Flourish restated, modulating to F major
        { t: 20, div: 'pedal', midi: 41, dur: 4.0, vel: 0.90 },     // F2
        { t: 20, div: 'great', midi: 53, dur: 0.25, vel: 0.90 },    // F3
        { t: 20.25, div: 'great', midi: 55, dur: 0.25, vel: 0.90 }, // G3
        { t: 20.5, div: 'great', midi: 57, dur: 0.25, vel: 0.92 },  // A3
        { t: 20.75, div: 'great', midi: 58, dur: 0.25, vel: 0.92 }, // Bb3
        { t: 21, div: 'great', midi: 60, dur: 0.25, vel: 0.93 },    // C4
        { t: 21.25, div: 'great', midi: 62, dur: 0.25, vel: 0.93 }, // D4
        { t: 21.5, div: 'great', midi: 64, dur: 0.25, vel: 0.95 },  // E4
        { t: 21.75, div: 'great', midi: 65, dur: 0.25, vel: 0.95 }, // F4
        { t: 22, div: 'great', midi: 67, dur: 0.25, vel: 0.95 },    // G4
        { t: 22.25, div: 'great', midi: 69, dur: 0.25, vel: 0.97 }, // A4
        { t: 22.5, div: 'great', midi: 70, dur: 0.25, vel: 0.97 },  // Bb4
        { t: 22.75, div: 'great', midi: 72, dur: 1.25, vel: 0.98 }, // C5

        // Measure 11-12: F major arrival, broad chords
        { t: 24, div: 'pedal', midi: 41, dur: 4.0, vel: 0.92 },     // F2
        { t: 24, div: 'great', midi: 72, dur: 2.0, vel: 0.95 },     // C5
        { t: 26, div: 'great', midi: 74, dur: 2.0, vel: 0.97 },     // D5
        { t: 24, div: 'great', midi: 65, dur: 4.0, vel: 0.90 },     // F4
        { t: 24, div: 'great', midi: 69, dur: 4.0, vel: 0.90 },     // A4
        { t: 24, div: 'swell', midi: 60, dur: 4.0, vel: 0.82 },     // C4

        { t: 28, div: 'pedal', midi: 36, dur: 2.0, vel: 0.92 },     // C2
        { t: 30, div: 'pedal', midi: 38, dur: 2.0, vel: 0.93 },     // D2
        { t: 28, div: 'great', midi: 76, dur: 2.0, vel: 0.97 },     // E5
        { t: 30, div: 'great', midi: 74, dur: 2.0, vel: 0.95 },     // D5
        { t: 28, div: 'great', midi: 64, dur: 2.0, vel: 0.90 },     // E4
        { t: 30, div: 'great', midi: 62, dur: 2.0, vel: 0.90 },     // D4
        { t: 28, div: 'great', midi: 67, dur: 2.0, vel: 0.88 },     // G4
        { t: 30, div: 'great', midi: 65, dur: 2.0, vel: 0.90 },     // F4

        // Measure 13-16: More passionate, romantic chromaticism
        { t: 32, div: 'pedal', midi: 46, dur: 4.0, vel: 0.92 },     // Bb2
        { t: 32, div: 'great', midi: 74, dur: 1.5, vel: 0.95 },     // D5
        { t: 33.5, div: 'great', midi: 72, dur: 0.5, vel: 0.93 },   // C5
        { t: 34, div: 'great', midi: 70, dur: 2.0, vel: 0.92 },     // Bb4
        { t: 32, div: 'great', midi: 58, dur: 4.0, vel: 0.88 },     // Bb3
        { t: 32, div: 'great', midi: 62, dur: 4.0, vel: 0.88 },     // D4
        { t: 32, div: 'great', midi: 65, dur: 4.0, vel: 0.88 },     // F4

        { t: 36, div: 'pedal', midi: 43, dur: 2.0, vel: 0.92 },     // G2
        { t: 38, div: 'pedal', midi: 45, dur: 2.0, vel: 0.93 },     // A2
        { t: 36, div: 'great', midi: 70, dur: 1.0, vel: 0.92 },     // Bb4
        { t: 37, div: 'great', midi: 69, dur: 1.0, vel: 0.90 },     // A4
        { t: 38, div: 'great', midi: 67, dur: 1.0, vel: 0.90 },     // G4
        { t: 39, div: 'great', midi: 69, dur: 1.0, vel: 0.92 },     // A4
        { t: 36, div: 'great', midi: 55, dur: 4.0, vel: 0.85 },     // G3
        { t: 36, div: 'great', midi: 62, dur: 4.0, vel: 0.85 },     // D4

        // Measure 15-16: Climactic passage
        { t: 40, div: 'pedal', midi: 38, dur: 4.0, vel: 0.95 },     // D2
        { t: 40, div: 'great', midi: 74, dur: 2.0, vel: 0.97 },     // D5
        { t: 42, div: 'great', midi: 72, dur: 1.0, vel: 0.95 },     // C5
        { t: 43, div: 'great', midi: 70, dur: 1.0, vel: 0.93 },     // Bb4
        { t: 40, div: 'great', midi: 62, dur: 4.0, vel: 0.90 },     // D4
        { t: 40, div: 'great', midi: 65, dur: 4.0, vel: 0.90 },     // F4
        { t: 40, div: 'great', midi: 69, dur: 4.0, vel: 0.90 },     // A4

        { t: 44, div: 'pedal', midi: 45, dur: 2.0, vel: 0.93 },     // A2
        { t: 46, div: 'pedal', midi: 38, dur: 2.0, vel: 0.95 },     // D2
        { t: 44, div: 'great', midi: 69, dur: 2.0, vel: 0.95 },     // A4
        { t: 46, div: 'great', midi: 74, dur: 2.0, vel: 0.97 },     // D5
        { t: 44, div: 'great', midi: 61, dur: 2.0, vel: 0.88 },     // C#4
        { t: 46, div: 'great', midi: 62, dur: 2.0, vel: 0.90 },     // D4
        { t: 44, div: 'great', midi: 64, dur: 2.0, vel: 0.88 },     // E4
        { t: 46, div: 'great', midi: 65, dur: 2.0, vel: 0.90 },     // F4

        // ===== FANTASIA: Allegretto section (D major) =====
        // Measures 17-24: Gentler, transformed in D major

        { t: 48, div: 'pedal', midi: 38, dur: 4.0, vel: 0.78 },     // D2
        { t: 48, div: 'swell', midi: 66, dur: 2.0, vel: 0.80 },     // F#4
        { t: 50, div: 'swell', midi: 69, dur: 2.0, vel: 0.82 },     // A4
        { t: 48, div: 'swell', midi: 57, dur: 4.0, vel: 0.72 },     // A3
        { t: 48, div: 'swell', midi: 62, dur: 4.0, vel: 0.72 },     // D4
        { t: 48, div: 'choir', midi: 54, dur: 4.0, vel: 0.68 },     // F#3

        { t: 52, div: 'pedal', midi: 45, dur: 4.0, vel: 0.78 },     // A2
        { t: 52, div: 'swell', midi: 71, dur: 2.0, vel: 0.82 },     // B4
        { t: 54, div: 'swell', midi: 69, dur: 2.0, vel: 0.80 },     // A4
        { t: 52, div: 'swell', midi: 59, dur: 4.0, vel: 0.72 },     // B3
        { t: 52, div: 'swell', midi: 64, dur: 4.0, vel: 0.72 },     // E4

        { t: 56, div: 'pedal', midi: 42, dur: 4.0, vel: 0.78 },     // F#2
        { t: 56, div: 'swell', midi: 66, dur: 2.0, vel: 0.82 },     // F#4
        { t: 58, div: 'swell', midi: 69, dur: 1.0, vel: 0.85 },     // A4
        { t: 59, div: 'swell', midi: 71, dur: 1.0, vel: 0.87 },     // B4
        { t: 56, div: 'swell', midi: 57, dur: 4.0, vel: 0.72 },     // A3
        { t: 56, div: 'swell', midi: 62, dur: 4.0, vel: 0.72 },     // D4

        { t: 60, div: 'pedal', midi: 43, dur: 4.0, vel: 0.78 },     // G2
        { t: 60, div: 'swell', midi: 74, dur: 2.0, vel: 0.87 },     // D5
        { t: 62, div: 'swell', midi: 71, dur: 2.0, vel: 0.85 },     // B4
        { t: 60, div: 'swell', midi: 59, dur: 4.0, vel: 0.72 },     // B3
        { t: 60, div: 'swell', midi: 67, dur: 4.0, vel: 0.72 },     // G4

        // Measures 21-24: Allegretto continued, more warmth
        { t: 64, div: 'pedal', midi: 40, dur: 4.0, vel: 0.80 },     // E2
        { t: 64, div: 'swell', midi: 72, dur: 2.0, vel: 0.85 },     // C#5 (actually C#)
        { t: 66, div: 'swell', midi: 71, dur: 2.0, vel: 0.82 },     // B4
        { t: 64, div: 'swell', midi: 64, dur: 4.0, vel: 0.75 },     // E4
        { t: 64, div: 'swell', midi: 56, dur: 4.0, vel: 0.72 },     // Ab3 (=G#3)
        { t: 64, div: 'choir', midi: 52, dur: 4.0, vel: 0.68 },     // E3

        { t: 68, div: 'pedal', midi: 45, dur: 4.0, vel: 0.80 },     // A2
        { t: 68, div: 'swell', midi: 69, dur: 4.0, vel: 0.85 },     // A4
        { t: 68, div: 'swell', midi: 61, dur: 4.0, vel: 0.75 },     // C#4
        { t: 68, div: 'swell', midi: 57, dur: 4.0, vel: 0.72 },     // A3
        { t: 68, div: 'choir', midi: 54, dur: 4.0, vel: 0.68 },     // F#3

        { t: 72, div: 'pedal', midi: 38, dur: 4.0, vel: 0.82 },     // D2
        { t: 72, div: 'swell', midi: 74, dur: 2.0, vel: 0.87 },     // D5
        { t: 74, div: 'swell', midi: 72, dur: 1.0, vel: 0.85 },     // C5 (natural)
        { t: 75, div: 'swell', midi: 71, dur: 1.0, vel: 0.83 },     // B4
        { t: 72, div: 'swell', midi: 62, dur: 4.0, vel: 0.75 },     // D4
        { t: 72, div: 'swell', midi: 66, dur: 4.0, vel: 0.75 },     // F#4

        { t: 76, div: 'pedal', midi: 45, dur: 2.0, vel: 0.82 },     // A2
        { t: 78, div: 'pedal', midi: 38, dur: 2.0, vel: 0.85 },     // D2
        { t: 76, div: 'swell', midi: 69, dur: 2.0, vel: 0.85 },     // A4
        { t: 78, div: 'swell', midi: 74, dur: 2.0, vel: 0.88 },     // D5
        { t: 76, div: 'swell', midi: 61, dur: 2.0, vel: 0.75 },     // C#4
        { t: 78, div: 'swell', midi: 62, dur: 2.0, vel: 0.78 },     // D4
        { t: 76, div: 'swell', midi: 57, dur: 2.0, vel: 0.72 },     // A3
        { t: 78, div: 'swell', midi: 66, dur: 2.0, vel: 0.75 },     // F#4

        // ===== FANTASIA: Coda - flourishes in dialogue =====
        // Measures 25-28: Opening flourishes return, hands in dialogue

        { t: 80, div: 'pedal', midi: 38, dur: 4.0, vel: 0.92 },     // D2
        // RH flourish
        { t: 80, div: 'great', midi: 62, dur: 0.25, vel: 0.92 },    // D4
        { t: 80.25, div: 'great', midi: 64, dur: 0.25, vel: 0.93 }, // E4
        { t: 80.5, div: 'great', midi: 65, dur: 0.25, vel: 0.93 },  // F4
        { t: 80.75, div: 'great', midi: 67, dur: 0.25, vel: 0.95 }, // G4
        { t: 81, div: 'great', midi: 69, dur: 0.25, vel: 0.95 },    // A4
        { t: 81.25, div: 'great', midi: 70, dur: 0.25, vel: 0.95 }, // Bb4
        { t: 81.5, div: 'great', midi: 72, dur: 0.5, vel: 0.97 },   // C5
        // LH answers
        { t: 82, div: 'swell', midi: 50, dur: 0.25, vel: 0.85 },    // D3
        { t: 82.25, div: 'swell', midi: 52, dur: 0.25, vel: 0.85 }, // E3
        { t: 82.5, div: 'swell', midi: 53, dur: 0.25, vel: 0.87 },  // F3
        { t: 82.75, div: 'swell', midi: 55, dur: 0.25, vel: 0.87 }, // G3
        { t: 83, div: 'swell', midi: 57, dur: 0.25, vel: 0.88 },    // A3
        { t: 83.25, div: 'swell', midi: 58, dur: 0.25, vel: 0.88 }, // Bb3
        { t: 83.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.90 },   // C4

        // More dialogue
        { t: 84, div: 'pedal', midi: 43, dur: 4.0, vel: 0.92 },     // G2
        { t: 84, div: 'great', midi: 67, dur: 0.25, vel: 0.93 },    // G4
        { t: 84.25, div: 'great', midi: 69, dur: 0.25, vel: 0.93 }, // A4
        { t: 84.5, div: 'great', midi: 70, dur: 0.25, vel: 0.95 },  // Bb4
        { t: 84.75, div: 'great', midi: 72, dur: 0.25, vel: 0.95 }, // C5
        { t: 85, div: 'great', midi: 74, dur: 1.0, vel: 0.97 },     // D5

        { t: 86, div: 'swell', midi: 55, dur: 0.25, vel: 0.87 },    // G3
        { t: 86.25, div: 'swell', midi: 57, dur: 0.25, vel: 0.87 }, // A3
        { t: 86.5, div: 'swell', midi: 58, dur: 0.25, vel: 0.88 },  // Bb3
        { t: 86.75, div: 'swell', midi: 60, dur: 0.25, vel: 0.88 }, // C4
        { t: 87, div: 'swell', midi: 62, dur: 1.0, vel: 0.90 },     // D4

        // Measure 27-28: Final flourish of Fantasia
        { t: 88, div: 'pedal', midi: 46, dur: 4.0, vel: 0.93 },     // Bb2
        { t: 88, div: 'great', midi: 74, dur: 0.25, vel: 0.95 },    // D5
        { t: 88.25, div: 'great', midi: 72, dur: 0.25, vel: 0.93 }, // C5
        { t: 88.5, div: 'great', midi: 70, dur: 0.25, vel: 0.93 },  // Bb4
        { t: 88.75, div: 'great', midi: 69, dur: 0.25, vel: 0.92 }, // A4
        { t: 89, div: 'great', midi: 67, dur: 0.25, vel: 0.92 },    // G4
        { t: 89.25, div: 'great', midi: 65, dur: 0.25, vel: 0.90 }, // F4
        { t: 89.5, div: 'great', midi: 62, dur: 0.5, vel: 0.90 },   // D4
        { t: 90, div: 'great', midi: 58, dur: 2.0, vel: 0.88 },     // Bb3

        { t: 92, div: 'pedal', midi: 45, dur: 4.0, vel: 0.93 },     // A2
        { t: 92, div: 'great', midi: 69, dur: 2.0, vel: 0.95 },     // A4
        { t: 94, div: 'great', midi: 74, dur: 2.0, vel: 0.97 },     // D5
        { t: 92, div: 'great', midi: 61, dur: 4.0, vel: 0.88 },     // C#4
        { t: 92, div: 'great', midi: 64, dur: 4.0, vel: 0.88 },     // E4

        // Fantasia ends with D minor cadence
        { t: 96, div: 'pedal', midi: 38, dur: 6.0, vel: 0.95 },     // D2
        { t: 96, div: 'great', midi: 50, dur: 6.0, vel: 0.93 },     // D3
        { t: 96, div: 'great', midi: 62, dur: 6.0, vel: 0.93 },     // D4
        { t: 96, div: 'great', midi: 65, dur: 6.0, vel: 0.93 },     // F4
        { t: 96, div: 'great', midi: 69, dur: 6.0, vel: 0.95 },     // A4
        { t: 96, div: 'great', midi: 74, dur: 6.0, vel: 0.95 },     // D5
        { t: 96, div: 'swell', midi: 57, dur: 6.0, vel: 0.85 },     // A3

        // Brief pause
        { t: 102, div: 'pedal', midi: 38, dur: 6.0, vel: 0.55 },    // D2 (quiet)

        // ===== TOCCATA: Vivace, D minor =====
        // Pedal ritornello + virtuosic manual episodes
        // Bach "Dorian" toccata inspired, perpetual motion

        // Measure 1-2: Pedal ritornello announces toccata theme
        { t: 108, div: 'pedal', midi: 38, dur: 0.5, vel: 0.88 },    // D2
        { t: 108.5, div: 'pedal', midi: 40, dur: 0.5, vel: 0.88 },  // E2
        { t: 109, div: 'pedal', midi: 41, dur: 0.5, vel: 0.90 },    // F2
        { t: 109.5, div: 'pedal', midi: 43, dur: 0.5, vel: 0.90 },  // G2
        { t: 110, div: 'pedal', midi: 45, dur: 0.5, vel: 0.92 },    // A2
        { t: 110.5, div: 'pedal', midi: 46, dur: 0.5, vel: 0.90 },  // Bb2
        { t: 111, div: 'pedal', midi: 45, dur: 0.5, vel: 0.88 },    // A2
        { t: 111.5, div: 'pedal', midi: 38, dur: 0.5, vel: 0.88 },  // D2

        // Measure 3-4: Hands enter with toccata figuration
        { t: 112, div: 'pedal', midi: 38, dur: 2.0, vel: 0.88 },    // D2
        { t: 112, div: 'great', midi: 62, dur: 0.25, vel: 0.88 },   // D4
        { t: 112.25, div: 'great', midi: 65, dur: 0.25, vel: 0.88 },// F4
        { t: 112.5, div: 'great', midi: 62, dur: 0.25, vel: 0.87 }, // D4
        { t: 112.75, div: 'great', midi: 69, dur: 0.25, vel: 0.90 },// A4
        { t: 113, div: 'great', midi: 65, dur: 0.25, vel: 0.88 },   // F4
        { t: 113.25, div: 'great', midi: 62, dur: 0.25, vel: 0.87 },// D4
        { t: 113.5, div: 'great', midi: 65, dur: 0.25, vel: 0.88 }, // F4
        { t: 113.75, div: 'great', midi: 69, dur: 0.25, vel: 0.90 },// A4

        { t: 114, div: 'pedal', midi: 45, dur: 2.0, vel: 0.88 },    // A2
        { t: 114, div: 'great', midi: 72, dur: 0.25, vel: 0.90 },   // C5
        { t: 114.25, div: 'great', midi: 69, dur: 0.25, vel: 0.88 },// A4
        { t: 114.5, div: 'great', midi: 72, dur: 0.25, vel: 0.90 }, // C5
        { t: 114.75, div: 'great', midi: 76, dur: 0.25, vel: 0.92 },// E5
        { t: 115, div: 'great', midi: 72, dur: 0.25, vel: 0.90 },   // C5
        { t: 115.25, div: 'great', midi: 69, dur: 0.25, vel: 0.88 },// A4
        { t: 115.5, div: 'great', midi: 72, dur: 0.25, vel: 0.90 }, // C5
        { t: 115.75, div: 'great', midi: 69, dur: 0.25, vel: 0.88 },// A4

        // Measure 5-6: Episode continues, modulating
        { t: 116, div: 'pedal', midi: 46, dur: 2.0, vel: 0.88 },    // Bb2
        { t: 116, div: 'great', midi: 70, dur: 0.25, vel: 0.90 },   // Bb4
        { t: 116.25, div: 'great', midi: 67, dur: 0.25, vel: 0.88 },// G4
        { t: 116.5, div: 'great', midi: 70, dur: 0.25, vel: 0.90 }, // Bb4
        { t: 116.75, div: 'great', midi: 74, dur: 0.25, vel: 0.92 },// D5
        { t: 117, div: 'great', midi: 70, dur: 0.25, vel: 0.90 },   // Bb4
        { t: 117.25, div: 'great', midi: 67, dur: 0.25, vel: 0.88 },// G4
        { t: 117.5, div: 'great', midi: 70, dur: 0.25, vel: 0.90 }, // Bb4
        { t: 117.75, div: 'great', midi: 67, dur: 0.25, vel: 0.88 },// G4

        { t: 118, div: 'pedal', midi: 43, dur: 2.0, vel: 0.88 },    // G2
        { t: 118, div: 'great', midi: 67, dur: 0.25, vel: 0.88 },   // G4
        { t: 118.25, div: 'great', midi: 70, dur: 0.25, vel: 0.90 },// Bb4
        { t: 118.5, div: 'great', midi: 67, dur: 0.25, vel: 0.88 }, // G4
        { t: 118.75, div: 'great', midi: 62, dur: 0.25, vel: 0.87 },// D4
        { t: 119, div: 'great', midi: 67, dur: 0.25, vel: 0.88 },   // G4
        { t: 119.25, div: 'great', midi: 70, dur: 0.25, vel: 0.90 },// Bb4
        { t: 119.5, div: 'great', midi: 67, dur: 0.25, vel: 0.88 }, // G4
        { t: 119.75, div: 'great', midi: 70, dur: 0.25, vel: 0.90 },// Bb4

        // Measure 7-8: Pedal ritornello returns (F major)
        { t: 120, div: 'pedal', midi: 41, dur: 0.5, vel: 0.90 },    // F2
        { t: 120.5, div: 'pedal', midi: 43, dur: 0.5, vel: 0.90 },  // G2
        { t: 121, div: 'pedal', midi: 45, dur: 0.5, vel: 0.92 },    // A2
        { t: 121.5, div: 'pedal', midi: 46, dur: 0.5, vel: 0.92 },  // Bb2
        { t: 122, div: 'pedal', midi: 48, dur: 0.5, vel: 0.93 },    // C3
        { t: 122.5, div: 'pedal', midi: 50, dur: 0.5, vel: 0.92 },  // D3
        { t: 123, div: 'pedal', midi: 48, dur: 0.5, vel: 0.90 },    // C3
        { t: 123.5, div: 'pedal', midi: 41, dur: 0.5, vel: 0.90 },  // F2

        // Measure 9-10: Manual episode in F, building
        { t: 124, div: 'pedal', midi: 41, dur: 2.0, vel: 0.90 },    // F2
        { t: 124, div: 'great', midi: 65, dur: 0.25, vel: 0.90 },   // F4
        { t: 124.25, div: 'great', midi: 69, dur: 0.25, vel: 0.90 },// A4
        { t: 124.5, div: 'great', midi: 65, dur: 0.25, vel: 0.88 }, // F4
        { t: 124.75, div: 'great', midi: 72, dur: 0.25, vel: 0.92 },// C5
        { t: 125, div: 'great', midi: 69, dur: 0.25, vel: 0.90 },   // A4
        { t: 125.25, div: 'great', midi: 65, dur: 0.25, vel: 0.88 },// F4
        { t: 125.5, div: 'great', midi: 69, dur: 0.25, vel: 0.90 }, // A4
        { t: 125.75, div: 'great', midi: 72, dur: 0.25, vel: 0.92 },// C5

        { t: 126, div: 'pedal', midi: 48, dur: 2.0, vel: 0.90 },    // C3
        { t: 126, div: 'great', midi: 76, dur: 0.25, vel: 0.93 },   // E5
        { t: 126.25, div: 'great', midi: 72, dur: 0.25, vel: 0.92 },// C5
        { t: 126.5, div: 'great', midi: 76, dur: 0.25, vel: 0.93 }, // E5
        { t: 126.75, div: 'great', midi: 79, dur: 0.25, vel: 0.95 },// G5
        { t: 127, div: 'great', midi: 76, dur: 0.25, vel: 0.93 },   // E5
        { t: 127.25, div: 'great', midi: 72, dur: 0.25, vel: 0.92 },// C5
        { t: 127.5, div: 'great', midi: 76, dur: 0.25, vel: 0.93 }, // E5
        { t: 127.75, div: 'great', midi: 72, dur: 0.25, vel: 0.92 },// C5

        // Measure 11-14: Extended episode, more virtuosic
        { t: 128, div: 'pedal', midi: 46, dur: 2.0, vel: 0.90 },    // Bb2
        { t: 128, div: 'great', midi: 70, dur: 0.25, vel: 0.92 },   // Bb4
        { t: 128.25, div: 'great', midi: 74, dur: 0.25, vel: 0.93 },// D5
        { t: 128.5, div: 'great', midi: 70, dur: 0.25, vel: 0.92 }, // Bb4
        { t: 128.75, div: 'great', midi: 77, dur: 0.25, vel: 0.95 },// F5
        { t: 129, div: 'great', midi: 74, dur: 0.25, vel: 0.93 },   // D5
        { t: 129.25, div: 'great', midi: 70, dur: 0.25, vel: 0.92 },// Bb4
        { t: 129.5, div: 'great', midi: 74, dur: 0.25, vel: 0.93 }, // D5
        { t: 129.75, div: 'great', midi: 77, dur: 0.25, vel: 0.95 },// F5

        { t: 130, div: 'pedal', midi: 43, dur: 2.0, vel: 0.90 },    // G2
        { t: 130, div: 'great', midi: 74, dur: 0.25, vel: 0.93 },   // D5
        { t: 130.25, div: 'great', midi: 70, dur: 0.25, vel: 0.92 },// Bb4
        { t: 130.5, div: 'great', midi: 67, dur: 0.25, vel: 0.90 }, // G4
        { t: 130.75, div: 'great', midi: 70, dur: 0.25, vel: 0.92 },// Bb4
        { t: 131, div: 'great', midi: 74, dur: 0.25, vel: 0.93 },   // D5
        { t: 131.25, div: 'great', midi: 70, dur: 0.25, vel: 0.92 },// Bb4
        { t: 131.5, div: 'great', midi: 67, dur: 0.25, vel: 0.90 }, // G4
        { t: 131.75, div: 'great', midi: 70, dur: 0.25, vel: 0.92 },// Bb4

        // Measure 13-14: Building to ritornello
        { t: 132, div: 'pedal', midi: 45, dur: 2.0, vel: 0.92 },    // A2
        { t: 132, div: 'great', midi: 69, dur: 0.25, vel: 0.92 },   // A4
        { t: 132.25, div: 'great', midi: 72, dur: 0.25, vel: 0.93 },// C5
        { t: 132.5, div: 'great', midi: 76, dur: 0.25, vel: 0.95 }, // E5
        { t: 132.75, div: 'great', midi: 72, dur: 0.25, vel: 0.93 },// C5
        { t: 133, div: 'great', midi: 69, dur: 0.25, vel: 0.92 },   // A4
        { t: 133.25, div: 'great', midi: 72, dur: 0.25, vel: 0.93 },// C5
        { t: 133.5, div: 'great', midi: 76, dur: 0.25, vel: 0.95 }, // E5
        { t: 133.75, div: 'great', midi: 72, dur: 0.25, vel: 0.93 },// C5

        { t: 134, div: 'pedal', midi: 38, dur: 2.0, vel: 0.92 },    // D2
        { t: 134, div: 'great', midi: 74, dur: 0.25, vel: 0.95 },   // D5
        { t: 134.25, div: 'great', midi: 69, dur: 0.25, vel: 0.92 },// A4
        { t: 134.5, div: 'great', midi: 65, dur: 0.25, vel: 0.90 }, // F4
        { t: 134.75, div: 'great', midi: 69, dur: 0.25, vel: 0.92 },// A4
        { t: 135, div: 'great', midi: 74, dur: 0.25, vel: 0.95 },   // D5
        { t: 135.25, div: 'great', midi: 69, dur: 0.25, vel: 0.92 },// A4
        { t: 135.5, div: 'great', midi: 65, dur: 0.25, vel: 0.90 }, // F4
        { t: 135.75, div: 'great', midi: 69, dur: 0.25, vel: 0.92 },// A4

        // Measure 15-16: Pedal ritornello returns (D minor)
        { t: 136, div: 'pedal', midi: 38, dur: 0.5, vel: 0.92 },    // D2
        { t: 136.5, div: 'pedal', midi: 40, dur: 0.5, vel: 0.92 },  // E2
        { t: 137, div: 'pedal', midi: 41, dur: 0.5, vel: 0.93 },    // F2
        { t: 137.5, div: 'pedal', midi: 43, dur: 0.5, vel: 0.93 },  // G2
        { t: 138, div: 'pedal', midi: 45, dur: 0.5, vel: 0.95 },    // A2
        { t: 138.5, div: 'pedal', midi: 46, dur: 0.5, vel: 0.93 },  // Bb2
        { t: 139, div: 'pedal', midi: 45, dur: 0.5, vel: 0.92 },    // A2
        { t: 139.5, div: 'pedal', midi: 38, dur: 0.5, vel: 0.92 },  // D2
        // With chords now
        { t: 136, div: 'great', midi: 62, dur: 4.0, vel: 0.90 },    // D4
        { t: 136, div: 'great', midi: 65, dur: 4.0, vel: 0.90 },    // F4
        { t: 136, div: 'great', midi: 69, dur: 4.0, vel: 0.90 },    // A4

        // Measure 17-20: Expanding episodes, more keys
        { t: 140, div: 'pedal', midi: 48, dur: 2.0, vel: 0.92 },    // C3
        { t: 140, div: 'great', midi: 72, dur: 0.25, vel: 0.92 },   // C5
        { t: 140.25, div: 'great', midi: 67, dur: 0.25, vel: 0.90 },// G4
        { t: 140.5, div: 'great', midi: 64, dur: 0.25, vel: 0.88 }, // E4
        { t: 140.75, div: 'great', midi: 67, dur: 0.25, vel: 0.90 },// G4
        { t: 141, div: 'great', midi: 72, dur: 0.25, vel: 0.92 },   // C5
        { t: 141.25, div: 'great', midi: 67, dur: 0.25, vel: 0.90 },// G4
        { t: 141.5, div: 'great', midi: 64, dur: 0.25, vel: 0.88 }, // E4
        { t: 141.75, div: 'great', midi: 67, dur: 0.25, vel: 0.90 },// G4

        { t: 142, div: 'pedal', midi: 41, dur: 2.0, vel: 0.92 },    // F2
        { t: 142, div: 'great', midi: 65, dur: 0.25, vel: 0.90 },   // F4
        { t: 142.25, div: 'great', midi: 69, dur: 0.25, vel: 0.92 },// A4
        { t: 142.5, div: 'great', midi: 72, dur: 0.25, vel: 0.93 }, // C5
        { t: 142.75, div: 'great', midi: 69, dur: 0.25, vel: 0.92 },// A4
        { t: 143, div: 'great', midi: 65, dur: 0.25, vel: 0.90 },   // F4
        { t: 143.25, div: 'great', midi: 69, dur: 0.25, vel: 0.92 },// A4
        { t: 143.5, div: 'great', midi: 72, dur: 0.25, vel: 0.93 }, // C5
        { t: 143.75, div: 'great', midi: 69, dur: 0.25, vel: 0.92 },// A4

        // Expanding to Bb
        { t: 144, div: 'pedal', midi: 46, dur: 2.0, vel: 0.93 },    // Bb2
        { t: 144, div: 'great', midi: 70, dur: 0.25, vel: 0.93 },   // Bb4
        { t: 144.25, div: 'great', midi: 74, dur: 0.25, vel: 0.95 },// D5
        { t: 144.5, div: 'great', midi: 77, dur: 0.25, vel: 0.97 }, // F5
        { t: 144.75, div: 'great', midi: 74, dur: 0.25, vel: 0.95 },// D5
        { t: 145, div: 'great', midi: 70, dur: 0.25, vel: 0.93 },   // Bb4
        { t: 145.25, div: 'great', midi: 74, dur: 0.25, vel: 0.95 },// D5
        { t: 145.5, div: 'great', midi: 77, dur: 0.25, vel: 0.97 }, // F5
        { t: 145.75, div: 'great', midi: 74, dur: 0.25, vel: 0.95 },// D5

        { t: 146, div: 'pedal', midi: 43, dur: 2.0, vel: 0.93 },    // G2
        { t: 146, div: 'great', midi: 67, dur: 0.25, vel: 0.92 },   // G4
        { t: 146.25, div: 'great', midi: 70, dur: 0.25, vel: 0.93 },// Bb4
        { t: 146.5, div: 'great', midi: 74, dur: 0.25, vel: 0.95 }, // D5
        { t: 146.75, div: 'great', midi: 70, dur: 0.25, vel: 0.93 },// Bb4
        { t: 147, div: 'great', midi: 67, dur: 0.25, vel: 0.92 },   // G4
        { t: 147.25, div: 'great', midi: 70, dur: 0.25, vel: 0.93 },// Bb4
        { t: 147.5, div: 'great', midi: 74, dur: 0.25, vel: 0.95 }, // D5
        { t: 147.75, div: 'great', midi: 70, dur: 0.25, vel: 0.93 },// Bb4

        // Measure 21-24: Final episode, building to climax
        { t: 148, div: 'pedal', midi: 45, dur: 2.0, vel: 0.93 },    // A2
        { t: 148, div: 'great', midi: 69, dur: 0.25, vel: 0.93 },   // A4
        { t: 148.25, div: 'great', midi: 72, dur: 0.25, vel: 0.95 },// C5
        { t: 148.5, div: 'great', midi: 76, dur: 0.25, vel: 0.97 }, // E5
        { t: 148.75, div: 'great', midi: 79, dur: 0.25, vel: 0.98 },// G5
        { t: 149, div: 'great', midi: 76, dur: 0.25, vel: 0.97 },   // E5
        { t: 149.25, div: 'great', midi: 72, dur: 0.25, vel: 0.95 },// C5
        { t: 149.5, div: 'great', midi: 76, dur: 0.25, vel: 0.97 }, // E5
        { t: 149.75, div: 'great', midi: 79, dur: 0.25, vel: 0.98 },// G5

        { t: 150, div: 'pedal', midi: 38, dur: 2.0, vel: 0.95 },    // D2
        { t: 150, div: 'great', midi: 74, dur: 0.25, vel: 0.97 },   // D5
        { t: 150.25, div: 'great', midi: 77, dur: 0.25, vel: 0.98 },// F5
        { t: 150.5, div: 'great', midi: 81, dur: 0.25, vel: 0.98 }, // A5
        { t: 150.75, div: 'great', midi: 77, dur: 0.25, vel: 0.98 },// F5
        { t: 151, div: 'great', midi: 74, dur: 0.25, vel: 0.97 },   // D5
        { t: 151.25, div: 'great', midi: 77, dur: 0.25, vel: 0.98 },// F5
        { t: 151.5, div: 'great', midi: 81, dur: 0.25, vel: 0.98 }, // A5
        { t: 151.75, div: 'great', midi: 77, dur: 0.25, vel: 0.98 },// F5

        // Measure 23-24: Maximum intensity, all resources
        { t: 152, div: 'pedal', midi: 46, dur: 2.0, vel: 0.95 },    // Bb2
        { t: 152, div: 'great', midi: 70, dur: 0.25, vel: 0.97 },   // Bb4
        { t: 152.25, div: 'great', midi: 74, dur: 0.25, vel: 0.97 },// D5
        { t: 152.5, div: 'great', midi: 77, dur: 0.25, vel: 0.98 }, // F5
        { t: 152.75, div: 'great', midi: 82, dur: 0.25, vel: 1.00 },// Bb5
        { t: 153, div: 'great', midi: 77, dur: 0.25, vel: 0.98 },   // F5
        { t: 153.25, div: 'great', midi: 74, dur: 0.25, vel: 0.97 },// D5
        { t: 153.5, div: 'great', midi: 77, dur: 0.25, vel: 0.98 }, // F5
        { t: 153.75, div: 'great', midi: 82, dur: 0.25, vel: 1.00 },// Bb5

        // Scale run back to D
        { t: 154, div: 'pedal', midi: 45, dur: 0.5, vel: 0.95 },    // A2
        { t: 154.5, div: 'pedal', midi: 43, dur: 0.5, vel: 0.95 },  // G2
        { t: 155, div: 'pedal', midi: 41, dur: 0.5, vel: 0.95 },    // F2
        { t: 155.5, div: 'pedal', midi: 40, dur: 0.5, vel: 0.95 },  // E2
        { t: 154, div: 'great', midi: 81, dur: 0.25, vel: 0.98 },   // A5
        { t: 154.25, div: 'great', midi: 79, dur: 0.25, vel: 0.97 },// G5
        { t: 154.5, div: 'great', midi: 77, dur: 0.25, vel: 0.97 }, // F5
        { t: 154.75, div: 'great', midi: 76, dur: 0.25, vel: 0.97 },// E5
        { t: 155, div: 'great', midi: 74, dur: 0.25, vel: 0.95 },   // D5
        { t: 155.25, div: 'great', midi: 72, dur: 0.25, vel: 0.95 },// C5
        { t: 155.5, div: 'great', midi: 70, dur: 0.25, vel: 0.93 }, // Bb4
        { t: 155.75, div: 'great', midi: 69, dur: 0.25, vel: 0.93 },// A4

        // ===== TOCCATA: Extended tonic pedal and Maestoso conclusion =====
        // D pedal point, Buxtehude-like majestic gesture

        // Tonic pedal D - sustained
        { t: 156, div: 'pedal', midi: 38, dur: 36.0, vel: 0.95 },   // D2 (long pedal point)
        { t: 156, div: 'pedal', midi: 26, dur: 36.0, vel: 0.90 },   // D1 (subbass)

        // Continuing toccata over pedal D
        { t: 156, div: 'great', midi: 62, dur: 0.25, vel: 0.93 },   // D4
        { t: 156.25, div: 'great', midi: 65, dur: 0.25, vel: 0.93 },// F4
        { t: 156.5, div: 'great', midi: 69, dur: 0.25, vel: 0.95 }, // A4
        { t: 156.75, div: 'great', midi: 74, dur: 0.25, vel: 0.97 },// D5
        { t: 157, div: 'great', midi: 69, dur: 0.25, vel: 0.95 },   // A4
        { t: 157.25, div: 'great', midi: 65, dur: 0.25, vel: 0.93 },// F4
        { t: 157.5, div: 'great', midi: 69, dur: 0.25, vel: 0.95 }, // A4
        { t: 157.75, div: 'great', midi: 74, dur: 0.25, vel: 0.97 },// D5

        { t: 158, div: 'great', midi: 65, dur: 0.25, vel: 0.93 },   // F4
        { t: 158.25, div: 'great', midi: 69, dur: 0.25, vel: 0.95 },// A4
        { t: 158.5, div: 'great', midi: 74, dur: 0.25, vel: 0.97 }, // D5
        { t: 158.75, div: 'great', midi: 77, dur: 0.25, vel: 0.98 },// F5
        { t: 159, div: 'great', midi: 74, dur: 0.25, vel: 0.97 },   // D5
        { t: 159.25, div: 'great', midi: 69, dur: 0.25, vel: 0.95 },// A4
        { t: 159.5, div: 'great', midi: 74, dur: 0.25, vel: 0.97 }, // D5
        { t: 159.75, div: 'great', midi: 77, dur: 0.25, vel: 0.98 },// F5

        // More toccata figuration
        { t: 160, div: 'great', midi: 74, dur: 0.25, vel: 0.97 },   // D5
        { t: 160.25, div: 'great', midi: 77, dur: 0.25, vel: 0.98 },// F5
        { t: 160.5, div: 'great', midi: 81, dur: 0.25, vel: 0.98 }, // A5
        { t: 160.75, div: 'great', midi: 77, dur: 0.25, vel: 0.98 },// F5
        { t: 161, div: 'great', midi: 74, dur: 0.25, vel: 0.97 },   // D5
        { t: 161.25, div: 'great', midi: 77, dur: 0.25, vel: 0.98 },// F5
        { t: 161.5, div: 'great', midi: 81, dur: 0.25, vel: 0.98 }, // A5
        { t: 161.75, div: 'great', midi: 77, dur: 0.25, vel: 0.98 },// F5

        // Broadening
        { t: 162, div: 'great', midi: 81, dur: 0.5, vel: 0.98 },    // A5
        { t: 162.5, div: 'great', midi: 77, dur: 0.5, vel: 0.98 },  // F5
        { t: 163, div: 'great', midi: 74, dur: 0.5, vel: 0.97 },    // D5
        { t: 163.5, div: 'great', midi: 69, dur: 0.5, vel: 0.95 },  // A4

        { t: 164, div: 'great', midi: 65, dur: 0.5, vel: 0.93 },    // F4
        { t: 164.5, div: 'great', midi: 69, dur: 0.5, vel: 0.95 },  // A4
        { t: 165, div: 'great', midi: 74, dur: 0.5, vel: 0.97 },    // D5
        { t: 165.5, div: 'great', midi: 77, dur: 0.5, vel: 0.98 },  // F5

        // Measure 29-32: Broadening further, rhythms augmented
        { t: 166, div: 'great', midi: 74, dur: 1.0, vel: 0.97 },    // D5
        { t: 167, div: 'great', midi: 77, dur: 1.0, vel: 0.98 },    // F5
        { t: 166, div: 'great', midi: 62, dur: 2.0, vel: 0.92 },    // D4
        { t: 166, div: 'great', midi: 65, dur: 2.0, vel: 0.92 },    // F4
        { t: 166, div: 'great', midi: 69, dur: 2.0, vel: 0.93 },    // A4
        { t: 166, div: 'swell', midi: 57, dur: 2.0, vel: 0.85 },    // A3

        { t: 168, div: 'great', midi: 81, dur: 1.0, vel: 0.98 },    // A5
        { t: 169, div: 'great', midi: 77, dur: 1.0, vel: 0.98 },    // F5
        { t: 168, div: 'great', midi: 65, dur: 2.0, vel: 0.93 },    // F4
        { t: 168, div: 'great', midi: 69, dur: 2.0, vel: 0.93 },    // A4
        { t: 168, div: 'great', midi: 74, dur: 2.0, vel: 0.95 },    // D5

        // Massive chords, approaching end
        { t: 170, div: 'great', midi: 74, dur: 2.0, vel: 0.97 },    // D5
        { t: 170, div: 'great', midi: 62, dur: 2.0, vel: 0.93 },    // D4
        { t: 170, div: 'great', midi: 65, dur: 2.0, vel: 0.93 },    // F4
        { t: 170, div: 'great', midi: 69, dur: 2.0, vel: 0.95 },    // A4
        { t: 170, div: 'swell', midi: 74, dur: 2.0, vel: 0.88 },    // D5
        { t: 170, div: 'swell', midi: 69, dur: 2.0, vel: 0.85 },    // A4

        // More broadening
        { t: 172, div: 'great', midi: 77, dur: 2.0, vel: 0.98 },    // F5
        { t: 172, div: 'great', midi: 69, dur: 2.0, vel: 0.95 },    // A4
        { t: 172, div: 'great', midi: 65, dur: 2.0, vel: 0.93 },    // F4
        { t: 172, div: 'swell', midi: 62, dur: 2.0, vel: 0.88 },    // D4
        { t: 172, div: 'swell', midi: 57, dur: 2.0, vel: 0.85 },    // A3

        // Penultimate gesture
        { t: 174, div: 'great', midi: 61, dur: 2.0, vel: 0.93 },    // C#4
        { t: 174, div: 'great', midi: 64, dur: 2.0, vel: 0.93 },    // E4
        { t: 174, div: 'great', midi: 69, dur: 2.0, vel: 0.95 },    // A4
        { t: 174, div: 'great', midi: 73, dur: 2.0, vel: 0.97 },    // C#5

        // Scale flourish to final chord
        { t: 176, div: 'great', midi: 62, dur: 0.25, vel: 0.95 },   // D4
        { t: 176.25, div: 'great', midi: 64, dur: 0.25, vel: 0.95 },// E4
        { t: 176.5, div: 'great', midi: 66, dur: 0.25, vel: 0.97 }, // F#4 (MAJOR)
        { t: 176.75, div: 'great', midi: 67, dur: 0.25, vel: 0.97 },// G4
        { t: 177, div: 'great', midi: 69, dur: 0.25, vel: 0.97 },   // A4
        { t: 177.25, div: 'great', midi: 71, dur: 0.25, vel: 0.98 },// B4
        { t: 177.5, div: 'great', midi: 73, dur: 0.25, vel: 0.98 }, // C#5
        { t: 177.75, div: 'great', midi: 74, dur: 0.25, vel: 0.98 },// D5

        // ===== FINAL: Majestic D MAJOR chord =====
        { t: 178, div: 'great', midi: 50, dur: 6.0, vel: 0.98 },    // D3
        { t: 178, div: 'great', midi: 54, dur: 6.0, vel: 0.97 },    // F#3
        { t: 178, div: 'great', midi: 62, dur: 6.0, vel: 0.98 },    // D4
        { t: 178, div: 'great', midi: 66, dur: 6.0, vel: 0.98 },    // F#4
        { t: 178, div: 'great', midi: 69, dur: 6.0, vel: 0.98 },    // A4
        { t: 178, div: 'great', midi: 74, dur: 6.0, vel: 1.00 },    // D5
        { t: 178, div: 'great', midi: 78, dur: 6.0, vel: 1.00 },    // F#5
        { t: 178, div: 'great', midi: 81, dur: 6.0, vel: 1.00 },    // A5
        { t: 178, div: 'swell', midi: 66, dur: 6.0, vel: 0.90 },    // F#4
        { t: 178, div: 'swell', midi: 74, dur: 6.0, vel: 0.90 },    // D5
    ]
};
