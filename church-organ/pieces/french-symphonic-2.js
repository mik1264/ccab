// ============================================================
// French Symphonic Organ Works II - 20th Century
// ============================================================
// Six masterworks of 20th-century French organ music
// MIDI reference: C2=36, C3=48, C4=60, D4=62, E4=64, F4=65, G4=67, A4=69, Bb4=70, B4=71, C5=72
// ============================================================

// ============================================================
// 1. Alain - Litanies, JA 119
// ============================================================
// Composed 1937. Insistent, driving ostinato with building intensity.
// The Christian soul repeats the same invocation with vehement faith.
// Opens with solo statement of a visceral theme that returns
// incessantly in many guises. Perpetual motion builds to ecstatic climax.
// Alain was tragically killed in WW2 at age 29.
// ============================================================

const PIECE_ALAIN_LITANIES = {
    title: "Litanies",
    composer: "Jehan Alain",
    catalog: "JA 119",
    key: "B minor",
    tempo: 138,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-trumpet8'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4', 'sw-oboe8'],
        choir: [],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ===== SECTION A: Solo ostinato theme - B minor, mf =====
        // m.1-2: The litany theme, solo on Great - insistent repeated pattern
        // B-F#-B-C#-D-C#-B-A#-B - the prayer motif
        { t: 0,    div: 'great', midi: 59, dur: 0.22, vel: 0.75 },  // B3
        { t: 0.22, div: 'great', midi: 66, dur: 0.22, vel: 0.73 },  // F#4
        { t: 0.44, div: 'great', midi: 71, dur: 0.22, vel: 0.76 },  // B4
        { t: 0.66, div: 'great', midi: 73, dur: 0.22, vel: 0.74 },  // C#5
        { t: 0.88, div: 'great', midi: 74, dur: 0.22, vel: 0.78 },  // D5
        { t: 1.10, div: 'great', midi: 73, dur: 0.22, vel: 0.74 },  // C#5
        { t: 1.32, div: 'great', midi: 71, dur: 0.22, vel: 0.76 },  // B4
        { t: 1.54, div: 'great', midi: 70, dur: 0.22, vel: 0.72 },  // A#4
        { t: 1.76, div: 'great', midi: 71, dur: 0.44, vel: 0.77 },  // B4
        // m.3-4: Theme repeated, slightly louder - building
        { t: 2.20, div: 'great', midi: 59, dur: 0.22, vel: 0.78 },  // B3
        { t: 2.42, div: 'great', midi: 66, dur: 0.22, vel: 0.76 },  // F#4
        { t: 2.64, div: 'great', midi: 71, dur: 0.22, vel: 0.79 },  // B4
        { t: 2.86, div: 'great', midi: 73, dur: 0.22, vel: 0.77 },  // C#5
        { t: 3.08, div: 'great', midi: 74, dur: 0.22, vel: 0.81 },  // D5
        { t: 3.30, div: 'great', midi: 73, dur: 0.22, vel: 0.77 },  // C#5
        { t: 3.52, div: 'great', midi: 71, dur: 0.22, vel: 0.79 },  // B4
        { t: 3.74, div: 'great', midi: 70, dur: 0.22, vel: 0.75 },  // A#4
        { t: 3.96, div: 'great', midi: 71, dur: 0.44, vel: 0.80 },  // B4
        // m.5-6: Pedal enters with B, theme continues with harmonic support
        { t: 4.40, div: 'pedal', midi: 47, dur: 1.76, vel: 0.72 },  // B2
        { t: 4.40, div: 'great', midi: 59, dur: 0.22, vel: 0.80 },  // B3
        { t: 4.62, div: 'great', midi: 66, dur: 0.22, vel: 0.78 },  // F#4
        { t: 4.84, div: 'great', midi: 71, dur: 0.22, vel: 0.81 },  // B4
        { t: 5.06, div: 'great', midi: 73, dur: 0.22, vel: 0.79 },  // C#5
        { t: 5.28, div: 'great', midi: 74, dur: 0.22, vel: 0.83 },  // D5
        { t: 5.50, div: 'great', midi: 73, dur: 0.22, vel: 0.79 },  // C#5
        { t: 5.72, div: 'great', midi: 71, dur: 0.22, vel: 0.81 },  // B4
        { t: 5.94, div: 'great', midi: 70, dur: 0.22, vel: 0.77 },  // A#4
        { t: 6.16, div: 'great', midi: 71, dur: 0.44, vel: 0.82 },  // B4
        // Swell adds harmonic support - B minor chord
        { t: 4.40, div: 'swell', midi: 59, dur: 0.88, vel: 0.62 },  // B3
        { t: 4.40, div: 'swell', midi: 63, dur: 0.88, vel: 0.60 },  // Eb4/D#4
        { t: 4.40, div: 'swell', midi: 66, dur: 0.88, vel: 0.60 },  // F#4
        { t: 5.28, div: 'swell', midi: 62, dur: 0.88, vel: 0.63 },  // D4
        { t: 5.28, div: 'swell', midi: 66, dur: 0.88, vel: 0.61 },  // F#4
        { t: 5.28, div: 'swell', midi: 69, dur: 0.88, vel: 0.61 },  // A4

        // ===== SECTION B: Homophonic thickening - theme with chords =====
        // m.7-8: Theme harmonized in parallel, f
        { t: 6.60, div: 'pedal', midi: 47, dur: 1.76, vel: 0.78 },  // B2
        { t: 6.60, div: 'great', midi: 71, dur: 0.22, vel: 0.85 },  // B4
        { t: 6.60, div: 'great', midi: 66, dur: 0.22, vel: 0.82 },  // F#4
        { t: 6.82, div: 'great', midi: 78, dur: 0.22, vel: 0.83 },  // F#5
        { t: 6.82, div: 'great', midi: 73, dur: 0.22, vel: 0.80 },  // C#5
        { t: 7.04, div: 'great', midi: 83, dur: 0.22, vel: 0.86 },  // B5
        { t: 7.04, div: 'great', midi: 78, dur: 0.22, vel: 0.83 },  // F#5
        { t: 7.26, div: 'great', midi: 85, dur: 0.22, vel: 0.84 },  // C#6
        { t: 7.26, div: 'great', midi: 80, dur: 0.22, vel: 0.81 },  // G#5
        { t: 7.48, div: 'great', midi: 86, dur: 0.22, vel: 0.88 },  // D6
        { t: 7.48, div: 'great', midi: 81, dur: 0.22, vel: 0.85 },  // A5
        { t: 7.70, div: 'great', midi: 85, dur: 0.22, vel: 0.84 },  // C#6
        { t: 7.70, div: 'great', midi: 80, dur: 0.22, vel: 0.81 },  // G#5
        { t: 7.92, div: 'great', midi: 83, dur: 0.22, vel: 0.86 },  // B5
        { t: 7.92, div: 'great', midi: 78, dur: 0.22, vel: 0.83 },  // F#5
        { t: 8.14, div: 'great', midi: 82, dur: 0.22, vel: 0.82 },  // A#5
        { t: 8.14, div: 'great', midi: 77, dur: 0.22, vel: 0.79 },  // F5
        { t: 8.36, div: 'great', midi: 83, dur: 0.44, vel: 0.87 },  // B5
        { t: 8.36, div: 'great', midi: 78, dur: 0.44, vel: 0.84 },  // F#5
        // m.9-10: Counter-melody enters on swell against theme
        { t: 8.80, div: 'pedal', midi: 42, dur: 1.76, vel: 0.80 },  // F#2
        { t: 8.80, div: 'swell', midi: 78, dur: 0.66, vel: 0.72 },  // F#5
        { t: 9.46, div: 'swell', midi: 76, dur: 0.44, vel: 0.70 },  // E5
        { t: 9.90, div: 'swell', midi: 74, dur: 0.44, vel: 0.71 },  // D5
        { t: 10.34, div: 'swell', midi: 73, dur: 0.22, vel: 0.69 }, // C#5
        // Theme continues underneath on great
        { t: 8.80, div: 'great', midi: 59, dur: 0.22, vel: 0.86 },  // B3
        { t: 9.02, div: 'great', midi: 66, dur: 0.22, vel: 0.84 },  // F#4
        { t: 9.24, div: 'great', midi: 71, dur: 0.22, vel: 0.87 },  // B4
        { t: 9.46, div: 'great', midi: 73, dur: 0.22, vel: 0.85 },  // C#5
        { t: 9.68, div: 'great', midi: 74, dur: 0.22, vel: 0.89 },  // D5
        { t: 9.90, div: 'great', midi: 73, dur: 0.22, vel: 0.85 },  // C#5
        { t: 10.12, div: 'great', midi: 71, dur: 0.22, vel: 0.87 }, // B4
        { t: 10.34, div: 'great', midi: 70, dur: 0.22, vel: 0.83 }, // A#4
        { t: 10.56, div: 'great', midi: 71, dur: 0.44, vel: 0.88 }, // B4

        // ===== SECTION C: Building intensity - theme fragments accelerating =====
        // m.11-14: Compressed theme fragments, driving forward, ff
        { t: 11.00, div: 'pedal', midi: 47, dur: 0.88, vel: 0.85 }, // B2
        { t: 11.00, div: 'great', midi: 71, dur: 0.17, vel: 0.88 }, // B4
        { t: 11.17, div: 'great', midi: 73, dur: 0.17, vel: 0.86 }, // C#5
        { t: 11.34, div: 'great', midi: 74, dur: 0.17, vel: 0.90 }, // D5
        { t: 11.51, div: 'great', midi: 73, dur: 0.17, vel: 0.86 }, // C#5
        { t: 11.68, div: 'great', midi: 71, dur: 0.22, vel: 0.88 }, // B4
        // Fragment on E minor
        { t: 11.88, div: 'pedal', midi: 40, dur: 0.88, vel: 0.85 }, // E2
        { t: 11.88, div: 'great', midi: 76, dur: 0.17, vel: 0.88 }, // E5
        { t: 12.05, div: 'great', midi: 78, dur: 0.17, vel: 0.86 }, // F#5
        { t: 12.22, div: 'great', midi: 79, dur: 0.17, vel: 0.90 }, // G5
        { t: 12.39, div: 'great', midi: 78, dur: 0.17, vel: 0.86 }, // F#5
        { t: 12.56, div: 'great', midi: 76, dur: 0.22, vel: 0.88 }, // E5
        // Fragment on F# dominant
        { t: 12.76, div: 'pedal', midi: 42, dur: 0.88, vel: 0.87 }, // F#2
        { t: 12.76, div: 'great', midi: 78, dur: 0.17, vel: 0.90 }, // F#5
        { t: 12.93, div: 'great', midi: 80, dur: 0.17, vel: 0.88 }, // G#5
        { t: 13.10, div: 'great', midi: 82, dur: 0.17, vel: 0.92 }, // A#5
        { t: 13.27, div: 'great', midi: 80, dur: 0.17, vel: 0.88 }, // G#5
        { t: 13.44, div: 'great', midi: 78, dur: 0.22, vel: 0.90 }, // F#5
        // Swell reinforcing harmonics
        { t: 11.00, div: 'swell', midi: 59, dur: 0.88, vel: 0.75 }, // B3
        { t: 11.00, div: 'swell', midi: 63, dur: 0.88, vel: 0.73 }, // D#4
        { t: 11.88, div: 'swell', midi: 64, dur: 0.88, vel: 0.75 }, // E4
        { t: 11.88, div: 'swell', midi: 67, dur: 0.88, vel: 0.73 }, // G4
        { t: 12.76, div: 'swell', midi: 66, dur: 0.88, vel: 0.77 }, // F#4
        { t: 12.76, div: 'swell', midi: 70, dur: 0.88, vel: 0.75 }, // A#4

        // m.15-18: Full organ, theme in augmentation with rapid figuration
        { t: 13.64, div: 'pedal', midi: 47, dur: 1.76, vel: 0.90 }, // B2
        { t: 13.64, div: 'pedal', midi: 35, dur: 1.76, vel: 0.85 }, // B1
        // Rapid ostinato figuration on Great
        { t: 13.64, div: 'great', midi: 71, dur: 0.11, vel: 0.92 }, // B4
        { t: 13.75, div: 'great', midi: 74, dur: 0.11, vel: 0.90 }, // D5
        { t: 13.86, div: 'great', midi: 78, dur: 0.11, vel: 0.92 }, // F#5
        { t: 13.97, div: 'great', midi: 83, dur: 0.11, vel: 0.94 }, // B5
        { t: 14.08, div: 'great', midi: 78, dur: 0.11, vel: 0.92 }, // F#5
        { t: 14.19, div: 'great', midi: 74, dur: 0.11, vel: 0.90 }, // D5
        { t: 14.30, div: 'great', midi: 71, dur: 0.11, vel: 0.92 }, // B4
        { t: 14.41, div: 'great', midi: 74, dur: 0.11, vel: 0.90 }, // D5
        { t: 14.52, div: 'great', midi: 78, dur: 0.11, vel: 0.92 }, // F#5
        { t: 14.63, div: 'great', midi: 83, dur: 0.11, vel: 0.94 }, // B5
        { t: 14.74, div: 'great', midi: 78, dur: 0.11, vel: 0.92 }, // F#5
        { t: 14.85, div: 'great', midi: 74, dur: 0.11, vel: 0.90 }, // D5
        // Augmented theme on swell ff
        { t: 13.64, div: 'swell', midi: 83, dur: 0.44, vel: 0.85 }, // B5
        { t: 14.08, div: 'swell', midi: 90, dur: 0.44, vel: 0.83 }, // F#6
        { t: 14.52, div: 'swell', midi: 83, dur: 0.44, vel: 0.85 }, // B5
        // Second wave
        { t: 14.96, div: 'great', midi: 73, dur: 0.11, vel: 0.92 }, // C#5
        { t: 15.07, div: 'great', midi: 76, dur: 0.11, vel: 0.90 }, // E5
        { t: 15.18, div: 'great', midi: 80, dur: 0.11, vel: 0.92 }, // G#5
        { t: 15.29, div: 'great', midi: 85, dur: 0.11, vel: 0.94 }, // C#6
        { t: 15.40, div: 'great', midi: 80, dur: 0.11, vel: 0.92 }, // G#5
        { t: 15.51, div: 'great', midi: 76, dur: 0.11, vel: 0.90 }, // E5
        { t: 15.62, div: 'great', midi: 73, dur: 0.11, vel: 0.92 }, // C#5
        { t: 15.73, div: 'great', midi: 74, dur: 0.11, vel: 0.90 }, // D5
        { t: 15.84, div: 'great', midi: 78, dur: 0.11, vel: 0.92 }, // F#5
        { t: 15.95, div: 'great', midi: 83, dur: 0.11, vel: 0.94 }, // B5
        { t: 16.06, div: 'great', midi: 78, dur: 0.11, vel: 0.92 }, // F#5
        { t: 16.17, div: 'great', midi: 74, dur: 0.11, vel: 0.90 }, // D5

        // ===== SECTION D: Hesitation and resumption =====
        // m.19-20: Sudden piano, theme fragments questioning
        { t: 16.50, div: 'swell', midi: 71, dur: 0.33, vel: 0.55 }, // B4
        { t: 16.83, div: 'swell', midi: 73, dur: 0.33, vel: 0.53 }, // C#5
        { t: 17.16, div: 'swell', midi: 74, dur: 0.44, vel: 0.56 }, // D5
        { t: 17.60, div: 'swell', midi: 71, dur: 0.66, vel: 0.52 }, // B4
        // m.21-22: Resumption, building again
        { t: 18.26, div: 'pedal', midi: 47, dur: 1.32, vel: 0.75 }, // B2
        { t: 18.26, div: 'great', midi: 59, dur: 0.22, vel: 0.80 }, // B3
        { t: 18.48, div: 'great', midi: 66, dur: 0.22, vel: 0.78 }, // F#4
        { t: 18.70, div: 'great', midi: 71, dur: 0.22, vel: 0.81 }, // B4
        { t: 18.92, div: 'great', midi: 73, dur: 0.22, vel: 0.79 }, // C#5
        { t: 19.14, div: 'great', midi: 74, dur: 0.22, vel: 0.83 }, // D5
        { t: 19.36, div: 'great', midi: 73, dur: 0.22, vel: 0.79 }, // C#5
        // Swell countermelody
        { t: 18.26, div: 'swell', midi: 74, dur: 0.44, vel: 0.68 }, // D5
        { t: 18.70, div: 'swell', midi: 73, dur: 0.44, vel: 0.66 }, // C#5
        { t: 19.14, div: 'swell', midi: 71, dur: 0.44, vel: 0.68 }, // B4

        // ===== SECTION E: Ecstatic climax - full organ fff =====
        // m.23-26: Theme in massive chords, pedal thundering
        { t: 19.58, div: 'pedal', midi: 47, dur: 0.88, vel: 0.95 }, // B2
        { t: 19.58, div: 'pedal', midi: 35, dur: 0.88, vel: 0.92 }, // B1
        { t: 19.58, div: 'great', midi: 59, dur: 0.22, vel: 0.95 }, // B3
        { t: 19.58, div: 'great', midi: 63, dur: 0.22, vel: 0.93 }, // D#4
        { t: 19.58, div: 'great', midi: 66, dur: 0.22, vel: 0.93 }, // F#4
        { t: 19.58, div: 'great', midi: 71, dur: 0.22, vel: 0.95 }, // B4
        { t: 19.80, div: 'great', midi: 66, dur: 0.22, vel: 0.93 }, // F#4
        { t: 19.80, div: 'great', midi: 70, dur: 0.22, vel: 0.91 }, // A#4
        { t: 19.80, div: 'great', midi: 73, dur: 0.22, vel: 0.91 }, // C#5
        { t: 19.80, div: 'great', midi: 78, dur: 0.22, vel: 0.93 }, // F#5
        { t: 20.02, div: 'great', midi: 71, dur: 0.22, vel: 0.95 }, // B4
        { t: 20.02, div: 'great', midi: 74, dur: 0.22, vel: 0.93 }, // D5
        { t: 20.02, div: 'great', midi: 78, dur: 0.22, vel: 0.93 }, // F#5
        { t: 20.02, div: 'great', midi: 83, dur: 0.22, vel: 0.96 }, // B5
        { t: 20.24, div: 'great', midi: 73, dur: 0.22, vel: 0.94 }, // C#5
        { t: 20.24, div: 'great', midi: 76, dur: 0.22, vel: 0.92 }, // E5
        { t: 20.24, div: 'great', midi: 80, dur: 0.22, vel: 0.92 }, // G#5
        { t: 20.24, div: 'great', midi: 85, dur: 0.22, vel: 0.95 }, // C#6
        // Climax peak
        { t: 20.46, div: 'pedal', midi: 47, dur: 1.32, vel: 0.97 }, // B2
        { t: 20.46, div: 'pedal', midi: 35, dur: 1.32, vel: 0.95 }, // B1
        { t: 20.46, div: 'great', midi: 74, dur: 0.22, vel: 0.97 }, // D5
        { t: 20.46, div: 'great', midi: 78, dur: 0.22, vel: 0.95 }, // F#5
        { t: 20.46, div: 'great', midi: 83, dur: 0.22, vel: 0.95 }, // B5
        { t: 20.46, div: 'great', midi: 86, dur: 0.22, vel: 0.97 }, // D6
        { t: 20.68, div: 'great', midi: 73, dur: 0.22, vel: 0.95 }, // C#5
        { t: 20.68, div: 'great', midi: 78, dur: 0.22, vel: 0.93 }, // F#5
        { t: 20.68, div: 'great', midi: 83, dur: 0.22, vel: 0.93 }, // B5
        { t: 20.90, div: 'great', midi: 71, dur: 0.22, vel: 0.97 }, // B4
        { t: 20.90, div: 'great', midi: 74, dur: 0.22, vel: 0.95 }, // D5
        { t: 20.90, div: 'great', midi: 78, dur: 0.22, vel: 0.95 }, // F#5
        { t: 20.90, div: 'great', midi: 83, dur: 0.22, vel: 0.97 }, // B5
        { t: 21.12, div: 'great', midi: 70, dur: 0.22, vel: 0.94 }, // A#4
        { t: 21.12, div: 'great', midi: 73, dur: 0.22, vel: 0.92 }, // C#5
        { t: 21.12, div: 'great', midi: 78, dur: 0.22, vel: 0.92 }, // F#5
        // Final B chord, fff with full organ
        { t: 21.34, div: 'great', midi: 71, dur: 1.5, vel: 0.98 },  // B4
        { t: 21.34, div: 'great', midi: 78, dur: 1.5, vel: 0.96 },  // F#5
        { t: 21.34, div: 'great', midi: 83, dur: 1.5, vel: 0.96 },  // B5
        { t: 21.34, div: 'swell', midi: 59, dur: 1.5, vel: 0.90 },  // B3
        { t: 21.34, div: 'swell', midi: 63, dur: 1.5, vel: 0.88 },  // D#4
        { t: 21.34, div: 'swell', midi: 66, dur: 1.5, vel: 0.88 },  // F#4
        { t: 21.34, div: 'pedal', midi: 47, dur: 2.0, vel: 0.98 },  // B2
        { t: 21.34, div: 'pedal', midi: 35, dur: 2.0, vel: 0.95 },  // B1
    ]
};

