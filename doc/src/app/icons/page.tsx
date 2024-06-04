import React from "react"
import {
    ViewButton,
    ViewInputText,
    ViewOptions,
    ViewPanel,
} from "@tolokoban/ui"

import { IconsMap } from "@/icons"

import Styles from "./page.module.css"

export default function PageIcons() {
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
    return (
        <ViewPanel>
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
                justifyContent="space-around"
                flexWrap="wrap"
            >
                {names.map((name) => {
                    const Icon = IconsMap[name]
                    if (!Icon) return null

                    return (
                        <ViewPanel
                            key={name}
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
        </ViewPanel>
    )
}
