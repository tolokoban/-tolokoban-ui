/**
 * 2025-07-18T12:38:15.372Z
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

export default function TooltipDocumentation() {
    return <ViewDocumentation title='import { ViewTooltip } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport {\n    customizeView,\n    IconArrowDown,\n    IconArrowLeft,\n    IconArrowRight,\n    ViewInputColor,\n    ViewInputText,\n    ViewPanel,\n    ViewSpinner,\n    ViewTooltip,\n} from \"@tolokoban/ui\"\n\nconst Flex = customizeView(ViewPanel, {\n    display: \"flex\",\n    justifyContent: \"space-around\",\n    alignItems: \"center\",\n})\n\nexport default function Demo() {\n    const [name, setName] = React.useState(\"\")\n    const [color, setColor] = React.useState(\"#f91\")\n    return (\n        <Flex>\n            <Flex>\n                <ViewTooltip content=\"attach = top-right\" attach=\"top-right\">\n                    <IconArrowLeft size=\"L\" />\n                </ViewTooltip>\n                <ViewTooltip content=\"attach = top\" attach=\"top\" shadow={5}>\n                    <IconArrowDown size=\"L\" />\n                </ViewTooltip>\n                <ViewTooltip content=\"attach = top-left\" attach=\"top-left\">\n                    <IconArrowRight size=\"L\" />\n                </ViewTooltip>\n            </Flex>\n            <ViewTooltip content=\"top-right\" attach=\"top-right\">\n                <ViewTooltip content=\"top-left\" attach=\"top-left\">\n                    <ViewSpinner\n                        orientation=\"vertical\"\n                        color=\"tertiary-5\"\n                        shadow={1}\n                    >\n                        All around!\n                    </ViewSpinner>\n                </ViewTooltip>\n            </ViewTooltip>\n            <ViewTooltip\n                content=\"Please enter your name\"\n                color=\"secondary-5\"\n                attach=\"top-left\"\n            >\n                <ViewInputText\n                    value={name}\n                    onChange={setName}\n                    label=\"What's your name?\"\n                />\n            </ViewTooltip>\n            <ViewTooltip\n                content={\n                    <div>\n                        Select your favorite{\" \"}\n                        <b\n                            style={{\n                                borderBottom: `4px solid ${color}`,\n                            }}\n                        >\n                            color\n                        </b>\n                        !\n                    </div>\n                }\n            >\n                <ViewInputColor\n                    value={color}\n                    onChange={setColor}\n                    label=\"Color of the game\"\n                />\n            </ViewTooltip>\n        </Flex>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}