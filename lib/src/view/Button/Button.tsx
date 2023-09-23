import React from "react"
import { Theme } from "../../theme"
import Classes from "./Button.module.css"
import { Children, OpaqueColorName } from "../../types"
import {
    cssForColor,
    cssForColorOn,
    cssForGaps,
} from "../../theme/styles/styles"
import { CommonProps, styleCommon } from "../../theme/styles/common"
import { setDefaults } from "../../util/set-defaults"

const $ = Theme.classNames

export type ViewButtonProps = {
    /**
     * The look of a button depends on its variant:
     *
     * * __filled__ (default): button ith background.
     * * __elevated__: with a shadow below.
     * * __outline__: no background but a surrounding border.
     * * __text__: text only, no background, no border.
     *
     * Default to `"filled"`.
     */
    variant?: "elevated" | "filled" | "outlined" | "text"
    /** Content of the button. Most often a text, but can be anything. */
    children?: Children
    /** Click handler. */
    onClick?(this: void): void
    /**
     * Default to `true`.
     *
     * If set to `false`, the button cannot get the focus and cannot be clicked.
     */
    enabled?: boolean
    /**
     * Main color of the button.
     * It will be the background, unless we use `variant="text"`
     * or `variant="outline"`.
     */
    color?: OpaqueColorName
    /**
     * Thickness of the button's border.
     */
    thickness?: string | number
} & CommonProps

export function ViewButton(partialProps: ViewButtonProps) {
    const props = setDefaults(partialProps, {
        children: "Button",
        enabled: true,
        borderRadius: ".125em",
        color: "secondary-5",
        margin: ["S", "M"],
        padding: [0, "M"],
        onClick: DEFAULT_CLICK_HANDLER,
        width: "auto",
        height: "2em",
        variant: "elevated",
        thickness: 0.125,
    })
    const { className, children, color, enabled, variant, onClick } = props
    const thickness = cssForGaps(props.thickness)
    const style: React.CSSProperties = {
        "--custom-color-main-alpha": cssForColor(color, 0.5),
        "--custom-color-main": cssForColor(color),
        "--custom-color-text": cssForColorOn(color),
        "--custom-thickness": thickness,
        ...styleCommon(props),
    }
    return (
        <button
            style={style}
            className={$.join(className, Classes.Button, Classes[variant])}
            disabled={!enabled}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export function makeCustomButton(
    defaultProps: Partial<ViewButtonProps>
): (props: ViewButtonProps) => JSX.Element {
    return (props: ViewButtonProps) =>
        ViewButton({
            ...defaultProps,
            ...props,
        })
}

const DEFAULT_CLICK_HANDLER = () => {
    console.log("Click!")
}
