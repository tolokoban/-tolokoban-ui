/**
 * 2025-11-10T13:00:14.803Z
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

export default function DragAndDropDocumentation() {
    return <ViewDocumentation title='import { ViewDragAndDrop } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewDragAndDrop } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return <ViewDragAndDrop type=\"test\" />\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}