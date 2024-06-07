import * as React from "react"

import { Theme } from "../../theme/index.js"
import { ChildStyleProps, styleChild } from "../../theme/styles/child.js"
import { ColorStyleProps, styleColor } from "../../theme/styles/color.js"
import {
    DimensionStyleProps,
    classnameDimension,
    styleDimension,
} from "../../theme/styles/dimension.js"
import { DisplayStyleProps, styleDisplay } from "../../theme/styles/display.js"
import {
    OverflowStyleProps,
    styleOverflow,
} from "../../theme/styles/overflow.js"
import {
    PositionStyleProps,
    stylePosition,
} from "../../theme/styles/position.js"
import { SpaceStyleProps, styleSpace } from "../../theme/styles/space.js"
import { cssForGaps } from "../../theme/styles/styles.js"
import { Children, Circumference } from "../../types.js"

import Styles from "./Panel.module.css"

const $ = Theme.classNames

export type ViewPanelProps = {
    className?: string
    id?: string
    children?: Children
    /** CSS `borderRadius` property. */
    borderRadius?: Circumference
    /** CSS `fontSize` property. */
    fontSize?: string
    /** If defined, the panel will keep `width / height = aspectRatio`. */
    aspectRatio?: number
    /** Added to attribute "title". */
    tooltip?: string
    /** Used for focus. */
    tabIndex?: number
} & ColorStyleProps &
    SpaceStyleProps &
    DimensionStyleProps &
    OverflowStyleProps &
    DisplayStyleProps &
    PositionStyleProps &
    ChildStyleProps

export function ViewPanel(props: ViewPanelProps) {
    const {
        id,
        className,
        children,
        borderRadius,
        fontSize,
        tooltip,
        tabIndex,
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
    if (borderRadius) style.borderRadius = cssForGaps(borderRadius)
    return (
        <div
            id={id}
            className={$.join(
                className,
                Styles.Panel,
                classnameDimension(props)
            )}
            style={style}
            title={tooltip}
            tabIndex={tabIndex}
        >
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
