// ============================================================
// Pachelbel - Canon in D Major
// ============================================================
// Original: 3 violins + basso continuo
// Time signature: 4/4, tempo ~54 BPM (stately)
// Key: D major (F#, C#)
// Structure: 2-bar ground bass ostinato with 3 canonic voices
//   entering at 2-bar intervals
//
// MIDI reference:
//   D2=38, G2=43, A2=45, B2=47, D3=50, F#3=54, G3=55, A3=57
//   B3=59, C#4=61, D4=62, E4=64, F#4=66, G4=67, A4=69, B4=71
//   C#5=73, D5=74, E5=76, F#5=78, G5=79, A5=81, B5=83
// ============================================================

const PIECE_PACHELBEL_CANON = {
    title: "Canon in D",
    composer: "Johann Pachelbel",
    tempo: 54,
    timeSignature: '4/4',
    registration: {
        great: ['gt-principal8', 'gt-bourdon8', 'gt-octave4'],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voxceleste8', 'sw-tremulant'],
        choir: ['ch-gedeckt8', 'ch-dulciana8'],
        pedal: ['pd-subbass16', 'pd-principal16']
    },
    events: [
        // ============================================================
        // The ground bass (Pedal) - repeating 8-note ostinato
        // D - A - B - F# - G - D - G - A  (each 2 beats = half note)
        // One full cycle = 16 beats (2 bars of 4/4, but each chord lasts 2 beats
        // across an 8-bar phrase = 16 beats per cycle)
        //
        // Actually in original: each bass note = 1 bar (4 beats), 8 bars per cycle
        // So one full cycle = 32 beats
        // ============================================================

        // --- CYCLE 1: Bass alone (bars 1-8, beats 0-31) ---
        // Pedal bass ostinato
        { t: 0,  div: 'pedal', midi: 50, dur: 4 },  // D3
        { t: 4,  div: 'pedal', midi: 45, dur: 4 },  // A2
        { t: 8,  div: 'pedal', midi: 47, dur: 4 },  // B2
        { t: 12, div: 'pedal', midi: 42, dur: 4 },  // F#2
        { t: 16, div: 'pedal', midi: 43, dur: 4 },  // G2
        { t: 20, div: 'pedal', midi: 38, dur: 4 },  // D2
        { t: 24, div: 'pedal', midi: 43, dur: 4 },  // G2
        { t: 28, div: 'pedal', midi: 45, dur: 4 },  // A2

        // --- CYCLE 2: Bass + Violin 1 enters (bars 9-16, beats 32-63) ---
        // Pedal bass ostinato cycle 2
        { t: 32, div: 'pedal', midi: 50, dur: 4 },  // D3
        { t: 36, div: 'pedal', midi: 45, dur: 4 },  // A2
        { t: 40, div: 'pedal', midi: 47, dur: 4 },  // B2
        { t: 44, div: 'pedal', midi: 42, dur: 4 },  // F#2
        { t: 48, div: 'pedal', midi: 43, dur: 4 },  // G2
        { t: 52, div: 'pedal', midi: 38, dur: 4 },  // D2
        { t: 56, div: 'pedal', midi: 43, dur: 4 },  // G2
        { t: 60, div: 'pedal', midi: 45, dur: 4 },  // A2

        // Violin 1 (Great) - the famous first entry: sustained notes
        // F#5 - E5 - D5 - C#5 - B4 - A4 - B4 - C#5
        { t: 32, div: 'great', midi: 78, dur: 4 },  // F#5
        { t: 36, div: 'great', midi: 76, dur: 4 },  // E5
        { t: 40, div: 'great', midi: 74, dur: 4 },  // D5
        { t: 44, div: 'great', midi: 73, dur: 4 },  // C#5
        { t: 48, div: 'great', midi: 71, dur: 4 },  // B4
        { t: 52, div: 'great', midi: 69, dur: 4 },  // A4
        { t: 56, div: 'great', midi: 71, dur: 4 },  // B4
        { t: 60, div: 'great', midi: 73, dur: 4 },  // C#5

        // --- CYCLE 3: Bass + Violin 1 (variation 2) + Violin 2 enters ---
        // (bars 17-24, beats 64-95)

        // Pedal bass ostinato cycle 3
        { t: 64, div: 'pedal', midi: 50, dur: 4 },  // D3
        { t: 68, div: 'pedal', midi: 45, dur: 4 },  // A2
        { t: 72, div: 'pedal', midi: 47, dur: 4 },  // B2
        { t: 76, div: 'pedal', midi: 42, dur: 4 },  // F#2
        { t: 80, div: 'pedal', midi: 43, dur: 4 },  // G2
        { t: 84, div: 'pedal', midi: 38, dur: 4 },  // D2
        { t: 88, div: 'pedal', midi: 43, dur: 4 },  // G2
        { t: 92, div: 'pedal', midi: 45, dur: 4 },  // A2

        // Violin 1 (Great) - variation 2: quarter-note movement
        // D5 C#5 D5 D5 | C#5 B4 C#5 A4 | B4 A4 G4 A4 | A4 G4 F#4 E4 |
        // D4 E4 F#4 G4 | F#4 E4 D4 E4 | B4 C#5 D5 A4 | A4 B4 C#5 D5
        { t: 64,  div: 'great', midi: 74, dur: 1 },  // D5
        { t: 65,  div: 'great', midi: 73, dur: 1 },  // C#5
        { t: 66,  div: 'great', midi: 74, dur: 1 },  // D5
        { t: 67,  div: 'great', midi: 74, dur: 1 },  // D5
        { t: 68,  div: 'great', midi: 73, dur: 1 },  // C#5
        { t: 69,  div: 'great', midi: 71, dur: 1 },  // B4
        { t: 70,  div: 'great', midi: 73, dur: 1 },  // C#5
        { t: 71,  div: 'great', midi: 69, dur: 1 },  // A4
        { t: 72,  div: 'great', midi: 71, dur: 1 },  // B4
        { t: 73,  div: 'great', midi: 69, dur: 1 },  // A4
        { t: 74,  div: 'great', midi: 67, dur: 1 },  // G4
        { t: 75,  div: 'great', midi: 69, dur: 1 },  // A4
        { t: 76,  div: 'great', midi: 69, dur: 1 },  // A4
        { t: 77,  div: 'great', midi: 67, dur: 1 },  // G4
        { t: 78,  div: 'great', midi: 66, dur: 1 },  // F#4
        { t: 79,  div: 'great', midi: 64, dur: 1 },  // E4
        { t: 80,  div: 'great', midi: 62, dur: 1 },  // D4
        { t: 81,  div: 'great', midi: 64, dur: 1 },  // E4
        { t: 82,  div: 'great', midi: 66, dur: 1 },  // F#4
        { t: 83,  div: 'great', midi: 67, dur: 1 },  // G4
        { t: 84,  div: 'great', midi: 66, dur: 1 },  // F#4
        { t: 85,  div: 'great', midi: 64, dur: 1 },  // E4
        { t: 86,  div: 'great', midi: 62, dur: 1 },  // D4
        { t: 87,  div: 'great', midi: 64, dur: 1 },  // E4
        { t: 88,  div: 'great', midi: 71, dur: 1 },  // B4
        { t: 89,  div: 'great', midi: 73, dur: 1 },  // C#5
        { t: 90,  div: 'great', midi: 74, dur: 1 },  // D5
        { t: 91,  div: 'great', midi: 69, dur: 1 },  // A4
        { t: 92,  div: 'great', midi: 69, dur: 1 },  // A4
        { t: 93,  div: 'great', midi: 71, dur: 1 },  // B4
        { t: 94,  div: 'great', midi: 73, dur: 2 },  // C#5 (half)

        // Violin 2 (Swell) enters with the original melody (canon at 2-bar delay)
        // Same as Violin 1 cycle 2: F#5 - E5 - D5 - C#5 - B4 - A4 - B4 - C#5
        { t: 64, div: 'swell', midi: 78, dur: 4 },  // F#5
        { t: 68, div: 'swell', midi: 76, dur: 4 },  // E5
        { t: 72, div: 'swell', midi: 74, dur: 4 },  // D5
        { t: 76, div: 'swell', midi: 73, dur: 4 },  // C#5
        { t: 80, div: 'swell', midi: 71, dur: 4 },  // B4
        { t: 84, div: 'swell', midi: 69, dur: 4 },  // A4
        { t: 88, div: 'swell', midi: 71, dur: 4 },  // B4
        { t: 92, div: 'swell', midi: 73, dur: 4 },  // C#5

        // --- CYCLE 4: All 3 voices + bass (bars 25-32, beats 96-127) ---

        // Pedal bass ostinato cycle 4
        { t: 96,  div: 'pedal', midi: 50, dur: 4 },  // D3
        { t: 100, div: 'pedal', midi: 45, dur: 4 },  // A2
        { t: 104, div: 'pedal', midi: 47, dur: 4 },  // B2
        { t: 108, div: 'pedal', midi: 42, dur: 4 },  // F#2
        { t: 112, div: 'pedal', midi: 43, dur: 4 },  // G2
        { t: 116, div: 'pedal', midi: 38, dur: 4 },  // D2
        { t: 120, div: 'pedal', midi: 43, dur: 4 },  // G2
        { t: 124, div: 'pedal', midi: 45, dur: 4 },  // A2

        // Violin 1 (Great) - variation 3: eighth-note figurations
        // Over D chord (bar 25): D5 F#5 A5 G5 F#5 D5 F#5 E5
        { t: 96,    div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 96.5,  div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 97,    div: 'great', midi: 81, dur: 0.5 },  // A5
        { t: 97.5,  div: 'great', midi: 79, dur: 0.5 },  // G5
        { t: 98,    div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 98.5,  div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 99,    div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 99.5,  div: 'great', midi: 76, dur: 0.5 },  // E5
        // Over A chord (bar 26): E5 C#5 E5 A5 A5 G5 F#5 E5
        { t: 100,   div: 'great', midi: 76, dur: 0.5 },  // E5
        { t: 100.5, div: 'great', midi: 73, dur: 0.5 },  // C#5
        { t: 101,   div: 'great', midi: 76, dur: 0.5 },  // E5
        { t: 101.5, div: 'great', midi: 81, dur: 0.5 },  // A5
        { t: 102,   div: 'great', midi: 81, dur: 0.5 },  // A5
        { t: 102.5, div: 'great', midi: 79, dur: 0.5 },  // G5
        { t: 103,   div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 103.5, div: 'great', midi: 76, dur: 0.5 },  // E5
        // Over Bm chord (bar 27): D5 B4 D5 F#5 E5 D5 B4 D5
        { t: 104,   div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 104.5, div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 105,   div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 105.5, div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 106,   div: 'great', midi: 76, dur: 0.5 },  // E5
        { t: 106.5, div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 107,   div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 107.5, div: 'great', midi: 74, dur: 0.5 },  // D5
        // Over F#m chord (bar 28): C#5 A4 C#5 F#5 F#5 E5 D5 C#5
        { t: 108,   div: 'great', midi: 73, dur: 0.5 },  // C#5
        { t: 108.5, div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 109,   div: 'great', midi: 73, dur: 0.5 },  // C#5
        { t: 109.5, div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 110,   div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 110.5, div: 'great', midi: 76, dur: 0.5 },  // E5
        { t: 111,   div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 111.5, div: 'great', midi: 73, dur: 0.5 },  // C#5
        // Over G chord (bar 29): B4 G4 B4 D5 C#5 B4 A4 G4
        { t: 112,   div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 112.5, div: 'great', midi: 67, dur: 0.5 },  // G4
        { t: 113,   div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 113.5, div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 114,   div: 'great', midi: 73, dur: 0.5 },  // C#5
        { t: 114.5, div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 115,   div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 115.5, div: 'great', midi: 67, dur: 0.5 },  // G4
        // Over D chord (bar 30): A4 F#4 A4 D5 D5 C#5 B4 A4
        { t: 116,   div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 116.5, div: 'great', midi: 66, dur: 0.5 },  // F#4
        { t: 117,   div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 117.5, div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 118,   div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 118.5, div: 'great', midi: 73, dur: 0.5 },  // C#5
        { t: 119,   div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 119.5, div: 'great', midi: 69, dur: 0.5 },  // A4
        // Over G chord (bar 31): B4 G4 B4 D5 D5 C#5 B4 A4
        { t: 120,   div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 120.5, div: 'great', midi: 67, dur: 0.5 },  // G4
        { t: 121,   div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 121.5, div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 122,   div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 122.5, div: 'great', midi: 73, dur: 0.5 },  // C#5
        { t: 123,   div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 123.5, div: 'great', midi: 69, dur: 0.5 },  // A4
        // Over A chord (bar 32): A4 C#5 E5 A5 A5 B5 C#6 D6 (leading up)
        { t: 124,   div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 124.5, div: 'great', midi: 73, dur: 0.5 },  // C#5
        { t: 125,   div: 'great', midi: 76, dur: 0.5 },  // E5
        { t: 125.5, div: 'great', midi: 81, dur: 0.5 },  // A5
        { t: 126,   div: 'great', midi: 81, dur: 0.5 },  // A5
        { t: 126.5, div: 'great', midi: 79, dur: 0.5 },  // G5
        { t: 127,   div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 127.5, div: 'great', midi: 76, dur: 0.5 },  // E5

        // Violin 2 (Swell) - variation 2 (quarter notes)
        // Same melody as Violin 1 had in cycle 3, one cycle behind
        { t: 96,  div: 'swell', midi: 74, dur: 1 },  // D5
        { t: 97,  div: 'swell', midi: 73, dur: 1 },  // C#5
        { t: 98,  div: 'swell', midi: 74, dur: 1 },  // D5
        { t: 99,  div: 'swell', midi: 74, dur: 1 },  // D5
        { t: 100, div: 'swell', midi: 73, dur: 1 },  // C#5
        { t: 101, div: 'swell', midi: 71, dur: 1 },  // B4
        { t: 102, div: 'swell', midi: 73, dur: 1 },  // C#5
        { t: 103, div: 'swell', midi: 69, dur: 1 },  // A4
        { t: 104, div: 'swell', midi: 71, dur: 1 },  // B4
        { t: 105, div: 'swell', midi: 69, dur: 1 },  // A4
        { t: 106, div: 'swell', midi: 67, dur: 1 },  // G4
        { t: 107, div: 'swell', midi: 69, dur: 1 },  // A4
        { t: 108, div: 'swell', midi: 69, dur: 1 },  // A4
        { t: 109, div: 'swell', midi: 67, dur: 1 },  // G4
        { t: 110, div: 'swell', midi: 66, dur: 1 },  // F#4
        { t: 111, div: 'swell', midi: 64, dur: 1 },  // E4
        { t: 112, div: 'swell', midi: 62, dur: 1 },  // D4
        { t: 113, div: 'swell', midi: 64, dur: 1 },  // E4
        { t: 114, div: 'swell', midi: 66, dur: 1 },  // F#4
        { t: 115, div: 'swell', midi: 67, dur: 1 },  // G4
        { t: 116, div: 'swell', midi: 66, dur: 1 },  // F#4
        { t: 117, div: 'swell', midi: 64, dur: 1 },  // E4
        { t: 118, div: 'swell', midi: 62, dur: 1 },  // D4
        { t: 119, div: 'swell', midi: 64, dur: 1 },  // E4
        { t: 120, div: 'swell', midi: 71, dur: 1 },  // B4
        { t: 121, div: 'swell', midi: 73, dur: 1 },  // C#5
        { t: 122, div: 'swell', midi: 74, dur: 1 },  // D5
        { t: 123, div: 'swell', midi: 69, dur: 1 },  // A4
        { t: 124, div: 'swell', midi: 69, dur: 1 },  // A4
        { t: 125, div: 'swell', midi: 71, dur: 1 },  // B4
        { t: 126, div: 'swell', midi: 73, dur: 2 },  // C#5 (half)

        // Violin 3 (Choir) enters with original sustained melody
        // F#5 - E5 - D5 - C#5 - B4 - A4 - B4 - C#5
        { t: 96,  div: 'choir', midi: 78, dur: 4 },  // F#5
        { t: 100, div: 'choir', midi: 76, dur: 4 },  // E5
        { t: 104, div: 'choir', midi: 74, dur: 4 },  // D5
        { t: 108, div: 'choir', midi: 73, dur: 4 },  // C#5
        { t: 112, div: 'choir', midi: 71, dur: 4 },  // B4
        { t: 116, div: 'choir', midi: 69, dur: 4 },  // A4
        { t: 120, div: 'choir', midi: 71, dur: 4 },  // B4
        { t: 124, div: 'choir', midi: 73, dur: 4 },  // C#5

        // --- CYCLE 5: Full texture continues (bars 33-40, beats 128-159) ---

        // Pedal bass ostinato cycle 5
        { t: 128, div: 'pedal', midi: 50, dur: 4 },  // D3
        { t: 132, div: 'pedal', midi: 45, dur: 4 },  // A2
        { t: 136, div: 'pedal', midi: 47, dur: 4 },  // B2
        { t: 140, div: 'pedal', midi: 42, dur: 4 },  // F#2
        { t: 144, div: 'pedal', midi: 43, dur: 4 },  // G2
        { t: 148, div: 'pedal', midi: 38, dur: 4 },  // D2
        { t: 152, div: 'pedal', midi: 43, dur: 4 },  // G2
        { t: 156, div: 'pedal', midi: 45, dur: 4 },  // A2

        // Violin 1 (Great) - variation 4: flowing sixteenth-note arpeggios (simplified as eighths)
        // D chord arpeggiated: D5 A4 D5 F#5 A5 F#5 D5 A4
        { t: 128,   div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 128.5, div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 129,   div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 129.5, div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 130,   div: 'great', midi: 81, dur: 0.5 },  // A5
        { t: 130.5, div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 131,   div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 131.5, div: 'great', midi: 69, dur: 0.5 },  // A4
        // A chord: E5 C#5 A4 C#5 E5 A5 E5 C#5
        { t: 132,   div: 'great', midi: 76, dur: 0.5 },  // E5
        { t: 132.5, div: 'great', midi: 73, dur: 0.5 },  // C#5
        { t: 133,   div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 133.5, div: 'great', midi: 73, dur: 0.5 },  // C#5
        { t: 134,   div: 'great', midi: 76, dur: 0.5 },  // E5
        { t: 134.5, div: 'great', midi: 81, dur: 0.5 },  // A5
        { t: 135,   div: 'great', midi: 76, dur: 0.5 },  // E5
        { t: 135.5, div: 'great', midi: 73, dur: 0.5 },  // C#5
        // Bm chord: D5 B4 F#4 B4 D5 F#5 D5 B4
        { t: 136,   div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 136.5, div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 137,   div: 'great', midi: 66, dur: 0.5 },  // F#4
        { t: 137.5, div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 138,   div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 138.5, div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 139,   div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 139.5, div: 'great', midi: 71, dur: 0.5 },  // B4
        // F#m chord: C#5 A4 F#4 A4 C#5 F#5 C#5 A4
        { t: 140,   div: 'great', midi: 73, dur: 0.5 },  // C#5
        { t: 140.5, div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 141,   div: 'great', midi: 66, dur: 0.5 },  // F#4
        { t: 141.5, div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 142,   div: 'great', midi: 73, dur: 0.5 },  // C#5
        { t: 142.5, div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 143,   div: 'great', midi: 73, dur: 0.5 },  // C#5
        { t: 143.5, div: 'great', midi: 69, dur: 0.5 },  // A4
        // G chord: B4 G4 D4 G4 B4 D5 B4 G4
        { t: 144,   div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 144.5, div: 'great', midi: 67, dur: 0.5 },  // G4
        { t: 145,   div: 'great', midi: 62, dur: 0.5 },  // D4
        { t: 145.5, div: 'great', midi: 67, dur: 0.5 },  // G4
        { t: 146,   div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 146.5, div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 147,   div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 147.5, div: 'great', midi: 67, dur: 0.5 },  // G4
        // D chord: A4 F#4 D4 F#4 A4 D5 A4 F#4
        { t: 148,   div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 148.5, div: 'great', midi: 66, dur: 0.5 },  // F#4
        { t: 149,   div: 'great', midi: 62, dur: 0.5 },  // D4
        { t: 149.5, div: 'great', midi: 66, dur: 0.5 },  // F#4
        { t: 150,   div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 150.5, div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 151,   div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 151.5, div: 'great', midi: 66, dur: 0.5 },  // F#4
        // G chord: G4 B4 D5 G5 D5 B4 G4 B4
        { t: 152,   div: 'great', midi: 67, dur: 0.5 },  // G4
        { t: 152.5, div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 153,   div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 153.5, div: 'great', midi: 79, dur: 0.5 },  // G5
        { t: 154,   div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 154.5, div: 'great', midi: 71, dur: 0.5 },  // B4
        { t: 155,   div: 'great', midi: 67, dur: 0.5 },  // G4
        { t: 155.5, div: 'great', midi: 71, dur: 0.5 },  // B4
        // A chord: A4 C#5 E5 A5 E5 C#5 A4 D5 (resolving)
        { t: 156,   div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 156.5, div: 'great', midi: 73, dur: 0.5 },  // C#5
        { t: 157,   div: 'great', midi: 76, dur: 0.5 },  // E5
        { t: 157.5, div: 'great', midi: 81, dur: 0.5 },  // A5
        { t: 158,   div: 'great', midi: 76, dur: 0.5 },  // E5
        { t: 158.5, div: 'great', midi: 73, dur: 0.5 },  // C#5
        { t: 159,   div: 'great', midi: 69, dur: 0.5 },  // A4
        { t: 159.5, div: 'great', midi: 74, dur: 0.5 },  // D5

        // Violin 2 (Swell) - eighth-note figurations (same as Vln1 cycle 4, delayed)
        // Simplified: arpeggiate each chord
        // D: F#5 D5 A4 D5 F#5 A5 F#5 D5
        { t: 128,   div: 'swell', midi: 78, dur: 0.5 },
        { t: 128.5, div: 'swell', midi: 74, dur: 0.5 },
        { t: 129,   div: 'swell', midi: 69, dur: 0.5 },
        { t: 129.5, div: 'swell', midi: 74, dur: 0.5 },
        { t: 130,   div: 'swell', midi: 78, dur: 0.5 },
        { t: 130.5, div: 'swell', midi: 81, dur: 0.5 },
        { t: 131,   div: 'swell', midi: 78, dur: 0.5 },
        { t: 131.5, div: 'swell', midi: 74, dur: 0.5 },
        // A: E5 C#5 A4 E5 C#5 A4 E5 C#5
        { t: 132,   div: 'swell', midi: 76, dur: 0.5 },
        { t: 132.5, div: 'swell', midi: 73, dur: 0.5 },
        { t: 133,   div: 'swell', midi: 69, dur: 0.5 },
        { t: 133.5, div: 'swell', midi: 76, dur: 0.5 },
        { t: 134,   div: 'swell', midi: 73, dur: 0.5 },
        { t: 134.5, div: 'swell', midi: 69, dur: 0.5 },
        { t: 135,   div: 'swell', midi: 76, dur: 0.5 },
        { t: 135.5, div: 'swell', midi: 73, dur: 0.5 },
        // B: D5 B4 F#4 B4 D5 F#5 D5 B4
        { t: 136,   div: 'swell', midi: 74, dur: 0.5 },
        { t: 136.5, div: 'swell', midi: 71, dur: 0.5 },
        { t: 137,   div: 'swell', midi: 66, dur: 0.5 },
        { t: 137.5, div: 'swell', midi: 71, dur: 0.5 },
        { t: 138,   div: 'swell', midi: 74, dur: 0.5 },
        { t: 138.5, div: 'swell', midi: 78, dur: 0.5 },
        { t: 139,   div: 'swell', midi: 74, dur: 0.5 },
        { t: 139.5, div: 'swell', midi: 71, dur: 0.5 },
        // F#m: C#5 A4 F#4 A4 C#5 F#5 C#5 A4
        { t: 140,   div: 'swell', midi: 73, dur: 0.5 },
        { t: 140.5, div: 'swell', midi: 69, dur: 0.5 },
        { t: 141,   div: 'swell', midi: 66, dur: 0.5 },
        { t: 141.5, div: 'swell', midi: 69, dur: 0.5 },
        { t: 142,   div: 'swell', midi: 73, dur: 0.5 },
        { t: 142.5, div: 'swell', midi: 78, dur: 0.5 },
        { t: 143,   div: 'swell', midi: 73, dur: 0.5 },
        { t: 143.5, div: 'swell', midi: 69, dur: 0.5 },
        // G: B4 G4 D4 G4 B4 D5 B4 G4
        { t: 144,   div: 'swell', midi: 71, dur: 0.5 },
        { t: 144.5, div: 'swell', midi: 67, dur: 0.5 },
        { t: 145,   div: 'swell', midi: 62, dur: 0.5 },
        { t: 145.5, div: 'swell', midi: 67, dur: 0.5 },
        { t: 146,   div: 'swell', midi: 71, dur: 0.5 },
        { t: 146.5, div: 'swell', midi: 74, dur: 0.5 },
        { t: 147,   div: 'swell', midi: 71, dur: 0.5 },
        { t: 147.5, div: 'swell', midi: 67, dur: 0.5 },
        // D: A4 F#4 D4 F#4 A4 D5 A4 F#4
        { t: 148,   div: 'swell', midi: 69, dur: 0.5 },
        { t: 148.5, div: 'swell', midi: 66, dur: 0.5 },
        { t: 149,   div: 'swell', midi: 62, dur: 0.5 },
        { t: 149.5, div: 'swell', midi: 66, dur: 0.5 },
        { t: 150,   div: 'swell', midi: 69, dur: 0.5 },
        { t: 150.5, div: 'swell', midi: 74, dur: 0.5 },
        { t: 151,   div: 'swell', midi: 69, dur: 0.5 },
        { t: 151.5, div: 'swell', midi: 66, dur: 0.5 },
        // G: G4 B4 D5 G5 D5 B4 G4 B4
        { t: 152,   div: 'swell', midi: 67, dur: 0.5 },
        { t: 152.5, div: 'swell', midi: 71, dur: 0.5 },
        { t: 153,   div: 'swell', midi: 74, dur: 0.5 },
        { t: 153.5, div: 'swell', midi: 79, dur: 0.5 },
        { t: 154,   div: 'swell', midi: 74, dur: 0.5 },
        { t: 154.5, div: 'swell', midi: 71, dur: 0.5 },
        { t: 155,   div: 'swell', midi: 67, dur: 0.5 },
        { t: 155.5, div: 'swell', midi: 71, dur: 0.5 },
        // A: A4 C#5 E5 A5 E5 C#5 A4 C#5
        { t: 156,   div: 'swell', midi: 69, dur: 0.5 },
        { t: 156.5, div: 'swell', midi: 73, dur: 0.5 },
        { t: 157,   div: 'swell', midi: 76, dur: 0.5 },
        { t: 157.5, div: 'swell', midi: 81, dur: 0.5 },
        { t: 158,   div: 'swell', midi: 76, dur: 0.5 },
        { t: 158.5, div: 'swell', midi: 73, dur: 0.5 },
        { t: 159,   div: 'swell', midi: 69, dur: 0.5 },
        { t: 159.5, div: 'swell', midi: 73, dur: 0.5 },

        // Violin 3 (Choir) - quarter note variation (same as Vln1 cycle 3)
        { t: 128, div: 'choir', midi: 74, dur: 1 },  // D5
        { t: 129, div: 'choir', midi: 73, dur: 1 },  // C#5
        { t: 130, div: 'choir', midi: 74, dur: 1 },  // D5
        { t: 131, div: 'choir', midi: 74, dur: 1 },  // D5
        { t: 132, div: 'choir', midi: 73, dur: 1 },  // C#5
        { t: 133, div: 'choir', midi: 71, dur: 1 },  // B4
        { t: 134, div: 'choir', midi: 73, dur: 1 },  // C#5
        { t: 135, div: 'choir', midi: 69, dur: 1 },  // A4
        { t: 136, div: 'choir', midi: 71, dur: 1 },  // B4
        { t: 137, div: 'choir', midi: 69, dur: 1 },  // A4
        { t: 138, div: 'choir', midi: 67, dur: 1 },  // G4
        { t: 139, div: 'choir', midi: 69, dur: 1 },  // A4
        { t: 140, div: 'choir', midi: 69, dur: 1 },  // A4
        { t: 141, div: 'choir', midi: 67, dur: 1 },  // G4
        { t: 142, div: 'choir', midi: 66, dur: 1 },  // F#4
        { t: 143, div: 'choir', midi: 64, dur: 1 },  // E4
        { t: 144, div: 'choir', midi: 62, dur: 1 },  // D4
        { t: 145, div: 'choir', midi: 64, dur: 1 },  // E4
        { t: 146, div: 'choir', midi: 66, dur: 1 },  // F#4
        { t: 147, div: 'choir', midi: 67, dur: 1 },  // G4
        { t: 148, div: 'choir', midi: 66, dur: 1 },  // F#4
        { t: 149, div: 'choir', midi: 64, dur: 1 },  // E4
        { t: 150, div: 'choir', midi: 62, dur: 1 },  // D4
        { t: 151, div: 'choir', midi: 64, dur: 1 },  // E4
        { t: 152, div: 'choir', midi: 71, dur: 1 },  // B4
        { t: 153, div: 'choir', midi: 73, dur: 1 },  // C#5
        { t: 154, div: 'choir', midi: 74, dur: 1 },  // D5
        { t: 155, div: 'choir', midi: 69, dur: 1 },  // A4
        { t: 156, div: 'choir', midi: 69, dur: 1 },  // A4
        { t: 157, div: 'choir', midi: 71, dur: 1 },  // B4
        { t: 158, div: 'choir', midi: 73, dur: 2 },  // C#5 (half)

        // --- Final D major chord (beat 160) ---
        { t: 160, div: 'pedal', midi: 50, dur: 8 },  // D3
        { t: 160, div: 'great', midi: 74, dur: 8 },  // D5
        { t: 160, div: 'swell', midi: 69, dur: 8 },  // A4
        { t: 160, div: 'choir', midi: 66, dur: 8 },  // F#4
    ]
};


