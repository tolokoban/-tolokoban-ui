import React from "react"
import {
    ViewInputNumber,
    ViewInputText,
    ViewLabel,
    ViewPanel,
} from "@tolokoban/ui"

export default function Demo() {
    const [name, setName] = React.useState("")
    const [age, setAge] = React.useState(0)
    return (
        <div>
            <ViewPanel
                display="grid"
                gridTemplateColumns="auto 1fr"
                gap="M"
                placeItems="center start"
                maxWidth="480px"
            >
                <ViewLabel
                    value="What's your name?"
                    title="This is a tooltip..."
                >
                    <ViewInputText
                        value={name}
                        onChange={setName}
                        placeholder="Please enter your name here"
                    />
                </ViewLabel>
                <ViewLabel value="How old are you?">
                    <ViewInputNumber
                        value={age}
                        onChange={setAge}
                        placeholder="Please enter your age here"
                    />
                </ViewLabel>
            </ViewPanel>
            {name.trim() && (
                <p>
                    Nice to meet you, <b>{name}</b>!
                </p>
            )}
        </div>
    )
}
