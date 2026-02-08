import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { useMemo } from "react";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// --- ASCII art girls ---

const GIRL_1 = [
  "        .--\"\"--.         ",
  "       /  ~~~~  \\        ",
  "      | /      \\ |       ",
  "      |(  o  o  )|       ",
  "      |  \\    /  |       ",
  "       \\  '--'  /        ",
  "        '------'         ",
  "       ---|  |---        ",
  "      /   |  |   \\       ",
  "     /    |  |    \\      ",
  "          |  |           ",
  "         /|  |\\          ",
  "        / |  | \\         ",
  "       /  \\  /  \\        ",
  "      '    ''    '       ",
  "     ~ GIRL  ~           ",
];

const GIRL_2 = [
  "      .;;;;;;;.          ",
  "     /~ ~ ~ ~ ~\\         ",
  "    | ~ ~ ~ ~ ~ |        ",
  "    |  (.)(.)    |        ",
  "    |    \\/      |        ",
  "     \\  '~~'   /         ",
  "      '-------'          ",
  "     \\  |    |  /        ",
  "      \\ |    | /         ",
  "       \\|    |/          ",
  "        |    |           ",
  "        |    |           ",
  "       /|    |\\          ",
  "      / |    | \\         ",
  "     /   \\  /   \\        ",
  "    '     ''     '       ",
  "   ~ BEAUTY ~            ",
];

const GIRL_3 = [
  "    _  __  _    ",
  "   | |/  \\| |   ",
  "   |  (oo)  |   ",
  "    \\ (--) /    ",
  "     '----'     ",
  "    / |  | \\    ",
  "   /  |  |  \\   ",
  "  /   |  |   \\  ",
  "      |  |      ",
  "      |  |      ",
  "     /\\  /\\     ",
  "    /  \\/  \\    ",
  "   STANDING     ",
];

const GIRL_4 = [
  "    .-\"\"\"\"-.",
  "   / .----. \\   ",
  "  | |  ()  | |  ",
  "  | |  ()  | |  ",
  "   \\ '-..-' /   ",
  "    '-....-'    ",
  "     / || \\     ",
  "    /  ||  \\    ",
  "   /   ||   \\   ",
  "       ||       ",
  "      /  \\      ",
  "     /    \\     ",
  "    /      \\    ",
  "   DANCING      ",
];

const GIRL_5 = [
  "      .-~~-.      ",
  "     /      \\     ",
  "    |  o  o  |    ",
  "    |   <>   |    ",
  "     \\ .__. /     ",
  "      '----'      ",
  "    __|    |__    ",
  "   /  |    |  \\   ",
  "  /   |    |   \\  ",
  "      |    |      ",
  "      |    |      ",
  "     /|    |\\     ",
  "    / '    ' \\    ",
  "   ~  WAVE  ~     ",
];

const GIRL_6 = [
  "     .oOOOo.     ",
  "    /        \\    ",
  "   | (*)  (*) |   ",
  "   |    --    |   ",
  "    \\  \\__/  /    ",
  "     '------'     ",
  "      / || \\      ",
  "     /  ||  \\     ",
  "    /   ||   \\    ",
  "        ||        ",
  "       /  \\       ",
  "      /    \\      ",
  "   ~ SMILE ~      ",
];

// --- ASCII landscapes ---

const MOUNTAIN = [
  "                  .                     ",
  "                 / \\          .         ",
  "                /   \\        / \\        ",
  "          .    /     \\      /   \\       ",
  "         / \\  /       \\    /     \\      ",
  "        /   \\/         \\  /       \\     ",
  "   ____/     \\          \\/         \\____",
  "  /           \\                   /     ",
  " /             \\_________________/      ",
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  "   MOUNTAIN                                  ",
];

