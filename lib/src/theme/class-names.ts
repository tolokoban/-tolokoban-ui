import { ColorLevel } from "../types"

export default class ClassNames {
    private readonly signature = `${Date.now().toString(36)}-Theme-`

    constructor() {
        this.init()
    }

    readonly colorPrimary = (level: ColorLevel = "5") =>
        this.cls(`color-primary-${level}`)
    readonly colorSecondary = (level: ColorLevel = "5") =>
        this.cls(`color-secondary-${level}`)
    readonly colorTertiary = (level: ColorLevel = "5") =>
        this.cls(`color-tertiary-${level}`)
    readonly colorNeutral = (level: ColorLevel = "5") =>
        this.cls(`color-neutral-${level}`)

    join(...items: unknown[]) {
        return items.filter((item) => typeof item === "string").join(" ")
    }

    padding(...values: Array<"none" | "XS" | "S" | "M" | "L" | "XL">) {
        let [vertical, horizontal] = values
        if (!vertical) vertical = "none"
        if (!horizontal) horizontal = vertical
        return this.cls(`padding-${vertical}-${horizontal}`)
    }

    margin(...values: Array<"none" | "XS" | "S" | "M" | "L" | "XL">) {
        let [vertical, horizontal] = values
        if (!vertical) vertical = "none"
        if (!horizontal) horizontal = vertical
        return this.cls(`margin-${vertical}-${horizontal}`)
    }

    display(type: "flex" | "grid") {
        const classes = [this.cls(`display-${type}`)]
        return classes.join(" ")
    }

    private cls(name: string) {
        return `${this.signature}${name}`
    }

    private readonly init = () => {
        if (!document.head) {
            window.setTimeout(this.init, 200)
            return
        }
        const lines: string[] = [
            `.${this.cls(
                "display-flex"
            )} { display: flex; justify-content: space-between; align-items: center; gap: var(--theme-gap-S); }`,
            `.${this.cls(
                "display-inline-flex"
            )} { display: inline-flex; justify-content: space-between; align-items: center; gap: var(--theme-gap-S); }`,
        ]
        for (const vertical of ["none", "XS", "S", "M", "L", "XL"]) {
            for (const horizontal of ["none", "XS", "S", "M", "L", "XL"]) {
                lines.push(
                    `.${this.cls(
                        `padding-${vertical}-${horizontal}`
                    )} { padding: var(--theme-gap-${vertical}) var(--theme-gap-${horizontal}); }`
                )
                lines.push(
                    `.${this.cls(
                        `margin-${vertical}-${horizontal}`
                    )} { margin: var(--theme-gap-${vertical}) var(--theme-gap-${horizontal}); }`
                )
            }
        }
        for (const group of ["primary", "secondary", "tertiary", "neutral"]) {
            for (let level = 1; level < 10; level++) {
                lines.push(
                    `.${this.cls(`color-${group}-${level}`)} {`,
                    `  color: var(--theme-color-on-${group}-${level});`,
                    `  background-color: var(--theme-color-${group}-${level});`,
                    "}"
                )
            }
        }
        const style = document.createElement("style")
        style.textContent = lines.join("\n")
        document.head.appendChild(style)
    }
}
