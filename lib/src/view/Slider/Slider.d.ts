import { ViewWithValue } from "../../types";
export type ViewSliderProps = ViewWithValue<number> & {
    className?: string;
    /** If defined, displayed at the right of the slider. */
    text?: string | number | ((value: number) => string);
    /** If `true`, the width is set to `100%`. */
    wide?: boolean;
    /** Min value. */
    min?: number;
    /** Max value. */
    max?: number;
    /** Minimum distance between to different values. */
    step?: number;
};
export declare function ViewSlider({ min, max, step, className, wide, text, value, onChange, }: ViewSliderProps): import("react/jsx-runtime").JSX.Element;
