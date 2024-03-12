export type ColorLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export default class ClassNames {
    private signature;
    constructor();
    readonly colorPrimary: (level?: ColorLevel) => string;
    readonly colorSecondary: (level?: ColorLevel) => string;
    readonly colorTertiary: (level?: ColorLevel) => string;
    readonly colorNeutral: (level?: ColorLevel) => string;
    join(...items: unknown[]): string;
    padding(...values: Array<"none" | "XS" | "S" | "M" | "L" | "XL">): string;
    margin(...values: Array<"none" | "XS" | "S" | "M" | "L" | "XL">): string;
    display(type: "flex" | "grid"): string;
    private cls;
    private readonly init;
}
