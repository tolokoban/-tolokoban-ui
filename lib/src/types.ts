import Color from "./color.js"

export type ThemeSize = "none" | "XS" | "S" | "M" | "L" | "XL"

export interface ViewWithValue<T> {
    value: T
    onChange?(this: void, value: T): void
}

export type ThemeColor = Color | string | (Color | string)[]

export interface ThemeSettingsColors {
    textLight: string
    textDark: string
    primary: ThemeColor
    secondary: ThemeColor
    tertiary: ThemeColor
    neutral: ThemeColor
    input: string
    error: string
    valid: string
}

export interface ThemeSettings {
    colors?: Partial<ThemeSettingsColors>
    gap?: {
        XS: string
        S: string
        M: string
        L: string
        XL: string
    }
}

export type ColorLevel = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
export type ColorAlpha = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
export type ColorBase = "neutral" | "primary" | "secondary" | "tertiary"

export type ColorName =
    | OpaqueColorName
    | `${ColorBase}-${ColorLevel}-${ColorAlpha}`
    | `on-${ColorBase}-${ColorLevel}-${ColorAlpha}`

export type OpaqueColorName =
    | `${ColorBase}-${ColorLevel}`
    | `on-${ColorBase}-${ColorLevel}`
    | "error"
    | "on-error"

export type Gap =
    | string
    | number
    | [vertical: string | number, horizontal: string | number]

export type Circumference =
    | Gap
    | [
          top: string | number,
          right: string | number,
          bottom: string | number,
          left: string | number
      ]

export type Children =
    | React.ReactElement
    | string
    | number
    | boolean
    | null
    | undefined
    | Iterable<Children>
