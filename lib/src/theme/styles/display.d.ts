/// <reference types="react" />
type AlignMode = "normal" | "flex-start" | "flex-end" | "center" | "start" | "end" | "self-start" | "self-end" | "baseline" | "first baseline" | "last baseline" | "stretch" | "safe" | "unsafe";
type JustifyMode = "normal" | "start" | "end" | "flex-start" | "flex-end" | "self-start" | "self-end" | "center" | "left" | "right" | "baseline" | "first baseline" | "last baseline" | "stretch" | "safe" | "unsafe" | "legacy" | "space-between" | "space-around" | "space-evenly";
export type DisplayStyleProps = {
    /** CSS `display` property. */
    display?: "none" | "block" | "inline" | "inline-block" | "flow-root" | "table" | "table-row" | "table-cell" | "table-caption" | "table-column";
} | DisplayFlexStyleProps | DisplayGridStyleProps;
interface DisplayFlexStyleProps {
    /** CSS `display` property. */
    display: "flex" | "inline-flex";
    justifyContent?: JustifyMode;
    /** Default to `center` */
    alignItems?: AlignMode;
    placeItems?: AlignMode | `${AlignMode} ${JustifyMode}`;
    gap?: string | [column: string, row: string];
    columnGap?: string;
    rowGap?: string;
    /** Default to `row` */
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
    /** Default to `nowrap` */
    flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
}
interface DisplayGridStyleProps {
    /** CSS `display` property. */
    display: "grid" | "inline-grid";
    gap?: string | [column: string, row: string];
    columnGap?: string;
    rowGap?: string;
    gridTemplateColumns?: string;
    gridAutoColumns?: string;
    gridTemplateRows?: string;
    gridAutoRows?: string;
    justifyContent?: JustifyMode;
    /** Default to `center` */
    alignItems?: AlignMode;
    placeItems?: AlignMode | `${AlignMode} ${JustifyMode}`;
}
export declare function styleDisplay(props: DisplayStyleProps): React.CSSProperties;
export {};
