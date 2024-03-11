"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewTouchable = void 0;
const theme_1 = require("../../theme");
const Touchable_module_css_1 = __importDefault(require("./Touchable.module.css"));
const $ = theme_1.Theme.classNames;
function ViewTouchable({ className, children, tag, tooltip, onClick, }) {
    if (!onClick)
        return React.createElement(React.Fragment, null, children);
    return (React.createElement("div", { className: $.join(className, Touchable_module_css_1.default.Touchable), title: tooltip, onClick: () => onClick(tag) }, children));
}
exports.ViewTouchable = ViewTouchable;
