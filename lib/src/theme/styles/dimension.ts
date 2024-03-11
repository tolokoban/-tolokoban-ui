import { NumberWithUnit } from "./common.js"

export interface DimensionStyleProps {
    /** CSS width. */
    width?: NumberWithUnit
    /** CSS height. */
    height?: NumberWithUnit
    /** CSS maxWidth. */
    maxWidth?: NumberWithUnit
    /** CSS maxHeight. */
    maxHeight?: NumberWithUnit
    /** CSS minWidth. */
    minWidth?: NumberWithUnit
    /** CSS minHeight. */
    minHeight?: NumberWithUnit
    /** If true, set width=100% and height=100%. Default to false. */
    fullsize?: boolean
    /** If true, set width=100%. Default to false. */
    fullwidth?: boolean
    /** If true, set height=100%. Default to false. */
    fullheight?: boolean
}

export function styleDimension({
    width,
    height,
    maxWidth = "100vw",
    maxHeight,
    minWidth,
    minHeight,
    fullsize = false,
    fullwidth = false,
    fullheight = false,
}: DimensionStyleProps) {
    const style: React.CSSProperties = {
        width,
        height,
        maxWidth,
        maxHeight,
        minWidth,
        minHeight,
    }
    if (fullsize || fullwidth) style.width = "100%"
    if (fullsize || fullheight) style.height = "100%"
    return style
}
