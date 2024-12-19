import React from "react"

import { GenericEvent } from "@/util/event"

export function useEventValue<TArgument>(
    defaultValue: TArgument,
    event: GenericEvent<TArgument>
) {
    const [counter, setCounter] = React.useState(0)
    const [value, setValue] = React.useState(defaultValue)
    React.useEffect(() => {
        const listener = (arg: TArgument) => {
            setCounter(counter + 1)
            setValue(arg)
        }
        event.addListener(listener)
        return () => event.removeListener(listener)
    }, [event])
    return value
}

/**
 * This hook doesn't care about the event argument.
 * @returns Number of times the event was fired.
 */
export function useEvent<TArgument>(event: GenericEvent<TArgument>) {
    const [counter, setCounter] = React.useState(0)
    React.useEffect(() => {
        setCounter(0)
        const listener = () => {
            setCounter(counter + 1)
        }
        event.addListener(listener)
        return () => event.removeListener(listener)
    }, [event])
    return counter
}

/**
 * This hook doesn't care about the event argument.
 * @returns Number of times the event was fired.
 */
export function useDebouncedEvent<TArgument>(
    event: {
        add(listener: (arg: TArgument) => void): void
        remove(listener: (arg: TArgument) => void): void
    },
    delay: number
) {
    const refCounter = React.useRef(0)
    const refTimeout = React.useRef(0)
    const [counter, setCounter] = React.useState(0)
    React.useEffect(() => {
        setCounter(0)
        const listener = () => {
            window.clearTimeout(refTimeout.current)
            refTimeout.current = window.setTimeout(() => {
                refCounter.current++
                setCounter(refCounter.current)
            }, delay)
        }
        event.add(listener)
        return () => {
            window.clearTimeout(refTimeout.current)
            event.remove(listener)
        }
    }, [event])
    return counter
}
