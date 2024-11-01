import React from "react"
import { Color, ViewInputColor, ViewPanel, ViewSlider } from "@tolokoban/ui"

export default function Demo() {
    const [red, setRed] = React.useState(223)
    const [green, setGreen] = React.useState(173)
    const [blue, setBlue] = React.useState(42)
    console.log("Render:", red, green, blue)
    const handleColorChange = React.useCallback((value: string) => {
        const color = new Color(value)
        console.log("🚀 [Default] value, color = ", value, color) // @FIXME: Remove this line written on 2024-11-01 at 10:09
        const R = Math.floor(255 * color.R)
        setRed(R)
        const G = Math.floor(255 * color.G)
        setGreen(G)
        const B = Math.floor(255 * color.B)
        setBlue(B)
        console.log("🚀 [Default] R, G, B = ", R, G, B) // @FIXME: Remove this line written on 2024-11-01 at 10:11
    }, [])

    return (
        <ViewPanel
            display="grid"
            gridTemplateColumns="auto 1fr auto"
            gap="M"
            maxWidth="480px"
        >
            <div
                style={{
                    gridColumn: "1/-1",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <ViewInputColor
                    label="Click the color input to find out the color components"
                    value={`rgb(${red},${green},${blue})`}
                    onChange={handleColorChange}
                />
            </div>
            <div>Red:</div>
            <ViewSlider value={red} onChange={setRed} min={0} max={255} />
            <b>{red}</b>
            <div>Green:</div>
            <ViewSlider value={green} onChange={setGreen} min={0} max={255} />
            <b>{green}</b>
            <div>Blue:</div>
            <ViewSlider value={blue} onChange={setBlue} min={0} max={255} />
            <b>{blue}</b>
        </ViewPanel>
    )
}
