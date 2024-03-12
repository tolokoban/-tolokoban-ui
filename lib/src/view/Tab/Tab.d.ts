import { Children } from "../../types";
export interface ViewTabProps {
    className?: string;
    /** Label of the tab. Displayed in the header. */
    label: Children;
    children: Children;
}
export declare function ViewTab({ className, children }: ViewTabProps): import("react/jsx-runtime").JSX.Element;
