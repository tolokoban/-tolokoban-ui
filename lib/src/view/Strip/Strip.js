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
exports.ViewStrip = void 0;
const React = __importStar(require("react"));
const theme_1 = require("../../theme");
const dimension_1 = require("../../theme/styles/dimension");
const position_1 = require("../../theme/styles/position");
const child_1 = require("../../theme/styles/child");
const Strip_module_css_1 = __importDefault(require("./Strip.module.css"));
function ViewStrip(props) {
    const { orientation = "column", template = "-1" } = props;
    const style = Object.assign(Object.assign(Object.assign({}, (0, dimension_1.styleDimension)(props)), (0, position_1.stylePosition)(props)), (0, child_1.styleChild)(props));
    const templateDef = template
        .split("")
        .map((c) => ("123456789".includes(c) ? `minmax(0, ${c}fr)` : "auto"))
        .join(" ");
    if (orientation === "row") {
        style.gridTemplateColumns = templateDef;
        style.gridAutoColumns = "auto";
        style.gridTemplateRows = "minmax(0, 1fr)";
    }
    else {
        style.gridTemplateRows = templateDef;
        style.gridAutoRows = "auto";
        style.gridTemplateColumns = "minmax(0, 1fr)";
    }
    return (React.createElement("div", { className: theme_1.Theme.classNames.join(props.className, Strip_module_css_1.default.Strip, Strip_module_css_1.default[orientation]), style: style }, props.children));
}
exports.ViewStrip = ViewStrip;
