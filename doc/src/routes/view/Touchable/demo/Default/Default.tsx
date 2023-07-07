import React from "react"
import {
    ViewTouchable,
    IconChecked,
    IconUnchecked,
    ViewPanel,
} from "@tolokoban/ui"

export default function Demo() {
    const [flag, setFlag] = React.useState(false)
    return (
        <ViewTouchable onClick={() => setFlag(!flag)}>
            <ViewPanel
                display="inline-flex"
                alignItems="center"
                gap="M"
                color="primary-2"
                padding="M"
                margin="M"
            >
                <div>Click to toggle:</div>
                {flag ? <IconChecked /> : <IconUnchecked />}
            </ViewPanel>
        </ViewTouchable>
    )
}
