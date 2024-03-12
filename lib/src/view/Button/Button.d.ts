import React from "react";
import { Children, OpaqueColorName } from "../../types";
import { CommonProps } from "../../theme/styles/common";
import { GenericIconProps } from "../icons/generic";
export type ViewButtonProps = {
    /**
     * The look of a button depends on its variant:
     *
     * * __filled__ (default): button ith background.
     * * __elevated__: with a shadow below.
     * * __outline__: no background but a surrounding border.
     * * __text__: text only, no background, no border.
     *
     * Default to `"filled"`.
     */
    variant?: "elevated" | "filled" | "outlined" | "text";
    /** Content of the button. Most often a text, but can be anything. */
    children?: Children;
    /** Click handler. */
    onClick?(this: void): void;
    /**
     * Default to `true`.
     *
     * If set to `false`, the button cannot get the focus and cannot be clicked.
     */
    enabled?: boolean;
    /**
     * Main color of the button.
     * It will be the background, unless we use `variant="text"`
     * or `variant="outline"`.
     */
    color?: OpaqueColorName;
    /**
     * Icon to display to the left.
     */
    icon?: React.FC<GenericIconProps>;
    /**
     * Thickness of the button's border.
     */
    thickness?: string | number;
} & CommonProps;
export declare function ViewButton(partialProps: ViewButtonProps): import("react/jsx-runtime").JSX.Element;
export declare function makeCustomButton(defaultProps: Partial<ViewButtonProps>): (props: ViewButtonProps) => JSX.Element;
