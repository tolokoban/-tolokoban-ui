/**
 * 2025-08-03T07:27:06.238Z
 *
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import ViewDocumentation from "@/view/ViewDocumentation"
import ViewDemo from "@/view/ViewDemo"
import DemoDefault from "./demo/Default"

export default function SliderDocumentation() {
    return <ViewDocumentation title='import { ViewSlider } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { Color, ViewInputColor, ViewPanel, ViewSlider } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [red, setRed] = React.useState(223)\n    const [green, setGreen] = React.useState(173)\n    const [blue, setBlue] = React.useState(42)\n    console.log(\"Render:\", red, green, blue)\n    const handleColorChange = React.useCallback((value: string) => {\n        const color = new Color(value)\n        console.log(\"🚀 [Default] value, color = \", value, color) // @FIXME: Remove this line written on 2024-11-01 at 10:09\n        const R = Math.floor(255 * color.R)\n        setRed(R)\n        const G = Math.floor(255 * color.G)\n        setGreen(G)\n        const B = Math.floor(255 * color.B)\n        setBlue(B)\n        console.log(\"🚀 [Default] R, G, B = \", R, G, B) // @FIXME: Remove this line written on 2024-11-01 at 10:11\n    }, [])\n\n    return (\n        <ViewPanel\n            display=\"grid\"\n            gridTemplateColumns=\"auto 1fr auto\"\n            gap=\"M\"\n            maxWidth=\"480px\"\n        >\n            <div\n                style={{\n                    gridColumn: \"1/-1\",\n                    display: \"grid\",\n                    placeItems: \"center\",\n                }}\n            >\n                <ViewInputColor\n                    label=\"Click the color input to find out the color components\"\n                    value={`rgb(${red},${green},${blue})`}\n                    onChange={handleColorChange}\n                />\n            </div>\n            <div>Red:</div>\n            <ViewSlider value={red} onChange={setRed} min={0} max={255} />\n            <b>{red}</b>\n            <div>Green:</div>\n            <ViewSlider value={green} onChange={setGreen} min={0} max={255} />\n            <b>{green}</b>\n            <div>Blue:</div>\n            <ViewSlider value={blue} onChange={setBlue} min={0} max={255} />\n            <b>{blue}</b>\n        </ViewPanel>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}