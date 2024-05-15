/**
 * 2024-05-15T11:55:44.745Z
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

export default function ButtonDocumentation() {
    return <ViewDocumentation title='import { ViewButton } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport {\n    IconChevronDoubleLeft,\n    IconChevronDoubleRight,\n    IconFly,\n    IconGear,\n    ViewButton,\n    ViewPanel,\n} from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <div>\n            <ViewPanel\n                display=\"grid\"\n                gridTemplateColumns=\"auto repeat(4, 1fr)\"\n                placeItems=\"center stretch\"\n                gap=\"M\"\n            >\n                <div>Enabled</div>\n                <ViewButton variant=\"elevated\">Elevated</ViewButton>\n                <ViewButton variant=\"filled\">Filled</ViewButton>\n                <ViewButton variant=\"outlined\">Outlined</ViewButton>\n                <ViewButton variant=\"text\">Text</ViewButton>\n                <div>Enabled</div>\n                <ViewButton color=\"primary-5\" variant=\"elevated\">\n                    Elevated\n                </ViewButton>\n                <ViewButton color=\"primary-5\" variant=\"filled\">\n                    Filled\n                </ViewButton>\n                <ViewButton color=\"primary-5\" variant=\"outlined\">\n                    Outlined\n                </ViewButton>\n                <ViewButton color=\"primary-5\" variant=\"text\">\n                    Text\n                </ViewButton>\n                <div>Disabled</div>\n                <ViewButton\n                    color=\"secondary-5\"\n                    enabled={false}\n                    variant=\"elevated\"\n                >\n                    Elevated\n                </ViewButton>\n                <ViewButton\n                    color=\"secondary-5\"\n                    enabled={false}\n                    variant=\"filled\"\n                >\n                    Filled\n                </ViewButton>\n                <ViewButton\n                    color=\"secondary-5\"\n                    enabled={false}\n                    variant=\"outlined\"\n                >\n                    Outlined\n                </ViewButton>\n                <ViewButton color=\"secondary-5\" enabled={false} variant=\"text\">\n                    Text\n                </ViewButton>\n            </ViewPanel>\n            <ViewPanel padding=\"M\" display=\"flex\" flexWrap=\"wrap\" gap=\"S\">\n                <ViewButton icon={IconGear}>With icon</ViewButton>\n                <ViewButton iconRight={IconFly}>Icon to the right</ViewButton>\n                <ViewButton\n                    icon={IconChevronDoubleLeft}\n                    iconRight={IconChevronDoubleRight}\n                >\n                    Two icons\n                </ViewButton>\n                <ViewButton waiting>Waiting...</ViewButton>\n            </ViewPanel>\n        </div>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}