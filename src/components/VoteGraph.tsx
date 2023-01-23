import React from "react";
import { Bar } from "./Bar";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

export const VoteGraph: React.FC<{
  barHeight: number;

}> = ({ barHeight }) => {

  const { fps, durationInFrames } = useVideoConfig();
	const frame = useCurrentFrame();

  return (
    <>
      <Bar maxWidth={300} color='red' barHeight={barHeight} offset={0} frame={frame} fps={fps}/>
			<Bar maxWidth={200} color='blue' barHeight={barHeight} offset={1} frame={frame} fps={fps}/>
    </>
  )
}