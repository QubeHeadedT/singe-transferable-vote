import React from "react";
import { AbsoluteFill, spring, interpolate } from "remotion";

export const Bar: React.FC<{
  maxWidth: number;
  color: string;
  barHeight: number;
  offset: number;
  frame: number;
  fps: number;
  padding: number;
}> = ({ maxWidth, color, barHeight, offset, frame, fps, padding}) => {

  const fill = spring({
    fps,
    frame: frame,
    config: {
      damping: 100,
      mass: 10,
    }
  })

  const barWidth = interpolate(fill, [0, 1], [0, maxWidth]);

  return (
    <AbsoluteFill 
      style={{
        justifyContent: 'center',
				alignItems: 'center',
        fill: color,
      }}
    >
      <svg>
        <rect y={offset*(barHeight + padding)} width={barWidth} height={barHeight} rx="0.1em"/>
      </svg>
    </AbsoluteFill>
    
  )
}