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
import Layout4 from "./view/layout"
const Page0 = React.lazy(() => import("./page"))
const Page1 = React.lazy(() => import("./api/page"))
const Page2 = React.lazy(() => import("./icons/page"))
const Page3 = React.lazy(() => import("./test/page"))
const Page4 = React.lazy(() => import("./view/page"))
const Page5 = React.lazy(() => import("./view/Button/page"))
const Page8 = React.lazy(() => import("./view/Chip/page"))
const Page11 = React.lazy(() => import("./view/Combo/page"))
const Page14 = React.lazy(() => import("./view/Dialog/page"))
const Page17 = React.lazy(() => import("./view/DragAndDrop/page"))
const Page20 = React.lazy(() => import("./view/FloatingButton/page"))
const Page23 = React.lazy(() => import("./view/InputColor/page"))
const Page26 = React.lazy(() => import("./view/InputFile/page"))
const Page29 = React.lazy(() => import("./view/InputImage/page"))
const Page32 = React.lazy(() => import("./view/InputMultiText/page"))
const Page35 = React.lazy(() => import("./view/InputNumber/page"))
const Page38 = React.lazy(() => import("./view/InputText/page"))
const Page41 = React.lazy(() => import("./view/Label/page"))
const Page44 = React.lazy(() => import("./view/Options/page"))
const Page47 = React.lazy(() => import("./view/OptionsMultiple/page"))
const Page50 = React.lazy(() => import("./view/Panel/page"))
const Page53 = React.lazy(() => import("./view/Progress/page"))
const Page56 = React.lazy(() => import("./view/Rating/page"))
const Page59 = React.lazy(() => import("./view/Read/page"))
const Page62 = React.lazy(() => import("./view/Scroll/page"))
const Page65 = React.lazy(() => import("./view/Slider/page"))
const Page68 = React.lazy(() => import("./view/Spinner/page"))
const Page71 = React.lazy(() => import("./view/Stack/page"))
const Page74 = React.lazy(() => import("./view/Strip/page"))
const Page77 = React.lazy(() => import("./view/Switch/page"))
const Page80 = React.lazy(() => import("./view/Tabs/page"))
const Page83 = React.lazy(() => import("./view/Touchable/page"))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App({ lang }: { lang?: string }) {
    const context = useRouteContext()
    const fb = <div>Loading...</div>
    const ly0 = Layout0
    const pg0 = Page0
    const pg1 = Page1
    const pg2 = Page2
    const pg3 = Page3
    const ly4 = Layout4
    const pg4 = Page4
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
    const pg62 = Page62
    const pg65 = Page65
    const pg68 = Page68
    const pg71 = Page71
    const pg74 = Page74
    const pg77 = Page77
    const pg80 = Page80
    const pg83 = Page83
    return (
        <Route path="/" Page={pg0} Layout={ly0} fallback={fb} context={context}>
            <Route path="/api" Page={pg1} fallback={fb} context={context}/>
            <Route path="/icons" Page={pg2} fallback={fb} context={context}/>
            <Route path="/test" Page={pg3} fallback={fb} context={context}/>
            <Route path="/view" Page={pg4} Layout={ly4} fallback={fb} context={context}>
                <Route path="/view/Button" Page={pg5} fallback={fb} context={context}>
                    <Route path="/view/Button/demo" fallback={fb} context={context}>
                        <Route path="/view/Button/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Chip" Page={pg8} fallback={fb} context={context}>
                    <Route path="/view/Chip/demo" fallback={fb} context={context}>
                        <Route path="/view/Chip/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Combo" Page={pg11} fallback={fb} context={context}>
                    <Route path="/view/Combo/demo" fallback={fb} context={context}>
                        <Route path="/view/Combo/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Dialog" Page={pg14} fallback={fb} context={context}>
                    <Route path="/view/Dialog/demo" fallback={fb} context={context}>
                        <Route path="/view/Dialog/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/DragAndDrop" Page={pg17} fallback={fb} context={context}>
                    <Route path="/view/DragAndDrop/demo" fallback={fb} context={context}>
                        <Route path="/view/DragAndDrop/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/FloatingButton" Page={pg20} fallback={fb} context={context}>
                    <Route path="/view/FloatingButton/demo" fallback={fb} context={context}>
                        <Route path="/view/FloatingButton/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputColor" Page={pg23} fallback={fb} context={context}>
                    <Route path="/view/InputColor/demo" fallback={fb} context={context}>
                        <Route path="/view/InputColor/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputFile" Page={pg26} fallback={fb} context={context}>
                    <Route path="/view/InputFile/demo" fallback={fb} context={context}>
                        <Route path="/view/InputFile/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputImage" Page={pg29} fallback={fb} context={context}>
                    <Route path="/view/InputImage/demo" fallback={fb} context={context}>
                        <Route path="/view/InputImage/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputMultiText" Page={pg32} fallback={fb} context={context}>
                    <Route path="/view/InputMultiText/demo" fallback={fb} context={context}>
                        <Route path="/view/InputMultiText/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputNumber" Page={pg35} fallback={fb} context={context}>
                    <Route path="/view/InputNumber/demo" fallback={fb} context={context}>
                        <Route path="/view/InputNumber/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputText" Page={pg38} fallback={fb} context={context}>
                    <Route path="/view/InputText/demo" fallback={fb} context={context}>
                        <Route path="/view/InputText/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Label" Page={pg41} fallback={fb} context={context}>
                    <Route path="/view/Label/demo" fallback={fb} context={context}>
                        <Route path="/view/Label/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Options" Page={pg44} fallback={fb} context={context}>
                    <Route path="/view/Options/demo" fallback={fb} context={context}>
                        <Route path="/view/Options/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/OptionsMultiple" Page={pg47} fallback={fb} context={context}>
                    <Route path="/view/OptionsMultiple/demo" fallback={fb} context={context}>
                        <Route path="/view/OptionsMultiple/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Panel" Page={pg50} fallback={fb} context={context}>
                    <Route path="/view/Panel/demo" fallback={fb} context={context}>
                        <Route path="/view/Panel/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Progress" Page={pg53} fallback={fb} context={context}>
                    <Route path="/view/Progress/demo" fallback={fb} context={context}>
                        <Route path="/view/Progress/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Rating" Page={pg56} fallback={fb} context={context}>
                    <Route path="/view/Rating/demo" fallback={fb} context={context}>
                        <Route path="/view/Rating/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Read" Page={pg59} fallback={fb} context={context}>
                    <Route path="/view/Read/demo" fallback={fb} context={context}>
                        <Route path="/view/Read/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Scroll" Page={pg62} fallback={fb} context={context}>
                    <Route path="/view/Scroll/demo" fallback={fb} context={context}>
                        <Route path="/view/Scroll/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Slider" Page={pg65} fallback={fb} context={context}>
                    <Route path="/view/Slider/demo" fallback={fb} context={context}>
                        <Route path="/view/Slider/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Spinner" Page={pg68} fallback={fb} context={context}>
                    <Route path="/view/Spinner/demo" fallback={fb} context={context}>
                        <Route path="/view/Spinner/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Stack" Page={pg71} fallback={fb} context={context}>
                    <Route path="/view/Stack/demo" fallback={fb} context={context}>
                        <Route path="/view/Stack/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Strip" Page={pg74} fallback={fb} context={context}>
                    <Route path="/view/Strip/demo" fallback={fb} context={context}>
                        <Route path="/view/Strip/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Switch" Page={pg77} fallback={fb} context={context}>
                    <Route path="/view/Switch/demo" fallback={fb} context={context}>
                        <Route path="/view/Switch/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Tabs" Page={pg80} fallback={fb} context={context}>
                    <Route path="/view/Tabs/demo" fallback={fb} context={context}>
                        <Route path="/view/Tabs/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Touchable" Page={pg83} fallback={fb} context={context}>
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
