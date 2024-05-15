import React from "react"
import {
    IconChevronDoubleLeft,
    IconChevronDoubleRight,
    IconFly,
    IconGear,
    ViewButton,
    ViewButtonProps,
    ViewPanel,
    ViewOptions,
    ViewSwitch,
} from "@tolokoban/ui"

export default function Demo() {
    const [variant, setVariant] =
        React.useState<ViewButtonProps["variant"]>("elevated")
    const [colorBase, setColorBase] = React.useState<
        "neutral" | "primary" | "secondary" | "tertiary"
    >("primary")
    const [colorLevel, setColorLevel] = React.useState<
        "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
    >("5")
    const [enabled, setEnabled] = React.useState(true)
    const [waiting, setWaiting] = React.useState(false)
    const [leftIcon, setLeftIcon] = React.useState(false)
    const [rightIcon, setRightIcon] = React.useState(false)
    return (
        <div>
            <ViewPanel display="flex" flexDirection="column" gap="S">
                <ViewOptions
                    label="Button variant"
                    value={variant}
                    onChange={setVariant}
                >
                    <div key="elevated">elevated</div>
                    <div key="filled">filled</div>
                    <div key="outlined">outlined</div>
                    <div key="text">text</div>
                </ViewOptions>
                <ViewOptions
                    label="Color base"
                    value={colorBase}
                    onChange={setColorBase}
                >
                    <div key="neutral">neutral</div>
                    <div key="primary">primary</div>
                    <div key="secondary">secondary</div>
                    <div key="tertiary">tertiary</div>
                </ViewOptions>
                <ViewOptions
                    label="Color level"
                    value={colorLevel}
                    onChange={setColorLevel}
                >
                    <div key="1">1</div>
                    <div key="2">2</div>
                    <div key="3">3</div>
                    <div key="4">4</div>
                    <div key="5">5</div>
                    <div key="6">6</div>
                    <div key="7">7</div>
                    <div key="8">8</div>
                    <div key="9">9</div>
                </ViewOptions>
                <ViewPanel
                    display="flex"
                    justifyContent="space-between"
                    flexWrap="wrap"
                >
                    <ViewSwitch value={enabled} onChange={setEnabled}>
                        Enabled
                    </ViewSwitch>
                    <ViewSwitch value={leftIcon} onChange={setLeftIcon}>
                        Left icon
                    </ViewSwitch>
                    <ViewSwitch value={rightIcon} onChange={setRightIcon}>
                        Right icon
                    </ViewSwitch>
                    <ViewSwitch value={waiting} onChange={setWaiting}>
                        Waiting
                    </ViewSwitch>
                </ViewPanel>
                <hr />
                <ViewPanel display="flex" justifyContent="space-around">
                    <ViewButton
                        variant={variant}
                        enabled={enabled}
                        waiting={waiting}
                        icon={leftIcon ? IconChevronDoubleLeft : undefined}
                        iconRight={
                            rightIcon ? IconChevronDoubleRight : undefined
                        }
                        color={`${colorBase}-${colorLevel}`}
                        onClick={() => alert("You dared... Unbelivable!!!")}
                    >
                        Click me, if you dare!
                    </ViewButton>
                    <ViewButton
                        variant={variant}
                        enabled={enabled}
                        waiting={waiting}
                        icon={leftIcon ? IconChevronDoubleLeft : undefined}
                        iconRight={
                            rightIcon ? IconChevronDoubleRight : undefined
                        }
                        color={`${colorBase}-${colorLevel}`}
                        onClick="#/view"
                    >
                        Click me, if you dare!
                    </ViewButton>
                </ViewPanel>
            </ViewPanel>
        </div>
    )
}
