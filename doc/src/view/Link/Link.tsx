import React from "react"
import Style from "./Link.module.css"

interface LinkProps {
    hash: string
    children: React.ReactNode
}

export default function Link(props: LinkProps) {
    return (
        <a href={`#${props.hash}`} className={Style.Link}>
            {props.children}
        </a>
    )
}
