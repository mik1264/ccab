// Bach - Toccata and Fugue in D minor, BWV 565
// Encoded for Cathedral Grand organ simulator
// Reference: MIDI C4=60, D4=62, E4=64, F4=65, G4=67, A4=69, Bb4=70, B4=71
// Key of D minor (one flat: Bb)

const PIECE_BACH_TOCCATA = {
    title: "Toccata and Fugue in D minor",
    composer: "Johann Sebastian Bach",
    catalog: "BWV 565",
    key: "D minor",
    tempo: 80,
    tempoChanges: [
        { t: 0, tempo: 80, label: "Adagio" },
        { t: 6.5, tempo: 120, label: "Prestissimo" },
        { t: 12, tempo: 80, label: "Adagio" },
        { t: 18.5, tempo: 120, label: "Prestissimo" },
        { t: 24, tempo: 80, label: "Adagio" },
        { t: 30.5, tempo: 120, label: "Prestissimo" },
        { t: 40, tempo: 100, label: "Allegro" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8'],
        swell: [],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    // Note events: t=time in beats, div=division, midi=MIDI note, dur=duration in beats, vel=velocity (0-1)
    events: [
        // ===== MEASURE 1: Opening mordent on A5, with octave doubling =====
        // Upper voice
        { t: 0, div: 'great', midi: 81, dur: 0.12, vel: 0.9 },      // A5 (mordent start)
        { t: 0.12, div: 'great', midi: 80, dur: 0.12, vel: 0.85 },   // G#5
        { t: 0.24, div: 'great', midi: 81, dur: 1.64, vel: 0.95 },   // A5 (held)
        // Octave doubling below
        { t: 0, div: 'great', midi: 69, dur: 0.12, vel: 0.9 },       // A4
        { t: 0.12, div: 'great', midi: 68, dur: 0.12, vel: 0.85 },   // G#4
        { t: 0.24, div: 'great', midi: 69, dur: 1.64, vel: 0.95 },   // A4 (held)

        // Fermata/pause ~2 beats
        // (silence from t=2.0 to t=3.0)

        // ===== MEASURE 2: Descending run (Prestissimo) =====
        // Fast 32nd-note descending scale from G5 to D4
        { t: 3.0, div: 'great', midi: 79, dur: 0.15, vel: 0.85 },    // G5
        { t: 3.15, div: 'great', midi: 77, dur: 0.15, vel: 0.83 },   // F5
        { t: 3.30, div: 'great', midi: 76, dur: 0.15, vel: 0.81 },   // E5
        { t: 3.45, div: 'great', midi: 74, dur: 0.15, vel: 0.79 },   // D5
        { t: 3.60, div: 'great', midi: 73, dur: 0.15, vel: 0.77 },   // C#5
        { t: 3.75, div: 'great', midi: 74, dur: 0.15, vel: 0.75 },   // D5
        // Octave doubling of the run
        { t: 3.0, div: 'great', midi: 67, dur: 0.15, vel: 0.85 },    // G4
        { t: 3.15, div: 'great', midi: 65, dur: 0.15, vel: 0.83 },   // F4
        { t: 3.30, div: 'great', midi: 64, dur: 0.15, vel: 0.81 },   // E4
        { t: 3.45, div: 'great', midi: 62, dur: 0.15, vel: 0.79 },   // D4
        { t: 3.60, div: 'great', midi: 61, dur: 0.15, vel: 0.77 },   // C#4
        { t: 3.75, div: 'great', midi: 62, dur: 0.15, vel: 0.75 },   // D4

        // Diminished seventh chord built up: C#-E-G-Bb
        { t: 4.0, div: 'great', midi: 73, dur: 0.25, vel: 0.8 },     // C#5
        { t: 4.25, div: 'great', midi: 76, dur: 0.25, vel: 0.82 },   // E5
        { t: 4.5, div: 'great', midi: 79, dur: 0.25, vel: 0.84 },    // G5
        { t: 4.75, div: 'great', midi: 82, dur: 1.0, vel: 0.88 },    // Bb5 (top, held)
        { t: 4.75, div: 'great', midi: 79, dur: 1.0, vel: 0.85 },    // G5
        { t: 4.75, div: 'great', midi: 76, dur: 1.0, vel: 0.83 },    // E5
        { t: 4.75, div: 'great', midi: 73, dur: 1.0, vel: 0.80 },    // C#5

        // Resolution to D major chord
        { t: 5.75, div: 'great', midi: 81, dur: 0.5, vel: 0.9 },     // A5
        { t: 5.75, div: 'great', midi: 78, dur: 0.5, vel: 0.87 },    // F#5
        { t: 5.75, div: 'great', midi: 74, dur: 0.5, vel: 0.85 },    // D5

        // Fermata
        // (silence from t=6.25 to t=6.5)

        // ===== MEASURES 3-4: Repeat pattern one octave lower =====
        // Mordent on A4
        { t: 6.5, div: 'great', midi: 69, dur: 0.12, vel: 0.9 },     // A4
        { t: 6.62, div: 'great', midi: 68, dur: 0.12, vel: 0.85 },   // G#4
        { t: 6.74, div: 'great', midi: 69, dur: 1.64, vel: 0.95 },   // A4 (held)
        // Octave doubling below
        { t: 6.5, div: 'great', midi: 57, dur: 0.12, vel: 0.9 },     // A3
        { t: 6.62, div: 'great', midi: 56, dur: 0.12, vel: 0.85 },   // G#3
        { t: 6.74, div: 'great', midi: 57, dur: 1.64, vel: 0.95 },   // A3 (held)

        // Pause

        // Descending run from G4 to D3
        { t: 9.0, div: 'great', midi: 67, dur: 0.15, vel: 0.85 },    // G4
        { t: 9.15, div: 'great', midi: 65, dur: 0.15, vel: 0.83 },   // F4
        { t: 9.30, div: 'great', midi: 64, dur: 0.15, vel: 0.81 },   // E4
        { t: 9.45, div: 'great', midi: 62, dur: 0.15, vel: 0.79 },   // D4
        { t: 9.60, div: 'great', midi: 61, dur: 0.15, vel: 0.77 },   // C#4
        { t: 9.75, div: 'great', midi: 62, dur: 0.15, vel: 0.75 },   // D4
        // Lower octave
        { t: 9.0, div: 'great', midi: 55, dur: 0.15, vel: 0.85 },    // G3
        { t: 9.15, div: 'great', midi: 53, dur: 0.15, vel: 0.83 },   // F3
        { t: 9.30, div: 'great', midi: 52, dur: 0.15, vel: 0.81 },   // E3
        { t: 9.45, div: 'great', midi: 50, dur: 0.15, vel: 0.79 },   // D3
        { t: 9.60, div: 'great', midi: 49, dur: 0.15, vel: 0.77 },   // C#3
        { t: 9.75, div: 'great', midi: 50, dur: 0.15, vel: 0.75 },   // D3

        // Dim7 chord, lower octave
        { t: 10.0, div: 'great', midi: 61, dur: 0.25, vel: 0.8 },    // C#4
        { t: 10.25, div: 'great', midi: 64, dur: 0.25, vel: 0.82 },  // E4
        { t: 10.5, div: 'great', midi: 67, dur: 0.25, vel: 0.84 },   // G4
        { t: 10.75, div: 'great', midi: 70, dur: 1.0, vel: 0.88 },   // Bb4
        { t: 10.75, div: 'great', midi: 67, dur: 1.0, vel: 0.85 },   // G4
        { t: 10.75, div: 'great', midi: 64, dur: 1.0, vel: 0.83 },   // E4
        { t: 10.75, div: 'great', midi: 61, dur: 1.0, vel: 0.80 },   // C#4

        // Resolution to D major
        { t: 11.75, div: 'great', midi: 69, dur: 0.5, vel: 0.9 },    // A4
        { t: 11.75, div: 'great', midi: 66, dur: 0.5, vel: 0.87 },   // F#4
        { t: 11.75, div: 'great', midi: 62, dur: 0.5, vel: 0.85 },   // D4

        // ===== MEASURES 5-6: Third statement, lowest, with pedal =====
        // Mordent on A3
        { t: 12.5, div: 'great', midi: 57, dur: 0.12, vel: 0.9 },    // A3
        { t: 12.62, div: 'great', midi: 56, dur: 0.12, vel: 0.85 },  // G#3
        { t: 12.74, div: 'great', midi: 57, dur: 1.64, vel: 0.95 },  // A3 (held)
        // Pedal doubling
        { t: 12.5, div: 'pedal', midi: 45, dur: 0.12, vel: 0.9 },    // A2
        { t: 12.62, div: 'pedal', midi: 44, dur: 0.12, vel: 0.85 },  // G#2
        { t: 12.74, div: 'pedal', midi: 45, dur: 1.64, vel: 0.95 },  // A2 (held)

        // Pause

        // Descending run from G3 down
        { t: 15.0, div: 'great', midi: 55, dur: 0.15, vel: 0.85 },   // G3
        { t: 15.15, div: 'great', midi: 53, dur: 0.15, vel: 0.83 },  // F3
        { t: 15.30, div: 'great', midi: 52, dur: 0.15, vel: 0.81 },  // E3
        { t: 15.45, div: 'great', midi: 50, dur: 0.15, vel: 0.79 },  // D3
        { t: 15.60, div: 'great', midi: 49, dur: 0.15, vel: 0.77 },  // C#3
        { t: 15.75, div: 'great', midi: 50, dur: 0.15, vel: 0.75 },  // D3
        // Pedal doubling
        { t: 15.0, div: 'pedal', midi: 43, dur: 0.15, vel: 0.85 },   // G2
        { t: 15.15, div: 'pedal', midi: 41, dur: 0.15, vel: 0.83 },  // F2
        { t: 15.30, div: 'pedal', midi: 40, dur: 0.15, vel: 0.81 },  // E2
        { t: 15.45, div: 'pedal', midi: 38, dur: 0.15, vel: 0.79 },  // D2
        { t: 15.60, div: 'pedal', midi: 37, dur: 0.15, vel: 0.77 },  // C#2
        { t: 15.75, div: 'pedal', midi: 38, dur: 0.15, vel: 0.75 },  // D2

        // Low dim7 chord with pedal
        { t: 16.0, div: 'great', midi: 49, dur: 0.25, vel: 0.8 },    // C#3
        { t: 16.25, div: 'great', midi: 52, dur: 0.25, vel: 0.82 },  // E3
        { t: 16.5, div: 'great', midi: 55, dur: 0.25, vel: 0.84 },   // G3
        { t: 16.75, div: 'great', midi: 58, dur: 1.0, vel: 0.88 },   // Bb3
        { t: 16.75, div: 'great', midi: 55, dur: 1.0, vel: 0.85 },   // G3
        { t: 16.75, div: 'great', midi: 52, dur: 1.0, vel: 0.83 },   // E3
        { t: 16.75, div: 'great', midi: 49, dur: 1.0, vel: 0.80 },   // C#3
        { t: 16.75, div: 'pedal', midi: 37, dur: 1.0, vel: 0.9 },    // C#2

        // Resolution to D - massive pedal D
        { t: 17.75, div: 'great', midi: 57, dur: 0.75, vel: 0.95 },  // A3
        { t: 17.75, div: 'great', midi: 54, dur: 0.75, vel: 0.90 },  // F#3
        { t: 17.75, div: 'great', midi: 50, dur: 0.75, vel: 0.88 },  // D3
        { t: 17.75, div: 'pedal', midi: 38, dur: 0.75, vel: 0.95 },  // D2

        // ===== MEASURES 7-10: Recitative-like passage =====
        // Sustained pedal D with manual figuration

        // Bar 7: Rising figure over pedal D
        { t: 19.0, div: 'pedal', midi: 38, dur: 4.0, vel: 0.85 },    // D2 pedal point
        { t: 19.0, div: 'great', midi: 62, dur: 0.5, vel: 0.8 },     // D4
        { t: 19.5, div: 'great', midi: 65, dur: 0.5, vel: 0.82 },    // F4
        { t: 20.0, div: 'great', midi: 69, dur: 0.5, vel: 0.84 },    // A4
        { t: 20.5, div: 'great', midi: 74, dur: 0.5, vel: 0.86 },    // D5
        { t: 21.0, div: 'great', midi: 77, dur: 0.5, vel: 0.88 },    // F5
        { t: 21.5, div: 'great', midi: 81, dur: 1.5, vel: 0.92 },    // A5 (held)

        // Bar 8-9: Descending parallel scales (three descending figures)
        // First descent: from A5
        { t: 23.0, div: 'great', midi: 81, dur: 0.2, vel: 0.85 },    // A5
        { t: 23.2, div: 'great', midi: 79, dur: 0.2, vel: 0.83 },    // G5
        { t: 23.4, div: 'great', midi: 77, dur: 0.2, vel: 0.81 },    // F5
        { t: 23.6, div: 'great', midi: 76, dur: 0.2, vel: 0.79 },    // E5
        { t: 23.8, div: 'great', midi: 74, dur: 0.2, vel: 0.77 },    // D5
        { t: 24.0, div: 'great', midi: 72, dur: 0.2, vel: 0.75 },    // C5
        { t: 24.2, div: 'great', midi: 70, dur: 0.4, vel: 0.78 },    // Bb4

        // Second descent: from G5
        { t: 24.6, div: 'great', midi: 79, dur: 0.2, vel: 0.85 },    // G5
        { t: 24.8, div: 'great', midi: 77, dur: 0.2, vel: 0.83 },    // F5
        { t: 25.0, div: 'great', midi: 76, dur: 0.2, vel: 0.81 },    // E5
        { t: 25.2, div: 'great', midi: 74, dur: 0.2, vel: 0.79 },    // D5
        { t: 25.4, div: 'great', midi: 72, dur: 0.2, vel: 0.77 },    // C5
        { t: 25.6, div: 'great', midi: 70, dur: 0.2, vel: 0.75 },    // Bb4
        { t: 25.8, div: 'great', midi: 69, dur: 0.4, vel: 0.78 },    // A4

        // Third descent: from F5
        { t: 26.2, div: 'great', midi: 77, dur: 0.2, vel: 0.85 },    // F5
        { t: 26.4, div: 'great', midi: 76, dur: 0.2, vel: 0.83 },    // E5
        { t: 26.6, div: 'great', midi: 74, dur: 0.2, vel: 0.81 },    // D5
        { t: 26.8, div: 'great', midi: 72, dur: 0.2, vel: 0.79 },    // C5
        { t: 27.0, div: 'great', midi: 70, dur: 0.2, vel: 0.77 },    // Bb4
        { t: 27.2, div: 'great', midi: 69, dur: 0.2, vel: 0.75 },    // A4
        { t: 27.4, div: 'great', midi: 67, dur: 0.4, vel: 0.78 },    // G4

        // ===== MEASURES 10-12: Cadential figure leading to second pedal entry =====
        // Rising arpeggio to A then mordent cadence
        { t: 28.0, div: 'pedal', midi: 33, dur: 4.0, vel: 0.9 },     // A1 pedal point

        // Repeated note figure (characteristic of bar 12-15)
        { t: 28.0, div: 'great', midi: 69, dur: 0.25, vel: 0.8 },    // A4
        { t: 28.25, div: 'great', midi: 69, dur: 0.25, vel: 0.75 },  // A4
        { t: 28.5, div: 'great', midi: 69, dur: 0.25, vel: 0.7 },    // A4
        { t: 28.75, div: 'great', midi: 69, dur: 0.25, vel: 0.75 },  // A4
        { t: 29.0, div: 'great', midi: 70, dur: 0.25, vel: 0.8 },    // Bb4
        { t: 29.25, div: 'great', midi: 69, dur: 0.25, vel: 0.78 },  // A4
        { t: 29.5, div: 'great', midi: 67, dur: 0.25, vel: 0.76 },   // G4
        { t: 29.75, div: 'great', midi: 69, dur: 0.25, vel: 0.8 },   // A4

        // Descending run quote of main material
        { t: 30.0, div: 'great', midi: 69, dur: 0.15, vel: 0.85 },   // A4
        { t: 30.15, div: 'great', midi: 67, dur: 0.15, vel: 0.83 },  // G4
        { t: 30.30, div: 'great', midi: 65, dur: 0.15, vel: 0.81 },  // F4
        { t: 30.45, div: 'great', midi: 64, dur: 0.15, vel: 0.79 },  // E4
        { t: 30.60, div: 'great', midi: 62, dur: 0.15, vel: 0.77 },  // D4
        { t: 30.75, div: 'great', midi: 61, dur: 0.15, vel: 0.75 },  // C#4

        // Mordent on C#4
        { t: 31.0, div: 'great', midi: 61, dur: 0.1, vel: 0.82 },    // C#4
        { t: 31.1, div: 'great', midi: 60, dur: 0.1, vel: 0.78 },    // C4 (lower neighbor)
        { t: 31.2, div: 'great', midi: 61, dur: 0.7, vel: 0.85 },    // C#4 held

        // ===== MEASURES 12-15: Sustained pedal D, repeated-note figuration =====
        { t: 32.0, div: 'pedal', midi: 38, dur: 8.0, vel: 0.9 },     // D2 long pedal

        // Repeated D4 with upper neighbor figures
        { t: 32.0, div: 'great', midi: 62, dur: 0.25, vel: 0.75 },   // D4
        { t: 32.25, div: 'great', midi: 62, dur: 0.25, vel: 0.7 },   // D4
        { t: 32.5, div: 'great', midi: 64, dur: 0.25, vel: 0.78 },   // E4
        { t: 32.75, div: 'great', midi: 62, dur: 0.25, vel: 0.75 },  // D4
        { t: 33.0, div: 'great', midi: 65, dur: 0.25, vel: 0.8 },    // F4
        { t: 33.25, div: 'great', midi: 64, dur: 0.25, vel: 0.78 },  // E4
        { t: 33.5, div: 'great', midi: 62, dur: 0.25, vel: 0.75 },   // D4
        { t: 33.75, div: 'great', midi: 61, dur: 0.25, vel: 0.73 },  // C#4

        // Rising scale passage
        { t: 34.0, div: 'great', midi: 62, dur: 0.25, vel: 0.78 },   // D4
        { t: 34.25, div: 'great', midi: 64, dur: 0.25, vel: 0.8 },   // E4
        { t: 34.5, div: 'great', midi: 65, dur: 0.25, vel: 0.82 },   // F4
        { t: 34.75, div: 'great', midi: 67, dur: 0.25, vel: 0.84 },  // G4
        { t: 35.0, div: 'great', midi: 69, dur: 0.25, vel: 0.86 },   // A4
        { t: 35.25, div: 'great', midi: 70, dur: 0.25, vel: 0.88 },  // Bb4
        { t: 35.5, div: 'great', midi: 72, dur: 0.25, vel: 0.9 },    // C5
        { t: 35.75, div: 'great', midi: 74, dur: 0.5, vel: 0.92 },   // D5

        // Another descent
        { t: 36.25, div: 'great', midi: 72, dur: 0.2, vel: 0.85 },   // C5
        { t: 36.45, div: 'great', midi: 70, dur: 0.2, vel: 0.83 },   // Bb4
        { t: 36.65, div: 'great', midi: 69, dur: 0.2, vel: 0.81 },   // A4
        { t: 36.85, div: 'great', midi: 67, dur: 0.2, vel: 0.79 },   // G4
        { t: 37.05, div: 'great', midi: 65, dur: 0.2, vel: 0.77 },   // F4
        { t: 37.25, div: 'great', midi: 64, dur: 0.2, vel: 0.75 },   // E4
        { t: 37.45, div: 'great', midi: 62, dur: 0.55, vel: 0.78 },  // D4

        // ===== MEASURES 16-19: Transition passage with cascading figures =====
        // Trichord motives ascending: D-F-A arpeggio expansion
        { t: 38.0, div: 'great', midi: 62, dur: 0.2, vel: 0.8 },     // D4
        { t: 38.2, div: 'great', midi: 65, dur: 0.2, vel: 0.82 },    // F4
        { t: 38.4, div: 'great', midi: 69, dur: 0.4, vel: 0.85 },    // A4
        { t: 38.8, div: 'great', midi: 65, dur: 0.2, vel: 0.8 },     // F4
        { t: 39.0, div: 'great', midi: 69, dur: 0.2, vel: 0.82 },    // A4
        { t: 39.2, div: 'great', midi: 74, dur: 0.4, vel: 0.85 },    // D5
        { t: 39.6, div: 'great', midi: 69, dur: 0.2, vel: 0.8 },     // A4
        { t: 39.8, div: 'great', midi: 74, dur: 0.2, vel: 0.82 },    // D5
        { t: 40.0, div: 'great', midi: 77, dur: 0.4, vel: 0.85 },    // F5

        // ===== MEASURES 20-25: Big chords section =====
        // First big chord: D minor
        { t: 40.5, div: 'great', midi: 86, dur: 1.5, vel: 1.0 },     // D6
        { t: 40.5, div: 'great', midi: 81, dur: 1.5, vel: 0.95 },    // A5
        { t: 40.5, div: 'great', midi: 77, dur: 1.5, vel: 0.92 },    // F5
        { t: 40.5, div: 'great', midi: 74, dur: 1.5, vel: 0.90 },    // D5
        { t: 40.5, div: 'great', midi: 69, dur: 1.5, vel: 0.88 },    // A4
        { t: 40.5, div: 'great', midi: 65, dur: 1.5, vel: 0.85 },    // F4
        { t: 40.5, div: 'great', midi: 62, dur: 1.5, vel: 0.83 },    // D4
        { t: 40.5, div: 'pedal', midi: 38, dur: 1.5, vel: 1.0 },     // D2

        // Passing motion down
        { t: 42.0, div: 'great', midi: 85, dur: 0.15, vel: 0.9 },    // C#6
        { t: 42.15, div: 'great', midi: 84, dur: 0.15, vel: 0.88 },  // C6
        { t: 42.30, div: 'great', midi: 82, dur: 0.15, vel: 0.86 },  // Bb5
        { t: 42.45, div: 'great', midi: 81, dur: 0.15, vel: 0.84 },  // A5
        { t: 42.60, div: 'great', midi: 79, dur: 0.15, vel: 0.82 },  // G5
        { t: 42.75, div: 'great', midi: 77, dur: 0.25, vel: 0.85 },  // F5

        // Second big chord: A major (dominant)
        { t: 43.0, div: 'great', midi: 81, dur: 1.5, vel: 1.0 },     // A5
        { t: 43.0, div: 'great', midi: 76, dur: 1.5, vel: 0.95 },    // E5
        { t: 43.0, div: 'great', midi: 73, dur: 1.5, vel: 0.92 },    // C#5
        { t: 43.0, div: 'great', midi: 69, dur: 1.5, vel: 0.90 },    // A4
        { t: 43.0, div: 'great', midi: 64, dur: 1.5, vel: 0.88 },    // E4
        { t: 43.0, div: 'great', midi: 61, dur: 1.5, vel: 0.85 },    // C#4
        { t: 43.0, div: 'pedal', midi: 33, dur: 1.5, vel: 1.0 },     // A1

        // Descending run from chord
        { t: 44.5, div: 'great', midi: 81, dur: 0.15, vel: 0.9 },    // A5
        { t: 44.65, div: 'great', midi: 79, dur: 0.15, vel: 0.88 },  // G5
        { t: 44.80, div: 'great', midi: 77, dur: 0.15, vel: 0.86 },  // F5
        { t: 44.95, div: 'great', midi: 76, dur: 0.15, vel: 0.84 },  // E5
        { t: 45.10, div: 'great', midi: 74, dur: 0.15, vel: 0.82 },  // D5
        { t: 45.25, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },  // C5

        // Third big chord: Bb major
        { t: 45.5, div: 'great', midi: 82, dur: 1.5, vel: 1.0 },     // Bb5
        { t: 45.5, div: 'great', midi: 77, dur: 1.5, vel: 0.95 },    // F5
        { t: 45.5, div: 'great', midi: 74, dur: 1.5, vel: 0.92 },    // D5
        { t: 45.5, div: 'great', midi: 70, dur: 1.5, vel: 0.90 },    // Bb4
        { t: 45.5, div: 'great', midi: 65, dur: 1.5, vel: 0.88 },    // F4
        { t: 45.5, div: 'great', midi: 62, dur: 1.5, vel: 0.85 },    // D4
        { t: 45.5, div: 'pedal', midi: 34, dur: 1.5, vel: 1.0 },     // Bb1

        // Another descending figure
        { t: 47.0, div: 'great', midi: 82, dur: 0.15, vel: 0.9 },    // Bb5
        { t: 47.15, div: 'great', midi: 81, dur: 0.15, vel: 0.88 },  // A5
        { t: 47.30, div: 'great', midi: 79, dur: 0.15, vel: 0.86 },  // G5
        { t: 47.45, div: 'great', midi: 77, dur: 0.15, vel: 0.84 },  // F5
        { t: 47.60, div: 'great', midi: 76, dur: 0.15, vel: 0.82 },  // E5
        { t: 47.75, div: 'great', midi: 74, dur: 0.25, vel: 0.85 },  // D5

        // Fourth chord: G minor (iv)
        { t: 48.0, div: 'great', midi: 79, dur: 1.5, vel: 1.0 },     // G5
        { t: 48.0, div: 'great', midi: 74, dur: 1.5, vel: 0.95 },    // D5
        { t: 48.0, div: 'great', midi: 70, dur: 1.5, vel: 0.92 },    // Bb4
        { t: 48.0, div: 'great', midi: 67, dur: 1.5, vel: 0.90 },    // G4
        { t: 48.0, div: 'great', midi: 62, dur: 1.5, vel: 0.88 },    // D4
        { t: 48.0, div: 'great', midi: 58, dur: 1.5, vel: 0.85 },    // Bb3
        { t: 48.0, div: 'pedal', midi: 31, dur: 1.5, vel: 1.0 },     // G1

        // Connecting run
        { t: 49.5, div: 'great', midi: 79, dur: 0.15, vel: 0.88 },   // G5
        { t: 49.65, div: 'great', midi: 77, dur: 0.15, vel: 0.86 },  // F5
        { t: 49.80, div: 'great', midi: 76, dur: 0.15, vel: 0.84 },  // E5
        { t: 49.95, div: 'great', midi: 74, dur: 0.15, vel: 0.82 },  // D5
        { t: 50.10, div: 'great', midi: 73, dur: 0.15, vel: 0.80 },  // C#5

        // Fifth chord: A major (dominant) with suspense
        { t: 50.5, div: 'great', midi: 81, dur: 1.5, vel: 1.0 },     // A5
        { t: 50.5, div: 'great', midi: 76, dur: 1.5, vel: 0.95 },    // E5
        { t: 50.5, div: 'great', midi: 73, dur: 1.5, vel: 0.92 },    // C#5
        { t: 50.5, div: 'great', midi: 69, dur: 1.5, vel: 0.90 },    // A4
        { t: 50.5, div: 'great', midi: 64, dur: 1.5, vel: 0.88 },    // E4
        { t: 50.5, div: 'pedal', midi: 33, dur: 1.5, vel: 1.0 },     // A1

        // ===== MEASURES 26-30: Virtuosic passage leading to Fugue =====
        // Fast arpeggiated figures over moving bass

        // Rising arpeggio: D minor
        { t: 52.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.9 },     // D2
        { t: 52.0, div: 'great', midi: 62, dur: 0.15, vel: 0.8 },    // D4
        { t: 52.15, div: 'great', midi: 65, dur: 0.15, vel: 0.82 },  // F4
        { t: 52.30, div: 'great', midi: 69, dur: 0.15, vel: 0.84 },  // A4
        { t: 52.45, div: 'great', midi: 74, dur: 0.15, vel: 0.86 },  // D5
        { t: 52.60, div: 'great', midi: 77, dur: 0.15, vel: 0.88 },  // F5
        { t: 52.75, div: 'great', midi: 81, dur: 0.15, vel: 0.9 },   // A5
        { t: 52.90, div: 'great', midi: 86, dur: 0.35, vel: 0.92 },  // D6

        // Descending from top
        { t: 53.25, div: 'great', midi: 86, dur: 0.15, vel: 0.9 },   // D6
        { t: 53.40, div: 'great', midi: 84, dur: 0.15, vel: 0.88 },  // C6
        { t: 53.55, div: 'great', midi: 82, dur: 0.15, vel: 0.86 },  // Bb5
        { t: 53.70, div: 'great', midi: 81, dur: 0.15, vel: 0.84 },  // A5
        { t: 53.85, div: 'great', midi: 79, dur: 0.15, vel: 0.82 },  // G5
        { t: 54.0, div: 'great', midi: 77, dur: 0.15, vel: 0.80 },   // F5
        { t: 54.15, div: 'great', midi: 76, dur: 0.15, vel: 0.78 },  // E5
        { t: 54.30, div: 'great', midi: 74, dur: 0.15, vel: 0.76 },  // D5

        // C minor arpeggio
        { t: 54.5, div: 'pedal', midi: 36, dur: 2.0, vel: 0.9 },     // C2
        { t: 54.5, div: 'great', midi: 60, dur: 0.15, vel: 0.8 },    // C4
        { t: 54.65, div: 'great', midi: 63, dur: 0.15, vel: 0.82 },  // Eb4
        { t: 54.80, div: 'great', midi: 67, dur: 0.15, vel: 0.84 },  // G4
        { t: 54.95, div: 'great', midi: 72, dur: 0.15, vel: 0.86 },  // C5
        { t: 55.10, div: 'great', midi: 75, dur: 0.15, vel: 0.88 },  // Eb5
        { t: 55.25, div: 'great', midi: 79, dur: 0.15, vel: 0.9 },   // G5
        { t: 55.40, div: 'great', midi: 84, dur: 0.35, vel: 0.92 },  // C6

        // Bb major arpeggio
        { t: 55.75, div: 'pedal', midi: 34, dur: 2.0, vel: 0.9 },    // Bb1
        { t: 55.75, div: 'great', midi: 58, dur: 0.15, vel: 0.8 },   // Bb3
        { t: 55.90, div: 'great', midi: 62, dur: 0.15, vel: 0.82 },  // D4
        { t: 56.05, div: 'great', midi: 65, dur: 0.15, vel: 0.84 },  // F4
        { t: 56.20, div: 'great', midi: 70, dur: 0.15, vel: 0.86 },  // Bb4
        { t: 56.35, div: 'great', midi: 74, dur: 0.15, vel: 0.88 },  // D5
        { t: 56.50, div: 'great', midi: 77, dur: 0.15, vel: 0.9 },   // F5
        { t: 56.65, div: 'great', midi: 82, dur: 0.35, vel: 0.92 },  // Bb5

        // A major arpeggio (dominant preparation)
        { t: 57.0, div: 'pedal', midi: 33, dur: 2.0, vel: 0.9 },     // A1
        { t: 57.0, div: 'great', midi: 57, dur: 0.15, vel: 0.8 },    // A3
        { t: 57.15, div: 'great', midi: 61, dur: 0.15, vel: 0.82 },  // C#4
        { t: 57.30, div: 'great', midi: 64, dur: 0.15, vel: 0.84 },  // E4
        { t: 57.45, div: 'great', midi: 69, dur: 0.15, vel: 0.86 },  // A4
        { t: 57.60, div: 'great', midi: 73, dur: 0.15, vel: 0.88 },  // C#5
        { t: 57.75, div: 'great', midi: 76, dur: 0.15, vel: 0.9 },   // E5
        { t: 57.90, div: 'great', midi: 81, dur: 0.35, vel: 0.92 },  // A5

        // ===== MEASURES 29-30: Final cadence before Fugue =====
        // Dominant pedal A with trills
        { t: 58.5, div: 'pedal', midi: 33, dur: 3.0, vel: 0.95 },    // A1

        // Trill on A5
        { t: 58.5, div: 'great', midi: 81, dur: 0.12, vel: 0.85 },   // A5
        { t: 58.62, div: 'great', midi: 82, dur: 0.12, vel: 0.8 },   // Bb5
        { t: 58.74, div: 'great', midi: 81, dur: 0.12, vel: 0.85 },  // A5
        { t: 58.86, div: 'great', midi: 82, dur: 0.12, vel: 0.8 },   // Bb5
        { t: 58.98, div: 'great', midi: 81, dur: 0.12, vel: 0.85 },  // A5
        { t: 59.10, div: 'great', midi: 82, dur: 0.12, vel: 0.8 },   // Bb5
        { t: 59.22, div: 'great', midi: 81, dur: 0.78, vel: 0.9 },   // A5 (held)

        // Full dominant chord
        { t: 60.0, div: 'great', midi: 81, dur: 1.0, vel: 1.0 },     // A5
        { t: 60.0, div: 'great', midi: 76, dur: 1.0, vel: 0.95 },    // E5
        { t: 60.0, div: 'great', midi: 73, dur: 1.0, vel: 0.92 },    // C#5
        { t: 60.0, div: 'great', midi: 69, dur: 1.0, vel: 0.90 },    // A4
        { t: 60.0, div: 'great', midi: 64, dur: 1.0, vel: 0.88 },    // E4
        { t: 60.0, div: 'great', midi: 61, dur: 1.0, vel: 0.85 },    // C#4
        { t: 60.0, div: 'great', midi: 57, dur: 1.0, vel: 0.83 },    // A3

        // Resolution: massive D minor chord (Fugue entry point)
        { t: 61.5, div: 'great', midi: 86, dur: 2.0, vel: 1.0 },     // D6
        { t: 61.5, div: 'great', midi: 81, dur: 2.0, vel: 0.95 },    // A5
        { t: 61.5, div: 'great', midi: 77, dur: 2.0, vel: 0.92 },    // F5
        { t: 61.5, div: 'great', midi: 74, dur: 2.0, vel: 0.90 },    // D5
        { t: 61.5, div: 'great', midi: 69, dur: 2.0, vel: 0.88 },    // A4
        { t: 61.5, div: 'great', midi: 65, dur: 2.0, vel: 0.85 },    // F4
        { t: 61.5, div: 'great', midi: 62, dur: 2.0, vel: 0.83 },    // D4
        { t: 61.5, div: 'pedal', midi: 38, dur: 2.0, vel: 1.0 },     // D2
        { t: 61.5, div: 'pedal', midi: 26, dur: 2.0, vel: 1.0 },     // D1

        // ===== FUGUE SUBJECT ENTRY (measures 30+) =====
        // The fugue subject in D minor, 4/4 time
        // Subject: D4-A4 (ascending 5th), then descending stepwise with characteristic rhythm

        // First entry: alto voice alone
        { t: 64.0, div: 'great', midi: 62, dur: 1.0, vel: 0.75 },    // D4 (half note)
        { t: 65.0, div: 'great', midi: 69, dur: 0.75, vel: 0.78 },   // A4 (dotted quarter)
        { t: 65.75, div: 'great', midi: 67, dur: 0.25, vel: 0.72 },  // G4 (eighth)
        { t: 66.0, div: 'great', midi: 65, dur: 0.5, vel: 0.75 },    // F4 (quarter)
        { t: 66.5, div: 'great', midi: 64, dur: 0.5, vel: 0.73 },    // E4 (quarter)
        { t: 67.0, div: 'great', midi: 62, dur: 0.5, vel: 0.75 },    // D4 (quarter)
        { t: 67.5, div: 'great', midi: 61, dur: 0.25, vel: 0.7 },    // C#4 (eighth)
        { t: 67.75, div: 'great', midi: 62, dur: 0.25, vel: 0.72 },  // D4 (eighth)
        { t: 68.0, div: 'great', midi: 64, dur: 0.5, vel: 0.75 },    // E4 (quarter)
        { t: 68.5, div: 'great', midi: 61, dur: 0.5, vel: 0.73 },    // C#4 (quarter)
        { t: 69.0, div: 'great', midi: 62, dur: 1.0, vel: 0.78 },    // D4 (half, subject ends)

        // Second entry: soprano, subject at the dominant (A minor)
        { t: 70.0, div: 'great', midi: 69, dur: 1.0, vel: 0.78 },    // A4
        { t: 71.0, div: 'great', midi: 76, dur: 0.75, vel: 0.8 },    // E5
        { t: 71.75, div: 'great', midi: 74, dur: 0.25, vel: 0.75 },  // D5
        { t: 72.0, div: 'great', midi: 72, dur: 0.5, vel: 0.78 },    // C5
        { t: 72.5, div: 'great', midi: 70, dur: 0.5, vel: 0.76 },    // Bb4
        { t: 73.0, div: 'great', midi: 69, dur: 0.5, vel: 0.78 },    // A4
        { t: 73.5, div: 'great', midi: 68, dur: 0.25, vel: 0.73 },   // G#4
        { t: 73.75, div: 'great', midi: 69, dur: 0.25, vel: 0.75 },  // A4
        { t: 74.0, div: 'great', midi: 71, dur: 0.5, vel: 0.78 },    // B4
        { t: 74.5, div: 'great', midi: 68, dur: 0.5, vel: 0.76 },    // G#4
        { t: 75.0, div: 'great', midi: 69, dur: 1.0, vel: 0.8 },     // A4

        // Countersubject in alto during soprano entry
        { t: 70.0, div: 'great', midi: 62, dur: 0.5, vel: 0.65 },    // D4
        { t: 70.5, div: 'great', midi: 64, dur: 0.5, vel: 0.63 },    // E4
        { t: 71.0, div: 'great', midi: 65, dur: 0.5, vel: 0.65 },    // F4
        { t: 71.5, div: 'great', midi: 67, dur: 0.5, vel: 0.63 },    // G4
        { t: 72.0, div: 'great', midi: 69, dur: 0.5, vel: 0.65 },    // A4
        { t: 72.5, div: 'great', midi: 67, dur: 0.5, vel: 0.63 },    // G4
        { t: 73.0, div: 'great', midi: 65, dur: 0.5, vel: 0.65 },    // F4
        { t: 73.5, div: 'great', midi: 64, dur: 0.5, vel: 0.63 },    // E4
        { t: 74.0, div: 'great', midi: 62, dur: 0.5, vel: 0.65 },    // D4
        { t: 74.5, div: 'great', midi: 61, dur: 0.5, vel: 0.63 },    // C#4
        { t: 75.0, div: 'great', midi: 62, dur: 1.0, vel: 0.65 },    // D4
    ]
};


// ============================================================================
// Bach - Little Fugue in G minor, BWV 578
// Encoded for Cathedral Grand organ simulator
// Key: G minor (2 flats: Bb, Eb)
// 4 voices: Soprano, Alto, Tenor, Bass (pedal)
// The subject spans ~4.5 measures
// ============================================================================

const PIECE_BACH_LITTLE_FUGUE = {
    title: "Fugue in G minor (\"Little Fugue\")",
    composer: "Johann Sebastian Bach",
    catalog: "BWV 578",
    key: "G minor",
    tempo: 72,
    registration: {
        great: ['gt-principal8', 'gt-octave4'],
        swell: ['sw-gedeckt8'],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8']
    },
    // Fugue subject (4.5 bars): G4-D5 (ascending 5th), then Bb4-A4-G4-Bb4-A4-G4-F#4-A4-D4
    // with characteristic bouncing rhythm
    events: [
        // ===== EXPOSITION: Voice 1 - Soprano (bars 1-5) =====
        // The famous subject: starts on G, leaps up a 5th to D, then descends
        { t: 0, div: 'great', midi: 67, dur: 2.0, vel: 0.8 },        // G4 (half note)
        { t: 2.0, div: 'great', midi: 74, dur: 1.5, vel: 0.82 },     // D5 (dotted quarter)
        { t: 3.5, div: 'great', midi: 70, dur: 0.5, vel: 0.78 },     // Bb4 (eighth)
        { t: 4.0, div: 'great', midi: 69, dur: 0.5, vel: 0.76 },     // A4 (quarter)
        { t: 4.5, div: 'great', midi: 67, dur: 0.5, vel: 0.78 },     // G4 (quarter)
        // Bar 3: bouncing figure
        { t: 5.0, div: 'great', midi: 70, dur: 0.5, vel: 0.76 },     // Bb4 (quarter)
        { t: 5.5, div: 'great', midi: 69, dur: 0.5, vel: 0.74 },     // A4 (quarter)
        { t: 6.0, div: 'great', midi: 67, dur: 0.75, vel: 0.78 },    // G4 (dotted quarter)
        { t: 6.75, div: 'great', midi: 66, dur: 0.25, vel: 0.72 },   // F#4 (eighth)
        // Bar 4: cadential figure
        { t: 7.0, div: 'great', midi: 69, dur: 0.5, vel: 0.76 },     // A4 (quarter)
        { t: 7.5, div: 'great', midi: 62, dur: 0.5, vel: 0.74 },     // D4 (quarter)
        // Bar 4.5-5: subject tail / free continuation
        { t: 8.0, div: 'great', midi: 63, dur: 0.5, vel: 0.72 },     // Eb4 (quarter)
        { t: 8.5, div: 'great', midi: 62, dur: 0.25, vel: 0.7 },     // D4 (eighth)
        { t: 8.75, div: 'great', midi: 60, dur: 0.25, vel: 0.68 },   // C4 (eighth)
        { t: 9.0, div: 'great', midi: 62, dur: 0.5, vel: 0.72 },     // D4 (quarter)
        { t: 9.5, div: 'great', midi: 67, dur: 0.5, vel: 0.75 },     // G4 (quarter up)

        // Bridge/codetta (soprano continues freely bars 5-6)
        { t: 10.0, div: 'great', midi: 66, dur: 0.5, vel: 0.72 },    // F#4
        { t: 10.5, div: 'great', midi: 67, dur: 0.5, vel: 0.74 },    // G4
        { t: 11.0, div: 'great', midi: 69, dur: 0.5, vel: 0.76 },    // A4
        { t: 11.5, div: 'great', midi: 70, dur: 0.5, vel: 0.74 },    // Bb4
        { t: 12.0, div: 'great', midi: 72, dur: 0.5, vel: 0.76 },    // C5
        { t: 12.5, div: 'great', midi: 70, dur: 0.5, vel: 0.74 },    // Bb4
        { t: 13.0, div: 'great', midi: 69, dur: 0.5, vel: 0.72 },    // A4
        { t: 13.5, div: 'great', midi: 67, dur: 0.5, vel: 0.74 },    // G4

        // ===== Voice 2 - Alto enters (bar 5/6) with answer on D =====
        // Tonal answer: D4 up to A4 (at the dominant)
        { t: 10.0, div: 'great', midi: 62, dur: 2.0, vel: 0.8 },     // D4 (half)
        { t: 12.0, div: 'great', midi: 69, dur: 1.5, vel: 0.82 },    // A4 (dotted quarter)
        { t: 13.5, div: 'great', midi: 65, dur: 0.5, vel: 0.78 },    // F4 (eighth)
        { t: 14.0, div: 'great', midi: 64, dur: 0.5, vel: 0.76 },    // E4 (quarter)  -- tonal answer: E not Eb
        { t: 14.5, div: 'great', midi: 62, dur: 0.5, vel: 0.78 },    // D4 (quarter)
        // Bouncing figure in answer
        { t: 15.0, div: 'great', midi: 65, dur: 0.5, vel: 0.76 },    // F4 (quarter)
        { t: 15.5, div: 'great', midi: 64, dur: 0.5, vel: 0.74 },    // E4 (quarter)
        { t: 16.0, div: 'great', midi: 62, dur: 0.75, vel: 0.78 },   // D4 (dotted quarter)
        { t: 16.75, div: 'great', midi: 61, dur: 0.25, vel: 0.72 },  // C#4 (eighth)
        // Cadential
        { t: 17.0, div: 'great', midi: 64, dur: 0.5, vel: 0.76 },    // E4 (quarter)
        { t: 17.5, div: 'great', midi: 57, dur: 0.5, vel: 0.74 },    // A3 (quarter, leaps down)
        { t: 18.0, div: 'great', midi: 58, dur: 0.5, vel: 0.72 },    // Bb3
        { t: 18.5, div: 'great', midi: 57, dur: 0.25, vel: 0.7 },    // A3
        { t: 18.75, div: 'great', midi: 55, dur: 0.25, vel: 0.68 },  // G3
        { t: 19.0, div: 'great', midi: 57, dur: 0.5, vel: 0.72 },    // A3
        { t: 19.5, div: 'great', midi: 62, dur: 0.5, vel: 0.75 },    // D4

        // Soprano countersubject during alto answer (bars 5-10)
        { t: 14.0, div: 'great', midi: 67, dur: 0.25, vel: 0.68 },   // G4
        { t: 14.25, div: 'great', midi: 69, dur: 0.25, vel: 0.66 },  // A4
        { t: 14.5, div: 'great', midi: 70, dur: 0.5, vel: 0.68 },    // Bb4
        { t: 15.0, div: 'great', midi: 69, dur: 0.5, vel: 0.66 },    // A4
        { t: 15.5, div: 'great', midi: 70, dur: 0.25, vel: 0.68 },   // Bb4
        { t: 15.75, div: 'great', midi: 72, dur: 0.25, vel: 0.66 },  // C5
        { t: 16.0, div: 'great', midi: 74, dur: 0.5, vel: 0.7 },     // D5
        { t: 16.5, div: 'great', midi: 72, dur: 0.5, vel: 0.68 },    // C5
        { t: 17.0, div: 'great', midi: 70, dur: 0.5, vel: 0.7 },     // Bb4
        { t: 17.5, div: 'great', midi: 69, dur: 0.5, vel: 0.68 },    // A4
        { t: 18.0, div: 'great', midi: 67, dur: 0.5, vel: 0.66 },    // G4
        { t: 18.5, div: 'great', midi: 66, dur: 0.5, vel: 0.68 },    // F#4
        { t: 19.0, div: 'great', midi: 67, dur: 1.0, vel: 0.7 },     // G4

        // ===== Episode (bars 10-12): free material bridging to third entry =====
        // Soprano episode
        { t: 20.0, div: 'great', midi: 72, dur: 0.5, vel: 0.72 },    // C5
        { t: 20.5, div: 'great', midi: 70, dur: 0.5, vel: 0.7 },     // Bb4
        { t: 21.0, div: 'great', midi: 69, dur: 0.5, vel: 0.72 },    // A4
        { t: 21.5, div: 'great', midi: 67, dur: 0.5, vel: 0.7 },     // G4
        { t: 22.0, div: 'great', midi: 65, dur: 0.5, vel: 0.68 },    // F4
        { t: 22.5, div: 'great', midi: 67, dur: 0.5, vel: 0.7 },     // G4
        { t: 23.0, div: 'great', midi: 69, dur: 0.5, vel: 0.72 },    // A4
        { t: 23.5, div: 'great', midi: 70, dur: 0.5, vel: 0.74 },    // Bb4

        // Alto episode
        { t: 20.0, div: 'great', midi: 62, dur: 0.5, vel: 0.65 },    // D4
        { t: 20.5, div: 'great', midi: 60, dur: 0.5, vel: 0.63 },    // C4
        { t: 21.0, div: 'great', midi: 58, dur: 0.5, vel: 0.65 },    // Bb3
        { t: 21.5, div: 'great', midi: 57, dur: 0.5, vel: 0.63 },    // A3
        { t: 22.0, div: 'great', midi: 55, dur: 0.5, vel: 0.61 },    // G3
        { t: 22.5, div: 'great', midi: 57, dur: 0.5, vel: 0.63 },    // A3
        { t: 23.0, div: 'great', midi: 58, dur: 0.5, vel: 0.65 },    // Bb3
        { t: 23.5, div: 'great', midi: 60, dur: 0.5, vel: 0.67 },    // C4

        // ===== Voice 3 - Tenor enters (bar 12) with subject on G =====
        { t: 24.0, div: 'great', midi: 55, dur: 2.0, vel: 0.8 },     // G3 (half)
        { t: 26.0, div: 'great', midi: 62, dur: 1.5, vel: 0.82 },    // D4 (dotted quarter)
        { t: 27.5, div: 'great', midi: 58, dur: 0.5, vel: 0.78 },    // Bb3 (eighth)
        { t: 28.0, div: 'great', midi: 57, dur: 0.5, vel: 0.76 },    // A3 (quarter)
        { t: 28.5, div: 'great', midi: 55, dur: 0.5, vel: 0.78 },    // G3 (quarter)
        // Bouncing
        { t: 29.0, div: 'great', midi: 58, dur: 0.5, vel: 0.76 },    // Bb3
        { t: 29.5, div: 'great', midi: 57, dur: 0.5, vel: 0.74 },    // A3
        { t: 30.0, div: 'great', midi: 55, dur: 0.75, vel: 0.78 },   // G3
        { t: 30.75, div: 'great', midi: 54, dur: 0.25, vel: 0.72 },  // F#3
        { t: 31.0, div: 'great', midi: 57, dur: 0.5, vel: 0.76 },    // A3
        { t: 31.5, div: 'great', midi: 50, dur: 0.5, vel: 0.74 },    // D3
        { t: 32.0, div: 'great', midi: 51, dur: 0.5, vel: 0.72 },    // Eb3
        { t: 32.5, div: 'great', midi: 50, dur: 0.25, vel: 0.7 },    // D3
        { t: 32.75, div: 'great', midi: 48, dur: 0.25, vel: 0.68 },  // C3
        { t: 33.0, div: 'great', midi: 50, dur: 0.5, vel: 0.72 },    // D3
        { t: 33.5, div: 'great', midi: 55, dur: 0.5, vel: 0.75 },    // G3

        // Soprano during tenor entry
        { t: 24.0, div: 'great', midi: 72, dur: 0.5, vel: 0.68 },    // C5
        { t: 24.5, div: 'great', midi: 74, dur: 0.5, vel: 0.7 },     // D5
        { t: 25.0, div: 'great', midi: 72, dur: 0.5, vel: 0.68 },    // C5
        { t: 25.5, div: 'great', midi: 70, dur: 0.5, vel: 0.7 },     // Bb4
        { t: 26.0, div: 'great', midi: 69, dur: 0.5, vel: 0.68 },    // A4
        { t: 26.5, div: 'great', midi: 70, dur: 0.5, vel: 0.7 },     // Bb4
        { t: 27.0, div: 'great', midi: 72, dur: 0.5, vel: 0.72 },    // C5
        { t: 27.5, div: 'great', midi: 74, dur: 0.5, vel: 0.7 },     // D5
        { t: 28.0, div: 'great', midi: 75, dur: 0.5, vel: 0.72 },    // Eb5
        { t: 28.5, div: 'great', midi: 74, dur: 0.5, vel: 0.7 },     // D5
        { t: 29.0, div: 'great', midi: 72, dur: 0.5, vel: 0.68 },    // C5
        { t: 29.5, div: 'great', midi: 70, dur: 0.5, vel: 0.7 },     // Bb4
        { t: 30.0, div: 'great', midi: 69, dur: 0.5, vel: 0.72 },    // A4
        { t: 30.5, div: 'great', midi: 70, dur: 0.5, vel: 0.7 },     // Bb4
        { t: 31.0, div: 'great', midi: 72, dur: 0.5, vel: 0.72 },    // C5
        { t: 31.5, div: 'great', midi: 70, dur: 0.5, vel: 0.7 },     // Bb4
        { t: 32.0, div: 'great', midi: 69, dur: 0.5, vel: 0.68 },    // A4
        { t: 32.5, div: 'great', midi: 67, dur: 0.5, vel: 0.7 },     // G4
        { t: 33.0, div: 'great', midi: 66, dur: 0.5, vel: 0.68 },    // F#4
        { t: 33.5, div: 'great', midi: 67, dur: 0.5, vel: 0.7 },     // G4

        // Alto during tenor entry
        { t: 24.0, div: 'great', midi: 62, dur: 0.5, vel: 0.62 },    // D4
        { t: 24.5, div: 'great', midi: 63, dur: 0.5, vel: 0.6 },     // Eb4
        { t: 25.0, div: 'great', midi: 62, dur: 0.5, vel: 0.62 },    // D4
        { t: 25.5, div: 'great', midi: 60, dur: 0.5, vel: 0.6 },     // C4
        { t: 26.0, div: 'great', midi: 62, dur: 0.5, vel: 0.62 },    // D4
        { t: 26.5, div: 'great', midi: 63, dur: 0.5, vel: 0.6 },     // Eb4
        { t: 27.0, div: 'great', midi: 65, dur: 0.5, vel: 0.62 },    // F4
        { t: 27.5, div: 'great', midi: 67, dur: 0.5, vel: 0.64 },    // G4
        { t: 28.0, div: 'great', midi: 67, dur: 0.5, vel: 0.62 },    // G4
        { t: 28.5, div: 'great', midi: 66, dur: 0.5, vel: 0.6 },     // F#4
        { t: 29.0, div: 'great', midi: 67, dur: 0.5, vel: 0.62 },    // G4
        { t: 29.5, div: 'great', midi: 65, dur: 0.5, vel: 0.6 },     // F4
        { t: 30.0, div: 'great', midi: 63, dur: 0.5, vel: 0.62 },    // Eb4
        { t: 30.5, div: 'great', midi: 62, dur: 0.5, vel: 0.6 },     // D4
        { t: 31.0, div: 'great', midi: 63, dur: 0.5, vel: 0.62 },    // Eb4
        { t: 31.5, div: 'great', midi: 65, dur: 0.5, vel: 0.6 },     // F4
        { t: 32.0, div: 'great', midi: 63, dur: 0.5, vel: 0.62 },    // Eb4
        { t: 32.5, div: 'great', midi: 62, dur: 0.5, vel: 0.6 },     // D4
        { t: 33.0, div: 'great', midi: 60, dur: 0.5, vel: 0.62 },    // C4
        { t: 33.5, div: 'great', midi: 62, dur: 0.5, vel: 0.6 },     // D4

        // ===== Voice 4 - Bass/Pedal enters (bar 17) with answer on D =====
        { t: 34.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.85 },    // D2 (half)
        { t: 36.0, div: 'pedal', midi: 45, dur: 1.5, vel: 0.87 },    // A2 (dotted quarter)
        { t: 37.5, div: 'pedal', midi: 41, dur: 0.5, vel: 0.82 },    // F2 (eighth)
        { t: 38.0, div: 'pedal', midi: 40, dur: 0.5, vel: 0.8 },     // E2 (quarter)
        { t: 38.5, div: 'pedal', midi: 38, dur: 0.5, vel: 0.82 },    // D2 (quarter)
        // Bouncing
        { t: 39.0, div: 'pedal', midi: 41, dur: 0.5, vel: 0.8 },     // F2
        { t: 39.5, div: 'pedal', midi: 40, dur: 0.5, vel: 0.78 },    // E2
        { t: 40.0, div: 'pedal', midi: 38, dur: 0.75, vel: 0.82 },   // D2
        { t: 40.75, div: 'pedal', midi: 37, dur: 0.25, vel: 0.76 },  // C#2
        { t: 41.0, div: 'pedal', midi: 40, dur: 0.5, vel: 0.8 },     // E2
        { t: 41.5, div: 'pedal', midi: 33, dur: 0.5, vel: 0.78 },    // A1
        { t: 42.0, div: 'pedal', midi: 34, dur: 0.5, vel: 0.76 },    // Bb1
        { t: 42.5, div: 'pedal', midi: 33, dur: 0.25, vel: 0.74 },   // A1
        { t: 42.75, div: 'pedal', midi: 31, dur: 0.25, vel: 0.72 },  // G1
        { t: 43.0, div: 'pedal', midi: 33, dur: 0.5, vel: 0.76 },    // A1
        { t: 43.5, div: 'pedal', midi: 38, dur: 0.5, vel: 0.8 },     // D2

        // Soprano during bass entry
        { t: 34.0, div: 'great', midi: 74, dur: 0.5, vel: 0.68 },    // D5
        { t: 34.5, div: 'great', midi: 72, dur: 0.5, vel: 0.66 },    // C5
        { t: 35.0, div: 'great', midi: 70, dur: 0.5, vel: 0.68 },    // Bb4
        { t: 35.5, div: 'great', midi: 69, dur: 0.5, vel: 0.66 },    // A4
        { t: 36.0, div: 'great', midi: 67, dur: 0.5, vel: 0.68 },    // G4
        { t: 36.5, div: 'great', midi: 69, dur: 0.5, vel: 0.66 },    // A4
        { t: 37.0, div: 'great', midi: 70, dur: 0.5, vel: 0.68 },    // Bb4
        { t: 37.5, div: 'great', midi: 72, dur: 0.5, vel: 0.7 },     // C5
        { t: 38.0, div: 'great', midi: 74, dur: 0.5, vel: 0.72 },    // D5
        { t: 38.5, div: 'great', midi: 72, dur: 0.5, vel: 0.7 },     // C5
        { t: 39.0, div: 'great', midi: 70, dur: 0.5, vel: 0.68 },    // Bb4
        { t: 39.5, div: 'great', midi: 69, dur: 0.5, vel: 0.7 },     // A4
        { t: 40.0, div: 'great', midi: 70, dur: 0.5, vel: 0.72 },    // Bb4
        { t: 40.5, div: 'great', midi: 72, dur: 0.5, vel: 0.7 },     // C5
        { t: 41.0, div: 'great', midi: 74, dur: 0.5, vel: 0.72 },    // D5
        { t: 41.5, div: 'great', midi: 72, dur: 0.5, vel: 0.7 },     // C5
        { t: 42.0, div: 'great', midi: 70, dur: 0.5, vel: 0.68 },    // Bb4
        { t: 42.5, div: 'great', midi: 69, dur: 0.5, vel: 0.7 },     // A4
        { t: 43.0, div: 'great', midi: 67, dur: 1.0, vel: 0.72 },    // G4

        // Alto during bass entry
        { t: 34.0, div: 'great', midi: 67, dur: 0.5, vel: 0.6 },     // G4
        { t: 34.5, div: 'great', midi: 65, dur: 0.5, vel: 0.58 },    // F4
        { t: 35.0, div: 'great', midi: 63, dur: 0.5, vel: 0.6 },     // Eb4
        { t: 35.5, div: 'great', midi: 62, dur: 0.5, vel: 0.58 },    // D4
        { t: 36.0, div: 'great', midi: 60, dur: 0.5, vel: 0.6 },     // C4
        { t: 36.5, div: 'great', midi: 62, dur: 0.5, vel: 0.58 },    // D4
        { t: 37.0, div: 'great', midi: 63, dur: 0.5, vel: 0.6 },     // Eb4
        { t: 37.5, div: 'great', midi: 65, dur: 0.5, vel: 0.62 },    // F4
        { t: 38.0, div: 'great', midi: 67, dur: 0.5, vel: 0.64 },    // G4
        { t: 38.5, div: 'great', midi: 65, dur: 0.5, vel: 0.62 },    // F4
        { t: 39.0, div: 'great', midi: 63, dur: 0.5, vel: 0.6 },     // Eb4
        { t: 39.5, div: 'great', midi: 62, dur: 0.5, vel: 0.62 },    // D4
        { t: 40.0, div: 'great', midi: 63, dur: 0.5, vel: 0.64 },    // Eb4
        { t: 40.5, div: 'great', midi: 65, dur: 0.5, vel: 0.62 },    // F4
        { t: 41.0, div: 'great', midi: 67, dur: 0.5, vel: 0.64 },    // G4
        { t: 41.5, div: 'great', midi: 65, dur: 0.5, vel: 0.62 },    // F4
        { t: 42.0, div: 'great', midi: 63, dur: 0.5, vel: 0.6 },     // Eb4
        { t: 42.5, div: 'great', midi: 62, dur: 0.5, vel: 0.62 },    // D4
        { t: 43.0, div: 'great', midi: 62, dur: 1.0, vel: 0.6 },     // D4

        // Tenor during bass entry
        { t: 34.0, div: 'great', midi: 55, dur: 0.5, vel: 0.58 },    // G3
        { t: 34.5, div: 'great', midi: 57, dur: 0.5, vel: 0.56 },    // A3
        { t: 35.0, div: 'great', midi: 55, dur: 0.5, vel: 0.58 },    // G3
        { t: 35.5, div: 'great', midi: 53, dur: 0.5, vel: 0.56 },    // F3
        { t: 36.0, div: 'great', midi: 55, dur: 0.5, vel: 0.58 },    // G3
        { t: 36.5, div: 'great', midi: 53, dur: 0.5, vel: 0.56 },    // F3
        { t: 37.0, div: 'great', midi: 55, dur: 0.5, vel: 0.58 },    // G3
        { t: 37.5, div: 'great', midi: 57, dur: 0.5, vel: 0.6 },     // A3
        { t: 38.0, div: 'great', midi: 58, dur: 0.5, vel: 0.62 },    // Bb3
        { t: 38.5, div: 'great', midi: 57, dur: 0.5, vel: 0.6 },     // A3
        { t: 39.0, div: 'great', midi: 55, dur: 0.5, vel: 0.58 },    // G3
        { t: 39.5, div: 'great', midi: 53, dur: 0.5, vel: 0.6 },     // F3
        { t: 40.0, div: 'great', midi: 55, dur: 0.5, vel: 0.62 },    // G3
        { t: 40.5, div: 'great', midi: 57, dur: 0.5, vel: 0.6 },     // A3
        { t: 41.0, div: 'great', midi: 58, dur: 0.5, vel: 0.62 },    // Bb3
        { t: 41.5, div: 'great', midi: 57, dur: 0.5, vel: 0.6 },     // A3
        { t: 42.0, div: 'great', midi: 55, dur: 0.5, vel: 0.58 },    // G3
        { t: 42.5, div: 'great', midi: 54, dur: 0.5, vel: 0.6 },     // F#3
        { t: 43.0, div: 'great', midi: 55, dur: 1.0, vel: 0.58 },    // G3

        // ===== End of Exposition (bar ~22) =====
        // All 4 voices have now stated the subject
        // Final cadential chord in G minor
        { t: 44.0, div: 'great', midi: 74, dur: 2.0, vel: 0.82 },    // D5
        { t: 44.0, div: 'great', midi: 70, dur: 2.0, vel: 0.78 },    // Bb4
        { t: 44.0, div: 'great', midi: 67, dur: 2.0, vel: 0.75 },    // G4
        { t: 44.0, div: 'great', midi: 55, dur: 2.0, vel: 0.72 },    // G3
        { t: 44.0, div: 'pedal', midi: 43, dur: 2.0, vel: 0.85 },    // G2
    ]
};
