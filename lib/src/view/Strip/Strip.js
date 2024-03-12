import { jsx as _jsx } from "react/jsx-runtime";
import { Theme } from "../../theme";
import { styleDimension, } from "../../theme/styles/dimension";
import { stylePosition } from "../../theme/styles/position";
import { styleChild } from "../../theme/styles/child";
import Styles from "./Strip.module.css";
export function ViewStrip(props) {
    const { orientation = "column", template = "-1" } = props;
    const style = Object.assign(Object.assign(Object.assign({}, styleDimension(props)), stylePosition(props)), styleChild(props));
    const templateDef = template
        .split("")
        .map((c) => ("123456789".includes(c) ? `minmax(0, ${c}fr)` : "auto"))
        .join(" ");
    if (orientation === "row") {
        style.gridTemplateColumns = templateDef;
        style.gridAutoColumns = "auto";
        style.gridTemplateRows = "minmax(0, 1fr)";
    }
    else {
        style.gridTemplateRows = templateDef;
        style.gridAutoRows = "auto";
        style.gridTemplateColumns = "minmax(0, 1fr)";
    }
    return (_jsx("div", { className: Theme.classNames.join(props.className, Styles.Strip, Styles[orientation]), style: style, children: props.children }));
}
//# sourceMappingURL=Strip.js.map