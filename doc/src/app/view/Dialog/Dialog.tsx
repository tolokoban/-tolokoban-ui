/**
 * 2024-05-15T11:55:44.748Z
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

export default function DialogDocumentation() {
    return <ViewDocumentation title='import { ViewDialog } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewDialog } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <div>\n            <p>\n                A <b>Dialog</b> looks like a window with a potential header and\n                button in the footer:\n            </p>\n            <ViewDialog>\n                <p>\n                    Are you sure you want to destroy your computer with an\n                    atomic explosion?\n                </p>\n            </ViewDialog>\n        </div>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}