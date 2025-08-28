import * as React from "react"

import { classnameCommon, Theme } from "../../theme/index.js"
import { ViewTab, ViewTabProps } from "../Tab"

import Styles from "./Tabs.module.css"
import {
    DimensionStyleProps,
    styleDimension,
} from "../../theme/styles/dimension"
import { ColorStyleProps, styleColor } from "../../theme/styles/color"
import { ColorName } from "@/types"

const $ = Theme.classNames

export type ViewTabsProps = ColorStyleProps &
    DimensionStyleProps & {
        className?: string
        /** Key of the active Tab. */
        value?: string
        /**
         * * `horizontal`: the tabs' headers are on the top.
         * * `vertical`: the tabs' headers are on the left.
         */
        orientation?: "horizontal" | "vertical"
        /**
         * If true, the tabs are displayed on the right or on the bottom,
         * depending on the `orientation`.
         * Defaults to `false`.
         */
        opposite?: boolean
        /**
         * Callback to call when a new tab is active.
         * @param value Key of the newly activated tab.
         */
        onChange?(this: void, value?: string): void
        /**
         * Color of the selection.
         * Defaults to `primary-5`.
         */
        colorAccent?: ColorName
        /**
         * CSS size of the outline.
         * Defaults to `0`.
         */
        outline?: string
        /**
         * CSS size of the line on the selected tab.
         * Defaults to `outline` or `4px`.
         */
        highlight?: string
        children:
            | React.ReactElement<ViewTabProps>
            | React.ReactElement<ViewTabProps>[]
    }

export function ViewTabs(props: ViewTabsProps) {
    const {
        className,
        children: rawChildren,
        orientation = "horizontal",
        value,
        onChange,
        color = "neutral-3",
        colorAccent = "primary-5",
        outline = "0",
        highlight,
        opposite,
    } = props
    const children: React.ReactElement<ViewTabProps>[] =
        filterChildren(rawChildren)
    const tabs: Array<React.ReactElement<ViewTabProps> & { key: string }> =
        addMissingKeys(children)
    const [tabKey, setTabKey] = React.useState(value ?? tabs[0]?.key ?? "Tab#0")
    const tab = tabs.find((item) => item.key === tabKey)
    console.log("🚀 [Tabs] opposite =", opposite) // @FIXME: Remove this line written on 2025-08-28 at 11:31

    return (
        <div
            style={{
                ...styleDimension(props),
                "--custom-color-back": `var(--theme-color-${color})`,
                "--custom-color-text": `var(--theme-color-on-${color})`,
                "--custom-color-highlight-back": `var(--theme-color-${colorAccent})`,
                "--custom-color-highlight-text": `var(--theme-color-on-${colorAccent})`,
                "--custom-outline": outline,
                "--custom-highlight": highlight ?? outline ?? "4px",
            }}
            className={$.join(
                className,
                Styles.Tabs,
                orientation === "vertical" && Styles.vertical,
                classnameCommon(props)
            )}
        >
            <header className={opposite && Styles.opposite}>
                {tabs.map((item) => {
                    const { key } = item
                    return key === tabKey ? (
                        <div key={key}>{item.props.label}</div>
                    ) : (
                        <button
                            key={key}
                            type="button"
                            onClick={() => {
                                setTabKey(key)
                                onChange?.(key)
                            }}
                        >
                            {item.props.label}
                        </button>
                    )
                })}
            </header>
            <main>{tab?.props.children}</main>
        </div>
    )
}

/**
 * Use this function to always have the selected tab in first position.
 * @param tabs
 * @param tab
 * @returns
 */
function wrap(
    tabs: Array<React.ReactElement<ViewTabProps> & { key: string }>,
    tab: (React.ReactElement<ViewTabProps> & { key: string }) | undefined
): Array<React.ReactElement<ViewTabProps> & { key: string }> {
    if (!tab) return tabs

    const index = tabs.indexOf(tab)
    if (index < 0) return tabs

    return [...tabs.slice(index), ...tabs.slice(0, index)]
}

function addMissingKeys(
    children:
        | React.ReactElement<ViewTabProps>
        | React.ReactElement<ViewTabProps>[]
): Array<React.ReactElement<ViewTabProps> & { key: string }> {
    const rawTabs: React.ReactElement<ViewTabProps>[] = Array.isArray(children)
        ? children
        : [children]
    return rawTabs.map((tab, index) => (
        <ViewTab {...tab.props} key={tab.key ?? `Tab#${index}`}>
            {tab.props.children}
        </ViewTab>
    )) as Array<React.ReactElement<ViewTabProps> & { key: string }>
}

function filterChildren(
    children:
        | React.ReactElement<ViewTabProps>
        | React.ReactElement<ViewTabProps>[]
): React.ReactElement<ViewTabProps>[] {
    if (Array.isArray(children))
        return children.filter((child) => Boolean(child.props.children))

    return children.props.children ? [children] : []
}
