/**
 * 2024-08-16T09:12:19.501Z
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
            example={"import React from \"react\"\nimport { ViewStack } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <ViewStack width=\"240px\" height=\"240px\">\n            <Pie key=\"red\" color=\"red\" />\n            <Pie key=\"green\" color=\"green\" />\n            <Pie key=\"blue\" color=\"blue\" />\n        </ViewStack>\n    )\n}\n\nconst ANGLES = {\n    red: 0,\n    green: 120,\n    blue: 240,\n}\n\nfunction Pie({ color }: { color: keyof typeof ANGLES }) {\n    return (\n        <svg\n            width=\"240\"\n            height=\"240\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            viewBox=\"-120 -120 240 240\"\n        >\n            <path\n                transform={`rotate(${ANGLES[color]})`}\n                d=\"M120,0 A120,120 0 0 0 -120,0\"\n                stroke=\"none\"\n                fill={color}\n                fill-opacity=\"0.5\"\n            />\n        </svg>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}