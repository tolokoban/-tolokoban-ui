import { Children, OpaqueColorName } from "../../types";
import { ColorStyleProps } from "../../theme/styles/color";
import { SpaceStyleProps } from "../../theme/styles/space";
import { DimensionStyleProps } from "../../theme/styles/dimension";
import { DisplayStyleProps } from "../../theme/styles/display";
import { PositionStyleProps } from "../../theme/styles/position";
import { ChildStyleProps } from "../../theme/styles/child";
export type ViewScrollProps = {
    className?: string;
    children: Children;
    /**
     * Define the color of the background.
     * This will be used for the fading effect at the top and bottom
     * of the scroll area to let the user see that this is scrollable.
     * Default to `neutral-7`.
     */
    color?: OpaqueColorName;
    /**
     * The banner is the area where the content is fading to the background.
     * This attribute will set its CSS height.
     * Defautl to `5em`;
     */
    bannerSize?: string;
} & ColorStyleProps & SpaceStyleProps & DimensionStyleProps & DisplayStyleProps & PositionStyleProps & ChildStyleProps;
export declare function ViewScroll({ className, children, color, bannerSize, ...props }: ViewScrollProps): import("react/jsx-runtime").JSX.Element;
