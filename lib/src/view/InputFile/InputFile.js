import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { ViewButton } from "../Button";
export function ViewInputFile(props) {
    const ref = React.useRef(null);
    const handleClick = () => {
        const input = ref.current;
        if (!input)
            return;
        input.click();
    };
    return (_jsxs(_Fragment, { children: [_jsx(ViewButton, Object.assign({}, props, { onClick: handleClick })), _jsx("input", { style: { display: "none" }, ref: ref, type: "file" })] }));
}
//# sourceMappingURL=InputFile.js.map