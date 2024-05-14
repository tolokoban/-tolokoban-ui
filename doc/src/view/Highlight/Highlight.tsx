import SyntaxHighlighter from "react-syntax-highlighter"

import { CodeBloc, codeToString } from "../../util/code-bloc"

import Styles from "./Highlight.module.css"

export interface HighlightProps {
    className?: string
    children?: CodeBloc
}

export function Highlight(props: HighlightProps) {
    return (
        <SyntaxHighlighter
            className={getClassName(props)}
            showLineNumbers={true}
            useInlineStyles={false}
            wrapLines={true}
        >
            {codeToString(props.children ?? "")}
        </SyntaxHighlighter>
    )
}

function getClassName({ className }: HighlightProps) {
    const classes = [Styles["Highlight"]]
    if (className) classes.push(className)
    return classes.join(" ")
}
