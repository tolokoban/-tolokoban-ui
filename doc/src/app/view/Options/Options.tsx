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

export default function OptionsDocumentation() {
    return <ViewDocumentation title='import { ViewOptions } from "@tolokoban/ui"'>
        <ViewDemo
            description={"# Default usage\n"}
            // eslint-disable-next-line no-template-curly-in-string
            example={"import React from \"react\"\nimport { ViewButton, ViewOptions, ViewPanel } from \"@tolokoban/ui\"\n\nexport default function Demo() {\n    const [animal, setAnimal] = React.useState(\"M\")\n    const [value, setValue] = React.useState(\"M\")\n    const [format, setFormat] = React.useState(\"A4\")\n    return (<>\n        <ViewPanel gap=\"M\" display=\"flex\" alignItems=\"flex-end\">\n            <ViewOptions\n                label=\"Select a size\"\n                value={value}\n                onChange={setValue}\n                color=\"secondary-4\"\n                colorSelection=\"primary-6\"\n            >\n                <div key=\"XS\">Extra Small</div>\n                <div key=\"S\">Small</div>\n                <div key=\"M\">Medium</div>\n                <div key=\"L\">Large</div>\n                <div key=\"XL\">Extra Large</div>\n            </ViewOptions>\n            <ViewOptions\n                value={format}\n                onChange={setFormat}\n            >\n                <div key=\"A5\">\n                    A5 - <small>148×210</small>\n                </div>\n                <div key=\"A4\">\n                    A4 - <small>210×297</small>\n                </div>\n                <div key=\"A3\">\n                    A3 - <small>297×240</small>\n                </div>\n            </ViewOptions>\n            <ViewButton>Submit</ViewButton>\n            <ViewOptions\n                value={animal}\n                onChange={setAnimal}\n            >\n<div key=\"Anaconda\">Anaconda</div>\n<div key=\"Brebis\">Brebis</div>\n<div key=\"Chacal\">Chacal</div>\n<div key=\"Dinosaure\">Dinosaure</div>\n<div key=\"Élephant\">Élephant</div>\n<div key=\"Faon\">Faon</div>\n<div key=\"Girafe\">Girafe</div>\n<div key=\"Héron\">Héron</div>\n<div key=\"Iguane\">Iguane</div>\n<div key=\"Jaguar\">Jaguar</div>\n<div key=\"Kangourou\">Kangourou</div>\n<div key=\"Lémurien\">Lémurien</div>\n<div key=\"Marsupilami\">Marsupilami</div>\n<div key=\"Narval\">Narval</div>\n<div key=\"Ornythorinx\">Ornythorinx</div>\n<div key=\"Panthère\">Panthère</div>\n<div key=\"Quezalcoatl\">Quezalcoatl</div>\n<div key=\"Rhinocéros\">Rhinocéros</div>\n<div key=\"Serpent à sonnette\">Serpent à sonnette</div>\n<div key=\"Tamarin\">Tamarin</div>\n<div key=\"Urubu\">Urubu</div>\n<div key=\"Vautour\">Vautour</div>\n<div key=\"Wapiti\">Wapiti</div>\n<div key=\"Xérus\">Xérus</div>\n<div key=\"Yack\">Yack</div>\n<div key=\"Zèbre\">Zèbre</div>\n            </ViewOptions>\n        </ViewPanel>\n        </>\n    )\n}\n"}
        >
            <DemoDefault />
        </ViewDemo>
    </ViewDocumentation>
}