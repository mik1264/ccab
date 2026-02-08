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

type Orb = {
  x: number;
  y: number;
  size: number;
  hue: number;
  driftX: number;
  driftY: number;
  phase: number;
  opacity: number;
};

export const Bokeh: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const orbs = useMemo<Orb[]>(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      x: seededRandom(i * 41 + 1) * 1920,
      y: seededRandom(i * 41 + 2) * 1080,
      size: 80 + seededRandom(i * 41 + 3) * 200,
      hue: 190 + seededRandom(i * 41 + 4) * 80,
      driftX: (seededRandom(i * 41 + 5) - 0.5) * 0.4,
      driftY: (seededRandom(i * 41 + 6) - 0.5) * 0.3,
      phase: seededRandom(i * 41 + 7) * Math.PI * 2,
      opacity: 0.03 + seededRandom(i * 41 + 8) * 0.04,
    }));
  }, []);

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
      {orbs.map((orb, i) => {
        const breathe = 0.7 + 0.3 * Math.sin(frame * 0.03 + orb.phase);
        const x = orb.x + frame * orb.driftX + Math.sin(frame * 0.015 + orb.phase) * 30;
        const y = orb.y + frame * orb.driftY + Math.cos(frame * 0.012 + orb.phase) * 20;
        const opacity = orb.opacity * breathe * globalFadeIn * globalFadeOut;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x - orb.size / 2,
              top: y - orb.size / 2,
              width: orb.size,
              height: orb.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, hsla(${orb.hue}, 60%, 60%, ${opacity}) 0%, hsla(${orb.hue}, 50%, 50%, ${opacity * 0.3}) 40%, transparent 70%)`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
