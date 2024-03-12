import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Theme } from "../../theme";
import Styles from "./Button.module.css";
import { cssForColor, cssForColorOn, cssForGaps, } from "../../theme/styles/styles";
import { styleCommon } from "../../theme/styles/common";
import { setDefaults } from "../../util/set-defaults";
const $ = Theme.classNames;
export function ViewButton(partialProps) {
    const props = setDefaults(partialProps, {
        children: "Button",
        enabled: true,
        borderRadius: ".125em",
        margin: ["S", "M"],
        padding: [0, "M"],
        onClick: DEFAULT_CLICK_HANDLER,
        width: "auto",
        height: "2em",
        variant: "elevated",
        thickness: 0.125,
    });
    const { className, children, enabled, variant, onClick } = props;
    const { color } = partialProps;
    const thickness = cssForGaps(props.thickness);
    const style = Object.assign({ "--custom-color-main-alpha": getMainAlphaColor(color, variant), "--custom-color-main": getMainColor(color, variant), "--custom-color-text": getTextColor(color, variant), "--custom-thickness": thickness }, styleCommon(props));
    const Icon = props.icon;
    return (_jsxs("button", { style: style, className: $.join(className, Styles.Button, Styles[variant], Boolean(Icon) && Styles.icon), disabled: !enabled, type: "button", onClick: onClick, children: [Icon && _jsx(Icon, {}), _jsx("div", { className: Styles.label, children: children })] }));
}
export function makeCustomButton(defaultProps) {
    return (props) => ViewButton(Object.assign(Object.assign({}, defaultProps), props));
}
const DEFAULT_CLICK_HANDLER = () => {
    console.log("Click!");
};
function getMainColor(color, variant) {
    switch (variant) {
        case "text":
            return "transparent";
        // "elevated" | "filled" | "outlined"
        default:
            return cssForColor(color !== null && color !== void 0 ? color : "primary-5");
    }
}
function getMainAlphaColor(color, variant) {
    switch (variant) {
        case "text":
            return "transparent";
        // "elevated" | "filled" | "outlined"
        default:
            return cssForColor(color !== null && color !== void 0 ? color : "primary-5", 0.5);
    }
}
function getTextColor(color, variant) {
    switch (variant) {
        case "text":
        case "outlined":
            return color ? cssForColor(color) : "currentColor";
        // "elevated" | "filled"
        default:
            return cssForColorOn(color !== null && color !== void 0 ? color : "primary-5");
    }
}
//# sourceMappingURL=Button.js.map