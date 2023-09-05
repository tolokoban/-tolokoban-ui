import React from "react"
import { ViewInputText } from "@tolokoban/ui"

export default function Demo() {
    const [value, setValue] = React.useState("Hello world!")
    return <ViewInputText value={value} onChange={setValue} />
}
