import React from "react"

import { Theme } from "../../theme"
import {
    DimensionStyleProps,
    styleDimension,
} from "../../theme/styles/dimension"
import { PositionStyleProps, stylePosition } from "../../theme/styles/position"
import { ChildStyleProps, styleChild } from "../../theme/styles/child"

import Styles from "./InputColor.module.css"
import { ViewWithValue } from "../../types"

const SIZES = {
    XS: "75%",
    S: "100%",
    M: "150%",
    L: "200%",
    XL: "300%",
}

export interface InputColorProps
    extends ViewWithValue<string>,
        ChildStyleProps,
        PositionStyleProps,
        DimensionStyleProps {
    className?: string
    size?: keyof typeof SIZES
}

export function ViewInputColor(props: InputColorProps) {
    const ref = React.useRef<null | HTMLInputElement>(null)
    const { value, onChange, size = "M" } = props
    const style: React.CSSProperties = {
        ...styleDimension(props),
        ...stylePosition(props),
        ...styleChild(props),
        fontSize: SIZES[size],
        backgroundColor: value,
    }
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange(evt.target.value)
    }
    const handleClick = () => {
        const input = ref.current
        if (!input) return

        input.click()
    }
    return (
        <button
            className={Theme.classNames.join(
                props.className,
                Styles.InputColor
            )}
            style={style}
            onClick={handleClick}
        >
            <input
                ref={ref}
                type="color"
                value={sanitizeColor(value)}
                onChange={handleChange}
            />
        </button>
    )
}

/**
 * Input cannot deal with short colors (#cd9, for instance).
 * We will produce only colors with 7 characters.
 */
function sanitizeColor(value: string): string {
    if (!value.startsWith("#")) return value
    if (value.length === 7) return value

    let color = "#"
    for (const digit of value) {
        if (digit !== "#") {
            color = `${color}${digit}${digit}`
        }
    }
    return color
}
