import * as React from "react"

import { Theme } from "../../theme/index.js"
import { Children, ColorName } from "../../types.js"
import { CommonProps } from "../../theme/styles/common.js"

import Styles from "./Label.module.css"

const $ = Theme.classNames

export type ViewLabelProps = CommonProps & {
    /** Text to display as label. */
    value?: React.ReactNode
    /** Tooltip */
    title?: string
    /** Color of the label. Default to `currentColor`. */
    color?: ColorName
    /**
     * Content this label describes.
     * When the label is clicked, the content will get focus.
     */
    children?: Children
}

export function ViewLabel({
    color,
    className,
    value,
    title,
    children,
}: ViewLabelProps): JSX.Element {
    const id = `labelled/${React.useId()}`
    const handleMount = (div: HTMLDivElement | null) => {
        if (!div) return

        const child = div.querySelector(
            "input,textarea,button,meter,output,progress,select"
        )
        if (!child) return

        child.setAttribute("id", id)
    }
    if (!value) return <>{children}</>

    const style: React.CSSProperties = {}
    if (color) style.color = `var(--theme-color-${color})`
    return (
        <>
            <label
                htmlFor={id}
                title={title}
                className={$.join(className, Styles.Label)}
                style={style}
            >
                {value}
            </label>
            {children && (
                <div ref={handleMount} className={Styles.LabelContent}>
                    {children}
                </div>
            )}
        </>
    )
}
