import { jsx as _jsx } from "react/jsx-runtime";
import { useChangeableValue } from "../../hooks/changeable-value";
import { ViewLabel } from "../Label";
import { ViewTouchable } from "../Touchable";
import Styles from "./Options.module.css";
export function ViewOptions(props) {
    const { label, children } = props;
    const [value, setValue] = useChangeableValue(props);
    return (_jsx("div", { className: getClassNames(props), children: _jsx(ViewLabel, { value: label, children: _jsx("div", { className: "options theme-shadow-button", children: children.map((child) => {
                    var _a;
                    const key = typeof value === "number"
                        ? parseFloat(`${(_a = child.key) !== null && _a !== void 0 ? _a : "0"}`)
                        : child.key;
                    return key === value ? (_jsx("div", { className: "button selected theme-color-accent-light", children: child }, key)) : (_jsx(ViewTouchable, { className: "button not-selected theme-color-primary", onClick: () => setValue(key), children: child }, key));
                }) }) }) }));
}
function getClassNames(props) {
    const classNames = [Styles.Options];
    if (typeof props.className === "string")
        classNames.push(props.className);
    if (props.wide === true)
        classNames.push(Styles.OptionsWide);
    return classNames.join(" ");
}
//# sourceMappingURL=Options.js.map