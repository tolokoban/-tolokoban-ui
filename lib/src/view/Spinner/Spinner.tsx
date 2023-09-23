import React from "react"

import { ColorStyleProps, styleColor } from "../../theme/styles/color"
import IconLoading from "../icons/IconLoading"
import { Children } from "../../types"

import Styles from "./Spinner.module.css"

export type ViewSpinnerProps = {
    className?: string
    /** Set the spinnin icon. Default to `IconLoading`. */
    icon?: React.FC<{ animate?: boolean }>
    /**
     * `horizontal`: the spinning icon and the label are on
     * the same horizontal line. Their height is the same.
     * `vertical`: the spinning icon is above the label and
     * is at least twice bigger.
     */
    orientation?: "horizontal" | "vertical"
    children?: Children
} & ColorStyleProps

export function ViewSpinner({
    className,
    icon = IconLoading,
    orientation = "horizontal",
    children,
    ...props
}: ViewSpinnerProps) {
    const SpinningIcon = icon
    return (
        <div
            className={`${
                orientation === "horizontal"
                    ? Styles.SpinnerHorizontal
                    : Styles.SpinnerVertical
            } ${className ?? ""}`}
            style={styleColor(props)}
        >
            <SpinningIcon animate={true} />
            {children && <div>{children}</div>}
        </div>
    )
}
