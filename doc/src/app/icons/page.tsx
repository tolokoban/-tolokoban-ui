import React from "react"
import {
    ViewButton,
    ViewGenericIcon,
    ViewInputText,
    ViewOptions,
    ViewPanel,
    ViewTooltip,
    ViewTouchable,
} from "@tolokoban/ui"

import { Highlight } from "@/view/Highlight"
import { IconsMap } from "@/icons"

import Styles from "./page.module.css"

export default function PageIcons() {
    const [value, setValue] = React.useState(
        "M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z"
    )
    const [type, setType] = React.useState<
        "filled" | "bold" | "dual" | "outlined"
    >("filled")
    const [filter, setFilter] = React.useState("")
    const names = React.useMemo(() => {
        const text = filter.trim().toLowerCase()
        if (text.length === 0) return Object.keys(IconsMap)

        return Object.keys(IconsMap).filter((name) =>
            name.toLowerCase().includes(text)
        )
    }, [filter])
    const handleIconClick = (id: string): void => {
        const div = document.getElementById(id)
        if (!div) return

        const path = div.querySelector("svg path")
        setValue(path?.getAttribute("d") ?? "")
    }

    return (
        <ViewPanel fullsize overflow="auto">
            <h1>List of available SVG icons</h1>
            <ViewInputText
                value={filter}
                onChange={setFilter}
                label="Search by name:"
            />
            <ViewPanel margin={["M", 0]}>
                <ViewOptions
                    value={type}
                    onChange={setType}
                    label="Icons' type"
                >
                    <div key="filled">filled</div>
                    <div key="bold">bold</div>
                    <div key="dual">dual</div>
                    <div key="outlined">outlined</div>
                </ViewOptions>
            </ViewPanel>
            <ViewPanel
                display="flex"
                gap="XS"
                justifyContent="flex-start"
                flexWrap="wrap"
            >
                {names.map((name) => {
                    const Icon = IconsMap[name]
                    if (!Icon) return null

                    const id = `Icon/${name}`
                    return (
                        <ViewTouchable
                            key={name}
                            onClick={() => handleIconClick(id)}
                        >
                            <ViewPanel
                                id={id}
                                key={name}
                                shadow={2}
                                className={Styles.icon}
                                tooltip={`import { Icon${name} } from "@tolokoban/ui"`}
                                color="primary-9"
                                display="grid"
                                placeItems="center"
                                padding="M"
                            >
                                <Icon size="XL" type={type} />
                                <ViewPanel padding="S" color="primary-3">
                                    <small>{name}</small>
                                </ViewPanel>
                            </ViewPanel>
                        </ViewTouchable>
                    )
                })}
            </ViewPanel>
            <ViewPanel>
                <p>
                    Most of the icons come from this website:{" "}
                    <ViewButton
                        onClick="https://pictogrammers.com/library/mdi/"
                        variant="text"
                        color="secondary-5"
                    >
                        Pictogrammer
                    </ViewButton>
                    .
                </p>
            </ViewPanel>
            <hr />
            <ViewPanel
                display="grid"
                gap="S"
                gridTemplateColumns="1fr 2fr 2fr"
                gridTemplateRows="auto auto"
            >
                <ViewPanel gridRow="1/-1">
                    <p>Yout can create your own icons like this:</p>
                    <Highlight>
                        {[`<ViewGenericIcon value="..." />`].join("\n")}
                    </Highlight>
                    <p>
                        the bottom-left corner is at <code>(0,0)</code> and the
                        top-right corner is at <code>(24,24)</code>.
                    </p>
                </ViewPanel>
                <ViewInputText
                    gridColumn="2/-1"
                    value={value}
                    onChange={setValue}
                    label='Content of attribute "value":'
                />
                <ViewGenericIcon value={value} size="XL" />
                <ViewGenericIcon value={value} size="XL" type="outlined" />
            </ViewPanel>
        </ViewPanel>
    )
}
