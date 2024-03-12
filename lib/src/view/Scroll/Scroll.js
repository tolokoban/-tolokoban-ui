var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Theme } from "../../theme";
import { styleColor } from "../../theme/styles/color";
import { styleSpace } from "../../theme/styles/space";
import { styleDimension, } from "../../theme/styles/dimension";
import { styleDisplay } from "../../theme/styles/display";
import { stylePosition } from "../../theme/styles/position";
import { styleChild } from "../../theme/styles/child";
import Styles from "./Scroll.module.css";
const $ = Theme.classNames;
export function ViewScroll(_a) {
    var { className, children, color = "neutral-7", bannerSize = "5em" } = _a, props = __rest(_a, ["className", "children", "color", "bannerSize"]);
    return (_jsx("div", { className: $.join(className, Styles.Scroll), style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ "--custom-banner-size": bannerSize, "--custom-banner-color": `var(--theme-color-${color})` }, styleColor({ color })), styleSpace(props)), styleDimension(props)), styleDisplay(props)), stylePosition(props)), styleChild(props)), children: _jsx("div", { children: children }) }));
}
//# sourceMappingURL=Scroll.js.map