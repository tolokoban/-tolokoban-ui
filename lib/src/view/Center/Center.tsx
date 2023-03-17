import React from "react"
import { Theme } from "../../theme"
import Classes from "./Center.module.css"

const $ = Theme.classNames

export interface CenterProps {
    className?: string
    children: React.ReactNode
}

export function Center({ className, children }: CenterProps) {
    return <div className={$.join(className, Classes.Center)}>{children}</div>
}
