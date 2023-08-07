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
      // js
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // css
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      // image file
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096, // 小於限制用 url-loader 轉 base64, 否則用 file-loader
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'static/img/[name].[hash:8].[ext]',
                  esModule: false,
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/img/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      // media file
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'static/media/[name].[hash:8].[ext]',
                },
              },
            },
          },
        ],
      },
      // font
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'static/fonts/[name].[hash:8].[ext]',
                },
              },
            },
          },
        ],
      },
    ]
  }
}