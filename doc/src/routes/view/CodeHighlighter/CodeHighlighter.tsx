/**
 * 2023-08-07T11:20:17.512Z
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

export default function CodeHighlighterDocumentation() {
    return <ViewDocumentation title='import { ViewCodeHighlighter } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewCodeHighlighter } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <ViewCodeHighlighter\n            grammar={{\n                lexer: {},\n                scanner: [],\n            }}\n            children={`// Test\nfuncton add(a, b) {\n    return a + b\n}`}\n        />\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}