import React from "react"

import { ThemeMode } from "../types.js"
import { Theme } from "./theme.js"

/**
 * Current `Theme.mode`, re-rendering the component when it changes.
 */
export function useThemeMode(): ThemeMode {
    return React.useSyncExternalStore(
        Theme.addModeListener,
        () => Theme.mode,
        () => "light"
    )
}

/**
 * `"system"` if the mode follows the OS preference,
 * otherwise the forced mode.
 */
export function useThemeModePreference(): ThemeMode | "system" {
    return React.useSyncExternalStore(
        Theme.addModeListener,
        () => (Theme.isFollowingSystem ? "system" : Theme.mode),
        () => "system"
    )
}
