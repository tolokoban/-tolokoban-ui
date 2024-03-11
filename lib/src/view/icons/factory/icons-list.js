"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIconById = exports.getIconsDefinitions = void 0;
const icon_factory_1 = require("./icon-factory");
const ICONS = require("./icons.json");
function getIconsDefinitions() {
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
exports.getIconsDefinitions = getIconsDefinitions;
function getIconById(id) {
    const value = ICONS[id];
    if (!value)
        return;
    return (0, icon_factory_1.makeIconView)(value, id);
}
exports.getIconById = getIconById;
