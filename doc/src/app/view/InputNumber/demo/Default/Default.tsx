import React from "react"
import { ViewInputNumber, ViewPanel } from "@tolokoban/ui"

export default function Demo() {
    const [a, setA] = React.useState(30)
    const [b, setB] = React.useState(1.975)
    return (
        <ViewPanel
            display="grid"
            gridTemplateColumns="auto 100px"
            gap="S"
            padding="L"
            color="neutral-6"
            width="320px"
            placeItems="center start"
        >
            <ViewInputNumber
                value={a}
                onChange={setA}
                label="Liters of oil:"
                width="3em"
            />
            <ViewInputNumber
                value={b}
                onChange={setB}
                label="Price per liter:"
                width="4em"
            />
            <hr
                style={{
                    gridColumn: "1/-1",
                    width: "100%",
                }}
            />
            <div>Total to pay:</div>
            <output>
                <b>{a * b}</b>
            </output>
        </ViewPanel>
    )
}
