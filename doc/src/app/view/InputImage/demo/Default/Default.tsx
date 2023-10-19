import React from "react"
import { ViewInputImage } from "@tolokoban/ui"

import ImageUrl from "./girl.jpg"

export default function Demo() {
    const [url, setUrl] = React.useState(ImageUrl)
    return (
        <ViewInputImage
            width={320}
            height={240}
            value={url}
            onChange={setUrl}
        />
    )
}
