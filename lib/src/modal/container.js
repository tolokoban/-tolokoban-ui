import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import Styles from "./container.module.css";
export default function ModalContainer({ options, onClose, }) {
    const style = styleOptions(options);
    const refContainer = React.useRef(null);
    const handleClick = (evt) => {
        if (!options.autoClosable)
            return;
        if (refContainer.current === evt.target)
            onClose(options);
    };
    React.useEffect(() => {
        const onKeyDown = (evt) => {
            if (evt.key !== "Escape")
                return;
            evt.stopPropagation();
            evt.stopImmediatePropagation();
            evt.preventDefault();
            if (options.autoClosable)
                onClose(options);
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [options]);
    return (_jsx("div", { className: getClassNames(options), style: style, ref: refContainer, onClick: handleClick, children: options.content }));
}
function getClassNames(options) {
    var _a;
    const classes = [Styles.container];
    for (const align of (_a = options.align) !== null && _a !== void 0 ? _a : "") {
        const cls = Styles[align];
        if (cls)
            classes.push(cls);
    }
    return classes.join(" ");
}
function styleOptions(options) {
    const style = {
        padding: options.padding,
        background: options.background,
    };
    return style;
}
//# sourceMappingURL=container.js.map