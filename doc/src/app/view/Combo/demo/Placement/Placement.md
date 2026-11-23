# Same height and smart placement

`<ViewCombo>`, `<ViewInputText>` and `<ViewButton>` share the same height,
given by the CSS custom property `--theme-input-height`.

To align fields with and without a `label` in the same row, use
`alignItems="flex-end"` (not `"center"`): the label sits above the field,
so it shifts the center of the box, but not its bottom.

The list opens below the combo. If there is not enough room, it opens above it,
then to the left side (bottom, then top).

Keyboard: `↓`/`↑` to move, `Home`/`End`, `PageUp`/`PageDown`,
`Enter` or `Space` to select, `Escape` to cancel, or type the first letters of an item.
