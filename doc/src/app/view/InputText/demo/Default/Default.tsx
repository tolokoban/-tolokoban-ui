import React from "react"
import { ViewInputText } from "@tolokoban/ui"

export default function Demo() {
    const [name, setName] = React.useState("Tolokoban")
    return (
        <p>
            The name <ViewInputText value={name} onChange={setName} /> is
            spelled <code>{name.split("").reverse().join("")}</code> in reverse.
        </p>
    )
}
