import React from "react"
import { Theme, ViewPanel } from "@tolokoban/ui"
import Code from "../Code"
import Style from "./ViewDemo.module.css"

const $ = Theme.classNames

export interface ViewDemoProps {
    className?: string
    description: string
    example: string
    children: React.ReactNode
}

export default function ViewDemo({
    className,
    example,
    children,
}: ViewDemoProps) {
    return (
        <ViewPanel color="neutral-4" padding="M" margin="M">
            <div className={$.join(className, Style.ViewDemo)}>{children}</div>
            <hr />
            <Code>{example}</Code>
        </ViewPanel>
    )
}
