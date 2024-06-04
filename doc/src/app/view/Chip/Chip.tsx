/**
 * 2024-06-04T07:19:37.590Z
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

export default function ChipDocumentation() {
    return <ViewDocumentation title='import { ViewChip } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewChip } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return <ViewChip label=\"Mister Bean\" />\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}