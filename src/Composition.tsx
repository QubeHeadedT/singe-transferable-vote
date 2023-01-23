import { useVideoConfig, useCurrentFrame } from "remotion";
import { Bar } from "./components/Bar";

export const MyComposition = () => {
	const { fps, durationInFrames, width, height } = useVideoConfig();
	const frame = useCurrentFrame();

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
			<Bar maxWidth={300} color='red' barHeight={barHeight} offset={0}/>
			<Bar maxWidth={200} color='blue' barHeight={barHeight} offset={1}/>
		</div>
	)
};
