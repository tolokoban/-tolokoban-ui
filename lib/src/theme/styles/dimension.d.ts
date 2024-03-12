/// <reference types="react" />
import { NumberWithUnit } from "./common";
export interface DimensionStyleProps {
    /** CSS width. */
    width?: NumberWithUnit;
    /** CSS height. */
    height?: NumberWithUnit;
    /** CSS maxWidth. */
    maxWidth?: NumberWithUnit;
    /** CSS maxHeight. */
    maxHeight?: NumberWithUnit;
    /** CSS minWidth. */
    minWidth?: NumberWithUnit;
    /** CSS minHeight. */
    minHeight?: NumberWithUnit;
    /** If true, set width=100% and height=100%. Default to false. */
    fullsize?: boolean;
    /** If true, set width=100%. Default to false. */
    fullwidth?: boolean;
    /** If true, set height=100%. Default to false. */
    fullheight?: boolean;
}
export declare function styleDimension({ width, height, maxWidth, maxHeight, minWidth, minHeight, fullsize, fullwidth, fullheight, }: DimensionStyleProps): import("react").CSSProperties;
