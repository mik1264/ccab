# The Kenning Exhibition - Architecture Plan

> *"Hval-vegr" (whale-road) -- the sea*
> An interactive Norse poetry gallery where ancient metaphor meets generative art.

---

## 1. File Structure

```
ccab/kennings/
├── EXHIBITION_PLAN.md          # This file
├── index.html                  # Exhibition Hall entrance (will be rebuilt)
├── beowulf.html                # The Beowulf Room
├── prose-edda.html             # The Prose Edda Room
├── skaldskaparmal.html         # The Skaldskaparmal Room
├── kenning-forge.html          # Algorithmic Kenning Forge
├── living-edda.html            # The Living Edda (visitor contributions)
└── runic-gallery.html          # Generative Runic Art (p5.js)
```

All 7 HTML files are self-contained with inline CSS/JS. No build system. Each file
includes `<script src="../assets/js/enhance.js" defer></script>` for universal
keyboard shortcuts and touch support.

External dependencies (loaded via CDN):
- **p5.js** (all rooms) -- `https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js`
- **Google Fonts** (all rooms) -- EB Garamond + Inter

No other external libraries. All audio is Web Audio API (oscillators + filters).

---

## 2. Navigation Flow

```
                         ┌─────────────────────┐
                         │   EXHIBITION HALL    │
                         │     index.html       │
                         │  (entrance & map)    │
                         └────────┬────────────┘
                                  │
               ┌──────────────────┼──────────────────┐
               │                  │                  │
        ┌──────▼──────┐   ┌──────▼──────┐   ┌──────▼──────┐
        │   BEOWULF   │   │  PROSE EDDA │   │SKALDSKAPAR- │
        │    ROOM     │◄─►│    ROOM     │◄─►│  MAL ROOM   │
        │beowulf.html │   │prose-edda   │   │skaldskapar- │
        │             │   │  .html      │   │  mal.html   │
        └──────┬──────┘   └──────┬──────┘   └──────┬──────┘
               │                  │                  │
               │    ┌─────────────┼─────────────┐    │
               │    │             │             │    │
               ▼    ▼             ▼             ▼    ▼
        ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
        │   KENNING   │   │   LIVING    │   │   RUNIC     │
        │    FORGE    │◄─►│    EDDA     │◄─►│  GALLERY    │
        │kenning-forge│   │living-edda  │   │runic-gallery│
        │   .html     │   │  .html      │   │   .html     │
        └─────────────┘   └─────────────┘   └─────────────┘

  All rooms link back to Exhibition Hall.
  All rooms have a persistent side nav linking to every other room.
  The three "source" rooms (top) are scholarly.
  The three "experience" rooms (bottom) are interactive/generative.
```

### Navigation Tiers

**Tier 1 -- Source Rooms** (scholarly, text-focused):
- Beowulf Room, Prose Edda Room, Skaldskaparmal Room
- These rooms present kennings from their respective texts with analysis

**Tier 2 -- Experience Rooms** (interactive, creation-focused):
- Kenning Forge, Living Edda, Runic Gallery
- These rooms let visitors create, contribute, and explore generatively

Every room can reach every other room via the persistent nav.
The Exhibition Hall (index) is always accessible as a "home" anchor.

---

## 3. Color Palette

### Base Exhibition Colors (All Rooms)

| Token               | Hex       | Usage                                    |
|---------------------|-----------|------------------------------------------|
| `--bg-deep`         | `#1a1a2e` | Primary background (deep charcoal)       |
| `--bg-mid`          | `#16213e` | Secondary background (midnight blue)     |
| `--bg-surface`      | `#1f2641` | Card/panel surface                       |
| `--gold`            | `#e6c069` | Primary accent, headings, links          |
| `--gold-dim`        | `#b8944d` | Muted gold for secondary elements        |
| `--parchment`       | `#d4c5a9` | Body text, secondary text                |
| `--parchment-dim`   | `#9e9279` | Tertiary text, metadata                  |
| `--ink`             | `#0d0d1a` | Deep shadow, darkest background          |
| `--glow`            | `rgba(230,192,105,0.15)` | Ambient glow behind accents   |

### Per-Room Accent Colors

Each room has a unique accent color that tints its generative art, borders, and
highlighted elements. The accent is used sparingly -- it does NOT replace gold
for headings or interactive elements.

| Room               | Accent Name   | Hex       | Symbolism                      |
|--------------------|---------------|-----------|--------------------------------|
| Exhibition Hall    | Ember         | `#e6c069` | Gold (the entrance is neutral) |
| Beowulf Room       | Blood Red     | `#8b2500` | Battle, warrior poetry         |
| Prose Edda Room    | Frost Blue    | `#4a8fa8` | Ice, Norse cosmology           |
| Skaldskaparmal     | Mead Amber    | `#c77d2e` | The mead of poetry             |
| Kenning Forge      | Forge Orange  | `#d4601a` | Smithing fire                  |
| Living Edda        | Verdant Green | `#3a7d44` | Growth, living tradition       |
| Runic Gallery      | Rune Violet   | `#7b5ea7` | Magic, mysticism               |

### CSS Custom Properties (Shared)

