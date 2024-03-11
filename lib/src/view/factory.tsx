import * as React from "react"

export function makeCustomView<Props extends Record<string, unknown>>(
    View: React.FC<Props>,
    defaultProps: Partial<Props>
): (props: Props) => React.JSX.Element {
    return (props: Omit<Props, keyof typeof defaultProps>) => {
        const overridenProps: Props = {
            ...defaultProps,
            ...props,
        } as Props
        return <View {...overridenProps} />
    }
}
