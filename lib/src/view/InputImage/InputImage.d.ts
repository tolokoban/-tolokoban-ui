import React from "react";
import { ChildStyleProps } from "../../theme/styles/child";
import { ViewWithValue } from "../../types";
import { GenericIconProps } from "../icons/generic";
export interface InputImageProps extends ViewWithValue<string>, ChildStyleProps {
    className?: string;
    /** Image width */
    width: number;
    /** Image height */
    height: number;
    busyIcon?: React.FC<GenericIconProps>;
}
export declare function ViewInputImage(props: InputImageProps): import("react/jsx-runtime").JSX.Element;
