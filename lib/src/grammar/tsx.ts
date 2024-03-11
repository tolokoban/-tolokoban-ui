import { TypeGrammar } from "../view/CodeHighlighter/types.js"

const TsxGrammar: TypeGrammar = {
    lexer: {
        blocCommentOpen: ["/*"],
    },
    scanner: [],
}

export default TsxGrammar
