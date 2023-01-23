import { useVideoConfig } from "remotion";
import { VoteGraph } from "./components/VoteGraph";

export const MyComposition = () => {
	const { fps, durationInFrames, width, height } = useVideoConfig();

	const barHeight = 20;
	const barPadding = 10;

	return (
		
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				fontSize: '7em',
				color: 'red',
				background: 'yellow',
				width: width,
				height: height,

		}}>
			< VoteGraph barHeight={barHeight} barPadding={barPadding}/>
		</div>
	)
};
