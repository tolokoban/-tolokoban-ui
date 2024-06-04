/**
 * 2024-06-04T09:55:49.242Z
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
            example={"import React from \"react\"\nimport { ViewChip } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <>\n            <div>\n                <ViewChip label=\"Default Chip\" />\n                <ViewChip label=\"Removable Chip\" removable />\n                <ViewChip label=\"Colored Chip\" color=\"primary-5\" />\n                <ViewChip\n                    label=\"Shadowed Chip\"\n                    color=\"secondary-5\"\n                    shadow={3}\n                />\n                <ViewChip label=\"Disabled Chip\" enabled={false} />\n                <ViewChip label=\"Outlined Chip\" outline />\n            </div>\n            <div>\n                <ViewChip label=\"XXS sized Chip\" size=\"XXS\" />\n                <ViewChip label=\"XS sized Chip\" size=\"XS\" />\n                <ViewChip label=\"S sized Chip\" size=\"S\" />\n                <ViewChip label=\"M sized Chip\" size=\"M\" />\n                <ViewChip label=\"L sized Chip\" size=\"L\" />\n                <ViewChip label=\"XL sized Chip\" size=\"XL\" />\n                <ViewChip label=\"XXL sized Chip\" size=\"XXL\" />\n            </div>\n        </>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}