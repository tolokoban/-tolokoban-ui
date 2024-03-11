"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styleChild = void 0;
function styleChild({ flex, flexGrow, flexShrink, flexBasis, gridRow, gridColumn, alignSelf, justifySelf, }) {
    const style = {};
    if (flex)
        style.flex = flex;
    if (flexGrow)
        style.flexGrow = flexGrow;
    if (flexShrink)
        style.flexShrink = flexShrink;
    if (flexBasis)
        style.flexBasis = flexBasis;
    if (typeof gridRow !== "undefined")
        style.gridRow = gridRow;
    if (typeof gridColumn !== "undefined")
        style.gridColumn = gridColumn;
    if (typeof alignSelf !== "undefined")
        style.alignSelf = alignSelf;
    if (typeof justifySelf !== "undefined")
        style.justifySelf = justifySelf;
    return style;
}
exports.styleChild = styleChild;
