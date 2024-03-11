import React from "react"
import { ViewInputFile } from "@tolokoban/ui"

export default function Demo() {
    const handleLoad = () => {
        console.log("onLoad()")
    }
    return <ViewInputFile onLoad={handleLoad}>Import file</ViewInputFile>
}
