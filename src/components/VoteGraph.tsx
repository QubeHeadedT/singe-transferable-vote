import React from 'react';
import {Bar} from './Bar';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';

export const VoteGraph: React.FC<{
	barHeight: number;
	barPadding: number;
}> = ({barHeight, barPadding}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const voteBars = [
		{
			color: 'red',
			votes: 750,
		},
		{
			color: 'blue',
			votes: 500,
		},
		{
			color: 'green',
			votes: 250,
		},
	];

	const voteData = {
		ballot: 'Belfast East',
		quota: 600,
		votes: voteBars,
	}

	const width = 800
	const height = 500

	const quotaLine = width * 0.75

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<svg width={width} height={height}>
				
				{voteData.votes.map((bar, index) => {
					return (
						<Bar
							maxWidth={(bar.votes / voteData.quota) * quotaLine}
							barHeight={barHeight}
							color={bar.color}
							offset={index}
							frame={frame}
							fps={fps}
							padding={barPadding}
						/>
					);
				})}
				<line x1={quotaLine} x2={quotaLine} y1={0} y2={height} stroke="green" strokeWidth={3}/>
			</svg>
		</AbsoluteFill>
	);
};
