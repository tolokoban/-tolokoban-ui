/// <reference types="react" />
import { ColorName } from "../../types";
export interface ColorStyleProps {
    /**
     * Define the color of the component background.
     * The text color will be adjusted for maximum
     * contrast.
     */
    color?: ColorName;
    /**
     * Set the text color only.
     */
    textColor?: ColorName;
    /**
     * Set the background color only.
     */
    backColor?: ColorName;
    /**
     * Shadow under the Panel.
     * 0 means no shadow, then shadow is bigger
     * from 1 to 9.
     */
    shadow?: number;
}
export declare function styleColor({ color, textColor, backColor, shadow }: ColorStyleProps, defaults?: Partial<ColorStyleProps>): React.CSSProperties;
export declare function styleColorVars({ color, textColor, backColor, }: ColorStyleProps): React.CSSProperties;
