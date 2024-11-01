/**
 * 2024-11-01T07:45:25.314Z
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

export default function SliderDocumentation() {
    return <ViewDocumentation title='import { ViewSlider } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewSlider } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [value, setValue] = React.useState(63)\n    return <ViewSlider value={value} onChange={setValue} min={0} max={100} />\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}