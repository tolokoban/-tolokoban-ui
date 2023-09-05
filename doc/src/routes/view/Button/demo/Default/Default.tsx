import React from "react"
import { ViewButton } from "@tolokoban/ui"

export default function Demo() {
    return (
        <div>
            <div>
                <ViewButton />
                <ViewButton variant="filled" />
                <ViewButton variant="outlined" />
                <ViewButton variant="text" />
            </div>
            <div>
                <ViewButton enabled={false} />
                <ViewButton enabled={false} variant="filled" />
                <ViewButton enabled={false} variant="outlined" />
                <ViewButton enabled={false} variant="text" />
            </div>
        </div>
    )
}
