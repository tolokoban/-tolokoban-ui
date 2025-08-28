/**
 * 2025-08-28T09:33:24.151Z
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
            example={"import React from \"react\"\nimport {\n    IconBrandBlender,\n    IconCamera,\n    IconGear,\n    ViewPanel,\n    ViewSpinner,\n} from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <div>\n            <ViewSpinner>Waiting for Godot...</ViewSpinner>\n            <ViewPanel display=\"flex\" justifyContent=\"space-around\">\n                <ViewSpinner orientation=\"vertical\" shadow={9}>\n                    Vertical orientation\n                </ViewSpinner>\n                <ViewSpinner orientation=\"vertical\" color=\"primary-5\">\n                    Vertical orientation\n                </ViewSpinner>\n                <ViewSpinner\n                    orientation=\"vertical\"\n                    color=\"secondary-5\"\n                    shadow={2}\n                >\n                    Vertical orientation\n                </ViewSpinner>\n            </ViewPanel>\n            <ViewPanel display=\"flex\" justifyContent=\"space-around\" padding=\"M\">\n                <ViewSpinner icon={IconGear}>Another icon...</ViewSpinner>\n                <ViewSpinner color=\"neutral-1\" icon={IconBrandBlender}>\n                    Another icon...\n                </ViewSpinner>\n                <ViewSpinner icon={IconCamera}>Another icon...</ViewSpinner>\n            </ViewPanel>\n        </div>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}