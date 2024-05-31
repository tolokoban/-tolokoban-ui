import * as React from "react"

import { useChangeableValue } from "@/hooks/changeable-value"
import { useModal } from "@/modal"
import { CommonProps, styleCommon } from "@/theme"
import { ViewWithValue } from "@/types"
import { ViewDialog, ViewDialogProps } from "../Dialog"
import { ViewLabel } from "../Label"
import ComboItemView from "./combo-item/combo-item-view"
import { Items, useItems } from "./hooks"

import Styles from "./Combo.module.css"

export type ViewComboProps = CommonProps &
    ViewWithValue<string> &
    ViewDialogProps & {
        className?: string
        label?: React.ReactNode
        children: JSX.Element[]
    }

export function ViewCombo(props: ViewComboProps) {
    const items = useItems(props.children)
    const [value, setValue] = useChangeableValue(props)
    const handleClick = useClickHandler(value, setValue, props, items)
    return (
        <ViewLabel value={props.label}>
            <div className={getClassNames(props)} style={styleCommon(props)}>
                <ComboItemView showButton onClick={handleClick}>
                    {items[value]}
                </ComboItemView>
            </div>
        </ViewLabel>
    )
}

function getClassNames(props: ViewComboProps): string {
    const classNames = [Styles.main]
    if (typeof props.className === "string") {
        classNames.push(props.className)
    }
    return classNames.join(" ")
}

function useClickHandler(
    value: string,
    setValue: (value: string) => void,
    props: ViewDialogProps & { children: JSX.Element[] },
    items: Items
) {
    const modal = useModal()
    return () => {
        const hide = modal.show({
            content: (
                <ViewDialog
                    title={props.title}
                    bodyColor={props.bodyColor}
                    headColor={props.headColor}
                    footColor={props.footColor}
                    buttonCancel={{
                        ...props.buttonCancel,
                        onClick: () => hide(),
                    }}
                >
                    <div className="ui-view-ViewCombo-list">
                        {Object.keys(items).map((key) => (
                            <ComboItemView
                                key={key}
                                value={key}
                                showButton={false}
                                onClick={() => {
                                    hide()
                                    setValue(key)
                                }}
                            >
                                {items[key]}
                            </ComboItemView>
                        ))}
                    </div>
                </ViewDialog>
            ),
        })
    }
}
