import {
    Node,
    TypeNode,
    SyntaxKind,
    TypeReferenceNode,
    UnionTypeNode,
    SyntaxList,
    LiteralTypeNode,
    TupleTypeNode,
    ArrayTypeNode,
} from "ts-morph"
import { TypeDef } from "./guards.js"

const AVAILABLE_EXTRA_TYPES = ["React.ReactNode", "JSX.Element"]

export function expandType(type: Node | undefined): TypeDef | undefined {
    if (!type) return undefined

    try {
        const kind = type.getKindName()
        switch (kind) {
            case "StringKeyword":
            case "TemplateLiteralType":
                return "string"
            case "NumberKeyword":
                return "number"
            case "BooleanKeyword":
                return "boolean"
            case "ParenthesizedType":
                return "function"
            case "TypeReference":
                return getReferenceDefinition(
                    type.asKind(SyntaxKind.TypeReference)
                )
            case "UnionType":
                return getUnionDefinition(type.asKind(SyntaxKind.UnionType))
            case "ArrayType":
                return getArrayDefinition(type.asKind(SyntaxKind.ArrayType))
            case "SyntaxList":
                return getSyntaxListDefinition(
                    type.asKind(SyntaxKind.SyntaxList)
                )
            case "LiteralType":
                return getLiteralDefinition(type.asKind(SyntaxKind.LiteralType))
            case "TupleType":
                return getTupeDefinition(type.asKind(SyntaxKind.TupleType))
            default:
                throw Error(`Unknown type: "${kind}"!`)
        }
    } catch (ex) {
        throw Error(
            `Error in type of kind "${type.getKindName()}":\n${type.print()}\n${ex}`
        )
    }
}

function getReferenceDefinition(
    node: TypeReferenceNode | undefined
): TypeDef | undefined {
    if (!node) return undefined

    const name = node.getTypeName().print()
    if (AVAILABLE_EXTRA_TYPES.includes(name)) {
        return ["extra", name]
    }
    if (name === "React.ReactElement" || name === "React.FC") {
        const args = node.getTypeArguments()
        if (args.length === 1) {
            const elemName = args[0].print()
            if (elemName.startsWith("View") && elemName.endsWith("Props")) {
                return [
                    "element",
                    elemName.substring(0, elemName.length - "Props".length),
                ]
            }
        }
        return ["element", "any"]
    }
    const identifier = node.getFirstChildByKindOrThrow(SyntaxKind.Identifier)
    const [def] = identifier.getDefinitions()
    if (def) {
        const file = def.getSourceFile()
        const exportedDeclarations = file.getExportedDeclarations()
        const name = identifier.getText()
        const declarations = exportedDeclarations.get(name)
        if (!declarations || declarations.length === 0) return undefined

        for (const declaration of declarations) {
            if (TypeNode.isTypeAliasDeclaration(declaration)) {
                return expandType(declaration.getTypeNode())
            }
            // if (
            //     TypeNode.isUnionTypeNode(declaration)
            // ) {
            //     return expandType(declaration.getTypeNode())
            // }
            console.log("###", declaration.getKindName())
            console.log(declaration.print())
            console.log()
        }
    }
    return "unknown"
}

function getUnionDefinition(
    union: UnionTypeNode | undefined
): TypeDef | undefined {
    if (!union) return undefined

    const syntaxLists = union.getChildrenOfKind(SyntaxKind.SyntaxList)
    const [syntaxList] = syntaxLists
    const types = syntaxList
        .getChildren()
        .filter((item) => item.getKindName() !== "BarToken")
        .map(expandType)
        .filter((item) => typeof item !== "undefined") as TypeDef[]
    return simplifyType(["|", ...types])
}

function getSyntaxListDefinition(
    syntaxList: SyntaxList | undefined
): TypeDef | undefined {
    if (!syntaxList) return undefined

    const children = syntaxList.getChildren()
    for (const child of children) {
        console.log("###   ", child.print())
    }
    return undefined
}

function getLiteralDefinition(
    literalType: LiteralTypeNode | undefined
): TypeDef | undefined {
    if (!literalType) return undefined

    for (const child of literalType.getChildren()) {
        switch (child.getKindName()) {
            case "StringLiteral":
                return ["string", JSON.parse(child.getText())]
            default:
                console.warn(
                    "Unknown children of LiteralTypeNode:",
                    child.getKindName()
                )
        }
    }
    return ["unknown", literalType.print()]
}

function simplifyType(type: TypeDef): TypeDef {
    if (!isTypeDefUnion(type)) return type

    const [, ...rest] = type
    const children = rest.map(simplifyType)
    const alreadyIn = new Set<string>()
    const flatList: TypeDef[] = []
    for (const child of children) {
        if (!isTypeDefUnion(child)) {
            const id = JSON.stringify(child)
            if (!alreadyIn.has(id)) {
                alreadyIn.add(id)
                flatList.push(child)
            }
            continue
        }

        const [, ...childRest] = child
        for (const item of childRest) {
            const id = JSON.stringify(item)
            if (!alreadyIn.has(id)) {
                alreadyIn.add(id)
                flatList.push(item)
            }
        }
    }
    return ["|", ...flatList]
}

function isTypeDefUnion(type: TypeDef): type is ["|", ...TypeDef[]] {
    if (!Array.isArray(type)) return false
    return type[0] === "|"
}

function getTupeDefinition(
    tuple: TupleTypeNode | undefined
): TypeDef | undefined {
    if (!tuple) return undefined

    const namedTuples = tuple?.getChildrenOfKind(SyntaxKind.NamedTupleMember)
    if (namedTuples.length > 0) {
        const map: { [key: string]: TypeDef } = {}
        for (const namedTuple of namedTuples) {
            const [identifier, ...rest] = namedTuple.getChildren()
            if (!TypeNode.isIdentifier(identifier)) {
                throw Error(
                    `Identifier was expected as first child for NamedTupleMember: ${namedTuple.print()}`
                )
            }
            const name = identifier.getText()
            const [subType] = rest.filter(
                (item) => item.getKindName() !== "ColonToken"
            )
            if (!subType) {
                throw Error(
                    `Tuple with name "${subType}" has an unexpected type: ${namedTuple.print()}`
                )
            }
            const expandedType = expandType(subType)
            if (expandedType) map[name] = expandedType
        }
        return ["tuple", map]
    }
}

function getArrayDefinition(
    array: ArrayTypeNode | undefined
): TypeDef | undefined {
    if (!array) return undefined

    const subType = expandType(array.getElementTypeNode())
    if (!subType) return undefined

    return ["array", subType]
}
