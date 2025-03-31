import React from "react"
import { ViewTabs, ViewTab } from "@tolokoban/ui"

export default function Demo() {
    const tab = (
        <ViewTab label="Lorem">
            Voluptas dicta totam rerum dolorem id. Magnam autem ut repellat aut
            facere beatae numquam. Aut minus at ratione non suscipit. At hic sed
            quod.
        </ViewTab>
    )

    return (
        <ViewTabs>
            <ViewTab label="Lorem">
                Voluptas dicta totam rerum dolorem id. Magnam autem ut repellat
                aut facere beatae numquam. Aut minus at ratione non suscipit. At
                hic sed quod.
            </ViewTab>
            <ViewTab label="Ipsum">
                Non deleniti labore et ad doloremque eius consectetur. Sit qui
                eum sed inventore incidunt nihil qui nobis. Molestiae provident
                sint sed amet nostrum.
            </ViewTab>
            <ViewTab label="Invisible Tab">
                {false && (
                    <div>
                        Voluptas dicta totam rerum dolorem id. Magnam autem ut
                        repellat aut facere beatae numquam. Aut minus at ratione
                        non suscipit. At hic sed quod.
                    </div>
                )}
            </ViewTab>
        </ViewTabs>
    )
}
