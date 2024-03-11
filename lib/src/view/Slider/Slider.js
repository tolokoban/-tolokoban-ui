"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewSlider = void 0;
const theme_1 = require("../../theme");
const changeable_value_1 = require("../../hooks/changeable-value");
const Slider_module_css_1 = __importDefault(require("./Slider.module.css"));
const $ = theme_1.Theme.classNames;
function ViewSlider({ min, max, step, className, wide, text, value, onChange, }) {
    const [val, setVal] = (0, changeable_value_1.useChangeableValue)({ value, onChange });
    return (React.createElement("div", { className: $.join(className, Slider_module_css_1.default.Slider, wide ? "wide" : "") },
        React.createElement("input", { type: "range", min: min !== null && min !== void 0 ? min : 0, max: max !== null && max !== void 0 ? max : 0, step: step !== null && step !== void 0 ? step : 1, onChange: (evt) => setVal(parseFloat(evt.target.value)) }),
        text && React.createElement("div", null, computeText(text, val))));
}
exports.ViewSlider = ViewSlider;
function computeText(text, value) {
    if (typeof text === "string")
        return text;
    if (typeof text === "number")
        return `${text}`;
    return text(value);
}
