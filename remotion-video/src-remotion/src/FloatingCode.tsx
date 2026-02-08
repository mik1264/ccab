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

const SNIPPETS = [
  "const story =",
  "await leaf.grow()",
  "return <Chapter />",
  "import { magic }",
  "export default",
  "function bloom()",
  "{ pages: [] }",
  "render(<App />)",
];

type Snippet = {
  text: string;
  x: number;
  y: number;
  speed: number;
  delay: number;
  fontSize: number;
  direction: number;
};

export const FloatingCode: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const snippets = useMemo<Snippet[]>(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      text: SNIPPETS[i],
      x: seededRandom(i * 31 + 1) * 1920,
      y: seededRandom(i * 31 + 2) * 1080,
      speed: seededRandom(i * 31 + 3) * 0.3 + 0.1,
      delay: seededRandom(i * 31 + 4) * 2 * fps,
      fontSize: Math.floor(seededRandom(i * 31 + 5) * 6) + 11,
      direction: seededRandom(i * 31 + 6) > 0.5 ? 1 : -1,
    }));
  }, [fps]);

  const globalFadeIn = interpolate(frame, [0, 1 * fps], [0, 1], {
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
      {snippets.map((snippet, i) => {
        const localFade = interpolate(
          frame,
          [snippet.delay, snippet.delay + 0.8 * fps],
          [0, 1],
          { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
        );

        const drift = frame * snippet.speed * snippet.direction * 0.3;
        const float = Math.sin((frame + snippet.delay) * 0.03) * 15;

        return (
          <span
            key={i}
            style={{
              position: "absolute",
              left: snippet.x + drift,
              top: snippet.y + float,
              fontFamily: "monospace",
              fontSize: snippet.fontSize,
              color: i % 3 === 0
                ? `rgba(255, 160, 100, ${0.2 * localFade * globalFadeIn * globalFadeOut})`
                : `rgba(100, 180, 240, ${0.2 * localFade * globalFadeIn * globalFadeOut})`,
              whiteSpace: "nowrap",
            }}
          >
            {snippet.text}
          </span>
        );
      })}
    </AbsoluteFill>
  );
};
