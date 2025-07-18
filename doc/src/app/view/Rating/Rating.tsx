/**
 * 2025-07-18T07:47:42.988Z
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
            example={"import React from \"react\"\nimport {\n    IconHeart,\n    ViewInputNumber,\n    ViewPanel,\n    ViewRating,\n} from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [value, setValue] = React.useState(3.4)\n    const [value2, setValue2] = React.useState(3.4)\n    return (\n        <>\n            <ViewPanel\n                display=\"flex\"\n                justifyContent=\"space-around\"\n                flexWrap=\"wrap\"\n                gap=\"L\"\n            >\n                <ViewInputNumber\n                    value={value}\n                    onChange={setValue}\n                    label=\"Assessment\"\n                    min={0}\n                    max={5}\n                />\n                <ViewRating\n                    value={value}\n                    onChange={setValue}\n                    label={`${value} / 5`}\n                />\n                <ViewRating value={value} readOnly label=\"Read only\" />\n            </ViewPanel>\n            <ViewPanel\n                display=\"flex\"\n                justifyContent=\"space-around\"\n                flexWrap=\"wrap\"\n                gap=\"L\"\n            >\n                <ViewRating\n                    max={8}\n                    value={value}\n                    color=\"primary-5\"\n                    colorEdit=\"secondary-5\"\n                    onChange={setValue2}\n                    label={`${value2} / 8`}\n                />\n                <ViewRating\n                    value={value2}\n                    icon={IconHeart}\n                    readOnly\n                    label=\"Fancy icons\"\n                    max={8}\n                />\n            </ViewPanel>\n        </>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}