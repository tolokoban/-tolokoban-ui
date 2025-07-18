import React from "react"
import {
    customizeView,
    IconArrowDown,
    IconArrowLeft,
    IconArrowRight,
    ViewInputColor,
    ViewInputText,
    ViewPanel,
    ViewSpinner,
    ViewTooltip,
} from "@tolokoban/ui"

const Flex = customizeView(ViewPanel, {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
})

export default function Demo() {
    const [name, setName] = React.useState("")
    const [color, setColor] = React.useState("#f91")
    return (
        <Flex>
            <Flex>
                <ViewTooltip content="attach = top-right" attach="top-right">
                    <IconArrowLeft size="L" />
                </ViewTooltip>
                <ViewTooltip content="attach = top" attach="top" shadow={5}>
                    <IconArrowDown size="L" />
                </ViewTooltip>
                <ViewTooltip content="attach = top-left" attach="top-left">
                    <IconArrowRight size="L" />
                </ViewTooltip>
            </Flex>
            <ViewTooltip content="top-right" attach="top-right">
                <ViewTooltip content="top-left" attach="top-left">
                    <ViewSpinner
                        orientation="vertical"
                        color="tertiary-5"
                        shadow={1}
                    >
                        All around!
                    </ViewSpinner>
                </ViewTooltip>
            </ViewTooltip>
            <ViewTooltip
                content="Please enter your name"
                color="secondary-5"
                attach="top-left"
            >
                <ViewInputText
                    value={name}
                    onChange={setName}
                    label="What's your name?"
                />
            </ViewTooltip>
            <ViewTooltip
                content={
                    <div>
                        Select your favorite{" "}
                        <b
                            style={{
                                borderBottom: `4px solid ${color}`,
                            }}
                        >
                            color
                        </b>
                        !
                    </div>
                }
            >
                <ViewInputColor
                    value={color}
                    onChange={setColor}
                    label="Color of the game"
                />
            </ViewTooltip>
        </Flex>
    )
}
