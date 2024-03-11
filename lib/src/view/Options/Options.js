"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewOptions = void 0;
const changeable_value_1 = require("../../hooks/changeable-value");
const Label_1 = require("../Label");
const Touchable_1 = require("../Touchable");
const Options_module_css_1 = __importDefault(require("./Options.module.css"));
function ViewOptions(props) {
    const { label, children } = props;
    const [value, setValue] = (0, changeable_value_1.useChangeableValue)(props);
    return (React.createElement("div", { className: getClassNames(props) },
        React.createElement(Label_1.ViewLabel, { value: label },
            React.createElement("div", { className: "options theme-shadow-button" }, children.map((child) => {
                var _a;
                const key = typeof value === "number"
                    ? parseFloat(`${(_a = child.key) !== null && _a !== void 0 ? _a : "0"}`)
                    : child.key;
                return key === value ? (React.createElement("div", { className: "button selected theme-color-accent-light", key: key }, child)) : (React.createElement(Touchable_1.ViewTouchable, { className: "button not-selected theme-color-primary", key: key, onClick: () => setValue(key) }, child));
            })))));
}
exports.ViewOptions = ViewOptions;
function getClassNames(props) {
    const classNames = [Options_module_css_1.default.Options];
    if (typeof props.className === "string")
        classNames.push(props.className);
    if (props.wide === true)
        classNames.push(Options_module_css_1.default.OptionsWide);
    return classNames.join(" ");
}
