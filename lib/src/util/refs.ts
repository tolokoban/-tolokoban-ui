import * as React from "react"

/**
 * Combine several refs (refs objects, callback refs, `null` or `undefined`)
 * into a single callback ref that keeps all of them in sync with the same
 * DOM node.
 *
 * Typical use case: a component needs a ref internally (to focus an input,
 * for instance) but also wants to forward the `ref` prop it receives to the
 * very same element.
 */
export function mergeRefs<T>(
    ...refs: Array<React.Ref<T> | null | undefined>
): React.RefCallback<T> {
    return (node: T | null) => {
        for (const ref of refs) {
            if (!ref) continue

            if (typeof ref === "function") {
                ref(node)
            } else {
                ;(ref as React.MutableRefObject<T | null>).current = node
            }
        }
    }
}
