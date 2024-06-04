import React from "react"
import { ViewChip } from "@tolokoban/ui"

export default function Demo() {
    return (
        <>
            <div>
                <ViewChip label="Default Chip" />
                <ViewChip label="Removable Chip" removable />
                <ViewChip label="Colored Chip" color="primary-5" />
                <ViewChip
                    label="Shadowed Chip"
                    color="secondary-5"
                    shadow={3}
                />
                <ViewChip label="Disabled Chip" enabled={false} />
                <ViewChip label="Outlined Chip" outline />
            </div>
            <div>
                <ViewChip label="XXS sized Chip" size="XXS" />
                <ViewChip label="XS sized Chip" size="XS" />
                <ViewChip label="S sized Chip" size="S" />
                <ViewChip label="M sized Chip" size="M" />
                <ViewChip label="L sized Chip" size="L" />
                <ViewChip label="XL sized Chip" size="XL" />
                <ViewChip label="XXL sized Chip" size="XXL" />
            </div>
        </>
    )
}
