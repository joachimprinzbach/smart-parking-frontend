/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          PACKAGE_JSON: '"' + encodeURI(JSON.stringify(require('./package.json'))) + '"',
        },
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery',
      }),
    ],
  },
}