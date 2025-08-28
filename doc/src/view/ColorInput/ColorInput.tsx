import * as React from "react"

import {
    Theme,
    CommonProps,
    styleCommon,
    classnameCommon,
    ColorName,
    ViewLabel,
    ViewOptions,
} from "@tolokoban/ui"

import Styles from "./ColorInput.module.css"

const $ = Theme.classNames

export type ViewColorInputProps = CommonProps & {
    label?: string
    value: ColorName
    onChange(value: ColorName): void
}

export function ViewColorInput(props: ViewColorInputProps): JSX.Element {
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const { label, value, onChange } = props
    const [base, level] = value.split("-")

    return (
        <div
            className={$.join(
                props.className,
                Styles.colorInput,
                classnameCommon(props)
            )}
            style={style}
        >
            <ViewLabel value={label}>
                <div className={Styles.flex}>
                    <ViewOptions
                        value={base}
                        onChange={(v) => onChange(`${v}-${level}` as ColorName)}
                    >
                        {["neutral", "primary", "secondary", "tertiary"].map(
                            renderItem
                        )}
                    </ViewOptions>
                    <ViewOptions
                        value={level}
                        onChange={(v) => onChange(`${base}-${v}` as ColorName)}
                    >
                        {"123456789".split("").map(renderItem)}
                    </ViewOptions>
                </div>
            </ViewLabel>
        </div>
    )
}

function renderItem(text: string) {
    return <div key={text}>{text}</div>
}
