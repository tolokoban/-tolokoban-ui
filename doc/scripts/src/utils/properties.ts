import {
    Node,
    PropertySignature,
    SourceFile,
    SyntaxKind,
    TypeNode,
} from "ts-morph"

import { TypeDef } from "./guards.js"
import { expandType } from "./types.js"
import DefaultDoc from "./default-doc.js"

export interface PropDef {
    name: string
    type: TypeDef
    comment: string
    optional: boolean
}

export function parseProperties(
    file: SourceFile | undefined,
    expectedName: string
): PropDef[] {
    const props = listProperties(file, expectedName)
    const list: PropDef[] = []
    for (const prop of props) {
        const name = prop.getName()
        try {
            const type = expandType(prop.getTypeNode())
            if (!type) continue

            list.push({
                name,
                type,
                comment: extractDoc(prop),
                optional: prop.hasQuestionToken(),
            })
        } catch (ex) {
            throw Error(`Error in prop "${name}"!\n${ex}`)
        }
    }
    return list
}

function listProperties(
    file: SourceFile | undefined,
    expectedName: string
): PropertySignature[] {
    if (!file) return []

    try {
        const props: PropertySignature[] = listPropertiesFromInterface(
            file,
            expectedName
        )
        if (props.length > 0) return props

        return listPropertiesFromType(file, expectedName)
    } catch (ex) {
        throw Error(
            `Error while looking for type "${expectedName}" in file
    "${file.getFilePath()}"!

Please make sure that:
  * your exported component is called "${expectedName.substring(
      0,
      expectedName.length - "Props".length
  )}",
  * and the props type is called "${expectedName}"

${ex}`
        )
    }
}

function listPropertiesFromInterface(
    file: SourceFile,
    expectedName: string
): PropertySignature[] {
    try {
        const props: PropertySignature[] = []
        const children = file.getChildrenOfKind(SyntaxKind.InterfaceDeclaration)
        for (const child of children) {
            if (child.getName() !== expectedName) continue

            const properties = child.getChildrenOfKind(
                SyntaxKind.PropertySignature
            )
            for (const property of properties) {
                props.push(property)
            }
        }
        return props
    } catch (ex) {
        throw Error(`Error while looking by ininterface\n\n${ex}`)
    }
}

function listPropertiesFromType(
    file: SourceFile,
    expectedName: string
): PropertySignature[] {
    try {
        const props: PropertySignature[] = []
        const children = file.getChildrenOfKind(SyntaxKind.TypeAliasDeclaration)
        const child = children.find((node) => node.getName() === expectedName)
        if (!child) throw Error("cannot find any TypeAliasDeclaration!")

        const type = child.getTypeNode()
        if (!type) {
            throw Error(`No type found in ${child.print()}`)
        }

        try {
            if (TypeNode.isTypeLiteral(type)) {
                return type.getDescendantsOfKind(SyntaxKind.PropertySignature)
            }
            if (TypeNode.isIntersectionTypeNode(type)) {
                parseIntersectionTypeNode(type.getTypeNodes(), props)
                return props
            }
            if (TypeNode.isUnionTypeNode(type)) {
                parseUnionTypeNode(type.getTypeNodes(), props)
                return props
            }
            throw Error(`Don't know what to do with "${type.getKindName()}"!`)
        } catch (ex) {
            throw Error(
                `Error while parsing properties in "${expectedName}"!\n${type.print()}\n${ex}`
            )
        }
    } catch (ex) {
        throw Error(`Error while looking by type\n\n${ex}`)
    }
}

function parseIntersectionTypeNode(
    nodes: Node[],
    props: PropertySignature[]
): void {
    for (const node of nodes) {
        if (TypeNode.isTypeReference(node)) {
            const identifier = node.getFirstChildByKind(SyntaxKind.Identifier)
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
            continue
        }

        if (TypeNode.isTypeLiteral(node)) {
            node.getChildrenOfKind(SyntaxKind.PropertySignature).forEach(
                (prop) => props.push(prop)
            )
            continue
        }

        throw Error(
            `Don't know what to do with "${node.getKindName()}"!\n${node.print()}`
        )
    }
}

function parseUnionTypeNode(nodes: Node[], props: PropertySignature[]): void {
    const unionProps: PropertySignature[][] = []
    for (const node of nodes) {
        if (TypeNode.isTypeReference(node)) {
            const identifier = node.getFirstChildByKind(SyntaxKind.Identifier)
            if (identifier) {
                const [def] = identifier.getDefinitions()
                if (def) {
                    const additionalProps = listProperties(
                        def.getSourceFile(),
                        def.getName()
                    )
                    unionProps.push(additionalProps)
                }
            }
            continue
        }

        if (TypeNode.isTypeLiteral(node)) {
            unionProps.push(
                node.getChildrenOfKind(SyntaxKind.PropertySignature)
            )
            continue
        }

        throw Error(
            `Don't know what to do with "${node.getKindName()}"!\n${node.print()}`
        )
    }
    const [commonNames, ...otherNames] = unionProps.map((a) =>
        a.map((b) => b.getName())
    )
    let intersection: string[] = commonNames
    for (const names of otherNames) {
        intersection = computeIntersection(intersection, names)
    }
    for (const propsList of unionProps) {
        for (const prop of propsList) {
            const name = prop.getName()
            if (intersection.includes(name)) props.push(prop)
        }
    }
}

function computeIntersection(list1: string[], list2: string[]): string[] {
    const list: string[] = []
    for (const item1 of list1) {
        if (list2.includes(item1)) list.push(item1)
    }
    for (const item2 of list2) {
        if (list.includes(item2)) continue

        if (list1.includes(item2)) list.push(item2)
    }
    return list
}

function extractDoc(prop: PropertySignature): string {
    const docs = prop.getJsDocs()
    if (docs.length === 0) {
        const defaultDoc = DefaultDoc[prop.getName()]
        if (typeof defaultDoc === "string") return defaultDoc

        throw Error(`JSDoc is missing for property "${prop.getName()}"!`)
    }
    return docs.map((doc) => doc.getCommentText()).join("\n")
}
