// ============================================================
// Transcriptions & Concert Organ Pieces Collection
// ============================================================
// Six transcription and concert organ works encoded for Cathedral Grand organ simulator
// MIDI reference: C2=36, D2=38, E2=40, F2=41, G2=43, A2=45, Bb2=46, B2=47
//                 C3=48, D3=50, Eb3=51, E3=52, F3=53, G3=55, Ab3=56, A3=57, Bb3=58, B3=59
//                 C4=60, D4=62, Eb4=63, E4=64, F4=65, F#4=66, G4=67, Ab4=68, A4=69, Bb4=70, B4=71
//                 C5=72, D5=74, Eb5=75, E5=76, F5=77, G5=79, A5=81, B5=83
// ============================================================

// ============================================================
// 1. Bach-Vivaldi — Concerto in A minor, BWV 593
// ============================================================
// Transcription of Vivaldi's Double Violin Concerto Op.3/8 (RV 522).
// First movement Allegro: energetic driving rhythms, parallel thirds,
// descending chromatic fourths, rapidly repeated notes.
// A minor throughout opening ritornello, modulating to C major then E minor.
// Bach transferred violin idioms directly to the organ.
// ============================================================

const PIECE_BACH_VIVALDI = {
    title: "Concerto in A minor (after Vivaldi)",
    composer: "Johann Sebastian Bach",
    catalog: "BWV 593",
    key: "A minor",
    tempo: 120,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4'],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8']
    },
    events: [
        // ======== MOVEMENT I: Allegro — Ritornello (bars 1-8) ========
        // Tutti unison opening: driving eighth-note figure in A minor
        // Bar 1: A minor chord attack then driving eighths
        { t: 0, div: 'great', midi: 69, dur: 0.4, vel: 0.90 },      // A4
        { t: 0, div: 'great', midi: 64, dur: 0.4, vel: 0.85 },      // E4
        { t: 0, div: 'great', midi: 60, dur: 0.4, vel: 0.85 },      // C4
        { t: 0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.85 },      // A2
        { t: 0.5, div: 'great', midi: 69, dur: 0.25, vel: 0.85 },   // A4
        { t: 0.75, div: 'great', midi: 71, dur: 0.25, vel: 0.83 },  // B4
        { t: 1.0, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },   // C5
        { t: 1.25, div: 'great', midi: 71, dur: 0.25, vel: 0.83 },  // B4
        { t: 1.5, div: 'great', midi: 69, dur: 0.25, vel: 0.85 },   // A4
        { t: 1.75, div: 'great', midi: 67, dur: 0.25, vel: 0.83 },  // G4

        // Bar 2: continuation of ritornello theme
        { t: 2.0, div: 'great', midi: 65, dur: 0.4, vel: 0.88 },    // F4
        { t: 2.0, div: 'great', midi: 69, dur: 0.4, vel: 0.85 },    // A4
        { t: 2.0, div: 'pedal', midi: 41, dur: 2.0, vel: 0.82 },    // F2
        { t: 2.5, div: 'great', midi: 65, dur: 0.25, vel: 0.83 },   // F4
        { t: 2.75, div: 'great', midi: 67, dur: 0.25, vel: 0.82 },  // G4
        { t: 3.0, div: 'great', midi: 69, dur: 0.25, vel: 0.85 },   // A4
        { t: 3.25, div: 'great', midi: 67, dur: 0.25, vel: 0.82 },  // G4
        { t: 3.5, div: 'great', midi: 65, dur: 0.25, vel: 0.83 },   // F4
        { t: 3.75, div: 'great', midi: 64, dur: 0.25, vel: 0.80 },  // E4

        // Bar 3: rising sequence in parallel thirds
        { t: 4.0, div: 'great', midi: 62, dur: 0.5, vel: 0.87 },    // D4
        { t: 4.0, div: 'swell', midi: 65, dur: 0.5, vel: 0.78 },    // F4 (third above)
        { t: 4.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.82 },    // D2
        { t: 4.5, div: 'great', midi: 64, dur: 0.5, vel: 0.87 },    // E4
        { t: 4.5, div: 'swell', midi: 67, dur: 0.5, vel: 0.78 },    // G4
        { t: 5.0, div: 'great', midi: 65, dur: 0.5, vel: 0.88 },    // F4
        { t: 5.0, div: 'swell', midi: 69, dur: 0.5, vel: 0.80 },    // A4
        { t: 5.5, div: 'great', midi: 67, dur: 0.5, vel: 0.88 },    // G4
        { t: 5.5, div: 'swell', midi: 71, dur: 0.5, vel: 0.80 },    // B4

        // Bar 4: arrival on E, dominant; descending chromatic fourth
        { t: 6.0, div: 'great', midi: 76, dur: 0.4, vel: 0.90 },    // E5
        { t: 6.0, div: 'great', midi: 72, dur: 0.4, vel: 0.85 },    // C5
        { t: 6.0, div: 'pedal', midi: 40, dur: 2.0, vel: 0.85 },    // E2
        { t: 6.5, div: 'great', midi: 76, dur: 0.25, vel: 0.85 },   // E5
        { t: 6.75, div: 'great', midi: 75, dur: 0.25, vel: 0.83 },  // Eb5
        { t: 7.0, div: 'great', midi: 74, dur: 0.25, vel: 0.83 },   // D5
        { t: 7.25, div: 'great', midi: 73, dur: 0.25, vel: 0.82 },  // C#5
        { t: 7.5, div: 'great', midi: 72, dur: 0.25, vel: 0.82 },   // C5
        { t: 7.75, div: 'great', midi: 71, dur: 0.25, vel: 0.80 },  // B4

        // Bar 5: A minor return, repeated-note violin idiom
        { t: 8.0, div: 'great', midi: 69, dur: 0.15, vel: 0.88 },   // A4 repeated
        { t: 8.25, div: 'great', midi: 69, dur: 0.15, vel: 0.86 },  // A4
        { t: 8.5, div: 'great', midi: 69, dur: 0.15, vel: 0.88 },   // A4
        { t: 8.75, div: 'great', midi: 69, dur: 0.15, vel: 0.86 },  // A4
        { t: 8.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.85 },    // A2
        { t: 8.0, div: 'swell', midi: 60, dur: 1.0, vel: 0.75 },    // C4
        { t: 8.0, div: 'swell', midi: 64, dur: 1.0, vel: 0.75 },    // E4
        { t: 9.0, div: 'great', midi: 72, dur: 0.25, vel: 0.88 },   // C5
        { t: 9.25, div: 'great', midi: 71, dur: 0.25, vel: 0.85 },  // B4
        { t: 9.5, div: 'great', midi: 69, dur: 0.25, vel: 0.85 },   // A4
        { t: 9.75, div: 'great', midi: 67, dur: 0.25, vel: 0.83 },  // G4

        // Bar 6: Sequential continuation
        { t: 10.0, div: 'great', midi: 65, dur: 0.15, vel: 0.88 },  // F4 repeated
        { t: 10.25, div: 'great', midi: 65, dur: 0.15, vel: 0.86 }, // F4
        { t: 10.5, div: 'great', midi: 65, dur: 0.15, vel: 0.88 },  // F4
        { t: 10.75, div: 'great', midi: 65, dur: 0.15, vel: 0.86 }, // F4
        { t: 10.0, div: 'pedal', midi: 41, dur: 2.0, vel: 0.82 },   // F2
        { t: 10.0, div: 'swell', midi: 57, dur: 1.0, vel: 0.75 },   // A3
        { t: 10.0, div: 'swell', midi: 60, dur: 1.0, vel: 0.75 },   // C4
        { t: 11.0, div: 'great', midi: 69, dur: 0.25, vel: 0.87 },  // A4
        { t: 11.25, div: 'great', midi: 67, dur: 0.25, vel: 0.85 }, // G4
        { t: 11.5, div: 'great', midi: 65, dur: 0.25, vel: 0.83 },  // F4
        { t: 11.75, div: 'great', midi: 64, dur: 0.25, vel: 0.82 }, // E4

        // Bar 7: Dominant preparation — rapid sixteenths (violin tremolo idiom)
        { t: 12.0, div: 'great', midi: 64, dur: 0.12, vel: 0.88 },  // E4
        { t: 12.12, div: 'great', midi: 68, dur: 0.12, vel: 0.85 }, // Ab4
        { t: 12.25, div: 'great', midi: 71, dur: 0.12, vel: 0.88 }, // B4
        { t: 12.37, div: 'great', midi: 68, dur: 0.12, vel: 0.85 }, // Ab4
        { t: 12.5, div: 'great', midi: 64, dur: 0.12, vel: 0.88 },  // E4
        { t: 12.62, div: 'great', midi: 68, dur: 0.12, vel: 0.85 }, // Ab4
        { t: 12.75, div: 'great', midi: 71, dur: 0.12, vel: 0.88 }, // B4
        { t: 12.87, div: 'great', midi: 68, dur: 0.12, vel: 0.85 }, // Ab4
        { t: 12.0, div: 'pedal', midi: 40, dur: 2.0, vel: 0.85 },   // E2
        { t: 13.0, div: 'great', midi: 64, dur: 0.12, vel: 0.90 },  // E4
        { t: 13.12, div: 'great', midi: 68, dur: 0.12, vel: 0.87 }, // Ab4
        { t: 13.25, div: 'great', midi: 71, dur: 0.12, vel: 0.90 }, // B4
        { t: 13.37, div: 'great', midi: 76, dur: 0.12, vel: 0.92 }, // E5
        { t: 13.5, div: 'great', midi: 71, dur: 0.12, vel: 0.88 },  // B4
        { t: 13.62, div: 'great', midi: 68, dur: 0.12, vel: 0.85 }, // Ab4
        { t: 13.75, div: 'great', midi: 64, dur: 0.12, vel: 0.83 }, // E4
        { t: 13.87, div: 'great', midi: 68, dur: 0.12, vel: 0.85 }, // Ab4

        // Bar 8: Resolution to A minor — cadential figure
        { t: 14.0, div: 'great', midi: 69, dur: 1.0, vel: 0.92 },   // A4
        { t: 14.0, div: 'great', midi: 64, dur: 1.0, vel: 0.87 },   // E4
        { t: 14.0, div: 'great', midi: 60, dur: 1.0, vel: 0.85 },   // C4
        { t: 14.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.88 },   // A2

        // ======== Solo episode 1 (bars 9-16): Violin I solo on Swell ========
        // Lyrical solo passage, Swell manual, lighter texture
        // Bar 9: Solo violin melody over light bass
        { t: 16.0, div: 'swell', midi: 69, dur: 0.5, vel: 0.82 },   // A4
        { t: 16.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.84 },   // C5
        { t: 17.0, div: 'swell', midi: 76, dur: 0.75, vel: 0.86 },  // E5
        { t: 17.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.82 }, // D5
        { t: 16.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.70 },   // A2

        // Bar 10: Melody continues descending
        { t: 18.0, div: 'swell', midi: 72, dur: 0.5, vel: 0.84 },   // C5
        { t: 18.5, div: 'swell', midi: 71, dur: 0.25, vel: 0.82 },  // B4
        { t: 18.75, div: 'swell', midi: 69, dur: 0.25, vel: 0.80 }, // A4
        { t: 19.0, div: 'swell', midi: 67, dur: 0.5, vel: 0.82 },   // G4
        { t: 19.5, div: 'swell', midi: 69, dur: 0.5, vel: 0.84 },   // A4
        { t: 18.0, div: 'pedal', midi: 40, dur: 2.0, vel: 0.68 },   // E2

        // Bar 11: Rising sequence
        { t: 20.0, div: 'swell', midi: 71, dur: 0.5, vel: 0.84 },   // B4
        { t: 20.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.86 },   // D5
        { t: 21.0, div: 'swell', midi: 76, dur: 0.75, vel: 0.88 },  // E5
        { t: 21.75, div: 'swell', midi: 77, dur: 0.25, vel: 0.86 }, // F5
        { t: 20.0, div: 'pedal', midi: 43, dur: 2.0, vel: 0.70 },   // G2

        // Bar 12: Violin II enters on Great, dialogue
        { t: 22.0, div: 'swell', midi: 76, dur: 1.0, vel: 0.85 },   // E5 held
        { t: 22.0, div: 'great', midi: 60, dur: 0.5, vel: 0.80 },   // C4
        { t: 22.5, div: 'great', midi: 64, dur: 0.5, vel: 0.82 },   // E4
        { t: 23.0, div: 'great', midi: 67, dur: 0.75, vel: 0.84 },  // G4
        { t: 23.75, div: 'great', midi: 65, dur: 0.25, vel: 0.80 }, // F4
        { t: 22.0, div: 'pedal', midi: 48, dur: 2.0, vel: 0.72 },   // C3

        // Bar 13: Both soloists in parallel thirds
        { t: 24.0, div: 'swell', midi: 76, dur: 0.25, vel: 0.85 },  // E5
        { t: 24.0, div: 'great', midi: 72, dur: 0.25, vel: 0.82 },  // C5
        { t: 24.25, div: 'swell', midi: 74, dur: 0.25, vel: 0.83 }, // D5
        { t: 24.25, div: 'great', midi: 71, dur: 0.25, vel: 0.80 }, // B4
        { t: 24.5, div: 'swell', midi: 72, dur: 0.25, vel: 0.84 },  // C5
        { t: 24.5, div: 'great', midi: 69, dur: 0.25, vel: 0.82 },  // A4
        { t: 24.75, div: 'swell', midi: 71, dur: 0.25, vel: 0.82 }, // B4
        { t: 24.75, div: 'great', midi: 67, dur: 0.25, vel: 0.80 }, // G4
        { t: 25.0, div: 'swell', midi: 69, dur: 0.25, vel: 0.85 },  // A4
        { t: 25.0, div: 'great', midi: 65, dur: 0.25, vel: 0.82 },  // F4
        { t: 25.25, div: 'swell', midi: 67, dur: 0.25, vel: 0.83 }, // G4
        { t: 25.25, div: 'great', midi: 64, dur: 0.25, vel: 0.80 }, // E4
        { t: 25.5, div: 'swell', midi: 65, dur: 0.25, vel: 0.82 },  // F4
        { t: 25.5, div: 'great', midi: 62, dur: 0.25, vel: 0.80 },  // D4
        { t: 25.75, div: 'swell', midi: 64, dur: 0.25, vel: 0.80 }, // E4
        { t: 25.75, div: 'great', midi: 60, dur: 0.25, vel: 0.78 }, // C4
        { t: 24.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.72 },   // A2

        // Bar 14-15: Demisemiquaver passage (rippling LH tremolo idiom)
        { t: 26.0, div: 'swell', midi: 69, dur: 2.0, vel: 0.85 },   // A4 sustained
        { t: 26.0, div: 'great', midi: 60, dur: 0.12, vel: 0.78 },  // C4
        { t: 26.12, div: 'great', midi: 64, dur: 0.12, vel: 0.76 }, // E4
        { t: 26.25, div: 'great', midi: 60, dur: 0.12, vel: 0.78 }, // C4
        { t: 26.37, div: 'great', midi: 64, dur: 0.12, vel: 0.76 }, // E4
        { t: 26.5, div: 'great', midi: 60, dur: 0.12, vel: 0.78 },  // C4
        { t: 26.62, div: 'great', midi: 64, dur: 0.12, vel: 0.76 }, // E4
        { t: 26.75, div: 'great', midi: 60, dur: 0.12, vel: 0.78 }, // C4
        { t: 26.87, div: 'great', midi: 64, dur: 0.12, vel: 0.76 }, // E4
        { t: 26.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.72 },   // A2
        { t: 27.0, div: 'great', midi: 62, dur: 0.12, vel: 0.78 },  // D4
        { t: 27.12, div: 'great', midi: 65, dur: 0.12, vel: 0.76 }, // F4
        { t: 27.25, div: 'great', midi: 62, dur: 0.12, vel: 0.78 }, // D4
        { t: 27.37, div: 'great', midi: 65, dur: 0.12, vel: 0.76 }, // F4
        { t: 27.5, div: 'great', midi: 62, dur: 0.12, vel: 0.78 },  // D4
        { t: 27.62, div: 'great', midi: 65, dur: 0.12, vel: 0.76 }, // F4
        { t: 27.75, div: 'great', midi: 62, dur: 0.12, vel: 0.78 }, // D4
        { t: 27.87, div: 'great', midi: 65, dur: 0.12, vel: 0.76 }, // F4

        // Bar 16: Cadence returning to tutti
        { t: 28.0, div: 'great', midi: 64, dur: 0.25, vel: 0.88 },  // E4
        { t: 28.25, div: 'great', midi: 68, dur: 0.25, vel: 0.86 }, // Ab4
        { t: 28.5, div: 'great', midi: 71, dur: 0.25, vel: 0.88 },  // B4
        { t: 28.75, div: 'great', midi: 76, dur: 0.25, vel: 0.90 }, // E5
        { t: 28.0, div: 'pedal', midi: 40, dur: 1.0, vel: 0.82 },   // E2
        { t: 29.0, div: 'great', midi: 69, dur: 1.0, vel: 0.92 },   // A4
        { t: 29.0, div: 'great', midi: 64, dur: 1.0, vel: 0.88 },   // E4
        { t: 29.0, div: 'great', midi: 60, dur: 1.0, vel: 0.85 },   // C4
        { t: 29.0, div: 'pedal', midi: 45, dur: 1.0, vel: 0.85 },   // A2

        // ======== Ritornello return (bars 17-24) — now in C major ========
        // Bar 17: Theme transposed to C major
        { t: 30.0, div: 'great', midi: 72, dur: 0.4, vel: 0.90 },   // C5
        { t: 30.0, div: 'great', midi: 67, dur: 0.4, vel: 0.85 },   // G4
        { t: 30.0, div: 'great', midi: 64, dur: 0.4, vel: 0.85 },   // E4
        { t: 30.0, div: 'pedal', midi: 48, dur: 2.0, vel: 0.85 },   // C3
        { t: 30.5, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },  // C5
        { t: 30.75, div: 'great', midi: 74, dur: 0.25, vel: 0.83 }, // D5
        { t: 31.0, div: 'great', midi: 76, dur: 0.25, vel: 0.85 },  // E5
        { t: 31.25, div: 'great', midi: 74, dur: 0.25, vel: 0.83 }, // D5
        { t: 31.5, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },  // C5
        { t: 31.75, div: 'great', midi: 71, dur: 0.25, vel: 0.83 }, // B4

        // Bar 18: C major continuation
        { t: 32.0, div: 'great', midi: 69, dur: 0.4, vel: 0.88 },   // A4
        { t: 32.0, div: 'great', midi: 72, dur: 0.4, vel: 0.85 },   // C5
        { t: 32.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.82 },   // A2
        { t: 32.5, div: 'great', midi: 69, dur: 0.25, vel: 0.83 },  // A4
        { t: 32.75, div: 'great', midi: 71, dur: 0.25, vel: 0.82 }, // B4
        { t: 33.0, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },  // C5
        { t: 33.25, div: 'great', midi: 71, dur: 0.25, vel: 0.82 }, // B4
        { t: 33.5, div: 'great', midi: 69, dur: 0.25, vel: 0.83 },  // A4
        { t: 33.75, div: 'great', midi: 67, dur: 0.25, vel: 0.80 }, // G4

        // Bar 19-20: Parallel thirds ascending in C major
        { t: 34.0, div: 'great', midi: 64, dur: 0.5, vel: 0.87 },   // E4
        { t: 34.0, div: 'swell', midi: 67, dur: 0.5, vel: 0.78 },   // G4
        { t: 34.0, div: 'pedal', midi: 48, dur: 2.0, vel: 0.82 },   // C3
        { t: 34.5, div: 'great', midi: 65, dur: 0.5, vel: 0.87 },   // F4
        { t: 34.5, div: 'swell', midi: 69, dur: 0.5, vel: 0.78 },   // A4
        { t: 35.0, div: 'great', midi: 67, dur: 0.5, vel: 0.88 },   // G4
        { t: 35.0, div: 'swell', midi: 71, dur: 0.5, vel: 0.80 },   // B4
        { t: 35.5, div: 'great', midi: 69, dur: 0.5, vel: 0.88 },   // A4
        { t: 35.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.80 },   // C5

        // Bar 21-22: Dominant of A minor (E), transition back
        { t: 36.0, div: 'great', midi: 71, dur: 0.15, vel: 0.88 },  // B4 repeated
        { t: 36.25, div: 'great', midi: 71, dur: 0.15, vel: 0.86 }, // B4
        { t: 36.5, div: 'great', midi: 71, dur: 0.15, vel: 0.88 },  // B4
        { t: 36.75, div: 'great', midi: 71, dur: 0.15, vel: 0.86 }, // B4
        { t: 36.0, div: 'pedal', midi: 40, dur: 2.0, vel: 0.85 },   // E2
        { t: 36.0, div: 'swell', midi: 64, dur: 1.0, vel: 0.75 },   // E4
        { t: 36.0, div: 'swell', midi: 68, dur: 1.0, vel: 0.75 },   // Ab4
        { t: 37.0, div: 'great', midi: 76, dur: 0.25, vel: 0.88 },  // E5
        { t: 37.25, div: 'great', midi: 74, dur: 0.25, vel: 0.85 }, // D5
        { t: 37.5, div: 'great', midi: 72, dur: 0.25, vel: 0.85 },  // C5
        { t: 37.75, div: 'great', midi: 71, dur: 0.25, vel: 0.83 }, // B4

        // Bar 23-24: Final cadence, A minor tutti
        { t: 38.0, div: 'great', midi: 69, dur: 0.12, vel: 0.90 },  // A4
        { t: 38.12, div: 'great', midi: 72, dur: 0.12, vel: 0.88 }, // C5
        { t: 38.25, div: 'great', midi: 76, dur: 0.12, vel: 0.90 }, // E5
        { t: 38.37, div: 'great', midi: 72, dur: 0.12, vel: 0.88 }, // C5
        { t: 38.5, div: 'great', midi: 69, dur: 0.12, vel: 0.90 },  // A4
        { t: 38.62, div: 'great', midi: 72, dur: 0.12, vel: 0.88 }, // C5
        { t: 38.75, div: 'great', midi: 76, dur: 0.12, vel: 0.92 }, // E5
        { t: 38.87, div: 'great', midi: 81, dur: 0.12, vel: 0.93 }, // A5
        { t: 38.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.88 },   // A2
        { t: 39.0, div: 'great', midi: 69, dur: 1.5, vel: 0.95 },   // A4 final
        { t: 39.0, div: 'great', midi: 64, dur: 1.5, vel: 0.90 },   // E4
        { t: 39.0, div: 'great', midi: 60, dur: 1.5, vel: 0.88 },   // C4
        { t: 39.0, div: 'swell', midi: 69, dur: 1.5, vel: 0.85 },   // A4
        { t: 39.0, div: 'pedal', midi: 45, dur: 1.5, vel: 0.90 },   // A2
    ]
};

