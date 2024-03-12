import React from "react";
import { ViewTabProps } from "../Tab";
export type ViewTabsProps = {
    className?: string;
    /** Key of the active Tab. */
    value?: string;
    /**
     * * `horizontal`: the tabs' headers are on the top.
     * * `vertical`: the tabs' headers are on the left.
     */
    orientation?: "horizontal" | "vertical";
    /**
     * Callback to call when a new tab is active.
     * @param value Key of the newly activated tab.
     */
    onChange?(value?: string): void;
    children: React.ReactElement<ViewTabProps> | React.ReactElement<ViewTabProps>[];
};
export declare function ViewTabs({ className, children, orientation, value, onChange, }: ViewTabsProps): import("react/jsx-runtime").JSX.Element;
