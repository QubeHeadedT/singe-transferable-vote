import React from "react";
import { Bar } from "./Bar";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

export const VoteGraph: React.FC<{
  barHeight: number;
  barPadding: number;
}> = ({ barHeight, barPadding }) => {

  const { fps } = useVideoConfig();
	const frame = useCurrentFrame();

  const voteBars = [{
    color: 'red',
    votes: 100,
  },
  {
    color: 'blue',
    votes: 50,
  },
  {
    color: 'green',
    votes: 25,
  }]

  return (
    <AbsoluteFill 
      style={{
        justifyContent: 'center',
				alignItems: 'center',
      }}
    >
      <svg width={800} height={500}>
        <Bar maxWidth={800} color='red' barHeight={barHeight} offset={0} frame={frame} fps={fps} padding={barPadding}/>
        <Bar maxWidth={200} color='blue' barHeight={barHeight} offset={1} frame={frame} fps={fps} padding={barPadding}/>
        <Bar maxWidth={150} color='green' barHeight={barHeight} offset={2} frame={frame} fps={fps} padding={barPadding}/>
      </svg>


    </AbsoluteFill>
  )
}