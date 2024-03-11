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
const React = __importStar(require("react"));
const color_1 = require("../../../theme/styles/color");
const generic_icon_module_css_1 = __importDefault(require("./generic-icon.module.css"));
function GenericIcon(props) {
    var _a, _b;
    const { value = "M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z", } = props;
    const type = (_a = props.type) !== null && _a !== void 0 ? _a : "filled";
    const style = Object.assign(Object.assign({}, (0, color_1.styleColor)(props)), { fontSize: sizeToFontSize((_b = props.size) !== null && _b !== void 0 ? _b : "M") });
    return (React.createElement("svg", { className: getClassName(props), style: style, viewBox: "0 0 24 24", preserveAspectRatio: "xMidYMid meet", onClick: () => { var _a; return (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props); }, tabIndex: props.onClick ? 1 : undefined, strokeWidth: 1.5 },
        type === "filled" && (React.createElement("path", { d: value, fill: "currentColor", stroke: "none" })),
        type === "outlined" && (React.createElement("path", { d: value, fill: "none", stroke: "currentColor" })),
        type === "bold" && (React.createElement("path", { d: value, fill: "currentColor", stroke: "currentColor" })),
        type === "dual" && (React.createElement(React.Fragment, null,
            React.createElement("path", { d: value, opacity: 0.25, fill: "currentColor", stroke: "none" }),
            React.createElement("path", { d: value, fill: "none", stroke: "currentColor" })))));
}
exports.default = GenericIcon;
function getClassName(props) {
    const classNames = [generic_icon_module_css_1.default.GenericIcon];
    if (typeof props.className === "string") {
        classNames.push(props.className);
    }
    if (props.animate === true)
        classNames.push(generic_icon_module_css_1.default.animate);
    if (props.onClick)
        classNames.push(generic_icon_module_css_1.default.clickable);
    return classNames.join(" ");
}
const SIZES = {
    XS: ".75em",
    S: "1em",
    M: "1.5em",
    L: "2em",
    XL: "3em",
};
function sizeToFontSize(value) {
    var _a;
    return (_a = SIZES[value]) !== null && _a !== void 0 ? _a : value;
}
