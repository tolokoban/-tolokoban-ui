import React from "react"

import { Children } from "../../../types.js"
import IconCheck from "../../icons/IconCheck.js"
import { ViewLabel } from "../../Label/index.js"
import { ViewTouchable } from "../../Touchable/index.js"
import { Theme } from "@/theme"

import Styles from "./OptionsCommon.module.css"

/**
 * - `"compact"`: the items are glued together in a single rounded box.
 * - `"chips"`: each item is a separate chip with its own shadow,
 *   and the selected ones start with a check mark.
 */
export type ViewOptionsVariant = "compact" | "chips"

const $ = Theme.classNames

export interface OptionsFrameProps {
    className?: string
    style?: React.CSSProperties
    /**
     * Colors of the frame (usually `styleColor(props)`).
     * Ignored in the `"chips"` variant, because the frame must stay
     * transparent: only the chips are colored.
     */
    colorStyle?: React.CSSProperties
    label?: string
    fullwidth?: boolean
    variant?: ViewOptionsVariant
    children: React.ReactNode
}

/**
 * Container shared by `<ViewOptions>` and `<ViewOptionsMultiple>`.
 */
export function OptionsFrame({
    className,
    style,
    colorStyle,
    label,
    fullwidth,
    variant = "compact",
    children,
}: OptionsFrameProps) {
    return (
        <ViewLabel value={label} fullwidth={fullwidth}>
            <div
                className={$.join(Styles.frame, Styles[variant], className)}
                style={
                    variant === "chips" ? style : { ...style, ...colorStyle }
                }
            >
                {children}
            </div>
        </ViewLabel>
    )
}

export interface OptionsItemProps {
    className?: string
    style?: React.CSSProperties
    variant?: ViewOptionsVariant
    selected: boolean
    children: Children
    /** If undefined, the item is not clickable. */
    onClick?(): void
    onDoubleClick?(): void
}

/**
 * Item (button or chip) shared by `<ViewOptions>` and `<ViewOptionsMultiple>`.
 */
export function OptionsItem({
    className,
    style,
    variant = "compact",
    selected,
    children,
    onClick,
    onDoubleClick,
}: OptionsItemProps) {
    const fullClassName = $.join(
        Styles.item,
        Styles[variant],
        selected ? Styles.selected : Styles.unselected,
        className
    )
    const content =
        variant === "chips" && selected ? (
            <>
                <IconCheck className={Styles.check} size="1.25em" />
                <div>{children}</div>
            </>
        ) : (
            children
        )
    if (!onClick && !onDoubleClick) {
        return (
            <div className={fullClassName} style={style}>
                {content}
            </div>
        )
    }
    return (
        <ViewTouchable
            className={fullClassName}
            style={style}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
        >
            {content}
        </ViewTouchable>
    )
}
