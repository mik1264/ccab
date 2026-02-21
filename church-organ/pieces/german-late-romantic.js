// ============================================================
// German & Late Romantic Organ Works Collection
// ============================================================
// Six German/Late Romantic organ works encoded for Cathedral Grand organ simulator
// MIDI reference: C2=36, C3=48, C4=60, D4=62, Eb4=63, E4=64, F4=65, G4=67, A4=69, Bb4=70, B4=71, C5=72
// ============================================================

// ============================================================
// 1. Brahms - Es ist ein Ros' entsprungen, Op. 122 No. 8
// ============================================================
// Gentle Christmas chorale prelude, one of Brahms' last works (1896).
// The chorale melody is artfully concealed within flowing soprano figuration.
// Four voices on manuals only, until the final phrase where pedals enter.
// Key: F major. Time: 4/4. Tempo: Adagio, molto dolce.
// Melody incipit (scale degrees in F): 5-5-5-6-5  5-3-4-3-2  1-7-1-5-5
// = C-C-C-D-C  C-A-Bb-A-G  F-E-F-C-C
// ============================================================

const PIECE_BRAHMS_ROSE = {
    title: "Es ist ein Ros' entsprungen",
    composer: "Johannes Brahms",
    catalog: "Op. 122/8",
    key: "F major",
    tempo: 52,
    registration: {
        great: [],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8'],
        choir: [],
        pedal: ['pd-subbass32']
    },
    events: [
        // ===== PHRASE 1 (mm. 1-4): "Es ist ein Ros entsprungen" =====
        // Chorale melody hidden in flowing soprano, 4 voices on swell
        // Soprano: C5 flowing figuration embedding the chorale
        // Alto: inner voice, Tenor: inner voice, Bass: manual bass

        // m.1 beat 1: pickup into C5 (chorale tone 5)
        { t: 0, div: 'swell', midi: 72, dur: 2.0, vel: 0.42 },    // C5 soprano
        { t: 0, div: 'swell', midi: 65, dur: 2.0, vel: 0.35 },    // F4 alto
        { t: 0, div: 'swell', midi: 60, dur: 2.0, vel: 0.33 },    // C4 tenor
        { t: 0, div: 'swell', midi: 53, dur: 2.0, vel: 0.38 },    // F3 bass

        // m.1 beat 3: C5 sustained (repeated chorale tone)
        { t: 2, div: 'swell', midi: 72, dur: 1.8, vel: 0.43 },    // C5
        { t: 2, div: 'swell', midi: 67, dur: 1.8, vel: 0.35 },    // G4 alto
        { t: 2, div: 'swell', midi: 60, dur: 1.8, vel: 0.33 },    // C4
        { t: 2, div: 'swell', midi: 52, dur: 1.8, vel: 0.37 },    // E3

        // m.2: chorale tone D5 (6th degree) with flowing inner parts
        { t: 3.85, div: 'swell', midi: 74, dur: 2.0, vel: 0.44 },  // D5 soprano
        { t: 3.85, div: 'swell', midi: 69, dur: 2.0, vel: 0.36 },  // A4 alto
        { t: 3.85, div: 'swell', midi: 62, dur: 2.0, vel: 0.33 },  // D4 tenor
        { t: 3.85, div: 'swell', midi: 50, dur: 2.0, vel: 0.38 },  // D3 bass

        // m.2 beat 3: C5 (back to 5th)
        { t: 5.85, div: 'swell', midi: 72, dur: 2.0, vel: 0.43 },  // C5
        { t: 5.85, div: 'swell', midi: 67, dur: 2.0, vel: 0.35 },  // G4
        { t: 5.85, div: 'swell', midi: 60, dur: 2.0, vel: 0.33 },  // C4
        { t: 5.85, div: 'swell', midi: 48, dur: 2.0, vel: 0.37 },  // C3

        // Flowing eighth-note figuration in soprano between chorale tones
        { t: 7.0, div: 'swell', midi: 71, dur: 0.45, vel: 0.38 },  // B4
        { t: 7.5, div: 'swell', midi: 72, dur: 0.45, vel: 0.40 },  // C5

        // m.3: A4 then Bb4 (3rd then 4th) - "aus einer Wurzel zart"
        { t: 7.85, div: 'swell', midi: 69, dur: 2.0, vel: 0.44 },  // A4 soprano
        { t: 7.85, div: 'swell', midi: 65, dur: 2.0, vel: 0.36 },  // F4 alto
        { t: 7.85, div: 'swell', midi: 60, dur: 2.0, vel: 0.33 },  // C4 tenor
        { t: 7.85, div: 'swell', midi: 53, dur: 2.0, vel: 0.38 },  // F3 bass

        { t: 9.85, div: 'swell', midi: 70, dur: 2.0, vel: 0.43 },  // Bb4
        { t: 9.85, div: 'swell', midi: 65, dur: 2.0, vel: 0.35 },  // F4
        { t: 9.85, div: 'swell', midi: 58, dur: 2.0, vel: 0.33 },  // Bb3
        { t: 9.85, div: 'swell', midi: 50, dur: 2.0, vel: 0.37 },  // D3

        // m.4: A4 - G4 - fermata on F4 (cadence to tonic)
        { t: 11.85, div: 'swell', midi: 69, dur: 1.5, vel: 0.42 }, // A4
        { t: 11.85, div: 'swell', midi: 65, dur: 1.5, vel: 0.35 }, // F4
        { t: 11.85, div: 'swell', midi: 60, dur: 1.5, vel: 0.33 }, // C4
        { t: 11.85, div: 'swell', midi: 53, dur: 1.5, vel: 0.38 }, // F3

        { t: 13.35, div: 'swell', midi: 67, dur: 1.5, vel: 0.41 }, // G4
        { t: 13.35, div: 'swell', midi: 64, dur: 1.5, vel: 0.34 }, // E4
        { t: 13.35, div: 'swell', midi: 60, dur: 1.5, vel: 0.33 }, // C4
        { t: 13.35, div: 'swell', midi: 48, dur: 1.5, vel: 0.37 }, // C3

        // Half cadence, fermata
        { t: 14.85, div: 'swell', midi: 65, dur: 2.5, vel: 0.44 }, // F4 soprano fermata
        { t: 14.85, div: 'swell', midi: 60, dur: 2.5, vel: 0.36 }, // C4
        { t: 14.85, div: 'swell', midi: 57, dur: 2.5, vel: 0.33 }, // A3
        { t: 14.85, div: 'swell', midi: 53, dur: 2.5, vel: 0.38 }, // F3

        // Flowing eighth-note ornament bridging to phrase 2
        { t: 16.0, div: 'swell', midi: 65, dur: 0.35, vel: 0.36 }, // F4 bridge
        { t: 16.4, div: 'swell', midi: 67, dur: 0.35, vel: 0.37 }, // G4
        { t: 16.8, div: 'swell', midi: 69, dur: 0.35, vel: 0.38 }, // A4
        { t: 17.15, div: 'swell', midi: 70, dur: 0.35, vel: 0.39 }, // Bb4

        // ===== PHRASE 2 (mm. 5-8): Repeat of phrase 1 (bar form A section) =====
        // Same melody, slightly different inner voices
        { t: 17.5, div: 'swell', midi: 72, dur: 2.0, vel: 0.42 },  // C5
        { t: 17.5, div: 'swell', midi: 67, dur: 2.0, vel: 0.35 },  // G4
        { t: 17.5, div: 'swell', midi: 60, dur: 2.0, vel: 0.33 },  // C4
        { t: 17.5, div: 'swell', midi: 53, dur: 2.0, vel: 0.38 },  // F3

        { t: 19.5, div: 'swell', midi: 72, dur: 1.8, vel: 0.43 },  // C5
        { t: 19.5, div: 'swell', midi: 65, dur: 1.8, vel: 0.35 },  // F4
        { t: 19.5, div: 'swell', midi: 60, dur: 1.8, vel: 0.33 },  // C4
        { t: 19.5, div: 'swell', midi: 52, dur: 1.8, vel: 0.37 },  // E3

        { t: 21.35, div: 'swell', midi: 74, dur: 2.0, vel: 0.44 }, // D5
        { t: 21.35, div: 'swell', midi: 69, dur: 2.0, vel: 0.36 }, // A4
        { t: 21.35, div: 'swell', midi: 62, dur: 2.0, vel: 0.33 }, // D4
        { t: 21.35, div: 'swell', midi: 50, dur: 2.0, vel: 0.38 }, // D3

        { t: 23.35, div: 'swell', midi: 72, dur: 2.0, vel: 0.43 }, // C5
        { t: 23.35, div: 'swell', midi: 67, dur: 2.0, vel: 0.35 }, // G4
        { t: 23.35, div: 'swell', midi: 60, dur: 2.0, vel: 0.33 }, // C4
        { t: 23.35, div: 'swell', midi: 48, dur: 2.0, vel: 0.37 }, // C3

        // flowing figuration
        { t: 24.5, div: 'swell', midi: 71, dur: 0.4, vel: 0.38 },  // B4
        { t: 25.0, div: 'swell', midi: 72, dur: 0.4, vel: 0.40 },  // C5

        { t: 25.35, div: 'swell', midi: 69, dur: 2.0, vel: 0.44 }, // A4
        { t: 25.35, div: 'swell', midi: 65, dur: 2.0, vel: 0.36 }, // F4
        { t: 25.35, div: 'swell', midi: 60, dur: 2.0, vel: 0.33 }, // C4
        { t: 25.35, div: 'swell', midi: 53, dur: 2.0, vel: 0.38 }, // F3

        { t: 27.35, div: 'swell', midi: 70, dur: 2.0, vel: 0.43 }, // Bb4
        { t: 27.35, div: 'swell', midi: 67, dur: 2.0, vel: 0.35 }, // G4
        { t: 27.35, div: 'swell', midi: 58, dur: 2.0, vel: 0.33 }, // Bb3
        { t: 27.35, div: 'swell', midi: 50, dur: 2.0, vel: 0.37 }, // D3

        { t: 29.35, div: 'swell', midi: 69, dur: 1.5, vel: 0.42 }, // A4
        { t: 29.35, div: 'swell', midi: 65, dur: 1.5, vel: 0.35 }, // F4
        { t: 29.35, div: 'swell', midi: 60, dur: 1.5, vel: 0.33 }, // C4
        { t: 29.35, div: 'swell', midi: 53, dur: 1.5, vel: 0.38 }, // F3

        { t: 30.85, div: 'swell', midi: 67, dur: 1.5, vel: 0.41 }, // G4
        { t: 30.85, div: 'swell', midi: 64, dur: 1.5, vel: 0.34 }, // E4
        { t: 30.85, div: 'swell', midi: 60, dur: 1.5, vel: 0.33 }, // C4
        { t: 30.85, div: 'swell', midi: 48, dur: 1.5, vel: 0.37 }, // C3

        { t: 32.35, div: 'swell', midi: 65, dur: 2.5, vel: 0.44 }, // F4 fermata
        { t: 32.35, div: 'swell', midi: 60, dur: 2.5, vel: 0.36 }, // C4
        { t: 32.35, div: 'swell', midi: 57, dur: 2.5, vel: 0.33 }, // A3
        { t: 32.35, div: 'swell', midi: 53, dur: 2.5, vel: 0.38 }, // F3

        // ===== PHRASE 3 (mm. 9-12): B section - "die Propheten" =====
        // New melodic material: A4-Bb4-C5 ascending
        { t: 35.0, div: 'swell', midi: 69, dur: 1.5, vel: 0.44 },  // A4
        { t: 35.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.36 },  // F4
        { t: 35.0, div: 'swell', midi: 60, dur: 1.5, vel: 0.33 },  // C4
        { t: 35.0, div: 'swell', midi: 53, dur: 1.5, vel: 0.38 },  // F3

        { t: 36.5, div: 'swell', midi: 70, dur: 1.5, vel: 0.45 },  // Bb4
        { t: 36.5, div: 'swell', midi: 65, dur: 1.5, vel: 0.36 },  // F4
        { t: 36.5, div: 'swell', midi: 62, dur: 1.5, vel: 0.33 },  // D4
        { t: 36.5, div: 'swell', midi: 50, dur: 1.5, vel: 0.38 },  // D3

        { t: 38.0, div: 'swell', midi: 72, dur: 2.0, vel: 0.46 },  // C5
        { t: 38.0, div: 'swell', midi: 67, dur: 2.0, vel: 0.37 },  // G4
        { t: 38.0, div: 'swell', midi: 64, dur: 2.0, vel: 0.34 },  // E4
        { t: 38.0, div: 'swell', midi: 48, dur: 2.0, vel: 0.38 },  // C3

        // m.10: Bb4 - A4 descending
        { t: 40.0, div: 'swell', midi: 70, dur: 1.5, vel: 0.44 },  // Bb4
        { t: 40.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.36 },  // F4
        { t: 40.0, div: 'swell', midi: 62, dur: 1.5, vel: 0.33 },  // D4
        { t: 40.0, div: 'swell', midi: 50, dur: 1.5, vel: 0.37 },  // D3

        { t: 41.5, div: 'swell', midi: 69, dur: 2.0, vel: 0.43 },  // A4
        { t: 41.5, div: 'swell', midi: 65, dur: 2.0, vel: 0.35 },  // F4
        { t: 41.5, div: 'swell', midi: 60, dur: 2.0, vel: 0.33 },  // C4
        { t: 41.5, div: 'swell', midi: 53, dur: 2.0, vel: 0.38 },  // F3

        // Flowing ornamental notes
        { t: 42.7, div: 'swell', midi: 67, dur: 0.4, vel: 0.37 },  // G4
        { t: 43.1, div: 'swell', midi: 69, dur: 0.4, vel: 0.39 },  // A4

        // m.11: G4 (2nd degree) cadential motion
        { t: 43.5, div: 'swell', midi: 67, dur: 2.0, vel: 0.44 },  // G4
        { t: 43.5, div: 'swell', midi: 64, dur: 2.0, vel: 0.36 },  // E4
        { t: 43.5, div: 'swell', midi: 60, dur: 2.0, vel: 0.33 },  // C4
        { t: 43.5, div: 'swell', midi: 48, dur: 2.0, vel: 0.37 },  // C3

        // m.12: F4 (tonic) with flowing cadence
        { t: 45.5, div: 'swell', midi: 65, dur: 1.5, vel: 0.43 },  // F4
        { t: 45.5, div: 'swell', midi: 60, dur: 1.5, vel: 0.35 },  // C4
        { t: 45.5, div: 'swell', midi: 57, dur: 1.5, vel: 0.33 },  // A3
        { t: 45.5, div: 'swell', midi: 53, dur: 1.5, vel: 0.38 },  // F3

        // ===== PHRASE 4 (mm. 13-16): Return of A' - concluding phrase =====
        // "wie uns die Alten sungen"
        { t: 47.5, div: 'swell', midi: 72, dur: 2.0, vel: 0.44 },  // C5
        { t: 47.5, div: 'swell', midi: 67, dur: 2.0, vel: 0.36 },  // G4
        { t: 47.5, div: 'swell', midi: 60, dur: 2.0, vel: 0.33 },  // C4
        { t: 47.5, div: 'swell', midi: 53, dur: 2.0, vel: 0.38 },  // F3

        { t: 49.5, div: 'swell', midi: 72, dur: 1.5, vel: 0.43 },  // C5
        { t: 49.5, div: 'swell', midi: 65, dur: 1.5, vel: 0.35 },  // F4
        { t: 49.5, div: 'swell', midi: 60, dur: 1.5, vel: 0.33 },  // C4
        { t: 49.5, div: 'swell', midi: 52, dur: 1.5, vel: 0.37 },  // E3

        // Rising to D5 then C5
        { t: 51.0, div: 'swell', midi: 74, dur: 1.5, vel: 0.45 },  // D5
        { t: 51.0, div: 'swell', midi: 69, dur: 1.5, vel: 0.36 },  // A4
        { t: 51.0, div: 'swell', midi: 62, dur: 1.5, vel: 0.33 },  // D4
        { t: 51.0, div: 'swell', midi: 50, dur: 1.5, vel: 0.38 },  // D3

        { t: 52.5, div: 'swell', midi: 72, dur: 2.0, vel: 0.43 },  // C5
        { t: 52.5, div: 'swell', midi: 67, dur: 2.0, vel: 0.35 },  // G4
        { t: 52.5, div: 'swell', midi: 60, dur: 2.0, vel: 0.33 },  // C4
        { t: 52.5, div: 'swell', midi: 48, dur: 2.0, vel: 0.37 },  // C3

        // m.15: Bb4 - A4 - G4 descending, bringing us to cadence
        { t: 54.5, div: 'swell', midi: 70, dur: 1.5, vel: 0.44 },  // Bb4
        { t: 54.5, div: 'swell', midi: 65, dur: 1.5, vel: 0.36 },  // F4
        { t: 54.5, div: 'swell', midi: 58, dur: 1.5, vel: 0.33 },  // Bb3
        { t: 54.5, div: 'swell', midi: 50, dur: 1.5, vel: 0.37 },  // D3

        { t: 56.0, div: 'swell', midi: 69, dur: 1.5, vel: 0.43 },  // A4
        { t: 56.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.35 },  // F4
        { t: 56.0, div: 'swell', midi: 60, dur: 1.5, vel: 0.33 },  // C4
        { t: 56.0, div: 'swell', midi: 53, dur: 1.5, vel: 0.38 },  // F3

        { t: 57.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.42 },  // G4
        { t: 57.5, div: 'swell', midi: 64, dur: 1.5, vel: 0.34 },  // E4
        { t: 57.5, div: 'swell', midi: 60, dur: 1.5, vel: 0.33 },  // C4
        { t: 57.5, div: 'swell', midi: 48, dur: 1.5, vel: 0.37 },  // C3

        // ===== FINAL PHRASE (mm. 16-18): Forte on Great + Pedals enter =====
        // Last chorale line played forte, pedals provide 6th voice
        { t: 59.0, div: 'swell', midi: 65, dur: 2.0, vel: 0.55 },  // F4 soprano forte
        { t: 59.0, div: 'swell', midi: 60, dur: 2.0, vel: 0.50 },  // C4
        { t: 59.0, div: 'swell', midi: 57, dur: 2.0, vel: 0.48 },  // A3
        { t: 59.0, div: 'swell', midi: 53, dur: 2.0, vel: 0.50 },  // F3
        { t: 59.0, div: 'pedal', midi: 41, dur: 2.0, vel: 0.50 },  // F2 pedal enters!

        // Penultimate: dominant chord
        { t: 61.0, div: 'swell', midi: 67, dur: 1.5, vel: 0.52 },  // G4
        { t: 61.0, div: 'swell', midi: 64, dur: 1.5, vel: 0.48 },  // E4
        { t: 61.0, div: 'swell', midi: 58, dur: 1.5, vel: 0.45 },  // Bb3
        { t: 61.0, div: 'swell', midi: 48, dur: 1.5, vel: 0.48 },  // C3
        { t: 61.0, div: 'pedal', midi: 36, dur: 1.5, vel: 0.48 },  // C2

        // Final F major chord, pianissimo, dying away
        { t: 62.5, div: 'swell', midi: 65, dur: 4.0, vel: 0.40 },  // F4
        { t: 62.5, div: 'swell', midi: 60, dur: 4.0, vel: 0.36 },  // C4
        { t: 62.5, div: 'swell', midi: 57, dur: 4.0, vel: 0.34 },  // A3
        { t: 62.5, div: 'swell', midi: 53, dur: 4.0, vel: 0.36 },  // F3
        { t: 62.5, div: 'pedal', midi: 41, dur: 4.0, vel: 0.38 },  // F2
    ]
};

