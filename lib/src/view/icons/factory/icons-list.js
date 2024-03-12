import { makeIconView } from "./icon-factory";
const ICONS = require("./icons.json");
export function getIconsDefinitions() {
    const defs = [];
    for (const key of Object.keys(ICONS)) {
        const value = ICONS[key];
        const keywords = key
            .split(/[^0-9a-zA-Z]+/)
            .map(name => name.toLocaleLowerCase());
        defs.push({ value, keywords });
    }
    return defs;
}
export function getIconById(id) {
    const value = ICONS[id];
    if (!value)
        return;
    return makeIconView(value, id);
}
//# sourceMappingURL=icons-list.js.map