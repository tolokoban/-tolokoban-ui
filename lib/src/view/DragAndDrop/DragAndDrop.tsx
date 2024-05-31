import * as React from "react"

import Styles from "./DragAndDrop.module.css"

export interface ViewDragAndDropProps {
    className?: string
    /** Type of the dragged data, and also accepted type for drop zone. */
    type: string
    /** This is the data we move around when dragging. */
    data?: string
    /** A data of the accepted type has been dropped. */
    onDrop?(data: string): void
    children?: React.ReactNode
}

const MIMETYPE_PREFIX = "application/x-tolokoban-ui-"

export function ViewDragAndDrop(props: ViewDragAndDropProps) {
    const mimetype = `${MIMETYPE_PREFIX}${props.type}`
    const [droppable, setDroppable] = React.useState(false)
    const handleDrop = (evt: React.DragEvent<HTMLDivElement>) => {
        setDroppable(false)
        evt.preventDefault()
        const data = evt.dataTransfer.getData(mimetype)
        if (!data || data === props.data) return

        if (props.onDrop) props.onDrop(data)
    }
    const handleDragOver = (evt: React.DragEvent<HTMLDivElement>) => {
        evt.preventDefault()
        const data = evt.dataTransfer.getData(mimetype)
        if (!data || data === props.data || !props.onDrop) return

        setDroppable(true)
        evt.dataTransfer.dropEffect = "move"
    }
    const handleDragStart = (evt: React.DragEvent<HTMLDivElement>) => {
        evt.dataTransfer.setData(mimetype, props.data ?? "")
    }
    return (
        <div
            className={getClassNames(props, droppable)}
            draggable={props.data ? true : false}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragLeave={() => setDroppable(false)}
        >
            {props.children}
        </div>
    )
}

function getClassNames(
    props: ViewDragAndDropProps,
    droppable: boolean
): string {
    const classNames = [Styles.main]
    if (typeof props.className === "string") {
        classNames.push(props.className)
    }
    if (droppable) classNames.push(Styles.droppable)

    return classNames.join(" ")
}
