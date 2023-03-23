import React from "react"
import { Theme } from "../../theme"
import Classes from "./Center.module.css"

const $ = Theme.classNames

export interface ViewCenterProps {
    className?: string
    children: React.ReactNode
}

export function ViewCenter({ className, children }: ViewCenterProps) {
    return <div className={$.join(className, Classes.Center)}>{children}</div>
}
