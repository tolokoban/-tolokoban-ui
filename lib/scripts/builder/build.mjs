import JSON5 from "json5"
import FS from "fs"
import Path from "path"
import Chalk from "chalk"
import Chokidar from "chokidar"
import { exec } from "child_process"
import { parseParams } from "./utils/params.mjs"
import { findModules, listRelativeImports } from "./utils/modules.mjs"

console.log(Chalk.yellowBright("+--------------------------+"))
console.log(Chalk.yellowBright("| Build Typescript Library |"))
console.log(Chalk.yellowBright("+--------------------------+"))
const params = parseParams()
const tsconfigFilename = Path.resolve(params.path, "tsconfig.json")
const tsconfig = JSON5.parse(FS.readFileSync(tsconfigFilename))
if (!tsconfig.compilerOptions.outDir) {
    throw Error(
        "You must define compilerOptions.outDir in the tsconfig.json file!"
    )
}
const outDir = Path.resolve(params.path, tsconfig.compilerOptions.outDir)
const srcDir = Path.resolve(params.path, "src")
console.log(Chalk.yellowBright("Build path"), outDir)

async function command(cmd) {
    return new Promise((resolve, reject) => {
        console.log(Chalk.cyanBright(cmd))
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                if (stdout) console.error(Chalk.redBright(stdout))
                if (stderr) console.error(Chalk.redBright(stderr))
                reject(err)
            } else {
                if (stdout) console.log(stdout)
                if (stderr) console.log(stderr)
                resolve({ stdout, stderr })
            }
        })
    })
}

async function start() {
    try {
        console.log()
        await command(`npx tsc -p "${tsconfigFilename}"`)
        const modules = await findModules(outDir)
        console.log(Chalk.yellowBright("Generated JS modules:"), modules.length)
        const setRelativeImports = new Set()
        for (const module of modules) {
            const imports = listRelativeImports(
                Path.resolve(outDir, module)
            ).map((name) => Path.relative(outDir, name))
            if (imports.length === 0) continue

            for (const imp of imports) {
                if (setRelativeImports.has(imp)) continue

                setRelativeImports.add(imp)
                const src = Path.resolve(srcDir, imp)
                const dst = Path.resolve(outDir, imp)
                console.log("copy", Chalk.whiteBright(imp))
                FS.copyFileSync(src, dst)
            }
        }
        console.log(
            Chalk.yellowBright("Extra modules:"),
            setRelativeImports.size
        )
    } catch (ex) {
        const msg = ex instanceof Error ? ex.message : JSON.stringify(ex)
        console.log()
        console.log(Chalk.redBright("Error!"))
        console.error(Chalk.bgRed.whiteBright(msg))
        console.log()
    }
    console.log()
    if (params.watch) {
        console.log(Chalk.greenBright("Waiting for file changes..."))
    }
}

await start()

let timeout = 0

if (params.watch) {
    Chokidar.watch(srcDir, {
        awaitWriteFinish: true,
    }).on("all", (event, path) => {
        if (event === "add" || event === "addDir") return

        clearTimeout(timeout)
        timeout = setTimeout(() => void start(), 200)
    })
}
