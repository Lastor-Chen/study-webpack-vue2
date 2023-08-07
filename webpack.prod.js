const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const commonConfig = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(), // clear dist before build
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[hash:8].css',
    }),
  ],
  module: {
    rules: [
      // css
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ]
  },
})
