import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { useMemo } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  delay: number;
  colored: boolean;
};

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export const Particles: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      x: seededRandom(i * 3 + 1) * 1920,
      y: seededRandom(i * 3 + 2) * 1080,
      size: seededRandom(i * 3 + 3) * 3.5 + 1,
      speed: seededRandom(i * 7 + 4) * 0.6 + 0.2,
      opacity: seededRandom(i * 7 + 5) * 0.5 + 0.1,
      delay: seededRandom(i * 7 + 6) * 1.5 * fps,
      colored: seededRandom(i * 7 + 7) > 0.6,
    }));
  }, [fps]);

  const globalFadeIn = interpolate(frame, [0, 0.8 * fps], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const globalFadeOut = interpolate(
    frame,
    [durationInFrames - 0.5 * fps, durationInFrames],
    [1, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {particles.map((particle, i) => {
        const drift =
          Math.sin((frame + particle.delay) * 0.02 * particle.speed) * 40;
        const rise =
          ((frame + particle.delay) * particle.speed * 0.6) % 1080;

        const particleFade = interpolate(
          frame,
          [particle.delay, particle.delay + 0.4 * fps],
          [0, 1],
          { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
        );

        const twinkle =
          0.4 + 0.6 * Math.sin((frame + particle.delay) * 0.1);

        const currentOpacity =
          particle.opacity *
          particleFade *
          twinkle *
          globalFadeIn *
          globalFadeOut;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: particle.x + drift,
              top: (particle.y - rise + 1080) % 1080,
              width: particle.size,
              height: particle.size,
              borderRadius: "50%",
              backgroundColor: particle.colored
                ? `rgba(100, 200, 255, ${currentOpacity})`
                : i % 5 === 0
                  ? `rgba(255, 160, 100, ${currentOpacity})`
                  : `rgba(220, 230, 255, ${currentOpacity})`,
              boxShadow: particle.size > 2.5
                ? `0 0 ${particle.size * 3}px ${particle.colored ? `rgba(100, 200, 255, ${currentOpacity * 0.6})` : `rgba(200, 210, 255, ${currentOpacity * 0.4})`}`
                : "none",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
