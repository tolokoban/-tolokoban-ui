import React from "react"

import { Theme } from "../../theme"
import { Children } from "../../types"

import Styles from "./Read.module.css"

const $ = Theme.classNames

export interface ViewReadProps {
    className?: string
    children: Children
}

export function ViewRead({ className, children }: ViewReadProps) {
    return <div className={$.join(className, Styles.Read)}>{children}</div>
}
