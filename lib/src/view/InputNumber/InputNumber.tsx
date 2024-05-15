import * as React from "react"

import { CommonProps } from "@/theme"
import { ViewInputText, ViewInputTextProps } from "../InputText"

export type ViewInputNumberProps = CommonProps & {
    value: number
    onChange(value: number): void
    id?: string
    /** Text to display when the input is empty. */
    placeholder?: string
    /** If defined,  label will be added to the input. */
    label?: React.ReactNode
    /** If `true`, the focus will be set here once displayed. */
    autofocus?: boolean
    /**
     * Form name.
     */
    name?: string
    /**
     * Event dispatched when the user pressed Enter.
     */
    onEnterKeyPressed?(this: void, value: string): void
}

export function ViewInputNumber(props: ViewInputNumberProps): JSX.Element {
    const textProps: ViewInputTextProps = {
        ...props,
        value: `${props.value}`,
        onChange: (text: string) => {
            const num = Number(text)
            if (Number.isFinite(num)) {
                props.onChange(num)
            }
        },
        type: "number",
        validator: (text: string) => Number.isFinite(Number(text)),
    }
    return <ViewInputText {...textProps}></ViewInputText>
}
