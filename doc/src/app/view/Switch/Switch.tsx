/**
 * 2024-04-30T14:38:31.394Z
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

export default function SwitchDocumentation() {
    return <ViewDocumentation title='import { ViewSwitch } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewSwitch } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [active, setActive] = React.useState(false)\n    return (\n        <ViewSwitch value={active} onChange={setActive}>\n            Nuclear weapon activated\n        </ViewSwitch>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}