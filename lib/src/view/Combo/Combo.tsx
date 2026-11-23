import * as React from "react"

import { useChangeableValue } from "../../hooks/changeable-value.js"
import { Theme } from "../../theme/index.js"
import {
    classnameCommon,
    CommonProps,
    styleCommon,
} from "../../theme/styles/common.js"
import { ColorName, ViewWithValue } from "../../types.js"
import { CustomButtonProps } from "../Dialog/index.js"
import { ViewLabel } from "../Label/index.js"
import {
    ComboItem,
    SUPPORTS_ANCHOR_POSITIONING,
    useFallbackPositioning,
    useItems,
    useTypeAhead,
} from "./hooks.js"

import Styles from "./Combo.module.css"

const $ = Theme.classNames

const PAGE_SIZE = 10

export type ViewComboProps = CommonProps &
    ViewWithValue<string> & {
        className?: string
        /** If defined, a label will be added above the combo. */
        label?: React.ReactNode
        /** Default to `true`. */
        enabled?: boolean
        /** Displayed when `value` matches none of the items. */
        placeholder?: React.ReactNode
        /**
         * Items of the combo.
         * Each child must have a `key` which is a string:
         * it is the value of the item.
         */
        children: React.ReactElement | Array<React.ReactElement | null | false>
        /** @deprecated The list is no longer displayed in a dialog. Ignored. */
        title?: React.ReactNode
        /** @deprecated The list is no longer displayed in a dialog. Ignored. */
        buttonCancel?: CustomButtonProps
        /** @deprecated The list is no longer displayed in a dialog. Ignored. */
        buttonValidate?: CustomButtonProps
        /** @deprecated The list is no longer displayed in a dialog. Ignored. */
        headColor?: ColorName
        /** @deprecated The list is no longer displayed in a dialog. Ignored. */
        bodyColor?: ColorName
        /** @deprecated The list is no longer displayed in a dialog. Ignored. */
        footColor?: ColorName
    }

