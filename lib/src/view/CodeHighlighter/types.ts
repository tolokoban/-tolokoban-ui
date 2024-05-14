export interface Lexer {
    /**
     * If `name` starts with a "!", the token will be ignored.
     * That means that this token is valid, but we don't need it
     * for the scanner. That can be the case of spaces and new
     * lines, for instance.
     *
     * The array of string represents real strings matching,
     * without any RegExp rules.
     * For example, ["/*", "//"] will match every piece of string
     * strictly equal to "/*" or "//".
     */
    [name: string]: RegExp | string[]
}

export interface TypeGrammar {
    lexer: Lexer
    scanner: ScannerRule[]
}

export type ScannerRule =
    | {
          /** The class to use if this rules matches. */
          className?: string
          token: string
      }
    | {
          /** The class to use if this rules matches. */
          className?: string
          children: Array<
              ScannerRule & {
                  /** Occurences. */
                  arity: "?" | "+" | "*"
              }
          >
      }
    | {
          /** The class to use if this rules matches. */
          className?: string
          /**
           * A bloc allows you to opt-out from the current lexer
           * and use another one.
           * This is usefull for code of different syntax inside another one,
           * like embeded HTML of JSX.
           */
          bloc: {
              /** Token that starts the bloc. */
              open: string
              /** Token that ends the bloc. */
              close: string
              lexer: Lexer
              children: Array<
                  ScannerRule & {
                      /** Occurences. */
                      arity: "?" | "+" | "*"
                  }
              >
          }
      }

export type ColoredCode =
    | string
    | { className: string; children: ColoredCode[] }
