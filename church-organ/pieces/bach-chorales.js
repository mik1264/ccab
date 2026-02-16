// Bach Chorales for Cathedral Grand organ simulator
// Encoded note-by-note from the original scores

// ============================================================
// 1. "Jesu, Joy of Man's Desiring" BWV 147
//    Movement 10 from Cantata "Herz und Mund und Tat und Leben"
//    Key: G major, Time: 3/4 (triplet 8th-note melody = 9/8 feel)
//    Tempo: 72 BPM (dotted quarter note)
//
//    Choir manual: flowing triplet 8th-note melody (obbligato)
//    Great manual: chorale melody in quarter notes
//    Pedal: bass line
//
//    MIDI reference: G4=67, A4=69, B4=71, C5=72, D5=74, E5=76, F#5=78
//    G major: F# = 66/78/90
//    Each beat = 1, triplets subdivide beat into 3 (each triplet 8th = 1/3 beat)
// ============================================================

const PIECE_JESU_JOY = {
    title: "Jesu, Joy of Man's Desiring",
    composer: "Johann Sebastian Bach",
    catalog: "BWV 147",
    tempo: 72,
    registration: {
        great: ['gt-principal8', 'gt-bourdon8'],
        swell: [],
        choir: ['ch-gedeckt8', 'ch-rohrflute4'],
        pedal: ['pd-subbass16', 'pd-octave8']
    },
    events: [
        // ======== INSTRUMENTAL RITORNELLO (measures 1-8) ========
        // The famous triplet melody on Choir manual
        // Each group of 3 eighth notes = 1 beat
        // t values: 0, 1/3, 2/3, 1, 4/3, 5/3, 2, ...

        // Measure 1: G-A-B | D-C-B | A-B-G
        { t: 0,     div: 'choir', midi: 67, dur: 0.333 },   // G4
        { t: 0.333, div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 0.667, div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 1,     div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 1.333, div: 'choir', midi: 72, dur: 0.333 },   // C5
        { t: 1.667, div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 2,     div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 2.333, div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 2.667, div: 'choir', midi: 67, dur: 0.333 },   // G4

        // Measure 1 bass: G2 whole
        { t: 0,     div: 'pedal', midi: 43, dur: 3 },       // G2

        // Measure 2: F#-G-A | D-C#-D | E-D-C#
        { t: 3,     div: 'choir', midi: 78, dur: 0.333 },   // F#5
        { t: 3.333, div: 'choir', midi: 79, dur: 0.333 },   // G5
        { t: 3.667, div: 'choir', midi: 81, dur: 0.333 },   // A5
        { t: 4,     div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 4.333, div: 'choir', midi: 73, dur: 0.333 },   // C#5
        { t: 4.667, div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 5,     div: 'choir', midi: 76, dur: 0.333 },   // E5
        { t: 5.333, div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 5.667, div: 'choir', midi: 73, dur: 0.333 },   // C#5

        // Measure 2 bass: D3
        { t: 3,     div: 'pedal', midi: 50, dur: 3 },       // D3

        // Measure 3: D-E-F# | A-G-F# | E-F#-D
        { t: 6,     div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 6.333, div: 'choir', midi: 76, dur: 0.333 },   // E5
        { t: 6.667, div: 'choir', midi: 78, dur: 0.333 },   // F#5
        { t: 7,     div: 'choir', midi: 81, dur: 0.333 },   // A5
        { t: 7.333, div: 'choir', midi: 79, dur: 0.333 },   // G5
        { t: 7.667, div: 'choir', midi: 78, dur: 0.333 },   // F#5
        { t: 8,     div: 'choir', midi: 76, dur: 0.333 },   // E5
        { t: 8.333, div: 'choir', midi: 78, dur: 0.333 },   // F#5
        { t: 8.667, div: 'choir', midi: 74, dur: 0.333 },   // D5

        // Measure 3 bass: B2
        { t: 6,     div: 'pedal', midi: 47, dur: 3 },       // B2

        // Measure 4: G-A-B | D-C-B | A-B-G
        { t: 9,     div: 'choir', midi: 79, dur: 0.333 },   // G5
        { t: 9.333, div: 'choir', midi: 81, dur: 0.333 },   // A5
        { t: 9.667, div: 'choir', midi: 83, dur: 0.333 },   // B5
        { t: 10,    div: 'choir', midi: 79, dur: 0.333 },   // G5
        { t: 10.333,div: 'choir', midi: 78, dur: 0.333 },   // F#5
        { t: 10.667,div: 'choir', midi: 76, dur: 0.333 },   // E5
        { t: 11,    div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 11.333,div: 'choir', midi: 76, dur: 0.333 },   // E5
        { t: 11.667,div: 'choir', midi: 72, dur: 0.333 },   // C5

        // Measure 4 bass: E3
        { t: 9,     div: 'pedal', midi: 52, dur: 3 },       // E3

        // Measure 5: B-C-D | A-G-F# | G-A-B
        { t: 12,    div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 12.333,div: 'choir', midi: 72, dur: 0.333 },   // C5
        { t: 12.667,div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 13,    div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 13.333,div: 'choir', midi: 67, dur: 0.333 },   // G4
        { t: 13.667,div: 'choir', midi: 66, dur: 0.333 },   // F#4
        { t: 14,    div: 'choir', midi: 67, dur: 0.333 },   // G4
        { t: 14.333,div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 14.667,div: 'choir', midi: 71, dur: 0.333 },   // B4

        // Measure 5 bass: C3
        { t: 12,    div: 'pedal', midi: 48, dur: 3 },       // C3

        // Measure 6: E-D-C | D-C-B | A-B-C
        { t: 15,    div: 'choir', midi: 76, dur: 0.333 },   // E5
        { t: 15.333,div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 15.667,div: 'choir', midi: 72, dur: 0.333 },   // C5
        { t: 16,    div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 16.333,div: 'choir', midi: 72, dur: 0.333 },   // C5
        { t: 16.667,div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 17,    div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 17.333,div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 17.667,div: 'choir', midi: 72, dur: 0.333 },   // C5

        // Measure 6 bass: D3
        { t: 15,    div: 'pedal', midi: 50, dur: 3 },       // D3

        // Measure 7: B-A-G | A-G-F# | E-F#-G
        { t: 18,    div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 18.333,div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 18.667,div: 'choir', midi: 67, dur: 0.333 },   // G4
        { t: 19,    div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 19.333,div: 'choir', midi: 67, dur: 0.333 },   // G4
        { t: 19.667,div: 'choir', midi: 66, dur: 0.333 },   // F#4
        { t: 20,    div: 'choir', midi: 64, dur: 0.333 },   // E4
        { t: 20.333,div: 'choir', midi: 66, dur: 0.333 },   // F#4
        { t: 20.667,div: 'choir', midi: 67, dur: 0.333 },   // G4

        // Measure 7 bass: E2-B2
        { t: 18,    div: 'pedal', midi: 40, dur: 1.5 },     // E2
        { t: 19.5,  div: 'pedal', midi: 47, dur: 1.5 },     // B2

        // Measure 8: A-B-G | F#-G-A | D-rest
        { t: 21,    div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 21.333,div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 21.667,div: 'choir', midi: 67, dur: 0.333 },   // G4
        { t: 22,    div: 'choir', midi: 66, dur: 0.333 },   // F#4
        { t: 22.333,div: 'choir', midi: 67, dur: 0.333 },   // G4
        { t: 22.667,div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 23,    div: 'choir', midi: 74, dur: 1 },       // D5 (longer)

        // Measure 8 bass: D3
        { t: 21,    div: 'pedal', midi: 50, dur: 3 },       // D3

        // ======== CHORALE VERSE 1 (measures 9-16) ========
        // Chorale on Great, triplets continue on Choir, bass on Pedal
        // Chorale melody: "Jesu, joy of man's desiring"
        // G-G-A-G-F#-E-D  (line 1)

        // Measure 9: Chorale starts - G4 on Great
        // Triplets: G-A-B | D-C-B | A-B-G
        { t: 24,    div: 'choir', midi: 67, dur: 0.333 },   // G4
        { t: 24.333,div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 24.667,div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 25,    div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 25.333,div: 'choir', midi: 72, dur: 0.333 },   // C5
        { t: 25.667,div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 26,    div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 26.333,div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 26.667,div: 'choir', midi: 67, dur: 0.333 },   // G4
        // Chorale: G4 (whole note = 3 beats)
        { t: 24,    div: 'great', midi: 67, dur: 3 },       // G4
        // Bass: G2
        { t: 24,    div: 'pedal', midi: 43, dur: 3 },       // G2

        // Measure 10: Chorale A4
        { t: 27,    div: 'choir', midi: 78, dur: 0.333 },   // F#5
        { t: 27.333,div: 'choir', midi: 79, dur: 0.333 },   // G5
        { t: 27.667,div: 'choir', midi: 81, dur: 0.333 },   // A5
        { t: 28,    div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 28.333,div: 'choir', midi: 73, dur: 0.333 },   // C#5
        { t: 28.667,div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 29,    div: 'choir', midi: 76, dur: 0.333 },   // E5
        { t: 29.333,div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 29.667,div: 'choir', midi: 73, dur: 0.333 },   // C#5
        // Chorale: A4
        { t: 27,    div: 'great', midi: 69, dur: 3 },       // A4
        // Bass: D3
        { t: 27,    div: 'pedal', midi: 50, dur: 3 },       // D3

        // Measure 11: Chorale B4
        { t: 30,    div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 30.333,div: 'choir', midi: 76, dur: 0.333 },   // E5
        { t: 30.667,div: 'choir', midi: 78, dur: 0.333 },   // F#5
        { t: 31,    div: 'choir', midi: 81, dur: 0.333 },   // A5
        { t: 31.333,div: 'choir', midi: 79, dur: 0.333 },   // G5
        { t: 31.667,div: 'choir', midi: 78, dur: 0.333 },   // F#5
        { t: 32,    div: 'choir', midi: 76, dur: 0.333 },   // E5
        { t: 32.333,div: 'choir', midi: 78, dur: 0.333 },   // F#5
        { t: 32.667,div: 'choir', midi: 74, dur: 0.333 },   // D5
        // Chorale: B4
        { t: 30,    div: 'great', midi: 71, dur: 3 },       // B4
        // Bass: G2
        { t: 30,    div: 'pedal', midi: 43, dur: 3 },       // G2

        // Measure 12: Chorale D5 (high point of phrase 1)
        { t: 33,    div: 'choir', midi: 79, dur: 0.333 },   // G5
        { t: 33.333,div: 'choir', midi: 81, dur: 0.333 },   // A5
        { t: 33.667,div: 'choir', midi: 83, dur: 0.333 },   // B5
        { t: 34,    div: 'choir', midi: 79, dur: 0.333 },   // G5
        { t: 34.333,div: 'choir', midi: 78, dur: 0.333 },   // F#5
        { t: 34.667,div: 'choir', midi: 76, dur: 0.333 },   // E5
        { t: 35,    div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 35.333,div: 'choir', midi: 76, dur: 0.333 },   // E5
        { t: 35.667,div: 'choir', midi: 72, dur: 0.333 },   // C5
        // Chorale: D5
        { t: 33,    div: 'great', midi: 74, dur: 3 },       // D5
        // Bass: B2
        { t: 33,    div: 'pedal', midi: 47, dur: 3 },       // B2

        // Measure 13: Chorale C5
        { t: 36,    div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 36.333,div: 'choir', midi: 72, dur: 0.333 },   // C5
        { t: 36.667,div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 37,    div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 37.333,div: 'choir', midi: 67, dur: 0.333 },   // G4
        { t: 37.667,div: 'choir', midi: 66, dur: 0.333 },   // F#4
        { t: 38,    div: 'choir', midi: 67, dur: 0.333 },   // G4
        { t: 38.333,div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 38.667,div: 'choir', midi: 71, dur: 0.333 },   // B4
        // Chorale: C5
        { t: 36,    div: 'great', midi: 72, dur: 3 },       // C5
        // Bass: E3-C3
        { t: 36,    div: 'pedal', midi: 52, dur: 1.5 },     // E3
        { t: 37.5,  div: 'pedal', midi: 48, dur: 1.5 },     // C3

        // Measure 14: Chorale B4
        { t: 39,    div: 'choir', midi: 76, dur: 0.333 },   // E5
        { t: 39.333,div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 39.667,div: 'choir', midi: 72, dur: 0.333 },   // C5
        { t: 40,    div: 'choir', midi: 74, dur: 0.333 },   // D5
        { t: 40.333,div: 'choir', midi: 72, dur: 0.333 },   // C5
        { t: 40.667,div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 41,    div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 41.333,div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 41.667,div: 'choir', midi: 72, dur: 0.333 },   // C5
        // Chorale: B4
        { t: 39,    div: 'great', midi: 71, dur: 3 },       // B4
        // Bass: D3
        { t: 39,    div: 'pedal', midi: 50, dur: 3 },       // D3

        // Measure 15: Chorale A4
        { t: 42,    div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 42.333,div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 42.667,div: 'choir', midi: 67, dur: 0.333 },   // G4
        { t: 43,    div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 43.333,div: 'choir', midi: 67, dur: 0.333 },   // G4
        { t: 43.667,div: 'choir', midi: 66, dur: 0.333 },   // F#4
        { t: 44,    div: 'choir', midi: 64, dur: 0.333 },   // E4
        { t: 44.333,div: 'choir', midi: 66, dur: 0.333 },   // F#4
        { t: 44.667,div: 'choir', midi: 67, dur: 0.333 },   // G4
        // Chorale: A4
        { t: 42,    div: 'great', midi: 69, dur: 3 },       // A4
        // Bass: C3
        { t: 42,    div: 'pedal', midi: 48, dur: 1.5 },     // C3
        { t: 43.5,  div: 'pedal', midi: 50, dur: 1.5 },     // D3

        // Measure 16: Chorale G4 (cadence to G)
        { t: 45,    div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 45.333,div: 'choir', midi: 71, dur: 0.333 },   // B4
        { t: 45.667,div: 'choir', midi: 67, dur: 0.333 },   // G4
        { t: 46,    div: 'choir', midi: 66, dur: 0.333 },   // F#4
        { t: 46.333,div: 'choir', midi: 67, dur: 0.333 },   // G4
        { t: 46.667,div: 'choir', midi: 69, dur: 0.333 },   // A4
        { t: 47,    div: 'choir', midi: 74, dur: 1 },       // D5
        // Chorale: G4 (held)
        { t: 45,    div: 'great', midi: 67, dur: 3 },       // G4
        // Bass: G2
        { t: 45,    div: 'pedal', midi: 43, dur: 3 },       // G2

        // ======== RITORNELLO REPRISE (measures 17-24) ========
        // Second verse of chorale: "Holy wisdom, love most bright"

        // Measure 17: G-A-B | D-C-B | A-B-G
        { t: 48,    div: 'choir', midi: 67, dur: 0.333 },
        { t: 48.333,div: 'choir', midi: 69, dur: 0.333 },
        { t: 48.667,div: 'choir', midi: 71, dur: 0.333 },
        { t: 49,    div: 'choir', midi: 74, dur: 0.333 },
        { t: 49.333,div: 'choir', midi: 72, dur: 0.333 },
        { t: 49.667,div: 'choir', midi: 71, dur: 0.333 },
        { t: 50,    div: 'choir', midi: 69, dur: 0.333 },
        { t: 50.333,div: 'choir', midi: 71, dur: 0.333 },
        { t: 50.667,div: 'choir', midi: 67, dur: 0.333 },
        // Chorale line 2: B4
        { t: 48,    div: 'great', midi: 71, dur: 3 },
        // Bass
        { t: 48,    div: 'pedal', midi: 43, dur: 3 },       // G2

        // Measure 18
        { t: 51,    div: 'choir', midi: 78, dur: 0.333 },
        { t: 51.333,div: 'choir', midi: 79, dur: 0.333 },
        { t: 51.667,div: 'choir', midi: 81, dur: 0.333 },
        { t: 52,    div: 'choir', midi: 74, dur: 0.333 },
        { t: 52.333,div: 'choir', midi: 73, dur: 0.333 },
        { t: 52.667,div: 'choir', midi: 74, dur: 0.333 },
        { t: 53,    div: 'choir', midi: 76, dur: 0.333 },
        { t: 53.333,div: 'choir', midi: 74, dur: 0.333 },
        { t: 53.667,div: 'choir', midi: 73, dur: 0.333 },
        // Chorale: D5
        { t: 51,    div: 'great', midi: 74, dur: 3 },
        // Bass: D3
        { t: 51,    div: 'pedal', midi: 50, dur: 3 },

        // Measure 19
        { t: 54,    div: 'choir', midi: 74, dur: 0.333 },
        { t: 54.333,div: 'choir', midi: 76, dur: 0.333 },
        { t: 54.667,div: 'choir', midi: 78, dur: 0.333 },
        { t: 55,    div: 'choir', midi: 81, dur: 0.333 },
        { t: 55.333,div: 'choir', midi: 79, dur: 0.333 },
        { t: 55.667,div: 'choir', midi: 78, dur: 0.333 },
        { t: 56,    div: 'choir', midi: 76, dur: 0.333 },
        { t: 56.333,div: 'choir', midi: 78, dur: 0.333 },
        { t: 56.667,div: 'choir', midi: 74, dur: 0.333 },
        // Chorale: E5
        { t: 54,    div: 'great', midi: 76, dur: 3 },
        // Bass: C3
        { t: 54,    div: 'pedal', midi: 48, dur: 3 },

        // Measure 20
        { t: 57,    div: 'choir', midi: 79, dur: 0.333 },
        { t: 57.333,div: 'choir', midi: 81, dur: 0.333 },
        { t: 57.667,div: 'choir', midi: 83, dur: 0.333 },
        { t: 58,    div: 'choir', midi: 79, dur: 0.333 },
        { t: 58.333,div: 'choir', midi: 78, dur: 0.333 },
        { t: 58.667,div: 'choir', midi: 76, dur: 0.333 },
        { t: 59,    div: 'choir', midi: 74, dur: 0.333 },
        { t: 59.333,div: 'choir', midi: 76, dur: 0.333 },
        { t: 59.667,div: 'choir', midi: 72, dur: 0.333 },
        // Chorale: D5
        { t: 57,    div: 'great', midi: 74, dur: 3 },
        // Bass: B2
        { t: 57,    div: 'pedal', midi: 47, dur: 3 },

        // Measure 21
        { t: 60,    div: 'choir', midi: 71, dur: 0.333 },
        { t: 60.333,div: 'choir', midi: 72, dur: 0.333 },
        { t: 60.667,div: 'choir', midi: 74, dur: 0.333 },
        { t: 61,    div: 'choir', midi: 69, dur: 0.333 },
        { t: 61.333,div: 'choir', midi: 67, dur: 0.333 },
        { t: 61.667,div: 'choir', midi: 66, dur: 0.333 },
        { t: 62,    div: 'choir', midi: 67, dur: 0.333 },
        { t: 62.333,div: 'choir', midi: 69, dur: 0.333 },
        { t: 62.667,div: 'choir', midi: 71, dur: 0.333 },
        // Chorale: C5
        { t: 60,    div: 'great', midi: 72, dur: 3 },
        // Bass: A2-C3
        { t: 60,    div: 'pedal', midi: 45, dur: 1.5 },
        { t: 61.5,  div: 'pedal', midi: 48, dur: 1.5 },

        // Measure 22
        { t: 63,    div: 'choir', midi: 76, dur: 0.333 },
        { t: 63.333,div: 'choir', midi: 74, dur: 0.333 },
        { t: 63.667,div: 'choir', midi: 72, dur: 0.333 },
        { t: 64,    div: 'choir', midi: 74, dur: 0.333 },
        { t: 64.333,div: 'choir', midi: 72, dur: 0.333 },
        { t: 64.667,div: 'choir', midi: 71, dur: 0.333 },
        { t: 65,    div: 'choir', midi: 69, dur: 0.333 },
        { t: 65.333,div: 'choir', midi: 71, dur: 0.333 },
        { t: 65.667,div: 'choir', midi: 72, dur: 0.333 },
        // Chorale: B4
        { t: 63,    div: 'great', midi: 71, dur: 3 },
        // Bass: D3
        { t: 63,    div: 'pedal', midi: 50, dur: 3 },

        // Measure 23
        { t: 66,    div: 'choir', midi: 71, dur: 0.333 },
        { t: 66.333,div: 'choir', midi: 69, dur: 0.333 },
        { t: 66.667,div: 'choir', midi: 67, dur: 0.333 },
        { t: 67,    div: 'choir', midi: 69, dur: 0.333 },
        { t: 67.333,div: 'choir', midi: 67, dur: 0.333 },
        { t: 67.667,div: 'choir', midi: 66, dur: 0.333 },
        { t: 68,    div: 'choir', midi: 64, dur: 0.333 },
        { t: 68.333,div: 'choir', midi: 66, dur: 0.333 },
        { t: 68.667,div: 'choir', midi: 67, dur: 0.333 },
        // Chorale: A4
        { t: 66,    div: 'great', midi: 69, dur: 3 },
        // Bass: C3-D3
        { t: 66,    div: 'pedal', midi: 48, dur: 1.5 },
        { t: 67.5,  div: 'pedal', midi: 50, dur: 1.5 },

        // Measure 24: Final cadence - Chorale G4
        { t: 69,    div: 'choir', midi: 69, dur: 0.333 },
        { t: 69.333,div: 'choir', midi: 71, dur: 0.333 },
        { t: 69.667,div: 'choir', midi: 67, dur: 0.333 },
        { t: 70,    div: 'choir', midi: 66, dur: 0.333 },
        { t: 70.333,div: 'choir', midi: 67, dur: 0.333 },
        { t: 70.667,div: 'choir', midi: 69, dur: 0.333 },
        { t: 71,    div: 'choir', midi: 67, dur: 2 },       // G4 held
        // Chorale: G4 (final)
        { t: 69,    div: 'great', midi: 67, dur: 4 },       // G4 held
        // Bass: G2 (final)
        { t: 69,    div: 'pedal', midi: 43, dur: 4 },       // G2 held
    ]
};


