import React from "react"
import { ViewOptionsMultiple, ViewPanel, ViewStack } from "@tolokoban/ui"

const ANGLES = {
    red: 0,
    green: 120,
    blue: 240,
}

type Color = keyof typeof ANGLES

export default function Demo() {
    const [colors, setColors] = React.useState<Color[]>([
        "red",
        "green",
        "blue",
    ])
    return (
        <ViewPanel
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="M"
            padding="M"
            color="neutral-9"
        >
            <ViewOptionsMultiple
                value={colors}
                onChange={setColors}
                label="Select/unselect a color"
            >
                <div key="red">Red</div>
                <div key="green">Green</div>
                <div key="blue">Blue</div>
            </ViewOptionsMultiple>
            <ViewStack value={colors} width="240px" height="240px">
                <Pie key="red" color="red" />
                <Pie key="green" color="green" />
                <Pie key="blue" color="blue" />
            </ViewStack>
        </ViewPanel>
    )
}

function Pie({ color }: { color: Color }) {
    return (
        <svg
            width="240"
            height="240"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-120 -120 240 240"
        >
            <path
                transform={`rotate(${ANGLES[color]})`}
                d="M120,0 A120,120 0 0 0 -120,0 A120,60 0 0 0 120,0"
                stroke="none"
                fill={color}
                fill-opacity="0.25"
            />
        </svg>
    )
}
