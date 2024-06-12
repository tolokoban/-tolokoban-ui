/**
 * 2024-06-12T13:48:24.651Z
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

export default function InputTextDocumentation() {
    return <ViewDocumentation title='import { ViewInputText } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewInputText } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [name, setName] = React.useState(\"Tolokoban\")\n    return (\n        <p>\n            The name <ViewInputText value={name} onChange={setName} /> is\n            spelled{\" \"}\n            <b>\n                <code>{name.split(\"\").reverse().join(\"\")}</code>\n            </b>{\" \"}\n            in reverse.\n        </p>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}