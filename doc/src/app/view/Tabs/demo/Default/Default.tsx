import React from "react"
import {
    ViewTabs,
    ViewTab,
    ViewPanel,
    IconBrandBlender,
    ViewOptions,
    ColorName,
    ViewInputText,
    IconBrandLinux,
} from "@tolokoban/ui"
import { ViewColorInput } from "@/view/ColorInput"

export default function Demo() {
    const [orientation, setOrientation] = React.useState<
        "horizontal" | "vertical"
    >("horizontal")
    const [color, setColor] = React.useState<ColorName>("neutral-3")
    const [colorAccent, setColorAccent] = React.useState<ColorName>("primary-5")
    const [outline, setOutline] = React.useState("")
    const [highlight, setHighlight] = React.useState("")

    return (
        <ViewPanel
            display="flex"
            justifyContent="space-around"
            alignItems="flex-start"
            gap="L"
        >
            <ViewTabs
                orientation={orientation}
                minHeight="300px"
                color={color}
                colorAccent={colorAccent}
                outline={outline}
                highlight={highlight}
            >
                <ViewTab
                    label={
                        <>
                            <IconBrandBlender /> <div>Blender</div>
                        </>
                    }
                >
                    Voluptas dicta totam rerum dolorem id. Magnam autem ut
                    repellat aut facere beatae numquam. Aut minus at ratione non
                    suscipit. At hic sed quod.
                </ViewTab>
                <ViewTab label="Firefox">
                    Non deleniti labore et ad doloremque eius consectetur. Sit
                    qui eum sed inventore incidunt nihil qui nobis. Molestiae
                    provident sint sed amet nostrum.
                </ViewTab>
                <ViewTab label="Invisible Tab">
                    {false && (
                        <div>
                            Voluptas dicta totam rerum dolorem id. Magnam autem
                            ut repellat aut facere beatae numquam. Aut minus at
                            ratione non suscipit. At hic sed quod.
                        </div>
                    )}
                </ViewTab>
                <ViewTab
                    label={
                        <>
                            <IconBrandLinux />
                            <div>Linux</div>
                        </>
                    }
                >
                    Non deleniti labore et ad doloremque eius consectetur. Sit
                    qui eum sed inventore incidunt nihil qui nobis. Molestiae
                    provident sint sed amet nostrum.
                </ViewTab>
            </ViewTabs>
            <ViewPanel>
                <ViewOptions
                    value={orientation}
                    onChange={setOrientation}
                    label="orientation"
                >
                    <div key="horizontal">horizontal</div>
                    <div key="vertical">vertical</div>
                </ViewOptions>
                <ViewColorInput
                    value={color}
                    onChange={setColor}
                    label="color"
                />
                <ViewColorInput
                    value={colorAccent}
                    onChange={setColorAccent}
                    label="colorAccent"
                />
                <ViewInputText
                    value={outline}
                    onChange={setOutline}
                    label="outline"
                    placeholder="Ex.: 1px, .5em, ..."
                />
                <ViewInputText
                    value={highlight}
                    onChange={setHighlight}
                    label="highlight"
                    placeholder="Ex.: 1px, .5em, ..."
                />
            </ViewPanel>
        </ViewPanel>
    )
}
