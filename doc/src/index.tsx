import React from "react"
import { createRoot } from "react-dom/client"
import { version, Theme } from "@tolokoban/ui"

import App from "./app"

import "./index.css"

console.log("@tolokoban/ui", version)

function start() {
    console.log("React version:", React.version)
    Theme.apply()
    const container = document.getElementById("root") as HTMLElement
    const root = createRoot(container)
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
    // Remove splash screen.
    removeSplashScreen()
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
