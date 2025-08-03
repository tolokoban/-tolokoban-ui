/**
 * 2025-08-03T07:27:06.217Z
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

export default function InputImageDocumentation() {
    return <ViewDocumentation title='import { ViewInputImage } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewInputImage } from \"@tolokoban/ui\"\n\nimport ImageUrl from \"./girl.jpg\"\n\nexport default function Demo() {\n    const [url, setUrl] = React.useState(ImageUrl)\n    return (\n        <ViewInputImage\n            label=\"Click on the image to upload another one\"\n            width={320}\n            height={240}\n            value={url}\n            onChange={(v) => {\n                if (v) setUrl(v)\n            }}\n        />\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}