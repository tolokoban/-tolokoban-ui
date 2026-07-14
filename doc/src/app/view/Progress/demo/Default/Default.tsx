import { ViewPanel, ViewProgress } from "@tolokoban/ui";
import React from "react";

export default function Demo() {
	const [progress, setProgress] = React.useState(73);
	React.useEffect(() => {
		const interval = globalThis.setInterval(() => {
			const t = Date.now() / 1000;
			setProgress((t * 7.456) % 100);
		}, 1000);
		return () => globalThis.clearInterval(interval);
	}, []);

	return (
		<ViewPanel display="flex" flexDirection="column" alignItems="flex-start">
			<ViewProgress value={progress} />
			<ViewProgress value={progress} fullwidth />
			<ViewProgress
				label={`Progress  (${progress.toFixed(1)} %)`}
				value={progress}
				width="320px"
			/>
			<ViewProgress
				label={`Progress  (${progress.toFixed(1)} %)`}
				value={progress}
				fullwidth
			/>
		</ViewPanel>
	);
}
