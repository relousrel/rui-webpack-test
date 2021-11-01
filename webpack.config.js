const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   loader: 'css-loader'
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: 'css-loader',
      //       options: ''
      //     }
      //   ]
      // },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
    ],
  },
};
