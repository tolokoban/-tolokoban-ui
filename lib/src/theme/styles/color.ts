import { ColorName } from "../../types.js"

export interface ColorStyleProps {
    /**
     * Define the color of the component background.
     * The text color will be adjusted for maximum
     * contrast.
     */
    color?: ColorName
    /**
     * Set the text color only.
     */
    textColor?: ColorName
    /**
     * Set the background color only.
     */
    backColor?: ColorName
    /**
     * Shadow under the Panel.
     * 0 means no shadow, then shadow is bigger
     * from 1 to 9.
     */
    shadow?: number
}

export function styleColor(
    { color, textColor, backColor, shadow }: ColorStyleProps,
    defaults: Partial<ColorStyleProps> = {}
): React.CSSProperties {
    const style: React.CSSProperties = {}
    if (!color && !textColor && !backColor) {
        color = defaults.color
        textColor = defaults.textColor
        backColor = defaults.backColor
    }
    if (color) {
        style.color = `var(--theme-color-on-${color})`
        style.backgroundColor = `var(--theme-color-${color})`
    }
    if (textColor) style.color = `var(--theme-color-${textColor})`
    if (backColor) style.backgroundColor = `var(--theme-color-${backColor})`
    if (shadow) style.boxShadow = `var(--theme-shadow-${shadow}, none)`
    return style
}

export function styleColorVars({
    color,
    textColor,
    backColor,
}: ColorStyleProps): React.CSSProperties {
    const style: React.CSSProperties = {
        "--custom-color-text": "inherit",
        "--custom-color-back": "inherit",
    }
    if (color) {
        style["--custom-color-text"] = `var(--theme-color-on-${color})`
        style["--custom-color-back"] = `var(--theme-color-${color})`
    }
    if (textColor)
        style["--custom-color-text"] = `var(--theme-color-${textColor})`
    if (backColor)
        style["--custom-color-back"] = `var(--theme-color-${backColor})`
    return style
}
