import React from "react"
import { ViewCombo } from "@tolokoban/ui"

export default function Demo() {
    const [animal, setAnimal] = React.useState("fox")
    return (
        <ViewCombo
            label="Select your favourite animal"
            value={animal}
            onChange={setAnimal}
        >
            <div key="monkey">🐵 - Monkey</div>
            <div key="dog">🐶 - Dog</div>
            <div key="fox">🦊 - Fox</div>
            <div key="lion">🦁 - Lion</div>
            <div key="elephant">𓃰 - Elephant</div>
            <div key="frog">🐸 - Frog</div>
            <div key="crab">🦀 - Crab</div>
            <div key="peacook">🦚 - Peacook</div>
            <div key="tiger">🐯 - Tiger</div>
            <div key="squid">🦑 - Squid</div>
            <div key="shark">🦈 - Shark</div>
            <div key="koala">🐨 - Koala</div>
            <div key="beaver">🦫 - Beaver</div>
        </ViewCombo>
    )
}
