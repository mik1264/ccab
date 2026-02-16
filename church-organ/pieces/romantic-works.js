// Romantic-era organ works
// Encoded for Cathedral Grand organ simulator
// MIDI reference: C4=60, D4=62, E4=64, F4=65, G4=67, A4=69, Bb4=70, B4=71, C5=72

// ============================================================
// 1. Widor - Toccata from Symphony No. 5 in F major
// ============================================================
// The famous perpetual-motion toccata: RH plays continuous 16th-note
// arpeggios over F major harmony, LH plays syncopated chords,
// pedal carries the melody in long notes.
// Time signature: 4/4, each beat = 4 sixteenths (0.25 each)

const PIECE_WIDOR_TOCCATA = {
    title: "Toccata (Symphony No. 5)",
    composer: "Charles-Marie Widor",
    tempo: 132,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8'],
        swell: ['sw-gedeckt8', 'sw-principal4', 'sw-flute4'],
        choir: [],
        pedal: ['pd-principal16', 'pd-subbass16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ===== MEASURES 1-2: F major - RH arpeggios F-A-C pattern, LH chords, Pedal F =====
        // RH 16th-note arpeggios (Great) - measure 1 beat 1
        { t: 0, div: 'great', midi: 65, dur: 0.25 },     // F4
        { t: 0.25, div: 'great', midi: 69, dur: 0.25 },   // A4
        { t: 0.5, div: 'great', midi: 72, dur: 0.25 },    // C5
        { t: 0.75, div: 'great', midi: 77, dur: 0.25 },   // F5
        // beat 2
        { t: 1, div: 'great', midi: 72, dur: 0.25 },      // C5
        { t: 1.25, div: 'great', midi: 69, dur: 0.25 },   // A4
        { t: 1.5, div: 'great', midi: 72, dur: 0.25 },    // C5
        { t: 1.75, div: 'great', midi: 77, dur: 0.25 },   // F5
        // beat 3
        { t: 2, div: 'great', midi: 72, dur: 0.25 },      // C5
        { t: 2.25, div: 'great', midi: 69, dur: 0.25 },   // A4
        { t: 2.5, div: 'great', midi: 72, dur: 0.25 },    // C5
        { t: 2.75, div: 'great', midi: 77, dur: 0.25 },   // F5
        // beat 4
        { t: 3, div: 'great', midi: 72, dur: 0.25 },      // C5
        { t: 3.25, div: 'great', midi: 69, dur: 0.25 },   // A4
        { t: 3.5, div: 'great', midi: 72, dur: 0.25 },    // C5
        { t: 3.75, div: 'great', midi: 77, dur: 0.25 },   // F5

        // LH syncopated chords (Swell) - measure 1
        { t: 0, div: 'swell', midi: 60, dur: 0.75 },      // C4
        { t: 0, div: 'swell', midi: 65, dur: 0.75 },      // F4
        { t: 1, div: 'swell', midi: 60, dur: 0.75 },      // C4
        { t: 1, div: 'swell', midi: 65, dur: 0.75 },      // F4
        { t: 2, div: 'swell', midi: 60, dur: 0.75 },      // C4
        { t: 2, div: 'swell', midi: 65, dur: 0.75 },      // F4
        { t: 3, div: 'swell', midi: 60, dur: 0.75 },      // C4
        { t: 3, div: 'swell', midi: 65, dur: 0.75 },      // F4

        // Pedal - measure 1
        { t: 0, div: 'pedal', midi: 41, dur: 4 },          // F2

        // --- Measure 2: continue F major pattern ---
        // RH arpeggios
        { t: 4, div: 'great', midi: 65, dur: 0.25 },
        { t: 4.25, div: 'great', midi: 69, dur: 0.25 },
        { t: 4.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 4.75, div: 'great', midi: 77, dur: 0.25 },
        { t: 5, div: 'great', midi: 72, dur: 0.25 },
        { t: 5.25, div: 'great', midi: 69, dur: 0.25 },
        { t: 5.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 5.75, div: 'great', midi: 77, dur: 0.25 },
        { t: 6, div: 'great', midi: 72, dur: 0.25 },
        { t: 6.25, div: 'great', midi: 69, dur: 0.25 },
        { t: 6.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 6.75, div: 'great', midi: 77, dur: 0.25 },
        { t: 7, div: 'great', midi: 72, dur: 0.25 },
        { t: 7.25, div: 'great', midi: 69, dur: 0.25 },
        { t: 7.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 7.75, div: 'great', midi: 77, dur: 0.25 },
        // LH chords
        { t: 4, div: 'swell', midi: 60, dur: 0.75 },
        { t: 4, div: 'swell', midi: 65, dur: 0.75 },
        { t: 5, div: 'swell', midi: 60, dur: 0.75 },
        { t: 5, div: 'swell', midi: 65, dur: 0.75 },
        { t: 6, div: 'swell', midi: 60, dur: 0.75 },
        { t: 6, div: 'swell', midi: 65, dur: 0.75 },
        { t: 7, div: 'swell', midi: 60, dur: 0.75 },
        { t: 7, div: 'swell', midi: 65, dur: 0.75 },
        // Pedal
        { t: 4, div: 'pedal', midi: 53, dur: 4 },          // F3

        // ===== MEASURES 3-4: C major - arpeggios shift to C-E-G =====
        // RH arpeggios over C major
        { t: 8, div: 'great', midi: 64, dur: 0.25 },      // E4
        { t: 8.25, div: 'great', midi: 67, dur: 0.25 },   // G4
        { t: 8.5, div: 'great', midi: 72, dur: 0.25 },    // C5
        { t: 8.75, div: 'great', midi: 76, dur: 0.25 },   // E5
        { t: 9, div: 'great', midi: 72, dur: 0.25 },
        { t: 9.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 9.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 9.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 10, div: 'great', midi: 72, dur: 0.25 },
        { t: 10.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 10.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 10.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 11, div: 'great', midi: 72, dur: 0.25 },
        { t: 11.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 11.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 11.75, div: 'great', midi: 76, dur: 0.25 },
        // LH chords - C major
        { t: 8, div: 'swell', midi: 60, dur: 0.75 },      // C4
        { t: 8, div: 'swell', midi: 64, dur: 0.75 },      // E4
        { t: 9, div: 'swell', midi: 60, dur: 0.75 },
        { t: 9, div: 'swell', midi: 64, dur: 0.75 },
        { t: 10, div: 'swell', midi: 60, dur: 0.75 },
        { t: 10, div: 'swell', midi: 64, dur: 0.75 },
        { t: 11, div: 'swell', midi: 60, dur: 0.75 },
        { t: 11, div: 'swell', midi: 64, dur: 0.75 },
        // Pedal - E (3rd of C, descending bass line)
        { t: 8, div: 'pedal', midi: 52, dur: 4 },          // E3

        // Measure 4: C major continues
        { t: 12, div: 'great', midi: 64, dur: 0.25 },
        { t: 12.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 12.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 12.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 13, div: 'great', midi: 72, dur: 0.25 },
        { t: 13.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 13.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 13.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 14, div: 'great', midi: 72, dur: 0.25 },
        { t: 14.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 14.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 14.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 15, div: 'great', midi: 72, dur: 0.25 },
        { t: 15.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 15.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 15.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 12, div: 'swell', midi: 60, dur: 0.75 },
        { t: 12, div: 'swell', midi: 64, dur: 0.75 },
        { t: 13, div: 'swell', midi: 60, dur: 0.75 },
        { t: 13, div: 'swell', midi: 64, dur: 0.75 },
        { t: 14, div: 'swell', midi: 60, dur: 0.75 },
        { t: 14, div: 'swell', midi: 64, dur: 0.75 },
        { t: 15, div: 'swell', midi: 60, dur: 0.75 },
        { t: 15, div: 'swell', midi: 64, dur: 0.75 },
        { t: 12, div: 'pedal', midi: 48, dur: 4 },         // C3

        // ===== MEASURES 5-6: Dm - arpeggios D-F-A =====
        { t: 16, div: 'great', midi: 62, dur: 0.25 },     // D4
        { t: 16.25, div: 'great', midi: 65, dur: 0.25 },  // F4
        { t: 16.5, div: 'great', midi: 69, dur: 0.25 },   // A4
        { t: 16.75, div: 'great', midi: 74, dur: 0.25 },  // D5
        { t: 17, div: 'great', midi: 69, dur: 0.25 },
        { t: 17.25, div: 'great', midi: 65, dur: 0.25 },
        { t: 17.5, div: 'great', midi: 69, dur: 0.25 },
        { t: 17.75, div: 'great', midi: 74, dur: 0.25 },
        { t: 18, div: 'great', midi: 69, dur: 0.25 },
        { t: 18.25, div: 'great', midi: 65, dur: 0.25 },
        { t: 18.5, div: 'great', midi: 69, dur: 0.25 },
        { t: 18.75, div: 'great', midi: 74, dur: 0.25 },
        { t: 19, div: 'great', midi: 69, dur: 0.25 },
        { t: 19.25, div: 'great', midi: 65, dur: 0.25 },
        { t: 19.5, div: 'great', midi: 69, dur: 0.25 },
        { t: 19.75, div: 'great', midi: 74, dur: 0.25 },
        // LH
        { t: 16, div: 'swell', midi: 57, dur: 0.75 },     // A3
        { t: 16, div: 'swell', midi: 62, dur: 0.75 },     // D4
        { t: 17, div: 'swell', midi: 57, dur: 0.75 },
        { t: 17, div: 'swell', midi: 62, dur: 0.75 },
        { t: 18, div: 'swell', midi: 57, dur: 0.75 },
        { t: 18, div: 'swell', midi: 62, dur: 0.75 },
        { t: 19, div: 'swell', midi: 57, dur: 0.75 },
        { t: 19, div: 'swell', midi: 62, dur: 0.75 },
        { t: 16, div: 'pedal', midi: 50, dur: 4 },         // D3

        // Measure 6: Dm continues
        { t: 20, div: 'great', midi: 62, dur: 0.25 },
        { t: 20.25, div: 'great', midi: 65, dur: 0.25 },
        { t: 20.5, div: 'great', midi: 69, dur: 0.25 },
        { t: 20.75, div: 'great', midi: 74, dur: 0.25 },
        { t: 21, div: 'great', midi: 69, dur: 0.25 },
        { t: 21.25, div: 'great', midi: 65, dur: 0.25 },
        { t: 21.5, div: 'great', midi: 69, dur: 0.25 },
        { t: 21.75, div: 'great', midi: 74, dur: 0.25 },
        { t: 22, div: 'great', midi: 69, dur: 0.25 },
        { t: 22.25, div: 'great', midi: 65, dur: 0.25 },
        { t: 22.5, div: 'great', midi: 69, dur: 0.25 },
        { t: 22.75, div: 'great', midi: 74, dur: 0.25 },
        { t: 23, div: 'great', midi: 69, dur: 0.25 },
        { t: 23.25, div: 'great', midi: 65, dur: 0.25 },
        { t: 23.5, div: 'great', midi: 69, dur: 0.25 },
        { t: 23.75, div: 'great', midi: 74, dur: 0.25 },
        { t: 20, div: 'swell', midi: 57, dur: 0.75 },
        { t: 20, div: 'swell', midi: 62, dur: 0.75 },
        { t: 21, div: 'swell', midi: 57, dur: 0.75 },
        { t: 21, div: 'swell', midi: 62, dur: 0.75 },
        { t: 22, div: 'swell', midi: 57, dur: 0.75 },
        { t: 22, div: 'swell', midi: 62, dur: 0.75 },
        { t: 23, div: 'swell', midi: 57, dur: 0.75 },
        { t: 23, div: 'swell', midi: 62, dur: 0.75 },
        { t: 20, div: 'pedal', midi: 45, dur: 4 },         // A2

        // ===== MEASURES 7-8: Bb major - arpeggios Bb-D-F =====
        { t: 24, div: 'great', midi: 70, dur: 0.25 },     // Bb4
        { t: 24.25, div: 'great', midi: 74, dur: 0.25 },  // D5
        { t: 24.5, div: 'great', midi: 77, dur: 0.25 },   // F5
        { t: 24.75, div: 'great', midi: 82, dur: 0.25 },  // Bb5
        { t: 25, div: 'great', midi: 77, dur: 0.25 },
        { t: 25.25, div: 'great', midi: 74, dur: 0.25 },
        { t: 25.5, div: 'great', midi: 77, dur: 0.25 },
        { t: 25.75, div: 'great', midi: 82, dur: 0.25 },
        { t: 26, div: 'great', midi: 77, dur: 0.25 },
        { t: 26.25, div: 'great', midi: 74, dur: 0.25 },
        { t: 26.5, div: 'great', midi: 77, dur: 0.25 },
        { t: 26.75, div: 'great', midi: 82, dur: 0.25 },
        { t: 27, div: 'great', midi: 77, dur: 0.25 },
        { t: 27.25, div: 'great', midi: 74, dur: 0.25 },
        { t: 27.5, div: 'great', midi: 77, dur: 0.25 },
        { t: 27.75, div: 'great', midi: 82, dur: 0.25 },
        // LH
        { t: 24, div: 'swell', midi: 58, dur: 0.75 },     // Bb3
        { t: 24, div: 'swell', midi: 62, dur: 0.75 },     // D4
        { t: 25, div: 'swell', midi: 58, dur: 0.75 },
        { t: 25, div: 'swell', midi: 62, dur: 0.75 },
        { t: 26, div: 'swell', midi: 58, dur: 0.75 },
        { t: 26, div: 'swell', midi: 62, dur: 0.75 },
        { t: 27, div: 'swell', midi: 58, dur: 0.75 },
        { t: 27, div: 'swell', midi: 62, dur: 0.75 },
        { t: 24, div: 'pedal', midi: 46, dur: 4 },         // Bb2

        // Measure 8: Bb continues
        { t: 28, div: 'great', midi: 70, dur: 0.25 },
        { t: 28.25, div: 'great', midi: 74, dur: 0.25 },
        { t: 28.5, div: 'great', midi: 77, dur: 0.25 },
        { t: 28.75, div: 'great', midi: 82, dur: 0.25 },
        { t: 29, div: 'great', midi: 77, dur: 0.25 },
        { t: 29.25, div: 'great', midi: 74, dur: 0.25 },
        { t: 29.5, div: 'great', midi: 77, dur: 0.25 },
        { t: 29.75, div: 'great', midi: 82, dur: 0.25 },
        { t: 30, div: 'great', midi: 77, dur: 0.25 },
        { t: 30.25, div: 'great', midi: 74, dur: 0.25 },
        { t: 30.5, div: 'great', midi: 77, dur: 0.25 },
        { t: 30.75, div: 'great', midi: 82, dur: 0.25 },
        { t: 31, div: 'great', midi: 77, dur: 0.25 },
        { t: 31.25, div: 'great', midi: 74, dur: 0.25 },
        { t: 31.5, div: 'great', midi: 77, dur: 0.25 },
        { t: 31.75, div: 'great', midi: 82, dur: 0.25 },
        { t: 28, div: 'swell', midi: 58, dur: 0.75 },
        { t: 28, div: 'swell', midi: 62, dur: 0.75 },
        { t: 29, div: 'swell', midi: 58, dur: 0.75 },
        { t: 29, div: 'swell', midi: 62, dur: 0.75 },
        { t: 30, div: 'swell', midi: 58, dur: 0.75 },
        { t: 30, div: 'swell', midi: 62, dur: 0.75 },
        { t: 31, div: 'swell', midi: 58, dur: 0.75 },
        { t: 31, div: 'swell', midi: 62, dur: 0.75 },
        { t: 28, div: 'pedal', midi: 50, dur: 4 },         // D3

        // ===== MEASURES 9-10: G minor - arpeggios G-Bb-D =====
        { t: 32, div: 'great', midi: 67, dur: 0.25 },     // G4
        { t: 32.25, div: 'great', midi: 70, dur: 0.25 },  // Bb4
        { t: 32.5, div: 'great', midi: 74, dur: 0.25 },   // D5
        { t: 32.75, div: 'great', midi: 79, dur: 0.25 },  // G5
        { t: 33, div: 'great', midi: 74, dur: 0.25 },
        { t: 33.25, div: 'great', midi: 70, dur: 0.25 },
        { t: 33.5, div: 'great', midi: 74, dur: 0.25 },
        { t: 33.75, div: 'great', midi: 79, dur: 0.25 },
        { t: 34, div: 'great', midi: 74, dur: 0.25 },
        { t: 34.25, div: 'great', midi: 70, dur: 0.25 },
        { t: 34.5, div: 'great', midi: 74, dur: 0.25 },
        { t: 34.75, div: 'great', midi: 79, dur: 0.25 },
        { t: 35, div: 'great', midi: 74, dur: 0.25 },
        { t: 35.25, div: 'great', midi: 70, dur: 0.25 },
        { t: 35.5, div: 'great', midi: 74, dur: 0.25 },
        { t: 35.75, div: 'great', midi: 79, dur: 0.25 },
        { t: 32, div: 'swell', midi: 58, dur: 0.75 },     // Bb3
        { t: 32, div: 'swell', midi: 62, dur: 0.75 },     // D4
        { t: 33, div: 'swell', midi: 58, dur: 0.75 },
        { t: 33, div: 'swell', midi: 62, dur: 0.75 },
        { t: 34, div: 'swell', midi: 58, dur: 0.75 },
        { t: 34, div: 'swell', midi: 62, dur: 0.75 },
        { t: 35, div: 'swell', midi: 58, dur: 0.75 },
        { t: 35, div: 'swell', midi: 62, dur: 0.75 },
        { t: 32, div: 'pedal', midi: 43, dur: 4 },         // G2

        // Measure 10
        { t: 36, div: 'great', midi: 67, dur: 0.25 },
        { t: 36.25, div: 'great', midi: 70, dur: 0.25 },
        { t: 36.5, div: 'great', midi: 74, dur: 0.25 },
        { t: 36.75, div: 'great', midi: 79, dur: 0.25 },
        { t: 37, div: 'great', midi: 74, dur: 0.25 },
        { t: 37.25, div: 'great', midi: 70, dur: 0.25 },
        { t: 37.5, div: 'great', midi: 74, dur: 0.25 },
        { t: 37.75, div: 'great', midi: 79, dur: 0.25 },
        { t: 38, div: 'great', midi: 74, dur: 0.25 },
        { t: 38.25, div: 'great', midi: 70, dur: 0.25 },
        { t: 38.5, div: 'great', midi: 74, dur: 0.25 },
        { t: 38.75, div: 'great', midi: 79, dur: 0.25 },
        { t: 39, div: 'great', midi: 74, dur: 0.25 },
        { t: 39.25, div: 'great', midi: 70, dur: 0.25 },
        { t: 39.5, div: 'great', midi: 74, dur: 0.25 },
        { t: 39.75, div: 'great', midi: 79, dur: 0.25 },
        { t: 36, div: 'swell', midi: 55, dur: 0.75 },
        { t: 36, div: 'swell', midi: 59, dur: 0.75 },
        { t: 37, div: 'swell', midi: 55, dur: 0.75 },
        { t: 37, div: 'swell', midi: 59, dur: 0.75 },
        { t: 38, div: 'swell', midi: 55, dur: 0.75 },
        { t: 38, div: 'swell', midi: 59, dur: 0.75 },
        { t: 39, div: 'swell', midi: 55, dur: 0.75 },
        { t: 39, div: 'swell', midi: 59, dur: 0.75 },
        { t: 36, div: 'pedal', midi: 46, dur: 4 },         // Bb2

        // ===== MEASURES 11-12: C7 - arpeggios C-E-Bb, resolving to F =====
        { t: 40, div: 'great', midi: 64, dur: 0.25 },     // E4
        { t: 40.25, div: 'great', midi: 67, dur: 0.25 },  // G4
        { t: 40.5, div: 'great', midi: 70, dur: 0.25 },   // Bb4
        { t: 40.75, div: 'great', midi: 76, dur: 0.25 },  // E5
        { t: 41, div: 'great', midi: 72, dur: 0.25 },     // C5
        { t: 41.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 41.5, div: 'great', midi: 70, dur: 0.25 },
        { t: 41.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 42, div: 'great', midi: 72, dur: 0.25 },
        { t: 42.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 42.5, div: 'great', midi: 70, dur: 0.25 },
        { t: 42.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 43, div: 'great', midi: 72, dur: 0.25 },
        { t: 43.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 43.5, div: 'great', midi: 70, dur: 0.25 },
        { t: 43.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 40, div: 'swell', midi: 58, dur: 0.75 },
        { t: 40, div: 'swell', midi: 64, dur: 0.75 },
        { t: 41, div: 'swell', midi: 58, dur: 0.75 },
        { t: 41, div: 'swell', midi: 64, dur: 0.75 },
        { t: 42, div: 'swell', midi: 58, dur: 0.75 },
        { t: 42, div: 'swell', midi: 64, dur: 0.75 },
        { t: 43, div: 'swell', midi: 58, dur: 0.75 },
        { t: 43, div: 'swell', midi: 64, dur: 0.75 },
        { t: 40, div: 'pedal', midi: 48, dur: 4 },         // C3

        // Measure 12: C7 resolves
        { t: 44, div: 'great', midi: 64, dur: 0.25 },
        { t: 44.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 44.5, div: 'great', midi: 70, dur: 0.25 },
        { t: 44.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 45, div: 'great', midi: 72, dur: 0.25 },
        { t: 45.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 45.5, div: 'great', midi: 70, dur: 0.25 },
        { t: 45.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 46, div: 'great', midi: 72, dur: 0.25 },
        { t: 46.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 46.5, div: 'great', midi: 70, dur: 0.25 },
        { t: 46.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 47, div: 'great', midi: 72, dur: 0.25 },
        { t: 47.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 47.5, div: 'great', midi: 70, dur: 0.25 },
        { t: 47.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 44, div: 'swell', midi: 58, dur: 0.75 },
        { t: 44, div: 'swell', midi: 64, dur: 0.75 },
        { t: 45, div: 'swell', midi: 58, dur: 0.75 },
        { t: 45, div: 'swell', midi: 64, dur: 0.75 },
        { t: 46, div: 'swell', midi: 58, dur: 0.75 },
        { t: 46, div: 'swell', midi: 64, dur: 0.75 },
        { t: 47, div: 'swell', midi: 58, dur: 0.75 },
        { t: 47, div: 'swell', midi: 64, dur: 0.75 },
        { t: 44, div: 'pedal', midi: 48, dur: 4 },         // C3

        // ===== MEASURES 13-16: Return to F major with triumphant restatement =====
        // Measure 13: F major again, higher energy
        { t: 48, div: 'great', midi: 65, dur: 0.25 },
        { t: 48.25, div: 'great', midi: 69, dur: 0.25 },
        { t: 48.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 48.75, div: 'great', midi: 77, dur: 0.25 },
        { t: 49, div: 'great', midi: 72, dur: 0.25 },
        { t: 49.25, div: 'great', midi: 69, dur: 0.25 },
        { t: 49.5, div: 'great', midi: 77, dur: 0.25 },
        { t: 49.75, div: 'great', midi: 81, dur: 0.25 },  // A5
        { t: 50, div: 'great', midi: 77, dur: 0.25 },
        { t: 50.25, div: 'great', midi: 72, dur: 0.25 },
        { t: 50.5, div: 'great', midi: 77, dur: 0.25 },
        { t: 50.75, div: 'great', midi: 81, dur: 0.25 },
        { t: 51, div: 'great', midi: 77, dur: 0.25 },
        { t: 51.25, div: 'great', midi: 72, dur: 0.25 },
        { t: 51.5, div: 'great', midi: 77, dur: 0.25 },
        { t: 51.75, div: 'great', midi: 81, dur: 0.25 },
        { t: 48, div: 'swell', midi: 60, dur: 0.75 },
        { t: 48, div: 'swell', midi: 65, dur: 0.75 },
        { t: 49, div: 'swell', midi: 60, dur: 0.75 },
        { t: 49, div: 'swell', midi: 65, dur: 0.75 },
        { t: 50, div: 'swell', midi: 60, dur: 0.75 },
        { t: 50, div: 'swell', midi: 65, dur: 0.75 },
        { t: 51, div: 'swell', midi: 60, dur: 0.75 },
        { t: 51, div: 'swell', midi: 65, dur: 0.75 },
        { t: 48, div: 'pedal', midi: 41, dur: 4 },         // F2

        // Measure 14
        { t: 52, div: 'great', midi: 65, dur: 0.25 },
        { t: 52.25, div: 'great', midi: 69, dur: 0.25 },
        { t: 52.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 52.75, div: 'great', midi: 77, dur: 0.25 },
        { t: 53, div: 'great', midi: 81, dur: 0.25 },
        { t: 53.25, div: 'great', midi: 77, dur: 0.25 },
        { t: 53.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 53.75, div: 'great', midi: 77, dur: 0.25 },
        { t: 54, div: 'great', midi: 81, dur: 0.25 },
        { t: 54.25, div: 'great', midi: 77, dur: 0.25 },
        { t: 54.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 54.75, div: 'great', midi: 77, dur: 0.25 },
        { t: 55, div: 'great', midi: 81, dur: 0.25 },
        { t: 55.25, div: 'great', midi: 77, dur: 0.25 },
        { t: 55.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 55.75, div: 'great', midi: 69, dur: 0.25 },
        { t: 52, div: 'swell', midi: 60, dur: 0.75 },
        { t: 52, div: 'swell', midi: 65, dur: 0.75 },
        { t: 53, div: 'swell', midi: 60, dur: 0.75 },
        { t: 53, div: 'swell', midi: 65, dur: 0.75 },
        { t: 54, div: 'swell', midi: 60, dur: 0.75 },
        { t: 54, div: 'swell', midi: 65, dur: 0.75 },
        { t: 55, div: 'swell', midi: 60, dur: 0.75 },
        { t: 55, div: 'swell', midi: 65, dur: 0.75 },
        { t: 52, div: 'pedal', midi: 53, dur: 4 },         // F3

        // Measures 15-16: Final cadence V-I, big chords
        // C7 measure
        { t: 56, div: 'great', midi: 64, dur: 0.25 },
        { t: 56.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 56.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 56.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 57, div: 'great', midi: 72, dur: 0.25 },
        { t: 57.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 57.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 57.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 58, div: 'great', midi: 72, dur: 0.25 },
        { t: 58.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 58.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 58.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 59, div: 'great', midi: 72, dur: 0.25 },
        { t: 59.25, div: 'great', midi: 67, dur: 0.25 },
        { t: 59.5, div: 'great', midi: 72, dur: 0.25 },
        { t: 59.75, div: 'great', midi: 76, dur: 0.25 },
        { t: 56, div: 'swell', midi: 58, dur: 0.75 },
        { t: 56, div: 'swell', midi: 64, dur: 0.75 },
        { t: 57, div: 'swell', midi: 58, dur: 0.75 },
        { t: 57, div: 'swell', midi: 64, dur: 0.75 },
        { t: 58, div: 'swell', midi: 58, dur: 0.75 },
        { t: 58, div: 'swell', midi: 64, dur: 0.75 },
        { t: 59, div: 'swell', midi: 58, dur: 0.75 },
        { t: 59, div: 'swell', midi: 64, dur: 0.75 },
        { t: 56, div: 'pedal', midi: 48, dur: 4 },         // C3

        // Measure 16: Final F major - fff block chords
        { t: 60, div: 'great', midi: 65, dur: 2, vel: 1.0 },   // F4
        { t: 60, div: 'great', midi: 69, dur: 2, vel: 1.0 },   // A4
        { t: 60, div: 'great', midi: 72, dur: 2, vel: 1.0 },   // C5
        { t: 60, div: 'great', midi: 77, dur: 2, vel: 1.0 },   // F5
        { t: 60, div: 'swell', midi: 53, dur: 2, vel: 1.0 },   // F3
        { t: 60, div: 'swell', midi: 57, dur: 2, vel: 1.0 },   // A3
        { t: 60, div: 'swell', midi: 60, dur: 2, vel: 1.0 },   // C4
        { t: 60, div: 'pedal', midi: 41, dur: 2, vel: 1.0 },   // F2
        { t: 60, div: 'pedal', midi: 29, dur: 2, vel: 1.0 },   // F1

        // Second fff chord
        { t: 62, div: 'great', midi: 65, dur: 2, vel: 1.0 },
        { t: 62, div: 'great', midi: 69, dur: 2, vel: 1.0 },
        { t: 62, div: 'great', midi: 72, dur: 2, vel: 1.0 },
        { t: 62, div: 'great', midi: 77, dur: 2, vel: 1.0 },
        { t: 62, div: 'swell', midi: 53, dur: 2, vel: 1.0 },
        { t: 62, div: 'swell', midi: 57, dur: 2, vel: 1.0 },
        { t: 62, div: 'swell', midi: 60, dur: 2, vel: 1.0 },
        { t: 62, div: 'pedal', midi: 41, dur: 2, vel: 1.0 },
        { t: 62, div: 'pedal', midi: 29, dur: 2, vel: 1.0 }
    ]
};


