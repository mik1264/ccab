import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const TAGLINE = "the beginning of many stories";

export const Tagline: React.FC<{ startFrame: number }> = ({ startFrame }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const localFrame = Math.max(0, frame - startFrame);
  const typeDuration = 1.2 * fps;

  const charsRevealed = Math.floor(
    interpolate(localFrame, [0, typeDuration], [0, TAGLINE.length], {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
      easing: Easing.out(Easing.quad),
    }),
  );

  const containerOpacity = interpolate(
    frame,
    [startFrame, startFrame + 0.2 * fps],
    [0, 1],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    },
  );

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 0.8 * fps, durationInFrames],
    [1, 0],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    },
  );

  // Letter spacing animation
  const spreadSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 30, stiffness: 80 },
  });
  const letterSpacing = interpolate(spreadSpring, [0, 1], [20, 8]);

  // Cursor blink
  const cursorVisible = Math.sin(localFrame * 0.35) > 0;
  const cursorDone = localFrame > typeDuration + 0.3 * fps;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: containerOpacity * fadeOut,
      }}
    >
      <div
        style={{
          marginTop: 260,
          fontFamily: "monospace",
          fontSize: 22,
          letterSpacing,
          textTransform: "uppercase",
        }}
      >
        {TAGLINE.split("").map((char, i) => {
          const isRevealed = i < charsRevealed;
          const charDelay = (i / TAGLINE.length) * 0.5;
          const charGlow = isRevealed
            ? 0.3 + 0.2 * Math.sin((localFrame - charDelay * fps) * 0.15)
            : 0;

          return (
            <span
              key={i}
              style={{
                color: isRevealed
                  ? `rgba(180, 220, 255, ${0.75 + charGlow})`
                  : "transparent",
                textShadow: isRevealed
                  ? `0 0 14px rgba(100, 200, 255, ${charGlow * 1.2}), 0 0 30px rgba(80, 160, 240, ${charGlow * 0.4})`
                  : "none",
              }}
            >
              {char}
            </span>
          );
        })}
        {!cursorDone && cursorVisible && (
          <span
            style={{
              color: "#64c8ff",
              textShadow: "0 0 10px rgba(100, 200, 255, 0.8)",
            }}
          >
            _
          </span>
        )}
      </div>
    </AbsoluteFill>
  );
};
