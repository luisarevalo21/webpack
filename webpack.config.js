const { type } = require("os");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { defer } = require("lodash");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
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
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      inject: "body",
      scriptLoading: "defer",
      template: "./src/index.html",
    }),
  ],
};
