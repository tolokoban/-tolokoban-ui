export function clamp(value, min = 0, max = 1) {
    if (value < min)
        return min;
    if (value > max)
        return max;
    return value;
}
//# sourceMappingURL=calc.js.map