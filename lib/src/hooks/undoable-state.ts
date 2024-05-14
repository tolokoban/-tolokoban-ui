import React from "react"

export function useUndoableState<Type>(
    defaultValue: Type
): [value: Type, setValue: (value: Type) => void, manager: Undoable] {
    const [value, setValue] = React.useState(defaultValue)
    const refManager = React.useRef(new Manager(value, setValue))
    return [
        value,
        (value: Type) => {
            refManager.current.add(value)
        },
        refManager.current,
    ]
}

export interface Undoable {
    undo(): void
    redo(): void
    canUndo(): boolean
    canRedo(): boolean
}

class Manager<Type> implements Undoable {
    private readonly list: Type[] = []
    /**
     * Points to the last inserted value.
     * Which is the current value.
     */
    private cursor = -1

    constructor(
        defaultValue: Type,
        private readonly setValue: (value: Type) => void
    ) {
        this.list.push(defaultValue)
        this.cursor = 0
    }

    readonly canUndo = () => {
        return this.cursor > 0
    }

    readonly canRedo = () => {
        return this.cursor < this.list.length - 1
    }

    readonly undo = () => {
        if (!this.canUndo()) return

        this.cursor--
        this.setValue(this.list[this.cursor])
    }

    readonly redo = () => {
        if (!this.canRedo()) return

        this.cursor++
        this.setValue(this.list[this.cursor])
    }

    add(value: Type) {
        this.cursor++
        this.list.splice(this.cursor)
        this.list.push(value)
        this.setValue(value)
    }
}
