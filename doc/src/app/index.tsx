/**
 * WARNING! this file has been generated automatically.
 * Please do not edit it because it will probably be overwritten.
 * 2023-10-16T13:46:37.571Z
 */
import React from "react"
import Layout1 from "./view/layout"

const Page0 = React.lazy(() => import("./page"))
const Page1 = React.lazy(() => import("./view/page"))
const Page2 = React.lazy(() => import("./view/Button/page"))
const Page5 = React.lazy(() => import("./view/CodeHighlighter/page"))
const Page8 = React.lazy(() => import("./view/Dialog/page"))
const Page11 = React.lazy(() => import("./view/FloatingButton/page"))
const Page14 = React.lazy(() => import("./view/InputColor/page"))
const Page17 = React.lazy(() => import("./view/InputImage/page"))
const Page20 = React.lazy(() => import("./view/InputMultiText/page"))
const Page23 = React.lazy(() => import("./view/InputText/page"))
const Page26 = React.lazy(() => import("./view/Label/page"))
const Page29 = React.lazy(() => import("./view/Options/page"))
const Page32 = React.lazy(() => import("./view/Panel/page"))
const Page35 = React.lazy(() => import("./view/Read/page"))
const Page38 = React.lazy(() => import("./view/Scroll/page"))
const Page41 = React.lazy(() => import("./view/Slider/page"))
const Page44 = React.lazy(() => import("./view/Spinner/page"))
const Page47 = React.lazy(() => import("./view/Strip/page"))
const Page50 = React.lazy(() => import("./view/Switch/page"))
const Page53 = React.lazy(() => import("./view/Tabs/page"))
const Page56 = React.lazy(() => import("./view/Touchable/page"))

export default function App() {
    return (
        <Route path="/" Page={Page0} fallback={<div>Loading...</div>}>
            <Route path="/view" Page={Page1} Layout={Layout1} fallback={<div>Loading...</div>}>
                <Route path="/view/Button" Page={Page2} fallback={<div>Loading...</div>}>
                    <Route path="/view/Button/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/Button/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/CodeHighlighter" Page={Page5} fallback={<div>Loading...</div>}>
                    <Route path="/view/CodeHighlighter/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/CodeHighlighter/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/Dialog" Page={Page8} fallback={<div>Loading...</div>}>
                    <Route path="/view/Dialog/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/Dialog/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/FloatingButton" Page={Page11} fallback={<div>Loading...</div>}>
                    <Route path="/view/FloatingButton/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/FloatingButton/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/InputColor" Page={Page14} fallback={<div>Loading...</div>}>
                    <Route path="/view/InputColor/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/InputColor/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/InputImage" Page={Page17} fallback={<div>Loading...</div>}>
                    <Route path="/view/InputImage/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/InputImage/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/InputMultiText" Page={Page20} fallback={<div>Loading...</div>}>
                    <Route path="/view/InputMultiText/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/InputMultiText/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/InputText" Page={Page23} fallback={<div>Loading...</div>}>
                    <Route path="/view/InputText/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/InputText/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/Label" Page={Page26} fallback={<div>Loading...</div>}>
                    <Route path="/view/Label/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/Label/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/Options" Page={Page29} fallback={<div>Loading...</div>}>
                    <Route path="/view/Options/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/Options/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/Panel" Page={Page32} fallback={<div>Loading...</div>}>
                    <Route path="/view/Panel/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/Panel/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/Read" Page={Page35} fallback={<div>Loading...</div>}>
                    <Route path="/view/Read/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/Read/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/Scroll" Page={Page38} fallback={<div>Loading...</div>}>
                    <Route path="/view/Scroll/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/Scroll/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/Slider" Page={Page41} fallback={<div>Loading...</div>}>
                    <Route path="/view/Slider/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/Slider/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/Spinner" Page={Page44} fallback={<div>Loading...</div>}>
                    <Route path="/view/Spinner/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/Spinner/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/Strip" Page={Page47} fallback={<div>Loading...</div>}>
                    <Route path="/view/Strip/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/Strip/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/Switch" Page={Page50} fallback={<div>Loading...</div>}>
                    <Route path="/view/Switch/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/Switch/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/Tabs" Page={Page53} fallback={<div>Loading...</div>}>
                    <Route path="/view/Tabs/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/Tabs/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
                <Route path="/view/Touchable" Page={Page56} fallback={<div>Loading...</div>}>
                    <Route path="/view/Touchable/demo"  fallback={<div>Loading...</div>}>
                        <Route path="/view/Touchable/demo/Default"  fallback={<div>Loading...</div>} />
                    </Route>
                </Route>
            </Route>
        </Route>
    )
}

