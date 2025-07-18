/**
 * 2025-07-18T07:47:42.994Z
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
            example={"import React from \"react\"\nimport { ViewTabs, ViewTab } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const tab = (\n        <ViewTab label=\"Lorem\">\n            Voluptas dicta totam rerum dolorem id. Magnam autem ut repellat aut\n            facere beatae numquam. Aut minus at ratione non suscipit. At hic sed\n            quod.\n        </ViewTab>\n    )\n\n    return (\n        <ViewTabs>\n            <ViewTab label=\"Lorem\">\n                Voluptas dicta totam rerum dolorem id. Magnam autem ut repellat\n                aut facere beatae numquam. Aut minus at ratione non suscipit. At\n                hic sed quod.\n            </ViewTab>\n            <ViewTab label=\"Ipsum\">\n                Non deleniti labore et ad doloremque eius consectetur. Sit qui\n                eum sed inventore incidunt nihil qui nobis. Molestiae provident\n                sint sed amet nostrum.\n            </ViewTab>\n            <ViewTab label=\"Invisible Tab\">\n                {false && (\n                    <div>\n                        Voluptas dicta totam rerum dolorem id. Magnam autem ut\n                        repellat aut facere beatae numquam. Aut minus at ratione\n                        non suscipit. At hic sed quod.\n                    </div>\n                )}\n            </ViewTab>\n        </ViewTabs>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}