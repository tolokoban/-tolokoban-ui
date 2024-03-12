import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Theme } from "../../theme";
import { styleDimension, } from "../../theme/styles/dimension";
import { stylePosition } from "../../theme/styles/position";
import { styleChild } from "../../theme/styles/child";
import Styles from "./InputMultiText.module.css";
export function ViewInputMultiText(props) {
    const { value, onChange, onLangChange, renderLang = (item, selected) => selected ? _jsx("b", { children: item }) : _jsx("span", { children: item }), } = props;
    const [keys, itemKey, itemVal] = useLang(props);
    const style = Object.assign(Object.assign(Object.assign({}, styleDimension(props)), stylePosition(props)), styleChild(props));
    const handleChange = (evt) => {
        const text = evt.target.value;
        onChange(Object.assign(Object.assign({}, value), { [itemKey]: text }));
    };
    return (_jsxs("div", { className: Theme.classNames.join(props.className, Styles.InputMultiText), style: style, children: [_jsx("input", { value: itemVal, onChange: handleChange }), _jsx("div", { children: keys.map((key) => (_jsx("button", { onClick: () => onLangChange(key), children: renderLang(key, key === itemKey) }, key))) })] }));
}
function useLang({ value, onChange, lang, onLangChange, }) {
    var _a;
    const keys = Object.keys(value);
    React.useEffect(() => {
        if (keys.length === 0)
            onChange({
                [navigator.language]: "",
            });
    }, [value, onChange, keys.length]);
    const key = findBestKey(keys, lang);
    React.useEffect(() => {
        if (key && key !== lang) {
            onLangChange(key);
        }
    }, [key, onLangChange, lang]);
    return [keys, key !== null && key !== void 0 ? key : "", (_a = value[key !== null && key !== void 0 ? key : ""]) !== null && _a !== void 0 ? _a : ""];
}
/**
 * if `keys` is empty, return `null`.
 * If `lang` is in `keys`, return it.
 * Otherwise, find the first key that starts
 * like `lang`.
 * If nothing has been found, return the first
 * element in `keys`.
 */
function findBestKey(keys, lang) {
    if (keys.length === 0)
        return undefined;
    if (keys.includes(lang))
        return lang;
    for (const key of keys) {
        if (key.startsWith(lang))
            return key;
    }
    for (const key of keys) {
        if (key.toLowerCase().startsWith(lang.toLowerCase()))
            return key;
    }
    return keys[0];
}
//# sourceMappingURL=InputMultiText.js.map