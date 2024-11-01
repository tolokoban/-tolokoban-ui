export type CodeBloc = string | CodeBloc[]

export function codeToString(
    code: CodeBloc,
    indentString = "    ",
    level = -1
): string {
    const indent = "".padEnd(
        Math.max(0, level) * indentString.length,
        indentString
    )
    if (typeof code === "string") return `${indent}${code}`

    return code
        .map((item) => codeToString(item, indentString, level + 1))
        .join("\n")
}
