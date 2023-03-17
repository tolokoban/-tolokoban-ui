import React from "react"
import "./App.css"
import { Button } from "@tolokoban/ui"

export default function App() {
    const [message, setMessage] = React.useState("You are ready to play!")
    return (
        <div className="App">
            <p>{message}</p>
            <Button onClick={() => setMessage("So, let's play!")}>
                Click me!
            </Button>
        </div>
    )
}
