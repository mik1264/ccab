// ============================================================
// Bach - Prelude in C Major, BWV 846
// From The Well-Tempered Clavier, Book 1
// ============================================================
// Structure: 35 bars in 4/4, each bar = arpeggiated chord pattern
// Each bar has 5 voices: bass (pedal, whole note), inner voice (choir, held),
// and 3 upper voices arpeggiated as sixteenth notes on choir.
// Pattern per half-bar (8 sixteenth notes):
//   [bass, inner, v3, v4, v5, v3, v4, v5]
// Bass and inner are held; upper 3 repeat as sixteenths.
// Tempo: quarter = 56 BPM (stately organ tempo)

const PIECE_PRELUDE_C = {
    title: "Prelude in C Major",
    composer: "J.S. Bach",
    catalog: "BWV 846",
    tempo: 56,
    registration: {
        great: [],
        swell: [],
        choir: ['ch-gedeckt8', 'ch-dulciana8', 'ch-rohrflute4'],
        pedal: ['pd-subbass16']
    },
    events: []
};

(function() {
    const events = PIECE_PRELUDE_C.events;
    const S = 0.25; // sixteenth note in quarter-beat units

    function addBar(barNum, v1, v2, v3, v4, v5) {
        const t0 = (barNum - 1) * 4;
        // v1: pedal bass, whole note
        events.push({ t: t0, div: 'pedal', midi: v1, dur: 4 });
        // v2: choir inner voice, enters on 2nd sixteenth, held to end of bar
        events.push({ t: t0 + S, div: 'choir', midi: v2, dur: 4 - S });
        // Upper voices: arpeggiated sixteenths [v3, v4, v5, v3, v4, v5] x 2 halves
        for (var half = 0; half < 2; half++) {
            var base = t0 + half * 2;
            var pattern = [v3, v4, v5, v3, v4, v5];
            var offsets = [2*S, 3*S, 4*S, 5*S, 6*S, 7*S];
            for (var i = 0; i < 6; i++) {
                events.push({ t: base + offsets[i], div: 'choir', midi: pattern[i], dur: S * 0.9 });
            }
        }
    }

    // MIDI reference:
    // C2=36 D2=38 E2=40 F2=41 F#2=42 G2=43 Ab2=44 A2=45 Bb2=46 B2=47
    // C3=48 D3=50 Eb3=51 E3=52 F3=53 F#3=54 G3=55 Ab3=56 A3=57 Bb3=58 B3=59
    // C4=60 D4=62 Eb4=63 E4=64 F4=65 F#4=66 G4=67 Ab4=68 A4=69 B4=71 C5=72

    // BWV 846 - All 35 bars
    // addBar(barNum, bass, inner, v3, v4, v5)
    addBar(1,  48, 52, 55, 60, 64);  // C       : C3 E3 G3 C4 E4
    addBar(2,  48, 50, 57, 62, 65);  // Dm7/C   : C3 D3 A3 D4 F4
    addBar(3,  47, 50, 55, 62, 65);  // G7/B    : B2 D3 G3 D4 F4
    addBar(4,  48, 52, 55, 60, 64);  // C       : C3 E3 G3 C4 E4
    addBar(5,  48, 52, 57, 60, 64);  // Am7/C   : C3 E3 A3 C4 E4
    addBar(6,  48, 50, 57, 62, 66);  // D7/C    : C3 D3 A3 D4 F#4
    addBar(7,  47, 50, 55, 62, 67);  // G/B     : B2 D3 G3 D4 G4
    addBar(8,  47, 48, 52, 60, 64);  // Cmaj7/B : B2 C3 E3 C4 E4
    addBar(9,  45, 48, 52, 60, 64);  // Am7     : A2 C3 E3 C4 E4
    addBar(10, 45, 47, 50, 59, 62);  // D9/A    : A2 B2 D3 B3 D4
    addBar(11, 43, 47, 50, 59, 62);  // G       : G2 B2 D3 B3 D4
    addBar(12, 43, 47, 48, 55, 60);  // G7      : G2 B2 C3 G3 C4
    addBar(13, 41, 45, 48, 57, 60);  // Fmaj7   : F2 A2 C3 A3 C4
    addBar(14, 41, 44, 48, 56, 60);  // Fm6/Ab  : F2 Ab2 C3 Ab3 C4
    addBar(15, 38, 47, 55, 59, 65);  // G7/D    : D2 B2 G3 B3 F4
    addBar(16, 43, 47, 55, 59, 65);  // G7      : G2 B2 G3 B3 F4
    addBar(17, 43, 48, 52, 60, 64);  // C/G     : G2 C3 E3 C4 E4
    addBar(18, 43, 48, 51, 60, 63);  // Cm/G    : G2 C3 Eb3 C4 Eb4
    addBar(19, 42, 45, 50, 57, 62);  // D/F#    : F#2 A2 D3 A3 D4
    addBar(20, 43, 47, 50, 55, 62);  // G       : G2 B2 D3 G3 D4
    addBar(21, 40, 44, 48, 56, 64);  // Edim    : E2 Ab2 C3 Ab3 E4
    addBar(22, 41, 44, 47, 56, 59);  // dim7    : F2 Ab2 B2 Ab3 B3
    addBar(23, 41, 44, 48, 56, 60);  // dim7    : F2 Ab2 C3 Ab3 C4
    addBar(24, 38, 45, 48, 57, 60);  // Dm7/D   : D2 A2 C3 A3 C4
    addBar(25, 43, 47, 55, 59, 65);  // G7      : G2 B2 G3 B3 F4
    addBar(26, 43, 48, 55, 60, 64);  // C/G     : G2 C3 G3 C4 E4
    addBar(27, 43, 48, 53, 57, 64);  // F/G     : G2 C3 F3 A3 E4
    addBar(28, 43, 47, 53, 57, 62);  // G7sus   : G2 B2 F3 A3 D4
    addBar(29, 43, 47, 55, 59, 65);  // G7      : G2 B2 G3 B3 F4
    addBar(30, 43, 47, 55, 60, 64);  // C/G     : G2 B2 G3 C4 E4
    addBar(31, 43, 48, 55, 60, 67);  // C/G     : G2 C3 G3 C4 G4
    addBar(32, 43, 47, 55, 59, 65);  // G7      : G2 B2 G3 B3 F4
    addBar(33, 36, 48, 55, 60, 64);  // C       : C2 C3 G3 C4 E4
    addBar(34, 36, 48, 55, 60, 64);  // C       : C2 C3 G3 C4 E4

    // Bar 35: final sustained chord (no arpeggio pattern)
    var t35 = 34 * 4;
    events.push({ t: t35, div: 'pedal', midi: 36, dur: 8 });  // C2
    events.push({ t: t35, div: 'pedal', midi: 48, dur: 8 });  // C3
    events.push({ t: t35, div: 'choir', midi: 52, dur: 8 });  // E3
    events.push({ t: t35, div: 'choir', midi: 55, dur: 8 });  // G3
    events.push({ t: t35, div: 'choir', midi: 60, dur: 8 });  // C4
    events.push({ t: t35, div: 'choir', midi: 64, dur: 8 });  // E4
})();


