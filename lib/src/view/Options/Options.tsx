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

import Styles from "./Options.module.css"

export type ViewOptionsProps<T> = ViewWithValue<T> &
    CommonProps & {
        className?: string
        /** Optional label to display above the options. */
        label?: string
        color?: OpaqueColorName
        colorSelection?: OpaqueColorName
        children: Array<React.ReactElement<ViewOptionsItemProps<T>>>
    }

export type ViewOptionsItemProps<T> = {
    key: T
    children: Children
}

const $ = Theme.classNames

export function ViewOptions<T>(props: ViewOptionsProps<T>) {
    const { label, children } = props
    const [value, setValue] = useChangeableValue(props)
    return (
        <ViewLabel value={label} fullwidth={props.fullwidth}>
            <div
                className={$.join(
                    Styles.Options,
                    props.className,
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    classnameCommon(props)
                )}
                style={{ ...styleCommon(props), ...styleColor(props) }}
            >
                {children.map((child) => {
                    const key =
                        typeof value === "number"
                            ? parseFloat(`${child.key ?? "0"}`)
                            : child.key
                    return key === value ? (
                        <div
                            className={$.join(Styles.button, Styles.selected)}
                            key={key}
                            style={styleColor({ color: props.colorSelection })}
                        >
                            {child}
                        </div>
                    ) : (
                        <ViewTouchable
                            className={$.join(Styles.button, Styles.unselected)}
                            key={key}
                            style={styleColor({ color: props.color })}
                            onClick={() => setValue(key as T)}
                        >
                            {child}
                        </ViewTouchable>
                    )
                })}
            </div>
        </ViewLabel>
    )
}
