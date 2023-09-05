import { codeLinesToString } from "../utils/code"
import { absPath, mkdir, saveText } from "../utils/fs"
import { getHeader } from "./header"

export async function writeViewsRoutes(viewShortNames: string[]) {
    const content = codeLinesToString([
        getHeader(),
        `import React from "react"`,
        `import { useParams } from "react-router-dom"`,
        "",
        ...viewShortNames.map((name) => `import Doc${name} from "./${name}"`),
        "",
        "export default function ViewsRoutes() {",
        [
            "const { name } = useParams()",
            "switch (name) {",
            viewShortNames.map(
                (name) => `case "${name}": return <Doc${name} />`
            ),
            "}",
            `return <div>No documentation for component <b>{name}</b>!</div>`,
        ],
        "}",
    ])
    await saveText(absPath("doc/src/routes/view/index.tsx"), content)
    await mkdir(absPath("doc/src/view/generated/ViewsList"))
    await saveText(
        absPath("doc/src/view/generated/ViewsList/index.tsx"),
        codeLinesToString([
            getHeader(),
            `import React from "react"`,
            "",
            `export default function ViewsList() {`,
            [
                "return <>",
                viewShortNames.map(
                    (name) => `<div><a href="#/view/${name}">${name}</a></div>`
                ),
                "</>",
            ],
            "}",
        ])
    )
}
