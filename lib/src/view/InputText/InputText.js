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
exports.ViewInputText = void 0;
const React = __importStar(require("react"));
const theme_1 = require("../../theme");
const space_1 = require("../../theme/styles/space");
const Label_1 = require("../Label");
const InputText_module_css_1 = __importDefault(require("./InputText.module.css"));
const $ = theme_1.Theme.classNames;
function ViewInputText(props) {
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
    const style = Object.assign({}, (0, space_1.styleSpace)(props));
    if (maxWidth)
        style.maxWidth = maxWidth;
    const input = (React.createElement("input", { className: $.join(className, InputText_module_css_1.default.InputText, invalid && InputText_module_css_1.default.invalid), style: style, autoFocus: autofocus, placeholder: placeholder, type: type, value: text, onChange: handleChange, onKeyDown: handleKeydown }));
    return label ? React.createElement(Label_1.ViewLabel, { value: label }, input) : input;
}
exports.ViewInputText = ViewInputText;
