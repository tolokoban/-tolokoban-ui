import styles from "./Spinner.module.css"
import React from "react"
import IconLoading from "../icons/IconLoading"
import { ColorStyleProps, styleColor } from "../../theme/styles/color"

export type ViewSpinnerProps = {
    className?: string
    icon?: React.FC<{ animate?: boolean }>
    children?: React.ReactNode
} & ColorStyleProps

export function ViewSpinner({
    className,
    icon = IconLoading,
    children,
    ...props
}: ViewSpinnerProps) {
    const SpinningIcon = icon
    return (
        <div
            className={`${styles.Spinner} ${className ?? ""}`}
            style={styleColor(props)}
        >
            <SpinningIcon animate={true} />
            {children && <div>{children}</div>}
        </div>
    )
}
