"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewTabs = void 0;
const React = __importStar(require("react"));
const theme_1 = require("../../theme");
const Tab_1 = require("../Tab");
const Tabs_module_css_1 = __importDefault(require("./Tabs.module.css"));
const $ = theme_1.Theme.classNames;
function ViewTabs({ className, children, orientation = "horizontal", value, onChange, }) {
    var _a, _b;
    const tabs = addMissingKeys(children);
    const [tabKey, setTabKey] = React.useState((_b = value !== null && value !== void 0 ? value : (_a = tabs[0]) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0 ? _b : "Tab#0");
    const tab = tabs.find((item) => item.key === tabKey);
    return (React.createElement("div", { className: $.join(className, Tabs_module_css_1.default.Tabs, orientation === "vertical" && Tabs_module_css_1.default.vertical) },
        React.createElement("header", null, wrap(tabs, tab).map((item) => {
            const { key } = item;
            return key === tabKey ? (React.createElement("div", { key: key }, item.props.label)) : (React.createElement("button", { key: key, type: "button", onClick: () => {
                    setTabKey(key);
                    onChange === null || onChange === void 0 ? void 0 : onChange(key);
                } }, item.props.label));
        })),
        React.createElement("main", null, tab === null || tab === void 0 ? void 0 : tab.props.children)));
}
exports.ViewTabs = ViewTabs;
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
        return (React.createElement(Tab_1.ViewTab, Object.assign({}, tab.props, { key: (_a = tab.key) !== null && _a !== void 0 ? _a : `Tab#${index}` }), tab.props.children));
    });
}
