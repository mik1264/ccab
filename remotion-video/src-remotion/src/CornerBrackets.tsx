import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const CornerBrackets: React.FC<{ triggerFrame: number }> = ({
  triggerFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const progress = spring({
    frame: Math.max(0, frame - triggerFrame),
    fps,
    config: { damping: 15, stiffness: 120 },
  });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 1 * fps, durationInFrames],
    [1, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  if (frame < triggerFrame) return null;

  const bracketSize = 40;
  const thickness = 2;
  const inset = interpolate(progress, [0, 1], [100, 0]);
  const opacity = interpolate(progress, [0, 0.5, 1], [0, 0.8, 0.5]) * fadeOut;

  // Glow pulse after settled
  const settled = frame > triggerFrame + 0.5 * fps;
  const glow = settled
    ? 0.3 + 0.2 * Math.sin((frame - triggerFrame) * 0.08)
    : 0;

  const color = `rgba(100, 200, 255, ${opacity})`;
  const shadow = `0 0 ${10 + glow * 20}px rgba(100, 200, 255, ${glow * opacity})`;

  const bracketStyle = {
    position: "absolute" as const,
    width: bracketSize,
    height: bracketSize,
    boxShadow: shadow,
  };

  // Horizontal and vertical distance from the center ASCII block
  const hPad = 360;
  const vPad = 140;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      {/* Top-left */}
      <div
        style={{
          ...bracketStyle,
          top: `calc(50% - ${vPad + inset}px)`,
          left: `calc(50% - ${hPad + inset}px)`,
          borderTop: `${thickness}px solid ${color}`,
          borderLeft: `${thickness}px solid ${color}`,
        }}
      />
      {/* Top-right */}
      <div
        style={{
          ...bracketStyle,
          top: `calc(50% - ${vPad + inset}px)`,
          right: `calc(50% - ${hPad + inset}px)`,
          borderTop: `${thickness}px solid ${color}`,
          borderRight: `${thickness}px solid ${color}`,
        }}
      />
      {/* Bottom-left */}
      <div
        style={{
          ...bracketStyle,
          bottom: `calc(50% - ${vPad + inset}px)`,
          left: `calc(50% - ${hPad + inset}px)`,
          borderBottom: `${thickness}px solid ${color}`,
          borderLeft: `${thickness}px solid ${color}`,
        }}
      />
      {/* Bottom-right */}
      <div
        style={{
          ...bracketStyle,
          bottom: `calc(50% - ${vPad + inset}px)`,
          right: `calc(50% - ${hPad + inset}px)`,
          borderBottom: `${thickness}px solid ${color}`,
          borderRight: `${thickness}px solid ${color}`,
        }}
      />
    </AbsoluteFill>
  );
};
