import { cssForGaps } from "./styles";
export function styleSpace({ borderRadius, margin, padding }) {
    const style = {};
    if (borderRadius)
        style.borderRadius = cssForGaps(borderRadius);
    if (margin)
        style.margin = cssForGaps(margin);
    if (padding)
        style.padding = cssForGaps(padding);
    return style;
}
//# sourceMappingURL=space.js.map