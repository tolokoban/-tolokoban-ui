/**
 * 2023-08-07T11:20:17.513Z
 *
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import { ViewSpinner } from "@tolokoban/ui"

const LazyView = React.lazy(() => import("./CodeHighlighter"))

export default function DocCodeHighlighter() {
    return (
        <React.Suspense
            fallback={
                <ViewSpinner>
                    Loading <b>CodeHighlighter</b> documentation...
                </ViewSpinner>
            }
        >
            <LazyView />
        </React.Suspense>
    )
}
