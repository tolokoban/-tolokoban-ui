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
            expandType(type)
        )
    }
}

const tsConfigFilePath = absPath("lib/tsconfig.json")
const prj = new Project({
    tsConfigFilePath,
})

console.log("--------------------------------------------------------")
const button = prj.getSourceFile("Button.tsx")
printProps(listProperties(button))

console.log("--------------------------------------------------------")
const label = prj.getSourceFile("Label.tsx")
printProps(listProperties(label))

console.log("--------------------------------------------------------")
const panel = prj.getSourceFile("Panel.tsx")
printProps(listProperties(panel))
