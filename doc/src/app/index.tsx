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
import Layout3 from "./view/layout"
const Page0 = React.lazy(() => import("./page"))
const Page1 = React.lazy(() => import("./api/page"))
const Page2 = React.lazy(() => import("./test/page"))
const Page3 = React.lazy(() => import("./view/page"))
const Page4 = React.lazy(() => import("./view/Button/page"))
const Page7 = React.lazy(() => import("./view/Dialog/page"))
const Page10 = React.lazy(() => import("./view/FloatingButton/page"))
const Page13 = React.lazy(() => import("./view/InputColor/page"))
const Page16 = React.lazy(() => import("./view/InputFile/page"))
const Page19 = React.lazy(() => import("./view/InputImage/page"))
const Page22 = React.lazy(() => import("./view/InputMultiText/page"))
const Page25 = React.lazy(() => import("./view/InputNumber/page"))
const Page28 = React.lazy(() => import("./view/InputText/page"))
const Page31 = React.lazy(() => import("./view/Label/page"))
const Page34 = React.lazy(() => import("./view/Options/page"))
const Page37 = React.lazy(() => import("./view/Panel/page"))
const Page40 = React.lazy(() => import("./view/Read/page"))
const Page43 = React.lazy(() => import("./view/Scroll/page"))
const Page46 = React.lazy(() => import("./view/Slider/page"))
const Page49 = React.lazy(() => import("./view/Spinner/page"))
const Page52 = React.lazy(() => import("./view/Strip/page"))
const Page55 = React.lazy(() => import("./view/Switch/page"))
const Page58 = React.lazy(() => import("./view/Tabs/page"))
const Page61 = React.lazy(() => import("./view/Touchable/page"))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App({ lang }: { lang?: string }) {
    const context = useRouteContext()
    const fb = <div>Loading...</div>
    const ly0 = Layout0
    const pg0 = Page0
    const pg1 = Page1
    const pg2 = Page2
    const ly3 = Layout3
    const pg3 = Page3
    const pg4 = Page4
    const pg7 = Page7
    const pg10 = Page10
    const pg13 = Page13
    const pg16 = Page16
    const pg19 = Page19
    const pg22 = Page22
    const pg25 = Page25
    const pg28 = Page28
    const pg31 = Page31
    const pg34 = Page34
    const pg37 = Page37
    const pg40 = Page40
    const pg43 = Page43
    const pg46 = Page46
    const pg49 = Page49
    const pg52 = Page52
    const pg55 = Page55
    const pg58 = Page58
    const pg61 = Page61
    return (
        <Route path="/" Page={pg0} Layout={ly0} fallback={fb} context={context}>
            <Route path="/api" Page={pg1} fallback={fb} context={context}/>
            <Route path="/test" Page={pg2} fallback={fb} context={context}/>
            <Route path="/view" Page={pg3} Layout={ly3} fallback={fb} context={context}>
                <Route path="/view/Button" Page={pg4} fallback={fb} context={context}>
                    <Route path="/view/Button/demo" fallback={fb} context={context}>
                        <Route path="/view/Button/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Dialog" Page={pg7} fallback={fb} context={context}>
                    <Route path="/view/Dialog/demo" fallback={fb} context={context}>
                        <Route path="/view/Dialog/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/FloatingButton" Page={pg10} fallback={fb} context={context}>
                    <Route path="/view/FloatingButton/demo" fallback={fb} context={context}>
                        <Route path="/view/FloatingButton/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputColor" Page={pg13} fallback={fb} context={context}>
                    <Route path="/view/InputColor/demo" fallback={fb} context={context}>
                        <Route path="/view/InputColor/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputFile" Page={pg16} fallback={fb} context={context}>
                    <Route path="/view/InputFile/demo" fallback={fb} context={context}>
                        <Route path="/view/InputFile/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputImage" Page={pg19} fallback={fb} context={context}>
                    <Route path="/view/InputImage/demo" fallback={fb} context={context}>
                        <Route path="/view/InputImage/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputMultiText" Page={pg22} fallback={fb} context={context}>
                    <Route path="/view/InputMultiText/demo" fallback={fb} context={context}>
                        <Route path="/view/InputMultiText/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputNumber" Page={pg25} fallback={fb} context={context}>
                    <Route path="/view/InputNumber/demo" fallback={fb} context={context}>
                        <Route path="/view/InputNumber/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputText" Page={pg28} fallback={fb} context={context}>
                    <Route path="/view/InputText/demo" fallback={fb} context={context}>
                        <Route path="/view/InputText/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Label" Page={pg31} fallback={fb} context={context}>
                    <Route path="/view/Label/demo" fallback={fb} context={context}>
                        <Route path="/view/Label/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Options" Page={pg34} fallback={fb} context={context}>
                    <Route path="/view/Options/demo" fallback={fb} context={context}>
                        <Route path="/view/Options/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Panel" Page={pg37} fallback={fb} context={context}>
                    <Route path="/view/Panel/demo" fallback={fb} context={context}>
                        <Route path="/view/Panel/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Read" Page={pg40} fallback={fb} context={context}>
                    <Route path="/view/Read/demo" fallback={fb} context={context}>
                        <Route path="/view/Read/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Scroll" Page={pg43} fallback={fb} context={context}>
                    <Route path="/view/Scroll/demo" fallback={fb} context={context}>
                        <Route path="/view/Scroll/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Slider" Page={pg46} fallback={fb} context={context}>
                    <Route path="/view/Slider/demo" fallback={fb} context={context}>
                        <Route path="/view/Slider/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Spinner" Page={pg49} fallback={fb} context={context}>
                    <Route path="/view/Spinner/demo" fallback={fb} context={context}>
                        <Route path="/view/Spinner/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Strip" Page={pg52} fallback={fb} context={context}>
                    <Route path="/view/Strip/demo" fallback={fb} context={context}>
                        <Route path="/view/Strip/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Switch" Page={pg55} fallback={fb} context={context}>
                    <Route path="/view/Switch/demo" fallback={fb} context={context}>
                        <Route path="/view/Switch/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Tabs" Page={pg58} fallback={fb} context={context}>
                    <Route path="/view/Tabs/demo" fallback={fb} context={context}>
                        <Route path="/view/Tabs/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Touchable" Page={pg61} fallback={fb} context={context}>
                    <Route path="/view/Touchable/demo" fallback={fb} context={context}>
                        <Route path="/view/Touchable/demo/Default" fallback={fb} context={context}/>
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
    context: RouteMatch | null
}

function Route({
    path,
    fallback,
    children,
    Page,
    Layout,
    Template,
    context,
}: RouteProps) {
    const match = context && matchRoute(context.path, ROUTES[path as RoutePath])

    if (!match) return null

    if (match.distance === 0) {
        if (!Page) return null

        const element = Template ? (
            <Template params={match.params}>
                <Page params={match.params} />
            </Template>
        ) : (
            <Page params={match.params} />
        )
        if (Layout) {
            return (
                <Layout params={match.params}>
                    <React.Suspense fallback={fallback}>
                        {element}
                    </React.Suspense>
                </Layout>
            )
        }
        return <React.Suspense fallback={fallback}>{element}</React.Suspense>
    }
    return Layout ? (
        <Layout params={match.params}>{children}</Layout>
    ) : (
        <>{children}</>
    )
}
