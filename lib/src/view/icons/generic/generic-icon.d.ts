/// <reference types="react" />
import { ColorStyleProps } from "../../../theme/styles/color";
export type GenericIconProps = {
    className?: string;
    type?: "filled" | "outlined" | "bold" | "dual";
    size?: string;
    /** Starts the animation if `true` */
    animate?: boolean;
    /** Description of the drawing. Ex.: `M8,20L12,10L16,20Z` */
    value?: string;
    onClick?(): void;
} & ColorStyleProps;
export type IconProps = Omit<GenericIconProps, "value">;
export type Icon = ((props: IconProps) => JSX.Element) & {
    id: string;
};
export default function GenericIcon(props: GenericIconProps): import("react/jsx-runtime").JSX.Element;
