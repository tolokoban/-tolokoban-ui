"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewScroll = void 0;
const theme_1 = require("../../theme");
const color_1 = require("../../theme/styles/color");
const space_1 = require("../../theme/styles/space");
const dimension_1 = require("../../theme/styles/dimension");
const display_1 = require("../../theme/styles/display");
const position_1 = require("../../theme/styles/position");
const child_1 = require("../../theme/styles/child");
const Scroll_module_css_1 = __importDefault(require("./Scroll.module.css"));
const $ = theme_1.Theme.classNames;
function ViewScroll(_a) {
    var { className, children, color = "neutral-7", bannerSize = "5em" } = _a, props = __rest(_a, ["className", "children", "color", "bannerSize"]);
    return (React.createElement("div", { className: $.join(className, Scroll_module_css_1.default.Scroll), style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ "--custom-banner-size": bannerSize, "--custom-banner-color": `var(--theme-color-${color})` }, (0, color_1.styleColor)({ color })), (0, space_1.styleSpace)(props)), (0, dimension_1.styleDimension)(props)), (0, display_1.styleDisplay)(props)), (0, position_1.stylePosition)(props)), (0, child_1.styleChild)(props)) },
        React.createElement("div", null, children)));
}
exports.ViewScroll = ViewScroll;
