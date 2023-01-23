import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

export const Bar: React.FC<{
  maxWidth: number;
  color: string;
  barHeight: number;
  offset: number;
}> = ({ maxWidth, color, barHeight, offset }) => {

  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const width = maxWidth * (frame / durationInFrames);

  return (
    <AbsoluteFill 
      style={{
        justifyContent: 'center',
				alignItems: 'center',
        fill: color,
      }}
    >
      <svg>
        <rect y={offset*barHeight} width={width} height={barHeight} rx="0.1em"/>
      </svg>
    </AbsoluteFill>
    
  )
}