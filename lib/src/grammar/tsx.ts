import { TypeGrammar } from "../view/CodeHighlighter/types"

const TsxGrammar: TypeGrammar = {
    lexer: {
        blocCommentOpen: ["/*"],
    },
    scanner: [],
}

export default TsxGrammar