// ============================================================
// 2. Elgar - Pomp and Circumstance March No. 1 in D major
// ============================================================
// The famous "Land of Hope and Glory" trio melody
// Tempo: Largamente, ~80 BPM, 4/4 time
// Melody on Great, accompaniment on Swell, bass on Pedal

const PIECE_POMP_CIRCUMSTANCE = {
    title: "Pomp and Circumstance March No. 1",
    composer: "Edward Elgar",
    tempo: 80,
    registration: {
        great: ['gt-principal8', 'gt-bourdon8', 'gt-trumpet8'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voxceleste8', 'sw-principal4'],
        choir: [],
        pedal: ['pd-subbass16', 'pd-principal16', 'pd-octave8']
    },
    events: [
        // ===== "Land of Hope and Glory" trio theme =====
        // Key: D major. Melody: D4-E4-F#4... majestic and broad

        // --- Phrase 1 (mm. 1-4): D - E - F# - G - A held ---
        // Melody (Great)
        { t: 0, div: 'great', midi: 62, dur: 2 },          // D4 (half)
        { t: 2, div: 'great', midi: 64, dur: 2 },          // E4
        { t: 4, div: 'great', midi: 66, dur: 3 },          // F#4 (dotted half)
        { t: 7, div: 'great', midi: 64, dur: 1 },          // E4
        { t: 8, div: 'great', midi: 66, dur: 4 },          // F#4 (whole)
        { t: 12, div: 'great', midi: 69, dur: 4 },         // A4 (whole)

        // Swell accompaniment - sustained chords
        { t: 0, div: 'swell', midi: 54, dur: 4 },          // F#3
        { t: 0, div: 'swell', midi: 57, dur: 4 },          // A3
        { t: 0, div: 'swell', midi: 62, dur: 4 },          // D4
        { t: 4, div: 'swell', midi: 54, dur: 4 },          // F#3
        { t: 4, div: 'swell', midi: 57, dur: 4 },          // A3
        { t: 4, div: 'swell', midi: 62, dur: 4 },          // D4
        { t: 8, div: 'swell', midi: 54, dur: 4 },
        { t: 8, div: 'swell', midi: 57, dur: 4 },
        { t: 8, div: 'swell', midi: 62, dur: 4 },
        { t: 12, div: 'swell', midi: 57, dur: 4 },         // A3
        { t: 12, div: 'swell', midi: 61, dur: 4 },         // C#4
        { t: 12, div: 'swell', midi: 64, dur: 4 },         // E4

        // Pedal bass
        { t: 0, div: 'pedal', midi: 50, dur: 4 },          // D3
        { t: 4, div: 'pedal', midi: 50, dur: 4 },          // D3
        { t: 8, div: 'pedal', midi: 50, dur: 4 },          // D3
        { t: 12, div: 'pedal', midi: 45, dur: 4 },         // A2

        // --- Phrase 2 (mm. 5-8): B - A - G - F# - E held ---
        { t: 16, div: 'great', midi: 71, dur: 2 },         // B4
        { t: 18, div: 'great', midi: 69, dur: 2 },         // A4
        { t: 20, div: 'great', midi: 67, dur: 3 },         // G4 (dotted half)
        { t: 23, div: 'great', midi: 66, dur: 1 },         // F#4
        { t: 24, div: 'great', midi: 67, dur: 4 },         // G4 (whole)
        { t: 28, div: 'great', midi: 64, dur: 4 },         // E4 (whole)

        // Swell chords
        { t: 16, div: 'swell', midi: 55, dur: 4 },         // G3
        { t: 16, div: 'swell', midi: 59, dur: 4 },         // B3
        { t: 16, div: 'swell', midi: 62, dur: 4 },         // D4
        { t: 20, div: 'swell', midi: 55, dur: 4 },         // G3
        { t: 20, div: 'swell', midi: 59, dur: 4 },         // B3
        { t: 20, div: 'swell', midi: 64, dur: 4 },         // E4
        { t: 24, div: 'swell', midi: 55, dur: 4 },
        { t: 24, div: 'swell', midi: 59, dur: 4 },
        { t: 24, div: 'swell', midi: 64, dur: 4 },
        { t: 28, div: 'swell', midi: 57, dur: 4 },         // A3
        { t: 28, div: 'swell', midi: 61, dur: 4 },         // C#4

        // Pedal
        { t: 16, div: 'pedal', midi: 43, dur: 4 },         // G2
        { t: 20, div: 'pedal', midi: 40, dur: 4 },         // E2
        { t: 24, div: 'pedal', midi: 43, dur: 4 },         // G2
        { t: 28, div: 'pedal', midi: 45, dur: 4 },         // A2

        // --- Phrase 3 (mm. 9-12): Repeat of phrase 1 melody, higher energy ---
        { t: 32, div: 'great', midi: 62, dur: 2 },         // D4
        { t: 34, div: 'great', midi: 64, dur: 2 },         // E4
        { t: 36, div: 'great', midi: 66, dur: 3 },         // F#4
        { t: 39, div: 'great', midi: 64, dur: 1 },         // E4
        { t: 40, div: 'great', midi: 66, dur: 4 },         // F#4
        { t: 44, div: 'great', midi: 69, dur: 4 },         // A4

        { t: 32, div: 'swell', midi: 54, dur: 4 },
        { t: 32, div: 'swell', midi: 57, dur: 4 },
        { t: 32, div: 'swell', midi: 62, dur: 4 },
        { t: 36, div: 'swell', midi: 54, dur: 4 },
        { t: 36, div: 'swell', midi: 57, dur: 4 },
        { t: 36, div: 'swell', midi: 62, dur: 4 },
        { t: 40, div: 'swell', midi: 54, dur: 4 },
        { t: 40, div: 'swell', midi: 57, dur: 4 },
        { t: 40, div: 'swell', midi: 62, dur: 4 },
        { t: 44, div: 'swell', midi: 57, dur: 4 },
        { t: 44, div: 'swell', midi: 61, dur: 4 },
        { t: 44, div: 'swell', midi: 64, dur: 4 },

        { t: 32, div: 'pedal', midi: 50, dur: 4 },
        { t: 36, div: 'pedal', midi: 50, dur: 4 },
        { t: 40, div: 'pedal', midi: 50, dur: 4 },
        { t: 44, div: 'pedal', midi: 45, dur: 4 },

        // --- Phrase 4 (mm. 13-16): Climactic ending B-A-G-F#-E-D ---
        { t: 48, div: 'great', midi: 71, dur: 2 },         // B4
        { t: 50, div: 'great', midi: 69, dur: 2 },         // A4
        { t: 52, div: 'great', midi: 67, dur: 2 },         // G4
        { t: 54, div: 'great', midi: 66, dur: 1 },         // F#4
        { t: 55, div: 'great', midi: 64, dur: 1 },         // E4
        { t: 56, div: 'great', midi: 62, dur: 4 },         // D4 (whole, resolution)
        { t: 60, div: 'great', midi: 62, dur: 4 },         // D4 (held final)

        { t: 48, div: 'swell', midi: 55, dur: 4 },
        { t: 48, div: 'swell', midi: 59, dur: 4 },
        { t: 48, div: 'swell', midi: 62, dur: 4 },
        { t: 52, div: 'swell', midi: 54, dur: 4 },
        { t: 52, div: 'swell', midi: 57, dur: 4 },
        { t: 52, div: 'swell', midi: 62, dur: 4 },
        { t: 56, div: 'swell', midi: 54, dur: 4, vel: 0.9 },
        { t: 56, div: 'swell', midi: 57, dur: 4, vel: 0.9 },
        { t: 56, div: 'swell', midi: 62, dur: 4, vel: 0.9 },
        { t: 60, div: 'swell', midi: 54, dur: 4, vel: 0.85 },
        { t: 60, div: 'swell', midi: 57, dur: 4, vel: 0.85 },
        { t: 60, div: 'swell', midi: 62, dur: 4, vel: 0.85 },

        { t: 48, div: 'pedal', midi: 43, dur: 4 },
        { t: 52, div: 'pedal', midi: 45, dur: 4 },
        { t: 56, div: 'pedal', midi: 50, dur: 4 },
        { t: 60, div: 'pedal', midi: 50, dur: 4 }
    ]
};
