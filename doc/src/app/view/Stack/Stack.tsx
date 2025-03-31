/**
 * 2025-03-31T13:01:31.970Z
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

export default function StackDocumentation() {
    return <ViewDocumentation title='import { ViewStack } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n\n`ViewStack` has an array of elements as `children` and can display only a subset of them thanks to the attribute `value`.\n\nChildren without a key will always be rendered. `value` can be the key of the only child to be rendered, or an array of keys to display several children.\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewOptionsMultiple, ViewPanel, ViewStack } from \"@tolokoban/ui\"\n\nconst ANGLES = {\n    red: 0,\n    green: 120,\n    blue: 240,\n}\n\ntype Color = keyof typeof ANGLES\n\nexport default function Demo() {\n    const [colors, setColors] = React.useState<Color[]>([\n        \"red\",\n        \"green\",\n        \"blue\",\n    ])\n    return (\n        <ViewPanel\n            display=\"flex\"\n            flexDirection=\"column\"\n            alignItems=\"center\"\n            gap=\"M\"\n            padding=\"M\"\n            color=\"neutral-9\"\n        >\n            <ViewOptionsMultiple\n                value={colors}\n                onChange={setColors}\n                label=\"Select/unselect a color\"\n            >\n                <div key=\"red\">Red</div>\n                <div key=\"green\">Green</div>\n                <div key=\"blue\">Blue</div>\n            </ViewOptionsMultiple>\n            <ViewStack value={colors} width=\"240px\" height=\"240px\">\n                <Pie key=\"red\" color=\"red\" />\n                <Pie key=\"green\" color=\"green\" />\n                <Pie key=\"blue\" color=\"blue\" />\n            </ViewStack>\n        </ViewPanel>\n    )\n}\n\nfunction Pie({ color }: { color: Color }) {\n    return (\n        <svg\n            width=\"240\"\n            height=\"240\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            viewBox=\"-120 -120 240 240\"\n        >\n            <path\n                transform={`rotate(${ANGLES[color]})`}\n                d=\"M120,0 A120,120 0 0 0 -120,0 A120,60 0 0 0 120,0\"\n                stroke=\"none\"\n                fill={color}\n                fill-opacity=\"0.25\"\n            />\n        </svg>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}