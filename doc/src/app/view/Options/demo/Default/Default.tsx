import React from "react"
import { ViewOptions, ViewPanel } from "@tolokoban/ui"

export default function Demo() {
    const [value, setValue] = React.useState("M")
    const [format, setFormat] = React.useState("A4")
    return (
        <ViewPanel gap="M">
            <ViewOptions
                label="Select a size"
                value={value}
                onChange={setValue}
                color="secondary-4"
                colorSelection="primary-6"
            >
                <div key="XS">Extra Small</div>
                <div key="S">Small</div>
                <div key="M">Medium</div>
                <div key="L">Large</div>
                <div key="XL">Extra Large</div>
            </ViewOptions>
            <ViewOptions
                label="Select page format"
                value={format}
                onChange={setFormat}
            >
                <div key="A5">
                    A5 - <small>148×210</small>
                </div>
                <div key="A4">
                    A4 - <small>210×297</small>
                </div>
                <div key="A3">
                    A3 - <small>297×240</small>
                </div>
            </ViewOptions>
        </ViewPanel>
    )
}