// ============================================================
// 2. Brahms - O Welt, ich muss dich lassen, Op. 122 No. 3
// ============================================================
// Poignant farewell chorale prelude, deeply personal.
// Based on Heinrich Isaac's "Innsbruck, ich muss dich lassen" melody.
// Five voices: four manual voices + pedal. Characterized by two-note
// stepwise slurs creating a sighing, lamenting effect.
// Key: F major. Time: 4/2 (alla breve) and 3/2. Tempo: Andante.
// Chorale melody in soprano with ornamental slurred pairs.
// ============================================================

const PIECE_BRAHMS_WELT = {
    title: "O Welt, ich muss dich lassen",
    composer: "Johannes Brahms",
    catalog: "Op. 122/3",
    key: "F major",
    tempo: 56,
    registration: {
        great: [],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-tremulant'],
        choir: ['ch-flute8'],
        pedal: ['pd-subbass32']
    },
    events: [
        // ===== PHRASE 1 (mm. 1-4): "O Welt, ich muss dich lassen" =====
        // Isaac/Innsbruck melody: F-F-E-F-G-A-Bb-A-G-F (descending from Bb)
        // Two-note slurs throughout: sighing motif

        // m.1: F4 (tonic), held
        { t: 0, div: 'swell', midi: 65, dur: 3.0, vel: 0.45 },     // F4 soprano
        { t: 0, div: 'swell', midi: 60, dur: 3.0, vel: 0.38 },     // C4 alto
        { t: 0, div: 'swell', midi: 57, dur: 3.0, vel: 0.35 },     // A3 tenor
        { t: 0, div: 'choir', midi: 53, dur: 3.0, vel: 0.36 },     // F3 bass (choir)
        { t: 0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.40 },     // F2 pedal

        // Sighing slur pair: F4-E4
        { t: 3.0, div: 'swell', midi: 65, dur: 1.2, vel: 0.44 },   // F4
        { t: 4.2, div: 'swell', midi: 64, dur: 1.3, vel: 0.40 },   // E4 (sigh down)
        { t: 3.0, div: 'swell', midi: 60, dur: 2.5, vel: 0.37 },   // C4
        { t: 3.0, div: 'swell', midi: 57, dur: 2.5, vel: 0.35 },   // A3
        { t: 3.0, div: 'choir', midi: 52, dur: 2.5, vel: 0.35 },   // E3
        { t: 3.0, div: 'pedal', midi: 36, dur: 2.5, vel: 0.38 },   // C2

        // m.2: F4 (return) then ascending to G4
        { t: 5.5, div: 'swell', midi: 65, dur: 1.5, vel: 0.45 },   // F4
        { t: 5.5, div: 'swell', midi: 60, dur: 3.0, vel: 0.38 },   // C4
        { t: 5.5, div: 'swell', midi: 57, dur: 3.0, vel: 0.35 },   // A3
        { t: 5.5, div: 'choir', midi: 53, dur: 3.0, vel: 0.36 },   // F3
        { t: 5.5, div: 'pedal', midi: 41, dur: 3.0, vel: 0.40 },   // F2

        // Slur: G4-F4
        { t: 7.0, div: 'swell', midi: 67, dur: 1.2, vel: 0.44 },   // G4
        { t: 8.2, div: 'swell', midi: 65, dur: 1.3, vel: 0.40 },   // F4 (sigh)

        // m.3: A4 ascending, Bb4 peak
        { t: 8.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.46 },   // A4
        { t: 8.5, div: 'swell', midi: 65, dur: 3.0, vel: 0.38 },   // F4
        { t: 8.5, div: 'swell', midi: 60, dur: 3.0, vel: 0.35 },   // C4
        { t: 8.5, div: 'choir', midi: 53, dur: 3.0, vel: 0.36 },   // F3
        { t: 8.5, div: 'pedal', midi: 41, dur: 3.0, vel: 0.40 },   // F2

        // Bb4 (peak of phrase) with sighing slur Bb4-A4
        { t: 10.0, div: 'swell', midi: 70, dur: 1.3, vel: 0.48 },  // Bb4 (climax)
        { t: 11.3, div: 'swell', midi: 69, dur: 1.2, vel: 0.43 },  // A4 (sigh)
        { t: 10.0, div: 'swell', midi: 65, dur: 2.5, vel: 0.38 },  // F4
        { t: 10.0, div: 'swell', midi: 62, dur: 2.5, vel: 0.35 },  // D4
        { t: 10.0, div: 'choir', midi: 50, dur: 2.5, vel: 0.36 },  // D3
        { t: 10.0, div: 'pedal', midi: 46, dur: 2.5, vel: 0.40 },  // Bb2

        // m.4: G4-F4 final descent, fermata
        { t: 12.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.44 },  // G4
        { t: 12.5, div: 'swell', midi: 64, dur: 1.5, vel: 0.37 },  // E4
        { t: 12.5, div: 'swell', midi: 60, dur: 1.5, vel: 0.35 },  // C4
        { t: 12.5, div: 'choir', midi: 48, dur: 1.5, vel: 0.36 },  // C3
        { t: 12.5, div: 'pedal', midi: 36, dur: 1.5, vel: 0.38 },  // C2

        // F4 fermata (half cadence on tonic)
        { t: 14.0, div: 'swell', midi: 65, dur: 3.0, vel: 0.46 },  // F4
        { t: 14.0, div: 'swell', midi: 60, dur: 3.0, vel: 0.38 },  // C4
        { t: 14.0, div: 'swell', midi: 57, dur: 3.0, vel: 0.35 },  // A3
        { t: 14.0, div: 'choir', midi: 53, dur: 3.0, vel: 0.36 },  // F3
        { t: 14.0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.42 },  // F2

        // Inner voice ornamental slurs bridging phrases
        { t: 15.5, div: 'swell', midi: 60, dur: 0.6, vel: 0.34 },  // C4 alto (ornament)
        { t: 16.1, div: 'swell', midi: 62, dur: 0.6, vel: 0.35 },  // D4
        { t: 16.7, div: 'swell', midi: 60, dur: 0.6, vel: 0.33 },  // C4 (sigh back)
        { t: 15.5, div: 'choir', midi: 55, dur: 0.6, vel: 0.33 },  // G3 tenor slur
        { t: 16.1, div: 'choir', midi: 53, dur: 0.6, vel: 0.32 },  // F3
        { t: 16.7, div: 'choir', midi: 55, dur: 0.6, vel: 0.33 },  // G3

        // ===== PHRASE 2 (mm. 5-8): "ich fahr dahin mein Strassen" =====
        // Rising then falling: A4-Bb4-C5 then down
        { t: 17.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.45 },  // A4
        { t: 17.5, div: 'swell', midi: 65, dur: 3.0, vel: 0.38 },  // F4
        { t: 17.5, div: 'swell', midi: 60, dur: 3.0, vel: 0.35 },  // C4
        { t: 17.5, div: 'choir', midi: 53, dur: 3.0, vel: 0.36 },  // F3
        { t: 17.5, div: 'pedal', midi: 41, dur: 3.0, vel: 0.40 },  // F2

        // Slur: Bb4-A4
        { t: 19.0, div: 'swell', midi: 70, dur: 1.2, vel: 0.47 },  // Bb4
        { t: 20.2, div: 'swell', midi: 69, dur: 1.3, vel: 0.42 },  // A4 (sigh)
        { t: 19.0, div: 'swell', midi: 65, dur: 2.5, vel: 0.37 },  // F4
        { t: 19.0, div: 'swell', midi: 62, dur: 2.5, vel: 0.35 },  // D4
        { t: 19.0, div: 'choir', midi: 50, dur: 2.5, vel: 0.36 },  // D3
        { t: 19.0, div: 'pedal', midi: 46, dur: 2.5, vel: 0.40 },  // Bb2

        // m.6: C5 (high point) - emotional peak
        { t: 21.5, div: 'swell', midi: 72, dur: 2.0, vel: 0.50 },  // C5 (peak)
        { t: 21.5, div: 'swell', midi: 67, dur: 2.0, vel: 0.40 },  // G4
        { t: 21.5, div: 'swell', midi: 64, dur: 2.0, vel: 0.37 },  // E4
        { t: 21.5, div: 'choir', midi: 48, dur: 2.0, vel: 0.38 },  // C3
        { t: 21.5, div: 'pedal', midi: 36, dur: 2.0, vel: 0.42 },  // C2

        // Slur: C5-Bb4 then A4
        { t: 23.5, div: 'swell', midi: 70, dur: 1.5, vel: 0.45 },  // Bb4
        { t: 23.5, div: 'swell', midi: 65, dur: 3.0, vel: 0.38 },  // F4
        { t: 23.5, div: 'swell', midi: 62, dur: 3.0, vel: 0.35 },  // D4
        { t: 23.5, div: 'choir', midi: 50, dur: 3.0, vel: 0.36 },  // D3
        { t: 23.5, div: 'pedal', midi: 46, dur: 3.0, vel: 0.40 },  // Bb2

        { t: 25.0, div: 'swell', midi: 69, dur: 1.5, vel: 0.43 },  // A4

        // m.7-8: G4-F4 descent to cadence
        { t: 26.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.44 },  // G4
        { t: 26.5, div: 'swell', midi: 64, dur: 1.5, vel: 0.37 },  // E4
        { t: 26.5, div: 'swell', midi: 60, dur: 1.5, vel: 0.35 },  // C4
        { t: 26.5, div: 'choir', midi: 48, dur: 1.5, vel: 0.36 },  // C3
        { t: 26.5, div: 'pedal', midi: 36, dur: 1.5, vel: 0.38 },  // C2

        // F4 fermata - perfect authentic cadence
        { t: 28.0, div: 'swell', midi: 65, dur: 3.0, vel: 0.46 },  // F4
        { t: 28.0, div: 'swell', midi: 60, dur: 3.0, vel: 0.38 },  // C4
        { t: 28.0, div: 'swell', midi: 57, dur: 3.0, vel: 0.35 },  // A3
        { t: 28.0, div: 'choir', midi: 53, dur: 3.0, vel: 0.36 },  // F3
        { t: 28.0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.42 },  // F2

        // Bridging ornament: tenor slurs between phrases
        { t: 29.5, div: 'swell', midi: 57, dur: 0.5, vel: 0.33 },  // A3 (ornament)
        { t: 30.0, div: 'swell', midi: 58, dur: 0.5, vel: 0.34 },  // Bb3
        { t: 30.5, div: 'swell', midi: 60, dur: 0.5, vel: 0.35 },  // C4
        { t: 31.0, div: 'swell', midi: 62, dur: 0.5, vel: 0.36 },  // D4 (leading in)

        // ===== PHRASE 3 (mm. 9-12): "in's ewig Vaterland" =====
        // More intense, moving toward Dm then back to F
        { t: 31.5, div: 'swell', midi: 69, dur: 2.0, vel: 0.48 },  // A4
        { t: 31.5, div: 'swell', midi: 65, dur: 2.0, vel: 0.40 },  // F4
        { t: 31.5, div: 'swell', midi: 62, dur: 2.0, vel: 0.37 },  // D4
        { t: 31.5, div: 'choir', midi: 50, dur: 2.0, vel: 0.38 },  // D3
        { t: 31.5, div: 'pedal', midi: 38, dur: 2.0, vel: 0.42 },  // D2

        // Slur: A4-G4
        { t: 33.5, div: 'swell', midi: 69, dur: 1.2, vel: 0.46 },  // A4
        { t: 34.7, div: 'swell', midi: 67, dur: 1.3, vel: 0.42 },  // G4 (sigh)
        { t: 33.5, div: 'swell', midi: 64, dur: 2.5, vel: 0.38 },  // E4
        { t: 33.5, div: 'swell', midi: 60, dur: 2.5, vel: 0.35 },  // C4
        { t: 33.5, div: 'choir', midi: 48, dur: 2.5, vel: 0.36 },  // C3
        { t: 33.5, div: 'pedal', midi: 36, dur: 2.5, vel: 0.40 },  // C2

        // m.10: F4, rising again
        { t: 36.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.45 },  // F4
        { t: 36.0, div: 'swell', midi: 60, dur: 3.0, vel: 0.38 },  // C4
        { t: 36.0, div: 'swell', midi: 57, dur: 3.0, vel: 0.35 },  // A3
        { t: 36.0, div: 'choir', midi: 53, dur: 3.0, vel: 0.36 },  // F3
        { t: 36.0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.40 },  // F2

        // Slur: G4-F4
        { t: 37.5, div: 'swell', midi: 67, dur: 1.2, vel: 0.44 },  // G4
        { t: 38.7, div: 'swell', midi: 65, dur: 1.3, vel: 0.40 },  // F4 (sigh)

        // m.11: Bb4 to A4 (subdominant coloring)
        { t: 39.0, div: 'swell', midi: 70, dur: 1.5, vel: 0.47 },  // Bb4
        { t: 39.0, div: 'swell', midi: 65, dur: 3.0, vel: 0.38 },  // F4
        { t: 39.0, div: 'swell', midi: 62, dur: 3.0, vel: 0.35 },  // D4
        { t: 39.0, div: 'choir', midi: 58, dur: 3.0, vel: 0.36 },  // Bb3
        { t: 39.0, div: 'pedal', midi: 46, dur: 3.0, vel: 0.40 },  // Bb2

        { t: 40.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.44 },  // A4
        { t: 40.5, div: 'swell', midi: 65, dur: 1.5, vel: 0.37 },  // F4
        { t: 40.5, div: 'swell', midi: 60, dur: 1.5, vel: 0.35 },  // C4
        { t: 40.5, div: 'choir', midi: 53, dur: 1.5, vel: 0.36 },  // F3
        { t: 40.5, div: 'pedal', midi: 41, dur: 1.5, vel: 0.38 },  // F2

        // ===== PHRASE 4 (mm. 13-16): Final phrase - "mein Geist" =====
        // Gentle final descent, extremely quiet ending

        // Ornamental inner voice motion (sighing slurs in alto)
        { t: 42.0, div: 'swell', midi: 64, dur: 0.5, vel: 0.36 },  // E4 (alto ornament)
        { t: 42.5, div: 'swell', midi: 67, dur: 2.0, vel: 0.44 },  // G4
        { t: 42.5, div: 'swell', midi: 64, dur: 2.0, vel: 0.37 },  // E4
        { t: 42.5, div: 'swell', midi: 60, dur: 2.0, vel: 0.35 },  // C4
        { t: 42.5, div: 'choir', midi: 48, dur: 2.0, vel: 0.36 },  // C3
        { t: 42.5, div: 'pedal', midi: 36, dur: 2.0, vel: 0.38 },  // C2

        // Slur pair: G4-F#4 (chromatic sigh, very Brahms)
        { t: 44.5, div: 'swell', midi: 67, dur: 1.0, vel: 0.42 },  // G4
        { t: 45.5, div: 'swell', midi: 66, dur: 0.5, vel: 0.39 },  // F#4 (chromatic!)
        { t: 46.0, div: 'swell', midi: 65, dur: 1.0, vel: 0.38 },  // F4 (resolution)
        { t: 44.5, div: 'swell', midi: 62, dur: 2.5, vel: 0.36 },  // D4
        { t: 44.5, div: 'swell', midi: 58, dur: 2.5, vel: 0.34 },  // Bb3
        { t: 44.5, div: 'choir', midi: 50, dur: 2.5, vel: 0.35 },  // D3
        { t: 44.5, div: 'pedal', midi: 46, dur: 2.5, vel: 0.38 },  // Bb2

        // Inner voice ornamental motion
        { t: 46.0, div: 'swell', midi: 60, dur: 0.5, vel: 0.34 },  // C4 (tenor passing)
        { t: 46.5, div: 'swell', midi: 59, dur: 0.5, vel: 0.33 },  // B3 (chromatic)

        // m.14: E4 with delicate inner voice slurs
        { t: 47.0, div: 'swell', midi: 64, dur: 1.2, vel: 0.40 },  // E4
        { t: 47.0, div: 'swell', midi: 60, dur: 1.5, vel: 0.35 },  // C4
        { t: 47.0, div: 'swell', midi: 55, dur: 1.5, vel: 0.33 },  // G3
        { t: 47.0, div: 'choir', midi: 48, dur: 1.5, vel: 0.34 },  // C3
        { t: 47.0, div: 'pedal', midi: 36, dur: 1.5, vel: 0.36 },  // C2

        // Slur: E4-D4 in soprano (final sigh)
        { t: 48.2, div: 'swell', midi: 62, dur: 0.8, vel: 0.37 },  // D4
        { t: 48.2, div: 'swell', midi: 58, dur: 0.8, vel: 0.34 },  // Bb3
        { t: 48.2, div: 'choir', midi: 50, dur: 0.8, vel: 0.33 },  // D3
        { t: 48.2, div: 'pedal', midi: 46, dur: 0.8, vel: 0.35 },  // Bb2

        // m.15: C4-D4 (leading back to tonic approach)
        { t: 49.0, div: 'swell', midi: 60, dur: 1.0, vel: 0.38 },  // C4
        { t: 49.0, div: 'swell', midi: 57, dur: 1.0, vel: 0.34 },  // A3
        { t: 49.0, div: 'choir', midi: 48, dur: 1.0, vel: 0.33 },  // C3
        { t: 49.0, div: 'pedal', midi: 36, dur: 1.0, vel: 0.36 },  // C2

        // Slur pair in alto: A3-Bb3
        { t: 50.0, div: 'swell', midi: 62, dur: 1.0, vel: 0.39 },  // D4
        { t: 50.0, div: 'swell', midi: 58, dur: 0.8, vel: 0.34 },  // Bb3
        { t: 50.8, div: 'swell', midi: 57, dur: 0.7, vel: 0.33 },  // A3 (sigh)
        { t: 50.0, div: 'choir', midi: 50, dur: 1.5, vel: 0.34 },  // D3
        { t: 50.0, div: 'pedal', midi: 46, dur: 1.5, vel: 0.36 },  // Bb2

        // m.16: Final approach - E4 leading tone
        { t: 51.5, div: 'swell', midi: 64, dur: 1.2, vel: 0.40 },  // E4
        { t: 51.5, div: 'swell', midi: 60, dur: 1.2, vel: 0.35 },  // C4
        { t: 51.5, div: 'swell', midi: 55, dur: 1.2, vel: 0.33 },  // G3
        { t: 51.5, div: 'choir', midi: 48, dur: 1.2, vel: 0.34 },  // C3
        { t: 51.5, div: 'pedal', midi: 36, dur: 1.2, vel: 0.36 },  // C2

        // Final F major chord - morendo (dying away), very long
        { t: 52.7, div: 'swell', midi: 65, dur: 6.0, vel: 0.38 },  // F4
        { t: 52.7, div: 'swell', midi: 60, dur: 6.0, vel: 0.34 },  // C4
        { t: 52.7, div: 'swell', midi: 57, dur: 6.0, vel: 0.32 },  // A3
        { t: 52.7, div: 'choir', midi: 53, dur: 6.0, vel: 0.33 },  // F3
        { t: 52.7, div: 'pedal', midi: 41, dur: 6.0, vel: 0.35 },  // F2
    ]
};

