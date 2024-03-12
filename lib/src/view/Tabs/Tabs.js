import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Theme } from "../../theme";
import { ViewTab } from "../Tab";
import Styles from "./Tabs.module.css";
const $ = Theme.classNames;
export function ViewTabs({ className, children, orientation = "horizontal", value, onChange, }) {
    var _a, _b;
    const tabs = addMissingKeys(children);
    const [tabKey, setTabKey] = React.useState((_b = value !== null && value !== void 0 ? value : (_a = tabs[0]) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0 ? _b : "Tab#0");
    const tab = tabs.find((item) => item.key === tabKey);
    return (_jsxs("div", { className: $.join(className, Styles.Tabs, orientation === "vertical" && Styles.vertical), children: [_jsx("header", { children: wrap(tabs, tab).map((item) => {
                    const { key } = item;
                    return key === tabKey ? (_jsx("div", { children: item.props.label }, key)) : (_jsx("button", { type: "button", onClick: () => {
                            setTabKey(key);
                            onChange === null || onChange === void 0 ? void 0 : onChange(key);
                        }, children: item.props.label }, key));
                }) }), _jsx("main", { children: tab === null || tab === void 0 ? void 0 : tab.props.children })] }));
}
function wrap(tabs, tab) {
    if (!tab)
        return tabs;
    const index = tabs.indexOf(tab);
    if (index < 0)
        return tabs;
    return [...tabs.slice(index), ...tabs.slice(0, index)];
}
function addMissingKeys(children) {
    const rawTabs = Array.isArray(children)
        ? children
        : [children];
    return rawTabs.map((tab, index) => {
        var _a;
        return (_createElement(ViewTab, Object.assign({}, tab.props, { key: (_a = tab.key) !== null && _a !== void 0 ? _a : `Tab#${index}` }), tab.props.children));
    });
}
//# sourceMappingURL=Tabs.js.map