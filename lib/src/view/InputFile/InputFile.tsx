import React from "react"

import { ViewButton, ViewButtonProps } from "../Button/index.js"
import { mergeRefs } from "../../util/refs.js"

export interface ViewInputFileProps extends ViewButtonProps {
    /** Forwarded to the underlying `<input>` element. */
    ref?: React.Ref<HTMLInputElement>
    onLoad(files: File[]): void
    multiple?: boolean
    accept?: string
}

export function ViewInputFile(props: ViewInputFileProps) {
    const innerRef = React.useRef<HTMLInputElement | null>(null)
    const handleClick = () => {
        const input = innerRef.current
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
                ref={mergeRefs(innerRef, props.ref)}
                type="file"
                accept={props.accept ?? "*/*"}
                multiple={props.multiple ? true : false}
                onChange={handleImport}
            />
        </>
    )
}
