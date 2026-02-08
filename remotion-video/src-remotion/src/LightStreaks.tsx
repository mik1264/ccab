import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const LightStreaks: React.FC<{ triggerFrame: number }> = ({
  triggerFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 1 * fps, durationInFrames],
    [1, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  const streaks = [
    { angle: -25, delay: 0, width: 300, x: -200, speed: 1.2 },
    { angle: -25, delay: 8, width: 150, x: 400, speed: 0.9 },
    { angle: -25, delay: 15, width: 80, x: 100, speed: 1.5 },
    { angle: 30, delay: 5, width: 200, x: 600, speed: 1.0 },
    { angle: 30, delay: 12, width: 100, x: -300, speed: 1.3 },
  ];

  return (
    <AbsoluteFill style={{ overflow: "hidden", pointerEvents: "none" }}>
      {streaks.map((streak, i) => {
        const localFrame = Math.max(
          0,
          frame - triggerFrame - streak.delay,
        );
        const sweepDuration = 0.6 * fps;

        const sweep = interpolate(
          localFrame,
          [0, sweepDuration],
          [-1920, 1920 * 2],
          {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
            easing: Easing.out(Easing.quad),
          },
        );

        const opacity = interpolate(
          localFrame,
          [0, sweepDuration * 0.3, sweepDuration * 0.7, sweepDuration],
          [0, 0.25, 0.15, 0],
          {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          },
        );

        if (frame < triggerFrame + streak.delay) return null;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: sweep + streak.x,
              top: "50%",
              width: streak.width,
              height: 1080 * 2,
              transform: `translateY(-50%) rotate(${streak.angle}deg)`,
              background: i % 2 === 0
                ? `linear-gradient(90deg, transparent, rgba(140, 200, 255, ${opacity * fadeOut}), transparent)`
                : `linear-gradient(90deg, transparent, rgba(255, 180, 120, ${opacity * 0.7 * fadeOut}), transparent)`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
