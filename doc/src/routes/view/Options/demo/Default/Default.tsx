import React from "react"
import { ViewOptions, IconMail, IconFacebook, IconTwitter } from "@tolokoban/ui"

export default function Demo() {
    const [value, setValue] = React.useState("E-Mail")
    return (
        <ViewOptions
            value={value}
            onChange={setValue}
            label={`Share to ${value}`}
        >
            <div key="E-Mail">
                <IconMail />
            </div>
            <div key="Twitter">
                <IconTwitter />
            </div>
            <div key="FaceBook">
                <IconFacebook />
            </div>
        </ViewOptions>
    )
}
