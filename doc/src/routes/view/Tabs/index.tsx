/**
 * 2023-07-07T14:15:19.637Z
 *
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import { ViewSpinner } from "@tolokoban/ui"

const LazyView = React.lazy(() => import("./Tabs"))

export default function DocTabs() {
    return (
        <React.Suspense
            fallback={
                <ViewSpinner>
                    Loading <b>Tabs</b> documentation...
                </ViewSpinner>
            }
        >
            <LazyView />
        </React.Suspense>
    )
}
