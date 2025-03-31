/**
 * 2025-03-31T12:46:14.753Z
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
            example={"import React from \"react\"\nimport {\n    IconChevronDoubleLeft,\n    IconChevronDoubleRight,\n    IconFly,\n    IconGear,\n    ViewButton,\n    ViewButtonProps,\n    ViewPanel,\n    ViewOptions,\n    ViewSwitch,\n} from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [variant, setVariant] =\n        React.useState<ViewButtonProps[\"variant\"]>(\"elevated\")\n    const [colorBase, setColorBase] = React.useState<\n        \"neutral\" | \"primary\" | \"secondary\" | \"tertiary\"\n    >(\"primary\")\n    const [colorLevel, setColorLevel] = React.useState<\n        \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\"\n    >(\"5\")\n    const [enabled, setEnabled] = React.useState(true)\n    const [waiting, setWaiting] = React.useState(false)\n    const [leftIcon, setLeftIcon] = React.useState(false)\n    const [rightIcon, setRightIcon] = React.useState(false)\n    return (\n        <div>\n            <ViewPanel display=\"flex\" flexDirection=\"column\" gap=\"S\">\n                <ViewOptions\n                    label=\"Button variant\"\n                    value={variant}\n                    onChange={setVariant}\n                >\n                    <div key=\"elevated\">elevated</div>\n                    <div key=\"filled\">filled</div>\n                    <div key=\"outlined\">outlined</div>\n                    <div key=\"text\">text</div>\n                </ViewOptions>\n                <ViewOptions\n                    label=\"Color base\"\n                    value={colorBase}\n                    onChange={setColorBase}\n                >\n                    <div key=\"neutral\">neutral</div>\n                    <div key=\"primary\">primary</div>\n                    <div key=\"secondary\">secondary</div>\n                    <div key=\"tertiary\">tertiary</div>\n                </ViewOptions>\n                <ViewOptions\n                    label=\"Color level\"\n                    value={colorLevel}\n                    onChange={setColorLevel}\n                >\n                    <div key=\"1\">1</div>\n                    <div key=\"2\">2</div>\n                    <div key=\"3\">3</div>\n                    <div key=\"4\">4</div>\n                    <div key=\"5\">5</div>\n                    <div key=\"6\">6</div>\n                    <div key=\"7\">7</div>\n                    <div key=\"8\">8</div>\n                    <div key=\"9\">9</div>\n                </ViewOptions>\n                <ViewPanel\n                    display=\"flex\"\n                    justifyContent=\"space-between\"\n                    flexWrap=\"wrap\"\n                >\n                    <ViewSwitch value={enabled} onChange={setEnabled}>\n                        Enabled\n                    </ViewSwitch>\n                    <ViewSwitch value={leftIcon} onChange={setLeftIcon}>\n                        Left icon\n                    </ViewSwitch>\n                    <ViewSwitch value={rightIcon} onChange={setRightIcon}>\n                        Right icon\n                    </ViewSwitch>\n                    <ViewSwitch value={waiting} onChange={setWaiting}>\n                        Waiting\n                    </ViewSwitch>\n                </ViewPanel>\n                <hr />\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\">\n                    <ViewButton\n                        variant={variant}\n                        enabled={enabled}\n                        waiting={waiting}\n                        icon={leftIcon ? IconChevronDoubleLeft : undefined}\n                        iconRight={\n                            rightIcon ? IconChevronDoubleRight : undefined\n                        }\n                        color={`${colorBase}-${colorLevel}`}\n                        onClick={() => alert(\"You dared... Unbelivable!!!\")}\n                    >\n                        Click me, if you dare!\n                    </ViewButton>\n                    <ViewButton\n                        variant={variant}\n                        enabled={enabled}\n                        waiting={waiting}\n                        icon={leftIcon ? IconChevronDoubleLeft : undefined}\n                        iconRight={\n                            rightIcon ? IconChevronDoubleRight : undefined\n                        }\n                        color={`${colorBase}-${colorLevel}`}\n                        onClick=\"#/view\"\n                    >\n                        Click me, if you dare!\n                    </ViewButton>\n                </ViewPanel>\n            </ViewPanel>\n        </div>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}