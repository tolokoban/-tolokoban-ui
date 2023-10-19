/**
 * 2023-10-16T13:46:37.432Z
 *
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import ViewDocumentation from "@/view/ViewDocumentation"
import ViewDemo from "@/view/ViewDemo"
import DemoDefault from "./demo/Default"

export default function StripDocumentation() {
    return <ViewDocumentation title='import { ViewStrip } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewPanel, ViewStrip } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <ViewStrip maxHeight=\"600px\" width=\"480px\">\n            <ViewPanel color=\"primary-2\">This is the header</ViewPanel>\n            <ViewPanel color=\"neutral-1\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n                    do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                    ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    Duis aute irure dolor in reprehenderit in voluptate velit\n                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n                    occaecat cupidatat non proident, sunt in culpa qui officia\n                    deserunt mollit anim id est laborum.\n                </p>\n                <p>\n                    Scelerisque eu ultrices vitae auctor eu augue ut. Quis\n                    eleifend quam adipiscing vitae. Cursus metus aliquam\n                    eleifend mi in nulla posuere sollicitudin. Mauris nunc\n                    congue nisi vitae suscipit tellus. Massa sed elementum\n                    tempus egestas sed sed risus pretium. Pulvinar neque laoreet\n                    suspendisse interdum consectetur. Eget mauris pharetra et\n                    ultrices neque ornare aenean euismod elementum. Malesuada\n                    pellentesque elit eget gravida cum sociis natoque penatibus\n                    et. Libero enim sed faucibus turpis in. Et malesuada fames\n                    ac turpis egestas. Nibh mauris cursus mattis molestie a\n                    iaculis at erat. Nisl purus in mollis nunc sed id semper\n                    risus.\n                </p>\n            </ViewPanel>\n        </ViewStrip>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}