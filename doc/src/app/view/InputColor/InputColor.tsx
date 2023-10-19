/**
 * 2023-10-16T13:46:37.404Z
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
            example={"import React from \"react\"\nimport { ViewInputColor } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [color, setColor] = React.useState(\"#F90\")\n    return <ViewInputColor value={color} onChange={setColor} />\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}