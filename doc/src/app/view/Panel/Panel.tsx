/**
 * 2024-06-04T13:53:34.768Z
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

export default function PanelDocumentation() {
    return <ViewDocumentation title='import { ViewPanel } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewPanel } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <ViewPanel\n            color=\"secondary-1\"\n            padding=\"M\"\n            display=\"flex\"\n            justifyContent=\"space-around\"\n            alignItems=\"center\"\n            shadow={5}\n        >\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n                nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n                sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n            <p>\n                Scelerisque eu ultrices vitae auctor eu augue ut. Quis eleifend\n                quam adipiscing vitae. Cursus metus aliquam eleifend mi in nulla\n                posuere sollicitudin. Mauris nunc congue nisi vitae suscipit\n                tellus. Massa sed elementum tempus egestas sed sed risus\n                pretium. Pulvinar neque laoreet suspendisse interdum\n                consectetur. Eget mauris pharetra et ultrices neque ornare\n                aenean euismod elementum. Malesuada pellentesque elit eget\n                gravida cum sociis natoque penatibus et. Libero enim sed\n                faucibus turpis in. Et malesuada fames ac turpis egestas. Nibh\n                mauris cursus mattis molestie a iaculis at erat. Nisl purus in\n                mollis nunc sed id semper risus.\n            </p>\n        </ViewPanel>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}