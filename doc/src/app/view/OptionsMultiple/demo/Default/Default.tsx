import React from "react"
import {
    ViewOptionsMultiple,
    IconBook,
    IconBug,
    IconCurve,
    IconCut,
    IconDelete,
    ViewPanel,
    GenericIconProps,
} from "@tolokoban/ui"

const ICONS: Record<string, React.FC<GenericIconProps>> = {
    Book: IconBook,
    Bug: IconBug,
    Curve: IconCurve,
    Cut: IconCut,
    Delete: IconDelete,
}

export default function Demo() {
    const [values, setValues] = React.useState<string[]>([])
    return (
        <div>
            <ViewOptionsMultiple
                value={values}
                onChange={setValues}
                label="Special icons styles:"
            >
                {Object.keys(ICONS).map((key) => {
                    const Icon = ICONS[key]
                    return <Icon key={key} />
                })}
            </ViewOptionsMultiple>
            <ViewPanel
                display="flex"
                justifyContent="space-around"
                padding="XL"
                fontSize="500%"
            >
                {Object.keys(ICONS).map((key) => {
                    const Icon = ICONS[key]
                    return (
                        <Icon
                            key={key}
                            type={values.includes(key) ? "bold" : "filled"}
                        />
                    )
                })}
            </ViewPanel>
            <ViewPanel
                display="flex"
                justifyContent="space-around"
                padding="XL"
                fontSize="500%"
            >
                {Object.keys(ICONS).map((key) => {
                    const Icon = ICONS[key]
                    return (
                        <Icon
                            key={key}
                            type={values.includes(key) ? "dual" : "filled"}
                        />
                    )
                })}
            </ViewPanel>
        </div>
    )
}
