import Color from "../color.js";
import { ThemeColor, ThemeMode, ThemeSettings, ThemeSettingsColors } from "../types.js";
import ClassNames from "./class-names.js";
import {
  ThemePreset,
  THEME_PRESET_CONTRAST,
  THEME_PRESET_DREAMY,
  THEME_PRESET_MARINE,
  THEME_PRESET_MOONLIGHT,
  THEME_PRESET_PINK_PARADISE,
  THEME_PRESET_PROFESSIONAL,
  THEME_PRESET_RAINBOW,
  THEME_PRESET_SAND,
  THEME_PRESET_SEVENTIES,
  THEME_PRESET_SOFT_LIGHT,
} from "./theme-presets.js";
import "./theme.css";

export * from "./theme-presets.js";

export * from "./styles/common.js";

export const DEFAULT_INPUT_HEIGHT = "calc(2em + 3px)";

export const DEFAULT_THEME_COLORS: ThemePreset = {
  light: {
    textLight: "#fffe",
    textDark: "#000e",
    primary: "hsl(205, 100%, 50%)",
    secondary: "hsl(39, 100%, 50%)",
    tertiary: "hsl(279, 100%, 67%)",
    // Low levels are used as backgrounds (panels, dialogs, tabs...),
    // so the ramp goes from light to dark.
    neutral: ["hsl(0 0% 90%)", "hsl(0 0% 40%)"],
    input: "#fff",
    error: "#d30",
    valid: "#0f0",
  },
  dark: {
    textLight: "#fffe",
    textDark: "#000e",
    primary: "hsl(205, 90%, 60%)",
    secondary: "hsl(39, 90%, 60%)",
    tertiary: "hsl(279, 80%, 72%)",
    // Low levels are used as backgrounds, so the ramp goes from dark to light.
    neutral: ["hsl(0 0% 40%)", "hsl(0 0% 90%)"],
    input: "#222",
    error: "#f65",
    valid: "#3e3",
  },
};

export const THEME_PRESETS: Record<string, ThemePreset> = {
  default: DEFAULT_THEME_COLORS,
  seventies: THEME_PRESET_SEVENTIES,
  marine: THEME_PRESET_MARINE,
  sand: THEME_PRESET_SAND,
  contrast: THEME_PRESET_CONTRAST,
  rainbow: THEME_PRESET_RAINBOW,
  moonlight: THEME_PRESET_MOONLIGHT,
  dreamy: THEME_PRESET_DREAMY,
  pinkParadise: THEME_PRESET_PINK_PARADISE,
  professional: THEME_PRESET_PROFESSIONAL,
  softLight: THEME_PRESET_SOFT_LIGHT,
};

type Target = HTMLElement | SVGElement;
type ThemeVars = Array<[name: string, value: string]>;
export type ThemeModeListener = (mode: ThemeMode) => void;

export class Theme {
  public static readonly classNames = new ClassNames();
  public static readonly PRESET = THEME_PRESETS;

  /** `null` means: follow the OS preference. */
  private static forcedMode: ThemeMode | null = null;
  private static readonly applied = new Map<Target, Theme>();
  private static readonly listeners = new Set<ThemeModeListener>();
  private static readonly media = globalThis.window?.matchMedia?.("(prefers-color-scheme: dark)");

  static {
    Theme.media?.addEventListener("change", () => {
      if (Theme.forcedMode === null) Theme.refresh();
    });
  }

  /**
   * Current mode. By default, it follows the user's OS preference.
   * Setting it forces the mode until `Theme.resetMode()` is called.
   */
  static get mode(): ThemeMode {
    return Theme.forcedMode ?? (Theme.media?.matches ? "dark" : "light");
  }

  static set mode(mode: ThemeMode) {
    Theme.forcedMode = mode;
    Theme.refresh();
  }

  /** `true` as long as the mode follows the OS preference. */
  static get isFollowingSystem(): boolean {
    return Theme.forcedMode === null;
  }

  /** Stop forcing a mode and follow the OS preference again. */
  static resetMode() {
    Theme.forcedMode = null;
    Theme.refresh();
  }

  /**
   * Be notified every time the mode changes,
   * or `Theme.resetMode()` is called.
   * @returns A function to unsubscribe.
   */
  static addModeListener(listener: ThemeModeListener): () => void {
    Theme.listeners.add(listener);
    return () => {
      Theme.listeners.delete(listener);
    };
  }

  /** Stop updating `element` when the mode changes. */
  static detach(element: Target) {
    Theme.applied.delete(element);
  }

  public static apply(options: ThemeSettings = {}, element?: Target) {
    const theme = new Theme(options);
    theme.apply(element);
    return theme;
  }

  private static refresh() {
    for (const [target, theme] of Theme.applied) theme.apply(target);
    const mode = Theme.mode;
    for (const listener of Theme.listeners) listener(mode);
  }

  private readonly varsByMode: Partial<Record<ThemeMode, ThemeVars>> = {};

  constructor(public readonly settings: ThemeSettings = {}) {}

