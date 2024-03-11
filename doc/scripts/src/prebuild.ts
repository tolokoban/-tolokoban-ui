/** @see https://ts-ast-viewer.com */
import Path from "node:path"
import { Project } from "ts-morph"
import { absPath } from "./utils/fs.js"
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

async function start() {
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

start()
