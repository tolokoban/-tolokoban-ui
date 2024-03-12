import { jsx as _jsx } from "react/jsx-runtime";
import { Theme } from "../../theme";
import { styleColor } from "../../theme/styles/color";
import { styleSpace } from "../../theme/styles/space";
import { styleOverflow } from "../../theme/styles/overflow";
import { styleDisplay } from "../../theme/styles/display";
import { styleDimension, } from "../../theme/styles/dimension";
import { cssForGaps } from "../../theme/styles/styles";
import { stylePosition } from "../../theme/styles/position";
import { styleChild } from "../../theme/styles/child";
import Styles from "./Panel.module.css";
const $ = Theme.classNames;
export function ViewPanel(props) {
    const { className, children, borderRadius, fontSize, aspectRatio = 0, } = props;
    const style = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ fontSize }, styleColor(props)), styleSpace(props)), styleDimension(props)), styleOverflow(props)), styleDisplay(props)), stylePosition(props)), styleChild(props));
    if (aspectRatio > 0)
        style["--custom-aspect-ratio"] = aspectRatio;
    if (borderRadius)
        style.borderRadius = cssForGaps(borderRadius);
    return (_jsx("div", { className: $.join(className, Styles.Panel), style: style, children: children }));
}
export function makeCustomPanel(defaultProps) {
    return (props) => ViewPanel(Object.assign(Object.assign({}, defaultProps), props));
}
//# sourceMappingURL=Panel.js.map