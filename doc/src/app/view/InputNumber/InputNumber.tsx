/**
 * 2025-11-10T12:51:17.935Z
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

export default function InputNumberDocumentation() {
    return <ViewDocumentation title='import { ViewInputNumber } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewInputNumber, ViewPanel } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [a, setA] = React.useState(30)\n    const [b, setB] = React.useState(1.975)\n    return (\n        <ViewPanel\n            display=\"grid\"\n            gridTemplateColumns=\"auto 100px\"\n            gap=\"S\"\n            padding=\"L\"\n            color=\"neutral-6\"\n            width=\"320px\"\n            placeItems=\"center start\"\n        >\n            <ViewInputNumber\n                value={a}\n                onChange={setA}\n                label=\"Liters of oil:\"\n                width=\"3em\"\n            />\n            <ViewInputNumber\n                value={b}\n                onChange={setB}\n                label=\"Price per liter:\"\n                width=\"4em\"\n            />\n            <hr\n                style={{\n                    gridColumn: \"1/-1\",\n                    width: \"100%\",\n                }}\n            />\n            <div>Total to pay:</div>\n            <output>\n                <b>{a * b}</b>\n            </output>\n        </ViewPanel>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}