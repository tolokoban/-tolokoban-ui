import * as React from "react"
import Theme from "../../theme/theme.js"
import { Children, OpaqueColorName } from "../../types.js"
import {
    cssForColor,
    cssForColorOn,
    cssForGaps,
} from "../../theme/styles/styles.js"
import { CommonProps, styleCommon } from "../../theme/styles/common.js"
import { setDefaults } from "../../util/set-defaults.js"
import { GenericIconProps } from "../icons/generic/index.js"

import Styles from "./Button.module.css"

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
    /**
     * Click handler.
     *
     * If you set a string, the button will be turned into
     * a link to an URL. But the style will remain the same.
     */
    onClick?: string | ((this: void) => void)
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
     * Icon to display to the left.
     */
    icon?: React.FC<GenericIconProps>
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
        margin: ["XS", "0"],
        padding: [0, "M"],
        onClick: DEFAULT_CLICK_HANDLER,
        width: "auto",
        height: "2em",
        variant: "elevated",
        thickness: 0.125,
    })
    const { className, children, enabled, variant, onClick } = props
    const { color } = partialProps
    const thickness = cssForGaps(props.thickness)
    const style: React.CSSProperties = {
        "--custom-color-main-alpha": getMainAlphaColor(color, variant),
        "--custom-color-main": getMainColor(color, variant),
        "--custom-color-text": getTextColor(color, variant),
        "--custom-thickness": thickness,
        ...styleCommon(props),
    }
    const Icon = props.icon
    if (typeof onClick === "string") {
        return (
            <a
                style={style}
                className={$.join(
                    className,
                    Styles.Button,
                    Styles[variant],
                    Boolean(Icon) && Styles.icon,
                    !enabled && Styles.disabled
                )}
                href={onClick}
            >
                {Icon && <Icon />}
                <div className={Styles.label}>{children}</div>
            </a>
        )
    }
    return (
        <button
            style={style}
            className={$.join(
                className,
                Styles.Button,
                Styles[variant],
                Boolean(Icon) && Styles.icon
            )}
            disabled={!enabled}
            type="button"
            onClick={onClick}
        >
            {Icon && <Icon />}
            <div className={Styles.label}>{children}</div>
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

function getMainColor(
    color: OpaqueColorName | undefined,
    variant: string
): string {
    switch (variant) {
        case "text":
            return "transparent"
        // "elevated" | "filled" | "outlined"
        default:
            return cssForColor(color ?? "primary-5")
    }
}

function getMainAlphaColor(
    color: OpaqueColorName | undefined,
    variant: string
): string {
    switch (variant) {
        case "text":
            return "transparent"
        // "elevated" | "filled" | "outlined"
        default:
            return cssForColor(color ?? "primary-5", 0.5)
    }
}

function getTextColor(
    color: OpaqueColorName | undefined,
    variant: string
): string {
    switch (variant) {
        case "text":
        case "outlined":
            return color ? cssForColor(color) : "currentColor"
        // "elevated" | "filled"
        default:
            return cssForColorOn(color ?? "primary-5")
    }
}
