"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styleColorVars = exports.styleColor = void 0;
function styleColor({ color, textColor, backColor, shadow }, defaults = {}) {
    const style = {};
    if (!color && !textColor && !backColor) {
        color = defaults.color;
        textColor = defaults.textColor;
        backColor = defaults.backColor;
    }
    if (color) {
        style.color = `var(--theme-color-on-${color})`;
        style.backgroundColor = `var(--theme-color-${color})`;
    }
    if (textColor)
        style.color = `var(--theme-color-${textColor})`;
    if (backColor)
        style.backgroundColor = `var(--theme-color-${backColor})`;
    if (shadow)
        style.boxShadow = `var(--theme-shadow-${shadow}, none)`;
    return style;
}
exports.styleColor = styleColor;
function styleColorVars({ color, textColor, backColor, }) {
    const style = {
        "--custom-color-text": "inherit",
        "--custom-color-back": "inherit",
    };
    if (color) {
        style["--custom-color-text"] = `var(--theme-color-on-${color})`;
        style["--custom-color-back"] = `var(--theme-color-${color})`;
    }
    if (textColor)
        style["--custom-color-text"] = `var(--theme-color-${textColor})`;
    if (backColor)
        style["--custom-color-back"] = `var(--theme-color-${backColor})`;
    return style;
}
exports.styleColorVars = styleColorVars;
