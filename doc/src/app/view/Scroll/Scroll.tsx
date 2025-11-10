/**
 * 2025-11-10T12:51:17.947Z
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

export default function ScrollDocumentation() {
    return <ViewDocumentation title='import { ViewScroll } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewScroll } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <ViewScroll>\n            <ol>\n                {new Array(100).map((_, index) => (\n                    <li key={index}>\n                        Odit vel molestiae sed ea voluptatibus aut unde\n                        quisquam. Quia harum nihil aliquam. Illum beatae et\n                        voluptas quaerat et fugiat. Iste eaque rem provident\n                        dignissimos quasi totam tempora ratione. Nemo temporibus\n                        hic pariatur atque soluta aspernatur porro ut. Facilis\n                        et possimus minus quod dolor.\n                    </li>\n                ))}\n            </ol>\n        </ViewScroll>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}