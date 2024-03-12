import { SpaceStyleProps } from "../../theme/styles/space";
import { ViewWithValue } from "../../types";
import { DimensionStyleProps } from "../../theme/styles/dimension";
import { CommonProps } from "../../theme/styles/common";
export type ViewInputTextProps = ViewWithValue<string> & SpaceStyleProps & DimensionStyleProps & CommonProps & {
    /** Text to display when the input is empty. */
    placeholder?: string;
    /** If defined,  label will be added to the input. */
    label?: string;
    /**
     * Input type. Default to `"text"`.
     */
    type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "image" | "hidden" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    /** If `true`, the focus will be set here once displayed. */
    autofocus?: boolean;
    /**
     * A regular expression or a function to assert the validity of the current text.
     */
    validator?: RegExp | ((value: string) => boolean);
    /**
     * Event dispatched when the user pressed Enter.
     */
    onEnterKeyPressed?(value: string): void;
};
export declare function ViewInputText(props: ViewInputTextProps): import("react/jsx-runtime").JSX.Element;
