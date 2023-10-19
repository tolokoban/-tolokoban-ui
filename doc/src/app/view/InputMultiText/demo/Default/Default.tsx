import React from "react"
import { ViewInputMultiText } from "@tolokoban/ui"

export default function Demo() {
    const [lang, setLang] = React.useState("en")
    const [value, setValue] = React.useState<Record<string, string>>({
        en: "Hello world!",
        fr: "Salut le monde !",
        it: "Ciao mondo!",
    })
    return (
        <div>
            <ViewInputMultiText
                lang={lang}
                onLangChange={setLang}
                value={value}
                onChange={setValue}
            />
        </div>
    )
}
