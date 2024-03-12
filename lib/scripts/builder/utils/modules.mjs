import FS, { existsSync } from "node:fs"
import Path from "node:path"
import * as Acorn from "acorn"
import { extractExtension, readDir } from "./fs.mjs"

/**
 * @param {string} path
 */
export async function findModules(path, extensions) {
    const acceptedExtensions = extensions ?? [".js"]
    const jsFilter = (info) =>
        !info.isDirectory() &&
        acceptedExtensions.includes(extractExtension(info.name))
    const dirFilter = (info) => !info.name.startsWith(".") && info.isDirectory()
    const files = await readDir(path, jsFilter)
    const fringe = await readDir(path, dirFilter)
    while (fringe.length > 0) {
        const folder = fringe.shift()
        const subFolders = await readDir(folder, dirFilter)
        subFolders.forEach((dir) => fringe.push(dir))
        const subFiles = await readDir(folder, jsFilter)
        subFiles.forEach((f) => files.push(f))
    }
    return files.map((f) => Path.relative(path, f))
}

export function listRelativeImports(filename) {
    const root = Path.dirname(filename)
    const content = FS.readFileSync(filename).toString()
    const tree = Acorn.parse(content, {
        ecmaVersion: "2020",
        sourceType: "module",
    })
    const { body } = tree
    if (!body || !Array.isArray(body)) return []

    const imports = []
    const replacements = []
    for (const node of body) {
        if (!node.source) continue

        if (
            node.type === "ExportNamedDeclaration" ||
            node.type === "ExportAllDeclaration" ||
            node.type === "ImportDeclaration"
        ) {
            const { start, end, value } = node.source
            if (!value.startsWith(".")) continue

            const ext = extractExtension(value)
            if (ext === ".js") continue

            if (ext === "") {
                if (existsSync(Path.resolve(root, value, "index.js"))) {
                    replacements.push({
                        start,
                        end,
                        value: `${value}/index.js`,
                    })
                } else if (existsSync(Path.resolve(root, `${value}.js`))) {
                    replacements.push({
                        start,
                        end,
                        value: `${value}.js`,
                    })
                }
                continue
            }
            imports.push(Path.resolve(root, value))
        } else {
            continue
        }
    }
    if (replacements.length > 0) {
        const code = []
        let i = 0
        for (const { start, end, value } of replacements) {
            code.push(content.substring(i, start))
            code.push(JSON.stringify(value))
            i = end
        }
        if (i < content.length) code.push(content.substring(i))
        const newContent = code.join("")
        FS.writeFileSync(filename, newContent)
    }
    return imports
}

/**
 * @param {string} text
 * @param {number} pos
 */
function findLocation(text, pos) {
    const begin = text.substring(0, pos)
    const lines = begin.split("\n")
    const lastLine = lines.pop()
    return `${lines.length + 1},${lastLine.length}`
}
