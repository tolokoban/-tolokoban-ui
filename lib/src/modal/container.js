"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const container_module_css_1 = __importDefault(require("./container.module.css"));
function ModalContainer({ options, onClose, }) {
    const style = styleOptions(options);
    const refContainer = react_1.default.useRef(null);
    const handleClick = (evt) => {
        if (!options.autoClosable)
            return;
        if (refContainer.current === evt.target)
            onClose(options);
    };
    react_1.default.useEffect(() => {
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
    return (react_1.default.createElement("div", { className: getClassNames(options), style: style, ref: refContainer, onClick: handleClick }, options.content));
}
exports.default = ModalContainer;
function getClassNames(options) {
    var _a;
    const classes = [container_module_css_1.default.container];
    for (const align of (_a = options.align) !== null && _a !== void 0 ? _a : "") {
        const cls = container_module_css_1.default[align];
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
