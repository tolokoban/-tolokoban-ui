/**
 * 2025-08-27T15:05:06.261Z
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

export default function FloatingButtonDocumentation() {
    return <ViewDocumentation title='import { ViewFloatingButton } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport {\n    IconChevronDown,\n    IconFly,\n    IconGear,\n    IconPassword,\n    ViewFloatingButton,\n    ViewPanel,\n} from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    return (\n        <ViewPanel\n            display=\"flex\"\n            justifyContent=\"space-around\"\n            alignItems=\"center\"\n            flexWrap=\"wrap\"\n            gap=\"M\"\n        >\n            <ViewFloatingButton color=\"primary-1\" icon={IconChevronDown} />\n            <ViewFloatingButton color=\"primary-3\" icon={IconChevronDown} />\n            <ViewFloatingButton color=\"primary-5\" icon={IconChevronDown} />\n            <ViewFloatingButton color=\"primary-7\" icon={IconChevronDown} />\n            <ViewFloatingButton color=\"primary-9\" icon={IconChevronDown} />\n            <ViewFloatingButton\n                enabled={false}\n                color=\"primary-1\"\n                icon={IconChevronDown}\n            />\n            <ViewFloatingButton\n                enabled={false}\n                color=\"primary-3\"\n                icon={IconChevronDown}\n            />\n            <ViewFloatingButton\n                enabled={false}\n                color=\"primary-5\"\n                icon={IconChevronDown}\n            />\n            <ViewFloatingButton\n                enabled={false}\n                color=\"primary-7\"\n                icon={IconChevronDown}\n            />\n            <ViewFloatingButton\n                enabled={false}\n                color=\"primary-9\"\n                icon={IconChevronDown}\n            />\n            <ViewFloatingButton icon={IconFly} color=\"secondary-5\" />\n            <ViewFloatingButton icon={IconGear} animate />\n            <ViewFloatingButton size=\"XS\" icon={IconPassword} />\n            <ViewFloatingButton size=\"S\" icon={IconPassword} />\n            <ViewFloatingButton size=\"M\" icon={IconPassword} />\n            <ViewFloatingButton size=\"L\" icon={IconPassword} />\n            <ViewFloatingButton size=\"XL\" icon={IconPassword} />\n        </ViewPanel>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}