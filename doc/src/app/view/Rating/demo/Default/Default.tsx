import React from "react"
import { ViewPanel, ViewRating } from "@tolokoban/ui"

export default function Demo() {
    const [value, setValue] = React.useState(3.4)
    return (
        <ViewPanel display="flex" justifyContent="space-around">
            <ViewRating
                value={value}
                onChange={setValue}
                label={`${value} / 5`}
            />
            <ViewRating value={value} readOnly label="Read only" />
        </ViewPanel>
    )
}
