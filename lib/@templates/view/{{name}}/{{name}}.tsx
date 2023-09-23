import React from "react"

import { Theme } from "../../theme"
import {
    DimensionStyleProps,
    styleDimension,
} from "../../theme/styles/dimension"
import { PositionStyleProps, stylePosition } from "../../theme/styles/position"
import { ChildStyleProps, styleChild } from "../../theme/styles/child"

import Styles from "./{{name}}.module.css"

export interface {{name}}Props
    extends ChildStyleProps,
        PositionStyleProps,
        DimensionStyleProps {
    className?: string
}

export function View{{name}}(props: {{name}}Props) {
    const style: React.CSSProperties = {
        ...styleDimension(props),
        ...stylePosition(props),
        ...styleChild(props),
    }
    return <div 
        className={Theme.classNames.join(props.className, Styles.{{name}})}
        style={style}
    >
    
    </div>
}