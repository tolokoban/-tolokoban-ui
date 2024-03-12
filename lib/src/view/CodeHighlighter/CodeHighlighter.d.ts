import { TypeGrammar } from "./types";
export interface ViewCodeHighlighterProps {
    className?: string;
    /**
     * The grammar to use to highlight the code.
     *
     * The library provides few ones:
     * ```
     * import { grammarTsx } from "@tolokoban/ui"
     * ```
     */
    grammar: TypeGrammar;
    /**
     * The code we want to highlight as a plain string.
     */
    children: string;
}
export declare function ViewCodeHighlighter({ className, children, grammar, }: ViewCodeHighlighterProps): import("react/jsx-runtime").JSX.Element;
