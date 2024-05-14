/**
 * 2024-05-14T14:52:25.752Z
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

export default function OptionsDocumentation() {
    return <ViewDocumentation title='import { ViewOptions } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewOptions } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [value, setValue] = React.useState(\"M\")\n    return (\n        <ViewOptions label=\"Select a size\" value={value} onChange={setValue}>\n            <div key=\"S\">Extra Small</div>\n            <div key=\"S\">Small</div>\n            <div key=\"M\">Medium</div>\n            <div key=\"L\">Large</div>\n            <div key=\"XL\">Extra Large</div>\n        </ViewOptions>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}