import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Theme } from "../../theme";
import { styleDimension, } from "../../theme/styles/dimension";
import { stylePosition } from "../../theme/styles/position";
import { styleChild } from "../../theme/styles/child";
import Styles from "./InputColor.module.css";
const SIZES = {
    XS: "75%",
    S: "100%",
    M: "150%",
    L: "200%",
    XL: "300%",
};
export function ViewInputColor(props) {
    const ref = React.useRef(null);
    const { value, onChange, size = "M" } = props;
    const style = Object.assign(Object.assign(Object.assign(Object.assign({}, styleDimension(props)), stylePosition(props)), styleChild(props)), { fontSize: SIZES[size], backgroundColor: value });
    const handleChange = (evt) => {
        onChange(evt.target.value);
    };
    const handleClick = () => {
        const input = ref.current;
        if (!input)
            return;
        input.click();
    };
    return (_jsx("button", { className: Theme.classNames.join(props.className, Styles.InputColor), style: style, onClick: handleClick, children: _jsx("input", { ref: ref, type: "color", value: sanitizeColor(value), onChange: handleChange }) }));
}
/**
 * Input cannot deal with short colors (#cd9, for instance).
 * We will produce only colors with 7 characters.
 */
function sanitizeColor(value) {
    if (!value.startsWith("#"))
        return value;
    if (value.length === 7)
        return value;
    let color = "#";
    for (const digit of value) {
        if (digit !== "#") {
            color = `${color}${digit}${digit}`;
        }
    }
    return color;
}
//# sourceMappingURL=InputColor.js.map