const canvas = document.createElement("canvas")
canvas.width = 1
canvas.height = 1

const INV_6 = 1 / 6
export default class Color {
    private static _ctx: CanvasRenderingContext2D | null = null

    private static get ctx(): CanvasRenderingContext2D {
        if (!Color._ctx) {
            const canvas = document.createElement("canvas")
            canvas.width = 1
            canvas.height = 1
            const ctx = canvas.getContext("2d")
            if (!ctx)
                throw Error(
                    "[Color] Unable to create CanvasRenderingContext2D!"
                )

            Color._ctx = ctx
        }
        return Color._ctx
    }

    static makeGradient(size: number, ...from: Array<string | Color>): Color[] {
        const colors: Color[] = []
        const factor = 1 / (size - 1)
        for (let i = 0; i < size; i++) {
            colors.push(Color.mix(i * factor, ...from))
        }
        return colors
    }

    /**
     * Get a value from a colorramp made of `from` colors.
     *
     * @param from Colors
     * @param value From 0.0 to 1.0
     */
    static mix(value: number, ...from: Array<string | Color>): Color {
        const inputs = from.map((source) => new Color(source))
        const steps = inputs.length - 1
        if (steps < 0) return new Color("#000")
        if (steps === 0) return inputs[0]

        const start = Math.min(Math.floor(value * steps), steps - 1)
        const colorA = inputs[start + 1]
        const colorB = inputs[start]
        const a = steps * (value - start / steps)
        const b = 1 - a
        return new Color(
            `color-mix(in lch, ${colorA.toString()}, ${colorB.toString()} ${
                100 * b
            }%)`
        )
    }

    static isLight(colorSource: string | Color): boolean {
        const color = new Color(colorSource)
        return color.isLight()
    }

    static isDark(colorSource: string | Color): boolean {
        const color = new Color(colorSource)
        return color.isDark()
    }

    /**
     * @param backgroundColor Reference color.
     * @param foregroundColors Candidates colors.
     * @returns Find among `foregroundColors` the one that has the most contrast with `backgroundColor`.
     */
    static bestContrast(
        backgroundColor: string | Color,
        ...foregroundColors: (string | Color)[]
    ): Color {
        const bgColor = new Color(backgroundColor)
        const bgLightness = bgColor.perceivedLightness
        const fgColors = foregroundColors.map((color) => new Color(color))
        const fgLightnesses = fgColors.map((color) => color.perceivedLightness)
        let bestIndex = 0
        let bestContrast = Math.abs(bgLightness - fgLightnesses[0])
        for (let index = 1; index < fgColors.length; index++) {
            const contrast = Math.abs(bgLightness - fgLightnesses[index])
            if (contrast > bestContrast) {
                bestIndex = index
                bestContrast = contrast
            }
        }
        return fgColors[bestIndex]
    }

    public R = 0
    public G = 0
    public B = 0
    public H = 0
    public S = 0
    public L = 0
    public A = 0

    constructor(colorSource: string | Color) {
        this.from(colorSource)
    }

    from(colorSource: string | Color): this {
        if (typeof colorSource === "string") {
            const ctx = Color.ctx
            ctx.clearRect(0, 0, 1, 1)
            ctx.fillStyle = colorSource
            ctx.fillRect(0, 0, 1, 1)
            const img = ctx.getImageData(0, 0, 1, 1)
            const [r, g, b, a] = img.data
            const factor = 1 / 255
            this.R = r * factor
            this.G = g * factor
            this.B = b * factor
            this.A = a * factor
        } else {
            this.R = colorSource.R
            this.G = colorSource.G
            this.B = colorSource.B
            this.A = colorSource.A
        }
        return this
    }

    toString() {
        const c = (value: number) =>
            Math.floor(255 * value)
                .toString(16)
                .padStart(2, "0")
        return `#${c(this.R)}${c(this.G)}${c(this.B)}${c(this.A)}`
    }

    get luminance() {
        return (
            0.2126 * this.sRgbToLinear(this.R) +
            0.7152 * this.sRgbToLinear(this.G) +
            0.0722 * this.sRgbToLinear(this.B)
        )
    }

    get perceivedLightness() {
        const Y = this.luminance
        return (
            (Y <= 216 / 24389
                ? Y * (24389 / 27)
                : Math.pow(Y, 1 / 3) * 116 - 16) * 1e-2
        )
    }

    /**
     * Remove gamma from sRGB component.
     */
    sRgbToLinear(value: number) {
        return value < 0.04045
            ? value / 12.92
            : Math.pow((value + 0.055) / 1.055, 2.4)
    }

    isLight(): boolean {
        return !this.isDark()
    }

    isDark(): boolean {
        return this.perceivedLightness < 0.5
    }

    rgb2hsl() {
        const R = this.R
        const G = this.G
        const B = this.B

        const min = Math.min(R, G, B)
        const max = Math.max(R, G, B)
        const delta = max - min

        this.L = 0.5 * (max + min)

        if (delta < 1e-6) {
            this.H = 0
            this.S = 0
        } else {
            this.S = delta / (1 - Math.abs(this.L + this.L - 1))
            if (max === R) {
                this.H =
                    G >= B
                        ? INV_6 * ((G - B) / delta)
                        : INV_6 * ((B - G) / delta)
            } else if (max === G) {
                this.H = INV_6 * (2 + (B - R) / delta)
            } else {
                this.H = INV_6 * (4 + (R - G) / delta)
            }
        }
    }

    /**
     * @see https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
     */
    hsl2rgb() {
        const H = 6 * this.H
        const S = this.S
        const L = this.L
        const chroma = (1 - Math.abs(L + L - 1)) * S
        const x = chroma * (1 - Math.abs((H % 2) - 1))

        let R = 0
        let G = 0
        let B = 0

        if (H < 3) {
            if (H < 1) {
                R = chroma
                G = x
                B = 0
            } else if (H < 2) {
                R = x
                G = chroma
                B = 0
            } else {
                // H == 2.
                R = 0
                G = chroma
                B = x
            }
        } else if (H < 4) {
            R = 0
            G = x
            B = chroma
        } else if (H < 5) {
            R = x
            G = 0
            B = chroma
        } else {
            R = chroma
            G = 0
            B = x
        }

        const shift = L - chroma * 0.5
        this.R = R + shift
        this.G = G + shift
        this.B = B + shift
        return this
    }
}
