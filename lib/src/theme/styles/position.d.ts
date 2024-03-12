/// <reference types="react" />
export interface PositionStyleProps {
    /** CSS `position` property. */
    position?: "static" | "relative" | "absolute" | "fixed" | "sticky" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
    /** CSS `left` property. */
    left?: string;
    /** CSS `top` property. */
    top?: string;
    /** CSS `right` property. */
    right?: string;
    /** CSS `bottom` property. */
    bottom?: string;
    /** CSS `zIndex` property. */
    zIndex?: number | "auto";
}
export declare function stylePosition({ position, left, top, right, bottom, zIndex, }: PositionStyleProps): React.CSSProperties;
