import { Theme } from "../../theme"
import { Children, ViewWithValue } from "../../types"
import { useChangeableValue } from "../../hooks/changeable-value"

import Styles from "./Slider.module.css"

const $ = Theme.classNames

export type ViewSliderProps = ViewWithValue<number> & {
    className?: string
    /** If defined, displayed at the right of the slider. */
    text?: string | number | ((value: number) => string)
    /** If `true`, the width is set to `100%`. */
    wide?: boolean
    /** Min value. */
    min?: number
    /** Max value. */
    max?: number
    /** Minimum distance between to different values. */
    step?: number
}

export function ViewSlider({
    min,
    max,
    step,
    className,
    wide,
    text,
    value,
    onChange,
}: ViewSliderProps) {
    const [val, setVal] = useChangeableValue({ value, onChange })
    return (
        <div className={$.join(className, Styles.Slider, wide ? "wide" : "")}>
            <input
                type="range"
                min={min ?? 0}
                max={max ?? 0}
                step={step ?? 1}
                onChange={(evt) => setVal(parseFloat(evt.target.value))}
            />
            {text && <div>{computeText(text, val)}</div>}
        </div>
    )
}

function computeText(
    text: string | number | ((value: number) => string),
    value: number
): Children {
    if (typeof text === "string") return text
    if (typeof text === "number") return `${text}`
    return text(value)
}
