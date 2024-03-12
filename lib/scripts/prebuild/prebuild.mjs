import {
    isCapitalized,
    isDirectory,
    isFile,
    readDir,
    loadTextFile,
    saveTextFile,
    startsWith,
    stripfileExtension,
} from "./utils/fs.mjs"

async function start() {
    const view = (await readDir("src/view", isDirectory, isCapitalized)).map(
        (folder) => `export * from "./${folder}"`
    )
    console.log("Views:", view.length)
    const iconDefinitions = await listIcons()
    const iconNames = []
    for (const key of Object.keys(iconDefinitions)) {
        const name = `Icon${key
            .split(/[^a-zA-Z0-9]+/)
            .map(
                (part) =>
                    `${part.charAt(0).toLocaleUpperCase()}${part
                        .substring(1)
                        .toLocaleLowerCase()}`
            )
            .join("")}`
        iconNames.push(name)
        await saveTextFile(
            `src/view/icons/${name}.ts`,
            `/**
 * Warning!
 * This file has been generated automatically
 * from a JSON file:
 *    "./factory/icons.json"
 * 
 * You can find more icons here:
 *    https://pictogrammers.com/library/mdi/
 */
import { makeIconView } from "./factory"

const ${name} = makeIconView(
    ${JSON.stringify(iconDefinitions[key])},
    "${name}"
)
export default ${name}
`
        )
    }
    iconNames.sort()
    const icons = iconNames.map(
        (name) => `export {default as ${name}} from "./icons/${name}"`
    )
    console.log("Icons:", icons.length)
    const today = new Date()
    await saveTextFile(
        "src/view/index.ts",
        [
            `// This file has been generated on ${today.toUTCString()}`,
            ...view,
            ...icons,
        ].join("\n")
    )
}

async function listIcons() {
    const content = await loadTextFile("src/view/icons/factory/icons.json")
    return JSON.parse(content)
}

start()
