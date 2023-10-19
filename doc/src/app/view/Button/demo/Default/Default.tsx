import React from "react"
import { IconGear, ViewButton, ViewPanel } from "@tolokoban/ui"

export default function Demo() {
    return (
        <div>
            <ViewPanel
                display="grid"
                gridTemplateColumns="auto repeat(4, 1fr)"
                gap="M"
            >
                <div>Enabled</div>
                <ViewButton variant="elevated">Elevated</ViewButton>
                <ViewButton variant="filled">Filled</ViewButton>
                <ViewButton variant="outlined">Outlined</ViewButton>
                <ViewButton variant="text">Text</ViewButton>
                <div>Enabled</div>
                <ViewButton color="primary-5" variant="elevated">
                    Elevated
                </ViewButton>
                <ViewButton color="primary-5" variant="filled">
                    Filled
                </ViewButton>
                <ViewButton color="primary-5" variant="outlined">
                    Outlined
                </ViewButton>
                <ViewButton color="primary-5" variant="text">
                    Text
                </ViewButton>
                <div>Disabled</div>
                <ViewButton enabled={false} variant="elevated">
                    Elevated
                </ViewButton>
                <ViewButton enabled={false} variant="filled">
                    Filled
                </ViewButton>
                <ViewButton enabled={false} variant="outlined">
                    Outlined
                </ViewButton>
                <ViewButton enabled={false} variant="text">
                    Text
                </ViewButton>
            </ViewPanel>
            <ViewPanel>
                <ViewButton icon={IconGear}>With icon</ViewButton>
            </ViewPanel>
        </div>
    )
}
