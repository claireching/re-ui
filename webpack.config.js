const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BUILD_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = env => {
    return {
        entry: SRC_DIR + "/index.js",
        output: {
            path: BUILD_DIR,
            filename: "re-ui-web.js",
            publicPath: "/",
            library: "re-ui-web",   // Important
            libraryTarget: "umd",   // Important
            umdNamedDefine: true   // Important
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules\/(?!strophe.js).*/,
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react",
                            "@babel/preset-env", {
                                "include": [
                                    "@babel/plugin-proposal-object-rest-spread",
                                    "@babel/plugin-proposal-class-properties"

                                ]
                            }
                        ]
                    },
                },
                {
                    test: /\.(sc|sa|c)ss$/,
                    use: ["style-loader", {loader: "css-loader"}, {loader: "sass-loader",}],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: "file-loader?name=images/img-[contenthash:6].[ext]&publicPath=/",

                },
                {
                    test: /\.mp3$/,
                    use: "file-loader?name=images/img-[contenthash:6].[ext]&publicPath=/",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".js", ".json", ".jsx"]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].[chunkhash:6].css",
                chunkFilename: "[id].[chunkhash:6].css",
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    ENV: JSON.stringify(env)
                },
            }),
        ],
    };
};