const SUNSET = [
  "          \\   |   /          ",
  "           .--+--.           ",
  "        .-'       '-.        ",
  "       /    \\   /    \\       ",
  "  ----'      '-'      '---- ",
  "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  "    ~  ~   ~    ~  ~  ~  ~   ",
  "  ~    ~  ~   ~   ~    ~  ~  ",
  "   SUNSET                    ",
];

const TREE = [
  "         &&& &&  & &&        ",
  "      && &\\/&\\|& ()|/ @, &&  ",
  "      &\\/(/&/&||/& /_/)_&/&& ",
  "   &() &\\/&|()|/&\\/ '%' & () ",
  "  &_\\_&&_\\ |& |&&/&__%_/_& &&",
  "&&   && & &| &| /& & % ()& /&&",
  "          |||                 ",
  "          |||                 ",
  "          |||                 ",
  "    , -=-~'`^`~-=-, ,        ",
  "   TREE                      ",
];

const CITY = [
  "     _    ||   _   ||  _     ",
  "    |_|   ||  |_|  || |_|    ",
  "   _|_|_  || _|_|_ ||_|_|_  ",
  "  | | | | ||| | | |||| | |  ",
  "  | | | | ||| | | |||| | |  ",
  "  |_|_|_|_|||_|_|_||||_|_|  ",
  "  |       ||       ||     | ",
  "  |  []   ||  []   || []  | ",
  "  |       ||       ||     | ",
  "__|_______|________|______|_",
  "   CITY                      ",
];

const WAVES = [
  "          .-.                    ",
  "     .--.(   ).--.               ",
  "    ( '  )   (    )              ",
  "   (  .  )    `-(  )  .--.      ",
  "    '--'(   )    )(   (    )    ",
  "         `-'   .(  )   '-(  )  ",
  "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~   ",
  "    ~  ~  ~   ~  ~  ~   ~  ~   ",
  "  ~    ~   ~    ~    ~    ~    ",
  "   WAVES                       ",
];

const HOUSE = [
  "              /\\              ",
  "             /  \\             ",
  "            /    \\            ",
  "           /      \\           ",
  "          /  ____  \\          ",
  "         /  /    \\  \\         ",
  "        /__/______\\__\\        ",
  "        |   ______   |        ",
  "        |  |      |  |        ",
  "        |  | DOOR |  |        ",
  "   _____|__|______|__|_____   ",
  "   HOUSE                      ",
];

const CASTLE = [
  "  |>>           <<|  ",
  "  |  ___   ___   |   ",
  "  | | _ | | _ |  |   ",
  "  | || || || ||  |   ",
  "  | |___| |___|  |   ",
  "  |  ___ _ ___   |   ",
  "  | |  |_|  | |  |   ",
  " _|_|__|   |__|_|_   ",
  "|_________________|   ",
  "|  []  CASTLE  []  |  ",
];

const SHIP = [
  "         |    |    |         ",
  "        )_)  )_)  )_)        ",
  "       )___))___))___) \\     ",
  "      )____)____)_____) \\\\   ",
  "    _____|____|____|____\\\\\\__",
  "----\\                  /-----",
  "     \\________________/      ",
  "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  "    ~   ~    ~   ~    ~      ",
  "   SHIP                       ",
];

const LIGHTHOUSE = [
  "        [_]         ",
  "       |-|-|        ",
  "       |   |        ",
  "      /|   |\\       ",
  "     / | = | \\      ",
  "    /  |   |  \\     ",
  "   /   |   |   \\    ",
  "  /____|___|____\\   ",
  "       |   |        ",
  "       |   |        ",
  "  ~~~~~|___|~~~~~~  ",
  "  ~~~~~~~~~~~~~~~~~~",
  "   LIGHTHOUSE        ",
];

const DRAGON = [
  "                 __        ",
  "                / o\\       ",
  "           __  /   /       ",
  "          /  \\/   /        ",
  "     ____/ \\     /         ",
  "    /         \\_/          ",
  "   / /\\  /\\    \\           ",
  "  / /  \\/  \\    \\          ",
  "  \\/        \\___/  ~fire~  ",
  "    DRAGON                 ",
];

