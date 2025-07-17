/**
 * 2025-07-17T13:24:39.357Z
 *
 * This file has been automatically generated with:
 * npm run generate
 *
 * Please do not modify it manually.
 */
import ViewDocumentation from "@/view/ViewDocumentation"
import ViewDemo from "@/view/ViewDemo"
import DemoDefault from "./demo/Default"

export default function TooltipDocumentation() {
    return (
        <ViewDocumentation title='import { ViewTooltip } from "@tolokoban/ui"'>
            <ViewDemo
                description={"# Default usage\n"}
                // eslint-disable-next-line no-template-curly-in-string
                example={
                    'import React from "react"\nimport { ViewTooltip } from "@tolokoban/ui"\n\nexport default function Demo() {\n    return <ViewTooltip />\n}\n'
                }
            >
                <DemoDefault />
            </ViewDemo>
        </ViewDocumentation>
    )
}
