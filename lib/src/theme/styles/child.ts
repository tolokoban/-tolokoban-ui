type FlexBasisType =
    | `${number}${string}`
    | "auto"
    | "max-content"
    | "min-content"
    | "fit-content"
    | "content"
    | "inherit"
    | "initial"
    | "revert"
    | "revert-layer"
    | "unset"

export interface ChildStyleProps {
    /** CSS `flex` property.. */
    flex?:
        | number
        | `${number}`
        | `${number} ${number}`
        | `${number} ${FlexBasisType}`
        | `${number} ${number} ${FlexBasisType}`
    /** CSS `flexGrow` property. */
    flexGrow?:
        | number
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
    /** CSS `flexShrink` property. */
    flexShrink?:
        | number
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
    /** CSS `flexBasis` property. */
    flexBasis?: FlexBasisType
    /**
     * [grid-row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row) CSS property.
     */
    gridRow?: string
    /**
     * [grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column) CSS property.
     */
    gridColumn?: string
    /**
     * [align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) CSS property.
     */
    alignSelf?:
        | "auto"
        | "normal"
        | "center"
        | "start"
        | "end"
        | "self-start"
        | "self-end"
        | "flex-start"
        | "flex-end"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "stretch"
        | "safe center"
        | "unsafe center"
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
    /**
     * [justify-self](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self) CSS property.
     */
    justifySelf?:
        | "auto"
        | "normal"
        | "stretch"
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "self-start"
        | "self-end"
        | "left"
        | "right"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "safe center"
        | "unsafe center"
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
}

export function styleChild({
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    gridRow,
    gridColumn,
    alignSelf,
    justifySelf,
}: ChildStyleProps) {
    const style: React.CSSProperties = {}
    if (flex) style.flex = flex
    if (flexGrow) style.flexGrow = flexGrow
    if (flexShrink) style.flexShrink = flexShrink
    if (flexBasis) style.flexBasis = flexBasis
    if (typeof gridRow !== "undefined") style.gridRow = gridRow
    if (typeof gridColumn !== "undefined") style.gridColumn = gridColumn
    if (typeof alignSelf !== "undefined") style.alignSelf = alignSelf
    if (typeof justifySelf !== "undefined") style.justifySelf = justifySelf
    return style
}
