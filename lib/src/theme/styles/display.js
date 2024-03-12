import { cssForGaps } from "./styles";
export function styleDisplay(props) {
    const { display } = props;
    if (!display)
        return {};
    if (display === "flex" || display === "inline-flex")
        return styleDisplayFlex(props);
    if (display === "grid" || display === "inline-grid")
        return styleDisplayGrid(props);
    return { display };
}
function styleDisplayFlex({ display, gap, rowGap, columnGap, justifyContent, alignItems, flexDirection, flexWrap, }) {
    const style = Object.assign({ display }, styleGap({ gap, rowGap, columnGap }));
    style.justifyContent = justifyContent;
    style.alignItems = alignItems;
    style.flexWrap = flexWrap;
    style.flexDirection = flexDirection;
    return style;
}
function styleDisplayGrid({ display, gap, rowGap, columnGap, gridTemplateRows, gridTemplateColumns, gridAutoRows, gridAutoColumns, justifyContent, alignItems, placeItems, }) {
    const style = Object.assign({ display }, styleGap({ gap, rowGap, columnGap }));
    style.gridTemplateRows = gridTemplateRows;
    style.gridTemplateColumns = gridTemplateColumns;
    style.gridAutoRows = gridAutoRows;
    style.gridAutoColumns = gridAutoColumns;
    style.justifyContent = justifyContent;
    style.alignItems = alignItems;
    style.placeItems = placeItems;
    return style;
}
function styleGap({ gap, columnGap, rowGap, }) {
    const style = {};
    if (gap)
        style.gap = cssForGaps(gap);
    if (rowGap)
        style.rowGap = cssForGaps(rowGap);
    if (columnGap)
        style.columnGap = cssForGaps(columnGap);
    return style;
}
//# sourceMappingURL=display.js.map