  /**
   * Apply this theme to `element`, for the current `Theme.mode`.
   * The element will be updated automatically when the mode changes.
   * @param element Default to `document.body`.
   */
  apply(element?: Target) {
    const target = element ?? globalThis.window?.document.body;
    if (!target) return;

    const mode = Theme.mode;
    for (const [key, val] of this.getVars(mode)) {
      target.style.setProperty(`--theme-${key}`, val);
    }
    // Native scrollbars, form controls and default background follow.
    target.style.colorScheme = mode;
    target.dataset.themeMode = mode;
    Theme.applied.set(target, this);
  }

  /**
   * Colors actually used for `mode`, defaults included.
   */
  resolveColors(mode: ThemeMode = Theme.mode): ThemeSettingsColors {
    const { light, dark, ...shared } = this.settings.colors ?? {};
    return {
      ...DEFAULT_THEME_COLORS[mode],
      ...removeUndefined(shared),
      ...removeUndefined((mode === "dark" ? dark : light) ?? {}),
    };
  }

  private getVars(mode: ThemeMode): ThemeVars {
    return (this.varsByMode[mode] ??= this.buildVars(mode));
  }

  private buildVars(mode: ThemeMode): ThemeVars {
    const vars = new ThemeVarsBuilder();
    const { settings } = this;
    const colors = this.resolveColors(mode);
    const gap = settings.gap ?? {
      XS: ".25rem",
      S: ".5rem",
      M: "1rem",
      L: "2rem",
      XL: "4rem",
    };
    vars.add("gap-none", "0");
    vars.add("gap-XS", gap.XS);
    vars.add("gap-S", gap.S);
    vars.add("gap-M", gap.M);
    vars.add("gap-L", gap.L);
    vars.add("gap-XL", gap.XL);
    vars.add("input-height", settings.inputHeight ?? DEFAULT_INPUT_HEIGHT);
    vars.add("color-text-light", colors.textLight);
    vars.add("color-text-dark", colors.textDark);
    vars.addColor("input", colors.input);
    vars.addColor("error", colors.error);
    vars.addColor("valid", colors.valid);
    vars.addColorVars("primary", makeColors(colors.primary));
    vars.addColorVars("secondary", makeColors(colors.secondary));
    vars.addColorVars("tertiary", makeColors(colors.tertiary));
    vars.addColorVars("neutral", makeColors(colors.neutral));
    for (let shadow = 0; shadow < 10; shadow++) {
      const y = shadow;
      vars.add(`shadow-${shadow}`, `0 ${y}px ${y * 2}px #000e`);
    }
    return vars.vars;
  }
}

class ThemeVarsBuilder {
  public readonly vars: ThemeVars = [];

  /**
   * Add a new CSS custom variable.
   */
  add(name: string, value: string, alpha = 1) {
    let color = value;
    if (alpha <= 0) color = "transparent";
    else if (alpha < 1) {
      const obj = new Color(value);
      obj.A = alpha;
      color = obj.toString();
    }
    this.vars.push([name, color]);
  }

  addColor(name: string, color: string) {
    this.add(`color-${name}`, color);
    this.add(
      `color-on-${name}`,
      `var(--theme-color-text-${Color.isLight(color) ? `dark` : "light"})`,
    );
  }

  addColorVars(name: string, colors: string[]) {
    let index = 1;
    for (const color of colors) {
      this.add(`color-${name}-${index}`, color);
      for (let alpha = 1; alpha < 10; alpha++) {
        this.add(`color-${name}-${index}-${alpha}`, color, alpha / 10);
      }
      this.add(
        `color-on-${name}-${index}`,
        `var(--theme-color-text-${Color.isLight(color) ? "dark" : "light"})`,
      );
      for (let opacity = 1; opacity < 10; opacity++) {
        this.add(`color-on-${name}-${index}-${opacity}`, `var(--theme-color-on-${name}-${index})`);
      }
      index++;
    }
    this.add(`color-${name}`, `var(--theme-color-${name}-5)`);
  }
}

function removeUndefined<T extends object>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== undefined),
  ) as Partial<T>;
}

function makeColors(colorDef: ThemeColor): string[] {
  const colors: (string | Color)[] = Array.isArray(colorDef) ? [...colorDef] : [colorDef];
  if (colors.length === 0) colors.push("#fff");
  if (colors.length === 1) expandColorRange(colors);
  const output = Color.makeGradient(9, ...colors).map((color) => color.toString());
  return output;
}

function expandColorRange(colors: (string | Color)[]) {
  const [color] = colors;
  const dark = new Color(color);
  const light = new Color(color);
  const levelD = 0.3;
  const levelL = 0.2;
  dark.R *= levelD;
  dark.G *= levelD;
  dark.B *= levelD;
  light.R = 1 - levelL * (1 - light.R);
  light.G = 1 - levelL * (1 - light.G);
  light.B = 1 - levelL * (1 - light.B);
  colors.unshift(dark);
  colors.push(light);
}
