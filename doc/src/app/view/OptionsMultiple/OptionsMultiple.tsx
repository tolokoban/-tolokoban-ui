/**
 * 2025-11-10T12:51:17.944Z
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

export default function OptionsMultipleDocumentation() {
    return <ViewDocumentation title='import { ViewOptionsMultiple } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport {\n    ViewOptionsMultiple,\n    IconBook,\n    IconBug,\n    IconCurve,\n    IconCut,\n    IconDelete,\n    ViewPanel,\n    GenericIconProps,\n} from \"@tolokoban/ui\"\n\nconst ICONS: Record<string, React.FC<GenericIconProps>> = {\n    Book: IconBook,\n    Bug: IconBug,\n    Curve: IconCurve,\n    Cut: IconCut,\n    Delete: IconDelete,\n}\n\nexport default function Demo() {\n    const [values, setValues] = React.useState<string[]>([])\n    return (\n        <div>\n            <ViewOptionsMultiple\n                value={values}\n                onChange={setValues}\n                label=\"Special icons styles:\"\n            >\n                {Object.keys(ICONS).map((key) => {\n                    const Icon = ICONS[key]\n                    return <Icon key={key} />\n                })}\n            </ViewOptionsMultiple>\n            <ViewPanel\n                display=\"flex\"\n                justifyContent=\"space-around\"\n                padding=\"XL\"\n                fontSize=\"500%\"\n            >\n                {Object.keys(ICONS).map((key) => {\n                    const Icon = ICONS[key]\n                    return (\n                        <Icon\n                            key={key}\n                            type={values.includes(key) ? \"bold\" : \"filled\"}\n                        />\n                    )\n                })}\n            </ViewPanel>\n            <ViewPanel\n                display=\"flex\"\n                justifyContent=\"space-around\"\n                padding=\"XL\"\n                fontSize=\"500%\"\n            >\n                {Object.keys(ICONS).map((key) => {\n                    const Icon = ICONS[key]\n                    return (\n                        <Icon\n                            key={key}\n                            type={values.includes(key) ? \"dual\" : \"filled\"}\n                        />\n                    )\n                })}\n            </ViewPanel>\n        </div>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}