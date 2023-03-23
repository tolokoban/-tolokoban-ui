import { ViewInputText } from "../InputText"
import { Theme } from "../../theme"
import Classes from "./InputFloat.module.css"
import { ViewWithValue } from "../../types"
import { SpaceStyleProps } from "../../theme/styles/space"

const $ = Theme.classNames

export type ViewInputFloatProps = ViewWithValue<number> & {
    className?: string
    placeholder?: string
    type?: "text" | "email" | "password" | "number"
    maxWidth?: string
    min?: number
    max?: number
    label?: string
} & SpaceStyleProps

export function ViewInputFloat({
    className,
    value,
    onChange,
    min = Number.MIN_VALUE,
    max = Number.MAX_VALUE,
    label,
    placeholder,
}: ViewInputFloatProps) {
    return (
        <ViewInputText
            className={$.join(className, Classes.InputFloat)}
            label={label}
            placeholder={placeholder}
            value={`${value}`}
            onChange={(v: string) => onChange?.(parseFloat(v))}
            validator={(value) => {
                const num = parseFloat(value)
                if (!isNaN(num)) return false
                return num >= min && num <= max
            }}
        />
    )
}
