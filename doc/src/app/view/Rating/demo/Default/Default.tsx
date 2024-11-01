import React from "react"
import {
    IconHeart,
    ViewInputNumber,
    ViewPanel,
    ViewRating,
} from "@tolokoban/ui"

export default function Demo() {
    const [value, setValue] = React.useState(3.4)
    const [value2, setValue2] = React.useState(3.4)
    return (
        <>
            <ViewPanel
                display="flex"
                justifyContent="space-around"
                flexWrap="wrap"
                gap="L"
            >
                <ViewInputNumber
                    value={value}
                    onChange={setValue}
                    label="Assessment"
                    min={0}
                    max={5}
                />
                <ViewRating
                    value={value}
                    onChange={setValue}
                    label={`${value} / 5`}
                />
                <ViewRating value={value} readOnly label="Read only" />
            </ViewPanel>
            <ViewPanel
                display="flex"
                justifyContent="space-around"
                flexWrap="wrap"
                gap="L"
            >
                <ViewRating
                    max={8}
                    value={value}
                    color="primary-5"
                    colorEdit="secondary-5"
                    onChange={setValue2}
                    label={`${value2} / 8`}
                />
                <ViewRating
                    value={value2}
                    icon={IconHeart}
                    readOnly
                    label="Fancy icons"
                    max={8}
                />
            </ViewPanel>
        </>
    )
}
