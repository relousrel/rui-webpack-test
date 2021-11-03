const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "main"),
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
              importLoaders: 1,
              esModule: false
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.(png|svg|gif|jpe?g)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name].[hash:6].[ext]',
              outputPath: 'img',
              esModule: false
            }
          },
        ],
      },
    ],
  },
  mode: 'development'
};
