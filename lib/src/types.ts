import React from "react";
import Color from "./color.js";

export type Children = React.ReactNode;

export type ThemeSize = "none" | "XS" | "S" | "M" | "L" | "XL";

export interface ViewWithValue<T> {
  value: T;
  onChange?(this: void, value: T): void;
}

export type ThemeColor = Color | string | (Color | string)[];

export interface ThemeSettingsColors {
  textLight: string;
  textDark: string;
  primary: ThemeColor;
  secondary: ThemeColor;
  tertiary: ThemeColor;
  neutral: ThemeColor;
  input: string;
  error: string;
  valid: string;
}

export type ThemeMode = "light" | "dark";

export interface ThemeSettings {
  /**
   * Colors defined at this level are shared by both modes.
   * `light` and `dark` override them for one mode only.
   *
   * Priority: built-in default for the mode < shared colors < `colors[mode]`.
   */
  colors?: Partial<ThemeSettingsColors> & {
    light?: Partial<ThemeSettingsColors>;
    dark?: Partial<ThemeSettingsColors>;
  };
  /**
   * Height shared by all the input-like components
   * (`<ViewInputText>`, `<ViewCombo>`, `<ViewButton>`, ...).
   * Exposed as the CSS custom property `--theme-input-height`.
   *
   * Default to `"calc(2em + 3px)"`.
   */
  inputHeight?: string;
  gap?: {
    XS: string;
    S: string;
    M: string;
    L: string;
    XL: string;
  };
}

export type ColorLevel = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
export type ColorAlpha = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
export type ColorBase = "neutral" | "primary" | "secondary" | "tertiary";

export type ColorName =
  | OpaqueColorName
  | `${ColorBase}-${ColorLevel}-${ColorAlpha}`
  | `on-${ColorBase}-${ColorLevel}-${ColorAlpha}`;

export type OpaqueColorName =
  | `${ColorBase}-${ColorLevel}`
  | `on-${ColorBase}-${ColorLevel}`
  | "error"
  | "on-error";

export type Gap = string | number | [vertical: string | number, horizontal: string | number];

export type Circumference =
  | Gap
  | [top: string | number, right: string | number, bottom: string | number, left: string | number];
