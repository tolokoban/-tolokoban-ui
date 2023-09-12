import React from "react"
import { ViewOptions } from "@tolokoban/ui"

export default function Demo() {
    const [value, setValue] = React.useState("M")
    return (
        <ViewOptions label="Select a size" value={value} onChange={setValue}>
            <div key="S">Small</div>
            <div key="M">Medium</div>
            <div key="L">Large</div>
        </ViewOptions>
    )
}
