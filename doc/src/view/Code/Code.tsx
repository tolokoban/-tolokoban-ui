import React from "react"
import { Theme, ViewButton, IconArrowRight, IconArrowDown } from "@tolokoban/ui"
import Style from "./Code.module.css"

const $ = Theme.classNames

export interface CodeProps {
    className?: string
    children: string
}

export default function Code({ className, children }: CodeProps) {
    const [expanded, setExpanded] = React.useState(false)
    return (
        <div className={$.join(className, Style.Code)}>
            <ViewButton variant="text" onClick={() => setExpanded(!expanded)}>
                {expanded ? <IconArrowDown /> : <IconArrowRight />}
                <div>Example's code:</div>
            </ViewButton>
            {expanded && <pre>{children}</pre>}
        </div>
    )
}
