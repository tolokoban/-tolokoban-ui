import React from "react"
import { Theme } from "../../theme"
import Classes from "./Button.module.css"
import { Circumference, OpaqueColorName } from "../../types"
import {
    DimensionStyleProps,
    styleDimension,
} from "../../theme/styles/dimension"
import {
    cssForColor,
    cssForColorOn,
    cssForGaps,
} from "../../theme/styles/styles"

const $ = Theme.classNames

export type ViewButtonProps = {
    className?: string
    /**
     * Default to __filled__.
     */
    variant?: "elevated" | "filled" | "outlined" | "text"
    children: React.ReactNode
    onClick(this: void): void
    enabled?: boolean
    borderRadius?: Circumference
    color?: OpaqueColorName
    margin?: Circumference
    padding?: Circumference
} & DimensionStyleProps

export function ViewButton({
    className,
    children,
    onClick,
    enabled = true,
    borderRadius = ".5em",
    color = "secondary-5",
    margin = ["S", "M"],
    padding = [0, "M"],
    width = "auto",
    height = "2em",
    variant: type = "elevated",
}: ViewButtonProps) {
    const style: React.CSSProperties = {
        "--custom-color-main-alpha": cssForColor(color, 0.5),
        "--custom-color-main": cssForColor(color),
        "--custom-color-text": cssForColorOn(color),
        margin: cssForGaps(margin),
        width,
        height,
        borderRadius: cssForGaps(borderRadius),
    }
    return (
        <button
            style={style}
            className={$.join(className, Classes.Button, Classes[type])}
            disabled={!enabled}
            type="button"
            onClick={onClick}
        >
            {(type === "filled" || type === "elevated") && (
                <div className={Classes.glow}></div>
            )}
            <div
                className={Classes.content}
                style={{
                    ...styleDimension({ width, height }),
                    borderRadius: cssForGaps(borderRadius),
                    padding: cssForGaps(padding),
                }}
            >
                {children}
            </div>
        </button>
    )
}

export function makeCustomButton(
    defaultProps: Partial<ViewButtonProps>
): (props: ViewButtonProps) => JSX.Element {
    return (props: ViewButtonProps) =>
        ViewButton({
            ...defaultProps,
            ...props,
        })
}
