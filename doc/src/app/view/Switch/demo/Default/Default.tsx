import React from "react"
import { ViewSwitch } from "@tolokoban/ui"

export default function Demo() {
    const [active, setActive] = React.useState(false)
    return (
        <ViewSwitch value={active} onChange={setActive}>
            Nuclear weapon activated
        </ViewSwitch>
    )
}
