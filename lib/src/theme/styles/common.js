"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styleCommon = void 0;
const child_1 = require("./child");
const dimension_1 = require("./dimension");
const position_1 = require("./position");
const space_1 = require("./space");
function styleCommon(props) {
    return Object.assign(Object.assign(Object.assign(Object.assign({}, (0, child_1.styleChild)(props)), (0, dimension_1.styleDimension)(props)), (0, position_1.stylePosition)(props)), (0, space_1.styleSpace)(props));
}
exports.styleCommon = styleCommon;
