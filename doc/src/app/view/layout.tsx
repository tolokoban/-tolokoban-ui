/**
 * 2023-09-12T14:15:16.247Z
 *
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import Link from "@/view/Link"

export default function ViewsLayout({ children }: { children: React.ReactNode }) {
    return <ViewPanel display="flex" alignItems="stretch" height="100%">
        <ViewPanel display="flex" flexDirection="column" alignItems="stretch" padding="M" overflow="auto" color="primary-2">
            <Link hash="/view/Button">Button</Link>
            <Link hash="/view/CodeHighlighter">CodeHighlighter</Link>
            <Link hash="/view/Dialog">Dialog</Link>
            <Link hash="/view/InputText">InputText</Link>
            <Link hash="/view/Label">Label</Link>
            <Link hash="/view/Options">Options</Link>
            <Link hash="/view/Panel">Panel</Link>
            <Link hash="/view/Read">Read</Link>
            <Link hash="/view/Scroll">Scroll</Link>
            <Link hash="/view/Slider">Slider</Link>
            <Link hash="/view/Spinner">Spinner</Link>
            <Link hash="/view/Tabs">Tabs</Link>
            <Link hash="/view/Touchable">Touchable</Link>
        </ViewPanel>
        <ViewPanel color="neutral-5" flex="1 1 auto">{children}</ViewPanel>
    </ViewPanel>
}