// ============================================================
// 3. Mendelssohn - Organ Sonata No. 3 in A major, Op. 65/3
// ============================================================
// First movement: Con moto maestoso, brilliant and festive.
// Based on Luther's chorale "Aus tiefer Not schrei ich zu dir."
// Opens with powerful fortissimo chords in A major, then a 4-part fugue
// in A minor on the subject E-F-D-G# (bold anacrusis). The chorale
// enters as cantus firmus in the pedal against the fugue.
// Key: A major / A minor. Time: 4/4.
// ============================================================

const PIECE_MENDELSSOHN_SONATA3 = {
    title: "Organ Sonata No. 3 in A major",
    composer: "Felix Mendelssohn",
    catalog: "Op. 65/3",
    key: "A major",
    tempo: 108,
    tempoChanges: [
        { t: 0, tempo: 108, label: "Con moto maestoso" },
        { t: 72, tempo: 72, label: "Andante tranquillo" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4'],
        choir: ['ch-flute8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ===== SECTION 1: Con moto maestoso - A major, fortissimo =====

        // m.1: Opening A major chord - powerful, festive
        { t: 0, div: 'great', midi: 69, dur: 1.5, vel: 0.95 },     // A4
        { t: 0, div: 'great', midi: 64, dur: 1.5, vel: 0.93 },     // E4
        { t: 0, div: 'great', midi: 61, dur: 1.5, vel: 0.91 },     // C#4
        { t: 0, div: 'great', midi: 57, dur: 1.5, vel: 0.90 },     // A3
        { t: 0, div: 'pedal', midi: 45, dur: 1.5, vel: 0.92 },     // A2

        // Beat 3: E major chord (dominant)
        { t: 1.5, div: 'great', midi: 71, dur: 1.0, vel: 0.93 },   // B4
        { t: 1.5, div: 'great', midi: 68, dur: 1.0, vel: 0.91 },   // G#4
        { t: 1.5, div: 'great', midi: 64, dur: 1.0, vel: 0.89 },   // E4
        { t: 1.5, div: 'pedal', midi: 40, dur: 1.0, vel: 0.90 },   // E2

        // Beat 4: A major resolution
        { t: 2.5, div: 'great', midi: 69, dur: 1.5, vel: 0.95 },   // A4
        { t: 2.5, div: 'great', midi: 64, dur: 1.5, vel: 0.93 },   // E4
        { t: 2.5, div: 'great', midi: 61, dur: 1.5, vel: 0.91 },   // C#4
        { t: 2.5, div: 'pedal', midi: 45, dur: 1.5, vel: 0.92 },   // A2

        // m.2: D major (IV) then E major (V)
        { t: 4.0, div: 'great', midi: 74, dur: 1.5, vel: 0.94 },   // D5
        { t: 4.0, div: 'great', midi: 69, dur: 1.5, vel: 0.92 },   // A4
        { t: 4.0, div: 'great', midi: 66, dur: 1.5, vel: 0.90 },   // F#4
        { t: 4.0, div: 'great', midi: 62, dur: 1.5, vel: 0.88 },   // D4
        { t: 4.0, div: 'pedal', midi: 38, dur: 1.5, vel: 0.90 },   // D2

        { t: 5.5, div: 'great', midi: 76, dur: 1.0, vel: 0.95 },   // E5
        { t: 5.5, div: 'great', midi: 71, dur: 1.0, vel: 0.93 },   // B4
        { t: 5.5, div: 'great', midi: 68, dur: 1.0, vel: 0.91 },   // G#4
        { t: 5.5, div: 'great', midi: 64, dur: 1.0, vel: 0.89 },   // E4
        { t: 5.5, div: 'pedal', midi: 40, dur: 1.0, vel: 0.92 },   // E2

        // m.2 beat 4: Big A major cadence
        { t: 6.5, div: 'great', midi: 76, dur: 1.5, vel: 0.96 },   // E5
        { t: 6.5, div: 'great', midi: 73, dur: 1.5, vel: 0.94 },   // C#5
        { t: 6.5, div: 'great', midi: 69, dur: 1.5, vel: 0.92 },   // A4
        { t: 6.5, div: 'great', midi: 64, dur: 1.5, vel: 0.90 },   // E4
        { t: 6.5, div: 'pedal', midi: 45, dur: 1.5, vel: 0.93 },   // A2

        // m.3-4: Repeat of opening with fuller texture
        { t: 8.0, div: 'great', midi: 69, dur: 1.5, vel: 0.95 },   // A4
        { t: 8.0, div: 'great', midi: 64, dur: 1.5, vel: 0.93 },   // E4
        { t: 8.0, div: 'great', midi: 61, dur: 1.5, vel: 0.91 },   // C#4
        { t: 8.0, div: 'great', midi: 57, dur: 1.5, vel: 0.90 },   // A3
        { t: 8.0, div: 'pedal', midi: 45, dur: 1.5, vel: 0.92 },   // A2
        { t: 8.0, div: 'pedal', midi: 33, dur: 1.5, vel: 0.88 },   // A1 (16' doubling)

        { t: 9.5, div: 'great', midi: 73, dur: 1.0, vel: 0.94 },   // C#5
        { t: 9.5, div: 'great', midi: 69, dur: 1.0, vel: 0.92 },   // A4
        { t: 9.5, div: 'great', midi: 64, dur: 1.0, vel: 0.90 },   // E4
        { t: 9.5, div: 'pedal', midi: 40, dur: 1.0, vel: 0.90 },   // E2

        { t: 10.5, div: 'great', midi: 74, dur: 1.5, vel: 0.96 },  // D5
        { t: 10.5, div: 'great', midi: 69, dur: 1.5, vel: 0.94 },  // A4
        { t: 10.5, div: 'great', midi: 66, dur: 1.5, vel: 0.92 },  // F#4
        { t: 10.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.90 },  // D2

        // m.4: E major with suspended 4th resolving
        { t: 12.0, div: 'great', midi: 76, dur: 2.0, vel: 0.96 },  // E5
        { t: 12.0, div: 'great', midi: 71, dur: 2.0, vel: 0.93 },  // B4
        { t: 12.0, div: 'great', midi: 68, dur: 2.0, vel: 0.91 },  // G#4
        { t: 12.0, div: 'pedal', midi: 40, dur: 2.0, vel: 0.92 },  // E2

        // Cadential resolution to A
        { t: 14.0, div: 'great', midi: 76, dur: 2.0, vel: 0.95 },  // E5
        { t: 14.0, div: 'great', midi: 73, dur: 2.0, vel: 0.93 },  // C#5
        { t: 14.0, div: 'great', midi: 69, dur: 2.0, vel: 0.91 },  // A4
        { t: 14.0, div: 'great', midi: 64, dur: 2.0, vel: 0.89 },  // E4
        { t: 14.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.92 },  // A2

        // ===== SECTION 2 (mm. 5-16): Fugue in A minor =====
        // Subject: E-F-D-G# (bold anacrusis head-motif)
        // Bass entry first, then tenor, alto, soprano

        // Bass entry: fugue subject
        { t: 16.0, div: 'great', midi: 52, dur: 0.8, vel: 0.78 },  // E3 (anacrusis)
        { t: 16.8, div: 'great', midi: 53, dur: 0.8, vel: 0.80 },  // F3
        { t: 17.6, div: 'great', midi: 50, dur: 0.8, vel: 0.78 },  // D3
        { t: 18.4, div: 'great', midi: 56, dur: 1.2, vel: 0.82 },  // G#3
        { t: 19.6, div: 'great', midi: 57, dur: 1.5, vel: 0.80 },  // A3 (resolution)
        { t: 21.1, div: 'great', midi: 55, dur: 0.7, vel: 0.78 },  // G3
        { t: 21.8, div: 'great', midi: 53, dur: 0.7, vel: 0.76 },  // F3
        { t: 22.5, div: 'great', midi: 52, dur: 1.0, vel: 0.78 },  // E3
        { t: 23.5, div: 'great', midi: 50, dur: 0.8, vel: 0.76 },  // D3
        { t: 24.3, div: 'great', midi: 52, dur: 1.2, vel: 0.78 },  // E3

        // Tenor entry: fugue subject at 5th (B-C-A-D#)
        { t: 25.5, div: 'great', midi: 59, dur: 0.8, vel: 0.80 },  // B3
        { t: 26.3, div: 'great', midi: 60, dur: 0.8, vel: 0.82 },  // C4
        { t: 27.1, div: 'great', midi: 57, dur: 0.8, vel: 0.80 },  // A3
        { t: 27.9, div: 'great', midi: 63, dur: 1.2, vel: 0.84 },  // D#4/Eb4
        { t: 29.1, div: 'great', midi: 64, dur: 1.5, vel: 0.82 },  // E4

        // Bass countersubject continues
        { t: 25.5, div: 'great', midi: 53, dur: 0.7, vel: 0.72 },  // F3
        { t: 26.2, div: 'great', midi: 52, dur: 0.7, vel: 0.70 },  // E3
        { t: 26.9, div: 'great', midi: 50, dur: 0.7, vel: 0.72 },  // D3
        { t: 27.6, div: 'great', midi: 48, dur: 0.7, vel: 0.70 },  // C3
        { t: 28.3, div: 'great', midi: 50, dur: 0.7, vel: 0.72 },  // D3
        { t: 29.0, div: 'great', midi: 52, dur: 1.0, vel: 0.74 },  // E3

        // Tenor continuation
        { t: 30.6, div: 'great', midi: 62, dur: 0.7, vel: 0.80 },  // D4
        { t: 31.3, div: 'great', midi: 60, dur: 0.7, vel: 0.78 },  // C4
        { t: 32.0, div: 'great', midi: 59, dur: 1.0, vel: 0.80 },  // B3

        // Alto entry: subject at octave (E-F-D-G#)
        { t: 33.0, div: 'swell', midi: 64, dur: 0.8, vel: 0.80 },  // E4
        { t: 33.8, div: 'swell', midi: 65, dur: 0.8, vel: 0.82 },  // F4
        { t: 34.6, div: 'swell', midi: 62, dur: 0.8, vel: 0.80 },  // D4
        { t: 35.4, div: 'swell', midi: 68, dur: 1.2, vel: 0.84 },  // G#4
        { t: 36.6, div: 'swell', midi: 69, dur: 1.5, vel: 0.82 },  // A4

        // Tenor countersubject
        { t: 33.0, div: 'great', midi: 57, dur: 0.7, vel: 0.72 },  // A3
        { t: 33.7, div: 'great', midi: 56, dur: 0.7, vel: 0.70 },  // G#3
        { t: 34.4, div: 'great', midi: 57, dur: 0.7, vel: 0.72 },  // A3
        { t: 35.1, div: 'great', midi: 59, dur: 0.7, vel: 0.70 },  // B3
        { t: 35.8, div: 'great', midi: 60, dur: 1.5, vel: 0.72 },  // C4

        // Bass free counterpoint
        { t: 33.0, div: 'great', midi: 45, dur: 1.5, vel: 0.70 },  // A2
        { t: 34.5, div: 'great', midi: 48, dur: 1.0, vel: 0.72 },  // C3
        { t: 35.5, div: 'great', midi: 50, dur: 1.0, vel: 0.70 },  // D3
        { t: 36.5, div: 'great', midi: 52, dur: 1.5, vel: 0.72 },  // E3

        // Soprano entry: subject (E-F-D-G#) in top voice
        { t: 38.0, div: 'swell', midi: 76, dur: 0.8, vel: 0.85 },  // E5
        { t: 38.8, div: 'swell', midi: 77, dur: 0.8, vel: 0.87 },  // F5
        { t: 39.6, div: 'swell', midi: 74, dur: 0.8, vel: 0.85 },  // D5
        { t: 40.4, div: 'swell', midi: 80, dur: 1.2, vel: 0.88 },  // G#5
        { t: 41.6, div: 'swell', midi: 81, dur: 1.5, vel: 0.86 },  // A5

        // Other voices continue
        { t: 38.0, div: 'swell', midi: 69, dur: 1.5, vel: 0.72 },  // A4 alto
        { t: 39.5, div: 'swell', midi: 67, dur: 1.0, vel: 0.70 },  // G4
        { t: 40.5, div: 'swell', midi: 65, dur: 1.5, vel: 0.72 },  // F4
        { t: 38.0, div: 'great', midi: 57, dur: 1.5, vel: 0.70 },  // A3 tenor
        { t: 39.5, div: 'great', midi: 60, dur: 1.5, vel: 0.72 },  // C4
        { t: 41.0, div: 'great', midi: 59, dur: 1.5, vel: 0.70 },  // B3

        // Pedal: chorale cantus firmus "Aus tiefer Not" enters
        { t: 38.0, div: 'pedal', midi: 45, dur: 3.0, vel: 0.80 },  // A2 (chorale note 1)
        { t: 41.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.78 },  // A2 (repeated)
        { t: 43.0, div: 'pedal', midi: 48, dur: 2.0, vel: 0.80 },  // C3 (chorale note 2)
        { t: 45.0, div: 'pedal', midi: 50, dur: 2.0, vel: 0.82 },  // D3 (chorale note 3)
        { t: 47.0, div: 'pedal', midi: 52, dur: 3.0, vel: 0.80 },  // E3 (chorale note 4)

        // Soprano continuation descending
        { t: 43.0, div: 'swell', midi: 79, dur: 0.7, vel: 0.84 },  // G5
        { t: 43.7, div: 'swell', midi: 77, dur: 0.7, vel: 0.82 },  // F5
        { t: 44.4, div: 'swell', midi: 76, dur: 1.0, vel: 0.84 },  // E5
        { t: 45.4, div: 'swell', midi: 74, dur: 0.7, vel: 0.82 },  // D5
        { t: 46.1, div: 'swell', midi: 76, dur: 1.5, vel: 0.84 },  // E5

        // Alto countersubject
        { t: 43.0, div: 'swell', midi: 65, dur: 1.0, vel: 0.70 },  // F4
        { t: 44.0, div: 'swell', midi: 64, dur: 1.0, vel: 0.72 },  // E4
        { t: 45.0, div: 'swell', midi: 62, dur: 1.0, vel: 0.70 },  // D4
        { t: 46.0, div: 'swell', midi: 64, dur: 1.5, vel: 0.72 },  // E4

        // Tenor free counterpoint
        { t: 43.0, div: 'great', midi: 57, dur: 1.0, vel: 0.68 },  // A3
        { t: 44.0, div: 'great', midi: 56, dur: 1.0, vel: 0.70 },  // G#3
        { t: 45.0, div: 'great', midi: 57, dur: 1.5, vel: 0.68 },  // A3
        { t: 46.5, div: 'great', midi: 59, dur: 1.0, vel: 0.70 },  // B3

        // ===== mm. 13-16: Fugue intensifies, stretto entries =====
        // Subject fragments overlap, building tension

        // Stretto: bass entry
        { t: 48.0, div: 'great', midi: 52, dur: 0.7, vel: 0.82 },  // E3
        { t: 48.7, div: 'great', midi: 53, dur: 0.7, vel: 0.84 },  // F3
        { t: 49.4, div: 'great', midi: 50, dur: 0.7, vel: 0.82 },  // D3
        { t: 50.1, div: 'great', midi: 56, dur: 1.2, vel: 0.86 },  // G#3

        // Tenor entry follows 1 beat later
        { t: 49.0, div: 'great', midi: 59, dur: 0.7, vel: 0.82 },  // B3
        { t: 49.7, div: 'great', midi: 60, dur: 0.7, vel: 0.84 },  // C4
        { t: 50.4, div: 'great', midi: 57, dur: 0.7, vel: 0.82 },  // A3
        { t: 51.1, div: 'great', midi: 63, dur: 1.0, vel: 0.86 },  // Eb4

        // Alto stretto
        { t: 50.0, div: 'swell', midi: 64, dur: 0.7, vel: 0.82 },  // E4
        { t: 50.7, div: 'swell', midi: 65, dur: 0.7, vel: 0.84 },  // F4
        { t: 51.4, div: 'swell', midi: 62, dur: 0.7, vel: 0.82 },  // D4
        { t: 52.1, div: 'swell', midi: 68, dur: 1.0, vel: 0.86 },  // G#4

        // Soprano stretto
        { t: 51.0, div: 'swell', midi: 76, dur: 0.7, vel: 0.86 },  // E5
        { t: 51.7, div: 'swell', midi: 77, dur: 0.7, vel: 0.88 },  // F5
        { t: 52.4, div: 'swell', midi: 74, dur: 0.7, vel: 0.86 },  // D5
        { t: 53.1, div: 'swell', midi: 80, dur: 1.5, vel: 0.90 },  // G#5

        // Pedal chorale continues
        { t: 50.0, div: 'pedal', midi: 50, dur: 2.0, vel: 0.82 },  // D3
        { t: 52.0, div: 'pedal', midi: 48, dur: 2.0, vel: 0.80 },  // C3
        { t: 54.0, div: 'pedal', midi: 45, dur: 3.0, vel: 0.82 },  // A2

        // ===== mm. 17-20: Return of Con moto maestoso, fortissimo =====
        // Interlude paragraph in A major again

        { t: 56.0, div: 'great', midi: 69, dur: 1.5, vel: 0.95 },  // A4
        { t: 56.0, div: 'great', midi: 64, dur: 1.5, vel: 0.93 },  // E4
        { t: 56.0, div: 'great', midi: 61, dur: 1.5, vel: 0.91 },  // C#4
        { t: 56.0, div: 'great', midi: 57, dur: 1.5, vel: 0.90 },  // A3
        { t: 56.0, div: 'pedal', midi: 45, dur: 1.5, vel: 0.92 },  // A2

        { t: 57.5, div: 'great', midi: 71, dur: 1.0, vel: 0.93 },  // B4
        { t: 57.5, div: 'great', midi: 68, dur: 1.0, vel: 0.91 },  // G#4
        { t: 57.5, div: 'great', midi: 64, dur: 1.0, vel: 0.89 },  // E4
        { t: 57.5, div: 'pedal', midi: 40, dur: 1.0, vel: 0.90 },  // E2

        // F#m (vi) color
        { t: 58.5, div: 'great', midi: 73, dur: 1.5, vel: 0.94 },  // C#5
        { t: 58.5, div: 'great', midi: 69, dur: 1.5, vel: 0.92 },  // A4
        { t: 58.5, div: 'great', midi: 66, dur: 1.5, vel: 0.90 },  // F#4
        { t: 58.5, div: 'pedal', midi: 42, dur: 1.5, vel: 0.90 },  // F#2

        // D major
        { t: 60.0, div: 'great', midi: 74, dur: 1.5, vel: 0.95 },  // D5
        { t: 60.0, div: 'great', midi: 69, dur: 1.5, vel: 0.93 },  // A4
        { t: 60.0, div: 'great', midi: 66, dur: 1.5, vel: 0.91 },  // F#4
        { t: 60.0, div: 'pedal', midi: 38, dur: 1.5, vel: 0.92 },  // D2

        // E major dominant
        { t: 61.5, div: 'great', midi: 76, dur: 2.0, vel: 0.96 },  // E5
        { t: 61.5, div: 'great', midi: 71, dur: 2.0, vel: 0.94 },  // B4
        { t: 61.5, div: 'great', midi: 68, dur: 2.0, vel: 0.92 },  // G#4
        { t: 61.5, div: 'pedal', midi: 40, dur: 2.0, vel: 0.92 },  // E2

        // Grand A major resolution
        { t: 63.5, div: 'great', midi: 81, dur: 2.0, vel: 0.97 },  // A5
        { t: 63.5, div: 'great', midi: 76, dur: 2.0, vel: 0.95 },  // E5
        { t: 63.5, div: 'great', midi: 73, dur: 2.0, vel: 0.93 },  // C#5
        { t: 63.5, div: 'great', midi: 69, dur: 2.0, vel: 0.91 },  // A4
        { t: 63.5, div: 'pedal', midi: 45, dur: 2.0, vel: 0.93 },  // A2

        // Transitional passage descending
        { t: 65.5, div: 'great', midi: 76, dur: 0.8, vel: 0.88 },  // E5
        { t: 66.3, div: 'great', midi: 74, dur: 0.8, vel: 0.86 },  // D5
        { t: 67.1, div: 'great', midi: 73, dur: 0.8, vel: 0.88 },  // C#5
        { t: 67.9, div: 'great', midi: 71, dur: 0.8, vel: 0.86 },  // B4
        { t: 68.7, div: 'great', midi: 69, dur: 1.5, vel: 0.88 },  // A4

        // Sustained pedal point transitioning
        { t: 65.5, div: 'pedal', midi: 45, dur: 5.0, vel: 0.85 },  // A2

        // Diminuendo toward Andante
        { t: 70.0, div: 'swell', midi: 69, dur: 2.0, vel: 0.65 },  // A4
        { t: 70.0, div: 'swell', midi: 64, dur: 2.0, vel: 0.60 },  // E4
        { t: 70.0, div: 'swell', midi: 61, dur: 2.0, vel: 0.58 },  // C#4
        { t: 70.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.60 },  // A2

        // ===== SECTION 3: Andante tranquillo, 3/4, piano e dolce =====
        // Gentle epilogue, A major, warm and singing

        { t: 72.0, div: 'swell', midi: 73, dur: 2.0, vel: 0.50 },  // C#5
        { t: 72.0, div: 'swell', midi: 69, dur: 2.0, vel: 0.45 },  // A4
        { t: 72.0, div: 'choir', midi: 64, dur: 2.0, vel: 0.42 },  // E4
        { t: 72.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.45 },  // A2

        { t: 74.0, div: 'swell', midi: 71, dur: 1.5, vel: 0.48 },  // B4
        { t: 74.0, div: 'swell', midi: 68, dur: 1.5, vel: 0.44 },  // G#4
        { t: 74.0, div: 'choir', midi: 64, dur: 1.5, vel: 0.40 },  // E4

        { t: 75.5, div: 'swell', midi: 69, dur: 2.0, vel: 0.50 },  // A4
        { t: 75.5, div: 'swell', midi: 66, dur: 2.0, vel: 0.45 },  // F#4
        { t: 75.5, div: 'choir', midi: 62, dur: 2.0, vel: 0.42 },  // D4
        { t: 75.5, div: 'pedal', midi: 38, dur: 2.0, vel: 0.45 },  // D2

        // Gentle ascending phrase
        { t: 77.5, div: 'swell', midi: 71, dur: 1.5, vel: 0.48 },  // B4
        { t: 77.5, div: 'swell', midi: 68, dur: 1.5, vel: 0.44 },  // G#4
        { t: 77.5, div: 'choir', midi: 64, dur: 1.5, vel: 0.40 },  // E4
        { t: 77.5, div: 'pedal', midi: 40, dur: 1.5, vel: 0.43 },  // E2

        { t: 79.0, div: 'swell', midi: 73, dur: 2.0, vel: 0.50 },  // C#5
        { t: 79.0, div: 'swell', midi: 69, dur: 2.0, vel: 0.45 },  // A4
        { t: 79.0, div: 'choir', midi: 64, dur: 2.0, vel: 0.42 },  // E4
        { t: 79.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.45 },  // A2

        // Descending, tender conclusion
        { t: 81.0, div: 'swell', midi: 71, dur: 1.5, vel: 0.47 },  // B4
        { t: 81.0, div: 'swell', midi: 66, dur: 1.5, vel: 0.43 },  // F#4
        { t: 81.0, div: 'choir', midi: 62, dur: 1.5, vel: 0.40 },  // D4
        { t: 81.0, div: 'pedal', midi: 38, dur: 1.5, vel: 0.43 },  // D2

        { t: 82.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.48 },  // A4
        { t: 82.5, div: 'swell', midi: 64, dur: 1.5, vel: 0.44 },  // E4
        { t: 82.5, div: 'choir', midi: 61, dur: 1.5, vel: 0.40 },  // C#4
        { t: 82.5, div: 'pedal', midi: 45, dur: 1.5, vel: 0.45 },  // A2

        // Final phrase: gently flowing up and down
        { t: 84.0, div: 'swell', midi: 71, dur: 1.0, vel: 0.46 },  // B4
        { t: 85.0, div: 'swell', midi: 73, dur: 1.0, vel: 0.48 },  // C#5
        { t: 86.0, div: 'swell', midi: 71, dur: 1.0, vel: 0.46 },  // B4
        { t: 84.0, div: 'swell', midi: 68, dur: 3.0, vel: 0.43 },  // G#4
        { t: 84.0, div: 'choir', midi: 64, dur: 3.0, vel: 0.40 },  // E4
        { t: 84.0, div: 'pedal', midi: 40, dur: 3.0, vel: 0.43 },  // E2

        // Final A major chord, dying away
        { t: 87.0, div: 'swell', midi: 69, dur: 4.0, vel: 0.42 },  // A4
        { t: 87.0, div: 'swell', midi: 64, dur: 4.0, vel: 0.38 },  // E4
        { t: 87.0, div: 'choir', midi: 61, dur: 4.0, vel: 0.36 },  // C#4
        { t: 87.0, div: 'swell', midi: 57, dur: 4.0, vel: 0.38 },  // A3
        { t: 87.0, div: 'pedal', midi: 45, dur: 4.0, vel: 0.40 },  // A2
    ]
};

// ============================================================
// 4. Reger - Toccata and Fugue in D minor, Op. 129
// ============================================================
// Monumental, chromatic, one of the most demanding organ works.
// Dense textures, full organ, massive pedal passages.
// The toccata features cascading scalar passages and enormous chords.
// The fugue is deeply chromatic with a subject built on half-steps.
// Key: D minor. Time: 4/4. Tempo: Vivace (toccata) / Allegro (fugue).
// ============================================================

const PIECE_REGER_TOCCATA = {
    title: "Toccata and Fugue in D minor",
    composer: "Max Reger",
    catalog: "Op. 129",
    key: "D minor",
    tempo: 126,
    tempoChanges: [
        { t: 0, tempo: 126, label: "Vivace" },
        { t: 44, tempo: 108, label: "Fugue: Allegro" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-clarinet8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== TOCCATA: Vivace - cascading D minor passages =====

        // m.1: Explosive D minor opening - full organ
        { t: 0, div: 'great', midi: 74, dur: 0.3, vel: 0.97 },     // D5
        { t: 0, div: 'great', midi: 69, dur: 0.3, vel: 0.95 },     // A4
        { t: 0, div: 'great', midi: 65, dur: 0.3, vel: 0.93 },     // F4
        { t: 0, div: 'great', midi: 62, dur: 0.3, vel: 0.91 },     // D4
        { t: 0, div: 'pedal', midi: 38, dur: 0.5, vel: 0.95 },     // D2

        // Cascading 16th notes down D minor scale
        { t: 0.3, div: 'great', midi: 72, dur: 0.15, vel: 0.90 },  // C5
        { t: 0.45, div: 'great', midi: 70, dur: 0.15, vel: 0.88 }, // Bb4
        { t: 0.6, div: 'great', midi: 69, dur: 0.15, vel: 0.90 },  // A4
        { t: 0.75, div: 'great', midi: 67, dur: 0.15, vel: 0.88 }, // G4
        { t: 0.9, div: 'great', midi: 65, dur: 0.15, vel: 0.90 },  // F4
        { t: 1.05, div: 'great', midi: 64, dur: 0.15, vel: 0.88 }, // E4
        { t: 1.2, div: 'great', midi: 62, dur: 0.15, vel: 0.90 },  // D4
        { t: 1.35, div: 'great', midi: 61, dur: 0.15, vel: 0.92 }, // C#4 (leading tone)

        // m.1 beat 2: Ascending chromatic run
        { t: 1.5, div: 'great', midi: 62, dur: 0.15, vel: 0.90 },  // D4
        { t: 1.65, div: 'great', midi: 63, dur: 0.15, vel: 0.88 }, // Eb4
        { t: 1.8, div: 'great', midi: 64, dur: 0.15, vel: 0.90 },  // E4
        { t: 1.95, div: 'great', midi: 65, dur: 0.15, vel: 0.88 }, // F4
        { t: 2.1, div: 'great', midi: 66, dur: 0.15, vel: 0.90 },  // F#4
        { t: 2.25, div: 'great', midi: 67, dur: 0.15, vel: 0.88 }, // G4
        { t: 2.4, div: 'great', midi: 68, dur: 0.15, vel: 0.90 },  // Ab4
        { t: 2.55, div: 'great', midi: 69, dur: 0.15, vel: 0.92 }, // A4

        // m.1 beat 3: Massive chord
        { t: 2.7, div: 'great', midi: 74, dur: 0.5, vel: 0.96 },   // D5
        { t: 2.7, div: 'great', midi: 70, dur: 0.5, vel: 0.94 },   // Bb4
        { t: 2.7, div: 'great', midi: 65, dur: 0.5, vel: 0.92 },   // F4
        { t: 2.7, div: 'great', midi: 62, dur: 0.5, vel: 0.90 },   // D4
        { t: 2.7, div: 'pedal', midi: 38, dur: 0.5, vel: 0.94 },   // D2

        // More cascading runs
        { t: 3.2, div: 'great', midi: 74, dur: 0.15, vel: 0.90 },  // D5
        { t: 3.35, div: 'great', midi: 73, dur: 0.15, vel: 0.88 }, // C#5
        { t: 3.5, div: 'great', midi: 72, dur: 0.15, vel: 0.90 },  // C5
        { t: 3.65, div: 'great', midi: 70, dur: 0.15, vel: 0.88 }, // Bb4
        { t: 3.8, div: 'great', midi: 69, dur: 0.15, vel: 0.90 },  // A4
        { t: 3.95, div: 'great', midi: 67, dur: 0.15, vel: 0.88 }, // G4
        { t: 4.1, div: 'great', midi: 65, dur: 0.15, vel: 0.90 },  // F4
        { t: 4.25, div: 'great', midi: 64, dur: 0.30, vel: 0.92 }, // E4

        // m.2: Pedal thunders
        { t: 4.5, div: 'pedal', midi: 38, dur: 0.5, vel: 0.96 },   // D2
        { t: 4.5, div: 'pedal', midi: 26, dur: 0.5, vel: 0.90 },   // D1 (32')

        // Massive double-handed chords: Gm - A7 - Dm
        { t: 4.5, div: 'great', midi: 74, dur: 0.4, vel: 0.95 },   // D5
        { t: 4.5, div: 'great', midi: 70, dur: 0.4, vel: 0.93 },   // Bb4
        { t: 4.5, div: 'great', midi: 67, dur: 0.4, vel: 0.91 },   // G4
        { t: 4.5, div: 'swell', midi: 62, dur: 0.4, vel: 0.89 },   // D4
        { t: 4.5, div: 'swell', midi: 58, dur: 0.4, vel: 0.87 },   // Bb3

        { t: 5.0, div: 'great', midi: 73, dur: 0.4, vel: 0.94 },   // C#5
        { t: 5.0, div: 'great', midi: 69, dur: 0.4, vel: 0.92 },   // A4
        { t: 5.0, div: 'great', midi: 67, dur: 0.4, vel: 0.90 },   // G4
        { t: 5.0, div: 'great', midi: 64, dur: 0.4, vel: 0.88 },   // E4
        { t: 5.0, div: 'pedal', midi: 45, dur: 0.4, vel: 0.92 },   // A2

        // Resolution Dm
        { t: 5.5, div: 'great', midi: 74, dur: 0.5, vel: 0.96 },   // D5
        { t: 5.5, div: 'great', midi: 69, dur: 0.5, vel: 0.94 },   // A4
        { t: 5.5, div: 'great', midi: 65, dur: 0.5, vel: 0.92 },   // F4
        { t: 5.5, div: 'great', midi: 62, dur: 0.5, vel: 0.90 },   // D4
        { t: 5.5, div: 'pedal', midi: 38, dur: 0.5, vel: 0.94 },   // D2

        // m.3: More chromatic cascades - Reger's signature dense writing
        // Ascending chromatic in parallel sixths
        { t: 6.0, div: 'great', midi: 62, dur: 0.15, vel: 0.88 },  // D4
        { t: 6.0, div: 'swell', midi: 53, dur: 0.15, vel: 0.85 },  // F3
        { t: 6.15, div: 'great', midi: 63, dur: 0.15, vel: 0.88 }, // Eb4
        { t: 6.15, div: 'swell', midi: 54, dur: 0.15, vel: 0.85 }, // F#3
        { t: 6.3, div: 'great', midi: 64, dur: 0.15, vel: 0.88 },  // E4
        { t: 6.3, div: 'swell', midi: 55, dur: 0.15, vel: 0.85 },  // G3
        { t: 6.45, div: 'great', midi: 65, dur: 0.15, vel: 0.88 }, // F4
        { t: 6.45, div: 'swell', midi: 56, dur: 0.15, vel: 0.85 }, // G#3
        { t: 6.6, div: 'great', midi: 66, dur: 0.15, vel: 0.88 },  // F#4
        { t: 6.6, div: 'swell', midi: 57, dur: 0.15, vel: 0.85 },  // A3
        { t: 6.75, div: 'great', midi: 67, dur: 0.15, vel: 0.88 }, // G4
        { t: 6.75, div: 'swell', midi: 58, dur: 0.15, vel: 0.85 }, // Bb3
        { t: 6.9, div: 'great', midi: 68, dur: 0.15, vel: 0.90 },  // Ab4
        { t: 6.9, div: 'swell', midi: 59, dur: 0.15, vel: 0.87 },  // B3
        { t: 7.05, div: 'great', midi: 69, dur: 0.15, vel: 0.92 }, // A4
        { t: 7.05, div: 'swell', midi: 60, dur: 0.15, vel: 0.88 }, // C4

        // Big chord on beat 3
        { t: 7.2, div: 'great', midi: 77, dur: 0.5, vel: 0.96 },   // F5
        { t: 7.2, div: 'great', midi: 74, dur: 0.5, vel: 0.94 },   // D5
        { t: 7.2, div: 'great', midi: 69, dur: 0.5, vel: 0.92 },   // A4
        { t: 7.2, div: 'swell', midi: 65, dur: 0.5, vel: 0.90 },   // F4
        { t: 7.2, div: 'swell', midi: 62, dur: 0.5, vel: 0.88 },   // D4
        { t: 7.2, div: 'pedal', midi: 38, dur: 0.5, vel: 0.94 },   // D2

        // Descending chromatic cascade from F5
        { t: 7.7, div: 'great', midi: 77, dur: 0.12, vel: 0.90 },  // F5
        { t: 7.82, div: 'great', midi: 76, dur: 0.12, vel: 0.88 }, // E5
        { t: 7.94, div: 'great', midi: 75, dur: 0.12, vel: 0.90 }, // Eb5
        { t: 8.06, div: 'great', midi: 74, dur: 0.12, vel: 0.88 }, // D5
        { t: 8.18, div: 'great', midi: 73, dur: 0.12, vel: 0.90 }, // C#5
        { t: 8.3, div: 'great', midi: 72, dur: 0.12, vel: 0.88 },  // C5
        { t: 8.42, div: 'great', midi: 70, dur: 0.12, vel: 0.90 }, // Bb4
        { t: 8.54, div: 'great', midi: 69, dur: 0.12, vel: 0.92 }, // A4

        // m.4-5: Alternating massive chords with running passages
        { t: 8.7, div: 'great', midi: 70, dur: 0.5, vel: 0.96 },   // Bb4
        { t: 8.7, div: 'great', midi: 67, dur: 0.5, vel: 0.94 },   // G4
        { t: 8.7, div: 'great', midi: 62, dur: 0.5, vel: 0.92 },   // D4
        { t: 8.7, div: 'swell', midi: 58, dur: 0.5, vel: 0.90 },   // Bb3
        { t: 8.7, div: 'pedal', midi: 43, dur: 0.5, vel: 0.93 },   // G2

        // Diminished 7th chord (tension)
        { t: 9.2, div: 'great', midi: 73, dur: 0.5, vel: 0.95 },   // C#5
        { t: 9.2, div: 'great', midi: 70, dur: 0.5, vel: 0.93 },   // Bb4
        { t: 9.2, div: 'great', midi: 67, dur: 0.5, vel: 0.91 },   // G4
        { t: 9.2, div: 'great', midi: 64, dur: 0.5, vel: 0.89 },   // E4
        { t: 9.2, div: 'pedal', midi: 40, dur: 0.5, vel: 0.92 },   // E2

        // More running passages (pedal solo!)
        { t: 9.7, div: 'pedal', midi: 38, dur: 0.2, vel: 0.90 },   // D2
        { t: 9.9, div: 'pedal', midi: 40, dur: 0.2, vel: 0.88 },   // E2
        { t: 10.1, div: 'pedal', midi: 41, dur: 0.2, vel: 0.90 },  // F2
        { t: 10.3, div: 'pedal', midi: 43, dur: 0.2, vel: 0.88 },  // G2
        { t: 10.5, div: 'pedal', midi: 45, dur: 0.2, vel: 0.90 },  // A2
        { t: 10.7, div: 'pedal', midi: 46, dur: 0.2, vel: 0.88 },  // Bb2
        { t: 10.9, div: 'pedal', midi: 48, dur: 0.2, vel: 0.90 },  // C3
        { t: 11.1, div: 'pedal', midi: 49, dur: 0.3, vel: 0.92 },  // C#3

        // m.5: Full organ chord
        { t: 11.4, div: 'great', midi: 74, dur: 0.8, vel: 0.97 },  // D5
        { t: 11.4, div: 'great', midi: 69, dur: 0.8, vel: 0.95 },  // A4
        { t: 11.4, div: 'great', midi: 65, dur: 0.8, vel: 0.93 },  // F4
        { t: 11.4, div: 'swell', midi: 62, dur: 0.8, vel: 0.91 },  // D4
        { t: 11.4, div: 'swell', midi: 57, dur: 0.8, vel: 0.89 },  // A3
        { t: 11.4, div: 'pedal', midi: 38, dur: 0.8, vel: 0.95 },  // D2

        // Rapid alternation: manual figuration
        { t: 12.2, div: 'great', midi: 74, dur: 0.12, vel: 0.88 }, // D5
        { t: 12.32, div: 'great', midi: 72, dur: 0.12, vel: 0.86 },// C5
        { t: 12.44, div: 'great', midi: 70, dur: 0.12, vel: 0.88 },// Bb4
        { t: 12.56, div: 'great', midi: 69, dur: 0.12, vel: 0.86 },// A4
        { t: 12.68, div: 'great', midi: 67, dur: 0.12, vel: 0.88 },// G4
        { t: 12.8, div: 'great', midi: 65, dur: 0.12, vel: 0.86 }, // F4
        { t: 12.92, div: 'great', midi: 64, dur: 0.12, vel: 0.88 },// E4
        { t: 13.04, div: 'great', midi: 62, dur: 0.15, vel: 0.90 },// D4

        // Augmented 6th chord
        { t: 13.2, div: 'great', midi: 72, dur: 0.5, vel: 0.95 },  // C5
        { t: 13.2, div: 'great', midi: 68, dur: 0.5, vel: 0.93 },  // Ab4
        { t: 13.2, div: 'great', midi: 66, dur: 0.5, vel: 0.91 },  // F#4
        { t: 13.2, div: 'great', midi: 62, dur: 0.5, vel: 0.89 },  // D4
        { t: 13.2, div: 'pedal', midi: 44, dur: 0.5, vel: 0.92 },  // Ab2

        // Neapolitan chord (Eb major)
        { t: 13.7, div: 'great', midi: 75, dur: 0.5, vel: 0.95 },  // Eb5
        { t: 13.7, div: 'great', midi: 70, dur: 0.5, vel: 0.93 },  // Bb4
        { t: 13.7, div: 'great', midi: 67, dur: 0.5, vel: 0.91 },  // G4
        { t: 13.7, div: 'great', midi: 63, dur: 0.5, vel: 0.89 },  // Eb4
        { t: 13.7, div: 'pedal', midi: 39, dur: 0.5, vel: 0.92 },  // Eb2

        // m.6-8: Building to climax with repeated chordal patterns
        // Dm - Gm/D - A7/D - Dm pattern with chromatic passing tones

        { t: 14.2, div: 'great', midi: 74, dur: 0.4, vel: 0.96 },  // D5
        { t: 14.2, div: 'great', midi: 69, dur: 0.4, vel: 0.94 },  // A4
        { t: 14.2, div: 'great', midi: 65, dur: 0.4, vel: 0.92 },  // F4
        { t: 14.2, div: 'pedal', midi: 38, dur: 1.5, vel: 0.94 },  // D2 pedal point

        { t: 14.6, div: 'great', midi: 74, dur: 0.4, vel: 0.94 },  // D5
        { t: 14.6, div: 'great', midi: 70, dur: 0.4, vel: 0.92 },  // Bb4
        { t: 14.6, div: 'great', midi: 67, dur: 0.4, vel: 0.90 },  // G4

        { t: 15.0, div: 'great', midi: 73, dur: 0.4, vel: 0.95 },  // C#5
        { t: 15.0, div: 'great', midi: 69, dur: 0.4, vel: 0.93 },  // A4
        { t: 15.0, div: 'great', midi: 67, dur: 0.4, vel: 0.91 },  // G4
        { t: 15.0, div: 'great', midi: 64, dur: 0.4, vel: 0.89 },  // E4

        { t: 15.4, div: 'great', midi: 74, dur: 0.5, vel: 0.97 },  // D5
        { t: 15.4, div: 'great', midi: 69, dur: 0.5, vel: 0.95 },  // A4
        { t: 15.4, div: 'great', midi: 65, dur: 0.5, vel: 0.93 },  // F4
        { t: 15.4, div: 'great', midi: 62, dur: 0.5, vel: 0.91 },  // D4

        // Massive ascending octave passages
        { t: 16.0, div: 'great', midi: 62, dur: 0.12, vel: 0.90 }, // D4
        { t: 16.12, div: 'great', midi: 64, dur: 0.12, vel: 0.88 },// E4
        { t: 16.24, div: 'great', midi: 65, dur: 0.12, vel: 0.90 },// F4
        { t: 16.36, div: 'great', midi: 67, dur: 0.12, vel: 0.88 },// G4
        { t: 16.48, div: 'great', midi: 69, dur: 0.12, vel: 0.90 },// A4
        { t: 16.6, div: 'great', midi: 70, dur: 0.12, vel: 0.88 }, // Bb4
        { t: 16.72, div: 'great', midi: 72, dur: 0.12, vel: 0.90 },// C5
        { t: 16.84, div: 'great', midi: 73, dur: 0.12, vel: 0.92 },// C#5
        { t: 16.96, div: 'great', midi: 74, dur: 0.5, vel: 0.96 }, // D5

        // Pedal: chromatic ascent
        { t: 16.0, div: 'pedal', midi: 38, dur: 0.25, vel: 0.90 }, // D2
        { t: 16.25, div: 'pedal', midi: 39, dur: 0.25, vel: 0.88 },// Eb2
        { t: 16.5, div: 'pedal', midi: 40, dur: 0.25, vel: 0.90 }, // E2
        { t: 16.75, div: 'pedal', midi: 41, dur: 0.25, vel: 0.88 },// F2
        { t: 17.0, div: 'pedal', midi: 42, dur: 0.25, vel: 0.90 }, // F#2
        { t: 17.25, div: 'pedal', midi: 43, dur: 0.25, vel: 0.92 },// G2

        // Toccata climax chords
        { t: 17.5, div: 'great', midi: 77, dur: 0.8, vel: 0.98 },  // F5
        { t: 17.5, div: 'great', midi: 74, dur: 0.8, vel: 0.96 },  // D5
        { t: 17.5, div: 'great', midi: 69, dur: 0.8, vel: 0.94 },  // A4
        { t: 17.5, div: 'swell', midi: 65, dur: 0.8, vel: 0.92 },  // F4
        { t: 17.5, div: 'swell', midi: 62, dur: 0.8, vel: 0.90 },  // D4
        { t: 17.5, div: 'pedal', midi: 38, dur: 0.8, vel: 0.96 },  // D2

        // Repeated chords building
        { t: 18.3, div: 'great', midi: 79, dur: 0.4, vel: 0.97 },  // G5
        { t: 18.3, div: 'great', midi: 74, dur: 0.4, vel: 0.95 },  // D5
        { t: 18.3, div: 'great', midi: 70, dur: 0.4, vel: 0.93 },  // Bb4
        { t: 18.3, div: 'swell', midi: 67, dur: 0.4, vel: 0.91 },  // G4
        { t: 18.3, div: 'pedal', midi: 43, dur: 0.4, vel: 0.94 },  // G2

        { t: 18.7, div: 'great', midi: 81, dur: 0.5, vel: 0.98 },  // A5
        { t: 18.7, div: 'great', midi: 77, dur: 0.5, vel: 0.96 },  // F5
        { t: 18.7, div: 'great', midi: 73, dur: 0.5, vel: 0.94 },  // C#5
        { t: 18.7, div: 'swell', midi: 69, dur: 0.5, vel: 0.92 },  // A4
        { t: 18.7, div: 'pedal', midi: 45, dur: 0.5, vel: 0.95 },  // A2

        // m.9-12: Continued toccata with softer interludes
        // Brief piano passage on swell
        { t: 19.5, div: 'swell', midi: 69, dur: 0.5, vel: 0.60 },  // A4
        { t: 19.5, div: 'swell', midi: 65, dur: 0.5, vel: 0.58 },  // F4
        { t: 19.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.56 },  // D4

        { t: 20.0, div: 'swell', midi: 70, dur: 0.5, vel: 0.62 },  // Bb4
        { t: 20.0, div: 'swell', midi: 67, dur: 0.5, vel: 0.60 },  // G4
        { t: 20.0, div: 'swell', midi: 62, dur: 0.5, vel: 0.58 },  // D4

        { t: 20.5, div: 'swell', midi: 69, dur: 0.5, vel: 0.60 },  // A4
        { t: 20.5, div: 'swell', midi: 64, dur: 0.5, vel: 0.58 },  // E4
        { t: 20.5, div: 'swell', midi: 61, dur: 0.5, vel: 0.56 },  // C#4

        // Sudden fortissimo return
        { t: 21.0, div: 'great', midi: 74, dur: 0.5, vel: 0.97 },  // D5
        { t: 21.0, div: 'great', midi: 69, dur: 0.5, vel: 0.95 },  // A4
        { t: 21.0, div: 'great', midi: 65, dur: 0.5, vel: 0.93 },  // F4
        { t: 21.0, div: 'great', midi: 62, dur: 0.5, vel: 0.91 },  // D4
        { t: 21.0, div: 'pedal', midi: 38, dur: 1.0, vel: 0.95 },  // D2

        // Running sixths again
        { t: 21.5, div: 'great', midi: 74, dur: 0.15, vel: 0.90 }, // D5
        { t: 21.5, div: 'swell', midi: 65, dur: 0.15, vel: 0.87 }, // F4
        { t: 21.65, div: 'great', midi: 73, dur: 0.15, vel: 0.88 },// C#5
        { t: 21.65, div: 'swell', midi: 64, dur: 0.15, vel: 0.85 },// E4
        { t: 21.8, div: 'great', midi: 72, dur: 0.15, vel: 0.90 }, // C5
        { t: 21.8, div: 'swell', midi: 63, dur: 0.15, vel: 0.87 }, // Eb4
        { t: 21.95, div: 'great', midi: 70, dur: 0.15, vel: 0.88 },// Bb4
        { t: 21.95, div: 'swell', midi: 62, dur: 0.15, vel: 0.85 },// D4
        { t: 22.1, div: 'great', midi: 69, dur: 0.15, vel: 0.90 }, // A4
        { t: 22.1, div: 'swell', midi: 61, dur: 0.15, vel: 0.87 }, // C#4
        { t: 22.25, div: 'great', midi: 67, dur: 0.15, vel: 0.88 },// G4
        { t: 22.25, div: 'swell', midi: 58, dur: 0.15, vel: 0.85 },// Bb3

        // Final toccata flourish before fugue
        { t: 22.5, div: 'great', midi: 65, dur: 0.12, vel: 0.88 }, // F4
        { t: 22.62, div: 'great', midi: 67, dur: 0.12, vel: 0.88 },// G4
        { t: 22.74, div: 'great', midi: 69, dur: 0.12, vel: 0.90 },// A4
        { t: 22.86, div: 'great', midi: 70, dur: 0.12, vel: 0.88 },// Bb4
        { t: 22.98, div: 'great', midi: 72, dur: 0.12, vel: 0.90 },// C5
        { t: 23.1, div: 'great', midi: 73, dur: 0.12, vel: 0.92 }, // C#5
        { t: 23.22, div: 'great', midi: 74, dur: 0.12, vel: 0.94 },// D5
        { t: 23.34, div: 'great', midi: 76, dur: 0.12, vel: 0.96 },// E5
        { t: 23.46, div: 'great', midi: 77, dur: 0.5, vel: 0.98 }, // F5

        // Massive final toccata chord with fermata
        { t: 24.0, div: 'great', midi: 74, dur: 2.0, vel: 0.98 },  // D5
        { t: 24.0, div: 'great', midi: 69, dur: 2.0, vel: 0.96 },  // A4
        { t: 24.0, div: 'great', midi: 65, dur: 2.0, vel: 0.94 },  // F4
        { t: 24.0, div: 'great', midi: 62, dur: 2.0, vel: 0.92 },  // D4
        { t: 24.0, div: 'swell', midi: 57, dur: 2.0, vel: 0.90 },  // A3
        { t: 24.0, div: 'swell', midi: 53, dur: 2.0, vel: 0.88 },  // F3
        { t: 24.0, div: 'swell', midi: 50, dur: 2.0, vel: 0.86 },  // D3
        { t: 24.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.96 },  // D2
        { t: 24.0, div: 'pedal', midi: 26, dur: 2.0, vel: 0.90 },  // D1 (32')

        // ===== mm. 13-20: More toccata episodes =====
        // Sequences modulating through related keys

        // Gm episode
        { t: 26.5, div: 'great', midi: 70, dur: 0.15, vel: 0.90 }, // Bb4
        { t: 26.65, div: 'great', midi: 69, dur: 0.15, vel: 0.88 },// A4
        { t: 26.8, div: 'great', midi: 67, dur: 0.15, vel: 0.90 }, // G4
        { t: 26.95, div: 'great', midi: 65, dur: 0.15, vel: 0.88 },// F4
        { t: 27.1, div: 'great', midi: 62, dur: 0.15, vel: 0.90 }, // D4
        { t: 27.25, div: 'great', midi: 58, dur: 0.3, vel: 0.92 }, // Bb3
        { t: 27.25, div: 'pedal', midi: 43, dur: 1.0, vel: 0.92 }, // G2

        // Am episode
        { t: 27.6, div: 'great', midi: 72, dur: 0.15, vel: 0.90 }, // C5
        { t: 27.75, div: 'great', midi: 71, dur: 0.15, vel: 0.88 },// B4
        { t: 27.9, div: 'great', midi: 69, dur: 0.15, vel: 0.90 }, // A4
        { t: 28.05, div: 'great', midi: 67, dur: 0.15, vel: 0.88 },// G4
        { t: 28.2, div: 'great', midi: 64, dur: 0.15, vel: 0.90 }, // E4
        { t: 28.35, div: 'great', midi: 60, dur: 0.3, vel: 0.92 }, // C4
        { t: 28.35, div: 'pedal', midi: 45, dur: 1.0, vel: 0.92 }, // A2

        // Back to Dm with massive chords
        { t: 28.7, div: 'great', midi: 74, dur: 0.8, vel: 0.97 },  // D5
        { t: 28.7, div: 'great', midi: 69, dur: 0.8, vel: 0.95 },  // A4
        { t: 28.7, div: 'great', midi: 65, dur: 0.8, vel: 0.93 },  // F4
        { t: 28.7, div: 'swell', midi: 62, dur: 0.8, vel: 0.91 },  // D4
        { t: 28.7, div: 'pedal', midi: 38, dur: 2.0, vel: 0.95 },  // D2

        // Chromatic passage building to fugue entrance
        { t: 29.5, div: 'great', midi: 62, dur: 0.12, vel: 0.88 }, // D4
        { t: 29.62, div: 'great', midi: 63, dur: 0.12, vel: 0.86 },// Eb4
        { t: 29.74, div: 'great', midi: 64, dur: 0.12, vel: 0.88 },// E4
        { t: 29.86, div: 'great', midi: 65, dur: 0.12, vel: 0.86 },// F4
        { t: 29.98, div: 'great', midi: 66, dur: 0.12, vel: 0.88 },// F#4
        { t: 30.1, div: 'great', midi: 67, dur: 0.12, vel: 0.86 }, // G4
        { t: 30.22, div: 'great', midi: 68, dur: 0.12, vel: 0.88 },// Ab4
        { t: 30.34, div: 'great', midi: 69, dur: 0.12, vel: 0.90 },// A4
        { t: 30.46, div: 'great', midi: 70, dur: 0.12, vel: 0.88 },// Bb4
        { t: 30.58, div: 'great', midi: 71, dur: 0.12, vel: 0.90 },// B4
        { t: 30.7, div: 'great', midi: 72, dur: 0.12, vel: 0.88 }, // C5
        { t: 30.82, div: 'great', midi: 73, dur: 0.12, vel: 0.92 },// C#5

        // Final toccata flourish - massive chord
        { t: 31.0, div: 'great', midi: 74, dur: 1.5, vel: 0.98 },  // D5
        { t: 31.0, div: 'great', midi: 69, dur: 1.5, vel: 0.96 },  // A4
        { t: 31.0, div: 'great', midi: 65, dur: 1.5, vel: 0.94 },  // F4
        { t: 31.0, div: 'swell', midi: 62, dur: 1.5, vel: 0.92 },  // D4
        { t: 31.0, div: 'swell', midi: 57, dur: 1.5, vel: 0.90 },  // A3
        { t: 31.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.96 },  // D2

        // Diminuendo passage leading to fugue
        { t: 32.5, div: 'great', midi: 69, dur: 1.0, vel: 0.80 },  // A4
        { t: 32.5, div: 'great', midi: 65, dur: 1.0, vel: 0.78 },  // F4
        { t: 33.5, div: 'great', midi: 67, dur: 1.0, vel: 0.75 },  // G4
        { t: 33.5, div: 'great', midi: 64, dur: 1.0, vel: 0.73 },  // E4
        { t: 34.5, div: 'great', midi: 65, dur: 1.0, vel: 0.70 },  // F4
        { t: 34.5, div: 'great', midi: 62, dur: 1.0, vel: 0.68 },  // D4

        // ===== FUGUE: Allegro in D minor =====
        // Chromatic fugue subject: D-Eb-E-F-C#-D with half-step tension

        // Bass entry: fugue subject
        { t: 36.0, div: 'great', midi: 50, dur: 0.8, vel: 0.78 },  // D3
        { t: 36.8, div: 'great', midi: 51, dur: 0.4, vel: 0.76 },  // Eb3
        { t: 37.2, div: 'great', midi: 52, dur: 0.4, vel: 0.78 },  // E3
        { t: 37.6, div: 'great', midi: 53, dur: 0.8, vel: 0.80 },  // F3
        { t: 38.4, div: 'great', midi: 55, dur: 0.6, vel: 0.78 },  // G3
        { t: 39.0, div: 'great', midi: 53, dur: 0.6, vel: 0.76 },  // F3
        { t: 39.6, div: 'great', midi: 52, dur: 0.4, vel: 0.78 },  // E3
        { t: 40.0, div: 'great', midi: 49, dur: 0.8, vel: 0.80 },  // C#3
        { t: 40.8, div: 'great', midi: 50, dur: 1.5, vel: 0.78 },  // D3

        // Tenor entry: answer at 5th (A-Bb-B-C-G#-A)
        { t: 42.5, div: 'great', midi: 57, dur: 0.8, vel: 0.80 },  // A3
        { t: 43.3, div: 'great', midi: 58, dur: 0.4, vel: 0.78 },  // Bb3
        { t: 43.7, div: 'great', midi: 59, dur: 0.4, vel: 0.80 },  // B3
        { t: 44.1, div: 'great', midi: 60, dur: 0.8, vel: 0.82 },  // C4
        { t: 44.9, div: 'great', midi: 62, dur: 0.6, vel: 0.80 },  // D4
        { t: 45.5, div: 'great', midi: 60, dur: 0.6, vel: 0.78 },  // C4
        { t: 46.1, div: 'great', midi: 59, dur: 0.4, vel: 0.80 },  // B3
        { t: 46.5, div: 'great', midi: 56, dur: 0.8, vel: 0.82 },  // G#3
        { t: 47.3, div: 'great', midi: 57, dur: 1.5, vel: 0.80 },  // A3

        // Bass countersubject
        { t: 42.5, div: 'great', midi: 50, dur: 0.6, vel: 0.72 },  // D3
        { t: 43.1, div: 'great', midi: 48, dur: 0.6, vel: 0.70 },  // C3
        { t: 43.7, div: 'great', midi: 46, dur: 0.6, vel: 0.72 },  // Bb2
        { t: 44.3, div: 'great', midi: 45, dur: 0.6, vel: 0.70 },  // A2
        { t: 44.9, div: 'great', midi: 43, dur: 1.5, vel: 0.72 },  // G2
        { t: 46.4, div: 'great', midi: 45, dur: 0.8, vel: 0.74 },  // A2

        // Alto entry: subject at octave
        { t: 49.0, div: 'swell', midi: 62, dur: 0.8, vel: 0.82 },  // D4
        { t: 49.8, div: 'swell', midi: 63, dur: 0.4, vel: 0.80 },  // Eb4
        { t: 50.2, div: 'swell', midi: 64, dur: 0.4, vel: 0.82 },  // E4
        { t: 50.6, div: 'swell', midi: 65, dur: 0.8, vel: 0.84 },  // F4
        { t: 51.4, div: 'swell', midi: 67, dur: 0.6, vel: 0.82 },  // G4
        { t: 52.0, div: 'swell', midi: 65, dur: 0.6, vel: 0.80 },  // F4
        { t: 52.6, div: 'swell', midi: 64, dur: 0.4, vel: 0.82 },  // E4
        { t: 53.0, div: 'swell', midi: 61, dur: 0.8, vel: 0.84 },  // C#4
        { t: 53.8, div: 'swell', midi: 62, dur: 1.5, vel: 0.82 },  // D4

        // Tenor and bass continue
        { t: 49.0, div: 'great', midi: 57, dur: 1.0, vel: 0.72 },  // A3
        { t: 50.0, div: 'great', midi: 55, dur: 1.0, vel: 0.70 },  // G3
        { t: 51.0, div: 'great', midi: 53, dur: 1.0, vel: 0.72 },  // F3
        { t: 52.0, div: 'great', midi: 52, dur: 1.5, vel: 0.74 },  // E3
        { t: 49.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.78 },  // D2
        { t: 51.0, div: 'pedal', midi: 36, dur: 2.0, vel: 0.76 },  // C2
        { t: 53.0, div: 'pedal', midi: 38, dur: 2.5, vel: 0.78 },  // D2

        // Soprano entry: subject in highest voice
        { t: 55.5, div: 'swell', midi: 74, dur: 0.8, vel: 0.86 },  // D5
        { t: 56.3, div: 'swell', midi: 75, dur: 0.4, vel: 0.84 },  // Eb5
        { t: 56.7, div: 'swell', midi: 76, dur: 0.4, vel: 0.86 },  // E5
        { t: 57.1, div: 'swell', midi: 77, dur: 0.8, vel: 0.88 },  // F5
        { t: 57.9, div: 'swell', midi: 79, dur: 0.6, vel: 0.86 },  // G5
        { t: 58.5, div: 'swell', midi: 77, dur: 0.6, vel: 0.84 },  // F5
        { t: 59.1, div: 'swell', midi: 76, dur: 0.4, vel: 0.86 },  // E5
        { t: 59.5, div: 'swell', midi: 73, dur: 0.8, vel: 0.88 },  // C#5
        { t: 60.3, div: 'swell', midi: 74, dur: 1.5, vel: 0.86 },  // D5

        // Other voices
        { t: 55.5, div: 'swell', midi: 65, dur: 1.0, vel: 0.72 },  // F4
        { t: 56.5, div: 'swell', midi: 67, dur: 1.0, vel: 0.74 },  // G4
        { t: 57.5, div: 'swell', midi: 69, dur: 1.0, vel: 0.72 },  // A4
        { t: 58.5, div: 'swell', midi: 67, dur: 1.0, vel: 0.74 },  // G4
        { t: 59.5, div: 'swell', midi: 65, dur: 2.0, vel: 0.72 },  // F4
        { t: 55.5, div: 'great', midi: 57, dur: 1.5, vel: 0.70 },  // A3
        { t: 57.0, div: 'great', midi: 58, dur: 1.5, vel: 0.72 },  // Bb3
        { t: 58.5, div: 'great', midi: 60, dur: 1.5, vel: 0.70 },  // C4
        { t: 60.0, div: 'great', midi: 57, dur: 1.5, vel: 0.72 },  // A3
        { t: 55.5, div: 'pedal', midi: 38, dur: 3.0, vel: 0.80 },  // D2
        { t: 58.5, div: 'pedal', midi: 45, dur: 3.0, vel: 0.82 },  // A2

        // ===== Fugue climax: full organ, all voices =====
        // Stretto and augmentation building to massive conclusion

        { t: 62.0, div: 'great', midi: 74, dur: 0.5, vel: 0.95 },  // D5
        { t: 62.0, div: 'great', midi: 69, dur: 0.5, vel: 0.93 },  // A4
        { t: 62.0, div: 'great', midi: 65, dur: 0.5, vel: 0.91 },  // F4
        { t: 62.0, div: 'swell', midi: 62, dur: 0.5, vel: 0.89 },  // D4
        { t: 62.0, div: 'pedal', midi: 38, dur: 1.0, vel: 0.94 },  // D2

        // Subject in pedal augmentation (double note values)
        { t: 62.0, div: 'pedal', midi: 38, dur: 1.5, vel: 0.90 },  // D2
        { t: 63.5, div: 'pedal', midi: 39, dur: 0.8, vel: 0.88 },  // Eb2
        { t: 64.3, div: 'pedal', midi: 40, dur: 0.8, vel: 0.90 },  // E2
        { t: 65.1, div: 'pedal', midi: 41, dur: 1.5, vel: 0.92 },  // F2

        // Manuals: cascading chords fff
        { t: 62.5, div: 'great', midi: 77, dur: 0.4, vel: 0.96 },  // F5
        { t: 62.5, div: 'great', midi: 74, dur: 0.4, vel: 0.94 },  // D5
        { t: 62.5, div: 'great', midi: 69, dur: 0.4, vel: 0.92 },  // A4
        { t: 62.9, div: 'great', midi: 76, dur: 0.4, vel: 0.95 },  // E5
        { t: 62.9, div: 'great', midi: 72, dur: 0.4, vel: 0.93 },  // C5
        { t: 62.9, div: 'great', midi: 67, dur: 0.4, vel: 0.91 },  // G4
        { t: 63.3, div: 'great', midi: 74, dur: 0.4, vel: 0.96 },  // D5
        { t: 63.3, div: 'great', midi: 70, dur: 0.4, vel: 0.94 },  // Bb4
        { t: 63.3, div: 'great', midi: 65, dur: 0.4, vel: 0.92 },  // F4

        // More massive chords
        { t: 63.7, div: 'great', midi: 73, dur: 0.5, vel: 0.97 },  // C#5
        { t: 63.7, div: 'great', midi: 69, dur: 0.5, vel: 0.95 },  // A4
        { t: 63.7, div: 'great', midi: 64, dur: 0.5, vel: 0.93 },  // E4
        { t: 64.2, div: 'great', midi: 74, dur: 0.5, vel: 0.98 },  // D5
        { t: 64.2, div: 'great', midi: 69, dur: 0.5, vel: 0.96 },  // A4
        { t: 64.2, div: 'great', midi: 65, dur: 0.5, vel: 0.94 },  // F4
        { t: 64.2, div: 'great', midi: 62, dur: 0.5, vel: 0.92 },  // D4

        // Final pedal passage
        { t: 66.5, div: 'pedal', midi: 43, dur: 0.8, vel: 0.90 },  // G2
        { t: 67.3, div: 'pedal', midi: 41, dur: 0.8, vel: 0.88 },  // F2
        { t: 68.1, div: 'pedal', midi: 40, dur: 0.4, vel: 0.90 },  // E2
        { t: 68.5, div: 'pedal', midi: 37, dur: 0.8, vel: 0.92 },  // C#2
        { t: 69.3, div: 'pedal', midi: 38, dur: 2.0, vel: 0.94 },  // D2

        // Grand final D minor chord - fff, full organ
        { t: 69.3, div: 'great', midi: 74, dur: 3.0, vel: 0.98 },  // D5
        { t: 69.3, div: 'great', midi: 69, dur: 3.0, vel: 0.96 },  // A4
        { t: 69.3, div: 'great', midi: 65, dur: 3.0, vel: 0.94 },  // F4
        { t: 69.3, div: 'great', midi: 62, dur: 3.0, vel: 0.92 },  // D4
        { t: 69.3, div: 'swell', midi: 57, dur: 3.0, vel: 0.90 },  // A3
        { t: 69.3, div: 'swell', midi: 53, dur: 3.0, vel: 0.88 },  // F3
        { t: 69.3, div: 'swell', midi: 50, dur: 3.0, vel: 0.86 },  // D3
        { t: 69.3, div: 'pedal', midi: 38, dur: 3.0, vel: 0.96 },  // D2
        { t: 69.3, div: 'pedal', midi: 26, dur: 3.0, vel: 0.90 },  // D1 (32')
    ]
};

// ============================================================
// 5. Reger - Benedictus, Op. 59 No. 9
// ============================================================
// Gentle, lyrical benediction with a beautiful singing melody.
// One of Reger's most beloved short organ pieces.
// Warm, Romantic harmonies with rich chromatic coloring.
// Key: Db major (5 flats). Time: 4/4. Tempo: Andante sostenuto.
// Singing soprano melody over gentle harmonic accompaniment.
// ============================================================

const PIECE_REGER_BENEDICTUS = {
    title: "Benedictus",
    composer: "Max Reger",
    catalog: "Op. 59/9",
    key: "Db major",
    tempo: 58,
    registration: {
        great: [],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-flute4', 'sw-tremulant'],
        choir: ['ch-flute8'],
        pedal: ['pd-subbass32']
    },
    events: [
        // ===== PHRASE 1 (mm. 1-4): Opening melody in Db major =====
        // Warm, singing soprano melody over sustained harmonies

        // m.1: Db major, melody begins on F4 (3rd degree)
        { t: 0, div: 'swell', midi: 65, dur: 2.0, vel: 0.50 },     // F4 soprano
        { t: 0, div: 'swell', midi: 61, dur: 2.0, vel: 0.42 },     // Db4 alto
        { t: 0, div: 'swell', midi: 56, dur: 2.0, vel: 0.40 },     // Ab3 tenor
        { t: 0, div: 'choir', midi: 49, dur: 2.0, vel: 0.40 },     // Db3 bass
        { t: 0, div: 'pedal', midi: 37, dur: 2.0, vel: 0.42 },     // Db2

        // m.1 beat 3: melody rises to Ab4 (5th)
        { t: 2.0, div: 'swell', midi: 68, dur: 1.5, vel: 0.52 },   // Ab4
        { t: 2.0, div: 'swell', midi: 63, dur: 1.5, vel: 0.43 },   // Eb4
        { t: 2.0, div: 'swell', midi: 56, dur: 1.5, vel: 0.40 },   // Ab3
        { t: 2.0, div: 'choir', midi: 49, dur: 1.5, vel: 0.40 },   // Db3
        { t: 2.0, div: 'pedal', midi: 37, dur: 1.5, vel: 0.42 },   // Db2

        // Graceful turn: Ab4-Gb4-F4
        { t: 3.5, div: 'swell', midi: 66, dur: 0.5, vel: 0.48 },   // Gb4 (passing)
        { t: 4.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.50 },   // F4

        // m.2: melody descends to Eb4, then rises to Gb4
        { t: 4.0, div: 'swell', midi: 63, dur: 2.0, vel: 0.43 },   // Eb4 alto
        { t: 4.0, div: 'swell', midi: 58, dur: 2.0, vel: 0.40 },   // Bb3 tenor
        { t: 4.0, div: 'choir', midi: 51, dur: 2.0, vel: 0.40 },   // Eb3
        { t: 4.0, div: 'pedal', midi: 39, dur: 2.0, vel: 0.42 },   // Eb2

        { t: 5.5, div: 'swell', midi: 63, dur: 1.0, vel: 0.48 },   // Eb4 soprano
        { t: 6.5, div: 'swell', midi: 66, dur: 1.5, vel: 0.52 },   // Gb4
        { t: 6.5, div: 'swell', midi: 61, dur: 1.5, vel: 0.43 },   // Db4
        { t: 6.5, div: 'swell', midi: 58, dur: 1.5, vel: 0.40 },   // Bb3
        { t: 6.5, div: 'choir', midi: 54, dur: 1.5, vel: 0.40 },   // Gb3
        { t: 6.5, div: 'pedal', midi: 42, dur: 1.5, vel: 0.42 },   // Gb2

        // m.3: melody reaches Bb4 (emotional peak of phrase)
        { t: 8.0, div: 'swell', midi: 70, dur: 2.0, vel: 0.55 },   // Bb4 (peak)
        { t: 8.0, div: 'swell', midi: 65, dur: 2.0, vel: 0.45 },   // F4
        { t: 8.0, div: 'swell', midi: 61, dur: 2.0, vel: 0.42 },   // Db4
        { t: 8.0, div: 'choir', midi: 53, dur: 2.0, vel: 0.42 },   // F3
        { t: 8.0, div: 'pedal', midi: 41, dur: 2.0, vel: 0.44 },   // F2

        // Descending: Ab4 - Gb4
        { t: 10.0, div: 'swell', midi: 68, dur: 1.0, vel: 0.52 },  // Ab4
        { t: 11.0, div: 'swell', midi: 66, dur: 1.0, vel: 0.50 },  // Gb4
        { t: 10.0, div: 'swell', midi: 63, dur: 2.0, vel: 0.43 },  // Eb4
        { t: 10.0, div: 'swell', midi: 56, dur: 2.0, vel: 0.40 },  // Ab3
        { t: 10.0, div: 'choir', midi: 51, dur: 2.0, vel: 0.40 },  // Eb3
        { t: 10.0, div: 'pedal', midi: 39, dur: 2.0, vel: 0.42 },  // Eb2

        // m.4: F4 with chromatic inner voice motion, cadence to Db
        { t: 12.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.50 },  // F4
        { t: 12.0, div: 'swell', midi: 61, dur: 1.5, vel: 0.42 },  // Db4
        { t: 12.0, div: 'swell', midi: 58, dur: 1.5, vel: 0.40 },  // Bb3
        { t: 12.0, div: 'choir', midi: 49, dur: 1.5, vel: 0.40 },  // Db3
        { t: 12.0, div: 'pedal', midi: 46, dur: 1.5, vel: 0.42 },  // Bb2

        // Chromatic passing: E-natural (chromatic neighbor)
        { t: 13.5, div: 'swell', midi: 64, dur: 0.8, vel: 0.48 },  // E4 (chromatic)
        { t: 13.5, div: 'swell', midi: 60, dur: 0.8, vel: 0.40 },  // C4
        { t: 13.5, div: 'swell', midi: 56, dur: 0.8, vel: 0.38 },  // Ab3

        // Resolution to Db
        { t: 14.3, div: 'swell', midi: 65, dur: 2.5, vel: 0.50 },  // F4
        { t: 14.3, div: 'swell', midi: 61, dur: 2.5, vel: 0.42 },  // Db4
        { t: 14.3, div: 'swell', midi: 56, dur: 2.5, vel: 0.40 },  // Ab3
        { t: 14.3, div: 'choir', midi: 49, dur: 2.5, vel: 0.40 },  // Db3
        { t: 14.3, div: 'pedal', midi: 37, dur: 2.5, vel: 0.42 },  // Db2

        // ===== PHRASE 2 (mm. 5-8): Second theme, more expansive =====
        // Rising from Ab4 toward Db5

        { t: 17.0, div: 'swell', midi: 68, dur: 1.5, vel: 0.52 },  // Ab4
        { t: 17.0, div: 'swell', midi: 63, dur: 1.5, vel: 0.43 },  // Eb4
        { t: 17.0, div: 'swell', midi: 56, dur: 1.5, vel: 0.40 },  // Ab3
        { t: 17.0, div: 'choir', midi: 51, dur: 1.5, vel: 0.40 },  // Eb3
        { t: 17.0, div: 'pedal', midi: 44, dur: 1.5, vel: 0.42 },  // Ab2

        // Ascending: Bb4-C5
        { t: 18.5, div: 'swell', midi: 70, dur: 1.5, vel: 0.54 },  // Bb4
        { t: 18.5, div: 'swell', midi: 65, dur: 1.5, vel: 0.44 },  // F4
        { t: 18.5, div: 'swell', midi: 61, dur: 1.5, vel: 0.42 },  // Db4
        { t: 18.5, div: 'choir', midi: 53, dur: 1.5, vel: 0.42 },  // F3
        { t: 18.5, div: 'pedal', midi: 41, dur: 1.5, vel: 0.44 },  // F2

        { t: 20.0, div: 'swell', midi: 72, dur: 1.5, vel: 0.55 },  // C5
        { t: 20.0, div: 'swell', midi: 68, dur: 1.5, vel: 0.45 },  // Ab4
        { t: 20.0, div: 'swell', midi: 63, dur: 1.5, vel: 0.42 },  // Eb4
        { t: 20.0, div: 'choir', midi: 51, dur: 1.5, vel: 0.42 },  // Eb3
        { t: 20.0, div: 'pedal', midi: 44, dur: 1.5, vel: 0.44 },  // Ab2

        // m.6: Climax on Db5 (high point of piece)
        { t: 21.5, div: 'swell', midi: 73, dur: 2.5, vel: 0.58 },  // Db5 (climax!)
        { t: 21.5, div: 'swell', midi: 68, dur: 2.5, vel: 0.48 },  // Ab4
        { t: 21.5, div: 'swell', midi: 65, dur: 2.5, vel: 0.45 },  // F4
        { t: 21.5, div: 'choir', midi: 49, dur: 2.5, vel: 0.44 },  // Db3
        { t: 21.5, div: 'pedal', midi: 37, dur: 2.5, vel: 0.46 },  // Db2

        // Gentle descent from peak: C5-Bb4-Ab4
        { t: 24.0, div: 'swell', midi: 72, dur: 1.0, vel: 0.54 },  // C5
        { t: 25.0, div: 'swell', midi: 70, dur: 1.0, vel: 0.52 },  // Bb4
        { t: 24.0, div: 'swell', midi: 66, dur: 2.0, vel: 0.44 },  // Gb4
        { t: 24.0, div: 'swell', midi: 63, dur: 2.0, vel: 0.42 },  // Eb4
        { t: 24.0, div: 'choir', midi: 54, dur: 2.0, vel: 0.42 },  // Gb3
        { t: 24.0, div: 'pedal', midi: 42, dur: 2.0, vel: 0.44 },  // Gb2

        { t: 26.0, div: 'swell', midi: 68, dur: 1.5, vel: 0.50 },  // Ab4
        { t: 26.0, div: 'swell', midi: 63, dur: 1.5, vel: 0.42 },  // Eb4
        { t: 26.0, div: 'swell', midi: 56, dur: 1.5, vel: 0.40 },  // Ab3
        { t: 26.0, div: 'choir', midi: 51, dur: 1.5, vel: 0.40 },  // Eb3
        { t: 26.0, div: 'pedal', midi: 44, dur: 1.5, vel: 0.42 },  // Ab2

        // m.8: Cadence through Gb major to Db
        { t: 27.5, div: 'swell', midi: 66, dur: 1.5, vel: 0.50 },  // Gb4
        { t: 27.5, div: 'swell', midi: 61, dur: 1.5, vel: 0.42 },  // Db4
        { t: 27.5, div: 'swell', midi: 58, dur: 1.5, vel: 0.40 },  // Bb3
        { t: 27.5, div: 'choir', midi: 54, dur: 1.5, vel: 0.40 },  // Gb3
        { t: 27.5, div: 'pedal', midi: 42, dur: 1.5, vel: 0.42 },  // Gb2

        // Ab7 to Db resolution
        { t: 29.0, div: 'swell', midi: 65, dur: 1.0, vel: 0.48 },  // F4
        { t: 29.0, div: 'swell', midi: 60, dur: 1.0, vel: 0.40 },  // C4
        { t: 29.0, div: 'swell', midi: 56, dur: 1.0, vel: 0.38 },  // Ab3
        { t: 29.0, div: 'pedal', midi: 44, dur: 1.0, vel: 0.42 },  // Ab2

        { t: 30.0, div: 'swell', midi: 65, dur: 2.0, vel: 0.50 },  // F4
        { t: 30.0, div: 'swell', midi: 61, dur: 2.0, vel: 0.42 },  // Db4
        { t: 30.0, div: 'swell', midi: 56, dur: 2.0, vel: 0.40 },  // Ab3
        { t: 30.0, div: 'choir', midi: 49, dur: 2.0, vel: 0.40 },  // Db3
        { t: 30.0, div: 'pedal', midi: 37, dur: 2.0, vel: 0.42 },  // Db2

        // ===== PHRASE 3 (mm. 9-12): Middle section, richer harmonies =====
        // Modulating through Bbm, then back

        { t: 32.5, div: 'swell', midi: 70, dur: 1.5, vel: 0.52 },  // Bb4
        { t: 32.5, div: 'swell', midi: 65, dur: 1.5, vel: 0.43 },  // F4
        { t: 32.5, div: 'swell', midi: 61, dur: 1.5, vel: 0.40 },  // Db4
        { t: 32.5, div: 'choir', midi: 58, dur: 1.5, vel: 0.40 },  // Bb3
        { t: 32.5, div: 'pedal', midi: 46, dur: 1.5, vel: 0.44 },  // Bb2

        // Chromatic neighbor: A-natural (chromatic)
        { t: 34.0, div: 'swell', midi: 69, dur: 0.8, vel: 0.50 },  // A4 (chromatic!)
        { t: 34.0, div: 'swell', midi: 65, dur: 0.8, vel: 0.42 },  // F4
        { t: 34.0, div: 'swell', midi: 60, dur: 0.8, vel: 0.40 },  // C4

        { t: 34.8, div: 'swell', midi: 70, dur: 1.5, vel: 0.53 },  // Bb4 (resolution)
        { t: 34.8, div: 'swell', midi: 66, dur: 1.5, vel: 0.44 },  // Gb4
        { t: 34.8, div: 'swell', midi: 61, dur: 1.5, vel: 0.42 },  // Db4
        { t: 34.8, div: 'choir', midi: 54, dur: 1.5, vel: 0.42 },  // Gb3
        { t: 34.8, div: 'pedal', midi: 42, dur: 1.5, vel: 0.44 },  // Gb2

        // m.10: Ebm color
        { t: 36.3, div: 'swell', midi: 68, dur: 1.5, vel: 0.52 },  // Ab4
        { t: 36.3, div: 'swell', midi: 63, dur: 1.5, vel: 0.43 },  // Eb4
        { t: 36.3, div: 'swell', midi: 58, dur: 1.5, vel: 0.40 },  // Bb3
        { t: 36.3, div: 'choir', midi: 51, dur: 1.5, vel: 0.40 },  // Eb3
        { t: 36.3, div: 'pedal', midi: 39, dur: 1.5, vel: 0.42 },  // Eb2

        { t: 37.8, div: 'swell', midi: 66, dur: 1.5, vel: 0.50 },  // Gb4
        { t: 37.8, div: 'swell', midi: 63, dur: 1.5, vel: 0.42 },  // Eb4
        { t: 37.8, div: 'swell', midi: 58, dur: 1.5, vel: 0.40 },  // Bb3
        { t: 37.8, div: 'choir', midi: 51, dur: 1.5, vel: 0.40 },  // Eb3
        { t: 37.8, div: 'pedal', midi: 39, dur: 1.5, vel: 0.42 },  // Eb2

        // m.11: Rising again, Ab dominant 7th
        { t: 39.3, div: 'swell', midi: 68, dur: 1.5, vel: 0.53 },  // Ab4
        { t: 39.3, div: 'swell', midi: 63, dur: 1.5, vel: 0.44 },  // Eb4
        { t: 39.3, div: 'swell', midi: 60, dur: 1.5, vel: 0.42 },  // C4
        { t: 39.3, div: 'choir', midi: 56, dur: 1.5, vel: 0.42 },  // Ab3
        { t: 39.3, div: 'pedal', midi: 44, dur: 1.5, vel: 0.44 },  // Ab2

        // Gb passing tone in inner voice
        { t: 40.8, div: 'swell', midi: 66, dur: 0.8, vel: 0.48 },  // Gb4
        { t: 40.8, div: 'swell', midi: 61, dur: 0.8, vel: 0.40 },  // Db4
        { t: 40.8, div: 'swell', midi: 56, dur: 0.8, vel: 0.38 },  // Ab3

        // m.12: Resolution to Db major
        { t: 41.6, div: 'swell', midi: 65, dur: 2.5, vel: 0.50 },  // F4
        { t: 41.6, div: 'swell', midi: 61, dur: 2.5, vel: 0.42 },  // Db4
        { t: 41.6, div: 'swell', midi: 56, dur: 2.5, vel: 0.40 },  // Ab3
        { t: 41.6, div: 'choir', midi: 49, dur: 2.5, vel: 0.40 },  // Db3
        { t: 41.6, div: 'pedal', midi: 37, dur: 2.5, vel: 0.42 },  // Db2

        // ===== PHRASE 4 (mm. 13-16): Final phrase, dying away =====
        // Return of opening melody, quieter

        { t: 44.5, div: 'swell', midi: 65, dur: 2.0, vel: 0.46 },  // F4
        { t: 44.5, div: 'swell', midi: 61, dur: 2.0, vel: 0.38 },  // Db4
        { t: 44.5, div: 'swell', midi: 56, dur: 2.0, vel: 0.36 },  // Ab3
        { t: 44.5, div: 'choir', midi: 49, dur: 2.0, vel: 0.36 },  // Db3
        { t: 44.5, div: 'pedal', midi: 37, dur: 2.0, vel: 0.38 },  // Db2

        { t: 46.5, div: 'swell', midi: 68, dur: 1.5, vel: 0.48 },  // Ab4
        { t: 46.5, div: 'swell', midi: 63, dur: 1.5, vel: 0.40 },  // Eb4
        { t: 46.5, div: 'swell', midi: 56, dur: 1.5, vel: 0.38 },  // Ab3
        { t: 46.5, div: 'pedal', midi: 37, dur: 1.5, vel: 0.38 },  // Db2

        // Gentle turn: Gb4-F4
        { t: 48.0, div: 'swell', midi: 66, dur: 0.5, vel: 0.44 },  // Gb4
        { t: 48.5, div: 'swell', midi: 65, dur: 2.0, vel: 0.46 },  // F4

        // m.14: Eb4, descending
        { t: 48.5, div: 'swell', midi: 63, dur: 2.0, vel: 0.40 },  // Eb4
        { t: 48.5, div: 'swell', midi: 58, dur: 2.0, vel: 0.38 },  // Bb3
        { t: 48.5, div: 'choir', midi: 51, dur: 2.0, vel: 0.38 },  // Eb3
        { t: 48.5, div: 'pedal', midi: 39, dur: 2.0, vel: 0.40 },  // Eb2

        { t: 50.5, div: 'swell', midi: 61, dur: 1.5, vel: 0.44 },  // Db4
        { t: 50.5, div: 'swell', midi: 56, dur: 1.5, vel: 0.38 },  // Ab3
        { t: 50.5, div: 'swell', midi: 53, dur: 1.5, vel: 0.36 },  // F3

        // m.15-16: Final cadence, morendo
        { t: 52.0, div: 'swell', midi: 60, dur: 1.5, vel: 0.42 },  // C4 (passing)
        { t: 52.0, div: 'swell', midi: 56, dur: 1.5, vel: 0.38 },  // Ab3
        { t: 52.0, div: 'choir', midi: 51, dur: 1.5, vel: 0.36 },  // Eb3
        { t: 52.0, div: 'pedal', midi: 44, dur: 1.5, vel: 0.38 },  // Ab2

        // Final Db major chord, pppp
        { t: 53.5, div: 'swell', midi: 61, dur: 5.0, vel: 0.38 },  // Db4
        { t: 53.5, div: 'swell', midi: 56, dur: 5.0, vel: 0.34 },  // Ab3
        { t: 53.5, div: 'swell', midi: 53, dur: 5.0, vel: 0.32 },  // F3
        { t: 53.5, div: 'choir', midi: 49, dur: 5.0, vel: 0.33 },  // Db3
        { t: 53.5, div: 'pedal', midi: 37, dur: 5.0, vel: 0.35 },  // Db2
    ]
};

// ============================================================
// 6. Karg-Elert - Marche Triomphale "Nun danket alle Gott", Op. 65/59
// ============================================================
// Grand festive march on the famous hymn tune by Johann Crueger.
// Brilliant, triumphant conclusion piece for three manuals.
// Full organ with Grand Choeur registration, foundations and reeds.
// Key: F major. Time: 4/4. Tempo: Maestoso.
// The hymn melody is presented in augmentation with brilliant
// figuration surrounding it.
// ============================================================

const PIECE_KARG_ELERT_MARCHE = {
    title: "Marche Triomphale: Nun danket alle Gott",
    composer: "Sigfrid Karg-Elert",
    catalog: "Op. 65/59",
    key: "F major",
    tempo: 100,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-spitzflute4', 'ch-clarinet8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== INTRODUCTION (mm. 1-4): Brilliant fanfare in F major =====
        // Grand opening with full organ, establishing the festive character

        // m.1: F major fanfare chords
        { t: 0, div: 'great', midi: 77, dur: 0.5, vel: 0.96 },     // F5
        { t: 0, div: 'great', midi: 72, dur: 0.5, vel: 0.94 },     // C5
        { t: 0, div: 'great', midi: 69, dur: 0.5, vel: 0.92 },     // A4
        { t: 0, div: 'great', midi: 65, dur: 0.5, vel: 0.90 },     // F4
        { t: 0, div: 'pedal', midi: 41, dur: 0.5, vel: 0.94 },     // F2

        // Repeated fanfare rhythm (dotted quarter + eighth)
        { t: 0.5, div: 'great', midi: 77, dur: 1.2, vel: 0.97 },   // F5 dotted
        { t: 0.5, div: 'great', midi: 72, dur: 1.2, vel: 0.95 },   // C5
        { t: 0.5, div: 'great', midi: 69, dur: 1.2, vel: 0.93 },   // A4
        { t: 0.5, div: 'great', midi: 65, dur: 1.2, vel: 0.91 },   // F4
        { t: 0.5, div: 'pedal', midi: 41, dur: 1.5, vel: 0.94 },   // F2

        { t: 1.7, div: 'great', midi: 76, dur: 0.3, vel: 0.90 },   // E5 (eighth)
        { t: 1.7, div: 'great', midi: 72, dur: 0.3, vel: 0.88 },   // C5
        { t: 1.7, div: 'great', midi: 67, dur: 0.3, vel: 0.86 },   // G4

        // m.1 beat 3: A4 chord (dominant area)
        { t: 2.0, div: 'great', midi: 77, dur: 1.5, vel: 0.96 },   // F5
        { t: 2.0, div: 'great', midi: 72, dur: 1.5, vel: 0.94 },   // C5
        { t: 2.0, div: 'great', midi: 69, dur: 1.5, vel: 0.92 },   // A4
        { t: 2.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.88 },   // F4
        { t: 2.0, div: 'swell', midi: 60, dur: 1.5, vel: 0.86 },   // C4
        { t: 2.0, div: 'pedal', midi: 41, dur: 2.0, vel: 0.94 },   // F2

        // Brilliant scalar passage beat 4
        { t: 3.5, div: 'great', midi: 72, dur: 0.12, vel: 0.88 },  // C5
        { t: 3.62, div: 'great', midi: 74, dur: 0.12, vel: 0.88 }, // D5
        { t: 3.74, div: 'great', midi: 76, dur: 0.12, vel: 0.90 }, // E5
        { t: 3.86, div: 'great', midi: 77, dur: 0.12, vel: 0.92 }, // F5

        // m.2: Dominant C major
        { t: 4.0, div: 'great', midi: 79, dur: 1.5, vel: 0.96 },   // G5
        { t: 4.0, div: 'great', midi: 76, dur: 1.5, vel: 0.94 },   // E5
        { t: 4.0, div: 'great', midi: 72, dur: 1.5, vel: 0.92 },   // C5
        { t: 4.0, div: 'swell', midi: 67, dur: 1.5, vel: 0.88 },   // G4
        { t: 4.0, div: 'swell', midi: 64, dur: 1.5, vel: 0.86 },   // E4
        { t: 4.0, div: 'pedal', midi: 48, dur: 1.5, vel: 0.94 },   // C3

        // Descending run
        { t: 5.5, div: 'great', midi: 79, dur: 0.12, vel: 0.90 },  // G5
        { t: 5.62, div: 'great', midi: 77, dur: 0.12, vel: 0.88 }, // F5
        { t: 5.74, div: 'great', midi: 76, dur: 0.12, vel: 0.90 }, // E5
        { t: 5.86, div: 'great', midi: 74, dur: 0.12, vel: 0.88 }, // D5

        // m.2 beat 3: Back to F
        { t: 6.0, div: 'great', midi: 77, dur: 1.5, vel: 0.97 },   // F5
        { t: 6.0, div: 'great', midi: 72, dur: 1.5, vel: 0.95 },   // C5
        { t: 6.0, div: 'great', midi: 69, dur: 1.5, vel: 0.93 },   // A4
        { t: 6.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.88 },   // F4
        { t: 6.0, div: 'pedal', midi: 41, dur: 2.0, vel: 0.94 },   // F2

        // More fanfare figures
        { t: 7.5, div: 'great', midi: 77, dur: 0.12, vel: 0.92 },  // F5
        { t: 7.62, div: 'great', midi: 76, dur: 0.12, vel: 0.90 }, // E5
        { t: 7.74, div: 'great', midi: 77, dur: 0.12, vel: 0.92 }, // F5
        { t: 7.86, div: 'great', midi: 79, dur: 0.12, vel: 0.94 }, // G5

        // ===== HYMN VERSE 1 (mm. 5-16): "Nun danket alle Gott" =====
        // Melody in augmentation on Great, figuration on Swell/Choir
        // Hymn tune: F-F-F-G-A-Bb-Bb-A (first phrase)

        // m.5: Hymn note 1 - F4 (tonic) held as cantus firmus
        { t: 8.0, div: 'great', midi: 65, dur: 3.0, vel: 0.90 },   // F4 (hymn)
        { t: 8.0, div: 'great', midi: 72, dur: 3.0, vel: 0.88 },   // C5
        { t: 8.0, div: 'swell', midi: 60, dur: 3.0, vel: 0.80 },   // C4
        { t: 8.0, div: 'swell', midi: 57, dur: 3.0, vel: 0.78 },   // A3
        { t: 8.0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.88 },   // F2

        // Brilliant figuration around the hymn tone
        { t: 8.0, div: 'choir', midi: 77, dur: 0.3, vel: 0.82 },   // F5
        { t: 8.3, div: 'choir', midi: 76, dur: 0.3, vel: 0.80 },   // E5
        { t: 8.6, div: 'choir', midi: 77, dur: 0.3, vel: 0.82 },   // F5
        { t: 8.9, div: 'choir', midi: 79, dur: 0.3, vel: 0.84 },   // G5
        { t: 9.2, div: 'choir', midi: 77, dur: 0.3, vel: 0.82 },   // F5
        { t: 9.5, div: 'choir', midi: 76, dur: 0.3, vel: 0.80 },   // E5
        { t: 9.8, div: 'choir', midi: 74, dur: 0.3, vel: 0.82 },   // D5
        { t: 10.1, div: 'choir', midi: 72, dur: 0.3, vel: 0.80 },  // C5
        { t: 10.4, div: 'choir', midi: 74, dur: 0.3, vel: 0.82 },  // D5
        { t: 10.7, div: 'choir', midi: 76, dur: 0.3, vel: 0.84 },  // E5

        // m.6: Hymn note 2 - F4 (repeated tonic)
        { t: 11.0, div: 'great', midi: 65, dur: 3.0, vel: 0.90 },  // F4 (hymn)
        { t: 11.0, div: 'great', midi: 72, dur: 3.0, vel: 0.88 },  // C5
        { t: 11.0, div: 'swell', midi: 60, dur: 3.0, vel: 0.80 },  // C4
        { t: 11.0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.88 },  // F2

        // More figuration
        { t: 11.0, div: 'choir', midi: 77, dur: 0.3, vel: 0.82 },  // F5
        { t: 11.3, div: 'choir', midi: 79, dur: 0.3, vel: 0.84 },  // G5
        { t: 11.6, div: 'choir', midi: 77, dur: 0.3, vel: 0.82 },  // F5
        { t: 11.9, div: 'choir', midi: 76, dur: 0.3, vel: 0.80 },  // E5
        { t: 12.2, div: 'choir', midi: 74, dur: 0.3, vel: 0.82 },  // D5
        { t: 12.5, div: 'choir', midi: 76, dur: 0.3, vel: 0.84 },  // E5
        { t: 12.8, div: 'choir', midi: 77, dur: 0.3, vel: 0.82 },  // F5
        { t: 13.1, div: 'choir', midi: 79, dur: 0.3, vel: 0.84 },  // G5
        { t: 13.4, div: 'choir', midi: 81, dur: 0.3, vel: 0.86 },  // A5

        // m.7: Hymn note 3 - G4 (2nd degree, ascending)
        { t: 14.0, div: 'great', midi: 67, dur: 3.0, vel: 0.91 },  // G4 (hymn)
        { t: 14.0, div: 'great', midi: 74, dur: 3.0, vel: 0.89 },  // D5
        { t: 14.0, div: 'swell', midi: 62, dur: 3.0, vel: 0.80 },  // D4
        { t: 14.0, div: 'swell', midi: 59, dur: 3.0, vel: 0.78 },  // B3
        { t: 14.0, div: 'pedal', midi: 43, dur: 3.0, vel: 0.88 },  // G2

        // Choir figuration
        { t: 14.0, div: 'choir', midi: 79, dur: 0.3, vel: 0.82 },  // G5
        { t: 14.3, div: 'choir', midi: 77, dur: 0.3, vel: 0.80 },  // F5
        { t: 14.6, div: 'choir', midi: 79, dur: 0.3, vel: 0.82 },  // G5
        { t: 14.9, div: 'choir', midi: 81, dur: 0.3, vel: 0.84 },  // A5
        { t: 15.2, div: 'choir', midi: 79, dur: 0.3, vel: 0.82 },  // G5
        { t: 15.5, div: 'choir', midi: 77, dur: 0.3, vel: 0.80 },  // F5
        { t: 15.8, div: 'choir', midi: 76, dur: 0.3, vel: 0.82 },  // E5
        { t: 16.1, div: 'choir', midi: 74, dur: 0.3, vel: 0.80 },  // D5
        { t: 16.4, div: 'choir', midi: 76, dur: 0.3, vel: 0.82 },  // E5

        // m.8: Hymn note 4 - A4 (3rd degree)
        { t: 17.0, div: 'great', midi: 69, dur: 3.0, vel: 0.92 },  // A4 (hymn)
        { t: 17.0, div: 'great', midi: 76, dur: 3.0, vel: 0.90 },  // E5
        { t: 17.0, div: 'swell', midi: 65, dur: 3.0, vel: 0.82 },  // F4
        { t: 17.0, div: 'swell', midi: 60, dur: 3.0, vel: 0.80 },  // C4
        { t: 17.0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.90 },  // F2

        // Figuration
        { t: 17.0, div: 'choir', midi: 81, dur: 0.3, vel: 0.84 },  // A5
        { t: 17.3, div: 'choir', midi: 79, dur: 0.3, vel: 0.82 },  // G5
        { t: 17.6, div: 'choir', midi: 81, dur: 0.3, vel: 0.84 },  // A5
        { t: 17.9, div: 'choir', midi: 79, dur: 0.3, vel: 0.82 },  // G5
        { t: 18.2, div: 'choir', midi: 77, dur: 0.3, vel: 0.80 },  // F5
        { t: 18.5, div: 'choir', midi: 76, dur: 0.3, vel: 0.82 },  // E5
        { t: 18.8, div: 'choir', midi: 77, dur: 0.3, vel: 0.84 },  // F5
        { t: 19.1, div: 'choir', midi: 79, dur: 0.3, vel: 0.82 },  // G5
        { t: 19.4, div: 'choir', midi: 81, dur: 0.3, vel: 0.84 },  // A5

        // m.9: Hymn note 5 - Bb4 (4th degree, climax of phrase)
        { t: 20.0, div: 'great', midi: 70, dur: 3.0, vel: 0.94 },  // Bb4 (hymn peak)
        { t: 20.0, div: 'great', midi: 77, dur: 3.0, vel: 0.92 },  // F5
        { t: 20.0, div: 'swell', midi: 65, dur: 3.0, vel: 0.84 },  // F4
        { t: 20.0, div: 'swell', midi: 62, dur: 3.0, vel: 0.82 },  // D4
        { t: 20.0, div: 'pedal', midi: 46, dur: 3.0, vel: 0.92 },  // Bb2

        { t: 20.0, div: 'choir', midi: 82, dur: 0.3, vel: 0.86 },  // Bb5
        { t: 20.3, div: 'choir', midi: 81, dur: 0.3, vel: 0.84 },  // A5
        { t: 20.6, div: 'choir', midi: 82, dur: 0.3, vel: 0.86 },  // Bb5
        { t: 20.9, div: 'choir', midi: 84, dur: 0.3, vel: 0.88 },  // C6
        { t: 21.2, div: 'choir', midi: 82, dur: 0.3, vel: 0.86 },  // Bb5
        { t: 21.5, div: 'choir', midi: 81, dur: 0.3, vel: 0.84 },  // A5
        { t: 21.8, div: 'choir', midi: 79, dur: 0.3, vel: 0.82 },  // G5
        { t: 22.1, div: 'choir', midi: 77, dur: 0.3, vel: 0.84 },  // F5

        // m.10: Hymn note 6 - Bb4 (repeated)
        { t: 23.0, div: 'great', midi: 70, dur: 2.0, vel: 0.93 },  // Bb4 (hymn)
        { t: 23.0, div: 'great', midi: 74, dur: 2.0, vel: 0.91 },  // D5
        { t: 23.0, div: 'swell', midi: 65, dur: 2.0, vel: 0.83 },  // F4
        { t: 23.0, div: 'swell', midi: 58, dur: 2.0, vel: 0.81 },  // Bb3
        { t: 23.0, div: 'pedal', midi: 46, dur: 2.0, vel: 0.91 },  // Bb2

        // m.10 beat 3: Hymn note 7 - A4 (descending)
        { t: 25.0, div: 'great', midi: 69, dur: 2.0, vel: 0.92 },  // A4 (hymn)
        { t: 25.0, div: 'great', midi: 72, dur: 2.0, vel: 0.90 },  // C5
        { t: 25.0, div: 'swell', midi: 65, dur: 2.0, vel: 0.82 },  // F4
        { t: 25.0, div: 'swell', midi: 60, dur: 2.0, vel: 0.80 },  // C4
        { t: 25.0, div: 'pedal', midi: 41, dur: 2.0, vel: 0.90 },  // F2

        // Choir figuration continues
        { t: 23.0, div: 'choir', midi: 82, dur: 0.3, vel: 0.84 },  // Bb5
        { t: 23.3, div: 'choir', midi: 81, dur: 0.3, vel: 0.82 },  // A5
        { t: 23.6, div: 'choir', midi: 79, dur: 0.3, vel: 0.84 },  // G5
        { t: 23.9, div: 'choir', midi: 77, dur: 0.3, vel: 0.82 },  // F5
        { t: 24.2, div: 'choir', midi: 79, dur: 0.3, vel: 0.84 },  // G5
        { t: 24.5, div: 'choir', midi: 81, dur: 0.3, vel: 0.86 },  // A5
        { t: 24.8, div: 'choir', midi: 79, dur: 0.3, vel: 0.84 },  // G5
        { t: 25.1, div: 'choir', midi: 77, dur: 0.3, vel: 0.82 },  // F5
        { t: 25.4, div: 'choir', midi: 76, dur: 0.3, vel: 0.80 },  // E5
        { t: 25.7, div: 'choir', midi: 74, dur: 0.3, vel: 0.82 },  // D5
        { t: 26.0, div: 'choir', midi: 72, dur: 0.3, vel: 0.80 },  // C5

        // ===== HYMN PHRASE 2 (mm. 11-16): "der grosse Dinge tut" =====
        // F-F-E-D-D-E-F-E-D-C-D

        // m.11: Hymn note - F4
        { t: 27.0, div: 'great', midi: 65, dur: 2.0, vel: 0.90 },  // F4 (hymn)
        { t: 27.0, div: 'great', midi: 72, dur: 2.0, vel: 0.88 },  // C5
        { t: 27.0, div: 'swell', midi: 60, dur: 2.0, vel: 0.80 },  // C4
        { t: 27.0, div: 'swell', midi: 57, dur: 2.0, vel: 0.78 },  // A3
        { t: 27.0, div: 'pedal', midi: 41, dur: 2.0, vel: 0.88 },  // F2

        // m.11 beat 3: E4
        { t: 29.0, div: 'great', midi: 64, dur: 2.0, vel: 0.89 },  // E4 (hymn)
        { t: 29.0, div: 'great', midi: 72, dur: 2.0, vel: 0.87 },  // C5
        { t: 29.0, div: 'swell', midi: 60, dur: 2.0, vel: 0.79 },  // C4
        { t: 29.0, div: 'swell', midi: 55, dur: 2.0, vel: 0.77 },  // G3
        { t: 29.0, div: 'pedal', midi: 48, dur: 2.0, vel: 0.87 },  // C3

        // Choir figuration
        { t: 27.0, div: 'choir', midi: 77, dur: 0.3, vel: 0.82 },  // F5
        { t: 27.3, div: 'choir', midi: 76, dur: 0.3, vel: 0.80 },  // E5
        { t: 27.6, div: 'choir', midi: 74, dur: 0.3, vel: 0.82 },  // D5
        { t: 27.9, div: 'choir', midi: 72, dur: 0.3, vel: 0.80 },  // C5
        { t: 28.2, div: 'choir', midi: 74, dur: 0.3, vel: 0.82 },  // D5
        { t: 28.5, div: 'choir', midi: 76, dur: 0.3, vel: 0.84 },  // E5
        { t: 28.8, div: 'choir', midi: 77, dur: 0.3, vel: 0.82 },  // F5
        { t: 29.1, div: 'choir', midi: 76, dur: 0.3, vel: 0.80 },  // E5
        { t: 29.4, div: 'choir', midi: 74, dur: 0.3, vel: 0.82 },  // D5
        { t: 29.7, div: 'choir', midi: 72, dur: 0.3, vel: 0.80 },  // C5

        // m.12: D4 then E4 (ascending again)
        { t: 31.0, div: 'great', midi: 62, dur: 2.0, vel: 0.90 },  // D4 (hymn)
        { t: 31.0, div: 'great', midi: 69, dur: 2.0, vel: 0.88 },  // A4
        { t: 31.0, div: 'swell', midi: 62, dur: 2.0, vel: 0.80 },  // D4
        { t: 31.0, div: 'swell', midi: 58, dur: 2.0, vel: 0.78 },  // Bb3
        { t: 31.0, div: 'pedal', midi: 46, dur: 2.0, vel: 0.88 },  // Bb2

        { t: 33.0, div: 'great', midi: 64, dur: 2.0, vel: 0.91 },  // E4 (hymn)
        { t: 33.0, div: 'great', midi: 72, dur: 2.0, vel: 0.89 },  // C5
        { t: 33.0, div: 'swell', midi: 60, dur: 2.0, vel: 0.81 },  // C4
        { t: 33.0, div: 'swell', midi: 55, dur: 2.0, vel: 0.79 },  // G3
        { t: 33.0, div: 'pedal', midi: 48, dur: 2.0, vel: 0.89 },  // C3

        // Choir continues
        { t: 31.0, div: 'choir', midi: 74, dur: 0.3, vel: 0.82 },  // D5
        { t: 31.3, div: 'choir', midi: 72, dur: 0.3, vel: 0.80 },  // C5
        { t: 31.6, div: 'choir', midi: 74, dur: 0.3, vel: 0.82 },  // D5
        { t: 31.9, div: 'choir', midi: 76, dur: 0.3, vel: 0.84 },  // E5
        { t: 32.2, div: 'choir', midi: 77, dur: 0.3, vel: 0.82 },  // F5
        { t: 32.5, div: 'choir', midi: 76, dur: 0.3, vel: 0.80 },  // E5
        { t: 32.8, div: 'choir', midi: 74, dur: 0.3, vel: 0.82 },  // D5
        { t: 33.1, div: 'choir', midi: 76, dur: 0.3, vel: 0.84 },  // E5
        { t: 33.4, div: 'choir', midi: 77, dur: 0.3, vel: 0.82 },  // F5
        { t: 33.7, div: 'choir', midi: 79, dur: 0.3, vel: 0.84 },  // G5

        // m.13: F4 (returning to tonic) then descending D4-C4-D4
        { t: 35.0, div: 'great', midi: 65, dur: 2.0, vel: 0.92 },  // F4 (hymn)
        { t: 35.0, div: 'great', midi: 72, dur: 2.0, vel: 0.90 },  // C5
        { t: 35.0, div: 'swell', midi: 69, dur: 2.0, vel: 0.82 },  // A4
        { t: 35.0, div: 'swell', midi: 60, dur: 2.0, vel: 0.80 },  // C4
        { t: 35.0, div: 'pedal', midi: 41, dur: 2.0, vel: 0.90 },  // F2

        // m.13 beat 3: E4
        { t: 37.0, div: 'great', midi: 64, dur: 1.0, vel: 0.90 },  // E4
        { t: 37.0, div: 'great', midi: 72, dur: 1.0, vel: 0.88 },  // C5
        { t: 37.0, div: 'pedal', midi: 48, dur: 1.0, vel: 0.88 },  // C3

        // m.13 beat 4: D4
        { t: 38.0, div: 'great', midi: 62, dur: 1.0, vel: 0.90 },  // D4
        { t: 38.0, div: 'great', midi: 69, dur: 1.0, vel: 0.88 },  // A4
        { t: 38.0, div: 'pedal', midi: 38, dur: 1.0, vel: 0.88 },  // D2

        // m.14: C4 (brief) then D4 cadence
        { t: 39.0, div: 'great', midi: 60, dur: 1.5, vel: 0.89 },  // C4
        { t: 39.0, div: 'great', midi: 67, dur: 1.5, vel: 0.87 },  // G4
        { t: 39.0, div: 'swell', midi: 60, dur: 1.5, vel: 0.79 },  // C4
        { t: 39.0, div: 'pedal', midi: 48, dur: 1.5, vel: 0.87 },  // C3

        // Figuration cascade
        { t: 35.0, div: 'choir', midi: 77, dur: 0.3, vel: 0.82 },  // F5
        { t: 35.3, div: 'choir', midi: 79, dur: 0.3, vel: 0.84 },  // G5
        { t: 35.6, div: 'choir', midi: 77, dur: 0.3, vel: 0.82 },  // F5
        { t: 35.9, div: 'choir', midi: 76, dur: 0.3, vel: 0.80 },  // E5
        { t: 36.2, div: 'choir', midi: 74, dur: 0.3, vel: 0.82 },  // D5
        { t: 36.5, div: 'choir', midi: 72, dur: 0.3, vel: 0.80 },  // C5
        { t: 36.8, div: 'choir', midi: 71, dur: 0.3, vel: 0.82 },  // B4
        { t: 37.1, div: 'choir', midi: 72, dur: 0.3, vel: 0.84 },  // C5
        { t: 37.4, div: 'choir', midi: 74, dur: 0.3, vel: 0.82 },  // D5
        { t: 37.7, div: 'choir', midi: 72, dur: 0.3, vel: 0.80 },  // C5
        { t: 38.0, div: 'choir', midi: 71, dur: 0.3, vel: 0.82 },  // B4
        { t: 38.3, div: 'choir', midi: 69, dur: 0.3, vel: 0.80 },  // A4
        { t: 38.6, div: 'choir', midi: 67, dur: 0.3, vel: 0.78 },  // G4

        // ===== CODA (mm. 15-18): Grand conclusion =====
        // Final statement of hymn melody, massive chords, fff

        // Cadential 6/4
        { t: 40.5, div: 'great', midi: 62, dur: 1.0, vel: 0.92 },  // D4
        { t: 40.5, div: 'great', midi: 67, dur: 1.0, vel: 0.90 },  // G4
        { t: 40.5, div: 'swell', midi: 59, dur: 1.0, vel: 0.82 },  // B3
        { t: 40.5, div: 'pedal', midi: 43, dur: 1.0, vel: 0.90 },  // G2

        // Final F cadence approach
        { t: 41.5, div: 'great', midi: 65, dur: 1.5, vel: 0.95 },  // F4
        { t: 41.5, div: 'great', midi: 72, dur: 1.5, vel: 0.93 },  // C5
        { t: 41.5, div: 'great', midi: 69, dur: 1.5, vel: 0.91 },  // A4
        { t: 41.5, div: 'swell', midi: 60, dur: 1.5, vel: 0.85 },  // C4
        { t: 41.5, div: 'swell', midi: 57, dur: 1.5, vel: 0.83 },  // A3
        { t: 41.5, div: 'pedal', midi: 41, dur: 1.5, vel: 0.93 },  // F2

        // Scalar flourish upward
        { t: 43.0, div: 'great', midi: 65, dur: 0.12, vel: 0.90 }, // F4
        { t: 43.12, div: 'great', midi: 67, dur: 0.12, vel: 0.90 },// G4
        { t: 43.24, div: 'great', midi: 69, dur: 0.12, vel: 0.92 },// A4
        { t: 43.36, div: 'great', midi: 70, dur: 0.12, vel: 0.92 },// Bb4
        { t: 43.48, div: 'great', midi: 72, dur: 0.12, vel: 0.94 },// C5
        { t: 43.6, div: 'great', midi: 74, dur: 0.12, vel: 0.94 }, // D5
        { t: 43.72, div: 'great', midi: 76, dur: 0.12, vel: 0.96 },// E5
        { t: 43.84, div: 'great', midi: 77, dur: 0.5, vel: 0.98 }, // F5

        // Dominant chord (C major, massive)
        { t: 44.5, div: 'great', midi: 79, dur: 1.0, vel: 0.97 },  // G5
        { t: 44.5, div: 'great', midi: 76, dur: 1.0, vel: 0.95 },  // E5
        { t: 44.5, div: 'great', midi: 72, dur: 1.0, vel: 0.93 },  // C5
        { t: 44.5, div: 'swell', midi: 67, dur: 1.0, vel: 0.88 },  // G4
        { t: 44.5, div: 'swell', midi: 64, dur: 1.0, vel: 0.86 },  // E4
        { t: 44.5, div: 'swell', midi: 60, dur: 1.0, vel: 0.84 },  // C4
        { t: 44.5, div: 'pedal', midi: 48, dur: 1.0, vel: 0.95 },  // C3
        { t: 44.5, div: 'pedal', midi: 36, dur: 1.0, vel: 0.90 },  // C2

        // FINAL F MAJOR CHORD - fff, full organ, triumphant conclusion
        { t: 45.5, div: 'great', midi: 77, dur: 4.0, vel: 0.98 },  // F5
        { t: 45.5, div: 'great', midi: 72, dur: 4.0, vel: 0.96 },  // C5
        { t: 45.5, div: 'great', midi: 69, dur: 4.0, vel: 0.94 },  // A4
        { t: 45.5, div: 'great', midi: 65, dur: 4.0, vel: 0.92 },  // F4
        { t: 45.5, div: 'swell', midi: 60, dur: 4.0, vel: 0.88 },  // C4
        { t: 45.5, div: 'swell', midi: 57, dur: 4.0, vel: 0.86 },  // A3
        { t: 45.5, div: 'swell', midi: 53, dur: 4.0, vel: 0.84 },  // F3
        { t: 45.5, div: 'pedal', midi: 41, dur: 4.0, vel: 0.96 },  // F2
        { t: 45.5, div: 'pedal', midi: 29, dur: 4.0, vel: 0.90 },  // F1 (32')
    ]
};
