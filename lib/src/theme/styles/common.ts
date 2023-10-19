import { ChildStyleProps, styleChild } from "./child"
import { DimensionStyleProps, styleDimension } from "./dimension"
import { PositionStyleProps, stylePosition } from "./position"
import { SpaceStyleProps, styleSpace } from "./space"

export type CommonProps = {
    /**
     * If defined, `className` will be added to the component.
     */
    className?: string
} & ChildStyleProps &
    DimensionStyleProps &
    PositionStyleProps &
    SpaceStyleProps

export function styleCommon(props: CommonProps): React.CSSProperties {
    return {
        ...styleChild(props),
        ...styleDimension(props),
        ...stylePosition(props),
        ...styleSpace(props),
    }
}

type Unit =
    | "%"
    | "cm"
    | "mm"
    | "Q"
    | "in"
    | "pc"
    | "pt"
    | "px"
    | "em"
    | "ex"
    | "ch"
    | "rem"
    | "lh"
    | "rlh"
    | "vw"
    | "vh"
    | "vmin"
    | "vmax"
    | "vb"
    | "vi"
    | "svw"
    | "svh"
    | "lvw"
    | "lvh"
    | "dvw"
    | "dvh"

export type NumberWithUnit =
    | "0"
    | "auto"
    | "max-content"
    | "min-content"
    | `fit-content(${number}${Unit})`
    | `${number}${Unit}`
