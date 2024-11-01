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
import { ViewLabel } from "../Label"

export type ViewRatingProps = ViewWithValue<number> &
    SpaceStyleProps &
    DimensionStyleProps &
    CommonProps & {
        /** Number of stars to display. Default to 5. */
        max?: number
        /** Defaukts to `false`. */
        readOnly?: boolean
        icon?: Icon
        color?: OpaqueColorName
        /**
         * The filling color in edit mode (`readOnly === false`)
         * can be different to `color`.
         */
        colorEdit?: OpaqueColorName
        /**
         * The ouline of the star has always an opacity of 1,
         * but the fill is 1 for readOnly and 0.8 for non-readOnly,
         * by default.
         */
        fillOpacity?: number
        name?: string
        label?: React.ReactNode
    }

const DEFAULT_STAR_COLOR = "#faaf00"

export function ViewRating(props: ViewRatingProps) {
    const id = React.useId()
    const {
        max = 5,
        color,
        colorEdit = color,
        readOnly = false,
        fillOpacity = readOnly ? 1 : 0.8,
        name = `ViewRating-${Math.random()}`,
        icon = IconStar,
    } = props
    const [value, setValue] = useChangeableValue(props)
    const handleMount = useSlideToSelect(max, setValue)
    return (
        <ViewLabel value={props.label}>
            <span
                ref={handleMount}
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
                                <span style={{ opacity: 0 }}>
                                    {icon({
                                        color,
                                        type: "outlined",
                                    })}
                                </span>
                                <span
                                    className={Styles.absolute}
                                    style={{
                                        opacity: fillOpacity,
                                        width: computeStarWidth(star, value),
                                        color: DEFAULT_STAR_COLOR,
                                    }}
                                >
                                    {icon({
                                        color: readOnly ? color : colorEdit,
                                        type: "filled",
                                    })}
                                </span>
                                <span
                                    className={Styles.absolute}
                                    style={{ color: DEFAULT_STAR_COLOR }}
                                >
                                    {icon({
                                        color,
                                        type: "outlined",
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
        </ViewLabel>
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

function useSlideToSelect(
    max: number,
    setValue: (value: number) => void
): (elem: HTMLSpanElement | null) => void {
    const refIsPointerDown = React.useRef(false)
    return React.useCallback((elem: HTMLSpanElement | null) => {
        if (!elem) return

        const handlePointerDown = (evt: PointerEvent) => {
            elem.setPointerCapture(evt.pointerId)
            refIsPointerDown.current = true
        }
        const handlePointerUp = (evt: PointerEvent) => {
            elem.releasePointerCapture(evt.pointerId)
            refIsPointerDown.current = false
        }
        const handlePointerMove = (evt: PointerEvent) => {
            if (!refIsPointerDown.current) return

            const { left, width } = elem.getBoundingClientRect()
            const index = 1 + Math.floor((max * (evt.clientX - left)) / width)
            setValue(index)
        }
        elem.addEventListener("pointerdown", handlePointerDown)
        elem.addEventListener("pointerup", handlePointerUp)
        elem.addEventListener("pointermove", handlePointerMove)
    }, [])
}
