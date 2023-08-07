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
