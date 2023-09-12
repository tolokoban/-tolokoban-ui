import React from "react"
import { ViewDialog } from "@tolokoban/ui"

export default function Demo() {
    return (
        <div>
            <p>
                A <b>Dialog</b> looks like a window with a potential header and
                button in the footer:
            </p>
            <ViewDialog>
                <p>
                    Are you sure you want to destroy your computer with an
                    atomic explosion?
                </p>
            </ViewDialog>
        </div>
    )
}
