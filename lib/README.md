# @tolokoban/ui

## How to add new icons

Go to this site: <https://pictogrammers.com>

And use the content of the `d` attribute to create a file like this:

```ts
import { makeIconView } from "./factory"

const IconData = makeIconView(
    "M12 3C7.58 3 4 4...",
    "IconData"
)
export default IconData
```

Once `npm run generate` has been executed (by just building the project, for instance), the exports will be added automatically.
