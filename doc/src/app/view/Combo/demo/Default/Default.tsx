import React from "react"
import { ViewCombo } from "@tolokoban/ui"

export default function Demo() {
    const [animal, setAnimal] = React.useState("fox")
    return (
        <ViewCombo value={animal} onChange={setAnimal}>
            <div key="monkey">🐵 - Monkey</div>
            <div key="dog">🐶 - Dog</div>
            <div key="fox">🦊 - Fox</div>
            <div key="lion">🦁 - Lion</div>
        </ViewCombo>
    )
}
