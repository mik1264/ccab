// ============================================================
// Romantic-Era Organ Works Collection
// ============================================================
// Four major Romantic organ works encoded for Cathedral Grand organ simulator
// MIDI reference: C4=60, D4=62, Eb4=63, E4=64, F4=65, G4=67, A4=69, Bb4=70, B4=71, C5=72
// ============================================================

// ============================================================
// 1. Widor - Toccata from Symphony No. 5 in F major, Op. 42
// ============================================================
// The most famous organ toccata ever written. Perpetual-motion
// 16th-note arpeggios in the right hand over syncopated chords
// in the left hand, with pedal bass reinforcement.
// Time sig: alla breve. RH plays staccato arpeggios in groups of 8.
// Structure: F major opening, modulating through circle of fifths,
// then return to F major for the grand conclusion.
// ============================================================

const PIECE_WIDOR_TOCCATA = {
    title: "Toccata from Symphony No. 5",
    composer: "Charles-Marie Widor",
    catalog: "Op. 42 No. 5",
    key: "F major",
    tempo: 132,
    tempoChanges: [
        { t: 0, tempo: 132, label: "Allegro" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8'],
        swell: ['sw-principal4', 'sw-flute4'],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ===== MEASURE 1: F major - perpetual motion begins =====
        // RH: 16th-note arpeggios on F major (F-A-C), LH: syncopated chords, Pedal: F

        // Pedal F2 held through measure 1
        { t: 0, div: 'pedal', midi: 41, dur: 4.0, vel: 0.85 },

        // RH beat 1: F4-A4-C5-F5  (ascending F major arpeggio)
        { t: 0,     div: 'great', midi: 65, dur: 0.12, vel: 0.88 },  // F4
        { t: 0.25,  div: 'great', midi: 69, dur: 0.12, vel: 0.85 },  // A4
        { t: 0.5,   div: 'great', midi: 72, dur: 0.12, vel: 0.88 },  // C5
        { t: 0.75,  div: 'great', midi: 77, dur: 0.12, vel: 0.90 },  // F5
        // RH beat 2: C5-A4-C5-F5  (descending turn)
        { t: 1.0,   div: 'great', midi: 72, dur: 0.12, vel: 0.87 },  // C5
        { t: 1.25,  div: 'great', midi: 69, dur: 0.12, vel: 0.85 },  // A4
        { t: 1.5,   div: 'great', midi: 72, dur: 0.12, vel: 0.88 },  // C5
        { t: 1.75,  div: 'great', midi: 77, dur: 0.12, vel: 0.90 },  // F5
        // RH beat 3: C5-A4-F4-A4
        { t: 2.0,   div: 'great', midi: 72, dur: 0.12, vel: 0.87 },  // C5
        { t: 2.25,  div: 'great', midi: 69, dur: 0.12, vel: 0.85 },  // A4
        { t: 2.5,   div: 'great', midi: 65, dur: 0.12, vel: 0.83 },  // F4
        { t: 2.75,  div: 'great', midi: 69, dur: 0.12, vel: 0.85 },  // A4
        // RH beat 4: C5-F5-C5-A4
        { t: 3.0,   div: 'great', midi: 72, dur: 0.12, vel: 0.88 },  // C5
        { t: 3.25,  div: 'great', midi: 77, dur: 0.12, vel: 0.90 },  // F5
        { t: 3.5,   div: 'great', midi: 72, dur: 0.12, vel: 0.87 },  // C5
        { t: 3.75,  div: 'great', midi: 69, dur: 0.12, vel: 0.85 },  // A4

        // LH syncopated chords (Swell) m.1: F3-A3-C4 on offbeats
        { t: 0.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3
        { t: 0.5,  div: 'swell', midi: 57, dur: 0.4, vel: 0.72 },  // A3
        { t: 0.5,  div: 'swell', midi: 60, dur: 0.4, vel: 0.72 },  // C4
        { t: 1.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3
        { t: 1.5,  div: 'swell', midi: 57, dur: 0.4, vel: 0.72 },  // A3
        { t: 1.5,  div: 'swell', midi: 60, dur: 0.4, vel: 0.72 },  // C4
        { t: 2.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3
        { t: 2.5,  div: 'swell', midi: 57, dur: 0.4, vel: 0.72 },  // A3
        { t: 2.5,  div: 'swell', midi: 60, dur: 0.4, vel: 0.72 },  // C4
        { t: 3.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3
        { t: 3.5,  div: 'swell', midi: 57, dur: 0.4, vel: 0.72 },  // A3
        { t: 3.5,  div: 'swell', midi: 60, dur: 0.4, vel: 0.72 },  // C4

        // ===== MEASURE 2: Still F major, same pattern one octave shift =====
        { t: 4, div: 'pedal', midi: 41, dur: 4.0, vel: 0.85 },     // F2

        // RH beat 1: A4-C5-F5-A5
        { t: 4.0,   div: 'great', midi: 69, dur: 0.12, vel: 0.88 },  // A4
        { t: 4.25,  div: 'great', midi: 72, dur: 0.12, vel: 0.90 },  // C5
        { t: 4.5,   div: 'great', midi: 77, dur: 0.12, vel: 0.92 },  // F5
        { t: 4.75,  div: 'great', midi: 81, dur: 0.12, vel: 0.93 },  // A5
        // RH beat 2: F5-C5-F5-A5
        { t: 5.0,   div: 'great', midi: 77, dur: 0.12, vel: 0.90 },  // F5
        { t: 5.25,  div: 'great', midi: 72, dur: 0.12, vel: 0.88 },  // C5
        { t: 5.5,   div: 'great', midi: 77, dur: 0.12, vel: 0.90 },  // F5
        { t: 5.75,  div: 'great', midi: 81, dur: 0.12, vel: 0.93 },  // A5
        // RH beat 3: F5-C5-A4-C5
        { t: 6.0,   div: 'great', midi: 77, dur: 0.12, vel: 0.90 },  // F5
        { t: 6.25,  div: 'great', midi: 72, dur: 0.12, vel: 0.88 },  // C5
        { t: 6.5,   div: 'great', midi: 69, dur: 0.12, vel: 0.85 },  // A4
        { t: 6.75,  div: 'great', midi: 72, dur: 0.12, vel: 0.88 },  // C5
        // RH beat 4: F5-A5-F5-C5
        { t: 7.0,   div: 'great', midi: 77, dur: 0.12, vel: 0.90 },  // F5
        { t: 7.25,  div: 'great', midi: 81, dur: 0.12, vel: 0.93 },  // A5
        { t: 7.5,   div: 'great', midi: 77, dur: 0.12, vel: 0.90 },  // F5
        { t: 7.75,  div: 'great', midi: 72, dur: 0.12, vel: 0.88 },  // C5

        // LH chords m.2: same F major
        { t: 4.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3
        { t: 4.5,  div: 'swell', midi: 57, dur: 0.4, vel: 0.72 },  // A3
        { t: 4.5,  div: 'swell', midi: 60, dur: 0.4, vel: 0.72 },  // C4
        { t: 5.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3
        { t: 5.5,  div: 'swell', midi: 57, dur: 0.4, vel: 0.72 },  // A3
        { t: 5.5,  div: 'swell', midi: 60, dur: 0.4, vel: 0.72 },  // C4
        { t: 6.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3
        { t: 6.5,  div: 'swell', midi: 57, dur: 0.4, vel: 0.72 },  // A3
        { t: 6.5,  div: 'swell', midi: 60, dur: 0.4, vel: 0.72 },  // C4
        { t: 7.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3
        { t: 7.5,  div: 'swell', midi: 57, dur: 0.4, vel: 0.72 },  // A3
        { t: 7.5,  div: 'swell', midi: 60, dur: 0.4, vel: 0.72 },  // C4

        // ===== MEASURE 3: C major (dominant) =====
        { t: 8, div: 'pedal', midi: 48, dur: 4.0, vel: 0.85 },     // C3

        // RH beat 1: E4-G4-C5-E5
        { t: 8.0,   div: 'great', midi: 64, dur: 0.12, vel: 0.88 },  // E4
        { t: 8.25,  div: 'great', midi: 67, dur: 0.12, vel: 0.85 },  // G4
        { t: 8.5,   div: 'great', midi: 72, dur: 0.12, vel: 0.88 },  // C5
        { t: 8.75,  div: 'great', midi: 76, dur: 0.12, vel: 0.90 },  // E5
        // RH beat 2: C5-G4-C5-E5
        { t: 9.0,   div: 'great', midi: 72, dur: 0.12, vel: 0.87 },  // C5
        { t: 9.25,  div: 'great', midi: 67, dur: 0.12, vel: 0.85 },  // G4
        { t: 9.5,   div: 'great', midi: 72, dur: 0.12, vel: 0.88 },  // C5
        { t: 9.75,  div: 'great', midi: 76, dur: 0.12, vel: 0.90 },  // E5
        // RH beat 3: C5-G4-E4-G4
        { t: 10.0,  div: 'great', midi: 72, dur: 0.12, vel: 0.87 },  // C5
        { t: 10.25, div: 'great', midi: 67, dur: 0.12, vel: 0.85 },  // G4
        { t: 10.5,  div: 'great', midi: 64, dur: 0.12, vel: 0.83 },  // E4
        { t: 10.75, div: 'great', midi: 67, dur: 0.12, vel: 0.85 },  // G4
        // RH beat 4: C5-E5-C5-G4
        { t: 11.0,  div: 'great', midi: 72, dur: 0.12, vel: 0.88 },  // C5
        { t: 11.25, div: 'great', midi: 76, dur: 0.12, vel: 0.90 },  // E5
        { t: 11.5,  div: 'great', midi: 72, dur: 0.12, vel: 0.87 },  // C5
        { t: 11.75, div: 'great', midi: 67, dur: 0.12, vel: 0.85 },  // G4

        // LH chords m.3: C-E-G
        { t: 8.5,   div: 'swell', midi: 48, dur: 0.4, vel: 0.72 },  // C3
        { t: 8.5,   div: 'swell', midi: 52, dur: 0.4, vel: 0.72 },  // E3
        { t: 8.5,   div: 'swell', midi: 55, dur: 0.4, vel: 0.72 },  // G3
        { t: 9.5,   div: 'swell', midi: 48, dur: 0.4, vel: 0.72 },  // C3
        { t: 9.5,   div: 'swell', midi: 52, dur: 0.4, vel: 0.72 },  // E3
        { t: 9.5,   div: 'swell', midi: 55, dur: 0.4, vel: 0.72 },  // G3
        { t: 10.5,  div: 'swell', midi: 48, dur: 0.4, vel: 0.72 },  // C3
        { t: 10.5,  div: 'swell', midi: 52, dur: 0.4, vel: 0.72 },  // E3
        { t: 10.5,  div: 'swell', midi: 55, dur: 0.4, vel: 0.72 },  // G3
        { t: 11.5,  div: 'swell', midi: 48, dur: 0.4, vel: 0.72 },  // C3
        { t: 11.5,  div: 'swell', midi: 52, dur: 0.4, vel: 0.72 },  // E3
        { t: 11.5,  div: 'swell', midi: 55, dur: 0.4, vel: 0.72 },  // G3

        // ===== MEASURE 4: Bb major (IV) =====
        { t: 12, div: 'pedal', midi: 46, dur: 4.0, vel: 0.85 },    // Bb2

        // RH beat 1: D4-F4-Bb4-D5
        { t: 12.0,  div: 'great', midi: 62, dur: 0.12, vel: 0.88 },  // D4
        { t: 12.25, div: 'great', midi: 65, dur: 0.12, vel: 0.85 },  // F4
        { t: 12.5,  div: 'great', midi: 70, dur: 0.12, vel: 0.88 },  // Bb4
        { t: 12.75, div: 'great', midi: 74, dur: 0.12, vel: 0.90 },  // D5
        // RH beat 2: Bb4-F4-Bb4-D5
        { t: 13.0,  div: 'great', midi: 70, dur: 0.12, vel: 0.87 },  // Bb4
        { t: 13.25, div: 'great', midi: 65, dur: 0.12, vel: 0.85 },  // F4
        { t: 13.5,  div: 'great', midi: 70, dur: 0.12, vel: 0.88 },  // Bb4
        { t: 13.75, div: 'great', midi: 74, dur: 0.12, vel: 0.90 },  // D5
        // RH beat 3: Bb4-F4-D4-F4
        { t: 14.0,  div: 'great', midi: 70, dur: 0.12, vel: 0.87 },  // Bb4
        { t: 14.25, div: 'great', midi: 65, dur: 0.12, vel: 0.85 },  // F4
        { t: 14.5,  div: 'great', midi: 62, dur: 0.12, vel: 0.83 },  // D4
        { t: 14.75, div: 'great', midi: 65, dur: 0.12, vel: 0.85 },  // F4
        // RH beat 4: Bb4-D5-Bb4-F4
        { t: 15.0,  div: 'great', midi: 70, dur: 0.12, vel: 0.88 },  // Bb4
        { t: 15.25, div: 'great', midi: 74, dur: 0.12, vel: 0.90 },  // D5
        { t: 15.5,  div: 'great', midi: 70, dur: 0.12, vel: 0.87 },  // Bb4
        { t: 15.75, div: 'great', midi: 65, dur: 0.12, vel: 0.85 },  // F4

        // LH chords m.4: Bb-D-F
        { t: 12.5,  div: 'swell', midi: 46, dur: 0.4, vel: 0.72 },  // Bb2
        { t: 12.5,  div: 'swell', midi: 50, dur: 0.4, vel: 0.72 },  // D3
        { t: 12.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3
        { t: 13.5,  div: 'swell', midi: 46, dur: 0.4, vel: 0.72 },  // Bb2
        { t: 13.5,  div: 'swell', midi: 50, dur: 0.4, vel: 0.72 },  // D3
        { t: 13.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3
        { t: 14.5,  div: 'swell', midi: 46, dur: 0.4, vel: 0.72 },  // Bb2
        { t: 14.5,  div: 'swell', midi: 50, dur: 0.4, vel: 0.72 },  // D3
        { t: 14.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3
        { t: 15.5,  div: 'swell', midi: 46, dur: 0.4, vel: 0.72 },  // Bb2
        { t: 15.5,  div: 'swell', midi: 50, dur: 0.4, vel: 0.72 },  // D3
        { t: 15.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3

        // ===== MEASURE 5: C7 (V7 of F) =====
        { t: 16, div: 'pedal', midi: 48, dur: 4.0, vel: 0.85 },    // C3

        // RH beat 1: E4-G4-Bb4-C5  (C dominant 7th)
        { t: 16.0,  div: 'great', midi: 64, dur: 0.12, vel: 0.88 },  // E4
        { t: 16.25, div: 'great', midi: 67, dur: 0.12, vel: 0.85 },  // G4
        { t: 16.5,  div: 'great', midi: 70, dur: 0.12, vel: 0.88 },  // Bb4
        { t: 16.75, div: 'great', midi: 72, dur: 0.12, vel: 0.90 },  // C5
        // RH beat 2: Bb4-G4-Bb4-C5
        { t: 17.0,  div: 'great', midi: 70, dur: 0.12, vel: 0.87 },  // Bb4
        { t: 17.25, div: 'great', midi: 67, dur: 0.12, vel: 0.85 },  // G4
        { t: 17.5,  div: 'great', midi: 70, dur: 0.12, vel: 0.88 },  // Bb4
        { t: 17.75, div: 'great', midi: 72, dur: 0.12, vel: 0.90 },  // C5
        // RH beat 3: Bb4-G4-E4-G4
        { t: 18.0,  div: 'great', midi: 70, dur: 0.12, vel: 0.87 },  // Bb4
        { t: 18.25, div: 'great', midi: 67, dur: 0.12, vel: 0.85 },  // G4
        { t: 18.5,  div: 'great', midi: 64, dur: 0.12, vel: 0.83 },  // E4
        { t: 18.75, div: 'great', midi: 67, dur: 0.12, vel: 0.85 },  // G4
        // RH beat 4: Bb4-C5-Bb4-G4
        { t: 19.0,  div: 'great', midi: 70, dur: 0.12, vel: 0.88 },  // Bb4
        { t: 19.25, div: 'great', midi: 72, dur: 0.12, vel: 0.90 },  // C5
        { t: 19.5,  div: 'great', midi: 70, dur: 0.12, vel: 0.87 },  // Bb4
        { t: 19.75, div: 'great', midi: 67, dur: 0.12, vel: 0.85 },  // G4

        // LH chords m.5: C-E-G-Bb
        { t: 16.5,  div: 'swell', midi: 48, dur: 0.4, vel: 0.72 },  // C3
        { t: 16.5,  div: 'swell', midi: 52, dur: 0.4, vel: 0.72 },  // E3
        { t: 16.5,  div: 'swell', midi: 58, dur: 0.4, vel: 0.72 },  // Bb3
        { t: 17.5,  div: 'swell', midi: 48, dur: 0.4, vel: 0.72 },  // C3
        { t: 17.5,  div: 'swell', midi: 52, dur: 0.4, vel: 0.72 },  // E3
        { t: 17.5,  div: 'swell', midi: 58, dur: 0.4, vel: 0.72 },  // Bb3
        { t: 18.5,  div: 'swell', midi: 48, dur: 0.4, vel: 0.72 },  // C3
        { t: 18.5,  div: 'swell', midi: 52, dur: 0.4, vel: 0.72 },  // E3
        { t: 18.5,  div: 'swell', midi: 58, dur: 0.4, vel: 0.72 },  // Bb3
        { t: 19.5,  div: 'swell', midi: 48, dur: 0.4, vel: 0.72 },  // C3
        { t: 19.5,  div: 'swell', midi: 52, dur: 0.4, vel: 0.72 },  // E3
        { t: 19.5,  div: 'swell', midi: 58, dur: 0.4, vel: 0.72 },  // Bb3

        // ===== MEASURE 6: D minor (vi) =====
        { t: 20, div: 'pedal', midi: 50, dur: 4.0, vel: 0.85 },    // D3

        // RH beat 1: D4-F4-A4-D5
        { t: 20.0,  div: 'great', midi: 62, dur: 0.12, vel: 0.88 },  // D4
        { t: 20.25, div: 'great', midi: 65, dur: 0.12, vel: 0.85 },  // F4
        { t: 20.5,  div: 'great', midi: 69, dur: 0.12, vel: 0.88 },  // A4
        { t: 20.75, div: 'great', midi: 74, dur: 0.12, vel: 0.90 },  // D5
        // RH beat 2: A4-F4-A4-D5
        { t: 21.0,  div: 'great', midi: 69, dur: 0.12, vel: 0.87 },  // A4
        { t: 21.25, div: 'great', midi: 65, dur: 0.12, vel: 0.85 },  // F4
        { t: 21.5,  div: 'great', midi: 69, dur: 0.12, vel: 0.88 },  // A4
        { t: 21.75, div: 'great', midi: 74, dur: 0.12, vel: 0.90 },  // D5
        // RH beat 3: A4-F4-D4-F4
        { t: 22.0,  div: 'great', midi: 69, dur: 0.12, vel: 0.87 },  // A4
        { t: 22.25, div: 'great', midi: 65, dur: 0.12, vel: 0.85 },  // F4
        { t: 22.5,  div: 'great', midi: 62, dur: 0.12, vel: 0.83 },  // D4
        { t: 22.75, div: 'great', midi: 65, dur: 0.12, vel: 0.85 },  // F4
        // RH beat 4: A4-D5-A4-F4
        { t: 23.0,  div: 'great', midi: 69, dur: 0.12, vel: 0.88 },  // A4
        { t: 23.25, div: 'great', midi: 74, dur: 0.12, vel: 0.90 },  // D5
        { t: 23.5,  div: 'great', midi: 69, dur: 0.12, vel: 0.87 },  // A4
        { t: 23.75, div: 'great', midi: 65, dur: 0.12, vel: 0.85 },  // F4

        // LH chords m.6: D-F-A
        { t: 20.5,  div: 'swell', midi: 50, dur: 0.4, vel: 0.72 },  // D3
        { t: 20.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3
        { t: 20.5,  div: 'swell', midi: 57, dur: 0.4, vel: 0.72 },  // A3
        { t: 21.5,  div: 'swell', midi: 50, dur: 0.4, vel: 0.72 },  // D3
        { t: 21.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3
        { t: 21.5,  div: 'swell', midi: 57, dur: 0.4, vel: 0.72 },  // A3
        { t: 22.5,  div: 'swell', midi: 50, dur: 0.4, vel: 0.72 },  // D3
        { t: 22.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3
        { t: 22.5,  div: 'swell', midi: 57, dur: 0.4, vel: 0.72 },  // A3
        { t: 23.5,  div: 'swell', midi: 50, dur: 0.4, vel: 0.72 },  // D3
        { t: 23.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.72 },  // F3
        { t: 23.5,  div: 'swell', midi: 57, dur: 0.4, vel: 0.72 },  // A3

        // ===== MEASURE 7: G minor (ii) =====
        { t: 24, div: 'pedal', midi: 43, dur: 4.0, vel: 0.85 },    // G2

        // RH Gm arpeggios: G4-Bb4-D5-G5 pattern
        { t: 24.0,  div: 'great', midi: 67, dur: 0.12, vel: 0.88 },  // G4
        { t: 24.25, div: 'great', midi: 70, dur: 0.12, vel: 0.85 },  // Bb4
        { t: 24.5,  div: 'great', midi: 74, dur: 0.12, vel: 0.88 },  // D5
        { t: 24.75, div: 'great', midi: 79, dur: 0.12, vel: 0.90 },  // G5
        { t: 25.0,  div: 'great', midi: 74, dur: 0.12, vel: 0.87 },  // D5
        { t: 25.25, div: 'great', midi: 70, dur: 0.12, vel: 0.85 },  // Bb4
        { t: 25.5,  div: 'great', midi: 74, dur: 0.12, vel: 0.88 },  // D5
        { t: 25.75, div: 'great', midi: 79, dur: 0.12, vel: 0.90 },  // G5
        { t: 26.0,  div: 'great', midi: 74, dur: 0.12, vel: 0.87 },  // D5
        { t: 26.25, div: 'great', midi: 70, dur: 0.12, vel: 0.85 },  // Bb4
        { t: 26.5,  div: 'great', midi: 67, dur: 0.12, vel: 0.83 },  // G4
        { t: 26.75, div: 'great', midi: 70, dur: 0.12, vel: 0.85 },  // Bb4
        { t: 27.0,  div: 'great', midi: 74, dur: 0.12, vel: 0.88 },  // D5
        { t: 27.25, div: 'great', midi: 79, dur: 0.12, vel: 0.90 },  // G5
        { t: 27.5,  div: 'great', midi: 74, dur: 0.12, vel: 0.87 },  // D5
        { t: 27.75, div: 'great', midi: 70, dur: 0.12, vel: 0.85 },  // Bb4

        // LH chords m.7: G-Bb-D
        { t: 24.5,  div: 'swell', midi: 55, dur: 0.4, vel: 0.72 },  // G3
        { t: 24.5,  div: 'swell', midi: 58, dur: 0.4, vel: 0.72 },  // Bb3
        { t: 24.5,  div: 'swell', midi: 62, dur: 0.4, vel: 0.72 },  // D4
        { t: 25.5,  div: 'swell', midi: 55, dur: 0.4, vel: 0.72 },  // G3
        { t: 25.5,  div: 'swell', midi: 58, dur: 0.4, vel: 0.72 },  // Bb3
        { t: 25.5,  div: 'swell', midi: 62, dur: 0.4, vel: 0.72 },  // D4
        { t: 26.5,  div: 'swell', midi: 55, dur: 0.4, vel: 0.72 },  // G3
        { t: 26.5,  div: 'swell', midi: 58, dur: 0.4, vel: 0.72 },  // Bb3
        { t: 26.5,  div: 'swell', midi: 62, dur: 0.4, vel: 0.72 },  // D4
        { t: 27.5,  div: 'swell', midi: 55, dur: 0.4, vel: 0.72 },  // G3
        { t: 27.5,  div: 'swell', midi: 58, dur: 0.4, vel: 0.72 },  // Bb3
        { t: 27.5,  div: 'swell', midi: 62, dur: 0.4, vel: 0.72 },  // D4

        // ===== MEASURE 8: C major (V) cadential =====
        { t: 28, div: 'pedal', midi: 48, dur: 2.0, vel: 0.88 },    // C3
        { t: 30, div: 'pedal', midi: 41, dur: 2.0, vel: 0.90 },    // F2 (resolution)

        // RH C major arpeggios then F major resolution
        { t: 28.0,  div: 'great', midi: 64, dur: 0.12, vel: 0.90 },  // E4
        { t: 28.25, div: 'great', midi: 67, dur: 0.12, vel: 0.88 },  // G4
        { t: 28.5,  div: 'great', midi: 72, dur: 0.12, vel: 0.90 },  // C5
        { t: 28.75, div: 'great', midi: 76, dur: 0.12, vel: 0.92 },  // E5
        { t: 29.0,  div: 'great', midi: 72, dur: 0.12, vel: 0.88 },  // C5
        { t: 29.25, div: 'great', midi: 67, dur: 0.12, vel: 0.85 },  // G4
        { t: 29.5,  div: 'great', midi: 72, dur: 0.12, vel: 0.90 },  // C5
        { t: 29.75, div: 'great', midi: 76, dur: 0.12, vel: 0.92 },  // E5

        // Resolution to F: F4-A4-C5-F5 etc.
        { t: 30.0,  div: 'great', midi: 65, dur: 0.12, vel: 0.92 },  // F4
        { t: 30.25, div: 'great', midi: 69, dur: 0.12, vel: 0.90 },  // A4
        { t: 30.5,  div: 'great', midi: 72, dur: 0.12, vel: 0.92 },  // C5
        { t: 30.75, div: 'great', midi: 77, dur: 0.12, vel: 0.93 },  // F5
        { t: 31.0,  div: 'great', midi: 72, dur: 0.12, vel: 0.90 },  // C5
        { t: 31.25, div: 'great', midi: 77, dur: 0.12, vel: 0.93 },  // F5
        { t: 31.5,  div: 'great', midi: 81, dur: 0.12, vel: 0.95 },  // A5
        { t: 31.75, div: 'great', midi: 77, dur: 0.12, vel: 0.93 },  // F5

        // LH chords m.8
        { t: 28.5,  div: 'swell', midi: 48, dur: 0.4, vel: 0.75 },  // C3
        { t: 28.5,  div: 'swell', midi: 52, dur: 0.4, vel: 0.75 },  // E3
        { t: 28.5,  div: 'swell', midi: 55, dur: 0.4, vel: 0.75 },  // G3
        { t: 29.5,  div: 'swell', midi: 48, dur: 0.4, vel: 0.75 },  // C3
        { t: 29.5,  div: 'swell', midi: 52, dur: 0.4, vel: 0.75 },  // E3
        { t: 29.5,  div: 'swell', midi: 55, dur: 0.4, vel: 0.75 },  // G3
        { t: 30.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.78 },  // F3
        { t: 30.5,  div: 'swell', midi: 57, dur: 0.4, vel: 0.78 },  // A3
        { t: 30.5,  div: 'swell', midi: 60, dur: 0.4, vel: 0.78 },  // C4
        { t: 31.5,  div: 'swell', midi: 53, dur: 0.4, vel: 0.78 },  // F3
        { t: 31.5,  div: 'swell', midi: 57, dur: 0.4, vel: 0.78 },  // A3
        { t: 31.5,  div: 'swell', midi: 60, dur: 0.4, vel: 0.78 },  // C4

        // ===== MEASURES 9-10: Grand fff conclusion - block chords =====
        // Fortississimo F major block chords to end

        { t: 32, div: 'pedal', midi: 41, dur: 1.0, vel: 0.95 },    // F2
        { t: 32, div: 'great', midi: 65, dur: 1.0, vel: 0.95 },    // F4
        { t: 32, div: 'great', midi: 69, dur: 1.0, vel: 0.95 },    // A4
        { t: 32, div: 'great', midi: 72, dur: 1.0, vel: 0.95 },    // C5
        { t: 32, div: 'great', midi: 77, dur: 1.0, vel: 0.95 },    // F5
        { t: 32, div: 'swell', midi: 53, dur: 1.0, vel: 0.90 },    // F3
        { t: 32, div: 'swell', midi: 57, dur: 1.0, vel: 0.90 },    // A3
        { t: 32, div: 'swell', midi: 60, dur: 1.0, vel: 0.90 },    // C4

        { t: 33, div: 'pedal', midi: 41, dur: 1.0, vel: 0.95 },    // F2
        { t: 33, div: 'great', midi: 65, dur: 1.0, vel: 0.95 },    // F4
        { t: 33, div: 'great', midi: 69, dur: 1.0, vel: 0.95 },    // A4
        { t: 33, div: 'great', midi: 72, dur: 1.0, vel: 0.95 },    // C5
        { t: 33, div: 'great', midi: 77, dur: 1.0, vel: 0.95 },    // F5
        { t: 33, div: 'swell', midi: 53, dur: 1.0, vel: 0.90 },    // F3
        { t: 33, div: 'swell', midi: 57, dur: 1.0, vel: 0.90 },    // A3
        { t: 33, div: 'swell', midi: 60, dur: 1.0, vel: 0.90 },    // C4

        // Final sustained chord
        { t: 34, div: 'pedal', midi: 41, dur: 2.0, vel: 0.98 },    // F2
        { t: 34, div: 'pedal', midi: 53, dur: 2.0, vel: 0.95 },    // F3
        { t: 34, div: 'great', midi: 65, dur: 2.0, vel: 0.98 },    // F4
        { t: 34, div: 'great', midi: 69, dur: 2.0, vel: 0.98 },    // A4
        { t: 34, div: 'great', midi: 72, dur: 2.0, vel: 0.98 },    // C5
        { t: 34, div: 'great', midi: 77, dur: 2.0, vel: 0.98 },    // F5
        { t: 34, div: 'great', midi: 81, dur: 2.0, vel: 0.98 },    // A5
        { t: 34, div: 'swell', midi: 53, dur: 2.0, vel: 0.95 },    // F3
        { t: 34, div: 'swell', midi: 57, dur: 2.0, vel: 0.95 },    // A3
        { t: 34, div: 'swell', midi: 60, dur: 2.0, vel: 0.95 },    // C4
    ]
};


// ============================================================
// 2. Elgar - Pomp and Circumstance March No. 1 (Trio Theme)
//    "Land of Hope and Glory"
// ============================================================
// The famous broad trio melody in D major. Played largamente.
// 4/4 time. The melody rises through two phrases, climaxes on B,
// then resolves back to D. The repeat (Grandioso) doubles at
// the octave with full organ.
// D major: D=62, E=64, F#=66, G=67, A=69, B=71, C#=73
// ============================================================

const PIECE_POMP_CIRCUMSTANCE = {
    title: "Pomp and Circumstance March No. 1 - Land of Hope and Glory",
    composer: "Edward Elgar",
    catalog: "Op. 39 No. 1",
    key: "D major",
    tempo: 72,
    tempoChanges: [
        { t: 0, tempo: 72, label: "Largamente" },
        { t: 64, tempo: 76, label: "Grandioso" }
    ],
    registration: {
        great: ['gt-principal16', 'gt-principal8', 'gt-bourdon8', 'gt-octave4', 'gt-trumpet8'],
        swell: ['sw-bourdon16', 'sw-gedeckt8', 'sw-salicional8', 'sw-voxceleste8', 'sw-oboe8'],
        choir: ['ch-gedeckt8', 'ch-dulciana8'],
        pedal: ['pd-principal16', 'pd-subbass16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ===== PHRASE 1 (mm. 1-4): D...D | E..F#. | G.... | F#...E =====

        // Bar 1: D4 dotted half + D4 quarter
        { t: 0, div: 'pedal', midi: 38, dur: 4.0, vel: 0.80 },     // D2
        { t: 0, div: 'great', midi: 62, dur: 3.0, vel: 0.75 },     // D4
        { t: 0, div: 'swell', midi: 50, dur: 4.0, vel: 0.60 },     // D3
        { t: 0, div: 'swell', midi: 54, dur: 4.0, vel: 0.58 },     // F#3
        { t: 0, div: 'swell', midi: 57, dur: 4.0, vel: 0.58 },     // A3
        { t: 3, div: 'great', midi: 62, dur: 1.0, vel: 0.73 },     // D4

        // Bar 2: E4 half + F#4 half
        { t: 4, div: 'pedal', midi: 45, dur: 4.0, vel: 0.80 },     // A2
        { t: 4, div: 'great', midi: 64, dur: 2.0, vel: 0.78 },     // E4
        { t: 4, div: 'swell', midi: 49, dur: 2.0, vel: 0.60 },     // C#3
        { t: 4, div: 'swell', midi: 52, dur: 2.0, vel: 0.58 },     // E3
        { t: 4, div: 'swell', midi: 57, dur: 2.0, vel: 0.58 },     // A3
        { t: 6, div: 'great', midi: 66, dur: 2.0, vel: 0.80 },     // F#4
        { t: 6, div: 'swell', midi: 50, dur: 2.0, vel: 0.60 },     // D3
        { t: 6, div: 'swell', midi: 54, dur: 2.0, vel: 0.58 },     // F#3
        { t: 6, div: 'swell', midi: 57, dur: 2.0, vel: 0.58 },     // A3

        // Bar 3: G4 whole
        { t: 8, div: 'pedal', midi: 47, dur: 4.0, vel: 0.80 },     // B2
        { t: 8, div: 'great', midi: 67, dur: 4.0, vel: 0.82 },     // G4
        { t: 8, div: 'swell', midi: 47, dur: 4.0, vel: 0.60 },     // B2
        { t: 8, div: 'swell', midi: 55, dur: 4.0, vel: 0.58 },     // G3
        { t: 8, div: 'swell', midi: 59, dur: 4.0, vel: 0.58 },     // B3

        // Bar 4: F#4 dotted half + E4 quarter
        { t: 12, div: 'pedal', midi: 50, dur: 4.0, vel: 0.80 },    // D3
        { t: 12, div: 'great', midi: 66, dur: 3.0, vel: 0.80 },    // F#4
        { t: 12, div: 'swell', midi: 50, dur: 4.0, vel: 0.60 },    // D3
        { t: 12, div: 'swell', midi: 54, dur: 4.0, vel: 0.58 },    // F#3
        { t: 12, div: 'swell', midi: 57, dur: 4.0, vel: 0.58 },    // A3
        { t: 15, div: 'great', midi: 64, dur: 1.0, vel: 0.78 },    // E4

        // ===== PHRASE 2 (mm. 5-8): D...D | E..F#. | A.... | A...G =====

        // Bar 5: D4 dotted half + D4 quarter
        { t: 16, div: 'pedal', midi: 38, dur: 4.0, vel: 0.82 },    // D2
        { t: 16, div: 'great', midi: 62, dur: 3.0, vel: 0.78 },    // D4
        { t: 16, div: 'swell', midi: 50, dur: 4.0, vel: 0.62 },    // D3
        { t: 16, div: 'swell', midi: 54, dur: 4.0, vel: 0.60 },    // F#3
        { t: 16, div: 'swell', midi: 57, dur: 4.0, vel: 0.60 },    // A3
        { t: 19, div: 'great', midi: 62, dur: 1.0, vel: 0.76 },    // D4

        // Bar 6: E4 half + F#4 half
        { t: 20, div: 'pedal', midi: 45, dur: 4.0, vel: 0.82 },    // A2
        { t: 20, div: 'great', midi: 64, dur: 2.0, vel: 0.80 },    // E4
        { t: 20, div: 'swell', midi: 49, dur: 2.0, vel: 0.62 },    // C#3
        { t: 20, div: 'swell', midi: 52, dur: 2.0, vel: 0.60 },    // E3
        { t: 20, div: 'swell', midi: 57, dur: 2.0, vel: 0.60 },    // A3
        { t: 22, div: 'great', midi: 66, dur: 2.0, vel: 0.82 },    // F#4
        { t: 22, div: 'swell', midi: 50, dur: 2.0, vel: 0.62 },    // D3
        { t: 22, div: 'swell', midi: 54, dur: 2.0, vel: 0.60 },    // F#3
        { t: 22, div: 'swell', midi: 57, dur: 2.0, vel: 0.60 },    // A3

        // Bar 7: A4 whole (the melody reaches higher)
        { t: 24, div: 'pedal', midi: 50, dur: 4.0, vel: 0.82 },    // D3
        { t: 24, div: 'great', midi: 69, dur: 4.0, vel: 0.85 },    // A4
        { t: 24, div: 'swell', midi: 50, dur: 4.0, vel: 0.62 },    // D3
        { t: 24, div: 'swell', midi: 54, dur: 4.0, vel: 0.60 },    // F#3
        { t: 24, div: 'swell', midi: 57, dur: 4.0, vel: 0.60 },    // A3

        // Bar 8: A4 dotted half + G4 quarter
        { t: 28, div: 'pedal', midi: 45, dur: 4.0, vel: 0.82 },    // A2
        { t: 28, div: 'great', midi: 69, dur: 3.0, vel: 0.83 },    // A4
        { t: 28, div: 'swell', midi: 49, dur: 4.0, vel: 0.62 },    // C#3
        { t: 28, div: 'swell', midi: 52, dur: 4.0, vel: 0.60 },    // E3
        { t: 28, div: 'swell', midi: 57, dur: 4.0, vel: 0.60 },    // A3
        { t: 31, div: 'great', midi: 67, dur: 1.0, vel: 0.80 },    // G4

        // ===== PHRASE 3 (mm. 9-12): F#...F# | G..A. | B.... | B...A =====

        // Bar 9: F#4 dotted half + F#4 quarter
        { t: 32, div: 'pedal', midi: 50, dur: 4.0, vel: 0.85 },    // D3
        { t: 32, div: 'great', midi: 66, dur: 3.0, vel: 0.82 },    // F#4
        { t: 32, div: 'swell', midi: 50, dur: 4.0, vel: 0.65 },    // D3
        { t: 32, div: 'swell', midi: 54, dur: 4.0, vel: 0.63 },    // F#3
        { t: 32, div: 'swell', midi: 57, dur: 4.0, vel: 0.63 },    // A3
        { t: 35, div: 'great', midi: 66, dur: 1.0, vel: 0.80 },    // F#4

        // Bar 10: G4 half + A4 half
        { t: 36, div: 'pedal', midi: 43, dur: 4.0, vel: 0.85 },    // G2
        { t: 36, div: 'great', midi: 67, dur: 2.0, vel: 0.85 },    // G4
        { t: 36, div: 'swell', midi: 47, dur: 4.0, vel: 0.65 },    // B2
        { t: 36, div: 'swell', midi: 55, dur: 4.0, vel: 0.63 },    // G3
        { t: 36, div: 'swell', midi: 59, dur: 4.0, vel: 0.63 },    // B3
        { t: 38, div: 'great', midi: 69, dur: 2.0, vel: 0.87 },    // A4

        // Bar 11: B4 whole - the climax!
        { t: 40, div: 'pedal', midi: 43, dur: 4.0, vel: 0.88 },    // G2
        { t: 40, div: 'great', midi: 71, dur: 4.0, vel: 0.90 },    // B4
        { t: 40, div: 'swell', midi: 47, dur: 4.0, vel: 0.68 },    // B2
        { t: 40, div: 'swell', midi: 50, dur: 4.0, vel: 0.65 },    // D3
        { t: 40, div: 'swell', midi: 55, dur: 4.0, vel: 0.65 },    // G3

        // Bar 12: B4 dotted half + A4 quarter
        { t: 44, div: 'pedal', midi: 42, dur: 4.0, vel: 0.88 },    // F#2
        { t: 44, div: 'great', midi: 71, dur: 3.0, vel: 0.88 },    // B4
        { t: 44, div: 'swell', midi: 42, dur: 4.0, vel: 0.68 },    // F#2
        { t: 44, div: 'swell', midi: 49, dur: 4.0, vel: 0.65 },    // C#3
        { t: 44, div: 'swell', midi: 54, dur: 4.0, vel: 0.65 },    // F#3
        { t: 47, div: 'great', midi: 69, dur: 1.0, vel: 0.85 },    // A4

        // ===== PHRASE 4 (mm. 13-16): G...G | F#..E. | D.... | D.... =====

        // Bar 13: G4 dotted half + G4 quarter
        { t: 48, div: 'pedal', midi: 43, dur: 4.0, vel: 0.88 },    // G2
        { t: 48, div: 'great', midi: 67, dur: 3.0, vel: 0.87 },    // G4
        { t: 48, div: 'swell', midi: 47, dur: 4.0, vel: 0.68 },    // B2
        { t: 48, div: 'swell', midi: 55, dur: 4.0, vel: 0.65 },    // G3
        { t: 48, div: 'swell', midi: 59, dur: 4.0, vel: 0.65 },    // B3
        { t: 51, div: 'great', midi: 67, dur: 1.0, vel: 0.85 },    // G4

        // Bar 14: F#4 half + E4 half
        { t: 52, div: 'pedal', midi: 45, dur: 4.0, vel: 0.88 },    // A2
        { t: 52, div: 'great', midi: 66, dur: 2.0, vel: 0.85 },    // F#4
        { t: 52, div: 'swell', midi: 49, dur: 2.0, vel: 0.68 },    // C#3
        { t: 52, div: 'swell', midi: 57, dur: 2.0, vel: 0.65 },    // A3
        { t: 54, div: 'great', midi: 64, dur: 2.0, vel: 0.83 },    // E4
        { t: 54, div: 'swell', midi: 45, dur: 2.0, vel: 0.68 },    // A2
        { t: 54, div: 'swell', midi: 52, dur: 2.0, vel: 0.65 },    // E3

        // Bar 15: D4 whole
        { t: 56, div: 'pedal', midi: 38, dur: 4.0, vel: 0.90 },    // D2
        { t: 56, div: 'great', midi: 62, dur: 4.0, vel: 0.82 },    // D4
        { t: 56, div: 'swell', midi: 50, dur: 4.0, vel: 0.70 },    // D3
        { t: 56, div: 'swell', midi: 54, dur: 4.0, vel: 0.68 },    // F#3
        { t: 56, div: 'swell', midi: 57, dur: 4.0, vel: 0.68 },    // A3

        // Bar 16: D4 whole (confirmation)
        { t: 60, div: 'pedal', midi: 38, dur: 4.0, vel: 0.88 },    // D2
        { t: 60, div: 'great', midi: 62, dur: 4.0, vel: 0.80 },    // D4
        { t: 60, div: 'swell', midi: 50, dur: 4.0, vel: 0.68 },    // D3
        { t: 60, div: 'swell', midi: 54, dur: 4.0, vel: 0.65 },    // F#3
        { t: 60, div: 'swell', midi: 57, dur: 4.0, vel: 0.65 },    // A3

        // ===== GRANDIOSO REPEAT: Full organ, melody doubled at the octave =====

        // Bar 17: D5+D4 dotted half + quarter
        { t: 64, div: 'pedal', midi: 38, dur: 4.0, vel: 0.90 },    // D2
        { t: 64, div: 'great', midi: 74, dur: 3.0, vel: 0.88 },    // D5
        { t: 64, div: 'great', midi: 62, dur: 3.0, vel: 0.82 },    // D4
        { t: 64, div: 'swell', midi: 50, dur: 4.0, vel: 0.75 },    // D3
        { t: 64, div: 'swell', midi: 54, dur: 4.0, vel: 0.72 },    // F#3
        { t: 64, div: 'swell', midi: 57, dur: 4.0, vel: 0.72 },    // A3
        { t: 64, div: 'choir', midi: 50, dur: 4.0, vel: 0.65 },    // D3
        { t: 67, div: 'great', midi: 74, dur: 1.0, vel: 0.86 },    // D5
        { t: 67, div: 'great', midi: 62, dur: 1.0, vel: 0.80 },    // D4

        // Bar 18: E5 half + F#5 half
        { t: 68, div: 'pedal', midi: 45, dur: 4.0, vel: 0.90 },    // A2
        { t: 68, div: 'great', midi: 76, dur: 2.0, vel: 0.90 },    // E5
        { t: 68, div: 'great', midi: 64, dur: 2.0, vel: 0.84 },    // E4
        { t: 68, div: 'swell', midi: 49, dur: 2.0, vel: 0.75 },    // C#3
        { t: 68, div: 'swell', midi: 52, dur: 2.0, vel: 0.72 },    // E3
        { t: 68, div: 'swell', midi: 57, dur: 2.0, vel: 0.72 },    // A3
        { t: 70, div: 'great', midi: 78, dur: 2.0, vel: 0.92 },    // F#5
        { t: 70, div: 'great', midi: 66, dur: 2.0, vel: 0.86 },    // F#4
        { t: 70, div: 'swell', midi: 50, dur: 2.0, vel: 0.75 },    // D3
        { t: 70, div: 'swell', midi: 54, dur: 2.0, vel: 0.72 },    // F#3

        // Bar 19: G5 whole
        { t: 72, div: 'pedal', midi: 47, dur: 4.0, vel: 0.90 },    // B2
        { t: 72, div: 'great', midi: 79, dur: 4.0, vel: 0.93 },    // G5
        { t: 72, div: 'great', midi: 67, dur: 4.0, vel: 0.87 },    // G4
        { t: 72, div: 'swell', midi: 47, dur: 4.0, vel: 0.75 },    // B2
        { t: 72, div: 'swell', midi: 55, dur: 4.0, vel: 0.72 },    // G3
        { t: 72, div: 'swell', midi: 59, dur: 4.0, vel: 0.72 },    // B3

        // Bar 20: F#5 dotted half + E5 quarter
        { t: 76, div: 'pedal', midi: 50, dur: 4.0, vel: 0.90 },    // D3
        { t: 76, div: 'great', midi: 78, dur: 3.0, vel: 0.92 },    // F#5
        { t: 76, div: 'great', midi: 66, dur: 3.0, vel: 0.86 },    // F#4
        { t: 76, div: 'swell', midi: 50, dur: 4.0, vel: 0.75 },    // D3
        { t: 76, div: 'swell', midi: 54, dur: 4.0, vel: 0.72 },    // F#3
        { t: 76, div: 'swell', midi: 57, dur: 4.0, vel: 0.72 },    // A3
        { t: 79, div: 'great', midi: 76, dur: 1.0, vel: 0.90 },    // E5
        { t: 79, div: 'great', midi: 64, dur: 1.0, vel: 0.84 },    // E4

        // Bar 21: D5 dotted half + D5 quarter
        { t: 80, div: 'pedal', midi: 38, dur: 4.0, vel: 0.92 },    // D2
        { t: 80, div: 'great', midi: 74, dur: 3.0, vel: 0.90 },    // D5
        { t: 80, div: 'great', midi: 62, dur: 3.0, vel: 0.84 },    // D4
        { t: 80, div: 'swell', midi: 50, dur: 4.0, vel: 0.78 },    // D3
        { t: 80, div: 'swell', midi: 54, dur: 4.0, vel: 0.75 },    // F#3
        { t: 80, div: 'swell', midi: 57, dur: 4.0, vel: 0.75 },    // A3
        { t: 83, div: 'great', midi: 74, dur: 1.0, vel: 0.88 },    // D5

        // Bar 22: E5 half + F#5 half
        { t: 84, div: 'pedal', midi: 45, dur: 4.0, vel: 0.92 },    // A2
        { t: 84, div: 'great', midi: 76, dur: 2.0, vel: 0.92 },    // E5
        { t: 84, div: 'great', midi: 64, dur: 2.0, vel: 0.86 },    // E4
        { t: 84, div: 'swell', midi: 49, dur: 2.0, vel: 0.78 },    // C#3
        { t: 84, div: 'swell', midi: 52, dur: 2.0, vel: 0.75 },    // E3
        { t: 86, div: 'great', midi: 78, dur: 2.0, vel: 0.93 },    // F#5
        { t: 86, div: 'great', midi: 66, dur: 2.0, vel: 0.87 },    // F#4
        { t: 86, div: 'swell', midi: 50, dur: 2.0, vel: 0.78 },    // D3
        { t: 86, div: 'swell', midi: 54, dur: 2.0, vel: 0.75 },    // F#3

        // Bar 23: A5 whole - the great climax
        { t: 88, div: 'pedal', midi: 50, dur: 4.0, vel: 0.95 },    // D3
        { t: 88, div: 'great', midi: 81, dur: 4.0, vel: 0.95 },    // A5
        { t: 88, div: 'great', midi: 69, dur: 4.0, vel: 0.90 },    // A4
        { t: 88, div: 'swell', midi: 50, dur: 4.0, vel: 0.80 },    // D3
        { t: 88, div: 'swell', midi: 54, dur: 4.0, vel: 0.78 },    // F#3
        { t: 88, div: 'swell', midi: 57, dur: 4.0, vel: 0.78 },    // A3

        // Bar 24: A5 dotted half + G5 quarter
        { t: 92, div: 'pedal', midi: 45, dur: 4.0, vel: 0.95 },    // A2
        { t: 92, div: 'great', midi: 81, dur: 3.0, vel: 0.93 },    // A5
        { t: 92, div: 'great', midi: 69, dur: 3.0, vel: 0.88 },    // A4
        { t: 92, div: 'swell', midi: 49, dur: 4.0, vel: 0.80 },    // C#3
        { t: 92, div: 'swell', midi: 52, dur: 4.0, vel: 0.78 },    // E3
        { t: 95, div: 'great', midi: 79, dur: 1.0, vel: 0.90 },    // G5
        { t: 95, div: 'great', midi: 67, dur: 1.0, vel: 0.85 },    // G4

        // Bar 25: F#5 dotted half + F#5 quarter
        { t: 96, div: 'pedal', midi: 50, dur: 4.0, vel: 0.95 },    // D3
        { t: 96, div: 'great', midi: 78, dur: 3.0, vel: 0.92 },    // F#5
        { t: 96, div: 'great', midi: 66, dur: 3.0, vel: 0.87 },    // F#4
        { t: 96, div: 'swell', midi: 50, dur: 4.0, vel: 0.80 },    // D3
        { t: 96, div: 'swell', midi: 54, dur: 4.0, vel: 0.78 },    // F#3
        { t: 96, div: 'swell', midi: 57, dur: 4.0, vel: 0.78 },    // A3
        { t: 99, div: 'great', midi: 78, dur: 1.0, vel: 0.90 },    // F#5

        // Bar 26: G5 half + A5 half
        { t: 100, div: 'pedal', midi: 43, dur: 4.0, vel: 0.95 },   // G2
        { t: 100, div: 'great', midi: 79, dur: 2.0, vel: 0.93 },   // G5
        { t: 100, div: 'great', midi: 67, dur: 2.0, vel: 0.88 },   // G4
        { t: 100, div: 'swell', midi: 47, dur: 4.0, vel: 0.80 },   // B2
        { t: 100, div: 'swell', midi: 55, dur: 4.0, vel: 0.78 },   // G3
        { t: 102, div: 'great', midi: 81, dur: 2.0, vel: 0.95 },   // A5
        { t: 102, div: 'great', midi: 69, dur: 2.0, vel: 0.90 },   // A4

        // Bar 27: B5 whole - towering climax
        { t: 104, div: 'pedal', midi: 43, dur: 4.0, vel: 0.98 },   // G2
        { t: 104, div: 'great', midi: 83, dur: 4.0, vel: 0.98 },   // B5
        { t: 104, div: 'great', midi: 71, dur: 4.0, vel: 0.92 },   // B4
        { t: 104, div: 'swell', midi: 47, dur: 4.0, vel: 0.82 },   // B2
        { t: 104, div: 'swell', midi: 50, dur: 4.0, vel: 0.80 },   // D3
        { t: 104, div: 'swell', midi: 55, dur: 4.0, vel: 0.80 },   // G3

        // Bar 28: B5 dotted half + A5 quarter
        { t: 108, div: 'pedal', midi: 42, dur: 4.0, vel: 0.98 },   // F#2
        { t: 108, div: 'great', midi: 83, dur: 3.0, vel: 0.97 },   // B5
        { t: 108, div: 'great', midi: 71, dur: 3.0, vel: 0.92 },   // B4
        { t: 108, div: 'swell', midi: 42, dur: 4.0, vel: 0.82 },   // F#2
        { t: 108, div: 'swell', midi: 49, dur: 4.0, vel: 0.80 },   // C#3
        { t: 108, div: 'swell', midi: 54, dur: 4.0, vel: 0.80 },   // F#3
        { t: 111, div: 'great', midi: 81, dur: 1.0, vel: 0.95 },   // A5
        { t: 111, div: 'great', midi: 69, dur: 1.0, vel: 0.90 },   // A4

        // Bar 29: G5 dotted half + G5 quarter
        { t: 112, div: 'pedal', midi: 43, dur: 4.0, vel: 0.95 },   // G2
        { t: 112, div: 'great', midi: 79, dur: 3.0, vel: 0.93 },   // G5
        { t: 112, div: 'great', midi: 67, dur: 3.0, vel: 0.88 },   // G4
        { t: 112, div: 'swell', midi: 47, dur: 4.0, vel: 0.82 },   // B2
        { t: 112, div: 'swell', midi: 55, dur: 4.0, vel: 0.80 },   // G3
        { t: 115, div: 'great', midi: 79, dur: 1.0, vel: 0.90 },   // G5

        // Bar 30: F#5 half + E5 half
        { t: 116, div: 'pedal', midi: 45, dur: 4.0, vel: 0.95 },   // A2
        { t: 116, div: 'great', midi: 78, dur: 2.0, vel: 0.92 },   // F#5
        { t: 116, div: 'great', midi: 66, dur: 2.0, vel: 0.87 },   // F#4
        { t: 116, div: 'swell', midi: 49, dur: 2.0, vel: 0.82 },   // C#3
        { t: 116, div: 'swell', midi: 57, dur: 2.0, vel: 0.80 },   // A3
        { t: 118, div: 'great', midi: 76, dur: 2.0, vel: 0.90 },   // E5
        { t: 118, div: 'great', midi: 64, dur: 2.0, vel: 0.85 },   // E4
        { t: 118, div: 'swell', midi: 45, dur: 2.0, vel: 0.82 },   // A2
        { t: 118, div: 'swell', midi: 52, dur: 2.0, vel: 0.80 },   // E3

        // Bar 31: D5 whole - majestic resolution
        { t: 120, div: 'pedal', midi: 38, dur: 4.0, vel: 0.98 },   // D2
        { t: 120, div: 'great', midi: 74, dur: 4.0, vel: 0.95 },   // D5
        { t: 120, div: 'great', midi: 62, dur: 4.0, vel: 0.90 },   // D4
        { t: 120, div: 'swell', midi: 50, dur: 4.0, vel: 0.85 },   // D3
        { t: 120, div: 'swell', midi: 54, dur: 4.0, vel: 0.82 },   // F#3
        { t: 120, div: 'swell', midi: 57, dur: 4.0, vel: 0.82 },   // A3

        // Bar 32: D major final chord
        { t: 124, div: 'pedal', midi: 38, dur: 4.0, vel: 0.98 },   // D2
        { t: 124, div: 'pedal', midi: 50, dur: 4.0, vel: 0.90 },   // D3
        { t: 124, div: 'great', midi: 74, dur: 4.0, vel: 0.98 },   // D5
        { t: 124, div: 'great', midi: 66, dur: 4.0, vel: 0.92 },   // F#4
        { t: 124, div: 'great', midi: 62, dur: 4.0, vel: 0.90 },   // D4
        { t: 124, div: 'swell', midi: 50, dur: 4.0, vel: 0.85 },   // D3
        { t: 124, div: 'swell', midi: 54, dur: 4.0, vel: 0.82 },   // F#3
        { t: 124, div: 'swell', midi: 57, dur: 4.0, vel: 0.82 },   // A3
    ]
};


// ============================================================
// 3. Albinoni / Giazotto - Adagio in G minor
// ============================================================
// Slow, mournful melody over sustained bass. The violin melody
// is played on the swell with tremulant for expressive vibrato.
// The organ continuo provides the harmonic foundation.
// G minor: G=67, A=69, Bb=70, C=72, D=74, Eb=75, F=77, F#=78
// Time: 3/4 (adagio, very slow). Beats = quarter notes.
// ============================================================

const PIECE_ALBINONI_ADAGIO = {
    title: "Adagio in G minor",
    composer: "Tomaso Albinoni / Remo Giazotto",
    catalog: "Arranged for organ",
    key: "G minor",
    tempo: 40,
    tempoChanges: [
        { t: 0, tempo: 40, label: "Adagio" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-bourdon8'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voxceleste8', 'sw-oboe8', 'sw-tremulant'],
        choir: ['ch-gedeckt8', 'ch-dulciana8'],
        pedal: ['pd-subbass16', 'pd-subbass32']
    },
    events: [
        // ===== INTRODUCTION: Organ continuo, 6 bars of 3/4 =====
        // The basso continuo establishes the descending bass line:
        // G - F# - F(nat) - E - Eb - D  (chromatic lament bass)

        // Bar 1: Gm chord (i)
        { t: 0, div: 'pedal', midi: 43, dur: 3.0, vel: 0.65 },     // G2
        { t: 0, div: 'choir', midi: 55, dur: 3.0, vel: 0.50 },     // G3
        { t: 0, div: 'choir', midi: 58, dur: 3.0, vel: 0.48 },     // Bb3
        { t: 0, div: 'choir', midi: 62, dur: 3.0, vel: 0.48 },     // D4

        // Bar 2: D/F# (V6)
        { t: 3, div: 'pedal', midi: 42, dur: 3.0, vel: 0.65 },     // F#2
        { t: 3, div: 'choir', midi: 54, dur: 3.0, vel: 0.50 },     // F#3
        { t: 3, div: 'choir', midi: 57, dur: 3.0, vel: 0.48 },     // A3
        { t: 3, div: 'choir', midi: 62, dur: 3.0, vel: 0.48 },     // D4

        // Bar 3: Bb/F (III6)
        { t: 6, div: 'pedal', midi: 41, dur: 3.0, vel: 0.65 },     // F2
        { t: 6, div: 'choir', midi: 53, dur: 3.0, vel: 0.50 },     // F3
        { t: 6, div: 'choir', midi: 58, dur: 3.0, vel: 0.48 },     // Bb3
        { t: 6, div: 'choir', midi: 62, dur: 3.0, vel: 0.48 },     // D4

        // Bar 4: C/E (iv6)
        { t: 9, div: 'pedal', midi: 40, dur: 3.0, vel: 0.65 },     // E2
        { t: 9, div: 'choir', midi: 52, dur: 3.0, vel: 0.50 },     // E3
        { t: 9, div: 'choir', midi: 55, dur: 3.0, vel: 0.48 },     // G3
        { t: 9, div: 'choir', midi: 60, dur: 3.0, vel: 0.48 },     // C4

        // Bar 5: Cm/Eb (iv)
        { t: 12, div: 'pedal', midi: 39, dur: 3.0, vel: 0.65 },    // Eb2
        { t: 12, div: 'choir', midi: 51, dur: 3.0, vel: 0.50 },    // Eb3
        { t: 12, div: 'choir', midi: 55, dur: 3.0, vel: 0.48 },    // G3
        { t: 12, div: 'choir', midi: 60, dur: 3.0, vel: 0.48 },    // C4

        // Bar 6: D7 (V7) - leads to melody entry
        { t: 15, div: 'pedal', midi: 38, dur: 3.0, vel: 0.68 },    // D2
        { t: 15, div: 'choir', midi: 50, dur: 3.0, vel: 0.52 },    // D3
        { t: 15, div: 'choir', midi: 54, dur: 3.0, vel: 0.50 },    // F#3
        { t: 15, div: 'choir', midi: 57, dur: 3.0, vel: 0.50 },    // A3
        { t: 15, div: 'choir', midi: 60, dur: 3.0, vel: 0.48 },    // C4

        // ===== MELODY ENTRY (bar 7): The famous violin melody on Swell =====
        // Melody: D5...... Bb4 A4 | G4. A4 Bb4 A4 G4 F#4 |

        // Bar 7: Gm
        { t: 18, div: 'pedal', midi: 43, dur: 3.0, vel: 0.65 },    // G2
        { t: 18, div: 'choir', midi: 55, dur: 3.0, vel: 0.50 },    // G3
        { t: 18, div: 'choir', midi: 58, dur: 3.0, vel: 0.48 },    // Bb3
        { t: 18, div: 'choir', midi: 62, dur: 3.0, vel: 0.48 },    // D4
        // Melody: D5 held, then turn to Bb4, A4
        { t: 18, div: 'swell', midi: 74, dur: 1.5, vel: 0.72 },    // D5
        { t: 19.5, div: 'swell', midi: 70, dur: 0.75, vel: 0.68 }, // Bb4
        { t: 20.25, div: 'swell', midi: 69, dur: 0.75, vel: 0.65 },// A4

        // Bar 8: D7/F# (V6/5)
        { t: 21, div: 'pedal', midi: 42, dur: 3.0, vel: 0.65 },    // F#2
        { t: 21, div: 'choir', midi: 54, dur: 3.0, vel: 0.50 },    // F#3
        { t: 21, div: 'choir', midi: 57, dur: 3.0, vel: 0.48 },    // A3
        { t: 21, div: 'choir', midi: 62, dur: 3.0, vel: 0.48 },    // D4
        // Melody: G4 dotted, then ornamental turn A4-Bb4-A4-G4-F#4
        { t: 21, div: 'swell', midi: 67, dur: 0.75, vel: 0.70 },   // G4
        { t: 21.75, div: 'swell', midi: 69, dur: 0.375, vel: 0.68 },// A4
        { t: 22.125, div: 'swell', midi: 70, dur: 0.375, vel: 0.70 },// Bb4
        { t: 22.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.68 }, // A4
        { t: 22.75, div: 'swell', midi: 67, dur: 0.25, vel: 0.65 },// G4
        { t: 23.0, div: 'swell', midi: 66, dur: 0.75, vel: 0.68 }, // F#4

        // Bar 9: Bb (III)
        { t: 24, div: 'pedal', midi: 41, dur: 3.0, vel: 0.65 },    // F2
        { t: 24, div: 'choir', midi: 53, dur: 3.0, vel: 0.50 },    // F3
        { t: 24, div: 'choir', midi: 58, dur: 3.0, vel: 0.48 },    // Bb3
        { t: 24, div: 'choir', midi: 62, dur: 3.0, vel: 0.48 },    // D4
        // Melody: G4 rising to Bb4, then C5
        { t: 24, div: 'swell', midi: 67, dur: 1.0, vel: 0.70 },    // G4
        { t: 25, div: 'swell', midi: 70, dur: 1.0, vel: 0.72 },    // Bb4
        { t: 26, div: 'swell', midi: 72, dur: 1.0, vel: 0.75 },    // C5

        // Bar 10: Cm/Eb (iv6)
        { t: 27, div: 'pedal', midi: 40, dur: 3.0, vel: 0.65 },    // E2
        { t: 27, div: 'choir', midi: 52, dur: 3.0, vel: 0.50 },    // E3
        { t: 27, div: 'choir', midi: 55, dur: 3.0, vel: 0.48 },    // G3
        { t: 27, div: 'choir', midi: 60, dur: 3.0, vel: 0.48 },    // C4
        // Melody: D5 long held, the plaintive peak
        { t: 27, div: 'swell', midi: 74, dur: 2.0, vel: 0.78 },    // D5
        { t: 29, div: 'swell', midi: 72, dur: 1.0, vel: 0.72 },    // C5

        // Bar 11: Cm (iv)
        { t: 30, div: 'pedal', midi: 39, dur: 3.0, vel: 0.65 },    // Eb2
        { t: 30, div: 'choir', midi: 51, dur: 3.0, vel: 0.50 },    // Eb3
        { t: 30, div: 'choir', midi: 55, dur: 3.0, vel: 0.48 },    // G3
        { t: 30, div: 'choir', midi: 60, dur: 3.0, vel: 0.48 },    // C4
        // Melody: Bb4 with ornament down to A4
        { t: 30, div: 'swell', midi: 70, dur: 1.5, vel: 0.72 },    // Bb4
        { t: 31.5, div: 'swell', midi: 69, dur: 0.5, vel: 0.68 },  // A4
        { t: 32.0, div: 'swell', midi: 70, dur: 1.0, vel: 0.70 },  // Bb4

        // Bar 12: D7 (V7) - half cadence
        { t: 33, div: 'pedal', midi: 38, dur: 3.0, vel: 0.68 },    // D2
        { t: 33, div: 'choir', midi: 50, dur: 3.0, vel: 0.52 },    // D3
        { t: 33, div: 'choir', midi: 54, dur: 3.0, vel: 0.50 },    // F#3
        { t: 33, div: 'choir', midi: 57, dur: 3.0, vel: 0.50 },    // A3
        // Melody: A4 resolving down through G4 to F#4
        { t: 33, div: 'swell', midi: 69, dur: 1.0, vel: 0.70 },    // A4
        { t: 34, div: 'swell', midi: 67, dur: 0.5, vel: 0.68 },    // G4
        { t: 34.5, div: 'swell', midi: 66, dur: 1.5, vel: 0.72 },  // F#4

        // ===== SECOND STATEMENT (bars 13-18): Melody intensifies =====
        // The melody is now played with Great organ added for more power

        // Bar 13: Gm (i) - second melody statement, higher register
        { t: 36, div: 'pedal', midi: 43, dur: 3.0, vel: 0.70 },    // G2
        { t: 36, div: 'choir', midi: 55, dur: 3.0, vel: 0.55 },    // G3
        { t: 36, div: 'choir', midi: 58, dur: 3.0, vel: 0.52 },    // Bb3
        { t: 36, div: 'choir', midi: 62, dur: 3.0, vel: 0.52 },    // D4
        // Melody on Swell + Great doubled: D5 held, Eb5-D5
        { t: 36, div: 'swell', midi: 74, dur: 1.5, vel: 0.78 },    // D5
        { t: 36, div: 'great', midi: 74, dur: 1.5, vel: 0.72 },    // D5 (doubled)
        { t: 37.5, div: 'swell', midi: 75, dur: 0.5, vel: 0.75 },  // Eb5
        { t: 38.0, div: 'swell', midi: 74, dur: 1.0, vel: 0.78 },  // D5

        // Bar 14: D/F# (V6)
        { t: 39, div: 'pedal', midi: 42, dur: 3.0, vel: 0.70 },    // F#2
        { t: 39, div: 'choir', midi: 54, dur: 3.0, vel: 0.55 },    // F#3
        { t: 39, div: 'choir', midi: 57, dur: 3.0, vel: 0.52 },    // A3
        { t: 39, div: 'choir', midi: 62, dur: 3.0, vel: 0.52 },    // D4
        // Melody: C5-Bb4-A4 descending
        { t: 39, div: 'swell', midi: 72, dur: 1.0, vel: 0.75 },    // C5
        { t: 39, div: 'great', midi: 72, dur: 1.0, vel: 0.70 },    // C5
        { t: 40, div: 'swell', midi: 70, dur: 1.0, vel: 0.72 },    // Bb4
        { t: 41, div: 'swell', midi: 69, dur: 1.0, vel: 0.70 },    // A4

        // Bar 15: Bb/F (III6) - melody rises again
        { t: 42, div: 'pedal', midi: 41, dur: 3.0, vel: 0.70 },    // F2
        { t: 42, div: 'choir', midi: 53, dur: 3.0, vel: 0.55 },    // F3
        { t: 42, div: 'choir', midi: 58, dur: 3.0, vel: 0.52 },    // Bb3
        { t: 42, div: 'choir', midi: 62, dur: 3.0, vel: 0.52 },    // D4
        // Melody: Bb4-C5-D5 ascending
        { t: 42, div: 'swell', midi: 70, dur: 1.0, vel: 0.75 },    // Bb4
        { t: 42, div: 'great', midi: 70, dur: 1.0, vel: 0.70 },    // Bb4
        { t: 43, div: 'swell', midi: 72, dur: 1.0, vel: 0.78 },    // C5
        { t: 44, div: 'swell', midi: 74, dur: 1.0, vel: 0.80 },    // D5

        // Bar 16: Eb (VI) - emotional climax
        { t: 45, div: 'pedal', midi: 39, dur: 3.0, vel: 0.72 },    // Eb2
        { t: 45, div: 'choir', midi: 51, dur: 3.0, vel: 0.55 },    // Eb3
        { t: 45, div: 'choir', midi: 55, dur: 3.0, vel: 0.52 },    // G3
        { t: 45, div: 'choir', midi: 58, dur: 3.0, vel: 0.52 },    // Bb3
        // Melody: Eb5 - the anguished climax note
        { t: 45, div: 'swell', midi: 75, dur: 1.5, vel: 0.85 },    // Eb5
        { t: 45, div: 'great', midi: 75, dur: 1.5, vel: 0.80 },    // Eb5
        { t: 46.5, div: 'swell', midi: 74, dur: 0.75, vel: 0.80 }, // D5
        { t: 47.25, div: 'swell', midi: 72, dur: 0.75, vel: 0.75 },// C5

        // Bar 17: Cm (iv)
        { t: 48, div: 'pedal', midi: 48, dur: 3.0, vel: 0.72 },    // C3
        { t: 48, div: 'choir', midi: 48, dur: 3.0, vel: 0.55 },    // C3
        { t: 48, div: 'choir', midi: 55, dur: 3.0, vel: 0.52 },    // G3
        { t: 48, div: 'choir', midi: 60, dur: 3.0, vel: 0.52 },    // C4
        // Melody: D5-C5-Bb4 sighing descent
        { t: 48, div: 'swell', midi: 74, dur: 1.0, vel: 0.78 },    // D5
        { t: 49, div: 'swell', midi: 72, dur: 1.0, vel: 0.75 },    // C5
        { t: 50, div: 'swell', midi: 70, dur: 1.0, vel: 0.72 },    // Bb4

        // Bar 18: D7 (V7) - cadential resolution to tonic
        { t: 51, div: 'pedal', midi: 38, dur: 3.0, vel: 0.72 },    // D2
        { t: 51, div: 'choir', midi: 50, dur: 3.0, vel: 0.55 },    // D3
        { t: 51, div: 'choir', midi: 54, dur: 3.0, vel: 0.52 },    // F#3
        { t: 51, div: 'choir', midi: 57, dur: 3.0, vel: 0.52 },    // A3
        { t: 51, div: 'choir', midi: 60, dur: 3.0, vel: 0.50 },    // C4
        // Melody: A4 ornamental resolution to G4
        { t: 51, div: 'swell', midi: 69, dur: 1.0, vel: 0.72 },    // A4
        { t: 52, div: 'swell', midi: 70, dur: 0.25, vel: 0.68 },   // Bb4 (appoggiatura)
        { t: 52.25, div: 'swell', midi: 69, dur: 0.75, vel: 0.72 },// A4
        { t: 53, div: 'swell', midi: 67, dur: 1.0, vel: 0.70 },    // G4 (resolution would come)

        // ===== CODA PASSAGE (bars 19-21): Descending bass, melody fragments =====

        // Bar 19: Gm (i) - gentle echo of theme
        { t: 54, div: 'pedal', midi: 43, dur: 3.0, vel: 0.68 },    // G2
        { t: 54, div: 'choir', midi: 55, dur: 3.0, vel: 0.52 },    // G3
        { t: 54, div: 'choir', midi: 58, dur: 3.0, vel: 0.50 },    // Bb3
        { t: 54, div: 'choir', midi: 62, dur: 3.0, vel: 0.50 },    // D4
        // Melody fragment: D5-C5-Bb4
        { t: 54, div: 'swell', midi: 74, dur: 1.0, vel: 0.68 },    // D5
        { t: 55, div: 'swell', midi: 72, dur: 1.0, vel: 0.65 },    // C5
        { t: 56, div: 'swell', midi: 70, dur: 1.0, vel: 0.62 },    // Bb4

        // Bar 20: Cm/Eb (iv6)
        { t: 57, div: 'pedal', midi: 39, dur: 3.0, vel: 0.65 },    // Eb2
        { t: 57, div: 'choir', midi: 51, dur: 3.0, vel: 0.50 },    // Eb3
        { t: 57, div: 'choir', midi: 55, dur: 3.0, vel: 0.48 },    // G3
        { t: 57, div: 'choir', midi: 60, dur: 3.0, vel: 0.48 },    // C4
        // Melody: A4 sighing to G4
        { t: 57, div: 'swell', midi: 69, dur: 1.5, vel: 0.65 },    // A4
        { t: 58.5, div: 'swell', midi: 67, dur: 1.5, vel: 0.62 },  // G4

        // Bar 21: D7 (V7) suspension and resolution
        { t: 60, div: 'pedal', midi: 38, dur: 3.0, vel: 0.68 },    // D2
        { t: 60, div: 'choir', midi: 50, dur: 3.0, vel: 0.52 },    // D3
        { t: 60, div: 'choir', midi: 54, dur: 3.0, vel: 0.50 },    // F#3
        { t: 60, div: 'choir', midi: 57, dur: 3.0, vel: 0.50 },    // A3
        // Melody: Bb4 (9th suspension) resolving through A4 to F#4
        { t: 60, div: 'swell', midi: 70, dur: 0.75, vel: 0.65 },   // Bb4 (suspension)
        { t: 60.75, div: 'swell', midi: 69, dur: 0.75, vel: 0.62 },// A4
        { t: 61.5, div: 'swell', midi: 67, dur: 0.75, vel: 0.60 }, // G4
        { t: 62.25, div: 'swell', midi: 66, dur: 0.75, vel: 0.58 },// F#4

        // ===== CLOSING (bars 22-25): Final cadence =====

        // Bar 22: Gm (i) - quiet resolution
        { t: 63, div: 'pedal', midi: 43, dur: 3.0, vel: 0.60 },    // G2
        { t: 63, div: 'choir', midi: 55, dur: 3.0, vel: 0.48 },    // G3
        { t: 63, div: 'choir', midi: 58, dur: 3.0, vel: 0.45 },    // Bb3
        { t: 63, div: 'choir', midi: 62, dur: 3.0, vel: 0.45 },    // D4
        // Melody: D5 gently descending
        { t: 63, div: 'swell', midi: 74, dur: 1.5, vel: 0.62 },    // D5
        { t: 64.5, div: 'swell', midi: 72, dur: 0.75, vel: 0.58 }, // C5
        { t: 65.25, div: 'swell', midi: 70, dur: 0.75, vel: 0.55 },// Bb4

        // Bar 23: Cm - Eb bass
        { t: 66, div: 'pedal', midi: 39, dur: 3.0, vel: 0.58 },    // Eb2
        { t: 66, div: 'choir', midi: 51, dur: 3.0, vel: 0.48 },    // Eb3
        { t: 66, div: 'choir', midi: 55, dur: 3.0, vel: 0.45 },    // G3
        { t: 66, div: 'choir', midi: 60, dur: 3.0, vel: 0.45 },    // C4
        // Melody: A4 turning to G4
        { t: 66, div: 'swell', midi: 69, dur: 1.0, vel: 0.58 },    // A4
        { t: 67, div: 'swell', midi: 70, dur: 0.5, vel: 0.55 },    // Bb4 (upper neighbor)
        { t: 67.5, div: 'swell', midi: 69, dur: 0.5, vel: 0.55 },  // A4
        { t: 68, div: 'swell', midi: 67, dur: 1.0, vel: 0.52 },    // G4

        // Bar 24: D (V) with suspension
        { t: 69, div: 'pedal', midi: 38, dur: 3.0, vel: 0.62 },    // D2
        { t: 69, div: 'choir', midi: 50, dur: 3.0, vel: 0.48 },    // D3
        { t: 69, div: 'choir', midi: 54, dur: 3.0, vel: 0.45 },    // F#3
        { t: 69, div: 'choir', midi: 57, dur: 3.0, vel: 0.45 },    // A3
        // Melody: F#4 with gentle mordent
        { t: 69, div: 'swell', midi: 66, dur: 0.5, vel: 0.58 },    // F#4
        { t: 69.5, div: 'swell', midi: 67, dur: 0.25, vel: 0.55 }, // G4 (mordent)
        { t: 69.75, div: 'swell', midi: 66, dur: 2.25, vel: 0.58 },// F#4 (held)

        // Bar 25: Gm final chord - Tierce de Picardie (G major)
        { t: 72, div: 'pedal', midi: 43, dur: 3.0, vel: 0.65 },    // G2
        { t: 72, div: 'choir', midi: 55, dur: 3.0, vel: 0.50 },    // G3
        { t: 72, div: 'choir', midi: 59, dur: 3.0, vel: 0.48 },    // B3 (Picardy third!)
        { t: 72, div: 'choir', midi: 62, dur: 3.0, vel: 0.48 },    // D4
        // Final G resolving gently
        { t: 72, div: 'swell', midi: 67, dur: 3.0, vel: 0.60 },    // G4
        { t: 72, div: 'great', midi: 67, dur: 3.0, vel: 0.55 },    // G4 (doubled)
    ]
};


// ============================================================
// 4. Boellmann - Toccata from Suite Gothique, Op. 25
// ============================================================
// Driving toccata in C minor. The pedal carries a dramatic
// theme while the manuals play relentless repeated chords and
// running passages. Dark, Gothic character.
// C minor: C=60, D=62, Eb=63, F=65, G=67, Ab=68, Bb=70
// Time: 2/4 (fast). Each beat = quarter note.
// Structure: Pedal theme A (Cm) - modulation - Pedal theme B -
//   development - triumphant return ending with Tierce de Picardie.
// ============================================================

const PIECE_BOELLMANN_TOCCATA = {
    title: "Toccata from Suite Gothique",
    composer: "Leon Boellmann",
    catalog: "Op. 25 No. 4",
    key: "C minor",
    tempo: 120,
    tempoChanges: [
        { t: 0, tempo: 120, label: "Allegro non troppo" }
    ],
    registration: {
        great: ['gt-principal16', 'gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8'],
        swell: ['sw-bourdon16', 'sw-gedeckt8', 'sw-principal4', 'sw-oboe8'],
        choir: [],
        pedal: ['pd-principal16', 'pd-subbass16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ===== MEASURES 1-4: Opening - driving repeated chords with pedal theme =====
        // The manuals play relentless repeated 8th-note Cm chords
        // while the pedal announces the bold main theme.

        // Pedal theme bars 1-4: C3-C3-G2-Ab2 | Bb2-Ab2-G2-F2 | Eb2-F2-G2-Ab2 | G2 (half)
        // This is the famous "Gothic" pedal melody

        // Bar 1 beat 1: Cm chord repeated + pedal C
        { t: 0, div: 'pedal', midi: 48, dur: 0.5, vel: 0.90 },     // C3
        { t: 0, div: 'great', midi: 60, dur: 0.25, vel: 0.85 },    // C4
        { t: 0, div: 'great', midi: 63, dur: 0.25, vel: 0.85 },    // Eb4
        { t: 0, div: 'great', midi: 67, dur: 0.25, vel: 0.85 },    // G4
        { t: 0.25, div: 'great', midi: 60, dur: 0.25, vel: 0.82 }, // C4
        { t: 0.25, div: 'great', midi: 63, dur: 0.25, vel: 0.82 }, // Eb4
        { t: 0.25, div: 'great', midi: 67, dur: 0.25, vel: 0.82 }, // G4

        // Bar 1 beat 2: repeat + pedal C
        { t: 0.5, div: 'pedal', midi: 48, dur: 0.5, vel: 0.88 },   // C3
        { t: 0.5, div: 'great', midi: 60, dur: 0.25, vel: 0.85 },  // C4
        { t: 0.5, div: 'great', midi: 63, dur: 0.25, vel: 0.85 },  // Eb4
        { t: 0.5, div: 'great', midi: 67, dur: 0.25, vel: 0.85 },  // G4
        { t: 0.75, div: 'great', midi: 60, dur: 0.25, vel: 0.82 }, // C4
        { t: 0.75, div: 'great', midi: 63, dur: 0.25, vel: 0.82 }, // Eb4
        { t: 0.75, div: 'great', midi: 67, dur: 0.25, vel: 0.82 }, // G4

        // Bar 2: pedal G2-Ab2
        { t: 1, div: 'pedal', midi: 43, dur: 0.5, vel: 0.88 },     // G2
        { t: 1, div: 'great', midi: 60, dur: 0.25, vel: 0.85 },    // C4
        { t: 1, div: 'great', midi: 63, dur: 0.25, vel: 0.85 },    // Eb4
        { t: 1, div: 'great', midi: 67, dur: 0.25, vel: 0.85 },    // G4
        { t: 1.25, div: 'great', midi: 60, dur: 0.25, vel: 0.82 }, // C4
        { t: 1.25, div: 'great', midi: 63, dur: 0.25, vel: 0.82 }, // Eb4
        { t: 1.25, div: 'great', midi: 67, dur: 0.25, vel: 0.82 }, // G4

        { t: 1.5, div: 'pedal', midi: 44, dur: 0.5, vel: 0.88 },   // Ab2
        { t: 1.5, div: 'great', midi: 60, dur: 0.25, vel: 0.85 },  // C4
        { t: 1.5, div: 'great', midi: 63, dur: 0.25, vel: 0.85 },  // Eb4
        { t: 1.5, div: 'great', midi: 68, dur: 0.25, vel: 0.85 },  // Ab4
        { t: 1.75, div: 'great', midi: 60, dur: 0.25, vel: 0.82 }, // C4
        { t: 1.75, div: 'great', midi: 63, dur: 0.25, vel: 0.82 }, // Eb4
        { t: 1.75, div: 'great', midi: 68, dur: 0.25, vel: 0.82 }, // Ab4

        // Bar 3: pedal Bb2-Ab2
        { t: 2, div: 'pedal', midi: 46, dur: 0.5, vel: 0.90 },     // Bb2
        { t: 2, div: 'great', midi: 62, dur: 0.25, vel: 0.87 },    // D4
        { t: 2, div: 'great', midi: 65, dur: 0.25, vel: 0.87 },    // F4
        { t: 2, div: 'great', midi: 70, dur: 0.25, vel: 0.87 },    // Bb4
        { t: 2.25, div: 'great', midi: 62, dur: 0.25, vel: 0.84 }, // D4
        { t: 2.25, div: 'great', midi: 65, dur: 0.25, vel: 0.84 }, // F4
        { t: 2.25, div: 'great', midi: 70, dur: 0.25, vel: 0.84 }, // Bb4

        { t: 2.5, div: 'pedal', midi: 44, dur: 0.25, vel: 0.88 },  // Ab2
        { t: 2.5, div: 'great', midi: 60, dur: 0.25, vel: 0.85 },  // C4
        { t: 2.5, div: 'great', midi: 63, dur: 0.25, vel: 0.85 },  // Eb4
        { t: 2.5, div: 'great', midi: 68, dur: 0.25, vel: 0.85 },  // Ab4
        { t: 2.75, div: 'pedal', midi: 43, dur: 0.25, vel: 0.86 }, // G2
        { t: 2.75, div: 'great', midi: 59, dur: 0.25, vel: 0.83 }, // B3
        { t: 2.75, div: 'great', midi: 62, dur: 0.25, vel: 0.83 }, // D4
        { t: 2.75, div: 'great', midi: 67, dur: 0.25, vel: 0.83 }, // G4

        // Bar 4: pedal F2, then Eb2-F2-G2
        { t: 3, div: 'pedal', midi: 41, dur: 0.5, vel: 0.88 },     // F2
        { t: 3, div: 'great', midi: 60, dur: 0.25, vel: 0.85 },    // C4
        { t: 3, div: 'great', midi: 63, dur: 0.25, vel: 0.85 },    // Eb4
        { t: 3, div: 'great', midi: 65, dur: 0.25, vel: 0.85 },    // F4
        { t: 3.25, div: 'great', midi: 60, dur: 0.25, vel: 0.82 }, // C4
        { t: 3.25, div: 'great', midi: 63, dur: 0.25, vel: 0.82 }, // Eb4
        { t: 3.25, div: 'great', midi: 65, dur: 0.25, vel: 0.82 }, // F4

        { t: 3.5, div: 'pedal', midi: 39, dur: 0.25, vel: 0.86 },  // Eb2
        { t: 3.5, div: 'great', midi: 63, dur: 0.25, vel: 0.85 },  // Eb4
        { t: 3.5, div: 'great', midi: 67, dur: 0.25, vel: 0.85 },  // G4
        { t: 3.5, div: 'great', midi: 70, dur: 0.25, vel: 0.85 },  // Bb4
        { t: 3.75, div: 'pedal', midi: 41, dur: 0.25, vel: 0.86 }, // F2
        { t: 3.75, div: 'great', midi: 63, dur: 0.25, vel: 0.82 }, // Eb4
        { t: 3.75, div: 'great', midi: 65, dur: 0.25, vel: 0.82 }, // F4
        { t: 3.75, div: 'great', midi: 68, dur: 0.25, vel: 0.82 }, // Ab4

        // ===== MEASURES 5-8: Pedal theme continues, crescendo =====

        // Bar 5: pedal G2-Ab2 ascending
        { t: 4, div: 'pedal', midi: 43, dur: 0.5, vel: 0.90 },     // G2
        { t: 4, div: 'great', midi: 59, dur: 0.25, vel: 0.87 },    // B3
        { t: 4, div: 'great', midi: 62, dur: 0.25, vel: 0.87 },    // D4
        { t: 4, div: 'great', midi: 67, dur: 0.25, vel: 0.87 },    // G4
        { t: 4.25, div: 'great', midi: 59, dur: 0.25, vel: 0.84 }, // B3
        { t: 4.25, div: 'great', midi: 62, dur: 0.25, vel: 0.84 }, // D4
        { t: 4.25, div: 'great', midi: 67, dur: 0.25, vel: 0.84 }, // G4

        { t: 4.5, div: 'pedal', midi: 44, dur: 0.5, vel: 0.88 },   // Ab2
        { t: 4.5, div: 'great', midi: 60, dur: 0.25, vel: 0.85 },  // C4
        { t: 4.5, div: 'great', midi: 63, dur: 0.25, vel: 0.85 },  // Eb4
        { t: 4.5, div: 'great', midi: 68, dur: 0.25, vel: 0.85 },  // Ab4
        { t: 4.75, div: 'great', midi: 60, dur: 0.25, vel: 0.82 }, // C4
        { t: 4.75, div: 'great', midi: 63, dur: 0.25, vel: 0.82 }, // Eb4
        { t: 4.75, div: 'great', midi: 68, dur: 0.25, vel: 0.82 }, // Ab4

        // Bar 6: pedal Bb2 half note (climax of phrase)
        { t: 5, div: 'pedal', midi: 46, dur: 1.0, vel: 0.92 },     // Bb2
        { t: 5, div: 'great', midi: 62, dur: 0.25, vel: 0.88 },    // D4
        { t: 5, div: 'great', midi: 65, dur: 0.25, vel: 0.88 },    // F4
        { t: 5, div: 'great', midi: 70, dur: 0.25, vel: 0.88 },    // Bb4
        { t: 5.25, div: 'great', midi: 62, dur: 0.25, vel: 0.85 }, // D4
        { t: 5.25, div: 'great', midi: 65, dur: 0.25, vel: 0.85 }, // F4
        { t: 5.25, div: 'great', midi: 70, dur: 0.25, vel: 0.85 }, // Bb4
        { t: 5.5, div: 'great', midi: 62, dur: 0.25, vel: 0.88 },  // D4
        { t: 5.5, div: 'great', midi: 65, dur: 0.25, vel: 0.88 },  // F4
        { t: 5.5, div: 'great', midi: 70, dur: 0.25, vel: 0.88 },  // Bb4
        { t: 5.75, div: 'great', midi: 62, dur: 0.25, vel: 0.85 }, // D4
        { t: 5.75, div: 'great', midi: 65, dur: 0.25, vel: 0.85 }, // F4
        { t: 5.75, div: 'great', midi: 70, dur: 0.25, vel: 0.85 }, // Bb4

        // Bar 7: Pedal Ab2-G2 descending
        { t: 6, div: 'pedal', midi: 44, dur: 0.5, vel: 0.90 },     // Ab2
        { t: 6, div: 'great', midi: 60, dur: 0.25, vel: 0.87 },    // C4
        { t: 6, div: 'great', midi: 63, dur: 0.25, vel: 0.87 },    // Eb4
        { t: 6, div: 'great', midi: 68, dur: 0.25, vel: 0.87 },    // Ab4
        { t: 6.25, div: 'great', midi: 60, dur: 0.25, vel: 0.84 }, // C4
        { t: 6.25, div: 'great', midi: 63, dur: 0.25, vel: 0.84 }, // Eb4
        { t: 6.25, div: 'great', midi: 68, dur: 0.25, vel: 0.84 }, // Ab4

        { t: 6.5, div: 'pedal', midi: 43, dur: 0.5, vel: 0.90 },   // G2
        { t: 6.5, div: 'great', midi: 59, dur: 0.25, vel: 0.87 },  // B3
        { t: 6.5, div: 'great', midi: 62, dur: 0.25, vel: 0.87 },  // D4
        { t: 6.5, div: 'great', midi: 67, dur: 0.25, vel: 0.87 },  // G4
        { t: 6.75, div: 'great', midi: 59, dur: 0.25, vel: 0.84 }, // B3
        { t: 6.75, div: 'great', midi: 62, dur: 0.25, vel: 0.84 }, // D4
        { t: 6.75, div: 'great', midi: 67, dur: 0.25, vel: 0.84 }, // G4

        // Bar 8: Pedal C3 half note (cadential arrival)
        { t: 7, div: 'pedal', midi: 48, dur: 1.0, vel: 0.92 },     // C3
        { t: 7, div: 'great', midi: 60, dur: 0.25, vel: 0.90 },    // C4
        { t: 7, div: 'great', midi: 63, dur: 0.25, vel: 0.90 },    // Eb4
        { t: 7, div: 'great', midi: 67, dur: 0.25, vel: 0.90 },    // G4
        { t: 7.25, div: 'great', midi: 60, dur: 0.25, vel: 0.87 }, // C4
        { t: 7.25, div: 'great', midi: 63, dur: 0.25, vel: 0.87 }, // Eb4
        { t: 7.25, div: 'great', midi: 67, dur: 0.25, vel: 0.87 }, // G4
        { t: 7.5, div: 'great', midi: 60, dur: 0.25, vel: 0.90 },  // C4
        { t: 7.5, div: 'great', midi: 63, dur: 0.25, vel: 0.90 },  // Eb4
        { t: 7.5, div: 'great', midi: 67, dur: 0.25, vel: 0.90 },  // G4
        { t: 7.75, div: 'great', midi: 60, dur: 0.25, vel: 0.87 }, // C4
        { t: 7.75, div: 'great', midi: 63, dur: 0.25, vel: 0.87 }, // Eb4
        { t: 7.75, div: 'great', midi: 67, dur: 0.25, vel: 0.87 }, // G4

        // ===== MEASURES 9-12: Second theme area - swell melody =====
        // A more lyrical counter-theme appears on the swell
        // while manuals continue driving chords

        // Bar 9: Eb major (relative major) - swell melody enters
        { t: 8, div: 'pedal', midi: 39, dur: 1.0, vel: 0.85 },     // Eb2
        { t: 8, div: 'great', midi: 63, dur: 0.25, vel: 0.82 },    // Eb4
        { t: 8, div: 'great', midi: 67, dur: 0.25, vel: 0.82 },    // G4
        { t: 8, div: 'great', midi: 70, dur: 0.25, vel: 0.82 },    // Bb4
        { t: 8.25, div: 'great', midi: 63, dur: 0.25, vel: 0.80 }, // Eb4
        { t: 8.25, div: 'great', midi: 67, dur: 0.25, vel: 0.80 }, // G4
        { t: 8.25, div: 'great', midi: 70, dur: 0.25, vel: 0.80 }, // Bb4
        { t: 8.5, div: 'great', midi: 63, dur: 0.25, vel: 0.82 },  // Eb4
        { t: 8.5, div: 'great', midi: 67, dur: 0.25, vel: 0.82 },  // G4
        { t: 8.5, div: 'great', midi: 70, dur: 0.25, vel: 0.82 },  // Bb4
        { t: 8.75, div: 'great', midi: 63, dur: 0.25, vel: 0.80 }, // Eb4
        { t: 8.75, div: 'great', midi: 67, dur: 0.25, vel: 0.80 }, // G4
        { t: 8.75, div: 'great', midi: 70, dur: 0.25, vel: 0.80 }, // Bb4
        // Swell melody: Eb5-D5
        { t: 8, div: 'swell', midi: 75, dur: 0.5, vel: 0.78 },     // Eb5
        { t: 8.5, div: 'swell', midi: 74, dur: 0.5, vel: 0.75 },   // D5

        // Bar 10: Ab major
        { t: 9, div: 'pedal', midi: 44, dur: 1.0, vel: 0.85 },     // Ab2
        { t: 9, div: 'great', midi: 60, dur: 0.25, vel: 0.82 },    // C4
        { t: 9, div: 'great', midi: 63, dur: 0.25, vel: 0.82 },    // Eb4
        { t: 9, div: 'great', midi: 68, dur: 0.25, vel: 0.82 },    // Ab4
        { t: 9.25, div: 'great', midi: 60, dur: 0.25, vel: 0.80 }, // C4
        { t: 9.25, div: 'great', midi: 63, dur: 0.25, vel: 0.80 }, // Eb4
        { t: 9.25, div: 'great', midi: 68, dur: 0.25, vel: 0.80 }, // Ab4
        { t: 9.5, div: 'great', midi: 60, dur: 0.25, vel: 0.82 },  // C4
        { t: 9.5, div: 'great', midi: 63, dur: 0.25, vel: 0.82 },  // Eb4
        { t: 9.5, div: 'great', midi: 68, dur: 0.25, vel: 0.82 },  // Ab4
        { t: 9.75, div: 'great', midi: 60, dur: 0.25, vel: 0.80 }, // C4
        { t: 9.75, div: 'great', midi: 63, dur: 0.25, vel: 0.80 }, // Eb4
        { t: 9.75, div: 'great', midi: 68, dur: 0.25, vel: 0.80 }, // Ab4
        // Swell melody: C5-Bb4
        { t: 9, div: 'swell', midi: 72, dur: 0.5, vel: 0.78 },     // C5
        { t: 9.5, div: 'swell', midi: 70, dur: 0.5, vel: 0.75 },   // Bb4

        // Bar 11: Fm
        { t: 10, div: 'pedal', midi: 41, dur: 1.0, vel: 0.85 },    // F2
        { t: 10, div: 'great', midi: 60, dur: 0.25, vel: 0.82 },   // C4
        { t: 10, div: 'great', midi: 65, dur: 0.25, vel: 0.82 },   // F4
        { t: 10, div: 'great', midi: 68, dur: 0.25, vel: 0.82 },   // Ab4
        { t: 10.25, div: 'great', midi: 60, dur: 0.25, vel: 0.80 },// C4
        { t: 10.25, div: 'great', midi: 65, dur: 0.25, vel: 0.80 },// F4
        { t: 10.25, div: 'great', midi: 68, dur: 0.25, vel: 0.80 },// Ab4
        { t: 10.5, div: 'great', midi: 60, dur: 0.25, vel: 0.82 }, // C4
        { t: 10.5, div: 'great', midi: 65, dur: 0.25, vel: 0.82 }, // F4
        { t: 10.5, div: 'great', midi: 68, dur: 0.25, vel: 0.82 }, // Ab4
        { t: 10.75, div: 'great', midi: 60, dur: 0.25, vel: 0.80 },// C4
        { t: 10.75, div: 'great', midi: 65, dur: 0.25, vel: 0.80 },// F4
        { t: 10.75, div: 'great', midi: 68, dur: 0.25, vel: 0.80 },// Ab4
        // Swell: Ab4-G4
        { t: 10, div: 'swell', midi: 68, dur: 0.5, vel: 0.78 },    // Ab4
        { t: 10.5, div: 'swell', midi: 67, dur: 0.5, vel: 0.75 },  // G4

        // Bar 12: G7 (V7/Cm) - drives back to Cm
        { t: 11, div: 'pedal', midi: 43, dur: 1.0, vel: 0.88 },    // G2
        { t: 11, div: 'great', midi: 59, dur: 0.25, vel: 0.85 },   // B3
        { t: 11, div: 'great', midi: 62, dur: 0.25, vel: 0.85 },   // D4
        { t: 11, div: 'great', midi: 65, dur: 0.25, vel: 0.85 },   // F4
        { t: 11.25, div: 'great', midi: 59, dur: 0.25, vel: 0.82 },// B3
        { t: 11.25, div: 'great', midi: 62, dur: 0.25, vel: 0.82 },// D4
        { t: 11.25, div: 'great', midi: 65, dur: 0.25, vel: 0.82 },// F4
        { t: 11.5, div: 'great', midi: 59, dur: 0.25, vel: 0.85 }, // B3
        { t: 11.5, div: 'great', midi: 62, dur: 0.25, vel: 0.85 }, // D4
        { t: 11.5, div: 'great', midi: 65, dur: 0.25, vel: 0.85 }, // F4
        { t: 11.75, div: 'great', midi: 59, dur: 0.25, vel: 0.82 },// B3
        { t: 11.75, div: 'great', midi: 62, dur: 0.25, vel: 0.82 },// D4
        { t: 11.75, div: 'great', midi: 65, dur: 0.25, vel: 0.82 },// F4
        // Swell: F4-D4 (7th resolving)
        { t: 11, div: 'swell', midi: 65, dur: 0.5, vel: 0.78 },    // F4
        { t: 11.5, div: 'swell', midi: 62, dur: 0.5, vel: 0.75 },  // D4

        // ===== MEASURES 13-16: Return of pedal theme, fortissimo =====

        // Bar 13: Cm - pedal theme restated ff
        { t: 12, div: 'pedal', midi: 48, dur: 0.5, vel: 0.95 },    // C3
        { t: 12, div: 'great', midi: 60, dur: 0.25, vel: 0.92 },   // C4
        { t: 12, div: 'great', midi: 63, dur: 0.25, vel: 0.92 },   // Eb4
        { t: 12, div: 'great', midi: 67, dur: 0.25, vel: 0.92 },   // G4
        { t: 12, div: 'great', midi: 72, dur: 0.25, vel: 0.92 },   // C5
        { t: 12.25, div: 'great', midi: 60, dur: 0.25, vel: 0.88 },// C4
        { t: 12.25, div: 'great', midi: 63, dur: 0.25, vel: 0.88 },// Eb4
        { t: 12.25, div: 'great', midi: 67, dur: 0.25, vel: 0.88 },// G4
        { t: 12.25, div: 'great', midi: 72, dur: 0.25, vel: 0.88 },// C5

        { t: 12.5, div: 'pedal', midi: 48, dur: 0.5, vel: 0.93 },  // C3
        { t: 12.5, div: 'great', midi: 60, dur: 0.25, vel: 0.92 }, // C4
        { t: 12.5, div: 'great', midi: 63, dur: 0.25, vel: 0.92 }, // Eb4
        { t: 12.5, div: 'great', midi: 67, dur: 0.25, vel: 0.92 }, // G4
        { t: 12.5, div: 'great', midi: 72, dur: 0.25, vel: 0.92 }, // C5
        { t: 12.75, div: 'great', midi: 60, dur: 0.25, vel: 0.88 },// C4
        { t: 12.75, div: 'great', midi: 63, dur: 0.25, vel: 0.88 },// Eb4
        { t: 12.75, div: 'great', midi: 67, dur: 0.25, vel: 0.88 },// G4
        { t: 12.75, div: 'great', midi: 72, dur: 0.25, vel: 0.88 },// C5

        // Bar 14: pedal G2-Ab2
        { t: 13, div: 'pedal', midi: 43, dur: 0.5, vel: 0.93 },    // G2
        { t: 13, div: 'great', midi: 59, dur: 0.25, vel: 0.92 },   // B3
        { t: 13, div: 'great', midi: 62, dur: 0.25, vel: 0.92 },   // D4
        { t: 13, div: 'great', midi: 67, dur: 0.25, vel: 0.92 },   // G4
        { t: 13.25, div: 'great', midi: 59, dur: 0.25, vel: 0.88 },// B3
        { t: 13.25, div: 'great', midi: 62, dur: 0.25, vel: 0.88 },// D4
        { t: 13.25, div: 'great', midi: 67, dur: 0.25, vel: 0.88 },// G4

        { t: 13.5, div: 'pedal', midi: 44, dur: 0.5, vel: 0.93 },  // Ab2
        { t: 13.5, div: 'great', midi: 60, dur: 0.25, vel: 0.92 }, // C4
        { t: 13.5, div: 'great', midi: 63, dur: 0.25, vel: 0.92 }, // Eb4
        { t: 13.5, div: 'great', midi: 68, dur: 0.25, vel: 0.92 }, // Ab4
        { t: 13.75, div: 'great', midi: 60, dur: 0.25, vel: 0.88 },// C4
        { t: 13.75, div: 'great', midi: 63, dur: 0.25, vel: 0.88 },// Eb4
        { t: 13.75, div: 'great', midi: 68, dur: 0.25, vel: 0.88 },// Ab4

        // Bar 15: pedal Bb2 building to climax
        { t: 14, div: 'pedal', midi: 46, dur: 0.5, vel: 0.95 },    // Bb2
        { t: 14, div: 'great', midi: 62, dur: 0.25, vel: 0.93 },   // D4
        { t: 14, div: 'great', midi: 65, dur: 0.25, vel: 0.93 },   // F4
        { t: 14, div: 'great', midi: 70, dur: 0.25, vel: 0.93 },   // Bb4
        { t: 14.25, div: 'great', midi: 62, dur: 0.25, vel: 0.90 },// D4
        { t: 14.25, div: 'great', midi: 65, dur: 0.25, vel: 0.90 },// F4
        { t: 14.25, div: 'great', midi: 70, dur: 0.25, vel: 0.90 },// Bb4

        { t: 14.5, div: 'pedal', midi: 44, dur: 0.25, vel: 0.93 }, // Ab2
        { t: 14.5, div: 'great', midi: 60, dur: 0.25, vel: 0.92 }, // C4
        { t: 14.5, div: 'great', midi: 63, dur: 0.25, vel: 0.92 }, // Eb4
        { t: 14.5, div: 'great', midi: 68, dur: 0.25, vel: 0.92 }, // Ab4
        { t: 14.75, div: 'pedal', midi: 43, dur: 0.25, vel: 0.93 },// G2
        { t: 14.75, div: 'great', midi: 59, dur: 0.25, vel: 0.92 },// B3
        { t: 14.75, div: 'great', midi: 62, dur: 0.25, vel: 0.92 },// D4
        { t: 14.75, div: 'great', midi: 67, dur: 0.25, vel: 0.92 },// G4

        // Bar 16: Grand cadence G-C (V-I)
        { t: 15, div: 'pedal', midi: 43, dur: 0.5, vel: 0.95 },    // G2
        { t: 15, div: 'great', midi: 59, dur: 0.25, vel: 0.95 },   // B3
        { t: 15, div: 'great', midi: 62, dur: 0.25, vel: 0.95 },   // D4
        { t: 15, div: 'great', midi: 67, dur: 0.25, vel: 0.95 },   // G4
        { t: 15.25, div: 'great', midi: 59, dur: 0.25, vel: 0.92 },// B3
        { t: 15.25, div: 'great', midi: 62, dur: 0.25, vel: 0.92 },// D4
        { t: 15.25, div: 'great', midi: 67, dur: 0.25, vel: 0.92 },// G4

        // Resolution: C major (Tierce de Picardie!) fff
        { t: 15.5, div: 'pedal', midi: 36, dur: 1.5, vel: 0.98 },  // C2
        { t: 15.5, div: 'pedal', midi: 48, dur: 1.5, vel: 0.95 },  // C3
        { t: 15.5, div: 'great', midi: 60, dur: 1.5, vel: 0.98 },  // C4
        { t: 15.5, div: 'great', midi: 64, dur: 1.5, vel: 0.98 },  // E4 (major third!)
        { t: 15.5, div: 'great', midi: 67, dur: 1.5, vel: 0.98 },  // G4
        { t: 15.5, div: 'great', midi: 72, dur: 1.5, vel: 0.98 },  // C5
        { t: 15.5, div: 'swell', midi: 48, dur: 1.5, vel: 0.92 },  // C3
        { t: 15.5, div: 'swell', midi: 52, dur: 1.5, vel: 0.92 },  // E3
        { t: 15.5, div: 'swell', midi: 55, dur: 1.5, vel: 0.92 },  // G3
    ]
};
