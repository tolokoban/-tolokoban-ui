"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUndoableState = void 0;
const react_1 = __importDefault(require("react"));
function useUndoableState(defaultValue) {
    const [value, setValue] = react_1.default.useState(defaultValue);
    const refManager = react_1.default.useRef(new Manager(value, setValue));
    return [
        value,
        (value) => {
            refManager.current.add(value);
        },
        refManager.current,
    ];
}
exports.useUndoableState = useUndoableState;
class Manager {
    constructor(defaultValue, setValue) {
        this.setValue = setValue;
        this.list = [];
        /**
         * Points to the last inserted value.
         * Which is the current value.
         */
        this.cursor = -1;
        this.canUndo = () => {
            return this.cursor > 0;
        };
        this.canRedo = () => {
            return this.cursor < this.list.length - 1;
        };
        this.undo = () => {
            if (!this.canUndo())
                return;
            this.cursor--;
            this.setValue(this.list[this.cursor]);
        };
        this.redo = () => {
            if (!this.canRedo())
                return;
            this.cursor++;
            this.setValue(this.list[this.cursor]);
        };
        this.list.push(defaultValue);
        this.cursor = 0;
    }
    add(value) {
        this.cursor++;
        this.list.splice(this.cursor);
        this.list.push(value);
        this.setValue(value);
    }
}
