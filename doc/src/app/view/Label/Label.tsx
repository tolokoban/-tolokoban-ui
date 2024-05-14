/**
 * 2024-05-14T14:52:25.751Z
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

export default function LabelDocumentation() {
    return (
        <ViewDocumentation title='import { ViewLabel } from "@tolokoban/ui"'>
            <ViewDemo
                description={"# Default usage\n"}
                // eslint-disable-next-line no-template-curly-in-string
                example={
                    'import React from "react"\nimport { ViewInputText, ViewLabel } from "@tolokoban/ui"\n\nexport default function Demo() {\n    const [name, setName] = React.useState("Mr Bean")\n    return (\n        <div>\n            <ViewLabel value="What\'s your name?" title="This is a tooltip...">\n                <ViewInputText value={name} onChange={setName} />\n            </ViewLabel>\n            {name.trim() && (\n                <p>\n                    Nice to meet you, <b>{name}</b>!\n                </p>\n            )}\n        </div>\n    )\n}\n'
                }
            >
                <DemoDefault />
            </ViewDemo>
            <p>
                If you wrap a <code>textarea</code> or <code>input</code>{" "}
                element, the label will be linked to it. This will help screen
                reader and allow a click on the label to give the focus to the
                element.
            </p>
        </ViewDocumentation>
    )
}
