import { jsx as _jsx } from "react/jsx-runtime";
import { Theme } from "../../theme";
import Styles from "./Tab.module.css";
const $ = Theme.classNames;
export function ViewTab({ className, children }) {
    return _jsx("div", { className: $.join(className, Styles.Tab), children: children });
}
//# sourceMappingURL=Tab.js.map