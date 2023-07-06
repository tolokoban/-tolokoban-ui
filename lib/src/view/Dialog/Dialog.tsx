import React from "react"
import { Theme } from "../../theme"
import Classes from "./Dialog.module.css"
import { ViewButton, ViewButtonProps } from "../Button"
import { ColorName } from "../../types"
import { styleColor } from "../../theme/styles/color"

const $ = Theme.classNames

type CustomButtonProps = Partial<ViewButtonProps>

export interface ViewDialogProps {
    className?: string
    /**
     * If defined, the `title` will appear in the dialog header.
     */
    title?: React.ReactNode
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
    children: React.ReactNode
}

export function ViewDialog({
    className,
    buttonCancel,
    buttonValidate,
    title,
    headColor = "primary-5",
    bodyColor = "neutral-7",
    footColor = "neutral-5",
    children,
}: ViewDialogProps) {
    const cancelProps = checkClickHandler("Cancel", buttonCancel)
    const validateProps = checkClickHandler("Validate", buttonValidate)
    return (
        <div className={$.join(className, Classes.Dialog)}>
            {title && (
                <header style={styleColor({ color: headColor })}>
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
        </div>
    )
}

function checkClickHandler(
    label: string,
    props?: CustomButtonProps
): ViewButtonProps | null {
    if (!props || !props.onClick) return null

    return {
        children: label,
        ...props,
    } as ViewButtonProps
}
