/** @see https://ts-ast-viewer.com */
import Path from "node:path"
import { Project } from "ts-morph"
import { absPath, saveText } from "./utils/fs.js"
import { color, logError } from "./utils/log.js"
import { parseProperties } from "./utils/properties.js"
import { isCapitalized } from "./utils/string.js"
import { writeView } from "./doc/view.js"
import { writeViewsRoutes } from "./doc/views-routes.js"

const tsConfigFilePath = absPath("./lib/tsconfig.json")
const prj = new Project({
    tsConfigFilePath,
})

const viewsToSkip = ["Tab"]

async function processViews() {
    const viewDirectory = prj.getDirectoryOrThrow(absPath("lib/src/view"))
    const viewDirectories = viewDirectory.getDirectories()
    const viewShortNames: string[] = []
    for (const directory of viewDirectories) {
        const name = directory.getBaseName()
        if (!isCapitalized(name)) continue

        const file = directory.getSourceFileOrThrow(
            Path.resolve(directory.getPath(), `./${name}.tsx`)
        )
        try {
            // const props = parseProperties(file, `View${name}Props`)
            // if (viewsToSkip.includes(name)) {
            //     console.log(
            //         `<${color(`View${name}`, "LightCyan")} ${props
            //             .map(prop => prop.name)
            //             .join(" ")} /> Sub-component.`
            //     )
            //     continue
            // }

            // console.log(
            //     `<${color(`View${name}`, "LightGreen")} ${props
            //         .map(prop => prop.name)
            //         .join(" ")} />`
            // )
            if (viewsToSkip.includes(name)) continue

            console.log(`<${color(`View${name}`, "LightGreen")} ... />`)
            viewShortNames.push(name)
            await writeView(name)
        } catch (ex) {
            logError("========================================")
            logError(`Error in <${name} />:`, file.getFilePath())
            logError(`${ex}`)
        }
    }
    await writeViewsRoutes(viewShortNames)
}

async function processIcons() {
    const iconsDirectory = prj.getDirectoryOrThrow(
        absPath("lib/src/view/icons")
    )
    const files = iconsDirectory.getSourceFiles()
    const names = []
    for (const file of files) {
        const name = file.getBaseNameWithoutExtension()
        if (name.startsWith("Icon")) {
            names.push(name.substring("Icon".length))
        }
    }
    names.sort()
    console.log(
        `${color("Icons", "LightGreen")} ${color(`(${names.length})`, "BgPurple")}: ${names.join(", ")}.`
    )
    const code = [
        `import * as React from "react"`,
        `import { GenericIconProps } from "@tolokoban/ui"`,
        `import { ${names.map((name) => `Icon${name}`).join(", ")} } from "@tolokoban/ui"`,
        "",
        "export const IconsMap: Record<string, React.FC<GenericIconProps>> = {",
        ...names.map((name) => `    ${name}: Icon${name},`),
        "}",
    ].join("\n")
    await saveText(absPath("doc/src/icons.ts"), code)
}

async function start() {
    await processViews()
    await processIcons()
}

start()
