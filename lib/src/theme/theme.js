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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = __importDefault(require("../color"));
const class_names_1 = __importDefault(require("./class-names"));
require("./theme.css");
__exportStar(require("./styles/common"), exports);
const DEFAULT_COLOR_TEXT_LIGHT = "#fffe";
const DEFAULT_COLOR_TEXT_DARK = "#000e";
const DEFAULT_COLOR_PRIMARY = { hue: 215 };
const DEFAULT_COLOR_SECONDARY = { hue: 60 };
const DEFAULT_COLOR_TERTIARY = { hue: 100 };
const DEFAULT_COLOR_NEUTRAL = {
    hue: 61,
    chroma: 0,
    lightness: [50, 100],
};
const DEFAULT_COLOR_INPUT = "#fff";
const DEFAULT_COLOR_ERROR = "#d00";
const DEFAULT_COLOR_VALID = "#0f0";
class Theme {
    constructor(options = {}) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        this.vars = [];
        const colors = (_a = options.colors) !== null && _a !== void 0 ? _a : {};
        const gap = (_b = options.gap) !== null && _b !== void 0 ? _b : {
            XS: ".25rem",
            S: ".5rem",
            M: "1rem",
            L: "2rem",
            XL: "4rem",
        };
        this.add("gap-none", "0");
        this.add("gap-XS", gap.XS);
        this.add("gap-S", gap.S);
        this.add("gap-M", gap.M);
        this.add("gap-L", gap.L);
        this.add("gap-XL", gap.XL);
        this.add("color-text-light", (_c = colors.textLight) !== null && _c !== void 0 ? _c : DEFAULT_COLOR_TEXT_LIGHT);
        this.add("color-text-dark", (_d = colors.textDark) !== null && _d !== void 0 ? _d : DEFAULT_COLOR_TEXT_DARK);
        this.addColor("input", (_e = colors.input) !== null && _e !== void 0 ? _e : DEFAULT_COLOR_INPUT);
        this.addColor("error", (_f = colors.error) !== null && _f !== void 0 ? _f : DEFAULT_COLOR_ERROR);
        this.addColor("valid", (_g = colors.valid) !== null && _g !== void 0 ? _g : DEFAULT_COLOR_VALID);
        this.addColorVars("primary", makeColors((_h = colors.primary) !== null && _h !== void 0 ? _h : DEFAULT_COLOR_PRIMARY));
        this.addColorVars("secondary", makeColors((_j = colors.secondary) !== null && _j !== void 0 ? _j : DEFAULT_COLOR_SECONDARY));
        this.addColorVars("tertiary", makeColors((_k = colors.tertiary) !== null && _k !== void 0 ? _k : DEFAULT_COLOR_TERTIARY));
        this.addColorVars("neutral", makeColors((_l = colors.neutral) !== null && _l !== void 0 ? _l : DEFAULT_COLOR_NEUTRAL));
        for (let shadow = 0; shadow < 10; shadow++) {
            const y = shadow;
            this.add(`shadow-${shadow}`, `0 ${y}px ${y * 2}px #000e`);
        }
    }
    /**
     * Add a new CSS custom variable.
     */
    add(name, value, alpha = 1) {
        let color = value;
        if (alpha <= 0)
            color = "transparent";
        else if (alpha < 1) {
            color = `${value}${padHex(Math.round(255 * alpha))}`;
        }
        this.vars.push([name, color]);
    }
    addColor(name, color) {
        this.add(`color-${name}`, color);
        this.add(`color-on-${name}`, `var(--theme-color-text-${color_1.default.isLight(color) ? `dark` : "light"})`);
    }
    addColorVars(name, colors) {
        let index = 1;
        for (const color of colors) {
            this.add(`color-${name}-${index}`, color);
            for (let alpha = 1; alpha < 10; alpha++) {
                this.add(`color-${name}-${index}-${alpha}`, color, alpha / 10);
            }
            this.add(`color-on-${name}-${index}`, `var(--theme-color-text-${color_1.default.isLight(color) ? "dark" : "light"})`);
            index++;
        }
        this.add(`color-${name}`, `var(--theme-color-${name}-5)`);
    }
    /**
     * Apply this theme to `element`.
     * @param element Default to `document.body`.
     */
    apply(element) {
        var _a;
        const target = element !== null && element !== void 0 ? element : (_a = globalThis.window) === null || _a === void 0 ? void 0 : _a.document.body;
        if (target) {
            for (const [key, val] of this.vars) {
                target.style.setProperty(`--theme-${key}`, val);
            }
        }
    }
}
Theme.classNames = new class_names_1.default();
exports.default = Theme;
function makeColors(colorDef) {
    const colors = convertThemeColorIntoArray(colorDef);
    const output = color_1.default.makeGradient(9, ...colors).map((color) => color.cssValue);
    return output;
}
function convertThemeColorIntoArray(colorDef) {
    var _a, _b;
    if (Array.isArray(colorDef))
        return colorDef;
    const [hue1, hue2] = ensurePair(colorDef.hue);
    const [chroma1, chroma2] = ensurePair((_a = colorDef.chroma) !== null && _a !== void 0 ? _a : [200, 50]);
    const [lightness1, lightness2] = ensurePair((_b = colorDef.lightness) !== null && _b !== void 0 ? _b : [5, 100]);
    return [
        color_1.default.fromLCH(lightness1, chroma1, hue1).cssValue,
        color_1.default.fromLCH(lightness2, chroma2, hue2).cssValue,
    ];
}
function ensurePair(value) {
    if (Array.isArray(value))
        return value;
    return [value, value];
}
function padHex(value, size = 2) {
    let hex = `${value.toString(16)}`;
    while (hex.length < size)
        hex = `0${hex}`;
    return hex;
}
