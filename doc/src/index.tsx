import React from "react"
import { createRoot } from "react-dom/client"
import { Theme, ViewButton, ViewInputFile } from "@tolokoban/ui"

// import App from "./app"

import "./index.css"

function start() {
    console.log("VERSION", React.version)
    new Theme({}).apply()
    const container = document.getElementById("root") as HTMLElement
    const root = createRoot(container)
    root.render(
        <React.StrictMode>
            <div>
                <Button value={666} />
                {/* <ViewButton>Test button</ViewButton>
                <ViewInputFile onLoad={console.log}>Import file</ViewInputFile> */}
            </div>
            {/* <App /> */}
        </React.StrictMode>
    )
    // Remove splash screen.
    removeSplashScreen()
}

function Button({ value }: { value: number }) {
    const [state, setState] = React.useState(value)
    return <button onClick={() => setState(state + 1)}>Value = {state}</button>
}

function removeSplashScreen() {
    const SPLASH_VANISHING_DELAY = 900
    const splash = document.getElementById("tgd-logo")
    if (!splash) return

    splash.classList.add("vanish")
    window.setTimeout(() => {
        const parent = splash.parentNode
        if (!parent) return

        parent.removeChild(splash)
    }, SPLASH_VANISHING_DELAY)
}

start()
