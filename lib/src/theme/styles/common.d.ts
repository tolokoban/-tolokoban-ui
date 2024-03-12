/// <reference types="react" />
import { ChildStyleProps } from "./child";
import { DimensionStyleProps } from "./dimension";
import { PositionStyleProps } from "./position";
import { SpaceStyleProps } from "./space";
export type CommonProps = {
    /**
     * If defined, `className` will be added to the component.
     */
    className?: string;
} & ChildStyleProps & DimensionStyleProps & PositionStyleProps & SpaceStyleProps;
export declare function styleCommon(props: CommonProps): React.CSSProperties;
type Unit = "%" | "cm" | "mm" | "Q" | "in" | "pc" | "pt" | "px" | "em" | "ex" | "ch" | "rem" | "lh" | "rlh" | "vw" | "vh" | "vmin" | "vmax" | "vb" | "vi" | "svw" | "svh" | "lvw" | "lvh" | "dvw" | "dvh";
export type NumberWithUnit = "0" | "auto" | "max-content" | "min-content" | `fit-content(${number}${Unit})` | `${number}${Unit}`;
export {};
