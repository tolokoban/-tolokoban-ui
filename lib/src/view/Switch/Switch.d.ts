import { ChildStyleProps } from "../../theme/styles/child";
import { PositionStyleProps } from "../../theme/styles/position";
import { Children, ViewWithValue } from "../../types";
export interface ViewSwitchProps extends ViewWithValue<boolean>, ChildStyleProps, PositionStyleProps {
    className?: string;
    enabled?: boolean;
    children: Children;
}
export declare function ViewSwitch(props: ViewSwitchProps): import("react/jsx-runtime").JSX.Element;
