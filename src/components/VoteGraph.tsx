import React from 'react';
import {Bar} from './Bar';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';

export const VoteGraph: React.FC<{
	barHeight: number;
	barPadding: number;
}> = ({barHeight, barPadding}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const partyColours = {
		dup: 'red',
		sinnfein: 'green',
		alliance: 'yellow',
	}

	const voteBars = [
		{
			party: 'dup',
			candidate: 'Tony',
			votes: 750,
		},
		{
			party: 'sinnfein',
			candidate: 'Alice',
			votes: 500,
		},
		{
			party: 'alliance',
			candidate: 'Sara',
			votes: 250,
		},
	];

	const voteData = {
		ballot: 'Belfast East',
		year: 2021,
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
							color={partyColours[bar.party]}
							label={bar.candidate + " - " + bar.party}
							offset={index}
							frame={frame}
							fps={fps}
							padding={barPadding}
						/>
					);
				})}
				<line x1={quotaLine} x2={quotaLine} y1={0} y2={height} stroke="green" strokeWidth={3}/>
				<text x={quotaLine} y={20} fontSize={30}>Quota = {voteData.quota}</text>
				<text x={width / 3} y={20} fontSize={30}>{voteData.ballot + " - " + voteData.year}</text>
			</svg>
		</AbsoluteFill>
	);
};
