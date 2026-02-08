import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { useMemo } from "react";

const KATAKANA =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

type Column = {
  x: number;
  speed: number;
  charOffset: number;
  delay: number;
};

export const MatrixRain: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const columns = useMemo<Column[]>(() => {
    const cols: Column[] = [];
    const colCount = 45;
    for (let i = 0; i < colCount; i++) {
      cols.push({
        x: (i / colCount) * 1920 + seededRandom(i * 13 + 7) * 20,
        speed: seededRandom(i * 17 + 3) * 1.5 + 0.5,
        charOffset: Math.floor(seededRandom(i * 19 + 11) * KATAKANA.length),
        delay: seededRandom(i * 29 + 1) * 1.5 * fps,
      });
    }
    return cols;
  }, [fps]);

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

  const trailLength = 4;
  const charHeight = 22;

  return (
    <AbsoluteFill style={{ overflow: "hidden", opacity: 0.3 * globalFadeIn * globalFadeOut }}>
      {columns.map((col, i) => {
        const progress = Math.max(0, (frame - col.delay) * col.speed * 0.4);
        const headY = (progress * charHeight) % (1080 + trailLength * charHeight);

        if (headY - trailLength * charHeight > 1080 || headY < -charHeight) return null;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: col.x,
              top: headY - trailLength * charHeight,
              fontFamily: "monospace",
              fontSize: 17,
              lineHeight: `${charHeight}px`,
              whiteSpace: "pre",
            }}
          >
            {Array.from({ length: trailLength }, (_, j) => {
              // j=0 is top (oldest/faintest), j=trailLength-1 is head (brightest)
              const charIdx = (col.charOffset + j + Math.floor(frame * 0.25)) % KATAKANA.length;
              const t = j / (trailLength - 1); // 0 = faint tail, 1 = bright head
              const opacity = t * t * 0.85; // quadratic fade: tail nearly invisible

              return (
                <div
                  key={j}
                  style={{
                    color: j === trailLength - 1
                      ? `rgba(180, 255, 230, 0.9)`
                      : `rgba(60, 200, 180, ${opacity})`,
                    textShadow: j === trailLength - 1
                      ? "0 0 14px rgba(150, 255, 220, 0.8)"
                      : `0 0 6px rgba(60, 200, 180, ${opacity * 0.5})`,
                  }}
                >
                  {KATAKANA[charIdx]}
                </div>
              );
            })}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
