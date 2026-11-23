import { ThemeMode, ThemeSettingsColors } from "../types.js";

/**
 * Colors of a theme, for both modes.
 *
 * Convention for `neutral`: the low levels (1, 2, 3...) are used as
 * backgrounds. So the ramp goes from light to dark in light mode,
 * and from dark to light in dark mode.
 */
export type ThemePreset = Readonly<Record<ThemeMode, Readonly<ThemeSettingsColors>>>;

export const THEME_PRESET_SEVENTIES: ThemePreset = {
  light: {
    textLight: "#fff8ec",
    textDark: "#2b1a0e",
    primary: "#d9692b",
    secondary: "#e0a526",
    tertiary: "#7a8b2e",
    neutral: ["#f3e6cf", "#8a6a45"],
    input: "#fffaf0",
    error: "#b8321f",
    valid: "#6b8e23",
  },
  dark: {
    textLight: "#fff8ec",
    textDark: "#2b1a0e",
    primary: "#e8803f",
    secondary: "#f0bb45",
    tertiary: "#9cae45",
    neutral: ["#3a2a1c", "#c9ab84"],
    input: "#2a1e14",
    error: "#e8634a",
    valid: "#9cc048",
  },
};

export const THEME_PRESET_MARINE: ThemePreset = {
  light: {
    textLight: "#eaf6ff",
    textDark: "#06202e",
    primary: "#0b5c8c",
    secondary: "#1fa9a3",
    tertiary: "#ff7f50",
    neutral: ["#e6f0f5", "#4b6878"],
    input: "#ffffff",
    error: "#d13b3b",
    valid: "#1f9e6e",
  },
  dark: {
    textLight: "#eaf6ff",
    textDark: "#06202e",
    primary: "#3a9ad9",
    secondary: "#3cc9c1",
    tertiary: "#ff9a76",
    neutral: ["#0c2230", "#7fa3b6"],
    input: "#0f2a3a",
    error: "#ff6b6b",
    valid: "#3ccf91",
  },
};

export const THEME_PRESET_SAND: ThemePreset = {
  light: {
    textLight: "#fbf3e4",
    textDark: "#3b2e1f",
    primary: "#c2703d",
    secondary: "#d8b26e",
    tertiary: "#7d8f69",
    neutral: ["#f5ecdc", "#8c7a5e"],
    input: "#fffdf8",
    error: "#b5452f",
    valid: "#6f8f3a",
  },
  dark: {
    textLight: "#fbf3e4",
    textDark: "#3b2e1f",
    primary: "#d98c5a",
    secondary: "#e3c58a",
    tertiary: "#9aae84",
    neutral: ["#2e271e", "#b8a584"],
    input: "#2a241b",
    error: "#e07055",
    valid: "#9bc061",
  },
};

export const THEME_PRESET_CONTRAST: ThemePreset = {
  light: {
    textLight: "#ffffff",
    textDark: "#000000",
    primary: "#0033cc",
    secondary: "#ffcc00",
    tertiary: "#cc0077",
    neutral: ["#ffffff", "#000000"],
    input: "#ffffff",
    error: "#cc0000",
    valid: "#007a00",
  },
  dark: {
    textLight: "#ffffff",
    textDark: "#000000",
    primary: "#4da3ff",
    secondary: "#ffe000",
    tertiary: "#ff4fb0",
    neutral: ["#000000", "#ffffff"],
    input: "#000000",
    error: "#ff4040",
    valid: "#40ff40",
  },
};

export const THEME_PRESET_RAINBOW: ThemePreset = {
  light: {
    textLight: "#fffe",
    textDark: "#000e",
    primary: ["hsl(0 90% 35%)", "hsl(30 95% 55%)", "hsl(55 95% 80%)"],
    secondary: ["hsl(120 70% 25%)", "hsl(160 70% 45%)", "hsl(190 80% 80%)"],
    tertiary: ["hsl(230 80% 30%)", "hsl(270 75% 55%)", "hsl(300 80% 85%)"],
    neutral: ["#fafafa", "#6b6b7b"],
    input: "#ffffff",
    error: "#e0182d",
    valid: "#18b04a",
  },
  dark: {
    textLight: "#fffe",
    textDark: "#000e",
    primary: ["hsl(0 90% 40%)", "hsl(30 95% 60%)", "hsl(55 95% 85%)"],
    secondary: ["hsl(120 70% 30%)", "hsl(160 70% 55%)", "hsl(190 80% 85%)"],
    tertiary: ["hsl(230 80% 40%)", "hsl(270 75% 65%)", "hsl(300 80% 88%)"],
    neutral: ["#1c1c24", "#b0b0c0"],
    input: "#24242e",
    error: "#ff4d5e",
    valid: "#3ddc6e",
  },
};

