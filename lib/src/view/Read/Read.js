import { jsx as _jsx } from "react/jsx-runtime";
import { Theme } from "../../theme";
import Styles from "./Read.module.css";
const $ = Theme.classNames;
export function ViewRead({ className, children }) {
    return _jsx("div", { className: $.join(className, Styles.Read), children: children });
}
//# sourceMappingURL=Read.js.map