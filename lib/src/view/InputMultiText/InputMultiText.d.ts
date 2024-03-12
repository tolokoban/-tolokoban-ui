import { DimensionStyleProps } from "../../theme/styles/dimension";
import { PositionStyleProps } from "../../theme/styles/position";
import { ChildStyleProps } from "../../theme/styles/child";
import { Children, ViewWithValue } from "../../types";
export interface InputMultiTextProps extends ViewWithValue<{
    [lang: string]: string;
}>, ChildStyleProps, PositionStyleProps, DimensionStyleProps {
    className?: string;
    /** What element of the `value` to edit. */
    lang: string;
    onLangChange(this: void, lang: string): void;
    /**
     * Set this function to change how the keys will be
     * rendered.
     * By default, the keys are rendered as the string
     * they are, verbatim.
     */
    renderLang?(this: void, lang: string, selected: boolean): Children;
}
export declare function ViewInputMultiText(props: InputMultiTextProps): import("react/jsx-runtime").JSX.Element;
