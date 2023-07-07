/**
 * 2023-07-07T14:15:19.537Z
 *
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import { ViewSpinner } from "@tolokoban/ui"

const LazyView = React.lazy(() => import("./Options"))

export default function DocOptions() {
    return (
        <React.Suspense
            fallback={
                <ViewSpinner>
                    Loading <b>Options</b> documentation...
                </ViewSpinner>
            }
        >
            <LazyView />
        </React.Suspense>
    )
}
