import React from "react"
import { ViewInputColor } from "@tolokoban/ui"

export default function Demo() {
    const [color, setColor] = React.useState("#F90")
    return <ViewInputColor value={color} onChange={setColor} />
}
