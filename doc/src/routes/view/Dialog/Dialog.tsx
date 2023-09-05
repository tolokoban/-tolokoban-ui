/**
 * 2023-07-07T14:15:19.478Z
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
            example={"import React from \"react\"\nimport { ViewDialog } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return <ViewDialog>Hello World!</ViewDialog>\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}