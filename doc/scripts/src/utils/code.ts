export type CodeSection = string | CodeSection[]

export function codeToString(code: CodeSection, indent = ""): string {
    if (typeof code === "string") return `${indent}${code}`

    const subIndent = `${indent}    `
    return code.map((section) => codeToString(section, subIndent)).join("\n")
}

export function codeLinesToString(lines: CodeSection[]) {
    return lines.map((line) => codeToString(line)).join("\n")
}
