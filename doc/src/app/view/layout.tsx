/**
 * 2024-03-21T08:59:45.550Z
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
            <Link hash="/view/FloatingButton">FloatingButton</Link>
            <Link hash="/view/InputColor">InputColor</Link>
            <Link hash="/view/InputFile">InputFile</Link>
            <Link hash="/view/InputImage">InputImage</Link>
            <Link hash="/view/InputMultiText">InputMultiText</Link>
            <Link hash="/view/InputText">InputText</Link>
            <Link hash="/view/Label">Label</Link>
            <Link hash="/view/Options">Options</Link>
            <Link hash="/view/Panel">Panel</Link>
            <Link hash="/view/Read">Read</Link>
            <Link hash="/view/Scroll">Scroll</Link>
            <Link hash="/view/Slider">Slider</Link>
            <Link hash="/view/Spinner">Spinner</Link>
            <Link hash="/view/Strip">Strip</Link>
            <Link hash="/view/Switch">Switch</Link>
            <Link hash="/view/Tabs">Tabs</Link>
            <Link hash="/view/Touchable">Touchable</Link>
        </ViewPanel>
        <ViewPanel color="neutral-5" flex="1 1 auto">{children}</ViewPanel>
    </ViewPanel>
}