import React from "react"

import { Theme } from "../../theme/index.js"
import { styleColor } from "../../theme/styles/color.js"
import { Children, ColorName } from "../../types.js"
import { ViewButton, ViewButtonProps } from "../Button/index.js"
import { ViewStrip } from "../Strip/index.js"

import Classes from "./Dialog.module.css"

const $ = Theme.classNames

export type CustomButtonProps = Partial<ViewButtonProps>

export interface ViewDialogProps {
    className?: string
    /**
     * If defined, the `title` will appear in the dialog header.
     */
    title?: Children
    /**
     * Customize the __Cancel__ button.
     * The buton will appear only if you set at least the `onClick` attribute.
     */
    buttonCancel?: CustomButtonProps
    /**
     * Customize the __Validate__ button.
     * The buton will appear only if you set at least the `onClick` attribute.
     */
    buttonValidate?: CustomButtonProps
    /**
     * Color of the header. Default to `primary-5`.
     */
    headColor?: ColorName
    /**
     * Color of the body. Default to `neutral-7`.
     */
    bodyColor?: ColorName
    /**
     * Color of the footer. Default to `neutral-5`.
     */
    footColor?: ColorName
    children: Children
}

export function ViewDialog({
    className,
    buttonCancel,
    buttonValidate,
    title,
    headColor = "primary-3",
    bodyColor = "neutral-6",
    footColor = "neutral-4",
    children,
}: ViewDialogProps) {
    const cancelProps = checkClickHandler("Cancel", buttonCancel, {
        variant: "text",
    })
    const validateProps = checkClickHandler("Validate", buttonValidate)
    return (
        <ViewStrip
            className={$.join(className, Classes.Dialog)}
            orientation="column"
            template="-1"
        >
            {title && (
                <header
                    className={Classes.header}
                    style={styleColor({ color: headColor })}
                >
                    {title}
                </header>
            )}
            <main style={styleColor({ color: bodyColor })}>{children}</main>
            {(cancelProps || validateProps) && (
                <footer style={styleColor({ color: footColor })}>
                    {cancelProps && <ViewButton {...cancelProps} />}
                    {validateProps && <ViewButton {...validateProps} />}
                </footer>
            )}
        </ViewStrip>
    )
}

function checkClickHandler(
    label: string,
    props?: CustomButtonProps,
    override?: CustomButtonProps
): ViewButtonProps | null {
    if (!props || !props.onClick) return null

    return {
        children: label,
        ...props,
        ...override,
    } as ViewButtonProps
}
