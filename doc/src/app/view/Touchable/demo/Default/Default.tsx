import React from "react"
import { ViewPanel, ViewTouchable } from "@tolokoban/ui"

export default function Demo() {
    const [expanded, setExpanded] = React.useState(false)
    return (
        <ViewTouchable onClick={() => setExpanded(!expanded)}>
            <ViewPanel padding="L" maxWidth="30em" color="tertiary-1">
                <div>Click me to {expanded ? "collapse" : "expand"}</div>
                {expanded && (
                    <p>
                        Corporis eos consequuntur sed voluptatibus velit. Et
                        ipsam repudiandae voluptatum dolorem in. Odio saepe in
                        iure consequatur voluptatem incidunt. Libero et omnis ut
                        et nobis et. Voluptatum ab laborum nam ut accusantium
                        sunt veniam vitae.
                    </p>
                )}
            </ViewPanel>
        </ViewTouchable>
    )
}
