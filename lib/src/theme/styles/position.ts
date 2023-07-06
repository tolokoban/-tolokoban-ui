export interface PositionStyleProps {
    position?:
        | "static"
        | "relative"
        | "absolute"
        | "fixed"
        | "sticky"
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
    left?: string
    top?: string
    right?: string
    bottom?: string
    zIndex?: number | "auto"
}

export function stylePosition({
    position,
    left,
    top,
    right,
    bottom,
    zIndex,
}: PositionStyleProps): React.CSSProperties {
    return { position, left, top, right, bottom, zIndex }
}
