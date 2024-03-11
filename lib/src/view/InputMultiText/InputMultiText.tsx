import * as React from "react"

import { Theme } from "../../theme"
import {
    DimensionStyleProps,
    styleDimension,
} from "../../theme/styles/dimension"
import { PositionStyleProps, stylePosition } from "../../theme/styles/position"
import { ChildStyleProps, styleChild } from "../../theme/styles/child"

import Styles from "./InputMultiText.module.css"
import { Children, ViewWithValue } from "../../types"

export interface InputMultiTextProps
    extends ViewWithValue<{ [lang: string]: string }>,
        ChildStyleProps,
        PositionStyleProps,
        DimensionStyleProps {
    className?: string
    /** What element of the `value` to edit. */
    lang: string
    onLangChange(this: void, lang: string): void
    /**
     * Set this function to change how the keys will be
     * rendered.
     * By default, the keys are rendered as the string
     * they are, verbatim.
     */
    renderLang?(this: void, lang: string, selected: boolean): Children
}

export function ViewInputMultiText(props: InputMultiTextProps) {
    const {
        value,
        onChange,
        onLangChange,
        renderLang = (item: string, selected: boolean) =>
            selected ? <b>{item}</b> : <span>{item}</span>,
    } = props
    const [keys, itemKey, itemVal] = useLang(props)
    const style: React.CSSProperties = {
        ...styleDimension(props),
        ...stylePosition(props),
        ...styleChild(props),
    }
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const text = evt.target.value
        onChange({
            ...value,
            [itemKey]: text,
        })
    }
    return (
        <div
            className={Theme.classNames.join(
                props.className,
                Styles.InputMultiText
            )}
            style={style}
        >
            <input value={itemVal} onChange={handleChange} />
            <div>
                {keys.map((key) => (
                    <button key={key} onClick={() => onLangChange(key)}>
                        {renderLang(key, key === itemKey)}
                    </button>
                ))}
            </div>
        </div>
    )
}

function useLang({
    value,
    onChange,
    lang,
    onLangChange,
}: {
    value: { [lang: string]: string }
    onChange: (this: void, value: { [lang: string]: string }) => void
    lang: string
    onLangChange(this: void, lang: string): void
}): [keys: string[], itemKey: string, itemVal: string] {
    const keys = Object.keys(value)
    React.useEffect(() => {
        if (keys.length === 0)
            onChange({
                [navigator.language]: "",
            })
    }, [value, onChange, keys.length])
    const key = findBestKey(keys, lang)
    React.useEffect(() => {
        if (key && key !== lang) {
            onLangChange(key)
        }
    }, [key, onLangChange, lang])
    return [keys, key ?? "", value[key ?? ""] ?? ""]
}

/**
 * if `keys` is empty, return `null`.
 * If `lang` is in `keys`, return it.
 * Otherwise, find the first key that starts
 * like `lang`.
 * If nothing has been found, return the first
 * element in `keys`.
 */
function findBestKey(keys: string[], lang: string): string | undefined {
    if (keys.length === 0) return undefined
    if (keys.includes(lang)) return lang
    for (const key of keys) {
        if (key.startsWith(lang)) return key
    }
    for (const key of keys) {
        if (key.toLowerCase().startsWith(lang.toLowerCase())) return key
    }
    return keys[0]
}
