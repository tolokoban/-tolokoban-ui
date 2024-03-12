export function styleDimension({ width, height, maxWidth = "100vw", maxHeight, minWidth, minHeight, fullsize = false, fullwidth = false, fullheight = false, }) {
    const style = {
        width,
        height,
        maxWidth,
        maxHeight,
        minWidth,
        minHeight,
    };
    if (fullsize || fullwidth)
        style.width = "100%";
    if (fullsize || fullheight)
        style.height = "100%";
    return style;
}
//# sourceMappingURL=dimension.js.map