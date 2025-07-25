/**
 * 2025-07-18T07:47:42.976Z
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
            example={"import React from \"react\"\nimport { IconClose, IconOk, ViewDialog } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <div>\n            <p>\n                A <b>Dialog</b> looks like a window with a potential header and\n                button in the footer:\n            </p>\n            <ViewDialog\n                title=\"This is your last warning!!!\"\n                bodyColor=\"primary-1\"\n                headColor=\"secondary-7\"\n                footColor=\"primary-3\"\n                shadow={3}\n                padding=\"M\"\n                buttonCancel={{\n                    children: \"Maybe not...\",\n                    icon: IconClose,\n                    onClick: () => alert(\"Abort...\"),\n                }}\n                buttonValidate={{\n                    children: \"Let do this! Yeah!!\",\n                    icon: IconOk,\n                    onClick: () => alert(\"BOOM!!!\"),\n                }}\n            >\n                <p>\n                    Are you sure you want to destroy your computer with an\n                    <b>atomic explosion</b>?\n                </p>\n            </ViewDialog>\n        </div>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}