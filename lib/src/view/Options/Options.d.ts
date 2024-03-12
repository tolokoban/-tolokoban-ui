/// <reference types="react" />
import { Children, ViewWithValue } from "../../types";
export type ViewOptionsProps<T> = ViewWithValue<T> & {
    className?: string;
    /** Optional label to display above the options. */
    label?: string;
    /** If true, set the with to `100%`. */
    wide?: boolean;
    children: Array<React.ReactElement<ViewOptionsItemProps<T>>>;
};
export type ViewOptionsItemProps<T> = {
    key: T;
    children: Children;
};
export declare function ViewOptions<T>(props: ViewOptionsProps<T>): import("react/jsx-runtime").JSX.Element;
