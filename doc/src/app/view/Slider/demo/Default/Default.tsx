import React from "react"
import { ViewSlider } from "@tolokoban/ui"

export default function Demo() {
    const [value, setValue] = React.useState(0.5)
    return <ViewSlider value={value} onChange={setValue} />
}
