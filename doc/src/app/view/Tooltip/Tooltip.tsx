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

export default function TooltipDocumentation() {
    return <ViewDocumentation title='import { ViewTooltip } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewInputColor, ViewPanel, ViewTooltip } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [color, setColor] = React.useState(\"#f91\")\n    return (\n        <ViewPanel display=\"grid\" placeItems=\"center\">\n            <ViewTooltip\n                content={\n                    <div>\n                        Select your favorite{\" \"}\n                        <b\n                            style={{\n                                borderBottom: `4px solid ${color}`,\n                            }}\n                        >\n                            color\n                        </b>\n                        !\n                    </div>\n                }\n            >\n                <ViewInputColor\n                    value={color}\n                    onChange={setColor}\n                    label=\"Color of the game\"\n                />\n            </ViewTooltip>\n        </ViewPanel>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}