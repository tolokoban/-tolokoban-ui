"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeIconView = void 0;
const generic_icon_1 = __importDefault(require("../generic/generic-icon"));
/**
 * We can found material icons here:
 * https://materialdesignicons.com/
 */
const iconsRenderers = new Map();
function makeIconView(value, name) {
    const rendererFromCache = iconsRenderers.get(value);
    if (rendererFromCache)
        return rendererFromCache;
    const renderer = (props) => (React.createElement(generic_icon_1.default, Object.assign({}, props, { value: value })));
    renderer.id = name !== null && name !== void 0 ? name : value;
    iconsRenderers.set(value, renderer);
    return renderer;
}
exports.makeIconView = makeIconView;
