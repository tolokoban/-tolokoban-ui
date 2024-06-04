# @tolokoban/ui

## Documentation

[Reference and examples](https://tolokoban.github.io/-tolokoban-ui).

## Usage

To be able to compile, you must add this line at the top
of any of your `*.d.ts` files:

```ts
/// <reference path="../node_modules/@tolokoban/ui/global.d.ts" />
```

or:

```ts
import "@tolokoban/ui/global.d"
```

This is because this library uses CSS modules and custom CSS variables.

## Build and Publish

```bash
npm run build
npm run pub
```
