import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { styleColor } from "../../../theme/styles/color";
import Styles from "./generic-icon.module.css";
export default function GenericIcon(props) {
    var _a, _b;
    const { value = "M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z", } = props;
    const type = (_a = props.type) !== null && _a !== void 0 ? _a : "filled";
    const style = Object.assign(Object.assign({}, styleColor(props)), { fontSize: sizeToFontSize((_b = props.size) !== null && _b !== void 0 ? _b : "M") });
    return (_jsxs("svg", { className: getClassName(props), style: style, viewBox: "0 0 24 24", preserveAspectRatio: "xMidYMid meet", onClick: () => { var _a; return (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props); }, tabIndex: props.onClick ? 1 : undefined, strokeWidth: 1.5, children: [type === "filled" && (_jsx("path", { d: value, fill: "currentColor", stroke: "none" })), type === "outlined" && (_jsx("path", { d: value, fill: "none", stroke: "currentColor" })), type === "bold" && (_jsx("path", { d: value, fill: "currentColor", stroke: "currentColor" })), type === "dual" && (_jsxs(_Fragment, { children: [_jsx("path", { d: value, opacity: 0.25, fill: "currentColor", stroke: "none" }), _jsx("path", { d: value, fill: "none", stroke: "currentColor" })] }))] }));
}
function getClassName(props) {
    const classNames = [Styles.GenericIcon];
    if (typeof props.className === "string") {
        classNames.push(props.className);
    }
    if (props.animate === true)
        classNames.push(Styles.animate);
    if (props.onClick)
        classNames.push(Styles.clickable);
    return classNames.join(" ");
}
const SIZES = {
    XS: ".75em",
    S: "1em",
    M: "1.5em",
    L: "2em",
    XL: "3em",
};
function sizeToFontSize(value) {
    var _a;
    return (_a = SIZES[value]) !== null && _a !== void 0 ? _a : value;
}
//# sourceMappingURL=generic-icon.js.map