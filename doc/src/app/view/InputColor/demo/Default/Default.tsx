import React from "react"
import { ViewInputColor, ViewPanel } from "@tolokoban/ui"

export default function Demo() {
    const [color, setColor] = React.useState("#F90")
    const [color2, setColor2] = React.useState("rgb(240, 160, 0)")
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
                    label="My best color"
                />
                <ViewInputColor
                    value={color2}
                    onChange={setColor2}
                    label="My worst color"
                />
            </ViewPanel>
        </div>
    )
}