// ============================================================
// 2. Duruflé - Toccata from Suite, Op. 5
// ============================================================
// Composed 1933, dedicated to Paul Dukas. Dazzling, multi-layered
// toccata in ternary form. Begins with introduction, then vigorous
// principal theme in pedals. Middle section introduces second theme.
// Both themes combine before brilliant conclusion. Often called
// the finest French toccata ever written.
// Key corrected to B minor per research (whole Suite in Eb minor area).
// ============================================================

const PIECE_DURUFLE_TOCCATA = {
    title: "Toccata from Suite, Op. 5",
    composer: "Maurice Duruflé",
    catalog: "Op. 5/III",
    key: "B minor",
    tempo: 132,
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== INTRODUCTION: Short preparatory chords =====
        // m.1-2: Opening chords, ff - establishing B minor
        { t: 0,    div: 'great', midi: 59, dur: 0.3, vel: 0.92 },  // B3
        { t: 0,    div: 'great', midi: 63, dur: 0.3, vel: 0.90 },  // D#4
        { t: 0,    div: 'great', midi: 66, dur: 0.3, vel: 0.90 },  // F#4
        { t: 0,    div: 'great', midi: 71, dur: 0.3, vel: 0.92 },  // B4
        { t: 0,    div: 'pedal', midi: 47, dur: 0.5, vel: 0.90 },  // B2
        { t: 0,    div: 'pedal', midi: 35, dur: 0.5, vel: 0.88 },  // B1
        { t: 0.45, div: 'great', midi: 66, dur: 0.3, vel: 0.93 },  // F#4
        { t: 0.45, div: 'great', midi: 70, dur: 0.3, vel: 0.91 },  // A#4
        { t: 0.45, div: 'great', midi: 73, dur: 0.3, vel: 0.91 },  // C#5
        { t: 0.45, div: 'great', midi: 78, dur: 0.3, vel: 0.93 },  // F#5
        { t: 0.45, div: 'pedal', midi: 42, dur: 0.5, vel: 0.90 },  // F#2
        // m.3-4: Cascading 16th-note figuration descending
        { t: 0.90, div: 'great', midi: 83, dur: 0.11, vel: 0.88 },  // B5
        { t: 1.01, div: 'great', midi: 80, dur: 0.11, vel: 0.86 },  // G#5
        { t: 1.12, div: 'great', midi: 78, dur: 0.11, vel: 0.88 },  // F#5
        { t: 1.23, div: 'great', midi: 74, dur: 0.11, vel: 0.86 },  // D5
        { t: 1.34, div: 'great', midi: 71, dur: 0.11, vel: 0.88 },  // B4
        { t: 1.45, div: 'great', midi: 68, dur: 0.11, vel: 0.86 },  // G#4
        { t: 1.56, div: 'great', midi: 66, dur: 0.11, vel: 0.88 },  // F#4
        { t: 1.67, div: 'great', midi: 63, dur: 0.11, vel: 0.86 },  // D#4
        { t: 1.78, div: 'great', midi: 59, dur: 0.22, vel: 0.90 },  // B3

        // ===== SECTION A: Principal theme in pedals =====
        // m.5-8: Vigorous rhythmic theme, pedals f
        { t: 2.20, div: 'pedal', midi: 47, dur: 0.33, vel: 0.88 },  // B2
        { t: 2.53, div: 'pedal', midi: 49, dur: 0.17, vel: 0.85 },  // C#3
        { t: 2.70, div: 'pedal', midi: 50, dur: 0.33, vel: 0.88 },  // D3
        { t: 3.03, div: 'pedal', midi: 49, dur: 0.17, vel: 0.85 },  // C#3
        { t: 3.20, div: 'pedal', midi: 47, dur: 0.50, vel: 0.90 },  // B2
        { t: 3.70, div: 'pedal', midi: 45, dur: 0.17, vel: 0.85 },  // A2
        { t: 3.87, div: 'pedal', midi: 47, dur: 0.33, vel: 0.88 },  // B2
        // Toccata figuration on manuals over pedal theme
        { t: 2.20, div: 'great', midi: 71, dur: 0.11, vel: 0.85 },  // B4
        { t: 2.31, div: 'great', midi: 74, dur: 0.11, vel: 0.83 },  // D5
        { t: 2.42, div: 'great', midi: 78, dur: 0.11, vel: 0.85 },  // F#5
        { t: 2.53, div: 'great', midi: 74, dur: 0.11, vel: 0.83 },  // D5
        { t: 2.64, div: 'great', midi: 71, dur: 0.11, vel: 0.85 },  // B4
        { t: 2.75, div: 'great', midi: 74, dur: 0.11, vel: 0.83 },  // D5
        { t: 2.86, div: 'great', midi: 78, dur: 0.11, vel: 0.85 },  // F#5
        { t: 2.97, div: 'great', midi: 83, dur: 0.11, vel: 0.87 },  // B5
        { t: 3.08, div: 'great', midi: 78, dur: 0.11, vel: 0.85 },  // F#5
        { t: 3.19, div: 'great', midi: 74, dur: 0.11, vel: 0.83 },  // D5
        { t: 3.30, div: 'great', midi: 71, dur: 0.11, vel: 0.85 },  // B4
        { t: 3.41, div: 'great', midi: 66, dur: 0.11, vel: 0.83 },  // F#4
        { t: 3.52, div: 'great', midi: 71, dur: 0.11, vel: 0.85 },  // B4
        { t: 3.63, div: 'great', midi: 74, dur: 0.11, vel: 0.83 },  // D5
        { t: 3.74, div: 'great', midi: 78, dur: 0.11, vel: 0.85 },  // F#5
        { t: 3.85, div: 'great', midi: 74, dur: 0.11, vel: 0.83 },  // D5
        // m.9-12: Pedal theme continues, manual figuration shifts harmony
        { t: 4.20, div: 'pedal', midi: 50, dur: 0.33, vel: 0.88 },  // D3
        { t: 4.53, div: 'pedal', midi: 52, dur: 0.17, vel: 0.85 },  // E3
        { t: 4.70, div: 'pedal', midi: 54, dur: 0.33, vel: 0.88 },  // F#3
        { t: 5.03, div: 'pedal', midi: 52, dur: 0.17, vel: 0.85 },  // E3
        { t: 5.20, div: 'pedal', midi: 50, dur: 0.50, vel: 0.90 },  // D3
        // D major figuration on manuals
        { t: 4.20, div: 'great', midi: 74, dur: 0.11, vel: 0.85 },  // D5
        { t: 4.31, div: 'great', midi: 78, dur: 0.11, vel: 0.83 },  // F#5
        { t: 4.42, div: 'great', midi: 81, dur: 0.11, vel: 0.85 },  // A5
        { t: 4.53, div: 'great', midi: 78, dur: 0.11, vel: 0.83 },  // F#5
        { t: 4.64, div: 'great', midi: 74, dur: 0.11, vel: 0.85 },  // D5
        { t: 4.75, div: 'great', midi: 78, dur: 0.11, vel: 0.83 },  // F#5
        { t: 4.86, div: 'great', midi: 81, dur: 0.11, vel: 0.85 },  // A5
        { t: 4.97, div: 'great', midi: 86, dur: 0.11, vel: 0.87 },  // D6
        { t: 5.08, div: 'great', midi: 81, dur: 0.11, vel: 0.85 },  // A5
        { t: 5.19, div: 'great', midi: 78, dur: 0.11, vel: 0.83 },  // F#5
        { t: 5.30, div: 'great', midi: 74, dur: 0.11, vel: 0.85 },  // D5
        { t: 5.41, div: 'great', midi: 69, dur: 0.11, vel: 0.83 },  // A4

        // ===== SECTION B: Second theme - lyrical, on swell =====
        // m.13-16: Contrasting cantabile theme
        { t: 5.70, div: 'pedal', midi: 47, dur: 1.5, vel: 0.72 },   // B2
        { t: 5.70, div: 'swell', midi: 78, dur: 0.50, vel: 0.70 },  // F#5
        { t: 6.20, div: 'swell', midi: 76, dur: 0.25, vel: 0.68 },  // E5
        { t: 6.45, div: 'swell', midi: 74, dur: 0.75, vel: 0.72 },  // D5
        { t: 7.20, div: 'swell', midi: 73, dur: 0.50, vel: 0.70 },  // C#5
        { t: 7.70, div: 'swell', midi: 71, dur: 0.50, vel: 0.72 },  // B4
        // Choir accompaniment
        { t: 5.70, div: 'choir', midi: 59, dur: 0.75, vel: 0.55 },  // B3
        { t: 5.70, div: 'choir', midi: 66, dur: 0.75, vel: 0.53 },  // F#4
        { t: 6.45, div: 'choir', midi: 62, dur: 0.75, vel: 0.55 },  // D4
        { t: 6.45, div: 'choir', midi: 66, dur: 0.75, vel: 0.53 },  // F#4
        { t: 7.20, div: 'choir', midi: 61, dur: 1.0, vel: 0.55 },   // C#4
        { t: 7.20, div: 'choir', midi: 64, dur: 1.0, vel: 0.53 },   // E4
        // m.17-20: Second theme continues, builds
        { t: 8.20, div: 'pedal', midi: 42, dur: 1.5, vel: 0.75 },   // F#2
        { t: 8.20, div: 'swell', midi: 73, dur: 0.50, vel: 0.72 },  // C#5
        { t: 8.70, div: 'swell', midi: 74, dur: 0.25, vel: 0.70 },  // D5
        { t: 8.95, div: 'swell', midi: 76, dur: 0.75, vel: 0.74 },  // E5
        { t: 9.70, div: 'swell', midi: 78, dur: 0.50, vel: 0.76 },  // F#5
        { t: 10.20, div: 'swell', midi: 74, dur: 0.75, vel: 0.73 }, // D5
        // m.20a: E minor toccata figuration, transition building
        { t: 10.95, div: 'pedal', midi: 40, dur: 0.75, vel: 0.80 },  // E2
        { t: 10.95, div: 'great', midi: 76, dur: 0.11, vel: 0.87 },  // E5
        { t: 11.06, div: 'great', midi: 71, dur: 0.11, vel: 0.85 },  // B4
        { t: 11.17, div: 'great', midi: 76, dur: 0.11, vel: 0.87 },  // E5
        { t: 11.28, div: 'great', midi: 79, dur: 0.11, vel: 0.89 },  // G5
        { t: 11.39, div: 'great', midi: 76, dur: 0.11, vel: 0.87 },  // E5
        { t: 11.50, div: 'great', midi: 71, dur: 0.11, vel: 0.85 },  // B4
        { t: 11.61, div: 'great', midi: 76, dur: 0.11, vel: 0.87 },  // E5
        { t: 11.72, div: 'great', midi: 79, dur: 0.11, vel: 0.89 },  // G5
        { t: 11.83, div: 'great', midi: 83, dur: 0.11, vel: 0.91 },  // B5
        { t: 11.94, div: 'great', midi: 79, dur: 0.11, vel: 0.89 },  // G5
        { t: 12.05, div: 'great', midi: 76, dur: 0.11, vel: 0.87 },  // E5
        // F# dominant preparation
        { t: 11.70, div: 'pedal', midi: 42, dur: 0.75, vel: 0.82 },  // F#2
        { t: 12.16, div: 'great', midi: 78, dur: 0.11, vel: 0.88 },  // F#5
        { t: 12.27, div: 'great', midi: 73, dur: 0.11, vel: 0.86 },  // C#5
        { t: 12.38, div: 'great', midi: 70, dur: 0.11, vel: 0.88 },  // A#4
        { t: 12.49, div: 'great', midi: 73, dur: 0.11, vel: 0.86 },  // C#5
        { t: 12.60, div: 'great', midi: 78, dur: 0.11, vel: 0.88 },  // F#5
        { t: 12.71, div: 'great', midi: 82, dur: 0.11, vel: 0.90 },  // A#5
        { t: 12.82, div: 'great', midi: 78, dur: 0.11, vel: 0.88 },  // F#5
        { t: 12.93, div: 'great', midi: 73, dur: 0.11, vel: 0.86 },  // C#5
        { t: 13.04, div: 'great', midi: 70, dur: 0.11, vel: 0.88 },  // A#4
        { t: 13.15, div: 'great', midi: 66, dur: 0.11, vel: 0.86 },  // F#4
        { t: 13.26, div: 'great', midi: 70, dur: 0.11, vel: 0.88 },  // A#4
        { t: 13.37, div: 'great', midi: 73, dur: 0.11, vel: 0.90 },  // C#5
        // Swell second theme fragment over transition
        { t: 10.95, div: 'swell', midi: 76, dur: 0.50, vel: 0.75 },  // E5
        { t: 11.45, div: 'swell', midi: 74, dur: 0.50, vel: 0.73 },  // D5
        { t: 11.95, div: 'swell', midi: 73, dur: 0.50, vel: 0.75 },  // C#5
        { t: 12.45, div: 'swell', midi: 71, dur: 1.0, vel: 0.77 },   // B4

        // ===== SECTION A': Return - both themes combined =====
        // m.21-24: Theme 1 in pedal with theme 2 on swell, toccata figuration great
        { t: 13.50, div: 'pedal', midi: 47, dur: 0.33, vel: 0.90 }, // B2
        { t: 13.83, div: 'pedal', midi: 49, dur: 0.17, vel: 0.87 }, // C#3
        { t: 14.00, div: 'pedal', midi: 50, dur: 0.33, vel: 0.90 }, // D3
        { t: 14.33, div: 'pedal', midi: 49, dur: 0.17, vel: 0.87 }, // C#3
        { t: 14.50, div: 'pedal', midi: 47, dur: 0.50, vel: 0.92 }, // B2
        // Toccata figuration fff
        { t: 13.50, div: 'great', midi: 71, dur: 0.11, vel: 0.92 }, // B4
        { t: 13.61, div: 'great', midi: 74, dur: 0.11, vel: 0.90 }, // D5
        { t: 13.72, div: 'great', midi: 78, dur: 0.11, vel: 0.92 }, // F#5
        { t: 13.83, div: 'great', midi: 83, dur: 0.11, vel: 0.94 }, // B5
        { t: 13.94, div: 'great', midi: 78, dur: 0.11, vel: 0.92 }, // F#5
        { t: 14.05, div: 'great', midi: 74, dur: 0.11, vel: 0.90 }, // D5
        { t: 14.16, div: 'great', midi: 78, dur: 0.11, vel: 0.92 }, // F#5
        { t: 14.27, div: 'great', midi: 83, dur: 0.11, vel: 0.94 }, // B5
        { t: 14.38, div: 'great', midi: 86, dur: 0.11, vel: 0.96 }, // D6
        { t: 14.49, div: 'great', midi: 83, dur: 0.11, vel: 0.94 }, // B5
        { t: 14.60, div: 'great', midi: 78, dur: 0.11, vel: 0.92 }, // F#5
        { t: 14.71, div: 'great', midi: 74, dur: 0.11, vel: 0.90 }, // D5
        // Second theme combined, on swell
        { t: 13.50, div: 'swell', midi: 78, dur: 0.50, vel: 0.78 }, // F#5
        { t: 14.00, div: 'swell', midi: 76, dur: 0.25, vel: 0.76 }, // E5
        { t: 14.25, div: 'swell', midi: 74, dur: 0.75, vel: 0.80 }, // D5

        // ===== CODA: Brilliant conclusion =====
        // m.25-28: Accelerating figuration to final chord
        { t: 15.00, div: 'pedal', midi: 47, dur: 0.22, vel: 0.92 }, // B2
        { t: 15.22, div: 'pedal', midi: 50, dur: 0.22, vel: 0.90 }, // D3
        { t: 15.44, div: 'pedal', midi: 54, dur: 0.22, vel: 0.92 }, // F#3
        { t: 15.66, div: 'pedal', midi: 47, dur: 0.22, vel: 0.94 }, // B2
        // Blazing scales in great
        { t: 15.00, div: 'great', midi: 71, dur: 0.09, vel: 0.93 }, // B4
        { t: 15.09, div: 'great', midi: 73, dur: 0.09, vel: 0.91 }, // C#5
        { t: 15.18, div: 'great', midi: 74, dur: 0.09, vel: 0.93 }, // D5
        { t: 15.27, div: 'great', midi: 76, dur: 0.09, vel: 0.91 }, // E5
        { t: 15.36, div: 'great', midi: 78, dur: 0.09, vel: 0.93 }, // F#5
        { t: 15.45, div: 'great', midi: 80, dur: 0.09, vel: 0.91 }, // G#5
        { t: 15.54, div: 'great', midi: 82, dur: 0.09, vel: 0.93 }, // A#5
        { t: 15.63, div: 'great', midi: 83, dur: 0.09, vel: 0.95 }, // B5
        { t: 15.72, div: 'great', midi: 85, dur: 0.09, vel: 0.93 }, // C#6
        { t: 15.81, div: 'great', midi: 86, dur: 0.09, vel: 0.95 }, // D6
        // Final B major chord - Tierce de Picardie
        { t: 16.00, div: 'great', midi: 59, dur: 2.0, vel: 0.98 },  // B3
        { t: 16.00, div: 'great', midi: 63, dur: 2.0, vel: 0.96 },  // D#4
        { t: 16.00, div: 'great', midi: 66, dur: 2.0, vel: 0.96 },  // F#4
        { t: 16.00, div: 'great', midi: 71, dur: 2.0, vel: 0.98 },  // B4
        { t: 16.00, div: 'great', midi: 75, dur: 2.0, vel: 0.96 },  // D#5
        { t: 16.00, div: 'great', midi: 78, dur: 2.0, vel: 0.96 },  // F#5
        { t: 16.00, div: 'great', midi: 83, dur: 2.0, vel: 0.98 },  // B5
        { t: 16.00, div: 'swell', midi: 47, dur: 2.0, vel: 0.90 },  // B2
        { t: 16.00, div: 'swell', midi: 59, dur: 2.0, vel: 0.88 },  // B3
        { t: 16.00, div: 'pedal', midi: 47, dur: 2.5, vel: 0.98 },  // B2
        { t: 16.00, div: 'pedal', midi: 35, dur: 2.5, vel: 0.95 },  // B1
    ]
};

