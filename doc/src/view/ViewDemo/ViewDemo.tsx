import React from "react"
import { Theme } from "@tolokoban/ui"
import Style from "./ViewDemo.module.css"

const $ = Theme.classNames

export interface ViewDemoProps {
    className?: string
    description: string
    example: string
    children: React.ReactNode
}

export default function ViewDemo({ className, children }: ViewDemoProps) {
    return <div className={$.join(className, Style.ViewDemo)}>{children}</div>
}
