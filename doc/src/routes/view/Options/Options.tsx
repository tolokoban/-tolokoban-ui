/**
 * 2023-07-07T14:15:19.537Z
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

export default function OptionsDocumentation() {
    return <ViewDocumentation title='import { ViewOptions } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            example={"import React from \"react\"\nimport { ViewOptions, IconMail, IconFacebook, IconTwitter } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [value, setValue] = React.useState(\"E-Mail\")\n    return (\n        <ViewOptions\n            value={value}\n            onChange={setValue}\n            label={`Share to ${value}`}\n        >\n            <div key=\"E-Mail\">\n                <IconMail />\n            </div>\n            <div key=\"Twitter\">\n                <IconTwitter />\n            </div>\n            <div key=\"FaceBook\">\n                <IconFacebook />\n            </div>\n        </ViewOptions>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}