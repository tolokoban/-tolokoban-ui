/// <reference types="react" />
import { Children, Circumference } from "../../types";
import { ColorStyleProps } from "../../theme/styles/color";
import { SpaceStyleProps } from "../../theme/styles/space";
import { OverflowStyleProps } from "../../theme/styles/overflow";
import { DisplayStyleProps } from "../../theme/styles/display";
import { DimensionStyleProps } from "../../theme/styles/dimension";
import { PositionStyleProps } from "../../theme/styles/position";
import { ChildStyleProps } from "../../theme/styles/child";
export type ViewPanelProps = {
    className?: string;
    children?: Children;
    /** CSS `borderRadius` property. */
    borderRadius?: Circumference;
    /** CSS `fontSize` property. */
    fontSize?: string;
    /** If defined, the panel will keep `width / height = aspectRatio`. */
    aspectRatio?: number;
} & ColorStyleProps & SpaceStyleProps & DimensionStyleProps & OverflowStyleProps & DisplayStyleProps & PositionStyleProps & ChildStyleProps;
export declare function ViewPanel(props: ViewPanelProps): import("react/jsx-runtime").JSX.Element;
export declare function makeCustomPanel(defaultProps: Partial<ViewPanelProps>): (props: ViewPanelProps) => JSX.Element;
