/**
 * 2024-06-12T13:48:24.645Z
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

export default function InputColorDocumentation() {
    return <ViewDocumentation title='import { ViewInputColor } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewInputColor, ViewPanel } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [color, setColor] = React.useState(\"#F90\")\n    return (\n        <div>\n            <ViewPanel\n                display=\"inline-flex\"\n                flexDirection=\"column\"\n                alignItems=\"stretch\"\n                width=\"auto\"\n            >\n                <ViewInputColor\n                    value={color}\n                    onChange={setColor}\n                    label=\"My favourite color\"\n                />\n            </ViewPanel>\n        </div>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}