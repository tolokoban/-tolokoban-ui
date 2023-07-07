/**
 * 2023-07-07T14:15:19.644Z
 *
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import ViewDocumentation from "@/view/ViewDocumentation"
import ViewDemo from "@/view/ViewDemo"
import DemoDefault from "./demo/Default"

export default function TouchableDocumentation() {
    return <ViewDocumentation title='import { ViewTouchable } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            example={"import React from \"react\"\nimport {\n    ViewTouchable,\n    IconChecked,\n    IconUnchecked,\n    ViewPanel,\n} from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [flag, setFlag] = React.useState(false)\n    return (\n        <ViewTouchable onClick={() => setFlag(!flag)}>\n            <ViewPanel\n                display=\"inline-flex\"\n                alignItems=\"center\"\n                gap=\"M\"\n                color=\"primary-2\"\n                padding=\"M\"\n                margin=\"M\"\n            >\n                <div>Click to toggle:</div>\n                {flag ? <IconChecked /> : <IconUnchecked />}\n            </ViewPanel>\n        </ViewTouchable>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}