import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Theme } from "../../theme";
import { styleChild } from "../../theme/styles/child";
import Styles from "./FloatingButton.module.css";
const SIZES = {
    XS: "75%",
    S: "100%",
    M: "150%",
    L: "200%",
    XL: "300%",
};
export function ViewFloatingButton(props) {
    var _a;
    const { color = "secondary-5", colorHover = (_a = props.color) !== null && _a !== void 0 ? _a : "secondary-6", size = "M", enabled = true, } = props;
    const style = Object.assign(Object.assign({}, styleChild(props)), { fontSize: SIZES[size] });
    if (color) {
        style["--custom-color-back"] = `var(--theme-color-${color})`;
        style["--custom-color-text"] = `var(--theme-color-on-${color})`;
    }
    if (colorHover) {
        style["--custom-color-hover-back"] = `var(--theme-color-${colorHover})`;
        style["--custom-color-hover-text"] = `var(--theme-color-on-${colorHover})`;
    }
    const Icon = props.icon;
    const iconProps = Object.assign({}, props);
    delete iconProps.color;
    delete iconProps.textColor;
    return (_jsx("button", { className: Theme.classNames.join(props.className, Styles.FloatingButton), disabled: !enabled, type: "button", onClick: props.onClick, style: style, children: _jsx(_Fragment, { children: _jsx(Icon, Object.assign({}, iconProps)) }) }));
}
//# sourceMappingURL=FloatingButton.js.map