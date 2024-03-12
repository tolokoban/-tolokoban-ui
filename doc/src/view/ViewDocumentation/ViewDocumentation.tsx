import React from "react"
import { Theme, ViewPanel } from "@tolokoban/ui"
import Style from "./ViewDocumentation.module.css"

const $ = Theme.classNames

export interface ViewDocumentationProps {
    className?: string
    title: React.ReactNode
    children: React.ReactNode
}

export default function ViewDocumentation({
    className,
    title,
    children,
}: ViewDocumentationProps) {
    return (
        <div className={$.join(className, Style.ViewDocumentation)}>
            <ViewPanel margin={0} padding="M" color="primary-2">
                {title}
            </ViewPanel>
            <ViewPanel margin={0} padding="M" overflow="auto">
                {children}
            </ViewPanel>
        </div>
    )
}
