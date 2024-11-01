/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"

/**
 * If an exception occurs during this effect, it can be caugth by a Error Boundary.
 * With `useEffect()` such exceptions will just be silent.
 */
export function useThrowableCallback<TArgs extends unknown[]>(
    callback: (...args: TArgs) => void,
    dependencies: React.DependencyList,
    errorMessage?: string | (() => string)
): (...args: TArgs) => void {
    const protectedAction = useProtectedAction(callback, errorMessage)
    return React.useCallback(protectedAction, [
        protectedAction,
        ...dependencies,
    ])
}

/**
 * If an exception occurs during this effect, it can be caugth by a Error Boundary.
 * With `useEffect()` such exceptions will just be silent.
 */
export function useThrowableAsyncCallback<TArgs extends unknown[]>(
    callback: (...args: TArgs) => Promise<void>,
    dependencies: React.DependencyList,
    errorMessage?: string | (() => string)
): (...args: TArgs) => void {
    const protectedCallback = useProtectedAsyncAction(callback, errorMessage)
    return React.useCallback(protectedCallback, [
        protectedCallback,
        ...dependencies,
    ])
}

/**
 * If an exception occurs during this effect, it can be caugth by a Error Boundary.
 * With `useEffect()` such exceptions will just be silent.
 */
export function useThrowableEffect(
    action: React.EffectCallback,
    dependencies?: React.DependencyList,
    errorMessage?: string | (() => string)
) {
    const protectedAction = useProtectedAction(action, errorMessage)
    return React.useEffect(protectedAction, dependencies)
}

/**
 * If an exception occurs during this effect, it can be caugth by a Error Boundary.
 * With `useEffect()` such exceptions will just be silent.
 */
export function useThrowableAsyncEffect(
    action: () => Promise<void>,
    dependencies?: React.DependencyList,
    errorMessage?: string | (() => string)
) {
    const protectedAction = useProtectedAsyncAction(action, errorMessage)
    return React.useEffect(protectedAction, dependencies)
}

function useProtectedAction<T extends (() => void) | React.EffectCallback>(
    callback: T,
    errorMessage?: string | (() => string)
) {
    const [, setError] = React.useState<never>()
    return React.useMemo(() => {
        switch (typeof errorMessage) {
            case "string":
                return () => {
                    try {
                        return callback()
                    } catch (ex) {
                        setError(() => {
                            const err = new Error(errorMessage)
                            err.cause = ex
                            throw err
                        })
                    }
                }
            case "function":
                return () => {
                    try {
                        return callback()
                    } catch (ex) {
                        setError(() => {
                            const err = new Error(errorMessage())
                            err.cause = ex
                            throw err
                        })
                    }
                }
            default:
                return () => {
                    try {
                        return callback()
                    } catch (ex) {
                        setError(() => {
                            throw ex
                        })
                    }
                }
        }
    }, [callback, errorMessage])
}

function useProtectedAsyncAction<Args extends unknown[]>(
    callback: (...args: Args) => Promise<void>,
    errorMessage?: string | (() => string)
): (...args: Args) => void {
    const [, setError] = React.useState<never>()
    return React.useMemo(() => {
        switch (typeof errorMessage) {
            case "string":
                return (...args: Args) => {
                    callback(...args).catch((ex) =>
                        setError(() => {
                            const err = new Error(errorMessage)
                            err.cause = ex
                            throw err
                        })
                    )
                }
            case "function":
                return (...args: Args) => {
                    callback(...args).catch((ex) =>
                        setError(() => {
                            const err = new Error(errorMessage())
                            err.cause = ex
                            throw err
                        })
                    )
                }
            default:
                return (...args: Args) => {
                    callback(...args).catch((ex) =>
                        setError(() => {
                            throw ex
                        })
                    )
                }
        }
    }, [callback, errorMessage])
}
