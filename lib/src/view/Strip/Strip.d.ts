import { DimensionStyleProps } from "../../theme/styles/dimension";
import { PositionStyleProps } from "../../theme/styles/position";
import { ChildStyleProps } from "../../theme/styles/child";
import { Children } from "../../types";
export interface StripProps extends ChildStyleProps, PositionStyleProps, DimensionStyleProps {
    className?: string;
    /** Default to "column". */
    orientation?: "column" | "row";
    /**
     * `template` should have as many characters as
     * the number of items of `children`.
     * If the children is a digit (1 to 9), the child
     * must expand its size to this fraction.
     *
     * for instance, "-1-2--" means:
     * `auto minmax(0, 1fr) auto minmax(0, 2fr) auto auto`.
     *
     * Default to "-1".
     */
    template?: string;
    children: Children;
}
export declare function ViewStrip(props: StripProps): import("react/jsx-runtime").JSX.Element;
