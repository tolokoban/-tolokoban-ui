import { TypeNode, SyntaxKind, TypeReferenceNode } from "ts-morph"

export function expandType(type: TypeNode | undefined): any {
    if (!type) return undefined

    const kind = type.getKindName()
    switch (kind) {
        case "StringKeyword":
            return "string"
        case "TypeReference":
            return getReferenceDefinition(type.asKind(SyntaxKind.TypeReference))
        default:
            return `  🚀 ${kind}`
    }
}

function getReferenceDefinition(node: TypeReferenceNode | undefined) {
    if (!node) return "unknown"

    const identifier = node.getFirstChildByKind(SyntaxKind.Identifier)
    const name = identifier?.getText()
    if (identifier) {
        const [def] = identifier.getDefinitions()
        if (def) {
            const file = def.getSourceFile()
            const [syntaxList] = file.getChildrenOfKind(SyntaxKind.SyntaxList)
            if (!syntaxList) return "unknown"

            const children = syntaxList.getChildren()
            for (const child of children) {
                console.log(child.getName())
                if (
                    TypeNode.isTypeAliasDeclaration(child) &&
                    name === child.getName()
                ) {
                    return expandType(child.getTypeNode())
                }
                console.log("###", child.getKindName())
            }
        }
    }
    return "unknown"
}
