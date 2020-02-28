const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = 8080
const env = process.env.NODE_ENV

module.exports = {
  publicPath: env === 'development' ? '/' : './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: env === 'development',
  productionSourceMap: false,

  devServer: {
    port: port,
    open: true
  },
  configureWebpack: config => {

  },
  chainWebpack(config) {
    config.resolve.alias
      .set('@', resolve('src'))

    config
      .when(env !== 'development',
        config => config.devtool('source-map')
      )
  }
}
