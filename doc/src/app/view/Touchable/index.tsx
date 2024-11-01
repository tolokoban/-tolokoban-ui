/**
 * 2023-09-12T14:09:54.608Z
 *
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import { ViewSpinner } from "@tolokoban/ui"

const LazyView = React.lazy(() => import("./Touchable"))

export default function DocTouchable() {
    return (
        <React.Suspense
            fallback={
                <ViewSpinner>
                    Loading <b>Touchable</b> documentation...
                </ViewSpinner>
            }
        >
            <LazyView />
        </React.Suspense>
    )
}
