import React from "react"

import { ViewButton, ViewButtonProps } from "../Button"

export interface ViewInputFileProps extends ViewButtonProps {
    onLoad(): void
}

export function ViewInputFile(props: ViewInputFileProps) {
    const ref = React.useRef<HTMLInputElement | null>(null)
    const handleClick = () => {
        const input = ref.current
        if (!input) return

        input.click()
    }
    return (
        <>
            <ViewButton {...props} onClick={handleClick} />
            <input style={{ display: "none" }} ref={ref} type="file" />
        </>
    )
}
