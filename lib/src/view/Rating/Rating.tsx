import {
    CommonProps,
    DimensionStyleProps,
    SpaceStyleProps,
    styleCommon,
    styleDimension,
    stylePosition,
    styleSpace,
} from "@/theme"
import { OpaqueColorName, ViewWithValue } from "@/types"
import * as React from "react"
import { useChangeableValue } from "../../hooks/changeable-value"
import IconStar from "../icons/IconStar"
import { Icon } from "../icons/generic"

import Styles from "./Rating.module.css"

export type ViewRatingProps = ViewWithValue<number> &
    SpaceStyleProps &
    DimensionStyleProps &
    CommonProps & {
        /** Number of stars to display. Default to 5. */
        max?: number
        readOnly?: boolean
        icon?: Icon
        color?: OpaqueColorName
        name?: string
    }

const DEFAULT_STAR_COLOR = "#faaf00"

export function ViewRating(props: ViewRatingProps) {
    const id = React.useId()
    const {
        max = 5,
        color,
        name = `ViewRating-${Math.random()}`,
        icon = IconStar,
    } = props
    const [value, setValue] = useChangeableValue(props)
    return (
        <span
            className={getClassNames(props)}
            tabIndex={0}
            style={{
                ...styleCommon(props),
                ...styleDimension(props),
                ...stylePosition(props),
                ...styleSpace(props),
            }}
        >
            {range(max).map((star) => {
                const starId = `${id}-${star}`
                return (
                    <>
                        <label htmlFor={starId} key={starId}>
                            <span style={{ color: DEFAULT_STAR_COLOR }}>
                                {icon({
                                    color,
                                    type: "outlined",
                                })}
                            </span>
                            <span
                                className={Styles.absolute}
                                style={{
                                    width: computeStarWidth(star, value),
                                    color: DEFAULT_STAR_COLOR,
                                }}
                            >
                                {icon({
                                    color,
                                    type: props.readOnly ? "bold" : "dual",
                                })}
                            </span>
                            <span className={Styles.hidden}>
                                {star} Star{star > 1 ? "s" : ""}
                            </span>
                        </label>
                        <input
                            className={Styles.hidden}
                            type="radio"
                            name={name}
                            value={`${star}`}
                            checked={star > value - 1 && star <= value}
                            onChange={(evt) => {
                                if (evt.target.checked) setValue(star)
                            }}
                            id={starId}
                            key={`input/${starId}`}
                        ></input>
                    </>
                )
            })}
        </span>
    )
}

function getClassNames(props: ViewRatingProps): string {
    const classNames = [Styles.main]
    if (typeof props.className === "string") {
        classNames.push(props.className)
    }
    if (props.readOnly) classNames.push(Styles.readOnly)

    return classNames.join(" ")
}

function range(max: number): number[] {
    const arr: number[] = []
    for (let i = 0; i < max; i++) arr.push(i + 1)
    return arr
}

function computeStarWidth(star: number, value: number): string {
    const base = Math.floor(value)
    if (star <= base) return "100%"
    if (star > base + 1) return "0%"
    const percent = 100 * (value - base)
    return `${percent.toFixed(0)}%`
}