// ============================================================
// Bach - Air on the G String, BWV 1068
// From Orchestral Suite No. 3 in D major
// Transposed to C major for organ
// ============================================================
// Melody (Violin I) on Swell with string stops + tremulant
// Inner voices (Violin II + Viola) on Choir
// Continuo bass on Pedal
// Tempo: quarter = 40 BPM (Largo)

const PIECE_AIR_G_STRING = {
    title: "Air on the G String",
    composer: "J.S. Bach",
    catalog: "BWV 1068",
    tempo: 40,
    registration: {
        great: [],
        swell: ['sw-gedeckt8', 'sw-salicional8', 'sw-voxceleste8', 'sw-tremulant'],
        choir: ['ch-dulciana8'],
        pedal: ['pd-subbass16', 'pd-subbass32']
    },
    events: []
};

(function() {
    var events = PIECE_AIR_G_STRING.events;

    function n(t, div, midi, dur) {
        events.push({ t: t, div: div, midi: midi, dur: dur });
    }

    // Transposed to C major (down whole step from D major original)
    // MIDI: C2=36 D2=38 E2=40 F2=41 G2=43 A2=45 B2=47
    //       C3=48 D3=50 E3=52 F3=53 G3=55 A3=57 B3=59
    //       C4=60 D4=62 E4=64 F4=65 G4=67 A4=69 B4=71 C5=72

    // ====== BAR 1 ======
    // Melody
    n(0, 'swell', 64, 1.5);       // E4 dotted quarter
    n(1.5, 'swell', 62, 0.5);     // D4 eighth
    n(2, 'swell', 60, 1);         // C4 quarter
    n(3, 'swell', 59, 1);         // B3 quarter
    // Bass (walking)
    n(0, 'pedal', 48, 1);         // C3
    n(1, 'pedal', 47, 1);         // B2
    n(2, 'pedal', 45, 1);         // A2
    n(3, 'pedal', 43, 1);         // G2
    // Inner voices (eighth-note motion)
    n(0, 'choir', 55, 0.5);       // G3
    n(0.5, 'choir', 55, 0.5);     // G3
    n(1, 'choir', 55, 0.5);       // G3
    n(1.5, 'choir', 55, 0.5);     // G3
    n(2, 'choir', 52, 0.5);       // E3
    n(2.5, 'choir', 52, 0.5);     // E3
    n(3, 'choir', 50, 0.5);       // D3
    n(3.5, 'choir', 55, 0.5);     // G3

    // ====== BAR 2 ======
    n(4, 'swell', 57, 1.5);       // A3 dotted quarter
    n(5.5, 'swell', 59, 0.5);     // B3 eighth
    n(6, 'swell', 60, 2);         // C4 half
    // Bass
    n(4, 'pedal', 41, 1);         // F2
    n(5, 'pedal', 40, 1);         // E2
    n(6, 'pedal', 41, 1);         // F2
    n(7, 'pedal', 43, 1);         // G2
    // Inner
    n(4, 'choir', 53, 0.5);       // F3
    n(4.5, 'choir', 52, 0.5);     // E3
    n(5, 'choir', 52, 0.5);       // E3
    n(5.5, 'choir', 55, 0.5);     // G3
    n(6, 'choir', 53, 0.5);       // F3
    n(6.5, 'choir', 57, 0.5);     // A3
    n(7, 'choir', 55, 0.5);       // G3
    n(7.5, 'choir', 55, 0.5);     // G3

    // ====== BAR 3 ======
    n(8, 'swell', 64, 1);         // E4 quarter
    n(9, 'swell', 65, 0.5);       // F4 eighth
    n(9.5, 'swell', 64, 0.5);     // E4 eighth
    n(10, 'swell', 62, 1);        // D4 quarter
    n(11, 'swell', 60, 1);        // C4 quarter
    // Bass
    n(8, 'pedal', 45, 1);         // A2
    n(9, 'pedal', 43, 1);         // G2
    n(10, 'pedal', 41, 1);        // F2
    n(11, 'pedal', 40, 1);        // E2
    // Inner
    n(8, 'choir', 57, 0.5);       // A3
    n(8.5, 'choir', 60, 0.5);     // C4
    n(9, 'choir', 59, 0.5);       // B3
    n(9.5, 'choir', 60, 0.5);     // C4
    n(10, 'choir', 57, 0.5);      // A3
    n(10.5, 'choir', 57, 0.5);    // A3
    n(11, 'choir', 55, 0.5);      // G3
    n(11.5, 'choir', 55, 0.5);    // G3

    // ====== BAR 4 ======
    n(12, 'swell', 62, 2);        // D4 half
    n(14, 'swell', 60, 1);        // C4 quarter
    n(15, 'swell', 59, 1);        // B3 quarter
    // Bass
    n(12, 'pedal', 41, 1);        // F2
    n(13, 'pedal', 43, 1);        // G2
    n(14, 'pedal', 45, 1);        // A2
    n(15, 'pedal', 43, 1);        // G2
    // Inner
    n(12, 'choir', 57, 0.5);      // A3
    n(12.5, 'choir', 55, 0.5);    // G3
    n(13, 'choir', 55, 0.5);      // G3
    n(13.5, 'choir', 55, 0.5);    // G3
    n(14, 'choir', 52, 0.5);      // E3
    n(14.5, 'choir', 57, 0.5);    // A3
    n(15, 'choir', 55, 1);        // G3 quarter

    // ====== BAR 5 (half cadence resolution) ======
    n(16, 'swell', 60, 4);        // C4 whole
    // Bass
    n(16, 'pedal', 48, 2);        // C3 half
    n(18, 'pedal', 47, 1);        // B2 quarter
    n(19, 'pedal', 48, 1);        // C3 quarter
    // Inner
    n(16, 'choir', 55, 0.5);      // G3
    n(16.5, 'choir', 52, 0.5);    // E3
    n(17, 'choir', 55, 0.5);      // G3
    n(17.5, 'choir', 55, 0.5);    // G3
    n(18, 'choir', 55, 0.5);      // G3
    n(18.5, 'choir', 52, 0.5);    // E3
    n(19, 'choir', 52, 0.5);      // E3
    n(19.5, 'choir', 55, 0.5);    // G3

    // ====== BAR 6 (second phrase) ======
    n(20, 'swell', 64, 1.5);      // E4 dotted quarter
    n(21.5, 'swell', 65, 0.5);    // F4 eighth
    n(22, 'swell', 67, 1);        // G4 quarter
    n(23, 'swell', 69, 1);        // A4 quarter
    // Bass
    n(20, 'pedal', 45, 1);        // A2
    n(21, 'pedal', 43, 1);        // G2
    n(22, 'pedal', 41, 1);        // F2
    n(23, 'pedal', 40, 1);        // E2
    // Inner
    n(20, 'choir', 57, 0.5);      // A3
    n(20.5, 'choir', 60, 0.5);    // C4
    n(21, 'choir', 59, 0.5);      // B3
    n(21.5, 'choir', 57, 0.5);    // A3
    n(22, 'choir', 57, 0.5);      // A3
    n(22.5, 'choir', 60, 0.5);    // C4
    n(23, 'choir', 60, 0.5);      // C4
    n(23.5, 'choir', 57, 0.5);    // A3

    // ====== BAR 7 ======
    n(24, 'swell', 67, 1);        // G4 quarter
    n(25, 'swell', 65, 0.5);      // F4 eighth
    n(25.5, 'swell', 64, 0.5);    // E4 eighth
    n(26, 'swell', 62, 1);        // D4 quarter
    n(27, 'swell', 60, 1);        // C4 quarter
    // Bass
    n(24, 'pedal', 41, 1);        // F2
    n(25, 'pedal', 43, 1);        // G2
    n(26, 'pedal', 45, 1);        // A2
    n(27, 'pedal', 47, 1);        // B2
    // Inner
    n(24, 'choir', 57, 0.5);      // A3
    n(24.5, 'choir', 53, 0.5);    // F3
    n(25, 'choir', 55, 0.5);      // G3
    n(25.5, 'choir', 55, 0.5);    // G3
    n(26, 'choir', 57, 0.5);      // A3
    n(26.5, 'choir', 55, 0.5);    // G3
    n(27, 'choir', 55, 0.5);      // G3
    n(27.5, 'choir', 55, 0.5);    // G3

    // ====== BAR 8 ======
    n(28, 'swell', 59, 1.5);      // B3 dotted quarter
    n(29.5, 'swell', 60, 0.5);    // C4 eighth
    n(30, 'swell', 62, 2);        // D4 half
    // Bass
    n(28, 'pedal', 48, 1);        // C3
    n(29, 'pedal', 45, 1);        // A2
    n(30, 'pedal', 41, 1);        // F2
    n(31, 'pedal', 43, 1);        // G2
    // Inner
    n(28, 'choir', 55, 0.5);      // G3
    n(28.5, 'choir', 52, 0.5);    // E3
    n(29, 'choir', 52, 0.5);      // E3
    n(29.5, 'choir', 57, 0.5);    // A3
    n(30, 'choir', 57, 0.5);      // A3
    n(30.5, 'choir', 53, 0.5);    // F3
    n(31, 'choir', 55, 1);        // G3 quarter

    // ====== BAR 9 ======
    n(32, 'swell', 60, 3);        // C4 dotted half
    n(35, 'swell', 59, 0.5);      // B3 eighth (passing)
    n(35.5, 'swell', 60, 0.5);    // C4 eighth
    // Bass
    n(32, 'pedal', 48, 2);        // C3 half
    n(34, 'pedal', 43, 1);        // G2
    n(35, 'pedal', 48, 1);        // C3
    // Inner
    n(32, 'choir', 52, 0.5);      // E3
    n(32.5, 'choir', 55, 0.5);    // G3
    n(33, 'choir', 55, 0.5);      // G3
    n(33.5, 'choir', 52, 0.5);    // E3
    n(34, 'choir', 50, 0.5);      // D3
    n(34.5, 'choir', 55, 0.5);    // G3
    n(35, 'choir', 55, 0.5);      // G3
    n(35.5, 'choir', 52, 0.5);    // E3

    // ====== BAR 10 ======
    n(36, 'swell', 64, 1);        // E4 quarter
    n(37, 'swell', 67, 1);        // G4 quarter
    n(38, 'swell', 65, 1);        // F4 quarter
    n(39, 'swell', 64, 1);        // E4 quarter
    // Bass
    n(36, 'pedal', 45, 1);        // A2
    n(37, 'pedal', 40, 1);        // E2
    n(38, 'pedal', 41, 1);        // F2
    n(39, 'pedal', 43, 1);        // G2
    // Inner
    n(36, 'choir', 57, 0.5);      // A3
    n(36.5, 'choir', 60, 0.5);    // C4
    n(37, 'choir', 59, 0.5);      // B3
    n(37.5, 'choir', 59, 0.5);    // B3
    n(38, 'choir', 57, 0.5);      // A3
    n(38.5, 'choir', 60, 0.5);    // C4
    n(39, 'choir', 60, 0.5);      // C4
    n(39.5, 'choir', 55, 0.5);    // G3

    // ====== BAR 11 ======
    n(40, 'swell', 62, 1.5);      // D4 dotted quarter
    n(41.5, 'swell', 64, 0.5);    // E4 eighth
    n(42, 'swell', 65, 1);        // F4 quarter
    n(43, 'swell', 64, 1);        // E4 quarter
    // Bass
    n(40, 'pedal', 41, 1);        // F2
    n(41, 'pedal', 40, 1);        // E2
    n(42, 'pedal', 38, 1);        // D2
    n(43, 'pedal', 36, 1);        // C2
    // Inner
    n(40, 'choir', 57, 0.5);      // A3
    n(40.5, 'choir', 53, 0.5);    // F3
    n(41, 'choir', 55, 0.5);      // G3
    n(41.5, 'choir', 55, 0.5);    // G3
    n(42, 'choir', 57, 0.5);      // A3
    n(42.5, 'choir', 55, 0.5);    // G3
    n(43, 'choir', 55, 0.5);      // G3
    n(43.5, 'choir', 52, 0.5);    // E3

    // ====== BAR 12 ======
    n(44, 'swell', 62, 2);        // D4 half
    n(46, 'swell', 60, 0.5);      // C4 eighth
    n(46.5, 'swell', 59, 0.5);    // B3 eighth
    n(47, 'swell', 60, 1);        // C4 quarter
    // Bass
    n(44, 'pedal', 38, 1);        // D2
    n(45, 'pedal', 36, 1);        // C2
    n(46, 'pedal', 41, 1);        // F2
    n(47, 'pedal', 43, 1);        // G2
    // Inner
    n(44, 'choir', 53, 0.5);      // F3
    n(44.5, 'choir', 50, 0.5);    // D3
    n(45, 'choir', 52, 0.5);      // E3
    n(45.5, 'choir', 52, 0.5);    // E3
    n(46, 'choir', 53, 0.5);      // F3
    n(46.5, 'choir', 55, 0.5);    // G3
    n(47, 'choir', 55, 0.5);      // G3
    n(47.5, 'choir', 55, 0.5);    // G3

    // ====== BAR 13 (final resolution) ======
    n(48, 'swell', 60, 4);        // C4 whole
    n(48, 'swell', 64, 4);        // E4 whole (third for richness)
    n(48, 'pedal', 36, 4);        // C2 whole
    n(48, 'pedal', 48, 4);        // C3 whole
    n(48, 'choir', 52, 4);        // E3 whole
    n(48, 'choir', 55, 4);        // G3 whole
})();


// ============================================================
// Register pieces with PLAYLIST
// ============================================================
if (typeof PLAYLIST !== 'undefined') {
    PLAYLIST.push(PIECE_PRELUDE_C);
    PLAYLIST.push(PIECE_AIR_G_STRING);
    if (typeof buildPlaylistUI === 'function') buildPlaylistUI();
}
