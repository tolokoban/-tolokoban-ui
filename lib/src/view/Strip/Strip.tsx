import * as React from "react"

import { classnameCommon, Theme } from "../../theme/index"
import { ChildStyleProps, styleChild } from "../../theme/styles/child"
import { ColorStyleProps, styleColor } from "../../theme/styles/color"
import {
    DimensionStyleProps,
    styleDimension,
} from "../../theme/styles/dimension"
import { PositionStyleProps, stylePosition } from "../../theme/styles/position"
import { Children } from "../../types"

import Styles from "./Strip.module.css"

export interface StripProps
    extends ChildStyleProps,
        PositionStyleProps,
        DimensionStyleProps,
        ColorStyleProps {
    className?: string
    /** Default to "column". */
    orientation?: "column" | "row"
    /**
     * `template` should have as many characters as
     * the number of items of `children`.
     * If the children is a digit (1 to 9), the child
     * must expand its size to this fraction.
     *
     * for instance, "-1-2--" means:
     * `auto minmax(0, 1fr) auto minmax(0, 2fr) auto auto`.
     *
     * Default to "-1".
     */
    template?: string
    children: Children
}

export function ViewStrip(props: StripProps) {
    const { orientation = "column", template = "-1" } = props
    const style: React.CSSProperties = {
        ...styleDimension(props),
        ...stylePosition(props),
        ...styleChild(props),
        ...styleColor(props),
    }
    const templateDef = template
        .split("")
        .map((c) => ("123456789".includes(c) ? `minmax(0, ${c}fr)` : "auto"))
        .join(" ")
    if (orientation === "row") {
        style.gridTemplateColumns = templateDef
        style.gridAutoColumns = "auto"
        style.gridTemplateRows = "minmax(0, 1fr)"
    } else {
        style.gridTemplateRows = templateDef
        style.gridAutoRows = "auto"
        style.gridTemplateColumns = "minmax(0, 1fr)"
    }
    return (
        <div
            className={Theme.classNames.join(
                props.className,
                Styles.Strip,
                Styles[orientation],
                classnameCommon(props)
            )}
            style={style}
        >
            {props.children}
        </div>
    )
}
