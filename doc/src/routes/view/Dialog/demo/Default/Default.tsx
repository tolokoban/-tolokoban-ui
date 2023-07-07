import React from "react"
import { ViewDialog } from "@tolokoban/ui"

export default function Demo() {
    return (
        <ViewDialog
            title="Dialog Box"
            buttonValidate={{
                onClick: () => {},
            }}
            buttonCancel={{ onClick: () => {} }}
        >
            Hello World!
        </ViewDialog>
    )
}
