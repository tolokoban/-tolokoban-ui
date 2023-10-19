import React from "react"
import {
    IconChevronDown,
    IconFly,
    IconGear,
    IconPassword,
    ViewFloatingButton,
    ViewPanel,
} from "@tolokoban/ui"

export default function Demo() {
    return (
        <ViewPanel
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            flexWrap="wrap"
            gap="M"
        >
            <ViewFloatingButton color="primary-1" icon={IconChevronDown} />
            <ViewFloatingButton color="primary-3" icon={IconChevronDown} />
            <ViewFloatingButton color="primary-5" icon={IconChevronDown} />
            <ViewFloatingButton color="primary-7" icon={IconChevronDown} />
            <ViewFloatingButton color="primary-9" icon={IconChevronDown} />
            <ViewFloatingButton
                enabled={false}
                color="primary-1"
                icon={IconChevronDown}
            />
            <ViewFloatingButton
                enabled={false}
                color="primary-3"
                icon={IconChevronDown}
            />
            <ViewFloatingButton
                enabled={false}
                color="primary-5"
                icon={IconChevronDown}
            />
            <ViewFloatingButton
                enabled={false}
                color="primary-7"
                icon={IconChevronDown}
            />
            <ViewFloatingButton
                enabled={false}
                color="primary-9"
                icon={IconChevronDown}
            />
            <ViewFloatingButton icon={IconFly} color="secondary-5" />
            <ViewFloatingButton icon={IconGear} animate />
            <ViewFloatingButton size="XS" icon={IconPassword} />
            <ViewFloatingButton size="S" icon={IconPassword} />
            <ViewFloatingButton size="M" icon={IconPassword} />
            <ViewFloatingButton size="L" icon={IconPassword} />
            <ViewFloatingButton size="XL" icon={IconPassword} />
        </ViewPanel>
    )
}
