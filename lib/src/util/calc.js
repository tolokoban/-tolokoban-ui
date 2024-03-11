"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = void 0;
function clamp(value, min = 0, max = 1) {
    if (value < min)
        return min;
    if (value > max)
        return max;
    return value;
}
exports.clamp = clamp;
