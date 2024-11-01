import React from "react"
import { ViewButton } from "@tolokoban/ui"

import Style from "./Link.module.css"

interface LinkProps {
    hash: string
    children: React.ReactNode
}

export default function Link(props: LinkProps) {
    const isCurrent = props.hash === window.location.hash.substring(1)
    return (
        <ViewButton
            className={Style.Link}
            onClick={`#${props.hash}`}
            variant={isCurrent ? "outlined" : "elevated"}
        >
            {props.children}
        </ViewButton>
    )
}
