import * as React from "react"

import { Theme } from "../../theme"
import { CommonProps, styleCommon } from "../../theme/styles/common"
import { ViewLabel } from "../Label"

const $ = Theme.classNames

export type ViewProgressProps = CommonProps & {
    value: number
    label?: React.ReactNode
}

export function ViewProgress(props: ViewProgressProps): JSX.Element {
    const { className, value, label } = props

    return (
        <ViewLabel value={label}>
            <progress
                className={$.join(className)}
                style={styleCommon(props)}
                max={100}
                value={value}
            />
        </ViewLabel>
    )
}
