import React from "react";
import { ChildStyleProps } from "../../theme/styles/child";
import { ColorName } from "../../types";
import { GenericIconProps } from "../icons/generic";
declare const SIZES: {
    XS: string;
    S: string;
    M: string;
    L: string;
    XL: string;
};
export interface FloatingButtonProps extends ChildStyleProps, Partial<Omit<GenericIconProps, "value" | "color" | "backColor">> {
    className?: string;
    icon: React.FC<GenericIconProps>;
    color?: ColorName;
    colorHover?: ColorName;
    size?: keyof typeof SIZES;
    enabled?: boolean;
}
export declare function ViewFloatingButton(props: FloatingButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
