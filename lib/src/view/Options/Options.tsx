import React from "react"

import { useChangeableValue } from "../../hooks/changeable-value.js"
import { Children, ViewWithValue } from "../../types.js"
import { ViewLabel } from "../Label/index.js"
import { ViewTouchable } from "../Touchable/index.js"

import Styles from "./Options.module.css"

export type ViewOptionsProps<T> = ViewWithValue<T> & {
    className?: string
    /** Optional label to display above the options. */
    label?: string
    /** If true, set the with to `100%`. */
    wide?: boolean
    children: Array<React.ReactElement<ViewOptionsItemProps<T>>>
}

export type ViewOptionsItemProps<T> = {
    key: T
    children: Children
}

export function ViewOptions<T>(props: ViewOptionsProps<T>) {
    const { label, children } = props
    const [value, setValue] = useChangeableValue(props)
    return (
        <div className={getClassNames(props)}>
            <ViewLabel value={label}>
                <div className="options theme-shadow-button">
                    {children.map((child) => {
                        const key =
                            typeof value === "number"
                                ? parseFloat(`${child.key ?? "0"}`)
                                : child.key
                        return key === value ? (
                            <div
                                className="button selected theme-color-accent-light"
                                key={key}
                            >
                                {child}
                            </div>
                        ) : (
                            <ViewTouchable
                                className="button not-selected theme-color-primary"
                                key={key}
                                onClick={() => setValue(key as T)}
                            >
                                {child}
                            </ViewTouchable>
                        )
                    })}
                </div>
            </ViewLabel>
        </div>
    )
}

function getClassNames<T>(props: ViewOptionsProps<T>): string {
    const classNames = [Styles.Options]
    if (typeof props.className === "string") classNames.push(props.className)
    if (props.wide === true) classNames.push(Styles.OptionsWide)

    return classNames.join(" ")
}
