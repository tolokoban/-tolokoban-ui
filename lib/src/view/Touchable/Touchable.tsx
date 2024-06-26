import React from "react"

import { Theme } from "../../theme/index.js"
import { Children } from "../../types.js"

import Styles from "./Touchable.module.css"

const $ = Theme.classNames

export interface ViewTouchableProps<T> {
    className?: string
    children: Children
    /**
     * HTML tooltip, used in the `title` attribute.
     */
    style?: React.CSSProperties
    tooltip?: string
    /** Anything you want to be dispatched with the `onClick` event. */
    tag?: T
    /**
     * Event dispatched when a click is detected on the component.
     * @param tag Any piece of data associated to this component.
     */
    onClick?(tag: T | undefined): void
}

export function ViewTouchable<T>({
    className,
    children,
    tag,
    style,
    tooltip,
    onClick,
}: ViewTouchableProps<T>) {
    if (!onClick) return <>{children}</>

    return (
        <div
            className={$.join(className, Styles.Touchable)}
            title={tooltip}
            onClick={() => onClick(tag)}
            style={style}
        >
            {children}
        </div>
    )
}
