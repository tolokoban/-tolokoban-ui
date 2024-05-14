export class GenericEvent<T = void> {
    private readonly listeners = new Set<GenericEventListener<T>>()

    addListener(listener: GenericEventListener<T>) {
        this.listeners.add(listener)
    }

    removeListener(listener: GenericEventListener<T>) {
        this.listeners.delete(listener)
    }

    dispatch(value: T) {
        this.listeners.forEach((listener) => listener(value))
    }
}

export type GenericEventListener<T> = (value: T) => void
