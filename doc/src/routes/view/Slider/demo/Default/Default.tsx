import React from "react"
import { ViewSlider } from "@tolokoban/ui"

export default function Demo() {
    const [value, setValue] = React.useState(50)
    return <ViewSlider value={value} onChange={setValue} />
}
