import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Particles } from "./Particles";
import { MatrixRain } from "./MatrixRain";
import { FloatingCode } from "./FloatingCode";
import { Scanlines } from "./Scanlines";
import { Vignette } from "./Vignette";
import { FilmGrain } from "./FilmGrain";
import { Glitch } from "./Glitch";
import { Tagline } from "./Tagline";
import { PulseRings } from "./PulseRings";
import { LightStreaks } from "./LightStreaks";
import { ParticleBurst } from "./ParticleBurst";
import { AsciiFlicker } from "./AsciiFlicker";
import { Bokeh } from "./Bokeh";

const ASCII_ART = [
  " ____  _                   _                __ ",
  "/ ___|| |_ ___  _ __ _   _| |    ___  __ _ / _|",
  "\\___ \\| __/ _ \\| '__| | | | |   / _ \\/ _` | |_ ",
  " ___) | || (_) | |  | |_| | |__|  __/ (_| |  _|",
  "|____/ \\__\\___/|_|   \\__, |_____|\\___|\\_,_|_|  ",
  "                     |___/                      ",
];

const TOTAL_CHARS = ASCII_ART.reduce((sum, line) => sum + line.length, 0);

export const StoryLeafIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // === TYPEWRITER ===
  const typeStart = 0.3 * fps;
  const typeDuration = 2.5 * fps;
  const charsRevealed = Math.floor(
    interpolate(frame, [typeStart, typeStart + typeDuration], [0, TOTAL_CHARS], {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
      easing: Easing.out(Easing.quad),
    }),
  );

  // Blinking cursor
  const cursorVisible = Math.sin(frame * 0.3) > 0;
  const cursorDone = frame > typeStart + typeDuration + 0.3 * fps;

  // Cursor position
  let charsLeft = charsRevealed;
  let cursorLine = 0;
  let cursorCol = 0;
  for (let i = 0; i < ASCII_ART.length; i++) {
    if (charsLeft <= ASCII_ART[i].length) {
      cursorLine = i;
      cursorCol = charsLeft;
      break;
    }
    charsLeft -= ASCII_ART[i].length;
    if (i === ASCII_ART.length - 1) {
      cursorLine = i;
      cursorCol = ASCII_ART[i].length;
    }
  }

  // === BOUNCE after typing ===
  const bounceDelay = typeStart + typeDuration;
  const bounce = spring({
    frame: Math.max(0, frame - bounceDelay),
    fps,
    config: { damping: 8, stiffness: 150, mass: 0.6 },
  });
  const scale = frame > bounceDelay ? interpolate(bounce, [0, 1], [1, 1.08]) : 1;

  // === GLOW pulse after typing ===
  const glowProgress = interpolate(
    frame,
    [bounceDelay, bounceDelay + 1 * fps],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );
  const glowPulse =
    glowProgress > 0
      ? glowProgress * (0.6 + 0.3 * Math.sin((frame - bounceDelay) * 0.12))
      : 0;

  // === FADE OUT ===
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 1 * fps, durationInFrames],
    [1, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  // === CONTAINER FADE IN ===
  const containerFade = interpolate(frame, [0, 0.3 * fps], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // === UNDERLINE ===
  const underlineProgress = spring({
    frame: Math.max(0, frame - bounceDelay - 5),
    fps,
    config: { damping: 20, stiffness: 200 },
  });

  // === SLOW ZOOM on entire scene ===
  const sceneZoom = interpolate(frame, [0, durationInFrames], [1, 1.04], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // === BACKGROUND HUE SHIFT ===
  const hueShift = interpolate(frame, [0, durationInFrames], [0, 30], {
    extrapolateRight: "clamp",
  });

  // Tagline starts after bounce settles
  const taglineStart = Math.floor(bounceDelay + 0.5 * fps);

  const asciiBlock = (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: containerFade * fadeOut,
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* ASCII art */}
        <div
          style={{
            position: "relative",
            filter: `drop-shadow(0 0 ${25 * glowPulse}px rgba(80, 180, 255, ${glowPulse * 0.9})) drop-shadow(0 0 ${50 * glowPulse}px rgba(60, 120, 220, ${glowPulse * 0.3}))`,
          }}
        >
          <pre
            style={{
              fontFamily: "monospace",
              fontSize: 28,
              lineHeight: 1.2,
              color: "transparent",
              margin: 0,
              whiteSpace: "pre",
              letterSpacing: 1,
            }}
          >
            {ASCII_ART.map((line, lineIdx) => {
              let charsBefore = 0;
              for (let j = 0; j < lineIdx; j++) {
                charsBefore += ASCII_ART[j].length;
              }

              return (
                <div key={lineIdx} style={{ position: "relative" }}>
                  {line.split("").map((char, colIdx) => {
                    const charIndex = charsBefore + colIdx;
                    const isRevealed = charIndex < charsRevealed;
                    const isCursor =
                      lineIdx === cursorLine &&
                      colIdx === cursorCol &&
                      !cursorDone;

                    return (
                      <span key={colIdx}>
                        <span
                          style={{
                            color: isRevealed
                              ? `hsl(${195 + hueShift + colIdx * 1.2}, ${65 + Math.sin(charIndex * 0.08) * 10}%, ${76 + Math.sin(charIndex * 0.12) * 8}%)`
                              : "transparent",
                            textShadow: isRevealed
                              ? `0 0 10px hsla(${200 + colIdx * 1.5}, 80%, 70%, ${0.25 + 0.35 * glowPulse}), 0 0 30px hsla(${210 + colIdx}, 60%, 50%, ${0.1 * glowPulse})`
                              : "none",
                          }}
                        >
                          {char}
                        </span>
                        {isCursor && cursorVisible && (
                          <span
                            style={{
                              color: "#64c8ff",
                              textShadow:
                                "0 0 10px rgba(100, 200, 255, 0.8)",
                            }}
                          >
                            _
                          </span>
                        )}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </pre>
        </div>

        {/* Underline */}
        <div
          style={{
            width: interpolate(underlineProgress, [0, 1], [0, 520]),
            height: 2,
            marginTop: 18,
            background:
              `linear-gradient(90deg, transparent, rgba(100, 200, 255, ${0.6 + 0.3 * glowPulse}), rgba(180, 140, 255, ${0.4 + 0.2 * glowPulse}), rgba(100, 200, 255, ${0.6 + 0.3 * glowPulse}), transparent)`,
            borderRadius: 1,
            boxShadow: `0 0 8px rgba(100, 200, 255, ${0.3 * glowPulse})`,
          }}
        />
      </div>

      {/* Tagline */}
      <Tagline startFrame={taglineStart} />
    </AbsoluteFill>
  );

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, hsl(${240 + hueShift}, 35%, 8%) 0%, hsl(${220 + hueShift}, 45%, 13%) 50%, hsl(${200 + hueShift}, 30%, 10%) 100%)`,
      }}
    >
      <AbsoluteFill style={{ transform: `scale(${sceneZoom})` }}>
        {/* Radial glow behind text */}
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse 800px 550px at 50% 46%, rgba(80, 140, 255, ${0.12 + 0.08 * glowPulse}) 0%, rgba(60, 100, 200, ${0.04 + 0.03 * glowPulse}) 40%, transparent 70%)`,
          }}
        />
        {/* Warm ambient accent */}
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse 500px 400px at 65% 55%, rgba(200, 120, 60, ${0.03 + 0.02 * Math.sin(frame * 0.04)}) 0%, transparent 60%)`,
          }}
        />

        <Bokeh />
        <MatrixRain />
        <AsciiFlicker />
        <FloatingCode />
        <Particles />

        {/* Pulse rings on bounce */}
        <PulseRings triggerFrame={Math.floor(bounceDelay)} />

        {/* Particle burst on bounce */}
        <ParticleBurst triggerFrame={Math.floor(bounceDelay)} />

        {/* Light streaks sweep on bounce */}
        <LightStreaks triggerFrame={Math.floor(bounceDelay)} />


        <Glitch>{asciiBlock}</Glitch>
      </AbsoluteFill>

      <Vignette />
      <Scanlines />
      <FilmGrain />

    </AbsoluteFill>
  );
};
