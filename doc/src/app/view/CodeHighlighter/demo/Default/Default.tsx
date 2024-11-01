import React from "react"
import { ViewCodeHighlighter } from "@tolokoban/ui"
import Style from "./Default.module.css"

export default function Demo() {
    const code = `type MyRecord = Record<string, number | number[]>
function addElement<ValueType>(dic: Record<string, ValueType>, key: string, value: ValueType) {
    dic[key] = value
}

const dic: Record<string, { name: string }> = {}
addElement(dic, "you", { name: "Harry" })`
    return (
        <ViewCodeHighlighter
            grammar={{
                lexer: {
                    space: /^[ \t\n\t]+/,
                    symbol: '=,|()[]{}<>:"'.split(""),
                },
                scanner: [
                    {
                        token: "symbol",
                        className: Style.symbol,
                    },
                ],
            }}
        >
            {code}
        </ViewCodeHighlighter>
    )
}
