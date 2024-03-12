import React from "react";
export function useUndoableState(defaultValue) {
    const [value, setValue] = React.useState(defaultValue);
    const refManager = React.useRef(new Manager(value, setValue));
    return [
        value,
        (value) => {
            refManager.current.add(value);
        },
        refManager.current,
    ];
}
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
//# sourceMappingURL=undoable-state.js.map