/**
 * build-react-routes
 *
 * WARNING! this file has been generated automatically.
 * Please do not edit it because it will probably be overwritten.
 *
 * If you find a bug or if you need an improvement, please fill an issue:
 * https://github.com/tolokoban/build-react-routes/issues
 */
export type RoutePath =
    | "/"
    | "/api"
    | "/icons"
    | "/test"
    | "/view"
    | "/view/Button"
    | "/view/Chip"
    | "/view/Combo"
    | "/view/Dialog"
    | "/view/DragAndDrop"
    | "/view/FloatingButton"
    | "/view/InputColor"
    | "/view/InputFile"
    | "/view/InputImage"
    | "/view/InputMultiText"
    | "/view/InputNumber"
    | "/view/InputText"
    | "/view/Label"
    | "/view/Options"
    | "/view/OptionsMultiple"
    | "/view/Panel"
    | "/view/Progress"
    | "/view/Rating"
    | "/view/Read"
    | "/view/Scroll"
    | "/view/Slider"
    | "/view/Spinner"
    | "/view/Strip"
    | "/view/Switch"
    | "/view/Tabs"
    | "/view/Touchable"

export function isRoutePath(path: string): path is RoutePath {
    return ["/","/api","/icons","/test","/view","/view/Button","/view/Chip","/view/Combo","/view/Dialog","/view/DragAndDrop","/view/FloatingButton","/view/InputColor","/view/InputFile","/view/InputImage","/view/InputMultiText","/view/InputNumber","/view/InputText","/view/Label","/view/Options","/view/OptionsMultiple","/view/Panel","/view/Progress","/view/Rating","/view/Read","/view/Scroll","/view/Slider","/view/Spinner","/view/Strip","/view/Switch","/view/Tabs","/view/Touchable"].includes(path)
}

export interface RouteMatch {
    path: string
    route: RoutePath
    params: Record<string, string>
    /**
     * 0 means a perfect match.
     */
    distance: number
}
