const { type } = require("os");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { defer } = require("lodash");
const { runtime } = require("webpack");
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    watchFiles: ["src/**/*.php", "public/**/*"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      inject: "body",
      template: "./src/index.html",
      title: "development",
    }),
  ],
};
