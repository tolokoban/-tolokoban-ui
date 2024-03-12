import { Children } from "../../types";
export interface ViewTouchableProps<T> {
    className?: string;
    children: Children;
    /**
     * HTML tooltip, used in the `title` attribute.
     */
    tooltip?: string;
    /** Anything you want to be dispatched with the `onClick` event. */
    tag?: T;
    /**
     * Event dispatched when a click is detected on the component.
     * @param tag Any piece of data associated to this component.
     */
    onClick?(tag: T | undefined): void;
}
export declare function ViewTouchable<T>({ className, children, tag, tooltip, onClick, }: ViewTouchableProps<T>): import("react/jsx-runtime").JSX.Element;
