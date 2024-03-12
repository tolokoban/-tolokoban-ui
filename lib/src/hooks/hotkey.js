import * as React from "react";
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
export function useHotKey(hotkey, onKeyDown, enabled = true) {
    React.useEffect(() => {
        if (!enabled || !hotkey)
            return;
        const handleKeyDown = (evt) => {
            let current = evt.key.toLowerCase();
            if (evt.altKey)
                current = `M-${current}`;
            if (evt.shiftKey)
                current = `S-${current}`;
            if (evt.ctrlKey)
                current = `C-${current}`;
            if (current === hotkey) {
                evt.preventDefault();
                evt.stopPropagation();
                onKeyDown();
            }
        };
        window.addEventListener("keydown", handleKeyDown, true);
        return () => window.removeEventListener("keydown", handleKeyDown, true);
    }, [enabled, hotkey]);
}
//# sourceMappingURL=hotkey.js.map