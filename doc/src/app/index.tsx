/**
 * build-react-routes
 *
 * WARNING! this file has been generated automatically.
 * Please do not edit it because it will probably be overwritten.
 *
 * If you find a bug or if you need an improvement, please fill an issue:
 * https://github.com/tolokoban/build-react-routes/issues
 */

export * from "./routes"
export * from "./types"

import React from "react"

import { matchRoute, useRouteContext, ROUTES } from "./routes"
import { RouteMatch, RoutePath } from "./types"

import Layout1 from "./view/layout"
const Page0 = React.lazy(() => import("./page"))
const Page1 = React.lazy(() => import("./view/page"))
const Page2 = React.lazy(() => import("./view/Button/page"))
const Page5 = React.lazy(() => import("./view/CodeHighlighter/page"))
const Page8 = React.lazy(() => import("./view/Dialog/page"))
const Page11 = React.lazy(() => import("./view/FloatingButton/page"))
const Page14 = React.lazy(() => import("./view/InputColor/page"))
const Page17 = React.lazy(() => import("./view/InputFile/page"))
const Page20 = React.lazy(() => import("./view/InputImage/page"))
const Page23 = React.lazy(() => import("./view/InputMultiText/page"))
const Page26 = React.lazy(() => import("./view/InputText/page"))
const Page29 = React.lazy(() => import("./view/Label/page"))
const Page32 = React.lazy(() => import("./view/Options/page"))
const Page35 = React.lazy(() => import("./view/Panel/page"))
const Page38 = React.lazy(() => import("./view/Read/page"))
const Page41 = React.lazy(() => import("./view/Scroll/page"))
const Page44 = React.lazy(() => import("./view/Slider/page"))
const Page47 = React.lazy(() => import("./view/Spinner/page"))
const Page50 = React.lazy(() => import("./view/Strip/page"))
const Page53 = React.lazy(() => import("./view/Switch/page"))
const Page56 = React.lazy(() => import("./view/Tabs/page"))
const Page59 = React.lazy(() => import("./view/Touchable/page"))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App({ lang }: { lang?: string }) {
    const fb = <div>Loading...</div>
    const pg0 = Page0
    const ly1 = Layout1
    const pg1 = Page1
    const pg2 = Page2
    const pg5 = Page5
    const pg8 = Page8
    const pg11 = Page11
    const pg14 = Page14
    const pg17 = Page17
    const pg20 = Page20
    const pg23 = Page23
    const pg26 = Page26
    const pg29 = Page29
    const pg32 = Page32
    const pg35 = Page35
    const pg38 = Page38
    const pg41 = Page41
    const pg44 = Page44
    const pg47 = Page47
    const pg50 = Page50
    const pg53 = Page53
    const pg56 = Page56
    const pg59 = Page59
    return (
        <Route path="/" Page={pg0} fallback={fb}>
            <Route path="/view" Page={pg1} Layout={ly1} fallback={fb}>
                <Route path="/view/Button" Page={pg2} fallback={fb}>
                    <Route path="/view/Button/demo" fallback={fb}>
                        <Route path="/view/Button/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/CodeHighlighter" Page={pg5} fallback={fb}>
                    <Route path="/view/CodeHighlighter/demo" fallback={fb}>
                        <Route path="/view/CodeHighlighter/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Dialog" Page={pg8} fallback={fb}>
                    <Route path="/view/Dialog/demo" fallback={fb}>
                        <Route path="/view/Dialog/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/FloatingButton" Page={pg11} fallback={fb}>
                    <Route path="/view/FloatingButton/demo" fallback={fb}>
                        <Route path="/view/FloatingButton/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/InputColor" Page={pg14} fallback={fb}>
                    <Route path="/view/InputColor/demo" fallback={fb}>
                        <Route path="/view/InputColor/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/InputFile" Page={pg17} fallback={fb}>
                    <Route path="/view/InputFile/demo" fallback={fb}>
                        <Route path="/view/InputFile/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/InputImage" Page={pg20} fallback={fb}>
                    <Route path="/view/InputImage/demo" fallback={fb}>
                        <Route path="/view/InputImage/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/InputMultiText" Page={pg23} fallback={fb}>
                    <Route path="/view/InputMultiText/demo" fallback={fb}>
                        <Route path="/view/InputMultiText/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/InputText" Page={pg26} fallback={fb}>
                    <Route path="/view/InputText/demo" fallback={fb}>
                        <Route path="/view/InputText/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Label" Page={pg29} fallback={fb}>
                    <Route path="/view/Label/demo" fallback={fb}>
                        <Route path="/view/Label/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Options" Page={pg32} fallback={fb}>
                    <Route path="/view/Options/demo" fallback={fb}>
                        <Route path="/view/Options/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Panel" Page={pg35} fallback={fb}>
                    <Route path="/view/Panel/demo" fallback={fb}>
                        <Route path="/view/Panel/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Read" Page={pg38} fallback={fb}>
                    <Route path="/view/Read/demo" fallback={fb}>
                        <Route path="/view/Read/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Scroll" Page={pg41} fallback={fb}>
                    <Route path="/view/Scroll/demo" fallback={fb}>
                        <Route path="/view/Scroll/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Slider" Page={pg44} fallback={fb}>
                    <Route path="/view/Slider/demo" fallback={fb}>
                        <Route path="/view/Slider/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Spinner" Page={pg47} fallback={fb}>
                    <Route path="/view/Spinner/demo" fallback={fb}>
                        <Route path="/view/Spinner/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Strip" Page={pg50} fallback={fb}>
                    <Route path="/view/Strip/demo" fallback={fb}>
                        <Route path="/view/Strip/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Switch" Page={pg53} fallback={fb}>
                    <Route path="/view/Switch/demo" fallback={fb}>
                        <Route path="/view/Switch/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Tabs" Page={pg56} fallback={fb}>
                    <Route path="/view/Tabs/demo" fallback={fb}>
                        <Route path="/view/Tabs/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Touchable" Page={pg59} fallback={fb}>
                    <Route path="/view/Touchable/demo" fallback={fb}>
                        <Route path="/view/Touchable/demo/Default" fallback={fb} />
                    </Route>
                </Route>
            </Route>
        </Route>
    )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function intl<T extends PageComponent | ContainerComponent | JSX.Element>(
    page: T,
    translations: Record<string, T>,
    lang = ""
): T {
    const candidate1 = translations[lang]
    if (candidate1) return candidate1

    const [prefix] = lang.split("-")
    const candidate2 = translations[prefix]
    if (candidate2) return candidate2

    return page
}

type PageComponent = React.FC<{ params: Record<string, string> }>
type ContainerComponent = React.FC<{
    children: React.ReactNode
    params: Record<string, string>
}>

interface RouteProps {
    path: string
    element?: JSX.Element
    fallback?: JSX.Element
    children?: React.ReactNode
    Page?: PageComponent
    Layout?: ContainerComponent
    Template?: ContainerComponent
    access?: (context: RouteMatch | null) => Promise<boolean>
}

function Route({
    path,
    fallback,
    children,
    Page,
    Layout,
    Template,
    access,
}: RouteProps) {
    const [authorized, setAuthorized] = React.useState<boolean | undefined>(
        false
    )
    const context = useRouteContext()
    const m = context && matchRoute(context.path, ROUTES[path as RoutePath])
    React.useEffect(() => {
        if (!context || !m) return

        if (!access) {
            setAuthorized(true)
        } else {
            setAuthorized(undefined)
            access(context)
                .then(setAuthorized)
                .catch(ex => {
                    console.error("Error in access() function:", ex)
                    setAuthorized(false)
                })

        }
    }, [access, context])

    if (!m) return null

    if (!authorized) return fallback

    if (m.distance === 0) {
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
