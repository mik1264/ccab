// ============================================================
// PIECE 1: Jesu, Joy of Man's Desiring, BWV 147
// Full chorale with both stanzas and triplet accompaniment
// Key: G major, Tempo: 72, Time: 9/8 (compound triple)
// ============================================================

const PIECE_JESU_JOY = {
    title: "Jesu, Joy of Man's Desiring",
    composer: "J.S. Bach",
    catalog: "BWV 147",
    key: "G major",
    tempo: 72,
    tempoChanges: [
        { t: 0, tempo: 72, label: 'Andante' },
        { t: 180, tempo: 68, label: 'poco rit.' },
        { t: 184, tempo: 72, label: 'a tempo' },
        { t: 360, tempo: 66, label: 'rit.' }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4', 'sw-tremulant'],
        choir: ['ch-gedeckt8', 'ch-dulciana8'],
        pedal: ['pd-subbass16', 'pd-octave8']
    },
    events: [
        // Structure: Triplet eighth-note melody on choir, chorale on great, bass on pedal
        // Each "beat" = 1 eighth note in compound time. 9 eighths per measure.
        // Measure 1-2: Instrumental introduction - flowing triplet melody
        // m1 - G major arpeggio figures
        { t: 0, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },    // G4
        { t: 0.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 }, // A4
        { t: 0.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },  // B4
        { t: 1, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },     // G4
        { t: 1.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.45 }, // B4
        { t: 1.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },  // C5
        { t: 2, div: 'choir', midi: 74, dur: 0.33, vel: 0.55 },    // D5
        { t: 2.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.45 }, // B4
        { t: 2.67, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },  // D5
        // bass enters
        { t: 0, div: 'pedal', midi: 43, dur: 3, vel: 0.6 },        // G2
        // m2
        { t: 3, div: 'choir', midi: 76, dur: 0.33, vel: 0.55 },    // E5
        { t: 3.33, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },  // D5
        { t: 3.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },  // C5
        { t: 4, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },     // B4
        { t: 4.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 }, // A4
        { t: 4.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },  // B4
        { t: 5, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },     // G4
        { t: 5.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 }, // A4
        { t: 5.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },  // B4
        { t: 3, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },      // G2
        { t: 4.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.6 },    // E2
        // m3 - continuation of instrumental melody
        { t: 6, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },     // G4
        { t: 6.33, div: 'choir', midi: 66, dur: 0.33, vel: 0.45 }, // F#4
        { t: 6.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },  // E4
        { t: 7, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },     // D4
        { t: 7.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.45 }, // E4
        { t: 7.67, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },  // D4
        { t: 8, div: 'choir', midi: 60, dur: 0.33, vel: 0.5 },     // C4 (approach)
        { t: 8.33, div: 'choir', midi: 62, dur: 0.33, vel: 0.45 }, // D4
        { t: 8.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },  // E4
        { t: 6, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },      // D2
        { t: 7.5, div: 'pedal', midi: 36, dur: 1.5, vel: 0.6 },    // C2
        // m4 - cadence to G, triplets continue
        { t: 9, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },     // D4
        { t: 9.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },  // E4
        { t: 9.67, div: 'choir', midi: 66, dur: 0.33, vel: 0.5 },  // F#4
        { t: 10, div: 'choir', midi: 67, dur: 0.33, vel: 0.55 },   // G4
        { t: 10.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.5 }, // A4
        { t: 10.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 }, // B4
        { t: 11, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },    // G4
        { t: 11.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 }, // B4
        { t: 11.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 }, // C5
        { t: 9, div: 'pedal', midi: 38, dur: 3, vel: 0.6 },        // D2

        // ---- STANZA 1 CHORALE: "Jesu, Joy of Man's Desiring" ----
        // m5-6: Phrase 1 chorale + triplets
        // Chorale: "Je-su" G4-G4
        { t: 12, div: 'great', midi: 67, dur: 3, vel: 0.7 },       // G4 "Je-"
        { t: 12, div: 'swell', midi: 71, dur: 3, vel: 0.5 },       // B4 harmony
        { t: 12, div: 'swell', midi: 62, dur: 3, vel: 0.5 },       // D4 harmony
        // triplets continue underneath
        { t: 12, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 12.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.45 },
        { t: 12.67, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 13, div: 'choir', midi: 76, dur: 0.33, vel: 0.55 },
        { t: 13.33, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 13.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 14, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 14.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 14.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 12, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 13.5, div: 'pedal', midi: 45, dur: 1.5, vel: 0.6 },
        // Chorale: "-su" A4
        { t: 15, div: 'great', midi: 69, dur: 3, vel: 0.7 },       // A4 "-su"
        { t: 15, div: 'swell', midi: 72, dur: 3, vel: 0.5 },       // C5
        { t: 15, div: 'swell', midi: 64, dur: 3, vel: 0.5 },       // E4
        { t: 15, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 15.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 15.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 16, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 16.33, div: 'choir', midi: 66, dur: 0.33, vel: 0.45 },
        { t: 16.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 17, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 17.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.45 },
        { t: 17.67, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 15, div: 'pedal', midi: 45, dur: 1.5, vel: 0.6 },
        { t: 16.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },

        // m7-8: "Joy of man's de-"
        { t: 18, div: 'great', midi: 71, dur: 3, vel: 0.7 },       // B4 "Joy"
        { t: 18, div: 'swell', midi: 74, dur: 3, vel: 0.5 },       // D5
        { t: 18, div: 'swell', midi: 67, dur: 3, vel: 0.5 },       // G4
        { t: 18, div: 'choir', midi: 60, dur: 0.33, vel: 0.5 },
        { t: 18.33, div: 'choir', midi: 62, dur: 0.33, vel: 0.45 },
        { t: 18.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 19, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 19.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 19.67, div: 'choir', midi: 66, dur: 0.33, vel: 0.5 },
        { t: 20, div: 'choir', midi: 67, dur: 0.33, vel: 0.55 },
        { t: 20.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.5 },
        { t: 20.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 18, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 19.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },
        // "man's de-"
        { t: 21, div: 'great', midi: 74, dur: 1.5, vel: 0.7 },     // D5 "man's"
        { t: 22.5, div: 'great', midi: 72, dur: 1.5, vel: 0.7 },   // C5 "de-"
        { t: 21, div: 'swell', midi: 67, dur: 3, vel: 0.5 },       // G4
        { t: 21, div: 'swell', midi: 62, dur: 3, vel: 0.5 },       // D4
        { t: 21, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 21.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 21.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 22, div: 'choir', midi: 74, dur: 0.33, vel: 0.55 },
        { t: 22.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 22.67, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 23, div: 'choir', midi: 76, dur: 0.33, vel: 0.55 },
        { t: 23.33, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 23.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 21, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 22.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.6 },

        // m9-10: "-si-ring"
        { t: 24, div: 'great', midi: 71, dur: 3, vel: 0.7 },       // B4 "-si-"
        { t: 24, div: 'swell', midi: 74, dur: 3, vel: 0.5 },
        { t: 24, div: 'swell', midi: 67, dur: 3, vel: 0.5 },
        { t: 24, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 24.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 24.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 25, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 25.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 25.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 26, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 26.33, div: 'choir', midi: 66, dur: 0.33, vel: 0.45 },
        { t: 26.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 24, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 25.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },
        // "ring" - cadence
        { t: 27, div: 'great', midi: 69, dur: 3, vel: 0.7 },       // A4 "-ring"
        { t: 27, div: 'swell', midi: 72, dur: 3, vel: 0.5 },
        { t: 27, div: 'swell', midi: 64, dur: 3, vel: 0.5 },
        { t: 27, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 27.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.45 },
        { t: 27.67, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 28, div: 'choir', midi: 60, dur: 0.33, vel: 0.5 },
        { t: 28.33, div: 'choir', midi: 62, dur: 0.33, vel: 0.45 },
        { t: 28.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 29, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 29.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 29.67, div: 'choir', midi: 66, dur: 0.33, vel: 0.5 },
        { t: 27, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },
        { t: 28.5, div: 'pedal', midi: 36, dur: 1.5, vel: 0.6 },

        // m11-12: Instrumental interlude (triplets continue)
        { t: 30, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 30.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 30.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 31, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 31.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.45 },
        { t: 31.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 32, div: 'choir', midi: 74, dur: 0.33, vel: 0.55 },
        { t: 32.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.45 },
        { t: 32.67, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 30, div: 'pedal', midi: 43, dur: 3, vel: 0.6 },
        { t: 33, div: 'choir', midi: 76, dur: 0.33, vel: 0.55 },
        { t: 33.33, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 33.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 34, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 34.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 34.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 35, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 35.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 35.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 33, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 34.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.6 },

        // m13-14: Phrase 2 chorale: "Ho-ly wis-dom"
        { t: 36, div: 'great', midi: 67, dur: 3, vel: 0.7 },       // G4 "Ho-"
        { t: 36, div: 'swell', midi: 71, dur: 3, vel: 0.5 },
        { t: 36, div: 'swell', midi: 62, dur: 3, vel: 0.5 },
        { t: 36, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 36.33, div: 'choir', midi: 66, dur: 0.33, vel: 0.45 },
        { t: 36.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 37, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 37.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.45 },
        { t: 37.67, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 38, div: 'choir', midi: 60, dur: 0.33, vel: 0.5 },
        { t: 38.33, div: 'choir', midi: 62, dur: 0.33, vel: 0.45 },
        { t: 38.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 36, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 37.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },
        // "-ly wis-dom"
        { t: 39, div: 'great', midi: 69, dur: 1.5, vel: 0.7 },     // A4 "-ly"
        { t: 40.5, div: 'great', midi: 71, dur: 1.5, vel: 0.7 },   // B4 "wis-"
        { t: 39, div: 'swell', midi: 72, dur: 3, vel: 0.5 },
        { t: 39, div: 'swell', midi: 64, dur: 3, vel: 0.5 },
        { t: 39, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 39.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 39.67, div: 'choir', midi: 66, dur: 0.33, vel: 0.5 },
        { t: 40, div: 'choir', midi: 67, dur: 0.33, vel: 0.55 },
        { t: 40.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.5 },
        { t: 40.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 41, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 41.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 41.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 39, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },
        { t: 40.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },

        // m15-16: "love most bright"
        { t: 42, div: 'great', midi: 72, dur: 3, vel: 0.7 },       // C5 "love"
        { t: 42, div: 'swell', midi: 76, dur: 3, vel: 0.5 },
        { t: 42, div: 'swell', midi: 67, dur: 3, vel: 0.5 },
        { t: 42, div: 'choir', midi: 74, dur: 0.33, vel: 0.55 },
        { t: 42.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 42.67, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 43, div: 'choir', midi: 76, dur: 0.33, vel: 0.55 },
        { t: 43.33, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 43.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 44, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 44.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 44.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 42, div: 'pedal', midi: 48, dur: 1.5, vel: 0.6 },
        { t: 43.5, div: 'pedal', midi: 45, dur: 1.5, vel: 0.6 },
        // "most bright"
        { t: 45, div: 'great', midi: 71, dur: 1.5, vel: 0.7 },     // B4 "most"
        { t: 46.5, div: 'great', midi: 69, dur: 1.5, vel: 0.7 },   // A4 "bright"
        { t: 45, div: 'swell', midi: 74, dur: 3, vel: 0.5 },
        { t: 45, div: 'swell', midi: 66, dur: 3, vel: 0.5 },
        { t: 45, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 45.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 45.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 46, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 46.33, div: 'choir', midi: 66, dur: 0.33, vel: 0.45 },
        { t: 46.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 47, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 47.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.45 },
        { t: 47.67, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 45, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 46.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },

        // m17-18: Instrumental interlude 2
        { t: 48, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 48.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 48.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 49, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 49.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.45 },
        { t: 49.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 50, div: 'choir', midi: 74, dur: 0.33, vel: 0.55 },
        { t: 50.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.45 },
        { t: 50.67, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 48, div: 'pedal', midi: 43, dur: 3, vel: 0.6 },
        { t: 51, div: 'choir', midi: 76, dur: 0.33, vel: 0.55 },
        { t: 51.33, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 51.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 52, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 52.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 52.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 53, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 53.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 53.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 51, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 52.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.6 },

        // m19-20: Phrase 3 "Drawn by Thee, our"
        { t: 54, div: 'great', midi: 71, dur: 3, vel: 0.7 },       // B4 "Drawn"
        { t: 54, div: 'swell', midi: 74, dur: 3, vel: 0.5 },
        { t: 54, div: 'swell', midi: 67, dur: 3, vel: 0.5 },
        { t: 54, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 54.33, div: 'choir', midi: 66, dur: 0.33, vel: 0.45 },
        { t: 54.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 55, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 55.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.45 },
        { t: 55.67, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 56, div: 'choir', midi: 60, dur: 0.33, vel: 0.5 },
        { t: 56.33, div: 'choir', midi: 62, dur: 0.33, vel: 0.45 },
        { t: 56.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 54, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 55.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },
        // "by Thee, our"
        { t: 57, div: 'great', midi: 69, dur: 1.5, vel: 0.7 },     // A4 "by"
        { t: 58.5, div: 'great', midi: 67, dur: 1.5, vel: 0.7 },   // G4 "Thee"
        { t: 57, div: 'swell', midi: 72, dur: 3, vel: 0.5 },
        { t: 57, div: 'swell', midi: 64, dur: 3, vel: 0.5 },
        { t: 57, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 57.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 57.67, div: 'choir', midi: 66, dur: 0.33, vel: 0.5 },
        { t: 58, div: 'choir', midi: 67, dur: 0.33, vel: 0.55 },
        { t: 58.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.5 },
        { t: 58.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 59, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 59.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 59.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 57, div: 'pedal', midi: 45, dur: 1.5, vel: 0.6 },
        { t: 58.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },

        // m21-22: "souls a-spi-ring"
        { t: 60, div: 'great', midi: 69, dur: 1.5, vel: 0.7 },     // A4 "souls"
        { t: 61.5, div: 'great', midi: 71, dur: 1.5, vel: 0.7 },   // B4 "a-"
        { t: 60, div: 'swell', midi: 72, dur: 3, vel: 0.5 },
        { t: 60, div: 'swell', midi: 66, dur: 3, vel: 0.5 },
        { t: 60, div: 'choir', midi: 74, dur: 0.33, vel: 0.55 },
        { t: 60.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 60.67, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 61, div: 'choir', midi: 76, dur: 0.33, vel: 0.55 },
        { t: 61.33, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 61.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 62, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 62.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 62.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 60, div: 'pedal', midi: 45, dur: 1.5, vel: 0.6 },
        { t: 61.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        // "-spi-ring"
        { t: 63, div: 'great', midi: 72, dur: 1.5, vel: 0.7 },     // C5 "-spi-"
        { t: 64.5, div: 'great', midi: 71, dur: 1.5, vel: 0.7 },   // B4 "-ring"
        { t: 63, div: 'swell', midi: 76, dur: 3, vel: 0.5 },
        { t: 63, div: 'swell', midi: 67, dur: 3, vel: 0.5 },
        { t: 63, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 63.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 63.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 64, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 64.33, div: 'choir', midi: 66, dur: 0.33, vel: 0.45 },
        { t: 64.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 65, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 65.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.45 },
        { t: 65.67, div: 'choir', midi: 66, dur: 0.33, vel: 0.5 },
        { t: 63, div: 'pedal', midi: 48, dur: 1.5, vel: 0.6 },
        { t: 64.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },

        // m23-24: Instrumental interlude 3 (connects to next phrase)
        { t: 66, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 66.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 66.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 67, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 67.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.45 },
        { t: 67.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 68, div: 'choir', midi: 74, dur: 0.33, vel: 0.55 },
        { t: 68.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.45 },
        { t: 68.67, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 66, div: 'pedal', midi: 38, dur: 3, vel: 0.6 },
        { t: 69, div: 'choir', midi: 76, dur: 0.33, vel: 0.55 },
        { t: 69.33, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 69.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 70, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 70.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 70.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 71, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 71.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 71.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 69, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 70.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.6 },

        // m25-26: Phrase 4 "Soar to un-cre-"
        { t: 72, div: 'great', midi: 67, dur: 3, vel: 0.7 },       // G4 "Soar"
        { t: 72, div: 'swell', midi: 71, dur: 3, vel: 0.5 },
        { t: 72, div: 'swell', midi: 62, dur: 3, vel: 0.5 },
        { t: 72, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 72.33, div: 'choir', midi: 66, dur: 0.33, vel: 0.45 },
        { t: 72.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 73, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 73.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.45 },
        { t: 73.67, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 74, div: 'choir', midi: 60, dur: 0.33, vel: 0.5 },
        { t: 74.33, div: 'choir', midi: 62, dur: 0.33, vel: 0.45 },
        { t: 74.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 72, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 73.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },
        // "to un-cre-"
        { t: 75, div: 'great', midi: 69, dur: 1.5, vel: 0.7 },     // A4
        { t: 76.5, div: 'great', midi: 71, dur: 1.5, vel: 0.7 },   // B4
        { t: 75, div: 'swell', midi: 72, dur: 3, vel: 0.5 },
        { t: 75, div: 'swell', midi: 64, dur: 3, vel: 0.5 },
        { t: 75, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 75.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 75.67, div: 'choir', midi: 66, dur: 0.33, vel: 0.5 },
        { t: 76, div: 'choir', midi: 67, dur: 0.33, vel: 0.55 },
        { t: 76.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.5 },
        { t: 76.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 77, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 77.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 77.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 75, div: 'pedal', midi: 45, dur: 1.5, vel: 0.6 },
        { t: 76.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },

        // m27-28: "-a-ted light"
        { t: 78, div: 'great', midi: 72, dur: 3, vel: 0.7 },       // C5
        { t: 78, div: 'swell', midi: 76, dur: 3, vel: 0.5 },
        { t: 78, div: 'swell', midi: 69, dur: 3, vel: 0.5 },
        { t: 78, div: 'choir', midi: 74, dur: 0.33, vel: 0.55 },
        { t: 78.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 78.67, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 79, div: 'choir', midi: 76, dur: 0.33, vel: 0.55 },
        { t: 79.33, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 79.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 80, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 80.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 80.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 78, div: 'pedal', midi: 48, dur: 1.5, vel: 0.6 },
        { t: 79.5, div: 'pedal', midi: 45, dur: 1.5, vel: 0.6 },
        // "-ted light" cadence
        { t: 81, div: 'great', midi: 71, dur: 1.5, vel: 0.7 },     // B4
        { t: 82.5, div: 'great', midi: 67, dur: 1.5, vel: 0.7 },   // G4 cadence
        { t: 81, div: 'swell', midi: 74, dur: 3, vel: 0.5 },
        { t: 81, div: 'swell', midi: 62, dur: 3, vel: 0.5 },
        { t: 81, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 81.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 81.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 82, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 82.33, div: 'choir', midi: 66, dur: 0.33, vel: 0.45 },
        { t: 82.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 83, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 83.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.45 },
        { t: 83.67, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 81, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },
        { t: 82.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },

        // ==== STANZA 2 (repeat with variation) ====
        // m29-30: Instrumental transition
        { t: 84, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 84.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 84.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 85, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 85.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.45 },
        { t: 85.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 86, div: 'choir', midi: 74, dur: 0.33, vel: 0.55 },
        { t: 86.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.45 },
        { t: 86.67, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 84, div: 'pedal', midi: 43, dur: 3, vel: 0.6 },
        { t: 87, div: 'choir', midi: 76, dur: 0.33, vel: 0.55 },
        { t: 87.33, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 87.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 88, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 88.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 88.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 89, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 89.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 89.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 87, div: 'pedal', midi: 40, dur: 1.5, vel: 0.6 },
        { t: 88.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },

        // m31-32: Stanza 2 Phrase 1 "Through the way where"
        { t: 90, div: 'great', midi: 67, dur: 3, vel: 0.7 },
        { t: 90, div: 'swell', midi: 71, dur: 3, vel: 0.55 },
        { t: 90, div: 'swell', midi: 62, dur: 3, vel: 0.55 },
        { t: 90, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 90.33, div: 'choir', midi: 66, dur: 0.33, vel: 0.45 },
        { t: 90.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 91, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 91.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.45 },
        { t: 91.67, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 92, div: 'choir', midi: 60, dur: 0.33, vel: 0.5 },
        { t: 92.33, div: 'choir', midi: 62, dur: 0.33, vel: 0.45 },
        { t: 92.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 90, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 91.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },
        // "where hope is"
        { t: 93, div: 'great', midi: 69, dur: 3, vel: 0.7 },
        { t: 93, div: 'swell', midi: 72, dur: 3, vel: 0.55 },
        { t: 93, div: 'swell', midi: 64, dur: 3, vel: 0.55 },
        { t: 93, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 93.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 93.67, div: 'choir', midi: 66, dur: 0.33, vel: 0.5 },
        { t: 94, div: 'choir', midi: 67, dur: 0.33, vel: 0.55 },
        { t: 94.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.5 },
        { t: 94.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 95, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 95.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 95.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 93, div: 'pedal', midi: 45, dur: 1.5, vel: 0.6 },
        { t: 94.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },

        // m33-34: "gui-ding" + more triplets
        { t: 96, div: 'great', midi: 71, dur: 3, vel: 0.7 },
        { t: 96, div: 'swell', midi: 74, dur: 3, vel: 0.55 },
        { t: 96, div: 'swell', midi: 67, dur: 3, vel: 0.55 },
        { t: 96, div: 'choir', midi: 74, dur: 0.33, vel: 0.55 },
        { t: 96.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 96.67, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 97, div: 'choir', midi: 76, dur: 0.33, vel: 0.55 },
        { t: 97.33, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 97.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 98, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 98.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 98.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 96, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 97.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },
        // "-ding" held
        { t: 99, div: 'great', midi: 74, dur: 1.5, vel: 0.7 },
        { t: 100.5, div: 'great', midi: 72, dur: 1.5, vel: 0.7 },
        { t: 99, div: 'swell', midi: 67, dur: 3, vel: 0.55 },
        { t: 99, div: 'swell', midi: 62, dur: 3, vel: 0.55 },
        { t: 99, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 99.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 99.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 100, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 100.33, div: 'choir', midi: 66, dur: 0.33, vel: 0.45 },
        { t: 100.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 101, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 101.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.45 },
        { t: 101.67, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 99, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 100.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.6 },

        // m35-36: Phrase 2 stanza 2: "Hark, what peace-ful"
        { t: 102, div: 'great', midi: 71, dur: 3, vel: 0.7 },
        { t: 102, div: 'swell', midi: 74, dur: 3, vel: 0.55 },
        { t: 102, div: 'swell', midi: 67, dur: 3, vel: 0.55 },
        { t: 102, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 102.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 102.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 103, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 103.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.45 },
        { t: 103.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 104, div: 'choir', midi: 74, dur: 0.33, vel: 0.55 },
        { t: 104.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.45 },
        { t: 104.67, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 102, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 103.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },
        // "peace-ful mu-sic"
        { t: 105, div: 'great', midi: 69, dur: 1.5, vel: 0.7 },
        { t: 106.5, div: 'great', midi: 67, dur: 1.5, vel: 0.7 },
        { t: 105, div: 'swell', midi: 72, dur: 3, vel: 0.55 },
        { t: 105, div: 'swell', midi: 64, dur: 3, vel: 0.55 },
        { t: 105, div: 'choir', midi: 76, dur: 0.33, vel: 0.55 },
        { t: 105.33, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 105.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 106, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 106.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 106.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 107, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 107.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 107.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 105, div: 'pedal', midi: 45, dur: 1.5, vel: 0.6 },
        { t: 106.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },

        // m37-38: Instrumental interlude (stanza 2)
        { t: 108, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 108.33, div: 'choir', midi: 66, dur: 0.33, vel: 0.45 },
        { t: 108.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 109, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 109.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.45 },
        { t: 109.67, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 110, div: 'choir', midi: 60, dur: 0.33, vel: 0.5 },
        { t: 110.33, div: 'choir', midi: 62, dur: 0.33, vel: 0.45 },
        { t: 110.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 108, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },
        { t: 109.5, div: 'pedal', midi: 36, dur: 1.5, vel: 0.6 },
        { t: 111, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 111.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 111.67, div: 'choir', midi: 66, dur: 0.33, vel: 0.5 },
        { t: 112, div: 'choir', midi: 67, dur: 0.33, vel: 0.55 },
        { t: 112.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.5 },
        { t: 112.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 113, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 113.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 113.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 111, div: 'pedal', midi: 38, dur: 3, vel: 0.6 },

        // m39-40: Phrase 3 stanza 2 "Where the flock in"
        { t: 114, div: 'great', midi: 69, dur: 1.5, vel: 0.7 },
        { t: 115.5, div: 'great', midi: 71, dur: 1.5, vel: 0.7 },
        { t: 114, div: 'swell', midi: 72, dur: 3, vel: 0.55 },
        { t: 114, div: 'swell', midi: 66, dur: 3, vel: 0.55 },
        { t: 114, div: 'choir', midi: 74, dur: 0.33, vel: 0.55 },
        { t: 114.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 114.67, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 115, div: 'choir', midi: 76, dur: 0.33, vel: 0.55 },
        { t: 115.33, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 115.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 116, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 116.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 116.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 114, div: 'pedal', midi: 45, dur: 1.5, vel: 0.6 },
        { t: 115.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        // "Thee con-fi-ding"
        { t: 117, div: 'great', midi: 72, dur: 1.5, vel: 0.7 },
        { t: 118.5, div: 'great', midi: 71, dur: 1.5, vel: 0.7 },
        { t: 117, div: 'swell', midi: 76, dur: 3, vel: 0.55 },
        { t: 117, div: 'swell', midi: 67, dur: 3, vel: 0.55 },
        { t: 117, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 117.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 117.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 118, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 118.33, div: 'choir', midi: 66, dur: 0.33, vel: 0.45 },
        { t: 118.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 119, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 119.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.45 },
        { t: 119.67, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 117, div: 'pedal', midi: 48, dur: 1.5, vel: 0.6 },
        { t: 118.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },

        // m41-42: Instrumental before final phrase
        { t: 120, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 120.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 120.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 121, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 121.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.45 },
        { t: 121.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 122, div: 'choir', midi: 74, dur: 0.33, vel: 0.55 },
        { t: 122.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.45 },
        { t: 122.67, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 120, div: 'pedal', midi: 43, dur: 3, vel: 0.6 },
        { t: 123, div: 'choir', midi: 76, dur: 0.33, vel: 0.55 },
        { t: 123.33, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 123.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 124, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 124.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 124.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 125, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 125.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 125.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 123, div: 'pedal', midi: 40, dur: 1.5, vel: 0.6 },
        { t: 124.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },

        // m43-44: Final phrase "Drink of joy from"
        { t: 126, div: 'great', midi: 67, dur: 3, vel: 0.7 },
        { t: 126, div: 'swell', midi: 71, dur: 3, vel: 0.55 },
        { t: 126, div: 'swell', midi: 62, dur: 3, vel: 0.55 },
        { t: 126, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 126.33, div: 'choir', midi: 66, dur: 0.33, vel: 0.45 },
        { t: 126.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 127, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 127.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.45 },
        { t: 127.67, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 128, div: 'choir', midi: 60, dur: 0.33, vel: 0.5 },
        { t: 128.33, div: 'choir', midi: 62, dur: 0.33, vel: 0.45 },
        { t: 128.67, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 126, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },
        { t: 127.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },
        // "from death-less"
        { t: 129, div: 'great', midi: 69, dur: 1.5, vel: 0.7 },
        { t: 130.5, div: 'great', midi: 71, dur: 1.5, vel: 0.7 },
        { t: 129, div: 'swell', midi: 72, dur: 3, vel: 0.55 },
        { t: 129, div: 'swell', midi: 64, dur: 3, vel: 0.55 },
        { t: 129, div: 'choir', midi: 62, dur: 0.33, vel: 0.5 },
        { t: 129.33, div: 'choir', midi: 64, dur: 0.33, vel: 0.5 },
        { t: 129.67, div: 'choir', midi: 66, dur: 0.33, vel: 0.5 },
        { t: 130, div: 'choir', midi: 67, dur: 0.33, vel: 0.55 },
        { t: 130.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.5 },
        { t: 130.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 131, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 131.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 131.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 129, div: 'pedal', midi: 45, dur: 1.5, vel: 0.6 },
        { t: 130.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.6 },

        // m45-46: "springs" + final cadence approach
        { t: 132, div: 'great', midi: 72, dur: 3, vel: 0.7 },
        { t: 132, div: 'swell', midi: 76, dur: 3, vel: 0.55 },
        { t: 132, div: 'swell', midi: 69, dur: 3, vel: 0.55 },
        { t: 132, div: 'choir', midi: 74, dur: 0.33, vel: 0.55 },
        { t: 132.33, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 132.67, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 133, div: 'choir', midi: 76, dur: 0.33, vel: 0.55 },
        { t: 133.33, div: 'choir', midi: 74, dur: 0.33, vel: 0.5 },
        { t: 133.67, div: 'choir', midi: 72, dur: 0.33, vel: 0.5 },
        { t: 134, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 134.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 134.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 132, div: 'pedal', midi: 48, dur: 1.5, vel: 0.6 },
        { t: 133.5, div: 'pedal', midi: 45, dur: 1.5, vel: 0.6 },
        // final cadence
        { t: 135, div: 'great', midi: 71, dur: 1.5, vel: 0.7 },
        { t: 136.5, div: 'great', midi: 67, dur: 4.5, vel: 0.75 },
        { t: 135, div: 'swell', midi: 74, dur: 1.5, vel: 0.55 },
        { t: 136.5, div: 'swell', midi: 71, dur: 4.5, vel: 0.55 },
        { t: 136.5, div: 'swell', midi: 62, dur: 4.5, vel: 0.55 },
        { t: 135, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        { t: 135.33, div: 'choir', midi: 69, dur: 0.33, vel: 0.45 },
        { t: 135.67, div: 'choir', midi: 71, dur: 0.33, vel: 0.5 },
        { t: 136, div: 'choir', midi: 66, dur: 0.33, vel: 0.45 },
        { t: 136.33, div: 'choir', midi: 67, dur: 0.33, vel: 0.5 },
        // Final chord - ritardando
        { t: 136.67, div: 'choir', midi: 71, dur: 2, vel: 0.5 },
        { t: 135, div: 'pedal', midi: 38, dur: 1.5, vel: 0.6 },
        { t: 136.5, div: 'pedal', midi: 43, dur: 4.5, vel: 0.65 },
    ]
};

// ============================================================
// PIECE 2: Wachet auf, ruft uns die Stimme, BWV 140
// Schübler Chorale - Chorale melody in tenor, counter-melody in soprano
// Key: Eb major, Tempo: 66
// ============================================================

const PIECE_WACHET_AUF = {
    title: "Wachet auf, ruft uns die Stimme",
    composer: "J.S. Bach",
    catalog: "BWV 140",
    key: "Eb major",
    tempo: 66,
    tempoChanges: [
        { t: 0, tempo: 66, label: 'Andante con moto' },
        { t: 128, tempo: 60, label: 'rit.' },
        { t: 132, tempo: 66, label: 'a tempo' },
        { t: 260, tempo: 58, label: 'rit. molto' }
    ],
    registration: {
        great: ['gt-principal8', 'gt-bourdon8', 'gt-octave4'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voxceleste8', 'sw-tremulant'],
        choir: ['ch-dulciana8', 'ch-rohrflute4'],
        pedal: ['pd-subbass16', 'pd-octave8']
    },
    events: [
        // Eb major: Eb=63, F=65, G=67, Ab=68, Bb=70, C=72, D=74
        // Structure: Tenor chorale on great, flowing soprano on swell, walking bass on pedal
        // Inner voice on choir

        // ---- Phrase 1: "Wachet auf" ----
        // m1: Soprano counter-melody begins, bass walks
        { t: 0, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },     // Eb5
        { t: 0.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },   // D5
        { t: 0.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.5 },  // Eb5
        { t: 1, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },     // F5
        { t: 1.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },    // Eb5
        { t: 2, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },      // D5
        { t: 2.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },    // C5
        { t: 3, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },      // Bb4
        { t: 3.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },   // C5
        // Bass walking
        { t: 0, div: 'pedal', midi: 51, dur: 1, vel: 0.6 },        // Eb3
        { t: 1, div: 'pedal', midi: 50, dur: 1, vel: 0.55 },       // D3
        { t: 2, div: 'pedal', midi: 48, dur: 1, vel: 0.55 },       // C3
        { t: 3, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },        // Bb2
        // Choir inner voice
        { t: 0, div: 'choir', midi: 67, dur: 2, vel: 0.4 },        // G4
        { t: 2, div: 'choir', midi: 65, dur: 2, vel: 0.4 },        // F4

        // m2: Tenor chorale enters: Bb-Bb-Bb (repeated notes)
        { t: 4, div: 'great', midi: 58, dur: 1, vel: 0.65 },       // Bb3 "Wa-"
        { t: 5, div: 'great', midi: 58, dur: 1, vel: 0.65 },       // Bb3 "-chet"
        { t: 6, div: 'great', midi: 58, dur: 2, vel: 0.65 },       // Bb3 "auf"
        // Soprano continues
        { t: 4, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },     // D5
        { t: 4.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },   // C5
        { t: 4.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },  // D5
        { t: 5, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },     // Eb5
        { t: 5.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },    // D5
        { t: 6, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },      // C5
        { t: 6.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },    // Bb4
        { t: 7, div: 'swell', midi: 68, dur: 0.5, vel: 0.5 },      // Ab4
        { t: 7.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.55 },   // Bb4
        // Bass
        { t: 4, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },        // Ab2
        { t: 5, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },       // Bb2
        { t: 6, div: 'pedal', midi: 48, dur: 1, vel: 0.55 },       // C3
        { t: 7, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },        // Bb2
        { t: 4, div: 'choir', midi: 63, dur: 2, vel: 0.4 },
        { t: 6, div: 'choir', midi: 65, dur: 2, vel: 0.4 },

        // m3: Tenor: Bb-C-Bb-Ab-G (scale down)
        { t: 8, div: 'great', midi: 58, dur: 1, vel: 0.65 },       // Bb3
        { t: 9, div: 'great', midi: 60, dur: 1, vel: 0.65 },       // C4
        { t: 10, div: 'great', midi: 58, dur: 0.5, vel: 0.65 },    // Bb3
        { t: 10.5, div: 'great', midi: 56, dur: 0.5, vel: 0.65 },  // Ab3
        { t: 11, div: 'great', midi: 55, dur: 1, vel: 0.65 },      // G3
        // Soprano ornamented
        { t: 8, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },     // C5
        { t: 8.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },   // D5
        { t: 8.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.5 },  // Eb5
        { t: 9, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },     // F5
        { t: 9.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },    // Eb5
        { t: 10, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },     // D5
        { t: 10.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },   // C5
        { t: 11, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },     // Bb4
        { t: 11.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },  // C5
        // Bass
        { t: 8, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },        // Ab2
        { t: 9, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },       // G2
        { t: 10, div: 'pedal', midi: 44, dur: 1, vel: 0.55 },      // Ab2
        { t: 11, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },       // Bb2
        { t: 8, div: 'choir', midi: 63, dur: 2, vel: 0.4 },
        { t: 10, div: 'choir', midi: 60, dur: 2, vel: 0.4 },

        // m4: Tenor: Ab-Bb-Ab-G-F
        { t: 12, div: 'great', midi: 56, dur: 1, vel: 0.65 },      // Ab3
        { t: 13, div: 'great', midi: 58, dur: 0.5, vel: 0.65 },    // Bb3
        { t: 13.5, div: 'great', midi: 56, dur: 0.5, vel: 0.65 },  // Ab3
        { t: 14, div: 'great', midi: 55, dur: 1, vel: 0.65 },      // G3
        { t: 15, div: 'great', midi: 53, dur: 1, vel: 0.65 },      // F3
        // Soprano
        { t: 12, div: 'swell', midi: 70, dur: 0.5, vel: 0.55 },
        { t: 12.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 12.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 13, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 13.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 14, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 14.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 15, div: 'swell', midi: 68, dur: 0.5, vel: 0.5 },
        { t: 15.5, div: 'swell', midi: 67, dur: 0.5, vel: 0.5 },
        { t: 12, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 13, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },
        { t: 14, div: 'pedal', midi: 48, dur: 1, vel: 0.55 },
        { t: 15, div: 'pedal', midi: 50, dur: 1, vel: 0.6 },
        { t: 12, div: 'choir', midi: 60, dur: 2, vel: 0.4 },
        { t: 14, div: 'choir', midi: 63, dur: 2, vel: 0.4 },

        // m5-6: Interlude (no chorale, just soprano + bass)
        { t: 16, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 16.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 16.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.5 },
        { t: 17, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 17.5, div: 'swell', midi: 79, dur: 0.5, vel: 0.55 },
        { t: 18, div: 'swell', midi: 77, dur: 0.5, vel: 0.5 },
        { t: 18.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 19, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 19.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 16, div: 'pedal', midi: 51, dur: 1, vel: 0.6 },
        { t: 17, div: 'pedal', midi: 50, dur: 1, vel: 0.55 },
        { t: 18, div: 'pedal', midi: 48, dur: 1, vel: 0.55 },
        { t: 19, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 16, div: 'choir', midi: 67, dur: 2, vel: 0.4 },
        { t: 18, div: 'choir', midi: 65, dur: 2, vel: 0.4 },
        // m6
        { t: 20, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 20.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 20.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 21, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 21.5, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 22, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 22.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 23, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 23.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 20, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 21, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 22, div: 'pedal', midi: 41, dur: 1, vel: 0.55 },
        { t: 23, div: 'pedal', midi: 39, dur: 1, vel: 0.6 },
        { t: 20, div: 'choir', midi: 63, dur: 2, vel: 0.4 },
        { t: 22, div: 'choir', midi: 60, dur: 2, vel: 0.4 },

        // ---- Phrase 2: "ruft uns die Stimme" ----
        // m7: Tenor: Eb-Eb-Eb-F-G
        { t: 24, div: 'great', midi: 63, dur: 1, vel: 0.65 },      // Eb4
        { t: 25, div: 'great', midi: 63, dur: 1, vel: 0.65 },      // Eb4
        { t: 26, div: 'great', midi: 63, dur: 0.5, vel: 0.65 },    // Eb4
        { t: 26.5, div: 'great', midi: 65, dur: 0.5, vel: 0.65 },  // F4
        { t: 27, div: 'great', midi: 67, dur: 1, vel: 0.65 },      // G4
        { t: 24, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 24.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 24.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.5 },
        { t: 25, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 25.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 26, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 26.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 27, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 27.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 24, div: 'pedal', midi: 51, dur: 1, vel: 0.6 },
        { t: 25, div: 'pedal', midi: 48, dur: 1, vel: 0.55 },
        { t: 26, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },
        { t: 27, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 24, div: 'choir', midi: 67, dur: 2, vel: 0.4 },
        { t: 26, div: 'choir', midi: 63, dur: 2, vel: 0.4 },

        // m8: Tenor: Ab-G-F-Eb
        { t: 28, div: 'great', midi: 68, dur: 1, vel: 0.65 },      // Ab4
        { t: 29, div: 'great', midi: 67, dur: 1, vel: 0.65 },      // G4
        { t: 30, div: 'great', midi: 65, dur: 1, vel: 0.65 },      // F4
        { t: 31, div: 'great', midi: 63, dur: 1, vel: 0.65 },      // Eb4
        { t: 28, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 28.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 28.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 29, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 29.5, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 30, div: 'swell', midi: 79, dur: 0.5, vel: 0.55 },
        { t: 30.5, div: 'swell', midi: 77, dur: 0.5, vel: 0.5 },
        { t: 31, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 31.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 28, div: 'pedal', midi: 43, dur: 1, vel: 0.6 },
        { t: 29, div: 'pedal', midi: 44, dur: 1, vel: 0.55 },
        { t: 30, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },
        { t: 31, div: 'pedal', midi: 48, dur: 1, vel: 0.6 },
        { t: 28, div: 'choir', midi: 60, dur: 2, vel: 0.4 },
        { t: 30, div: 'choir', midi: 63, dur: 2, vel: 0.4 },

        // m9-10: Interlude
        { t: 32, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 32.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 32.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.5 },
        { t: 33, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 33.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 34, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 34.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 35, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 35.5, div: 'swell', midi: 68, dur: 0.5, vel: 0.5 },
        { t: 32, div: 'pedal', midi: 51, dur: 1, vel: 0.6 },
        { t: 33, div: 'pedal', midi: 50, dur: 1, vel: 0.55 },
        { t: 34, div: 'pedal', midi: 48, dur: 1, vel: 0.55 },
        { t: 35, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 32, div: 'choir', midi: 67, dur: 2, vel: 0.4 },
        { t: 34, div: 'choir', midi: 65, dur: 2, vel: 0.4 },
        // m10
        { t: 36, div: 'swell', midi: 70, dur: 0.5, vel: 0.55 },
        { t: 36.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 36.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 37, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 37.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 38, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 38.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 39, div: 'swell', midi: 68, dur: 0.5, vel: 0.5 },
        { t: 39.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 36, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 37, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },
        { t: 38, div: 'pedal', midi: 48, dur: 1, vel: 0.55 },
        { t: 39, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 36, div: 'choir', midi: 63, dur: 2, vel: 0.4 },
        { t: 38, div: 'choir', midi: 60, dur: 2, vel: 0.4 },

        // ---- Phrase 3: "der Wächter sehr hoch" ----
        // m11: Tenor: Bb-Bb-C-D-Eb
        { t: 40, div: 'great', midi: 58, dur: 1, vel: 0.65 },
        { t: 41, div: 'great', midi: 58, dur: 0.5, vel: 0.65 },
        { t: 41.5, div: 'great', midi: 60, dur: 0.5, vel: 0.65 },
        { t: 42, div: 'great', midi: 62, dur: 1, vel: 0.65 },
        { t: 43, div: 'great', midi: 63, dur: 1, vel: 0.65 },
        { t: 40, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 40.5, div: 'swell', midi: 70, dur: 0.25, vel: 0.5 },
        { t: 40.75, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 41, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 41.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 42, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 42.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 43, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 43.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 40, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 41, div: 'pedal', midi: 44, dur: 1, vel: 0.55 },
        { t: 42, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 43, div: 'pedal', midi: 41, dur: 1, vel: 0.6 },
        { t: 40, div: 'choir', midi: 65, dur: 2, vel: 0.4 },
        { t: 42, div: 'choir', midi: 67, dur: 2, vel: 0.4 },

        // m12: Tenor: F-Eb-D-Eb
        { t: 44, div: 'great', midi: 65, dur: 1, vel: 0.65 },
        { t: 45, div: 'great', midi: 63, dur: 0.5, vel: 0.65 },
        { t: 45.5, div: 'great', midi: 62, dur: 0.5, vel: 0.65 },
        { t: 46, div: 'great', midi: 63, dur: 2, vel: 0.65 },
        { t: 44, div: 'swell', midi: 70, dur: 0.5, vel: 0.55 },
        { t: 44.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 44.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 45, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 45.5, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 46, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 46.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 47, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 47.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 44, div: 'pedal', midi: 39, dur: 1, vel: 0.6 },
        { t: 45, div: 'pedal', midi: 41, dur: 1, vel: 0.55 },
        { t: 46, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 47, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 44, div: 'choir', midi: 63, dur: 2, vel: 0.4 },
        { t: 46, div: 'choir', midi: 67, dur: 2, vel: 0.4 },

        // m13-14: Interlude
        { t: 48, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 48.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 48.75, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 49, div: 'swell', midi: 70, dur: 0.5, vel: 0.55 },
        { t: 49.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 50, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 50.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 51, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 51.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 48, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 49, div: 'pedal', midi: 48, dur: 1, vel: 0.55 },
        { t: 50, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },
        { t: 51, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 48, div: 'choir', midi: 63, dur: 2, vel: 0.4 },
        { t: 50, div: 'choir', midi: 65, dur: 2, vel: 0.4 },
        // m14
        { t: 52, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 52.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 52.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.5 },
        { t: 53, div: 'swell', midi: 68, dur: 0.5, vel: 0.5 },
        { t: 53.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 54, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 54.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 55, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 55.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 52, div: 'pedal', midi: 43, dur: 1, vel: 0.6 },
        { t: 53, div: 'pedal', midi: 44, dur: 1, vel: 0.55 },
        { t: 54, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },
        { t: 55, div: 'pedal', midi: 48, dur: 1, vel: 0.6 },
        { t: 52, div: 'choir', midi: 60, dur: 2, vel: 0.4 },
        { t: 54, div: 'choir', midi: 63, dur: 2, vel: 0.4 },

        // ---- Phrase 4: "auf der Zinne" ----
        // m15: Tenor: Bb-Bb-Bb-C-D
        { t: 56, div: 'great', midi: 58, dur: 1, vel: 0.65 },
        { t: 57, div: 'great', midi: 58, dur: 1, vel: 0.65 },
        { t: 58, div: 'great', midi: 58, dur: 0.5, vel: 0.65 },
        { t: 58.5, div: 'great', midi: 60, dur: 0.5, vel: 0.65 },
        { t: 59, div: 'great', midi: 62, dur: 1, vel: 0.65 },
        { t: 56, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 56.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 56.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.5 },
        { t: 57, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 57.5, div: 'swell', midi: 79, dur: 0.5, vel: 0.55 },
        { t: 58, div: 'swell', midi: 77, dur: 0.5, vel: 0.5 },
        { t: 58.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 59, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 59.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 56, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 57, div: 'pedal', midi: 44, dur: 1, vel: 0.55 },
        { t: 58, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 59, div: 'pedal', midi: 41, dur: 1, vel: 0.6 },
        { t: 56, div: 'choir', midi: 65, dur: 2, vel: 0.4 },
        { t: 58, div: 'choir', midi: 63, dur: 2, vel: 0.4 },

        // m16: Tenor: Eb-D-C-Bb (descent to cadence)
        { t: 60, div: 'great', midi: 63, dur: 1, vel: 0.65 },
        { t: 61, div: 'great', midi: 62, dur: 0.5, vel: 0.65 },
        { t: 61.5, div: 'great', midi: 60, dur: 0.5, vel: 0.65 },
        { t: 62, div: 'great', midi: 58, dur: 2, vel: 0.65 },
        { t: 60, div: 'swell', midi: 70, dur: 0.5, vel: 0.55 },
        { t: 60.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 60.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 61, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 61.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 62, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 62.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 63, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 63.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 60, div: 'pedal', midi: 39, dur: 1, vel: 0.6 },
        { t: 61, div: 'pedal', midi: 41, dur: 1, vel: 0.55 },
        { t: 62, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 63, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 60, div: 'choir', midi: 60, dur: 2, vel: 0.4 },
        { t: 62, div: 'choir', midi: 63, dur: 2, vel: 0.4 },

        // ---- MIDDLE SECTION (B section) ----
        // m17-18: New melodic material, modulating through relative minor
        { t: 64, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 64.5, div: 'swell', midi: 77, dur: 0.25, vel: 0.5 },
        { t: 64.75, div: 'swell', midi: 79, dur: 0.25, vel: 0.5 },
        { t: 65, div: 'swell', midi: 80, dur: 0.5, vel: 0.55 },
        { t: 65.5, div: 'swell', midi: 79, dur: 0.5, vel: 0.5 },
        { t: 66, div: 'swell', midi: 77, dur: 0.5, vel: 0.5 },
        { t: 66.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 67, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 67.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 64, div: 'pedal', midi: 48, dur: 1, vel: 0.6 },
        { t: 65, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },
        { t: 66, div: 'pedal', midi: 44, dur: 1, vel: 0.55 },
        { t: 67, div: 'pedal', midi: 43, dur: 1, vel: 0.6 },
        { t: 64, div: 'choir', midi: 67, dur: 2, vel: 0.4 },
        { t: 66, div: 'choir', midi: 65, dur: 2, vel: 0.4 },
        // m18
        { t: 68, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 68.5, div: 'swell', midi: 75, dur: 0.25, vel: 0.5 },
        { t: 68.75, div: 'swell', midi: 77, dur: 0.25, vel: 0.5 },
        { t: 69, div: 'swell', midi: 79, dur: 0.5, vel: 0.55 },
        { t: 69.5, div: 'swell', midi: 77, dur: 0.5, vel: 0.5 },
        { t: 70, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 70.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 71, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 71.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 68, div: 'pedal', midi: 41, dur: 1, vel: 0.6 },
        { t: 69, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 70, div: 'pedal', midi: 44, dur: 1, vel: 0.55 },
        { t: 71, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 68, div: 'choir', midi: 63, dur: 2, vel: 0.4 },
        { t: 70, div: 'choir', midi: 60, dur: 2, vel: 0.4 },

        // m19: Tenor phrase 5: Bb-C-D-Eb-F
        { t: 72, div: 'great', midi: 58, dur: 1, vel: 0.65 },
        { t: 73, div: 'great', midi: 60, dur: 1, vel: 0.65 },
        { t: 74, div: 'great', midi: 62, dur: 1, vel: 0.65 },
        { t: 75, div: 'great', midi: 63, dur: 0.5, vel: 0.65 },
        { t: 75.5, div: 'great', midi: 65, dur: 0.5, vel: 0.65 },
        { t: 72, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 72.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 72.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.5 },
        { t: 73, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 73.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 74, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 74.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 75, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 75.5, div: 'swell', midi: 68, dur: 0.5, vel: 0.5 },
        { t: 72, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 73, div: 'pedal', midi: 44, dur: 1, vel: 0.55 },
        { t: 74, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 75, div: 'pedal', midi: 41, dur: 1, vel: 0.6 },
        { t: 72, div: 'choir', midi: 65, dur: 2, vel: 0.4 },
        { t: 74, div: 'choir', midi: 63, dur: 2, vel: 0.4 },

        // m20: Tenor: G-F-Eb-D
        { t: 76, div: 'great', midi: 67, dur: 1, vel: 0.65 },
        { t: 77, div: 'great', midi: 65, dur: 1, vel: 0.65 },
        { t: 78, div: 'great', midi: 63, dur: 1, vel: 0.65 },
        { t: 79, div: 'great', midi: 62, dur: 1, vel: 0.65 },
        { t: 76, div: 'swell', midi: 70, dur: 0.5, vel: 0.55 },
        { t: 76.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 76.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 77, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 77.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 78, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 78.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 79, div: 'swell', midi: 68, dur: 0.5, vel: 0.5 },
        { t: 79.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 76, div: 'pedal', midi: 39, dur: 1, vel: 0.6 },
        { t: 77, div: 'pedal', midi: 41, dur: 1, vel: 0.55 },
        { t: 78, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 79, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 76, div: 'choir', midi: 60, dur: 2, vel: 0.4 },
        { t: 78, div: 'choir', midi: 63, dur: 2, vel: 0.4 },

        // m21-22: Interlude in B section
        { t: 80, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 80.5, div: 'swell', midi: 70, dur: 0.25, vel: 0.5 },
        { t: 80.75, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 81, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 81.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 82, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 82.5, div: 'swell', midi: 79, dur: 0.5, vel: 0.55 },
        { t: 83, div: 'swell', midi: 77, dur: 0.5, vel: 0.5 },
        { t: 83.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 80, div: 'pedal', midi: 48, dur: 1, vel: 0.6 },
        { t: 81, div: 'pedal', midi: 50, dur: 1, vel: 0.55 },
        { t: 82, div: 'pedal', midi: 48, dur: 1, vel: 0.55 },
        { t: 83, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 80, div: 'choir', midi: 67, dur: 2, vel: 0.4 },
        { t: 82, div: 'choir', midi: 70, dur: 2, vel: 0.4 },
        // m22
        { t: 84, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 84.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 84.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 85, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 85.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 86, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 86.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 87, div: 'swell', midi: 68, dur: 0.5, vel: 0.5 },
        { t: 87.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.55 },
        { t: 84, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 85, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },
        { t: 86, div: 'pedal', midi: 48, dur: 1, vel: 0.55 },
        { t: 87, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 84, div: 'choir', midi: 65, dur: 2, vel: 0.4 },
        { t: 86, div: 'choir', midi: 63, dur: 2, vel: 0.4 },

        // m23: Tenor phrase 6: Eb-F-G-Ab
        { t: 88, div: 'great', midi: 63, dur: 1, vel: 0.65 },
        { t: 89, div: 'great', midi: 65, dur: 1, vel: 0.65 },
        { t: 90, div: 'great', midi: 67, dur: 1, vel: 0.65 },
        { t: 91, div: 'great', midi: 68, dur: 1, vel: 0.65 },
        { t: 88, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 88.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 88.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.5 },
        { t: 89, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 89.5, div: 'swell', midi: 79, dur: 0.5, vel: 0.55 },
        { t: 90, div: 'swell', midi: 80, dur: 0.5, vel: 0.55 },
        { t: 90.5, div: 'swell', midi: 79, dur: 0.5, vel: 0.5 },
        { t: 91, div: 'swell', midi: 77, dur: 0.5, vel: 0.5 },
        { t: 91.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 88, div: 'pedal', midi: 48, dur: 1, vel: 0.6 },
        { t: 89, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },
        { t: 90, div: 'pedal', midi: 44, dur: 1, vel: 0.55 },
        { t: 91, div: 'pedal', midi: 43, dur: 1, vel: 0.6 },
        { t: 88, div: 'choir', midi: 67, dur: 2, vel: 0.4 },
        { t: 90, div: 'choir', midi: 68, dur: 2, vel: 0.4 },

        // m24: Tenor: Bb-Ab-G-F (descending)
        { t: 92, div: 'great', midi: 70, dur: 1, vel: 0.65 },
        { t: 93, div: 'great', midi: 68, dur: 0.5, vel: 0.65 },
        { t: 93.5, div: 'great', midi: 67, dur: 0.5, vel: 0.65 },
        { t: 94, div: 'great', midi: 65, dur: 2, vel: 0.65 },
        { t: 92, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 92.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 92.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 93, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 93.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 94, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 94.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 95, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 95.5, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 92, div: 'pedal', midi: 41, dur: 1, vel: 0.6 },
        { t: 93, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 94, div: 'pedal', midi: 44, dur: 1, vel: 0.55 },
        { t: 95, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 92, div: 'choir', midi: 65, dur: 2, vel: 0.4 },
        { t: 94, div: 'choir', midi: 63, dur: 2, vel: 0.4 },

        // ---- RETURN OF A (abbreviated recapitulation) ----
        // m25-26: Interlude returning to Eb
        { t: 96, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 96.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 96.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.5 },
        { t: 97, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 97.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 98, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 98.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 99, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 99.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 96, div: 'pedal', midi: 51, dur: 1, vel: 0.6 },
        { t: 97, div: 'pedal', midi: 50, dur: 1, vel: 0.55 },
        { t: 98, div: 'pedal', midi: 48, dur: 1, vel: 0.55 },
        { t: 99, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 96, div: 'choir', midi: 67, dur: 2, vel: 0.4 },
        { t: 98, div: 'choir', midi: 65, dur: 2, vel: 0.4 },
        // m26
        { t: 100, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 100.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 100.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 101, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 101.5, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 102, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 102.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 103, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 103.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 100, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 101, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 102, div: 'pedal', midi: 41, dur: 1, vel: 0.55 },
        { t: 103, div: 'pedal', midi: 39, dur: 1, vel: 0.6 },
        { t: 100, div: 'choir', midi: 63, dur: 2, vel: 0.4 },
        { t: 102, div: 'choir', midi: 60, dur: 2, vel: 0.4 },

        // m27: Return of chorale phrase 1: Bb-Bb-Bb
        { t: 104, div: 'great', midi: 58, dur: 1, vel: 0.65 },
        { t: 105, div: 'great', midi: 58, dur: 1, vel: 0.65 },
        { t: 106, div: 'great', midi: 58, dur: 2, vel: 0.65 },
        { t: 104, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 104.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 104.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.5 },
        { t: 105, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 105.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 106, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 106.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 107, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 107.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 104, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 105, div: 'pedal', midi: 44, dur: 1, vel: 0.55 },
        { t: 106, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },
        { t: 107, div: 'pedal', midi: 48, dur: 1, vel: 0.6 },
        { t: 104, div: 'choir', midi: 63, dur: 2, vel: 0.4 },
        { t: 106, div: 'choir', midi: 65, dur: 2, vel: 0.4 },

        // m28: Tenor: Bb-C-Bb-Ab-G
        { t: 108, div: 'great', midi: 58, dur: 1, vel: 0.65 },
        { t: 109, div: 'great', midi: 60, dur: 1, vel: 0.65 },
        { t: 110, div: 'great', midi: 58, dur: 0.5, vel: 0.65 },
        { t: 110.5, div: 'great', midi: 56, dur: 0.5, vel: 0.65 },
        { t: 111, div: 'great', midi: 55, dur: 1, vel: 0.65 },
        { t: 108, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 108.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 108.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 109, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 109.5, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 110, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 110.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 111, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 111.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 108, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 109, div: 'pedal', midi: 48, dur: 1, vel: 0.55 },
        { t: 110, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },
        { t: 111, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 108, div: 'choir', midi: 63, dur: 2, vel: 0.4 },
        { t: 110, div: 'choir', midi: 60, dur: 2, vel: 0.4 },

        // m29-30: Final chorale phrases
        // m29: Tenor: Eb-F-G-Ab-Bb (ascending to climax)
        { t: 112, div: 'great', midi: 63, dur: 1, vel: 0.7 },
        { t: 113, div: 'great', midi: 65, dur: 1, vel: 0.7 },
        { t: 114, div: 'great', midi: 67, dur: 0.5, vel: 0.7 },
        { t: 114.5, div: 'great', midi: 68, dur: 0.5, vel: 0.7 },
        { t: 115, div: 'great', midi: 70, dur: 1, vel: 0.7 },
        { t: 112, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 112.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 112.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.5 },
        { t: 113, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 113.5, div: 'swell', midi: 79, dur: 0.5, vel: 0.55 },
        { t: 114, div: 'swell', midi: 80, dur: 0.5, vel: 0.6 },
        { t: 114.5, div: 'swell', midi: 79, dur: 0.5, vel: 0.55 },
        { t: 115, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 115.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 112, div: 'pedal', midi: 48, dur: 1, vel: 0.6 },
        { t: 113, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 114, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 115, div: 'pedal', midi: 43, dur: 1, vel: 0.6 },
        { t: 112, div: 'choir', midi: 67, dur: 2, vel: 0.45 },
        { t: 114, div: 'choir', midi: 68, dur: 2, vel: 0.45 },

        // m30: Tenor: Ab-G-F-Eb (final descent)
        { t: 116, div: 'great', midi: 68, dur: 1, vel: 0.7 },
        { t: 117, div: 'great', midi: 67, dur: 0.5, vel: 0.7 },
        { t: 117.5, div: 'great', midi: 65, dur: 0.5, vel: 0.65 },
        { t: 118, div: 'great', midi: 63, dur: 2, vel: 0.65 },
        { t: 116, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 116.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.5 },
        { t: 116.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 117, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 117.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 118, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 118.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.55 },
        { t: 119, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 119.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 116, div: 'pedal', midi: 41, dur: 1, vel: 0.6 },
        { t: 117, div: 'pedal', midi: 43, dur: 1, vel: 0.6 },
        { t: 118, div: 'pedal', midi: 44, dur: 1, vel: 0.6 },
        { t: 119, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 116, div: 'choir', midi: 65, dur: 2, vel: 0.45 },
        { t: 118, div: 'choir', midi: 63, dur: 2, vel: 0.45 },

        // m31-32: Final interlude and cadence
        { t: 120, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 120.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.5 },
        { t: 120.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.5 },
        { t: 121, div: 'swell', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 121.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 122, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 122.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 123, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        { t: 123.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.55 },
        { t: 120, div: 'pedal', midi: 48, dur: 1, vel: 0.6 },
        { t: 121, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },
        { t: 122, div: 'pedal', midi: 44, dur: 1, vel: 0.55 },
        { t: 123, div: 'pedal', midi: 46, dur: 1, vel: 0.6 },
        { t: 120, div: 'choir', midi: 63, dur: 2, vel: 0.45 },
        { t: 122, div: 'choir', midi: 65, dur: 2, vel: 0.45 },

        // m32: Final Tenor: Bb held, ritardando
        { t: 124, div: 'great', midi: 58, dur: 4, vel: 0.7 },
        { t: 124, div: 'swell', midi: 75, dur: 0.5, vel: 0.55 },
        { t: 124.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 125, div: 'swell', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 125.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.5 },
        // Final chord: Eb major
        { t: 126, div: 'swell', midi: 75, dur: 4, vel: 0.55 },
        { t: 126, div: 'choir', midi: 67, dur: 4, vel: 0.45 },
        { t: 124, div: 'pedal', midi: 51, dur: 2, vel: 0.6 },
        { t: 126, div: 'pedal', midi: 51, dur: 4, vel: 0.65 },
    ]
};

// ============================================================
// PIECE 3: Sheep May Safely Graze, BWV 208
// Pastoral aria with two recorder parts in thirds, vocal melody, continuo
// Key: Bb major, Tempo: 66, 4/4 time, ABA form
// ============================================================

const PIECE_SHEEP_SAFELY = {
    title: "Sheep May Safely Graze",
    composer: "J.S. Bach",
    catalog: "BWV 208",
    key: "Bb major",
    tempo: 66,
    tempoChanges: [
        { t: 0, tempo: 66, label: 'Andante pastorale' },
        { t: 96, tempo: 62, label: 'poco meno mosso' },
        { t: 128, tempo: 66, label: 'Tempo I' },
        { t: 216, tempo: 60, label: 'rit.' }
    ],
    registration: {
        great: ['gt-bourdon8', 'gt-spitzflute4'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-tremulant'],
        choir: ['ch-gedeckt8', 'ch-rohrflute4', 'ch-tremulant'],
        pedal: ['pd-subbass16']
    },
    events: [
        // Bb major: Bb=58/70, C=60/72, D=62/74, Eb=63/75, F=65/77, G=67/79, A=69/81
        // Recorder 1 on choir (upper), Recorder 2 on choir (lower thirds)
        // Vocal melody on swell, Continuo on pedal, some great support

        // ==== A SECTION: Pastoral Introduction (m1-8) ====
        // m1: Two recorders in parallel thirds
        { t: 0, div: 'choir', midi: 77, dur: 1, vel: 0.5 },        // F5 rec1
        { t: 0, div: 'choir', midi: 74, dur: 1, vel: 0.45 },       // D5 rec2
        { t: 1, div: 'choir', midi: 79, dur: 0.5, vel: 0.5 },      // G5
        { t: 1, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },     // D5
        { t: 1.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.5 },    // F5
        { t: 1.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },   // D5
        { t: 2, div: 'choir', midi: 74, dur: 1, vel: 0.5 },        // D5
        { t: 2, div: 'choir', midi: 70, dur: 1, vel: 0.45 },       // Bb4
        { t: 3, div: 'choir', midi: 77, dur: 0.5, vel: 0.5 },      // F5
        { t: 3, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },     // C5
        { t: 3.5, div: 'choir', midi: 79, dur: 0.5, vel: 0.5 },    // G5
        { t: 3.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },   // D5
        { t: 0, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },       // Bb2
        { t: 2, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },       // Bb2

        // m2
        { t: 4, div: 'choir', midi: 81, dur: 1, vel: 0.55 },       // A5
        { t: 4, div: 'choir', midi: 77, dur: 1, vel: 0.45 },       // F5
        { t: 5, div: 'choir', midi: 79, dur: 0.5, vel: 0.5 },      // G5
        { t: 5, div: 'choir', midi: 75, dur: 0.5, vel: 0.45 },     // Eb5
        { t: 5.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.5 },    // F5
        { t: 5.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },   // D5
        { t: 6, div: 'choir', midi: 75, dur: 1, vel: 0.5 },        // Eb5
        { t: 6, div: 'choir', midi: 72, dur: 1, vel: 0.45 },       // C5
        { t: 7, div: 'choir', midi: 74, dur: 0.5, vel: 0.5 },      // D5
        { t: 7, div: 'choir', midi: 70, dur: 0.5, vel: 0.45 },     // Bb4
        { t: 7.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },    // C5
        { t: 7.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.45 },   // A4
        { t: 4, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },       // F3
        { t: 6, div: 'pedal', midi: 48, dur: 2, vel: 0.55 },       // C3

        // m3
        { t: 8, div: 'choir', midi: 70, dur: 1, vel: 0.5 },        // Bb4
        { t: 8, div: 'choir', midi: 67, dur: 1, vel: 0.45 },       // G4
        { t: 9, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },      // C5
        { t: 9, div: 'choir', midi: 69, dur: 0.5, vel: 0.45 },     // A4
        { t: 9.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.5 },    // D5
        { t: 9.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.45 },   // Bb4
        { t: 10, div: 'choir', midi: 77, dur: 1, vel: 0.55 },      // F5
        { t: 10, div: 'choir', midi: 72, dur: 1, vel: 0.45 },      // C5
        { t: 11, div: 'choir', midi: 75, dur: 0.5, vel: 0.5 },     // Eb5
        { t: 11, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },    // C5
        { t: 11.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.5 },   // D5
        { t: 11.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.45 },  // Bb4
        { t: 8, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },       // Bb2
        { t: 10, div: 'pedal', midi: 41, dur: 2, vel: 0.55 },      // F2

        // m4: Half cadence
        { t: 12, div: 'choir', midi: 72, dur: 1, vel: 0.5 },       // C5
        { t: 12, div: 'choir', midi: 69, dur: 1, vel: 0.45 },      // A4
        { t: 13, div: 'choir', midi: 74, dur: 0.5, vel: 0.5 },     // D5
        { t: 13, div: 'choir', midi: 70, dur: 0.5, vel: 0.45 },    // Bb4
        { t: 13.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },   // C5
        { t: 13.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.45 },  // A4
        { t: 14, div: 'choir', midi: 70, dur: 2, vel: 0.5 },       // Bb4
        { t: 14, div: 'choir', midi: 67, dur: 2, vel: 0.45 },      // G4
        { t: 12, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },      // Bb2
        { t: 14, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },      // F3

        // m5-6: Second phrase of introduction
        { t: 16, div: 'choir', midi: 77, dur: 1, vel: 0.5 },
        { t: 16, div: 'choir', midi: 74, dur: 1, vel: 0.45 },
        { t: 17, div: 'choir', midi: 79, dur: 0.5, vel: 0.5 },
        { t: 17, div: 'choir', midi: 75, dur: 0.5, vel: 0.45 },
        { t: 17.5, div: 'choir', midi: 81, dur: 0.5, vel: 0.55 },
        { t: 17.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 18, div: 'choir', midi: 79, dur: 1, vel: 0.5 },
        { t: 18, div: 'choir', midi: 75, dur: 1, vel: 0.45 },
        { t: 19, div: 'choir', midi: 77, dur: 0.5, vel: 0.5 },
        { t: 19, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 19.5, div: 'choir', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 19.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 16, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 18, div: 'pedal', midi: 51, dur: 2, vel: 0.55 },      // Eb3
        // m6
        { t: 20, div: 'choir', midi: 74, dur: 1, vel: 0.5 },
        { t: 20, div: 'choir', midi: 70, dur: 1, vel: 0.45 },
        { t: 21, div: 'choir', midi: 77, dur: 0.5, vel: 0.5 },
        { t: 21, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 21.5, div: 'choir', midi: 79, dur: 0.5, vel: 0.55 },
        { t: 21.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 22, div: 'choir', midi: 77, dur: 1, vel: 0.5 },
        { t: 22, div: 'choir', midi: 74, dur: 1, vel: 0.45 },
        { t: 23, div: 'choir', midi: 75, dur: 0.5, vel: 0.5 },
        { t: 23, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 23.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 23.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.45 },
        { t: 20, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 22, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },

        // m7-8: Cadence of introduction, recorders settle
        { t: 24, div: 'choir', midi: 72, dur: 1, vel: 0.5 },
        { t: 24, div: 'choir', midi: 69, dur: 1, vel: 0.45 },
        { t: 25, div: 'choir', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 25, div: 'choir', midi: 70, dur: 0.5, vel: 0.45 },
        { t: 25.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.55 },
        { t: 25.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 26, div: 'choir', midi: 75, dur: 1, vel: 0.5 },
        { t: 26, div: 'choir', midi: 72, dur: 1, vel: 0.45 },
        { t: 27, div: 'choir', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 27, div: 'choir', midi: 70, dur: 0.5, vel: 0.45 },
        { t: 27.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 27.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.45 },
        { t: 24, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 26, div: 'pedal', midi: 48, dur: 2, vel: 0.55 },
        // m8: cadential
        { t: 28, div: 'choir', midi: 70, dur: 2, vel: 0.5 },
        { t: 28, div: 'choir', midi: 67, dur: 2, vel: 0.45 },
        { t: 30, div: 'choir', midi: 70, dur: 2, vel: 0.45 },
        { t: 30, div: 'choir', midi: 65, dur: 2, vel: 0.4 },
        { t: 28, div: 'pedal', midi: 46, dur: 4, vel: 0.55 },

        // ==== FIRST VOCAL SECTION (m9-16) ====
        // m9: "Sheep may safe-ly graze"
        { t: 32, div: 'swell', midi: 70, dur: 2, vel: 0.6 },       // Bb4 "Sheep"
        { t: 34, div: 'swell', midi: 74, dur: 1, vel: 0.6 },       // D5 "may"
        { t: 35, div: 'swell', midi: 72, dur: 1, vel: 0.6 },       // C5 "safe-"
        // Recorders accompany
        { t: 32, div: 'choir', midi: 77, dur: 1, vel: 0.45 },
        { t: 32, div: 'choir', midi: 74, dur: 1, vel: 0.4 },
        { t: 33, div: 'choir', midi: 79, dur: 0.5, vel: 0.45 },
        { t: 33, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 33.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 33.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 34, div: 'choir', midi: 74, dur: 1, vel: 0.45 },
        { t: 34, div: 'choir', midi: 70, dur: 1, vel: 0.4 },
        { t: 35, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 35, div: 'choir', midi: 72, dur: 0.5, vel: 0.4 },
        { t: 35.5, div: 'choir', midi: 79, dur: 0.5, vel: 0.45 },
        { t: 35.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 32, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 34, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },

        // m10: "-ly graze and"
        { t: 36, div: 'swell', midi: 70, dur: 2, vel: 0.6 },       // Bb4 "-ly"
        { t: 38, div: 'swell', midi: 69, dur: 1, vel: 0.6 },       // A4 "graze"
        { t: 39, div: 'swell', midi: 70, dur: 1, vel: 0.6 },       // Bb4 "and"
        { t: 36, div: 'choir', midi: 81, dur: 1, vel: 0.45 },
        { t: 36, div: 'choir', midi: 77, dur: 1, vel: 0.4 },
        { t: 37, div: 'choir', midi: 79, dur: 0.5, vel: 0.45 },
        { t: 37, div: 'choir', midi: 75, dur: 0.5, vel: 0.4 },
        { t: 37.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 37.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 38, div: 'choir', midi: 75, dur: 1, vel: 0.45 },
        { t: 38, div: 'choir', midi: 72, dur: 1, vel: 0.4 },
        { t: 39, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 39, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 39.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 39.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 36, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },
        { t: 38, div: 'pedal', midi: 48, dur: 2, vel: 0.55 },

        // m11: "pas-ture"
        { t: 40, div: 'swell', midi: 72, dur: 2, vel: 0.6 },       // C5 "pas-"
        { t: 42, div: 'swell', midi: 70, dur: 2, vel: 0.6 },       // Bb4 "-ture"
        { t: 40, div: 'choir', midi: 70, dur: 1, vel: 0.45 },
        { t: 40, div: 'choir', midi: 67, dur: 1, vel: 0.4 },
        { t: 41, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 41, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 41.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 41.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 42, div: 'choir', midi: 77, dur: 1, vel: 0.45 },
        { t: 42, div: 'choir', midi: 72, dur: 1, vel: 0.4 },
        { t: 43, div: 'choir', midi: 75, dur: 0.5, vel: 0.45 },
        { t: 43, div: 'choir', midi: 72, dur: 0.5, vel: 0.4 },
        { t: 43.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 43.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 40, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 42, div: 'pedal', midi: 41, dur: 2, vel: 0.55 },

        // m12: "where a faith-ful"
        { t: 44, div: 'swell', midi: 77, dur: 1, vel: 0.6 },       // F5 "where"
        { t: 45, div: 'swell', midi: 75, dur: 1, vel: 0.6 },       // Eb5 "a"
        { t: 46, div: 'swell', midi: 74, dur: 1, vel: 0.6 },       // D5 "faith-"
        { t: 47, div: 'swell', midi: 72, dur: 1, vel: 0.6 },       // C5 "-ful"
        { t: 44, div: 'choir', midi: 72, dur: 1, vel: 0.45 },
        { t: 44, div: 'choir', midi: 69, dur: 1, vel: 0.4 },
        { t: 45, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 45, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 45.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 45.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 46, div: 'choir', midi: 70, dur: 2, vel: 0.45 },
        { t: 46, div: 'choir', midi: 67, dur: 2, vel: 0.4 },
        { t: 44, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 46, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },

        // m13-14: "shepherd watch-es o-ver them"
        { t: 48, div: 'swell', midi: 70, dur: 2, vel: 0.6 },       // Bb4 "shep-"
        { t: 50, div: 'swell', midi: 74, dur: 1, vel: 0.6 },       // D5 "-herd"
        { t: 51, div: 'swell', midi: 72, dur: 1, vel: 0.6 },       // C5 "watch-"
        { t: 48, div: 'choir', midi: 77, dur: 1, vel: 0.45 },
        { t: 48, div: 'choir', midi: 74, dur: 1, vel: 0.4 },
        { t: 49, div: 'choir', midi: 79, dur: 0.5, vel: 0.45 },
        { t: 49, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 49.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 49.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 50, div: 'choir', midi: 74, dur: 1, vel: 0.45 },
        { t: 50, div: 'choir', midi: 70, dur: 1, vel: 0.4 },
        { t: 51, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 51, div: 'choir', midi: 72, dur: 0.5, vel: 0.4 },
        { t: 51.5, div: 'choir', midi: 79, dur: 0.5, vel: 0.45 },
        { t: 51.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 48, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 50, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        // m14
        { t: 52, div: 'swell', midi: 70, dur: 2, vel: 0.6 },       // Bb4 "-es"
        { t: 54, div: 'swell', midi: 69, dur: 1, vel: 0.6 },       // A4 "o-"
        { t: 55, div: 'swell', midi: 70, dur: 1, vel: 0.6 },       // Bb4 "-ver"
        { t: 52, div: 'choir', midi: 81, dur: 1, vel: 0.45 },
        { t: 52, div: 'choir', midi: 77, dur: 1, vel: 0.4 },
        { t: 53, div: 'choir', midi: 79, dur: 0.5, vel: 0.45 },
        { t: 53, div: 'choir', midi: 75, dur: 0.5, vel: 0.4 },
        { t: 53.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 53.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 54, div: 'choir', midi: 75, dur: 1, vel: 0.45 },
        { t: 54, div: 'choir', midi: 72, dur: 1, vel: 0.4 },
        { t: 55, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 55, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 55.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 55.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 52, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },
        { t: 54, div: 'pedal', midi: 48, dur: 2, vel: 0.55 },

        // m15-16: "them" held, cadence in Bb
        { t: 56, div: 'swell', midi: 72, dur: 2, vel: 0.6 },       // C5 "them"
        { t: 58, div: 'swell', midi: 70, dur: 2, vel: 0.6 },       // Bb4
        { t: 56, div: 'choir', midi: 70, dur: 1, vel: 0.45 },
        { t: 56, div: 'choir', midi: 67, dur: 1, vel: 0.4 },
        { t: 57, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 57, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 57.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 57.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 58, div: 'choir', midi: 77, dur: 1, vel: 0.45 },
        { t: 58, div: 'choir', midi: 72, dur: 1, vel: 0.4 },
        { t: 59, div: 'choir', midi: 75, dur: 0.5, vel: 0.45 },
        { t: 59, div: 'choir', midi: 72, dur: 0.5, vel: 0.4 },
        { t: 59.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 59.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 56, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 58, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },
        // m16: cadence
        { t: 60, div: 'swell', midi: 69, dur: 1, vel: 0.55 },      // A4
        { t: 61, div: 'swell', midi: 70, dur: 3, vel: 0.6 },       // Bb4
        { t: 60, div: 'choir', midi: 72, dur: 1, vel: 0.45 },
        { t: 60, div: 'choir', midi: 69, dur: 1, vel: 0.4 },
        { t: 61, div: 'choir', midi: 70, dur: 1, vel: 0.45 },
        { t: 61, div: 'choir', midi: 67, dur: 1, vel: 0.4 },
        { t: 62, div: 'choir', midi: 70, dur: 2, vel: 0.45 },
        { t: 62, div: 'choir', midi: 65, dur: 2, vel: 0.4 },
        { t: 60, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },
        { t: 62, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },

        // ==== SECOND VOCAL SECTION (m17-24) ====
        // m17: "Sheep may safe-ly graze" (repeat with variation)
        { t: 64, div: 'swell', midi: 74, dur: 2, vel: 0.6 },       // D5
        { t: 66, div: 'swell', midi: 77, dur: 1, vel: 0.65 },      // F5
        { t: 67, div: 'swell', midi: 75, dur: 1, vel: 0.6 },       // Eb5
        { t: 64, div: 'choir', midi: 77, dur: 1, vel: 0.45 },
        { t: 64, div: 'choir', midi: 74, dur: 1, vel: 0.4 },
        { t: 65, div: 'choir', midi: 79, dur: 0.5, vel: 0.45 },
        { t: 65, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 65.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 65.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 66, div: 'choir', midi: 74, dur: 1, vel: 0.45 },
        { t: 66, div: 'choir', midi: 70, dur: 1, vel: 0.4 },
        { t: 67, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 67, div: 'choir', midi: 72, dur: 0.5, vel: 0.4 },
        { t: 67.5, div: 'choir', midi: 79, dur: 0.5, vel: 0.45 },
        { t: 67.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 64, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 66, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },

        // m18
        { t: 68, div: 'swell', midi: 74, dur: 2, vel: 0.6 },      // D5
        { t: 70, div: 'swell', midi: 72, dur: 1, vel: 0.6 },       // C5
        { t: 71, div: 'swell', midi: 74, dur: 1, vel: 0.6 },       // D5
        { t: 68, div: 'choir', midi: 81, dur: 1, vel: 0.45 },
        { t: 68, div: 'choir', midi: 77, dur: 1, vel: 0.4 },
        { t: 69, div: 'choir', midi: 79, dur: 0.5, vel: 0.45 },
        { t: 69, div: 'choir', midi: 75, dur: 0.5, vel: 0.4 },
        { t: 69.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 69.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 70, div: 'choir', midi: 75, dur: 1, vel: 0.45 },
        { t: 70, div: 'choir', midi: 72, dur: 1, vel: 0.4 },
        { t: 71, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 71, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 71.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 71.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 68, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },
        { t: 70, div: 'pedal', midi: 48, dur: 2, vel: 0.55 },

        // m19-20: Higher continuation
        { t: 72, div: 'swell', midi: 75, dur: 2, vel: 0.65 },      // Eb5
        { t: 74, div: 'swell', midi: 77, dur: 1, vel: 0.65 },      // F5
        { t: 75, div: 'swell', midi: 75, dur: 1, vel: 0.6 },       // Eb5
        { t: 72, div: 'choir', midi: 70, dur: 1, vel: 0.45 },
        { t: 72, div: 'choir', midi: 67, dur: 1, vel: 0.4 },
        { t: 73, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 73, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 73.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 73.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 74, div: 'choir', midi: 77, dur: 1, vel: 0.45 },
        { t: 74, div: 'choir', midi: 72, dur: 1, vel: 0.4 },
        { t: 75, div: 'choir', midi: 75, dur: 0.5, vel: 0.45 },
        { t: 75, div: 'choir', midi: 72, dur: 0.5, vel: 0.4 },
        { t: 75.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 75.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 72, div: 'pedal', midi: 51, dur: 2, vel: 0.55 },
        { t: 74, div: 'pedal', midi: 41, dur: 2, vel: 0.55 },
        // m20
        { t: 76, div: 'swell', midi: 74, dur: 1, vel: 0.6 },
        { t: 77, div: 'swell', midi: 72, dur: 1, vel: 0.6 },
        { t: 78, div: 'swell', midi: 70, dur: 2, vel: 0.6 },
        { t: 76, div: 'choir', midi: 72, dur: 1, vel: 0.45 },
        { t: 76, div: 'choir', midi: 69, dur: 1, vel: 0.4 },
        { t: 77, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 77, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 77.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 77.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 78, div: 'choir', midi: 70, dur: 2, vel: 0.45 },
        { t: 78, div: 'choir', midi: 67, dur: 2, vel: 0.4 },
        { t: 76, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 78, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },

        // m21-24: Continuation and cadence of first vocal section
        { t: 80, div: 'swell', midi: 72, dur: 1, vel: 0.6 },
        { t: 81, div: 'swell', midi: 74, dur: 1, vel: 0.6 },
        { t: 82, div: 'swell', midi: 75, dur: 1, vel: 0.65 },
        { t: 83, div: 'swell', midi: 77, dur: 1, vel: 0.65 },
        { t: 80, div: 'choir', midi: 77, dur: 1, vel: 0.45 },
        { t: 80, div: 'choir', midi: 74, dur: 1, vel: 0.4 },
        { t: 81, div: 'choir', midi: 79, dur: 0.5, vel: 0.45 },
        { t: 81, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 81.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 81.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 82, div: 'choir', midi: 74, dur: 1, vel: 0.45 },
        { t: 82, div: 'choir', midi: 70, dur: 1, vel: 0.4 },
        { t: 83, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 83, div: 'choir', midi: 72, dur: 0.5, vel: 0.4 },
        { t: 83.5, div: 'choir', midi: 79, dur: 0.5, vel: 0.45 },
        { t: 83.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 80, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 82, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        // m22
        { t: 84, div: 'swell', midi: 75, dur: 2, vel: 0.65 },
        { t: 86, div: 'swell', midi: 74, dur: 1, vel: 0.6 },
        { t: 87, div: 'swell', midi: 72, dur: 1, vel: 0.6 },
        { t: 84, div: 'choir', midi: 81, dur: 1, vel: 0.45 },
        { t: 84, div: 'choir', midi: 77, dur: 1, vel: 0.4 },
        { t: 85, div: 'choir', midi: 79, dur: 0.5, vel: 0.45 },
        { t: 85, div: 'choir', midi: 75, dur: 0.5, vel: 0.4 },
        { t: 85.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 85.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 86, div: 'choir', midi: 75, dur: 1, vel: 0.45 },
        { t: 86, div: 'choir', midi: 72, dur: 1, vel: 0.4 },
        { t: 87, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 87, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 87.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 87.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 84, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },
        { t: 86, div: 'pedal', midi: 48, dur: 2, vel: 0.55 },

        // m23-24: cadence
        { t: 88, div: 'swell', midi: 70, dur: 2, vel: 0.6 },
        { t: 90, div: 'swell', midi: 69, dur: 1, vel: 0.55 },
        { t: 91, div: 'swell', midi: 70, dur: 1, vel: 0.6 },
        { t: 88, div: 'choir', midi: 70, dur: 1, vel: 0.45 },
        { t: 88, div: 'choir', midi: 67, dur: 1, vel: 0.4 },
        { t: 89, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 89, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 89.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 89.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 90, div: 'choir', midi: 72, dur: 1, vel: 0.45 },
        { t: 90, div: 'choir', midi: 69, dur: 1, vel: 0.4 },
        { t: 91, div: 'choir', midi: 70, dur: 1, vel: 0.45 },
        { t: 91, div: 'choir', midi: 67, dur: 1, vel: 0.4 },
        { t: 88, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 90, div: 'pedal', midi: 53, dur: 1, vel: 0.55 },
        { t: 91, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },
        // m24: final beat cadence
        { t: 92, div: 'swell', midi: 70, dur: 4, vel: 0.6 },
        { t: 92, div: 'choir', midi: 74, dur: 4, vel: 0.45 },
        { t: 92, div: 'choir', midi: 67, dur: 4, vel: 0.4 },
        { t: 92, div: 'pedal', midi: 46, dur: 4, vel: 0.55 },

        // ==== B SECTION: Contrasting section (m25-32, minor key/modulation) ====
        // m25: Shift to G minor feel
        { t: 96, div: 'swell', midi: 74, dur: 1, vel: 0.55 },      // D5
        { t: 97, div: 'swell', midi: 72, dur: 1, vel: 0.55 },      // C5
        { t: 98, div: 'swell', midi: 70, dur: 1, vel: 0.55 },      // Bb4
        { t: 99, div: 'swell', midi: 69, dur: 1, vel: 0.5 },       // A4
        { t: 96, div: 'choir', midi: 70, dur: 1, vel: 0.45 },
        { t: 96, div: 'choir', midi: 67, dur: 1, vel: 0.4 },
        { t: 97, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 97, div: 'choir', midi: 67, dur: 0.5, vel: 0.4 },
        { t: 97.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.45 },
        { t: 97.5, div: 'choir', midi: 67, dur: 0.5, vel: 0.4 },
        { t: 98, div: 'choir', midi: 67, dur: 1, vel: 0.45 },
        { t: 98, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 99, div: 'choir', midi: 65, dur: 0.5, vel: 0.45 },
        { t: 99, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 99.5, div: 'choir', midi: 67, dur: 0.5, vel: 0.45 },
        { t: 99.5, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 96, div: 'pedal', midi: 55, dur: 2, vel: 0.5 },       // G3
        { t: 98, div: 'pedal', midi: 50, dur: 2, vel: 0.5 },       // D3

        // m26
        { t: 100, div: 'swell', midi: 67, dur: 2, vel: 0.55 },     // G4
        { t: 102, div: 'swell', midi: 70, dur: 1, vel: 0.55 },     // Bb4
        { t: 103, div: 'swell', midi: 69, dur: 1, vel: 0.55 },     // A4
        { t: 100, div: 'choir', midi: 70, dur: 1, vel: 0.45 },
        { t: 100, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 101, div: 'choir', midi: 67, dur: 0.5, vel: 0.45 },
        { t: 101, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 101.5, div: 'choir', midi: 65, dur: 0.5, vel: 0.45 },
        { t: 101.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 102, div: 'choir', midi: 67, dur: 1, vel: 0.45 },
        { t: 102, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 103, div: 'choir', midi: 65, dur: 0.5, vel: 0.45 },
        { t: 103, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 103.5, div: 'choir', midi: 67, dur: 0.5, vel: 0.45 },
        { t: 103.5, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 100, div: 'pedal', midi: 55, dur: 2, vel: 0.5 },
        { t: 102, div: 'pedal', midi: 50, dur: 2, vel: 0.5 },

        // m27-28: Minor section continues
        { t: 104, div: 'swell', midi: 70, dur: 2, vel: 0.55 },
        { t: 106, div: 'swell', midi: 72, dur: 1, vel: 0.55 },
        { t: 107, div: 'swell', midi: 70, dur: 1, vel: 0.55 },
        { t: 104, div: 'choir', midi: 65, dur: 1, vel: 0.45 },
        { t: 104, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 105, div: 'choir', midi: 67, dur: 0.5, vel: 0.45 },
        { t: 105, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 105.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.45 },
        { t: 105.5, div: 'choir', midi: 65, dur: 0.5, vel: 0.4 },
        { t: 106, div: 'choir', midi: 72, dur: 1, vel: 0.45 },
        { t: 106, div: 'choir', midi: 67, dur: 1, vel: 0.4 },
        { t: 107, div: 'choir', midi: 70, dur: 0.5, vel: 0.45 },
        { t: 107, div: 'choir', midi: 67, dur: 0.5, vel: 0.4 },
        { t: 107.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.45 },
        { t: 107.5, div: 'choir', midi: 65, dur: 0.5, vel: 0.4 },
        { t: 104, div: 'pedal', midi: 46, dur: 2, vel: 0.5 },
        { t: 106, div: 'pedal', midi: 48, dur: 2, vel: 0.5 },
        // m28
        { t: 108, div: 'swell', midi: 69, dur: 1, vel: 0.55 },
        { t: 109, div: 'swell', midi: 67, dur: 1, vel: 0.55 },
        { t: 110, div: 'swell', midi: 65, dur: 1, vel: 0.5 },
        { t: 111, div: 'swell', midi: 67, dur: 1, vel: 0.55 },
        { t: 108, div: 'choir', midi: 67, dur: 1, vel: 0.45 },
        { t: 108, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 109, div: 'choir', midi: 65, dur: 0.5, vel: 0.45 },
        { t: 109, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 109.5, div: 'choir', midi: 62, dur: 0.5, vel: 0.45 },
        { t: 109.5, div: 'choir', midi: 58, dur: 0.5, vel: 0.4 },
        { t: 110, div: 'choir', midi: 60, dur: 1, vel: 0.45 },
        { t: 110, div: 'choir', midi: 57, dur: 1, vel: 0.4 },
        { t: 111, div: 'choir', midi: 62, dur: 1, vel: 0.45 },
        { t: 111, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 108, div: 'pedal', midi: 50, dur: 2, vel: 0.5 },
        { t: 110, div: 'pedal', midi: 46, dur: 2, vel: 0.5 },

        // m29-32: Transition back to Bb major
        { t: 112, div: 'swell', midi: 70, dur: 2, vel: 0.55 },
        { t: 114, div: 'swell', midi: 74, dur: 1, vel: 0.6 },
        { t: 115, div: 'swell', midi: 72, dur: 1, vel: 0.6 },
        { t: 112, div: 'choir', midi: 65, dur: 1, vel: 0.45 },
        { t: 112, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 113, div: 'choir', midi: 67, dur: 0.5, vel: 0.45 },
        { t: 113, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 113.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.45 },
        { t: 113.5, div: 'choir', midi: 65, dur: 0.5, vel: 0.4 },
        { t: 114, div: 'choir', midi: 72, dur: 1, vel: 0.45 },
        { t: 114, div: 'choir', midi: 69, dur: 1, vel: 0.4 },
        { t: 115, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 115, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 115.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 115.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 112, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 114, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },
        // m30
        { t: 116, div: 'swell', midi: 70, dur: 2, vel: 0.6 },
        { t: 118, div: 'swell', midi: 69, dur: 1, vel: 0.55 },
        { t: 119, div: 'swell', midi: 70, dur: 1, vel: 0.6 },
        { t: 116, div: 'choir', midi: 70, dur: 1, vel: 0.45 },
        { t: 116, div: 'choir', midi: 67, dur: 1, vel: 0.4 },
        { t: 117, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 117, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 117.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 117.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 118, div: 'choir', midi: 72, dur: 1, vel: 0.45 },
        { t: 118, div: 'choir', midi: 69, dur: 1, vel: 0.4 },
        { t: 119, div: 'choir', midi: 70, dur: 0.5, vel: 0.45 },
        { t: 119, div: 'choir', midi: 67, dur: 0.5, vel: 0.4 },
        { t: 119.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 119.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 116, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 118, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },
        // m31-32: Full cadence back to Bb
        { t: 120, div: 'swell', midi: 72, dur: 2, vel: 0.6 },
        { t: 122, div: 'swell', midi: 70, dur: 2, vel: 0.6 },
        { t: 120, div: 'choir', midi: 74, dur: 2, vel: 0.45 },
        { t: 120, div: 'choir', midi: 69, dur: 2, vel: 0.4 },
        { t: 122, div: 'choir', midi: 70, dur: 2, vel: 0.45 },
        { t: 122, div: 'choir', midi: 67, dur: 2, vel: 0.4 },
        { t: 120, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },
        { t: 122, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        // m32: silence / breath
        { t: 124, div: 'choir', midi: 70, dur: 2, vel: 0.4 },
        { t: 124, div: 'choir', midi: 65, dur: 2, vel: 0.35 },
        { t: 126, div: 'choir', midi: 70, dur: 2, vel: 0.4 },
        { t: 126, div: 'choir', midi: 67, dur: 2, vel: 0.35 },
        { t: 124, div: 'pedal', midi: 46, dur: 4, vel: 0.5 },

        // ==== A' RETURN (m33-44): Return of introduction + vocal ====
        // m33-34: Recorders return with opening theme
        { t: 128, div: 'choir', midi: 77, dur: 1, vel: 0.5 },
        { t: 128, div: 'choir', midi: 74, dur: 1, vel: 0.45 },
        { t: 129, div: 'choir', midi: 79, dur: 0.5, vel: 0.5 },
        { t: 129, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 129.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.5 },
        { t: 129.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 130, div: 'choir', midi: 74, dur: 1, vel: 0.5 },
        { t: 130, div: 'choir', midi: 70, dur: 1, vel: 0.45 },
        { t: 131, div: 'choir', midi: 77, dur: 0.5, vel: 0.5 },
        { t: 131, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 131.5, div: 'choir', midi: 79, dur: 0.5, vel: 0.5 },
        { t: 131.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 128, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 130, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        // m34
        { t: 132, div: 'choir', midi: 81, dur: 1, vel: 0.55 },
        { t: 132, div: 'choir', midi: 77, dur: 1, vel: 0.45 },
        { t: 133, div: 'choir', midi: 79, dur: 0.5, vel: 0.5 },
        { t: 133, div: 'choir', midi: 75, dur: 0.5, vel: 0.45 },
        { t: 133.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.5 },
        { t: 133.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 134, div: 'choir', midi: 75, dur: 1, vel: 0.5 },
        { t: 134, div: 'choir', midi: 72, dur: 1, vel: 0.45 },
        { t: 135, div: 'choir', midi: 74, dur: 0.5, vel: 0.5 },
        { t: 135, div: 'choir', midi: 70, dur: 0.5, vel: 0.45 },
        { t: 135.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.5 },
        { t: 135.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.45 },
        { t: 132, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },
        { t: 134, div: 'pedal', midi: 48, dur: 2, vel: 0.55 },

        // m35-36: Vocal returns with recorders
        { t: 136, div: 'swell', midi: 70, dur: 2, vel: 0.6 },      // Bb4
        { t: 138, div: 'swell', midi: 74, dur: 1, vel: 0.65 },     // D5
        { t: 139, div: 'swell', midi: 72, dur: 1, vel: 0.6 },      // C5
        { t: 136, div: 'choir', midi: 70, dur: 1, vel: 0.45 },
        { t: 136, div: 'choir', midi: 67, dur: 1, vel: 0.4 },
        { t: 137, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 137, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 137.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 137.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 138, div: 'choir', midi: 77, dur: 1, vel: 0.45 },
        { t: 138, div: 'choir', midi: 72, dur: 1, vel: 0.4 },
        { t: 139, div: 'choir', midi: 75, dur: 0.5, vel: 0.45 },
        { t: 139, div: 'choir', midi: 72, dur: 0.5, vel: 0.4 },
        { t: 139.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 139.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 136, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 138, div: 'pedal', midi: 41, dur: 2, vel: 0.55 },
        // m36
        { t: 140, div: 'swell', midi: 70, dur: 2, vel: 0.6 },
        { t: 142, div: 'swell', midi: 69, dur: 1, vel: 0.55 },
        { t: 143, div: 'swell', midi: 70, dur: 1, vel: 0.6 },
        { t: 140, div: 'choir', midi: 72, dur: 1, vel: 0.45 },
        { t: 140, div: 'choir', midi: 69, dur: 1, vel: 0.4 },
        { t: 141, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 141, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 141.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 141.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 142, div: 'choir', midi: 70, dur: 2, vel: 0.45 },
        { t: 142, div: 'choir', midi: 67, dur: 2, vel: 0.4 },
        { t: 140, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 142, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },

        // m37-40: Second half of vocal return
        { t: 144, div: 'swell', midi: 72, dur: 2, vel: 0.6 },
        { t: 146, div: 'swell', midi: 70, dur: 2, vel: 0.6 },
        { t: 144, div: 'choir', midi: 77, dur: 1, vel: 0.45 },
        { t: 144, div: 'choir', midi: 74, dur: 1, vel: 0.4 },
        { t: 145, div: 'choir', midi: 79, dur: 0.5, vel: 0.45 },
        { t: 145, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 145.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 145.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 146, div: 'choir', midi: 74, dur: 1, vel: 0.45 },
        { t: 146, div: 'choir', midi: 70, dur: 1, vel: 0.4 },
        { t: 147, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 147, div: 'choir', midi: 72, dur: 0.5, vel: 0.4 },
        { t: 147.5, div: 'choir', midi: 79, dur: 0.5, vel: 0.45 },
        { t: 147.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 144, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 146, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        // m38
        { t: 148, div: 'swell', midi: 77, dur: 1, vel: 0.65 },
        { t: 149, div: 'swell', midi: 75, dur: 1, vel: 0.6 },
        { t: 150, div: 'swell', midi: 74, dur: 1, vel: 0.6 },
        { t: 151, div: 'swell', midi: 72, dur: 1, vel: 0.6 },
        { t: 148, div: 'choir', midi: 81, dur: 1, vel: 0.45 },
        { t: 148, div: 'choir', midi: 77, dur: 1, vel: 0.4 },
        { t: 149, div: 'choir', midi: 79, dur: 0.5, vel: 0.45 },
        { t: 149, div: 'choir', midi: 75, dur: 0.5, vel: 0.4 },
        { t: 149.5, div: 'choir', midi: 77, dur: 0.5, vel: 0.45 },
        { t: 149.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.4 },
        { t: 150, div: 'choir', midi: 75, dur: 1, vel: 0.45 },
        { t: 150, div: 'choir', midi: 72, dur: 1, vel: 0.4 },
        { t: 151, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 151, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 151.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 151.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 148, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },
        { t: 150, div: 'pedal', midi: 48, dur: 2, vel: 0.55 },

        // m39-40: Approach final cadence
        { t: 152, div: 'swell', midi: 70, dur: 2, vel: 0.6 },
        { t: 154, div: 'swell', midi: 74, dur: 1, vel: 0.65 },
        { t: 155, div: 'swell', midi: 72, dur: 1, vel: 0.6 },
        { t: 152, div: 'choir', midi: 70, dur: 1, vel: 0.45 },
        { t: 152, div: 'choir', midi: 67, dur: 1, vel: 0.4 },
        { t: 153, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 153, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 153.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 153.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 154, div: 'choir', midi: 77, dur: 1, vel: 0.45 },
        { t: 154, div: 'choir', midi: 72, dur: 1, vel: 0.4 },
        { t: 155, div: 'choir', midi: 75, dur: 0.5, vel: 0.45 },
        { t: 155, div: 'choir', midi: 72, dur: 0.5, vel: 0.4 },
        { t: 155.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 155.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 152, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 154, div: 'pedal', midi: 41, dur: 2, vel: 0.55 },
        // m40: final phrase
        { t: 156, div: 'swell', midi: 70, dur: 2, vel: 0.6 },
        { t: 158, div: 'swell', midi: 69, dur: 1, vel: 0.55 },
        { t: 159, div: 'swell', midi: 70, dur: 1, vel: 0.6 },
        { t: 156, div: 'choir', midi: 72, dur: 1, vel: 0.45 },
        { t: 156, div: 'choir', midi: 69, dur: 1, vel: 0.4 },
        { t: 157, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 157, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 157.5, div: 'choir', midi: 72, dur: 0.5, vel: 0.45 },
        { t: 157.5, div: 'choir', midi: 69, dur: 0.5, vel: 0.4 },
        { t: 158, div: 'choir', midi: 70, dur: 2, vel: 0.45 },
        { t: 158, div: 'choir', midi: 67, dur: 2, vel: 0.4 },
        { t: 156, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 158, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },

        // m41-44: Final ritardando and cadence
        { t: 160, div: 'swell', midi: 72, dur: 2, vel: 0.6 },
        { t: 162, div: 'swell', midi: 70, dur: 2, vel: 0.6 },
        { t: 160, div: 'choir', midi: 77, dur: 1, vel: 0.45 },
        { t: 160, div: 'choir', midi: 72, dur: 1, vel: 0.4 },
        { t: 161, div: 'choir', midi: 75, dur: 0.5, vel: 0.45 },
        { t: 161, div: 'choir', midi: 72, dur: 0.5, vel: 0.4 },
        { t: 161.5, div: 'choir', midi: 74, dur: 0.5, vel: 0.45 },
        { t: 161.5, div: 'choir', midi: 70, dur: 0.5, vel: 0.4 },
        { t: 162, div: 'choir', midi: 72, dur: 1, vel: 0.45 },
        { t: 162, div: 'choir', midi: 69, dur: 1, vel: 0.4 },
        { t: 163, div: 'choir', midi: 70, dur: 1, vel: 0.45 },
        { t: 163, div: 'choir', midi: 67, dur: 1, vel: 0.4 },
        { t: 160, div: 'pedal', midi: 46, dur: 2, vel: 0.55 },
        { t: 162, div: 'pedal', midi: 53, dur: 2, vel: 0.55 },
        // m42: Final Bb chord
        { t: 164, div: 'swell', midi: 70, dur: 4, vel: 0.6 },
        { t: 164, div: 'great', midi: 58, dur: 4, vel: 0.5 },
        { t: 164, div: 'choir', midi: 74, dur: 4, vel: 0.45 },
        { t: 164, div: 'choir', midi: 70, dur: 4, vel: 0.4 },
        { t: 164, div: 'pedal', midi: 46, dur: 4, vel: 0.6 },
    ]
};

// ============================================================
// PIECE 4: Nun komm, der Heiden Heiland, BWV 659
// Ornamental chorale prelude - decorated melody on swell
// Two inner canonic voices on choir, walking bass in pedal
// Key: G minor, Tempo: 52, 4/4 time
// ============================================================

const PIECE_NUN_KOMM = {
    title: "Nun komm, der Heiden Heiland",
    composer: "J.S. Bach",
    catalog: "BWV 659",
    key: "G minor",
    tempo: 52,
    tempoChanges: [
        { t: 0, tempo: 52, label: 'Adagio' },
        { t: 100, tempo: 48, label: 'poco rit.' },
        { t: 104, tempo: 52, label: 'a tempo' },
        { t: 192, tempo: 46, label: 'rit. molto' }
    ],
    registration: {
        great: ['gt-principal8', 'gt-bourdon8'],
        swell: ['sw-gedeckt8', 'sw-oboe8', 'sw-tremulant'],
        choir: ['ch-gedeckt8', 'ch-dulciana8'],
        pedal: ['pd-subbass16', 'pd-octave8']
    },
    events: [
        // G minor: G=55/67, A=57/69, Bb=58/70, C=60/72, D=62/74, Eb=63/75, F#=66/78
        // Decorated chorale on swell (oboe), canonic inner voices on choir, walking bass pedal

        // ---- Phrase 1: "Nun komm" (G-G-A-Bb-A-G) with heavy ornamentation ----
        // m1: Ornamented opening - swell melody with turns and passing tones
        { t: 0, div: 'swell', midi: 67, dur: 0.5, vel: 0.65 },     // G4 (main note)
        { t: 0.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 },  // A4 (turn)
        { t: 0.75, div: 'swell', midi: 67, dur: 0.25, vel: 0.55 }, // G4
        { t: 1, div: 'swell', midi: 66, dur: 0.25, vel: 0.55 },    // F#4 (lower neighbor)
        { t: 1.25, div: 'swell', midi: 67, dur: 0.75, vel: 0.6 },  // G4 (resolution)
        { t: 2, div: 'swell', midi: 69, dur: 0.5, vel: 0.65 },     // A4
        { t: 2.5, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 },  // Bb4 (passing)
        { t: 2.75, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 }, // A4
        { t: 3, div: 'swell', midi: 70, dur: 0.5, vel: 0.65 },     // Bb4 (chorale note)
        { t: 3.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 },  // C5 (upper neighbor)
        { t: 3.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 }, // Bb4
        // Inner voice 1 enters (choir, canon subject)
        { t: 0, div: 'choir', midi: 62, dur: 1, vel: 0.4 },        // D4
        { t: 1, div: 'choir', midi: 60, dur: 1, vel: 0.4 },        // C4
        { t: 2, div: 'choir', midi: 58, dur: 1, vel: 0.4 },        // Bb3
        { t: 3, div: 'choir', midi: 60, dur: 1, vel: 0.4 },        // C4
        // Inner voice 2 (choir, delayed canon)
        { t: 2, div: 'choir', midi: 55, dur: 1, vel: 0.35 },       // G3
        { t: 3, div: 'choir', midi: 53, dur: 1, vel: 0.35 },       // F3
        // Pedal walking bass
        { t: 0, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },       // G2
        { t: 1, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },        // F2
        { t: 2, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },        // Eb2
        { t: 3, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },       // D2

        // m2: Continuation of phrase 1 ornamented
        { t: 4, div: 'swell', midi: 69, dur: 0.5, vel: 0.65 },     // A4 (chorale: A)
        { t: 4.5, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 },  // Bb4 (mordent)
        { t: 4.75, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 }, // A4
        { t: 5, div: 'swell', midi: 67, dur: 0.5, vel: 0.65 },     // G4 (chorale: G)
        { t: 5.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 },  // A4 (turn up)
        { t: 5.75, div: 'swell', midi: 67, dur: 0.25, vel: 0.55 }, // G4
        { t: 6, div: 'swell', midi: 66, dur: 0.25, vel: 0.55 },    // F#4 (leading tone)
        { t: 6.25, div: 'swell', midi: 67, dur: 0.75, vel: 0.6 },  // G4 (resolution)
        { t: 7, div: 'swell', midi: 67, dur: 1, vel: 0.6 },        // G4 (held, fermata)
        { t: 4, div: 'choir', midi: 58, dur: 1, vel: 0.4 },        // Bb3
        { t: 5, div: 'choir', midi: 60, dur: 1, vel: 0.4 },        // C4
        { t: 6, div: 'choir', midi: 62, dur: 1, vel: 0.4 },        // D4
        { t: 7, div: 'choir', midi: 60, dur: 1, vel: 0.4 },        // C4
        { t: 4, div: 'choir', midi: 51, dur: 1, vel: 0.35 },       // Eb3
        { t: 5, div: 'choir', midi: 53, dur: 1, vel: 0.35 },       // F3
        { t: 6, div: 'choir', midi: 55, dur: 1, vel: 0.35 },       // G3
        { t: 7, div: 'choir', midi: 54, dur: 1, vel: 0.35 },       // F#3
        { t: 4, div: 'pedal', midi: 36, dur: 1, vel: 0.55 },       // C2
        { t: 5, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },        // Eb2
        { t: 6, div: 'pedal', midi: 38, dur: 1, vel: 0.5 },        // D2
        { t: 7, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },       // G2

        // m3-4: Interlude between phrases (inner voices develop)
        { t: 8, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 8.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 9, div: 'choir', midi: 58, dur: 0.5, vel: 0.4 },
        { t: 9.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 10, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 10.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 11, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 11.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        // Second inner voice
        { t: 8, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 9, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 10, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 11, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 8, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 9, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 10, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },
        { t: 11, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },
        // m4
        { t: 12, div: 'choir', midi: 58, dur: 0.5, vel: 0.4 },
        { t: 12.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 13, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 13.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 14, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 15, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 12, div: 'choir', midi: 51, dur: 1, vel: 0.35 },
        { t: 13, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 14, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 15, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 12, div: 'pedal', midi: 36, dur: 1, vel: 0.55 },
        { t: 13, div: 'pedal', midi: 38, dur: 1, vel: 0.5 },
        { t: 14, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },
        { t: 15, div: 'pedal', midi: 41, dur: 1, vel: 0.55 },

        // ---- Phrase 2: "der Heiden Heiland" (D-D-E-F-E-D) ornamented ----
        // m5: Ornamented D
        { t: 16, div: 'swell', midi: 74, dur: 0.5, vel: 0.65 },    // D5
        { t: 16.5, div: 'swell', midi: 75, dur: 0.25, vel: 0.55 }, // Eb5 (upper neighbor)
        { t: 16.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.55 },// D5
        { t: 17, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 },   // C5 (lower neighbor)
        { t: 17.25, div: 'swell', midi: 74, dur: 0.75, vel: 0.6 }, // D5
        { t: 18, div: 'swell', midi: 75, dur: 0.5, vel: 0.65 },    // Eb5 (E natural in G minor = Eb)
        { t: 18.5, div: 'swell', midi: 77, dur: 0.25, vel: 0.55 }, // F5 (passing)
        { t: 18.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.55 },// Eb5
        { t: 19, div: 'swell', midi: 77, dur: 0.5, vel: 0.65 },    // F5
        { t: 19.5, div: 'swell', midi: 79, dur: 0.25, vel: 0.55 }, // G5 (turn)
        { t: 19.75, div: 'swell', midi: 77, dur: 0.25, vel: 0.55 },// F5
        { t: 16, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 17, div: 'choir', midi: 63, dur: 1, vel: 0.4 },
        { t: 18, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 19, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 16, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 17, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 18, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 19, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 16, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 17, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 18, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },
        { t: 19, div: 'pedal', midi: 41, dur: 1, vel: 0.55 },

        // m6: Continuation and descent
        { t: 20, div: 'swell', midi: 75, dur: 0.5, vel: 0.65 },    // Eb5
        { t: 20.5, div: 'swell', midi: 77, dur: 0.25, vel: 0.55 }, // F5 (mordent)
        { t: 20.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.55 },// Eb5
        { t: 21, div: 'swell', midi: 74, dur: 0.5, vel: 0.65 },    // D5
        { t: 21.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 }, // C5 (scale run down)
        { t: 21.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 },// Bb4
        { t: 22, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 },   // C5 (turn)
        { t: 22.25, div: 'swell', midi: 74, dur: 0.75, vel: 0.6 }, // D5 (resolution)
        { t: 23, div: 'swell', midi: 74, dur: 1, vel: 0.6 },       // D5 (held, fermata)
        { t: 20, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 21, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 22, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 23, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 20, div: 'choir', midi: 51, dur: 1, vel: 0.35 },
        { t: 21, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 22, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 23, div: 'choir', midi: 54, dur: 1, vel: 0.35 },
        { t: 20, div: 'pedal', midi: 39, dur: 1, vel: 0.55 },
        { t: 21, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 22, div: 'pedal', midi: 38, dur: 1, vel: 0.5 },
        { t: 23, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },

        // m7-8: Interlude (inner voices, longer development)
        { t: 24, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 24.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 25, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 25.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 26, div: 'choir', midi: 58, dur: 0.5, vel: 0.4 },
        { t: 26.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 27, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 27.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 24, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 25, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 26, div: 'choir', midi: 51, dur: 1, vel: 0.35 },
        { t: 27, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 24, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 25, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 26, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },
        { t: 27, div: 'pedal', midi: 36, dur: 1, vel: 0.55 },
        // m8
        { t: 28, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 28.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 29, div: 'choir', midi: 58, dur: 0.5, vel: 0.4 },
        { t: 29.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 30, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 31, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 28, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 29, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 30, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 31, div: 'choir', midi: 54, dur: 1, vel: 0.35 },
        { t: 28, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },
        { t: 29, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },
        { t: 30, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 31, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },

        // ---- Phrase 3: "Aller Welt" (Bb-A-G-F#-G) elaborately ornamented ----
        // m9
        { t: 32, div: 'swell', midi: 70, dur: 0.5, vel: 0.65 },    // Bb4
        { t: 32.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 }, // C5 (upper)
        { t: 32.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 },// Bb4
        { t: 33, div: 'swell', midi: 69, dur: 0.5, vel: 0.65 },    // A4
        { t: 33.5, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 }, // Bb4 (mordent)
        { t: 33.75, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 },// A4
        { t: 34, div: 'swell', midi: 67, dur: 0.5, vel: 0.65 },    // G4
        { t: 34.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 }, // A4 (turn)
        { t: 34.75, div: 'swell', midi: 67, dur: 0.25, vel: 0.55 },// G4
        { t: 35, div: 'swell', midi: 66, dur: 0.5, vel: 0.65 },    // F#4
        { t: 35.5, div: 'swell', midi: 67, dur: 0.25, vel: 0.55 }, // G4 (resolution)
        { t: 35.75, div: 'swell', midi: 66, dur: 0.25, vel: 0.55 },// F#4
        { t: 32, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 33, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 34, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 35, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 32, div: 'choir', midi: 51, dur: 1, vel: 0.35 },
        { t: 33, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 34, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 35, div: 'choir', midi: 54, dur: 1, vel: 0.35 },
        { t: 32, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },
        { t: 33, div: 'pedal', midi: 45, dur: 1, vel: 0.5 },
        { t: 34, div: 'pedal', midi: 43, dur: 1, vel: 0.5 },
        { t: 35, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },

        // m10: G resolves, phrase ends
        { t: 36, div: 'swell', midi: 67, dur: 0.5, vel: 0.65 },    // G4
        { t: 36.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 }, // A4
        { t: 36.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 },// Bb4
        { t: 37, div: 'swell', midi: 69, dur: 0.5, vel: 0.6 },     // A4
        { t: 37.5, div: 'swell', midi: 67, dur: 0.25, vel: 0.55 }, // G4
        { t: 37.75, div: 'swell', midi: 66, dur: 0.25, vel: 0.55 },// F#4
        { t: 38, div: 'swell', midi: 67, dur: 1, vel: 0.6 },       // G4 (held)
        { t: 39, div: 'swell', midi: 67, dur: 1, vel: 0.6 },       // G4 (fermata)
        { t: 36, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 37, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 38, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 39, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 36, div: 'choir', midi: 51, dur: 1, vel: 0.35 },
        { t: 37, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 38, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 39, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 36, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 37, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 38, div: 'pedal', midi: 38, dur: 1, vel: 0.5 },
        { t: 39, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },

        // m11-12: Interlude (development of canon)
        { t: 40, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 40.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 41, div: 'choir', midi: 65, dur: 0.5, vel: 0.4 },
        { t: 41.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 42, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 42.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 43, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 43.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 40, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 41, div: 'choir', midi: 57, dur: 1, vel: 0.35 },
        { t: 42, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 43, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 40, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 41, div: 'pedal', midi: 45, dur: 1, vel: 0.5 },
        { t: 42, div: 'pedal', midi: 43, dur: 1, vel: 0.5 },
        { t: 43, div: 'pedal', midi: 41, dur: 1, vel: 0.55 },
        // m12
        { t: 44, div: 'choir', midi: 65, dur: 0.5, vel: 0.4 },
        { t: 44.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 45, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 45.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 46, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 47, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 44, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 45, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 46, div: 'choir', midi: 51, dur: 1, vel: 0.35 },
        { t: 47, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 44, div: 'pedal', midi: 39, dur: 1, vel: 0.55 },
        { t: 45, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 46, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },
        { t: 47, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },

        // ---- Phrase 4: "Heiland, komm" (A-Bb-C-Bb-A) with elaborate ornaments ----
        // m13
        { t: 48, div: 'swell', midi: 69, dur: 0.5, vel: 0.65 },    // A4
        { t: 48.5, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 }, // Bb4 (mordent)
        { t: 48.75, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 },// A4
        { t: 49, div: 'swell', midi: 70, dur: 0.5, vel: 0.65 },    // Bb4
        { t: 49.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 }, // C5 (upper neighbor)
        { t: 49.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 },// Bb4
        { t: 50, div: 'swell', midi: 72, dur: 0.5, vel: 0.65 },    // C5
        { t: 50.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.55 }, // D5 (passing tone up)
        { t: 50.75, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 },// C5
        { t: 51, div: 'swell', midi: 70, dur: 0.5, vel: 0.65 },    // Bb4
        { t: 51.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 }, // C5 (turn)
        { t: 51.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 },// Bb4
        { t: 48, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 49, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 50, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 51, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 48, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 49, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 50, div: 'choir', midi: 51, dur: 1, vel: 0.35 },
        { t: 51, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 48, div: 'pedal', midi: 41, dur: 1, vel: 0.55 },
        { t: 49, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },
        { t: 50, div: 'pedal', midi: 36, dur: 1, vel: 0.5 },
        { t: 51, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },

        // m14: Resolution and cadence of phrase 4
        { t: 52, div: 'swell', midi: 69, dur: 0.5, vel: 0.65 },    // A4
        { t: 52.5, div: 'swell', midi: 67, dur: 0.25, vel: 0.55 }, // G4 (scale down)
        { t: 52.75, div: 'swell', midi: 66, dur: 0.25, vel: 0.55 },// F#4
        { t: 53, div: 'swell', midi: 67, dur: 0.5, vel: 0.6 },     // G4
        { t: 53.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 }, // A4 (turn up)
        { t: 53.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 },// Bb4
        { t: 54, div: 'swell', midi: 69, dur: 0.5, vel: 0.6 },     // A4
        { t: 54.5, div: 'swell', midi: 67, dur: 0.25, vel: 0.55 }, // G4
        { t: 54.75, div: 'swell', midi: 66, dur: 0.25, vel: 0.55 },// F#4
        { t: 55, div: 'swell', midi: 67, dur: 1, vel: 0.6 },       // G4 (held)
        { t: 52, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 53, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 54, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 55, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 52, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 53, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 54, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 55, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 52, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 53, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 54, div: 'pedal', midi: 38, dur: 1, vel: 0.5 },
        { t: 55, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },

        // m15-16: Interlude connecting to phrase 5
        { t: 56, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 56.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 57, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 57.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 58, div: 'choir', midi: 65, dur: 0.5, vel: 0.4 },
        { t: 58.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 59, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 59.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 56, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 57, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 58, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 59, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 56, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 57, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 58, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },
        { t: 59, div: 'pedal', midi: 41, dur: 1, vel: 0.55 },
        // m16
        { t: 60, div: 'choir', midi: 58, dur: 0.5, vel: 0.4 },
        { t: 60.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 61, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 61.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 62, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 63, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 60, div: 'choir', midi: 51, dur: 1, vel: 0.35 },
        { t: 61, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 62, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 63, div: 'choir', midi: 54, dur: 1, vel: 0.35 },
        { t: 60, div: 'pedal', midi: 39, dur: 1, vel: 0.55 },
        { t: 61, div: 'pedal', midi: 38, dur: 1, vel: 0.5 },
        { t: 62, div: 'pedal', midi: 36, dur: 1, vel: 0.5 },
        { t: 63, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },

        // ---- Phrase 5: "Dein Krippen" (C-D-Eb-D-C-Bb-A) ----
        // m17: Highly decorated ascending line
        { t: 64, div: 'swell', midi: 72, dur: 0.5, vel: 0.65 },    // C5
        { t: 64.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.55 }, // D5 (turn)
        { t: 64.75, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 },// C5
        { t: 65, div: 'swell', midi: 74, dur: 0.5, vel: 0.65 },    // D5
        { t: 65.5, div: 'swell', midi: 75, dur: 0.25, vel: 0.55 }, // Eb5 (passing)
        { t: 65.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.55 },// D5
        { t: 66, div: 'swell', midi: 75, dur: 0.5, vel: 0.65 },    // Eb5
        { t: 66.5, div: 'swell', midi: 77, dur: 0.25, vel: 0.55 }, // F5 (upper)
        { t: 66.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.55 },// Eb5
        { t: 67, div: 'swell', midi: 74, dur: 0.5, vel: 0.65 },    // D5
        { t: 67.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 }, // C5 (turn down)
        { t: 67.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.55 },// D5
        { t: 64, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 65, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 66, div: 'choir', midi: 63, dur: 1, vel: 0.4 },
        { t: 67, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 64, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 65, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 66, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 67, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 64, div: 'pedal', midi: 41, dur: 1, vel: 0.55 },
        { t: 65, div: 'pedal', midi: 43, dur: 1, vel: 0.5 },
        { t: 66, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },
        { t: 67, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },

        // m18: Descending ornamented line
        { t: 68, div: 'swell', midi: 72, dur: 0.5, vel: 0.65 },    // C5
        { t: 68.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.55 }, // D5 (mordent)
        { t: 68.75, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 },// C5
        { t: 69, div: 'swell', midi: 70, dur: 0.5, vel: 0.65 },    // Bb4
        { t: 69.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 }, // C5 (turn up)
        { t: 69.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 },// Bb4
        { t: 70, div: 'swell', midi: 69, dur: 0.5, vel: 0.6 },     // A4
        { t: 70.5, div: 'swell', midi: 67, dur: 0.25, vel: 0.55 }, // G4 (scale)
        { t: 70.75, div: 'swell', midi: 66, dur: 0.25, vel: 0.55 },// F#4
        { t: 71, div: 'swell', midi: 67, dur: 1, vel: 0.6 },       // G4 (held)
        { t: 68, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 69, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 70, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 71, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 68, div: 'choir', midi: 51, dur: 1, vel: 0.35 },
        { t: 69, div: 'choir', midi: 51, dur: 1, vel: 0.35 },
        { t: 70, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 71, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 68, div: 'pedal', midi: 36, dur: 1, vel: 0.55 },
        { t: 69, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },
        { t: 70, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 71, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },

        // m19-20: Extended interlude with imitative voices
        { t: 72, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 72.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 73, div: 'choir', midi: 65, dur: 0.5, vel: 0.4 },
        { t: 73.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 74, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 74.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 75, div: 'choir', midi: 58, dur: 0.5, vel: 0.4 },
        { t: 75.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 72, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 73, div: 'choir', midi: 57, dur: 1, vel: 0.35 },
        { t: 74, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 75, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 72, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 73, div: 'pedal', midi: 45, dur: 1, vel: 0.5 },
        { t: 74, div: 'pedal', midi: 43, dur: 1, vel: 0.5 },
        { t: 75, div: 'pedal', midi: 41, dur: 1, vel: 0.55 },
        // m20
        { t: 76, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 76.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 77, div: 'choir', midi: 58, dur: 0.5, vel: 0.4 },
        { t: 77.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 78, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 79, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 76, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 77, div: 'choir', midi: 51, dur: 1, vel: 0.35 },
        { t: 78, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 79, div: 'choir', midi: 54, dur: 1, vel: 0.35 },
        { t: 76, div: 'pedal', midi: 39, dur: 1, vel: 0.55 },
        { t: 77, div: 'pedal', midi: 36, dur: 1, vel: 0.5 },
        { t: 78, div: 'pedal', midi: 38, dur: 1, vel: 0.5 },
        { t: 79, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },

        // ---- Phrase 6: "glänzt hell" (G-A-Bb-C-D ascending climax) ----
        // m21
        { t: 80, div: 'swell', midi: 67, dur: 0.5, vel: 0.65 },    // G4
        { t: 80.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 }, // A4
        { t: 80.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 },// Bb4
        { t: 81, div: 'swell', midi: 69, dur: 0.5, vel: 0.65 },    // A4
        { t: 81.5, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 }, // Bb4
        { t: 81.75, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 },// C5
        { t: 82, div: 'swell', midi: 70, dur: 0.5, vel: 0.65 },    // Bb4
        { t: 82.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 }, // C5
        { t: 82.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.55 },// D5
        { t: 83, div: 'swell', midi: 72, dur: 0.5, vel: 0.65 },    // C5
        { t: 83.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.55 }, // D5
        { t: 83.75, div: 'swell', midi: 75, dur: 0.25, vel: 0.55 },// Eb5
        { t: 80, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 81, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 82, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 83, div: 'choir', midi: 63, dur: 1, vel: 0.4 },
        { t: 80, div: 'choir', midi: 51, dur: 1, vel: 0.35 },
        { t: 81, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 82, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 83, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 80, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 81, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 82, div: 'pedal', midi: 46, dur: 1, vel: 0.5 },
        { t: 83, div: 'pedal', midi: 48, dur: 1, vel: 0.55 },

        // m22: Climax and descent
        { t: 84, div: 'swell', midi: 74, dur: 0.5, vel: 0.7 },     // D5 (climax!)
        { t: 84.5, div: 'swell', midi: 75, dur: 0.25, vel: 0.6 },  // Eb5 (upper neighbor)
        { t: 84.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.6 }, // D5
        { t: 85, div: 'swell', midi: 72, dur: 0.5, vel: 0.65 },    // C5
        { t: 85.5, div: 'swell', midi: 74, dur: 0.25, vel: 0.55 }, // D5 (turn)
        { t: 85.75, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 },// C5
        { t: 86, div: 'swell', midi: 70, dur: 0.5, vel: 0.65 },    // Bb4
        { t: 86.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 }, // A4
        { t: 86.75, div: 'swell', midi: 67, dur: 0.25, vel: 0.55 },// G4
        { t: 87, div: 'swell', midi: 66, dur: 0.5, vel: 0.6 },     // F#4 (leading tone)
        { t: 87.5, div: 'swell', midi: 67, dur: 0.5, vel: 0.6 },   // G4
        { t: 84, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 85, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 86, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 87, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 84, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 85, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 86, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 87, div: 'choir', midi: 54, dur: 1, vel: 0.35 },
        { t: 84, div: 'pedal', midi: 46, dur: 1, vel: 0.55 },
        { t: 85, div: 'pedal', midi: 48, dur: 1, vel: 0.5 },
        { t: 86, div: 'pedal', midi: 46, dur: 1, vel: 0.5 },
        { t: 87, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },

        // m23-24: Interlude before final phrases
        { t: 88, div: 'choir', midi: 58, dur: 0.5, vel: 0.4 },
        { t: 88.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 89, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 89.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 90, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 90.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 91, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 91.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 88, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 89, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 90, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 91, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 88, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 89, div: 'pedal', midi: 43, dur: 1, vel: 0.5 },
        { t: 90, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 91, div: 'pedal', midi: 39, dur: 1, vel: 0.55 },
        // m24
        { t: 92, div: 'choir', midi: 65, dur: 0.5, vel: 0.4 },
        { t: 92.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 93, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 93.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 94, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 95, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 92, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 93, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 94, div: 'choir', midi: 51, dur: 1, vel: 0.35 },
        { t: 95, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 92, div: 'pedal', midi: 39, dur: 1, vel: 0.55 },
        { t: 93, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 94, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },
        { t: 95, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },

        // ---- Phrase 7: "des Vaters" (G-A-Bb-A-G) with extremely florid ornamentation ----
        // m25
        { t: 96, div: 'swell', midi: 67, dur: 0.5, vel: 0.65 },    // G4
        { t: 96.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 }, // A4
        { t: 96.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 },// Bb4
        { t: 97, div: 'swell', midi: 69, dur: 0.25, vel: 0.6 },    // A4
        { t: 97.25, div: 'swell', midi: 67, dur: 0.25, vel: 0.55 },// G4
        { t: 97.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 }, // A4
        { t: 97.75, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 },// Bb4
        { t: 98, div: 'swell', midi: 72, dur: 0.5, vel: 0.65 },    // C5
        { t: 98.5, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 }, // Bb4
        { t: 98.75, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 },// A4
        { t: 99, div: 'swell', midi: 70, dur: 0.5, vel: 0.65 },    // Bb4
        { t: 99.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 }, // A4
        { t: 99.75, div: 'swell', midi: 67, dur: 0.25, vel: 0.55 },// G4
        { t: 96, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 97, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 98, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 99, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 96, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 97, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 98, div: 'choir', midi: 51, dur: 1, vel: 0.35 },
        { t: 99, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 96, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 97, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 98, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },
        { t: 99, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },

        // m26: Phrase 7 conclusion
        { t: 100, div: 'swell', midi: 69, dur: 0.5, vel: 0.65 },   // A4
        { t: 100.5, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 },// Bb4
        { t: 100.75, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 },// A4
        { t: 101, div: 'swell', midi: 67, dur: 0.5, vel: 0.65 },   // G4
        { t: 101.5, div: 'swell', midi: 66, dur: 0.25, vel: 0.55 },// F#4
        { t: 101.75, div: 'swell', midi: 67, dur: 0.25, vel: 0.55 },// G4
        { t: 102, div: 'swell', midi: 66, dur: 0.5, vel: 0.6 },    // F#4 (leading tone)
        { t: 102.5, div: 'swell', midi: 67, dur: 0.5, vel: 0.6 },  // G4
        { t: 103, div: 'swell', midi: 67, dur: 1, vel: 0.6 },      // G4 (fermata)
        { t: 100, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 101, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 102, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 103, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 100, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 101, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 102, div: 'choir', midi: 54, dur: 1, vel: 0.35 },
        { t: 103, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 100, div: 'pedal', midi: 36, dur: 1, vel: 0.55 },
        { t: 101, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },
        { t: 102, div: 'pedal', midi: 38, dur: 1, vel: 0.5 },
        { t: 103, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },

        // m27-28: Final interlude
        { t: 104, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 104.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 105, div: 'choir', midi: 58, dur: 0.5, vel: 0.4 },
        { t: 105.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 106, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 106.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 107, div: 'choir', midi: 65, dur: 0.5, vel: 0.4 },
        { t: 107.5, div: 'choir', midi: 63, dur: 0.5, vel: 0.4 },
        { t: 104, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 105, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 106, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 107, div: 'choir', midi: 57, dur: 1, vel: 0.35 },
        { t: 104, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 105, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 106, div: 'pedal', midi: 39, dur: 1, vel: 0.5 },
        { t: 107, div: 'pedal', midi: 45, dur: 1, vel: 0.55 },
        // m28
        { t: 108, div: 'choir', midi: 62, dur: 0.5, vel: 0.4 },
        { t: 108.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 109, div: 'choir', midi: 58, dur: 0.5, vel: 0.4 },
        { t: 109.5, div: 'choir', midi: 60, dur: 0.5, vel: 0.4 },
        { t: 110, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 111, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 108, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 109, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 110, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 111, div: 'choir', midi: 54, dur: 1, vel: 0.35 },
        { t: 108, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 109, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 110, div: 'pedal', midi: 38, dur: 1, vel: 0.5 },
        { t: 111, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },

        // ---- Final Phrase 8: "ewgen Wort" closing with Picardy third ----
        // m29: Final decorated phrase
        { t: 112, div: 'swell', midi: 74, dur: 0.5, vel: 0.7 },    // D5
        { t: 112.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.6 }, // C5
        { t: 112.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.6 },// D5
        { t: 113, div: 'swell', midi: 72, dur: 0.5, vel: 0.65 },   // C5
        { t: 113.5, div: 'swell', midi: 70, dur: 0.25, vel: 0.55 },// Bb4
        { t: 113.75, div: 'swell', midi: 72, dur: 0.25, vel: 0.55 },// C5
        { t: 114, div: 'swell', midi: 70, dur: 0.5, vel: 0.65 },   // Bb4
        { t: 114.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.55 },// A4
        { t: 114.75, div: 'swell', midi: 67, dur: 0.25, vel: 0.55 },// G4
        { t: 115, div: 'swell', midi: 69, dur: 0.5, vel: 0.6 },    // A4 (lingering)
        { t: 115.5, div: 'swell', midi: 67, dur: 0.25, vel: 0.55 },// G4
        { t: 115.75, div: 'swell', midi: 66, dur: 0.25, vel: 0.55 },// F#4
        { t: 112, div: 'choir', midi: 62, dur: 1, vel: 0.4 },
        { t: 113, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 114, div: 'choir', midi: 58, dur: 1, vel: 0.4 },
        { t: 115, div: 'choir', midi: 60, dur: 1, vel: 0.4 },
        { t: 112, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 113, div: 'choir', midi: 53, dur: 1, vel: 0.35 },
        { t: 114, div: 'choir', midi: 55, dur: 1, vel: 0.35 },
        { t: 115, div: 'choir', midi: 54, dur: 1, vel: 0.35 },
        { t: 112, div: 'pedal', midi: 43, dur: 1, vel: 0.55 },
        { t: 113, div: 'pedal', midi: 41, dur: 1, vel: 0.5 },
        { t: 114, div: 'pedal', midi: 46, dur: 1, vel: 0.5 },
        { t: 115, div: 'pedal', midi: 38, dur: 1, vel: 0.55 },

        // m30: Final cadence with Picardy third (G major chord ending G minor piece)
        { t: 116, div: 'swell', midi: 67, dur: 2, vel: 0.65 },     // G4 (held)
        { t: 118, div: 'swell', midi: 67, dur: 2, vel: 0.6 },      // G4 (fermata)
        // Great adds Picardy third chord
        { t: 116, div: 'great', midi: 59, dur: 4, vel: 0.55 },     // B3 (Picardy third!)
        { t: 116, div: 'great', midi: 55, dur: 4, vel: 0.5 },      // G3
        { t: 116, div: 'choir', midi: 62, dur: 4, vel: 0.45 },     // D4
        { t: 116, div: 'choir', midi: 55, dur: 4, vel: 0.4 },      // G3
        { t: 116, div: 'pedal', midi: 43, dur: 4, vel: 0.6 },      // G2 (final pedal note)
    ]
};
