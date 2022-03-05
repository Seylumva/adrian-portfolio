const path = require("path");

module.exports = {
  devtool: "eval-source-map",
  performance: {
    maxAssetSize: 3000000,
    maxEntrypointSize: 3000000,
  },
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  resolve: {
    extensions: [".ts", "..."],
  },
};
