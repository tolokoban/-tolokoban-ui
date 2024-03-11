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
exports.ViewFloatingButton = void 0;
const React = __importStar(require("react"));
const theme_1 = require("../../theme");
const child_1 = require("../../theme/styles/child");
const FloatingButton_module_css_1 = __importDefault(require("./FloatingButton.module.css"));
const SIZES = {
    XS: "75%",
    S: "100%",
    M: "150%",
    L: "200%",
    XL: "300%",
};
function ViewFloatingButton(props) {
    var _a;
    const { color = "secondary-5", colorHover = (_a = props.color) !== null && _a !== void 0 ? _a : "secondary-6", size = "M", enabled = true, } = props;
    const style = Object.assign(Object.assign({}, (0, child_1.styleChild)(props)), { fontSize: SIZES[size] });
    if (color) {
        style["--custom-color-back"] = `var(--theme-color-${color})`;
        style["--custom-color-text"] = `var(--theme-color-on-${color})`;
    }
    if (colorHover) {
        style["--custom-color-hover-back"] = `var(--theme-color-${colorHover})`;
        style["--custom-color-hover-text"] = `var(--theme-color-on-${colorHover})`;
    }
    const Icon = props.icon;
    const iconProps = Object.assign({}, props);
    delete iconProps.color;
    delete iconProps.textColor;
    return (React.createElement("button", { className: theme_1.Theme.classNames.join(props.className, FloatingButton_module_css_1.default.FloatingButton), disabled: !enabled, type: "button", onClick: props.onClick, style: style },
        React.createElement(React.Fragment, null,
            React.createElement(Icon, Object.assign({}, iconProps)))));
}
exports.ViewFloatingButton = ViewFloatingButton;
