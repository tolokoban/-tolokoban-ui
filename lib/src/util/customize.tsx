export function customizeView<T>(
    View: React.FC<T>,
    defaultProps: Partial<T>
): React.FC<T> {
    return (props: T) => {
        const mergedProps = {
            ...defaultProps,
            ...props,
        }
        return <View {...mergedProps} />
    }
}
