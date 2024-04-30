import React from "react"
import { ViewButton } from "@tolokoban/ui"

import Style from "./Link.module.css"

interface LinkProps {
    hash: string
    children: React.ReactNode
}

export default function Link(props: LinkProps) {
    return (
        <ViewButton className={Style.Link} onClick={`#${props.hash}`}>
            {props.children}
        </ViewButton>
    )
}
