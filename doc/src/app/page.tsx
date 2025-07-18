import { version } from "@tolokoban/ui"

import { Highlight } from "../view/Highlight"

export default function Page() {
    return (
        <div>
            <h1>@tolokoban/ui {version}</h1>
            <h2>Installation</h2>
            <Highlight>npm install --save @tolokoban/ui</Highlight>
            <h2>Basic usage</h2>
            <Highlight>{`import { createRoot } from "react-dom/client"
import { Theme, ViewButton, IconClose } from "@tolokoban/ui"

function handleClose() {
    // Whatever to do when the button is clicked.
}

Theme.apply()
const container = document.body
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <ViewButton icon={IconClose} onClick={handleClose}>
            Close the door
        </ViewButton>
    </React.StrictMode>
)
`}</Highlight>
            <h2>Customization</h2>
            <p>
                You can use `customizeView()` to create new Views with
                predefined properties.
            </p>
            <Highlight>{`import React from "react"
import {
    customizeView,
    IconArrowDown,
    IconArrowLeft,
    IconArrowRight,
    ViewInputColor,
    ViewInputText,
    ViewPanel,
    ViewTooltip,
} from "@tolokoban/ui"

const Flex = customizeView(ViewPanel, {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
})

export default function Demo() {
    return (
        <Flex>
            <ViewTooltip content="attach = top-right" attach="top-right">
                <IconArrowLeft size="L" />
            </ViewTooltip>
            <ViewTooltip content="attach = top" attach="top" shadow={5}>
                <IconArrowDown size="L" />
            </ViewTooltip>
            <ViewTooltip content="attach = top-left" attach="top-left">
                <IconArrowRight size="L" />
            </ViewTooltip>
        </Flex>
    )
}
`}</Highlight>
        </div>
    )
}
