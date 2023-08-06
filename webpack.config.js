// reference
// https://juejin.cn/post/6989491439243624461
// webpack4 最高支援到 node16

const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  entry: '/src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/chunk-[id].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.png', '.gif', '.jpeg', '.jpg', '.vue'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 打包後的目錄
    open: false, // 打包完成自動打開瀏覽器
    quiet: false, // 隱藏 terminal 打包信息
    progress: true, // 顯示打包進度
    port: 3000,
    // require webpack.HotModuleReplacementPlugin
    hot: true,
    clientLogLevel: 'none',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
    }),
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  }
}