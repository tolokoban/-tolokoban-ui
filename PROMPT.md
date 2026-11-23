I want to improve the `Theme` global object by taking into accout the light/dark current preferences.

So I need `Theme.mode: "light" | "dark"`. By default, it is filled with the current default user preference for ligth or dark mode.

We can read and write `Thme.mode`. And the xolors must change accordingly.

That means that we need to change `ThemeSettings` with this:

```ts
export interface ThemeSettings {
  colors?: Partial<ThemeSettingsColors> & {
    dark: Partial<ThemeSettingsColors>
    light: Partial<ThemeSettingsColors>
  };
```

How would you do this?
Show me also a default Theme with dark and light, based on the current default theme.
