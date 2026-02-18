// ============================================================
// German Romantic Organ Works Collection
// ============================================================
// Four major German Romantic organ works encoded for Cathedral Grand organ simulator
// MIDI reference: C2=36, C3=48, C4=60, D4=62, Eb4=63, E4=64, F4=65, G4=67, A4=69, Bb4=70, B4=71, C5=72
// ============================================================

// ============================================================
// 1. Mendelssohn - Organ Sonata No. 1 in F minor, Op. 65/1
// ============================================================
// First movement: Allegro moderato e serioso
// Opens with powerful chords (exordium), then a fugato over pedal point,
// alternating with the chorale "Was mein Gott will, das g'scheh allzeit"
// Key: F minor (4 flats: Bb, Eb, Ab, Db)
// The chorale melody (from Claudin de Sermisy, 1529) enters softly on the
// Swell between aggressive fugal episodes on the Great.
// ============================================================

const PIECE_MENDELSSOHN_SONATA1 = {
    title: "Organ Sonata No. 1 in F minor",
    composer: "Felix Mendelssohn",
    catalog: "Op. 65/1",
    key: "F minor",
    tempo: 100,
    tempoChanges: [
        { t: 0, tempo: 100, label: "Allegro moderato e serioso" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4'],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ===== MEASURES 1-2: Exordium - Full organ, powerful opening chords in F minor =====
        // Beat 1: F minor chord fortissimo
        { t: 0, div: 'great', midi: 65, dur: 1.5, vel: 0.95 },    // F4
        { t: 0, div: 'great', midi: 60, dur: 1.5, vel: 0.93 },    // C4
        { t: 0, div: 'great', midi: 56, dur: 1.5, vel: 0.91 },    // Ab3
        { t: 0, div: 'great', midi: 53, dur: 1.5, vel: 0.90 },    // F3
        { t: 0, div: 'pedal', midi: 41, dur: 1.5, vel: 0.92 },    // F2
        // Beat 2: Db major chord (bVI)
        { t: 1.5, div: 'great', midi: 65, dur: 1.0, vel: 0.93 },  // F4
        { t: 1.5, div: 'great', midi: 61, dur: 1.0, vel: 0.91 },  // Db4
        { t: 1.5, div: 'great', midi: 56, dur: 1.0, vel: 0.89 },  // Ab3
        { t: 1.5, div: 'pedal', midi: 37, dur: 1.0, vel: 0.90 },  // Db2
        // Beat 3: C major chord (dominant of F minor) with tension
        { t: 2.5, div: 'great', midi: 67, dur: 1.5, vel: 0.95 },  // G4
        { t: 2.5, div: 'great', midi: 64, dur: 1.5, vel: 0.93 },  // E4
        { t: 2.5, div: 'great', midi: 60, dur: 1.5, vel: 0.91 },  // C4
        { t: 2.5, div: 'pedal', midi: 36, dur: 1.5, vel: 0.92 },  // C2

        // ===== MEASURE 3: Second exordium phrase - intensifying =====
        { t: 4, div: 'great', midi: 68, dur: 1.5, vel: 0.96 },    // Ab4
        { t: 4, div: 'great', midi: 63, dur: 1.5, vel: 0.93 },    // Eb4
        { t: 4, div: 'great', midi: 60, dur: 1.5, vel: 0.91 },    // C4
        { t: 4, div: 'pedal', midi: 44, dur: 1.5, vel: 0.92 },    // Ab2
        // Bb minor chord
        { t: 5.5, div: 'great', midi: 65, dur: 1.0, vel: 0.93 },  // F4
        { t: 5.5, div: 'great', midi: 61, dur: 1.0, vel: 0.91 },  // Db4
        { t: 5.5, div: 'great', midi: 58, dur: 1.0, vel: 0.89 },  // Bb3
        { t: 5.5, div: 'pedal', midi: 46, dur: 1.0, vel: 0.90 },  // Bb2
        // Dominant C with 7th
        { t: 6.5, div: 'great', midi: 70, dur: 1.5, vel: 0.95 },  // Bb4
        { t: 6.5, div: 'great', midi: 67, dur: 1.5, vel: 0.93 },  // G4
        { t: 6.5, div: 'great', midi: 64, dur: 1.5, vel: 0.91 },  // E4
        { t: 6.5, div: 'great', midi: 60, dur: 1.5, vel: 0.89 },  // C4
        { t: 6.5, div: 'pedal', midi: 36, dur: 1.5, vel: 0.92 },  // C2

        // ===== MEASURES 4-7: Fugato on pedal point F =====
        // Pedal point on F sustained
        { t: 8, div: 'pedal', midi: 41, dur: 8.0, vel: 0.80 },    // F2 pedal point

        // Fugue subject enters in tenor: F3-Ab3-G3-F3-Eb3-Db3-C3-F3
        { t: 8,    div: 'great', midi: 53, dur: 0.75, vel: 0.80 }, // F3
        { t: 8.75, div: 'great', midi: 56, dur: 0.75, vel: 0.82 }, // Ab3
        { t: 9.5,  div: 'great', midi: 55, dur: 0.5,  vel: 0.80 }, // G3
        { t: 10,   div: 'great', midi: 53, dur: 0.5,  vel: 0.78 }, // F3
        { t: 10.5, div: 'great', midi: 51, dur: 0.5,  vel: 0.77 }, // Eb3
        { t: 11,   div: 'great', midi: 49, dur: 0.5,  vel: 0.76 }, // Db3
        { t: 11.5, div: 'great', midi: 48, dur: 0.75, vel: 0.78 }, // C3
        { t: 12.25,div: 'great', midi: 53, dur: 0.75, vel: 0.80 }, // F3

        // Alto answer at the 5th: C4-Eb4-D4-C4-Bb3-Ab3-G3-C4
        { t: 12,   div: 'great', midi: 60, dur: 0.75, vel: 0.82 }, // C4
        { t: 12.75,div: 'great', midi: 63, dur: 0.75, vel: 0.84 }, // Eb4
        { t: 13.5, div: 'great', midi: 62, dur: 0.5,  vel: 0.82 }, // D4
        { t: 14,   div: 'great', midi: 60, dur: 0.5,  vel: 0.80 }, // C4
        { t: 14.5, div: 'great', midi: 58, dur: 0.5,  vel: 0.79 }, // Bb3
        { t: 15,   div: 'great', midi: 56, dur: 0.5,  vel: 0.78 }, // Ab3
        { t: 15.5, div: 'great', midi: 55, dur: 0.75, vel: 0.80 }, // G3

        // Tenor continues with countersubject
        { t: 13,   div: 'great', midi: 53, dur: 0.5, vel: 0.75 },  // F3
        { t: 13.5, div: 'great', midi: 55, dur: 0.5, vel: 0.75 },  // G3
        { t: 14,   div: 'great', midi: 56, dur: 0.5, vel: 0.75 },  // Ab3
        { t: 14.5, div: 'great', midi: 55, dur: 0.5, vel: 0.75 },  // G3
        { t: 15,   div: 'great', midi: 53, dur: 0.5, vel: 0.75 },  // F3
        { t: 15.5, div: 'great', midi: 51, dur: 0.5, vel: 0.75 },  // Eb3

        // ===== MEASURES 8-11: Chorale "Was mein Gott will" enters on Swell =====
        // Soft registration, the chorale melody in soprano on Swell
        // Chorale phrase 1: F4-F4-G4-Ab4-G4-F4-Eb4-F4 (in F minor)
        { t: 16, div: 'pedal', midi: 41, dur: 4.0, vel: 0.65 },    // F2
        { t: 16,   div: 'swell', midi: 65, dur: 1.0, vel: 0.65 },  // F4
        { t: 17,   div: 'swell', midi: 65, dur: 1.0, vel: 0.65 },  // F4
        { t: 18,   div: 'swell', midi: 67, dur: 1.0, vel: 0.67 },  // G4
        { t: 19,   div: 'swell', midi: 68, dur: 1.0, vel: 0.68 },  // Ab4
        // Alto harmonization
        { t: 16,   div: 'swell', midi: 60, dur: 1.0, vel: 0.58 },  // C4
        { t: 17,   div: 'swell', midi: 60, dur: 1.0, vel: 0.58 },  // C4
        { t: 18,   div: 'swell', midi: 63, dur: 1.0, vel: 0.60 },  // Eb4
        { t: 19,   div: 'swell', midi: 63, dur: 1.0, vel: 0.60 },  // Eb4
        // Tenor harmonization
        { t: 16,   div: 'swell', midi: 56, dur: 2.0, vel: 0.55 },  // Ab3
        { t: 18,   div: 'swell', midi: 55, dur: 2.0, vel: 0.55 },  // G3

        // Chorale phrase 1 continued
        { t: 20, div: 'pedal', midi: 36, dur: 4.0, vel: 0.65 },    // C2
        { t: 20,   div: 'swell', midi: 67, dur: 1.0, vel: 0.67 },  // G4
        { t: 21,   div: 'swell', midi: 65, dur: 1.0, vel: 0.65 },  // F4
        { t: 22,   div: 'swell', midi: 63, dur: 1.0, vel: 0.63 },  // Eb4
        { t: 23,   div: 'swell', midi: 65, dur: 1.5, vel: 0.65 },  // F4 (fermata)
        // Alto
        { t: 20,   div: 'swell', midi: 60, dur: 1.0, vel: 0.58 },  // C4
        { t: 21,   div: 'swell', midi: 60, dur: 1.0, vel: 0.58 },  // C4
        { t: 22,   div: 'swell', midi: 58, dur: 1.0, vel: 0.56 },  // Bb3
        { t: 23,   div: 'swell', midi: 60, dur: 1.5, vel: 0.58 },  // C4
        // Tenor
        { t: 20,   div: 'swell', midi: 55, dur: 2.0, vel: 0.53 },  // G3
        { t: 22,   div: 'swell', midi: 53, dur: 2.5, vel: 0.53 },  // F3

        // ===== MEASURES 12-15: Fugato returns, more intense =====
        { t: 24.5, div: 'pedal', midi: 41, dur: 8.0, vel: 0.82 },  // F2 pedal point

        // Subject in soprano: F4-Ab4-G4-F4-Eb4-Db4-C4-F4
        { t: 24.5, div: 'great', midi: 65, dur: 0.75, vel: 0.85 }, // F4
        { t: 25.25,div: 'great', midi: 68, dur: 0.75, vel: 0.87 }, // Ab4
        { t: 26,   div: 'great', midi: 67, dur: 0.5,  vel: 0.85 }, // G4
        { t: 26.5, div: 'great', midi: 65, dur: 0.5,  vel: 0.83 }, // F4
        { t: 27,   div: 'great', midi: 63, dur: 0.5,  vel: 0.82 }, // Eb4
        { t: 27.5, div: 'great', midi: 61, dur: 0.5,  vel: 0.81 }, // Db4
        { t: 28,   div: 'great', midi: 60, dur: 0.75, vel: 0.83 }, // C4
        { t: 28.75,div: 'great', midi: 65, dur: 0.75, vel: 0.85 }, // F4

        // Alto countersubject
        { t: 24.5, div: 'great', midi: 60, dur: 0.5, vel: 0.78 },  // C4
        { t: 25,   div: 'great', midi: 61, dur: 0.5, vel: 0.78 },  // Db4
        { t: 25.5, div: 'great', midi: 63, dur: 0.5, vel: 0.78 },  // Eb4
        { t: 26,   div: 'great', midi: 61, dur: 0.5, vel: 0.78 },  // Db4
        { t: 26.5, div: 'great', midi: 60, dur: 0.5, vel: 0.78 },  // C4
        { t: 27,   div: 'great', midi: 58, dur: 0.5, vel: 0.78 },  // Bb3
        { t: 27.5, div: 'great', midi: 56, dur: 0.5, vel: 0.78 },  // Ab3
        { t: 28,   div: 'great', midi: 55, dur: 0.5, vel: 0.78 },  // G3

        // Tenor voice
        { t: 24.5, div: 'great', midi: 53, dur: 1.0, vel: 0.75 },  // F3
        { t: 25.5, div: 'great', midi: 56, dur: 1.0, vel: 0.75 },  // Ab3
        { t: 26.5, div: 'great', midi: 55, dur: 1.0, vel: 0.75 },  // G3
        { t: 27.5, div: 'great', midi: 53, dur: 1.0, vel: 0.75 },  // F3

        // Subject in bass (inverted): F3-Db3-Eb3-F3-G3-Ab3-Bb3-F3
        { t: 28.5, div: 'great', midi: 53, dur: 0.75, vel: 0.83 }, // F3
        { t: 29.25,div: 'great', midi: 49, dur: 0.75, vel: 0.81 }, // Db3
        { t: 30,   div: 'great', midi: 51, dur: 0.5,  vel: 0.82 }, // Eb3
        { t: 30.5, div: 'great', midi: 53, dur: 0.5,  vel: 0.83 }, // F3
        { t: 31,   div: 'great', midi: 55, dur: 0.5,  vel: 0.84 }, // G3
        { t: 31.5, div: 'great', midi: 56, dur: 0.5,  vel: 0.85 }, // Ab3
        { t: 32,   div: 'great', midi: 58, dur: 0.75, vel: 0.86 }, // Bb3
        { t: 32.75,div: 'great', midi: 53, dur: 0.75, vel: 0.83 }, // F3

        // ===== MEASURES 16-19: Chorale phrase 2 on Swell =====
        // Chorale phrase 2: Ab4-Ab4-Bb4-C5-Bb4-Ab4-G4-Ab4
        { t: 33, div: 'pedal', midi: 44, dur: 4.0, vel: 0.65 },    // Ab2
        { t: 33,   div: 'swell', midi: 68, dur: 1.0, vel: 0.65 },  // Ab4
        { t: 34,   div: 'swell', midi: 68, dur: 1.0, vel: 0.65 },  // Ab4
        { t: 35,   div: 'swell', midi: 70, dur: 1.0, vel: 0.67 },  // Bb4
        { t: 36,   div: 'swell', midi: 72, dur: 1.0, vel: 0.70 },  // C5
        // Alto
        { t: 33,   div: 'swell', midi: 63, dur: 1.0, vel: 0.58 },  // Eb4
        { t: 34,   div: 'swell', midi: 63, dur: 1.0, vel: 0.58 },  // Eb4
        { t: 35,   div: 'swell', midi: 65, dur: 1.0, vel: 0.60 },  // F4
        { t: 36,   div: 'swell', midi: 68, dur: 1.0, vel: 0.62 },  // Ab4
        // Tenor
        { t: 33,   div: 'swell', midi: 56, dur: 2.0, vel: 0.53 },  // Ab3
        { t: 35,   div: 'swell', midi: 58, dur: 2.0, vel: 0.55 },  // Bb3

        // Chorale phrase 2 continued
        { t: 37, div: 'pedal', midi: 46, dur: 4.0, vel: 0.65 },    // Bb2
        { t: 37,   div: 'swell', midi: 70, dur: 1.0, vel: 0.68 },  // Bb4
        { t: 38,   div: 'swell', midi: 68, dur: 1.0, vel: 0.66 },  // Ab4
        { t: 39,   div: 'swell', midi: 67, dur: 1.0, vel: 0.65 },  // G4
        { t: 40,   div: 'swell', midi: 68, dur: 1.5, vel: 0.66 },  // Ab4 (fermata)
        // Alto
        { t: 37,   div: 'swell', midi: 65, dur: 1.0, vel: 0.60 },  // F4
        { t: 38,   div: 'swell', midi: 63, dur: 1.0, vel: 0.58 },  // Eb4
        { t: 39,   div: 'swell', midi: 63, dur: 1.0, vel: 0.58 },  // Eb4
        { t: 40,   div: 'swell', midi: 63, dur: 1.5, vel: 0.58 },  // Eb4
        // Tenor
        { t: 37,   div: 'swell', midi: 58, dur: 2.0, vel: 0.55 },  // Bb3
        { t: 39,   div: 'swell', midi: 55, dur: 2.5, vel: 0.53 },  // G3

        // ===== MEASURES 20-23: Fugato with combined subject and inversion =====
        { t: 41.5, div: 'pedal', midi: 41, dur: 4.0, vel: 0.85 },  // F2

        // Subject in soprano
        { t: 41.5, div: 'great', midi: 77, dur: 0.75, vel: 0.88 }, // F5
        { t: 42.25,div: 'great', midi: 80, dur: 0.75, vel: 0.90 }, // Ab5
        { t: 43,   div: 'great', midi: 79, dur: 0.5,  vel: 0.88 }, // G5
        { t: 43.5, div: 'great', midi: 77, dur: 0.5,  vel: 0.87 }, // F5
        { t: 44,   div: 'great', midi: 75, dur: 0.5,  vel: 0.86 }, // Eb5
        { t: 44.5, div: 'great', midi: 73, dur: 0.5,  vel: 0.85 }, // Db5
        { t: 45,   div: 'great', midi: 72, dur: 0.75, vel: 0.87 }, // C5
        { t: 45.75,div: 'great', midi: 77, dur: 0.75, vel: 0.88 }, // F5

        // Inverted subject in alto simultaneously
        { t: 41.5, div: 'great', midi: 65, dur: 0.75, vel: 0.82 }, // F4
        { t: 42.25,div: 'great', midi: 61, dur: 0.75, vel: 0.80 }, // Db4
        { t: 43,   div: 'great', midi: 63, dur: 0.5,  vel: 0.81 }, // Eb4
        { t: 43.5, div: 'great', midi: 65, dur: 0.5,  vel: 0.82 }, // F4
        { t: 44,   div: 'great', midi: 67, dur: 0.5,  vel: 0.83 }, // G4
        { t: 44.5, div: 'great', midi: 68, dur: 0.5,  vel: 0.84 }, // Ab4
        { t: 45,   div: 'great', midi: 70, dur: 0.75, vel: 0.85 }, // Bb4
        { t: 45.75,div: 'great', midi: 65, dur: 0.75, vel: 0.82 }, // F4

        // Tenor: sustained harmonies
        { t: 41.5, div: 'great', midi: 60, dur: 2.0, vel: 0.75 },  // C4
        { t: 43.5, div: 'great', midi: 58, dur: 2.0, vel: 0.75 },  // Bb3

        { t: 45.5, div: 'pedal', midi: 36, dur: 4.0, vel: 0.85 },  // C2

        // Continuation - more voices
        { t: 46.5, div: 'great', midi: 72, dur: 0.5, vel: 0.87 },  // C5
        { t: 47,   div: 'great', midi: 75, dur: 0.5, vel: 0.88 },  // Eb5
        { t: 47.5, div: 'great', midi: 73, dur: 0.5, vel: 0.87 },  // Db5
        { t: 48,   div: 'great', midi: 72, dur: 0.5, vel: 0.86 },  // C5
        { t: 48.5, div: 'great', midi: 70, dur: 0.5, vel: 0.85 },  // Bb4
        { t: 49,   div: 'great', midi: 68, dur: 0.5, vel: 0.84 },  // Ab4
        { t: 49.5, div: 'great', midi: 67, dur: 0.75, vel: 0.86 }, // G4

        // Alto motion
        { t: 46.5, div: 'great', midi: 63, dur: 0.5, vel: 0.78 },  // Eb4
        { t: 47,   div: 'great', midi: 65, dur: 0.5, vel: 0.78 },  // F4
        { t: 47.5, div: 'great', midi: 63, dur: 0.5, vel: 0.78 },  // Eb4
        { t: 48,   div: 'great', midi: 61, dur: 0.5, vel: 0.78 },  // Db4
        { t: 48.5, div: 'great', midi: 60, dur: 0.5, vel: 0.78 },  // C4
        { t: 49,   div: 'great', midi: 58, dur: 0.5, vel: 0.78 },  // Bb3
        { t: 49.5, div: 'great', midi: 60, dur: 0.75, vel: 0.78 }, // C4

        // ===== MEASURES 24-27: Chorale returns with fugal accompaniment =====
        // Chorale phrase 3 on Swell: C5-C5-Db5-Eb5-Db5-C5-Bb4-C5
        { t: 50.5, div: 'pedal', midi: 41, dur: 8.0, vel: 0.70 },  // F2

        { t: 50.5, div: 'swell', midi: 72, dur: 1.0, vel: 0.68 },  // C5
        { t: 51.5, div: 'swell', midi: 72, dur: 1.0, vel: 0.68 },  // C5
        { t: 52.5, div: 'swell', midi: 73, dur: 1.0, vel: 0.70 },  // Db5
        { t: 53.5, div: 'swell', midi: 75, dur: 1.0, vel: 0.72 },  // Eb5

        // Alto harmonization
        { t: 50.5, div: 'swell', midi: 68, dur: 1.0, vel: 0.60 },  // Ab4
        { t: 51.5, div: 'swell', midi: 67, dur: 1.0, vel: 0.60 },  // G4
        { t: 52.5, div: 'swell', midi: 68, dur: 1.0, vel: 0.62 },  // Ab4
        { t: 53.5, div: 'swell', midi: 68, dur: 1.0, vel: 0.62 },  // Ab4

        // Fugue subject woven into tenor under chorale
        { t: 50.5, div: 'great', midi: 53, dur: 0.75, vel: 0.72 }, // F3
        { t: 51.25,div: 'great', midi: 56, dur: 0.75, vel: 0.74 }, // Ab3
        { t: 52,   div: 'great', midi: 55, dur: 0.5,  vel: 0.72 }, // G3
        { t: 52.5, div: 'great', midi: 53, dur: 0.5,  vel: 0.71 }, // F3
        { t: 53,   div: 'great', midi: 51, dur: 0.5,  vel: 0.70 }, // Eb3
        { t: 53.5, div: 'great', midi: 49, dur: 0.5,  vel: 0.69 }, // Db3
        { t: 54,   div: 'great', midi: 48, dur: 0.75, vel: 0.71 }, // C3
        { t: 54.75,div: 'great', midi: 53, dur: 0.75, vel: 0.72 }, // F3

        // Chorale phrase 3 continued
        { t: 54.5, div: 'swell', midi: 73, dur: 1.0, vel: 0.70 },  // Db5
        { t: 55.5, div: 'swell', midi: 72, dur: 1.0, vel: 0.68 },  // C5
        { t: 56.5, div: 'swell', midi: 70, dur: 1.0, vel: 0.67 },  // Bb4
        { t: 57.5, div: 'swell', midi: 72, dur: 1.5, vel: 0.68 },  // C5 (fermata)
        // Alto
        { t: 54.5, div: 'swell', midi: 68, dur: 1.0, vel: 0.60 },  // Ab4
        { t: 55.5, div: 'swell', midi: 67, dur: 1.0, vel: 0.60 },  // G4
        { t: 56.5, div: 'swell', midi: 65, dur: 1.0, vel: 0.58 },  // F4
        { t: 57.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.60 },  // G4

        // ===== MEASURES 28-31: Final chorale return with full organ =====
        { t: 59, div: 'pedal', midi: 41, dur: 4.0, vel: 0.88 },    // F2

        // Chorale phrase 4 in full organ: F4-G4-Ab4-Bb4-Ab4-G4-F4
        { t: 59,   div: 'great', midi: 65, dur: 1.0, vel: 0.90 },  // F4
        { t: 60,   div: 'great', midi: 67, dur: 1.0, vel: 0.92 },  // G4
        { t: 61,   div: 'great', midi: 68, dur: 1.0, vel: 0.93 },  // Ab4
        { t: 62,   div: 'great', midi: 70, dur: 1.0, vel: 0.95 },  // Bb4
        // Chords underneath
        { t: 59,   div: 'great', midi: 60, dur: 1.0, vel: 0.85 },  // C4
        { t: 60,   div: 'great', midi: 63, dur: 1.0, vel: 0.85 },  // Eb4
        { t: 61,   div: 'great', midi: 63, dur: 1.0, vel: 0.85 },  // Eb4
        { t: 62,   div: 'great', midi: 65, dur: 1.0, vel: 0.87 },  // F4

        // Final cadence to F minor
        { t: 63, div: 'pedal', midi: 36, dur: 2.0, vel: 0.88 },    // C2
        { t: 63,   div: 'great', midi: 68, dur: 1.0, vel: 0.93 },  // Ab4
        { t: 63,   div: 'great', midi: 67, dur: 1.0, vel: 0.91 },  // G4
        { t: 63,   div: 'great', midi: 64, dur: 1.0, vel: 0.89 },  // E4
        { t: 64,   div: 'great', midi: 65, dur: 2.0, vel: 0.95 },  // F4
        { t: 64,   div: 'great', midi: 60, dur: 2.0, vel: 0.92 },  // C4
        { t: 64,   div: 'great', midi: 56, dur: 2.0, vel: 0.90 },  // Ab3
        { t: 64,   div: 'great', midi: 53, dur: 2.0, vel: 0.88 },  // F3
        { t: 65, div: 'pedal', midi: 41, dur: 3.0, vel: 0.92 },    // F2
    ]
};


// ============================================================
// 2. Liszt - Fantasy and Fugue on the Theme B-A-C-H, S.260
// ============================================================
// Composed 1855, revised 1870. Premiered at Merseburg Cathedral.
// Built entirely on the BACH motif: Bb-A-C-B (German: B=Bb, H=B natural)
// BACH motif MIDI: Bb3=58, A3=57, C4=60, B3=59 (or octave 4: 70,69,72,71)
// Opens with dramatic statement of the BACH motif in thick chords,
// followed by virtuosic fantasy passages, then a monumental fugue
// with BACH as the subject.
// ============================================================

const PIECE_LISZT_BACH = {
    title: "Fantasy and Fugue on B-A-C-H",
    composer: "Franz Liszt",
    catalog: "S.260",
    key: "Variable (BACH motif)",
    tempo: 72,
    tempoChanges: [
        { t: 0, tempo: 72, label: "Andante maestoso" },
        { t: 28, tempo: 60, label: "Lento" },
        { t: 40, tempo: 108, label: "Allegro (Fugue)" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-clarinet8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== MEASURES 1-3: BACH motif stated dramatically in full organ =====
        // First statement: BACH in octaves, fortissimo, slow and deliberate
        // Bb (B) - dramatic pause between each note
        { t: 0,   div: 'great', midi: 58, dur: 1.8, vel: 0.95 },   // Bb3
        { t: 0,   div: 'great', midi: 70, dur: 1.8, vel: 0.95 },   // Bb4
        { t: 0,   div: 'pedal', midi: 46, dur: 1.8, vel: 0.93 },   // Bb2
        { t: 0,   div: 'pedal', midi: 34, dur: 1.8, vel: 0.90 },   // Bb1
        // A
        { t: 2,   div: 'great', midi: 57, dur: 1.8, vel: 0.95 },   // A3
        { t: 2,   div: 'great', midi: 69, dur: 1.8, vel: 0.95 },   // A4
        { t: 2,   div: 'pedal', midi: 45, dur: 1.8, vel: 0.93 },   // A2
        { t: 2,   div: 'pedal', midi: 33, dur: 1.8, vel: 0.90 },   // A1
        // C
        { t: 4,   div: 'great', midi: 60, dur: 1.8, vel: 0.96 },   // C4
        { t: 4,   div: 'great', midi: 72, dur: 1.8, vel: 0.96 },   // C5
        { t: 4,   div: 'pedal', midi: 48, dur: 1.8, vel: 0.94 },   // C3
        { t: 4,   div: 'pedal', midi: 36, dur: 1.8, vel: 0.91 },   // C2
        // H (B natural)
        { t: 6,   div: 'great', midi: 59, dur: 2.5, vel: 0.97 },   // B3
        { t: 6,   div: 'great', midi: 71, dur: 2.5, vel: 0.97 },   // B4
        { t: 6,   div: 'pedal', midi: 47, dur: 2.5, vel: 0.95 },   // B2
        { t: 6,   div: 'pedal', midi: 35, dur: 2.5, vel: 0.92 },   // B1

        // ===== MEASURES 4-6: Thick chords built on BACH fragments =====
        // Chord on Bb with added notes (Bb major cluster)
        { t: 9,   div: 'great', midi: 70, dur: 1.2, vel: 0.93 },   // Bb4
        { t: 9,   div: 'great', midi: 65, dur: 1.2, vel: 0.91 },   // F4
        { t: 9,   div: 'great', midi: 62, dur: 1.2, vel: 0.89 },   // D4
        { t: 9,   div: 'great', midi: 58, dur: 1.2, vel: 0.87 },   // Bb3
        { t: 9,   div: 'pedal', midi: 46, dur: 1.2, vel: 0.90 },   // Bb2
        // Chord on A (A minor cluster)
        { t: 10.5,div: 'great', midi: 69, dur: 1.2, vel: 0.93 },   // A4
        { t: 10.5,div: 'great', midi: 64, dur: 1.2, vel: 0.91 },   // E4
        { t: 10.5,div: 'great', midi: 60, dur: 1.2, vel: 0.89 },   // C4
        { t: 10.5,div: 'great', midi: 57, dur: 1.2, vel: 0.87 },   // A3
        { t: 10.5,div: 'pedal', midi: 45, dur: 1.2, vel: 0.90 },   // A2
        // Chord on C (C major with tension)
        { t: 12,  div: 'great', midi: 72, dur: 1.2, vel: 0.94 },   // C5
        { t: 12,  div: 'great', midi: 67, dur: 1.2, vel: 0.92 },   // G4
        { t: 12,  div: 'great', midi: 64, dur: 1.2, vel: 0.90 },   // E4
        { t: 12,  div: 'great', midi: 60, dur: 1.2, vel: 0.88 },   // C4
        { t: 12,  div: 'pedal', midi: 48, dur: 1.2, vel: 0.91 },   // C3
        // Chord on B (B diminished cluster)
        { t: 13.5,div: 'great', midi: 71, dur: 2.0, vel: 0.95 },   // B4
        { t: 13.5,div: 'great', midi: 65, dur: 2.0, vel: 0.93 },   // F4
        { t: 13.5,div: 'great', midi: 62, dur: 2.0, vel: 0.91 },   // D4
        { t: 13.5,div: 'great', midi: 59, dur: 2.0, vel: 0.89 },   // B3
        { t: 13.5,div: 'pedal', midi: 47, dur: 2.0, vel: 0.92 },   // B2

        // ===== MEASURES 7-10: Fantasy - virtuosic scales and arpeggios =====
        // Rapid ascending scale derived from BACH
        { t: 16,   div: 'great', midi: 58, dur: 0.2, vel: 0.85 },  // Bb3
        { t: 16.2, div: 'great', midi: 60, dur: 0.2, vel: 0.86 },  // C4
        { t: 16.4, div: 'great', midi: 62, dur: 0.2, vel: 0.87 },  // D4
        { t: 16.6, div: 'great', midi: 63, dur: 0.2, vel: 0.88 },  // Eb4
        { t: 16.8, div: 'great', midi: 65, dur: 0.2, vel: 0.89 },  // F4
        { t: 17,   div: 'great', midi: 67, dur: 0.2, vel: 0.90 },  // G4
        { t: 17.2, div: 'great', midi: 69, dur: 0.2, vel: 0.91 },  // A4
        { t: 17.4, div: 'great', midi: 70, dur: 0.2, vel: 0.92 },  // Bb4
        { t: 17.6, div: 'great', midi: 72, dur: 0.2, vel: 0.93 },  // C5
        { t: 17.8, div: 'great', midi: 74, dur: 0.2, vel: 0.94 },  // D5
        { t: 18,   div: 'great', midi: 75, dur: 0.2, vel: 0.95 },  // Eb5
        { t: 18.2, div: 'great', midi: 77, dur: 0.5, vel: 0.96 },  // F5

        // Pedal: BACH motif low
        { t: 16,   div: 'pedal', midi: 34, dur: 1.5, vel: 0.85 },  // Bb1
        { t: 17.5, div: 'pedal', midi: 33, dur: 1.5, vel: 0.85 },  // A1

        // Descending chromatic cascade
        { t: 19,   div: 'great', midi: 77, dur: 0.15, vel: 0.90 }, // F5
        { t: 19.15,div: 'great', midi: 76, dur: 0.15, vel: 0.89 }, // E5
        { t: 19.3, div: 'great', midi: 75, dur: 0.15, vel: 0.88 }, // Eb5
        { t: 19.45,div: 'great', midi: 74, dur: 0.15, vel: 0.87 }, // D5
        { t: 19.6, div: 'great', midi: 72, dur: 0.15, vel: 0.86 }, // C5
        { t: 19.75,div: 'great', midi: 71, dur: 0.15, vel: 0.85 }, // B4
        { t: 19.9, div: 'great', midi: 70, dur: 0.15, vel: 0.84 }, // Bb4
        { t: 20.05,div: 'great', midi: 69, dur: 0.15, vel: 0.83 }, // A4
        { t: 20.2, div: 'great', midi: 67, dur: 0.15, vel: 0.82 }, // G4
        { t: 20.35,div: 'great', midi: 65, dur: 0.15, vel: 0.81 }, // F4
        { t: 20.5, div: 'great', midi: 64, dur: 0.15, vel: 0.80 }, // E4
        { t: 20.65,div: 'great', midi: 62, dur: 0.15, vel: 0.79 }, // D4
        { t: 20.8, div: 'great', midi: 60, dur: 0.15, vel: 0.78 }, // C4
        { t: 20.95,div: 'great', midi: 59, dur: 0.5,  vel: 0.80 }, // B3

        { t: 19,   div: 'pedal', midi: 36, dur: 1.5, vel: 0.85 },  // C2
        { t: 20.5, div: 'pedal', midi: 35, dur: 1.5, vel: 0.85 },  // B1

        // ===== MEASURES 11-14: BACH motif fragmented in different registers =====
        // High register: B-A in octaves
        { t: 22,   div: 'great', midi: 70, dur: 0.8, vel: 0.88 },  // Bb4
        { t: 22,   div: 'great', midi: 82, dur: 0.8, vel: 0.88 },  // Bb5
        { t: 23,   div: 'great', midi: 69, dur: 0.8, vel: 0.87 },  // A4
        { t: 23,   div: 'great', midi: 81, dur: 0.8, vel: 0.87 },  // A5

        // Low register answer: C-H
        { t: 24,   div: 'great', midi: 48, dur: 0.8, vel: 0.86 },  // C3
        { t: 24,   div: 'great', midi: 60, dur: 0.8, vel: 0.86 },  // C4
        { t: 25,   div: 'great', midi: 47, dur: 0.8, vel: 0.85 },  // B2
        { t: 25,   div: 'great', midi: 59, dur: 0.8, vel: 0.85 },  // B3

        { t: 22,   div: 'pedal', midi: 46, dur: 2.0, vel: 0.82 },  // Bb2
        { t: 24,   div: 'pedal', midi: 36, dur: 2.0, vel: 0.82 },  // C2

        // Full BACH statement with rich harmonization
        { t: 26,   div: 'great', midi: 70, dur: 0.7, vel: 0.90 },  // Bb4
        { t: 26,   div: 'great', midi: 58, dur: 0.7, vel: 0.88 },  // Bb3
        { t: 26,   div: 'swell', midi: 65, dur: 0.7, vel: 0.78 },  // F4
        { t: 26,   div: 'swell', midi: 62, dur: 0.7, vel: 0.76 },  // D4
        { t: 26.8, div: 'great', midi: 69, dur: 0.7, vel: 0.89 },  // A4
        { t: 26.8, div: 'great', midi: 57, dur: 0.7, vel: 0.87 },  // A3
        { t: 26.8, div: 'swell', midi: 64, dur: 0.7, vel: 0.77 },  // E4
        { t: 26.8, div: 'swell', midi: 60, dur: 0.7, vel: 0.75 },  // C4
        { t: 27.6, div: 'great', midi: 72, dur: 0.7, vel: 0.91 },  // C5
        { t: 27.6, div: 'great', midi: 60, dur: 0.7, vel: 0.89 },  // C4
        { t: 27.6, div: 'swell', midi: 67, dur: 0.7, vel: 0.79 },  // G4
        { t: 27.6, div: 'swell', midi: 64, dur: 0.7, vel: 0.77 },  // E4
        { t: 28.4, div: 'great', midi: 71, dur: 1.5, vel: 0.93 },  // B4
        { t: 28.4, div: 'great', midi: 59, dur: 1.5, vel: 0.91 },  // B3
        { t: 28.4, div: 'swell', midi: 66, dur: 1.5, vel: 0.80 },  // F#4
        { t: 28.4, div: 'swell', midi: 62, dur: 1.5, vel: 0.78 },  // D4
        { t: 26,   div: 'pedal', midi: 46, dur: 1.5, vel: 0.85 },  // Bb2
        { t: 27.6, div: 'pedal', midi: 36, dur: 2.5, vel: 0.87 },  // C2

        // ===== MEASURES 15-17: Lento - contemplative BACH meditation =====
        // Quiet, sustained BACH on Swell with tremulant
        { t: 30,   div: 'swell', midi: 70, dur: 2.0, vel: 0.55 },  // Bb4
        { t: 30,   div: 'swell', midi: 58, dur: 2.0, vel: 0.50 },  // Bb3
        { t: 32,   div: 'swell', midi: 69, dur: 2.0, vel: 0.53 },  // A4
        { t: 32,   div: 'swell', midi: 57, dur: 2.0, vel: 0.48 },  // A3
        { t: 34,   div: 'swell', midi: 72, dur: 2.0, vel: 0.57 },  // C5
        { t: 34,   div: 'swell', midi: 60, dur: 2.0, vel: 0.52 },  // C4
        { t: 36,   div: 'swell', midi: 71, dur: 3.0, vel: 0.60 },  // B4
        { t: 36,   div: 'swell', midi: 59, dur: 3.0, vel: 0.55 },  // B3

        // Gentle pedal
        { t: 30,   div: 'pedal', midi: 46, dur: 4.0, vel: 0.50 },  // Bb2
        { t: 34,   div: 'pedal', midi: 47, dur: 5.0, vel: 0.52 },  // B2

        // ===== MEASURES 18-24: FUGUE - BACH as fugue subject =====
        // Fugue subject: Bb-A-C-B, then continuation with stepwise motion
        // Subject in tenor on Great, single voice
        { t: 40,   div: 'great', midi: 58, dur: 0.75, vel: 0.80 }, // Bb3
        { t: 40.75,div: 'great', midi: 57, dur: 0.75, vel: 0.78 }, // A3
        { t: 41.5, div: 'great', midi: 60, dur: 0.75, vel: 0.82 }, // C4
        { t: 42.25,div: 'great', midi: 59, dur: 0.75, vel: 0.80 }, // B3
        // Continuation: scale passage
        { t: 43,   div: 'great', midi: 60, dur: 0.5, vel: 0.78 },  // C4
        { t: 43.5, div: 'great', midi: 62, dur: 0.5, vel: 0.79 },  // D4
        { t: 44,   div: 'great', midi: 63, dur: 0.5, vel: 0.80 },  // Eb4
        { t: 44.5, div: 'great', midi: 62, dur: 0.5, vel: 0.79 },  // D4
        { t: 45,   div: 'great', midi: 60, dur: 0.5, vel: 0.78 },  // C4
        { t: 45.5, div: 'great', midi: 58, dur: 0.75, vel: 0.80 }, // Bb3

        // Answer in alto at the 5th: F-E-G-F#
        { t: 46.5, div: 'great', midi: 65, dur: 0.75, vel: 0.82 }, // F4
        { t: 47.25,div: 'great', midi: 64, dur: 0.75, vel: 0.80 }, // E4
        { t: 48,   div: 'great', midi: 67, dur: 0.75, vel: 0.84 }, // G4
        { t: 48.75,div: 'great', midi: 66, dur: 0.75, vel: 0.82 }, // F#4
        // Answer continuation
        { t: 49.5, div: 'great', midi: 67, dur: 0.5, vel: 0.80 },  // G4
        { t: 50,   div: 'great', midi: 69, dur: 0.5, vel: 0.81 },  // A4
        { t: 50.5, div: 'great', midi: 70, dur: 0.5, vel: 0.82 },  // Bb4
        { t: 51,   div: 'great', midi: 69, dur: 0.5, vel: 0.81 },  // A4
        { t: 51.5, div: 'great', midi: 67, dur: 0.5, vel: 0.80 },  // G4
        { t: 52,   div: 'great', midi: 65, dur: 0.75, vel: 0.82 }, // F4

        // Tenor countersubject while alto has answer
        { t: 46.5, div: 'great', midi: 58, dur: 0.5, vel: 0.72 },  // Bb3
        { t: 47,   div: 'great', midi: 60, dur: 0.5, vel: 0.73 },  // C4
        { t: 47.5, div: 'great', midi: 58, dur: 0.5, vel: 0.72 },  // Bb3
        { t: 48,   div: 'great', midi: 57, dur: 0.5, vel: 0.71 },  // A3
        { t: 48.5, div: 'great', midi: 55, dur: 0.5, vel: 0.70 },  // G3
        { t: 49,   div: 'great', midi: 57, dur: 0.5, vel: 0.71 },  // A3
        { t: 49.5, div: 'great', midi: 58, dur: 0.5, vel: 0.72 },  // Bb3
        { t: 50,   div: 'great', midi: 60, dur: 0.5, vel: 0.73 },  // C4
        { t: 50.5, div: 'great', midi: 62, dur: 0.5, vel: 0.74 },  // D4
        { t: 51,   div: 'great', midi: 60, dur: 0.5, vel: 0.73 },  // C4
        { t: 51.5, div: 'great', midi: 58, dur: 0.5, vel: 0.72 },  // Bb3
        { t: 52,   div: 'great', midi: 57, dur: 0.75, vel: 0.71 }, // A3

        // Subject in soprano: Bb4-A4-C5-B4
        { t: 53,   div: 'great', midi: 70, dur: 0.75, vel: 0.85 }, // Bb4
        { t: 53.75,div: 'great', midi: 69, dur: 0.75, vel: 0.83 }, // A4
        { t: 54.5, div: 'great', midi: 72, dur: 0.75, vel: 0.87 }, // C5
        { t: 55.25,div: 'great', midi: 71, dur: 0.75, vel: 0.85 }, // B4
        // Soprano continuation
        { t: 56,   div: 'great', midi: 72, dur: 0.5, vel: 0.83 },  // C5
        { t: 56.5, div: 'great', midi: 74, dur: 0.5, vel: 0.84 },  // D5
        { t: 57,   div: 'great', midi: 75, dur: 0.5, vel: 0.85 },  // Eb5
        { t: 57.5, div: 'great', midi: 74, dur: 0.5, vel: 0.84 },  // D5
        { t: 58,   div: 'great', midi: 72, dur: 0.5, vel: 0.83 },  // C5
        { t: 58.5, div: 'great', midi: 70, dur: 0.75, vel: 0.85 }, // Bb4

        // Subject in pedal (bass entry): Bb2-A2-C3-B2
        { t: 53,   div: 'pedal', midi: 46, dur: 0.75, vel: 0.85 }, // Bb2
        { t: 53.75,div: 'pedal', midi: 45, dur: 0.75, vel: 0.83 }, // A2
        { t: 54.5, div: 'pedal', midi: 48, dur: 0.75, vel: 0.87 }, // C3
        { t: 55.25,div: 'pedal', midi: 47, dur: 0.75, vel: 0.85 }, // B2
        // Pedal continuation
        { t: 56,   div: 'pedal', midi: 48, dur: 0.5, vel: 0.83 },  // C3
        { t: 56.5, div: 'pedal', midi: 50, dur: 0.5, vel: 0.84 },  // D3
        { t: 57,   div: 'pedal', midi: 51, dur: 0.5, vel: 0.85 },  // Eb3
        { t: 57.5, div: 'pedal', midi: 50, dur: 0.5, vel: 0.84 },  // D3
        { t: 58,   div: 'pedal', midi: 48, dur: 0.5, vel: 0.83 },  // C3
        { t: 58.5, div: 'pedal', midi: 46, dur: 0.75, vel: 0.85 }, // Bb2

        // Alto and tenor continue freely
        { t: 53,   div: 'great', midi: 62, dur: 1.0, vel: 0.75 },  // D4
        { t: 54,   div: 'great', midi: 63, dur: 1.0, vel: 0.75 },  // Eb4
        { t: 55,   div: 'great', midi: 65, dur: 1.0, vel: 0.76 },  // F4
        { t: 56,   div: 'great', midi: 63, dur: 1.0, vel: 0.75 },  // Eb4
        { t: 57,   div: 'great', midi: 62, dur: 1.0, vel: 0.74 },  // D4
        { t: 58,   div: 'great', midi: 60, dur: 1.5, vel: 0.75 },  // C4

        { t: 53,   div: 'great', midi: 55, dur: 1.0, vel: 0.70 },  // G3
        { t: 54,   div: 'great', midi: 57, dur: 1.0, vel: 0.71 },  // A3
        { t: 55,   div: 'great', midi: 58, dur: 1.0, vel: 0.72 },  // Bb3
        { t: 56,   div: 'great', midi: 57, dur: 1.0, vel: 0.71 },  // A3
        { t: 57,   div: 'great', midi: 55, dur: 1.0, vel: 0.70 },  // G3
        { t: 58,   div: 'great', midi: 53, dur: 1.5, vel: 0.71 },  // F3

        // ===== MEASURES 25-30: Fugue intensifies - stretto =====
        // BACH in stretto (overlapping entries)
        // Soprano
        { t: 60,   div: 'great', midi: 70, dur: 0.5, vel: 0.90 },  // Bb4
        { t: 60.5, div: 'great', midi: 69, dur: 0.5, vel: 0.88 },  // A4
        { t: 61,   div: 'great', midi: 72, dur: 0.5, vel: 0.92 },  // C5
        { t: 61.5, div: 'great', midi: 71, dur: 0.5, vel: 0.90 },  // B4
        // Alto enters 1 beat later
        { t: 61,   div: 'great', midi: 58, dur: 0.5, vel: 0.85 },  // Bb3
        { t: 61.5, div: 'great', midi: 57, dur: 0.5, vel: 0.83 },  // A3
        { t: 62,   div: 'great', midi: 60, dur: 0.5, vel: 0.87 },  // C4
        { t: 62.5, div: 'great', midi: 59, dur: 0.5, vel: 0.85 },  // B3
        // Tenor enters 1 beat after alto
        { t: 62,   div: 'great', midi: 46, dur: 0.5, vel: 0.82 },  // Bb2
        { t: 62.5, div: 'great', midi: 45, dur: 0.5, vel: 0.80 },  // A2
        { t: 63,   div: 'great', midi: 48, dur: 0.5, vel: 0.84 },  // C3
        { t: 63.5, div: 'great', midi: 47, dur: 0.5, vel: 0.82 },  // B2
        // Pedal
        { t: 63,   div: 'pedal', midi: 34, dur: 0.5, vel: 0.88 },  // Bb1
        { t: 63.5, div: 'pedal', midi: 33, dur: 0.5, vel: 0.86 },  // A1
        { t: 64,   div: 'pedal', midi: 36, dur: 0.5, vel: 0.90 },  // C2
        { t: 64.5, div: 'pedal', midi: 35, dur: 0.5, vel: 0.88 },  // B1

        // Soprano continuation - triumphant scales
        { t: 62,   div: 'great', midi: 72, dur: 0.5, vel: 0.90 },  // C5
        { t: 62.5, div: 'great', midi: 74, dur: 0.5, vel: 0.91 },  // D5
        { t: 63,   div: 'great', midi: 75, dur: 0.5, vel: 0.92 },  // Eb5
        { t: 63.5, div: 'great', midi: 77, dur: 0.5, vel: 0.93 },  // F5
        { t: 64,   div: 'great', midi: 79, dur: 0.5, vel: 0.94 },  // G5
        { t: 64.5, div: 'great', midi: 77, dur: 0.5, vel: 0.93 },  // F5
        { t: 65,   div: 'great', midi: 75, dur: 0.5, vel: 0.92 },  // Eb5
        { t: 65.5, div: 'great', midi: 74, dur: 0.5, vel: 0.91 },  // D5

        // ===== MEASURES 31-34: Grand conclusion =====
        // Final BACH statement fff with full organ
        { t: 66,   div: 'great', midi: 70, dur: 1.5, vel: 0.97 },  // Bb4
        { t: 66,   div: 'great', midi: 58, dur: 1.5, vel: 0.95 },  // Bb3
        { t: 66,   div: 'pedal', midi: 46, dur: 1.5, vel: 0.95 },  // Bb2
        { t: 66,   div: 'pedal', midi: 34, dur: 1.5, vel: 0.92 },  // Bb1
        { t: 67.5, div: 'great', midi: 69, dur: 1.5, vel: 0.97 },  // A4
        { t: 67.5, div: 'great', midi: 57, dur: 1.5, vel: 0.95 },  // A3
        { t: 67.5, div: 'pedal', midi: 45, dur: 1.5, vel: 0.95 },  // A2
        { t: 67.5, div: 'pedal', midi: 33, dur: 1.5, vel: 0.92 },  // A1
        { t: 69,   div: 'great', midi: 72, dur: 1.5, vel: 0.98 },  // C5
        { t: 69,   div: 'great', midi: 60, dur: 1.5, vel: 0.96 },  // C4
        { t: 69,   div: 'pedal', midi: 48, dur: 1.5, vel: 0.96 },  // C3
        { t: 69,   div: 'pedal', midi: 36, dur: 1.5, vel: 0.93 },  // C2
        // Final B chord - massive resolution
        { t: 70.5, div: 'great', midi: 71, dur: 3.0, vel: 0.99 },  // B4
        { t: 70.5, div: 'great', midi: 66, dur: 3.0, vel: 0.97 },  // F#4
        { t: 70.5, div: 'great', midi: 62, dur: 3.0, vel: 0.95 },  // D#4
        { t: 70.5, div: 'great', midi: 59, dur: 3.0, vel: 0.93 },  // B3
        { t: 70.5, div: 'pedal', midi: 47, dur: 3.0, vel: 0.97 },  // B2
        { t: 70.5, div: 'pedal', midi: 35, dur: 3.0, vel: 0.95 },  // B1
    ]
};


// ============================================================
// 3. Reger - Introduction and Passacaglia in D minor, WoO IV/6
// ============================================================
// Composed 1899 for the "Schonberger Orgelalbum"
// Key: D minor. The Introduction sets the mood with dramatic gestures,
// then the Passacaglia presents an 8-bar bass theme (ground bass)
// in D minor which repeats with increasingly elaborate upper voices.
// Dense, chromatic harmony characteristic of Reger's organ writing.
// ============================================================

const PIECE_REGER_PASSACAGLIA = {
    title: "Introduction and Passacaglia in D minor",
    composer: "Max Reger",
    catalog: "WoO IV/6",
    key: "D minor",
    tempo: 66,
    tempoChanges: [
        { t: 0, tempo: 66, label: "Grave (Introduction)" },
        { t: 20, tempo: 72, label: "Andante (Passacaglia)" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ===== INTRODUCTION: Grave, dramatic chords in D minor =====

        // ===== MEASURE 1: Opening D minor chord, dark and solemn =====
        { t: 0,   div: 'great', midi: 62, dur: 2.0, vel: 0.90 },   // D4
        { t: 0,   div: 'great', midi: 57, dur: 2.0, vel: 0.88 },   // A3
        { t: 0,   div: 'great', midi: 53, dur: 2.0, vel: 0.86 },   // F3
        { t: 0,   div: 'great', midi: 50, dur: 2.0, vel: 0.84 },   // D3
        { t: 0,   div: 'pedal', midi: 38, dur: 2.0, vel: 0.88 },   // D2
        // Chromatic motion upward
        { t: 2,   div: 'great', midi: 63, dur: 1.5, vel: 0.88 },   // Eb4
        { t: 2,   div: 'great', midi: 58, dur: 1.5, vel: 0.86 },   // Bb3
        { t: 2,   div: 'great', midi: 55, dur: 1.5, vel: 0.84 },   // G3
        { t: 2,   div: 'pedal', midi: 43, dur: 1.5, vel: 0.86 },   // G2

        // ===== MEASURE 2: Intensifying =====
        { t: 3.5, div: 'great', midi: 65, dur: 1.5, vel: 0.92 },   // F4
        { t: 3.5, div: 'great', midi: 60, dur: 1.5, vel: 0.90 },   // C4
        { t: 3.5, div: 'great', midi: 57, dur: 1.5, vel: 0.88 },   // A3
        { t: 3.5, div: 'pedal', midi: 41, dur: 1.5, vel: 0.90 },   // F2
        // Diminished chord
        { t: 5,   div: 'great', midi: 64, dur: 1.5, vel: 0.91 },   // E4
        { t: 5,   div: 'great', midi: 61, dur: 1.5, vel: 0.89 },   // Db4
        { t: 5,   div: 'great', midi: 58, dur: 1.5, vel: 0.87 },   // Bb3
        { t: 5,   div: 'pedal', midi: 40, dur: 1.5, vel: 0.89 },   // E2

        // ===== MEASURES 3-4: Descending chromatic passage =====
        { t: 6.5, div: 'great', midi: 65, dur: 0.75, vel: 0.88 },  // F4
        { t: 7.25,div: 'great', midi: 64, dur: 0.75, vel: 0.87 },  // E4
        { t: 8,   div: 'great', midi: 63, dur: 0.75, vel: 0.86 },  // Eb4
        { t: 8.75,div: 'great', midi: 62, dur: 0.75, vel: 0.85 },  // D4
        // Bass descending
        { t: 6.5, div: 'great', midi: 53, dur: 0.75, vel: 0.82 },  // F3
        { t: 7.25,div: 'great', midi: 52, dur: 0.75, vel: 0.81 },  // E3
        { t: 8,   div: 'great', midi: 51, dur: 0.75, vel: 0.80 },  // Eb3
        { t: 8.75,div: 'great', midi: 50, dur: 0.75, vel: 0.79 },  // D3
        // Inner voices
        { t: 6.5, div: 'swell', midi: 60, dur: 0.75, vel: 0.75 },  // C4
        { t: 7.25,div: 'swell', midi: 59, dur: 0.75, vel: 0.74 },  // B3
        { t: 8,   div: 'swell', midi: 58, dur: 0.75, vel: 0.73 },  // Bb3
        { t: 8.75,div: 'swell', midi: 57, dur: 0.75, vel: 0.72 },  // A3
        // Pedal
        { t: 6.5, div: 'pedal', midi: 41, dur: 1.5, vel: 0.85 },   // F2
        { t: 8,   div: 'pedal', midi: 38, dur: 1.5, vel: 0.83 },   // D2

        // ===== MEASURES 5-6: Climax of introduction =====
        { t: 9.5, div: 'great', midi: 65, dur: 1.0, vel: 0.95 },   // F4
        { t: 9.5, div: 'great', midi: 62, dur: 1.0, vel: 0.93 },   // D4
        { t: 9.5, div: 'great', midi: 57, dur: 1.0, vel: 0.91 },   // A3
        { t: 9.5, div: 'pedal', midi: 38, dur: 1.0, vel: 0.93 },   // D2
        // Neapolitan chord (Eb major)
        { t: 10.5,div: 'great', midi: 67, dur: 1.5, vel: 0.94 },   // G4
        { t: 10.5,div: 'great', midi: 63, dur: 1.5, vel: 0.92 },   // Eb4
        { t: 10.5,div: 'great', midi: 58, dur: 1.5, vel: 0.90 },   // Bb3
        { t: 10.5,div: 'pedal', midi: 39, dur: 1.5, vel: 0.92 },   // Eb2
        // Dominant A major
        { t: 12,  div: 'great', midi: 69, dur: 1.0, vel: 0.93 },   // A4
        { t: 12,  div: 'great', midi: 64, dur: 1.0, vel: 0.91 },   // E4
        { t: 12,  div: 'great', midi: 61, dur: 1.0, vel: 0.89 },   // C#4
        { t: 12,  div: 'pedal', midi: 45, dur: 1.0, vel: 0.91 },   // A2

        // ===== MEASURES 7-8: Introduction cadence to D minor =====
        // Augmented 6th approach
        { t: 13,  div: 'great', midi: 66, dur: 1.0, vel: 0.90 },   // F#4
        { t: 13,  div: 'great', midi: 63, dur: 1.0, vel: 0.88 },   // Eb4
        { t: 13,  div: 'great', midi: 60, dur: 1.0, vel: 0.86 },   // C4
        { t: 13,  div: 'pedal', midi: 44, dur: 1.0, vel: 0.88 },   // Ab2
        // Dominant with suspension
        { t: 14,  div: 'great', midi: 67, dur: 0.75, vel: 0.90 },  // G4
        { t: 14,  div: 'great', midi: 64, dur: 0.75, vel: 0.88 },  // E4
        { t: 14,  div: 'great', midi: 61, dur: 0.75, vel: 0.86 },  // C#4
        { t: 14.75,div: 'great', midi: 65, dur: 1.0, vel: 0.88 },  // F4 (suspension)
        { t: 15.75,div: 'great', midi: 64, dur: 0.5, vel: 0.87 },  // E4 (resolution)
        { t: 14,  div: 'pedal', midi: 45, dur: 2.5, vel: 0.90 },   // A2

        // Cadential arrival: D minor
        { t: 16.5,div: 'great', midi: 62, dur: 2.0, vel: 0.85 },   // D4
        { t: 16.5,div: 'great', midi: 57, dur: 2.0, vel: 0.83 },   // A3
        { t: 16.5,div: 'great', midi: 53, dur: 2.0, vel: 0.81 },   // F3
        { t: 16.5,div: 'great', midi: 50, dur: 2.0, vel: 0.79 },   // D3
        { t: 16.5,div: 'pedal', midi: 38, dur: 3.0, vel: 0.85 },   // D2

        // ===== PASSACAGLIA: 8-bar ground bass theme in D minor =====
        // Bass theme: D-E-F-G-A-Bb-G-A-D (descending to cadence)
        // The theme repeats with increasingly complex upper voices

        // ===== VARIATION 1: Theme alone in pedal =====
        { t: 20,   div: 'pedal', midi: 38, dur: 1.5, vel: 0.78 },  // D2
        { t: 21.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.78 },  // E2
        { t: 23,   div: 'pedal', midi: 41, dur: 1.5, vel: 0.80 },  // F2
        { t: 24.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.82 },  // G2
        { t: 26,   div: 'pedal', midi: 45, dur: 1.5, vel: 0.83 },  // A2
        { t: 27.5, div: 'pedal', midi: 46, dur: 1.5, vel: 0.82 },  // Bb2
        { t: 29,   div: 'pedal', midi: 43, dur: 1.0, vel: 0.80 },  // G2
        { t: 30,   div: 'pedal', midi: 45, dur: 1.0, vel: 0.82 },  // A2
        { t: 31,   div: 'pedal', midi: 38, dur: 2.0, vel: 0.85 },  // D2

        // Simple soprano melody on Swell over theme
        { t: 20,   div: 'swell', midi: 74, dur: 1.5, vel: 0.58 },  // D5
        { t: 21.5, div: 'swell', midi: 72, dur: 1.5, vel: 0.57 },  // C5
        { t: 23,   div: 'swell', midi: 70, dur: 1.5, vel: 0.56 },  // Bb4
        { t: 24.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.58 },  // A4
        { t: 26,   div: 'swell', midi: 67, dur: 1.5, vel: 0.60 },  // G4
        { t: 27.5, div: 'swell', midi: 65, dur: 1.5, vel: 0.58 },  // F4
        { t: 29,   div: 'swell', midi: 67, dur: 1.0, vel: 0.57 },  // G4
        { t: 30,   div: 'swell', midi: 64, dur: 1.0, vel: 0.59 },  // E4
        { t: 31,   div: 'swell', midi: 62, dur: 2.0, vel: 0.60 },  // D4

        // ===== VARIATION 2: Theme in pedal, two-voice counterpoint above =====
        { t: 33,   div: 'pedal', midi: 38, dur: 1.5, vel: 0.80 },  // D2
        { t: 34.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.80 },  // E2
        { t: 36,   div: 'pedal', midi: 41, dur: 1.5, vel: 0.82 },  // F2
        { t: 37.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.84 },  // G2
        { t: 39,   div: 'pedal', midi: 45, dur: 1.5, vel: 0.85 },  // A2
        { t: 40.5, div: 'pedal', midi: 46, dur: 1.5, vel: 0.84 },  // Bb2
        { t: 42,   div: 'pedal', midi: 43, dur: 1.0, vel: 0.82 },  // G2
        { t: 43,   div: 'pedal', midi: 45, dur: 1.0, vel: 0.84 },  // A2
        { t: 44,   div: 'pedal', midi: 38, dur: 2.0, vel: 0.87 },  // D2

        // Soprano: more elaborate melody
        { t: 33,   div: 'swell', midi: 69, dur: 0.75, vel: 0.65 }, // A4
        { t: 33.75,div: 'swell', midi: 70, dur: 0.75, vel: 0.67 }, // Bb4
        { t: 34.5, div: 'swell', midi: 72, dur: 0.75, vel: 0.68 }, // C5
        { t: 35.25,div: 'swell', midi: 74, dur: 0.75, vel: 0.70 }, // D5
        { t: 36,   div: 'swell', midi: 72, dur: 0.75, vel: 0.68 }, // C5
        { t: 36.75,div: 'swell', midi: 70, dur: 0.75, vel: 0.67 }, // Bb4
        { t: 37.5, div: 'swell', midi: 69, dur: 0.75, vel: 0.68 }, // A4
        { t: 38.25,div: 'swell', midi: 67, dur: 0.75, vel: 0.67 }, // G4
        { t: 39,   div: 'swell', midi: 69, dur: 0.75, vel: 0.70 }, // A4
        { t: 39.75,div: 'swell', midi: 72, dur: 0.75, vel: 0.72 }, // C5
        { t: 40.5, div: 'swell', midi: 70, dur: 0.75, vel: 0.70 }, // Bb4
        { t: 41.25,div: 'swell', midi: 69, dur: 0.75, vel: 0.68 }, // A4
        { t: 42,   div: 'swell', midi: 67, dur: 0.75, vel: 0.67 }, // G4
        { t: 42.75,div: 'swell', midi: 65, dur: 0.75, vel: 0.66 }, // F4
        { t: 43.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.68 },  // E4
        { t: 44,   div: 'swell', midi: 62, dur: 2.0, vel: 0.70 },  // D4

        // Alto voice
        { t: 33,   div: 'swell', midi: 62, dur: 1.5, vel: 0.58 },  // D4
        { t: 34.5, div: 'swell', midi: 64, dur: 1.5, vel: 0.59 },  // E4
        { t: 36,   div: 'swell', midi: 65, dur: 1.5, vel: 0.60 },  // F4
        { t: 37.5, div: 'swell', midi: 62, dur: 1.5, vel: 0.58 },  // D4
        { t: 39,   div: 'swell', midi: 64, dur: 1.5, vel: 0.60 },  // E4
        { t: 40.5, div: 'swell', midi: 62, dur: 1.5, vel: 0.58 },  // D4
        { t: 42,   div: 'swell', midi: 60, dur: 1.0, vel: 0.57 },  // C4
        { t: 43,   div: 'swell', midi: 61, dur: 1.0, vel: 0.59 },  // C#4
        { t: 44,   div: 'swell', midi: 57, dur: 2.0, vel: 0.60 },  // A3

        // ===== VARIATION 3: Fuller texture, Great organ joins =====
        { t: 46,   div: 'pedal', midi: 38, dur: 1.5, vel: 0.83 },  // D2
        { t: 47.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.83 },  // E2
        { t: 49,   div: 'pedal', midi: 41, dur: 1.5, vel: 0.85 },  // F2
        { t: 50.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.87 },  // G2
        { t: 52,   div: 'pedal', midi: 45, dur: 1.5, vel: 0.88 },  // A2
        { t: 53.5, div: 'pedal', midi: 46, dur: 1.5, vel: 0.87 },  // Bb2
        { t: 55,   div: 'pedal', midi: 43, dur: 1.0, vel: 0.85 },  // G2
        { t: 56,   div: 'pedal', midi: 45, dur: 1.0, vel: 0.87 },  // A2
        { t: 57,   div: 'pedal', midi: 38, dur: 2.0, vel: 0.90 },  // D2

        // Soprano on Great - increasingly chromatic
        { t: 46,   div: 'great', midi: 74, dur: 0.5, vel: 0.80 },  // D5
        { t: 46.5, div: 'great', midi: 73, dur: 0.5, vel: 0.79 },  // C#5
        { t: 47,   div: 'great', midi: 74, dur: 0.5, vel: 0.80 },  // D5
        { t: 47.5, div: 'great', midi: 76, dur: 0.5, vel: 0.82 },  // E5
        { t: 48,   div: 'great', midi: 77, dur: 0.5, vel: 0.83 },  // F5
        { t: 48.5, div: 'great', midi: 76, dur: 0.5, vel: 0.82 },  // E5
        { t: 49,   div: 'great', midi: 77, dur: 0.5, vel: 0.84 },  // F5
        { t: 49.5, div: 'great', midi: 79, dur: 0.5, vel: 0.85 },  // G5
        { t: 50,   div: 'great', midi: 77, dur: 0.5, vel: 0.84 },  // F5
        { t: 50.5, div: 'great', midi: 76, dur: 0.5, vel: 0.83 },  // E5
        { t: 51,   div: 'great', midi: 74, dur: 0.5, vel: 0.82 },  // D5
        { t: 51.5, div: 'great', midi: 72, dur: 0.5, vel: 0.81 },  // C5
        { t: 52,   div: 'great', midi: 73, dur: 0.75, vel: 0.83 }, // C#5
        { t: 52.75,div: 'great', midi: 74, dur: 0.75, vel: 0.84 }, // D5
        { t: 53.5, div: 'great', midi: 72, dur: 0.75, vel: 0.82 }, // C5
        { t: 54.25,div: 'great', midi: 70, dur: 0.75, vel: 0.81 }, // Bb4
        { t: 55,   div: 'great', midi: 69, dur: 0.75, vel: 0.82 }, // A4
        { t: 55.75,div: 'great', midi: 67, dur: 0.75, vel: 0.80 }, // G4
        { t: 56.5, div: 'great', midi: 64, dur: 0.5, vel: 0.82 },  // E4
        { t: 57,   div: 'great', midi: 62, dur: 2.0, vel: 0.85 },  // D4

        // Alto and tenor harmonies
        { t: 46,   div: 'great', midi: 65, dur: 1.5, vel: 0.73 },  // F4
        { t: 47.5, div: 'great', midi: 67, dur: 1.5, vel: 0.74 },  // G4
        { t: 49,   div: 'great', midi: 69, dur: 1.5, vel: 0.75 },  // A4
        { t: 50.5, div: 'great', midi: 70, dur: 1.5, vel: 0.76 },  // Bb4
        { t: 52,   div: 'great', midi: 69, dur: 1.5, vel: 0.77 },  // A4
        { t: 53.5, div: 'great', midi: 67, dur: 1.5, vel: 0.75 },  // G4
        { t: 55,   div: 'great', midi: 62, dur: 1.0, vel: 0.74 },  // D4
        { t: 56,   div: 'great', midi: 61, dur: 1.0, vel: 0.76 },  // C#4
        { t: 57,   div: 'great', midi: 57, dur: 2.0, vel: 0.78 },  // A3

        // Tenor
        { t: 46,   div: 'great', midi: 57, dur: 1.5, vel: 0.68 },  // A3
        { t: 47.5, div: 'great', midi: 55, dur: 1.5, vel: 0.67 },  // G3
        { t: 49,   div: 'great', midi: 53, dur: 1.5, vel: 0.68 },  // F3
        { t: 50.5, div: 'great', midi: 55, dur: 1.5, vel: 0.69 },  // G3
        { t: 52,   div: 'great', midi: 57, dur: 1.5, vel: 0.70 },  // A3
        { t: 53.5, div: 'great', midi: 58, dur: 1.5, vel: 0.69 },  // Bb3
        { t: 55,   div: 'great', midi: 55, dur: 1.0, vel: 0.68 },  // G3
        { t: 56,   div: 'great', midi: 57, dur: 1.0, vel: 0.70 },  // A3
        { t: 57,   div: 'great', midi: 50, dur: 2.0, vel: 0.72 },  // D3

        // ===== VARIATION 4: Climactic - full organ, dense chords =====
        { t: 59,   div: 'pedal', midi: 38, dur: 1.5, vel: 0.90 },  // D2
        { t: 60.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.90 },  // E2
        { t: 62,   div: 'pedal', midi: 41, dur: 1.5, vel: 0.92 },  // F2
        { t: 63.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.93 },  // G2
        { t: 65,   div: 'pedal', midi: 45, dur: 1.5, vel: 0.94 },  // A2
        { t: 66.5, div: 'pedal', midi: 46, dur: 1.5, vel: 0.93 },  // Bb2
        { t: 68,   div: 'pedal', midi: 43, dur: 1.0, vel: 0.91 },  // G2
        { t: 69,   div: 'pedal', midi: 45, dur: 1.0, vel: 0.93 },  // A2
        { t: 70,   div: 'pedal', midi: 38, dur: 3.0, vel: 0.95 },  // D2

        // Full chords on Great - thick Reger harmony
        { t: 59,   div: 'great', midi: 74, dur: 1.5, vel: 0.90 },  // D5
        { t: 59,   div: 'great', midi: 69, dur: 1.5, vel: 0.88 },  // A4
        { t: 59,   div: 'great', midi: 65, dur: 1.5, vel: 0.86 },  // F4
        { t: 59,   div: 'great', midi: 62, dur: 1.5, vel: 0.84 },  // D4
        { t: 60.5, div: 'great', midi: 76, dur: 1.5, vel: 0.91 },  // E5
        { t: 60.5, div: 'great', midi: 72, dur: 1.5, vel: 0.89 },  // C5
        { t: 60.5, div: 'great', midi: 67, dur: 1.5, vel: 0.87 },  // G4
        { t: 60.5, div: 'great', midi: 64, dur: 1.5, vel: 0.85 },  // E4
        { t: 62,   div: 'great', midi: 77, dur: 1.5, vel: 0.92 },  // F5
        { t: 62,   div: 'great', midi: 72, dur: 1.5, vel: 0.90 },  // C5
        { t: 62,   div: 'great', midi: 69, dur: 1.5, vel: 0.88 },  // A4
        { t: 62,   div: 'great', midi: 65, dur: 1.5, vel: 0.86 },  // F4
        { t: 63.5, div: 'great', midi: 79, dur: 1.5, vel: 0.93 },  // G5
        { t: 63.5, div: 'great', midi: 74, dur: 1.5, vel: 0.91 },  // D5
        { t: 63.5, div: 'great', midi: 70, dur: 1.5, vel: 0.89 },  // Bb4
        { t: 63.5, div: 'great', midi: 67, dur: 1.5, vel: 0.87 },  // G4
        { t: 65,   div: 'great', midi: 81, dur: 1.5, vel: 0.94 },  // A5
        { t: 65,   div: 'great', midi: 76, dur: 1.5, vel: 0.92 },  // E5
        { t: 65,   div: 'great', midi: 72, dur: 1.5, vel: 0.90 },  // C5
        { t: 65,   div: 'great', midi: 69, dur: 1.5, vel: 0.88 },  // A4
        { t: 66.5, div: 'great', midi: 82, dur: 1.5, vel: 0.93 },  // Bb5
        { t: 66.5, div: 'great', midi: 77, dur: 1.5, vel: 0.91 },  // F5
        { t: 66.5, div: 'great', midi: 74, dur: 1.5, vel: 0.89 },  // D5
        { t: 66.5, div: 'great', midi: 70, dur: 1.5, vel: 0.87 },  // Bb4
        // Descending to cadence
        { t: 68,   div: 'great', midi: 79, dur: 1.0, vel: 0.91 },  // G5
        { t: 68,   div: 'great', midi: 74, dur: 1.0, vel: 0.89 },  // D5
        { t: 68,   div: 'great', midi: 70, dur: 1.0, vel: 0.87 },  // Bb4
        { t: 68,   div: 'great', midi: 67, dur: 1.0, vel: 0.85 },  // G4
        { t: 69,   div: 'great', midi: 81, dur: 1.0, vel: 0.93 },  // A5
        { t: 69,   div: 'great', midi: 76, dur: 1.0, vel: 0.91 },  // E5
        { t: 69,   div: 'great', midi: 73, dur: 1.0, vel: 0.89 },  // C#5
        { t: 69,   div: 'great', midi: 69, dur: 1.0, vel: 0.87 },  // A4
        // Final D minor fortissimo
        { t: 70,   div: 'great', midi: 74, dur: 3.0, vel: 0.96 },  // D5
        { t: 70,   div: 'great', midi: 69, dur: 3.0, vel: 0.94 },  // A4
        { t: 70,   div: 'great', midi: 65, dur: 3.0, vel: 0.92 },  // F4
        { t: 70,   div: 'great', midi: 62, dur: 3.0, vel: 0.90 },  // D4
        { t: 70,   div: 'great', midi: 57, dur: 3.0, vel: 0.88 },  // A3
        { t: 70,   div: 'great', midi: 50, dur: 3.0, vel: 0.86 },  // D3
    ]
};


// ============================================================
// 4. Rheinberger - Organ Sonata No. 4 in A minor, Op. 98
// ============================================================
// First movement: Tempo moderato (Senza titolo)
// Composed 1876. Key: A minor. Based on a medieval psalm tone
// which gives the work an archaic gravitas combined with
// Romantic warmth. Classical-Romantic style with well-crafted
// counterpoint and clear, singing melodies.
// The psalm tone returns triumphantly at the climax.
// ============================================================

const PIECE_RHEINBERGER_SONATA4 = {
    title: "Sonata No. 4 in A minor",
    composer: "Josef Rheinberger",
    catalog: "Op. 98",
    key: "A minor",
    tempo: 88,
    tempoChanges: [
        { t: 0, tempo: 88, label: "Tempo moderato" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-flute4'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-octave8']
    },
    events: [
        // ===== MEASURES 1-4: Opening psalm-tone theme in soprano =====
        // Psalm tone in A minor: A-A-B-C-B-A-G#-A (reciting tone on A, cadential figure)
        // Presented simply at first, chorale-like

        // Soprano: psalm tone melody
        { t: 0,    div: 'great', midi: 69, dur: 1.5, vel: 0.78 },  // A4
        { t: 1.5,  div: 'great', midi: 69, dur: 1.0, vel: 0.78 },  // A4
        { t: 2.5,  div: 'great', midi: 71, dur: 1.0, vel: 0.80 },  // B4
        { t: 3.5,  div: 'great', midi: 72, dur: 1.5, vel: 0.82 },  // C5
        { t: 5,    div: 'great', midi: 71, dur: 1.0, vel: 0.80 },  // B4
        { t: 6,    div: 'great', midi: 69, dur: 1.0, vel: 0.78 },  // A4
        { t: 7,    div: 'great', midi: 68, dur: 1.0, vel: 0.77 },  // G#4
        { t: 8,    div: 'great', midi: 69, dur: 2.0, vel: 0.80 },  // A4

        // Alto harmonization
        { t: 0,    div: 'great', midi: 64, dur: 1.5, vel: 0.68 },  // E4
        { t: 1.5,  div: 'great', midi: 64, dur: 1.0, vel: 0.68 },  // E4
        { t: 2.5,  div: 'great', midi: 64, dur: 1.0, vel: 0.68 },  // E4
        { t: 3.5,  div: 'great', midi: 67, dur: 1.5, vel: 0.70 },  // G4
        { t: 5,    div: 'great', midi: 67, dur: 1.0, vel: 0.70 },  // G4
        { t: 6,    div: 'great', midi: 64, dur: 1.0, vel: 0.68 },  // E4
        { t: 7,    div: 'great', midi: 64, dur: 1.0, vel: 0.67 },  // E4
        { t: 8,    div: 'great', midi: 64, dur: 2.0, vel: 0.68 },  // E4

        // Tenor
        { t: 0,    div: 'great', midi: 60, dur: 1.5, vel: 0.63 },  // C4
        { t: 1.5,  div: 'great', midi: 60, dur: 1.0, vel: 0.63 },  // C4
        { t: 2.5,  div: 'great', midi: 59, dur: 1.0, vel: 0.62 },  // B3
        { t: 3.5,  div: 'great', midi: 60, dur: 1.5, vel: 0.63 },  // C4
        { t: 5,    div: 'great', midi: 59, dur: 1.0, vel: 0.62 },  // B3
        { t: 6,    div: 'great', midi: 60, dur: 1.0, vel: 0.63 },  // C4
        { t: 7,    div: 'great', midi: 59, dur: 1.0, vel: 0.62 },  // B3
        { t: 8,    div: 'great', midi: 60, dur: 2.0, vel: 0.63 },  // C4

        // Pedal
        { t: 0,    div: 'pedal', midi: 45, dur: 3.0, vel: 0.72 },  // A2
        { t: 3.5,  div: 'pedal', midi: 48, dur: 2.5, vel: 0.74 },  // C3
        { t: 6,    div: 'pedal', midi: 45, dur: 2.0, vel: 0.72 },  // A2
        { t: 8,    div: 'pedal', midi: 45, dur: 2.0, vel: 0.75 },  // A2

        // ===== MEASURES 5-8: Second phrase - singing melody on Swell =====
        // Lyrical theme: E4-F4-G4-A4-G4-F4-E4-D4-E4
        { t: 10,   div: 'swell', midi: 64, dur: 0.75, vel: 0.70 }, // E4
        { t: 10.75,div: 'swell', midi: 65, dur: 0.75, vel: 0.72 }, // F4
        { t: 11.5, div: 'swell', midi: 67, dur: 0.75, vel: 0.73 }, // G4
        { t: 12.25,div: 'swell', midi: 69, dur: 1.0,  vel: 0.75 }, // A4
        { t: 13.25,div: 'swell', midi: 67, dur: 0.75, vel: 0.73 }, // G4
        { t: 14,   div: 'swell', midi: 65, dur: 0.75, vel: 0.72 }, // F4
        { t: 14.75,div: 'swell', midi: 64, dur: 0.75, vel: 0.70 }, // E4
        { t: 15.5, div: 'swell', midi: 62, dur: 0.75, vel: 0.69 }, // D4
        { t: 16.25,div: 'swell', midi: 64, dur: 1.5,  vel: 0.71 }, // E4

        // Alto countermelody on Swell
        { t: 10,   div: 'swell', midi: 57, dur: 1.5, vel: 0.60 },  // A3
        { t: 11.5, div: 'swell', midi: 59, dur: 1.5, vel: 0.62 },  // B3
        { t: 13,   div: 'swell', midi: 60, dur: 1.5, vel: 0.63 },  // C4
        { t: 14.5, div: 'swell', midi: 59, dur: 1.5, vel: 0.62 },  // B3
        { t: 16,   div: 'swell', midi: 57, dur: 1.75, vel: 0.60 }, // A3

        // Pedal - walking bass
        { t: 10,   div: 'pedal', midi: 45, dur: 1.5, vel: 0.72 },  // A2
        { t: 11.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.71 },  // G2
        { t: 13,   div: 'pedal', midi: 41, dur: 1.5, vel: 0.72 },  // F2
        { t: 14.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.71 },  // E2
        { t: 16,   div: 'pedal', midi: 45, dur: 1.75, vel: 0.73 }, // A2

        // ===== MEASURES 9-12: Development - psalm tone in imitation =====
        // Tenor states psalm tone: A3-A3-B3-C4-B3-A3-G#3-A3
        { t: 18,   div: 'great', midi: 57, dur: 1.0, vel: 0.75 },  // A3
        { t: 19,   div: 'great', midi: 57, dur: 0.75, vel: 0.75 }, // A3
        { t: 19.75,div: 'great', midi: 59, dur: 0.75, vel: 0.77 }, // B3
        { t: 20.5, div: 'great', midi: 60, dur: 1.0, vel: 0.78 },  // C4
        { t: 21.5, div: 'great', midi: 59, dur: 0.75, vel: 0.77 }, // B3
        { t: 22.25,div: 'great', midi: 57, dur: 0.75, vel: 0.75 }, // A3
        { t: 23,   div: 'great', midi: 56, dur: 0.75, vel: 0.74 }, // G#3
        { t: 23.75,div: 'great', midi: 57, dur: 1.25, vel: 0.76 }, // A3

        // Soprano free counterpoint above
        { t: 18,   div: 'great', midi: 72, dur: 0.75, vel: 0.80 }, // C5
        { t: 18.75,div: 'great', midi: 71, dur: 0.75, vel: 0.79 }, // B4
        { t: 19.5, div: 'great', midi: 69, dur: 0.75, vel: 0.78 }, // A4
        { t: 20.25,div: 'great', midi: 72, dur: 0.75, vel: 0.80 }, // C5
        { t: 21,   div: 'great', midi: 74, dur: 0.75, vel: 0.82 }, // D5
        { t: 21.75,div: 'great', midi: 72, dur: 0.75, vel: 0.80 }, // C5
        { t: 22.5, div: 'great', midi: 71, dur: 0.75, vel: 0.79 }, // B4
        { t: 23.25,div: 'great', midi: 69, dur: 0.75, vel: 0.78 }, // A4
        { t: 24,   div: 'great', midi: 67, dur: 1.0, vel: 0.77 },  // G4

        // Alto
        { t: 18,   div: 'great', midi: 64, dur: 1.5, vel: 0.68 },  // E4
        { t: 19.5, div: 'great', midi: 65, dur: 1.5, vel: 0.69 },  // F4
        { t: 21,   div: 'great', midi: 67, dur: 1.5, vel: 0.70 },  // G4
        { t: 22.5, div: 'great', midi: 65, dur: 1.5, vel: 0.69 },  // F4
        { t: 24,   div: 'great', midi: 64, dur: 1.0, vel: 0.68 },  // E4

        // Pedal
        { t: 18,   div: 'pedal', midi: 45, dur: 2.0, vel: 0.72 },  // A2
        { t: 20,   div: 'pedal', midi: 48, dur: 2.0, vel: 0.74 },  // C3
        { t: 22,   div: 'pedal', midi: 47, dur: 2.0, vel: 0.73 },  // B2
        { t: 24,   div: 'pedal', midi: 45, dur: 1.5, vel: 0.72 },  // A2

        // ===== MEASURES 13-16: Bass states psalm tone with full harmony =====
        // Pedal: psalm tone in bass octave: A1-A1-B1-C2-B1-A1-G#1-A1
        { t: 25.5, div: 'pedal', midi: 33, dur: 1.5, vel: 0.80 },  // A1
        { t: 27,   div: 'pedal', midi: 33, dur: 1.0, vel: 0.80 },  // A1
        { t: 28,   div: 'pedal', midi: 35, dur: 1.0, vel: 0.82 },  // B1
        { t: 29,   div: 'pedal', midi: 36, dur: 1.5, vel: 0.84 },  // C2
        { t: 30.5, div: 'pedal', midi: 35, dur: 1.0, vel: 0.82 },  // B1
        { t: 31.5, div: 'pedal', midi: 33, dur: 1.0, vel: 0.80 },  // A1
        { t: 32.5, div: 'pedal', midi: 32, dur: 1.0, vel: 0.79 },  // G#1
        { t: 33.5, div: 'pedal', midi: 33, dur: 2.0, vel: 0.82 },  // A1

        // Full chords above on Great
        { t: 25.5, div: 'great', midi: 69, dur: 1.5, vel: 0.82 },  // A4
        { t: 25.5, div: 'great', midi: 64, dur: 1.5, vel: 0.80 },  // E4
        { t: 25.5, div: 'great', midi: 60, dur: 1.5, vel: 0.78 },  // C4
        { t: 27,   div: 'great', midi: 71, dur: 1.0, vel: 0.83 },  // B4
        { t: 27,   div: 'great', midi: 64, dur: 1.0, vel: 0.80 },  // E4
        { t: 27,   div: 'great', midi: 59, dur: 1.0, vel: 0.78 },  // B3
        { t: 28,   div: 'great', midi: 72, dur: 1.0, vel: 0.84 },  // C5
        { t: 28,   div: 'great', midi: 67, dur: 1.0, vel: 0.82 },  // G4
        { t: 28,   div: 'great', midi: 64, dur: 1.0, vel: 0.80 },  // E4
        { t: 29,   div: 'great', midi: 72, dur: 1.5, vel: 0.85 },  // C5
        { t: 29,   div: 'great', midi: 67, dur: 1.5, vel: 0.83 },  // G4
        { t: 29,   div: 'great', midi: 64, dur: 1.5, vel: 0.81 },  // E4
        { t: 30.5, div: 'great', midi: 71, dur: 1.0, vel: 0.83 },  // B4
        { t: 30.5, div: 'great', midi: 68, dur: 1.0, vel: 0.81 },  // Ab4
        { t: 30.5, div: 'great', midi: 64, dur: 1.0, vel: 0.79 },  // E4
        { t: 31.5, div: 'great', midi: 69, dur: 1.0, vel: 0.82 },  // A4
        { t: 31.5, div: 'great', midi: 64, dur: 1.0, vel: 0.80 },  // E4
        { t: 31.5, div: 'great', midi: 60, dur: 1.0, vel: 0.78 },  // C4
        { t: 32.5, div: 'great', midi: 68, dur: 1.0, vel: 0.81 },  // Ab4
        { t: 32.5, div: 'great', midi: 64, dur: 1.0, vel: 0.79 },  // E4
        { t: 32.5, div: 'great', midi: 59, dur: 1.0, vel: 0.77 },  // B3
        { t: 33.5, div: 'great', midi: 69, dur: 2.0, vel: 0.84 },  // A4
        { t: 33.5, div: 'great', midi: 64, dur: 2.0, vel: 0.82 },  // E4
        { t: 33.5, div: 'great', midi: 60, dur: 2.0, vel: 0.80 },  // C4

        // ===== MEASURES 17-20: Lyrical episode on Swell =====
        // Beautiful singing melody - characteristic Rheinberger
        { t: 36,   div: 'swell', midi: 69, dur: 0.75, vel: 0.72 }, // A4
        { t: 36.75,div: 'swell', midi: 71, dur: 0.75, vel: 0.74 }, // B4
        { t: 37.5, div: 'swell', midi: 72, dur: 1.0,  vel: 0.76 }, // C5
        { t: 38.5, div: 'swell', midi: 74, dur: 0.75, vel: 0.78 }, // D5
        { t: 39.25,div: 'swell', midi: 76, dur: 0.75, vel: 0.80 }, // E5
        { t: 40,   div: 'swell', midi: 74, dur: 0.75, vel: 0.78 }, // D5
        { t: 40.75,div: 'swell', midi: 72, dur: 0.75, vel: 0.76 }, // C5
        { t: 41.5, div: 'swell', midi: 71, dur: 0.75, vel: 0.74 }, // B4
        { t: 42.25,div: 'swell', midi: 69, dur: 1.5,  vel: 0.73 }, // A4

        // Alto on Swell
        { t: 36,   div: 'swell', midi: 64, dur: 1.5, vel: 0.62 },  // E4
        { t: 37.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.64 },  // G4
        { t: 39,   div: 'swell', midi: 69, dur: 1.5, vel: 0.66 },  // A4
        { t: 40.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.64 },  // G4
        { t: 42,   div: 'swell', midi: 64, dur: 1.75, vel: 0.62 }, // E4

        // Gentle pedal
        { t: 36,   div: 'pedal', midi: 45, dur: 2.0, vel: 0.65 },  // A2
        { t: 38,   div: 'pedal', midi: 48, dur: 2.0, vel: 0.67 },  // C3
        { t: 40,   div: 'pedal', midi: 43, dur: 2.0, vel: 0.66 },  // G2
        { t: 42,   div: 'pedal', midi: 45, dur: 1.75, vel: 0.65 }, // A2

        // ===== MEASURES 21-24: Modulating development =====
        // Moves toward C major (relative major)
        // Soprano melody
        { t: 44,   div: 'great', midi: 72, dur: 0.75, vel: 0.80 }, // C5
        { t: 44.75,div: 'great', midi: 74, dur: 0.75, vel: 0.82 }, // D5
        { t: 45.5, div: 'great', midi: 76, dur: 0.75, vel: 0.83 }, // E5
        { t: 46.25,div: 'great', midi: 77, dur: 1.0,  vel: 0.85 }, // F5
        { t: 47.25,div: 'great', midi: 76, dur: 0.75, vel: 0.83 }, // E5
        { t: 48,   div: 'great', midi: 74, dur: 0.75, vel: 0.82 }, // D5
        { t: 48.75,div: 'great', midi: 72, dur: 0.75, vel: 0.80 }, // C5
        { t: 49.5, div: 'great', midi: 71, dur: 0.75, vel: 0.79 }, // B4
        { t: 50.25,div: 'great', midi: 72, dur: 1.5,  vel: 0.81 }, // C5

        // Alto: descending thirds
        { t: 44,   div: 'great', midi: 67, dur: 0.75, vel: 0.72 }, // G4
        { t: 44.75,div: 'great', midi: 69, dur: 0.75, vel: 0.73 }, // A4
        { t: 45.5, div: 'great', midi: 72, dur: 0.75, vel: 0.74 }, // C5
        { t: 46.25,div: 'great', midi: 72, dur: 1.0,  vel: 0.75 }, // C5
        { t: 47.25,div: 'great', midi: 72, dur: 0.75, vel: 0.74 }, // C5
        { t: 48,   div: 'great', midi: 71, dur: 0.75, vel: 0.73 }, // B4
        { t: 48.75,div: 'great', midi: 69, dur: 0.75, vel: 0.72 }, // A4
        { t: 49.5, div: 'great', midi: 67, dur: 0.75, vel: 0.71 }, // G4
        { t: 50.25,div: 'great', midi: 67, dur: 1.5,  vel: 0.72 }, // G4

        // Tenor
        { t: 44,   div: 'great', midi: 60, dur: 1.5, vel: 0.66 },  // C4
        { t: 45.5, div: 'great', midi: 64, dur: 1.5, vel: 0.68 },  // E4
        { t: 47,   div: 'great', midi: 65, dur: 1.5, vel: 0.69 },  // F4
        { t: 48.5, div: 'great', midi: 64, dur: 1.5, vel: 0.68 },  // E4
        { t: 50,   div: 'great', midi: 60, dur: 1.75, vel: 0.66 }, // C4

        // Pedal
        { t: 44,   div: 'pedal', midi: 48, dur: 2.0, vel: 0.74 },  // C3
        { t: 46,   div: 'pedal', midi: 41, dur: 2.0, vel: 0.73 },  // F2
        { t: 48,   div: 'pedal', midi: 43, dur: 2.0, vel: 0.74 },  // G2
        { t: 50,   div: 'pedal', midi: 48, dur: 1.75, vel: 0.75 }, // C3

        // ===== MEASURES 25-28: Psalm tone returns in glory =====
        // Full organ, psalm tone augmented in soprano with rich harmony

        // Soprano: psalm tone forte - A4-A4-B4-C5-B4-A4-G#4-A4
        { t: 52,   div: 'great', midi: 69, dur: 1.5, vel: 0.90 },  // A4
        { t: 53.5, div: 'great', midi: 69, dur: 1.0, vel: 0.90 },  // A4
        { t: 54.5, div: 'great', midi: 71, dur: 1.0, vel: 0.92 },  // B4
        { t: 55.5, div: 'great', midi: 72, dur: 1.5, vel: 0.93 },  // C5
        { t: 57,   div: 'great', midi: 71, dur: 1.0, vel: 0.91 },  // B4
        { t: 58,   div: 'great', midi: 69, dur: 1.0, vel: 0.90 },  // A4
        { t: 59,   div: 'great', midi: 68, dur: 1.0, vel: 0.89 },  // G#4
        { t: 60,   div: 'great', midi: 69, dur: 2.5, vel: 0.92 },  // A4

        // Rich chords underneath
        { t: 52,   div: 'great', midi: 64, dur: 1.5, vel: 0.82 },  // E4
        { t: 52,   div: 'great', midi: 60, dur: 1.5, vel: 0.80 },  // C4
        { t: 53.5, div: 'great', midi: 64, dur: 1.0, vel: 0.82 },  // E4
        { t: 53.5, div: 'great', midi: 60, dur: 1.0, vel: 0.80 },  // C4
        { t: 54.5, div: 'great', midi: 64, dur: 1.0, vel: 0.82 },  // E4
        { t: 54.5, div: 'great', midi: 59, dur: 1.0, vel: 0.80 },  // B3
        { t: 55.5, div: 'great', midi: 67, dur: 1.5, vel: 0.84 },  // G4
        { t: 55.5, div: 'great', midi: 64, dur: 1.5, vel: 0.82 },  // E4
        { t: 57,   div: 'great', midi: 68, dur: 1.0, vel: 0.83 },  // Ab4
        { t: 57,   div: 'great', midi: 64, dur: 1.0, vel: 0.81 },  // E4
        { t: 58,   div: 'great', midi: 64, dur: 1.0, vel: 0.82 },  // E4
        { t: 58,   div: 'great', midi: 60, dur: 1.0, vel: 0.80 },  // C4
        { t: 59,   div: 'great', midi: 64, dur: 1.0, vel: 0.81 },  // E4
        { t: 59,   div: 'great', midi: 59, dur: 1.0, vel: 0.79 },  // B3
        { t: 60,   div: 'great', midi: 64, dur: 2.5, vel: 0.84 },  // E4
        { t: 60,   div: 'great', midi: 60, dur: 2.5, vel: 0.82 },  // C4

        // Strong pedal
        { t: 52,   div: 'pedal', midi: 45, dur: 3.0, vel: 0.85 },  // A2
        { t: 55,   div: 'pedal', midi: 48, dur: 2.5, vel: 0.87 },  // C3
        { t: 57.5, div: 'pedal', midi: 47, dur: 2.5, vel: 0.86 },  // B2
        { t: 60,   div: 'pedal', midi: 45, dur: 2.5, vel: 0.88 },  // A2

        // ===== MEASURES 29-32: Closing - cadential passage =====
        // Descending sequence approaching final cadence
        { t: 62.5, div: 'great', midi: 72, dur: 0.75, vel: 0.85 }, // C5
        { t: 63.25,div: 'great', midi: 71, dur: 0.75, vel: 0.84 }, // B4
        { t: 64,   div: 'great', midi: 69, dur: 0.75, vel: 0.83 }, // A4
        { t: 64.75,div: 'great', midi: 67, dur: 0.75, vel: 0.82 }, // G4
        { t: 65.5, div: 'great', midi: 65, dur: 0.75, vel: 0.81 }, // F4
        { t: 66.25,div: 'great', midi: 64, dur: 0.75, vel: 0.83 }, // E4

        // Alto descent
        { t: 62.5, div: 'great', midi: 67, dur: 0.75, vel: 0.76 }, // G4
        { t: 63.25,div: 'great', midi: 65, dur: 0.75, vel: 0.75 }, // F4
        { t: 64,   div: 'great', midi: 64, dur: 0.75, vel: 0.74 }, // E4
        { t: 64.75,div: 'great', midi: 62, dur: 0.75, vel: 0.73 }, // D4
        { t: 65.5, div: 'great', midi: 60, dur: 0.75, vel: 0.72 }, // C4
        { t: 66.25,div: 'great', midi: 59, dur: 0.75, vel: 0.74 }, // B3

        // Pedal descent
        { t: 62.5, div: 'pedal', midi: 48, dur: 1.5, vel: 0.80 },  // C3
        { t: 64,   div: 'pedal', midi: 45, dur: 1.5, vel: 0.79 },  // A2
        { t: 65.5, div: 'pedal', midi: 41, dur: 1.5, vel: 0.80 },  // F2

        // Dominant E major chord
        { t: 67,   div: 'great', midi: 68, dur: 1.0, vel: 0.88 },  // Ab4 (G#4)
        { t: 67,   div: 'great', midi: 64, dur: 1.0, vel: 0.86 },  // E4
        { t: 67,   div: 'great', midi: 59, dur: 1.0, vel: 0.84 },  // B3
        { t: 67,   div: 'pedal', midi: 40, dur: 1.5, vel: 0.86 },  // E2

        // Final cadence: A minor
        { t: 68.5, div: 'great', midi: 69, dur: 3.0, vel: 0.92 },  // A4
        { t: 68.5, div: 'great', midi: 64, dur: 3.0, vel: 0.90 },  // E4
        { t: 68.5, div: 'great', midi: 60, dur: 3.0, vel: 0.88 },  // C4
        { t: 68.5, div: 'great', midi: 57, dur: 3.0, vel: 0.86 },  // A3
        { t: 68.5, div: 'pedal', midi: 45, dur: 3.0, vel: 0.90 },  // A2
        { t: 68.5, div: 'pedal', midi: 33, dur: 3.0, vel: 0.88 },  // A1
    ]
};
