/**
 * 2025-11-10T12:51:17.926Z
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
            example={"import React from \"react\"\nimport { ViewInputColor, ViewPanel } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [color, setColor] = React.useState(\"#F90\")\n    const [color2, setColor2] = React.useState(\"rgb(240, 160, 0)\")\n    return (\n        <div>\n            <ViewPanel\n                display=\"inline-flex\"\n                flexDirection=\"column\"\n                alignItems=\"stretch\"\n                width=\"auto\"\n            >\n                <ViewInputColor\n                    value={color}\n                    onChange={setColor}\n                    label=\"My best color\"\n                />\n                <ViewInputColor\n                    value={color2}\n                    onChange={setColor2}\n                    label=\"My worst color\"\n                />\n            </ViewPanel>\n        </div>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}