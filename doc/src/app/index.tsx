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

import Layout0 from "./layout"
import Layout2 from "./view/layout"
const Page0 = React.lazy(() => import("./page"))
const Page1 = React.lazy(() => import("./test/page"))
const Page2 = React.lazy(() => import("./view/page"))
const Page3 = React.lazy(() => import("./view/Button/page"))
const Page6 = React.lazy(() => import("./view/CodeHighlighter/page"))
const Page9 = React.lazy(() => import("./view/Dialog/page"))
const Page12 = React.lazy(() => import("./view/FloatingButton/page"))
const Page15 = React.lazy(() => import("./view/InputColor/page"))
const Page18 = React.lazy(() => import("./view/InputFile/page"))
const Page21 = React.lazy(() => import("./view/InputImage/page"))
const Page24 = React.lazy(() => import("./view/InputMultiText/page"))
const Page27 = React.lazy(() => import("./view/InputText/page"))
const Page30 = React.lazy(() => import("./view/Label/page"))
const Page33 = React.lazy(() => import("./view/Options/page"))
const Page36 = React.lazy(() => import("./view/Panel/page"))
const Page39 = React.lazy(() => import("./view/Read/page"))
const Page42 = React.lazy(() => import("./view/Scroll/page"))
const Page45 = React.lazy(() => import("./view/Slider/page"))
const Page48 = React.lazy(() => import("./view/Spinner/page"))
const Page51 = React.lazy(() => import("./view/Strip/page"))
const Page54 = React.lazy(() => import("./view/Switch/page"))
const Page57 = React.lazy(() => import("./view/Tabs/page"))
const Page60 = React.lazy(() => import("./view/Touchable/page"))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App({ lang }: { lang?: string }) {
    const fb = <div>Loading...</div>
    const ly0 = Layout0
    const pg0 = Page0
    const pg1 = Page1
    const ly2 = Layout2
    const pg2 = Page2
    const pg3 = Page3
    const pg6 = Page6
    const pg9 = Page9
    const pg12 = Page12
    const pg15 = Page15
    const pg18 = Page18
    const pg21 = Page21
    const pg24 = Page24
    const pg27 = Page27
    const pg30 = Page30
    const pg33 = Page33
    const pg36 = Page36
    const pg39 = Page39
    const pg42 = Page42
    const pg45 = Page45
    const pg48 = Page48
    const pg51 = Page51
    const pg54 = Page54
    const pg57 = Page57
    const pg60 = Page60
    return (
        <Route path="/" Page={pg0} Layout={ly0} fallback={fb}>
            <Route path="/test" Page={pg1} fallback={fb} />
            <Route path="/view" Page={pg2} Layout={ly2} fallback={fb}>
                <Route path="/view/Button" Page={pg3} fallback={fb}>
                    <Route path="/view/Button/demo" fallback={fb}>
                        <Route path="/view/Button/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/CodeHighlighter" Page={pg6} fallback={fb}>
                    <Route path="/view/CodeHighlighter/demo" fallback={fb}>
                        <Route path="/view/CodeHighlighter/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Dialog" Page={pg9} fallback={fb}>
                    <Route path="/view/Dialog/demo" fallback={fb}>
                        <Route path="/view/Dialog/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/FloatingButton" Page={pg12} fallback={fb}>
                    <Route path="/view/FloatingButton/demo" fallback={fb}>
                        <Route path="/view/FloatingButton/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/InputColor" Page={pg15} fallback={fb}>
                    <Route path="/view/InputColor/demo" fallback={fb}>
                        <Route path="/view/InputColor/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/InputFile" Page={pg18} fallback={fb}>
                    <Route path="/view/InputFile/demo" fallback={fb}>
                        <Route path="/view/InputFile/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/InputImage" Page={pg21} fallback={fb}>
                    <Route path="/view/InputImage/demo" fallback={fb}>
                        <Route path="/view/InputImage/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/InputMultiText" Page={pg24} fallback={fb}>
                    <Route path="/view/InputMultiText/demo" fallback={fb}>
                        <Route path="/view/InputMultiText/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/InputText" Page={pg27} fallback={fb}>
                    <Route path="/view/InputText/demo" fallback={fb}>
                        <Route path="/view/InputText/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Label" Page={pg30} fallback={fb}>
                    <Route path="/view/Label/demo" fallback={fb}>
                        <Route path="/view/Label/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Options" Page={pg33} fallback={fb}>
                    <Route path="/view/Options/demo" fallback={fb}>
                        <Route path="/view/Options/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Panel" Page={pg36} fallback={fb}>
                    <Route path="/view/Panel/demo" fallback={fb}>
                        <Route path="/view/Panel/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Read" Page={pg39} fallback={fb}>
                    <Route path="/view/Read/demo" fallback={fb}>
                        <Route path="/view/Read/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Scroll" Page={pg42} fallback={fb}>
                    <Route path="/view/Scroll/demo" fallback={fb}>
                        <Route path="/view/Scroll/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Slider" Page={pg45} fallback={fb}>
                    <Route path="/view/Slider/demo" fallback={fb}>
                        <Route path="/view/Slider/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Spinner" Page={pg48} fallback={fb}>
                    <Route path="/view/Spinner/demo" fallback={fb}>
                        <Route path="/view/Spinner/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Strip" Page={pg51} fallback={fb}>
                    <Route path="/view/Strip/demo" fallback={fb}>
                        <Route path="/view/Strip/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Switch" Page={pg54} fallback={fb}>
                    <Route path="/view/Switch/demo" fallback={fb}>
                        <Route path="/view/Switch/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Tabs" Page={pg57} fallback={fb}>
                    <Route path="/view/Tabs/demo" fallback={fb}>
                        <Route path="/view/Tabs/demo/Default" fallback={fb} />
                    </Route>
                </Route>
                <Route path="/view/Touchable" Page={pg60} fallback={fb}>
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