const ROCKET = [
  "        /\\        ",
  "       /  \\       ",
  "      | ** |      ",
  "      | ** |      ",
  "      | ** |      ",
  "     /| ++ |\\     ",
  "    / |    | \\    ",
  "   /__|____|__\\   ",
  "      /|  |\\      ",
  "     / |  | \\     ",
  "    *  *  *  *    ",
  "   ROCKET         ",
];

const FOREST = [
  "    *    *    *    *      ",
  "   /|\\  /|\\  /|\\  /|\\     ",
  "  / | \\/ | \\/ | \\/ | \\    ",
  " /  | /\\ | /\\ | /\\ |  \\   ",
  "/   |/  \\|/  \\|/  \\|   \\  ",
  "    ||   ||   ||   ||     ",
  "    ||   ||   ||   ||     ",
  " ~~~~~~~~~~~~~~~~~~~~~~~~~~",
  "   FOREST                  ",
];

const STAR_FIELD = [
  "  *       .    *       .  ",
  "      *       .   *       ",
  "   .      *      .     *  ",
  "  *   .       *     .     ",
  "     .    *      .   *    ",
  "  .    *     .      *   . ",
  "    *     .    *   .      ",
  "  .    *    .    *     .  ",
  "   STARFIELD              ",
];

const BRIDGE = [
  "                              ",
  " __|__|__|__|__|__|__|__|__   ",
  " |                        |   ",
  " |  \\  /  \\  /  \\  /  \\  |   ",
  " |   \\/    \\/    \\/    \\/  |   ",
  " |________________________|   ",
  " /\\  /\\  /\\  /\\  /\\  /\\  /\\  ",
  "/__\\/__\\/__\\/__\\/__\\/__\\/__\\  ",
  "  ~~ BRIDGE ~~~~~~~~~~~~~~~~  ",
];

const CAT = [
  "    /\\_/\\     ",
  "   ( o.o )    ",
  "    > ^ <     ",
  "   /|   |\\    ",
  "  (_|   |_)   ",
  "     |_|      ",
  "    /   \\     ",
  "   /     \\    ",
  "   ~ CAT ~    ",
];

const HORSE = [
  "        ,,__        ",
  "  ..  o(\"  )O       ",
  " (__\\/   \\-'        ",
  "  ``    /  \\        ",
  "       /\\   \\       ",
  "      /  \\   \\      ",
  "     _\\  /_  _\\     ",
  "    HORSE            ",
];

const BIRD = [
  "         __         ",
  "      __/o \\__      ",
  "     /       \\~     ",
  "    /   \\  /  \\     ",
  "    \\__  \\/  __/    ",
  "       \\  \\ /       ",
  "        \\  *        ",
  "     ~ BIRD ~       ",
];

const MOON = [
  "       _.---._       ",
  "     .'       '.     ",
  "    /    .-.    \\    ",
  "   |   /   \\   |    ",
  "   |   \\   /   |    ",
  "    \\    '-'    /    ",
  "     '.       .'     ",
  "       '-----'       ",
  "      ~ MOON ~       ",
];

// Girls appear 3x so they show up more often
const ALL_ART = [
  GIRL_1, GIRL_2, GIRL_3, GIRL_4, GIRL_5, GIRL_6,
  GIRL_1, GIRL_2, GIRL_3, GIRL_4, GIRL_5, GIRL_6,
  GIRL_1, GIRL_2, GIRL_3, GIRL_4, GIRL_5, GIRL_6,
  MOUNTAIN, SUNSET, TREE, CITY, WAVES, HOUSE,
  CASTLE, SHIP, LIGHTHOUSE, DRAGON, ROCKET,
  FOREST, STAR_FIELD, BRIDGE, CAT, HORSE, BIRD, MOON,
];