// ============================================================
// 2. Barber — Adagio for Strings, Op. 11 (arr. for organ)
// ============================================================
// The famous elegiac Adagio, arr. William Strickland (1949).
// Key of Bb minor. Very slow, building intensity.
// Opening: unison Bb, then ascending three-note motif (Bb-C-Db)
// repeated and transposed upward, creating arch form.
// Massive climax on high Gb then sudden silence (grand pause),
// followed by quiet coda. Velocity shapes the long crescendo.
// ============================================================

const PIECE_BARBER_ADAGIO = {
    title: "Adagio for Strings, Op. 11",
    composer: "Samuel Barber",
    catalog: "Op. 11",
    key: "Bb minor",
    tempo: 40,
    tempoChanges: [
        { t: 0, tempo: 40, label: "Molto adagio" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-tremulant'],
        choir: ['ch-flute8'],
        pedal: ['pd-subbass32', 'pd-principal16']
    },
    events: [
        // ======== Opening: Unison Bb, pp — very soft beginning ========
        // Bar 1-2: First violins alone, the three-note ascending motif
        { t: 0, div: 'swell', midi: 58, dur: 3.0, vel: 0.35 },      // Bb3 — opening unison
        { t: 0, div: 'pedal', midi: 46, dur: 6.0, vel: 0.30 },      // Bb2 pedal point

        // First three-note figure: Bb-C-Db
        { t: 3.0, div: 'swell', midi: 58, dur: 1.5, vel: 0.38 },    // Bb3
        { t: 4.5, div: 'swell', midi: 60, dur: 1.5, vel: 0.40 },    // C4
        { t: 6.0, div: 'swell', midi: 61, dur: 2.0, vel: 0.42 },    // Db4

        // Bar 3-4: Second three-note figure, up a step: C-Db-Eb
        { t: 8.0, div: 'swell', midi: 60, dur: 1.5, vel: 0.42 },    // C4
        { t: 9.5, div: 'swell', midi: 61, dur: 1.5, vel: 0.44 },    // Db4
        { t: 11.0, div: 'swell', midi: 63, dur: 2.0, vel: 0.46 },   // Eb4
        { t: 8.0, div: 'pedal', midi: 46, dur: 6.0, vel: 0.32 },    // Bb2

        // Bar 5-6: Third figure, continuing ascent: Db-Eb-F
        { t: 14.0, div: 'swell', midi: 61, dur: 1.5, vel: 0.46 },   // Db4
        { t: 15.5, div: 'swell', midi: 63, dur: 1.5, vel: 0.48 },   // Eb4
        { t: 17.0, div: 'swell', midi: 65, dur: 2.0, vel: 0.50 },   // F4
        { t: 14.0, div: 'pedal', midi: 53, dur: 5.0, vel: 0.34 },   // F3

        // ======== Lower strings enter — second voice (bars 7-10) ========
        // Descending scale response in lower voice
        { t: 19.0, div: 'swell', midi: 65, dur: 1.0, vel: 0.50 },   // F4 held
        { t: 19.0, div: 'choir', midi: 58, dur: 1.5, vel: 0.38 },   // Bb3 — second voice
        { t: 20.5, div: 'choir', midi: 60, dur: 1.5, vel: 0.40 },   // C4
        { t: 22.0, div: 'choir', midi: 61, dur: 2.0, vel: 0.42 },   // Db4
        { t: 19.0, div: 'pedal', midi: 46, dur: 6.0, vel: 0.35 },   // Bb2

        // First voice continues ascending: Eb-F-Gb
        { t: 20.0, div: 'swell', midi: 63, dur: 1.5, vel: 0.52 },   // Eb4
        { t: 21.5, div: 'swell', midi: 65, dur: 1.5, vel: 0.55 },   // F4
        { t: 23.0, div: 'swell', midi: 66, dur: 2.0, vel: 0.58 },   // Gb4

        // Bar 11-14: Building intensity — more voices, crescendo
        { t: 25.0, div: 'swell', midi: 66, dur: 1.5, vel: 0.58 },   // Gb4
        { t: 26.5, div: 'swell', midi: 68, dur: 1.5, vel: 0.62 },   // Ab4
        { t: 28.0, div: 'swell', midi: 70, dur: 2.0, vel: 0.65 },   // Bb4
        { t: 25.0, div: 'choir', midi: 61, dur: 1.5, vel: 0.48 },   // Db4
        { t: 26.5, div: 'choir', midi: 63, dur: 1.5, vel: 0.50 },   // Eb4
        { t: 28.0, div: 'choir', midi: 65, dur: 2.0, vel: 0.53 },   // F4
        { t: 25.0, div: 'pedal', midi: 53, dur: 6.0, vel: 0.40 },   // F3

        // Bar 15-18: Great organ enters — growing fullness
        { t: 30.0, div: 'great', midi: 70, dur: 1.5, vel: 0.60 },   // Bb4
        { t: 31.5, div: 'great', midi: 72, dur: 1.5, vel: 0.63 },   // C5
        { t: 33.0, div: 'great', midi: 73, dur: 2.0, vel: 0.66 },   // Db5
        { t: 30.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.55 },   // F4
        { t: 31.5, div: 'swell', midi: 66, dur: 1.5, vel: 0.58 },   // Gb4
        { t: 33.0, div: 'swell', midi: 68, dur: 2.0, vel: 0.60 },   // Ab4
        { t: 30.0, div: 'choir', midi: 58, dur: 1.5, vel: 0.50 },   // Bb3
        { t: 31.5, div: 'choir', midi: 60, dur: 1.5, vel: 0.52 },   // C4
        { t: 33.0, div: 'choir', midi: 61, dur: 2.0, vel: 0.55 },   // Db4
        { t: 30.0, div: 'pedal', midi: 46, dur: 6.0, vel: 0.45 },   // Bb2

        // Bar 19-22: Intensifying — higher register, louder
        { t: 36.0, div: 'great', midi: 73, dur: 1.5, vel: 0.68 },   // Db5
        { t: 37.5, div: 'great', midi: 75, dur: 1.5, vel: 0.72 },   // Eb5
        { t: 39.0, div: 'great', midi: 77, dur: 2.0, vel: 0.75 },   // F5
        { t: 36.0, div: 'swell', midi: 68, dur: 1.5, vel: 0.62 },   // Ab4
        { t: 37.5, div: 'swell', midi: 70, dur: 1.5, vel: 0.65 },   // Bb4
        { t: 39.0, div: 'swell', midi: 72, dur: 2.0, vel: 0.68 },   // C5
        { t: 36.0, div: 'choir', midi: 61, dur: 1.5, vel: 0.55 },   // Db4
        { t: 37.5, div: 'choir', midi: 63, dur: 1.5, vel: 0.58 },   // Eb4
        { t: 39.0, div: 'choir', midi: 65, dur: 2.0, vel: 0.60 },   // F4
        { t: 36.0, div: 'pedal', midi: 53, dur: 6.0, vel: 0.50 },   // F3

        // Bar 23-26: Approaching climax — full organ sound
        { t: 42.0, div: 'great', midi: 77, dur: 1.5, vel: 0.78 },   // F5
        { t: 43.5, div: 'great', midi: 78, dur: 1.5, vel: 0.82 },   // Gb5
        { t: 45.0, div: 'great', midi: 80, dur: 2.0, vel: 0.85 },   // Ab5
        { t: 42.0, div: 'swell', midi: 72, dur: 1.5, vel: 0.70 },   // C5
        { t: 43.5, div: 'swell', midi: 73, dur: 1.5, vel: 0.73 },   // Db5
        { t: 45.0, div: 'swell', midi: 75, dur: 2.0, vel: 0.76 },   // Eb5
        { t: 42.0, div: 'choir', midi: 65, dur: 1.5, vel: 0.62 },   // F4
        { t: 43.5, div: 'choir', midi: 66, dur: 1.5, vel: 0.65 },   // Gb4
        { t: 45.0, div: 'choir', midi: 68, dur: 2.0, vel: 0.68 },   // Ab4
        { t: 42.0, div: 'pedal', midi: 46, dur: 6.0, vel: 0.58 },   // Bb2

        // ======== CLIMAX (bar 27): Gb major chord — fff ========
        { t: 48.0, div: 'great', midi: 78, dur: 3.0, vel: 0.95 },   // Gb5
        { t: 48.0, div: 'great', midi: 75, dur: 3.0, vel: 0.92 },   // Eb5
        { t: 48.0, div: 'swell', midi: 70, dur: 3.0, vel: 0.88 },   // Bb4
        { t: 48.0, div: 'swell', midi: 66, dur: 3.0, vel: 0.85 },   // Gb4
        { t: 48.0, div: 'choir', midi: 63, dur: 3.0, vel: 0.82 },   // Eb4
        { t: 48.0, div: 'choir', midi: 58, dur: 3.0, vel: 0.80 },   // Bb3
        { t: 48.0, div: 'pedal', midi: 42, dur: 3.0, vel: 0.90 },   // Gb2

        // ======== Grand Pause (bar 28): Silence — 4 beats ========
        // (no events for t=51 to t=57)

        // ======== Coda (bars 29-32): Quiet return, ppp ========
        { t: 57.0, div: 'swell', midi: 58, dur: 3.0, vel: 0.28 },   // Bb3 — ppp
        { t: 57.0, div: 'pedal', midi: 46, dur: 6.0, vel: 0.25 },   // Bb2

        { t: 60.0, div: 'swell', midi: 58, dur: 1.5, vel: 0.30 },   // Bb3
        { t: 61.5, div: 'swell', midi: 60, dur: 1.5, vel: 0.28 },   // C4
        { t: 63.0, div: 'swell', midi: 61, dur: 2.0, vel: 0.26 },   // Db4

        { t: 65.0, div: 'swell', midi: 60, dur: 1.5, vel: 0.25 },   // C4
        { t: 66.5, div: 'swell', midi: 58, dur: 1.5, vel: 0.23 },   // Bb3
        { t: 65.0, div: 'pedal', midi: 46, dur: 6.0, vel: 0.22 },   // Bb2

        // Final Bb minor chord — dying away
        { t: 68.0, div: 'swell', midi: 70, dur: 4.0, vel: 0.22 },   // Bb4
        { t: 68.0, div: 'swell', midi: 65, dur: 4.0, vel: 0.20 },   // F4
        { t: 68.0, div: 'choir', midi: 61, dur: 4.0, vel: 0.18 },   // Db4
        { t: 68.0, div: 'choir', midi: 58, dur: 4.0, vel: 0.18 },   // Bb3
        { t: 68.0, div: 'pedal', midi: 46, dur: 4.0, vel: 0.20 },   // Bb2
    ]
};

// ============================================================
// 3. Handel — Largo from Xerxes "Ombra mai fu" (arr. for organ)
// ============================================================
// The most beloved melody in all opera, from Serse (1738).
// Key of F major, 3/4 time, marked Larghetto.
// Gentle, singing quality — solo melody on Swell with
// light accompaniment on Choir. The melody rises from F4
// through stepwise motion, reaching C5 before returning.
// Organ arrangement uses string-like stops for warmth.
// ============================================================

const PIECE_HANDEL_LARGO = {
    title: 'Largo from Xerxes "Ombra mai fu"',
    composer: "George Frideric Handel",
    catalog: "HWV 40",
    key: "F major",
    tempo: 56,
    tempoChanges: [
        { t: 0, tempo: 56, label: "Larghetto" }
    ],
    registration: {
        great: [],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-tremulant'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-subbass32']
    },
    events: [
        // ======== Introduction (bars 1-4): String orchestra intro ========
        // Bar 1: F major chord, gentle
        { t: 0, div: 'choir', midi: 65, dur: 2.0, vel: 0.50 },      // F4
        { t: 0, div: 'choir', midi: 60, dur: 2.0, vel: 0.48 },      // C4
        { t: 0, div: 'choir', midi: 57, dur: 2.0, vel: 0.46 },      // A3
        { t: 0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.42 },      // F2

        // Bar 2: Moving to Dm
        { t: 3.0, div: 'choir', midi: 62, dur: 1.5, vel: 0.48 },    // D4
        { t: 3.0, div: 'choir', midi: 57, dur: 1.5, vel: 0.46 },    // A3
        { t: 4.5, div: 'choir', midi: 60, dur: 1.5, vel: 0.48 },    // C4
        { t: 4.5, div: 'choir', midi: 57, dur: 1.5, vel: 0.46 },    // A3
        { t: 3.0, div: 'pedal', midi: 38, dur: 3.0, vel: 0.40 },    // D2

        // Bar 3: Bb major
        { t: 6.0, div: 'choir', midi: 65, dur: 1.5, vel: 0.50 },    // F4
        { t: 6.0, div: 'choir', midi: 62, dur: 1.5, vel: 0.48 },    // D4
        { t: 6.0, div: 'choir', midi: 58, dur: 1.5, vel: 0.46 },    // Bb3
        { t: 7.5, div: 'choir', midi: 64, dur: 1.5, vel: 0.48 },    // E4
        { t: 7.5, div: 'choir', midi: 60, dur: 1.5, vel: 0.46 },    // C4
        { t: 6.0, div: 'pedal', midi: 46, dur: 3.0, vel: 0.40 },    // Bb2

        // Bar 4: C major (dominant), prepare for melody entry
        { t: 9.0, div: 'choir', midi: 64, dur: 1.5, vel: 0.48 },    // E4
        { t: 9.0, div: 'choir', midi: 60, dur: 1.5, vel: 0.46 },    // C4
        { t: 9.0, div: 'choir', midi: 55, dur: 1.5, vel: 0.44 },    // G3
        { t: 10.5, div: 'choir', midi: 65, dur: 1.0, vel: 0.50 },   // F4 passing
        { t: 11.5, div: 'choir', midi: 64, dur: 0.5, vel: 0.48 },   // E4
        { t: 9.0, div: 'pedal', midi: 48, dur: 3.0, vel: 0.42 },    // C3

        // ======== Melody enters — "Ombra mai fu" (bars 5-12) ========
        // Bar 5: F4 — "Om-"
        { t: 12.0, div: 'swell', midi: 65, dur: 3.0, vel: 0.62 },   // F4 (Om-)
        { t: 12.0, div: 'choir', midi: 60, dur: 1.5, vel: 0.45 },   // C4
        { t: 12.0, div: 'choir', midi: 57, dur: 1.5, vel: 0.43 },   // A3
        { t: 13.5, div: 'choir', midi: 60, dur: 1.5, vel: 0.45 },   // C4
        { t: 13.5, div: 'choir', midi: 57, dur: 1.5, vel: 0.43 },   // A3
        { t: 12.0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.40 },   // F2

        // Bar 6: A4 — "-bra"
        { t: 15.0, div: 'swell', midi: 69, dur: 1.5, vel: 0.65 },   // A4 (-bra)
        { t: 16.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.62 },   // G4 (mai)
        { t: 15.0, div: 'choir', midi: 60, dur: 1.5, vel: 0.45 },   // C4
        { t: 15.0, div: 'choir', midi: 65, dur: 1.5, vel: 0.47 },   // F4
        { t: 16.5, div: 'choir', midi: 60, dur: 1.5, vel: 0.45 },   // C4
        { t: 16.5, div: 'choir', midi: 64, dur: 1.5, vel: 0.46 },   // E4
        { t: 15.0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.40 },   // F2

        // Bar 7: F4 — "fu"  then rising
        { t: 18.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.60 },   // F4 (fu)
        { t: 19.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.64 },   // A4
        { t: 18.0, div: 'choir', midi: 62, dur: 1.5, vel: 0.45 },   // D4
        { t: 18.0, div: 'choir', midi: 57, dur: 1.5, vel: 0.43 },   // A3
        { t: 19.5, div: 'choir', midi: 60, dur: 1.5, vel: 0.45 },   // C4
        { t: 19.5, div: 'choir', midi: 57, dur: 1.5, vel: 0.43 },   // A3
        { t: 18.0, div: 'pedal', midi: 38, dur: 3.0, vel: 0.40 },   // D2

        // Bar 8: Bb4 to A4 — stepwise descent
        { t: 21.0, div: 'swell', midi: 70, dur: 1.5, vel: 0.66 },   // Bb4
        { t: 22.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.64 },   // A4
        { t: 21.0, div: 'choir', midi: 62, dur: 1.5, vel: 0.46 },   // D4
        { t: 21.0, div: 'choir', midi: 58, dur: 1.5, vel: 0.44 },   // Bb3
        { t: 22.5, div: 'choir', midi: 60, dur: 1.5, vel: 0.46 },   // C4
        { t: 22.5, div: 'choir', midi: 57, dur: 1.5, vel: 0.44 },   // A3
        { t: 21.0, div: 'pedal', midi: 46, dur: 3.0, vel: 0.40 },   // Bb2

        // Bar 9: G4 — moving through sequence
        { t: 24.0, div: 'swell', midi: 67, dur: 1.5, vel: 0.62 },   // G4
        { t: 25.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.65 },   // A4
        { t: 24.0, div: 'choir', midi: 60, dur: 1.5, vel: 0.45 },   // C4
        { t: 24.0, div: 'choir', midi: 55, dur: 1.5, vel: 0.43 },   // G3
        { t: 25.5, div: 'choir', midi: 60, dur: 1.5, vel: 0.45 },   // C4
        { t: 25.5, div: 'choir', midi: 57, dur: 1.5, vel: 0.43 },   // A3
        { t: 24.0, div: 'pedal', midi: 48, dur: 3.0, vel: 0.40 },   // C3

        // Bar 10: Bb4 — melodic high point of first phrase
        { t: 27.0, div: 'swell', midi: 70, dur: 2.0, vel: 0.68 },   // Bb4
        { t: 29.0, div: 'swell', midi: 69, dur: 1.0, vel: 0.64 },   // A4
        { t: 27.0, div: 'choir', midi: 62, dur: 1.5, vel: 0.46 },   // D4
        { t: 27.0, div: 'choir', midi: 58, dur: 1.5, vel: 0.44 },   // Bb3
        { t: 28.5, div: 'choir', midi: 60, dur: 1.5, vel: 0.46 },   // C4
        { t: 28.5, div: 'choir', midi: 57, dur: 1.5, vel: 0.44 },   // A3
        { t: 27.0, div: 'pedal', midi: 46, dur: 3.0, vel: 0.42 },   // Bb2

        // Bar 11: Descending — A4-G4-F4
        { t: 30.0, div: 'swell', midi: 69, dur: 1.0, vel: 0.64 },   // A4
        { t: 31.0, div: 'swell', midi: 67, dur: 1.0, vel: 0.62 },   // G4
        { t: 32.0, div: 'swell', midi: 65, dur: 1.0, vel: 0.60 },   // F4
        { t: 30.0, div: 'choir', midi: 60, dur: 1.5, vel: 0.45 },   // C4
        { t: 30.0, div: 'choir', midi: 57, dur: 1.5, vel: 0.43 },   // A3
        { t: 31.5, div: 'choir', midi: 60, dur: 1.5, vel: 0.45 },   // C4
        { t: 31.5, div: 'choir', midi: 55, dur: 1.5, vel: 0.43 },   // G3
        { t: 30.0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.40 },   // F2

        // Bar 12: Cadence on F
        { t: 33.0, div: 'swell', midi: 64, dur: 1.0, vel: 0.58 },   // E4
        { t: 34.0, div: 'swell', midi: 65, dur: 2.0, vel: 0.62 },   // F4
        { t: 33.0, div: 'choir', midi: 60, dur: 1.5, vel: 0.46 },   // C4
        { t: 33.0, div: 'choir', midi: 55, dur: 1.5, vel: 0.44 },   // G3
        { t: 34.5, div: 'choir', midi: 60, dur: 1.5, vel: 0.46 },   // C4
        { t: 34.5, div: 'choir', midi: 57, dur: 1.5, vel: 0.44 },   // A3
        { t: 33.0, div: 'pedal', midi: 48, dur: 1.5, vel: 0.40 },   // C3
        { t: 34.5, div: 'pedal', midi: 41, dur: 1.5, vel: 0.42 },   // F2

        // ======== Second verse (bars 13-20): Melody repeats with richer harmony ========
        // Bar 13: F4 again but with fuller accompaniment
        { t: 36.0, div: 'swell', midi: 65, dur: 3.0, vel: 0.65 },   // F4
        { t: 36.0, div: 'choir', midi: 60, dur: 1.0, vel: 0.48 },   // C4
        { t: 36.0, div: 'choir', midi: 57, dur: 1.0, vel: 0.46 },   // A3
        { t: 37.0, div: 'choir', midi: 62, dur: 1.0, vel: 0.48 },   // D4
        { t: 37.0, div: 'choir', midi: 57, dur: 1.0, vel: 0.46 },   // A3
        { t: 38.0, div: 'choir', midi: 60, dur: 1.0, vel: 0.48 },   // C4
        { t: 38.0, div: 'choir', midi: 57, dur: 1.0, vel: 0.46 },   // A3
        { t: 36.0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.42 },   // F2

        // Bar 14: Rising melody to C5
        { t: 39.0, div: 'swell', midi: 69, dur: 1.0, vel: 0.67 },   // A4
        { t: 40.0, div: 'swell', midi: 70, dur: 1.0, vel: 0.69 },   // Bb4
        { t: 41.0, div: 'swell', midi: 72, dur: 1.0, vel: 0.72 },   // C5
        { t: 39.0, div: 'choir', midi: 60, dur: 1.5, vel: 0.48 },   // C4
        { t: 39.0, div: 'choir', midi: 65, dur: 1.5, vel: 0.50 },   // F4
        { t: 40.5, div: 'choir', midi: 62, dur: 1.5, vel: 0.48 },   // D4
        { t: 40.5, div: 'choir', midi: 65, dur: 1.5, vel: 0.50 },   // F4
        { t: 39.0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.42 },   // F2

        // Bar 15-16: C5 to Bb4, descending gracefully
        { t: 42.0, div: 'swell', midi: 72, dur: 1.5, vel: 0.72 },   // C5
        { t: 43.5, div: 'swell', midi: 70, dur: 1.5, vel: 0.68 },   // Bb4
        { t: 42.0, div: 'choir', midi: 64, dur: 1.5, vel: 0.48 },   // E4
        { t: 42.0, div: 'choir', midi: 60, dur: 1.5, vel: 0.46 },   // C4
        { t: 43.5, div: 'choir', midi: 62, dur: 1.5, vel: 0.48 },   // D4
        { t: 43.5, div: 'choir', midi: 58, dur: 1.5, vel: 0.46 },   // Bb3
        { t: 42.0, div: 'pedal', midi: 48, dur: 3.0, vel: 0.40 },   // C3

        { t: 45.0, div: 'swell', midi: 69, dur: 1.5, vel: 0.66 },   // A4
        { t: 46.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.64 },   // G4
        { t: 45.0, div: 'choir', midi: 60, dur: 1.5, vel: 0.46 },   // C4
        { t: 45.0, div: 'choir', midi: 57, dur: 1.5, vel: 0.44 },   // A3
        { t: 46.5, div: 'choir', midi: 60, dur: 1.5, vel: 0.46 },   // C4
        { t: 46.5, div: 'choir', midi: 55, dur: 1.5, vel: 0.44 },   // G3
        { t: 45.0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.42 },   // F2

        // Bar 17-18: Final phrase — F4-E4-F4 resolution
        { t: 48.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.62 },   // F4
        { t: 49.5, div: 'swell', midi: 64, dur: 1.0, vel: 0.58 },   // E4
        { t: 50.5, div: 'swell', midi: 65, dur: 2.5, vel: 0.60 },   // F4
        { t: 48.0, div: 'choir', midi: 60, dur: 1.5, vel: 0.45 },   // C4
        { t: 48.0, div: 'choir', midi: 57, dur: 1.5, vel: 0.43 },   // A3
        { t: 49.5, div: 'choir', midi: 60, dur: 1.5, vel: 0.44 },   // C4
        { t: 49.5, div: 'choir', midi: 55, dur: 1.5, vel: 0.42 },   // G3
        { t: 51.0, div: 'choir', midi: 60, dur: 2.0, vel: 0.45 },   // C4
        { t: 51.0, div: 'choir', midi: 57, dur: 2.0, vel: 0.43 },   // A3
        { t: 48.0, div: 'pedal', midi: 48, dur: 1.5, vel: 0.38 },   // C3
        { t: 49.5, div: 'pedal', midi: 48, dur: 1.5, vel: 0.38 },   // C3
        { t: 51.0, div: 'pedal', midi: 41, dur: 2.0, vel: 0.40 },   // F2

        // Final F major chord — gentle fade
        { t: 53.0, div: 'swell', midi: 65, dur: 3.0, vel: 0.55 },   // F4
        { t: 53.0, div: 'choir', midi: 60, dur: 3.0, vel: 0.42 },   // C4
        { t: 53.0, div: 'choir', midi: 57, dur: 3.0, vel: 0.40 },   // A3
        { t: 53.0, div: 'pedal', midi: 41, dur: 3.0, vel: 0.38 },   // F2
    ]
};

