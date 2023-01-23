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

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<svg width={800} height={500}>
				{voteBars.map((bar, index) => {
					console.log(bar);
					return (
						<Bar
							maxWidth={bar.votes}
							barHeight={barHeight}
							color={bar.color}
							offset={index}
							frame={frame}
							fps={fps}
							padding={barPadding}
						/>
					);
				})}
			</svg>
		</AbsoluteFill>
	);
};
