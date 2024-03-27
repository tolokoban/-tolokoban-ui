import * as React from "react"

import { Theme } from "../../theme/index.js"
import { ChildStyleProps, styleChild } from "../../theme/styles/child.js"
import { ColorName } from "../../types.js"
import { GenericIconProps } from "../icons/generic/index.js"

import Styles from "./FloatingButton.module.css"

const SIZES: Record<string, number> = {
    XXS: 0.5,
    XS: 1,
    S: 1.5,
    M: 2,
    L: 3,
    XL: 4,
    XXL: 8,
}

function sizeToFontSize(value: string): number {
    return SIZES[value] ?? SIZES.M
}
export interface FloatingButtonProps
    extends ChildStyleProps,
        Partial<Omit<GenericIconProps, "value" | "color" | "backColor">> {
    className?: string
    icon: React.FC<GenericIconProps>
    color?: ColorName
    colorHover?: ColorName
    size?: keyof typeof SIZES
    enabled?: boolean
}

export function ViewFloatingButton(props: FloatingButtonProps) {
    const {
        color = "secondary-5",
        colorHover = props.color ?? "secondary-6",
        size = "M",
        enabled = true,
    } = props
    const fontSize = sizeToFontSize(size)
    const style: React.CSSProperties = {
        ...styleChild(props),
        width: `${fontSize}em`,
        height: `${fontSize}em`,
    }
    if (color) {
        style["--custom-color-back"] = `var(--theme-color-${color})`
        style["--custom-color-text"] = `var(--theme-color-on-${color})`
    }
    if (colorHover) {
        style["--custom-color-hover-back"] = `var(--theme-color-${colorHover})`
        style[
            "--custom-color-hover-text"
        ] = `var(--theme-color-on-${colorHover})`
    }
    const Icon = props.icon
    const iconProps = { ...props, size: `${fontSize * 0.75}em` }
    delete iconProps.color
    delete iconProps.textColor
    // Prevent click to be emited twice.
    delete iconProps.onClick
    return (
        <button
            className={Theme.classNames.join(
                props.className,
                Styles.FloatingButton
            )}
            disabled={!enabled}
            type="button"
            onClick={props.onClick}
            style={style}
        >
            <>
                <Icon {...iconProps} />
            </>
        </button>
    )
}
