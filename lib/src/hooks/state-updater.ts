import React from "react"

export function useStateUpdater<T>(
    initialValue: T
): [value: T, update: (value: Partial<T>) => void] {
    const [value, setValue] = React.useState(initialValue)
    return [
        value,
        (update: Partial<T>) => {
            setValue({
                ...value,
                ...update,
            })
        },
    ]
}