// ============================================================
// 4. Gigout — Toccata in B minor
// ============================================================
// Brilliant concert toccata from 10 Pieces for Organ (1890).
// Perpetual 16th-note motion from start to finish.
// B minor, driving Allegro. French virtuosic tradition
// (Gigout was a pupil of Saint-Saens, organist at Saint-Augustin
// for 62 years). Popular recital encore piece.
// RH plays continuous 16th-note figuration, LH provides
// harmonic support, pedal anchors the bass.
// ============================================================

const PIECE_GIGOUT_TOCCATA = {
    title: "Toccata in B minor",
    composer: "Eugene Gigout",
    catalog: "10 Pieces, No. 4",
    key: "B minor",
    tempo: 138,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8'],
        swell: ['sw-gedeckt8', 'sw-flute4'],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ======== Opening: B minor perpetual 16ths (bars 1-4) ========
        // Bar 1: RH 16th-note arpeggios on B minor (B-D-F#)
        { t: 0, div: 'pedal', midi: 47, dur: 2.0, vel: 0.88 },      // B2

        // Beat 1: B4-D5-F#5-D5
        { t: 0, div: 'great', midi: 71, dur: 0.12, vel: 0.90 },     // B4
        { t: 0.25, div: 'great', midi: 74, dur: 0.12, vel: 0.87 },  // D5
        { t: 0.5, div: 'great', midi: 78, dur: 0.12, vel: 0.90 },   // F#5
        { t: 0.75, div: 'great', midi: 74, dur: 0.12, vel: 0.87 },  // D5
        // Beat 2: B4-D5-F#5-B5
        { t: 1.0, div: 'great', midi: 71, dur: 0.12, vel: 0.90 },   // B4
        { t: 1.25, div: 'great', midi: 74, dur: 0.12, vel: 0.87 },  // D5
        { t: 1.5, div: 'great', midi: 78, dur: 0.12, vel: 0.92 },   // F#5
        { t: 1.75, div: 'great', midi: 83, dur: 0.12, vel: 0.93 },  // B5

        // LH chords: B minor
        { t: 0, div: 'swell', midi: 59, dur: 0.8, vel: 0.75 },      // B3
        { t: 0, div: 'swell', midi: 62, dur: 0.8, vel: 0.73 },      // D4
        { t: 0, div: 'swell', midi: 66, dur: 0.8, vel: 0.73 },      // F#4
        { t: 1.0, div: 'swell', midi: 59, dur: 0.8, vel: 0.75 },    // B3
        { t: 1.0, div: 'swell', midi: 62, dur: 0.8, vel: 0.73 },    // D4
        { t: 1.0, div: 'swell', midi: 66, dur: 0.8, vel: 0.73 },    // F#4

        // Bar 2: continuation, descending pattern
        { t: 2.0, div: 'pedal', midi: 47, dur: 2.0, vel: 0.88 },    // B2
        // Beat 1: F#5-D5-B4-D5
        { t: 2.0, div: 'great', midi: 78, dur: 0.12, vel: 0.90 },   // F#5
        { t: 2.25, div: 'great', midi: 74, dur: 0.12, vel: 0.87 },  // D5
        { t: 2.5, div: 'great', midi: 71, dur: 0.12, vel: 0.85 },   // B4
        { t: 2.75, div: 'great', midi: 74, dur: 0.12, vel: 0.87 },  // D5
        // Beat 2: F#5-B5-F#5-D5
        { t: 3.0, div: 'great', midi: 78, dur: 0.12, vel: 0.92 },   // F#5
        { t: 3.25, div: 'great', midi: 83, dur: 0.12, vel: 0.93 },  // B5
        { t: 3.5, div: 'great', midi: 78, dur: 0.12, vel: 0.90 },   // F#5
        { t: 3.75, div: 'great', midi: 74, dur: 0.12, vel: 0.87 },  // D5

        { t: 2.0, div: 'swell', midi: 59, dur: 0.8, vel: 0.75 },    // B3
        { t: 2.0, div: 'swell', midi: 62, dur: 0.8, vel: 0.73 },    // D4
        { t: 2.0, div: 'swell', midi: 66, dur: 0.8, vel: 0.73 },    // F#4
        { t: 3.0, div: 'swell', midi: 59, dur: 0.8, vel: 0.75 },    // B3
        { t: 3.0, div: 'swell', midi: 62, dur: 0.8, vel: 0.73 },    // D4
        { t: 3.0, div: 'swell', midi: 66, dur: 0.8, vel: 0.73 },    // F#4

        // Bar 3: E minor (subdominant area) — E-G-B arpeggios
        { t: 4.0, div: 'pedal', midi: 40, dur: 2.0, vel: 0.85 },    // E2
        { t: 4.0, div: 'great', midi: 76, dur: 0.12, vel: 0.88 },   // E5
        { t: 4.25, div: 'great', midi: 79, dur: 0.12, vel: 0.86 },  // G5
        { t: 4.5, div: 'great', midi: 83, dur: 0.12, vel: 0.90 },   // B5
        { t: 4.75, div: 'great', midi: 79, dur: 0.12, vel: 0.86 },  // G5
        { t: 5.0, div: 'great', midi: 76, dur: 0.12, vel: 0.88 },   // E5
        { t: 5.25, div: 'great', midi: 79, dur: 0.12, vel: 0.86 },  // G5
        { t: 5.5, div: 'great', midi: 83, dur: 0.12, vel: 0.90 },   // B5
        { t: 5.75, div: 'great', midi: 76, dur: 0.12, vel: 0.88 },  // E5

        { t: 4.0, div: 'swell', midi: 52, dur: 0.8, vel: 0.73 },    // E3 (actually E4 register... let me use E4=64)
        { t: 4.0, div: 'swell', midi: 64, dur: 0.8, vel: 0.73 },    // E4
        { t: 4.0, div: 'swell', midi: 67, dur: 0.8, vel: 0.73 },    // G4
        { t: 4.0, div: 'swell', midi: 71, dur: 0.8, vel: 0.73 },    // B4
        { t: 5.0, div: 'swell', midi: 64, dur: 0.8, vel: 0.73 },    // E4
        { t: 5.0, div: 'swell', midi: 67, dur: 0.8, vel: 0.73 },    // G4
        { t: 5.0, div: 'swell', midi: 71, dur: 0.8, vel: 0.73 },    // B4

        // Bar 4: F# major (dominant) — F#-A#-C# arpeggios
        { t: 6.0, div: 'pedal', midi: 42, dur: 2.0, vel: 0.88 },    // F#2
        { t: 6.0, div: 'great', midi: 78, dur: 0.12, vel: 0.90 },   // F#5
        { t: 6.25, div: 'great', midi: 82, dur: 0.12, vel: 0.88 },  // A#5
        { t: 6.5, div: 'great', midi: 73, dur: 0.12, vel: 0.90 },   // C#5
        { t: 6.75, div: 'great', midi: 78, dur: 0.12, vel: 0.88 },  // F#5
        { t: 7.0, div: 'great', midi: 82, dur: 0.12, vel: 0.92 },   // A#5
        { t: 7.25, div: 'great', midi: 78, dur: 0.12, vel: 0.88 },  // F#5
        { t: 7.5, div: 'great', midi: 73, dur: 0.12, vel: 0.90 },   // C#5
        { t: 7.75, div: 'great', midi: 78, dur: 0.12, vel: 0.92 },  // F#5

        { t: 6.0, div: 'swell', midi: 66, dur: 0.8, vel: 0.75 },    // F#4
        { t: 6.0, div: 'swell', midi: 70, dur: 0.8, vel: 0.73 },    // A#4 (=Bb4)
        { t: 6.0, div: 'swell', midi: 61, dur: 0.8, vel: 0.73 },    // C#4 (=Db4)
        { t: 7.0, div: 'swell', midi: 66, dur: 0.8, vel: 0.75 },    // F#4
        { t: 7.0, div: 'swell', midi: 70, dur: 0.8, vel: 0.73 },    // A#4
        { t: 7.0, div: 'swell', midi: 61, dur: 0.8, vel: 0.73 },    // C#4

        // ======== Bars 5-8: Theme restated with octave displacement ========
        // Bar 5: B minor an octave lower
        { t: 8.0, div: 'pedal', midi: 47, dur: 2.0, vel: 0.88 },    // B2
        { t: 8.0, div: 'great', midi: 59, dur: 0.12, vel: 0.88 },   // B3
        { t: 8.25, div: 'great', midi: 62, dur: 0.12, vel: 0.85 },  // D4
        { t: 8.5, div: 'great', midi: 66, dur: 0.12, vel: 0.88 },   // F#4
        { t: 8.75, div: 'great', midi: 62, dur: 0.12, vel: 0.85 },  // D4
        { t: 9.0, div: 'great', midi: 59, dur: 0.12, vel: 0.88 },   // B3
        { t: 9.25, div: 'great', midi: 62, dur: 0.12, vel: 0.85 },  // D4
        { t: 9.5, div: 'great', midi: 66, dur: 0.12, vel: 0.90 },   // F#4
        { t: 9.75, div: 'great', midi: 71, dur: 0.12, vel: 0.92 },  // B4

        { t: 8.0, div: 'swell', midi: 47, dur: 0.8, vel: 0.73 },    // B2
        { t: 8.0, div: 'swell', midi: 50, dur: 0.8, vel: 0.70 },    // D3
        { t: 9.0, div: 'swell', midi: 47, dur: 0.8, vel: 0.73 },    // B2
        { t: 9.0, div: 'swell', midi: 54, dur: 0.8, vel: 0.70 },    // F#3

        // Bar 6: G major (relative major area)
        { t: 10.0, div: 'pedal', midi: 43, dur: 2.0, vel: 0.85 },   // G2
        { t: 10.0, div: 'great', midi: 67, dur: 0.12, vel: 0.88 },  // G4
        { t: 10.25, div: 'great', midi: 71, dur: 0.12, vel: 0.86 }, // B4
        { t: 10.5, div: 'great', midi: 74, dur: 0.12, vel: 0.90 },  // D5
        { t: 10.75, div: 'great', midi: 71, dur: 0.12, vel: 0.86 }, // B4
        { t: 11.0, div: 'great', midi: 67, dur: 0.12, vel: 0.88 },  // G4
        { t: 11.25, div: 'great', midi: 71, dur: 0.12, vel: 0.86 }, // B4
        { t: 11.5, div: 'great', midi: 74, dur: 0.12, vel: 0.90 },  // D5
        { t: 11.75, div: 'great', midi: 79, dur: 0.12, vel: 0.92 }, // G5

        { t: 10.0, div: 'swell', midi: 55, dur: 0.8, vel: 0.73 },   // G3
        { t: 10.0, div: 'swell', midi: 59, dur: 0.8, vel: 0.70 },   // B3
        { t: 10.0, div: 'swell', midi: 62, dur: 0.8, vel: 0.70 },   // D4
        { t: 11.0, div: 'swell', midi: 55, dur: 0.8, vel: 0.73 },   // G3
        { t: 11.0, div: 'swell', midi: 59, dur: 0.8, vel: 0.70 },   // B3
        { t: 11.0, div: 'swell', midi: 62, dur: 0.8, vel: 0.70 },   // D4

        // Bar 7: A major (leading to dominant)
        { t: 12.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.85 },   // A2
        { t: 12.0, div: 'great', midi: 69, dur: 0.12, vel: 0.88 },  // A4
        { t: 12.25, div: 'great', midi: 73, dur: 0.12, vel: 0.86 }, // C#5
        { t: 12.5, div: 'great', midi: 76, dur: 0.12, vel: 0.90 },  // E5
        { t: 12.75, div: 'great', midi: 73, dur: 0.12, vel: 0.86 }, // C#5
        { t: 13.0, div: 'great', midi: 69, dur: 0.12, vel: 0.88 },  // A4
        { t: 13.25, div: 'great', midi: 73, dur: 0.12, vel: 0.86 }, // C#5
        { t: 13.5, div: 'great', midi: 76, dur: 0.12, vel: 0.90 },  // E5
        { t: 13.75, div: 'great', midi: 81, dur: 0.12, vel: 0.92 }, // A5

        { t: 12.0, div: 'swell', midi: 57, dur: 0.8, vel: 0.73 },   // A3
        { t: 12.0, div: 'swell', midi: 61, dur: 0.8, vel: 0.70 },   // C#4
        { t: 12.0, div: 'swell', midi: 64, dur: 0.8, vel: 0.70 },   // E4
        { t: 13.0, div: 'swell', midi: 57, dur: 0.8, vel: 0.73 },   // A3
        { t: 13.0, div: 'swell', midi: 61, dur: 0.8, vel: 0.70 },   // C#4
        { t: 13.0, div: 'swell', midi: 64, dur: 0.8, vel: 0.70 },   // E4

        // Bar 8: F# major (V of B minor) — cadential
        { t: 14.0, div: 'pedal', midi: 42, dur: 2.0, vel: 0.90 },   // F#2
        { t: 14.0, div: 'great', midi: 66, dur: 0.12, vel: 0.90 },  // F#4
        { t: 14.25, div: 'great', midi: 70, dur: 0.12, vel: 0.88 }, // A#4
        { t: 14.5, div: 'great', midi: 73, dur: 0.12, vel: 0.92 },  // C#5
        { t: 14.75, div: 'great', midi: 78, dur: 0.12, vel: 0.93 }, // F#5
        { t: 15.0, div: 'great', midi: 73, dur: 0.12, vel: 0.90 },  // C#5
        { t: 15.25, div: 'great', midi: 70, dur: 0.12, vel: 0.88 }, // A#4
        { t: 15.5, div: 'great', midi: 66, dur: 0.12, vel: 0.90 },  // F#4
        { t: 15.75, div: 'great', midi: 70, dur: 0.12, vel: 0.92 }, // A#4

        { t: 14.0, div: 'swell', midi: 54, dur: 0.8, vel: 0.75 },   // F#3
        { t: 14.0, div: 'swell', midi: 58, dur: 0.8, vel: 0.73 },   // A#3 (=Bb3)
        { t: 14.0, div: 'swell', midi: 61, dur: 0.8, vel: 0.73 },   // C#4
        { t: 15.0, div: 'swell', midi: 54, dur: 0.8, vel: 0.75 },   // F#3
        { t: 15.0, div: 'swell', midi: 58, dur: 0.8, vel: 0.73 },   // A#3
        { t: 15.0, div: 'swell', midi: 61, dur: 0.8, vel: 0.73 },   // C#4

        // ======== Bars 9-16: Development — modulating through D major, G major ========
        // Bar 9: D major — bright contrast
        { t: 16.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.88 },   // D2
        { t: 16.0, div: 'great', midi: 74, dur: 0.12, vel: 0.90 },  // D5
        { t: 16.25, div: 'great', midi: 78, dur: 0.12, vel: 0.88 }, // F#5
        { t: 16.5, div: 'great', midi: 81, dur: 0.12, vel: 0.92 },  // A5
        { t: 16.75, div: 'great', midi: 78, dur: 0.12, vel: 0.88 }, // F#5
        { t: 17.0, div: 'great', midi: 74, dur: 0.12, vel: 0.90 },  // D5
        { t: 17.25, div: 'great', midi: 78, dur: 0.12, vel: 0.88 }, // F#5
        { t: 17.5, div: 'great', midi: 81, dur: 0.12, vel: 0.92 },  // A5
        { t: 17.75, div: 'great', midi: 74, dur: 0.12, vel: 0.90 }, // D5

        { t: 16.0, div: 'swell', midi: 62, dur: 0.8, vel: 0.75 },   // D4
        { t: 16.0, div: 'swell', midi: 66, dur: 0.8, vel: 0.73 },   // F#4
        { t: 16.0, div: 'swell', midi: 69, dur: 0.8, vel: 0.73 },   // A4
        { t: 17.0, div: 'swell', midi: 62, dur: 0.8, vel: 0.75 },   // D4
        { t: 17.0, div: 'swell', midi: 66, dur: 0.8, vel: 0.73 },   // F#4
        { t: 17.0, div: 'swell', midi: 69, dur: 0.8, vel: 0.73 },   // A4

        // Bar 10: G major
        { t: 18.0, div: 'pedal', midi: 43, dur: 2.0, vel: 0.85 },   // G2
        { t: 18.0, div: 'great', midi: 79, dur: 0.12, vel: 0.90 },  // G5
        { t: 18.25, div: 'great', midi: 83, dur: 0.12, vel: 0.92 }, // B5
        { t: 18.5, div: 'great', midi: 74, dur: 0.12, vel: 0.88 },  // D5
        { t: 18.75, div: 'great', midi: 79, dur: 0.12, vel: 0.90 }, // G5
        { t: 19.0, div: 'great', midi: 83, dur: 0.12, vel: 0.92 },  // B5
        { t: 19.25, div: 'great', midi: 79, dur: 0.12, vel: 0.90 }, // G5
        { t: 19.5, div: 'great', midi: 74, dur: 0.12, vel: 0.88 },  // D5
        { t: 19.75, div: 'great', midi: 71, dur: 0.12, vel: 0.86 }, // B4

        { t: 18.0, div: 'swell', midi: 67, dur: 0.8, vel: 0.75 },   // G4
        { t: 18.0, div: 'swell', midi: 71, dur: 0.8, vel: 0.73 },   // B4
        { t: 18.0, div: 'swell', midi: 62, dur: 0.8, vel: 0.73 },   // D4
        { t: 19.0, div: 'swell', midi: 67, dur: 0.8, vel: 0.75 },   // G4
        { t: 19.0, div: 'swell', midi: 71, dur: 0.8, vel: 0.73 },   // B4
        { t: 19.0, div: 'swell', midi: 62, dur: 0.8, vel: 0.73 },   // D4

        // Bar 11-12: Chromatic intensification leading to climax
        { t: 20.0, div: 'pedal', midi: 40, dur: 2.0, vel: 0.88 },   // E2
        { t: 20.0, div: 'great', midi: 76, dur: 0.12, vel: 0.90 },  // E5
        { t: 20.25, div: 'great', midi: 79, dur: 0.12, vel: 0.88 }, // G5
        { t: 20.5, div: 'great', midi: 83, dur: 0.12, vel: 0.92 },  // B5
        { t: 20.75, div: 'great', midi: 79, dur: 0.12, vel: 0.88 }, // G5
        { t: 21.0, div: 'great', midi: 76, dur: 0.12, vel: 0.90 },  // E5
        { t: 21.25, div: 'great', midi: 72, dur: 0.12, vel: 0.88 }, // C5
        { t: 21.5, div: 'great', midi: 76, dur: 0.12, vel: 0.90 },  // E5
        { t: 21.75, div: 'great', midi: 79, dur: 0.12, vel: 0.92 }, // G5

        { t: 20.0, div: 'swell', midi: 64, dur: 0.8, vel: 0.75 },   // E4
        { t: 20.0, div: 'swell', midi: 67, dur: 0.8, vel: 0.73 },   // G4
        { t: 20.0, div: 'swell', midi: 71, dur: 0.8, vel: 0.73 },   // B4
        { t: 21.0, div: 'swell', midi: 60, dur: 0.8, vel: 0.75 },   // C4
        { t: 21.0, div: 'swell', midi: 64, dur: 0.8, vel: 0.73 },   // E4
        { t: 21.0, div: 'swell', midi: 67, dur: 0.8, vel: 0.73 },   // G4

        // Bar 12: F# major dominant, building
        { t: 22.0, div: 'pedal', midi: 42, dur: 2.0, vel: 0.92 },   // F#2
        { t: 22.0, div: 'great', midi: 78, dur: 0.12, vel: 0.92 },  // F#5
        { t: 22.25, div: 'great', midi: 82, dur: 0.12, vel: 0.90 }, // A#5
        { t: 22.5, div: 'great', midi: 73, dur: 0.12, vel: 0.92 },  // C#5
        { t: 22.75, div: 'great', midi: 78, dur: 0.12, vel: 0.93 }, // F#5
        { t: 23.0, div: 'great', midi: 82, dur: 0.12, vel: 0.93 },  // A#5
        { t: 23.25, div: 'great', midi: 78, dur: 0.12, vel: 0.92 }, // F#5
        { t: 23.5, div: 'great', midi: 73, dur: 0.12, vel: 0.93 },  // C#5
        { t: 23.75, div: 'great', midi: 70, dur: 0.12, vel: 0.92 }, // A#4

        { t: 22.0, div: 'swell', midi: 66, dur: 0.8, vel: 0.78 },   // F#4
        { t: 22.0, div: 'swell', midi: 70, dur: 0.8, vel: 0.75 },   // A#4
        { t: 22.0, div: 'swell', midi: 61, dur: 0.8, vel: 0.75 },   // C#4
        { t: 23.0, div: 'swell', midi: 66, dur: 0.8, vel: 0.78 },   // F#4
        { t: 23.0, div: 'swell', midi: 70, dur: 0.8, vel: 0.75 },   // A#4
        { t: 23.0, div: 'swell', midi: 61, dur: 0.8, vel: 0.75 },   // C#4

        // ======== Bars 13-16: Dramatic climax and final cadence ========
        // Bar 13: Return to B minor, fff
        { t: 24.0, div: 'pedal', midi: 47, dur: 2.0, vel: 0.95 },   // B2
        { t: 24.0, div: 'great', midi: 71, dur: 0.12, vel: 0.95 },  // B4
        { t: 24.25, div: 'great', midi: 74, dur: 0.12, vel: 0.92 }, // D5
        { t: 24.5, div: 'great', midi: 78, dur: 0.12, vel: 0.95 },  // F#5
        { t: 24.75, div: 'great', midi: 83, dur: 0.12, vel: 0.97 }, // B5
        { t: 25.0, div: 'great', midi: 78, dur: 0.12, vel: 0.95 },  // F#5
        { t: 25.25, div: 'great', midi: 74, dur: 0.12, vel: 0.92 }, // D5
        { t: 25.5, div: 'great', midi: 78, dur: 0.12, vel: 0.95 },  // F#5
        { t: 25.75, div: 'great', midi: 83, dur: 0.12, vel: 0.97 }, // B5

        { t: 24.0, div: 'swell', midi: 59, dur: 1.5, vel: 0.82 },   // B3
        { t: 24.0, div: 'swell', midi: 62, dur: 1.5, vel: 0.80 },   // D4
        { t: 24.0, div: 'swell', midi: 66, dur: 1.5, vel: 0.80 },   // F#4

        // Bar 14: Continuing climax — wider arpeggios
        { t: 26.0, div: 'pedal', midi: 47, dur: 2.0, vel: 0.95 },   // B2
        { t: 26.0, div: 'great', midi: 83, dur: 0.12, vel: 0.97 },  // B5
        { t: 26.25, div: 'great', midi: 78, dur: 0.12, vel: 0.95 }, // F#5
        { t: 26.5, div: 'great', midi: 74, dur: 0.12, vel: 0.92 },  // D5
        { t: 26.75, div: 'great', midi: 71, dur: 0.12, vel: 0.90 }, // B4
        { t: 27.0, div: 'great', midi: 74, dur: 0.12, vel: 0.92 },  // D5
        { t: 27.25, div: 'great', midi: 78, dur: 0.12, vel: 0.95 }, // F#5
        { t: 27.5, div: 'great', midi: 83, dur: 0.12, vel: 0.97 },  // B5
        { t: 27.75, div: 'great', midi: 78, dur: 0.12, vel: 0.95 }, // F#5

        { t: 26.0, div: 'swell', midi: 59, dur: 1.5, vel: 0.82 },   // B3
        { t: 26.0, div: 'swell', midi: 62, dur: 1.5, vel: 0.80 },   // D4
        { t: 26.0, div: 'swell', midi: 66, dur: 1.5, vel: 0.80 },   // F#4

        // Bar 15: Final dominant preparation
        { t: 28.0, div: 'pedal', midi: 42, dur: 2.0, vel: 0.95 },   // F#2
        { t: 28.0, div: 'great', midi: 66, dur: 0.12, vel: 0.95 },  // F#4
        { t: 28.25, div: 'great', midi: 70, dur: 0.12, vel: 0.93 }, // A#4
        { t: 28.5, div: 'great', midi: 73, dur: 0.12, vel: 0.95 },  // C#5
        { t: 28.75, div: 'great', midi: 78, dur: 0.12, vel: 0.97 }, // F#5
        { t: 29.0, div: 'great', midi: 82, dur: 0.12, vel: 0.97 },  // A#5
        { t: 29.25, div: 'great', midi: 78, dur: 0.12, vel: 0.95 }, // F#5
        { t: 29.5, div: 'great', midi: 73, dur: 0.12, vel: 0.95 },  // C#5
        { t: 29.75, div: 'great', midi: 70, dur: 0.12, vel: 0.93 }, // A#4

        { t: 28.0, div: 'swell', midi: 54, dur: 1.5, vel: 0.80 },   // F#3
        { t: 28.0, div: 'swell', midi: 58, dur: 1.5, vel: 0.78 },   // A#3
        { t: 28.0, div: 'swell', midi: 61, dur: 1.5, vel: 0.78 },   // C#4

        // Bar 16: Final B minor resolution — full organ chord
        { t: 30.0, div: 'great', midi: 71, dur: 2.0, vel: 0.98 },   // B4
        { t: 30.0, div: 'great', midi: 74, dur: 2.0, vel: 0.95 },   // D5
        { t: 30.0, div: 'great', midi: 78, dur: 2.0, vel: 0.95 },   // F#5
        { t: 30.0, div: 'great', midi: 83, dur: 2.0, vel: 0.98 },   // B5
        { t: 30.0, div: 'swell', midi: 59, dur: 2.0, vel: 0.85 },   // B3
        { t: 30.0, div: 'swell', midi: 62, dur: 2.0, vel: 0.82 },   // D4
        { t: 30.0, div: 'swell', midi: 66, dur: 2.0, vel: 0.82 },   // F#4
        { t: 30.0, div: 'pedal', midi: 47, dur: 2.0, vel: 0.98 },   // B2
    ]
};