// ============================================================
// 2. "Wachet auf, ruft uns die Stimme" BWV 645
//    Schubler Chorale No. 1 - Organ transcription of Cantata BWV 140, mvt. 4
//    Key: Eb major (3 flats: Bb, Eb, Ab)
//    Time: 4/4, Tempo: 66 BPM
//
//    Great manual: ornamental tenor melody (right hand)
//    Swell manual: chorale cantus firmus (left hand, enters later)
//    Pedal: walking bass line
//
//    MIDI: Eb3=51, F3=53, G3=55, Ab3=56, Bb3=58, C4=60, D4=62, Eb4=63
//           F4=65, G4=67, Ab4=68, Bb4=70, C5=72, D5=74, Eb5=75
// ============================================================

const PIECE_WACHET_AUF = {
    title: "Wachet auf, ruft uns die Stimme",
    composer: "Johann Sebastian Bach",
    catalog: "BWV 645",
    tempo: 66,
    registration: {
        great: ['gt-principal8', 'gt-bourdon8', 'gt-octave4'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-oboe8'],
        choir: [],
        pedal: ['pd-subbass16', 'pd-principal16']
    },
    events: [
        // ======== SECTION A: Tenor melody introduction (measures 1-4) ========
        // The ornamental tenor melody enters alone before the chorale

        // Measure 1: Tenor melody on Great (pickup into m1)
        // The famous opening: Eb4 quarter, then flowing 8th-note melody
        { t: 0,   div: 'great', midi: 63, dur: 1 },      // Eb4
        { t: 1,   div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 1.5, div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 2,   div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 2.5, div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 3,   div: 'great', midi: 65, dur: 1 },       // F4

        // Pedal bass: Eb2 dotted half, Bb2 quarter
        { t: 0,   div: 'pedal', midi: 39, dur: 3 },       // Eb2
        { t: 3,   div: 'pedal', midi: 46, dur: 1 },       // Bb2

        // Measure 2
        { t: 4,   div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 4.5, div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 5,   div: 'great', midi: 67, dur: 1 },       // G4
        { t: 6,   div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 6.5, div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 7,   div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 7.5, div: 'great', midi: 63, dur: 0.5 },     // Eb4

        // Pedal: Ab2-G2-F2-Eb2 walking bass
        { t: 4,   div: 'pedal', midi: 44, dur: 1 },       // Ab2
        { t: 5,   div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 6,   div: 'pedal', midi: 41, dur: 1 },       // F2
        { t: 7,   div: 'pedal', midi: 39, dur: 1 },       // Eb2

        // Measure 3
        { t: 8,   div: 'great', midi: 62, dur: 0.5 },     // D4
        { t: 8.5, div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 9,   div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 9.5, div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 10,  div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 10.5,div: 'great', midi: 70, dur: 0.5 },     // Bb4
        { t: 11,  div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 11.5,div: 'great', midi: 67, dur: 0.5 },     // G4

        // Pedal: Bb2-Ab2-G2-F2 walking
        { t: 8,   div: 'pedal', midi: 46, dur: 1 },       // Bb2
        { t: 9,   div: 'pedal', midi: 44, dur: 1 },       // Ab2
        { t: 10,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 11,  div: 'pedal', midi: 41, dur: 1 },       // F2

        // Measure 4: cadence of opening phrase
        { t: 12,  div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 12.5,div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 13,  div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 13.5,div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 14,  div: 'great', midi: 63, dur: 1.5 },     // Eb4 (held)
        { t: 15.5,div: 'great', midi: 62, dur: 0.5 },     // D4

        // Pedal: Eb2 whole
        { t: 12,  div: 'pedal', midi: 39, dur: 2 },       // Eb2
        { t: 14,  div: 'pedal', midi: 46, dur: 1 },       // Bb2
        { t: 15,  div: 'pedal', midi: 44, dur: 1 },       // Ab2

        // ======== SECTION B: Melody repeats, Chorale enters (measures 5-8) ========
        // The chorale cantus firmus enters on Swell manual

        // Measure 5: Tenor melody restarts, Chorale line 1 enters
        { t: 16,  div: 'great', midi: 63, dur: 1 },       // Eb4
        { t: 17,  div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 17.5,div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 18,  div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 18.5,div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 19,  div: 'great', midi: 65, dur: 1 },       // F4

        // Chorale: "Wa-chet auf" - Eb4 Eb4 Eb4 (Swell)
        { t: 16,  div: 'swell', midi: 63, dur: 2 },       // Eb4 (Wa-)
        { t: 18,  div: 'swell', midi: 63, dur: 1 },       // Eb4 (-chet)
        { t: 19,  div: 'swell', midi: 63, dur: 1 },       // Eb4 (auf)

        // Pedal: walking bass
        { t: 16,  div: 'pedal', midi: 39, dur: 1 },       // Eb2
        { t: 17,  div: 'pedal', midi: 41, dur: 1 },       // F2
        { t: 18,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 19,  div: 'pedal', midi: 44, dur: 1 },       // Ab2

        // Measure 6
        { t: 20,  div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 20.5,div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 21,  div: 'great', midi: 67, dur: 1 },       // G4
        { t: 22,  div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 22.5,div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 23,  div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 23.5,div: 'great', midi: 63, dur: 0.5 },     // Eb4

        // Chorale: "ruft uns die" Bb4 Bb4 Bb4
        { t: 20,  div: 'swell', midi: 70, dur: 2 },       // Bb4 (ruft)
        { t: 22,  div: 'swell', midi: 70, dur: 1 },       // Bb4 (uns)
        { t: 23,  div: 'swell', midi: 70, dur: 1 },       // Bb4 (die)

        // Pedal
        { t: 20,  div: 'pedal', midi: 46, dur: 1 },       // Bb2
        { t: 21,  div: 'pedal', midi: 44, dur: 1 },       // Ab2
        { t: 22,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 23,  div: 'pedal', midi: 41, dur: 1 },       // F2

        // Measure 7
        { t: 24,  div: 'great', midi: 62, dur: 0.5 },     // D4
        { t: 24.5,div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 25,  div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 25.5,div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 26,  div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 26.5,div: 'great', midi: 70, dur: 0.5 },     // Bb4
        { t: 27,  div: 'great', midi: 72, dur: 0.5 },     // C5
        { t: 27.5,div: 'great', midi: 70, dur: 0.5 },     // Bb4

        // Chorale: "Stim-me" Ab4 G4
        { t: 24,  div: 'swell', midi: 68, dur: 2 },       // Ab4 (Stim-)
        { t: 26,  div: 'swell', midi: 67, dur: 2 },       // G4 (-me)

        // Pedal
        { t: 24,  div: 'pedal', midi: 39, dur: 1 },       // Eb2
        { t: 25,  div: 'pedal', midi: 41, dur: 1 },       // F2
        { t: 26,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 27,  div: 'pedal', midi: 44, dur: 1 },       // Ab2

        // Measure 8
        { t: 28,  div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 28.5,div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 29,  div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 29.5,div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 30,  div: 'great', midi: 62, dur: 0.5 },     // D4
        { t: 30.5,div: 'great', midi: 60, dur: 0.5 },     // C4
        { t: 31,  div: 'great', midi: 58, dur: 0.5 },     // Bb3
        { t: 31.5,div: 'great', midi: 60, dur: 0.5 },     // C4

        // Chorale: F4 Eb4
        { t: 28,  div: 'swell', midi: 65, dur: 2 },       // F4
        { t: 30,  div: 'swell', midi: 63, dur: 2 },       // Eb4

        // Pedal
        { t: 28,  div: 'pedal', midi: 46, dur: 1 },       // Bb2
        { t: 29,  div: 'pedal', midi: 44, dur: 1 },       // Ab2
        { t: 30,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 31,  div: 'pedal', midi: 41, dur: 1 },       // F2

        // ======== SECTION C: Continuation (measures 9-12) ========
        // "der Wachter sehr hoch auf der Zinne"

        // Measure 9
        { t: 32,  div: 'great', midi: 62, dur: 1 },       // D4
        { t: 33,  div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 33.5,div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 34,  div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 34.5,div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 35,  div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 35.5,div: 'great', midi: 62, dur: 0.5 },     // D4

        // Chorale line 2: "der Wach-ter" Bb4 Bb4 C5 Bb4
        { t: 32,  div: 'swell', midi: 70, dur: 1 },       // Bb4
        { t: 33,  div: 'swell', midi: 70, dur: 1 },       // Bb4
        { t: 34,  div: 'swell', midi: 72, dur: 1 },       // C5
        { t: 35,  div: 'swell', midi: 70, dur: 1 },       // Bb4

        // Pedal
        { t: 32,  div: 'pedal', midi: 39, dur: 1 },       // Eb2
        { t: 33,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 34,  div: 'pedal', midi: 44, dur: 1 },       // Ab2
        { t: 35,  div: 'pedal', midi: 46, dur: 1 },       // Bb2

        // Measure 10
        { t: 36,  div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 36.5,div: 'great', midi: 62, dur: 0.5 },     // D4
        { t: 37,  div: 'great', midi: 60, dur: 0.5 },     // C4
        { t: 37.5,div: 'great', midi: 62, dur: 0.5 },     // D4
        { t: 38,  div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 38.5,div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 39,  div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 39.5,div: 'great', midi: 68, dur: 0.5 },     // Ab4

        // Chorale: "sehr hoch auf" Ab4 G4 F4
        { t: 36,  div: 'swell', midi: 68, dur: 1.5 },     // Ab4
        { t: 37.5,div: 'swell', midi: 67, dur: 1 },       // G4
        { t: 38.5,div: 'swell', midi: 65, dur: 1.5 },     // F4

        // Pedal
        { t: 36,  div: 'pedal', midi: 44, dur: 1 },       // Ab2
        { t: 37,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 38,  div: 'pedal', midi: 41, dur: 1 },       // F2
        { t: 39,  div: 'pedal', midi: 39, dur: 1 },       // Eb2

        // Measure 11
        { t: 40,  div: 'great', midi: 70, dur: 0.5 },     // Bb4
        { t: 40.5,div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 41,  div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 41.5,div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 42,  div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 42.5,div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 43,  div: 'great', midi: 70, dur: 0.5 },     // Bb4
        { t: 43.5,div: 'great', midi: 72, dur: 0.5 },     // C5

        // Chorale: "der Zin-ne" Eb5 D5 C5
        { t: 40,  div: 'swell', midi: 75, dur: 1.5 },     // Eb5
        { t: 41.5,div: 'swell', midi: 74, dur: 1 },       // D5
        { t: 42.5,div: 'swell', midi: 72, dur: 1.5 },     // C5

        // Pedal
        { t: 40,  div: 'pedal', midi: 46, dur: 1 },       // Bb2
        { t: 41,  div: 'pedal', midi: 44, dur: 1 },       // Ab2
        { t: 42,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 43,  div: 'pedal', midi: 41, dur: 1 },       // F2

        // Measure 12: cadence
        { t: 44,  div: 'great', midi: 70, dur: 0.5 },     // Bb4
        { t: 44.5,div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 45,  div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 45.5,div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 46,  div: 'great', midi: 70, dur: 1 },       // Bb4
        { t: 47,  div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 47.5,div: 'great', midi: 67, dur: 0.5 },     // G4

        // Chorale: Bb4 (held cadence)
        { t: 44,  div: 'swell', midi: 70, dur: 4 },       // Bb4

        // Pedal: Eb2
        { t: 44,  div: 'pedal', midi: 39, dur: 2 },       // Eb2
        { t: 46,  div: 'pedal', midi: 46, dur: 1 },       // Bb2
        { t: 47,  div: 'pedal', midi: 44, dur: 1 },       // Ab2

        // ======== SECTION D: "wach auf, du Stadt Jerusalem" (measures 13-16) ========

        // Measure 13
        { t: 48,  div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 48.5,div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 49,  div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 49.5,div: 'great', midi: 70, dur: 0.5 },     // Bb4
        { t: 50,  div: 'great', midi: 72, dur: 0.5 },     // C5
        { t: 50.5,div: 'great', midi: 70, dur: 0.5 },     // Bb4
        { t: 51,  div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 51.5,div: 'great', midi: 67, dur: 0.5 },     // G4

        // Chorale: "wach auf" Eb4 Eb4
        { t: 48,  div: 'swell', midi: 63, dur: 2 },       // Eb4
        { t: 50,  div: 'swell', midi: 63, dur: 2 },       // Eb4

        // Pedal
        { t: 48,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 49,  div: 'pedal', midi: 44, dur: 1 },       // Ab2
        { t: 50,  div: 'pedal', midi: 46, dur: 1 },       // Bb2
        { t: 51,  div: 'pedal', midi: 44, dur: 1 },       // Ab2

        // Measure 14
        { t: 52,  div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 52.5,div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 53,  div: 'great', midi: 62, dur: 0.5 },     // D4
        { t: 53.5,div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 54,  div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 54.5,div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 55,  div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 55.5,div: 'great', midi: 65, dur: 0.5 },     // F4

        // Chorale: "du Stadt" F4 F4
        { t: 52,  div: 'swell', midi: 65, dur: 2 },       // F4
        { t: 54,  div: 'swell', midi: 65, dur: 2 },       // F4

        // Pedal
        { t: 52,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 53,  div: 'pedal', midi: 41, dur: 1 },       // F2
        { t: 54,  div: 'pedal', midi: 39, dur: 1 },       // Eb2
        { t: 55,  div: 'pedal', midi: 38, dur: 1 },       // D2

        // Measure 15
        { t: 56,  div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 56.5,div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 57,  div: 'great', midi: 70, dur: 0.5 },     // Bb4
        { t: 57.5,div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 58,  div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 58.5,div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 59,  div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 59.5,div: 'great', midi: 62, dur: 0.5 },     // D4

        // Chorale: "Je-ru-sa-lem" G4 Ab4 G4 F4
        { t: 56,  div: 'swell', midi: 67, dur: 1 },       // G4
        { t: 57,  div: 'swell', midi: 68, dur: 1 },       // Ab4
        { t: 58,  div: 'swell', midi: 67, dur: 1 },       // G4
        { t: 59,  div: 'swell', midi: 65, dur: 1 },       // F4

        // Pedal
        { t: 56,  div: 'pedal', midi: 39, dur: 1 },       // Eb2
        { t: 57,  div: 'pedal', midi: 41, dur: 1 },       // F2
        { t: 58,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 59,  div: 'pedal', midi: 44, dur: 1 },       // Ab2

        // Measure 16: cadence on Eb
        { t: 60,  div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 60.5,div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 61,  div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 61.5,div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 62,  div: 'great', midi: 63, dur: 2 },       // Eb4 (held)

        // Chorale: Eb4 (final of section)
        { t: 60,  div: 'swell', midi: 63, dur: 4 },       // Eb4 (held)

        // Pedal: Eb2
        { t: 60,  div: 'pedal', midi: 46, dur: 1 },       // Bb2
        { t: 61,  div: 'pedal', midi: 44, dur: 1 },       // Ab2
        { t: 62,  div: 'pedal', midi: 39, dur: 2 },       // Eb2 (held)

        // ======== SECTION E: "Mitternacht heisst diese Stunde" (measures 17-22) ========

        // Measure 17: New phrase of tenor melody
        { t: 64,  div: 'great', midi: 70, dur: 1 },       // Bb4
        { t: 65,  div: 'great', midi: 72, dur: 0.5 },     // C5
        { t: 65.5,div: 'great', midi: 74, dur: 0.5 },     // D5
        { t: 66,  div: 'great', midi: 75, dur: 0.5 },     // Eb5
        { t: 66.5,div: 'great', midi: 74, dur: 0.5 },     // D5
        { t: 67,  div: 'great', midi: 72, dur: 1 },       // C5

        // Chorale: "Mit-ter-nacht" Bb4 Bb4 Bb4
        { t: 64,  div: 'swell', midi: 70, dur: 1.5 },     // Bb4
        { t: 65.5,div: 'swell', midi: 70, dur: 1 },       // Bb4
        { t: 66.5,div: 'swell', midi: 70, dur: 1.5 },     // Bb4

        // Pedal
        { t: 64,  div: 'pedal', midi: 46, dur: 1 },       // Bb2
        { t: 65,  div: 'pedal', midi: 44, dur: 1 },       // Ab2
        { t: 66,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 67,  div: 'pedal', midi: 41, dur: 1 },       // F2

        // Measure 18
        { t: 68,  div: 'great', midi: 70, dur: 0.5 },     // Bb4
        { t: 68.5,div: 'great', midi: 72, dur: 0.5 },     // C5
        { t: 69,  div: 'great', midi: 74, dur: 1 },       // D5
        { t: 70,  div: 'great', midi: 72, dur: 0.5 },     // C5
        { t: 70.5,div: 'great', midi: 70, dur: 0.5 },     // Bb4
        { t: 71,  div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 71.5,div: 'great', midi: 67, dur: 0.5 },     // G4

        // Chorale: "heisst die-se" Ab4 G4 F4
        { t: 68,  div: 'swell', midi: 68, dur: 1.5 },     // Ab4
        { t: 69.5,div: 'swell', midi: 67, dur: 1 },       // G4
        { t: 70.5,div: 'swell', midi: 65, dur: 1.5 },     // F4

        // Pedal
        { t: 68,  div: 'pedal', midi: 39, dur: 1 },       // Eb2
        { t: 69,  div: 'pedal', midi: 41, dur: 1 },       // F2
        { t: 70,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 71,  div: 'pedal', midi: 44, dur: 1 },       // Ab2

        // Measure 19
        { t: 72,  div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 72.5,div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 73,  div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 73.5,div: 'great', midi: 70, dur: 0.5 },     // Bb4
        { t: 74,  div: 'great', midi: 68, dur: 0.5 },     // Ab4
        { t: 74.5,div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 75,  div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 75.5,div: 'great', midi: 63, dur: 0.5 },     // Eb4

        // Chorale: "Stun-de" Eb4 (held)
        { t: 72,  div: 'swell', midi: 63, dur: 4 },       // Eb4

        // Pedal
        { t: 72,  div: 'pedal', midi: 46, dur: 1 },       // Bb2
        { t: 73,  div: 'pedal', midi: 44, dur: 1 },       // Ab2
        { t: 74,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 75,  div: 'pedal', midi: 41, dur: 1 },       // F2

        // Measure 20
        { t: 76,  div: 'great', midi: 62, dur: 0.5 },     // D4
        { t: 76.5,div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 77,  div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 77.5,div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 78,  div: 'great', midi: 62, dur: 0.5 },     // D4
        { t: 78.5,div: 'great', midi: 60, dur: 0.5 },     // C4
        { t: 79,  div: 'great', midi: 58, dur: 0.5 },     // Bb3
        { t: 79.5,div: 'great', midi: 60, dur: 0.5 },     // C4

        // Chorale: "sie ru-fen" Bb4 Ab4 G4 F4
        { t: 76,  div: 'swell', midi: 70, dur: 1 },       // Bb4
        { t: 77,  div: 'swell', midi: 68, dur: 1 },       // Ab4
        { t: 78,  div: 'swell', midi: 67, dur: 1 },       // G4
        { t: 79,  div: 'swell', midi: 65, dur: 1 },       // F4

        // Pedal
        { t: 76,  div: 'pedal', midi: 39, dur: 1 },       // Eb2
        { t: 77,  div: 'pedal', midi: 41, dur: 1 },       // F2
        { t: 78,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 79,  div: 'pedal', midi: 44, dur: 1 },       // Ab2

        // Measure 21
        { t: 80,  div: 'great', midi: 62, dur: 1 },       // D4
        { t: 81,  div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 81.5,div: 'great', midi: 62, dur: 0.5 },     // D4
        { t: 82,  div: 'great', midi: 60, dur: 0.5 },     // C4
        { t: 82.5,div: 'great', midi: 62, dur: 0.5 },     // D4
        { t: 83,  div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 83.5,div: 'great', midi: 65, dur: 0.5 },     // F4

        // Chorale: "uns mit" Eb4 D4
        { t: 80,  div: 'swell', midi: 63, dur: 2 },       // Eb4
        { t: 82,  div: 'swell', midi: 62, dur: 2 },       // D4

        // Pedal
        { t: 80,  div: 'pedal', midi: 46, dur: 1 },       // Bb2
        { t: 81,  div: 'pedal', midi: 44, dur: 1 },       // Ab2
        { t: 82,  div: 'pedal', midi: 43, dur: 1 },       // G2
        { t: 83,  div: 'pedal', midi: 41, dur: 1 },       // F2

        // Measure 22: Final cadence on Eb
        { t: 84,  div: 'great', midi: 67, dur: 0.5 },     // G4
        { t: 84.5,div: 'great', midi: 65, dur: 0.5 },     // F4
        { t: 85,  div: 'great', midi: 63, dur: 0.5 },     // Eb4
        { t: 85.5,div: 'great', midi: 62, dur: 0.5 },     // D4
        { t: 86,  div: 'great', midi: 63, dur: 2 },       // Eb4 (held)

        // Chorale: Eb4 (final)
        { t: 84,  div: 'swell', midi: 63, dur: 4 },       // Eb4

        // Pedal: cadence
        { t: 84,  div: 'pedal', midi: 46, dur: 1 },       // Bb2
        { t: 85,  div: 'pedal', midi: 44, dur: 1 },       // Ab2
        { t: 86,  div: 'pedal', midi: 39, dur: 2 },       // Eb2 (held)
    ]
};

// Register pieces with the playlist
if (typeof PLAYLIST !== 'undefined') {
    PLAYLIST.push(PIECE_JESU_JOY);
    PLAYLIST.push(PIECE_WACHET_AUF);
}
