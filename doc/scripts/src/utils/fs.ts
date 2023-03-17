import Path from "node:path"

export function absPath(...path: string[]) {
    return Path.resolve(__dirname, "../../../..", ...path)
}
