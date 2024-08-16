export function ensureArray<T>(elements: T | T[] | undefined): T[] {
    if (typeof elements === "undefined") return []

    return Array.isArray(elements) ? elements : [elements]
}
