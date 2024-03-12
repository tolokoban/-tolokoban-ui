import { ViewButtonProps } from "../Button";
import { Children, ColorName } from "../../types";
export type CustomButtonProps = Partial<ViewButtonProps>;
export interface ViewDialogProps {
    className?: string;
    /**
     * If defined, the `title` will appear in the dialog header.
     */
    title?: Children;
    /**
     * Customize the __Cancel__ button.
     * The buton will appear only if you set at least the `onClick` attribute.
     */
    buttonCancel?: CustomButtonProps;
    /**
     * Customize the __Validate__ button.
     * The buton will appear only if you set at least the `onClick` attribute.
     */
    buttonValidate?: CustomButtonProps;
    /**
     * Color of the header. Default to `primary-5`.
     */
    headColor?: ColorName;
    /**
     * Color of the body. Default to `neutral-7`.
     */
    bodyColor?: ColorName;
    /**
     * Color of the footer. Default to `neutral-5`.
     */
    footColor?: ColorName;
    children: Children;
}
export declare function ViewDialog({ className, buttonCancel, buttonValidate, title, headColor, bodyColor, footColor, children, }: ViewDialogProps): import("react/jsx-runtime").JSX.Element;
