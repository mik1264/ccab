// ============================================================
// French Symphonic Organ Works Collection I
// ============================================================
// Six masterworks of the French Symphonic organ tradition
// MIDI reference: C2=36, C3=48, C4=60, D4=62, E4=64, F4=65, G4=67, A4=69, Bb4=70, B4=71, C5=72
// ============================================================

// ============================================================
// 1. Franck - Choral No. 1 in E major, FWV 38
// ============================================================
// The first of three monumental chorals composed in 1890.
// Opens Moderato with a solemn E major chorale theme that
// "creates itself" through three variations. Rich five-part
// harmony in vocal ranges. The chorale emerges gradually,
// culminating in a triumphant organo pleno peroration.
// Form: Theme with three variations and coda.
// ============================================================

const PIECE_FRANCK_CHORAL1 = {
    title: "Choral No. 1 in E major",
    composer: "César Franck",
    catalog: "FWV 38",
    key: "E major",
    tempo: 72,
    tempoChanges: [
        { t: 0, tempo: 72, label: "Moderato" },
        { t: 40, tempo: 66, label: "Largamente - Variation I" },
        { t: 68, tempo: 80, label: "Più mosso - Variation II" },
        { t: 100, tempo: 60, label: "Largo maestoso - Variation III" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-flute4', 'sw-oboe8', 'sw-tremulant'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== THEME: Moderato - Solemn E major chorale =====
        // m.1-2: Opening E major chorale, five-part harmony on Great
        { t: 0,    div: 'great', midi: 64, dur: 2.5, vel: 0.80 },  // E4 soprano
        { t: 0,    div: 'great', midi: 59, dur: 2.5, vel: 0.75 },  // B3 alto
        { t: 0,    div: 'great', midi: 56, dur: 2.5, vel: 0.75 },  // G#3 tenor
        { t: 0,    div: 'great', midi: 52, dur: 2.5, vel: 0.72 },  // E3 bass
        { t: 0,    div: 'pedal', midi: 40, dur: 3.0, vel: 0.78 },  // E2

        // m.2: Chorale moves to B major (dominant)
        { t: 3.0,  div: 'great', midi: 66, dur: 2.0, vel: 0.82 },  // F#4
        { t: 3.0,  div: 'great', midi: 59, dur: 2.0, vel: 0.76 },  // B3
        { t: 3.0,  div: 'great', midi: 56, dur: 2.0, vel: 0.76 },  // G#3
        { t: 3.0,  div: 'great', midi: 54, dur: 2.0, vel: 0.73 },  // F#3
        { t: 3.0,  div: 'pedal', midi: 47, dur: 2.5, vel: 0.78 },  // B2

        // m.3: G#m chord - iii
        { t: 5.5,  div: 'great', midi: 68, dur: 2.0, vel: 0.83 },  // G#4
        { t: 5.5,  div: 'great', midi: 64, dur: 2.0, vel: 0.77 },  // E4
        { t: 5.5,  div: 'great', midi: 59, dur: 2.0, vel: 0.77 },  // B3
        { t: 5.5,  div: 'great', midi: 56, dur: 2.0, vel: 0.74 },  // G#3
        { t: 5.5,  div: 'pedal', midi: 44, dur: 2.5, vel: 0.78 },  // G#2

        // m.4: A major - IV
        { t: 8.0,  div: 'great', midi: 69, dur: 2.5, vel: 0.84 },  // A4
        { t: 8.0,  div: 'great', midi: 64, dur: 2.5, vel: 0.78 },  // E4
        { t: 8.0,  div: 'great', midi: 61, dur: 2.5, vel: 0.78 },  // C#4
        { t: 8.0,  div: 'great', midi: 57, dur: 2.5, vel: 0.75 },  // A3
        { t: 8.0,  div: 'pedal', midi: 45, dur: 3.0, vel: 0.80 },  // A2

        // m.5: Ascending line E4-F#4-G#4 soprano, passing to B major
        { t: 11.0, div: 'great', midi: 64, dur: 0.8, vel: 0.82 },  // E4
        { t: 11.0, div: 'great', midi: 59, dur: 2.5, vel: 0.76 },  // B3
        { t: 11.0, div: 'great', midi: 56, dur: 2.5, vel: 0.76 },  // G#3
        { t: 11.0, div: 'pedal', midi: 47, dur: 2.5, vel: 0.78 },  // B2
        { t: 11.8, div: 'great', midi: 66, dur: 0.8, vel: 0.83 },  // F#4
        { t: 12.6, div: 'great', midi: 68, dur: 1.0, vel: 0.85 },  // G#4

        // m.6: Resolution to E major
        { t: 14.0, div: 'great', midi: 71, dur: 3.0, vel: 0.86 },  // B4
        { t: 14.0, div: 'great', midi: 64, dur: 3.0, vel: 0.80 },  // E4
        { t: 14.0, div: 'great', midi: 59, dur: 3.0, vel: 0.80 },  // B3
        { t: 14.0, div: 'great', midi: 56, dur: 3.0, vel: 0.77 },  // G#3
        { t: 14.0, div: 'pedal', midi: 40, dur: 3.5, vel: 0.82 },  // E2

        // m.7-8: Second phrase - chorale repeated higher, G# major
        { t: 17.5, div: 'great', midi: 71, dur: 2.0, vel: 0.84 },  // B4
        { t: 17.5, div: 'great', midi: 68, dur: 2.0, vel: 0.78 },  // G#4
        { t: 17.5, div: 'great', midi: 64, dur: 2.0, vel: 0.78 },  // E4
        { t: 17.5, div: 'great', midi: 59, dur: 2.0, vel: 0.75 },  // B3
        { t: 17.5, div: 'pedal', midi: 44, dur: 2.5, vel: 0.80 },  // G#2

        // m.8: C#m
        { t: 20.0, div: 'great', midi: 73, dur: 2.0, vel: 0.85 },  // C#5
        { t: 20.0, div: 'great', midi: 68, dur: 2.0, vel: 0.79 },  // G#4
        { t: 20.0, div: 'great', midi: 64, dur: 2.0, vel: 0.79 },  // E4
        { t: 20.0, div: 'great', midi: 61, dur: 2.0, vel: 0.76 },  // C#4
        { t: 20.0, div: 'pedal', midi: 49, dur: 2.5, vel: 0.80 },  // C#3

        // m.9: F#m - ii
        { t: 22.5, div: 'great', midi: 73, dur: 1.5, vel: 0.86 },  // C#5
        { t: 22.5, div: 'great', midi: 69, dur: 1.5, vel: 0.80 },  // A4
        { t: 22.5, div: 'great', midi: 66, dur: 1.5, vel: 0.80 },  // F#4
        { t: 22.5, div: 'great', midi: 61, dur: 1.5, vel: 0.77 },  // C#4
        { t: 22.5, div: 'pedal', midi: 42, dur: 2.0, vel: 0.80 },  // F#2

        // m.10: B7 - V7
        { t: 24.5, div: 'great', midi: 71, dur: 2.0, vel: 0.85 },  // B4
        { t: 24.5, div: 'great', midi: 68, dur: 2.0, vel: 0.79 },  // G#4 (as A)
        { t: 24.5, div: 'great', midi: 66, dur: 2.0, vel: 0.79 },  // F#4
        { t: 24.5, div: 'great', midi: 59, dur: 2.0, vel: 0.76 },  // B3
        { t: 24.5, div: 'pedal', midi: 47, dur: 2.5, vel: 0.82 },  // B2

        // m.11: Half cadence, chorale phrase ending on V
        { t: 27.0, div: 'great', midi: 71, dur: 3.0, vel: 0.87 },  // B4
        { t: 27.0, div: 'great', midi: 66, dur: 3.0, vel: 0.81 },  // F#4
        { t: 27.0, div: 'great', midi: 63, dur: 3.0, vel: 0.81 },  // D#4
        { t: 27.0, div: 'great', midi: 59, dur: 3.0, vel: 0.78 },  // B3
        { t: 27.0, div: 'pedal', midi: 47, dur: 3.5, vel: 0.84 },  // B2

        // m.12-14: Transition passage on Swell, lyrical bridge
        { t: 31.0, div: 'swell', midi: 68, dur: 1.5, vel: 0.65 },  // G#4
        { t: 31.0, div: 'swell', midi: 64, dur: 1.5, vel: 0.60 },  // E4
        { t: 31.0, div: 'swell', midi: 56, dur: 1.5, vel: 0.60 },  // G#3
        { t: 31.0, div: 'pedal', midi: 40, dur: 2.0, vel: 0.55 },  // E2

        { t: 33.0, div: 'swell', midi: 66, dur: 1.5, vel: 0.67 },  // F#4
        { t: 33.0, div: 'swell', midi: 61, dur: 1.5, vel: 0.62 },  // C#4
        { t: 33.0, div: 'swell', midi: 54, dur: 1.5, vel: 0.62 },  // F#3
        { t: 33.0, div: 'pedal', midi: 42, dur: 2.0, vel: 0.55 },  // F#2

        { t: 35.0, div: 'swell', midi: 64, dur: 1.5, vel: 0.68 },  // E4
        { t: 35.0, div: 'swell', midi: 59, dur: 1.5, vel: 0.63 },  // B3
        { t: 35.0, div: 'swell', midi: 52, dur: 1.5, vel: 0.63 },  // E3
        { t: 35.0, div: 'pedal', midi: 40, dur: 2.0, vel: 0.55 },  // E2

        // m.15-16: Swell melody ascending, preparing variation I
        { t: 37.0, div: 'swell', midi: 64, dur: 0.8, vel: 0.68 },  // E4
        { t: 37.8, div: 'swell', midi: 66, dur: 0.8, vel: 0.70 },  // F#4
        { t: 38.6, div: 'swell', midi: 68, dur: 1.2, vel: 0.72 },  // G#4
        { t: 37.0, div: 'swell', midi: 56, dur: 3.0, vel: 0.60 },  // G#3
        { t: 37.0, div: 'pedal', midi: 44, dur: 3.0, vel: 0.58 },  // G#2

        // ===== VARIATION I: Largamente - Running 16ths =====
        // m.17-18: Bass line from theme with 16th-note figuration
        { t: 40.0, div: 'swell', midi: 64, dur: 0.25, vel: 0.70 },  // E4
        { t: 40.25, div: 'swell', midi: 66, dur: 0.25, vel: 0.68 }, // F#4
        { t: 40.5, div: 'swell', midi: 68, dur: 0.25, vel: 0.70 },  // G#4
        { t: 40.75, div: 'swell', midi: 71, dur: 0.25, vel: 0.72 }, // B4
        { t: 41.0, div: 'swell', midi: 73, dur: 0.25, vel: 0.74 },  // C#5
        { t: 41.25, div: 'swell', midi: 71, dur: 0.25, vel: 0.72 }, // B4
        { t: 41.5, div: 'swell', midi: 68, dur: 0.25, vel: 0.70 },  // G#4
        { t: 41.75, div: 'swell', midi: 66, dur: 0.25, vel: 0.68 }, // F#4
        { t: 40.0, div: 'pedal', midi: 40, dur: 2.5, vel: 0.72 },   // E2

        // m.18: Continuing 16ths over B pedal
        { t: 42.0, div: 'swell', midi: 64, dur: 0.25, vel: 0.70 },  // E4
        { t: 42.25, div: 'swell', midi: 63, dur: 0.25, vel: 0.68 }, // D#4
        { t: 42.5, div: 'swell', midi: 64, dur: 0.25, vel: 0.70 },  // E4
        { t: 42.75, div: 'swell', midi: 66, dur: 0.25, vel: 0.72 }, // F#4
        { t: 43.0, div: 'swell', midi: 68, dur: 0.25, vel: 0.74 },  // G#4
        { t: 43.25, div: 'swell', midi: 66, dur: 0.25, vel: 0.72 }, // F#4
        { t: 43.5, div: 'swell', midi: 64, dur: 0.25, vel: 0.70 },  // E4
        { t: 43.75, div: 'swell', midi: 63, dur: 0.25, vel: 0.68 }, // D#4
        { t: 42.0, div: 'pedal', midi: 47, dur: 2.5, vel: 0.72 },   // B2

        // m.19-20: 16ths continue, A major harmony
        { t: 44.0, div: 'swell', midi: 69, dur: 0.25, vel: 0.72 },  // A4
        { t: 44.25, div: 'swell', midi: 68, dur: 0.25, vel: 0.70 }, // G#4
        { t: 44.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.72 },  // A4
        { t: 44.75, div: 'swell', midi: 71, dur: 0.25, vel: 0.74 }, // B4
        { t: 45.0, div: 'swell', midi: 73, dur: 0.25, vel: 0.76 },  // C#5
        { t: 45.25, div: 'swell', midi: 71, dur: 0.25, vel: 0.74 }, // B4
        { t: 45.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.72 },  // A4
        { t: 45.75, div: 'swell', midi: 68, dur: 0.25, vel: 0.70 }, // G#4
        { t: 44.0, div: 'pedal', midi: 45, dur: 2.5, vel: 0.72 },   // A2

        // m.20: E major figuration
        { t: 46.0, div: 'swell', midi: 71, dur: 0.25, vel: 0.73 },  // B4
        { t: 46.25, div: 'swell', midi: 73, dur: 0.25, vel: 0.71 }, // C#5
        { t: 46.5, div: 'swell', midi: 76, dur: 0.25, vel: 0.73 },  // E5
        { t: 46.75, div: 'swell', midi: 73, dur: 0.25, vel: 0.75 }, // C#5
        { t: 47.0, div: 'swell', midi: 71, dur: 0.25, vel: 0.73 },  // B4
        { t: 47.25, div: 'swell', midi: 68, dur: 0.25, vel: 0.71 }, // G#4
        { t: 47.5, div: 'swell', midi: 66, dur: 0.25, vel: 0.69 },  // F#4
        { t: 47.75, div: 'swell', midi: 64, dur: 0.25, vel: 0.67 }, // E4
        { t: 46.0, div: 'pedal', midi: 40, dur: 2.5, vel: 0.74 },   // E2

        // m.21-22: Chorale melody emerges through figuration
        { t: 48.0, div: 'great', midi: 64, dur: 2.0, vel: 0.78 },   // E4 chorale
        { t: 48.0, div: 'swell', midi: 56, dur: 0.25, vel: 0.65 },  // G#3
        { t: 48.25, div: 'swell', midi: 59, dur: 0.25, vel: 0.63 }, // B3
        { t: 48.5, div: 'swell', midi: 56, dur: 0.25, vel: 0.65 },  // G#3
        { t: 48.75, div: 'swell', midi: 52, dur: 0.25, vel: 0.63 }, // E3
        { t: 49.0, div: 'swell', midi: 56, dur: 0.25, vel: 0.65 },  // G#3
        { t: 49.25, div: 'swell', midi: 59, dur: 0.25, vel: 0.63 }, // B3
        { t: 49.5, div: 'swell', midi: 64, dur: 0.25, vel: 0.65 },  // E4
        { t: 49.75, div: 'swell', midi: 59, dur: 0.25, vel: 0.63 }, // B3
        { t: 48.0, div: 'pedal', midi: 40, dur: 2.5, vel: 0.74 },   // E2

        // m.23: F#m passage
        { t: 50.5, div: 'great', midi: 66, dur: 2.0, vel: 0.79 },   // F#4 chorale
        { t: 50.5, div: 'swell', midi: 54, dur: 0.25, vel: 0.65 },  // F#3
        { t: 50.75, div: 'swell', midi: 57, dur: 0.25, vel: 0.63 }, // A3
        { t: 51.0, div: 'swell', midi: 61, dur: 0.25, vel: 0.65 },  // C#4
        { t: 51.25, div: 'swell', midi: 57, dur: 0.25, vel: 0.63 }, // A3
        { t: 51.5, div: 'swell', midi: 54, dur: 0.25, vel: 0.65 },  // F#3
        { t: 51.75, div: 'swell', midi: 57, dur: 0.25, vel: 0.63 }, // A3
        { t: 52.0, div: 'swell', midi: 61, dur: 0.25, vel: 0.65 },  // C#4
        { t: 52.25, div: 'swell', midi: 66, dur: 0.25, vel: 0.63 }, // F#4
        { t: 50.5, div: 'pedal', midi: 42, dur: 2.5, vel: 0.74 },   // F#2

        // m.24-25: Building toward climax, G#m-A-B7
        { t: 53.0, div: 'great', midi: 68, dur: 1.5, vel: 0.80 },   // G#4
        { t: 53.0, div: 'swell', midi: 59, dur: 0.25, vel: 0.67 },  // B3
        { t: 53.25, div: 'swell', midi: 56, dur: 0.25, vel: 0.65 }, // G#3
        { t: 53.5, div: 'swell', midi: 52, dur: 0.25, vel: 0.67 },  // E3
        { t: 53.75, div: 'swell', midi: 56, dur: 0.25, vel: 0.65 }, // G#3
        { t: 54.0, div: 'swell', midi: 59, dur: 0.25, vel: 0.67 },  // B3
        { t: 54.25, div: 'swell', midi: 63, dur: 0.25, vel: 0.65 }, // D#4
        { t: 53.0, div: 'pedal', midi: 44, dur: 2.0, vel: 0.76 },   // G#2

        // m.25: A major
        { t: 55.0, div: 'great', midi: 69, dur: 1.5, vel: 0.82 },   // A4
        { t: 55.0, div: 'swell', midi: 61, dur: 0.25, vel: 0.68 },  // C#4
        { t: 55.25, div: 'swell', midi: 57, dur: 0.25, vel: 0.66 }, // A3
        { t: 55.5, div: 'swell', midi: 61, dur: 0.25, vel: 0.68 },  // C#4
        { t: 55.75, div: 'swell', midi: 64, dur: 0.25, vel: 0.66 }, // E4
        { t: 55.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.76 },   // A2

        // m.26: B7 dominant resolving
        { t: 57.0, div: 'great', midi: 71, dur: 2.0, vel: 0.84 },   // B4
        { t: 57.0, div: 'great', midi: 66, dur: 2.0, vel: 0.78 },   // F#4
        { t: 57.0, div: 'swell', midi: 63, dur: 0.25, vel: 0.70 },  // D#4
        { t: 57.25, div: 'swell', midi: 59, dur: 0.25, vel: 0.68 }, // B3
        { t: 57.5, div: 'swell', midi: 63, dur: 0.25, vel: 0.70 },  // D#4
        { t: 57.75, div: 'swell', midi: 66, dur: 0.25, vel: 0.68 }, // F#4
        { t: 58.0, div: 'swell', midi: 68, dur: 0.25, vel: 0.70 },  // G#4 (passing)
        { t: 58.25, div: 'swell', midi: 66, dur: 0.25, vel: 0.68 }, // F#4
        { t: 57.0, div: 'pedal', midi: 47, dur: 2.5, vel: 0.78 },   // B2

        // m.27-28: Resolution phrase ending Variation I
        { t: 59.5, div: 'great', midi: 76, dur: 3.0, vel: 0.86 },   // E5
        { t: 59.5, div: 'great', midi: 71, dur: 3.0, vel: 0.80 },   // B4
        { t: 59.5, div: 'great', midi: 68, dur: 3.0, vel: 0.80 },   // G#4
        { t: 59.5, div: 'great', midi: 64, dur: 3.0, vel: 0.77 },   // E4
        { t: 59.5, div: 'pedal', midi: 40, dur: 3.5, vel: 0.82 },   // E2
        { t: 59.5, div: 'pedal', midi: 28, dur: 3.5, vel: 0.78 },   // E1

        // ===== VARIATION II: Più mosso - Maestoso fanfare =====
        // m.29-30: Loud maestoso fanfare, canonic development
        { t: 63.5, div: 'great', midi: 64, dur: 0.4, vel: 0.92 },   // E4 ff
        { t: 63.5, div: 'great', midi: 56, dur: 0.4, vel: 0.88 },   // G#3
        { t: 63.5, div: 'great', midi: 52, dur: 0.4, vel: 0.88 },   // E3
        { t: 63.5, div: 'pedal', midi: 40, dur: 0.8, vel: 0.90 },   // E2
        { t: 63.9, div: 'great', midi: 68, dur: 0.4, vel: 0.93 },   // G#4
        { t: 64.3, div: 'great', midi: 71, dur: 0.4, vel: 0.94 },   // B4
        { t: 64.7, div: 'great', midi: 76, dur: 0.8, vel: 0.95 },   // E5

        // m.30: Answering canonic voice
        { t: 65.5, div: 'swell', midi: 71, dur: 0.4, vel: 0.85 },   // B4
        { t: 65.9, div: 'swell', midi: 68, dur: 0.4, vel: 0.83 },   // G#4
        { t: 66.3, div: 'swell', midi: 66, dur: 0.4, vel: 0.85 },   // F#4
        { t: 66.7, div: 'swell', midi: 64, dur: 0.8, vel: 0.87 },   // E4
        { t: 65.5, div: 'pedal', midi: 47, dur: 2.5, vel: 0.84 },   // B2

        // m.31-32: New 16th-note canonic idea
        { t: 68.0, div: 'great', midi: 76, dur: 0.2, vel: 0.88 },   // E5
        { t: 68.2, div: 'great', midi: 73, dur: 0.2, vel: 0.86 },   // C#5
        { t: 68.4, div: 'great', midi: 71, dur: 0.2, vel: 0.88 },   // B4
        { t: 68.6, div: 'great', midi: 68, dur: 0.2, vel: 0.86 },   // G#4
        { t: 68.8, div: 'great', midi: 71, dur: 0.2, vel: 0.88 },   // B4
        { t: 69.0, div: 'great', midi: 73, dur: 0.2, vel: 0.90 },   // C#5
        { t: 69.2, div: 'great', midi: 76, dur: 0.2, vel: 0.92 },   // E5
        { t: 69.4, div: 'great', midi: 78, dur: 0.4, vel: 0.93 },   // F#5
        { t: 68.0, div: 'pedal', midi: 40, dur: 2.0, vel: 0.86 },   // E2

        // m.32: Canonic answer on Swell
        { t: 70.0, div: 'swell', midi: 64, dur: 0.2, vel: 0.80 },   // E4
        { t: 70.2, div: 'swell', midi: 61, dur: 0.2, vel: 0.78 },   // C#4
        { t: 70.4, div: 'swell', midi: 59, dur: 0.2, vel: 0.80 },   // B3
        { t: 70.6, div: 'swell', midi: 56, dur: 0.2, vel: 0.78 },   // G#3
        { t: 70.8, div: 'swell', midi: 59, dur: 0.2, vel: 0.80 },   // B3
        { t: 71.0, div: 'swell', midi: 61, dur: 0.2, vel: 0.82 },   // C#4
        { t: 71.2, div: 'swell', midi: 64, dur: 0.2, vel: 0.84 },   // E4
        { t: 71.4, div: 'swell', midi: 66, dur: 0.4, vel: 0.85 },   // F#4
        { t: 70.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.82 },   // A2

        // m.33-34: Intensifying - both manuals together
        { t: 72.0, div: 'great', midi: 76, dur: 0.2, vel: 0.90 },   // E5
        { t: 72.0, div: 'swell', midi: 64, dur: 0.2, vel: 0.82 },   // E4
        { t: 72.2, div: 'great', midi: 78, dur: 0.2, vel: 0.92 },   // F#5
        { t: 72.2, div: 'swell', midi: 66, dur: 0.2, vel: 0.84 },   // F#4
        { t: 72.4, div: 'great', midi: 80, dur: 0.2, vel: 0.93 },   // G#5
        { t: 72.4, div: 'swell', midi: 68, dur: 0.2, vel: 0.85 },   // G#4
        { t: 72.6, div: 'great', midi: 78, dur: 0.2, vel: 0.91 },   // F#5
        { t: 72.6, div: 'swell', midi: 66, dur: 0.2, vel: 0.83 },   // F#4
        { t: 72.8, div: 'great', midi: 76, dur: 0.2, vel: 0.90 },   // E5
        { t: 72.8, div: 'swell', midi: 64, dur: 0.2, vel: 0.82 },   // E4
        { t: 73.0, div: 'great', midi: 73, dur: 0.2, vel: 0.88 },   // C#5
        { t: 73.0, div: 'swell', midi: 61, dur: 0.2, vel: 0.80 },   // C#4
        { t: 73.2, div: 'great', midi: 71, dur: 0.2, vel: 0.87 },   // B4
        { t: 73.2, div: 'swell', midi: 59, dur: 0.2, vel: 0.79 },   // B3
        { t: 73.4, div: 'great', midi: 68, dur: 0.4, vel: 0.86 },   // G#4
        { t: 73.4, div: 'swell', midi: 56, dur: 0.4, vel: 0.78 },   // G#3
        { t: 72.0, div: 'pedal', midi: 40, dur: 2.0, vel: 0.86 },   // E2

        // m.35-36: Sequential development, moving to A major
        { t: 74.0, div: 'great', midi: 69, dur: 0.3, vel: 0.88 },   // A4
        { t: 74.3, div: 'great', midi: 73, dur: 0.3, vel: 0.90 },   // C#5
        { t: 74.6, div: 'great', midi: 76, dur: 0.3, vel: 0.92 },   // E5
        { t: 74.9, div: 'great', midi: 73, dur: 0.3, vel: 0.90 },   // C#5
        { t: 75.2, div: 'great', midi: 69, dur: 0.3, vel: 0.88 },   // A4
        { t: 75.5, div: 'great', midi: 73, dur: 0.3, vel: 0.90 },   // C#5
        { t: 74.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.84 },   // A2

        // m.36: F#m passage
        { t: 76.0, div: 'great', midi: 66, dur: 0.3, vel: 0.87 },   // F#4
        { t: 76.3, div: 'great', midi: 69, dur: 0.3, vel: 0.89 },   // A4
        { t: 76.6, div: 'great', midi: 73, dur: 0.3, vel: 0.91 },   // C#5
        { t: 76.9, div: 'great', midi: 69, dur: 0.3, vel: 0.89 },   // A4
        { t: 77.2, div: 'great', midi: 66, dur: 0.3, vel: 0.87 },   // F#4
        { t: 77.5, div: 'great', midi: 61, dur: 0.3, vel: 0.85 },   // C#4
        { t: 76.0, div: 'pedal', midi: 42, dur: 2.0, vel: 0.84 },   // F#2

        // m.37-38: Chorale melody in pedals
        { t: 78.0, div: 'great', midi: 71, dur: 0.2, vel: 0.90 },   // B4
        { t: 78.2, div: 'great', midi: 73, dur: 0.2, vel: 0.88 },   // C#5
        { t: 78.4, div: 'great', midi: 76, dur: 0.2, vel: 0.90 },   // E5
        { t: 78.6, div: 'great', midi: 78, dur: 0.2, vel: 0.92 },   // F#5
        { t: 78.8, div: 'great', midi: 76, dur: 0.2, vel: 0.90 },   // E5
        { t: 79.0, div: 'great', midi: 73, dur: 0.2, vel: 0.88 },   // C#5
        { t: 79.2, div: 'great', midi: 71, dur: 0.2, vel: 0.86 },   // B4
        { t: 79.4, div: 'great', midi: 68, dur: 0.4, vel: 0.85 },   // G#4
        { t: 78.0, div: 'pedal', midi: 52, dur: 2.5, vel: 0.88 },   // E3 (chorale in pedal)
        { t: 78.0, div: 'pedal', midi: 40, dur: 2.5, vel: 0.84 },   // E2

        // m.39-40: Chorale continues in pedals, B major
        { t: 80.5, div: 'great', midi: 76, dur: 0.2, vel: 0.91 },   // E5
        { t: 80.7, div: 'great', midi: 73, dur: 0.2, vel: 0.89 },   // C#5
        { t: 80.9, div: 'great', midi: 71, dur: 0.2, vel: 0.91 },   // B4
        { t: 81.1, div: 'great', midi: 73, dur: 0.2, vel: 0.89 },   // C#5
        { t: 81.3, div: 'great', midi: 76, dur: 0.2, vel: 0.91 },   // E5
        { t: 81.5, div: 'great', midi: 80, dur: 0.5, vel: 0.93 },   // G#5
        { t: 80.5, div: 'pedal', midi: 54, dur: 2.0, vel: 0.88 },   // F#3 (chorale)
        { t: 80.5, div: 'pedal', midi: 42, dur: 2.0, vel: 0.84 },   // F#2

        // m.41: Dominant preparation - building tension
        { t: 82.5, div: 'great', midi: 80, dur: 0.3, vel: 0.93 },   // G#5
        { t: 82.8, div: 'great', midi: 78, dur: 0.3, vel: 0.91 },   // F#5
        { t: 83.1, div: 'great', midi: 76, dur: 0.3, vel: 0.93 },   // E5
        { t: 83.4, div: 'great', midi: 78, dur: 0.3, vel: 0.91 },   // F#5
        { t: 83.7, div: 'great', midi: 80, dur: 0.3, vel: 0.93 },   // G#5
        { t: 84.0, div: 'great', midi: 83, dur: 0.5, vel: 0.95 },   // B5
        { t: 82.5, div: 'pedal', midi: 47, dur: 2.5, vel: 0.88 },   // B2
        { t: 82.5, div: 'pedal', midi: 35, dur: 2.5, vel: 0.84 },   // B1

        // ===== VARIATION III: Largo maestoso - Triumphant chorale =====
        // m.42-43: Full organ - chorale theme triumphant, organo pleno
        { t: 85.5, div: 'great', midi: 76, dur: 3.0, vel: 0.96 },   // E5 ff
        { t: 85.5, div: 'great', midi: 71, dur: 3.0, vel: 0.92 },   // B4
        { t: 85.5, div: 'great', midi: 68, dur: 3.0, vel: 0.92 },   // G#4
        { t: 85.5, div: 'great', midi: 64, dur: 3.0, vel: 0.90 },   // E4
        { t: 85.5, div: 'swell', midi: 56, dur: 3.0, vel: 0.85 },   // G#3
        { t: 85.5, div: 'swell', midi: 52, dur: 3.0, vel: 0.85 },   // E3
        { t: 85.5, div: 'pedal', midi: 40, dur: 3.5, vel: 0.94 },   // E2
        { t: 85.5, div: 'pedal', midi: 28, dur: 3.5, vel: 0.90 },   // E1

        // m.44: F#4 chorale - moving to ii
        { t: 89.0, div: 'great', midi: 78, dur: 3.0, vel: 0.97 },   // F#5
        { t: 89.0, div: 'great', midi: 73, dur: 3.0, vel: 0.93 },   // C#5
        { t: 89.0, div: 'great', midi: 69, dur: 3.0, vel: 0.93 },   // A4
        { t: 89.0, div: 'great', midi: 66, dur: 3.0, vel: 0.91 },   // F#4
        { t: 89.0, div: 'swell', midi: 61, dur: 3.0, vel: 0.86 },   // C#4
        { t: 89.0, div: 'swell', midi: 54, dur: 3.0, vel: 0.86 },   // F#3
        { t: 89.0, div: 'pedal', midi: 42, dur: 3.5, vel: 0.94 },   // F#2
        { t: 89.0, div: 'pedal', midi: 30, dur: 3.5, vel: 0.90 },   // F#1

        // m.45: G#4 - iii
        { t: 92.5, div: 'great', midi: 80, dur: 2.5, vel: 0.97 },   // G#5
        { t: 92.5, div: 'great', midi: 76, dur: 2.5, vel: 0.93 },   // E5
        { t: 92.5, div: 'great', midi: 71, dur: 2.5, vel: 0.93 },   // B4
        { t: 92.5, div: 'great', midi: 68, dur: 2.5, vel: 0.91 },   // G#4
        { t: 92.5, div: 'swell', midi: 64, dur: 2.5, vel: 0.86 },   // E4
        { t: 92.5, div: 'swell', midi: 59, dur: 2.5, vel: 0.86 },   // B3
        { t: 92.5, div: 'pedal', midi: 44, dur: 3.0, vel: 0.94 },   // G#2
        { t: 92.5, div: 'pedal', midi: 32, dur: 3.0, vel: 0.90 },   // G#1

        // m.46: A4 - IV, majestic
        { t: 95.5, div: 'great', midi: 81, dur: 3.0, vel: 0.98 },   // A5
        { t: 95.5, div: 'great', midi: 76, dur: 3.0, vel: 0.94 },   // E5
        { t: 95.5, div: 'great', midi: 73, dur: 3.0, vel: 0.94 },   // C#5
        { t: 95.5, div: 'great', midi: 69, dur: 3.0, vel: 0.92 },   // A4
        { t: 95.5, div: 'swell', midi: 64, dur: 3.0, vel: 0.87 },   // E4
        { t: 95.5, div: 'swell', midi: 57, dur: 3.0, vel: 0.87 },   // A3
        { t: 95.5, div: 'pedal', midi: 45, dur: 3.5, vel: 0.95 },   // A2
        { t: 95.5, div: 'pedal', midi: 33, dur: 3.5, vel: 0.91 },   // A1

        // m.47: B4 ascending - V, ultimate cadence preparation
        { t: 99.0, div: 'great', midi: 83, dur: 2.5, vel: 0.98 },   // B5
        { t: 99.0, div: 'great', midi: 78, dur: 2.5, vel: 0.94 },   // F#5
        { t: 99.0, div: 'great', midi: 75, dur: 2.5, vel: 0.94 },   // D#5
        { t: 99.0, div: 'great', midi: 71, dur: 2.5, vel: 0.92 },   // B4
        { t: 99.0, div: 'swell', midi: 66, dur: 2.5, vel: 0.87 },   // F#4
        { t: 99.0, div: 'swell', midi: 59, dur: 2.5, vel: 0.87 },   // B3
        { t: 99.0, div: 'pedal', midi: 47, dur: 3.0, vel: 0.95 },   // B2
        { t: 99.0, div: 'pedal', midi: 35, dur: 3.0, vel: 0.91 },   // B1

        // m.48-49: CODA - Final triumphant E major, fff
        { t: 102.0, div: 'great', midi: 76, dur: 4.0, vel: 1.0 },   // E5
        { t: 102.0, div: 'great', midi: 71, dur: 4.0, vel: 0.96 },  // B4
        { t: 102.0, div: 'great', midi: 68, dur: 4.0, vel: 0.96 },  // G#4
        { t: 102.0, div: 'great', midi: 64, dur: 4.0, vel: 0.94 },  // E4
        { t: 102.0, div: 'swell', midi: 59, dur: 4.0, vel: 0.90 },  // B3
        { t: 102.0, div: 'swell', midi: 56, dur: 4.0, vel: 0.90 },  // G#3
        { t: 102.0, div: 'swell', midi: 52, dur: 4.0, vel: 0.88 },  // E3
        { t: 102.0, div: 'pedal', midi: 40, dur: 5.0, vel: 0.98 },  // E2
        { t: 102.0, div: 'pedal', midi: 28, dur: 5.0, vel: 0.94 },  // E1

        // Final chord - sustained
        { t: 106.5, div: 'great', midi: 76, dur: 5.0, vel: 0.98 },  // E5
        { t: 106.5, div: 'great', midi: 71, dur: 5.0, vel: 0.94 },  // B4
        { t: 106.5, div: 'great', midi: 68, dur: 5.0, vel: 0.94 },  // G#4
        { t: 106.5, div: 'great', midi: 64, dur: 5.0, vel: 0.92 },  // E4
        { t: 106.5, div: 'swell', midi: 56, dur: 5.0, vel: 0.88 },  // G#3
        { t: 106.5, div: 'swell', midi: 52, dur: 5.0, vel: 0.88 },  // E3
        { t: 106.5, div: 'pedal', midi: 40, dur: 6.0, vel: 0.96 },  // E2
        { t: 106.5, div: 'pedal', midi: 28, dur: 6.0, vel: 0.92 },  // E1
    ]
};


// ============================================================
// 2. Franck - Choral No. 2 in B minor, FWV 39
// ============================================================
// Giant passacaglia evoking the tolling of a great bell.
// Opens with a chaconne-style bass theme in B minor that passes
// through bass and treble voices. A lyrical second subject
// develops through interludes, arriving at a grand cadenza.
// References Bach's Passacaglia BWV 582. Contains Christ motive
// from Franck's The Beatitudes.
// ============================================================

const PIECE_FRANCK_CHORAL2 = {
    title: "Choral No. 2 in B minor",
    composer: "César Franck",
    catalog: "FWV 39",
    key: "B minor",
    tempo: 66,
    tempoChanges: [
        { t: 0, tempo: 66, label: "Maestoso" },
        { t: 36, tempo: 58, label: "Largamente - Chorale theme" },
        { t: 65, tempo: 72, label: "Allegro - Fugato" },
        { t: 95, tempo: 56, label: "Largo - Cadenza & coda" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-flute4', 'sw-oboe8', 'sw-tremulant'],
        choir: ['ch-flute8', 'ch-clarinet8'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== SECTION 1: Maestoso - Chaconne bass theme =====
        // m.1-2: Passacaglia bass theme in B minor, solemn bell-like
        { t: 0,    div: 'pedal', midi: 47, dur: 2.0, vel: 0.85 },   // B2
        { t: 0,    div: 'great', midi: 59, dur: 2.0, vel: 0.82 },   // B3
        { t: 0,    div: 'great', midi: 54, dur: 2.0, vel: 0.78 },   // F#3

        { t: 2.5,  div: 'pedal', midi: 45, dur: 2.0, vel: 0.84 },   // A2
        { t: 2.5,  div: 'great', midi: 57, dur: 2.0, vel: 0.80 },   // A3
        { t: 2.5,  div: 'great', midi: 54, dur: 2.0, vel: 0.76 },   // F#3

        // m.3: Bass descends G-F#-E
        { t: 5.0,  div: 'pedal', midi: 43, dur: 1.5, vel: 0.83 },   // G2
        { t: 5.0,  div: 'great', midi: 55, dur: 1.5, vel: 0.79 },   // G3
        { t: 5.0,  div: 'great', midi: 59, dur: 1.5, vel: 0.79 },   // B3

        { t: 6.5,  div: 'pedal', midi: 42, dur: 1.5, vel: 0.82 },   // F#2
        { t: 6.5,  div: 'great', midi: 54, dur: 1.5, vel: 0.78 },   // F#3
        { t: 6.5,  div: 'great', midi: 57, dur: 1.5, vel: 0.78 },   // A3

        // m.4: E minor - iv of B minor
        { t: 8.0,  div: 'pedal', midi: 40, dur: 2.0, vel: 0.84 },   // E2
        { t: 8.0,  div: 'great', midi: 52, dur: 2.0, vel: 0.80 },   // E3
        { t: 8.0,  div: 'great', midi: 55, dur: 2.0, vel: 0.80 },   // G3
        { t: 8.0,  div: 'great', midi: 59, dur: 2.0, vel: 0.80 },   // B3

        // m.5: F# major - dominant, cadential
        { t: 10.5, div: 'pedal', midi: 42, dur: 2.5, vel: 0.86 },   // F#2
        { t: 10.5, div: 'great', midi: 54, dur: 2.5, vel: 0.82 },   // F#3
        { t: 10.5, div: 'great', midi: 58, dur: 2.5, vel: 0.82 },   // A#3
        { t: 10.5, div: 'great', midi: 61, dur: 2.5, vel: 0.82 },   // C#4

        // m.6-7: Second statement of passacaglia, melody passes to treble
        { t: 13.5, div: 'pedal', midi: 47, dur: 2.0, vel: 0.86 },   // B2
        { t: 13.5, div: 'great', midi: 71, dur: 2.0, vel: 0.85 },   // B4
        { t: 13.5, div: 'great', midi: 66, dur: 2.0, vel: 0.80 },   // F#4
        { t: 13.5, div: 'great', midi: 62, dur: 2.0, vel: 0.80 },   // D4

        { t: 16.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.85 },   // A2
        { t: 16.0, div: 'great', midi: 69, dur: 2.0, vel: 0.84 },   // A4
        { t: 16.0, div: 'great', midi: 66, dur: 2.0, vel: 0.79 },   // F#4
        { t: 16.0, div: 'great', midi: 62, dur: 2.0, vel: 0.79 },   // D4

        // m.8: G major
        { t: 18.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.84 },   // G2
        { t: 18.5, div: 'great', midi: 67, dur: 1.5, vel: 0.83 },   // G4
        { t: 18.5, div: 'great', midi: 62, dur: 1.5, vel: 0.78 },   // D4
        { t: 18.5, div: 'great', midi: 59, dur: 1.5, vel: 0.78 },   // B3

        // F#m
        { t: 20.0, div: 'pedal', midi: 42, dur: 1.5, vel: 0.83 },   // F#2
        { t: 20.0, div: 'great', midi: 66, dur: 1.5, vel: 0.82 },   // F#4
        { t: 20.0, div: 'great', midi: 61, dur: 1.5, vel: 0.77 },   // C#4
        { t: 20.0, div: 'great', midi: 57, dur: 1.5, vel: 0.77 },   // A3

        // m.9: Em
        { t: 21.5, div: 'pedal', midi: 40, dur: 2.0, vel: 0.85 },   // E2
        { t: 21.5, div: 'great', midi: 64, dur: 2.0, vel: 0.83 },   // E4
        { t: 21.5, div: 'great', midi: 59, dur: 2.0, vel: 0.78 },   // B3
        { t: 21.5, div: 'great', midi: 55, dur: 2.0, vel: 0.78 },   // G3

        // m.10: F# dominant with intensification
        { t: 24.0, div: 'pedal', midi: 42, dur: 3.0, vel: 0.88 },   // F#2
        { t: 24.0, div: 'great', midi: 66, dur: 1.0, vel: 0.86 },   // F#4
        { t: 24.0, div: 'great', midi: 61, dur: 3.0, vel: 0.82 },   // C#4
        { t: 24.0, div: 'great', midi: 58, dur: 3.0, vel: 0.82 },   // A#3
        { t: 25.0, div: 'great', midi: 68, dur: 1.0, vel: 0.87 },   // G#4 (passing)
        { t: 26.0, div: 'great', midi: 66, dur: 1.0, vel: 0.86 },   // F#4

        // m.11-12: Third variation of passacaglia - richer texture
        { t: 27.5, div: 'pedal', midi: 47, dur: 2.0, vel: 0.88 },   // B2
        { t: 27.5, div: 'pedal', midi: 35, dur: 2.0, vel: 0.84 },   // B1
        { t: 27.5, div: 'great', midi: 71, dur: 2.0, vel: 0.88 },   // B4
        { t: 27.5, div: 'great', midi: 66, dur: 2.0, vel: 0.84 },   // F#4
        { t: 27.5, div: 'great', midi: 62, dur: 2.0, vel: 0.84 },   // D4
        { t: 27.5, div: 'swell', midi: 59, dur: 2.0, vel: 0.76 },   // B3

        { t: 30.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.87 },   // A2
        { t: 30.0, div: 'great', midi: 69, dur: 2.0, vel: 0.87 },   // A4
        { t: 30.0, div: 'great', midi: 64, dur: 2.0, vel: 0.83 },   // E4
        { t: 30.0, div: 'great', midi: 61, dur: 2.0, vel: 0.83 },   // C#4
        { t: 30.0, div: 'swell', midi: 57, dur: 2.0, vel: 0.75 },   // A3

        // m.13: Chromatic inflection - diminished approach
        { t: 32.5, div: 'pedal', midi: 44, dur: 1.5, vel: 0.86 },   // G#2
        { t: 32.5, div: 'great', midi: 68, dur: 1.5, vel: 0.86 },   // G#4
        { t: 32.5, div: 'great', midi: 62, dur: 1.5, vel: 0.82 },   // D4
        { t: 32.5, div: 'great', midi: 59, dur: 1.5, vel: 0.82 },   // B3
        { t: 32.5, div: 'swell', midi: 56, dur: 1.5, vel: 0.74 },   // G#3

        // m.14: Cadence to Bm
        { t: 34.0, div: 'pedal', midi: 47, dur: 2.5, vel: 0.89 },   // B2
        { t: 34.0, div: 'great', midi: 71, dur: 2.5, vel: 0.89 },   // B4
        { t: 34.0, div: 'great', midi: 66, dur: 2.5, vel: 0.85 },   // F#4
        { t: 34.0, div: 'great', midi: 62, dur: 2.5, vel: 0.85 },   // D4
        { t: 34.0, div: 'swell', midi: 59, dur: 2.5, vel: 0.77 },   // B3

        // ===== SECTION 2: Largamente - Lyrical chorale theme =====
        // m.15-16: The chorale itself emerges - tender on Swell
        { t: 36.5, div: 'swell', midi: 71, dur: 2.5, vel: 0.72 },   // B4
        { t: 36.5, div: 'swell', midi: 66, dur: 2.5, vel: 0.66 },   // F#4
        { t: 36.5, div: 'swell', midi: 62, dur: 2.5, vel: 0.66 },   // D4
        { t: 36.5, div: 'pedal', midi: 47, dur: 3.0, vel: 0.65 },   // B2

        { t: 39.5, div: 'swell', midi: 73, dur: 2.0, vel: 0.74 },   // C#5
        { t: 39.5, div: 'swell', midi: 69, dur: 2.0, vel: 0.68 },   // A4
        { t: 39.5, div: 'swell', midi: 64, dur: 2.0, vel: 0.68 },   // E4
        { t: 39.5, div: 'pedal', midi: 45, dur: 2.5, vel: 0.65 },   // A2

        // m.17: D major - relative major warmth
        { t: 42.0, div: 'swell', midi: 74, dur: 2.5, vel: 0.76 },   // D5
        { t: 42.0, div: 'swell', midi: 69, dur: 2.5, vel: 0.70 },   // A4
        { t: 42.0, div: 'swell', midi: 66, dur: 2.5, vel: 0.70 },   // F#4
        { t: 42.0, div: 'pedal', midi: 50, dur: 3.0, vel: 0.67 },   // D3

        // m.18: G major
        { t: 45.0, div: 'swell', midi: 71, dur: 2.0, vel: 0.75 },   // B4
        { t: 45.0, div: 'swell', midi: 67, dur: 2.0, vel: 0.69 },   // G4
        { t: 45.0, div: 'swell', midi: 62, dur: 2.0, vel: 0.69 },   // D4
        { t: 45.0, div: 'pedal', midi: 43, dur: 2.5, vel: 0.67 },   // G2

        // m.19: Em - sighing figure
        { t: 47.5, div: 'swell', midi: 71, dur: 1.0, vel: 0.74 },   // B4
        { t: 48.5, div: 'swell', midi: 69, dur: 1.0, vel: 0.72 },   // A4
        { t: 47.5, div: 'swell', midi: 64, dur: 2.5, vel: 0.68 },   // E4
        { t: 47.5, div: 'swell', midi: 59, dur: 2.5, vel: 0.68 },   // B3
        { t: 47.5, div: 'pedal', midi: 40, dur: 2.5, vel: 0.67 },   // E2

        // m.20: F# dominant, Christ motive reference
        { t: 50.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.73 },   // A4
        { t: 52.0, div: 'swell', midi: 66, dur: 1.5, vel: 0.75 },   // F#4
        { t: 50.5, div: 'swell', midi: 61, dur: 3.0, vel: 0.69 },   // C#4
        { t: 50.5, div: 'swell', midi: 58, dur: 3.0, vel: 0.69 },   // A#3
        { t: 50.5, div: 'pedal', midi: 42, dur: 3.0, vel: 0.70 },   // F#2

        // m.21-22: Return of chorale theme, building
        { t: 54.0, div: 'swell', midi: 74, dur: 2.0, vel: 0.78 },   // D5
        { t: 54.0, div: 'swell', midi: 71, dur: 2.0, vel: 0.72 },   // B4
        { t: 54.0, div: 'swell', midi: 66, dur: 2.0, vel: 0.72 },   // F#4
        { t: 54.0, div: 'pedal', midi: 47, dur: 2.5, vel: 0.72 },   // B2

        { t: 56.5, div: 'swell', midi: 73, dur: 2.0, vel: 0.79 },   // C#5
        { t: 56.5, div: 'great', midi: 69, dur: 2.0, vel: 0.80 },   // A4
        { t: 56.5, div: 'great', midi: 64, dur: 2.0, vel: 0.76 },   // E4
        { t: 56.5, div: 'pedal', midi: 45, dur: 2.5, vel: 0.74 },   // A2

        // m.23: Crescendo, adding Great
        { t: 59.0, div: 'great', midi: 74, dur: 2.0, vel: 0.86 },   // D5
        { t: 59.0, div: 'great', midi: 69, dur: 2.0, vel: 0.82 },   // A4
        { t: 59.0, div: 'great', midi: 66, dur: 2.0, vel: 0.82 },   // F#4
        { t: 59.0, div: 'swell', midi: 62, dur: 2.0, vel: 0.74 },   // D4
        { t: 59.0, div: 'pedal', midi: 50, dur: 2.5, vel: 0.80 },   // D3

        // m.24: Climactic B major
        { t: 61.5, div: 'great', midi: 71, dur: 3.0, vel: 0.90 },   // B4
        { t: 61.5, div: 'great', midi: 66, dur: 3.0, vel: 0.86 },   // F#4
        { t: 61.5, div: 'great', midi: 63, dur: 3.0, vel: 0.86 },   // D#4 (major third)
        { t: 61.5, div: 'swell', midi: 59, dur: 3.0, vel: 0.78 },   // B3
        { t: 61.5, div: 'pedal', midi: 47, dur: 3.5, vel: 0.84 },   // B2
        { t: 61.5, div: 'pedal', midi: 35, dur: 3.5, vel: 0.80 },   // B1

        // ===== SECTION 3: Allegro - Fugato =====
        // m.25-26: Fugato subject in B minor, derived from passacaglia
        { t: 65.0, div: 'great', midi: 59, dur: 0.5, vel: 0.82 },   // B3
        { t: 65.5, div: 'great', midi: 62, dur: 0.5, vel: 0.80 },   // D4
        { t: 66.0, div: 'great', midi: 66, dur: 0.5, vel: 0.82 },   // F#4
        { t: 66.5, div: 'great', midi: 64, dur: 0.5, vel: 0.80 },   // E4
        { t: 67.0, div: 'great', midi: 62, dur: 0.5, vel: 0.82 },   // D4
        { t: 67.5, div: 'great', midi: 61, dur: 0.5, vel: 0.80 },   // C#4
        { t: 68.0, div: 'great', midi: 59, dur: 1.0, vel: 0.84 },   // B3
        { t: 65.0, div: 'pedal', midi: 47, dur: 4.0, vel: 0.78 },   // B2

        // m.27-28: Answer in F# minor (tonal answer on Swell)
        { t: 69.5, div: 'swell', midi: 66, dur: 0.5, vel: 0.75 },   // F#4
        { t: 70.0, div: 'swell', midi: 69, dur: 0.5, vel: 0.73 },   // A4
        { t: 70.5, div: 'swell', midi: 73, dur: 0.5, vel: 0.75 },   // C#5
        { t: 71.0, div: 'swell', midi: 71, dur: 0.5, vel: 0.73 },   // B4
        { t: 71.5, div: 'swell', midi: 69, dur: 0.5, vel: 0.75 },   // A4
        { t: 72.0, div: 'swell', midi: 68, dur: 0.5, vel: 0.73 },   // G#4
        { t: 72.5, div: 'swell', midi: 66, dur: 1.0, vel: 0.77 },   // F#4
        // Counter-subject on Great
        { t: 69.5, div: 'great', midi: 59, dur: 0.3, vel: 0.78 },   // B3
        { t: 69.8, div: 'great', midi: 57, dur: 0.3, vel: 0.76 },   // A3
        { t: 70.1, div: 'great', midi: 59, dur: 0.3, vel: 0.78 },   // B3
        { t: 70.4, div: 'great', midi: 62, dur: 0.3, vel: 0.80 },   // D4
        { t: 70.7, div: 'great', midi: 61, dur: 0.3, vel: 0.78 },   // C#4
        { t: 71.0, div: 'great', midi: 59, dur: 0.3, vel: 0.76 },   // B3
        { t: 71.3, div: 'great', midi: 57, dur: 0.3, vel: 0.74 },   // A3
        { t: 71.6, div: 'great', midi: 54, dur: 1.0, vel: 0.76 },   // F#3
        { t: 69.5, div: 'pedal', midi: 42, dur: 4.0, vel: 0.78 },   // F#2

        // m.29-30: Third entry in pedal
        { t: 74.0, div: 'pedal', midi: 47, dur: 0.5, vel: 0.84 },   // B2
        { t: 74.5, div: 'pedal', midi: 50, dur: 0.5, vel: 0.82 },   // D3
        { t: 75.0, div: 'pedal', midi: 54, dur: 0.5, vel: 0.84 },   // F#3
        { t: 75.5, div: 'pedal', midi: 52, dur: 0.5, vel: 0.82 },   // E3
        { t: 76.0, div: 'pedal', midi: 50, dur: 0.5, vel: 0.84 },   // D3
        { t: 76.5, div: 'pedal', midi: 49, dur: 0.5, vel: 0.82 },   // C#3
        { t: 77.0, div: 'pedal', midi: 47, dur: 1.0, vel: 0.86 },   // B2
        // Manuals with stretto
        { t: 74.0, div: 'great', midi: 62, dur: 0.3, vel: 0.84 },   // D4
        { t: 74.3, div: 'great', midi: 66, dur: 0.3, vel: 0.82 },   // F#4
        { t: 74.6, div: 'great', midi: 69, dur: 0.3, vel: 0.84 },   // A4
        { t: 74.9, div: 'great', midi: 71, dur: 0.3, vel: 0.86 },   // B4
        { t: 75.2, div: 'great', midi: 69, dur: 0.3, vel: 0.84 },   // A4
        { t: 75.5, div: 'great', midi: 66, dur: 0.3, vel: 0.82 },   // F#4
        { t: 75.8, div: 'great', midi: 62, dur: 0.5, vel: 0.84 },   // D4
        { t: 74.0, div: 'swell', midi: 71, dur: 0.3, vel: 0.78 },   // B4
        { t: 74.3, div: 'swell', midi: 73, dur: 0.3, vel: 0.76 },   // C#5
        { t: 74.6, div: 'swell', midi: 74, dur: 0.3, vel: 0.78 },   // D5
        { t: 74.9, div: 'swell', midi: 73, dur: 0.3, vel: 0.76 },   // C#5
        { t: 75.2, div: 'swell', midi: 71, dur: 0.3, vel: 0.78 },   // B4
        { t: 75.5, div: 'swell', midi: 69, dur: 0.3, vel: 0.76 },   // A4
        { t: 75.8, div: 'swell', midi: 66, dur: 0.5, vel: 0.78 },   // F#4

        // m.31-32: Episode - modulating through D major
        { t: 78.5, div: 'great', midi: 66, dur: 0.3, vel: 0.86 },   // F#4
        { t: 78.8, div: 'great', midi: 69, dur: 0.3, vel: 0.84 },   // A4
        { t: 79.1, div: 'great', midi: 74, dur: 0.3, vel: 0.86 },   // D5
        { t: 79.4, div: 'great', midi: 73, dur: 0.3, vel: 0.84 },   // C#5
        { t: 79.7, div: 'great', midi: 74, dur: 0.3, vel: 0.86 },   // D5
        { t: 80.0, div: 'great', midi: 71, dur: 0.3, vel: 0.84 },   // B4
        { t: 80.3, div: 'great', midi: 69, dur: 0.3, vel: 0.82 },   // A4
        { t: 80.6, div: 'great', midi: 66, dur: 0.5, vel: 0.84 },   // F#4
        { t: 78.5, div: 'swell', midi: 62, dur: 0.3, vel: 0.76 },   // D4
        { t: 78.8, div: 'swell', midi: 59, dur: 0.3, vel: 0.74 },   // B3
        { t: 79.1, div: 'swell', midi: 57, dur: 0.3, vel: 0.76 },   // A3
        { t: 79.4, div: 'swell', midi: 55, dur: 0.3, vel: 0.74 },   // G3
        { t: 79.7, div: 'swell', midi: 57, dur: 0.3, vel: 0.76 },   // A3
        { t: 80.0, div: 'swell', midi: 59, dur: 0.3, vel: 0.78 },   // B3
        { t: 80.3, div: 'swell', midi: 62, dur: 0.5, vel: 0.76 },   // D4
        { t: 78.5, div: 'pedal', midi: 50, dur: 2.5, vel: 0.80 },   // D3

        // m.33-34: Building intensity, approaching climax
        { t: 81.5, div: 'great', midi: 71, dur: 0.3, vel: 0.88 },   // B4
        { t: 81.8, div: 'great', midi: 74, dur: 0.3, vel: 0.90 },   // D5
        { t: 82.1, div: 'great', midi: 73, dur: 0.3, vel: 0.88 },   // C#5
        { t: 82.4, div: 'great', midi: 71, dur: 0.3, vel: 0.86 },   // B4
        { t: 82.7, div: 'great', midi: 69, dur: 0.3, vel: 0.88 },   // A4
        { t: 83.0, div: 'great', midi: 71, dur: 0.3, vel: 0.90 },   // B4
        { t: 83.3, div: 'great', midi: 73, dur: 0.3, vel: 0.92 },   // C#5
        { t: 83.6, div: 'great', midi: 74, dur: 0.5, vel: 0.93 },   // D5
        { t: 81.5, div: 'swell', midi: 59, dur: 0.3, vel: 0.80 },   // B3
        { t: 81.8, div: 'swell', midi: 62, dur: 0.3, vel: 0.82 },   // D4
        { t: 82.1, div: 'swell', midi: 64, dur: 0.3, vel: 0.80 },   // E4
        { t: 82.4, div: 'swell', midi: 66, dur: 0.3, vel: 0.82 },   // F#4
        { t: 82.7, div: 'swell', midi: 64, dur: 0.3, vel: 0.80 },   // E4
        { t: 83.0, div: 'swell', midi: 62, dur: 0.3, vel: 0.82 },   // D4
        { t: 83.3, div: 'swell', midi: 66, dur: 0.5, vel: 0.84 },   // F#4
        { t: 81.5, div: 'pedal', midi: 43, dur: 2.5, vel: 0.84 },   // G2

        // m.35-36: Stretto climax - all voices
        { t: 84.5, div: 'great', midi: 74, dur: 0.25, vel: 0.92 },  // D5
        { t: 84.75, div: 'great', midi: 73, dur: 0.25, vel: 0.90 }, // C#5
        { t: 85.0, div: 'great', midi: 71, dur: 0.25, vel: 0.92 },  // B4
        { t: 85.25, div: 'great', midi: 73, dur: 0.25, vel: 0.94 }, // C#5
        { t: 85.5, div: 'great', midi: 74, dur: 0.25, vel: 0.95 },  // D5
        { t: 85.75, div: 'great', midi: 76, dur: 0.25, vel: 0.96 }, // E5
        { t: 86.0, div: 'great', midi: 78, dur: 0.25, vel: 0.97 },  // F#5
        { t: 86.25, div: 'great', midi: 76, dur: 0.25, vel: 0.95 }, // E5
        { t: 86.5, div: 'great', midi: 74, dur: 0.5, vel: 0.96 },   // D5
        { t: 84.5, div: 'swell', midi: 62, dur: 0.25, vel: 0.84 },  // D4
        { t: 84.75, div: 'swell', midi: 66, dur: 0.25, vel: 0.86 }, // F#4
        { t: 85.0, div: 'swell', midi: 69, dur: 0.25, vel: 0.84 },  // A4
        { t: 85.25, div: 'swell', midi: 71, dur: 0.25, vel: 0.86 }, // B4
        { t: 85.5, div: 'swell', midi: 69, dur: 0.25, vel: 0.84 },  // A4
        { t: 85.75, div: 'swell', midi: 66, dur: 0.25, vel: 0.86 }, // F#4
        { t: 86.0, div: 'swell', midi: 64, dur: 0.25, vel: 0.84 },  // E4
        { t: 86.25, div: 'swell', midi: 62, dur: 0.25, vel: 0.86 }, // D4
        { t: 86.5, div: 'swell', midi: 66, dur: 0.5, vel: 0.88 },   // F#4
        { t: 84.5, div: 'pedal', midi: 47, dur: 1.0, vel: 0.88 },   // B2
        { t: 85.5, div: 'pedal', midi: 50, dur: 1.0, vel: 0.86 },   // D3
        { t: 86.5, div: 'pedal', midi: 42, dur: 1.0, vel: 0.88 },   // F#2

        // m.37-38: fff culmination chords
        { t: 87.5, div: 'great', midi: 78, dur: 2.0, vel: 0.96 },   // F#5
        { t: 87.5, div: 'great', midi: 74, dur: 2.0, vel: 0.92 },   // D5
        { t: 87.5, div: 'great', midi: 71, dur: 2.0, vel: 0.92 },   // B4
        { t: 87.5, div: 'great', midi: 66, dur: 2.0, vel: 0.90 },   // F#4
        { t: 87.5, div: 'swell', midi: 62, dur: 2.0, vel: 0.84 },   // D4
        { t: 87.5, div: 'swell', midi: 59, dur: 2.0, vel: 0.84 },   // B3
        { t: 87.5, div: 'pedal', midi: 47, dur: 2.5, vel: 0.92 },   // B2
        { t: 87.5, div: 'pedal', midi: 35, dur: 2.5, vel: 0.88 },   // B1

        // m.39: Dominant preparation for cadenza
        { t: 90.0, div: 'great', midi: 78, dur: 1.0, vel: 0.94 },   // F#5
        { t: 90.0, div: 'great', midi: 73, dur: 1.0, vel: 0.90 },   // C#5
        { t: 90.0, div: 'great', midi: 70, dur: 1.0, vel: 0.90 },   // A#4/Bb4
        { t: 91.0, div: 'great', midi: 78, dur: 0.5, vel: 0.95 },   // F#5
        { t: 91.5, div: 'great', midi: 76, dur: 0.5, vel: 0.93 },   // E5
        { t: 92.0, div: 'great', midi: 74, dur: 0.5, vel: 0.95 },   // D5
        { t: 92.5, div: 'great', midi: 73, dur: 0.5, vel: 0.93 },   // C#5
        { t: 93.0, div: 'great', midi: 71, dur: 1.5, vel: 0.96 },   // B4
        { t: 90.0, div: 'pedal', midi: 42, dur: 4.5, vel: 0.90 },   // F#2

        // ===== SECTION 4: Largo - Cadenza & peaceful coda =====
        // m.40-41: Virtuosic cadenza - sweeping scales
        { t: 95.0, div: 'great', midi: 59, dur: 0.15, vel: 0.88 },  // B3
        { t: 95.15, div: 'great', midi: 61, dur: 0.15, vel: 0.86 }, // C#4
        { t: 95.3, div: 'great', midi: 62, dur: 0.15, vel: 0.88 },  // D4
        { t: 95.45, div: 'great', midi: 64, dur: 0.15, vel: 0.86 }, // E4
        { t: 95.6, div: 'great', midi: 66, dur: 0.15, vel: 0.88 },  // F#4
        { t: 95.75, div: 'great', midi: 68, dur: 0.15, vel: 0.90 }, // G#4
        { t: 95.9, div: 'great', midi: 69, dur: 0.15, vel: 0.88 },  // A4
        { t: 96.05, div: 'great', midi: 71, dur: 0.15, vel: 0.90 }, // B4
        { t: 96.2, div: 'great', midi: 73, dur: 0.15, vel: 0.92 },  // C#5
        { t: 96.35, div: 'great', midi: 74, dur: 0.15, vel: 0.90 }, // D5
        { t: 96.5, div: 'great', midi: 76, dur: 0.15, vel: 0.92 },  // E5
        { t: 96.65, div: 'great', midi: 78, dur: 0.5, vel: 0.94 },  // F#5

        // Descending cadenza
        { t: 97.5, div: 'great', midi: 76, dur: 0.15, vel: 0.90 },  // E5
        { t: 97.65, div: 'great', midi: 74, dur: 0.15, vel: 0.88 }, // D5
        { t: 97.8, div: 'great', midi: 73, dur: 0.15, vel: 0.90 },  // C#5
        { t: 97.95, div: 'great', midi: 71, dur: 0.15, vel: 0.88 }, // B4
        { t: 98.1, div: 'great', midi: 69, dur: 0.15, vel: 0.86 },  // A4
        { t: 98.25, div: 'great', midi: 66, dur: 0.15, vel: 0.84 }, // F#4
        { t: 98.4, div: 'great', midi: 62, dur: 0.15, vel: 0.82 },  // D4
        { t: 98.55, div: 'great', midi: 59, dur: 0.5, vel: 0.84 },  // B3

        // m.42-43: Peaceful ending, ppp on Swell
        { t: 99.5, div: 'swell', midi: 71, dur: 3.0, vel: 0.55 },   // B4
        { t: 99.5, div: 'swell', midi: 66, dur: 3.0, vel: 0.50 },   // F#4
        { t: 99.5, div: 'swell', midi: 62, dur: 3.0, vel: 0.50 },   // D4
        { t: 99.5, div: 'pedal', midi: 47, dur: 3.5, vel: 0.48 },   // B2

        // m.44: Final B major - Picardy third
        { t: 103.0, div: 'swell', midi: 71, dur: 4.0, vel: 0.50 },  // B4
        { t: 103.0, div: 'swell', midi: 66, dur: 4.0, vel: 0.45 },  // F#4
        { t: 103.0, div: 'swell', midi: 63, dur: 4.0, vel: 0.45 },  // D#4 (major)
        { t: 103.0, div: 'swell', midi: 59, dur: 4.0, vel: 0.42 },  // B3
        { t: 103.0, div: 'pedal', midi: 47, dur: 5.0, vel: 0.45 },  // B2
        { t: 103.0, div: 'pedal', midi: 35, dur: 5.0, vel: 0.40 },  // B1
    ]
};


// ============================================================
// 3. Franck - Prélude, Fugue et Variation, Op. 18 (FWV 30)
// ============================================================
// Composed 1860-62, dedicated to Saint-Saëns. The flowing
// B minor Prélude has gentle melancholy with an asymmetrical
// five-bar phrase repeated three times. The singing melody is
// on the Hautbois (Oboe 8'), intimate and tender. The Fugue
// has clean textures, and the Variation is a reprise of the
// Prélude with more active accompaniment, fading to B major.
// ============================================================

const PIECE_FRANCK_PRELUDE = {
    title: "Prélude, Fugue et Variation, Op. 18",
    composer: "César Franck",
    catalog: "FWV 30, Op. 18",
    key: "B minor",
    tempo: 63,
    tempoChanges: [
        { t: 0, tempo: 63, label: "Andantino cantabile - Prélude" },
        { t: 42, tempo: 72, label: "Allegretto ma non troppo - Fugue" },
        { t: 78, tempo: 60, label: "Andantino - Variation" }
    ],
    registration: {
        great: ['gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-oboe8', 'sw-tremulant'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-subbass32', 'pd-principal16']
    },
    events: [
        // ===== PRELUDE: Andantino cantabile - Singing melody on Oboe =====
        // m.1-5: First asymmetrical five-bar phrase, Oboe melody
        // Accompaniment: gentle arpeggiated chords on Choir
        { t: 0,    div: 'choir', midi: 59, dur: 1.0, vel: 0.45 },   // B3
        { t: 0,    div: 'choir', midi: 54, dur: 1.0, vel: 0.42 },   // F#3
        { t: 0,    div: 'pedal', midi: 47, dur: 2.0, vel: 0.50 },   // B2

        // Oboe melody enters
        { t: 1.0,  div: 'swell', midi: 71, dur: 1.5, vel: 0.65 },   // B4
        { t: 1.0,  div: 'choir', midi: 59, dur: 1.5, vel: 0.45 },   // B3
        { t: 1.0,  div: 'choir', midi: 54, dur: 1.5, vel: 0.42 },   // F#3

        { t: 2.5,  div: 'swell', midi: 69, dur: 1.0, vel: 0.63 },   // A4
        { t: 2.5,  div: 'choir', midi: 57, dur: 1.5, vel: 0.45 },   // A3
        { t: 2.5,  div: 'choir', midi: 54, dur: 1.5, vel: 0.42 },   // F#3
        { t: 2.5,  div: 'pedal', midi: 42, dur: 2.0, vel: 0.48 },   // F#2

        { t: 4.0,  div: 'swell', midi: 71, dur: 1.5, vel: 0.66 },   // B4
        { t: 4.0,  div: 'choir', midi: 59, dur: 1.5, vel: 0.45 },   // B3
        { t: 4.0,  div: 'choir', midi: 55, dur: 1.5, vel: 0.42 },   // G3
        { t: 4.0,  div: 'pedal', midi: 43, dur: 2.0, vel: 0.48 },   // G2

        { t: 5.5,  div: 'swell', midi: 73, dur: 1.0, vel: 0.68 },   // C#5
        { t: 6.5,  div: 'swell', midi: 71, dur: 1.5, vel: 0.66 },   // B4
        { t: 5.5,  div: 'choir', midi: 61, dur: 2.5, vel: 0.45 },   // C#4
        { t: 5.5,  div: 'choir', midi: 57, dur: 2.5, vel: 0.42 },   // A3
        { t: 5.5,  div: 'pedal', midi: 45, dur: 3.0, vel: 0.50 },   // A2

        // m.5: Resolution of first phrase
        { t: 8.5,  div: 'swell', midi: 69, dur: 2.0, vel: 0.64 },   // A4
        { t: 8.5,  div: 'choir', midi: 54, dur: 2.0, vel: 0.44 },   // F#3
        { t: 8.5,  div: 'choir', midi: 50, dur: 2.0, vel: 0.41 },   // D3
        { t: 8.5,  div: 'pedal', midi: 50, dur: 2.5, vel: 0.48 },   // D3

        // m.6-10: Second phrase - melody rises higher
        { t: 11.0, div: 'swell', midi: 71, dur: 1.5, vel: 0.67 },   // B4
        { t: 11.0, div: 'choir', midi: 59, dur: 1.5, vel: 0.46 },   // B3
        { t: 11.0, div: 'choir', midi: 54, dur: 1.5, vel: 0.43 },   // F#3
        { t: 11.0, div: 'pedal', midi: 47, dur: 2.0, vel: 0.50 },   // B2

        { t: 12.5, div: 'swell', midi: 73, dur: 1.0, vel: 0.69 },   // C#5
        { t: 12.5, div: 'choir', midi: 61, dur: 1.5, vel: 0.46 },   // C#4
        { t: 12.5, div: 'choir', midi: 57, dur: 1.5, vel: 0.43 },   // A3
        { t: 12.5, div: 'pedal', midi: 45, dur: 2.0, vel: 0.48 },   // A2

        { t: 14.0, div: 'swell', midi: 74, dur: 1.5, vel: 0.71 },   // D5
        { t: 14.0, div: 'choir', midi: 62, dur: 1.5, vel: 0.46 },   // D4
        { t: 14.0, div: 'choir', midi: 57, dur: 1.5, vel: 0.43 },   // A3
        { t: 14.0, div: 'pedal', midi: 50, dur: 2.0, vel: 0.50 },   // D3

        // m.8: Peak of phrase - E5
        { t: 15.5, div: 'swell', midi: 76, dur: 1.0, vel: 0.73 },   // E5
        { t: 16.5, div: 'swell', midi: 74, dur: 1.0, vel: 0.71 },   // D5
        { t: 15.5, div: 'choir', midi: 64, dur: 2.0, vel: 0.47 },   // E4
        { t: 15.5, div: 'choir', midi: 59, dur: 2.0, vel: 0.44 },   // B3
        { t: 15.5, div: 'pedal', midi: 40, dur: 2.5, vel: 0.50 },   // E2

        // m.9: Descending to cadence
        { t: 18.0, div: 'swell', midi: 73, dur: 1.5, vel: 0.69 },   // C#5
        { t: 18.0, div: 'choir', midi: 61, dur: 1.5, vel: 0.46 },   // C#4
        { t: 18.0, div: 'choir', midi: 54, dur: 1.5, vel: 0.43 },   // F#3
        { t: 18.0, div: 'pedal', midi: 42, dur: 2.0, vel: 0.48 },   // F#2

        // m.10: Cadence on Bm
        { t: 20.0, div: 'swell', midi: 71, dur: 2.5, vel: 0.67 },   // B4
        { t: 20.0, div: 'choir', midi: 59, dur: 2.5, vel: 0.45 },   // B3
        { t: 20.0, div: 'choir', midi: 54, dur: 2.5, vel: 0.42 },   // F#3
        { t: 20.0, div: 'pedal', midi: 47, dur: 3.0, vel: 0.50 },   // B2

        // m.11-15: Third phrase - same melody with slight embellishment
        { t: 23.0, div: 'swell', midi: 71, dur: 0.7, vel: 0.67 },   // B4
        { t: 23.7, div: 'swell', midi: 73, dur: 0.3, vel: 0.65 },   // C#5 (grace)
        { t: 24.0, div: 'swell', midi: 71, dur: 1.0, vel: 0.67 },   // B4
        { t: 23.0, div: 'choir', midi: 59, dur: 2.0, vel: 0.46 },   // B3
        { t: 23.0, div: 'choir', midi: 54, dur: 2.0, vel: 0.43 },   // F#3
        { t: 23.0, div: 'pedal', midi: 47, dur: 2.5, vel: 0.50 },   // B2

        { t: 25.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.65 },   // A4
        { t: 25.5, div: 'choir', midi: 57, dur: 1.5, vel: 0.45 },   // A3
        { t: 25.5, div: 'choir', midi: 54, dur: 1.5, vel: 0.42 },   // F#3
        { t: 25.5, div: 'pedal', midi: 42, dur: 2.0, vel: 0.48 },   // F#2

        { t: 27.5, div: 'swell', midi: 71, dur: 1.5, vel: 0.68 },   // B4
        { t: 27.5, div: 'choir', midi: 59, dur: 1.5, vel: 0.46 },   // B3
        { t: 27.5, div: 'choir', midi: 55, dur: 1.5, vel: 0.43 },   // G3
        { t: 27.5, div: 'pedal', midi: 43, dur: 2.0, vel: 0.50 },   // G2

        // m.14: Descending with ornamental turns
        { t: 29.5, div: 'swell', midi: 73, dur: 0.5, vel: 0.70 },   // C#5
        { t: 30.0, div: 'swell', midi: 74, dur: 0.3, vel: 0.68 },   // D5 (turn)
        { t: 30.3, div: 'swell', midi: 73, dur: 0.3, vel: 0.70 },   // C#5
        { t: 30.6, div: 'swell', midi: 71, dur: 1.5, vel: 0.68 },   // B4
        { t: 29.5, div: 'choir', midi: 61, dur: 2.5, vel: 0.46 },   // C#4
        { t: 29.5, div: 'choir', midi: 57, dur: 2.5, vel: 0.43 },   // A3
        { t: 29.5, div: 'pedal', midi: 45, dur: 3.0, vel: 0.50 },   // A2

        // m.15: Transition to linking passage
        { t: 32.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.64 },   // A4
        { t: 32.5, div: 'choir', midi: 57, dur: 1.5, vel: 0.44 },   // A3
        { t: 32.5, div: 'choir', midi: 50, dur: 1.5, vel: 0.41 },   // D3
        { t: 32.5, div: 'pedal', midi: 50, dur: 2.0, vel: 0.48 },   // D3

        // m.16-18: Link to Fugue - chromatic descending inner voices
        { t: 34.5, div: 'swell', midi: 66, dur: 2.0, vel: 0.60 },   // F#4
        { t: 34.5, div: 'choir', midi: 54, dur: 2.0, vel: 0.43 },   // F#3
        { t: 34.5, div: 'choir', midi: 50, dur: 2.0, vel: 0.40 },   // D3
        { t: 34.5, div: 'pedal', midi: 47, dur: 2.5, vel: 0.45 },   // B2

        { t: 37.0, div: 'swell', midi: 64, dur: 1.5, vel: 0.58 },   // E4
        { t: 37.0, div: 'choir', midi: 52, dur: 1.5, vel: 0.42 },   // E3
        { t: 37.0, div: 'choir', midi: 47, dur: 1.5, vel: 0.39 },   // B2
        { t: 37.0, div: 'pedal', midi: 40, dur: 2.0, vel: 0.44 },   // E2

        { t: 39.0, div: 'swell', midi: 62, dur: 2.5, vel: 0.56 },   // D4
        { t: 39.0, div: 'choir', midi: 50, dur: 2.5, vel: 0.41 },   // D3
        { t: 39.0, div: 'choir', midi: 45, dur: 2.5, vel: 0.38 },   // A2
        { t: 39.0, div: 'pedal', midi: 38, dur: 3.0, vel: 0.42 },   // D2

        // ===== FUGUE: Allegretto ma non troppo =====
        // m.19-22: Clean-textured fugue subject in B minor
        { t: 42.0, div: 'choir', midi: 59, dur: 0.8, vel: 0.55 },   // B3
        { t: 42.8, div: 'choir', midi: 61, dur: 0.4, vel: 0.53 },   // C#4
        { t: 43.2, div: 'choir', midi: 62, dur: 0.8, vel: 0.55 },   // D4
        { t: 44.0, div: 'choir', midi: 61, dur: 0.4, vel: 0.53 },   // C#4
        { t: 44.4, div: 'choir', midi: 59, dur: 0.4, vel: 0.55 },   // B3
        { t: 44.8, div: 'choir', midi: 57, dur: 0.4, vel: 0.53 },   // A3
        { t: 45.2, div: 'choir', midi: 59, dur: 1.0, vel: 0.56 },   // B3

        // m.23-26: Answer on Swell (F# minor)
        { t: 46.5, div: 'swell', midi: 66, dur: 0.8, vel: 0.60 },   // F#4
        { t: 47.3, div: 'swell', midi: 68, dur: 0.4, vel: 0.58 },   // G#4
        { t: 47.7, div: 'swell', midi: 69, dur: 0.8, vel: 0.60 },   // A4
        { t: 48.5, div: 'swell', midi: 68, dur: 0.4, vel: 0.58 },   // G#4
        { t: 48.9, div: 'swell', midi: 66, dur: 0.4, vel: 0.60 },   // F#4
        { t: 49.3, div: 'swell', midi: 64, dur: 0.4, vel: 0.58 },   // E4
        { t: 49.7, div: 'swell', midi: 66, dur: 1.0, vel: 0.61 },   // F#4
        // Counter-subject
        { t: 46.5, div: 'choir', midi: 59, dur: 0.4, vel: 0.52 },   // B3
        { t: 46.9, div: 'choir', midi: 57, dur: 0.4, vel: 0.50 },   // A3
        { t: 47.3, div: 'choir', midi: 55, dur: 0.4, vel: 0.52 },   // G3
        { t: 47.7, div: 'choir', midi: 57, dur: 0.4, vel: 0.50 },   // A3
        { t: 48.1, div: 'choir', midi: 59, dur: 0.4, vel: 0.52 },   // B3
        { t: 48.5, div: 'choir', midi: 62, dur: 0.4, vel: 0.54 },   // D4
        { t: 48.9, div: 'choir', midi: 61, dur: 0.8, vel: 0.52 },   // C#4

        // m.27-30: Third entry in pedal
        { t: 51.0, div: 'pedal', midi: 47, dur: 0.8, vel: 0.58 },   // B2
        { t: 51.8, div: 'pedal', midi: 49, dur: 0.4, vel: 0.56 },   // C#3
        { t: 52.2, div: 'pedal', midi: 50, dur: 0.8, vel: 0.58 },   // D3
        { t: 53.0, div: 'pedal', midi: 49, dur: 0.4, vel: 0.56 },   // C#3
        { t: 53.4, div: 'pedal', midi: 47, dur: 0.4, vel: 0.58 },   // B2
        { t: 53.8, div: 'pedal', midi: 45, dur: 0.4, vel: 0.56 },   // A2
        { t: 54.2, div: 'pedal', midi: 47, dur: 1.0, vel: 0.60 },   // B2
        // Manuals continue
        { t: 51.0, div: 'swell', midi: 71, dur: 0.4, vel: 0.58 },   // B4
        { t: 51.4, div: 'swell', midi: 69, dur: 0.4, vel: 0.56 },   // A4
        { t: 51.8, div: 'swell', midi: 71, dur: 0.4, vel: 0.58 },   // B4
        { t: 52.2, div: 'swell', midi: 73, dur: 0.4, vel: 0.60 },   // C#5
        { t: 52.6, div: 'swell', midi: 71, dur: 0.4, vel: 0.58 },   // B4
        { t: 53.0, div: 'swell', midi: 69, dur: 0.4, vel: 0.56 },   // A4
        { t: 53.4, div: 'swell', midi: 66, dur: 1.0, vel: 0.58 },   // F#4
        { t: 51.0, div: 'choir', midi: 62, dur: 0.4, vel: 0.50 },   // D4
        { t: 51.4, div: 'choir', midi: 61, dur: 0.4, vel: 0.48 },   // C#4
        { t: 51.8, div: 'choir', midi: 62, dur: 0.4, vel: 0.50 },   // D4
        { t: 52.2, div: 'choir', midi: 64, dur: 0.4, vel: 0.52 },   // E4
        { t: 52.6, div: 'choir', midi: 66, dur: 0.4, vel: 0.50 },   // F#4
        { t: 53.0, div: 'choir', midi: 64, dur: 0.4, vel: 0.48 },   // E4
        { t: 53.4, div: 'choir', midi: 62, dur: 1.0, vel: 0.50 },   // D4

        // m.31-34: Episode - modulating through D major, G major
        { t: 55.5, div: 'swell', midi: 74, dur: 0.6, vel: 0.60 },   // D5
        { t: 56.1, div: 'swell', midi: 73, dur: 0.4, vel: 0.58 },   // C#5
        { t: 56.5, div: 'swell', midi: 74, dur: 0.6, vel: 0.60 },   // D5
        { t: 57.1, div: 'swell', midi: 71, dur: 0.6, vel: 0.58 },   // B4
        { t: 55.5, div: 'choir', midi: 66, dur: 0.6, vel: 0.52 },   // F#4
        { t: 56.1, div: 'choir', midi: 64, dur: 0.4, vel: 0.50 },   // E4
        { t: 56.5, div: 'choir', midi: 62, dur: 0.6, vel: 0.52 },   // D4
        { t: 57.1, div: 'choir', midi: 59, dur: 0.6, vel: 0.50 },   // B3
        { t: 55.5, div: 'pedal', midi: 50, dur: 2.0, vel: 0.54 },   // D3

        // m.33: G major
        { t: 57.7, div: 'swell', midi: 71, dur: 0.6, vel: 0.61 },   // B4
        { t: 58.3, div: 'swell', midi: 69, dur: 0.4, vel: 0.59 },   // A4
        { t: 58.7, div: 'swell', midi: 67, dur: 0.6, vel: 0.61 },   // G4
        { t: 59.3, div: 'swell', midi: 69, dur: 0.6, vel: 0.59 },   // A4
        { t: 57.7, div: 'choir', midi: 62, dur: 0.6, vel: 0.52 },   // D4
        { t: 58.3, div: 'choir', midi: 59, dur: 0.4, vel: 0.50 },   // B3
        { t: 58.7, div: 'choir', midi: 55, dur: 0.6, vel: 0.52 },   // G3
        { t: 59.3, div: 'choir', midi: 57, dur: 0.6, vel: 0.50 },   // A3
        { t: 57.7, div: 'pedal', midi: 43, dur: 2.5, vel: 0.54 },   // G2

        // m.34-36: Subject returns in stretto
        { t: 60.5, div: 'swell', midi: 71, dur: 0.8, vel: 0.63 },   // B4
        { t: 61.3, div: 'swell', midi: 73, dur: 0.4, vel: 0.61 },   // C#5
        { t: 61.7, div: 'swell', midi: 74, dur: 0.8, vel: 0.63 },   // D5
        { t: 62.5, div: 'swell', midi: 73, dur: 0.4, vel: 0.61 },   // C#5
        { t: 62.9, div: 'swell', midi: 71, dur: 1.0, vel: 0.63 },   // B4
        // Stretto answer 1 beat later
        { t: 61.0, div: 'choir', midi: 59, dur: 0.8, vel: 0.54 },   // B3
        { t: 61.8, div: 'choir', midi: 61, dur: 0.4, vel: 0.52 },   // C#4
        { t: 62.2, div: 'choir', midi: 62, dur: 0.8, vel: 0.54 },   // D4
        { t: 63.0, div: 'choir', midi: 61, dur: 0.4, vel: 0.52 },   // C#4
        { t: 63.4, div: 'choir', midi: 59, dur: 1.0, vel: 0.54 },   // B3
        { t: 60.5, div: 'pedal', midi: 47, dur: 2.0, vel: 0.58 },   // B2
        { t: 62.5, div: 'pedal', midi: 42, dur: 2.0, vel: 0.56 },   // F#2

        // m.37-39: Fugue cadence, slowing to link
        { t: 64.5, div: 'swell', midi: 69, dur: 1.0, vel: 0.60 },   // A4
        { t: 65.5, div: 'swell', midi: 71, dur: 1.5, vel: 0.62 },   // B4
        { t: 64.5, div: 'choir', midi: 57, dur: 1.0, vel: 0.52 },   // A3
        { t: 65.5, div: 'choir', midi: 59, dur: 1.5, vel: 0.54 },   // B3
        { t: 64.5, div: 'pedal', midi: 45, dur: 1.0, vel: 0.54 },   // A2
        { t: 65.5, div: 'pedal', midi: 47, dur: 2.0, vel: 0.56 },   // B2

        // m.40-42: Transition passage, diminuendo
        { t: 68.0, div: 'swell', midi: 69, dur: 2.0, vel: 0.55 },   // A4
        { t: 68.0, div: 'choir', midi: 57, dur: 2.0, vel: 0.48 },   // A3
        { t: 68.0, div: 'choir', midi: 54, dur: 2.0, vel: 0.45 },   // F#3
        { t: 68.0, div: 'pedal', midi: 42, dur: 2.5, vel: 0.48 },   // F#2

        { t: 70.5, div: 'swell', midi: 66, dur: 2.0, vel: 0.52 },   // F#4
        { t: 70.5, div: 'choir', midi: 54, dur: 2.0, vel: 0.45 },   // F#3
        { t: 70.5, div: 'choir', midi: 50, dur: 2.0, vel: 0.42 },   // D3
        { t: 70.5, div: 'pedal', midi: 50, dur: 2.5, vel: 0.45 },   // D3

        { t: 73.0, div: 'swell', midi: 64, dur: 2.0, vel: 0.50 },   // E4
        { t: 73.0, div: 'choir', midi: 52, dur: 2.0, vel: 0.43 },   // E3
        { t: 73.0, div: 'choir', midi: 47, dur: 2.0, vel: 0.40 },   // B2
        { t: 73.0, div: 'pedal', midi: 40, dur: 2.5, vel: 0.43 },   // E2

        { t: 75.5, div: 'swell', midi: 62, dur: 2.0, vel: 0.48 },   // D4
        { t: 75.5, div: 'choir', midi: 50, dur: 2.0, vel: 0.42 },   // D3
        { t: 75.5, div: 'choir', midi: 45, dur: 2.0, vel: 0.39 },   // A2
        { t: 75.5, div: 'pedal', midi: 38, dur: 2.5, vel: 0.42 },   // D2

        // ===== VARIATION: Andantino - Prélude reprise =====
        // m.43-47: Same melody but with more active 16th-note accompaniment
        { t: 78.0, div: 'swell', midi: 71, dur: 1.5, vel: 0.65 },   // B4 melody
        { t: 78.0, div: 'choir', midi: 59, dur: 0.4, vel: 0.44 },   // B3
        { t: 78.4, div: 'choir', midi: 54, dur: 0.4, vel: 0.42 },   // F#3
        { t: 78.8, div: 'choir', midi: 59, dur: 0.4, vel: 0.44 },   // B3
        { t: 79.2, div: 'choir', midi: 62, dur: 0.4, vel: 0.46 },   // D4
        { t: 78.0, div: 'pedal', midi: 47, dur: 2.0, vel: 0.50 },   // B2

        { t: 79.5, div: 'swell', midi: 69, dur: 1.5, vel: 0.63 },   // A4
        { t: 79.5, div: 'choir', midi: 57, dur: 0.4, vel: 0.44 },   // A3
        { t: 79.9, div: 'choir', midi: 54, dur: 0.4, vel: 0.42 },   // F#3
        { t: 80.3, div: 'choir', midi: 57, dur: 0.4, vel: 0.44 },   // A3
        { t: 80.7, div: 'choir', midi: 61, dur: 0.4, vel: 0.46 },   // C#4
        { t: 79.5, div: 'pedal', midi: 42, dur: 2.0, vel: 0.48 },   // F#2

        // m.45: Rising with active figuration
        { t: 81.5, div: 'swell', midi: 71, dur: 1.5, vel: 0.66 },   // B4
        { t: 81.5, div: 'choir', midi: 55, dur: 0.4, vel: 0.44 },   // G3
        { t: 81.9, div: 'choir', midi: 59, dur: 0.4, vel: 0.46 },   // B3
        { t: 82.3, div: 'choir', midi: 62, dur: 0.4, vel: 0.44 },   // D4
        { t: 82.7, div: 'choir', midi: 59, dur: 0.4, vel: 0.46 },   // B3
        { t: 81.5, div: 'pedal', midi: 43, dur: 2.0, vel: 0.48 },   // G2

        // m.46: Climactic phrase
        { t: 83.5, div: 'swell', midi: 73, dur: 1.0, vel: 0.68 },   // C#5
        { t: 84.5, div: 'swell', midi: 71, dur: 1.5, vel: 0.66 },   // B4
        { t: 83.5, div: 'choir', midi: 61, dur: 0.4, vel: 0.46 },   // C#4
        { t: 83.9, div: 'choir', midi: 57, dur: 0.4, vel: 0.44 },   // A3
        { t: 84.3, div: 'choir', midi: 61, dur: 0.4, vel: 0.46 },   // C#4
        { t: 84.7, div: 'choir', midi: 64, dur: 0.4, vel: 0.48 },   // E4
        { t: 85.1, div: 'choir', midi: 61, dur: 0.4, vel: 0.46 },   // C#4
        { t: 85.5, div: 'choir', midi: 57, dur: 0.5, vel: 0.44 },   // A3
        { t: 83.5, div: 'pedal', midi: 45, dur: 3.0, vel: 0.50 },   // A2

        // m.47-48: Descending, fading
        { t: 86.5, div: 'swell', midi: 69, dur: 2.0, vel: 0.60 },   // A4
        { t: 86.5, div: 'choir', midi: 54, dur: 0.4, vel: 0.42 },   // F#3
        { t: 86.9, div: 'choir', midi: 50, dur: 0.4, vel: 0.40 },   // D3
        { t: 87.3, div: 'choir', midi: 54, dur: 0.4, vel: 0.42 },   // F#3
        { t: 87.7, div: 'choir', midi: 57, dur: 0.4, vel: 0.44 },   // A3
        { t: 86.5, div: 'pedal', midi: 50, dur: 2.5, vel: 0.46 },   // D3

        // m.49-50: Final phrase, dying away
        { t: 89.0, div: 'swell', midi: 66, dur: 2.0, vel: 0.55 },   // F#4
        { t: 89.0, div: 'choir', midi: 54, dur: 0.5, vel: 0.40 },   // F#3
        { t: 89.5, div: 'choir', midi: 50, dur: 0.5, vel: 0.38 },   // D3
        { t: 90.0, div: 'choir', midi: 47, dur: 0.5, vel: 0.40 },   // B2
        { t: 90.5, div: 'choir', midi: 50, dur: 0.5, vel: 0.38 },   // D3
        { t: 89.0, div: 'pedal', midi: 47, dur: 2.5, vel: 0.44 },   // B2

        // m.51: Final resolution to B major (Picardy third)
        { t: 91.5, div: 'swell', midi: 71, dur: 4.0, vel: 0.48 },   // B4
        { t: 91.5, div: 'swell', midi: 66, dur: 4.0, vel: 0.43 },   // F#4
        { t: 91.5, div: 'choir', midi: 63, dur: 4.0, vel: 0.38 },   // D#4 (major!)
        { t: 91.5, div: 'choir', midi: 59, dur: 4.0, vel: 0.36 },   // B3
        { t: 91.5, div: 'pedal', midi: 47, dur: 5.0, vel: 0.42 },   // B2
        { t: 91.5, div: 'pedal', midi: 35, dur: 5.0, vel: 0.38 },   // B1
    ]
};


// ============================================================
// 4. Vierne - Final from Symphony No. 2 in E minor, Op. 20
// ============================================================
// Brilliant toccata finale from the first cyclic Vierne symphony
// (1902). Opens Maestoso then launches into moto perpetuo of
// considerable drama. Themes derive from the first movement's
// germinal ideas. Intensity builds through perpetual motion
// figuration, culminating in a triumphant E major ending.
// ============================================================

const PIECE_VIERNE_FINAL2 = {
    title: "Final from Symphony No. 2",
    composer: "Louis Vierne",
    catalog: "Op. 20",
    key: "E minor",
    tempo: 108,
    tempoChanges: [
        { t: 0, tempo: 72, label: "Maestoso - Introduction" },
        { t: 12, tempo: 108, label: "Allegro - Moto perpetuo" },
        { t: 72, tempo: 96, label: "Largamente" },
        { t: 84, tempo: 116, label: "Più mosso - E major coda" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== Maestoso Introduction =====
        // m.1-2: Massive E minor chords, ff
        { t: 0,    div: 'great', midi: 76, dur: 1.5, vel: 0.95 },   // E5
        { t: 0,    div: 'great', midi: 71, dur: 1.5, vel: 0.91 },   // B4
        { t: 0,    div: 'great', midi: 67, dur: 1.5, vel: 0.91 },   // G4
        { t: 0,    div: 'great', midi: 64, dur: 1.5, vel: 0.89 },   // E4
        { t: 0,    div: 'swell', midi: 59, dur: 1.5, vel: 0.82 },   // B3
        { t: 0,    div: 'swell', midi: 55, dur: 1.5, vel: 0.82 },   // G3
        { t: 0,    div: 'pedal', midi: 40, dur: 2.0, vel: 0.93 },   // E2
        { t: 0,    div: 'pedal', midi: 28, dur: 2.0, vel: 0.89 },   // E1

        // m.2: Am chord
        { t: 2.0,  div: 'great', midi: 76, dur: 1.0, vel: 0.94 },   // E5
        { t: 2.0,  div: 'great', midi: 72, dur: 1.0, vel: 0.90 },   // C5
        { t: 2.0,  div: 'great', midi: 69, dur: 1.0, vel: 0.90 },   // A4
        { t: 2.0,  div: 'great', midi: 64, dur: 1.0, vel: 0.88 },   // E4
        { t: 2.0,  div: 'swell', midi: 57, dur: 1.0, vel: 0.81 },   // A3
        { t: 2.0,  div: 'pedal', midi: 45, dur: 1.5, vel: 0.92 },   // A2

        // m.3: B7 dominant
        { t: 3.5,  div: 'great', midi: 78, dur: 1.5, vel: 0.96 },   // F#5
        { t: 3.5,  div: 'great', midi: 75, dur: 1.5, vel: 0.92 },   // D#5
        { t: 3.5,  div: 'great', midi: 71, dur: 1.5, vel: 0.92 },   // B4
        { t: 3.5,  div: 'great', midi: 66, dur: 1.5, vel: 0.90 },   // F#4
        { t: 3.5,  div: 'swell', midi: 63, dur: 1.5, vel: 0.83 },   // D#4
        { t: 3.5,  div: 'swell', midi: 59, dur: 1.5, vel: 0.83 },   // B3
        { t: 3.5,  div: 'pedal', midi: 47, dur: 2.0, vel: 0.94 },   // B2
        { t: 3.5,  div: 'pedal', midi: 35, dur: 2.0, vel: 0.90 },   // B1

        // m.4: Resolution Em, descending octave motif
        { t: 5.5,  div: 'great', midi: 76, dur: 0.5, vel: 0.94 },   // E5
        { t: 6.0,  div: 'great', midi: 74, dur: 0.5, vel: 0.92 },   // D5
        { t: 6.5,  div: 'great', midi: 72, dur: 0.5, vel: 0.94 },   // C5
        { t: 7.0,  div: 'great', midi: 71, dur: 0.5, vel: 0.92 },   // B4
        { t: 7.5,  div: 'great', midi: 69, dur: 0.5, vel: 0.90 },   // A4
        { t: 8.0,  div: 'great', midi: 67, dur: 0.5, vel: 0.88 },   // G4
        { t: 8.5,  div: 'great', midi: 66, dur: 0.5, vel: 0.90 },   // F#4
        { t: 9.0,  div: 'great', midi: 64, dur: 1.5, vel: 0.92 },   // E4
        { t: 5.5,  div: 'pedal', midi: 40, dur: 5.0, vel: 0.92 },   // E2

        // m.5-6: Cadential build to toccata
        { t: 10.5, div: 'great', midi: 71, dur: 0.5, vel: 0.93 },   // B4
        { t: 11.0, div: 'great', midi: 69, dur: 0.5, vel: 0.91 },   // A4
        { t: 11.5, div: 'great', midi: 71, dur: 0.5, vel: 0.95 },   // B4
        { t: 10.5, div: 'swell', midi: 63, dur: 1.5, vel: 0.84 },   // D#4
        { t: 10.5, div: 'pedal', midi: 47, dur: 1.5, vel: 0.92 },   // B2

        // ===== Allegro - Moto perpetuo toccata =====
        // m.7-8: Perpetual 16th-note motion in E minor
        { t: 12.0, div: 'great', midi: 64, dur: 0.2, vel: 0.82 },   // E4
        { t: 12.2, div: 'great', midi: 66, dur: 0.2, vel: 0.80 },   // F#4
        { t: 12.4, div: 'great', midi: 67, dur: 0.2, vel: 0.82 },   // G4
        { t: 12.6, div: 'great', midi: 69, dur: 0.2, vel: 0.84 },   // A4
        { t: 12.8, div: 'great', midi: 71, dur: 0.2, vel: 0.82 },   // B4
        { t: 13.0, div: 'great', midi: 69, dur: 0.2, vel: 0.80 },   // A4
        { t: 13.2, div: 'great', midi: 67, dur: 0.2, vel: 0.82 },   // G4
        { t: 13.4, div: 'great', midi: 66, dur: 0.2, vel: 0.80 },   // F#4
        { t: 12.0, div: 'pedal', midi: 40, dur: 1.8, vel: 0.80 },   // E2

        // m.8: Continuing toccata
        { t: 13.6, div: 'great', midi: 64, dur: 0.2, vel: 0.83 },   // E4
        { t: 13.8, div: 'great', midi: 67, dur: 0.2, vel: 0.81 },   // G4
        { t: 14.0, div: 'great', midi: 71, dur: 0.2, vel: 0.83 },   // B4
        { t: 14.2, div: 'great', midi: 67, dur: 0.2, vel: 0.81 },   // G4
        { t: 14.4, div: 'great', midi: 64, dur: 0.2, vel: 0.83 },   // E4
        { t: 14.6, div: 'great', midi: 59, dur: 0.2, vel: 0.81 },   // B3
        { t: 14.8, div: 'great', midi: 64, dur: 0.2, vel: 0.83 },   // E4
        { t: 15.0, div: 'great', midi: 67, dur: 0.2, vel: 0.81 },   // G4
        { t: 13.6, div: 'pedal', midi: 47, dur: 1.8, vel: 0.80 },   // B2

        // m.9-10: Theme A from first movement, altered
        { t: 15.2, div: 'great', midi: 71, dur: 0.2, vel: 0.85 },   // B4
        { t: 15.4, div: 'great', midi: 72, dur: 0.2, vel: 0.83 },   // C5
        { t: 15.6, div: 'great', midi: 71, dur: 0.2, vel: 0.85 },   // B4
        { t: 15.8, div: 'great', midi: 69, dur: 0.2, vel: 0.83 },   // A4
        { t: 16.0, div: 'great', midi: 67, dur: 0.2, vel: 0.85 },   // G4
        { t: 16.2, div: 'great', midi: 69, dur: 0.2, vel: 0.83 },   // A4
        { t: 16.4, div: 'great', midi: 71, dur: 0.2, vel: 0.85 },   // B4
        { t: 16.6, div: 'great', midi: 72, dur: 0.2, vel: 0.87 },   // C5
        { t: 15.2, div: 'pedal', midi: 40, dur: 1.8, vel: 0.82 },   // E2

        // m.10: Second half
        { t: 16.8, div: 'great', midi: 74, dur: 0.2, vel: 0.86 },   // D5
        { t: 17.0, div: 'great', midi: 72, dur: 0.2, vel: 0.84 },   // C5
        { t: 17.2, div: 'great', midi: 71, dur: 0.2, vel: 0.86 },   // B4
        { t: 17.4, div: 'great', midi: 69, dur: 0.2, vel: 0.84 },   // A4
        { t: 17.6, div: 'great', midi: 67, dur: 0.2, vel: 0.86 },   // G4
        { t: 17.8, div: 'great', midi: 66, dur: 0.2, vel: 0.84 },   // F#4
        { t: 18.0, div: 'great', midi: 64, dur: 0.2, vel: 0.82 },   // E4
        { t: 18.2, div: 'great', midi: 62, dur: 0.2, vel: 0.80 },   // D4
        { t: 16.8, div: 'pedal', midi: 43, dur: 1.8, vel: 0.82 },   // G2

        // m.11-12: Rising sequence, Am territory
        { t: 18.4, div: 'great', midi: 60, dur: 0.2, vel: 0.84 },   // C4
        { t: 18.6, div: 'great', midi: 64, dur: 0.2, vel: 0.82 },   // E4
        { t: 18.8, div: 'great', midi: 67, dur: 0.2, vel: 0.84 },   // G4
        { t: 19.0, div: 'great', midi: 69, dur: 0.2, vel: 0.86 },   // A4
        { t: 19.2, div: 'great', midi: 72, dur: 0.2, vel: 0.84 },   // C5
        { t: 19.4, div: 'great', midi: 69, dur: 0.2, vel: 0.82 },   // A4
        { t: 19.6, div: 'great', midi: 67, dur: 0.2, vel: 0.84 },   // G4
        { t: 19.8, div: 'great', midi: 64, dur: 0.2, vel: 0.82 },   // E4
        { t: 18.4, div: 'pedal', midi: 45, dur: 1.8, vel: 0.82 },   // A2

        // m.12: B7 dominant approach
        { t: 20.0, div: 'great', midi: 63, dur: 0.2, vel: 0.86 },   // D#4
        { t: 20.2, div: 'great', midi: 66, dur: 0.2, vel: 0.84 },   // F#4
        { t: 20.4, div: 'great', midi: 69, dur: 0.2, vel: 0.86 },   // A4
        { t: 20.6, div: 'great', midi: 71, dur: 0.2, vel: 0.88 },   // B4
        { t: 20.8, div: 'great', midi: 75, dur: 0.2, vel: 0.86 },   // D#5
        { t: 21.0, div: 'great', midi: 71, dur: 0.2, vel: 0.84 },   // B4
        { t: 21.2, div: 'great', midi: 69, dur: 0.2, vel: 0.86 },   // A4
        { t: 21.4, div: 'great', midi: 66, dur: 0.2, vel: 0.84 },   // F#4
        { t: 20.0, div: 'pedal', midi: 47, dur: 1.8, vel: 0.84 },   // B2

        // m.13-14: Second theme area - toccata continues with Swell melody
        { t: 21.6, div: 'swell', midi: 76, dur: 1.2, vel: 0.78 },   // E5 melody
        { t: 21.6, div: 'great', midi: 64, dur: 0.2, vel: 0.80 },   // E4
        { t: 21.8, div: 'great', midi: 67, dur: 0.2, vel: 0.78 },   // G4
        { t: 22.0, div: 'great', midi: 64, dur: 0.2, vel: 0.80 },   // E4
        { t: 22.2, div: 'great', midi: 59, dur: 0.2, vel: 0.78 },   // B3
        { t: 22.4, div: 'great', midi: 64, dur: 0.2, vel: 0.80 },   // E4
        { t: 22.6, div: 'great', midi: 67, dur: 0.2, vel: 0.78 },   // G4
        { t: 21.6, div: 'pedal', midi: 40, dur: 1.8, vel: 0.80 },   // E2

        // m.14
        { t: 22.8, div: 'swell', midi: 74, dur: 1.2, vel: 0.77 },   // D5
        { t: 22.8, div: 'great', midi: 62, dur: 0.2, vel: 0.80 },   // D4
        { t: 23.0, div: 'great', midi: 66, dur: 0.2, vel: 0.78 },   // F#4
        { t: 23.2, div: 'great', midi: 69, dur: 0.2, vel: 0.80 },   // A4
        { t: 23.4, div: 'great', midi: 66, dur: 0.2, vel: 0.78 },   // F#4
        { t: 23.6, div: 'great', midi: 62, dur: 0.2, vel: 0.80 },   // D4
        { t: 23.8, div: 'great', midi: 57, dur: 0.2, vel: 0.78 },   // A3
        { t: 22.8, div: 'pedal', midi: 50, dur: 1.8, vel: 0.80 },   // D3

        // m.15-16: Developing toccata, wider leaps
        { t: 24.0, div: 'swell', midi: 72, dur: 1.2, vel: 0.79 },   // C5
        { t: 24.0, div: 'great', midi: 60, dur: 0.2, vel: 0.82 },   // C4
        { t: 24.2, div: 'great', midi: 64, dur: 0.2, vel: 0.80 },   // E4
        { t: 24.4, div: 'great', midi: 67, dur: 0.2, vel: 0.82 },   // G4
        { t: 24.6, div: 'great', midi: 72, dur: 0.2, vel: 0.84 },   // C5
        { t: 24.8, div: 'great', midi: 67, dur: 0.2, vel: 0.82 },   // G4
        { t: 25.0, div: 'great', midi: 64, dur: 0.2, vel: 0.80 },   // E4
        { t: 24.0, div: 'pedal', midi: 48, dur: 1.8, vel: 0.82 },   // C3

        { t: 25.2, div: 'swell', midi: 71, dur: 1.2, vel: 0.80 },   // B4
        { t: 25.2, div: 'great', midi: 59, dur: 0.2, vel: 0.83 },   // B3
        { t: 25.4, div: 'great', midi: 63, dur: 0.2, vel: 0.81 },   // D#4
        { t: 25.6, div: 'great', midi: 66, dur: 0.2, vel: 0.83 },   // F#4
        { t: 25.8, div: 'great', midi: 71, dur: 0.2, vel: 0.85 },   // B4
        { t: 26.0, div: 'great', midi: 66, dur: 0.2, vel: 0.83 },   // F#4
        { t: 26.2, div: 'great', midi: 63, dur: 0.2, vel: 0.81 },   // D#4
        { t: 25.2, div: 'pedal', midi: 47, dur: 1.8, vel: 0.84 },   // B2

        // m.17-20: Intensifying sequence, chromatic ascent
        { t: 26.4, div: 'great', midi: 64, dur: 0.2, vel: 0.85 },   // E4
        { t: 26.6, div: 'great', midi: 67, dur: 0.2, vel: 0.83 },   // G4
        { t: 26.8, div: 'great', midi: 71, dur: 0.2, vel: 0.85 },   // B4
        { t: 27.0, div: 'great', midi: 74, dur: 0.2, vel: 0.87 },   // D5
        { t: 27.2, div: 'great', midi: 71, dur: 0.2, vel: 0.85 },   // B4
        { t: 27.4, div: 'great', midi: 67, dur: 0.2, vel: 0.83 },   // G4
        { t: 27.6, div: 'great', midi: 72, dur: 0.2, vel: 0.85 },   // C5
        { t: 27.8, div: 'great', midi: 76, dur: 0.2, vel: 0.87 },   // E5
        { t: 26.4, div: 'pedal', midi: 40, dur: 1.8, vel: 0.84 },   // E2

        // m.18: F# diminished
        { t: 28.0, div: 'great', midi: 72, dur: 0.2, vel: 0.86 },   // C5
        { t: 28.2, div: 'great', midi: 69, dur: 0.2, vel: 0.84 },   // A4
        { t: 28.4, div: 'great', midi: 66, dur: 0.2, vel: 0.86 },   // F#4
        { t: 28.6, div: 'great', midi: 63, dur: 0.2, vel: 0.84 },   // D#4
        { t: 28.8, div: 'great', midi: 66, dur: 0.2, vel: 0.86 },   // F#4
        { t: 29.0, div: 'great', midi: 69, dur: 0.2, vel: 0.88 },   // A4
        { t: 29.2, div: 'great', midi: 72, dur: 0.2, vel: 0.86 },   // C5
        { t: 29.4, div: 'great', midi: 75, dur: 0.2, vel: 0.88 },   // D#5
        { t: 28.0, div: 'pedal', midi: 42, dur: 1.8, vel: 0.84 },   // F#2

        // m.19: Am - dramatic climax approach
        { t: 29.6, div: 'great', midi: 76, dur: 0.2, vel: 0.88 },   // E5
        { t: 29.8, div: 'great', midi: 72, dur: 0.2, vel: 0.86 },   // C5
        { t: 30.0, div: 'great', midi: 69, dur: 0.2, vel: 0.88 },   // A4
        { t: 30.2, div: 'great', midi: 64, dur: 0.2, vel: 0.86 },   // E4
        { t: 30.4, div: 'great', midi: 69, dur: 0.2, vel: 0.88 },   // A4
        { t: 30.6, div: 'great', midi: 72, dur: 0.2, vel: 0.90 },   // C5
        { t: 30.8, div: 'great', midi: 76, dur: 0.2, vel: 0.88 },   // E5
        { t: 31.0, div: 'great', midi: 79, dur: 0.2, vel: 0.90 },   // G5
        { t: 29.6, div: 'pedal', midi: 45, dur: 1.8, vel: 0.86 },   // A2

        // m.20: B dominant pedal
        { t: 31.2, div: 'great', midi: 78, dur: 0.2, vel: 0.90 },   // F#5
        { t: 31.4, div: 'great', midi: 75, dur: 0.2, vel: 0.88 },   // D#5
        { t: 31.6, div: 'great', midi: 71, dur: 0.2, vel: 0.90 },   // B4
        { t: 31.8, div: 'great', midi: 66, dur: 0.2, vel: 0.88 },   // F#4
        { t: 32.0, div: 'great', midi: 63, dur: 0.2, vel: 0.90 },   // D#4
        { t: 32.2, div: 'great', midi: 66, dur: 0.2, vel: 0.92 },   // F#4
        { t: 32.4, div: 'great', midi: 71, dur: 0.2, vel: 0.90 },   // B4
        { t: 32.6, div: 'great', midi: 75, dur: 0.2, vel: 0.92 },   // D#5
        { t: 31.2, div: 'pedal', midi: 47, dur: 1.8, vel: 0.88 },   // B2

        // m.21-24: Central development, brooding disquiet
        { t: 32.8, div: 'great', midi: 76, dur: 0.2, vel: 0.86 },   // E5
        { t: 33.0, div: 'great', midi: 74, dur: 0.2, vel: 0.84 },   // D5
        { t: 33.2, div: 'great', midi: 72, dur: 0.2, vel: 0.86 },   // C5
        { t: 33.4, div: 'great', midi: 71, dur: 0.2, vel: 0.84 },   // B4
        { t: 33.6, div: 'great', midi: 69, dur: 0.2, vel: 0.86 },   // A4
        { t: 33.8, div: 'great', midi: 67, dur: 0.2, vel: 0.84 },   // G4
        { t: 34.0, div: 'great', midi: 66, dur: 0.2, vel: 0.82 },   // F#4
        { t: 34.2, div: 'great', midi: 64, dur: 0.2, vel: 0.80 },   // E4
        { t: 32.8, div: 'pedal', midi: 40, dur: 1.8, vel: 0.84 },   // E2

        // m.22: Cm territory (chromatic drift)
        { t: 34.4, div: 'great', midi: 63, dur: 0.2, vel: 0.84 },   // Eb4
        { t: 34.6, div: 'great', midi: 67, dur: 0.2, vel: 0.82 },   // G4
        { t: 34.8, div: 'great', midi: 72, dur: 0.2, vel: 0.84 },   // C5
        { t: 35.0, div: 'great', midi: 67, dur: 0.2, vel: 0.82 },   // G4
        { t: 35.2, div: 'great', midi: 63, dur: 0.2, vel: 0.84 },   // Eb4
        { t: 35.4, div: 'great', midi: 60, dur: 0.2, vel: 0.82 },   // C4
        { t: 35.6, div: 'great', midi: 63, dur: 0.2, vel: 0.84 },   // Eb4
        { t: 35.8, div: 'great', midi: 67, dur: 0.2, vel: 0.82 },   // G4
        { t: 34.4, div: 'pedal', midi: 48, dur: 1.8, vel: 0.82 },   // C3

        // m.23: Dm
        { t: 36.0, div: 'great', midi: 62, dur: 0.2, vel: 0.85 },   // D4
        { t: 36.2, div: 'great', midi: 65, dur: 0.2, vel: 0.83 },   // F4
        { t: 36.4, div: 'great', midi: 69, dur: 0.2, vel: 0.85 },   // A4
        { t: 36.6, div: 'great', midi: 74, dur: 0.2, vel: 0.87 },   // D5
        { t: 36.8, div: 'great', midi: 69, dur: 0.2, vel: 0.85 },   // A4
        { t: 37.0, div: 'great', midi: 65, dur: 0.2, vel: 0.83 },   // F4
        { t: 37.2, div: 'great', midi: 62, dur: 0.2, vel: 0.85 },   // D4
        { t: 37.4, div: 'great', midi: 57, dur: 0.2, vel: 0.83 },   // A3
        { t: 36.0, div: 'pedal', midi: 50, dur: 1.8, vel: 0.84 },   // D3

        // m.24: Back to Em via B7
        { t: 37.6, div: 'great', midi: 59, dur: 0.2, vel: 0.86 },   // B3
        { t: 37.8, div: 'great', midi: 63, dur: 0.2, vel: 0.84 },   // D#4
        { t: 38.0, div: 'great', midi: 66, dur: 0.2, vel: 0.86 },   // F#4
        { t: 38.2, div: 'great', midi: 69, dur: 0.2, vel: 0.88 },   // A4
        { t: 38.4, div: 'great', midi: 71, dur: 0.2, vel: 0.86 },   // B4
        { t: 38.6, div: 'great', midi: 75, dur: 0.2, vel: 0.88 },   // D#5
        { t: 38.8, div: 'great', midi: 78, dur: 0.2, vel: 0.90 },   // F#5
        { t: 39.0, div: 'great', midi: 75, dur: 0.2, vel: 0.88 },   // D#5
        { t: 37.6, div: 'pedal', midi: 47, dur: 1.8, vel: 0.86 },   // B2

        // m.25-28: Recapitulation of main toccata material
        { t: 39.2, div: 'great', midi: 76, dur: 0.2, vel: 0.88 },   // E5
        { t: 39.4, div: 'great', midi: 74, dur: 0.2, vel: 0.86 },   // D5
        { t: 39.6, div: 'great', midi: 72, dur: 0.2, vel: 0.88 },   // C5
        { t: 39.8, div: 'great', midi: 71, dur: 0.2, vel: 0.86 },   // B4
        { t: 40.0, div: 'great', midi: 69, dur: 0.2, vel: 0.88 },   // A4
        { t: 40.2, div: 'great', midi: 67, dur: 0.2, vel: 0.86 },   // G4
        { t: 40.4, div: 'great', midi: 66, dur: 0.2, vel: 0.84 },   // F#4
        { t: 40.6, div: 'great', midi: 64, dur: 0.2, vel: 0.86 },   // E4
        { t: 39.2, div: 'pedal', midi: 40, dur: 1.8, vel: 0.86 },   // E2

        // m.26: Driving 16ths
        { t: 40.8, div: 'great', midi: 64, dur: 0.2, vel: 0.87 },   // E4
        { t: 41.0, div: 'great', midi: 67, dur: 0.2, vel: 0.85 },   // G4
        { t: 41.2, div: 'great', midi: 71, dur: 0.2, vel: 0.87 },   // B4
        { t: 41.4, div: 'great', midi: 76, dur: 0.2, vel: 0.89 },   // E5
        { t: 41.6, div: 'great', midi: 71, dur: 0.2, vel: 0.87 },   // B4
        { t: 41.8, div: 'great', midi: 67, dur: 0.2, vel: 0.85 },   // G4
        { t: 42.0, div: 'great', midi: 64, dur: 0.2, vel: 0.87 },   // E4
        { t: 42.2, div: 'great', midi: 59, dur: 0.2, vel: 0.85 },   // B3
        { t: 40.8, div: 'pedal', midi: 40, dur: 1.8, vel: 0.86 },   // E2

        // m.27-28: Wide arpeggiated toccata
        { t: 42.4, div: 'great', midi: 57, dur: 0.2, vel: 0.88 },   // A3
        { t: 42.6, div: 'great', midi: 60, dur: 0.2, vel: 0.86 },   // C4
        { t: 42.8, div: 'great', midi: 64, dur: 0.2, vel: 0.88 },   // E4
        { t: 43.0, div: 'great', midi: 69, dur: 0.2, vel: 0.90 },   // A4
        { t: 43.2, div: 'great', midi: 72, dur: 0.2, vel: 0.88 },   // C5
        { t: 43.4, div: 'great', midi: 76, dur: 0.2, vel: 0.90 },   // E5
        { t: 43.6, div: 'great', midi: 72, dur: 0.2, vel: 0.88 },   // C5
        { t: 43.8, div: 'great', midi: 69, dur: 0.2, vel: 0.86 },   // A4
        { t: 42.4, div: 'pedal', midi: 45, dur: 1.8, vel: 0.86 },   // A2

        // m.28: B7 push toward recap
        { t: 44.0, div: 'great', midi: 66, dur: 0.2, vel: 0.90 },   // F#4
        { t: 44.2, div: 'great', midi: 69, dur: 0.2, vel: 0.88 },   // A4
        { t: 44.4, div: 'great', midi: 71, dur: 0.2, vel: 0.90 },   // B4
        { t: 44.6, div: 'great', midi: 75, dur: 0.2, vel: 0.92 },   // D#5
        { t: 44.8, div: 'great', midi: 78, dur: 0.2, vel: 0.90 },   // F#5
        { t: 45.0, div: 'great', midi: 75, dur: 0.2, vel: 0.88 },   // D#5
        { t: 45.2, div: 'great', midi: 71, dur: 0.2, vel: 0.90 },   // B4
        { t: 45.4, div: 'great', midi: 66, dur: 0.2, vel: 0.88 },   // F#4
        { t: 44.0, div: 'pedal', midi: 47, dur: 1.8, vel: 0.88 },   // B2

        // m.29-34: Extended toccata development with both manuals
        { t: 45.6, div: 'great', midi: 64, dur: 0.2, vel: 0.88 },   // E4
        { t: 45.8, div: 'great', midi: 71, dur: 0.2, vel: 0.86 },   // B4
        { t: 46.0, div: 'great', midi: 76, dur: 0.2, vel: 0.88 },   // E5
        { t: 46.2, div: 'great', midi: 71, dur: 0.2, vel: 0.86 },   // B4
        { t: 46.4, div: 'great', midi: 64, dur: 0.2, vel: 0.88 },   // E4
        { t: 46.6, div: 'great', midi: 71, dur: 0.2, vel: 0.90 },   // B4
        { t: 46.8, div: 'great', midi: 76, dur: 0.2, vel: 0.88 },   // E5
        { t: 47.0, div: 'great', midi: 79, dur: 0.2, vel: 0.90 },   // G5
        { t: 45.6, div: 'swell', midi: 67, dur: 1.8, vel: 0.80 },   // G4 sustained
        { t: 45.6, div: 'pedal', midi: 40, dur: 1.8, vel: 0.88 },   // E2

        // m.30: Dm approach
        { t: 47.2, div: 'great', midi: 77, dur: 0.2, vel: 0.88 },   // F5
        { t: 47.4, div: 'great', midi: 74, dur: 0.2, vel: 0.86 },   // D5
        { t: 47.6, div: 'great', midi: 69, dur: 0.2, vel: 0.88 },   // A4
        { t: 47.8, div: 'great', midi: 65, dur: 0.2, vel: 0.86 },   // F4
        { t: 48.0, div: 'great', midi: 62, dur: 0.2, vel: 0.88 },   // D4
        { t: 48.2, div: 'great', midi: 65, dur: 0.2, vel: 0.86 },   // F4
        { t: 48.4, div: 'great', midi: 69, dur: 0.2, vel: 0.88 },   // A4
        { t: 48.6, div: 'great', midi: 74, dur: 0.2, vel: 0.86 },   // D5
        { t: 47.2, div: 'pedal', midi: 50, dur: 1.8, vel: 0.86 },   // D3

        // m.31: Cm
        { t: 48.8, div: 'great', midi: 72, dur: 0.2, vel: 0.87 },   // C5
        { t: 49.0, div: 'great', midi: 75, dur: 0.2, vel: 0.85 },   // Eb5
        { t: 49.2, div: 'great', midi: 72, dur: 0.2, vel: 0.87 },   // C5
        { t: 49.4, div: 'great', midi: 67, dur: 0.2, vel: 0.85 },   // G4
        { t: 49.6, div: 'great', midi: 63, dur: 0.2, vel: 0.87 },   // Eb4
        { t: 49.8, div: 'great', midi: 60, dur: 0.2, vel: 0.85 },   // C4
        { t: 50.0, div: 'great', midi: 63, dur: 0.2, vel: 0.87 },   // Eb4
        { t: 50.2, div: 'great', midi: 67, dur: 0.2, vel: 0.85 },   // G4
        { t: 48.8, div: 'pedal', midi: 48, dur: 1.8, vel: 0.86 },   // C3

        // m.32-34: Return to Em, building to climax
        { t: 50.4, div: 'great', midi: 64, dur: 0.2, vel: 0.89 },   // E4
        { t: 50.6, div: 'great', midi: 67, dur: 0.2, vel: 0.87 },   // G4
        { t: 50.8, div: 'great', midi: 71, dur: 0.2, vel: 0.89 },   // B4
        { t: 51.0, div: 'great', midi: 76, dur: 0.2, vel: 0.91 },   // E5
        { t: 51.2, div: 'great', midi: 79, dur: 0.2, vel: 0.89 },   // G5
        { t: 51.4, div: 'great', midi: 76, dur: 0.2, vel: 0.87 },   // E5
        { t: 51.6, div: 'great', midi: 71, dur: 0.2, vel: 0.89 },   // B4
        { t: 51.8, div: 'great', midi: 67, dur: 0.2, vel: 0.87 },   // G4
        { t: 50.4, div: 'pedal', midi: 40, dur: 1.8, vel: 0.88 },   // E2

        // m.33: Ascending chromatic drama
        { t: 52.0, div: 'great', midi: 66, dur: 0.2, vel: 0.90 },   // F#4
        { t: 52.2, div: 'great', midi: 69, dur: 0.2, vel: 0.88 },   // A4
        { t: 52.4, div: 'great', midi: 71, dur: 0.2, vel: 0.90 },   // B4
        { t: 52.6, div: 'great', midi: 74, dur: 0.2, vel: 0.92 },   // D5
        { t: 52.8, div: 'great', midi: 76, dur: 0.2, vel: 0.90 },   // E5
        { t: 53.0, div: 'great', midi: 78, dur: 0.2, vel: 0.92 },   // F#5
        { t: 53.2, div: 'great', midi: 79, dur: 0.2, vel: 0.94 },   // G5
        { t: 53.4, div: 'great', midi: 81, dur: 0.2, vel: 0.92 },   // A5
        { t: 52.0, div: 'pedal', midi: 42, dur: 1.8, vel: 0.88 },   // F#2

        // m.34: Massive B dominant preparation
        { t: 53.6, div: 'great', midi: 83, dur: 0.5, vel: 0.95 },   // B5
        { t: 53.6, div: 'swell', midi: 75, dur: 0.5, vel: 0.88 },   // D#5
        { t: 54.1, div: 'great', midi: 78, dur: 0.5, vel: 0.93 },   // F#5
        { t: 54.1, div: 'swell', midi: 71, dur: 0.5, vel: 0.86 },   // B4
        { t: 54.6, div: 'great', midi: 75, dur: 0.5, vel: 0.95 },   // D#5
        { t: 54.6, div: 'swell', midi: 66, dur: 0.5, vel: 0.88 },   // F#4
        { t: 55.1, div: 'great', midi: 71, dur: 0.5, vel: 0.93 },   // B4
        { t: 53.6, div: 'pedal', midi: 47, dur: 2.5, vel: 0.92 },   // B2
        { t: 53.6, div: 'pedal', midi: 35, dur: 2.5, vel: 0.88 },   // B1

        // m.35-40: Second half of toccata, relentless motion
        { t: 56.0, div: 'great', midi: 64, dur: 0.2, vel: 0.88 },   // E4
        { t: 56.2, div: 'great', midi: 66, dur: 0.2, vel: 0.86 },   // F#4
        { t: 56.4, div: 'great', midi: 67, dur: 0.2, vel: 0.88 },   // G4
        { t: 56.6, div: 'great', midi: 71, dur: 0.2, vel: 0.90 },   // B4
        { t: 56.8, div: 'great', midi: 74, dur: 0.2, vel: 0.88 },   // D5
        { t: 57.0, div: 'great', midi: 71, dur: 0.2, vel: 0.86 },   // B4
        { t: 57.2, div: 'great', midi: 67, dur: 0.2, vel: 0.88 },   // G4
        { t: 57.4, div: 'great', midi: 64, dur: 0.2, vel: 0.86 },   // E4
        { t: 56.0, div: 'pedal', midi: 40, dur: 1.8, vel: 0.86 },   // E2

        // m.36: Am toccata
        { t: 57.6, div: 'great', midi: 69, dur: 0.2, vel: 0.89 },   // A4
        { t: 57.8, div: 'great', midi: 72, dur: 0.2, vel: 0.87 },   // C5
        { t: 58.0, div: 'great', midi: 76, dur: 0.2, vel: 0.89 },   // E5
        { t: 58.2, div: 'great', midi: 72, dur: 0.2, vel: 0.87 },   // C5
        { t: 58.4, div: 'great', midi: 69, dur: 0.2, vel: 0.89 },   // A4
        { t: 58.6, div: 'great', midi: 64, dur: 0.2, vel: 0.87 },   // E4
        { t: 58.8, div: 'great', midi: 60, dur: 0.2, vel: 0.85 },   // C4
        { t: 59.0, div: 'great', midi: 57, dur: 0.2, vel: 0.83 },   // A3
        { t: 57.6, div: 'pedal', midi: 45, dur: 1.8, vel: 0.86 },   // A2

        // m.37-38: Dominant pedal point, building tension
        { t: 59.2, div: 'great', midi: 63, dur: 0.2, vel: 0.90 },   // D#4
        { t: 59.4, div: 'great', midi: 66, dur: 0.2, vel: 0.88 },   // F#4
        { t: 59.6, div: 'great', midi: 71, dur: 0.2, vel: 0.90 },   // B4
        { t: 59.8, div: 'great', midi: 75, dur: 0.2, vel: 0.92 },   // D#5
        { t: 60.0, div: 'great', midi: 78, dur: 0.2, vel: 0.90 },   // F#5
        { t: 60.2, div: 'great', midi: 75, dur: 0.2, vel: 0.88 },   // D#5
        { t: 60.4, div: 'great', midi: 71, dur: 0.2, vel: 0.90 },   // B4
        { t: 60.6, div: 'great', midi: 66, dur: 0.2, vel: 0.88 },   // F#4
        { t: 59.2, div: 'pedal', midi: 47, dur: 1.8, vel: 0.88 },   // B2

        // m.38: Repeated dominant
        { t: 60.8, div: 'great', midi: 63, dur: 0.2, vel: 0.91 },   // D#4
        { t: 61.0, div: 'great', midi: 66, dur: 0.2, vel: 0.89 },   // F#4
        { t: 61.2, div: 'great', midi: 69, dur: 0.2, vel: 0.91 },   // A4
        { t: 61.4, div: 'great', midi: 71, dur: 0.2, vel: 0.93 },   // B4
        { t: 61.6, div: 'great', midi: 75, dur: 0.2, vel: 0.91 },   // D#5
        { t: 61.8, div: 'great', midi: 78, dur: 0.2, vel: 0.93 },   // F#5
        { t: 62.0, div: 'great', midi: 81, dur: 0.2, vel: 0.95 },   // A5
        { t: 62.2, div: 'great', midi: 83, dur: 0.3, vel: 0.96 },   // B5
        { t: 60.8, div: 'pedal', midi: 47, dur: 1.8, vel: 0.90 },   // B2

        // m.39-40: Final toccata climax, fff
        { t: 62.5, div: 'great', midi: 83, dur: 0.2, vel: 0.96 },   // B5
        { t: 62.7, div: 'great', midi: 79, dur: 0.2, vel: 0.94 },   // G5
        { t: 62.9, div: 'great', midi: 76, dur: 0.2, vel: 0.96 },   // E5
        { t: 63.1, div: 'great', midi: 71, dur: 0.2, vel: 0.94 },   // B4
        { t: 63.3, div: 'great', midi: 67, dur: 0.2, vel: 0.96 },   // G4
        { t: 63.5, div: 'great', midi: 64, dur: 0.2, vel: 0.94 },   // E4
        { t: 63.7, div: 'great', midi: 67, dur: 0.2, vel: 0.96 },   // G4
        { t: 63.9, div: 'great', midi: 71, dur: 0.2, vel: 0.94 },   // B4
        { t: 62.5, div: 'pedal', midi: 40, dur: 1.8, vel: 0.92 },   // E2

        // m.40: Penultimate rush
        { t: 64.1, div: 'great', midi: 76, dur: 0.2, vel: 0.96 },   // E5
        { t: 64.3, div: 'great', midi: 79, dur: 0.2, vel: 0.94 },   // G5
        { t: 64.5, div: 'great', midi: 83, dur: 0.2, vel: 0.96 },   // B5
        { t: 64.7, div: 'great', midi: 79, dur: 0.2, vel: 0.94 },   // G5
        { t: 64.9, div: 'great', midi: 76, dur: 0.2, vel: 0.96 },   // E5
        { t: 65.1, div: 'great', midi: 71, dur: 0.2, vel: 0.94 },   // B4
        { t: 65.3, div: 'great', midi: 67, dur: 0.2, vel: 0.92 },   // G4
        { t: 65.5, div: 'great', midi: 64, dur: 0.2, vel: 0.90 },   // E4
        { t: 64.1, div: 'pedal', midi: 40, dur: 1.8, vel: 0.92 },   // E2

        // m.41-44: Cadential approach - chords with toccata
        { t: 65.7, div: 'great', midi: 76, dur: 1.5, vel: 0.95 },   // E5
        { t: 65.7, div: 'great', midi: 71, dur: 1.5, vel: 0.91 },   // B4
        { t: 65.7, div: 'great', midi: 67, dur: 1.5, vel: 0.91 },   // G4
        { t: 65.7, div: 'great', midi: 64, dur: 1.5, vel: 0.89 },   // E4
        { t: 65.7, div: 'pedal', midi: 40, dur: 2.0, vel: 0.92 },   // E2
        { t: 65.7, div: 'pedal', midi: 28, dur: 2.0, vel: 0.88 },   // E1

        // m.42: Am chord
        { t: 67.5, div: 'great', midi: 76, dur: 1.0, vel: 0.94 },   // E5
        { t: 67.5, div: 'great', midi: 72, dur: 1.0, vel: 0.90 },   // C5
        { t: 67.5, div: 'great', midi: 69, dur: 1.0, vel: 0.90 },   // A4
        { t: 67.5, div: 'pedal', midi: 45, dur: 1.5, vel: 0.90 },   // A2

        // m.43: B major dominant
        { t: 69.0, div: 'great', midi: 78, dur: 1.5, vel: 0.96 },   // F#5
        { t: 69.0, div: 'great', midi: 75, dur: 1.5, vel: 0.92 },   // D#5
        { t: 69.0, div: 'great', midi: 71, dur: 1.5, vel: 0.92 },   // B4
        { t: 69.0, div: 'swell', midi: 66, dur: 1.5, vel: 0.84 },   // F#4
        { t: 69.0, div: 'swell', midi: 63, dur: 1.5, vel: 0.84 },   // D#4
        { t: 69.0, div: 'pedal', midi: 47, dur: 2.0, vel: 0.94 },   // B2
        { t: 69.0, div: 'pedal', midi: 35, dur: 2.0, vel: 0.90 },   // B1

        // m.44: Fermata on dominant
        { t: 71.0, div: 'great', midi: 78, dur: 2.0, vel: 0.94 },   // F#5
        { t: 71.0, div: 'great', midi: 75, dur: 2.0, vel: 0.90 },   // D#5
        { t: 71.0, div: 'great', midi: 71, dur: 2.0, vel: 0.90 },   // B4
        { t: 71.0, div: 'pedal', midi: 47, dur: 2.5, vel: 0.92 },   // B2

        // ===== Largamente - brief broadening =====
        // m.45: Theme stated broadly
        { t: 73.5, div: 'great', midi: 76, dur: 2.0, vel: 0.92 },   // E5
        { t: 73.5, div: 'great', midi: 71, dur: 2.0, vel: 0.88 },   // B4
        { t: 73.5, div: 'great', midi: 67, dur: 2.0, vel: 0.88 },   // G4
        { t: 73.5, div: 'swell', midi: 64, dur: 2.0, vel: 0.82 },   // E4
        { t: 73.5, div: 'swell', midi: 59, dur: 2.0, vel: 0.82 },   // B3
        { t: 73.5, div: 'pedal', midi: 40, dur: 2.5, vel: 0.90 },   // E2

        // m.46: Moving to Am
        { t: 76.0, div: 'great', midi: 76, dur: 1.5, vel: 0.93 },   // E5
        { t: 76.0, div: 'great', midi: 72, dur: 1.5, vel: 0.89 },   // C5
        { t: 76.0, div: 'great', midi: 69, dur: 1.5, vel: 0.89 },   // A4
        { t: 76.0, div: 'pedal', midi: 45, dur: 2.0, vel: 0.90 },   // A2

        // m.47: Descending line
        { t: 78.0, div: 'great', midi: 74, dur: 1.0, vel: 0.91 },   // D5
        { t: 79.0, div: 'great', midi: 72, dur: 1.0, vel: 0.89 },   // C5
        { t: 80.0, div: 'great', midi: 71, dur: 1.0, vel: 0.91 },   // B4
        { t: 78.0, div: 'swell', midi: 62, dur: 3.0, vel: 0.82 },   // D4
        { t: 78.0, div: 'pedal', midi: 43, dur: 3.0, vel: 0.88 },   // G2

        // m.48: Dominant preparation
        { t: 81.5, div: 'great', midi: 71, dur: 2.0, vel: 0.93 },   // B4
        { t: 81.5, div: 'great', midi: 66, dur: 2.0, vel: 0.89 },   // F#4
        { t: 81.5, div: 'great', midi: 63, dur: 2.0, vel: 0.89 },   // D#4
        { t: 81.5, div: 'pedal', midi: 47, dur: 2.5, vel: 0.92 },   // B2

        // ===== Più mosso - Triumphant E major coda =====
        // m.49-50: E MAJOR - tonic major triumph!
        { t: 84.0, div: 'great', midi: 76, dur: 0.2, vel: 0.94 },   // E5
        { t: 84.2, div: 'great', midi: 73, dur: 0.2, vel: 0.92 },   // C#5
        { t: 84.4, div: 'great', midi: 71, dur: 0.2, vel: 0.94 },   // B4
        { t: 84.6, div: 'great', midi: 68, dur: 0.2, vel: 0.92 },   // G#4
        { t: 84.8, div: 'great', midi: 71, dur: 0.2, vel: 0.94 },   // B4
        { t: 85.0, div: 'great', midi: 73, dur: 0.2, vel: 0.96 },   // C#5
        { t: 85.2, div: 'great', midi: 76, dur: 0.2, vel: 0.94 },   // E5
        { t: 85.4, div: 'great', midi: 80, dur: 0.2, vel: 0.96 },   // G#5
        { t: 84.0, div: 'pedal', midi: 40, dur: 1.8, vel: 0.94 },   // E2

        // m.50: Continuing E major toccata
        { t: 85.6, div: 'great', midi: 76, dur: 0.2, vel: 0.95 },   // E5
        { t: 85.8, div: 'great', midi: 80, dur: 0.2, vel: 0.93 },   // G#5
        { t: 86.0, div: 'great', midi: 83, dur: 0.2, vel: 0.95 },   // B5
        { t: 86.2, div: 'great', midi: 80, dur: 0.2, vel: 0.93 },   // G#5
        { t: 86.4, div: 'great', midi: 76, dur: 0.2, vel: 0.95 },   // E5
        { t: 86.6, div: 'great', midi: 71, dur: 0.2, vel: 0.93 },   // B4
        { t: 86.8, div: 'great', midi: 68, dur: 0.2, vel: 0.91 },   // G#4
        { t: 87.0, div: 'great', midi: 64, dur: 0.2, vel: 0.89 },   // E4
        { t: 85.6, div: 'pedal', midi: 40, dur: 1.8, vel: 0.94 },   // E2

        // m.51-52: A major chord flourish
        { t: 87.2, div: 'great', midi: 69, dur: 0.2, vel: 0.94 },   // A4
        { t: 87.4, div: 'great', midi: 73, dur: 0.2, vel: 0.92 },   // C#5
        { t: 87.6, div: 'great', midi: 76, dur: 0.2, vel: 0.94 },   // E5
        { t: 87.8, div: 'great', midi: 81, dur: 0.2, vel: 0.96 },   // A5
        { t: 88.0, div: 'great', midi: 76, dur: 0.2, vel: 0.94 },   // E5
        { t: 88.2, div: 'great', midi: 73, dur: 0.2, vel: 0.92 },   // C#5
        { t: 88.4, div: 'great', midi: 69, dur: 0.2, vel: 0.94 },   // A4
        { t: 88.6, div: 'great', midi: 64, dur: 0.2, vel: 0.92 },   // E4
        { t: 87.2, div: 'pedal', midi: 45, dur: 1.8, vel: 0.92 },   // A2

        // m.52: Final B7 to E major cadence
        { t: 88.8, div: 'great', midi: 71, dur: 0.2, vel: 0.96 },   // B4
        { t: 89.0, div: 'great', midi: 75, dur: 0.2, vel: 0.94 },   // D#5
        { t: 89.2, div: 'great', midi: 78, dur: 0.2, vel: 0.96 },   // F#5
        { t: 89.4, div: 'great', midi: 83, dur: 0.2, vel: 0.98 },   // B5
        { t: 89.6, div: 'great', midi: 78, dur: 0.2, vel: 0.96 },   // F#5
        { t: 89.8, div: 'great', midi: 75, dur: 0.2, vel: 0.94 },   // D#5
        { t: 90.0, div: 'great', midi: 71, dur: 0.2, vel: 0.96 },   // B4
        { t: 90.2, div: 'great', midi: 66, dur: 0.2, vel: 0.94 },   // F#4
        { t: 88.8, div: 'pedal', midi: 47, dur: 1.8, vel: 0.94 },   // B2

        // m.53-54: Final E major chords, fff triumphant
        { t: 90.5, div: 'great', midi: 76, dur: 3.0, vel: 1.0 },    // E5
        { t: 90.5, div: 'great', midi: 71, dur: 3.0, vel: 0.96 },   // B4
        { t: 90.5, div: 'great', midi: 68, dur: 3.0, vel: 0.96 },   // G#4
        { t: 90.5, div: 'great', midi: 64, dur: 3.0, vel: 0.94 },   // E4
        { t: 90.5, div: 'swell', midi: 59, dur: 3.0, vel: 0.88 },   // B3
        { t: 90.5, div: 'swell', midi: 56, dur: 3.0, vel: 0.88 },   // G#3
        { t: 90.5, div: 'swell', midi: 52, dur: 3.0, vel: 0.86 },   // E3
        { t: 90.5, div: 'pedal', midi: 40, dur: 4.0, vel: 0.98 },   // E2
        { t: 90.5, div: 'pedal', midi: 28, dur: 4.0, vel: 0.94 },   // E1

        // Final chord
        { t: 94.0, div: 'great', midi: 76, dur: 5.0, vel: 0.98 },   // E5
        { t: 94.0, div: 'great', midi: 71, dur: 5.0, vel: 0.94 },   // B4
        { t: 94.0, div: 'great', midi: 68, dur: 5.0, vel: 0.94 },   // G#4
        { t: 94.0, div: 'great', midi: 64, dur: 5.0, vel: 0.92 },   // E4
        { t: 94.0, div: 'swell', midi: 56, dur: 5.0, vel: 0.86 },   // G#3
        { t: 94.0, div: 'swell', midi: 52, dur: 5.0, vel: 0.86 },   // E3
        { t: 94.0, div: 'pedal', midi: 40, dur: 6.0, vel: 0.96 },   // E2
        { t: 94.0, div: 'pedal', midi: 28, dur: 6.0, vel: 0.92 },   // E1
    ]
};


// ============================================================
// 5. Widor - Marche Pontificale from Symphony No. 1, Op. 13
// ============================================================
// The grandiose fifth movement of Widor's first organ symphony
// (1872). A stately processional rondo in C major inspired by
// Gounod's Marche pontificale. Boldly proclaimed dotted rhythms,
// loud melody in chords with pedals in octaves. ABA form with
// contrasting middle section maintaining unyielding pomp.
// ============================================================

const PIECE_WIDOR_MARCH = {
    title: "Marche Pontificale from Symphony No. 1",
    composer: "Charles-Marie Widor",
    catalog: "Op. 13, No. 1",
    key: "C major",
    tempo: 96,
    tempoChanges: [
        { t: 0, tempo: 96, label: "Maestoso - March" },
        { t: 48, tempo: 88, label: "Meno mosso - Middle section" },
        { t: 72, tempo: 100, label: "Tempo I - Return" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4', 'gt-superoctave2', 'gt-mixture', 'gt-trumpet8', 'gt-bourdon16'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-flute4', 'sw-oboe8'],
        choir: ['ch-flute8', 'ch-spitzflute4'],
        pedal: ['pd-principal16', 'pd-octave8', 'pd-trombone16', 'pd-subbass32']
    },
    events: [
        // ===== A SECTION: Maestoso - Processional march =====
        // m.1-2: Grand opening, dotted rhythm in C major, ff
        { t: 0,    div: 'great', midi: 72, dur: 1.2, vel: 0.94 },   // C5 (dotted)
        { t: 0,    div: 'great', midi: 67, dur: 1.2, vel: 0.90 },   // G4
        { t: 0,    div: 'great', midi: 64, dur: 1.2, vel: 0.90 },   // E4
        { t: 0,    div: 'great', midi: 60, dur: 1.2, vel: 0.88 },   // C4
        { t: 0,    div: 'pedal', midi: 48, dur: 1.5, vel: 0.92 },   // C3
        { t: 0,    div: 'pedal', midi: 36, dur: 1.5, vel: 0.88 },   // C2

        // Dotted rhythm snap
        { t: 1.2,  div: 'great', midi: 71, dur: 0.3, vel: 0.88 },   // B4 (short)
        { t: 1.5,  div: 'great', midi: 72, dur: 1.2, vel: 0.94 },   // C5 (dotted)
        { t: 1.5,  div: 'great', midi: 67, dur: 1.2, vel: 0.90 },   // G4
        { t: 1.5,  div: 'great', midi: 64, dur: 1.2, vel: 0.90 },   // E4
        { t: 1.5,  div: 'pedal', midi: 48, dur: 1.5, vel: 0.92 },   // C3

        // m.2: Rising dotted figure
        { t: 3.0,  div: 'great', midi: 74, dur: 1.2, vel: 0.95 },   // D5 (dotted)
        { t: 3.0,  div: 'great', midi: 69, dur: 1.2, vel: 0.91 },   // A4
        { t: 3.0,  div: 'great', midi: 65, dur: 1.2, vel: 0.91 },   // F4
        { t: 3.0,  div: 'great', midi: 62, dur: 1.2, vel: 0.89 },   // D4
        { t: 3.0,  div: 'pedal', midi: 50, dur: 1.5, vel: 0.92 },   // D3
        { t: 3.0,  div: 'pedal', midi: 38, dur: 1.5, vel: 0.88 },   // D2

        { t: 4.2,  div: 'great', midi: 72, dur: 0.3, vel: 0.89 },   // C5 (short)
        { t: 4.5,  div: 'great', midi: 74, dur: 1.5, vel: 0.96 },   // D5
        { t: 4.5,  div: 'great', midi: 71, dur: 1.5, vel: 0.92 },   // B4
        { t: 4.5,  div: 'great', midi: 67, dur: 1.5, vel: 0.92 },   // G4
        { t: 4.5,  div: 'pedal', midi: 43, dur: 2.0, vel: 0.92 },   // G2

        // m.3-4: Climax of first phrase - E5 peak
        { t: 6.0,  div: 'great', midi: 76, dur: 1.2, vel: 0.97 },   // E5 (dotted)
        { t: 6.0,  div: 'great', midi: 72, dur: 1.2, vel: 0.93 },   // C5
        { t: 6.0,  div: 'great', midi: 67, dur: 1.2, vel: 0.93 },   // G4
        { t: 6.0,  div: 'great', midi: 64, dur: 1.2, vel: 0.91 },   // E4
        { t: 6.0,  div: 'pedal', midi: 48, dur: 1.5, vel: 0.94 },   // C3
        { t: 6.0,  div: 'pedal', midi: 36, dur: 1.5, vel: 0.90 },   // C2

        { t: 7.2,  div: 'great', midi: 74, dur: 0.3, vel: 0.91 },   // D5 (short)

        // m.4: Descending to cadence
        { t: 7.5,  div: 'great', midi: 72, dur: 1.2, vel: 0.95 },   // C5 (dotted)
        { t: 7.5,  div: 'great', midi: 67, dur: 1.2, vel: 0.91 },   // G4
        { t: 7.5,  div: 'great', midi: 64, dur: 1.2, vel: 0.91 },   // E4
        { t: 7.5,  div: 'pedal', midi: 48, dur: 1.5, vel: 0.92 },   // C3

        { t: 8.7,  div: 'great', midi: 71, dur: 0.3, vel: 0.89 },   // B4 (short)
        { t: 9.0,  div: 'great', midi: 72, dur: 2.0, vel: 0.96 },   // C5
        { t: 9.0,  div: 'great', midi: 67, dur: 2.0, vel: 0.92 },   // G4
        { t: 9.0,  div: 'great', midi: 64, dur: 2.0, vel: 0.92 },   // E4
        { t: 9.0,  div: 'great', midi: 60, dur: 2.0, vel: 0.90 },   // C4
        { t: 9.0,  div: 'pedal', midi: 48, dur: 2.5, vel: 0.94 },   // C3
        { t: 9.0,  div: 'pedal', midi: 36, dur: 2.5, vel: 0.90 },   // C2

        // m.5-6: Second phrase - march continues
        { t: 11.5, div: 'great', midi: 67, dur: 1.2, vel: 0.93 },   // G4 (dotted)
        { t: 11.5, div: 'great', midi: 64, dur: 1.2, vel: 0.89 },   // E4
        { t: 11.5, div: 'great', midi: 60, dur: 1.2, vel: 0.89 },   // C4
        { t: 11.5, div: 'pedal', midi: 48, dur: 1.5, vel: 0.90 },   // C3

        { t: 12.7, div: 'great', midi: 69, dur: 0.3, vel: 0.87 },   // A4 (short)
        { t: 13.0, div: 'great', midi: 71, dur: 1.2, vel: 0.94 },   // B4 (dotted)
        { t: 13.0, div: 'great', midi: 67, dur: 1.2, vel: 0.90 },   // G4
        { t: 13.0, div: 'great', midi: 62, dur: 1.2, vel: 0.90 },   // D4
        { t: 13.0, div: 'pedal', midi: 43, dur: 1.5, vel: 0.90 },   // G2

        // m.6: F major chord
        { t: 14.5, div: 'great', midi: 72, dur: 1.2, vel: 0.95 },   // C5 (dotted)
        { t: 14.5, div: 'great', midi: 69, dur: 1.2, vel: 0.91 },   // A4
        { t: 14.5, div: 'great', midi: 65, dur: 1.2, vel: 0.91 },   // F4
        { t: 14.5, div: 'great', midi: 60, dur: 1.2, vel: 0.89 },   // C4
        { t: 14.5, div: 'pedal', midi: 41, dur: 1.5, vel: 0.90 },   // F2

        { t: 15.7, div: 'great', midi: 71, dur: 0.3, vel: 0.89 },   // B4 (short)
        { t: 16.0, div: 'great', midi: 72, dur: 2.0, vel: 0.96 },   // C5
        { t: 16.0, div: 'great', midi: 67, dur: 2.0, vel: 0.92 },   // G4
        { t: 16.0, div: 'great', midi: 64, dur: 2.0, vel: 0.92 },   // E4
        { t: 16.0, div: 'pedal', midi: 48, dur: 2.5, vel: 0.94 },   // C3
        { t: 16.0, div: 'pedal', midi: 36, dur: 2.5, vel: 0.90 },   // C2

        // m.7-8: March theme repeated with fuller texture
        { t: 18.5, div: 'great', midi: 72, dur: 1.2, vel: 0.95 },   // C5
        { t: 18.5, div: 'great', midi: 67, dur: 1.2, vel: 0.91 },   // G4
        { t: 18.5, div: 'great', midi: 64, dur: 1.2, vel: 0.91 },   // E4
        { t: 18.5, div: 'swell', midi: 60, dur: 1.2, vel: 0.82 },   // C4
        { t: 18.5, div: 'swell', midi: 55, dur: 1.2, vel: 0.82 },   // G3
        { t: 18.5, div: 'pedal', midi: 48, dur: 1.5, vel: 0.94 },   // C3
        { t: 18.5, div: 'pedal', midi: 36, dur: 1.5, vel: 0.90 },   // C2

        { t: 19.7, div: 'great', midi: 71, dur: 0.3, vel: 0.89 },   // B4
        { t: 20.0, div: 'great', midi: 72, dur: 1.2, vel: 0.95 },   // C5
        { t: 20.0, div: 'great', midi: 67, dur: 1.2, vel: 0.91 },   // G4
        { t: 20.0, div: 'great', midi: 64, dur: 1.2, vel: 0.91 },   // E4
        { t: 20.0, div: 'pedal', midi: 48, dur: 1.5, vel: 0.94 },   // C3

        // m.8: Rising to D5
        { t: 21.5, div: 'great', midi: 74, dur: 1.2, vel: 0.96 },   // D5
        { t: 21.5, div: 'great', midi: 69, dur: 1.2, vel: 0.92 },   // A4
        { t: 21.5, div: 'great', midi: 65, dur: 1.2, vel: 0.92 },   // F4
        { t: 21.5, div: 'pedal', midi: 50, dur: 1.5, vel: 0.94 },   // D3
        { t: 21.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.90 },   // D2

        { t: 22.7, div: 'great', midi: 72, dur: 0.3, vel: 0.90 },   // C5
        { t: 23.0, div: 'great', midi: 74, dur: 1.5, vel: 0.97 },   // D5
        { t: 23.0, div: 'great', midi: 71, dur: 1.5, vel: 0.93 },   // B4
        { t: 23.0, div: 'great', midi: 67, dur: 1.5, vel: 0.93 },   // G4
        { t: 23.0, div: 'pedal', midi: 43, dur: 2.0, vel: 0.94 },   // G2

        // m.9-10: Climactic phrase, ff
        { t: 24.5, div: 'great', midi: 76, dur: 1.2, vel: 0.98 },   // E5
        { t: 24.5, div: 'great', midi: 72, dur: 1.2, vel: 0.94 },   // C5
        { t: 24.5, div: 'great', midi: 67, dur: 1.2, vel: 0.94 },   // G4
        { t: 24.5, div: 'swell', midi: 64, dur: 1.2, vel: 0.86 },   // E4
        { t: 24.5, div: 'swell', midi: 60, dur: 1.2, vel: 0.86 },   // C4
        { t: 24.5, div: 'pedal', midi: 48, dur: 1.5, vel: 0.96 },   // C3
        { t: 24.5, div: 'pedal', midi: 36, dur: 1.5, vel: 0.92 },   // C2

        { t: 25.7, div: 'great', midi: 74, dur: 0.3, vel: 0.92 },   // D5

        // m.10: Resolution in C
        { t: 26.0, div: 'great', midi: 72, dur: 1.2, vel: 0.96 },   // C5
        { t: 26.0, div: 'great', midi: 67, dur: 1.2, vel: 0.92 },   // G4
        { t: 26.0, div: 'great', midi: 64, dur: 1.2, vel: 0.92 },   // E4
        { t: 26.0, div: 'pedal', midi: 48, dur: 1.5, vel: 0.94 },   // C3

        { t: 27.2, div: 'great', midi: 71, dur: 0.3, vel: 0.90 },   // B4
        { t: 27.5, div: 'great', midi: 72, dur: 2.5, vel: 0.97 },   // C5
        { t: 27.5, div: 'great', midi: 67, dur: 2.5, vel: 0.93 },   // G4
        { t: 27.5, div: 'great', midi: 64, dur: 2.5, vel: 0.93 },   // E4
        { t: 27.5, div: 'great', midi: 60, dur: 2.5, vel: 0.91 },   // C4
        { t: 27.5, div: 'pedal', midi: 48, dur: 3.0, vel: 0.96 },   // C3
        { t: 27.5, div: 'pedal', midi: 36, dur: 3.0, vel: 0.92 },   // C2

        // m.11-14: March episode - sequential modulation
        // Fm chord
        { t: 30.5, div: 'great', midi: 72, dur: 1.2, vel: 0.92 },   // C5
        { t: 30.5, div: 'great', midi: 68, dur: 1.2, vel: 0.88 },   // Ab4
        { t: 30.5, div: 'great', midi: 65, dur: 1.2, vel: 0.88 },   // F4
        { t: 30.5, div: 'pedal', midi: 41, dur: 1.5, vel: 0.88 },   // F2

        { t: 31.7, div: 'great', midi: 70, dur: 0.3, vel: 0.86 },   // Bb4
        { t: 32.0, div: 'great', midi: 72, dur: 1.2, vel: 0.93 },   // C5
        { t: 32.0, div: 'great', midi: 68, dur: 1.2, vel: 0.89 },   // Ab4
        { t: 32.0, div: 'great', midi: 63, dur: 1.2, vel: 0.89 },   // Eb4
        { t: 32.0, div: 'pedal', midi: 44, dur: 1.5, vel: 0.88 },   // Ab2

        // m.12: Bb major
        { t: 33.5, div: 'great', midi: 74, dur: 1.2, vel: 0.94 },   // D5
        { t: 33.5, div: 'great', midi: 70, dur: 1.2, vel: 0.90 },   // Bb4
        { t: 33.5, div: 'great', midi: 65, dur: 1.2, vel: 0.90 },   // F4
        { t: 33.5, div: 'pedal', midi: 46, dur: 1.5, vel: 0.90 },   // Bb2

        { t: 34.7, div: 'great', midi: 72, dur: 0.3, vel: 0.88 },   // C5
        { t: 35.0, div: 'great', midi: 74, dur: 1.5, vel: 0.95 },   // D5
        { t: 35.0, div: 'great', midi: 70, dur: 1.5, vel: 0.91 },   // Bb4
        { t: 35.0, div: 'great', midi: 67, dur: 1.5, vel: 0.91 },   // G4
        { t: 35.0, div: 'pedal', midi: 43, dur: 2.0, vel: 0.90 },   // G2

        // m.13: Eb major
        { t: 36.5, div: 'great', midi: 75, dur: 1.2, vel: 0.95 },   // Eb5
        { t: 36.5, div: 'great', midi: 72, dur: 1.2, vel: 0.91 },   // C5
        { t: 36.5, div: 'great', midi: 67, dur: 1.2, vel: 0.91 },   // G4
        { t: 36.5, div: 'great', midi: 63, dur: 1.2, vel: 0.89 },   // Eb4
        { t: 36.5, div: 'pedal', midi: 39, dur: 1.5, vel: 0.92 },   // Eb2

        { t: 37.7, div: 'great', midi: 74, dur: 0.3, vel: 0.89 },   // D5

        // m.14: G dominant returning to C
        { t: 38.0, div: 'great', midi: 74, dur: 1.2, vel: 0.96 },   // D5
        { t: 38.0, div: 'great', midi: 71, dur: 1.2, vel: 0.92 },   // B4
        { t: 38.0, div: 'great', midi: 67, dur: 1.2, vel: 0.92 },   // G4
        { t: 38.0, div: 'great', midi: 62, dur: 1.2, vel: 0.90 },   // D4
        { t: 38.0, div: 'pedal', midi: 43, dur: 1.5, vel: 0.92 },   // G2
        { t: 38.0, div: 'pedal', midi: 31, dur: 1.5, vel: 0.88 },   // G1

        { t: 39.2, div: 'great', midi: 72, dur: 0.3, vel: 0.90 },   // C5
        { t: 39.5, div: 'great', midi: 74, dur: 2.0, vel: 0.97 },   // D5
        { t: 39.5, div: 'great', midi: 71, dur: 2.0, vel: 0.93 },   // B4
        { t: 39.5, div: 'great', midi: 66, dur: 2.0, vel: 0.93 },   // F#4
        { t: 39.5, div: 'pedal', midi: 43, dur: 2.5, vel: 0.94 },   // G2

        // m.15-16: Return of opening march theme forte
        { t: 42.0, div: 'great', midi: 72, dur: 1.2, vel: 0.96 },   // C5
        { t: 42.0, div: 'great', midi: 67, dur: 1.2, vel: 0.92 },   // G4
        { t: 42.0, div: 'great', midi: 64, dur: 1.2, vel: 0.92 },   // E4
        { t: 42.0, div: 'great', midi: 60, dur: 1.2, vel: 0.90 },   // C4
        { t: 42.0, div: 'pedal', midi: 48, dur: 1.5, vel: 0.94 },   // C3
        { t: 42.0, div: 'pedal', midi: 36, dur: 1.5, vel: 0.90 },   // C2

        { t: 43.2, div: 'great', midi: 71, dur: 0.3, vel: 0.90 },   // B4
        { t: 43.5, div: 'great', midi: 72, dur: 1.2, vel: 0.96 },   // C5
        { t: 43.5, div: 'great', midi: 67, dur: 1.2, vel: 0.92 },   // G4
        { t: 43.5, div: 'great', midi: 64, dur: 1.2, vel: 0.92 },   // E4
        { t: 43.5, div: 'pedal', midi: 48, dur: 1.5, vel: 0.94 },   // C3

        // m.16: Cadential close of A section
        { t: 45.0, div: 'great', midi: 74, dur: 0.8, vel: 0.96 },   // D5
        { t: 45.8, div: 'great', midi: 72, dur: 0.3, vel: 0.90 },   // C5
        { t: 46.1, div: 'great', midi: 71, dur: 0.3, vel: 0.88 },   // B4
        { t: 46.4, div: 'great', midi: 72, dur: 2.0, vel: 0.97 },   // C5
        { t: 46.4, div: 'great', midi: 67, dur: 2.0, vel: 0.93 },   // G4
        { t: 46.4, div: 'great', midi: 64, dur: 2.0, vel: 0.93 },   // E4
        { t: 46.4, div: 'great', midi: 60, dur: 2.0, vel: 0.91 },   // C4
        { t: 45.0, div: 'pedal', midi: 43, dur: 1.0, vel: 0.92 },   // G2
        { t: 46.4, div: 'pedal', midi: 48, dur: 2.5, vel: 0.96 },   // C3
        { t: 46.4, div: 'pedal', midi: 36, dur: 2.5, vel: 0.92 },   // C2

        // ===== B SECTION: Meno mosso - Contrasting middle =====
        // m.17-18: Softer but still pompous, Ab major
        { t: 49.0, div: 'swell', midi: 72, dur: 1.5, vel: 0.72 },   // C5
        { t: 49.0, div: 'swell', midi: 68, dur: 1.5, vel: 0.68 },   // Ab4
        { t: 49.0, div: 'swell', midi: 63, dur: 1.5, vel: 0.68 },   // Eb4
        { t: 49.0, div: 'pedal', midi: 44, dur: 2.0, vel: 0.70 },   // Ab2

        { t: 51.0, div: 'swell', midi: 70, dur: 1.5, vel: 0.73 },   // Bb4
        { t: 51.0, div: 'swell', midi: 68, dur: 1.5, vel: 0.69 },   // Ab4
        { t: 51.0, div: 'swell', midi: 63, dur: 1.5, vel: 0.69 },   // Eb4
        { t: 51.0, div: 'pedal', midi: 39, dur: 2.0, vel: 0.70 },   // Eb2

        // m.19: Bb major
        { t: 53.0, div: 'swell', midi: 74, dur: 1.5, vel: 0.74 },   // D5
        { t: 53.0, div: 'swell', midi: 70, dur: 1.5, vel: 0.70 },   // Bb4
        { t: 53.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.70 },   // F4
        { t: 53.0, div: 'pedal', midi: 46, dur: 2.0, vel: 0.72 },   // Bb2

        { t: 55.0, div: 'swell', midi: 72, dur: 1.5, vel: 0.73 },   // C5
        { t: 55.0, div: 'swell', midi: 68, dur: 1.5, vel: 0.69 },   // Ab4
        { t: 55.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.69 },   // F4
        { t: 55.0, div: 'pedal', midi: 41, dur: 2.0, vel: 0.70 },   // F2

        // m.20-21: Fm - Db passage
        { t: 57.0, div: 'swell', midi: 72, dur: 1.5, vel: 0.74 },   // C5
        { t: 57.0, div: 'swell', midi: 68, dur: 1.5, vel: 0.70 },   // Ab4
        { t: 57.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.70 },   // F4
        { t: 57.0, div: 'pedal', midi: 41, dur: 2.0, vel: 0.72 },   // F2

        { t: 59.0, div: 'swell', midi: 73, dur: 1.5, vel: 0.75 },   // Db5
        { t: 59.0, div: 'swell', midi: 68, dur: 1.5, vel: 0.71 },   // Ab4
        { t: 59.0, div: 'swell', midi: 65, dur: 1.5, vel: 0.71 },   // F4
        { t: 59.0, div: 'pedal', midi: 37, dur: 2.0, vel: 0.72 },   // Db2

        // m.22: Building back to forte
        { t: 61.0, div: 'swell', midi: 75, dur: 1.2, vel: 0.78 },   // Eb5
        { t: 61.0, div: 'swell', midi: 70, dur: 1.2, vel: 0.74 },   // Bb4
        { t: 61.0, div: 'swell', midi: 67, dur: 1.2, vel: 0.74 },   // G4
        { t: 61.0, div: 'pedal', midi: 39, dur: 1.5, vel: 0.76 },   // Eb2

        { t: 62.5, div: 'great', midi: 74, dur: 1.2, vel: 0.88 },   // D5
        { t: 62.5, div: 'great', midi: 71, dur: 1.2, vel: 0.84 },   // B4
        { t: 62.5, div: 'great', midi: 67, dur: 1.2, vel: 0.84 },   // G4
        { t: 62.5, div: 'pedal', midi: 43, dur: 1.5, vel: 0.84 },   // G2

        // m.23-24: Dominant preparation for return
        { t: 64.0, div: 'great', midi: 74, dur: 1.2, vel: 0.92 },   // D5 (dotted)
        { t: 64.0, div: 'great', midi: 71, dur: 1.2, vel: 0.88 },   // B4
        { t: 64.0, div: 'great', midi: 67, dur: 1.2, vel: 0.88 },   // G4
        { t: 64.0, div: 'great', midi: 62, dur: 1.2, vel: 0.86 },   // D4
        { t: 64.0, div: 'pedal', midi: 43, dur: 1.5, vel: 0.90 },   // G2
        { t: 64.0, div: 'pedal', midi: 31, dur: 1.5, vel: 0.86 },   // G1

        { t: 65.2, div: 'great', midi: 72, dur: 0.3, vel: 0.86 },   // C5

        // m.24: Sustained dominant
        { t: 65.5, div: 'great', midi: 74, dur: 2.0, vel: 0.94 },   // D5
        { t: 65.5, div: 'great', midi: 71, dur: 2.0, vel: 0.90 },   // B4
        { t: 65.5, div: 'great', midi: 67, dur: 2.0, vel: 0.90 },   // G4
        { t: 65.5, div: 'great', midi: 62, dur: 2.0, vel: 0.88 },   // D4
        { t: 65.5, div: 'pedal', midi: 43, dur: 2.5, vel: 0.92 },   // G2
        { t: 65.5, div: 'pedal', midi: 31, dur: 2.5, vel: 0.88 },   // G1

        // m.25-26: Second dominant chord
        { t: 68.0, div: 'great', midi: 74, dur: 1.5, vel: 0.95 },   // D5
        { t: 68.0, div: 'great', midi: 71, dur: 1.5, vel: 0.91 },   // B4
        { t: 68.0, div: 'great', midi: 66, dur: 1.5, vel: 0.91 },   // F#4
        { t: 68.0, div: 'great', midi: 62, dur: 1.5, vel: 0.89 },   // D4
        { t: 68.0, div: 'pedal', midi: 43, dur: 2.0, vel: 0.94 },   // G2

        { t: 70.0, div: 'great', midi: 74, dur: 2.0, vel: 0.96 },   // D5
        { t: 70.0, div: 'great', midi: 71, dur: 2.0, vel: 0.92 },   // B4
        { t: 70.0, div: 'great', midi: 67, dur: 2.0, vel: 0.92 },   // G4
        { t: 70.0, div: 'pedal', midi: 43, dur: 2.5, vel: 0.94 },   // G2
        { t: 70.0, div: 'pedal', midi: 31, dur: 2.5, vel: 0.90 },   // G1

        // ===== A' SECTION: Tempo I - Grand return =====
        // m.27-28: March theme returns, fff
        { t: 72.5, div: 'great', midi: 72, dur: 1.2, vel: 0.98 },   // C5
        { t: 72.5, div: 'great', midi: 67, dur: 1.2, vel: 0.94 },   // G4
        { t: 72.5, div: 'great', midi: 64, dur: 1.2, vel: 0.94 },   // E4
        { t: 72.5, div: 'great', midi: 60, dur: 1.2, vel: 0.92 },   // C4
        { t: 72.5, div: 'swell', midi: 55, dur: 1.2, vel: 0.86 },   // G3
        { t: 72.5, div: 'pedal', midi: 48, dur: 1.5, vel: 0.96 },   // C3
        { t: 72.5, div: 'pedal', midi: 36, dur: 1.5, vel: 0.92 },   // C2

        { t: 73.7, div: 'great', midi: 71, dur: 0.3, vel: 0.92 },   // B4
        { t: 74.0, div: 'great', midi: 72, dur: 1.2, vel: 0.98 },   // C5
        { t: 74.0, div: 'great', midi: 67, dur: 1.2, vel: 0.94 },   // G4
        { t: 74.0, div: 'great', midi: 64, dur: 1.2, vel: 0.94 },   // E4
        { t: 74.0, div: 'pedal', midi: 48, dur: 1.5, vel: 0.96 },   // C3

        // m.28: Rising
        { t: 75.5, div: 'great', midi: 74, dur: 1.2, vel: 0.98 },   // D5
        { t: 75.5, div: 'great', midi: 69, dur: 1.2, vel: 0.94 },   // A4
        { t: 75.5, div: 'great', midi: 65, dur: 1.2, vel: 0.94 },   // F4
        { t: 75.5, div: 'pedal', midi: 50, dur: 1.5, vel: 0.96 },   // D3
        { t: 75.5, div: 'pedal', midi: 38, dur: 1.5, vel: 0.92 },   // D2

        { t: 76.7, div: 'great', midi: 72, dur: 0.3, vel: 0.92 },   // C5
        { t: 77.0, div: 'great', midi: 74, dur: 1.5, vel: 0.98 },   // D5
        { t: 77.0, div: 'great', midi: 71, dur: 1.5, vel: 0.94 },   // B4
        { t: 77.0, div: 'great', midi: 67, dur: 1.5, vel: 0.94 },   // G4
        { t: 77.0, div: 'pedal', midi: 43, dur: 2.0, vel: 0.96 },   // G2

        // m.29-30: Final climactic phrase
        { t: 78.5, div: 'great', midi: 76, dur: 1.2, vel: 1.0 },    // E5
        { t: 78.5, div: 'great', midi: 72, dur: 1.2, vel: 0.96 },   // C5
        { t: 78.5, div: 'great', midi: 67, dur: 1.2, vel: 0.96 },   // G4
        { t: 78.5, div: 'great', midi: 64, dur: 1.2, vel: 0.94 },   // E4
        { t: 78.5, div: 'swell', midi: 60, dur: 1.2, vel: 0.88 },   // C4
        { t: 78.5, div: 'pedal', midi: 48, dur: 1.5, vel: 0.98 },   // C3
        { t: 78.5, div: 'pedal', midi: 36, dur: 1.5, vel: 0.94 },   // C2

        { t: 79.7, div: 'great', midi: 74, dur: 0.3, vel: 0.94 },   // D5

        // m.30: Final resolution
        { t: 80.0, div: 'great', midi: 72, dur: 1.2, vel: 0.98 },   // C5
        { t: 80.0, div: 'great', midi: 67, dur: 1.2, vel: 0.94 },   // G4
        { t: 80.0, div: 'great', midi: 64, dur: 1.2, vel: 0.94 },   // E4
        { t: 80.0, div: 'pedal', midi: 48, dur: 1.5, vel: 0.96 },   // C3

        { t: 81.2, div: 'great', midi: 71, dur: 0.3, vel: 0.92 },   // B4
        { t: 81.5, div: 'great', midi: 72, dur: 4.0, vel: 1.0 },    // C5
        { t: 81.5, div: 'great', midi: 67, dur: 4.0, vel: 0.96 },   // G4
        { t: 81.5, div: 'great', midi: 64, dur: 4.0, vel: 0.96 },   // E4
        { t: 81.5, div: 'great', midi: 60, dur: 4.0, vel: 0.94 },   // C4
        { t: 81.5, div: 'swell', midi: 55, dur: 4.0, vel: 0.88 },   // G3
        { t: 81.5, div: 'swell', midi: 48, dur: 4.0, vel: 0.88 },   // C3
        { t: 81.5, div: 'pedal', midi: 48, dur: 5.0, vel: 0.98 },   // C3
        { t: 81.5, div: 'pedal', midi: 36, dur: 5.0, vel: 0.94 },   // C2

        // Final sustained chord
        { t: 86.0, div: 'great', midi: 72, dur: 5.0, vel: 0.98 },   // C5
        { t: 86.0, div: 'great', midi: 67, dur: 5.0, vel: 0.94 },   // G4
        { t: 86.0, div: 'great', midi: 64, dur: 5.0, vel: 0.94 },   // E4
        { t: 86.0, div: 'great', midi: 60, dur: 5.0, vel: 0.92 },   // C4
        { t: 86.0, div: 'pedal', midi: 48, dur: 6.0, vel: 0.96 },   // C3
        { t: 86.0, div: 'pedal', midi: 36, dur: 6.0, vel: 0.92 },   // C2
    ]
};


// ============================================================
// 6. Vierne - Naïades from 24 Pièces de Fantaisie, Op. 55/4
// ============================================================
// Shimmering water-nymph scherzo (1927). Rapid arpeggiated
// figuration in 3/4 time evokes water sprites dancing.
// Impressionistic pastel quality with rapid broken-chord
// patterns on flute stops. F# minor with luminous harmonies.
// ============================================================

const PIECE_VIERNE_NAIADES = {
    title: "Naïades",
    composer: "Louis Vierne",
    catalog: "Op. 55, No. 4",
    key: "F-sharp minor",
    tempo: 138,
    tempoChanges: [
        { t: 0, tempo: 138, label: "Allegro - Scherzo" },
        { t: 52, tempo: 120, label: "Poco meno mosso" },
        { t: 72, tempo: 144, label: "A tempo - Coda" }
    ],
    registration: {
        great: ['gt-principal8', 'gt-octave4'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voixceleste8', 'sw-flute4', 'sw-tremulant'],
        choir: ['ch-flute8', 'ch-spitzflute4', 'ch-quint'],
        pedal: ['pd-subbass32', 'pd-principal16']
    },
    events: [
        // ===== Allegro: Shimmering arpeggiated figuration =====
        // m.1-2: F#m arpeggios on flute stops, pp
        { t: 0,    div: 'choir', midi: 66, dur: 0.15, vel: 0.52 },   // F#4
        { t: 0.15, div: 'choir', midi: 69, dur: 0.15, vel: 0.50 },   // A4
        { t: 0.3,  div: 'choir', midi: 73, dur: 0.15, vel: 0.52 },   // C#5
        { t: 0.45, div: 'choir', midi: 78, dur: 0.15, vel: 0.54 },   // F#5
        { t: 0.6,  div: 'choir', midi: 73, dur: 0.15, vel: 0.52 },   // C#5
        { t: 0.75, div: 'choir', midi: 69, dur: 0.15, vel: 0.50 },   // A4
        { t: 0,    div: 'pedal', midi: 42, dur: 1.2, vel: 0.45 },    // F#2

        // m.2: Continuing arpeggio pattern
        { t: 0.9,  div: 'choir', midi: 66, dur: 0.15, vel: 0.53 },   // F#4
        { t: 1.05, div: 'choir', midi: 69, dur: 0.15, vel: 0.51 },   // A4
        { t: 1.2,  div: 'choir', midi: 73, dur: 0.15, vel: 0.53 },   // C#5
        { t: 1.35, div: 'choir', midi: 78, dur: 0.15, vel: 0.55 },   // F#5
        { t: 1.5,  div: 'choir', midi: 73, dur: 0.15, vel: 0.53 },   // C#5
        { t: 1.65, div: 'choir', midi: 69, dur: 0.15, vel: 0.51 },   // A4

        // m.3-4: Melody emerges on Swell over arpeggios
        { t: 1.8,  div: 'swell', midi: 78, dur: 0.6, vel: 0.62 },    // F#5 melody
        { t: 1.8,  div: 'choir', midi: 61, dur: 0.15, vel: 0.50 },   // C#4
        { t: 1.95, div: 'choir', midi: 66, dur: 0.15, vel: 0.48 },   // F#4
        { t: 2.1,  div: 'choir', midi: 69, dur: 0.15, vel: 0.50 },   // A4
        { t: 2.25, div: 'choir', midi: 73, dur: 0.15, vel: 0.52 },   // C#5
        { t: 2.4,  div: 'swell', midi: 76, dur: 0.6, vel: 0.61 },    // E5
        { t: 2.4,  div: 'choir', midi: 69, dur: 0.15, vel: 0.50 },   // A4
        { t: 2.55, div: 'choir', midi: 64, dur: 0.15, vel: 0.48 },   // E4
        { t: 1.8,  div: 'pedal', midi: 42, dur: 1.2, vel: 0.45 },    // F#2

        // m.4: D major arpeggio
        { t: 2.7,  div: 'swell', midi: 78, dur: 0.6, vel: 0.63 },    // F#5
        { t: 2.7,  div: 'choir', midi: 62, dur: 0.15, vel: 0.50 },   // D4
        { t: 2.85, div: 'choir', midi: 66, dur: 0.15, vel: 0.48 },   // F#4
        { t: 3.0,  div: 'choir', midi: 69, dur: 0.15, vel: 0.50 },   // A4
        { t: 3.15, div: 'choir', midi: 74, dur: 0.15, vel: 0.52 },   // D5
        { t: 3.3,  div: 'swell', midi: 76, dur: 0.3, vel: 0.61 },    // E5
        { t: 3.3,  div: 'choir', midi: 69, dur: 0.15, vel: 0.50 },   // A4
        { t: 3.45, div: 'choir', midi: 66, dur: 0.15, vel: 0.48 },   // F#4
        { t: 2.7,  div: 'pedal', midi: 50, dur: 1.2, vel: 0.45 },    // D3

        // m.5-6: C#m arpeggios
        { t: 3.6,  div: 'swell', midi: 73, dur: 0.6, vel: 0.62 },    // C#5
        { t: 3.6,  div: 'choir', midi: 61, dur: 0.15, vel: 0.51 },   // C#4
        { t: 3.75, div: 'choir', midi: 64, dur: 0.15, vel: 0.49 },   // E4
        { t: 3.9,  div: 'choir', midi: 68, dur: 0.15, vel: 0.51 },   // G#4
        { t: 4.05, div: 'choir', midi: 73, dur: 0.15, vel: 0.53 },   // C#5
        { t: 4.2,  div: 'choir', midi: 68, dur: 0.15, vel: 0.51 },   // G#4
        { t: 4.35, div: 'choir', midi: 64, dur: 0.15, vel: 0.49 },   // E4
        { t: 3.6,  div: 'pedal', midi: 49, dur: 1.2, vel: 0.45 },    // C#3

        // m.6: B major arpeggio
        { t: 4.5,  div: 'swell', midi: 71, dur: 0.6, vel: 0.61 },    // B4
        { t: 4.5,  div: 'choir', midi: 59, dur: 0.15, vel: 0.51 },   // B3
        { t: 4.65, div: 'choir', midi: 63, dur: 0.15, vel: 0.49 },   // D#4
        { t: 4.8,  div: 'choir', midi: 66, dur: 0.15, vel: 0.51 },   // F#4
        { t: 4.95, div: 'choir', midi: 71, dur: 0.15, vel: 0.53 },   // B4
        { t: 5.1,  div: 'choir', midi: 66, dur: 0.15, vel: 0.51 },   // F#4
        { t: 5.25, div: 'choir', midi: 63, dur: 0.15, vel: 0.49 },   // D#4
        { t: 4.5,  div: 'pedal', midi: 47, dur: 1.2, vel: 0.45 },    // B2

        // m.7-8: A major - brighter
        { t: 5.4,  div: 'swell', midi: 73, dur: 0.6, vel: 0.64 },    // C#5
        { t: 5.4,  div: 'choir', midi: 57, dur: 0.15, vel: 0.52 },   // A3
        { t: 5.55, div: 'choir', midi: 61, dur: 0.15, vel: 0.50 },   // C#4
        { t: 5.7,  div: 'choir', midi: 64, dur: 0.15, vel: 0.52 },   // E4
        { t: 5.85, div: 'choir', midi: 69, dur: 0.15, vel: 0.54 },   // A4
        { t: 6.0,  div: 'choir', midi: 73, dur: 0.15, vel: 0.52 },   // C#5
        { t: 6.15, div: 'choir', midi: 69, dur: 0.15, vel: 0.50 },   // A4
        { t: 5.4,  div: 'pedal', midi: 45, dur: 1.2, vel: 0.46 },    // A2

        // m.8: G#dim7 - tension
        { t: 6.3,  div: 'swell', midi: 71, dur: 0.3, vel: 0.62 },    // B4
        { t: 6.6,  div: 'swell', midi: 68, dur: 0.3, vel: 0.60 },    // G#4
        { t: 6.3,  div: 'choir', midi: 56, dur: 0.15, vel: 0.52 },   // G#3
        { t: 6.45, div: 'choir', midi: 59, dur: 0.15, vel: 0.50 },   // B3
        { t: 6.6,  div: 'choir', midi: 62, dur: 0.15, vel: 0.52 },   // D4
        { t: 6.75, div: 'choir', midi: 65, dur: 0.15, vel: 0.54 },   // F4
        { t: 6.9,  div: 'choir', midi: 68, dur: 0.15, vel: 0.52 },   // G#4
        { t: 7.05, div: 'choir', midi: 62, dur: 0.15, vel: 0.50 },   // D4
        { t: 6.3,  div: 'pedal', midi: 44, dur: 1.2, vel: 0.46 },    // G#2

        // m.9-10: Return F#m, melody higher
        { t: 7.2,  div: 'swell', midi: 81, dur: 0.6, vel: 0.66 },    // A5
        { t: 7.2,  div: 'choir', midi: 66, dur: 0.15, vel: 0.53 },   // F#4
        { t: 7.35, div: 'choir', midi: 69, dur: 0.15, vel: 0.51 },   // A4
        { t: 7.5,  div: 'choir', midi: 73, dur: 0.15, vel: 0.53 },   // C#5
        { t: 7.65, div: 'choir', midi: 78, dur: 0.15, vel: 0.55 },   // F#5
        { t: 7.8,  div: 'swell', midi: 78, dur: 0.6, vel: 0.65 },    // F#5
        { t: 7.8,  div: 'choir', midi: 73, dur: 0.15, vel: 0.53 },   // C#5
        { t: 7.95, div: 'choir', midi: 69, dur: 0.15, vel: 0.51 },   // A4
        { t: 7.2,  div: 'pedal', midi: 42, dur: 1.2, vel: 0.46 },    // F#2

        // m.10: E major
        { t: 8.1,  div: 'swell', midi: 76, dur: 0.6, vel: 0.64 },    // E5
        { t: 8.1,  div: 'choir', midi: 64, dur: 0.15, vel: 0.52 },   // E4
        { t: 8.25, div: 'choir', midi: 68, dur: 0.15, vel: 0.50 },   // G#4
        { t: 8.4,  div: 'choir', midi: 71, dur: 0.15, vel: 0.52 },   // B4
        { t: 8.55, div: 'choir', midi: 76, dur: 0.15, vel: 0.54 },   // E5
        { t: 8.7,  div: 'choir', midi: 71, dur: 0.15, vel: 0.52 },   // B4
        { t: 8.85, div: 'choir', midi: 68, dur: 0.15, vel: 0.50 },   // G#4
        { t: 8.1,  div: 'pedal', midi: 40, dur: 1.2, vel: 0.46 },    // E2

        // m.11-12: D major - warmer color
        { t: 9.0,  div: 'swell', midi: 78, dur: 0.6, vel: 0.65 },    // F#5
        { t: 9.0,  div: 'choir', midi: 62, dur: 0.15, vel: 0.53 },   // D4
        { t: 9.15, div: 'choir', midi: 66, dur: 0.15, vel: 0.51 },   // F#4
        { t: 9.3,  div: 'choir', midi: 69, dur: 0.15, vel: 0.53 },   // A4
        { t: 9.45, div: 'choir', midi: 74, dur: 0.15, vel: 0.55 },   // D5
        { t: 9.6,  div: 'swell', midi: 76, dur: 0.3, vel: 0.63 },    // E5
        { t: 9.6,  div: 'choir', midi: 69, dur: 0.15, vel: 0.53 },   // A4
        { t: 9.75, div: 'choir', midi: 66, dur: 0.15, vel: 0.51 },   // F#4
        { t: 9.0,  div: 'pedal', midi: 50, dur: 1.2, vel: 0.46 },    // D3

        // m.12: Bm7
        { t: 9.9,  div: 'swell', midi: 74, dur: 0.6, vel: 0.64 },    // D5
        { t: 9.9,  div: 'choir', midi: 59, dur: 0.15, vel: 0.52 },   // B3
        { t: 10.05, div: 'choir', midi: 62, dur: 0.15, vel: 0.50 },  // D4
        { t: 10.2, div: 'choir', midi: 66, dur: 0.15, vel: 0.52 },   // F#4
        { t: 10.35, div: 'choir', midi: 69, dur: 0.15, vel: 0.54 },  // A4
        { t: 10.5, div: 'choir', midi: 66, dur: 0.15, vel: 0.52 },   // F#4
        { t: 10.65, div: 'choir', midi: 62, dur: 0.15, vel: 0.50 },  // D4
        { t: 9.9,  div: 'pedal', midi: 47, dur: 1.2, vel: 0.46 },    // B2

        // m.13-16: Intensifying, crescendo
        { t: 10.8, div: 'swell', midi: 78, dur: 0.6, vel: 0.68 },    // F#5
        { t: 10.8, div: 'choir', midi: 66, dur: 0.15, vel: 0.55 },   // F#4
        { t: 10.95, div: 'choir', midi: 69, dur: 0.15, vel: 0.53 },  // A4
        { t: 11.1, div: 'choir', midi: 73, dur: 0.15, vel: 0.55 },   // C#5
        { t: 11.25, div: 'choir', midi: 78, dur: 0.15, vel: 0.57 },  // F#5
        { t: 11.4, div: 'swell', midi: 81, dur: 0.6, vel: 0.70 },    // A5
        { t: 11.4, div: 'choir', midi: 73, dur: 0.15, vel: 0.55 },   // C#5
        { t: 11.55, div: 'choir', midi: 69, dur: 0.15, vel: 0.53 },  // A4
        { t: 10.8, div: 'pedal', midi: 42, dur: 1.2, vel: 0.48 },    // F#2

        // m.14: E major approach
        { t: 11.7, div: 'swell', midi: 80, dur: 0.6, vel: 0.69 },    // G#5
        { t: 11.7, div: 'choir', midi: 64, dur: 0.15, vel: 0.56 },   // E4
        { t: 11.85, div: 'choir', midi: 68, dur: 0.15, vel: 0.54 },  // G#4
        { t: 12.0, div: 'choir', midi: 71, dur: 0.15, vel: 0.56 },   // B4
        { t: 12.15, div: 'choir', midi: 76, dur: 0.15, vel: 0.58 },  // E5
        { t: 12.3, div: 'swell', midi: 78, dur: 0.3, vel: 0.67 },    // F#5
        { t: 12.3, div: 'choir', midi: 71, dur: 0.15, vel: 0.56 },   // B4
        { t: 12.45, div: 'choir', midi: 68, dur: 0.15, vel: 0.54 },  // G#4
        { t: 11.7, div: 'pedal', midi: 40, dur: 1.2, vel: 0.48 },    // E2

        // m.15: F#m - returning with more energy
        { t: 12.6, div: 'swell', midi: 78, dur: 0.3, vel: 0.70 },    // F#5
        { t: 12.9, div: 'swell', midi: 81, dur: 0.3, vel: 0.72 },    // A5
        { t: 13.2, div: 'swell', midi: 85, dur: 0.3, vel: 0.74 },    // C#6
        { t: 12.6, div: 'choir', midi: 66, dur: 0.15, vel: 0.57 },   // F#4
        { t: 12.75, div: 'choir', midi: 69, dur: 0.15, vel: 0.55 },  // A4
        { t: 12.9, div: 'choir', midi: 73, dur: 0.15, vel: 0.57 },   // C#5
        { t: 13.05, div: 'choir', midi: 78, dur: 0.15, vel: 0.59 },  // F#5
        { t: 13.2, div: 'choir', midi: 73, dur: 0.15, vel: 0.57 },   // C#5
        { t: 13.35, div: 'choir', midi: 69, dur: 0.15, vel: 0.55 },  // A4
        { t: 12.6, div: 'pedal', midi: 42, dur: 1.2, vel: 0.50 },    // F#2

        // m.16: C#7 dominant
        { t: 13.5, div: 'swell', midi: 81, dur: 0.6, vel: 0.72 },    // A5
        { t: 13.5, div: 'choir', midi: 61, dur: 0.15, vel: 0.57 },   // C#4
        { t: 13.65, div: 'choir', midi: 66, dur: 0.15, vel: 0.55 },  // F#4 (as E#)
        { t: 13.8, div: 'choir', midi: 68, dur: 0.15, vel: 0.57 },   // G#4
        { t: 13.95, div: 'choir', midi: 71, dur: 0.15, vel: 0.59 },  // B4
        { t: 14.1, div: 'choir', midi: 68, dur: 0.15, vel: 0.57 },   // G#4
        { t: 14.25, div: 'choir', midi: 61, dur: 0.15, vel: 0.55 },  // C#4
        { t: 13.5, div: 'pedal', midi: 49, dur: 1.2, vel: 0.50 },    // C#3

        // m.17-20: Second theme - more lyrical, still with arpeggios
        { t: 14.4, div: 'swell', midi: 78, dur: 1.0, vel: 0.68 },    // F#5 cantabile
        { t: 14.4, div: 'choir', midi: 66, dur: 0.15, vel: 0.54 },   // F#4
        { t: 14.55, div: 'choir', midi: 61, dur: 0.15, vel: 0.52 },  // C#4
        { t: 14.7, div: 'choir', midi: 66, dur: 0.15, vel: 0.54 },   // F#4
        { t: 14.85, div: 'choir', midi: 69, dur: 0.15, vel: 0.56 },  // A4
        { t: 15.0, div: 'choir', midi: 66, dur: 0.15, vel: 0.54 },   // F#4
        { t: 15.15, div: 'choir', midi: 61, dur: 0.15, vel: 0.52 },  // C#4
        { t: 14.4, div: 'pedal', midi: 42, dur: 1.5, vel: 0.48 },    // F#2

        // m.18: Singing melody continues
        { t: 15.4, div: 'swell', midi: 76, dur: 0.5, vel: 0.67 },    // E5
        { t: 15.9, div: 'swell', midi: 73, dur: 0.5, vel: 0.65 },    // C#5
        { t: 15.4, div: 'choir', midi: 64, dur: 0.15, vel: 0.53 },   // E4
        { t: 15.55, div: 'choir', midi: 68, dur: 0.15, vel: 0.51 },  // G#4
        { t: 15.7, div: 'choir', midi: 71, dur: 0.15, vel: 0.53 },   // B4
        { t: 15.85, div: 'choir', midi: 68, dur: 0.15, vel: 0.51 },  // G#4
        { t: 16.0, div: 'choir', midi: 64, dur: 0.15, vel: 0.53 },   // E4
        { t: 16.15, div: 'choir', midi: 59, dur: 0.15, vel: 0.51 },  // B3
        { t: 15.4, div: 'pedal', midi: 40, dur: 1.2, vel: 0.46 },    // E2

        // m.19: D major warmth
        { t: 16.3, div: 'swell', midi: 74, dur: 0.9, vel: 0.66 },    // D5
        { t: 16.3, div: 'choir', midi: 62, dur: 0.15, vel: 0.54 },   // D4
        { t: 16.45, div: 'choir', midi: 66, dur: 0.15, vel: 0.52 },  // F#4
        { t: 16.6, div: 'choir', midi: 69, dur: 0.15, vel: 0.54 },   // A4
        { t: 16.75, div: 'choir', midi: 74, dur: 0.15, vel: 0.56 },  // D5
        { t: 16.9, div: 'choir', midi: 69, dur: 0.15, vel: 0.54 },   // A4
        { t: 17.05, div: 'choir', midi: 66, dur: 0.15, vel: 0.52 },  // F#4
        { t: 16.3, div: 'pedal', midi: 50, dur: 1.2, vel: 0.48 },    // D3

        // m.20: Cadence to F#m
        { t: 17.2, div: 'swell', midi: 73, dur: 0.5, vel: 0.65 },    // C#5
        { t: 17.7, div: 'swell', midi: 71, dur: 0.5, vel: 0.63 },    // B4
        { t: 18.2, div: 'swell', midi: 69, dur: 0.5, vel: 0.65 },    // A4
        { t: 17.2, div: 'choir', midi: 61, dur: 0.15, vel: 0.53 },   // C#4
        { t: 17.35, div: 'choir', midi: 66, dur: 0.15, vel: 0.51 },  // F#4
        { t: 17.5, div: 'choir', midi: 69, dur: 0.15, vel: 0.53 },   // A4
        { t: 17.65, div: 'choir', midi: 66, dur: 0.15, vel: 0.51 },  // F#4
        { t: 17.8, div: 'choir', midi: 61, dur: 0.15, vel: 0.53 },   // C#4
        { t: 17.95, div: 'choir', midi: 59, dur: 0.15, vel: 0.51 },  // B3
        { t: 18.1, div: 'choir', midi: 57, dur: 0.15, vel: 0.49 },   // A3
        { t: 18.25, div: 'choir', midi: 54, dur: 0.15, vel: 0.47 },  // F#3
        { t: 17.2, div: 'pedal', midi: 42, dur: 1.5, vel: 0.48 },    // F#2

        // m.21-28: Development - shifting harmonies, water imagery
        // Em arpeggios
        { t: 18.6, div: 'swell', midi: 76, dur: 0.6, vel: 0.65 },    // E5
        { t: 18.6, div: 'choir', midi: 64, dur: 0.15, vel: 0.54 },   // E4
        { t: 18.75, div: 'choir', midi: 67, dur: 0.15, vel: 0.52 },  // G4
        { t: 18.9, div: 'choir', midi: 71, dur: 0.15, vel: 0.54 },   // B4
        { t: 19.05, div: 'choir', midi: 76, dur: 0.15, vel: 0.56 },  // E5
        { t: 19.2, div: 'choir', midi: 71, dur: 0.15, vel: 0.54 },   // B4
        { t: 19.35, div: 'choir', midi: 67, dur: 0.15, vel: 0.52 },  // G4
        { t: 18.6, div: 'pedal', midi: 40, dur: 1.2, vel: 0.48 },    // E2

        // Bbmaj7 - chromatic shift
        { t: 19.5, div: 'swell', midi: 77, dur: 0.6, vel: 0.66 },    // F5
        { t: 19.5, div: 'choir', midi: 58, dur: 0.15, vel: 0.54 },   // Bb3
        { t: 19.65, div: 'choir', midi: 62, dur: 0.15, vel: 0.52 },  // D4
        { t: 19.8, div: 'choir', midi: 65, dur: 0.15, vel: 0.54 },   // F4
        { t: 19.95, div: 'choir', midi: 69, dur: 0.15, vel: 0.56 },  // A4
        { t: 20.1, div: 'choir', midi: 65, dur: 0.15, vel: 0.54 },   // F4
        { t: 20.25, div: 'choir', midi: 62, dur: 0.15, vel: 0.52 },  // D4
        { t: 19.5, div: 'pedal', midi: 46, dur: 1.2, vel: 0.48 },    // Bb2

        // Gm
        { t: 20.4, div: 'swell', midi: 74, dur: 0.6, vel: 0.65 },    // D5
        { t: 20.4, div: 'choir', midi: 55, dur: 0.15, vel: 0.53 },   // G3
        { t: 20.55, div: 'choir', midi: 58, dur: 0.15, vel: 0.51 },  // Bb3
        { t: 20.7, div: 'choir', midi: 62, dur: 0.15, vel: 0.53 },   // D4
        { t: 20.85, div: 'choir', midi: 67, dur: 0.15, vel: 0.55 },  // G4
        { t: 21.0, div: 'choir', midi: 62, dur: 0.15, vel: 0.53 },   // D4
        { t: 21.15, div: 'choir', midi: 58, dur: 0.15, vel: 0.51 },  // Bb3
        { t: 20.4, div: 'pedal', midi: 43, dur: 1.2, vel: 0.47 },    // G2

        // Back to C# dom
        { t: 21.3, div: 'swell', midi: 76, dur: 0.6, vel: 0.67 },    // E5
        { t: 21.3, div: 'choir', midi: 61, dur: 0.15, vel: 0.55 },   // C#4
        { t: 21.45, div: 'choir', midi: 66, dur: 0.15, vel: 0.53 },  // F#4 (E#)
        { t: 21.6, div: 'choir', midi: 68, dur: 0.15, vel: 0.55 },   // G#4
        { t: 21.75, div: 'choir', midi: 73, dur: 0.15, vel: 0.57 },  // C#5
        { t: 21.9, div: 'choir', midi: 68, dur: 0.15, vel: 0.55 },   // G#4
        { t: 22.05, div: 'choir', midi: 61, dur: 0.15, vel: 0.53 },  // C#4
        { t: 21.3, div: 'pedal', midi: 49, dur: 1.2, vel: 0.50 },    // C#3

        // m.25-28: Building to climax - wider arpeggios
        { t: 22.2, div: 'swell', midi: 78, dur: 0.3, vel: 0.70 },    // F#5
        { t: 22.5, div: 'swell', midi: 81, dur: 0.3, vel: 0.72 },    // A5
        { t: 22.8, div: 'swell', midi: 85, dur: 0.3, vel: 0.74 },    // C#6
        { t: 22.2, div: 'choir', midi: 54, dur: 0.15, vel: 0.57 },   // F#3
        { t: 22.35, div: 'choir', midi: 61, dur: 0.15, vel: 0.55 },  // C#4
        { t: 22.5, div: 'choir', midi: 66, dur: 0.15, vel: 0.57 },   // F#4
        { t: 22.65, div: 'choir', midi: 69, dur: 0.15, vel: 0.59 },  // A4
        { t: 22.8, div: 'choir', midi: 73, dur: 0.15, vel: 0.57 },   // C#5
        { t: 22.95, div: 'choir', midi: 78, dur: 0.15, vel: 0.59 },  // F#5
        { t: 22.2, div: 'pedal', midi: 42, dur: 1.2, vel: 0.52 },    // F#2

        // m.26: D major peak
        { t: 23.1, div: 'swell', midi: 86, dur: 0.6, vel: 0.76 },    // D6
        { t: 23.1, div: 'choir', midi: 62, dur: 0.15, vel: 0.58 },   // D4
        { t: 23.25, div: 'choir', midi: 66, dur: 0.15, vel: 0.56 },  // F#4
        { t: 23.4, div: 'choir', midi: 69, dur: 0.15, vel: 0.58 },   // A4
        { t: 23.55, div: 'choir', midi: 74, dur: 0.15, vel: 0.60 },  // D5
        { t: 23.7, div: 'choir', midi: 78, dur: 0.15, vel: 0.58 },   // F#5
        { t: 23.85, div: 'choir', midi: 74, dur: 0.15, vel: 0.56 },  // D5
        { t: 23.1, div: 'pedal', midi: 50, dur: 1.2, vel: 0.54 },    // D3

        // m.27: Bm approach
        { t: 24.0, div: 'swell', midi: 83, dur: 0.6, vel: 0.74 },    // B5
        { t: 24.0, div: 'choir', midi: 59, dur: 0.15, vel: 0.57 },   // B3
        { t: 24.15, div: 'choir', midi: 62, dur: 0.15, vel: 0.55 },  // D4
        { t: 24.3, div: 'choir', midi: 66, dur: 0.15, vel: 0.57 },   // F#4
        { t: 24.45, div: 'choir', midi: 71, dur: 0.15, vel: 0.59 },  // B4
        { t: 24.6, div: 'choir', midi: 66, dur: 0.15, vel: 0.57 },   // F#4
        { t: 24.75, div: 'choir', midi: 62, dur: 0.15, vel: 0.55 },  // D4
        { t: 24.0, div: 'pedal', midi: 47, dur: 1.2, vel: 0.52 },    // B2

        // m.28: C# dominant cadence
        { t: 24.9, div: 'swell', midi: 80, dur: 0.3, vel: 0.72 },    // G#5
        { t: 25.2, div: 'swell', midi: 78, dur: 0.3, vel: 0.70 },    // F#5
        { t: 25.5, div: 'swell', midi: 76, dur: 0.3, vel: 0.72 },    // E5(E#)
        { t: 24.9, div: 'choir', midi: 61, dur: 0.15, vel: 0.56 },   // C#4
        { t: 25.05, div: 'choir', midi: 66, dur: 0.15, vel: 0.54 },  // F#4
        { t: 25.2, div: 'choir', midi: 68, dur: 0.15, vel: 0.56 },   // G#4
        { t: 25.35, div: 'choir', midi: 73, dur: 0.15, vel: 0.58 },  // C#5
        { t: 25.5, div: 'choir', midi: 68, dur: 0.15, vel: 0.56 },   // G#4
        { t: 25.65, div: 'choir', midi: 61, dur: 0.15, vel: 0.54 },  // C#4
        { t: 24.9, div: 'pedal', midi: 49, dur: 1.2, vel: 0.52 },    // C#3

        // m.29-36: Reprise of A section, fuller
        { t: 25.8, div: 'swell', midi: 78, dur: 0.6, vel: 0.70 },    // F#5
        { t: 25.8, div: 'choir', midi: 66, dur: 0.15, vel: 0.56 },   // F#4
        { t: 25.95, div: 'choir', midi: 69, dur: 0.15, vel: 0.54 },  // A4
        { t: 26.1, div: 'choir', midi: 73, dur: 0.15, vel: 0.56 },   // C#5
        { t: 26.25, div: 'choir', midi: 78, dur: 0.15, vel: 0.58 },  // F#5
        { t: 26.4, div: 'choir', midi: 73, dur: 0.15, vel: 0.56 },   // C#5
        { t: 26.55, div: 'choir', midi: 69, dur: 0.15, vel: 0.54 },  // A4
        { t: 25.8, div: 'pedal', midi: 42, dur: 1.2, vel: 0.50 },    // F#2

        // More arpeggio figuration
        { t: 26.7, div: 'swell', midi: 76, dur: 0.6, vel: 0.69 },    // E5
        { t: 26.7, div: 'choir', midi: 66, dur: 0.15, vel: 0.55 },   // F#4
        { t: 26.85, div: 'choir', midi: 69, dur: 0.15, vel: 0.53 },  // A4
        { t: 27.0, div: 'choir', midi: 73, dur: 0.15, vel: 0.55 },   // C#5
        { t: 27.15, div: 'choir', midi: 78, dur: 0.15, vel: 0.57 },  // F#5
        { t: 27.3, div: 'choir', midi: 73, dur: 0.15, vel: 0.55 },   // C#5
        { t: 27.45, div: 'choir', midi: 69, dur: 0.15, vel: 0.53 },  // A4
        { t: 26.7, div: 'pedal', midi: 42, dur: 1.2, vel: 0.50 },    // F#2

        // Wider D major sweep
        { t: 27.6, div: 'swell', midi: 78, dur: 0.6, vel: 0.71 },    // F#5
        { t: 27.6, div: 'choir', midi: 50, dur: 0.15, vel: 0.54 },   // D3
        { t: 27.75, div: 'choir', midi: 54, dur: 0.15, vel: 0.52 },  // F#3
        { t: 27.9, div: 'choir', midi: 57, dur: 0.15, vel: 0.54 },   // A3
        { t: 28.05, div: 'choir', midi: 62, dur: 0.15, vel: 0.56 },  // D4
        { t: 28.2, div: 'choir', midi: 66, dur: 0.15, vel: 0.58 },   // F#4
        { t: 28.35, div: 'choir', midi: 69, dur: 0.15, vel: 0.56 },  // A4
        { t: 27.6, div: 'pedal', midi: 50, dur: 1.2, vel: 0.50 },    // D3

        // C#7 with climactic sweep
        { t: 28.5, div: 'swell', midi: 80, dur: 0.3, vel: 0.74 },    // G#5
        { t: 28.8, div: 'swell', midi: 78, dur: 0.3, vel: 0.72 },    // F#5
        { t: 28.5, div: 'choir', midi: 49, dur: 0.15, vel: 0.56 },   // C#3
        { t: 28.65, div: 'choir', midi: 56, dur: 0.15, vel: 0.54 },  // G#3
        { t: 28.8, div: 'choir', midi: 61, dur: 0.15, vel: 0.56 },   // C#4
        { t: 28.95, div: 'choir', midi: 66, dur: 0.15, vel: 0.58 },  // F#4
        { t: 29.1, div: 'choir', midi: 68, dur: 0.15, vel: 0.56 },   // G#4
        { t: 29.25, div: 'choir', midi: 73, dur: 0.15, vel: 0.58 },  // C#5
        { t: 28.5, div: 'pedal', midi: 49, dur: 1.2, vel: 0.52 },    // C#3

        // m.33-36: Final section, quiet again
        { t: 29.4, div: 'swell', midi: 78, dur: 0.9, vel: 0.62 },    // F#5 p
        { t: 29.4, div: 'choir', midi: 66, dur: 0.15, vel: 0.50 },   // F#4
        { t: 29.55, div: 'choir', midi: 69, dur: 0.15, vel: 0.48 },  // A4
        { t: 29.7, div: 'choir', midi: 73, dur: 0.15, vel: 0.50 },   // C#5
        { t: 29.85, div: 'choir', midi: 78, dur: 0.15, vel: 0.52 },  // F#5
        { t: 30.0, div: 'choir', midi: 73, dur: 0.15, vel: 0.50 },   // C#5
        { t: 30.15, div: 'choir', midi: 69, dur: 0.15, vel: 0.48 },  // A4
        { t: 29.4, div: 'pedal', midi: 42, dur: 1.5, vel: 0.45 },    // F#2

        // Fading arpeggios
        { t: 30.3, div: 'swell', midi: 76, dur: 0.9, vel: 0.58 },    // E5 pp
        { t: 30.3, div: 'choir', midi: 64, dur: 0.15, vel: 0.46 },   // E4
        { t: 30.45, div: 'choir', midi: 68, dur: 0.15, vel: 0.44 },  // G#4
        { t: 30.6, div: 'choir', midi: 71, dur: 0.15, vel: 0.46 },   // B4
        { t: 30.75, div: 'choir', midi: 76, dur: 0.15, vel: 0.48 },  // E5
        { t: 30.9, div: 'choir', midi: 71, dur: 0.15, vel: 0.46 },   // B4
        { t: 31.05, div: 'choir', midi: 68, dur: 0.15, vel: 0.44 },  // G#4
        { t: 30.3, div: 'pedal', midi: 40, dur: 1.5, vel: 0.42 },    // E2

        // m.35: Final F#m arpeggio, ppp
        { t: 31.2, div: 'swell', midi: 73, dur: 1.2, vel: 0.50 },    // C#5
        { t: 31.2, div: 'choir', midi: 54, dur: 0.15, vel: 0.42 },   // F#3
        { t: 31.35, div: 'choir', midi: 61, dur: 0.15, vel: 0.40 },  // C#4
        { t: 31.5, div: 'choir', midi: 66, dur: 0.15, vel: 0.42 },   // F#4
        { t: 31.65, div: 'choir', midi: 69, dur: 0.15, vel: 0.44 },  // A4
        { t: 31.8, div: 'choir', midi: 66, dur: 0.15, vel: 0.42 },   // F#4
        { t: 31.95, div: 'choir', midi: 61, dur: 0.15, vel: 0.40 },  // C#4
        { t: 31.2, div: 'pedal', midi: 42, dur: 2.0, vel: 0.40 },    // F#2

        // m.36: Final dissolve - F# major (Picardy)
        { t: 32.5, div: 'swell', midi: 78, dur: 3.0, vel: 0.45 },    // F#5
        { t: 32.5, div: 'swell', midi: 73, dur: 3.0, vel: 0.40 },    // C#5
        { t: 32.5, div: 'choir', midi: 70, dur: 3.0, vel: 0.38 },    // A#4 (major!)
        { t: 32.5, div: 'choir', midi: 66, dur: 3.0, vel: 0.36 },    // F#4
        { t: 32.5, div: 'pedal', midi: 42, dur: 4.0, vel: 0.38 },    // F#2
        { t: 32.5, div: 'pedal', midi: 30, dur: 4.0, vel: 0.34 },    // F#1
    ]
};
