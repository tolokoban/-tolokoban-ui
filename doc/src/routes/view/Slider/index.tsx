/**
 * 2023-07-07T14:15:19.625Z
 *
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import { ViewSpinner } from "@tolokoban/ui"

const LazyView = React.lazy(() => import("./Slider"))

export default function DocSlider() {
    return (
        <React.Suspense
            fallback={
                <ViewSpinner>
                    Loading <b>Slider</b> documentation...
                </ViewSpinner>
            }
        >
            <LazyView />
        </React.Suspense>
    )
}