// ============================================================
// 5. Lefebure-Wely — Sortie in B-flat major
// ============================================================
// Flashy, crowd-pleasing exit voluntary. One of the most
// popular organ sorties of the 19th century. Lefebure-Wely
// was famed for his brilliant improvisations at La Madeleine.
// Energetic main theme with off-beat phrasing and irresistible
// swagger. Brilliant pedal work throughout. ABA form with
// contrasting middle section.
// ============================================================

const PIECE_LEFEBURE_SORTIE = {
    title: "Sortie in B-flat major",
    composer: "Louis-James-Alfred Lefebure-Wely",
    catalog: "L'Organiste moderne",
    key: "Bb major",
    tempo: 126,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-clarinet8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ======== A Section: Main theme — Bb major, energetic (bars 1-8) ========
        // Bar 1: Brilliant opening chord then running eighths
        { t: 0, div: 'great', midi: 70, dur: 0.3, vel: 0.92 },      // Bb4
        { t: 0, div: 'great', midi: 74, dur: 0.3, vel: 0.90 },      // D5
        { t: 0, div: 'great', midi: 77, dur: 0.3, vel: 0.90 },      // F5
        { t: 0, div: 'pedal', midi: 46, dur: 1.0, vel: 0.90 },      // Bb2
        // Off-beat swagger figure
        { t: 0.5, div: 'great', midi: 77, dur: 0.25, vel: 0.88 },   // F5
        { t: 0.75, div: 'great', midi: 74, dur: 0.25, vel: 0.85 },  // D5
        { t: 1.0, div: 'great', midi: 70, dur: 0.25, vel: 0.88 },   // Bb4
        { t: 1.25, div: 'great', midi: 74, dur: 0.25, vel: 0.85 },  // D5
        { t: 1.5, div: 'great', midi: 77, dur: 0.25, vel: 0.90 },   // F5
        { t: 1.75, div: 'great', midi: 82, dur: 0.25, vel: 0.92 },  // Bb5
        { t: 1.0, div: 'pedal', midi: 53, dur: 1.0, vel: 0.85 },    // F3

        // Bar 2: Descending scale with bounce
        { t: 2.0, div: 'great', midi: 82, dur: 0.25, vel: 0.92 },   // Bb5
        { t: 2.25, div: 'great', midi: 81, dur: 0.25, vel: 0.88 },  // A5
        { t: 2.5, div: 'great', midi: 79, dur: 0.25, vel: 0.88 },   // G5
        { t: 2.75, div: 'great', midi: 77, dur: 0.25, vel: 0.85 },  // F5
        { t: 3.0, div: 'great', midi: 75, dur: 0.25, vel: 0.85 },   // Eb5
        { t: 3.25, div: 'great', midi: 74, dur: 0.25, vel: 0.83 },  // D5
        { t: 3.5, div: 'great', midi: 72, dur: 0.25, vel: 0.83 },   // C5
        { t: 3.75, div: 'great', midi: 70, dur: 0.25, vel: 0.85 },  // Bb4
        { t: 2.0, div: 'pedal', midi: 46, dur: 2.0, vel: 0.88 },    // Bb2

        // LH accompaniment pattern
        { t: 2.0, div: 'swell', midi: 58, dur: 0.4, vel: 0.72 },    // Bb3
        { t: 2.0, div: 'swell', midi: 62, dur: 0.4, vel: 0.70 },    // D4
        { t: 2.0, div: 'swell', midi: 65, dur: 0.4, vel: 0.70 },    // F4
        { t: 3.0, div: 'swell', midi: 58, dur: 0.4, vel: 0.72 },    // Bb3
        { t: 3.0, div: 'swell', midi: 62, dur: 0.4, vel: 0.70 },    // D4
        { t: 3.0, div: 'swell', midi: 65, dur: 0.4, vel: 0.70 },    // F4

        // Bar 3: Rising arpeggio theme
        { t: 4.0, div: 'great', midi: 70, dur: 0.25, vel: 0.88 },   // Bb4
        { t: 4.25, div: 'great', midi: 72, dur: 0.25, vel: 0.86 },  // C5
        { t: 4.5, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },   // D5
        { t: 4.75, div: 'great', midi: 75, dur: 0.25, vel: 0.86 },  // Eb5
        { t: 5.0, div: 'great', midi: 77, dur: 0.5, vel: 0.90 },    // F5
        { t: 5.5, div: 'great', midi: 74, dur: 0.25, vel: 0.85 },   // D5
        { t: 5.75, div: 'great', midi: 70, dur: 0.25, vel: 0.83 },  // Bb4
        { t: 4.0, div: 'pedal', midi: 46, dur: 1.0, vel: 0.85 },    // Bb2
        { t: 5.0, div: 'pedal', midi: 53, dur: 1.0, vel: 0.85 },    // F3

        { t: 4.0, div: 'swell', midi: 58, dur: 0.4, vel: 0.72 },    // Bb3
        { t: 4.0, div: 'swell', midi: 62, dur: 0.4, vel: 0.70 },    // D4
        { t: 5.0, div: 'swell', midi: 60, dur: 0.4, vel: 0.72 },    // C4
        { t: 5.0, div: 'swell', midi: 65, dur: 0.4, vel: 0.70 },    // F4

        // Bar 4: Cadential figure to F
        { t: 6.0, div: 'great', midi: 77, dur: 0.5, vel: 0.90 },    // F5
        { t: 6.5, div: 'great', midi: 75, dur: 0.25, vel: 0.85 },   // Eb5
        { t: 6.75, div: 'great', midi: 74, dur: 0.25, vel: 0.83 },  // D5
        { t: 7.0, div: 'great', midi: 72, dur: 0.5, vel: 0.85 },    // C5
        { t: 7.5, div: 'great', midi: 70, dur: 0.5, vel: 0.88 },    // Bb4
        { t: 6.0, div: 'pedal', midi: 53, dur: 1.0, vel: 0.85 },    // F3
        { t: 7.0, div: 'pedal', midi: 46, dur: 1.0, vel: 0.88 },    // Bb2

        { t: 6.0, div: 'swell', midi: 60, dur: 0.4, vel: 0.72 },    // C4
        { t: 6.0, div: 'swell', midi: 63, dur: 0.4, vel: 0.70 },    // Eb4
        { t: 6.0, div: 'swell', midi: 65, dur: 0.4, vel: 0.70 },    // F4
        { t: 7.0, div: 'swell', midi: 58, dur: 0.4, vel: 0.72 },    // Bb3
        { t: 7.0, div: 'swell', midi: 62, dur: 0.4, vel: 0.70 },    // D4
        { t: 7.0, div: 'swell', midi: 65, dur: 0.4, vel: 0.70 },    // F4

        // Bar 5-6: Brilliant pedal solo with manual chords
        { t: 8.0, div: 'pedal', midi: 46, dur: 0.25, vel: 0.90 },   // Bb2
        { t: 8.25, div: 'pedal', midi: 48, dur: 0.25, vel: 0.88 },  // C3
        { t: 8.5, div: 'pedal', midi: 50, dur: 0.25, vel: 0.88 },   // D3
        { t: 8.75, div: 'pedal', midi: 51, dur: 0.25, vel: 0.88 },  // Eb3
        { t: 9.0, div: 'pedal', midi: 53, dur: 0.25, vel: 0.90 },   // F3
        { t: 9.25, div: 'pedal', midi: 55, dur: 0.25, vel: 0.88 },  // G3
        { t: 9.5, div: 'pedal', midi: 57, dur: 0.25, vel: 0.90 },   // A3
        { t: 9.75, div: 'pedal', midi: 58, dur: 0.25, vel: 0.92 },  // Bb3

        // Manual chords during pedal solo
        { t: 8.0, div: 'great', midi: 70, dur: 0.8, vel: 0.85 },    // Bb4
        { t: 8.0, div: 'great', midi: 74, dur: 0.8, vel: 0.82 },    // D5
        { t: 8.0, div: 'great', midi: 77, dur: 0.8, vel: 0.82 },    // F5
        { t: 9.0, div: 'great', midi: 72, dur: 0.8, vel: 0.85 },    // C5
        { t: 9.0, div: 'great', midi: 75, dur: 0.8, vel: 0.82 },    // Eb5
        { t: 9.0, div: 'great', midi: 77, dur: 0.8, vel: 0.82 },    // F5

        // Bar 7-8: Pedal continues, reaches high point
        { t: 10.0, div: 'pedal', midi: 58, dur: 0.25, vel: 0.92 },  // Bb3
        { t: 10.25, div: 'pedal', midi: 57, dur: 0.25, vel: 0.90 }, // A3
        { t: 10.5, div: 'pedal', midi: 55, dur: 0.25, vel: 0.88 },  // G3
        { t: 10.75, div: 'pedal', midi: 53, dur: 0.25, vel: 0.88 }, // F3
        { t: 11.0, div: 'pedal', midi: 51, dur: 0.25, vel: 0.88 },  // Eb3
        { t: 11.25, div: 'pedal', midi: 50, dur: 0.25, vel: 0.85 }, // D3
        { t: 11.5, div: 'pedal', midi: 48, dur: 0.25, vel: 0.85 },  // C3
        { t: 11.75, div: 'pedal', midi: 46, dur: 0.5, vel: 0.90 },  // Bb2

        { t: 10.0, div: 'great', midi: 74, dur: 0.8, vel: 0.85 },   // D5
        { t: 10.0, div: 'great', midi: 77, dur: 0.8, vel: 0.82 },   // F5
        { t: 10.0, div: 'great', midi: 82, dur: 0.8, vel: 0.85 },   // Bb5
        { t: 11.0, div: 'great', midi: 70, dur: 1.0, vel: 0.90 },   // Bb4
        { t: 11.0, div: 'great', midi: 74, dur: 1.0, vel: 0.88 },   // D5
        { t: 11.0, div: 'great', midi: 77, dur: 1.0, vel: 0.88 },   // F5

        // ======== B Section: Contrasting — Eb major, more lyrical (bars 9-16) ========
        // Bar 9: Eb major melody on swell
        { t: 12.0, div: 'swell', midi: 75, dur: 1.0, vel: 0.78 },   // Eb5
        { t: 13.0, div: 'swell', midi: 74, dur: 0.5, vel: 0.75 },   // D5
        { t: 13.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.73 },   // C5
        { t: 12.0, div: 'choir', midi: 63, dur: 1.0, vel: 0.65 },   // Eb4
        { t: 12.0, div: 'choir', midi: 67, dur: 1.0, vel: 0.63 },   // G4
        { t: 12.0, div: 'choir', midi: 70, dur: 1.0, vel: 0.63 },   // Bb4
        { t: 13.0, div: 'choir', midi: 63, dur: 1.0, vel: 0.65 },   // Eb4
        { t: 13.0, div: 'choir', midi: 67, dur: 1.0, vel: 0.63 },   // G4
        { t: 13.0, div: 'choir', midi: 70, dur: 1.0, vel: 0.63 },   // Bb4
        { t: 12.0, div: 'pedal', midi: 51, dur: 2.0, vel: 0.72 },   // Eb3

        // Bar 10: Flowing melody
        { t: 14.0, div: 'swell', midi: 70, dur: 0.5, vel: 0.76 },   // Bb4
        { t: 14.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.78 },   // C5
        { t: 15.0, div: 'swell', midi: 74, dur: 1.0, vel: 0.80 },   // D5
        { t: 14.0, div: 'choir', midi: 65, dur: 1.0, vel: 0.65 },   // F4
        { t: 14.0, div: 'choir', midi: 69, dur: 1.0, vel: 0.63 },   // A4
        { t: 15.0, div: 'choir', midi: 62, dur: 1.0, vel: 0.65 },   // D4
        { t: 15.0, div: 'choir', midi: 65, dur: 1.0, vel: 0.63 },   // F4
        { t: 14.0, div: 'pedal', midi: 53, dur: 2.0, vel: 0.72 },   // F3

        // Bar 11-12: Sequence moving to Ab, then back
        { t: 16.0, div: 'swell', midi: 75, dur: 1.0, vel: 0.78 },   // Eb5
        { t: 17.0, div: 'swell', midi: 73, dur: 0.5, vel: 0.76 },   // Db5
        { t: 17.5, div: 'swell', midi: 72, dur: 0.5, vel: 0.75 },   // C5
        { t: 16.0, div: 'choir', midi: 68, dur: 1.0, vel: 0.65 },   // Ab4
        { t: 16.0, div: 'choir', midi: 63, dur: 1.0, vel: 0.63 },   // Eb4
        { t: 17.0, div: 'choir', midi: 65, dur: 1.0, vel: 0.65 },   // F4
        { t: 17.0, div: 'choir', midi: 60, dur: 1.0, vel: 0.63 },   // C4
        { t: 16.0, div: 'pedal', midi: 56, dur: 2.0, vel: 0.72 },   // Ab3

        { t: 18.0, div: 'swell', midi: 70, dur: 1.0, vel: 0.76 },   // Bb4
        { t: 19.0, div: 'swell', midi: 72, dur: 0.5, vel: 0.78 },   // C5
        { t: 19.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4
        { t: 18.0, div: 'choir', midi: 63, dur: 1.0, vel: 0.65 },   // Eb4
        { t: 18.0, div: 'choir', midi: 67, dur: 1.0, vel: 0.63 },   // G4
        { t: 19.0, div: 'choir', midi: 65, dur: 1.0, vel: 0.65 },   // F4
        { t: 19.0, div: 'choir', midi: 69, dur: 1.0, vel: 0.63 },   // A4
        { t: 18.0, div: 'pedal', midi: 51, dur: 2.0, vel: 0.72 },   // Eb3

        // Bar 13-14: Return to dominant (F), building energy
        { t: 20.0, div: 'swell', midi: 69, dur: 0.5, vel: 0.78 },   // A4
        { t: 20.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.80 },   // Bb4
        { t: 21.0, div: 'swell', midi: 72, dur: 0.5, vel: 0.82 },   // C5
        { t: 21.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.84 },   // D5
        { t: 20.0, div: 'choir', midi: 60, dur: 1.0, vel: 0.65 },   // C4
        { t: 20.0, div: 'choir', midi: 65, dur: 1.0, vel: 0.63 },   // F4
        { t: 21.0, div: 'choir', midi: 60, dur: 1.0, vel: 0.68 },   // C4
        { t: 21.0, div: 'choir', midi: 65, dur: 1.0, vel: 0.66 },   // F4
        { t: 20.0, div: 'pedal', midi: 53, dur: 2.0, vel: 0.75 },   // F3

        // Bar 15-16: Transition back, dominant seventh of Bb
        { t: 22.0, div: 'swell', midi: 77, dur: 0.5, vel: 0.85 },   // F5
        { t: 22.5, div: 'swell', midi: 75, dur: 0.25, vel: 0.82 },  // Eb5
        { t: 22.75, div: 'swell', midi: 74, dur: 0.25, vel: 0.80 }, // D5
        { t: 23.0, div: 'swell', midi: 72, dur: 0.5, vel: 0.82 },   // C5
        { t: 23.5, div: 'swell', midi: 69, dur: 0.5, vel: 0.80 },   // A4
        { t: 22.0, div: 'choir', midi: 60, dur: 1.0, vel: 0.68 },   // C4
        { t: 22.0, div: 'choir', midi: 63, dur: 1.0, vel: 0.66 },   // Eb4
        { t: 22.0, div: 'choir', midi: 65, dur: 1.0, vel: 0.66 },   // F4
        { t: 23.0, div: 'choir', midi: 60, dur: 1.0, vel: 0.68 },   // C4
        { t: 23.0, div: 'choir', midi: 63, dur: 1.0, vel: 0.66 },   // Eb4
        { t: 23.0, div: 'choir', midi: 65, dur: 1.0, vel: 0.66 },   // F4
        { t: 22.0, div: 'pedal', midi: 53, dur: 2.0, vel: 0.78 },   // F3

        // ======== A' Section: Return of main theme — brilliant ending (bars 17-24) ========
        // Bar 17: Theme returns, full organ
        { t: 24.0, div: 'great', midi: 70, dur: 0.3, vel: 0.95 },   // Bb4
        { t: 24.0, div: 'great', midi: 74, dur: 0.3, vel: 0.92 },   // D5
        { t: 24.0, div: 'great', midi: 77, dur: 0.3, vel: 0.92 },   // F5
        { t: 24.0, div: 'pedal', midi: 46, dur: 1.0, vel: 0.92 },   // Bb2
        { t: 24.5, div: 'great', midi: 77, dur: 0.25, vel: 0.90 },  // F5
        { t: 24.75, div: 'great', midi: 74, dur: 0.25, vel: 0.88 }, // D5
        { t: 25.0, div: 'great', midi: 70, dur: 0.25, vel: 0.90 },  // Bb4
        { t: 25.25, div: 'great', midi: 74, dur: 0.25, vel: 0.88 }, // D5
        { t: 25.5, div: 'great', midi: 77, dur: 0.25, vel: 0.92 },  // F5
        { t: 25.75, div: 'great', midi: 82, dur: 0.25, vel: 0.95 }, // Bb5
        { t: 25.0, div: 'pedal', midi: 53, dur: 1.0, vel: 0.88 },   // F3

        // Bar 18: Even more brilliant descending run
        { t: 26.0, div: 'great', midi: 82, dur: 0.12, vel: 0.95 },  // Bb5
        { t: 26.12, div: 'great', midi: 81, dur: 0.12, vel: 0.92 }, // A5
        { t: 26.25, div: 'great', midi: 79, dur: 0.12, vel: 0.92 }, // G5
        { t: 26.37, div: 'great', midi: 77, dur: 0.12, vel: 0.90 }, // F5
        { t: 26.5, div: 'great', midi: 75, dur: 0.12, vel: 0.90 },  // Eb5
        { t: 26.62, div: 'great', midi: 74, dur: 0.12, vel: 0.88 }, // D5
        { t: 26.75, div: 'great', midi: 72, dur: 0.12, vel: 0.88 }, // C5
        { t: 26.87, div: 'great', midi: 70, dur: 0.12, vel: 0.90 }, // Bb4
        { t: 27.0, div: 'great', midi: 69, dur: 0.12, vel: 0.88 },  // A4
        { t: 27.12, div: 'great', midi: 67, dur: 0.12, vel: 0.88 }, // G4
        { t: 27.25, div: 'great', midi: 65, dur: 0.12, vel: 0.86 }, // F4
        { t: 27.37, div: 'great', midi: 63, dur: 0.12, vel: 0.86 }, // Eb4
        { t: 27.5, div: 'great', midi: 62, dur: 0.12, vel: 0.85 },  // D4
        { t: 27.62, div: 'great', midi: 60, dur: 0.12, vel: 0.85 }, // C4
        { t: 27.75, div: 'great', midi: 58, dur: 0.12, vel: 0.88 }, // Bb3
        { t: 27.87, div: 'great', midi: 62, dur: 0.12, vel: 0.90 }, // D4
        { t: 26.0, div: 'pedal', midi: 46, dur: 2.0, vel: 0.90 },   // Bb2

        // Bar 19-20: Pedal solo reprise, even more brilliant
        { t: 28.0, div: 'pedal', midi: 46, dur: 0.25, vel: 0.92 },  // Bb2
        { t: 28.25, div: 'pedal', midi: 48, dur: 0.25, vel: 0.90 }, // C3
        { t: 28.5, div: 'pedal', midi: 50, dur: 0.25, vel: 0.90 },  // D3
        { t: 28.75, div: 'pedal', midi: 51, dur: 0.25, vel: 0.90 }, // Eb3
        { t: 29.0, div: 'pedal', midi: 53, dur: 0.25, vel: 0.92 },  // F3
        { t: 29.25, div: 'pedal', midi: 55, dur: 0.25, vel: 0.90 }, // G3
        { t: 29.5, div: 'pedal', midi: 57, dur: 0.25, vel: 0.92 },  // A3
        { t: 29.75, div: 'pedal', midi: 58, dur: 0.25, vel: 0.95 }, // Bb3

        { t: 28.0, div: 'great', midi: 70, dur: 0.8, vel: 0.88 },   // Bb4
        { t: 28.0, div: 'great', midi: 74, dur: 0.8, vel: 0.85 },   // D5
        { t: 28.0, div: 'great', midi: 77, dur: 0.8, vel: 0.85 },   // F5
        { t: 29.0, div: 'great', midi: 72, dur: 0.8, vel: 0.88 },   // C5
        { t: 29.0, div: 'great', midi: 75, dur: 0.8, vel: 0.85 },   // Eb5
        { t: 29.0, div: 'great', midi: 77, dur: 0.8, vel: 0.85 },   // F5

        // Bar 21-22: Grand cadential preparation
        { t: 30.0, div: 'great', midi: 77, dur: 0.5, vel: 0.92 },   // F5
        { t: 30.5, div: 'great', midi: 75, dur: 0.5, vel: 0.90 },   // Eb5
        { t: 31.0, div: 'great', midi: 74, dur: 0.5, vel: 0.90 },   // D5
        { t: 31.5, div: 'great', midi: 72, dur: 0.5, vel: 0.88 },   // C5
        { t: 30.0, div: 'pedal', midi: 53, dur: 2.0, vel: 0.90 },   // F3
        { t: 30.0, div: 'swell', midi: 60, dur: 1.0, vel: 0.78 },   // C4
        { t: 30.0, div: 'swell', midi: 63, dur: 1.0, vel: 0.75 },   // Eb4
        { t: 30.0, div: 'swell', midi: 65, dur: 1.0, vel: 0.75 },   // F4
        { t: 31.0, div: 'swell', midi: 58, dur: 1.0, vel: 0.78 },   // Bb3
        { t: 31.0, div: 'swell', midi: 62, dur: 1.0, vel: 0.75 },   // D4
        { t: 31.0, div: 'swell', midi: 65, dur: 1.0, vel: 0.75 },   // F4

        // Bar 23-24: Final flourish and resolution — fff
        { t: 32.0, div: 'great', midi: 70, dur: 0.12, vel: 0.95 },  // Bb4
        { t: 32.12, div: 'great', midi: 74, dur: 0.12, vel: 0.93 }, // D5
        { t: 32.25, div: 'great', midi: 77, dur: 0.12, vel: 0.95 }, // F5
        { t: 32.37, div: 'great', midi: 82, dur: 0.12, vel: 0.97 }, // Bb5
        { t: 32.5, div: 'great', midi: 77, dur: 0.12, vel: 0.95 },  // F5
        { t: 32.62, div: 'great', midi: 74, dur: 0.12, vel: 0.93 }, // D5
        { t: 32.75, div: 'great', midi: 77, dur: 0.12, vel: 0.95 }, // F5
        { t: 32.87, div: 'great', midi: 82, dur: 0.12, vel: 0.97 }, // Bb5
        { t: 32.0, div: 'pedal', midi: 46, dur: 2.0, vel: 0.95 },   // Bb2

        // Final massive Bb major chord
        { t: 33.0, div: 'great', midi: 70, dur: 2.0, vel: 0.98 },   // Bb4
        { t: 33.0, div: 'great', midi: 74, dur: 2.0, vel: 0.95 },   // D5
        { t: 33.0, div: 'great', midi: 77, dur: 2.0, vel: 0.95 },   // F5
        { t: 33.0, div: 'great', midi: 82, dur: 2.0, vel: 0.98 },   // Bb5
        { t: 33.0, div: 'swell', midi: 58, dur: 2.0, vel: 0.85 },   // Bb3
        { t: 33.0, div: 'swell', midi: 62, dur: 2.0, vel: 0.82 },   // D4
        { t: 33.0, div: 'swell', midi: 65, dur: 2.0, vel: 0.82 },   // F4
        { t: 33.0, div: 'pedal', midi: 46, dur: 2.0, vel: 0.98 },   // Bb2
    ]
};

