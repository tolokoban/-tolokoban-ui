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
exports.ViewLabel = void 0;
const React = __importStar(require("react"));
const theme_1 = require("../../theme");
const Label_module_css_1 = __importDefault(require("./Label.module.css"));
const $ = theme_1.Theme.classNames;
function ViewLabel({ color, className, value, title, children, }) {
    const id = `labelled/${React.useId()}`;
    if (!value)
        return React.createElement(React.Fragment, null, children);
    const style = {};
    if (color)
        style.color = `var(--theme-color-${color})`;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { htmlFor: id, title: title, className: $.join(className, Label_module_css_1.default.Label), style: style }, value),
        children && (React.createElement("div", { id: id, className: Label_module_css_1.default.LabelContent }, children))));
}
exports.ViewLabel = ViewLabel;
