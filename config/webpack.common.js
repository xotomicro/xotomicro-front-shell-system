const HtmlWebpackPlugin = require("html-webpack-plugin")
const packageDependencies = require("../package.json").dependencies
const {EnvironmentPlugin} = require("webpack")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const {getAliasConfig} = require("@xotomicro/xotomicro-front-utility-registry/src/config/webpack.shared")

module.exports = {
    resolve: {
        alias: getAliasConfig(),
        extensions: [".js", ".tsx", ".jsx", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new EnvironmentPlugin({
            ...process.env,
        }),
        new ModuleFederationPlugin({
            name: "xotomicro_front_shell_system",
            filename: "remoteEntry.js",
            remotes: {
                xotomicro_front_event_service: `xotomicro_front_event_service@http://${process.env.SERVICE_URL}:7071/remoteEntry.js`,
                xotomicro_front_order_service: `xotomicro_front_order_service@http://${process.env.SERVICE_URL}:7072/remoteEntry.js`,
                xotomicro_front_product_service: `xotomicro_front_product_service@http://${process.env.SERVICE_URL}:7073/remoteEntry.js`,
                xotomicro_front_user_service: `xotomicro_front_user_service@http://${process.env.SERVICE_URL}:7074/remoteEntry.js`,
                xotomicro_front_auth_service: `xotomicro_front_auth_service@http://${process.env.SERVICE_URL}:7075/remoteEntry.js`,
                xotomicro_front_hook_system: `xotomicro_front_hook_system@http://${process.env.SERVICE_URL}:7076/remoteEntry.js`,
            },
            shared: [
                {
                    ...packageDependencies,
                },
            ],
        }),
    ],
}
