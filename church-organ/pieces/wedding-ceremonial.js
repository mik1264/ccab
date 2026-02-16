// ============================================================
// Mendelssohn - Wedding March (from A Midsummer Night's Dream)
// ============================================================
// Op. 61 No. 9, composed 1842
// Key: C major, Time: 4/4, Tempo: ~104 BPM (Allegro vivace)
// The iconic fanfare opening: C-C-C-C | E---G--- then the
// triumphant march theme
//
// MIDI reference (C major):
//   C3=48, E3=52, G3=55, C4=60, D4=62, E4=64, F4=65, G4=67
//   A4=69, B4=71, C5=72, D5=74, E5=76, F5=77, G5=79
//   C2=36, E2=40, G2=43
// ============================================================

const PIECE_WEDDING_MARCH = {
    title: "Wedding March",
    composer: "Felix Mendelssohn",
    key: 'C major',
    catalog: "Op. 61",
    tempo: 104,
    tempoChanges: [{ t: 0, tempo: 104, label: 'Allegro vivace' }],
    timeSignature: '4/4',
    registration: {
        great: ['gt-principal8', 'gt-trumpet8', 'gt-octave4', 'gt-mixture'],
        swell: [],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ============================================================
        // FANFARE INTRODUCTION (bars 1-4, beats 0-15)
        // The iconic "DUN DUN DA DUN" opening trumpet calls
        // ============================================================

        // --- Bar 1: Opening trumpet fanfare ---
        // Three repeated C5 eighth notes + quarter note
        { t: 0,    div: 'great', midi: 72, dur: 0.5, vel: 0.75 },  // C5 (eighth)
        { t: 0.5,  div: 'great', midi: 72, dur: 0.5, vel: 0.75 },  // C5 (eighth)
        { t: 1,    div: 'great', midi: 72, dur: 1, vel: 0.75 },     // C5 (quarter)
        // Then E5 half note
        { t: 2,    div: 'great', midi: 76, dur: 2, vel: 0.75 },     // E5 (half)
        // Chord tones underneath (Great)
        { t: 0,    div: 'great', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 0.5,  div: 'great', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 1,    div: 'great', midi: 64, dur: 1, vel: 0.75 },      // E4
        { t: 2,    div: 'great', midi: 67, dur: 2, vel: 0.75 },      // G4
        // Pedal bass
        { t: 0,    div: 'pedal', midi: 48, dur: 4, vel: 0.75 },     // C3 (whole)

        // --- Bar 2: Second fanfare phrase ---
        // Three C5 eighths + quarter, then G5 going to E5
        { t: 4,    div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 4.5,  div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 5,    div: 'great', midi: 72, dur: 1, vel: 0.75 },      // C5
        { t: 6,    div: 'great', midi: 79, dur: 1, vel: 0.75 },      // G5
        { t: 7,    div: 'great', midi: 76, dur: 1, vel: 0.75 },      // E5
        // Harmony
        { t: 4,    div: 'great', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 4.5,  div: 'great', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 5,    div: 'great', midi: 64, dur: 1, vel: 0.75 },      // E4
        { t: 6,    div: 'great', midi: 67, dur: 1, vel: 0.75 },      // G4
        { t: 7,    div: 'great', midi: 72, dur: 1, vel: 0.75 },      // C5
        // Pedal
        { t: 4,    div: 'pedal', midi: 48, dur: 4, vel: 0.75 },     // C3

        // --- Bar 3: Repeat fanfare with variation ---
        { t: 8,    div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 8.5,  div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 9,    div: 'great', midi: 72, dur: 1, vel: 0.75 },      // C5
        { t: 10,   div: 'great', midi: 76, dur: 2, vel: 0.75 },      // E5 (half)
        // Harmony
        { t: 8,    div: 'great', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 8.5,  div: 'great', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 9,    div: 'great', midi: 64, dur: 1, vel: 0.75 },      // E4
        { t: 10,   div: 'great', midi: 67, dur: 2, vel: 0.75 },      // G4
        // Pedal
        { t: 8,    div: 'pedal', midi: 48, dur: 4, vel: 0.75 },     // C3

        // --- Bar 4: Cadential figure ---
        { t: 12,   div: 'great', midi: 76, dur: 1, vel: 0.75 },     // E5
        { t: 13,   div: 'great', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 13.5, div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 14,   div: 'great', midi: 74, dur: 1, vel: 0.75 },      // D5
        { t: 15,   div: 'great', midi: 72, dur: 1, vel: 0.75 },      // C5
        // Harmony
        { t: 12,   div: 'great', midi: 67, dur: 2, vel: 0.75 },     // G4
        { t: 14,   div: 'great', midi: 67, dur: 2, vel: 0.75 },     // G4
        // Pedal
        { t: 12,   div: 'pedal', midi: 43, dur: 2, vel: 0.75 },    // G2
        { t: 14,   div: 'pedal', midi: 43, dur: 2, vel: 0.75 },    // G2

        // ============================================================
        // MARCH THEME A (bars 5-12, beats 16-47)
        // The stately processional melody
        // ============================================================

        // --- Bar 5: March theme begins ---
        { t: 16,   div: 'great', midi: 72, dur: 1.5, vel: 0.75 },   // C5 (dotted quarter)
        { t: 17.5, div: 'great', midi: 71, dur: 0.5, vel: 0.75 },   // B4 (eighth)
        { t: 18,   div: 'great', midi: 72, dur: 1, vel: 0.75 },      // C5 (quarter)
        { t: 19,   div: 'great', midi: 76, dur: 1, vel: 0.75 },      // E5 (quarter)
        // Harmony chords
        { t: 16,   div: 'great', midi: 64, dur: 2, vel: 0.75 },     // E4
        { t: 18,   div: 'great', midi: 64, dur: 2, vel: 0.75 },     // E4
        // Pedal
        { t: 16,   div: 'pedal', midi: 48, dur: 4, vel: 0.75 },    // C3

        // --- Bar 6 ---
        { t: 20,   div: 'great', midi: 79, dur: 1.5, vel: 0.75 },   // G5 (dotted quarter)
        { t: 21.5, div: 'great', midi: 77, dur: 0.5, vel: 0.75 },   // F5 (eighth)
        { t: 22,   div: 'great', midi: 76, dur: 1, vel: 0.75 },      // E5
        { t: 23,   div: 'great', midi: 72, dur: 1, vel: 0.75 },      // C5
        // Harmony
        { t: 20,   div: 'great', midi: 67, dur: 2, vel: 0.75 },     // G4
        { t: 22,   div: 'great', midi: 67, dur: 2, vel: 0.75 },     // G4
        // Pedal
        { t: 20,   div: 'pedal', midi: 48, dur: 4, vel: 0.75 },    // C3

        // --- Bar 7 ---
        { t: 24,   div: 'great', midi: 72, dur: 1.5, vel: 0.75 },   // C5
        { t: 25.5, div: 'great', midi: 71, dur: 0.5, vel: 0.75 },   // B4
        { t: 26,   div: 'great', midi: 72, dur: 1, vel: 0.75 },      // C5
        { t: 27,   div: 'great', midi: 76, dur: 1, vel: 0.75 },      // E5
        // Harmony
        { t: 24,   div: 'great', midi: 64, dur: 2, vel: 0.75 },     // E4
        { t: 26,   div: 'great', midi: 64, dur: 2, vel: 0.75 },     // E4
        // Pedal
        { t: 24,   div: 'pedal', midi: 48, dur: 4, vel: 0.75 },    // C3

        // --- Bar 8: First phrase ending ---
        { t: 28,   div: 'great', midi: 79, dur: 1, vel: 0.75 },     // G5
        { t: 29,   div: 'great', midi: 76, dur: 1, vel: 0.75 },     // E5
        { t: 30,   div: 'great', midi: 72, dur: 2, vel: 0.75 },     // C5 (half)
        // Harmony
        { t: 28,   div: 'great', midi: 67, dur: 2, vel: 0.75 },     // G4
        { t: 30,   div: 'great', midi: 64, dur: 2, vel: 0.75 },     // E4
        // Pedal
        { t: 28,   div: 'pedal', midi: 48, dur: 4, vel: 0.75 },    // C3

        // --- Bar 9: Second phrase ---
        { t: 32,   div: 'great', midi: 72, dur: 1.5, vel: 0.75 },   // C5
        { t: 33.5, div: 'great', midi: 71, dur: 0.5, vel: 0.75 },   // B4
        { t: 34,   div: 'great', midi: 72, dur: 1, vel: 0.75 },      // C5
        { t: 35,   div: 'great', midi: 69, dur: 1, vel: 0.75 },      // A4
        // Harmony
        { t: 32,   div: 'great', midi: 64, dur: 2, vel: 0.75 },     // E4
        { t: 34,   div: 'great', midi: 60, dur: 2, vel: 0.75 },     // C4
        // Pedal
        { t: 32,   div: 'pedal', midi: 48, dur: 2, vel: 0.75 },    // C3
        { t: 34,   div: 'pedal', midi: 45, dur: 2, vel: 0.75 },    // A2

        // --- Bar 10 ---
        { t: 36,   div: 'great', midi: 65, dur: 1, vel: 0.75 },     // F4 -- dips lower
        { t: 37,   div: 'great', midi: 69, dur: 1, vel: 0.75 },     // A4
        { t: 38,   div: 'great', midi: 72, dur: 1, vel: 0.75 },     // C5
        { t: 39,   div: 'great', midi: 76, dur: 1, vel: 0.75 },     // E5
        // Harmony
        { t: 36,   div: 'great', midi: 60, dur: 4, vel: 0.75 },     // C4
        // Pedal
        { t: 36,   div: 'pedal', midi: 41, dur: 4, vel: 0.75 },    // F2

        // --- Bar 11: Building up ---
        { t: 40,   div: 'great', midi: 74, dur: 1.5, vel: 0.75 },   // D5
        { t: 41.5, div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 42,   div: 'great', midi: 71, dur: 1, vel: 0.75 },      // B4
        { t: 43,   div: 'great', midi: 69, dur: 1, vel: 0.75 },      // A4
        // Harmony
        { t: 40,   div: 'great', midi: 67, dur: 2, vel: 0.75 },     // G4
        { t: 42,   div: 'great', midi: 65, dur: 2, vel: 0.75 },     // F4
        // Pedal
        { t: 40,   div: 'pedal', midi: 43, dur: 2, vel: 0.75 },    // G2
        { t: 42,   div: 'pedal', midi: 43, dur: 2, vel: 0.75 },    // G2

        // --- Bar 12: Cadence back to C ---
        { t: 44,   div: 'great', midi: 67, dur: 1, vel: 0.75 },     // G4
        { t: 45,   div: 'great', midi: 69, dur: 1, vel: 0.75 },     // A4
        { t: 46,   div: 'great', midi: 71, dur: 1, vel: 0.75 },     // B4
        { t: 47,   div: 'great', midi: 72, dur: 1, vel: 0.75 },     // C5
        // Harmony
        { t: 44,   div: 'great', midi: 62, dur: 2, vel: 0.75 },     // D4
        { t: 46,   div: 'great', midi: 62, dur: 2, vel: 0.75 },     // D4
        // Pedal
        { t: 44,   div: 'pedal', midi: 43, dur: 2, vel: 0.75 },    // G2
        { t: 46,   div: 'pedal', midi: 43, dur: 2, vel: 0.75 },    // G2

        // ============================================================
        // FANFARE RETURN (bars 13-16, beats 48-63)
        // Reprise of the opening trumpet calls
        // ============================================================

        // --- Bar 13 ---
        { t: 48,   div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 48.5, div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 49,   div: 'great', midi: 72, dur: 1, vel: 0.75 },      // C5
        { t: 50,   div: 'great', midi: 76, dur: 2, vel: 0.75 },      // E5
        { t: 48,   div: 'great', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 48.5, div: 'great', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 49,   div: 'great', midi: 64, dur: 1, vel: 0.75 },      // E4
        { t: 50,   div: 'great', midi: 67, dur: 2, vel: 0.75 },      // G4
        { t: 48,   div: 'pedal', midi: 48, dur: 4, vel: 0.75 },     // C3

        // --- Bar 14 ---
        { t: 52,   div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 52.5, div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 53,   div: 'great', midi: 72, dur: 1, vel: 0.75 },      // C5
        { t: 54,   div: 'great', midi: 79, dur: 1, vel: 0.75 },      // G5
        { t: 55,   div: 'great', midi: 76, dur: 1, vel: 0.75 },      // E5
        { t: 52,   div: 'great', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 52.5, div: 'great', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 53,   div: 'great', midi: 64, dur: 1, vel: 0.75 },      // E4
        { t: 54,   div: 'great', midi: 67, dur: 1, vel: 0.75 },      // G4
        { t: 55,   div: 'great', midi: 72, dur: 1, vel: 0.75 },      // C5
        { t: 52,   div: 'pedal', midi: 48, dur: 4, vel: 0.75 },     // C3

        // --- Bar 15: Grand final fanfare ---
        { t: 56,   div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 56.5, div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 57,   div: 'great', midi: 72, dur: 1, vel: 0.75 },      // C5
        { t: 58,   div: 'great', midi: 76, dur: 2, vel: 0.75 },      // E5
        { t: 56,   div: 'great', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 56.5, div: 'great', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 57,   div: 'great', midi: 64, dur: 1, vel: 0.75 },      // E4
        { t: 58,   div: 'great', midi: 67, dur: 2, vel: 0.75 },      // G4
        { t: 56,   div: 'pedal', midi: 48, dur: 4, vel: 0.75 },     // C3

        // --- Bar 16: Final cadence ---
        { t: 60,   div: 'great', midi: 79, dur: 1, vel: 0.75 },     // G5
        { t: 61,   div: 'great', midi: 76, dur: 1, vel: 0.75 },     // E5
        { t: 62,   div: 'great', midi: 72, dur: 2, vel: 0.75 },     // C5 (half, final)
        { t: 60,   div: 'great', midi: 67, dur: 2, vel: 0.75 },     // G4
        { t: 62,   div: 'great', midi: 64, dur: 2, vel: 0.75 },     // E4
        { t: 60,   div: 'pedal', midi: 48, dur: 2, vel: 0.75 },    // C3
        { t: 62,   div: 'pedal', midi: 48, dur: 2, vel: 0.75 },    // C3,
        { t: 4.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.60 },
        { t: 60, div: 'choir', midi: 67, dur: 2, vel: 0.60 },
        { t: 52.5, div: 'choir', midi: 64, dur: 0.5, vel: 0.60 },
        { t: 34, div: 'choir', midi: 60, dur: 2, vel: 0.60 },
        { t: 56.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.60 },
        { t: 55, div: 'choir', midi: 72, dur: 1, vel: 0.60 },
        { t: 37, div: 'choir', midi: 69, dur: 1, vel: 0.60 },
        { t: 50, div: 'choir', midi: 67, dur: 2, vel: 0.60 },
        { t: 42, div: 'choir', midi: 71, dur: 1, vel: 0.60 },
        { t: 16, div: 'choir', midi: 72, dur: 1.5, vel: 0.60 },
        { t: 52, div: 'choir', midi: 72, dur: 0.5, vel: 0.60 },
        { t: 0, div: 'choir', midi: 64, dur: 0.5, vel: 0.60 },
        { t: 0, div: 'choir', midi: 72, dur: 0.5, vel: 0.60 },
        { t: 53, div: 'choir', midi: 72, dur: 1, vel: 0.60 },
        { t: 56, div: 'choir', midi: 72, dur: 0.5, vel: 0.60 },
        { t: 12, div: 'choir', midi: 76, dur: 1, vel: 0.60 },
        { t: 58, div: 'choir', midi: 67, dur: 2, vel: 0.60 },
        { t: 46, div: 'choir', midi: 62, dur: 2, vel: 0.60 },
        { t: 8.5, div: 'choir', midi: 64, dur: 0.5, vel: 0.60 },
        { t: 62, div: 'choir', midi: 72, dur: 2, vel: 0.60 },
        { t: 53, div: 'choir', midi: 64, dur: 1, vel: 0.60 },
        { t: 4, div: 'choir', midi: 64, dur: 0.5, vel: 0.60 },
        { t: 49, div: 'choir', midi: 64, dur: 1, vel: 0.60 },
        { t: 54, div: 'choir', midi: 67, dur: 1, vel: 0.60 }
    ]
};


