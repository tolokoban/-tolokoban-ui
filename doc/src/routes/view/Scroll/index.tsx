/**
 * 2023-07-07T14:15:19.612Z
 *
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import { ViewSpinner } from "@tolokoban/ui"

const LazyView = React.lazy(() => import("./Scroll"))

export default function DocScroll() {
    return (
        <React.Suspense
            fallback={
                <ViewSpinner>
                    Loading <b>Scroll</b> documentation...
                </ViewSpinner>
            }
        >
            <LazyView />
        </React.Suspense>
    )
}
