"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const react_1 = __importDefault(require("react"));
const theme_1 = require("../../theme");
const dimension_1 = require("../../theme/styles/dimension");
const position_1 = require("../../theme/styles/position");
const child_1 = require("../../theme/styles/child");
const __name___module_css_1 = __importDefault(require("./{{name}}.module.css"));
interface;
{
    {
        name;
    }
}
Props;
child_1.ChildStyleProps,
    position_1.PositionStyleProps,
    dimension_1.DimensionStyleProps;
{
    className ?  : string;
}
function View() { {
    name;
} }
exports.View = View;
(props, { name }, Props) => {
    const style = Object.assign(Object.assign(Object.assign({}, (0, dimension_1.styleDimension)(props)), (0, position_1.stylePosition)(props)), (0, child_1.styleChild)(props));
    return react_1.default.createElement("div", { className: theme_1.Theme.classNames.join(props.className, __name___module_css_1.default., {}, { name }) });
};
style = { style }
    >
;
div >
;
