import { NumberWithUnit } from "./common.js"
import Style from "../css/dimension.module.css"

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
    /** If true, set 100% to width or height depending if we are in landscape or portrait mode. */
    fullwide?: boolean
    /** If true, set 100% to width or height depending if we are in portrait or landscape mode. */
    fullnarrow?: boolean
}

export function styleDimension({
    width,
    height,
    maxWidth = "100vw",
    maxHeight,
    minWidth,
    minHeight,
}: DimensionStyleProps) {
    const style: React.CSSProperties = {
        width,
        height,
        maxWidth,
        maxHeight,
        minWidth,
        minHeight,
    }
    return style
}

export function classnameDimension({
    fullsize = false,
    fullwidth = false,
    fullheight = false,
    fullwide = false,
    fullnarrow = false,
}: DimensionStyleProps): string {
    if (fullsize) return Style.fullsize

    const classes: string[] = []
    if (fullwidth) classes.push(Style.fullwidth)
    if (fullheight) classes.push(Style.fullheight)
    if (fullwide) classes.push(Style.fullwide)
    if (fullnarrow) classes.push(Style.fullnarrow)
    return classes.join(" ")
}
