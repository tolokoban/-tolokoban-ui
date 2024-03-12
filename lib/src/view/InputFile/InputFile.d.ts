import { ViewButtonProps } from "../Button";
export interface ViewInputFileProps extends ViewButtonProps {
    onLoad(): void;
}
export declare function ViewInputFile(props: ViewInputFileProps): import("react/jsx-runtime").JSX.Element;
