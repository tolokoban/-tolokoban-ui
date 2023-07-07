/**
 * 2023-07-07T14:15:19.636Z
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

export default function TabsDocumentation() {
    return <ViewDocumentation title='import { ViewTabs } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            example={"import React from \"react\"\nimport { ViewTabs, ViewTab } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <ViewTabs>\n            <ViewTab label=\"First\">\n                This is the <b>first</b> tab.\n            </ViewTab>\n            <ViewTab label=\"Second\">\n                This is the <b>second</b> tab.\n            </ViewTab>\n        </ViewTabs>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}