export type TypeDef =
    | "boolean"
    | "null"
    | "undefined"
    | "string"
    | "number"
    | "unknown"
    | [type: "unknown", value: string]
    | [type: "extra", value: string]
    | [type: "string", value: string]
    | ["number", { min?: number; max?: number }]
    | ["|", ...TypeDef[]]
    | ["?", TypeDef]
    | ["sequence" | "seq", TypeDef[]]
    | ["array" | "arr", TypeDef]
    | ["tuple", { [name: string]: TypeDef }]
    | ["map", TypeDef]
    | ["partial", { [name: string]: TypeDef }]
    | { [name: string]: TypeDef }
