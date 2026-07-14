import "react";

declare module "react" {
	interface CSSProperties {
		[index: `--theme-${string}`]: any;
		[index: `--custom-${string}`]: any;
	}
}

declare module "*.module.css" {
	const classes: readonly { [key: string]: string };
	export = classes;
}
