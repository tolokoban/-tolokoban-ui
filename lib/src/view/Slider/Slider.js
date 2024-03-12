import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Theme } from "../../theme";
import { useChangeableValue } from "../../hooks/changeable-value";
import Styles from "./Slider.module.css";
const $ = Theme.classNames;
export function ViewSlider({ min, max, step, className, wide, text, value, onChange, }) {
    const [val, setVal] = useChangeableValue({ value, onChange });
    return (_jsxs("div", { className: $.join(className, Styles.Slider, wide ? "wide" : ""), children: [_jsx("input", { type: "range", min: min !== null && min !== void 0 ? min : 0, max: max !== null && max !== void 0 ? max : 0, step: step !== null && step !== void 0 ? step : 1, onChange: (evt) => setVal(parseFloat(evt.target.value)) }), text && _jsx("div", { children: computeText(text, val) })] }));
}
function computeText(text, value) {
    if (typeof text === "string")
        return text;
    if (typeof text === "number")
        return `${text}`;
    return text(value);
}
//# sourceMappingURL=Slider.js.map