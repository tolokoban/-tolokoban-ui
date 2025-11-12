import * as React from "react"
import { ViewButton } from "./Button"

export function makeCustomView<
    Props extends Record<string, any>,
    T extends Partial<Props>,
>(
    View: React.FC<Props>,
    defaultProps: T
): (props: Omit<Props, keyof T>) => React.ReactElement<Omit<Props, keyof T>> {
    return (props: Omit<Props, keyof typeof defaultProps>) => {
        const overridenProps: Props = {
            ...defaultProps,
            ...props,
        } as Props
        return <View {...overridenProps} />
    }
}

const Toto = makeCustomView(ViewButton, {})

function render() {
    return <Toto />
}
