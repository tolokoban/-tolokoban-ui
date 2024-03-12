import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Theme } from "../../theme";
import Styles from "./Label.module.css";
const $ = Theme.classNames;
export function ViewLabel({ color, className, value, title, children, }) {
    const id = `labelled/${React.useId()}`;
    if (!value)
        return _jsx(_Fragment, { children: children });
    const style = {};
    if (color)
        style.color = `var(--theme-color-${color})`;
    return (_jsxs(_Fragment, { children: [_jsx("label", { htmlFor: id, title: title, className: $.join(className, Styles.Label), style: style, children: value }), children && (_jsx("div", { id: id, className: Styles.LabelContent, children: children }))] }));
}
//# sourceMappingURL=Label.js.map