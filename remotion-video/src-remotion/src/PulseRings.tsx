import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const PulseRings: React.FC<{ triggerFrame: number }> = ({
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

  const rings = [0, 8, 16, 24, 32];

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut,
        pointerEvents: "none",
      }}
    >
      {rings.map((delay, i) => {
        const localFrame = Math.max(0, frame - triggerFrame - delay);
        const expand = spring({
          frame: localFrame,
          fps,
          config: { damping: 30, stiffness: 40, mass: 1.5 },
        });

        const size = interpolate(expand, [0, 1], [0, 600 + i * 200]);
        const opacity = interpolate(expand, [0, 0.3, 1], [0, 0.5, 0]);

        if (frame < triggerFrame + delay) return null;

        // Alternate between cool cyan and warm amber rings
        const r = i % 2 === 0 ? 100 : 255;
        const g = i % 2 === 0 ? 200 : 170;
        const b = i % 2 === 0 ? 255 : 100;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: size,
              height: size,
              borderRadius: "50%",
              border: `1.5px solid rgba(${r}, ${g}, ${b}, ${opacity})`,
              boxShadow: `0 0 25px rgba(${r}, ${g}, ${b}, ${opacity * 0.4}), inset 0 0 25px rgba(${r}, ${g}, ${b}, ${opacity * 0.15})`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
