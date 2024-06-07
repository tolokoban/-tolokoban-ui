/**
 * 2024-06-04T17:46:09.670Z
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

export default function SpinnerDocumentation() {
    return <ViewDocumentation title='import { ViewSpinner } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { IconGear, ViewPanel, ViewSpinner } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <div>\n            <ViewSpinner>Waiting for Godot...</ViewSpinner>\n            <ViewPanel display=\"flex\" justifyContent=\"space-around\">\n                <ViewSpinner orientation=\"vertical\">\n                    Vertical orientation\n                </ViewSpinner>\n                <ViewSpinner orientation=\"vertical\" color=\"primary-5\">\n                    Vertical orientation\n                </ViewSpinner>\n                <ViewSpinner\n                    orientation=\"vertical\"\n                    color=\"secondary-5\"\n                    shadow={2}\n                >\n                    Vertical orientation\n                </ViewSpinner>\n            </ViewPanel>\n            <ViewSpinner icon={IconGear}>Another icon...</ViewSpinner>\n        </div>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}