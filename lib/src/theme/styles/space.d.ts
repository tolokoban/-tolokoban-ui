/// <reference types="react" />
import { Circumference } from "../../types";
export interface SpaceStyleProps {
    /** You can use `"XXS"`, `"XS"`, `"S"`, `"M"`, `"L"`, `"XL"`, `"XXL"` or any CSS  unit. */
    borderRadius?: Circumference;
    /** You can use `"XXS"`, `"XS"`, `"S"`, `"M"`, `"L"`, `"XL"`, `"XXL"` or any CSS  unit. */
    margin?: Circumference;
    /** You can use `"XXS"`, `"XS"`, `"S"`, `"M"`, `"L"`, `"XL"`, `"XXL"` or any CSS  unit. */
    padding?: Circumference;
}
export declare function styleSpace({ borderRadius, margin, padding }: SpaceStyleProps): import("react").CSSProperties;
