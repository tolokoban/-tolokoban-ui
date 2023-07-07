/**
 * 2023-07-07T14:15:19.466Z
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

export default function ButtonDocumentation() {
    return <ViewDocumentation title='import { ViewButton } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            example={"import React from \"react\"\nimport { ViewButton } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <div>\n            <div>\n                <ViewButton />\n                <ViewButton variant=\"filled\" />\n                <ViewButton variant=\"outlined\" />\n                <ViewButton variant=\"text\" />\n            </div>\n            <div>\n                <ViewButton enabled={false} />\n                <ViewButton enabled={false} variant=\"filled\" />\n                <ViewButton enabled={false} variant=\"outlined\" />\n                <ViewButton enabled={false} variant=\"text\" />\n            </div>\n        </div>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}