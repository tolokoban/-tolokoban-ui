import { codeLinesToString } from "../utils/code.js"
import { absPath, mkdir, saveText } from "../utils/fs.js"
import { getHeader } from "./header.js"

export async function writeViewsRoutes(viewShortNames: string[]) {
    const content = codeLinesToString([
        getHeader(),
        `import React from "react"`,
        `import { ViewPanel } from "@tolokoban/ui"`,
        `import Link from "@/view/Link"`,
        "",
        "export default function ViewsLayout({ children }: { children: React.ReactNode }) {",
        [
            `return <ViewPanel display="flex" alignItems="stretch" height="100%">`,
            [
                `<ViewPanel display="flex" flexDirection="column" alignItems="stretch" padding="M" overflow="auto" color="primary-2">`,
                viewShortNames.map(
                    (name) => `<Link hash="/view/${name}">${name}</Link>`
                ),
                "</ViewPanel>",
                `<ViewPanel color="neutral-5" flex="1 1 auto">{children}</ViewPanel>`,
            ],
            "</ViewPanel>",
        ],
        "}",
    ])
    await saveText(absPath("doc/src/app/view/layout.tsx"), content)
}
