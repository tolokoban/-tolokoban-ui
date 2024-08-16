import * as React from "react"

/**
 * State variable that can be stored in local storage.
 * @param defaultValue Default value for initialization.
 * @param storageKey Key where to store it in local storage.
 * @param ensureType If defined, it is used to transform the value read from storage.
 */
export function useLocalStorageState<T>(
    defaultValue: T,
    storageKey: string,
    ensureType: (value: unknown) => T = (value: unknown) => value as T
): [value: T, setValue: (value: T) => void] {
    const [value, setValue] = React.useState<T>(
        get<T>(storageKey, defaultValue, ensureType)
    )
    return [
        value,
        (newValue: T) => {
            setValue(newValue)
            window.localStorage.setItem(storageKey, JSON.stringify(newValue))
        },
    ]
}

function get<T>(
    key: string,
    defaultValue: T,
    ensureType: (value: unknown) => T
): T {
    const text = window.localStorage.getItem(key)
    if (text === null) return defaultValue

    try {
        const value: unknown = JSON.parse(text)
        return ensureType(value)
    } catch (ex) {
        console.error(`Unexpected value in local storage "${key}":`, ex)
        return defaultValue
    }
}
