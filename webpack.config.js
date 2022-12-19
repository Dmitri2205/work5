const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") mode = "production";
console.log(process.env.NODE_ENV);

const rules = [
  {
    test: /\.((c|sa|sc)ss)$/i,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          import: true,
          modules: {
            mode: "local",
            auto: true,
            exportGlobals: true,
            localIdentName: "[local]--[hash:base64:5]",
          },
        },
      },
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [
              [
                "postcss-preset-env"
              ],
            ],
          },
        },
      },
      {
        loader: "sass-loader",
      },
    ],
  },
  {
    test: /\.m?js(x?)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        // cacheDirectory: "false",
      },
    },
  },
  {
    test: /\.ts(x?)$/,
    use: "ts-loader",
    exclude: /node_modules/,
  },
  {
    test: /\.(html)$/,
    use: "html-loader",
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i,
    type: mode === "production" ? "asset" : "asset/resource", // В продакшен режиме
    // изображения размером до 8кб будут инлайнится в код
    // В режиме разработки все изображения будут помещаться в build/assets
  },
  {
    test: /\.(woff2?|eot|ttf|otf)$/i,
    type: "asset/resource",
  },
];

module.exports = () => {
  return {
    mode,
    plugins: [
      new Dotenv({
        path: "./.env",
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
    entry: "./src/index.js",
    module: { rules },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx","svg"],
      alias: {
        "components": path.resolve(__dirname, "./src/components/"),
        "styles": path.resolve(__dirname, "./src/styles/"),
        "images": path.resolve(__dirname, "./src/images/"),
        
      },
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "build"),
      assetModuleFilename: "assets/[name][hash][ext]",
    },
    devServer: {
      https: true,
      port: 8080,
      hot: true,
      historyApiFallback: true,
    },
    devtool: "inline-source-map",
  };
};
