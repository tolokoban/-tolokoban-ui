import type * as CSS from "csstype"

declare module "csstype" {
    interface Properties {
        // Allow namespaced CSS Custom Properties
        [index: `--theme-${string}` | `--custom-${string}`]: any
    }
}

declare module "*.module.css" {
    const classes: readonly { [key: string]: string }
    export = classes
}
