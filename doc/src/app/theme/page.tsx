import React from "react"
import {
    Color,
    DEFAULT_THEME_COLORS,
    Theme,
    ThemeColor,
    ThemeMode,
    ThemeSettingsColors,
    useThemeMode,
    useThemeModePreference,
    THEME_PRESETS,
    ViewButton,
    ViewCombo,
    ViewInputColor,
    ViewOptions,
    ViewPanel,
} from "@tolokoban/ui"

import { Highlight } from "../../view/Highlight"

import Styles from "./page.module.css"

type Palette = Record<ThemeMode, ThemeSettingsColors>
type ModePreference = ThemeMode | "system"
type RampKey = "primary" | "secondary" | "tertiary" | "neutral"
type SingleKey = "input" | "error" | "valid" | "textLight" | "textDark"

const RAMPS: RampKey[] = ["primary", "secondary", "tertiary", "neutral"]
const SINGLES: Array<[key: SingleKey, label: string]> = [
    ["input", "Input background"],
    ["error", "Error"],
    ["valid", "Valid"],
    ["textLight", "Text on dark backgrounds"],
    ["textDark", "Text on light backgrounds"],
]
const LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const PRESET_LABELS: Record<string, string> = {
    default: "Default",
    seventies: "Seventies",
    marine: "Marine",
    sand: "Sand",
    contrast: "Contrast",
    rainbow: "Rainbow",
    moonlight: "Moonlight",
    dreamy: "Dreamy",
    pinkParadise: "Pink paradise",
    professional: "Professional",
    softLight: "Soft light",
}

/**
 * Kept at module level, so that the edited colors
 * are still there when we come back to this page.
 */
let currentPalette: Palette = clonePalette(DEFAULT_THEME_COLORS)

export default function PageTheme() {
    const mode = useThemeMode()
    const preference = useThemeModePreference()
    const [palette, setPalette] = React.useState(currentPalette)
    const [preset, setPreset] = React.useState("default")
    const colors = palette[mode]
    const updatePalette = (next: Palette) => {
        currentPalette = next
        setPalette(next)
        Theme.apply({ colors: next })
    }
    const update = (key: keyof ThemeSettingsColors, value: ThemeColor) =>
        updatePalette({ ...palette, [mode]: { ...colors, [key]: value } })
    const handleModeChange = (value: ModePreference) => {
        if (value === "system") Theme.resetMode()
        else Theme.mode = value
    }

    return (
        <div className={Styles.page}>
            <ViewPanel display="flex" alignItems="flex-end" gap="S">
                <ViewCombo label="Preset" value={preset} onChange={setPreset}>
                    {Object.keys(THEME_PRESETS).map((name) => (
                        <div key={name}>{PRESET_LABELS[name] ?? name}</div>
                    ))}
                </ViewCombo>
                <ViewButton
                    onClick={() =>
                        updatePalette(clonePalette(THEME_PRESETS[preset]))
                    }
                >
                    Apply
                </ViewButton>
            </ViewPanel>
            <h1>Theme</h1>
            <ViewOptions
                label="Mode"
                value={preference}
                onChange={handleModeChange}
            >
                <div key="light">Light</div>
                <div key="dark">Dark</div>
                <div key="system">System</div>
            </ViewOptions>
            <p>
                Current mode: <b>{mode}</b>. The colors below are the ones of
                this mode only.
            </p>
            <h2>Color ramps</h2>
            <p>
                With a single color, a ramp is computed from a dark to a light
                variant of it. With several colors, the ramp goes through all of
                them.
            </p>
            {RAMPS.map((key) => (
                <RampEditor
                    key={key}
                    name={key}
                    value={colors[key]}
                    onChange={(value) => update(key, value)}
                />
            ))}
            <h2>Other colors</h2>
            <div className={Styles.singles}>
                {SINGLES.map(([key, label]) => (
                    <ViewInputColor
                        key={key}
                        label={label}
                        value={toHex(colors[key])}
                        onChange={(value) => update(key, value)}
                    />
                ))}
            </div>
            <ViewPanel display="flex" gap="M" margin={["L", 0]}>
                <ViewButton
                    variant="outlined"
                    onClick={() =>
                        updatePalette({
                            ...palette,
                            [mode]: { ...DEFAULT_THEME_COLORS[mode] },
                        })
                    }
                >
                    Reset {mode} colors
                </ViewButton>
                <ViewButton
                    variant="outlined"
                    onClick={() =>
                        updatePalette(clonePalette(DEFAULT_THEME_COLORS))
                    }
                >
                    Reset all colors
                </ViewButton>
            </ViewPanel>
            <h2>Code</h2>
            <Highlight>{`Theme.apply({
    colors: ${JSON.stringify(palette, null, 4).replace(/\n/g, "\n    ")}
})`}</Highlight>
        </div>
    )
}

function RampEditor({
    name,
    value,
    onChange,
}: {
    name: RampKey
    value: ThemeColor
    onChange(value: ThemeColor): void
}) {
    const stops = (Array.isArray(value) ? value : [value]).map(toHex)
    const setStop = (index: number, color: string) =>
        onChange(stops.map((stop, i) => (i === index ? color : stop)))
    return (
        <section className={Styles.ramp}>
            <header>
                <b>{name}</b>
                <div className={Styles.stops}>
                    {stops.map((stop, index) => (
                        <ViewInputColor
                            key={index}
                            value={stop}
                            onChange={(color) => setStop(index, color)}
                        />
                    ))}
                    <ViewButton
                        variant="text"
                        onClick={() =>
                            onChange([...stops, stops[stops.length - 1]])
                        }
                    >
                        + stop
                    </ViewButton>
                    {stops.length > 1 && (
                        <ViewButton
                            variant="text"
                            onClick={() => onChange(stops.slice(0, -1))}
                        >
                            − stop
                        </ViewButton>
                    )}
                </div>
            </header>
            <div className={Styles.swatches}>
                {LEVELS.map((level) => (
                    <div
                        key={level}
                        style={{
                            background: `var(--theme-color-${name}-${level})`,
                            color: `var(--theme-color-on-${name}-${level})`,
                        }}
                    >
                        {level}
                    </div>
                ))}
            </div>
        </section>
    )
}

/** `<input type="color">` only understands `#rrggbb`. */
function toHex(color: ThemeColor): string {
    const first = Array.isArray(color) ? color[0] : color
    return new Color(first).toString().substring(0, 7)
}

function clonePalette(palette: Readonly<Palette>): Palette {
    return {
        light: { ...palette.light },
        dark: { ...palette.dark },
    }
}
