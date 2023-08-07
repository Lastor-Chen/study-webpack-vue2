const path = require('node:path')
const { HotModuleReplacementPlugin } = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
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
})
