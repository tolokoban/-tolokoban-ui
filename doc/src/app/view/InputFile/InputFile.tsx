/**
 * 2024-03-21T08:59:45.433Z
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

export default function InputFileDocumentation() {
    return <ViewDocumentation title='import { ViewInputFile } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewInputFile } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const handleLoad = () => {\n        console.log(\"onLoad()\")\n    }\n    return <ViewInputFile onLoad={handleLoad}>Import file</ViewInputFile>\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}