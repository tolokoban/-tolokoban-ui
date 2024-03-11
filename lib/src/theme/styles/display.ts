import { cssForGaps } from "./styles.js"

type AlignMode =
    | "normal"
    | "flex-start"
    | "flex-end"
    | "center"
    | "start"
    | "end"
    | "self-start"
    | "self-end"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "stretch"
    | "safe"
    | "unsafe"

type JustifyMode =
    | "normal"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "center"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "stretch"
    | "safe"
    | "unsafe"
    | "legacy"
    | "space-between"
    | "space-around"
    | "space-evenly"

export type DisplayStyleProps =
    | {
          /** CSS `display` property. */
          display?:
              | "none"
              | "block"
              | "inline"
              | "inline-block"
              | "flow-root"
              | "table"
              | "table-row"
              | "table-cell"
              | "table-caption"
              | "table-column"
      }
    | DisplayFlexStyleProps
    | DisplayGridStyleProps

interface DisplayFlexStyleProps {
    /** CSS `display` property. */
    display: "flex" | "inline-flex"
    /* Default to `space-between` */
    justifyContent?: JustifyMode
    /** Default to `center` */
    alignItems?: AlignMode
    placeItems?: AlignMode | `${AlignMode} ${JustifyMode}`
    gap?: string | [column: string, row: string]
    columnGap?: string
    rowGap?: string
    /** Default to `row` */
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse"
    /** Default to `nowrap` */
    flexWrap?: "wrap" | "nowrap" | "wrap-reverse"
}
interface DisplayGridStyleProps {
    /** CSS `display` property. */
    display: "grid" | "inline-grid"
    gap?: string | [column: string, row: string]
    columnGap?: string
    rowGap?: string
    gridTemplateColumns?: string
    gridAutoColumns?: string
    gridTemplateRows?: string
    gridAutoRows?: string
    justifyContent?: JustifyMode
    /** Default to `center` */
    alignItems?: AlignMode
    placeItems?: AlignMode | `${AlignMode} ${JustifyMode}`
}

export function styleDisplay(props: DisplayStyleProps): React.CSSProperties {
    const { display } = props
    if (!display) return {}

    if (display === "flex" || display === "inline-flex")
        return styleDisplayFlex(props)
    if (display === "grid" || display === "inline-grid")
        return styleDisplayGrid(props)
    return { display }
}

function styleDisplayFlex({
    display,
    gap,
    rowGap,
    columnGap,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
}: DisplayFlexStyleProps): React.CSSProperties {
    const style: React.CSSProperties = {
        display,
        ...styleGap({ gap, rowGap, columnGap }),
    }
    style.justifyContent = justifyContent
    style.alignItems = alignItems
    style.flexWrap = flexWrap
    style.flexDirection = flexDirection
    return style
}

function styleDisplayGrid({
    display,
    gap,
    rowGap,
    columnGap,
    gridTemplateRows,
    gridTemplateColumns,
    gridAutoRows,
    gridAutoColumns,
    justifyContent,
    alignItems,
    placeItems,
}: DisplayGridStyleProps): React.CSSProperties {
    const style: React.CSSProperties = {
        display,
        ...styleGap({ gap, rowGap, columnGap }),
    }
    style.gridTemplateRows = gridTemplateRows
    style.gridTemplateColumns = gridTemplateColumns
    style.gridAutoRows = gridAutoRows
    style.gridAutoColumns = gridAutoColumns
    style.justifyContent = justifyContent
    style.alignItems = alignItems
    style.placeItems = placeItems
    return style
}

function styleGap({
    gap,
    columnGap,
    rowGap,
}: {
    gap?: string | [column: string, row: string]
    columnGap?: string
    rowGap?: string
}) {
    const style: React.CSSProperties = {}
    if (gap) style.gap = cssForGaps(gap)
    if (rowGap) style.rowGap = cssForGaps(rowGap)
    if (columnGap) style.columnGap = cssForGaps(columnGap)
    return style
}
