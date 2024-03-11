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
exports.ViewInputColor = void 0;
const React = __importStar(require("react"));
const theme_1 = require("../../theme");
const dimension_1 = require("../../theme/styles/dimension");
const position_1 = require("../../theme/styles/position");
const child_1 = require("../../theme/styles/child");
const InputColor_module_css_1 = __importDefault(require("./InputColor.module.css"));
const SIZES = {
    XS: "75%",
    S: "100%",
    M: "150%",
    L: "200%",
    XL: "300%",
};
function ViewInputColor(props) {
    const ref = React.useRef(null);
    const { value, onChange, size = "M" } = props;
    const style = Object.assign(Object.assign(Object.assign(Object.assign({}, (0, dimension_1.styleDimension)(props)), (0, position_1.stylePosition)(props)), (0, child_1.styleChild)(props)), { fontSize: SIZES[size], backgroundColor: value });
    const handleChange = (evt) => {
        onChange(evt.target.value);
    };
    const handleClick = () => {
        const input = ref.current;
        if (!input)
            return;
        input.click();
    };
    return (React.createElement("button", { className: theme_1.Theme.classNames.join(props.className, InputColor_module_css_1.default.InputColor), style: style, onClick: handleClick },
        React.createElement("input", { ref: ref, type: "color", value: sanitizeColor(value), onChange: handleChange })));
}
exports.ViewInputColor = ViewInputColor;
/**
 * Input cannot deal with short colors (#cd9, for instance).
 * We will produce only colors with 7 characters.
 */
function sanitizeColor(value) {
    if (!value.startsWith("#"))
        return value;
    if (value.length === 7)
        return value;
    let color = "#";
    for (const digit of value) {
        if (digit !== "#") {
            color = `${color}${digit}${digit}`;
        }
    }
    return color;
}
