export function isCapitalized(name: string) {
    const initial = name.charAt(0)
    return initial === initial.toUpperCase()
}
