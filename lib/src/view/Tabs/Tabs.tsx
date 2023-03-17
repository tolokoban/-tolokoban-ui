import React from "react"
import { Theme } from "../../theme"
import Style from "./Tabs.module.css"
import { Tab, TabProps } from "../Tab"

const $ = Theme.classNames

export type TabsProps = {
    className?: string
    value?: string
    vertical?: boolean
    onChange?(value?: string): void
    children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]
}

export function Tabs({
    className,
    children,
    vertical = false,
    value,
    onChange,
}: TabsProps) {
    const tabs: Array<React.ReactElement<TabProps> & { key: string }> =
        addMissingKeys(children)
    const [tabKey, setTabKey] = React.useState(value ?? tabs[0]?.key ?? "Tab#0")
    const tab = tabs.find((item) => item.key === tabKey)
    return (
        <div
            className={$.join(
                className,
                Style.Tabs,
                vertical && Style.vertical
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
    tabs: Array<React.ReactElement<TabProps> & { key: string }>,
    tab: (React.ReactElement<TabProps> & { key: string }) | undefined
): Array<React.ReactElement<TabProps> & { key: string }> {
    if (!tab) return tabs

    const index = tabs.indexOf(tab)
    if (index < 0) return tabs

    return [...tabs.slice(index), ...tabs.slice(0, index)]
}

function addMissingKeys(
    children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]
): Array<React.ReactElement<TabProps> & { key: string }> {
    const rawTabs: React.ReactElement<TabProps>[] = Array.isArray(children)
        ? children
        : [children]
    return rawTabs.map((tab, index) => (
        <Tab {...tab.props} key={tab.key ?? `Tab#${index}`}>
            {tab.props.children}
        </Tab>
    )) as Array<React.ReactElement<TabProps> & { key: string }>
}
