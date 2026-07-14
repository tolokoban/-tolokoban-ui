import * as React from "react";

import { Theme } from "../../theme/index.js";
import {
	type CommonProps,
	classnameCommon,
	styleCommon,
} from "../../theme/styles/common";
import type { Children, ColorName } from "../../types.js";
import { ViewPanel } from "../Panel";
import Styles from "./Label.module.css";

const $ = Theme.classNames;

export type ViewLabelProps = CommonProps & {
	/** Text to display as label. */
	value?: React.ReactNode;
	/** Tooltip */
	title?: string;
	/** Color of the label. Default to `currentColor`. */
	color?: ColorName;
	/**
	 * If set, the label and its children are enclosed in a FlexBox
	 * whose direction is "row" or "column".
	 *
	 * Default: `"column"`
	 */
	box?: "row" | "column" | "none";
	/**
	 * If `true`, the label will be to the right or to the bottom.
	 */
	reverse?: boolean;
	/**
	 * Content this label describes.
	 * When the label is clicked, the content will get focus.
	 */
	children?: Children;
};

export function ViewLabel(props: ViewLabelProps) {
	const {
		color,
		className,
		value,
		title,
		box = "column",
		reverse = false,
		fullwidth,
		children,
	} = props;
	const id = `labelled/${React.useId()}`;
	const handleMount = (div: HTMLDivElement | null) => {
		if (!div) return;

		const child = div.querySelector(
			"input,textarea,button,meter,output,progress,select",
		);
		if (!child) return;

		child.setAttribute("id", id);
	};
	if (!value) return <>{children}</>;

	const style: React.CSSProperties = styleCommon(props);
	if (color) style.color = `var(--theme-color-${color})`;

	const main = reverse ? (
		<>
			{children && (
				<div ref={handleMount} className={Styles.LabelContent}>
					{children}
				</div>
			)}
			<label
				htmlFor={id}
				title={title}
				className={$.join(className, Styles.Label, classnameCommon(props))}
				style={style}
			>
				{value}
			</label>
		</>
	) : (
		<>
			<label
				htmlFor={id}
				title={title}
				className={$.join(className, Styles.Label, classnameCommon(props))}
				style={style}
			>
				{value}
			</label>
			{children && (
				<div ref={handleMount} className={Styles.LabelContent}>
					{children}
				</div>
			)}
		</>
	);
	switch (box) {
		case "row":
			return (
				<ViewPanel
					{...props}
					display={fullwidth ? "flex" : "inline-flex"}
					flexDirection="row"
					alignItems="center"
					gap="1em"
				>
					{main}
				</ViewPanel>
			);
		case "column":
			return (
				<ViewPanel
					{...props}
					display={fullwidth ? "flex" : "inline-flex"}
					flexDirection="column"
					alignItems="stretch"
					gap="0"
				>
					{main}
				</ViewPanel>
			);
		default:
			return main;
	}
}
