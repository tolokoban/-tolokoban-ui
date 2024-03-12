import { DimensionStyleProps } from "../../theme/styles/dimension";
import { PositionStyleProps } from "../../theme/styles/position";
import { ChildStyleProps } from "../../theme/styles/child";
import { ViewWithValue } from "../../types";
declare const SIZES: {
    XS: string;
    S: string;
    M: string;
    L: string;
    XL: string;
};
export interface InputColorProps extends ViewWithValue<string>, ChildStyleProps, PositionStyleProps, DimensionStyleProps {
    className?: string;
    size?: keyof typeof SIZES;
}
export declare function ViewInputColor(props: InputColorProps): import("react/jsx-runtime").JSX.Element;
export {};
