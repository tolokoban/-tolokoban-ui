import React from "react"
import { ViewInputText, ViewLabel } from "@tolokoban/ui"

export default function Demo() {
    const [name, setName] = React.useState("Mr Bean")
    return (
        <ViewLabel value="What's your name?" title="This is a tooltip...">
            <ViewInputText value={name} onChange={setName} />
        </ViewLabel>
    )
}
