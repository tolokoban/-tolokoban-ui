"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewDialog = void 0;
const theme_1 = require("../../theme");
const Dialog_module_css_1 = __importDefault(require("./Dialog.module.css"));
const Button_1 = require("../Button");
const color_1 = require("../../theme/styles/color");
const Strip_1 = require("../Strip");
const $ = theme_1.Theme.classNames;
function ViewDialog({ className, buttonCancel, buttonValidate, title, headColor = "primary-3", bodyColor = "neutral-6", footColor = "neutral-4", children, }) {
    const cancelProps = checkClickHandler("Cancel", buttonCancel, {
        variant: "text",
    });
    const validateProps = checkClickHandler("Validate", buttonValidate);
    return (React.createElement(Strip_1.ViewStrip, { className: $.join(className, Dialog_module_css_1.default.Dialog), orientation: "column", template: "-1" },
        title && (React.createElement("header", { className: Dialog_module_css_1.default.header, style: (0, color_1.styleColor)({ color: headColor }) }, title)),
        React.createElement("main", { style: (0, color_1.styleColor)({ color: bodyColor }) }, children),
        (cancelProps || validateProps) && (React.createElement("footer", { style: (0, color_1.styleColor)({ color: footColor }) },
            cancelProps && React.createElement(Button_1.ViewButton, Object.assign({}, cancelProps)),
            validateProps && React.createElement(Button_1.ViewButton, Object.assign({}, validateProps))))));
}
exports.ViewDialog = ViewDialog;
function checkClickHandler(label, props, override) {
    if (!props || !props.onClick)
        return null;
    return Object.assign(Object.assign({ children: label }, props), override);
}
