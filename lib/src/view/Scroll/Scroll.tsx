import { Theme } from "../../theme"
import { Children, OpaqueColorName } from "../../types"
import { ColorStyleProps, styleColor } from "../../theme/styles/color"
import { SpaceStyleProps, styleSpace } from "../../theme/styles/space"
import {
    DimensionStyleProps,
    styleDimension,
} from "../../theme/styles/dimension"
import { DisplayStyleProps, styleDisplay } from "../../theme/styles/display"
import { PositionStyleProps, stylePosition } from "../../theme/styles/position"
import { ChildStyleProps, styleChild } from "../../theme/styles/child"

import Styles from "./Scroll.module.css"

const $ = Theme.classNames

export type ViewScrollProps = {
    className?: string
    children: Children
    /**
     * Define the color of the background.
     * This will be used for the fading effect at the top and bottom
     * of the scroll area to let the user see that this is scrollable.
     * Default to `neutral-7`.
     */
    color?: OpaqueColorName
    /**
     * The banner is the area where the content is fading to the background.
     * This attribute will set its CSS height.
     * Defautl to `5em`;
     */
    bannerSize?: string
} & ColorStyleProps &
    SpaceStyleProps &
    DimensionStyleProps &
    DisplayStyleProps &
    PositionStyleProps &
    ChildStyleProps

export function ViewScroll({
    className,
    children,
    color = "neutral-7",
    bannerSize = "5em",
    ...props
}: ViewScrollProps) {
    return (
        <div
            className={$.join(className, Styles.Scroll)}
            style={{
                "--custom-banner-size": bannerSize,
                "--custom-banner-color": `var(--theme-color-${color})`,
                ...styleColor({ color }),
                ...styleSpace(props),
                ...styleDimension(props),
                ...styleDisplay(props),
                ...stylePosition(props),
                ...styleChild(props),
            }}
        >
            <div>{children}</div>
        </div>
    )
}
