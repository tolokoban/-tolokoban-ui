import { existsSync } from "node:fs"
import Path from "node:path"
import {
    absPath,
    mkdir,
    saveTextIfNew,
    saveText,
    listDirs,
    loadText,
} from "../utils/fs"
import { getHeader } from "./header"
import { logWarning } from "../utils/log"
import { CodeSection, codeToString } from "../utils/code"

export async function writeView(viewShortName: string) {
    const root = absPath(`doc/src/routes/view/${viewShortName}/`)
    await mkdir(Path.resolve(root, `demo/Default`))
    await saveTextIfNew(
        Path.resolve(root, `demo/Default/Default.tsx`),
        `import React from "react"
import { View${viewShortName} } from "@tolokoban/ui"

export default function Demo() {
    return <View${viewShortName} />
}
`
    )
    await saveText(
        Path.resolve(root, "demo/Default/index.ts"),
        `${getHeader()}\nexport { default } from "./Default"`
    )
    await saveTextIfNew(
        Path.resolve(root, `demo/Default/Default.md`),
        `# Default usage
`
    )
    await saveText(
        Path.resolve(root, `${viewShortName}.tsx`),
        await aggregateDemos(Path.resolve(root, "demo"), viewShortName)
    )
    await saveText(
        Path.resolve(root, "index.tsx"),
        `${getHeader()}
import React from "react"
import { ViewSpinner } from "@tolokoban/ui"

const LazyView = React.lazy(() => import("./${viewShortName}"))

export default function Doc${viewShortName}() {
    return (
        <React.Suspense
            fallback={
                <ViewSpinner>
                    Loading <b>${viewShortName}</b> documentation...
                </ViewSpinner>
            }
        >
            <LazyView />
        </React.Suspense>
    )
}
`
    )
}

async function aggregateDemos(
    root: string,
    viewShortName: string
): Promise<string> {
    const imports: CodeSection[] = [
        `import React from "react"`,
        `import ViewDocumentation from "@/view/ViewDocumentation"`,
        `import ViewDemo from "@/view/ViewDemo"`,
    ]
    const articles: CodeSection[] = []
    const dirs = await listDirs(root)
    for (const dir of dirs) {
        if (!checkDemoDir(root, dir)) continue

        imports.push(`import Demo${dir} from "./demo/${dir}"`)
        const description = await loadText(Path.resolve(root, dir, `${dir}.md`))
        const example = await loadText(Path.resolve(root, dir, `${dir}.tsx`))
        articles.push(
            "<ViewDemo",
            [
                `description={${JSON.stringify(description)}}`,
                "// eslint-disable-next-line no-template-curly-in-string",
                `example={${JSON.stringify(example)}}`,
            ],
            ">",
            [`<Demo${dir} />`],
            "</ViewDemo>"
        )
    }
    return [
        getHeader(),
        ...imports,
        "",
        `export default function ${viewShortName}Documentation() {`,
        [
            `return <ViewDocumentation title='import { View${viewShortName} } from "@tolokoban/ui"'>`,
            articles,
            "</ViewDocumentation>",
        ],
        "}",
    ]
        .map(line => codeToString(line))
        .join("\n")
}

function checkDemoDir(root: string, name: string) {
    const missingFiles: string[] = []
    for (const file of ["index.ts", `${name}.md`, `${name}.tsx`]) {
        if (!existsSync(Path.resolve(root, name, file))) {
            missingFiles.push(file)
        }
    }
    if (missingFiles.length === 0) return true

    logWarning("Invalid demo folder: ", Path.resolve(root, name))
    for (const file of missingFiles) {
        logWarning("  ", `"${file}"`, "is missing!")
    }
}
