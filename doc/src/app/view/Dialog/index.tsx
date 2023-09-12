/**
 * 2023-09-12T14:09:54.520Z
 *
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import { ViewSpinner } from "@tolokoban/ui"

const LazyView = React.lazy(() => import("./Dialog"))

export default function DocDialog() {
    return (
        <React.Suspense
            fallback={
                <ViewSpinner>
                    Loading <b>Dialog</b> documentation...
                </ViewSpinner>
            }
        >
            <LazyView />
        </React.Suspense>
    )
}
