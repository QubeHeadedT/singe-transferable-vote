import React from "react";
import { AbsoluteFill, spring, interpolate } from "remotion";

export const Bar: React.FC<{
  maxWidth: number;
  color: string;
  label: string;
  barHeight: number;
  offset: number;
  frame: number;
  fps: number;
  padding: number;
}> = ({ maxWidth, color, label, barHeight, offset, frame, fps, padding}) => {

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
    <g>
      <rect y={offset*(barHeight + padding) + padding} fill={color} width={barWidth} height={barHeight} rx="0.1em"/>
      <text x={50} y={offset*(barHeight + padding) + padding + (barHeight / 2)} fontSize={30}>{label}</text>
    </g>
  )
}