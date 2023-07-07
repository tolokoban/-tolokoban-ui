/**
 * 2023-07-07T14:15:19.467Z
 *
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import { ViewSpinner } from "@tolokoban/ui"

const LazyView = React.lazy(() => import("./Button"))

export default function DocButton() {
    return (
        <React.Suspense
            fallback={
                <ViewSpinner>
                    Loading <b>Button</b> documentation...
                </ViewSpinner>
            }
        >
            <LazyView />
        </React.Suspense>
    )
}
