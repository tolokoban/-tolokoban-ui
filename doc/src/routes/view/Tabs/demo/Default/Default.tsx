import React from "react"
import { ViewTabs, ViewTab } from "@tolokoban/ui"

export default function Demo() {
    return (
        <ViewTabs>
            <ViewTab label="First">
                This is the <b>first</b> tab.
            </ViewTab>
            <ViewTab label="Second">
                This is the <b>second</b> tab.
            </ViewTab>
        </ViewTabs>
    )
}
