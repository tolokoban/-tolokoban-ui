export function customizeView<T, S extends Partial<T>>(
    View: React.FC<T>,
    defaultProps: S
): React.FC<T> {
    return (props: Omit<T, keyof S>) => {
        const mergedProps = {
            ...defaultProps,
            ...props,
        } as unknown as T & JSX.IntrinsicAttributes
        return <View {...mergedProps} />
    }
}
