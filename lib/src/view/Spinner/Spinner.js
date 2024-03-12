var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { styleColor } from "../../theme/styles/color";
import IconLoading from "../icons/IconLoading";
import Styles from "./Spinner.module.css";
export function ViewSpinner(_a) {
    var { className, icon = IconLoading, orientation = "horizontal", children } = _a, props = __rest(_a, ["className", "icon", "orientation", "children"]);
    const SpinningIcon = icon;
    return (_jsxs("div", { className: `${orientation === "horizontal"
            ? Styles.SpinnerHorizontal
            : Styles.SpinnerVertical} ${className !== null && className !== void 0 ? className : ""}`, style: styleColor(props), children: [_jsx(SpinningIcon, { animate: true }), children && _jsx("div", { children: children })] }));
}
//# sourceMappingURL=Spinner.js.map