import React from "react"

import { useChangeableValue } from "../../hooks/changeable-value.js"
import { Children, OpaqueColorName, ViewWithValue } from "../../types.js"
import { OptionsFrame, OptionsItem, ViewOptionsVariant } from "./common/index.js"
import {
    CommonProps,
    Theme,
    classnameCommon,
    styleColor,
    styleCommon,
} from "@/theme"

import Styles from "./Options.module.css"

export type { ViewOptionsVariant } from "./common/index.js"

export type ViewOptionsProps<T> = ViewWithValue<T> &
    CommonProps & {
        className?: string
        /** Optional label to display above the options. */
        label?: string
        color?: OpaqueColorName
        colorSelection?: OpaqueColorName
        /**
         * - `"compact"` (default): items glued together in a single box.
         * - `"chips"`: separated items with a shadow, and a check mark
         *   in front of the selected one.
         */
        variant?: ViewOptionsVariant
        children: Array<React.ReactElement<ViewOptionsItemProps<T>>>
    }

export type ViewOptionsItemProps<T> = {
    key: T
    children: Children
}

const $ = Theme.classNames

export function ViewOptions<T>(props: ViewOptionsProps<T>) {
    const { label, children, variant = "compact" } = props
    const [value, setValue] = useChangeableValue(props)
    return (
        <OptionsFrame
            label={label}
            fullwidth={props.fullwidth}
            variant={variant}
            className={$.join(
                props.className,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                classnameCommon(props)
            )}
            style={styleCommon(props)}
            colorStyle={styleColor(props)}
        >
            {children.map((child) => {
                const key =
                    typeof value === "number"
                        ? parseFloat(`${child.key ?? "0"}`)
                        : child.key
                const selected = key === value
                return (
                    <OptionsItem
                        key={key}
                        variant={variant}
                        selected={selected}
                        className={
                            selected ? Styles.selected : Styles.unselected
                        }
                        style={styleColor({
                            color: selected
                                ? props.colorSelection
                                : props.color,
                        })}
                        onClick={
                            selected ? undefined : () => setValue(key as T)
                        }
                    >
                        {child}
                    </OptionsItem>
                )
            })}
        </OptionsFrame>
    )
}
