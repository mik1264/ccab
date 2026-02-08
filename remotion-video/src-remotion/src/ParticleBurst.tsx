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

type BurstParticle = {
  angle: number;
  speed: number;
  size: number;
  decay: number;
};

export const ParticleBurst: React.FC<{ triggerFrame: number }> = ({
  triggerFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const particles = useMemo<BurstParticle[]>(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      angle: seededRandom(i * 41 + 1) * Math.PI * 2,
      speed: seededRandom(i * 41 + 2) * 8 + 2,
      size: seededRandom(i * 41 + 3) * 3 + 1,
      decay: seededRandom(i * 41 + 5) * 0.3 + 0.7,
    }));
  }, []);

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 1 * fps, durationInFrames],
    [1, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  if (frame < triggerFrame) return null;

  const localFrame = frame - triggerFrame;
  const burstDuration = 1.5 * fps;

  if (localFrame > burstDuration) return null;

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        pointerEvents: "none",
        opacity: fadeOut,
      }}
    >
      {particles.map((p, i) => {
        const t = localFrame / burstDuration;
        const distance = p.speed * localFrame * (1 - t * 0.5);
        const x = 960 + Math.cos(p.angle) * distance;
        const y = 540 + Math.sin(p.angle) * distance;

        const opacity = interpolate(
          localFrame,
          [0, burstDuration * 0.2, burstDuration * p.decay, burstDuration],
          [0, 0.8, 0.3, 0],
          { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
        );

        const currentSize = p.size * (1 - t * 0.5);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: currentSize,
              height: currentSize,
              borderRadius: "50%",
              backgroundColor: `rgba(100, 200, 255, ${opacity})`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
