import {
    Node,
    PropertySignature,
    SourceFile,
    SyntaxKind,
    TypeReferenceNode,
} from "ts-morph"

export function listProperties(
    file: SourceFile | undefined,
    typeName?: string
): PropertySignature[] {
    if (!file) return []

    const expectedName =
        typeName ?? `${file.getBaseNameWithoutExtension()}Props`
    const props: PropertySignature[] = listPropertiesFromInterface(
        file,
        expectedName
    )
    if (props.length > 0) return props

    return listPropertiesFromType(file, expectedName)
}

function listPropertiesFromInterface(
    file: SourceFile,
    expectedName: string
): PropertySignature[] {
    const props: PropertySignature[] = []
    const children = file.getChildrenOfKind(SyntaxKind.InterfaceDeclaration)
    for (const child of children) {
        if (child.getName() !== expectedName) continue

        const properties = child.getChildrenOfKind(SyntaxKind.PropertySignature)
        for (const property of properties) {
            props.push(property)
        }
    }
    return props
}

function listPropertiesFromType(
    file: SourceFile,
    expectedName: string
): PropertySignature[] {
    const props: PropertySignature[] = []
    const children = file.getChildrenOfKind(SyntaxKind.TypeAliasDeclaration)
    for (const child of children) {
        if (child.getName() !== expectedName) continue

        const typeLiteralNode = child.getFirstChildByKind(
            SyntaxKind.TypeLiteral
        )
        if (typeLiteralNode) {
            return typeLiteralNode.getDescendantsOfKind(
                SyntaxKind.PropertySignature
            )
        }

        const properties = child.getChildrenOfKind(SyntaxKind.PropertySignature)
        for (const property of properties) {
            props.push(property)
        }

        const intersectionTypeNode = child.getFirstChildByKind(
            SyntaxKind.IntersectionType
        )
        if (intersectionTypeNode) {
            for (const node of child.getChildren()) {
                switch (node.getKindName()) {
                    case "TypeLiteral":
                        node.getChildrenOfKind(
                            SyntaxKind.PropertySignature
                        ).forEach((prop) => props.push(prop))
                        break
                    case "IntersectionType":
                        parseIntersectionTypeNode(node, props)
                        break
                    case "TypeKeyword":
                    case "Identifier":
                    case "EqualsToken":
                    case "SyntaxList":
                        // Just ignore these tokens.
                        break
                    default:
                        console.error(
                            "Don't know what to do with",
                            node.getKindName()
                        )
                }
            }
        }
    }
    return props
}

function parseIntersectionTypeNode(root: Node, props: PropertySignature[]) {
    for (const node of root.getChildren()) {
        switch (node.getKindName()) {
            case "TypeReference":
                const typeReferenceNode = node as TypeReferenceNode
                const identifier = typeReferenceNode.getFirstChildByKind(
                    SyntaxKind.Identifier
                )
                if (identifier) {
                    const [def] = identifier.getDefinitions()
                    if (def) {
                        const additionalProps = listProperties(
                            def.getSourceFile(),
                            def.getName()
                        )
                        additionalProps.forEach((prop) => props.push(prop))
                    }
                }
                break
            case "SyntaxList":
                parseIntersectionTypeNode(node, props)
                break
            case "TypeLiteral":
                node.getChildrenOfKind(SyntaxKind.PropertySignature).forEach(
                    (prop) => props.push(prop)
                )
                break
            case "AmpersandToken":
                // Ignore these tokens.
                break
            default:
                console.error("Don't know what to do with", node.getKindName())
        }
    }
}
