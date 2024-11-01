/**
 * 2023-09-12T14:09:54.513Z
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
