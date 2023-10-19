/**
 * 2023-10-16T13:46:37.418Z
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

export default function LabelDocumentation() {
    return <ViewDocumentation title='import { ViewLabel } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewInputText, ViewLabel } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [name, setName] = React.useState(\"Mr Bean\")\n    return (\n        <ViewLabel value=\"What's your name?\" title=\"This is a tooltip...\">\n            <ViewInputText value={name} onChange={setName} />\n        </ViewLabel>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}