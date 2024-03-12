import * as React from "react"

import { Theme } from "../../theme/index.js"
import { ChildStyleProps, styleChild } from "../../theme/styles/child.js"
import {
    PositionStyleProps,
    stylePosition,
} from "../../theme/styles/position.js"
import { Children, ViewWithValue } from "../../types.js"

import Styles from "./Switch.module.css"

export interface ViewSwitchProps
    extends ViewWithValue<boolean>,
        ChildStyleProps,
        PositionStyleProps {
    className?: string
    enabled?: boolean
    children: Children
}

export function ViewSwitch(props: ViewSwitchProps) {
    const style: React.CSSProperties = {
        ...stylePosition(props),
        ...styleChild(props),
    }
    return (
        <button
            className={Theme.classNames.join(
                props.className,
                Styles.ViewSwitch,
                props.value && Styles.ok
            )}
            type="button"
            disabled={props.enabled === false ? true : undefined}
            style={style}
            onClick={() => props.onChange(!props.value)}
        >
            <div className={Styles.pin}>
                <div className={Styles.bar}> </div>
                <div className={Styles.btn}> </div>
            </div>
            {props.children}
        </button>
    )
}
