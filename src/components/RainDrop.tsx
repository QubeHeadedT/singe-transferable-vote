import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring } from "remotion";

export const RainDrop: React.FC<{delay: number; x: string; size: number;}> = ( {delay, x, size} ) => {
  
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const drop = spring({
    fps,
    frame: frame - delay,
    config: {
      damping: 1000,

      }
    });

  const viewSize = 572.801;

  const top = interpolate(drop, [0, 1], [-0.3, 1.2]);
  
  return (
    <AbsoluteFill 
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        paddingTop: 10,
        left: x,
        top: top * 100 + "%",
        transform: `scale(${size})`,
        }}
      >
      <svg
      viewBox={`0 0 ${viewSize} ${viewSize}`}
      style={{
        width: 100,
        position: "absolute",
        left: x,
        top: top * 100 + "%",
        transform: `scale(${size})`,
      }}
    >
      <path
        fill="#0096ff"
        d="M520.25,353.6c0,125-100.5,219.201-233.8,219.201S52.55,478.6,52.55,353.6c0-115.3,164.7-301.5,197.7-337.7
        c9.3-10.2,22.4-15.9,36.2-15.9s26.9,5.8,36.2,15.9C355.55,52.1,520.25,238.4,520.25,353.6z"
      />
    </svg>
    </AbsoluteFill>
    
  )
}