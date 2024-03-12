import { styleChild } from "./child";
import { styleDimension } from "./dimension";
import { stylePosition } from "./position";
import { styleSpace } from "./space";
export function styleCommon(props) {
    return Object.assign(Object.assign(Object.assign(Object.assign({}, styleChild(props)), styleDimension(props)), stylePosition(props)), styleSpace(props));
}
//# sourceMappingURL=common.js.map