export function ViewCombo(props: ViewComboProps) {
    const { label, enabled = true, placeholder } = props
    const items = useItems(props.children)
    const [value, setValue] = useChangeableValue(props)
    const selectedIndex = items.findIndex((item) => item.key === value)
    const [open, setOpen] = React.useState(false)
    const [active, setActive] = React.useState(Math.max(0, selectedIndex))
    const refButton = React.useRef<HTMLButtonElement | null>(null)
    const refList = React.useRef<HTMLDivElement | null>(null)
    const refOpenedByKeyboard = React.useRef(false)
    const typeAhead = useTypeAhead(items)
    const id = `combo-${React.useId().replace(/[^a-zA-Z0-9_-]/g, "")}`
    const listId = `${id}-list`
    const optionId = (index: number) => `${id}-option-${index}`
    useFallbackPositioning(open, refButton, refList)

    React.useEffect(() => {
        if (!open) return

        refList.current
            ?.querySelector(`#${optionId(active)}`)
            ?.scrollIntoView({ block: "nearest" })
    }, [open, active])

    const show = (index: number) => {
        setActive(clamp(index, items.length))
        const list = refList.current
        if (list && !isOpen(list)) {
            refOpenedByKeyboard.current = true
            list.showPopover()
        }
    }
    const hide = () => {
        const list = refList.current
        if (list && isOpen(list)) list.hidePopover()
    }
    const commit = (index: number) => {
        const item: ComboItem | undefined = items[index]
        if (item && item.key !== value) setValue(item.key)
        hide()
    }
    const handleKeyDown = (evt: React.KeyboardEvent<HTMLButtonElement>) => {
        if (!enabled || items.length === 0) return

        const next = open
            ? handleKeyWhenOpen(evt, active, items.length, {
                  move: setActive,
                  commit,
                  hide,
              })
            : handleKeyWhenClosed(evt, Math.max(0, selectedIndex), show)
        if (next === "handled") {
            evt.preventDefault()
            evt.stopPropagation()
            return
        }
        if (isPrintable(evt)) {
            const index = typeAhead(evt.key, open ? active : selectedIndex)
            if (index > -1) show(index)
            else if (!open) show(Math.max(0, selectedIndex))
            evt.preventDefault()
        }
    }
    const handleKeyUp = (evt: React.KeyboardEvent<HTMLButtonElement>) => {
        // Space activates a button on keyup: we already handled it on keydown.
        if (evt.key === " ") evt.preventDefault()
    }
    const handleToggle = (evt: React.ToggleEvent<HTMLDivElement>) => {
        const isNowOpen = evt.newState === "open"
        setOpen(isNowOpen)
        // Opened by a click: start on the selected item.
        if (isNowOpen && !refOpenedByKeyboard.current) {
            setActive(Math.max(0, selectedIndex))
        }
        refOpenedByKeyboard.current = false
    }
    const style: React.CSSProperties = {
        ...styleCommon(props),
        "--custom-anchor": `--${id}`,
    }
    const selectedItem = items[selectedIndex]
    return (
        <ViewLabel value={label} fullwidth={props.fullwidth}>
            <div
                className={$.join(
                    props.className,
                    Styles.Combo,
                    !enabled && Styles.disabled,
                    classnameCommon(props)
                )}
                style={style}
            >
                <button
                    ref={refButton}
                    type="button"
                    role="combobox"
                    className={Styles.trigger}
                    disabled={!enabled}
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    aria-controls={listId}
                    aria-activedescendant={
                        open ? optionId(active) : undefined
                    }
                    popoverTarget={listId}
                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyUp}
                >
                    <div className={Styles.value}>
                        {selectedItem ? (
                            selectedItem.element
                        ) : (
                            <span className={Styles.placeholder}>
                                {placeholder}
                            </span>
                        )}
                    </div>
                    <svg
                        className={Styles.arrow}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            fill="currentColor"
                            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                        />
                    </svg>
                </button>
                <div
                    ref={refList}
                    id={listId}
                    popover="auto"
                    role="listbox"
                    tabIndex={-1}
                    aria-label={typeof label === "string" ? label : undefined}
                    className={$.join(
                        Styles.list,
                        !SUPPORTS_ANCHOR_POSITIONING && Styles.fallback
                    )}
                    onToggle={handleToggle}
                    // Keep the focus on the trigger.
                    onMouseDown={(evt) => evt.preventDefault()}
                >
                    {items.map((item, index) => (
                        <div
                            key={item.key}
                            id={optionId(index)}
                            role="option"
                            aria-selected={index === selectedIndex}
                            className={$.join(
                                Styles.option,
                                index === active && Styles.active
                            )}
                            onPointerMove={() => {
                                if (index !== active) setActive(index)
                            }}
                            onClick={() => commit(index)}
                        >
                            {item.element}
                        </div>
                    ))}
                </div>
            </div>
        </ViewLabel>
    )
}

type KeyResult = "handled" | "ignored"

function handleKeyWhenClosed(
    evt: React.KeyboardEvent,
    selectedIndex: number,
    show: (index: number) => void
): KeyResult {
    switch (evt.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
            show(selectedIndex)
            return "handled"
        case "Home":
            show(0)
            return "handled"
        case "End":
            show(Number.MAX_SAFE_INTEGER)
            return "handled"
        default:
            return "ignored"
    }
}

function handleKeyWhenOpen(
    evt: React.KeyboardEvent,
    active: number,
    count: number,
    actions: {
        move(index: number): void
        commit(index: number): void
        hide(): void
    }
): KeyResult {
    const move = (index: number) => actions.move(clamp(index, count))
    switch (evt.key) {
        case "ArrowDown":
            move(active + 1)
            return "handled"
        case "ArrowUp":
            if (evt.altKey) actions.commit(active)
            else move(active - 1)
            return "handled"
        case "PageDown":
            move(active + PAGE_SIZE)
            return "handled"
        case "PageUp":
            move(active - PAGE_SIZE)
            return "handled"
        case "Home":
            move(0)
            return "handled"
        case "End":
            move(count - 1)
            return "handled"
        case "Enter":
        case " ":
            actions.commit(active)
            return "handled"
        case "Escape":
            actions.hide()
            return "handled"
        case "Tab":
            // Select and let the focus move to the next element.
            actions.commit(active)
            return "ignored"
        default:
            return "ignored"
    }
}

function isPrintable(evt: React.KeyboardEvent): boolean {
    return (
        evt.key.length === 1 &&
        evt.key !== " " &&
        !evt.ctrlKey &&
        !evt.metaKey &&
        !evt.altKey
    )
}

function isOpen(element: HTMLElement): boolean {
    return element.matches(":popover-open")
}

function clamp(index: number, count: number): number {
    return Math.max(0, Math.min(count - 1, index))
}
