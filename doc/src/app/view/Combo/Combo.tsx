/**
 * 2024-05-24T20:24:03.430Z
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

export default function ComboDocumentation() {
    return <ViewDocumentation title='import { ViewCombo } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewCombo } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [animal, setAnimal] = React.useState(\"fox\")\n    return (\n        <ViewCombo value={animal} onChange={setAnimal}>\n            <div key=\"monkey\">🐵 - Monkey</div>\n            <div key=\"dog\">🐶 - Dog</div>\n            <div key=\"fox\">🦊 - Fox</div>\n            <div key=\"lion\">🦁 - Lion</div>\n        </ViewCombo>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}