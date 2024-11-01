import * as React from "react"

import {
    CommonProps,
    Theme,
    classnameCommon,
    styleCommon,
} from "../../theme/index"
import { ChildStyleProps, styleChild } from "../../theme/styles/child"
import { PositionStyleProps, stylePosition } from "../../theme/styles/position"
import { Children, ViewWithValue } from "../../types"

import Styles from "./Switch.module.css"

export interface ViewSwitchProps
    extends ViewWithValue<boolean>,
        ChildStyleProps,
        PositionStyleProps,
        CommonProps {
    className?: string
    enabled?: boolean
    children?: Children
}

export function ViewSwitch(props: ViewSwitchProps) {
    const style: React.CSSProperties = {
        ...stylePosition(props),
        ...styleChild(props),
        ...styleCommon(props),
    }
    return (
        <button
            className={Theme.classNames.join(
                props.className,
                Styles.ViewSwitch,
                props.value && Styles.ok,
                classnameCommon(props)
            )}
            type="button"
            disabled={props.enabled === false ? true : undefined}
            style={style}
            onClick={() => props.onChange?.(!props.value)}
        >
            <div className={Styles.pin}>
                <div className={Styles.bar}> </div>
                <div className={Styles.btn}> </div>
            </div>
            {props.children}
        </button>
    )
}
