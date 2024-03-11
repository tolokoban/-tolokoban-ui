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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewInputMultiText = void 0;
const React = __importStar(require("react"));
const theme_1 = require("../../theme");
const dimension_1 = require("../../theme/styles/dimension");
const position_1 = require("../../theme/styles/position");
const child_1 = require("../../theme/styles/child");
const InputMultiText_module_css_1 = __importDefault(require("./InputMultiText.module.css"));
function ViewInputMultiText(props) {
    const { value, onChange, onLangChange, renderLang = (item, selected) => selected ? React.createElement("b", null, item) : React.createElement("span", null, item), } = props;
    const [keys, itemKey, itemVal] = useLang(props);
    const style = Object.assign(Object.assign(Object.assign({}, (0, dimension_1.styleDimension)(props)), (0, position_1.stylePosition)(props)), (0, child_1.styleChild)(props));
    const handleChange = (evt) => {
        const text = evt.target.value;
        onChange(Object.assign(Object.assign({}, value), { [itemKey]: text }));
    };
    return (React.createElement("div", { className: theme_1.Theme.classNames.join(props.className, InputMultiText_module_css_1.default.InputMultiText), style: style },
        React.createElement("input", { value: itemVal, onChange: handleChange }),
        React.createElement("div", null, keys.map((key) => (React.createElement("button", { key: key, onClick: () => onLangChange(key) }, renderLang(key, key === itemKey)))))));
}
exports.ViewInputMultiText = ViewInputMultiText;
function useLang({ value, onChange, lang, onLangChange, }) {
    var _a;
    const keys = Object.keys(value);
    React.useEffect(() => {
        if (keys.length === 0)
            onChange({
                [navigator.language]: "",
            });
    }, [value, onChange, keys.length]);
    const key = findBestKey(keys, lang);
    React.useEffect(() => {
        if (key && key !== lang) {
            onLangChange(key);
        }
    }, [key, onLangChange, lang]);
    return [keys, key !== null && key !== void 0 ? key : "", (_a = value[key !== null && key !== void 0 ? key : ""]) !== null && _a !== void 0 ? _a : ""];
}
/**
 * if `keys` is empty, return `null`.
 * If `lang` is in `keys`, return it.
 * Otherwise, find the first key that starts
 * like `lang`.
 * If nothing has been found, return the first
 * element in `keys`.
 */
function findBestKey(keys, lang) {
    if (keys.length === 0)
        return undefined;
    if (keys.includes(lang))
        return lang;
    for (const key of keys) {
        if (key.startsWith(lang))
            return key;
    }
    for (const key of keys) {
        if (key.toLowerCase().startsWith(lang.toLowerCase()))
            return key;
    }
    return keys[0];
}
