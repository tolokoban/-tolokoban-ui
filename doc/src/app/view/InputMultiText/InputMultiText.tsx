/**
 * 2025-03-31T13:37:38.529Z
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

export default function InputMultiTextDocumentation() {
    return <ViewDocumentation title='import { ViewInputMultiText } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewInputMultiText } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [lang, setLang] = React.useState(\"en\")\n    const [value, setValue] = React.useState<Record<string, string>>({\n        en: \"Hello world!\",\n        fr: \"Salut le monde !\",\n        it: \"Ciao mondo!\",\n    })\n    return (\n        <div>\n            <ViewInputMultiText\n                label=\"Welcome text\"\n                lang={lang}\n                onLangChange={setLang}\n                value={value}\n                onChange={setValue}\n            />\n        </div>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}