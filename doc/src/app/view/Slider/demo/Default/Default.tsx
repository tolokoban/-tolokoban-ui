import React from "react"
import { ViewSlider } from "@tolokoban/ui"

export default function Demo() {
    const [value, setValue] = React.useState(63)
    return <ViewSlider value={value} onChange={setValue} min={0} max={100} />
}
