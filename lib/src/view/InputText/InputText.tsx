import * as React from "react"

import { Theme } from "../../theme/index.js"
import { SpaceStyleProps, styleSpace } from "../../theme/styles/space.js"
import { ViewLabel } from "../Label/index.js"
import { ViewWithValue } from "../../types.js"
import {
    DimensionStyleProps,
    classnameDimension,
    styleDimension,
} from "../../theme/styles/dimension.js"
import { CommonProps } from "../../theme/styles/common.js"

import Styles from "./InputText.module.css"

const $ = Theme.classNames

export type ViewInputTextProps = ViewWithValue<string> &
    SpaceStyleProps &
    DimensionStyleProps &
    CommonProps & {
        id?: string
        /** Text to display when the input is empty. */
        placeholder?: string
        /** If defined,  label will be added to the input. */
        label?: React.ReactNode
        enabled?: boolean
        /**
         * Input type. Default to `"text"`.
         */
        type?:
            | "button"
            | "checkbox"
            | "color"
            | "date"
            | "datetime-local"
            | "email"
            | "file"
            | "image"
            | "hidden"
            | "month"
            | "number"
            | "password"
            | "radio"
            | "range"
            | "reset"
            | "search"
            | "submit"
            | "tel"
            | "text"
            | "time"
            | "url"
            | "week"
        /** If `true`, the focus will be set here once displayed. */
        autofocus?: boolean
        /**
         * A regular expression or a function to assert the validity of the current text.
         */
        validator?: RegExp | ((value: string) => boolean)
        /**
         * Form name.
         */
        name?: string
        /**
         * Event dispatched when the user pressed Enter.
         */
        onEnterKeyPressed?(this: void, value: string): void
    }

export function ViewInputText(props: ViewInputTextProps) {
    const {
        className,
        id,
        placeholder,
        value = "",
        enabled = true,
        label,
        name,
        autofocus = false,
        onChange,
        onEnterKeyPressed,
        type = "text",
        maxWidth,
        validator,
    } = props
    const [invalid, setInvalid] = React.useState(false)
    const [text, setText] = React.useState(value)
    React.useEffect(() => setText(value), [value])
    const handleKeydown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if (invalid) return

        if (evt.key === "Enter") {
            evt.preventDefault()
            evt.stopPropagation()
            onEnterKeyPressed?.(text)
        }
    }
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value
        setText(value)
        if (validate(value, validator)) {
            setInvalid(false)
            onChange?.(value)
        } else {
            setInvalid(true)
        }
    }
    const style: React.CSSProperties = {
        ...styleSpace(props),
        ...styleDimension(props),
    }
    if (maxWidth) style.maxWidth = maxWidth
    const input = (
        <input
            className={$.join(
                className,
                Styles.InputText,
                invalid && Styles.invalid,
                classnameDimension(props)
            )}
            id={id}
            style={style}
            disabled={!enabled}
            autoFocus={autofocus}
            placeholder={placeholder}
            type={type}
            value={text}
            name={name}
            onChange={handleChange}
            onKeyDown={handleKeydown}
        />
    )
    return label ? (
        <ViewLabel value={label} fullwidth={props.fullwidth}>
            {input}
        </ViewLabel>
    ) : (
        input
    )
}

function validate(
    value: string,
    validator: RegExp | ((value: string) => boolean) | undefined
): boolean {
    if (!validator) return true

    if (validator instanceof RegExp) {
        validator.lastIndex = -1
        return validator.test(value)
    } else {
        return validator(value)
    }
}
