import React, { useId } from "react"

import {
    ColorStyleProps,
    SpaceStyleProps,
    styleColor,
    styleSpace,
    Theme,
} from "../../theme"
import {
    DimensionStyleProps,
    styleDimension,
} from "../../theme/styles/dimension"
import { PositionStyleProps, stylePosition } from "../../theme/styles/position"
import { ChildStyleProps, styleChild } from "../../theme/styles/child"

import Styles from "./Tooltip.module.css"

export interface tooltipProps
    extends ChildStyleProps,
        PositionStyleProps,
        DimensionStyleProps,
        ColorStyleProps,
        SpaceStyleProps {
    className?: string
    content?: React.ReactNode
    children?: React.ReactNode
    attach?: "top" | "top-left" | "top-right"
}

export function ViewTooltip(props: tooltipProps) {
    const id = useId()
    const styleContainer: React.CSSProperties = {
        ...stylePosition(props),
        ...styleChild(props),
    }
    const styleContent: React.CSSProperties = {
        ...styleDimension(props),
        ...styleColor({
            shadow: 3,
            color: "primary-8",
            ...props,
        }),
        ...styleSpace({
            padding: "M",
            borderRadius: "S",
            ...props,
        }),
    }
    styleContent["--custom-back"] = styleContent.backgroundColor
    const { content, children, attach = "top" } = props

    return (
        <div
            className={Theme.classNames.join(props.className, Styles.tooltip)}
            style={styleContainer}
            aria-details={id}
        >
            {children}
            {content && (
                <div
                    className={[Styles.content, Styles[attach]].join(" ")}
                    style={styleContent}
                    id={id}
                >
                    {content}
                </div>
            )}
        </div>
    )
}
