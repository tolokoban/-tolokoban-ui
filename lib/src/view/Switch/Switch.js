import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Theme } from "../../theme";
import { styleChild } from "../../theme/styles/child";
import { stylePosition } from "../../theme/styles/position";
import Styles from "./Switch.module.css";
export function ViewSwitch(props) {
    const style = Object.assign(Object.assign({}, stylePosition(props)), styleChild(props));
    return (_jsxs("button", { className: Theme.classNames.join(props.className, Styles.ViewSwitch, props.value && Styles.ok), type: "button", disabled: props.enabled === false ? true : undefined, style: style, onClick: () => props.onChange(!props.value), children: [_jsxs("div", { className: Styles.pin, children: [_jsx("div", { className: Styles.bar, children: " " }), _jsx("div", { className: Styles.btn, children: " " })] }), props.children] }));
}
//# sourceMappingURL=Switch.js.map