import React from "react"
import { IconClose, IconOk, ViewDialog } from "@tolokoban/ui"

export default function Demo() {
    return (
        <div>
            <p>
                A <b>Dialog</b> looks like a window with a potential header and
                button in the footer:
            </p>
            <ViewDialog
                title="This is your last warning!!!"
                bodyColor="primary-1"
                headColor="secondary-7"
                footColor="primary-3"
                shadow={3}
                padding="M"
                buttonCancel={{
                    children: "Maybe not...",
                    icon: IconClose,
                    onClick: () => alert("Abort..."),
                }}
                buttonValidate={{
                    children: "Let do this! Yeah!!",
                    icon: IconOk,
                    onClick: () => alert("BOOM!!!"),
                }}
            >
                <p>
                    Are you sure you want to destroy your computer with an
                    <b>atomic explosion</b>?
                </p>
            </ViewDialog>
        </div>
    )
}
