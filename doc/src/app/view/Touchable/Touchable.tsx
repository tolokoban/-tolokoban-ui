/**
 * 2024-06-04T07:19:37.694Z
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

export default function TouchableDocumentation() {
    return <ViewDocumentation title='import { ViewTouchable } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewPanel, ViewTouchable } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [expanded, setExpanded] = React.useState(false)\n    return (\n        <ViewTouchable onClick={() => setExpanded(!expanded)}>\n            <ViewPanel padding=\"L\" maxWidth=\"30em\" color=\"tertiary-1\">\n                <div>Click me to {expanded ? \"collapse\" : \"expand\"}</div>\n                {expanded && (\n                    <p>\n                        Corporis eos consequuntur sed voluptatibus velit. Et\n                        ipsam repudiandae voluptatum dolorem in. Odio saepe in\n                        iure consequatur voluptatem incidunt. Libero et omnis ut\n                        et nobis et. Voluptatum ab laborum nam ut accusantium\n                        sunt veniam vitae.\n                    </p>\n                )}\n            </ViewPanel>\n        </ViewTouchable>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}