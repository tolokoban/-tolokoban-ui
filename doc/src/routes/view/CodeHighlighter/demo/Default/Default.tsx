import React from "react"
import { ViewCodeHighlighter } from "@tolokoban/ui"

export default function Demo() {
    return (
        <ViewCodeHighlighter
            grammar={{
                lexer: {},
                scanner: [],
            }}
            children={`// Test
functon add(a, b) {
    return a + b
}`}
        />
    )
}
