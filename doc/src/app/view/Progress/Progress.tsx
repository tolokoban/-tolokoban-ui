/**
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import ViewDocumentation from "@/view/ViewDocumentation"
import ViewDemo from "@/view/ViewDemo"
import DemoDefault from "./demo/Default"

export default function ProgressDocumentation() {
    return <ViewDocumentation title='import { ViewProgress } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import { ViewPanel, ViewProgress } from \"@tolokoban/ui\";\nimport React from \"react\";\n\nexport default function Demo() {\n\tconst [progress, setProgress] = React.useState(73);\n\tReact.useEffect(() => {\n\t\tconst interval = globalThis.setInterval(() => {\n\t\t\tconst t = Date.now() / 1000;\n\t\t\tsetProgress((t * 7.456) % 100);\n\t\t}, 1000);\n\t\treturn () => globalThis.clearInterval(interval);\n\t}, []);\n\n\treturn (\n\t\t<ViewPanel display=\"flex\" flexDirection=\"column\" alignItems=\"flex-start\">\n\t\t\t<ViewProgress value={progress} />\n\t\t\t<ViewProgress value={progress} fullwidth />\n\t\t\t<ViewProgress\n\t\t\t\tlabel={`Progress  (${progress.toFixed(1)} %)`}\n\t\t\t\tvalue={progress}\n\t\t\t\twidth=\"320px\"\n\t\t\t/>\n\t\t\t<ViewProgress\n\t\t\t\tlabel={`Progress  (${progress.toFixed(1)} %)`}\n\t\t\t\tvalue={progress}\n\t\t\t\tfullwidth\n\t\t\t/>\n\t\t</ViewPanel>\n\t);\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}