import preferArrow from "eslint-plugin-prefer-arrow"
import _import from "eslint-plugin-import"
import noNull from "eslint-plugin-no-null"
import unicorn from "eslint-plugin-unicorn"
import jsdoc from "eslint-plugin-jsdoc"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import { fixupPluginRules } from "@eslint/compat"
import globals from "globals"
import tsParser from "@typescript-eslint/parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

export default [
    ...compat.extends(
        "prettier",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ),
    {
        plugins: {
            "prefer-arrow": preferArrow,
            import: fixupPluginRules(_import),
            "no-null": noNull,
            unicorn,
            jsdoc,
            "@typescript-eslint": typescriptEslint,
        },

        languageOptions: {
            globals: {
                // ...globals.browser,
                JSX: "readonly",
            },

            parser: tsParser,
            ecmaVersion: 5,
            sourceType: "module",

            parserOptions: {
                project: "./tsconfig.eslint.json",
            },
        },

        rules: {
            complexity: [
                2,
                {
                    max: 20,
                },
            ],

            "max-statements": ["error", 30],
            "no-undefined": "off",
            "no-unused-vars": "off",

            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                },
            ],

            "no-useless-constructor": "off",
            "@typescript-eslint/no-useless-constructor": ["warn"],
            "no-void": "off",
            "@typescript-eslint/prefer-readonly": ["error"],
            "sort-imports": "off",
        },
    },
]
