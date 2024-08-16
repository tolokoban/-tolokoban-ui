import * as React from "react"

import { Theme } from "@/theme"
import { CommonProps, styleCommon } from "@/theme/styles/common"

import Styles from "./Stack.module.css"

const $ = Theme.classNames

export type ViewStackProps = CommonProps & {
    /**
     * The key or the list of keys you want to be visible.
     * Children without key will always be visible.
     */
    value?: string | string[]
    children?: React.JSX.Element[]
}

export function ViewStack(props: ViewStackProps): JSX.Element {
    const { value, children } = props
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const items = React.useMemo(() => {
        const values: Set<string> = new Set(
            (() => {
                if (!value) return []

                return Array.isArray(value) ? value : [value]
            })()
        )
        return (children ?? []).filter((child) => {
            if (!child.key) {
                // Children without a key are always displayed.
                return true
            }

            return values.has(child.key)
        })
    }, [children, value])
    return (
        <div className={$.join(props.className, Styles.stack)} style={style}>
            {items}
        </div>
    )
}