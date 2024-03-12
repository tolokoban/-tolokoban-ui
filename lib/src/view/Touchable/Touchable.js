import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { Theme } from "../../theme";
import Styles from "./Touchable.module.css";
const $ = Theme.classNames;
export function ViewTouchable({ className, children, tag, tooltip, onClick, }) {
    if (!onClick)
        return _jsx(_Fragment, { children: children });
    return (_jsx("div", { className: $.join(className, Styles.Touchable), title: tooltip, onClick: () => onClick(tag), children: children }));
}
//# sourceMappingURL=Touchable.js.map