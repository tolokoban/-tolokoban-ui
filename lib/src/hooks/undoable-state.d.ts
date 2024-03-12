export declare function useUndoableState<Type>(defaultValue: Type): [value: Type, setValue: (value: Type) => void, manager: Undoable];
interface Undoable {
    undo(): void;
    redo(): void;
    canUndo(): boolean;
    canRedo(): boolean;
}
export {};
