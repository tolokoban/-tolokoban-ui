import { PropertySignature } from "ts-morph"
import { expandType } from "./types.js"

export function printProps(properties: PropertySignature[]) {
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