type FlickerSlot = {
  artIndex: number;
  x: number;
  y: number;
  startFrame: number;
  duration: number;
  hue: number;
  scale: number;
  driftX: number;
  driftY: number;
  rotateAmplitude: number;
};

export const AsciiFlicker: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Schedule 28 appearances evenly staggered so fewer overlap at once
  const slots = useMemo<FlickerSlot[]>(() => {
    const result: FlickerSlot[] = [];
    const count = 28;
    const slotSpacing = (durationInFrames - 2 * fps) / count;
    for (let i = 0; i < count; i++) {
      const dur = Math.floor(seededRandom(i * 53 + 5) * 0.8 * fps) + Math.floor(0.8 * fps);
      const jitter = (seededRandom(i * 53 + 1) - 0.5) * slotSpacing * 0.4;
      const start = Math.max(0, Math.min(
        durationInFrames - dur - Math.floor(0.5 * fps),
        Math.floor(i * slotSpacing + jitter),
      ));
      result.push({
        artIndex: Math.floor(seededRandom(i * 53 + 2) * ALL_ART.length),
        x: 50 + seededRandom(i * 53 + 3) * (1920 - 500),
        y: 30 + seededRandom(i * 53 + 4) * (1080 - 300),
        startFrame: start,
        duration: dur,
        hue: 160 + seededRandom(i * 53 + 6) * 80,
        scale: 2.0,
        driftX: (seededRandom(i * 53 + 8) - 0.5) * 1.5,
        driftY: (seededRandom(i * 53 + 9) - 0.5) * 0.8,
        rotateAmplitude: (seededRandom(i * 53 + 10) - 0.5) * 4,
      });
    }
    return result;
  }, [fps, durationInFrames]);

  const globalFadeIn = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const globalFadeOut = interpolate(
    frame,
    [durationInFrames - 1 * fps, durationInFrames],
    [1, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  return (
    <AbsoluteFill style={{ overflow: "hidden", pointerEvents: "none" }}>
      {slots.map((slot, i) => {
        const localFrame = frame - slot.startFrame;
        if (localFrame < 0 || localFrame >= slot.duration) return null;

        // Flicker: ~15% of frames are hidden for a glitchy strobe look
        const flicker = seededRandom(frame * 71 + i * 37) > 0.15;
        if (!flicker) return null;

        const art = ALL_ART[slot.artIndex];

        // Fade in/out over ~8 frames
        const fadeLen = Math.min(8, Math.floor(slot.duration / 3));
        const peakOpacity = 0.44;
        const opacity = slot.duration <= 4
          ? peakOpacity
          : interpolate(
              localFrame,
              [0, fadeLen, slot.duration - fadeLen, slot.duration],
              [0, peakOpacity, peakOpacity, 0],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
            );

        // Smooth drift movement
        const driftOffsetX = localFrame * slot.driftX;
        const driftOffsetY = localFrame * slot.driftY;

        // Subtle rotation wobble
        const rotation = slot.rotateAmplitude * Math.sin(localFrame * 0.08);

        // Jitter position slightly each frame
        const jitterX = (seededRandom(frame * 97 + i) - 0.5) * 6;
        const jitterY = (seededRandom(frame * 101 + i) - 0.5) * 4;

        return (
          <pre
            key={i}
            style={{
              position: "absolute",
              left: slot.x + driftOffsetX + jitterX,
              top: slot.y + driftOffsetY + jitterY,
              fontFamily: "monospace",
              fontSize: 14 * slot.scale,
              lineHeight: 1.15,
              margin: 0,
              whiteSpace: "pre",
              color: `hsla(${slot.hue}, 70%, 72%, ${opacity * globalFadeIn * globalFadeOut})`,
              textShadow: `0 0 12px hsla(${slot.hue}, 80%, 60%, ${opacity * 0.5 * globalFadeIn * globalFadeOut})`,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {art.join("\n")}
          </pre>
        );
      })}
    </AbsoluteFill>
  );
};
