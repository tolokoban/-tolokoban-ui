import * as React from "react"

import { Theme } from "../../theme/index.js"
import { ViewTab, ViewTabProps } from "../Tab"

import Styles from "./Tabs.module.css"

const $ = Theme.classNames

export type ViewTabsProps = {
    className?: string
    /** Key of the active Tab. */
    value?: string
    /**
     * * `horizontal`: the tabs' headers are on the top.
     * * `vertical`: the tabs' headers are on the left.
     */
    orientation?: "horizontal" | "vertical"
    /**
     * Callback to call when a new tab is active.
     * @param value Key of the newly activated tab.
     */
    onChange?(value?: string): void
    children:
        | React.ReactElement<ViewTabProps>
        | React.ReactElement<ViewTabProps>[]
}

export function ViewTabs({
    className,
    children,
    orientation = "horizontal",
    value,
    onChange,
}: ViewTabsProps) {
    const tabs: Array<React.ReactElement<ViewTabProps> & { key: string }> =
        addMissingKeys(children)
    const [tabKey, setTabKey] = React.useState(value ?? tabs[0]?.key ?? "Tab#0")
    const tab = tabs.find((item) => item.key === tabKey)
    return (
        <div
            className={$.join(
                className,
                Styles.Tabs,
                orientation === "vertical" && Styles.vertical
            )}
        >
            <header>
                {wrap(tabs, tab).map((item) => {
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
