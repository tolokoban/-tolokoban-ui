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
        </div>
    )
}
