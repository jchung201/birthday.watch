const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const VENDOR_LIBS = [
  "axios",
  "mobx",
  "mobx-react",
  "mobx-state-tree",
  "moment",
  "react",
  "react-day-picker",
  "react-dom",
  "react-google-button",
  "styled-components",
];

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    bundle: path.join(__dirname, "src", "index.tsx"),
    vendor: VENDOR_LIBS,
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "public/[name].[ext]",
            },
          },
          "image-webpack-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      favicon: path.join(__dirname, "src", "public", "favicon.ico"),
    }),
  ],
};
