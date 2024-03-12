/**
 * 2024-03-12T20:40:13.067Z
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
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { IconGear, ViewButton, ViewPanel } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <div>\n            <ViewPanel\n                display=\"grid\"\n                gridTemplateColumns=\"auto repeat(4, 1fr)\"\n                gap=\"M\"\n            >\n                <div>Enabled</div>\n                <ViewButton variant=\"elevated\">Elevated</ViewButton>\n                <ViewButton variant=\"filled\">Filled</ViewButton>\n                <ViewButton variant=\"outlined\">Outlined</ViewButton>\n                <ViewButton variant=\"text\">Text</ViewButton>\n                <div>Enabled</div>\n                <ViewButton color=\"primary-5\" variant=\"elevated\">\n                    Elevated\n                </ViewButton>\n                <ViewButton color=\"primary-5\" variant=\"filled\">\n                    Filled\n                </ViewButton>\n                <ViewButton color=\"primary-5\" variant=\"outlined\">\n                    Outlined\n                </ViewButton>\n                <ViewButton color=\"primary-5\" variant=\"text\">\n                    Text\n                </ViewButton>\n                <div>Disabled</div>\n                <ViewButton enabled={false} variant=\"elevated\">\n                    Elevated\n                </ViewButton>\n                <ViewButton enabled={false} variant=\"filled\">\n                    Filled\n                </ViewButton>\n                <ViewButton enabled={false} variant=\"outlined\">\n                    Outlined\n                </ViewButton>\n                <ViewButton enabled={false} variant=\"text\">\n                    Text\n                </ViewButton>\n            </ViewPanel>\n            <ViewPanel>\n                <ViewButton icon={IconGear}>With icon</ViewButton>\n            </ViewPanel>\n        </div>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}