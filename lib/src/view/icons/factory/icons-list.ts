import { Icon } from "../generic/generic-icon.js"
import { makeIconView } from "./icon-factory.js"

import IconsJSON from "./icons.json"

const ICONS = IconsJSON as { [key: string]: string }

interface IconDefinition {
    value: string
    keywords: string[]
}

export function getIconsDefinitions(): IconDefinition[] {
    const defs: IconDefinition[] = []
    for (const key of Object.keys(ICONS)) {
        const value = ICONS[key]
        const keywords = key
            .split(/[^0-9a-zA-Z]+/)
            .map((name) => name.toLocaleLowerCase())
        defs.push({ value, keywords })
    }
    return defs
}

export function getIconById(id: string): Icon | undefined {
    const value = ICONS[id]
    if (!value) return

    return makeIconView(value, id)
}
