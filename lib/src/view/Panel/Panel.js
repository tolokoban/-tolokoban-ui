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
exports.makeCustomPanel = exports.ViewPanel = void 0;
const React = __importStar(require("react"));
const theme_1 = require("../../theme");
const color_1 = require("../../theme/styles/color");
const space_1 = require("../../theme/styles/space");
const overflow_1 = require("../../theme/styles/overflow");
const display_1 = require("../../theme/styles/display");
const dimension_1 = require("../../theme/styles/dimension");
const styles_1 = require("../../theme/styles/styles");
const position_1 = require("../../theme/styles/position");
const child_1 = require("../../theme/styles/child");
const Panel_module_css_1 = __importDefault(require("./Panel.module.css"));
const $ = theme_1.Theme.classNames;
function ViewPanel(props) {
    const { className, children, borderRadius, fontSize, aspectRatio = 0, } = props;
    const style = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ fontSize }, (0, color_1.styleColor)(props)), (0, space_1.styleSpace)(props)), (0, dimension_1.styleDimension)(props)), (0, overflow_1.styleOverflow)(props)), (0, display_1.styleDisplay)(props)), (0, position_1.stylePosition)(props)), (0, child_1.styleChild)(props));
    if (aspectRatio > 0)
        style["--custom-aspect-ratio"] = aspectRatio;
    if (borderRadius)
        style.borderRadius = (0, styles_1.cssForGaps)(borderRadius);
    return (React.createElement("div", { className: $.join(className, Panel_module_css_1.default.Panel), style: style }, children));
}
exports.ViewPanel = ViewPanel;
function makeCustomPanel(defaultProps) {
    return (props) => ViewPanel(Object.assign(Object.assign({}, defaultProps), props));
}
exports.makeCustomPanel = makeCustomPanel;
