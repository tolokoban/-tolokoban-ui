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
exports.makeCustomButton = exports.ViewButton = void 0;
const React = __importStar(require("react"));
const theme_1 = require("../../theme");
const Button_module_css_1 = __importDefault(require("./Button.module.css"));
const styles_1 = require("../../theme/styles/styles");
const common_1 = require("../../theme/styles/common");
const set_defaults_1 = require("../../util/set-defaults");
const $ = theme_1.Theme.classNames;
function ViewButton(partialProps) {
    const props = (0, set_defaults_1.setDefaults)(partialProps, {
        children: "Button",
        enabled: true,
        borderRadius: ".125em",
        margin: ["S", "M"],
        padding: [0, "M"],
        onClick: DEFAULT_CLICK_HANDLER,
        width: "auto",
        height: "2em",
        variant: "elevated",
        thickness: 0.125,
    });
    const { className, children, enabled, variant, onClick } = props;
    const { color } = partialProps;
    const thickness = (0, styles_1.cssForGaps)(props.thickness);
    const style = Object.assign({ "--custom-color-main-alpha": getMainAlphaColor(color, variant), "--custom-color-main": getMainColor(color, variant), "--custom-color-text": getTextColor(color, variant), "--custom-thickness": thickness }, (0, common_1.styleCommon)(props));
    const Icon = props.icon;
    return (React.createElement("button", { style: style, className: $.join(className, Button_module_css_1.default.Button, Button_module_css_1.default[variant], Boolean(Icon) && Button_module_css_1.default.icon), disabled: !enabled, type: "button", onClick: onClick },
        Icon && React.createElement(Icon, null),
        React.createElement("div", { className: Button_module_css_1.default.label }, children)));
}
exports.ViewButton = ViewButton;
function makeCustomButton(defaultProps) {
    return (props) => ViewButton(Object.assign(Object.assign({}, defaultProps), props));
}
exports.makeCustomButton = makeCustomButton;
const DEFAULT_CLICK_HANDLER = () => {
    console.log("Click!");
};
function getMainColor(color, variant) {
    switch (variant) {
        case "text":
            return "transparent";
        // "elevated" | "filled" | "outlined"
        default:
            return (0, styles_1.cssForColor)(color !== null && color !== void 0 ? color : "primary-5");
    }
}
function getMainAlphaColor(color, variant) {
    switch (variant) {
        case "text":
            return "transparent";
        // "elevated" | "filled" | "outlined"
        default:
            return (0, styles_1.cssForColor)(color !== null && color !== void 0 ? color : "primary-5", 0.5);
    }
}
function getTextColor(color, variant) {
    switch (variant) {
        case "text":
        case "outlined":
            return color ? (0, styles_1.cssForColor)(color) : "currentColor";
        // "elevated" | "filled"
        default:
            return (0, styles_1.cssForColorOn)(color !== null && color !== void 0 ? color : "primary-5");
    }
}
