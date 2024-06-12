/**
 * 2024-06-12T13:48:24.653Z
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
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewOptions, ViewPanel } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [value, setValue] = React.useState(\"M\")\n    const [format, setFormat] = React.useState(\"A4\")\n    return (\n        <ViewPanel gap=\"M\">\n            <ViewOptions\n                label=\"Select a size\"\n                value={value}\n                onChange={setValue}\n                color=\"secondary-4\"\n                colorSelection=\"primary-6\"\n            >\n                <div key=\"XS\">Extra Small</div>\n                <div key=\"S\">Small</div>\n                <div key=\"M\">Medium</div>\n                <div key=\"L\">Large</div>\n                <div key=\"XL\">Extra Large</div>\n            </ViewOptions>\n            <ViewOptions\n                label=\"Select page format\"\n                value={format}\n                onChange={setFormat}\n            >\n                <div key=\"A5\">\n                    A5 - <small>148×210</small>\n                </div>\n                <div key=\"A4\">\n                    A4 - <small>210×297</small>\n                </div>\n                <div key=\"A3\">\n                    A3 - <small>297×240</small>\n                </div>\n            </ViewOptions>\n        </ViewPanel>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}