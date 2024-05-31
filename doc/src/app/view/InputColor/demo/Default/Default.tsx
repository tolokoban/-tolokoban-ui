import React from "react"
import { ViewInputColor, ViewPanel } from "@tolokoban/ui"

export default function Demo() {
    const [color, setColor] = React.useState("#F90")
    return (
        <div>
            <ViewPanel
                display="inline-flex"
                flexDirection="column"
                alignItems="stretch"
                width="auto"
            >
                <ViewInputColor
                    value={color}
                    onChange={setColor}
                    label="My favourite color"
                />
            </ViewPanel>
        </div>
    )
}
