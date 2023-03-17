import React from "react"
import { Theme } from "../../theme"
import Classes from "./Dialog.module.css"
import { Button, ButtonProps } from "../Button"

const $ = Theme.classNames

type CustomButtonProps = Partial<ButtonProps>

export interface DialogProps {
    className?: string
    title?: string
    buttonCancel?: CustomButtonProps
    buttonValidate?: CustomButtonProps
    children: React.ReactNode
}

export function Dialog({
    className,
    buttonCancel,
    buttonValidate,
    title,
    children,
}: DialogProps) {
    const cancelProps: ButtonProps | null =
        buttonCancel && buttonCancel.onClick
            ? ({
                  children: "Cancel",
                  ...buttonCancel,
              } as ButtonProps)
            : null
    const validateProps: ButtonProps | null =
        buttonValidate && buttonValidate.onClick
            ? ({
                  children: "OK",
                  ...buttonValidate,
              } as ButtonProps)
            : null
    return (
        <div className={$.join(className, Classes.Dialog)}>
            {title && <header>{title}</header>}
            <main>{children}</main>
            {(cancelProps || validateProps) && (
                <footer>
                    {cancelProps && <Button {...cancelProps} />}
                    {validateProps && <Button {...validateProps} />}
                </footer>
            )}
        </div>
    )
}