// ============================================================
// Clarke - Trumpet Voluntary (Prince of Denmark's March)
// ============================================================
// Original: Keyboard piece using trumpet stop, c.1700
// Time signature: 4/4 (alla breve feel), tempo ~100 BPM
// Key: D major
// Form: Rondo ABACA
// The famous trumpet melody on Great (with Trumpet 8' stop)
// Accompaniment chords on Choir
// Bass line on Pedal
//
// MIDI reference:
//   D3=50, E3=52, F#3=54, G3=55, A3=57, B3=59
//   D4=62, E4=64, F#4=66, G4=67, A4=69, B4=71
//   D5=74, E5=76, F#5=78, G5=79, A5=81
// ============================================================

const PIECE_TRUMPET_VOLUNTARY = {
    title: "Trumpet Voluntary",
    composer: "Jeremiah Clarke",
    tempo: 100,
    timeSignature: '4/4',
    registration: {
        great: ['gt-principal8', 'gt-trumpet8', 'gt-octave4'],
        swell: [],
        choir: ['ch-gedeckt8', 'ch-rohrflute4'],
        pedal: ['pd-principal16', 'pd-octave8']
    },
    events: [
        // ============================================================
        // SECTION A - The Famous Trumpet Theme (bars 1-8)
        // The iconic dotted rhythm: da-da-DUM, da-da-DUM...
        // Time signature effectively 4/4
        // ============================================================

        // --- Bar 1: Opening D major fanfare ---
        // Trumpet melody (Great): dotted quarter D5, eighth D5, half D5
        { t: 0,   div: 'great', midi: 74, dur: 1.5 },  // D5 (dotted quarter)
        { t: 1.5, div: 'great', midi: 74, dur: 0.5 },  // D5 (eighth)
        { t: 2,   div: 'great', midi: 74, dur: 2 },     // D5 (half)
        // Choir accompaniment: D major chord
        { t: 0, div: 'choir', midi: 62, dur: 4 },  // D4
        { t: 0, div: 'choir', midi: 66, dur: 4 },  // F#4
        { t: 0, div: 'choir', midi: 69, dur: 4 },  // A4
        // Pedal
        { t: 0, div: 'pedal', midi: 50, dur: 4 },  // D3

        // --- Bar 2: D5 dotted, D5 eighth, E5 quarter, F#5 quarter ---
        { t: 4,   div: 'great', midi: 74, dur: 1.5 },  // D5 (dotted quarter)
        { t: 5.5, div: 'great', midi: 74, dur: 0.5 },  // D5 (eighth)
        { t: 6,   div: 'great', midi: 76, dur: 1 },     // E5 (quarter)
        { t: 7,   div: 'great', midi: 78, dur: 1 },     // F#5 (quarter)
        // Choir: D major
        { t: 4, div: 'choir', midi: 62, dur: 4 },  // D4
        { t: 4, div: 'choir', midi: 66, dur: 4 },  // F#4
        { t: 4, div: 'choir', midi: 69, dur: 4 },  // A4
        // Pedal
        { t: 4, div: 'pedal', midi: 50, dur: 2 },  // D3
        { t: 6, div: 'pedal', midi: 50, dur: 2 },  // D3

        // --- Bar 3: G5 dotted quarter, F#5 eighth, E5 quarter, D5 quarter ---
        { t: 8,   div: 'great', midi: 79, dur: 1.5 },  // G5 (dotted quarter)
        { t: 9.5, div: 'great', midi: 78, dur: 0.5 },  // F#5 (eighth)
        { t: 10,  div: 'great', midi: 76, dur: 1 },     // E5 (quarter)
        { t: 11,  div: 'great', midi: 74, dur: 1 },     // D5 (quarter)
        // Choir: G chord to D
        { t: 8,  div: 'choir', midi: 67, dur: 2 },  // G4
        { t: 8,  div: 'choir', midi: 71, dur: 2 },  // B4
        { t: 10, div: 'choir', midi: 62, dur: 2 },  // D4
        { t: 10, div: 'choir', midi: 66, dur: 2 },  // F#4
        // Pedal
        { t: 8,  div: 'pedal', midi: 43, dur: 2 },  // G2
        { t: 10, div: 'pedal', midi: 50, dur: 2 },  // D3

        // --- Bar 4: E5 dotted quarter, D5 eighth, E5 half (cadence on A) ---
        { t: 12,   div: 'great', midi: 76, dur: 1.5 },  // E5 (dotted quarter)
        { t: 13.5, div: 'great', midi: 74, dur: 0.5 },  // D5 (eighth)
        { t: 14,   div: 'great', midi: 76, dur: 2 },     // E5 (half - A chord)
        // Choir: A major chord
        { t: 12, div: 'choir', midi: 64, dur: 2 },  // E4
        { t: 12, div: 'choir', midi: 69, dur: 2 },  // A4
        { t: 14, div: 'choir', midi: 61, dur: 2 },  // C#4
        { t: 14, div: 'choir', midi: 64, dur: 2 },  // E4
        { t: 14, div: 'choir', midi: 69, dur: 2 },  // A4
        // Pedal
        { t: 12, div: 'pedal', midi: 45, dur: 4 },  // A2

        // --- Bar 5: Second phrase - F#5 dotted, F#5 eighth, F#5 half ---
        { t: 16,   div: 'great', midi: 78, dur: 1.5 },  // F#5 (dotted quarter)
        { t: 17.5, div: 'great', midi: 78, dur: 0.5 },  // F#5 (eighth)
        { t: 18,   div: 'great', midi: 78, dur: 2 },     // F#5 (half)
        // Choir: D major
        { t: 16, div: 'choir', midi: 62, dur: 4 },  // D4
        { t: 16, div: 'choir', midi: 66, dur: 4 },  // F#4
        { t: 16, div: 'choir', midi: 69, dur: 4 },  // A4
        // Pedal
        { t: 16, div: 'pedal', midi: 50, dur: 4 },  // D3

        // --- Bar 6: F#5 dotted, F#5 eighth, G5 quarter, A5 quarter ---
        { t: 20,   div: 'great', midi: 78, dur: 1.5 },  // F#5 (dotted quarter)
        { t: 21.5, div: 'great', midi: 78, dur: 0.5 },  // F#5 (eighth)
        { t: 22,   div: 'great', midi: 79, dur: 1 },     // G5 (quarter)
        { t: 23,   div: 'great', midi: 81, dur: 1 },     // A5 (quarter)
        // Choir: Bm to D
        { t: 20, div: 'choir', midi: 66, dur: 2 },  // F#4
        { t: 20, div: 'choir', midi: 71, dur: 2 },  // B4
        { t: 22, div: 'choir', midi: 62, dur: 2 },  // D4
        { t: 22, div: 'choir', midi: 69, dur: 2 },  // A4
        // Pedal
        { t: 20, div: 'pedal', midi: 47, dur: 2 },  // B2
        { t: 22, div: 'pedal', midi: 50, dur: 2 },  // D3

        // --- Bar 7: B5 dotted, A5 eighth, G5 quarter, F#5 quarter ---
        { t: 24,   div: 'great', midi: 83, dur: 1.5 },  // B5 (dotted quarter)
        { t: 25.5, div: 'great', midi: 81, dur: 0.5 },  // A5 (eighth)
        { t: 26,   div: 'great', midi: 79, dur: 1 },     // G5 (quarter)
        { t: 27,   div: 'great', midi: 78, dur: 1 },     // F#5 (quarter)
        // Choir: G to Em
        { t: 24, div: 'choir', midi: 67, dur: 2 },  // G4
        { t: 24, div: 'choir', midi: 71, dur: 2 },  // B4
        { t: 26, div: 'choir', midi: 64, dur: 2 },  // E4
        { t: 26, div: 'choir', midi: 67, dur: 2 },  // G4
        // Pedal
        { t: 24, div: 'pedal', midi: 43, dur: 2 },  // G2
        { t: 26, div: 'pedal', midi: 40, dur: 2 },  // E2

        // --- Bar 8: G5 dotted, F#5 eighth, E5 quarter, D5 quarter (cadence) ---
        { t: 28,   div: 'great', midi: 79, dur: 1.5 },  // G5 (dotted quarter)
        { t: 29.5, div: 'great', midi: 78, dur: 0.5 },  // F#5 (eighth)
        { t: 30,   div: 'great', midi: 76, dur: 1 },     // E5
        { t: 31,   div: 'great', midi: 74, dur: 1 },     // D5
        // Choir: A to D cadence
        { t: 28, div: 'choir', midi: 64, dur: 2 },  // E4
        { t: 28, div: 'choir', midi: 69, dur: 2 },  // A4
        { t: 30, div: 'choir', midi: 62, dur: 2 },  // D4
        { t: 30, div: 'choir', midi: 66, dur: 2 },  // F#4
        { t: 30, div: 'choir', midi: 69, dur: 2 },  // A4
        // Pedal
        { t: 28, div: 'pedal', midi: 45, dur: 2 },  // A2
        { t: 30, div: 'pedal', midi: 50, dur: 2 },  // D3

        // ============================================================
        // SECTION B - Contrasting middle section (bars 9-16)
        // Softer, more lyrical, stepwise melody
        // ============================================================

        // --- Bar 9: A4 quarter, B4 quarter, C#5 quarter, D5 quarter ---
        { t: 32, div: 'great', midi: 69, dur: 1 },  // A4
        { t: 33, div: 'great', midi: 71, dur: 1 },  // B4
        { t: 34, div: 'great', midi: 73, dur: 1 },  // C#5
        { t: 35, div: 'great', midi: 74, dur: 1 },  // D5
        // Choir: A chord
        { t: 32, div: 'choir', midi: 57, dur: 4 },  // A3
        { t: 32, div: 'choir', midi: 64, dur: 4 },  // E4
        // Pedal
        { t: 32, div: 'pedal', midi: 45, dur: 4 },  // A2

        // --- Bar 10: E5 dotted quarter, D5 eighth, C#5 half ---
        { t: 36,   div: 'great', midi: 76, dur: 1.5 },  // E5
        { t: 37.5, div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 38,   div: 'great', midi: 73, dur: 2 },     // C#5
        // Choir: A chord
        { t: 36, div: 'choir', midi: 57, dur: 4 },  // A3
        { t: 36, div: 'choir', midi: 64, dur: 4 },  // E4
        { t: 36, div: 'choir', midi: 69, dur: 4 },  // A4
        // Pedal
        { t: 36, div: 'pedal', midi: 45, dur: 4 },  // A2

        // --- Bar 11: D5 quarter, E5 quarter, F#5 quarter, G5 quarter ---
        { t: 40, div: 'great', midi: 74, dur: 1 },  // D5
        { t: 41, div: 'great', midi: 76, dur: 1 },  // E5
        { t: 42, div: 'great', midi: 78, dur: 1 },  // F#5
        { t: 43, div: 'great', midi: 79, dur: 1 },  // G5
        // Choir: D to G
        { t: 40, div: 'choir', midi: 62, dur: 2 },  // D4
        { t: 40, div: 'choir', midi: 66, dur: 2 },  // F#4
        { t: 42, div: 'choir', midi: 67, dur: 2 },  // G4
        { t: 42, div: 'choir', midi: 71, dur: 2 },  // B4
        // Pedal
        { t: 40, div: 'pedal', midi: 50, dur: 2 },  // D3
        { t: 42, div: 'pedal', midi: 43, dur: 2 },  // G2

        // --- Bar 12: A5 dotted quarter, G5 eighth, F#5 half ---
        { t: 44,   div: 'great', midi: 81, dur: 1.5 },  // A5
        { t: 45.5, div: 'great', midi: 79, dur: 0.5 },  // G5
        { t: 46,   div: 'great', midi: 78, dur: 2 },     // F#5
        // Choir: D major
        { t: 44, div: 'choir', midi: 62, dur: 4 },  // D4
        { t: 44, div: 'choir', midi: 66, dur: 4 },  // F#4
        { t: 44, div: 'choir', midi: 69, dur: 4 },  // A4
        // Pedal
        { t: 44, div: 'pedal', midi: 50, dur: 4 },  // D3

        // --- Bar 13: E5 quarter, F#5 quarter, G5 quarter, A5 quarter ---
        { t: 48, div: 'great', midi: 76, dur: 1 },  // E5
        { t: 49, div: 'great', midi: 78, dur: 1 },  // F#5
        { t: 50, div: 'great', midi: 79, dur: 1 },  // G5
        { t: 51, div: 'great', midi: 81, dur: 1 },  // A5
        // Choir: Em to A
        { t: 48, div: 'choir', midi: 64, dur: 2 },  // E4
        { t: 48, div: 'choir', midi: 67, dur: 2 },  // G4
        { t: 50, div: 'choir', midi: 64, dur: 2 },  // E4
        { t: 50, div: 'choir', midi: 69, dur: 2 },  // A4
        // Pedal
        { t: 48, div: 'pedal', midi: 40, dur: 2 },  // E2
        { t: 50, div: 'pedal', midi: 45, dur: 2 },  // A2

        // --- Bar 14: B5 quarter, A5 quarter, G5 quarter, F#5 quarter ---
        { t: 52, div: 'great', midi: 83, dur: 1 },  // B5
        { t: 53, div: 'great', midi: 81, dur: 1 },  // A5
        { t: 54, div: 'great', midi: 79, dur: 1 },  // G5
        { t: 55, div: 'great', midi: 78, dur: 1 },  // F#5
        // Choir: G
        { t: 52, div: 'choir', midi: 67, dur: 4 },  // G4
        { t: 52, div: 'choir', midi: 71, dur: 4 },  // B4
        // Pedal
        { t: 52, div: 'pedal', midi: 43, dur: 4 },  // G2

        // --- Bar 15: E5 dotted quarter, F#5 eighth, G5 quarter, A5 quarter ---
        { t: 56,   div: 'great', midi: 76, dur: 1.5 },  // E5
        { t: 57.5, div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 58,   div: 'great', midi: 79, dur: 1 },     // G5
        { t: 59,   div: 'great', midi: 81, dur: 1 },     // A5
        // Choir: A7
        { t: 56, div: 'choir', midi: 64, dur: 4 },  // E4
        { t: 56, div: 'choir', midi: 67, dur: 4 },  // G4
        { t: 56, div: 'choir', midi: 69, dur: 4 },  // A4
        // Pedal
        { t: 56, div: 'pedal', midi: 45, dur: 4 },  // A2

        // --- Bar 16: F#5 dotted quarter, E5 eighth, D5 half (back to D) ---
        { t: 60,   div: 'great', midi: 78, dur: 1.5 },  // F#5
        { t: 61.5, div: 'great', midi: 76, dur: 0.5 },  // E5
        { t: 62,   div: 'great', midi: 74, dur: 2 },     // D5
        // Choir: D major
        { t: 60, div: 'choir', midi: 62, dur: 4 },  // D4
        { t: 60, div: 'choir', midi: 66, dur: 4 },  // F#4
        { t: 60, div: 'choir', midi: 69, dur: 4 },  // A4
        // Pedal
        { t: 60, div: 'pedal', midi: 50, dur: 4 },  // D3

        // ============================================================
        // SECTION A' - Return of the Trumpet Theme (bars 17-24)
        // Repeat of the opening with slight ornamentation
        // ============================================================

        // --- Bar 17: D5 dotted, D5 eighth, D5 half (same as bar 1) ---
        { t: 64,   div: 'great', midi: 74, dur: 1.5 },
        { t: 65.5, div: 'great', midi: 74, dur: 0.5 },
        { t: 66,   div: 'great', midi: 74, dur: 2 },
        { t: 64, div: 'choir', midi: 62, dur: 4 },
        { t: 64, div: 'choir', midi: 66, dur: 4 },
        { t: 64, div: 'choir', midi: 69, dur: 4 },
        { t: 64, div: 'pedal', midi: 50, dur: 4 },

        // --- Bar 18: D5 dotted, D5 eighth, E5, F#5 ---
        { t: 68,   div: 'great', midi: 74, dur: 1.5 },
        { t: 69.5, div: 'great', midi: 74, dur: 0.5 },
        { t: 70,   div: 'great', midi: 76, dur: 1 },
        { t: 71,   div: 'great', midi: 78, dur: 1 },
        { t: 68, div: 'choir', midi: 62, dur: 4 },
        { t: 68, div: 'choir', midi: 66, dur: 4 },
        { t: 68, div: 'choir', midi: 69, dur: 4 },
        { t: 68, div: 'pedal', midi: 50, dur: 2 },
        { t: 70, div: 'pedal', midi: 50, dur: 2 },

        // --- Bar 19: G5 dotted, F#5 eighth, E5, D5 ---
        { t: 72,   div: 'great', midi: 79, dur: 1.5 },
        { t: 73.5, div: 'great', midi: 78, dur: 0.5 },
        { t: 74,   div: 'great', midi: 76, dur: 1 },
        { t: 75,   div: 'great', midi: 74, dur: 1 },
        { t: 72, div: 'choir', midi: 67, dur: 2 },
        { t: 72, div: 'choir', midi: 71, dur: 2 },
        { t: 74, div: 'choir', midi: 62, dur: 2 },
        { t: 74, div: 'choir', midi: 66, dur: 2 },
        { t: 72, div: 'pedal', midi: 43, dur: 2 },
        { t: 74, div: 'pedal', midi: 50, dur: 2 },

        // --- Bar 20: E5 dotted, D5 eighth, C#5, D5 quarter ---
        { t: 76,   div: 'great', midi: 76, dur: 1.5 },
        { t: 77.5, div: 'great', midi: 74, dur: 0.5 },
        { t: 78,   div: 'great', midi: 73, dur: 1 },
        { t: 79,   div: 'great', midi: 74, dur: 1 },
        { t: 76, div: 'choir', midi: 64, dur: 2 },
        { t: 76, div: 'choir', midi: 69, dur: 2 },
        { t: 78, div: 'choir', midi: 62, dur: 2 },
        { t: 78, div: 'choir', midi: 66, dur: 2 },
        { t: 76, div: 'pedal', midi: 45, dur: 2 },
        { t: 78, div: 'pedal', midi: 50, dur: 2 },

        // --- Bar 21: F#5 dotted, F#5 eighth, F#5 half ---
        { t: 80,   div: 'great', midi: 78, dur: 1.5 },
        { t: 81.5, div: 'great', midi: 78, dur: 0.5 },
        { t: 82,   div: 'great', midi: 78, dur: 2 },
        { t: 80, div: 'choir', midi: 62, dur: 4 },
        { t: 80, div: 'choir', midi: 66, dur: 4 },
        { t: 80, div: 'choir', midi: 69, dur: 4 },
        { t: 80, div: 'pedal', midi: 50, dur: 4 },

        // --- Bar 22: F#5 dotted, F#5 eighth, G5, A5 ---
        { t: 84,   div: 'great', midi: 78, dur: 1.5 },
        { t: 85.5, div: 'great', midi: 78, dur: 0.5 },
        { t: 86,   div: 'great', midi: 79, dur: 1 },
        { t: 87,   div: 'great', midi: 81, dur: 1 },
        { t: 84, div: 'choir', midi: 66, dur: 2 },
        { t: 84, div: 'choir', midi: 71, dur: 2 },
        { t: 86, div: 'choir', midi: 62, dur: 2 },
        { t: 86, div: 'choir', midi: 69, dur: 2 },
        { t: 84, div: 'pedal', midi: 47, dur: 2 },
        { t: 86, div: 'pedal', midi: 50, dur: 2 },

        // --- Bar 23: B5 dotted, A5 eighth, G5, F#5 ---
        { t: 88,   div: 'great', midi: 83, dur: 1.5 },
        { t: 89.5, div: 'great', midi: 81, dur: 0.5 },
        { t: 90,   div: 'great', midi: 79, dur: 1 },
        { t: 91,   div: 'great', midi: 78, dur: 1 },
        { t: 88, div: 'choir', midi: 67, dur: 2 },
        { t: 88, div: 'choir', midi: 71, dur: 2 },
        { t: 90, div: 'choir', midi: 64, dur: 2 },
        { t: 90, div: 'choir', midi: 67, dur: 2 },
        { t: 88, div: 'pedal', midi: 43, dur: 2 },
        { t: 90, div: 'pedal', midi: 40, dur: 2 },

        // --- Bar 24: G5 half, F#5 quarter, E5 quarter ---
        { t: 92,  div: 'great', midi: 79, dur: 2 },     // G5 half
        { t: 94,  div: 'great', midi: 78, dur: 1 },     // F#5
        { t: 95,  div: 'great', midi: 76, dur: 1 },     // E5
        { t: 92, div: 'choir', midi: 64, dur: 2 },
        { t: 92, div: 'choir', midi: 69, dur: 2 },
        { t: 94, div: 'choir', midi: 64, dur: 2 },
        { t: 94, div: 'choir', midi: 67, dur: 2 },
        { t: 92, div: 'pedal', midi: 45, dur: 4 },

        // ============================================================
        // SECTION C - Third episode (bars 25-32)
        // Brighter, more energetic with running passages
        // ============================================================

        // --- Bar 25: D5 eighth, E5 eighth, F#5 eighth, G5 eighth, A5 half ---
        { t: 96,   div: 'great', midi: 74, dur: 0.5 },  // D5
        { t: 96.5, div: 'great', midi: 76, dur: 0.5 },  // E5
        { t: 97,   div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 97.5, div: 'great', midi: 79, dur: 0.5 },  // G5
        { t: 98,   div: 'great', midi: 81, dur: 2 },     // A5 half
        { t: 96, div: 'choir', midi: 62, dur: 4 },
        { t: 96, div: 'choir', midi: 66, dur: 4 },
        { t: 96, div: 'choir', midi: 69, dur: 4 },
        { t: 96, div: 'pedal', midi: 50, dur: 4 },

        // --- Bar 26: A5 eighth, G5 eighth, F#5 eighth, E5 eighth, D5 half ---
        { t: 100,   div: 'great', midi: 81, dur: 0.5 },  // A5
        { t: 100.5, div: 'great', midi: 79, dur: 0.5 },  // G5
        { t: 101,   div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 101.5, div: 'great', midi: 76, dur: 0.5 },  // E5
        { t: 102,   div: 'great', midi: 74, dur: 2 },     // D5 half
        { t: 100, div: 'choir', midi: 62, dur: 4 },
        { t: 100, div: 'choir', midi: 66, dur: 4 },
        { t: 100, div: 'pedal', midi: 50, dur: 4 },

        // --- Bar 27: E5 eighth, F#5 eighth, G5 eighth, A5 eighth, B5 half ---
        { t: 104,   div: 'great', midi: 76, dur: 0.5 },  // E5
        { t: 104.5, div: 'great', midi: 78, dur: 0.5 },  // F#5
        { t: 105,   div: 'great', midi: 79, dur: 0.5 },  // G5
        { t: 105.5, div: 'great', midi: 81, dur: 0.5 },  // A5
        { t: 106,   div: 'great', midi: 83, dur: 2 },     // B5 half
        { t: 104, div: 'choir', midi: 64, dur: 2 },
        { t: 104, div: 'choir', midi: 67, dur: 2 },
        { t: 106, div: 'choir', midi: 67, dur: 2 },
        { t: 106, div: 'choir', midi: 71, dur: 2 },
        { t: 104, div: 'pedal', midi: 40, dur: 2 },
        { t: 106, div: 'pedal', midi: 43, dur: 2 },

        // --- Bar 28: B5 eighth, A5 eighth, G5 eighth, F#5 eighth, E5 half ---
        { t: 108,   div: 'great', midi: 83, dur: 0.5 },
        { t: 108.5, div: 'great', midi: 81, dur: 0.5 },
        { t: 109,   div: 'great', midi: 79, dur: 0.5 },
        { t: 109.5, div: 'great', midi: 78, dur: 0.5 },
        { t: 110,   div: 'great', midi: 76, dur: 2 },
        { t: 108, div: 'choir', midi: 64, dur: 4 },
        { t: 108, div: 'choir', midi: 69, dur: 4 },
        { t: 108, div: 'pedal', midi: 45, dur: 4 },

        // --- Bar 29: F#5 quarter, G5 quarter, A5 dotted quarter, G5 eighth ---
        { t: 112,   div: 'great', midi: 78, dur: 1 },
        { t: 113,   div: 'great', midi: 79, dur: 1 },
        { t: 114,   div: 'great', midi: 81, dur: 1.5 },
        { t: 115.5, div: 'great', midi: 79, dur: 0.5 },
        { t: 112, div: 'choir', midi: 62, dur: 2 },
        { t: 112, div: 'choir', midi: 66, dur: 2 },
        { t: 114, div: 'choir', midi: 62, dur: 2 },
        { t: 114, div: 'choir', midi: 69, dur: 2 },
        { t: 112, div: 'pedal', midi: 50, dur: 2 },
        { t: 114, div: 'pedal', midi: 50, dur: 2 },

        // --- Bar 30: F#5 quarter, E5 quarter, D5 half ---
        { t: 116, div: 'great', midi: 78, dur: 1 },
        { t: 117, div: 'great', midi: 76, dur: 1 },
        { t: 118, div: 'great', midi: 74, dur: 2 },
        { t: 116, div: 'choir', midi: 62, dur: 4 },
        { t: 116, div: 'choir', midi: 66, dur: 4 },
        { t: 116, div: 'choir', midi: 69, dur: 4 },
        { t: 116, div: 'pedal', midi: 50, dur: 4 },

        // --- Bar 31: E5 dotted quarter, F#5 eighth, G5 quarter, A5 quarter ---
        { t: 120,   div: 'great', midi: 76, dur: 1.5 },
        { t: 121.5, div: 'great', midi: 78, dur: 0.5 },
        { t: 122,   div: 'great', midi: 79, dur: 1 },
        { t: 123,   div: 'great', midi: 81, dur: 1 },
        { t: 120, div: 'choir', midi: 64, dur: 4 },
        { t: 120, div: 'choir', midi: 67, dur: 4 },
        { t: 120, div: 'choir', midi: 69, dur: 4 },
        { t: 120, div: 'pedal', midi: 45, dur: 4 },

        // --- Bar 32: F#5 dotted quarter, E5 eighth, D5 half (resolves to D) ---
        { t: 124,   div: 'great', midi: 78, dur: 1.5 },
        { t: 125.5, div: 'great', midi: 76, dur: 0.5 },
        { t: 126,   div: 'great', midi: 74, dur: 2 },
        { t: 124, div: 'choir', midi: 62, dur: 4 },
        { t: 124, div: 'choir', midi: 66, dur: 4 },
        { t: 124, div: 'choir', midi: 69, dur: 4 },
        { t: 124, div: 'pedal', midi: 50, dur: 4 },

        // ============================================================
        // SECTION A'' - Final return of trumpet theme (bars 33-40)
        // Grandest statement with fuller accompaniment
        // ============================================================

        // --- Bar 33: D5 dotted, D5 eighth, D5 half ---
        { t: 128,   div: 'great', midi: 74, dur: 1.5 },
        { t: 129.5, div: 'great', midi: 74, dur: 0.5 },
        { t: 130,   div: 'great', midi: 74, dur: 2 },
        { t: 128, div: 'choir', midi: 62, dur: 4 },
        { t: 128, div: 'choir', midi: 66, dur: 4 },
        { t: 128, div: 'choir', midi: 69, dur: 4 },
        { t: 128, div: 'pedal', midi: 50, dur: 4 },

        // --- Bar 34: D5 dotted, D5 eighth, E5, F#5 ---
        { t: 132,   div: 'great', midi: 74, dur: 1.5 },
        { t: 133.5, div: 'great', midi: 74, dur: 0.5 },
        { t: 134,   div: 'great', midi: 76, dur: 1 },
        { t: 135,   div: 'great', midi: 78, dur: 1 },
        { t: 132, div: 'choir', midi: 62, dur: 4 },
        { t: 132, div: 'choir', midi: 66, dur: 4 },
        { t: 132, div: 'choir', midi: 69, dur: 4 },
        { t: 132, div: 'pedal', midi: 50, dur: 4 },

        // --- Bar 35: G5 dotted, F#5 eighth, E5, D5 ---
        { t: 136,   div: 'great', midi: 79, dur: 1.5 },
        { t: 137.5, div: 'great', midi: 78, dur: 0.5 },
        { t: 138,   div: 'great', midi: 76, dur: 1 },
        { t: 139,   div: 'great', midi: 74, dur: 1 },
        { t: 136, div: 'choir', midi: 67, dur: 2 },
        { t: 136, div: 'choir', midi: 71, dur: 2 },
        { t: 138, div: 'choir', midi: 62, dur: 2 },
        { t: 138, div: 'choir', midi: 66, dur: 2 },
        { t: 136, div: 'pedal', midi: 43, dur: 2 },
        { t: 138, div: 'pedal', midi: 50, dur: 2 },

        // --- Bar 36: E5 dotted, D5 eighth, E5 half ---
        { t: 140,   div: 'great', midi: 76, dur: 1.5 },
        { t: 141.5, div: 'great', midi: 74, dur: 0.5 },
        { t: 142,   div: 'great', midi: 76, dur: 2 },
        { t: 140, div: 'choir', midi: 64, dur: 2 },
        { t: 140, div: 'choir', midi: 69, dur: 2 },
        { t: 142, div: 'choir', midi: 61, dur: 2 },
        { t: 142, div: 'choir', midi: 64, dur: 2 },
        { t: 142, div: 'choir', midi: 69, dur: 2 },
        { t: 140, div: 'pedal', midi: 45, dur: 4 },

        // --- Bar 37: F#5 dotted, F#5 eighth, F#5 half ---
        { t: 144,   div: 'great', midi: 78, dur: 1.5 },
        { t: 145.5, div: 'great', midi: 78, dur: 0.5 },
        { t: 146,   div: 'great', midi: 78, dur: 2 },
        { t: 144, div: 'choir', midi: 62, dur: 4 },
        { t: 144, div: 'choir', midi: 66, dur: 4 },
        { t: 144, div: 'choir', midi: 69, dur: 4 },
        { t: 144, div: 'pedal', midi: 50, dur: 4 },

        // --- Bar 38: G5 dotted, F#5 eighth, G5, A5 ---
        { t: 148,   div: 'great', midi: 79, dur: 1.5 },
        { t: 149.5, div: 'great', midi: 78, dur: 0.5 },
        { t: 150,   div: 'great', midi: 79, dur: 1 },
        { t: 151,   div: 'great', midi: 81, dur: 1 },
        { t: 148, div: 'choir', midi: 67, dur: 2 },
        { t: 148, div: 'choir', midi: 71, dur: 2 },
        { t: 150, div: 'choir', midi: 62, dur: 2 },
        { t: 150, div: 'choir', midi: 69, dur: 2 },
        { t: 148, div: 'pedal', midi: 43, dur: 2 },
        { t: 150, div: 'pedal', midi: 50, dur: 2 },

        // --- Bar 39: B5 dotted, A5 eighth, G5 quarter, F#5 quarter ---
        { t: 152,   div: 'great', midi: 83, dur: 1.5 },
        { t: 153.5, div: 'great', midi: 81, dur: 0.5 },
        { t: 154,   div: 'great', midi: 79, dur: 1 },
        { t: 155,   div: 'great', midi: 78, dur: 1 },
        { t: 152, div: 'choir', midi: 67, dur: 4 },
        { t: 152, div: 'choir', midi: 71, dur: 4 },
        { t: 152, div: 'pedal', midi: 43, dur: 4 },

        // --- Bar 40: Final cadence - A5 quarter, G5 quarter, F#5 quarter, D5 quarter ---
        { t: 156,  div: 'great', midi: 81, dur: 1 },   // A5
        { t: 157,  div: 'great', midi: 79, dur: 1 },   // G5
        { t: 158,  div: 'great', midi: 78, dur: 1 },   // F#5
        { t: 159,  div: 'great', midi: 74, dur: 1 },   // D5
        { t: 156, div: 'choir', midi: 64, dur: 2 },
        { t: 156, div: 'choir', midi: 69, dur: 2 },
        { t: 158, div: 'choir', midi: 62, dur: 2 },
        { t: 158, div: 'choir', midi: 66, dur: 2 },
        { t: 156, div: 'pedal', midi: 45, dur: 2 },
        { t: 158, div: 'pedal', midi: 50, dur: 2 },

        // --- Final D major chord (bar 41) ---
        { t: 160, div: 'great', midi: 74, dur: 8 },   // D5
        { t: 160, div: 'choir', midi: 62, dur: 8 },   // D4
        { t: 160, div: 'choir', midi: 66, dur: 8 },   // F#4
        { t: 160, div: 'choir', midi: 69, dur: 8 },   // A4
        { t: 160, div: 'pedal', midi: 50, dur: 8 },   // D3
    ]
};
