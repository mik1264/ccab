// ============================================================
// French Romantic Organ Works Collection
// ============================================================
// Five masterworks of the French Romantic organ tradition
// MIDI reference: C2=36, C3=48, C4=60, D4=62, E4=64, F4=65, G4=67, A4=69, Bb4=70, B4=71, C5=72
// ============================================================

// ============================================================
// 1. Franck - Choral No. 3 in A minor, FWV 40
// ============================================================
// The crowning achievement of Franck's organ works (1890).
// Opens with a dramatic quasi-recitative: sweeping broken arpeggios
// in A minor (compared to Bach's Prelude in A minor) alternating
// with massive declamatory chords. The toccata figures use rapid
// 16th-note broken-chord patterns. A contrasting Adagio trumpet
// aria follows, leading to a triumphant A major conclusion.
// ============================================================

const PIECE_FRANCK_CHORAL3 = {
    title: "Choral No. 3 in A minor",
    composer: "César Franck",
    catalog: "FWV 40",
    key: "A minor",
    tempo: 80,
    tempoChanges: [
        { t: 0, tempo: 80, label: "Quasi allegro" },
        { t: 48, tempo: 56, label: "Adagio - Trumpet aria" },
        { t: 72, tempo: 84, label: "Maestoso - A major" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-flute4', 'sw-oboe8', 'sw-tremulant'],
        choir: ['ch-flute8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== SECTION 1: Quasi allegro - Toccata arpeggios in A minor =====
        // m.1: Sweeping A minor arpeggio, ff on full organ
        // RH broken-chord figuration: A-C-E ascending
        { t: 0,    div: 'great', midi: 57, dur: 0.12, vel: 0.92 },  // A3
        { t: 0.2,  div: 'great', midi: 60, dur: 0.12, vel: 0.90 },  // C4
        { t: 0.4,  div: 'great', midi: 64, dur: 0.12, vel: 0.92 },  // E4
        { t: 0.6,  div: 'great', midi: 69, dur: 0.12, vel: 0.94 },  // A4
        { t: 0.8,  div: 'great', midi: 72, dur: 0.12, vel: 0.95 },  // C5
        { t: 1.0,  div: 'great', midi: 76, dur: 0.12, vel: 0.96 },  // E5
        { t: 1.2,  div: 'great', midi: 81, dur: 0.15, vel: 0.97 },  // A5
        // Pedal A2
        { t: 0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.90 },

        // m.1 descending cascade
        { t: 1.5, div: 'great', midi: 76, dur: 0.12, vel: 0.93 },  // E5
        { t: 1.7, div: 'great', midi: 72, dur: 0.12, vel: 0.91 },  // C5
        { t: 1.9, div: 'great', midi: 69, dur: 0.12, vel: 0.89 },  // A4
        { t: 2.1, div: 'great', midi: 64, dur: 0.12, vel: 0.87 },  // E4
        { t: 2.3, div: 'great', midi: 60, dur: 0.12, vel: 0.85 },  // C4
        { t: 2.5, div: 'great', midi: 57, dur: 0.15, vel: 0.84 },  // A3

        // m.2: Declamatory chords - Am with added 7th
        { t: 3.0, div: 'great', midi: 57, dur: 1.2, vel: 0.95 },  // A3
        { t: 3.0, div: 'great', midi: 60, dur: 1.2, vel: 0.93 },  // C4
        { t: 3.0, div: 'great', midi: 64, dur: 1.2, vel: 0.93 },  // E4
        { t: 3.0, div: 'great', midi: 69, dur: 1.2, vel: 0.95 },  // A4
        { t: 3.0, div: 'pedal', midi: 45, dur: 1.5, vel: 0.92 },  // A2
        { t: 3.0, div: 'pedal', midi: 33, dur: 1.5, vel: 0.88 },  // A1

        // m.3: Second arpeggio sweep - Dm chord figuration
        { t: 4.5, div: 'great', midi: 62, dur: 0.12, vel: 0.92 },  // D4
        { t: 4.7, div: 'great', midi: 65, dur: 0.12, vel: 0.90 },  // F4
        { t: 4.9, div: 'great', midi: 69, dur: 0.12, vel: 0.92 },  // A4
        { t: 5.1, div: 'great', midi: 74, dur: 0.12, vel: 0.94 },  // D5
        { t: 5.3, div: 'great', midi: 77, dur: 0.12, vel: 0.95 },  // F5
        { t: 5.5, div: 'great', midi: 81, dur: 0.15, vel: 0.96 },  // A5
        { t: 4.5, div: 'pedal', midi: 38, dur: 2.0, vel: 0.90 },   // D2

        // descending Dm
        { t: 5.8, div: 'great', midi: 77, dur: 0.12, vel: 0.93 },  // F5
        { t: 6.0, div: 'great', midi: 74, dur: 0.12, vel: 0.91 },  // D5
        { t: 6.2, div: 'great', midi: 69, dur: 0.12, vel: 0.89 },  // A4
        { t: 6.4, div: 'great', midi: 65, dur: 0.12, vel: 0.87 },  // F4
        { t: 6.6, div: 'great', midi: 62, dur: 0.15, vel: 0.85 },  // D4

        // m.4: Declamatory Dm chord
        { t: 7.2, div: 'great', midi: 62, dur: 1.2, vel: 0.95 },  // D4
        { t: 7.2, div: 'great', midi: 65, dur: 1.2, vel: 0.93 },  // F4
        { t: 7.2, div: 'great', midi: 69, dur: 1.2, vel: 0.93 },  // A4
        { t: 7.2, div: 'great', midi: 74, dur: 1.2, vel: 0.95 },  // D5
        { t: 7.2, div: 'pedal', midi: 38, dur: 1.5, vel: 0.92 },  // D2

        // m.5: E major chord (dominant) - arpeggio sweep
        { t: 9.0, div: 'great', midi: 56, dur: 0.12, vel: 0.94 },  // Ab3/G#3
        { t: 9.2, div: 'great', midi: 59, dur: 0.12, vel: 0.92 },  // B3
        { t: 9.4, div: 'great', midi: 64, dur: 0.12, vel: 0.94 },  // E4
        { t: 9.6, div: 'great', midi: 68, dur: 0.12, vel: 0.95 },  // G#4
        { t: 9.8, div: 'great', midi: 71, dur: 0.12, vel: 0.96 },  // B4
        { t: 10.0, div: 'great', midi: 76, dur: 0.15, vel: 0.97 }, // E5
        { t: 9.0, div: 'pedal', midi: 40, dur: 2.0, vel: 0.90 },   // E2

        // descending E major
        { t: 10.3, div: 'great', midi: 71, dur: 0.12, vel: 0.93 }, // B4
        { t: 10.5, div: 'great', midi: 68, dur: 0.12, vel: 0.91 }, // G#4
        { t: 10.7, div: 'great', midi: 64, dur: 0.12, vel: 0.89 }, // E4
        { t: 10.9, div: 'great', midi: 59, dur: 0.15, vel: 0.87 }, // B3

        // m.6: Resolution chord E major
        { t: 11.4, div: 'great', midi: 52, dur: 1.5, vel: 0.95 },  // E3
        { t: 11.4, div: 'great', midi: 56, dur: 1.5, vel: 0.93 },  // G#3
        { t: 11.4, div: 'great', midi: 59, dur: 1.5, vel: 0.93 },  // B3
        { t: 11.4, div: 'great', midi: 64, dur: 1.5, vel: 0.95 },  // E4
        { t: 11.4, div: 'pedal', midi: 40, dur: 2.0, vel: 0.92 },  // E2

        // m.7-8: Contemplative homophonic theme - piano subito on swell
        { t: 13.5, div: 'swell', midi: 69, dur: 2.0, vel: 0.65 },  // A4 soprano
        { t: 13.5, div: 'swell', midi: 64, dur: 2.0, vel: 0.60 },  // E4 alto
        { t: 13.5, div: 'swell', midi: 60, dur: 2.0, vel: 0.60 },  // C4 tenor
        { t: 13.5, div: 'pedal', midi: 45, dur: 2.0, vel: 0.55 },  // A2

        { t: 15.5, div: 'swell', midi: 71, dur: 2.0, vel: 0.67 },  // B4
        { t: 15.5, div: 'swell', midi: 68, dur: 2.0, vel: 0.62 },  // G#4
        { t: 15.5, div: 'swell', midi: 64, dur: 2.0, vel: 0.62 },  // E4
        { t: 15.5, div: 'pedal', midi: 40, dur: 2.0, vel: 0.55 },  // E2

        // m.9-10: Chorale continues
        { t: 17.5, div: 'swell', midi: 72, dur: 2.5, vel: 0.70 },  // C5
        { t: 17.5, div: 'swell', midi: 67, dur: 2.5, vel: 0.65 },  // G4
        { t: 17.5, div: 'swell', midi: 64, dur: 2.5, vel: 0.65 },  // E4
        { t: 17.5, div: 'pedal', midi: 48, dur: 2.5, vel: 0.58 },  // C3

        { t: 20.0, div: 'swell', midi: 71, dur: 1.5, vel: 0.68 },  // B4
        { t: 20.0, div: 'swell', midi: 64, dur: 1.5, vel: 0.63 },  // E4
        { t: 20.0, div: 'swell', midi: 59, dur: 1.5, vel: 0.63 },  // B3
        { t: 20.0, div: 'pedal', midi: 40, dur: 1.5, vel: 0.55 },  // E2

        // m.11-12: Return of toccata figuration - Am arpeggio
        { t: 22.0, div: 'great', midi: 57, dur: 0.12, vel: 0.93 },  // A3
        { t: 22.15, div: 'great', midi: 60, dur: 0.12, vel: 0.91 }, // C4
        { t: 22.3, div: 'great', midi: 64, dur: 0.12, vel: 0.93 },  // E4
        { t: 22.45, div: 'great', midi: 69, dur: 0.12, vel: 0.95 }, // A4
        { t: 22.6, div: 'great', midi: 72, dur: 0.12, vel: 0.96 },  // C5
        { t: 22.75, div: 'great', midi: 76, dur: 0.12, vel: 0.97 }, // E5
        { t: 22.9, div: 'great', midi: 81, dur: 0.15, vel: 0.98 },  // A5
        { t: 22.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.90 },

        // descending with chromatic twist - F major arpeggio
        { t: 23.2, div: 'great', midi: 77, dur: 0.12, vel: 0.94 },  // F5
        { t: 23.4, div: 'great', midi: 72, dur: 0.12, vel: 0.92 },  // C5
        { t: 23.6, div: 'great', midi: 69, dur: 0.12, vel: 0.90 },  // A4
        { t: 23.8, div: 'great', midi: 65, dur: 0.12, vel: 0.88 },  // F4
        { t: 24.0, div: 'great', midi: 60, dur: 0.15, vel: 0.86 },  // C4

        // m.13: F major chord
        { t: 24.5, div: 'great', midi: 53, dur: 1.2, vel: 0.93 },  // F3
        { t: 24.5, div: 'great', midi: 57, dur: 1.2, vel: 0.91 },  // A3
        { t: 24.5, div: 'great', midi: 60, dur: 1.2, vel: 0.91 },  // C4
        { t: 24.5, div: 'great', midi: 65, dur: 1.2, vel: 0.93 },  // F4
        { t: 24.5, div: 'pedal', midi: 41, dur: 1.5, vel: 0.90 },  // F2

        // m.14: G major arpeggio (secondary dominant)
        { t: 26.0, div: 'great', midi: 55, dur: 0.12, vel: 0.93 },  // G3
        { t: 26.2, div: 'great', midi: 59, dur: 0.12, vel: 0.91 },  // B3
        { t: 26.4, div: 'great', midi: 62, dur: 0.12, vel: 0.93 },  // D4
        { t: 26.6, div: 'great', midi: 67, dur: 0.12, vel: 0.95 },  // G4
        { t: 26.8, div: 'great', midi: 71, dur: 0.12, vel: 0.96 },  // B4
        { t: 27.0, div: 'great', midi: 74, dur: 0.15, vel: 0.97 },  // D5
        { t: 26.0, div: 'pedal', midi: 43, dur: 2.0, vel: 0.90 },   // G2

        // m.15: Am7 arpeggio sweep
        { t: 28.0, div: 'great', midi: 57, dur: 0.12, vel: 0.94 },  // A3
        { t: 28.15, div: 'great', midi: 60, dur: 0.12, vel: 0.92 }, // C4
        { t: 28.3, div: 'great', midi: 64, dur: 0.12, vel: 0.94 },  // E4
        { t: 28.45, div: 'great', midi: 67, dur: 0.12, vel: 0.95 }, // G4
        { t: 28.6, div: 'great', midi: 72, dur: 0.12, vel: 0.96 },  // C5
        { t: 28.75, div: 'great', midi: 76, dur: 0.15, vel: 0.97 }, // E5
        { t: 28.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.90 },

        // m.16: Big E major chord resolving section
        { t: 30.0, div: 'great', midi: 52, dur: 2.0, vel: 0.96 },  // E3
        { t: 30.0, div: 'great', midi: 56, dur: 2.0, vel: 0.94 },  // G#3
        { t: 30.0, div: 'great', midi: 59, dur: 2.0, vel: 0.94 },  // B3
        { t: 30.0, div: 'great', midi: 64, dur: 2.0, vel: 0.96 },  // E4
        { t: 30.0, div: 'great', midi: 68, dur: 2.0, vel: 0.96 },  // G#4
        { t: 30.0, div: 'pedal', midi: 40, dur: 2.5, vel: 0.92 },  // E2
        { t: 30.0, div: 'pedal', midi: 28, dur: 2.5, vel: 0.88 },  // E1

        // ===== SECTION 2: Toccata continuation with building intensity =====
        // m.17-18: Am arpeggio with wider range
        { t: 33.0, div: 'great', midi: 45, dur: 0.12, vel: 0.90 },  // A2
        { t: 33.15, div: 'great', midi: 48, dur: 0.12, vel: 0.91 }, // C3
        { t: 33.3, div: 'great', midi: 52, dur: 0.12, vel: 0.92 },  // E3
        { t: 33.45, div: 'great', midi: 57, dur: 0.12, vel: 0.93 }, // A3
        { t: 33.6, div: 'great', midi: 60, dur: 0.12, vel: 0.94 },  // C4
        { t: 33.75, div: 'great', midi: 64, dur: 0.12, vel: 0.95 }, // E4
        { t: 33.9, div: 'great', midi: 69, dur: 0.12, vel: 0.96 },  // A4
        { t: 34.05, div: 'great', midi: 72, dur: 0.12, vel: 0.97 }, // C5
        { t: 34.2, div: 'great', midi: 76, dur: 0.15, vel: 0.98 },  // E5
        { t: 33.0, div: 'pedal', midi: 33, dur: 3.0, vel: 0.90 },   // A1

        // Descending cascade
        { t: 34.5, div: 'great', midi: 72, dur: 0.12, vel: 0.95 },  // C5
        { t: 34.65, div: 'great', midi: 69, dur: 0.12, vel: 0.93 }, // A4
        { t: 34.8, div: 'great', midi: 64, dur: 0.12, vel: 0.91 },  // E4
        { t: 34.95, div: 'great', midi: 60, dur: 0.12, vel: 0.89 }, // C4
        { t: 35.1, div: 'great', midi: 57, dur: 0.15, vel: 0.87 },  // A3

        // m.19: Bb major arpeggio (Neapolitan color)
        { t: 36.0, div: 'great', midi: 58, dur: 0.12, vel: 0.94 },  // Bb3
        { t: 36.2, div: 'great', midi: 62, dur: 0.12, vel: 0.92 },  // D4
        { t: 36.4, div: 'great', midi: 65, dur: 0.12, vel: 0.94 },  // F4
        { t: 36.6, div: 'great', midi: 70, dur: 0.12, vel: 0.95 },  // Bb4
        { t: 36.8, div: 'great', midi: 74, dur: 0.12, vel: 0.96 },  // D5
        { t: 37.0, div: 'great', midi: 77, dur: 0.15, vel: 0.97 },  // F5
        { t: 36.0, div: 'pedal', midi: 46, dur: 2.0, vel: 0.90 },   // Bb2

        // m.20: E7 chord (dominant) building tension
        { t: 38.0, div: 'great', midi: 52, dur: 0.12, vel: 0.95 },  // E3
        { t: 38.15, div: 'great', midi: 56, dur: 0.12, vel: 0.93 }, // G#3
        { t: 38.3, div: 'great', midi: 59, dur: 0.12, vel: 0.95 },  // B3
        { t: 38.45, div: 'great', midi: 62, dur: 0.12, vel: 0.96 }, // D4
        { t: 38.6, div: 'great', midi: 64, dur: 0.12, vel: 0.97 },  // E4
        { t: 38.75, div: 'great', midi: 68, dur: 0.12, vel: 0.98 }, // G#4
        { t: 38.9, div: 'great', midi: 71, dur: 0.15, vel: 0.98 },  // B4
        { t: 38.0, div: 'pedal', midi: 40, dur: 2.5, vel: 0.92 },   // E2

        // m.21-22: Massive Am chord resolution
        { t: 40.5, div: 'great', midi: 57, dur: 2.0, vel: 0.97 },  // A3
        { t: 40.5, div: 'great', midi: 60, dur: 2.0, vel: 0.95 },  // C4
        { t: 40.5, div: 'great', midi: 64, dur: 2.0, vel: 0.95 },  // E4
        { t: 40.5, div: 'great', midi: 69, dur: 2.0, vel: 0.97 },  // A4
        { t: 40.5, div: 'swell', midi: 72, dur: 2.0, vel: 0.90 },  // C5
        { t: 40.5, div: 'swell', midi: 76, dur: 2.0, vel: 0.90 },  // E5
        { t: 40.5, div: 'pedal', midi: 45, dur: 2.5, vel: 0.93 },  // A2
        { t: 40.5, div: 'pedal', midi: 33, dur: 2.5, vel: 0.88 },  // A1

        // m.23-24: Transition - chromatic descent on swell
        { t: 43.0, div: 'swell', midi: 72, dur: 1.0, vel: 0.75 },  // C5
        { t: 43.0, div: 'swell', midi: 68, dur: 1.0, vel: 0.70 },  // Ab4
        { t: 43.0, div: 'swell', midi: 64, dur: 1.0, vel: 0.70 },  // E4
        { t: 44.0, div: 'swell', midi: 71, dur: 1.0, vel: 0.73 },  // B4
        { t: 44.0, div: 'swell', midi: 67, dur: 1.0, vel: 0.68 },  // G4
        { t: 44.0, div: 'swell', midi: 62, dur: 1.0, vel: 0.68 },  // D4
        { t: 45.0, div: 'swell', midi: 70, dur: 1.0, vel: 0.71 },  // Bb4
        { t: 45.0, div: 'swell', midi: 65, dur: 1.0, vel: 0.66 },  // F4
        { t: 45.0, div: 'swell', midi: 62, dur: 1.0, vel: 0.66 },  // D4
        { t: 46.0, div: 'swell', midi: 69, dur: 1.5, vel: 0.74 },  // A4
        { t: 46.0, div: 'swell', midi: 64, dur: 1.5, vel: 0.69 },  // E4
        { t: 46.0, div: 'swell', midi: 60, dur: 1.5, vel: 0.69 },  // C4
        { t: 43.0, div: 'pedal', midi: 45, dur: 1.5, vel: 0.60 },  // A2
        { t: 44.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.58 },  // G2
        { t: 46.0, div: 'pedal', midi: 41, dur: 1.5, vel: 0.56 },  // F2

        // ===== SECTION 3: Adagio - Trumpet aria on swell (m.25+) =====
        // Expressive solo melody on oboe 8' with tremulant
        { t: 48.0, div: 'swell', midi: 69, dur: 2.5, vel: 0.78 },  // A4
        { t: 48.0, div: 'swell', midi: 60, dur: 2.5, vel: 0.55 },  // C4 (accompaniment)
        { t: 48.0, div: 'swell', midi: 64, dur: 2.5, vel: 0.55 },  // E4
        { t: 48.0, div: 'pedal', midi: 45, dur: 3.0, vel: 0.50 },  // A2

        { t: 50.5, div: 'swell', midi: 71, dur: 1.5, vel: 0.80 },  // B4
        { t: 50.5, div: 'swell', midi: 64, dur: 1.5, vel: 0.55 },  // E4
        { t: 50.5, div: 'swell', midi: 59, dur: 1.5, vel: 0.55 },  // B3

        { t: 52.0, div: 'swell', midi: 72, dur: 3.0, vel: 0.82 },  // C5
        { t: 52.0, div: 'swell', midi: 67, dur: 3.0, vel: 0.58 },  // G4
        { t: 52.0, div: 'swell', midi: 60, dur: 3.0, vel: 0.58 },  // C4
        { t: 52.0, div: 'pedal', midi: 48, dur: 3.5, vel: 0.50 },  // C3

        { t: 55.0, div: 'swell', midi: 71, dur: 1.5, vel: 0.80 },  // B4
        { t: 55.0, div: 'swell', midi: 68, dur: 1.5, vel: 0.56 },  // Ab4
        { t: 55.0, div: 'swell', midi: 64, dur: 1.5, vel: 0.56 },  // E4
        { t: 55.0, div: 'pedal', midi: 40, dur: 2.0, vel: 0.50 },  // E2

        { t: 56.5, div: 'swell', midi: 69, dur: 3.0, vel: 0.78 },  // A4
        { t: 56.5, div: 'swell', midi: 64, dur: 3.0, vel: 0.55 },  // E4
        { t: 56.5, div: 'swell', midi: 57, dur: 3.0, vel: 0.55 },  // A3
        { t: 56.5, div: 'pedal', midi: 45, dur: 3.5, vel: 0.50 },  // A2

        // Aria phrase 2 - more chromatic
        { t: 60.0, div: 'swell', midi: 72, dur: 2.0, vel: 0.82 },  // C5
        { t: 60.0, div: 'swell', midi: 65, dur: 2.0, vel: 0.58 },  // F4
        { t: 60.0, div: 'swell', midi: 60, dur: 2.0, vel: 0.58 },  // C4
        { t: 60.0, div: 'pedal', midi: 41, dur: 2.5, vel: 0.52 },  // F2

        { t: 62.0, div: 'swell', midi: 74, dur: 1.5, vel: 0.84 },  // D5
        { t: 62.0, div: 'swell', midi: 69, dur: 1.5, vel: 0.60 },  // A4
        { t: 62.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.60 },  // F4
        { t: 62.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.52 },  // D2

        { t: 63.5, div: 'swell', midi: 76, dur: 2.5, vel: 0.86 },  // E5
        { t: 63.5, div: 'swell', midi: 72, dur: 2.5, vel: 0.62 },  // C5
        { t: 63.5, div: 'swell', midi: 69, dur: 2.5, vel: 0.62 },  // A4
        { t: 63.5, div: 'pedal', midi: 45, dur: 3.0, vel: 0.54 },  // A2

        { t: 66.0, div: 'swell', midi: 74, dur: 1.5, vel: 0.83 },  // D5
        { t: 66.0, div: 'swell', midi: 68, dur: 1.5, vel: 0.59 },  // Ab4
        { t: 66.0, div: 'swell', midi: 62, dur: 1.5, vel: 0.59 },  // D4

        { t: 67.5, div: 'swell', midi: 72, dur: 2.0, vel: 0.81 },  // C5
        { t: 67.5, div: 'swell', midi: 67, dur: 2.0, vel: 0.57 },  // G4
        { t: 67.5, div: 'swell', midi: 64, dur: 2.0, vel: 0.57 },  // E4
        { t: 67.5, div: 'pedal', midi: 48, dur: 2.5, vel: 0.52 },  // C3

        { t: 69.5, div: 'swell', midi: 71, dur: 2.0, vel: 0.80 },  // B4
        { t: 69.5, div: 'swell', midi: 64, dur: 2.0, vel: 0.56 },  // E4
        { t: 69.5, div: 'swell', midi: 56, dur: 2.0, vel: 0.56 },  // G#3
        { t: 69.5, div: 'pedal', midi: 40, dur: 2.5, vel: 0.52 },  // E2

        // ===== SECTION 4: Maestoso - Triumphant A major conclusion =====
        // Full organ, ff, broad chords moving to A major
        { t: 72.0, div: 'great', midi: 57, dur: 0.12, vel: 0.96 },  // A3
        { t: 72.15, div: 'great', midi: 61, dur: 0.12, vel: 0.94 }, // C#4
        { t: 72.3, div: 'great', midi: 64, dur: 0.12, vel: 0.96 },  // E4
        { t: 72.45, div: 'great', midi: 69, dur: 0.12, vel: 0.97 }, // A4
        { t: 72.6, div: 'great', midi: 73, dur: 0.12, vel: 0.98 },  // C#5
        { t: 72.75, div: 'great', midi: 76, dur: 0.15, vel: 0.99 }, // E5
        { t: 72.0, div: 'pedal', midi: 45, dur: 3.0, vel: 0.95 },  // A2
        { t: 72.0, div: 'pedal', midi: 33, dur: 3.0, vel: 0.90 },  // A1

        // A major chord - fff
        { t: 73.5, div: 'great', midi: 57, dur: 3.0, vel: 0.98 },  // A3
        { t: 73.5, div: 'great', midi: 61, dur: 3.0, vel: 0.96 },  // C#4
        { t: 73.5, div: 'great', midi: 64, dur: 3.0, vel: 0.96 },  // E4
        { t: 73.5, div: 'great', midi: 69, dur: 3.0, vel: 0.98 },  // A4
        { t: 73.5, div: 'swell', midi: 73, dur: 3.0, vel: 0.92 },  // C#5
        { t: 73.5, div: 'swell', midi: 76, dur: 3.0, vel: 0.92 },  // E5
        { t: 73.5, div: 'swell', midi: 81, dur: 3.0, vel: 0.92 },  // A5

        // D major chord
        { t: 77.0, div: 'great', midi: 62, dur: 2.5, vel: 0.97 },  // D4
        { t: 77.0, div: 'great', midi: 66, dur: 2.5, vel: 0.95 },  // F#4
        { t: 77.0, div: 'great', midi: 69, dur: 2.5, vel: 0.95 },  // A4
        { t: 77.0, div: 'great', midi: 74, dur: 2.5, vel: 0.97 },  // D5
        { t: 77.0, div: 'swell', midi: 78, dur: 2.5, vel: 0.91 },  // F#5
        { t: 77.0, div: 'pedal', midi: 38, dur: 3.0, vel: 0.93 },  // D2

        // E major (dominant) building
        { t: 80.0, div: 'great', midi: 64, dur: 2.0, vel: 0.97 },  // E4
        { t: 80.0, div: 'great', midi: 68, dur: 2.0, vel: 0.95 },  // G#4
        { t: 80.0, div: 'great', midi: 71, dur: 2.0, vel: 0.95 },  // B4
        { t: 80.0, div: 'great', midi: 76, dur: 2.0, vel: 0.97 },  // E5
        { t: 80.0, div: 'swell', midi: 80, dur: 2.0, vel: 0.91 },  // G#5
        { t: 80.0, div: 'pedal', midi: 40, dur: 2.5, vel: 0.93 },  // E2

        // Final A major - massive resolution
        { t: 82.5, div: 'great', midi: 57, dur: 4.0, vel: 0.99 },  // A3
        { t: 82.5, div: 'great', midi: 61, dur: 4.0, vel: 0.97 },  // C#4
        { t: 82.5, div: 'great', midi: 64, dur: 4.0, vel: 0.97 },  // E4
        { t: 82.5, div: 'great', midi: 69, dur: 4.0, vel: 0.99 },  // A4
        { t: 82.5, div: 'swell', midi: 73, dur: 4.0, vel: 0.93 },  // C#5
        { t: 82.5, div: 'swell', midi: 76, dur: 4.0, vel: 0.93 },  // E5
        { t: 82.5, div: 'swell', midi: 81, dur: 4.0, vel: 0.93 },  // A5
        { t: 82.5, div: 'pedal', midi: 45, dur: 5.0, vel: 0.95 },  // A2
        { t: 82.5, div: 'pedal', midi: 33, dur: 5.0, vel: 0.92 },  // A1
    ]
};

// ============================================================
// 2. Franck - Pièce Héroïque in B minor, FWV 37
// ============================================================
// Third of the Trois Pièces pour Grand Orgue (1878), composed for
// the inauguration of the Cavaillé-Coll organ at the Trocadéro.
// Allegro maestoso in 3/4 time. A sinister B minor theme with
// dotted rhythms heard in the tenor, alternating with soft
// homophonic episodes. The middle section features a chorale-like
// theme in B major. Returns to B minor for a triumphant coda
// combining both themes.
// ============================================================

const PIECE_FRANCK_HEROIQUE = {
    title: "Pièce Héroïque",
    composer: "César Franck",
    catalog: "FWV 37",
    key: "B minor",
    tempo: 88,
    tempoChanges: [
        { t: 0, tempo: 88, label: "Allegro maestoso" },
        { t: 40, tempo: 60, label: "Lento - Chorale" },
        { t: 60, tempo: 92, label: "Poco animato - Coda" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-clarinet8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ===== SECTION 1: Allegro maestoso - Heroic B minor theme =====
        // m.1-2: Main theme in tenor/bass, dotted rhythm, ff
        // Theme: B-F#-B with dotted figures, accompanied by repeated chords
        { t: 0, div: 'great', midi: 59, dur: 1.5, vel: 0.92 },    // B3 (dotted half)
        { t: 0, div: 'great', midi: 54, dur: 1.5, vel: 0.88 },    // F#3
        { t: 0, div: 'pedal', midi: 47, dur: 1.5, vel: 0.90 },    // B2
        { t: 0, div: 'pedal', midi: 35, dur: 1.5, vel: 0.85 },    // B1
        // Repeated chords above
        { t: 0, div: 'swell', midi: 66, dur: 0.5, vel: 0.75 },    // F#4
        { t: 0, div: 'swell', midi: 71, dur: 0.5, vel: 0.75 },    // B4
        { t: 0, div: 'swell', midi: 74, dur: 0.5, vel: 0.75 },    // D5
        { t: 0.75, div: 'swell', midi: 66, dur: 0.5, vel: 0.73 }, // F#4
        { t: 0.75, div: 'swell', midi: 71, dur: 0.5, vel: 0.73 }, // B4
        { t: 0.75, div: 'swell', midi: 74, dur: 0.5, vel: 0.73 }, // D5

        // m.2: Theme continues - dotted rhythm figure
        { t: 1.5, div: 'great', midi: 62, dur: 1.12, vel: 0.93 },  // D4 (dotted quarter)
        { t: 1.5, div: 'great', midi: 59, dur: 1.12, vel: 0.89 },  // B3
        { t: 2.62, div: 'great', midi: 61, dur: 0.38, vel: 0.90 }, // C#4 (eighth)
        { t: 1.5, div: 'pedal', midi: 47, dur: 1.5, vel: 0.88 },   // B2
        { t: 1.5, div: 'swell', midi: 66, dur: 0.5, vel: 0.74 },  // F#4
        { t: 1.5, div: 'swell', midi: 71, dur: 0.5, vel: 0.74 },  // B4
        { t: 1.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.74 },  // D5
        { t: 2.25, div: 'swell', midi: 66, dur: 0.5, vel: 0.72 }, // F#4
        { t: 2.25, div: 'swell', midi: 71, dur: 0.5, vel: 0.72 }, // B4
        { t: 2.25, div: 'swell', midi: 74, dur: 0.5, vel: 0.72 }, // D5

        // m.3-4: Theme ascends
        { t: 3.0, div: 'great', midi: 62, dur: 1.5, vel: 0.94 },  // D4
        { t: 3.0, div: 'great', midi: 66, dur: 1.5, vel: 0.92 },  // F#4
        { t: 3.0, div: 'pedal', midi: 38, dur: 1.5, vel: 0.90 },  // D2
        { t: 3.0, div: 'swell', midi: 69, dur: 0.5, vel: 0.76 },  // A4
        { t: 3.0, div: 'swell', midi: 74, dur: 0.5, vel: 0.76 },  // D5
        { t: 3.0, div: 'swell', midi: 78, dur: 0.5, vel: 0.76 },  // F#5
        { t: 3.75, div: 'swell', midi: 69, dur: 0.5, vel: 0.74 }, // A4
        { t: 3.75, div: 'swell', midi: 74, dur: 0.5, vel: 0.74 }, // D5
        { t: 3.75, div: 'swell', midi: 78, dur: 0.5, vel: 0.74 }, // F#5

        // m.4: Dotted rhythm on E minor
        { t: 4.5, div: 'great', midi: 64, dur: 1.12, vel: 0.94 },  // E4
        { t: 4.5, div: 'great', midi: 67, dur: 1.12, vel: 0.92 },  // G4
        { t: 5.62, div: 'great', midi: 66, dur: 0.38, vel: 0.91 }, // F#4
        { t: 4.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.88 },   // E2
        { t: 4.5, div: 'swell', midi: 71, dur: 0.5, vel: 0.75 },  // B4
        { t: 4.5, div: 'swell', midi: 76, dur: 0.5, vel: 0.75 },  // E5
        { t: 5.25, div: 'swell', midi: 71, dur: 0.5, vel: 0.73 }, // B4
        { t: 5.25, div: 'swell', midi: 76, dur: 0.5, vel: 0.73 }, // E5

        // m.5-6: Climax of first phrase - F# major (dominant)
        { t: 6.0, div: 'great', midi: 66, dur: 1.5, vel: 0.96 },  // F#4
        { t: 6.0, div: 'great', midi: 61, dur: 1.5, vel: 0.94 },  // C#4
        { t: 6.0, div: 'great', midi: 54, dur: 1.5, vel: 0.92 },  // F#3
        { t: 6.0, div: 'pedal', midi: 42, dur: 1.5, vel: 0.92 },  // F#2
        { t: 6.0, div: 'swell', midi: 70, dur: 0.5, vel: 0.78 },  // A#4
        { t: 6.0, div: 'swell', midi: 73, dur: 0.5, vel: 0.78 },  // C#5
        { t: 6.0, div: 'swell', midi: 78, dur: 0.5, vel: 0.78 },  // F#5
        { t: 6.75, div: 'swell', midi: 70, dur: 0.5, vel: 0.76 }, // A#4
        { t: 6.75, div: 'swell', midi: 73, dur: 0.5, vel: 0.76 }, // C#5
        { t: 6.75, div: 'swell', midi: 78, dur: 0.5, vel: 0.76 }, // F#5

        // m.6: Resolution back to B minor
        { t: 7.5, div: 'great', midi: 66, dur: 1.12, vel: 0.95 },  // F#4
        { t: 7.5, div: 'great', midi: 59, dur: 1.12, vel: 0.93 },  // B3
        { t: 8.62, div: 'great', midi: 64, dur: 0.38, vel: 0.92 }, // E4
        { t: 7.5, div: 'pedal', midi: 47, dur: 1.5, vel: 0.90 },   // B2

        // m.7-8: Second statement of theme - louder, with upper voices
        { t: 9.0, div: 'great', midi: 71, dur: 1.5, vel: 0.96 },  // B4
        { t: 9.0, div: 'great', midi: 66, dur: 1.5, vel: 0.94 },  // F#4
        { t: 9.0, div: 'great', midi: 59, dur: 1.5, vel: 0.92 },  // B3
        { t: 9.0, div: 'pedal', midi: 47, dur: 1.5, vel: 0.92 },  // B2
        { t: 9.0, div: 'pedal', midi: 35, dur: 1.5, vel: 0.88 },  // B1
        { t: 9.0, div: 'swell', midi: 74, dur: 0.5, vel: 0.80 },  // D5
        { t: 9.0, div: 'swell', midi: 78, dur: 0.5, vel: 0.80 },  // F#5
        { t: 9.75, div: 'swell', midi: 74, dur: 0.5, vel: 0.78 }, // D5
        { t: 9.75, div: 'swell', midi: 78, dur: 0.5, vel: 0.78 }, // F#5

        { t: 10.5, div: 'great', midi: 74, dur: 1.12, vel: 0.97 }, // D5
        { t: 10.5, div: 'great', midi: 71, dur: 1.12, vel: 0.95 }, // B4
        { t: 11.62, div: 'great', midi: 73, dur: 0.38, vel: 0.95 },// C#5
        { t: 10.5, div: 'pedal', midi: 47, dur: 1.5, vel: 0.90 },  // B2

        // m.9: Theme continues ascending to G
        { t: 12.0, div: 'great', midi: 74, dur: 1.5, vel: 0.97 },  // D5
        { t: 12.0, div: 'great', midi: 78, dur: 1.5, vel: 0.96 },  // F#5
        { t: 12.0, div: 'pedal', midi: 38, dur: 1.5, vel: 0.90 },  // D2

        { t: 13.5, div: 'great', midi: 76, dur: 1.12, vel: 0.97 }, // E5
        { t: 13.5, div: 'great', midi: 79, dur: 1.12, vel: 0.96 }, // G5
        { t: 14.62, div: 'great', midi: 78, dur: 0.38, vel: 0.95 },// F#5
        { t: 13.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.90 },  // E2

        // m.10-11: Climax on F# major - big cadence
        { t: 15.0, div: 'great', midi: 78, dur: 2.0, vel: 0.98 },  // F#5
        { t: 15.0, div: 'great', midi: 73, dur: 2.0, vel: 0.96 },  // C#5
        { t: 15.0, div: 'great', midi: 70, dur: 2.0, vel: 0.96 },  // A#4
        { t: 15.0, div: 'great', midi: 66, dur: 2.0, vel: 0.94 },  // F#4
        { t: 15.0, div: 'pedal', midi: 42, dur: 2.5, vel: 0.93 },  // F#2
        { t: 15.0, div: 'pedal', midi: 30, dur: 2.5, vel: 0.88 },  // F#1

        // m.12: B minor resolution
        { t: 17.5, div: 'great', midi: 71, dur: 2.0, vel: 0.96 },  // B4
        { t: 17.5, div: 'great', midi: 66, dur: 2.0, vel: 0.94 },  // F#4
        { t: 17.5, div: 'great', midi: 62, dur: 2.0, vel: 0.94 },  // D4
        { t: 17.5, div: 'great', midi: 59, dur: 2.0, vel: 0.92 },  // B3
        { t: 17.5, div: 'pedal', midi: 47, dur: 2.5, vel: 0.92 },  // B2
        { t: 17.5, div: 'pedal', midi: 35, dur: 2.5, vel: 0.88 },  // B1

        // m.13-16: Soft answering episode on swell (p)
        { t: 20.0, div: 'swell', midi: 71, dur: 2.0, vel: 0.62 },  // B4
        { t: 20.0, div: 'swell', midi: 66, dur: 2.0, vel: 0.58 },  // F#4
        { t: 20.0, div: 'swell', midi: 62, dur: 2.0, vel: 0.58 },  // D4
        { t: 20.0, div: 'pedal', midi: 47, dur: 2.5, vel: 0.52 },  // B2

        { t: 22.0, div: 'swell', midi: 73, dur: 2.0, vel: 0.64 },  // C#5
        { t: 22.0, div: 'swell', midi: 69, dur: 2.0, vel: 0.60 },  // A4
        { t: 22.0, div: 'swell', midi: 64, dur: 2.0, vel: 0.60 },  // E4
        { t: 22.0, div: 'pedal', midi: 45, dur: 2.5, vel: 0.52 },  // A2

        { t: 24.0, div: 'swell', midi: 74, dur: 2.0, vel: 0.66 },  // D5
        { t: 24.0, div: 'swell', midi: 69, dur: 2.0, vel: 0.62 },  // A4
        { t: 24.0, div: 'swell', midi: 66, dur: 2.0, vel: 0.62 },  // F#4
        { t: 24.0, div: 'pedal', midi: 38, dur: 2.5, vel: 0.52 },  // D2

        { t: 26.0, div: 'swell', midi: 73, dur: 1.5, vel: 0.64 },  // C#5
        { t: 26.0, div: 'swell', midi: 66, dur: 1.5, vel: 0.60 },  // F#4
        { t: 26.0, div: 'swell', midi: 61, dur: 1.5, vel: 0.60 },  // C#4
        { t: 26.0, div: 'pedal', midi: 42, dur: 2.0, vel: 0.52 },  // F#2

        // m.17-20: Return of heroic theme, building
        { t: 28.0, div: 'great', midi: 59, dur: 1.5, vel: 0.94 },  // B3
        { t: 28.0, div: 'great', midi: 54, dur: 1.5, vel: 0.90 },  // F#3
        { t: 28.0, div: 'pedal', midi: 47, dur: 1.5, vel: 0.92 },  // B2
        { t: 28.0, div: 'swell', midi: 71, dur: 0.5, vel: 0.78 },  // B4
        { t: 28.0, div: 'swell', midi: 74, dur: 0.5, vel: 0.78 },  // D5
        { t: 28.75, div: 'swell', midi: 71, dur: 0.5, vel: 0.76 }, // B4
        { t: 28.75, div: 'swell', midi: 74, dur: 0.5, vel: 0.76 }, // D5

        { t: 29.5, div: 'great', midi: 62, dur: 1.12, vel: 0.95 }, // D4
        { t: 29.5, div: 'great', midi: 59, dur: 1.12, vel: 0.93 }, // B3
        { t: 30.62, div: 'great', midi: 61, dur: 0.38, vel: 0.93 },// C#4
        { t: 29.5, div: 'pedal', midi: 47, dur: 1.5, vel: 0.90 },  // B2

        // Building to climax through G major
        { t: 31.0, div: 'great', midi: 67, dur: 1.5, vel: 0.96 },  // G4
        { t: 31.0, div: 'great', midi: 62, dur: 1.5, vel: 0.94 },  // D4
        { t: 31.0, div: 'great', midi: 59, dur: 1.5, vel: 0.92 },  // B3
        { t: 31.0, div: 'pedal', midi: 43, dur: 1.5, vel: 0.90 },  // G2
        { t: 31.0, div: 'swell', midi: 74, dur: 0.5, vel: 0.80 },  // D5
        { t: 31.0, div: 'swell', midi: 79, dur: 0.5, vel: 0.80 },  // G5
        { t: 31.75, div: 'swell', midi: 74, dur: 0.5, vel: 0.78 }, // D5
        { t: 31.75, div: 'swell', midi: 79, dur: 0.5, vel: 0.78 }, // G5

        // A major (leading to D major)
        { t: 32.5, div: 'great', midi: 69, dur: 1.12, vel: 0.96 }, // A4
        { t: 32.5, div: 'great', midi: 64, dur: 1.12, vel: 0.94 }, // E4
        { t: 32.5, div: 'great', midi: 61, dur: 1.12, vel: 0.92 }, // C#4
        { t: 33.62, div: 'great', midi: 66, dur: 0.38, vel: 0.94 },// F#4
        { t: 32.5, div: 'pedal', midi: 45, dur: 1.5, vel: 0.90 },  // A2

        // D major chord
        { t: 34.0, div: 'great', midi: 74, dur: 1.5, vel: 0.97 },  // D5
        { t: 34.0, div: 'great', midi: 69, dur: 1.5, vel: 0.95 },  // A4
        { t: 34.0, div: 'great', midi: 66, dur: 1.5, vel: 0.95 },  // F#4
        { t: 34.0, div: 'great', midi: 62, dur: 1.5, vel: 0.93 },  // D4
        { t: 34.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.92 },  // D2

        // E minor -> F# dominant 7th
        { t: 35.5, div: 'great', midi: 71, dur: 1.5, vel: 0.96 },  // B4
        { t: 35.5, div: 'great', midi: 67, dur: 1.5, vel: 0.94 },  // G4
        { t: 35.5, div: 'great', midi: 64, dur: 1.5, vel: 0.92 },  // E4
        { t: 35.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.90 },  // E2

        { t: 37.0, div: 'great', midi: 70, dur: 1.5, vel: 0.97 },  // A#4
        { t: 37.0, div: 'great', midi: 66, dur: 1.5, vel: 0.95 },  // F#4
        { t: 37.0, div: 'great', midi: 61, dur: 1.5, vel: 0.93 },  // C#4
        { t: 37.0, div: 'pedal', midi: 42, dur: 2.0, vel: 0.92 },  // F#2

        // B minor - half cadence resolution
        { t: 38.5, div: 'great', midi: 71, dur: 1.5, vel: 0.95 },  // B4
        { t: 38.5, div: 'great', midi: 66, dur: 1.5, vel: 0.93 },  // F#4
        { t: 38.5, div: 'great', midi: 62, dur: 1.5, vel: 0.91 },  // D4
        { t: 38.5, div: 'great', midi: 59, dur: 1.5, vel: 0.89 },  // B3
        { t: 38.5, div: 'pedal', midi: 47, dur: 2.0, vel: 0.92 },  // B2

        // ===== SECTION 2: Lento - Chorale in B major (swell, pp) =====
        { t: 40.0, div: 'swell', midi: 71, dur: 3.0, vel: 0.55 },  // B4
        { t: 40.0, div: 'swell', midi: 68, dur: 3.0, vel: 0.50 },  // G#4
        { t: 40.0, div: 'swell', midi: 63, dur: 3.0, vel: 0.50 },  // Eb4/D#4
        { t: 40.0, div: 'swell', midi: 59, dur: 3.0, vel: 0.48 },  // B3
        { t: 40.0, div: 'pedal', midi: 47, dur: 3.5, vel: 0.42 },  // B2

        { t: 43.0, div: 'swell', midi: 73, dur: 2.0, vel: 0.57 },  // C#5
        { t: 43.0, div: 'swell', midi: 68, dur: 2.0, vel: 0.52 },  // G#4
        { t: 43.0, div: 'swell', midi: 64, dur: 2.0, vel: 0.52 },  // E4
        { t: 43.0, div: 'pedal', midi: 44, dur: 2.5, vel: 0.42 },  // G#2

        { t: 45.0, div: 'swell', midi: 75, dur: 2.5, vel: 0.59 },  // D#5
        { t: 45.0, div: 'swell', midi: 71, dur: 2.5, vel: 0.54 },  // B4
        { t: 45.0, div: 'swell', midi: 66, dur: 2.5, vel: 0.54 },  // F#4
        { t: 45.0, div: 'pedal', midi: 47, dur: 3.0, vel: 0.42 },  // B2

        { t: 47.5, div: 'swell', midi: 73, dur: 2.0, vel: 0.57 },  // C#5
        { t: 47.5, div: 'swell', midi: 69, dur: 2.0, vel: 0.52 },  // A4
        { t: 47.5, div: 'swell', midi: 64, dur: 2.0, vel: 0.52 },  // E4
        { t: 47.5, div: 'pedal', midi: 45, dur: 2.5, vel: 0.42 },  // A2

        { t: 49.5, div: 'swell', midi: 71, dur: 3.0, vel: 0.55 },  // B4
        { t: 49.5, div: 'swell', midi: 66, dur: 3.0, vel: 0.50 },  // F#4
        { t: 49.5, div: 'swell', midi: 63, dur: 3.0, vel: 0.50 },  // D#4
        { t: 49.5, div: 'pedal', midi: 47, dur: 3.5, vel: 0.42 },  // B2

        // Chorale phrase 2 - moving through E major, F# major
        { t: 52.5, div: 'swell', midi: 76, dur: 2.5, vel: 0.60 },  // E5
        { t: 52.5, div: 'swell', midi: 71, dur: 2.5, vel: 0.55 },  // B4
        { t: 52.5, div: 'swell', midi: 68, dur: 2.5, vel: 0.55 },  // G#4
        { t: 52.5, div: 'pedal', midi: 40, dur: 3.0, vel: 0.44 },  // E2

        { t: 55.0, div: 'swell', midi: 75, dur: 2.0, vel: 0.58 },  // D#5
        { t: 55.0, div: 'swell', midi: 71, dur: 2.0, vel: 0.53 },  // B4
        { t: 55.0, div: 'swell', midi: 66, dur: 2.0, vel: 0.53 },  // F#4
        { t: 55.0, div: 'pedal', midi: 42, dur: 2.5, vel: 0.44 },  // F#2

        { t: 57.0, div: 'swell', midi: 73, dur: 3.0, vel: 0.56 },  // C#5
        { t: 57.0, div: 'swell', midi: 69, dur: 3.0, vel: 0.51 },  // A4
        { t: 57.0, div: 'swell', midi: 66, dur: 3.0, vel: 0.51 },  // F#4
        { t: 57.0, div: 'pedal', midi: 42, dur: 3.5, vel: 0.44 },  // F#2

        // ===== SECTION 3: Poco animato - Themes combined, building to coda =====
        // Heroic theme returns on great, chorale on swell simultaneously
        { t: 60.0, div: 'great', midi: 59, dur: 1.5, vel: 0.94 },  // B3
        { t: 60.0, div: 'great', midi: 54, dur: 1.5, vel: 0.90 },  // F#3
        { t: 60.0, div: 'swell', midi: 71, dur: 1.5, vel: 0.70 },  // B4 (chorale)
        { t: 60.0, div: 'swell', midi: 66, dur: 1.5, vel: 0.65 },  // F#4
        { t: 60.0, div: 'pedal', midi: 47, dur: 1.5, vel: 0.92 },  // B2
        { t: 60.0, div: 'pedal', midi: 35, dur: 1.5, vel: 0.88 },  // B1

        { t: 61.5, div: 'great', midi: 62, dur: 1.12, vel: 0.95 }, // D4
        { t: 61.5, div: 'great', midi: 59, dur: 1.12, vel: 0.93 }, // B3
        { t: 62.62, div: 'great', midi: 61, dur: 0.38, vel: 0.93 },// C#4
        { t: 61.5, div: 'swell', midi: 74, dur: 1.5, vel: 0.72 },  // D5
        { t: 61.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.67 },  // A4
        { t: 61.5, div: 'pedal', midi: 47, dur: 1.5, vel: 0.90 },  // B2

        // Building crescendo
        { t: 63.0, div: 'great', midi: 66, dur: 1.5, vel: 0.96 },  // F#4
        { t: 63.0, div: 'great', midi: 62, dur: 1.5, vel: 0.94 },  // D4
        { t: 63.0, div: 'great', midi: 59, dur: 1.5, vel: 0.92 },  // B3
        { t: 63.0, div: 'swell', midi: 78, dur: 1.5, vel: 0.75 },  // F#5
        { t: 63.0, div: 'swell', midi: 74, dur: 1.5, vel: 0.70 },  // D5
        { t: 63.0, div: 'pedal', midi: 38, dur: 1.5, vel: 0.92 },  // D2

        { t: 64.5, div: 'great', midi: 67, dur: 1.5, vel: 0.97 },  // G4
        { t: 64.5, div: 'great', midi: 64, dur: 1.5, vel: 0.95 },  // E4
        { t: 64.5, div: 'great', midi: 59, dur: 1.5, vel: 0.93 },  // B3
        { t: 64.5, div: 'swell', midi: 79, dur: 1.5, vel: 0.77 },  // G5
        { t: 64.5, div: 'swell', midi: 76, dur: 1.5, vel: 0.72 },  // E5
        { t: 64.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.92 },  // E2

        // Massive dominant F# major
        { t: 66.0, div: 'great', midi: 66, dur: 2.0, vel: 0.98 },  // F#4
        { t: 66.0, div: 'great', midi: 61, dur: 2.0, vel: 0.96 },  // C#4
        { t: 66.0, div: 'great', midi: 70, dur: 2.0, vel: 0.97 },  // A#4
        { t: 66.0, div: 'swell', midi: 78, dur: 2.0, vel: 0.82 },  // F#5
        { t: 66.0, div: 'swell', midi: 73, dur: 2.0, vel: 0.80 },  // C#5
        { t: 66.0, div: 'pedal', midi: 42, dur: 2.5, vel: 0.94 },  // F#2
        { t: 66.0, div: 'pedal', midi: 30, dur: 2.5, vel: 0.90 },  // F#1

        // ===== CODA: Très largement - B major triumph =====
        { t: 68.5, div: 'great', midi: 59, dur: 3.0, vel: 0.99 },  // B3
        { t: 68.5, div: 'great', midi: 63, dur: 3.0, vel: 0.97 },  // D#4
        { t: 68.5, div: 'great', midi: 66, dur: 3.0, vel: 0.97 },  // F#4
        { t: 68.5, div: 'great', midi: 71, dur: 3.0, vel: 0.99 },  // B4
        { t: 68.5, div: 'swell', midi: 75, dur: 3.0, vel: 0.93 },  // D#5
        { t: 68.5, div: 'swell', midi: 78, dur: 3.0, vel: 0.93 },  // F#5
        { t: 68.5, div: 'swell', midi: 83, dur: 3.0, vel: 0.93 },  // B5
        { t: 68.5, div: 'pedal', midi: 47, dur: 4.0, vel: 0.95 },  // B2
        { t: 68.5, div: 'pedal', midi: 35, dur: 4.0, vel: 0.92 },  // B1

        // E major passing chord
        { t: 72.0, div: 'great', midi: 64, dur: 2.0, vel: 0.97 },  // E4
        { t: 72.0, div: 'great', midi: 68, dur: 2.0, vel: 0.95 },  // G#4
        { t: 72.0, div: 'great', midi: 71, dur: 2.0, vel: 0.95 },  // B4
        { t: 72.0, div: 'great', midi: 76, dur: 2.0, vel: 0.97 },  // E5
        { t: 72.0, div: 'pedal', midi: 40, dur: 2.5, vel: 0.93 },  // E2

        // F# major dominant
        { t: 74.5, div: 'great', midi: 66, dur: 2.0, vel: 0.98 },  // F#4
        { t: 74.5, div: 'great', midi: 70, dur: 2.0, vel: 0.96 },  // A#4
        { t: 74.5, div: 'great', midi: 73, dur: 2.0, vel: 0.96 },  // C#5
        { t: 74.5, div: 'great', midi: 78, dur: 2.0, vel: 0.98 },  // F#5
        { t: 74.5, div: 'pedal', midi: 42, dur: 2.5, vel: 0.94 },  // F#2

        // Final B major - fff, full organ
        { t: 77.0, div: 'great', midi: 59, dur: 5.0, vel: 0.99 },  // B3
        { t: 77.0, div: 'great', midi: 63, dur: 5.0, vel: 0.97 },  // D#4
        { t: 77.0, div: 'great', midi: 66, dur: 5.0, vel: 0.97 },  // F#4
        { t: 77.0, div: 'great', midi: 71, dur: 5.0, vel: 0.99 },  // B4
        { t: 77.0, div: 'swell', midi: 75, dur: 5.0, vel: 0.93 },  // D#5
        { t: 77.0, div: 'swell', midi: 78, dur: 5.0, vel: 0.93 },  // F#5
        { t: 77.0, div: 'swell', midi: 83, dur: 5.0, vel: 0.93 },  // B5
        { t: 77.0, div: 'pedal', midi: 47, dur: 6.0, vel: 0.96 },  // B2
        { t: 77.0, div: 'pedal', midi: 35, dur: 6.0, vel: 0.93 },  // B1
    ]
};

// ============================================================
// 3. Vierne - Final from Symphony No. 1 in D minor, Op. 14
// ============================================================
// The celebrated finale (1899), dedicated to Guilmant.
// Opens with a thundering pedal melody set beneath broken chord
// figurations in the hands. The main theme derives from the
// symphony's opening Prelude. Builds from D minor through
// increasingly brilliant passages to a triumphant D major
// peroration. Toccata-like character throughout.
// ============================================================

const PIECE_VIERNE_FINAL = {
    title: "Final from Symphony No. 1",
    composer: "Louis Vierne",
    catalog: "Op. 14",
    key: "D minor",
    tempo: 112,
    tempoChanges: [
        { t: 0, tempo: 112, label: "Allegro" },
        { t: 52, tempo: 72, label: "Cantabile" },
        { t: 68, tempo: 120, label: "Più mosso - D major" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4', 'sw-oboe8', 'sw-tremulant'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== SECTION 1: Allegro - Toccata opening in D minor =====
        // m.1: Broken chord figuration in hands, pedal theme below
        // RH: rapid D minor broken chords
        { t: 0,    div: 'great', midi: 62, dur: 0.12, vel: 0.90 },  // D4
        { t: 0.18, div: 'great', midi: 65, dur: 0.12, vel: 0.88 },  // F4
        { t: 0.36, div: 'great', midi: 69, dur: 0.12, vel: 0.90 },  // A4
        { t: 0.54, div: 'great', midi: 74, dur: 0.12, vel: 0.92 },  // D5
        { t: 0.72, div: 'great', midi: 69, dur: 0.12, vel: 0.90 },  // A4
        { t: 0.9,  div: 'great', midi: 65, dur: 0.12, vel: 0.88 },  // F4
        // Pedal theme: D - heroic
        { t: 0, div: 'pedal', midi: 38, dur: 1.0, vel: 0.92 },      // D2

        // m.1 beat 2: continued figuration
        { t: 1.08, div: 'great', midi: 62, dur: 0.12, vel: 0.90 },  // D4
        { t: 1.26, div: 'great', midi: 65, dur: 0.12, vel: 0.88 },  // F4
        { t: 1.44, div: 'great', midi: 69, dur: 0.12, vel: 0.90 },  // A4
        { t: 1.62, div: 'great', midi: 74, dur: 0.12, vel: 0.92 },  // D5
        { t: 1.8,  div: 'great', midi: 77, dur: 0.12, vel: 0.93 },  // F5
        { t: 1.98, div: 'great', midi: 74, dur: 0.12, vel: 0.91 },  // D5
        // Pedal continues
        { t: 1.08, div: 'pedal', midi: 41, dur: 1.0, vel: 0.90 },   // F2

        // m.2: Figuration on A (dominant)
        { t: 2.16, div: 'great', midi: 64, dur: 0.12, vel: 0.90 },  // E4
        { t: 2.34, div: 'great', midi: 69, dur: 0.12, vel: 0.88 },  // A4
        { t: 2.52, div: 'great', midi: 73, dur: 0.12, vel: 0.90 },  // C#5
        { t: 2.7,  div: 'great', midi: 76, dur: 0.12, vel: 0.92 },  // E5
        { t: 2.88, div: 'great', midi: 73, dur: 0.12, vel: 0.90 },  // C#5
        { t: 3.06, div: 'great', midi: 69, dur: 0.12, vel: 0.88 },  // A4
        { t: 2.16, div: 'pedal', midi: 45, dur: 1.0, vel: 0.92 },   // A2

        // m.2 beat 2
        { t: 3.24, div: 'great', midi: 64, dur: 0.12, vel: 0.90 },  // E4
        { t: 3.42, div: 'great', midi: 67, dur: 0.12, vel: 0.88 },  // G4
        { t: 3.6,  div: 'great', midi: 70, dur: 0.12, vel: 0.90 },  // Bb4
        { t: 3.78, div: 'great', midi: 73, dur: 0.12, vel: 0.91 },  // C#5
        { t: 3.96, div: 'great', midi: 76, dur: 0.12, vel: 0.93 },  // E5
        { t: 4.14, div: 'great', midi: 73, dur: 0.12, vel: 0.91 },  // C#5
        { t: 3.24, div: 'pedal', midi: 45, dur: 1.0, vel: 0.90 },   // A2

        // m.3: Dm figuration returns, higher
        { t: 4.32, div: 'great', midi: 65, dur: 0.12, vel: 0.91 },  // F4
        { t: 4.5,  div: 'great', midi: 69, dur: 0.12, vel: 0.89 },  // A4
        { t: 4.68, div: 'great', midi: 74, dur: 0.12, vel: 0.91 },  // D5
        { t: 4.86, div: 'great', midi: 77, dur: 0.12, vel: 0.93 },  // F5
        { t: 5.04, div: 'great', midi: 81, dur: 0.12, vel: 0.95 },  // A5
        { t: 5.22, div: 'great', midi: 77, dur: 0.12, vel: 0.93 },  // F5
        { t: 4.32, div: 'pedal', midi: 38, dur: 1.0, vel: 0.93 },   // D2

        // m.3 beat 2: Gm figuration
        { t: 5.4,  div: 'great', midi: 67, dur: 0.12, vel: 0.91 },  // G4
        { t: 5.58, div: 'great', midi: 70, dur: 0.12, vel: 0.89 },  // Bb4
        { t: 5.76, div: 'great', midi: 74, dur: 0.12, vel: 0.91 },  // D5
        { t: 5.94, div: 'great', midi: 79, dur: 0.12, vel: 0.93 },  // G5
        { t: 6.12, div: 'great', midi: 74, dur: 0.12, vel: 0.91 },  // D5
        { t: 6.3,  div: 'great', midi: 70, dur: 0.12, vel: 0.89 },  // Bb4
        { t: 5.4,  div: 'pedal', midi: 43, dur: 1.0, vel: 0.91 },   // G2

        // m.4: Am figuration (dominant)
        { t: 6.48, div: 'great', midi: 69, dur: 0.12, vel: 0.92 },  // A4
        { t: 6.66, div: 'great', midi: 73, dur: 0.12, vel: 0.90 },  // C#5
        { t: 6.84, div: 'great', midi: 76, dur: 0.12, vel: 0.92 },  // E5
        { t: 7.02, div: 'great', midi: 81, dur: 0.12, vel: 0.94 },  // A5
        { t: 7.2,  div: 'great', midi: 76, dur: 0.12, vel: 0.92 },  // E5
        { t: 7.38, div: 'great', midi: 73, dur: 0.12, vel: 0.90 },  // C#5
        { t: 6.48, div: 'pedal', midi: 45, dur: 1.0, vel: 0.93 },   // A2

        // m.4b: Resolution figure
        { t: 7.56, div: 'great', midi: 74, dur: 0.12, vel: 0.93 },  // D5
        { t: 7.74, div: 'great', midi: 77, dur: 0.12, vel: 0.91 },  // F5
        { t: 7.92, div: 'great', midi: 81, dur: 0.12, vel: 0.93 },  // A5
        { t: 8.1,  div: 'great', midi: 77, dur: 0.12, vel: 0.91 },  // F5
        { t: 8.28, div: 'great', midi: 74, dur: 0.12, vel: 0.89 },  // D5
        { t: 8.46, div: 'great', midi: 69, dur: 0.12, vel: 0.87 },  // A4
        { t: 7.56, div: 'pedal', midi: 38, dur: 1.5, vel: 0.92 },   // D2

        // m.5-6: Pedal theme becomes more prominent - marcato
        // Dm chord held while pedal drives
        { t: 9.0, div: 'great', midi: 62, dur: 2.0, vel: 0.88 },   // D4
        { t: 9.0, div: 'great', midi: 65, dur: 2.0, vel: 0.86 },   // F4
        { t: 9.0, div: 'great', midi: 69, dur: 2.0, vel: 0.86 },   // A4
        { t: 9.0, div: 'great', midi: 74, dur: 2.0, vel: 0.88 },   // D5
        { t: 9.0,  div: 'pedal', midi: 38, dur: 0.5, vel: 0.94 },  // D2
        { t: 9.54, div: 'pedal', midi: 40, dur: 0.5, vel: 0.92 },  // E2
        { t: 10.08, div: 'pedal', midi: 41, dur: 0.5, vel: 0.93 }, // F2
        { t: 10.62, div: 'pedal', midi: 43, dur: 0.5, vel: 0.94 }, // G2

        // m.7: Pedal ascending continues
        { t: 11.16, div: 'great', midi: 69, dur: 2.0, vel: 0.90 }, // A4
        { t: 11.16, div: 'great', midi: 73, dur: 2.0, vel: 0.88 }, // C#5
        { t: 11.16, div: 'great', midi: 76, dur: 2.0, vel: 0.88 }, // E5
        { t: 11.16, div: 'pedal', midi: 45, dur: 0.5, vel: 0.94 }, // A2
        { t: 11.7,  div: 'pedal', midi: 43, dur: 0.5, vel: 0.92 }, // G2
        { t: 12.24, div: 'pedal', midi: 41, dur: 0.5, vel: 0.93 }, // F2
        { t: 12.78, div: 'pedal', midi: 40, dur: 0.5, vel: 0.92 }, // E2

        // m.8: Big Dm chord resolution
        { t: 13.32, div: 'great', midi: 62, dur: 1.5, vel: 0.95 }, // D4
        { t: 13.32, div: 'great', midi: 65, dur: 1.5, vel: 0.93 }, // F4
        { t: 13.32, div: 'great', midi: 69, dur: 1.5, vel: 0.93 }, // A4
        { t: 13.32, div: 'great', midi: 74, dur: 1.5, vel: 0.95 }, // D5
        { t: 13.32, div: 'pedal', midi: 38, dur: 2.0, vel: 0.95 }, // D2
        { t: 13.32, div: 'pedal', midi: 26, dur: 2.0, vel: 0.90 }, // D1

        // m.9-12: Second theme group - more lyrical but still driven
        { t: 15.0, div: 'swell', midi: 69, dur: 1.0, vel: 0.78 },  // A4
        { t: 15.0, div: 'swell', midi: 65, dur: 1.0, vel: 0.73 },  // F4
        { t: 15.0, div: 'great', midi: 62, dur: 1.0, vel: 0.82 },  // D4
        { t: 15.0, div: 'pedal', midi: 38, dur: 1.5, vel: 0.80 },  // D2

        { t: 16.0, div: 'swell', midi: 70, dur: 0.8, vel: 0.79 },  // Bb4
        { t: 16.0, div: 'swell', midi: 67, dur: 0.8, vel: 0.74 },  // G4
        { t: 16.0, div: 'great', midi: 62, dur: 0.8, vel: 0.82 },  // D4

        { t: 16.8, div: 'swell', midi: 69, dur: 1.2, vel: 0.80 },  // A4
        { t: 16.8, div: 'swell', midi: 65, dur: 1.2, vel: 0.75 },  // F4
        { t: 16.8, div: 'great', midi: 60, dur: 1.2, vel: 0.82 },  // C4
        { t: 16.8, div: 'pedal', midi: 41, dur: 1.5, vel: 0.80 },  // F2

        { t: 18.0, div: 'swell', midi: 67, dur: 1.0, vel: 0.78 },  // G4
        { t: 18.0, div: 'swell', midi: 64, dur: 1.0, vel: 0.73 },  // E4
        { t: 18.0, div: 'great', midi: 60, dur: 1.0, vel: 0.82 },  // C4
        { t: 18.0, div: 'pedal', midi: 48, dur: 1.5, vel: 0.80 },  // C3

        { t: 19.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.76 },  // F4
        { t: 19.0, div: 'swell', midi: 62, dur: 1.5, vel: 0.71 },  // D4
        { t: 19.0, div: 'great', midi: 57, dur: 1.5, vel: 0.82 },  // A3
        { t: 19.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.80 },  // D2

        // m.13-16: Development - modulating through Bb major, C major
        { t: 21.0, div: 'great', midi: 58, dur: 0.12, vel: 0.90 },  // Bb3
        { t: 21.18, div: 'great', midi: 62, dur: 0.12, vel: 0.88 }, // D4
        { t: 21.36, div: 'great', midi: 65, dur: 0.12, vel: 0.90 }, // F4
        { t: 21.54, div: 'great', midi: 70, dur: 0.12, vel: 0.92 }, // Bb4
        { t: 21.72, div: 'great', midi: 74, dur: 0.12, vel: 0.93 }, // D5
        { t: 21.9,  div: 'great', midi: 70, dur: 0.12, vel: 0.91 }, // Bb4
        { t: 21.0, div: 'pedal', midi: 46, dur: 1.0, vel: 0.90 },   // Bb2

        { t: 22.08, div: 'great', midi: 65, dur: 0.12, vel: 0.90 }, // F4
        { t: 22.26, div: 'great', midi: 69, dur: 0.12, vel: 0.88 }, // A4
        { t: 22.44, div: 'great', midi: 72, dur: 0.12, vel: 0.90 }, // C5
        { t: 22.62, div: 'great', midi: 77, dur: 0.12, vel: 0.92 }, // F5
        { t: 22.8,  div: 'great', midi: 72, dur: 0.12, vel: 0.90 }, // C5
        { t: 22.98, div: 'great', midi: 69, dur: 0.12, vel: 0.88 }, // A4
        { t: 22.08, div: 'pedal', midi: 41, dur: 1.0, vel: 0.90 },  // F2

        // C major figuration
        { t: 23.16, div: 'great', midi: 60, dur: 0.12, vel: 0.91 }, // C4
        { t: 23.34, div: 'great', midi: 64, dur: 0.12, vel: 0.89 }, // E4
        { t: 23.52, div: 'great', midi: 67, dur: 0.12, vel: 0.91 }, // G4
        { t: 23.7,  div: 'great', midi: 72, dur: 0.12, vel: 0.93 }, // C5
        { t: 23.88, div: 'great', midi: 76, dur: 0.12, vel: 0.94 }, // E5
        { t: 24.06, div: 'great', midi: 72, dur: 0.12, vel: 0.92 }, // C5
        { t: 23.16, div: 'pedal', midi: 48, dur: 1.0, vel: 0.91 },  // C3

        // Dm figuration returning
        { t: 24.24, div: 'great', midi: 62, dur: 0.12, vel: 0.92 }, // D4
        { t: 24.42, div: 'great', midi: 65, dur: 0.12, vel: 0.90 }, // F4
        { t: 24.6,  div: 'great', midi: 69, dur: 0.12, vel: 0.92 }, // A4
        { t: 24.78, div: 'great', midi: 74, dur: 0.12, vel: 0.94 }, // D5
        { t: 24.96, div: 'great', midi: 77, dur: 0.12, vel: 0.95 }, // F5
        { t: 25.14, div: 'great', midi: 74, dur: 0.12, vel: 0.93 }, // D5
        { t: 24.24, div: 'pedal', midi: 38, dur: 1.5, vel: 0.92 },  // D2

        // m.17-20: Intensification - both hands in figurations
        // LH on swell adds counter-figuration
        { t: 26.0, div: 'great', midi: 69, dur: 0.12, vel: 0.93 },  // A4
        { t: 26.18, div: 'great', midi: 74, dur: 0.12, vel: 0.91 }, // D5
        { t: 26.36, div: 'great', midi: 77, dur: 0.12, vel: 0.93 }, // F5
        { t: 26.54, div: 'great', midi: 81, dur: 0.12, vel: 0.95 }, // A5
        { t: 26.72, div: 'great', midi: 77, dur: 0.12, vel: 0.93 }, // F5
        { t: 26.9,  div: 'great', midi: 74, dur: 0.12, vel: 0.91 }, // D5
        { t: 26.0, div: 'swell', midi: 62, dur: 0.12, vel: 0.80 },  // D4
        { t: 26.18, div: 'swell', midi: 57, dur: 0.12, vel: 0.78 }, // A3
        { t: 26.36, div: 'swell', midi: 53, dur: 0.12, vel: 0.80 }, // F3
        { t: 26.54, div: 'swell', midi: 57, dur: 0.12, vel: 0.82 }, // A3
        { t: 26.72, div: 'swell', midi: 62, dur: 0.12, vel: 0.80 }, // D4
        { t: 26.9,  div: 'swell', midi: 65, dur: 0.12, vel: 0.78 }, // F4
        { t: 26.0, div: 'pedal', midi: 38, dur: 1.0, vel: 0.94 },   // D2

        { t: 27.08, div: 'great', midi: 67, dur: 0.12, vel: 0.93 }, // G4
        { t: 27.26, div: 'great', midi: 70, dur: 0.12, vel: 0.91 }, // Bb4
        { t: 27.44, div: 'great', midi: 74, dur: 0.12, vel: 0.93 }, // D5
        { t: 27.62, div: 'great', midi: 79, dur: 0.12, vel: 0.95 }, // G5
        { t: 27.8,  div: 'great', midi: 74, dur: 0.12, vel: 0.93 }, // D5
        { t: 27.98, div: 'great', midi: 70, dur: 0.12, vel: 0.91 }, // Bb4
        { t: 27.08, div: 'swell', midi: 59, dur: 0.12, vel: 0.80 }, // B3
        { t: 27.26, div: 'swell', midi: 55, dur: 0.12, vel: 0.78 }, // G3
        { t: 27.44, div: 'swell', midi: 50, dur: 0.12, vel: 0.80 }, // D3
        { t: 27.62, div: 'swell', midi: 55, dur: 0.12, vel: 0.82 }, // G3
        { t: 27.8,  div: 'swell', midi: 59, dur: 0.12, vel: 0.80 }, // B3
        { t: 27.98, div: 'swell', midi: 62, dur: 0.12, vel: 0.78 }, // D4
        { t: 27.08, div: 'pedal', midi: 43, dur: 1.0, vel: 0.93 },  // G2

        // m.19: A7 chord (dominant of D)
        { t: 28.16, div: 'great', midi: 69, dur: 0.12, vel: 0.94 }, // A4
        { t: 28.34, div: 'great', midi: 73, dur: 0.12, vel: 0.92 }, // C#5
        { t: 28.52, div: 'great', midi: 76, dur: 0.12, vel: 0.94 }, // E5
        { t: 28.7,  div: 'great', midi: 81, dur: 0.12, vel: 0.96 }, // A5
        { t: 28.88, div: 'great', midi: 76, dur: 0.12, vel: 0.94 }, // E5
        { t: 29.06, div: 'great', midi: 73, dur: 0.12, vel: 0.92 }, // C#5
        { t: 28.16, div: 'pedal', midi: 45, dur: 1.5, vel: 0.94 },  // A2

        // m.20: Big Dm resolution chord
        { t: 29.7, div: 'great', midi: 62, dur: 2.0, vel: 0.96 },  // D4
        { t: 29.7, div: 'great', midi: 65, dur: 2.0, vel: 0.94 },  // F4
        { t: 29.7, div: 'great', midi: 69, dur: 2.0, vel: 0.94 },  // A4
        { t: 29.7, div: 'great', midi: 74, dur: 2.0, vel: 0.96 },  // D5
        { t: 29.7, div: 'swell', midi: 77, dur: 2.0, vel: 0.88 },  // F5
        { t: 29.7, div: 'swell', midi: 81, dur: 2.0, vel: 0.88 },  // A5
        { t: 29.7, div: 'pedal', midi: 38, dur: 2.5, vel: 0.95 },  // D2
        { t: 29.7, div: 'pedal', midi: 26, dur: 2.5, vel: 0.90 },  // D1

        // m.21-26: Fugato-like development
        // Subject enters in pedal
        { t: 32.0, div: 'pedal', midi: 38, dur: 0.5, vel: 0.92 },  // D2
        { t: 32.5, div: 'pedal', midi: 40, dur: 0.5, vel: 0.90 },  // E2
        { t: 33.0, div: 'pedal', midi: 41, dur: 0.5, vel: 0.91 },  // F2
        { t: 33.5, div: 'pedal', midi: 40, dur: 0.25, vel: 0.89 }, // E2
        { t: 33.75, div: 'pedal', midi: 38, dur: 0.75, vel: 0.92 },// D2

        // Answer in tenor (swell)
        { t: 34.5, div: 'swell', midi: 57, dur: 0.5, vel: 0.78 },  // A3
        { t: 35.0, div: 'swell', midi: 59, dur: 0.5, vel: 0.76 },  // B3
        { t: 35.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.77 },  // C4
        { t: 36.0, div: 'swell', midi: 59, dur: 0.25, vel: 0.75 }, // B3
        { t: 36.25, div: 'swell', midi: 57, dur: 0.75, vel: 0.78 },// A3
        // Pedal countersubject
        { t: 34.5, div: 'pedal', midi: 41, dur: 0.5, vel: 0.88 },  // F2
        { t: 35.0, div: 'pedal', midi: 43, dur: 0.5, vel: 0.86 },  // G2
        { t: 35.5, div: 'pedal', midi: 45, dur: 0.5, vel: 0.87 },  // A2
        { t: 36.0, div: 'pedal', midi: 46, dur: 0.5, vel: 0.88 },  // Bb2

        // Subject in alto (great)
        { t: 37.0, div: 'great', midi: 62, dur: 0.5, vel: 0.85 },  // D4
        { t: 37.5, div: 'great', midi: 64, dur: 0.5, vel: 0.83 },  // E4
        { t: 38.0, div: 'great', midi: 65, dur: 0.5, vel: 0.84 },  // F4
        { t: 38.5, div: 'great', midi: 64, dur: 0.25, vel: 0.82 }, // E4
        { t: 38.75, div: 'great', midi: 62, dur: 0.75, vel: 0.85 },// D4
        // Other voices continue
        { t: 37.0, div: 'swell', midi: 57, dur: 1.0, vel: 0.72 },  // A3
        { t: 38.0, div: 'swell', midi: 60, dur: 1.0, vel: 0.73 },  // C4
        { t: 37.0, div: 'pedal', midi: 38, dur: 1.0, vel: 0.88 },  // D2
        { t: 38.0, div: 'pedal', midi: 36, dur: 1.5, vel: 0.89 },  // C2

        // m.27-30: Building toccata figuration returns
        { t: 39.5, div: 'great', midi: 65, dur: 0.12, vel: 0.92 },  // F4
        { t: 39.68, div: 'great', midi: 69, dur: 0.12, vel: 0.90 }, // A4
        { t: 39.86, div: 'great', midi: 74, dur: 0.12, vel: 0.92 }, // D5
        { t: 40.04, div: 'great', midi: 77, dur: 0.12, vel: 0.94 }, // F5
        { t: 40.22, div: 'great', midi: 81, dur: 0.12, vel: 0.95 }, // A5
        { t: 40.4,  div: 'great', midi: 77, dur: 0.12, vel: 0.93 }, // F5
        { t: 39.5, div: 'pedal', midi: 38, dur: 1.0, vel: 0.94 },   // D2

        { t: 40.58, div: 'great', midi: 74, dur: 0.12, vel: 0.93 }, // D5
        { t: 40.76, div: 'great', midi: 70, dur: 0.12, vel: 0.91 }, // Bb4
        { t: 40.94, div: 'great', midi: 67, dur: 0.12, vel: 0.93 }, // G4
        { t: 41.12, div: 'great', midi: 70, dur: 0.12, vel: 0.95 }, // Bb4
        { t: 41.3,  div: 'great', midi: 74, dur: 0.12, vel: 0.93 }, // D5
        { t: 41.48, div: 'great', midi: 79, dur: 0.12, vel: 0.91 }, // G5
        { t: 40.58, div: 'pedal', midi: 43, dur: 1.0, vel: 0.93 },  // G2

        // m.29: Chromatic ascent - tension building
        { t: 41.66, div: 'great', midi: 73, dur: 0.12, vel: 0.94 }, // C#5
        { t: 41.84, div: 'great', midi: 76, dur: 0.12, vel: 0.92 }, // E5
        { t: 42.02, div: 'great', midi: 69, dur: 0.12, vel: 0.94 }, // A4
        { t: 42.2,  div: 'great', midi: 73, dur: 0.12, vel: 0.96 }, // C#5
        { t: 42.38, div: 'great', midi: 76, dur: 0.12, vel: 0.94 }, // E5
        { t: 42.56, div: 'great', midi: 81, dur: 0.12, vel: 0.92 }, // A5
        { t: 41.66, div: 'pedal', midi: 45, dur: 1.5, vel: 0.94 },  // A2

        // m.30: Massive A major dominant
        { t: 43.16, div: 'great', midi: 69, dur: 2.0, vel: 0.97 },  // A4
        { t: 43.16, div: 'great', midi: 73, dur: 2.0, vel: 0.95 },  // C#5
        { t: 43.16, div: 'great', midi: 76, dur: 2.0, vel: 0.95 },  // E5
        { t: 43.16, div: 'swell', midi: 81, dur: 2.0, vel: 0.90 },  // A5
        { t: 43.16, div: 'pedal', midi: 45, dur: 2.5, vel: 0.95 },  // A2
        { t: 43.16, div: 'pedal', midi: 33, dur: 2.5, vel: 0.90 },  // A1

        // m.31-34: Thundering pedal restatement
        { t: 45.5, div: 'pedal', midi: 38, dur: 0.4, vel: 0.96 },  // D2
        { t: 45.9, div: 'pedal', midi: 41, dur: 0.4, vel: 0.94 },  // F2
        { t: 46.3, div: 'pedal', midi: 45, dur: 0.4, vel: 0.95 },  // A2
        { t: 46.7, div: 'pedal', midi: 38, dur: 0.4, vel: 0.96 },  // D2
        { t: 45.5, div: 'great', midi: 62, dur: 2.0, vel: 0.92 },  // D4
        { t: 45.5, div: 'great', midi: 65, dur: 2.0, vel: 0.90 },  // F4
        { t: 45.5, div: 'great', midi: 69, dur: 2.0, vel: 0.90 },  // A4
        { t: 45.5, div: 'swell', midi: 74, dur: 2.0, vel: 0.85 },  // D5

        { t: 47.5, div: 'pedal', midi: 43, dur: 0.4, vel: 0.96 },  // G2
        { t: 47.9, div: 'pedal', midi: 46, dur: 0.4, vel: 0.94 },  // Bb2
        { t: 48.3, div: 'pedal', midi: 43, dur: 0.4, vel: 0.95 },  // G2
        { t: 48.7, div: 'pedal', midi: 41, dur: 0.4, vel: 0.93 },  // F2
        { t: 47.5, div: 'great', midi: 67, dur: 2.0, vel: 0.92 },  // G4
        { t: 47.5, div: 'great', midi: 70, dur: 2.0, vel: 0.90 },  // Bb4
        { t: 47.5, div: 'great', midi: 74, dur: 2.0, vel: 0.90 },  // D5
        { t: 47.5, div: 'swell', midi: 79, dur: 2.0, vel: 0.85 },  // G5

        // m.35: A dominant pedal
        { t: 49.5, div: 'pedal', midi: 45, dur: 0.4, vel: 0.97 },  // A2
        { t: 49.9, div: 'pedal', midi: 40, dur: 0.4, vel: 0.95 },  // E2
        { t: 50.3, div: 'pedal', midi: 45, dur: 0.4, vel: 0.96 },  // A2
        { t: 50.7, div: 'pedal', midi: 33, dur: 0.8, vel: 0.97 },  // A1
        { t: 49.5, div: 'great', midi: 69, dur: 2.0, vel: 0.95 },  // A4
        { t: 49.5, div: 'great', midi: 73, dur: 2.0, vel: 0.93 },  // C#5
        { t: 49.5, div: 'great', midi: 76, dur: 2.0, vel: 0.93 },  // E5
        { t: 49.5, div: 'swell', midi: 81, dur: 2.0, vel: 0.88 },  // A5

        // ===== SECTION 2: Cantabile - Lyrical middle section =====
        { t: 52.0, div: 'swell', midi: 69, dur: 2.5, vel: 0.70 },  // A4
        { t: 52.0, div: 'swell', midi: 65, dur: 2.5, vel: 0.65 },  // F4
        { t: 52.0, div: 'swell', midi: 62, dur: 2.5, vel: 0.65 },  // D4
        { t: 52.0, div: 'pedal', midi: 38, dur: 3.0, vel: 0.55 },  // D2

        { t: 54.5, div: 'swell', midi: 70, dur: 2.0, vel: 0.72 },  // Bb4
        { t: 54.5, div: 'swell', midi: 67, dur: 2.0, vel: 0.67 },  // G4
        { t: 54.5, div: 'swell', midi: 62, dur: 2.0, vel: 0.67 },  // D4
        { t: 54.5, div: 'pedal', midi: 43, dur: 2.5, vel: 0.55 },  // G2

        { t: 56.5, div: 'swell', midi: 72, dur: 2.5, vel: 0.74 },  // C5
        { t: 56.5, div: 'swell', midi: 67, dur: 2.5, vel: 0.69 },  // G4
        { t: 56.5, div: 'swell', midi: 64, dur: 2.5, vel: 0.69 },  // E4
        { t: 56.5, div: 'pedal', midi: 48, dur: 3.0, vel: 0.55 },  // C3

        { t: 59.0, div: 'swell', midi: 70, dur: 2.0, vel: 0.72 },  // Bb4
        { t: 59.0, div: 'swell', midi: 65, dur: 2.0, vel: 0.67 },  // F4
        { t: 59.0, div: 'swell', midi: 62, dur: 2.0, vel: 0.67 },  // D4
        { t: 59.0, div: 'pedal', midi: 46, dur: 2.5, vel: 0.55 },  // Bb2

        { t: 61.0, div: 'swell', midi: 69, dur: 2.5, vel: 0.70 },  // A4
        { t: 61.0, div: 'swell', midi: 65, dur: 2.5, vel: 0.65 },  // F4
        { t: 61.0, div: 'swell', midi: 60, dur: 2.5, vel: 0.65 },  // C4
        { t: 61.0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.55 },  // F2

        { t: 63.5, div: 'swell', midi: 67, dur: 2.0, vel: 0.68 },  // G4
        { t: 63.5, div: 'swell', midi: 64, dur: 2.0, vel: 0.63 },  // E4
        { t: 63.5, div: 'swell', midi: 58, dur: 2.0, vel: 0.63 },  // Bb3
        { t: 63.5, div: 'pedal', midi: 48, dur: 2.5, vel: 0.55 },  // C3

        { t: 65.5, div: 'swell', midi: 65, dur: 2.5, vel: 0.70 },  // F4
        { t: 65.5, div: 'swell', midi: 62, dur: 2.5, vel: 0.65 },  // D4
        { t: 65.5, div: 'swell', midi: 57, dur: 2.5, vel: 0.65 },  // A3
        { t: 65.5, div: 'pedal', midi: 38, dur: 3.0, vel: 0.55 },  // D2

        // ===== SECTION 3: Più mosso - Triumphant D major conclusion =====
        // Full organ, brilliant toccata figuration in D major
        { t: 68.0, div: 'great', midi: 62, dur: 0.12, vel: 0.95 },  // D4
        { t: 68.18, div: 'great', midi: 66, dur: 0.12, vel: 0.93 }, // F#4
        { t: 68.36, div: 'great', midi: 69, dur: 0.12, vel: 0.95 }, // A4
        { t: 68.54, div: 'great', midi: 74, dur: 0.12, vel: 0.97 }, // D5
        { t: 68.72, div: 'great', midi: 78, dur: 0.12, vel: 0.98 }, // F#5
        { t: 68.9,  div: 'great', midi: 81, dur: 0.12, vel: 0.99 }, // A5
        { t: 68.0, div: 'pedal', midi: 38, dur: 1.5, vel: 0.95 },   // D2
        { t: 68.0, div: 'pedal', midi: 26, dur: 1.5, vel: 0.90 },   // D1

        // G major
        { t: 69.08, div: 'great', midi: 67, dur: 0.12, vel: 0.95 }, // G4
        { t: 69.26, div: 'great', midi: 71, dur: 0.12, vel: 0.93 }, // B4
        { t: 69.44, div: 'great', midi: 74, dur: 0.12, vel: 0.95 }, // D5
        { t: 69.62, div: 'great', midi: 79, dur: 0.12, vel: 0.97 }, // G5
        { t: 69.8,  div: 'great', midi: 74, dur: 0.12, vel: 0.95 }, // D5
        { t: 69.98, div: 'great', midi: 71, dur: 0.12, vel: 0.93 }, // B4
        { t: 69.08, div: 'pedal', midi: 43, dur: 1.0, vel: 0.93 },  // G2

        // A major dominant
        { t: 70.16, div: 'great', midi: 69, dur: 0.12, vel: 0.96 }, // A4
        { t: 70.34, div: 'great', midi: 73, dur: 0.12, vel: 0.94 }, // C#5
        { t: 70.52, div: 'great', midi: 76, dur: 0.12, vel: 0.96 }, // E5
        { t: 70.7,  div: 'great', midi: 81, dur: 0.12, vel: 0.98 }, // A5
        { t: 70.88, div: 'great', midi: 76, dur: 0.12, vel: 0.96 }, // E5
        { t: 71.06, div: 'great', midi: 73, dur: 0.12, vel: 0.94 }, // C#5
        { t: 70.16, div: 'pedal', midi: 45, dur: 1.5, vel: 0.94 },  // A2

        // FINAL D MAJOR - fff, tutti
        { t: 71.7, div: 'great', midi: 62, dur: 4.0, vel: 0.99 },  // D4
        { t: 71.7, div: 'great', midi: 66, dur: 4.0, vel: 0.97 },  // F#4
        { t: 71.7, div: 'great', midi: 69, dur: 4.0, vel: 0.97 },  // A4
        { t: 71.7, div: 'great', midi: 74, dur: 4.0, vel: 0.99 },  // D5
        { t: 71.7, div: 'swell', midi: 78, dur: 4.0, vel: 0.93 },  // F#5
        { t: 71.7, div: 'swell', midi: 81, dur: 4.0, vel: 0.93 },  // A5
        { t: 71.7, div: 'swell', midi: 86, dur: 4.0, vel: 0.93 },  // D6
        { t: 71.7, div: 'pedal', midi: 38, dur: 5.0, vel: 0.96 },  // D2
        { t: 71.7, div: 'pedal', midi: 26, dur: 5.0, vel: 0.92 },  // D1
    ]
};

// ============================================================
// 4. Dupré - Prelude and Fugue in B major, Op. 7 No. 1
// ============================================================
// Written in 1914, dedicated to René Vierne (mort pour la France).
// The Prelude opens animato in 3/4 with a jangling toccata-like
// figure divided between the hands, ff. The pedal strides with the
// main theme beneath. The key of B major (5 sharps) gives it a
// glittering, brilliant character. The Fugue continues the animation
// with a subject derived from the toccata figuration, building to
// a blazing carillonnade conclusion.
// ============================================================

const PIECE_DUPRE_PRELUDE_B = {
    title: "Prelude and Fugue in B major",
    composer: "Marcel Dupré",
    catalog: "Op. 7 No. 1",
    key: "B major",
    tempo: 120,
    tempoChanges: [
        { t: 0, tempo: 120, label: "Animato - Prelude" },
        { t: 44, tempo: 104, label: "Allegro - Fugue" },
        { t: 72, tempo: 126, label: "Stringendo - Coda" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-spitzflute4', 'ch-quint'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== SECTION 1: Animato - Toccata Prelude in B major =====
        // m.1: Jangling toccata figure, ff - hands alternate on B major chord
        // RH: rapid broken B major figures
        { t: 0,    div: 'great', midi: 71, dur: 0.12, vel: 0.94 },  // B4
        { t: 0.17, div: 'great', midi: 75, dur: 0.12, vel: 0.92 },  // D#5
        { t: 0.34, div: 'great', midi: 78, dur: 0.12, vel: 0.94 },  // F#5
        { t: 0.51, div: 'great', midi: 83, dur: 0.12, vel: 0.96 },  // B5
        // LH: answering figure
        { t: 0.17, div: 'swell', midi: 59, dur: 0.12, vel: 0.85 },  // B3
        { t: 0.34, div: 'swell', midi: 63, dur: 0.12, vel: 0.83 },  // D#4
        { t: 0.51, div: 'swell', midi: 66, dur: 0.12, vel: 0.85 },  // F#4
        // Pedal theme: B - striding
        { t: 0, div: 'pedal', midi: 47, dur: 0.75, vel: 0.92 },     // B2

        // m.1 beat 2
        { t: 0.68, div: 'great', midi: 78, dur: 0.12, vel: 0.93 },  // F#5
        { t: 0.85, div: 'great', midi: 75, dur: 0.12, vel: 0.91 },  // D#5
        { t: 1.02, div: 'great', midi: 71, dur: 0.12, vel: 0.93 },  // B4
        { t: 1.19, div: 'great', midi: 75, dur: 0.12, vel: 0.95 },  // D#5
        { t: 0.68, div: 'swell', midi: 66, dur: 0.12, vel: 0.84 },  // F#4
        { t: 0.85, div: 'swell', midi: 63, dur: 0.12, vel: 0.82 },  // D#4
        { t: 1.02, div: 'swell', midi: 59, dur: 0.12, vel: 0.84 },  // B3
        { t: 0.68, div: 'pedal', midi: 54, dur: 0.68, vel: 0.90 },  // F#3

        // m.1 beat 3
        { t: 1.36, div: 'great', midi: 78, dur: 0.12, vel: 0.94 },  // F#5
        { t: 1.53, div: 'great', midi: 83, dur: 0.12, vel: 0.96 },  // B5
        { t: 1.7,  div: 'great', midi: 78, dur: 0.12, vel: 0.94 },  // F#5
        { t: 1.87, div: 'great', midi: 75, dur: 0.12, vel: 0.92 },  // D#5
        { t: 1.36, div: 'swell', midi: 63, dur: 0.12, vel: 0.85 },  // D#4
        { t: 1.53, div: 'swell', midi: 66, dur: 0.12, vel: 0.87 },  // F#4
        { t: 1.7,  div: 'swell', midi: 71, dur: 0.12, vel: 0.85 },  // B4
        { t: 1.36, div: 'pedal', midi: 47, dur: 0.68, vel: 0.91 },  // B2

        // m.2: Toccata continues - E major passing
        { t: 2.04, div: 'great', midi: 76, dur: 0.12, vel: 0.93 },  // E5
        { t: 2.21, div: 'great', midi: 80, dur: 0.12, vel: 0.91 },  // G#5
        { t: 2.38, div: 'great', midi: 83, dur: 0.12, vel: 0.93 },  // B5
        { t: 2.55, div: 'great', midi: 80, dur: 0.12, vel: 0.91 },  // G#5
        { t: 2.04, div: 'swell', midi: 64, dur: 0.12, vel: 0.84 },  // E4
        { t: 2.21, div: 'swell', midi: 68, dur: 0.12, vel: 0.82 },  // G#4
        { t: 2.38, div: 'swell', midi: 71, dur: 0.12, vel: 0.84 },  // B4
        { t: 2.04, div: 'pedal', midi: 40, dur: 0.68, vel: 0.91 },  // E2

        // m.2 beat 2: F# major
        { t: 2.72, div: 'great', midi: 78, dur: 0.12, vel: 0.94 },  // F#5
        { t: 2.89, div: 'great', midi: 82, dur: 0.12, vel: 0.92 },  // A#5
        { t: 3.06, div: 'great', midi: 78, dur: 0.12, vel: 0.94 },  // F#5
        { t: 3.23, div: 'great', midi: 73, dur: 0.12, vel: 0.92 },  // C#5
        { t: 2.72, div: 'swell', midi: 66, dur: 0.12, vel: 0.85 },  // F#4
        { t: 2.89, div: 'swell', midi: 70, dur: 0.12, vel: 0.83 },  // A#4
        { t: 3.06, div: 'swell', midi: 73, dur: 0.12, vel: 0.85 },  // C#5
        { t: 2.72, div: 'pedal', midi: 42, dur: 0.68, vel: 0.92 },  // F#2

        // m.2 beat 3: Return to B
        { t: 3.4, div: 'great', midi: 71, dur: 0.12, vel: 0.95 },   // B4
        { t: 3.57, div: 'great', midi: 75, dur: 0.12, vel: 0.93 },  // D#5
        { t: 3.74, div: 'great', midi: 78, dur: 0.12, vel: 0.95 },  // F#5
        { t: 3.91, div: 'great', midi: 83, dur: 0.12, vel: 0.97 },  // B5
        { t: 3.4, div: 'swell', midi: 59, dur: 0.12, vel: 0.86 },   // B3
        { t: 3.57, div: 'swell', midi: 63, dur: 0.12, vel: 0.84 },  // D#4
        { t: 3.74, div: 'swell', midi: 66, dur: 0.12, vel: 0.86 },  // F#4
        { t: 3.4, div: 'pedal', midi: 47, dur: 0.68, vel: 0.93 },   // B2

        // m.3-4: Pedal theme strides - main theme in augmentation
        { t: 4.08, div: 'pedal', midi: 47, dur: 1.0, vel: 0.93 },   // B2
        { t: 5.08, div: 'pedal', midi: 49, dur: 0.5, vel: 0.91 },   // C#3
        { t: 5.58, div: 'pedal', midi: 51, dur: 0.5, vel: 0.92 },   // D#3
        { t: 6.08, div: 'pedal', midi: 52, dur: 1.0, vel: 0.94 },   // E3
        // Toccata continues above
        { t: 4.08, div: 'great', midi: 71, dur: 0.12, vel: 0.93 },  // B4
        { t: 4.25, div: 'great', midi: 75, dur: 0.12, vel: 0.91 },  // D#5
        { t: 4.42, div: 'great', midi: 78, dur: 0.12, vel: 0.93 },  // F#5
        { t: 4.59, div: 'great', midi: 75, dur: 0.12, vel: 0.91 },  // D#5
        { t: 4.76, div: 'great', midi: 71, dur: 0.12, vel: 0.93 },  // B4
        { t: 4.93, div: 'great', midi: 75, dur: 0.12, vel: 0.95 },  // D#5
        { t: 5.1,  div: 'great', midi: 78, dur: 0.12, vel: 0.93 },  // F#5
        { t: 5.27, div: 'great', midi: 83, dur: 0.12, vel: 0.91 },  // B5
        { t: 5.44, div: 'great', midi: 78, dur: 0.12, vel: 0.93 },  // F#5
        { t: 5.61, div: 'great', midi: 75, dur: 0.12, vel: 0.95 },  // D#5
        { t: 5.78, div: 'great', midi: 78, dur: 0.12, vel: 0.93 },  // F#5
        { t: 5.95, div: 'great', midi: 83, dur: 0.12, vel: 0.91 },  // B5

        // m.5-6: Tonal side-slip to Bb major (semitone down)
        { t: 6.12, div: 'great', midi: 70, dur: 0.12, vel: 0.93 },  // Bb4
        { t: 6.29, div: 'great', midi: 74, dur: 0.12, vel: 0.91 },  // D5
        { t: 6.46, div: 'great', midi: 77, dur: 0.12, vel: 0.93 },  // F5
        { t: 6.63, div: 'great', midi: 82, dur: 0.12, vel: 0.95 },  // Bb5
        { t: 6.12, div: 'swell', midi: 58, dur: 0.12, vel: 0.84 },  // Bb3
        { t: 6.29, div: 'swell', midi: 62, dur: 0.12, vel: 0.82 },  // D4
        { t: 6.46, div: 'swell', midi: 65, dur: 0.12, vel: 0.84 },  // F4
        { t: 6.12, div: 'pedal', midi: 46, dur: 0.68, vel: 0.91 },  // Bb2

        { t: 6.8, div: 'great', midi: 77, dur: 0.12, vel: 0.92 },   // F5
        { t: 6.97, div: 'great', midi: 74, dur: 0.12, vel: 0.90 },  // D5
        { t: 7.14, div: 'great', midi: 70, dur: 0.12, vel: 0.92 },  // Bb4
        { t: 7.31, div: 'great', midi: 74, dur: 0.12, vel: 0.94 },  // D5
        { t: 6.8, div: 'swell', midi: 65, dur: 0.12, vel: 0.83 },   // F4
        { t: 6.97, div: 'swell', midi: 62, dur: 0.12, vel: 0.81 },  // D4
        { t: 7.14, div: 'swell', midi: 58, dur: 0.12, vel: 0.83 },  // Bb3
        { t: 6.8, div: 'pedal', midi: 53, dur: 0.68, vel: 0.90 },   // F3

        // m.6: Through Eb major
        { t: 7.48, div: 'great', midi: 75, dur: 0.12, vel: 0.93 },  // Eb5
        { t: 7.65, div: 'great', midi: 79, dur: 0.12, vel: 0.91 },  // G5
        { t: 7.82, div: 'great', midi: 82, dur: 0.12, vel: 0.93 },  // Bb5
        { t: 7.99, div: 'great', midi: 79, dur: 0.12, vel: 0.91 },  // G5
        { t: 7.48, div: 'swell', midi: 63, dur: 0.12, vel: 0.84 },  // Eb4
        { t: 7.65, div: 'swell', midi: 67, dur: 0.12, vel: 0.82 },  // G4
        { t: 7.82, div: 'swell', midi: 70, dur: 0.12, vel: 0.84 },  // Bb4
        { t: 7.48, div: 'pedal', midi: 39, dur: 0.68, vel: 0.91 },  // Eb2

        // m.7-8: Return through F# major to B major
        { t: 8.16, div: 'great', midi: 73, dur: 0.12, vel: 0.94 },  // C#5
        { t: 8.33, div: 'great', midi: 78, dur: 0.12, vel: 0.92 },  // F#5
        { t: 8.5,  div: 'great', midi: 82, dur: 0.12, vel: 0.94 },  // A#5
        { t: 8.67, div: 'great', midi: 78, dur: 0.12, vel: 0.92 },  // F#5
        { t: 8.16, div: 'swell', midi: 61, dur: 0.12, vel: 0.85 },  // C#4
        { t: 8.33, div: 'swell', midi: 66, dur: 0.12, vel: 0.83 },  // F#4
        { t: 8.5,  div: 'swell', midi: 70, dur: 0.12, vel: 0.85 },  // A#4
        { t: 8.16, div: 'pedal', midi: 42, dur: 1.0, vel: 0.93 },   // F#2

        { t: 9.16, div: 'great', midi: 71, dur: 0.12, vel: 0.95 },  // B4
        { t: 9.33, div: 'great', midi: 75, dur: 0.12, vel: 0.93 },  // D#5
        { t: 9.5,  div: 'great', midi: 78, dur: 0.12, vel: 0.95 },  // F#5
        { t: 9.67, div: 'great', midi: 83, dur: 0.12, vel: 0.97 },  // B5
        { t: 9.16, div: 'swell', midi: 59, dur: 0.12, vel: 0.86 },  // B3
        { t: 9.33, div: 'swell', midi: 63, dur: 0.12, vel: 0.84 },  // D#4
        { t: 9.5,  div: 'swell', midi: 66, dur: 0.12, vel: 0.86 },  // F#4
        { t: 9.16, div: 'pedal', midi: 47, dur: 1.0, vel: 0.94 },   // B2

        // m.9-12: Reprise with pedal theme in canon
        // Pedal theme in augmentation
        { t: 10.16, div: 'pedal', midi: 47, dur: 1.5, vel: 0.94 },  // B2
        { t: 11.66, div: 'pedal', midi: 49, dur: 0.75, vel: 0.92 }, // C#3
        { t: 12.41, div: 'pedal', midi: 51, dur: 0.75, vel: 0.93 }, // D#3
        { t: 13.16, div: 'pedal', midi: 52, dur: 1.5, vel: 0.95 },  // E3
        { t: 14.66, div: 'pedal', midi: 54, dur: 1.0, vel: 0.94 },  // F#3
        // Treble toccata continues
        { t: 10.16, div: 'great', midi: 83, dur: 0.12, vel: 0.95 }, // B5
        { t: 10.33, div: 'great', midi: 78, dur: 0.12, vel: 0.93 }, // F#5
        { t: 10.5,  div: 'great', midi: 75, dur: 0.12, vel: 0.95 }, // D#5
        { t: 10.67, div: 'great', midi: 71, dur: 0.12, vel: 0.93 }, // B4
        { t: 10.84, div: 'great', midi: 75, dur: 0.12, vel: 0.95 }, // D#5
        { t: 11.01, div: 'great', midi: 78, dur: 0.12, vel: 0.97 }, // F#5
        { t: 11.18, div: 'great', midi: 83, dur: 0.12, vel: 0.95 }, // B5
        { t: 11.35, div: 'great', midi: 78, dur: 0.12, vel: 0.93 }, // F#5
        { t: 11.52, div: 'great', midi: 75, dur: 0.12, vel: 0.95 }, // D#5
        { t: 11.69, div: 'great', midi: 78, dur: 0.12, vel: 0.97 }, // F#5
        { t: 11.86, div: 'great', midi: 83, dur: 0.12, vel: 0.95 }, // B5
        { t: 12.03, div: 'great', midi: 78, dur: 0.12, vel: 0.93 }, // F#5

        // m.11-12: E major passage
        { t: 12.2,  div: 'great', midi: 76, dur: 0.12, vel: 0.94 }, // E5
        { t: 12.37, div: 'great', midi: 80, dur: 0.12, vel: 0.92 }, // G#5
        { t: 12.54, div: 'great', midi: 83, dur: 0.12, vel: 0.94 }, // B5
        { t: 12.71, div: 'great', midi: 80, dur: 0.12, vel: 0.92 }, // G#5
        { t: 12.88, div: 'great', midi: 76, dur: 0.12, vel: 0.94 }, // E5
        { t: 13.05, div: 'great', midi: 80, dur: 0.12, vel: 0.96 }, // G#5
        { t: 13.22, div: 'great', midi: 78, dur: 0.12, vel: 0.94 }, // F#5
        { t: 13.39, div: 'great', midi: 82, dur: 0.12, vel: 0.92 }, // A#5
        { t: 13.56, div: 'great', midi: 78, dur: 0.12, vel: 0.94 }, // F#5
        { t: 13.73, div: 'great', midi: 73, dur: 0.12, vel: 0.92 }, // C#5
        { t: 13.9,  div: 'great', midi: 78, dur: 0.12, vel: 0.94 }, // F#5
        { t: 14.07, div: 'great', midi: 82, dur: 0.12, vel: 0.96 }, // A#5

        // m.13: Big B major chord - end of Prelude section
        { t: 14.7, div: 'great', midi: 59, dur: 2.5, vel: 0.97 },   // B3
        { t: 14.7, div: 'great', midi: 63, dur: 2.5, vel: 0.95 },   // D#4
        { t: 14.7, div: 'great', midi: 66, dur: 2.5, vel: 0.95 },   // F#4
        { t: 14.7, div: 'great', midi: 71, dur: 2.5, vel: 0.97 },   // B4
        { t: 14.7, div: 'swell', midi: 75, dur: 2.5, vel: 0.90 },   // D#5
        { t: 14.7, div: 'swell', midi: 78, dur: 2.5, vel: 0.90 },   // F#5
        { t: 14.7, div: 'swell', midi: 83, dur: 2.5, vel: 0.90 },   // B5
        { t: 14.7, div: 'pedal', midi: 47, dur: 3.0, vel: 0.95 },   // B2
        { t: 14.7, div: 'pedal', midi: 35, dur: 3.0, vel: 0.90 },   // B1

        // m.14-16: Transition - descending chromatic
        { t: 17.5, div: 'swell', midi: 71, dur: 0.8, vel: 0.75 },   // B4
        { t: 18.3, div: 'swell', midi: 70, dur: 0.8, vel: 0.73 },   // Bb4
        { t: 19.1, div: 'swell', midi: 69, dur: 0.8, vel: 0.71 },   // A4
        { t: 19.9, div: 'swell', midi: 68, dur: 0.8, vel: 0.69 },   // G#4
        { t: 17.5, div: 'swell', midi: 63, dur: 0.8, vel: 0.70 },   // D#4
        { t: 18.3, div: 'swell', midi: 62, dur: 0.8, vel: 0.68 },   // D4
        { t: 19.1, div: 'swell', midi: 61, dur: 0.8, vel: 0.66 },   // C#4
        { t: 19.9, div: 'swell', midi: 60, dur: 0.8, vel: 0.64 },   // C4
        { t: 17.5, div: 'pedal', midi: 47, dur: 1.0, vel: 0.70 },   // B2
        { t: 18.5, div: 'pedal', midi: 46, dur: 1.0, vel: 0.68 },   // Bb2
        { t: 19.5, div: 'pedal', midi: 45, dur: 1.5, vel: 0.66 },   // A2

        // m.17-19: More toccata flourishes leading to fugue
        { t: 21.0, div: 'great', midi: 66, dur: 0.12, vel: 0.90 },  // F#4
        { t: 21.17, div: 'great', midi: 71, dur: 0.12, vel: 0.88 }, // B4
        { t: 21.34, div: 'great', midi: 75, dur: 0.12, vel: 0.90 }, // D#5
        { t: 21.51, div: 'great', midi: 78, dur: 0.12, vel: 0.92 }, // F#5
        { t: 21.68, div: 'great', midi: 75, dur: 0.12, vel: 0.90 }, // D#5
        { t: 21.85, div: 'great', midi: 71, dur: 0.12, vel: 0.88 }, // B4
        { t: 21.0, div: 'pedal', midi: 47, dur: 1.0, vel: 0.90 },   // B2

        { t: 22.02, div: 'great', midi: 66, dur: 0.12, vel: 0.91 }, // F#4
        { t: 22.19, div: 'great', midi: 70, dur: 0.12, vel: 0.89 }, // A#4
        { t: 22.36, div: 'great', midi: 73, dur: 0.12, vel: 0.91 }, // C#5
        { t: 22.53, div: 'great', midi: 78, dur: 0.12, vel: 0.93 }, // F#5
        { t: 22.7,  div: 'great', midi: 73, dur: 0.12, vel: 0.91 }, // C#5
        { t: 22.87, div: 'great', midi: 70, dur: 0.12, vel: 0.89 }, // A#4
        { t: 22.02, div: 'pedal', midi: 42, dur: 1.0, vel: 0.91 },  // F#2

        // Cadential B major chord
        { t: 23.04, div: 'great', midi: 71, dur: 1.5, vel: 0.96 },  // B4
        { t: 23.04, div: 'great', midi: 75, dur: 1.5, vel: 0.94 },  // D#5
        { t: 23.04, div: 'great', midi: 78, dur: 1.5, vel: 0.94 },  // F#5
        { t: 23.04, div: 'swell', midi: 59, dur: 1.5, vel: 0.86 },  // B3
        { t: 23.04, div: 'swell', midi: 63, dur: 1.5, vel: 0.84 },  // D#4
        { t: 23.04, div: 'pedal', midi: 47, dur: 2.0, vel: 0.93 },  // B2

        // ===== SECTION 2: Fugue - Allegro in common time =====
        // Fugue subject: related to toccata figuration
        // Subject enters alone in soprano
        { t: 25.0, div: 'great', midi: 71, dur: 0.5, vel: 0.82 },   // B4
        { t: 25.5, div: 'great', midi: 75, dur: 0.5, vel: 0.80 },   // D#5
        { t: 26.0, div: 'great', midi: 78, dur: 0.5, vel: 0.82 },   // F#5
        { t: 26.5, div: 'great', midi: 76, dur: 0.25, vel: 0.80 },  // E5
        { t: 26.75, div: 'great', midi: 75, dur: 0.25, vel: 0.78 }, // D#5
        { t: 27.0, div: 'great', midi: 73, dur: 0.5, vel: 0.82 },   // C#5
        { t: 27.5, div: 'great', midi: 71, dur: 1.0, vel: 0.84 },   // B4

        // Answer in alto (dominant F#)
        { t: 28.5, div: 'swell', midi: 66, dur: 0.5, vel: 0.78 },   // F#4
        { t: 29.0, div: 'swell', midi: 70, dur: 0.5, vel: 0.76 },   // A#4
        { t: 29.5, div: 'swell', midi: 73, dur: 0.5, vel: 0.78 },   // C#5
        { t: 30.0, div: 'swell', midi: 71, dur: 0.25, vel: 0.76 },  // B4
        { t: 30.25, div: 'swell', midi: 70, dur: 0.25, vel: 0.74 }, // A#4
        { t: 30.5, div: 'swell', midi: 68, dur: 0.5, vel: 0.78 },   // G#4
        { t: 31.0, div: 'swell', midi: 66, dur: 1.0, vel: 0.80 },   // F#4
        // Countersubject in soprano
        { t: 28.5, div: 'great', midi: 78, dur: 0.5, vel: 0.75 },   // F#5
        { t: 29.0, div: 'great', midi: 76, dur: 0.5, vel: 0.73 },   // E5
        { t: 29.5, div: 'great', midi: 75, dur: 0.5, vel: 0.75 },   // D#5
        { t: 30.0, div: 'great', midi: 73, dur: 0.5, vel: 0.73 },   // C#5
        { t: 30.5, div: 'great', midi: 71, dur: 0.5, vel: 0.75 },   // B4
        { t: 31.0, div: 'great', midi: 73, dur: 0.5, vel: 0.77 },   // C#5

        // Tenor entry
        { t: 32.0, div: 'swell', midi: 59, dur: 0.5, vel: 0.78 },   // B3
        { t: 32.5, div: 'swell', midi: 63, dur: 0.5, vel: 0.76 },   // D#4
        { t: 33.0, div: 'swell', midi: 66, dur: 0.5, vel: 0.78 },   // F#4
        { t: 33.5, div: 'swell', midi: 64, dur: 0.25, vel: 0.76 },  // E4
        { t: 33.75, div: 'swell', midi: 63, dur: 0.25, vel: 0.74 }, // D#4
        { t: 34.0, div: 'swell', midi: 61, dur: 0.5, vel: 0.78 },   // C#4
        { t: 34.5, div: 'swell', midi: 59, dur: 1.0, vel: 0.80 },   // B3
        // Other voices continue
        { t: 32.0, div: 'great', midi: 71, dur: 1.0, vel: 0.75 },   // B4
        { t: 33.0, div: 'great', midi: 75, dur: 1.0, vel: 0.77 },   // D#5
        { t: 34.0, div: 'great', midi: 73, dur: 1.5, vel: 0.75 },   // C#5

        // Pedal entry (bass)
        { t: 35.5, div: 'pedal', midi: 47, dur: 0.5, vel: 0.88 },   // B2
        { t: 36.0, div: 'pedal', midi: 51, dur: 0.5, vel: 0.86 },   // D#3
        { t: 36.5, div: 'pedal', midi: 54, dur: 0.5, vel: 0.88 },   // F#3
        { t: 37.0, div: 'pedal', midi: 52, dur: 0.25, vel: 0.86 },  // E3
        { t: 37.25, div: 'pedal', midi: 51, dur: 0.25, vel: 0.84 }, // D#3
        { t: 37.5, div: 'pedal', midi: 49, dur: 0.5, vel: 0.88 },   // C#3
        { t: 38.0, div: 'pedal', midi: 47, dur: 1.0, vel: 0.90 },   // B2
        // Upper voices in free counterpoint
        { t: 35.5, div: 'great', midi: 71, dur: 1.0, vel: 0.80 },   // B4
        { t: 36.5, div: 'great', midi: 75, dur: 1.0, vel: 0.82 },   // D#5
        { t: 37.5, div: 'great', midi: 78, dur: 1.5, vel: 0.80 },   // F#5
        { t: 35.5, div: 'swell', midi: 63, dur: 1.0, vel: 0.73 },   // D#4
        { t: 36.5, div: 'swell', midi: 66, dur: 1.0, vel: 0.75 },   // F#4
        { t: 37.5, div: 'swell', midi: 68, dur: 1.5, vel: 0.73 },   // G#4

        // m.20-22: Episode - modulating, tonal side-slips
        { t: 39.0, div: 'great', midi: 75, dur: 0.5, vel: 0.82 },   // D#5
        { t: 39.5, div: 'great', midi: 78, dur: 0.5, vel: 0.84 },   // F#5
        { t: 40.0, div: 'great', midi: 76, dur: 0.5, vel: 0.82 },   // E5
        { t: 40.5, div: 'great', midi: 73, dur: 0.5, vel: 0.84 },   // C#5
        { t: 39.0, div: 'swell', midi: 63, dur: 0.5, vel: 0.75 },   // D#4
        { t: 39.5, div: 'swell', midi: 66, dur: 0.5, vel: 0.77 },   // F#4
        { t: 40.0, div: 'swell', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 40.5, div: 'swell', midi: 61, dur: 0.5, vel: 0.77 },   // C#4
        { t: 39.0, div: 'pedal', midi: 51, dur: 1.0, vel: 0.86 },   // D#3
        { t: 40.0, div: 'pedal', midi: 49, dur: 1.0, vel: 0.87 },   // C#3

        // Stretto passage
        { t: 41.0, div: 'great', midi: 71, dur: 0.5, vel: 0.85 },   // B4
        { t: 41.5, div: 'great', midi: 75, dur: 0.5, vel: 0.87 },   // D#5
        { t: 41.25, div: 'swell', midi: 66, dur: 0.5, vel: 0.78 },  // F#4
        { t: 41.75, div: 'swell', midi: 70, dur: 0.5, vel: 0.80 },  // A#4
        { t: 42.0, div: 'great', midi: 78, dur: 0.5, vel: 0.89 },   // F#5
        { t: 42.0, div: 'swell', midi: 73, dur: 0.5, vel: 0.82 },   // C#5
        { t: 42.5, div: 'great', midi: 76, dur: 0.25, vel: 0.87 },  // E5
        { t: 42.75, div: 'great', midi: 75, dur: 0.25, vel: 0.85 }, // D#5
        { t: 43.0, div: 'great', midi: 73, dur: 1.0, vel: 0.89 },   // C#5
        { t: 42.5, div: 'swell', midi: 71, dur: 0.5, vel: 0.80 },   // B4
        { t: 43.0, div: 'swell', midi: 68, dur: 1.0, vel: 0.82 },   // G#4
        { t: 41.0, div: 'pedal', midi: 47, dur: 2.0, vel: 0.88 },   // B2
        { t: 43.0, div: 'pedal', midi: 44, dur: 1.0, vel: 0.89 },   // G#2

        // ===== SECTION 3: Stringendo - Coda (blazing carillonnade) =====
        // Double ff climax, canon between treble and pedal
        // Treble: subject in semiquavers
        { t: 44.0, div: 'great', midi: 71, dur: 0.25, vel: 0.95 },  // B4
        { t: 44.25, div: 'great', midi: 75, dur: 0.25, vel: 0.93 }, // D#5
        { t: 44.5, div: 'great', midi: 78, dur: 0.25, vel: 0.95 },  // F#5
        { t: 44.75, div: 'great', midi: 83, dur: 0.25, vel: 0.97 }, // B5
        { t: 45.0, div: 'great', midi: 81, dur: 0.12, vel: 0.95 },  // A5
        { t: 45.12, div: 'great', midi: 80, dur: 0.12, vel: 0.93 }, // G#5
        { t: 45.25, div: 'great', midi: 78, dur: 0.25, vel: 0.95 }, // F#5
        { t: 45.5, div: 'great', midi: 75, dur: 0.5, vel: 0.97 },   // D#5
        // Pedal: augmentation
        { t: 44.0, div: 'pedal', midi: 47, dur: 0.5, vel: 0.96 },   // B2
        { t: 44.5, div: 'pedal', midi: 51, dur: 0.5, vel: 0.94 },   // D#3
        { t: 45.0, div: 'pedal', midi: 54, dur: 0.5, vel: 0.96 },   // F#3
        { t: 45.5, div: 'pedal', midi: 52, dur: 0.25, vel: 0.94 },  // E3
        { t: 45.75, div: 'pedal', midi: 51, dur: 0.25, vel: 0.92 }, // D#3
        // Swell: full chords
        { t: 44.0, div: 'swell', midi: 63, dur: 1.0, vel: 0.88 },   // D#4
        { t: 44.0, div: 'swell', midi: 66, dur: 1.0, vel: 0.86 },   // F#4
        { t: 45.0, div: 'swell', midi: 64, dur: 1.0, vel: 0.88 },   // E4
        { t: 45.0, div: 'swell', midi: 68, dur: 1.0, vel: 0.86 },   // G#4

        // Carillonnade continues
        { t: 46.0, div: 'great', midi: 73, dur: 0.25, vel: 0.96 },  // C#5
        { t: 46.25, div: 'great', midi: 75, dur: 0.25, vel: 0.94 }, // D#5
        { t: 46.5, div: 'great', midi: 78, dur: 0.25, vel: 0.96 },  // F#5
        { t: 46.75, div: 'great', midi: 75, dur: 0.25, vel: 0.94 }, // D#5
        { t: 47.0, div: 'great', midi: 71, dur: 0.25, vel: 0.96 },  // B4
        { t: 47.25, div: 'great', midi: 75, dur: 0.25, vel: 0.98 }, // D#5
        { t: 47.5, div: 'great', midi: 78, dur: 0.25, vel: 0.96 },  // F#5
        { t: 47.75, div: 'great', midi: 83, dur: 0.25, vel: 0.94 }, // B5
        { t: 46.0, div: 'pedal', midi: 49, dur: 1.0, vel: 0.95 },   // C#3
        { t: 47.0, div: 'pedal', midi: 47, dur: 1.0, vel: 0.96 },   // B2
        { t: 46.0, div: 'swell', midi: 61, dur: 1.0, vel: 0.88 },   // C#4
        { t: 46.0, div: 'swell', midi: 66, dur: 1.0, vel: 0.86 },   // F#4
        { t: 47.0, div: 'swell', midi: 63, dur: 1.0, vel: 0.88 },   // D#4
        { t: 47.0, div: 'swell', midi: 66, dur: 1.0, vel: 0.86 },   // F#4

        // Final measures - blazing B major
        { t: 48.0, div: 'great', midi: 83, dur: 0.12, vel: 0.98 },  // B5
        { t: 48.12, div: 'great', midi: 78, dur: 0.12, vel: 0.96 }, // F#5
        { t: 48.24, div: 'great', midi: 83, dur: 0.12, vel: 0.98 }, // B5
        { t: 48.36, div: 'great', midi: 87, dur: 0.12, vel: 0.99 }, // D#6
        { t: 48.48, div: 'great', midi: 83, dur: 0.12, vel: 0.97 }, // B5
        { t: 48.6, div: 'great', midi: 78, dur: 0.12, vel: 0.95 },  // F#5
        { t: 48.72, div: 'great', midi: 75, dur: 0.12, vel: 0.97 }, // D#5
        { t: 48.84, div: 'great', midi: 78, dur: 0.12, vel: 0.99 }, // F#5
        { t: 48.0, div: 'pedal', midi: 47, dur: 1.0, vel: 0.97 },   // B2
        { t: 48.0, div: 'swell', midi: 63, dur: 1.0, vel: 0.90 },   // D#4
        { t: 48.0, div: 'swell', midi: 66, dur: 1.0, vel: 0.88 },   // F#4
        { t: 48.0, div: 'swell', midi: 71, dur: 1.0, vel: 0.90 },   // B4

        // FINAL B MAJOR CHORD - fff, full organ
        { t: 49.0, div: 'great', midi: 59, dur: 4.0, vel: 0.99 },   // B3
        { t: 49.0, div: 'great', midi: 63, dur: 4.0, vel: 0.97 },   // D#4
        { t: 49.0, div: 'great', midi: 66, dur: 4.0, vel: 0.97 },   // F#4
        { t: 49.0, div: 'great', midi: 71, dur: 4.0, vel: 0.99 },   // B4
        { t: 49.0, div: 'swell', midi: 75, dur: 4.0, vel: 0.93 },   // D#5
        { t: 49.0, div: 'swell', midi: 78, dur: 4.0, vel: 0.93 },   // F#5
        { t: 49.0, div: 'swell', midi: 83, dur: 4.0, vel: 0.93 },   // B5
        { t: 49.0, div: 'pedal', midi: 47, dur: 5.0, vel: 0.96 },   // B2
        { t: 49.0, div: 'pedal', midi: 35, dur: 5.0, vel: 0.93 },   // B1
    ]
};

// ============================================================
// 5. Widor - Allegro from Symphony No. 6 in G minor, Op. 42/2
// ============================================================
// First movement of the Symphony No. 6 (premiered 1878 at the
// Trocadéro Cavaillé-Coll inauguration). Opens with an aggressive
// march theme contrasted with quicksilver streams of triplets.
// Theme and variations structure maintaining grandeur and nobility.
// G minor with bold, declamatory character.
// ============================================================

const PIECE_WIDOR_ALLEGRO6 = {
    title: "Allegro from Symphony No. 6",
    composer: "Charles-Marie Widor",
    catalog: "Op. 42 No. 2",
    key: "G minor",
    tempo: 108,
    tempoChanges: [
        { t: 0, tempo: 108, label: "Allegro" },
        { t: 40, tempo: 96, label: "Più tranquillo" },
        { t: 60, tempo: 116, label: "Animato" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-clarinet8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== SECTION 1: Allegro - Aggressive march theme in G minor =====
        // m.1: Bold opening - G minor chord, marcato, ff
        { t: 0, div: 'great', midi: 55, dur: 1.5, vel: 0.95 },    // G3
        { t: 0, div: 'great', midi: 58, dur: 1.5, vel: 0.93 },    // Bb3
        { t: 0, div: 'great', midi: 62, dur: 1.5, vel: 0.93 },    // D4
        { t: 0, div: 'great', midi: 67, dur: 1.5, vel: 0.95 },    // G4
        { t: 0, div: 'pedal', midi: 43, dur: 1.5, vel: 0.92 },    // G2
        { t: 0, div: 'pedal', midi: 31, dur: 1.5, vel: 0.88 },    // G1

        // m.1 beat 2: March rhythm - dotted figure
        { t: 1.5, div: 'great', midi: 70, dur: 0.75, vel: 0.96 },  // Bb4 (dotted)
        { t: 1.5, div: 'great', midi: 67, dur: 0.75, vel: 0.94 },  // G4
        { t: 1.5, div: 'great', midi: 62, dur: 0.75, vel: 0.94 },  // D4
        { t: 2.25, div: 'great', midi: 69, dur: 0.25, vel: 0.93 }, // A4 (short)
        { t: 2.25, div: 'great', midi: 65, dur: 0.25, vel: 0.91 }, // F4
        { t: 1.5, div: 'pedal', midi: 43, dur: 1.0, vel: 0.90 },   // G2

        // m.2: Theme continues
        { t: 2.5, div: 'great', midi: 70, dur: 1.5, vel: 0.96 },   // Bb4
        { t: 2.5, div: 'great', midi: 65, dur: 1.5, vel: 0.94 },   // F4
        { t: 2.5, div: 'great', midi: 62, dur: 1.5, vel: 0.94 },   // D4
        { t: 2.5, div: 'pedal', midi: 46, dur: 1.5, vel: 0.92 },   // Bb2

        { t: 4.0, div: 'great', midi: 69, dur: 0.75, vel: 0.95 },  // A4
        { t: 4.0, div: 'great', midi: 65, dur: 0.75, vel: 0.93 },  // F4
        { t: 4.0, div: 'great', midi: 60, dur: 0.75, vel: 0.93 },  // C4
        { t: 4.75, div: 'great', midi: 67, dur: 0.25, vel: 0.92 }, // G4
        { t: 4.75, div: 'great', midi: 62, dur: 0.25, vel: 0.90 }, // D4
        { t: 4.0, div: 'pedal', midi: 41, dur: 1.0, vel: 0.90 },   // F2

        // m.3: Cadential G minor
        { t: 5.0, div: 'great', midi: 67, dur: 2.0, vel: 0.97 },   // G4
        { t: 5.0, div: 'great', midi: 62, dur: 2.0, vel: 0.95 },   // D4
        { t: 5.0, div: 'great', midi: 58, dur: 2.0, vel: 0.95 },   // Bb3
        { t: 5.0, div: 'great', midi: 55, dur: 2.0, vel: 0.93 },   // G3
        { t: 5.0, div: 'pedal', midi: 43, dur: 2.5, vel: 0.93 },   // G2
        { t: 5.0, div: 'pedal', midi: 31, dur: 2.5, vel: 0.88 },   // G1

        // m.4-5: Quicksilver triplet streams on swell
        // Triplet figuration: G minor arpeggios
        { t: 7.5, div: 'swell', midi: 67, dur: 0.15, vel: 0.82 },  // G4
        { t: 7.67, div: 'swell', midi: 70, dur: 0.15, vel: 0.80 }, // Bb4
        { t: 7.84, div: 'swell', midi: 74, dur: 0.15, vel: 0.82 }, // D5
        { t: 8.01, div: 'swell', midi: 79, dur: 0.15, vel: 0.84 }, // G5
        { t: 8.18, div: 'swell', midi: 74, dur: 0.15, vel: 0.82 }, // D5
        { t: 8.35, div: 'swell', midi: 70, dur: 0.15, vel: 0.80 }, // Bb4
        { t: 7.5, div: 'pedal', midi: 43, dur: 1.0, vel: 0.78 },   // G2

        { t: 8.52, div: 'swell', midi: 65, dur: 0.15, vel: 0.82 }, // F4
        { t: 8.69, div: 'swell', midi: 69, dur: 0.15, vel: 0.80 }, // A4
        { t: 8.86, div: 'swell', midi: 72, dur: 0.15, vel: 0.82 }, // C5
        { t: 9.03, div: 'swell', midi: 77, dur: 0.15, vel: 0.84 }, // F5
        { t: 9.2,  div: 'swell', midi: 72, dur: 0.15, vel: 0.82 }, // C5
        { t: 9.37, div: 'swell', midi: 69, dur: 0.15, vel: 0.80 }, // A4
        { t: 8.52, div: 'pedal', midi: 41, dur: 1.0, vel: 0.78 },  // F2

        // More triplets through Eb major
        { t: 9.54, div: 'swell', midi: 63, dur: 0.15, vel: 0.83 }, // Eb4
        { t: 9.71, div: 'swell', midi: 67, dur: 0.15, vel: 0.81 }, // G4
        { t: 9.88, div: 'swell', midi: 70, dur: 0.15, vel: 0.83 }, // Bb4
        { t: 10.05, div: 'swell', midi: 75, dur: 0.15, vel: 0.85 },// Eb5
        { t: 10.22, div: 'swell', midi: 70, dur: 0.15, vel: 0.83 },// Bb4
        { t: 10.39, div: 'swell', midi: 67, dur: 0.15, vel: 0.81 },// G4
        { t: 9.54, div: 'pedal', midi: 39, dur: 1.0, vel: 0.78 },  // Eb2

        // D major (dominant) triplets
        { t: 10.56, div: 'swell', midi: 62, dur: 0.15, vel: 0.84 },// D4
        { t: 10.73, div: 'swell', midi: 66, dur: 0.15, vel: 0.82 },// F#4
        { t: 10.9,  div: 'swell', midi: 69, dur: 0.15, vel: 0.84 },// A4
        { t: 11.07, div: 'swell', midi: 74, dur: 0.15, vel: 0.86 },// D5
        { t: 11.24, div: 'swell', midi: 69, dur: 0.15, vel: 0.84 },// A4
        { t: 11.41, div: 'swell', midi: 66, dur: 0.15, vel: 0.82 },// F#4
        { t: 10.56, div: 'pedal', midi: 38, dur: 1.5, vel: 0.80 }, // D2

        // m.6-7: March theme returns, now with triplet accompaniment
        { t: 12.0, div: 'great', midi: 55, dur: 1.5, vel: 0.96 },  // G3
        { t: 12.0, div: 'great', midi: 58, dur: 1.5, vel: 0.94 },  // Bb3
        { t: 12.0, div: 'great', midi: 62, dur: 1.5, vel: 0.94 },  // D4
        { t: 12.0, div: 'great', midi: 67, dur: 1.5, vel: 0.96 },  // G4
        { t: 12.0, div: 'pedal', midi: 43, dur: 1.5, vel: 0.93 },  // G2
        // Swell triplets underneath
        { t: 12.0, div: 'swell', midi: 70, dur: 0.15, vel: 0.78 }, // Bb4
        { t: 12.17, div: 'swell', midi: 74, dur: 0.15, vel: 0.76 },// D5
        { t: 12.34, div: 'swell', midi: 79, dur: 0.15, vel: 0.78 },// G5
        { t: 12.51, div: 'swell', midi: 74, dur: 0.15, vel: 0.76 },// D5
        { t: 12.68, div: 'swell', midi: 70, dur: 0.15, vel: 0.78 },// Bb4
        { t: 12.85, div: 'swell', midi: 74, dur: 0.15, vel: 0.76 },// D5

        // March continues with dotted rhythm
        { t: 13.5, div: 'great', midi: 70, dur: 0.75, vel: 0.97 }, // Bb4
        { t: 13.5, div: 'great', midi: 67, dur: 0.75, vel: 0.95 }, // G4
        { t: 14.25, div: 'great', midi: 69, dur: 0.25, vel: 0.94 },// A4
        { t: 14.25, div: 'great', midi: 65, dur: 0.25, vel: 0.92 },// F4
        { t: 13.5, div: 'pedal', midi: 43, dur: 1.0, vel: 0.91 },  // G2
        // Swell triplets continue
        { t: 13.02, div: 'swell', midi: 79, dur: 0.15, vel: 0.78 },// G5
        { t: 13.19, div: 'swell', midi: 74, dur: 0.15, vel: 0.76 },// D5
        { t: 13.36, div: 'swell', midi: 70, dur: 0.15, vel: 0.78 },// Bb4
        { t: 13.53, div: 'swell', midi: 74, dur: 0.15, vel: 0.76 },// D5
        { t: 13.7,  div: 'swell', midi: 79, dur: 0.15, vel: 0.78 },// G5
        { t: 13.87, div: 'swell', midi: 74, dur: 0.15, vel: 0.76 },// D5

        // m.8-9: Through Cm and D major
        { t: 14.5, div: 'great', midi: 72, dur: 1.5, vel: 0.96 },  // C5
        { t: 14.5, div: 'great', midi: 67, dur: 1.5, vel: 0.94 },  // G4
        { t: 14.5, div: 'great', midi: 63, dur: 1.5, vel: 0.94 },  // Eb4
        { t: 14.5, div: 'great', midi: 60, dur: 1.5, vel: 0.92 },  // C4
        { t: 14.5, div: 'pedal', midi: 48, dur: 1.5, vel: 0.92 },  // C3

        { t: 16.0, div: 'great', midi: 74, dur: 0.75, vel: 0.97 }, // D5
        { t: 16.0, div: 'great', midi: 69, dur: 0.75, vel: 0.95 }, // A4
        { t: 16.0, div: 'great', midi: 66, dur: 0.75, vel: 0.95 }, // F#4
        { t: 16.75, div: 'great', midi: 72, dur: 0.25, vel: 0.94 },// C5
        { t: 16.0, div: 'pedal', midi: 38, dur: 1.0, vel: 0.92 },  // D2

        // m.10: Big G minor cadence
        { t: 17.0, div: 'great', midi: 67, dur: 2.0, vel: 0.98 },  // G4
        { t: 17.0, div: 'great', midi: 62, dur: 2.0, vel: 0.96 },  // D4
        { t: 17.0, div: 'great', midi: 58, dur: 2.0, vel: 0.96 },  // Bb3
        { t: 17.0, div: 'great', midi: 55, dur: 2.0, vel: 0.94 },  // G3
        { t: 17.0, div: 'swell', midi: 70, dur: 2.0, vel: 0.90 },  // Bb4
        { t: 17.0, div: 'swell', midi: 74, dur: 2.0, vel: 0.90 },  // D5
        { t: 17.0, div: 'pedal', midi: 43, dur: 2.5, vel: 0.94 },  // G2
        { t: 17.0, div: 'pedal', midi: 31, dur: 2.5, vel: 0.90 },  // G1

        // m.11-14: Variation 1 - march theme decorated
        { t: 19.5, div: 'great', midi: 67, dur: 0.5, vel: 0.92 },  // G4
        { t: 20.0, div: 'great', midi: 70, dur: 0.5, vel: 0.94 },  // Bb4
        { t: 20.5, div: 'great', midi: 74, dur: 0.5, vel: 0.96 },  // D5
        { t: 21.0, div: 'great', midi: 72, dur: 0.75, vel: 0.94 }, // C5
        { t: 21.75, div: 'great', midi: 70, dur: 0.25, vel: 0.92 },// Bb4
        { t: 19.5, div: 'swell', midi: 55, dur: 0.5, vel: 0.78 },  // G3
        { t: 20.0, div: 'swell', midi: 58, dur: 0.5, vel: 0.80 },  // Bb3
        { t: 20.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.82 },  // D4
        { t: 21.0, div: 'swell', midi: 60, dur: 1.0, vel: 0.80 },  // C4
        { t: 19.5, div: 'pedal', midi: 43, dur: 2.0, vel: 0.88 },  // G2

        { t: 22.0, div: 'great', midi: 69, dur: 0.5, vel: 0.93 },  // A4
        { t: 22.5, div: 'great', midi: 67, dur: 0.5, vel: 0.91 },  // G4
        { t: 23.0, div: 'great', midi: 65, dur: 0.5, vel: 0.93 },  // F4
        { t: 23.5, div: 'great', midi: 67, dur: 1.0, vel: 0.95 },  // G4
        { t: 22.0, div: 'swell', midi: 57, dur: 0.5, vel: 0.78 },  // A3
        { t: 22.5, div: 'swell', midi: 55, dur: 0.5, vel: 0.76 },  // G3
        { t: 23.0, div: 'swell', midi: 53, dur: 0.5, vel: 0.78 },  // F3
        { t: 23.5, div: 'swell', midi: 55, dur: 1.0, vel: 0.80 },  // G3
        { t: 22.0, div: 'pedal', midi: 41, dur: 1.5, vel: 0.86 },  // F2
        { t: 23.5, div: 'pedal', midi: 43, dur: 1.0, vel: 0.88 },  // G2

        // m.15-18: Variation continues - more elaborate
        { t: 24.5, div: 'great', midi: 70, dur: 0.15, vel: 0.90 }, // Bb4
        { t: 24.67, div: 'great', midi: 74, dur: 0.15, vel: 0.88 },// D5
        { t: 24.84, div: 'great', midi: 79, dur: 0.15, vel: 0.90 },// G5
        { t: 25.01, div: 'great', midi: 74, dur: 0.15, vel: 0.88 },// D5
        { t: 25.18, div: 'great', midi: 70, dur: 0.15, vel: 0.90 },// Bb4
        { t: 25.35, div: 'great', midi: 67, dur: 0.15, vel: 0.88 },// G4
        { t: 24.5, div: 'swell', midi: 55, dur: 1.0, vel: 0.76 },  // G3
        { t: 24.5, div: 'swell', midi: 58, dur: 1.0, vel: 0.74 },  // Bb3
        { t: 24.5, div: 'swell', midi: 62, dur: 1.0, vel: 0.74 },  // D4
        { t: 24.5, div: 'pedal', midi: 43, dur: 1.0, vel: 0.86 },  // G2

        { t: 25.52, div: 'great', midi: 65, dur: 0.15, vel: 0.90 },// F4
        { t: 25.69, div: 'great', midi: 69, dur: 0.15, vel: 0.88 },// A4
        { t: 25.86, div: 'great', midi: 72, dur: 0.15, vel: 0.90 },// C5
        { t: 26.03, div: 'great', midi: 77, dur: 0.15, vel: 0.92 },// F5
        { t: 26.2,  div: 'great', midi: 72, dur: 0.15, vel: 0.90 },// C5
        { t: 26.37, div: 'great', midi: 69, dur: 0.15, vel: 0.88 },// A4
        { t: 25.52, div: 'pedal', midi: 41, dur: 1.0, vel: 0.86 }, // F2

        // Eb major passage
        { t: 26.54, div: 'great', midi: 63, dur: 0.15, vel: 0.91 },// Eb4
        { t: 26.71, div: 'great', midi: 67, dur: 0.15, vel: 0.89 },// G4
        { t: 26.88, div: 'great', midi: 70, dur: 0.15, vel: 0.91 },// Bb4
        { t: 27.05, div: 'great', midi: 75, dur: 0.15, vel: 0.93 },// Eb5
        { t: 27.22, div: 'great', midi: 70, dur: 0.15, vel: 0.91 },// Bb4
        { t: 27.39, div: 'great', midi: 67, dur: 0.15, vel: 0.89 },// G4
        { t: 26.54, div: 'pedal', midi: 39, dur: 1.0, vel: 0.87 }, // Eb2

        // D major chord
        { t: 27.56, div: 'great', midi: 66, dur: 1.5, vel: 0.95 }, // F#4
        { t: 27.56, div: 'great', midi: 69, dur: 1.5, vel: 0.93 }, // A4
        { t: 27.56, div: 'great', midi: 74, dur: 1.5, vel: 0.93 }, // D5
        { t: 27.56, div: 'swell', midi: 62, dur: 1.5, vel: 0.82 }, // D4
        { t: 27.56, div: 'pedal', midi: 38, dur: 2.0, vel: 0.90 }, // D2

        // m.19-20: Big G minor cadence chord
        { t: 29.5, div: 'great', midi: 67, dur: 2.5, vel: 0.97 },  // G4
        { t: 29.5, div: 'great', midi: 62, dur: 2.5, vel: 0.95 },  // D4
        { t: 29.5, div: 'great', midi: 58, dur: 2.5, vel: 0.95 },  // Bb3
        { t: 29.5, div: 'great', midi: 55, dur: 2.5, vel: 0.93 },  // G3
        { t: 29.5, div: 'swell', midi: 70, dur: 2.5, vel: 0.88 },  // Bb4
        { t: 29.5, div: 'swell', midi: 74, dur: 2.5, vel: 0.88 },  // D5
        { t: 29.5, div: 'swell', midi: 79, dur: 2.5, vel: 0.88 },  // G5
        { t: 29.5, div: 'pedal', midi: 43, dur: 3.0, vel: 0.93 },  // G2
        { t: 29.5, div: 'pedal', midi: 31, dur: 3.0, vel: 0.88 },  // G1

        // m.21-26: Variation 2 - polyphonic, building intensity
        // Tenor voice introduces new countermelody
        { t: 32.5, div: 'swell', midi: 62, dur: 1.0, vel: 0.78 },  // D4
        { t: 33.5, div: 'swell', midi: 63, dur: 1.0, vel: 0.80 },  // Eb4
        { t: 34.5, div: 'swell', midi: 65, dur: 1.0, vel: 0.82 },  // F4
        { t: 35.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.84 },  // G4
        // Soprano: march theme
        { t: 32.5, div: 'great', midi: 67, dur: 1.0, vel: 0.90 },  // G4
        { t: 33.5, div: 'great', midi: 70, dur: 0.75, vel: 0.92 }, // Bb4
        { t: 34.25, div: 'great', midi: 69, dur: 0.25, vel: 0.90 },// A4
        { t: 34.5, div: 'great', midi: 70, dur: 1.0, vel: 0.93 },  // Bb4
        { t: 35.5, div: 'great', midi: 74, dur: 1.5, vel: 0.95 },  // D5
        { t: 32.5, div: 'pedal', midi: 43, dur: 2.0, vel: 0.86 },  // G2
        { t: 34.5, div: 'pedal', midi: 46, dur: 1.0, vel: 0.84 },  // Bb2
        { t: 35.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.86 },  // D2

        // Intensification
        { t: 37.0, div: 'great', midi: 72, dur: 0.75, vel: 0.96 }, // C5
        { t: 37.75, div: 'great', midi: 70, dur: 0.25, vel: 0.94 },// Bb4
        { t: 38.0, div: 'great', midi: 69, dur: 1.0, vel: 0.95 },  // A4
        { t: 39.0, div: 'great', midi: 67, dur: 1.0, vel: 0.97 },  // G4
        { t: 37.0, div: 'swell', midi: 60, dur: 0.75, vel: 0.82 }, // C4
        { t: 37.75, div: 'swell', midi: 58, dur: 0.25, vel: 0.80 },// Bb3
        { t: 38.0, div: 'swell', midi: 57, dur: 1.0, vel: 0.81 },  // A3
        { t: 39.0, div: 'swell', midi: 55, dur: 1.0, vel: 0.83 },  // G3
        { t: 37.0, div: 'pedal', midi: 48, dur: 1.0, vel: 0.86 },  // C3
        { t: 38.0, div: 'pedal', midi: 41, dur: 1.0, vel: 0.87 },  // F2
        { t: 39.0, div: 'pedal', midi: 43, dur: 1.0, vel: 0.88 },  // G2

        // ===== SECTION 2: Più tranquillo - Lyrical interlude =====
        // Theme transformed, gentle on swell with voix celeste
        { t: 40.0, div: 'swell', midi: 70, dur: 2.5, vel: 0.65 },  // Bb4
        { t: 40.0, div: 'swell', midi: 67, dur: 2.5, vel: 0.60 },  // G4
        { t: 40.0, div: 'swell', midi: 62, dur: 2.5, vel: 0.60 },  // D4
        { t: 40.0, div: 'pedal', midi: 43, dur: 3.0, vel: 0.48 },  // G2

        { t: 42.5, div: 'swell', midi: 72, dur: 2.0, vel: 0.67 },  // C5
        { t: 42.5, div: 'swell', midi: 67, dur: 2.0, vel: 0.62 },  // G4
        { t: 42.5, div: 'swell', midi: 63, dur: 2.0, vel: 0.62 },  // Eb4
        { t: 42.5, div: 'pedal', midi: 48, dur: 2.5, vel: 0.48 },  // C3

        { t: 44.5, div: 'swell', midi: 74, dur: 2.5, vel: 0.69 },  // D5
        { t: 44.5, div: 'swell', midi: 69, dur: 2.5, vel: 0.64 },  // A4
        { t: 44.5, div: 'swell', midi: 66, dur: 2.5, vel: 0.64 },  // F#4
        { t: 44.5, div: 'pedal', midi: 38, dur: 3.0, vel: 0.50 },  // D2

        { t: 47.0, div: 'swell', midi: 70, dur: 2.0, vel: 0.67 },  // Bb4
        { t: 47.0, div: 'swell', midi: 65, dur: 2.0, vel: 0.62 },  // F4
        { t: 47.0, div: 'swell', midi: 62, dur: 2.0, vel: 0.62 },  // D4
        { t: 47.0, div: 'pedal', midi: 46, dur: 2.5, vel: 0.48 },  // Bb2

        { t: 49.0, div: 'swell', midi: 69, dur: 2.5, vel: 0.65 },  // A4
        { t: 49.0, div: 'swell', midi: 65, dur: 2.5, vel: 0.60 },  // F4
        { t: 49.0, div: 'swell', midi: 60, dur: 2.5, vel: 0.60 },  // C4
        { t: 49.0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.48 },  // F2

        { t: 51.5, div: 'swell', midi: 67, dur: 2.5, vel: 0.63 },  // G4
        { t: 51.5, div: 'swell', midi: 62, dur: 2.5, vel: 0.58 },  // D4
        { t: 51.5, div: 'swell', midi: 58, dur: 2.5, vel: 0.58 },  // Bb3
        { t: 51.5, div: 'pedal', midi: 43, dur: 3.0, vel: 0.48 },  // G2

        // Building back from lyrical to martial
        { t: 54.0, div: 'swell', midi: 69, dur: 2.0, vel: 0.70 },  // A4
        { t: 54.0, div: 'swell', midi: 65, dur: 2.0, vel: 0.65 },  // F4
        { t: 54.0, div: 'swell', midi: 62, dur: 2.0, vel: 0.65 },  // D4
        { t: 54.0, div: 'pedal', midi: 38, dur: 2.5, vel: 0.52 },  // D2

        { t: 56.0, div: 'swell', midi: 66, dur: 1.5, vel: 0.72 },  // F#4
        { t: 56.0, div: 'swell', midi: 62, dur: 1.5, vel: 0.67 },  // D4
        { t: 56.0, div: 'swell', midi: 57, dur: 1.5, vel: 0.67 },  // A3
        { t: 56.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.55 },  // D2

        // D major dominant chord, crescendo
        { t: 57.5, div: 'great', midi: 62, dur: 2.5, vel: 0.88 },  // D4
        { t: 57.5, div: 'great', midi: 66, dur: 2.5, vel: 0.86 },  // F#4
        { t: 57.5, div: 'great', midi: 69, dur: 2.5, vel: 0.86 },  // A4
        { t: 57.5, div: 'great', midi: 74, dur: 2.5, vel: 0.88 },  // D5
        { t: 57.5, div: 'swell', midi: 78, dur: 2.5, vel: 0.82 },  // F#5
        { t: 57.5, div: 'pedal', midi: 38, dur: 3.0, vel: 0.85 },  // D2
        { t: 57.5, div: 'pedal', midi: 26, dur: 3.0, vel: 0.80 },  // D1

        // ===== SECTION 3: Animato - Triumphant conclusion =====
        // March returns fortissimo with full organ
        { t: 60.0, div: 'great', midi: 55, dur: 1.5, vel: 0.98 },  // G3
        { t: 60.0, div: 'great', midi: 58, dur: 1.5, vel: 0.96 },  // Bb3
        { t: 60.0, div: 'great', midi: 62, dur: 1.5, vel: 0.96 },  // D4
        { t: 60.0, div: 'great', midi: 67, dur: 1.5, vel: 0.98 },  // G4
        { t: 60.0, div: 'swell', midi: 70, dur: 1.5, vel: 0.92 },  // Bb4
        { t: 60.0, div: 'swell', midi: 74, dur: 1.5, vel: 0.92 },  // D5
        { t: 60.0, div: 'pedal', midi: 43, dur: 1.5, vel: 0.95 },  // G2
        { t: 60.0, div: 'pedal', midi: 31, dur: 1.5, vel: 0.90 },  // G1

        // Dotted march rhythm - grander
        { t: 61.5, div: 'great', midi: 70, dur: 0.75, vel: 0.98 }, // Bb4
        { t: 61.5, div: 'great', midi: 67, dur: 0.75, vel: 0.96 }, // G4
        { t: 61.5, div: 'great', midi: 62, dur: 0.75, vel: 0.96 }, // D4
        { t: 62.25, div: 'great', midi: 69, dur: 0.25, vel: 0.96 },// A4
        { t: 62.25, div: 'great', midi: 65, dur: 0.25, vel: 0.94 },// F4
        { t: 61.5, div: 'pedal', midi: 43, dur: 1.0, vel: 0.93 },  // G2

        // Through Eb major
        { t: 62.5, div: 'great', midi: 75, dur: 1.5, vel: 0.98 },  // Eb5
        { t: 62.5, div: 'great', midi: 70, dur: 1.5, vel: 0.96 },  // Bb4
        { t: 62.5, div: 'great', midi: 67, dur: 1.5, vel: 0.96 },  // G4
        { t: 62.5, div: 'great', midi: 63, dur: 1.5, vel: 0.94 },  // Eb4
        { t: 62.5, div: 'pedal', midi: 39, dur: 1.5, vel: 0.93 },  // Eb2

        // Cm
        { t: 64.0, div: 'great', midi: 72, dur: 0.75, vel: 0.97 }, // C5
        { t: 64.0, div: 'great', midi: 67, dur: 0.75, vel: 0.95 }, // G4
        { t: 64.0, div: 'great', midi: 63, dur: 0.75, vel: 0.95 }, // Eb4
        { t: 64.0, div: 'great', midi: 60, dur: 0.75, vel: 0.93 }, // C4
        { t: 64.75, div: 'great', midi: 70, dur: 0.25, vel: 0.94 },// Bb4
        { t: 64.0, div: 'pedal', midi: 48, dur: 1.0, vel: 0.92 },  // C3

        // D major dominant - building to final cadence
        { t: 65.0, div: 'great', midi: 74, dur: 2.0, vel: 0.98 },  // D5
        { t: 65.0, div: 'great', midi: 69, dur: 2.0, vel: 0.96 },  // A4
        { t: 65.0, div: 'great', midi: 66, dur: 2.0, vel: 0.96 },  // F#4
        { t: 65.0, div: 'great', midi: 62, dur: 2.0, vel: 0.94 },  // D4
        { t: 65.0, div: 'swell', midi: 78, dur: 2.0, vel: 0.92 },  // F#5
        { t: 65.0, div: 'swell', midi: 81, dur: 2.0, vel: 0.92 },  // A5
        { t: 65.0, div: 'pedal', midi: 38, dur: 2.5, vel: 0.94 },  // D2
        { t: 65.0, div: 'pedal', midi: 26, dur: 2.5, vel: 0.90 },  // D1

        // Triplet flourish leading to final chord
        { t: 67.0, div: 'great', midi: 67, dur: 0.15, vel: 0.96 }, // G4
        { t: 67.17, div: 'great', midi: 70, dur: 0.15, vel: 0.94 },// Bb4
        { t: 67.34, div: 'great', midi: 74, dur: 0.15, vel: 0.96 },// D5
        { t: 67.51, div: 'great', midi: 79, dur: 0.15, vel: 0.98 },// G5
        { t: 67.68, div: 'great', midi: 82, dur: 0.15, vel: 0.99 },// Bb5
        { t: 67.85, div: 'great', midi: 79, dur: 0.15, vel: 0.97 },// G5
        { t: 67.0, div: 'pedal', midi: 43, dur: 1.0, vel: 0.94 },  // G2

        // FINAL G MINOR CHORD - fff, full organ
        { t: 68.0, div: 'great', midi: 55, dur: 5.0, vel: 0.99 },  // G3
        { t: 68.0, div: 'great', midi: 58, dur: 5.0, vel: 0.97 },  // Bb3
        { t: 68.0, div: 'great', midi: 62, dur: 5.0, vel: 0.97 },  // D4
        { t: 68.0, div: 'great', midi: 67, dur: 5.0, vel: 0.99 },  // G4
        { t: 68.0, div: 'swell', midi: 70, dur: 5.0, vel: 0.93 },  // Bb4
        { t: 68.0, div: 'swell', midi: 74, dur: 5.0, vel: 0.93 },  // D5
        { t: 68.0, div: 'swell', midi: 79, dur: 5.0, vel: 0.93 },  // G5
        { t: 68.0, div: 'pedal', midi: 43, dur: 6.0, vel: 0.96 },  // G2
        { t: 68.0, div: 'pedal', midi: 31, dur: 6.0, vel: 0.93 },  // G1
    ]
};