function useHash() {
    const [hash, setHash] = React.useState(
        extractHash(window.location.toString())
    )
    React.useEffect(() => {
        const handler = (event: HashChangeEvent) => {
            const oldHash = extractHash(event.oldURL)
            const newHash = extractHash(event.newURL)
            const absHash = ensureAbsoluteHash(newHash, oldHash)
            if (absHash !== newHash) {
                history.replaceState({}, "", `#${absHash}`)
            }
            setHash(absHash)
        }
        window.addEventListener("hashchange", handler)
        return () => window.removeEventListener("hashchange", handler)
    }, [])
    return hash
}

function extractHash(url: string) {
    const hash = new URL(url).hash
    if (!hash) return "/"

    return hash.startsWith("#") ? hash.substring(1) : hash
}

function ensureAbsoluteHash(newHash: string, oldHash: string) {
    if (newHash.startsWith("/")) return newHash

    let hash = newHash
    while (hash.startsWith("./")) {
        hash = hash.substring("./".length)
    }
    const path = oldHash.split("/").filter(nonEmpty)
    for (const item of newHash.split("/")) {
        if (item === "..") {
            if (path.length > 0) path.pop()
        } else {
            path.push(item)
        }
    }
    return `/${path.filter(nonEmpty).join("/")}`
}

function nonEmpty(s: unknown): s is string {
    return typeof s === "string" && s.trim().length > 0
}

interface HashMatch {
    params: { [name: string]: string }
    full: boolean
}

let currentParams: Record<string, string> = {}

export function useRouteParams(): Record<string, string> {
    const [params, setParams] = React.useState(currentParams)
    if (areDiffentParams(params, currentParams)) {
        setParams(currentParams)
    }
    return params
}

function areDiffentParams(p1: Record<string, string>, p2: Record<string, string>): boolean {
    const k1 = Object.keys(p1)
    const k2 = Object.keys(p2)
    if (k1.length !== k2.length) return true

    for (const key of k1) {
        if (p1[key] !== p2[key]) return true
    }
    return false
}

function match(hash: string, path: string): null | HashMatch {
    const params: Record<string, string> = {}
    const hashItems = hash.split("/").filter(nonEmpty)
    const pathItems = path.split("/").filter(nonEmpty)
    for (let i = 0; i < Math.min(hashItems.length, pathItems.length); i++) {
        const hashItem = hashItems[i]
        const pathItem = pathItems[i]
        if (pathItem.startsWith("[")) {
            const paramName = pathItem.substring(1, pathItem.length - 1)
            params[paramName] = hashItem
        } else if (hashItem !== pathItem) return null
    }

    currentParams = params
    const full = hashItems.length === pathItems.length
    return { full, params }
}

interface RouteProps {
    path: string
    element?: JSX.Element
    fallback?: JSX.Element
    children?: React.ReactNode
    Page?: React.FC<{ params: Record<string, string> }>
    Layout?: React.FC<{
        children: React.ReactNode
        params: Record<string, string>
    }>
    Template?: React.FC<{
        children: React.ReactNode
        params: Record<string, string>
    }>
}

function Route({
    path,
    fallback,
    children,
    Page,
    Layout,
    Template,
}: RouteProps) {
    const hash = useHash()
    const m = match(hash, path)
    if (!m) return null

    if (m.full) {
        if (!Page) return null

        const element = Template ? (
            <Template params={m.params}>
                <Page params={m.params} />
            </Template>
        ) : (
            <Page params={m.params} />
        )
        if (Layout) {
            return (
                <Layout params={m.params}>
                    <React.Suspense fallback={fallback}>
                        {element}
                    </React.Suspense>
                </Layout>
            )
        }
        return <React.Suspense fallback={fallback}>{element}</React.Suspense>
    }
    return Layout ? (
        <Layout params={m.params}>{children}</Layout>
    ) : (
        <>{children}</>
    )
}
