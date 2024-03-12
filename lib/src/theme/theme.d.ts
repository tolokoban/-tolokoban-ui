import { ThemeSettings } from "../types";
import ClassNames from "./class-names";
import "./theme.css";
export * from "./styles/common";
export default class Theme {
    static readonly classNames: ClassNames;
    private readonly vars;
    constructor(options?: ThemeSettings);
    /**
     * Add a new CSS custom variable.
     */
    private add;
    private addColor;
    private addColorVars;
    /**
     * Apply this theme to `element`.
     * @param element Default to `document.body`.
     */
    apply(element?: HTMLElement | SVGElement): void;
}
