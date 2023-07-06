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
}

export function styleChild({
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
}: ChildStyleProps) {
    const style: React.CSSProperties = {}
    if (flex) style.flex = flex
    if (flexGrow) style.flexGrow = flexGrow
    if (flexShrink) style.flexShrink = flexShrink
    if (flexBasis) style.flexBasis = flexBasis
    return style
}
