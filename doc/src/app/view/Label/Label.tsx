/**
 * 2025-08-27T15:05:06.268Z
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

export default function LabelDocumentation() {
    return <ViewDocumentation title='import { ViewLabel } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport {\n    ViewInputNumber,\n    ViewInputText,\n    ViewLabel,\n    ViewPanel,\n} from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [name, setName] = React.useState(\"\")\n    const [age, setAge] = React.useState(0)\n    return (\n        <div>\n            <ViewPanel\n                display=\"grid\"\n                gridTemplateColumns=\"auto 1fr\"\n                gap=\"M\"\n                placeItems=\"center start\"\n                maxWidth=\"480px\"\n            >\n                <ViewLabel\n                    value=\"What's your name?\"\n                    title=\"This is a tooltip...\"\n                >\n                    <ViewInputText\n                        value={name}\n                        onChange={setName}\n                        placeholder=\"Please enter your name here\"\n                    />\n                </ViewLabel>\n                <ViewLabel value=\"How old are you?\">\n                    <ViewInputNumber\n                        value={age}\n                        onChange={setAge}\n                        placeholder=\"Please enter your age here\"\n                    />\n                </ViewLabel>\n            </ViewPanel>\n            {name.trim() && (\n                <p>\n                    Nice to meet you, <b>{name}</b>!\n                </p>\n            )}\n        </div>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}