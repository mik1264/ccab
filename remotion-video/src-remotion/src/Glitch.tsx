import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { useMemo } from "react";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export const Glitch: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Define glitch hit frames (brief 2-3 frame bursts)
  const glitchHits = useMemo(() => {
    return [
      Math.floor(1.8 * fps),
      Math.floor(2.3 * fps),
      Math.floor(3.5 * fps),
      Math.floor(4.2 * fps),
      Math.floor(6.0 * fps),
      Math.floor(7.5 * fps),
      Math.floor(9.2 * fps),
      Math.floor(10.8 * fps),
    ];
  }, [fps]);

  // Check if current frame is in a glitch burst
  let glitchIntensity = 0;
  for (const hit of glitchHits) {
    if (frame >= hit && frame < hit + 3) {
      glitchIntensity = seededRandom(frame * 7 + hit) * 0.8 + 0.2;
    }
  }

  // Don't glitch during fade out
  const fadeOutStart = durationInFrames - 1 * fps;
  if (frame > fadeOutStart) {
    glitchIntensity = 0;
  }

  if (glitchIntensity === 0) {
    return <>{children}</>;
  }

  const offsetX = glitchIntensity * (seededRandom(frame * 13) - 0.5) * 20;
  const offsetY = glitchIntensity * (seededRandom(frame * 17) - 0.5) * 10;

  // Displacement + horizontal slice via clip-path on a single render
  const sliceY = Math.floor(seededRandom(frame * 31) * 1080);
  const sliceH = Math.floor(30 + seededRandom(frame * 37) * 60);
  const sliceOffset = (seededRandom(frame * 43) - 0.5) * 30;

  return (
    <>
      {/* Main content with displacement */}
      <AbsoluteFill
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px)`,
          clipPath: `inset(0 0 ${1080 - sliceY}px 0)`,
        }}
      >
        {children}
      </AbsoluteFill>
      {/* Sliced band shifted */}
      <AbsoluteFill
        style={{
          transform: `translate(${offsetX + sliceOffset}px, ${offsetY}px)`,
          clipPath: `inset(${sliceY}px 0 ${Math.max(0, 1080 - sliceY - sliceH)}px 0)`,
        }}
      >
        {children}
      </AbsoluteFill>
      {/* Below slice */}
      <AbsoluteFill
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px)`,
          clipPath: `inset(${sliceY + sliceH}px 0 0 0)`,
        }}
      >
        {children}
      </AbsoluteFill>
      {/* White flash */}
      <AbsoluteFill
        style={{
          backgroundColor: "white",
          opacity: glitchIntensity * 0.03,
          pointerEvents: "none",
        }}
      />
    </>
  );
};
