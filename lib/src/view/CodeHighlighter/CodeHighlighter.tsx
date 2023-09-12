import React from "react"
import { Theme } from "../../theme"
import Style from "./CodeHighlighter.module.css"
import { ColoredCode, TypeGrammar } from "./types"

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
        <div className={$.join(className, Style.CodeHighlighter)}>
            {code.map(buildCode)}
        </div>
    )
}

function buildCode(code: ColoredCode, index: number): React.ReactNode {
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