import Color from "../color.js"
import { ThemeColor, ThemeSettings } from "../types.js"
import ClassNames from "./class-names.js"
import "./theme.css"

export * from "./styles/common.js"

const DEFAULT_COLOR_TEXT_LIGHT = "#fffe"
const DEFAULT_COLOR_TEXT_DARK = "#000e"
const DEFAULT_COLOR_PRIMARY: ThemeColor = "hsl(215 80% 50%)"
const DEFAULT_COLOR_SECONDARY: ThemeColor = "hsl(60 80% 50%)"
const DEFAULT_COLOR_TERTIARY: ThemeColor = "hsl(100 80% 50%)"
const DEFAULT_COLOR_NEUTRAL: ThemeColor = ["hsl(0 0% 50%)", "hsl(0 0% 100%)"]
const DEFAULT_COLOR_INPUT = "#fff"
const DEFAULT_COLOR_ERROR = "#d00"
const DEFAULT_COLOR_VALID = "#0f0"

export default class Theme {
    public static readonly classNames = new ClassNames()

    private readonly vars: Array<[name: string, value: string]> = []

    constructor(options: ThemeSettings = {}) {
        const colors = options.colors ?? {}
        const gap = options.gap ?? {
            XS: ".25rem",
            S: ".5rem",
            M: "1rem",
            L: "2rem",
            XL: "4rem",
        }
        this.add("gap-none", "0")
        this.add("gap-XS", gap.XS)
        this.add("gap-S", gap.S)
        this.add("gap-M", gap.M)
        this.add("gap-L", gap.L)
        this.add("gap-XL", gap.XL)
        this.add(
            "color-text-light",
            colors.textLight ?? DEFAULT_COLOR_TEXT_LIGHT
        )
        this.add("color-text-dark", colors.textDark ?? DEFAULT_COLOR_TEXT_DARK)
        this.addColor("input", colors.input ?? DEFAULT_COLOR_INPUT)
        this.addColor("error", colors.error ?? DEFAULT_COLOR_ERROR)
        this.addColor("valid", colors.valid ?? DEFAULT_COLOR_VALID)
        this.addColorVars(
            "primary",
            makeColors(colors.primary ?? DEFAULT_COLOR_PRIMARY)
        )
        this.addColorVars(
            "secondary",
            makeColors(colors.secondary ?? DEFAULT_COLOR_SECONDARY)
        )
        this.addColorVars(
            "tertiary",
            makeColors(colors.tertiary ?? DEFAULT_COLOR_TERTIARY)
        )
        this.addColorVars(
            "neutral",
            makeColors(colors.neutral ?? DEFAULT_COLOR_NEUTRAL)
        )
        for (let shadow = 0; shadow < 10; shadow++) {
            const y = shadow
            this.add(`shadow-${shadow}`, `0 ${y}px ${y * 2}px #000e`)
        }
    }

    /**
     * Add a new CSS custom variable.
     */
    private add(name: string, value: string, alpha = 1) {
        let color = value
        if (alpha <= 0) color = "transparent"
        else if (alpha < 1) {
            color = `${value}${padHex(Math.round(255 * alpha))}`
        }
        this.vars.push([name, color])
    }

    private addColor(name: string, color: string) {
        this.add(`color-${name}`, color)
        this.add(
            `color-on-${name}`,
            `var(--theme-color-text-${Color.isLight(color) ? `dark` : "light"})`
        )
    }

    private addColorVars(name: string, colors: string[]) {
        let index = 1
        for (const color of colors) {
            this.add(`color-${name}-${index}`, color)
            for (let alpha = 1; alpha < 10; alpha++) {
                this.add(`color-${name}-${index}-${alpha}`, color, alpha / 10)
            }
            this.add(
                `color-on-${name}-${index}`,
                `var(--theme-color-text-${
                    Color.isLight(color) ? "dark" : "light"
                })`
            )
            index++
        }
        this.add(`color-${name}`, `var(--theme-color-${name}-5)`)
    }

    /**
     * Apply this theme to `element`.
     * @param element Default to `document.body`.
     */
    apply(element?: HTMLElement | SVGElement) {
        const target = element ?? globalThis.window?.document.body
        if (target) {
            for (const [key, val] of this.vars) {
                target.style.setProperty(`--theme-${key}`, val)
            }
        }
    }
}

function makeColors(colorDef: ThemeColor): string[] {
    const colors: (string | Color)[] = Array.isArray(colorDef)
        ? colorDef
        : [colorDef]
    const output = Color.makeGradient(9, ...colors).map((color) =>
        color.toString()
    )
    return output
}

function padHex(value: number, size = 2): string {
    return `${value.toString(16)}`.padStart(size, "0")
}
