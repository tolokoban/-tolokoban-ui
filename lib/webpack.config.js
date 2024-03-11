import Path from "path"
import CircularDependencyPlugin from "circular-dependency-plugin"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const config = (env, argv) => {
    return {
        cache: false,
        entry: "./src/index.ts",
        devtool: env.production ? "source-map" : "inline-source-map",
        // experiments: {
        //     outputModule: true,
        // },
        output: {
            clean: true,
            path: Path.resolve(__dirname, "./dist"),
            filename: "index.js",
            library: "TolokobanUI",
            libraryTarget: "umd",
        },
        externals: {
            react: "React",
        },
        stats: {
            colors: true,
            errorDetails: true,
        },
        module: {
            rules: [
                {
                    test: /\.ts/,
                    use: [
                        {
                            loader: "ts-loader",
                            options: {
                                transpileOnly: false,
                                compiler: "ts-patch/compiler",
                            },
                        },
                    ],
                },
                {
                    test: /\.(vert|frag)$/i,
                    // More information here https://webpack.js.org/guides/asset-modules/
                    type: "asset/source",
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: "style-loader",
                            options: {
                                injectType: "styleTag",
                            },
                        },
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    auto: true,
                                    localIdentName: env.production
                                        ? "[hash:base64]"
                                        : "[path][name]_[local]_[hash:base64:6]",
                                },
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".tsx"],
            enforceExtension: false,
            alias: {
                "@ui": Path.resolve(__dirname, "src/"),
                // react: Path.resolve(__dirname, "node_modules/react/"),
            },
        },
        plugins: [
            new CircularDependencyPlugin({
                // exclude detection of files based on a RegExp
                exclude: /a\.js|node_modules/,
                // include specific files based on a RegExp
                // include: /dir/,
                // add errors to webpack instead of warnings
                failOnError: true,
                // allow import cycles that include an asyncronous import,
                // e.g. via import(/* webpackMode: "weak" */ './file.js')
                allowAsyncCycles: false,
                // set the current working directory for displaying module paths
                cwd: process.cwd(),
            }),
        ],
    }
}

export default config
