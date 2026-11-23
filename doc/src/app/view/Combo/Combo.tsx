/**
 * This file has been automatically generated with:
 * npm run generate
 * 
 * Please do not modify it manually.
 */
import React from "react"
import ViewDocumentation from "@/view/ViewDocumentation"
import ViewDemo from "@/view/ViewDemo"
import DemoDefault from "./demo/Default"
import DemoPlacement from "./demo/Placement"

export default function ComboDocumentation() {
    return <ViewDocumentation title='import { ViewCombo } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewCombo } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [animal, setAnimal] = React.useState(\"fox\")\n    return (\n        <ViewCombo\n            label=\"Select your favourite animal\"\n            value={animal}\n            onChange={setAnimal}\n        >\n            <div key=\"monkey\">🐵 - Monkey</div>\n            <div key=\"dog\">🐶 - Dog</div>\n            <div key=\"fox\">🦊 - Fox</div>\n            <div key=\"lion\">🦁 - Lion</div>\n            <div key=\"elephant\">𓃰 - Elephant</div>\n            <div key=\"frog\">🐸 - Frog</div>\n            <div key=\"crab\">🦀 - Crab</div>\n            <div key=\"peacook\">🦚 - Peacook</div>\n            <div key=\"tiger\">🐯 - Tiger</div>\n            <div key=\"squid\">🦑 - Squid</div>\n            <div key=\"shark\">🦈 - Shark</div>\n            <div key=\"koala\">🐨 - Koala</div>\n            <div key=\"beaver\">🦫 - Beaver</div>\n        </ViewCombo>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
        <ViewDemo
            description={"# Same height and smart placement\n\n`<ViewCombo>`, `<ViewInputText>` and `<ViewButton>` share the same height,\ngiven by the CSS custom property `--theme-input-height`.\n\nTo align fields with and without a `label` in the same row, use\n`alignItems=\"flex-end\"` (not `\"center\"`): the label sits above the field,\nso it shifts the center of the box, but not its bottom.\n\nThe list opens below the combo. If there is not enough room, it opens above it,\nthen to the left side (bottom, then top).\n\nKeyboard: `↓`/`↑` to move, `Home`/`End`, `PageUp`/`PageDown`,\n`Enter` or `Space` to select, `Escape` to cancel, or type the first letters of an item.\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport {\n    ViewButton,\n    ViewCombo,\n    ViewInputText,\n    ViewPanel,\n} from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [animal, setAnimal] = React.useState(\"fox\")\n    const [name, setName] = React.useState(\"Foxy\")\n    return (\n        <ViewPanel display=\"flex\" flexDirection=\"column\" gap=\"L\">\n            <ViewPanel display=\"flex\" flexDirection=\"row\" alignItems=\"flex-end\" gap=\"S\">\n                <ViewInputText value={name} onChange={setName} />\n                <ViewCombo value={animal} onChange={setAnimal} label=\"Hello world!\">\n                    {makeItems()}\n                </ViewCombo>\n                <ViewButton>Save</ViewButton>\n            </ViewPanel>\n            <ViewPanel\n                display=\"flex\"\n                flexDirection=\"row\"\n                justifyContent=\"space-between\"\n            >\n                <ViewCombo value={animal} onChange={setAnimal}>\n                    {makeItems()}\n                </ViewCombo>\n                <ViewCombo value={animal} onChange={setAnimal}>\n                    {makeItems()}\n                </ViewCombo>\n            </ViewPanel>\n        </ViewPanel>\n    )\n}\n\nfunction makeItems() {\n    return [\n        <div key=\"monkey\">🐵 - Monkey</div>,\n        <div key=\"dog\">🐶 - Dog</div>,\n        <div key=\"fox\">🦊 - Fox</div>,\n        <div key=\"lion\">🦁 - Lion</div>,\n        <div key=\"frog\">🐸 - Frog</div>,\n        <div key=\"crab\">🦀 - Crab, the one with a very long name</div>,\n        <div key=\"tiger\">🐯 - Tiger</div>,\n        <div key=\"koala\">🐨 - Koala</div>,\n    ]\n}\n"}
        >
            <DemoPlacement />
        </ViewDemo>
    </ViewDocumentation>
}