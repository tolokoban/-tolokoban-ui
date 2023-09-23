import React from "react"

import { Theme } from "../../theme"
import { ColoredCode, TypeGrammar } from "./types"
import { Children } from "../../types"

import Styles from "./CodeHighlighter.module.css"

const $ = Theme.classNames

export interface ViewCodeHighlighterProps {
    className?: string
    /**
     * The grammar to use to highlight the code.
     *
     * The library provides few ones:
     * ```
     * import { grammarTsx } from "@tolokoban/ui"
     * ```
     */
    grammar: TypeGrammar
    /**
     * The code we want to highlight as a plain string.
     */
    children: string
}

export function ViewCodeHighlighter({
    className,
    children,
    grammar,
}: ViewCodeHighlighterProps) {
    const [code, setCode] = React.useState<ColoredCode[]>([children])
    React.useEffect(() => {
        setCode(parseCode(children, grammar))
    }, [children, grammar])
    return (
        <div className={$.join(className, Styles.CodeHighlighter)}>
            {code.map(buildCode)}
        </div>
    )
}

function buildCode(code: ColoredCode, index: number): Children {
    if (typeof code === "string") return code

    return (
        <span key={`Code.${index}`} className={code.className}>
            {code.children.map(buildCode)}
        </span>
    )
}

function parseCode(
    text: string,
    _grammar: TypeGrammar
): React.SetStateAction<ColoredCode[]> {
    return [text]
}
