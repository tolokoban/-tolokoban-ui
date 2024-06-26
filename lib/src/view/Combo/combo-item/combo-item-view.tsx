import * as React from "react"
import "./combo-item-view.css"

export interface ComboItemViewProps {
    className?: string
    children?: React.ReactNode
    id?: string
    value?: string
    showButton?: boolean
    selected?: boolean
    onClick?(value?: string): void
}

export default function ComboItemView(props: ComboItemViewProps) {
    const handleClick = () => {
        props.onClick?.(props.value)
    }
    return (
        <button
            className={getClassNames(props)}
            id={props.id}
            onClick={handleClick}
        >
            <div className="body">{props.children}</div>
            {props.showButton && (
                <div className="button theme-color-primary">
                    <svg viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                        />
                    </svg>
                </div>
            )}
        </button>
    )
}

function getClassNames(props: ComboItemViewProps): string {
    const classNames = [
        "custom",
        "ui-view-combo-ComboItemView",
        "theme-color-input",
    ]
    if (typeof props.className === "string") {
        classNames.push(props.className)
    }
    if (props.selected) {
        classNames.push("selected")
    }
    return classNames.join(" ")
}
