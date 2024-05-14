import React from "react"
import { ViewInputText, ViewLabel, ViewPanel } from "@tolokoban/ui"

export default function Demo() {
    const [name, setName] = React.useState("")
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
                    <ViewInputText
                        value={name}
                        onChange={setName}
                        placeholder="Please enter your name here"
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
