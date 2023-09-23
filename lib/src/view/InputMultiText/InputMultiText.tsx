import React from "react"

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
    extends ViewWithValue<Record<string, string>>,
        ChildStyleProps,
        PositionStyleProps,
        DimensionStyleProps {
    className?: string
    /** What element of the `value` to edit. */
    selection: string
    onSelectionChange(this: void, selection: string): void
    /**
     * Set this function to change how the keys will be
     * rendered.
     * By default, the keys are rendered as the string
     * they are, verbatim.
     */
    renderSelection?(this: void, selection: string, selected: boolean): Children
}

export function ViewInputMultiText(props: InputMultiTextProps) {
    const {
        value,
        onChange,
        onSelectionChange,
        renderSelection = (item: string, selected: boolean) =>
            selected ? <b>{item}</b> : <span>{item}</span>,
    } = props
    const [keys, itemKey, itemVal] = useSelection(props)
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
                    <button key={key} onClick={() => onSelectionChange(key)}>
                        {renderSelection(key, key === itemKey)}
                    </button>
                ))}
            </div>
        </div>
    )
}

function useSelection({
    value,
    onChange,
    selection,
    onSelectionChange,
}: {
    value: Record<string, string>
    onChange: (this: void, value: Record<string, string>) => void
    selection: string
    onSelectionChange(this: void, selection: string): void
}): [keys: string[], itemKey: string, itemVal: string] {
    const keys = Object.keys(value)
    React.useEffect(() => {
        if (keys.length === 0)
            onChange({
                [navigator.language]: "",
            })
    }, [value, onChange, keys.length])
    const key = findBestKey(keys, selection)
    React.useEffect(() => {
        if (key && key !== selection) {
            onSelectionChange(key)
        }
    }, [key, onSelectionChange, selection])
    return [keys, key ?? "", value[key ?? ""] ?? ""]
}

/**
 * if `keys` is empty, return `null`.
 * If `selection` is in `keys`, return it.
 * Otherwise, find the first key that starts
 * like `selection`.
 * If nothing has been found, return the first
 * element in `keys`.
 */
function findBestKey(keys: string[], selection: string): string | undefined {
    if (keys.length === 0) return undefined
    if (keys.includes(selection)) return selection
    for (const key of keys) {
        if (key.startsWith(selection)) return key
    }
    for (const key of keys) {
        if (key.toLowerCase().startsWith(selection.toLowerCase())) return key
    }
    return keys[0]
}
