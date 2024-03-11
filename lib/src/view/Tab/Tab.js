"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewTab = void 0;
const theme_1 = require("../../theme");
const Tab_module_css_1 = __importDefault(require("./Tab.module.css"));
const $ = theme_1.Theme.classNames;
function ViewTab({ className, children }) {
    return React.createElement("div", { className: $.join(className, Tab_module_css_1.default.Tab) }, children);
}
exports.ViewTab = ViewTab;
