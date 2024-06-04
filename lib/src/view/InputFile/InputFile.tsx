import React from "react"

import { ViewButton, ViewButtonProps } from "../Button/index.js"

export interface ViewInputFileProps extends ViewButtonProps {
    onLoad(files: File[]): void
    multiple?: boolean
    accept?: string
}

export function ViewInputFile(props: ViewInputFileProps) {
    const ref = React.useRef<HTMLInputElement | null>(null)
    const handleClick = () => {
        const input = ref.current
        if (!input) return

        input.click()
    }
    const handleImport = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const input = evt.target
        if (!input) return

        const { files } = input
        if (files && files.length > 0) {
            const arr: File[] = []
            for (let i = 0; i < files.length; i++) {
                const f = files.item(i)
                if (f) arr.push(f)
            }
            props.onLoad(arr)
        }
    }
    return (
        <>
            <ViewButton {...props} onClick={handleClick} />
            <input
                style={{ display: "none" }}
                ref={ref}
                type="file"
                accept={props.accept ?? "*/*"}
                multiple={props.multiple ? true : false}
                onChange={handleImport}
            />
        </>
    )
}
