import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Theme } from "../../theme";
import Styles from "./CodeHighlighter.module.css";
const $ = Theme.classNames;
export function ViewCodeHighlighter({ className, children, grammar, }) {
    const [code, setCode] = React.useState([children]);
    React.useEffect(() => {
        setCode(parseCode(children, grammar));
    }, [children, grammar]);
    return (_jsx("div", { className: $.join(className, Styles.CodeHighlighter), children: code.map(buildCode) }));
}
function buildCode(code, index) {
    if (typeof code === "string")
        return code;
    return (_jsx("span", { className: code.className, children: code.children.map(buildCode) }, `Code.${index}`));
}
function parseCode(text, _grammar) {
    return [text];
}
//# sourceMappingURL=CodeHighlighter.js.map