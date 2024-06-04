/**
 * 2024-06-04T13:53:34.770Z
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

export default function RatingDocumentation() {
    return <ViewDocumentation title='import { ViewRating } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewPanel, ViewRating } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [value, setValue] = React.useState(3.4)\n    return (\n        <ViewPanel display=\"flex\" justifyContent=\"space-around\">\n            <ViewRating\n                value={value}\n                onChange={setValue}\n                label={`${value} / 5`}\n            />\n            <ViewRating value={value} readOnly label=\"Read only\" />\n        </ViewPanel>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}