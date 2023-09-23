import React from "react"

import { Theme } from "../../theme"
import { Children, Circumference } from "../../types"
import { ColorStyleProps, styleColor } from "../../theme/styles/color"
import { SpaceStyleProps, styleSpace } from "../../theme/styles/space"
import { OverflowStyleProps, styleOverflow } from "../../theme/styles/overflow"
import { DisplayStyleProps, styleDisplay } from "../../theme/styles/display"
import {
    DimensionStyleProps,
    styleDimension,
} from "../../theme/styles/dimension"
import { cssForGaps } from "../../theme/styles/styles"
import { PositionStyleProps, stylePosition } from "../../theme/styles/position"
import { ChildStyleProps, styleChild } from "../../theme/styles/child"

import Styles from "./Panel.module.css"

const $ = Theme.classNames

export type ViewPanelProps = {
    className?: string
    children?: Children
    /** CSS `borderRadius` property. */
    borderRadius?: Circumference
    /** CSS `fontSize` property. */
    fontSize?: string
    /**If defined, the panel will keep `width / height = aspectRatio`. */
    aspectRatio?: number
} & ColorStyleProps &
    SpaceStyleProps &
    DimensionStyleProps &
    OverflowStyleProps &
    DisplayStyleProps &
    PositionStyleProps &
    ChildStyleProps

export function ViewPanel(props: ViewPanelProps) {
    const {
        className,
        children,
        borderRadius,
        fontSize,
        aspectRatio = 0,
    } = props
    const style: React.CSSProperties = {
        fontSize,
        ...styleColor(props),
        ...styleSpace(props),
        ...styleDimension(props),
        ...styleOverflow(props),
        ...styleDisplay(props),
        ...stylePosition(props),
        ...styleChild(props),
    }
    if (aspectRatio > 0) style["--custom-aspect-ratio"] = aspectRatio
    if (borderRadius) style.borderRadius = cssForGaps(borderRadius)
    return (
        <div className={$.join(className, Styles.Panel)} style={style}>
            {children}
        </div>
    )
}

export function makeCustomPanel(
    defaultProps: Partial<ViewPanelProps>
): (props: ViewPanelProps) => JSX.Element {
    return (props: ViewPanelProps) =>
        ViewPanel({
            ...defaultProps,
            ...props,
        })
}
