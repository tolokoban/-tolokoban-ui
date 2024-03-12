export default class Color {
    readonly cssValue: string;
    private readonly color;
    static isLight(color: string | Color): boolean;
    /**
     * @param red 0.0 to 1.1
     * @param green 0.0 to 1.1
     * @param blue 0.0 to 1.1
     * @param alpha 0.0 to 1.1
     * @returns
     */
    static fromRGB(red: number, green: number, blue: number, alpha?: number): Color;
    /**
     *
     * @param lightness 0..100
     * @param chroma No upper bound, but 132 is already a maximum on most screens in 2022.
     * @param hue 0..360
     * @param alpha 0.0 to 1.0
     * @returns
     */
    static fromLCH(lightness: number, chroma: number, hue: number, alpha?: number): Color;
    static makeGradient(size: number, ...from: Array<string | Color>): Color[];
    /**
     *
     * @param from Colors
     * @param value From 0.0 to 1.0
     */
    static mix(value: number, ...from: Array<string | Color>): Color;
    constructor(cssValue: string);
    isLight(): boolean;
    get lch(): [lightness: number, chroma: number, hue: number];
    get lcha(): [
        lightness: number,
        chroma: number,
        hue: number,
        alpha: number
    ];
    get hue(): any;
    /**
     * @returns alpha value between 0.0 and 1.0
     */
    get alpha(): any;
}
