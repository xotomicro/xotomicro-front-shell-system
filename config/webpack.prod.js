const { merge } = require("webpack-merge")
var path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
require("dotenv").config({ path: "node_modules/@xotomicro/xotomicro-front-utility-registry/src/global.env" })
require("dotenv").config({ path: "service.env" })
const commonConfig = require("./webpack.common")
const { getMicrofrontOutputConfig } = require("@xotomicro/xotomicro-front-utility-registry/src/config/webpack.shared")

// eslint-disable-next-line no-undef
__webpack_base_uri__ = `http://${process.env.SERVICE_URL}:${process.env.SERVICE_PORT}`

const prodConfig = {
	mode: "production",
	entry: path.resolve(process.cwd(), "src/index.ts"),
	plugins: [new CleanWebpackPlugin()],
	output: getMicrofrontOutputConfig(),
}

module.exports = merge(commonConfig, prodConfig)