// ============================================================
// 6. Mulet — Carillon-Sortie in D major
// ============================================================
// Spectacular bell-imitation piece written before 1917.
// Mulet was organist at St. Roch, Paris; dedicated to
// Joseph Bonnet. Brilliant final voluntary in toccata style,
// imitating a melodic set of carillon bells. Rapid repeated
// chords simulating bell peals, thrilling build to ending.
// ============================================================

const PIECE_MULET_CARILLON = {
    title: "Carillon-Sortie",
    composer: "Henri Mulet",
    catalog: "Carillon-Sortie",
    key: "D major",
    tempo: 132,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4', 'sw-nazard'],
        choir: ['ch-flute8', 'ch-spitzflute4', 'ch-quint'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ======== Opening bell peals in D major (bars 1-4) ========
        // Bar 1: Rapid repeated D major chords — carillon bells
        { t: 0, div: 'great', midi: 74, dur: 0.15, vel: 0.90 },     // D5
        { t: 0, div: 'great', midi: 78, dur: 0.15, vel: 0.88 },     // F#5
        { t: 0, div: 'great', midi: 81, dur: 0.15, vel: 0.88 },     // A5
        { t: 0.25, div: 'great', midi: 74, dur: 0.15, vel: 0.88 },  // D5
        { t: 0.25, div: 'great', midi: 78, dur: 0.15, vel: 0.86 },  // F#5
        { t: 0.25, div: 'great', midi: 81, dur: 0.15, vel: 0.86 },  // A5
        { t: 0.5, div: 'great', midi: 74, dur: 0.15, vel: 0.90 },   // D5
        { t: 0.5, div: 'great', midi: 78, dur: 0.15, vel: 0.88 },   // F#5
        { t: 0.5, div: 'great', midi: 81, dur: 0.15, vel: 0.88 },   // A5
        { t: 0.75, div: 'great', midi: 74, dur: 0.15, vel: 0.88 },  // D5
        { t: 0.75, div: 'great', midi: 78, dur: 0.15, vel: 0.86 },  // F#5
        { t: 0.75, div: 'great', midi: 81, dur: 0.15, vel: 0.86 },  // A5
        { t: 0, div: 'pedal', midi: 38, dur: 1.0, vel: 0.90 },      // D2 bass bell

        // Beat 2
        { t: 1.0, div: 'great', midi: 74, dur: 0.15, vel: 0.90 },   // D5
        { t: 1.0, div: 'great', midi: 78, dur: 0.15, vel: 0.88 },   // F#5
        { t: 1.0, div: 'great', midi: 81, dur: 0.15, vel: 0.88 },   // A5
        { t: 1.25, div: 'great', midi: 74, dur: 0.15, vel: 0.88 },  // D5
        { t: 1.25, div: 'great', midi: 78, dur: 0.15, vel: 0.86 },  // F#5
        { t: 1.25, div: 'great', midi: 81, dur: 0.15, vel: 0.86 },  // A5
        { t: 1.5, div: 'great', midi: 74, dur: 0.15, vel: 0.90 },   // D5
        { t: 1.5, div: 'great', midi: 78, dur: 0.15, vel: 0.88 },   // F#5
        { t: 1.5, div: 'great', midi: 81, dur: 0.15, vel: 0.88 },   // A5
        { t: 1.75, div: 'great', midi: 74, dur: 0.15, vel: 0.88 },  // D5
        { t: 1.75, div: 'great', midi: 78, dur: 0.15, vel: 0.86 },  // F#5
        { t: 1.75, div: 'great', midi: 81, dur: 0.15, vel: 0.86 },  // A5
        { t: 1.0, div: 'pedal', midi: 45, dur: 1.0, vel: 0.88 },    // A2

        // Bar 2: Swell responds — higher bell register
        { t: 2.0, div: 'swell', midi: 81, dur: 0.15, vel: 0.85 },   // A5
        { t: 2.0, div: 'swell', midi: 86, dur: 0.15, vel: 0.83 },   // D6
        { t: 2.25, div: 'swell', midi: 81, dur: 0.15, vel: 0.83 },  // A5
        { t: 2.25, div: 'swell', midi: 86, dur: 0.15, vel: 0.82 },  // D6
        { t: 2.5, div: 'swell', midi: 81, dur: 0.15, vel: 0.85 },   // A5
        { t: 2.5, div: 'swell', midi: 86, dur: 0.15, vel: 0.83 },   // D6
        { t: 2.75, div: 'swell', midi: 81, dur: 0.15, vel: 0.83 },  // A5
        { t: 2.75, div: 'swell', midi: 86, dur: 0.15, vel: 0.82 },  // D6
        { t: 2.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.88 },    // D2

        // Great lower bell response
        { t: 3.0, div: 'great', midi: 62, dur: 0.15, vel: 0.88 },   // D4
        { t: 3.0, div: 'great', midi: 66, dur: 0.15, vel: 0.85 },   // F#4
        { t: 3.0, div: 'great', midi: 69, dur: 0.15, vel: 0.85 },   // A4
        { t: 3.25, div: 'great', midi: 62, dur: 0.15, vel: 0.86 },  // D4
        { t: 3.25, div: 'great', midi: 66, dur: 0.15, vel: 0.83 },  // F#4
        { t: 3.25, div: 'great', midi: 69, dur: 0.15, vel: 0.83 },  // A4
        { t: 3.5, div: 'great', midi: 62, dur: 0.15, vel: 0.88 },   // D4
        { t: 3.5, div: 'great', midi: 66, dur: 0.15, vel: 0.85 },   // F#4
        { t: 3.5, div: 'great', midi: 69, dur: 0.15, vel: 0.85 },   // A4
        { t: 3.75, div: 'great', midi: 62, dur: 0.15, vel: 0.86 },  // D4
        { t: 3.75, div: 'great', midi: 66, dur: 0.15, vel: 0.83 },  // F#4
        { t: 3.75, div: 'great', midi: 69, dur: 0.15, vel: 0.83 },  // A4

        // Bar 3: G major bells (subdominant)
        { t: 4.0, div: 'great', midi: 67, dur: 0.15, vel: 0.88 },   // G4
        { t: 4.0, div: 'great', midi: 71, dur: 0.15, vel: 0.85 },   // B4
        { t: 4.0, div: 'great', midi: 74, dur: 0.15, vel: 0.85 },   // D5
        { t: 4.25, div: 'great', midi: 67, dur: 0.15, vel: 0.86 },  // G4
        { t: 4.25, div: 'great', midi: 71, dur: 0.15, vel: 0.83 },  // B4
        { t: 4.25, div: 'great', midi: 74, dur: 0.15, vel: 0.83 },  // D5
        { t: 4.5, div: 'great', midi: 67, dur: 0.15, vel: 0.88 },   // G4
        { t: 4.5, div: 'great', midi: 71, dur: 0.15, vel: 0.85 },   // B4
        { t: 4.5, div: 'great', midi: 74, dur: 0.15, vel: 0.85 },   // D5
        { t: 4.75, div: 'great', midi: 67, dur: 0.15, vel: 0.86 },  // G4
        { t: 4.75, div: 'great', midi: 71, dur: 0.15, vel: 0.83 },  // B4
        { t: 4.75, div: 'great', midi: 74, dur: 0.15, vel: 0.83 },  // D5
        { t: 4.0, div: 'pedal', midi: 43, dur: 2.0, vel: 0.88 },    // G2

        // A major bells (dominant)
        { t: 5.0, div: 'great', midi: 69, dur: 0.15, vel: 0.90 },   // A4
        { t: 5.0, div: 'great', midi: 73, dur: 0.15, vel: 0.88 },   // C#5
        { t: 5.0, div: 'great', midi: 76, dur: 0.15, vel: 0.88 },   // E5
        { t: 5.25, div: 'great', midi: 69, dur: 0.15, vel: 0.88 },  // A4
        { t: 5.25, div: 'great', midi: 73, dur: 0.15, vel: 0.86 },  // C#5
        { t: 5.25, div: 'great', midi: 76, dur: 0.15, vel: 0.86 },  // E5
        { t: 5.5, div: 'great', midi: 69, dur: 0.15, vel: 0.90 },   // A4
        { t: 5.5, div: 'great', midi: 73, dur: 0.15, vel: 0.88 },   // C#5
        { t: 5.5, div: 'great', midi: 76, dur: 0.15, vel: 0.88 },   // E5
        { t: 5.75, div: 'great', midi: 69, dur: 0.15, vel: 0.88 },  // A4
        { t: 5.75, div: 'great', midi: 73, dur: 0.15, vel: 0.86 },  // C#5
        { t: 5.75, div: 'great', midi: 76, dur: 0.15, vel: 0.86 },  // E5

        // Bar 4: D major cadence with echo between manuals
        { t: 6.0, div: 'great', midi: 74, dur: 0.5, vel: 0.92 },    // D5
        { t: 6.0, div: 'great', midi: 78, dur: 0.5, vel: 0.90 },    // F#5
        { t: 6.0, div: 'great', midi: 81, dur: 0.5, vel: 0.90 },    // A5
        { t: 6.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.92 },    // D2
        { t: 6.5, div: 'swell', midi: 74, dur: 0.15, vel: 0.82 },   // D5 echo
        { t: 6.5, div: 'swell', midi: 78, dur: 0.15, vel: 0.80 },   // F#5
        { t: 6.75, div: 'swell', midi: 74, dur: 0.15, vel: 0.80 },  // D5
        { t: 6.75, div: 'swell', midi: 78, dur: 0.15, vel: 0.78 },  // F#5
        { t: 7.0, div: 'great', midi: 74, dur: 0.5, vel: 0.92 },    // D5
        { t: 7.0, div: 'great', midi: 78, dur: 0.5, vel: 0.90 },    // F#5
        { t: 7.0, div: 'great', midi: 81, dur: 0.5, vel: 0.90 },    // A5
        { t: 7.5, div: 'swell', midi: 74, dur: 0.15, vel: 0.82 },   // D5 echo
        { t: 7.5, div: 'swell', midi: 78, dur: 0.15, vel: 0.80 },   // F#5

        // ======== Melodic bell theme (bars 5-10) ========
        // Bar 5: Singing D melody over bell accompaniment
        { t: 8.0, div: 'great', midi: 74, dur: 1.0, vel: 0.88 },    // D5 melody
        { t: 8.0, div: 'swell', midi: 62, dur: 0.15, vel: 0.75 },   // D4 bell
        { t: 8.0, div: 'swell', midi: 66, dur: 0.15, vel: 0.73 },   // F#4
        { t: 8.25, div: 'swell', midi: 62, dur: 0.15, vel: 0.73 },  // D4
        { t: 8.25, div: 'swell', midi: 66, dur: 0.15, vel: 0.72 },  // F#4
        { t: 8.5, div: 'swell', midi: 62, dur: 0.15, vel: 0.75 },   // D4
        { t: 8.5, div: 'swell', midi: 66, dur: 0.15, vel: 0.73 },   // F#4
        { t: 8.75, div: 'swell', midi: 62, dur: 0.15, vel: 0.73 },  // D4
        { t: 8.75, div: 'swell', midi: 66, dur: 0.15, vel: 0.72 },  // F#4
        { t: 8.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.82 },    // D2

        // Bar 6: Melody rises E5-F#5
        { t: 9.0, div: 'great', midi: 76, dur: 0.5, vel: 0.88 },    // E5
        { t: 9.5, div: 'great', midi: 78, dur: 0.5, vel: 0.90 },    // F#5
        { t: 9.0, div: 'swell', midi: 64, dur: 0.15, vel: 0.75 },   // E4
        { t: 9.0, div: 'swell', midi: 69, dur: 0.15, vel: 0.73 },   // A4
        { t: 9.25, div: 'swell', midi: 64, dur: 0.15, vel: 0.73 },  // E4
        { t: 9.25, div: 'swell', midi: 69, dur: 0.15, vel: 0.72 },  // A4
        { t: 9.5, div: 'swell', midi: 66, dur: 0.15, vel: 0.75 },   // F#4
        { t: 9.5, div: 'swell', midi: 69, dur: 0.15, vel: 0.73 },   // A4
        { t: 9.75, div: 'swell', midi: 66, dur: 0.15, vel: 0.73 },  // F#4
        { t: 9.75, div: 'swell', midi: 69, dur: 0.15, vel: 0.72 },  // A4

        // Bar 7-8: Melody peaks at A5, descends
        { t: 10.0, div: 'great', midi: 79, dur: 0.5, vel: 0.90 },   // G5
        { t: 10.5, div: 'great', midi: 81, dur: 1.0, vel: 0.92 },   // A5
        { t: 10.0, div: 'swell', midi: 67, dur: 0.15, vel: 0.75 },  // G4
        { t: 10.0, div: 'swell', midi: 71, dur: 0.15, vel: 0.73 },  // B4
        { t: 10.25, div: 'swell', midi: 67, dur: 0.15, vel: 0.73 }, // G4
        { t: 10.25, div: 'swell', midi: 71, dur: 0.15, vel: 0.72 }, // B4
        { t: 10.5, div: 'swell', midi: 69, dur: 0.15, vel: 0.75 },  // A4
        { t: 10.5, div: 'swell', midi: 73, dur: 0.15, vel: 0.73 },  // C#5
        { t: 10.75, div: 'swell', midi: 69, dur: 0.15, vel: 0.73 }, // A4
        { t: 10.75, div: 'swell', midi: 73, dur: 0.15, vel: 0.72 }, // C#5
        { t: 10.0, div: 'pedal', midi: 43, dur: 1.0, vel: 0.82 },   // G2
        { t: 11.0, div: 'pedal', midi: 45, dur: 1.0, vel: 0.85 },   // A2

        { t: 11.5, div: 'great', midi: 78, dur: 0.5, vel: 0.88 },   // F#5
        { t: 11.0, div: 'swell', midi: 69, dur: 0.15, vel: 0.75 },  // A4
        { t: 11.0, div: 'swell', midi: 73, dur: 0.15, vel: 0.73 },  // C#5
        { t: 11.25, div: 'swell', midi: 69, dur: 0.15, vel: 0.73 }, // A4
        { t: 11.25, div: 'swell', midi: 73, dur: 0.15, vel: 0.72 }, // C#5
        { t: 11.5, div: 'swell', midi: 66, dur: 0.15, vel: 0.75 },  // F#4
        { t: 11.5, div: 'swell', midi: 69, dur: 0.15, vel: 0.73 },  // A4
        { t: 11.75, div: 'swell', midi: 66, dur: 0.15, vel: 0.73 }, // F#4
        { t: 11.75, div: 'swell', midi: 69, dur: 0.15, vel: 0.72 }, // A4

        // Bar 9-10: Melody resolves to D, cadential
        { t: 12.0, div: 'great', midi: 76, dur: 0.5, vel: 0.88 },   // E5
        { t: 12.5, div: 'great', midi: 74, dur: 1.0, vel: 0.90 },   // D5
        { t: 12.0, div: 'swell', midi: 64, dur: 0.15, vel: 0.75 },  // E4
        { t: 12.0, div: 'swell', midi: 67, dur: 0.15, vel: 0.73 },  // G4
        { t: 12.25, div: 'swell', midi: 64, dur: 0.15, vel: 0.73 }, // E4
        { t: 12.25, div: 'swell', midi: 67, dur: 0.15, vel: 0.72 }, // G4
        { t: 12.5, div: 'swell', midi: 62, dur: 0.15, vel: 0.75 },  // D4
        { t: 12.5, div: 'swell', midi: 66, dur: 0.15, vel: 0.73 },  // F#4
        { t: 12.75, div: 'swell', midi: 62, dur: 0.15, vel: 0.73 }, // D4
        { t: 12.75, div: 'swell', midi: 66, dur: 0.15, vel: 0.72 }, // F#4
        { t: 12.0, div: 'pedal', midi: 45, dur: 1.0, vel: 0.85 },   // A2
        { t: 13.0, div: 'pedal', midi: 38, dur: 1.0, vel: 0.88 },   // D2

        // ======== Building to climax (bars 11-16) ========
        // Bar 11: A major dominant bells intensifying
        { t: 14.0, div: 'great', midi: 73, dur: 0.15, vel: 0.92 },  // C#5
        { t: 14.0, div: 'great', midi: 76, dur: 0.15, vel: 0.90 },  // E5
        { t: 14.0, div: 'great', midi: 81, dur: 0.15, vel: 0.90 },  // A5
        { t: 14.25, div: 'great', midi: 73, dur: 0.15, vel: 0.90 }, // C#5
        { t: 14.25, div: 'great', midi: 76, dur: 0.15, vel: 0.88 }, // E5
        { t: 14.25, div: 'great', midi: 81, dur: 0.15, vel: 0.88 }, // A5
        { t: 14.5, div: 'great', midi: 73, dur: 0.15, vel: 0.92 },  // C#5
        { t: 14.5, div: 'great', midi: 76, dur: 0.15, vel: 0.90 },  // E5
        { t: 14.5, div: 'great', midi: 81, dur: 0.15, vel: 0.90 },  // A5
        { t: 14.75, div: 'great', midi: 73, dur: 0.15, vel: 0.90 }, // C#5
        { t: 14.75, div: 'great', midi: 76, dur: 0.15, vel: 0.88 }, // E5
        { t: 14.75, div: 'great', midi: 81, dur: 0.15, vel: 0.88 }, // A5
        { t: 14.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.92 },   // A2

        // Bar 12: D major bells fff
        { t: 15.0, div: 'great', midi: 74, dur: 0.15, vel: 0.95 },  // D5
        { t: 15.0, div: 'great', midi: 78, dur: 0.15, vel: 0.93 },  // F#5
        { t: 15.0, div: 'great', midi: 81, dur: 0.15, vel: 0.93 },  // A5
        { t: 15.25, div: 'great', midi: 74, dur: 0.15, vel: 0.93 }, // D5
        { t: 15.25, div: 'great', midi: 78, dur: 0.15, vel: 0.92 }, // F#5
        { t: 15.25, div: 'great', midi: 81, dur: 0.15, vel: 0.92 }, // A5
        { t: 15.5, div: 'great', midi: 74, dur: 0.15, vel: 0.95 },  // D5
        { t: 15.5, div: 'great', midi: 78, dur: 0.15, vel: 0.93 },  // F#5
        { t: 15.5, div: 'great', midi: 81, dur: 0.15, vel: 0.93 },  // A5
        { t: 15.75, div: 'great', midi: 74, dur: 0.15, vel: 0.93 }, // D5
        { t: 15.75, div: 'great', midi: 78, dur: 0.15, vel: 0.92 }, // F#5
        { t: 15.75, div: 'great', midi: 81, dur: 0.15, vel: 0.92 }, // A5
        { t: 15.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.95 },   // D2

        // Bar 13-14: All divisions ring — choir joins
        { t: 16.0, div: 'great', midi: 74, dur: 0.15, vel: 0.95 },  // D5
        { t: 16.0, div: 'great', midi: 78, dur: 0.15, vel: 0.93 },  // F#5
        { t: 16.0, div: 'great', midi: 81, dur: 0.15, vel: 0.93 },  // A5
        { t: 16.0, div: 'great', midi: 86, dur: 0.15, vel: 0.95 },  // D6
        { t: 16.0, div: 'choir', midi: 62, dur: 0.15, vel: 0.82 },  // D4
        { t: 16.0, div: 'choir', midi: 66, dur: 0.15, vel: 0.80 },  // F#4
        { t: 16.0, div: 'choir', midi: 69, dur: 0.15, vel: 0.80 },  // A4
        { t: 16.25, div: 'great', midi: 74, dur: 0.15, vel: 0.93 }, // D5
        { t: 16.25, div: 'great', midi: 78, dur: 0.15, vel: 0.92 }, // F#5
        { t: 16.25, div: 'great', midi: 86, dur: 0.15, vel: 0.93 }, // D6
        { t: 16.25, div: 'choir', midi: 62, dur: 0.15, vel: 0.80 }, // D4
        { t: 16.25, div: 'choir', midi: 66, dur: 0.15, vel: 0.78 }, // F#4
        { t: 16.5, div: 'great', midi: 74, dur: 0.15, vel: 0.95 },  // D5
        { t: 16.5, div: 'great', midi: 78, dur: 0.15, vel: 0.93 },  // F#5
        { t: 16.5, div: 'great', midi: 81, dur: 0.15, vel: 0.93 },  // A5
        { t: 16.5, div: 'great', midi: 86, dur: 0.15, vel: 0.95 },  // D6
        { t: 16.5, div: 'choir', midi: 62, dur: 0.15, vel: 0.82 },  // D4
        { t: 16.5, div: 'choir', midi: 66, dur: 0.15, vel: 0.80 },  // F#4
        { t: 16.5, div: 'choir', midi: 69, dur: 0.15, vel: 0.80 },  // A4
        { t: 16.75, div: 'great', midi: 74, dur: 0.15, vel: 0.93 }, // D5
        { t: 16.75, div: 'great', midi: 78, dur: 0.15, vel: 0.92 }, // F#5
        { t: 16.75, div: 'great', midi: 86, dur: 0.15, vel: 0.93 }, // D6
        { t: 16.75, div: 'choir', midi: 62, dur: 0.15, vel: 0.80 }, // D4
        { t: 16.75, div: 'choir', midi: 66, dur: 0.15, vel: 0.78 }, // F#4
        { t: 16.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.95 },   // D2

        // ======== Thrilling ending (bars 15-18): Full organ fff ========
        // Bar 15-16: Maximum volume bell peals
        { t: 17.0, div: 'great', midi: 74, dur: 0.15, vel: 0.97 },  // D5
        { t: 17.0, div: 'great', midi: 78, dur: 0.15, vel: 0.95 },  // F#5
        { t: 17.0, div: 'great', midi: 81, dur: 0.15, vel: 0.95 },  // A5
        { t: 17.0, div: 'great', midi: 86, dur: 0.15, vel: 0.97 },  // D6
        { t: 17.25, div: 'great', midi: 74, dur: 0.15, vel: 0.95 }, // D5
        { t: 17.25, div: 'great', midi: 78, dur: 0.15, vel: 0.93 }, // F#5
        { t: 17.25, div: 'great', midi: 81, dur: 0.15, vel: 0.93 }, // A5
        { t: 17.25, div: 'great', midi: 86, dur: 0.15, vel: 0.95 }, // D6
        { t: 17.5, div: 'great', midi: 74, dur: 0.15, vel: 0.97 },  // D5
        { t: 17.5, div: 'great', midi: 78, dur: 0.15, vel: 0.95 },  // F#5
        { t: 17.5, div: 'great', midi: 81, dur: 0.15, vel: 0.95 },  // A5
        { t: 17.5, div: 'great', midi: 86, dur: 0.15, vel: 0.97 },  // D6
        { t: 17.75, div: 'great', midi: 74, dur: 0.15, vel: 0.95 }, // D5
        { t: 17.75, div: 'great', midi: 78, dur: 0.15, vel: 0.93 }, // F#5
        { t: 17.75, div: 'great', midi: 81, dur: 0.15, vel: 0.93 }, // A5
        { t: 17.75, div: 'great', midi: 86, dur: 0.15, vel: 0.95 }, // D6
        { t: 17.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.97 },   // D2

        // All divisions ringing together
        { t: 18.0, div: 'swell', midi: 74, dur: 0.15, vel: 0.88 },  // D5
        { t: 18.0, div: 'swell', midi: 78, dur: 0.15, vel: 0.86 },  // F#5
        { t: 18.0, div: 'swell', midi: 81, dur: 0.15, vel: 0.86 },  // A5
        { t: 18.0, div: 'choir', midi: 62, dur: 0.15, vel: 0.82 },  // D4
        { t: 18.0, div: 'choir', midi: 66, dur: 0.15, vel: 0.80 },  // F#4
        { t: 18.0, div: 'choir', midi: 69, dur: 0.15, vel: 0.80 },  // A4
        { t: 18.25, div: 'great', midi: 74, dur: 0.15, vel: 0.97 }, // D5
        { t: 18.25, div: 'great', midi: 78, dur: 0.15, vel: 0.95 }, // F#5
        { t: 18.25, div: 'great', midi: 86, dur: 0.15, vel: 0.97 }, // D6
        { t: 18.5, div: 'swell', midi: 74, dur: 0.15, vel: 0.88 },  // D5
        { t: 18.5, div: 'swell', midi: 78, dur: 0.15, vel: 0.86 },  // F#5
        { t: 18.5, div: 'choir', midi: 62, dur: 0.15, vel: 0.82 },  // D4
        { t: 18.5, div: 'choir', midi: 66, dur: 0.15, vel: 0.80 },  // F#4
        { t: 18.75, div: 'great', midi: 74, dur: 0.15, vel: 0.97 }, // D5
        { t: 18.75, div: 'great', midi: 78, dur: 0.15, vel: 0.95 }, // F#5
        { t: 18.75, div: 'great', midi: 86, dur: 0.15, vel: 0.97 }, // D6

        // Bar 17-18: Final massive D major chords — full organ
        { t: 19.0, div: 'great', midi: 62, dur: 2.0, vel: 0.98 },   // D4
        { t: 19.0, div: 'great', midi: 66, dur: 2.0, vel: 0.95 },   // F#4
        { t: 19.0, div: 'great', midi: 69, dur: 2.0, vel: 0.95 },   // A4
        { t: 19.0, div: 'great', midi: 74, dur: 2.0, vel: 0.98 },   // D5
        { t: 19.0, div: 'great', midi: 78, dur: 2.0, vel: 0.95 },   // F#5
        { t: 19.0, div: 'great', midi: 81, dur: 2.0, vel: 0.95 },   // A5
        { t: 19.0, div: 'great', midi: 86, dur: 2.0, vel: 0.98 },   // D6
        { t: 19.0, div: 'swell', midi: 62, dur: 2.0, vel: 0.88 },   // D4
        { t: 19.0, div: 'swell', midi: 66, dur: 2.0, vel: 0.85 },   // F#4
        { t: 19.0, div: 'swell', midi: 69, dur: 2.0, vel: 0.85 },   // A4
        { t: 19.0, div: 'choir', midi: 50, dur: 2.0, vel: 0.82 },   // D3
        { t: 19.0, div: 'choir', midi: 54, dur: 2.0, vel: 0.80 },   // F#3
        { t: 19.0, div: 'choir', midi: 57, dur: 2.0, vel: 0.80 },   // A3
        { t: 19.0, div: 'pedal', midi: 38, dur: 2.0, vel: 0.98 },   // D2
    ]
};