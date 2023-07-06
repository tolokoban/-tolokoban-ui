import Path from "node:path"

/**
 * @param path Relative to the root of the project.
 * Where we can find bith "lib/" and "doc/" forlders.
 */
export function absPath(...path: string[]) {
    return Path.resolve(__dirname, "../../../..", ...path)
}
