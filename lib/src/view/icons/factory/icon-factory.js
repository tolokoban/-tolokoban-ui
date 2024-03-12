import { jsx as _jsx } from "react/jsx-runtime";
import GenericIcon from "../generic/generic-icon";
/**
 * We can found material icons here:
 * https://materialdesignicons.com/
 */
const iconsRenderers = new Map();
export function makeIconView(value, name) {
    const rendererFromCache = iconsRenderers.get(value);
    if (rendererFromCache)
        return rendererFromCache;
    const renderer = (props) => (_jsx(GenericIcon, Object.assign({}, props, { value: value })));
    renderer.id = name !== null && name !== void 0 ? name : value;
    iconsRenderers.set(value, renderer);
    return renderer;
}
//# sourceMappingURL=icon-factory.js.map