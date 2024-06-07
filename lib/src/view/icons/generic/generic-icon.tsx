import * as React from "react"

import { ColorStyleProps, styleColor } from "../../../theme/styles/color"

import Styles from "./generic-icon.module.css"

export type GenericIconProps = {
    className?: string
    type?: "filled" | "outlined" | "bold" | "dual"
    size?: string
    /** Starts the animation if `true` */
    animate?: boolean
    /** Description of the drawing. Ex.: `M8,20L12,10L16,20Z` */
    value?: string
    onClick?(): void
} & ColorStyleProps

export type IconProps = Omit<GenericIconProps, "value">

export type Icon = ((props: IconProps) => JSX.Element) & {
    id: string
}

export default function GenericIcon(props: GenericIconProps) {
    const {
        value = "M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z",
    } = props
    const type = props.type ?? "filled"
    const size = sizeToFontSize(props.size ?? "M")
    const style: React.CSSProperties = {
        ...styleColor({ textColor: props.color }),
        width: size,
        height: size,
    }
    return (
        <svg
            className={getClassName(props)}
            style={style}
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            onClick={() => props.onClick?.()}
            tabIndex={props.onClick ? 1 : undefined}
            strokeWidth={1.5}
        >
            {type === "filled" && (
                <path d={value} fill="currentColor" stroke="none" />
            )}
            {type === "outlined" && (
                <path d={value} fill="none" stroke="currentColor" />
            )}
            {type === "bold" && (
                <path d={value} fill="currentColor" stroke="currentColor" />
            )}
            {type === "dual" && (
                <>
                    <path
                        d={value}
                        opacity={0.25}
                        fill="currentColor"
                        stroke="none"
                    />
                    <path d={value} fill="none" stroke="currentColor" />
                </>
            )}
        </svg>
    )
}

function getClassName(props: GenericIconProps): string {
    const classNames = [Styles.GenericIcon]
    if (typeof props.className === "string") {
        classNames.push(props.className)
    }
    if (props.animate === true) classNames.push(Styles.animate)
    if (props.onClick) classNames.push(Styles.clickable)

    return classNames.join(" ")
}

const SIZES: Record<string, string> = {
    XXS: ".5em",
    XS: ".75em",
    S: "1em",
    M: "1.5em",
    L: "2em",
    XL: "3em",
    XXL: "5em",
}

function sizeToFontSize(value: string): string {
    return SIZES[value] ?? value
}
