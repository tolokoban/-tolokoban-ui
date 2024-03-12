type HotkeyPrefix = "C-" | "S-" | "M-" | "C-S-" | "C-M-" | "C-S-M-" | "S-M";
type HotKeySuffix = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "enter" | "escape" | `f${number}` | "space";
export type HotKey = HotKeySuffix | `${HotkeyPrefix}${HotKeySuffix}`;
/**
 * A keyboard shortcut to trigger an action.
 * Use these prefixes (in that order) for modifiers keys:
 * * `C-` for **Control**.
 * * `S-` for **Shift**.
 * * `M-` for **Alt** (Meta).
 * For example, if you want to react at Shift + Control + Enter,
 * the hotkey willl be "C-S-enter".
 *
 * @param hotkey
 * @param onKeyDown
 * @param enabled
 */
export declare function useHotKey(hotkey: HotKey | undefined, onKeyDown: () => void, enabled?: boolean): void;
export {};
