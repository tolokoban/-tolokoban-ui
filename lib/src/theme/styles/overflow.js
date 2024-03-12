export function styleOverflow({ overflow: overflow, overflowX: overflowX, overflowY: overflowY, }) {
    const style = {};
    if (overflow) {
        if (typeof overflow === "string") {
            style.overflow = overflow;
            return style;
        }
        const [x, y] = overflow;
        style.overflowX = x;
        style.overflowY = y;
        return style;
    }
    if (overflowX)
        style.overflowX = overflowX;
    if (overflowY)
        style.overflowY = overflowY;
    return style;
}
//# sourceMappingURL=overflow.js.map