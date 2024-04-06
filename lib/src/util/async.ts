type Action = (...args: unknown[]) => void

/**
 * The function to call as much as you want. It will perform the debouce for you.
 * Put in the same args as the `action` function.
 *
 * * action -  Action to call. Two consecutive actions cannot be  called if there is
 * less than `delay` ms between them.
 * * delay - Number of milliseconds.
 */
export function asyncCreateDebouncer(action: Action, delay: number): Action {
    let timer = 0

    return function (this: { delay: number }, ...args: unknown[]) {
        if (timer) window.clearTimeout(timer)
        timer = window.setTimeout(() => {
            timer = 0
            action(...args)
        }, delay)
    }
}

export function asyncSleep(milliseconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
}
