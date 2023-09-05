/**
 * 2023-08-07T11:20:17.810Z
 *
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import { ViewSpinner } from "@tolokoban/ui"

const LazyView = React.lazy(() => import("./Spinner"))

export default function DocSpinner() {
    return (
        <React.Suspense
            fallback={
                <ViewSpinner>
                    Loading <b>Spinner</b> documentation...
                </ViewSpinner>
            }
        >
            <LazyView />
        </React.Suspense>
    )
}
