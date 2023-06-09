import React from "react"
import { Theme } from "../../theme"
import Style from "./Touchable.module.css"

const $ = Theme.classNames

export interface ViewTouchableProps<T> {
    className?: string
    children: React.ReactNode
    /**
     * HTML tooltip, used in the `title` attribute.
     */
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
    tooltip,
    onClick,
}: ViewTouchableProps<T>) {
    if (!onClick) return <>{children}</>

    return (
        <div
            className={$.join(className, Style.Touchable)}
            title={tooltip}
            onClick={() => onClick(tag)}
        >
            {children}
        </div>
    )
}
