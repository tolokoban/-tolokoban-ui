/**
 * 2025-07-18T12:38:15.350Z
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

export default function InputFileDocumentation() {
    return <ViewDocumentation title='import { ViewInputFile } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { IconImport, ViewInputFile, useModal } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const modal = useModal()\n    const handleLoad = (files: File[]) => {\n        void modal.info(\n            <div>\n                <h1>Selected files:</h1>\n                <ul>\n                    {files.map((file) => (\n                        <li key={file.name}>\n                            <b>{file.name}</b> ({file.size} bytes) - {file.type}\n                        </li>\n                    ))}\n                </ul>\n            </div>\n        )\n    }\n    return (\n        <ViewInputFile onLoad={handleLoad} icon={IconImport} multiple>\n            Select one or several files\n        </ViewInputFile>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}