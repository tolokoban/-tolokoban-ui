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
import Layout5 from "./view/layout"
const Page0 = React.lazy(() => import("./page"))
const Page1 = React.lazy(() => import("./api/page"))
const Page2 = React.lazy(() => import("./icons/page"))
const Page3 = React.lazy(() => import("./reference/page"))
const Page4 = React.lazy(() => import("./test/page"))
const Page5 = React.lazy(() => import("./view/page"))
const Page6 = React.lazy(() => import("./view/Button/page"))
const Page9 = React.lazy(() => import("./view/Chip/page"))
const Page12 = React.lazy(() => import("./view/CodeHighlighter/page"))
const Page15 = React.lazy(() => import("./view/Combo/page"))
const Page18 = React.lazy(() => import("./view/Dialog/page"))
const Page21 = React.lazy(() => import("./view/DragAndDrop/page"))
const Page24 = React.lazy(() => import("./view/FloatingButton/page"))
const Page27 = React.lazy(() => import("./view/InputColor/page"))
const Page30 = React.lazy(() => import("./view/InputFile/page"))
const Page33 = React.lazy(() => import("./view/InputImage/page"))
const Page36 = React.lazy(() => import("./view/InputMultiText/page"))
const Page39 = React.lazy(() => import("./view/InputNumber/page"))
const Page42 = React.lazy(() => import("./view/InputText/page"))
const Page45 = React.lazy(() => import("./view/Label/page"))
const Page48 = React.lazy(() => import("./view/Options/page"))
const Page51 = React.lazy(() => import("./view/OptionsMultiple/page"))
const Page54 = React.lazy(() => import("./view/Panel/page"))
const Page57 = React.lazy(() => import("./view/Progress/page"))
const Page60 = React.lazy(() => import("./view/Rating/page"))
const Page63 = React.lazy(() => import("./view/Read/page"))
const Page66 = React.lazy(() => import("./view/Scroll/page"))
const Page69 = React.lazy(() => import("./view/Slider/page"))
const Page72 = React.lazy(() => import("./view/Spinner/page"))
const Page75 = React.lazy(() => import("./view/Stack/page"))
const Page78 = React.lazy(() => import("./view/Strip/page"))
const Page81 = React.lazy(() => import("./view/Switch/page"))
const Page84 = React.lazy(() => import("./view/Tabs/page"))
const Page87 = React.lazy(() => import("./view/Tooltip/page"))
const Page90 = React.lazy(() => import("./view/Touchable/page"))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App({ lang }: { lang?: string }) {
    const context = useRouteContext()
    const fb = <div>Loading...</div>
    const ly0 = Layout0
    const pg0 = Page0
    const pg1 = Page1
    const pg2 = Page2
    const pg3 = Page3
    const pg4 = Page4
    const ly5 = Layout5
    const pg5 = Page5
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
    const pg63 = Page63
    const pg66 = Page66
    const pg69 = Page69
    const pg72 = Page72
    const pg75 = Page75
    const pg78 = Page78
    const pg81 = Page81
    const pg84 = Page84
    const pg87 = Page87
    const pg90 = Page90
    return (
        <Route path="/" Page={pg0} Layout={ly0} fallback={fb} context={context}>
            <Route path="/api" Page={pg1} fallback={fb} context={context}/>
            <Route path="/icons" Page={pg2} fallback={fb} context={context}/>
            <Route path="/reference" Page={pg3} fallback={fb} context={context}/>
            <Route path="/test" Page={pg4} fallback={fb} context={context}/>
            <Route path="/view" Page={pg5} Layout={ly5} fallback={fb} context={context}>
                <Route path="/view/Button" Page={pg6} fallback={fb} context={context}>
                    <Route path="/view/Button/demo" fallback={fb} context={context}>
                        <Route path="/view/Button/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Chip" Page={pg9} fallback={fb} context={context}>
                    <Route path="/view/Chip/demo" fallback={fb} context={context}>
                        <Route path="/view/Chip/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/CodeHighlighter" Page={pg12} fallback={fb} context={context}>
                    <Route path="/view/CodeHighlighter/demo" fallback={fb} context={context}>
                        <Route path="/view/CodeHighlighter/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Combo" Page={pg15} fallback={fb} context={context}>
                    <Route path="/view/Combo/demo" fallback={fb} context={context}>
                        <Route path="/view/Combo/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Dialog" Page={pg18} fallback={fb} context={context}>
                    <Route path="/view/Dialog/demo" fallback={fb} context={context}>
                        <Route path="/view/Dialog/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/DragAndDrop" Page={pg21} fallback={fb} context={context}>
                    <Route path="/view/DragAndDrop/demo" fallback={fb} context={context}>
                        <Route path="/view/DragAndDrop/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/FloatingButton" Page={pg24} fallback={fb} context={context}>
                    <Route path="/view/FloatingButton/demo" fallback={fb} context={context}>
                        <Route path="/view/FloatingButton/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputColor" Page={pg27} fallback={fb} context={context}>
                    <Route path="/view/InputColor/demo" fallback={fb} context={context}>
                        <Route path="/view/InputColor/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputFile" Page={pg30} fallback={fb} context={context}>
                    <Route path="/view/InputFile/demo" fallback={fb} context={context}>
                        <Route path="/view/InputFile/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputImage" Page={pg33} fallback={fb} context={context}>
                    <Route path="/view/InputImage/demo" fallback={fb} context={context}>
                        <Route path="/view/InputImage/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputMultiText" Page={pg36} fallback={fb} context={context}>
                    <Route path="/view/InputMultiText/demo" fallback={fb} context={context}>
                        <Route path="/view/InputMultiText/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputNumber" Page={pg39} fallback={fb} context={context}>
                    <Route path="/view/InputNumber/demo" fallback={fb} context={context}>
                        <Route path="/view/InputNumber/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputText" Page={pg42} fallback={fb} context={context}>
                    <Route path="/view/InputText/demo" fallback={fb} context={context}>
                        <Route path="/view/InputText/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Label" Page={pg45} fallback={fb} context={context}>
                    <Route path="/view/Label/demo" fallback={fb} context={context}>
                        <Route path="/view/Label/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Options" Page={pg48} fallback={fb} context={context}>
                    <Route path="/view/Options/demo" fallback={fb} context={context}>
                        <Route path="/view/Options/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/OptionsMultiple" Page={pg51} fallback={fb} context={context}>
                    <Route path="/view/OptionsMultiple/demo" fallback={fb} context={context}>
                        <Route path="/view/OptionsMultiple/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Panel" Page={pg54} fallback={fb} context={context}>
                    <Route path="/view/Panel/demo" fallback={fb} context={context}>
                        <Route path="/view/Panel/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Progress" Page={pg57} fallback={fb} context={context}>
                    <Route path="/view/Progress/demo" fallback={fb} context={context}>
                        <Route path="/view/Progress/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Rating" Page={pg60} fallback={fb} context={context}>
                    <Route path="/view/Rating/demo" fallback={fb} context={context}>
                        <Route path="/view/Rating/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Read" Page={pg63} fallback={fb} context={context}>
                    <Route path="/view/Read/demo" fallback={fb} context={context}>
                        <Route path="/view/Read/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Scroll" Page={pg66} fallback={fb} context={context}>
                    <Route path="/view/Scroll/demo" fallback={fb} context={context}>
                        <Route path="/view/Scroll/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Slider" Page={pg69} fallback={fb} context={context}>
                    <Route path="/view/Slider/demo" fallback={fb} context={context}>
                        <Route path="/view/Slider/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Spinner" Page={pg72} fallback={fb} context={context}>
                    <Route path="/view/Spinner/demo" fallback={fb} context={context}>
                        <Route path="/view/Spinner/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Stack" Page={pg75} fallback={fb} context={context}>
                    <Route path="/view/Stack/demo" fallback={fb} context={context}>
                        <Route path="/view/Stack/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Strip" Page={pg78} fallback={fb} context={context}>
                    <Route path="/view/Strip/demo" fallback={fb} context={context}>
                        <Route path="/view/Strip/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Switch" Page={pg81} fallback={fb} context={context}>
                    <Route path="/view/Switch/demo" fallback={fb} context={context}>
                        <Route path="/view/Switch/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Tabs" Page={pg84} fallback={fb} context={context}>
                    <Route path="/view/Tabs/demo" fallback={fb} context={context}>
                        <Route path="/view/Tabs/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Tooltip" Page={pg87} fallback={fb} context={context}>
                    <Route path="/view/Tooltip/demo" fallback={fb} context={context}>
                        <Route path="/view/Tooltip/demo/Default" fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Touchable" Page={pg90} fallback={fb} context={context}>
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
