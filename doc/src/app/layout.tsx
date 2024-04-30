import { version, Theme, ViewStrip } from "@tolokoban/ui"

import { isRouteEqualTo, makeGoto } from "./routes"

import Style from "./layout.module.css"
import { RoutePath } from "./types"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ViewStrip
            className={Style.layout}
            fullsize
            color="neutral-1"
            orientation="row"
            template="*1"
        >
            <aside>
                <button
                    className={classFor("/view")}
                    type="button"
                    onClick={makeGoto("/view")}
                >
                    Components
                </button>
                <button
                    className={classFor("/api")}
                    type="button"
                    onClick={makeGoto("/api")}
                >
                    API
                </button>
                <div>@tolokoban/ui v{version}</div>
            </aside>
            <main>{children}</main>
        </ViewStrip>
    )
}

function classFor(route: RoutePath) {
    return Theme.classNames.join(isRouteEqualTo(route) && Style.active)
}
