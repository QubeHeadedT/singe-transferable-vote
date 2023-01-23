import { useVideoConfig } from "remotion";
import { VoteGraph } from "./components/VoteGraph";

export const MyComposition = () => {
	const { fps, durationInFrames, width, height } = useVideoConfig();

	const barHeight = 50;

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
			< VoteGraph barHeight={barHeight} />
		</div>
	)
};
