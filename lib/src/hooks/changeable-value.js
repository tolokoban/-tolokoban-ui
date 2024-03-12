import * as React from "react";
export function useChangeableValue(props) {
    const [value, setValue] = React.useState(props.value);
    React.useEffect(() => {
        setValue(props.value);
    }, [props.value]);
    return [
        value,
        (v) => {
            var _a;
            setValue(v);
            (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, v);
        },
    ];
}
//# sourceMappingURL=changeable-value.js.map