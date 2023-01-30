import { useVideoConfig } from "remotion";
import { VoteGraph } from "./components/VoteGraph";

export const MyComposition = () => {
	const { fps, durationInFrames, width, height } = useVideoConfig();

	const barHeight = 60;
	const barPadding = 40;

	return (
		
		<div>
			< VoteGraph barHeight={barHeight} barPadding={barPadding}/>
		</div>
	)
};
