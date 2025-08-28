import * as React from "react"

import { Theme, CommonProps, styleCommon, classnameCommon } from "@tolokoban/ui"

import Styles from "./{{namePascal}}.module.css"

const $ = Theme.classNames

export type View{{namePascal}}Props = CommonProps & {
}

export function View{{namePascal}}(props: View{{namePascal}}Props): JSX.Element {
    const style: React.CSSProperties = {
        ...styleCommon(props)
    }
    return (
        <div
            className={$.join(
                props.className, 
                Styles.{{nameCamel}}, 
                classnameCommon(props)
            )}
            style={style}
        >
        </div>
    )
}
