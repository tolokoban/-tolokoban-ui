import * as React from "react"

import { Theme } from "../../theme/index.js"
import { ChildStyleProps, styleChild } from "../../theme/styles/child.js"
import {
    DimensionStyleProps,
    styleDimension,
} from "../../theme/styles/dimension.js"
import {
    PositionStyleProps,
    stylePosition,
} from "../../theme/styles/position.js"
import { ViewWithValue } from "../../types.js"

import Styles from "./InputColor.module.css"
import { ViewLabel } from "../Label"

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
    /** If defined,  label will be added to the input. */
    label?: React.ReactNode
}

export function ViewInputColor(props: InputColorProps) {
    const ref = React.useRef<null | HTMLInputElement>(null)
    const refEditorOpen = React.useRef(false)
    const { value, onChange, size = "M" } = props
    console.log("<ViewInputColor />", value)
    const style: React.CSSProperties = {
        ...styleDimension(props),
        ...stylePosition(props),
        ...styleChild(props),
        fontSize: SIZES[size],
        backgroundColor: value,
    }
    const handleChange = React.useCallback(
        (evt: React.ChangeEvent<HTMLInputElement>) => {
            evt.stopPropagation()
            evt.preventDefault()
            if (!refEditorOpen.current) return

            const newColor = evt.target.value
            console.log("🚀 [InputColor] newColor = ", newColor) // @FIXME: Remove this line written on 2024-11-01 at 10:20
            onChange?.(newColor)
            refEditorOpen.current = false
        },
        [onChange]
    )
    const handleClick = () => {
        const input = ref.current
        if (!input) return

        refEditorOpen.current = true
        input.click()
    }
    return (
        <ViewLabel value={props.label}>
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
        </ViewLabel>
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
