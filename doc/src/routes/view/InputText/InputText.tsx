/**
 * 2023-08-07T11:20:17.596Z
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

export default function InputTextDocumentation() {
    return <ViewDocumentation title='import { ViewInputText } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewInputText } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return <ViewInputText />\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}