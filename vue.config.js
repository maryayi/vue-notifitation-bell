
const fs = require('fs')

module.exports = {
  baseUrl: './',
  lintOnSave: false,
  chainWebpack: (config) => {
    // remove the old loader
    config.module.rules.delete('svg')
    config.module.rules.delete('images')
  },
  configureWebpack: {
    module: {
      rules: [{
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          'url-loader?name=assets/[name].[ext]'
        ]
      }
      ]
    }
  }
}
