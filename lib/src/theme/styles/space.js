"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styleSpace = void 0;
const styles_1 = require("./styles");
function styleSpace({ borderRadius, margin, padding }) {
    const style = {};
    if (borderRadius)
        style.borderRadius = (0, styles_1.cssForGaps)(borderRadius);
    if (margin)
        style.margin = (0, styles_1.cssForGaps)(margin);
    if (padding)
        style.padding = (0, styles_1.cssForGaps)(padding);
    return style;
}
exports.styleSpace = styleSpace;
