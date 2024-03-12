import React from "react";
import { ColorStyleProps } from "../../theme/styles/color";
import { Children } from "../../types";
export type ViewSpinnerProps = {
    className?: string;
    /** Set the spinnin icon. Default to `IconLoading`. */
    icon?: React.FC<{
        animate?: boolean;
    }>;
    /**
     * `horizontal`: the spinning icon and the label are on
     * the same horizontal line. Their height is the same.
     * `vertical`: the spinning icon is above the label and
     * is at least twice bigger.
     */
    orientation?: "horizontal" | "vertical";
    children?: Children;
} & ColorStyleProps;
export declare function ViewSpinner({ className, icon, orientation, children, ...props }: ViewSpinnerProps): import("react/jsx-runtime").JSX.Element;
