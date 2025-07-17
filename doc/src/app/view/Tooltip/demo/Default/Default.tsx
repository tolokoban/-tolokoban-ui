import React from "react"
import { ViewInputColor, ViewTooltip } from "@tolokoban/ui"

export default function Demo() {
    const [color, setColor] = React.useState("#f91")
    return (
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
    )
}
