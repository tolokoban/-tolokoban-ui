import React from "react"
import { Theme } from "../../theme"
import Classes from "./Cell.module.css"

const $ = Theme.classNames

export interface CellProps {
    className?: string
    children: React.ReactNode
    gridRow?: string
    gridColumn?: string
    alignSelf?:
        | "auto"
        | "normal"
        | "center"
        | "start"
        | "end"
        | "self-start"
        | "self-end"
        | "flex-start"
        | "flex-end"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "stretch"
        | "safe center"
        | "unsafe center"
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
    justifySelf?:
        | "auto"
        | "normal"
        | "stretch"
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "self-start"
        | "self-end"
        | "left"
        | "right"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "safe center"
        | "unsafe center"
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
}

export function Cell({
    className,
    children,
    gridRow,
    gridColumn,
    alignSelf,
    justifySelf,
}: CellProps) {
    const style: React.CSSProperties = {
        gridRow,
        gridColumn,
        alignSelf,
        justifySelf,
    }
    return (
        <div className={$.join(className, Classes.Cell)} style={style}>
            {children}
        </div>
    )
}