```css
:root {
    /* Base palette */
    --bg-deep: #1a1a2e;
    --bg-mid: #16213e;
    --bg-surface: #1f2641;
    --gold: #e6c069;
    --gold-dim: #b8944d;
    --parchment: #d4c5a9;
    --parchment-dim: #9e9279;
    --ink: #0d0d1a;
    --glow: rgba(230, 192, 105, 0.15);

    /* Room accent (overridden per page) */
    --accent: #e6c069;
    --accent-glow: rgba(230, 192, 105, 0.12);

    /* Typography */
    --font-display: 'EB Garamond', 'Georgia', serif;
    --font-body: 'Inter', 'Helvetica Neue', sans-serif;

    /* Spacing */
    --nav-width: 260px;
    --transition-room: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

## 4. Typography

### Font Stack

| Role       | Font          | Weight(s)       | Usage                              |
|------------|---------------|-----------------|-------------------------------------|
| Display    | EB Garamond   | 400, 500, 600, 700, 400i, 600i | Kennings, headings, quotes |
| Body       | Inter         | 300, 400, 500, 600 | Body text, UI, nav labels       |

### Google Fonts URL

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Type Scale

```
Kenning display:    3.2rem / 700 / EB Garamond    (featured kenning text)
Room title:         2.4rem / 600 / EB Garamond    (h1 room names)
Section heading:    1.6rem / 600 / EB Garamond    (h2 within rooms)
Card title:         1.2rem / 500 / EB Garamond    (h3 kenning cards)
Body text:          1.0rem / 400 / Inter           (paragraphs, descriptions)
Caption/meta:       0.85rem / 400 / Inter          (metadata, small labels)
Nav label:          0.9rem / 500 / Inter           (navigation items)
UI small:           0.75rem / 500 / Inter          (badges, counters)
```

### Kenning Formatting Convention

Kennings are always displayed in EB Garamond italic with the gold accent:
```css
.kenning {
    font-family: var(--font-display);
    font-style: italic;
    color: var(--gold);
    letter-spacing: 0.02em;
}
```

The literal meaning appears below in parchment:
```css
.kenning-meaning {
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--parchment-dim);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}
```

---

## 5. Shared CSS Architecture

Every page includes these shared styles inline (no external CSS file, per CCAB
convention). The following CSS blocks are identical across all 7 pages:

### 5.1 Reset & Base

```css
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: var(--font-body);
    background: var(--bg-deep);
    color: var(--parchment);
    line-height: 1.7;
    min-height: 100vh;
    overflow-x: hidden;
}
```

### 5.2 Persistent Navigation (Side Rail)

A fixed left-side navigation rail present on every page. It shows all 7 rooms
as icons + labels, with the current room highlighted.

```css
.exhibition-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: var(--nav-width);
    height: 100vh;
    background: linear-gradient(180deg, var(--ink) 0%, var(--bg-deep) 100%);
    border-right: 1px solid rgba(230, 192, 105, 0.08);
    padding: 30px 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.exhibition-nav .nav-title {
    font-family: var(--font-display);
    font-size: 1.1rem;
    color: var(--gold);
    text-align: center;
    padding: 0 20px 25px;
    border-bottom: 1px solid rgba(230, 192, 105, 0.1);
    letter-spacing: 0.05em;
}

.exhibition-nav .nav-rooms {
    flex: 1;
    padding: 15px 0;
    overflow-y: auto;
}

.exhibition-nav .nav-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    color: var(--parchment-dim);
    text-decoration: none;
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    border-left: 3px solid transparent;
}

.exhibition-nav .nav-link:hover {
    color: var(--gold);
    background: rgba(230, 192, 105, 0.05);
    border-left-color: var(--gold-dim);
}

.exhibition-nav .nav-link.active {
    color: var(--gold);
    background: rgba(230, 192, 105, 0.08);
    border-left-color: var(--accent);
}

.exhibition-nav .nav-icon {
    font-size: 1.2rem;
    width: 24px;
    text-align: center;
}
```

### 5.3 Main Content Area

```css
.exhibition-main {
    margin-left: var(--nav-width);
    min-height: 100vh;
    position: relative;
}
```

### 5.4 Room Transition Overlay

When navigating between rooms, a brief fade-to-black overlay fires:

```css
.room-transition {
    position: fixed;
    inset: 0;
    background: var(--ink);
    z-index: 9999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
}

.room-transition.active {
    opacity: 1;
    pointer-events: all;
}
```

Implementation: On nav click, add `.active` to the overlay, wait 400ms, then
navigate. On page load, the overlay starts active and fades out after 100ms.

### 5.5 Audio Toggle

```css
.audio-toggle {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--bg-surface);
    border: 1px solid rgba(230, 192, 105, 0.15);
    color: var(--gold);
    font-size: 1.2rem;
    cursor: pointer;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.audio-toggle:hover {
    background: rgba(230, 192, 105, 0.15);
    transform: scale(1.1);
}

