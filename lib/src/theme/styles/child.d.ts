/// <reference types="react" />
type FlexBasisType = `${number}${string}` | "auto" | "max-content" | "min-content" | "fit-content" | "content" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
export interface ChildStyleProps {
    /** CSS `flex` property.. */
    flex?: number | `${number}` | `${number} ${number}` | `${number} ${FlexBasisType}` | `${number} ${number} ${FlexBasisType}`;
    /** CSS `flexGrow` property. */
    flexGrow?: number | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
    /** CSS `flexShrink` property. */
    flexShrink?: number | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
    /** CSS `flexBasis` property. */
    flexBasis?: FlexBasisType;
    /**
     * [grid-row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row) CSS property.
     */
    gridRow?: string;
    /**
     * [grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column) CSS property.
     */
    gridColumn?: string;
    /**
     * [align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) CSS property.
     */
    alignSelf?: "auto" | "normal" | "center" | "start" | "end" | "self-start" | "self-end" | "flex-start" | "flex-end" | "baseline" | "first baseline" | "last baseline" | "stretch" | "safe center" | "unsafe center" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
    /**
     * [justify-self](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self) CSS property.
     */
    justifySelf?: "auto" | "normal" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end" | "self-start" | "self-end" | "left" | "right" | "baseline" | "first baseline" | "last baseline" | "safe center" | "unsafe center" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
}
export declare function styleChild({ flex, flexGrow, flexShrink, flexBasis, gridRow, gridColumn, alignSelf, justifySelf, }: ChildStyleProps): import("react").CSSProperties;
export {};
