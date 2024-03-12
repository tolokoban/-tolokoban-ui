/// <reference types="react" />
import { Children, ColorName } from "../../types";
import { CommonProps } from "../../theme/styles/common";
export type ViewLabelProps = CommonProps & {
    /** Text to display as label. */
    value?: string;
    /** Tooltip */
    title?: string;
    /** Color of the label. Default to `currentColor`. */
    color?: ColorName;
    /**
     * Content this label describes.
     * When the label is clicked, the content will get focus.
     */
    children?: Children;
};
export declare function ViewLabel({ color, className, value, title, children, }: ViewLabelProps): JSX.Element;