.audio-toggle.muted {
    color: var(--parchment-dim);
}
```

### 5.6 p5.js Canvas Backdrop

Every room has a `<div id="p5-backdrop">` that holds a room-specific generative
art canvas rendered by p5.js in the background:

```css
#p5-backdrop {
    position: fixed;
    top: 0;
    left: var(--nav-width);
    right: 0;
    bottom: 0;
    z-index: 0;
    opacity: 0.35;
    pointer-events: none;
}

#p5-backdrop canvas {
    display: block;
    width: 100% !important;
    height: 100% !important;
}
```

The opacity is set low (0.35) so the generative art serves as atmospheric
backdrop without interfering with readability.

### 5.7 Scrollbar Styling

```css
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--bg-deep);
}

::-webkit-scrollbar-thumb {
    background: var(--gold-dim);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--gold);
}
```

---

## 6. Audio Strategy

### Approach: Web Audio API Oscillators + Filters

No external audio files. Each room generates its own ambient atmosphere using
the Web Audio API's oscillator and filter nodes.

### Architecture

```
AudioContext
├── MasterGain (volume control, fade in/out)
│   ├── ConvolverNode (pseudo-reverb via delay feedback)
│   │   ├── OscillatorNode (drone 1 -- low fundamental)
│   │   ├── OscillatorNode (drone 2 -- fifth/octave)
│   │   └── OscillatorNode (drone 3 -- high shimmer)
│   ├── BiquadFilterNode (lowpass, room-specific cutoff)
│   └── GainNode (sub-mix for per-oscillator volume)
└── AnalyserNode (optional, for audio-reactive visuals)
```

### Per-Room Sound Design

| Room             | Fundamental | Character               | Oscillator Types        |
|------------------|-------------|-------------------------|------------------------|
| Exhibition Hall  | A2 (110 Hz) | Solemn, anticipatory    | sine + sine (fifth)    |
| Beowulf Room     | D2 (73 Hz)  | Dark, warlike           | sawtooth (filtered) + sine |
| Prose Edda Room  | E3 (165 Hz) | Ethereal, icy           | sine + triangle (octave) |
| Skaldskaparmal   | G2 (98 Hz)  | Warm, scholarly         | sine + sine (third)    |
| Kenning Forge    | C2 (65 Hz)  | Industrial, rhythmic    | square (filtered) + sine |
| Living Edda      | F3 (175 Hz) | Organic, growing        | triangle + sine        |
| Runic Gallery    | B2 (123 Hz) | Mystical, shimmering    | sine + sine (detuned)  |

### Implementation Pattern

```javascript
class RoomAmbience {
    constructor(fundamental, type1, type2, filterFreq) {
        this.ctx = null; // Created on user gesture
        this.fundamental = fundamental;
        this.type1 = type1;
        this.type2 = type2;
        this.filterFreq = filterFreq;
        this.isPlaying = false;
    }

    init() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.master = this.ctx.createGain();
        this.master.gain.value = 0;
        this.master.connect(this.ctx.destination);

        // Lowpass filter
        this.filter = this.ctx.createBiquadFilter();
        this.filter.type = 'lowpass';
        this.filter.frequency.value = this.filterFreq;
        this.filter.Q.value = 1;
        this.filter.connect(this.master);

        // Drone 1 - fundamental
        this.osc1 = this.ctx.createOscillator();
        this.osc1.type = this.type1;
        this.osc1.frequency.value = this.fundamental;
        this.gain1 = this.ctx.createGain();
        this.gain1.gain.value = 0.3;
        this.osc1.connect(this.gain1);
        this.gain1.connect(this.filter);
        this.osc1.start();

        // Drone 2 - harmonic
        this.osc2 = this.ctx.createOscillator();
        this.osc2.type = this.type2;
        this.osc2.frequency.value = this.fundamental * 1.5; // perfect fifth
        this.gain2 = this.ctx.createGain();
        this.gain2.gain.value = 0.15;
        this.osc2.connect(this.gain2);
        this.gain2.connect(this.filter);
        this.osc2.start();

        // Slow LFO modulating filter cutoff for movement
        this.lfo = this.ctx.createOscillator();
        this.lfo.type = 'sine';
        this.lfo.frequency.value = 0.05; // Very slow
        this.lfoGain = this.ctx.createGain();
        this.lfoGain.gain.value = this.filterFreq * 0.3;
        this.lfo.connect(this.lfoGain);
        this.lfoGain.connect(this.filter.frequency);
        this.lfo.start();
    }

    fadeIn(duration = 3) {
        if (!this.ctx) this.init();
        this.master.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + duration);
        this.isPlaying = true;
    }

    fadeOut(duration = 2) {
        if (!this.ctx) return;
        this.master.gain.linearRampToValueAtTime(0, this.ctx.currentTime + duration);
        this.isPlaying = false;
    }

    toggle() {
        this.isPlaying ? this.fadeOut() : this.fadeIn();
    }
}
```

### Audio UX Rules

1. Audio is **OFF by default**. Visitor must click the audio toggle to start.
2. State is stored in `localStorage('exhibition-audio')` so preference persists.
3. AudioContext is only created on first user gesture (Chrome autoplay policy).
4. Fade-in is 3 seconds; fade-out is 2 seconds.
5. Master volume never exceeds 0.12 (very subtle background drone).

---

## 7. p5.js Strategy

Every room has a unique generative artwork rendered on a background canvas via
p5.js in instance mode. The artwork is atmospheric -- low opacity, slow movement,
reinforcing each room's theme without competing with content.

### p5.js Instance Mode Pattern

```javascript
const roomSketch = (p) => {
    p.setup = () => {
        const container = document.getElementById('p5-backdrop');
        const cnv = p.createCanvas(container.offsetWidth, container.offsetHeight);
        cnv.parent('p5-backdrop');
        // Room-specific setup...
    };

    p.draw = () => {
        // Room-specific generative art...
    };

    p.windowResized = () => {
        const container = document.getElementById('p5-backdrop');
        p.resizeCanvas(container.offsetWidth, container.offsetHeight);
    };
};

