import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Theme } from "../../theme";
import { styleSpace } from "../../theme/styles/space";
import { ViewLabel } from "../Label";
import Styles from "./InputText.module.css";
const $ = Theme.classNames;
export function ViewInputText(props) {
    const { className, placeholder, value = "", label, autofocus = false, onChange, onEnterKeyPressed, type = "text", maxWidth, validator, } = props;
    const [invalid, setInvalid] = React.useState(false);
    const [text, setText] = React.useState(value);
    const handleKeydown = (evt) => {
        if (invalid)
            return;
        if (evt.key === "Enter") {
            evt.preventDefault();
            evt.stopPropagation();
            onEnterKeyPressed === null || onEnterKeyPressed === void 0 ? void 0 : onEnterKeyPressed(text);
        }
    };
    const handleChange = (evt) => {
        const value = evt.target.value;
        setInvalid(false);
        if (validator) {
            if (validator instanceof RegExp) {
                validator.lastIndex = -1;
                if (!validator.test(value)) {
                    setInvalid(true);
                    return;
                }
            }
            else if (typeof validator === "function") {
                setInvalid(!validator(value));
            }
        }
        setText(value);
    };
    React.useEffect(() => {
        onChange === null || onChange === void 0 ? void 0 : onChange(text);
    }, [onChange, text]);
    const style = Object.assign({}, styleSpace(props));
    if (maxWidth)
        style.maxWidth = maxWidth;
    const input = (_jsx("input", { className: $.join(className, Styles.InputText, invalid && Styles.invalid), style: style, autoFocus: autofocus, placeholder: placeholder, type: type, value: text, onChange: handleChange, onKeyDown: handleKeydown }));
    return label ? _jsx(ViewLabel, { value: label, children: input }) : input;
}
//# sourceMappingURL=InputText.js.map