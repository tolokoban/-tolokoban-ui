import React from "react"

import { Theme } from "../../theme/index.js"

import Styles from "./Tab.module.css"

const $ = Theme.classNames

export interface ViewTabProps {
    className?: string
    /** Label of the tab. Displayed in the header. */
    label: React.ReactNode
    children?: React.ReactNode
}

export function ViewTab({ className, children }: ViewTabProps) {
    return <div className={$.join(className, Styles.Tab)}>{children}</div>
}
