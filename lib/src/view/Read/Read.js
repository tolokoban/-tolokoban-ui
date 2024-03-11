"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewRead = void 0;
const theme_1 = require("../../theme");
const Read_module_css_1 = __importDefault(require("./Read.module.css"));
const $ = theme_1.Theme.classNames;
function ViewRead({ className, children }) {
    return React.createElement("div", { className: $.join(className, Read_module_css_1.default.Read) }, children);
}
exports.ViewRead = ViewRead;
