import React from "react"
import {
    IconBrandBlender,
    IconCamera,
    IconGear,
    ViewPanel,
    ViewSpinner,
} from "@tolokoban/ui"

export default function Demo() {
    return (
        <div>
            <ViewSpinner>Waiting for Godot...</ViewSpinner>
            <ViewPanel display="flex" justifyContent="space-around">
                <ViewSpinner orientation="vertical" shadow={9}>
                    Vertical orientation
                </ViewSpinner>
                <ViewSpinner orientation="vertical" color="primary-5">
                    Vertical orientation
                </ViewSpinner>
                <ViewSpinner
                    orientation="vertical"
                    color="secondary-5"
                    shadow={2}
                >
                    Vertical orientation
                </ViewSpinner>
            </ViewPanel>
            <ViewPanel display="flex" justifyContent="space-around" padding="M">
                <ViewSpinner icon={IconGear}>Another icon...</ViewSpinner>
                <ViewSpinner color="neutral-1" icon={IconBrandBlender}>
                    Another icon...
                </ViewSpinner>
                <ViewSpinner icon={IconCamera}>Another icon...</ViewSpinner>
            </ViewPanel>
        </div>
    )
}
