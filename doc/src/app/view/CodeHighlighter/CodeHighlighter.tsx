/**
 * 2023-10-16T13:46:37.395Z
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
            example={"import React from \"react\"\nimport { ViewCodeHighlighter } from \"@tolokoban/ui\"\nimport Style from \"./Default.module.css\"\n\nexport default function Demo() {\n    const code = `type MyRecord = Record<string, number | number[]>\nfunction addElement<ValueType>(dic: Record<string, ValueType>, key: string, value: ValueType) {\n    dic[key] = value\n}\n\nconst dic: Record<string, { name: string }> = {}\naddElement(dic, \"you\", { name: \"Harry\" })`\n    return (\n        <ViewCodeHighlighter\n            grammar={{\n                lexer: {\n                    space: /^[ \\t\\n\\t]+/,\n                    symbol: '=,|()[]{}<>:\"'.split(\"\"),\n                },\n                scanner: [\n                    {\n                        token: \"symbol\",\n                        className: Style.symbol,\n                    },\n                ],\n            }}\n        >\n            {code}\n        </ViewCodeHighlighter>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}