new p5(roomSketch);
```

### Per-Room Generative Art

| Room             | Artwork                       | Description                                                  |
|------------------|-------------------------------|--------------------------------------------------------------|
| Exhibition Hall  | **Floating Runes**            | Old Futhark runes drift slowly upward like embers, fading in and out. Gold on dark. Particles have subtle trails. |
| Beowulf Room     | **Blood Tide**                | Horizontal wave forms in deep red, evoking a dark sea. Perlin noise displacement. Occasional bright crests. |
| Prose Edda Room  | **Yggdrasil Branches**        | Recursive fractal tree (L-system) that slowly grows and sheds branches. Frost-blue lines on dark. |
| Skaldskaparmal   | **Mead Flow**                 | Amber fluid simulation using particle systems. Streams of golden particles flowing in curves. |
| Kenning Forge    | **Sparks & Anvil**            | Particles burst upward from the bottom center like forge sparks. Orange/white particles with gravity and fade. |
| Living Edda      | **Growing Vines**             | Organic vine tendrils grow from the edges of the screen using recursive curves. Green with golden leaf accents. |
| Runic Gallery    | **Rune Constellation Grid**   | A grid of connected dots (like a star chart) that slowly rotates. Connecting lines pulse with violet glow. |

### Performance Budget

- Target: 30fps minimum (these are backgrounds, not the main attraction)
- Max particle count per room: 200
- Use `p.frameRate(30)` to cap
- Use `noStroke()` where possible
- Avoid `clear()` every frame -- use semi-transparent background overlay for trails

---

## 8. Responsive Design

### Breakpoints

| Name       | Width        | Behavior                                          |
|------------|--------------|---------------------------------------------------|
| Desktop    | >= 1024px    | Side nav visible, full layout                     |
| Tablet     | 768-1023px   | Side nav collapsed to icon-only (60px)            |
| Mobile     | < 768px      | Side nav hidden, hamburger menu, stacked layout   |

### Desktop (>= 1024px)

- Side nav: 260px fixed left rail, full labels
- Content: `margin-left: 260px`
- Kenning cards: 2-3 column grid
- p5.js backdrop: full viewport behind content

### Tablet (768-1023px)

```css
@media (max-width: 1023px) {
    :root {
        --nav-width: 60px;
    }

    .exhibition-nav .nav-label { display: none; }
    .exhibition-nav .nav-title { font-size: 0; padding: 15px 0; }
    .exhibition-nav .nav-title::after {
        content: 'KE';
        font-size: 0.9rem;
        display: block;
    }
    .exhibition-nav .nav-link { justify-content: center; padding: 14px 0; }
    .exhibition-nav .nav-icon { font-size: 1.4rem; }
}
```

### Mobile (< 768px)

```css
@media (max-width: 767px) {
    :root {
        --nav-width: 0px;
    }

    .exhibition-nav {
        transform: translateX(-100%);
        width: 280px;
    }

    .exhibition-nav.open {
        transform: translateX(0);
    }

    .mobile-header {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 56px;
        background: var(--ink);
        border-bottom: 1px solid rgba(230, 192, 105, 0.1);
        align-items: center;
        padding: 0 16px;
        z-index: 999;
    }

    .hamburger {
        width: 40px;
        height: 40px;
        background: none;
        border: none;
        color: var(--gold);
        font-size: 1.5rem;
        cursor: pointer;
    }

    .exhibition-main {
        margin-left: 0;
        padding-top: 56px;
    }

    /* Overlay when nav is open */
    .nav-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 998;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
    }

    .nav-overlay.visible {
        opacity: 1;
        pointer-events: all;
    }
}
```

### Touch Considerations

- All interactive elements: minimum 44x44px touch target
- Swipe left/right on mobile to navigate between rooms (optional enhancement)
- Kenning cards: tap to expand/reveal meaning
- Audio toggle: 48x48px minimum

---

## 9. Room Wireframes

### 9.1 Exhibition Hall (`index.html`)

```
┌─────────────────────────────────────────────────────────┐
│ NAV  │                                                  │
│      │   [p5 backdrop: floating golden runes]           │
│ ---- │                                                  │
│ Hall │        T H E   K E N N I N G                     │
│ Beo  │        E X H I B I T I O N                       │
│ Edda │                                                  │
│ Skald│     "Where ancient metaphor meets                │
│ Forge│      generative art"                             │
│ Live │                                                  │
│ Rune │   ┌─────────────────────────────────┐            │
│      │   │  FEATURED KENNING               │            │
│      │   │  "hron-rad"  (whale-road)       │            │
│      │   │  = the sea                      │            │
│      │   │  [ auto-cycles every 8s ]       │            │
│      │   └─────────────────────────────────┘            │
│      │                                                  │
│      │   ┌── Source ──┐  ┌── Source ──┐  ┌── Source ──┐ │
│      │   │  BEOWULF   │  │PROSE EDDA │  │SKALDSKAPAR-│ │
│      │   │  ROOM      │  │  ROOM     │  │ MAL ROOM   │ │
│      │   │  42 kenning│  │  35 kenn. │  │  55 kenn.  │ │
│      │   │  [Enter]   │  │  [Enter]  │  │  [Enter]   │ │
│      │   └────────────┘  └───────────┘  └────────────┘ │
│      │                                                  │
│      │   ┌── Exper ──┐  ┌── Exper ──┐  ┌── Exper ──┐  │
│      │   │  KENNING  │  │  LIVING   │  │  RUNIC     │  │
│      │   │  FORGE    │  │  EDDA     │  │  GALLERY   │  │
│      │   │  Create   │  │  Contribute│  │  Generative│ │
│      │   │  [Enter]  │  │  [Enter]  │  │  [Enter]   │  │
│      │   └───────────┘  └───────────┘  └────────────┘  │
│      │                                                  │
│ [A]  │   [ About the Exhibition ]  [ Audio toggle ]     │
└──────┴──────────────────────────────────────────────────┘
```

**Key elements:**
- Full-viewport dark entrance with dramatic title treatment
- Featured kenning auto-cycles through famous kennings with crossfade
- 6 room cards in 2 rows: Source rooms (top) and Experience rooms (bottom)
- Cards have a subtle glow border using room accent color
- Scroll-triggered entrance animation (title fades in, cards stagger up)

### 9.2 Beowulf Room (`beowulf.html`)

```
┌─────────────────────────────────────────────────────────┐
│ NAV  │                                                  │
│      │   [p5 backdrop: blood-red wave forms]            │
│      │                                                  │
│      │   THE BEOWULF ROOM                               │
│      │   "Kennings from the great Anglo-Saxon epic"     │
│      │                                                  │
│      │   ┌──────────────────────────────────────────┐   │
│      │   │ FILTER: [All] [Sea] [Battle] [Body]      │   │
│      │   │         [Creature] [Treasure] [Ruler]    │   │
│      │   └──────────────────────────────────────────┘   │
│      │                                                  │
│      │   ┌─────────────┐  ┌─────────────┐              │
│      │   │ "hron-rad"  │  │ "ban-hus"   │              │
│      │   │ whale-road  │  │ bone-house  │              │
│      │   │ = the sea   │  │ = the body  │              │
│      │   │             │  │             │              │
│      │   │ [Beo. 10]   │  │ [Beo. 2508] │              │
│      │   └─────────────┘  └─────────────┘              │
│      │                                                  │
│      │   ┌─────────────┐  ┌─────────────┐              │
│      │   │ "heapo-lace"│  │ "gold-wine" │              │
│      │   │ battle-play │  │ gold-friend │              │
│      │   │ = warfare   │  │ = generous  │              │
│      │   │             │  │   lord      │              │
│      │   │ [Beo. 1073] │  │ [Beo. 1171] │              │
│      │   └─────────────┘  └─────────────┘              │
│      │                                                  │
│      │   [ ... scrollable grid of kenning cards ]       │
│ [A]  │                                                  │
└──────┴──────────────────────────────────────────────────┘
```

**Key elements:**
- Category filter buttons (pill-shaped) for kenning types
- Kenning cards in a responsive grid (2-3 columns)
- Each card shows: Old English kenning, literal translation, meaning, line reference
- Click a card to expand it with full context passage from Beowulf
- Blood-red accent on active filter, card borders, and expanded-state highlights

### 9.3 Prose Edda Room (`prose-edda.html`)

```
┌─────────────────────────────────────────────────────────┐
│ NAV  │                                                  │
│      │   [p5 backdrop: frost-blue fractal tree]         │
│      │                                                  │
│      │   THE PROSE EDDA ROOM                            │
│      │   "Snorri Sturluson's mythological kennings"     │
│      │                                                  │
│      │   ┌──────────────────────────────────────────┐   │
│      │   │  THE NINE WORLDS                         │   │
│      │   │  ┌─────┐ ┌─────┐ ┌─────┐                │   │
│      │   │  │Asgar│ │Midga│ │Jotun│  ...            │   │
│      │   │  │ 12  │ │  8  │ │ 15  │                 │   │
│      │   │  └─────┘ └─────┘ └─────┘                │   │
│      │   └──────────────────────────────────────────┘   │
│      │                                                  │
│      │   ┌─────────────┐  ┌─────────────┐              │
│      │   │"svalr veðr  │  │"Baldrs bani"│              │
│      │   │ megins"     │  │ Baldr's bane│              │
│      │   │ cool strength│ │ = mistletoe │              │
│      │   │ of serpent   │  │   / Loki    │              │
│      │   │ = gold      │  │             │              │
│      │   └─────────────┘  └─────────────┘              │
│      │                                                  │
│      │   [ ... kenning cards organized by world ]       │
│ [A]  │                                                  │
└──────┴──────────────────────────────────────────────────┘
```

**Key elements:**
- Navigation by the Nine Worlds of Norse cosmology
- Clicking a world filters kennings associated with that realm
- World buttons show count badges
- Frost-blue accent on interactive elements
- Expanded cards show mythological context

### 9.4 Skaldskaparmal Room (`skaldskaparmal.html`)

```
┌─────────────────────────────────────────────────────────┐
│ NAV  │                                                  │
│      │   [p5 backdrop: flowing mead-amber particles]    │
│      │                                                  │
│      │   THE SKALDSKAPARMAL ROOM                        │
│      │   "The language of poetry itself"                │
│      │                                                  │
│      │   ┌──────────────────────────────────────────┐   │
│      │   │  KENNING STRUCTURE DIAGRAM                │   │
│      │   │                                           │   │
│      │   │  base-word + determinant = kenning        │   │
│      │   │     |              |           |          │   │
│      │   │   "road"    +   "whale"   = "whale-road" │   │
│      │   │   (generic)    (specific)   (the sea)    │   │
│      │   │                                           │   │
│      │   └──────────────────────────────────────────┘   │
│      │                                                  │
│      │   SEARCH: [________________________] [Go]        │
│      │                                                  │
│      │   ┌── By Subject ────────────────────────────┐   │
│      │   │ [Gold] [Sea] [Battle] [Blood] [Fire]     │   │
│      │   │ [Ship] [Sword] [Woman] [Man] [Sky]       │   │
│      │   └──────────────────────────────────────────┘   │
│      │                                                  │
│      │   ┌─────────────┐  ┌─────────────┐              │
│      │   │ GOLD:       │  │ SEA:        │              │
│      │   │ "Sif's hair"│  │"fish-home"  │              │
│      │   │ "otter's   │  │"swan-road"  │              │
│      │   │  ransom"   │  │"seal-bath"  │              │
│      │   │ "river-bed │  │"whale-road" │              │
│      │   │  of Fafnir"│  │             │              │
│      │   └─────────────┘  └─────────────┘              │
│      │                                                  │
│ [A]  │                                                  │
└──────┴──────────────────────────────────────────────────┘
```

**Key elements:**
- Instructional diagram at top explaining kenning structure
- Full-text search across all kennings in the collection
- Subject-based tag filters (the most common referents)
- Grouped display: kennings for the same subject listed together
- This is the most "encyclopedic" room -- comprehensive reference
- Mead-amber accent

### 9.5 Kenning Forge (`kenning-forge.html`)

```
┌─────────────────────────────────────────────────────────┐
│ NAV  │                                                  │
│      │   [p5 backdrop: forge sparks rising]             │
│      │                                                  │
│      │   THE KENNING FORGE                              │
│      │   "Craft new kennings from ancient patterns"     │
│      │                                                  │
│      │   ┌──────────────────────────────────────────┐   │
│      │   │  STEP 1: Choose your subject             │   │
│      │   │  ┌──────────────────────────────┐        │   │
│      │   │  │ [dropdown or type: "the sea"]│        │   │
│      │   │  └──────────────────────────────┘        │   │
│      │   │                                          │   │
│      │   │  STEP 2: Choose your pattern             │   │
│      │   │  ( ) noun + noun  ("whale-road")         │   │
│      │   │  ( ) noun's + noun ("Sif's hair")        │   │
│      │   │  ( ) adj + noun ("bright-wound")         │   │
│      │   │                                          │   │
│      │   │  STEP 3: Generate!                       │   │
│      │   │  ┌─────────────────────────────┐         │   │
│      │   │  │       [FORGE KENNING]       │         │   │
│      │   │  └─────────────────────────────┘         │   │
│      │   └──────────────────────────────────────────┘   │
│      │                                                  │
│      │   ┌──────────────────────────────────────────┐   │
│      │   │  YOUR FORGED KENNING:                    │   │
│      │   │                                          │   │
│      │   │      "gull-meadow"                       │   │
│      │   │       (the sea)                          │   │
│      │   │                                          │   │
│      │   │  [Save to Living Edda] [Forge Another]   │   │
│      │   └──────────────────────────────────────────┘   │
│      │                                                  │
│      │   RECENT FORGINGS:                               │
│      │   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐           │
│      │   │ ...  │ │ ...  │ │ ...  │ │ ...  │           │
│      │   └──────┘ └──────┘ └──────┘ └──────┘           │
│ [A]  │                                                  │
└──────┴──────────────────────────────────────────────────┘
```

**Key elements:**
- Step-by-step guided kenning creation
- Algorithmic generation using word-association tables
- The algorithm:
  1. User picks subject (sea, gold, battle, etc.)
  2. User picks grammatical pattern
  3. System draws from a curated list of base-words and determinants
  4. Multiple results generated; user picks favorite
- "Save to Living Edda" stores in localStorage and shows on living-edda.html
- Recent forgings displayed as a horizontal scroll strip
- Forge-orange accent on buttons and the result display

### 9.6 Living Edda (`living-edda.html`)

```
┌─────────────────────────────────────────────────────────┐
│ NAV  │                                                  │
│      │   [p5 backdrop: growing green vines]             │
│      │                                                  │
│      │   THE LIVING EDDA                                │
│      │   "A growing collection of visitor kennings"     │
│      │                                                  │
│      │   ┌──────────────────────────────────────────┐   │
│      │   │  CONTRIBUTE YOUR KENNING                 │   │
│      │   │                                          │   │
│      │   │  Kenning: [__________________]           │   │
│      │   │  Meaning: [__________________]           │   │
│      │   │  Name:    [________] (optional)          │   │
│      │   │                                          │   │
│      │   │  [Add to the Living Edda]                │   │
│      │   └──────────────────────────────────────────┘   │
│      │                                                  │
│      │   COMMUNITY KENNINGS (42)                        │
│      │   Sort: [Newest] [Popular] [Random]              │
│      │                                                  │
│      │   ┌─────────────┐  ┌─────────────┐              │
│      │   │"pixel-loom" │  │"cloud-brain"│              │
│      │   │ = computer  │  │ = AI        │              │
│      │   │ -- anon     │  │ -- Sigrid   │              │
│      │   │ [heart] 3   │  │ [heart] 7   │              │
│      │   └─────────────┘  └─────────────┘              │
│      │                                                  │
│      │   [ ... scrollable grid ]                        │
│ [A]  │                                                  │
└──────┴──────────────────────────────────────────────────┘
```

**Key elements:**
- Contribution form at top
- All data stored in localStorage (no server)
- Heart/vote system (also localStorage)
- Sort options: newest first, most hearts, random shuffle
- Cards show: kenning, meaning, contributor name, heart count
- Kennings forged in the Kenning Forge appear here automatically
- Verdant green accent

### 9.7 Runic Gallery (`runic-gallery.html`)

```
┌─────────────────────────────────────────────────────────┐
│ NAV  │                                                  │
│      │   GENERATIVE RUNIC ART                           │
│      │   "Where runes become living art"                │
│      │                                                  │
│      │   ┌──────────────────────────────────────────┐   │
│      │   │                                          │   │
│      │   │     [MAIN CANVAS - LARGE]                │   │
│      │   │     Interactive p5.js piece              │   │
│      │   │     Responds to mouse/touch              │   │
│      │   │     Full-width, 60vh height              │   │
│      │   │                                          │   │
│      │   └──────────────────────────────────────────┘   │
│      │                                                  │
│      │   PIECES:                                        │
│      │   ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐      │
│      │   │Rune │ │Rune │ │Rune │ │Bind-│ │Vegvi│      │
│      │   │Rain │ │Grid │ │Morph│ │Rune │ │sir  │      │
│      │   │     │ │     │ │     │ │Weavr│ │Maze │      │
│      │   └─────┘ └─────┘ └─────┘ └─────┘ └─────┘      │
│      │                                                  │
│      │   CONTROLS:                                      │
│      │   Speed: [=========>---]                          │
│      │   Color: [Room Accent] [Gold] [Frost] [Custom]   │
│      │   Style: [Connected] [Scattered] [Flowing]       │
│      │                                                  │
│ [A]  │                                                  │
└──────┴──────────────────────────────────────────────────┘
```

**Key elements:**
- This room is p5.js as the MAIN attraction (not just backdrop)
- Large interactive canvas dominates the page
- Thumbnail strip to switch between 5 generative pieces:
  1. **Rune Rain** -- Elder Futhark characters falling like Matrix rain
  2. **Rune Grid** -- Runes arranged in a pulsing grid, connections light up
  3. **Rune Morph** -- One rune morphs into another via interpolated vertices
  4. **Bind-Rune Weaver** -- Two runes combine into a bind-rune (overlaid)
  5. **Vegvisir Maze** -- Procedurally generated Norse compass pattern
- Interactive: mouse position affects the art (attracts particles, changes flow)
- Controls panel for speed, color palette, and style variation
- Rune-violet accent

---

## 10. Shared Navigation Component

### Structure (HTML)

```html
<nav class="exhibition-nav" id="exhibition-nav" role="navigation" aria-label="Exhibition rooms">
    <div class="nav-title">The Kenning Exhibition</div>
    <div class="nav-rooms">
        <a href="index.html" class="nav-link active" data-room="hall">
            <span class="nav-icon">&#x2302;</span>
            <span class="nav-label">Exhibition Hall</span>
        </a>
        <a href="beowulf.html" class="nav-link" data-room="beowulf">
            <span class="nav-icon">&#x2694;</span>
            <span class="nav-label">Beowulf Room</span>
        </a>
        <a href="prose-edda.html" class="nav-link" data-room="edda">
            <span class="nav-icon">&#x2744;</span>
            <span class="nav-label">Prose Edda</span>
        </a>
        <a href="skaldskaparmal.html" class="nav-link" data-room="skald">
            <span class="nav-icon">&#x270D;</span>
            <span class="nav-label">Skaldskaparmal</span>
        </a>
        <a href="kenning-forge.html" class="nav-link" data-room="forge">
            <span class="nav-icon">&#x2692;</span>
            <span class="nav-label">Kenning Forge</span>
        </a>
        <a href="living-edda.html" class="nav-link" data-room="living">
            <span class="nav-icon">&#x2618;</span>
            <span class="nav-label">Living Edda</span>
        </a>
        <a href="runic-gallery.html" class="nav-link" data-room="runic">
            <span class="nav-icon">&#x25CA;</span>
            <span class="nav-label">Runic Gallery</span>
        </a>
    </div>
    <div class="nav-footer">
        <a href="../index.html" class="nav-back">
            <span class="nav-icon">&#x2190;</span>
            <span class="nav-label">Back to CCAB</span>
        </a>
    </div>