// ============================================================
// Wagner - Bridal Chorus ("Here Comes the Bride" from Lohengrin)
// ============================================================
// WWV 75, Act III Scene 1 (1850)
// Key: Bb major, Time: 2/4, Tempo: ~60 BPM (Andante)
// The stately processional: Bb-Bb-Bb | Bb--- | Bb-C-D-Bb | D-C-Bb
// "Treulich geführt, ziehet dahin"
//
// MIDI reference (Bb major):
//   Bb2=46, D3=50, F3=53, Bb3=58, C4=60, D4=62, Eb4=63, F4=65
//   G4=67, A4=69, Bb4=70, C5=72, D5=74, Eb5=75, F5=77
//   Bb1=34, F2=41
// ============================================================

const PIECE_BRIDAL_CHORUS = {
    title: "Bridal Chorus",
    composer: "Richard Wagner",
    key: 'Bb major',
    catalog: "WWV 75",
    tempo: 60,
    tempoChanges: [{ t: 0, tempo: 60, label: 'Moderato' }],
    timeSignature: '2/4',
    registration: {
        great: [],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-principal4'],
        choir: ['ch-gedeckt8', 'ch-dulciana8'],
        pedal: ['pd-subbass16', 'pd-principal16']
    },
    events: [
        // ============================================================
        // The Bridal Chorus in Bb major, 2/4 time
        // Melody on Swell, gentle chords on Choir, bass on Pedal
        // Each bar = 2 beats
        // Phrase 1: "Treulich geführt, ziehet dahin"
        // ============================================================

        // --- Bar 1-2: Opening pickup and first phrase ---
        // Pickup: Bb-Bb-Bb (3 eighth notes leading in)
        { t: 0,    div: 'swell', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4 (eighth)
        { t: 0.5,  div: 'swell', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4 (eighth)
        // Bar 1
        { t: 1,    div: 'swell', midi: 70, dur: 2, vel: 0.75 },      // Bb4 (held through bar)
        { t: 1,    div: 'choir', midi: 58, dur: 2, vel: 0.75 },      // Bb3
        { t: 1,    div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 1,    div: 'choir', midi: 65, dur: 2, vel: 0.75 },      // F4
        { t: 1,    div: 'pedal', midi: 46, dur: 2, vel: 0.75 },     // Bb2

        // --- Bar 2 ---
        { t: 3,    div: 'swell', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 3.5,  div: 'swell', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 4,    div: 'swell', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 4.5,  div: 'swell', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 3,    div: 'choir', midi: 58, dur: 2, vel: 0.75 },      // Bb3
        { t: 3,    div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 3,    div: 'choir', midi: 65, dur: 2, vel: 0.75 },      // F4
        { t: 3,    div: 'pedal', midi: 46, dur: 2, vel: 0.75 },     // Bb2

        // --- Bar 3: "ziehet dahin" ---
        { t: 5,    div: 'swell', midi: 74, dur: 1, vel: 0.75 },     // D5
        { t: 6,    div: 'swell', midi: 72, dur: 1, vel: 0.75 },     // C5
        { t: 5,    div: 'choir', midi: 58, dur: 1, vel: 0.75 },      // Bb3
        { t: 5,    div: 'choir', midi: 65, dur: 1, vel: 0.75 },      // F4
        { t: 6,    div: 'choir', midi: 60, dur: 1, vel: 0.75 },      // C4
        { t: 6,    div: 'choir', midi: 63, dur: 1, vel: 0.75 },      // Eb4
        { t: 5,    div: 'pedal', midi: 46, dur: 1, vel: 0.75 },     // Bb2
        { t: 6,    div: 'pedal', midi: 41, dur: 1, vel: 0.75 },     // F2

        // --- Bar 4: Resolution ---
        { t: 7,    div: 'swell', midi: 70, dur: 2, vel: 0.75 },     // Bb4 (whole bar)
        { t: 7,    div: 'choir', midi: 58, dur: 2, vel: 0.75 },      // Bb3
        { t: 7,    div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 7,    div: 'choir', midi: 65, dur: 2, vel: 0.75 },      // F4
        { t: 7,    div: 'pedal', midi: 46, dur: 2, vel: 0.75 },     // Bb2

        // ============================================================
        // Phrase 2: Repeat with slight variation
        // ============================================================

        // --- Bar 5-6: Second phrase ---
        { t: 9,    div: 'swell', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 9.5,  div: 'swell', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 10,   div: 'swell', midi: 70, dur: 2, vel: 0.75 },      // Bb4 (held)
        { t: 10,   div: 'choir', midi: 58, dur: 2, vel: 0.75 },      // Bb3
        { t: 10,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 10,   div: 'choir', midi: 65, dur: 2, vel: 0.75 },      // F4
        { t: 10,   div: 'pedal', midi: 46, dur: 2, vel: 0.75 },     // Bb2

        // --- Bar 6 ---
        { t: 12,   div: 'swell', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 12.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 13,   div: 'swell', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 13.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 12,   div: 'choir', midi: 58, dur: 2, vel: 0.75 },      // Bb3
        { t: 12,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 12,   div: 'choir', midi: 65, dur: 2, vel: 0.75 },      // F4
        { t: 12,   div: 'pedal', midi: 46, dur: 2, vel: 0.75 },     // Bb2

        // --- Bar 7 ---
        { t: 14,   div: 'swell', midi: 74, dur: 1, vel: 0.75 },     // D5
        { t: 15,   div: 'swell', midi: 72, dur: 1, vel: 0.75 },     // C5
        { t: 14,   div: 'choir', midi: 58, dur: 1, vel: 0.75 },      // Bb3
        { t: 14,   div: 'choir', midi: 65, dur: 1, vel: 0.75 },      // F4
        { t: 15,   div: 'choir', midi: 60, dur: 1, vel: 0.75 },      // C4
        { t: 15,   div: 'choir', midi: 63, dur: 1, vel: 0.75 },      // Eb4
        { t: 14,   div: 'pedal', midi: 46, dur: 1, vel: 0.75 },     // Bb2
        { t: 15,   div: 'pedal', midi: 41, dur: 1, vel: 0.75 },     // F2

        // --- Bar 8: Resolution ---
        { t: 16,   div: 'swell', midi: 70, dur: 2, vel: 0.75 },     // Bb4
        { t: 16,   div: 'choir', midi: 58, dur: 2, vel: 0.75 },      // Bb3
        { t: 16,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 16,   div: 'choir', midi: 65, dur: 2, vel: 0.75 },      // F4
        { t: 16,   div: 'pedal', midi: 46, dur: 2, vel: 0.75 },     // Bb2

        // ============================================================
        // Middle section: Contrasting phrase (higher melody)
        // "Wo euch der Segen der Liebe bewahr!"
        // ============================================================

        // --- Bar 9 ---
        { t: 18,   div: 'swell', midi: 77, dur: 0.5, vel: 0.75 },   // F5
        { t: 18.5, div: 'swell', midi: 77, dur: 0.5, vel: 0.75 },   // F5
        { t: 19,   div: 'swell', midi: 77, dur: 2, vel: 0.75 },      // F5 (held)
        { t: 19,   div: 'choir', midi: 60, dur: 2, vel: 0.75 },      // C4
        { t: 19,   div: 'choir', midi: 65, dur: 2, vel: 0.75 },      // F4
        { t: 19,   div: 'choir', midi: 69, dur: 2, vel: 0.75 },      // A4
        { t: 19,   div: 'pedal', midi: 41, dur: 2, vel: 0.75 },     // F2

        // --- Bar 10 ---
        { t: 21,   div: 'swell', midi: 77, dur: 0.5, vel: 0.75 },   // F5
        { t: 21.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.75 },   // Eb5
        { t: 22,   div: 'swell', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 22.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 21,   div: 'choir', midi: 58, dur: 2, vel: 0.75 },      // Bb3
        { t: 21,   div: 'choir', midi: 65, dur: 2, vel: 0.75 },      // F4
        { t: 21,   div: 'pedal', midi: 46, dur: 2, vel: 0.75 },     // Bb2

        // --- Bar 11 ---
        { t: 23,   div: 'swell', midi: 74, dur: 1, vel: 0.75 },     // D5
        { t: 24,   div: 'swell', midi: 75, dur: 1, vel: 0.75 },     // Eb5
        { t: 23,   div: 'choir', midi: 58, dur: 1, vel: 0.75 },      // Bb3
        { t: 23,   div: 'choir', midi: 65, dur: 1, vel: 0.75 },      // F4
        { t: 24,   div: 'choir', midi: 63, dur: 1, vel: 0.75 },      // Eb4
        { t: 24,   div: 'choir', midi: 67, dur: 1, vel: 0.75 },      // G4
        { t: 23,   div: 'pedal', midi: 46, dur: 1, vel: 0.75 },     // Bb2
        { t: 24,   div: 'pedal', midi: 39, dur: 1, vel: 0.75 },     // Eb2

        // --- Bar 12 ---
        { t: 25,   div: 'swell', midi: 77, dur: 2, vel: 0.75 },     // F5 (held)
        { t: 25,   div: 'choir', midi: 60, dur: 2, vel: 0.75 },      // C4
        { t: 25,   div: 'choir', midi: 65, dur: 2, vel: 0.75 },      // F4
        { t: 25,   div: 'choir', midi: 69, dur: 2, vel: 0.75 },      // A4
        { t: 25,   div: 'pedal', midi: 41, dur: 2, vel: 0.75 },     // F2

        // ============================================================
        // Return of opening phrase (da capo)
        // ============================================================

        // --- Bar 13-14 ---
        { t: 27,   div: 'swell', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 27.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 28,   div: 'swell', midi: 70, dur: 2, vel: 0.75 },      // Bb4
        { t: 28,   div: 'choir', midi: 58, dur: 2, vel: 0.75 },      // Bb3
        { t: 28,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 28,   div: 'choir', midi: 65, dur: 2, vel: 0.75 },      // F4
        { t: 28,   div: 'pedal', midi: 46, dur: 2, vel: 0.75 },     // Bb2

        // --- Bar 14 ---
        { t: 30,   div: 'swell', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 30.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 31,   div: 'swell', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 31.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 30,   div: 'choir', midi: 58, dur: 2, vel: 0.75 },      // Bb3
        { t: 30,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 30,   div: 'choir', midi: 65, dur: 2, vel: 0.75 },      // F4
        { t: 30,   div: 'pedal', midi: 46, dur: 2, vel: 0.75 },     // Bb2

        // --- Bar 15 ---
        { t: 32,   div: 'swell', midi: 74, dur: 1, vel: 0.75 },     // D5
        { t: 33,   div: 'swell', midi: 72, dur: 1, vel: 0.75 },     // C5
        { t: 32,   div: 'choir', midi: 58, dur: 1, vel: 0.75 },      // Bb3
        { t: 32,   div: 'choir', midi: 65, dur: 1, vel: 0.75 },      // F4
        { t: 33,   div: 'choir', midi: 60, dur: 1, vel: 0.75 },      // C4
        { t: 33,   div: 'choir', midi: 63, dur: 1, vel: 0.75 },      // Eb4
        { t: 32,   div: 'pedal', midi: 46, dur: 1, vel: 0.75 },     // Bb2
        { t: 33,   div: 'pedal', midi: 41, dur: 1, vel: 0.75 },     // F2

        // --- Bar 16: Final resolution ---
        { t: 34,   div: 'swell', midi: 70, dur: 2, vel: 0.75 },     // Bb4 (final)
        { t: 34,   div: 'choir', midi: 58, dur: 2, vel: 0.75 },      // Bb3
        { t: 34,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 34,   div: 'choir', midi: 65, dur: 2, vel: 0.75 },      // F4
        { t: 34,   div: 'pedal', midi: 46, dur: 2, vel: 0.75 },     // Bb2,
        { t: 4.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 },
        { t: 7, div: 'choir', midi: 70, dur: 2, vel: 0.60 },
        { t: 34, div: 'choir', midi: 70, dur: 2, vel: 0.60 },
        { t: 5, div: 'choir', midi: 74, dur: 1, vel: 0.60 },
        { t: 4, div: 'choir', midi: 74, dur: 0.5, vel: 0.60 },
        { t: 28, div: 'choir', midi: 70, dur: 2, vel: 0.60 },
        { t: 3.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.60 },
        { t: 19, div: 'choir', midi: 77, dur: 2, vel: 0.60 },
        { t: 22.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.60 },
        { t: 23, div: 'choir', midi: 74, dur: 1, vel: 0.60 },
        { t: 27, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 },
        { t: 3, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 },
        { t: 12, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 },
        { t: 30.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.60 },
        { t: 6, div: 'choir', midi: 72, dur: 1, vel: 0.60 },
        { t: 21.5, div: 'choir', midi: 75, dur: 0.5, vel: 0.60 },
        { t: 13.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 },
        { t: 1, div: 'choir', midi: 70, dur: 2, vel: 0.60 },
        { t: 18.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.60 },
        { t: 27.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 },
        { t: 25, div: 'choir', midi: 77, dur: 2, vel: 0.60 },
        { t: 10, div: 'choir', midi: 70, dur: 2, vel: 0.60 },
        { t: 33, div: 'choir', midi: 72, dur: 1, vel: 0.60 },
        { t: 31.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 },
        { t: 22, div: 'choir', midi: 74, dur: 0.5, vel: 0.60 },
        { t: 16, div: 'choir', midi: 70, dur: 2, vel: 0.60 },
        { t: 21, div: 'choir', midi: 77, dur: 0.5, vel: 0.60 },
        { t: 13, div: 'choir', midi: 74, dur: 0.5, vel: 0.60 },
        { t: 0.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 },
        { t: 30, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 },
        { t: 0, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 },
        { t: 14, div: 'choir', midi: 74, dur: 1, vel: 0.60 },
        { t: 12.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.60 },
        { t: 24, div: 'choir', midi: 75, dur: 1, vel: 0.60 },
        { t: 15, div: 'choir', midi: 72, dur: 1, vel: 0.60 },
        { t: 9, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 },
        { t: 18, div: 'choir', midi: 77, dur: 0.5, vel: 0.60 },
        { t: 31, div: 'choir', midi: 74, dur: 0.5, vel: 0.60 },
        { t: 32, div: 'choir', midi: 74, dur: 1, vel: 0.60 },
        { t: 9.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 }
    ]
};


// ============================================================
// Handel - Arrival of the Queen of Sheba (from Solomon)
// ============================================================
// HWV 67, Act III Sinfonia (1749)
// Key: Bb major (original), Time: 4/4, Tempo: ~120 BPM (Allegro)
// Bright, energetic baroque piece with running sixteenth-note
// passages in the oboe/violin parts
//
// MIDI reference (Bb major):
//   Bb2=46, C3=48, D3=50, Eb3=51, F3=53, G3=55, A3=57, Bb3=58
//   C4=60, D4=62, Eb4=63, F4=65, G4=67, A4=69, Bb4=70
//   C5=72, D5=74, Eb5=75, F5=77, G5=79, A5=81, Bb5=82
//   Bb1=34, F2=41
// ============================================================

const PIECE_QUEEN_OF_SHEBA = {
    title: "Arrival of the Queen of Sheba",
    composer: "George Frideric Handel",
    key: 'Bb major',
    catalog: "HWV 67",
    tempo: 120,
    tempoChanges: [{ t: 0, tempo: 120, label: 'Allegro' }],
    timeSignature: '4/4',
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-spitzflute4'],
        swell: [],
        choir: ['ch-gedeckt8', 'ch-principal4'],
        pedal: ['pd-principal16', 'pd-octave8']
    },
    events: [
        // ============================================================
        // Opening theme: Running sixteenth-note figures in Bb major
        // The iconic bouncing melody played by two oboes
        // Encoded with eighth notes for clarity on organ
        // ============================================================

        // --- Bar 1: Opening theme ---
        // Oboe 1 melody (Great) - the famous running passage
        { t: 0,    div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 0.5,  div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 1,    div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 1.5,  div: 'great', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 2,    div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 2.5,  div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 3,    div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 3.5,  div: 'great', midi: 67, dur: 0.5, vel: 0.75 },   // G4
        // Strings/Choir accompaniment
        { t: 0,    div: 'choir', midi: 58, dur: 1, vel: 0.75 },      // Bb3
        { t: 1,    div: 'choir', midi: 58, dur: 1, vel: 0.75 },      // Bb3
        { t: 2,    div: 'choir', midi: 58, dur: 1, vel: 0.75 },      // Bb3
        { t: 3,    div: 'choir', midi: 58, dur: 1, vel: 0.75 },      // Bb3
        // Bass
        { t: 0,    div: 'pedal', midi: 46, dur: 2, vel: 0.75 },     // Bb2
        { t: 2,    div: 'pedal', midi: 46, dur: 2, vel: 0.75 },     // Bb2

        // --- Bar 2: Continuation ---
        { t: 4,    div: 'great', midi: 65, dur: 0.5, vel: 0.75 },   // F4
        { t: 4.5,  div: 'great', midi: 67, dur: 0.5, vel: 0.75 },   // G4
        { t: 5,    div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 5.5,  div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 6,    div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 6.5,  div: 'great', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 7,    div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 7.5,  div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        // Choir
        { t: 4,    div: 'choir', midi: 65, dur: 2, vel: 0.75 },      // F4
        { t: 6,    div: 'choir', midi: 65, dur: 2, vel: 0.75 },      // F4
        // Bass
        { t: 4,    div: 'pedal', midi: 41, dur: 2, vel: 0.75 },     // F2
        { t: 6,    div: 'pedal', midi: 41, dur: 2, vel: 0.75 },     // F2

        // --- Bar 3: Theme repeats up an octave area ---
        { t: 8,    div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 8.5,  div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 9,    div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 9.5,  div: 'great', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 10,   div: 'great', midi: 77, dur: 0.5, vel: 0.75 },   // F5
        { t: 10.5, div: 'great', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 11,   div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 11.5, div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        // Choir
        { t: 8,    div: 'choir', midi: 58, dur: 2, vel: 0.75 },      // Bb3
        { t: 10,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        // Bass
        { t: 8,    div: 'pedal', midi: 46, dur: 2, vel: 0.75 },     // Bb2
        { t: 10,   div: 'pedal', midi: 50, dur: 2, vel: 0.75 },     // D3

        // --- Bar 4: Cadential figure ---
        { t: 12,   div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 12.5, div: 'great', midi: 67, dur: 0.5, vel: 0.75 },   // G4
        { t: 13,   div: 'great', midi: 65, dur: 0.5, vel: 0.75 },   // F4
        { t: 13.5, div: 'great', midi: 67, dur: 0.5, vel: 0.75 },   // G4
        { t: 14,   div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 14.5, div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 15,   div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 15.5, div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        // Choir
        { t: 12,   div: 'choir', midi: 60, dur: 2, vel: 0.75 },     // C4
        { t: 14,   div: 'choir', midi: 65, dur: 2, vel: 0.75 },     // F4
        // Bass
        { t: 12,   div: 'pedal', midi: 41, dur: 2, vel: 0.75 },    // F2
        { t: 14,   div: 'pedal', midi: 41, dur: 2, vel: 0.75 },    // F2

        // --- Bar 5: Second statement of theme ---
        { t: 16,   div: 'great', midi: 70, dur: 1, vel: 0.75 },     // Bb4 (quarter)
        { t: 17,   div: 'great', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 17.5, div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 18,   div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 18.5, div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 19,   div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 19.5, div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        // Choir
        { t: 16,   div: 'choir', midi: 58, dur: 2, vel: 0.75 },     // Bb3
        { t: 18,   div: 'choir', midi: 58, dur: 2, vel: 0.75 },     // Bb3
        // Bass
        { t: 16,   div: 'pedal', midi: 46, dur: 4, vel: 0.75 },    // Bb2

        // --- Bar 6 ---
        { t: 20,   div: 'great', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 20.5, div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 21,   div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 21.5, div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 22,   div: 'great', midi: 67, dur: 0.5, vel: 0.75 },   // G4
        { t: 22.5, div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 23,   div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 23.5, div: 'great', midi: 67, dur: 0.5, vel: 0.75 },   // G4
        // Choir
        { t: 20,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },     // D4
        { t: 22,   div: 'choir', midi: 55, dur: 2, vel: 0.75 },     // G3
        // Bass
        { t: 20,   div: 'pedal', midi: 50, dur: 2, vel: 0.75 },    // D3
        { t: 22,   div: 'pedal', midi: 55, dur: 2, vel: 0.75 },    // G3

        // --- Bar 7: Sequence continues ---
        { t: 24,   div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 24.5, div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 25,   div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 25.5, div: 'great', midi: 67, dur: 0.5, vel: 0.75 },   // G4
        { t: 26,   div: 'great', midi: 65, dur: 0.5, vel: 0.75 },   // F4
        { t: 26.5, div: 'great', midi: 67, dur: 0.5, vel: 0.75 },   // G4
        { t: 27,   div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 27.5, div: 'great', midi: 65, dur: 0.5, vel: 0.75 },   // F4
        // Choir
        { t: 24,   div: 'choir', midi: 60, dur: 2, vel: 0.75 },     // C4
        { t: 26,   div: 'choir', midi: 53, dur: 2, vel: 0.75 },     // F3
        // Bass
        { t: 24,   div: 'pedal', midi: 48, dur: 2, vel: 0.75 },    // C3
        { t: 26,   div: 'pedal', midi: 53, dur: 2, vel: 0.75 },    // F3

        // --- Bar 8: Back to Bb ---
        { t: 28,   div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 28.5, div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 29,   div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 29.5, div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 30,   div: 'great', midi: 74, dur: 1, vel: 0.75 },      // D5 (quarter)
        { t: 31,   div: 'great', midi: 70, dur: 1, vel: 0.75 },      // Bb4 (quarter)
        // Choir
        { t: 28,   div: 'choir', midi: 58, dur: 2, vel: 0.75 },     // Bb3
        { t: 30,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },     // D4
        // Bass
        { t: 28,   div: 'pedal', midi: 46, dur: 4, vel: 0.75 },    // Bb2

        // --- Bar 9: Tutti section ---
        { t: 32,   div: 'great', midi: 77, dur: 1, vel: 0.75 },     // F5
        { t: 33,   div: 'great', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 33.5, div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 34,   div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 34.5, div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 35,   div: 'great', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 35.5, div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        // Choir - fuller chords
        { t: 32,   div: 'choir', midi: 58, dur: 2, vel: 0.75 },     // Bb3
        { t: 32,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },     // D4
        { t: 34,   div: 'choir', midi: 58, dur: 2, vel: 0.75 },     // Bb3
        { t: 34,   div: 'choir', midi: 65, dur: 2, vel: 0.75 },     // F4
        // Bass
        { t: 32,   div: 'pedal', midi: 46, dur: 2, vel: 0.75 },    // Bb2
        { t: 34,   div: 'pedal', midi: 46, dur: 2, vel: 0.75 },    // Bb2

        // --- Bar 10: Sequence ---
        { t: 36,   div: 'great', midi: 75, dur: 1, vel: 0.75 },     // Eb5
        { t: 37,   div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 37.5, div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 38,   div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 38.5, div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 39,   div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 39.5, div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        // Choir
        { t: 36,   div: 'choir', midi: 60, dur: 2, vel: 0.75 },     // C4
        { t: 36,   div: 'choir', midi: 63, dur: 2, vel: 0.75 },     // Eb4
        { t: 38,   div: 'choir', midi: 60, dur: 2, vel: 0.75 },     // C4
        { t: 38,   div: 'choir', midi: 65, dur: 2, vel: 0.75 },     // F4
        // Bass
        { t: 36,   div: 'pedal', midi: 48, dur: 2, vel: 0.75 },    // C3
        { t: 38,   div: 'pedal', midi: 41, dur: 2, vel: 0.75 },    // F2

        // --- Bar 11: Running passage ---
        { t: 40,   div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 40.5, div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 41,   div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 41.5, div: 'great', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 42,   div: 'great', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 42.5, div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 43,   div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 43.5, div: 'great', midi: 67, dur: 0.5, vel: 0.75 },   // G4
        // Choir
        { t: 40,   div: 'choir', midi: 58, dur: 2, vel: 0.75 },     // Bb3
        { t: 42,   div: 'choir', midi: 58, dur: 2, vel: 0.75 },     // Bb3
        // Bass
        { t: 40,   div: 'pedal', midi: 46, dur: 4, vel: 0.75 },    // Bb2

        // --- Bar 12: Final cadence ---
        { t: 44,   div: 'great', midi: 65, dur: 0.5, vel: 0.75 },   // F4
        { t: 44.5, div: 'great', midi: 67, dur: 0.5, vel: 0.75 },   // G4
        { t: 45,   div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 45.5, div: 'great', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 46,   div: 'great', midi: 72, dur: 1, vel: 0.75 },      // C5
        { t: 47,   div: 'great', midi: 70, dur: 1, vel: 0.75 },      // Bb4
        // Choir
        { t: 44,   div: 'choir', midi: 65, dur: 2, vel: 0.75 },     // F4
        { t: 46,   div: 'choir', midi: 58, dur: 2, vel: 0.75 },     // Bb3
        { t: 46,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },     // D4
        // Bass
        { t: 44,   div: 'pedal', midi: 41, dur: 2, vel: 0.75 },    // F2
        { t: 46,   div: 'pedal', midi: 46, dur: 2, vel: 0.75 },    // Bb2,
        { t: 0.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.60 },
        { t: 39, div: 'choir', midi: 72, dur: 0.5, vel: 0.60 },
        { t: 10.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.60 },
        { t: 43.5, div: 'choir', midi: 67, dur: 0.5, vel: 0.60 },
        { t: 26.5, div: 'choir', midi: 67, dur: 0.5, vel: 0.60 },
        { t: 7.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 },
        { t: 33, div: 'choir', midi: 74, dur: 0.5, vel: 0.60 },
        { t: 34, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 },
        { t: 40.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.60 },
        { t: 9.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.60 },
        { t: 33.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.60 },
        { t: 29.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.60 },
        { t: 19, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 },
        { t: 40, div: 'choir', midi: 70, dur: 0.5, vel: 0.60 }
    ]
};


// ============================================================
// Purcell - Trumpet Tune in D Major
// ============================================================
// Z.T. 697 (also known as "The Cebell")
// Often attributed to Jeremiah Clarke's "Prince of Denmark's March"
// but this is the genuine Purcell Trumpet Tune
// Key: D major, Time: 4/4, Tempo: ~96 BPM (Moderato maestoso)
//
// MIDI reference (D major):
//   D2=38, A2=45, D3=50, E3=52, F#3=54, G3=55, A3=57, B3=59
//   C#4=61, D4=62, E4=64, F#4=66, G4=67, A4=69, B4=71
//   C#5=73, D5=74, E5=76, F#5=78, G5=79, A5=81
//   D2=38, A1=33
// ============================================================

const PIECE_PURCELL_TRUMPET = {
    title: "Trumpet Tune in D",
    composer: "Henry Purcell",
    key: 'D major',
    catalog: "Z.T. 697",
    tempo: 96,
    tempoChanges: [{ t: 0, tempo: 96, label: 'Maestoso' }],
    timeSignature: '4/4',
    registration: {
        great: ['gt-principal8', 'gt-trumpet8', 'gt-octave4'],
        swell: [],
        choir: ['ch-gedeckt8', 'ch-dulciana8', 'ch-principal4'],
        pedal: ['pd-principal16', 'pd-octave8']
    },
    events: [
        // ============================================================
        // A SECTION: Stately trumpet melody in D major
        // The regal, dotted-rhythm trumpet tune
        // ============================================================

        // --- Bar 1: Opening D major fanfare ---
        { t: 0,    div: 'great', midi: 74, dur: 1.5, vel: 0.75 },   // D5 (dotted quarter)
        { t: 1.5,  div: 'great', midi: 73, dur: 0.5, vel: 0.75 },   // C#5 (eighth)
        { t: 2,    div: 'great', midi: 74, dur: 1, vel: 0.75 },      // D5 (quarter)
        { t: 3,    div: 'great', midi: 69, dur: 1, vel: 0.75 },      // A4 (quarter)
        // Choir chords
        { t: 0,    div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 0,    div: 'choir', midi: 66, dur: 2, vel: 0.75 },      // F#4
        { t: 2,    div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 2,    div: 'choir', midi: 66, dur: 2, vel: 0.75 },      // F#4
        // Pedal
        { t: 0,    div: 'pedal', midi: 50, dur: 4, vel: 0.75 },     // D3

        // --- Bar 2 ---
        { t: 4,    div: 'great', midi: 66, dur: 1.5, vel: 0.75 },   // F#4 (dotted quarter)
        { t: 5.5,  div: 'great', midi: 64, dur: 0.5, vel: 0.75 },   // E4 (eighth)
        { t: 6,    div: 'great', midi: 66, dur: 1, vel: 0.75 },      // F#4
        { t: 7,    div: 'great', midi: 69, dur: 1, vel: 0.75 },      // A4
        // Choir
        { t: 4,    div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 6,    div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 6,    div: 'choir', midi: 66, dur: 2, vel: 0.75 },      // F#4
        // Pedal
        { t: 4,    div: 'pedal', midi: 50, dur: 4, vel: 0.75 },     // D3

        // --- Bar 3: Rising figure ---
        { t: 8,    div: 'great', midi: 71, dur: 1.5, vel: 0.75 },   // B4 (dotted quarter)
        { t: 9.5,  div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4 (eighth)
        { t: 10,   div: 'great', midi: 71, dur: 1, vel: 0.75 },      // B4
        { t: 11,   div: 'great', midi: 73, dur: 1, vel: 0.75 },      // C#5
        // Choir
        { t: 8,    div: 'choir', midi: 64, dur: 2, vel: 0.75 },      // E4
        { t: 8,    div: 'choir', midi: 67, dur: 2, vel: 0.75 },      // G4
        { t: 10,   div: 'choir', midi: 64, dur: 2, vel: 0.75 },      // E4
        { t: 10,   div: 'choir', midi: 69, dur: 2, vel: 0.75 },      // A4
        // Pedal
        { t: 8,    div: 'pedal', midi: 52, dur: 2, vel: 0.75 },     // E3
        { t: 10,   div: 'pedal', midi: 45, dur: 2, vel: 0.75 },     // A2

        // --- Bar 4: Cadence to D ---
        { t: 12,   div: 'great', midi: 74, dur: 2, vel: 0.75 },     // D5 (half note)
        { t: 14,   div: 'great', midi: 73, dur: 1, vel: 0.75 },      // C#5
        { t: 15,   div: 'great', midi: 74, dur: 1, vel: 0.75 },      // D5
        // Choir
        { t: 12,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 12,   div: 'choir', midi: 66, dur: 2, vel: 0.75 },      // F#4
        { t: 14,   div: 'choir', midi: 57, dur: 2, vel: 0.75 },      // A3
        { t: 14,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        // Pedal
        { t: 12,   div: 'pedal', midi: 50, dur: 2, vel: 0.75 },    // D3
        { t: 14,   div: 'pedal', midi: 45, dur: 2, vel: 0.75 },    // A2

        // ============================================================
        // A SECTION repeat with variation (bars 5-8)
        // ============================================================

        // --- Bar 5 ---
        { t: 16,   div: 'great', midi: 74, dur: 1.5, vel: 0.75 },   // D5
        { t: 17.5, div: 'great', midi: 73, dur: 0.5, vel: 0.75 },   // C#5
        { t: 18,   div: 'great', midi: 74, dur: 1, vel: 0.75 },      // D5
        { t: 19,   div: 'great', midi: 76, dur: 1, vel: 0.75 },      // E5
        // Choir
        { t: 16,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 16,   div: 'choir', midi: 66, dur: 2, vel: 0.75 },      // F#4
        { t: 18,   div: 'choir', midi: 64, dur: 2, vel: 0.75 },      // E4
        { t: 18,   div: 'choir', midi: 67, dur: 2, vel: 0.75 },      // G4
        // Pedal
        { t: 16,   div: 'pedal', midi: 50, dur: 2, vel: 0.75 },    // D3
        { t: 18,   div: 'pedal', midi: 52, dur: 2, vel: 0.75 },    // E3

        // --- Bar 6 ---
        { t: 20,   div: 'great', midi: 78, dur: 1.5, vel: 0.75 },   // F#5 (dotted quarter)
        { t: 21.5, div: 'great', midi: 76, dur: 0.5, vel: 0.75 },   // E5 (eighth)
        { t: 22,   div: 'great', midi: 74, dur: 1, vel: 0.75 },      // D5
        { t: 23,   div: 'great', midi: 73, dur: 1, vel: 0.75 },      // C#5
        // Choir
        { t: 20,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 20,   div: 'choir', midi: 69, dur: 2, vel: 0.75 },      // A4
        { t: 22,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 22,   div: 'choir', midi: 66, dur: 2, vel: 0.75 },      // F#4
        // Pedal
        { t: 20,   div: 'pedal', midi: 50, dur: 2, vel: 0.75 },    // D3
        { t: 22,   div: 'pedal', midi: 50, dur: 2, vel: 0.75 },    // D3

        // --- Bar 7 ---
        { t: 24,   div: 'great', midi: 71, dur: 1.5, vel: 0.75 },   // B4
        { t: 25.5, div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 26,   div: 'great', midi: 67, dur: 1, vel: 0.75 },      // G4
        { t: 27,   div: 'great', midi: 69, dur: 1, vel: 0.75 },      // A4
        // Choir
        { t: 24,   div: 'choir', midi: 59, dur: 2, vel: 0.75 },      // B3
        { t: 24,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 26,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 26,   div: 'choir', midi: 67, dur: 2, vel: 0.75 },      // G4
        // Pedal
        { t: 24,   div: 'pedal', midi: 55, dur: 2, vel: 0.75 },    // G3
        { t: 26,   div: 'pedal', midi: 55, dur: 2, vel: 0.75 },    // G3

        // --- Bar 8: Half cadence ---
        { t: 28,   div: 'great', midi: 71, dur: 1, vel: 0.75 },     // B4
        { t: 29,   div: 'great', midi: 73, dur: 1, vel: 0.75 },     // C#5
        { t: 30,   div: 'great', midi: 69, dur: 2, vel: 0.75 },     // A4 (half note)
        // Choir
        { t: 28,   div: 'choir', midi: 64, dur: 2, vel: 0.75 },      // E4
        { t: 28,   div: 'choir', midi: 67, dur: 2, vel: 0.75 },      // G4
        { t: 30,   div: 'choir', midi: 61, dur: 2, vel: 0.75 },      // C#4
        { t: 30,   div: 'choir', midi: 64, dur: 2, vel: 0.75 },      // E4
        // Pedal
        { t: 28,   div: 'pedal', midi: 52, dur: 2, vel: 0.75 },    // E3
        { t: 30,   div: 'pedal', midi: 45, dur: 2, vel: 0.75 },    // A2

        // ============================================================
        // B SECTION (bars 9-12): Contrasting phrase
        // ============================================================

        // --- Bar 9: New melody ---
        { t: 32,   div: 'great', midi: 69, dur: 1.5, vel: 0.75 },   // A4 (dotted quarter)
        { t: 33.5, div: 'great', midi: 71, dur: 0.5, vel: 0.75 },   // B4
        { t: 34,   div: 'great', midi: 73, dur: 1, vel: 0.75 },      // C#5
        { t: 35,   div: 'great', midi: 74, dur: 1, vel: 0.75 },      // D5
        // Choir
        { t: 32,   div: 'choir', midi: 57, dur: 2, vel: 0.75 },      // A3
        { t: 32,   div: 'choir', midi: 61, dur: 2, vel: 0.75 },      // C#4
        { t: 34,   div: 'choir', midi: 57, dur: 2, vel: 0.75 },      // A3
        { t: 34,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        // Pedal
        { t: 32,   div: 'pedal', midi: 45, dur: 2, vel: 0.75 },    // A2
        { t: 34,   div: 'pedal', midi: 50, dur: 2, vel: 0.75 },    // D3

        // --- Bar 10 ---
        { t: 36,   div: 'great', midi: 76, dur: 1.5, vel: 0.75 },   // E5
        { t: 37.5, div: 'great', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 38,   div: 'great', midi: 73, dur: 1, vel: 0.75 },      // C#5
        { t: 39,   div: 'great', midi: 71, dur: 1, vel: 0.75 },      // B4
        // Choir
        { t: 36,   div: 'choir', midi: 64, dur: 2, vel: 0.75 },      // E4
        { t: 36,   div: 'choir', midi: 67, dur: 2, vel: 0.75 },      // G4
        { t: 38,   div: 'choir', midi: 64, dur: 2, vel: 0.75 },      // E4
        { t: 38,   div: 'choir', midi: 66, dur: 2, vel: 0.75 },      // F#4
        // Pedal
        { t: 36,   div: 'pedal', midi: 52, dur: 2, vel: 0.75 },    // E3
        { t: 38,   div: 'pedal', midi: 45, dur: 2, vel: 0.75 },    // A2

        // --- Bar 11: Building toward cadence ---
        { t: 40,   div: 'great', midi: 69, dur: 1, vel: 0.75 },     // A4
        { t: 41,   div: 'great', midi: 71, dur: 1, vel: 0.75 },     // B4
        { t: 42,   div: 'great', midi: 73, dur: 1.5, vel: 0.75 },   // C#5 (dotted quarter)
        { t: 43.5, div: 'great', midi: 71, dur: 0.5, vel: 0.75 },   // B4
        // Choir
        { t: 40,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 40,   div: 'choir', midi: 66, dur: 2, vel: 0.75 },      // F#4
        { t: 42,   div: 'choir', midi: 64, dur: 2, vel: 0.75 },      // E4
        { t: 42,   div: 'choir', midi: 69, dur: 2, vel: 0.75 },      // A4
        // Pedal
        { t: 40,   div: 'pedal', midi: 50, dur: 2, vel: 0.75 },    // D3
        { t: 42,   div: 'pedal', midi: 45, dur: 2, vel: 0.75 },    // A2

        // --- Bar 12: Cadence to D ---
        { t: 44,   div: 'great', midi: 69, dur: 1, vel: 0.75 },     // A4
        { t: 45,   div: 'great', midi: 73, dur: 1, vel: 0.75 },     // C#5
        { t: 46,   div: 'great', midi: 74, dur: 2, vel: 0.75 },     // D5 (half, resolution)
        // Choir
        { t: 44,   div: 'choir', midi: 57, dur: 2, vel: 0.75 },      // A3
        { t: 44,   div: 'choir', midi: 64, dur: 2, vel: 0.75 },      // E4
        { t: 46,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 46,   div: 'choir', midi: 66, dur: 2, vel: 0.75 },      // F#4
        // Pedal
        { t: 44,   div: 'pedal', midi: 45, dur: 2, vel: 0.75 },    // A2
        { t: 46,   div: 'pedal', midi: 50, dur: 2, vel: 0.75 },    // D3

        // ============================================================
        // A' SECTION return (bars 13-16): Grandioso
        // ============================================================

        // --- Bar 13: Return of opening ---
        { t: 48,   div: 'great', midi: 74, dur: 1.5, vel: 0.75 },   // D5
        { t: 49.5, div: 'great', midi: 73, dur: 0.5, vel: 0.75 },   // C#5
        { t: 50,   div: 'great', midi: 74, dur: 1, vel: 0.75 },      // D5
        { t: 51,   div: 'great', midi: 69, dur: 1, vel: 0.75 },      // A4
        // Choir - fuller voicing
        { t: 48,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 48,   div: 'choir', midi: 66, dur: 2, vel: 0.75 },      // F#4
        { t: 48,   div: 'choir', midi: 69, dur: 2, vel: 0.75 },      // A4
        { t: 50,   div: 'choir', midi: 62, dur: 2, vel: 0.75 },      // D4
        { t: 50,   div: 'choir', midi: 66, dur: 2, vel: 0.75 },      // F#4
        // Pedal
        { t: 48,   div: 'pedal', midi: 50, dur: 4, vel: 0.75 },    // D3

        // --- Bar 14 ---
        { t: 52,   div: 'great', midi: 66, dur: 1.5, vel: 0.75 },   // F#4
        { t: 53.5, div: 'great', midi: 64, dur: 0.5, vel: 0.75 },   // E4
        { t: 54,   div: 'great', midi: 66, dur: 1, vel: 0.75 },      // F#4
        { t: 55,   div: 'great', midi: 69, dur: 1, vel: 0.75 },      // A4
        // Choir
        { t: 52,   div: 'choir', midi: 62, dur: 4, vel: 0.75 },      // D4
        { t: 52,   div: 'choir', midi: 66, dur: 4, vel: 0.75 },      // F#4
        // Pedal
        { t: 52,   div: 'pedal', midi: 50, dur: 4, vel: 0.75 },    // D3

        // --- Bar 15 ---
        { t: 56,   div: 'great', midi: 71, dur: 1.5, vel: 0.75 },   // B4
        { t: 57.5, div: 'great', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 58,   div: 'great', midi: 71, dur: 1, vel: 0.75 },      // B4
        { t: 59,   div: 'great', midi: 73, dur: 1, vel: 0.75 },      // C#5
        // Choir
        { t: 56,   div: 'choir', midi: 64, dur: 2, vel: 0.75 },      // E4
        { t: 56,   div: 'choir', midi: 67, dur: 2, vel: 0.75 },      // G4
        { t: 58,   div: 'choir', midi: 64, dur: 2, vel: 0.75 },      // E4
        { t: 58,   div: 'choir', midi: 69, dur: 2, vel: 0.75 },      // A4
        // Pedal
        { t: 56,   div: 'pedal', midi: 52, dur: 2, vel: 0.75 },    // E3
        { t: 58,   div: 'pedal', midi: 45, dur: 2, vel: 0.75 },    // A2

        // --- Bar 16: Grand final D major ---
        { t: 60,   div: 'great', midi: 74, dur: 4, vel: 0.75 },     // D5 (whole note, majestic)
        // Full D major chord
        { t: 60,   div: 'choir', midi: 62, dur: 4, vel: 0.75 },      // D4
        { t: 60,   div: 'choir', midi: 66, dur: 4, vel: 0.75 },      // F#4
        { t: 60,   div: 'choir', midi: 69, dur: 4, vel: 0.75 },      // A4
        // Pedal
        { t: 60,   div: 'pedal', midi: 50, dur: 4, vel: 0.75 },    // D3
        { t: 60,   div: 'pedal', midi: 38, dur: 4, vel: 0.75 },    // D2,
        { t: 52, div: 'choir', midi: 66, dur: 1.5, vel: 0.60 },
        { t: 19, div: 'choir', midi: 76, dur: 1, vel: 0.60 },
        { t: 20, div: 'choir', midi: 78, dur: 1.5, vel: 0.60 },
        { t: 22, div: 'choir', midi: 74, dur: 1, vel: 0.60 },
        { t: 16, div: 'choir', midi: 74, dur: 1.5, vel: 0.60 },
        { t: 3, div: 'choir', midi: 69, dur: 1, vel: 0.60 },
        { t: 36, div: 'choir', midi: 76, dur: 1.5, vel: 0.60 },
        { t: 26, div: 'choir', midi: 67, dur: 1, vel: 0.60 }
    ]
};
