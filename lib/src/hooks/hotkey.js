"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHotKey = void 0;
const React = __importStar(require("react"));
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
function useHotKey(hotkey, onKeyDown, enabled = true) {
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
exports.useHotKey = useHotKey;
