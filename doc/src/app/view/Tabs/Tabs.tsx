/**
 * 2025-03-31T12:46:14.779Z
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
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewTabs, ViewTab } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <ViewTabs>\n            <ViewTab label=\"Lorem\">\n                Voluptas dicta totam rerum dolorem id. Magnam autem ut repellat\n                aut facere beatae numquam. Aut minus at ratione non suscipit. At\n                hic sed quod.\n            </ViewTab>\n            <ViewTab label=\"Ipsum\">\n                Non deleniti labore et ad doloremque eius consectetur. Sit qui\n                eum sed inventore incidunt nihil qui nobis. Molestiae provident\n                sint sed amet nostrum.\n            </ViewTab>\n        </ViewTabs>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}