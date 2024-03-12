import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Theme } from "../../theme";
import Classes from "./Dialog.module.css";
import { ViewButton } from "../Button";
import { styleColor } from "../../theme/styles/color";
import { ViewStrip } from "../Strip";
const $ = Theme.classNames;
export function ViewDialog({ className, buttonCancel, buttonValidate, title, headColor = "primary-3", bodyColor = "neutral-6", footColor = "neutral-4", children, }) {
    const cancelProps = checkClickHandler("Cancel", buttonCancel, {
        variant: "text",
    });
    const validateProps = checkClickHandler("Validate", buttonValidate);
    return (_jsxs(ViewStrip, { className: $.join(className, Classes.Dialog), orientation: "column", template: "-1", children: [title && (_jsx("header", { className: Classes.header, style: styleColor({ color: headColor }), children: title })), _jsx("main", { style: styleColor({ color: bodyColor }), children: children }), (cancelProps || validateProps) && (_jsxs("footer", { style: styleColor({ color: footColor }), children: [cancelProps && _jsx(ViewButton, Object.assign({}, cancelProps)), validateProps && _jsx(ViewButton, Object.assign({}, validateProps))] }))] }));
}
function checkClickHandler(label, props, override) {
    if (!props || !props.onClick)
        return null;
    return Object.assign(Object.assign({ children: label }, props), override);
}
//# sourceMappingURL=Dialog.js.map