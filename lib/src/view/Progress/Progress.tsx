import * as React from "react";

import { Theme } from "../../theme";
import {
	type CommonProps,
	classnameCommon,
	styleCommon,
} from "../../theme/styles/common";
import { ViewLabel, type ViewLabelProps } from "../Label";

const $ = Theme.classNames;

export type ViewProgressProps = CommonProps & {
	value: number;
	label?: React.ReactNode;
	box?: ViewLabelProps["box"];
};

export function ViewProgress(props: ViewProgressProps) {
	const { className, value, label } = props;

	return (
		<ViewLabel {...props} value={label}>
			<progress
				className={$.join(className, classnameCommon(props))}
				style={styleCommon(props)}
				max={100}
				value={value}
			/>
		</ViewLabel>
	);
}