</nav>

<!-- Mobile header (hidden on desktop) -->
<header class="mobile-header" id="mobile-header">
    <button class="hamburger" id="hamburger" aria-label="Open navigation">&#x2630;</button>
    <span class="mobile-title">The Kenning Exhibition</span>
</header>

<!-- Mobile overlay -->
<div class="nav-overlay" id="nav-overlay"></div>

<!-- Room transition -->
<div class="room-transition" id="room-transition"></div>
```

### Behavior (JavaScript)

```javascript
// Shared navigation logic (included inline in every page)
(function() {
    const nav = document.getElementById('exhibition-nav');
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('nav-overlay');
    const transition = document.getElementById('room-transition');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('open');
            overlay.classList.toggle('visible');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            nav.classList.remove('open');
            overlay.classList.remove('visible');
        });
    }

    // Room transitions
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.classList.contains('active')) {
                e.preventDefault();
                return;
            }
            e.preventDefault();
            transition.classList.add('active');
            setTimeout(() => {
                window.location.href = link.href;
            }, 400);
        });
    });

    // Fade in on page load
    window.addEventListener('load', () => {
        transition.classList.add('active');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                transition.classList.remove('active');
            });
        });
    });
})();
```

### Nav Icon Mapping

| Room             | Unicode  | Symbol     |
|------------------|----------|------------|
| Exhibition Hall  | `&#x2302;` | House      |
| Beowulf Room     | `&#x2694;` | Swords     |
| Prose Edda       | `&#x2744;` | Snowflake  |
| Skaldskaparmal   | `&#x270D;` | Writing    |
| Kenning Forge    | `&#x2692;` | Hammer     |
| Living Edda      | `&#x2618;` | Shamrock   |
| Runic Gallery    | `&#x25CA;` | Diamond    |