// ============================================================
// 3. Duruflé - Prélude et Fugue sur le nom d'Alain, Op. 7
// ============================================================
// Composed 1942, tribute to Jehan Alain killed in WW2 (1940).
// Built on the musical letters A-L-A-I-N = A-D-A-A-F (extending
// the German musical alphabet). The Prelude quotes Alain's Litanies.
// The double fugue has two subjects in compound time: first in
// quavers, second in semiquavers. Stunning contrapuntal writing.
// ============================================================

const PIECE_DURUFLE_ALAIN = {
    title: "Prélude et Fugue sur le nom d'Alain, Op. 7",
    composer: "Maurice Duruflé",
    catalog: "Op. 7",
    key: "A minor",
    tempo: 96,
    tempoChanges: [
        { t: 0, tempo: 96, label: "Prélude - Allegro" },
        { t: 14.0, tempo: 80, label: "Fugue I - Andante" },
        { t: 22.0, tempo: 88, label: "Fugue II - Più mosso" },
        { t: 28.0, tempo: 104, label: "Stretto - Animato" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-spitzflute4', 'ch-clarinet8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ===== PRÉLUDE: A section - triplet motion =====
        // m.1-2: ALAIN motif stated boldly: A-D-A-A-F
        { t: 0,    div: 'great', midi: 69, dur: 0.50, vel: 0.88 },  // A4 (A)
        { t: 0.50, div: 'great', midi: 62, dur: 0.50, vel: 0.86 },  // D4 (L=D)
        { t: 1.00, div: 'great', midi: 69, dur: 0.50, vel: 0.88 },  // A4 (A)
        { t: 1.50, div: 'great', midi: 69, dur: 0.50, vel: 0.86 },  // A4 (I=A)
        { t: 2.00, div: 'great', midi: 65, dur: 0.75, vel: 0.90 },  // F4  (N=F)
        { t: 0,    div: 'pedal', midi: 45, dur: 2.75, vel: 0.82 },  // A2
        // m.3-4: Triplet figuration developing the motif
        { t: 2.75, div: 'great', midi: 69, dur: 0.21, vel: 0.82 },  // A4
        { t: 2.96, div: 'great', midi: 62, dur: 0.21, vel: 0.80 },  // D4
        { t: 3.17, div: 'great', midi: 69, dur: 0.21, vel: 0.82 },  // A4
        { t: 3.38, div: 'great', midi: 69, dur: 0.21, vel: 0.80 },  // A4
        { t: 3.59, div: 'great', midi: 65, dur: 0.21, vel: 0.84 },  // F4
        { t: 3.80, div: 'great', midi: 69, dur: 0.21, vel: 0.82 },  // A4
        { t: 4.01, div: 'great', midi: 72, dur: 0.21, vel: 0.84 },  // C5
        { t: 4.22, div: 'great', midi: 69, dur: 0.21, vel: 0.82 },  // A4
        { t: 4.43, div: 'great', midi: 65, dur: 0.21, vel: 0.80 },  // F4
        { t: 4.64, div: 'great', midi: 62, dur: 0.21, vel: 0.82 },  // D4
        { t: 4.85, div: 'great', midi: 69, dur: 0.21, vel: 0.84 },  // A4
        { t: 5.06, div: 'great', midi: 62, dur: 0.21, vel: 0.82 },  // D4
        { t: 2.75, div: 'pedal', midi: 38, dur: 1.25, vel: 0.80 },  // D2
        { t: 4.00, div: 'pedal', midi: 41, dur: 1.25, vel: 0.80 },  // F2
        // m.5-6: Lydian mode section (B section of prelude)
        { t: 5.25, div: 'swell', midi: 69, dur: 0.63, vel: 0.70 },  // A4
        { t: 5.88, div: 'swell', midi: 71, dur: 0.63, vel: 0.68 },  // B4
        { t: 6.51, div: 'swell', midi: 73, dur: 0.63, vel: 0.72 },  // C#5
        { t: 7.14, div: 'swell', midi: 74, dur: 0.63, vel: 0.70 },  // D5
        { t: 7.77, div: 'swell', midi: 76, dur: 0.63, vel: 0.74 },  // E5
        { t: 8.40, div: 'swell', midi: 74, dur: 0.63, vel: 0.70 },  // D5
        { t: 9.03, div: 'swell', midi: 73, dur: 0.63, vel: 0.72 },  // C#5
        { t: 9.66, div: 'swell', midi: 69, dur: 0.63, vel: 0.70 },  // A4
        // Harmonic support
        { t: 5.25, div: 'choir', midi: 57, dur: 2.5, vel: 0.55 },   // A3
        { t: 5.25, div: 'choir', midi: 62, dur: 2.5, vel: 0.53 },   // D4
        { t: 7.75, div: 'choir', midi: 57, dur: 2.5, vel: 0.55 },   // A3
        { t: 7.75, div: 'choir', midi: 61, dur: 2.5, vel: 0.53 },   // C#4
        { t: 5.25, div: 'pedal', midi: 45, dur: 2.5, vel: 0.68 },   // A2
        { t: 7.75, div: 'pedal', midi: 45, dur: 2.5, vel: 0.68 },   // A2

        // m.7-10: Litanies quotation - impassioned reference to Alain's masterwork
        { t: 10.25, div: 'great', midi: 59, dur: 0.25, vel: 0.85 }, // B3
        { t: 10.50, div: 'great', midi: 66, dur: 0.25, vel: 0.83 }, // F#4
        { t: 10.75, div: 'great', midi: 71, dur: 0.25, vel: 0.86 }, // B4
        { t: 11.00, div: 'great', midi: 73, dur: 0.25, vel: 0.84 }, // C#5
        { t: 11.25, div: 'great', midi: 74, dur: 0.25, vel: 0.88 }, // D5
        { t: 11.50, div: 'great', midi: 73, dur: 0.25, vel: 0.84 }, // C#5
        { t: 11.75, div: 'great', midi: 71, dur: 0.25, vel: 0.86 }, // B4
        { t: 12.00, div: 'great', midi: 70, dur: 0.25, vel: 0.82 }, // A#4
        { t: 12.25, div: 'great', midi: 71, dur: 0.50, vel: 0.87 }, // B4
        { t: 10.25, div: 'pedal', midi: 47, dur: 2.5, vel: 0.80 },  // B2
        // Swell harmonic support during Litanies quotation
        { t: 10.25, div: 'swell', midi: 59, dur: 1.25, vel: 0.65 }, // B3
        { t: 10.25, div: 'swell', midi: 63, dur: 1.25, vel: 0.63 }, // D#4
        { t: 10.25, div: 'swell', midi: 66, dur: 1.25, vel: 0.63 }, // F#4
        { t: 11.50, div: 'swell', midi: 57, dur: 1.25, vel: 0.65 }, // A3
        { t: 11.50, div: 'swell', midi: 61, dur: 1.25, vel: 0.63 }, // C#4
        { t: 11.50, div: 'swell', midi: 66, dur: 1.25, vel: 0.63 }, // F#4
        { t: 12.25, div: 'swell', midi: 59, dur: 0.50, vel: 0.67 }, // B3
        { t: 12.25, div: 'swell', midi: 63, dur: 0.50, vel: 0.65 }, // D#4
        { t: 12.25, div: 'swell', midi: 66, dur: 0.50, vel: 0.65 }, // F#4
        // Return to ALAIN motif, building
        { t: 12.75, div: 'great', midi: 69, dur: 0.38, vel: 0.88 }, // A4
        { t: 13.13, div: 'great', midi: 62, dur: 0.38, vel: 0.86 }, // D4
        { t: 13.51, div: 'great', midi: 69, dur: 0.25, vel: 0.88 }, // A4
        { t: 13.76, div: 'great', midi: 69, dur: 0.25, vel: 0.86 }, // A4
        { t: 14.01, div: 'great', midi: 65, dur: 0.50, vel: 0.90 }, // F4
        { t: 12.75, div: 'pedal', midi: 45, dur: 1.75, vel: 0.82 }, // A2

        // ===== FUGUE I: First subject in quavers =====
        // m.11-14: Subject 1 based on ALAIN motif, alto voice, mf
        { t: 14.50, div: 'swell', midi: 69, dur: 0.38, vel: 0.70 }, // A4
        { t: 14.88, div: 'swell', midi: 62, dur: 0.38, vel: 0.68 }, // D4
        { t: 15.26, div: 'swell', midi: 69, dur: 0.38, vel: 0.70 }, // A4
        { t: 15.64, div: 'swell', midi: 69, dur: 0.38, vel: 0.68 }, // A4
        { t: 16.02, div: 'swell', midi: 65, dur: 0.38, vel: 0.72 }, // F4
        { t: 16.40, div: 'swell', midi: 64, dur: 0.38, vel: 0.68 }, // E4
        { t: 16.78, div: 'swell', midi: 62, dur: 0.38, vel: 0.70 }, // D4
        { t: 17.16, div: 'swell', midi: 60, dur: 0.75, vel: 0.72 }, // C4
        // m.15-18: Answer in soprano, a 5th higher
        { t: 17.91, div: 'swell', midi: 76, dur: 0.38, vel: 0.72 }, // E5
        { t: 18.29, div: 'swell', midi: 69, dur: 0.38, vel: 0.70 }, // A4
        { t: 18.67, div: 'swell', midi: 76, dur: 0.38, vel: 0.72 }, // E5
        { t: 19.05, div: 'swell', midi: 76, dur: 0.38, vel: 0.70 }, // E5
        { t: 19.43, div: 'swell', midi: 72, dur: 0.38, vel: 0.74 }, // C5
        { t: 19.81, div: 'swell', midi: 71, dur: 0.38, vel: 0.70 }, // B4
        { t: 20.19, div: 'swell', midi: 69, dur: 0.38, vel: 0.72 }, // A4
        { t: 20.57, div: 'swell', midi: 67, dur: 0.75, vel: 0.74 }, // G4
        // Counter-subject continuing underneath
        { t: 17.91, div: 'choir', midi: 60, dur: 0.38, vel: 0.60 }, // C4
        { t: 18.29, div: 'choir', midi: 62, dur: 0.38, vel: 0.58 }, // D4
        { t: 18.67, div: 'choir', midi: 64, dur: 0.38, vel: 0.60 }, // E4
        { t: 19.05, div: 'choir', midi: 65, dur: 0.38, vel: 0.58 }, // F4
        { t: 19.43, div: 'choir', midi: 64, dur: 0.38, vel: 0.60 }, // E4
        { t: 19.81, div: 'choir', midi: 62, dur: 0.38, vel: 0.58 }, // D4
        { t: 20.19, div: 'choir', midi: 60, dur: 0.75, vel: 0.60 }, // C4
        // Bass entry
        { t: 21.00, div: 'pedal', midi: 45, dur: 0.38, vel: 0.72 }, // A2
        { t: 21.38, div: 'pedal', midi: 38, dur: 0.38, vel: 0.70 }, // D2
        { t: 21.76, div: 'pedal', midi: 45, dur: 0.38, vel: 0.72 }, // A2
        { t: 22.14, div: 'pedal', midi: 45, dur: 0.38, vel: 0.70 }, // A2
        { t: 22.52, div: 'pedal', midi: 41, dur: 0.38, vel: 0.74 }, // F2
        { t: 22.90, div: 'pedal', midi: 40, dur: 0.38, vel: 0.70 }, // E2
        { t: 23.28, div: 'pedal', midi: 38, dur: 0.38, vel: 0.72 }, // D2
        { t: 23.66, div: 'pedal', midi: 36, dur: 0.75, vel: 0.74 }, // C2

        // ===== FUGUE II: Second subject in semiquavers =====
        // m.19-22: Subject 2 - rapid, virtuosic
        { t: 24.40, div: 'great', midi: 69, dur: 0.19, vel: 0.78 }, // A4
        { t: 24.59, div: 'great', midi: 72, dur: 0.19, vel: 0.76 }, // C5
        { t: 24.78, div: 'great', midi: 69, dur: 0.19, vel: 0.78 }, // A4
        { t: 24.97, div: 'great', midi: 65, dur: 0.19, vel: 0.76 }, // F4
        { t: 25.16, div: 'great', midi: 62, dur: 0.19, vel: 0.78 }, // D4
        { t: 25.35, div: 'great', midi: 65, dur: 0.19, vel: 0.76 }, // F4
        { t: 25.54, div: 'great', midi: 69, dur: 0.19, vel: 0.78 }, // A4
        { t: 25.73, div: 'great', midi: 72, dur: 0.19, vel: 0.80 }, // C5
        { t: 25.92, div: 'great', midi: 74, dur: 0.19, vel: 0.78 }, // D5
        { t: 26.11, div: 'great', midi: 72, dur: 0.19, vel: 0.76 }, // C5
        { t: 26.30, div: 'great', midi: 69, dur: 0.19, vel: 0.78 }, // A4
        { t: 26.49, div: 'great', midi: 65, dur: 0.38, vel: 0.80 }, // F4
        // Subject 2 answer
        { t: 26.87, div: 'great', midi: 76, dur: 0.19, vel: 0.80 }, // E5
        { t: 27.06, div: 'great', midi: 79, dur: 0.19, vel: 0.78 }, // G5
        { t: 27.25, div: 'great', midi: 76, dur: 0.19, vel: 0.80 }, // E5
        { t: 27.44, div: 'great', midi: 72, dur: 0.19, vel: 0.78 }, // C5
        { t: 27.63, div: 'great', midi: 69, dur: 0.19, vel: 0.80 }, // A4
        { t: 27.82, div: 'great', midi: 72, dur: 0.19, vel: 0.78 }, // C5
        { t: 28.01, div: 'great', midi: 76, dur: 0.19, vel: 0.80 }, // E5
        { t: 28.20, div: 'great', midi: 79, dur: 0.19, vel: 0.82 }, // G5
        // Pedal continues subject 1 underneath
        { t: 24.40, div: 'pedal', midi: 45, dur: 0.38, vel: 0.75 }, // A2
        { t: 24.78, div: 'pedal', midi: 38, dur: 0.38, vel: 0.73 }, // D2
        { t: 25.16, div: 'pedal', midi: 45, dur: 0.38, vel: 0.75 }, // A2
        { t: 25.54, div: 'pedal', midi: 45, dur: 0.38, vel: 0.73 }, // A2
        { t: 25.92, div: 'pedal', midi: 41, dur: 0.38, vel: 0.77 }, // F2
        { t: 26.30, div: 'pedal', midi: 40, dur: 0.75, vel: 0.75 }, // E2

        // ===== STRETTO: Both subjects combined, building to climax =====
        // m.23-26: Full organ, subjects overlapping in stretto
        { t: 28.40, div: 'pedal', midi: 45, dur: 0.75, vel: 0.90 }, // A2
        { t: 28.40, div: 'pedal', midi: 33, dur: 0.75, vel: 0.88 }, // A1
        // Subject 1 in pedal augmentation
        { t: 28.40, div: 'great', midi: 69, dur: 0.19, vel: 0.90 }, // A4
        { t: 28.59, div: 'great', midi: 72, dur: 0.19, vel: 0.88 }, // C5
        { t: 28.78, div: 'great', midi: 76, dur: 0.19, vel: 0.90 }, // E5
        { t: 28.97, div: 'great', midi: 69, dur: 0.19, vel: 0.88 }, // A4
        { t: 29.16, div: 'great', midi: 65, dur: 0.19, vel: 0.90 }, // F4
        { t: 29.35, div: 'great', midi: 62, dur: 0.19, vel: 0.88 }, // D4
        { t: 29.54, div: 'great', midi: 69, dur: 0.19, vel: 0.90 }, // A4
        { t: 29.73, div: 'great', midi: 72, dur: 0.19, vel: 0.92 }, // C5
        // Swell with subject 1 in stretto
        { t: 28.80, div: 'swell', midi: 76, dur: 0.38, vel: 0.82 }, // E5
        { t: 29.18, div: 'swell', midi: 69, dur: 0.38, vel: 0.80 }, // A4
        { t: 29.56, div: 'swell', midi: 76, dur: 0.38, vel: 0.82 }, // E5
        { t: 29.94, div: 'swell', midi: 76, dur: 0.38, vel: 0.80 }, // E5
        { t: 30.32, div: 'swell', midi: 72, dur: 0.50, vel: 0.84 }, // C5
        // Final ALAIN statement fff
        { t: 30.80, div: 'great', midi: 69, dur: 0.38, vel: 0.95 }, // A4
        { t: 30.80, div: 'great', midi: 81, dur: 0.38, vel: 0.93 }, // A5
        { t: 31.18, div: 'great', midi: 62, dur: 0.38, vel: 0.93 }, // D4
        { t: 31.18, div: 'great', midi: 74, dur: 0.38, vel: 0.91 }, // D5
        { t: 31.56, div: 'great', midi: 69, dur: 0.38, vel: 0.95 }, // A4
        { t: 31.56, div: 'great', midi: 81, dur: 0.38, vel: 0.93 }, // A5
        { t: 31.94, div: 'great', midi: 69, dur: 0.38, vel: 0.93 }, // A4
        { t: 31.94, div: 'great', midi: 81, dur: 0.38, vel: 0.91 }, // A5
        { t: 32.32, div: 'great', midi: 65, dur: 0.75, vel: 0.97 }, // F4
        { t: 32.32, div: 'great', midi: 77, dur: 0.75, vel: 0.95 }, // F5
        // Final A minor chord
        { t: 33.07, div: 'great', midi: 57, dur: 2.0, vel: 0.98 },  // A3
        { t: 33.07, div: 'great', midi: 60, dur: 2.0, vel: 0.96 },  // C4
        { t: 33.07, div: 'great', midi: 64, dur: 2.0, vel: 0.96 },  // E4
        { t: 33.07, div: 'great', midi: 69, dur: 2.0, vel: 0.98 },  // A4
        { t: 33.07, div: 'great', midi: 72, dur: 2.0, vel: 0.96 },  // C5
        { t: 33.07, div: 'great', midi: 76, dur: 2.0, vel: 0.96 },  // E5
        { t: 33.07, div: 'swell', midi: 45, dur: 2.0, vel: 0.88 },  // A2
        { t: 33.07, div: 'swell', midi: 57, dur: 2.0, vel: 0.86 },  // A3
        { t: 33.07, div: 'pedal', midi: 45, dur: 2.5, vel: 0.98 },  // A2
        { t: 33.07, div: 'pedal', midi: 33, dur: 2.5, vel: 0.95 },  // A1
    ]
};

// ============================================================
// 4. Messiaen - Dieu parmi nous (La Nativité du Seigneur, IX)
// ============================================================
// Composed 1935. The final and most celebrated meditation of the
// cycle. Opens with 10 massive fanfare chords, then a tumultuous
// descending pedal theme representing God's descent to earth
// (using mode 4: 3-1-1-1-3-1-1-1 intervals). A serene middle
// section ("sweetness of union") leads to an ecstatic toccata
// celebrating the Incarnation. The pedal holds the true power
// in the toccata - the opening descent theme at full organ.
// ============================================================

const PIECE_MESSIAEN_DIEU = {
    title: "Dieu parmi nous",
    composer: "Olivier Messiaen",
    catalog: "La Nativité du Seigneur, IX",
    key: "F# major",
    tempo: 72,
    tempoChanges: [
        { t: 0, tempo: 72, label: "Lent et majestueux - Fanfare" },
        { t: 8.0, tempo: 66, label: "Modéré - Descent theme" },
        { t: 16.0, tempo: 52, label: "Très lent - Sweetness of union" },
        { t: 22.0, tempo: 132, label: "Toccata - Vif et joyeux" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-flute4', 'sw-nazard', 'sw-oboe8', 'sw-tremulant'],
        choir: ['ch-flute8', 'ch-spitzflute4', 'ch-quint'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== SECTION A: Ten fanfare chords - Lent et majestueux =====
        // m.1: Chord 1 - massive block chord, fff
        { t: 0,    div: 'great', midi: 66, dur: 0.8, vel: 0.95 },  // F#4
        { t: 0,    div: 'great', midi: 70, dur: 0.8, vel: 0.93 },  // Bb4/A#4
        { t: 0,    div: 'great', midi: 73, dur: 0.8, vel: 0.93 },  // C#5
        { t: 0,    div: 'great', midi: 78, dur: 0.8, vel: 0.95 },  // F#5
        { t: 0,    div: 'pedal', midi: 42, dur: 1.0, vel: 0.92 },  // F#2
        { t: 0,    div: 'pedal', midi: 30, dur: 1.0, vel: 0.90 },  // F#1
        // Chord 2
        { t: 1.0,  div: 'great', midi: 68, dur: 0.8, vel: 0.95 },  // G#4
        { t: 1.0,  div: 'great', midi: 72, dur: 0.8, vel: 0.93 },  // C5
        { t: 1.0,  div: 'great', midi: 75, dur: 0.8, vel: 0.93 },  // D#5
        { t: 1.0,  div: 'great', midi: 80, dur: 0.8, vel: 0.95 },  // G#5
        { t: 1.0,  div: 'pedal', midi: 44, dur: 1.0, vel: 0.92 },  // G#2
        // Chord 3
        { t: 2.0,  div: 'great', midi: 66, dur: 0.8, vel: 0.96 },  // F#4
        { t: 2.0,  div: 'great', midi: 69, dur: 0.8, vel: 0.94 },  // A4
        { t: 2.0,  div: 'great', midi: 73, dur: 0.8, vel: 0.94 },  // C#5
        { t: 2.0,  div: 'great', midi: 78, dur: 0.8, vel: 0.96 },  // F#5
        { t: 2.0,  div: 'pedal', midi: 42, dur: 1.0, vel: 0.93 },  // F#2
        // Chord 4
        { t: 3.0,  div: 'great', midi: 64, dur: 0.8, vel: 0.94 },  // E4
        { t: 3.0,  div: 'great', midi: 68, dur: 0.8, vel: 0.92 },  // G#4
        { t: 3.0,  div: 'great', midi: 71, dur: 0.8, vel: 0.92 },  // B4
        { t: 3.0,  div: 'great', midi: 76, dur: 0.8, vel: 0.94 },  // E5
        { t: 3.0,  div: 'pedal', midi: 40, dur: 1.0, vel: 0.92 },  // E2
        // Chord 5
        { t: 4.0,  div: 'great', midi: 66, dur: 0.8, vel: 0.97 },  // F#4
        { t: 4.0,  div: 'great', midi: 70, dur: 0.8, vel: 0.95 },  // A#4
        { t: 4.0,  div: 'great', midi: 73, dur: 0.8, vel: 0.95 },  // C#5
        { t: 4.0,  div: 'great', midi: 78, dur: 0.8, vel: 0.97 },  // F#5
        { t: 4.0,  div: 'pedal', midi: 42, dur: 1.0, vel: 0.94 },  // F#2
        { t: 4.0,  div: 'pedal', midi: 30, dur: 1.0, vel: 0.92 },  // F#1
        // Chords 6-8: rising intensity
        { t: 5.0,  div: 'great', midi: 71, dur: 0.6, vel: 0.95 },  // B4
        { t: 5.0,  div: 'great', midi: 75, dur: 0.6, vel: 0.93 },  // D#5
        { t: 5.0,  div: 'great', midi: 78, dur: 0.6, vel: 0.93 },  // F#5
        { t: 5.0,  div: 'great', midi: 83, dur: 0.6, vel: 0.95 },  // B5
        { t: 5.0,  div: 'pedal', midi: 47, dur: 0.8, vel: 0.93 },  // B2
        { t: 5.8,  div: 'great', midi: 73, dur: 0.6, vel: 0.96 },  // C#5
        { t: 5.8,  div: 'great', midi: 77, dur: 0.6, vel: 0.94 },  // F5
        { t: 5.8,  div: 'great', midi: 80, dur: 0.6, vel: 0.94 },  // G#5
        { t: 5.8,  div: 'great', midi: 85, dur: 0.6, vel: 0.96 },  // C#6
        { t: 5.8,  div: 'pedal', midi: 49, dur: 0.8, vel: 0.93 },  // C#3
        { t: 6.6,  div: 'great', midi: 75, dur: 0.6, vel: 0.97 },  // D#5
        { t: 6.6,  div: 'great', midi: 78, dur: 0.6, vel: 0.95 },  // F#5
        { t: 6.6,  div: 'great', midi: 82, dur: 0.6, vel: 0.95 },  // A#5
        { t: 6.6,  div: 'great', midi: 87, dur: 0.6, vel: 0.97 },  // D#6
        { t: 6.6,  div: 'pedal', midi: 51, dur: 0.8, vel: 0.94 },  // D#3
        // Chords 9-10: climactic
        { t: 7.4,  div: 'great', midi: 78, dur: 0.8, vel: 0.98 },  // F#5
        { t: 7.4,  div: 'great', midi: 82, dur: 0.8, vel: 0.96 },  // A#5
        { t: 7.4,  div: 'great', midi: 85, dur: 0.8, vel: 0.96 },  // C#6
        { t: 7.4,  div: 'great', midi: 90, dur: 0.8, vel: 0.98 },  // F#6
        { t: 7.4,  div: 'pedal', midi: 42, dur: 1.0, vel: 0.96 },  // F#2
        { t: 7.4,  div: 'pedal', midi: 30, dur: 1.0, vel: 0.94 },  // F#1

        // ===== SECTION B: Descending theme - God descends to earth =====
        // m.11-14: Mode 4 descent in pedals, intervals 3-1-1-1-3-1-1-1
        { t: 8.5,  div: 'pedal', midi: 54, dur: 0.45, vel: 0.90 },  // F#3
        { t: 8.95, div: 'pedal', midi: 51, dur: 0.45, vel: 0.88 },  // D#3 (-3)
        { t: 9.40, div: 'pedal', midi: 50, dur: 0.45, vel: 0.90 },  // D3  (-1)
        { t: 9.85, div: 'pedal', midi: 49, dur: 0.45, vel: 0.88 },  // C#3 (-1)
        { t: 10.30, div: 'pedal', midi: 48, dur: 0.45, vel: 0.90 }, // C3  (-1)
        { t: 10.75, div: 'pedal', midi: 45, dur: 0.45, vel: 0.88 }, // A2  (-3)
        { t: 11.20, div: 'pedal', midi: 44, dur: 0.45, vel: 0.90 }, // G#2 (-1)
        { t: 11.65, div: 'pedal', midi: 43, dur: 0.45, vel: 0.88 }, // G2  (-1)
        { t: 12.10, div: 'pedal', midi: 42, dur: 0.45, vel: 0.90 }, // F#2 (-1)
        { t: 12.55, div: 'pedal', midi: 39, dur: 0.45, vel: 0.88 }, // D#2 (-3)
        { t: 13.00, div: 'pedal', midi: 38, dur: 0.45, vel: 0.90 }, // D2  (-1)
        { t: 13.45, div: 'pedal', midi: 37, dur: 0.45, vel: 0.88 }, // C#2 (-1)
        { t: 13.90, div: 'pedal', midi: 36, dur: 0.90, vel: 0.92 }, // C2  (-1)
        // Manuals: massive chords punctuating the descent
        { t: 8.5,  div: 'great', midi: 66, dur: 0.90, vel: 0.88 },  // F#4
        { t: 8.5,  div: 'great', midi: 73, dur: 0.90, vel: 0.86 },  // C#5
        { t: 8.5,  div: 'great', midi: 78, dur: 0.90, vel: 0.88 },  // F#5
        { t: 9.40, div: 'great', midi: 62, dur: 0.90, vel: 0.88 },  // D4
        { t: 9.40, div: 'great', midi: 69, dur: 0.90, vel: 0.86 },  // A4
        { t: 9.40, div: 'great', midi: 74, dur: 0.90, vel: 0.88 },  // D5
        { t: 10.30, div: 'great', midi: 60, dur: 0.90, vel: 0.88 }, // C4
        { t: 10.30, div: 'great', midi: 67, dur: 0.90, vel: 0.86 }, // G4
        { t: 10.30, div: 'great', midi: 72, dur: 0.90, vel: 0.88 }, // C5
        { t: 11.20, div: 'great', midi: 56, dur: 0.90, vel: 0.86 }, // G#3
        { t: 11.20, div: 'great', midi: 63, dur: 0.90, vel: 0.84 }, // D#4
        { t: 11.20, div: 'great', midi: 68, dur: 0.90, vel: 0.86 }, // G#4
        { t: 12.10, div: 'great', midi: 54, dur: 0.90, vel: 0.88 }, // F#3
        { t: 12.10, div: 'great', midi: 61, dur: 0.90, vel: 0.86 }, // C#4
        { t: 12.10, div: 'great', midi: 66, dur: 0.90, vel: 0.88 }, // F#4
        { t: 13.00, div: 'great', midi: 50, dur: 1.80, vel: 0.90 }, // D3
        { t: 13.00, div: 'great', midi: 57, dur: 1.80, vel: 0.88 }, // A3
        { t: 13.00, div: 'great', midi: 62, dur: 1.80, vel: 0.90 }, // D4

        // ===== SECTION C: Très lent - Sweetness of union =====
        // m.15-18: Serene, ethereal - swell with tremulant
        { t: 16.0, div: 'swell', midi: 78, dur: 1.5, vel: 0.50 },   // F#5
        { t: 16.0, div: 'swell', midi: 73, dur: 1.5, vel: 0.48 },   // C#5
        { t: 16.0, div: 'swell', midi: 66, dur: 1.5, vel: 0.48 },   // F#4
        { t: 17.5, div: 'swell', midi: 76, dur: 1.5, vel: 0.52 },   // E5
        { t: 17.5, div: 'swell', midi: 71, dur: 1.5, vel: 0.50 },   // B4
        { t: 17.5, div: 'swell', midi: 64, dur: 1.5, vel: 0.50 },   // E4
        { t: 19.0, div: 'swell', midi: 73, dur: 1.5, vel: 0.48 },   // C#5
        { t: 19.0, div: 'swell', midi: 69, dur: 1.5, vel: 0.46 },   // A4
        { t: 19.0, div: 'swell', midi: 61, dur: 1.5, vel: 0.46 },   // C#4
        { t: 20.5, div: 'swell', midi: 78, dur: 1.5, vel: 0.52 },   // F#5
        { t: 20.5, div: 'swell', midi: 73, dur: 1.5, vel: 0.50 },   // C#5
        { t: 20.5, div: 'swell', midi: 66, dur: 1.5, vel: 0.50 },   // F#4
        // Gentle pedal
        { t: 16.0, div: 'pedal', midi: 42, dur: 3.0, vel: 0.40 },   // F#2
        { t: 19.0, div: 'pedal', midi: 45, dur: 3.0, vel: 0.40 },   // A2
        // Choir: gentle bird-song fragments (Messiaen's characteristic birdsong)
        { t: 16.5, div: 'choir', midi: 85, dur: 0.15, vel: 0.35 },  // C#6
        { t: 16.75, div: 'choir', midi: 87, dur: 0.10, vel: 0.33 }, // D#6
        { t: 16.90, div: 'choir', midi: 85, dur: 0.20, vel: 0.35 }, // C#6
        { t: 18.0, div: 'choir', midi: 90, dur: 0.15, vel: 0.33 },  // F#6
        { t: 18.20, div: 'choir', midi: 87, dur: 0.10, vel: 0.31 }, // D#6
        { t: 18.35, div: 'choir', midi: 85, dur: 0.25, vel: 0.33 }, // C#6
        { t: 19.5, div: 'choir', midi: 82, dur: 0.15, vel: 0.35 },  // A#5
        { t: 19.70, div: 'choir', midi: 85, dur: 0.10, vel: 0.33 }, // C#6
        { t: 19.85, div: 'choir', midi: 82, dur: 0.20, vel: 0.35 }, // A#5

        // ===== SECTION D: Toccata - Vif et joyeux =====
        // m.19-22: Explosive toccata, manual figuration with pedal theme
        // Pedal: descent theme returns at full organ fff
        { t: 22.0, div: 'pedal', midi: 54, dur: 0.23, vel: 0.95 },  // F#3
        { t: 22.23, div: 'pedal', midi: 51, dur: 0.23, vel: 0.93 }, // D#3
        { t: 22.46, div: 'pedal', midi: 50, dur: 0.23, vel: 0.95 }, // D3
        { t: 22.69, div: 'pedal', midi: 49, dur: 0.23, vel: 0.93 }, // C#3
        { t: 22.92, div: 'pedal', midi: 48, dur: 0.23, vel: 0.95 }, // C3
        { t: 23.15, div: 'pedal', midi: 45, dur: 0.23, vel: 0.93 }, // A2
        { t: 23.38, div: 'pedal', midi: 44, dur: 0.23, vel: 0.95 }, // G#2
        { t: 23.61, div: 'pedal', midi: 42, dur: 0.46, vel: 0.97 }, // F#2
        // Toccata figuration - rapid triplets on great
        { t: 22.0,  div: 'great', midi: 78, dur: 0.11, vel: 0.92 }, // F#5
        { t: 22.11, div: 'great', midi: 73, dur: 0.11, vel: 0.90 }, // C#5
        { t: 22.22, div: 'great', midi: 78, dur: 0.11, vel: 0.92 }, // F#5
        { t: 22.33, div: 'great', midi: 82, dur: 0.11, vel: 0.94 }, // A#5
        { t: 22.44, div: 'great', midi: 78, dur: 0.11, vel: 0.92 }, // F#5
        { t: 22.55, div: 'great', midi: 73, dur: 0.11, vel: 0.90 }, // C#5
        { t: 22.66, div: 'great', midi: 78, dur: 0.11, vel: 0.92 }, // F#5
        { t: 22.77, div: 'great', midi: 85, dur: 0.11, vel: 0.94 }, // C#6
        { t: 22.88, div: 'great', midi: 78, dur: 0.11, vel: 0.92 }, // F#5
        { t: 22.99, div: 'great', midi: 73, dur: 0.11, vel: 0.90 }, // C#5
        { t: 23.10, div: 'great', midi: 66, dur: 0.11, vel: 0.92 }, // F#4
        { t: 23.21, div: 'great', midi: 73, dur: 0.11, vel: 0.90 }, // C#5
        // Second wave of toccata
        { t: 23.32, div: 'great', midi: 74, dur: 0.11, vel: 0.92 }, // D5
        { t: 23.43, div: 'great', midi: 69, dur: 0.11, vel: 0.90 }, // A4
        { t: 23.54, div: 'great', midi: 74, dur: 0.11, vel: 0.92 }, // D5
        { t: 23.65, div: 'great', midi: 78, dur: 0.11, vel: 0.94 }, // F#5
        { t: 23.76, div: 'great', midi: 74, dur: 0.11, vel: 0.92 }, // D5
        { t: 23.87, div: 'great', midi: 69, dur: 0.11, vel: 0.90 }, // A4
        // m.23-26: Toccata intensifies, Messiaen rhythmic patterns
        { t: 24.0, div: 'pedal', midi: 42, dur: 0.23, vel: 0.95 },  // F#2
        { t: 24.23, div: 'pedal', midi: 45, dur: 0.23, vel: 0.93 }, // A2
        { t: 24.46, div: 'pedal', midi: 49, dur: 0.23, vel: 0.95 }, // C#3
        { t: 24.69, div: 'pedal', midi: 54, dur: 0.46, vel: 0.97 }, // F#3
        // Rapid figuration building
        { t: 24.0,  div: 'great', midi: 66, dur: 0.11, vel: 0.93 }, // F#4
        { t: 24.11, div: 'great', midi: 70, dur: 0.11, vel: 0.91 }, // A#4
        { t: 24.22, div: 'great', midi: 73, dur: 0.11, vel: 0.93 }, // C#5
        { t: 24.33, div: 'great', midi: 78, dur: 0.11, vel: 0.95 }, // F#5
        { t: 24.44, div: 'great', midi: 82, dur: 0.11, vel: 0.93 }, // A#5
        { t: 24.55, div: 'great', midi: 85, dur: 0.11, vel: 0.95 }, // C#6
        { t: 24.66, div: 'great', midi: 90, dur: 0.11, vel: 0.97 }, // F#6
        { t: 24.77, div: 'great', midi: 85, dur: 0.11, vel: 0.95 }, // C#6
        { t: 24.88, div: 'great', midi: 82, dur: 0.11, vel: 0.93 }, // A#5
        { t: 24.99, div: 'great', midi: 78, dur: 0.11, vel: 0.95 }, // F#5
        { t: 25.10, div: 'great', midi: 73, dur: 0.11, vel: 0.93 }, // C#5
        { t: 25.21, div: 'great', midi: 70, dur: 0.11, vel: 0.91 }, // A#4
        // Final blazing F# major chord
        { t: 25.50, div: 'great', midi: 66, dur: 2.0, vel: 0.98 },  // F#4
        { t: 25.50, div: 'great', midi: 70, dur: 2.0, vel: 0.96 },  // A#4
        { t: 25.50, div: 'great', midi: 73, dur: 2.0, vel: 0.96 },  // C#5
        { t: 25.50, div: 'great', midi: 78, dur: 2.0, vel: 0.98 },  // F#5
        { t: 25.50, div: 'great', midi: 82, dur: 2.0, vel: 0.96 },  // A#5
        { t: 25.50, div: 'great', midi: 85, dur: 2.0, vel: 0.96 },  // C#6
        { t: 25.50, div: 'great', midi: 90, dur: 2.0, vel: 0.98 },  // F#6
        { t: 25.50, div: 'swell', midi: 54, dur: 2.0, vel: 0.90 },  // F#3
        { t: 25.50, div: 'swell', midi: 58, dur: 2.0, vel: 0.88 },  // A#3
        { t: 25.50, div: 'swell', midi: 61, dur: 2.0, vel: 0.88 },  // C#4
        { t: 25.50, div: 'pedal', midi: 42, dur: 2.5, vel: 0.98 },  // F#2
        { t: 25.50, div: 'pedal', midi: 30, dur: 2.5, vel: 0.95 },  // F#1
    ]
};

// ============================================================
// 5. Langlais - Te Deum (Trois Paraphrases Grégoriennes, Op. 5)
// ============================================================
// Composed 1934. Joyous paean of praise - rhapsodic treatment of
// the 13th-century Te Deum hymn. Extended middle section based on
// "In Thee have I trusted." Brilliant toccata character throughout.
// Langlais was blind from age 2, yet became one of the greatest
// French organists. Triumphant C major conclusion.
// ============================================================

const PIECE_LANGLAIS_TE_DEUM = {
    title: "Hymne d'action de grâce 'Te Deum'",
    composer: "Jean Langlais",
    catalog: "Op. 5/III",
    key: "C major",
    tempo: 120,
    tempoChanges: [
        { t: 0, tempo: 120, label: "Allegro - Te Deum theme" },
        { t: 12.0, tempo: 72, label: "Andante - In Thee have I trusted" },
        { t: 19.0, tempo: 132, label: "Vivace - Triumphant return" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== SECTION A: Te Deum chant theme - brilliant, ff =====
        // m.1-4: Te Deum laudamus chant: C-C-D-C-D-E-E (traditional intonation)
        { t: 0,    div: 'great', midi: 72, dur: 0.25, vel: 0.90 },  // C5
        { t: 0.25, div: 'great', midi: 72, dur: 0.25, vel: 0.88 },  // C5
        { t: 0.50, div: 'great', midi: 74, dur: 0.25, vel: 0.90 },  // D5
        { t: 0.75, div: 'great', midi: 72, dur: 0.25, vel: 0.88 },  // C5
        { t: 1.00, div: 'great', midi: 74, dur: 0.25, vel: 0.90 },  // D5
        { t: 1.25, div: 'great', midi: 76, dur: 0.50, vel: 0.92 },  // E5
        { t: 1.75, div: 'great', midi: 76, dur: 0.50, vel: 0.90 },  // E5
        // Harmonized: chords underneath
        { t: 0,    div: 'great', midi: 60, dur: 0.50, vel: 0.85 },  // C4
        { t: 0,    div: 'great', midi: 64, dur: 0.50, vel: 0.83 },  // E4
        { t: 0,    div: 'great', midi: 67, dur: 0.50, vel: 0.83 },  // G4
        { t: 0.50, div: 'great', midi: 62, dur: 0.50, vel: 0.85 },  // D4
        { t: 0.50, div: 'great', midi: 66, dur: 0.50, vel: 0.83 },  // F#4
        { t: 0.50, div: 'great', midi: 69, dur: 0.50, vel: 0.83 },  // A4
        { t: 1.00, div: 'great', midi: 62, dur: 0.25, vel: 0.85 },  // D4
        { t: 1.00, div: 'great', midi: 67, dur: 0.25, vel: 0.83 },  // G4
        { t: 1.25, div: 'great', midi: 64, dur: 0.50, vel: 0.87 },  // E4
        { t: 1.25, div: 'great', midi: 67, dur: 0.50, vel: 0.85 },  // G4
        { t: 1.75, div: 'great', midi: 60, dur: 0.50, vel: 0.85 },  // C4
        { t: 1.75, div: 'great', midi: 64, dur: 0.50, vel: 0.83 },  // E4
        // Pedal
        { t: 0,    div: 'pedal', midi: 48, dur: 0.50, vel: 0.88 },  // C3
        { t: 0,    div: 'pedal', midi: 36, dur: 0.50, vel: 0.85 },  // C2
        { t: 0.50, div: 'pedal', midi: 50, dur: 0.50, vel: 0.88 },  // D3
        { t: 1.00, div: 'pedal', midi: 50, dur: 0.25, vel: 0.86 },  // D3
        { t: 1.25, div: 'pedal', midi: 48, dur: 1.0, vel: 0.88 },   // C3

        // m.5-8: Te confitemur - continuation of chant, building
        { t: 2.25, div: 'great', midi: 76, dur: 0.25, vel: 0.90 },  // E5
        { t: 2.50, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },  // D5
        { t: 2.75, div: 'great', midi: 72, dur: 0.25, vel: 0.90 },  // C5
        { t: 3.00, div: 'great', midi: 74, dur: 0.25, vel: 0.88 },  // D5
        { t: 3.25, div: 'great', midi: 76, dur: 0.25, vel: 0.92 },  // E5
        { t: 3.50, div: 'great', midi: 77, dur: 0.50, vel: 0.93 },  // F5
        { t: 4.00, div: 'great', midi: 76, dur: 0.50, vel: 0.90 },  // E5
        // Harmony
        { t: 2.25, div: 'great', midi: 64, dur: 0.50, vel: 0.85 },  // E4
        { t: 2.25, div: 'great', midi: 67, dur: 0.50, vel: 0.83 },  // G4
        { t: 2.75, div: 'great', midi: 60, dur: 0.50, vel: 0.85 },  // C4
        { t: 2.75, div: 'great', midi: 64, dur: 0.50, vel: 0.83 },  // E4
        { t: 3.25, div: 'great', midi: 64, dur: 0.25, vel: 0.87 },  // E4
        { t: 3.25, div: 'great', midi: 67, dur: 0.25, vel: 0.85 },  // G4
        { t: 3.50, div: 'great', midi: 65, dur: 0.50, vel: 0.87 },  // F4
        { t: 3.50, div: 'great', midi: 69, dur: 0.50, vel: 0.85 },  // A4
        { t: 4.00, div: 'great', midi: 64, dur: 0.50, vel: 0.85 },  // E4
        { t: 4.00, div: 'great', midi: 67, dur: 0.50, vel: 0.83 },  // G4
        { t: 2.25, div: 'pedal', midi: 48, dur: 0.50, vel: 0.86 },  // C3
        { t: 2.75, div: 'pedal', midi: 48, dur: 0.50, vel: 0.86 },  // C3
        { t: 3.25, div: 'pedal', midi: 48, dur: 0.25, vel: 0.88 },  // C3
        { t: 3.50, div: 'pedal', midi: 41, dur: 0.50, vel: 0.88 },  // F2
        { t: 4.00, div: 'pedal', midi: 48, dur: 0.50, vel: 0.86 },  // C3

        // m.9-12: Toccata-like figuration develops the chant
        { t: 4.50, div: 'great', midi: 72, dur: 0.13, vel: 0.88 },  // C5
        { t: 4.63, div: 'great', midi: 74, dur: 0.13, vel: 0.86 },  // D5
        { t: 4.76, div: 'great', midi: 76, dur: 0.13, vel: 0.88 },  // E5
        { t: 4.89, div: 'great', midi: 79, dur: 0.13, vel: 0.90 },  // G5
        { t: 5.02, div: 'great', midi: 76, dur: 0.13, vel: 0.88 },  // E5
        { t: 5.15, div: 'great', midi: 74, dur: 0.13, vel: 0.86 },  // D5
        { t: 5.28, div: 'great', midi: 72, dur: 0.13, vel: 0.88 },  // C5
        { t: 5.41, div: 'great', midi: 74, dur: 0.13, vel: 0.86 },  // D5
        { t: 5.54, div: 'great', midi: 76, dur: 0.13, vel: 0.88 },  // E5
        { t: 5.67, div: 'great', midi: 79, dur: 0.13, vel: 0.90 },  // G5
        { t: 5.80, div: 'great', midi: 84, dur: 0.13, vel: 0.92 },  // C6
        { t: 5.93, div: 'great', midi: 79, dur: 0.13, vel: 0.90 },  // G5
        { t: 4.50, div: 'pedal', midi: 48, dur: 0.75, vel: 0.88 },  // C3
        { t: 5.25, div: 'pedal', midi: 43, dur: 0.75, vel: 0.86 },  // G2
        // Second toccata figure, G major area
        { t: 6.06, div: 'great', midi: 79, dur: 0.13, vel: 0.90 },  // G5
        { t: 6.19, div: 'great', midi: 76, dur: 0.13, vel: 0.88 },  // E5
        { t: 6.32, div: 'great', midi: 74, dur: 0.13, vel: 0.86 },  // D5
        { t: 6.45, div: 'great', midi: 72, dur: 0.13, vel: 0.88 },  // C5
        { t: 6.58, div: 'great', midi: 71, dur: 0.13, vel: 0.86 },  // B4
        { t: 6.71, div: 'great', midi: 72, dur: 0.13, vel: 0.88 },  // C5
        { t: 6.84, div: 'great', midi: 74, dur: 0.13, vel: 0.90 },  // D5
        { t: 6.97, div: 'great', midi: 76, dur: 0.13, vel: 0.88 },  // E5
        { t: 7.10, div: 'great', midi: 79, dur: 0.13, vel: 0.90 },  // G5
        { t: 7.23, div: 'great', midi: 76, dur: 0.13, vel: 0.88 },  // E5
        { t: 7.36, div: 'great', midi: 74, dur: 0.13, vel: 0.86 },  // D5
        { t: 7.49, div: 'great', midi: 71, dur: 0.13, vel: 0.88 },  // B4
        { t: 6.00, div: 'pedal', midi: 43, dur: 0.75, vel: 0.88 },  // G2
        { t: 6.75, div: 'pedal', midi: 48, dur: 0.75, vel: 0.86 },  // C3
        // Chant returns in bold octaves
        { t: 7.62, div: 'great', midi: 72, dur: 0.25, vel: 0.92 },  // C5
        { t: 7.62, div: 'great', midi: 84, dur: 0.25, vel: 0.94 },  // C6
        { t: 7.87, div: 'great', midi: 72, dur: 0.25, vel: 0.90 },  // C5
        { t: 7.87, div: 'great', midi: 84, dur: 0.25, vel: 0.92 },  // C6
        { t: 8.12, div: 'great', midi: 74, dur: 0.25, vel: 0.92 },  // D5
        { t: 8.12, div: 'great', midi: 86, dur: 0.25, vel: 0.94 },  // D6
        { t: 8.37, div: 'great', midi: 72, dur: 0.25, vel: 0.90 },  // C5
        { t: 8.62, div: 'great', midi: 74, dur: 0.25, vel: 0.92 },  // D5
        { t: 8.87, div: 'great', midi: 76, dur: 0.50, vel: 0.94 },  // E5
        { t: 8.87, div: 'great', midi: 88, dur: 0.50, vel: 0.96 },  // E6
        { t: 7.62, div: 'pedal', midi: 48, dur: 0.50, vel: 0.90 },  // C3
        { t: 7.62, div: 'pedal', midi: 36, dur: 0.50, vel: 0.88 },  // C2
        { t: 8.12, div: 'pedal', midi: 50, dur: 0.50, vel: 0.90 },  // D3
        { t: 8.62, div: 'pedal', midi: 50, dur: 0.25, vel: 0.88 },  // D3
        { t: 8.87, div: 'pedal', midi: 48, dur: 0.50, vel: 0.90 },  // C3

        // m.13-16: Further elaboration - building momentum
        { t: 9.37, div: 'great', midi: 76, dur: 0.13, vel: 0.90 },  // E5
        { t: 9.50, div: 'great', midi: 79, dur: 0.13, vel: 0.88 },  // G5
        { t: 9.63, div: 'great', midi: 84, dur: 0.13, vel: 0.92 },  // C6
        { t: 9.76, div: 'great', midi: 79, dur: 0.13, vel: 0.90 },  // G5
        { t: 9.89, div: 'great', midi: 76, dur: 0.13, vel: 0.88 },  // E5
        { t: 10.02, div: 'great', midi: 72, dur: 0.13, vel: 0.90 }, // C5
        { t: 10.15, div: 'great', midi: 74, dur: 0.13, vel: 0.88 }, // D5
        { t: 10.28, div: 'great', midi: 76, dur: 0.13, vel: 0.90 }, // E5
        { t: 10.41, div: 'great', midi: 77, dur: 0.13, vel: 0.92 }, // F5
        { t: 10.54, div: 'great', midi: 76, dur: 0.13, vel: 0.90 }, // E5
        { t: 10.67, div: 'great', midi: 74, dur: 0.13, vel: 0.88 }, // D5
        { t: 10.80, div: 'great', midi: 72, dur: 0.25, vel: 0.90 }, // C5
        { t: 9.37, div: 'pedal', midi: 48, dur: 0.75, vel: 0.88 },  // C3
        { t: 10.12, div: 'pedal', midi: 41, dur: 0.75, vel: 0.86 }, // F2
        // Swell adds warmth
        { t: 9.37, div: 'swell', midi: 60, dur: 1.5, vel: 0.70 },   // C4
        { t: 9.37, div: 'swell', midi: 64, dur: 1.5, vel: 0.68 },   // E4
        { t: 9.37, div: 'swell', midi: 67, dur: 1.5, vel: 0.68 },   // G4
        { t: 10.87, div: 'swell', midi: 60, dur: 1.0, vel: 0.72 },  // C4
        { t: 10.87, div: 'swell', midi: 65, dur: 1.0, vel: 0.70 },  // F4
        { t: 10.87, div: 'swell', midi: 69, dur: 1.0, vel: 0.70 },  // A4

        // ===== SECTION B: Andante - "In Thee have I trusted" =====
        // m.17-20: Contemplative, swell with tremulant
        { t: 12.0, div: 'swell', midi: 72, dur: 0.75, vel: 0.58 },  // C5
        { t: 12.75, div: 'swell', midi: 71, dur: 0.75, vel: 0.56 }, // B4
        { t: 13.50, div: 'swell', midi: 72, dur: 0.50, vel: 0.58 }, // C5
        { t: 14.00, div: 'swell', midi: 74, dur: 0.50, vel: 0.56 }, // D5
        { t: 14.50, div: 'swell', midi: 76, dur: 1.0, vel: 0.60 },  // E5
        { t: 12.0, div: 'swell', midi: 60, dur: 1.5, vel: 0.50 },   // C4
        { t: 12.0, div: 'swell', midi: 64, dur: 1.5, vel: 0.48 },   // E4
        { t: 13.50, div: 'swell', midi: 60, dur: 1.0, vel: 0.50 },  // C4
        { t: 13.50, div: 'swell', midi: 67, dur: 1.0, vel: 0.48 },  // G4
        { t: 14.50, div: 'swell', midi: 64, dur: 1.0, vel: 0.52 },  // E4
        { t: 14.50, div: 'swell', midi: 67, dur: 1.0, vel: 0.50 },  // G4
        { t: 12.0, div: 'pedal', midi: 48, dur: 1.5, vel: 0.50 },   // C3
        { t: 13.50, div: 'pedal', midi: 48, dur: 1.0, vel: 0.48 },  // C3
        { t: 14.50, div: 'pedal', midi: 48, dur: 1.0, vel: 0.50 },  // C3
        // Chromatic harmonies floating
        { t: 15.50, div: 'swell', midi: 74, dur: 0.75, vel: 0.55 }, // D5
        { t: 16.25, div: 'swell', midi: 72, dur: 0.75, vel: 0.53 }, // C5
        { t: 17.00, div: 'swell', midi: 71, dur: 0.75, vel: 0.55 }, // B4
        { t: 17.75, div: 'swell', midi: 72, dur: 1.0, vel: 0.58 },  // C5
        { t: 15.50, div: 'swell', midi: 62, dur: 0.75, vel: 0.48 }, // D4
        { t: 15.50, div: 'swell', midi: 66, dur: 0.75, vel: 0.46 }, // F#4
        { t: 16.25, div: 'swell', midi: 60, dur: 0.75, vel: 0.48 }, // C4
        { t: 16.25, div: 'swell', midi: 64, dur: 0.75, vel: 0.46 }, // E4
        { t: 17.00, div: 'swell', midi: 59, dur: 1.75, vel: 0.50 }, // B3
        { t: 17.00, div: 'swell', midi: 62, dur: 1.75, vel: 0.48 }, // D4
        { t: 15.50, div: 'pedal', midi: 50, dur: 0.75, vel: 0.48 }, // D3
        { t: 16.25, div: 'pedal', midi: 48, dur: 0.75, vel: 0.46 }, // C3
        { t: 17.00, div: 'pedal', midi: 43, dur: 1.75, vel: 0.48 }, // G2

        // ===== SECTION A': Vivace - Triumphant return of Te Deum =====
        // m.21-24: Full organ, blazing return of chant in great
        { t: 19.0, div: 'great', midi: 72, dur: 0.19, vel: 0.93 },  // C5
        { t: 19.19, div: 'great', midi: 72, dur: 0.19, vel: 0.91 }, // C5
        { t: 19.38, div: 'great', midi: 74, dur: 0.19, vel: 0.93 }, // D5
        { t: 19.57, div: 'great', midi: 72, dur: 0.19, vel: 0.91 }, // C5
        { t: 19.76, div: 'great', midi: 74, dur: 0.19, vel: 0.93 }, // D5
        { t: 19.95, div: 'great', midi: 76, dur: 0.38, vel: 0.95 }, // E5
        { t: 20.33, div: 'great', midi: 76, dur: 0.38, vel: 0.93 }, // E5
        // Full harmony underneath
        { t: 19.0, div: 'great', midi: 60, dur: 0.38, vel: 0.88 },  // C4
        { t: 19.0, div: 'great', midi: 64, dur: 0.38, vel: 0.86 },  // E4
        { t: 19.0, div: 'great', midi: 67, dur: 0.38, vel: 0.86 },  // G4
        { t: 19.38, div: 'great', midi: 62, dur: 0.38, vel: 0.88 }, // D4
        { t: 19.38, div: 'great', midi: 67, dur: 0.38, vel: 0.86 }, // G4
        { t: 19.76, div: 'great', midi: 62, dur: 0.19, vel: 0.88 }, // D4
        { t: 19.76, div: 'great', midi: 67, dur: 0.19, vel: 0.86 }, // G4
        { t: 19.95, div: 'great', midi: 64, dur: 0.76, vel: 0.90 }, // E4
        { t: 19.95, div: 'great', midi: 67, dur: 0.76, vel: 0.88 }, // G4
        { t: 19.0, div: 'pedal', midi: 48, dur: 0.38, vel: 0.92 },  // C3
        { t: 19.0, div: 'pedal', midi: 36, dur: 0.38, vel: 0.90 },  // C2
        { t: 19.38, div: 'pedal', midi: 50, dur: 0.38, vel: 0.90 }, // D3
        { t: 19.76, div: 'pedal', midi: 43, dur: 0.19, vel: 0.90 }, // G2
        { t: 19.95, div: 'pedal', midi: 48, dur: 0.76, vel: 0.92 }, // C3
        // Blazing scale to final chord
        { t: 20.71, div: 'great', midi: 72, dur: 0.10, vel: 0.93 }, // C5
        { t: 20.81, div: 'great', midi: 74, dur: 0.10, vel: 0.91 }, // D5
        { t: 20.91, div: 'great', midi: 76, dur: 0.10, vel: 0.93 }, // E5
        { t: 21.01, div: 'great', midi: 77, dur: 0.10, vel: 0.91 }, // F5
        { t: 21.11, div: 'great', midi: 79, dur: 0.10, vel: 0.93 }, // G5
        { t: 21.21, div: 'great', midi: 81, dur: 0.10, vel: 0.91 }, // A5
        { t: 21.31, div: 'great', midi: 83, dur: 0.10, vel: 0.93 }, // B5
        { t: 21.41, div: 'great', midi: 84, dur: 0.10, vel: 0.95 }, // C6
        // Final C major chord - fff, full organ
        { t: 21.60, div: 'great', midi: 60, dur: 2.0, vel: 0.98 },  // C4
        { t: 21.60, div: 'great', midi: 64, dur: 2.0, vel: 0.96 },  // E4
        { t: 21.60, div: 'great', midi: 67, dur: 2.0, vel: 0.96 },  // G4
        { t: 21.60, div: 'great', midi: 72, dur: 2.0, vel: 0.98 },  // C5
        { t: 21.60, div: 'great', midi: 76, dur: 2.0, vel: 0.96 },  // E5
        { t: 21.60, div: 'great', midi: 79, dur: 2.0, vel: 0.96 },  // G5
        { t: 21.60, div: 'great', midi: 84, dur: 2.0, vel: 0.98 },  // C6
        { t: 21.60, div: 'swell', midi: 48, dur: 2.0, vel: 0.88 },  // C3
        { t: 21.60, div: 'swell', midi: 52, dur: 2.0, vel: 0.86 },  // E3
        { t: 21.60, div: 'swell', midi: 55, dur: 2.0, vel: 0.86 },  // G3
        { t: 21.60, div: 'pedal', midi: 48, dur: 2.5, vel: 0.98 },  // C3
        { t: 21.60, div: 'pedal', midi: 36, dur: 2.5, vel: 0.95 },  // C2
    ]
};

// ============================================================
// 6. Dupré - Prelude and Fugue in G minor, Op. 7/3
// ============================================================
// Composed 1914 while preparing for the Grand Prix de Rome.
// The Prelude is a very fast scherzando marked ppp, with the
// melody presented in chorale-like phrases in the pedal while
// vivace figuration continues on manuals. The Fugue has a
// jig-like compound-time character. After exposition in 4 voices
// (pedal entering last), the chorale theme from prelude returns
// on pedal while manuals continue the fugue. Fearful technical
// difficulties. Dedicated to Joseph Boulnois.
// ============================================================

const PIECE_DUPRE_FUGUE_G = {
    title: "Prelude and Fugue in G minor, Op. 7/3",
    composer: "Marcel Dupré",
    catalog: "Op. 7/3",
    key: "G minor",
    tempo: 144,
    tempoChanges: [
        { t: 0, tempo: 144, label: "Vivace - Prelude scherzando" },
        { t: 14.0, tempo: 126, label: "Vif - Fugue (compound time)" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16']
    },
    events: [
        // ===== PRELUDE: Scherzando vivace, ppp =====
        // m.1-4: Rapid 16th-note figuration on manuals, very soft
        // G minor broken chords, whisper-light
        { t: 0,    div: 'swell', midi: 67, dur: 0.10, vel: 0.35 },  // G4
        { t: 0.10, div: 'swell', midi: 70, dur: 0.10, vel: 0.33 },  // Bb4
        { t: 0.20, div: 'swell', midi: 74, dur: 0.10, vel: 0.35 },  // D5
        { t: 0.30, div: 'swell', midi: 70, dur: 0.10, vel: 0.33 },  // Bb4
        { t: 0.40, div: 'swell', midi: 67, dur: 0.10, vel: 0.35 },  // G4
        { t: 0.50, div: 'swell', midi: 70, dur: 0.10, vel: 0.33 },  // Bb4
        { t: 0.60, div: 'swell', midi: 74, dur: 0.10, vel: 0.35 },  // D5
        { t: 0.70, div: 'swell', midi: 79, dur: 0.10, vel: 0.37 },  // G5
        { t: 0.80, div: 'swell', midi: 74, dur: 0.10, vel: 0.35 },  // D5
        { t: 0.90, div: 'swell', midi: 70, dur: 0.10, vel: 0.33 },  // Bb4
        { t: 1.00, div: 'swell', midi: 67, dur: 0.10, vel: 0.35 },  // G4
        { t: 1.10, div: 'swell', midi: 62, dur: 0.10, vel: 0.33 },  // D4
        // m.2: Continuing figuration, Cm area
        { t: 1.20, div: 'swell', midi: 60, dur: 0.10, vel: 0.35 },  // C4
        { t: 1.30, div: 'swell', midi: 63, dur: 0.10, vel: 0.33 },  // Eb4
        { t: 1.40, div: 'swell', midi: 67, dur: 0.10, vel: 0.35 },  // G4
        { t: 1.50, div: 'swell', midi: 72, dur: 0.10, vel: 0.37 },  // C5
        { t: 1.60, div: 'swell', midi: 67, dur: 0.10, vel: 0.35 },  // G4
        { t: 1.70, div: 'swell', midi: 63, dur: 0.10, vel: 0.33 },  // Eb4
        { t: 1.80, div: 'swell', midi: 60, dur: 0.10, vel: 0.35 },  // C4
        { t: 1.90, div: 'swell', midi: 63, dur: 0.10, vel: 0.33 },  // Eb4
        { t: 2.00, div: 'swell', midi: 67, dur: 0.10, vel: 0.35 },  // G4
        { t: 2.10, div: 'swell', midi: 72, dur: 0.10, vel: 0.37 },  // C5
        { t: 2.20, div: 'swell', midi: 75, dur: 0.10, vel: 0.35 },  // Eb5
        { t: 2.30, div: 'swell', midi: 72, dur: 0.10, vel: 0.33 },  // C5

        // m.3-4: Pedal enters with chorale theme, pp
        { t: 2.40, div: 'pedal', midi: 43, dur: 0.60, vel: 0.50 },  // G2
        { t: 3.00, div: 'pedal', midi: 45, dur: 0.30, vel: 0.48 },  // A2
        { t: 3.30, div: 'pedal', midi: 46, dur: 0.60, vel: 0.50 },  // Bb2
        { t: 3.90, div: 'pedal', midi: 48, dur: 0.30, vel: 0.48 },  // C3
        { t: 4.20, div: 'pedal', midi: 50, dur: 0.90, vel: 0.52 },  // D3
        // Manual figuration continues over chorale
        { t: 2.40, div: 'swell', midi: 74, dur: 0.10, vel: 0.36 },  // D5
        { t: 2.50, div: 'swell', midi: 70, dur: 0.10, vel: 0.34 },  // Bb4
        { t: 2.60, div: 'swell', midi: 67, dur: 0.10, vel: 0.36 },  // G4
        { t: 2.70, div: 'swell', midi: 70, dur: 0.10, vel: 0.34 },  // Bb4
        { t: 2.80, div: 'swell', midi: 74, dur: 0.10, vel: 0.36 },  // D5
        { t: 2.90, div: 'swell', midi: 79, dur: 0.10, vel: 0.38 },  // G5
        { t: 3.00, div: 'swell', midi: 74, dur: 0.10, vel: 0.36 },  // D5
        { t: 3.10, div: 'swell', midi: 70, dur: 0.10, vel: 0.34 },  // Bb4
        { t: 3.20, div: 'swell', midi: 74, dur: 0.10, vel: 0.36 },  // D5
        { t: 3.30, div: 'swell', midi: 70, dur: 0.10, vel: 0.34 },  // Bb4
        { t: 3.40, div: 'swell', midi: 65, dur: 0.10, vel: 0.36 },  // F4
        { t: 3.50, div: 'swell', midi: 70, dur: 0.10, vel: 0.34 },  // Bb4
        { t: 3.60, div: 'swell', midi: 72, dur: 0.10, vel: 0.36 },  // C5
        { t: 3.70, div: 'swell', midi: 67, dur: 0.10, vel: 0.34 },  // G4
        { t: 3.80, div: 'swell', midi: 72, dur: 0.10, vel: 0.36 },  // C5
        { t: 3.90, div: 'swell', midi: 75, dur: 0.10, vel: 0.38 },  // Eb5
        { t: 4.00, div: 'swell', midi: 72, dur: 0.10, vel: 0.36 },  // C5
        { t: 4.10, div: 'swell', midi: 67, dur: 0.10, vel: 0.34 },  // G4
        { t: 4.20, div: 'swell', midi: 74, dur: 0.10, vel: 0.36 },  // D5
        { t: 4.30, div: 'swell', midi: 70, dur: 0.10, vel: 0.34 },  // Bb4
        { t: 4.40, div: 'swell', midi: 74, dur: 0.10, vel: 0.36 },  // D5
        { t: 4.50, div: 'swell', midi: 78, dur: 0.10, vel: 0.38 },  // F#5
        { t: 4.60, div: 'swell', midi: 74, dur: 0.10, vel: 0.36 },  // D5
        { t: 4.70, div: 'swell', midi: 70, dur: 0.10, vel: 0.34 },  // Bb4

        // m.5-8: Chorale melody transfers to right hand, pedal rests
        { t: 4.80, div: 'great', midi: 79, dur: 0.60, vel: 0.52 },  // G5
        { t: 5.40, div: 'great', midi: 81, dur: 0.30, vel: 0.50 },  // A5
        { t: 5.70, div: 'great', midi: 82, dur: 0.60, vel: 0.52 },  // Bb5
        { t: 6.30, div: 'great', midi: 84, dur: 0.30, vel: 0.50 },  // C6
        { t: 6.60, div: 'great', midi: 86, dur: 0.90, vel: 0.54 },  // D6
        // Left hand figuration continues ppp
        { t: 4.80, div: 'swell', midi: 55, dur: 0.10, vel: 0.35 },  // G3
        { t: 4.90, div: 'swell', midi: 58, dur: 0.10, vel: 0.33 },  // Bb3
        { t: 5.00, div: 'swell', midi: 62, dur: 0.10, vel: 0.35 },  // D4
        { t: 5.10, div: 'swell', midi: 67, dur: 0.10, vel: 0.37 },  // G4
        { t: 5.20, div: 'swell', midi: 62, dur: 0.10, vel: 0.35 },  // D4
        { t: 5.30, div: 'swell', midi: 58, dur: 0.10, vel: 0.33 },  // Bb3
        { t: 5.40, div: 'swell', midi: 57, dur: 0.10, vel: 0.35 },  // A3
        { t: 5.50, div: 'swell', midi: 60, dur: 0.10, vel: 0.33 },  // C4
        { t: 5.60, div: 'swell', midi: 65, dur: 0.10, vel: 0.35 },  // F4
        { t: 5.70, div: 'swell', midi: 58, dur: 0.10, vel: 0.33 },  // Bb3
        { t: 5.80, div: 'swell', midi: 62, dur: 0.10, vel: 0.35 },  // D4
        { t: 5.90, div: 'swell', midi: 67, dur: 0.10, vel: 0.37 },  // G4
        { t: 6.00, div: 'swell', midi: 62, dur: 0.10, vel: 0.35 },  // D4
        { t: 6.10, div: 'swell', midi: 58, dur: 0.10, vel: 0.33 },  // Bb3
        { t: 6.20, div: 'swell', midi: 60, dur: 0.10, vel: 0.35 },  // C4
        { t: 6.30, div: 'swell', midi: 63, dur: 0.10, vel: 0.33 },  // Eb4
        { t: 6.40, div: 'swell', midi: 67, dur: 0.10, vel: 0.35 },  // G4
        { t: 6.50, div: 'swell', midi: 72, dur: 0.10, vel: 0.37 },  // C5
        { t: 6.60, div: 'swell', midi: 74, dur: 0.10, vel: 0.35 },  // D5
        { t: 6.70, div: 'swell', midi: 70, dur: 0.10, vel: 0.33 },  // Bb4
        { t: 6.80, div: 'swell', midi: 67, dur: 0.10, vel: 0.35 },  // G4
        { t: 6.90, div: 'swell', midi: 70, dur: 0.10, vel: 0.33 },  // Bb4
        { t: 7.00, div: 'swell', midi: 74, dur: 0.10, vel: 0.35 },  // D5
        { t: 7.10, div: 'swell', midi: 79, dur: 0.10, vel: 0.37 },  // G5

        // m.9-12: Prelude builds gradually, chorale returns to pedal
        { t: 7.20, div: 'pedal', midi: 43, dur: 0.45, vel: 0.55 },  // G2
        { t: 7.65, div: 'pedal', midi: 46, dur: 0.45, vel: 0.53 },  // Bb2
        { t: 8.10, div: 'pedal', midi: 50, dur: 0.45, vel: 0.55 },  // D3
        { t: 8.55, div: 'pedal', midi: 48, dur: 0.45, vel: 0.53 },  // C3
        { t: 9.00, div: 'pedal', midi: 46, dur: 0.45, vel: 0.55 },  // Bb2
        { t: 9.45, div: 'pedal', midi: 45, dur: 0.45, vel: 0.53 },  // A2
        { t: 9.90, div: 'pedal', midi: 43, dur: 0.90, vel: 0.57 },  // G2
        // Figuration building in dynamics
        { t: 7.20, div: 'swell', midi: 67, dur: 0.10, vel: 0.40 },  // G4
        { t: 7.30, div: 'swell', midi: 70, dur: 0.10, vel: 0.38 },  // Bb4
        { t: 7.40, div: 'swell', midi: 74, dur: 0.10, vel: 0.40 },  // D5
        { t: 7.50, div: 'swell', midi: 79, dur: 0.10, vel: 0.42 },  // G5
        { t: 7.60, div: 'swell', midi: 74, dur: 0.10, vel: 0.40 },  // D5
        { t: 7.70, div: 'swell', midi: 70, dur: 0.10, vel: 0.38 },  // Bb4
        { t: 7.80, div: 'swell', midi: 70, dur: 0.10, vel: 0.42 },  // Bb4
        { t: 7.90, div: 'swell', midi: 74, dur: 0.10, vel: 0.40 },  // D5
        { t: 8.00, div: 'swell', midi: 77, dur: 0.10, vel: 0.42 },  // F5
        { t: 8.10, div: 'swell', midi: 74, dur: 0.10, vel: 0.44 },  // D5
        { t: 8.20, div: 'swell', midi: 70, dur: 0.10, vel: 0.42 },  // Bb4
        { t: 8.30, div: 'swell', midi: 74, dur: 0.10, vel: 0.40 },  // D5
        // m.11-12: crescendo continues
        { t: 8.40, div: 'swell', midi: 72, dur: 0.10, vel: 0.45 },  // C5
        { t: 8.50, div: 'swell', midi: 67, dur: 0.10, vel: 0.43 },  // G4
        { t: 8.60, div: 'swell', midi: 63, dur: 0.10, vel: 0.45 },  // Eb4
        { t: 8.70, div: 'swell', midi: 67, dur: 0.10, vel: 0.43 },  // G4
        { t: 8.80, div: 'swell', midi: 72, dur: 0.10, vel: 0.45 },  // C5
        { t: 8.90, div: 'swell', midi: 75, dur: 0.10, vel: 0.47 },  // Eb5
        { t: 9.00, div: 'swell', midi: 70, dur: 0.10, vel: 0.48 },  // Bb4
        { t: 9.10, div: 'swell', midi: 65, dur: 0.10, vel: 0.46 },  // F4
        { t: 9.20, div: 'swell', midi: 62, dur: 0.10, vel: 0.48 },  // D4
        { t: 9.30, div: 'swell', midi: 65, dur: 0.10, vel: 0.46 },  // F4
        { t: 9.40, div: 'swell', midi: 69, dur: 0.10, vel: 0.48 },  // A4
        { t: 9.50, div: 'swell', midi: 74, dur: 0.10, vel: 0.50 },  // D5
        // Transition to fugue - short rest, then...
        { t: 9.60, div: 'swell', midi: 67, dur: 0.10, vel: 0.50 },  // G4
        { t: 9.70, div: 'swell', midi: 70, dur: 0.10, vel: 0.48 },  // Bb4
        { t: 9.80, div: 'swell', midi: 74, dur: 0.10, vel: 0.50 },  // D5
        { t: 9.90, div: 'swell', midi: 79, dur: 0.10, vel: 0.52 },  // G5
        { t: 10.00, div: 'swell', midi: 82, dur: 0.10, vel: 0.50 }, // Bb5
        { t: 10.10, div: 'swell', midi: 79, dur: 0.10, vel: 0.48 }, // G5
        { t: 10.20, div: 'swell', midi: 74, dur: 0.10, vel: 0.50 }, // D5
        { t: 10.30, div: 'swell', midi: 70, dur: 0.10, vel: 0.48 }, // Bb4
        // Building to link
        { t: 10.40, div: 'swell', midi: 66, dur: 0.10, vel: 0.55 }, // F#4
        { t: 10.50, div: 'swell', midi: 70, dur: 0.10, vel: 0.53 }, // Bb4
        { t: 10.60, div: 'swell', midi: 74, dur: 0.10, vel: 0.55 }, // D5
        { t: 10.70, div: 'swell', midi: 78, dur: 0.10, vel: 0.57 }, // F#5
        { t: 10.80, div: 'swell', midi: 74, dur: 0.10, vel: 0.55 }, // D5
        { t: 10.90, div: 'swell', midi: 70, dur: 0.10, vel: 0.53 }, // Bb4
        // Link chord: dominant D major
        { t: 11.00, div: 'great', midi: 62, dur: 0.60, vel: 0.65 }, // D4
        { t: 11.00, div: 'great', midi: 66, dur: 0.60, vel: 0.63 }, // F#4
        { t: 11.00, div: 'great', midi: 69, dur: 0.60, vel: 0.63 }, // A4
        { t: 11.00, div: 'pedal', midi: 38, dur: 0.60, vel: 0.62 }, // D2

        // ===== FUGUE: Vif - Compound time, jig-like =====
        // m.13-16: Fugue subject - soprano voice, 6/8 feel
        // Subject: G-Bb-A-G-F#-G-A-Bb-C-D-Bb-G
        { t: 14.0,  div: 'great', midi: 79, dur: 0.21, vel: 0.72 }, // G5
        { t: 14.21, div: 'great', midi: 82, dur: 0.21, vel: 0.70 }, // Bb5
        { t: 14.42, div: 'great', midi: 81, dur: 0.21, vel: 0.72 }, // A5
        { t: 14.63, div: 'great', midi: 79, dur: 0.21, vel: 0.70 }, // G5
        { t: 14.84, div: 'great', midi: 78, dur: 0.21, vel: 0.72 }, // F#5
        { t: 15.05, div: 'great', midi: 79, dur: 0.21, vel: 0.74 }, // G5
        { t: 15.26, div: 'great', midi: 81, dur: 0.21, vel: 0.72 }, // A5
        { t: 15.47, div: 'great', midi: 82, dur: 0.21, vel: 0.70 }, // Bb5
        { t: 15.68, div: 'great', midi: 84, dur: 0.21, vel: 0.72 }, // C6
        { t: 15.89, div: 'great', midi: 86, dur: 0.21, vel: 0.74 }, // D6
        { t: 16.10, div: 'great', midi: 82, dur: 0.21, vel: 0.72 }, // Bb5
        { t: 16.31, div: 'great', midi: 79, dur: 0.42, vel: 0.74 }, // G5
        // m.17-20: Answer in alto, D minor area
        { t: 16.73, div: 'swell', midi: 74, dur: 0.21, vel: 0.70 }, // D5
        { t: 16.94, div: 'swell', midi: 77, dur: 0.21, vel: 0.68 }, // F5
        { t: 17.15, div: 'swell', midi: 76, dur: 0.21, vel: 0.70 }, // E5
        { t: 17.36, div: 'swell', midi: 74, dur: 0.21, vel: 0.68 }, // D5
        { t: 17.57, div: 'swell', midi: 73, dur: 0.21, vel: 0.70 }, // C#5
        { t: 17.78, div: 'swell', midi: 74, dur: 0.21, vel: 0.72 }, // D5
        { t: 17.99, div: 'swell', midi: 76, dur: 0.21, vel: 0.70 }, // E5
        { t: 18.20, div: 'swell', midi: 77, dur: 0.21, vel: 0.68 }, // F5
        { t: 18.41, div: 'swell', midi: 79, dur: 0.21, vel: 0.70 }, // G5
        { t: 18.62, div: 'swell', midi: 81, dur: 0.21, vel: 0.72 }, // A5
        { t: 18.83, div: 'swell', midi: 77, dur: 0.21, vel: 0.70 }, // F5
        { t: 19.04, div: 'swell', midi: 74, dur: 0.42, vel: 0.72 }, // D5
        // Soprano continues counter-subject
        { t: 16.73, div: 'great', midi: 79, dur: 0.21, vel: 0.68 }, // G5
        { t: 16.94, div: 'great', midi: 81, dur: 0.21, vel: 0.66 }, // A5
        { t: 17.15, div: 'great', midi: 82, dur: 0.21, vel: 0.68 }, // Bb5
        { t: 17.36, div: 'great', midi: 84, dur: 0.21, vel: 0.66 }, // C6
        { t: 17.57, div: 'great', midi: 82, dur: 0.42, vel: 0.68 }, // Bb5
        { t: 17.99, div: 'great', midi: 79, dur: 0.42, vel: 0.66 }, // G5
        { t: 18.41, div: 'great', midi: 82, dur: 0.42, vel: 0.68 }, // Bb5
        { t: 18.83, div: 'great', midi: 84, dur: 0.63, vel: 0.70 }, // C6

        // m.21-24: Tenor entry, then bass (pedal) enters last
        { t: 19.46, div: 'choir', midi: 67, dur: 0.21, vel: 0.65 }, // G4
        { t: 19.67, div: 'choir', midi: 70, dur: 0.21, vel: 0.63 }, // Bb4
        { t: 19.88, div: 'choir', midi: 69, dur: 0.21, vel: 0.65 }, // A4
        { t: 20.09, div: 'choir', midi: 67, dur: 0.21, vel: 0.63 }, // G4
        { t: 20.30, div: 'choir', midi: 66, dur: 0.21, vel: 0.65 }, // F#4
        { t: 20.51, div: 'choir', midi: 67, dur: 0.21, vel: 0.67 }, // G4
        { t: 20.72, div: 'choir', midi: 69, dur: 0.21, vel: 0.65 }, // A4
        { t: 20.93, div: 'choir', midi: 70, dur: 0.21, vel: 0.63 }, // Bb4
        { t: 21.14, div: 'choir', midi: 72, dur: 0.21, vel: 0.65 }, // C5
        { t: 21.35, div: 'choir', midi: 74, dur: 0.21, vel: 0.67 }, // D5
        { t: 21.56, div: 'choir', midi: 70, dur: 0.21, vel: 0.65 }, // Bb4
        { t: 21.77, div: 'choir', midi: 67, dur: 0.42, vel: 0.67 }, // G4
        // Pedal entry - subject in bass
        { t: 22.19, div: 'pedal', midi: 43, dur: 0.21, vel: 0.70 }, // G2
        { t: 22.40, div: 'pedal', midi: 46, dur: 0.21, vel: 0.68 }, // Bb2
        { t: 22.61, div: 'pedal', midi: 45, dur: 0.21, vel: 0.70 }, // A2
        { t: 22.82, div: 'pedal', midi: 43, dur: 0.21, vel: 0.68 }, // G2
        { t: 23.03, div: 'pedal', midi: 42, dur: 0.21, vel: 0.70 }, // F#2
        { t: 23.24, div: 'pedal', midi: 43, dur: 0.21, vel: 0.72 }, // G2
        { t: 23.45, div: 'pedal', midi: 45, dur: 0.21, vel: 0.70 }, // A2
        { t: 23.66, div: 'pedal', midi: 46, dur: 0.21, vel: 0.68 }, // Bb2
        { t: 23.87, div: 'pedal', midi: 48, dur: 0.21, vel: 0.70 }, // C3
        { t: 24.08, div: 'pedal', midi: 50, dur: 0.21, vel: 0.72 }, // D3
        { t: 24.29, div: 'pedal', midi: 46, dur: 0.21, vel: 0.70 }, // Bb2
        { t: 24.50, div: 'pedal', midi: 43, dur: 0.42, vel: 0.72 }, // G2

        // ===== CLIMAX: Chorale returns in pedal over fugue texture =====
        // m.25-28: Pedal chorale fff, manuals continue fugue
        { t: 24.92, div: 'pedal', midi: 43, dur: 0.45, vel: 0.90 }, // G2
        { t: 25.37, div: 'pedal', midi: 45, dur: 0.22, vel: 0.88 }, // A2
        { t: 25.59, div: 'pedal', midi: 46, dur: 0.45, vel: 0.90 }, // Bb2
        { t: 26.04, div: 'pedal', midi: 48, dur: 0.22, vel: 0.88 }, // C3
        { t: 26.26, div: 'pedal', midi: 50, dur: 0.67, vel: 0.92 }, // D3
        // Fugue subject in manuals simultaneously, ff
        { t: 24.92, div: 'great', midi: 67, dur: 0.17, vel: 0.88 }, // G4
        { t: 25.09, div: 'great', midi: 70, dur: 0.17, vel: 0.86 }, // Bb4
        { t: 25.26, div: 'great', midi: 69, dur: 0.17, vel: 0.88 }, // A4
        { t: 25.43, div: 'great', midi: 67, dur: 0.17, vel: 0.86 }, // G4
        { t: 25.60, div: 'great', midi: 66, dur: 0.17, vel: 0.88 }, // F#4
        { t: 25.77, div: 'great', midi: 67, dur: 0.17, vel: 0.90 }, // G4
        { t: 25.94, div: 'great', midi: 69, dur: 0.17, vel: 0.88 }, // A4
        { t: 26.11, div: 'great', midi: 70, dur: 0.17, vel: 0.86 }, // Bb4
        { t: 26.28, div: 'great', midi: 72, dur: 0.17, vel: 0.88 }, // C5
        { t: 26.45, div: 'great', midi: 74, dur: 0.17, vel: 0.90 }, // D5
        { t: 26.62, div: 'great', midi: 70, dur: 0.17, vel: 0.88 }, // Bb4
        { t: 26.79, div: 'great', midi: 67, dur: 0.34, vel: 0.90 }, // G4
        // Upper voice at the same time
        { t: 24.92, div: 'great', midi: 79, dur: 0.17, vel: 0.86 }, // G5
        { t: 25.09, div: 'great', midi: 82, dur: 0.17, vel: 0.84 }, // Bb5
        { t: 25.26, div: 'great', midi: 81, dur: 0.34, vel: 0.86 }, // A5
        { t: 25.60, div: 'great', midi: 78, dur: 0.34, vel: 0.84 }, // F#5
        { t: 25.94, div: 'great', midi: 79, dur: 0.34, vel: 0.86 }, // G5
        { t: 26.28, div: 'great', midi: 84, dur: 0.34, vel: 0.88 }, // C6
        { t: 26.62, div: 'great', midi: 82, dur: 0.50, vel: 0.86 }, // Bb5

        // m.29-30: Furious acceleration to final G minor chord
        { t: 26.93, div: 'pedal', midi: 46, dur: 0.22, vel: 0.92 }, // Bb2
        { t: 27.15, div: 'pedal', midi: 45, dur: 0.22, vel: 0.90 }, // A2
        { t: 27.37, div: 'pedal', midi: 43, dur: 0.45, vel: 0.94 }, // G2
        // Blazing final scales
        { t: 27.13, div: 'great', midi: 67, dur: 0.08, vel: 0.90 }, // G4
        { t: 27.21, div: 'great', midi: 69, dur: 0.08, vel: 0.88 }, // A4
        { t: 27.29, div: 'great', midi: 70, dur: 0.08, vel: 0.90 }, // Bb4
        { t: 27.37, div: 'great', midi: 72, dur: 0.08, vel: 0.88 }, // C5
        { t: 27.45, div: 'great', midi: 74, dur: 0.08, vel: 0.90 }, // D5
        { t: 27.53, div: 'great', midi: 75, dur: 0.08, vel: 0.88 }, // Eb5
        { t: 27.61, div: 'great', midi: 77, dur: 0.08, vel: 0.90 }, // F5
        { t: 27.69, div: 'great', midi: 78, dur: 0.08, vel: 0.92 }, // F#5
        { t: 27.77, div: 'great', midi: 79, dur: 0.08, vel: 0.90 }, // G5
        { t: 27.85, div: 'great', midi: 81, dur: 0.08, vel: 0.92 }, // A5
        { t: 27.93, div: 'great', midi: 82, dur: 0.08, vel: 0.94 }, // Bb5
        // Final G minor chord
        { t: 28.10, div: 'great', midi: 55, dur: 2.0, vel: 0.98 },  // G3
        { t: 28.10, div: 'great', midi: 58, dur: 2.0, vel: 0.96 },  // Bb3
        { t: 28.10, div: 'great', midi: 62, dur: 2.0, vel: 0.96 },  // D4
        { t: 28.10, div: 'great', midi: 67, dur: 2.0, vel: 0.98 },  // G4
        { t: 28.10, div: 'great', midi: 70, dur: 2.0, vel: 0.96 },  // Bb4
        { t: 28.10, div: 'great', midi: 74, dur: 2.0, vel: 0.96 },  // D5
        { t: 28.10, div: 'great', midi: 79, dur: 2.0, vel: 0.98 },  // G5
        { t: 28.10, div: 'swell', midi: 43, dur: 2.0, vel: 0.88 },  // G2
        { t: 28.10, div: 'swell', midi: 55, dur: 2.0, vel: 0.86 },  // G3
        { t: 28.10, div: 'pedal', midi: 43, dur: 2.5, vel: 0.98 },  // G2
        { t: 28.10, div: 'pedal', midi: 31, dur: 2.5, vel: 0.95 },  // G1
    ]
};
