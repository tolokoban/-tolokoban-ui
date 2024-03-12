import { jsx as _jsx } from "react/jsx-runtime";
export function makeCustomView(View, defaultProps) {
    return (props) => {
        const overridenProps = Object.assign(Object.assign({}, defaultProps), props);
        return _jsx(View, Object.assign({}, overridenProps));
    };
}
//# sourceMappingURL=factory.js.map