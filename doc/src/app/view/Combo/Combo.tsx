/**
 * 2024-06-04T17:46:09.633Z
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
            example={"import React from \"react\"\nimport { ViewCombo } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [animal, setAnimal] = React.useState(\"fox\")\n    return (\n        <ViewCombo\n            label=\"Select your favourite animal\"\n            value={animal}\n            onChange={setAnimal}\n        >\n            <div key=\"monkey\">🐵 - Monkey</div>\n            <div key=\"dog\">🐶 - Dog</div>\n            <div key=\"fox\">🦊 - Fox</div>\n            <div key=\"lion\">🦁 - Lion</div>\n            <div key=\"elephant\">𓃰 - Elephant</div>\n            <div key=\"frog\">🐸 - Frog</div>\n            <div key=\"crab\">🦀 - Crab</div>\n            <div key=\"peacook\">🦚 - Peacook</div>\n            <div key=\"tiger\">🐯 - Tiger</div>\n            <div key=\"squid\">🦑 - Squid</div>\n            <div key=\"shark\">🦈 - Shark</div>\n            <div key=\"koala\">🐨 - Koala</div>\n            <div key=\"beaver\">🦫 - Beaver</div>\n        </ViewCombo>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}