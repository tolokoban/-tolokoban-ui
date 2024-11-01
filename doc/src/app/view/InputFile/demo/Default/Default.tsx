import React from "react"
import { IconImport, ViewInputFile, useModal } from "@tolokoban/ui"

export default function Demo() {
    const modal = useModal()
    const handleLoad = (files: File[]) => {
        void modal.info(
            <div>
                <h1>Selected files:</h1>
                <ul>
                    {files.map((file) => (
                        <li key={file.name}>
                            <b>{file.name}</b> ({file.size} bytes) - {file.type}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
    return (
        <ViewInputFile onLoad={handleLoad} icon={IconImport} multiple>
            Select one or several files
        </ViewInputFile>
    )
}
