/** @see https://ts-ast-viewer.com */

import { Project, PropertySignature } from "ts-morph"
import { absPath } from "./utils/fs"
import { listProperties } from "./utils/properties"
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

const tsConfigFilePath = absPath("lib/tsconfig.json")
const prj = new Project({
    tsConfigFilePath,
})

const components = ["Button", "Label", "Panel"]
for (const name of components) {
    try {
        console.log("----------", name, "----------")
        const button = prj.getSourceFile(`${name}.tsx`)
        printProps(listProperties(button, `View${name}Props`))
    } catch (ex) {
        console.error("========================================")
        console.error(`${ex}`)
    }
}
