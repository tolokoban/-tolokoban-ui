const Path = require("path")
const FS = require("fs")
const { rspack } = require("@rspack/core")

const Package = require("./package.json")

const config = (env) => {
    if (typeof Package.port !== "number") {
        Package.port = 1204 + Math.floor(Math.random() * (0xffff - 1024))
        FS.writeFileSync(
            Path.resolve(__dirname, "package.json"),
            JSON.stringify(Package, null, "    ")
        )
        console.log("A random port has been set for dev server:", Package.port)
    }

    const isProdMode = env.production === true
    if (isProdMode) {
        console.log("+-----------------+")
        console.log("| Production Mode |")
        console.log("+-----------------+")
    }
    return {
        cache: false,
        output: {
            clean: true,
            filename: "scr/[name].[contenthash].js",
            path: Path.resolve(__dirname, "build"),
        },
        entry: {
            app: "./src/index.tsx",
        },
        target: "web",
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".jsx", ".wasm"],
            alias: {
                "@": Path.resolve(__dirname, "src/"),
                "react/jsx-runtime": Path.resolve(
                    __dirname,
                    "/node_modules/react/jsx-runtime.js"
                ),
                "react/jsx-dev-runtime": Path.resolve(
                    __dirname,
                    "/node_modules/react/jsx-dev-runtime.js"
                ),
                react: Path.resolve(__dirname, "/node_modules/react/index.js"),
            },
        },
        devtool: isProdMode ? false : "inline-source-map",
        devServer: {
            compress: env.production,
            static: {
                directory: Path.resolve(__dirname, "./public"),
            },
            client: {
                logging: "none",
                overlay: env.production
                    ? false
                    : { errors: true, runtimeErrors: true, warnings: false },
                progress: true,
            },
            devMiddleware: {
                writeToDisk: true,
            },
            hot: true,
            open: true,
            host: "0.0.0.0",
            port: env.PORT || Package.port,
            server: "http",
        },
        stats: {
            colors: true,
            errorDetails: false,
        },
        plugins: [
            new rspack.ProgressPlugin(),
            new rspack.CopyRspackPlugin({
                patterns: [
                    {
                        from: Path.resolve(__dirname, "public"),
                        globOptions: {
                            ignore: ["**/index.html"],
                        },
                    },
                ],
            }),
            new rspack.HtmlRspackPlugin({
                template: "public/index.html",
                filename: "index.html",
                templateParameters: {
                    title: Package.name,
                    version: Package.version,
                },
                minify: isProdMode,
            }),
        ],
        performance: {
            hints: "warning",
            maxAssetSize: 300000,
            maxEntrypointSize: 200000,
            assetFilter: (filename) => {
                if (filename.endsWith(".png")) return false
                if (filename.endsWith(".map")) return false
                return true
            },
        },
        optimization: {
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true,
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                },
            },
            moduleIds: "deterministic",
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: {
                        loader: "builtin:swc-loader",
                        options: {
                            jsc: {
                                parser: {
                                    syntax: "typescript",
                                    tsx: true,
                                },
                                transform: {
                                    react: {
                                        runtime: "automatic",
                                    },
                                },
                            },
                        },
                    },
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jpe?g|gif|webp|svg)$/i,
                    type: "asset",
                    generator: {
                        filename: "img/[name].[hash][ext][query]",
                    },
                },
                {
                    test: /\.(bin|glb)$/i,
                    type: "asset",
                    generator: {
                        filename: "bin/[name].[hash][ext][query]",
                    },
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: "fnt/[name].[hash][ext][query]",
                    },
                },
                {
                    test: /\.(vert|frag|obj)$/i,
                    type: "asset/source",
                },
                {
                    test: /\.(py|txt|sh|md)$/i,
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
                                    localIdentName: isProdMode
                                        ? "[hash:base64]"
                                        : "[path][name]_[local]_[hash:base64:6]",
                                },
                            },
                        },
                    ],
                },
            ],
        },
    }
}

module.exports = config
