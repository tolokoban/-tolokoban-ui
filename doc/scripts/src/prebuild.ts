/** @see https://ts-ast-viewer.com */
import Path from "node:path"
import { Project, PropertySignature } from "ts-morph"
import { absPath } from "./utils/fs"
import { logError } from "./utils/log"
import { parseProperties } from "./utils/properties"
import { isCapitalized } from "./utils/string"
import { expandType } from "./utils/types"

function printProps(properties: PropertySignature[]) {
    for (const prop of properties) {
        for (const doc of prop.getJsDocs()) {
            console.log("//", doc.getCommentText())
        }
        const type = prop.getTypeNode()
        console.log(
            prop.getName(),
            prop.hasQuestionToken() ? "?:" : ":",
            prop.getTypeNode()?.getText(),
            "  >",
            JSON.stringify(expandType(type))
        )
    }
}

const tsConfigFilePath = absPath("./lib/tsconfig.json")
const prj = new Project({
    tsConfigFilePath,
})

const viewDirectory = prj.getDirectoryOrThrow(absPath("lib/src/view"))
const viewDirectories = viewDirectory.getDirectories()
for (const directory of viewDirectories) {
    const name = directory.getBaseName()
    if (!isCapitalized(name)) continue

    const file = directory.getSourceFileOrThrow(
        Path.resolve(directory.getPath(), `./${name}.tsx`)
    )
    try {
        console.log("----------", name, "----------")
        const props = parseProperties(file, `View${name}Props`)
        console.log("Number of props:", props.length)
        // printProps(props)
    } catch (ex) {
        logError("========================================")
        logError("Error in file:", file.getFilePath())
        logError(`${ex}`)
    }
}
