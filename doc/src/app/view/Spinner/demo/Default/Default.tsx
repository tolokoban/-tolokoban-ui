import React from "react"
import { IconGear, ViewPanel, ViewSpinner } from "@tolokoban/ui"

export default function Demo() {
    return (
        <div>
            <ViewSpinner>Waiting for Godot...</ViewSpinner>
            <ViewPanel display="flex" justifyContent="space-around">
                <ViewSpinner orientation="vertical">
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
            <ViewSpinner icon={IconGear}>Another icon...</ViewSpinner>
        </div>
    )
}
