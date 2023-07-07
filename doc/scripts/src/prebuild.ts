/** @see https://ts-ast-viewer.com */
import Path from "node:path"
import { Project } from "ts-morph"
import { absPath } from "./utils/fs"
import { logError } from "./utils/log"
import { parseProperties } from "./utils/properties"
import { isCapitalized } from "./utils/string"
import { writeView } from "./doc/view"
import { writeViewsRoutes } from "./doc/views-routes"

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
            console.log(`<View${name} ... />`)
            const props = parseProperties(file, `View${name}Props`)
            // console.log("Number of props:", props.length)
            // printProps(props)

            if (viewsToSkip.includes(name)) {
                console.log("    ...this is a subcomponent.")
                continue
            }

            viewShortNames.push(name)
            await writeView(name)
        } catch (ex) {
            logError("========================================")
            logError("Error in file:", file.getFilePath())
            logError(`${ex}`)
        }
    }
    await writeViewsRoutes(viewShortNames)
}

start()
