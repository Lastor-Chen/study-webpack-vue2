# Study webpack4 + vue2

manual setup webpack4 and vue2

## babel

babel 7.4.0 開始棄用 `@babel/polyfill`, `@babel/preset-env` 的設定會不一樣。

使用 `browserslist` 轉譯到目標瀏覽器時, 可能需添加 plugins
- `@babel/plugin-transform-optional-chaining`, 處理 `?.`, preset-env 自帶, 但要設定
- `@babel/plugin-transform-nullish-coalescing-operator`, 處理 `??`, preset-env 自帶, 但要設定

## postcss

- 主要是為了使用 `autoprefixer` 自動添加各瀏覽器的 css 前綴，配合 `browserslist` 使用。
- webpack4 最大可使用到 `postcss-loader@4` 其對應 `postcss@7 || postcss@8`。
- webpack config 設定時, `postcss-loader` 需放在 `sass-loader` 後面 (執行順序是後到前)

## mini-css-extract-plugin vs style-loader

- `mini-css-extract-plugin` 是將 CSS 內容拆成 .css file, 用於 build
- `style-loader` 是將 CSS 內容包到 `<style>` element 中, 用於 dev
- webpack config 需區分 dev 使用 `style-loader`, prod build 使用 `mini-css-extract-plugin`

> `webpack-merge` 拆分 mode 時, 像這類 css 設定局部不同的情況, 要個別寫在 dev / prod 上, 而不能寫在 common 繼承