---

## Appendix A: Kenning Data Schema

All kenning data is stored as JavaScript arrays inline in each page. There is no
shared data file (per CCAB convention of self-contained HTML).

```javascript
const kennings = [
    {
        kenning: "hron-rad",
        literal: "whale-road",
        meaning: "the sea",
        source: "Beowulf",
        line: 10,
        category: "sea",
        language: "OE"  // OE = Old English, ON = Old Norse
    },
    // ...
];
```

Categories: `sea`, `battle`, `body`, `gold`, `fire`, `blood`, `ship`, `sword`,
`woman`, `man`, `sky`, `earth`, `creature`, `treasure`, `ruler`, `poetry`.

---

## Appendix B: localStorage Keys

| Key                        | Type     | Used By          | Description                    |
|----------------------------|----------|------------------|--------------------------------|
| `exhibition-audio`         | boolean  | All rooms        | Audio on/off preference        |
| `exhibition-forged`        | JSON[]   | Forge, Living    | Kennings created in the Forge  |
| `exhibition-community`     | JSON[]   | Living Edda      | Visitor-contributed kennings   |
| `exhibition-hearts`        | JSON{}   | Living Edda      | Heart counts by kenning ID     |
| `exhibition-visited`       | JSON[]   | All rooms        | List of visited room IDs       |

---

## Appendix C: Accessibility

- All pages use semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<article>`)
- ARIA labels on navigation, interactive controls, and modals
- Color contrast: gold #e6c069 on #1a1a2e = 8.2:1 ratio (AAA)
- Color contrast: parchment #d4c5a9 on #1a1a2e = 9.5:1 ratio (AAA)
- Keyboard navigation: Tab through all interactive elements
- Focus-visible outlines in gold
- Reduced-motion media query disables p5.js animations and transitions
- Audio is off by default (opt-in only)

```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }

    #p5-backdrop { display: none; }
    .room-transition { display: none; }
}
```

---

## Appendix D: Performance Targets

| Metric                   | Target        |
|--------------------------|---------------|
| p5.js backdrop FPS       | 30fps         |
| Runic Gallery main FPS   | 60fps         |
| Page load (no cache)     | < 2s          |
| Room transition           | 400ms         |
| Audio fade-in             | 3s            |
| First contentful paint    | < 1s          |
| Max DOM nodes per page    | < 500         |
| Max particles (backdrop)  | 200           |
| Max particles (gallery)   | 1000          |

---

*This plan is the architectural blueprint for The Kenning Exhibition.*
*All 7 HTML files should be built from these specifications.*
