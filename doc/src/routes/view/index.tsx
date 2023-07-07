/**
 * 2023-07-07T14:15:19.645Z
 *
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import { useParams } from "react-router-dom"

import DocButton from "./Button"
import DocDialog from "./Dialog"
import DocLabel from "./Label"
import DocOptions from "./Options"
import DocPanel from "./Panel"
import DocRead from "./Read"
import DocScroll from "./Scroll"
import DocSlider from "./Slider"
import DocTabs from "./Tabs"
import DocTouchable from "./Touchable"

export default function ViewsRoutes() {
    const { name } = useParams()
    switch (name) {
        case "Button": return <DocButton />
        case "Dialog": return <DocDialog />
        case "Label": return <DocLabel />
        case "Options": return <DocOptions />
        case "Panel": return <DocPanel />
        case "Read": return <DocRead />
        case "Scroll": return <DocScroll />
        case "Slider": return <DocSlider />
        case "Tabs": return <DocTabs />
        case "Touchable": return <DocTouchable />
    }
    return <div>No documentation for component <b>{name}</b>!</div>
}