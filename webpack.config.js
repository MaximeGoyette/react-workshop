const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: process.env.WEBPACK_SERVE ? "development" : "production",
  target: "web",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader?modules!sass-loader"
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
