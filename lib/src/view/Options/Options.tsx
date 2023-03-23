import { useChangeableValue } from "../../hooks/changeable-value"
import { ViewWithValue } from "../../types"
import { ViewLabel } from "../Label"
import { ViewTouchable } from "../Touchable"
import Styles from "./Options.module.css"

export type ViewOptionsProps<T extends string> = ViewWithValue<T> & {
    className?: string
    label?: string
    wide?: boolean
    options: { [key: string]: string | JSX.Element }
}

export function ViewOptions<T extends string>(props: ViewOptionsProps<T>) {
    const { label, options } = props
    const [value, setValue] = useChangeableValue(props)
    return (
        <div className={getClassNames(props)}>
            <ViewLabel value={label}>
                <div className="options theme-shadow-button">
                    {Object.keys(options).map((key) =>
                        key === value ? (
                            <div
                                className="button selected theme-color-accent-light"
                                key={key}
                            >
                                {options[key]}
                            </div>
                        ) : (
                            <ViewTouchable
                                className="button not-selected theme-color-primary"
                                key={key}
                                onClick={() => setValue(key as T)}
                            >
                                {options[key]}
                            </ViewTouchable>
                        )
                    )}
                </div>
            </ViewLabel>
        </div>
    )
}

function getClassNames<T extends string>(props: ViewOptionsProps<T>): string {
    const classNames = [Styles.Options]
    if (typeof props.className === "string") classNames.push(props.className)
    if (props.wide === true) classNames.push(Styles.OptionsWide)

    return classNames.join(" ")
}
