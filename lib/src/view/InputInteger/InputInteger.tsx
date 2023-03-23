import { ViewInputText } from "../InputText"
import { Theme } from "../../theme"
import Style from "./InputInteger.module.css"
import { ViewWithValue } from "../../types"
import { SpaceStyleProps } from "../../theme/styles/space"

const $ = Theme.classNames

export type ViewInputIntegerProps = ViewWithValue<number> & {
    className?: string
    placeholder?: string
    label?: string
    type?: "text" | "email" | "password" | "number"
    maxWidth?: string
    min?: number
    max?: number
} & SpaceStyleProps

export function ViewInputInteger({
    className,
    value,
    label,
    placeholder,
    onChange,
    min = -Number.MAX_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
}: ViewInputIntegerProps) {
    return (
        <ViewInputText
            className={$.join(className, Style.InputInteger)}
            label={label}
            placeholder={placeholder}
            value={`${value}`}
            onChange={(v) => onChange?.(parseFloat(v))}
            validator={(value) => {
                const num = parseFloat(value)
                if (!isNaN(num) || !Number.isInteger(num)) return false
                return num >= min && num <= max
            }}
        />
    )
}
