/**
 * build-react-routes
 *
 * WARNING! this file has been generated automatically.
 * Please do not edit it because it will probably be overwritten.
 *
 * If you find a bug or if you need an improvement, please fill an issue:
 * https://github.com/tolokoban/build-react-routes/issues
 */

import React from "react"

import { matchRoute, useRouteContext, ROUTES } from "./routes"
import { RouteMatch, RoutePath } from "./types"

export * from "./routes"
export * from "./types"


import Layout0 from "./layout"
import Layout6 from "./view/layout"
import NotFound0 from "./404"
const Page0 = React.lazy(() => import("./page"))
const Page1 = React.lazy(() => import("./api/page"))
const Page2 = React.lazy(() => import("./icons/page"))
const Page3 = React.lazy(() => import("./reference/page"))
const Page4 = React.lazy(() => import("./test/page"))
const Page5 = React.lazy(() => import("./theme/page"))
const Page6 = React.lazy(() => import("./view/page"))
const Page7 = React.lazy(() => import("./view/Button/page"))
const Page10 = React.lazy(() => import("./view/Chip/page"))
const Page13 = React.lazy(() => import("./view/CodeHighlighter/page"))
const Page16 = React.lazy(() => import("./view/Combo/page"))
const Page20 = React.lazy(() => import("./view/Dialog/page"))
const Page23 = React.lazy(() => import("./view/DragAndDrop/page"))
const Page26 = React.lazy(() => import("./view/FloatingButton/page"))
const Page29 = React.lazy(() => import("./view/InputColor/page"))
const Page32 = React.lazy(() => import("./view/InputFile/page"))
const Page35 = React.lazy(() => import("./view/InputImage/page"))
const Page38 = React.lazy(() => import("./view/InputMultiText/page"))
const Page41 = React.lazy(() => import("./view/InputNumber/page"))
const Page44 = React.lazy(() => import("./view/InputText/page"))
const Page47 = React.lazy(() => import("./view/Label/page"))
const Page50 = React.lazy(() => import("./view/Options/page"))
const Page53 = React.lazy(() => import("./view/OptionsMultiple/page"))
const Page56 = React.lazy(() => import("./view/Panel/page"))
const Page59 = React.lazy(() => import("./view/Progress/page"))
const Page62 = React.lazy(() => import("./view/Rating/page"))
const Page65 = React.lazy(() => import("./view/Read/page"))
const Page68 = React.lazy(() => import("./view/Scroll/page"))
const Page71 = React.lazy(() => import("./view/Slider/page"))
const Page74 = React.lazy(() => import("./view/Spinner/page"))
const Page77 = React.lazy(() => import("./view/Stack/page"))
const Page80 = React.lazy(() => import("./view/Strip/page"))
const Page83 = React.lazy(() => import("./view/Switch/page"))
const Page86 = React.lazy(() => import("./view/Tabs/page"))
const Page89 = React.lazy(() => import("./view/Tooltip/page"))
const Page92 = React.lazy(() => import("./view/Touchable/page"))

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
    const pg5 = Page5
    const ly6 = Layout6
    const pg6 = Page6
    const pg7 = Page7
    const pg10 = Page10
    const pg13 = Page13
    const pg16 = Page16
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
    const pg86 = Page86
    const pg89 = Page89
    const pg92 = Page92
    return (
        <Route path="/" Page={pg0} Layout={ly0} NotFound={NotFound0} fallback={fb} context={context}>
            <Route path="/api" Page={pg1} NotFound={NotFound0} fallback={fb} context={context}/>
            <Route path="/icons" Page={pg2} NotFound={NotFound0} fallback={fb} context={context}/>
            <Route path="/reference" Page={pg3} NotFound={NotFound0} fallback={fb} context={context}/>
            <Route path="/test" Page={pg4} NotFound={NotFound0} fallback={fb} context={context}/>
            <Route path="/theme" Page={pg5} NotFound={NotFound0} fallback={fb} context={context}/>
            <Route path="/view" Page={pg6} Layout={ly6} NotFound={NotFound0} fallback={fb} context={context}>
                <Route path="/view/Button" Page={pg7} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Button/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Button/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Chip" Page={pg10} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Chip/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Chip/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/CodeHighlighter" Page={pg13} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/CodeHighlighter/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/CodeHighlighter/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Combo" Page={pg16} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Combo/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Combo/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                        <Route path="/view/Combo/demo/Placement" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Dialog" Page={pg20} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Dialog/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Dialog/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/DragAndDrop" Page={pg23} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/DragAndDrop/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/DragAndDrop/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/FloatingButton" Page={pg26} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/FloatingButton/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/FloatingButton/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputColor" Page={pg29} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/InputColor/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/InputColor/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputFile" Page={pg32} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/InputFile/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/InputFile/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputImage" Page={pg35} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/InputImage/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/InputImage/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputMultiText" Page={pg38} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/InputMultiText/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/InputMultiText/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputNumber" Page={pg41} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/InputNumber/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/InputNumber/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/InputText" Page={pg44} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/InputText/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/InputText/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Label" Page={pg47} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Label/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Label/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Options" Page={pg50} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Options/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Options/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/OptionsMultiple" Page={pg53} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/OptionsMultiple/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/OptionsMultiple/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Panel" Page={pg56} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Panel/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Panel/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Progress" Page={pg59} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Progress/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Progress/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Rating" Page={pg62} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Rating/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Rating/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Read" Page={pg65} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Read/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Read/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Scroll" Page={pg68} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Scroll/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Scroll/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Slider" Page={pg71} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Slider/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Slider/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Spinner" Page={pg74} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Spinner/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Spinner/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Stack" Page={pg77} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Stack/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Stack/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Strip" Page={pg80} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Strip/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Strip/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Switch" Page={pg83} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Switch/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Switch/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Tabs" Page={pg86} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Tabs/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Tabs/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Tooltip" Page={pg89} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Tooltip/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Tooltip/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
                <Route path="/view/Touchable" Page={pg92} NotFound={NotFound0} fallback={fb} context={context}>
                    <Route path="/view/Touchable/demo" NotFound={NotFound0} fallback={fb} context={context}>
                        <Route path="/view/Touchable/demo/Default" NotFound={NotFound0} fallback={fb} context={context}/>
                    </Route>
                </Route>
            </Route>
        </Route>
    )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function intl<T extends PageComponent | ContainerComponent | React.ReactNode>(
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
    element?: React.ReactNode
    fallback?: React.ReactNode
    children?: React.ReactNode
    Page?: PageComponent
    Layout?: ContainerComponent
    Template?: ContainerComponent
    NotFound?: React.FC
    context: RouteMatch | null
}

function Route({
    path,
    fallback,
    children,
    Page,
    Layout,
    Template,
    NotFound,
    context,
}: RouteProps) {
    const match = context && matchRoute(context.path, ROUTES[path as RoutePath])

    if (!match) return null

    if (match.distance === 0) {
        if (!Page) {
            if (NotFound) return Layout ? (
                <Layout params={match.params}><NotFound /></Layout>
            ) : <NotFound />
            return null
        }

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

    if (NotFound && !hasMatchingChild(context.path, children)) {
        return Layout ? (
            <Layout params={match.params}><NotFound /></Layout>
        ) : (
            <NotFound />
        )
    }

    return Layout ? (
        <Layout params={match.params}>{children}</Layout>
    ) : (
        <>{children}</>
    )
}

function hasMatchingChild(path: string, children: React.ReactNode): boolean {
    return React.Children.toArray(children).some(child => {
        if (!React.isValidElement(child)) return false
        const childPath = (child.props as { path?: string }).path
        if (!childPath) return false
        return matchRoute(path, ROUTES[childPath as RoutePath]) !== null
    })
}
