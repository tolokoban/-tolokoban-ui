import React from "react"

import { useChangeableValue } from "../../hooks/changeable-value.js"
import { Children, OpaqueColorName, ViewWithValue } from "../../types.js"
import { ViewLabel } from "../Label/index.js"
import { ViewTouchable } from "../Touchable/index.js"
import {
    CommonProps,
    Theme,
    classnameCommon,
    styleColor,
    styleCommon,
} from "@/theme"

import Styles from "./OptionsMultiple.module.css"

export type ViewOptionsMultipleProps<T> = ViewWithValue<T[]> &
    CommonProps & {
        className?: string
        /** Optional label to display above the options. */
        label?: string
        color?: OpaqueColorName
        colorSelection?: OpaqueColorName
        children: Array<React.ReactElement<ViewOptionsMultipleItemProps<T>>>
    }

export type ViewOptionsMultipleItemProps<T> = {
    key: T
    children: Children
}

const $ = Theme.classNames

export function ViewOptionsMultiple<T extends string>(
    props: ViewOptionsMultipleProps<T>
) {
    const { label, children } = props
    const [values, setValues] = useChangeableValue(props)
    const toggle = (value: T) => {
        const index = values.indexOf(value)
        if (index < 0) {
            setValues([...values, value])
        } else {
            setValues(values.filter((item) => item !== value))
        }
    }
    return (
        <ViewLabel value={label}>
            <div
                className={$.join(
                    Styles.OptionsMultiple,
                    props.className,
                    classnameCommon(props)
                )}
                style={{ ...styleCommon(props), ...styleColor(props) }}
            >
                {children.map((child) => {
                    const key = child.key as T
                    const selected = values.includes(key)
                    return (
                        <ViewTouchable
                            className={$.join(
                                Styles.button,
                                selected ? Styles.selected : Styles.unselected
                            )}
                            key={key}
                            style={styleColor({
                                color: selected
                                    ? props.colorSelection
                                    : props.color,
                            })}
                            onClick={() => toggle(key)}
                        >
                            {child}
                        </ViewTouchable>
                    )
                })}
            </div>
        </ViewLabel>
    )
}
