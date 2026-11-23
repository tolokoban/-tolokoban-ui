import * as React from "react"

export interface ComboItem {
    key: string
    element: React.ReactElement
    /** Plain text of the element, used for type-ahead search. */
    text: string
}

export function useItems(
    children: React.ReactElement | Array<React.ReactElement | null | false>
): ComboItem[] {
    return React.useMemo(() => {
        const items: ComboItem[] = []
        const list = Array.isArray(children) ? children : [children]
        for (const child of list) {
            if (!child) continue

            const { key } = child
            if (typeof key !== "string") {
                console.error(
                    "In <ViewCombo> every child must have a `key` which is a string!",
                    child
                )
                continue
            }
            items.push({
                key,
                element: child,
                // Leading emojis/symbols are ignored by the type-ahead search.
                text: extractText(child)
                    .replace(/^[^\p{L}\p{N}]+/u, "")
                    .toLowerCase(),
            })
        }
        return items
    }, [children])
}

function extractText(node: React.ReactNode): string {
    if (node === null || node === undefined || typeof node === "boolean")
        return ""
    if (typeof node === "string" || typeof node === "number") return `${node}`
    if (Array.isArray(node)) return node.map(extractText).join("")
    if (React.isValidElement(node)) {
        const props = node.props as { children?: React.ReactNode }
        return extractText(props.children)
    }
    return ""
}

const TYPEAHEAD_DELAY = 500

/**
 * Returns a function that accumulates typed characters
 * and gives the index of the first matching item.
 */
export function useTypeAhead(items: ComboItem[]) {
    const ref = React.useRef({ buffer: "", lastTime: 0 })
    return (char: string, currentIndex: number): number => {
        const state = ref.current
        const now = Date.now()
        if (now - state.lastTime > TYPEAHEAD_DELAY) state.buffer = ""
        state.lastTime = now
        state.buffer += char.toLowerCase()
        const index = search(items, state.buffer, currentIndex)
        if (index > -1 || state.buffer.length === 1) return index

        // No match for the whole buffer: start a new search with this char.
        state.buffer = char.toLowerCase()
        return search(items, state.buffer, currentIndex)
    }
}

function search(items: ComboItem[], buffer: string, currentIndex: number) {
    // When the same letter is typed repeatedly, cycle through the matches.
    const sameLetter = [...buffer].every((c) => c === buffer[0])
    const text = sameLetter ? buffer[0] : buffer
    const start = sameLetter ? currentIndex + 1 : currentIndex
    for (let i = 0; i < items.length; i++) {
        const index = (start + i) % items.length
        if (items[index].text.startsWith(text)) return index
    }
    return -1
}

export const SUPPORTS_ANCHOR_POSITIONING: boolean =
    typeof globalThis.CSS !== "undefined" &&
    typeof globalThis.CSS.supports === "function" &&
    globalThis.CSS.supports("anchor-name: --a")

/**
 * Fallback for browsers without CSS anchor positioning.
 * Places `list` next to `anchor`, trying in this order:
 * bottom, top, left-bottom, left-top.
 */
export function placeList(anchor: HTMLElement, list: HTMLElement) {
    const rect = anchor.getBoundingClientRect()
    list.style.minWidth = `${rect.width}px`
    const w = list.offsetWidth
    const h = list.offsetHeight
    const vw = document.documentElement.clientWidth
    const vh = document.documentElement.clientHeight
    const candidates: Array<[x: number, y: number]> = [
        [rect.left, rect.bottom],
        [rect.left, rect.top - h],
        [rect.right - w, rect.bottom],
        [rect.right - w, rect.top - h],
    ]
    const fits = ([x, y]: [number, number]) =>
        x >= 0 && y >= 0 && x + w <= vw && y + h <= vh
    let [x, y] = candidates.find(fits) ?? candidates[0]
    x = Math.max(0, Math.min(x, vw - w))
    y = Math.max(0, Math.min(y, vh - h))
    list.style.left = `${x}px`
    list.style.top = `${y}px`
}

/**
 * While `open` is true, keep the list positioned with the JS fallback.
 */
export function useFallbackPositioning(
    open: boolean,
    refAnchor: React.RefObject<HTMLElement | null>,
    refList: React.RefObject<HTMLElement | null>
) {
    React.useLayoutEffect(() => {
        if (!open || SUPPORTS_ANCHOR_POSITIONING) return

        const update = () => {
            const anchor = refAnchor.current
            const list = refList.current
            if (anchor && list) placeList(anchor, list)
        }
        update()
        window.addEventListener("resize", update)
        window.addEventListener("scroll", update, true)
        return () => {
            window.removeEventListener("resize", update)
            window.removeEventListener("scroll", update, true)
        }
    }, [open, refAnchor, refList])
}
