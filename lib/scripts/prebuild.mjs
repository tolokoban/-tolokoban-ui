import {
    isCapitalized,
    isDirectory,
    isFile,
    readDir,
    saveTextFile,
    startsWith,
    stripfileExtension,
} from "./utils/fs.mjs"

async function start() {
    const view = (await readDir("src/view", isDirectory, isCapitalized)).map(
        (folder) => `export * from "./${folder}"`
    )
    const icons = (await readDir("src/view/icons", isFile, startsWith("Icon")))
        .map(stripfileExtension)
        .map((file) => `export {default as ${file}} from "./icons/${file}"`)
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

start()