export const THEME_PRESET_MOONLIGHT: ThemePreset = {
  light: {
    textLight: "#e8ecfa",
    textDark: "#141a2e",
    primary: "#4a5d9e",
    secondary: "#9aa7c7",
    tertiary: "#c9b458",
    neutral: ["#eef1f8", "#5b6378"],
    input: "#fbfcff",
    error: "#c0392b",
    valid: "#2e8b57",
  },
  dark: {
    textLight: "#e8ecfa",
    textDark: "#141a2e",
    primary: "#7f93d9",
    secondary: "#b8c4e3",
    tertiary: "#e6d27a",
    neutral: ["#0e1424", "#8790ab"],
    input: "#161d33",
    error: "#ef6f6f",
    valid: "#5fcf8f",
  },
};

export const THEME_PRESET_DREAMY: ThemePreset = {
  light: {
    textLight: "#f6f0ff",
    textDark: "#2d2340",
    primary: "#9b7fd4",
    secondary: "#7fd4c1",
    tertiary: "#f4a6a0",
    neutral: ["#f7f2fb", "#7d7290"],
    input: "#ffffff",
    error: "#e0607e",
    valid: "#5cbf8f",
  },
  dark: {
    textLight: "#f6f0ff",
    textDark: "#2d2340",
    primary: "#b49ce8",
    secondary: "#8fe0cd",
    tertiary: "#f7b7b0",
    neutral: ["#1f1a2b", "#a89cbd"],
    input: "#2a2338",
    error: "#f08098",
    valid: "#7fd8a8",
  },
};

export const THEME_PRESET_PINK_PARADISE: ThemePreset = {
  light: {
    textLight: "#fff0f7",
    textDark: "#3a0d22",
    primary: "#e6338a",
    secondary: "#ff8fc0",
    tertiary: "#2ec4b6",
    neutral: ["#fff0f6", "#8f5a74"],
    input: "#ffffff",
    error: "#c81d25",
    valid: "#2a9d8f",
  },
  dark: {
    textLight: "#fff0f7",
    textDark: "#3a0d22",
    primary: "#ff5ca8",
    secondary: "#ffa3cc",
    tertiary: "#4fd8cb",
    neutral: ["#2a0f1d", "#c08aa5"],
    input: "#33121f",
    error: "#ff5a5f",
    valid: "#4fd8a0",
  },
};

export const THEME_PRESET_PROFESSIONAL: ThemePreset = {
  light: {
    textLight: "#e6edf3",
    textDark: "#1b2430",
    primary: "#1f4e79",
    secondary: "#5b7083",
    tertiary: "#2a8c82",
    neutral: ["#f4f6f8", "#5f6b76"],
    input: "#ffffff",
    error: "#b3261e",
    valid: "#2e7d32",
  },
  dark: {
    textLight: "#e6edf3",
    textDark: "#1b2430",
    primary: "#5b8fc7",
    secondary: "#8fa3b5",
    tertiary: "#4db6ac",
    neutral: ["#161b22", "#8b96a1"],
    input: "#1c232c",
    error: "#f2766d",
    valid: "#66bb6a",
  },
};

export const THEME_PRESET_SOFT_LIGHT: ThemePreset = {
  light: {
    textLight: "#f3efe9",
    textDark: "#3d3a36",
    primary: "#6f9fd8",
    secondary: "#e8b96a",
    tertiary: "#b48ec9",
    neutral: ["#faf8f5", "#9c9790"],
    input: "#fffefc",
    error: "#d9776a",
    valid: "#7fb77e",
  },
  dark: {
    textLight: "#f3efe9",
    textDark: "#3d3a36",
    primary: "#8ab4e6",
    secondary: "#edc88a",
    tertiary: "#c6a6d8",
    neutral: ["#2b2a28", "#a8a39b"],
    input: "#33312e",
    error: "#e5918a",
    valid: "#97c796",
  },
};
